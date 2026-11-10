// Flag renditions — original in-app vector drawings built to the
// OFFICIAL construction specifications (EO 10834 for the U.S. flag;
// the Turkish Flag Law chart; the Korean Enforcement Decree; the
// Flags Act 1953 tables for Australia; the NZ Gazette 1902 notice;
// the 1801 Union Jack construction; Dannebrog's 28:37 sheet; the
// Spanish official model; Canadian Heritage's 64 × 32 diagram).
// Every rendition is captioned in the Flags tile as a stylized
// rendition; complex devices (the branch flags' center devices,
// Spain's coat of arms) are simplified shapes, labeled as such — and
// NO service SEAL is drawn anywhere: the center devices are abstract
// emblem shapes, never seal reproductions. The per-flag audit record
// (verdict + spec source per flag) lives in DATA-PLAN.md.

function starPoints(
  cx: number,
  cy: number,
  r: number,
  points = 5,
  rotDeg = -90,
  innerRatio?: number,
): string {
  // Inner-radius ratio: the true pentagram ratio for 5-point stars
  // (EO 10834 star geometry); Australia's stars are spec'd at 4/9 by
  // the Flags Act tables and pass it explicitly.
  const ratio = innerRatio ?? (points === 5 ? 0.381966 : 0.45);
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const rad = i % 2 === 0 ? r : r * ratio;
    const a = ((Math.PI / points) * i + (rotDeg * Math.PI) / 180) as number;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function Star({
  cx,
  cy,
  r,
  fill,
  points = 5,
  rotDeg = -90,
  innerRatio,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  points?: number;
  rotDeg?: number;
  innerRatio?: number;
}) {
  return <polygon points={starPoints(cx, cy, r, points, rotDeg, innerRatio)} fill={fill} />;
}

/** Ceremonial fringe: short ticks on the top, fly, and bottom edges. */
function Fringe({ w, h, color }: { w: number; h: number; color: string }) {
  const ticks: React.ReactNode[] = [];
  for (let x = 6; x < w; x += 9) {
    ticks.push(<line key={`t${x}`} x1={x} y1={0} x2={x} y2={7} stroke={color} strokeWidth={2.4} />);
    ticks.push(<line key={`b${x}`} x1={x} y1={h} x2={x} y2={h - 7} stroke={color} strokeWidth={2.4} />);
  }
  for (let y = 6; y < h; y += 9) {
    ticks.push(<line key={`r${y}`} x1={w} y1={y} x2={w - 7} y2={y} stroke={color} strokeWidth={2.4} />);
  }
  return <g aria-hidden="true">{ticks}</g>;
}

/** A simplified eagle silhouette — an abstract emblem shape, never a
 * seal reproduction. */
function EagleGlyph({ cx, cy, s = 1, fill }: { cx: number; cy: number; s?: number; fill: string }) {
  return (
    <path
      transform={`translate(${cx} ${cy}) scale(${s})`}
      fill={fill}
      d="M-30 -8 L-10 -14 L-4 -5 L0 -16 L4 -5 L10 -14 L30 -8 L12 1 L7 16 L-7 16 L-12 1 Z"
    />
  );
}

function NordicCross({ w, h, field, cross, inner }: { w: number; h: number; field: string; cross: string; inner?: string }) {
  // Norway's construction only (fly 6:1:2:1:12, hoist 6:1:2:1:6).
  // Denmark has its own sheet and its own case below.
  const ux = w / 22;
  const uy = h / 16;
  return (
    <g>
      <rect width={w} height={h} fill={field} />
      <rect x={6 * ux} y={0} width={4 * ux} height={h} fill={cross} />
      <rect x={0} y={6 * uy} width={w} height={4 * uy} fill={cross} />
      {inner ? (
        <>
          <rect x={7 * ux} y={0} width={2 * ux} height={h} fill={inner} />
          <rect x={0} y={7 * uy} width={w} height={2 * uy} fill={inner} />
        </>
      ) : null}
    </g>
  );
}

/** Union Jack built to the official construction (1801 blazon as
 * published in BR20 / the standard construction sheet, in 30ths of the
 * hoist): St George's cross 6/30 red on a 10/30 white fimbriation;
 * St Andrew's white saltire 6/30 wide; St Patrick's red saltire 2/30
 * wide, OFFSET — in the hoist-side quarters it runs 3/30 white /
 * 2/30 red / 1/30 white across the band (white senior), in the
 * fly-side quarters the reverse. The red is therefore NOT centred on
 * the white and the flag is not rotationally symmetric. The offset is
 * a perpendicular shift of 1/30 hoist on each diagonal, in the
 * anti-clockwise sense. Used at full size for the UK and at canton
 * size for Australia / New Zealand. */
function UnionJack({ w, h, uid }: { w: number; h: number; uid: string }) {
  const u = h / 30;
  const len = Math.hypot(w, h);
  // Perpendicular shift of the red saltire centreline (1/30 of hoist).
  // TL→BR diagonal: shift toward the lower-left perpendicular.
  const ax = (-h / len) * u;
  const ay = (w / len) * u;
  // BL→TR diagonal: shift toward the lower-right perpendicular.
  const bx = (h / len) * u;
  const by = (w / len) * u;
  const clipId = `uj-${uid}`;
  return (
    <g>
      <clipPath id={clipId}>
        <rect width={w} height={h} />
      </clipPath>
      <rect width={w} height={h} fill="#012169" />
      <g clipPath={`url(#${clipId})`}>
        <line x1={0} y1={0} x2={w} y2={h} stroke="#ffffff" strokeWidth={6 * u} />
        <line x1={0} y1={h} x2={w} y2={0} stroke="#ffffff" strokeWidth={6 * u} />
        <line x1={ax} y1={ay} x2={w + ax} y2={h + ay} stroke="#C8102E" strokeWidth={2 * u} />
        <line x1={bx} y1={h + by} x2={w + bx} y2={by} stroke="#C8102E" strokeWidth={2 * u} />
      </g>
      <rect x={0} y={h / 2 - 5 * u} width={w} height={10 * u} fill="#ffffff" />
      <rect x={w / 2 - 5 * u} y={0} width={10 * u} height={h} fill="#ffffff" />
      <rect x={0} y={h / 2 - 3 * u} width={w} height={6 * u} fill="#C8102E" />
      <rect x={w / 2 - 3 * u} y={0} width={6 * u} height={h} fill="#C8102E" />
    </g>
  );
}

function MapleLeaf({ cx, cy, s = 1, fill }: { cx: number; cy: number; s?: number; fill: string }) {
  const pts =
    "0,-13 3,-6.5 7.5,-9.5 6.8,-3.5 11.5,-5.5 9.5,0.5 14,0 9,4.5 11,9.5 4.5,6.8 3.8,12 6.5,14.5 1.6,13.5 1.6,19 -1.6,19 -1.6,13.5 -6.5,14.5 -3.8,12 -4.5,6.8 -11,9.5 -9,4.5 -14,0 -9.5,0.5 -11.5,-5.5 -6.8,-3.5 -7.5,-9.5 -3,-6.5";
  return <polygon points={pts} transform={`translate(${cx} ${cy}) scale(${s})`} fill={fill} />;
}

function FlagSvg({
  w,
  h,
  title,
  children,
}: {
  w: number;
  h: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={`Stylized rendition of the ${title}`}
      className="h-auto w-full border border-[var(--border)]"
    >
      {children}
    </svg>
  );
}

const GOLD = "#d9a441";
const FRINGE_GOLD = "#c9a227";

function renderArt(art: string): { w: number; h: number; body: React.ReactNode } {
  switch (art) {
    case "us": {
      // Executive Order 10834 construction: hoist : fly = 1.0 : 1.9;
      // canton 0.5385 of hoist high (7 of 13 stripes) × 0.7615 of hoist
      // long (= 0.4008 of the fly); 50 stars in 9 staggered rows of
      // 6/5, row pitch 0.0538 of hoist starting one pitch from the
      // canton edges, star diameter 0.0616 of hoist.
      const w = 300;
      const h = 158;
      const stripe = h / 13;
      const cantonW = (0.7615 / 1.9) * w;
      const cantonH = stripe * 7;
      const stars: React.ReactNode[] = [];
      for (let row = 0; row < 9; row++) {
        const count = row % 2 === 0 ? 6 : 5;
        for (let i = 0; i < count; i++) {
          const cx = (cantonW / 12) * (row % 2 === 0 ? 2 * i + 1 : 2 * i + 2);
          const cy = (cantonH / 10) * (row + 1);
          stars.push(<Star key={`${row}-${i}`} cx={cx} cy={cy} r={(0.0616 * h) / 2} fill="#ffffff" />);
        }
      }
      return {
        w,
        h,
        body: (
          <>
            {Array.from({ length: 13 }, (_, i) => (
              <rect key={i} x={0} y={i * stripe} width={w} height={stripe + 0.5} fill={i % 2 === 0 ? "#B22234" : "#ffffff"} />
            ))}
            <rect x={0} y={0} width={cantonW} height={cantonH} fill="#3C3B6E" />
            {stars}
          </>
        ),
      };
    }
    case "army": {
      const w = 300;
      const h = 236;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#ffffff" />
            {/* Simplified center device (NOT the seal): cuirass, sword
                and cap, cannon and drum shapes in ultramarine blue. */}
            <g fill="#3C3B6E">
              <path d="M132 78 h36 l4 34 q-22 14 -44 0 Z" />
              <rect x={148.5} y={38} width={3} height={34} />
              <path d="M141 38 q9 -10 18 0 q-9 5 -18 0 Z" />
              <rect x={96} y={92} width={34} height={7} rx={3} transform="rotate(-18 113 95)" />
              <circle cx={104} cy={108} r={7} fill="none" stroke="#3C3B6E" strokeWidth={3} />
              <circle cx={196} cy={100} r={11} fill="none" stroke="#3C3B6E" strokeWidth={3.4} />
              <line x1={188} y1={88} x2={178} y2={76} stroke="#3C3B6E" strokeWidth={3} />
              <line x1={204} y1={88} x2={214} y2={76} stroke="#3C3B6E" strokeWidth={3} />
            </g>
            <rect x={75} y={140} width={150} height={24} rx={6} fill="#BB133E" />
            <text x={150} y={156} textAnchor="middle" fontSize={12.5} fontWeight={700} fill="#ffffff" letterSpacing={0.5}>
              UNITED STATES ARMY
            </text>
            <text x={150} y={192} textAnchor="middle" fontSize={17} fontWeight={700} fill="#3C3B6E">
              1775
            </text>
            <Fringe w={w} h={h} color={FRINGE_GOLD} />
          </>
        ),
      };
    }
    case "usmc": {
      const w = 300;
      const h = 236;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#A6192E" />
            {/* Simplified EGA: eagle over globe over anchor, gold/gray. */}
            <circle cx={150} cy={104} r={30} fill="none" stroke={GOLD} strokeWidth={3} />
            <path d="M120 104 a30 30 0 0 1 60 0 M150 74 v60 M128 88 a34 34 0 0 0 44 0 M128 120 a34 34 0 0 1 44 0" stroke={GOLD} strokeWidth={1.6} fill="none" />
            <EagleGlyph cx={150} cy={58} s={1.15} fill={GOLD} />
            <g stroke="#9aa0a8" strokeWidth={4} fill="none">
              <line x1={150} y1={118} x2={150} y2={152} />
              <path d="M128 138 q22 18 44 0" />
            </g>
            <line x1={138} y1={124} x2={162} y2={124} stroke="#9aa0a8" strokeWidth={4} />
            <rect x={52} y={168} width={196} height={22} rx={6} fill={GOLD} />
            <text x={150} y={183} textAnchor="middle" fontSize={11} fontWeight={700} fill="#A6192E" letterSpacing={0.4}>
              UNITED STATES MARINE CORPS
            </text>
            <Fringe w={w} h={h} color={FRINGE_GOLD} />
          </>
        ),
      };
    }
    case "navy": {
      const w = 300;
      const h = 236;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#002868" />
            {/* EO 10812: the device is 3 ft 1 in overall on the 4 ft
                4 in hoist, the rope edging 2 ft 6 in in diameter —
                r = (30/52) × 236 / 2 ≈ 68. */}
            <circle cx={150} cy={102} r={68} fill="none" stroke={GOLD} strokeWidth={3.4} strokeDasharray="5 3" />
            {/* Simplified ship within the rope edging. */}
            <g transform="translate(150 102) scale(1.214) translate(-150 -102)" stroke={GOLD} strokeWidth={2.4} fill="none">
              <line x1={150} y1={58} x2={150} y2={118} />
              <line x1={126} y1={70} x2={126} y2={116} />
              <line x1={174} y1={70} x2={174} y2={116} />
              <path d="M150 60 L150 92 L132 92 Z" fill="#ffffff" stroke="none" opacity={0.9} />
              <path d="M150 62 L150 92 L168 92 Z" fill="#ffffff" stroke="none" opacity={0.7} />
              <path d="M112 118 h76 l-10 14 h-56 Z" fill={GOLD} stroke="none" />
              <path d="M104 142 q12 -7 23 0 q12 7 23 0 q12 -7 23 0 q12 7 23 0" />
            </g>
            <rect x={80} y={176} width={140} height={22} rx={6} fill={GOLD} />
            <text x={150} y={191} textAnchor="middle" fontSize={12} fontWeight={700} fill="#002868" letterSpacing={0.5}>
              UNITED STATES NAVY
            </text>
            <Fringe w={w} h={h} color={FRINGE_GOLD} />
          </>
        ),
      };
    }
    case "af": {
      const w = 300;
      const h = 236;
      const ring: React.ReactNode[] = [];
      for (let i = 0; i < 13; i++) {
        const a = (i / 13) * Math.PI * 2 - Math.PI / 2;
        ring.push(<Star key={i} cx={150 + 74 * Math.cos(a)} cy={104 + 74 * Math.sin(a)} r={6} fill="#ffffff" />);
      }
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#00308F" />
            {ring}
            <EagleGlyph cx={150} cy={76} s={1.05} fill="#ffffff" />
            {/* Shield with gold thunderbolt on a nebuly field. */}
            <path d="M132 96 h36 v22 q0 16 -18 24 q-18 -8 -18 -24 Z" fill="#7aa2d6" />
            <path d="M132 108 q9 -6 18 0 q9 6 18 0 v10 q0 16 -18 24 q-18 -8 -18 -24 Z" fill="#00308F" />
            <polygon points="152,102 142,120 149,120 144,134 158,114 151,114 158,102" fill={GOLD} />
            <rect x={72} y={188} width={156} height={22} rx={6} fill="none" stroke={GOLD} strokeWidth={1.6} />
            <text x={150} y={203} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={GOLD} letterSpacing={0.4}>
              UNITED STATES AIR FORCE
            </text>
            <Fringe w={w} h={h} color={FRINGE_GOLD} />
          </>
        ),
      };
    }
    case "sf": {
      // Same ceremonial proportion as the other service flags
      // (4 ft 4 in × 5 ft 6 in; the official flag file is 900 × 708).
      const w = 300;
      const h = 236;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#000000" />
            <Star cx={150} cy={34} r={9} fill="#ffffff" points={4} />
            <g fill="#ffffff">
              <Star cx={66} cy={86} r={3.6} fill="#ffffff" />
              <Star cx={82} cy={102} r={2.8} fill="#ffffff" />
              <Star cx={58} cy={110} r={2.8} fill="#ffffff" />
              <Star cx={234} cy={86} r={3.6} fill="#ffffff" />
              <Star cx={218} cy={102} r={2.8} fill="#ffffff" />
              <Star cx={242} cy={110} r={2.8} fill="#ffffff" />
            </g>
            <path d="M150 56 L186 146 L150 130 L114 146 Z" fill="none" stroke="#c9ccd4" strokeWidth={3.4} />
            <circle cx={150} cy={114} r={17} fill="#5b7ba5" />
            <path d="M133 114 h34 M150 97 v34 M138 103 a17 17 0 0 0 24 0 M138 125 a17 17 0 0 1 24 0" stroke="#dfe5ee" strokeWidth={1.2} fill="none" />
            <ellipse cx={150} cy={114} rx={44} ry={13} fill="none" stroke="#c9ccd4" strokeWidth={1.8} transform="rotate(-18 150 114)" />
            <text x={150} y={186} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff" letterSpacing={0.6}>
              UNITED STATES SPACE FORCE
            </text>
            <text x={150} y={208} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff" letterSpacing={2}>
              MMXIX
            </text>
            <Fringe w={w} h={h} color="#c9ccd4" />
          </>
        ),
      };
    }
    case "cg": {
      const w = 300;
      const h = 236;
      const arcId = "cg-arc";
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#ffffff" />
            <path id={arcId} d="M52 108 a108 108 0 0 1 196 0" fill="none" />
            <text fontSize={14.5} fontWeight={700} fill="#002868" letterSpacing={1.5}>
              <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
                UNITED STATES COAST GUARD
              </textPath>
            </text>
            <EagleGlyph cx={150} cy={104} s={1.5} fill="#002868" />
            {/* Shield: blue chief over vertical red/white stripes. */}
            <g>
              <path d="M136 116 h28 v10 q0 14 -14 20 q-14 -6 -14 -20 Z" fill="#ffffff" stroke="#002868" strokeWidth={1.6} />
              <rect x={136} y={116} width={28} height={8} fill="#002868" />
              {[141, 147, 153].map((x) => (
                <rect key={x} x={x} y={124} width={3.4} height={16} fill="#BB133E" />
              ))}
            </g>
            <text x={150} y={182} textAnchor="middle" fontSize={14} fontWeight={700} fill="#002868" letterSpacing={1.2}>
              SEMPER PARATUS
            </text>
            <text x={150} y={206} textAnchor="middle" fontSize={14} fontWeight={700} fill="#002868">
              1790
            </text>
            <Fringe w={w} h={h} color={FRINGE_GOLD} />
          </>
        ),
      };
    }
    case "de":
      return {
        w: 300,
        h: 180,
        body: (
          <>
            <rect width={300} height={60} fill="#000000" />
            <rect y={60} width={300} height={60} fill="#DD0000" />
            <rect y={120} width={300} height={60} fill="#FFCC00" />
          </>
        ),
      };
    case "no":
      return { w: 300, h: 218, body: <NordicCross w={300} h={218} field="#BA0C2F" cross="#ffffff" inner="#00205B" /> };
    case "dk": {
      // Dannebrog construction (28:37): along the fly 12 red / 4 cross
      // / 21 red; along the hoist 12 red / 4 cross / 12 red. (The
      // Norwegian grid does NOT carry over — Denmark's cross is
      // narrower and sits further from the hoist.)
      const w = 300;
      const h = 227;
      const ux = w / 37;
      const uy = h / 28;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#C8102E" />
            <rect x={12 * ux} y={0} width={4 * ux} height={h} fill="#ffffff" />
            <rect x={0} y={12 * uy} width={w} height={4 * uy} fill="#ffffff" />
          </>
        ),
      };
    }
    case "ca":
      return {
        w: 300,
        h: 150,
        body: (
          <>
            <rect width={300} height={150} fill="#ffffff" />
            <rect width={75} height={150} fill="#FF0000" />
            <rect x={225} width={75} height={150} fill="#FF0000" />
            {/* Leaf centred in the white square per the official
                construction (64 × 32 units): the leaf's bounding box
                (32 tall in the glyph) is centred on (150, 75) and
                stands ≈ 0.59 of the hoist high. */}
            <MapleLeaf cx={150} cy={66.7} s={2.78} fill="#FF0000" />
          </>
        ),
      };
    case "uk":
      return { w: 300, h: 180, body: <UnionJack w={300} h={180} uid="uk" /> };
    case "fr":
      return {
        w: 300,
        h: 200,
        body: (
          <>
            <rect width={100} height={200} fill="#000091" />
            <rect x={100} width={100} height={200} fill="#ffffff" />
            <rect x={200} width={100} height={200} fill="#E1000F" />
          </>
        ),
      };
    case "au": {
      const w = 300;
      const h = 150;
      // Flags Act 1953, First Schedule (fractions of the hoist = 150;
      // every star's inner diameter is 4/9 of its outer diameter).
      // Commonwealth Star: outer Ø 3/10 hoist, centred in the lower
      // hoist quarter. Southern Cross about the centre fly (225, 75):
      // Gamma 1/6 hoist above it on the middle line, Alpha 1/6 below;
      // Beta 1/4 hoist LEFT of the middle line and 1/16 above centre;
      // Delta 2/9 RIGHT and 31/240 above centre; Epsilon (5-point,
      // Ø 1/12) 1/10 right and 1/24 below centre. Southern Cross
      // stars Ø 1/7 hoist.
      const scR = (h / 7) / 2;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#00247D" />
            <UnionJack w={150} h={75} uid="au" />
            <Star cx={75} cy={112.5} r={(0.3 * h) / 2} fill="#ffffff" points={7} innerRatio={4 / 9} />
            <Star cx={225} cy={25} r={scR} fill="#ffffff" points={7} innerRatio={4 / 9} />
            <Star cx={225} cy={125} r={scR} fill="#ffffff" points={7} innerRatio={4 / 9} />
            <Star cx={187.5} cy={65.6} r={scR} fill="#ffffff" points={7} innerRatio={4 / 9} />
            <Star cx={258.3} cy={55.6} r={scR} fill="#ffffff" points={7} innerRatio={4 / 9} />
            <Star cx={240} cy={81.3} r={(h / 12) / 2} fill="#ffffff" innerRatio={4 / 9} />
          </>
        ),
      };
    }
    case "nz": {
      const w = 300;
      const h = 150;
      // NZ Gazette, 27 June 1902 (fractions of the hoist = 150;
      // 1/60 hoist = 2.5). Long limb on the vertical line midway
      // across the fly (x = 225), its two star centres 36/60 apart
      // about the fly centre. Short limb on a line through a point
      // 12/60 below the top star, rising toward the fly at 82° to the
      // vertical: Delta (fly side) 12/60 from that point, Mimosa
      // (hoist side) 14/60. Red diameters: Acrux 7/60, Gacrux and
      // Mimosa 6/60, Delta 5/60; white border 1/120 hoist wide.
      const stars: { cx: number; cy: number; redR: number }[] = [
        { cx: 225, cy: 30, redR: (6 / 60 * h) / 2 },
        { cx: 225, cy: 120, redR: (7 / 60 * h) / 2 },
        { cx: 254.7, cy: 55.8, redR: (5 / 60 * h) / 2 },
        { cx: 190.3, cy: 64.9, redR: (6 / 60 * h) / 2 },
      ];
      const border = h / 120;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#00247D" />
            <UnionJack w={150} h={75} uid="nz" />
            {stars.map((s, i) => (
              <g key={i}>
                <Star cx={s.cx} cy={s.cy} r={s.redR + border} fill="#ffffff" />
                <Star cx={s.cx} cy={s.cy} r={s.redR} fill="#CC142B" />
              </g>
            ))}
          </>
        ),
      };
    }
    case "jp":
      return {
        w: 300,
        h: 200,
        body: (
          <>
            <rect width={300} height={200} fill="#ffffff" />
            <circle cx={150} cy={100} r={60} fill="#BC002D" />
          </>
        ),
      };
    case "gr": {
      const w = 300;
      const h = 200;
      const s = h / 9;
      return {
        w,
        h,
        body: (
          <>
            {Array.from({ length: 9 }, (_, i) => (
              <rect key={i} x={0} y={i * s} width={w} height={s + 0.5} fill={i % 2 === 0 ? "#0D5EAF" : "#ffffff"} />
            ))}
            <rect x={0} y={0} width={s * 5} height={s * 5} fill="#0D5EAF" />
            <rect x={s * 2} y={0} width={s} height={s * 5} fill="#ffffff" />
            <rect x={0} y={s * 2} width={s * 5} height={s} fill="#ffffff" />
          </>
        ),
      };
    }
    case "nl":
      return {
        w: 300,
        h: 200,
        body: (
          <>
            <rect width={300} height={67} fill="#AE1C28" />
            <rect y={67} width={300} height={66} fill="#ffffff" />
            <rect y={133} width={300} height={67} fill="#21468B" />
          </>
        ),
      };
    case "it":
      return {
        w: 300,
        h: 200,
        body: (
          <>
            <rect width={100} height={200} fill="#009246" />
            <rect x={100} width={100} height={200} fill="#ffffff" />
            <rect x={200} width={100} height={200} fill="#CE2B37" />
          </>
        ),
      };
    case "es": {
      const w = 300;
      const h = 200;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={50} fill="#AA151B" />
            <rect y={50} width={w} height={100} fill="#F1BF00" />
            <rect y={150} width={w} height={50} fill="#AA151B" />
            {/* Coat of arms — SIMPLIFIED AND LABELED (per the pack's
                rule): a quartered shield in the four colors + a crown,
                never drawn as if exact. Placement/size per the
                official model (Law 33/1981 / RD 2964/1981): centre at
                1/3 of the fly from the hoist, arms height = 2/5 of
                the hoist = 80 units. The glyph spans y −33…+18
                locally, so it is scaled 80/51 and centred on (100,100). */}
            <g transform="translate(100 111.8) scale(1.569)">
              <path d="M-13 -22 h26 v20 q0 14 -13 20 q-13 -6 -13 -20 Z" fill="#ffffff" stroke="#7a5b00" strokeWidth={1.4} />
              <rect x={-13} y={-22} width={13} height={15} fill="#AA151B" />
              <rect x={0} y={-22} width={13} height={15} fill="#ffffff" />
              <rect x={-13} y={-7} width={13} height={15} fill="#F1BF00" />
              <rect x={0} y={-7} width={13} height={15} fill="#AA151B" />
              <path d="M-11 -33 L-7 -26 L0 -34 L7 -26 L11 -33 L11 -23 L-11 -23 Z" fill={GOLD} stroke="#7a5b00" strokeWidth={1} />
            </g>
            <text x={100} y={148} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#5c4400">
              ARMS — SIMPLIFIED
            </text>
          </>
        ),
      };
    }
    case "pl":
      return {
        w: 300,
        h: 188,
        body: (
          <>
            <rect width={300} height={94} fill="#ffffff" />
            <rect y={94} width={300} height={94} fill="#DC143C" />
          </>
        ),
      };
    case "tr": {
      // Turkish Flag Law No. 2893 construction chart, G = hoist =
      // 200: white hoist hem M = G/30; centre of the outer crescent
      // A = G/2 from the hem's seam, outer Ø B = G/2; inner Ø D =
      // 0.4 G, its centre C = G/16 toward the fly; star inscribed in
      // a circle Ø F = G/4 with one point toward the hoist, placed so
      // its hoist-side point sits 0.0154 G inside the line joining
      // the crescent's two tips (the position the chart's figures
      // imply).
      const w = 300;
      const h = 200;
      const G = h;
      const hem = G / 30;
      const outerCx = hem + G / 2;
      const outerR = G / 4;
      const innerCx = outerCx + G / 16;
      const innerR = (0.4 * G) / 2;
      const d = innerCx - outerCx;
      const tipsX = outerCx + (d * d + outerR * outerR - innerR * innerR) / (2 * d);
      const starR = G / 8;
      const starCx = tipsX - 0.0154 * G + starR;
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#E30A17" />
            <rect width={hem} height={h} fill="#ffffff" />
            <circle cx={outerCx} cy={100} r={outerR} fill="#ffffff" />
            <circle cx={innerCx} cy={100} r={innerR} fill="#E30A17" />
            <Star cx={starCx} cy={100} r={starR} fill="#ffffff" rotDeg={180} />
          </>
        ),
      };
    }
    case "kr": {
      const w = 300;
      const h = 200;
      // National Flag Act Enforcement Decree construction: taegeuk
      // Ø = 1/2 the hoist, built on the flag's own diagonal (upper
      // left → lower right): the semicircle on the LEFT of the
      // diagonal's midpoint bulges BELOW the diagonal, the one on
      // the RIGHT bulges ABOVE it; upper part red, lower blue — so
      // red dips on the hoist side and blue rises on the fly side.
      const cx = 150;
      const cy = 100;
      const R = 50;
      const diag = Math.hypot(w, h);
      const ux = w / diag;
      const uy = h / diag;
      const pNW = { x: cx - R * ux, y: cy - R * uy };
      const pSE = { x: cx + R * ux, y: cy + R * uy };
      const taegeukRed = `M ${pNW.x.toFixed(1)} ${pNW.y.toFixed(1)} A ${R} ${R} 0 0 1 ${pSE.x.toFixed(1)} ${pSE.y.toFixed(1)} A ${R / 2} ${R / 2} 0 0 0 ${cx} ${cy} A ${R / 2} ${R / 2} 0 0 1 ${pNW.x.toFixed(1)} ${pNW.y.toFixed(1)} Z`;
      // Trigrams (Decree): bar length = 1/2 the taegeuk Ø; the stack
      // is 1/3 Ø tall (bars Ø/12 thick, gaps Ø/24, broken-bar split
      // Ø/12); the gap between taegeuk and trigram is 1/4 Ø; each
      // trigram's centre lies on a flag diagonal with its length at
      // a right angle to that diagonal.
      const barLen = R;
      const barT = (2 * R) / 12;
      const pitch = barT + (2 * R) / 24;
      const split = (2 * R) / 12;
      const centreDist = R + (2 * R) / 4 + (2 * R) / 6;
      const rot = Math.atan2(h, w) * (180 / Math.PI) - 90; // −56.31°
      const trigram = (corner: "tl" | "tr" | "bl" | "br", pattern: boolean[]) => {
        const sx = corner === "tl" || corner === "bl" ? -1 : 1;
        const sy = corner === "tl" || corner === "tr" ? -1 : 1;
        const tx = cx + sx * centreDist * ux;
        const ty = cy + sy * centreDist * uy;
        const r = sx * sy === 1 ? rot : -rot;
        return (
          <g transform={`translate(${tx.toFixed(1)} ${ty.toFixed(1)}) rotate(${r.toFixed(2)})`} fill="#000000">
            {pattern.map((solid, i) => {
              const y = -pitch + i * pitch - barT / 2;
              return solid ? (
                <rect key={i} x={-barLen / 2} y={y} width={barLen} height={barT} />
              ) : (
                <g key={i}>
                  <rect x={-barLen / 2} y={y} width={(barLen - split) / 2} height={barT} />
                  <rect x={split / 2} y={y} width={(barLen - split) / 2} height={barT} />
                </g>
              );
            })}
          </g>
        );
      };
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={h} fill="#ffffff" />
            <circle cx={cx} cy={cy} r={R} fill="#003478" />
            <path d={taegeukRed} fill="#C60C30" />
            {trigram("tl", [true, true, true])}
            {trigram("tr", [false, true, false])}
            {trigram("bl", [true, false, true])}
            {trigram("br", [false, false, false])}
          </>
        ),
      };
    }
    case "ph": {
      const w = 300;
      const h = 150;
      // RA 8491 construction: the white triangle is equilateral with
      // sides equal to the hoist (apex at 150·cos30° ≈ 130); the sun
      // sits at the triangle's centre (centroid x = 130/3 ≈ 43) and
      // a star stands at each vertex, one point toward the vertex.
      const sunX = 130 / 3;
      const rays: React.ReactNode[] = [];
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        rays.push(
          <line
            key={i}
            x1={sunX + 13 * Math.cos(a)}
            y1={75 + 13 * Math.sin(a)}
            x2={sunX + 21 * Math.cos(a)}
            y2={75 + 21 * Math.sin(a)}
            stroke="#FCD116"
            strokeWidth={3}
          />,
        );
      }
      return {
        w,
        h,
        body: (
          <>
            <rect width={w} height={75} fill="#0038A8" />
            <rect y={75} width={w} height={75} fill="#CE1126" />
            <polygon points="0,0 130,75 0,150" fill="#ffffff" />
            {rays}
            <circle cx={sunX} cy={75} r={11} fill="#FCD116" />
            <Star cx={18} cy={17} r={6.5} fill="#FCD116" rotDeg={-136.6} />
            <Star cx={18} cy={133} r={6.5} fill="#FCD116" rotDeg={136.6} />
            <Star cx={110} cy={75} r={6.5} fill="#FCD116" rotDeg={0} />
          </>
        ),
      };
    }
    default:
      return { w: 300, h: 200, body: <rect width={300} height={200} fill="#cccccc" /> };
  }
}

export function FlagArt({ art, title }: { art: string; title: string }) {
  const { w, h, body } = renderArt(art);
  return (
    <FlagSvg w={w} h={h} title={title}>
      {body}
    </FlagSvg>
  );
}
