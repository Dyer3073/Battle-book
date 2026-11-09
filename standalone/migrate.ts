// Applies the app's Drizzle migrations (drizzle/*.sql, in filename order)
// to the standalone SQLite file, creating it fresh if it does not exist.
//
// The Muse runtime applies these migrations itself; standalone we do the
// same job with bun:sqlite directly. Applied files are recorded in a
// __bb_migrations table so re-running is a no-op — safe on every boot,
// which matters on hosts (Render free tier) that restart the process
// against whatever disk state survived.

import { Database } from "bun:sqlite";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";
import { databasePath } from "./db";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = join(root, "drizzle");
const path = databasePath();

mkdirSync(dirname(path), { recursive: true });
const sqlite = new Database(path, { create: true });
sqlite.exec("PRAGMA journal_mode = WAL;");
sqlite.exec(
  "CREATE TABLE IF NOT EXISTS __bb_migrations (name TEXT PRIMARY KEY, applied_at INTEGER NOT NULL);",
);

const applied = new Set(
  sqlite.query("SELECT name FROM __bb_migrations").all().map((r: any) => r.name as string),
);

const files = readdirSync(migrationsDir)
  .filter((f) => f.endsWith(".sql"))
  .sort();

let count = 0;
for (const file of files) {
  if (applied.has(file)) continue;
  const sql = readFileSync(join(migrationsDir, file), "utf8");
  const statements = sql
    .split(/-->\s*statement-breakpoint/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  sqlite.exec("BEGIN");
  try {
    for (const stmt of statements) sqlite.exec(stmt);
    sqlite
      .query("INSERT INTO __bb_migrations (name, applied_at) VALUES (?, ?)")
      .run(file, Date.now());
    sqlite.exec("COMMIT");
  } catch (err) {
    sqlite.exec("ROLLBACK");
    sqlite.close();
    throw new Error(`Migration ${file} failed: ${err instanceof Error ? err.message : String(err)}`);
  }
  count++;
  console.log(`applied ${file} (${statements.length} statements)`);
}

sqlite.close();
console.log(
  count === 0
    ? `migrations up to date (${files.length} files) — ${path}`
    : `applied ${count} migration(s) — ${path}`,
);
