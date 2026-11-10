// Branch emblem renditions — original stylized line art drawn for
// Battle Book from the published official descriptions in the theming
// research pack (§5B). Every rendition is captioned "Stylized
// rendition" where it renders. NO service SEAL is ever drawn: no ring,
// no inscription band, no seal composition, for any service.

import type { BranchKey } from "./theming";

function Eagle({ cx = 32, top = 6, scale = 1 }: { cx?: number; top?: number; scale?: number }) {
  // Simplified crested eagle: spread wings, body, head — line art only.
  return (
    <g transform={`translate(${cx} ${top}) scale(${scale})`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 10 L-16 2 L-13 9 L-18 8 L-11 14 L-14 16 L-6 17" />
      <path d="M0 10 L16 2 L13 9 L18 8 L11 14 L14 16 L6 17" />
      <path d="M-4 12 C-4 20 -2 25 0 27 C2 25 4 20 4 12" />
      <circle cx="0" cy="8" r="3" />
      <path d="M3 7 L7 8 L3 10" />
      <path d="M-3 26 L-6 31 M3 26 L6 31" />
    </g>
  );
}

function FouledAnchor({ cx = 32, top = 30 }: { cx?: number; top?: number }) {
  return (
    <g transform={`translate(${cx} ${top})`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="0" cy="2" r="3" />
      <path d="M0 5 L0 26" />
      <path d="M-9 10 L9 10" />
      <path d="M-13 19 C-13 26 -7 30 0 30 C7 30 13 26 13 19" />
      <path d="M-13 19 L-16 14 M-13 19 L-8 15 M13 19 L16 14 M13 19 L8 15" />
      <path d="M-10 2 C-4 8 4 12 10 22" strokeDasharray="3 2.4" />
    </g>
  );
}

function Globe({ cx = 32, cy = 34, r = 13 }: { cx?: number; cy?: number; r?: number }) {
  // Western-Hemisphere globe: circle, meridian arcs, simplified
  // Americas landmass hint — line art only.
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx={cx} cy={cy} r={r} />
      <path d={`M${cx - r} ${cy} H${cx + r}`} />
      <path d={`M${cx} ${cy - r} C${cx - r * 0.45} ${cy - r * 0.4} ${cx - r * 0.45} ${cy + r * 0.4} ${cx} ${cy + r}`} />
      <path d={`M${cx} ${cy - r} C${cx + r * 0.45} ${cy - r * 0.4} ${cx + r * 0.45} ${cy + r * 0.4} ${cx} ${cy + r}`} />
      <path d={`M${cx - r * 0.55} ${cy - r * 0.45} l4 -1 l1 4 l-3 3 l-3 -2 z`} />
      <path d={`M${cx - r * 0.2} ${cy + r * 0.25} l4 1 l-1 5 l-3 -2 z`} />
    </g>
  );
}

export function BranchEmblem({ branch, size = 56 }: { branch: BranchKey; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    role: "img" as const,
    "aria-label": `${branch} emblem — stylized rendition`,
    className: "shrink-0",
  };
  if (branch === "Marine Corps") {
    // Eagle, Globe, and Anchor: eagle over Western-Hemisphere globe
    // over fouled anchor.
    return (
      <svg {...common}>
        <Eagle top={0} scale={0.9} />
        <Globe cy={36} r={12} />
        <g transform="translate(0 6) scale(0.92) translate(3 0)">
          <FouledAnchor top={34} />
        </g>
      </svg>
    );
  }
  if (branch === "Army") {
    // The Army Star logo: white five-pointed star in its container.
    return (
      <svg {...common}>
        <rect x="8" y="8" width="48" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M32 17 L37.6 28.4 L50.2 30.2 L41 39.1 L43.2 51.6 L32 45.7 L20.8 51.6 L23 39.1 L13.8 30.2 L26.4 28.4 Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }
  if (branch === "Navy") {
    // Central device ONLY: eagle over fouled anchor. Never the
    // annulet, inscriptions, or rope rim.
    return (
      <svg {...common}>
        <Eagle top={2} />
        <FouledAnchor top={28} />
      </svg>
    );
  }
  if (branch === "Air Force") {
    // The Air Force Symbol: star-with-circle center, swept Arnold
    // wings. Drawn alone — layout rules live with the caller.
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 40 C14 30 22 26 27 25 L27 31 C21 32 14 36 9 44 Z" />
        <path d="M58 40 C50 30 42 26 37 25 L37 31 C43 32 50 36 55 44 Z" />
        <path d="M10 48 C17 41 23 38 27 37 L27 42 C22 43 16 46 12 51 Z" />
        <path d="M54 48 C47 41 41 38 37 37 L37 42 C42 43 48 46 52 51 Z" />
        <circle cx="32" cy="26" r="9" />
        <path d="M32 19.5 L34.2 24 L39 24.4 L35.4 27.6 L36.6 32.3 L32 29.8 L27.4 32.3 L28.6 27.6 L25 24.4 L29.8 24 Z" fill="currentColor" stroke="none" />
        <path d="M32 35 L32 56" />
      </svg>
    );
  }
  if (branch === "Space Force") {
    // The USSF Delta logo: delta with embedded Polaris.
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 6 L46 46 L36 38 L32 50 L28 38 L18 46 Z" />
        <path d="M32 16 L34 21 L39.5 21.5 L35.2 24.8 L36.6 30 L32 27.2 L27.4 30 L28.8 24.8 L24.5 21.5 L30 21 Z" fill="currentColor" stroke="none" />
        <path d="M10 52 C20 58 44 58 54 52" strokeDasharray="3 3" />
      </svg>
    );
  }
  // Coast Guard — the Mark: three canted bars (blue, white, red) with a
  // simplified emblem rendition (crossed anchors + life ring + shield).
  return (
    <svg {...common}>
      <g transform="rotate(64 32 32)">
        <rect x="6" y="10" width="52" height="9" fill="#007AA5" />
        <rect x="6" y="21" width="52" height="9" fill="#FFFFFF" stroke="currentColor" strokeWidth="0.8" />
        <rect x="6" y="32" width="52" height="9" fill="#E23D28" />
      </g>
      <g transform="translate(32 46)" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M-9 -6 L7 8 M9 -6 L-7 8" />
        <circle cx="0" cy="0" r="6.5" />
        <path d="M-3 -3 L3 -3 L3 2 C3 4.5 0 5.5 0 5.5 C0 5.5 -3 4.5 -3 2 Z" fill="currentColor" stroke="none" opacity="0.85" />
      </g>
    </svg>
  );
}

/** The USSF emblem device (delta over globe with orbit ring, NO
 * inscription band) — used where a round device is wanted (binder
 * cover for Space Force profiles). */
export function UssfEmblemDevice({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="U.S. Space Force emblem device — stylized rendition" className="shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Globe cy={36} r={14} />
      <ellipse cx="32" cy="34" rx="26" ry="9" transform="rotate(-18 32 34)" />
      <path d="M32 8 L41 30 L35 25 L32 34 L29 25 L23 30 Z" fill="currentColor" stroke="none" opacity="0.9" />
      <circle cx="50" cy="14" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
