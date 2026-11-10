// Nutrition — education entries, tracker math, and the 2025–2030
// pattern table. Source of truth: the research pack
// ~/workspace/military-app/nutrition/nutrition.md (Nov 9, 2026).
// Every number prints as published, with its attribution; where
// official sources disagree, both print — never blended.
//
// FLAG F-6 (binding at build): the pack's food-group amounts and
// alcohol wording were DGA 2020–2025. The builder re-verified against
// the Dietary Guidelines for Americans 2025–2030 (released Jan 7,
// 2026; MyPlate.gov retired the same day) at build time — see
// F6_OUTCOME below, which also prints in the app. The 2020–2025
// Appendix 3 oz-equivalent table and the ≤2/≤1-drink alcohol limit do
// NOT ship as current guidance anywhere in this module.

export type NutEntry = {
  id: string;
  n: number;
  title: string;
  warning?: boolean;
  body: string[];
  numbers: string[];
  source: string;
};

export const NUT_DISCLAIMER =
  "Battle Book's nutrition tools are general education and self-tracking aids — not medical advice. Calorie and macro targets are estimates from published equations and ranges; they are not a prescription. If you are pregnant or breastfeeding, under 18, have a medical condition (including diabetes, kidney, heart, or thyroid disease), take medication affected by diet, or have any history of an eating disorder, talk to a registered dietitian or your medical provider before following a generated plan or calorie target. If you are in a service weight-control program, your program's counselors and standards govern. The app does not diagnose, treat, or clear anyone for anything — and if eating or weight feels out of control, the Unsafe Practices entry lists where real help is.";

export const F6_OUTCOME =
  "FLAG F-6 — RE-VERIFIED AT BUILD (Nov 9, 2026): The Dietary Guidelines for Americans 2025–2030 were released January 7, 2026, and USDA retired MyPlate.gov the same day (it now redirects to realfood.gov; the federal icon is an inverted pyramid, not a plate). VERIFIED in the official 2025–2030 document (realfood.gov): protein 1.2–1.6 g/kg/day; at a 2,000-kcal pattern — dairy 3 servings/day, vegetables 3 servings/day, fruits 2 servings/day, whole grains 2–4 servings/day, healthy fats 4½ servings/day; saturated fat under 10% of calories; sodium under 2,300 mg/day (ages 14+); added sugars — no amount is recommended, no more than 10 g per meal. ALCOHOL CHANGED: the 2025–2030 guidelines publish NO numeric drink limit — the wording is “consume less alcohol for better health,” with complete avoidance for pregnant women, people recovering from alcohol use disorder, and people whose medications or conditions interact. The old ≤2 drinks/day (men) / ≤1 (women) figures were 2020–2025 wording and are retired — they do not ship as current guidance. The 2025–2030 daily-servings-by-calorie-level table (realfood.gov) was also verified and is what the meal-plan engine uses; protein and whole-grain amounts publish as ranges there, and the engine uses range midpoints — labeled as such. The 2020–2025 Healthy U.S.-Style Pattern oz-equivalent table from the research pack does NOT ship: it is superseded, and printing it as current would be exactly what F-6 forbids.";

export const F1_NOTE =
  "The activity multipliers (1.2 / 1.375 / 1.55 / 1.725 / 1.9) are the standard activity factors conventionally paired with the Mifflin–St Jeor equation — they descend from the Harris–Benedict activity scale and are NOT a DoD-published table (pack Flag F-1). The app labels them “standard activity factors,” prints the ±10% estimate warning, shows your MDRI band alongside, and lets the 14-day weight trend correct the estimate.";

export const ENTRIES: NutEntry[] = [
  {
    id: "energy", n: 1, title: "Energy balance — eat enough first",
    body: [
      "Everything in performance nutrition starts with eating enough. Your body spends energy on staying alive (resting metabolism), daily activity, and training. Take in less than you spend over time and you lose weight; take in more and you gain; match it and you hold.",
      "The military failure mode HPRC warns about most is not overeating — it is under-fueling: Warfighters, female Warfighters especially, routinely eat less than hard training demands, and under-fueling degrades performance, recovery, concentration, and bone and immune health before it ever shows on a scale. If training feels flat, mood and sleep slide, and you are getting sick or hurt more often, the first suspect is total intake, not effort.",
    ],
    numbers: [
      "MDRI energy, men by activity: light 3,000 · moderate 3,400 · heavy 3,700 · exceptionally heavy 4,700 kcal/day",
      "MDRI energy, women by activity: light 2,100 · moderate 2,300 · heavy 2,700 · exceptionally heavy 3,000 kcal/day",
      "These are planning standards for healthy, active military personnel (reference weights 85 kg men / 69 kg women, 2017 revision), printed by the regulation itself as estimates that vary among individuals.",
      "Operational ration planning target: 3,600 kcal/day (NSOR, AR 40–25).",
    ],
    source: "AR 40–25 / OPNAVINST 10110.1 / MCO 10110.49 / AFI 44–141 (2017), Table B-1 · HPRC Warfighter Nutrition Guide ch. 9",
  },
  {
    id: "carbs", n: 2, title: "Carbohydrates — the working fuel",
    body: [
      "Carbohydrate is the body's preferred fuel for hard work and for the brain. It is stored in muscle and liver as glycogen, and those stores are limited — which is why carb intake has to scale with training load, and why running the tank dry shows up as heavy legs, fading pace, and poor concentration late in a session.",
      "HPRC's plate guidance for training days: fill roughly ⅔ to ¾ of the plate with carb-rich foods — fruit, vegetables, whole grains, beans, dairy — when the work demands it. Whole-grain and minimally processed sources carry fiber and micronutrients along with the energy.",
    ],
    numbers: [
      "MDRI carbohydrate: men 510 g/day (range 340–680) · women 414 g/day (range 276–552) — met, per AR 40–25, at 50–55% of total calories within the acceptable range",
      "Warfighter's Guide (Natick) MDRI expression: 1.8–3.6 g carbohydrate per pound of body weight per day (≈300–600 g/day for a 165-lb Warfighter)",
      "By training load (ACSM/AND/DC 2016): light / skill-based 3–5 g/kg/day · moderate (~1 hr/day) 5–7 · high endurance (1–3 hr/day) 6–10 · extreme (>4–5 hr/day) 8–12",
      "Fiber MDRI: 34 g/day men · 28 g/day women",
    ],
    source: "AR 40–25 (2017) Table B-1 · Warfighter's Guide to Performance Nutrition, 2nd ed. (Natick, Mar 2025) · Thomas, Erdman & Burke, ACSM/AND/DC joint position stand, Med Sci Sports Exerc 2016",
  },
  {
    id: "protein", n: 3, title: "Protein — needs by activity and goal",
    body: [
      "Protein builds and repairs muscle, supports immune function, and — during weight loss — protects the muscle you already have. The honest headline from every official source: protein needs are a range tied to training and goal, more is not automatically better, and HPRC states plainly that eating beyond the established recommendation provides no additional benefit.",
      "Spread intake across the day: the position stand finds muscle responds best to moderate doses repeated every few hours rather than one huge serving at dinner. The published systems below are close but not identical — all print, unblended.",
    ],
    numbers: [
      "MDRI / HPRC (military standard): 0.8–1.6 g/kg body weight per day (≈0.4–0.7 g/lb). At reference weights: men 68–136 g/day · women 55–110 g/day",
      "ACSM/AND/DC 2016 (athlete standard): 1.2–2.0 g/kg/day — lower end for lighter training, upper end during heavy training blocks or in a calorie deficit",
      "Warfighter's Guide (Natick) field expression: ~0.7 g/lb of body weight (≈1.6 g/kg — the top of the MDRI range), e.g. ~95 g at 135 lb, ~130 g at 185 lb",
      "Dietary Guidelines for Americans 2025–2030: protein serving goal 1.2–1.6 g/kg/day, adjusting as needed based on individual caloric requirements (verified at build — see the F-6 note)",
      "Per-meal distribution (ACSM/AND/DC 2016): ~0.25–0.3 g/kg per meal (≈15–25 g for most people), repeated every 3–5 hours; the same dose in the first 0–2 hours after exercise supports recovery",
      "No source publishes a military “cutting” figure above 2.0 g/kg — none is invented here (pack Flag F-3)",
    ],
    source: "AR 40–25 (2017) · HPRC Warfighter Nutrition Guide ch. 10 · ACSM/AND/DC 2016 position stand · Warfighter's Guide (Natick, 2025) · DGA 2025–2030",
  },
  {
    id: "fat", n: 4, title: "Fat — the dense fuel and the ceiling",
    body: [
      "Fat is the most energy-dense nutrient (9 kcal/g, against 4 for protein and carbohydrate), carries fat-soluble vitamins, and supplies essential fatty acids the body cannot make. It digests slowly — which is why HPRC steers fat away from the window right before and during exercise (it can cause GI distress) and into the evening-before and recovery meals. The military standard is a ceiling, not a target to exceed.",
    ],
    numbers: [
      "AR 40–25: approximately 30% or less of total calories as fat; MDRI table expression: men <113 g/day · women <77 g/day at reference intakes",
      "Acceptable range (AMDR, DGA / ACSM): 20–35% of total calories",
      "DGA 2025–2030: saturated fat should not exceed 10% of total daily calories (verified at build — see the F-6 note)",
      "MRE composition (for comparison, see Field Feeding & MREs): ~36% of calories from fat — deliberately energy-dense for field feeding",
    ],
    source: "AR 40–25 (2017) · ACSM/AND/DC 2016 · DGA 2025–2030",
  },
  {
    id: "plate", n: 5, title: "Build the plate — Power Plate and the 2025–2030 pattern",
    body: [
      "Two official plate systems, one idea: proportions first, counting optional. HPRC's Power Plate is the performance version — on heavy training days carb-rich foods take ⅔ to ¾ of the plate, with lean protein and colorful vegetables and fruit filling the rest; lighter days shrink the carb share.",
      "The everyday federal pattern changed in January 2026: the Dietary Guidelines for Americans 2025–2030 replaced MyPlate (retired January 7, 2026) with an inverted pyramid on realfood.gov — protein, dairy, and healthy fats share the wide top with vegetables and fruits, and whole grains sit at the narrow point. The verified 2025–2030 serving goals below are what the meal-plan engine assembles from.",
    ],
    numbers: [
      "DGA 2025–2030 serving goals at a 2,000-kcal pattern (adjusting as needed for individual caloric requirements): protein 1.2–1.6 g/kg/day · dairy 3 servings/day · vegetables 3 servings/day · fruits 2 servings/day · whole grains 2–4 servings/day · healthy fats 4½ servings/day",
      "One protein serving (2025–2030 table): 3 oz cooked meat, poultry, or seafood · 1 egg · ½ cup beans, peas, or lentils · 1 oz nuts or seeds · 2 Tbsp nut or seed butter · 3 oz soy products",
      "One dairy serving: 1 cup milk · ¾ cup yogurt · 1 oz cheese. One vegetable serving: 1 cup raw or cooked (2 cups leafy greens). One fruit serving: 1 cup raw · ½ cup dried. One whole-grain serving: ½ cup cooked oats/rice/barley/quinoa · 1 slice bread · 1 tortilla. One healthy-fat serving: 1 tsp olive oil or butter",
      "Daily servings by calorie level (2025–2030, realfood.gov): dairy holds at 3 servings from 1,600 kcal up; vegetables rise 2½ (1,600) → 3 (2,000) → 3½ (2,400) → 4¾ (3,200); fruits 1½ → 2 → 2½; healthy fats 3½ tsp → 4½ → 5 → 8 tsp. Protein and whole grains publish as ranges at each level (at 2,400 kcal: protein 3½–4½ servings, whole grains 2¾–5¼ servings)",
      "⚠ NOT SHIPPED: the 2020–2025 Healthy U.S.-Style Pattern oz-equivalent table (cups/oz-eq by calorie level) from the research pack. It is superseded by the 2025–2030 servings table above — see the F-6 outcome printed in this section (pack Flag F-6)",
    ],
    source: "Dietary Guidelines for Americans 2025–2030 (USDA/HHS, Jan 7, 2026), incl. the Daily Servings by Calorie Level table at realfood.gov — re-verified at build · HPRC Power Plate",
  },
  {
    id: "before", n: 6, title: "Fueling BEFORE training",
    body: [
      "The goal before training is arriving fueled and settled: carbohydrate on board, fluid on board, nothing heavy sitting in the stomach. The closer to start time, the smaller and more carb-focused the intake. Never experiment on the day — HPRC's rule is to test new foods in training, never before a mission, ruck, or event.",
    ],
    numbers: [
      "1–4 hours before exercise expected to last >60 min: 1–4 g carbohydrate per kg body weight (≈0.5–1.8 g/lb), scaled to how much time you have (HPRC ch. 9)",
      "30–60 minutes before: a carbohydrate-rich snack of about 200–300 kcal (HPRC's example: half a peanut-butter-and-jelly sandwich)",
      "Up to 30 g protein before exercise may benefit strength/power-focused training (HPRC ch. 9)",
      "Keep fat and very high fiber low close to start time — both slow digestion and risk GI distress",
      "Ruck/event morning refinement (HPRC): a meal of 1–2 g carb/kg about 1 hour before the start",
    ],
    source: "HPRC Warfighter Nutrition Guide ch. 9 · HPRC, Fueling for road or foot marches (in-depth)",
  },
  {
    id: "during", n: 7, title: "Fueling DURING training",
    body: [
      "For work under an hour, water is the whole plan for most people. Past an hour, carbohydrate during the effort extends endurance and protects blood sugar — this is where sports drinks, gels, chews, and ordinary food (fruit, pretzels) earn their place, alongside fluid and electrolytes.",
    ],
    numbers: [
      "Exercise >60 minutes: 30–60 g carbohydrate per hour from foods or fluids",
      "Exercise >2.5–3 hours: up to 90 g carbohydrate per hour, intensity-dependent",
      "Past ~3 hours, solid foods alongside liquids are typically needed to hit carb targets",
    ],
    source: "HPRC Warfighter Nutrition Guide ch. 9 · ACSM/AND/DC 2016",
  },
  {
    id: "after", n: 8, title: "Recovery — fueling AFTER training",
    body: [
      "Recovery eating rebuilds what the session spent: carbohydrate refills glycogen, protein supplies the repair material, fluid and sodium replace sweat losses. HPRC's window is practical, not frantic — get a carb-rich meal or snack with protein in within about two hours after prolonged, strenuous work, then return to normal meals. When another hard session follows within a day, refueling early matters more.",
    ],
    numbers: [
      "After prolonged, strenuous exercise (>60 min): foods/drinks rich in carbohydrate and containing protein within 2 hours (HPRC ch. 9)",
      "Recovery meal protein: 15–30 g lean protein with a carb-rich meal (HPRC ruck-march guide); position stand per-meal dose 0.25–0.3 g/kg",
      "Fast turnaround (<8 hours to the next demanding session): 1–1.2 g carbohydrate/kg/hour for the first 4 hours (ACSM/AND/DC 2016, “speedy refueling”)",
    ],
    source: "HPRC Warfighter Nutrition Guide ch. 9 · HPRC ruck-march fueling guide · ACSM/AND/DC 2016",
  },
  {
    id: "hydration", n: 9, title: "Hydration — how much, and how to check",
    body: [
      "Hydration is a daily habit with a training spike, not something to fix at the start line. HPRC teaches the WUT check — Weight, Urine, Thirst: body weight down ≥1% from normal, urine darker than #5 on the 8-color scale (aim for 1–3, pale yellow), or notable thirst — any two of the three means rehydrate.",
      "Weighing before and after training is the field-expedient sweat-rate test: each pound lost is fluid to replace. Performance degrades measurably once losses pass 2% of body weight, and overdrinking carries its own danger (see Electrolytes & Heat).",
    ],
    numbers: [
      "Daily baseline (military guidelines as cited by HPRC): 3–4.5 quarts (96–144 fl oz)/day for men · 2–3 quarts (64–96 fl oz)/day for women, before training/heat adjustments",
      "During exercise: 3–8 oz every 15–20 minutes (HPRC hydration guidance)",
      "HARD CEILINGS (TB MED 507): do not exceed 1½ quarts per hour, and do not exceed 12 quarts per day — the safeguard against water intoxication (hyponatremia)",
      "Heat/work fluid table (TB MED 507 Table 3-2): water intake runs ½ qt/hr (heat category 1, easy work) up to 1 qt/hr (categories 3–5, moderate-to-very-heavy work), matched to work/rest cycles by WBGT category",
      "After exercise: 16–24 fl oz per pound of body weight lost (HPRC hydration fact sheet; the nutrient-timing guide gives 20–24 fl oz/lb)",
      "Sweat rates vary widely: 0.3–3.5 liters per hour between individuals (HPRC)",
    ],
    source: "HPRC, “Are you dehydrated?” (WUT) · HPRC Hydration fact sheet · HPRC Guide to Nutrient Timing · TB MED 507, Table 3-2 (via GTA 05-08-012, Apr 2023)",
  },
  {
    id: "electrolytes", n: 10, title: "Electrolytes & heat — including the warning signs",
    body: [
      "Sweat is not just water — it carries sodium and potassium, and long, hot work can drain both. For efforts past an hour, or in serious heat, fluids should bring electrolytes with them: a sports drink in the published ranges below, or water plus salty food. Do not restrict salt in the recovery phase — sodium is what lets the body hold onto the fluid you drink (HPRC).",
      "The failure modes run in both directions: dehydration pushes toward heat illness; drinking far beyond sweat loss dilutes blood sodium into hyponatremia, whose early signs (headache, vomiting, swollen hands and feet, confusion) can look like heat illness but are treated differently — which is why the 1½-qt/hr ceiling exists.",
      "Know the signs — education, not diagnosis (TB MED 507): heat illness escalates — heat cramps (muscle cramps during/after work in heat) → heat exhaustion (heavy sweating, weakness, nausea, dizziness, headache) → heat stroke (confusion or altered behavior, collapse, hot skin — a medical emergency: stop, get medical aid immediately, cool rapidly). Any confusion, collapse, or seizure in the heat is an emergency, full stop. Hyponatremia signs (HPRC): headache, vomiting, swollen hands/feet, confusion, wheezy breathing — also get medical aid. This entry teaches “know the signs / get help” — the app never works as a diagnostic tool.",
    ],
    numbers: [
      "Sports drink composition per 8 oz (HPRC): carbohydrate 10–20 g · sodium 50–200 mg · potassium 20–100 mg",
      "Fluid loss >2% of body weight: significant impairment of aerobic/endurance performance and higher heat-illness risk; even 1–2% degrades vigilance, working memory, reaction time, and mood (HPRC)",
      "DGA 2025–2030 sodium: the general population ages 14+ should consume less than 2,300 mg/day; highly active individuals may benefit from increased sodium intake to offset sweat losses (verified at build — see the F-6 note). No MDRI sodium number ships: the pack's extractions of AR 40–25 Table B-1 conflicted, and none was taken from folklore (pack Flag F-7)",
    ],
    source: "HPRC hydration fact sheet + “Are you dehydrated?” · TB MED 507 · DGA 2025–2030",
  },
  {
    id: "caffeine", n: 11, title: "Caffeine — use it like a tool",
    body: [
      "Caffeine is the one performance aid the military guidance endorses openly — with dosage discipline. It works best taken shortly before endurance work, it stops helping and starts harming past published ceilings, and it steals sleep if taken late. Energy drinks are the Wild West version: caffeine content varies by brand and size, and OPSS is the check-before-you-drink authority (see Supplements & OPSS). Two official ceilings print side by side below — not blended.",
    ],
    numbers: [
      "Per dose: up to 200 mg (≈ one 16-oz coffee), taken 30–60 minutes before an endurance event (HPRC ch. 9; Warfighter's Guide agrees on the 200 mg dose)",
      "Daily ceiling, HPRC ch. 9: do not exceed 600 mg in 24 hours (800 mg for sustained operations)",
      "Daily ceiling, Warfighter's Guide (Natick, 2025): don't exceed 800 mg per day",
      "Sleep protection: avoid caffeine 4–6 hours before bed (HPRC; FM 7-22 sleep guidance directs the same discipline)",
    ],
    source: "HPRC Warfighter Nutrition Guide ch. 9 · Warfighter's Guide to Performance Nutrition (2025) · HPRC, Fueling for road or foot marches",
  },
  {
    id: "alcohol", n: 12, title: "Alcohol — the honest entry",
    body: [
      "Alcohol is calories without nutrients (~7 kcal/g), it dehydrates, and — the part that matters most for training — it degrades the sleep that adaptation depends on, even when it feels like it helps you fall asleep (FM 7-22 sleep readiness warns against alcohol before sleep for exactly this reason).",
      "⚠ WORDING RE-VERIFIED AT BUILD (Flag F-6): the Dietary Guidelines for Americans 2025–2030 publish NO numeric drink limit. Their wording is: “Consume less alcohol for better overall health.” People who should completely avoid alcohol: pregnant women, people recovering from alcohol use disorder or unable to control the amount they drink, and people taking medications or with medical conditions that can interact with alcohol; people with a family history of alcoholism should be mindful of consumption and associated addictive behaviors. The familiar ≤2 standard drinks/day (men) / ≤1 (women) figures were the DGA 2020–2025 wording — retired with that edition, and printed here only so you recognize them as retired, never as current guidance.",
    ],
    numbers: [
      "DGA 2025–2030 (current, verified at build): “Consume less alcohol for better overall health” — no numeric daily limit is published in this edition",
      "RETIRED (DGA 2020–2025, do not use as current): ≤2 standard drinks/day for men · ≤1 for women, on days when alcohol is consumed. One standard drink = 12 oz regular beer (5%), 5 oz wine (12%), 1.5 oz distilled spirits (40%) — the drink-size definitions are unchanged reference information",
    ],
    source: "Dietary Guidelines for Americans 2025–2030, “Limit Alcoholic Beverages” (verified at build) · FM 7-22, sleep readiness",
  },
  {
    id: "sleep", n: 13, title: "Sleep & nutrition — the two-way street",
    body: [
      "Sleep is a nutrition variable in both directions. FM 7-22's sleep readiness doctrine: the vast majority of Soldiers need 7–9 hours to sustain performance, more is better, and only sleep replaces lost sleep. Under-slept people eat worse — appetite regulation suffers and late-night, energy-dense eating rises — and poor fueling returns the favor.",
      "The actionable nutrition levers the official guidance actually publishes are timing ones: caffeine off 4–6 hours before bed, no alcohol as a sleep aid, and front-loading calories earlier in the day rather than eating the day's largest meal right before bed (H2F nutritional-readiness leader guidance: eat breakfast, front-load calories, cut back caffeine, drink water over sugar-sweetened beverages). No HPRC sleep–appetite hormone percentages ship — none were verified to the house standard in the research pass (pack Flag F-4).",
    ],
    numbers: [
      "Sleep need: 7–9 hours/night for the vast majority (FM 7-22)",
      "Caffeine cut-off: 4–6 hours before bed (HPRC)",
    ],
    source: "FM 7-22 (2020), sleep readiness · HPRC ruck-march fueling guide · ATP 7-22.02 H2F coaching material",
  },
  {
    id: "weight", n: 14, title: "Weight management — the safe way",
    body: [
      "Weight change is arithmetic plus patience: a sustained gap between intake and expenditure, small enough that training, muscle, and health survive it. Every official source lands in the same band. HPRC's performance framing is the one the app leads with: lose no more than 1% of body weight per week and you are far more likely to keep lean muscle and performance while the fat comes off.",
      "The services' weight-control guidance agrees in pounds: gradual loss of about 1–2 lb per week (Army weight management guide), and the Navy's program-selection worksheet treats 0.5–2 lb per week as the safe-loss test for any program a Sailor is considering. Gaining runs the same play in reverse: a modest surplus, protein at the top of the range, and progressive training so the gain is muscle-biased. Body-composition standards are a command/medical program matter — the app teaches the nutrition, and points members in a service program to their program's counselors and dietitians rather than freelancing targets. The calorie tracker's guardrails are built from the ceilings on this card.",
    ],
    numbers: [
      "Rate ceiling: ≤1% of body weight per week (HPRC ch. 10) — hard-coded in the tracker: a faster chosen rate is capped here",
      "Safe band in pounds: 0.5–2 lb/week (Navy PRP Guide 10; Army guide: 1–2 lb/week as “gradual loss of body fat”)",
      "Protein while losing: stay at the high end of 0.8–1.6 g/kg, toward the position stand's deficit guidance of up to 2.0 g/kg",
      "Carbs are not the enemy while losing: HPRC warns under-fueling carbs directly damages performance (ch. 10)",
    ],
    source: "HPRC Warfighter Nutrition Guide ch. 10 · Army Weight Management Guide (AR 600-9), App. C Table C-1 · Navy PRP Guide 10 — Nutrition Resources (Jan 2025)",
  },
  {
    id: "unsafe", n: 15, title: "⚠ UNSAFE practices — read before any weigh-in", warning: true,
    body: [
      "Every item below is a method that circulates before weigh-ins and tape tests. Each one trades health — and sometimes a career — for a temporary number, and the weight it moves is mostly water and muscle, not fat (Army guide, Table C-1: crash diets produce “rapid loss of body water and muscle mass — not body fat,” plus grumpiness, headaches, anxiety, and fatigue).",
      "CRASH / STARVATION CUTS — Very-low-calorie fad diets lack required nutrients, cost muscle and performance, and rebound. If a plan promises faster than the safe band on the Weight Management card, it is selling water loss.",
      "DEHYDRATION CUTS — saunas, sweat suits, fluid restriction, “drying out.” Deliberate dehydration stacks directly onto the heat-illness ladder; heat stroke kills service members in training every era. Never cut water to make weight.",
      "DIURETICS, LAXATIVES, AND “DETOX” PRODUCTS to move scale weight: electrolyte disruption, cardiac risk, and several diuretics are prohibited substances in sport and flagged in supplement screening.",
      "ANABOLIC STEROIDS AND PROHORMONES — Illegal to purchase, use, or possess; not permitted for Warfighters (HPRC ch. 10 states it flatly). A positive urinalysis ends careers.",
      "UNVERIFIED SUPPLEMENTS promising fat loss or muscle gain — the single most common route to an accidental positive drug test is a contaminated or spiked product, which is why the OPSS entry exists.",
      "THE PATTERN ITSELF IS THE RED FLAG: if eating or weight has started to feel out of control — restriction, bingeing, purging, panic around weigh-ins — that is a medical issue with real help available (unit medical, behavioral health, Military OneSource), not a discipline failure. The app routes, it does not counsel.",
    ],
    numbers: [
      "Safe-rate ceiling these practices violate: ≤1% of body weight per week (HPRC) · 0.5–2 lb/week safe band (Navy / Army guides)",
    ],
    source: "Army Weight Management Guide (AR 600-9) App. C · HPRC Warfighter Nutrition Guide ch. 10 · OPSS · TB MED 507",
  },
  {
    id: "supplements", n: 16, title: "Supplements & OPSS — check before you swallow",
    body: [
      "Food first; supplements are the last 2%, and the riskiest 2%. The supplement industry is not pre-approved by the FDA the way drugs are — labels can be wrong, and DoD-cited testing keeps finding products whose contents do not match their labels, including products containing ingredients on the DoD Prohibited List that were never declared.",
      "DoD's answer is Operation Supplement Safety (OPSS) at CHAMP, established as DoD's official dietary-supplement program under DoDI 6130.06: it maintains the DoD Prohibited Dietary Supplement Ingredients List, the OPSS Scorecard (“Check Your Dietary Supplement”), and adverse-event reporting. OPSS's core rule for anything you do use: only products certified by an OPSS-vetted independent third-party program, because certification verifies the product contains what the label says and is screened for prohibited substances. Certification speaks to contents-vs-label — OPSS itself notes it does not by itself prove a product is safe or effective.",
      "Battle Book never recommends a supplement product. Check any product on OPSS (opss.org) — the Prohibited List and the Scorecard — before you swallow it. Protein powder is food-adjacent, not magic: it counts toward the protein range like any food, and only certified versions pass the same rule. The vetted list is a living list (pack Flag F-5): the three primary seals below were re-confirmed against OPSS reporting at build (Nov 2026), and OPSS's current list also names BSCG Certified Drug Free and Eurofins Clean Sport Certified — route to opss.org for the current full list.",
    ],
    numbers: [
      "NSF Certified for Sport® — NSF/ANSI 173 base certification + sport screening for banned substances",
      "USP Verified — U.S. Pharmacopeia",
      "Informed Sport — LGC",
      "Also on OPSS's vetted list in current OPSS program reporting: BSCG Certified Drug Free · Eurofins Clean Sport Certified (re-confirm the living list at opss.org)",
    ],
    source: "OPSS / CHAMP (opss.org), under DoDI 6130.06 · NSF International, Certified for Sport program",
  },
  {
    id: "mre", n: 17, title: "Field feeding & MREs — eating out of a pouch",
    body: [
      "The MRE is engineering, not a diet plan: one meal averages ~1,250 kcal, deliberately energy-dense because field work burns MDRI-heavy calories and troops historically under-eat in the field. Three MREs ≈ 3,750 kcal — about right for sustained field operations, far too much for a garrison desk day, which is why “I eat MREs on exercise and gain weight” is arithmetic, not mystery.",
      "Field rules that matter: eat the whole ration across the day at regular intervals (the Warfighter's Guide directs eating and drinking ration items every 3–4 hours rather than hoarding and gorging), drink to the hydration plan, and use the whole pouch — the carbohydrate drink mixes and snacks are fuel, not trade bait, during heavy work. Policy limit: the MRE is designed and approved as a sole source of subsistence for up to 21 days (AR 40–25); beyond that, other rations rotate in by design.",
      "Other operational rations exist for other jobs — the First Strike Ration (~2,900 kcal, eat-on-the-move, first 72 hours) is the common one members will meet. In the food database, only the whole-meal average row ships: FDC carries no MRE component entries (verified at build, pack Flag F-2), and no component value was estimated into existence — components whose values DLA/Natick do not publish in a table this build could source are omitted, exactly as the pack specifies.",
    ],
    numbers: [
      "Per MRE: ~1,250 kcal average (some official summaries say ~1,200 — both print; DLA/Natick's figure is “an average of 1,250 kilocalories (13% protein, 36% fat, 51% carbohydrates)”), ⅓ of MDRI micronutrients, 24 menus",
      "Sole-source limit: 21 days (AR 40–25)",
      "Field eating interval: every 3–4 hours (Warfighter's Guide)",
      "First Strike Ration: ~2,900 kcal, first 72 hours, eat-on-the-move",
    ],
    source: "DLA / Natick Soldier RD&E Center, Operational Rations of the Department of Defense · Warfighter's Guide to Performance Nutrition (2025) · AR 40–25",
  },
];

export const entryById = (id: string): NutEntry | undefined => ENTRIES.find((e) => e.id === id);

/* ------------------------- Tracker math --------------------------- */
/* Pack Part 2. Mifflin–St Jeor RMR × standard activity factors, goal
 * adjustment at the labeled ≈3,500 kcal ≈ 1 lb approximation, bounded
 * by the two sourced safety rules: the HPRC ≤1% body-weight/week rate
 * ceiling and the RMR floor. Pure functions — the server stores only
 * the member's inputs and log; targets recompute from these. */

export type Sex = "male" | "female";
export type Goal = "lose" | "maintain" | "gain" | "performance";
export type ActivityKey = "sedentary" | "light" | "moderate" | "very" | "extra";

export const ACTIVITIES: { key: ActivityKey; label: string; mult: number; blurb: string }[] = [
  { key: "sedentary", label: "Sedentary — 1.2", mult: 1.2, blurb: "Desk job, little or no exercise. Total daily life, not just workouts." },
  { key: "light", label: "Light — 1.375", mult: 1.375, blurb: "Light duty or on your feet some of the day; exercise 1–3 days/week." },
  { key: "moderate", label: "Moderate — 1.55", mult: 1.55, blurb: "Physical job or regular PT; exercise 3–5 days/week." },
  { key: "very", label: "Very active — 1.725", mult: 1.725, blurb: "Hard physical job or hard training 6–7 days/week." },
  { key: "extra", label: "Extra active — 1.9", mult: 1.9, blurb: "Field training, two-a-days, or a very hard physical job plus training." },
];

export const LB_PER_KG = 2.20462;

export function rmr(sex: Sex, weightKg: number, heightCm: number, age: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
}

export type TargetResult = {
  rmr: number;
  tdee: number;
  target: number;
  /** Chosen rate after the 1%-of-body-weight/week cap (lb/week). */
  effectiveRateLb: number;
  capped: boolean;
  floorApplied: boolean;
  adjustmentKcal: number;
  mdriBand: string;
};

export function mdriBand(sex: Sex, activity: ActivityKey): string {
  const table: Record<Sex, Record<ActivityKey, string>> = {
    male: { sedentary: "light — 3,000", light: "light — 3,000", moderate: "moderate — 3,400", very: "heavy — 3,700", extra: "exceptionally heavy — 4,700" },
    female: { sedentary: "light — 2,100", light: "light — 2,100", moderate: "moderate — 2,300", very: "heavy — 2,700", extra: "exceptionally heavy — 3,000" },
  };
  return `MDRI planning standard for your sex at ${table[sex][activity]} kcal/day (AR 40–25)`;
}

export function computeTarget(args: {
  sex: Sex; age: number; weightKg: number; heightCm: number;
  activity: ActivityKey; goal: Goal; rateLbPerWeek: number;
}): TargetResult {
  const rest = rmr(args.sex, args.weightKg, args.heightCm, args.age);
  const mult = ACTIVITIES.find((a) => a.key === args.activity)?.mult ?? 1.55;
  const tdee = rest * mult;
  const maxRateLb = args.weightKg * LB_PER_KG * 0.01; // HPRC ≤1% BW/week ceiling
  let target = tdee;
  let effectiveRateLb = 0;
  let capped = false;
  let floorApplied = false;
  if (args.goal === "lose" || args.goal === "gain") {
    effectiveRateLb = Math.min(Math.abs(args.rateLbPerWeek), maxRateLb);
    capped = Math.abs(args.rateLbPerWeek) > maxRateLb + 1e-9;
    // ≈3,500 kcal ≈ 1 lb approximation → 500 kcal/day per lb/week (Flag F-8).
    const delta = effectiveRateLb * 500;
    target = args.goal === "lose" ? tdee - delta : tdee + delta;
    if (args.goal === "lose" && target < rest) {
      target = rest;
      floorApplied = true;
      effectiveRateLb = Math.max(0, (tdee - rest) / 500);
    }
  }
  return {
    rmr: Math.round(rest),
    tdee: Math.round(tdee),
    target: Math.round(target),
    effectiveRateLb: Math.round(effectiveRateLb * 100) / 100,
    capped,
    floorApplied,
    adjustmentKcal: Math.round(target - tdee),
    mdriBand: mdriBand(args.sex, args.activity),
  };
}

export type MacroTarget = {
  proteinLowG: number; proteinHighG: number; proteinG: number;
  fatG: number; fatPct: number; carbsG: number; proteinRangeLabel: string;
};

/** Pack 2.4: protein fixed first from the published goal range, fat
 * second as a % of target inside the AMDR, carbs take the remainder.
 * The goal table itself is an assembly of published ranges — the UI
 * presents it that way (Flag F-3). */
export function macroTargets(goal: Goal, weightKg: number, targetKcal: number): MacroTarget {
  const range: Record<Goal, [number, number, string]> = {
    maintain: [1.2, 1.6, "1.2–1.6 g/kg (inside the MDRI range, training-adjusted)"],
    performance: [1.6, 2.0, "1.6–2.0 g/kg (upper MDRI → ACSM/AND/DC ceiling)"],
    lose: [1.6, 2.0, "1.6–2.0 g/kg (deficit guidance — protein stays high while calories come down)"],
    gain: [1.6, 2.0, "1.6–2.0 g/kg (upper MDRI → ACSM/AND/DC ceiling)"],
  };
  const [lo, hi, label] = range[goal];
  const proteinG = Math.round(((lo + hi) / 2) * weightKg);
  const fatPct = 25; // inside AMDR 20–35%, under the AR 40–25 ≤30% preference
  const fatG = Math.round((targetKcal * (fatPct / 100)) / 9);
  const carbsG = Math.max(0, Math.round((targetKcal - proteinG * 4 - fatG * 9) / 4));
  return {
    proteinLowG: Math.round(lo * weightKg),
    proteinHighG: Math.round(hi * weightKg),
    proteinG, fatG, fatPct, carbsG, proteinRangeLabel: label,
  };
}

export type WeightPoint = { date: string; weightKg: number };

/** 14-day trend: compares the most recent 7-day average against the
 * prior 7-day average. Returns lb/week, or null without ≥14 days of
 * span covered by entries in both windows. */
export function trendLbPerWeek(points: WeightPoint[]): number | null {
  if (points.length < 2) return null;
  const sorted = [...points].sort((a, b) => a.date.localeCompare(b.date));
  const last = sorted[sorted.length - 1];
  if (!last) return null;
  const lastMs = Date.parse(`${last.date}T12:00:00Z`);
  const win = (fromDays: number, toDays: number) =>
    sorted.filter((p) => {
      const d = (lastMs - Date.parse(`${p.date}T12:00:00Z`)) / 86400000;
      return d >= fromDays && d < toDays;
    });
  const recent = win(0, 7);
  const prior = win(7, 14);
  if (recent.length === 0 || prior.length === 0) return null;
  const avg = (xs: WeightPoint[]) => xs.reduce((s, p) => s + p.weightKg, 0) / xs.length;
  const deltaKg = avg(recent) - avg(prior);
  return Math.round(deltaKg * LB_PER_KG * 100) / 100; // per ~1 week between window centers
}

/** Pack 2.3 step 4: ±100–200 kcal/day recalibration offer when the
 * 14-day trend disagrees with the goal rate. */
export function recalibrationAdvice(args: {
  goal: Goal; rateLbPerWeek: number; trendLbPerWeek: number | null; weightKg: number;
}): string | null {
  const { goal, trendLbPerWeek } = args;
  if (trendLbPerWeek === null) return null;
  const ceilingLb = args.weightKg * LB_PER_KG * 0.01;
  if (Math.abs(trendLbPerWeek) > ceilingLb) {
    return `Your 14-day trend (${trendLbPerWeek > 0 ? "+" : ""}${trendLbPerWeek} lb/week) is faster than the HPRC safe-rate ceiling of 1% of body weight per week (≈${Math.round(ceilingLb * 100) / 100} lb/week for you). The Weight Management entry has the safe band — and a dietitian or your medical provider is the right next call. The app does not recalibrate to chase a trend past the ceiling.`;
  }
  if (goal === "lose") {
    const want = -Math.abs(args.rateLbPerWeek);
    if (trendLbPerWeek > want + 0.25) {
      return `Your 2-week trend (${trendLbPerWeek > 0 ? "+" : ""}${trendLbPerWeek} lb/week) is slower than your ${Math.abs(args.rateLbPerWeek)} lb/week loss goal. The estimate-based fix: lower your target by 100–200 kcal/day and re-check in 14 days — the trend is the measurement.`;
    }
    if (trendLbPerWeek < want - 0.25) {
      return `Your 2-week trend (${trendLbPerWeek} lb/week) is faster than your ${Math.abs(args.rateLbPerWeek)} lb/week loss goal. Consider raising your target by 100–200 kcal/day — faster is not better past the goal rate; muscle and performance ride on eating enough.`;
    }
  }
  if (goal === "gain") {
    const want = Math.abs(args.rateLbPerWeek);
    if (trendLbPerWeek < want - 0.25) {
      return `Your 2-week trend (${trendLbPerWeek > 0 ? "+" : ""}${trendLbPerWeek} lb/week) is slower than your ${want} lb/week gain goal. The estimate-based fix: raise your target by 100–200 kcal/day and re-check in 14 days.`;
    }
    if (trendLbPerWeek > want + 0.25) {
      return `Your 2-week trend (+${trendLbPerWeek} lb/week) is faster than your ${want} lb/week gain goal. Consider lowering your target by 100–200 kcal/day so the gain stays muscle-biased.`;
    }
  }
  return null;
}

/* ----------------- 2025–2030 pattern (engine) -------------------- */
/* Daily servings by calorie level, DGA 2025–2030 (realfood.gov table,
 * re-verified at build). Protein and whole grains publish as ranges —
 * midpoints are used and labeled (engine arithmetic on published
 * values, per pack 4.2 step 1's interpolation rule, updated to the
 * current edition by Flag F-6). Dairy / vegetables / fruits / healthy
 * fats publish as single servings and are transcribed exactly. */
export type PatternLevel = {
  kcal: number;
  proteinServings: number; // midpoint of the published range
  proteinRange: string;
  dairyServings: number;
  vegServings: number;
  fruitServings: number;
  grainServings: number; // midpoint of the published range
  grainRange: string;
  fatTsp: number;
};

export const PATTERN_LEVELS: PatternLevel[] = [
  { kcal: 1600, proteinServings: 3.0, proteinRange: "2½–3½", dairyServings: 3, vegServings: 2.5, fruitServings: 1.5, grainServings: 2.25, grainRange: "1¾–2¾", fatTsp: 3.5 },
  { kcal: 1800, proteinServings: 3.0, proteinRange: "2½–3½", dairyServings: 3, vegServings: 3, fruitServings: 1.5, grainServings: 2.5, grainRange: "1¾–3¼", fatTsp: 4 },
  { kcal: 2000, proteinServings: 3.5, proteinRange: "3–4", dairyServings: 3, vegServings: 3, fruitServings: 2, grainServings: 3.0, grainRange: "2–4", fatTsp: 4.5 },
  { kcal: 2200, proteinServings: 4.0, proteinRange: "3½–4½", dairyServings: 3, vegServings: 3.5, fruitServings: 2, grainServings: 3.375, grainRange: "2¼–4½", fatTsp: 4.5 },
  { kcal: 2400, proteinServings: 4.0, proteinRange: "3½–4½", dairyServings: 3, vegServings: 3.5, fruitServings: 2, grainServings: 4.0, grainRange: "2¾–5¼", fatTsp: 5 },
  { kcal: 2600, proteinServings: 4.5, proteinRange: "4–5", dairyServings: 3, vegServings: 4.25, fruitServings: 2, grainServings: 4.375, grainRange: "3–5¾*", fatTsp: 5.5 },
  { kcal: 2800, proteinServings: 4.5, proteinRange: "4–5", dairyServings: 3, vegServings: 4.25, fruitServings: 2.5, grainServings: 4.875, grainRange: "3¼–6½", fatTsp: 6 },
  { kcal: 3000, proteinServings: 4.5, proteinRange: "4–5", dairyServings: 3, vegServings: 4.75, fruitServings: 2.5, grainServings: 4.875, grainRange: "3¼–6½", fatTsp: 7 },
  { kcal: 3200, proteinServings: 4.5, proteinRange: "4–5", dairyServings: 3, vegServings: 4.75, fruitServings: 2.5, grainServings: 4.875, grainRange: "3¼–6½", fatTsp: 8 },
];

export function nearestPattern(targetKcal: number): PatternLevel {
  let best = PATTERN_LEVELS[0]!;
  for (const lvl of PATTERN_LEVELS) {
    if (Math.abs(lvl.kcal - targetKcal) < Math.abs(best.kcal - targetKcal)) best = lvl;
  }
  return best;
}

export const ALLERGEN_KEYS = ["peanut", "tree nut", "milk", "egg", "fish", "shellfish", "soy", "wheat", "sesame"] as const;
export type AllergenKey = (typeof ALLERGEN_KEYS)[number];

export const DB_LIMITS =
  "Values are reference values for a standard form of the food. Your chicken is not the lab's chicken; preparation, brand, and portion error move real intake by ±20% or more without anyone lying. The tracker is a trend instrument, not a scale. Branded and restaurant foods vary by recipe, location, and year — they are largely out of this database on purpose; the label on the package in your hand (entered as a custom food) beats a stale database row. DFAC food is the hardest case: no published per-item values exist for most dining-facility servings — the Go for Green (G4G) color labels in the DFAC plus the plate method are the honest tools there; this database does not fake DFAC rows.";

export const ALLERGY_LIMIT =
  "Allergy safety limit: USDA generic foods do not carry allergen declarations. Exclusions here are enforced by curated tags + name matching against this app's own subset — strong for whole foods (milk, egg, peanut as ingredients are visible), NOT a guarantee for mixed dishes (a prepared burrito's full ingredient list is not in the database). If you have a serious allergy, treat generated plans as a draft to check, not a clearance.";
