// RankSheet — the detail sheet for one Rank Charts row, rendered
// from rankdetail.ts (the promotion pack). Reached by tapping a rank
// row in the Rank Charts, from Global Search, and from a Binder
// card. Shows the pack's UNIFORM SIX FIELDS: Typical TIS · Minimum
// TIS · Minimum TIG · PME (with the pack's tags as chips: REQ-PROMOTE
// / REQ-GRADE / EXPECTED and the pack's literal special labels) ·
// How promotion to this grade works · Other notes — then the pack's
// ⚠ flags and the source line. Every chart row has a record; the
// honest-empty fallback below exists only so a future chart row
// without a record still opens a sheet that says so, rather than a
// dead tap target.

import type { ReactNode } from "react";
import { CardTools } from "./binder";
import { FlagBox } from "./NewSections";
import { sheetSummary, type RankSheet as RankSheetData } from "./rankdetail";

const KIND_LABELS: Record<RankSheetData["kind"], string> = {
  promotion: "PROMOTION",
  entry: "ENTRY GRADE",
  appointment: "APPOINTMENT — NOT A PROMOTION",
  lateral: "LATERAL APPOINTMENT — SAME PAY GRADE",
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{label}</p>
      <div className="mt-1 text-base text-[var(--text)]">{children}</div>
    </div>
  );
}

function TagChip({ tag }: { tag: string }) {
  const strong = tag === "REQ-PROMOTE" || tag.startsWith("REQUIRED");
  return (
    <span
      className={`inline-block shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-bold tracking-wide ${
        strong
          ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--accent-word)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--dim)]"
      }`}
    >
      {tag}
    </span>
  );
}

export function RankSheetPanel({
  sheet,
  title,
  insignia,
  onBack,
}: {
  sheet: RankSheetData | null;
  /** The row's display title "{Branch} {grade} — {title}", built by
   * the caller from the chart row (the same string the sheet's
   * Binder card uses). */
  title: string;
  insignia?: ReactNode;
  onBack: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        aria-label="Back to Rank Charts"
        onClick={onBack}
        className="mb-4 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
      >
        ← Back to Rank Charts
      </button>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <div className="flex items-start gap-3">
          {insignia ? <div className="shrink-0">{insignia}</div> : null}
          <div>
            <p className="text-xs font-bold tracking-widest text-[var(--dim)]">
              RANK DETAIL SHEET{sheet ? ` · ${KIND_LABELS[sheet.kind]}` : ""}
            </p>
            <h3 className="font-display mt-0.5 text-xl font-bold text-[var(--text)]">{title}</h3>
          </div>
        </div>
        {sheet === null ? (
          <p className="mt-3 text-base text-[var(--text)]">
            No promotion detail is published for this row in the researched rank pack — the sheet exists so the row
            is never a dead end, and it will carry the fields when the pack covers this grade. The chart above
            remains the reference for the grade and title.
          </p>
        ) : (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Field label="TYPICAL TIME IN SERVICE">{sheet.typical}</Field>
              <Field label="MINIMUM TIME IN SERVICE">{sheet.minTis}</Field>
              <Field label="MINIMUM TIME IN GRADE">{sheet.minTig}</Field>
              <Field label="PME FOR THIS GRADE">
                <ul className="space-y-2">
                  {sheet.pme.map((p) => (
                    <li key={p.text.slice(0, 48)} className="flex flex-wrap items-start gap-2">
                      <span className="min-w-0 flex-1">{p.text}</span>
                      {p.tag ? <TagChip tag={p.tag} /> : null}
                    </li>
                  ))}
                </ul>
              </Field>
            </div>
            <div className="mt-3">
              <Field label="HOW PROMOTION TO THIS GRADE WORKS">
                {sheet.how.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-1 first:mt-0">
                    {p}
                  </p>
                ))}
              </Field>
            </div>
            {sheet.other ? (
              <div className="mt-3">
                <Field label="ALSO ON THIS SHEET">{sheet.other}</Field>
              </div>
            ) : null}
            {sheet.flags.map((f) => (
              <FlagBox key={f.slice(0, 48)} text={f} />
            ))}
            <p className="mt-3 text-xs text-[var(--dim)]">Sources: {sheet.source}</p>
            <CardTools
              cardRef={{
                section: "ranks",
                itemKey: sheet.key,
                title,
                summary: sheetSummary(sheet),
                source: sheet.source,
              }}
            />
          </>
        )}
      </article>
    </div>
  );
}
