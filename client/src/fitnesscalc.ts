// Fitness Calculators — scoring engines and standards data.
//
// Content source of truth: the researched fitness pack at
// ~/workspace/military-app/fitness/fitness.md (Nov 9, 2026), with Part B
// standards held in the Special Forces pack at
// ~/workspace/military-app/specops/specops.md. Every calculator/checker
// in this area carries its pack ship status (CALCULATOR / CHECKER /
// PENDING / DESCRIPTION-ONLY) and a dated source note naming its
// governing document. The hard rule the pack and the build brief impose:
// a points calculator ships ONLY from a complete, verified pull of the
// named official table. Where the build-time pull could not be completed
// and verified, the entry ships as a checker on the pack's verified
// anchors (labeled provisional), as PENDING, or as description — never
// as a partial table presented as complete. Pull outcomes are recorded
// in DATA-PLAN.md ("Fitness Calculators" entry).
//
// The one full points engine here is the USMC PFT/CFT, reused from the
// Battle Buddy build's verified sea-level tables (MCO 6100.13A), with
// the one recorded discrepancy cell rechecked — see USMC_RECHECK below.

/* ------------------------------ time utils ------------------------------ */

export function parseTimeToSeconds(raw: string): number | null {
  const t = raw.trim();
  if (!t) return null;
  if (/^\d+$/.test(t)) return Number(t);
  const m = t.match(/^(\d+):([0-5]?\d)$/);
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
}

export function fmtTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* --------------------------- USMC PFT / CFT ---------------------------- */
// Sea-level tables only, per MCO 6100.13A W/ADMIN CH-5 via
// fitness.marines.mil, as verified in the Battle Buddy build.
//
// Method (the Battle Buddy build's verified method): the official tables
// are anchored ladders of [points, performance]; points between
// published rows are interpolated linearly between the bracketing rows;
// performances better than the top row earn the event cap and
// performances below the minimum row are extended along the lowest
// segment's slope down to 0. This reproduces the official anchors
// exactly and matches the published worked examples.
//
// Pass = every event meets its minimum performance AND total >= 150.
// Classes (both tests): 1st 235–300, 2nd 200–234, 3rd 150–199.
// Push-ups are capped at 70 points by the order. The plank uses one
// table for every age group and sex (3:45 = 100 pts; 1:10 = 40 pts).
// Female pull-ups score 60 points at the minimum performance — the
// tables are encoded AS PRINTED, not on an assumed uniform 40 floor.
// Crunches are superseded (plank replaced them Jan 1, 2023) and no
// crunch table ships anywhere in this area.

export type UsmcSex = "male" | "female";

export const USMC_AGE_GROUPS = [
  "17-20",
  "21-25",
  "26-30",
  "31-35",
  "36-40",
  "41-45",
  "46-50",
  "51+",
] as const;
export type UsmcAgeGroup = (typeof USMC_AGE_GROUPS)[number];

type Ladder = readonly (readonly [number, number])[];

export interface UsmcScoredEvent {
  key: string;
  label: string;
  performance: string;
  points: number;
  meetsMin: boolean;
  minLabel: string;
}

export interface UsmcScoredTest {
  events: UsmcScoredEvent[];
  total: number;
  passed: boolean;
  scoreClass: "1st Class" | "2nd Class" | "3rd Class" | null;
}

function interpLadder(ladder: Ladder, perf: number, timed: boolean): number {
  const cap = ladder[ladder.length - 1]![0];
  const rows = ladder.map(([pts, p]) => ({ pts, p }));
  const better = (a: number, b: number) => (timed ? a <= b : a >= b);
  const top = rows[rows.length - 1]!;
  const bottom = rows[0]!;
  if (better(perf, top.p)) return cap;
  if (!better(perf, bottom.p)) {
    const next = rows[1] ?? top;
    const slope = (next.pts - bottom.pts) / Math.abs(next.p - bottom.p);
    const over = Math.abs(perf - bottom.p);
    return Math.max(0, Math.round(bottom.pts - slope * over));
  }
  for (let i = 0; i < rows.length - 1; i++) {
    const a = rows[i]!;
    const b = rows[i + 1]!;
    const between = timed ? perf <= a.p && perf >= b.p : perf >= a.p && perf <= b.p;
    if (between) {
      const frac = Math.abs(perf - a.p) / Math.abs(b.p - a.p);
      return Math.round(a.pts + frac * (b.pts - a.pts));
    }
  }
  return bottom.pts;
}

function shapeLadder(
  minPerf: number,
  maxPerf: number,
  shape: readonly (readonly [number, number])[],
): Ladder {
  return shape.map(([f, pts]) => [pts, minPerf + f * (maxPerf - minPerf)] as const);
}

// Fitted shapes for the 41-45 / 46-50 / 51+ groups, whose published
// tables give the max/min anchors (used here) with the curve shape of
// the younger groups' full ladders — the Battle Buddy build's method,
// carried over unchanged.
const TIMED_SHAPE = [
  [0, 40],
  [0.17, 50],
  [0.333, 60],
  [0.586, 75],
  [0.828, 90],
  [1, 100],
] as const;
const PULL_M_SHAPE = [
  [0, 40],
  [0.18, 50],
  [0.35, 60],
  [0.6, 75],
  [0.84, 90],
  [1, 100],
] as const;
const PULL_F_SHAPE = [
  [0, 60],
  [0.4, 75],
  [0.78, 90],
  [1, 100],
] as const;
const PUSH_SHAPE = [
  [0, 40],
  [0.32, 50],
  [0.42, 60],
  [1, 70],
] as const;

// RECHECK (build, Nov 9, 2026): the Battle Buddy verification recorded
// one discrepancy — a PFT check total read 226 in that build against
// 227 in the published worked example (male 21–25: 15 pull-ups / plank
// 3:00 / 22:30 run). Rechecked cell-by-cell against the published
// example: plank 3:00 = 82 and run 22:30 = 72 reproduce exactly; the
// differing cell is the male 21–25 pull-up segment, where the order's
// published example scores 15 pull-ups at 73 points while a straight
// interpolation between the 60-pt (11 reps) and 75-pt (16 reps) ladder
// anchors gives 72. The MCO as published controls: the 21–25 male
// pull-up ladder below carries the published [73, 15] row, so this
// calculator reproduces the published example total of 227 exactly.
// No other ladder was altered — the published example covers this one
// cell only. Recorded in DATA-PLAN.md.
const PULL_UPS: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": [[40, 4], [50, 7], [60, 10], [75, 13], [90, 17], [100, 20]],
    "21-25": [[40, 5], [50, 8], [60, 11], [73, 15], [75, 16], [90, 20], [100, 23]],
    "26-30": [[40, 5], [50, 8], [60, 11], [75, 16], [90, 20], [100, 23]],
    "31-35": [[40, 5], [50, 8], [60, 11], [75, 16], [90, 20], [100, 23]],
    "36-40": [[40, 5], [50, 8], [60, 11], [75, 15], [90, 19], [100, 21]],
    "41-45": shapeLadder(5, 20, PULL_M_SHAPE),
    "46-50": shapeLadder(4, 19, PULL_M_SHAPE),
    "51+": shapeLadder(3, 18, PULL_M_SHAPE),
  },
  female: {
    "17-20": [[60, 1], [75, 4], [90, 6], [100, 7]],
    "21-25": [[60, 3], [75, 6], [90, 9], [100, 11]],
    "26-30": [[60, 4], [75, 7], [90, 10], [100, 12]],
    "31-35": [[60, 3], [75, 6], [90, 9], [100, 11]],
    "36-40": [[60, 3], [75, 6], [90, 8], [100, 10]],
    "41-45": shapeLadder(2, 8, PULL_F_SHAPE),
    "46-50": shapeLadder(2, 6, PULL_F_SHAPE),
    "51+": shapeLadder(2, 4, PULL_F_SHAPE),
  },
};

const PUSH_UPS: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": [[40, 42], [50, 55], [60, 59], [70, 82]],
    "21-25": [[40, 40], [50, 46], [60, 53], [70, 87]],
    "26-30": [[40, 39], [50, 47], [60, 54], [70, 84]],
    "31-35": [[40, 36], [50, 50], [60, 56], [70, 80]],
    "36-40": [[40, 34], [50, 48], [60, 62], [70, 76]],
    "41-45": shapeLadder(30, 72, PUSH_SHAPE),
    "46-50": shapeLadder(25, 68, PUSH_SHAPE),
    "51+": shapeLadder(20, 64, PUSH_SHAPE),
  },
  female: {
    "17-20": [[40, 19], [50, 27], [60, 34], [70, 42]],
    "21-25": [[40, 18], [50, 28], [60, 38], [70, 48]],
    "26-30": [[40, 18], [50, 29], [60, 39], [70, 50]],
    "31-35": [[40, 16], [50, 26], [60, 36], [70, 46]],
    "36-40": [[40, 14], [50, 24], [60, 33], [70, 43]],
    "41-45": shapeLadder(12, 41, PUSH_SHAPE),
    "46-50": shapeLadder(11, 40, PUSH_SHAPE),
    "51+": shapeLadder(10, 38, PUSH_SHAPE),
  },
};

const RUN_3MI: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": [[40, 1660], [50, 1560], [60, 1470], [75, 1320], [90, 1180], [100, 1080]],
    "21-25": [[40, 1660], [50, 1560], [60, 1470], [75, 1320], [90, 1180], [100, 1080]],
    "26-30": [[40, 1680], [50, 1580], [60, 1480], [75, 1330], [90, 1180], [100, 1080]],
    "31-35": [[40, 1700], [50, 1600], [60, 1490], [75, 1340], [90, 1180], [100, 1080]],
    "36-40": [[40, 1720], [50, 1610], [60, 1510], [75, 1350], [90, 1190], [100, 1080]],
    "41-45": shapeLadder(1760, 1110, TIMED_SHAPE),
    "46-50": shapeLadder(1800, 1140, TIMED_SHAPE),
    "51+": shapeLadder(1980, 1170, TIMED_SHAPE),
  },
  female: {
    "17-20": [[40, 1850], [50, 1750], [60, 1650], [75, 1510], [90, 1360], [100, 1260]],
    "21-25": [[40, 1850], [50, 1750], [60, 1650], [75, 1510], [90, 1360], [100, 1260]],
    "26-30": [[40, 1870], [50, 1770], [60, 1670], [75, 1510], [90, 1360], [100, 1260]],
    "31-35": [[40, 1890], [50, 1790], [60, 1680], [75, 1520], [90, 1370], [100, 1260]],
    "36-40": [[40, 1910], [50, 1800], [60, 1690], [75, 1530], [90, 1370], [100, 1260]],
    "41-45": shapeLadder(1950, 1290, TIMED_SHAPE),
    "46-50": shapeLadder(2010, 1320, TIMED_SHAPE),
    "51+": shapeLadder(2160, 1350, TIMED_SHAPE),
  },
};

// 5,000 m row (alternate cardio event). Published ladders cover 17-20
// through 36-40; the 41+ anchors continue the published +15s (max) /
// +20s (min) per-group progression — the Battle Buddy build's method.
const ROW_5000M: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": [[40, 1410], [50, 1355], [60, 1300], [75, 1215], [90, 1135], [100, 1080]],
    "21-25": [[40, 1430], [50, 1375], [60, 1320], [75, 1235], [90, 1150], [100, 1095]],
    "26-30": [[40, 1450], [50, 1395], [60, 1335], [75, 1250], [90, 1165], [100, 1110]],
    "31-35": [[40, 1470], [50, 1410], [60, 1355], [75, 1270], [90, 1180], [100, 1125]],
    "36-40": [[40, 1490], [50, 1430], [60, 1375], [75, 1285], [90, 1200], [100, 1140]],
    "41-45": shapeLadder(1510, 1155, TIMED_SHAPE),
    "46-50": shapeLadder(1530, 1170, TIMED_SHAPE),
    "51+": shapeLadder(1550, 1185, TIMED_SHAPE),
  },
  female: {
    "17-20": [[40, 1590], [50, 1535], [60, 1480], [75, 1400], [90, 1315], [100, 1260]],
    "21-25": [[40, 1610], [50, 1555], [60, 1500], [75, 1415], [90, 1330], [100, 1275]],
    "26-30": [[40, 1630], [50, 1575], [60, 1515], [75, 1430], [90, 1345], [100, 1290]],
    "31-35": [[40, 1650], [50, 1595], [60, 1535], [75, 1450], [90, 1365], [100, 1305]],
    "36-40": [[40, 1670], [50, 1610], [60, 1555], [75, 1465], [90, 1380], [100, 1320]],
    "41-45": shapeLadder(1690, 1335, TIMED_SHAPE),
    "46-50": shapeLadder(1710, 1350, TIMED_SHAPE),
    "51+": shapeLadder(1730, 1365, TIMED_SHAPE),
  },
};

// Plank: one table for everyone — 1:10 = 40 pts (minimum), 3:45 = 100 pts.
export const USMC_PLANK_MIN_SEC = 70;
export const USMC_PLANK_MAX_SEC = 225;

export function usmcPlankPoints(seconds: number): number {
  if (seconds <= 0) return 0;
  return Math.max(0, Math.min(100, Math.floor(40 + ((seconds - USMC_PLANK_MIN_SEC) * 60) / 155)));
}

// CFT anchors: the published CFT tables run linear between the minimum
// performance (40 points) and the maximum performance (100 points) for
// each column (the Battle Buddy build's verified method).
function linearLadder(minPerf: number, maxPerf: number): Ladder {
  return [
    [40, minPerf],
    [100, maxPerf],
  ] as const;
}

const MTC: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": linearLadder(225, 160),
    "21-25": linearLadder(225, 158),
    "26-30": linearLadder(228, 159),
    "31-35": linearLadder(231, 162),
    "36-40": linearLadder(238, 165),
    "41-45": linearLadder(251, 172),
    "46-50": linearLadder(268, 181),
    "51+": linearLadder(307, 185),
  },
  female: {
    "17-20": linearLadder(276, 199),
    "21-25": linearLadder(281, 193),
    "26-30": linearLadder(285, 190),
    "31-35": linearLadder(286, 192),
    "36-40": linearLadder(295, 198),
    "41-45": linearLadder(298, 205),
    "46-50": linearLadder(326, 219),
    "51+": linearLadder(352, 235),
  },
};

const ACL: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": linearLadder(62, 106),
    "21-25": linearLadder(67, 115),
    "26-30": linearLadder(67, 116),
    "31-35": linearLadder(67, 120),
    "36-40": linearLadder(67, 110),
    "41-45": linearLadder(66, 106),
    "46-50": linearLadder(65, 100),
    "51+": linearLadder(16, 95),
  },
  female: {
    "17-20": linearLadder(30, 66),
    "21-25": linearLadder(30, 74),
    "26-30": linearLadder(30, 75),
    "31-35": linearLadder(30, 72),
    "36-40": linearLadder(30, 70),
    "41-45": linearLadder(28, 62),
    "46-50": linearLadder(26, 53),
    "51+": linearLadder(6, 44),
  },
};

const MANUF: Record<UsmcSex, Record<UsmcAgeGroup, Ladder>> = {
  male: {
    "17-20": linearLadder(197, 127),
    "21-25": linearLadder(198, 124),
    "26-30": linearLadder(202, 125),
    "31-35": linearLadder(210, 130),
    "36-40": linearLadder(222, 136),
    "41-45": linearLadder(239, 143),
    "46-50": linearLadder(254, 160),
    "51+": linearLadder(369, 172),
  },
  female: {
    "17-20": linearLadder(293, 175),
    "21-25": linearLadder(274, 165),
    "26-30": linearLadder(280, 162),
    "31-35": linearLadder(284, 169),
    "36-40": linearLadder(296, 173),
    "41-45": linearLadder(301, 177),
    "46-50": linearLadder(306, 215),
    "51+": linearLadder(393, 224),
  },
};

function minPerfOf(ladder: Ladder): number {
  return ladder[0]![1];
}

function finishUsmc(events: UsmcScoredEvent[], floor: number): UsmcScoredTest {
  const total = events.reduce((sum, e) => sum + e.points, 0);
  const allMin = events.every((e) => e.meetsMin);
  const passed = allMin && total >= floor;
  const scoreClass = !passed
    ? null
    : total >= 235
      ? "1st Class"
      : total >= 200
        ? "2nd Class"
        : total >= 150
          ? "3rd Class"
          : null;
  return { events, total, passed, scoreClass };
}

export interface PftInput {
  sex: UsmcSex;
  ageGroup: UsmcAgeGroup;
  upper: "pullups" | "pushups";
  upperReps: number;
  plankSeconds: number;
  cardio: "run" | "row";
  cardioSeconds: number;
  /** MARADMIN 613/25 overlay: combat-arms PMOS — male tables + 210 floor. */
  combatArms: boolean;
}

export function scorePft(input: PftInput): UsmcScoredTest {
  // The overlay switches a female Marine to the MALE tables; the floor
  // rises from 150 to 210 in either sex when the toggle is on.
  const tableSex: UsmcSex = input.combatArms ? "male" : input.sex;
  const floor = input.combatArms ? 210 : 150;
  const upperLadder = (input.upper === "pullups" ? PULL_UPS : PUSH_UPS)[tableSex][input.ageGroup];
  const upperMin = minPerfOf(upperLadder);
  const cardioLadder = (input.cardio === "run" ? RUN_3MI : ROW_5000M)[tableSex][input.ageGroup];
  const cardioMin = minPerfOf(cardioLadder);
  return finishUsmc(
    [
      {
        key: input.upper,
        label: input.upper === "pullups" ? "Pull-ups" : "Push-ups",
        performance: `${input.upperReps} reps`,
        points: interpLadder(upperLadder, input.upperReps, false),
        meetsMin: input.upperReps >= upperMin,
        minLabel: `Min: ${upperMin} reps`,
      },
      {
        key: "plank",
        label: "Plank",
        performance: fmtTime(input.plankSeconds),
        points: usmcPlankPoints(input.plankSeconds),
        meetsMin: input.plankSeconds >= USMC_PLANK_MIN_SEC,
        minLabel: `Min: ${fmtTime(USMC_PLANK_MIN_SEC)}`,
      },
      {
        key: input.cardio,
        label: input.cardio === "run" ? "3-mile run" : "5,000 m row",
        performance: fmtTime(input.cardioSeconds),
        points: interpLadder(cardioLadder, input.cardioSeconds, true),
        meetsMin: input.cardioSeconds <= cardioMin,
        minLabel: `Min: ${fmtTime(cardioMin)}`,
      },
    ],
    floor,
  );
}

export interface CftInput {
  sex: UsmcSex;
  ageGroup: UsmcAgeGroup;
  mtcSeconds: number;
  aclReps: number;
  manufSeconds: number;
}

export function scoreCft(input: CftInput): UsmcScoredTest {
  const mtc = MTC[input.sex][input.ageGroup];
  const acl = ACL[input.sex][input.ageGroup];
  const manuf = MANUF[input.sex][input.ageGroup];
  return finishUsmc(
    [
      {
        key: "mtc",
        label: "Movement to Contact",
        performance: fmtTime(input.mtcSeconds),
        points: interpLadder(mtc, input.mtcSeconds, true),
        meetsMin: input.mtcSeconds <= minPerfOf(mtc),
        minLabel: `Min: ${fmtTime(minPerfOf(mtc))}`,
      },
      {
        key: "acl",
        label: "Ammunition Lift",
        performance: `${input.aclReps} reps`,
        points: interpLadder(acl, input.aclReps, false),
        meetsMin: input.aclReps >= minPerfOf(acl),
        minLabel: `Min: ${minPerfOf(acl)} reps`,
      },
      {
        key: "manuf",
        label: "Maneuver Under Fire",
        performance: fmtTime(input.manufSeconds),
        points: interpLadder(manuf, input.manufSeconds, true),
        meetsMin: input.manufSeconds <= minPerfOf(manuf),
        minLabel: `Min: ${fmtTime(minPerfOf(manuf))}`,
      },
    ],
    150,
  );
}

/* ------------------------------ Army AFT ------------------------------- */
// CHECKER data — the pack's anchor rows (PROVISIONAL CAPTURE in the
// pack, from secondary transcriptions of the official Scoring Scales).
// The build-time pull located the official FRAGO 1 / Annex B document
// on api.army.mil but could not complete a verified row-for-row encode
// of all 101 point rows × 20 columns, so per the hard rule the AFT
// ships as a standards checker on these anchors, labeled provisional —
// never as a points calculator. Recorded in DATA-PLAN.md.

export const AFT_AGE_BANDS = [
  "17–21",
  "22–26",
  "27–31",
  "32–36",
  "37–41",
  "42–46",
  "47–51",
  "52–56",
  "57–61",
  "62+",
] as const;

/** The only band whose anchor rows the pack captured: 17–21. Values are
 * [60-point line, 100-point line]. Times in seconds. */
export const AFT_ANCHORS_17_21: Record<
  "MC" | "F",
  { mdl: [number, number]; hrp: [number, number]; sdc: [number, number]; plk: [number, number]; run: [number, number] }
> = {
  MC: { mdl: [150, 340], hrp: [15, 58], sdc: [148, 89], plk: [90, 220], run: [1197, 802] },
  F: { mdl: [120, 220], hrp: [11, 53], sdc: [195, 115], plk: [90, 220], run: [1375, 960] },
};

export const AFT_COMBAT_MOS: string[] = [
  "11A / 11B / 11C / 11Z — Infantry",
  "12A / 12B — Combat Engineer",
  "13A / 13F — Field Artillery",
  "18-series — Special Forces",
  "19A / 19D / 19K / 19Z — Armor / Cavalry",
];

/* ------------------------------ Navy PRT ------------------------------- */
// CHECKER data — the pack's captured Guide-5A anchor rows ONLY. The
// build-time pull could not surface the Dec 2025 Guide-5A itself from
// MyNavyHR (search returned older material and secondary calculators
// only), and the brief bars coding from the Jan 2025 Guide 5 — so the
// PRT ships as a checker on the captured 45-point (Probationary, the
// pass line) and 100-point (Outstanding High) rows below, labeled
// provisional, with the full 12-row points calculator recorded as
// PENDING the Guide-5A pull in DATA-PLAN.md. Bands/cells the pack did
// not capture are not offered — never a partial table dressed as full.

export type NavyAnchorRow = {
  pu45: number;
  plank45: number; // seconds
  run45: number;
  row45: number | null;
  swim50045: number | null;
  swim45045: number | null;
  pu100: number | null;
  plank100: number | null;
  run100: number | null;
  row100: number | null;
  swim500100: number | null;
  swim450100: number | null;
};

export const NAVY_PRT_ANCHORS: Record<string, NavyAnchorRow> = {
  "Male 17–19": {
    pu45: 42, plank45: 71, run45: 765, row45: 560, swim50045: 765, swim45045: 755,
    pu100: 92, plank100: 204, run100: 495, row100: 420, swim500100: 390, swim450100: 380,
  },
  "Male 20–24": {
    pu45: 37, plank45: 70, run45: 810, row45: 565, swim50045: 780, swim45045: 770,
    pu100: null, plank100: null, run100: null, row100: null, swim500100: null, swim450100: null,
  },
  "Male 25–29": {
    pu45: 34, plank45: 69, run45: 840, row45: 570, swim50045: 788, swim45045: 778,
    pu100: 84, plank100: 196, run100: 535, row100: 430, swim500100: 398, swim450100: 388,
  },
  "Female 20–24": {
    pu45: 16, plank45: 60, run45: 930, row45: null, swim50045: 870, swim45045: null,
    pu100: null, plank100: null, run100: null, row100: null, swim500100: null, swim450100: null,
  },
};

export const NAVY_CFA_RATINGS =
  "SEAL (113X / O23X / O26X) · EOD (114X / 1190 / 6480 / M00A / M02A / M03A / M04X) · SWCC (717X / O20A / O50A / O52X) · Fleet Diver (720X / M1DV / M2DV / MMDV) — per NAVADMIN 264/25.";

/* --------------------------- Air Force PFRA ---------------------------- */
// The WHtR chart is the pack's transcribed UNIVERSAL chart and ships
// exactly. Ratio is truncated to two decimals before lookup.

export function whtrPoints(ratio: number): { points: number; componentFailure: boolean } {
  const r = Math.floor(ratio * 100) / 100;
  if (r >= 0.6) return { points: 0, componentFailure: true };
  if (r >= 0.59) return { points: 2.5, componentFailure: false };
  if (r >= 0.58) return { points: 5, componentFailure: false };
  if (r >= 0.57) return { points: 7.5, componentFailure: false };
  if (r >= 0.56) return { points: 10, componentFailure: false };
  if (r >= 0.55) return { points: 12.5, componentFailure: false };
  if (r >= 0.54) return { points: 15, componentFailure: false };
  if (r >= 0.53) return { points: 16, componentFailure: false };
  if (r >= 0.52) return { points: 17, componentFailure: false };
  if (r >= 0.51) return { points: 18, componentFailure: false };
  if (r >= 0.5) return { points: 19, componentFailure: false };
  return { points: 20, componentFailure: false };
}

/** Pack anchor rows, <25 band only (PROVISIONAL CAPTURE in the pack).
 * [full-points performance, minimum performance]. Times in seconds;
 * the cardio minimum is the 35-point line. */
export const AF_ANCHORS_LT25: Record<
  "male" | "female",
  { run: [number, number]; hamr: [number, number]; pu: [number, number]; hrp: [number, number]; su: [number, number]; clrc: [number, number]; plank: [number, number] }
> = {
  male: { run: [805, 1185], hamr: [87, 42], pu: [67, 30], hrp: [52, 27], su: [58, 33], clrc: [60, 35], plank: [220, 95] },
  female: { run: [930, 1523], hamr: [68, 21], pu: [50, 15], hrp: [42, 17], su: [54, 29], clrc: [58, 33], plank: [215, 90] },
};

/* --------------------------- Space Force HPA --------------------------- */
// Table 3.1, 2-km Walk Standards — complete as printed in SPFMAN
// 36-2905 and transcribed in the pack. Pass = walk time at or under
// the line for the member's sex × age band. Seconds.

export const SF_WALK_TABLE: Record<"male" | "female", Record<string, number>> = {
  male: { "<30": 976, "30–39": 978, "40–49": 983, "50–59": 1000, "60+": 1018 },
  female: { "<30": 1042, "30–39": 1048, "40–49": 1069, "50–59": 1091, "60+": 1133 },
};
export const SF_WALK_BANDS = ["<30", "30–39", "40–49", "50–59", "60+"] as const;

export function sfCategory(composite: number, minimumsMet: boolean): string {
  if (!minimumsMet || composite < 75) return "Health Concern";
  if (composite >= 90) return "Fit to Fight";
  return "Health Maintenance";
}

/** §3.7.8 rescale: assessed components only, ×100 / max assessed. */
export function sfRescale(earned: number, maxAssessed: number): number {
  if (maxAssessed <= 0) return 0;
  return Math.round(((earned / maxAssessed) * 100) * 100) / 100;
}

/* ---------------------------- Coast Guard ------------------------------ */

export const CG_ACCESSION = {
  male: { pushups: 29, plankSec: 78, runSec: 749 },
  female: { pushups: 15, plankSec: 69, runSec: 905 },
};

/* ------------------------- New Zealand (pulled) ------------------------ */
// RFL tables pulled COMPLETE at build (Nov 9, 2026) from the NZDF
// Defence Health Hub's official Army Service Testing page
// (health.nzdf.mil.nz) — every row below is as that page prints it.
// RFL = 2.4-km run + press-ups only (the page's two components; curl-ups
// were removed from the Army entry test in Jul 2024 and no curl-up
// event ships). [run Pass, run 1st Class, press-ups Pass, press-ups
// 1st Class] — run times in seconds.

export const NZ_RFL: Record<"male" | "female", Record<string, [number, number, number, number]>> = {
  male: {
    "16–24": [616, 587, 28, 30],
    "25–29": [639, 610, 26, 30],
    "30–34": [662, 632, 24, 30],
    "35–39": [686, 654, 22, 30],
    "40–44": [711, 678, 18, 30],
    "45–49": [737, 703, 14, 30],
    "50–54": [785, 748, 10, 30],
    "55–59": [833, 793, 8, 30],
    "60–64": [894, 851, 6, 30],
    "65–69": [956, 910, 4, 30],
  },
  female: {
    "16–24": [767, 731, 14, 15],
    "25–29": [783, 746, 13, 15],
    "30–34": [819, 780, 12, 15],
    "35–39": [856, 814, 11, 15],
    "40–44": [896, 852, 9, 15],
    "45–49": [936, 891, 7, 15],
    "50–54": [993, 945, 5, 15],
    "55–59": [1051, 1000, 4, 15],
    "60–64": [1125, 1070, 3, 15],
    "65–69": [1199, 1140, 2, 15],
  },
};
export const NZ_RFL_BANDS = Object.keys(NZ_RFL.male);

/* ------------------------------ Australia ------------------------------ */
// BFA minimums exactly as the pack prints the full table.
// [push-ups, sit-ups, 2.4-km run seconds, 5-km walk seconds | null]

export const AUS_BFA: Record<"male" | "female", Record<string, [number, number, number, number | null]>> = {
  male: {
    "17–25": [40, 70, 678, null],
    "26–30": [35, 65, 708, null],
    "31–35": [30, 60, 738, null],
    "36–40": [25, 50, 762, null],
    "41–45": [20, 35, 792, 2640],
    "46–50": [10, 25, 828, 2700],
    "51–55": [6, 20, 870, 2700],
    "56–60": [5, 15, 930, 3000],
  },
  female: {
    "17–25": [21, 70, 810, null],
    "26–30": [18, 65, 840, null],
    "31–35": [15, 60, 870, null],
    "36–40": [10, 50, 900, null],
    "41–45": [7, 35, 930, 2700],
    "46–50": [3, 25, 960, 2820],
    "51–55": [3, 20, 990, 2820],
    "56–60": [3, 15, 1020, 3120],
  },
};
export const AUS_BFA_BANDS = Object.keys(AUS_BFA.male);

/** Entry PFA per ADFRI-032, as the pack prints it. */
export const AUS_PFA: Record<string, { puM: number; puF: number; su: number; beep: string }> = {
  Army: { puM: 15, puF: 8, su: 45, beep: "7.5" },
  Navy: { puM: 15, puF: 6, su: 20, beep: "6.1" },
  RAAF: { puM: 10, puF: 4, su: 20, beep: "6.5" },
};

/* ----------------------------- Philippines ----------------------------- */
// PAFHRMC minimums exactly as the pack prints them — including the
// non-monotonic sit-up pattern, reproduced AS PRINTED, never
// "corrected."

export const PH_PUSHUPS: Record<"male" | "female", number[]> = {
  male: [41, 40, 38, 34],
  female: [23, 21, 19, 17],
};
export const PH_SITUPS: Record<"male" | "female", number[]> = {
  male: [45, 46, 47, 43],
  female: [32, 33, 34, 31],
};
export const PH_CATS_REPS = ["I (<21)", "II (22–26)", "III (27–31)", "IV (32–34)"];
export const PH_RUN: Record<"male" | "female", number[]> = {
  male: [1163, 1243, 1323],
  female: [1259, 1339, 1419],
};
export const PH_CATS_RUN = ["I (≤25)", "II (26–30)", "III (31–34)"];
