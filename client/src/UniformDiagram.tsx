// Stylized front-view uniform diagrams for the Uniforms section.
//
// Each figure draws ONLY what the researched uniforms pack's diagram
// spec states for that uniform (garments, colors as the pack describes
// them, insignia placement zones, tapes/patches, belt, footwear) — the
// spec data lives in uniforms.ts. These are illustrated guides in the
// same flat style as the Rank Charts insignia art: not to scale, and
// the caption under every figure routes exact placement to the
// governing regulation. Chest placement follows the wearer: ribbons
// and service tapes sit on the wearer's left (viewer's right), name
// tags/tapes on the wearer's right (viewer's left).

import type { FigureSpec } from "./uniforms";

const SKIN = "#c98d5f";
const HAIR = "#3a2e22";
const GOLD = "#d9a441";
const TAG_BG = "#e8e4d8";
const RIBBON_COLORS = ["#b03030", "#2e3d8f", "#d9a441", "#3f6d4e"];

function CamoBlobs({ tones, x, y, w, h }: { tones: [string, string]; x: number; y: number; w: number; h: number }) {
  return (
    <g fill={tones[0]} opacity={0.55}>
      <ellipse cx={x + w * 0.25} cy={y + h * 0.3} rx={w * 0.16} ry={h * 0.12} />
      <ellipse cx={x + w * 0.7} cy={y + h * 0.55} rx={w * 0.18} ry={h * 0.1} />
      <ellipse cx={x + w * 0.4} cy={y + h * 0.8} rx={w * 0.14} ry={h * 0.09} fill={tones[1]} />
      <ellipse cx={x + w * 0.82} cy={y + h * 0.18} rx={w * 0.1} ry={h * 0.08} fill={tones[1]} />
    </g>
  );
}

function Headgear({ spec }: { spec: FigureSpec }) {
  const c = spec.headgearColor;
  switch (spec.headgear) {
    case "none":
      return <path d="M185 34a15 15 0 0 1 30 0l0 -4a15 12 0 0 0 -30 0z" fill={HAIR} />;
    case "cap":
      return (
        <g>
          <path d="M176 33 Q200 10 224 33 L224 37 L176 37 Z" fill={c} stroke="rgba(0,0,0,0.25)" />
          <rect x="170" y="37" width="60" height="5" rx="2.5" fill="#20242c" />
        </g>
      );
    case "garrison":
      return <polygon points="184,15 216,15 222,32 178,32" fill={c} stroke="rgba(0,0,0,0.25)" />;
    case "patrol":
    case "cover8":
      return (
        <g>
          <path d="M179 35 Q200 13 221 35 Z" fill={c} stroke="rgba(0,0,0,0.25)" />
          <rect x="179" y="33" width="42" height="5" fill={c} stroke="rgba(0,0,0,0.25)" />
        </g>
      );
    case "dixie":
      return <polygon points="180,22 220,22 231,37 169,37" fill={c} stroke="rgba(0,0,0,0.2)" />;
    case "ballcap":
      return (
        <g>
          <path d="M180 34 Q200 14 220 34 Z" fill={c} stroke="rgba(0,0,0,0.25)" />
          <rect x="166" y="34" width="68" height="5" rx="2.5" fill={c} stroke="rgba(0,0,0,0.25)" />
        </g>
      );
    case "watchcap":
      return (
        <g>
          <path d="M181 32 Q200 12 219 32 Z" fill={c} />
          <rect x="180" y="30" width="40" height="7" fill={c} stroke="rgba(0,0,0,0.3)" />
        </g>
      );
  }
}

export function UniformDiagram({ spec, name }: { spec: FigureSpec; name: string }) {
  const H = spec.callout ? 384 : 336;
  const waistY = spec.top === "mess" ? 146 : spec.top === "coat" || spec.top === "choker" ? 170 : 154;
  const torsoBottom = spec.top === "mess" ? 128 : waistY;
  const handFill = spec.gloves ? "#f2f0e8" : SKIN;
  const legBottom = 294;
  const camo = spec.top === "camo";

  return (
    <svg
      viewBox={`0 0 400 ${H}`}
      role="img"
      aria-label={`Illustrated front-view diagram: ${name}`}
      className="mx-auto block w-full max-w-[430px]"
    >
      {/* sword (wearer's left = viewer's right) */}
      {spec.sword ? (
        <g>
          <rect x="256" y="140" width="14" height="6" rx="2" fill={GOLD} />
          <line x1="263" y1="146" x2="263" y2="282" stroke="#c9ccd4" strokeWidth="4" strokeLinecap="round" />
        </g>
      ) : null}

      {/* arms */}
      {spec.top === "pt" ? (
        <g>
          <rect x="128" y="60" width="24" height="36" rx="8" fill={spec.topColor} />
          <rect x="248" y="60" width="24" height="36" rx="8" fill={spec.topColor} />
          <rect x="133" y="94" width="14" height="66" rx="7" fill={SKIN} />
          <rect x="253" y="94" width="14" height="66" rx="7" fill={SKIN} />
        </g>
      ) : (
        <g>
          <rect x="128" y="60" width="24" height="108" rx="9" fill={spec.topColor} stroke="rgba(0,0,0,0.18)" />
          <rect x="248" y="60" width="24" height="108" rx="9" fill={spec.topColor} stroke="rgba(0,0,0,0.18)" />
          {camo && spec.camoTones ? (
            <>
              <CamoBlobs tones={spec.camoTones} x={128} y={60} w={24} h={108} />
              <CamoBlobs tones={spec.camoTones} x={248} y={60} w={24} h={108} />
            </>
          ) : null}
          {spec.sleevePatches ? (
            <>
              <rect x="131" y="84" width="18" height="14" rx="2" fill="rgba(0,0,0,0.28)" />
              <rect x="251" y="84" width="18" height="14" rx="2" fill="rgba(0,0,0,0.28)" />
            </>
          ) : null}
          {spec.sleeveDevice ? <circle cx="140" cy="96" r="6" fill={GOLD} stroke="rgba(0,0,0,0.3)" /> : null}
          {spec.cuffLace ? (
            <>
              <rect x="128" y="148" width="24" height="9" fill={GOLD} />
              <rect x="248" y="148" width="24" height="9" fill={GOLD} />
            </>
          ) : null}
        </g>
      )}
      <circle cx="140" cy="172" r="7" fill={handFill} stroke="rgba(0,0,0,0.2)" />
      <circle cx="260" cy="172" r="7" fill={handFill} stroke="rgba(0,0,0,0.2)" />

      {/* bottoms (behind torso bottom edge for trousers; skirt over) */}
      {spec.bottom === "trousers" ? (
        <g>
          <rect x="160" y={waistY - 4} width="37" height={legBottom - waistY - (spec.bloused ? 34 : 0) + 4} fill={spec.bottomColor} stroke="rgba(0,0,0,0.18)" />
          <rect x="203" y={waistY - 4} width="37" height={legBottom - waistY - (spec.bloused ? 34 : 0) + 4} fill={spec.bottomColor} stroke="rgba(0,0,0,0.18)" />
          {camo && spec.camoTones ? (
            <>
              <CamoBlobs tones={spec.camoTones} x={160} y={waistY} w={37} h={90} />
              <CamoBlobs tones={spec.camoTones} x={203} y={waistY} w={37} h={90} />
            </>
          ) : null}
          {spec.stripeColor ? (
            <>
              <rect x="176" y={waistY} width="4" height={legBottom - waistY - 2} fill={spec.stripeColor} />
              <rect x="220" y={waistY} width="4" height={legBottom - waistY - 2} fill={spec.stripeColor} />
            </>
          ) : null}
          {spec.bloused ? (
            <>
              <rect x="158" y="252" width="41" height="12" fill={spec.bottomColor} stroke="rgba(0,0,0,0.25)" />
              <rect x="201" y="252" width="41" height="12" fill={spec.bottomColor} stroke="rgba(0,0,0,0.25)" />
            </>
          ) : null}
        </g>
      ) : null}
      {spec.bottom === "shorts" ? (
        <g>
          <rect x="158" y={waistY - 4} width="39" height="52" fill={spec.bottomColor} stroke="rgba(0,0,0,0.18)" />
          <rect x="203" y={waistY - 4} width="39" height="52" fill={spec.bottomColor} stroke="rgba(0,0,0,0.18)" />
          <rect x="164" y={waistY + 48} width="27" height={legBottom - waistY - 48} fill={SKIN} />
          <rect x="209" y={waistY + 48} width="27" height={legBottom - waistY - 48} fill={SKIN} />
        </g>
      ) : null}
      {spec.bottom === "skirt" ? (
        <g>
          <polygon points={`166,${waistY - 4} 234,${waistY - 4} 244,238 156,238`} fill={spec.bottomColor} stroke="rgba(0,0,0,0.18)" />
          <rect x="168" y="238" width="24" height={legBottom - 238} fill={SKIN} />
          <rect x="208" y="238" width="24" height={legBottom - 238} fill={SKIN} />
        </g>
      ) : null}

      {/* torso */}
      <rect x="152" y="56" width="96" height={torsoBottom - 56} rx="8" fill={spec.topColor} stroke="rgba(0,0,0,0.2)" />
      {camo && spec.camoTones ? <CamoBlobs tones={spec.camoTones} x={152} y={56} w={96} h={torsoBottom - 56} /> : null}
      {spec.top === "coat" ? (
        <g stroke="rgba(0,0,0,0.3)" fill="none">
          <path d="M188 58 L200 84 L176 96" />
          <path d="M212 58 L200 84 L224 96" />
          <line x1="200" y1="84" x2="200" y2={torsoBottom - 4} />
        </g>
      ) : null}
      {spec.top === "choker" ? <rect x="184" y="56" width="32" height="12" fill="rgba(0,0,0,0.18)" /> : null}
      {spec.top === "jumper" ? (
        <g>
          <polygon points="182,56 218,56 200,92" fill="rgba(0,0,0,0.14)" />
          {spec.neckerchief ? (
            <>
              <polygon points="188,58 212,58 200,88" fill="#20242c" />
              <circle cx="200" cy="90" r="4" fill="#20242c" />
            </>
          ) : null}
        </g>
      ) : null}
      {spec.diagonalButtons ? (
        <g fill={GOLD}>
          <line x1="182" y1="66" x2="222" y2="150" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
          <circle cx="192" cy="88" r="3" />
          <circle cx="202" cy="110" r="3" />
          <circle cx="212" cy="132" r="3" />
        </g>
      ) : null}
      {spec.shirtText ? (
        <text x="200" y="112" textAnchor="middle" fontSize="13" fontWeight="700" fill={GOLD} letterSpacing="2">
          {spec.shirtText}
        </text>
      ) : null}

      {/* neck + head */}
      <rect x="191" y="46" width="18" height="14" fill={SKIN} />
      <circle cx="200" cy="36" r="15" fill={SKIN} />
      <Headgear spec={spec} />

      {/* tie / bow tie */}
      {spec.tieColor ? <polygon points="195,60 205,60 203,98 197,98" fill={spec.tieColor} stroke="rgba(0,0,0,0.25)" /> : null}
      {spec.bowTie ? (
        <g fill="#14161c">
          <polygon points="200,64 186,57 186,71" />
          <polygon points="200,64 214,57 214,71" />
          <rect x="196" y="60" width="8" height="8" />
        </g>
      ) : null}

      {/* shoulder boards */}
      {spec.shoulderBoards ? (
        <>
          <rect x="150" y="56" width="26" height="9" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
          <rect x="224" y="56" width="26" height="9" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
        </>
      ) : null}

      {/* collar devices (wearer's collar points) */}
      {spec.collarDevices ? (
        <>
          <circle cx="172" cy="68" r="3.5" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
          <circle cx="228" cy="68" r="3.5" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
        </>
      ) : null}

      {/* chest items — wearer's left = viewer's right */}
      {spec.tapes ? (
        <>
          <rect x="160" y="94" width="36" height="13" fill={spec.tapeColor ?? "rgba(0,0,0,0.3)"} stroke="rgba(0,0,0,0.35)" />
          <rect x="204" y="94" width="36" height="13" fill={spec.tapeColor ?? "rgba(0,0,0,0.3)"} stroke="rgba(0,0,0,0.35)" />
        </>
      ) : null}
      {spec.chestRank ? <rect x="193" y="112" width="14" height="16" fill="rgba(0,0,0,0.4)" stroke="rgba(0,0,0,0.4)" /> : null}
      {spec.ribbons ? (
        <g stroke="rgba(0,0,0,0.25)">
          {RIBBON_COLORS.slice(0, 3).map((c, i) => (
            <rect key={c} x={206 + i * 12} y="94" width="11" height="7" fill={c} />
          ))}
          {RIBBON_COLORS.slice(0, 3).map((c, i) => (
            <rect key={`b${c}`} x={206 + i * 12} y="102" width="11" height="7" fill={RIBBON_COLORS[(i + 2) % 4]} />
          ))}
        </g>
      ) : null}
      {spec.medals === "full" ? (
        <g>
          {RIBBON_COLORS.map((c, i) => (
            <g key={c}>
              <rect x={205 + i * 10} y="92" width="9" height="12" fill={c} stroke="rgba(0,0,0,0.25)" />
              <circle cx={209.5 + i * 10} cy="110" r="4.5" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
            </g>
          ))}
        </g>
      ) : null}
      {spec.medals === "mini" ? (
        <g>
          {RIBBON_COLORS.map((c, i) => (
            <g key={c}>
              <rect x={206 + i * 9} y="94" width="8" height="8" fill={c} stroke="rgba(0,0,0,0.25)" />
              <circle cx={210 + i * 9} cy="106" r="3.2" fill={GOLD} stroke="rgba(0,0,0,0.3)" />
            </g>
          ))}
        </g>
      ) : null}
      {spec.nameTag && !spec.hexNameTag ? (
        <rect x="160" y="94" width="34" height="11" fill={TAG_BG} stroke="rgba(0,0,0,0.4)" />
      ) : null}
      {spec.hexNameTag ? (
        <polygon points="164,94 190,94 195,99.5 190,105 164,105 159,99.5" fill={TAG_BG} stroke="rgba(0,0,0,0.4)" />
      ) : null}

      {/* cummerbund / belt */}
      {spec.top === "mess" ? (
        <rect x="152" y="128" width="96" height="18" fill={spec.cummerbundColor ?? "rgba(0,0,0,0.35)"} stroke="rgba(0,0,0,0.25)" />
      ) : null}
      {spec.beltColor ? (
        <g>
          <rect x="152" y={waistY - 11} width="96" height="11" fill={spec.beltColor} stroke="rgba(0,0,0,0.3)" />
          <rect x="193" y={waistY - 10} width="14" height="9" fill={GOLD} stroke="rgba(0,0,0,0.35)" />
        </g>
      ) : null}

      {/* footwear */}
      {spec.footwear === "boots" ? (
        <g fill={spec.footwearColor} stroke="rgba(0,0,0,0.3)">
          <rect x="160" y="246" width="37" height="52" />
          <rect x="203" y="246" width="37" height="52" />
          <rect x="156" y="298" width="43" height="10" rx="3" />
          <rect x="201" y="298" width="43" height="10" rx="3" />
        </g>
      ) : (
        <g fill={spec.footwearColor} stroke="rgba(0,0,0,0.3)">
          <rect x="156" y="294" width="44" height="13" rx="6" />
          <rect x="200" y="294" width="44" height="13" rx="6" />
          {spec.footwear === "runners" ? (
            <>
              <rect x="156" y="303" width="44" height="4" fill="#e8e4d8" stroke="none" />
              <rect x="200" y="303" width="44" height="4" fill="#e8e4d8" stroke="none" />
            </>
          ) : null}
        </g>
      )}

      {/* cold-weather callout strip (PT uniforms) */}
      {spec.callout ? (
        <g>
          <rect x="104" y="322" width="192" height="52" rx="8" fill="none" stroke="var(--dim)" strokeDasharray="5 4" />
          {spec.callout.map((label, i) => {
            const cx = spec.callout && spec.callout.length === 1 ? 200 : i === 0 ? 152 : 248;
            return (
              <g key={label}>
                <rect x={cx - 17} y="330" width="34" height="24" rx="4" fill={spec.topColor} stroke="rgba(0,0,0,0.25)" />
                <rect x={cx - 25} y="332" width="8" height="18" rx="3" fill={spec.topColor} stroke="rgba(0,0,0,0.25)" />
                <rect x={cx + 17} y="332" width="8" height="18" rx="3" fill={spec.topColor} stroke="rgba(0,0,0,0.25)" />
                <text x={cx} y="368" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--text)">
                  {label}
                </text>
              </g>
            );
          })}
        </g>
      ) : null}

      {/* labels with leader lines */}
      {spec.labels.map((l) => {
        const y = l.y * 336;
        const figX = l.side === "left" ? 146 : 254;
        const textX = l.side === "left" ? 120 : 280;
        return (
          <g key={`${l.side}-${l.text}`}>
            <line x1={textX + (l.side === "left" ? 4 : -4)} y1={y} x2={figX} y2={y} stroke="var(--dim)" strokeWidth="1" />
            <circle cx={figX} cy={y} r="2.2" fill="var(--dim)" />
            <text
              x={textX}
              y={y + 4}
              textAnchor={l.side === "left" ? "end" : "start"}
              fontSize={l.text.length > 19 ? 9.5 : l.text.length > 14 ? 11 : 12}
              fontWeight="600"
              fill="var(--text)"
            >
              {l.text}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
