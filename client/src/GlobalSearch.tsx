// Global Search — one field that searches the whole app's reference
// content (see searchIndex.ts). Used at the top of Home and mirrored at
// the top of the More hub. Results are grouped by section, every result
// is labeled with its section, and tapping one navigates there — into
// the Library entry or the labeled group where the app supports it.

import { useMemo, useState } from "react";
import { runGlobalSearch, type SearchHit } from "./searchIndex";

const EXAMPLES = ["1371", "DD214", "SkillBridge"];

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";

export function GlobalSearch({
  id,
  onNavigate,
}: {
  id: string;
  onNavigate: (hit: SearchHit) => void;
}) {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => runGlobalSearch(query), [query]);
  const searching = query.trim().length > 0;
  const total = groups.reduce((n, g) => n + g.hits.length, 0);

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
            Search covers every job in the MOS Library, plus the cards in Benefits, Deals &amp; Discounts, Transition
            &amp; Jobs, Close Combat, Education, Pay &amp; Money, PCS, Family &amp; Life Events, VA Claims, Readiness,
            Retirement, Records, Care &amp; Crisis, Find Anything, Change Your Job, Switch Branches, Guided Paths, and
            State Benefits.
          </p>
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
