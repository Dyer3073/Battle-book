// Practice Trainers — drill modes over content the app already holds.
// Three trainers, each drawn from its source section's own dataset via
// trainers.ts (never a re-typed copy):
//   • Rank Insignia — from the Rank Charts data (148 rows, drawn
//     insignia from insignia.ts). Air Force warrant rows carry NO
//     drawing (designs published only as official graphics in
//     AFGM2026-36-2033 Fig. 11.1): they drill by their published text
//     description only — this view never renders an invented drawing
//     for them (InsigniaArt itself returns null for the "note" art,
//     and the prompt below renders the description panel instead).
//   • Knots — from the Knots data (59 knots + the whipping card).
//   • Signals — from the Signals data (185 entries).
//   • General Orders — from generalorders.ts (25 orders: Army 3 +
//     Marine Corps 11 + Navy 11), the same verbatim arrays the
//     General Orders reference section renders. Added Nov 9, 2026
//     with the Red-Team Gap Fills build (G6). Service forms
//     drill as published: the service filter is exact, so a USMC drill
//     presents only MCWP 3-11.2 USMC forms, never a blended form, and
//     a conflict-flagged signal shows its flag in the answer reveal.
//
// Modes: flashcards (prompt → flip → self-grade Got it / Missed it)
// and quiz (multiple choice). A missed item re-enters the same
// session's queue a few cards later (simple spaced repetition, capped
// per item so a session always ends). Session score = distinct items
// correct on the first attempt / distinct items in the session.
//
// Persistence: per-trainer, per-mode stats are owner-only server-side
// (trainer_states; getTrainerStats / recordTrainerSession — the
// calculator_states pattern: the server resolves the signed-in
// profile, the client never sends a profile id, and the stats query
// key is scoped to the profile so a profile switch can never render
// another profile's stats). Track posture follows the source
// sections: member track only (see DATA-PLAN.md).

import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type ApiResponse } from "./api";
import { OfflineQueuedError } from "./offlineCore";
import { HubBackButton } from "./HubTiles";
import { SectionHead } from "./NewSections";
import { InsigniaArt } from "./InsigniaArt";
import { KnotPanel } from "./KnotDiagram";
import { SignalDiagram } from "./SignalDiagram";
import type { KnotEntry } from "./knots";
import type { SignalEntry } from "./signals";
import {
  MAX_ATTEMPTS_PER_ITEM,
  SIGNAL_FAMILIES,
  buildOptions,
  buildQueue,
  filterKnotPool,
  filterRankPool,
  filterSignalPool,
  filterGoPool,
  goDistractors,
  goLabel,
  GO_SERVICES,
  knotDistractors,
  knotFamilyLabel,
  mulberry32,
  rankDistractors,
  rankLabel,
  rankPool,
  reinsertMissed,
  sessionScore,
  signalDistractors,
  signalFamilyLabel,
  signalServiceLabel,
  SIGNAL_SERVICES,
  type GoItem,
  type GeneralOrderService,
  type KnotItem,
  type RankItem,
  type SessionItem,
  type SignalItem,
  type TrainerId,
  type TrainerMode,
} from "./trainers";
import { KNOT_FAMILIES, type KnotFamilyKey } from "./knots";
import type { SignalFamilyKey, SignalService } from "./signals";
import { GO_CARD_TITLES } from "./generalorders";

type TrainerStat = ApiResponse<typeof api, "getTrainerStats">["stats"][number];

const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";
const btnPrimary =
  "min-h-11 rounded-[var(--radius)] bg-[var(--accent)] px-4 py-2.5 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost =
  "min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const selectCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";

const TRAINER_META: { id: TrainerId; name: string; blurb: string; source: string }[] = [
  {
    id: "rank",
    name: "Rank Insignia Trainer",
    blurb: "Name the rank and branch from the insignia — all six branches, enlisted, warrant, and officer.",
    source: "Rank Charts",
  },
  {
    id: "knots",
    name: "Knots Trainer",
    blurb: "Name the knot from its dressed diagram, and pick the right diagram for a name.",
    source: "Field Tools → Knots",
  },
  {
    id: "generalorders",
    name: "General Orders Trainer",
    blurb: "Recite the General Orders verbatim — the Army's 3, the Marine Corps' 11, and the Navy's 11, each exactly as its service publishes it.",
    source: "General Orders",
  },
  {
    id: "signals",
    name: "Signals Trainer",
    blurb: "Name the hand-and-arm signal from its START → FINISH poses — Army, USMC, FM 21-60, and MHE forms as published.",
    source: "Field Tools → Hand & Arm Signals",
  },
];

function statFor(stats: TrainerStat[], trainer: TrainerId, mode: TrainerMode): TrainerStat | undefined {
  return stats.find((s) => s.trainerId === trainer && s.mode === mode);
}

function StatLine({ stat }: { stat?: TrainerStat }) {
  if (!stat || stat.sessions === 0) {
    return <p className="text-sm text-[var(--dim)]">No sessions yet — your streaks and bests will live here.</p>;
  }
  const best =
    stat.bestTotal > 0 ? `${stat.bestScore}/${stat.bestTotal} (${Math.round((stat.bestScore / stat.bestTotal) * 100)}%)` : "—";
  return (
    <p className="text-sm text-[var(--dim)]">
      Current streak <strong className="text-[var(--text)]">{stat.currentStreak}</strong> · Best streak{" "}
      <strong className="text-[var(--text)]">{stat.bestStreak}</strong> · Personal best{" "}
      <strong className="text-[var(--text)]">{best}</strong> · {stat.sessions} session{stat.sessions === 1 ? "" : "s"}
    </p>
  );
}

/* ------------------------------ Prompts -------------------------------- */

function RankPrompt({ item }: { item: RankItem }) {
  if (item.hasDrawing && item.insignia) {
    return (
      <div className="flex justify-center rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-6 [&>svg]:h-auto [&>svg]:w-32">
        <InsigniaArt art={item.insignia.art} />
      </div>
    );
  }
  // Text-only drill (Air Force warrants + no-insignia rows): the
  // published description IS the prompt. No drawing is rendered.
  return (
    <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-6 text-center">
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">DESCRIBED, NOT DRAWN</p>
      <p className="mt-2 text-lg font-semibold text-[var(--text)]">{item.insignia?.display ?? item.row.note ?? ""}</p>
      {item.insignia?.flag ? <p className="mt-2 text-sm text-[var(--dim)]">{item.insignia.flag}</p> : null}
    </div>
  );
}

function KnotPrompt({ entry, label = "Dressed knot diagram" }: { entry: KnotEntry; label?: string }) {
  // The label is the panel's visible caption AND its aria-label — it
  // must never name the knot, or the prompt would give the answer away.
  const total = entry.methods[0]?.steps.length ?? 1;
  return (
    <div className="flex justify-center">
      <KnotPanel kind={entry.diagram} step={total} totalSteps={total} fin webbing={entry.webbing} label={label} />
    </div>
  );
}

function GoPrompt({ item }: { item: GoItem }) {
  // The prompt names the service + order number only — reciting the
  // verbatim text is the drill. Nothing of the answer shows here.
  return (
    <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-6 text-center">
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">{item.order.service.toUpperCase()}</p>
      <p className="font-display mt-2 text-2xl font-bold text-[var(--text)]">General Order {item.order.n}</p>
      <p className="mt-1 text-sm text-[var(--dim)]">Recite it verbatim, exactly as published.</p>
    </div>
  );
}

function SignalPrompt({ entry }: { entry: SignalEntry }) {
  // A neutral name: SignalDiagram puts the name in its panels'
  // aria-labels, which would hand a screen-reader user the answer.
  // The pose note it prints is the diagram's own description — that
  // IS the prompt, exactly as on the source card.
  return <SignalDiagram spec={entry.diagram} name="this signal" />;
}

/* --------------------------- Answer reveals ---------------------------- */

function RankReveal({ item }: { item: RankItem }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-[var(--text)]">
        {item.row.title} ({item.row.abbr}) — {item.row.grade}
      </p>
      <p className="mt-0.5 text-sm font-semibold text-[var(--dim)]">{item.branch}</p>
      {item.insignia ? <p className="mt-2 text-base text-[var(--text)]">{item.insignia.display}</p> : null}
      {item.row.note ? <p className="mt-1 text-sm text-[var(--dim)]">{item.row.note}</p> : null}
      {item.insignia?.flag ? (
        <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--text)]">
          ⚠ {item.insignia.flag}
        </p>
      ) : null}
    </div>
  );
}

function KnotReveal({ entry }: { entry: KnotEntry }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-[var(--text)]">{entry.name}</p>
      <p className="mt-0.5 text-sm font-semibold text-[var(--dim)]">{knotFamilyLabel(entry.family)}</p>
      <h4 className="font-display mt-3 text-sm font-bold tracking-wide text-[var(--accent-word)]">WHAT IT'S FOR</h4>
      <p className="mt-1 text-base leading-relaxed text-[var(--text)]">{entry.purpose}</p>
      {entry.flag ? (
        <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--text)]">
          ⚠ {entry.flag}
        </p>
      ) : null}
      <p className="mt-3 text-sm text-[var(--dim)]">Source: {entry.source}</p>
    </div>
  );
}

function SignalReveal({ entry }: { entry: SignalEntry }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-[var(--text)]">{entry.name}</p>
      <p className="mt-0.5 text-sm font-semibold text-[var(--dim)]">
        {entry.service === "Army task" ? "ARMY TASK 551-88H-1023" : entry.service.toUpperCase()} · {signalFamilyLabel(entry.family)}
      </p>
      <p className="mt-2 text-base leading-relaxed text-[var(--text)]">{entry.meaning}</p>
      {entry.flag ? (
        <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--text)]">
          ⚠ {entry.flag}
        </p>
      ) : null}
      <p className="mt-3 text-sm text-[var(--dim)]">Source: {entry.source}</p>
    </div>
  );
}

function GoReveal({ item }: { item: GoItem }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-[var(--text)]">{goLabel(item)}</p>
      <p className="mt-2 text-base leading-relaxed text-[var(--text)]">“{item.order.text}”</p>
      <p className="mt-3 text-sm text-[var(--dim)]">
        Verbatim from the {GO_CARD_TITLES[item.order.service]} card — General Orders section.
      </p>
    </div>
  );
}

/* ------------------------------ Session -------------------------------- */

type Phase = "setup" | "playing" | "done";

function TrainerSession({
  trainer,
  profileId,
  profileBranch,
  stats,
  onBack,
  onOpenRank,
  onOpenKnot,
  onOpenSignal,
  onOpenGeneralOrder,
}: {
  trainer: TrainerId;
  profileId: number;
  profileBranch: string;
  stats: TrainerStat[];
  onBack: () => void;
  onOpenRank: (key: string) => void;
  onOpenKnot: (id: string) => void;
  onOpenSignal: (id: string) => void;
  onOpenGeneralOrder: (service: GeneralOrderService) => void;
}) {
  const queryClient = useQueryClient();
  const meta = TRAINER_META.find((t) => t.id === trainer)!;
  const myBranch = rankPool().some((i) => i.branch === profileBranch) ? profileBranch : null;

  const [mode, setMode] = useState<TrainerMode>("flashcard");
  const [length, setLength] = useState<10 | 20>(10);
  const [rankBranch, setRankBranch] = useState<string>(myBranch ?? "All");
  const [knotFamily, setKnotFamily] = useState<KnotFamilyKey | "All">("All");
  const [signalFamily, setSignalFamily] = useState<SignalFamilyKey | "All">("All");
  const [signalService, setSignalService] = useState<SignalService | "All">("All");
  const [goService, setGoService] = useState<GeneralOrderService | "All">("All");

  const pool: SessionItem[] = useMemo(() => {
    if (trainer === "rank") return filterRankPool(rankBranch);
    if (trainer === "knots") return filterKnotPool(knotFamily);
    if (trainer === "generalorders") return filterGoPool(goService);
    return filterSignalPool(signalFamily, signalService);
  }, [trainer, rankBranch, knotFamily, signalFamily, signalService, goService]);

  const [phase, setPhase] = useState<Phase>("setup");
  const [queue, setQueue] = useState<SessionItem[]>([]);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const attemptsRef = useRef<Map<string, number>>(new Map());
  const firstTryRef = useRef<Set<string>>(new Set());
  const [missed, setMissed] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [distinctKeys, setDistinctKeys] = useState<string[]>([]);
  const [savedStat, setSavedStat] = useState<TrainerStat | null>(null);
  const recordedRef = useRef(false);

  const item: SessionItem | undefined = queue[pos];

  // One quiz question per (position, item attempt): options are built
  // from the filtered pool with a per-question seeded RNG, so the
  // question is stable across re-renders and reproducible in tests.
  const question = useMemo(() => {
    if (phase !== "playing" || mode !== "quiz" || !item) return null;
    const attempt = attemptsRef.current.get(item.key) ?? 0;
    let seed = 0;
    for (const ch of item.key) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
    const rng = mulberry32(seed + attempt * 7919 + pos * 131);
    if (trainer === "rank") {
      const it = item as RankItem;
      return { ...buildOptions(it, rankDistractors(it, pool as RankItem[], 3, rng), rng), form: "standard" as const };
    }
    if (trainer === "knots") {
      const it = item as KnotItem;
      // Alternate the two published quiz forms by the ordinal of the
      // distinct item (resurfaces keep their first form): even items
      // show the diagram and ask for the name; odd items give the name
      // and ask for the diagram.
      const started = attemptsRef.current.size;
      const ordinal = attempt === 0 ? started : Math.max(0, started - 1);
      const form = ordinal % 2 === 0 ? ("diagramToName" as const) : ("nameToDiagram" as const);
      return { ...buildOptions(it, knotDistractors(it, pool as KnotItem[], 3, rng), rng), form };
    }
    if (trainer === "generalorders") {
      const it = item as GoItem;
      return { ...buildOptions(it, goDistractors(it, pool as GoItem[], 3, rng), rng), form: "standard" as const };
    }
    const it = item as SignalItem;
    return { ...buildOptions(it, signalDistractors(it, pool as SignalItem[], 3, rng), rng), form: "standard" as const };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, mode, item?.key, pos, trainer]);

  const record = useMutation({
    mutationFn: (args: { score: number; total: number; endStreak: number; sessionBestStreak: number }) =>
      api.recordTrainerSession({
        trainerId: trainer,
        mode,
        score: args.score,
        total: args.total,
        endStreak: args.endStreak,
        sessionBestStreak: args.sessionBestStreak,
      }),
    onSuccess: (data) => {
      setSavedStat(data.stat);
      void queryClient.invalidateQueries({ queryKey: ["trainerstats", profileId] });
    },
  });
  const recordRef = useRef(record.mutate);
  recordRef.current = record.mutate;

  const start = () => {
    const rng = mulberry32((Date.now() % 2147483647) + pool.length);
    const q = buildQueue(pool, length, rng);
    attemptsRef.current = new Map();
    firstTryRef.current = new Set();
    recordedRef.current = false;
    setQueue(q);
    setDistinctKeys(q.map((i) => i.key));
    setPos(0);
    setFlipped(false);
    setPicked(null);
    setMissed([]);
    setStreak(0);
    setBestStreak(0);
    setSavedStat(null);
    setPhase("playing");
  };

  /** Fold one answer into the session state; returns whether the item
   * must resurface (missed, attempts remaining). */
  const applyAnswer = (correct: boolean): boolean => {
    if (!item) return false;
    const key = item.key;
    const attempt = (attemptsRef.current.get(key) ?? 0) + 1;
    attemptsRef.current.set(key, attempt);
    if (attempt === 1) {
      if (correct) firstTryRef.current.add(key);
      else setMissed((m) => (m.includes(key) ? m : [...m, key]));
    }
    if (correct) {
      const s = streak + 1;
      setStreak(s);
      setBestStreak((b) => Math.max(b, s));
    } else {
      setStreak(0);
    }
    return !correct && attempt < MAX_ATTEMPTS_PER_ITEM;
  };

  const advance = (resurface: boolean) => {
    if (!item) return;
    let q = queue;
    if (resurface) {
      q = reinsertMissed(queue, pos, item);
      setQueue(q);
    }
    setFlipped(false);
    setPicked(null);
    if (pos + 1 >= q.length) {
      setPhase("done");
    } else {
      setPos(pos + 1);
    }
  };

  const gradeFlashcard = (correct: boolean) => advance(applyAnswer(correct));

  const pickOption = (idx: number) => {
    if (picked !== null || !question) return;
    setPicked(idx);
    applyAnswer(idx === question.correctIndex);
  };
  const nextFromQuiz = () => {
    if (picked === null || !question || !item) return;
    const wasCorrect = picked === question.correctIndex;
    const attempt = attemptsRef.current.get(item.key) ?? 1;
    advance(!wasCorrect && attempt < MAX_ATTEMPTS_PER_ITEM);
  };

  // Record the finished session exactly once.
  useEffect(() => {
    if (phase !== "done" || recordedRef.current) return;
    recordedRef.current = true;
    const { score, total } = sessionScore(firstTryRef.current, distinctKeys);
    recordRef.current({ score, total, endStreak: streak, sessionBestStreak: bestStreak });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const modeStat = statFor(stats, trainer, mode);
  const displayStat = savedStat ?? modeStat;

  /* ------------------------------- Setup ------------------------------ */
  if (phase === "setup") {
    return (
      <div>
        <HubBackButton ariaLabel="Back to Practice Trainers" text="Practice Trainers" onBack={onBack} />
        <SectionHead title={meta.name} sub={meta.blurb} />
        <div className={cardCls}>
          <div role="group" aria-label="Drill mode" className="flex flex-wrap gap-2">
            {(["flashcard", "quiz"] as TrainerMode[]).map((m) => (
              <button
                key={m}
                type="button"
                aria-label={m === "flashcard" ? "Flashcard mode" : "Quiz mode"}
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-full px-4 py-2 text-sm font-bold ${mode === m ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
              >
                {m === "flashcard" ? "Flashcards" : "Quiz"}
              </button>
            ))}
            <span className="w-full text-sm text-[var(--dim)]">
              {mode === "flashcard"
                ? "See the prompt, name it in your head, flip the card, then grade yourself honestly."
                : "Multiple choice — four options, one right answer."}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="trainer-length" className={labelCls}>Session length</label>
              <select
                id="trainer-length"
                aria-label="Session length"
                value={String(length)}
                onChange={(e) => setLength(Number(e.target.value) === 20 ? 20 : 10)}
                className={selectCls}
              >
                <option value="10">10 questions</option>
                <option value="20">20 questions</option>
              </select>
            </div>
            {trainer === "rank" && (
              <div>
                <label htmlFor="trainer-rank-branch" className={labelCls}>Branch</label>
                <select
                  id="trainer-rank-branch"
                  aria-label="Rank trainer branch filter"
                  value={rankBranch}
                  onChange={(e) => setRankBranch(e.target.value)}
                  className={selectCls}
                >
                  {myBranch ? <option value={myBranch}>My branch — {myBranch}</option> : null}
                  <option value="All">All branches</option>
                  {rankPool()
                    .map((i) => i.branch)
                    .filter((b, idx, a) => a.indexOf(b) === idx && b !== myBranch)
                    .map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                </select>
              </div>
            )}
            {trainer === "knots" && (
              <div>
                <label htmlFor="trainer-knot-family" className={labelCls}>Family</label>
                <select
                  id="trainer-knot-family"
                  aria-label="Knots trainer family filter"
                  value={knotFamily}
                  onChange={(e) => setKnotFamily(e.target.value as KnotFamilyKey | "All")}
                  className={selectCls}
                >
                  <option value="All">All families</option>
                  {KNOT_FAMILIES.map((f) => (
                    <option key={f.key} value={f.key}>{f.name}</option>
                  ))}
                </select>
              </div>
            )}
            {trainer === "signals" && (
              <>
                <div>
                  <label htmlFor="trainer-signal-service" className={labelCls}>Service</label>
                  <select
                    id="trainer-signal-service"
                    aria-label="Signals trainer service filter"
                    value={signalService}
                    onChange={(e) => setSignalService(e.target.value as SignalService | "All")}
                    className={selectCls}
                  >
                    <option value="All">All services</option>
                    {SIGNAL_SERVICES.map((s) => (
                      <option key={s} value={s}>{signalServiceLabel(s)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="trainer-signal-family" className={labelCls}>Family</label>
                  <select
                    id="trainer-signal-family"
                    aria-label="Signals trainer family filter"
                    value={signalFamily}
                    onChange={(e) => setSignalFamily(e.target.value as SignalFamilyKey | "All")}
                    className={selectCls}
                  >
                    <option value="All">All families</option>
                    {SIGNAL_FAMILIES.map((f) => (
                      <option key={f.key} value={f.key}>{f.name}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>

          {trainer === "rank" && rankBranch === "All" ? (
            <p className="mt-3 text-sm text-[var(--dim)]">
              Air Force warrant rows drill by text description only — the Air Force publishes those bar designs
              only as official graphics (AFGM2026-36-2033, Figure 11.1), so no drawing is shown rather than an
              invented one.
            </p>
          ) : null}
          {trainer === "generalorders" && (
            <div>
              <label htmlFor="trainer-go-service" className={labelCls}>Service</label>
              <select
                id="trainer-go-service"
                aria-label="General Orders trainer service filter"
                value={goService}
                onChange={(e) => setGoService(e.target.value as GeneralOrderService | "All")}
                className={selectCls}
              >
                <option value="All">All services (25 orders)</option>
                {GO_SERVICES.map((sv) => (
                  <option key={sv} value={sv}>{sv}</option>
                ))}
              </select>
            </div>
          )}
          {trainer === "signals" && signalService === "USMC" ? (
            <p className="mt-3 text-sm text-[var(--dim)]">
              USMC drill: every question presents the USMC form exactly as MCWP 3-11.2 §3204 publishes it — Army
              forms never appear in a USMC session.
            </p>
          ) : null}

          <p className="mt-3 text-sm text-[var(--dim)]" role="status">
            {pool.length} in the pool with these filters
            {pool.length < length ? ` — the session will use all ${pool.length}.` : "."} Missed cards come back
            later in the same session.
          </p>
          {pool.length === 0 ? (
            <p className="mt-2 text-base font-semibold text-[var(--text)]">
              No entries match both filters — loosen one filter to drill.
            </p>
          ) : null}

          <div className="mt-4 border-t border-[var(--border)] pt-3">
            <p className="text-sm font-bold text-[var(--text)]">
              Your {mode === "flashcard" ? "flashcard" : "quiz"} stats — {meta.name}
            </p>
            <div className="mt-1"><StatLine stat={modeStat} /></div>
          </div>

          <button type="button" aria-label={`Start ${meta.name}`} onClick={start} disabled={pool.length === 0} className={`${btnPrimary} mt-4 w-full`}>
            Start session — {Math.min(length, pool.length)} questions
          </button>
        </div>
        <p className="mt-3 text-sm text-[var(--dim)]">Drawn from {meta.source} — the same cards, drilled.</p>
      </div>
    );
  }

  /* ------------------------------- Done ------------------------------- */
  if (phase === "done" || !item) {
    const { score, total } = sessionScore(firstTryRef.current, distinctKeys);
    const missedItems = missed
      .map((k) => pool.find((i) => i.key === k) ?? queue.find((i) => i.key === k))
      .filter((i): i is SessionItem => !!i);
    return (
      <div>
        <HubBackButton ariaLabel="Back to Practice Trainers" text="Practice Trainers" onBack={onBack} />
        <SectionHead title={`${meta.name} — Results`} sub={mode === "flashcard" ? "Flashcard session" : "Quiz session"} />
        <div className={cardCls} role="status">
          <p className="font-display text-3xl font-bold text-[var(--text)]">
            {score} / {total}
          </p>
          <p className="mt-1 text-base text-[var(--text)]">
            {total > 0 ? `${Math.round((score / total) * 100)}%` : ""} first-try correct · Best streak this session:{" "}
            <strong>{bestStreak}</strong>
          </p>
          <div className="mt-3 border-t border-[var(--border)] pt-3">
            <p className="text-sm font-bold text-[var(--text)]">Your saved stats ({mode})</p>
            <div className="mt-1"><StatLine stat={displayStat} /></div>
            {record.isPending ? <p className="mt-1 text-sm text-[var(--dim)]">Saving…</p> : null}
            {record.isError ? (
              record.error instanceof OfflineQueuedError ? (
                <p className="mt-1 text-sm font-semibold text-[var(--amber)]" role="status">
                  You&apos;re offline — this result is saved on this device and will send when you&apos;re back. Your saved stats update when it sends.
                </p>
              ) : (
                <p className="mt-1 text-sm text-[var(--red)]" role="alert">Your result couldn't be saved. Your saved stats are unchanged.</p>
              )
            ) : null}
          </div>
        </div>

        <h3 className="font-display mb-2 mt-6 text-xl font-bold text-[var(--text)]">Review what you missed</h3>
        {missedItems.length === 0 ? (
          <p className="text-base text-[var(--text)]">Nothing missed — clean run.</p>
        ) : (
          <div className="space-y-2">
            {missedItems.map((mi) => {
              const label =
                trainer === "rank"
                  ? rankLabel(mi as RankItem)
                  : trainer === "knots"
                    ? (mi as KnotItem).entry.name
                    : trainer === "generalorders"
                      ? goLabel(mi as GoItem)
                      : (mi as SignalItem).entry.name;
              const open = () => {
                if (trainer === "rank") onOpenRank(mi.key);
                else if (trainer === "knots") onOpenKnot(mi.key);
                else if (trainer === "generalorders") onOpenGeneralOrder((mi as GoItem).order.service);
                else onOpenSignal(mi.key);
              };
              return (
                <button
                  key={mi.key}
                  type="button"
                  aria-label={`Open the reference card for ${label}`}
                  onClick={open}
                  className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left"
                >
                  <span className="font-display block text-base font-bold text-[var(--text)]">{label}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-[var(--accent-word)]">
                    Open in {meta.source} →
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" aria-label="Drill again" onClick={() => setPhase("setup")} className={btnPrimary}>
            Drill again
          </button>
          <button type="button" aria-label="Back to the Trainers hub" onClick={onBack} className={btnGhost}>
            Trainers hub
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------ Playing ------------------------------ */
  const progressLabel = `Card ${Math.min(pos + 1, queue.length)} · ${distinctKeys.length} in session · streak ${streak}`;
  return (
    <div>
      <HubBackButton ariaLabel="Quit this session" text="Quit session" onBack={() => setPhase("setup")} />
      <p className="mb-3 text-sm font-semibold text-[var(--dim)]" role="status">{progressLabel}</p>
      <div className={cardCls}>
        {trainer === "rank" && <RankPrompt item={item as RankItem} />}
        {trainer === "knots" && question?.form === "nameToDiagram" && mode === "quiz" ? null : trainer === "knots" ? (
          <KnotPrompt entry={(item as KnotItem).entry} />
        ) : null}
        {trainer === "signals" && <SignalPrompt entry={(item as SignalItem).entry} />}
        {trainer === "generalorders" && <GoPrompt item={item as GoItem} />}

        {mode === "flashcard" ? (
          flipped ? (
            <div className="mt-4 border-t border-[var(--border)] pt-4">
              {trainer === "rank" && <RankReveal item={item as RankItem} />}
              {trainer === "knots" && <KnotReveal entry={(item as KnotItem).entry} />}
              {trainer === "signals" && <SignalReveal entry={(item as SignalItem).entry} />}
              {trainer === "generalorders" && <GoReveal item={item as GoItem} />}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button type="button" aria-label="Got it" onClick={() => gradeFlashcard(true)} className={btnPrimary}>
                  Got it
                </button>
                <button type="button" aria-label="Missed it" onClick={() => gradeFlashcard(false)} className={btnGhost}>
                  Missed it
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-center text-base font-semibold text-[var(--text)]">
                {trainer === "rank"
                  ? "Name this rank and branch."
                  : trainer === "knots"
                    ? "Name this knot."
                    : trainer === "generalorders"
                      ? "Recite this General Order verbatim."
                      : "Name this signal."}
              </p>
              <button type="button" aria-label="Flip the card" onClick={() => setFlipped(true)} className={`${btnPrimary} mt-3 w-full`}>
                Flip card
              </button>
            </div>
          )
        ) : (
          <div className="mt-4">
            {trainer === "knots" && question?.form === "nameToDiagram" ? (
              <p className="font-display text-center text-xl font-bold text-[var(--text)]">
                {(item as KnotItem).entry.name} — which diagram is it?
              </p>
            ) : (
              <p className="text-center text-base font-semibold text-[var(--text)]">
                {trainer === "rank"
                  ? "Which rank is this?"
                  : trainer === "knots"
                    ? "Which knot is this?"
                    : trainer === "generalorders"
                      ? "Which verbatim text is this General Order?"
                      : "Which signal is this?"}
              </p>
            )}
            <div className="mt-3 space-y-2" role="group" aria-label="Answer choices">
              {(question?.options ?? []).map((opt, idx) => {
                const isCorrect = idx === question!.correctIndex;
                const isPicked = picked === idx;
                const revealed = picked !== null;
                const optLabel =
                  trainer === "rank"
                    ? rankLabel(opt as RankItem)
                    : trainer === "knots"
                      ? (opt as KnotItem).entry.name
                      : trainer === "generalorders"
                        ? (opt as GoItem).order.text
                        : (opt as SignalItem).entry.name;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    aria-label={trainer === "knots" && question?.form === "nameToDiagram" ? `Diagram option ${idx + 1}` : optLabel}
                    disabled={revealed}
                    onClick={() => pickOption(idx)}
                    className={`block w-full rounded-[var(--radius)] border-2 p-3 text-left ${
                      revealed && isCorrect
                        ? "border-[var(--accent)] bg-[var(--surface2)]"
                        : revealed && isPicked
                          ? "border-[var(--red)] bg-[var(--red-bg)]"
                          : "border-[var(--border)] bg-[var(--surface)]"
                    }`}
                  >
                    {trainer === "knots" && question?.form === "nameToDiagram" ? (
                      <span className="flex justify-center">
                        <KnotPrompt entry={(opt as KnotItem).entry} label="Diagram option" />
                      </span>
                    ) : (
                      <span className="font-display text-base font-bold text-[var(--text)]">{optLabel}</span>
                    )}
                    {revealed && isCorrect ? (
                      <span className="mt-0.5 block text-sm font-bold text-[var(--accent-word)]">Correct</span>
                    ) : revealed && isPicked ? (
                      <span className="mt-0.5 block text-sm font-bold text-[var(--red)]">Not this one</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            {picked !== null ? (
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                {trainer === "rank" && <RankReveal item={item as RankItem} />}
                {trainer === "knots" && <KnotReveal entry={(item as KnotItem).entry} />}
                {trainer === "signals" && <SignalReveal entry={(item as SignalItem).entry} />}
              {trainer === "generalorders" && <GoReveal item={item as GoItem} />}
                <button type="button" aria-label="Next question" onClick={nextFromQuiz} className={`${btnPrimary} mt-4 w-full`}>
                  Next
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------- Hub ---------------------------------- */

export function TrainersView({
  profileId,
  profileBranch,
  focusTrainer,
  onFocusHandled,
  onOpenRank,
  onOpenKnot,
  onOpenSignal,
  onOpenGeneralOrder,
}: {
  profileId: number;
  profileBranch: string;
  focusTrainer?: { id: TrainerId; n: number } | null;
  onFocusHandled?: () => void;
  onOpenRank: (key: string) => void;
  onOpenKnot: (id: string) => void;
  onOpenSignal: (id: string) => void;
  onOpenGeneralOrder: (service: GeneralOrderService) => void;
}) {
  const [active, setActive] = useState<TrainerId | null>(null);
  // Profile-scoped query key (the Calculators lesson): a profile
  // switch can never render the previous profile's stats here.
  const statsQ = useQuery({
    queryKey: ["trainerstats", profileId],
    queryFn: () => api.getTrainerStats({}),
  });
  const stats = statsQ.data?.stats ?? [];

  useEffect(() => {
    if (!focusTrainer) return;
    setActive(focusTrainer.id);
    onFocusHandled?.();
  }, [focusTrainer, onFocusHandled]);

  if (active) {
    return (
      <TrainerSession
        key={`${active}-${profileId}`}
        trainer={active}
        profileId={profileId}
        profileBranch={profileBranch}
        stats={stats}
        onBack={() => setActive(null)}
        onOpenRank={onOpenRank}
        onOpenKnot={onOpenKnot}
        onOpenSignal={onOpenSignal}
        onOpenGeneralOrder={onOpenGeneralOrder}
      />
    );
  }

  return (
    <div>
      <SectionHead
        title="Practice Trainers"
        sub="Drill what the Book teaches: flashcards and quizzes built from the Rank Charts, the Knots library, the Hand & Arm Signals, and the General Orders — the same source cards, no copies. Missed cards come back later in the session, and your streaks and bests are saved on your profile only."
      />
      <div className="space-y-3">
        {TRAINER_META.map((t) => {
          const flash = statFor(stats, t.id, "flashcard");
          const quiz = statFor(stats, t.id, "quiz");
          return (
            <section key={t.id} aria-label={t.name} className={cardCls}>
              <h3 className="font-display text-xl font-bold text-[var(--text)]">{t.name}</h3>
              <p className="mt-1 text-base text-[var(--text)]">{t.blurb}</p>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-bold text-[var(--text)]">Flashcards</p>
                <StatLine stat={flash} />
                <p className="pt-1 text-sm font-bold text-[var(--text)]">Quiz</p>
                <StatLine stat={quiz} />
              </div>
              <button
                type="button"
                aria-label={`Open the ${t.name}`}
                onClick={() => setActive(t.id)}
                className={`${btnPrimary} mt-4 w-full`}
              >
                Drill this
              </button>
            </section>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-[var(--dim)]">
        Stats are private to your profile — they never appear on any squad, Binder, or sharing surface, and a
        different profile starts from zero.
      </p>
    </div>
  );
}
