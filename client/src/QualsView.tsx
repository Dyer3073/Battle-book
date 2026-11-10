// Qualifications, Schools & Certifications — rendered from quals.ts
// (the two researched quals packs are the content source of truth).
// Hub of square tiles from the packs' EXISTING group structure: the
// four Part A tiles, the thirteen Part B school tiles, the Space
// Force findings tile, and the NOT CONFIRMED register as its OWN
// tile. Each tile opens to its entry list with ITS OWN search bar
// pinned at top, matching the house tile conventions.
//
// Entry shape (every entry): what it is → who can earn it →
// QUALIFICATIONS → HOW TO EARN IT → badge/record line → ⚠ flags as
// visible SOURCE FLAG boxes (never blended) → official links →
// in-app cross-links (buttons render only for views the current
// track opens) → Binder CardTools. Open to member profiles in full
// and to future-member profiles as aspirational reference (the only
// application mechanics shown are the published routes the entries
// themselves print); spouse profiles see a locked card only — the
// view never renders in the spouse shell.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import { ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";

/** Whether a tagged entry belongs in the member's My-branch view:
 * universal ("All" / untagged) always; a single branch only when it
 * is the member's; an array only when it includes the member's. */
function entryInBranch(e: QualEntry, branch: string): boolean {
  const b = e.branch;
  if (b == null || b === "All") return true;
  return Array.isArray(b) ? b.includes(branch) : b === branch;
}
import {
  ALL_QUAL_TILES,
  NOT_CONFIRMED_REGISTER,
  QUALS_INTRO,
  QUALS_STANDING,
  REGISTER_TILE,
  type QualEntry,
  type QualViewKey,
} from "./quals";

function entrySearchText(e: QualEntry): string {
  const parts: string[] = [e.name, e.summary, e.who, ...e.quals, ...e.how, ...e.flags];
  if (e.badge) parts.push(e.badge);
  parts.push(e.source);
  return parts.join(" ").toLowerCase();
}

function QualEntryCard({
  entry,
  tileLabel,
  go,
  availableViews,
}: {
  entry: QualEntry;
  tileLabel: string;
  go?: (v: QualViewKey) => void;
  availableViews?: readonly string[];
}) {
  const cross = (entry.crossLinks ?? []).filter((l) => !availableViews || availableViews.includes(l.view));
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{tileLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHAT IT IS</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHO CAN EARN IT</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.who}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">
        QUALIFICATIONS — PREREQUISITES + PUBLISHED STANDARDS
      </h5>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
        {entry.quals.map((q) => (
          <li key={q.slice(0, 60)}>{q}</li>
        ))}
      </ul>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">HOW TO EARN IT</h5>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
        {entry.how.map((h) => (
          <li key={h.slice(0, 60)}>{h}</li>
        ))}
      </ul>

      {entry.badge ? (
        <p className="mt-3 text-sm text-[var(--text)]">
          <strong>Badge / record:</strong> {entry.badge}
        </p>
      ) : null}

      {entry.flags.map((f) => (
        <FlagBox key={f.slice(0, 48)} text={f} />
      ))}

      <LinkChips links={entry.links} name={entry.name} />

      {go && cross.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {cross.map((l) => (
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
      ) : null}

      <CardTools
        cardRef={{
          section: "quals",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function QualsView({
  focusAnchor,
  focusCard,
  go,
  availableViews,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  go?: (v: QualViewKey) => void;
  availableViews?: readonly string[];
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = ALL_QUAL_TILES.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      if (NOT_CONFIRMED_REGISTER.some((r) => focusCard === `NOT CONFIRMED #${r.n} — ${r.title}`)) return REGISTER_TILE.key;
      const t = ALL_QUAL_TILES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (t) return t.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  // Personalization scope (Part A, rule 13 — Class B in phase 1; the
  // My MOS segment ships only with the phase-2 crosswalk, §A.2.3, so
  // no MOS segment renders here). Branch tagging lives on the entries
  // themselves (quals.ts). The NOT CONFIRMED register is NEVER
  // filtered — rumors shouldn't hide. Future profiles get no hiding
  // (applicable=false, H-4).
  const scopeState = useSectionScope("quals");
  const myBranch = scopeState.profile?.branch ?? "";
  const scoped = scopeState.applicable && scopeState.scope === "mine";
  const keptCount = (t: (typeof ALL_QUAL_TILES)[number]): number =>
    t.key === REGISTER_TILE.key || !scoped
      ? t.entries.length
      : t.entries.filter((e) => entryInBranch(e, myBranch)).length;
  const heldBack = scoped
    ? ALL_QUAL_TILES.filter((t) => t.key !== REGISTER_TILE.key).reduce(
        (n, t) => n + (t.entries.length - keptCount(t)),
        0,
      )
    : 0;
  const hubTiles = ALL_QUAL_TILES.filter((t) => keptCount(t) > 0 || t.entries.length === 0);

  const active = ALL_QUAL_TILES.find((t) => t.key === tile) ?? null;
  // Term-wise matching: every word of the query must appear somewhere in
  // the entry's text, so "Coast Guard FT&E" finds the entry whose name
  // carries punctuation between those words ("Coast Guard — FT&E …").
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = (hay: string) => terms.every((t) => hay.includes(t));
  const visible = active
    ? active.entries.filter((e) => {
        if (scoped && !entryInBranch(e, myBranch) && e.name !== focusCard) return false;
        return terms.length === 0 || matches(entrySearchText(e));
      })
    : [];
  const visibleRegister = NOT_CONFIRMED_REGISTER.filter(
    (r) => terms.length === 0 || matches(`${r.n} ${r.title} ${r.detail}`.toLowerCase()),
  );
  const isRegister = active?.key === REGISTER_TILE.key;

  return (
    <div>
      <SectionHead
        title="Qualifications, Schools & Certifications"
        sub="Swim quals and weapons tables, UET and the helo dunker, the recurring currency quals — and the schools: Airborne, dive, SERE, mountain, sniper, instructor certifications, maritime. Every entry: the qualifications and how to earn it, as the official sources publish them, flags printed, gated standards named NOT PUBLICLY PUBLISHED."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{QUALS_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{QUALS_STANDING}</p>
      </div>

      <ScopeToggle sectionKey="quals" itemNoun="entries" heldBack={heldBack} />
      {tile === null || !active ? (
        <>
          <HubTileGrid
            label="Qualifications, Schools and Certifications areas"
            onOpen={(key) => {
              setQuery("");
              setTile(key);
            }}
            tiles={hubTiles.map((t) => ({
              key: t.key,
              label: t.label,
              sub:
                t.key === REGISTER_TILE.key
                  ? t.tileSub
                  : scoped && keptCount(t) < t.entries.length
                    ? `${keptCount(t)} of ${t.entries.length} entries in your branch view · ${t.tileSub}`
                    : `${t.entries.length} entries · ${t.tileSub}`,
            }))}
          />
          <ShowEverythingFooter sectionKey="quals" heldBack={heldBack} />
        </>
      ) : (
        <>
          <HubBackButton
            ariaLabel="Back to all areas in Qualifications, Schools and Certifications"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <section aria-label={active.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{active.label}</h3>
            <HubSearch
              id={`quals-search-${active.key}`}
              label={`Search ${active.label}`}
              ariaLabel={`Search entries in ${active.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{active.intro}</p>
            </div>
            {isRegister ? (
              visibleRegister.length === 0 ? (
                <p className="text-base text-[var(--dim)]">
                  No register items match “{query}” — clear the search to see all {NOT_CONFIRMED_REGISTER.length}.
                </p>
              ) : (
                <div className="space-y-3">
                  {visibleRegister.map((r) => (
                    <article
                      key={r.n}
                      className="rounded-[var(--radius)] border border-dashed border-[var(--border)] bg-[var(--surface2)] p-4"
                    >
                      <p className="text-xs font-bold tracking-wide text-[var(--amber)]">
                        ⚠ NOT CONFIRMED — REGISTER ITEM #{r.n} OF 45
                      </p>
                      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{r.title}</h4>
                      <p className="mt-1 text-base text-[var(--text)]">{r.detail}</p>
                      <CardTools
                        cardRef={{
                          section: "quals",
                          itemKey: `register-${r.n}`,
                          title: `NOT CONFIRMED #${r.n} — ${r.title}`,
                          summary: r.detail,
                          source: "Part B §16 — NOT CONFIRMED register (not verified on an official page)",
                        }}
                      />
                    </article>
                  ))}
                </div>
              )
            ) : visible.length === 0 ? (
              scoped && query.trim() !== "" ? (
                <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                  <p className="text-base text-[var(--text)]">
                    No matches in your My branch view in {active.label}.
                  </p>
                  <button
                    type="button"
                    aria-label="Search all branches instead"
                    onClick={() => scopeState.setScope("all")}
                    className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5 text-sm font-bold text-[var(--text)]"
                  >
                    Search all branches instead
                  </button>
                </div>
              ) : (
                <p className="text-base text-[var(--dim)]">
                  No entries in {active.label} match “{query}” — clear the search to see all {active.entries.length}.
                </p>
              )
            ) : (
              <div className="space-y-3">
                {visible.map((e) => (
                  <QualEntryCard key={e.id} entry={e} tileLabel={active.label} go={go} availableViews={availableViews} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
