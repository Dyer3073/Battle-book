// Calculators — built from the researched Calculators Pack
// (~/workspace/military-app/calculators/calculators.md, Nov 9, 2026),
// the source of truth for every formula, table, flag, and worked
// example in this file. The pack's source discipline is baked in:
//  1. A published table controls over an explanatory formula — the VA
//     engine below encodes 38 CFR \u00a74.25 Table I itself (it differs
//     from the efficiency formula in 33 cells); the formula is only a
//     cross-check in comments/tests, never the engine.
//  2. A current-rate lookup is never hard-coded as permanent: locality
//     lodging/M&IE rates route to DTMO's Per Diem calculator, the PPM
//     Government Constructed Cost is user-supplied, the GHC percentage
//     stays flagged unresolved (Flag F-15), partial DLA routes to
//     DTMO (F-16), and NO lump-sum dollar figure is computed — the
//     current Government Discount Rate was not captured (F-01).
//  3. Every output is an estimate from entered data, not an agency
//     determination — each calculator ships its pack disclaimer.
// Fitness is NOT touched by this file: the four official fitness
// tables remain uncaptured (pack Part 4, Flags F-24\u2013F-28) and the
// existing fitness checkers stay exactly as they are.

export type CalcViewKey = "calculators" | "retirement" | "tsp" | "claims" | "pcs" | "pay";

export const CALC_TILES = [
  { key: "retirement", label: "Retirement Estimator", sub: "Legacy 2.5% / BRS 2.0% \u00b7 continuation pay \u00b7 TSP government contributions" },
  { key: "va", label: "VA Combined Ratings", sub: "38 CFR \u00a74.25 Table I + \u00a74.26 bilateral factor \u00b7 shows its work" },
  { key: "pcs", label: "PCS Entitlements", sub: "HHG weight \u00b7 CY2026 DLA \u00b7 TLE \u00b7 travel days \u00b7 PPM" },
  { key: "debt", label: "Debt Payoff", sub: "CFPB snowball vs avalanche \u00b7 minimums-only baseline" },
] as const;
export type CalcTileKey = (typeof CALC_TILES)[number]["key"];

export const CALC_SEARCH: { tile: CalcTileKey; title: string; summary: string }[] = [
  {
    tile: "retirement",
    title: "Retirement Estimator (Legacy / BRS)",
    summary:
      "Retired pay estimate: Legacy 2.5% / BRS 2.0% per year on a base you enter, DFAS round-down, Reserve points \u00f7 360, continuation pay, TSP government contributions, and the lump sum option described with NO dollar figure (the current Government Discount Rate was not captured). Estimate only \u2014 not a retirement determination.",
  },
  {
    tile: "va",
    title: "VA Combined Ratings Calculator (\u00a74.25 / \u00a74.26)",
    summary:
      "Combine VA disability ratings with the regulation's own math: the full 38 CFR \u00a74.25 Table I, the \u00a74.26 bilateral factor in the regulation's order including the \u00a74.26(d) most-favorable comparison, one final conversion with 5s adjusted upward, and every step shown. This reproduces the regulation's math on ratings you enter \u2014 it is not a VA decision.",
  },
  {
    tile: "pcs",
    title: "PCS Entitlements Calculator (HHG / DLA / TLE / PPM)",
    summary:
      "JTR Table 5-37 household-goods weight allowances and CY2026 primary Dislocation Allowance (DLA) rates by grade and dependent status, TLE Table 5-17 percentages with the $290/day cap, PCS travel days (\u00f7350, remainder 51+), and Table 5-6 dependent percentages. Locality rates route to DTMO's Per Diem calculator; PPM pays 100% of a Government Constructed Cost you supply.",
  },
  {
    tile: "debt",
    title: "Debt Payoff Calculator (Snowball vs Avalanche)",
    summary:
      "CFPB snowball (smallest balance first) vs avalanche (highest APR first) on a stated monthly model \u2014 payoff order, debt-free date, total interest for each method and a minimums-only baseline, and interest saved. SCRA 6% is modeled only as a user-confirmed or clearly labeled what-if scenario, never as an eligibility determination. Education only \u2014 not personalized financial advice.",
  },
];

/* ============================ 1. RETIREMENT ============================ */

export const RETIREMENT_DISCLAIMER =
  "This is an educational estimate based on the information entered and the published formula selected. It is not a retirement determination, pay guarantee, or investment advice. Actual retired pay depends on verified service, pay history, retirement law and policy in effect at retirement, and DFAS's official calculation. Confirm the result with DFAS, your Service retirement office, and the official DoD calculators.";

export type RetirementSystem = "finalpay" | "legacy" | "brs";

/** Gross monthly retired pay, DFAS round-down to the nearest dollar.
 * Legacy (Final Pay and High-36): 2.5% \u00d7 creditable years. BRS: 2.0%. */
export function retirementAnnuity(base: number, years: number, system: RetirementSystem): number {
  if (!(base > 0) || !(years > 0)) return 0;
  const rate = system === "brs" ? 0.02 : 0.025;
  return Math.floor(base * rate * years);
}

/** Reserve/Guard multiplier service: total retirement points \u00f7 360.
 * Qualifying years and pay-longevity service are different concepts
 * and are NOT derived here (pack Flag F-08). */
export function reserveEquivalentYears(points: number): number {
  if (!(points > 0)) return 0;
  return points / 360;
}

/** BRS continuation pay = monthly basic pay \u00d7 the Service-published
 * multiplier (user/Service-supplied input; pack Flag F-03). Published
 * ranges: Active 2.5\u00d7\u201313\u00d7, Reserve 0.5\u00d7\u20136\u00d7, payable after 8 and
 * before 12 years of service from PEBD, for additional obligated service. */
export function continuationPay(monthlyBasicPay: number, multiplier: number): number {
  if (!(monthlyBasicPay > 0) || !(multiplier > 0)) return 0;
  return Math.round(monthlyBasicPay * multiplier * 100) / 100;
}

export type TspRow = { memberPct: number; matchPct: number; govTotalPct: number; totalPct: number };

/** BRS TSP government contributions (pack \u00a71.7): 1% automatic after
 * 60 days; match = 100% of the first 3% the member contributes + 50%
 * of the next 2% (max 4%), from month 25 through year 26. */
export function tspForMemberPct(memberPct: number): TspRow {
  const m = Math.max(0, memberPct);
  const match = Math.min(m, 3) + Math.max(0, Math.min(m, 5) - 3) * 0.5;
  const gov = 1 + match;
  return { memberPct: m, matchPct: match, govTotalPct: gov, totalPct: m + gov };
}

export const TSP_TABLE: TspRow[] = [0, 1, 2, 3, 4, 5].map(tspForMemberPct);

/* ========================= 2. VA COMBINED RATINGS ========================= */

export const VA_DISCLAIMER =
  "This calculator reproduces the regulation's math (38 CFR \u00a74.25 Table I and \u00a74.26) on the ratings you enter. It is not a VA decision: VA still decides service connection, the diagnostic code and evaluation for each condition, whether conditions are bilateral, pyramiding under \u00a74.14, and the adjudicative result under \u00a74.26(d).";

export const VA_TABLE_COLS = [10, 20, 30, 40, 50, 60, 70, 80, 90] as const;

/** 38 CFR \u00a74.25 Table I, transcribed from the pack \u00a72.4. Rows are
 * the first/combined degree (19\u201394); columns are the next degree.
 * This table is the engine \u2014 the efficiency formula in \u00a72.3 is a
 * cross-check only (Flag F-13). Premise: 10 combined with 10 is 19. */
export const VA_TABLE: Record<number, number[]> = {
  19: [27, 35, 43, 51, 60, 68, 76, 84, 92],
  20: [28, 36, 44, 52, 60, 68, 76, 84, 92],
  21: [29, 37, 45, 53, 61, 68, 76, 84, 92],
  22: [30, 38, 45, 53, 61, 69, 77, 84, 92],
  23: [31, 38, 46, 54, 62, 69, 77, 85, 92],
  24: [32, 39, 47, 54, 62, 70, 77, 85, 92],
  25: [33, 40, 48, 55, 63, 70, 78, 85, 93],
  26: [33, 41, 48, 56, 63, 70, 78, 85, 93],
  27: [34, 42, 49, 56, 64, 71, 78, 85, 93],
  28: [35, 42, 50, 57, 64, 71, 78, 86, 93],
  29: [36, 43, 50, 57, 65, 72, 79, 86, 93],
  30: [37, 44, 51, 58, 65, 72, 79, 86, 93],
  31: [38, 45, 52, 59, 66, 72, 79, 86, 93],
  32: [39, 46, 52, 59, 66, 73, 80, 86, 93],
  33: [40, 46, 53, 60, 67, 73, 80, 87, 93],
  34: [41, 47, 54, 60, 67, 74, 80, 87, 93],
  35: [42, 48, 55, 61, 68, 74, 81, 87, 94],
  36: [42, 49, 55, 62, 68, 74, 81, 87, 94],
  37: [43, 50, 56, 62, 69, 75, 81, 87, 94],
  38: [44, 50, 57, 63, 69, 75, 81, 88, 94],
  39: [45, 51, 57, 63, 70, 76, 82, 88, 94],
  40: [46, 52, 58, 64, 70, 76, 82, 88, 94],
  41: [47, 53, 59, 65, 71, 76, 82, 88, 94],
  42: [48, 54, 59, 65, 71, 77, 83, 88, 94],
  43: [49, 54, 60, 66, 72, 77, 83, 89, 94],
  44: [50, 55, 61, 66, 72, 78, 83, 89, 94],
  45: [51, 56, 62, 67, 73, 78, 84, 89, 95],
  46: [51, 57, 62, 68, 73, 78, 84, 89, 95],
  47: [52, 58, 63, 68, 74, 79, 84, 89, 95],
  48: [53, 58, 64, 69, 74, 79, 84, 90, 95],
  49: [54, 59, 64, 69, 75, 80, 85, 90, 95],
  50: [55, 60, 65, 70, 75, 80, 85, 90, 95],
  51: [56, 61, 66, 71, 76, 80, 85, 90, 95],
  52: [57, 62, 66, 71, 76, 81, 86, 90, 95],
  53: [58, 62, 67, 72, 77, 81, 86, 91, 95],
  54: [59, 63, 68, 72, 77, 82, 86, 91, 95],
  55: [60, 64, 69, 73, 78, 82, 87, 91, 96],
  56: [60, 65, 69, 74, 78, 82, 87, 91, 96],
  57: [61, 66, 70, 74, 79, 83, 87, 91, 96],
  58: [62, 66, 71, 75, 79, 83, 87, 92, 96],
  59: [63, 67, 71, 75, 80, 84, 88, 92, 96],
  60: [64, 68, 72, 76, 80, 84, 88, 92, 96],
  61: [65, 69, 73, 77, 81, 84, 88, 92, 96],
  62: [66, 70, 73, 77, 81, 85, 89, 92, 96],
  63: [67, 70, 74, 78, 82, 85, 89, 93, 96],
  64: [68, 71, 75, 78, 82, 86, 89, 93, 96],
  65: [69, 72, 76, 79, 83, 86, 90, 93, 97],
  66: [69, 73, 76, 80, 83, 86, 90, 93, 97],
  67: [70, 74, 77, 80, 84, 87, 90, 93, 97],
  68: [71, 74, 78, 81, 84, 87, 90, 94, 97],
  69: [72, 75, 78, 81, 85, 88, 91, 94, 97],
  70: [73, 76, 79, 82, 85, 88, 91, 94, 97],
  71: [74, 77, 80, 83, 86, 88, 91, 94, 97],
  72: [75, 78, 80, 83, 86, 89, 92, 94, 97],
  73: [76, 78, 81, 84, 87, 89, 92, 95, 97],
  74: [77, 79, 82, 84, 87, 90, 92, 95, 97],
  75: [78, 80, 83, 85, 88, 90, 93, 95, 98],
  76: [78, 81, 83, 86, 88, 90, 93, 95, 98],
  77: [79, 82, 84, 86, 89, 91, 93, 95, 98],
  78: [80, 82, 85, 87, 89, 91, 93, 96, 98],
  79: [81, 83, 85, 87, 90, 92, 94, 96, 98],
  80: [82, 84, 86, 88, 90, 92, 94, 96, 98],
  81: [83, 85, 87, 89, 91, 92, 94, 96, 98],
  82: [84, 86, 87, 89, 91, 93, 95, 96, 98],
  83: [85, 86, 88, 90, 92, 93, 95, 97, 98],
  84: [86, 87, 89, 90, 92, 94, 95, 97, 98],
  85: [87, 88, 90, 91, 93, 94, 96, 97, 99],
  86: [87, 89, 90, 92, 93, 94, 96, 97, 99],
  87: [88, 90, 91, 92, 94, 95, 96, 97, 99],
  88: [89, 90, 92, 93, 94, 95, 96, 98, 99],
  89: [90, 91, 92, 93, 95, 96, 97, 98, 99],
  90: [91, 92, 93, 94, 95, 96, 97, 98, 99],
  91: [92, 93, 94, 95, 96, 96, 97, 98, 99],
  92: [93, 94, 94, 95, 96, 97, 98, 98, 99],
  93: [94, 94, 95, 96, 97, 97, 98, 99, 99],
  94: [95, 95, 96, 96, 97, 98, 98, 99, 99],};

function vaLookup(left: number, col: number): number {
  const row = VA_TABLE[left];
  if (!row) throw new Error(`Table I has no row ${left}`);
  const idx = (VA_TABLE_COLS as readonly number[]).indexOf(col);
  if (idx < 0) throw new Error(`Table I has no column ${col}`);
  const value = row[idx];
  if (value === undefined) throw new Error(`Table I has no cell ${left}/${col}`);
  return value;
}

/** Combine two values through Table I. A non-multiple-of-10 value
 * (a Table I result or a bilateral value) goes in the left column
 * when combined with a multiple of 10, per the regulation's own
 * \u00a74.26 example (row 21, column 60 = 68). Two non-multiples have
 * no Table I intersection \u2014 that step is flagged, never invented
 * (Flag F-11). */
function combineTwo(cur: number, next: number, steps: string[]): number {
  if (next === 0) return cur;
  if (cur === 100 || next === 100) { steps.push(`${cur} combined with ${next} = 100 (a 100% evaluation produces a 100% combined rating)`); return 100; }
  if (cur >= 95 || next >= 95) { steps.push(`${cur} combined with ${next}: a combined value of 95 or higher converts to 100 at the final conversion`); return Math.max(cur, next); }
  if (next % 10 === 0 && VA_TABLE[cur]) {
    const r = vaLookup(cur, next);
    steps.push(`Table I, row ${cur} with ${next}: ${r}`);
    return r;
  }
  if (cur % 10 === 0 && VA_TABLE[next]) {
    const r = vaLookup(next, cur);
    steps.push(`Table I, row ${next} with ${cur}: ${r} (the non-multiple-of-10 value takes the left column, as in the \u00a74.26 example)`);
    return r;
  }
  if (cur === 10 && next === 10) { steps.push("Table I premise: 10 combined with 10 is 19"); return 19; }
  throw new Error(`NO_TABLE_INTERSECTION:${cur}:${next}`);
}

export function combineValues(values: number[], steps: string[]): number {
  const vals = values.filter((v) => v > 0).sort((a, b) => b - a);
  if (vals.length === 0) return 0;
  if (vals.length === 1) return vals[0] as number;
  let cur = vals[0] as number;
  for (const next of vals.slice(1)) {
    if (cur >= 95) { steps.push(`The combined value is already ${cur} \u2014 the final conversion is 100, and no further combination can lower it`); return cur; }
    cur = combineTwo(cur, next, steps);
  }
  return cur;
}

/** The single final conversion (\u00a74.25(b)): once, at the very end, to
 * the nearest number divisible by 10, with 5s adjusted upward. */
export function vaConvert(v: number): number {
  if (v >= 95) return 100;
  return Math.floor((v + 5) / 10) * 10;
}

export type VaBilateralGroup = "none" | "arms" | "legs" | "muscles" | "allfour";
export type VaEntryInput = { rating: number; label: string; bilateral: VaBilateralGroup };

export type VaResult = {
  steps: string[];
  unconverted: number | null;
  final: number | null;
  bilateralNote: string | null;
  altSteps: string[];
  altFinal: number | null;
  favorable: "bilateral" | "separate" | "tie" | null;
  flag: string | null;
};

const GROUP_LABEL: Record<string, string> = {
  arms: "both arms", legs: "both legs", muscles: "paired skeletal muscles", allfour: "all four extremities",
};

/** Full \u00a74.25 + \u00a74.26 computation. Bilateral groups are combined
 * first, 10% of the combined value is ADDED (not combined through
 * Table I), the subtotal is rounded to the nearest whole number
 * (the \u00a74.26 example carries 20.9 forward as 21 \u2014 Flag F-10), and
 * the result is treated as one disability before all other
 * combinations and the single final conversion. The \u00a74.26(d)
 * most-favorable comparison is computed both ways and labeled as
 * regulation math, not VA's adjudicative determination. */
export function vaCombined(entries: VaEntryInput[]): VaResult {
  const steps: string[] = [];
  const clean = entries.filter((e) => e.rating > 0);
  if (clean.length === 0) {
    return { steps: ["No compensable ratings entered \u2014 a 0% evaluation does not change a combined value."], unconverted: 0, final: 0, bilateralNote: null, altSteps: [], altFinal: null, favorable: null, flag: null };
  }
  if (clean.some((e) => e.rating >= 100)) {
    return { steps: ["A 100% evaluation produces a 100% final combined rating."], unconverted: 100, final: 100, bilateralNote: null, altSteps: [], altFinal: null, favorable: null, flag: null };
  }
  const groupKeys = ["arms", "legs", "muscles", "allfour"] as const;
  const bilateralValues: number[] = [];
  const ordinary: number[] = [];
  let bilateralNote: string | null = null;
  const groupedRatings: number[] = [];
  for (const g of groupKeys) {
    const rs = clean.filter((e) => e.bilateral === g).map((e) => e.rating);
    if (rs.length >= 2) {
      groupedRatings.push(...rs);
      const gSteps: string[] = [];
      const combined = combineValues(rs, gSteps);
      const withFactor = Math.round(combined * 1.1);
      steps.push(`Bilateral factor (\u00a74.26, ${GROUP_LABEL[g]}): combine ${rs.slice().sort((a, b) => b - a).join(", ")} first \u2014 ${gSteps.join("; ")} \u2192 ${combined}.`);
      steps.push(`Add 10% of ${combined} (${(combined * 0.1).toFixed(1)}): ${combined} + ${(combined * 0.1).toFixed(1)} = ${(combined * 1.1).toFixed(1)}, carried forward as ${withFactor} and treated as ONE disability from here.`);
      bilateralValues.push(withFactor);
      bilateralNote = `Bilateral factor applied to the ${GROUP_LABEL[g]} group before every other combination, per \u00a74.26. The subtotal is rounded to the nearest whole number before further Table I combinations \u2014 the regulation's own example carries 20.9 forward as 21 (Flag F-10).`;
    } else if (rs.length === 1) {
      ordinary.push(rs[0] as number);
      steps.push(`The single ${GROUP_LABEL[g]} rating (${rs[0]}%) is combined as an ordinary disability \u2014 \u00a74.26(c) applies the bilateral factor only when there is compensable disability in EACH of the paired extremities.`);
    }
  }
  for (const e of clean) if (e.bilateral === "none") ordinary.push(e.rating);
  const allValues = [...bilateralValues, ...ordinary].sort((a, b) => b - a);
  steps.push(`Order by severity and combine as one list: ${allValues.join(", ")}. Intermediate values are kept exactly \u2014 no conversion happens between steps.`);
  let unconverted: number | null = null;
  let flag: string | null = null;
  try {
    unconverted = combineValues(allValues, steps);
  } catch {
    flag = "Two separate bilateral groups produced two values that are not multiples of 10, and Table I has no direct intersection for combining them (Flag F-11). This pack does not invent that step \u2014 VA's internal treatment must be verified, so no final rating is shown for this combination.";
    steps.push("\u26a0 " + flag);
  }
  const final = unconverted === null ? null : vaConvert(unconverted);
  if (unconverted !== null) steps.push(`Convert ONCE, at the very end: ${unconverted} \u2192 ${final} (nearest number divisible by 10; a value ending in 5 is adjusted upward).`);
  // \u00a74.26(d) comparison: the same ratings with NO bilateral factor.
  let altSteps: string[] = [];
  let altFinal: number | null = null;
  let favorable: VaResult["favorable"] = null;
  if (bilateralValues.length > 0) {
    const plain = clean.map((e) => e.rating);
    try {
      const altUnconverted = combineValues(plain, altSteps);
      altFinal = vaConvert(altUnconverted);
      altSteps.push(`Without the bilateral factor: ${altUnconverted} \u2192 ${altFinal}.`);
      if (final !== null && altFinal !== null) {
        favorable = final > altFinal ? "bilateral" : altFinal > final ? "separate" : "tie";
      }
    } catch {
      altSteps = [];
      altFinal = null;
    }
  }
  return { steps, unconverted, final, bilateralNote, altSteps, altFinal, favorable, flag };
}

/* ============================ 3. PCS ENTITLEMENTS ============================ */

export const PCS_DISCLAIMER =
  "Lookups and formulas from the Joint Travel Regulations (July 1, 2026 edition, Chapter 5) and DTMO's CY2026 DLA table as transcribed in the Calculators Pack. DTMO publishes the JTR monthly and policy can change mid-month (Flag F-14) \u2014 confirm your entitlements against your orders and your finance / Transportation Office. Locality lodging and M&IE rates are never hard-coded here: they come from DTMO's Per Diem Rate Calculator.";

export const HHG_TABLE: { grade: string; withDeps: number; withoutDeps: number }[] = [
  { grade: "O-10 to O-6", withDeps: 18000, withoutDeps: 18000 },
  { grade: "O-5 or W-5", withDeps: 17500, withoutDeps: 16000 },
  { grade: "O-4 or W-4", withDeps: 17000, withoutDeps: 14000 },
  { grade: "O-3 or W-3", withDeps: 14500, withoutDeps: 13000 },
  { grade: "O-2 or W-2", withDeps: 13500, withoutDeps: 12500 },
  { grade: "O-1, W-1, or Service Academy Graduate", withDeps: 12000, withoutDeps: 10000 },
  { grade: "E-9", withDeps: 15000, withoutDeps: 13000 },
  { grade: "E-8", withDeps: 14000, withoutDeps: 12000 },
  { grade: "E-7", withDeps: 13000, withoutDeps: 11000 },
  { grade: "E-6", withDeps: 11000, withoutDeps: 8000 },
  { grade: "E-5", withDeps: 9000, withoutDeps: 7000 },
  { grade: "E-4", withDeps: 8000, withoutDeps: 7000 },
  { grade: "E-3 to E-1", withDeps: 8000, withoutDeps: 5000 },
  { grade: "Aviation Cadet", withDeps: 8000, withoutDeps: 7000 },
  { grade: "Service Academy Cadet or Midshipman", withDeps: 350, withoutDeps: 350 },];

export type DlaRow = { grade: string; withoutDeps: number; withDeps: number };
/** CY2026 primary DLA rates (PDTATAC, effective January 1, 2026). */
export const DLA_PRIMARY: DlaRow[] = [
  { grade: "O-10", withoutDeps: 5187.33, withDeps: 6385.58 },
  { grade: "O-9", withoutDeps: 5187.33, withDeps: 6385.58 },
  { grade: "O-8", withoutDeps: 5187.33, withDeps: 6385.58 },
  { grade: "O-7", withoutDeps: 5187.33, withDeps: 6385.58 },
  { grade: "O-6", withoutDeps: 4758.96, withDeps: 5749.63 },
  { grade: "O-5", withoutDeps: 4583.51, withDeps: 5542.06 },
  { grade: "O-4", withoutDeps: 4247.61, withDeps: 4885.43 },
  { grade: "O-3", withoutDeps: 3404.11, withDeps: 4041.88 },
  { grade: "O-2", withoutDeps: 2700.31, withDeps: 3451.28 },
  { grade: "O-1", withoutDeps: 2273.82, withDeps: 3085.23 },
  { grade: "O-3E", withoutDeps: 3675.83, withDeps: 4343.8 },
  { grade: "O-2E", withoutDeps: 3124.87, withDeps: 3919.27 },
  { grade: "O-1E", withoutDeps: 2687.09, withDeps: 3621.1 },
  { grade: "W-5", withoutDeps: 4315.51, withDeps: 4715.58 },
  { grade: "W-4", withoutDeps: 3832.45, withDeps: 4323.11 },
  { grade: "W-3", withoutDeps: 3221.08, withDeps: 3960.78 },
  { grade: "W-2", withoutDeps: 2860.7, withDeps: 3643.75 },
  { grade: "W-1", withoutDeps: 2394.55, withDeps: 3151.31 },
  { grade: "E-9", withoutDeps: 3147.54, withDeps: 4149.51 },
  { grade: "E-8", withoutDeps: 2888.97, withDeps: 3824.94 },
  { grade: "E-7", withoutDeps: 2468.19, withDeps: 3551.31 },
  { grade: "E-6", withoutDeps: 2389.42, withDeps: 3548.02 },
  { grade: "E-5", withoutDeps: 2389.42, withDeps: 3548.02 },
  { grade: "E-4", withoutDeps: 2389.42, withDeps: 3548.02 },
  { grade: "E-3", withoutDeps: 2355.48, withDeps: 3548.02 },
  { grade: "E-2", withoutDeps: 2025.26, withDeps: 3548.02 },
  { grade: "E-1", withoutDeps: 1870.58, withDeps: 3548.02 },];
/** Secondary DLA rates (JTR \u00a7050507 second qualifying move). \u26a0 The
 * captured PDTATAC document states these effective January 1, 2025
 * while the primary table is CY2026 \u2014 Flag F-17: verify currency
 * separately before treating them as current. */
export const DLA_SECONDARY: DlaRow[] = [
  { grade: "O-10", withoutDeps: 4149.86, withDeps: 5108.47 },
  { grade: "O-9", withoutDeps: 4149.86, withDeps: 5108.47 },
  { grade: "O-8", withoutDeps: 4149.86, withDeps: 5108.47 },
  { grade: "O-7", withoutDeps: 4149.86, withDeps: 5108.47 },
  { grade: "O-6", withoutDeps: 3807.26, withDeps: 4599.74 },
  { grade: "O-5", withoutDeps: 3666.78, withDeps: 4433.65 },
  { grade: "O-4", withoutDeps: 3398.1, withDeps: 3908.34 },
  { grade: "O-3", withoutDeps: 2723.29, withDeps: 3233.55 },
  { grade: "O-2", withoutDeps: 2160.2, withDeps: 2761.04 },
  { grade: "O-1", withoutDeps: 1819.03, withDeps: 2468.19 },
  { grade: "O-3E", withoutDeps: 2940.71, withDeps: 3475.07 },
  { grade: "O-2E", withoutDeps: 2499.87, withDeps: 3135.4 },
  { grade: "O-1E", withoutDeps: 2149.69, withDeps: 2896.91 },
  { grade: "W-5", withoutDeps: 3452.41, withDeps: 3772.41 },
  { grade: "W-4", withoutDeps: 3065.98, withDeps: 3458.48 },
  { grade: "W-3", withoutDeps: 2576.88, withDeps: 3168.62 },
  { grade: "W-2", withoutDeps: 2288.54, withDeps: 2915.01 },
  { grade: "W-1", withoutDeps: 1915.69, withDeps: 2521.02 },
  { grade: "E-9", withoutDeps: 2518.0, withDeps: 3319.62 },
  { grade: "E-8", withoutDeps: 2311.19, withDeps: 3059.95 },
  { grade: "E-7", withoutDeps: 1974.49, withDeps: 2841.09 },
  { grade: "E-6", withoutDeps: 1787.36, withDeps: 2625.16 },
  { grade: "E-5", withoutDeps: 1648.5, withDeps: 2361.0 },
  { grade: "E-4", withoutDeps: 1434.14, withDeps: 2361.0 },
  { grade: "E-3", withoutDeps: 1406.93, withDeps: 2361.0 },
  { grade: "E-2", withoutDeps: 1142.74, withDeps: 2361.0 },
  { grade: "E-1", withoutDeps: 1018.96, withDeps: 2361.0 },];

/** PCS travel days (JTR \u00a7050205): 400 miles or fewer = 1 day; over
 * 400, divide by 350 and add a day when the remainder is 51 or more. */
export function pcsTravelDays(miles: number): number {
  if (!(miles > 0)) return 0;
  if (miles <= 400) return 1;
  const q = Math.floor(miles / 350);
  const r = miles - q * 350;
  return q + (r >= 51 ? 1 : 0);
}

/** TLE percentage, JTR Table 5-17. `dependentAges` lists every
 * dependent occupying the lodging (use 99 for a spouse/adult
 * dependent); additional dependents are added beginning with the
 * oldest, so the first dependent forms the base pair and each
 * remaining dependent adds +35% (age 12+) or +25% (under 12). */
export function tlePercentage(memberPresent: boolean, dependentAges: number[]): number {
  const persons = (memberPresent ? 1 : 0) + dependentAges.length;
  if (persons <= 0) return 0;
  if (persons === 1) return 65;
  const sorted = dependentAges.slice().sort((a, b) => b - a);
  // Base pair = the first two persons. When the member is present the
  // pair is member + oldest dependent (additional = the rest). With
  // no member, the pair is the two oldest dependents.
  const extra = memberPresent ? sorted.slice(1) : sorted.slice(2);
  let p = 100;
  for (const age of extra) p += age >= 12 ? 35 : 25;
  return p;
}

/** Daily TLE (DTMO's working steps, pack \u00a73.7 / Flag F-18):
 * min($290, min(actual lodging, % \u00d7 locality lodging) + % \u00d7 locality M&IE). */
export function tleDaily(pct: number, localityLodging: number, localityMie: number, actualLodging: number): number {
  const p = pct / 100;
  const lodgingPart = Math.min(actualLodging, p * localityLodging);
  const total = lodgingPart + p * localityMie;
  return Math.min(290, Math.round(total * 100) / 100);
}

/** Dependent per-diem percentages, JTR Table 5-6. */
export function dependentPerDiemPct(scenario: "withMember" | "oneSeparate" | "firstOfSeparate" | "additionalSeparate", age: number): number {
  const older = age >= 12;
  switch (scenario) {
    case "withMember": return older ? 75 : 50;
    case "oneSeparate": return 100;
    case "firstOfSeparate": return 100;
    case "additionalSeparate": return older ? 75 : 50;
  }
}

/* ============================ 5. DEBT PAYOFF ============================ */

export const DEBT_DISCLAIMER =
  "This calculator is for education and planning estimates only. It is not personalized financial, legal, tax, or investment advice and does not create a debt-management plan. Interest, minimum payments, fees, promotional rates, and payoff dates in real accounts depend on the creditor's contract and billing method. Free help is available from Military OneSource financial counseling, a DoD Personal Financial Counselor, and your installation financial-readiness office. If SCRA eligibility, collections, default, or legal deadlines are involved, contact legal assistance promptly.";

export const DEBT_MODEL_NOTE =
  "Model conventions (stated, per the pack \u00a75.4): interest accrues monthly at APR \u00f7 12, rounded to cents; minimums are paid first on every debt; all remaining budget goes to the current target; money freed when a debt is paid off cascades to the next target in the SAME month. Minimum payments are modeled as the fixed dollar amounts entered (Flag F-30). Tie-breakers are this calculator's documented conventions (Flag F-32): snowball ties break to the higher APR, avalanche ties to the lower balance, then to the order entered.";

export type DebtInput = { name: string; balance: number; apr: number; minimum: number };
export type DebtMethod = "minimums" | "snowball" | "avalanche";
export type DebtRun = {
  method: DebtMethod;
  months: number;
  debtFreeLabel: string | null;
  totalInterest: number;
  totalPaid: number;
  perDebt: { name: string; interest: number; payoffLabel: string | null }[];
  nonAmortizing: string[];
};

function roundCents(x: number): number {
  return Math.round((x + Number.EPSILON) * 100) / 100;
}
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function monthLabel(startYear: number, startMonth1: number, monthIndex0: number): string {
  const total = (startMonth1 - 1) + monthIndex0;
  const y = startYear + Math.floor(total / 12);
  const m = total % 12;
  return `${MONTH_NAMES[m]} ${y}`;
}

/** The pack \u00a75.4 deterministic monthly model, unit-tested against
 * the \u00a75.6 worked example (baseline $1,575.40 / Nov 2031; snowball
 * $478.19 / Jul 2028; avalanche $459.01 / Jul 2028, including the
 * per-debt interest table). */
export function runDebtPayoff(
  debtsIn: DebtInput[],
  extraMonthly: number,
  method: DebtMethod,
  startYear: number,
  startMonth1: number,
  aprOverrides?: (number | null)[],
): DebtRun {
  const ds = debtsIn.map((d, i) => ({
    name: d.name || `Debt ${i + 1}`,
    bal: roundCents(d.balance),
    apr: aprOverrides?.[i] ?? d.apr,
    minimum: d.minimum,
    interest: 0,
    payoffMonth: -1,
    idx: i,
  }));
  const nonAmortizing: string[] = [];
  for (const d of ds) {
    if (d.bal > 0 && d.minimum <= roundCents((d.bal * d.apr) / 1200)) {
      nonAmortizing.push(d.name);
    }
  }
  // Minimums-only can never amortize a flagged debt: report it
  // instead of a false debt-free date (Flag F-34).
  if (method === "minimums" && nonAmortizing.length > 0) {
    return {
      method, months: 0, debtFreeLabel: null,
      totalInterest: 0, totalPaid: 0,
      perDebt: ds.map((d) => ({ name: d.name, interest: 0, payoffLabel: null })),
      nonAmortizing,
    };
  }
  const budgetMinimums = ds.reduce((s, d) => s + d.minimum, 0);
  const budget = method === "minimums" ? budgetMinimums : budgetMinimums + Math.max(0, extraMonthly);
  let months = 0;
  const MAX_MONTHS = 1200;
  while (ds.some((d) => d.bal > 0.005) && months < MAX_MONTHS) {
    const monthIdx = months;
    months += 1;
    for (const d of ds) {
      if (d.bal > 0) {
        const intr = roundCents((d.bal * d.apr) / 1200);
        d.bal = roundCents(d.bal + intr);
        d.interest = roundCents(d.interest + intr);
      }
    }
    let remaining = budget;
    for (const d of ds) {
      if (d.bal > 0 && remaining > 0) {
        const pay = Math.min(d.minimum, d.bal, remaining);
        d.bal = roundCents(d.bal - pay);
        remaining = roundCents(remaining - pay);
        if (d.bal <= 0.005 && d.payoffMonth < 0) { d.payoffMonth = monthIdx; d.bal = 0; }
      }
    }
    if (method !== "minimums") {
      while (remaining > 0.005 && ds.some((d) => d.bal > 0)) {
        const active = ds.filter((d) => d.bal > 0);
        active.sort((a, b) =>
          method === "snowball"
            ? a.bal - b.bal || b.apr - a.apr || a.idx - b.idx
            : b.apr - a.apr || a.bal - b.bal || a.idx - b.idx,
        );
        const t = active[0];
        if (!t) break;
        const pay = Math.min(remaining, t.bal);
        t.bal = roundCents(t.bal - pay);
        remaining = roundCents(remaining - pay);
        if (t.bal <= 0.005 && t.payoffMonth < 0) { t.payoffMonth = monthIdx; t.bal = 0; }
      }
    }
  }
  const paidOff = ds.every((d) => d.payoffMonth >= 0 || d.bal <= 0.005);
  const totalInterest = roundCents(ds.reduce((s, d) => s + d.interest, 0));
  const totalPrincipal = roundCents(debtsIn.reduce((s, d) => s + d.balance, 0));
  return {
    method,
    months: paidOff ? months : 0,
    debtFreeLabel: paidOff ? monthLabel(startYear, startMonth1, months - 1) : null,
    totalInterest,
    totalPaid: roundCents(totalPrincipal + totalInterest),
    perDebt: ds.map((d) => ({
      name: d.name,
      interest: d.interest,
      payoffLabel: d.payoffMonth >= 0 ? monthLabel(startYear, startMonth1, d.payoffMonth) : null,
    })),
    nonAmortizing: paidOff ? [] : ds.filter((d) => d.bal > 0.005).map((d) => d.name),
  };
}
