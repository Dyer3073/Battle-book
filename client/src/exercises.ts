// Exercise Library — static editorial data transcribed from the
// Fitness Depth research pack (~/workspace/military-app/fitness-depth/
// exercises.md, Nov 9, 2026). All 51 pack entries, in the pack's 7
// categories, with the pack's how-to steps, errors, scaling, scope
// notes, conflicts (attributed, never blended), diagram panels drawn
// from the pack's per-entry "Diagram positions" line, and source
// lines. The pack's Flagged Register stays OUT: no dead bug (F1), no
// Pallof press (F2 — the Dream Body template's generic "anti-rotation"
// keeps its generic label), no barbell bench press (F3), no named
// arms/delts/calves accessories (F4), no Bulgarian split squat (F5),
// no swim technique / bike setup (F8), no kettlebell swing or burpee
// (F11). Partial entries carry their scope notes (F6 rowing, F7
// running gait, F9 8-count step-up, F10 mobility flow).

import type { DiagramPanelSpec } from "./ExerciseDiagram";

export type Exercise = {
  id: string;
  n: number;
  name: string;
  aliases: string;
  category: string;
  equipment: string;
  trains: string;
  steps: readonly string[];
  errors?: string;
  scaling?: string;
  scopeNote?: string;
  /** Cross-source conflict, printed attributed — never blended. */
  conflict?: string;
  /** Per-branch test-form notes (Standard Push-Up, conflicts C1/C2). */
  branchNotes?: readonly string[];
  panels: readonly DiagramPanelSpec[];
  source: string;
};

export const EXERCISE_CATEGORIES: { key: string; label: string }[] = [
  { key: "upper-push", label: "Upper Push" },
  { key: "upper-pull", label: "Upper Pull" },
  { key: "lower", label: "Lower Body" },
  { key: "core", label: "Core" },
  { key: "full-body", label: "Full-Body / Loaded / Test Events" },
  { key: "conditioning", label: "Conditioning / Running" },
  { key: "mobility", label: "Mobility / Preparation & Recovery" },
];

export const EXERCISES: Exercise[] = [
  {
    id: "standard-push-up", n: 1, name: "Standard Push-Up", aliases: "Push-up; press-up (UK usage, not used in this app)",
    category: "upper-push", equipment: "None (flat surface; mat optional)",
    trains: "Chest, shoulders, triceps, and trunk — per ATP 7-22.02, it prepares for “more vigorous pushing motions required in training, testing, and combat tasks.”",
    steps: [
      "Start in the front leaning rest: hands flat on the ground directly under your shoulders, fingers spread, feet together, body in one straight line from the top of the head to the heels.",
      "Keeping that straight line, bend the elbows and lower the whole body as one unit until the upper arms are parallel to the ground.",
      "Push through the hands to straighten the elbows and return to the start.",
      "Repeat without letting the hips sag or pike.",
    ],
    errors: "Hips sagging or piked — brace the trunk and keep the head-to-heels line (all sources make the straight line the standard; Navy ends the event if alignment is lost). Half-depth reps — the rep only counts when the upper arm reaches parallel / elbow reaches 90°; shallower reps are not counted by any service's grader.",
    scaling: "Easier — Six-Point Stance version (knees down), a modified position ATP 7-22.02 §2-4 defines from the front leaning rest; HPRC's resistance-training guide likewise programs a knee push-up as the regression. Harder — Single-Leg Push-Up (entry 4).",
    branchNotes: [
      "Army (Preparation Drill form, ATP 7-22.02 §3-13): hands directly beneath the shoulders, fingers spread; lower until the upper arms are parallel to the ground.",
      "Navy PRT (PRP Guide 5, §3): 2 minutes for max reps; hands under or slightly wider than shoulders; lower until elbows bend to at least 90°; rest only in the up position.",
      "USMC PFT (MCO 6100.13A, Ch. 2): 2 minutes; feet together or up to 12 inches apart; lower as one unit until upper arms are at least parallel to the deck, then lock out.",
      "Air Force PFRA (AFMAN 36-2905, Att. 2, §A2.3): 1 minute; hands slightly wider than shoulder width; upper arms at least parallel at the bottom.",
    ],
    conflict: "⚠ CONFLICTS C1/C2 — push-up depth and hand placement differ by service (see the per-branch notes above): upper-arm-parallel (Army, Air Force) vs. elbows to at least 90° (Navy), and hands directly beneath the shoulders (Army) vs. slightly wider than shoulder width (Air Force, HPRC). Train and grade to the standard of the test you are taking — the app does not merge them into one cue.",
    panels: [
      { pose: "plankTop", label: "Start — front leaning rest" },
      { pose: "plankBottom", label: "Bottom — upper arms parallel" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 2 §§2-3–2-4 and Ch. 3 §3-13; Navy PRP Guide 5, §3; AFMAN 36-2905 (Mar 24, 2026), Att. 2 §A2.3; MCO 6100.13A, Ch. 2.",
  },
  {
    id: "hand-release-push-up", n: 2, name: "Hand-Release Push-Up — Arm Extension", aliases: "HRP; push-up with arm extension (Army AFT name); hand-release push-up (Air Force PFRA name)",
    category: "upper-push", equipment: "None",
    trains: "Upper-body pushing endurance — chest, shoulders, triceps — with a full stop at the bottom of every rep so no bounce or stretch reflex helps (Army AFT event 2; Air Force PFRA strength option, 2 minutes).",
    steps: [
      "Start lying face-down (prone): chest, front of hips, and thighs on the ground, hands flat with the index fingers inside the outer edges of the shoulders, toes on the ground, feet together or up to one boot's width apart.",
      "Push the whole body up as one unit until the elbows are fully straight — the front leaning rest — keeping a straight line from head to ankles.",
      "Bend the elbows and lower as one unit until chest, hips, and thighs touch down together.",
      "Without moving head, body, or legs, slide/extend both arms straight out to the sides into a “T” (arms at 90° to the trunk), then immediately bring the hands back under the shoulders. That completes one rep.",
      "Repeat for max reps in 2 minutes (both Army AFT and Air Force PFRA time this event at 2 minutes).",
    ],
    errors: "Lifting the hands before the body fully touches down — chest, hips, and thighs must touch at the same time or the rep does not count (ATP 7-22.01). Sagging or bending at the hips/knees during the push — the body moves “as a single unit” with a generally straight line throughout. Resting on the ground — the only authorized rest position is the top (front leaning rest / up position) in both services' instructions.",
    conflict: "⚠ CONFLICT C3 — the release itself: Army instructions (ATP 7-22.01) let the arms/hands touch or slide along the ground during the T extension; AFMAN 36-2905 (2026) requires the hands to be OFF the ground in the T position. Same event name, opposite ground-contact rule — train the version for the test you are taking.",
    panels: [
      { pose: "prone", label: "Start — prone, hands under shoulders" },
      { scene: "tshape", label: "Bottom — arms extended in a T (top view)" },
    ],
    source: "U.S. Army, ATP 7-22.01, AFT event 2 instructions (event retained unchanged from ACFT into the AFT per Army Directive 2025-06); AFMAN 36-2905 (Mar 24, 2026), Att. 2 §A2.4.",
  },
  {
    id: "t-push-up", n: 3, name: "8-Count T Push-Up", aliases: "8-count push-up (Conditioning Drill 2 version)",
    category: "upper-push", equipment: "None",
    trains: "Total-body strength, endurance, and mobility; the hand release plus T position emphasizes the full push-and-reach motion (ATP 7-22.02 §5-23).",
    steps: [
      "Start standing at the position of attention.",
      "Count 1: drop into a squat, hands on the ground between the knees. Count 2: thrust both legs back into the front leaning rest.",
      "Count 3: bend the elbows and lower the body to the ground. Count 4: lift the hands and move the arms straight out to the sides into the T position.",
      "Count 5: return the hands under the shoulders. Count 6: push up into the front leaning rest, body straight from head to heels.",
      "Count 7: jump/squat the feet back up between the hands to the squat position. Count 8: stand up to attention.",
      "Army drill dosage: 5–10 repetitions at a moderate cadence (ATP 7-22.02 §5-23).",
    ],
    errors: "Letting the hips crash when the legs thrust back — ATP 7-22.02's front-leaning-rest standard (§2-3) is to control the hips so they do not dip to the ground when the feet land.",
    panels: [
      { pose: "standFeetTogether", label: "Start — attention" },
      { scene: "tshape", label: "Bottom — prone, arms in a T (top view)" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-23 (Conditioning Drill 2, exercise 5); positions per Ch. 2 §§2-2–2-3.",
  },
  {
    id: "single-leg-push-up", n: 4, name: "Single-Leg Push-Up", aliases: "Single-leg push-up (Conditioning Drill 1 version)",
    category: "upper-push", equipment: "None",
    trains: "Chest and hip muscles with an added shoulder-stability challenge (ATP 7-22.02 §5-7).",
    steps: [
      "Start in the front leaning rest: hands directly beneath the shoulders, fingers spread, feet together, straight line from head to heels.",
      "Bend the elbows and lower until the upper arms are parallel to the ground — at the same time raise one leg, knee straight, until the toe is level with or just above the other heel. This is a small lift, not a high kick or a hip hyperextension.",
      "Push back up and lower the leg to return to the start.",
      "Repeat, raising the other leg. Army drill dosage: performed in the 4-count drill format at a moderate cadence (ATP 7-22.02 §5-7).",
    ],
    panels: [
      { pose: "plankTop", label: "Start — front leaning rest" },
      { pose: "plankBottom", label: "Bottom — one leg raised to heel height" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-7 (Conditioning Drill 1, exercise 5).",
  },
  {
    id: "db-overhead-press", n: 5, name: "Dumbbell Overhead Press", aliases: "DB overhead press; standing overhead press; shoulder press",
    category: "upper-push", equipment: "Pair of dumbbells (kettlebells or a barbell use the same pattern; the HPRC sources describe the dumbbell version)",
    trains: "Shoulders and triceps — the vertical push pattern; HPRC lists it under “Upper Push: Vertical” in its resistance-training guide.",
    steps: [
      "Stand tall holding a dumbbell in each hand at shoulder height, palms facing forward.",
      "Brace the trunk and press both weights straight overhead until the arms are fully extended.",
      "Lower back to shoulder height with control.",
      "Repeat. HPRC's general resistance-training guidance: 8–12 repetitions, at a weight where the last ~3 reps are very difficult while form holds.",
    ],
    scaling: "Single-arm version — same press with one arm while keeping the torso stationary (HPRC resistance-training guide; HPRC's Litter Carry program also programs single-arm DB overhead press and seated overhead DB press as variations).",
    panels: [
      { pose: "pressStart", label: "Start — dumbbells at shoulder height", weights: true },
      { pose: "pressTop", label: "Finish — arms fully extended overhead", weights: true },
    ],
    source: "HPRC (Human Performance Resources by CHAMP), “Benefits of Resistance Training and How to Get Started” (Upper Push: Vertical) — institutional source, labeled; also HPRC, “Litter Carry Training” program.",
  },
  {
    id: "push-press", n: 6, name: "Overhead Push Press", aliases: "Push press; STC overhead push press (kettlebell version)",
    category: "upper-push", equipment: "Kettlebells (Strength Training Circuit version) or dumbbells/barbell",
    trains: "Overhead pressing power using a small leg drive — shoulders, triceps, and legs together; station 8 of the Army Strength Training Circuit and a top-three training exercise for the (now retired) standing power throw in the Army's ACFT training guide.",
    steps: [
      "Stand in the straddle stance holding the weights at shoulder height.",
      "Dip by flexing the hips and knees slightly into a mini-squat.",
      "Immediately drive up through the legs and extend the elbows to push the weights overhead to full arm extension.",
      "Flex the hips and knees slightly again as you lower the weights back to shoulder height under control.",
      "Army STC dosage: the circuit runs 1 minute per station (ATP 7-22.02, Strength Training Circuit).",
    ],
    errors: "Turning it into a slow strict press — the exercise is defined by the quick dip-and-drive; if the legs do not contribute, it is an overhead press (entry 5), not a push press.",
    panels: [
      { pose: "pressDip", label: "Start — the dip, weights at shoulders", weights: true },
      { pose: "pressTop", label: "Finish — drive to full extension overhead", weights: true },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 8 (per Army STC task summary 805P-COM-1106, citing ATP 7-22.02); U.S. Army Physical Fitness School, ACFT Training Quick Reference Guide.",
  },
  {
    id: "supine-chest-press", n: 7, name: "Supine Chest Press", aliases: "Floor chest press (training name); STC supine chest press",
    category: "upper-push", equipment: "Kettlebells (STC version); dumbbells work the same way lying on the floor or a bench",
    trains: "Chest, shoulders, and triceps in a horizontal press — the Army's ACFT training guide lists it as a top-three exercise for hand-release push-up preparation.",
    steps: [
      "Lie on your back with knees bent, holding a weight in each hand at chest height, elbows bent and resting lightly by your sides.",
      "Press both weights straight up until the arms are fully extended above the chest.",
      "Lower with control until the upper arms touch the ground again.",
      "Repeat. Army STC dosage: 1 minute at the station (ATP 7-22.02, Strength Training Circuit).",
    ],
    panels: [
      { pose: "situpDown", label: "Start — on back, weights at chest", weights: true },
      { pose: "supine", label: "Finish — arms extended above the chest", weights: true },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 6 (per Army STC task summary 805P-COM-1106 and STC station slides); U.S. Army Physical Fitness School, ACFT Training Quick Reference Guide.",
  },
  {
    id: "pull-up", n: 8, name: "Pull-Up (dead-hang)", aliases: "Dead-hang pull-up; pull-ups (USMC PFT event)",
    category: "upper-pull", equipment: "Pull-up bar (climbing bars)",
    trains: "Back, biceps, and grip — pulling your own body weight up and over a bar; HPRC classes pull-ups under the “Pull” foundational pattern (pulling the body toward something), used for tasks like pulling up and over a wall or climbing a rope.",
    steps: [
      "Grasp the bar with both palms facing forward (away) or to the rear — both grips are authorized; grip may be changed during the event only if the feet never touch the ground and only the hands contact the bar.",
      "Start from a motionless dead hang: arms fully extended, feet off the ground, body still. Legs may be straight or bent, but the knees may not be raised above the waist.",
      "Pull the body up with the arms until the chin is above the bar.",
      "Lower under control until the arms are fully extended again. That is one repetition. There is no time limit.",
      "The chin may never rest on the bar.",
    ],
    errors: "Kipping, kicking, or swinging to help the pull — the MCO standard is a motionless start and a pull performed without excess motion; reps with leg help do not count. Shorting the bottom — every rep must return to full arm extension before the next pull.",
    scaling: "Easier — Dead Hang holds (entry 10) and flexed-arm hang work build the start position; band assistance is a common gym scale but is NOT in the official sources read for this library, so it is noted here as unsourced rather than prescribed. Harder — the Navy CFA version adds a 20-lb weight (weighted pull-ups, CFA event per NAVADMIN 264/25 fact sheet; standards table in PRP Guide-5B was not captured — do not program to secondary numbers circulating for it).",
    panels: [
      { pose: "hang", label: "Start — motionless dead hang", bar: true },
      { pose: "hangTop", label: "Finish — chin above the bar", bar: true },
    ],
    source: "MCO 6100.13A, Ch. 2, PFT pull-up event (execution standard as reproduced in the University of Oklahoma NROTC Marine-option PFT instructions, citing the MCO); HPRC, “Introduction to the Foundational Movements of Functional Fitness” (Pull section) — institutional, for the pattern.",
  },
  {
    id: "chin-up", n: 9, name: "Chin-Up", aliases: "Underhand-grip pull-up; supinated pull-up",
    category: "upper-pull", equipment: "Pull-up bar",
    trains: "Same pulling muscles as the pull-up with more biceps involvement from the underhand grip.",
    steps: [
      "Grasp the bar with palms facing you (to the rear), hands about shoulder width apart.",
      "Start from the same motionless dead hang as the pull-up: arms fully extended, feet off the ground.",
      "Pull until the chin is above the bar, then lower to full extension for each rep.",
    ],
    scopeNote: "Why it has its own entry: the USMC PFT expressly authorizes either grip — palms forward or to the rear — for the same event, so a Marine may test entirely in this grip. The Army's ACFT training guide separately lists the “alternating grip pull-up” as a top-three leg-tuck training exercise — services program grip variation deliberately.",
    panels: [
      { pose: "hang", label: "Start — dead hang, palms facing you", bar: true },
      { pose: "hangTop", label: "Finish — chin above the bar", bar: true },
    ],
    source: "MCO 6100.13A, Ch. 2 (both grips authorized for the PFT pull-up event); U.S. Army Physical Fitness School, ACFT Training Quick Reference Guide (alternating-grip pull-up listing).",
  },
  {
    id: "dead-hang", n: 10, name: "Dead Hang", aliases: "Dead-hang hold; passive hang",
    category: "upper-pull", equipment: "Pull-up bar",
    trains: "Grip endurance and the pull-up start position — the plans' test-prep template programs “hangs” on its strength-volume day.",
    steps: [
      "Grasp the bar with either authorized grip (palms forward or to the rear), hands about shoulder width apart.",
      "Lift the feet clear of the ground and hang motionless with arms fully extended — this is exactly the pull-up's start position in the MCO.",
      "Keep the body still (legs straight or bent, knees below the waist) and breathe; hold for time, then step down under control.",
    ],
    errors: "Shrugging the shoulders up to the ears to “rest” — the training value is the fully extended, still hang; if the grip is failing, end the set rather than swinging.",
    scopeNote: "Hold durations are NOT prescribed in the sources read — program them sub-maximally per the library's safety framing; no dosage is printed for this entry on purpose.",
    panels: [
      { pose: "hangStart", label: "Start — gripping the bar, feet down", bar: true },
      { pose: "hang", label: "The hold — settled, still hang", bar: true },
    ],
    source: "Position standard from MCO 6100.13A, Ch. 2 (dead-hang start position for the pull-up event).",
  },
  {
    id: "bent-over-row", n: 11, name: "Bent-Over Row", aliases: "Bent-over row (STC station 7); barbell/dumbbell row in gym versions",
    category: "upper-pull", equipment: "Kettlebells (STC version), dumbbells, or barbell",
    trains: "Upper back, lats, and biceps — the horizontal pull; HPRC classes rowing under the “Pull” pattern (pulling objects toward you), and the Army programs it for both deadlift and sprint-drag-carry preparation.",
    steps: [
      "Stand holding the weights in front of the thighs, then hinge forward from the hips with a flat back and slightly bent knees until the trunk is roughly parallel to the ground (the same hinged end position as the Straight-Leg Deadlift, entry 21).",
      "Let the arms hang straight down toward the ground.",
      "Pull the weights up toward the lower ribs/upper stomach by driving the elbows back and squeezing the shoulder blades together.",
      "Lower with control to straight arms. Repeat.",
      "Army STC dosage: 1 minute at the station (ATP 7-22.02, Strength Training Circuit).",
    ],
    errors: "Rounding the back to reach lower — keep the back flat and hinge only as far as a flat back allows (the hinge standard is the Straight-Leg Deadlift check point: back straight and, at the bottom, parallel to the ground). Standing up to heave the weight — if the trunk angle changes every rep, the load is too heavy.",
    panels: [
      { pose: "hinge", label: "Start — hinged, arms hanging", weights: true },
      { pose: "hingeRowDone", label: "Finish — elbows back, weights at lower ribs", weights: true },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 7 (per Army STC task summary 805P-COM-1106 and STC station slides); hinge standard from STC station 2; HPRC, “Foundational Movements” (Pull section) — institutional, for the pattern.",
  },
  {
    id: "prone-row", n: 12, name: "Prone Row", aliases: "Prone row (Preparation Drill exercise 8)",
    category: "upper-pull", equipment: "None",
    trains: "Neck, upper back, and shoulders; ATP 7-22.02 says it prepares Soldiers to fire from the prone position and to tolerate helmet and body-armor weight across the shoulders and neck.",
    steps: [
      "Start in the prone position: lying face-down, arms extended overhead on the ground, palms down, fingers extended; lift the arms 1–2 inches off the ground, toes pointed to the rear.",
      "Raise the head and chest slightly while pulling the arms rearward, making fists as the hands come back toward the shoulders. Feet stay together and on the ground; arms and hands stay off the ground.",
      "Reverse the movement to return to the start, arms still hovering off the ground.",
      "Repeat at a slow cadence (ATP 7-22.02 §3-11; Preparation Drill exercises run 5–10 repetitions in the drill).",
    ],
    panels: [
      { pose: "prone", label: "Start — prone, arms overhead hovering" },
      { pose: "proneRowDone", label: "Finish — head/chest raised, fists at shoulders" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-11 (Preparation Drill exercise 8).",
  },
  {
    id: "scapular-row", n: 13, name: "Band / Cable Scapular Row", aliases: "Scapular row; upright scapular row (HPRC names)",
    category: "upper-pull", equipment: "Resistance band or cable anchored at about chest height",
    trains: "Upper-back and shoulder-blade (scapular) muscles — the retraction half of every row and pull-up; HPRC programs it in both its resistance-training guide and its Litter Carry program.",
    steps: [
      "Anchor a band at chest height and stand facing the anchor, holding the band with arms straight in front of you.",
      "Without bending the elbows much, pull by squeezing the shoulder blades together and drawing them down, letting the hands travel a short distance toward the body.",
      "Return slowly to straight arms with the shoulder blades reaching forward again.",
      "HPRC Litter Carry program dosage for band/cable scapular row: sets of 10–15 repetitions across its program weeks (program dosage, not a test standard).",
    ],
    panels: [
      { pose: "scapStart", label: "Start — arms straight, blades spread", prop: "band" },
      { pose: "scapDone", label: "Finish — blades squeezed together and down", prop: "band" },
    ],
    source: "HPRC, “Benefits of Resistance Training and How to Get Started” (Upper Pull: Horizontal) and HPRC, “Litter Carry Training” program — institutional source, labeled.",
  },
  {
    id: "air-squat", n: 14, name: "Air Squat", aliases: "Bodyweight squat; air squat (HPRC name)",
    category: "lower", equipment: "None",
    trains: "Quadriceps, glutes, and hamstrings — the foundational squat pattern HPRC says underlies daily tasks (sitting, standing, working low) and feeds the deadlift pattern.",
    steps: [
      "Stand with feet about shoulder-width apart, toes angled slightly out.",
      "Bend at the hips and knees and sit the body downward, keeping the chest up and the heels on the ground.",
      "Lower until the tops of the hips are below the tops of the knees (HPRC's air-squat depth standard).",
      "Push through the whole foot to stand back up to full extension.",
    ],
    errors: "Heels lifting — HPRC's tip for the squat family is to perfect air-squat form before adding any weight; if the heels rise, shorten the depth until they stay down. Knees caving inward — track the knees out over the toes.",
    conflict: "⚠ CONFLICT C7 — squat depth: HPRC's air squat goes hips-below-knees; the Army STC sumo squat (entry 15) stops at thighs-parallel on purpose. Different exercises, different standards — do not blend them.",
    panels: [
      { pose: "stand", label: "Start — standing, toes slightly out" },
      { pose: "squatDeep", label: "Bottom — hips below the tops of the knees" },
    ],
    source: "HPRC, “Introduction to the Foundational Movements of Functional Fitness” (Squat section) and HPRC, “Foundational Movements: Squats” — institutional source, labeled.",
  },
  {
    id: "sumo-squat", n: 15, name: "Sumo Squat (kettlebell)", aliases: "Sumo squat (STC station 1)",
    category: "lower", equipment: "One kettlebell",
    trains: "Strength and mobility of the hips, legs, and lower back (ATP 7-22.02, STC station 1 purpose).",
    steps: [
      "Start in the straddle stance, feet slightly wider than the shoulders with toes pointing outward, holding one kettlebell with both hands in front of the body, palms facing the body.",
      "Squat while leaning slightly forward from the waist, head up, until the upper legs are parallel to the ground. At the bottom, shoulders, knees, and the balls of the feet should be aligned.",
      "Return to the start, keeping the heels on the ground and the back straight throughout.",
      "Army STC dosage: 1 minute at the station, always at a slow cadence.",
    ],
    errors: "Dropping below parallel — the STC precaution is explicit: do not lower beyond thighs-parallel on this exercise, because it increases stress on the knees. Heels coming up or back rounding — both are named check points: heels stay down, back stays straight.",
    conflict: "⚠ CONFLICT C7 — this station stops at thighs-parallel by design; HPRC's unloaded air squat (entry 14) goes hips-below-knees. Both standards stand, each on its own exercise.",
    panels: [
      { pose: "sumoStart", label: "Start — straddle stance, kettlebell hanging" },
      { pose: "sumoBottom", label: "Bottom — thighs parallel, no deeper", prop: "kbHang" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 1 (description and check points as carried in the STC station slides, armyprt.com; station assignment per Army task summary 805P-COM-1106).",
  },
  {
    id: "goblet-squat", n: 16, name: "Goblet Squat", aliases: "Goblet squat (HPRC name)",
    category: "lower", equipment: "One dumbbell or kettlebell held at the chest",
    trains: "Same squat muscles as the air squat, loaded — HPRC teaches it as the first weighted squat after air-squat form is solid.",
    steps: [
      "Hold one weight with both hands against the chest, elbows tucked under it.",
      "Stand with feet about shoulder-width apart and squat by bending at the hips and knees, keeping the weight pinned to the chest and the torso upright.",
      "Lower to the air-squat standard (hips below the tops of the knees) if mobility allows with heels down.",
      "Drive through the feet to stand.",
      "HPRC Litter Carry program dosage: dumbbell goblet squat sets of 8–10 repetitions (program dosage).",
    ],
    panels: [
      { pose: "gobletTop", label: "Start — weight pinned at the chest", chestWeight: true },
      { pose: "gobletBottom", label: "Bottom — hips below knees, torso upright", chestWeight: true },
    ],
    source: "HPRC, “Benefits of Resistance Training and How to Get Started” and HPRC, “Litter Carry Training” program — institutional source, labeled.",
  },
  {
    id: "forward-lunge", n: 17, name: "Forward Lunge", aliases: "Forward lunge (Preparation Drill exercise 7)",
    category: "lower", equipment: "None (weights optional in gym versions — not in the Army drill version)",
    trains: "Balance and leg strength; ATP 7-22.02 says it prepares for lifts such as a litter carry. HPRC's lunge standard: long step forward, front knee bends, back knee comes close to the ground, torso stays perpendicular to the ground.",
    steps: [
      "Start in the straddle stance, hands on hips.",
      "Step forward with the left leg until the left heel is 3–6 inches ahead of where the right foot sits, and at the same time bend at the hips and knees to lunge forward, keeping the back straight. Do not look down, and do not bring the feet closer together (keep the straddle width).",
      "Push back to return to the start.",
      "Repeat stepping with the right leg. Slow cadence; Preparation Drill exercises run 5–10 repetitions.",
    ],
    errors: "Letting the feet drift onto a tightrope line — the drill check is to maintain straddle width through the step. Looking down — the drill cue is head up, back straight.",
    panels: [
      { pose: "standWideHips", label: "Start — straddle stance, hands on hips" },
      { pose: "lunge", label: "Bottom — long step, torso upright" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-10 (Preparation Drill exercise 7); lunge pattern also in HPRC, “Foundational Movements” (Lunge section) — institutional.",
  },
  {
    id: "rear-lunge-ex", n: 18, name: "Rear Lunge", aliases: "Reverse lunge; rear lunge (Preparation Drill exercise 2 / Recovery Drill exercise 2)",
    category: "lower", equipment: "None",
    trains: "Flexibility, strength, and balance in the hip and leg; ATP 7-22.02 says it prepares for taking cover and kneeling firing positions, and as a Recovery Drill movement it stretches the front of the hip and thigh.",
    steps: [
      "Start in the straddle stance, hands on hips.",
      "Take an exaggerated step backward with the left leg, touching down with the ball of the foot directly behind the start position, heel off the ground. Lower until a stretch is felt in the front of the left hip and thigh; sink a little deeper to increase the stretch if needed.",
      "Return to the start, keeping the same straddle width.",
      "Repeat with the right leg. Slow cadence (Preparation Drill); as a Recovery Drill stretch the position is held (see the Warm-Up & Cool-Down section).",
    ],
    panels: [
      { pose: "standWideHips", label: "Start — straddle stance, hands on hips" },
      { pose: "lunge", label: "Bottom — long step back, ball of foot down" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-4 (Preparation Drill exercise 2) and Ch. 16 §16-4 (Recovery Drill version).",
  },
  {
    id: "split-squat", n: 19, name: "Split Squat", aliases: "Stationary lunge; dumbbell split squat (HPRC program name)",
    category: "lower", equipment: "None, or a dumbbell in each hand (HPRC program version)",
    trains: "Single-leg strength — quadriceps and glutes of the front leg, with balance demand; the plans' Dream Body template programs “split squats / single-leg hinges” as its unilateral work.",
    steps: [
      "Take a long staggered stance, one foot well in front of the other, torso upright.",
      "Bend both knees and lower straight down until the back knee comes close to the ground, keeping the torso perpendicular to the ground (HPRC's lunge standard).",
      "Push through the front foot to rise back to the start — the feet do not move between reps.",
      "Finish all reps on one side, then switch. HPRC Litter Carry program dosage: DB split squat sets of 8–12 per side across program weeks (program dosage).",
    ],
    errors: "Lunging forward instead of dropping straight down — in a split squat the feet stay planted; the movement is vertical. Torso tipping forward — HPRC's lunge description makes an upright, perpendicular torso part of the standard.",
    scopeNote: "The rear-foot-elevated (“Bulgarian”) variant is NOT covered in this library — it was not named in any inspected plan and no sourced entry was written for it.",
    panels: [
      { pose: "splitSquat", label: "Start — long staggered stance (shown at the drop)" },
      { pose: "lunge", label: "Bottom — back knee near the ground, torso upright" },
    ],
    source: "HPRC, “Litter Carry Training” program (DB split squat entries) with the movement standard from HPRC, “Foundational Movements” (Lunge section) — institutional source, labeled.",
  },
  {
    id: "hex-deadlift", n: 20, name: "Hex-Bar Deadlift — 3-Repetition Maximum (MDL)", aliases: "MDL; 3RM deadlift; trap-bar deadlift (Army AFT event 1)",
    category: "lower", equipment: "Hex (trap) bar and plates",
    trains: "Lower-body strength and power — glutes, hamstrings, quadriceps, back, and grip. HPRC's foundational description of the pattern: bend at the hips and knees to reach down as if picking an object up from the floor, then return to standing; correct performance matters most when the object is heavy.",
    steps: [
      "Stand inside the hex bar with feet about hip-width apart, bar centered over the middle of the feet.",
      "Hinge at the hips and bend the knees, keeping the back flat, and grasp the bar's handles.",
      "Brace the trunk, push the ground away through the whole foot, and stand all the way up — hips and shoulders rising together — until fully upright with the bar at arm's length by the thighs.",
      "Lower the bar under control back to the ground and, without setting the bar down between reps in the test, repeat for 3 continuous repetitions at the attempted weight (the AFT standard).",
      "In training, HPRC's warning governs load choice: the most common deadlift mistake is lifting with the back instead of the legs, which can lead to back injury — if the back rounds or takes over, the weight is too heavy for training that day.",
    ],
    errors: "Rounding the back and pulling with the spine — reset, drop the load, and drive with the legs (HPRC). Jerking the bar off the floor — brace first, then push smoothly.",
    scaling: "Lighter hex-bar loads and the Straight-Leg Deadlift (entry 21) and Sumo Squat (entry 15) are the Army's own preparation exercises for this event (ACFT Training Quick Reference Guide lists sumo squat, forward lunge, and straight-leg deadlift among MDL preparation movements).",
    panels: [
      { pose: "dlBottom", label: "Start — inside the hex bar, back flat", prop: "hex" },
      { pose: "dlTop", label: "Finish — fully upright, bar at thigh height", prop: "hex" },
    ],
    source: "U.S. Army, ATP 7-22.01 (Mar 2026 ed.), Ch. 2, MDL event; Army Directive 2025-06 (AFT implementation); HPRC, “Foundational Movements: Deadlifts” and “Foundational Movements” (Deadlift section) — institutional, for pattern cues and the back-vs-legs warning.",
  },
  {
    id: "straight-leg-deadlift", n: 21, name: "Straight-Leg Deadlift / Romanian Deadlift", aliases: "Straight-leg dead lift (STC station 2); Romanian deadlift / RDL (HPRC name for the dumbbell version)",
    category: "lower", equipment: "Kettlebells (STC version) or dumbbells (HPRC version)",
    trains: "Strength, endurance, and mobility of the lower back and the backs of the legs (hamstrings/glutes) — ATP 7-22.02, STC station 2 purpose.",
    steps: [
      "Start in the straddle stance holding the kettlebells in front of the legs, palms facing the thighs. Legs stay straight with the knees slightly bent throughout.",
      "Lean forward from the waist with the head up, hinging until the back is flat and parallel to the ground. At the bottom, hips, knees, and the balls of the feet should be aligned.",
      "Return to standing by driving the hips forward.",
      "Repeat at a slow cadence. Army STC dosage: 1 minute at the station.",
    ],
    errors: "Rounding the back — the check points are a straight back that ends flat and parallel to the ground, heels down. Turning it into a squat — the knees keep only a slight bend; the motion is a hip hinge, not a knee bend.",
    panels: [
      { pose: "standWide", label: "Start — straddle stance, weights at thighs", weights: true },
      { pose: "hinge", label: "Bottom — back flat and parallel to the ground", weights: true },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 2 (description and check points as carried in the STC station slides, armyprt.com); HPRC, “Benefits of Resistance Training and How to Get Started” — institutional, for the dumbbell variant name.",
  },
  {
    id: "single-leg-deadlift", n: 22, name: "Single-Leg Deadlift / Single-Leg Hinge", aliases: "Single-leg deadlift; single-leg hinge (the plans' “single-leg hinges”)",
    category: "lower", equipment: "None, or one light dumbbell/kettlebell",
    trains: "Hamstrings, glutes, and balance on one leg — the unilateral hinge the Dream Body template pairs with split squats.",
    steps: [
      "Stand on one leg with a slight knee bend, the other foot just off the ground behind you.",
      "Hinge at the hips — bend at the hips and knees as you reach down toward the floor, in HPRC's deadlift wording — letting the free leg extend behind you as a counterbalance and keeping the back flat.",
      "Lower only as far as you can with a flat back and level hips.",
      "Drive the standing hip forward to return to standing. Finish the set, then switch legs.",
    ],
    scopeNote: "Sourced scope note: the Army's ACFT training materials list the single-leg deadlift among programmed exercises (ATP 7-22.02 exercise index via the Army H2F workouts summary), and HPRC defines the deadlift pattern; a step-by-step single-leg description was not in the official text opened for the research pack, so the steps above apply the sourced two-leg pattern to one leg and nothing more specific is claimed. Progress load cautiously.",
    panels: [
      { pose: "stand", label: "Start — balanced on one leg, free foot hovering" },
      { pose: "hingeSL", label: "Bottom — flat back, free leg extended behind" },
    ],
    source: "HPRC, “Foundational Movements” (Deadlift section) — institutional, for the hinge pattern; U.S. Army H2F / ATP 7-22.02 exercise listings (single-leg deadlift named in Conditioning Drill 3 / strength exercise indexes).",
  },
  {
    id: "step-up", n: 23, name: "8-Count Step-Up", aliases: "Step-up (STC station 4)",
    category: "lower", equipment: "Step/bench/platform and kettlebells (STC version)",
    trains: "Single-leg strength and endurance — stepping power for stairs, vehicles, and terrain; station 4 of the Army Strength Training Circuit.",
    steps: [
      "Stand facing a sturdy step holding the circuit weight as briefed at the station.",
      "Step up with one leg and drive through the whole foot to stand fully on the step, bringing the other foot up.",
      "Step back down under control, leading with the same leg pattern for the count, and repeat, alternating the lead leg across reps.",
      "Army STC dosage: 1 minute at the station.",
    ],
    scopeNote: "Sourced scope note: the 8-count cadence breakdown sits in ATP 7-22.02's STC chapter, which was not fully opened in the research pass (the copy used ends before the STC chapter); this entry gives the station, equipment family, and dosage the Army's STC task summary does publish. Verify the exact 8-count sequence against ATP 7-22.02 Ch. 13 before relying on a count-by-count version — none is printed here.",
    panels: [
      { pose: "stepUpStart", label: "Start — one foot flat on the step", prop: "step" },
      { pose: "stepUpTop", label: "Finish — standing fully on the step", prop: "step" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Strength Training Circuit, station 4 (station assignment and 1-minute format per Army task summary 805P-COM-1106).",
  },
  {
    id: "forearm-plank", n: 24, name: "Forearm Plank", aliases: "Plank; forearm plank (Navy PRT / USMC PFT event); timed forearm plank (Air Force PFRA core option)",
    category: "core", equipment: "None (mat/padding optional; Navy rule: the member must be entirely on or entirely off the padding)",
    trains: "Abdominal and trunk endurance — the services' core-endurance test event. The Navy's guide notes that, performed properly, it also develops abdominal strength/endurance relevant to preventing low-back injury.",
    steps: [
      "Begin face-down on a flat, level surface with elbows bent and forearms flat on the ground.",
      "Place the elbows directly below the shoulders, so the upper arm and forearm form a 90° angle. Hands rest on the ground as fists (pinky side down) or flat palms — not clasped/folded together (Navy rule).",
      "Feet no more than hip-width apart, ankles at 90°, toes on the ground.",
      "Lift the hips so the body forms one straight line through the head, shoulders, back, buttocks, and legs; pelvis in a neutral tilt, knees straight, neck neutral with the face looking straight down.",
      "Hold. Only toes, forearms, and fists/palms touch the ground, and they stay in contact the whole time.",
      "Test durations: USMC PFT — hold for max time, 3:45 = 100 points and 1:10 = minimum on a single table for all ages/sexes (MCO 6100.13A). Navy PRT — hold for max time against Guide-5A tables. Air Force PFRA — timed hold as the core option (AFMAN 36-2905).",
    ],
    errors: "Hips sagging or piked, or the elbow angle drifting off 90° — each service ends or corrects the event for exactly these faults (Navy: the event ends if the 90° elbow angle is not maintained, a hand/forearm/foot lifts, or form corrections are exhausted; USMC: lifting a hand or foot, or anything other than toes/forearms/hands touching, ends it). Shaking/trembling alone does NOT end the Navy event as long as the position is maintained.",
    scaling: "Easier — knee plank (forearms down, knees on the ground, straight line from head to knees): a training scale consistent with the Army's Six-Point Stance modification logic (ATP 7-22.02 §2-4); not a test position in any service.",
    conflict: "⚠ CONFLICT C4 — plank details: elbow position agrees across services (directly under shoulders, 90° — Navy and USMC). Scoring differs: the USMC scores the plank on ONE table for all ages and sexes (3:45 max / 1:10 min, MCO 6100.13A); the Navy scores it on age/sex tables in Guide-5A. The Navy also expressly permits involuntary shaking without ending the event; USMC material emphasizes the event ending on any touch/lift fault with at most one warning for a broken straight line.",
    panels: [
      { pose: "prone", label: "Start — face-down, forearms flat" },
      { pose: "forearmPlank", label: "The hold — one straight line, head to heels" },
    ],
    source: "U.S. Navy, PRP Guide 5, §3 (forearm plank procedures) and NAVADMIN 304/20; MCO 6100.13A, Ch. 2 (USMC plank standard); AFMAN 36-2905 (Mar 24, 2026) (plank as core component).",
  },
  {
    id: "side-plank", n: 25, name: "Side Plank", aliases: "Side bridge (Army “Four for the Core” name); side plank (the plans' name)",
    category: "core", equipment: "None (mat optional)",
    trains: "Side trunk (obliques) and hip stability — the lateral half of core training that the front plank does not cover; the plans' test-prep template programs side planks in its core finisher.",
    steps: [
      "Lie on one side with legs extended and stacked, and prop the trunk up on the forearm, elbow bent 90° and placed directly below the shoulder (the support position the Army uses across its side-lying stability work).",
      "Lift the hips until the body forms one straight line from head to feet, supported only on the forearm and the side of the bottom foot.",
      "Keep the top arm resting along the body or on the hip; hold without letting the hips roll forward or drop.",
      "Lower under control, then repeat on the other side.",
    ],
    scopeNote: "Sourced scope note: the Army's FM 7-22 “Four for the Core” drill includes the side bridge as one of its four exercises (with the bent-leg body twist, back bridge, and quadraplex); the step detail follows that side-support standard and the forearm-plank alignment rules. No service times this as a test event, and no hold duration is prescribed in the sources read — no dosage is printed.",
    panels: [
      { pose: "sidePlankDown", label: "Start — side-lying, forearm under shoulder" },
      { pose: "sidePlank", label: "The hold — straight line, head to feet" },
    ],
    source: "U.S. Army, FM 7-22 (Oct 2020), Four for the Core drill (side bridge), as listed in the Army ACFT Training Guide's drill references; alignment rules cross-checked against Navy PRP Guide 5 plank procedures.",
  },
];

EXERCISES.push(
  {
    id: "sit-up", n: 26, name: "Sit-Up (Air Force 1-minute standard)", aliases: "Sit-ups (AF PFRA / Space Force HPA core option; Coast Guard legacy event in the plans)",
    category: "core", equipment: "Mat optional; feet may be anchored by a partner or a toe bar where the test allows",
    trains: "Core (abdominal/hip-flexor) endurance — a 1-minute max-rep test event in the Air Force PFRA and Space Force HPA.",
    steps: [
      "Lie face-up on the floor or mat. Buttocks, shoulders, and head stay on the mat (feet may extend off it).",
      "Bend the knees to 90°, feet or heels in contact with the floor the whole time.",
      "Cross the arms over the chest with open hands or fingers on the shoulders or upper chest — and keep some part of the hands/fingers touching there for the entire event. Hands may not grab the shirt.",
      "Raise the upper torso until the elbows touch the knees or thighs.",
      "Lower until the shoulder blades contact the floor. That is one repetition.",
      "Test duration: 1 minute for max correct reps (AFMAN 36-2905, Att. 2 §A2.5).",
    ],
    errors: "Hands coming off the chest/shoulders, buttocks or heels lifting off the floor — each makes the rep not count under the AFMAN instructions. Bouncing the shoulder blades — they must contact the floor each rep, not rebound short of it.",
    conflict: "⚠ CONFLICT C6 — do not substitute the hands-behind-head version: secondary sources and an older AF chart summary describe sit-ups with fingers interlaced behind the head; the current AFMAN verbal instructions put the hands on the shoulders/upper chest. The AFMAN controls.",
    panels: [
      { pose: "situpDown", label: "Start — shoulder blades on the floor, arms crossed" },
      { pose: "situpUp", label: "Top — elbows touch knees/thighs" },
    ],
    source: "AFMAN 36-2905 (Mar 24, 2026), Attachment 2 §A2.5 (1-minute sit-up verbal instructions).",
  },
  {
    id: "cross-leg-reverse-crunch", n: 27, name: "Cross-Leg Reverse Crunch (Air Force version)", aliases: "CLRC; 2-minute cross-leg reverse crunch (AF PFRA core option)",
    category: "core", equipment: "Mat optional",
    trains: "Core endurance with trunk rotation — a 2-minute max-rep Air Force PFRA / Space Force HPA core option.",
    steps: [
      "Lie on your back on a flat, level surface, legs straight and feet on the ground.",
      "Cross the arms over the chest with open hands or fingers touching the shoulders or upper chest; hands stay in contact there the whole time and may not grab the shirt. This start position is also the only rest position. (Your head does not need to touch the ground.)",
      "Keeping the lower back on the floor, bring both knees toward the chest while reaching the LEFT elbow across the body to touch the RIGHT thigh. Return to the start — legs fully extended. That is rep 1.",
      "Repeat on the other side: knees up, RIGHT elbow to LEFT thigh. That is rep 2.",
      "Alternate sides every rep for 2 minutes.",
    ],
    errors: "All are no-count faults in the AFMAN: lower back lifting off the ground; elbow not touching the opposite thigh; legs not fully extending on the return; hands leaving the shoulders/chest; repeating the same side twice in a row.",
    conflict: "⚠ CONFLICT C8 — name collision: a completely different civilian exercise (ankles crossed, curling the hips off the floor) shares this name. This library codes ONLY the AFMAN version above; the civilian version is noted here solely to prevent a mix-up.",
    panels: [
      { pose: "supine", label: "Start — legs extended, arms crossed at chest" },
      { pose: "clrcRep", label: "One rep — elbow to opposite thigh, back down" },
    ],
    source: "AFMAN 36-2905 (Mar 24, 2026), Attachment 2 §A2.6 (2-minute cross-leg reverse crunch verbal instructions); USAF alternate-component FAQ (Dec 2021, citing DAFMAN 36-2905).",
  },
  {
    id: "rower-ex", n: 28, name: "Rower", aliases: "Rower (Preparation Drill exercise 4)",
    category: "core", equipment: "None",
    trains: "Abdominal strength and total-body coordination; ATP 7-22.02 says it prepares Soldiers to move from supine to sitting and for conditioning and climbing drills.",
    steps: [
      "Start in the supine position: lying on the back, arms overhead at shoulder width with palms facing inward, feet together and pointing up, head held 1–2 inches off the ground.",
      "Sit up while bending at the hips and knees and swinging the arms forward until they are parallel to the ground — finishing seated with feet flat on the ground and knees up between the arms.",
      "Reverse the movement to return to the start.",
      "Repeat at a slow cadence; the drill prescribes 5–10 repetitions (ATP 7-22.02 §3-6/3-7).",
    ],
    panels: [
      { pose: "supine", label: "Start — supine, arms overhead" },
      { pose: "rowerTop", label: "Finish — seated, knees up between the arms" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §§3-6–3-7 (Preparation Drill exercise 4).",
  },
  {
    id: "v-up", n: 29, name: "V-Up", aliases: "V-up (Conditioning Drill 1 exercise 2)",
    category: "core", equipment: "None",
    trains: "Abdominal and hip-flexor muscles; ATP 7-22.02 links it to the leg tuck, rope traverse, and surmounting obstacles.",
    steps: [
      "Start in the supine position with arms on the ground at 45° from the body, knees bent to 90°, head 1–2 inches off the ground.",
      "Raise the legs and trunk at the same time into a V position, using the arms on the ground for balance. Straighten the knees as you come up and keep the head aligned with the trunk — neither bent forward nor thrown back.",
      "Return under control to the start without dropping the legs.",
      "Repeat at a moderate cadence in the 4-count drill format (ATP 7-22.02 §5-4).",
    ],
    panels: [
      { pose: "vupStart", label: "Start — knees at 90°, head raised" },
      { pose: "vupTop", label: "Top — the V, legs and trunk raised together" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-4 (Conditioning Drill 1, exercise 2).",
  },
  {
    id: "supine-bicycle", n: 30, name: "Supine Bicycle", aliases: "Supine bicycle (Conditioning Drill 2 exercise 2); bicycle crunch (gym name)",
    category: "core", equipment: "None",
    trains: "Abdominal muscles and control of trunk rotation (ATP 7-22.02 §5-20).",
    steps: [
      "Start in the supine position with hands resting on top of the head — not behind it — hips and knees bent to 90°, head held 2–4 inches off the ground.",
      "Bring the left knee toward the chest while flexing and rotating the trunk to the left, aiming the right elbow toward the right thigh side as the right leg extends straight. (Per the ATP sequence: rotate toward the drawn-up knee and straighten the opposite leg.)",
      "Return under control to the start and pause — this is not a continuous flail to the other side.",
      "Repeat to the opposite side. Slow cadence; 5–10 repetitions (ATP 7-22.02 §5-20).",
    ],
    errors: "Pulling on the back of the head/neck — the ATP hand position is on top of the head specifically to keep the movement controlled and safe; keep the hands resting, not yanking.",
    panels: [
      { pose: "vupStart", label: "Start — hips/knees at 90°, hands on head" },
      { pose: "bicycleSide", label: "One side — knee drawn in, trunk rotated, other leg straight" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-20 (Conditioning Drill 2, exercise 2).",
  },
  {
    id: "bent-leg-body-twist", n: 31, name: "Bent-Leg Body Twist", aliases: "Bent-leg body twist (Preparation Drill exercise 9)",
    category: "core", equipment: "None",
    trains: "Trunk and hip muscles and control of trunk rotation; ATP 7-22.02 calls it a safe way to prepare for loaded trunk movements. Together with the Side Plank (entry 25), this is the library's sourced rotation-control work — the plans' generic “anti-rotation” label stays generic; no named anti-rotation press is sourced (see the library note).",
    steps: [
      "Start in the supine position with hips and knees bent to 90°, arms straight out to the sides with palms on the ground, knees and feet together.",
      "Rotate the legs to the left, letting them drop together toward the ground while the upper back and arms stay planted.",
      "Return to the start under control.",
      "Repeat to the right. Slow cadence (ATP 7-22.02 §3-12; Preparation Drill format 5–10 repetitions).",
    ],
    panels: [
      { pose: "supine90", label: "Start — thighs up, knees at 90°, arms spread" },
      { pose: "twistSide", label: "Finish — legs lowered together to one side" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-12 (Preparation Drill exercise 9).",
  },
  {
    id: "farmers-carry", n: 32, name: "Farmer's Carry", aliases: "Farmers carry; kettlebell carry (the carry leg of the Sprint-Drag-Carry); goblet carry (weight held at the chest — HPRC program variant)",
    category: "full-body", equipment: "Two heavy dumbbells or kettlebells (one per hand); a single weight at the chest for the goblet variant",
    trains: "Grip, trunk stiffness, shoulders, and walking-under-load endurance. HPRC classes the carry as a foundational pattern: carrying objects by the sides, on the back, at the chest, or across one shoulder — as in carrying a pack or ammo cans.",
    steps: [
      "Set up beside the weights, deadlift them up with a flat back (entry 20's pattern — never round the back to grab them), one in each hand at arm's length by your sides.",
      "Stand tall: chest up, shoulders back and down, trunk braced, head facing forward.",
      "Walk with controlled, even steps, keeping the weights from swinging or banging the legs and the torso from leaning.",
      "Set the weights down under control — in the Sprint-Drag-Carry the kettlebells must be placed back on the ground, not thrown (army.mil SDC instructions).",
      "Test dosage (SDC carry leg): two 40-lb kettlebells carried over a 25-m lane out and back (50 m total), stepping on or over the line at the turn.",
    ],
    errors: "Shrugging the weights up to the ears — let the arms hang long and keep the shoulders down. Leaning away from a single-side load (goblet/suitcase variants) — brace and stay vertical.",
    panels: [
      { pose: "carryStand", label: "Start — tall, weights at the sides", weights: true },
      { pose: "carryStride", label: "Mid-walk — posture tall, weights steady", weights: true },
    ],
    source: "HPRC, “Foundational Movements” (Carry section) and HPRC, “How to Train for the Army Fitness Test” (SDC carry description) — institutional; U.S. Army (army.mil), Sprint-Drag-Carry event instructions (carry leg loads and set-down rule).",
  },
  {
    id: "sprint-drag-carry", n: 33, name: "Sprint-Drag-Carry (SDC)", aliases: "SDC (Army AFT event 3)",
    category: "full-body", equipment: "90-lb sled with drag straps; two 40-lb kettlebells; 25-m lane",
    trains: "Strength, endurance, and anaerobic capacity — sprinting, casualty-drag power, lateral agility, and loaded carry in one continuous event (army.mil event description).",
    steps: [
      "Sprint: from the start line, sprint to the 25-m line, touch the ground on/over the line with hand and foot, and sprint back.",
      "Drag: grasp both strap handles of the 90-lb sled and drag it backward (walking backward, facing the sled) across the 25-m line until the entire sled crosses; turn and drag it back to the start.",
      "Lateral: side-shuffle (laterals) out to the 25-m line and back, always facing the same direction, feet not crossing — the movement of Military Movement Drill 1's Lateral exercise (ATP 7-22.02 §8-4).",
      "Carry: pick up two 40-lb kettlebells and run them to the 25-m line, step on/over the line with one foot, run back, and set the kettlebells down (do not throw them).",
      "Sprint: sprint to the 25-m line, touch hand and foot on/over the line, and sprint back through the start to finish.",
    ],
    errors: "Missing the line touches — every shuttle turn requires the prescribed hand-and-foot (or foot-only on the carry) touch on or over the line, or the grader sends you back. Standing tall on the drag — HPRC's SDC training notes and the sled's design demand a low, driven backward walk; the drag is the leg that “will really burn your quads” (HPRC), so train it with squats, lunges, and deadlifts per that guidance.",
    panels: [
      { pose: "runReady", label: "Start — sprinter's ready stance" },
      { pose: "dragLean", label: "Drag leg — leaning back, driving backward", prop: "sled" },
    ],
    source: "U.S. Army (army.mil), “Sprint-Drag-Carry” event instructions (Jan 2019, event retained into the AFT); ATP 7-22.01 (Mar 2026 ed.), Ch. 2, SDC event; HPRC, “How to Train for the Army Fitness Test” (SDC section) — institutional, for training notes.",
  },
  {
    id: "ammo-can-lift", n: 34, name: "Ammunition Can Lift", aliases: "Ammo can lift; ammunition lift (USMC CFT event 2)",
    category: "full-body", equipment: "One 30-lb ammunition can (M2A1 5.56 mm can, grip tape on the sides per the MCO equipment list)",
    trains: "Shoulder and arm pressing endurance, plus trunk stiffness under a held load — as many overhead lifts as possible in 2 minutes.",
    steps: [
      "Start holding the can sideways at shoulder height with both hands, handle facing away from you. Feet shoulder-width apart.",
      "Use proper lifting posture: head up, chest elevated, natural lumbar curve maintained.",
      "Press the can overhead until the elbows are momentarily locked out.",
      "Lower the can back to below chin level (shoulder height) under control. That completes one repetition — counters verify “below the chin, above the head, all the way through.”",
      "Repeat for max correct reps in the 2-minute event window.",
    ],
    errors: "Short reps at either end — a rep only counts when the can starts below the chin and finishes with elbows locked overhead. Losing the lumbar curve / leaning back to press — the instructional standard names head up, chest elevated, lumbar curve maintained as the proper technique.",
    conflict: "⚠ CONFLICT C9 — the bottom position: the official HQMC instructional video stresses the can returning to BELOW THE CHIN on every rep, from a shoulder-height start with the handle facing away. Some secondary summaries describe the lift as starting from the ground or from the waist — those were not used; the instructional-video/MCO version (shoulder height, below-chin return, overhead lockout, 2 minutes, 30 lb) is what this entry prints.",
    panels: [
      { pose: "ammoLow", label: "Start — can at shoulder/chin height", prop: "canLow" },
      { pose: "ammoHigh", label: "Top — can overhead, elbows locked", prop: "canHigh" },
    ],
    source: "Headquarters Marine Corps CFT instructional video transcript (information.marines.mil / DVIDS — ammo can lift section); MCO 6100.13A, Ch. 3 and equipment enclosure (30-lb M2A1 can specification).",
  },
  {
    id: "maneuver-under-fire", n: 35, name: "Maneuver Under Fire (MANUF)", aliases: "MANUF; maneuver under fire (USMC CFT event 3)",
    category: "full-body", equipment: "Course cones/markers; two 30-lb ammo cans; a dummy (practice) grenade; a partner of matched size (within ~10 lb) for the drag/carry",
    trains: "The whole combat-movement chain — sprinting, crawling, casualty movement, load carriage, and agility — performed as one timed 300-yard course in boots and utilities.",
    steps: [
      "Sprint and drop into combat crawls (high crawl and low crawl segments) as the course directs.",
      "Drag your partner (casualty drag) for the marked segment.",
      "Pick the partner up in a fireman's carry and carry them for the next segment.",
      "Run the ammo-can resupply segment carrying two 30-lb cans.",
      "Throw the dummy grenade at the target, perform the brief push-up set built into the course, and sprint the agility (zig-zag/cone) run to the finish.",
    ],
    scopeNote: "Sourced scope note: segment order and yardages sit in MCO 6100.13A Ch. 3's course diagram; the summary above follows the event components every official description agrees on (crawls, buddy drag, fireman-style carry, ammo-can resupply, grenade throw, agility run over 300 yards). Segment distances print in this app only from the MCO course layout, not from secondary CFT-prep sites — several of those were found disagreeing with each other and none was used.",
    panels: [
      { pose: "runReady", label: "Start — ready stance at the course line" },
      { pose: "dragLean", label: "Casualty drag — leaning back, dragging the partner" },
    ],
    source: "MCO 6100.13A, Ch. 3 (CFT events and course); HQMC / DVIDS, “HQMC debuts Combat Fitness Test for Marines” (300-yard shuttle with combat-related tasks, paired by size).",
  },
  {
    id: "ruck-march", n: 36, name: "Ruck March / Loaded Walk", aliases: "Ruck march; rucking; loaded march (the plans' “easy ruck” and Zone 2 ruck options); Movement to Contact is the CFT's running version — see entry 38",
    category: "full-body", equipment: "Rucksack/pack with load; the MARSOC screening standard published in the Fitness Calculators is 45 lb at 4 mph (a screening pace, not a training prescription)",
    trains: "Loaded walking endurance — legs, trunk, feet, and aerobic base under a pack; HPRC lists carrying a pack as a core use of the foundational carry pattern.",
    steps: [
      "Fit the pack so the load rides close and high on the back, hip belt snug — a load carried close to the body is more controlled (HPRC load-carriage guidance).",
      "Walk with an upright posture, natural stride, and a pace you can hold while breathing steadily; shorten the stride and lean slightly into hills rather than hunching.",
      "Build the program progressively: FM 7-22's ruck template progresses ONE factor each week — load weight, distance, speed, terrain gradient, or terrain roughness — never several at once.",
      "Do not stack long marches, endurance runs, and heavy leg strength work on consecutive days (FM 7-22).",
    ],
    errors: "Adding weight and distance in the same week — the FM's one-factor rule exists to keep progression recoverable. Letting the pack hang low and loose — refit so the load stays close to the body.",
    panels: [
      { pose: "stand", label: "Start — pack fitted high and close", prop: "pack" },
      { pose: "carryStride", label: "Mid-stride — upright, slight forward lean", prop: "pack" },
    ],
    source: "U.S. Army, FM 7-22 (Oct 2020), Ch. 7 (ruck marching principles and progression template, incl. the one-factor-per-week rule and consecutive-day caution); HPRC, “Foundational Movements” (Carry section) — institutional.",
  },
  {
    id: "timed-run", n: 37, name: "Timed Distance Run (test runs)", aliases: "1.5-mile run (Navy PRT, Coast Guard) · 2-mile run (Army AFT, Air Force PFRA) · 3-mile run (USMC PFT)",
    category: "conditioning", equipment: "Measured flat course (track or certified route); none other",
    trains: "Cardiorespiratory endurance — the scored aerobic event in every branch test in this app.",
    steps: [
      "Warm up with the service preparation work (the Army pattern is a preparation drill plus easy running before any speed work; 30:60s sessions begin with a slow jog of about a quarter mile — ATP 7-22.02 running activities).",
      "Start controlled: the first quarter of the distance should feel like the easiest quarter — every service's test is a single continuous effort for time, and early surges are repaid late.",
      "Run tall with a relaxed, quick stride, breathing rhythmically; hold form as fatigue builds rather than leaning and shuffling.",
      "Finish through the line at full effort, then keep walking for at least ~3 minutes to cool down (the Army running-activities standard after interval work; good practice after any maximal run).",
    ],
    scopeNote: "Sourced scope note: the pacing cues above are deliberately limited to what the official running-activity material supports (warm-up structure, continuous-effort format, walk-out finish). Detailed gait/mechanics coaching (foot strike, cadence numbers) is NOT in the official sources opened for the research pack and is not printed.",
    conflict: "⚠ CONFLICT C5 — corrected at this build: the Air Force / Space Force plan template previously listed a “1.5-mile run”; the current governing documents (AFMAN 36-2905, Mar 24, 2026; SPFMAN 36-2905) make the AF/SF run 2 MILES, and the plan template now says so. The Navy/Coast Guard 1.5-mile and USMC 3-mile runs are current and unchanged.",
    panels: [
      { pose: "runReady", label: "Start — relaxed ready position" },
      { pose: "runStride", label: "Finish — mid-stride at speed, tall" },
    ],
    source: "Event formats and distances per the governing documents in the Fitness Calculators pack (ATP 7-22.01; MCO 6100.13A; Navy PRP Guide-5A; AFMAN 36-2905); session structure per U.S. Army running activities in ATP 7-22.02.",
  },
  {
    id: "movement-to-contact", n: 38, name: "Movement to Contact (880-yard run)", aliases: "MTC (USMC CFT event 1)",
    category: "conditioning", equipment: "Measured 880-yard course with a wide turnaround",
    trains: "A half-mile sprint effort — anaerobic/aerobic power simulating moving to contact in boots and utilities.",
    steps: [
      "Run the measured 880-yard course for time, out and around the wide turnaround and back (course layout per MCO 6100.13A Ch. 3).",
      "Pace it as a sustained sprint: hard from the start but controlled enough to hold speed through the turn and the return leg.",
    ],
    panels: [
      { pose: "runReady", label: "Start — ready at the line, in boots and utilities" },
      { pose: "sprintLean", label: "Finish — full running speed on the return leg" },
    ],
    source: "MCO 6100.13A, Ch. 3 (880-yard sprint; altitude tables in MCO Tables 3-6/3-7 adjust times at ≥4,500 ft).",
  },
  {
    id: "hamr", n: 39, name: "20-Metre HAMR (High Aerobic Multi-Shuttle Run)", aliases: "HAMR; 20-m shuttle run; beep test (colloquial — not the official name)",
    category: "conditioning", equipment: "20-m measured lane; audio track with timed beeps (the official HAMR recording)",
    trains: "Cardiorespiratory fitness — the Air Force PFRA / Space Force HPA alternative to the distance run.",
    steps: [
      "Start behind one 20-m line. On the beep, run to the far line and touch it with a foot before the next beep.",
      "Turn and run back on the next beep. Each shuttle is 20 m; the beeps get faster as the levels progress.",
      "Continue until you cannot reach the line before the beep twice in a row (per the test's administration rules) — your completed shuttles are the score.",
    ],
    panels: [
      { pose: "runReady", label: "Start — behind the line, waiting for the beep" },
      { pose: "turnCrouch", label: "Turn — foot on the line, already rotating back" },
    ],
    source: "AFMAN 36-2905 (Mar 24, 2026) (20-m HAMR as the cardiorespiratory component option) and SPFMAN 36-2905 (Space Force HPA).",
  },
  {
    id: "sprint-intervals", n: 40, name: "30:60s and 60:120s (sprint intervals)", aliases: "30:60s; 60:120s; sprint-walk intervals (Army running activities)",
    category: "conditioning", equipment: "Track or measured running surface",
    trains: "Anaerobic endurance and speed — “timed sprint intervals at moderate to maximum speed” (Army task standard 805P-COM-1117); HPRC uses the same drills as its example of anaerobic-endurance training with a 1:2 work-to-rest ratio.",
    steps: [
      "Warm up with a slow jog of about a quarter mile.",
      "30:60 — sprint for 30 seconds (work), then walk for 60 seconds (recovery). That work-plus-recovery is one repetition. Work-to-recovery ratio is 1:2.",
      "60:120 — the same pattern doubled: sprint 60 seconds, walk 120 seconds.",
      "Repeat for the scheduled number of repetitions (FM 7-22 schedules progress repetitions from 5 toward 10 across a training phase), then walk at least 3 minutes to finish.",
    ],
    panels: [
      { pose: "runStride", label: "Start — easy warm-up jog" },
      { pose: "sprintLean", label: "Work interval — sprinting near maximum" },
    ],
    source: "U.S. Army task standard 805P-COM-1117, “Perform 30:60s and 60:120s” (citing FM 7-22 and ATP 7-22.02); FM 7-22 (Oct 2020), Ch. 14 (repetition progression 5→10); HPRC, “What is anaerobic endurance and how do you train it?” — institutional, for the 1:2 ratio framing.",
  },
  {
    id: "shuttle-sprint", n: 41, name: "Shuttle Sprint / 300-Yard Shuttle Run", aliases: "Shuttle sprint (MMD1 exercise 3); 300-yard shuttle run (300 SR)",
    category: "conditioning", equipment: "25-m (or 25-yd) measured course with turn lines",
    trains: "Acceleration, deceleration, and change of direction — the pattern the SDC's sprint legs and the CFT's agility run demand.",
    steps: [
      "Start in a staggered straddle stance — right foot forward with its heel even with the left toes, head up, knees slightly bent, opposite arm forward.",
      "Run quickly to the 25-m turnaround point.",
      "Plant the outside foot, bend and squat to touch the ground with the hand on the plant side, and turn (clockwise on the first turn).",
      "Run back, plant the other foot, touch the ground with the other hand, and run out again, accelerating to maximum speed through the finish.",
      "The 300-yard version repeats the same shuttle pattern for six 50-yard repetitions (Army running activities).",
    ],
    panels: [
      { pose: "runReady", label: "Start — staggered ready stance" },
      { pose: "turnCrouch", label: "Turn — low, hand touching the ground" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 8 §8-5 (Military Movement Drill 1, exercise 3); 300-yard format per Army running activities (ATP 7-22.02).",
  },
  {
    id: "hill-repeats", n: 42, name: "Hill Repeats", aliases: "Hill repeats (Army running activity)",
    category: "conditioning", equipment: "A moderate hill",
    trains: "Anaerobic capacity and running power — the Army's ACFT training guide lists hill repeats as a top-three 2-mile-run training activity, and FM 7-22 progresses them alongside 30:60s/60:120s (repetitions from 5 toward 10).",
    steps: [
      "Warm up on flat ground first.",
      "Run up the hill at a hard, controlled effort, driving the arms and knees; keep the effort strong rather than sprinting all-out on early reps.",
      "Jog or walk back down to recover fully enough to repeat with good form.",
      "Repeat for the scheduled reps; walk to cool down.",
    ],
    scopeNote: "Sourced scope note: official material names hill repeats, their purpose, and their repetition progression, but the copies opened for the research pack do not fix a hill length/gradient or rep duration — none is printed. Program distance/gradient conservatively and progress by the one-factor principle.",
    panels: [
      { pose: "runReady", label: "Start — at the foot of the hill", prop: "slope" },
      { pose: "runStride", label: "Finish — driving uphill, leaning into the slope", prop: "slope" },
    ],
    source: "U.S. Army Physical Fitness School, ACFT Training Quick Reference Guide (hill repeats under 2MR training); FM 7-22 (Oct 2020), Ch. 14 (hill repeat scheduling/progression).",
  },
  {
    id: "mountain-climber", n: 43, name: "Mountain Climber", aliases: "Mountain climber (Conditioning Drill 1 exercise 3)",
    category: "conditioning", equipment: "None",
    trains: "The ability to power quickly out of the front leaning rest into a run or crouch run; shoulder, trunk, and hip drive (ATP 7-22.02 §5-5).",
    steps: [
      "Start in the front leaning rest with the left foot drawn up below the chest, left knee between the arms, right leg extended back.",
      "Shift the body weight onto the hands and switch the feet in the air — left leg extends back as the right knee drives up between the arms.",
      "Switch back to the start. Keep the back straight and stop the hips from bouncing up and down.",
      "Repeat, alternating, at a moderate cadence in the 4-count drill format.",
    ],
    panels: [
      { pose: "mountainClimbA", label: "Start — one knee up between the arms" },
      { pose: "plankTop", label: "Switch — legs swapped mid-movement" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-5 (Conditioning Drill 1, exercise 3).",
  },
  {
    id: "power-jump", n: 44, name: "Power Jump", aliases: "Power jump (Conditioning Drill 1 exercise 1)",
    category: "conditioning", equipment: "None",
    trains: "Explosive leg power with correct jumping and landing skill, balance, and coordination (ATP 7-22.02 §5-3).",
    steps: [
      "Start in the straddle stance, hands on hips.",
      "Squat with the heels flat, rounding the spine forward and reaching down to place the palms on the ground, gaze forward.",
      "Jump forcefully off the ground, swinging the arms up and overhead, palms facing inward, to unweight the body and add height.",
      "Land softly with feet directed forward, shoulder-width apart, back into the squat-and-reach position.",
      "Stand back to the start. Moderate cadence, 4-count drill format.",
    ],
    errors: "Landing stiff or with knees collapsing — the exercise exists to teach landing: land softly on flat feet in the squat position and absorb through the legs.",
    panels: [
      { pose: "standWideHips", label: "Start — straddle stance, hands on hips" },
      { pose: "powerJumpBottom", label: "Bottom — squat, palms on the ground (jump follows)" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-3 (Conditioning Drill 1, exercise 1).",
  },
  {
    id: "row-2000", n: 45, name: "2,000-Metre Row (ergometer)", aliases: "2-km row (Navy PRT alternate cardio); 5,000-m row (USMC PFT alternate cardio event — different distance, same machine)",
    category: "conditioning", equipment: "Indoor rowing ergometer (Concept2-type, as specified in the services' guides)",
    trains: "Cardiorespiratory endurance as a low-impact alternative to running — a scored Navy PRT cardio option (2 km) and the USMC PFT's alternate cardio event (5,000 m).",
    steps: [
      "Set up on the ergometer with feet strapped, and begin rowing at the start command; the event is a continuous effort for the full distance for time.",
      "Row continuously without stopping until the distance is complete; your finish time is the score.",
    ],
    scopeNote: "Sourced scope note: the Navy's Guide 5 publishes the row as a PRT modality with its scoring tables (Guide-5A), and the USMC publishes the 5,000-m row as its alternate event — but a stroke-by-stroke technique description was NOT in the official text opened for the research pack, so detailed stroke mechanics (leg drive sequence, handle path) are deliberately not printed here, and generic gym rowing cues are not presented as the Navy/USMC standard. The diagram panels describe the machine's start/finish postures only.",
    panels: [
      { pose: "ergStart", label: "Start — knees bent, arms reaching forward", prop: "erg" },
      { pose: "ergFinish", label: "Finish — legs extended, handle at lower chest", prop: "erg" },
    ],
    source: "U.S. Navy, PRP Guide 5 / Guide-5A (Dec 2025) (2-km row PRT modality and tables); MCO 6100.13A (5,000-m row alternate event).",
  },
  {
    id: "bend-and-reach", n: 46, name: "Bend and Reach", aliases: "Bend and reach (Preparation Drill exercise 1)",
    category: "mobility", equipment: "None",
    trains: "Trunk, hip, and knee flexion with shoulder extension — ATP 7-22.02 says it prepares Soldiers for squatting, rolling, and climbing. It opens the Preparation Drill. The plans' generic “mobility flow” is assembled from entries 46–51 — no flow entry of its own is sourced.",
    steps: [
      "Start in the straddle stance with arms overhead, elbows fully extended, palms facing inward, fingers and thumbs extended and joined.",
      "Drop into a partial squat with the heels staying on the ground, rounding the spine to reach the straight arms as far as possible back between the legs; tuck the chin and look to the rear.",
      "Return to the overhead start.",
      "Repeat at a slow cadence (Preparation Drill format, 5–10 repetitions).",
    ],
    panels: [
      { pose: "armsOverheadWide", label: "Start — arms overhead, palms inward" },
      { pose: "bendReachDown", label: "Bottom — arms reaching back between the legs" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-3 (Preparation Drill exercise 1).",
  },
  {
    id: "squat-bender-ex", n: 47, name: "Squat Bender", aliases: "Squat bender (Preparation Drill exercise 5)",
    category: "mobility", equipment: "None",
    trains: "Strength, endurance, and flexibility in the lower back and thighs; ATP 7-22.02 says it prepares Soldiers to use proper lifting technique for heavy-lift events.",
    steps: [
      "Start in the straddle stance, hands on hips.",
      "Squat while leaning slightly forward from the waist, head up, extending both arms in front of the body parallel to the ground, palms facing inward.",
      "Return to the start.",
      "With the knees slightly bent, bend forward at the waist, head in line with the spine and spine straight, reaching toward the ground until a stretch is felt in the backs of the thighs.",
      "Return to the start. Slow cadence; 5–10 repetitions.",
    ],
    panels: [
      { pose: "standWideHips", label: "Start — straddle stance, hands on hips" },
      { pose: "squatParallel", label: "Position A — squat, arms forward" },
      { pose: "hinge", label: "Position B — hinge, reaching toward the ground" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-8 (Preparation Drill exercise 5).",
  },
  {
    id: "windmill-ex", n: 48, name: "Windmill", aliases: "Windmill (Preparation Drill exercise 6)",
    category: "mobility", equipment: "None",
    trains: "The ability to bend and rotate the trunk together safely — spine flexibility and shoulder-girdle coordination (ATP 7-22.02 §3-9).",
    steps: [
      "Start in the straddle stance with arms straight out to the sides, palms down, fingers extended and joined.",
      "Bend the hips and knees while rotating the trunk to the left; reach down to touch the outside of the left foot with the right hand and look to the rear. The left arm pulls rearward so the arms stay in one line across the shoulders.",
      "Return to the start.",
      "Repeat to the right. Slow cadence; 5–10 repetitions.",
    ],
    panels: [
      { pose: "armsT", label: "Start — arms out in a T" },
      { pose: "windmillDown", label: "Bottom — hand to outside of opposite foot" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 3 §3-9 (Preparation Drill exercise 6).",
  },
  {
    id: "overhead-arm-pull-ex", n: 49, name: "Overhead Arm Pull", aliases: "Overhead arm pull (Recovery Drill exercise 1)",
    category: "mobility", equipment: "None",
    trains: "Flexibility of the arms, shoulders, and trunk — specifically a stretch in the triceps and flank (ATP 7-22.02 §16-3).",
    steps: [
      "Start in the straddle stance, hands on hips.",
      "On “Ready, Stretch”: raise the left arm overhead, grasp just above the left elbow with the right hand, and pull to the right, leaning the body to the right until a stretch is felt in the left triceps and side. Hold 20–30 seconds.",
      "Return to the start, then change position and repeat on the right side, holding 20–30 seconds.",
    ],
    panels: [
      { pose: "standWideHips", label: "Start — straddle stance, hands on hips" },
      { pose: "overheadPull", label: "The stretch — elbow pulled across, trunk leaning" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 16 §16-3 (Recovery Drill exercise 1).",
  },
  {
    id: "single-leg-over-ex", n: 50, name: "Single Leg Over", aliases: "Single leg over (Hip Stability Drill exercise 5)",
    category: "mobility", equipment: "None",
    trains: "Flexibility of the hip and low back (ATP 7-22.02 §4-7).",
    steps: [
      "Start in the supine position: lying on the back, arms straight out to the sides on the ground with palms down, feet together on the ground, head on the ground.",
      "On “Ready, Stretch”: bend the left knee to 90° across and over the right leg, and grasp the outside of the left knee with the right hand, pulling it toward the right. Keep the left shoulder and arm on the ground. Hold 20–30 seconds.",
      "Return to the start, then change position and repeat with the right leg to the left, holding 20–30 seconds.",
    ],
    panels: [
      { pose: "supineArmsSides", label: "Start — supine, arms spread" },
      { pose: "singleLegOver", label: "The stretch — knee pulled across the body" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 4 §4-7 (Hip Stability Drill exercise 5).",
  },
  {
    id: "swimmer-ex", n: 51, name: "Swimmer", aliases: "Swimmer (Conditioning Drill 2 exercise 4)",
    category: "mobility", equipment: "None",
    trains: "The back of the shoulder, neck, spine, hips, and legs (the posterior chain) — ATP 7-22.02 links it to low crawling, prone firing, and swimming.",
    steps: [
      "Start in the prone position: lying face-down, arms extended overhead with palms down on the ground, toes pointed to the rear.",
      "Raise the left arm and right leg off the ground while lifting the head and arching the back slightly, gaze parallel to the ground (“down-range”).",
      "Return to the start.",
      "Repeat with the right arm and left leg. Slow cadence; 5–10 repetitions.",
    ],
    panels: [
      { pose: "prone", label: "Start — prone, arms overhead" },
      { pose: "swimmer", label: "Finish — opposite arm and leg raised, back arched" },
    ],
    source: "U.S. Army, ATP 7-22.02 (Oct 2020), Ch. 5 §5-22 (Conditioning Drill 2, exercise 4).",
  },
);

/** Library-wide safety framing, from the exercises pack. */
export const EXERCISE_SAFETY: readonly string[] = [
  "Stop on sharp pain, chest pain, dizziness, or numbness — end the set, do not push through. Muscle effort and breathing hard are normal; joint pain is not.",
  "Learn the movement unloaded or at the easiest scale first; add load or speed only when the easier version is clean for every rep.",
  "Progress one thing at a time (load, reps, or speed — not all three in the same week). FM 7-22's ruck-marching guidance states the same principle for loaded marching.",
  "Test events are maximal efforts by design. In training, most practice should be sub-maximal — the plans program event practice at 60–90% effort, and this library does not override that.",
  "This library is a training aid, not medical care. A flagged injury or limitation means get checked, not substitute-and-push-through.",
];

/** Plan deep-linking (the pack's Coverage Summary mapping): plan-item
 * phrases that open a library card. Patterns match case-insensitively
 * as substrings; longest patterns win. Items the pack flagged stay
 * unlinked on purpose — “dead bugs” (F1), “anti-rotation” keeps its
 * generic label but links to the sourced rotation-control work (F2),
 * “arms / delts / calves accessories” (F4), and swim work (F8). */
export const PLAN_LINKS: readonly { pattern: string; exerciseId: string }[] = [
  { pattern: "cross-leg reverse crunch", exerciseId: "cross-leg-reverse-crunch" },
  { pattern: "hand-release push-up", exerciseId: "hand-release-push-up" },
  { pattern: "movement under fire", exerciseId: "maneuver-under-fire" },
  { pattern: "sprint-drag-carry", exerciseId: "sprint-drag-carry" },
  { pattern: "ammo can lifts", exerciseId: "ammo-can-lift" },
  { pattern: "push-up variations", exerciseId: "standard-push-up" },
  { pattern: "single-leg hinges", exerciseId: "single-leg-deadlift" },
  { pattern: "880-yard run", exerciseId: "movement-to-contact" },
  { pattern: "deadlift (mdl)", exerciseId: "hex-deadlift" },
  { pattern: "farmer carries", exerciseId: "farmers-carry" },
  { pattern: "split squats", exerciseId: "split-squat" },
  { pattern: "anti-rotation", exerciseId: "bent-leg-body-twist" },
  { pattern: "side planks", exerciseId: "side-plank" },
  { pattern: "squats/hinges", exerciseId: "air-squat" },
  { pattern: "mobility flow", exerciseId: "bend-and-reach" },
  { pattern: "mobility circuit", exerciseId: "bend-and-reach" },
  { pattern: "full mobility", exerciseId: "bend-and-reach" },
  { pattern: "zone 2 run/ruck", exerciseId: "ruck-march" },
  { pattern: "pull-ups / push-ups", exerciseId: "pull-up" },
  { pattern: "pull-ups", exerciseId: "pull-up" },
  { pattern: "push-ups", exerciseId: "standard-push-up" },
  { pattern: "sit-ups", exerciseId: "sit-up" },
  { pattern: "3-mile run", exerciseId: "timed-run" },
  { pattern: "2-mile run", exerciseId: "timed-run" },
  { pattern: "1.5-mile run", exerciseId: "timed-run" },
  { pattern: "forearm plank", exerciseId: "forearm-plank" },
  { pattern: "planks", exerciseId: "forearm-plank" },
  { pattern: "plank", exerciseId: "forearm-plank" },
  { pattern: "presses", exerciseId: "db-overhead-press" },
  { pattern: "hangs", exerciseId: "dead-hang" },
  { pattern: "strides", exerciseId: "sprint-intervals" },
  { pattern: "intervals", exerciseId: "sprint-intervals" },
  { pattern: "carries", exerciseId: "farmers-carry" },
  { pattern: "rower", exerciseId: "row-2000" },
  { pattern: "hills", exerciseId: "hill-repeats" },
  { pattern: "ruck", exerciseId: "ruck-march" },
  { pattern: "rows", exerciseId: "bent-over-row" },
];

export function exerciseById(id: string): Exercise | undefined {
  return EXERCISES.find((e) => e.id === id);
}
