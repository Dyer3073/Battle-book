# Battle Book — standalone deployment image.
#
# Bun is required, not optional: the app's server actions run on Bun
# APIs (and the client bundle is produced by the SDK's Bun build), and
# package.json pins bun@1.3.10 as its packageManager. Node cannot run
# this app as-is.
FROM oven/bun:1.3.10
WORKDIR /app

# Dependencies first (better layer caching). The @hatch/space-sdk
# dependency is vendored at vendor/space-sdk.tgz — see README.
COPY package.json bun.lock bunfig.toml ./
COPY vendor ./vendor
RUN bun install --frozen-lockfile

# App source + the standalone host (standalone/) and migrations (drizzle/).
COPY client ./client
COPY server ./server
COPY drizzle ./drizzle
COPY standalone ./standalone
COPY tsconfig.base.json space.json icon.webp ./

# Builds the client bundle into client/dist (and bundles the server
# actions as a compile check; the host runs server/src directly).
RUN bun run build

ENV NODE_ENV=production
# SQLite lives here unless DATABASE_PATH overrides it. On Render's free
# tier this directory is ephemeral — data resets on redeploy/restart.
ENV DATABASE_PATH=/app/data/app.db
EXPOSE 3000

# Migrate (idempotent) then serve on $PORT (host.ts reads PORT).
CMD ["sh", "-c", "bun run migrate && bun run start"]
