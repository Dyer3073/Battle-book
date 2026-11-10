// Closure Sweep — view components for the FIELD tools (Land
// Navigation, First Aid & Buddy Aid, Drill & Ceremonies) and the
// Phrase Cards on the My Installation OCONUS hub cards.
//
// Field tools: a per-tool search bar + the entry cards, following
// the Field Tools house pattern. Diagrams render as ORIGINAL
// schematic panels (ClosureDiagram) driven by the entry's broad
// diagramKind, captioned with the pack's own DIAGRAM brief — the app
// never traces a manual figure. Every entry card carries CardTools
// (Binder + Flag), so every entry is Binder-savable, and its footer
// anchor (data-card-anchor) is what search/Binder deep links scroll
// to. The deep link arrives as a FieldEntry id (closureFocus): the
// tool opens and scrolls to that card.
//
// Phrase cards: rendered from phrases.ts on the OCONUS hub cards.
// Rows are Binder-savable at card level (one CardTools per phrase
// card, under the "installation" Binder section). Korea's gaps
// render as gap rows with NO phrase — visibly unpublished, never
// filled. The Okinawa card renders romaji only, exactly as sourced.

import { useEffect, useMemo, useState } from "react";
import { CardTools } from "./binder";
import { FlagBox } from "./NewSections";
import { HubSearch } from "./HubTiles";
import type { FieldEntry } from "./closureField";
import { HUB_PHRASE_CARDS, PHRASE_CARDS, type PhraseCard } from "./phrases";

/* ------------------------- Original diagrams ------------------------- */

/** Original schematic art by broad family. Simple line work drawn for
 * this app from the pack's art briefs — never traced from any manual. */
export function ClosureDiagram({ kind, brief }: { kind: NonNullable<FieldEntry["diagramKind"]>; brief: string }) {
  const stroke = "var(--accent)";
  const faint = "var(--dim)";
  const common = { fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <figure className="mt-3">
      <svg viewBox="0 0 320 180" role="img" aria-label={`Original schematic diagram: ${brief}`} className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)]">
        {kind === "map" && (
          <g {...common}>
            <rect x="30" y="20" width="260" height="140" />
            <path d="M30 55 H290 M30 90 H290 M30 125 H290 M95 20 V160 M160 20 V160 M225 20 V160" stroke={faint} strokeWidth="1" />
            <path d="M60 140 C110 100 150 130 200 95 C235 70 260 80 275 60" />
            <path d="M45 45 C90 60 120 40 160 55" stroke={faint} />
            <circle cx="200" cy="95" r="4" fill={stroke} />
          </g>
        )}
        {kind === "grid" && (
          <g {...common}>
            <rect x="70" y="15" width="180" height="150" />
            <path d="M130 15 V165 M190 15 V165 M70 65 H250 M70 115 H250" stroke={faint} strokeWidth="1" />
            <path d="M88 148 L142 92" strokeDasharray="5 4" />
            <circle cx="142" cy="92" r="5" fill={stroke} />
            <path d="M70 165 L250 15" stroke={faint} strokeWidth="1" strokeDasharray="2 5" />
          </g>
        )}
        {kind === "compass" && (
          <g {...common}>
            <circle cx="160" cy="90" r="62" />
            <circle cx="160" cy="90" r="4" fill={stroke} />
            <path d="M160 90 L160 34" />
            <path d="M160 90 L205 122" stroke={faint} />
            <path d="M152 44 L160 30 L168 44 Z" fill={stroke} />
            <path d="M160 28 V18 M160 152 V162 M98 90 H88 M222 90 H232" stroke={faint} />
          </g>
        )}
        {kind === "figure" && (
          <g {...common}>
            <circle cx="160" cy="38" r="13" />
            <path d="M160 51 V105 M160 66 L122 84 M160 66 L198 84 M160 105 L138 152 M160 105 L182 152" />
            <path d="M110 84 H132 M188 84 H210" stroke={faint} />
          </g>
        )}
        {kind === "formation" && (
          <g {...common}>
            {[70, 120, 170, 220].map((x) => (
              <g key={x}>
                <circle cx={x} cy="55" r="8" />
                <path d={`M${x} 63 V95`} />
              </g>
            ))}
            {[70, 120, 170, 220].map((x) => (
              <g key={x}>
                <circle cx={x} cy="118" r="8" />
                <path d={`M${x} 126 V158`} />
              </g>
            ))}
            <path d="M45 88 H275" stroke={faint} strokeDasharray="4 5" />
          </g>
        )}
        {kind === "chart" && (
          <g {...common}>
            <path d="M45 20 V155 H285" />
            {[55, 85, 115].map((y) => (
              <path key={y} d={`M45 ${y} H285`} stroke={faint} strokeWidth="1" strokeDasharray="2 5" />
            ))}
            <path d="M60 140 L120 105 L180 118 L240 62 L278 44" />
            <circle cx="240" cy="62" r="4" fill={stroke} />
          </g>
        )}
        {kind === "limb" && (
          <g {...common}>
            <path d="M60 60 C120 48 200 52 262 44" />
            <path d="M60 96 C120 86 200 90 262 82" stroke={faint} />
            <path d="M150 40 V100 M186 40 V100" />
            <path d="M168 26 V40" />
            <circle cx="168" cy="20" r="6" />
            <path d="M110 118 H230" stroke={faint} strokeDasharray="4 4" />
          </g>
        )}
        {kind === "night" && (
          <g {...common}>
            <path d="M235 28 a26 26 0 1 0 18 44 a32 32 0 1 1 -18 -44 Z" />
            <path d="M52 44 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z M84 118 l2 5 5 1 -4 4 1 5 -4 -2 -4 2 1 -5 -4 -4 5 -1 Z M120 62 l2 4 4 1 -3 3 1 4 -3 -2 -3 2 1 -4 -3 -3 4 -1 Z" stroke={faint} />
            <path d="M40 158 H290" stroke={faint} />
            <path d="M60 158 L96 120 L130 158 M140 158 L185 108 L225 158" stroke={faint} />
          </g>
        )}
        {kind === "strip" && (
          <g {...common}>
            {[58, 118, 178, 238].map((x, i) => (
              <g key={x}>
                <circle cx={x} cy="45" r="9" />
                <path d={`M${x} 54 V92 M${x} 66 L${x - 16} ${i % 2 ? 84 : 58} M${x} 66 L${x + 16} ${i % 2 ? 58 : 84} M${x} 92 L${x - 12} 128 M${x} 92 L${x + 12} 128`} />
                {i < 3 ? <path d={`M${x + 24} 84 H${x + 36}`} stroke={faint} /> : null}
              </g>
            ))}
            <path d="M40 148 H290" stroke={faint} strokeDasharray="4 5" />
          </g>
        )}
        {kind === "terrain" && (
          <g {...common}>
            <path d="M20 150 C70 150 85 92 130 88 C175 84 195 130 245 126 C275 124 290 100 305 96" />
            <path d="M20 162 C80 162 100 116 140 112 C185 108 205 150 255 146 C282 144 295 124 305 120" stroke={faint} />
            <path d="M20 138 C65 138 78 74 128 70 C172 66 192 112 242 110" stroke={faint} />
            <path d="M128 70 L142 52 M142 52 L156 70" stroke={faint} />
          </g>
        )}
      </svg>
      <figcaption className="mt-1.5 text-sm text-[var(--dim)]">
        Original schematic — drawn for this app from the pack&apos;s diagram brief, not traced from any manual
        figure. Brief: {brief}
      </figcaption>
    </figure>
  );
}

/* --------------------------- Field reference tool --------------------------- */

export function FieldRefTool({
  title,
  intro,
  entries,
  binderSection,
  focusId,
}: {
  title: string;
  intro: string;
  entries: FieldEntry[];
  binderSection: "landnav" | "firstaid" | "drill";
  focusId?: string | null;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      q === ""
        ? entries
        : entries.filter((e) =>
            [e.code, e.title, e.source, ...e.body, e.flag ?? ""].join(" ").toLowerCase().includes(q),
          ),
    [entries, q],
  );
  useEffect(() => {
    if (!focusId) return;
    const t = window.setTimeout(() => {
      const el = document.querySelector(`[data-closure-entry="${focusId}"]`);
      el?.scrollIntoView({ block: "start" });
    }, 140);
    return () => window.clearTimeout(t);
  }, [focusId]);
  return (
    <section aria-label={title}>
      <div className="mb-3 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">{title}</h3>
        <p className="mt-1 text-sm text-[var(--text)]">{intro}</p>
      </div>
      <HubSearch
        id={`closure-search-${binderSection}`}
        label={`Search ${title}`}
        ariaLabel={`Search entries in ${title}`}
        value={query}
        onChange={setQuery}
        placeholder="Search these entries…"
      />
      {visible.length === 0 ? (
        <p className="text-base text-[var(--dim)]">
          No entries in {title} match “{query}” — clear the search to see all {entries.length}.
        </p>
      ) : (
        <div className="space-y-3">
          {visible.map((e) => (
            <article
              key={e.id}
              data-closure-entry={e.id}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <p className="text-xs font-bold tracking-widest text-[var(--dim)]">
                {e.code}
                {e.card ? " · IN THE PRINT DECK" : ""}
              </p>
              <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{e.title}</h4>
              {e.body.map((p) => (
                <p key={p.slice(0, 48)} className="mt-2 text-base text-[var(--text)]">
                  {p}
                </p>
              ))}
              {e.diagram && e.diagramKind ? <ClosureDiagram kind={e.diagramKind} brief={e.diagram} /> : null}
              {e.flag ? <FlagBox text={e.flag} /> : null}
              <CardTools
                cardRef={{
                  section: binderSection,
                  itemKey: e.id,
                  title: `${e.code} — ${e.title}`,
                  summary: e.body[0] ?? e.title,
                  source: e.source,
                }}
              />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------- Phrase cards ------------------------------- */

function PhraseCardView({ card }: { card: PhraseCard }) {
  return (
    <article
      aria-label={card.title}
      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h5 className="font-display text-base font-bold text-[var(--text)]">{card.title}</h5>
        <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs font-bold text-[var(--dim)]">
          PHRASE CARD
        </span>
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">{card.sub}</p>
      <div>
        {card.rows.map((r) => (
          <div key={r.english + r.phrase} className="border-t border-[var(--border)] py-2.5">
            <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{r.category.toUpperCase()}</p>
            <p className="mt-0.5 text-base text-[var(--text)]">
              <span className="font-semibold">{r.english}:</span>{" "}
              <span className="font-display text-lg font-bold">{r.phrase}</span>
              {r.script ? <span className="ml-2 text-base text-[var(--text)]">{r.script}</span> : null}
            </p>
            {r.note ? <p className="mt-0.5 text-sm text-[var(--dim)]">{r.note}</p> : null}
            {r.flag ? <FlagBox text={r.flag} /> : null}
          </div>
        ))}
        {card.gaps.map((g) => (
          <div key={g.category} className="border-t border-dashed border-[var(--border)] py-2.5">
            <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{g.category.toUpperCase()}</p>
            <p className="mt-0.5 text-base font-semibold text-[var(--dim)]">Not published — no phrase ships</p>
            <p className="mt-0.5 text-sm text-[var(--dim)]">{g.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-[var(--dim)]">{card.sourceNote}</p>
      <CardTools
        cardRef={{
          section: "installation",
          itemKey: `phrases-${card.key}`,
          title: card.title,
          summary: card.sub,
          source: "Closure Sweep LIFE pack, Part 3 — official installation publications only",
        }}
      />
    </article>
  );
}

/** The phrase cards for one OCONUS hub (by hub id), or nothing. */
export function HubPhraseCards({ hubId }: { hubId: string }) {
  const keys = HUB_PHRASE_CARDS[hubId] ?? [];
  if (keys.length === 0) return null;
  return (
    <div className="mt-3 space-y-3">
      {keys.map((k) => {
        const card = PHRASE_CARDS[k];
        return card ? <PhraseCardView key={k} card={card} /> : null;
      })}
    </div>
  );
}
