// Tappable U.S. map picker for the State Benefits Finder.
//
// The state outlines below are simplified polygons drawn for this app and
// embedded in the bundle — no external map service, no tiles, no network
// calls. Each polygon sits in its geographic position on a 960×600 canvas
// (Alaska and Hawaii as the usual lower-left insets). Shapes are
// deliberately simplified: they are a picker, not a survey map. The
// smallest Northeast states keep a shape here, but their entries in the
// searchable list directly below the map are the reliable route to them,
// exactly as the finder has always worked.
//
// District of Columbia has no polygon: it is the labeled chip beside the
// map, per the picker's design.

import { useState } from "react";

export type UsMapState = {
  /** Full state name, matching STATE_ENTRIES in states.ts. */
  name: string;
  abbr: string;
  /** SVG path data (one or more subpaths) in the 960×600 viewBox. */
  d: string;
  /** Label anchor (abbreviation) inside the shape. */
  lx: number;
  ly: number;
  /** Tiny shape — abbreviation renders smaller; the list below is the easier pick. */
  small?: boolean;
};

export const US_MAP_STATES: UsMapState[] = [
  { name: "Washington", abbr: "WA", lx: 76, ly: 68, d: "M20,32 L128,28 L132,58 L118,72 L120,92 L78,96 L74,78 L40,88 L24,70 Z" },
  { name: "Oregon", abbr: "OR", lx: 78, ly: 130, d: "M16,98 L136,95 L140,128 L128,158 L30,162 L18,132 Z" },
  { name: "California", abbr: "CA", lx: 58, ly: 248, d: "M18,166 L96,162 L108,200 L96,250 L104,300 L84,332 L48,326 L30,280 L16,220 Z" },
  { name: "Nevada", abbr: "NV", lx: 138, ly: 222, d: "M100,166 L176,162 L180,230 L168,282 L118,278 L104,220 L96,200 Z" },
  { name: "Idaho", abbr: "ID", lx: 166, ly: 104, d: "M138,44 L192,40 L196,100 L188,168 L142,164 L136,110 L142,80 Z" },
  { name: "Montana", abbr: "MT", lx: 264, ly: 72, d: "M198,34 L330,30 L334,78 L328,108 L202,110 L196,70 Z" },
  { name: "Wyoming", abbr: "WY", lx: 248, ly: 148, d: "M200,114 L292,110 L296,180 L204,184 Z" },
  { name: "Utah", abbr: "UT", lx: 216, ly: 218, d: "M182,178 L246,174 L250,260 L214,262 L210,232 L184,230 Z" },
  { name: "Arizona", abbr: "AZ", lx: 226, ly: 310, d: "M184,266 L266,262 L270,330 L252,358 L196,356 L182,310 Z" },
  { name: "Colorado", abbr: "CO", lx: 305, ly: 219, d: "M252,188 L356,184 L358,252 L254,254 Z" },
  { name: "New Mexico", abbr: "NM", lx: 315, ly: 306, d: "M272,256 L356,254 L358,356 L276,358 L270,330 Z" },
  { name: "North Dakota", abbr: "ND", lx: 390, ly: 78, d: "M338,48 L438,44 L442,108 L340,110 Z" },
  { name: "South Dakota", abbr: "SD", lx: 392, ly: 140, d: "M340,114 L440,110 L444,150 L436,168 L344,168 Z" },
  { name: "Nebraska", abbr: "NE", lx: 395, ly: 196, d: "M342,172 L446,168 L450,196 L442,220 L348,222 L340,196 Z" },
  { name: "Kansas", abbr: "KS", lx: 416, ly: 248, d: "M362,226 L466,222 L470,270 L364,272 Z" },
  { name: "Oklahoma", abbr: "OK", lx: 426, ly: 300, d: "M362,276 L424,274 L426,288 L488,286 L490,316 L364,318 Z" },
  { name: "Texas", abbr: "TX", lx: 448, ly: 392, d: "M366,322 L470,320 L520,336 L528,390 L506,440 L470,468 L430,452 L436,410 L400,398 L392,360 L368,352 Z" },
  { name: "Minnesota", abbr: "MN", lx: 492, ly: 88, d: "M448,42 L532,46 L538,96 L524,130 L452,130 L446,84 Z" },
  { name: "Iowa", abbr: "IA", lx: 494, ly: 158, d: "M448,134 L536,132 L540,182 L452,184 Z" },
  { name: "Missouri", abbr: "MO", lx: 496, ly: 224, d: "M452,188 L540,186 L544,232 L536,260 L458,260 L450,220 Z" },
  { name: "Arkansas", abbr: "AR", lx: 499, ly: 292, d: "M456,264 L540,262 L542,320 L458,322 Z" },
  { name: "Louisiana", abbr: "LA", lx: 500, ly: 352, d: "M456,326 L540,324 L546,356 L528,382 L478,380 L462,356 Z" },
  { name: "Wisconsin", abbr: "WI", lx: 578, ly: 108, d: "M546,72 L604,68 L612,104 L600,148 L550,146 L544,108 Z" },
  {
    name: "Michigan",
    abbr: "MI",
    lx: 590,
    ly: 152,
    d: "M548,58 L628,52 L636,78 L612,100 L562,96 L546,80 Z M562,104 L606,100 L622,128 L616,186 L590,204 L560,182 L554,138 Z",
  },
  { name: "Illinois", abbr: "IL", lx: 568, ly: 206, d: "M544,152 L590,150 L594,262 L548,260 L542,200 Z" },
  { name: "Indiana", abbr: "IN", lx: 618, ly: 204, d: "M598,170 L636,168 L638,236 L600,238 Z" },
  { name: "Ohio", abbr: "OH", lx: 672, ly: 200, d: "M642,170 L700,166 L706,204 L694,232 L646,230 L640,198 Z" },
  { name: "Kentucky", abbr: "KY", lx: 642, ly: 232, d: "M594,216 L684,212 L690,232 L676,248 L600,250 Z" },
  { name: "Tennessee", abbr: "TN", lx: 616, ly: 263, d: "M544,252 L688,250 L690,272 L546,274 Z" },
  { name: "Mississippi", abbr: "MS", lx: 561, ly: 318, d: "M542,276 L580,274 L582,360 L548,362 L542,318 Z" },
  { name: "Alabama", abbr: "AL", lx: 610, ly: 316, d: "M584,276 L636,274 L638,356 L606,358 L604,330 L586,328 Z" },
  { name: "Georgia", abbr: "GA", lx: 684, ly: 316, d: "M640,276 L726,272 L730,330 L706,358 L644,356 Z" },
  { name: "Florida", abbr: "FL", lx: 706, ly: 416, d: "M642,360 L724,358 L732,380 L756,420 L762,468 L742,474 L724,430 L716,392 L668,386 L644,378 Z" },
  { name: "South Carolina", abbr: "SC", lx: 756, ly: 298, d: "M720,282 L786,278 L790,300 L762,318 L728,312 Z" },
  { name: "North Carolina", abbr: "NC", lx: 768, ly: 262, d: "M708,244 L826,240 L830,262 L812,280 L712,280 L706,262 Z" },
  { name: "Virginia", abbr: "VA", lx: 752, ly: 224, d: "M708,208 L796,204 L800,226 L788,242 L712,240 L706,224 Z" },
  { name: "West Virginia", abbr: "WV", lx: 708, ly: 230, small: true, d: "M686,206 L728,204 L734,232 L722,256 L694,252 L684,230 Z" },
  { name: "Pennsylvania", abbr: "PA", lx: 760, ly: 178, d: "M708,154 L810,150 L814,200 L710,202 Z" },
  { name: "New York", abbr: "NY", lx: 794, ly: 116, d: "M742,80 L846,76 L852,118 L838,150 L748,152 L738,116 Z" },
  { name: "New Jersey", abbr: "NJ", lx: 832, ly: 194, small: true, d: "M818,160 L844,158 L846,204 L832,228 L820,196 Z" },
  { name: "Maryland", abbr: "MD", lx: 790, ly: 214, small: true, d: "M760,200 L820,196 L824,214 L806,228 L766,226 L758,212 Z" },
  { name: "Delaware", abbr: "DE", lx: 832, ly: 222, small: true, d: "M824,208 L838,206 L839,236 L826,238 Z" },
  { name: "Vermont", abbr: "VT", lx: 858, ly: 106, small: true, d: "M848,80 L866,79 L868,128 L850,130 Z" },
  { name: "New Hampshire", abbr: "NH", lx: 882, ly: 106, small: true, d: "M870,82 L892,80 L894,128 L872,130 Z" },
  { name: "Maine", abbr: "ME", lx: 914, ly: 66, d: "M884,28 L940,24 L946,66 L928,104 L890,106 L882,66 Z" },
  { name: "Connecticut", abbr: "CT", lx: 872, ly: 163, small: true, d: "M850,152 L894,150 L896,172 L852,174 Z" },
  { name: "Massachusetts", abbr: "MA", lx: 882, ly: 141, small: true, d: "M852,132 L910,128 L914,148 L854,150 Z" },
  { name: "Rhode Island", abbr: "RI", lx: 905, ly: 161, small: true, d: "M898,154 L910,153 L911,166 L899,167 Z" },
  {
    name: "Alaska",
    abbr: "AK",
    lx: 92,
    ly: 496,
    d: "M24,440 L150,432 L168,470 L150,520 L110,556 L52,552 L26,510 Z M132,520 L168,540 L160,562 L128,548 Z",
  },
  {
    name: "Hawaii",
    abbr: "HI",
    lx: 272,
    ly: 532,
    d: "M212,522 L236,518 L240,532 L218,536 Z M252,510 L272,508 L276,520 L256,522 Z M288,528 L306,526 L309,537 L291,539 Z M318,542 L332,541 L334,550 L320,551 Z",
  },
];

export const DC_NAME = "District of Columbia";

/**
 * The member's home state, read from the profile's homeState field (set
 * in the profile form; optional and member-entered only). Returns null —
 * and no HOME marker renders — when no home state is on file. Matched by
 * full name or abbreviation; nothing is guessed from branch, MOS, or
 * free-text goals.
 */
export function profileHomeState(profile: unknown): string | null {
  if (!profile || typeof profile !== "object") return null;
  const p = profile as Record<string, unknown>;
  for (const key of ["homeState", "home_state"]) {
    const v = p[key];
    if (typeof v !== "string" || !v.trim()) continue;
    const t = v.trim();
    if (t.toLowerCase() === DC_NAME.toLowerCase() || t.toUpperCase() === "DC") return DC_NAME;
    const match = US_MAP_STATES.find(
      (s) => s.name.toLowerCase() === t.toLowerCase() || s.abbr === t.toUpperCase(),
    );
    if (match) return match.name;
  }
  return null;
}

type UsMapPickerProps = {
  /** State name (or DC) whose card is currently open, highlighted on the map. */
  selectedName: string | null;
  /** Member's home state name when known, else null. */
  homeName: string | null;
  /** Called with a full state name (or "District of Columbia"). */
  onPick: (name: string) => void;
};

export function UsMapPicker({ selectedName, homeName, onPick }: UsMapPickerProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const dcSelected = selectedName === DC_NAME;
  const dcHome = homeName === DC_NAME;

  return (
    <section aria-label="Pick your state on the map" className="mb-6">
      <h3 className="font-display text-lg font-bold text-[var(--text)]">Pick your state on the map</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Tap a state to open its benefits card. The smallest Northeast states are easiest to pick from the list
        right below the map.
      </p>
      <div className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-2">
        <svg
          viewBox="0 0 960 600"
          role="group"
          aria-label="Map of the United States — tap a state to open its benefits card"
          className="block h-auto w-full"
        >
          {US_MAP_STATES.map((s) => {
            const isSelected = selectedName === s.name;
            const isHome = homeName === s.name;
            const isHovered = hovered === s.name;
            const fill = isSelected
              ? "var(--accent)"
              : isHome
                ? "var(--amber-bg)"
                : isHovered
                  ? "var(--surface)"
                  : "var(--surface2)";
            const labelFill = isSelected ? "var(--accent-text)" : "var(--text)";
            return (
              <g
                key={s.name}
                role="button"
                tabIndex={0}
                aria-label={`Pick ${s.name} on the map`}
                aria-pressed={isSelected}
                className="cursor-pointer"
                onClick={() => onPick(s.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onPick(s.name);
                  }
                }}
                onMouseEnter={() => setHovered(s.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(s.name)}
                onBlur={() => setHovered(null)}
              >
                <title>{s.name}</title>
                <path
                  d={s.d}
                  fill={fill}
                  stroke={isHome && !isSelected ? "var(--amber)" : "var(--border)"}
                  strokeWidth={isSelected ? 2.5 : isHome ? 3 : 1.2}
                  strokeLinejoin="round"
                />
                <text
                  x={s.lx}
                  y={s.ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  pointerEvents="none"
                  fill={labelFill}
                  fontSize={s.small ? 9 : 12}
                  fontWeight={700}
                  fontFamily="'Archivo', system-ui, sans-serif"
                >
                  {s.abbr}
                </text>
                {isHome && !s.small ? (
                  <text
                    x={s.lx}
                    y={s.ly + 15}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    pointerEvents="none"
                    fill={isSelected ? "var(--accent-text)" : "var(--amber)"}
                    fontSize={7.5}
                    fontWeight={800}
                    letterSpacing={0.8}
                    fontFamily="'Archivo', system-ui, sans-serif"
                  >
                    HOME
                  </text>
                ) : null}
                {isHome && s.small ? (
                  <circle cx={s.lx + 10} cy={s.ly - 8} r={3.5} fill="var(--amber)" pointerEvents="none" />
                ) : null}
              </g>
            );
          })}
        </svg>
        <div className="mt-2 flex flex-wrap items-center gap-2 px-1 pb-1">
          <button
            type="button"
            aria-label="Pick District of Columbia"
            aria-pressed={dcSelected}
            onClick={() => onPick(DC_NAME)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${
              dcSelected
                ? "bg-[var(--accent)] text-[var(--accent-text)]"
                : dcHome
                  ? "border-2 border-[var(--amber)] bg-[var(--amber-bg)] text-[var(--text)]"
                  : "border border-[var(--border)] bg-[var(--surface2)] text-[var(--text)]"
            }`}
          >
            DC — District of Columbia{dcHome ? " · HOME" : ""}
          </button>
          {homeName ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)]">
              <span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm border-2 border-[var(--amber)] bg-[var(--amber-bg)]" />
              Your home state: {homeName}
            </span>
          ) : null}
          {selectedName ? (
            <span className="text-sm font-semibold text-[var(--accent)]">Now viewing: {selectedName}</span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
