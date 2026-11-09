# Battle Book — Military Life (standalone deployment package)

Battle Book is a full-stack web app for service members and veterans:
a cross-branch MOS/rating/AFSC library, benefits / pay / PCS / claims /
retirement reference sections, guided paths with deadline countdowns,
squad check-ins with invite-code claiming, war stories, a wall of honor,
mentors, and a verified-sources news feed.

This directory is a **deployable copy** of the app that normally lives as
a Muse web artifact (`ts-spaces/military-app` in the Muse workspace),
packaged to run on Render exactly the way the Open Season app was
deployed before it: a Docker web service built from this repo.

Nothing here is the live artifact's data — the deployment starts from a
**fresh, empty database** created by the app's own migrations. The app's
news feed re-seeds itself with its built-in starter stories on first
read; everything else (profiles, squads, stories, tributes) starts empty
by design.

## How Render deploys it

`render.yaml` is a Render Blueprint:

- **Service:** one web service, `battle-book`, `runtime: docker`,
  `plan: free`.
- **Build:** Render builds the included `Dockerfile` (base
  `oven/bun:1.3.10` — Bun is required: the server actions run on Bun and
  `package.json` pins `bun@1.3.10` as package manager; Node cannot run
  this app as-is).
- **Start:** the container runs `bun run migrate` (idempotent — applies
  any unapplied files from `drizzle/`) and then `bun run start`, which
  serves the built client and the action API on `$PORT` (Render sets
  `PORT`; default 3000 locally).

To deploy: put this directory in a GitHub repo, then in Render choose
**New → Blueprint** and point it at the repo (or create a Docker web
service from it directly — `render.yaml` just pre-fills the settings).

### ⚠ Free-tier data reset caveat

Render's free web services have an **ephemeral filesystem** and this
package deliberately attaches **no persistent disk** (same trade-off as
the Open Season deployment). Every restart, redeploy, or spin-down
**wipes the SQLite database** — profiles, squads, check-ins, submitted
stories, all of it — and the app starts fresh from its migrations and
seed stories. That is acceptable for sharing the app for feedback; it is
not acceptable for real members' data. To keep data, either upgrade the
service and attach a Render disk mounted at `/app/data` (the commented
block in `render.yaml`, ~1 GB is plenty), or move the database to a
hosted service later.

## Environment variables

| Variable        | Default         | Purpose                                             |
| --------------- | --------------- | --------------------------------------------------- |
| `PORT`          | `3000`          | Port the server listens on. Render sets this itself. |
| `DATABASE_PATH` | `./data/app.db` | SQLite file location. `render.yaml` sets it to `/app/data/app.db`. |
| `NODE_ENV`      | —               | Set to `production` by the Dockerfile.              |

No secrets or API keys are required.

## Running locally

```bash
bun install
bun run build        # builds client/dist and bundles the server actions
DATABASE_PATH=./data/app.db bun run migrate
bun run start        # http://localhost:3000
```

## What had to change to run outside Muse

The app code itself (`client/`, `server/`, `drizzle/`) is **unmodified**
from the Muse artifact. Everything Muse-specific lives outside it,
in `standalone/`, `vendor/`, and the packaging files:

1. **Vendored SDK** — the app depends on `@hatch/space-sdk`, which the
   Muse install provides from a path inside the Muse installation.
   The exact tarball the app was built against is vendored at
   `vendor/space-sdk.tgz`, and `package.json` points at it
   (`file:./vendor/space-sdk.tgz`). One dependency was added:
   `@libsql/client` (the driver under the drizzle DB handle the SDK
   types describe; it was already a peer of the SDK).
2. **Standalone host** (`standalone/host.ts`) — the smallest honest
   equivalent of the Muse Space runtime: it serves `client/dist`,
   answers `POST /actions` in the app's own RPC wire format
   (`{action, args}` → `{data}` / `{error}`, with the same zod
   request/response validation the Muse worker performs), and builds
   the per-call `ctx`:
   - `ctx.db()` → drizzle over the local SQLite file (same libsql
     driver Muse uses).
   - `ctx.invalidateQueries` / `ctx.emit` → no-ops. Muse pushes refetch
     signals to other open clients; standalone has no such channel, so
     each client simply refetches on its own actions. No data is lost —
     cross-client live push is the only thing given up.
   - `ctx.viewer` → unset. Sign-in is the app's own (simulated) profile
     picker; no action reads the host viewer.
   - `ctx.tool.*` (web search) and `ctx.inference` → **unavailable**:
     they throw a clear error. Only `refreshNews` uses them, and it was
     written to tolerate exactly this: search failures are skipped per
     query and a failed distillation just adds nothing, so the action
     returns `{added: 0, ok: true}` and the feed keeps its seeded
     stories. Consequence: **the news feed does not refresh itself
     standalone** — inside Muse a daily cron calls `refreshNews`; here
     there is no cron and no search/inference service behind it. The
     `managedCronJobs` entry in `space.json` is metadata from the Muse
     runtime and does nothing in this deployment.
   - `ctx.agent`, `ctx.blobs`, `ctx.executePrivileged` → unavailable
     stubs; no action in this app uses them.
3. **Client builder** (`standalone/build-client.ts`) — the SDK's
   `buildClient()` refuses to run outside the Muse artifact pipeline
   (a guard that protects the *published* artifact; it is left fully
   intact, and `client/build.mjs` is unused here). The standalone
   builder reproduces that function's exact `Bun.build()` configuration
   — entry, outdir, production define, asset naming, tailwind plugin,
   asset-URL fix-up, pdf.js asset copy — so the shipped bundle is the
   bundle the app was built with.
4. **Migrations** (`standalone/migrate.ts`) — Muse applies `drizzle/*.sql`
   itself; the standalone runner applies them in filename order against
   `DATABASE_PATH`, recording applied files in a `__bb_migrations` table
   so it is safe to run on every boot.

`space.json` is kept because it ships with the app source; standalone
only reads `client/dist` + `server/src` + `drizzle/`, so it is
informational here.

## Layout

```
client/            React client source (built to client/dist)
server/            Server actions + drizzle schema source
drizzle/           SQL migrations 0001–0011 (source of DB truth)
standalone/        Host, migrator, client builder, DB plumbing (new)
vendor/            space-sdk.tgz — the SDK build the app was made against
Dockerfile         oven/bun image: install → build → migrate → serve
render.yaml        Render Blueprint (docker, free plan, no disk)
```

## Verified before packaging

Locally, from this directory, against a fresh temp database: frozen
lockfile install, full build, all 11 migrations applied (and re-run as a
no-op), server boot, homepage HTML + client bundle + brand assets
served, and live action round-trips — `getProfile` (null on empty DB),
`saveProfile` → `getProfile` returning the saved profile, `getNews`
seeding and returning starter stories, `createSquad` issuing an invite
code, `refreshNews` degrading gracefully to `{added: 0, ok: true}`
without Muse's search/inference services, and 404/400 handling for
unknown/invalid action calls.
