// Calculators — the four calculators built from the Calculators Pack
// (~/workspace/military-app/calculators/calculators.md), rendered from
// the engines and tables in calculators.ts. Hub of four tiles per the
// house pattern; each tile is one calculator with its pack disclaimer
// in the UI, its flags printed as flags, and its worked-example
// defaults loaded so the pack's own examples reproduce on open.
//
// Privacy: every calculator's inputs persist PER PROFILE through
// getCalculatorState / saveCalculatorState (calculator_states) — the
// server resolves the signed-in profile and no profile id is ever
// sent. Inputs are never shared, never shown to another profile, and
// never appear on any squad/buddy/sharing surface.
//
// Track posture (following the existing hub postures): MEMBER — all
// four in full, cross-linked from Retirement Hub / TSP, VA Claims,
// PCS Move Center, and Pay & Money. SPOUSE — PCS Entitlements and
// Debt Payoff in full (the PCS Move Center is spouse-open in full and
// household money is Spouse Hub territory); Retirement and VA tiles
// are LOCKED on a spouse profile (the Retirement Hub is
// surviving-spouse-only there and VA Claims is not spouse-open),
// except the Retirement tile opens for a surviving spouse, matching
// the Retirement Hub's own spouse posture. FUTURE — the whole area
// is a locked card only; the view never renders in the future shell
// and the section is absent from future search and Buddy scopes.

import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { CardTools } from "./binder";
import { HubBackButton, HubTileGrid } from "./HubTiles";
import { FlagBox, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import {
  CALC_TILES,
  DLA_PRIMARY,
  DLA_SECONDARY,
  DEBT_DISCLAIMER,
  DEBT_MODEL_NOTE,
  HHG_TABLE,
  PCS_DISCLAIMER,
  RETIREMENT_DISCLAIMER,
  TSP_TABLE,
  VA_DISCLAIMER,
  continuationPay,
  dependentPerDiemPct,
  pcsTravelDays,
  reserveEquivalentYears,
  retirementAnnuity,
  runDebtPayoff,
  tleDaily,
  tlePercentage,
  tspForMemberPct,
  vaCombined,
  type CalcTileKey,
  type CalcViewKey,
  type DebtInput,
  type RetirementSystem,
  type VaBilateralGroup,
  type VaEntryInput,
} from "./calculators";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4";
const btnGhost =
  "min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--text)] disabled:opacity-50";
const linkBtnCls =
  "min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]";

export function money(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function NumField({
  id, label, value, onChange, step, min,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void; step?: string; min?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <input id={id} aria-label={label} type="number" inputMode="decimal" step={step ?? "any"} min={min}
        value={value} onChange={(e) => onChange(e.target.value)} className={inputCls} />
    </div>
  );
}

function TextField({
  id, label, value, onChange,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <input id={id} aria-label={label} type="text" value={value} onChange={(e) => onChange(e.target.value)} className={inputCls} />
    </div>
  );
}

function SelectField({
  id, label, value, onChange, options,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <select id={id} aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function ResultBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4" role="status">
      <p className="font-display text-base font-bold text-[var(--text)]">{title}</p>
      <div className="mt-1 text-base text-[var(--text)]">{children}</div>
    </div>
  );
}

function DisclaimerBox({ text }: { text: string }) {
  return (
    <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
      <p className="text-sm font-semibold text-[var(--text)]">{text}</p>
    </div>
  );
}

function CrossLinks({
  links, go, availableViews,
}: {
  links: { view: CalcViewKey; label: string }[];
  go?: (v: CalcViewKey) => void;
  availableViews?: readonly string[];
}) {
  const visible = links.filter((l) => !availableViews || availableViews.includes(l.view));
  if (!go || visible.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {visible.map((l) => (
        <button key={l.view + l.label} type="button" aria-label={l.label} onClick={() => go(l.view)} className={linkBtnCls}>
          {l.label} →
        </button>
      ))}
    </div>
  );
}

/** Per-profile persisted calculator state. Renders from the signed-in
 * profile's own saved payload; a profile switch can never show
 * another profile's inputs — the query key itself is scoped to the
 * profile (a different profile's cache entry is a different key, so
 * its payload can never be read here), an empty payload ("{}" — this
 * profile has never saved) resets the form to the defaults rather
 * than leaving whatever was on screen, and unsaved local edits are
 * the only thing that blocks re-applying the freshly fetched payload
 * (the Reenlistment checklist lesson).
 * DEFECT FIXED (live exercise, Nov 9, 2026): the key was previously
 * ["calcstate", calculatorId] with no profile scope, and the apply
 * effect skipped "{}" payloads — so after a profile switch the stale
 * cached payload of the previous profile was applied on mount and
 * never cleared when the new profile's empty payload arrived (the
 * member's PCS Government Constructed Cost rendered on the spouse
 * profile). Both halves are fixed here. */
function useCalcState<T extends object>(calculatorId: string, defaults: T, profileId: number): [T, (v: T) => void] {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["calcstate", profileId, calculatorId],
    queryFn: () => api.getCalculatorState({ calculatorId }),
  });
  const [state, setStateLocal] = useState<T>(defaults);
  const appliedRef = useRef<string | null>(null);
  const dirtyRef = useRef(false);
  useEffect(() => {
    const raw = query.data?.payloadJson;
    if (raw === undefined || raw === appliedRef.current || dirtyRef.current) return;
    appliedRef.current = raw;
    try {
      const parsed = JSON.parse(raw) as Partial<T>;
      setStateLocal({ ...defaults, ...parsed });
    } catch {
      setStateLocal(defaults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.data]);
  const save = useMutation({
    mutationFn: (payloadJson: string) => api.saveCalculatorState({ calculatorId, payloadJson }),
    onSuccess: (_d, payloadJson) => {
      appliedRef.current = payloadJson;
      queryClient.setQueryData(["calcstate", profileId, calculatorId], { payloadJson });
    },
  });
  const saveRef = useRef(save.mutate);
  saveRef.current = save.mutate;
  const timerRef = useRef<number | null>(null);
  const setState = (v: T) => {
    dirtyRef.current = true;
    setStateLocal(v);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      saveRef.current(JSON.stringify(v));
      dirtyRef.current = false;
    }, 600);
  };
  return [state, setState];
}

/* ------------------------------ Retirement ------------------------------ */

type RetState = {
  system: RetirementSystem;
  base: string;
  years: string;
  usePoints: boolean;
  points: string;
  cpPay: string;
  cpComponent: "active" | "reserve";
  cpMult: string;
  tspPct: string;
};
const RET_DEFAULTS: RetState = {
  system: "legacy", base: "4900", years: "20", usePoints: false, points: "4320",
  cpPay: "5000", cpComponent: "active", cpMult: "2.5", tspPct: "5",
};

function RetirementCalc({ go, availableViews, profileId }: { go?: (v: CalcViewKey) => void; availableViews?: readonly string[]; profileId: number }) {
  const [s, setS] = useCalcState<RetState>("retirement", RET_DEFAULTS, profileId);
  const base = parseFloat(s.base) || 0;
  const years = s.usePoints ? reserveEquivalentYears(parseFloat(s.points) || 0) : parseFloat(s.years) || 0;
  const legacy = retirementAnnuity(base, years, "legacy");
  const brs = retirementAnnuity(base, years, "brs");
  const chosen = retirementAnnuity(base, years, s.system);
  const mult = (s.system === "brs" ? 2.0 : 2.5) * years;
  const cp = continuationPay(parseFloat(s.cpPay) || 0, parseFloat(s.cpMult) || 0);
  const tsp = tspForMemberPct(parseFloat(s.tspPct) || 0);
  return (
    <section aria-label="Retirement Estimator">
      <DisclaimerBox text={RETIREMENT_DISCLAIMER} />
      <div className={cardCls}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Defined-benefit annuity</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Legacy (Final Pay and High-36) pays 2.5% × creditable years × your retired-pay base; BRS pays 2.0%.
          Gross monthly retired pay is rounded DOWN to the nearest dollar (DFAS). Your system is set by your
          DIEMS and any Service-confirmed BRS opt-in — this estimator does not decide which system applies to you.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <SelectField id="ret-system" label="Retirement system" value={s.system}
            onChange={(v) => setS({ ...s, system: v as RetirementSystem })}
            options={[
              { value: "finalpay", label: "Final Pay (DIEMS before Sep 8, 1980)" },
              { value: "legacy", label: "Legacy High-36" },
              { value: "brs", label: "Blended Retirement System (BRS)" },
            ]} />
          <NumField id="ret-base" label={s.system === "finalpay" ? "Final monthly basic pay ($)" : "High-36 average basic pay ($)"}
            value={s.base} onChange={(v) => setS({ ...s, base: v })} min={0} />
          <NumField id="ret-years" label="Creditable years of service (multiplier)" value={s.years}
            onChange={(v) => setS({ ...s, years: v, usePoints: false })} min={0} />
          <NumField id="ret-points" label="OR Reserve/Guard total retirement points" value={s.points}
            onChange={(v) => setS({ ...s, points: v, usePoints: true })} min={0} />
        </div>
        <p className="mt-2 text-sm text-[var(--dim)]">
          {s.usePoints
            ? `Points path: ${parseFloat(s.points) || 0} points ÷ 360 = ${years.toFixed(2)} equivalent years of multiplier service. Qualifying years for eligibility and pay-longevity service are different concepts — DFAS/your Service confirms each (Flag F-08).`
            : "Reserve/Guard: enter total retirement points instead and the multiplier service is points ÷ 360 (official example: 4,320 ÷ 360 = 12)."}
        </p>
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          ⚠ ESTIMATE LABEL: a high-36 average projected from a future rank or pay table is a user estimate, not a
          published entitlement — it depends on longevity, the pay-table year, promotion timing, and the actual
          highest 36 months (Flag F-04). An average from your actual pay history makes the formula result exact.
        </p>
        <ResultBox title="Gross monthly retired pay (before taxes, SBP, waivers, or other deductions)">
          <p>
            Your selected system ({s.system === "brs" ? "BRS" : s.system === "finalpay" ? "Final Pay" : "Legacy High-36"}):{" "}
            <strong>{money(chosen)}</strong> per month — multiplier {mult.toFixed(1)}% × {money(base)} base.
          </p>
          <p className="mt-1">
            Side by side at the same base and service: Legacy <strong>{money(legacy)}</strong> · BRS{" "}
            <strong>{money(brs)}</strong> (difference {money(legacy - brs)}).
          </p>
        </ResultBox>
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">BRS continuation pay</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Payable after completing 8 years of service but before completing 12, measured from PEBD, in exchange
          for additional obligated service. Published multiplier ranges: Active Component (incl. AGR/FTS)
          2.5×–13× monthly basic pay; Reserve Component 0.5×–6×. Your Service sets the actual multiplier — enter
          the Service-published figure.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <NumField id="ret-cp-pay" label="Monthly basic pay ($)" value={s.cpPay} onChange={(v) => setS({ ...s, cpPay: v })} min={0} />
          <SelectField id="ret-cp-comp" label="Component" value={s.cpComponent}
            onChange={(v) => setS({ ...s, cpComponent: v as "active" | "reserve", cpMult: v === "active" ? "2.5" : "0.5" })}
            options={[
              { value: "active", label: "Active / AGR / FTS (2.5×–13×)" },
              { value: "reserve", label: "Reserve Component (0.5×–6×)" },
            ]} />
          <NumField id="ret-cp-mult" label="Service multiplier (×)" value={s.cpMult} onChange={(v) => setS({ ...s, cpMult: v })} min={0} />
        </div>
        <ResultBox title="Gross continuation pay">
          <p>{money(parseFloat(s.cpPay) || 0)} × {parseFloat(s.cpMult) || 0}× = <strong>{money(cp)}</strong> (gross, before tax and any Service installment/obligation terms).</p>
        </ResultBox>
        <FlagBox text="Flag F-03: the latest Service continuation-pay rates table captured in the research was dated March 26, 2024 and is NOT presented here as the current table. The multiplier is a Service-confirmed input — verify yours with your Service before relying on this figure." />
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">BRS TSP government contributions</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Service Automatic Contribution: 1% of basic pay, beginning after 60 days of service, vesting at the
          25th month. Service Matching Contributions: from the first day of the 25th month through the 26th year
          — 100% of the first 3% you contribute plus 50% of the next 2% (maximum match 4%). Percentages are the
          published rules; a future TSP BALANCE is a projection that needs an assumed rate of return, which is
          an assumption, not an entitlement (Flag F-05) — no balance is projected here.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <NumField id="ret-tsp" label="Your TSP contribution (% of basic pay)" value={s.tspPct} onChange={(v) => setS({ ...s, tspPct: v })} min={0} />
        </div>
        <ResultBox title="At your contribution rate">
          <p>
            You contribute {tsp.memberPct}% · Service match {tsp.matchPct}% · total government contribution{" "}
            {tsp.govTotalPct}% (match + 1% automatic) · total going in {tsp.totalPct}% of basic pay.
          </p>
        </ResultBox>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">You contribute</th>
                <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Service match</th>
                <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Government total (incl. 1% automatic)</th>
                <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Total incl. yours</th>
              </tr>
            </thead>
            <tbody>
              {TSP_TABLE.map((r) => (
                <tr key={r.memberPct} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2 text-[var(--text)]">{r.memberPct}%</td>
                  <td className="px-3 py-2 text-[var(--text)]">{r.matchPct}%</td>
                  <td className="px-3 py-2 text-[var(--text)]">{r.govTotalPct}%</td>
                  <td className="px-3 py-2 text-[var(--text)]">{r.totalPct}%</td>
                </tr>
              ))}
              <tr className="border-t border-[var(--border)]">
                <td className="px-3 py-2 text-[var(--text)]">More than 5%</td>
                <td className="px-3 py-2 text-[var(--text)]">4%</td>
                <td className="px-3 py-2 text-[var(--text)]">5%</td>
                <td className="px-3 py-2 text-[var(--text)]">Your % + 5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <FlagBox text="Flag F-06: the 60-day automatic start and 25th-month matching/vesting pattern is the standard BRS cohort. Opt-in, prior-service, and re-entry members can have different start/vesting facts — use the eligibility dates your Service confirms." />
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">BRS lump-sum option — described, not priced</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          A BRS member who qualifies for retired pay may elect 25% or 50% of the discounted present value of
          future retired pay. Monthly retired pay is then reduced until full Social Security retirement age
          (usually 67), when it is restored to the full amount. The election notice is due at least 90 days
          before retirement (Guard/Reserve: at least 90 days before receipt of retired pay). The discount basis
          is the Government Discount Rate (GDR), approved annually and published June 1 for the following year.
        </p>
        <FlagBox text="Flag F-01 — NO LUMP-SUM DOLLAR FIGURE IS COMPUTED HERE, ON PURPOSE: the current Government Discount Rate was not captured from an official publication in the research (only dated values: 6.99% as of Jan 1, 2018 and 6.54% for CY2022), and an exact amount also needs the official actuarial basis for your retirement date. No rate is guessed or hard-coded. Flag F-02: the 4.00% figure the official BRS Standalone Calculator names is its comparative present-value assumption — it is NOT the GDR for an actual lump-sum election. Run the official calculator and confirm with DFAS / your Service retirement office." />
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="https://militarypay.defense.gov/Calculators/Blended-Retirement-System-Standalone-Calculator/" target="_blank" rel="noreferrer" aria-label="Official BRS Standalone Calculator (opens in new tab)" className={linkBtnCls}>Official BRS Standalone Calculator ↗</a>
          <a href="https://www.dfas.mil/retiredmilitary/plan/estimate.html" target="_blank" rel="noreferrer" aria-label="DFAS estimate your retirement pay (opens in new tab)" className={linkBtnCls}>DFAS — Estimate Your Retirement Pay ↗</a>
          <a href="https://militarypay.defense.gov/Pay/Military-Retirement/" target="_blank" rel="noreferrer" aria-label="MilitaryPay Military Retirement (opens in new tab)" className={linkBtnCls}>MilitaryPay — Military Retirement ↗</a>
        </div>
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">REDUX and disability — notes, routed to DFAS</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          REDUX / Career Status Bonus ($30,000 at 15 years; pre-62 multiplier reduced 1 percentage point per year
          under 30 years of service — 40% at 20 years — restored at 62; COLA normally CPI minus 1) was electable
          only through December 31, 2017 and is not a generally available modern choice. Disability retirement
          uses the higher of the DoD disability percentage (capped at 75%) or years × 2.5% (legacy) / 2.0% (BRS),
          with a 50% minimum on the TDRL — it is NOT folded into the estimator above. Both cases route to DFAS
          and your Service disability/retirement system (Flag F-07).
        </p>
      </div>
      <CrossLinks
        go={go} availableViews={availableViews}
        links={[
          { view: "retirement", label: "Retirement Hub — the full picture" },
          { view: "tsp", label: "TSP Center" },
        ]}
      />
      <CardTools cardRef={{ section: "calculators", itemKey: "retirement-estimator", title: "Retirement Estimator", summary: "Legacy 2.5% / BRS 2.0% annuity estimate, continuation pay, and TSP government contributions — estimate only, not a DFAS determination.", source: "MilitaryPay / DFAS via the Calculators Pack (Part 1)" }} />
    </section>
  );
}

/* --------------------------- VA Combined Ratings --------------------------- */

type VaState = { entries: VaEntryInput[] };
const VA_DEFAULTS: VaState = {
  entries: [
    { rating: 50, label: "Condition 1", bilateral: "none" },
    { rating: 30, label: "Condition 2", bilateral: "none" },
  ],
};
const VA_PRESETS: { name: string; entries: VaEntryInput[] }[] = [
  {
    name: "Example: 50% + 30%",
    entries: [
      { rating: 50, label: "Condition 1", bilateral: "none" },
      { rating: 30, label: "Condition 2", bilateral: "none" },
    ],
  },
  {
    name: "Example: 40% + 20%",
    entries: [
      { rating: 40, label: "Condition 1", bilateral: "none" },
      { rating: 20, label: "Condition 2", bilateral: "none" },
    ],
  },
  {
    name: "Example: 60% + 40% + 20%",
    entries: [
      { rating: 60, label: "Condition 1", bilateral: "none" },
      { rating: 40, label: "Condition 2", bilateral: "none" },
      { rating: 20, label: "Condition 3", bilateral: "none" },
    ],
  },
  {
    name: "Regulation's bilateral example: 60%, 20%, bilateral 10% + 10%",
    entries: [
      { rating: 60, label: "Condition 1", bilateral: "none" },
      { rating: 20, label: "Condition 2", bilateral: "none" },
      { rating: 10, label: "Left leg", bilateral: "legs" },
      { rating: 10, label: "Right leg", bilateral: "legs" },
    ],
  },
];

function VaCalc({ go, availableViews, profileId }: { go?: (v: CalcViewKey) => void; availableViews?: readonly string[]; profileId: number }) {
  const [s, setS] = useCalcState<VaState>("va", VA_DEFAULTS, profileId);
  const result = vaCombined(s.entries);
  const update = (i: number, patch: Partial<VaEntryInput>) =>
    setS({ entries: s.entries.map((e, j) => (j === i ? { ...e, ...patch } : e)) });
  return (
    <section aria-label="VA Combined Ratings Calculator">
      <DisclaimerBox text={VA_DISCLAIMER} />
      <div className={cardCls}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Your ratings</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Enter each evaluation as VA assigned it (multiples of 10). Mark a pair as bilateral only when the
          conditions affect both arms, both legs, paired skeletal muscles, or all four extremities — VA decides
          bilateral status; marking it here only runs §4.26's math. The full §4.25 Table I is the engine: the
          “efficiency” formula in the regulation explains the table and is used only as a cross-check (Flag F-13).
        </p>
        <div className="mt-3 space-y-3">
          {s.entries.map((e, i) => (
            <div key={i} className="grid gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 sm:grid-cols-[1fr_110px_190px_auto]">
              <TextField id={`va-label-${i}`} label={`Condition ${i + 1} label`} value={e.label} onChange={(v) => update(i, { label: v })} />
              <SelectField id={`va-rating-${i}`} label="Rating" value={String(e.rating)}
                onChange={(v) => update(i, { rating: parseInt(v, 10) || 0 })}
                options={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((n) => ({ value: String(n), label: `${n}%` }))} />
              <SelectField id={`va-bil-${i}`} label="Bilateral grouping" value={e.bilateral}
                onChange={(v) => update(i, { bilateral: v as VaBilateralGroup })}
                options={[
                  { value: "none", label: "Not bilateral" },
                  { value: "arms", label: "Arm pair" },
                  { value: "legs", label: "Leg pair" },
                  { value: "muscles", label: "Paired skeletal muscles" },
                  { value: "allfour", label: "All four extremities" },
                ]} />
              <div className="flex items-end">
                <button type="button" aria-label={`Remove condition ${i + 1}`} disabled={s.entries.length <= 1}
                  onClick={() => setS({ entries: s.entries.filter((_, j) => j !== i) })} className={btnGhost}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" aria-label="Add a condition"
            onClick={() => setS({ entries: [...s.entries, { rating: 10, label: `Condition ${s.entries.length + 1}`, bilateral: "none" }] })}
            className={btnGhost}>
            + Add a condition
          </button>
          {VA_PRESETS.map((p) => (
            <button key={p.name} type="button" aria-label={`Load preset: ${p.name}`}
              onClick={() => setS({ entries: p.entries.map((e) => ({ ...e })) })} className={btnGhost}>
              {p.name}
            </button>
          ))}
        </div>
        <ResultBox title="Combined rating — the regulation's math, step by step">
          {result.final !== null ? (
            <p className="font-display text-xl font-bold">
              Final combined rating: {result.final}%{" "}
              <span className="text-base font-semibold">(unconverted {result.unconverted})</span>
            </p>
          ) : (
            <p className="font-bold">No final rating is shown for this combination — see the flag below.</p>
          )}
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            {result.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {result.bilateralNote ? <p className="mt-2 text-sm">{result.bilateralNote}</p> : null}
        </ResultBox>
        {result.altFinal !== null ? (
          <div className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-4">
            <p className="font-display text-base font-bold text-[var(--text)]">
              §4.26(d) most-favorable comparison — regulation math, not VA's adjudicative determination
            </p>
            <p className="mt-1 text-sm text-[var(--text)]">
              With the bilateral factor: <strong>{result.final}%</strong>. With the bilateral disabilities removed
              from the factor and combined separately: <strong>{result.altFinal}%</strong>.{" "}
              {result.favorable === "separate"
                ? "Combining separately produces the higher result here, so under §4.26(d) the bilateral disabilities would be removed from the bilateral-factor calculation — the result most favorable to the veteran controls. VA makes that adjudicative call, not this calculator."
                : result.favorable === "bilateral"
                  ? "The bilateral-factor path produces the higher result here, so it controls under §4.26(d)'s most-favorable rule. VA makes that adjudicative call, not this calculator."
                  : "Both paths produce the same final rating here. VA makes the adjudicative call, not this calculator."}
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[var(--text)]">
              {result.altSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ) : null}
        {result.flag ? <FlagBox text={result.flag} /> : null}
        <p className="mt-3 text-sm text-[var(--dim)]">
          Cross-check (explanation only): a 60% disability leaves 40% efficiency; a further 30% applies to that
          40%, leaving 28% efficiency — 72% disabled, which is exactly Table I's cell for 60 with 30. The table,
          not this formula, produces every result above.
        </p>
      </div>
      <CrossLinks go={go} availableViews={availableViews} links={[{ view: "claims", label: "VA Claims & Free Help" }]} />
      <CardTools cardRef={{ section: "calculators", itemKey: "va-combined-ratings", title: "VA Combined Ratings Calculator", summary: "38 CFR §4.25 Table I + §4.26 bilateral factor on ratings you enter — regulation math, not a VA decision.", source: "38 CFR §4.25 / §4.26 via the Calculators Pack (Part 2)" }} />
    </section>
  );
}

/* ----------------------------- PCS Entitlements ----------------------------- */

type PcsState = {
  hhgGrade: string; hhgDeps: boolean; countedWeight: string;
  dlaGrade: string; dlaDeps: boolean;
  tleMember: boolean; tleDepsText: string; tleLodging: string; tleMie: string; tleActual: string; tleDays: string;
  miles: string; depScenario: "withMember" | "oneSeparate" | "firstOfSeparate" | "additionalSeparate"; depAge: string;
  gcc: string;
};
const PCS_DEFAULTS: PcsState = {
  hhgGrade: "E-7", hhgDeps: true, countedWeight: "14250",
  dlaGrade: "E-7", dlaDeps: true,
  tleMember: true, tleDepsText: "adult, 14, 8", tleLodging: "150", tleMie: "80", tleActual: "240", tleDays: "5",
  miles: "751", depScenario: "withMember", depAge: "14",
  gcc: "",
};

function parseDepAges(text: string): number[] {
  return text.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean).map((t) => {
    if (t === "adult" || t === "spouse") return 99;
    const n = parseInt(t, 10);
    return Number.isFinite(n) ? n : 99;
  });
}

function PcsCalc({ go, availableViews, profileId }: { go?: (v: CalcViewKey) => void; availableViews?: readonly string[]; profileId: number }) {
  const [s, setS] = useCalcState<PcsState>("pcs", PCS_DEFAULTS, profileId);
  const hhg = HHG_TABLE.find((r) => r.grade === s.hhgGrade) ?? (HHG_TABLE[0] as (typeof HHG_TABLE)[number]);
  const hhgAllowance = s.hhgDeps ? hhg.withDeps : hhg.withoutDeps;
  const counted = parseFloat(s.countedWeight) || 0;
  const dla = DLA_PRIMARY.find((r) => r.grade === s.dlaGrade) ?? (DLA_PRIMARY[0] as (typeof DLA_PRIMARY)[number]);
  const dlaSec = DLA_SECONDARY.find((r) => r.grade === s.dlaGrade);
  const dlaAmount = s.dlaDeps ? dla.withDeps : dla.withoutDeps;
  const depAges = parseDepAges(s.tleDepsText);
  const tlePct = tlePercentage(s.tleMember, depAges);
  const tlePerDay = tleDaily(tlePct, parseFloat(s.tleLodging) || 0, parseFloat(s.tleMie) || 0, parseFloat(s.tleActual) || 0);
  const tleTotal = Math.round(tlePerDay * (parseFloat(s.tleDays) || 0) * 100) / 100;
  const days = pcsTravelDays(parseFloat(s.miles) || 0);
  const depPct = dependentPerDiemPct(s.depScenario, parseFloat(s.depAge) || 0);
  const gcc = parseFloat(s.gcc) || 0;
  const checkCls = "mt-0.5 h-5 w-5 shrink-0 accent-[var(--accent)]";
  return (
    <section aria-label="PCS Entitlements Calculator">
      <DisclaimerBox text={PCS_DISCLAIMER} />
      <div className={cardCls}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Household goods weight allowance — JTR Table 5-37</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Set by your pay grade and dependent status on the effective date of the PCS order. The allowance covers
          HHG shipped + unaccompanied baggage + HHG in storage combined. NOT counted: professional books, papers
          and equipment (PBP&E), required medical equipment, and gun safes.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <SelectField id="pcs-hhg-grade" label="Pay grade (Table 5-37)" value={s.hhgGrade}
            onChange={(v) => setS({ ...s, hhgGrade: v })}
            options={HHG_TABLE.map((r) => ({ value: r.grade, label: r.grade }))} />
          <NumField id="pcs-counted" label="Your counted weight (HHG + baggage + storage, lb)" value={s.countedWeight}
            onChange={(v) => setS({ ...s, countedWeight: v })} min={0} />
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--text)]">
          <input type="checkbox" checked={s.hhgDeps} onChange={(e) => setS({ ...s, hhgDeps: e.target.checked })}
            aria-label="With dependents (a dependent eligible to travel at Government expense on the order's effective date)" className={checkCls} />
          With dependents (eligible to travel at Government expense on the order's effective date)
        </label>
        <ResultBox title="Your Table 5-37 allowance">
          <p><strong>{hhgAllowance.toLocaleString("en-US")} lb</strong> for {s.hhgGrade} {s.hhgDeps ? "with" : "without"} dependents.</p>
          {counted > 0 ? (
            <p className="mt-1">
              {counted > hhgAllowance
                ? <>Counted weight {counted.toLocaleString("en-US")} lb is <strong>{(counted - hhgAllowance).toLocaleString("en-US")} lb over</strong> the allowance. No dollar charge is shown — excess cost depends on the Government's applicable transportation cost and is confirmed by the Transportation Office.</>
                : <>Counted weight {counted.toLocaleString("en-US")} lb is within the allowance ({(hhgAllowance - counted).toLocaleString("en-US")} lb to spare).</>}
            </p>
          ) : null}
        </ResultBox>
        <FlagBox text="Flag F-23: an OCONUS permanent duty station can carry an administratively restricted limit below Table 5-37 (Government-furnished HHG, housing/storage space, local conditions). The restricted limit is order/location-specific — confirm it, and your ship-the-remainder / non-temporary storage options, with the Transportation Office. Flag F-22: member-married-to-member HHG cases are governed by Table 5-38 / §051402-F — route dual-order cases to the Transportation Office." />
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Dislocation Allowance (DLA) — CY2026 primary rates</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          A rate-table lookup by grade and dependent status (JTR §0505) — first confirm your eligibility class
          under §0505, then read the rate. Generally one DLA per fiscal year. Married-to-another-member cases are
          governed by Table 5-11 and route to finance (Flag F-22) — do not use this single-member lookup for them.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <SelectField id="pcs-dla-grade" label="Pay grade (CY2026 primary DLA)" value={s.dlaGrade}
            onChange={(v) => setS({ ...s, dlaGrade: v })}
            options={DLA_PRIMARY.map((r) => ({ value: r.grade, label: r.grade }))} />
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--text)]">
          <input type="checkbox" checked={s.dlaDeps} onChange={(e) => setS({ ...s, dlaDeps: e.target.checked })}
            aria-label="With dependent (a dependent authorized transportation under the order, relocating in connection with the PCS)" className={checkCls} />
          With dependent (authorized transportation under the order and relocating with the PCS)
        </label>
        <ResultBox title="Primary DLA (CY2026)">
          <p><strong>{money(dlaAmount)}</strong> for {s.dlaGrade} {s.dlaDeps ? "with" : "without"} dependent.</p>
          {dlaSec ? (
            <p className="mt-1 text-sm">
              Secondary DLA (a second qualifying move under §050507 — amended/canceled orders):{" "}
              {money(s.dlaDeps ? dlaSec.withDeps : dlaSec.withoutDeps)} from the captured secondary table — see the flag below.
            </p>
          ) : null}
        </ResultBox>
        <FlagBox text="Flag F-17: in the captured PDTATAC document the primary rates are effective January 1, 2026 but the secondary rates are stated effective January 1, 2025. Verify the secondary table's currency separately before treating it as current. Flag F-16: partial DLA (ordered to occupy/vacate Government quarters for the Government's convenience) is a flat amount the JTR routes to DTMO's DLA page — no amount is hard-coded here; check DTMO / your finance office." />
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Temporary Lodging Expense (TLE) — Table 5-17 + $290/day cap</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          CONUS only, and only for days PCS per diem is not paid: 21 days for a CONUS PDS, 7 days when the new PDS
          is OCONUS, up to 60 days only at DTMO-approved extended locations (disaster / surge / housing shortage).
          The locality lodging and M&IE rates below are YOUR inputs from DTMO's Per Diem Rate Calculator — no
          locality rate is hard-coded in this app (Flag F-20). The rates in the defaults are the pack's labeled
          ILLUSTRATIVE example rates, not an official rate for any place.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <TextField id="pcs-tle-deps" label="Dependents in the lodging (ages, oldest first — write “adult” for a spouse/adult)" value={s.tleDepsText}
            onChange={(v) => setS({ ...s, tleDepsText: v })} />
          <NumField id="pcs-tle-lodging" label="Locality lodging rate from DTMO ($)" value={s.tleLodging} onChange={(v) => setS({ ...s, tleLodging: v })} min={0} />
          <NumField id="pcs-tle-mie" label="Locality M&IE rate from DTMO ($)" value={s.tleMie} onChange={(v) => setS({ ...s, tleMie: v })} min={0} />
          <NumField id="pcs-tle-actual" label="Your actual daily lodging expense ($)" value={s.tleActual} onChange={(v) => setS({ ...s, tleActual: v })} min={0} />
          <NumField id="pcs-tle-days" label="TLE days" value={s.tleDays} onChange={(v) => setS({ ...s, tleDays: v })} min={0} />
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--text)]">
          <input type="checkbox" checked={s.tleMember} onChange={(e) => setS({ ...s, tleMember: e.target.checked })}
            aria-label="Service member occupies the temporary lodging" className={checkCls} />
          Service member occupies the temporary lodging
        </label>
        <ResultBox title="Daily TLE">
          <p>
            Table 5-17 percentage: <strong>{tlePct}%</strong> (base 100% for the first two persons; each additional
            dependent +35% at age 12+, +25% under 12, added oldest first). Daily TLE = min($290 cap, min(actual
            lodging, {tlePct}% × locality lodging) + {tlePct}% × locality M&IE) = <strong>{money(tlePerDay)}</strong>
            {tlePerDay >= 290 ? " — the $290 daily cap applies" : ""}. For {parseFloat(s.tleDays) || 0} days:{" "}
            <strong>{money(tleTotal)}</strong>.
          </p>
          <p className="mt-1 text-sm">Staying with friends or relatives: no lodging reimbursement, but the meals portion of TLE remains payable. Two members married to each other: each starts at 65%, a dependent raises only the claiming member's percentage, and each is capped at $290/day.</p>
        </ResultBox>
        <FlagBox text="Flag F-18: this working formula follows DTMO's TLE FAQ steps (percentage × locality rates, actual lodging applied, then the $290 cap). The exact actual-lodging step is referred by the JTR to DTMO's computation example — verify your claim computation with finance." />
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="https://www.travel.dod.mil/" target="_blank" rel="noreferrer" aria-label="DTMO travel.dod.mil — use the Per Diem Rate Calculator for your locality rates (opens in new tab)" className={linkBtnCls}>DTMO (travel.dod.mil) — Per Diem Rate Calculator ↗</a>
          <a href="https://media.defense.gov/2022/Jan/04/2002917147/-1/1/1/JTR.PDF" target="_blank" rel="noreferrer" aria-label="Joint Travel Regulations (opens in new tab)" className={linkBtnCls}>Joint Travel Regulations ↗</a>
        </div>
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">PCS travel days & dependent per diem</h4>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <NumField id="pcs-miles" label="Official distance (miles)" value={s.miles} onChange={(v) => setS({ ...s, miles: v })} min={0} />
          <SelectField id="pcs-dep-scenario" label="Dependent travel situation (Table 5-6)" value={s.depScenario}
            onChange={(v) => setS({ ...s, depScenario: v as PcsState["depScenario"] })}
            options={[
              { value: "withMember", label: "Travels with the Service member" },
              { value: "oneSeparate", label: "One dependent travels separately" },
              { value: "firstOfSeparate", label: "First of 2+ dependents traveling separately" },
              { value: "additionalSeparate", label: "Additional dependent traveling with the first" },
            ]} />
          <NumField id="pcs-dep-age" label="Dependent age (on the order's effective date)" value={s.depAge} onChange={(v) => setS({ ...s, depAge: v })} min={0} />
        </div>
        <ResultBox title="Authorized travel time & dependent percentage">
          <p>
            <strong>{days} travel day{days === 1 ? "" : "s"}</strong> authorized for {parseFloat(s.miles) || 0} miles
            (400 or fewer = 1 day; over 400: ÷ 350, plus one day when the remainder is 51 or more). Per diem uses
            the lesser of authorized or actual travel time. This dependent's per diem is{" "}
            <strong>{depPct}%</strong> of the member's rate under Table 5-6.
          </p>
          <p className="mt-1 text-sm">
            The dollar rates themselves (standard CONUS / MALT Plus and locality rates) are current-rate lookups,
            not hard-coded figures (Flags F-19/F-20) — get them from DTMO's Per Diem Rate Calculator and your
            orders. International Date Line crossings can add or subtract a day — those cases route to the JTR
            computation examples.
          </p>
        </ResultBox>
      </div>

      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Personally Procured Move (PPM)</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Your weight allowance is the Table 5-37 figure above. Under the Monetary Allowance Method (Tender of
          Service), the allowance is 100% of the Government Constructed Cost (GCC) — the Government's Best Value
          cost for your actual weight up to your allowance, which only your Transportation Office / DPS estimate
          can give you. Enter it here to see the Tender of Service amount; an advance of 60% of the monetary
          allowance is available under the JTR's advance rules. PPM amounts are potentially taxable.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <NumField id="pcs-gcc" label="Government Constructed Cost from your Transportation Office / DPS estimate ($)" value={s.gcc}
            onChange={(v) => setS({ ...s, gcc: v })} min={0} />
        </div>
        {gcc > 0 ? (
          <ResultBox title="Tender of Service monetary allowance">
            <p>100% × {money(gcc)} GCC = <strong>{money(gcc)}</strong> (settled on the actual weight moved, limited to your authorized allowance).</p>
          </ResultBox>
        ) : (
          <p className="mt-2 text-sm text-[var(--dim)]">No GCC entered — get the estimate from your Transportation Office / DPS; this app cannot construct it from grade and distance.</p>
        )}
        <FlagBox text="Flag F-15 — GHC PERCENTAGE UNRESOLVED, NOT PRINTED AS SETTLED: the captured JTR paragraph prints 130% of Global Household Goods Contract rates only for PPMs from May 15 – September 30, 2025, a window already expired on its face, while DTMO's change list records the temporary increase without a captured later end date. This calculator therefore shows NO GHC percentage as the current rate — verify the percentage in force for your move's commencement date in the current JTR / with your Transportation Office before using a GHC figure." />
      </div>
      <CrossLinks go={go} availableViews={availableViews} links={[{ view: "pcs", label: "PCS Move Center" }, { view: "pay", label: "Pay & Money" }]} />
      <CardTools cardRef={{ section: "calculators", itemKey: "pcs-entitlements", title: "PCS Entitlements Calculator", summary: "JTR Table 5-37 HHG allowances, CY2026 DLA, TLE with the $290 cap, travel days, and PPM from a supplied GCC.", source: "JTR Chapter 5 / DTMO via the Calculators Pack (Part 3)" }} />
    </section>
  );
}

/* ------------------------------- Debt Payoff ------------------------------- */

type ScraMode = "none" | "applied" | "whatif";
type DebtRow = DebtInput & { scra: ScraMode };
type DebtState = { debts: DebtRow[]; extra: string; startYear: string; startMonth: string };
const DEBT_DEFAULTS: DebtState = {
  debts: [
    { name: "Card A", balance: 1200, apr: 24, minimum: 35, scra: "none" },
    { name: "Store Card B", balance: 600, apr: 18, minimum: 25, scra: "none" },
    { name: "Loan C", balance: 3000, apr: 9, minimum: 75, scra: "none" },
  ],
  extra: "150", startYear: "2027", startMonth: "1",
};
const MONTH_OPTIONS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** Chronological sort key for a "Mon YYYY" payoff label. */
function payoffSortKey(label: string | null): number {
  if (!label) return Number.MAX_SAFE_INTEGER;
  const [mon = "", year = ""] = label.split(" ");
  return (parseInt(year, 10) || 0) * 12 + SHORT_MONTHS.indexOf(mon);
}

function DebtCalc({ go, availableViews, profileId }: { go?: (v: CalcViewKey) => void; availableViews?: readonly string[]; profileId: number }) {
  const [s, setS] = useCalcState<DebtState>("debt", DEBT_DEFAULTS, profileId);
  const extra = parseFloat(s.extra) || 0;
  const sy = parseInt(s.startYear, 10) || 2027;
  const sm = parseInt(s.startMonth, 10) || 1;
  const inputs: DebtInput[] = s.debts.map((d) => ({ name: d.name, balance: d.balance || 0, apr: d.apr || 0, minimum: d.minimum || 0 }));
  // User-CONFIRMED applied SCRA caps change the modeled APR in the
  // main runs (min(entered APR, 6%)) — the user asserts the cap is
  // applied; the calculator never decides eligibility (Flag F-33).
  const appliedOverrides = s.debts.map((d) => (d.scra === "applied" ? Math.min(d.apr || 0, 6) : null));
  const hasApplied = appliedOverrides.some((o) => o !== null);
  const baseline = runDebtPayoff(inputs, extra, "minimums", sy, sm, hasApplied ? appliedOverrides : undefined);
  const snowball = runDebtPayoff(inputs, extra, "snowball", sy, sm, hasApplied ? appliedOverrides : undefined);
  const avalanche = runDebtPayoff(inputs, extra, "avalanche", sy, sm, hasApplied ? appliedOverrides : undefined);
  // WHAT-IF scenario: debts the user marked "possibly eligible — not
  // yet requested/applied" are capped at 6% in a SEPARATE pair of
  // runs, clearly labeled; the main results never include them.
  const whatifIdx = s.debts.map((d, i) => (d.scra === "whatif" ? i : -1)).filter((i) => i >= 0);
  const whatifOverrides = s.debts.map((d) => (d.scra === "applied" || d.scra === "whatif" ? Math.min(d.apr || 0, 6) : null));
  const whatifSnow = whatifIdx.length > 0 ? runDebtPayoff(inputs, extra, "snowball", sy, sm, whatifOverrides) : null;
  const whatifAva = whatifIdx.length > 0 ? runDebtPayoff(inputs, extra, "avalanche", sy, sm, whatifOverrides) : null;
  const update = (i: number, patch: Partial<DebtRow>) =>
    setS({ ...s, debts: s.debts.map((d, j) => (j === i ? { ...d, ...patch } : d)) });
  const nonAmortizing = [...new Set([...baseline.nonAmortizing, ...snowball.nonAmortizing, ...avalanche.nonAmortizing])];
  const firstPayoff = (run: typeof snowball) => {
    const dated = run.perDebt.filter((d) => d.payoffLabel);
    return dated.length
      ? dated.map((d) => d.payoffLabel as string).sort((a, b) => payoffSortKey(a) - payoffSortKey(b))[0]
      : null;
  };
  const runs = [
    { label: "Minimums only (baseline)", run: baseline },
    { label: "Snowball — smallest balance first", run: snowball },
    { label: "Avalanche — highest APR first", run: avalanche },
  ];
  return (
    <section aria-label="Debt Payoff Calculator">
      <DisclaimerBox text={DEBT_DISCLAIMER} />
      <div className={cardCls}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Your debts</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          CFPB's two strategies: <strong>snowball</strong> pays the smallest balance first (accounts disappear
          sooner, which can keep you motivated) and <strong>avalanche</strong> pays the highest APR first (can
          save money in the long run). CFPB does not call one universally better — choose the one most likely to
          keep you paying. {DEBT_MODEL_NOTE}
        </p>
        <div className="mt-3 space-y-3">
          {s.debts.map((d, i) => (
            <div key={i} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
              <div className="grid gap-2 sm:grid-cols-2">
                <TextField id={`debt-name-${i}`} label={`Debt ${i + 1} name`} value={d.name} onChange={(v) => update(i, { name: v })} />
                <SelectField id={`debt-scra-${i}`} label="SCRA 6% cap scenario (optional)" value={d.scra}
                  onChange={(v) => update(i, { scra: v as ScraMode })}
                  options={[
                    { value: "none", label: "No SCRA scenario" },
                    { value: "applied", label: "Cap APPLIED — I confirm my creditor applied the 6% SCRA cap" },
                    { value: "whatif", label: "Possibly eligible — not requested/applied (what-if only)" },
                  ]} />
                <NumField id={`debt-bal-${i}`} label="Current balance ($)" value={String(d.balance)}
                  onChange={(v) => update(i, { balance: parseFloat(v) || 0 })} min={0} />
                <NumField id={`debt-apr-${i}`} label="APR (%)" value={String(d.apr)} onChange={(v) => update(i, { apr: parseFloat(v) || 0 })} min={0} />
                <NumField id={`debt-min-${i}`} label="Required minimum payment ($/month, fixed amount)" value={String(d.minimum)}
                  onChange={(v) => update(i, { minimum: parseFloat(v) || 0 })} min={0} />
              </div>
              <div className="mt-2">
                <button type="button" aria-label={`Remove debt ${i + 1}`} disabled={s.debts.length <= 1}
                  onClick={() => setS({ ...s, debts: s.debts.filter((_, j) => j !== i) })} className={btnGhost}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <NumField id="debt-extra" label="Extra monthly amount above all minimums ($)" value={s.extra} onChange={(v) => setS({ ...s, extra: v })} min={0} />
          <SelectField id="debt-start-month" label="Start month (first modeled payment)" value={s.startMonth}
            onChange={(v) => setS({ ...s, startMonth: v })}
            options={MONTH_OPTIONS.map((m, i) => ({ value: String(i + 1), label: m }))} />
          <NumField id="debt-start-year" label="Start year" value={s.startYear} onChange={(v) => setS({ ...s, startYear: v })} min={2000} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" aria-label="Add a debt"
            onClick={() => setS({ ...s, debts: [...s.debts, { name: `Debt ${s.debts.length + 1}`, balance: 0, apr: 0, minimum: 0, scra: "none" as ScraMode }] })}
            className={btnGhost}>
            + Add a debt
          </button>
          <button type="button" aria-label="Load the pack's worked example"
            onClick={() => setS({ ...DEBT_DEFAULTS, debts: DEBT_DEFAULTS.debts.map((d) => ({ ...d })) })} className={btnGhost}>
            Load the pack's worked example
          </button>
        </div>
        {nonAmortizing.length > 0 ? (
          <div className="mt-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3" role="alert">
            <p className="text-sm font-bold text-[var(--text)]">
              ⚠ NON-AMORTIZATION WARNING: {nonAmortizing.join(", ")} — the minimum payment is at or below the
              first month's modeled interest, so that debt does not pay down under the stated assumptions and no
              debt-free date is reported for the affected method (Flag F-34). Talk to a free Personal Financial
              Counselor (below) about options — do not rely on a payoff date this model cannot produce.
            </p>
          </div>
        ) : null}
        {hasApplied ? (
          <p className="mt-3 rounded bg-[var(--surface2)] p-2 text-sm font-semibold text-[var(--text)]">
            SCRA: you marked {s.debts.filter((d) => d.scra === "applied").map((d) => d.name).join(", ")} as
            “cap applied — user-confirmed.” Those debts are modeled at 6% APR in the results below because YOU
            confirmed the creditor applied the cap. This calculator does not determine SCRA eligibility.
          </p>
        ) : null}
        <ResultBox title="Results — all three methods on your numbers">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[var(--surface2)]">
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Method</th>
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Payoff order</th>
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Debt-free</th>
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Total interest</th>
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Total paid</th>
                  <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Saved vs baseline</th>
                </tr>
              </thead>
              <tbody>
                {runs.map(({ label, run }) => (
                  <tr key={label} className="border-t border-[var(--border)] align-top">
                    <th scope="row" className="px-3 py-2 font-bold text-[var(--text)]">{label}</th>
                    <td className="px-3 py-2 text-[var(--text)]">
                      {run.perDebt.filter((d) => d.payoffLabel).length > 0
                        ? run.perDebt.slice().sort((a, b) => payoffSortKey(a.payoffLabel) - payoffSortKey(b.payoffLabel) || a.name.localeCompare(b.name)).map((d) => `${d.name} — ${d.payoffLabel}`).join("; ")
                        : "—"}
                    </td>
                    <td className="px-3 py-2 text-[var(--text)]">{run.debtFreeLabel ? `${run.debtFreeLabel} (${run.months} months)` : "Not amortizing"}</td>
                    <td className="px-3 py-2 text-[var(--text)]">{run.debtFreeLabel ? money(run.totalInterest) : "—"}</td>
                    <td className="px-3 py-2 text-[var(--text)]">{run.debtFreeLabel ? money(run.totalPaid) : "—"}</td>
                    <td className="px-3 py-2 text-[var(--text)]">
                      {run.method === "minimums"
                        ? "—"
                        : run.debtFreeLabel && baseline.debtFreeLabel
                          ? `${money(baseline.totalInterest - run.totalInterest)} and ${baseline.months - run.months} months`
                          : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm">
            Monthly budget used: minimums-only pays each minimum as entered (freed minimums are NOT rolled over);
            snowball/avalanche hold a constant {money(inputs.reduce((sum, d) => sum + d.minimum, 0) + extra)} (all
            minimums + your extra).{baseline.debtFreeLabel && snowball.debtFreeLabel && avalanche.debtFreeLabel ? <> Interest by debt — baseline / snowball / avalanche:{" "}
            {inputs.map((d, i) => `${d.name}: ${money(baseline.perDebt[i]?.interest ?? 0)} / ${money(snowball.perDebt[i]?.interest ?? 0)} / ${money(avalanche.perDebt[i]?.interest ?? 0)}`).join("; ")}.</> : null}
          </p>
          {snowball.debtFreeLabel && avalanche.debtFreeLabel ? (
            <p className="mt-1 text-sm">
              Head to head: avalanche pays {money(Math.abs(snowball.totalInterest - avalanche.totalInterest))}{" "}
              {snowball.totalInterest >= avalanche.totalInterest ? "less" : "more"} interest than snowball;
              debt-free dates {snowball.months === avalanche.months ? "are the same month" : `differ by ${Math.abs(snowball.months - avalanche.months)} month(s)`};
              snowball clears its first account {firstPayoff(snowball)} vs avalanche's {firstPayoff(avalanche)} —
              that earlier visible win is the motivational trade-off CFPB describes.
            </p>
          ) : null}
        </ResultBox>
        {whatifSnow && whatifAva ? (
          <div className="mt-4 rounded-[var(--radius)] border-2 border-dashed border-[var(--amber)] bg-[var(--surface)] p-4">
            <p className="font-display text-base font-bold text-[var(--text)]">
              WHAT-IF SCENARIO — SCRA 6% cap on {whatifIdx.map((i) => s.debts[i]?.name ?? "").join(", ")} (labeled what-if; NOT an eligibility determination)
            </p>
            <p className="mt-1 text-sm text-[var(--text)]">
              IF the SCRA cap applied to those debts for the whole modeled period, the same model would give —
              snowball: {whatifSnow.debtFreeLabel ?? "not amortizing"}, {money(whatifSnow.totalInterest)} interest;
              avalanche: {whatifAva.debtFreeLabel ?? "not amortizing"}, {money(whatifAva.totalInterest)} interest.
              The SCRA can cap interest at 6% on debts incurred BEFORE military service (including jointly with a
              spouse); interest above 6% in the covered period is forgiven, not deferred. The cap does not apply
              to debts newly incurred after entering service, and refinancing/consolidating a pre-service debt can
              remove its protection. You must give the creditor written notice plus orders (or a commanding
              officer's letter), during service or up to 180 days after release. Confirm eligibility and make the
              request with legal assistance — this scenario decides nothing (Flag F-33).
            </p>
          </div>
        ) : null}
      </div>
      <div className={`${cardCls} mt-4`}>
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Free counseling — use it before any paid debt-relief company</h4>
        <p className="mt-1 text-sm text-[var(--text)]">
          Military OneSource financial counseling is free, confidential, with AFC-certified counselors and no
          limit on sessions (in person, phone, chat, or video) — call 800-342-9647. DoD Personal Financial
          Counselors are free to all active-duty, Guard, and Reserve members, families, and survivors through the
          FINRED locator and your installation financial-readiness office. CFPB warns that commercial debt-relief
          programs can involve fees, credit harm, and incomplete settlements — the free military routes come first.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="https://finred.usalearning.gov/pfcMap" target="_blank" rel="noreferrer" aria-label="FINRED Find a Personal Financial Counselor (opens in new tab)" className={linkBtnCls}>FINRED — Find a Personal Financial Counselor ↗</a>
          <a href="https://www.militaryonesource.mil/benefits/financial-counseling/" target="_blank" rel="noreferrer" aria-label="Military OneSource financial counseling (opens in new tab)" className={linkBtnCls}>Military OneSource — Financial Counseling ↗</a>
          <a href="https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/the-servicemembers-civil-relief-act-scra/" target="_blank" rel="noreferrer" aria-label="CFPB Servicemembers Civil Relief Act (opens in new tab)" className={linkBtnCls}>CFPB — SCRA ↗</a>
        </div>
      </div>
      <CrossLinks go={go} availableViews={availableViews} links={[{ view: "pay", label: "Pay & Money" }]} />
      <CardTools cardRef={{ section: "calculators", itemKey: "debt-payoff", title: "Debt Payoff Calculator", summary: "CFPB snowball vs avalanche with a minimums-only baseline — education only, not personalized financial advice.", source: "CFPB / 50 U.S.C. §3937 via the Calculators Pack (Part 5)" }} />
    </section>
  );
}

/* --------------------------------- The hub --------------------------------- */

const TILE_COMPONENTS: Record<CalcTileKey, React.ComponentType<{ go?: (v: CalcViewKey) => void; availableViews?: readonly string[]; profileId: number }>> = {
  retirement: RetirementCalc,
  va: VaCalc,
  pcs: PcsCalc,
  debt: DebtCalc,
};

export function CalculatorsView({
  focusAnchor,
  focusCard,
  go,
  availableViews,
  lockedTiles,
  profileId,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  go?: (v: CalcViewKey) => void;
  availableViews?: readonly string[];
  /** Tiles this track may not open (spouse posture) — they render as
   * locked cards, never the calculator, so no content leaks. */
  lockedTiles?: readonly CalcTileKey[];
  /** The signed-in profile's id — scopes the calculator-state query
   * cache per profile so one profile's saved inputs can never render
   * on another profile (see useCalcState). */
  profileId: number;
}) {
  const [tile, setTile] = useState<CalcTileKey | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      const t = CALC_TILES.find((x) => anchorSlug(x.label) === slug);
      if (t) return t.key;
    }
    if (focusCard) {
      const t = CALC_TILES.find((x) => focusCard.toLowerCase().includes((x.label.toLowerCase().split(" ")[0] ?? "").toLowerCase()));
      if (t) return t.key;
    }
    return null;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);
  const active = CALC_TILES.find((t) => t.key === tile) ?? null;
  const ActiveCalc = tile ? TILE_COMPONENTS[tile] : null;
  const isLocked = tile !== null && (lockedTiles ?? []).includes(tile);
  return (
    <div>
      <SectionHead
        title="Calculators"
        sub="Four calculators built from the official formulas and tables — Retirement, VA combined ratings, PCS entitlements, and debt payoff. Every result shows its work and its disclaimer; rates that change or belong to an agency lookup are routed, never invented. Your inputs save privately to your own profile."
      />
      {tile === null ? (
        <HubTileGrid
          label="Calculator areas"
          onOpen={(key) => setTile(key as CalcTileKey)}
          tiles={CALC_TILES.map((t) => ({
            key: t.key,
            label: t.label,
            sub: t.sub,
            locked: (lockedTiles ?? []).includes(t.key),
          }))}
        />
      ) : (
        <>
          <HubBackButton ariaLabel="Back to all calculators" text="All calculators" onBack={() => setTile(null)} />
          {isLocked ? (
            <div className="rounded-[var(--radius)] border border-dashed border-[var(--border)] bg-[var(--surface2)] p-5">
              <p className="font-display text-lg font-bold text-[var(--dim)]">{active?.label} — LOCKED</p>
              <p className="mt-1 text-base text-[var(--dim)]">
                This calculator belongs to the service member's own hubs (Retirement Hub / VA Claims), which stay
                locked on this profile. Your service member can open it from their own profile — the PCS
                Entitlements and Debt Payoff calculators are open here in full.
              </p>
            </div>
          ) : ActiveCalc ? (
            <ActiveCalc go={go} availableViews={availableViews} profileId={profileId} />
          ) : null}
        </>
      )}
    </div>
  );
}
