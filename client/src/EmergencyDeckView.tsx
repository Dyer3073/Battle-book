// When It Goes Wrong — the first-24-hours emergency deck (view key
// "emergencydeck"). Content: emergency.ts, transcribed from the
// research pack at
// ~/workspace/military-app/emergency-firstyear/emergency-firstyear.md
// (Part A). Every card renders in the pack's exact shape:
// DO FIRST (numbered) → CALL → THEN → WATCH OUT.
//
// Placement / posture: the deck follows the Care & Crisis posture —
// it is NEVER filtered and never locked away from any track that can
// see Care content. Member and spouse shells render it in full (Home
// card + Care & Crisis cross-link + More hub); the future track sees
// a locked card only, exactly as it sees Care. The same data
// (emergency.ts) generates the deck's printable panels in the
// Smart-Card Deck print set (DeckPrint.tsx) — single source, no
// re-typed content.

import { CardTools } from "./binder";
import { EMERGENCY_CARDS, EMERGENCY_DECK_INTRO, type EmergencyCardData } from "./emergency";

const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

/** Views the spouse shell actually opens. A card whose pack-named
 * section is not spouse-open renders the link as named text on the
 * spouse track — never a dead button (the First 30 Days precedent).
 * The deck itself is never filtered: every card renders in full on
 * both tracks; only the sideways deep link is gated. */
const SPOUSE_OPEN_VIEWS: ReadonlySet<string> = new Set([
  "channels", "installation", "rights", "honors", "oconus", "healthhq", "care",
]);

function EmergencyDeckCard({
  card,
  go,
  spouse = false,
}: {
  card: EmergencyCardData;
  go: (view: string) => void;
  spouse?: boolean;
}) {
  return (
    <article className={cardCls} aria-label={`Emergency card ${card.id} — ${card.title}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block rounded bg-[var(--red-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--red)]">
          {card.id}
        </span>
        <h3 className="font-display text-lg font-bold text-[var(--text)]">{card.title}</h3>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{card.intro}</p>

      <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--dim)]">DO FIRST</h4>
      <ol className="mt-1 list-decimal space-y-1.5 pl-5">
        {card.doFirst.map((s, i) => (
          <li key={i} className="text-base text-[var(--text)]">{s}</li>
        ))}
      </ol>

      <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--dim)]">CALL</h4>
      {card.calls.length > 0 ? (
        <div className="mt-2 grid gap-2">
          {card.calls.map((c) => (
            <div key={c.tel + c.label}>
              <a
                href={c.tel}
                aria-label={`Call ${c.label}`}
                className="block rounded-[var(--radius)] bg-[var(--accent)] px-3 py-3 text-center font-display text-base font-bold text-[var(--accent-text)]"
              >
                {c.label}
              </a>
              {c.note ? <p className="mt-1 text-sm text-[var(--dim)]">{c.note}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
      {card.callNotes?.map((n) => (
        <p key={n.slice(0, 40)} className="mt-2 text-base text-[var(--text)]">{n}</p>
      ))}

      <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--dim)]">THEN</h4>
      <ol className="mt-1 list-decimal space-y-1.5 pl-5">
        {card.then.map((s, i) => (
          <li key={i} className="text-base text-[var(--text)]">{s}</li>
        ))}
      </ol>

      <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--red)]">WATCH OUT</h4>
      <ul className="mt-1 list-disc space-y-1.5 pl-5">
        {card.watchOut.map((s, i) => (
          <li key={i} className="text-base text-[var(--text)]">{s}</li>
        ))}
      </ul>

      {card.linkView && card.linkLabel ? (
        !spouse || SPOUSE_OPEN_VIEWS.has(card.linkView) ? (
          <button
            type="button"
            aria-label={`Open ${card.linkLabel} for emergency card ${card.id}`}
            onClick={() => go(card.linkView!)}
            className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)]"
          >
            Open {card.linkLabel} →
          </button>
        ) : (
          <p className="mt-4 text-sm text-[var(--dim)]">
            Detail: {card.linkLabel} (opens on the member&apos;s profile)
          </p>
        )
      ) : null}
      <p className="mt-3 text-xs text-[var(--dim)]">Source: {card.source}</p>
      <CardTools
        cardRef={{
          section: "emergencydeck",
          itemKey: card.id,
          title: `When It Goes Wrong ${card.id} — ${card.title}`,
          summary: card.intro,
          source: card.source,
        }}
      />
    </article>
  );
}

export function EmergencyDeckView({
  go,
  spouse = false,
  onPrintDeck,
}: {
  go: (view: string) => void;
  spouse?: boolean;
  onPrintDeck?: () => void;
}) {
  return (
    <div>
      <div className="mb-3">
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">When It Goes Wrong</h2>
        <div aria-hidden="true" className="mt-2 flex h-1 overflow-hidden rounded-full">
          <span className="flex-[2] bg-[var(--accent)]" />
          <span className="flex-1 bg-[var(--accent2)]" />
        </div>
        <p className="mt-1.5 text-sm text-[var(--dim)]">{EMERGENCY_DECK_INTRO}</p>
      </div>

      <section
        aria-label="If someone is in immediate danger"
        className="mb-4 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-4"
      >
        <p className="text-base font-bold text-[var(--text)]">
          In immediate danger? Call local emergency services first — 911 in the U.S.; overseas, the local
          emergency number or your installation security forces desk. The cards below are the first 24 hours
          after that call.
        </p>
        <button
          type="button"
          aria-label="Open Care and Crisis"
          onClick={() => go("care")}
          className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--accent-word)]"
        >
          Care &amp; Crisis — crisis lines pinned first →
        </button>
      </section>

      {onPrintDeck ? (
        <section aria-label="Print this deck" className={`${cardCls} mb-4`}>
          <h3 className="font-display text-lg font-bold text-[var(--text)]">Carry it on paper</h3>
          <p className="mt-1 text-sm text-[var(--text)]">
            All 8 cards print as pocket panels in the Smart-Card Deck — generated from this same data, so the
            paper copy never drifts from the app.
          </p>
          <button
            type="button"
            aria-label="Open the printable Smart-Card Deck with the emergency panels"
            onClick={onPrintDeck}
            className="mt-3 rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)]"
          >
            Print the deck →
          </button>
        </section>
      ) : null}

      <div className="space-y-4">
        {EMERGENCY_CARDS.map((card) => (
          <EmergencyDeckCard key={card.id} card={card} go={go} spouse={spouse} />
        ))}
      </div>

      <p className="mt-4 text-sm text-[var(--dim)]">
        Researched Nov 9, 2026 from official sources only (redcross.org, cac.mil, travel.state.gov,
        tricare-overseas.com, FTC/CFPB, MilitaryINSTALLATIONS installation pages). The OCONUS accident card
        covers Germany, Türkiye, and Okinawa only — the three location sets sourced from official pages; it
        is not generalized to other countries.
      </p>
    </div>
  );
}
