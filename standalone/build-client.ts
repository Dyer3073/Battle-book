// Standalone client builder.
//
// Inside Muse, client/build.mjs calls the SDK's buildClient(), which
// refuses to run outside the Muse artifact pipeline (by design — it
// protects the *published* artifact from hand builds). For the standalone
// deployment we reproduce the exact same Bun.build() configuration the
// SDK uses (entry, outdir, production define, asset naming, tailwind
// plugin, the bare-asset-URL re-prefixing, and the pdf.js asset copy) so
// the bundle that ships to Render is the bundle the app was built with.
// The SDK guard itself is left untouched and client/build.mjs is not
// used by this deployment.

import { cp, rm } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindPlugin from "bun-plugin-tailwind";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRY = join(root, "client", "index.html");
const OUTDIR = join(root, "client", "dist");
const PDFJS_ASSET_ROOT = "./assets/pdfjs/";

if (typeof Bun === "undefined" || typeof Bun.build !== "function") {
  throw new Error("build-client must run under Bun");
}

await rm(OUTDIR, { force: true, recursive: true });
const result = await Bun.build({
  entrypoints: [ENTRY],
  outdir: OUTDIR,
  minify: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  naming: {
    asset: "assets/[name]-[hash].[ext]",
    chunk: "assets/[name]-[hash].[ext]",
    entry: "[name].[ext]",
  },
  plugins: [tailwindPlugin],
});
if (!result.success) {
  for (const log of result.logs) console.error(log);
  throw new Error("client build failed; see logged diagnostics");
}

// Same fix-up as the SDK build: Bun emits imported-asset URLs as bare
// `./<file>` while writing the files under `assets/`; re-prefix them.
const assetFiles = result.outputs
  .filter((output) => output.kind === "asset")
  .map((output) => basename(output.path));
let needsPdfjsAssets = false;
for (const output of result.outputs) {
  if (!/\.(js|css|html)$/.test(output.path)) continue;
  let text = await output.text();
  needsPdfjsAssets ||= text.includes(PDFJS_ASSET_ROOT);
  let changed = false;
  for (const name of assetFiles) {
    const bare = `./${name}`;
    if (text.includes(bare)) {
      text = text.split(bare).join(`./assets/${name}`);
      changed = true;
    }
  }
  if (changed) await Bun.write(output.path, text);
}
if (needsPdfjsAssets) {
  const sdkDir = join(root, "node_modules", "@hatch", "space-sdk", "dist");
  await cp(join(sdkDir, "pdfjs-assets"), join(OUTDIR, "assets", "pdfjs"), {
    recursive: true,
  });
}

console.log(`client built -> ${OUTDIR} (${result.outputs.length} outputs)`);
