// Songs, Anthem & Pledge + Flags — the ceremonial reference section,
// rendered from songs.ts + flags.ts (the researched anthems pack is
// the content source of truth). Hub of four square tiles per the house
// pattern: SERVICE SONGS / ANTHEM & PLEDGE / ALLIED ANTHEMS / FLAGS,
// each tile's list with its own search bar pinned at top. Open on all
// three tracks (member, spouse, future) like Traditions & Lore.
//
// Binding display rules held here:
// - Allied anthems open in their NATIVE language; the English side is
//   a toggle, and exists only as the pack records it (official
//   translation / second official version / official English summary
//   + the NO OFFICIAL TRANSLATION flag). No translation is ever made
//   in this app.
// - Spain's entry renders its no-lyrics state with zero lyric text.
// - Flags render as stylized renditions from the official
//   descriptions; no service seal is drawn.

import { useEffect, useState } from "react";
import { normalizeBranch, useScopeProfile } from "./scope";
import { CardTools } from "./binder";
import { FlagArt } from "./FlagArt";
import { FLAGS, type FlagEntry } from "./flags";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { FlagBox, LinkChips, SectionHead } from "./NewSections";
import { anchorSlug } from "./paths";
import {
  ALLIED_ANTHEMS,
  ALLIED_ETIQUETTE_NOTE,
  ANTHEM_ETIQUETTE_BULLETS,
  ANTHEM_ETIQUETTE_INTRO,
  NATIONAL_LINKS,
  PLEDGE_FACTS,
  PLEDGE_TEXT,
  SERVICE_SONGS,
  SONGS_LABELS_NOTE,
  SONGS_STANDING_RULE,
  SSB_FACTS,
  SSB_FLAG,
  SSB_VERSE_1,
  type AlliedAnthem,
  type LyricBlock,
  type ServiceSong,
} from "./songs";

type TileKey = "songs" | "national" | "allied" | "flags";

const TILE_LABELS: Record<TileKey, string> = {
  songs: "Service Songs",
  national: "Anthem & Pledge",
  allied: "Allied Anthems",
  flags: "Flags",
};

function songCardTitle(s: ServiceSong): string {
  return `${s.branch} — ${s.title}`;
}
function anthemCardTitle(a: AlliedAnthem): string {
  return `${a.country} — ${a.title}`;
}

const NATIONAL_TITLES = ["The Star-Spangled Banner", "Anthem etiquette — 36 U.S.C. § 301(b)", "The Pledge of Allegiance"];

function tileForCard(title: string): TileKey | null {
  if (SERVICE_SONGS.some((s) => songCardTitle(s) === title)) return "songs";
  if (NATIONAL_TITLES.includes(title)) return "national";
  if (ALLIED_ANTHEMS.some((a) => anthemCardTitle(a) === title)) return "allied";
  if (FLAGS.some((f) => f.name === title)) return "flags";
  return null;
}

function LyricBlocks({ blocks }: { blocks: LyricBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((b, i) => (
        <div key={i}>
          {b.heading ? <p className="text-sm font-bold text-[var(--accent-word)]">{b.heading}</p> : null}
          <div className="mt-0.5">
            {b.lines.map((line, j) => (
              <p key={j} className="text-base leading-relaxed text-[var(--text)]">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="mt-2 space-y-2">
      {items.map((p, i) => (
        <p key={i} className="text-base text-[var(--text)]">
          {p}
        </p>
      ))}
    </div>
  );
}

function ServiceSongCard({ song }: { song: ServiceSong }) {
  const title = songCardTitle(song);
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{song.branch.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{song.title}</h4>
      {song.statusNote ? (
        <p className="mt-2 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm font-semibold text-[var(--text)]">{song.statusNote}</p>
      ) : null}
      <Paragraphs items={song.intro} />
      {song.lyricSets.map((set) => (
        <div key={set.label} className="mt-4">
          <h5 className="font-display text-base font-bold text-[var(--text)]">{set.label}</h5>
          {set.note ? <p className="mt-1 text-sm text-[var(--dim)]">{set.note}</p> : null}
          <div className="mt-2">
            <LyricBlocks blocks={set.blocks} />
          </div>
        </div>
      ))}
      <Paragraphs items={song.facts} />
      {song.flags.map((f) => (
        <FlagBox key={f.slice(0, 40)} text={f} />
      ))}
      {song.credit ? <p className="mt-3 text-sm font-semibold text-[var(--text)]">{song.credit}</p> : null}
      <LinkChips links={song.links} name={title} />
      <CardTools cardRef={{ section: "songs", itemKey: song.id, title, summary: song.intro[0] ?? song.title, source: song.sourceName }} />
    </article>
  );
}

function AlliedAnthemCard({ anthem }: { anthem: AlliedAnthem }) {
  const title = anthemCardTitle(anthem);
  const [side, setSide] = useState<"native" | "english">("native");
  const hasEnglishSide = Boolean(anthem.englishBlocks || anthem.englishSummary);
  const showToggle = hasEnglishSide && !anthem.noLyrics;
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">{anthem.country.toUpperCase()}</p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{anthem.title}</h4>
      <p className="mt-2 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
        <span className="font-bold">TRANSLATION STATUS:</span> {anthem.translationStatus}
      </p>

      {anthem.noLyrics ? (
        <div className="mt-4 rounded-[var(--radius)] border-2 border-[var(--border)] p-4 text-center">
          <p className="font-display text-lg font-bold text-[var(--text)]">NO LYRICS — INSTRUMENTAL ONLY</p>
          <p className="mt-1 text-sm text-[var(--dim)]">
            The Marcha Real has no words in any language. There is no lyric text to show, and no proposed lyric set is printed — none was ever adopted.
          </p>
        </div>
      ) : (
        <>
          {showToggle ? (
            <div className="mt-3 flex gap-2" role="group" aria-label={`Language for the ${anthem.country} anthem`}>
              <button
                type="button"
                aria-pressed={side === "native"}
                aria-label={`Show the ${anthem.country} anthem in its native language`}
                onClick={() => setSide("native")}
                className={`min-h-11 flex-1 rounded-[var(--radius)] border-2 px-3 py-2 text-sm font-bold ${
                  side === "native"
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--accent-word)]"
                }`}
              >
                {anthem.nativeLabel}
              </button>
              <button
                type="button"
                aria-pressed={side === "english"}
                aria-label={`Show the English side for the ${anthem.country} anthem`}
                onClick={() => setSide("english")}
                className={`min-h-11 flex-1 rounded-[var(--radius)] border-2 px-3 py-2 text-sm font-bold ${
                  side === "english"
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--accent-word)]"
                }`}
              >
                {anthem.englishLabel}
              </button>
            </div>
          ) : null}
          <div className="mt-3">
            {side === "native" || !showToggle ? (
              anthem.nativeBlocks ? (
                <LyricBlocks blocks={anthem.nativeBlocks} />
              ) : null
            ) : anthem.englishBlocks ? (
              <LyricBlocks blocks={anthem.englishBlocks} />
            ) : (
              <div>
                <FlagBox text="NO OFFICIAL ENGLISH TRANSLATION — the English side of this entry is the government's official English summary, printed below. No lyric translation is shown, because the government does not publish one and this app does not make translations." />
                {anthem.englishSummary ? <Paragraphs items={[anthem.englishSummary]} /> : null}
              </div>
            )}
          </div>
          {anthem.englishNote ? <p className="mt-3 text-sm text-[var(--dim)]">{anthem.englishNote}</p> : null}
        </>
      )}

      <Paragraphs items={anthem.facts} />
      {anthem.flags.map((f) => (
        <FlagBox key={f.slice(0, 40)} text={f} />
      ))}
      <LinkChips links={anthem.links} name={title} />
      <CardTools cardRef={{ section: "songs", itemKey: anthem.id, title, summary: anthem.translationStatus, source: anthem.sourceName }} />
    </article>
  );
}

function FlagCard({ flag }: { flag: FlagEntry }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-widest text-[var(--dim)]">
        {flag.group === "United States" ? "UNITED STATES" : "ALLIED NATIONS"} · PROPORTIONS {flag.ratio}
      </p>
      <h4 className="font-display mt-0.5 text-lg font-bold text-[var(--text)]">{flag.name}</h4>
      <figure className="mt-3">
        <FlagArt art={flag.art} title={flag.name} />
        <figcaption className="mt-1 text-xs text-[var(--dim)]">{flag.artCaption}</figcaption>
      </figure>
      <Paragraphs items={flag.description} />
      {flag.symbolism ? (
        <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-xs font-bold tracking-wide text-[var(--accent-word)]">SYMBOLISM — {flag.symbolismLabel ?? "as officially stated"}</p>
          <p className="mt-1 text-sm text-[var(--text)]">{flag.symbolism}</p>
        </div>
      ) : null}
      {flag.streamers ? <Paragraphs items={[flag.streamers]} /> : null}
      <Paragraphs items={flag.facts} />
      {flag.flags.map((f) => (
        <FlagBox key={f.slice(0, 40)} text={f} />
      ))}
      <LinkChips links={flag.links} name={flag.name} />
      <CardTools cardRef={{ section: "songs", itemKey: flag.id, title: flag.name, summary: flag.description[0] ?? flag.name, source: flag.sourceName }} />
    </article>
  );
}

export function SongsView({
  focusAnchor,
  focusCard,
  goPartners,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
  goPartners?: () => void;
}) {
  const [tile, setTile] = useState<TileKey | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      for (const key of Object.keys(TILE_LABELS) as TileKey[]) {
        if (anchorSlug(TILE_LABELS[key]) === slug) return key;
      }
    }
    if (focusCard) return tileForCard(focusCard);
    return null;
  });
  const [songQuery, setSongQuery] = useState("");
  const [nationalQuery, setNationalQuery] = useState("");
  const [alliedQuery, setAlliedQuery] = useState("");
  const [flagQuery, setFlagQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const match = (q: string, ...texts: string[]) => {
    const t = q.trim().toLowerCase();
    if (!t) return true;
    return texts.join(" ").toLowerCase().includes(t);
  };

  // Rule 47 (ordering-only): the member's own service song leads.
  const songsProfile = useScopeProfile();
  const shownSongs = SERVICE_SONGS.filter((s) => match(songQuery, s.branch, s.title)).sort(
    (a, b) =>
      (songsProfile?.branch && normalizeBranch(a.branch) === normalizeBranch(songsProfile.branch) ? 0 : 1) -
      (songsProfile?.branch && normalizeBranch(b.branch) === normalizeBranch(songsProfile.branch) ? 0 : 1),
  );
  const shownAllied = ALLIED_ANTHEMS.filter((a) => match(alliedQuery, a.country, a.title));
  const shownFlags = FLAGS.filter((f) => match(flagQuery, f.name, f.group));

  const backBtn = (
    <HubBackButton ariaLabel="Back to Songs, Anthem and Pledge areas" text="All areas" onBack={() => setTile(null)} />
  );
  const emptyState = (what: string) => (
    <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--dim)]">
      No {what} match that search. Try a shorter word.
    </p>
  );

  return (
    <div>
      <SectionHead
        title="Songs, Anthem & Pledge + Flags"
        sub="The ceremonial layer, printed exactly as the services and governments publish it: the six service songs with their history, the national anthem and the Pledge with their statutory etiquette, the 17 allies' anthems in their native languages, and 24 flags with their official descriptions."
      />
      <p className="mb-4 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">{SONGS_LABELS_NOTE}</p>
      <p className="mb-4 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">{SONGS_STANDING_RULE}</p>

      {tile === null ? (
        <HubTileGrid
          label="Songs, Anthem and Pledge areas"
          onOpen={(key) => setTile(key as TileKey)}
          tiles={[
            { key: "songs", label: "Service Songs", sub: "The six services' songs, full texts" },
            { key: "national", label: "Anthem & Pledge", sub: "The Star-Spangled Banner, § 301(b) etiquette, the Pledge" },
            { key: "allied", label: "Allied Anthems", sub: "17 countries, 18 anthems — native text first" },
            { key: "flags", label: "Flags", sub: "The U.S. flag, 6 branch flags, 17 allied flags" },
          ]}
        />
      ) : null}

      {tile === "songs" ? (
        <>
          {backBtn}
          <HubSearch
            id="songs-search-songs"
            label="Search the service songs"
            ariaLabel="Search the service songs"
            value={songQuery}
            onChange={setSongQuery}
            placeholder="Branch or song title — try “Anchors” or “Space Force”"
          />
          <div className="space-y-4">
            {shownSongs.map((s) => (
              <ServiceSongCard key={s.id} song={s} />
            ))}
            {shownSongs.length === 0 ? emptyState("service songs") : null}
          </div>
        </>
      ) : null}

      {tile === "national" ? (
        <>
          {backBtn}
          <HubSearch
            id="songs-search-national"
            label="Search Anthem & Pledge"
            ariaLabel="Search Anthem and Pledge"
            value={nationalQuery}
            onChange={setNationalQuery}
            placeholder="Try “Pledge” or “etiquette”"
          />
          <div className="space-y-4">
            {match(nationalQuery, "The Star-Spangled Banner anthem Key Fort McHenry") ? (
              <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <h4 className="font-display text-lg font-bold text-[var(--text)]">The Star-Spangled Banner</h4>
                <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Verse 1, in full, as the National Park Service prints it</p>
                <div className="mt-2">
                  <LyricBlocks blocks={[{ lines: SSB_VERSE_1 }]} />
                </div>
                <Paragraphs items={SSB_FACTS} />
                <FlagBox text={SSB_FLAG} />
                <LinkChips links={[NATIONAL_LINKS.nps, NATIONAL_LINKS.loc]} name="The Star-Spangled Banner" />
                <CardTools
                  cardRef={{
                    section: "songs",
                    itemKey: "ssb",
                    title: "The Star-Spangled Banner",
                    summary: "Verse 1 in full per NPS; verses 2–4 named with their official link; the 1814 Fort McHenry facts per the Library of Congress.",
                    source: "National Park Service + Library of Congress",
                  }}
                />
              </article>
            ) : null}
            {match(nationalQuery, "etiquette 301 anthem conduct salute") ? (
              <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <h4 className="font-display text-lg font-bold text-[var(--text)]">Anthem etiquette — 36 U.S.C. § 301(b)</h4>
                <p className="mt-1 text-base text-[var(--text)]">{ANTHEM_ETIQUETTE_INTRO}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-[var(--text)]">
                  {ANTHEM_ETIQUETTE_BULLETS.map((b) => (
                    <li key={b.slice(0, 32)}>{b}</li>
                  ))}
                </ul>
                <CardTools
                  cardRef={{
                    section: "songs",
                    itemKey: "anthem-etiquette",
                    title: "Anthem etiquette — 36 U.S.C. § 301(b)",
                    summary: "Conduct during the national anthem: uniformed salute, the veterans' salute provision, hand over heart, and the flag-not-displayed rule — the statute's verb is “should.”",
                    source: "36 U.S.C. § 301(b)",
                  }}
                />
              </article>
            ) : null}
            {match(nationalQuery, "Pledge Allegiance Bellamy 1892 under God") ? (
              <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <h4 className="font-display text-lg font-bold text-[var(--text)]">The Pledge of Allegiance</h4>
                <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">Current text, verbatim from 4 U.S.C. § 4</p>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-[var(--text)]">{PLEDGE_TEXT}</p>
                <Paragraphs items={PLEDGE_FACTS} />
                <CardTools
                  cardRef={{
                    section: "songs",
                    itemKey: "pledge",
                    title: "The Pledge of Allegiance",
                    summary: "The current text verbatim from 4 U.S.C. § 4, and the history: Bellamy 1892; the 1923, 1924, 1942, 1945, and 1954 changes; § 4 etiquette.",
                    source: "4 U.S.C. § 4 + Library of Congress",
                  }}
                />
              </article>
            ) : null}
            {nationalQuery.trim() &&
            !match(nationalQuery, "The Star-Spangled Banner anthem Key Fort McHenry") &&
            !match(nationalQuery, "etiquette 301 anthem conduct salute") &&
            !match(nationalQuery, "Pledge Allegiance Bellamy 1892 under God")
              ? emptyState("entries")
              : null}
          </div>
        </>
      ) : null}

      {tile === "allied" ? (
        <>
          {backBtn}
          <HubSearch
            id="songs-search-allied"
            label="Search the allied anthems"
            ariaLabel="Search the allied anthems"
            value={alliedQuery}
            onChange={setAlliedQuery}
            placeholder="Country or anthem — try “Kimigayo” or “Spain”"
          />
          <p className="mb-4 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">{ALLIED_ETIQUETTE_NOTE}</p>
          {goPartners ? (
            <button
              type="button"
              aria-label="Open Partner Forces courtesy and protocol"
              onClick={goPartners}
              className="mb-4 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
            >
              Open Partner Forces — Courtesy &amp; protocol →
            </button>
          ) : null}
          <div className="space-y-4">
            {shownAllied.map((a) => (
              <AlliedAnthemCard key={a.id} anthem={a} />
            ))}
            {shownAllied.length === 0 ? emptyState("allied anthems") : null}
          </div>
        </>
      ) : null}

      {tile === "flags" ? (
        <>
          {backBtn}
          <HubSearch
            id="songs-search-flags"
            label="Search the flags"
            ariaLabel="Search the flags"
            value={flagQuery}
            onChange={setFlagQuery}
            placeholder="Country, branch, or flag — try “Dannebrog” or “Coast Guard”"
          />
          <div className="space-y-4">
            {shownFlags.map((f) => (
              <FlagCard key={f.id} flag={f} />
            ))}
            {shownFlags.length === 0 ? emptyState("flags") : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
