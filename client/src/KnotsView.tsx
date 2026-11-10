// Knots — the Field Tools knot library UI. Hub of square tiles by
// family (the app's layout-reorganization pattern), each opening to its
// entry list with its own search bar; each knot card carries the pack
// entry shape: name / aliases header, family tag, WHAT IT'S FOR, the
// original diagram panel strip (one panel per step + the dressed final
// panel), numbered steps, cautions, source line, and any ⚠ flag.
// Content: knots.ts (from the research pack, ~/workspace/military-app/
// knots/knots.md). The Not-Sourced Register ships visibly as its own
// tile — name + status lines only, no steps, no diagrams.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  KNOTS,
  KNOTS_SCOPE_NOTE,
  KNOTS_STRENGTH_NOTE,
  KNOT_FAMILIES,
  NOT_SOURCED_REGISTER,
  knotStepCount,
  knotSearchText,
  type KnotEntry,
  type KnotFamilyKey,
} from "./knots";
import { KnotPanel } from "./KnotDiagram";
import { CardTools } from "./binder";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

type Screen =
  | { kind: "hub" }
  | { kind: "family"; family: KnotFamilyKey }
  | { kind: "knot"; id: string }
  | { kind: "register" };

function familyName(key: KnotFamilyKey): string {
  return KNOT_FAMILIES.find((f) => f.key === key)?.name ?? key;
}

function clip(s: string, n = 150): string {
  return s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s;
}

/** The diagram strip for one method: one panel per step + dressed final. */
function PanelStrip({ knot, methodIndex }: { knot: KnotEntry; methodIndex: number }) {
  const method = knot.methods[methodIndex];
  if (!method) return null;
  const total = method.steps.length;
  return (
    <div>
      {knot.methods.length > 1 && (
        <p className="mb-1.5 text-sm font-bold text-[var(--text)]">{method.label} — diagrams</p>
      )}
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        role="group"
        aria-label={`Step diagrams for ${knot.name}${method.label ? `, ${method.label}` : ""}`}
      >
        {method.steps.map((_, i) => (
          <KnotPanel
            key={i}
            kind={knot.diagram}
            step={i + 1}
            totalSteps={total}
            webbing={knot.webbing}
            label={`Step ${i + 1}`}
          />
        ))}
        <KnotPanel
          kind={knot.diagram}
          step={total}
          totalSteps={total}
          fin
          webbing={knot.webbing}
          label={knot.tailLabel ? `Dressed — ${knot.tailLabel}` : "Dressed"}
        />
      </div>
    </div>
  );
}

function KnotCard({ knot, onBack }: { knot: KnotEntry; onBack: () => void }) {
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "start" });
  }, [knot.id]);
  return (
    <div ref={topRef}>
      <button
        type="button"
        onClick={onBack}
        aria-label={`Back to ${familyName(knot.family)}`}
        className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
      >
        ← {familyName(knot.family)}
      </button>
      <article className={cardCls} aria-label={knot.name}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl font-bold text-[var(--text)]">{knot.name}</h3>
          <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
            {familyName(knot.family).toUpperCase()}
          </span>
          {knot.kindNote && (
            <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
              {knot.kindNote}
            </span>
          )}
        </div>
        {knot.aliases.length > 0 && (
          <p className="mt-1 text-sm text-[var(--dim)]">Also: {knot.aliases.join(" · ")}</p>
        )}

        {knot.flag && (
          <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--text)]">
            ⚠ {knot.flag}
          </p>
        )}

        <h4 className="font-display mt-4 text-sm font-bold tracking-wide text-[var(--accent-word)]">
          WHAT IT'S FOR
        </h4>
        <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{knot.purpose}</p>

        <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">DIAGRAM</h4>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Original panels drawn for this app from the steps below — one panel per step, plus the dressed knot.
          The working end and the part it moves are in the accent color; the standing part is the light neutral
          tone; where a second rope joins (bends), it is drawn in a blue-gray tone.
          {knot.webbing ? " Webbing is drawn as a flat strap." : ""}
        </p>
        <div className="mt-2 space-y-3">
          {knot.methods.map((_, i) => (
            <PanelStrip key={i} knot={knot} methodIndex={i} />
          ))}
        </div>

        <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">HOW TO TIE IT</h4>
        {knot.methods.map((m, mi) => (
          <div key={mi} className="mt-2">
            {m.label && <p className="text-base font-bold text-[var(--text)]">{m.label}</p>}
            <ol className="mt-1 list-decimal space-y-1.5 pl-5">
              {m.steps.map((s, si) => (
                <li key={si} className="text-base leading-relaxed text-[var(--text)]">
                  {s}
                </li>
              ))}
            </ol>
          </div>
        ))}

        {knot.cautions.length > 0 && (
          <>
            <h4 className="font-display mt-5 text-sm font-bold tracking-wide text-[var(--accent-word)]">CAUTIONS</h4>
            <ul className="mt-1 list-disc space-y-1.5 pl-5">
              {knot.cautions.map((c, i) => (
                <li key={i} className="text-base leading-relaxed text-[var(--text)]">
                  {c}
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-4 text-sm text-[var(--dim)]">Source: {knot.source}</p>
        <CardTools
          cardRef={{
            section: "fieldtools",
            itemKey: `knot-${knot.id}`,
            title: knot.name,
            summary: clip(knot.purpose),
            source: knot.source,
          }}
        />
      </article>
    </div>
  );
}

function KnotRow({ knot, onOpen }: { knot: KnotEntry; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${knot.name}`}
      className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left"
    >
      <span className="flex flex-wrap items-center gap-2">
        <span className="font-display text-base font-bold text-[var(--text)]">{knot.name}</span>
        {knot.kindNote && (
          <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold text-[var(--amber)]">
            {knot.kindNote}
          </span>
        )}
        {knot.flag && (
          <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold text-[var(--amber)]">
            ⚠ figure-taught
          </span>
        )}
      </span>
      <span className="mt-0.5 block text-sm text-[var(--dim)]">
        {clip(knot.purpose, 110)} · {knotStepCount(knot)} steps
      </span>
    </button>
  );
}

export function KnotsTool({
  focusKnot,
  onDrill,
}: {
  focusKnot: { id: string; n: number } | null;
  /** Practice Trainers entry point — lands in the Knots Trainer. */
  onDrill?: () => void;
}) {
  const [screen, setScreen] = useState<Screen>({ kind: "hub" });
  const [hubQuery, setHubQuery] = useState("");
  const [familyQuery, setFamilyQuery] = useState("");
  // Reorganization (§B.1 tap audit): the hub no longer hides the
  // knots behind a family tile — families are filter chips over one
  // full list, so any knot is one tap from the hub.
  const [familyFilter, setFamilyFilter] = useState<KnotFamilyKey | "all">("all");

  useEffect(() => {
    if (!focusKnot) return;
    if (focusKnot.id === "register") {
      setScreen({ kind: "register" });
    } else if (KNOTS.some((k) => k.id === focusKnot.id)) {
      setScreen({ kind: "knot", id: focusKnot.id });
    }
  }, [focusKnot]);

  const hubHits = useMemo(() => {
    const q = hubQuery.trim().toLowerCase();
    if (!q) return [];
    return KNOTS.filter((k) => knotSearchText(k).includes(q));
  }, [hubQuery]);

  const openKnot = (id: string) => setScreen({ kind: "knot", id });

  if (screen.kind === "knot") {
    const knot = KNOTS.find((k) => k.id === screen.id);
    if (knot) {
      return <KnotCard knot={knot} onBack={() => setScreen({ kind: "hub" })} />;
    }
  }

  if (screen.kind === "register") {
    return (
      <div>
        <button
          type="button"
          onClick={() => setScreen({ kind: "hub" })}
          aria-label="Back to Knots families"
          className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
        >
          ← Knots
        </button>
        <div className={cardCls}>
          <h3 className="font-display text-xl font-bold text-[var(--text)]">Not-Sourced Register</h3>
          <p className="mt-1 text-base leading-relaxed text-[var(--text)]">
            Famous knots that are NOT taught in the military sources swept for this library. They are listed by
            name so the library's boundary is visible and honest — name and status only: no steps, no diagrams.
            If a future sweep of an official source teaches one, it moves into the library with that citation.
          </p>
          <ul className="mt-4 space-y-3">
            {NOT_SOURCED_REGISTER.map((r) => (
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
    const fam = KNOT_FAMILIES.find((f) => f.key === screen.family);
    const entries = KNOTS.filter((k) => k.family === screen.family);
    const q = familyQuery.trim().toLowerCase();
    const shown = q ? entries.filter((k) => knotSearchText(k).includes(q)) : entries;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setScreen({ kind: "hub" });
            setFamilyQuery("");
          }}
          aria-label="Back to Knots families"
          className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
        >
          ← Knots
        </button>
        <h3 className="font-display text-xl font-bold text-[var(--text)]">{fam?.name}</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">{fam?.blurb}</p>
        <div className="mt-3">
          <label htmlFor="knots-family-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
            Search {fam?.name}
          </label>
          <input
            id="knots-family-search"
            aria-label={`Search ${fam?.name ?? "this family"}`}
            value={familyQuery}
            onChange={(e) => setFamilyQuery(e.target.value)}
            className={inputCls}
            placeholder="Knot name or alias…"
            autoComplete="off"
          />
        </div>
        <div className="mt-3 space-y-2">
          {shown.map((k) => (
            <KnotRow key={k.id} knot={k} onOpen={() => openKnot(k.id)} />
          ))}
          {shown.length === 0 && (
            <p className="text-base text-[var(--dim)]">
              No {fam?.name} entries match “{familyQuery.trim()}”. Aliases are searched too — e.g. “Klemheist”
              finds the Kleimhiest.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Hub
  const totalKnots = KNOTS.filter((k) => k.id !== "whipping").length;
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Knots</h3>
      <p className="mt-1 text-base leading-relaxed text-[var(--text)]">
        {totalKnots} knots plus the whipping technique card — every knot named or taught in the official U.S.
        military sources swept for this library, each with an original step-by-step diagram drawn for this app.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--dim)]">{KNOTS_SCOPE_NOTE}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--dim)]">{KNOTS_STRENGTH_NOTE}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--dim)]">
        Words used in every set of steps, and only these (TC 3-21.76 §9-31; TC 3-97.61 Ch. 4):{" "}
        <strong className="text-[var(--text)]">working end</strong> — the loose end you tie with;{" "}
        <strong className="text-[var(--text)]">standing part</strong> — the part that does not move;{" "}
        <strong className="text-[var(--text)]">bight</strong> — a U-shaped fold, ends side by side, not crossed;{" "}
        <strong className="text-[var(--text)]">loop</strong> — a bight whose ends cross;{" "}
        <strong className="text-[var(--text)]">round turn</strong> — the rope wrapped 1½ times (540°) around an
        object so both parts touch; <strong className="text-[var(--text)]">dress</strong> — neaten the knot, parts
        parallel, no twists; <strong className="text-[var(--text)]">set</strong> — the final pull that locks it;{" "}
        <strong className="text-[var(--text)]">pigtail / tail</strong> — rope left beyond the knot. Tail standards
        print per source and are never merged: mountaineering minimum 4 inches; MARSOC greater than 6 inches.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--dim)]">
        Out of scope by design: the Ranger Handbook Ch. 5 demolition joining knots (including the British junction
        knot) are excluded under this app's standing content boundary — named here, not taught. Splices and rope
        coils are ropework, not knots, and are not covered.
      </p>
      {onDrill ? (
        <button
          type="button"
          aria-label="Drill this in the Knots Trainer"
          onClick={onDrill}
          className="mt-4 block w-full rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)]"
        >
          Drill this — Knots Trainer
        </button>
      ) : null}

      <div className="mt-4">
        <label htmlFor="knots-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
          Search all knots
        </label>
        <input
          id="knots-search"
          aria-label="Search all knots"
          value={hubQuery}
          onChange={(e) => setHubQuery(e.target.value)}
          className={inputCls}
          placeholder="Try “bowline”, “prusik”, “Klemheist”…"
          autoComplete="off"
        />
      </div>
      {hubQuery.trim() && (
        <div className="mt-3 space-y-2">
          {hubHits.map((k) => (
            <KnotRow key={k.id} knot={k} onOpen={() => openKnot(k.id)} />
          ))}
          {hubHits.length === 0 && (
            <p className="text-base text-[var(--dim)]">
              No knot in the swept military sources matches “{hubQuery.trim()}”. If it's a famous knot no swept
              source teaches, it will be named in the Not-Sourced Register below.
            </p>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter knots by family">
        <button
          type="button"
          aria-label="Show all knot families"
          aria-pressed={familyFilter === "all"}
          onClick={() => setFamilyFilter("all")}
          className={`rounded-full border px-3 py-2 text-sm font-semibold ${familyFilter === "all" ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]" : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
        >
          All families
        </button>
        {KNOT_FAMILIES.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-label={`Show only ${f.name}`}
            aria-pressed={familyFilter === f.key}
            onClick={() => setFamilyFilter(f.key)}
            className={`rounded-full border px-3 py-2 text-sm font-semibold ${familyFilter === f.key ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]" : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
          >
            {f.name}
          </button>
        ))}
        <button
          type="button"
          aria-label="Open the Not-Sourced Register"
          onClick={() => setScreen({ kind: "register" })}
          className="rounded-full border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-semibold text-[var(--text)]"
        >
          Not-Sourced Register
        </button>
      </div>

      {!hubQuery.trim() ? (
        <div className="mt-4 space-y-5">
          {KNOT_FAMILIES.filter((f) => familyFilter === "all" || f.key === familyFilter).map((f) => (
            <section key={f.key} aria-label={f.name}>
              <h4 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">{f.name.toUpperCase()}</h4>
              <div className="space-y-2">
                {KNOTS.filter((k) => k.family === f.key).map((k) => (
                  <KnotRow key={k.id} knot={k} onOpen={() => openKnot(k.id)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}
