// First 30 Days — guided newcomer path (view key "first30").
// Content: first30.ts, transcribed from the research pack at
// ~/workspace/military-app/first30/first30.md. The path sequences and
// points — every task deep-links to the existing section the pack
// names and duplicates none of that section's content.
// Check state persists per profile through the established checklist
// actions (profile_checklists via getChecklistState /
// setChecklistItem — the Reenlistment Before You Sign pattern): the
// actions resolve the signed-in profile server-side, no profile id is
// ever accepted, so a spouse profile's progress is a separate row
// from the member's by construction. The view renders straight from
// the query (never a local copy), so a profile switch can never show
// another profile's checks.

import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import {
  FIRST30_CHECKLIST_ID,
  FIRST30_CLOCKS,
  FIRST30_PHASES,
  FIRST30_SPONSORSHIP,
  FIRST30_TASKS,
  first30TaskVisible,
  type First30Situation,
  type First30Task,
} from "./first30";

const SIT_KEY = "bb-first30-situation-v1";

/** Views the spouse shell actually opens (its spouseViews list). A
 * task whose pack-named section is not spouse-open renders the link
 * as named text on the spouse track — never a dead button (the
 * Reenlistment & IRR spouse cross-link precedent). */
const SPOUSE_OPEN_VIEWS: ReadonlySet<string> = new Set([
  "installation", "pcs", "healthhq", "kids", "family", "oconus",
  "taxes", "voting", "rights", "spousehub",
]);

const btnPrimary =
  "rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

function loadSituation(spouse: boolean): First30Situation {
  const base: First30Situation = { household: spouse ? "family" : "family", efmp: false, oconus: false };
  try {
    const raw = window.localStorage.getItem(SIT_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<First30Situation>;
      return {
        household: spouse ? "family" : p.household === "single" ? "single" : "family",
        efmp: Boolean(p.efmp),
        oconus: Boolean(p.oconus),
      };
    }
  } catch {
    /* storage unavailable — defaults apply */
  }
  return base;
}

export function First30View({
  go,
  spouse = false,
}: {
  go: (view: string) => void;
  spouse?: boolean;
}) {
  const queryClient = useQueryClient();
  const stateQ = useQuery({
    queryKey: ["checklist", FIRST30_CHECKLIST_ID],
    queryFn: () => api.getChecklistState({ checklistId: FIRST30_CHECKLIST_ID }),
  });
  const checked: ReadonlySet<string> = new Set(stateQ.data?.completed ?? []);
  const toggleM = useMutation({
    mutationFn: (args: { itemKey: string; checked: boolean }) =>
      api.setChecklistItem({ checklistId: FIRST30_CHECKLIST_ID, itemKey: args.itemKey, checked: args.checked }),
    onMutate: (args) => {
      queryClient.setQueryData<{ completed: string[] }>(["checklist", FIRST30_CHECKLIST_ID], (old) => {
        const next = new Set(old?.completed ?? []);
        if (args.checked) next.add(args.itemKey);
        else next.delete(args.itemKey);
        return { completed: [...next] };
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["checklist", FIRST30_CHECKLIST_ID], data);
    },
    onError: () => {
      void queryClient.invalidateQueries({ queryKey: ["checklist", FIRST30_CHECKLIST_ID] });
    },
  });

  const [sit, setSit] = useState<First30Situation>(() => loadSituation(spouse));
  useEffect(() => {
    try {
      window.localStorage.setItem(SIT_KEY, JSON.stringify(sit));
    } catch {
      /* best-effort */
    }
  }, [sit]);

  const visible = FIRST30_TASKS.filter((t) => first30TaskVisible(t, sit));
  const visibleDone = visible.filter((t) => checked.has(t.id)).length;

  const toggle = (task: First30Task) =>
    toggleM.mutate({ itemKey: task.id, checked: !checked.has(task.id) });

  return (
    <div>
      <div className="mb-3">
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">First 30 Days</h2>
        <div aria-hidden="true" className="mt-2 flex h-1 overflow-hidden rounded-full">
          <span className="flex-[2] bg-[var(--accent)]" />
          <span className="flex-1 bg-[var(--accent2)]" />
        </div>
        <p className="mt-1.5 text-sm text-[var(--dim)]">
          {spouse
            ? "Your family's first month at the new station — the family view of the path: report, in-process, get paid, get housed, get covered, get the family settled, in the order the deadlines actually fall. The path sequences and points — the detail lives in the linked sections."
            : "Your first month at a new duty station — the landing, sequenced: report, in-process, get paid, get housed, get covered, get the family settled, in the order the deadlines actually fall. The arrival-side companion to the PCS Move Center: the Move Center owns the move, this path owns the landing. It sequences and points — the detail lives in the linked sections."}
        </p>
      </div>

      {/* ── The four service-level hard clocks, as published ── */}
      <section aria-label="The four hard clocks" className="mb-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">⏰ The four hard clocks — service-level, as published</h3>
        <p className="mt-1 text-sm text-[var(--text)]">
          These are the only four service-level deadlines in the official sources. Everything else time-shaped
          in this path is installation-published and is labeled an example on its task — never a DoD-wide rule.
          Where two official wordings exist, both print, unmerged.
        </p>
        <div className="mt-3 space-y-3">
          {FIRST30_CLOCKS.map((c) => (
            <div key={c.title} className="rounded-[var(--radius)] bg-[var(--surface)] p-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{c.title}</p>
              {c.lines.map((l) => (
                <p key={l.slice(0, 32)} className="mt-1 text-sm text-[var(--text)]">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Situation picker ── */}
      <section aria-label="Your situation" className={`${cardCls} mb-4`}>
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Your situation</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">
          The path filters to your arrival. Universal [ALL] tasks — including every hard clock — always show,
          for every situation: nothing safety- or deadline-critical is situation-gated.
        </p>
        {!spouse ? (
          <div className="mt-3">
            <p className="mb-1 block text-sm font-semibold text-[var(--text)]">Household</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Household track">
              <button type="button" aria-label="Single / unaccompanied track" aria-pressed={sit.household === "single"} onClick={() => setSit({ ...sit, household: "single" })} className={sit.household === "single" ? btnPrimary : btnGhost}>
                Single / unaccompanied
              </button>
              <button type="button" aria-label="Family / accompanied track" aria-pressed={sit.household === "family"} onClick={() => setSit({ ...sit, household: "family" })} className={sit.household === "family" ? btnPrimary : btnGhost}>
                Family / accompanied
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm font-semibold text-[var(--text)]">
            Spouse view: the family track — tasks tagged [FAMILY] and [SPOUSE] lead; your check marks save to
            your own spouse profile, separate from the member's.
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-base text-[var(--text)]">
            <input type="checkbox" aria-label="EFMP enrolled family member" checked={sit.efmp} onChange={(e) => setSit({ ...sit, efmp: e.target.checked })} className="h-5 w-5 accent-[var(--accent)]" />
            EFMP enrolled
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-base text-[var(--text)]">
            <input type="checkbox" aria-label="OCONUS arrival" checked={sit.oconus} onChange={(e) => setSit({ ...sit, oconus: e.target.checked })} className="h-5 w-5 accent-[var(--accent)]" />
            OCONUS arrival
          </label>
        </div>
        <p className="mt-3 text-sm font-bold text-[var(--text)]" role="status">
          Showing {visible.length} of {FIRST30_TASKS.length} tasks · {visibleDone} checked
        </p>
      </section>

      {/* ── Phases ── */}
      {FIRST30_PHASES.map((phase) => {
        const tasks = visible.filter((t) => t.phase === phase.key);
        const done = tasks.filter((t) => checked.has(t.id)).length;
        return (
          <section key={phase.key} aria-label={`First 30 Days — ${phase.label}`} className="mb-6">
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-[var(--text)]">
                {phase.label} <span className="text-sm font-semibold text-[var(--dim)]">· {phase.span}</span>
              </h3>
              <span className="text-sm font-bold text-[var(--dim)]" role="status">
                {done} of {tasks.length} done
              </span>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => {
                const on = checked.has(task.id);
                return (
                  <article key={task.id} className={`${cardCls}`}>
                    <div className="flex items-start gap-3">
                      <input
                        id={`f30-check-${task.id}`}
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(task)}
                        className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]"
                      />
                      <div className="min-w-0 flex-1">
                        <label htmlFor={`f30-check-${task.id}`} className={`block text-base font-bold text-[var(--text)] ${on ? "line-through" : ""}`}>
                          {task.id}. {task.title}
                        </label>
                        <p className="mt-1 flex flex-wrap gap-1.5">
                          {task.tags.map((tag) => (
                            <span key={tag} className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
                              [{tag}]
                            </span>
                          ))}
                          {task.clock ? (
                            <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
                              ⏰ DEADLINE-BEARING
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-2 text-base text-[var(--text)]">{task.what}</p>
                        <p className="mt-2 text-sm text-[var(--text)]">
                          <strong className="font-display">When:</strong> {task.when}
                        </p>
                        <p className="mt-1 text-sm text-[var(--text)]">
                          <strong className="font-display">Where:</strong> {task.where}
                        </p>
                        <p className="mt-1 text-xs text-[var(--dim)]">Source: {task.source}</p>
                        {task.flag ? (
                          <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
                            ⚠ {task.flag}
                          </p>
                        ) : null}
                        {!spouse || SPOUSE_OPEN_VIEWS.has(task.linkView) ? (
                          <button
                            type="button"
                            aria-label={`Open ${task.linkLabel} for task ${task.id}`}
                            onClick={() => go(task.linkView)}
                            className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)]"
                          >
                            Open {task.linkLabel} →
                          </button>
                        ) : (
                          <p className="mt-3 text-sm text-[var(--dim)]">
                            Detail: {task.linkLabel} (opens on the member's profile)
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
              {tasks.length === 0 ? (
                <p className="text-base text-[var(--dim)]">No tasks in this phase match your situation.</p>
              ) : null}
            </div>
          </section>
        );
      })}

      {/* ── Sponsorship panel ── */}
      <section aria-label="Sponsorship — how you get one, per branch" className={`${cardCls} mb-4`}>
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Sponsorship — how you get one, per branch</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">
          The support material behind task B-1, printed as published — conflicts as conflicts, gaps as gaps.
        </p>
        <div className="mt-3 space-y-4">
          {FIRST30_SPONSORSHIP.map((s) => (
            <div key={s.branch}>
              <h4 className="font-display text-base font-bold text-[var(--text)]">{s.branch}</h4>
              <p className="mt-1 text-base text-[var(--text)]">{s.body}</p>
              {s.flag ? (
                <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">{s.flag}</p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" aria-label="Open PCS Move Center" onClick={() => go("pcs")} className={btnGhost}>
            PCS Move Center →
          </button>
          <button type="button" aria-label="Open My Installation" onClick={() => go("installation")} className={btnGhost}>
            My Installation →
          </button>
        </div>
      </section>

      <p className="text-sm text-[var(--dim)]">
        Joint backbone: Military OneSource's Plan My Move builds tailored PCS checklists and
        MilitaryINSTALLATIONS publishes per-installation check-in procedures — this path sequences the
        universal tasks, prints the deadlines the official sources publish, and deep-links sideways into
        Battle Book's own sections for the detail. Researched Nov 9, 2026 from official service, DoD,
        DHA/TRICARE, DTMO/DFAS, Military OneSource/MilitaryINSTALLATIONS, FVAP, USPS, and DoDEA pages.
      </p>
    </div>
  );
}
