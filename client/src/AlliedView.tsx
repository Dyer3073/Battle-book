// Allied Special Forces — rendered from allied.ts (the researched
// specops-allied pack is the content source of truth). Sibling area to
// Special Forces & Elite Units, in the same hub pattern: a hub of
// square tiles — one per country, in Partner Forces order — each tile
// opening to that country's entry list with its own search bar pinned
// at top. Open to member and future-member tracks (future members see
// the same entries as aspirational reference — the only application
// routes shown are the published recruiting routes the entries
// themselves print); spouse profiles see this section only as a
// locked card, consistent with Special Forces & Elite Units.
//
// Entry shape (every entry, the U.S. SOF card shape): WHAT IT IS,
// WHO CAN APPLY, SELECTION / ENTRY STANDARDS (numbers only where
// officially published), TRAINING PIPELINE (named phases + published
// durations only), SOURCES (the pack's official URLs), and ⚠ flags
// rendered per source via FlagBox — never blended. The level badge
// (OPEN / PARTIAL / SILENT / NOT VERIFIED / GAP) and the language
// label render uniformly on every card.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import {
  ALLIED_COUNTRIES,
  ALLIED_INTRO,
  ALLIED_STANDING,
  type AlliedEntry,
  type AlliedTable,
} from "./allied";

function entrySearchText(e: AlliedEntry): string {
  const parts: string[] = [e.name, e.summary, e.what, e.who, e.levelLabel, ...e.quals, ...e.flags];
  if (e.langLabel) parts.push(e.langLabel);
  for (const t of e.tables ?? []) {
    parts.push(t.caption, ...t.headers, ...t.rows.flat());
  }
  for (const s of e.pipeline) parts.push(s.name, s.detail);
  if (e.pipelineIntro) parts.push(e.pipelineIntro);
  for (const s of e.sources) parts.push(s.label, s.url);
  return parts.join(" ").toLowerCase();
}

function AlliedTableView({ table }: { table: AlliedTable }) {
  return (
    <figure className="mt-3">
      <div className="overflow-x-auto rounded-[var(--radius)] border border-[var(--border)]">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[var(--surface2)]">
              {table.headers.map((h) => (
                <th key={h} scope="col" className="px-3 py-2 font-bold text-[var(--text)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r.join("|")} className="border-t border-[var(--border)] bg-[var(--surface)]">
                {r.map((cell, i) => (
                  <td key={i} className={`px-3 py-2 text-[var(--text)] ${i > 0 ? "font-bold" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-1 text-xs text-[var(--dim)]">{table.caption}</figcaption>
    </figure>
  );
}

function AlliedEntryCard({ entry, countryLabel }: { entry: AlliedEntry; countryLabel: string }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{countryLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>
      <p className="mt-2">
        <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--accent-word)]">
          {entry.levelLabel}
        </span>
      </p>
      {entry.langLabel ? <p className="mt-1.5 text-xs text-[var(--dim)]">{entry.langLabel}</p> : null}

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHAT IT IS</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.what}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHO CAN APPLY</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.who}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">
        SELECTION / ENTRY STANDARDS — AS THE OFFICIAL PAGE PUBLISHES THEM
      </h5>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
        {entry.quals.map((q) => (
          <li key={q.slice(0, 60)}>{q}</li>
        ))}
      </ul>
      {(entry.tables ?? []).map((t) => (
        <AlliedTableView key={t.caption.slice(0, 40)} table={t} />
      ))}

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">TRAINING PIPELINE</h5>
      {entry.pipelineIntro ? <p className="mt-1 text-sm text-[var(--text)]">{entry.pipelineIntro}</p> : null}
      <ol className="mt-2 space-y-2">
        {entry.pipeline.map((s, i) => (
          <li key={s.name} className="flex gap-3">
            <span
              aria-hidden="true"
              className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--surface2)] text-sm font-bold text-[var(--accent-word)]"
            >
              {i + 1}
            </span>
            <span>
              <span className="block text-base font-semibold text-[var(--text)]">{s.name}</span>
              <span className="block text-sm text-[var(--text)]">{s.detail}</span>
            </span>
          </li>
        ))}
      </ol>

      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}

      {entry.sources.length > 0 ? (
        <>
          <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">SOURCES</h5>
          <ul className="mt-1 space-y-1">
            {entry.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open source: ${s.label}`}
                  className="text-sm font-semibold break-words text-[var(--accent-word)] underline"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <CardTools
        cardRef={{
          section: "alliedsf",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function AlliedView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const c = ALLIED_COUNTRIES.find((x) => anchorSlug(x.label) === slug);
      if (c) return c.key;
    }
    if (focusCard) {
      const c = ALLIED_COUNTRIES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (c) return c.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const country = ALLIED_COUNTRIES.find((c) => c.key === tile) ?? null;
  const q = query.trim().toLowerCase();
  const visible = country
    ? country.entries.filter((e) => q === "" || entrySearchText(e).includes(q))
    : [];

  return (
    <div>
      <SectionHead
        title="Allied Special Forces"
        sub="The special operations forces of the 17 Partner Forces countries, in Partner Forces order — what each unit is as its own government presents it, who can apply as published, selection and entry standards only where officially published, and each pipeline by named phases and published durations. Flags render per source, never blended."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{ALLIED_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{ALLIED_STANDING}</p>
      </div>

      {tile === null || !country ? (
        <HubTileGrid
          label="Allied Special Forces — countries"
          onOpen={(key) => {
            setQuery("");
            setTile(key);
          }}
          tiles={ALLIED_COUNTRIES.map((c) => ({
            key: c.key,
            label: c.label,
            sub: c.tileSub,
          }))}
        />
      ) : (
        <>
          <HubBackButton
            ariaLabel="Back to all countries in Allied Special Forces"
            text="All countries"
            onBack={() => setTile(null)}
          />
          <section aria-label={country.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{country.label}</h3>
            <HubSearch
              id={`allied-search-${country.key}`}
              label={`Search ${country.label} entries`}
              ariaLabel={`Search entries in ${country.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{country.intro}</p>
            </div>
            {visible.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in {country.label} match “{query}” — clear the search to see all {country.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visible.map((e) => (
                  <AlliedEntryCard key={e.id} entry={e} countryLabel={country.label} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
