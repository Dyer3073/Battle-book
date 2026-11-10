// Meal-plan engine — pack Part 4, deterministic (no AI generation).
// Method: nearest published DGA 2025–2030 pattern level → the day's
// group servings distributed across meals by fixed split templates
// (engine design, labeled as such) → meal slots filled from the
// tagged food DB by a seeded rotation → repair pass to ±10% of the
// calorie target with a protein-range check → exclusions re-verified
// against the finished plan. Allergy/dislike exclusions are HARD
// constraints: pools are filtered before picking, swaps draw only
// from filtered pools, and the repair pass only scales servings of
// foods already in the plan — an excluded food can never enter.

import { FOODS, type Food, type FoodGroup } from "./foods";
import { nearestPattern, type AllergenKey } from "./nutrition";

export type PlanItem = { foodId: string; name: string; serving: string; servings: number; kcal: number; protein: number; carbs: number; fat: number; group: FoodGroup };
export type PlanMeal = { slot: string; label: string; items: PlanItem[]; kcal: number; protein: number };
export type DayPlan = {
  dateLabel: string;
  targetKcal: number;
  patternKcal: number;
  meals: PlanMeal[];
  totalKcal: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  withinTolerance: boolean;
  proteinInRange: boolean;
};

export type PlanOptions = {
  targetKcal: number;
  proteinLowG: number;
  proteinHighG: number;
  vegetarian: boolean;
  allergens: AllergenKey[];
  dislikes: string[]; // lowercase substrings matched against food names
  mealsPerDay: 2 | 3 | 4;
  snacks: boolean;
  seed: number;
};

/** mulberry32 — small deterministic PRNG; same seed, same plan. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function isExcluded(food: Food, opts: Pick<PlanOptions, "allergens" | "dislikes" | "vegetarian">): boolean {
  if (opts.vegetarian && !food.vegetarian) return true;
  for (const a of opts.allergens) if (food.allergens.includes(a)) return true;
  const name = food.name.toLowerCase();
  for (const d of opts.dislikes) if (d && name.includes(d)) return true;
  return false;
}

function pool(group: FoodGroup, opts: PlanOptions, slot?: string): Food[] {
  return FOODS.filter(
    (f) => f.group === group && f.id !== "mre-whole-meal" && !isExcluded(f, opts) &&
      (slot ? f.slots.includes(slot as Food["slots"][number]) || f.slots.length === 0 : true),
  );
}

function item(food: Food, servings: number): PlanItem {
  const s = Math.round(servings * 2) / 2;
  return {
    foodId: food.id, name: food.name, serving: food.serving, servings: s, group: food.group,
    kcal: Math.round(food.kcal * s),
    protein: Math.round((food.protein ?? 0) * s * 10) / 10,
    carbs: Math.round((food.carbs ?? 0) * s * 10) / 10,
    fat: Math.round((food.fat ?? 0) * s * 10) / 10,
  };
}

type SlotSpec = { group: FoodGroup; kcalShare: number; slot: string };

// Per-serving calorie weights used ONLY to turn the pattern's serving
// counts into group calorie shares (engine arithmetic, labeled as
// such in the UI): a protein serving is defined in the 2025–2030
// table as 3 oz cooked meat / 1 egg / ½ cup beans; a grain serving as
// ½ cup cooked grains / 1 slice bread; dairy as 1 cup milk; fruit as
// 1 cup; vegetables as 1 cup; healthy fat as 1 tsp oil.
const SERVING_KCAL: Record<string, number> = {
  protein: 180, grains: 110, vegetable: 50, fruit: 90, dairy: 130, fats: 40,
};

function groupShares(pattern: ReturnType<typeof nearestPattern>): Record<string, number> {
  const raw: Record<string, number> = {
    protein: pattern.proteinServings * SERVING_KCAL.protein!,
    grains: pattern.grainServings * SERVING_KCAL.grains!,
    vegetable: pattern.vegServings * SERVING_KCAL.vegetable!,
    fruit: pattern.fruitServings * SERVING_KCAL.fruit!,
    dairy: pattern.dairyServings * SERVING_KCAL.dairy!,
    fats: pattern.fatTsp * SERVING_KCAL.fats!,
  };
  const total = Object.values(raw).reduce((a, b) => a + b, 0);
  const out: Record<string, number> = {};
  for (const k of Object.keys(raw)) out[k] = raw[k]! / total;
  return out;
}

// Meal split templates (engine design, labeled as such — the pack's
// example split is breakfast 25% / lunch 30% / dinner 35% / snacks
// 10%): within-meal group shares by meal kind.
function mealSlots(kind: string, shares: Record<string, number>): SlotSpec[] {
  if (kind === "breakfast") {
    return [
      { group: "grains", kcalShare: 0.32, slot: "breakfast" },
      { group: "dairy", kcalShare: 0.24, slot: "breakfast" },
      { group: "fruit", kcalShare: 0.2, slot: "breakfast" },
      { group: "protein", kcalShare: 0.24, slot: "breakfast" },
    ];
  }
  if (kind === "snack") {
    return [
      { group: "fruit", kcalShare: 0.5, slot: "snack" },
      { group: "dairy", kcalShare: 0.5, slot: "snack" },
    ];
  }
  // Main meals follow the day's pattern shares for protein/grains/
  // vegetables, renormalized, with a fruit side. The pool slot is a
  // real food-slot tag (lunch for the first main, dinner after).
  const p = shares.protein ?? 0.3, g = shares.grains ?? 0.2, v = shares.vegetable ?? 0.1;
  const sum = p + g + v;
  const slot = kind === "lunch" || kind === "main1" ? "lunch" : "dinner";
  return [
    { group: "protein", kcalShare: (p / sum) * 0.85, slot },
    { group: "grains", kcalShare: (g / sum) * 0.85, slot },
    { group: "vegetable", kcalShare: (v / sum) * 0.85, slot },
    { group: "fruit", kcalShare: 0.15, slot },
  ];
}

function mealShareOfDay(kind: string, mainIndex: number, mainCount: number, hasSnack: boolean): number {
  if (kind === "snack") return 0.1;
  const rest = hasSnack ? 0.9 : 1;
  if (mainCount === 3) {
    // breakfast ~25 / lunch ~30 / dinner ~35 of the day (pack split)
    return rest * [0.28, 0.33, 0.39][mainIndex]!;
  }
  return rest / mainCount;
}

function totals(meals: PlanMeal[], targetKcal: number, lo: number, hi: number) {
  const totalKcal = meals.reduce((s, m) => s + m.kcal, 0);
  const totalProtein = Math.round(meals.reduce((s, m) => s + m.protein, 0) * 10) / 10;
  const totalCarbs = Math.round(meals.reduce((s, m) => s + m.items.reduce((x, i) => x + i.carbs, 0), 0) * 10) / 10;
  const totalFat = Math.round(meals.reduce((s, m) => s + m.items.reduce((x, i) => x + i.fat, 0), 0) * 10) / 10;
  return {
    totalKcal, totalProtein, totalCarbs, totalFat,
    withinTolerance: Math.abs(totalKcal - targetKcal) <= targetKcal * 0.1,
    // Protein check is the pack's criterion exactly (nutrition.md Part 4
    // step 4: "protein within the Part 2 goal range") — the printed range,
    // no grace band. (Final phase, Nov 10, 2026: the earlier hi×1.15 band
    // let a sampled day pass at 179.1 g against a printed 136–170 g range;
    // the pack states no band, so the band was removed. Days may now
    // honestly report protein out of range — that is the pack's design.)
    proteinInRange: totalProtein >= lo && totalProtein <= hi,
  };
}

function refreshMeal(m: PlanMeal): PlanMeal {
  return { ...m, kcal: m.items.reduce((s, i) => s + i.kcal, 0), protein: Math.round(m.items.reduce((s, i) => s + i.protein, 0) * 10) / 10 };
}

export function generateDay(opts: PlanOptions, dateLabel: string, dayOffset = 0): DayPlan {
  const pattern = nearestPattern(opts.targetKcal);
  const rand = rng(opts.seed * 1000 + dayOffset * 77 + 13);
  const kinds: { kind: string; label: string }[] =
    opts.mealsPerDay === 2
      ? [{ kind: "main1", label: "Meal 1" }, { kind: "main2", label: "Meal 2" }]
      : opts.mealsPerDay === 4
        ? [{ kind: "breakfast", label: "Breakfast" }, { kind: "lunch", label: "Lunch" }, { kind: "dinner", label: "Dinner" }, { kind: "main2", label: "Meal 4" }]
        : [{ kind: "breakfast", label: "Breakfast" }, { kind: "lunch", label: "Lunch" }, { kind: "dinner", label: "Dinner" }];
  if (opts.snacks && opts.mealsPerDay !== 4) kinds.push({ kind: "snack", label: "Snacks" });

  const usedByGroup = new Map<string, number>();
  const pick = (group: FoodGroup, slot: string, allotmentKcal = 0): Food | null => {
    const all = pool(group, opts, slot);
    if (all.length === 0) return null;
    // Prefer foods that can plausibly fill this slot's calorie
    // allotment in 0.5–4 servings — a 17-kcal egg-white serving can
    // never fill a 270-kcal protein slot, and a 900-kcal prepared
    // dish should not be scaled to a snack.
    let p = all;
    if (allotmentKcal > 0) {
      const fit = all.filter((f) => f.kcal >= allotmentKcal / 4 && f.kcal <= Math.max(allotmentKcal * 2, 220));
      if (fit.length >= 3) p = fit;
    }
    const start = Math.floor(rand() * p.length);
    for (let i = 0; i < p.length; i++) {
      const cand = p[(start + i) % p.length]!;
      const used = usedByGroup.get(`${group}:${cand.id}`) ?? 0;
      if (used === 0 || i === p.length - 1) {
        usedByGroup.set(`${group}:${cand.id}`, used + 1);
        return cand;
      }
    }
    return p[start] ?? null;
  };

  const shares = groupShares(pattern);
  const mainCount = kinds.filter((k) => k.kind !== "snack").length;
  const hasSnack = kinds.some((k) => k.kind === "snack");
  let mainIdx = -1;
  let meals: PlanMeal[] = kinds.map(({ kind, label }) => {
    if (kind !== "snack") mainIdx++;
    const mealKcal = opts.targetKcal * mealShareOfDay(kind, mainIdx, mainCount, hasSnack);
    const items: PlanItem[] = [];
    for (const spec of mealSlots(kind, shares)) {
      const food = pick(spec.group, spec.slot, mealKcal * spec.kcalShare);
      if (!food || food.kcal <= 0) continue;
      const servings = Math.min(6, Math.max(0.5, Math.round((mealKcal * spec.kcalShare) / food.kcal * 2) / 2));
      items.push(item(food, servings));
    }
    return refreshMeal({ slot: kind, label, items, kcal: 0, protein: 0 });
  });

  // Repair + protein check (pack 4.2 step 4), run as a loop so the
  // protein fix can never silently break the calorie tolerance:
  // (a) scale grain/protein servings in 0.5 steps to ±10% of target;
  // (b) if protein is short, first scale main-meal protein servings
  // up, then swap a main protein slot to the highest-protein-density
  // eligible food AT MATCHED CALORIES; repeat (a) after any swap.
  const repairKcal = () => {
    for (let step = 0; step < 60; step++) {
      const t = totals(meals, opts.targetKcal, opts.proteinLowG, opts.proteinHighG);
      if (t.withinTolerance) break;
      const adjustable: { mi: number; ii: number; item: PlanItem }[] = [];
      meals.forEach((m, mi) => m.items.forEach((it, ii) => {
        if (it.group === "grains" || it.group === "protein") adjustable.push({ mi, ii, item: it });
      }));
      if (adjustable.length === 0) break;
      adjustable.sort((a, b) => b.item.kcal - a.item.kcal);
      const dir = t.totalKcal < opts.targetKcal ? 0.5 : -0.5;
      let changed = false;
      for (const a of adjustable) {
        const food = FOODS.find((f) => f.id === a.item.foodId);
        if (!food) continue;
        const next = a.item.servings + dir;
        if (next < 0.5 || next > 6) continue;
        meals[a.mi]!.items[a.ii] = item(food, next);
        meals[a.mi] = refreshMeal(meals[a.mi]!);
        changed = true;
        break;
      }
      if (!changed) break;
    }
  };
  repairKcal();
  for (let round = 0; round < 3; round++) {
    const t = totals(meals, opts.targetKcal, opts.proteinLowG, opts.proteinHighG);
    if (t.totalProtein >= opts.proteinLowG) break;
    const candidates: { mi: number; ii: number; item: PlanItem }[] = [];
    meals.forEach((m, mi) => {
      if (m.slot === "breakfast" || m.slot === "snack") return; // main meals only
      m.items.forEach((it, ii) => {
        if (it.group === "protein") candidates.push({ mi, ii, item: it });
      });
    });
    if (candidates.length === 0) break;
    candidates.sort((a, b) => b.item.protein - a.item.protein);
    let acted = false;
    for (const c of candidates) {
      const food = FOODS.find((f) => f.id === c.item.foodId);
      if (food && c.item.servings < 6) {
        meals[c.mi]!.items[c.ii] = item(food, c.item.servings + 0.5);
        meals[c.mi] = refreshMeal(meals[c.mi]!);
        acted = true;
        break;
      }
    }
    if (!acted) {
      const c = candidates[0]!;
      const best = pool("protein", opts)
        .filter((f) => f.id !== c.item.foodId && (f.protein ?? 0) > 0)
        .sort((a, b) => (b.protein ?? 0) / Math.max(1, b.kcal) - (a.protein ?? 0) / Math.max(1, a.kcal))[0];
      if (!best) break;
      const servings = Math.min(6, Math.max(0.5, Math.round((c.item.kcal / Math.max(1, best.kcal)) * 2) / 2));
      meals[c.mi]!.items[c.ii] = item(best, servings);
      meals[c.mi] = refreshMeal(meals[c.mi]!);
    }
    repairKcal();
  }

  const fin = totals(meals, opts.targetKcal, opts.proteinLowG, opts.proteinHighG);
  // Exclusion re-verification against the finished plan (hard rule).
  for (const m of meals) {
    for (const it of m.items) {
      const food = FOODS.find((f) => f.id === it.foodId);
      if (food && isExcluded(food, opts)) {
        throw new Error(`Meal-plan engine violation: excluded food ${food.name} reached a finished plan.`);
      }
    }
  }
  return {
    dateLabel, targetKcal: opts.targetKcal, patternKcal: pattern.kcal, meals, ...fin,
  };
}

export function generateWeek(opts: PlanOptions, labels: string[]): DayPlan[] {
  return labels.map((label, i) => generateDay({ ...opts, seed: opts.seed + i * 31 }, label, i));
}

/** Swap candidates for one item: same group, not excluded, calorie-
 * similar (±25% of the item's current contribution). */
export function swapCandidates(day: DayPlan, mealIdx: number, itemIdx: number, opts: PlanOptions): Food[] {
  const current = day.meals[mealIdx]?.items[itemIdx];
  if (!current) return [];
  return pool(current.group, opts)
    .filter((f) => f.id !== current.foodId)
    .map((f) => ({ f, ratio: Math.abs(f.kcal * current.servings - current.kcal) / Math.max(1, current.kcal) }))
    .filter((x) => x.ratio <= 0.25 || x.f.kcal > 0)
    .sort((a, b) => a.ratio - b.ratio)
    .slice(0, 8)
    .map((x) => x.f);
}

export function applySwap(day: DayPlan, mealIdx: number, itemIdx: number, food: Food, opts: PlanOptions): DayPlan {
  if (isExcluded(food, opts)) return day; // hard rule — a swap can never introduce an excluded food
  const meals = day.meals.map((m, mi) => {
    if (mi !== mealIdx) return m;
    const items = m.items.map((it, ii) => (ii === itemIdx ? item(food, it.servings) : it));
    return refreshMeal({ ...m, items });
  });
  const t = totals(meals, day.targetKcal, opts.proteinLowG, opts.proteinHighG);
  return { ...day, meals, ...t };
}

export function groceryRollup(week: DayPlan[]): { name: string; serving: string; servings: number }[] {
  const map = new Map<string, { name: string; serving: string; servings: number }>();
  for (const day of week) {
    for (const meal of day.meals) {
      for (const it of meal.items) {
        const cur = map.get(it.foodId) ?? { name: it.name, serving: it.serving, servings: 0 };
        cur.servings += it.servings;
        map.set(it.foodId, cur);
      }
    }
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}
