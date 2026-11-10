// Partner Forces — the NATO grade-code explainer, 17 country
// profiles, and the courtesy & protocol basics, rendered from
// partners.ts (the researched pack is the content source of truth).
//
// Insignia are drawn ONLY where the pack's official text description
// specs the device (flag-rank stars, Canada's officer straps,
// Norway's student badges, France's general stars, the Philippines'
// one attested star). Every drawing is captioned as a stylized
// rendition from that country's official description. Where the pack
// says image-only or insufficient, the profile prints the reason line
// and draws nothing — the UK profile contains no drawn insignia at
// all, by design.

import { useEffect, useState } from "react";
import { CardTools } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import {
NATO_CAUTIONS,
NATO_CAVEAT,
NATO_LADDER,
NATO_OF10_NOTE,
NATO_PURPOSE,
NATO_SOURCE_LINE,
NATO_US_TABLE,
PARTNER_COUNTRIES,
PROTOCOL_ENTRIES,
PROTOCOL_INTRO,
type PartnerArt,
type PartnerCountry,
type PartnerTable,
} from "./partners";

const BOARD = "#2c3444";
const BOARD_EDGE = "#4a5468";
const SILVER = "#c9ccd4";
const GOLD = "#d9a441";
const RED_LEAF = "#c23b2e";

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

/** St Edward's Crown, stylized: band, three points, orb and cross. */
function CrownGlyph({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`} fill={GOLD}>
      <path d="M-11 7 L-11 -4 L-5.5 1 L0 -7 L5.5 1 L11 -4 L11 7 Z" />
      <rect x={-11} y={8.5} width={22} height={3} rx={1} />
      <circle cx={0} cy={-9.5} r={2.1} />
      <path d="M0 -14.5 V-12 M-1.8 -13.2 H1.8" stroke={GOLD} strokeWidth={1.6} />
    </g>
  );
}

/** A maple leaf, stylized — the device Canada's Dress Instructions
 * describe on a general officer's shoulder strap. */
function MapleLeaf({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  const pts =
    "0,-13 3,-6.5 7.5,-9.5 6.8,-3.5 11.5,-5.5 9.5,0.5 14,0 9,4.5 11,9.5 4.5,6.8 3.8,12 6.5,14.5 1.6,13.5 1.6,19 -1.6,19 -1.6,13.5 -6.5,14.5 -3.8,12 -4.5,6.8 -11,9.5 -9,4.5 -14,0 -9.5,0.5 -11.5,-5.5 -6.8,-3.5 -7.5,-9.5 -3,-6.5";
  return (
    <polygon
      points={pts}
      transform={`translate(${cx} ${cy}) scale(${s})`}
      fill={RED_LEAF}
      stroke="#8f2a20"
      strokeWidth={0.8}
    />
  );
}

/** A simple curved scimitar blade (Canada: “a scimitar amid St
 * Edward's Crown” on the general's strap). */
function Scimitar({ cx, cy }: { cx: number; cy: number }) {
  return (
    <path
      d={`M${cx - 13} ${cy + 3} Q${cx} ${cy - 7} ${cx + 13} ${cy + 1} Q${cx} ${cy + 5} ${cx - 13} ${cy + 3} Z`}
      fill={SILVER}
    />
  );
}

/** The Norwegian golden lion, stylized in profile: spiked mane and
 * face at the left, body and legs to the right, tail curled up. */
function LionGlyph({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  const manePts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const rad = i % 2 === 0 ? 8.6 : 5.9;
    const a = (Math.PI / 8) * i;
    manePts.push(`${(-9 + rad * Math.cos(a)).toFixed(1)},${(-4 + rad * Math.sin(a)).toFixed(1)}`);
  }
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`} fill={GOLD}>
      <polygon points={manePts.join(" ")} />
      <circle cx={-9} cy={-4} r={3.8} />
      <path d="M-3 -9 L13 -8 L14 2 L10.5 2 L11.5 11 L8 11 L6.5 2 L-1 2 L0 11 L-3.5 11 L-4.5 1 Z" />
      <path d="M13.5 -7 Q20 -12 17.5 -18" stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" />
    </g>
  );
}

function AnchorGlyph({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g
      transform={`translate(${cx} ${cy}) scale(${s})`}
      stroke={GOLD}
      strokeWidth={2.4}
      fill="none"
      strokeLinecap="round"
    >
      <circle cx={0} cy={-11} r={3.4} />
      <path d="M0 -7.6 V13" />
      <path d="M-8 -3 H8" />
      <path d="M-12 5 Q-11 14 0 15 Q11 14 12 5" />
      <path d="M-12 5 L-15 10 M-12 5 L-7 8" />
      <path d="M12 5 L15 10 M12 5 L7 8" />
    </g>
  );
}

function PartnerArtSvg({ art }: { art: PartnerArt }) {
  switch (art.kind) {
    case "stars": {
      const xs =
        art.count === 1 ? [32] : art.count === 2 ? [23, 41] : art.count === 3 ? [15, 32, 49] : art.count === 4 ? [11, 25, 39, 53] : [8, 19, 30, 41, 52];
      const r = art.count >= 4 ? 5.4 : 6.4;
      return (
        <svg viewBox="0 0 64 30" className="w-24" role="img" aria-hidden="true">
          <rect x={2} y={3} width={60} height={24} rx={4} fill={BOARD} stroke={BOARD_EDGE} strokeWidth={1} />
          {xs.map((x) => (
            <Star key={x} cx={x} cy={15} r={r} fill={SILVER} />
          ))}
        </svg>
      );
    }
    case "canadaGeneral": {
      const leafYs = Array.from({ length: art.leaves }, (_, i) => 52 + i * 26);
      const h = 52 + art.leaves * 26 + 8;
      return (
        <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
          <rect x={10} y={2} width={44} height={h - 4} rx={6} fill={BOARD} stroke={BOARD_EDGE} strokeWidth={1} />
          <CrownGlyph cx={32} cy={16} s={0.9} />
          <Scimitar cx={32} cy={32} />
          {leafYs.map((y) => (
            <MapleLeaf key={y} cx={32} cy={y} s={0.95} />
          ))}
        </svg>
      );
    }
    case "canadaOfficer": {
      const top = art.crown ? 34 : 12;
      const starYs = Array.from({ length: art.stars }, (_, i) => top + 10 + i * 19);
      const h = top + 10 + art.stars * 19 + 4;
      return (
        <svg viewBox={`0 0 64 ${h}`} className="w-16" role="img" aria-hidden="true">
          <rect x={10} y={2} width={44} height={h - 4} rx={6} fill={BOARD} stroke={BOARD_EDGE} strokeWidth={1} />
          {art.crown ? <CrownGlyph cx={32} cy={16} s={0.9} /> : null}
          {starYs.map((y) => (
            <Star key={y} cx={32} cy={y} r={6.4} fill={SILVER} />
          ))}
        </svg>
      );
    }
    case "norwayStudent": {
      return (
        <svg viewBox="0 0 64 74" className="w-16" role="img" aria-hidden="true">
          <rect x={8} y={2} width={48} height={70} rx={8} fill={BOARD} stroke={BOARD_EDGE} strokeWidth={1} />
          {art.badge === "L" ? (
            <path d="M26 12 V34 H40" stroke={GOLD} strokeWidth={5} fill="none" strokeLinecap="square" />
          ) : art.badge === "lion" ? (
            <LionGlyph cx={32} cy={22} s={0.95} />
          ) : (
            <AnchorGlyph cx={32} cy={22} s={0.95} />
          )}
          {[22, 32, 42].map((x) => (
            <Star key={x} cx={x} cy={56} r={4.6} fill={GOLD} />
          ))}
        </svg>
      );
    }
  }
}

function ArtFigure({ art, countryName }: { art: PartnerArt; countryName: string }) {
  return (
    <figure className="flex w-28 flex-col items-center gap-1.5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-2.5 text-center">
      <PartnerArtSvg art={art} />
      <figcaption className="text-xs leading-snug text-[var(--text)]">
        {art.caption}
        <span className="mt-0.5 block font-semibold text-[var(--dim)]">
          Stylized rendition from {countryName}&apos;s official description.
        </span>
      </figcaption>
    </figure>
  );
}

/* -------------------------------- tables -------------------------------- */

function RankTableView({ table }: { table: PartnerTable }) {
  return (
    <div className="mt-4">
      <h5 className="font-display text-base font-bold text-[var(--text)]">{table.title}</h5>
      <table className="mt-2 w-full table-fixed border-collapse text-sm">
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th
                key={c + i}
                scope="col"
                className={`border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold break-words text-[var(--text)] ${i === 0 ? (table.wideFirst ? "w-[30%]" : "w-[22%]") : ""}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border border-[var(--border)] px-2 py-1.5 align-top break-words text-[var(--text)] ${ci === 0 ? "font-semibold" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.note ? <p className="mt-1.5 text-sm text-[var(--dim)]">{table.note}</p> : null}
    </div>
  );
}

function StatusBadge({ country }: { country: PartnerCountry }) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-bold tracking-wide ${
        country.gap ? "bg-[var(--amber-bg)] text-[var(--amber)]" : "bg-[var(--surface2)] text-[var(--dim)]"
      }`}
    >
      {country.status}
    </span>
  );
}

/* ------------------------------ profile page ----------------------------- */

function PartnerProfile({ country, onBack }: { country: PartnerCountry; onBack: () => void }) {
  return (
    <div>
      <button
        type="button"
        aria-label="Back to all partner countries"
        onClick={onBack}
        className="mb-3 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
      >
        ← All partner countries
      </button>

      <div className="mb-4">
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">{country.name}</h2>
        <div className="mt-2">
          <StatusBadge country={country} />
        </div>
      </div>

      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Force &amp; services</h3>
        <p className="mt-1 text-base text-[var(--text)]">{country.force}</p>
        {country.forceFlag ? <FlagBox text={country.forceFlag} /> : null}
      </article>

      {country.gapText ? (
        <section
          aria-label={`${country.name} — gap statement`}
          className="mt-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4"
        >
          <h3 className="font-display text-lg font-bold text-[var(--text)]">⚠ GAP — no official English rank table</h3>
          <p className="mt-1 text-base text-[var(--text)]">{country.gapText}</p>
        </section>
      ) : null}

      {country.tables.length > 0 || country.rankIntro ? (
        <article className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="font-display text-lg font-bold text-[var(--text)]">Ranks</h3>
          {country.rankIntro ? <p className="mt-1 text-base text-[var(--text)]">{country.rankIntro}</p> : null}
          {country.tables.map((t) => (
            <RankTableView key={t.title} table={t} />
          ))}
          {country.rankNotes.map((n) => (
            <p key={n.slice(0, 40)} className="mt-3 text-sm text-[var(--text)]">{n}</p>
          ))}
          {country.rankFlags.map((f) => (
            <FlagBox key={f.slice(0, 40)} text={f} />
          ))}
        </article>
      ) : null}

      <article className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Insignia</h3>
        {country.insigniaReason ? (
          <p className="mt-1 text-base font-semibold text-[var(--text)]">{country.insigniaReason}</p>
        ) : null}
        {country.insigniaSpecs.map((s) => (
          <div key={s.spec.slice(0, 40)} className="mt-3">
            <p className="text-base text-[var(--text)]">
              <span className="font-bold">SPEC: </span>
              {s.spec}
            </p>
            {s.display ? <p className="mt-0.5 text-sm italic text-[var(--dim)]">{s.display}</p> : null}
          </div>
        ))}
        {country.art.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {country.art.map((a) => (
              <ArtFigure key={a.caption} art={a} countryName={country.name} />
            ))}
          </div>
        ) : null}
        {country.insigniaNotes.map((n) => (
          <p key={n.slice(0, 40)} className="mt-3 text-sm text-[var(--text)]">{n}</p>
        ))}
      </article>

      <article className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Working with them</h3>
        <p className="mt-1 text-base text-[var(--text)]">{country.working}</p>
        {country.workingFlag ? <FlagBox text={country.workingFlag} /> : null}
        <h4 className="font-display mt-4 text-base font-bold text-[var(--text)]">Official sources</h4>
        <LinkChips links={country.links} name={country.name} />
        <CardTools
          cardRef={{
            section: "partners",
            itemKey: country.id,
            title: `Partner Forces — ${country.name}`,
            summary: `${country.force} ${country.status}.`,
            source: country.source,
          }}
        />
      </article>

      <button
        type="button"
        aria-label="Back to all partner countries"
        onClick={onBack}
        className="mt-4 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
      >
        ← All partner countries
      </button>
    </div>
  );
}

/* --------------------------------- home ---------------------------------- */

function ExplainerCard() {
  return (
    <article aria-label="NATO grade codes" className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h3 className="font-display text-xl font-bold text-[var(--text)]">The NATO grade codes — STANAG 2116 / APersP-01</h3>
      <p className="mt-2 text-base text-[var(--text)]">{NATO_SOURCE_LINE}</p>
      <p className="mt-2 text-base text-[var(--text)]">{NATO_PURPOSE}</p>
      <FlagBox text={NATO_CAVEAT} />

      <h4 className="font-display mt-4 text-base font-bold text-[var(--text)]">The ladder</h4>
      <table className="mt-2 w-full table-fixed border-collapse text-sm">
        <thead>
          <tr>
            <th scope="col" className="w-[18%] border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">Code family</th>
            <th scope="col" className="w-[22%] border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">Range</th>
            <th scope="col" className="border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">Who it covers</th>
          </tr>
        </thead>
        <tbody>
          {NATO_LADDER.map((r) => (
            <tr key={r.code}>
              <td className="border border-[var(--border)] px-2 py-1.5 font-semibold whitespace-nowrap text-[var(--text)]">{r.code}</td>
              <td className="border border-[var(--border)] px-2 py-1.5 whitespace-nowrap text-[var(--text)]">{r.range}</td>
              <td className="border border-[var(--border)] px-2 py-1.5 text-[var(--text)]">{r.who}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-[var(--text)]">{NATO_OF10_NOTE}</p>

      <h4 className="font-display mt-4 text-base font-bold text-[var(--text)]">U.S. correspondence — the column you actually use</h4>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Find the partner&apos;s code in their profile below, then read across to the U.S. grade you already know.
      </p>
      <table className="mt-2 w-full table-fixed border-collapse text-sm">
        <thead>
          <tr>
            <th scope="col" className="w-[18%] border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">NATO code</th>
            <th scope="col" className="w-[22%] border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">U.S. pay grade</th>
            <th scope="col" className="border border-[var(--border)] bg-[var(--surface2)] px-2 py-1.5 text-left font-bold text-[var(--text)]">Landmark U.S. titles</th>
          </tr>
        </thead>
        <tbody>
          {NATO_US_TABLE.map((r) => (
            <tr key={r.code}>
              <td className="border border-[var(--border)] px-2 py-1.5 font-semibold whitespace-nowrap text-[var(--text)]">{r.code}</td>
              <td className="border border-[var(--border)] px-2 py-1.5 whitespace-nowrap text-[var(--text)]">{r.grade}</td>
              <td className="border border-[var(--border)] px-2 py-1.5 text-[var(--text)]">{r.titles}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {NATO_CAUTIONS.map((c) => (
        <div key={c.title} className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-base font-bold text-[var(--text)]">{c.title}</p>
          <p className="mt-0.5 text-sm text-[var(--text)]">{c.body}</p>
        </div>
      ))}

      <CardTools
        cardRef={{
          section: "partners",
          itemKey: "nato-codes",
          title: "NATO grade codes (STANAG 2116 / APersP-01)",
          summary: "OF-1…OF-10 and OR-1…OR-9 with the U.S. correspondence, the officer offset (O-1 and O-2 both = OF-1), and the NSO no-public-mirror caveat.",
          source: "APersP-01 Ed. A Ver. 3 — NATO Standardization Office",
        }}
      />
    </article>
  );
}

export function PartnersView({
  focusId,
  focusNonce,
  onFocusHandled,
  focusAnchor,
  focusCard,
}: {
  focusId: string | null;
  focusNonce: number;
  onFocusHandled: () => void;
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // Hub of tiles: NATO Grade Codes (the explainer + the courtesy &
  // protocol basics) and Country Profiles (the 17, searchable by
  // country name). Deep links to the explainer or a protocol card
  // open the NATO tile; country deep links open the profile itself.
  const [tile, setTile] = useState<"nato" | "countries" | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      if (slug === anchorSlug("NATO grade codes") || slug === anchorSlug("Courtesy and protocol")) return "nato";
    }
    if (
      focusCard &&
      (focusCard.startsWith("NATO grade codes") || focusCard.startsWith("Courtesy & protocol"))
    ) {
      return "nato";
    }
    return null;
  });
  const [countryQuery, setCountryQuery] = useState("");
  const cq = countryQuery.trim().toLowerCase();
  const shownCountries = cq
    ? PARTNER_COUNTRIES.filter((c) => c.name.toLowerCase().includes(cq) || c.force.toLowerCase().includes(cq))
    : PARTNER_COUNTRIES;

  // Opening or leaving a profile (or a hub tile) starts at the top of
  // it — the list and the profile share one scroll position otherwise.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedId, tile]);

  // Deep link from Global Search / My Binder: open the requested
  // country profile directly, then clear the hand-off.
  useEffect(() => {
    if (focusId) {
      setSelectedId(focusId);
      onFocusHandled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId, focusNonce]);

  const selected = selectedId ? PARTNER_COUNTRIES.find((c) => c.id === selectedId) : undefined;
  if (selected) {
    return <PartnerProfile country={selected} onBack={() => setSelectedId(null)} />;
  }

  const backBtn = (
    <HubBackButton ariaLabel="Back to Partner Forces areas" text="All areas" onBack={() => setTile(null)} />
  );

  return (
    <div>
      <SectionHead
        title="Partner Forces"
        sub="Recognition and joint-work literacy: how allied and partner militaries present themselves on their own official pages — their force names, their rank names, how their ranks line up on the NATO code scale, and what their insignia look like — so you can read the shoulder in front of you and know who you're talking to."
      />
      <p className="mb-4 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
        Sources rule, held throughout: a partner country&apos;s own official defence-ministry / armed-forces pages
        (English-language versions) or NATO&apos;s own official publications — no Wikipedia, no commercial
        rank-chart sites. Where a country does not publish an item in English on an official page, the profile
        says so and stops: the gap is the finding, and it is never filled from secondary sources. Insignia are
        drawn only where official text describes them, and every drawing is labeled a stylized rendition.
      </p>

      {tile === null ? (
        <HubTileGrid
          label="Partner Forces areas"
          onOpen={(key) => setTile(key as "nato" | "countries")}
          tiles={[
            { key: "nato", label: "NATO Grade Codes", sub: "The code frame + courtesy & protocol" },
            { key: "countries", label: "Country Profiles", sub: `${PARTNER_COUNTRIES.length} partner countries` },
          ]}
        />
      ) : null}

      {tile === "nato" ? (
        <>
          {backBtn}
          <ExplainerCard />

          <section aria-label="Courtesy and protocol" className="mt-6">
            <h3 className="font-display text-xl font-bold text-[var(--text)]">Courtesy &amp; protocol basics</h3>
            <p className="mt-1 text-sm text-[var(--dim)]">{PROTOCOL_INTRO}</p>
            <div className="mt-3 space-y-3">
              {PROTOCOL_ENTRIES.map((e) => (
                <article key={e.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                  <h4 className="font-display text-lg font-bold text-[var(--text)]">{e.title}</h4>
                  <p className="mt-1 text-base text-[var(--text)]">{e.body}</p>
                  {e.flag ? <FlagBox text={e.flag} /> : null}
                  <LinkChips links={e.links} name={e.title} />
                  <CardTools
                    cardRef={{
                      section: "partners",
                      itemKey: `protocol-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                      title: `Courtesy & protocol — ${e.title}`,
                      summary: e.body,
                      source: "AR 600-25 / FM 7-21.13 (U.S. Army official publications)",
                    }}
                  />
                </article>
              ))}
            </div>
          </section>
        </>
      ) : null}

      {tile === "countries" ? (
        <>
          {backBtn}
          <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">The 17 partner profiles</h3>
          <HubSearch
            id="partners-country-search"
            label="Search partner countries"
            ariaLabel="Search partner countries by country name"
            value={countryQuery}
            onChange={setCountryQuery}
            placeholder="Try Norway, Canada, Japan…"
          />
          {shownCountries.length === 0 ? (
            <p className="text-sm text-[var(--dim)]">
              No partner profile matches “{countryQuery}” — the 17 profiles are the countries listed in this
              section.
            </p>
          ) : (
            <div className="space-y-2">
              {shownCountries.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-label={`Open the ${c.name} partner profile`}
                  onClick={() => setSelectedId(c.id)}
                  className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-left"
                >
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-lg font-bold text-[var(--text)]">{c.name}</span>
                    <StatusBadge country={c} />
                  </span>
                  <span className="mt-1 block text-sm text-[var(--dim)]">{c.force}</span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
