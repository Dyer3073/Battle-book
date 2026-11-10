// Pay Charts & Rates view — the one section that prints a full pay
// table. House pattern: hub of square tiles with per-tile search
// (here, a grade filter), deep-landing through hub tiles (the tile
// labels are the Global Search anchors), Binder-savable cards via
// CardTools, and the PackEntryCard shape for the router/note cards.
// The tables render as real tables with horizontal scroll on narrow
// screens; blank DFAS cells render “—”, never $0. Track handling:
// the future track sees the joining-relevant part only — the four
// basic pay tables plus Read First & Notes; the allowances routers
// tile is member/spouse only, per the pack's placement.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import { PackEntryCard } from "./SevenSections";
import { ENLISTED_PAY, OFFICER_PAY, OE_PAY, PAY_COLUMNS, WARRANT_PAY } from "./paydata";
import { PAY_HOW_TO_READ, PAY_INTRO, PAY_NOTES_ENTRIES, PAY_ROUTER_ENTRIES, PAY_STANDING } from "./paycharts";
import type { PackEntry } from "./seven";

type PayTableDef = {
  key: string;
  label: string;
  sub: string;
  rows: [string, (string | null)[]][];
  note: string;
  source: string;
};

const TABLES: PayTableDef[] = [
  {
    key: "enlisted",
    label: "Enlisted Pay Table",
    sub: "E-1–E-9 · all 22 service columns",
    rows: ENLISTED_PAY,
    note: "E-1: the $2,407.20 rate applies with 4 months of active duty or more; under 4 months the rate is $2,225.70 (DFAS Notes 4 & 5 — see Read First & Notes). E-9 serving as a service's senior enlisted leader is paid $11,166.90 regardless of years of service (Note 2).",
    source: "DFAS Basic Pay – Enlisted (eff. Jan 1, 2026)",
  },
  {
    key: "warrant",
    label: "Warrant Officer Pay Table",
    sub: "W-1–W-5 · all 22 service columns",
    rows: WARRANT_PAY,
    note: "W-5 publishes no rate before Over 20 — those cells are blank on the DFAS page. The warrant table's only DFAS note: for rank titles, see Volume 7A Comparable Grades.",
    source: "DFAS Basic Pay – Warrant Officers (eff. Jan 1, 2026)",
  },
  {
    key: "officer",
    label: "Officer Pay Table",
    sub: "O-1–O-10 · all 22 service columns",
    rows: OFFICER_PAY,
    note: "O-7–O-10 are capped at Level II of the Executive Schedule — $18,999.90/month in 2026; O-6 and below at Level V — $15,408.30 (DFAS Notes 4 & 5). The O-1/O-2/O-3 rates do not apply to officers with over 4 years of prior enlisted/warrant service — see the O-1E table.",
    source: "DFAS Basic Pay – Officers (eff. Jan 1, 2026)",
  },
  {
    key: "oe",
    label: "Prior-Service Officer Pay Table",
    sub: "O-1E / O-2E / O-3E · over 4 years of creditable service",
    rows: OE_PAY,
    note: "The first three columns are blank on the DFAS page — E-pay rates cannot begin before Over 4, by the table's own definition (see the E-pay entry in Read First & Notes).",
    source: "DFAS Basic Pay – Officers, O-1E/O-2E/O-3E (eff. Jan 1, 2026)",
  },
];

function PayTableView({ table }: { table: PayTableDef }) {
  const [grade, setGrade] = useState("");
  const g = grade.trim().toLowerCase();
  const rows = table.rows.filter(([gr]) => g === "" || gr.toLowerCase().includes(g));
  return (
    <section aria-label={table.label}>
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{table.label}</h3>
      <HubSearch
        id={`paycharts-search-${table.key}`}
        label={`Find a grade in the ${table.label}`}
        ariaLabel={`Find a grade in the ${table.label}`}
        value={grade}
        onChange={setGrade}
        placeholder="Type a grade — E-7, W-3, O-5…"
      />
      <p className="mb-3 text-sm font-semibold text-[var(--text)]">
        Monthly basic pay — Effective January 1, 2026 · DoD FMR, Vol. 7A, Chapter 1 · Source: {table.source}
      </p>
      {rows.length === 0 ? (
        <p className="text-base text-[var(--dim)]">No grade in this table matches “{grade}” — clear the search to see all {table.rows.length} grades.</p>
      ) : (
        <div className="overflow-x-auto rounded-[var(--radius)] border border-[var(--border)]">
          <table className="min-w-[1100px] w-full text-right text-sm">
            <caption className="sr-only">{`${table.label} — 2026 monthly basic pay by years of service`}</caption>
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th scope="col" className="sticky left-0 bg-[var(--surface2)] px-3 py-2 text-left font-bold text-[var(--text)]">Pay Grade</th>
                {PAY_COLUMNS.map((c) => (
                  <th key={c} scope="col" className="px-2 py-2 font-bold whitespace-nowrap text-[var(--text)]">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([gr, vals]) => (
                <tr key={gr} className="border-t border-[var(--border)] bg-[var(--surface)]">
                  <th scope="row" className="sticky left-0 bg-[var(--surface)] px-3 py-2 text-left font-bold whitespace-nowrap text-[var(--text)]">{gr}</th>
                  {vals.map((v, i) => (
                    <td key={PAY_COLUMNS[i]} className="px-2 py-2 whitespace-nowrap text-[var(--text)] tabular-nums">{v ?? "—"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-sm text-[var(--text)]">{table.note}</p>
      <CardTools
        cardRef={{
          section: "paycharts",
          itemKey: `${table.key}-table`,
          title: `${table.label} — 2026`,
          summary: `${table.source}. Monthly basic pay for ${table.sub}, all 22 years-of-service columns, transcribed in full.`,
          source: table.source,
        }}
      />
    </section>
  );
}

function EntryList({ entries, tileLabel }: { entries: PackEntry[]; tileLabel: string }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = entries.filter(
    (e) => q === "" || [e.name, e.summary, e.who, ...e.body, ...e.flags].join(" ").toLowerCase().includes(q),
  );
  return (
    <section aria-label={tileLabel}>
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{tileLabel}</h3>
      <HubSearch
        id={`paycharts-search-${tileLabel.replace(/\W+/g, "-").toLowerCase()}`}
        label={`Search ${tileLabel}`}
        ariaLabel={`Search entries in ${tileLabel}`}
        value={query}
        onChange={setQuery}
        placeholder="Search these entries…"
      />
      {visible.length === 0 ? (
        <p className="text-base text-[var(--dim)]">No entries in {tileLabel} match “{query}” — clear the search to see all {entries.length}.</p>
      ) : (
        <div className="space-y-3">
          {visible.map((e) => (
            <PackEntryCard key={e.id} entry={e} tileLabel={tileLabel} sectionKey="paycharts" />
          ))}
        </div>
      )}
    </section>
  );
}

export function PayChartsView({
  focusAnchor,
  focusCard,
  track,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  track?: "member" | "spouse" | "future";
}) {
  const showRouters = track !== "future";
  const hubTiles = [
    ...TABLES.map((t) => ({ key: t.key, label: t.label, sub: t.sub })),
    ...(showRouters ? [{ key: "allowances", label: "Allowances — Calculators Only", sub: "BAH · OHA · CONUS COLA · Overseas COLA · Per diem — routers, no rates" }] : []),
    { key: "notes", label: "Read First & Notes", sub: "How to read · table notes · E-pay · prior years · drill pay · limits" },
  ];
  const notesEntries: PackEntry[] = [PAY_HOW_TO_READ, ...PAY_NOTES_ENTRIES];
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = hubTiles.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      if (TABLES.some((t) => focusCard.startsWith(t.label))) return TABLES.find((t) => focusCard.startsWith(t.label))?.key ?? null;
      if (PAY_ROUTER_ENTRIES.some((e) => e.name === focusCard)) return showRouters ? "allowances" : null;
      if (notesEntries.some((e) => e.name === focusCard)) return "notes";
    }
    return null;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const activeTable = TABLES.find((t) => t.key === tile) ?? null;

  return (
    <div>
      <SectionHead
        title="Pay Charts & Rates"
        sub="The full 2026 DFAS monthly basic pay tables — and routers, never rates, for the location-based allowances."
      />
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="text-base text-[var(--text)]">{PAY_INTRO}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">{PAY_STANDING}</p>
      </div>
      {tile === null ? (
        <HubTileGrid label="Pay Charts & Rates areas" onOpen={setTile} tiles={hubTiles} />
      ) : (
        <>
          <HubBackButton ariaLabel="Back to all areas in Pay Charts & Rates" text="All areas" onBack={() => setTile(null)} />
          {activeTable ? (
            <PayTableView table={activeTable} />
          ) : tile === "allowances" ? (
            <EntryList entries={PAY_ROUTER_ENTRIES} tileLabel="Allowances — Calculators Only" />
          ) : (
            <EntryList entries={notesEntries} tileLabel="Read First & Notes" />
          )}
        </>
      )}
    </div>
  );
}
