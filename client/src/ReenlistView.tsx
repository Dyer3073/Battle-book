// Reenlistment & IRR — rendered from reenlist.ts (the researched
// pack, ~/workspace/military-app/reenlist/reenlist-irr.md, is the
// content source of truth). Hub of square tiles per the house
// pattern: each tile opens to its entry list with its own search bar
// pinned at top, and the Before You Sign tile renders entry 16 as a
// CHECKABLE 8-item checklist whose check state persists per profile
// (profile_checklists, via getChecklistState / setChecklistItem) —
// the Family Care Plan checklist pattern, made durable.
//
// Open to member profiles in full, and to spouse profiles in full as
// a family-decision reference; future-member profiles see a locked
// card only (the view never renders in the future shell and the
// section is excluded from future search and Buddy scopes).
//
// Flags render as visible ⚠ SOURCE FLAG boxes, never blended; dated
// facts print with their dates; conflicts print as conflicts. The
// bonus discipline is absolute (see reenlist.ts header): structure
// only, no current amounts. Cross-link buttons render only for
// targets the current track actually opens (availableViews), so no
// button dead-ends; the sections stay named in the card prose.

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";

/** Tile key → the branch(es) the tile belongs to (rule 19). Tiles
 * absent from this map are universal (Read This First, SRB structure,
 * RE Codes, Before You Sign, the IRR tiles) and never held back. */
const REENLIST_TILE_BRANCHES: Record<string, string[]> = {
  army: ["Army"],
  usmc: ["Marine Corps"],
  navy: ["Navy"],
  daf: ["Air Force", "Space Force"],
  cg: ["Coast Guard"],
};
import { anchorSlug } from "./paths";
import {
  BEFORE_YOU_SIGN,
  CHECKLIST_ID,
  CHECKLIST_INTRO,
  CHECKLIST_TILE,
  CHECKLIST_TITLE,
  CHECKLIST_WHO,
  REENLIST_INTRO,
  REENLIST_STANDING,
  REENLIST_TILES,
  type ReenCrossLink,
  type ReenEntry,
  type ReenTable,
  type ReenViewKey,
} from "./reenlist";

const ALL_TILES = [
  ...REENLIST_TILES.map((t) => ({ key: t.key, label: t.label, sub: t.tileSub })),
  { key: CHECKLIST_TILE.key, label: CHECKLIST_TILE.label, sub: CHECKLIST_TILE.tileSub },
];

function entrySearchText(e: ReenEntry): string {
  const parts: string[] = [e.name, e.summary, e.who, ...e.body, ...e.flags];
  for (const b of e.bullets ?? []) parts.push(b.title ?? "", b.text);
  for (const t of e.tables ?? []) {
    parts.push(t.caption ?? "", ...t.columns, ...t.rows.flat());
  }
  return parts.join(" ").toLowerCase();
}

function CrossLinkButtons({
  links,
  go,
  availableViews,
}: {
  links: readonly ReenCrossLink[];
  go?: (v: ReenViewKey) => void;
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

/** A pack table: a real table at sm+ widths; at phone width each row
 * stacks as a labeled block so nothing scrolls sideways. */
function EntryTable({ table }: { table: ReenTable }) {
  return (
    <figure className="mt-3">
      {table.caption ? (
        <figcaption className="mb-2 text-sm font-semibold text-[var(--text)]">{table.caption}</figcaption>
      ) : null}
      {/* Phone: stacked rows */}
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
      {/* sm+: the table itself */}
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

function ReenEntryCard({
  entry,
  tileLabel,
  go,
  availableViews,
}: {
  entry: ReenEntry;
  tileLabel: string;
  go?: (v: ReenViewKey) => void;
  availableViews?: readonly string[];
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">
        {tileLabel.toUpperCase()} · ENTRY {entry.n}
      </p>
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
      {entry.tables?.map((t) => <EntryTable key={t.caption ?? t.columns.join("|")} table={t} />)}
      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}
      <LinkChips links={entry.links} name={entry.name} />
      {entry.crossLinks ? <CrossLinkButtons links={entry.crossLinks} go={go} availableViews={availableViews} /> : null}
      <CardTools
        cardRef={{
          section: "reenlist",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

function SignChecklist({
  go,
  availableViews,
}: {
  go?: (v: ReenViewKey) => void;
  availableViews?: readonly string[];
}) {
  const queryClient = useQueryClient();
  const stateQ = useQuery({
    queryKey: ["checklist", CHECKLIST_ID],
    queryFn: () => api.getChecklistState({ checklistId: CHECKLIST_ID }),
  });
  // The check state renders straight from the query — never a local
  // copy — so a profile switch can never show another profile's
  // checks: the sign-in flow invalidates every query, and this view
  // shows exactly what the signed-in profile's own row holds.
  const checked: ReadonlySet<string> = new Set(stateQ.data?.completed ?? []);
  const toggleM = useMutation({
    mutationFn: (args: { itemKey: string; checked: boolean }) =>
      api.setChecklistItem({ checklistId: CHECKLIST_ID, itemKey: args.itemKey, checked: args.checked }),
    onMutate: (args) => {
      // Optimistic: flip the box now; the server's returned list
      // replaces it on success, and an error resyncs from the server.
      queryClient.setQueryData<{ completed: string[] }>(["checklist", CHECKLIST_ID], (old) => {
        const next = new Set(old?.completed ?? []);
        if (args.checked) next.add(args.itemKey);
        else next.delete(args.itemKey);
        return { completed: [...next] };
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["checklist", CHECKLIST_ID], data);
    },
    onError: () => {
      void queryClient.invalidateQueries({ queryKey: ["checklist", CHECKLIST_ID] });
    },
  });
  const toggle = (n: number) => {
    const key = String(n);
    toggleM.mutate({ itemKey: key, checked: !checked.has(key) });
  };
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = BEFORE_YOU_SIGN.filter(
    (item) => q === "" || `${item.title} ${item.text}`.toLowerCase().includes(q),
  );
  return (
    <section aria-label={CHECKLIST_TILE.label}>
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{CHECKLIST_TILE.label}</h3>
      <HubSearch
        id="reenlist-search-checklist"
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
        <p className="mt-2 text-sm font-bold text-[var(--text)]" role="status">
          {checked.size} of {BEFORE_YOU_SIGN.length} verified
        </p>
        {visible.length === 0 ? (
          <p className="mt-3 text-base text-[var(--dim)]">
            No checklist items match “{query}” — clear the search to see all {BEFORE_YOU_SIGN.length}.
          </p>
        ) : (
          <ol className="mt-3 space-y-4">
            {visible.map((item) => {
              const key = String(item.n);
              const on = checked.has(key);
              return (
                <li key={item.n} className="flex items-start gap-3">
                  <input
                    id={`reenlist-check-${item.n}`}
                    type="checkbox"
                    checked={on}
                    onChange={() => toggle(item.n)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]"
                  />
                  <span>
                    <label
                      htmlFor={`reenlist-check-${item.n}`}
                      className={`block text-base font-semibold text-[var(--text)] ${on ? "line-through" : ""}`}
                    >
                      {item.n}. {item.title}
                    </label>
                    <span className="mt-0.5 block text-base text-[var(--text)]">{item.text}</span>
                    {item.crossLinks ? (
                      <CrossLinkButtons links={item.crossLinks} go={go} availableViews={availableViews} />
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ol>
        )}
        <CardTools
          cardRef={{
            section: "reenlist",
            itemKey: "before-you-sign-checklist",
            title: CHECKLIST_TITLE,
            summary: CHECKLIST_INTRO,
            source: "The official framings Part 1 of this section is built from",
          }}
        />
      </article>
    </section>
  );
}

export function ReenlistView({
  focusAnchor,
  focusCard,
  go,
  availableViews,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  go?: (v: ReenViewKey) => void;
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
      const t = REENLIST_TILES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  // Personalization scope (rule 19, Class B): Read This First + the
  // SRB structure + my branch's tile lead; other branches' tiles
  // collapse into the count. The Before You Sign checklist is
  // universal and always shown (it is not a tile in REENLIST_TILES).
  const scopeState = useSectionScope("reenlist");
  const myBranch = scopeState.profile?.branch ?? "";
  const scoped = scopeState.applicable && scopeState.scope === "mine";
  const tileHeld = (key: string): boolean => {
    const bs = REENLIST_TILE_BRANCHES[key];
    return scoped && bs != null && !bs.includes(myBranch);
  };
  const heldBack = scoped
    ? REENLIST_TILES.filter((t) => tileHeld(t.key)).reduce((n, t) => n + t.entries.length, 0)
    : 0;
  const gridTiles = ALL_TILES.filter((t) => !tileHeld(t.key));

  const q = query.trim().toLowerCase();
  const activeTile = REENLIST_TILES.find((t) => t.key === tile) ?? null;
  const visibleEntries = activeTile
    ? activeTile.entries.filter((e) => q === "" || entrySearchText(e).includes(q))
    : [];

  return (
    <div>
      <SectionHead
        title="Reenlistment & IRR"
        sub="Part 1: signing again — the windows, the gates, the bonus programs as structures, RE codes, and the checklist to work before you sign. Part 2: the Individual Ready Reserve — the 8-year obligation, what you owe in it, what can call you back, and the doors out and back in. Flags print as flags; dated facts print with their dates; live numbers live in the current message, never here."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{REENLIST_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{REENLIST_STANDING}</p>
      </div>

      <ScopeToggle sectionKey="reenlist" itemNoun="entries" heldBack={heldBack} />
      {tile === null ? (
        <>
          <HubTileGrid
            label="Reenlistment and IRR areas"
            onOpen={(key) => {
              setQuery("");
              setTile(key);
            }}
            tiles={gridTiles}
          />
          <ShowEverythingFooter sectionKey="reenlist" heldBack={heldBack} />
        </>
      ) : tile === CHECKLIST_TILE.key ? (
        <>
          <HubBackButton
            ariaLabel="Back to all areas in Reenlistment and IRR"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <SignChecklist go={go} availableViews={availableViews} />
        </>
      ) : activeTile ? (
        <>
          <HubBackButton
            ariaLabel="Back to all areas in Reenlistment and IRR"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <section aria-label={activeTile.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{activeTile.label}</h3>
            <HubSearch
              id={`reenlist-search-${activeTile.key}`}
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
                  <ReenEntryCard key={e.id} entry={e} tileLabel={activeTile.label} go={go} availableViews={availableViews} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : null}
    </div>
  );
}
