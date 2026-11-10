// KnotDiagram — ORIGINAL vector step panels for the Knots library,
// drawn fresh from the pack's step text (knots.md §2, binding). Never
// traced, copied, or adapted from Animated Knots / NetKnots / 101Knots
// or any site, and not scans of manual figures: each archetype below is
// a schematic rope-state drawing in the app's own art system.
//
// Rules implemented here (pack §2 + build brief):
// - ONE panel per numbered step + ONE final panel (the dressed knot).
// - Panel n shows the rope state after step n: elements appear as the
//   step fraction passes their stage; nothing from later steps shows.
// - TWO-TONE rope: the working end and the part it moves are the app
//   accent color; the standing part is a neutral light tone; a second
//   rope (bends) is a third distinct tone, called out in the caption
//   under the strip (KnotsView).
// - Webbing knots are drawn as flat straps (wide, flat strokes).
// - Consistent top-down view; the rope enters the frame the same way
//   in every panel of an entry. Anchors, carabiners, spars, hooks are
//   simple gray shapes in one style. Body-worn systems draw on a
//   simple torso / hip outline.

import type { KnotDiagramKind } from "./knots";

const WORK = "var(--accent)";
const STAND = "#a8ad97";
const SECOND = "#6f96b8";
const OBJ = "#8b8e83";
const OBJ_DARK = "#5d6057";
const STRAND2 = "#c2a15a";
const STRAND3 = "#9a7fb8";

type P = {
  /** 0..1 — fraction of steps completed for this panel. */
  t: number;
  /** True for the dressed final panel. */
  fin: boolean;
  webbing: boolean;
};

/** Stage gate: an element drawn from stage `at` onward. */
const on = (t: number, at: number) => t >= at - 0.001;

function Rope({
  d,
  tone = STAND,
  w = 5,
  dash,
  opacity = 1,
}: {
  d: string;
  tone?: string;
  w?: number;
  dash?: string;
  opacity?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={tone}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      opacity={opacity}
    />
  );
}

function Strap({ d, tone = STAND }: { d: string; tone?: string }) {
  // Flat webbing: a wide stroke with a darker edge line down its middle.
  return (
    <>
      <path d={d} fill="none" stroke={tone} strokeWidth={11} strokeLinecap="butt" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={OBJ_DARK} strokeWidth={11} fillOpacity={0} strokeOpacity={0.25} strokeDasharray="2 6" strokeLinecap="butt" />
    </>
  );
}

function Post({ x = 60, y1 = 8, y2 = 82 }: { x?: number; y1?: number; y2?: number }) {
  return <rect x={x - 6} y={y1} width={12} height={y2 - y1} rx={3} fill={OBJ} stroke={OBJ_DARK} strokeWidth={1} />;
}

function Carabiner({ cx, cy, r = 13 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={r * 0.72} ry={r} fill="none" stroke={OBJ} strokeWidth={4} />
      <line x1={cx + r * 0.62} y1={cy - r * 0.55} x2={cx + r * 0.62} y2={cy + r * 0.55} stroke={OBJ_DARK} strokeWidth={2.5} />
    </g>
  );
}

function Hook({ cx = 60, cy = 30 }: { cx?: number; cy?: number }) {
  return (
    <path
      d={`M ${cx} ${cy - 16} L ${cx} ${cy + 2} A 11 11 0 1 1 ${cx + 11} ${cy - 6}`}
      fill="none"
      stroke={OBJ}
      strokeWidth={5}
      strokeLinecap="round"
    />
  );
}

function Torso() {
  return (
    <g fill="none" stroke={OBJ_DARK} strokeWidth={2}>
      <path d="M 38 12 Q 60 4 82 12 L 86 44 Q 87 66 78 84 L 42 84 Q 33 66 34 44 Z" fill="var(--surface)" />
    </g>
  );
}

function Hips() {
  return (
    <g fill="none" stroke={OBJ_DARK} strokeWidth={2}>
      <path d="M 30 16 L 90 16 L 94 40 L 74 84 L 64 84 L 60 52 L 56 84 L 46 84 L 26 40 Z" fill="var(--surface)" />
    </g>
  );
}

// ── Archetypes ────────────────────────────────────────────────────
// Each returns the panel's drawing for progress t. Stages are spread
// evenly across the entry's own step count by the caller, so stage
// thresholds below are fractions of the whole tying sequence.

function EndKnot({ t, fin, webbing }: P) {
  const strap = webbing;
  const line = strap ? Strap : Rope;
  return (
    <g>
      {line({ d: "M 4 45 L 52 45", tone: STAND })}
      {on(t, 0.2) && <ellipse cx={66} cy={45} rx={13} ry={11} fill="none" stroke={WORK} strokeWidth={strap ? 10 : 5} />}
      {on(t, 0.45) && line({ d: "M 66 34 C 78 30 84 38 82 45", tone: WORK })}
      {on(t, 0.65) && line({ d: "M 82 45 C 84 54 78 60 68 58", tone: WORK })}
      {fin ? (
        <>
          {line({ d: "M 58 45 a 8 8 0 1 1 8 -8 a 8 8 0 1 1 -8 8", tone: WORK })}
          {line({ d: "M 84 50 L 108 58", tone: WORK })}
        </>
      ) : (
        on(t, 0.8) && line({ d: "M 80 52 L 104 62", tone: WORK })
      )}
    </g>
  );
}

function Strands({ t, fin }: P) {
  return (
    <g>
      <Rope d="M 4 45 L 46 45" />
      <Rope d="M 46 45 C 58 32 66 22 78 12" tone={WORK} />
      <Rope d="M 46 45 C 62 45 76 45 96 45" tone={STRAND2} />
      <Rope d="M 46 45 C 58 58 66 68 78 78" tone={STRAND3} />
      {on(t, 0.5) && (
        <>
          <path d="M 60 30 a 9 9 0 1 1 9 9" fill="none" stroke={WORK} strokeWidth={4} />
          <path d="M 78 45 a 9 9 0 1 1 9 0" fill="none" stroke={STRAND2} strokeWidth={4} />
          <path d="M 60 60 a 9 9 0 1 0 9 -9" fill="none" stroke={STRAND3} strokeWidth={4} />
        </>
      )}
      {fin && <circle cx={52} cy={45} r={10} fill="none" stroke={WORK} strokeWidth={5} />}
    </g>
  );
}

function Bend({ t, fin, webbing }: P) {
  const A = webbing ? Strap : Rope;
  return (
    <g>
      {/* Rope 1 (standing tone) enters from the left */}
      {A({ d: "M 4 34 L 52 34", tone: STAND })}
      {A({ d: "M 52 34 C 66 34 66 45 58 50", tone: WORK })}
      {/* Rope 2 (third tone) enters from the right */}
      {A({ d: "M 116 56 L 68 56", tone: SECOND })}
      {on(t, 0.3) && A({ d: "M 68 56 C 54 56 54 45 62 40", tone: SECOND })}
      {on(t, 0.55) && (
        <>
          <path d="M 52 40 L 68 50" stroke={WORK} strokeWidth={webbing ? 10 : 5} strokeLinecap="round" />
          <path d="M 68 40 L 52 50" stroke={SECOND} strokeWidth={webbing ? 10 : 5} strokeLinecap="round" />
        </>
      )}
      {fin && (
        <>
          {A({ d: "M 84 38 L 106 30", tone: WORK })}
          {A({ d: "M 36 52 L 14 60", tone: SECOND })}
        </>
      )}
    </g>
  );
}

function HitchPost({ t, fin }: P) {
  const wraps = fin ? 3 : t >= 0.66 ? 3 : t >= 0.4 ? 2 : t >= 0.15 ? 1 : 0;
  return (
    <g>
      <Post />
      <Rope d="M 4 70 C 24 66 40 62 52 58" />
      {Array.from({ length: wraps }).map((_, i) => (
        <path
          key={i}
          d={`M 52 ${30 + i * 11} a 9 7 0 1 1 18 0 a 9 7 0 1 1 -18 0`}
          fill="none"
          stroke={WORK}
          strokeWidth={5}
        />
      ))}
      {on(t, 0.55) && <Rope d="M 52 62 L 70 34" tone={WORK} />}
      {(fin || on(t, 0.8)) && <Rope d="M 70 60 C 84 66 96 68 110 66" tone={WORK} />}
    </g>
  );
}

function HitchPlank({ t, fin }: P) {
  return (
    <g>
      <rect x={22} y={38} width={76} height={13} rx={2} fill={OBJ} stroke={OBJ_DARK} />
      <Rope d="M 14 84 C 20 66 26 58 34 52" />
      {on(t, 0.25) && <Rope d="M 34 52 C 30 40 38 32 52 30" tone={WORK} />}
      {on(t, 0.5) && <Rope d="M 52 30 C 70 28 84 34 88 48" tone={WORK} />}
      {on(t, 0.7) && <Rope d="M 88 48 C 90 60 84 68 74 72" tone={WORK} />}
      {(fin || on(t, 0.85)) && (
        <>
          <ellipse cx={60} cy={24} rx={10} ry={6} fill="none" stroke={WORK} strokeWidth={5} />
          <Rope d="M 68 20 L 96 8" tone={WORK} />
        </>
      )}
    </g>
  );
}

function HitchHook({ t, fin }: P) {
  return (
    <g>
      <Hook cx={58} cy={34} />
      <Rope d="M 16 84 C 24 64 34 52 46 46" />
      <Rope d="M 104 84 C 96 64 86 52 74 46" tone={WORK} />
      {on(t, 0.35) && <Rope d="M 46 46 C 52 38 66 38 74 46" tone={WORK} />}
      {(fin || on(t, 0.7)) && <Rope d="M 44 52 L 76 52" tone={WORK} />}
    </g>
  );
}

function HitchRing({ t, fin }: P) {
  const wraps = fin ? 2 : t >= 0.3 ? 2 : t >= 0.1 ? 1 : 0;
  return (
    <g>
      <circle cx={60} cy={26} r={11} fill="none" stroke={OBJ} strokeWidth={5} />
      <Rope d="M 8 82 C 26 74 42 66 52 56" />
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M 51 ${44 - i * 8} L 69 ${44 - i * 8}`} stroke={WORK} strokeWidth={5} strokeLinecap="round" />
      ))}
      {on(t, 0.55) && <Rope d="M 52 52 C 60 60 68 60 72 50" tone={WORK} />}
      {(fin || on(t, 0.8)) && <Rope d="M 74 56 C 86 62 98 64 110 62" tone={WORK} />}
    </g>
  );
}

function FrictionHost({ t, fin }: P) {
  const wraps = fin ? 4 : Math.max(0, Math.min(4, Math.round(t * 4)));
  return (
    <g>
      <Rope d="M 4 26 L 116 26" w={6} />
      <Rope d="M 4 64 L 116 64" w={6} />
      {Array.from({ length: wraps }).map((_, i) => (
        <path
          key={i}
          d={`M ${38 + i * 11} 20 L ${38 + i * 11} 70`}
          stroke={WORK}
          strokeWidth={5}
          strokeLinecap="round"
        />
      ))}
      {on(t, 0.3) && <Rope d="M 34 20 C 44 12 76 12 86 20" tone={WORK} />}
      {(fin || on(t, 0.75)) && (
        <>
          <Rope d="M 34 70 C 44 78 76 78 86 70" tone={WORK} />
          <Rope d="M 60 78 C 60 84 60 86 60 88" tone={WORK} />
        </>
      )}
    </g>
  );
}

function StopperHost({ t, fin }: P) {
  const wraps = fin ? 3 : t >= 0.5 ? 3 : t >= 0.3 ? 2 : t >= 0.15 ? 1 : 0;
  return (
    <g>
      <Rope d="M 4 45 L 116 45" w={7} />
      <Rope d="M 10 74 C 24 70 34 62 40 54" tone={WORK} />
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M ${44 + i * 12} 34 L ${44 + i * 12} 56`} stroke={WORK} strokeWidth={5} strokeLinecap="round" />
      ))}
      {(fin || on(t, 0.8)) && <Rope d="M 84 56 C 92 64 100 68 110 70" tone={WORK} />}
    </g>
  );
}

function Girth({ t, fin }: P) {
  return (
    <g>
      <rect x={14} y={16} width={92} height={10} rx={5} fill={OBJ} stroke={OBJ_DARK} />
      <path d="M 44 26 C 44 44 52 52 60 52 C 68 52 76 44 76 26" fill="none" stroke={STAND} strokeWidth={5} />
      {on(t, 0.3) && <Rope d="M 48 44 C 54 36 66 36 72 44" tone={WORK} />}
      {(fin || on(t, 0.6)) && (
        <>
          <Rope d="M 52 50 L 46 80" tone={WORK} />
          <Rope d="M 68 50 L 74 80" tone={WORK} />
        </>
      )}
    </g>
  );
}

function CarabinerHitch({ t, fin }: P) {
  return (
    <g>
      <Carabiner cx={60} cy={42} r={17} />
      <Rope d="M 10 12 C 30 20 42 26 50 32" />
      <Rope d="M 110 78 C 92 70 78 62 70 54" tone={WORK} />
      {on(t, 0.3) && <path d="M 46 30 C 56 20 70 24 72 36" fill="none" stroke={WORK} strokeWidth={5} />}
      {on(t, 0.55) && <path d="M 48 52 C 58 62 72 58 74 46" fill="none" stroke={STAND} strokeWidth={5} />}
      {(fin || on(t, 0.8)) && <Rope d="M 70 54 C 84 48 98 46 110 48" tone={WORK} />}
    </g>
  );
}

function CarabinerPair({ t, fin }: P) {
  return (
    <g>
      <Carabiner cx={46} cy={40} r={15} />
      <Carabiner cx={76} cy={40} r={15} />
      <Rope d="M 8 78 C 24 66 34 58 40 50" />
      <Rope d="M 112 78 C 96 66 86 58 82 50" tone={WORK} />
      {on(t, 0.35) && <path d="M 40 32 C 52 22 70 22 82 32" fill="none" stroke={WORK} strokeWidth={5} />}
      {(fin || on(t, 0.7)) && <path d="M 52 52 C 58 60 66 60 72 52" fill="none" stroke={WORK} strokeWidth={5} />}
    </g>
  );
}

function LoopEnd({ t, fin }: P) {
  return (
    <g>
      <Rope d="M 60 88 L 60 62" />
      {on(t, 0.15) && <ellipse cx={60} cy={40} rx={17} ry={19} fill="none" stroke={STAND} strokeWidth={5} />}
      {on(t, 0.4) && <ellipse cx={60} cy={58} rx={8} ry={7} fill="none" stroke={WORK} strokeWidth={5} />}
      {on(t, 0.6) && <Rope d="M 60 51 C 70 44 74 36 70 28" tone={WORK} />}
      {(fin || on(t, 0.8)) && <Rope d="M 70 62 C 80 68 92 70 104 68" tone={WORK} />}
    </g>
  );
}

function LoopMulti({ t, fin }: P) {
  return (
    <g>
      <Rope d="M 30 88 L 52 64" />
      <Rope d="M 90 88 L 68 64" />
      {on(t, 0.2) && <ellipse cx={42} cy={42} rx={13} ry={17} fill="none" stroke={STAND} strokeWidth={5} />}
      {on(t, 0.4) && <ellipse cx={78} cy={42} rx={13} ry={17} fill="none" stroke={WORK} strokeWidth={5} />}
      {on(t, 0.6) && <ellipse cx={60} cy={60} rx={9} ry={7} fill="none" stroke={WORK} strokeWidth={5} />}
      {(fin || on(t, 0.85)) && <path d="M 50 60 L 70 60" stroke={WORK} strokeWidth={5} strokeLinecap="round" />}
    </g>
  );
}

function LoopMid({ t, fin }: P) {
  return (
    <g>
      <Rope d="M 4 68 L 44 68" />
      <Rope d="M 76 68 L 116 68" />
      {on(t, 0.2) && <ellipse cx={60} cy={38} rx={12} ry={16} fill="none" stroke={WORK} strokeWidth={5} />}
      {on(t, 0.45) && <path d="M 46 62 C 52 50 68 50 74 62" fill="none" stroke={WORK} strokeWidth={5} />}
      {on(t, 0.65) && <path d="M 47 68 C 54 58 66 58 73 68" fill="none" stroke={STAND} strokeWidth={5} />}
      {(fin || on(t, 0.85)) && <path d="M 50 66 L 70 66" stroke={WORK} strokeWidth={5} strokeLinecap="round" />}
    </g>
  );
}

function CoilBody({ t, fin }: P) {
  const wraps = fin ? 5 : Math.max(0, Math.min(5, Math.round(t * 5)));
  return (
    <g>
      <Torso />
      <Rope d="M 84 8 C 92 16 94 24 92 32" tone={WORK} />
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M 40 ${34 + i * 8} L 80 ${34 + i * 8}`} stroke={STAND} strokeWidth={4.5} strokeLinecap="round" />
      ))}
      {(fin || on(t, 0.8)) && (
        <>
          <ellipse cx={60} cy={76} rx={8} ry={6} fill="none" stroke={WORK} strokeWidth={4.5} />
          <Rope d="M 66 78 L 88 84" tone={WORK} />
        </>
      )}
    </g>
  );
}

function LashingCross({ t, fin }: P) {
  const wraps = fin ? 4 : Math.max(0, Math.min(4, Math.round(t * 4)));
  return (
    <g>
      <rect x={54} y={6} width={12} height={78} rx={3} fill={OBJ} stroke={OBJ_DARK} />
      <rect x={18} y={39} width={84} height={12} rx={3} fill={OBJ} stroke={OBJ_DARK} />
      {Array.from({ length: wraps }).map((_, i) => (
        <path
          key={i}
          d={`M ${30 + i * 4} 33 L ${86 - i * 2} 57 M ${86 - i * 2} 33 L ${30 + i * 4} 57`}
          stroke={WORK}
          strokeWidth={3.5}
          opacity={0.9}
        />
      ))}
      {(fin || on(t, 0.8)) && <path d="M 44 45 L 76 45" stroke={WORK} strokeWidth={5} strokeLinecap="round" />}
    </g>
  );
}

function LashingParallel({ t, fin }: P) {
  const wraps = fin ? 5 : Math.max(0, Math.min(5, Math.round(t * 5)));
  return (
    <g>
      <rect x={40} y={8} width={11} height={74} rx={3} fill={OBJ} stroke={OBJ_DARK} />
      <rect x={69} y={8} width={11} height={74} rx={3} fill={OBJ} stroke={OBJ_DARK} />
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M 36 ${26 + i * 8} L 84 ${26 + i * 8}`} stroke={WORK} strokeWidth={4} strokeLinecap="round" />
      ))}
      {(fin || on(t, 0.85)) && <path d="M 57 30 L 57 62" stroke={WORK} strokeWidth={5} strokeLinecap="round" />}
    </g>
  );
}

function LashingBlock({ t, fin }: P) {
  return (
    <g>
      <rect x={14} y={14} width={92} height={11} rx={3} fill={OBJ} stroke={OBJ_DARK} />
      {on(t, 0.15) && <path d="M 34 10 L 34 30 M 44 10 L 44 30 M 54 10 L 54 30" stroke={WORK} strokeWidth={4} strokeLinecap="round" />}
      {on(t, 0.45) && (
        <g>
          <rect x={50} y={44} width={20} height={26} rx={4} fill={OBJ} stroke={OBJ_DARK} strokeWidth={1.5} />
          <circle cx={60} cy={57} r={6} fill="none" stroke={OBJ_DARK} strokeWidth={2} />
          <path d="M 56 30 L 56 44 M 64 30 L 64 44" stroke={WORK} strokeWidth={4} strokeLinecap="round" />
        </g>
      )}
      {(fin || on(t, 0.75)) && <path d="M 76 10 L 76 30 M 86 10 L 86 30" stroke={WORK} strokeWidth={4} strokeLinecap="round" />}
    </g>
  );
}

function WhippingArt({ t, fin }: P) {
  const wraps = fin ? 6 : Math.max(0, Math.min(6, Math.round(t * 6)));
  return (
    <g>
      <Rope d="M 4 45 L 112 45" w={9} />
      {on(t, 0.1) && <Rope d="M 62 34 C 76 28 92 30 102 38" tone={WORK} w={2.5} />}
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M ${66 + i * 6} 35 L ${66 + i * 6} 55`} stroke={WORK} strokeWidth={3} strokeLinecap="round" />
      ))}
      {fin && <Rope d="M 100 45 L 112 45" tone={WORK} w={2.5} />}
    </g>
  );
}

function SheepshankArt({ t, fin }: P) {
  return (
    <g>
      <Rope d="M 4 45 L 26 45" />
      <Rope d="M 94 45 L 116 45" />
      {on(t, 0.15) && <path d="M 26 45 C 34 24 48 24 52 45 C 56 66 70 66 78 45" fill="none" stroke={STAND} strokeWidth={5} />}
      {on(t, 0.3) && <Rope d="M 78 45 C 82 34 88 34 94 45" />}
      {on(t, 0.5) && <ellipse cx={28} cy={45} rx={7} ry={9} fill="none" stroke={WORK} strokeWidth={5} />}
      {(fin || on(t, 0.7)) && <ellipse cx={92} cy={45} rx={7} ry={9} fill="none" stroke={WORK} strokeWidth={5} />}
    </g>
  );
}

function AnchorWraps({ t, fin }: P) {
  const wraps = fin ? 4 : Math.max(0, Math.min(4, Math.round(t * 4)));
  return (
    <g>
      <rect x={52} y={4} width={16} height={82} rx={4} fill={OBJ} stroke={OBJ_DARK} />
      <Rope d="M 8 84 C 24 78 38 74 48 70" />
      {Array.from({ length: wraps }).map((_, i) => (
        <path key={i} d={`M 46 ${18 + i * 12} L 74 ${18 + i * 12}`} stroke={STAND} strokeWidth={5} strokeLinecap="round" />
      ))}
      {(fin || on(t, 0.8)) && (
        <>
          <ellipse cx={88} cy={62} rx={8} ry={10} fill="none" stroke={WORK} strokeWidth={5} />
          <Carabiner cx={74} cy={70} r={8} />
        </>
      )}
    </g>
  );
}

function HookEyes({ t, fin }: P) {
  return (
    <g>
      <Hook cx={60} cy={26} />
      <Rope d="M 20 84 C 30 66 40 56 48 50" />
      <Rope d="M 100 84 C 90 66 80 56 72 50" tone={WORK} />
      {on(t, 0.3) && (
        <>
          <ellipse cx={48} cy={38} rx={8} ry={11} fill="none" stroke={STAND} strokeWidth={5} />
          <ellipse cx={72} cy={38} rx={8} ry={11} fill="none" stroke={WORK} strokeWidth={5} />
        </>
      )}
      {(fin || on(t, 0.7)) && <path d="M 48 44 C 54 50 66 50 72 44" fill="none" stroke={WORK} strokeWidth={5} />}
    </g>
  );
}

function RappelSeatArt({ t, fin }: P) {
  return (
    <g>
      <Hips />
      <path d="M 32 26 L 88 26" stroke={STAND} strokeWidth={5} strokeLinecap="round" />
      {on(t, 0.2) && <ellipse cx={60} cy={26} rx={7} ry={5} fill="none" stroke={WORK} strokeWidth={4.5} />}
      {on(t, 0.4) && (
        <>
          <path d="M 52 30 L 56 50" stroke={STAND} strokeWidth={5} strokeLinecap="round" />
          <path d="M 68 30 L 64 50" stroke={WORK} strokeWidth={5} strokeLinecap="round" />
        </>
      )}
      {on(t, 0.6) && (
        <>
          <path d="M 40 34 L 52 48" stroke={WORK} strokeWidth={4.5} strokeLinecap="round" />
          <path d="M 80 34 L 68 48" stroke={WORK} strokeWidth={4.5} strokeLinecap="round" />
        </>
      )}
      {(fin || on(t, 0.85)) && (
        <>
          <ellipse cx={42} cy={28} rx={6} ry={5} fill="none" stroke={WORK} strokeWidth={4.5} />
          <Carabiner cx={60} cy={40} r={9} />
        </>
      )}
    </g>
  );
}

const ART: Record<KnotDiagramKind, (p: P) => React.ReactNode> = {
  "end-knot": (p) => <EndKnot {...p} />,
  strands: (p) => <Strands {...p} />,
  bend: (p) => <Bend {...p} />,
  "webbing-bend": (p) => <Bend {...p} />,
  "hitch-post": (p) => <HitchPost {...p} />,
  "hitch-plank": (p) => <HitchPlank {...p} />,
  "hitch-hook": (p) => <HitchHook {...p} />,
  "hitch-ring": (p) => <HitchRing {...p} />,
  "friction-host": (p) => <FrictionHost {...p} />,
  "stopper-host": (p) => <StopperHost {...p} />,
  girth: (p) => <Girth {...p} />,
  carabiner: (p) => <CarabinerHitch {...p} />,
  "carabiner-pair": (p) => <CarabinerPair {...p} />,
  "loop-end": (p) => <LoopEnd {...p} />,
  "loop-multi": (p) => <LoopMulti {...p} />,
  "loop-mid": (p) => <LoopMid {...p} />,
  "coil-body": (p) => <CoilBody {...p} />,
  "lashing-cross": (p) => <LashingCross {...p} />,
  "lashing-parallel": (p) => <LashingParallel {...p} />,
  "lashing-block": (p) => <LashingBlock {...p} />,
  whipping: (p) => <WhippingArt {...p} />,
  sheepshank: (p) => <SheepshankArt {...p} />,
  "anchor-wraps": (p) => <AnchorWraps {...p} />,
  "hook-eyes": (p) => <HookEyes {...p} />,
  "rappel-seat": (p) => <RappelSeatArt {...p} />,
};

/**
 * One diagram panel. `step` is the 1-based step just completed (across
 * all of the entry's methods); the final panel passes fin.
 */
export function KnotPanel({
  kind,
  step,
  totalSteps,
  fin = false,
  webbing = false,
  label,
}: {
  kind: KnotDiagramKind;
  step: number;
  totalSteps: number;
  fin?: boolean;
  webbing?: boolean;
  label: string;
}) {
  const t = fin ? 1 : Math.max(0.12, Math.min(1, step / Math.max(1, totalSteps)));
  const draw = ART[kind];
  return (
    <figure className="w-[7.5rem] shrink-0">
      <svg
        viewBox="0 0 120 90"
        role="img"
        aria-label={label}
        className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)]"
      >
        {draw({ t, fin, webbing })}
        {fin && (
          <text x={60} y={87} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="var(--accent-word)">
            DRESSED
          </text>
        )}
      </svg>
      <figcaption className="mt-1 text-center text-xs font-semibold text-[var(--dim)]">{label}</figcaption>
    </figure>
  );
}
