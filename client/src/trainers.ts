// Practice Trainers — the drill engine. SINGLE SOURCE OF TRUTH: every
// pool below is DERIVED at module load from the datasets the app
// already ships — RANK_CHARTS + insignia.ts (Rank Charts), KNOTS
// (Field Tools → Knots), SIGNALS (Field Tools → Hand & Arm Signals).
// No rank, knot, or signal content is re-typed here: an item carries
// references into those modules and the view renders from them, so a
// correction to a source section corrects the trainer automatically.
//
// Track posture follows the source sections exactly: Rank Charts and
// Field Tools are member views (locked cards on the spouse and future
// tracks), so the trainers are member-only too — see App.tsx and
// DATA-PLAN.md.

import { RANK_CHARTS, type RankRow } from "./ranks";
import { insigniaFor, type InsigniaEntry, type RankCategory } from "./insignia";
import { KNOTS, KNOT_FAMILIES, type KnotEntry, type KnotFamilyKey } from "./knots";
import {
  SIGNALS,
  SIGNAL_FAMILIES,
  signalFamilyName,
  type SignalEntry,
  type SignalFamilyKey,
  type SignalService,
} from "./signals";
import {
  GENERAL_ORDERS,
  GO_SERVICES,
  type GeneralOrder,
  type GeneralOrderService,
} from "./generalorders";

export type TrainerId = "rank" | "knots" | "signals" | "generalorders";
export type TrainerMode = "flashcard" | "quiz";

/** Random source — injectable so session building is testable. */
export type Rng = () => number;

/** Deterministic RNG (mulberry32) for tests and reproducible drills. */
export function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: readonly T[], rng: Rng): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = out[i]!;
    out[i] = out[j]!;
    out[j] = tmp;
  }
  return out;
}

function pick<T>(arr: readonly T[], rng: Rng): T | undefined {
  return arr[Math.floor(rng() * arr.length)];
}

/* ------------------------------ Rank pool ------------------------------ */

export type RankItem = {
  /** Stable key: branch|category|grade|abbr (the rankdetail sheet key). */
  key: string;
  branch: string;
  category: RankCategory;
  row: RankRow;
  insignia: InsigniaEntry | undefined;
  /** True when a drawn insignia exists for this row. False for the Air
   * Force warrant rows (art "note" — designs published only as official
   * graphics in AFGM2026-36-2033 Fig. 11.1, so the charts ship NO
   * drawing) and for the no-insignia rows (art "none", e.g. E-1s whose
   * published display is "No insignia worn."). Text-only items drill by
   * their published text description — never an invented drawing. */
  hasDrawing: boolean;
  /** Same-branch + same-grade-band distractor band label (see
   * gradeBandOf). */
  band: string;
};

/** Grade band for distractor selection: same category, grouped by the
 * published career tiers — junior / mid / senior enlisted, the warrant
 * corps as one band, and company-grade / field-grade / general-flag
 * officers. */
export function gradeBandOf(category: RankCategory, grade: string): string {
  if (category === "warrant") return "warrant";
  const m = grade.match(/^[EO]-(\d+)/);
  const n = m ? Number(m[1]) : 0;
  if (category === "enlisted") {
    if (n <= 3) return "enlisted-junior";
    if (n <= 6) return "enlisted-mid";
    return "enlisted-senior";
  }
  if (n <= 3) return "officer-company";
  if (n <= 6) return "officer-field";
  return "officer-general";
}

let rankPoolCache: RankItem[] | null = null;
export function rankPool(): RankItem[] {
  if (rankPoolCache) return rankPoolCache;
  const out: RankItem[] = [];
  for (const chart of RANK_CHARTS) {
    const cats: { category: RankCategory; rows: RankRow[] | null }[] = [
      { category: "enlisted", rows: chart.enlisted },
      { category: "warrant", rows: chart.warrant },
      { category: "officers", rows: chart.officers },
    ];
    for (const { category, rows } of cats) {
      for (const row of rows ?? []) {
        const insignia = insigniaFor(chart.branch, category, row.grade, row.abbr);
        out.push({
          key: `${chart.branch}|${category}|${row.grade}|${row.abbr}`,
          branch: chart.branch,
          category,
          row,
          insignia,
          hasDrawing: !!insignia && insignia.art.t !== "note" && insignia.art.t !== "none",
          band: gradeBandOf(category, row.grade),
        });
      }
    }
  }
  rankPoolCache = out;
  return out;
}

export const RANK_BRANCHES: string[] = RANK_CHARTS.map((c) => c.branch);

/** Branch filter — "All" or one chart branch. The pool it returns
 * contains ONLY that branch's rows (acceptance-checked). */
export function filterRankPool(branch: string): RankItem[] {
  const pool = rankPool();
  return branch === "All" ? pool : pool.filter((i) => i.branch === branch);
}

/** The option label a quiz shows for a rank item. */
export function rankLabel(i: RankItem): string {
  return `${i.row.title} (${i.row.abbr}) — ${i.row.grade}`;
}

/** Distractors for a rank quiz item: drawn from the SAME branch and
 * the SAME grade band first; if the band holds fewer than `count`
 * other rows, widen to the same branch + category, then the same
 * branch. Never another branch while the branch filter is on — the
 * candidates come from the (already filtered) pool passed in. */
export function rankDistractors(item: RankItem, pool: readonly RankItem[], count: number, rng: Rng): RankItem[] {
  const others = pool.filter((i) => i.key !== item.key);
  const tiers: RankItem[][] = [
    others.filter((i) => i.branch === item.branch && i.band === item.band),
    others.filter((i) => i.branch === item.branch && i.category === item.category),
    others.filter((i) => i.branch === item.branch),
    others,
  ];
  const chosen: RankItem[] = [];
  for (const tier of tiers) {
    for (const cand of shuffle(tier, rng)) {
      if (chosen.length >= count) break;
      if (!chosen.some((c) => c.key === cand.key)) chosen.push(cand);
    }
    if (chosen.length >= count) break;
  }
  return chosen.slice(0, count);
}

/* ------------------------------ Knots pool ----------------------------- */

export type KnotItem = {
  key: string;
  entry: KnotEntry;
};

export function knotPool(): KnotItem[] {
  // KNOTS is the Knots section's own dataset: 59 knots + the whipping
  // technique card, which drills like every other entry (diagram →
  // name; flip reveals name + what it's for).
  return KNOTS.map((entry) => ({ key: entry.id, entry }));
}

export function filterKnotPool(family: KnotFamilyKey | "All"): KnotItem[] {
  const pool = knotPool();
  return family === "All" ? pool : pool.filter((i) => i.entry.family === family);
}

export function knotFamilyLabel(key: KnotFamilyKey): string {
  return KNOT_FAMILIES.find((f) => f.key === key)?.name ?? key;
}

/** Distractors for a knot quiz item: same family first, then the rest
 * of the (filtered) pool. */
export function knotDistractors(item: KnotItem, pool: readonly KnotItem[], count: number, rng: Rng): KnotItem[] {
  const others = pool.filter((i) => i.key !== item.key);
  const sameFamily = shuffle(others.filter((i) => i.entry.family === item.entry.family), rng);
  const rest = shuffle(others.filter((i) => i.entry.family !== item.entry.family), rng);
  return [...sameFamily, ...rest].slice(0, count);
}

/* ----------------------------- Signals pool ---------------------------- */

export type SignalItem = {
  key: string;
  entry: SignalEntry;
};

export function signalPool(): SignalItem[] {
  return SIGNALS.map((entry) => ({ key: entry.id, entry }));
}

export const SIGNAL_SERVICES: SignalService[] = ["Army", "USMC", "FM 21-60", "Army task"];

export function signalServiceLabel(s: SignalService): string {
  return s === "Army task" ? "Army task 551-88H-1023 (MHE)" : s;
}

/** Family + service filters. The service filter is exact against the
 * entry's published service: a "USMC" drill draws ONLY entries whose
 * service is USMC (MCWP 3-11.2 forms) — an Army form can never appear
 * in a USMC question, and forms are never blended. */
export function filterSignalPool(family: SignalFamilyKey | "All", service: SignalService | "All"): SignalItem[] {
  return signalPool().filter(
    (i) =>
      (family === "All" || i.entry.family === family) &&
      (service === "All" || i.entry.service === service),
  );
}

export function signalFamilyLabel(key: SignalFamilyKey): string {
  return signalFamilyName(key);
}

export { SIGNAL_FAMILIES };

/** Distractors for a signal quiz item: same family first, then same
 * service, then the rest of the (filtered) pool. */
export function signalDistractors(item: SignalItem, pool: readonly SignalItem[], count: number, rng: Rng): SignalItem[] {
  const others = pool.filter((i) => i.key !== item.key);
  const tiers = [
    shuffle(others.filter((i) => i.entry.family === item.entry.family), rng),
    shuffle(others.filter((i) => i.entry.service === item.entry.service), rng),
    shuffle(others, rng),
  ];
  const chosen: SignalItem[] = [];
  for (const tier of tiers) {
    for (const cand of tier) {
      if (chosen.length >= count) break;
      if (!chosen.some((c) => c.key === cand.key)) chosen.push(cand);
    }
    if (chosen.length >= count) break;
  }
  return chosen;
}

/* -------------------------- General Orders pool ------------------------ */

export type GoItem = {
  /** Stable key: service|n (e.g. "Marine Corps|6"). */
  key: string;
  order: GeneralOrder;
};

export { GO_SERVICES };
export type { GeneralOrderService };

/** The General Orders pool — DERIVED from GENERAL_ORDERS in
 * generalorders.ts, the same arrays the General Orders reference
 * section renders its cards from. Verbatim text is never re-typed
 * here: Army 3 + Marine Corps 11 + Navy 11 = 25 orders. Wording
 * differences between services stay as published (the quiz's hardest
 * distractors are the other services' same-number orders — exactly
 * the confusion the verbatim discipline exists to catch). */
export function goPool(): GoItem[] {
  return GENERAL_ORDERS.map((order) => ({ key: `${order.service}|${order.n}`, order }));
}

/** Service filter — exact against the order's published service. */
export function filterGoPool(service: GeneralOrderService | "All"): GoItem[] {
  const pool = goPool();
  return service === "All" ? pool : pool.filter((i) => i.order.service === service);
}

export function goLabel(i: GoItem): string {
  return `${i.order.service} — General Order ${i.order.n}`;
}

/** Distractors for a General Orders quiz item (the prompt names the
 * service + order number; the options are verbatim order texts):
 * the other services' SAME-number order first (the near-miss wording
 * trap), then same-service other orders, then the rest of the
 * (filtered) pool. Candidates are deduped BY TEXT, not just by key:
 * the Marine Corps and Navy lists publish IDENTICAL text for orders
 * 3, 5, 7, 8, and 11, so a same-number cross-service distractor can
 * be word-for-word the correct answer — it is excluded, and no two
 * options in one question ever carry the same text (live-probe fix,
 * Nov 9, 2026: a Navy GO 5 question rendered the correct text twice). */
export function goDistractors(item: GoItem, pool: readonly GoItem[], count: number, rng: Rng): GoItem[] {
  const others = pool.filter((i) => i.key !== item.key);
  const tiers: GoItem[][] = [
    others.filter((i) => i.order.n === item.order.n && i.order.service !== item.order.service),
    others.filter((i) => i.order.service === item.order.service),
    others,
  ];
  const chosen: GoItem[] = [];
  const usedTexts = new Set<string>([item.order.text]);
  for (const tier of tiers) {
    for (const cand of shuffle(tier, rng)) {
      if (chosen.length >= count) break;
      if (usedTexts.has(cand.order.text)) continue;
      if (!chosen.some((c) => c.key === cand.key)) {
        chosen.push(cand);
        usedTexts.add(cand.order.text);
      }
    }
    if (chosen.length >= count) break;
  }
  return chosen.slice(0, count);
}

/* ---------------------------- Session engine --------------------------- */

export type SessionItem = RankItem | KnotItem | SignalItem | GoItem;

export function itemKey(item: SessionItem): string {
  return item.key;
}

/** Build a session queue: a shuffled slice of `length` distinct items
 * (the whole pool when the pool is smaller than the requested length). */
export function buildQueue<T extends { key: string }>(pool: readonly T[], length: number, rng: Rng): T[] {
  return shuffle(pool, rng).slice(0, Math.max(0, Math.min(length, pool.length)));
}

/** Spaced repetition, simple version: a missed item re-enters the SAME
 * session's queue a few positions later (position + 3), or at the end
 * when fewer than 3 items remain. Returns a new queue; the item at
 * `pos` stays where it was (it was just answered) and a copy is
 * inserted at the resurface position. */
export function reinsertMissed<T>(queue: readonly T[], pos: number, item: T): T[] {
  const out = [...queue];
  const at = Math.min(pos + 3, out.length);
  out.splice(at, 0, item);
  return out;
}

/** How many times an item may resurface in one session — after this
 * many total attempts it stays in the missed list without re-queuing,
 * so a session always terminates. */
export const MAX_ATTEMPTS_PER_ITEM = 3;

/** Session scoring: distinct items correct on the FIRST attempt over
 * distinct items in the session. Deliberate-answer checks reproduce
 * exactly: 7 first-try correct of 10 → score 7 of 10. */
export function sessionScore(firstTryCorrect: ReadonlySet<string>, distinctKeys: readonly string[]): { score: number; total: number } {
  const total = distinctKeys.length;
  let score = 0;
  for (const k of distinctKeys) if (firstTryCorrect.has(k)) score++;
  return { score, total };
}

/** Build one multiple-choice question: the correct item plus
 * distractors, shuffled, with the correct index marked. */
export function buildOptions<T extends { key: string }>(
  correct: T,
  distractors: readonly T[],
  rng: Rng,
): { options: T[]; correctIndex: number } {
  const options = shuffle([correct, ...distractors], rng);
  return { options, correctIndex: options.findIndex((o) => o.key === correct.key) };
}

export { pick };
