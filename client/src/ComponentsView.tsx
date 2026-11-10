// Switching Components (Active ⇄ Reserve) — rendered from
// components.ts (the researched components pack is the content source
// of truth). Hub of square tiles per the house pattern: the coverage
// matrix sits on the hub landing, and each tile opens to its entry
// list with its own search bar pinned at top. Open to member profiles
// in full, and to spouse profiles in full as a family-decision
// reference; future-member profiles see a locked card only (the view
// never renders in the future shell and the section is excluded from
// future search and Buddy scopes).
//
// Flags render as visible ⚠ SOURCE FLAG boxes, never blended.
// Cross-links route into the app's existing sections (Switch
// Branches, Guard & Reserve Hub, Retirement Hub, and the rest) —
// this section carries the pack's summaries only and duplicates
// nothing. Cross-link buttons render only for targets the current
// track actually opens (availableViews), so no button dead-ends.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";
import { branchNamedIn } from "./branchTag";
import { anchorSlug } from "./paths";
import {
  BEFORE_YOU_SIGN,
  CHECKLIST_INTRO,
  CHECKLIST_TILE,
  CHECKLIST_TITLE,
  CHECKLIST_WHO,
  COMPONENTS_INTRO,
  COMPONENTS_STANDING,
  COMPONENT_TILES,
  COVERAGE_MATRIX,
  PROGRAMS_NAMED_LINE,
  type CompCrossLink,
  type CompEntry,
  type CompViewKey,
} from "./components";

const ALL_TILES = [
  ...COMPONENT_TILES.map((t) => ({ key: t.key, label: t.label, sub: t.tileSub })),
  { key: CHECKLIST_TILE.key, label: CHECKLIST_TILE.label, sub: CHECKLIST_TILE.tileSub },
];

function entrySearchText(e: CompEntry): string {
  const parts: string[] = [e.name, e.summary, e.who, ...e.body, ...e.flags];
  for (const b of e.bullets ?? []) parts.push(b.title ?? "", b.text);
  return parts.join(" ").toLowerCase();
}

function CrossLinkButtons({
  links,
  go,
  availableViews,
}: {
  links: readonly CompCrossLink[];
  go?: (v: CompViewKey) => void;
  availableViews?: readonly string[];
}) {
  const visible = links.filter((l) => !availableViews || availableViews.includes(l.view));
  if (!go || visible.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {visible.map((l) => (
        <button
          key={l.view + l.label}
          type="button"
          aria-label={l.label}
          onClick={() => go(l.view)}
          className="min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
        >
          {l.label} →
        </button>
      ))}
    </div>
  );
}

function CompEntryCard({
  entry,
  tileLabel,
  go,
  availableViews,
}: {
  entry: CompEntry;
  tileLabel: string;
  go?: (v: CompViewKey) => void;
  availableViews?: readonly string[];
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{tileLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>
      <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Who it&apos;s for / when: {entry.who}</p>
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
      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}
      <LinkChips links={entry.links} name={entry.name} />
      {entry.crossLinks ? <CrossLinkButtons links={entry.crossLinks} go={go} availableViews={availableViews} /> : null}
      <CardTools
        cardRef={{
          section: "components",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

function CoverageMatrix() {
  return (
    <section aria-label="Coverage matrix" className="mb-5">
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Coverage matrix — at a glance</h3>
      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[var(--surface2)]">
              <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Branch</th>
              <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Active → Reserve/Guard</th>
              <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Reserve/Guard → Active</th>
            </tr>
          </thead>
          <tbody>
            {COVERAGE_MATRIX.map((r) => (
              <tr key={r.branch} className="border-t border-[var(--border)] bg-[var(--surface)] align-top">
                <th scope="row" className="px-3 py-2 font-bold text-[var(--text)]">{r.branch}</th>
                <td className="px-3 py-2 text-[var(--text)]">{r.acToRc}</td>
                <td className="px-3 py-2 text-[var(--text)]">{r.rcToAc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-[var(--dim)]">{PROGRAMS_NAMED_LINE}</p>
    </section>
  );
}

export function ComponentsView({
  focusAnchor,
  focusCard,
  go,
  availableViews,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  go?: (v: CompViewKey) => void;
  availableViews?: readonly string[];
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = ALL_TILES.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      if (focusCard === CHECKLIST_TITLE) return CHECKLIST_TILE.key;
      const t = COMPONENT_TILES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  // Personalization scope (rule 18, Class B): the direction tiles
  // stay; inside them, entries naming another branch are held back.
  // The Landscape tile and the Before You Sign checklist are
  // universal and never filtered. Entries naming two services (or
  // none) stay visible — branchNamedIn returns null for them.
  const scopeState = useSectionScope("components");
  const myBranch = scopeState.profile?.branch ?? "";
  const scoped = scopeState.applicable && scopeState.scope === "mine";
  const inScope = (name: string): boolean => {
    if (!scoped) return true;
    const b = branchNamedIn(name);
    return b === null || b === myBranch;
  };
  const heldBack = scoped
    ? COMPONENT_TILES.reduce(
        (n, t) => n + t.entries.filter((e) => !inScope(e.name) && t.key !== "landscape").length,
        0,
      )
    : 0;

  const q = query.trim().toLowerCase();
  const activeTile = COMPONENT_TILES.find((t) => t.key === tile) ?? null;
  const visibleEntries = activeTile
    ? activeTile.entries.filter(
        (e) => (activeTile.key === "landscape" || inScope(e.name) || e.name === focusCard) && (q === "" || entrySearchText(e).includes(q)),
      )
    : [];
  const visibleChecklist = BEFORE_YOU_SIGN.filter(
    (item) => q === "" || `${item.title} ${item.text}`.toLowerCase().includes(q),
  );

  return (
    <div>
      <SectionHead
        title="Switching Components"
        sub="Active ⇄ Reserve, in both directions and every branch — the named programs and counseling doors as the services publish them, what carries over when you move, and the 10-item checklist to work before you sign. Flags print as flags; live quotas, windows, and figures live at the official sources each entry links."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{COMPONENTS_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{COMPONENTS_STANDING}</p>
      </div>

      <ScopeToggle sectionKey="components" itemNoun="entries" heldBack={heldBack} />
      {tile === null ? (
        <>
          <CoverageMatrix />
          <HubTileGrid
            label="Switching Components areas"
            onOpen={(key) => {
              setQuery("");
              setTile(key);
            }}
            tiles={ALL_TILES}
          />
          <ShowEverythingFooter sectionKey="components" heldBack={heldBack} />
        </>
      ) : tile === CHECKLIST_TILE.key ? (
        <>
          <HubBackButton
            ariaLabel="Back to all areas in Switching Components"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <section aria-label={CHECKLIST_TILE.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{CHECKLIST_TILE.label}</h3>
            <HubSearch
              id="components-search-checklist"
              label="Search the checklist"
              ariaLabel="Search items in the Before You Sign checklist"
              value={query}
              onChange={setQuery}
              placeholder="Search these items…"
            />
            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <h4 className="font-display text-lg font-bold text-[var(--text)]">{CHECKLIST_TITLE}</h4>
              <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Who it&apos;s for / when: {CHECKLIST_WHO}</p>
              <p className="mt-2 text-base text-[var(--text)]">{CHECKLIST_INTRO}</p>
              {visibleChecklist.length === 0 ? (
                <p className="mt-3 text-base text-[var(--dim)]">
                  No checklist items match “{query}” — clear the search to see all {BEFORE_YOU_SIGN.length}.
                </p>
              ) : (
                <ol className="mt-3 space-y-4">
                  {visibleChecklist.map((item) => (
                    <li key={item.n} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--surface2)] text-sm font-bold text-[var(--accent-word)]"
                      >
                        {item.n}
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-[var(--text)]">
                          {item.n}. {item.title}
                        </span>
                        <span className="mt-0.5 block text-base text-[var(--text)]">{item.text}</span>
                        {item.crossLinks ? (
                          <CrossLinkButtons links={item.crossLinks} go={go} availableViews={availableViews} />
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
              <CardTools
                cardRef={{
                  section: "components",
                  itemKey: "before-you-sign-checklist",
                  title: CHECKLIST_TITLE,
                  summary: CHECKLIST_INTRO,
                  source: "The counseling frames the official pages in this section use",
                }}
              />
            </article>
          </section>
        </>
      ) : activeTile ? (
        <>
          <HubBackButton
            ariaLabel="Back to all areas in Switching Components"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <section aria-label={activeTile.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{activeTile.label}</h3>
            <HubSearch
              id={`components-search-${activeTile.key}`}
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
                  <CompEntryCard key={e.id} entry={e} tileLabel={activeTile.label} go={go} availableViews={availableViews} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : null}
    </div>
  );
}
