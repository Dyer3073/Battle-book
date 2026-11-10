// Job-device renditions — original stylized line art drawn from the
// published official descriptions in the theming research pack (§5D):
// Army branch insignia (TIOH), Navy specialty marks (NAVPERS 15665J
// art. 4226), Air Force / Space Force occupational-badge BASE devices
// (DAFI 36-2903), and Coast Guard specialty marks (COMDTINST M1020.6
// §3.D.9). Simplified at card size and always captioned as stylized
// renditions. A glyph renders ONLY for a mapped device — unmapped jobs
// render no art, never an invented device.

export function JobDeviceGlyph({ glyph, size = 44, color }: { glyph: string; size?: number; color?: string }) {
  const s = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    role: "img" as const,
    "aria-label": "Job device — stylized rendition",
    className: "shrink-0",
    fill: "none",
    stroke: color ?? "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const filled = { fill: color ?? "currentColor", stroke: "none" };
  switch (glyph) {
    case "caduceus":
    case "caduceus-leaf":
      return (
        <svg {...s}>
          <path d="M24 6 V40" /><path d="M24 10 C16 12 14 18 18 21 C21 23 24 21 24 18 M24 16 C32 14 34 20 30 23 C27 25 24 23 24 20" />
          <path d="M24 6 L16 2 M24 6 L32 2" /><circle cx="24" cy="7" r="1.8" {...filled} />
          {glyph === "caduceus-leaf" ? <path d="M31 34 C35 31 37 34 36 38 C32 38 30 37 31 34 Z" /> : null}
        </svg>
      );
    case "anchors":
      return (
        <svg {...s}>
          <path d="M14 8 L36 38 M34 8 L12 38" /><circle cx="14" cy="7" r="2.4" /><circle cx="34" cy="7" r="2.4" />
          <path d="M12 34 L8 29 M12 34 L17 31 M36 34 L40 29 M36 34 L31 31" />
        </svg>
      );
    case "gunbarrels":
      return (
        <svg {...s}>
          <path d="M12 6 L38 40 M36 6 L10 40" /><circle cx="12" cy="6" r="2.6" /><circle cx="36" cy="6" r="2.6" /><path d="M8 42 H16 M32 42 H40" />
        </svg>
      );
    case "atom":
      return (
        <svg {...s}>
          <circle cx="24" cy="24" r="2.4" {...filled} />
          <ellipse cx="24" cy="24" rx="17" ry="7" /><ellipse cx="24" cy="24" rx="17" ry="7" transform="rotate(60 24 24)" /><ellipse cx="24" cy="24" rx="17" ry="7" transform="rotate(120 24 24)" />
        </svg>
      );
    case "quills":
    case "quill-bolt":
      return (
        <svg {...s}>
          <path d="M10 6 C16 16 22 26 30 38 L26 40 C18 28 12 18 8 10 Z" /><path d="M38 6 C32 16 26 26 18 38 L22 40 C30 28 36 18 40 10 Z" />
          {glyph === "quill-bolt" ? <path d="M26 14 L20 26 H25 L21 36 L32 22 H26 Z" {...filled} /> : null}
        </svg>
      );
    case "gear":
      return (
        <svg {...s}>
          <circle cx="24" cy="24" r="9" /><circle cx="24" cy="24" r="3.4" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const x1 = 24 + Math.cos(a) * 11, y1 = 24 + Math.sin(a) * 11, x2 = 24 + Math.cos(a) * 16, y2 = 24 + Math.sin(a) * 16;
            return <path key={i} d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`} />;
          })}
        </svg>
      );
    case "cross":
      return (<svg {...s}><path d="M24 6 V42 M12 18 H36" strokeWidth="3.4" /></svg>);
    case "scales-sword":
      return (
        <svg {...s}>
          <path d="M24 6 V38 M14 12 H34" /><path d="M14 12 L9 22 H19 Z M34 12 L29 22 H39 Z" /><path d="M18 42 H30" /><path d="M24 24 V34" strokeDasharray="2.5 2.5" />
        </svg>
      );
    case "oakleaf":
      return (
        <svg {...s}>
          <path d="M24 42 C24 28 24 16 30 6 C38 12 38 26 30 34 C27 37 24 39 24 42 Z" /><path d="M24 42 C27 32 29 24 31 14" />
          <circle cx="19" cy="36" r="3" /><circle cx="26" cy="40" r="3" />
        </svg>
      );
    case "shield-stars":
      return (
        <svg {...s}>
          <path d="M10 6 H38 V22 C38 32 32 39 24 42 C16 39 10 32 10 22 Z" /><path d="M10 16 H38" />
          <path d="M15 22 V36 M20 22 V39 M24 22 V40 M28 22 V39 M33 22 V36" />
          <circle cx="24" cy="11" r="1.8" {...filled} /><circle cx="16" cy="11" r="1.1" {...filled} /><circle cx="32" cy="11" r="1.1" {...filled} />
        </svg>
      );
    case "armor":
      return (
        <svg {...s}>
          <ellipse cx="24" cy="34" rx="17" ry="7" /><path d="M14 20 H30 L36 27 H12 Z" /><path d="M30 22 L44 16" strokeWidth="2.6" /><circle cx="17" cy="34" r="2" /><circle cx="24" cy="34" r="2" /><circle cx="31" cy="34" r="2" />
        </svg>
      );
    case "crossed-cannons":
      return (
        <svg {...s}>
          <path d="M8 10 L36 38 M40 10 L12 38" strokeWidth="3" /><circle cx="17" cy="31" r="4.4" /><circle cx="31" cy="31" r="4.4" />
        </svg>
      );
    case "wings-prop":
    case "wings":
      return (
        <svg {...s}>
          {glyph === "wings-prop" ? (<><circle cx="24" cy="24" r="3.4" /><path d="M24 21 V8 M24 27 V40" strokeWidth="2.6" /></>) : <circle cx="24" cy="24" r="4" />}
          <path d="M21 22 L4 14 L6 20 L3 21 L10 26 M27 22 L44 14 L42 20 L45 21 L38 26" />
        </svg>
      );
    case "castle":
      return (
        <svg {...s}>
          <path d="M8 42 V18 H14 V12 H20 V18 H28 V12 H34 V18 H40 V42 Z" /><path d="M21 42 V32 C21 29 27 29 27 32 V42" />
        </svg>
      );
    case "crossed-rifles":
      return (
        <svg {...s}>
          <path d="M10 6 L34 40 M38 6 L14 40" strokeWidth="2.6" /><path d="M10 6 L7 12 M38 6 L41 12 M13 36 L9 42 M35 36 L39 42" />
        </svg>
      );
    case "crossed-sabers":
      return (
        <svg {...s}>
          <path d="M9 5 C16 18 26 30 39 40 M39 5 C32 18 22 30 9 40" /><path d="M35 36 L41 33 M13 36 L7 33" />
        </svg>
      );
    case "crossed-pistols":
      return (
        <svg {...s}>
          <path d="M8 10 H24 L30 18 L24 22 L18 16 H10 Z M40 10 H24 M30 18 L34 30 L27 32 L24 22" />
          <path d="M18 16 L14 28 L21 30 L24 22" />
        </svg>
      );
    case "flags-torch":
      return (
        <svg {...s}>
          <path d="M12 8 L36 34 M36 8 L12 34" /><path d="M12 8 L22 11 L12 16 Z M36 8 L26 11 L36 16 Z" {...filled} />
          <path d="M24 22 C21 27 24 29 24 32 C24 29 27 27 24 22 Z" {...filled} /><path d="M24 32 V42" />
        </svg>
      );
    case "benzene":
      return (
        <svg {...s}>
          <path d="M24 10 L38 18 V32 L24 40 L10 32 V18 Z" /><circle cx="24" cy="25" r="6" />
          <path d="M34 8 L40 4 M14 8 L8 4" />
        </svg>
      );
    case "bolt-globe":
    case "globe-bolt":
    case "globe":
    case "globe-eye":
    case "globe-arrows":
    case "globe-phone":
    case "atom-globe":
      return (
        <svg {...s}>
          <circle cx="24" cy="24" r="15" /><path d="M9 24 H39 M24 9 C18 15 18 33 24 39 C30 33 30 15 24 9" />
          {glyph === "bolt-globe" || glyph === "globe-bolt" ? <path d="M27 14 L19 27 H24 L21 36 L31 22 H26 Z" {...filled} /> : null}
          {glyph === "globe-eye" ? <><circle cx="24" cy="24" r="4.6" /><circle cx="24" cy="24" r="1.6" {...filled} /></> : null}
          {glyph === "globe-arrows" ? <path d="M10 36 C16 42 32 42 38 36 M36 31 L38 36 L33 35 M38 12 C32 6 16 6 10 12 M12 17 L10 12 L15 13" /> : null}
          {glyph === "globe-phone" ? <path d="M36 30 C38 34 36 38 32 37 L34 33 L31 31 L33 28 Z" /> : null}
          {glyph === "atom-globe" ? <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-24 24 24)" /> : null}
        </svg>
      );
    case "globe-torch":
      return (
        <svg {...s}>
          <circle cx="24" cy="27" r="12" /><path d="M12 27 H36 M24 15 C19 20 19 34 24 39 C29 34 29 20 24 15" />
          <path d="M24 3 C21 7 24 9 24 11 C24 9 27 7 24 3 Z" {...filled} /><path d="M24 11 V15" />
        </svg>
      );
    case "sphinx":
      return (
        <svg {...s}>
          <circle cx="24" cy="13" r="6" /><path d="M18 10 L14 4 M30 10 L34 4 M18 13 L12 16 M30 13 L36 16" />
          <path d="M14 40 C14 28 19 22 24 22 C29 22 34 28 34 40 M10 40 H38" /><path d="M20 40 V31 M28 40 V31" />
        </svg>
      );
    case "knight":
      return (
        <svg {...s}>
          <path d="M30 6 C20 8 14 16 15 26 L10 34 H22 L24 40 H34 C32 32 34 26 38 20 L30 18 C28 14 28 10 30 6 Z" /><circle cx="27" cy="17" r="1.7" {...filled} />
        </svg>
      );
    case "crossed-arrows":
      return (
        <svg {...s}>
          <path d="M8 40 L38 10 M8 10 L38 40" /><path d="M38 10 L30 10 M38 10 L38 18 M38 40 L38 32 M38 40 L30 40" />
        </svg>
      );
    case "diamond-globe":
      return (
        <svg {...s}>
          <path d="M24 4 L42 24 L24 44 L6 24 Z" /><circle cx="24" cy="24" r="8" /><path d="M16 24 H32 M24 16 C21 20 21 28 24 32 C27 28 27 20 24 16" />
        </svg>
      );
    case "wheel-wing":
      return (
        <svg {...s}>
          <circle cx="24" cy="27" r="11" /><circle cx="24" cy="27" r="3" /><path d="M24 16 V38 M13 27 H35 M16 19 L32 35 M32 19 L16 35" />
          <path d="M13 14 L4 9 M35 14 L44 9" />
        </svg>
      );
    case "bomb":
      return (
        <svg {...s}>
          <circle cx="24" cy="29" r="11" /><path d="M24 18 C24 12 28 10 27 5 C31 9 30 14 27 17" /><path d="M24 18 C22 13 17 12 18 7 C15 11 17 16 21 18" />
        </svg>
      );
    case "key-wheel":
      return (
        <svg {...s}>
          <circle cx="30" cy="27" r="11" /><circle cx="30" cy="27" r="3" /><path d="M30 16 V38 M19 27 H41" />
          <circle cx="12" cy="12" r="4.4" /><path d="M15 15 L23 23 M19 19 L23 17 M21 21 L25 19" />
        </svg>
      );
    case "sword-bundle":
      return (
        <svg {...s}>
          <path d="M24 4 V32 M19 9 L24 4 L29 9" /><path d="M18 32 H30 L28 38 H20 Z" /><path d="M12 14 V34 M36 14 V34 M12 24 H36" strokeDasharray="3 2.4" />
        </svg>
      );
    case "quill-star":
      return (
        <svg {...s}>
          <path d="M12 36 C14 24 20 14 32 7 C30 20 24 30 14 38 Z" /><path d="M14 36 L34 14" />
          <path d="M36 30 L37.4 34 L41.5 34.3 L38.3 36.8 L39.2 40.8 L36 38.6 L32.8 40.8 L33.7 36.8 L30.5 34.3 L34.6 34 Z" {...filled} />
        </svg>
      );
    case "star-wreath":
    case "star":
      return (
        <svg {...s}>
          <path d="M24 12 L27.2 19.4 L35.2 20.2 L29.2 25.6 L31 33.4 L24 29.2 L17 33.4 L18.8 25.6 L12.8 20.2 L20.8 19.4 Z" />
          <path d="M8 34 C11 40 17 43 24 43 C31 43 37 40 40 34" strokeDasharray="3 2.6" />
        </svg>
      );
    case "delta-globe":
      return (
        <svg {...s}>
          <circle cx="24" cy="27" r="12" /><path d="M12 27 H36 M24 15 C19 20 19 34 24 39 C29 34 29 20 24 15" />
          <path d="M24 2 L31 15 L27 12 L24 18 L21 12 L17 15 Z" {...filled} />
        </svg>
      );
    case "parachute-wings":
      return (
        <svg {...s}>
          <path d="M10 18 C10 8 38 8 38 18 L31 15 L24 18 L17 15 Z" /><path d="M13 17 L21 32 M35 17 L27 32 M24 18 V32" />
          <path d="M21 34 H27 V41 H21 Z" /><path d="M18 24 L4 19 M30 24 L44 19" />
        </svg>
      );
    case "shield-star":
      return (
        <svg {...s}>
          <path d="M10 6 H38 V22 C38 32 32 39 24 42 C16 39 10 32 10 22 Z" />
          <path d="M24 13 L26.4 18.6 L32.4 19.2 L27.8 23.2 L29.3 29 L24 25.8 L18.7 29 L20.2 23.2 L15.6 19.2 L21.6 18.6 Z" {...filled} />
        </svg>
      );
    case "gear-wings":
      return (
        <svg {...s}>
          <circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="3" />
          <path d="M24 12 V16 M24 32 V36 M12 24 H16 M32 24 H36 M16 16 L19 19 M29 29 L32 32 M32 16 L29 19 M19 29 L16 32" />
          <path d="M14 22 L3 17 M34 22 L45 17" />
        </svg>
      );
    case "droplet":
      return (<svg {...s}><path d="M24 5 C24 5 11 21 11 30 C11 37 17 42 24 42 C31 42 37 37 37 30 C37 21 24 5 24 5 Z" /><path d="M18 30 C18 34 20 36 22 37" /></svg>);
    case "castle-tools":
      return (
        <svg {...s}>
          <path d="M7 40 V20 H12 V14 H18 V20 H30 V14 H36 V20 H41 V40 Z" /><path d="M33 30 L42 39 M38 27 L43 32" strokeWidth="2.6" />
        </svg>
      );
    case "trident-waves":
      return (
        <svg {...s}>
          <path d="M24 4 V30 M14 8 C14 16 18 19 24 19 C30 19 34 16 34 8 M14 8 L11 14 M14 8 L17 13 M34 8 L31 13 M34 8 L37 14" />
          <path d="M6 36 C10 33 14 39 18 36 C22 33 26 39 30 36 C34 33 38 39 42 36 M6 43 C10 40 14 46 18 43 C22 40 26 46 30 43 C34 40 38 46 42 43" />
        </svg>
      );
    case "winged-shell":
      return (
        <svg {...s}>
          <circle cx="24" cy="22" r="7" /><path d="M24 12 C21 7 24 4 24 4 C24 4 27 7 24 12 M19 16 C15 12 17 8 17 8 M29 16 C33 12 31 8 31 8" />
          <path d="M17 20 L4 13 M31 20 L44 13" /><path d="M18 34 C18 29 30 29 30 34 M21 34 V40 M27 34 V40" />
        </svg>
      );
    default:
      return (
        <svg {...s}>
          <circle cx="24" cy="24" r="14" />
          <path d="M24 15 L26.8 21 L33.2 21.5 L28.3 25.3 L29.9 31.5 L24 28.2 L18.1 31.5 L19.7 25.3 L14.8 21.5 L21.2 21 Z" />
        </svg>
      );
  }
}
