// Special Forces & Elite Units — rendered from specops.ts (the
// researched specops pack is the content source of truth). Hub of six
// square tiles per the house pattern — one per branch — each tile
// opening to that branch's entry list with its own search bar pinned
// at top. Open to member and future-member tracks (future members see
// the same entries as aspirational reference — the only application
// mechanics shown are the published recruiting routes the entries
// themselves print); spouse profiles see this section only as a
// locked card, consistent with Weapons & Qualification.
//
// Entry shape (every entry): what the unit is, who can apply,
// qualifications exactly as the cited official page publishes them,
// and a TRAINING PIPELINE subsection — phases by official names, in
// order, durations/locations as published, purpose only at the level
// the official page describes it. Flags render as visible ⚠ SOURCE
// FLAG boxes — both figures, never blended.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import { ScopeToggle, ShowEverythingFooter, useSectionScope } from "./scope";
import {
  SPEC_BRANCHES,
  SPECOPS_INTRO,
  SPECOPS_STANDING,
  type SpecEntry,
  type SpecTable,
} from "./specops";

function entrySearchText(e: SpecEntry): string {
  const parts: string[] = [e.name, e.summary, e.what, e.who, ...e.quals, ...e.flags];
  for (const t of e.tables ?? []) {
    parts.push(t.caption, ...t.headers, ...t.rows.flat());
  }
  for (const s of e.pipeline) parts.push(s.name, s.detail);
  if (e.pipelineIntro) parts.push(e.pipelineIntro);
  return parts.join(" ").toLowerCase();
}

function SpecTableView({ table }: { table: SpecTable }) {
  return (
    <figure className="mt-3">
      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
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

function SpecEntryCard({
  entry,
  branchLabel,
  onCrossLink,
}: {
  entry: SpecEntry;
  branchLabel: string;
  onCrossLink: (entry: SpecEntry) => void;
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{branchLabel.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{entry.name}</h4>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHAT IT IS</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.what}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHO CAN APPLY</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.who}</p>

      <h5 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">
        QUALIFICATIONS — AS THE OFFICIAL PAGE PUBLISHES THEM
      </h5>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
        {entry.quals.map((q) => (
          <li key={q.slice(0, 60)}>{q}</li>
        ))}
      </ul>
      {(entry.tables ?? []).map((t) => (
        <SpecTableView key={t.caption.slice(0, 40)} table={t} />
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

      {entry.crossLink ? (
        <button
          type="button"
          aria-label={entry.crossLink.label}
          onClick={() => onCrossLink(entry)}
          className="mt-3 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
        >
          {entry.crossLink.label} →
        </button>
      ) : null}

      <CardTools
        cardRef={{
          section: "specops",
          itemKey: entry.id,
          title: entry.name,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function SpecOpsView({
  focusAnchor,
  focusCard,
  openMos,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  openMos?: (id: string) => void;
}) {
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const b = SPEC_BRANCHES.find((x) => anchorSlug(x.label) === slug);
      if (b) return b.key;
    }
    if (focusCard) {
      const b = SPEC_BRANCHES.find((x) => x.entries.some((e) => e.name === focusCard));
      if (b) return b.key;
    }
    return null;
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  // Personalization scope (rule 21, Class B): my branch's tile leads
  // and the other branches' tiles collapse into the held-back count.
  // Future profiles keep the full aspirational view (H-4) — the scope
  // hook reports applicable=false for them.
  const scopeState = useSectionScope("specops");
  const myBranchLabel = scopeState.profile?.branch ?? "";
  const scoped = scopeState.applicable && scopeState.scope === "mine";
  const hubBranches = scoped
    ? SPEC_BRANCHES.filter((b) => b.label === myBranchLabel)
    : SPEC_BRANCHES;
  const heldBack = scoped
    ? SPEC_BRANCHES.filter((b) => b.label !== myBranchLabel).reduce((n, b) => n + b.entries.length, 0)
    : 0;

  const branch = SPEC_BRANCHES.find((b) => b.key === tile) ?? null;
  const q = query.trim().toLowerCase();
  const visible = branch
    ? branch.entries.filter((e) => q === "" || entrySearchText(e).includes(q))
    : [];

  const onCrossLink = (entry: SpecEntry) => {
    const link = entry.crossLink;
    if (!link) return;
    if (link.kind === "mos") {
      openMos?.(link.mosId);
      return;
    }
    // Entry-to-entry cross-link (AF EOD → Navy EOD): open the target
    // branch's tile; the app shell's pending-card scroll lands on the
    // target card when it was reached via search/Binder, and here the
    // tile opens at its list — the target entry is named in the label.
    setQuery("");
    setTile(link.branchKey);
  };

  return (
    <div>
      <SectionHead
        title="Special Forces & Elite Units"
        sub="What each unit is, who can apply, the qualifications exactly as the official recruiting and command pages publish them — conflicts printed as flags, never blended — and each training pipeline's published structure: phase names, order, durations, locations."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{SPECOPS_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{SPECOPS_STANDING}</p>
      </div>

      <ScopeToggle sectionKey="specops" itemNoun="entries" heldBack={heldBack} />
      {tile === null || !branch ? (
        <>
        <HubTileGrid
          label="Special Forces and Elite Units — branches"
          onOpen={(key) => {
            setQuery("");
            setTile(key);
          }}
          tiles={hubBranches.map((b) => ({
            key: b.key,
            label: b.label,
            sub: b.tileSub,
          }))}
        />
        <ShowEverythingFooter sectionKey="specops" heldBack={heldBack} />
        </>
      ) : (
        <>
          <HubBackButton
            ariaLabel="Back to all branches in Special Forces and Elite Units"
            text="All branches"
            onBack={() => setTile(null)}
          />
          <section aria-label={branch.label}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{branch.label}</h3>
            <HubSearch
              id={`specops-search-${branch.key}`}
              label={`Search ${branch.label} entries`}
              ariaLabel={`Search entries in ${branch.label}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{branch.intro}</p>
            </div>
            {visible.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in {branch.label} match “{query}” — clear the search to see all {branch.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visible.map((e) => (
                  <SpecEntryCard key={e.id} entry={e} branchLabel={branch.label} onCrossLink={onCrossLink} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
