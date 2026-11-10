// Commissioning from the Ranks — rendered from commissioning.ts
// (the researched pack, ~/workspace/military-app/commissioning/
// commissioning.md, is the content source of truth). Hub of tiles
// per the house pattern: Enlisted → Officer / Enlisted → Warrant /
// Officer → Enlisted, each tile opening to its card list with its
// own search bar pinned at top.
//
// Track reach: members in full; spouses in full as a family-decision
// reference (the Switching Components / Reenlistment precedent);
// future members see the same published routes as aspirational
// reference (the joining-area precedent — this section publishes
// routes only, nothing member-private), with a looking-ahead banner
// so the framing is honest about who the routes are for.
//
// The pack's verdicts render as verdict boxes at the top of their
// cards (STA-21 ACTIVE · Flying CWO CLOSED · AF warrants NEW /
// EVOLVING with the AFGM void date · Space Force VERIFIED NEGATIVE
// · Coast Guard figures WITHHELD); conflicts and thin-sourcing
// notes render as ⚠ SOURCE FLAG boxes, never blended; the
// Officer → Enlisted tile leads with the pack's zero-programs
// finding. Every card is Binder-savable via CardTools.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";
import { branchNamedIn } from "./branchTag";
import { anchorSlug } from "./paths";
import {
  COMM_DEGREE_NOTE,
  COMM_EXCLUSIONS,
  COMM_INTRO,
  COMM_STANDING,
  COMM_TILES,
  OFFICER_ENLISTED_FINDING,
  type CommEntry,
  type CommVerdict,
  type CommViewKey,
} from "./commissioning";

function entrySearchText(e: CommEntry): string {
  const parts: string[] = [e.name, e.branch, e.degree, e.summary, e.who, ...e.body, ...e.flags];
  if (e.verdict) parts.push(e.verdict.label, e.verdict.text);
  for (const b of e.bullets ?? []) parts.push(b.title ?? "", b.text);
  return parts.join(" ").toLowerCase();
}

const VERDICT_STYLES: Record<CommVerdict["kind"], { box: string; label: string }> = {
  active: {
    box: "border-[var(--accent)] bg-[var(--surface2)]",
    label: "text-[var(--accent-word)]",
  },
  closed: {
    box: "border-[var(--red)] bg-[var(--red-bg)]",
    label: "text-[var(--red)]",
  },
  new: {
    box: "border-[var(--amber)] bg-[var(--amber-bg)]",
    label: "text-[var(--amber)]",
  },
  negative: {
    box: "border-[var(--red)] bg-[var(--red-bg)]",
    label: "text-[var(--red)]",
  },
  withheld: {
    box: "border-[var(--amber)] bg-[var(--amber-bg)]",
    label: "text-[var(--amber)]",
  },
};

function VerdictBox({ verdict }: { verdict: CommVerdict }) {
  const s = VERDICT_STYLES[verdict.kind];
  return (
    <div className={`mt-3 rounded-[var(--radius)] border-2 p-3 ${s.box}`}>
      <p className={`text-xs font-bold tracking-wide ${s.label}`}>{verdict.label}</p>
      <p className="mt-1 text-sm text-[var(--text)]">{verdict.text}</p>
    </div>
  );
}

function CrossLinkButtons({
  links,
  go,
  availableViews,
}: {
  links: readonly { label: string; view: CommViewKey }[];
  go?: (v: CommViewKey) => void;
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

function CommEntryCard({
  entry,
  tileLabel,
  go,
  availableViews,
}: {
  entry: CommEntry;
  tileLabel: string;
  go?: (v: CommViewKey) => void;
  availableViews?: readonly string[];
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">
        {tileLabel.toUpperCase()} · {entry.n > 0 ? `ENTRY ${entry.n}` : "DISCONTINUED — NOT A ROUTE"}
      </p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>
      <p className="mt-1 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-[var(--text)]">{entry.branch}</span>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface2)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent-word)]">
          {entry.degree}
        </span>
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--accent-word)]">Who it&apos;s for / when: {entry.who}</p>
      {entry.verdict ? <VerdictBox verdict={entry.verdict} /> : null}
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
          section: "commissioning",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function CommissioningView({
  focusAnchor,
  focusCard,
  go,
  availableViews,
  track,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  go?: (v: CommViewKey) => void;
  availableViews?: readonly string[];
  track?: "member" | "future" | "spouse";
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = COMM_TILES.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      const t = COMM_TILES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  // Personalization scope (rule 20, Class B): the three direction
  // tiles stay; inside them, routes naming another branch are held
  // back. Routes naming two services (e.g. the Naval Academy route)
  // stay visible for both. Future profiles keep the full
  // aspirational view (H-4 — the hook reports applicable=false).
  const scopeState = useSectionScope("commissioning");
  const myBranch = scopeState.profile?.branch ?? "";
  const scoped = scopeState.applicable && scopeState.scope === "mine";
  const inScope = (name: string): boolean => {
    if (!scoped) return true;
    const b = branchNamedIn(name);
    return b === null || b === myBranch;
  };
  const heldBack = scoped
    ? COMM_TILES.reduce((n, t) => n + t.entries.filter((e) => !inScope(e.name)).length, 0)
    : 0;

  const q = query.trim().toLowerCase();
  const activeTile = COMM_TILES.find((t) => t.key === tile) ?? null;
  const visibleEntries = activeTile
    ? activeTile.entries.filter((e) => (inScope(e.name) || e.name === focusCard) && (q === "" || entrySearchText(e).includes(q)))
    : [];

  return (
    <div>
      <SectionHead
        title="Commissioning from the Ranks"
        sub="Changing corps from inside the service: the enlisted → commissioned officer routes, the enlisted → warrant officer door, and the officer → enlisted direction documented honestly (zero programs — the real mechanisms instead). Every card prints what the program is, who can apply as published, how to apply, its sources, and its ⚠ flags. The current cycle's announcement controls where it differs."
      />
      {track === "future" ? (
        <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
          <p className="text-base font-semibold text-[var(--text)]">
            Looking ahead: these are the routes SERVING members use to change corps after they are already in —
            shown to you as published reference for planning, the same cards members see. None of them is an entry
            route from civilian life; the doors for that are in Becoming an Officer and Connect with a Recruiter.
          </p>
        </div>
      ) : null}
      {track === "spouse" ? (
        <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
          <p className="text-base font-semibold text-[var(--text)]">
            A corps change is a family decision too — this whole section is open to you as reference: the routes,
            the degree each one builds in or requires, the obligations they carry, and the flags as printed.
          </p>
        </div>
      ) : null}
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{COMM_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{COMM_STANDING}</p>
      </div>
      <div className="mb-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--text)]">{COMM_DEGREE_NOTE}</p>
      </div>

      <ScopeToggle sectionKey="commissioning" itemNoun="entries" heldBack={heldBack} />
      {tile === null ? (
        <>
          <HubTileGrid
            label="Commissioning directions"
            onOpen={(key) => {
              setQuery("");
              setTile(key);
            }}
            tiles={COMM_TILES.map((t) => ({ key: t.key, label: t.label, sub: t.tileSub }))}
          />
          <section aria-label="Not covered here" className="mb-8 mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <h3 className="font-display mb-1 text-lg font-bold text-[var(--text)]">Not covered here</h3>
            <p className="text-sm text-[var(--text)]">{COMM_EXCLUSIONS}</p>
          </section>
          <ShowEverythingFooter sectionKey="commissioning" heldBack={heldBack} />
        </>
      ) : activeTile ? (
        <>
          <HubBackButton
            ariaLabel="Back to all directions in Commissioning from the Ranks"
            text="All directions"
            onBack={() => setTile(null)}
          />
          <section aria-label={activeTile.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{activeTile.label}</h3>
            <HubSearch
              id={`commissioning-search-${activeTile.key}`}
              label={`Search ${activeTile.label}`}
              ariaLabel={`Search entries in ${activeTile.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{activeTile.intro}</p>
            </div>
            {activeTile.key === "officer-enlisted" ? (
              <div className="mb-3 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-4">
                <p className="text-xs font-bold tracking-wide text-[var(--red)]">FINDING — ZERO DEDICATED PROGRAMS</p>
                <p className="mt-1 text-sm text-[var(--text)]">{OFFICER_ENLISTED_FINDING}</p>
              </div>
            ) : null}
            {visibleEntries.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in {activeTile.label} match “{query}” — clear the search to see all {activeTile.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visibleEntries.map((e) => (
                  <CommEntryCard key={e.id} entry={e} tileLabel={activeTile.label} go={go} availableViews={availableViews} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : null}
    </div>
  );
}
