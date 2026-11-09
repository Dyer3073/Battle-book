// Standalone host for Battle Book — the smallest honest equivalent of the
// Muse Space runtime, enough to run the unmodified app outside Muse:
//
//   * serves the built client (client/dist) as static files with SPA fallback
//   * answers POST /actions with the wire protocol the app's own client
//     uses (@hatch/space-sdk/client): body { action, args, actionCallId },
//     success as 200 { data }, failure as non-200 { error }
//   * builds the per-call ctx the server actions expect:
//       ctx.db()          -> drizzle-orm over the standalone SQLite file
//                            (same libsql driver the Muse runtime uses)
//       ctx.invalidateQueries / ctx.emit -> no-ops (the Muse runtime pushes
//                            refetch signals to other open clients; a
//                            standalone server has no such channel — each
//                            client refetches on its own actions)
//       ctx.viewer        -> undefined (sign-in in this app is the app's own
//                            simulated profile picker; no action reads the
//                            host viewer)
//       ctx.tool.*        -> unavailable: throws a clear error. Only the
//                            refreshNews action uses web search, and it
//                            tolerates per-query failures, so the feed
//                            simply stays at its seeded stories.
//       ctx.inference     -> unavailable: throws. refreshNews catches this
//                            and skips distillation, exactly as it does
//                            when inference fails inside Muse.
//       ctx.agent / ctx.blobs / ctx.executePrivileged -> unavailable stubs;
//                            no action in this app uses them.
//
// Run `bun run migrate` first (the Docker CMD does). The host refuses
// nothing if the DB is empty — actions create rows lazily — but tables
// must exist, hence migrations.

import { existsSync, statSync } from "node:fs";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { openDb } from "./db";
import { Actions } from "../server/src/actions";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDist = join(root, "client", "dist");
const port = Number(process.env.PORT ?? 3000);

const db = openDb();

const unavailable =
  (what: string) =>
  async (): Promise<never> => {
    throw new Error(
      `${what} is not available in the standalone deployment (it is a Muse runtime service).`,
    );
  };

function buildCtx() {
  return {
    slug: "military-app",
    invocationId: crypto.randomUUID(),
    spaceDir: root,
    db: () => db,
    viewer: undefined,
    blobs: {
      put: unavailable("ctx.blobs"),
      getUrl: unavailable("ctx.blobs"),
      delete: unavailable("ctx.blobs"),
      head: unavailable("ctx.blobs"),
      list: unavailable("ctx.blobs"),
    },
    agent: new Proxy(
      {},
      { get: (_t, prop) => (typeof prop === "string" ? unavailable(`ctx.agent.${prop}`) : undefined) },
    ),
    inference: { complete: unavailable("ctx.inference") },
    tool: new Proxy(
      {},
      { get: (_t, prop) => (typeof prop === "string" ? unavailable(`ctx.tool.${prop}`) : undefined) },
    ),
    emit: () => {},
    invalidateQueries: () => {},
    executePrivileged: unavailable("ctx.executePrivileged"),
  };
}

type ActionDef = {
  request: { parseAsync: (v: unknown) => Promise<unknown> };
  response: { parseAsync: (v: unknown) => Promise<unknown> };
  handler: (ctx: unknown, args: unknown) => Promise<unknown>;
};

const actions = Actions as unknown as Record<string, ActionDef>;

async function handleAction(req: Request): Promise<Response> {
  let body: { action?: unknown; args?: unknown };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return Response.json({ error: "request body must be JSON" }, { status: 400 });
  }
  const name = typeof body.action === "string" ? body.action : "";
  const def = actions[name];
  if (!def || typeof def.handler !== "function") {
    return Response.json({ error: `unknown action: ${name || "(missing)"}` }, { status: 404 });
  }
  let args: unknown;
  try {
    args = await def.request.parseAsync(body.args ?? {});
  } catch (err) {
    return Response.json(
      { error: `invalid arguments for action ${name}: ${err instanceof Error ? err.message : String(err)}` },
      { status: 400 },
    );
  }
  try {
    const result = await def.handler(buildCtx(), args);
    const data = await def.response.parseAsync(result);
    return Response.json({ data });
  } catch (err) {
    console.error(`action ${name} failed:`, err);
    return Response.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function serveStatic(pathname: string): Response | null {
  const rel = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(clientDist, rel);
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return new Response(Bun.file(filePath), {
      headers: { "content-type": MIME[extname(filePath)] ?? "application/octet-stream" },
    });
  }
  return null;
}

if (!existsSync(join(clientDist, "index.html"))) {
  console.error("client/dist/index.html missing — run `bun run build` first.");
  process.exit(1);
}

Bun.serve({
  port,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/healthz") return Response.json({ ok: true });
    if (req.method === "POST" && (url.pathname === "/actions" || url.pathname.endsWith("/actions"))) {
      return handleAction(req);
    }
    if (req.method === "GET" || req.method === "HEAD") {
      const file = serveStatic(url.pathname);
      if (file) return file;
      // SPA fallback: every non-file route gets the app shell.
      return new Response(Bun.file(join(clientDist, "index.html")), {
        headers: { "content-type": MIME[".html"] },
      });
    }
    return new Response("method not allowed", { status: 405 });
  },
});

console.log(`Battle Book standalone host listening on http://0.0.0.0:${port}`);
