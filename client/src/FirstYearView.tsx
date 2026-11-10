// First Year Out — the guided transition path (view key "firstyear").
// Content: firstyear.ts, transcribed from the research pack at
// ~/workspace/military-app/emergency-firstyear/emergency-firstyear.md
// (Part B). The path sequences and points — every task deep-links to
// the existing section the pack names and duplicates none of that
// section's content.
// Check state persists per profile through the established checklist
// actions (profile_checklists via getChecklistState /
// setChecklistItem — the First 30 Days pattern): the actions resolve
// the signed-in profile server-side, no profile id is ever accepted,
// so a spouse profile's progress is a separate row from the member's
// by construction. The view renders straight from the query, and the
// query key is profile-scoped (["checklist", id, profileId]) so a
// profile switch can never render another profile's checks.

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { CardTools } from "./binder";
import {
  FIRSTYEAR_B3_FLAG,
  FIRSTYEAR_CHECKLIST_ID,
  FIRSTYEAR_PHASES,
  FIRSTYEAR_SPINE,
  FIRSTYEAR_TASKS,
  type FirstYearTask,
} from "./firstyear";

/** Views the spouse shell actually opens (its spouseViews list). A
 * task whose pack-named section is not spouse-open renders the link
 * as named text on the spouse track — never a dead button (the
 * First 30 Days precedent). */
const SPOUSE_OPEN_VIEWS: ReadonlySet<string> = new Set([
  "benefits", "pcs", "healthhq", "homeloan", "reenlist", "cool", "fedjobs",
]);

const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

export function FirstYearView({
  go,
  spouse = false,
  profileId,
}: {
  go: (view: string) => void;
  spouse?: boolean;
  profileId: number;
}) {
  const queryClient = useQueryClient();
  const queryKey = ["checklist", FIRSTYEAR_CHECKLIST_ID, profileId] as const;
  const stateQ = useQuery({
    queryKey,
    queryFn: () => api.getChecklistState({ checklistId: FIRSTYEAR_CHECKLIST_ID }),
  });
  const checked: ReadonlySet<string> = new Set(stateQ.data?.completed ?? []);
  const toggleM = useMutation({
    mutationFn: (args: { itemKey: string; checked: boolean }) =>
      api.setChecklistItem({ checklistId: FIRSTYEAR_CHECKLIST_ID, itemKey: args.itemKey, checked: args.checked }),
    onMutate: (args) => {
      queryClient.setQueryData<{ completed: string[] }>(queryKey, (old) => {
        const next = new Set(old?.completed ?? []);
        if (args.checked) next.add(args.itemKey);
        else next.delete(args.itemKey);
        return { completed: [...next] };
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
    onError: () => {
      void queryClient.invalidateQueries({ queryKey });
    },
  });

  const doneCount = FIRSTYEAR_TASKS.filter((t) => checked.has(`FY-${t.n}`)).length;
  const toggle = (task: FirstYearTask) =>
    toggleM.mutate({ itemKey: `FY-${task.n}`, checked: !checked.has(`FY-${task.n}`) });

  return (
    <div>
      <div className="mb-3">
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">First Year Out</h2>
        <div aria-hidden="true" className="mt-2 flex h-1 overflow-hidden rounded-full">
          <span className="flex-[2] bg-[var(--accent)]" />
          <span className="flex-1 bg-[var(--accent2)]" />
        </div>
        <p className="mt-1.5 text-sm text-[var(--dim)]">
          {spouse
            ? "Your family's year across the transition — from 12 months before separation to 12 months after, in five phases: 31 checkable tasks, 15 of them deadline-bearing, every deadline printed exactly as its owner publishes it. Your check marks save to your own spouse profile, separate from the member's. The path sequences and points — the detail lives in the linked sections."
            : "Getting out, sequenced: from 12 months before separation to 12 months after, in five phases — 31 checkable tasks, 15 of them deadline-bearing, every deadline printed exactly as its owner publishes it and conflicts printed as conflicts. The path sequences and points — the detail lives in the linked sections."}
        </p>
        <p className="mt-2 text-sm font-bold text-[var(--text)]" role="status">
          {doneCount} of {FIRSTYEAR_TASKS.length} tasks checked
        </p>
      </div>

      {/* ── The deadline spine, as published ── */}
      <section aria-label="The deadline spine" className="mb-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">⏰ The deadline spine — as published</h3>
        <p className="mt-1 text-sm text-[var(--text)]">
          Every standing window in the path, quoted the way its owner publishes it. TAMP prints for eligible
          categories only — routine voluntary ETS does not qualify, and that exclusion prints here and on its
          tasks.
        </p>
        <div className="mt-3 space-y-3">
          {FIRSTYEAR_SPINE.map((s) => (
            <div key={s.title} className="rounded-[var(--radius)] bg-[var(--surface)] p-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{s.title}</p>
              {s.lines.map((l) => (
                <p key={l.slice(0, 40)} className="mt-1 text-sm text-[var(--text)]">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Phases ── */}
      {FIRSTYEAR_PHASES.map((phase) => {
        const tasks = FIRSTYEAR_TASKS.filter((t) => t.phase === phase.key);
        const done = tasks.filter((t) => checked.has(`FY-${t.n}`)).length;
        return (
          <section key={phase.key} aria-label={`First Year Out — ${phase.label}`} className="mb-6">
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
                const on = checked.has(`FY-${task.n}`);
                const key = `FY-${task.n}`;
                return (
                  <article key={key} className={cardCls}>
                    <div className="flex items-start gap-3">
                      <input
                        id={`fy-check-${task.n}`}
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(task)}
                        className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]"
                      />
                      <div className="min-w-0 flex-1">
                        <label htmlFor={`fy-check-${task.n}`} className={`block text-base font-bold text-[var(--text)] ${on ? "line-through" : ""}`}>
                          {task.n}. {task.title}
                        </label>
                        {task.clock ? (
                          <p className="mt-1">
                            <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
                              ⏰ DEADLINE-BEARING
                            </span>
                          </p>
                        ) : null}
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
                            {task.flag}
                          </p>
                        ) : null}
                        {task.n === 26 ? (
                          <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
                            {FIRSTYEAR_B3_FLAG}
                          </p>
                        ) : null}
                        {!spouse || SPOUSE_OPEN_VIEWS.has(task.linkView) ? (
                          <button
                            type="button"
                            aria-label={`Open ${task.linkLabel} for task ${task.n}`}
                            onClick={() => go(task.linkView)}
                            className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)]"
                          >
                            Open {task.linkLabel} →
                          </button>
                        ) : (
                          <p className="mt-3 text-sm text-[var(--dim)]">
                            Detail: {task.linkLabel} (opens on the member&apos;s profile)
                          </p>
                        )}
                        <CardTools
                          cardRef={{
                            section: "firstyear",
                            itemKey: key,
                            title: `First Year Out ${task.n} — ${task.title}`,
                            summary: task.what,
                            source: task.source,
                          }}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className={`${cardCls} mb-4`}>
        <h3 className="font-display text-lg font-bold text-[var(--text)]">The hub that owns the detail</h3>
        <p className="mt-1 text-sm text-[var(--text)]">
          First Year Out sequences the year; the Transition &amp; Jobs hub owns the underlying programs — TAP,
          SkillBridge, job translation, and your rights at work.
        </p>
        {!spouse ? (
          <button type="button" aria-label="Open Transition and Jobs" onClick={() => go("transition")} className={`${btnGhost} mt-3`}>
            Transition &amp; Jobs →
          </button>
        ) : (
          <p className="mt-3 text-sm text-[var(--dim)]">Detail: Transition &amp; Jobs (opens on the member&apos;s profile)</p>
        )}
      </div>

      <p className="text-sm text-[var(--dim)]">
        Researched Nov 9, 2026 from official sources only (installation TAP pages under DoDI 1332.35, VA.gov
        and VA Form 21-526EZ, tricare.mil, the DoD/VA VGLI fact sheet, MyArmyBenefits, Air Force Benefits Fact
        Sheets, and JTR summaries). Standing flag B-3 — the retiree final-move window (1 year vs 3 years) —
        prints both ways on task 30 and is flagged for a direct JTR Chapter 5 pull before launch; your
        transportation office controls the window on your orders.
      </p>
    </div>
  );
}
