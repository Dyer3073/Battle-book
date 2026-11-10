// Fitness Calculators & Checkers — inside the existing Fitness area.
//
// Placement: this area renders INSIDE the Fitness view (member shell)
// and as its own view in the future-member shell (branch calculators
// are future-open, per the front-door scope — fitness prep, the
// Benefits-open precedent). Spouse Fitness access is unchanged: the
// spouse shell has no Fitness view and none is added. The bottom bar
// stays exactly 6 items in every shell; nothing here adds a bar item.
//
// Organization: the house hub-of-square-tiles pattern — three group
// tiles (U.S. TESTS / SOF & ASSESSMENT CHECKERS / ALLIED TESTS), each
// opening to its test list, each calculator/checker its own screen.
//
// Content: the fitness pack (fitness.md) is the source of truth; Part B
// standards are the specops pack's captured tables. Every entry carries
// a dated source note naming its governing document + version/date and
// the standing unofficial line. Ship statuses are the pack's verdicts
// as resolved by the build-time pulls (recorded in DATA-PLAN.md):
// CALCULATOR only where a complete verified table backs it (USMC,
// reused from the Battle Buddy verification), CHECKER where the pack's
// verified anchors or a complete build-time capture back it, PENDING
// where the governing tables were not captured, DESCRIPTION-ONLY where
// standards are not openly published. Flags render as visible ⚠ boxes
// — both figures, never blended.

import { useEffect, useState, type ReactNode } from "react";
import { branchesNamedIn, useScopeProfile } from "./scope";
import { CardTools } from "./binder";
import { HubBackButton, HubTileGrid } from "./HubTiles";
import { FlagBox } from "./NewSections";
import {
  AF_ANCHORS_LT25,
  AFT_ANCHORS_17_21,
  AFT_COMBAT_MOS,
  AUS_BFA,
  AUS_BFA_BANDS,
  AUS_PFA,
  CG_ACCESSION,
  NAVY_CFA_RATINGS,
  NAVY_PRT_ANCHORS,
  NZ_RFL,
  NZ_RFL_BANDS,
  PH_CATS_REPS,
  PH_CATS_RUN,
  PH_PUSHUPS,
  PH_RUN,
  PH_SITUPS,
  SF_WALK_BANDS,
  SF_WALK_TABLE,
  USMC_AGE_GROUPS,
  fmtTime,
  parseTimeToSeconds,
  scoreCft,
  scorePft,
  sfCategory,
  sfRescale,
  whtrPoints,
  type UsmcAgeGroup,
  type UsmcSex,
} from "./fitnesscalc";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

export const UNOFFICIAL_LINE =
  "Unofficial calculator — your official score is the one your service records.";

export type CalcStatus = "CALCULATOR" | "CHECKER" | "PENDING" | "DESCRIPTION-ONLY";

export function StatusBadge({ status }: { status: CalcStatus }) {
  return (
    <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--text)]">
      {status}
    </span>
  );
}

/** The dated source note every calculator/checker carries. */
export function SourceNote({ note, source }: { note: string; source: string }) {
  return (
    <div className="mt-4 border-t border-[var(--border)] pt-3">
      <p className="text-sm text-[var(--dim)]">
        <strong className="text-[var(--text)]">Source:</strong> {note}
      </p>
      <p className="mt-1 text-sm font-semibold text-[var(--text)]">{UNOFFICIAL_LINE}</p>
      <CardTools
        cardRef={{ section: "fitness", itemKey: note.slice(0, 60), title: note.slice(0, 60), summary: note, source }}
      />
    </div>
  );
}

function CalcShell({
  title,
  status,
  intro,
  children,
  sourceNote,
  source,
}: {
  title: string;
  status: CalcStatus;
  intro: string;
  children: ReactNode;
  sourceNote: string;
  source: string;
}) {
  return (
    <article className={cardCls}>
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-xl font-bold text-[var(--text)]">{title}</h4>
        <StatusBadge status={status} />
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{intro}</p>
      {children}
      <SourceNote note={sourceNote} source={source} />
    </article>
  );
}

function NumField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <input id={id} aria-label={label} type="number" min={0} inputMode="numeric" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inputCls} />
    </div>
  );
}

function TimeField({
  id,
  label,
  value,
  onChange,
  placeholder = "m:ss",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <input id={id} aria-label={label} type="text" inputMode="numeric" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inputCls} />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <select id={id} aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Verdict({ pass, text }: { pass: boolean | null; text: string }) {
  if (pass === null) return null;
  return (
    <p role="status" className={`mt-3 rounded-[var(--radius)] p-3 text-base font-bold ${pass ? "bg-[var(--surface2)] text-[var(--accent-word)]" : "bg-[var(--red-bg)] text-[var(--red)]"}`}>
      {text}
    </p>
  );
}

/* ------------------------- generic lines checker ------------------------ */

export type CheckField = {
  key: string;
  label: string;
  kind: "reps" | "time" | "number";
  /** "high": at or above the line passes. "low": at or below passes. */
  better: "high" | "low";
  /** Lines in display order, e.g. Minimum then Elevated. Seconds for time. */
  lines: { name: string; value: number }[];
  unit?: string;
};

function fieldMeets(f: CheckField, raw: string, lineValue: number): boolean | null {
  if (f.kind === "time") {
    const s = parseTimeToSeconds(raw);
    if (s === null) return null;
    return f.better === "low" ? s <= lineValue : s >= lineValue;
  }
  if (raw.trim() === "") return null;
  const n = Number(raw);
  if (Number.isNaN(n)) return null;
  return f.better === "low" ? n <= lineValue : n >= lineValue;
}

function lineLabel(f: CheckField, value: number): string {
  return f.kind === "time" ? fmtTime(value) : `${value}${f.unit ?? ""}`;
}

/** A threshold checker over named lines (Minimum / Elevated / role…). */
export function LinesChecker({
  idPrefix,
  fields,
  extraVerdict,
}: {
  idPrefix: string;
  fields: CheckField[];
  extraVerdict?: (values: Record<string, string>) => string | null;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const firstLine = fields[0]?.lines[0];
  const allEntered = fields.every((f) => fieldMeets(f, values[f.key] ?? "", f.lines[0]?.value ?? 0) !== null);
  const allFirst = allEntered && fields.every((f) => fieldMeets(f, values[f.key] ?? "", f.lines[0]?.value ?? 0) === true);
  const extra = extraVerdict ? extraVerdict(values) : null;
  return (
    <div className="mt-3">
      <div className="grid grid-cols-2 gap-3">
        {fields.map((f) =>
          f.kind === "time" ? (
            <TimeField key={f.key} id={`${idPrefix}-${f.key}`} label={f.label} value={values[f.key] ?? ""} onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))} />
          ) : (
            <NumField key={f.key} id={`${idPrefix}-${f.key}`} label={f.label} value={values[f.key] ?? ""} onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))} />
          ),
        )}
      </div>
      <div className="mt-3 space-y-2">
        {fields.map((f) => {
          const raw = values[f.key] ?? "";
          return (
            <div key={f.key} className="rounded bg-[var(--surface2)] px-3 py-2">
              <p className="text-sm font-bold text-[var(--text)]">{f.label}</p>
              <p className="text-sm text-[var(--text)]">
                {f.lines.map((l) => {
                  const met = fieldMeets(f, raw, l.value);
                  return (
                    <span key={l.name} className="mr-3">
                      {l.name} {lineLabel(f, l.value)}:{" "}
                      <strong>{met === null ? "—" : met ? "MET ✓" : "not met ✗"}</strong>
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
      {firstLine ? (
        <Verdict
          pass={allEntered ? allFirst && extra === null : null}
          text={
            allFirst && extra === null
              ? `Meets the ${firstLine.name} line on every event.`
              : extra ?? `Does not yet meet the ${firstLine.name} line on every event — see the event rows above.`
          }
        />
      ) : null}
    </div>
  );
}

/* ================================ U.S. TESTS ============================ */

function UsmcCalc() {
  const [tab, setTab] = useState<"pft" | "cft">("pft");
  const [sex, setSex] = useState<UsmcSex>("male");
  const [ageGroup, setAgeGroup] = useState<UsmcAgeGroup>("21-25");
  const [combatArms, setCombatArms] = useState(false);
  const [upper, setUpper] = useState<"pullups" | "pushups">("pullups");
  const [upperReps, setUpperReps] = useState("");
  const [plank, setPlank] = useState("");
  const [cardio, setCardio] = useState<"run" | "row">("run");
  const [cardioTime, setCardioTime] = useState("");
  const [mtc, setMtc] = useState("");
  const [acl, setAcl] = useState("");
  const [manuf, setManuf] = useState("");

  const plankSec = parseTimeToSeconds(plank);
  const cardioSec = parseTimeToSeconds(cardioTime);
  const pftReady = upperReps !== "" && plankSec !== null && cardioSec !== null;
  const pft = pftReady
    ? scorePft({ sex, ageGroup, upper, upperReps: Number(upperReps), plankSeconds: plankSec, cardio, cardioSeconds: cardioSec, combatArms })
    : null;
  const mtcSec = parseTimeToSeconds(mtc);
  const manufSec = parseTimeToSeconds(manuf);
  const cftReady = mtcSec !== null && acl !== "" && manufSec !== null;
  const cft = cftReady ? scoreCft({ sex, ageGroup, mtcSeconds: mtcSec, aclReps: Number(acl), manufSeconds: manufSec }) : null;
  const result = tab === "pft" ? pft : cft;

  return (
    <CalcShell
      title="Marine Corps — PFT & CFT Calculator"
      status="CALCULATOR"
      intro="Sea-level tables only, labeled as such. PFT: pull-ups OR push-ups (the push-up option is capped at 70 points), plank (one table for all ages and sexes — crunches are superseded and no crunch table ships), and the 3-mile run or the 5,000 m row alternate event. CFT: Movement to Contact, Ammunition Lift, Maneuver Under Fire. Pass = 150+ total AND at least 40 points in every event. Classes: 1st 235–300 · 2nd 200–234 · 3rd 150–199."
      sourceNote="MCO 6100.13A W/ADMIN CH-5, tables via fitness.marines.mil (sea level). Tables verified in the Battle Buddy build; the one recorded discrepancy cell (male 21–25 pull-ups) was rechecked against the published worked example at this build — the published example controls and this calculator reproduces its 227 total. Overlay: MARADMIN 613/25 (Dec 18, 2025)."
      source="MCO 6100.13A W/ADMIN CH-5 — fitness.marines.mil"
    >
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose PFT or CFT">
        {(["pft", "cft"] as const).map((t) => (
          <button key={t} type="button" aria-label={`Score the ${t.toUpperCase()}`} aria-pressed={tab === t} onClick={() => setTab(t)} className={`min-h-11 rounded-full px-4 text-sm font-bold ${tab === t ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="usmc-sex" label="Sex (table)" value={sex} onChange={(v) => setSex(v as UsmcSex)} options={["male", "female"]} />
        <SelectField id="usmc-age" label="Age group" value={ageGroup} onChange={(v) => setAgeGroup(v as UsmcAgeGroup)} options={USMC_AGE_GROUPS} />
      </div>

      {tab === "pft" ? (
        <>
          <div className="mt-3 rounded bg-[var(--surface2)] p-3">
            <label htmlFor="usmc-combat" className="flex items-start gap-2 text-sm font-semibold text-[var(--text)]">
              <input id="usmc-combat" aria-label="Combat-arms PMOS — MARADMIN 613/25" type="checkbox" checked={combatArms} onChange={(e) => setCombatArms(e.target.checked)} className="mt-1" />
              <span>Combat-arms PMOS — MARADMIN 613/25</span>
            </label>
            {combatArms ? (
              <p className="mt-2 text-sm text-[var(--text)]">
                From Jan 1, 2026, combat-arms PMOS Marines score on the <strong>MALE tables regardless of sex</strong> with a <strong>210-point total floor</strong>. Passing the standard PFT but totaling under 210 means remedial PT, and may bring PMOS reclassification or a promotion restriction; the MARADMIN&apos;s interim guidance states no adverse or punitive actions until further guidance. This overlay applies to the PFT only — no CFT change was published.
              </p>
            ) : (
              <p className="mt-2 text-sm text-[var(--dim)]">Off: standard tables and the 150-point floor. Turn on if you hold a combat-arms PMOS (MARADMIN 613/25, from Jan 1, 2026).</p>
            )}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <SelectField id="usmc-upper" label="Upper-body event" value={upper} onChange={(v) => setUpper(v as "pullups" | "pushups")} options={["pullups", "pushups"]} />
            <NumField id="usmc-upper-reps" label={upper === "pullups" ? "Pull-ups (reps)" : "Push-ups (reps, 70-pt cap)"} value={upperReps} onChange={setUpperReps} />
            <TimeField id="usmc-plank" label="Plank (m:ss)" value={plank} onChange={setPlank} />
            <SelectField id="usmc-cardio" label="Cardio event" value={cardio} onChange={(v) => setCardio(v as "run" | "row")} options={["run", "row"]} />
            <TimeField id="usmc-cardio-time" label={cardio === "run" ? "3-mile run (m:ss)" : "5,000 m row (m:ss)"} value={cardioTime} onChange={setCardioTime} />
          </div>
        </>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-3">
          <TimeField id="usmc-mtc" label="Movement to Contact (m:ss)" value={mtc} onChange={setMtc} />
          <NumField id="usmc-acl" label="Ammunition Lift (reps)" value={acl} onChange={setAcl} />
          <TimeField id="usmc-manuf" label="Maneuver Under Fire (m:ss)" value={manuf} onChange={setManuf} />
        </div>
      )}

      {result ? (
        <div className="mt-4" aria-live="polite">
          <div className="space-y-2">
            {result.events.map((e) => (
              <div key={e.key} className="flex flex-wrap items-center justify-between gap-2 rounded bg-[var(--surface2)] px-3 py-2">
                <span className="text-base text-[var(--text)]"><strong>{e.label}</strong> — {e.performance} <span className="text-sm text-[var(--dim)]">({e.minLabel})</span></span>
                <span className="font-display text-lg font-bold text-[var(--text)]">{e.points} pts {e.meetsMin ? "" : "· below minimum"}</span>
              </div>
            ))}
          </div>
          <p className="font-display mt-3 text-2xl font-bold text-[var(--text)]">
            Total {result.total} / 300{result.scoreClass ? ` — ${result.scoreClass}` : ""}
          </p>
          <Verdict
            pass={result.passed}
            text={
              result.passed
                ? combatArms && tab === "pft"
                  ? `PASS — meets the MARADMIN 613/25 combat-arms standard (male tables, 210 floor)${result.total >= 210 ? "" : ""}.`
                  : "PASS — 150+ total with every event at or above its minimum."
                : combatArms && tab === "pft" && result.total >= 150 && result.total < 210 && result.events.every((e) => e.meetsMin)
                  ? "Passes the standard PFT but totals under the MARADMIN 613/25 combat-arms floor of 210 — remedial PT applies; PMOS reclassification / promotion restriction possible (interim: no adverse or punitive actions until further guidance)."
                  : "FAIL — a pass needs 150+ total AND at least 40 points in every event."
            }
          />
        </div>
      ) : (
        <p className="mt-3 text-sm text-[var(--dim)]">Enter every event to score the test. Known-case check: male 31–35 CFT — MTC 2:55, 80 ammo lifts, MANUF 2:35 — totals 225, 2nd Class.</p>
      )}
    </CalcShell>
  );
}

function AftChecker() {
  const [column, setColumn] = useState<"MC" | "F">("MC");
  const [combat, setCombat] = useState(false);
  const [mdl, setMdl] = useState("");
  const [hrp, setHrp] = useState("");
  const [sdc, setSdc] = useState("");
  const [plk, setPlk] = useState("");
  const [run, setRun] = useState("");
  const col = combat ? "MC" : column;
  const a = AFT_ANCHORS_17_21[col];
  const sdcSec = parseTimeToSeconds(sdc);
  const plkSec = parseTimeToSeconds(plk);
  const runSec = parseTimeToSeconds(run);
  const rows: { label: string; got: string; line60: string; line100: string; met60: boolean | null; met100: boolean | null }[] = [
    { label: "3-rep max deadlift (lb)", got: mdl, line60: String(a.mdl[0]), line100: String(a.mdl[1]), met60: mdl === "" ? null : Number(mdl) >= a.mdl[0], met100: mdl === "" ? null : Number(mdl) >= a.mdl[1] },
    { label: "Hand-release push-ups (reps)", got: hrp, line60: String(a.hrp[0]), line100: String(a.hrp[1]), met60: hrp === "" ? null : Number(hrp) >= a.hrp[0], met100: hrp === "" ? null : Number(hrp) >= a.hrp[1] },
    { label: "Sprint-drag-carry", got: sdc, line60: fmtTime(a.sdc[0]), line100: fmtTime(a.sdc[1]), met60: sdcSec === null ? null : sdcSec <= a.sdc[0], met100: sdcSec === null ? null : sdcSec <= a.sdc[1] },
    { label: "Plank", got: plk, line60: fmtTime(a.plk[0]), line100: fmtTime(a.plk[1]), met60: plkSec === null ? null : plkSec >= a.plk[0], met100: plkSec === null ? null : plkSec >= a.plk[1] },
    { label: "2-mile run", got: run, line60: fmtTime(a.run[0]), line100: fmtTime(a.run[1]), met60: runSec === null ? null : runSec <= a.run[0], met100: runSec === null ? null : runSec <= a.run[1] },
  ];
  const allEntered = rows.every((r) => r.met60 !== null);
  const all60 = allEntered && rows.every((r) => r.met60);
  return (
    <CalcShell
      title="Army — AFT Standards Checker"
      status="CHECKER"
      intro="The AFT is the Army's test of record since Jun 1, 2025 (Army Directive 2025-06) — it replaced the ACFT, and no ACFT content ships here. Five events: 3-rep max deadlift, hand-release push-up (Army extension), sprint-drag-carry, plank, 2-mile run. General standard: 60+ points in EVERY event AND 300+ total. Combat standard: the M|C column regardless of sex, 60+ per event, 350+ total — effective Jan 1, 2026 for Regular Army / AGR / initial-entry training and Jun 1, 2026 for USAR / ARNG. Alternate aerobic events for profiled Soldiers score pass at 60 points (per the pack, to be verified against Annex B with the full pull). This checker tests your raw performances against the captured 17–21 anchor lines; the full points tables are a recorded pre-launch follow-up."
      sourceNote="HQDA EXORD 218-25 Annex B — AFT Scoring Scales (approved May 15, 2025, effective Jun 1, 2025), under Army Directive 2025-06. Build-time pull: the official EXORD/Annex B document was located on api.army.mil, but a complete verified row-for-row encode of all 101 point rows × 20 columns could not be completed — so this ships as a CHECKER on the pack's anchor rows, labeled provisional, and the full pull is recorded as a pre-launch follow-up in DATA-PLAN.md. No points are computed."
      source="HQDA EXORD 218-25 Annex B (May 15, 2025)"
    >
      <FlagBox text="PROVISIONAL CAPTURE — the 60-point and 100-point lines below are the research pack's anchor rows for the 17–21 band, resting on secondary transcriptions of the official Scoring Scales, to be re-verified against Annex B. Only the 17–21 band was captured; other age bands are not offered rather than reconstructed." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="aft-col" label="Scoring column" value={column} onChange={(v) => setColumn(v as "MC" | "F")} options={["MC", "F"]} />
        <div>
          <span className={labelCls}>Standard</span>
          <label htmlFor="aft-combat" className="flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <input id="aft-combat" aria-label="Combat standard — one of the 21 combat MOSs" type="checkbox" checked={combat} onChange={(e) => setCombat(e.target.checked)} />
            Combat standard (21 combat MOSs)
          </label>
        </div>
      </div>
      <p className="mt-2 text-sm text-[var(--text)]">
        Columns: <strong>M|C</strong> = all male Soldiers AND all Soldiers of any sex in the 21 combat MOSs. <strong>F</strong> = female Soldiers in combat-enabling specialties. {combat ? "Combat standard selected: the M|C column applies regardless of sex, with the 350-total rule." : "General standard: 300-total rule."} The 21 combat MOSs: {AFT_COMBAT_MOS.join(" · ")}.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <NumField id="aft-mdl" label="Deadlift — 3-rep max (lb)" value={mdl} onChange={setMdl} />
        <NumField id="aft-hrp" label="Hand-release push-ups (reps)" value={hrp} onChange={setHrp} />
        <TimeField id="aft-sdc" label="Sprint-drag-carry (m:ss)" value={sdc} onChange={setSdc} />
        <TimeField id="aft-plk" label="Plank (m:ss)" value={plk} onChange={setPlk} />
        <TimeField id="aft-run" label="2-mile run (m:ss)" value={run} onChange={setRun} />
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="rounded bg-[var(--surface2)] px-3 py-2 text-sm text-[var(--text)]">
            <strong>{r.label}</strong> — 60-pt line {r.line60}: {r.met60 === null ? "—" : r.met60 ? "MET ✓" : "not met ✗"} · 100-pt line {r.line100}: {r.met100 === null ? "—" : r.met100 ? "MET ✓" : "not met ✗"}
          </div>
        ))}
      </div>
      <Verdict
        pass={allEntered ? all60 : null}
        text={all60 ? `Every event meets its 60-point anchor line — the per-event half of the ${combat ? "combat (350 total)" : "general (300 total)"} standard. Your total itself can only be scored from the full Annex B tables (follow-up).` : "At least one event is below its 60-point anchor line — under the AFT rules that fails the test regardless of total."}
      />
    </CalcShell>
  );
}

function NavyPrtChecker() {
  const bands = Object.keys(NAVY_PRT_ANCHORS);
  const [band, setBand] = useState(bands[0] ?? "Male 17–19");
  const [pu, setPu] = useState("");
  const [plank, setPlank] = useState("");
  const [cardioKind, setCardioKind] = useState<"run" | "row" | "swim500" | "swim450">("run");
  const [cardioTime, setCardioTime] = useState("");
  const row = NAVY_PRT_ANCHORS[band];
  if (!row) return null;
  const plankSec = parseTimeToSeconds(plank);
  const cardioSec = parseTimeToSeconds(cardioTime);
  const cardio45 = cardioKind === "run" ? row.run45 : cardioKind === "row" ? row.row45 : cardioKind === "swim500" ? row.swim50045 : row.swim45045;
  const cardio100 = cardioKind === "run" ? row.run100 : cardioKind === "row" ? row.row100 : cardioKind === "swim500" ? row.swim500100 : row.swim450100;
  const puMet = pu === "" ? null : Number(pu) >= row.pu45;
  const plankMet = plankSec === null ? null : plankSec >= row.plank45;
  const cardioMet = cardio45 === null || cardioSec === null ? null : cardioSec <= cardio45;
  const allMet = puMet !== null && plankMet !== null && cardioMet !== null ? puMet && plankMet && cardioMet : null;
  const at100 = (v: boolean | null) => (v === null ? "—" : v ? "MET ✓" : "not met ✗");
  const pu100 = row.pu100 === null || pu === "" ? null : Number(pu) >= row.pu100;
  const plank100 = row.plank100 === null || plankSec === null ? null : plankSec >= row.plank100;
  const cardio100Met = cardio100 === null || cardioSec === null ? null : cardioSec <= cardio100;
  return (
    <CalcShell
      title="Navy — PRT Standards Checker"
      status="CHECKER"
      intro="Fixed event order: 2-minute push-ups, forearm plank, then ONE cardio option — 1.5-mile run, 2-km row, 500-yard swim, or 450-meter swim (the four modalities the Dec 2025 Guide-5A tables carry; older material also describes a stationary bike — the four encoded here are what Guide-5A carries, per the pack). Scoring is a 12-row threshold table (100/95/90 Outstanding, 85/80/75 Excellent, 70/65/60 Good, 55/50 Satisfactory, 45 Probationary) — best row met, no interpolation. Pass = 45+ in EVERY event; the overall is the average of the three event scores, categorized. This checker tests the captured pass line (45) and, where captured, the Outstanding High line (100)."
      sourceNote="OPNAVINST 6110.1L CH-1 with PRP Guide-5A (Dec 2025), Table 4-1 (below 5,000 ft). Build-time pull: the Dec 2025 Guide-5A itself could not be surfaced from MyNavyHR in this build (search returned older material and secondary calculators only), and coding from the Jan 2025 Guide 5 is barred even where cells reportedly match — so the full 12-row points calculator is PENDING the Guide-5A pull (recorded in DATA-PLAN.md) and this checker runs on the pack's captured anchor rows only, labeled provisional. Table 4-2 (5,000 ft+) was likewise not pulled. No BCA figures are printed — none were verified in PRP Guide-1 during this build."
      source="PRP Guide-5A (Dec 2025), Table 4-1 — captured anchor rows"
    >
      <FlagBox text="SUPERSEDED LINE — the pass line is now 45 points (Probationary) in every event. The old “Satisfactory Medium = 50” pass line is SUPERSEDED under OPNAVINST 6110.1L / Guide-5A and is not used anywhere in this checker." />
      <FlagBox text="PROVISIONAL CAPTURE — only the bands and lines the research pack captured from Guide-5A are offered (45-point lines for Male 17–19, Male 20–24, Male 25–29, Female 20–24; 100-point lines for Male 17–19 and Male 25–29). Bands and cells not captured are not offered rather than reconstructed." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="prt-band" label="Age band / sex (captured rows)" value={band} onChange={setBand} options={bands} />
        <NumField id="prt-pu" label={`Push-ups, 2 min (45-pt line: ${row.pu45})`} value={pu} onChange={setPu} />
        <TimeField id="prt-plank" label={`Forearm plank (45-pt line: ${fmtTime(row.plank45)})`} value={plank} onChange={setPlank} />
        <SelectField id="prt-cardio" label="Cardio option" value={cardioKind} onChange={(v) => setCardioKind(v as typeof cardioKind)} options={["run", "row", "swim500", "swim450"]} />
        <TimeField id="prt-cardio-time" label={`Cardio time (45-pt line: ${cardio45 === null ? "not captured for this band" : fmtTime(cardio45)})`} value={cardioTime} onChange={setCardioTime} />
      </div>
      <div className="mt-3 space-y-2 text-sm text-[var(--text)]">
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Push-ups — 45 line: {puMet === null ? "—" : puMet ? "MET ✓" : "not met ✗"}{row.pu100 !== null ? ` · 100 line (${row.pu100}): ${at100(pu100)}` : ""}</p>
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Plank — 45 line: {plankMet === null ? "—" : plankMet ? "MET ✓" : "not met ✗"}{row.plank100 !== null ? ` · 100 line (${fmtTime(row.plank100)}): ${at100(plank100)}` : ""}</p>
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Cardio — 45 line: {cardioMet === null ? "—" : cardioMet ? "MET ✓" : "not met ✗"}{cardio100 !== null ? ` · 100 line (${fmtTime(cardio100)}): ${at100(cardio100Met)}` : ""}</p>
      </div>
      <Verdict pass={allMet} text={allMet ? "Meets the 45-point Probationary line in every event — the PRT pass rule. Your exact points and overall category come from the full Guide-5A table (pending pull)." : "Below the 45-point line in at least one event — under the current rules that fails the PRT regardless of the other events."} />
      <p className="mt-2 text-sm text-[var(--dim)]">Anchor check (Male 17–19): Probationary = 42 push-ups / 1:11 plank / 12:45 run / 9:20 row / 12:45 500-yd / 12:35 450-m. Outstanding High = 92 / 3:24 / 8:15 / 7:00 / 6:30 / 6:20.</p>
    </CalcShell>
  );
}

function NavyCfaPending({ onOpenSof }: { onOpenSof?: () => void }) {
  return (
    <CalcShell
      title="Navy — Combat Fitness Assessment (CFA)"
      status="PENDING"
      intro="A SEPARATE, in-service test for designated combat-arms Sailors (NAVADMIN 264/25) — not an entry screen. Covered ratings/designators: SEAL, EOD, SWCC, and Fleet Diver communities. Combat-arms Sailors take one PFA + one CFA per year instead of two PFAs (reservists on under-12-month orders: at least one CFA per year). CFA events: 800 m swim with fins; push-ups weighted 20 lb; pull-ups weighted 20 lb; 1-mile run weighted 20 lb."
      sourceNote="NAVADMIN 264/25 (Dec 2025); scoring tables live in PRP Guide-5B (Jun 2026). Build-time pull: Guide-5B was NOT captured (attempted from MyNavyHR; not surfaced) — so no checker ships and this entry stands as DESCRIPTION + scoring tables pending. A secondary max-line for these events circulates in press coverage; it is BARRED and is never printed or coded here."
      source="NAVADMIN 264/25; PRP Guide-5B (Jun 2026) — not captured"
    >
      <p className="mt-3 rounded bg-[var(--amber-bg)] p-3 text-base font-semibold text-[var(--amber)]">Scoring tables pending — PRP Guide-5B (Jun 2026) has not been captured from an official source, so there are no score inputs here and no numbers to check against. When Guide-5B is pulled complete and verified, a checker may ship; until then this entry carries the events and eligibility only.</p>
      <p className="mt-2 text-sm text-[var(--text)]">Covered ratings/designators: {NAVY_CFA_RATINGS}</p>
      {onOpenSof ? (
        <button type="button" aria-label="Open the SOF and assessment checkers" onClick={onOpenSof} className={`${btnGhost} mt-3`}>
          See the entry-screen PST checkers (SEAL / SWCC / EOD) →
        </button>
      ) : null}
    </CalcShell>
  );
}

function AfPfraChecker() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [waist, setWaist] = useState("");
  const [height, setHeight] = useState("");
  const [cardioKind, setCardioKind] = useState<"run" | "hamr">("run");
  const [cardioVal, setCardioVal] = useState("");
  const [strengthKind, setStrengthKind] = useState<"pu" | "hrp">("pu");
  const [strengthVal, setStrengthVal] = useState("");
  const [coreKind, setCoreKind] = useState<"su" | "clrc" | "plank">("su");
  const [coreVal, setCoreVal] = useState("");
  const a = AF_ANCHORS_LT25[sex];
  const ratio = waist !== "" && height !== "" && Number(height) > 0 ? Number(waist) / Number(height) : null;
  const w = ratio !== null ? whtrPoints(ratio) : null;
  const cardioAnchor = cardioKind === "run" ? a.run : a.hamr;
  const cardioSec = cardioKind === "run" ? parseTimeToSeconds(cardioVal) : null;
  const cardioMet = cardioKind === "run" ? (cardioSec === null ? null : cardioSec <= cardioAnchor[1]) : cardioVal === "" ? null : Number(cardioVal) >= cardioAnchor[1];
  const cardioMax = cardioKind === "run" ? (cardioSec === null ? null : cardioSec <= cardioAnchor[0]) : cardioVal === "" ? null : Number(cardioVal) >= cardioAnchor[0];
  const strengthAnchor = strengthKind === "pu" ? a.pu : a.hrp;
  const strengthMet = strengthVal === "" ? null : Number(strengthVal) >= strengthAnchor[1];
  const strengthMax = strengthVal === "" ? null : Number(strengthVal) >= strengthAnchor[0];
  const coreAnchor = coreKind === "su" ? a.su : coreKind === "clrc" ? a.clrc : a.plank;
  const coreSec = coreKind === "plank" ? parseTimeToSeconds(coreVal) : null;
  const coreMet = coreKind === "plank" ? (coreSec === null ? null : coreSec >= coreAnchor[1]) : coreVal === "" ? null : Number(coreVal) >= coreAnchor[1];
  const coreMax = coreKind === "plank" ? (coreSec === null ? null : coreSec >= coreAnchor[0]) : coreVal === "" ? null : Number(coreVal) >= coreAnchor[0];
  const met = (v: boolean | null) => (v === null ? "—" : v ? "MET ✓" : "not met ✗");
  return (
    <CalcShell
      title="Air Force — PFRA Checker (WHtR scored)"
      status="CHECKER"
      intro="The PFRA (AFMAN 36-2905, Mar 24, 2026) replaced the 2022 PFA — the old 1.5-mile / 60-point structure is GONE and ships nowhere here. Components: Cardiorespiratory 50 (2-mile run OR 20-m HAMR), waist-to-height body composition 20 (scored exactly from the universal chart below), Strength 15 (1-min push-ups OR 2-min hand-release push-ups), Core 15 (1-min sit-ups OR 2-min cross-leg reverse crunches OR forearm plank). Pass = composite 75+ AND every component minimum (cardio 35, strength 2.5, core 2.5 — below a minimum zeroes the component and fails the test). Categories: Excellent 90+ / Satisfactory 75–89.9 / Unsatisfactory under 75 or any missed minimum. Diagnostic testing ran Mar 1–Jun 30, 2026; official scored testing runs from Jul 1, 2026. The WHtR component below is a full calculator; the event components are checked against the captured under-25 anchor lines."
      sourceNote="AFMAN 36-2905 (Mar 24, 2026); AFPC Final PFRA Scoring Charts (effective Mar 1, 2026, corrected Mar 17, 2026). Build-time pull: the official charts PDF was located on afpc.af.mil, but a complete verified row-for-row encode of its step tables could not be completed in this build — so the event components ship as a CHECKER (WHtR calculator + component-minimum/pass logic + under-25 anchor thresholds labeled provisional) and the full charts pull is recorded as a follow-up in DATA-PLAN.md. The reported AFSPECWAR/EOD under-25-male-column rule is NOT shipped — the charts pull did not confirm it."
      source="AFPC Final PFRA Scoring Charts (eff. Mar 1, 2026, corr. Mar 17, 2026)"
    >
      <FlagBox text="PROVISIONAL CAPTURE — the event anchor lines below are the pack's under-25 rows from secondary transcriptions of the AFPC charts (full-points performance / minimum performance). Other age bands are not offered rather than reconstructed. The WHtR chart is the pack's transcribed universal chart and ships exactly." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="af-sex" label="Sex (anchor column, under-25)" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <NumField id="af-waist" label="Waist circumference (in)" value={waist} onChange={setWaist} />
        <NumField id="af-height" label="Height (in)" value={height} onChange={setHeight} />
      </div>
      {ratio !== null && w ? (
        <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">
          WHtR = {ratio.toFixed(3)} → truncated {(Math.floor(ratio * 100) / 100).toFixed(2)} → <strong>{w.points} of 20 points</strong>
          {w.componentFailure ? " — AND automatic component failure (ratio 0.60 or above scores 0 and fails the component, which fails the test)." : ""}
        </p>
      ) : (
        <p className="mt-3 text-sm text-[var(--dim)]">Enter waist and height to score the WHtR component (universal chart: 0.49 or below → 20; 0.50 → 19; 0.51 → 18; 0.52 → 17; 0.53 → 16; 0.54 → 15; 0.55 → 12.5; 0.56 → 10; 0.57 → 7.5; 0.58 → 5; 0.59 → 2.5; 0.60 or above → 0 + component failure).</p>
      )}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="af-cardio-kind" label="Cardio event" value={cardioKind} onChange={(v) => setCardioKind(v as "run" | "hamr")} options={["run", "hamr"]} />
        {cardioKind === "run" ? (
          <TimeField id="af-cardio" label={`2-mile run (min line ${fmtTime(cardioAnchor[1])} = 35 pts)`} value={cardioVal} onChange={setCardioVal} />
        ) : (
          <NumField id="af-cardio" label={`20-m HAMR shuttles (min line ${cardioAnchor[1]})`} value={cardioVal} onChange={setCardioVal} />
        )}
        <SelectField id="af-strength-kind" label="Strength event" value={strengthKind} onChange={(v) => setStrengthKind(v as "pu" | "hrp")} options={["pu", "hrp"]} />
        <NumField id="af-strength" label={`${strengthKind === "pu" ? "Push-ups, 1 min" : "Hand-release push-ups, 2 min"} (min ${strengthAnchor[1]})`} value={strengthVal} onChange={setStrengthVal} />
        <SelectField id="af-core-kind" label="Core event" value={coreKind} onChange={(v) => setCoreKind(v as "su" | "clrc" | "plank")} options={["su", "clrc", "plank"]} />
        {coreKind === "plank" ? (
          <TimeField id="af-core" label={`Forearm plank (min ${fmtTime(coreAnchor[1])})`} value={coreVal} onChange={setCoreVal} />
        ) : (
          <NumField id="af-core" label={`${coreKind === "su" ? "Sit-ups, 1 min" : "Cross-leg reverse crunches, 2 min"} (min ${coreAnchor[1]})`} value={coreVal} onChange={setCoreVal} />
        )}
      </div>
      <div className="mt-3 space-y-2 text-sm text-[var(--text)]">
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Cardio minimum (35-pt line): {met(cardioMet)} · full 50-pt line: {met(cardioMax)}</p>
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Strength minimum line: {met(strengthMet)} · full 15-pt line: {met(strengthMax)}</p>
        <p className="rounded bg-[var(--surface2)] px-3 py-2">Core minimum line: {met(coreMet)} · full 15-pt line: {met(coreMax)}</p>
      </div>
      <p className="mt-2 text-sm text-[var(--dim)]">Under-25 anchors ({sex}): run {fmtTime(a.run[0])} max / {fmtTime(a.run[1])} min · HAMR {a.hamr[0]} / {a.hamr[1]} · push-ups {a.pu[0]} / {a.pu[1]} · hand-release {a.hrp[0]} / {a.hrp[1]} · sit-ups {a.su[0]} / {a.su[1]} · reverse crunches {a.clrc[0]} / {a.clrc[1]} · plank {fmtTime(a.plank[0])} / {fmtTime(a.plank[1])}. A full composite needs the complete AFPC step tables (follow-up) — this checker verifies the WHtR score and whether each event clears its minimum and maximum anchor lines.</p>
    </CalcShell>
  );
}

function SfHpa() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [band, setBand] = useState<string>("30–39");
  const [walk, setWalk] = useState("");
  const [cardio, setCardio] = useState("");
  const [endurance, setEndurance] = useState("");
  const [strength, setStrength] = useState("");
  const [exempt, setExempt] = useState<"none" | "cardio" | "endurance" | "strength">("none");
  const walkSec = parseTimeToSeconds(walk);
  const walkLine = SF_WALK_TABLE[sex][band] ?? 0;
  const walkPass = walkSec === null ? null : walkSec <= walkLine;
  const parts: { name: string; earned: number | null; max: number; isExempt: boolean }[] = [
    { name: "Cardiorespiratory", earned: cardio === "" ? null : Number(cardio), max: 60, isExempt: exempt === "cardio" },
    { name: "Muscular Endurance", earned: endurance === "" ? null : Number(endurance), max: 20, isExempt: exempt === "endurance" },
    { name: "Muscular Strength", earned: strength === "" ? null : Number(strength), max: 20, isExempt: exempt === "strength" },
  ];
  const assessed = parts.filter((p) => !p.isExempt);
  const allAssessedEntered = assessed.every((p) => p.earned !== null);
  const earnedSum = assessed.reduce((s, p) => s + (p.earned ?? 0), 0);
  const maxAssessed = assessed.reduce((s, p) => s + p.max, 0);
  const composite = allAssessedEntered && maxAssessed > 0 ? sfRescale(earnedSum, maxAssessed) : null;
  // Component minimums exist per the manual (§§3.6–3.8) but their numeric
  // values live in the same unpublished chart material as the event
  // points — so the category here is computed on the composite with the
  // minimums caveat printed, never on invented minimum numbers.
  const category = composite !== null ? sfCategory(composite, true) : null;
  return (
    <CalcShell
      title="Space Force — HPA Walk Checker + Composite Logic"
      status="CHECKER"
      intro="The HPA is the Space Force's own program (SPFMAN 36-2905) — Guardians do not take the Air Force PFRA, and the Air Force charts are NOT substituted here: the HPA's 60/20/20 weights match the old DAF structure, not the PFRA's 50/20/15/15. Composite = Cardiorespiratory 60 + Muscular Endurance 20 + Muscular Strength 20 = 100, with component minimums. Categories: Fit to Fight 90–100 · Health Maintenance 75–89.9 · Health Concern under 75 or any missed minimum. Full assessments are due every 6 months (Health Concern, exempt, and walk assessments in 3 months). The 2-mile run must be used for at least 1 of the 2 biannual HPAs. Body composition is NOT a scored HPA component — it is assessed separately."
      sourceNote="SPFMAN 36-2905 (Sep 26, 2025, Incorporating Change 3, Apr 24, 2026) — the MANUAL controls. Walk standards: the manual's Table 3.1, complete as transcribed in the research pack. Event points: the manual does not publish the points tables (scoring runs through myFitness) — points pending chart source. Flagged stale: spaceforce.com/fitness still describes a garbled “PFRA” — do not use it; this entry does not code from it."
      source="SPFMAN 36-2905 (Sep 26, 2025, Change 3 Apr 24, 2026), Table 3.1"
    >
      <FlagBox text="CONFLICT (official vs official) — the spaceforce.mil news release for the manual describes the HPA as an 80-point scale with a pass at 60; the MANUAL (later, through Change 3) says a 100-point scale with the readiness line at 75. The manual controls; this entry codes the manual and prints the conflict." />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">2-km walk checker (Table 3.1)</h5>
      <p className="text-sm text-[var(--text)]">The walk is pass/fail and earns no points; a walk-assessed member is treated as component-exempt for that component. Walk standards — Male: under 30, 16:16 · 30–39, 16:18 · 40–49, 16:23 · 50–59, 16:40 · 60+, 16:58. Female: 17:22 · 17:28 · 17:49 · 18:11 · 18:53.</p>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <SelectField id="sf-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <SelectField id="sf-band" label="Age band" value={band} onChange={setBand} options={SF_WALK_BANDS} />
        <TimeField id="sf-walk" label={`2-km walk (pass line ${fmtTime(walkLine)})`} value={walk} onChange={setWalk} />
      </div>
      <Verdict pass={walkPass} text={walkPass ? `PASS — at or under the Table 3.1 line of ${fmtTime(walkLine)} for ${sex}, ${band}.` : `Over the Table 3.1 line of ${fmtTime(walkLine)} for ${sex}, ${band} — the walk does not pass.`} />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Composite / category (bring your myFitness component scores)</h5>
      <p className="mt-1 rounded bg-[var(--amber-bg)] p-3 text-base font-semibold text-[var(--amber)]">Points pending chart source — the manual does not publish the HPA event points tables, so there are NO event-points inputs and no event numbers anywhere in this entry. Enter the component scores from your official myFitness result below to apply the manual's composite and category logic, including the exempt-component rescale.</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <NumField id="sf-cardio" label="Cardiorespiratory score (of 60)" value={cardio} onChange={setCardio} />
        <NumField id="sf-end" label="Muscular Endurance score (of 20)" value={endurance} onChange={setEndurance} />
        <NumField id="sf-str" label="Muscular Strength score (of 20)" value={strength} onChange={setStrength} />
        <SelectField id="sf-exempt" label="Exempt component (if any)" value={exempt} onChange={(v) => setExempt(v as typeof exempt)} options={["none", "cardio", "endurance", "strength"]} />
      </div>
      {composite !== null ? (
        <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">
          Composite: <strong>{composite}</strong> ({earnedSum} of {maxAssessed} assessed points{maxAssessed < 100 ? `, rescaled ×100/${maxAssessed} per §3.7.8 — the manual's own example: 65 of 80 → 81.25` : ""}) — category on the composite: <strong>{category}</strong>. The manual also applies component minimums (a missed minimum is Health Concern regardless of composite); the minimum values themselves sit in the same unpublished chart material, so confirm them in myFitness.
        </p>
      ) : (
        <p className="mt-2 text-sm text-[var(--dim)]">Worked example from the manual (§3.7.8): with one component exempt, 65 points earned of 80 assessed rescales to 65 ÷ 80 × 100 = 81.25 — Health Maintenance on the composite.</p>
      )}
    </CalcShell>
  );
}

function CgChecker() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [pu, setPu] = useState("");
  const [plank, setPlank] = useState("");
  const [run, setRun] = useState("");
  const a = CG_ACCESSION[sex];
  const plankSec = parseTimeToSeconds(plank);
  const runSec = parseTimeToSeconds(run);
  const puMet = pu === "" ? null : Number(pu) >= a.pushups;
  const plankMet = plankSec === null ? null : plankSec >= a.plankSec;
  const runMet = runSec === null ? null : runSec <= a.runSec;
  const all = puMet !== null && plankMet !== null && runMet !== null ? puMet && plankMet && runMet : null;
  const met = (v: boolean | null) => (v === null ? "—" : v ? "MET ✓" : "not met ✗");
  return (
    <CalcShell
      title="Coast Guard — Accession Checker + PFT Framework"
      status="CHECKER"
      intro="Points are NOT public for the Coast Guard — the PFT Guide lives on a CAC-gated SharePoint and has not been publicly released, so no points calculator ships. What ships: the accession checker below (the entry standards every new member, officer and enlisted, is held to) and the Boat Crew PFT framework description."
      sourceNote="Accession: gocoastguard.com (official recruiting). Framework: ALCOAST 007/26 (Jan 8, 2026) and ALCOAST 082/26 pass mechanics. Build-time pull: COMDTINST 16114.33F Table 4-3 could not be pulled from the official manual (the official PDF host refused the fetch) — the Boat Crew minimums checker is recorded as a follow-up in DATA-PLAN.md rather than coded from secondary transcriptions. The ALCOAST 082/26 text itself was likewise not opened (its pass mechanics are carried as the pack cites them), and the Health Promotion Manual designation is cited two ways in official material (6200.1E / M6200.1E) — printed as a flag below, not resolved. Re-check at follow-up: whether the PFT Guide has been publicly released."
      source="gocoastguard.com (accession); ALCOAST 007/26 (Jan 8, 2026)"
    >
      <FlagBox text="CITATION VARIANCE — official sources cite the Health Promotion Manual both as COMDTINST 6200.1E and as COMDTINST M6200.1E. Both print; neither is chosen here. Verify the exact designation with the follow-up pull." />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Accession checker — all new members (officer and enlisted)</h5>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <SelectField id="cg-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <NumField id="cg-pu" label={`Push-ups, 1 min (line: ${a.pushups})`} value={pu} onChange={setPu} />
        <TimeField id="cg-plank" label={`Plank (line: ${fmtTime(a.plankSec)})`} value={plank} onChange={setPlank} />
        <TimeField id="cg-run" label={`1.5-mile run (line: ${fmtTime(a.runSec)})`} value={run} onChange={setRun} />
      </div>
      <p className="mt-2 text-sm text-[var(--text)]">Push-ups: {met(puMet)} · Plank: {met(plankMet)} · Run: {met(runMet)}</p>
      <Verdict pass={all} text={all ? "Meets all three accession lines as gocoastguard.com prints them." : "At least one accession line is not met — see the rows above."} />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">The service-wide PFT (Boat Crew framework)</h5>
      <p className="mt-1 text-base text-[var(--text)]">
        Events: maximum push-ups in 1 minute; forearm plank (credited up to a 3:24 cap); and one cardio choice — 1.5-mile run, 12-minute swim for distance, or 2,000 m row. Each event converts to 45–100 points in Direct Access; <strong>45 is the per-event minimum and failing ANY event fails the PFT</strong> — no cross-event makeup (ALCOAST 082/26 mechanics). From Jul 1, 2026 this is the service-wide scored PFT: bi-annual for active duty and SELRES on long-term orders; drilling SELRES take a minimum of one per calendar year. The numeric minimums for a Boat Crew checker come from COMDTINST 16114.33F Table 4-3 — that pull is a recorded follow-up, so no minimum inputs ship yet. Members near a minimum should confirm their official score in Direct Access.
      </p>
    </CalcShell>
  );
}

/* ===================== SOF & ASSESSMENT CHECKERS ======================== */

const PST_FIELDS = (min: [number, number, number, number, number], elev: [number, number, number, number, number]): CheckField[] => [
  { key: "swim", label: "Swim 500 yd (m:ss)", kind: "time", better: "low", lines: [{ name: "Minimum", value: min[0] }, { name: "Elevated", value: elev[0] }] },
  { key: "pu", label: "Push-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "Minimum", value: min[1] }, { name: "Elevated", value: elev[1] }] },
  { key: "su", label: "Sit-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "Minimum", value: min[2] }, { name: "Elevated", value: elev[2] }] },
  { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "Minimum", value: min[3] }, { name: "Elevated", value: elev[3] }] },
  { key: "run", label: "Run 1.5 mi (m:ss)", kind: "time", better: "low", lines: [{ name: "Minimum", value: min[4] }, { name: "Elevated", value: elev[4] }] },
];

function SofShell({
  title,
  intro,
  sourceNote,
  source,
  specopsName,
  onOpenSpecOps,
  children,
}: {
  title: string;
  intro: string;
  sourceNote: string;
  source: string;
  specopsName: string;
  onOpenSpecOps?: () => void;
  children?: ReactNode;
}) {
  return (
    <CalcShell title={title} status="CHECKER" intro={intro} sourceNote={sourceNote} source={source}>
      {children}
      {onOpenSpecOps ? (
        <button type="button" aria-label={`Open ${specopsName} in Special Forces and Elite Units`} onClick={onOpenSpecOps} className={`${btnGhost} mt-3`}>
          Full entry — {specopsName} (Special Forces &amp; Elite Units) →
        </button>
      ) : null}
    </CalcShell>
  );
}

function SealPst({ go }: { go?: () => void }) {
  return (
    <SofShell title="Navy SEAL — PST Checker" specopsName="Navy SEALs (SO — Special Warfare Operator)" onOpenSpecOps={go}
      intro="The Physical Screening Test, in order: 500-yd swim, push-ups, sit-ups, pull-ups, 1.5-mile run. navy.com publishes exactly two lines — Minimum and Elevated. No third “competitive” table exists on navy.com, and none is imported here."
      sourceNote="navy.com SEAL PST table, as held in the Special Forces pack (specops.md §3.1), researched Nov 9, 2026."
      source="navy.com — SEAL PST (specops.md §3.1)">
      <LinesChecker idPrefix="seal" fields={PST_FIELDS([750, 50, 50, 10, 630], [570, 75, 75, 15, 570])} />
    </SofShell>
  );
}

function SwccPst({ go }: { go?: () => void }) {
  return (
    <SofShell title="Navy SWCC — PST Checker" specopsName="SWCC — Special Warfare Combatant-craft Crewmen (SB)" onOpenSpecOps={go}
      intro="The SWCC Physical Screening Test — same five events, SWCC's own lines."
      sourceNote="navy.com SWCC PST table, as held in the Special Forces pack (specops.md §3.2), researched Nov 9, 2026."
      source="navy.com — SWCC PST (specops.md §3.2)">
      <FlagBox text="CORRECTION KEPT VISIBLE — 13:00 is the SWCC SWIM minimum, not a run figure. Secondary sources swap the swim and run; navy.com prints swim 13:00 / run 12:00, and that reading stands here." />
      <LinesChecker idPrefix="swcc" fields={PST_FIELDS([780, 50, 50, 6, 720], [600, 70, 70, 10, 600])} />
    </SofShell>
  );
}

function EodPst({ go }: { go?: () => void }) {
  return (
    <SofShell title="Navy EOD — PST Checker (with combined cap)" specopsName="Navy EOD (Explosive Ordnance Disposal Technicians)" onOpenSpecOps={go}
      intro="EOD's PST minimums, PLUS its distinctive combined rule: swim + run together must total no more than 23:00 (navy.com). The checker enforces the combined cap as well as each event line."
      sourceNote="navy.com EOD PST table incl. its asterisked combined-cap footnote, as held in the Special Forces pack (specops.md §3.3), researched Nov 9, 2026."
      source="navy.com — EOD PST (specops.md §3.3)">
      <FlagBox text="CONFLICT — a 21:00 combined cap circulates in secondary transcriptions of MILPERSMAN 1220-410. navy.com's ≤23:00 controls for this checker; 21:00 is flagged, never coded." />
      <LinesChecker
        idPrefix="eod"
        fields={PST_FIELDS([750, 50, 50, 6, 750], [750, 50, 50, 6, 750]).map((f) => ({ ...f, lines: [f.lines[0]!] }))}
        extraVerdict={(v) => {
          const s = parseTimeToSeconds(v.swim ?? "");
          const r = parseTimeToSeconds(v.run ?? "");
          if (s === null || r === null) return null;
          return s + r <= 1380 ? null : `Combined swim + run is ${fmtTime(s + r)} — over the ≤23:00 combined cap, so the PST does not pass even if each event meets its own line.`;
        }}
      />
    </SofShell>
  );
}

function NdAirrPst({ go }: { go?: () => void }) {
  return (
    <SofShell title="Navy Diver (ND) & AIRR — PST Checkers" specopsName="Navy Divers (ND) and Aviation Rescue Swimmers (AIRR) — summary level" onOpenSpecOps={go}
      intro="Checkers at exactly the level the Special Forces pack publishes — no deeper table is extended beyond what that pack captured. Navy Divers screen in the EOD/Diver family column of MILPERSMAN 1220-410 (the instruction groups EOD and ND in one column). AIRR (Aviation Rescue Swimmers) publish their own minimums."
      sourceNote="MILPERSMAN 1220-410 Diver column (re-read from the official instruction PDF at the specops build — the located copy is CH-42, 2013, flagged there) and navy.com AIRR minimums, as held in the Special Forces pack (specops.md §3.4), researched Nov 9, 2026."
      source="MILPERSMAN 1220-410; navy.com (specops.md §3.4)">
      <h5 className="font-display mt-3 text-base font-bold text-[var(--text)]">Navy Diver (ND)</h5>
      <LinesChecker idPrefix="nd" fields={PST_FIELDS([750, 50, 50, 6, 750], [750, 50, 50, 6, 750]).map((f) => ({ ...f, lines: [f.lines[0]!] }))} />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">AIRR — Aviation Rescue Swimmer</h5>
      <LinesChecker idPrefix="airr" fields={PST_FIELDS([720, 42, 50, 4, 720], [720, 42, 50, 4, 720]).map((f) => ({ ...f, lines: [f.lines[0]!] }))} />
    </SofShell>
  );
}

function AfIft({ go }: { go?: () => void }) {
  const [column, setColumn] = useState<"enlisted" | "officer" | "sere">("enlisted");
  const enlisted: CheckField[] = [
    { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 8 }] },
    { key: "su", label: "Sit-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 50 }] },
    { key: "pu", label: "Push-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 40 }] },
    { key: "run", label: "Run 1.5 mi (m:ss)", kind: "time", better: "low", lines: [{ name: "IFT", value: 620 }] },
    { key: "swim", label: column === "enlisted" ? "Surface swim 500 m (m:ss) — 15:00 for 9T5 / 12:30 for 1Z-series" : "Surface swim 500 m (m:ss)", kind: "time", better: "low", lines: [{ name: "IFT (1Z-series)", value: 750 }] },
  ];
  const officer: CheckField[] = [
    { key: "pull", label: "Pull-ups (1 min)", kind: "reps", better: "high", lines: [{ name: "IFT", value: 12 }] },
    { key: "su", label: "Sit-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 75 }] },
    { key: "pu", label: "Push-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 64 }] },
    { key: "run", label: "Run 3 mi (m:ss)", kind: "time", better: "low", lines: [{ name: "IFT", value: 1320 }] },
    { key: "swim", label: "Swim 1,500 m (m:ss)", kind: "time", better: "low", lines: [{ name: "IFT", value: 1920 }] },
  ];
  const sere: CheckField[] = [
    { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 8 }] },
    { key: "su", label: "Sit-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 48 }] },
    { key: "pu", label: "Push-ups", kind: "reps", better: "high", lines: [{ name: "IFT", value: 40 }] },
    { key: "run", label: "Run 1.5 mi (m:ss)", kind: "time", better: "low", lines: [{ name: "IFT", value: 660 }] },
  ];
  return (
    <SofShell title="Air Force — IFT Checker (Special Warfare & SERE)" specopsName="Pararescue (PJ — 1Z1)" onOpenSpecOps={go}
      intro="The Initial Fitness Test — candidates must pass EVERY component; failure of any event is overall failure, and enlisted candidates must pass within 60 days before entering active duty. Every column also carries two 25 m underwater swims, pass/fail (pass both) — attest them with the events; they have no time to enter. TACP Officers (TACPO) test on the officer calisthenics/run with a 500 m swim at 12:30."
      sourceNote="Official AFSPECWAR IFT worksheet, published in the Air Force's FY27 officer application packages on airforce.com, as held in the Special Forces pack (specops.md §4.1 and §4.6), researched Nov 9, 2026."
      source="AFSPECWAR IFT worksheet (specops.md §4.1, §4.6)">
      <FlagBox text="NAME SUPERSEDED — the IFT replaced the PAST (Physical Ability and Stamina Test). Some official pages still say PAST — a current FY27 TACP Officer package still titles its annex “PAST Criteria.” The worksheet's IFT is what this checker codes." />
      <div className="mt-3">
        <SelectField id="ift-col" label="Career-field column" value={column} onChange={(v) => setColumn(v as typeof column)} options={["enlisted", "officer", "sere"]} />
      </div>
      {column === "enlisted" ? (
        <>
          <p className="mt-2 text-sm text-[var(--text)]">9T5 (new enlistee) and 1Z1–1Z4 (PJ / CCT / TACP / SR) share pull-ups 8, sit-ups 50, push-ups 40, run 10:20, and the underwater swims. The surface swim differs: <strong>15:00 for 9T5; 12:30 for the 1Z-series</strong> — the line below is the 1Z-series 12:30; a 9T5 candidate at or under 15:00 also meets their line.</p>
          <LinesChecker key="enlisted" idPrefix="ift-e" fields={enlisted} />
        </>
      ) : column === "officer" ? (
        <>
          <p className="mt-2 text-sm text-[var(--text)]">Officer (STO/CRO) column, as the worksheet prints it.</p>
          <LinesChecker key="officer" idPrefix="ift-o" fields={officer} />
        </>
      ) : (
        <>
          <p className="mt-2 text-sm text-[var(--text)]">SERE specialist column — no swim events (the worksheet marks underwater and surface swim Not Tested for SERE).</p>
          <LinesChecker key="sere" idPrefix="ift-s" fields={sere} />
        </>
      )}
    </SofShell>
  );
}

function MarsocChecker({ go }: { go?: () => void }) {
  const [pftTotal, setPftTotal] = useState("");
  const [ruckMinPerMile, setRuckMinPerMile] = useState("");
  const total = pftTotal === "" ? null : Number(pftTotal);
  const pace = ruckMinPerMile === "" ? null : Number(ruckMinPerMile);
  return (
    <SofShell title="MARSOC — A&S Screen (partial checker)" specopsName="Marine Raiders — MARSOC (0372 Critical Skills Operator / 0370 Special Operations Officer)" onOpenSpecOps={go}
      intro="A partial checker, because that is all MARSOC publishes: your PFT total against the A&S page's lines, and the published ruck standard. The swim assessment and the remaining A&S events are assessed with no published pass table — they ship as description in the full entry, with no invented numbers. Score your PFT in the U.S. Tests → Marine Corps calculator and bring the total here."
      sourceNote="MARSOC official A&S page (marsoc.marines.mil), as held in the Special Forces pack (specops.md §2.1), researched Nov 9, 2026; PFT totals reuse the Part A USMC PFT tables (MCO 6100.13A)."
      source="marsoc.marines.mil — A&S page (specops.md §2.1)">
      <FlagBox text="CONFLICT — an older official MARSOC article cites a 225 PFT figure. The current A&S page's 235 (expected) / 260 (recommended) controls; the 225 is flagged as superseded-by-current-page, not blended." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <NumField id="marsoc-pft" label="Your PFT total (of 300)" value={pftTotal} onChange={setPftTotal} />
        <NumField id="marsoc-ruck" label="Ruck pace, min per mile (45-lb ruck)" value={ruckMinPerMile} onChange={setRuckMinPerMile} />
      </div>
      {total !== null ? (
        <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">
          PFT {total}: {total >= 260 ? "meets the RECOMMENDED line (260+)." : total >= 235 ? "meets the EXPECTED line (235+) — under the recommended 260." : "under the expected line of 235."}
        </p>
      ) : null}
      {pace !== null ? (
        <p role="status" className="mt-2 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">
          Ruck: the published standard is 4 mph — a 15-minute mile — with a 45-lb ruck. Your {pace} min/mile {pace <= 15 ? "meets or beats it." : "is slower than the standard."} (Graded Phase I hikes run 8 and 10 miles.)
        </p>
      ) : null}
    </SofShell>
  );
}

function RangerChecker({ go }: { go?: () => void }) {
  const fields: CheckField[] = [
    { key: "hrp", label: "Hand-release push-ups", kind: "reps", better: "high", lines: [{ name: "Pre-RASP", value: 41 }] },
    { key: "plk", label: "Plank (m:ss)", kind: "time", better: "high", lines: [{ name: "Pre-RASP", value: 155 }] },
    { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "Pre-RASP", value: 6 }] },
    { key: "run5", label: "At RASP — 5-mile run, under 40:00 (m:ss)", kind: "time", better: "low", lines: [{ name: "RASP", value: 2399 }] },
  ];
  return (
    <SofShell title="Army Ranger Route — Published-Items Checker" specopsName="75th Ranger Regiment — Option 40 and RASP" onOpenSpecOps={go}
      intro="Only the items goarmy.com publishes are checked. Pre-RASP: 41 hand-release push-ups, a 2:35 plank, 6 pull-ups, a 2-mile run, and a 6-mile ruck march. At RASP: a 15-meter swim in full uniform (pass/fail — no time to enter), a 5-mile run in under 40:00, and a 12-mile march with a 35-pound ruck."
      sourceNote="goarmy.com Rangers page, as held in the Special Forces pack (specops.md §1.2), researched Nov 9, 2026; 2-mile capture attempted at this build — see the flag."
      source="goarmy.com — Rangers (specops.md §1.2)">
      <FlagBox text="2-MILE RUN — DELIBERATELY ABSENT. The goarmy page lists the 2-mile run in the pre-RASP test without a captured time standard, and this build's capture attempt from the official page did not surface one (secondary sources print conflicting times). Per the pack's rule the field ships ABSENT — never filled from a secondary source. The same applies to a 6-mile ruck time: the event is published, a pass time is not coded." />
      <LinesChecker idPrefix="ranger" fields={fields} />
      <p className="mt-2 text-sm text-[var(--text)]">Also published, pass/fail with no numbers to enter: 15-meter swim in full uniform (at RASP) · 6-mile ruck march (pre-RASP, as published) · 12-mile march with a 35-pound ruck (at RASP).</p>
    </SofShell>
  );
}

function SfasFinding({ go }: { go?: () => void }) {
  return (
    <CalcShell title="Army Special Forces (SFAS) — No Published Fitness Standard" status="DESCRIPTION-ONLY"
      intro="The finding, plainly: SFAS publishes entry qualifications but NO numeric fitness standard. The 18X route publishes qualifications (citizenship, diploma/GED, the age line, ASVAB GT 110 / CO 100 as goarmy.com prints them) — but there is no official SFAS score sheet or pass number to check against, so this entry has no fitness inputs at all. The “SFAS prep” numbers that circulate on unofficial sites are never imported here."
      sourceNote="goarmy.com Special Forces Candidate page, as held in the Special Forces pack (specops.md §1.1), researched Nov 9, 2026 — entry qualifications published; SFAS numeric standard NOT PUBLISHED."
      source="goarmy.com — SF Candidate (specops.md §1.1)">
      <p className="mt-3 text-base text-[var(--text)]">Qualifications (non-fitness) and the full pipeline live in the Special Forces &amp; Elite Units entry — cross-link only, not duplicated here.</p>
      {go ? (
        <button type="button" aria-label="Open Special Forces Green Berets in Special Forces and Elite Units" onClick={go} className={`${btnGhost} mt-3`}>
          Full entry — Special Forces (Green Berets) →
        </button>
      ) : null}
    </CalcShell>
  );
}

function ReconGates({ go }: { go?: () => void }) {
  return (
    <CalcShell title="Marine Reconnaissance (RTAP / BRC) — Gates Only" status="DESCRIPTION-ONLY"
      intro="No fitness checker — gates only, because that is all the official material publishes. Water Survival–Intermediate is required to enter the assessment program (RTAP); Water Survival–Advanced is required to enter the Basic Reconnaissance Course (BRC). Beyond those gates, numeric swim/PFT screening specifics are NOT PUBLISHED in the official material captured — the rest of the entry is description, with no invented numbers."
      sourceNote="Official USMC material incl. MARADMIN 221/26 lateral-move qualifications, as held in the Special Forces pack (specops.md §2.2), researched Nov 9, 2026."
      source="MARADMIN 221/26; USMC (specops.md §2.2)">
      {go ? (
        <button type="button" aria-label="Open Reconnaissance Marines in Special Forces and Elite Units" onClick={go} className={`${btnGhost} mt-3`}>
          Full entry — Reconnaissance Marines (0321) →
        </button>
      ) : null}
    </CalcShell>
  );
}

function CgAstChecker({ go }: { go?: () => void }) {
  const [door, setDoor] = useState<"ptse" | "annex">("ptse");
  const ptse: CheckField[] = [
    { key: "swim", label: "Swim 450 m (m:ss) — under 12:00", kind: "time", better: "low", lines: [{ name: "PTSE", value: 719 }] },
    { key: "pu", label: "Push-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "PTSE", value: 40 }] },
    { key: "su", label: "Sit-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "PTSE", value: 50 }] },
    { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "PTSE", value: 3 }] },
    { key: "chin", label: "Chin-ups", kind: "reps", better: "high", lines: [{ name: "PTSE", value: 3 }] },
    { key: "run", label: "Run 1.5 mi (m:ss) — under 12:00", kind: "time", better: "low", lines: [{ name: "PTSE", value: 719 }] },
  ];
  const annex: CheckField[] = [
    { key: "pu", label: "Push-ups", kind: "reps", better: "high", lines: [{ name: "ANNEX X", value: 40 }] },
    { key: "su", label: "Sit-ups", kind: "reps", better: "high", lines: [{ name: "ANNEX X", value: 40 }] },
    { key: "pull", label: "Pull-ups", kind: "reps", better: "high", lines: [{ name: "ANNEX X", value: 3 }] },
    { key: "run", label: "Run 1.5 mi (m:ss)", kind: "time", better: "low", lines: [{ name: "ANNEX X", value: 720 }] },
    { key: "swim", label: "Swim 450 m / 500 yd (m:ss)", kind: "time", better: "low", lines: [{ name: "ANNEX X", value: 720 }] },
  ];
  return (
    <SofShell title="Coast Guard AST — Published-Level Checker" specopsName="AST — Aviation Survival Technicians (Rescue Swimmers)" onOpenSpecOps={go}
      intro="The rescue-swimmer screen at exactly the level the official recruiting material publishes — two doors, printed separately and never blended. The in-service door is the Physical Training Screen Exam (PTSE, ALCGENL 120/18), the same for all regardless of age or gender; it also includes four underwater laps (pass/fail — no number to enter). The direct-entry door is the ANNEX X screen, which adds a 30-second side plank (pass/fail). The Coast Guard's own recruiting material cites an ~73% AST attrition rate — printed attributed, as the packs carry it."
      sourceNote="ALCGENL 120/18 (PTSE) and USCG recruiting material (ANNEX X), as held in the Special Forces pack (specops.md Part 6), researched Nov 9, 2026."
      source="ALCGENL 120/18; gocoastguard.com (specops.md Part 6)">
      <FlagBox text="CONFLICT — the two doors differ: PTSE sit-ups are 50 in 2 minutes with chin-ups and underwater laps; the ANNEX X screen lists 40 sit-ups and a side plank, with no chin-ups listed. Different populations, both official — pick your door above; the figures are never blended." />
      <div className="mt-3">
        <SelectField id="ast-door" label="Your door" value={door} onChange={(v) => setDoor(v as "ptse" | "annex")} options={["ptse", "annex"]} />
      </div>
      {door === "ptse" ? <LinesChecker key="ptse" idPrefix="ast-p" fields={ptse} /> : <LinesChecker key="annex" idPrefix="ast-a" fields={annex} />}
    </SofShell>
  );
}

function NavyCfaPointer({ onOpenUs }: { onOpenUs?: () => void }) {
  return (
    <CalcShell title="Navy CFA — Pointer (in-service, not an entry screen)" status="PENDING"
      intro="The Combat Fitness Assessment is an IN-SERVICE test for already-designated combat-arms Sailors (SEAL, EOD, SWCC, Fleet Diver communities) — it is not an entry screen, and passing a PST does not enter you into it. Its events, eligibility, and pending status live in the U.S. Tests entry; its scoring tables (PRP Guide-5B, Jun 2026) were not captured."
      sourceNote="NAVADMIN 264/25 (Dec 2025); PRP Guide-5B (Jun 2026) — not captured. Cross-listed from the fitness pack's Part B pointer (B11)."
      source="NAVADMIN 264/25; PRP Guide-5B (Jun 2026) — not captured">
      {onOpenUs ? (
        <button type="button" aria-label="Open the Navy CFA entry in U.S. Tests" onClick={onOpenUs} className={`${btnGhost} mt-3`}>
          Open the CFA entry in U.S. Tests →
        </button>
      ) : null}
    </CalcShell>
  );
}

/* ============================ ALLIED TESTS ============================== */

function UkChecker() {
  const roles: Record<string, { pull: number; thr: number; run: number }> = {
    "Combat roles (adult)": { pull: 76, thr: 3.1, run: 615 },
    "Combat roles (junior soldiers)": { pull: 76, thr: 3.1, run: 675 },
    "Lowest published adult entry": { pull: 50, thr: 2.9, run: 675 },
  };
  const [role, setRole] = useState("Combat roles (adult)");
  const r = roles[role]!;
  return (
    <CalcShell title="United Kingdom — Role Fitness Test (Entry) Checker" status="CHECKER"
      intro="Army entry only (the Army Physical Employment Standards, as the pack scopes it). Standards are gender- and age-free, set BY ROLE: seated medicine-ball throw, mid-thigh pull, 2-km run. General floors across roles: throw at least 2.7 m for all roles; mid-thigh pull floor 50 kg. Officers take the multi-stage fitness test (bleep test) instead of the 2-km run at entry — no bleep line was captured, so officers check the throw and pull here and take the run line as not applicable. In-service RFT(S) / Soldier Conditioning Review ship as description: the Ground Close Combat task list is published (4-km loaded march with 40 kg; fire-and-movement; 110-kg casualty drag; jerry-can carry 2 × 22 kg over 240 m; 70-kg vehicle casevac lift; repeated lift-and-carry 20 × 20 kg over 30 m) but the full in-service numeric tables are not published openly."
      sourceNote="British Army official pages (army.mod.uk), Role Fitness Test (Entry) values, as held in the fitness pack (Part C1), researched Nov 9, 2026. Language: English."
      source="army.mod.uk — Role Fitness Test (Entry)">
      <div className="mt-3">
        <SelectField id="uk-role" label="Role standard" value={role} onChange={setRole} options={Object.keys(roles)} />
      </div>
      <LinesChecker
        key={role}
        idPrefix="uk"
        fields={[
          { key: "pull", label: "Mid-thigh pull (kg)", kind: "number", better: "high", lines: [{ name: role, value: r.pull }] },
          { key: "thr", label: "Seated medicine-ball throw (m)", kind: "number", better: "high", lines: [{ name: role, value: r.thr }] },
          { key: "run", label: "2-km run (m:ss)", kind: "time", better: "low", lines: [{ name: role, value: r.run }] },
        ]}
      />
    </CalcShell>
  );
}

function CanadaChecker() {
  const [dragDone, setDragDone] = useState(false);
  return (
    <CalcShell title="Canada — FORCE Evaluation Checker" status="CHECKER"
      intro="One common minimum standard for all ages and sexes, tested annually. Four tasks: 20-m Rushes, Sandbag Lift, Intermittent Loaded Shuttles, Sandbag Drag. The FORCE Fitness Profile points above the pass line are DESCRIPTION-ONLY — their tables are not published openly, so no points are computed. The pre-2013 CF EXPRES / MPFS tables are superseded and ship nowhere here."
      sourceNote="CFMWS / Personnel Support Programs official FORCE Evaluation page (cfmws.ca), under DAOD 5023-2 — verified directly on the official page in the research pass (fitness pack Part C2), Nov 9, 2026. Language: English + French (official bilingual)."
      source="CFMWS — FORCE Evaluation (DAOD 5023-2)">
      <FlagBox text="LIFT HEIGHT — the FORCE Evaluation page prints the sandbag lift line as above 1.0 m. The 91.5 cm figure that circulates with this test is the CMTFE platform height. The page controls; the checker follows the page." />
      <LinesChecker
        idPrefix="ca"
        fields={[
          { key: "rush", label: "20-m Rushes (m:ss) — two 40-m shuttles, prone every 10 m", kind: "time", better: "low", lines: [{ name: "FORCE minimum", value: 51 }] },
          { key: "lift", label: "Sandbag Lift (m:ss) — 30 lifts, 20-kg bag, above 1.0 m", kind: "time", better: "low", lines: [{ name: "FORCE minimum", value: 210 }] },
          { key: "shuttle", label: "Intermittent Loaded Shuttles (m:ss) — 10 × 40 m, alternating loaded/unloaded", kind: "time", better: "low", lines: [{ name: "FORCE minimum", value: 321 }] },
        ]}
      />
      <label htmlFor="ca-drag" className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
        <input id="ca-drag" aria-label="Sandbag Drag completed 20 m without stopping" type="checkbox" checked={dragDone} onChange={(e) => setDragDone(e.target.checked)} />
        Sandbag Drag — carried one 20-kg sandbag and dragged the sled 20 m without stopping
      </label>
      <p className="mt-1 text-sm text-[var(--dim)]">The drag is pass/fail completion: all four tasks must be met for a FORCE pass.</p>
    </CalcShell>
  );
}

function AustraliaChecker() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [band, setBand] = useState("17–25");
  const [pu, setPu] = useState("");
  const [su, setSu] = useState("");
  const [cardio, setCardio] = useState<"run" | "walk">("run");
  const [cardioTime, setCardioTime] = useState("");
  const row = AUS_BFA[sex][band]!;
  const cardioSec = parseTimeToSeconds(cardioTime);
  const cardioLine = cardio === "run" ? row[2] : row[3];
  const puMet = pu === "" ? null : Number(pu) >= row[0];
  const suMet = su === "" ? null : Number(su) >= row[1];
  const cardioMet = cardioLine === null || cardioSec === null ? null : cardioSec <= cardioLine;
  const all = puMet !== null && suMet !== null && cardioMet !== null ? puMet && suMet && cardioMet : null;
  const met = (v: boolean | null) => (v === null ? "—" : v ? "MET ✓" : "not met ✗");
  const [pfaService, setPfaService] = useState("Army");
  const [pfaPu, setPfaPu] = useState("");
  const [pfaSu, setPfaSu] = useState("");
  const [pfaBeep, setPfaBeep] = useState("");
  const pfa = AUS_PFA[pfaService]!;
  const pfaPuLine = sex === "male" ? pfa.puM : pfa.puF;
  const pfaAll =
    pfaPu !== "" && pfaSu !== "" && pfaBeep !== ""
      ? Number(pfaPu) >= pfaPuLine && Number(pfaSu) >= pfa.su && Number(pfaBeep) >= Number(pfa.beep)
      : null;
  return (
    <CalcShell title="Australia — BFA Checker + Entry PFA Checker" status="CHECKER"
      intro="The Basic Fitness Assessment runs in sequence — push-ups, sit-ups, then the 2.4-km run or (41+ bands) the 5-km walk — and you must meet EVERY event minimum for your age and sex. Taken six-monthly (Permanent/Regular) and 12-monthly (Reserve). Below it, the entry Pre-Enlistment Fitness Assessment (PFA) checker. The third tier, PESA, is set by employment category and is not published as open tables — description-only, no checker."
      sourceNote="ASI (P) Part 8 Ch. 4 as released officially (Defence FOI release 406/23/24) and the official ADF Careers BFA document; entry PFA per ADF Recruiting Instruction-032 — full tables as held in the fitness pack (Part C3), researched Nov 9, 2026. Language: English."
      source="ASI (P) Pt 8 Ch 4; ADF Careers; ADFRI-032">
      <FlagBox text="CONFLICT (official vs official) — female sit-ups: the BFA enclosure prints 60 for ages 31–35 and 35 for 41–45; one official extract (the RMC-SSO applicant table) prints 57 and 30 for the same bands. Both print here; this checker uses the BFA enclosure's 60 / 35, as the pack directs." />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">BFA</h5>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <SelectField id="aus-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <SelectField id="aus-band" label="Age band" value={band} onChange={setBand} options={AUS_BFA_BANDS} />
        <NumField id="aus-pu" label={`Push-ups (line: ${row[0]})`} value={pu} onChange={setPu} />
        <NumField id="aus-su" label={`Sit-ups (line: ${row[1]})`} value={su} onChange={setSu} />
        <SelectField id="aus-cardio" label="Cardio event" value={cardio} onChange={(v) => setCardio(v as "run" | "walk")} options={row[3] === null ? ["run"] : ["run", "walk"]} />
        <TimeField id="aus-cardio-time" label={cardio === "run" ? `2.4-km run (line: ${fmtTime(row[2])})` : `5-km walk (line: ${row[3] === null ? "—" : fmtTime(row[3])})`} value={cardioTime} onChange={setCardioTime} />
      </div>
      <p className="mt-2 text-sm text-[var(--text)]">Push-ups: {met(puMet)} · Sit-ups: {met(suMet)} · Cardio: {met(cardioMet)}</p>
      <Verdict pass={all} text={all ? `Meets every BFA minimum for ${sex}, ${band}.` : "At least one BFA event minimum is not met — the BFA requires every event."} />
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Entry PFA (per ADFRI-032)</h5>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <SelectField id="aus-pfa-service" label="Service" value={pfaService} onChange={setPfaService} options={Object.keys(AUS_PFA)} />
        <NumField id="aus-pfa-pu" label={`Push-ups (line: ${pfaPuLine} for ${sex})`} value={pfaPu} onChange={setPfaPu} />
        <NumField id="aus-pfa-su" label={`Sit-ups (line: ${pfa.su}, both sexes)`} value={pfaSu} onChange={setPfaSu} />
        <NumField id="aus-pfa-beep" label={`Beep test level (line: ${pfa.beep}, both sexes)`} value={pfaBeep} onChange={setPfaBeep} placeholder="e.g., 7.5" />
      </div>
      <Verdict pass={pfaAll} text={pfaAll ? `Meets the ${pfaService} entry PFA lines.` : "At least one entry PFA line is not met."} />
    </CalcShell>
  );
}

function NzChecker() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [band, setBand] = useState("16–24");
  const [run, setRun] = useState("");
  const [press, setPress] = useState("");
  const row = NZ_RFL[sex][band]!;
  const runSec = parseTimeToSeconds(run);
  const runPass = runSec === null ? null : runSec <= row[0];
  const runFirst = runSec === null ? null : runSec <= row[1];
  const pressPass = press === "" ? null : Number(press) >= row[2];
  const pressFirst = press === "" ? null : Number(press) >= row[3];
  const level = runPass === null || pressPass === null ? null : runFirst && pressFirst ? "FIRST CLASS PASS — retest in 12 months." : runPass && pressPass ? "PASS — retest in 6 months." : "Not yet at RFL Pass — both the run and press-ups must meet the Pass line.";
  const [liftCount, setLiftCount] = useState("");
  const [shuttleWorst, setShuttleWorst] = useState("");
  const [carryDone, setCarryDone] = useState(false);
  const [circuit, setCircuit] = useState("");
  const circuitSec = parseTimeToSeconds(circuit);
  return (
    <CalcShell title="New Zealand — RFL Checker + LCFT Components" status="CHECKER"
      intro="The Required Fitness Level is two components — 2.4-km run and press-ups — at two levels: Pass (retest 6-monthly) and First Class Pass (12-monthly). Deployment requires a current RFL. There is NO third RFL component in this checker: curl-ups were removed from the Army entry test in Jul 2024 and no curl-up event ships. A medical alternate exists (4-km walk test + press-ups). Below, the Land Combat Fitness Test component checker."
      sourceNote="NZDF Defence Health Hub, Army Service Testing page (health.nzdf.mil.nz) — the complete RFL male + female tables (Pass and First Class Pass) were PULLED AND VERIFIED from that official page at this build (Nov 9, 2026); every row is encoded as the page prints it. LCFT standards as published on the same page and held in the fitness pack (Part C4). Language: English."
      source="NZDF Defence Health Hub — Army Service Testing (pulled at build)">
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">RFL</h5>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <SelectField id="nz-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <SelectField id="nz-band" label="Age band" value={band} onChange={setBand} options={NZ_RFL_BANDS} />
        <TimeField id="nz-run" label={`2.4-km run (Pass ${fmtTime(row[0])} / 1st Class ${fmtTime(row[1])})`} value={run} onChange={setRun} />
        <NumField id="nz-press" label={`Press-ups (Pass ${row[2]} / 1st Class ${row[3]})`} value={press} onChange={setPress} />
      </div>
      {level ? <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base font-bold text-[var(--text)]">{level}</p> : null}
      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">LCFT — component checker</h5>
      <p className="text-sm text-[var(--text)]">Same standards for all, under a 20-kg load (rifle/webbing/armour): lift-and-place a 20-kg jerry can 10 times in 90 seconds; battlefield manoeuvre — 15 × 10-m shuttles, each in 5 seconds or less; lift-and-carry 2 × 20 kg; and the 4-km battlefield endurance circuit (pack target band 29–32 minutes; the Health Hub page states the task as covering 4 km in less than 32 minutes).</p>
      <FlagBox text="VARIANCE — the pack describes the lift-and-carry as 2 × 20 kg over 25 m; the Defence Health Hub page describes it as 2 × 20 kg over 200 metres in 3 minutes 15 seconds, at walking pace. Both print; the carry is checked here as completion only, so neither distance is coded over the other." />
      <div className="mt-2 grid grid-cols-2 gap-3">
        <NumField id="nz-lift" label="Jerry-can lift-and-place reps in 90 s (line: 10)" value={liftCount} onChange={setLiftCount} />
        <NumField id="nz-shuttle" label="Slowest 10-m shuttle, seconds (line: 5 or less)" value={shuttleWorst} onChange={setShuttleWorst} placeholder="e.g., 4.8" />
        <TimeField id="nz-circuit" label="4-km circuit (line: under 32:00)" value={circuit} onChange={setCircuit} />
      </div>
      <label htmlFor="nz-carry" className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
        <input id="nz-carry" aria-label="Lift-and-carry of 2 by 20 kg completed" type="checkbox" checked={carryDone} onChange={(e) => setCarryDone(e.target.checked)} />
        Lift-and-carry (2 × 20 kg) completed
      </label>
      {(liftCount !== "" || shuttleWorst !== "" || circuitSec !== null) ? (
        <p className="mt-2 text-sm text-[var(--text)]">
          Lift-and-place: {liftCount === "" ? "—" : Number(liftCount) >= 10 ? "MET ✓" : "not met ✗"} · Shuttles: {shuttleWorst === "" ? "—" : Number(shuttleWorst) <= 5 ? "MET ✓" : "not met ✗"} · Circuit: {circuitSec === null ? "—" : circuitSec < 1920 ? "MET ✓" : "not met ✗"} · Carry: {carryDone ? "done ✓" : "not marked"}
        </p>
      ) : null}
    </CalcShell>
  );
}

function GermanyChecker() {
  return (
    <CalcShell title="Germany — Basis-Fitness-Test (BFT) Checker" status="CHECKER"
      intro="Three events within 90 minutes, in fixed order: 11 × 10-m shuttle sprint, flexed-arm hang, 1,000-m run. The minimums are the SAME regardless of age and sex. Taken at the entry medical, at the end of basic training, and annually. Selection variant: at assessment centres the endurance event is a 3,000-m cycle-ergometer test instead of the 1,000-m run. Points calculator: NO — the full points/grading tables are not published on official public pages, and the formulas printed in journal literature are never coded here."
      sourceNote="Bundeswehr official pages (bundeswehr.de, incl. its English BFT summary), minimums as held in the fitness pack (Part C5), researched Nov 9, 2026. Language: German; bundeswehr.de carries an English BFT summary."
      source="bundeswehr.de — Basis-Fitness-Test">
      <LinesChecker
        idPrefix="de"
        fields={[
          { key: "sprint", label: "11 × 10-m shuttle sprint (m:ss)", kind: "time", better: "low", lines: [{ name: "BFT minimum", value: 60 }] },
          { key: "hang", label: "Flexed-arm hang (seconds)", kind: "reps", better: "high", lines: [{ name: "BFT minimum", value: 5 }] },
          { key: "run", label: "1,000-m run (m:ss)", kind: "time", better: "low", lines: [{ name: "BFT minimum", value: 390 }] },
        ]}
      />
    </CalcShell>
  );
}

function FranceEntry() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const vals = [a, b, c].map((v) => (v === "" ? null : Math.max(0, Math.min(20, Number(v)))));
  const total = vals.every((v) => v !== null) ? vals.reduce((s, v) => s + (v ?? 0), 0) : null;
  const level = total === null ? null : total >= 51 ? 5 : total >= 41 ? 4 : total >= 31 ? 3 : total >= 21 ? 2 : 1;
  return (
    <CalcShell title="France — CCPM / CCPG (classification logic; barèmes pending)" status="DESCRIPTION-ONLY"
      intro="The general control (CCPG) tests three aptitudes — endurance cardio-respiratoire (Army: 2,400-m run; other configurations: VAMEVAL / Luc Léger), aisances aquatiques, and capacité musculaire générale (Army: push-ups) — each scored out of 20, total out of 60, with the barèmes (points tables) modulated by age and sex in Annexes I–II of the Army instruction. Age categories: 39 and under / 40–49 / 50+. The classification logic below ships regardless: enter aptitude scores you already hold (each /20) to get your level. The event barèmes themselves were not extracted at this build, so there are no event inputs — recorded as a follow-up."
      sourceNote="Instruction N° 126 (Jun 25, 2021) classification; Instruction N° 1570/ARM/EMAT/SCOAT (Feb 13, 2025), Bulletin Officiel des Armées — Annex I/II barèmes NOT extracted at this build (recorded follow-up in DATA-PLAN.md). Language: French only — labels translated, numbers from the official texts."
      source="Instructions 126 (2021) + 1570 (2025), Bulletin Officiel des Armées">
      <div className="mt-3 grid grid-cols-2 gap-3">
        <NumField id="fr-a" label="Endurance aptitude (/20)" value={a} onChange={setA} />
        <NumField id="fr-b" label="Aquatic aptitude (/20)" value={b} onChange={setB} />
        <NumField id="fr-c" label="General muscular aptitude (/20)" value={c} onChange={setC} />
      </div>
      {total !== null ? (
        <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">Total <strong>{total} / 60</strong> — <strong>Level {level}</strong> (Level 5: 51–60 · 4: 41–50 · 3: 31–40 · 2: 21–30 · 1: 20 or below).</p>
      ) : null}
    </CalcShell>
  );
}

function PolandEntry() {
  return (
    <CalcShell title="Poland — Sprawdzian Sprawności Fizycznej (annexes pending)" status="DESCRIPTION-ONLY"
      intro="The annual physical fitness check for professional soldiers (main window April–June, September make-up), across nine age groups, with four events differentiated by sex, age group, unit type, position, and fitness category: 3,000-m run or 12-minute swim; pull-ups or bench push-ups; 10 × 10-m shuttle run or the zigzag (“koperta”) run; and the OSF obstacle course or a running strength test. The standards ARE published in official law — in Annexes 1–2 of the 2024 regulation — but those annexes were not extracted at this build, so no checker ships yet; school-site table reproductions are never coded from. Recorded as a follow-up."
      sourceNote="Rozporządzenie Ministra Obrony Narodowej, Dz.U. 2024 poz. 396, official text via ISAP / eli.gov.pl — Annexes 1–2 NOT extracted at this build (recorded follow-up). Language: Polish only; no official English version."
      source="Dz.U. 2024 poz. 396 (eli.gov.pl)">
      <p className="mt-2 text-sm text-[var(--dim)]">No input fields — a checker ships only on a complete verified extraction of Annexes 1–2.</p>
    </CalcShell>
  );
}

function TurkiyeEntry() {
  const [run, setRun] = useState("");
  const [pu, setPu] = useState("");
  const [su, setSu] = useState("");
  const vals = [run, pu, su].map((v) => (v === "" ? null : Number(v)));
  const done = vals.every((v) => v !== null);
  const mean = done ? vals.reduce((s, v) => s + (v ?? 0), 0) / 3 : null;
  const pass = done && mean !== null ? vals.every((v) => (v ?? 0) >= 50) && mean >= 60 : null;
  return (
    <CalcShell title="Türkiye — FYT (published pass rule; entry tables per guide)" status="DESCRIPTION-ONLY"
      intro="In service, the Fiziki Yeterlilik Testi runs three tests — 3,000-m run, push-ups (şınav), sit-ups (mekik) — under one published pass rule: at least 50 points in EACH test AND an arithmetic mean of at least 60. The scoring tables themselves sit in the TSK Physical Training and Sports Directive, which is not published on public pages — so the rule below is all that is checked, and no event performances are converted. Entry standards are published inside each recruitment guide (başvuru kılavuzu) and vary by recruitment; capturing Tablo-1 from the current guide is a recorded follow-up, so no entry checker ships yet."
      sourceNote="Official regulation text (mevzuat.gov.tr) for the pass rule; MSB Personel Temin (personeltemin.msb.gov.tr) for entry guides — Tablo-1 NOT captured at this build (recorded follow-up). Language: Turkish only."
      source="mevzuat.gov.tr; personeltemin.msb.gov.tr">
      <div className="mt-3 grid grid-cols-2 gap-3">
        <NumField id="tr-run" label="3,000-m run points" value={run} onChange={setRun} />
        <NumField id="tr-pu" label="Push-up points" value={pu} onChange={setPu} />
        <NumField id="tr-su" label="Sit-up points" value={su} onChange={setSu} />
      </div>
      {done && mean !== null ? (
        <p role="status" className="mt-3 rounded bg-[var(--surface2)] p-3 text-base text-[var(--text)]">Mean {Math.round(mean * 10) / 10} — {pass ? "meets the published pass rule (50+ in each AND mean 60+)." : "does not meet the published pass rule (needs 50+ in EVERY test AND a mean of 60+)."}</p>
      ) : null}
    </CalcShell>
  );
}

function SpainChecker() {
  const [table, setTable] = useState<"tropa" | "comunes">("tropa");
  const [sex, setSex] = useState<"male" | "female">("male");
  const t = table === "tropa"
    ? { plank: 40, run: sex === "male" ? 714 : 778, label: "Tropa y Marinería — Orden DEF/15/2026, Annex III" }
    : { plank: 44, run: sex === "male" ? 698 : 722, label: "Cuerpos Comunes — as corrected by Resolución 452/38237/2026" };
  const puLine = sex === "male" ? 9 : 5;
  const agilityLine = sex === "male" ? 15.4 : 17.1;
  return (
    <CalcShell title="Spain — Entry Checker (per convocatoria)" status="CHECKER"
      intro="The NEW unified entry system (Orden DEF/15/2026): four common tests — push-ups (2 min, chin to a 10-cm pad), isometric plank, 2,000-m run, agility-speed circuit — scored pass/fail APTO / NO APTO against a single mark per sex. The pre-2026 A/B/C/D levels, standing long jump, sit-ups, and course-navette are abolished for entry and ship nowhere here. Standards are presented PER CALL (convocatoria): the two tables below are never blended. Officer/NCO entry adds a fifth test (aquatic ease, 50 m) with marks progressing by course year — described in the official Reclutamiento booklet, not checked here. In-service TGCF is description-only until the planned 2027 transition."
      sourceNote="Orden DEF/15/2026 (Jan 13, 2026; BOE núm. 19, Jan 21, 2026), Annex III — marks as reproduced from the BOE in the fitness pack (Part C12), PROVISIONAL CAPTURE, to be verified against the BOE PDF (recorded follow-up). Cuerpos Comunes correction: Resolución 452/38237/2026 (BOE, May 5, 2026). Language: Spanish."
      source="Orden DEF/15/2026, BOE — Annex III; Resolución 452/38237/2026">
      <FlagBox text="TWO TABLES, NEVER BLENDED — the May 2026 correction adjusted some Cuerpos Comunes marks (plank 44 s; 2,000 m M 11:38 / F 12:02 in that table). Pick the table for YOUR call below; the app does not merge them." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="es-table" label="Call (convocatoria) table" value={table} onChange={(v) => setTable(v as "tropa" | "comunes")} options={["tropa", "comunes"]} />
        <SelectField id="es-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
      </div>
      <p className="mt-2 text-sm font-semibold text-[var(--text)]">{t.label}</p>
      <LinesChecker
        key={`${table}-${sex}`}
        idPrefix="es"
        fields={[
          { key: "pu", label: "Push-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "APTO", value: puLine }] },
          { key: "plank", label: "Plank (seconds held)", kind: "reps", better: "high", lines: [{ name: "APTO", value: t.plank }] },
          { key: "run", label: "2,000-m run (m:ss)", kind: "time", better: "low", lines: [{ name: "APTO", value: t.run }] },
          { key: "agility", label: "Agility circuit (seconds)", kind: "number", better: "low", lines: [{ name: "APTO", value: agilityLine }] },
        ]}
      />
    </CalcShell>
  );
}

function ItalyChecker() {
  const [bando, setBando] = useState<"aufp" | "lieutenant">("aufp");
  const [sex, setSex] = useState<"male" | "female">("male");
  const runLine = sex === "male" ? 695 : 785;
  return (
    <CalcShell title="Italy — Entry Checkers (per bando)" status="CHECKER"
      intro="Italy publishes physical-efficiency standards inside each competition notice (bando) on concorsi.difesa.it — there is no single standing table. The two bandi the research pack captured ship below, each labeled with its bando. The VFI 2027 bando (four tests, incl. the new 3,000-m run) was attempted at this build and not captured — description + recorded follow-up. In-service PEFO is description-only; the 3-km figures circulating in non-official explainers are never printed as official."
      sourceNote="AUFP 2025 officer-candidate bando (rectified protocol, official portal) and the Direct-appointment lieutenant bando 2026 (PERSOMIL decree, Oct 28, 2026), as captured in the fitness pack (Part C13), researched Nov 9, 2026. VFI 2027 bando: NOT captured (follow-up). Language: Italian only."
      source="concorsi.difesa.it — AUFP 2025 bando; PERSOMIL decree (Oct 28, 2026)">
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="it-bando" label="Bando" value={bando} onChange={(v) => setBando(v as "aufp" | "lieutenant")} options={["aufp", "lieutenant"]} />
        <SelectField id="it-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
      </div>
      {bando === "aufp" ? (
        <>
          <p className="mt-2 text-sm text-[var(--text)]">AUFP 2025 (officer-candidate): three mandatory tests — 2,000-m run with a maximum time (M 11:35 / F 13:05), push-ups, and hanging knee-to-chest raises — scored with incremental/decremental points per the bando's annexed table (the run is scored by seconds above/below the maximum). Only the run maximum is a captured pass line; the push-up and knee-raise points come from the bando annex and are not converted here.</p>
          <LinesChecker key="aufp" idPrefix="it-a" fields={[{ key: "run", label: "2,000-m run (m:ss) — bando maximum", kind: "time", better: "low", lines: [{ name: "Bando max", value: runLine }] }]} />
        </>
      ) : (
        <>
          <p className="mt-2 text-sm text-[var(--text)]">Direct-appointment lieutenant 2026 minimums, as the bando prints them.</p>
          <LinesChecker
            key="lieutenant"
            idPrefix="it-l"
            fields={[
              { key: "knee", label: "Hanging knee raises, 1 min", kind: "reps", better: "high", lines: [{ name: "Bando min", value: sex === "male" ? 8 : 5 }] },
              { key: "pu", label: "Push-ups, 2 min", kind: "reps", better: "high", lines: [{ name: "Bando min", value: sex === "male" ? 8 : 4 }] },
              { key: "run", label: "2,000-m run (m:ss)", kind: "time", better: "low", lines: [{ name: "Bando max", value: runLine }] },
            ]}
          />
        </>
      )}
    </CalcShell>
  );
}

function PhilippinesChecker() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [repCat, setRepCat] = useState(0);
  const [runCat, setRunCat] = useState(0);
  return (
    <CalcShell title="Philippines — Entry Checker (PAFHRMC minimums)" status="CHECKER"
      intro="AFP PFT events: push-ups, sit-ups, 3.2-km run (entry screening adds pull-ups / flexed-arm hang per PAF material). The checker runs on the published applicant minimums below. The full in-service rating tables under SOP No. 20 (GHQ AFP, Dec 23, 2024) are not published on open official pages — description note only, no in-service checker."
      sourceNote="Philippine Air Force Human Resource Management Center (PAFHRMC) official application circular, minimums as published and held in the fitness pack (Part C17), researched Nov 9, 2026. Language: English."
      source="PAFHRMC application circular; GHQ AFP SOP No. 20 (2024)">
      <FlagBox text="AS PRINTED — the sit-up minimums are non-monotonic across categories (male 45 / 46 / 47 / 43; female 32 / 33 / 34 / 31). That pattern is exactly as the circular prints it and is reproduced as printed — never “corrected.” Note the categories differ by event: rep categories run to age 34 in four bands; run categories are three bands to age 34." />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <SelectField id="ph-sex" label="Sex" value={sex} onChange={(v) => setSex(v as "male" | "female")} options={["male", "female"]} />
        <SelectField id="ph-repcat" label="Category — push-ups / sit-ups" value={PH_CATS_REPS[repCat]!} onChange={(v) => setRepCat(PH_CATS_REPS.indexOf(v))} options={PH_CATS_REPS} />
        <SelectField id="ph-runcat" label="Category — 3.2-km run" value={PH_CATS_RUN[runCat]!} onChange={(v) => setRunCat(PH_CATS_RUN.indexOf(v))} options={PH_CATS_RUN} />
      </div>
      <LinesChecker
        key={`${sex}-${repCat}-${runCat}`}
        idPrefix="ph"
        fields={[
          { key: "pu", label: "Push-ups, 1 min", kind: "reps", better: "high", lines: [{ name: "PAFHRMC minimum", value: PH_PUSHUPS[sex][repCat]! }] },
          { key: "su", label: "Sit-ups, 1 min", kind: "reps", better: "high", lines: [{ name: "PAFHRMC minimum", value: PH_SITUPS[sex][repCat]! }] },
          { key: "run", label: "3.2-km run (m:ss)", kind: "time", better: "low", lines: [{ name: "PAFHRMC minimum", value: PH_RUN[sex][runCat]! }] },
        ]}
      />
    </CalcShell>
  );
}

function DescOnly({ title, body, sourceNote, source, flags }: { title: string; body: string; sourceNote: string; source: string; flags?: string[] }) {
  return (
    <CalcShell title={title} status="DESCRIPTION-ONLY" intro={body} sourceNote={sourceNote} source={source}>
      {(flags ?? []).map((f) => (
        <FlagBox key={f.slice(0, 40)} text={f} />
      ))}
      <p className="mt-3 text-sm font-semibold text-[var(--text)]">Standards not published openly — this entry has no input fields and no checker, by design.</p>
    </CalcShell>
  );
}

/* ============================ HUB / REGISTRY ============================ */

export const FIT_GROUPS = {
  us: "U.S. Tests",
  sof: "SOF & Assessment Checkers",
  allied: "Allied Tests",
} as const;
export type FitGroupKey = keyof typeof FIT_GROUPS;

type FitEntry = {
  key: string;
  group: FitGroupKey;
  title: string;
  summary: string;
  status: CalcStatus;
  render: (nav: { goSpecOps?: () => void; goUs?: () => void }) => ReactNode;
};

const ENTRIES: FitEntry[] = [
  { key: "usmc", group: "us", title: "Marine Corps — PFT & CFT Calculator", summary: "Full points calculators from MCO 6100.13A (sea-level), with the MARADMIN 613/25 combat-arms overlay on the PFT — the tables Battle Buddy already verified, rechecked at this build (PFT example totals 227).", status: "CALCULATOR", render: () => <UsmcCalc /> },
  { key: "army-aft", group: "us", title: "Army — AFT Standards Checker", summary: "The Army Fitness Test as a standards checker: 60-in-every-event + 300 total, combat M|C + 350 with its 2026 effective dates and the 21-MOS list. The full Annex B points table is a pre-launch pull follow-up — never partially encoded.", status: "CHECKER", render: () => <AftChecker /> },
  { key: "navy-prt", group: "us", title: "Navy — PRT Standards Checker", summary: "Push-ups, plank, one cardio option, against Guide-5A's 12-row threshold scale on the pack's verified anchor rows. Pass line is 45 per event — the old “Satisfactory Medium = 50” line is superseded. Full calculator pending the Guide-5A pull.", status: "CHECKER", render: () => <NavyPrtChecker /> },
  { key: "navy-cfa", group: "us", title: "Navy — CFA (Combat Fitness Assessment)", summary: "The in-service combat-arms test (NAVADMIN 264/25): 800 m fin swim, weighted push-ups, weighted pull-ups, weighted 1-mile run. Scoring tables live in PRP Guide-5B (Jun 2026) — not captured, so PENDING; no numbers are printed for it.", status: "PENDING", render: () => <NavyCfaPending /> },
  { key: "af-pfra", group: "us", title: "Air Force — PFRA Checker (WHtR points calculator)", summary: "The 2026 PFRA: the universal WHtR chart ships as an exact points calculator; the 2-mile run, strength, and core step charts ship as a minimums checker on the pack's <25 anchors (full charts = pull follow-up). 50/20/15/15, composite ≥75, component minimums enforced.", status: "CHECKER", render: () => <AfPfraChecker /> },
  { key: "sf-hpa", group: "us", title: "Space Force — HPA (walk checker + composite; points pending)", summary: "The 2-km walk checker from the manual's Table 3.1, the 60/20/20 composite and category logic with §3.7.8 rescaling — and event POINTS marked “points pending chart source,” because the manual publishes no points tables. Nothing is borrowed from the Air Force charts.", status: "CHECKER", render: () => <SfHpa /> },
  { key: "cg", group: "us", title: "Coast Guard — Accession Checker + Boat Crew PFT Framework", summary: "The public accession screen from gocoastguard.com, plus the Boat Crew / service-wide PFT framework (ALCOAST 007/26, 082/26): 45–100 points per event in Direct Access, fail any event = fail all. Points are not public — the Table 4-3 minimums are a follow-up.", status: "CHECKER", render: () => <CgChecker /> },

  { key: "seal-pst", group: "sof", title: "Navy SEAL — PST Checker", summary: "Minimum and Elevated lines from navy.com — swim 12:30/9:30, 50/75, 50/75, 10/15, run 10:30/9:30. There is no third “competitive” table on navy.com, and none is imported.", status: "CHECKER", render: (n) => <SealPst go={n.goSpecOps} /> },
  { key: "swcc-pst", group: "sof", title: "Navy SWCC — PST Checker", summary: "SWCC's own Minimum/Elevated lines — and the correction kept visible: 13:00 is the SWIM minimum, not the run.", status: "CHECKER", render: (n) => <SwccPst go={n.goSpecOps} /> },
  { key: "eod-pst", group: "sof", title: "Navy EOD — PST Checker (combined cap)", summary: "EOD minimums plus the combined swim+run cap ≤23:00, enforced. The 21:00 figure from secondary transcriptions is flagged, never coded.", status: "CHECKER", render: (n) => <EodPst go={n.goSpecOps} /> },
  { key: "nd-airr", group: "sof", title: "Navy Diver (ND) & AIRR — PST Checkers", summary: "Checkers at exactly the level the Special Forces pack publishes — the MILPERSMAN 1220-410 Diver column for ND, navy.com minimums for AIRR. Nothing extended beyond the pack.", status: "CHECKER", render: (n) => <NdAirrPst go={n.goSpecOps} /> },
  { key: "af-ift", group: "sof", title: "Air Force — IFT Checker", summary: "The Initial Fitness Test by career-field column from the official worksheet: 9T5/1Z group, officer (STO/CRO), and SERE (no swim). The IFT replaced the PAST — the superseded name is flagged.", status: "CHECKER", render: (n) => <AfIft go={n.goSpecOps} /> },
  { key: "marsoc", group: "sof", title: "MARSOC — A&S Screen (partial)", summary: "PFT total against 235 expected / 260 recommended (current A&S page; the older 225 is flagged superseded) plus the 4-mph, 45-lb ruck standard. Swim and remaining events are assessed with no published pass table — description only.", status: "CHECKER", render: (n) => <MarsocChecker go={n.goSpecOps} /> },
  { key: "ranger", group: "sof", title: "Army Ranger Route — Published-Items Checker", summary: "41 HRP, 2:35 plank, 6 pull-ups, the RASP 5-mile run under 40:00 — plus the events published without times. The 2-mile run time was never captured from the official page: that field is deliberately ABSENT, never filled from secondary sources.", status: "CHECKER", render: (n) => <RangerChecker go={n.goSpecOps} /> },
  { key: "sfas", group: "sof", title: "Army SFAS — No Published Fitness Standard", summary: "The finding, plainly: SFAS publishes entry qualifications but no numeric fitness standard — so this entry has no fitness inputs. Unofficial “SFAS prep” numbers are never imported.", status: "DESCRIPTION-ONLY", render: (n) => <SfasFinding go={n.goSpecOps} /> },
  { key: "recon", group: "sof", title: "Marine Recon — Gates Only", summary: "Water Survival–Intermediate to enter the assessment program; Water Survival–Advanced for BRC. Gates only — no invented screening numbers.", status: "DESCRIPTION-ONLY", render: (n) => <ReconGates go={n.goSpecOps} /> },
  { key: "cg-ast", group: "sof", title: "Coast Guard AST — Published-Level Checker", summary: "The rescue-swimmer screen at exactly the level the recruiting material publishes — PTSE (ALCGENL 120/18) and the ANNEX X direct-entry screen, two doors never blended. The Coast Guard's own ~73% AST attrition figure is printed, attributed.", status: "CHECKER", render: (n) => <CgAstChecker go={n.goSpecOps} /> },
  { key: "cfa-pointer", group: "sof", title: "Navy CFA — Pointer (in-service)", summary: "The CFA is an in-service test for designated combat-arms Sailors, not an entry screen — this pointer routes to the U.S. Tests entry (pending Guide-5B).", status: "PENDING", render: (n) => <NavyCfaPointer onOpenUs={n.goUs} /> },

  { key: "uk", group: "allied", title: "United Kingdom — Role Fitness Test (Entry)", summary: "Army entry checker by role: mid-thigh pull, seated medicine-ball throw, 2-km run — gender- and age-free, set by role. Officers take the bleep test instead of the run. In-service RFT(S) ships as description.", status: "CHECKER", render: () => <UkChecker /> },
  { key: "canada", group: "allied", title: "Canada — FORCE Evaluation", summary: "One standard, all ages and sexes: 20-m Rushes ≤51 s, Sandbag Lift ≤3:30 (lift line is 1.0 m — the page controls over the 91.5 cm platform figure, flagged), Loaded Shuttles ≤5:21, Sandbag Drag without stopping. Fitness Profile points are description-only.", status: "CHECKER", render: () => <CanadaChecker /> },
  { key: "australia", group: "allied", title: "Australia — BFA + Entry PFA", summary: "The full BFA table (8 age bands × M/F, with the 41+ 5-km walk alternatives) plus the ADFRI-032 entry PFA by service. The female sit-up conflict between two official tables is printed as a flag, not resolved.", status: "CHECKER", render: () => <AustraliaChecker /> },
  { key: "nz", group: "allied", title: "New Zealand — RFL + LCFT", summary: "RFL checker from the COMPLETE male + female tables pulled and verified from the NZDF Defence Health Hub at this build — 2.4-km run + press-ups only (no curl-up event exists). LCFT ships as a component checker with its 200 m / 25 m carry variance flagged.", status: "CHECKER", render: () => <NzChecker /> },
  { key: "germany", group: "allied", title: "Germany — Basis-Fitness-Test", summary: "Three minimums, same for all: shuttle sprint ≤60 s, flexed-arm hang ≥5 s, 1,000 m ≤6:30, in fixed order within 90 minutes. Points calculator: NO — the tables are not published on official public pages.", status: "CHECKER", render: () => <GermanyChecker /> },
  { key: "france", group: "allied", title: "France — CCPM / CCPG", summary: "Classification logic ships (three aptitudes /20, total /60, Levels 1–5); the Annex I/II event barèmes were not extracted at this build — follow-up recorded, no event inputs invented.", status: "DESCRIPTION-ONLY", render: () => <FranceEntry /> },
  { key: "poland", group: "allied", title: "Poland — Annual Fitness Check", summary: "Nine age groups, four events, standards published in official law (Dz.U. 2024 poz. 396) — but Annexes 1–2 were not extracted at this build, so description + follow-up. School-site reproductions are never coded from.", status: "DESCRIPTION-ONLY", render: () => <PolandEntry /> },
  { key: "turkiye", group: "allied", title: "Türkiye — FYT", summary: "The published in-service pass rule ships (50+ in each of 3,000 m / push-ups / sit-ups AND mean 60+); the scoring tables sit in an unpublished directive. Entry Tablo-1 varies by recruitment guide — capture is a follow-up.", status: "DESCRIPTION-ONLY", render: () => <TurkiyeEntry /> },
  { key: "spain", group: "allied", title: "Spain — Entry (Orden DEF/15/2026)", summary: "The new unified APTO/NO APTO entry tests, presented per call: Tropa y Marinería (Annex III) and the Cuerpos Comunes correction as SEPARATE tables, never blended. The abolished pre-2026 A/B/C/D system ships nowhere.", status: "CHECKER", render: () => <SpainChecker /> },
  { key: "italy", group: "allied", title: "Italy — Entry (per bando)", summary: "Standards live inside each bando: the two captured bandi ship labeled (AUFP 2025; direct-appointment lieutenant 2026). VFI 2027 was attempted and not captured — follow-up. PEFO is description-only.", status: "CHECKER", render: () => <ItalyChecker /> },
  { key: "philippines", group: "allied", title: "Philippines — Entry (PAFHRMC)", summary: "Applicant minimums exactly as the circular prints them — including the non-monotonic sit-up pattern (45/46/47/43), reproduced as printed, never “corrected.” In-service SOP No. 20 tables are not open.", status: "CHECKER", render: () => <PhilippinesChecker /> },
  { key: "norway", group: "allied", title: "Norway — Forsvarets Fysiske Tester", summary: "Muscle-endurance tests + 3,000 m run / 20-min bike / pull-ups, graded by branch and class — but the official Forsvaret document carrying the numbers was not openly reachable. Standards not published here; no inputs.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="Norway — Forsvarets Fysiske Tester" body="Norway tests muscle-endurance events and a 3,000-m run / 20-minute bike / pull-ups, graded by branch and class. The official Forsvaret physical document carrying the numeric standards was NOT openly reachable in the research pass, so no numbers are printed." sourceNote="Forsvaret official pages — governing physical document not openly reachable (fitness pack Part C9), researched Nov 9, 2026. Language: Norwegian (Bokmål)." source="forsvaret.no" /> },
  { key: "denmark", group: "allied", title: "Denmark — Basiskrav / Fysisk Basistest", summary: "The physical baseline concept is described; its figures are a PROVISIONAL social-media capture and are NOT printed as official. Standards not published — no inputs.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="Denmark — Basiskrav / Fysisk Basistest" body="Denmark runs a physical baseline requirement (Basiskrav / Fysisk Basistest) across the services. The only figures the research pass could capture came from a provisional social-media source, so they are deliberately not printed as official standards here." sourceNote="Forsvaret (forsvaret.dk) — Basiskrav figures captured provisionally from social media only (fitness pack Part C10), researched Nov 9, 2026. Language: Danish." source="forsvaret.dk" flags={["PROVISIONAL CAPTURE — the Basiskrav event figures in circulation were captured from a social-media post, not an official standards page. They are not printed as official until an official Forsvaret page publishes them."]} /> },
  { key: "netherlands", group: "allied", title: "Netherlands — Cluster System", summary: "Fitness requirements are set per function cluster; the one march-load figure in circulation is a secondary reproduction and is not coded. Standards not published — no inputs.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="Netherlands — Cluster System" body="The Netherlands sets physical requirements by function cluster (functiecluster) rather than one service-wide test table. The cluster structure is described in official material; the numeric standards per cluster are not published as an open table, and the one march-load figure in circulation is a secondary reproduction — not coded here." sourceNote="Defensie (defensie.nl) — cluster system described officially; numeric standards not published openly (fitness pack Part C11), researched Nov 9, 2026. Language: Dutch." source="defensie.nl" /> },
  { key: "japan", group: "allied", title: "Japan — JSDF Fitness Tests", summary: "The services run their own fitness testing; no official numeric standards are published on open pages. Standards not published — no inputs.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="Japan — JSDF Fitness Tests" body="Japan's Self-Defense Forces conduct service fitness testing, but the numeric standards are not published on open official pages the research pass could verify. No numbers are printed and no checker ships." sourceNote="Japan Ministry of Defense / JSDF official pages — standards not published openly (fitness pack Part C15), researched Nov 9, 2026. Language: Japanese." source="mod.go.jp" /> },
  { key: "south-korea", group: "allied", title: "South Korea — ROK Army Fitness Test", summary: "Structure only: 2-minute push-ups, 2-minute sit-ups, 3-km run, graded Special / 1 / 2 / 3 / Fail. The official table is a capture task from army.go.kr — attempted at this build, not completed, so description stands. Circulating “Special Warrior” figures are barred and never printed.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="South Korea — ROK Army Fitness Test" body="The ROK Army fitness test runs three events — 2-minute push-ups, 2-minute sit-ups, 3-km run — with results graded Special / 1 / 2 / 3 / Fail. The official scoring table (army.go.kr) was attempted at this build and not completely captured, so the description stands and no checker ships." sourceNote="ROK Army (army.go.kr) — official table capture attempted at this build, not completed (recorded follow-up); the official English-language page (visitkorea / Korea.net summaries) was not used for numbers. Fitness pack Part C16, researched Nov 9, 2026. Language: Korean." source="army.go.kr" /> },
  { key: "greece", group: "allied", title: "Greece — Hellenic Armed Forces Fitness", summary: "Governed by Presidential Decree 11/2014; the academy's Sports Test is described at summary level. No numeric thresholds are published openly — no inputs.", status: "DESCRIPTION-ONLY", render: () => <DescOnly title="Greece — Hellenic Armed Forces Fitness" body="Greek armed-forces fitness is governed by Presidential Decree 11/2014, and the military academies run a Sports Test as part of entry. Neither the decree's thresholds nor the academy's numeric standards are published on open official pages, so this entry is summary-level description only." sourceNote="Presidential Decree 11/2014 (Greek government gazette) governs; academy's Sports Test at summary level — no numeric thresholds published openly (fitness pack Part C14), researched Nov 9, 2026. Language: Greek." source="PD 11/2014; Hellenic academies" /> },
];

/** Flat index for global search / buddy grounding. */
export const FIT_CALC_SEARCH = ENTRIES.map((e) => ({
  title: e.title,
  anchor: FIT_GROUPS[e.group],
  summary: e.summary,
}));

export default function FitnessCalcView({ focusAnchor, focusCard, goSpecOps }: { focusAnchor?: string; focusCard?: string; goSpecOps?: () => void }) {
  const [group, setGroup] = useState<FitGroupKey | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);
  useEffect(() => {
    if (!focusAnchor && !focusCard) return;
    if (focusCard) {
      const hit = ENTRIES.find((e) => e.title === focusCard);
      if (hit) {
        setGroup(hit.group);
        setOpenKey(hit.key);
        return;
      }
    }
    if (focusAnchor) {
      const g = (Object.keys(FIT_GROUPS) as FitGroupKey[]).find((k) => FIT_GROUPS[k] === focusAnchor);
      if (g) setGroup(g);
    }
  }, [focusAnchor, focusCard]);
  const openEntry = ENTRIES.find((e) => e.key === openKey) ?? null;
  if (openEntry) {
    return (
      <div>
        <HubBackButton ariaLabel={`Back to ${FIT_GROUPS[openEntry.group]}`} text={`Back to ${FIT_GROUPS[openEntry.group]}`} onBack={() => setOpenKey(null)} />
        {openEntry.render({ goSpecOps, goUs: () => { setGroup("us"); setOpenKey("navy-cfa"); } })}
      </div>
    );
  }
  // Rule 50 (ordering-only): in U.S. Tests, your branch's test leads.
  const fitProfile = useScopeProfile();
  if (group) {
    const baseItems = ENTRIES.filter((e) => e.group === group);
    const items =
      group === "us" && fitProfile?.branch
        ? [...baseItems].sort(
            (a, b) =>
              (branchesNamedIn(a.title).includes(fitProfile.branch) ? 0 : 1) -
              (branchesNamedIn(b.title).includes(fitProfile.branch) ? 0 : 1),
          )
        : baseItems;
    return (
      <div>
        <HubBackButton ariaLabel="Back to Fitness Calculators" text="Back to Fitness Calculators" onBack={() => setGroup(null)} />
        <h4 className="font-display mt-2 text-lg font-bold text-[var(--text)]">{FIT_GROUPS[group]}</h4>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((e) => (
            <button key={e.key} type="button" aria-label={`Open ${e.title}`} onClick={() => setOpenKey(e.key)} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left">
              <span className="flex items-center justify-between gap-2">
                <span className="font-display text-base font-bold text-[var(--text)]">{e.title}</span>
                <StatusBadge status={e.status} />
              </span>
              <span className="mt-1 block text-sm text-[var(--dim)]">{e.summary}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="text-base text-[var(--text)]">
        Score your service test, check a SOF screen, or look up an allied standard. Every entry carries its governing document and date, and every source conflict prints as a visible ⚠ flag — never blended. A points calculator ships only where the complete official table was pulled and verified this build; everything else is honestly labeled checker, pending, or description-only.
      </p>
      <div className="mt-3">
        <HubTileGrid
          label="Fitness Calculators areas"
          tiles={[
            { key: "us", label: "U.S. TESTS", sub: "6 branch tests + CFA" },
            { key: "sof", label: "SOF & ASSESSMENT CHECKERS", sub: "PST · IFT · A&S screens" },
            { key: "allied", label: "ALLIED TESTS", sub: "17 countries" },
          ]}
          onOpen={(k) => setGroup(k as FitGroupKey)}
        />
      </div>
      <p className="mt-3 text-sm text-[var(--dim)]">{UNOFFICIAL_LINE}</p>
    </div>
  );
}
