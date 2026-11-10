// Nutrition — Fitness tile. Three components from the research pack:
// (1) Fueling Education: the pack's 17 entries as cards, with the
// Flag F-6 re-verification outcome printed at the top; (2) Calorie
// Tracker: Mifflin–St Jeor × standard activity factors with the
// HPRC 1%-per-week cap and the RMR floor hard-coded, per-profile
// private logging (server-resolved profile, the Claim Tracker
// pattern); (3) Meal Plans: the deterministic engine in mealplan.ts
// over the bundled USDA subset. Plus the Food Database browser.
// In the future-member shell this renders in "education" mode —
// boot-camp / OCS prep framing, no tracker or plans.

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch } from "./HubTiles";
import { FOODS, FOOD_DB_CITATION, FOOD_DB_RELEASE, foodById, searchFoods, type Food } from "./foods";
import {
  ACTIVITIES, ALLERGEN_KEYS, ALLERGY_LIMIT, DB_LIMITS, ENTRIES, F1_NOTE, F6_OUTCOME,
  LB_PER_KG, NUT_DISCLAIMER, computeTarget, entryById, macroTargets, recalibrationAdvice,
  trendLbPerWeek, type ActivityKey, type AllergenKey, type Goal, type NutEntry, type Sex,
} from "./nutrition";
import {
  applySwap, generateDay, generateWeek, groceryRollup, swapCandidates,
  type DayPlan, type PlanOptions,
} from "./mealplan";

const inputCls = "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const btnPrimary = "rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4";

function NoteBox({ text }: { text: string }) {
  return <p className="mt-3 rounded-[var(--radius)] bg-[var(--amber-bg)] p-3 text-sm font-semibold text-[var(--amber)]">{text}</p>;
}
function WarnBox({ text }: { text: string }) {
  return <p className="mt-3 rounded-[var(--radius)] bg-[var(--red-bg,#fdecec)] p-3 text-sm font-bold text-[var(--red)]">{text}</p>;
}
function Disclaimer() {
  return (
    <div className={`${cardCls} mt-4`} role="note" aria-label="Nutrition disclaimer">
      <p className="font-display text-base font-bold text-[var(--text)]">Not medical advice</p>
      <p className="mt-1 text-sm text-[var(--text)]">{NUT_DISCLAIMER}</p>
    </div>
  );
}

/* ------------------------------ Learn ------------------------------ */

function EntryCard({ e }: { e: NutEntry }) {
  return (
    <article className={cardCls}>
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">FUELING EDUCATION · {e.n} OF 17</p>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{e.title}</h4>
      {e.warning ? <WarnBox text="⚠ WARNING ENTRY — these practices circulate before weigh-ins and tape tests. Each one trades health, and sometimes a career, for a temporary number." /> : null}
      <div className="mt-2 space-y-2">
        {e.body.map((p) => (
          <p key={p.slice(0, 40)} className="text-base text-[var(--text)]">{p}</p>
        ))}
      </div>
      <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3">
        <p className="text-sm font-bold text-[var(--text)]">Numbers as published</p>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
          {e.numbers.map((n) => (
            <li key={n.slice(0, 40)}>{n}</li>
          ))}
        </ul>
      </div>
      <CardTools cardRef={{ section: "nutrition", itemKey: `edu-${e.id}`, title: e.title, summary: e.body[0] ?? "", source: e.source }} />
    </article>
  );
}

function LearnView({ focusId, focusNonce }: { focusId?: string | null; focusNonce?: number }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  useEffect(() => {
    if (focusId && focusNonce && focusNonce > 0 && entryById(focusId)) setOpenId(focusId);
  }, [focusId, focusNonce]);
  const open = openId ? entryById(openId) : undefined;
  if (open) {
    return (
      <div>
        <HubBackButton ariaLabel="Back to Fueling Education" text="Back to Fueling Education" onBack={() => setOpenId(null)} />
        <EntryCard e={open} />
      </div>
    );
  }
  const items = ENTRIES.filter((e) => {
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    return `${e.title} ${e.body.join(" ")} ${e.numbers.join(" ")}`.toLowerCase().includes(needle);
  });
  return (
    <div>
      <p className="text-base text-[var(--text)]">
        The military's own fueling guidance, entry by entry — MDRI energy and macros, fueling before/during/after
        training, hydration with the TB MED 507 ceilings, caffeine's two published ceilings side by side, the OPSS
        supplement-safety rule, MRE facts, and the unsafe-practices warning. Every number prints as published, with
        its source; where sources disagree, both print.
      </p>
      <div className={`${cardCls} mt-3`} role="note" aria-label="Flag F-6 verification outcome">
        <p className="font-display text-base font-bold text-[var(--text)]">Dietary Guidelines edition check — Flag F-6</p>
        <p className="mt-1 text-sm text-[var(--text)]">{F6_OUTCOME}</p>
      </div>
      <div className="mt-3">
        <HubSearch id="nut-learn-search" label="Search Fueling Education" ariaLabel="Search Fueling Education entries" value={q} onChange={setQ} placeholder="Protein, hydration, MRE, caffeine…" />
      </div>
      <div className="flex flex-col gap-2">
        {items.map((e) => (
          <button key={e.id} type="button" aria-label={`Open ${e.title}`} onClick={() => setOpenId(e.id)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
            <span className="font-display block text-base font-bold text-[var(--text)]">
              {e.n}. {e.title}
              {e.warning ? " ⚠" : ""}
            </span>
            <span className="mt-0.5 block text-sm text-[var(--dim)]">{e.body[0]?.slice(0, 110)}…</span>
          </button>
        ))}
        {items.length === 0 ? <p className="text-sm text-[var(--dim)]">No entries match that search.</p> : null}
      </div>
      <Disclaimer />
    </div>
  );
}

/* --------------------------- Food database -------------------------- */

const GROUP_LABELS: Record<Food["group"], string> = {
  protein: "Protein foods", grains: "Grains", vegetable: "Vegetables", fruit: "Fruits",
  dairy: "Dairy", fats: "Fats & oils", prepared: "Prepared & mixed", beverage: "Beverages",
};

function FoodCard({ f }: { f: Food }) {
  return (
    <article className={cardCls}>
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">{GROUP_LABELS[f.group].toUpperCase()}{f.fdcId ? ` · FDC #${f.fdcId}` : " · DLA / NATICK"}</p>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{f.name}</h4>
      <p className="mt-1 text-base text-[var(--text)]">
        Per serving ({f.serving}{f.servingGrams ? `, ${f.servingGrams} g` : ""}): <strong>{f.kcal} kcal</strong>
        {f.protein !== null ? ` · protein ${f.protein} g` : ""}
        {f.carbs !== null ? ` · carbs ${f.carbs} g` : ""}
        {f.fat !== null ? ` · fat ${f.fat} g` : ""}
        {f.fiber !== null ? ` · fiber ${f.fiber} g` : ""}
        {f.sodium !== null ? ` · sodium ${f.sodium} mg` : ""}
      </p>
      {f.allergens.length ? <p className="mt-1 text-sm text-[var(--text)]">Name-matched allergen tags: {f.allergens.join(", ")} — tags are name matching, not an allergen declaration (see the allergy limit in Meal Plans).</p> : null}
      {f.source ? <p className="mt-1 text-sm text-[var(--dim)]">{f.source}</p> : null}
      <CardTools cardRef={{ section: "nutrition", itemKey: `food-${f.id}`, title: f.name, summary: `${GROUP_LABELS[f.group]} · ${f.kcal} kcal per ${f.serving}`, source: f.source ?? FOOD_DB_CITATION }} />
    </article>
  );
}

function FoodsView({ focusId, focusNonce }: { focusId?: string | null; focusNonce?: number }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<string | null>(null);
  useEffect(() => {
    if (focusId && focusNonce && focusNonce > 0 && foodById(focusId)) setOpenId(focusId);
  }, [focusId, focusNonce]);
  const open = openId ? foodById(openId) : undefined;
  if (open) {
    return (
      <div>
        <HubBackButton ariaLabel="Back to Food Database" text="Back to Food Database" onBack={() => setOpenId(null)} />
        <FoodCard f={open} />
      </div>
    );
  }
  const items = FOODS.filter((f) => (group ? f.group === group : true)).filter((f) => {
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    return `${f.name} ${f.aliases}`.toLowerCase().includes(needle);
  }).slice(0, 80);
  return (
    <div>
      <p className="text-base text-[var(--text)]">
        {FOODS.length} foods, bundled for offline use from {FOOD_DB_RELEASE}. Source: {FOOD_DB_CITATION} — USDA
        FoodData Central data are public domain (CC0 1.0); listing the source is USDA's request, and nothing here
        implies USDA endorsement. Search works offline; the tracker and meal plans run on this same database.
      </p>
      <NoteBox text={DB_LIMITS} />
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Food groups">
        <button type="button" aria-label="Show all food groups" aria-pressed={group === null} onClick={() => setGroup(null)} className={group === null ? btnPrimary : btnGhost}>All</button>
        {(Object.keys(GROUP_LABELS) as Food["group"][]).map((g) => (
          <button key={g} type="button" aria-label={`Show ${GROUP_LABELS[g]}`} aria-pressed={group === g} onClick={() => setGroup(g)} className={group === g ? btnPrimary : btnGhost}>
            {GROUP_LABELS[g]} ({FOODS.filter((f) => f.group === g).length})
          </button>
        ))}
      </div>
      <div className="mt-3">
        <HubSearch id="nut-food-search" label="Search the food database" ariaLabel="Search the food database" value={q} onChange={setQ} placeholder="Chicken breast, brown rice, yogurt…" />
      </div>
      <div className="flex flex-col gap-2">
        {items.map((f) => (
          <button key={f.id} type="button" aria-label={`Open ${f.name}`} onClick={() => setOpenId(f.id)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
            <span className="font-display block text-base font-bold text-[var(--text)]">{f.name}</span>
            <span className="mt-0.5 block text-sm text-[var(--dim)]">{f.kcal} kcal · {f.serving} · {GROUP_LABELS[f.group]}</span>
          </button>
        ))}
        {items.length === 0 ? <p className="text-sm text-[var(--dim)]">No foods match that search in this group.</p> : null}
      </div>
    </div>
  );
}

/* ------------------------------ Tracker ----------------------------- */

export type NutSettings = {
  sex: Sex; age: number; heightCm: number; weightKg: number;
  activity: ActivityKey; goal: Goal; rateLbPerWeek: number;
  vegetarian: boolean; allergens: AllergenKey[]; dislikes: string[];
  mealsPerDay: 2 | 3 | 4; snacks: boolean;
};

const todayStr = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const shiftDate = (date: string, days: number) => {
  const d = new Date(`${date}T12:00:00`);
  d.setDate(d.getDate() + days);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const MEAL_SLOTS = [
  { key: "breakfast", label: "Breakfast" }, { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" }, { key: "snacks", label: "Snacks" }, { key: "field", label: "Field (MRE)" },
];

function Bar({ label, value, target, unit }: { label: string; value: number; target: number; unit: string }) {
  const pct = target > 0 ? Math.min(100, Math.round((value / target) * 100)) : 0;
  return (
    <div>
      <p className="text-sm text-[var(--text)]"><strong>{label}:</strong> {Math.round(value)} / {Math.round(target)} {unit} ({pct}%)</p>
      <div className="mt-1 h-2.5 rounded-full bg-[var(--surface2)]" role="progressbar" aria-label={`${label} progress`} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-2.5 rounded-full bg-[var(--accent)]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function TrackerView({ settings, onSaveSettings }: { settings: NutSettings | null; onSaveSettings: (s: NutSettings) => void }) {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [date, setDate] = useState(todayStr());
  const [meal, setMeal] = useState("breakfast");
  const [foodQ, setFoodQ] = useState("");
  const [servings, setServings] = useState("1");
  const [manual, setManual] = useState({ name: "", kcal: "", protein: "", carbs: "", fat: "" });
  const [weightLb, setWeightLb] = useState("");
  const [custom, setCustom] = useState({ name: "", serving: "1 serving", kcal: "", protein: "", carbs: "", fat: "", fiber: "" });

  const logQ = useQuery({ queryKey: ["nutLog", date], queryFn: () => api.listNutritionLog({ date }) });
  const customQ = useQuery({ queryKey: ["nutCustom"], queryFn: () => api.listNutritionCustomFoods({}) });
  const weightsQ = useQuery({ queryKey: ["nutWeights"], queryFn: () => api.listNutritionWeights({}) });
  const weekDates = useMemo(() => Array.from({ length: 7 }, (_, i) => shiftDate(date, i - 6)), [date]);
  const weekQs = useQueries({
    queries: weekDates.map((d) => ({ queryKey: ["nutLog", d], queryFn: () => api.listNutritionLog({ date: d }) })),
  });

  const addEntry = useMutation({
    mutationFn: (args: Parameters<typeof api.addNutritionLogEntry>[0]) => api.addNutritionLogEntry(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["nutLog"] }),
  });
  const delEntry = useMutation({
    mutationFn: (args: Parameters<typeof api.deleteNutritionLogEntry>[0]) => api.deleteNutritionLogEntry(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["nutLog"] }),
  });
  const addWeight = useMutation({
    mutationFn: (args: Parameters<typeof api.addNutritionWeight>[0]) => api.addNutritionWeight(args),
    onSuccess: () => { setWeightLb(""); void queryClient.invalidateQueries({ queryKey: ["nutWeights"] }); },
  });
  const addCustom = useMutation({
    mutationFn: (args: Parameters<typeof api.addNutritionCustomFood>[0]) => api.addNutritionCustomFood(args),
    onSuccess: () => { setCustom({ name: "", serving: "1 serving", kcal: "", protein: "", carbs: "", fat: "", fiber: "" }); void queryClient.invalidateQueries({ queryKey: ["nutCustom"] }); },
  });
  const delCustom = useMutation({
    mutationFn: (args: Parameters<typeof api.deleteNutritionCustomFood>[0]) => api.deleteNutritionCustomFood(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["nutCustom"] }),
  });

  if (!settings || editing) {
    return <SettingsForm initial={settings} onSave={(s) => { onSaveSettings(s); setEditing(false); }} />;
  }

  const target = computeTarget(settings);
  const macros = macroTargets(settings.goal, settings.weightKg, target.target);
  const entries = logQ.data?.entries ?? [];
  const totals = entries.reduce(
    (acc, e) => ({ kcal: acc.kcal + e.kcal, protein: acc.protein + e.protein, carbs: acc.carbs + e.carbs, fat: acc.fat + e.fat, fiber: acc.fiber + e.fiber }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 },
  );
  const weights = (weightsQ.data?.weights ?? []).map((w) => ({ date: w.date, weightKg: w.weightKg }));
  const trend = trendLbPerWeek(weights);
  const advice = recalibrationAdvice({ goal: settings.goal, rateLbPerWeek: settings.rateLbPerWeek, trendLbPerWeek: trend, weightKg: settings.weightKg });
  const results = searchFoods(foodQ, 12);
  const weekRows = weekDates.map((d, i) => {
    const es = weekQs[i]?.data?.entries ?? [];
    return { date: d, kcal: es.reduce((s, e) => s + e.kcal, 0), logged: es.length > 0 };
  });
  const loggedDays = weekRows.filter((r) => r.logged);
  const weekAvg = loggedDays.length ? Math.round(loggedDays.reduce((s, r) => s + r.kcal, 0) / loggedDays.length) : 0;

  const logFood = (f: Food) => {
    const s = Math.max(0.05, Number(servings) || 1);
    addEntry.mutate({
      date, meal, name: `${f.name} (${f.serving})`, foodId: f.id, servings: s,
      kcal: Math.round(f.kcal * s), protein: Math.round((f.protein ?? 0) * s * 10) / 10,
      carbs: Math.round((f.carbs ?? 0) * s * 10) / 10, fat: Math.round((f.fat ?? 0) * s * 10) / 10,
      fiber: Math.round((f.fiber ?? 0) * s * 10) / 10,
    });
  };

  return (
    <div>
      <Disclaimer />
      <div className={`${cardCls} mt-4`}>
        <p className="font-display text-lg font-bold text-[var(--text)]">Your target — an estimate, not a measurement</p>
        <p className="mt-1 text-base text-[var(--text)]">
          Resting metabolic rate (Mifflin–St Jeor): <strong>{target.rmr} kcal/day</strong> — the equation is within
          ~±10% of measured RMR for most healthy adults. Maintenance estimate (RMR × standard activity factor):{" "}
          <strong>{target.tdee} kcal/day</strong>. Your {settings.goal} target: <strong>{target.target} kcal/day</strong>.
        </p>
        <p className="mt-1 text-sm text-[var(--text)]">Sanity check: {target.mdriBand}. If your computed target sits far from the military planning standard for your sex and activity, re-check your activity pick — it should describe your total daily life, not just workouts.</p>
        {settings.goal === "lose" || settings.goal === "gain" ? (
          <p className="mt-1 text-sm text-[var(--text)]">
            Rate uses the ≈3,500 kcal ≈ 1 lb approximation (labeled an approximation wherever it appears — pack Flag
            F-8): {settings.goal === "lose" ? "−" : "+"}{Math.abs(target.adjustmentKcal)} kcal/day for{" "}
            {target.effectiveRateLb} lb/week.
          </p>
        ) : null}
        {target.capped ? (
          <WarnBox text={`GUARDRAIL — RATE CAPPED: your chosen rate exceeded the HPRC safe ceiling of 1% of body weight per week. The target uses ${target.effectiveRateLb} lb/week instead. Faster loss costs muscle and performance (see Weight Management).`} />
        ) : null}
        {target.floorApplied ? (
          <WarnBox text="GUARDRAIL — RMR FLOOR: the requested deficit would have put your target below your resting metabolic rate, so the target is floored at your RMR. Eating below resting needs is the crash-cut pattern the Unsafe Practices entry warns about." />
        ) : null}
        <p className="mt-2 text-base text-[var(--text)]">
          Macros: protein <strong>{macros.proteinG} g/day</strong> (published range for your goal: {macros.proteinLowG}–
          {macros.proteinHighG} g — {macros.proteinRangeLabel}) · fat <strong>{macros.fatG} g/day</strong> ({macros.fatPct}% of
          target — AMDR 20–35%, AR 40–25 prefers ≤30%) · carbohydrate takes the remainder: <strong>{macros.carbsG} g/day</strong>.
          This goal table is an assembly of published ranges, presented as the app's design, not a published table (Flag F-3).
        </p>
        <NoteBox text={F1_NOTE} />
        <button type="button" aria-label="Edit tracker settings" onClick={() => setEditing(true)} className={`${btnGhost} mt-3`}>Edit settings</button>
      </div>

      <div className={`${cardCls} mt-4`}>
        <p className="font-display text-lg font-bold text-[var(--text)]">Daily food log — private to your profile</p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="nut-date" className={labelCls}>Day</label>
            <input id="nut-date" aria-label="Log date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="nut-meal" className={labelCls}>Meal slot</label>
            <select id="nut-meal" aria-label="Meal slot" value={meal} onChange={(e) => setMeal(e.target.value)} className={inputCls}>
              {MEAL_SLOTS.map((m) => (<option key={m.key} value={m.key}>{m.label}</option>))}
            </select>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <Bar label="Calories" value={totals.kcal} target={target.target} unit="kcal" />
          <Bar label="Protein" value={totals.protein} target={macros.proteinG} unit="g" />
          <Bar label="Carbs" value={totals.carbs} target={macros.carbsG} unit="g" />
          <Bar label="Fat" value={totals.fat} target={macros.fatG} unit="g" />
          <p className="text-sm text-[var(--text)]">Fiber (informational): {Math.round(totals.fiber)} g · Remaining: {Math.max(0, target.target - Math.round(totals.kcal))} kcal</p>
        </div>
        {MEAL_SLOTS.map((slot) => {
          const slotEntries = entries.filter((e) => e.meal === slot.key);
          if (!slotEntries.length) return null;
          return (
            <div key={slot.key} className="mt-3">
              <p className="text-sm font-bold text-[var(--text)]">{slot.label} — {Math.round(slotEntries.reduce((s, e) => s + e.kcal, 0))} kcal</p>
              <ul className="mt-1 space-y-1">
                {slotEntries.map((e) => (
                  <li key={e.id} className="flex items-center justify-between gap-2 text-sm text-[var(--text)]">
                    <span>{e.name} × {e.servings} — {Math.round(e.kcal)} kcal · P {Math.round(e.protein)} · C {Math.round(e.carbs)} · F {Math.round(e.fat)}</span>
                    <button type="button" aria-label={`Remove ${e.name}`} disabled={delEntry.isPending} onClick={() => delEntry.mutate({ id: e.id })} className="shrink-0 font-bold text-[var(--red)]">Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <button
          type="button" aria-label="Copy yesterday's log to this day"
          disabled={addEntry.isPending}
          onClick={async () => {
            const y = await api.listNutritionLog({ date: shiftDate(date, -1) });
            for (const e of y.entries) {
              addEntry.mutate({ date, meal: e.meal, name: e.name, foodId: e.foodId, servings: e.servings, kcal: e.kcal, protein: e.protein, carbs: e.carbs, fat: e.fat, fiber: e.fiber });
            }
          }}
          className={`${btnGhost} mt-3`}
        >Copy yesterday</button>

        <p className="font-display mt-4 text-base font-bold text-[var(--text)]">Add a food</p>
        <div className="mt-2 grid grid-cols-[1fr_110px] gap-3">
          <div>
            <label htmlFor="nut-foodq" className={labelCls}>Search the database</label>
            <input id="nut-foodq" aria-label="Search foods to log" value={foodQ} onChange={(e) => setFoodQ(e.target.value)} className={inputCls} placeholder="Chicken, rice, yogurt…" />
          </div>
          <div>
            <label htmlFor="nut-serv" className={labelCls}>Servings</label>
            <input id="nut-serv" aria-label="Servings" type="number" step="0.25" min="0.05" value={servings} onChange={(e) => setServings(e.target.value)} className={inputCls} />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {results.map((f) => (
            <button key={f.id} type="button" aria-label={`Log ${f.name}`} disabled={addEntry.isPending} onClick={() => logFood(f)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="block text-base font-bold text-[var(--text)]">{f.name}</span>
              <span className="block text-sm text-[var(--dim)]">{f.kcal} kcal per {f.serving} — tap to log × {servings || "1"}</span>
            </button>
          ))}
          {(customQ.data?.foods ?? []).filter((c) => !foodQ || c.name.toLowerCase().includes(foodQ.toLowerCase())).map((c) => (
            <button key={c.id} type="button" aria-label={`Log custom food ${c.name}`} disabled={addEntry.isPending}
              onClick={() => { const s = Math.max(0.05, Number(servings) || 1); addEntry.mutate({ date, meal, name: `${c.name} (${c.serving}) — your entry`, foodId: "", servings: s, kcal: Math.round(c.kcal * s), protein: Math.round(c.protein * s * 10) / 10, carbs: Math.round(c.carbs * s * 10) / 10, fat: Math.round(c.fat * s * 10) / 10, fiber: Math.round(c.fiber * s * 10) / 10 }); }}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="block text-base font-bold text-[var(--text)]">{c.name} <span className="text-xs font-bold text-[var(--amber)]">YOUR ENTRY — NOT FROM USDA</span></span>
              <span className="block text-sm text-[var(--dim)]">{c.kcal} kcal per {c.serving} — tap to log × {servings || "1"}</span>
            </button>
          ))}
        </div>

        <form
          className="mt-4 space-y-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (!manual.name.trim()) return;
            addEntry.mutate({ date, meal, name: `${manual.name.trim()} — manual entry`, foodId: "", servings: 1, kcal: Number(manual.kcal) || 0, protein: Number(manual.protein) || 0, carbs: Number(manual.carbs) || 0, fat: Number(manual.fat) || 0, fiber: 0 });
            setManual({ name: "", kcal: "", protein: "", carbs: "", fat: "" });
          }}
        >
          <p className="text-sm font-bold text-[var(--text)]">Manual entry (label values)</p>
          <input aria-label="Manual food name" value={manual.name} onChange={(e) => setManual({ ...manual, name: e.target.value })} className={inputCls} placeholder="Food name" />
          <div className="grid grid-cols-4 gap-2">
            <input aria-label="Manual calories" type="number" value={manual.kcal} onChange={(e) => setManual({ ...manual, kcal: e.target.value })} className={inputCls} placeholder="kcal" />
            <input aria-label="Manual protein grams" type="number" value={manual.protein} onChange={(e) => setManual({ ...manual, protein: e.target.value })} className={inputCls} placeholder="P g" />
            <input aria-label="Manual carb grams" type="number" value={manual.carbs} onChange={(e) => setManual({ ...manual, carbs: e.target.value })} className={inputCls} placeholder="C g" />
            <input aria-label="Manual fat grams" type="number" value={manual.fat} onChange={(e) => setManual({ ...manual, fat: e.target.value })} className={inputCls} placeholder="F g" />
          </div>
          <button type="submit" aria-label="Add manual entry" disabled={addEntry.isPending} className={btnGhost}>Add manual entry</button>
        </form>

        <form
          className="mt-4 space-y-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (!custom.name.trim()) return;
            addCustom.mutate({ name: custom.name.trim(), serving: custom.serving.trim() || "1 serving", kcal: Number(custom.kcal) || 0, protein: Number(custom.protein) || 0, carbs: Number(custom.carbs) || 0, fat: Number(custom.fat) || 0, fiber: Number(custom.fiber) || 0 });
          }}
        >
          <p className="text-sm font-bold text-[var(--text)]">Save a custom food (stored per profile, badged “your entry — not from USDA,” never added to the shared database)</p>
          <div className="grid grid-cols-2 gap-2">
            <input aria-label="Custom food name" value={custom.name} onChange={(e) => setCustom({ ...custom, name: e.target.value })} className={inputCls} placeholder="Name" />
            <input aria-label="Custom food serving" value={custom.serving} onChange={(e) => setCustom({ ...custom, serving: e.target.value })} className={inputCls} placeholder="Serving" />
            <input aria-label="Custom food calories" type="number" value={custom.kcal} onChange={(e) => setCustom({ ...custom, kcal: e.target.value })} className={inputCls} placeholder="kcal" />
            <input aria-label="Custom food protein" type="number" value={custom.protein} onChange={(e) => setCustom({ ...custom, protein: e.target.value })} className={inputCls} placeholder="Protein g" />
            <input aria-label="Custom food carbs" type="number" value={custom.carbs} onChange={(e) => setCustom({ ...custom, carbs: e.target.value })} className={inputCls} placeholder="Carbs g" />
            <input aria-label="Custom food fat" type="number" value={custom.fat} onChange={(e) => setCustom({ ...custom, fat: e.target.value })} className={inputCls} placeholder="Fat g" />
          </div>
          <button type="submit" aria-label="Save custom food" disabled={addCustom.isPending} className={btnGhost}>Save custom food</button>
          <ul className="space-y-1">
            {(customQ.data?.foods ?? []).map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-2 text-sm text-[var(--text)]">
                <span>{c.name} — {c.kcal} kcal / {c.serving}</span>
                <button type="button" aria-label={`Delete custom food ${c.name}`} disabled={delCustom.isPending} onClick={() => delCustom.mutate({ id: c.id })} className="shrink-0 font-bold text-[var(--red)]">Delete</button>
              </li>
            ))}
          </ul>
        </form>
      </div>

      <div className={`${cardCls} mt-4`}>
        <p className="font-display text-lg font-bold text-[var(--text)]">Week view — the weekly average is the number that counts</p>
        <ul className="mt-2 space-y-1">
          {weekRows.map((r) => (
            <li key={r.date} className="text-sm text-[var(--text)]">{r.date}: {r.logged ? `${Math.round(r.kcal)} kcal vs ${target.target} target` : "not logged"}</li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-[var(--text)]">Logging streak: {loggedDays.length} of the last 7 days logged (days logged — not “perfect” days). Weekly average on logged days: {weekAvg} kcal. Single days are noise; the weekly average is what gets compared against the goal.</p>
        <p className="mt-2 text-sm text-[var(--text)]">Hydration check-in (education marker, not scored): run the WUT check from the Hydration entry — Weight down ≥1%, Urine darker than pale yellow, Thirst — any two means rehydrate. Hard ceilings: 1½ qt/hr, 12 qt/day (TB MED 507).</p>
      </div>

      <div className={`${cardCls} mt-4`}>
        <p className="font-display text-lg font-bold text-[var(--text)]">Weight log &amp; 14-day trend</p>
        <form
          className="mt-2 flex gap-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            const lb = Number(weightLb);
            if (!lb) return;
            addWeight.mutate({ date, weightKg: Math.round((lb / LB_PER_KG) * 10) / 10 });
          }}
        >
          <input aria-label="Weight in pounds" type="number" step="0.1" value={weightLb} onChange={(e) => setWeightLb(e.target.value)} className={inputCls} placeholder="Weight (lb)" />
          <button type="submit" aria-label="Log weight" disabled={addWeight.isPending} className={btnPrimary}>Log</button>
        </form>
        <ul className="mt-2 space-y-1">
          {weights.slice(-8).map((w) => (
            <li key={w.date} className="text-sm text-[var(--text)]">{w.date}: {Math.round(w.weightKg * LB_PER_KG * 10) / 10} lb</li>
          ))}
        </ul>
        {trend !== null ? (
          <p className="mt-2 text-base text-[var(--text)]">14-day trend: <strong>{trend > 0 ? "+" : ""}{trend} lb/week</strong> (recent 7-day average vs the prior 7 days). Single weigh-ins are shown but never judged — daily fluctuation is water and glycogen.</p>
        ) : (
          <p className="mt-2 text-sm text-[var(--dim)]">Log weights across at least 14 days to unlock the trend and the recalibration check.</p>
        )}
        {advice ? <NoteBox text={`RECALIBRATION — ${advice}`} /> : null}
      </div>
    </div>
  );
}

function SettingsForm({ initial, onSave }: { initial: NutSettings | null; onSave: (s: NutSettings) => void }) {
  const [sex, setSex] = useState<Sex>(initial?.sex ?? "male");
  const [age, setAge] = useState(String(initial?.age ?? 30));
  const [ft, setFt] = useState(initial ? String(Math.floor(initial.heightCm / 30.48)) : "5");
  const [inch, setInch] = useState(initial ? String(Math.round((initial.heightCm / 2.54) % 12)) : "10");
  const [lb, setLb] = useState(initial ? String(Math.round(initial.weightKg * LB_PER_KG)) : "185");
  const [activity, setActivity] = useState<ActivityKey>(initial?.activity ?? "moderate");
  const [goal, setGoal] = useState<Goal>(initial?.goal ?? "maintain");
  const [rate, setRate] = useState(String(initial?.rateLbPerWeek ?? 1));
  const [vegetarian, setVegetarian] = useState(initial?.vegetarian ?? false);
  const [allergens, setAllergens] = useState<AllergenKey[]>(initial?.allergens ?? []);
  const [dislikes, setDislikes] = useState((initial?.dislikes ?? []).join(", "));
  const [mealsPerDay, setMealsPerDay] = useState<2 | 3 | 4>(initial?.mealsPerDay ?? 3);
  const [snacks, setSnacks] = useState(initial?.snacks ?? true);
  return (
    <form
      className={`${cardCls} mt-4 space-y-3`}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        const heightCm = Math.round(((Number(ft) * 12 + Number(inch)) * 2.54) * 10) / 10;
        const weightKg = Math.round((Number(lb) / LB_PER_KG) * 10) / 10;
        onSave({
          sex, age: Number(age) || 30, heightCm, weightKg, activity, goal,
          rateLbPerWeek: goal === "gain" ? Number(rate) || 0.25 : Number(rate) || 1,
          vegetarian, allergens,
          dislikes: dislikes.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean),
          mealsPerDay, snacks,
        });
      }}
    >
      <p className="font-display text-lg font-bold text-[var(--text)]">Set up your tracker</p>
      <Disclaimer />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="nut-sex" className={labelCls}>Sex (selects the equation constant)</label>
          <select id="nut-sex" aria-label="Sex" value={sex} onChange={(e) => setSex(e.target.value as Sex)} className={inputCls}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="nut-age" className={labelCls}>Age (years)</label>
          <input id="nut-age" aria-label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="nut-ft" className={labelCls}>Height — feet</label>
          <input id="nut-ft" aria-label="Height feet" type="number" value={ft} onChange={(e) => setFt(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="nut-in" className={labelCls}>Height — inches</label>
          <input id="nut-in" aria-label="Height inches" type="number" value={inch} onChange={(e) => setInch(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="nut-lb" className={labelCls}>Weight (lb)</label>
          <input id="nut-lb" aria-label="Weight pounds" type="number" value={lb} onChange={(e) => setLb(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="nut-activity" className={labelCls}>Activity level (total daily life)</label>
          <select id="nut-activity" aria-label="Activity level" value={activity} onChange={(e) => setActivity(e.target.value as ActivityKey)} className={inputCls}>
            {ACTIVITIES.map((a) => (<option key={a.key} value={a.key}>{a.label}</option>))}
          </select>
        </div>
      </div>
      <p className="text-sm text-[var(--dim)]">{ACTIVITIES.find((a) => a.key === activity)?.blurb} Activity factors are the standard factors paired with Mifflin–St Jeor — convention, not a DoD table (Flag F-1).</p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="nut-goal" className={labelCls}>Goal</label>
          <select id="nut-goal" aria-label="Goal" value={goal} onChange={(e) => setGoal(e.target.value as Goal)} className={inputCls}>
            <option value="lose">Lose</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Gain</option>
            <option value="performance">Performance (maintain weight, training-day macros)</option>
          </select>
        </div>
        {goal === "lose" ? (
          <div>
            <label htmlFor="nut-rate" className={labelCls}>Loss rate (lb/week)</label>
            <select id="nut-rate" aria-label="Loss rate" value={rate} onChange={(e) => setRate(e.target.value)} className={inputCls}>
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="2">2 — the engine caps this at 1% of body weight/week</option>
            </select>
          </div>
        ) : null}
        {goal === "gain" ? (
          <div>
            <label htmlFor="nut-rate" className={labelCls}>Gain rate (lb/week)</label>
            <select id="nut-rate" aria-label="Gain rate" value={rate} onChange={(e) => setRate(e.target.value)} className={inputCls}>
              <option value="0.25">0.25</option>
              <option value="0.5">0.5</option>
            </select>
          </div>
        ) : null}
      </div>
      <div>
        <p className={labelCls}>Dietary pattern &amp; hard exclusions (meal plans never violate these)</p>
        <label className="mt-1 flex items-center gap-2 text-base text-[var(--text)]">
          <input type="checkbox" aria-label="Vegetarian pattern" checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} /> Vegetarian pattern
        </label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {ALLERGEN_KEYS.map((a) => (
            <label key={a} className="flex items-center gap-2 text-sm text-[var(--text)]">
              <input
                type="checkbox" aria-label={`Exclude ${a}`} checked={allergens.includes(a)}
                onChange={(e) => setAllergens(e.target.checked ? [...allergens, a] : allergens.filter((x) => x !== a))}
              /> {a}
            </label>
          ))}
        </div>
        <label htmlFor="nut-dislikes" className={`${labelCls} mt-3`}>Disliked foods (comma-separated, matched against food names)</label>
        <input id="nut-dislikes" aria-label="Disliked foods" value={dislikes} onChange={(e) => setDislikes(e.target.value)} className={inputCls} placeholder="e.g. liver, mushrooms" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="nut-meals" className={labelCls}>Meals per day</label>
          <select id="nut-meals" aria-label="Meals per day" value={mealsPerDay} onChange={(e) => setMealsPerDay(Number(e.target.value) as 2 | 3 | 4)} className={inputCls}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div>
          <label className="mt-6 flex items-center gap-2 text-base text-[var(--text)]">
            <input type="checkbox" aria-label="Include snacks" checked={snacks} onChange={(e) => setSnacks(e.target.checked)} /> Include snacks
          </label>
        </div>
      </div>
      <button type="submit" aria-label="Save tracker settings" className={`${btnPrimary} w-full`}>Save settings &amp; compute my target</button>
    </form>
  );
}

/* ------------------------------ Plans ------------------------------- */

function PlansView({ settings }: { settings: NutSettings | null }) {
  const queryClient = useQueryClient();
  const [seed, setSeed] = useState(7);
  const [weekMode, setWeekMode] = useState(false);
  const [day, setDay] = useState<DayPlan | null>(null);
  const [week, setWeek] = useState<DayPlan[] | null>(null);
  const [swapFor, setSwapFor] = useState<{ dayIdx: number; mealIdx: number; itemIdx: number } | null>(null);
  const [logMsg, setLogMsg] = useState("");
  const addEntry = useMutation({
    mutationFn: (args: Parameters<typeof api.addNutritionLogEntry>[0]) => api.addNutritionLogEntry(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["nutLog"] }),
  });

  if (!settings) {
    return (
      <div className={cardCls}>
        <p className="font-display text-lg font-bold text-[var(--text)]">Set up the tracker first</p>
        <p className="mt-1 text-base text-[var(--text)]">Meal plans build from your calorie target, protein range, dietary pattern, and exclusions — all of which live in the Calorie Tracker setup. Set that up (Calorie Tracker tile) and plans generate here from the same numbers.</p>
        <Disclaimer />
      </div>
    );
  }

  const target = computeTarget(settings);
  const macros = macroTargets(settings.goal, settings.weightKg, target.target);
  const opts: PlanOptions = {
    targetKcal: target.target, proteinLowG: macros.proteinLowG, proteinHighG: macros.proteinHighG,
    vegetarian: settings.vegetarian, allergens: settings.allergens, dislikes: settings.dislikes,
    mealsPerDay: settings.mealsPerDay, snacks: settings.snacks, seed,
  };
  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const days = weekMode ? (week ?? []) : day ? [day] : [];

  const renderDay = (d: DayPlan, dayIdx: number) => (
    <div key={`${d.dateLabel}-${dayIdx}`} className={`${cardCls} mt-3`}>
      <p className="font-display text-lg font-bold text-[var(--text)]">
        {d.dateLabel} — {d.totalKcal} kcal vs {d.targetKcal} target
      </p>
      <p className="text-sm text-[var(--text)]">
        Protein {d.totalProtein} g (goal range {opts.proteinLowG}–{opts.proteinHighG} g) · Carbs {d.totalCarbs} g · Fat {d.totalFat} g ·
        Pattern level: {d.patternKcal} kcal (nearest published 2025–2030 level) ·{" "}
        {d.withinTolerance ? "Within the ±10% engine tolerance ✓" : "Outside ±10% — regenerate or swap toward the target"} ·{" "}
        {d.proteinInRange ? "Protein in range ✓" : "Protein outside the goal range"}
      </p>
      {d.meals.map((m, mi) => (
        <div key={m.label} className="mt-3">
          <p className="text-sm font-bold text-[var(--text)]">{m.label} — {m.kcal} kcal</p>
          <ul className="mt-1 space-y-1">
            {m.items.map((it, ii) => (
              <li key={`${it.foodId}-${ii}`} className="flex items-center justify-between gap-2 text-sm text-[var(--text)]">
                <span>{it.name} — {it.servings} × {it.serving} · {it.kcal} kcal · P {it.protein} g</span>
                <button type="button" aria-label={`Swap ${it.name}`} onClick={() => setSwapFor({ dayIdx, mealIdx: mi, itemIdx: ii })} className="shrink-0 font-bold text-[var(--accent-word)]">Swap</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {swapFor && swapFor.dayIdx === dayIdx ? (
        <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-sm font-bold text-[var(--text)]">Swap candidates — same food group, exclusions enforced, calorie-similar (±25%):</p>
          <div className="mt-2 flex flex-col gap-2">
            {swapCandidates(d, swapFor.mealIdx, swapFor.itemIdx, opts).map((f) => (
              <button key={f.id} type="button" aria-label={`Swap in ${f.name}`}
                onClick={() => {
                  const next = applySwap(d, swapFor.mealIdx, swapFor.itemIdx, f, opts);
                  if (weekMode && week) {
                    const w = [...week]; w[dayIdx] = next; setWeek(w);
                  } else setDay(next);
                  setSwapFor(null);
                }}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-2 text-left text-sm text-[var(--text)]">
                {f.name} — {f.kcal} kcal per {f.serving}
              </button>
            ))}
            {swapCandidates(d, swapFor.mealIdx, swapFor.itemIdx, opts).length === 0 ? <p className="text-sm text-[var(--dim)]">No compliant alternative in this group under your exclusions.</p> : null}
          </div>
          <button type="button" aria-label="Cancel swap" onClick={() => setSwapFor(null)} className={`${btnGhost} mt-2`}>Cancel</button>
        </div>
      ) : null}
      <button
        type="button" aria-label={`Send ${d.dateLabel} plan to the food log`}
        disabled={addEntry.isPending}
        onClick={() => {
          const date = todayStr();
          for (const m of d.meals) {
            const mealKey = m.slot === "snack" ? "snacks" : m.slot === "breakfast" ? "breakfast" : m.slot === "lunch" || m.slot === "main1" ? "lunch" : "dinner";
            for (const it of m.items) {
              addEntry.mutate({ date, meal: mealKey, name: `${it.name} (plan)`, foodId: it.foodId, servings: it.servings, kcal: it.kcal, protein: it.protein, carbs: it.carbs, fat: it.fat, fiber: 0 });
            }
          }
          setLogMsg(`Sent to today's food log (${date}) as planned entries — check them off or edit them as eaten in the Calorie Tracker.`);
        }}
        className={`${btnGhost} mt-3`}
      >Use this plan — send to today's log</button>
    </div>
  );

  return (
    <div>
      <p className="text-base text-[var(--text)]">
        Deterministic plans — no AI generation. The engine takes the nearest published DGA 2025–2030 pattern level
        to your {target.target} kcal target, distributes the day's group servings across your meals with fixed
        split templates (engine design, labeled as such), fills slots from the tagged USDA database, then runs a
        repair pass to ±10% of target with a protein-range check. Your allergy and dislike exclusions are hard
        constraints at every step — pool, repair, and swaps.
      </p>
      <NoteBox text={ALLERGY_LIMIT} />
      <Disclaimer />
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label="Generate a day plan" className={btnPrimary} onClick={() => { setWeekMode(false); setDay(generateDay(opts, "Today")); }}>Generate today's plan</button>
        <button type="button" aria-label="Generate a week plan" className={btnGhost} onClick={() => { setWeekMode(true); setWeek(generateWeek(opts, labels)); }}>Generate a week</button>
        <button type="button" aria-label="Regenerate with a new rotation" className={btnGhost} onClick={() => { const s = seed + 1; setSeed(s); const o = { ...opts, seed: s }; if (weekMode) setWeek(generateWeek(o, labels)); else setDay(generateDay(o, "Today")); }}>Regenerate (new rotation)</button>
      </div>
      {logMsg ? <p className="mt-2 text-sm font-semibold text-[var(--text)]">{logMsg}</p> : null}
      {days.map((d, i) => renderDay(d, i))}
      {weekMode && week ? (
        <div className={`${cardCls} mt-3`}>
          <p className="font-display text-lg font-bold text-[var(--text)]">Grocery list — the week's rollup</p>
          <ul className="mt-2 space-y-1">
            {groceryRollup(week).map((g) => (
              <li key={g.name} className="text-sm text-[var(--text)]">{g.name} — {g.servings} × {g.serving}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-[var(--dim)]">A shopping list is arithmetic on the plan — a display, not a store integration.</p>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------ Shell -------------------------------- */

export type NutFocus = { kind: "edu" | "food"; id: string; n: number } | null;

export function NutritionView({
  focus, onFocusHandled, mode = "full",
}: {
  focus?: NutFocus;
  onFocusHandled?: () => void;
  mode?: "full" | "education";
}) {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"learn" | "tracker" | "plans" | "foods">("learn");
  useEffect(() => {
    if (focus) {
      setTab(focus.kind === "edu" ? "learn" : "foods");
      const t = window.setTimeout(() => onFocusHandled?.(), 600);
      return () => window.clearTimeout(t);
    }
  }, [focus, onFocusHandled]);

  const settingsQ = useQuery({
    queryKey: ["nutSettings"],
    queryFn: () => api.getNutritionSettings({}),
    enabled: mode === "full",
  });
  const settings: NutSettings | null = useMemo(() => {
    try {
      const raw = settingsQ.data?.payloadJson;
      if (!raw || raw === "{}") return null;
      return JSON.parse(raw) as NutSettings;
    } catch {
      return null;
    }
  }, [settingsQ.data]);
  const saveSettings = useMutation({
    mutationFn: (s: NutSettings) => api.saveNutritionSettings({ payloadJson: JSON.stringify(s) }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["nutSettings"] }),
  });

  const tiles = mode === "education"
    ? [
        { key: "learn", label: "FUELING EDUCATION", sub: "17 entries · prep fueling" },
        { key: "foods", label: "FOOD DATABASE", sub: `${FOODS.length} USDA foods` },
      ]
    : [
        { key: "learn", label: "FUELING EDUCATION", sub: "17 entries · MDRI · OPSS · MRE" },
        { key: "tracker", label: "CALORIE TRACKER", sub: "Targets · log · weight trend" },
        { key: "plans", label: "MEAL PLANS", sub: "2025–2030 pattern · your exclusions" },
        { key: "foods", label: "FOOD DATABASE", sub: `${FOODS.length} USDA foods` },
      ];

  return (
    <div>
      {mode === "education" ? (
        <p className="mb-3 text-base text-[var(--text)]">
          <strong>Fueling for boot camp &amp; OCS prep:</strong> you will be fed on a training schedule you do not
          control — what you can control is arriving knowing how fueling works. These are the same published
          military standards members use: eat enough first, fuel before/during/after hard work, hydrate inside the
          ceilings, and never cut weight the unsafe way before a weigh-in. The tracker and meal plans open once
          you're in.
        </p>
      ) : null}
      <div className="grid grid-cols-2 gap-3" role="group" aria-label="Nutrition areas">
        {tiles.map((t) => (
          <button key={t.key} type="button" aria-label={`Open ${t.label}`} aria-pressed={tab === t.key} onClick={() => setTab(t.key as typeof tab)} className={`flex flex-col items-center justify-center gap-1 rounded-[var(--radius)] border-2 p-3 text-center ${tab === t.key ? "border-[var(--accent)] bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]"}`}>
            <span className="font-display text-base leading-tight font-bold text-[var(--text)]">{t.label}</span>
            <span className="text-sm text-[var(--dim)]">{t.sub}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tab === "learn" ? (
          <section aria-label="Fueling Education">
            <h3 className="font-display text-xl font-bold text-[var(--text)]">Fueling Education</h3>
            <div className="mt-2"><LearnView focusId={focus?.kind === "edu" ? focus.id : null} focusNonce={focus?.n ?? 0} /></div>
          </section>
        ) : null}
        {tab === "foods" ? (
          <section aria-label="Food Database">
            <h3 className="font-display text-xl font-bold text-[var(--text)]">Food Database</h3>
            <div className="mt-2"><FoodsView focusId={focus?.kind === "food" ? focus.id : null} focusNonce={focus?.n ?? 0} /></div>
          </section>
        ) : null}
        {mode === "full" && tab === "tracker" ? (
          <section aria-label="Calorie Tracker">
            <h3 className="font-display text-xl font-bold text-[var(--text)]">Calorie Tracker</h3>
            <TrackerView settings={settings} onSaveSettings={(s) => saveSettings.mutate(s)} />
          </section>
        ) : null}
        {mode === "full" && tab === "plans" ? (
          <section aria-label="Meal Plans">
            <h3 className="font-display text-xl font-bold text-[var(--text)]">Meal Plans</h3>
            <div className="mt-2"><PlansView settings={settings} /></div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

/** Flat index for global search. */
export const NUTRITION_SEARCH: { kind: "edu" | "food"; id: string; title: string; summary: string; keywords: string }[] = [
  ...ENTRIES.map((e) => ({
    kind: "edu" as const, id: e.id, title: e.title,
    summary: `Fueling Education ${e.n} of 17 · ${e.numbers[0] ?? ""}`,
    keywords: `${e.body.join(" ")} ${e.source}`.toLowerCase().slice(0, 400),
  })),
  ...FOODS.map((f) => ({
    kind: "food" as const, id: f.id, title: f.name,
    summary: `Food Database · ${f.kcal} kcal per ${f.serving} · ${GROUP_LABELS[f.group]}`,
    keywords: f.aliases.toLowerCase(),
  })),
];
