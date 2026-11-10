// Connect with a Recruiter — rendered from recruiters.ts (the
// researched recruiters pack is the content source of truth). A
// future-member area inside Start Here, in the house hub pattern: a
// hub of square tiles — one per branch/route plus Before You Sign —
// each tile opening to its entry list with its own search bar pinned
// at top. The door note prints at the top: Battle Book collects
// nothing; every form lives on the branch's own official site.
// Locators are homepage routes labeled "search on their site" —
// there is deliberately no ZIP input anywhere in this area.
//
// Entry shape (every entry): THE DOOR (the one official route) →
// CHANNELS the branch itself publishes → WHAT THE FORM ASKS
// (category level, only where the pack verified it) → NOTES
// (officer / Reserve / wrong-door callouts) → ⚠ flags via FlagBox →
// OFFICIAL LINKS (the pack's link table, verbatim) → Binder save.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import {
  RECRUITER_TILES,
  RECRUITERS_DOOR_NOTE,
  type RecruiterEntry,
} from "./recruiters";

function entrySearchText(e: RecruiterEntry): string {
  const parts: string[] = [e.name, e.summary, e.badge, e.door, ...e.flags];
  for (const c of e.channels) parts.push(c.label, c.text);
  if (e.asks) parts.push(e.asks);
  for (const n of e.notes) parts.push(n.heading, n.body);
  for (const l of e.links) parts.push(l.label, l.url);
  return parts.join(" ").toLowerCase();
}

function RecruiterEntryCard({ entry, tileLabel }: { entry: RecruiterEntry; tileLabel: string }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{tileLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>
      <p className="mt-2">
        <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--accent-word)]">
          {entry.badge}
        </span>
      </p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">THE DOOR</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.door}</p>

      {entry.channels.length > 0 ? (
        <>
          <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">
            CHANNELS THE BRANCH ITSELF PUBLISHES
          </h5>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
            {entry.channels.map((c) => (
              <li key={c.label}>
                <strong>{c.label}:</strong> {c.text}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {entry.asks ? (
        <>
          <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">
            WHAT THE FORM ASKS
          </h5>
          <p className="mt-1 text-base text-[var(--text)]">{entry.asks}</p>
        </>
      ) : null}

      {entry.notes.map((n) => (
        <div key={n.heading}>
          <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">{n.heading}</h5>
          <p className="mt-1 text-base text-[var(--text)]">{n.body}</p>
        </div>
      ))}

      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}

      {entry.links.length > 0 ? (
        <>
          <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">OFFICIAL LINKS</h5>
          <ul className="mt-1 space-y-1">
            {entry.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open official link: ${l.label}`}
                  className="text-sm font-semibold break-words text-[var(--accent-word)] underline"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <CardTools
        cardRef={{
          section: "recruiters",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function RecruitersView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = RECRUITER_TILES.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      const t = RECRUITER_TILES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const current = RECRUITER_TILES.find((t) => t.key === tile) ?? null;
  const q = query.trim().toLowerCase();
  const visible = current
    ? current.entries.filter((e) => q === "" || entrySearchText(e).includes(q))
    : [];

  return (
    <div>
      <SectionHead
        title="Connect with a Recruiter"
        sub="Every branch's official door, labeled by path — enlisted, officer, or Reserve — with the channels each branch itself publishes, the conflicts printed as conflicts, and the prep cards to read before you sign anything."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="font-display text-sm font-bold tracking-widest text-[var(--dim)]">BEFORE YOU OPEN ANY DOOR</p>
        <p className="mt-1 text-base text-[var(--text)]">{RECRUITERS_DOOR_NOTE}</p>
      </div>

      {tile === null || !current ? (
        <HubTileGrid
          label="Connect with a Recruiter — branches and prep"
          onOpen={(key) => {
            setQuery("");
            setTile(key);
          }}
          tiles={RECRUITER_TILES.map((t) => ({
            key: t.key,
            label: t.label,
            sub: t.tileSub,
          }))}
        />
      ) : (
        <>
          <HubBackButton
            ariaLabel="Back to all branches in Connect with a Recruiter"
            text="All branches & prep"
            onBack={() => setTile(null)}
          />
          <section aria-label={current.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{current.label}</h3>
            <HubSearch
              id={`recruiters-search-${current.key}`}
              label={`Search ${current.label}`}
              ariaLabel={`Search entries in ${current.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{current.intro}</p>
            </div>
            {visible.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in {current.label} match “{query}” — clear the search to see all {current.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visible.map((e) => (
                  <RecruiterEntryCard key={e.id} entry={e} tileLabel={current.label} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
