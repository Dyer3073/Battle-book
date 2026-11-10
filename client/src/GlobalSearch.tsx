// Global Search — one field that searches the whole app's reference
// content (see searchIndex.ts). Used at the top of Home and mirrored at
// the top of the More hub. Results are grouped by section, every result
// is labeled with its section, and tapping one navigates there — into
// the Library entry or the labeled group where the app supports it.
//
// Personalization build (ux-reorg.md §B.6 + H-2): search ALWAYS
// searches everything — the member's section-scope choices never
// narrow it. Within a result tier, hits for the member's own branch
// sort first; a hit from another branch whose section is currently in
// a filtered (My branch / My MOS) view carries the "Other branch"
// badge, so the member learns it exists and why their browse view
// didn't show it. The zero-result state offers closest matches and
// the synonym layer's suggested doors — never a dead end.

import { useMemo, useState } from "react";
import { closestMatches, runGlobalSearch, synonymDoorsFor, type SearchHit } from "./searchIndex";
import { branchShort, normalizeBranch } from "./branchTag";
import { effectiveBranch, partnerBranchOf, useFilteredViews, useScopeProfile } from "./scope";

const EXAMPLES = ["1371", "DD214", "SkillBridge"];

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";

export function GlobalSearch({
  id,
  onNavigate,
  allowedSections,
  scopeNote,
  profileBranch,
  filteredViews,
}: {
  id: string;
  onNavigate: (hit: SearchHit) => void;
  /** When set, results are limited to these section names (the
   * future-member search scope: the areas open to that track). */
  allowedSections?: string[];
  /** Replaces the default no-results scope description. */
  scopeNote?: string;
  /** The signed-in profile's branch — drives branch-first ranking and
   * the Other branch badge. Absent (or future track): no badging. */
  profileBranch?: string;
  /** View keys whose section is currently in a filtered view for this
   * profile — the badge renders only for hits in these sections (R-6:
   * in an All-branches state, no badges). */
  filteredViews?: readonly string[];
}) {
  // When the caller doesn't pass scope props, read them from the
  // scope context (every shell renders inside ScopeProvider): the
  // badge gate is the profile's CURRENT filtered views, so a section
  // the member flipped to All branches stops badging immediately.
  const ctxProfile = useScopeProfile();
  const ctxFiltered = useFilteredViews();
  if (profileBranch === undefined) profileBranch = ctxProfile?.branch ?? undefined;
  if (filteredViews === undefined) filteredViews = ctxFiltered;
  // Household awareness (red-team round 2, F-1): the "mine" branch for
  // ranking and badging is the profile's EFFECTIVE branch — for a
  // serving spouse in the spouse shell, their own branch (never
  // badged "Other branch"); the partner branch ranks second and gets
  // its own "Partner's branch" badge instead of "Other branch".
  const mineBranch = ctxProfile ? (effectiveBranch(ctxProfile) ?? profileBranch) : profileBranch;
  const partnerBranch = ctxProfile ? partnerBranchOf(ctxProfile) : null;
  const searchOpts = mineBranch
    ? { branch: mineBranch, ...(partnerBranch ? { partnerBranch } : {}) }
    : undefined;
  const [query, setQuery] = useState("");
  const allGroups = useMemo(
    () => runGlobalSearch(query, searchOpts),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, mineBranch, partnerBranch],
  );
  const groups = useMemo(
    () => (allowedSections ? allGroups.filter((g) => allowedSections.includes(g.section)) : allGroups),
    [allGroups, allowedSections],
  );
  const searching = query.trim().length > 0;
  const total = groups.reduce((n, g) => n + g.hits.length, 0);
  const closest = useMemo(
    () =>
      searching && total === 0
        ? closestMatches(query, searchOpts).filter(
            (h) => !allowedSections || allowedSections.includes(h.section),
          )
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searching, total, query, mineBranch, partnerBranch, allowedSections],
  );
  // Doors obey the same section scope as the closest matches above:
  // a scoped search (the future-member shell, the spouse Buddy
  // fallback) never suggests a door into a section outside its scope —
  // in the future shell such a door's navigation is clamped to Start
  // Here anyway, so offering it would promise a landing that cannot
  // happen (found in the Round 2 live exercise, Nov 10, 2026).
  const doors = useMemo(
    () =>
      searching && total === 0
        ? synonymDoorsFor(query).filter((d) => !allowedSections || allowedSections.includes(d.section))
        : [],
    [searching, total, query, allowedSections],
  );

  /** null = no badge; "partner" = Partner's branch badge; "other" =
   * the existing Other branch badge. The profile's own (effective)
   * branch is never badged. */
  const branchBadge = (hit: SearchHit): "partner" | "other" | null => {
    if (!mineBranch || !hit.branch || !filteredViews) return null;
    if (!filteredViews.includes(hit.view)) return null;
    const mine = normalizeBranch(mineBranch);
    const bs = Array.isArray(hit.branch) ? hit.branch : [hit.branch];
    if (bs.some((b) => normalizeBranch(b) === mine)) return null;
    if (partnerBranch && bs.some((b) => normalizeBranch(b) === normalizeBranch(partnerBranch))) return "partner";
    return "other";
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-[var(--text)]">
        Search the whole app
      </label>
      <input
        id={id}
        aria-label="Search the whole app"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={inputCls}
        placeholder="Try a job code, a form, a program…"
        autoComplete="off"
      />

      {searching && total > 0 ? (
        <div className="mt-3 space-y-4">
          <p className="text-sm text-[var(--dim)]" role="status">
            {total} result{total === 1 ? "" : "s"} for “{query.trim()}”
          </p>
          {groups.map((g) => (
            <div key={g.section}>
              <h3 className="font-display mb-2 text-sm font-bold tracking-wide text-[var(--dim)]">
                {g.section.toUpperCase()}
              </h3>
              <div className="space-y-2">
                {g.hits.map((hit, i) => (
                  <button
                    key={`${hit.view}-${hit.title}-${i}`}
                    type="button"
                    aria-label={`Open ${hit.title} in ${hit.section}`}
                    onClick={() => onNavigate(hit)}
                    className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left"
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-bold text-[var(--text)]">{hit.title}</span>
                      <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
                        {hit.section}
                      </span>
                      {branchBadge(hit) === "partner" ? (
                        <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--text)]">
                          Partner&rsquo;s branch — {branchShort(partnerBranch ?? "")}
                        </span>
                      ) : branchBadge(hit) === "other" ? (
                        <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
                          Other branch
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-0.5 block text-sm text-[var(--dim)]">{hit.summary}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {searching && total === 0 ? (
        <div className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="text-base font-semibold text-[var(--text)]">No matches for “{query.trim()}”.</p>
          <p className="mt-1 text-sm text-[var(--dim)]">
            {scopeNote ??
              "Search covers every job in the MOS Library, plus the cards in Benefits, Deals & Discounts, Gear Search, Transition & Jobs, Close Combat, Education, Pay & Money, PCS, Family & Life Events, VA Claims, Readiness, Retirement, Records, Care & Crisis, Find Anything, Change Your Job, Switch Branches, Guided Paths, and State Benefits."}
          </p>
          {closest.length > 0 ? (
            <div className="mt-3">
              <p className="text-sm font-bold text-[var(--text)]">Closest matches</p>
              <div className="mt-2 space-y-2">
                {closest.map((hit, i) => (
                  <button
                    key={`${hit.view}-${hit.title}-${i}`}
                    type="button"
                    aria-label={`Open ${hit.title} in ${hit.section}`}
                    onClick={() => onNavigate(hit)}
                    className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-left"
                  >
                    <span className="font-display text-base font-bold text-[var(--text)]">{hit.title}</span>
                    <span className="mt-0.5 block text-sm text-[var(--dim)]">
                      {hit.section} — {hit.summary}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {doors.length > 0 ? (
            <div className="mt-3">
              <p className="text-sm font-bold text-[var(--text)]">Try these sections</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {doors.map((d) => (
                  <button
                    key={d.section}
                    type="button"
                    aria-label={`Open ${d.section}`}
                    onClick={() =>
                      onNavigate({ section: d.section, view: d.view, title: d.section, summary: "" })
                    }
                    className="rounded-full border border-[var(--border)] bg-[var(--surface2)] px-3 py-1.5 text-sm font-semibold text-[var(--text)]"
                  >
                    {d.section}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                aria-label={`Search for ${ex}`}
                onClick={() => setQuery(ex)}
                className="rounded-full border border-[var(--border)] bg-[var(--surface2)] px-3 py-1.5 text-sm font-semibold text-[var(--text)]"
              >
                Try “{ex}”
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
