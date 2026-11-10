// Hand & Arm Signals — the Field Tools signal library UI. Hub of
// square tiles by family (the app's layout-reorganization pattern,
// Knots precedent), each opening to its entry list with its own search
// bar; each signal card carries the pack entry shape: name header,
// family + service tags, MEANING, WHEN/HOW USED, the original
// START→FINISH schematic diagram, numbered performance steps, any ⚠
// variant flag (both published forms attributed, never blended),
// source line, and Binder save. The framing cards, the Flags & Panels
// annex (text only — no diagrams, by design), and the Not-Described
// Register (name + status only) ship as their own hub tiles.
// Content: signals.ts (from the research pack,
// ~/workspace/military-app/signals/signals.md).

import { useEffect, useMemo, useRef, useState } from "react";
import {
  FLAG_ANNEX_FRAMING,
  FLAG_COLOR_CODE,
  FLAG_SIGNALS_NAMED,
  NOT_DESCRIBED_REGISTER,
  PANEL_SYSTEM,
  RANGE_FLAG_FRAMING,
  RANGE_FLAG_SIGNALS_NAMED,
  SIGNALS,
  SIGNALS_SCOPE_NOTE,
  SIGNAL_FAMILIES,
  SIGNAL_FRAMING,
  signalFamilyName,
  signalSearchText,
  type SignalEntry,
  type SignalFamilyKey,
} from "./signals";
import { SignalDiagram } from "./SignalDiagram";
import { CardTools } from "./binder";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

type Screen =
  | { kind: "hub" }
  | { kind: "family"; family: SignalFamilyKey }
  | { kind: "signal"; id: string }
  | { kind: "annex" }
  | { kind: "register" };

function clip(s: string, n = 150): string {
  return s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s;
}

function SignalCard({ signal, onBack }: { signal: SignalEntry; onBack: () => void }) {
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "start" });
  }, [signal.id]);
  return (
    <div ref={topRef}>
      <button
        type="button"
        onClick={onBack}
        aria-label={`Back to ${signalFamilyName(signal.family)}`}
        className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
      >
        ← {signalFamilyName(signal.family)}
      </button>
      <article className={cardCls} aria-label={signal.name}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl font-bold text-[var(--text)]">{signal.name}</h3>
          <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
            {signalFamilyName(signal.family).toUpperCase()}
          </span>
          <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
            {signal.service === "Army task" ? "ARMY TASK 551-88H-1023" : signal.service.toUpperCase()}
          </span>
        </div>

        {signal.flag && (
          <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--text)]">
            ⚠ {signal.flag}
          </p>
        )}

        <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--accent-word)]">MEANING</h4>
        <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{signal.meaning}</p>

        {signal.use && (
          <>
            <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHEN / HOW USED</h4>
            <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{signal.use}</p>
          </>
        )}

        <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">DIAGRAM</h4>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Original schematic panels drawn for this app from the published performance text — motion signals show
          START → FINISH. The figure is drawn as seen by the viewer; nothing is traced from the manuals' figures.
        </p>
        <div className="mt-2">
          <SignalDiagram spec={signal.diagram} name={signal.name} />
        </div>

        <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">HOW IT'S PERFORMED</h4>
        <ol className="mt-1 list-decimal space-y-1.5 pl-5">
          {signal.steps.map((s, i) => (
            <li key={i} className="text-base leading-relaxed text-[var(--text)]">
              {s}
            </li>
          ))}
        </ol>

        <p className="mt-4 text-sm text-[var(--dim)]">Source: {signal.source}</p>
        <CardTools
          cardRef={{
            section: "signals",
            itemKey: `signal-${signal.id}`,
            title: signal.name,
            summary: clip(`${signalFamilyName(signal.family)} · ${signal.meaning}`),
            source: signal.source,
          }}
        />
      </article>
    </div>
  );
}

function SignalRow({ signal, onOpen }: { signal: SignalEntry; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${signal.name}`}
      className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left"
    >
      <span className="flex flex-wrap items-center gap-2">
        <span className="font-display text-base font-bold text-[var(--text)]">{signal.name}</span>
        <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
          {signal.service === "Army task" ? "MHE TASK" : signal.service.toUpperCase()}
        </span>
        {signal.flag && (
          <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
            ⚠ variant
          </span>
        )}
      </span>
      <span className="mt-0.5 block text-sm text-[var(--dim)]">
        {clip(signal.meaning, 110)} · {signal.steps.length} step{signal.steps.length === 1 ? "" : "s"}
      </span>
    </button>
  );
}

function AnnexView({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to Hand and Arm Signals families"
        className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
      >
        ← Hand &amp; Arm Signals
      </button>
      <div className={cardCls}>
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Flags &amp; Panels — Annex</h3>
        <p className="mt-1 text-base leading-relaxed text-[var(--text)]">
          Text cards only. The TC prints no performance text for the flag signal sets — their poses exist only in
          the manual's drawings — so NO diagrams are offered for anything on this page. Nothing here is invented to
          fill the gap.
        </p>

        <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">FLAG SIGNALS (TC §§2-52–2-55)</h4>
        <p className="mt-1 text-sm leading-relaxed text-[var(--dim)]">{FLAG_ANNEX_FRAMING}</p>
        <h5 className="mt-3 text-base font-bold text-[var(--text)]">Flag color code — when a flag is used alone (§2-54)</h5>
        <ul className="mt-1 space-y-1.5">
          {FLAG_COLOR_CODE.map((c) => (
            <li key={c.color} className="text-base leading-relaxed text-[var(--text)]">
              <strong>{c.color}</strong> = {c.meaning}
            </li>
          ))}
        </ul>
        <h5 className="mt-4 text-base font-bold text-[var(--text)]">The 6 named flag signals — name + status only</h5>
        <ul className="mt-1 space-y-3">
          {FLAG_SIGNALS_NAMED.map((f) => (
            <li key={f.name} className="border-t border-[var(--border)] pt-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{f.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-[var(--dim)]">{f.status}</p>
            </li>
          ))}
        </ul>

        <h4 className="font-display mt-6 text-sm font-bold tracking-wide text-[var(--accent-word)]">FIRING-RANGE FLAG SIGNALS (TC §2-56)</h4>
        <p className="mt-1 text-sm leading-relaxed text-[var(--dim)]">{RANGE_FLAG_FRAMING}</p>
        <ul className="mt-2 space-y-3">
          {RANGE_FLAG_SIGNALS_NAMED.map((f) => (
            <li key={f.name} className="border-t border-[var(--border)] pt-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{f.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-[var(--dim)]">{f.status}</p>
            </li>
          ))}
        </ul>

        <h4 className="font-display mt-6 text-sm font-bold tracking-wide text-[var(--accent-word)]">GROUND-TO-AIR PANEL SYSTEM (TC §§3-25–3-41)</h4>
        <div className="mt-2 space-y-4">
          {PANEL_SYSTEM.map((card) => (
            <div key={card.title} className="border-t border-[var(--border)] pt-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{card.title}</p>
              <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{card.body}</p>
              {card.bullets && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="text-base leading-relaxed text-[var(--text)]">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <CardTools
          cardRef={{
            section: "signals",
            itemKey: "signal-annex",
            title: "Flags & Panels — Annex (Hand & Arm Signals)",
            summary: "Flag color code, the 6 named flag signals and 5 range-flag signals (name + status only, no diagrams), and the ground-to-air panel system, as published in TC 3-21.60.",
            source: "TC 3-21.60 §§2-52–2-56, §§3-25–3-41",
          }}
        />
      </div>
    </div>
  );
}

export function SignalsTool({
  focusSignal,
  onDrill,
}: {
  focusSignal: { id: string; n: number } | null;
  /** Practice Trainers entry point — lands in the Signals Trainer. */
  onDrill?: () => void;
}) {
  const [screen, setScreen] = useState<Screen>({ kind: "hub" });
  const [hubQuery, setHubQuery] = useState("");
  const [familyQuery, setFamilyQuery] = useState("");

  useEffect(() => {
    if (!focusSignal) return;
    if (focusSignal.id === "register") {
      setScreen({ kind: "register" });
    } else if (focusSignal.id === "annex") {
      setScreen({ kind: "annex" });
    } else if (SIGNALS.some((s) => s.id === focusSignal.id)) {
      setScreen({ kind: "signal", id: focusSignal.id });
    }
  }, [focusSignal]);

  const hubHits = useMemo(() => {
    const q = hubQuery.trim().toLowerCase();
    if (!q) return [];
    return SIGNALS.filter((s) => signalSearchText(s).includes(q));
  }, [hubQuery]);

  const openSignal = (id: string) => setScreen({ kind: "signal", id });

  if (screen.kind === "signal") {
    const signal = SIGNALS.find((s) => s.id === screen.id);
    if (signal) {
      return <SignalCard signal={signal} onBack={() => setScreen({ kind: "family", family: signal.family })} />;
    }
  }

  if (screen.kind === "annex") {
    return <AnnexView onBack={() => setScreen({ kind: "hub" })} />;
  }

  if (screen.kind === "register") {
    return (
      <div>
        <button
          type="button"
          onClick={() => setScreen({ kind: "hub" })}
          aria-label="Back to Hand and Arm Signals families"
          className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
        >
          ← Hand &amp; Arm Signals
        </button>
        <div className={cardCls}>
          <h3 className="font-display text-xl font-bold text-[var(--text)]">Not-Described Register</h3>
          <p className="mt-1 text-base leading-relaxed text-[var(--text)]">
            Signal families and figures that are named in the opened sources but NOT described in text — figure-only
            sets, named-only restricted or unopened publications, and honest negative findings (research pack §10C).
            They are listed by name and status so the library's boundary is visible: no performance text, no steps,
            no diagrams. If a future sweep of an official text source describes one, it moves into the library with
            that citation.
          </p>
          <ul className="mt-4 space-y-3">
            {NOT_DESCRIBED_REGISTER.map((r) => (
              <li key={r.name} className="border-t border-[var(--border)] pt-3">
                <p className="font-display text-base font-bold text-[var(--text)]">{r.name}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-[var(--dim)]">{r.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (screen.kind === "family") {
    const fam = SIGNAL_FAMILIES.find((f) => f.key === screen.family);
    const entries = SIGNALS.filter((s) => s.family === screen.family);
    const q = familyQuery.trim().toLowerCase();
    const shown = q ? entries.filter((s) => signalSearchText(s).includes(q)) : entries;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setScreen({ kind: "hub" });
            setFamilyQuery("");
          }}
          aria-label="Back to Hand and Arm Signals families"
          className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
        >
          ← Hand &amp; Arm Signals
        </button>
        <h3 className="font-display text-xl font-bold text-[var(--text)]">{fam?.name}</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">{fam?.blurb}</p>
        <div className="mt-3">
          <label htmlFor="signals-family-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
            Search {fam?.name}
          </label>
          <input
            id="signals-family-search"
            aria-label={`Search ${fam?.name ?? "this family"}`}
            value={familyQuery}
            onChange={(e) => setFamilyQuery(e.target.value)}
            className={inputCls}
            placeholder="Signal name or meaning…"
            autoComplete="off"
          />
        </div>
        <div className="mt-3 space-y-2">
          {shown.map((s) => (
            <SignalRow key={s.id} signal={s} onOpen={() => openSignal(s.id)} />
          ))}
          {shown.length === 0 && (
            <p className="text-base text-[var(--dim)]">
              No {fam?.name} entries match “{familyQuery.trim()}”. Try the signal's published name — variant forms
              (Army / USMC / FM) are separate entries in their own families.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Hub
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Hand &amp; Arm Signals</h3>
      <p className="mt-1 text-base leading-relaxed text-[var(--text)]">
        All {SIGNALS.length} published hand-and-arm signals from the swept official sources — TC 3-21.60, the
        FM 21-60 differing set, the USMC's own list in MCWP 3-11.2, and the MHE cargo-handling task — each with an
        original START → FINISH schematic diagram drawn for this app. Variant forms print attributed per service
        and are never blended.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--dim)]">{SIGNALS_SCOPE_NOTE}</p>
      {onDrill ? (
        <button
          type="button"
          aria-label="Drill this in the Signals Trainer"
          onClick={onDrill}
          className="mt-4 block w-full rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)]"
        >
          Drill this — Signals Trainer
        </button>
      ) : null}

      <div className="mt-4 space-y-3">
        {SIGNAL_FRAMING.map((f) => (
          <div key={f.title} className={cardCls}>
            <h4 className="font-display text-base font-bold text-[var(--text)]">{f.title}</h4>
            <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{f.body}</p>
            {f.bullets && (
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                {f.bullets.map((b, i) => (
                  <li key={i} className="text-base leading-relaxed text-[var(--text)]">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="signals-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
          Search all signals
        </label>
        <input
          id="signals-search"
          aria-label="Search all signals"
          value={hubQuery}
          onChange={(e) => setHubQuery(e.target.value)}
          className={inputCls}
          placeholder="Try “disperse”, “throat”, “hover”, “boom up”…"
          autoComplete="off"
        />
      </div>
      {hubQuery.trim() && (
        <div className="mt-3 space-y-2">
          {hubHits.map((s) => (
            <SignalRow key={s.id} signal={s} onOpen={() => openSignal(s.id)} />
          ))}
          {hubHits.length === 0 && (
            <p className="text-base text-[var(--dim)]">
              No signal in the swept sources matches “{hubQuery.trim()}”. Figure-only families are named in the
              Not-Described Register below.
            </p>
          )}
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2" role="list" aria-label="Signal families">
        {SIGNAL_FAMILIES.map((f) => {
          const count = SIGNALS.filter((s) => s.family === f.key).length;
          return (
            <button
              key={f.key}
              type="button"
              role="listitem"
              aria-label={`Open ${f.name}, ${count} entries`}
              onClick={() => {
                setFamilyQuery("");
                setScreen({ kind: "family", family: f.key });
              }}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left"
            >
              <span className="font-display block text-base font-bold text-[var(--text)]">{f.name}</span>
              <span className="mt-0.5 block text-sm leading-snug text-[var(--dim)]">{count} entries</span>
            </button>
          );
        })}
        <button
          type="button"
          role="listitem"
          aria-label="Open the Flags and Panels annex"
          onClick={() => setScreen({ kind: "annex" })}
          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-left"
        >
          <span className="font-display block text-base font-bold text-[var(--text)]">Flags &amp; Panels — Annex</span>
          <span className="mt-0.5 block text-sm leading-snug text-[var(--dim)]">
            Flag color code, 6 flag signals + 5 range flags (name + status only), ground-to-air panels — no diagrams
          </span>
        </button>
        <button
          type="button"
          role="listitem"
          aria-label="Open the Not-Described Register"
          onClick={() => setScreen({ kind: "register" })}
          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-left"
        >
          <span className="font-display block text-base font-bold text-[var(--text)]">Not-Described Register</span>
          <span className="mt-0.5 block text-sm leading-snug text-[var(--dim)]">
            {NOT_DESCRIBED_REGISTER.length} figure-only / named-only families incl. the FM recovery-operations signals — listed, not taught
          </span>
        </button>
      </div>
    </div>
  );
}
