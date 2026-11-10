// Hand & Arm Signals — ORIGINAL schematic diagrams. Every panel is an
// original stick-figure drawing built for this app from the research
// pack's DIAGRAM pose lines (~/workspace/military-app/signals/
// signals.md). Nothing is traced, copied, or adapted from TC 3-21.60,
// FM 21-60, MCWP 3-11.2, or any task figure — the manuals' drawings were
// never used; only their published performance TEXT and the pack's
// prose pose descriptions were. The figure is drawn AS SEEN BY THE
// VIEWER (the pack's convention): the signaler's anatomical right arm
// appears on the viewer's left. Motion signals render START → FINISH
// panels; static signals render one panel. HONEST LIMIT: these are
// schematic pose diagrams in the app's diagram system — they show the
// published arm/hand positions, not photorealistic signal photography.

export type HandKind = "open" | "fist" | "point" | "flat" | "thumbUp" | "thumbDown" | "vee" | "fingerUp" | "fingerDown";

export type Pose = {
  /** Right arm (viewer-left): elbow, hand. */
  re: [number, number];
  rh: [number, number];
  /** Left arm (viewer-right): elbow, hand. */
  le: [number, number];
  lh: [number, number];
  rk?: HandKind;
  lk?: HandKind;
  /** Drawn seated in a vehicle hatch (head and shoulders only). */
  hatch?: boolean;
  /** Rifle held at the ready, aligned on the indicated direction. */
  rifle?: boolean;
  /** Night light in the moving hand. */
  light?: boolean;
  /** Figure shown from behind (rear traffic stop). */
  back?: boolean;
  /** Figure shown side-on (traffic GO signals). */
  side?: boolean;
  /** Bent at the waist (pace-count boot tap). */
  bent?: boolean;
};

type P = readonly [number, number];
function pose(re: P, rh: P, le: P, lh: P, extra?: Partial<Pose>): Pose {
  return { re: [...re] as [number, number], rh: [...rh] as [number, number], le: [...le] as [number, number], lh: [...lh] as [number, number], rk: "open", lk: "open", ...extra };
}

// Shoulders: anatomical right (50,32) viewer-left; anatomical left (70,32) viewer-right.
// Head (60,15), pelvis (60,60), feet y≈100.
const REST_R: P = [44, 46];
const REST_RH: P = [42, 60];
const REST_L: P = [76, 46];
const REST_LH: P = [78, 60];

export const POSES = {
  rest: pose(REST_R, REST_RH, REST_L, REST_LH),
  // One arm horizontal out to the side (anatomical right), palm down sweep.
  sweepSideR: pose([34, 32], [18, 32], REST_L, REST_LH),
  sweepSideL: pose(REST_R, REST_RH, [86, 32], [102, 32]),
  // Arm straight up overhead.
  upR: pose([52, 16], [54, 2], REST_L, REST_LH),
  upL: pose(REST_R, REST_RH, [68, 16], [66, 2]),
  upBoth: pose([52, 16], [54, 2], [68, 16], [66, 2]),
  upBothInboard: pose([54, 16], [56, 2], [66, 16], [64, 2]),
  // T pose — both arms horizontal.
  tPose: pose([34, 32], [18, 32], [86, 32], [102, 32]),
  tPalmsDown: pose([34, 32], [18, 32], [86, 32], [102, 32]),
  vee: pose([36, 20], [24, 8], [84, 20], [96, 8]),
  wedge: pose([36, 44], [24, 56], [84, 44], [96, 56]),
  // Echelon: anatomical right up 45 / left down 45 (Echelon Left per TC §1-10).
  echelonArmyL: pose([36, 20], [24, 8], [84, 44], [96, 56]),
  echelonArmyR: pose([36, 44], [24, 56], [84, 20], [96, 8]),
  goalpost: pose([34, 32], [34, 14], [86, 32], [86, 14]),
  herringboneFin: pose([34, 32], [34, 14], [86, 32], [86, 14]),
  brimTouch: pose([46, 20], [56, 10], REST_L, REST_LH, { rk: "point" }),
  brimTouchFlat: pose([46, 20], [57, 11], REST_L, REST_LH, { rk: "flat" }),
  contactStartL: pose(REST_R, REST_RH, [86, 32], [102, 32]),
  contactFinL: pose(REST_R, REST_RH, [86, 32], [86, 14]),
  contactStartR: pose([34, 32], [18, 32], REST_L, REST_LH),
  contactFinR: pose([34, 32], [34, 14], REST_L, REST_LH),
  crossX: pose([58, 26], [66, 38], [62, 26], [54, 38]),
  cbrnStart: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "fist", lk: "fist" }),
  cbrnFin: pose([42, 26], [52, 30], [78, 26], [68, 30], { rk: "fist", lk: "fist" }),
  bayonetHip: pose([44, 48], [40, 58], [72, 40], [64, 34], { lk: "fist" }),
  bayonetMuzzle: pose([40, 30], [30, 18], [72, 40], [64, 34]),
  rifleReady: pose([42, 36], [34, 30], [74, 38], [84, 32], { rifle: true, rk: "fist", lk: "fist" }),
  fingerGun: pose([40, 26], [28, 22], REST_L, REST_LH, { rk: "point" }),
  dipSideR: pose([34, 32], [18, 36], REST_L, REST_LH, { rk: "flat" }),
  dipSideRPalmDown: pose([34, 32], [18, 36], REST_L, REST_LH, { rk: "flat" }),
  takeCoverStart: pose([36, 20], [24, 10], REST_L, REST_LH, { rk: "flat" }),
  palmPoint: pose([44, 44], [52, 44], [78, 40], [68, 42], { rk: "point", lk: "flat" }),
  haltHead: pose([46, 18], [44, 6], REST_L, REST_LH, { rk: "flat" }),
  kneePress: pose([46, 40], [46, 52], REST_L, REST_LH, { rk: "flat" }),
  pronePress: pose([46, 52], [46, 64], REST_L, REST_LH, { rk: "flat" }),
  bootTap: pose([44, 52], [40, 78], REST_L, REST_LH, { bent: true }),
  phoneHand: pose([44, 18], [42, 8], REST_L, REST_LH, { rk: "point" }),
  helmetPat: pose([48, 14], [54, 4], REST_L, REST_LH, { rk: "flat" }),
  throatCut: pose([40, 26], [58, 24], REST_L, REST_LH, { rk: "flat" }),
  throatCutShoulder: pose([34, 32], [56, 25], REST_L, REST_LH, { rk: "flat" }),
  fistHead: pose([46, 18], [44, 7], REST_L, REST_LH, { rk: "fist" }),
  collarGrab: pose([48, 34], [56, 30], REST_L, REST_LH, { rk: "fist" }),
  upperArmFingers: pose([76, 44], [72, 34], REST_L, REST_LH, { rk: "flat" }),
  numberShow: pose([44, 20], [42, 8], REST_L, REST_LH, { rk: "point" }),
  earPalm: pose([44, 18], [40, 10], REST_L, REST_LH, { rk: "flat" }),
  thumbsUpExt: pose([38, 30], [24, 28], REST_L, REST_LH, { rk: "thumbUp" }),
  sweepFwd: pose([44, 48], [30, 50], REST_L, REST_LH, { rk: "flat" }),
  fingersSpread: pose([38, 28], [24, 22], REST_L, REST_LH, { rk: "point" }),
  shiftStart: pose([38, 26], [26, 20], REST_L, REST_LH),
  shiftMid: pose([58, 30], [68, 32], REST_L, REST_LH, { rk: "flat" }),
  shiftFinish: pose([80, 30], [96, 28], REST_L, REST_LH),
  ceaseFirePose: pose([52, 20], [54, 8], REST_L, REST_LH, { rk: "flat" }),
  fistIntoPalm: pose([52, 42], [58, 44], [72, 42], [64, 44], { rk: "fist", lk: "flat" }),
  coilCircle: pose([52, 16], [54, 2], REST_L, REST_LH),
  travelCircle: pose([52, 16], [54, 2], REST_L, REST_LH),
  flap: pose([36, 24], [24, 16], [84, 24], [96, 16]),
  boundingStart: pose([38, 22], [26, 12], REST_L, REST_LH),
  boundingFin: pose([48, 18], [56, 6], REST_L, REST_LH, { rk: "flat" }),
  fireStart: pose([52, 16], [54, 2], REST_L, REST_LH, { rk: "flat" }),
  advanceStart: pose([44, 44], [40, 58], REST_L, REST_LH),
  advanceFinish: pose([40, 30], [26, 28], REST_L, REST_LH, { rk: "flat" }),
  pressDown: pose([36, 40], [24, 48], [84, 40], [96, 48], { rk: "flat", lk: "flat" }),
  claspChin: pose([54, 28], [57, 18], [66, 28], [63, 18], { rk: "flat", lk: "flat" }),
  handsHelmet: pose([50, 14], [56, 5], [70, 14], [64, 5], { rk: "flat", lk: "flat" }),
  sliceApart: pose([38, 14], [26, 8], [82, 14], [94, 8], { rk: "flat", lk: "flat" }),
  openUpStart: pose([54, 16], [56, 4], [66, 16], [64, 4], { rk: "flat", lk: "flat" }),
  closeUpStart: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  closeUpFin: pose([48, 18], [54, 6], [72, 18], [66, 6]),
  attentionWave: pose([36, 26], [22, 20], REST_L, REST_LH, { rk: "flat" }),
  readyFwd: pose([40, 28], [26, 24], REST_L, REST_LH, { rk: "flat" }),
  scoopUp: pose([44, 48], [44, 58], REST_L, REST_LH, { rk: "flat" }),
  wristsCrossed: pose([54, 14], [64, 2], [66, 14], [56, 2], { rk: "flat", lk: "flat" }),
  armsCrossedFrontPalms: pose([54, 14], [66, 4], [66, 14], [54, 4], { rk: "flat", lk: "flat" }),
  faceCover: pose([46, 22], [54, 16], [74, 22], [66, 16], { rk: "flat", lk: "flat" }),
  faceCoverStart: pose([34, 32], [18, 32], [86, 32], [102, 32]),
  crank: pose([46, 48], [50, 58], REST_L, REST_LH, { rk: "fist" }),
  haltFull: pose([52, 16], [54, 2], REST_L, REST_LH, { rk: "flat" }),
  fistFullUp: pose([52, 16], [54, 2], REST_L, REST_LH, { rk: "fist" }),
  turnSideR: pose(REST_R, REST_RH, [86, 32], [102, 32], { lk: "flat" }),
  turnSideL: pose([34, 32], [18, 32], REST_L, REST_LH, { rk: "flat" }),
  fwdBeckon: pose([50, 36], [52, 26], [70, 36], [68, 26], { rk: "flat", lk: "flat" }),
  reversePush: pose([48, 34], [44, 26], [72, 34], [76, 26], { rk: "flat", lk: "flat" }),
  closeDistStart: pose([46, 36], [38, 34], [74, 36], [82, 34], { rk: "flat", lk: "flat" }),
  closeDistFin: pose([54, 34], [58, 32], [66, 34], [62, 32], { rk: "flat", lk: "flat" }),
  neutralSteer: pose([52, 26], [58, 24], [68, 26], [80, 22], { rk: "fist", lk: "point" }),
  trafficBoth: pose([38, 18], [26, 8], [82, 18], [94, 8], { rk: "flat", lk: "flat" }),
  trafficFront: pose([52, 16], [54, 4], REST_L, REST_LH, { rk: "flat" }),
  trafficRear: pose([52, 16], [54, 4], REST_L, REST_LH, { rk: "flat", back: true }),
  trafficGoSide: pose([40, 30], [26, 28], [78, 34], [78, 22], { rk: "flat", lk: "flat", side: true }),
  convoyOpen: pose(REST_R, REST_RH, [86, 32], [102, 36], { lk: "flat" }),
  convoyCloseStart: pose(REST_R, REST_RH, [86, 32], [102, 32], { lk: "flat" }),
  convoyCloseFin: pose(REST_R, REST_RH, [68, 16], [66, 2], { lk: "flat" }),
  passCircle: pose(REST_R, REST_RH, [86, 32], [100, 24], { lk: "flat" }),
  reversePushSingleStart: pose([48, 32], [46, 24], REST_L, REST_LH, { rk: "flat" }),
  reversePushSingleFin: pose([40, 30], [26, 28], REST_L, REST_LH, { rk: "flat" }),
  fig8Pose: pose([40, 24], [26, 16], REST_L, REST_LH, { rk: "flat" }),
  proceedR: pose(REST_R, REST_RH, [62, 34], [82, 32], { lk: "flat" }),
  proceedL: pose([58, 34], [38, 32], REST_L, REST_LH, { rk: "flat" }),
  departStart: pose([52, 14], [58, 4], REST_L, REST_LH),
  departFin: pose([40, 28], [24, 20], REST_L, REST_LH),
  crossOverheadRepeat: pose([54, 12], [66, 2], [66, 12], [54, 2], { rk: "flat", lk: "flat" }),
  crossDownFront: pose([54, 48], [64, 58], [66, 48], [56, 58], { rk: "flat", lk: "flat" }),
  spotTurn: pose([42, 22], [30, 12], [76, 44], [86, 52], { lk: "point" }),
  airMoveSide: pose([80, 30], [96, 28], [62, 14], [52, 4]),
  airAhead: pose([40, 36], [36, 24], [80, 36], [84, 24], { rk: "flat", lk: "flat" }),
  airRear: pose([42, 48], [38, 60], [78, 48], [82, 60], { rk: "flat", lk: "flat" }),
  loadNotReleased: pose([70, 34], [84, 34], [58, 36], [60, 26], { rk: "fist" }),
  hookupHelmet: pose([50, 12], [56, 3], [70, 20], [64, 8], { rk: "fist", lk: "fist" }),
  releaseSlice: pose(REST_R, REST_RH, [84, 32], [100, 32], { lk: "fist" }),
  releaseSliceHand: pose([46, 40], [60, 40], [84, 32], [100, 32], { rk: "flat", lk: "fist" }),
  beckonDown: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  beckonUp: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  hover: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  thrustFist: pose([44, 26], [32, 22], REST_L, REST_LH, { rk: "fist" }),
  rangeStart: pose([38, 30], [24, 28], REST_L, REST_LH, { rk: "fist" }),
  rangeFin: pose([38, 30], [24, 28], REST_L, REST_LH, { rk: "point" }),
  hipArc: pose([44, 50], [30, 52], REST_L, REST_LH, { rk: "flat" }),
  windmill: pose([52, 16], [54, 2], REST_L, REST_LH),
  pointFwd: pose([40, 30], [26, 28], REST_L, REST_LH, { rk: "point" }),
  chestBeat: pose([52, 36], [56, 40], [68, 36], [64, 40], { rk: "fist", lk: "fist" }),
  echelonSingleR: pose(REST_R, REST_RH, [84, 44], [96, 56], { lk: "flat" }),
  echelonSingleL: pose([36, 44], [24, 56], REST_L, REST_LH, { rk: "flat" }),
  skirmish: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  fireTeam: pose([58, 28], [70, 22], REST_L, REST_LH),
  squadPose: pose([40, 32], [26, 32], REST_L, REST_LH, { rk: "flat" }),
  platoonPose: pose([42, 32], [28, 30], [78, 32], [92, 30], { rk: "flat", lk: "flat" }),
  closeUsmcStart: pose([34, 32], [18, 32], [86, 32], [102, 32], { rk: "flat", lk: "flat" }),
  closeUsmcFin: pose([52, 36], [58, 34], [68, 36], [62, 34], { rk: "flat", lk: "flat" }),
  openUsmcStart: pose([52, 36], [58, 34], [68, 36], [62, 34], { rk: "flat", lk: "flat" }),
  fingerBeckon: pose([40, 30], [26, 28], REST_L, REST_LH, { rk: "point" }),
  shrug: pose([38, 48], [30, 38], [82, 48], [90, 38], { rk: "flat", lk: "flat" }),
  haltUsmcStart: pose([48, 28], [46, 18], REST_L, REST_LH, { rk: "flat" }),
  mountUsmcStart: pose([44, 46], [42, 60], REST_L, REST_LH, { rk: "flat" }),
  mountUsmcFin: pose([38, 20], [26, 10], REST_L, REST_LH, { rk: "flat" }),
  flankPoint: pose([38, 32], [22, 32], [82, 32], [98, 32], { rk: "point", lk: "point" }),
  buckleTouch: pose([48, 48], [56, 58], REST_L, REST_LH, { rk: "flat" }),
  pointGround: pose([48, 44], [52, 62], REST_L, REST_LH, { rk: "point" }),
  heliPull: pose([50, 14], [54, 4], [70, 14], [66, 4], { rk: "flat", lk: "flat" }),
  heliPush: pose([46, 48], [44, 58], [74, 48], [76, 58], { rk: "flat", lk: "flat" }),
  ropeClimb: pose([54, 34], [57, 24], [66, 40], [63, 30], { rk: "fist", lk: "fist" }),
  handsHead: pose([48, 14], [54, 5], [72, 14], [66, 5], { rk: "flat", lk: "flat" }),
  palmsRub: pose([50, 42], [56, 46], [70, 42], [64, 46], { rk: "flat", lk: "flat" }),
  stopAllFists: pose([44, 18], [42, 8], [76, 18], [78, 8], { rk: "fist", lk: "fist" }),
  thumbUpFist: pose([44, 30], [42, 20], REST_L, REST_LH, { rk: "thumbUp" }),
  thumbDownFist: pose([44, 30], [42, 40], REST_L, REST_LH, { rk: "thumbDown" }),
  thumbsOut: pose([50, 38], [40, 36], [70, 38], [80, 36], { rk: "thumbUp", lk: "thumbUp" }),
  thumbsIn: pose([50, 38], [58, 36], [70, 38], [62, 36], { rk: "thumbUp", lk: "thumbUp" }),
  openPointSide: pose(REST_R, REST_RH, [84, 30], [98, 28], { lk: "flat" }),
  openPointSideR: pose([36, 30], [22, 28], REST_L, REST_LH, { rk: "flat" }),
  fingerUpPose: pose([44, 22], [42, 10], REST_L, REST_LH, { rk: "fingerUp" }),
  fingerDownPose: pose([44, 40], [42, 54], REST_L, REST_LH, { rk: "fingerDown" }),
  fingersInPose: pose([44, 28], [52, 26], [76, 28], [68, 26], { rk: "fingerUp", lk: "fingerUp" }),
  fingersOutPose: pose([44, 28], [34, 26], [76, 28], [86, 26], { rk: "fingerUp", lk: "fingerUp" }),
  sideShiftR: pose([44, 32], [34, 30], [72, 36], [60, 34], { rk: "flat", lk: "point" }),
  sideShiftL: pose([48, 36], [60, 34], [76, 32], [86, 30], { rk: "point", lk: "flat" }),
  fistPointIn: pose([64, 36], [62, 34], [76, 36], [86, 38], { rk: "fist", lk: "point" }),
  fistPointInMirror: pose([44, 36], [34, 38], [56, 36], [58, 34], { rk: "point", lk: "fist" }),
  fistPointOut: pose([64, 36], [62, 34], [76, 34], [90, 30], { rk: "fist", lk: "point" }),
  fistPointOutMirror: pose([44, 34], [30, 30], [56, 36], [58, 34], { rk: "point", lk: "fist" }),
  vDownUp: pose([46, 44], [44, 56], [74, 24], [76, 12], { rk: "vee", lk: "vee" }),
  vUpDown: pose([46, 24], [44, 12], [74, 44], [76, 56], { rk: "vee", lk: "vee" }),
  tiltOut: pose([46, 24], [44, 12], [74, 26], [76, 14], { rk: "vee", lk: "flat" }),
  tiltIn: pose([46, 24], [44, 12], [74, 44], [76, 56], { rk: "vee", lk: "flat" }),
  fistsFacing: pose([52, 38], [57, 38], [68, 38], [63, 38], { rk: "fist", lk: "fist" }),
  unlockPose: pose([48, 36], [56, 34], [72, 36], [64, 34], { rk: "point", lk: "point" }),
  levelPose: pose(REST_R, REST_RH, [78, 36], [64, 36], { lk: "flat" }),
  centerLevel: pose([74, 24], [76, 12], [78, 36], [64, 36], { rk: "flat", lk: "flat" }),
  rotatePoseR: pose([48, 44], [46, 56], [74, 34], [62, 32], { rk: "flat", lk: "point" }),
  rotatePoseL: pose([46, 34], [58, 32], [72, 44], [74, 56], { rk: "point", lk: "flat" }),
  nightLightH: pose([40, 30], [24, 28], REST_L, REST_LH, { light: true }),
  nightLightV: pose([46, 24], [44, 10], REST_L, REST_LH, { light: true }),
  nightLightCircle: pose([40, 26], [28, 18], REST_L, REST_LH, { light: true }),
  nightLightBlink: pose([48, 30], [44, 22], REST_L, REST_LH, { light: true }),
  nightFig8: pose([44, 36], [36, 28], REST_L, REST_LH, { light: true }),
} as const;

export type PoseKey = keyof typeof POSES;

const BODY = "var(--accent)";
const FAR = "#9aa086";
const INK = "var(--text)";

function HandGlyph({ x, y, kind }: { x: number; y: number; kind: HandKind }) {
  if (kind === "fist") return <circle cx={x} cy={y} r={4.2} fill={INK} stroke={INK} strokeWidth={1} />;
  if (kind === "point" || kind === "fingerUp" || kind === "fingerDown") {
    const dy = kind === "fingerDown" ? 7 : kind === "fingerUp" ? -7 : 0;
    return (
      <g stroke={INK} strokeWidth={2.4} strokeLinecap="round">
        <circle cx={x} cy={y} r={3} fill="var(--surface)" />
        <line x1={x} y1={y} x2={x + (kind === "point" ? -5 : 0)} y2={y + dy} />
      </g>
    );
  }
  if (kind === "thumbUp") return (<g><circle cx={x} cy={y} r={3.6} fill={INK} /><line x1={x} y1={y - 2} x2={x} y2={y - 8} stroke={INK} strokeWidth={2.6} strokeLinecap="round" /></g>);
  if (kind === "thumbDown") return (<g><circle cx={x} cy={y} r={3.6} fill={INK} /><line x1={x} y1={y + 2} x2={x} y2={y + 8} stroke={INK} strokeWidth={2.6} strokeLinecap="round" /></g>);
  if (kind === "vee") return (<g stroke={INK} strokeWidth={2.2} strokeLinecap="round"><line x1={x} y1={y} x2={x - 3} y2={y - 6} /><line x1={x} y1={y} x2={x + 3} y2={y - 6} /><circle cx={x} cy={y} r={2.4} fill="var(--surface)" /></g>);
  // open / flat — open palm circle.
  return <circle cx={x} cy={y} r={3.8} fill="var(--surface)" stroke={INK} strokeWidth={2} />;
}

function Figure({ poseKey, hatch }: { poseKey: PoseKey; hatch?: boolean }) {
  const p = POSES[poseKey];
  const RS: [number, number] = [50, 32];
  const LS: [number, number] = [70, 32];
  return (
    <g>
      {(p.hatch || hatch) && <rect x={18} y={34} width={84} height={10} rx={2} fill="#8b8e83" opacity={0.55} />}
      {p.bent ? (
        <>
          <path d="M 60 30 L 60 52" stroke={BODY} strokeWidth={4.4} strokeLinecap="round" />
          <circle cx={60} cy={22} r={8} fill="none" stroke={INK} strokeWidth={2.4} />
          <path d="M 60 52 L 52 74 L 50 92" fill="none" stroke={FAR} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 60 52 L 68 70 L 74 84" fill="none" stroke={FAR} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <circle cx={60} cy={15} r={8} fill="none" stroke={INK} strokeWidth={2.4} />
          <path d="M 60 23 L 60 60" stroke={BODY} strokeWidth={4.4} strokeLinecap="round" />
          <path d="M 60 60 L 54 82 L 52 100" fill="none" stroke={FAR} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 60 60 L 66 82 L 68 100" fill="none" stroke={FAR} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {/* far (left anatomical) arm behind torso edge, then right arm */}
      <path d={`M ${LS[0]} ${LS[1]} L ${p.le[0]} ${p.le[1]} L ${p.lh[0]} ${p.lh[1]}`} fill="none" stroke={FAR} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M ${RS[0]} ${RS[1]} L ${p.re[0]} ${p.re[1]} L ${p.rh[0]} ${p.rh[1]}`} fill="none" stroke={BODY} strokeWidth={3.8} strokeLinecap="round" strokeLinejoin="round" />
      <HandGlyph x={p.lh[0]} y={p.lh[1]} kind={p.lk ?? "open"} />
      <HandGlyph x={p.rh[0]} y={p.rh[1]} kind={p.rk ?? "open"} />
      {p.rifle && <line x1={30} y1={26} x2={90} y2={34} stroke={INK} strokeWidth={3} strokeLinecap="round" />}
      {p.light && <g><circle cx={p.rh[0]} cy={p.rh[1]} r={4.5} fill="#f2c14e" stroke={INK} strokeWidth={1.4} /></g>}
      {p.back && <text x={60} y={112} textAnchor="middle" fontSize={7} fill="var(--dim)">FROM BEHIND</text>}
    </g>
  );
}

export type SignalDiagramSpec = {
  start: PoseKey;
  finish?: PoseKey;
  mid?: PoseKey;
  note: string;
  /** Signaler shown in a vehicle hatch (mounted signals). */
  hatch?: boolean;
};

/** Renders the entry's diagram: one panel for a static signal, or
 * START (→ MID) → FINISH panels for a motion signal. */
export function SignalDiagram({ spec, name }: { spec: SignalDiagramSpec; name: string }) {
  const panels: { key: PoseKey; label: string }[] = spec.finish
    ? [
        { key: spec.start, label: "START" },
        ...(spec.mid ? [{ key: spec.mid, label: "THEN" }] : []),
        { key: spec.finish, label: "FINISH" },
      ]
    : [{ key: spec.start, label: "POSE" }];
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label={`Signal diagram for ${name}: ${spec.note}`}>
        {panels.map((panel, i) => (
          <figure key={i} className="shrink-0 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-1.5" style={{ width: 132 }}>
            <svg viewBox="0 0 120 116" className="block h-auto w-full" role="img" aria-label={`${name} — ${panel.label}: ${spec.note}`}>
              <Figure poseKey={panel.key} hatch={spec.hatch} />
            </svg>
            <figcaption className="pb-0.5 text-center text-xs font-bold tracking-wide text-[var(--dim)]">{panel.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-[var(--dim)]">{spec.note}</p>
    </div>
  );
}
