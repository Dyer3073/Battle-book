// Stylized insignia illustrations for the Rank Charts.
//
// Each renderer draws ONLY what the researched insignia pack's spec
// line states for that grade (chevron counts and direction, rockers,
// center device, colors, sleeve-lace widths). Spec data lives in
// insignia.ts. Art types { t: "note" } render nothing — the pack flags
// those designs as published only as official graphics, and the entry's
// flag text explains that instead of an invented drawing.

import type { ReactNode } from "react";
import type { ArtSpec, DeviceKind, OfficerDevice } from "./insignia";

const GOLD = "#d9a441";
const SILVER = "#c9ccd4";
const RED_CHEVRON = "#c23b2e";
const DRESS_BLUE = "#26325c";
const NAVY_BG = "#24304f";
const SLEEVE_BG = "#22304f";
const AF_BG = "#2e3d8f";
const AF_FG = "#dfe3ec";
const SF_BG = "#16233f";
const SF_FG = "#d7dce8";
const BLUE_BREAK = "#2f4d9d";

function starPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.45;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function Star({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  return <polygon points={starPoints(cx, cy, r)} fill={fill} />;
}

// Stylized spread/perched eagle in a 24x24 box, head to its right.
function EagleGlyph({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
      <polygon points="3,2 12,10 12,14 4,11" />
      <polygon points="21,2 12,10 12,14 20,11" />
      <polygon points="10,9 14,9 13.2,19 10.8,19" />
      <circle cx="14" cy="6.2" r="1.9" />
      <polygon points="10.6,19 13.4,19 12,22" />
    </g>
  );
}

function CenterDevice({ kind, cy, color }: { kind: DeviceKind; cy: number; color: string }) {
  switch (kind) {
    case "none":
      return null;
    case "diamond":
      return <polygon points={`32,${cy - 8} 40,${cy} 32,${cy + 8} 24,${cy}`} fill={color} />;
    case "star":
      return <Star cx={32} cy={cy} r={8} fill={color} />;
    case "bomb":
      return (
        <g stroke={color} fill={color}>
          <circle cx={32} cy={cy + 2} r={5.5} stroke="none" />
          <path d={`M27 ${cy - 3} L25 ${cy - 9} M32 ${cy - 4} L32 ${cy - 11} M37 ${cy - 3} L39 ${cy - 9}`} strokeWidth={2} fill="none" strokeLinecap="round" />
        </g>
      );
    case "rifles":
      return (
        <g fill={color}>
          <g transform={`rotate(-28 32 ${cy})`}>
            <rect x={31} y={cy - 11} width={2} height={22} />
            <rect x={29.4} y={cy + 5} width={2} height={6} />
          </g>
          <g transform={`rotate(28 32 ${cy})`}>
            <rect x={31} y={cy - 11} width={2} height={22} />
            <rect x={32.6} y={cy + 5} width={2} height={6} />
          </g>
        </g>
      );
    case "starWreath":
      return (
        <g>
          <Star cx={32} cy={cy} r={6} fill={color} />
          <path d={`M21 ${cy + 7} Q15 ${cy} 21 ${cy - 7}`} stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" />
          <path d={`M43 ${cy + 7} Q49 ${cy} 43 ${cy - 7}`} stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" />
        </g>
      );
    case "ega":
      return (
        <g stroke={color} fill={color}>
          <Star cx={16} cy={cy} r={3.4} fill={color} />
          <Star cx={48} cy={cy} r={3.4} fill={color} />
          <path d={`M23 ${cy - 5} Q32 ${cy - 12} 41 ${cy - 5} L37 ${cy - 2} Q32 ${cy - 5.5} 27 ${cy - 2} Z`} stroke="none" />
          <circle cx={32} cy={cy + 1} r={6} fill="none" strokeWidth={1.6} />
          <path d={`M26.2 ${cy + 1} H37.8 M32 ${cy + 3} V${cy + 10} M28.5 ${cy + 5} H35.5`} strokeWidth={1.6} fill="none" />
        </g>
      );
    case "coa":
      return (
        <g fill={color}>
          <Star cx={15} cy={cy} r={3.4} fill={color} />
          <Star cx={49} cy={cy} r={3.4} fill={color} />
          <EagleGlyph x={20} y={cy - 12} s={1} color={color} />
        </g>
      );
  }
}

// USMC / Army sleeve badge: point-up chevrons, center device in the
// field, rockers (arcs) below. Gold on dark blue (dress colors).
function ChevBadge({ up, rockers, device }: { up: number; rockers: number; device: DeviceKind }) {
  const topPad = 5;
  const chevStep = 10;
  const chevBottom = up > 0 ? topPad + (up - 1) * chevStep + 22 : topPad;
  const hasDevice = device !== "none";
  const fieldH = hasDevice ? 24 : 6;
  const deviceCy = chevBottom + 12;
  const rockerTop = chevBottom + fieldH;
  const rockerBottom = rockers > 0 ? rockerTop + (rockers - 1) * 9 + 24 : rockerTop;
  const h = rockerBottom + 5;
  return (
    <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
      <rect x={0} y={0} width={64} height={h} rx={6} fill={DRESS_BLUE} />
      {Array.from({ length: up }, (_, i) => {
        const y = topPad + i * chevStep;
        return <path key={`c${i}`} d={`M7 ${y + 13} L32 ${y + 1} L57 ${y + 13} L57 ${y + 22} L32 ${y + 10} L7 ${y + 22} Z`} fill={GOLD} />;
      })}
      {hasDevice ? <CenterDevice kind={device} cy={deviceCy} color={GOLD} /> : null}
      {Array.from({ length: rockers }, (_, i) => {
        const y = rockerTop + i * 9;
        return <path key={`r${i}`} d={`M9 ${y + 1} Q32 ${y + 15} 55 ${y + 1} L55 ${y + 10} Q32 ${y + 24} 9 ${y + 10} Z`} fill={GOLD} />;
      })}
    </svg>
  );
}

// Navy / Coast Guard rating badge: stars above a perched eagle, rating
// mark below it, a rocker ON TOP of point-down chevrons for chiefs.
function NavyBadge({ stars, chevrons, rocker, mark, chief }: { stars: number; chevrons: number; rocker: boolean; mark: "rating" | "star"; chief: boolean }) {
  const chevColor = chief ? GOLD : RED_CHEVRON;
  let cursor = 5;
  const starCy = 11;
  if (stars > 0) cursor = 19;
  const eagleY = cursor;
  cursor += 26;
  const markCy = cursor + 4;
  cursor += 10;
  let rockerY = 0;
  if (rocker) {
    rockerY = cursor;
    cursor += 18;
  }
  const chevY = cursor + 1;
  const chevBottom = chevrons > 0 ? chevY + (chevrons - 1) * 10 + 21 : chevY;
  const h = chevBottom + 5;
  const starXs = stars === 1 ? [32] : stars === 2 ? [24, 40] : stars === 3 ? [16, 32, 48] : [];
  return (
    <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
      <rect x={0} y={0} width={64} height={h} rx={6} fill={NAVY_BG} />
      {starXs.map((x) => (
        <Star key={x} cx={x} cy={starCy} r={3.8} fill={GOLD} />
      ))}
      <EagleGlyph x={20} y={eagleY} s={1} color={GOLD} />
      {mark === "rating" ? (
        <polygon points={`32,${markCy - 4.5} 36.5,${markCy} 32,${markCy + 4.5} 27.5,${markCy}`} fill={GOLD} />
      ) : (
        <Star cx={32} cy={markCy} r={4.5} fill={GOLD} />
      )}
      {rocker ? <path d={`M10 ${rockerY + 11} Q32 ${rockerY - 1} 54 ${rockerY + 11} L54 ${rockerY + 18} Q32 ${rockerY + 7} 10 ${rockerY + 18} Z`} fill={chevColor} /> : null}
      {Array.from({ length: chevrons }, (_, i) => {
        const y = chevY + i * 10;
        return <path key={`c${i}`} d={`M9 ${y} L32 ${y + 12} L55 ${y} L55 ${y + 9} L32 ${y + 21} L9 ${y + 9} Z`} fill={chevColor} />;
      })}
    </svg>
  );
}

// Navy/Coast Guard junior-enlisted group-rate marks: diagonal stripes.
function GroupStripes({ count }: { count: number }) {
  return (
    <svg viewBox="0 0 64 46" className="w-16" role="img" aria-hidden="true">
      <rect x={0} y={0} width={64} height={46} rx={6} fill={NAVY_BG} />
      {Array.from({ length: count }, (_, i) => {
        const x = 12 + i * 12;
        return <polygon key={i} points={`${x},38 ${x + 15},8 ${x + 21},8 ${x + 6},38`} fill="#e8e8e2" />;
      })}
    </svg>
  );
}

// Air Force badge: point-down curved chevrons wrap a star in a circle;
// senior NCOs add point-up chevrons above the star.
function AfBadge({ down, up, cmsaf }: { down: number; up: number; cmsaf: boolean }) {
  const sealH = cmsaf ? 20 : 0;
  const topPad = 6 + sealH;
  const upStep = 8;
  const upBottom = up > 0 ? topPad + (up - 1) * upStep + 17 : topPad;
  const cy = upBottom + 14;
  const downY = cy + 13;
  const downBottom = downY + (down - 1) * 9 + 21;
  const h = downBottom + 6;
  return (
    <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
      <rect x={0} y={0} width={64} height={h} rx={8} fill={AF_BG} />
      {cmsaf ? (
        <g fill={AF_FG}>
          <EagleGlyph x={23} y={1} s={0.75} color={AF_FG} />
          <Star cx={13} cy={10} r={2.6} fill={AF_FG} />
          <Star cx={51} cy={10} r={2.6} fill={AF_FG} />
        </g>
      ) : null}
      {Array.from({ length: up }, (_, i) => {
        const y = topPad + i * upStep;
        return <path key={`u${i}`} d={`M13 ${y + 10} L32 ${y} L51 ${y + 10} L51 ${y + 17} L32 ${y + 7} L13 ${y + 17} Z`} fill={AF_FG} />;
      })}
      {cmsaf ? (
        <g stroke={AF_FG} strokeWidth={1.8} fill="none" strokeLinecap="round">
          <path d={`M19 ${cy + 9} Q14 ${cy} 19 ${cy - 9}`} />
          <path d={`M45 ${cy + 9} Q50 ${cy} 45 ${cy - 9}`} />
        </g>
      ) : null}
      <circle cx={32} cy={cy} r={10.5} fill="none" stroke={AF_FG} strokeWidth={2} />
      <Star cx={32} cy={cy} r={6.5} fill={AF_FG} />
      {Array.from({ length: down }, (_, i) => {
        const y = downY + i * 9;
        return <path key={`d${i}`} d={`M11 ${y} Q32 ${y + 13} 53 ${y} L53 ${y + 8} Q32 ${y + 21} 11 ${y + 8} Z`} fill={AF_FG} />;
      })}
    </svg>
  );
}

// Space Force hexagonal patch: Delta alone over horizontal Vandenberg
// stripes for Specialists; Delta, Globe, and Orbit over point-down
// chevrons for NCOs, with orbital arcs above the globe for senior NCOs.
function SfBadge({ mode, stripes, chevrons, orbits, cmssf }: { mode: "delta" | "dgo"; stripes: number; chevrons: number; orbits: number; cmssf: boolean }) {
  const hex = "32,4 58,23 58,73 32,92 6,73 6,23";
  const hexInner = "32,10 53,26 53,70 32,86 11,70 11,26";
  const deltaPath = (cx: number, cy: number, s: number) =>
    `M${cx} ${cy - 11 * s} L${cx + 9 * s} ${cy + 9 * s} L${cx} ${cy + 3 * s} L${cx - 9 * s} ${cy + 9 * s} Z`;
  return (
    <svg viewBox="0 0 64 96" className="w-16" role="img" aria-hidden="true">
      <polygon points={hex} fill={SF_BG} stroke={SF_FG} strokeWidth={2} />
      {cmssf ? <polygon points={hexInner} fill="none" stroke={SF_FG} strokeWidth={1.4} strokeDasharray="3 2" /> : null}
      {mode === "delta" ? (
        <g>
          <path d={deltaPath(32, 26, 1)} fill={SF_FG} />
          <Star cx={32} cy={24} r={2.2} fill={SF_BG} />
          {Array.from({ length: stripes }, (_, i) => (
            <rect key={i} x={21} y={44 + i * 7} width={22} height={3.6} fill={SF_FG} />
          ))}
        </g>
      ) : (
        <g>
          <path d={deltaPath(32, orbits === 3 ? 15 : 19, 0.55)} fill={SF_FG} />
          {cmssf ? (
            <g fill={SF_FG}>
              <Star cx={13} cy={15} r={3} fill={SF_FG} />
              <Star cx={51} cy={15} r={3} fill={SF_FG} />
            </g>
          ) : null}
          {Array.from({ length: orbits }, (_, i) => (
            <path key={`o${i}`} d={`M${21 - i * 2} ${33 - i * 5} Q32 ${25 - i * 5} ${43 + i * 2} ${33 - i * 5}`} stroke={SF_FG} strokeWidth={1.8} fill="none" />
          ))}
          <circle cx={32} cy={39} r={7.5} fill="none" stroke={SF_FG} strokeWidth={1.8} />
          <ellipse cx={32} cy={39} rx={12.5} ry={4} transform="rotate(-18 32 39)" fill="none" stroke={SF_FG} strokeWidth={1.4} />
          {Array.from({ length: chevrons }, (_, i) => {
            const y = 52 + i * 7.5;
            return <path key={`c${i}`} d={`M18 ${y} L32 ${y + 8} L46 ${y} L46 ${y + 6} L32 ${y + 14} L18 ${y + 6} Z`} fill={SF_FG} />;
          })}
        </g>
      )}
    </svg>
  );
}

// Warrant / plain bar: crossbars or squares across the center, or one
// lengthwise line, per the branch system in the spec.
function BarArt({ base, frame, blocks, line }: { base: string; frame?: string; blocks?: { color: string; count: number; square?: boolean }; line?: string }) {
  let blockEls: ReactNode = null;
  if (blocks) {
    const bw = blocks.square ? 8 : 6;
    const gap = blocks.square ? 4 : 4;
    const total = blocks.count * bw + (blocks.count - 1) * gap;
    const x0 = 32 - total / 2;
    blockEls = Array.from({ length: blocks.count }, (_, i) =>
      blocks.square ? (
        <rect key={i} x={x0 + i * (bw + gap)} y={10} width={8} height={8} fill={blocks.color} />
      ) : (
        <rect key={i} x={x0 + i * (bw + gap)} y={8} width={6} height={12} fill={blocks.color} />
      ),
    );
  }
  return (
    <svg viewBox="0 0 64 28" className="w-16" role="img" aria-hidden="true">
      <rect x={5} y={8} width={54} height={12} rx={2} fill={base} stroke={frame ?? "#8a8a80"} strokeWidth={frame ? 2 : 0.75} />
      {blockEls}
      {line ? <rect x={9} y={12.8} width={46} height={2.4} fill={line} /> : null}
    </svg>
  );
}

// Navy warrant: the metal bar (top) and the dress-blue sleeve stripe
// with blue breaks (bottom), both per NAVPERS 15665 Ch. 4.
function NavyWarrantArt({ barBase, breaks, sleeveWidth, sleeveBreaks, sleeveLine }: { barBase: string; breaks: { color: string; count: number } | "line"; sleeveWidth: 0.25 | 0.5; sleeveBreaks: number; sleeveLine: boolean }) {
  const stripeH = sleeveWidth === 0.25 ? 3 : 6;
  const stripeY = 35 - stripeH / 2;
  let barBreakEls: ReactNode = null;
  if (breaks !== "line") {
    const total = breaks.count * 5 + (breaks.count - 1) * 4;
    const x0 = 32 - total / 2;
    barBreakEls = Array.from({ length: breaks.count }, (_, i) => (
      <rect key={i} x={x0 + i * 9} y={4} width={5} height={11} fill={breaks.color} />
    ));
  }
  let sleeveBreakEls: ReactNode = null;
  if (sleeveBreaks > 0) {
    const total = sleeveBreaks * 4 + (sleeveBreaks - 1) * 5;
    const x0 = 32 - total / 2;
    sleeveBreakEls = Array.from({ length: sleeveBreaks }, (_, i) => (
      <rect key={i} x={x0 + i * 9} y={stripeY} width={4} height={stripeH} fill={BLUE_BREAK} />
    ));
  }
  return (
    <svg viewBox="0 0 64 54" className="w-16" role="img" aria-hidden="true">
      <rect x={5} y={4} width={54} height={11} rx={2} fill={barBase} stroke="#8a8a80" strokeWidth={0.75} />
      {barBreakEls}
      {breaks === "line" ? <rect x={9} y={8.3} width={46} height={2.4} fill={BLUE_BREAK} /> : null}
      <rect x={4} y={22} width={56} height={26} rx={3} fill={SLEEVE_BG} />
      <rect x={8} y={stripeY} width={48} height={stripeH} fill={GOLD} />
      {sleeveBreakEls}
      {sleeveLine ? <rect x={8} y={34.1} width={48} height={1.8} fill={BLUE_BREAK} /> : null}
    </svg>
  );
}

// Coast Guard warrant: gold sleeve stripe with the Coast Guard shield
// above it. Break counts are unconfirmed in the pack, so none are drawn.
function CgWarrantArt() {
  return (
    <svg viewBox="0 0 64 48" className="w-16" role="img" aria-hidden="true">
      <path d="M32 2 L39 5 V11 C39 16 36 19.5 32 21.5 C28 19.5 25 16 25 11 V5 Z" fill="none" stroke={GOLD} strokeWidth={1.8} />
      <rect x={4} y={25} width={56} height={19} rx={3} fill={SLEEVE_BG} />
      <rect x={8} y={32} width={48} height={5} fill={GOLD} />
    </svg>
  );
}

function ShieldGlyph({ cx, cy, s }: { cx: number; cy: number; s: number }) {
  return (
    <path
      d={`M${cx} ${cy - 9 * s} L${cx + 7 * s} ${cy - 6 * s} V${cy} C${cx + 7 * s} ${cy + 5 * s} ${cx + 3.5 * s} ${cy + 8.5 * s} ${cx} ${cy + 10.5 * s} C${cx - 3.5 * s} ${cy + 8.5 * s} ${cx - 7 * s} ${cy + 5 * s} ${cx - 7 * s} ${cy} V${cy - 6 * s} Z`}
      fill="none"
      stroke={GOLD}
      strokeWidth={1.8}
    />
  );
}

function OfficerDeviceArt({ device }: { device: OfficerDevice }) {
  switch (device.t) {
    case "bar": {
      const fill = device.color === "gold" ? GOLD : SILVER;
      return device.count === 1 ? (
        <rect x={22} y={9} width={20} height={12} rx={1.5} fill={fill} />
      ) : (
        <g fill={fill}>
          <rect x={9} y={9} width={20} height={12} rx={1.5} />
          <rect x={35} y={9} width={20} height={12} rx={1.5} />
        </g>
      );
    }
    case "oak": {
      const fill = device.color === "gold" ? GOLD : SILVER;
      return (
        <g fill={fill} stroke={fill}>
          <path d="M32 4 C39 10 39 19 32 26 C25 19 25 10 32 4 Z" stroke="none" />
          <path d="M32 26 L32 29" strokeWidth={1.8} />
          <circle cx={37.5} cy={22} r={2.2} stroke="none" />
        </g>
      );
    }
    case "eagle":
      return <EagleGlyph x={20} y={3} s={1} color={SILVER} />;
    case "stars": {
      const xs = device.count === 1 ? [32] : device.count === 2 ? [23, 41] : device.count === 3 ? [15, 32, 49] : [9, 23.5, 40.5, 55];
      const r = device.count === 4 ? 5 : 5.5;
      return (
        <g fill={SILVER}>
          {xs.map((x) => (
            <Star key={x} cx={x} cy={15} r={r} fill={SILVER} />
          ))}
        </g>
      );
    }
  }
}

// Officer rendering: the metal device, plus — for Navy and Coast Guard —
// the sleeve lace from the pack's official stripe table (widths in
// inches) with the line star or Coast Guard shield above the top stripe.
function OfficerArt({ device, sleeve }: { device: OfficerDevice; sleeve?: { widths: number[]; above: "star" | "shield" } }) {
  const deviceH = 30;
  if (!sleeve) {
    return (
      <svg viewBox={`0 0 64 ${deviceH}`} className="w-16" role="img" aria-hidden="true">
        <OfficerDeviceArt device={device} />
      </svg>
    );
  }
  const stripeH = (w: number) => (w === 2 ? 12 : w === 0.5 ? 5 : 3);
  const stripesTotal = sleeve.widths.reduce((sum, w) => sum + stripeH(w) + 2.5, 0);
  const sleeveH = 16 + stripesTotal + 4;
  const h = deviceH + sleeveH;
  let cursor = h - 4;
  const stripeEls = [...sleeve.widths].reverse().map((w, i) => {
    const sh = stripeH(w);
    cursor -= sh;
    const el = <rect key={i} x={6} y={cursor} width={52} height={sh} fill={GOLD} />;
    cursor -= 2.5;
    return el;
  });
  return (
    <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
      <OfficerDeviceArt device={device} />
      <rect x={0} y={deviceH} width={64} height={sleeveH} fill={SLEEVE_BG} />
      {sleeve.above === "star" ? (
        <Star cx={32} cy={deviceH + 8} r={4.5} fill={GOLD} />
      ) : (
        <ShieldGlyph cx={32} cy={deviceH + 8} s={0.62} />
      )}
      {stripeEls}
    </svg>
  );
}

export function InsigniaArt({ art }: { art: ArtSpec }) {
  switch (art.t) {
    case "none":
      return (
        <svg viewBox="0 0 64 40" className="w-16" role="img" aria-hidden="true">
          <rect x={10} y={6} width={44} height={28} rx={4} fill="none" stroke="#9a9a8f" strokeWidth={1.5} strokeDasharray="4 3" />
        </svg>
      );
    case "note":
      return null;
    case "chev":
      return <ChevBadge up={art.up} rockers={art.rockers} device={art.device} />;
    case "spcEagle":
      return (
        <svg viewBox="0 0 64 56" className="w-16" role="img" aria-hidden="true">
          <rect x={8} y={4} width={48} height={48} rx={6} fill={DRESS_BLUE} />
          <EagleGlyph x={20} y={16} s={1} color={GOLD} />
        </svg>
      );
    case "navyBadge":
      return <NavyBadge stars={art.stars} chevrons={art.chevrons} rocker={art.rocker} mark={art.mark} chief={art.chief} />;
    case "groupStripes":
      return <GroupStripes count={art.count} />;
    case "afBadge":
      return <AfBadge down={art.down} up={art.up} cmsaf={art.cmsaf} />;
    case "sfBadge":
      return <SfBadge mode={art.mode} stripes={art.stripes} chevrons={art.chevrons} orbits={art.orbits} cmssf={art.cmssf} />;
    case "bar":
      return <BarArt base={art.base} frame={art.frame} blocks={art.blocks} line={art.line} />;
    case "navyWarrant":
      return <NavyWarrantArt barBase={art.barBase} breaks={art.breaks} sleeveWidth={art.sleeveWidth} sleeveBreaks={art.sleeveBreaks} sleeveLine={art.sleeveLine} />;
    case "cgWarrant":
      return <CgWarrantArt />;
    case "officer":
      return <OfficerArt device={art.device} sleeve={art.sleeve} />;
  }
}
