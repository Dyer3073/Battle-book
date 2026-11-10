// Warm-Up / Cool-Down + Stretching — static editorial data transcribed
// from the Fitness Depth research pack (~/workspace/military-app/
// fitness-depth/warmup-stretching.md, Nov 9, 2026).
//
// Part A ships the official sequences AS sequences, in official
// order: Army Preparation Drill (10, DYNAMIC as a whole), Army
// Recovery Drill (8, STATIC as a whole), USMC Daily 16 Warm-Up (8),
// USMC Daily 16 Stretching (16 — held stretches tagged STATIC per
// HPRC/MCRP definitions; the source's own "Dynamic Stretching
// Exercises" heading is shown transparently, conflict C-2, never used
// as a timing instruction), and the Navy Top 12 (in the Stretching
// data below, in official Guide 13 order). The Daily 16 cool-down is
// the SAME set as its warm-up by the program's own instruction — a
// rule, not a second list. RAMP ships as a framework with NO invented
// exercise list and no diagrams (pack A3a). The Navy dynamic warm-up
// list is NOT reconstructed (flag F-1 — principles/durations only);
// no sequence is attributed to MCO 6100.14 itself (F-2); no Air Force
// sequence is presented (F-6); no neck circles anywhere (F-7).
//
// Part B ships exactly 34 stretches (9 DYNAMIC / 25 STATIC). The Navy
// standing hip-flexor form stays note/conflict material (flag F-8) —
// it is NOT a 35th stretch. Same-name-different-position items
// (Groin, Calf, Triceps, Chest — conflicts C-6–C-9) stay SEPARATE
// cards with separate diagrams, never merged. Hold times print
// per-source attributed, never blended (conflict C-3).

import type { DiagramPanelSpec } from "./ExerciseDiagram";

export type DrillEntry = {
  id: string;
  code: string;
  name: string;
  howto: string;
  purpose: string;
  note?: string;
  panels: readonly DiagramPanelSpec[];
  source: string;
};

export type DrillSequence = {
  key: string;
  title: string;
  tag: "DYNAMIC" | "STATIC";
  tagLine: string;
  dose: string;
  intro: string;
  source: string;
  entries: readonly DrillEntry[];
};

export const WARMUP_PRINCIPLES: { heading: string; lines: readonly string[] }[] = [
  {
    heading: "Why warm up",
    lines: [
      "FM 7-22, para 6-23 (Preparation): preparation uses the Preparation Drill, stability drills, military movement drills, and other dynamic warm-up activity — body weight, on-ground and off-ground (jumping) activity, and all three planes of movement, at a cadence that allows full range of movement, precise execution, and a gradual increase in heart rate and perceived exertion.",
      "MCRP 7-20C.1 (Marine Corps): a dynamic warm-up prepares the body to respond to the demands about to be placed on it by increasing muscle temperature and priming the nervous system's motor functions. Going straight into moderate- or high-intensity activity without preparation increases injury risk.",
      "USMC Daily 16 Program: the warm-up exercises gradually distribute blood flow to the muscles, preparing the cardiovascular and musculoskeletal systems. The increased blood flow produces a warming effect, increasing the elasticity of muscles and connective tissues, which the program states is believed to reduce injury risk. (The source's own hedge: “believed to.”)",
      "[HPRC] “Why you should warm up before exercise”: raising muscle temperature improves the ability to use creatine phosphate and oxygen to produce energy and helps muscles fire faster; warm-ups also improve muscle activation and, when designed as injury-prevention programmes, neuromuscular control and balance. HPRC's bottom line: do some type of active warm-up to get blood flowing and muscles warm before any physical activity.",
      "Navy Guide 5 / 5A (PRT): leaders must lead a dynamic warm-up at the start of PRT events (5–10 minutes in the Feb 2022 Guide 5; the Dec 2025 Guide 5A requires the standardized PRT warm-up in its Appendix A). The warm-up “is not designed to tire Sailors.”",
    ],
  },
  {
    heading: "Why cool down",
    lines: [
      "FM 7-22, para 6-26 (Recovery): recovery includes walking after running activity and then the stretches of the Recovery Drill, or checking for joint stiffness and soreness (PMCS). Recovery in the manual is broader than the drill alone — it also includes rest intervals between exercises and time between sessions.",
      "MCRP 7-20C.1: the purpose of the cool-down is to gradually return the body to its resting state and prepare it for the next session. Gradually decreasing intensity helps muscles recover from training stress and gives heart rate and breathing time to return safely toward normal.",
      "MCRP 7-20C.1, program structure: a program should include a dynamic warm-up before activity and a cool-down “primarily composed of static stretching exercises to help increase flexibility and improve recovery.”",
      "Navy Guide 5 / 5A: at the end of the PRT, Sailors must take part in a cool-down to let heart rate decline gradually — at least 10 minutes — and without one Sailors may become dizzy or light-headed. Guide 5A directs leaders to Guide 9 for the standard stretches (the Navy 12) to be done during the cool-down before members are released.",
      "USMC Daily 16 Program: the cool-down exercises — the same exercises used in the warm-up, in that program — allow the body to gradually return to its pre-exercise state.",
    ],
  },
  {
    heading: "Session shape",
    lines: [
      "FM 7-22, para 6-22: exercise order in a session is preparation first, then the main activity, then recovery. As an example only, the manual gives a 1:1 illustration for a hypertrophy session — in a one-hour session, 15 minutes of preparation, 30 minutes of main activity, 15 minutes of recovery. It is presented as an example, not a universal prescription.",
    ],
  },
];

export const RAMP_FRAMEWORK = {
  title: "Marine Corps RAMP — a framework, not a fixed list",
  intro:
    "The Marine Corps does not publish one fixed, named warm-up sequence in its current fitness publication the way the Army publishes the Preparation Drill. MCRP 7-20C.1 (11 Apr 2025) directs Marines to plan a dynamic warm-up with the mnemonic RAMP, phased by its Table 5-1. There is no fixed exercise list to capture — inventing one would break the source standard, so none is given, and the phases carry no diagrams: they are planning phases, not body positions.",
  ramp: [
    { k: "R — Raise", v: "Elevate body temperature, heart rate, respiration, blood flow, and mobility." },
    { k: "A — Activate and Mobilize", v: "Activate muscles and mobilize joints through dynamic flexibility and mobility drills whose movement patterns reflect the upcoming activity." },
    { k: "P — Potentiation", v: "Increase the speed of neural impulses from the brain to the working muscle so contractions can be performed (the publication's third element)." },
  ],
  phases: [
    { k: "Phase 1 — General Mobility", v: "Increases blood flow; moves joints through ranges of motion; work at low intensity." },
    { k: "Phase 2 — Muscle Activation", v: "Isolated movements to stimulate specific muscles." },
    { k: "Phase 3 — Transit Mobility", v: "Move through specific ranges of motion over a set distance; reinforce athletic movement; increase dynamic flexibility; increase to moderate intensity." },
    { k: "Phase 4 — Dynamic Mobility", v: "Move joints through rapid ranges of motion in multiple directions; intensity should be nearing 100 percent." },
  ],
  cooldown:
    "Marine cool-down position (MCRP 7-20C.1): include a cool-down in any physical training and gradually decrease intensity. For flexibility work, the publication's static-stretching method is: hold the end range-of-motion position for a minimum of 30 seconds, two to three times; do not force a stretch too far, forcefully, or on a muscle that is not sufficiently warm; perform the exercises within 5–10 minutes after training, at the end of the cool-down phase. That dosage differs from the Army, Navy, and Daily 16 hold times — all four print attributed in this app, never merged.",
  note: "No fixed sequence was found in MCO 6100.14 itself — the order is the Marine Corps Physical Fitness Program order; the detailed how-to guidance is in MCRP 7-20C.1, issued under that program. Nothing in this app attributes a sequence to MCO 6100.14.",
  source: "MCRP 7-20C.1, Marine Corps Physical Fitness (11 Apr 2025) — RAMP and Table 5-1; static-stretching method.",
};

export const NAVY_GUIDANCE = {
  title: "Navy — warm-up / cool-down guidance",
  lines: [
    "Warm-up (current PRT guidance): a 5–10 minute dynamic warm-up led by the CFL/ACFL, or the standardized PRT warm-up (Guide 5A, Appendix A), at the start of PRT events. For command PT, Guide 13 directs: start with a 5–10 minute dynamic warm-up; after a standardized warm-up, give individuals 5 minutes for individual warm-up and stretching as needed.",
    "Cool-down (current PRT guidance): at least 10 minutes at the end of the PRT (Guide 5 / 5A), walking as needed — Guide 13's PRT sequence specifies walking 5–10 minutes as a cool-down after the run, then taking all members through the flexibility exercises. Guide 5A points to the Navy 12 stretches in Guide 9 for the cool-down.",
    "Command PT session shape (Guide 13): end the session with a cool-down and stretches for 5–10 minutes.",
    "The Navy's named stretch set is the Top 12 Stretches in Guide 13 — they are in the Stretching section in official order and form the Navy cool-down set in the sequences here.",
  ],
  flag: "⚠ NOT RECONSTRUCTED (research flag F-1): the illustrated dynamic warm-up exercise list in Guide 13 (including the standardized PRT warm-up and the Dynamic Exercise Quick Reference Guide) was not text-verifiable to this app's source standard, so only the principles and durations above are printed — the list itself is not rebuilt from secondary summaries.",
  conflict: "⚠ CONFLICT C-5 — cool-down duration: Navy Guide 5 (2022) / 5A (2025) require at least 10 minutes after the PRT; Guide 13's command-PT rule is 5–10 minutes; the older Navy Pre-Entry Plan says 3–5 minutes of light-to-moderate activity. All values stand as attributed.",
  source: "Navy Guide 5 (Feb 2022) and Guide 5A (Dec 2025), Physical Readiness Test; Guide 13 (Aug 2019), Command Fitness Guide — Command/Unit PT and FEP.",
};

const ATP = "U.S. Army, ATP 7-22.02 (Oct 2020)";
const D16 = "USMC Daily 16 Program";

export const SEQUENCES: DrillSequence[] = [
  {
    key: "pd",
    title: "Army Preparation Drill — the official warm-up",
    tag: "DYNAMIC",
    tagLine: "Tagged DYNAMIC as a whole — every exercise is performed as repetitions, with no held end position.",
    dose: "Dose as sourced: 5–10 repetitions of each exercise (FM 7-22 reconditioning table and ATP 7-22.02 exercise descriptions). Cadence is slow except where noted as moderate.",
    intro: "FM 7-22 Table 6-2 lists “Preparation Drill (10)”; ATP 7-22.02, Chapter 3, para 3-1 names all ten in order. The drill's stated intent is to decrease the likelihood of a musculoskeletal injury during more rigorous training such as the ACFT. Several of these movements also have full cards in the Exercise Library.",
    source: "FM 7-22, Table 6-2; ATP 7-22.02, Ch. 3.",
    entries: [
      { id: "pd-1", code: "PD-1", name: "Bend and Reach", howto: "Stand with feet wide and both arms straight overhead. Drop into a partial squat, heels staying on the ground, round the back and reach both arms back between the legs, tucking the chin and looking behind you. Stand back up to arms overhead. Repeat.", purpose: "By bending the trunk, hips, and knees and reaching the shoulders overhead, it prepares the Soldier for squatting, rolling, and climbing.", panels: [{ pose: "armsOverheadWide", label: "Start — arms straight overhead" }, { pose: "bendReachDown", label: "Finish — partial squat, arms back between legs" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 1).` },
      { id: "pd-2", code: "PD-2", name: "Rear Lunge", howto: "Stand with feet wide, hands on hips. Take a long step straight backward with one leg, landing on the ball of that foot with the heel raised, and lower until a stretch is felt in the front of that hip and thigh. Return to the start, then repeat with the other leg.", purpose: "Promotes flexibility, strength, and balance in the hip and leg; prepares the Soldier for taking cover and for kneeling firing positions.", panels: [{ pose: "standWideHips", label: "Start — feet wide, hands on hips" }, { pose: "lunge", label: "Finish — long step back, ball of foot down" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 2).` },
      { id: "pd-3", code: "PD-3", name: "High Jumper", howto: "Start leaning forward from the waist with knees bent and arms back. Swing the arms forward to shoulder height and hop a few inches up; land softly on the balls of the feet and return to the lean. Then swing the arms vigorously overhead and jump forcefully straight up; land softly the same way. Alternate the small hop and the full jump. Moderate cadence.", purpose: "Promotes correct jumping, landing, balance, and coordination, and prepares the Soldier to build explosive strength.", panels: [{ pose: "highJumperCrouch", label: "Start — leaning, knees bent, arms back" }, { pose: "jumpAir", label: "Finish — fully extended in the air, arms overhead" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 3).` },
      { id: "pd-4", code: "PD-4", name: "Rower", howto: "Lie on your back with legs straight together, feet pointing up, arms overhead on the ground, head just off the ground. Sit up in one motion, bending hips and knees and swinging the arms forward until they are parallel to the ground, ending seated with feet flat and knees between the arms. Lie back down under control. Repeat.", purpose: "Improves abdominal strength and whole-body coordination; prepares the Soldier to move from lying to sitting and for Conditioning and Climbing Drill exercises.", panels: [{ pose: "supine", label: "Start — supine, arms overhead" }, { pose: "rowerTop", label: "Finish — seated, knees between the arms" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 4).` },
      { id: "pd-5", code: "PD-5", name: "Squat Bender", howto: "Stand with feet wide, hands on hips. First movement: squat down leaning slightly forward, head up, and bring both arms forward to parallel with the ground; stand back up. Second movement: with knees slightly bent, hinge forward at the waist with a straight back and reach toward the ground until a stretch is felt in the back of the thighs; stand back up. The two movements alternate inside each repetition.", purpose: "Develops strength, endurance, and flexibility in the lower back and thighs; prepares Soldiers to use proper lifting technique for heavy lifts in training and testing.", panels: [{ pose: "standWideHips", label: "Start — feet wide, hands on hips" }, { pose: "squatParallel", label: "Position A — squat, arms forward" }, { pose: "hinge", label: "Position B — hinge, reaching down" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 5).` },
      { id: "pd-6", code: "PD-6", name: "Windmill", howto: "Stand with feet wide and arms straight out to the sides at shoulder height. Bend at the hips and knees while rotating the trunk to one side, reaching the opposite hand down to touch the outside of that foot and looking to the rear; the other arm stays in line across the shoulders, pointing back. Return to the start, then repeat to the other side.", purpose: "Develops the ability to bend and rotate the trunk safely at the same time; requires spinal flexibility and shoulder-girdle coordination, and prepares Soldiers for training, testing, and combat tasks that combine those movements.", panels: [{ pose: "armsT", label: "Start — arms out in a T" }, { pose: "windmillDown", label: "Finish — hand to outside of opposite foot" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 6).` },
      { id: "pd-7", code: "PD-7", name: "Forward Lunge", howto: "Stand with feet wide, hands on hips. Step forward with one leg so its heel lands just ahead of where the back foot was, and bend hips and knees into a forward lunge, back straight, eyes forward, feet staying in their wide tracks. Push back to the start, then repeat with the other leg.", purpose: "Develops balance and leg strength; prepares Soldiers to use proper movement technique for lifts such as a litter carry.", panels: [{ pose: "standWideHips", label: "Start — feet wide, hands on hips" }, { pose: "lunge", label: "Finish — long forward lunge, torso upright" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 7).` },
      { id: "pd-8", code: "PD-8", name: "Prone Row", howto: "Lie face-down with arms extended overhead just off the ground, palms down, toes pointing back, feet together on the ground. Raise the head and chest slightly and pull both arms back toward the shoulders, making fists as the hands come back. Return the arms forward without letting them rest on the ground. Repeat.", purpose: "Develops strength of the neck, upper back, and shoulders; prepares Soldiers to fire from the prone position and to tolerate the weight of helmet and body armour across the shoulders and neck.", panels: [{ pose: "prone", label: "Start — prone, arms overhead hovering" }, { pose: "proneRowDone", label: "Finish — fists pulled back to the shoulders" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 8).` },
      { id: "pd-9", code: "PD-9", name: "Bent-Leg Body Twist", howto: "Lie on your back with hips and knees bent to 90 degrees, knees and feet together, arms straight out to the sides with palms on the ground. Rotate both legs together to one side, letting them drop toward the ground while the upper back and arms stay down. Return to the centre, then rotate to the other side.", purpose: "Strengthens the trunk and hip muscles while promoting control of trunk rotation; a safe way to prepare for loaded trunk movements.", panels: [{ pose: "supine90", label: "Start — thighs up, knees at 90°" }, { pose: "twistSide", label: "Finish — legs lowered together to one side" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 9).` },
      { id: "pd-10", code: "PD-10", name: "Push-Up (Preparation Drill form)", howto: "Start in a front leaning rest: hands directly under the shoulders, fingers spread, feet together, body in one straight line from head to heels. Bend the elbows and lower the body until the upper arms are parallel to the ground, then push back up. Moderate cadence.", purpose: "Strengthens the chest, shoulders, arms, and trunk; prepares Soldiers for the vigorous pushing motions required in training, testing, and combat tasks.", panels: [{ pose: "plankTop", label: "Start — front leaning rest" }, { pose: "plankBottom", label: "Finish — upper arms parallel to the ground" }], source: `${ATP}, Ch. 3 (Preparation Drill exercise 10).` },
    ],
  },
  {
    key: "rd",
    title: "Army Recovery Drill — the official cool-down",
    tag: "STATIC",
    tagLine: "Tagged STATIC as a whole — every exercise is a held stretch. This is the Army's cool-down, performed after the main activity.",
    dose: "Dose as sourced: hold each position 20–30 seconds (ATP 7-22.02, each exercise). Change sides where the exercise is one-sided and repeat the hold.",
    intro: "FM 7-22 Table 6-2 lists “Recovery Drill (8)”; ATP 7-22.02, Chapter 16 lists eight in order. The drill is movements requiring structural strength, stability, flexibility, and mobility, performed from sitting, standing, prone, and supine positions. (Older Army material lists five — the current eight ship here; see the conflict note at the end of this section.)",
    source: "FM 7-22, Table 6-2; ATP 7-22.02, Ch. 16.",
    entries: [
      { id: "rd-1", code: "RD-1", name: "Overhead Arm Pull", howto: "Stand with feet wide, hands on hips. Raise one arm overhead, grasp just above that elbow with the other hand, and pull the arm across while leaning the trunk toward the pulling side, until a stretch is felt in the back of the raised arm and down that flank. Hold, return, then change sides.", purpose: "Develops flexibility of the joints of the arms, shoulders, and trunk.", panels: [{ pose: "overheadPull", label: "The stretch — elbow pulled across, trunk leaning" }], source: `${ATP}, Ch. 16 §16-3.` },
      { id: "rd-2", code: "RD-2", name: "Rear Lunge (held form)", howto: "Stand with feet wide, hands on hips. Take a long step straight backward with one leg, landing on the ball of the foot, back straight and gaze forward, until a stretch is felt in the front of that thigh and hip. Hold, return, then change sides. This is the same stepping pattern as PD-2, performed once per side and held instead of repeated.", purpose: "Held stretch for the front of the thigh and hip (hip flexor / quadriceps region, as described in the source).", panels: [{ pose: "lunge", label: "The hold — rear lunge, held not moving" }], source: `${ATP}, Ch. 16 §16-4.` },
      { id: "rd-3", code: "RD-3", name: "Extend and Flex", howto: "Start in a front leaning rest. First position (“extend”): lower the body toward the ground so the middle sags, arms straight, legs and low back relaxed, toes on the ground pointing back, gaze straight ahead (not up), until a stretch is felt in the hips and abdomen. Hold. Second position (“flex”): shift weight onto the balls of the feet, raise the hips high, straighten the legs and press the heels toward the ground, head between the arms looking toward the feet, back straight. Hold.", purpose: "First position stretches the hip and abdominal muscles; second position stretches the back of the legs and back (as positioned in the source sequence).", panels: [{ pose: "extendSag", label: "Position A — extend: hips sagged" }, { pose: "flexV", label: "Position B — flex: inverted V, heels pressing down" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 3).` },
      { id: "rd-4", code: "RD-4", name: "Thigh Stretch", howto: "Sit with arms at your sides, palms on the floor. Roll onto one side and prop the trunk on that elbow and forearm, placed directly under the shoulder. Grasp the top ankle and pull it toward that buttock, using the heel of the bottom foot to push the top thigh further back. Hold, return through sitting, then change sides.", purpose: "Develops flexibility in the hip and knee joints; stretches the front of the thigh.", panels: [{ pose: "sideThigh", label: "The stretch — side-lying, ankle pulled to buttock" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 4).` },
      { id: "rd-5", code: "RD-5", name: "Single-Leg Over", howto: "Lie on your back with arms straight out to the sides, palms down, feet together, head on the ground. Bend one knee to 90 degrees, cross that leg over the other, and grasp the outside of the bent knee with the opposite hand, pulling it toward the ground on that side. Keep the opposite shoulder and arm on the ground. Hold, return, then change sides.", purpose: "Develops flexibility of the hip and low back.", panels: [{ pose: "singleLegOver", label: "The stretch — knee crossed over and pulled down" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 5).` },
      { id: "rd-6", code: "RD-6", name: "Groin Stretch (Army form — standing lateral lunge)", howto: "Stand with feet wide, hands on hips. Take a long step sideways with one leg and bend that knee into a lateral lunge, trunk and head still facing forward, until a stretch is felt on the inside of the straight leg's thigh. Hold, or ease deeper. Return, then change sides.", purpose: "Increases flexibility in the hip joint; stretches the inner thigh of the straight leg.", note: "⚠ Same name, different position (conflict C-6): the Navy and Daily 16 use “Groin Stretch” for a seated butterfly position — a separate card in the Stretching section. They are different positions and are never merged.", panels: [{ pose: "groinLateral", label: "The stretch — standing lateral lunge, facing forward" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 6).` },
      { id: "rd-7", code: "RD-7", name: "Calf Stretch", howto: "Stand with feet wide, hands on hips. Step one foot back about 1–2 feet and place it flat. Keeping that heel on the ground and the foot pointing forward, bend the knees until a stretch is felt in that calf / Achilles area; stepping further back and straightening the back knee increases it. Hold, return, then change sides.", purpose: "Increases flexibility of the ankle; stretches the calf.", panels: [{ pose: "calfStretch", label: "The stretch — back heel down, weight forward" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 7).` },
      { id: "rd-8", code: "RD-8", name: "Hamstring Stretch (Army form — seated, both legs)", howto: "Sit with legs extended, arms at your sides, palms on the floor. Reach forward with both hands toward the feet and grasp the feet, ankles, or lower legs, keeping the knees straight but not locked. Hold. Return, then repeat the reach, going slightly further the second time if comfortable.", purpose: "Increases flexibility of the knees and hips; stretches the back of the thighs.", panels: [{ pose: "seatedReach", label: "The stretch — seated reach to the feet" }], source: `${ATP}, Ch. 16 (Recovery Drill exercise 8).` },
    ],
  },
  {
    key: "d16w",
    title: "USMC Daily 16 — Warm-Up Exercises",
    tag: "DYNAMIC",
    tagLine: "Tagged DYNAMIC — performed as repetitions.",
    dose: "Repetitions as sourced per exercise (printed on each card).",
    intro: "Daily 16 Program, section 3a. The warm-up set is conducted before the main activity of every PT session. The program's cool-down is the SAME exercises used in the warm-up, used as the final activity of the session, allowing the body to gradually return to its pre-exercise state — that is the program's own instruction, presented here as a rule, not a second list: the Daily 16 cool-down is this set plus the Stretching Exercises below, exactly as the warm-up session runs them.",
    source: "USMC Daily 16 Program, §3a.",
    entries: [
      { id: "d16-w1", code: "W1", name: "Heel to Toe Rocking", howto: "Stand with feet together, hands on hips. Rock back onto the heels and pause, then rock forward onto the toes and pause. Repeat 10–15 repetitions (as sourced).", purpose: "First warm-up exercise in the set; warms the ankle / lower leg as part of the gradual blood-flow warm-up.", panels: [{ pose: "rockHeels", label: "Start — weight on heels, toes lifted" }, { pose: "rockToes", label: "Finish — weight on toes, heels lifted" }], source: `${D16}, §3a.` },
      { id: "d16-w2", code: "W2", name: "Partial Squats", howto: "Stand with feet shoulder-width apart, arms at the sides. Keeping the heels on the ground, squat partway — knees bending to about 60 degrees, just short of a sitting position — until the hands are near mid-calf. Stand back up. Repeat 10–15 repetitions (as sourced).", purpose: "Warms hips, knees, and thighs through a partial range before fuller activity.", panels: [{ pose: "stand", label: "Start — feet shoulder-width, arms at sides" }, { pose: "squatPartial", label: "Finish — partial squat, hands near mid-calf" }], source: `${D16}, §3a.` },
      { id: "d16-w3", code: "W3", name: "Butt Kicks", howto: "Stand with feet shoulder-width apart, hands on hips. Shift weight to one foot and quickly bend the other knee five times, bringing the heel toward the buttock. Switch legs and repeat, cycling two to three times for a total of 15–20 repetitions on each leg (as sourced).", purpose: "Warms the front of the thigh / knee flexion pattern at a quicker tempo.", panels: [{ pose: "stand", label: "Start — standing on one leg" }, { pose: "buttKick", label: "Finish — heel kicked up to the buttock" }], source: `${D16}, §3a.` },
      { id: "d16-w4", code: "W4", name: "Double Time in Place — Punches and Arm Circles", howto: "Stand with arms at the sides. Begin running in place slowly and gradually increase speed. While running in place: throw easy punches straight forward (“punches to the front”), then throw easy punches straight up (“punches to the sky”), then do arm circles — start small, grow to large, then reverse direction.", purpose: "Raises tempo, heart rate, and body temperature and warms the shoulders and arms inside the running motion.", panels: [{ pose: "jogArms", label: "Start — jogging in place, arms at sides" }, { pose: "jogPunchFront", label: "Position A — punches to the front" }, { pose: "jogPunchSky", label: "Position B — punches to the sky" }, { pose: "armCircles", label: "Position C — arm circles, growing large" }], source: `${D16}, §3a.` },
      { id: "d16-w5", code: "W5", name: "Neck Flexion and Extension", howto: "Stand with feet shoulder-width apart, hands on hips. Bend the neck forward, bringing the chin toward the chest, and pause. Then extend the head back and pause. Repeat 5–10 repetitions (as sourced).", purpose: "Moves the neck forward and back through its range as part of the joint-by-joint warm-up.", panels: [{ pose: "standHips", label: "Start — head facing forward" }, { pose: "neckFlex", label: "Position A — chin toward chest" }, { pose: "neckExt", label: "Position B — head extended back" }], source: `${D16}, §3a.` },
      { id: "d16-w6", code: "W6", name: "Neck Lateral Flexion", howto: "Stand with feet shoulder-width apart, hands on hips. Tilt the head to one side, bringing that ear toward that shoulder, and pause. Tilt to the other side and pause. Repeat 5–10 repetitions (as sourced).", purpose: "Moves the neck side to side through its range.", panels: [{ pose: "standHips", label: "Start — head facing forward" }, { pose: "neckTilt", label: "Finish — ear lowered toward the shoulder" }], source: `${D16}, §3a.` },
      { id: "d16-w7", code: "W7", name: "Trunk Flexion and Extension", howto: "Stand with feet shoulder-width apart, hands on hips. The source text accessed describes the extension half explicitly: extend the trunk backward into slight hyperextension and pause, repeating 5–10 repetitions, paired with forward flexion in the exercise name and pattern. The forward-flexion step is described here only as the return / opposite movement implied by the name.", purpose: "Moves the trunk forward and back through its range.", note: "⚠ SOURCED GAP (research flag F-3): the Daily 16 text accessed describes the extension half explicitly; the forward-flexion step's exact source wording was not in the text accessed, so it is described only as the paired opposite movement rather than with invented form cues.", panels: [{ pose: "standHips", label: "Start — torso upright" }, { pose: "trunkExt", label: "Finish — trunk extended slightly backward" }], source: `${D16}, §3a.` },
      { id: "d16-w8", code: "W8", name: "Trunk Lateral Flexion", howto: "Stand with feet shoulder-width apart, hands on hips. Bend the trunk to one side and pause, then bend to the other side and pause. Repeat 5–10 repetitions (as sourced). The source then directs the group to proceed to the Stretching Exercises.", purpose: "Moves the trunk side to side through its range.", panels: [{ pose: "standHips", label: "Start — torso upright" }, { pose: "sideBend", label: "Finish — trunk bent sideways at the waist" }], source: `${D16}, §3a.` },
    ],
  },
  {
    key: "d16s",
    title: "USMC Daily 16 — Stretching Exercises",
    tag: "STATIC",
    tagLine: "Tagged STATIC — every exercise below is a held stretch (10-second hold, as sourced), whatever the source heading calls it.",
    dose: "Dose as sourced: hold 10 seconds, breathe naturally, switch sides and repeat where one-sided.",
    intro: "Daily 16 Program, section 3b — headed “Dynamic Stretching Exercises” in the source. ⚠ LABELLING (conflict C-2): despite that heading, every exercise is described in the source with a 10-second hold and “breathe naturally.” By the HPRC and MCRP definitions used in this app (a held end position = static), these are held stretches, tagged STATIC here; the source's own heading is printed in this note so the disagreement is visible, and it is NOT used as a timing instruction. Use as sourced: the set belongs to the Daily 16 warm-up sequence, and the Daily 16 cool-down uses the same exercises as the warm-up — the program's own instruction, which sits in tension with the dynamic-before / static-after principle in the Stretching section.",
    source: "USMC Daily 16 Program, §3b.",
    entries: [
      { id: "d16-s1", code: "S1", name: "Upper Back Stretch", howto: "Stand with feet shoulder-width apart. Extend both arms forward and clasp the hands in front of the chest. Push the arms forward, rounding the shoulders and upper back, until a stretch is felt across the upper back. Hold 10 seconds.", purpose: "Upper back, between and around the shoulder blades (as the source locates the sensation).", panels: [{ pose: "upperBack", label: "The hold — arms pushed forward, back rounded" }], source: `${D16}, §3b.` },
      { id: "d16-s2", code: "S2", name: "Chest Stretch", howto: "Stand with feet shoulder-width apart. Clasp the hands together behind the lower back, palms up. Pull the arms up toward the head until a stretch is felt in the front of the chest and shoulders. Hold 10 seconds.", purpose: "Front of the chest and shoulders.", panels: [{ pose: "chestBack", label: "The hold — hands clasped behind, arms lifted" }], source: `${D16}, §3b.` },
      { id: "d16-s3", code: "S3", name: "Modified Hurdler Stretch", howto: "Sit on the ground. Extend one leg straight out; tuck the other leg in front of the hips with the knee pointing outward. Bend the torso forward toward the straight leg's knee until a stretch is felt over the back of that thigh. Hold 10 seconds, switch sides.", purpose: "Back of the extended thigh (hamstring).", panels: [{ pose: "hurdler", label: "The hold — hinged over the straight leg" }], source: `${D16}, §3b.` },
      { id: "d16-s4", code: "S4", name: "Hip and Back Stretch", howto: "Sit on the ground. Extend one leg straight out. Cross the other leg over it, bending that knee and placing its foot flat on the ground beside the straight leg's knee. Turn the upper torso toward the crossed leg, pushing that knee across with the opposite elbow. Hold 10 seconds, switch sides.", purpose: "Lower back and the hip of the crossed leg (as the source locates the sensation).", panels: [{ pose: "seatedTwist", label: "The hold — twisted toward the crossed leg" }], source: `${D16}, §3b.` },
      { id: "d16-s5", code: "S5", name: "Groin Stretch", howto: "Sit with both knees bent and the soles of the feet together. Grasp the feet and gently push the knees toward the ground with the elbows until a stretch is felt over the inside of both thighs. Hold 10 seconds.", purpose: "Inside of both thighs (groin / adductors).", note: "⚠ Same name, different position (conflict C-6): the Army's Groin Stretch is a standing lateral lunge — a separate card in the Recovery Drill and the Stretching section.", panels: [{ pose: "butterfly", label: "The hold — seated butterfly, elbows pressing knees down" }], source: `${D16}, §3b.` },
      { id: "d16-s6", code: "S6", name: "Calf Stretch", howto: "Stand with arms at the sides. Place one foot about 2 feet forward and slightly bend the opposite (back) knee — note this source version bends the back knee and lifts the front toes: lean forward toward the front foot, pointing the front toes up to the sky, until a stretch is felt over the front leg's calf; gently pulling the front foot toward you can increase it. Hold 10 seconds, switch sides.", purpose: "Calf of the front leg, in this version.", note: "⚠ Same name, different position (conflict C-7): this front-leg / toes-up form differs from the Army back-leg form (RD-7) and the Navy plank form (Stretching B7-2). All three are official; none is “the” calf stretch.", panels: [{ pose: "calfFrontUp", label: "The hold — front toes lifted, leaning forward" }], source: `${D16}, §3b.` },
      { id: "d16-s7", code: "S7", name: "Iliotibial Band (ITB) Stretch", howto: "Stand with arms at the sides. Place one foot behind and a few inches across behind the other foot. Bring the arm on the crossed-behind side over the head, put body weight on that back leg, and bend at the waist away from it, until a stretch is felt over that hip. Hold 10 seconds, switch sides.", purpose: "Outside of the hip / IT band region of the crossed-behind leg.", panels: [{ pose: "itbCross", label: "The hold — leg crossed behind, bending away" }], source: `${D16}, §3b.` },
      { id: "d16-s8", code: "S8", name: "Hamstring Stretch", howto: "Lie on your back with your back flat on the ground, other leg remaining on the ground. Bring one knee toward the chest, grasping that leg just below the knee, then gently straighten that knee. Hold 10 seconds, switch sides.", purpose: "Back of the raised thigh (hamstring).", panels: [{ pose: "hamSupine", label: "The hold — leg raised and straightening" }], source: `${D16}, §3b.` },
      { id: "d16-s9", code: "S9", name: "Neck Stretch", howto: "Stand with feet shoulder-width apart. Move both arms behind the back and grasp one wrist with the other hand. Tilt the head toward the grasping-hand side while pulling the grasped arm across in the same direction, until a stretch is felt over the opposite shoulder and side of the neck. Hold 10 seconds, switch sides.", purpose: "Side of the neck and top of the shoulder on the side away from the tilt.", panels: [{ pose: "neckTilt", label: "The hold — head tilted, wrist pulled across behind" }], source: `${D16}, §3b.` },
      { id: "d16-s10", code: "S10", name: "Triceps Stretch", howto: "Stand with arms at the sides. Bend one elbow and bring that arm up and back so the hand rests between the shoulder blades. Gently pull that elbow with the other hand behind the head until a stretch is felt over the back of the upper arm. Hold 10 seconds, switch sides.", purpose: "Back of the upper arm (triceps).", note: "⚠ Same name, different position (conflict C-8): the Navy's triceps stretch reaches the arm behind the back, low — a separate card in the Stretching section (B8-3). The Army's related entry is the Overhead Arm Pull (B8-1). Three distinct positions, three cards.", panels: [{ pose: "tricepsOH", label: "The hold — hand between the shoulder blades" }], source: `${D16}, §3b.` },
      { id: "d16-s11", code: "S11", name: "Quadriceps Stretch", howto: "Lie on one side. Bend the lower hip and knee to 90 degrees for balance. Grasp the top ankle with the top hand and pull that knee straight back, without hyperextending the lower back, until a stretch is felt over the front of that thigh. Hold 10 seconds, switch sides.", purpose: "Front of the top thigh (quadriceps).", panels: [{ pose: "sideQuad", label: "The hold — side-lying, top knee pulled back" }], source: `${D16}, §3b.` },
      { id: "d16-s12", code: "S12", name: "Lying Down ITB Stretch", howto: "Lie on the ground (on your back, as positioned in the set). Bring one leg, knee straight, across the body. Hold 10 seconds, switch sides. A stretch should be felt over that hip.", purpose: "Outside of the hip of the crossed leg.", panels: [{ pose: "lyingITB", label: "The hold — straight leg crossed over the body" }], source: `${D16}, §3b.` },
      { id: "d16-s13", code: "S13", name: "Posterior Shoulder Stretch", howto: "Stand with feet shoulder-width apart, arms at the sides. Bend one elbow and bring that arm across the chest. Give it a gentle pull with the other hand until a stretch is felt over the back of that shoulder. Hold 10 seconds, switch sides.", purpose: "Back (posterior) of the shoulder of the crossed arm.", panels: [{ pose: "postShoulder", label: "The hold — arm pulled across the chest" }], source: `${D16}, §3b.` },
      { id: "d16-s14", code: "S14", name: "Hip Flexor Stretch", howto: "Stand with hands on hips. Step one foot forward 3–4 feet and place the back knee on the ground. Gently move the front knee forward until a stretch is felt over the front of the back thigh and hip. Hold 10 seconds, switch sides.", purpose: "Front of the back hip and thigh (hip flexors).", panels: [{ pose: "kneelHipFlexor", label: "The hold — half-kneeling, hips shifted forward" }], source: `${D16}, §3b.` },
      { id: "d16-s15", code: "S15", name: "Single-Leg Lower Back Stretch", howto: "Lie with your back flat on the ground, other leg remaining on the ground. Bring one knee toward the chest and grasp it, gently pulling it tight into the chest. Hold 10 seconds, switch sides.", purpose: "Lower back through to the buttock on the pulled-leg side (as the source locates the sensation).", panels: [{ pose: "kneeChest1", label: "The hold — one knee pulled tight to the chest" }], source: `${D16}, §3b.` },
      { id: "d16-s16", code: "S16", name: "Prone Abdominal Stretch", howto: "Lie on your stomach with hands placed near the shoulders as if in the down position of a push-up. Slowly raise the upper body, keeping the waist on the ground. Hold 10 seconds.", purpose: "Front of the abdomen.", panels: [{ pose: "pronePressUp", label: "The hold — upper body pressed up, waist down" }], source: `${D16}, §3b.` },
    ],
  },
];

export const RECOVERY_DRILL_CONFLICT =
  "⚠ CONFLICT C-1 — Recovery Drill size: older Army material (FM 7-22, 2012 era, and study summaries derived from it) lists five Recovery Drill exercises: Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single-Leg Over. Current FM 7-22 (2020, incl. Change 2) Table 6-2 lists “Recovery Drill (8)”, and ATP 7-22.02 Ch. 16 lists eight, adding Groin Stretch, Calf Stretch, and Hamstring Stretch. This app uses the current eight and notes the older five here.";

export const DAILY16_COOLDOWN_RULE =
  "The Daily 16 cool-down is not a separate exercise list: it is the same exercises used in the warm-up (W1–W8 above plus the Stretching Exercises S1–S16), used as the final activity of the session, allowing the body to gradually return to the pre-exercise state. No additional cards are created for the cool-down — every cool-down position is already drawn from the warm-up set, to avoid double-counting the same positions.";

/* ------------------------------------------------------------------ */
/* PART B — Stretching catalogue (34: 9 DYNAMIC / 25 STATIC)           */
/* ------------------------------------------------------------------ */

export type Stretch = {
  id: string;
  code: string;
  name: string;
  area: string;
  tag: "DYNAMIC" | "STATIC";
  howto: string;
  stretches: string;
  why: string;
  hold: string;
  note?: string;
  /** Navy Top 12 position (Guide 13 order), when this card is one. */
  navyTop12?: number;
  panels: readonly DiagramPanelSpec[];
  source: string;
};

export const STRETCH_AREAS: { key: string; label: string }[] = [
  { key: "neck-shoulders", label: "Neck / Shoulders" },
  { key: "chest", label: "Chest" },
  { key: "back", label: "Back" },
  { key: "hips", label: "Hips" },
  { key: "quads", label: "Quads (front of thigh)" },
  { key: "hamstrings", label: "Hamstrings (back of thigh)" },
  { key: "calves", label: "Calves" },
  { key: "arms", label: "Arms" },
];

export const STRETCHING_PRINCIPLE: { heading: string; lines: readonly string[] }[] = [
  {
    heading: "The rule — dynamic before, static after",
    lines: [
      "“Dynamic stretch before your workout. Static stretch after.” — HPRC, “Why you should warm up before exercise” (its own summary line).",
      "Dynamic before: dynamic stretching moves a joint through its full range of motion in controlled movement, lengthening the muscle and raising its temperature. HPRC's flexibility guidance calls it ideal for a warm-up because it helps improve mobility; its warm-up article adds that it can improve range of motion in a way that lets you use “more” of the muscle during exercise, and can have small performance benefits for speed and power tests. MCRP 7-20C.1 requires the same shape: a dynamic warm-up before activity, structured by RAMP / the four phases (see Warm-Up & Cool-Down).",
      "Static is not a warm-up — stated by HPRC in two places, in slightly different strengths, both kept here and not averaged: static stretching “is effective in improving flexibility, but can actually hurt performance if done as part of a warm-up” — it stretches the muscle but does not produce the temperature or activation increases a dynamic warm-up does, and the extra range without those increases “seems to provide no benefit to strength and power generation. In some cases, it might even decrease them.” And: “Static stretches aren't useful as a warm-up to exercise and might actually hurt your performance.” The wording is hedged in the sources (“can”, “might”, “seems”) and stays hedged here — the sourced claim is about performance (strength / power) and missing warm-up effects, NOT a blanket injury claim; no source used says static stretching before exercise always injures you.",
      "Static after, on a warm muscle: MCRP 7-20C.1 — use static stretching after training, at the end of the cool-down, within 5–10 minutes after training, and “do not force a stretch … on a muscle that is not sufficiently warm.” Its prescribed form is a passive hold at end range — minimum 30 seconds, two to three times (the Marine standard, attributed; other services' holds differ — see the hold-times note). HPRC: static stretching is “great for making long-term improvements in your flexibility,” done to the point of slight discomfort within your range of motion, but no further. The Army and Navy put the same idea into formation practice: the Recovery Drill (all static holds) and the Navy Top 12 are cool-down sets, after the main activity.",
      "Cold-muscle warning (older Navy wording, still the clearest): the Navy Pre-Entry Plan's stretching guidance states, in its own emphasis, never stretch a cold muscle — warm up first (3–5 minutes of walking / jogging before stretching, in that plan), and stretch again after the cool-down when heart rate is almost back to normal. Current Navy PRT guidance has moved the before-stretching to dynamic form (Guide 5 / 5A).",
      "Timing / dose for the dynamic part (HPRC): dynamic stretching should be part of the pre-activity warm-up, for at least 5–10 minutes. Flexibility exercise in general: at least 2–3 days per week, with daily work most effective; short-term gains appear after each session, long-term changes usually take 3–4 weeks of regular work (HPRC FITT summary).",
      "Practical reading (derived directly from the above, no new claims): Before = pick DYNAMIC entries matched to the workout's movements. After = cool down first (walk / gradually lower intensity), then pick STATIC entries for the areas worked, using the hold printed on each entry from its own source.",
    ],
  },
  {
    heading: "Hold times — four official values, never blended",
    lines: [
      "⚠ CONFLICT C-3 — Army Recovery Drill (ATP 7-22.02): 20–30 seconds per position. USMC Daily 16: 10 seconds per stretch. Marine Corps (MCRP 7-20C.1): minimum 30 seconds, two to three times, within 5–10 minutes after training. Navy: Guide 13 Stretch 12 (Calf) prints 15 seconds; CFL course material for the Top 12 states a minimum of 15 seconds for all stretches; the 1989 Navy Conditioning Guide states 15–30 seconds; the Navy Pre-Entry Plan states 10–30 seconds. No single “correct” hold exists across services — each card in this section carries its own source's hold.",
      "⚠ CONFLICT C-4 — stretching before exercise, changed over time: older Navy guidance placed static stretching before the main activity (Pre-Entry Plan sequence: warm-up, stretching, activity, cool-down, stretching; the 1989 Conditioning Guide likewise). Current guidance reverses the before part: Navy Guide 5 / 5A require a dynamic warm-up before PRT; MCRP 7-20C.1 puts static stretching after training; HPRC states static stretching is not useful as a warm-up and might hurt performance. This section follows the current position in its tags and preserves the older position here, dated.",
      "⚠ CONFLICT C-10 — bouncing / ballistic stretching: the Navy Conditioning Guide (1989) instructs “DO NOT BOUNCE when stretching.” HPRC (current) defines ballistic stretching as a bouncing-type dynamic stretch and states there is no evidence it results in injury more than other types, while whether it affects performance is still being investigated. This section gives no ballistic exercises and asserts neither position as settled.",
    ],
  },
  {
    heading: "Safety (sourced)",
    lines: [
      "Stop / modify on pain: MCRP 7-20C.1 — when a Marine experiences pain caused by a particular movement or activity, that movement should be modified or discontinued to decrease further harm (outside operational necessity). HPRC — mobility work done properly should not cause pain in joints or muscles; never push through your threshold.",
      "Slight discomfort / mild tension only: HPRC — stretch only to the point of slight discomfort within your range of motion, no further. Navy Pre-Entry Plan — stretch to a point of mild tension.",
      "Do not force: MCRP 7-20C.1 — do not force a stretch too far, forcefully, or on an insufficiently warm muscle. Navy Guide 13, Chest Stretch caution — a partner must not force the stretch by aggressively pulling the elbows back.",
      "Progression: HPRC — optimal progression methods are unknown (its own wording); if mobility is very limited, start slowly and gradually increase the length and depth of stretches as you feel more comfortable. MCRP 7-20C.1's general progression rule — progress through one component at a time, do not progress too quickly, and adhere to the ten percent rule (progress no more than ten percent beyond the current fitness level).",
      "Seek care instead of stretching through it: Navy Guide 13, Piriformis note — if you are experiencing low-back pain after physical activity, seek medical assistance. MCRP 7-20C.1 lists red flags for prompt medical attention, including severe pain, swelling, or numbness, and inability to tolerate weight on the affected body part.",
    ],
  },
];

const NAVY_HOLD_NOTE = "No per-stretch hold is printed on the Guide 13 Top 12 pages accessed; the Navy's general values are: a minimum of 15 seconds for the Top 12 (CFL course material), 15–30 seconds (1989 Conditioning Guide), 10–30 seconds (Pre-Entry Plan) — printed in the hold-times note above, never merged into one number for this entry.";
const G13 = "Navy Guide 13 (Aug 2019), Top 12 Stretches";

export const STRETCHES: Stretch[] = [
  // ── B1 Neck / Shoulders ─────────────────────────────────────────
  { id: "b1-1", code: "B1-1", name: "Neck Stretch — lateral tilt with arm pull", area: "neck-shoulders", tag: "STATIC",
    howto: "Stand with feet shoulder-width apart. Take both arms behind your back and hold one wrist with the other hand. Tilt your head toward the holding-hand side and pull the held arm across in the same direction, until you feel the stretch down the opposite side of the neck and shoulder. Hold, then switch sides.",
    stretches: "Side of the neck and top of the shoulder, on the side away from the tilt.",
    why: "Daily 16 locates the benefit as the stretch sensation over the shoulder and neck; MCRP 7-20C.1 notes neck and upper-back pain is a common Marine complaint when fitness programmes do not address that musculature — flexibility work is part of addressing it.",
    hold: "10 seconds per side (Daily 16).",
    panels: [{ pose: "neckTilt", label: "The hold — head tilted, wrist pulled across behind" }],
    source: `${D16}, §3b (Neck Stretch).` },
  { id: "b1-2", code: "B1-2", name: "Neck Flexion and Extension", area: "neck-shoulders", tag: "DYNAMIC",
    howto: "Stand with feet shoulder-width apart, hands on hips. Bend the neck forward, chin toward chest, pause briefly; extend the head back, pause briefly. Keep moving between the two, without holding either end.",
    stretches: "Front and back of the neck, moved through range rather than lengthened under a hold.",
    why: "Daily 16 places it in the warm-up so the neck joints and muscles are moved and blood flow is raised before the main activity, instead of being stretched cold and still.",
    hold: "Dose: 5–10 repetitions (Daily 16). No hold.",
    panels: [{ pose: "standHips", label: "Start — head facing forward" }, { pose: "neckFlex", label: "Position A — chin tucked to chest" }, { pose: "neckExt", label: "Position B — head extended back" }],
    source: `${D16}, §3a (Warm-Up exercise 5).` },
  { id: "b1-3", code: "B1-3", name: "Posterior Shoulder Stretch — cross-body pull", area: "neck-shoulders", tag: "STATIC", navyTop12: 2,
    howto: "Stand with feet shoulder-width apart. Bring one arm across the front of the chest and pull it in gently with the other hand, above the elbow, until you feel the stretch at the back of that shoulder and upper arm. Hold, then switch sides.",
    stretches: "Back of the shoulder and upper arm of the crossed arm.",
    why: "Navy Guide 13 and Daily 16 both include it in their core stretch sets for the shoulder girdle — the joint MCRP 7-20C.1 singles out as the body's most mobile, needing range in many directions.",
    hold: "10 seconds per side (Daily 16). Navy Guide 13's general floor for its Top 12 is a minimum of 15 seconds (CFL course material) — both values print attributed; do not merge them.",
    panels: [{ pose: "postShoulder", label: "The hold — arm pulled in across the chest" }],
    source: `${G13} (#2); ${D16}, §3b (Posterior Shoulder Stretch).` },
  { id: "b1-4", code: "B1-4", name: "Upper Back Stretch — clasped-hands reach", area: "neck-shoulders", tag: "STATIC",
    howto: "Stand with feet shoulder-width apart. Extend both arms forward, clasp the hands in front of the chest, and push the arms away from you, rounding the shoulders and upper back. Hold and breathe naturally, then release.",
    stretches: "Upper back, between and around the shoulder blades.",
    why: "Daily 16 locates the stretch across the upper back; it is the counter-position to the chest stretches in the Chest area, opening the back side of the shoulder girdle after pressing / carrying work.",
    hold: "10 seconds (Daily 16).",
    panels: [{ pose: "upperBack", label: "The hold — arms pushed forward, back rounded" }],
    source: `${D16}, §3b (Upper Back Stretch).` },
  { id: "b1-5", code: "B1-5", name: "Arm Circles", area: "neck-shoulders", tag: "DYNAMIC",
    howto: "While jogging in place (Daily 16 form) or standing, make circles with straight arms — start with small circles, grow to large circles, then reverse direction. Keep the arms moving; do not hold any position.",
    stretches: "Shoulders and arms, through a growing circular range.",
    why: "In Daily 16 it is the final element of Double Time in Place: it warms the shoulder girdle at rising tempo inside an already-moving warm-up, which is the HPRC definition of a dynamic warm-up doing its job — raising temperature and activation, not just range.",
    hold: "No separate rep count is sourced for arm circles alone; in Daily 16 they are performed as the closing element of Double Time in Place (Warm-Up W4). No dosage is invented here.",
    note: "No neck circles appear anywhere in this app (research flag F-7): a Navy contraindicated-exercises list in CFL material flags neck circles, so none was included; arm circles are retained only in this Daily 16 sourced form.",
    panels: [{ pose: "armsT", label: "Start — arms straight out at shoulder height" }, { pose: "armCircles", label: "Moving — arms mid-circle, one sweeping up, one down" }],
    source: `${D16}, §3a (Double Time in Place, closing element).` },
  // ── B2 Chest ────────────────────────────────────────────────────
  { id: "b2-1", code: "B2-1", name: "Chest Stretch — hands clasped behind the back", area: "chest", tag: "STATIC",
    howto: "Stand with feet shoulder-width apart. Clasp your hands behind your lower back, palms up, and lift the arms up behind you until you feel the stretch across the front of the chest and shoulders. Hold, then release.",
    stretches: "Front of the chest and front of the shoulders.",
    why: "Daily 16 includes it directly after the Upper Back Stretch, pairing the front and back of the shoulder girdle in the same set.",
    hold: "10 seconds (Daily 16).",
    note: "⚠ Same name, different position (conflict C-9): the Navy Top 12 chest stretch clasps the hands behind the NECK with elbows pulled back (B2-2). Two positions, two cards.",
    panels: [{ pose: "chestBack", label: "The hold — hands clasped behind, arms lifted" }],
    source: `${D16}, §3b (Chest Stretch).` },
  { id: "b2-2", code: "B2-2", name: "Chest Stretch — hands behind the neck, elbows back", area: "chest", tag: "STATIC", navyTop12: 1,
    howto: "Stand and clasp both hands behind your neck. Slowly pull the elbows back until you feel the stretch across the chest. Do not pull the head forward or put tension on the neck. A partner may assist only gently — the guide cautions a partner must not force it by aggressively pulling the elbows back.",
    stretches: "Chest (pectorals), with the elbows drawn back.",
    why: "This is Stretch 1 of the Navy Top 12 — the Navy's first-listed flexibility exercise — the service's chosen chest opener for its standard cool-down set. The position differs from B2-1; both are official, from different services.",
    hold: NAVY_HOLD_NOTE,
    note: "⚠ Same name, different position (conflict C-9): Daily 16's chest stretch clasps the hands behind the lower back (B2-1). Two positions, two cards.",
    panels: [{ pose: "chestNeck", label: "The hold — hands behind neck, elbows pulled back" }],
    source: `${G13} (#1 Chest).` },
  // ── B3 Back ─────────────────────────────────────────────────────
  { id: "b3-1", code: "B3-1", name: "Trunk Lateral Flexion — moving side bend", area: "back", tag: "DYNAMIC",
    howto: "Stand with feet shoulder-width apart, hands on hips. Bend the trunk to one side, pause briefly, return upright, then bend to the other side. Keep alternating without holding.",
    stretches: "Side of the trunk / waist, and spinal side-bending range.",
    why: "A Daily 16 warm-up movement: the trunk is taken through its side range under movement and rising blood flow before loaded or rotational work.",
    hold: "Dose: 5–10 repetitions (Daily 16). No hold.",
    panels: [{ pose: "standHips", label: "Start — torso upright" }, { pose: "sideBend", label: "Finish — trunk bent sideways at the waist" }],
    source: `${D16}, §3a (Warm-Up exercise 8).` },
  { id: "b3-2", code: "B3-2", name: "Windmill — moving bend-and-rotate", area: "back", tag: "DYNAMIC",
    howto: "Stand with feet wide, arms straight out to the sides. Bend the hips and knees and rotate the trunk to one side, reaching the opposite hand to the outside of that foot and looking to the rear. Return to the T position, then repeat to the other side. Keep alternating.",
    stretches: "Spine in combined bending and rotation, back of the legs, and the shoulder girdle.",
    why: "ATP 7-22.02 states it develops the ability to bend and rotate the trunk safely at the same time — the combined pattern many lifting and combat tasks require — and requires spinal flexibility and shoulder coordination to do at all.",
    hold: "Dose: 5–10 repetitions (ATP 7-22.02, Preparation Drill dose).",
    panels: [{ pose: "armsT", label: "Start — arms out in a T" }, { pose: "windmillDown", label: "Finish — hand to outside of opposite foot" }],
    source: `${ATP}, Ch. 3 (Preparation Drill exercise 6).` },
  { id: "b3-3", code: "B3-3", name: "Single-Leg Over — supine cross-over", area: "back", tag: "STATIC",
    howto: "Lie on your back, arms out to the sides palms down, feet together. Bend one knee to 90 degrees, cross it over the other leg, and pull the outside of that knee toward the ground with the opposite hand. Keep the far shoulder and arm on the ground. Hold, then switch sides.",
    stretches: "Hip and low back on the crossed side.",
    why: "ATP 7-22.02 states it directly: it develops flexibility of the hip and low back. It is RD-5 in the Army cool-down.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    panels: [{ pose: "singleLegOver", label: "The hold — knee crossed over and pulled down" }],
    source: `${ATP}, Ch. 16 (Recovery Drill exercise 5).` },
  { id: "b3-4", code: "B3-4", name: "Low Back Stretch — knee(s) to chest", area: "back", tag: "STATIC", navyTop12: 6,
    howto: "Lie on your back. Gently pull one knee — or both knees — to your chest with your hands, until you feel the stretch in the low back and buttocks. Hold, then lower the leg(s) under control. The Daily 16 single-leg form pulls one knee tight to the chest while the other leg stays flat.",
    stretches: "Low back and buttocks.",
    why: "Navy Guide 13 (Stretch 6) locates the stretch in the low back and buttocks and includes it in the standard cool-down twelve; Daily 16 includes the single-leg form in its stretching set.",
    hold: "10 seconds per side for the Daily 16 single-leg form. No per-stretch hold is printed for the Navy both-knees form on the pages accessed — see the hold-times note.",
    panels: [{ pose: "kneeChest2", label: "The hold — knees pulled to the chest (Navy form)" }, { pose: "kneeChest1", label: "Daily 16 form — one knee pulled tight, other leg flat" }],
    source: `${G13} (#6 Low Back); ${D16}, §3b (Single-Leg Lower Back Stretch).` },
  { id: "b3-5", code: "B3-5", name: "Outer Hip and Low Back Stretch — seated twist", area: "back", tag: "STATIC", navyTop12: 4,
    howto: "Sit with both legs straight out in front. Cross one leg over the other, placing its foot flat on the ground about level with the straight leg's knee. Put the opposite elbow on the outside of the crossed knee and gently push that knee across while turning the trunk, until you feel the stretch on the outer hip and in the low and mid back. Hold, then switch sides.",
    stretches: "Outer hip of the crossed leg, and low / mid back.",
    why: "Navy Top 12 Stretch 4; the seated version of the same twist pattern Daily 16 uses as its Hip and Back Stretch (Daily 16 S4).",
    hold: NAVY_HOLD_NOTE,
    panels: [{ pose: "seatedTwist", label: "The hold — twisted toward the crossed leg" }],
    source: `${G13} (#4 Outer Hip / Low Back).` },
  { id: "b3-6", code: "B3-6", name: "Abdominal Stretch — prone press-up", area: "back", tag: "STATIC", navyTop12: 5,
    howto: "Lie on your stomach with hands under the shoulders. Gently push the upper body up until you feel the stretch across the abdomen. Do not fully lock the elbows or hyperextend the back. If the low back is uncomfortable, use the easier propped-on-elbows version instead. Hold, then lower.",
    stretches: "Abdominal muscles (front of the trunk); also the first (“extend”) position of Army RD-3.",
    why: "Navy Top 12 Stretch 5 and Daily 16's Prone Abdominal Stretch both include it as the trunk's extension counter-stretch after flexion-heavy work such as curl-ups / crunches.",
    hold: "10 seconds (Daily 16 prone form). No per-stretch hold printed for the Navy form on the pages accessed.",
    panels: [{ pose: "pronePressUp", label: "The hold — pressed up, hips and legs flat" }],
    source: `${G13} (#5 Abdominal); ${D16}, §3b (Prone Abdominal Stretch).` },
  // ── B4 Hips ─────────────────────────────────────────────────────
  { id: "b4-1", code: "B4-1", name: "Hip Flexor Stretch — half-kneeling lunge", area: "hips", tag: "STATIC", navyTop12: 8,
    howto: "Step one foot forward 3–4 feet and put the back knee on the ground, hands on hips, torso upright. Gently shift the hips / front knee forward until you feel the stretch across the front of the back hip and thigh. Hold, then switch sides.",
    stretches: "Hip flexors — front of the back hip and upper thigh.",
    why: "MCRP 7-20C.1's injury table lists hip-flexor strain among common strains and pairs it with flexibility / mobility work; the Navy adds a practical note for its standing form: because this muscle group is used in the curl-up, stretching it after that event helps prevent cramping and prepares it for the cardio event.",
    hold: "10 seconds per side (Daily 16 half-kneeling form).",
    note: "Navy Top 12 #8 is this stretch in a STANDING lunge form (front foot 3–4 feet ahead, both knees bent, back hip pushed forward, optional slight backward lean of the upper body). It is described here in full so the Navy's twelve are complete — but per the build's sourced call it stays note material, not a separate card: this catalogue ships exactly 34 stretches, and this card's hold is sourced from the Daily 16 half-kneeling form of the same stretch.",
    panels: [{ pose: "kneelHipFlexor", label: "The hold — half-kneeling, hips shifted forward" }],
    source: `${D16}, §3b (Hip Flexor Stretch); Navy standing form per ${G13} (#8 Hip Flexor), described in the note.` },
  { id: "b4-2", code: "B4-2", name: "Rear Lunge Stretch — held standing lunge", area: "hips", tag: "STATIC",
    howto: "Stand with feet wide, hands on hips. Step one leg far straight back onto the ball of the foot, back straight, gaze forward, and hold the lunge while you feel the stretch in the front of that thigh and hip. Return, then switch sides.",
    stretches: "Front of the back thigh and hip (hip flexor / quadriceps region).",
    why: "It is RD-2, the second exercise of the Army's official cool-down — the held counterpart to the dynamic PD-2 lunge, which is exactly the before/after pairing the principle above explains.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    panels: [{ pose: "lunge", label: "The hold — rear lunge, held" }],
    source: `${ATP}, Ch. 16 §16-4 (Recovery Drill exercise 2).` },
  { id: "b4-3", code: "B4-3", name: "Piriformis Stretch — supine figure-four", area: "hips", tag: "STATIC", navyTop12: 7,
    howto: "Lie on your back with both knees bent. Cross one ankle / leg over the opposite thigh (both knees bent at about 90 degrees in the source description). Hold the back of the supporting thigh with both hands and gently pull it toward your chest until you feel slight tension in the crossed leg's buttock and outer thigh. Hold, then switch sides.",
    stretches: "Piriformis / deep buttock and outer thigh of the crossed leg.",
    why: "Navy Top 12 Stretch 7. The guide notes this region is worked to increase flexibility there and that it may assist in decreasing pain in that area — and adds that if low-back pain follows activity, seek medical assistance rather than stretching through it.",
    hold: NAVY_HOLD_NOTE,
    panels: [{ pose: "figureFour", label: "The hold — figure-four, thigh pulled to chest" }],
    source: `${G13} (#7 Piriformis).` },
  { id: "b4-4", code: "B4-4", name: "Groin / Butterfly Stretch — seated, soles together", area: "hips", tag: "STATIC", navyTop12: 11,
    howto: "Sit with the upper body nearly vertical. Bend both knees and bring the soles of the feet together, pulling the feet in toward the body. Hold the feet with your hands, rest your elbows on your knees, lean the upper body slightly forward while the elbows push the knees down, until you feel the stretch in the groin / inner thighs. Hold.",
    stretches: "Groin / inner thighs (adductors), both sides at once.",
    why: "Navy Top 12 Stretch 11 and Daily 16's Groin Stretch — the seated standard for inner-thigh flexibility in both services' sets.",
    hold: "10 seconds (Daily 16 form).",
    note: "⚠ Same name, different position (conflict C-6): the Army's Groin Stretch is a standing lateral lunge (B4-5). The build does not merge the two diagrams.",
    panels: [{ pose: "butterfly", label: "The hold — seated butterfly, elbows pressing knees down" }],
    source: `${G13} (#11 Groin / Butterfly); ${D16}, §3b (Groin Stretch).` },
  { id: "b4-5", code: "B4-5", name: "Groin Stretch — standing lateral lunge", area: "hips", tag: "STATIC",
    howto: "Stand with feet wide, hands on hips, trunk and head facing forward. Step far sideways with one leg and bend that knee into a lateral lunge, keeping the other leg straight, until you feel the stretch on the inside of the straight leg's thigh. Hold, or ease deeper, then switch sides.",
    stretches: "Inner thigh of the straight leg; hip-joint flexibility.",
    why: "Army RD-6 states it increases flexibility in the hip joint. Same name, different position from B4-4 — the two are never merged.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    note: "⚠ Same name, different position (conflict C-6): the Navy / Daily 16 Groin Stretch is the seated butterfly (B4-4).",
    panels: [{ pose: "groinLateral", label: "The hold — standing lateral lunge, facing forward" }],
    source: `${ATP}, Ch. 16 (Recovery Drill exercise 6).` },
  { id: "b4-6", code: "B4-6", name: "IT Band Stretch — standing cross-behind", area: "hips", tag: "STATIC",
    howto: "Stand with arms at your sides. Place one foot behind and a few inches across behind the other foot. Bring the arm on that side up over your head, put your weight on the back (crossed) leg, and bend at the waist away from it until you feel the stretch over that hip. Hold, then switch sides. A lying version (leg carried straight across the body on the ground) is Daily 16 S12 in the Warm-Up & Cool-Down section.",
    stretches: "Outside of the hip / iliotibial band region of the crossed-behind leg.",
    why: "Daily 16 includes both a standing and a lying ITB stretch in its sixteen — the only body area it covers twice, for the outer hip that running and rucking load heavily.",
    hold: "10 seconds per side (Daily 16).",
    panels: [{ pose: "itbCross", label: "The hold — leg crossed behind, bending away" }],
    source: `${D16}, §3b (Iliotibial Band Stretch).` },
  // ── B5 Quads ────────────────────────────────────────────────────
  { id: "b5-1", code: "B5-1", name: "Thigh Stretch — side-lying ankle pull", area: "quads", tag: "STATIC",
    howto: "Sit, then roll onto one side and prop the trunk on that elbow and forearm under the shoulder. Grasp the top ankle and pull it toward that buttock, pushing the top thigh further back with the heel of the bottom foot. Hold, return through sitting, then switch sides.",
    stretches: "Front of the top thigh (quadriceps); hip and knee flexibility.",
    why: "ATP 7-22.02 states it develops flexibility in the hip and knee joints. It is RD-4 in the Army cool-down.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    panels: [{ pose: "sideThigh", label: "The hold — side-lying, ankle pulled to buttock" }],
    source: `${ATP}, Ch. 16 (Recovery Drill exercise 4).` },
  { id: "b5-2", code: "B5-2", name: "Quadriceps Stretch — standing ankle pull", area: "quads", tag: "STATIC", navyTop12: 9,
    howto: "Stand with a slight bend in the supporting knee. Grasp the other ankle with the hand on that side and gently pull the foot toward the buttocks, keeping the bent knee aligned under the hip — not sticking out to the side. Hold, then switch sides. If balance is difficult, hold a wall or do the side-lying on-the-ground version instead (both options are in the Navy guide).",
    stretches: "Front of the bent leg's thigh (quadriceps).",
    why: "Navy Top 12 Stretch 9 — the standing standard that needs no ground space, usable in a formation cool-down.",
    hold: NAVY_HOLD_NOTE,
    panels: [{ pose: "quadStand", label: "The hold — standing, ankle pulled to buttock" }],
    source: `${G13} (#9 Quadriceps).` },
  { id: "b5-3", code: "B5-3", name: "Lunges — forward and rear, as repetitions", area: "quads", tag: "DYNAMIC",
    howto: "Hands on hips. Step forward into a lunge, back straight, then push back to the start; alternate legs. Or step straight backward into a lunge and return; alternate legs. Keep the steps long and the movement continuous, with only a brief pause at the bottom.",
    stretches: "Hips, quads, and hamstrings through a moving lunge range; balance in the same pattern.",
    why: "These are PD-7 and PD-2 — ATP 7-22.02's stated purposes are balance and leg strength (forward) and flexibility, strength, and balance in the hip and leg (rear), preparing for litter carries, taking cover, and kneeling firing positions. Done as repetitions before a workout, the same positions become the held stretches (B4-2 and the quad work) after it.",
    hold: "Dose: 5–10 repetitions (ATP 7-22.02, Preparation Drill dose). No hold.",
    panels: [{ pose: "standWideHips", label: "Start — feet wide, hands on hips" }, { pose: "lunge", label: "Moving — long lunge, torso upright" }],
    source: `${ATP}, Ch. 3 (Preparation Drill exercises 2 and 7).` },
  { id: "b5-4", code: "B5-4", name: "Butt Kicks", area: "quads", tag: "DYNAMIC",
    howto: "Stand with feet shoulder-width apart, hands on hips. Shift weight to one foot and quickly bend the other knee repeatedly, bringing the heel toward the buttock; switch legs and keep alternating in short sets.",
    stretches: "Front of the thigh through repeated knee flexion, at tempo.",
    why: "Daily 16 warm-up exercise W3: it raises tempo and moves the knee / quad pattern dynamically before running-type activity, instead of holding a quad stretch on a cold muscle.",
    hold: "Dose: five bends per leg per set, cycling two to three times, for 15–20 repetitions per leg in total (Daily 16).",
    panels: [{ pose: "stand", label: "Start — standing on one leg" }, { pose: "buttKick", label: "Moving — heel kicked up to the buttock" }],
    source: `${D16}, §3a (Warm-Up exercise 3).` },
  // ── B6 Hamstrings ───────────────────────────────────────────────
  { id: "b6-1", code: "B6-1", name: "Hamstring Stretch — supine, leg held up", area: "hamstrings", tag: "STATIC",
    howto: "Lie on your back, back flat, other leg on the ground. Bring one knee toward your chest, hold that leg just below the knee, and gently straighten the knee until you feel the stretch down the back of that thigh. Hold, then switch sides.",
    stretches: "Back of the raised thigh (hamstrings).",
    why: "Daily 16's hamstring standard; MCRP 7-20C.1 gives the functional cost of skipping this area — a tight hamstring shortens stride length while running and makes running inefficient.",
    hold: "10 seconds per side (Daily 16).",
    panels: [{ pose: "hamSupine", label: "The hold — leg raised and straightening" }],
    source: `${D16}, §3b (Hamstring Stretch).` },
  { id: "b6-2", code: "B6-2", name: "Hamstring Stretch — seated reach, both legs", area: "hamstrings", tag: "STATIC",
    howto: "Sit with both legs straight out in front, arms at your sides. Reach forward with both hands toward the feet and hold the feet, ankles, or lower legs, knees straight but not locked. Hold. Return, then reach again, slightly further if comfortable.",
    stretches: "Back of both thighs; flexibility of the knees and hips (in the source's wording).",
    why: "RD-8, the final exercise of the Army Recovery Drill — the drill ends with this area.",
    hold: "20–30 seconds (ATP 7-22.02, Recovery Drill).",
    panels: [{ pose: "seatedReach", label: "The hold — seated reach, grasping feet/ankles/shins" }],
    source: `${ATP}, Ch. 16 (Recovery Drill exercise 8).` },
  { id: "b6-3", code: "B6-3", name: "Modified Hurdler Stretch — seated, one leg", area: "hamstrings", tag: "STATIC", navyTop12: 10,
    howto: "Sit in a wide V. Pull one foot in toward the groin so that leg is bent; keep the other leg straight with a slight bend in the knee. Lean forward gently and reach for the toes of the straight leg. Note from the Navy guide: pulling the toes back toward the body (rather than pointing them) makes the hamstring stretch harder. Hold, then switch sides.",
    stretches: "Hamstring of the straight leg.",
    why: "Navy Top 12 Stretch 10; Daily 16's seated form (S3) stretches the same leg with the other leg tucked in front of the hips. The one-leg form lets each side be worked separately, which MCRP 7-20C.1 recommends checking — compare right and left sides for asymmetry.",
    hold: "10 seconds per side (Daily 16 form). No per-stretch hold printed for the Navy form on the pages accessed.",
    panels: [{ pose: "hurdler", label: "The hold — reaching toward the straight leg's toes" }],
    source: `${G13} (#10 Modified Hurdler); ${D16}, §3b (Modified Hurdler Stretch).` },
  { id: "b6-4", code: "B6-4", name: "Squat Bender hinge — moving forward reach", area: "hamstrings", tag: "DYNAMIC",
    howto: "Stand with feet wide, hands on hips. With knees slightly bent, hinge forward at the waist with a straight back and head in line with the spine, reaching toward the ground until you feel the stretch in the back of the thighs; stand back up. Alternate this hinge with the squat half of the exercise (see PD-5 in Warm-Up & Cool-Down for the full paired form).",
    stretches: "Back of the thighs and lower back, through a moving hinge.",
    why: "ATP 7-22.02 states the full Squat Bender prepares Soldiers to use proper lifting technique for heavy lifts — rehearsing the hinge dynamically before lifting, rather than holding a forward fold cold.",
    hold: "Dose: 5–10 repetitions of the full Squat Bender (ATP 7-22.02, Preparation Drill dose). No hold.",
    panels: [{ pose: "standWideHips", label: "Start — feet wide, hands on hips" }, { pose: "hinge", label: "Moving — hinge, straight back, reaching down" }],
    source: `${ATP}, Ch. 3 (Preparation Drill exercise 5).` },
  // ── B7 Calves ───────────────────────────────────────────────────
  { id: "b7-1", code: "B7-1", name: "Calf Stretch — staggered stance, back leg", area: "calves", tag: "STATIC",
    howto: "Stand with feet wide, hands on hips. Step one foot back 1–2 feet and place it flat, foot pointing forward. Keep that heel on the ground and bend the knees until you feel the stretch in that calf / Achilles; stepping further back and straightening the back knee increases it. Hold, then switch sides.",
    stretches: "Calf and Achilles of the back leg; ankle flexibility.",
    why: "ATP 7-22.02 states it increases flexibility of the ankle. MCRP 7-20C.1 adds the Marine-specific reason: tight calf muscles (gastrocnemius and soleus) reduce ankle dorsiflexion, Marines wear boots constantly and should protect their feet, and poor lower-leg flexibility can lead to pain, injury, or poor squat form.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    note: "⚠ Same name, three positions (conflict C-7): Army back-leg form (this card), Navy plank form (B7-2), Daily 16 front-leg / toes-up form (Daily 16 S6). All three are official; none is “the” calf stretch.",
    panels: [{ pose: "calfStretch", label: "The hold — back heel flat, weight shifted forward" }],
    source: `${ATP}, Ch. 16 (Recovery Drill exercise 7).` },
  { id: "b7-2", code: "B7-2", name: "Calf Stretch — plank position, foot crossed over", area: "calves", tag: "STATIC", navyTop12: 12,
    howto: "Get into a push-up (front leaning rest) position with the core braced and the body in a straight line from shoulders to ankle. Cross one foot over the other. With the supporting knee straight, gently push that heel toward the ground (deck) until you feel the stretch in that calf. Hold, then switch sides. Keep the body in a straight line — the guide states this protects the low back.",
    stretches: "Calf of the supporting (straight, heel-down) leg.",
    why: "Navy Top 12 Stretch 12 — a calf stretch that also loads the plank position, so it fits a deck / formation cool-down with no equipment.",
    hold: "15 seconds per side (Navy Guide 13, Stretch 12 — the one Top 12 entry whose page prints its own hold).",
    note: "⚠ Same name, three positions (conflict C-7): see B7-1 for the Army and Daily 16 forms.",
    panels: [{ pose: "calfPlank", label: "The hold — plank, foot crossed, heel pressed down" }],
    source: `${G13} (#12 Calf).` },
  { id: "b7-3", code: "B7-3", name: "Heel-to-Toe Rocking", area: "calves", tag: "DYNAMIC",
    howto: "Stand with feet together, hands on hips. Rock back onto the heels and pause briefly, then rock forward onto the toes and pause briefly. Keep rocking between the two.",
    stretches: "Ankles and calves / shins through repeated rocking range.",
    why: "It opens the Daily 16 warm-up (W1) — the ankles are moved first, before squats, butt kicks, and running in place build on them.",
    hold: "Dose: 10–15 repetitions (Daily 16). No hold beyond the brief pauses in the source description.",
    panels: [{ pose: "rockHeels", label: "Start — weight on heels, toes lifted" }, { pose: "rockToes", label: "Finish — weight on toes, heels lifted" }],
    source: `${D16}, §3a (Warm-Up exercise 1).` },
  // ── B8 Arms ─────────────────────────────────────────────────────
  { id: "b8-1", code: "B8-1", name: "Overhead Arm Pull — triceps and flank", area: "arms", tag: "STATIC",
    howto: "Stand with feet wide, hands on hips. Raise one arm overhead, grasp above that elbow with the other hand, and pull across while leaning the trunk to that side, until you feel the stretch in the back of the raised arm and down that flank. Hold, return, then switch sides.",
    stretches: "Triceps (back of the raised upper arm) and the flank / side of the trunk.",
    why: "RD-1, the opening exercise of the Army cool-down; ATP 7-22.02 states it develops flexibility of the joints of the arms, shoulders, and trunk.",
    hold: "20–30 seconds per side (ATP 7-22.02, Recovery Drill).",
    note: "⚠ Related but distinct (conflict C-8): B8-2 drops the hand down the back; B8-3 reaches the arm behind the back, low. Three distinct positions, three cards.",
    panels: [{ pose: "overheadPull", label: "The hold — elbow pulled across, trunk leaning" }],
    source: `${ATP}, Ch. 16 §16-3 (Recovery Drill exercise 1).` },
  { id: "b8-2", code: "B8-2", name: "Triceps Stretch — hand between the shoulder blades", area: "arms", tag: "STATIC",
    howto: "Stand with arms at your sides. Bend one elbow, bring that arm up and back, and rest the hand between the shoulder blades. Gently pull that elbow with the other hand, behind the head, until you feel the stretch over the back of the upper arm. Hold, then switch sides.",
    stretches: "Triceps — back of the upper arm.",
    why: "Daily 16's triceps standard (S10), distinct in position from B8-1: B8-1 pulls the raised arm across with a trunk lean; B8-2 drops the hand down the back. Both are official; they stay two diagrams.",
    hold: "10 seconds per side (Daily 16).",
    panels: [{ pose: "tricepsOH", label: "The hold — hand down between the shoulder blades" }],
    source: `${D16}, §3b (Triceps Stretch).` },
  { id: "b8-3", code: "B8-3", name: "Triceps Stretch — arm behind the back (Navy variant)", area: "arms", tag: "STATIC", navyTop12: 3,
    howto: "Take one arm and reach it behind your back. Place the other hand on the back side of that arm and gently push / guide it to achieve the stretch in that triceps. Hold, then switch sides.",
    stretches: "Triceps of the arm behind the back (as the guide states).",
    why: "Navy Top 12 Stretch 3 — included so the Navy's complete twelve are all present in the catalogue.",
    hold: NAVY_HOLD_NOTE,
    note: "⚠ Position warning (conflict C-8): as transcribed in Guide 13, this description is shorter and less precise than the Daily 16 overhead form, and it describes a different arm path (behind the back, low) from B8-2 (overhead, hand down the back). Both texts print as sourced, unblended.",
    panels: [{ pose: "tricepsBack", label: "The hold — arm behind the back, guided across" }],
    source: `${G13} (#3 Triceps).` },
  { id: "b8-4", code: "B8-4", name: "Punches to the Front and Punches to the Sky", area: "arms", tag: "DYNAMIC",
    howto: "While running in place at a gradually rising tempo, throw easy punches straight forward in front of the body, then throw easy punches straight up toward the sky. Keep the punches easy and the feet moving throughout; do not hold either arm position.",
    stretches: "Shoulders, arms, and trunk through repeated reaching in two directions.",
    why: "Daily 16 places the punches inside Double Time in Place (W4), so the upper body warms at the same rising tempo as the legs — an activity-matched warm-up in HPRC's terms, rather than a separate still stretch.",
    hold: "No separate rep count is sourced for the punches alone; they are performed inside Double Time in Place (Warm-Up W4). No dosage is invented here.",
    panels: [{ pose: "jogArms", label: "Start — jogging in place, arms at sides" }, { pose: "jogPunchFront", label: "Position A — punching straight forward" }, { pose: "jogPunchSky", label: "Position B — punching straight up" }],
    source: `${D16}, §3a (Double Time in Place).` },
];

export const CHEST_DYNAMIC_GAP =
  "No dynamic chest-specific stretch was found in the official sources used, and none has been invented (research flag F-4). The dynamic preparation for pressing work in the official drills is general — Preparation Drill Push-Up, Prone Row, and the arm movements in Double Time in Place — not a chest stretch. This area therefore holds static entries only.";

/** The Navy Top 12 in official Guide 13 order (the Navy cool-down
 * set): stretch ids 1–12. #8's catalogue card is B4-1 (Daily 16
 * half-kneeling form; the Navy standing form is described on that
 * card, per flag F-8). */
export const NAVY_TOP12_IDS: readonly string[] = [
  "b2-2", "b1-3", "b8-3", "b3-5", "b3-6", "b3-4",
  "b4-3", "b4-1", "b5-2", "b6-3", "b4-4", "b7-2",
];

export function stretchById(id: string): Stretch | undefined {
  return STRETCHES.find((s) => s.id === id);
}

export function drillEntryById(id: string): { sequence: DrillSequence; entry: DrillEntry } | undefined {
  for (const seq of SEQUENCES) {
    const entry = seq.entries.find((e) => e.id === id);
    if (entry) return { sequence: seq, entry };
  }
  return undefined;
}
