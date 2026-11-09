// Shared standalone-host plumbing: where the SQLite file lives and how
// to open it. The Muse runtime keeps the app's DB in its own workspace;
// standalone, the path comes from DATABASE_PATH (default ./data/app.db).

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

export function databasePath(): string {
  return resolve(process.env.DATABASE_PATH ?? "./data/app.db");
}

export function openDb() {
  const path = databasePath();
  mkdirSync(dirname(path), { recursive: true });
  const client = createClient({ url: `file:${path}` });
  return drizzle(client);
}
