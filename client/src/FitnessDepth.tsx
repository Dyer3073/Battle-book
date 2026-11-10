// Fitness depth views — Exercise Library, Warm-Up & Cool-Down, and
// Stretching. Content lives in exercises.ts / warmup.ts (transcribed
// from the Fitness Depth research packs); diagrams are the original
// schematic panels in ExerciseDiagram.tsx. House hub pattern: a view
// opens on its groups; a group opens its cards with its own search
// pinned at top; a card opens in full with its diagram strip and the
// standard CardTools footer (Binder-savable).

import { useEffect, useMemo, useState } from "react";
import { CardTools } from "./binder";
import { DiagramStrip } from "./ExerciseDiagram";
import { HubBackButton, HubSearch } from "./HubTiles";
import {
  EXERCISE_CATEGORIES,
  EXERCISE_SAFETY,
  EXERCISES,
  exerciseById,
  type Exercise,
} from "./exercises";
import {
  CHEST_DYNAMIC_GAP,
  DAILY16_COOLDOWN_RULE,
  NAVY_GUIDANCE,
  NAVY_TOP12_IDS,
  RAMP_FRAMEWORK,
  RECOVERY_DRILL_CONFLICT,
  SEQUENCES,
  STRETCH_AREAS,
  STRETCHES,
  STRETCHING_PRINCIPLE,
  WARMUP_PRINCIPLES,
  drillEntryById,
  stretchById,
  type DrillEntry,
  type Stretch,
} from "./warmup";

export type FitKind = "exercise" | "warmup" | "stretch";

const tagCls = (tag: "DYNAMIC" | "STATIC") =>
  tag === "DYNAMIC"
    ? "bg-[var(--accent)] text-[var(--accent-text)]"
    : "bg-[var(--surface2)] text-[var(--text)] border border-[var(--border)]";

function Tag({ tag }: { tag: "DYNAMIC" | "STATIC" }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide ${tagCls(tag)}`}>
      {tag === "DYNAMIC" ? "DYNAMIC — for before" : "STATIC — for after"}
    </span>
  );
}

function NoteBox({ text }: { text: string }) {
  return <p className="mt-3 rounded-[var(--radius)] bg-[var(--amber-bg)] p-3 text-sm font-semibold text-[var(--amber)]">{text}</p>;
}

function useFocus(focusId: string | null | undefined, focusNonce: number, open: (id: string) => void) {
  useEffect(() => {
    if (focusId && focusNonce > 0) open(focusId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusNonce]);
}

/* ------------------------- Exercise Library ------------------------ */

function ExerciseCard({ ex }: { ex: Exercise }) {
  const cat = EXERCISE_CATEGORIES.find((c) => c.key === ex.category)?.label ?? ex.category;
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">
        #{ex.n} · {cat.toUpperCase()}
      </p>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{ex.name}</h4>
      <p className="mt-0.5 text-sm text-[var(--dim)]">Also called: {ex.aliases}</p>
      <p className="mt-1 text-sm text-[var(--text)]">
        <span className="font-bold">Equipment:</span> {ex.equipment}
      </p>
      <DiagramStrip panels={ex.panels} />
      <p className="mt-2 text-sm text-[var(--dim)]">
        Original schematic panels drawn from this entry's sourced start and finish/bottom positions — not copied from any manual figure or photo.
      </p>
      <p className="mt-3 text-base text-[var(--text)]">
        <span className="font-bold">What it trains:</span> {ex.trains}
      </p>
      <h5 className="font-display mt-3 text-base font-bold text-[var(--text)]">How to do it</h5>
      <ol className="mt-1 list-decimal space-y-1.5 pl-5 text-base text-[var(--text)]">
        {ex.steps.map((s) => (
          <li key={s.slice(0, 32)}>{s}</li>
        ))}
      </ol>
      {ex.errors ? (
        <p className="mt-3 text-base text-[var(--text)]">
          <span className="font-bold">Common errors + corrections:</span> {ex.errors}
        </p>
      ) : null}
      {ex.scaling ? (
        <p className="mt-3 text-base text-[var(--text)]">
          <span className="font-bold">Scaling:</span> {ex.scaling}
        </p>
      ) : null}
      {ex.branchNotes ? (
        <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-sm font-bold text-[var(--text)]">Per-branch test notes — know which one you are training</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
            {ex.branchNotes.map((b) => (
              <li key={b.slice(0, 32)}>{b}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {ex.scopeNote ? <NoteBox text={ex.scopeNote} /> : null}
      {ex.conflict ? <NoteBox text={ex.conflict} /> : null}
      <CardTools
        cardRef={{
          section: "fitnesslib",
          itemKey: ex.id,
          title: ex.name,
          summary: `${cat} · ${ex.trains}`,
          source: ex.source,
        }}
      />
    </article>
  );
}

export function ExerciseLibraryView({
  focusId,
  focusNonce,
  onOpenExercise,
}: {
  focusId?: string | null;
  focusNonce?: number;
  /** Lets other Fitness surfaces (the plans) open a card here. */
  onOpenExercise?: (id: string) => void;
}) {
  const [cat, setCat] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  void onOpenExercise;
  useFocus(focusId, focusNonce ?? 0, (id) => {
    const ex = exerciseById(id);
    if (ex) {
      setCat(ex.category);
      setOpenId(ex.id);
    }
  });
  const openEx = openId ? exerciseById(openId) : undefined;
  if (openEx) {
    return (
      <div>
        <HubBackButton ariaLabel="Back to Exercise Library" text="Back to Exercise Library" onBack={() => setOpenId(null)} />
        <ExerciseCard ex={openEx} />
      </div>
    );
  }
  if (cat) {
    const items = EXERCISES.filter((e) => e.category === cat).filter((e) => {
      const needle = q.trim().toLowerCase();
      if (!needle) return true;
      return `${e.name} ${e.aliases} ${e.trains} ${e.equipment}`.toLowerCase().includes(needle);
    });
    const label = EXERCISE_CATEGORIES.find((c) => c.key === cat)?.label ?? cat;
    return (
      <div>
        <HubBackButton ariaLabel="Back to Exercise Library categories" text="Back to Exercise Library" onBack={() => setCat(null)} />
        <h4 className="font-display mt-1 text-lg font-bold text-[var(--text)]">{label}</h4>
        <div className="mt-3">
          <HubSearch id="exlib-search" label={`Search ${label}`} ariaLabel={`Search ${label} exercises`} value={q} onChange={setQ} placeholder="Exercise name, alias, equipment…" />
        </div>
        <div className="flex flex-col gap-2">
          {items.map((e) => (
            <button key={e.id} type="button" aria-label={`Open ${e.name}`} onClick={() => setOpenId(e.id)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="font-display block text-base font-bold text-[var(--text)]">
                {e.n}. {e.name}
              </span>
              <span className="mt-0.5 block text-sm text-[var(--dim)]">{e.trains}</span>
            </button>
          ))}
          {items.length === 0 ? <p className="text-sm text-[var(--dim)]">No exercises in this category match that search.</p> : null}
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="text-base text-[var(--text)]">
        All 51 exercises the app's plans use, each with step-by-step form, what it trains, the common errors and
        corrections the sources give, scaling where the sources give it, and an original two-panel diagram of the
        sourced start and finish positions. Where official sources disagree, the disagreement prints on the card,
        attributed — never blended.
      </p>
      <div className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="font-display text-base font-bold text-[var(--text)]">Safety — applies to every entry</p>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
          {EXERCISE_SAFETY.map((s) => (
            <li key={s.slice(0, 32)}>{s}</li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-sm text-[var(--dim)]">
        Not in the library, on purpose: the dead bug, a named anti-rotation (Pallof) press, a barbell bench press,
        named arms/delts/calves accessories, the Bulgarian split squat, swim technique / bike setup, and the
        kettlebell swing and burpee were in the research pack's flagged register — named in plans only generically,
        or not at all — and were not sourced to this library's standard. The plans keep their generic labels; the
        sourced rotation-control work is the Bent-Leg Body Twist (#31) and the Side Plank (#25).
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" role="group" aria-label="Exercise Library categories">
        {EXERCISE_CATEGORIES.map((c) => (
          <button key={c.key} type="button" aria-label={`Open ${c.label}`} onClick={() => setCat(c.key)} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
            <span className="font-display text-lg leading-tight font-bold text-[var(--text)]">{c.label.toUpperCase()}</span>
            <span className="text-sm text-[var(--dim)]">{EXERCISES.filter((e) => e.category === c.key).length} exercises</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------- Warm-Up & Cool-Down --------------------- */

function DrillCard({ entry, seqTitle }: { entry: DrillEntry; seqTitle: string }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">
        {entry.code} · {seqTitle.toUpperCase()}
      </p>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{entry.name}</h4>
      <DiagramStrip panels={entry.panels} />
      <p className="mt-3 text-base text-[var(--text)]">
        <span className="font-bold">How to do it:</span> {entry.howto}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">
        <span className="font-bold">Purpose (as sourced):</span> {entry.purpose}
      </p>
      {entry.note ? <NoteBox text={entry.note} /> : null}
      <CardTools
        cardRef={{
          section: "warmup",
          itemKey: entry.id,
          title: `${entry.code} ${entry.name}`,
          summary: `${seqTitle} · ${entry.purpose}`,
          source: entry.source,
        }}
      />
    </article>
  );
}

export function StretchCard({ s }: { s: Stretch }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-bold tracking-wide text-[var(--dim)]">{s.code}</p>
        <Tag tag={s.tag} />
        {s.navyTop12 ? (
          <span className="inline-block rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs font-bold text-[var(--text)]">
            NAVY TOP 12 · #{s.navyTop12}
          </span>
        ) : null}
      </div>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{s.name}</h4>
      <DiagramStrip panels={s.panels} />
      <p className="mt-3 text-base text-[var(--text)]">
        <span className="font-bold">How to do it:</span> {s.howto}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">
        <span className="font-bold">What it stretches:</span> {s.stretches}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">
        <span className="font-bold">Why it's beneficial:</span> {s.why}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">
        <span className="font-bold">{s.tag === "DYNAMIC" ? "Dose:" : "Hold:"}</span> {s.hold}
      </p>
      {s.note ? <NoteBox text={s.note} /> : null}
      <CardTools
        cardRef={{
          section: "stretching",
          itemKey: s.id,
          title: s.name,
          summary: `${s.tag === "DYNAMIC" ? "Dynamic (before)" : "Static (after)"} · ${s.stretches}`,
          source: s.source,
        }}
      />
    </article>
  );
}

type WarmTarget = { type: "drill"; id: string } | { type: "stretch"; id: string } | null;

export function WarmupView({ focusId, focusNonce }: { focusId?: string | null; focusNonce?: number }) {
  const [seqKey, setSeqKey] = useState<string | null>(null);
  const [open, setOpen] = useState<WarmTarget>(null);
  const [q, setQ] = useState("");
  useFocus(focusId, focusNonce ?? 0, (id) => {
    const hit = drillEntryById(id);
    if (hit) {
      setSeqKey(hit.sequence.key);
      setOpen({ type: "drill", id });
      return;
    }
    if (stretchById(id)) {
      setSeqKey("top12");
      setOpen({ type: "stretch", id });
    }
  });

  if (open?.type === "drill") {
    const hit = drillEntryById(open.id);
    if (hit) {
      return (
        <div>
          <HubBackButton ariaLabel={`Back to ${hit.sequence.title}`} text={`Back to ${hit.sequence.title}`} onBack={() => setOpen(null)} />
          <DrillCard entry={hit.entry} seqTitle={hit.sequence.title} />
        </div>
      );
    }
  }
  if (open?.type === "stretch") {
    const s = stretchById(open.id);
    if (s) {
      return (
        <div>
          <HubBackButton ariaLabel="Back to Navy Top 12" text="Back to Navy Top 12" onBack={() => setOpen(null)} />
          <StretchCard s={s} />
        </div>
      );
    }
  }

  if (seqKey === "top12") {
    const items = NAVY_TOP12_IDS.map((id) => stretchById(id)).filter((s): s is Stretch => !!s);
    return (
      <div>
        <HubBackButton ariaLabel="Back to Warm-Up and Cool-Down" text="Back to Warm-Up & Cool-Down" onBack={() => setSeqKey(null)} />
        <h4 className="font-display mt-1 text-lg font-bold text-[var(--text)]">Navy Top 12 Stretches — the Navy cool-down set</h4>
        <p className="mt-2 text-base text-[var(--text)]">
          All twelve, in official Guide 13 order. These are stretches first and a cool-down sequence second — the same
          cards live in the Stretching section, where each carries its full why and hold. Guide 13's PRT sequence:
          walk 5–10 minutes as the cool-down after the run, then take all members through the flexibility exercises.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((s, i) => (
            <button key={s.id} type="button" aria-label={`Open ${s.name}`} onClick={() => setOpen({ type: "stretch", id: s.id })} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="font-display block text-base font-bold text-[var(--text)]">
                {i + 1}. {s.name}
              </span>
              <span className="mt-0.5 block text-sm text-[var(--dim)]">{s.stretches}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const seq = SEQUENCES.find((s) => s.key === seqKey) ?? null;
  if (seq) {
    const items = seq.entries.filter((e) => {
      const needle = q.trim().toLowerCase();
      if (!needle) return true;
      return `${e.code} ${e.name} ${e.howto} ${e.purpose}`.toLowerCase().includes(needle);
    });
    return (
      <div>
        <HubBackButton ariaLabel="Back to Warm-Up and Cool-Down" text="Back to Warm-Up & Cool-Down" onBack={() => setSeqKey(null)} />
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display mt-1 text-lg font-bold text-[var(--text)]">{seq.title}</h4>
          <Tag tag={seq.tag} />
        </div>
        <p className="mt-1 text-sm font-semibold text-[var(--text)]">{seq.tagLine}</p>
        <p className="mt-2 text-base text-[var(--text)]">{seq.intro}</p>
        <p className="mt-2 text-sm text-[var(--dim)]">{seq.dose}</p>
        <div className="mt-3">
          <HubSearch id={`wu-search-${seq.key}`} label={`Search ${seq.title}`} ariaLabel={`Search ${seq.title}`} value={q} onChange={setQ} placeholder="Movement name or purpose…" />
        </div>
        <div className="flex flex-col gap-2">
          {items.map((e) => (
            <button key={e.id} type="button" aria-label={`Open ${e.name}`} onClick={() => setOpen({ type: "drill", id: e.id })} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="font-display block text-base font-bold text-[var(--text)]">
                {e.code} · {e.name}
              </span>
              <span className="mt-0.5 block text-sm text-[var(--dim)]">{e.purpose}</span>
            </button>
          ))}
          {items.length === 0 ? <p className="text-sm text-[var(--dim)]">No movements in this sequence match that search.</p> : null}
        </div>
        {seq.key === "rd" ? <NoteBox text={RECOVERY_DRILL_CONFLICT} /> : null}
        {seq.key === "d16w" ? (
          <div className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="font-display text-base font-bold text-[var(--text)]">The Daily 16 cool-down — the same set, by the program's own instruction</p>
            <p className="mt-1 text-base text-[var(--text)]">{DAILY16_COOLDOWN_RULE}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <p className="text-base text-[var(--text)]">
        The services' own official sequences, as sequences, in official order — plus the principles behind them, the
        Marine RAMP framework, and the Navy's guidance. Every movement is a card with its how-to, its sourced
        purpose, and an original diagram drawn from its sourced position.
      </p>
      {WARMUP_PRINCIPLES.map((g) => (
        <div key={g.heading} className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="font-display text-base font-bold text-[var(--text)]">{g.heading}</p>
          <div className="mt-1 space-y-2">
            {g.lines.map((l) => (
              <p key={l.slice(0, 40)} className="text-sm text-[var(--text)]">{l}</p>
            ))}
          </div>
        </div>
      ))}
      <h4 className="font-display mt-5 text-lg font-bold text-[var(--text)]">The sequences</h4>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3" role="group" aria-label="Warm-up and cool-down sequences">
        {SEQUENCES.map((s) => (
          <button key={s.key} type="button" aria-label={`Open ${s.title}`} onClick={() => setSeqKey(s.key)} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
            <span className="font-display text-base leading-tight font-bold text-[var(--text)]">{s.title.toUpperCase()}</span>
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide ${tagCls(s.tag)}`}>{s.tag}</span>
            <span className="text-sm text-[var(--dim)]">{s.entries.length} movements, in order</span>
          </button>
        ))}
        <button type="button" aria-label="Open Navy Top 12 Stretches" onClick={() => setSeqKey("top12")} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
          <span className="font-display text-base leading-tight font-bold text-[var(--text)]">NAVY TOP 12 STRETCHES</span>
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide ${tagCls("STATIC")}`}>STATIC</span>
          <span className="text-sm text-[var(--dim)]">12 stretches, Guide 13 order — the Navy cool-down set</span>
        </button>
      </div>

      <div className="mt-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="font-display text-base font-bold text-[var(--text)]">{RAMP_FRAMEWORK.title}</p>
        <p className="mt-1 text-base text-[var(--text)]">{RAMP_FRAMEWORK.intro}</p>
        <ul className="mt-2 space-y-1.5">
          {RAMP_FRAMEWORK.ramp.map((r) => (
            <li key={r.k} className="text-base text-[var(--text)]">
              <span className="font-bold">{r.k}:</span> {r.v}
            </li>
          ))}
        </ul>
        <p className="font-display mt-3 text-sm font-bold text-[var(--text)]">The four phases (Table 5-1)</p>
        <ul className="mt-1 space-y-1.5">
          {RAMP_FRAMEWORK.phases.map((r) => (
            <li key={r.k} className="text-base text-[var(--text)]">
              <span className="font-bold">{r.k}:</span> {r.v}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-base text-[var(--text)]">{RAMP_FRAMEWORK.cooldown}</p>
        <NoteBox text={RAMP_FRAMEWORK.note} />
        <p className="mt-2 text-xs text-[var(--dim)]">Source: {RAMP_FRAMEWORK.source}</p>
      </div>

      <div className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="font-display text-base font-bold text-[var(--text)]">{NAVY_GUIDANCE.title}</p>
        <div className="mt-1 space-y-2">
          {NAVY_GUIDANCE.lines.map((l) => (
            <p key={l.slice(0, 40)} className="text-base text-[var(--text)]">{l}</p>
          ))}
        </div>
        <NoteBox text={NAVY_GUIDANCE.flag} />
        <NoteBox text={NAVY_GUIDANCE.conflict} />
        <p className="mt-2 text-xs text-[var(--dim)]">Source: {NAVY_GUIDANCE.source}</p>
      </div>

      <p className="mt-4 text-sm text-[var(--dim)]">
        No Air Force warm-up or stretching sequence is presented: none was verified against a primary Air Force
        publication in the research (flag F-6) — an absence of research, not a claim that none exists.
      </p>
    </div>
  );
}

/* ----------------------------- Stretching -------------------------- */

export function StretchingView({ focusId, focusNonce }: { focusId?: string | null; focusNonce?: number }) {
  const [area, setArea] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  useFocus(focusId, focusNonce ?? 0, (id) => {
    const s = stretchById(id);
    if (s) {
      setArea(s.area);
      setOpenId(s.id);
    }
  });
  const openS = openId ? stretchById(openId) : undefined;
  if (openS) {
    return (
      <div>
        <HubBackButton ariaLabel="Back to Stretching" text="Back to Stretching" onBack={() => setOpenId(null)} />
        <StretchCard s={openS} />
      </div>
    );
  }
  if (area) {
    const items = STRETCHES.filter((s) => s.area === area).filter((s) => {
      const needle = q.trim().toLowerCase();
      if (!needle) return true;
      return `${s.code} ${s.name} ${s.stretches} ${s.why} ${s.tag}`.toLowerCase().includes(needle);
    });
    const label = STRETCH_AREAS.find((a) => a.key === area)?.label ?? area;
    return (
      <div>
        <HubBackButton ariaLabel="Back to Stretching areas" text="Back to Stretching" onBack={() => setArea(null)} />
        <h4 className="font-display mt-1 text-lg font-bold text-[var(--text)]">{label}</h4>
        <div className="mt-3">
          <HubSearch id="stretch-search" label={`Search ${label}`} ariaLabel={`Search ${label} stretches`} value={q} onChange={setQ} placeholder="Stretch name, what it stretches, dynamic/static…" />
        </div>
        {area === "chest" ? <NoteBox text={CHEST_DYNAMIC_GAP} /> : null}
        <div className="mt-3 flex flex-col gap-2">
          {items.map((s) => (
            <button key={s.id} type="button" aria-label={`Open ${s.name}`} onClick={() => setOpenId(s.id)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-display text-base font-bold text-[var(--text)]">{s.name}</span>
                <Tag tag={s.tag} />
              </span>
              <span className="mt-0.5 block text-sm text-[var(--dim)]">{s.stretches}</span>
            </button>
          ))}
          {items.length === 0 ? <p className="text-sm text-[var(--dim)]">No stretches in this area match that search.</p> : null}
        </div>
      </div>
    );
  }
  const dynamicCount = STRETCHES.filter((s) => s.tag === "DYNAMIC").length;
  return (
    <div>
      <p className="text-base text-[var(--text)]">
        All 34 stretches from the services' official sets, by body area — each with its how-to, what it stretches,
        why it's beneficial in its source's words, its own sourced hold, an original diagram of the held position,
        and its before/after tag: {dynamicCount} DYNAMIC (for before a workout), {STRETCHES.length - dynamicCount}{" "}
        STATIC (for after).
      </p>
      {STRETCHING_PRINCIPLE.map((g) => (
        <div key={g.heading} className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="font-display text-base font-bold text-[var(--text)]">{g.heading}</p>
          <div className="mt-1 space-y-2">
            {g.lines.map((l) => (
              <p key={l.slice(0, 40)} className="text-sm text-[var(--text)]">{l}</p>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" role="group" aria-label="Stretching body areas">
        {STRETCH_AREAS.map((a) => {
          const items = STRETCHES.filter((s) => s.area === a.key);
          const dyn = items.filter((s) => s.tag === "DYNAMIC").length;
          return (
            <button key={a.key} type="button" aria-label={`Open ${a.label}`} onClick={() => setArea(a.key)} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
              <span className="font-display text-lg leading-tight font-bold text-[var(--text)]">{a.label.toUpperCase()}</span>
              <span className="text-sm text-[var(--dim)]">
                {items.length} stretches{dyn ? ` · ${dyn} dynamic` : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Flat index for global search. */
export const FITNESS_DEPTH_SEARCH: { kind: FitKind; id: string; title: string; summary: string; keywords: string }[] = [
  ...EXERCISES.map((e) => ({
    kind: "exercise" as FitKind,
    id: e.id,
    title: e.name,
    summary: `${EXERCISE_CATEGORIES.find((c) => c.key === e.category)?.label ?? e.category} · ${e.trains}`,
    keywords: e.aliases.toLowerCase(),
  })),
  ...SEQUENCES.flatMap((seq) =>
    seq.entries.map((e) => ({
      kind: "warmup" as FitKind,
      id: e.id,
      title: `${e.name} (${seq.title.split("—")[0]?.trim() ?? seq.title})`,
      summary: `${seq.title} · ${e.purpose}`,
      keywords: `${e.code.toLowerCase()} ${seq.title.toLowerCase()}`,
    })),
  ),
  ...STRETCHES.map((s) => ({
    kind: "stretch" as FitKind,
    id: s.id,
    title: s.name,
    summary: `${s.tag === "DYNAMIC" ? "Dynamic — for before" : "Static — for after"} · ${s.stretches}`,
    keywords: `${s.code.toLowerCase()} ${s.tag.toLowerCase()} ${s.navyTop12 ? "navy top 12" : ""}`,
  })),
];

export function useMemoFitnessSearch() {
  return useMemo(() => FITNESS_DEPTH_SEARCH, []);
}
