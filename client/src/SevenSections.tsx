// Generic renderer for the seven Nov 9, 2026 addition sections —
// data lives in cool.ts / assignments.ts / evals.ts / fedjobs.ts /
// tsp.ts / parents.ts / rotc.ts, transcribed from their researched
// packs (~/workspace/military-app/<pack>/), which govern every fact,
// figure, flag, exclusion, and placement. House pattern throughout:
// hub of square tiles, per-tile search bar pinned at top, cards in
// the established shape (what it is / who it applies to / how it
// works / steps as sourced / sources / ⚠ flags printed, never
// blended), every card Binder-savable. Global Search deep-lands
// through the tiles: a hit's anchor is its tile label, its card title
// scrolls via the CardTools data-card-anchor.
//
// Track handling: the caller passes the track; tiles flagged
// memberOnly hide on the spouse track and tiles flagged spouseOnly
// show only there (the Federal Jobs spouse routing). Pinned entries
// (the Parents Red Cross card) render above the hub on every track
// the section opens for.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import type { PackEntry, PackSection, PackTable, PackTile } from "./seven";
import { HonestyLine, ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";
import { branchNamedIn } from "./branchTag";

/** Pack sections whose tiles are per-service structures (ux-reorg.md
 * §A.3): the Scope Toggle narrows the hub to universal tiles + the
 * member's service tile; other services' tiles collapse into the
 * held-back count line. COOL is Class M (the MOS router card below);
 * Assignments / Evals / Relief are Class B (Relief keeps its
 * universal Read This First tile — the Red Cross router lives there —
 * under every scope, per rule 54). */
const FILTERABLE_PACK_VIEWS = new Set(["cool", "assignments", "evals", "relief"]);
/** Pack sections that are the same for every branch (Class U): the
 * honesty line renders in the toggle's slot; no fake toggle. */
const UNIVERSAL_PACK_VIEWS = new Set([
  "fedjobs",
  "tsp",
  "chaplains",
  "honors",
  "ides",
  "clepjst",
  "housing",
  "carbuying",
  "opsec",
  "giveback",
  "rotc",
]);

/** A pack table: a real table at sm+ widths; at phone width each row
 * stacks as a labeled block so nothing scrolls sideways. */
function EntryTable({ table }: { table: PackTable }) {
  return (
    <figure className="mt-3">
      {table.caption ? (
        <figcaption className="mb-2 text-sm font-semibold text-[var(--text)]">{table.caption}</figcaption>
      ) : null}
      <div className="space-y-3 sm:hidden">
        {table.rows.map((row) => (
          <div
            key={(row[0] ?? "") + row.join("").length}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3"
          >
            <p className="font-display text-base font-bold text-[var(--text)]">{row[0]}</p>
            {table.columns.slice(1).map((col, ci) => (
              <p key={col} className="mt-1.5 text-sm text-[var(--text)]">
                <span className="font-bold">{col}: </span>
                {row[ci + 1] ?? ""}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-[var(--radius)] border border-[var(--border)] sm:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[var(--surface2)]">
              {table.columns.map((c) => (
                <th key={c} scope="col" className="px-3 py-2 align-top font-bold text-[var(--text)]">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={(row[0] ?? "") + row.join("").length} className="border-t border-[var(--border)] bg-[var(--surface)] align-top">
                {row.map((cell, ci) =>
                  ci === 0 ? (
                    <th key={table.columns[ci] ?? ci} scope="row" className="px-3 py-2 font-bold text-[var(--text)]">
                      {cell}
                    </th>
                  ) : (
                    <td key={table.columns[ci] ?? ci} className="px-3 py-2 text-[var(--text)]">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function PackEntryCard({
  entry,
  tileLabel,
  sectionKey,
}: {
  entry: PackEntry;
  tileLabel: string;
  sectionKey: string;
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{tileLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>
      <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Who it&apos;s for / when: {entry.who}</p>
      <p className="mt-2 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.body.map((p) => (
        <p key={p.slice(0, 48)} className="mt-2 text-base text-[var(--text)]">
          {p}
        </p>
      ))}
      {entry.bullets ? (
        <ul className="mt-2 space-y-2 pl-1 text-base text-[var(--text)]">
          {entry.bullets.map((b) => (
            <li key={(b.title ?? b.text).slice(0, 48)} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                {b.title ? <span className="font-bold">{b.title} — </span> : null}
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      {entry.steps ? (
        <ol className="mt-3 space-y-2 text-base text-[var(--text)]">
          {entry.steps.map((s, i) => (
            <li key={s.slice(0, 40)} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-[var(--accent-text)]"
              >
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {entry.tables?.map((t) => <EntryTable key={t.caption ?? t.columns.join("|")} table={t} />)}
      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}
      <LinkChips links={entry.links} name={entry.name} />
      <CardTools
        cardRef={{
          section: sectionKey,
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

function entrySearchText(e: PackEntry): string {
  const parts: string[] = [e.name, e.summary, e.who, ...e.body, ...e.flags];
  for (const b of e.bullets ?? []) parts.push(b.title ?? "", b.text);
  for (const s of e.steps ?? []) parts.push(s);
  for (const t of e.tables ?? []) parts.push(t.caption ?? "", ...t.columns, ...t.rows.flat());
  return parts.join(" ").toLowerCase();
}

/** The Federal Jobs mirrored eligibility checklist (pack §3). Walks
 * OPM's published criteria as questions in OPM's order; a "yes" prints
 * the pack's fixed output line naming the code — never "you are
 * eligible," never a totaled verdict, never advice on which claim to
 * file. State is local and in-flight only: nothing is stored, because
 * the checklist decides nothing. */
function PackChecklist({ section }: { section: PackSection }) {
  const cl = section.checklist;
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  if (!cl) return null;
  return (
    <section aria-label={cl.tileLabel}>
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{cl.tileLabel}</h3>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{cl.title}</h4>
        <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Who it&apos;s for / when: {cl.who}</p>
        <p className="mt-2 text-base font-semibold text-[var(--text)]">{cl.line}</p>
        <ol className="mt-4 space-y-5">
          {cl.steps.map((s, i) => {
            const ans = answers[s.id];
            return (
              <li key={s.id}>
                <p className="text-base font-semibold text-[var(--text)]">
                  {i + 1}. {s.question}
                </p>
                <p className="mt-0.5 text-sm text-[var(--text)]">{s.detail}</p>
                <div className="mt-2 flex gap-2" role="group" aria-label={`Answer question ${i + 1}`}>
                  <button
                    type="button"
                    aria-label={`Yes — ${s.question}`}
                    aria-pressed={ans === true}
                    onClick={() => setAnswers((a) => ({ ...a, [s.id]: true }))}
                    className={`min-h-11 rounded-[var(--radius)] border-2 px-5 py-2 text-sm font-bold ${
                      ans === true
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    aria-label={`No — ${s.question}`}
                    aria-pressed={ans === false}
                    onClick={() => setAnswers((a) => ({ ...a, [s.id]: false }))}
                    className={`min-h-11 rounded-[var(--radius)] border-2 px-5 py-2 text-sm font-bold ${
                      ans === false
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                    }`}
                  >
                    No
                  </button>
                </div>
                {ans === true ? (
                  <p className="mt-2 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm font-semibold text-[var(--text)]" role="status">
                    {s.code
                      ? `OPM's criteria describe this as ${s.code}. File the claim and the documents — the agency adjudicates it.`
                      : (s.yesLine ?? "")}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-base text-[var(--text)]">{cl.outro}</p>
        <CardTools
          cardRef={{
            section: section.view,
            itemKey: "eligibility-checklist",
            title: cl.title,
            summary: cl.line,
            source: "OPM Vet Guide for HR Professionals",
          }}
        />
      </article>
    </section>
  );
}

export function PackSectionView({
  section,
  focusAnchor,
  focusCard,
  track,
}: {
  section: PackSection;
  focusAnchor?: string | null;
  focusCard?: string | null;
  track?: "member" | "spouse" | "future";
}) {
  const tiles: PackTile[] = section.tiles.filter((t) => {
    if (track === "spouse") return !t.memberOnly;
    return !t.spouseOnly;
  });
  // Personalization scope (Part A): only the FILTERABLE sections
  // narrow, and only for member/spouse profiles with a branch set —
  // useSectionScope reports applicable=false on the future track, so
  // future members keep the whole section (H-4).
  const scopeState = useSectionScope(section.view);
  const filterable = FILTERABLE_PACK_VIEWS.has(section.view);
  const myBranch = scopeState.profile?.branch ?? "";
  const scoped = filterable && scopeState.applicable && scopeState.scope !== "all";
  const visibleTiles = scoped
    ? tiles.filter((t) => {
        const b = branchNamedIn(t.label);
        return b === null || b === myBranch;
      })
    : tiles;
  const heldBack = scoped
    ? tiles
        .filter((t) => {
          const b = branchNamedIn(t.label);
          return b !== null && b !== myBranch;
        })
        .reduce((n, t) => n + t.entries.length, 0)
    : 0;
  const hubTiles = [
    ...tiles.map((t) => ({ key: t.key, label: t.label, sub: t.tileSub })),
    ...(section.checklist && track !== "spouse"
      ? [{ key: section.checklist.tileKey, label: section.checklist.tileLabel, sub: section.checklist.tileSub }]
      : []),
  ];
  const gridTiles = [
    ...visibleTiles.map((t) => ({ key: t.key, label: t.label, sub: t.tileSub })),
    ...(section.checklist && track !== "spouse"
      ? [{ key: section.checklist.tileKey, label: section.checklist.tileLabel, sub: section.checklist.tileSub }]
      : []),
  ];
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = hubTiles.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      const t = tiles.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
      if ((section.pinned ?? []).some((e) => e.name === focusCard)) return null;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const q = query.trim().toLowerCase();
  const activeTile = tiles.find((t) => t.key === tile) ?? null;
  const visibleEntries = activeTile
    ? activeTile.entries.filter((e) => q === "" || entrySearchText(e).includes(q))
    : [];
  const isChecklist = section.checklist != null && tile === section.checklist.tileKey;

  return (
    <div>
      <SectionHead title={section.title} sub={section.headSub} />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{section.intro}</p>
        {section.standing ? (
          <p className="mt-2 text-sm font-semibold text-[var(--text)]">{section.standing}</p>
        ) : null}
      </div>

      {filterable ? (
        <ScopeToggle sectionKey={section.view} itemNoun="entries" heldBack={heldBack} />
      ) : UNIVERSAL_PACK_VIEWS.has(section.view) ? (
        <HonestyLine />
      ) : null}

      {tile === null ? (
        <>
          {(section.pinned ?? []).length > 0 ? (
            <div className="mb-4 space-y-3">
              {(section.pinned ?? []).map((e) => (
                <PackEntryCard key={e.id} entry={e} tileLabel="Pinned first" sectionKey={section.view} />
              ))}
            </div>
          ) : null}
          {section.view === "cool" && scopeState.profile?.mosCode && scopeState.profile.track !== "future" ? (
            <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
              <p className="font-display text-lg font-bold text-[var(--text)]">
                Your MOS on {scopeState.profile.branch} COOL — search on their site
              </p>
              <p className="mt-1 text-sm text-[var(--text)]">
                The MOS-to-credential mapping itself lives on your service&apos;s COOL site (this section ships
                the routes, by design). Open your service&apos;s tile below and search their site for exactly:{" "}
                <strong>{scopeState.profile.mosCode}</strong>
              </p>
              <button
                type="button"
                aria-label={`Open your service's COOL tile — ${scopeState.profile.branch}`}
                onClick={() => {
                  const t = tiles.find((x) => branchNamedIn(x.label) === scopeState.profile?.branch);
                  if (t) {
                    setQuery("");
                    setTile(t.key);
                  }
                }}
                className="mt-3 rounded-[var(--radius)] bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-[var(--accent-text)]"
              >
                Open your service&apos;s COOL tile →
              </button>
            </div>
          ) : null}
          <HubTileGrid
            label={`${section.title} areas`}
            onOpen={(key) => {
              setQuery("");
              setTile(key);
            }}
            tiles={gridTiles}
          />
          <ShowEverythingFooter sectionKey={section.view} heldBack={heldBack} />
        </>
      ) : isChecklist ? (
        <>
          <HubBackButton
            ariaLabel={`Back to all areas in ${section.title}`}
            text="All areas"
            onBack={() => setTile(null)}
          />
          <PackChecklist section={section} />
        </>
      ) : activeTile ? (
        <>
          <HubBackButton
            ariaLabel={`Back to all areas in ${section.title}`}
            text="All areas"
            onBack={() => setTile(null)}
          />
          <section aria-label={activeTile.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{activeTile.label}</h3>
            <HubSearch
              id={`${section.view}-search-${activeTile.key}`}
              label={`Search ${activeTile.label}`}
              ariaLabel={`Search entries in ${activeTile.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{activeTile.intro}</p>
            </div>
            {visibleEntries.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in {activeTile.label} match “{query}” — clear the search to see all {activeTile.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visibleEntries.map((e) => (
                  <PackEntryCard key={e.id} entry={e} tileLabel={activeTile.label} sectionKey={section.view} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : null}
    </div>
  );
}
