// Reenlistment & IRR — transcribed from the researched pack
// (~/workspace/military-app/reenlist/reenlist-irr.md, researched
// Nov 9, 2026). The pack is the content source of truth: 33 numbered
// entries (Part 1 Reenlistment 1–16; Part 2 The IRR 17–33), its
// consolidated flags, its conflicts list, and its exclusions are
// binding. Program facts print as the official pages publish them;
// ⚠ flags print visibly as flags — never blended, never silently
// resolved. Dated facts print WITH their dates, labeled as dated.
//
// THE BONUS DISCIPLINE (the pack's charter, absolute):
// - NO current bonus amounts, NO multiplier tables from fiscal-year
//   messages, NO quota lists, NO boatspace counts, NO CJR limitation
//   lists, NO STEP dollar figures. SRB content is STRUCTURE only:
//   zones as published, who sets the live numbers, and the routing
//   rule to the current message.
// - The ONLY figures that print are the pack's standing program
//   constants, each with its source and source date flagged on the
//   card: DoD Continuation Pay multiplier ranges (2.5×–13× regular /
//   AGR; 0.5×–6× drilling Guard/Reserve — DoD CP course v2.0,
//   Oct. 2023); DAF CP rates (RegAF 2.5×, ANG/AFR 0.5× — DAFI
//   36-3012 Ch. 4 as quoted in AF BCMR decisions, flagged as a
//   quoted source); the 48-month extension caps (Navy MILPERSMAN
//   1160-040; DAF "limited by law, no exceptions or waivers"); the
//   USMC SRB obligated-service thresholds (48 months = full SRB,
//   under 36 months = none — MCO 7220.24 line); the Army SRB
//   computation cap (28th year of total active federal service,
//   AR 601-280); and the two muster stipends, printed only with the
//   pack's aging framing (USMC "currently $237 before taxes" as
//   page-stated; ARPC "$253 for 2025 attendance" year-stated).
// - Conflicts print as conflicts, both sides attributed (§12304's
//   365 vs. 270 days; Navy RE-4's two published facts; DAF zones
//   A/B/C/E/F — there is NO Zone D; USMC Zones D/E ⚠ historical;
//   Navy AC SRB zones ⚠ training-extract; Army extension standing
//   regulation vs. the dated 2025 suspension).
// - No legal advice anywhere: recall, hardship, and RE-code matters
//   route to legal assistance and the service boards (DD Form 149).

import type { RefLink } from "./refdata";

/** App view keys this section cross-links into (never duplicates). */
export type ReenViewKey =
  | "changejob"
  | "components"
  | "switchbranches"
  | "reserve"
  | "retirement"
  | "records"
  | "rights"
  | "taxes"
  | "benefits"
  | "travelhq";

export type ReenCrossLink = { label: string; view: ReenViewKey };

export type ReenBullet = { title?: string; text: string };

export type ReenTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ReenEntry = {
  /** Stable id, "e1"…"e33" — also the Binder item key. */
  id: string;
  /** The pack's entry number. */
  n: number;
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  who: string;
  body: string[];
  bullets?: ReenBullet[];
  tables?: ReenTable[];
  flags: string[];
  links: RefLink[];
  source: string;
  crossLinks?: ReenCrossLink[];
};

export type ReenTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: ReenEntry[];
};

export const REENLIST_INTRO =
  "Signing again — and what you still owe after you stop. Part 1 covers reenlistment branch by branch: the windows, the gates (the Army's ROW, the Marine Corps' boatspaces, the Navy's C-WAY, the Air Force's CJR, the Coast Guard's CO recommendation), the bonus programs as structures, RE codes, and the checklist to work before you sign. Part 2 covers the Individual Ready Reserve: the 8-year obligation underneath it, what you owe while you're in it, what can call you back, and the doors out and back in — as the services' own official pages publish them.";

export const REENLIST_STANDING =
  "Bonus discipline, printed once and applied on every card: this section prints NO current bonus amounts, NO multiplier tables from fiscal-year messages, NO quota lists, NO boatspace counts, and NO CJR limitation lists. SRB content is structure only — zones as published, who sets the live numbers, and the routing rule to the current message. The only figures printed are standing program constants, each flagged with its source and source date on its card. Dated facts print with their dates, labeled as dated — never as standing rules. Conflicts print as conflicts, both sides attributed. Nothing here is legal advice.";

/* ------------------------- Tile 1 — Read This First ------------------------ */

const TILE_READ_FIRST: ReenTile = {
  key: "read-first",
  label: "Read This First",
  tileSub: "Entries 1–3 · the contract, the window, extension vs. reenlistment",
  intro:
    "The three frames everything else in Part 1 hangs on: reenlistment is a new contract you are selected for, it happens inside a published window, and an extension is a different instrument from a reenlistment — options and bonuses attach to the reenlistment door only.",
  entries: [
    {
      id: "e1",
      n: 1,
      name: "Reenlistment is a new contract — and it is never automatic",
      summary:
        "Reenlistment is a NEW enlistment contract (a new DD Form 4) that the service may accept or decline — never automatic. The Air Force states it most bluntly: reenlistment \"is not an inherent individual right… It is a privilege,\" and only the commander/civilian director selects or non-selects.",
      who: "Everyone inside 24 months of ETS/EAS/EAOS/DOS. Read before any other entry in Part 1.",
      body: [
        "Every service frames reenlistment the same way underneath different vocabulary: your current enlistment ends, and reenlistment is a new enlistment contract (a new DD Form 4) that the service may accept or decline.",
        "The Department of the Air Force states the principle most bluntly on AFPC's Retention page: \"Reenlistment in the Department of the Air Force is not an inherent individual right… It is a privilege,\" and only the member's commander/civilian director selects or non-selects the member — a non-selected Airman or Guardian separates at the current date of separation (or retires if eligible) and may not be extended except for appeal processing.",
        "The other services route the same decision through their own gates: the Army through retention eligibility under AR 601-280 and the reenlistment window (Army tile), the Marine Corps through HQMC (MMEA) adjudication against fiscal-year boatspaces (Marine Corps tile), the Navy through C-WAY qualification plus command recommendation (Navy tile), and the Coast Guard through a positive commanding officer recommendation plus the eligibility criteria of COMDTINST M1000.2 (Coast Guard tile). Plan on reenlistment as something you apply for and are selected for, inside a window — not something that happens to you at ETS.",
      ],
      flags: [],
      links: [{ label: "AFPC Retention (privilege framing, commander selection)", url: "https://www.afpc.af.mil/retention/" }],
      source: "AFPC Retention — Reenlistment",
    },
    {
      id: "e2",
      n: 2,
      name: "The window is the whole game",
      summary:
        "Every service opens reenlistment on a schedule, not on request — and the windows differ enough that cross-service advice is actively harmful: Army ROW, USMC fiscal-year cohorts, Navy C-WAY, Air Force CJR windows, Coast Guard fiscal-year-of-EOE for SRB-eligible members.",
      who: "Anyone timing a reenlistment against a school, a PCS, a bonus, or a lateral move (see the RE Codes & Barriers tile).",
      body: [
        "Each service publishes when you may reenlist, and the windows differ enough that cross-service advice is actively harmful:",
      ],
      bullets: [
        { title: "Army", text: "the Reenlistment Opportunity Window (ROW) opens 12 months before ETS and — effective July 1, 2025 — stays open until 90 days before ETS; inside 90 days, reenlistment requires an exception to policy (Army tile)." },
        { title: "Marine Corps", text: "reenlistment is organized by fiscal-year cohort — your End of Current Contract (ECC) year is your cohort year, and submission windows are published per cohort segment (FTAP/SEAP/STAP) in the annual retention campaign MARADMIN (Marine Corps tile)." },
        { title: "Navy", text: "reenlistment rides on C-WAY — a Sailor must be qualified in C-WAY before the reenlistment can be authorized, and quota-driven actions run on C-WAY's own cycle (Navy tile)." },
        { title: "Air Force", text: "first-term Airmen reenlist inside Career Job Reservation (CJR) windows keyed to time in service — 4-year enlistees at 35–43 months TIS, 6-year enlistees at 59–67 months TIS (Air Force & Space Force tile) — and a CJR is a reservation, not a guarantee of a bonus." },
        { title: "Coast Guard", text: "members eligible for a Selective Reenlistment Bonus may reenlist any time within the fiscal year of their end of enlistment (Coast Guard tile) — a wider window than most, and a bonus rule, not a general eligibility rule." },
      ],
      flags: [
        "Windows, cohort dates, and window-closing rules are message- and fiscal-year-specific; this section prints the structures as the services publish them and routes current dates to the current message and your career counselor/planner. Do not plan against a window you read in a prior fiscal year's message.",
      ],
      links: [],
      source: "The services' published window structures — branch tiles carry each service's own source",
    },
    {
      id: "e3",
      n: 3,
      name: "Extension vs. reenlistment — the real differences",
      summary:
        "An extension lengthens your CURRENT enlistment; a reenlistment discharges you from it and starts a NEW one. Options and bonuses attach to reenlistment, not extension; extensions are capped (48 months per enlistment in the Navy and the DAF); and once an extension is operative it may not be cancelled. The Air Force's prohibited-extension-purposes list prints in full.",
      who: "Anyone offered \"just extend for now\" — especially anyone whose real goal is a bonus, a school, or a station (all three require the reenlistment door).",
      body: [
        "An extension lengthens your current enlistment; a reenlistment discharges you from it and starts a new one. That one mechanical difference drives everything else.",
        "The paperwork start dates differ (the Army Reserve worksheet, DA Form 7776, states the general mechanics): a reenlistment's contractual obligation begins the day after execution of the new DD Form 4; an extension's obligation begins the day after the current ETS.",
      ],
      bullets: [
        { title: "Options attach to reenlistment, not to extension", text: "The Army's DA PAM 601-280 Smartbook states it flatly: \"extensions do not guarantee any movement options… Soldiers must reenlist to qualify for one of the options\" (station of choice, training, overseas assignment). An extension keeps you where you are; it buys time, not choices." },
        { title: "Bonuses attach to reenlistment", text: "Selective Reenlistment Bonuses are paid for a reenlistment for additional obligated service. The Coast Guard's published rule is the clearest version: members extending are not authorized SRBs (Coast Guard tile; ⚠ dated source there). Navy practice adds a nuance: up to 24 months of a non-operative (not-yet-started) extension may be cancelled to reenlist for an SRB under the circumstances the current SRB NAVADMIN states — route the specifics there." },
        { title: "Extensions are capped; reenlistments reset the clock", text: "Navy extensions: maximum 4 years per enlistment / 48 aggregate months (MILPERSMAN 1160-040 — a standing program constant, printed with its source), require the member's written consent, are conditional for a specified reason, are executed in monthly increments of 1–48 months, and unconditional extensions are not authorized. Air Force extensions: maximum 48 months per enlistment — limited by law, no exceptions or waivers (AFPC)." },
        { title: "Operative vs. inoperative is the point of no return", text: "Navy doctrine names the distinction every Sailor should know: an extension is inoperative until the day after the enlistment as extended would have expired, and operative from that date. Before the operative date an extension may be cancellable under the rules; once operative it may not be cancelled — relief is only by petition to the Board for Correction of Naval Records for erroneous execution." },
        { title: "The Air Force publishes the anti-abuse list — quote it to yourself before extending", text: "extensions are NOT approved for monetary advantage, to increase bonus entitlement, to buy decision time, to defer separation to coincide with civilian plans, or to apply for a CJR or request retraining (AFPC Retention). If your reason for extending is on that list, the service's answer is already written." },
      ],
      flags: [
        "Army extensions are currently policy-restricted — DATED, not standing: effective June 1, 2025 the Army suspended most extensions (special circumstances case-by-case), and the Army Retention page states FY25-ETS Soldiers were limited to specified extension types with case-by-case exceptions via HRC Retention, while FY26-ETS Soldiers are authorized all applicable extensions except two named types. This prints as a time-boxed policy snapshot (2025–26), not as the standing structure — the standing structure is AR 601-280 / DA PAM 601-280, and the current position is whatever HRC publishes now. Conflict printed, not blended: standing regulation vs. the dated 2025 suspension snapshot.",
      ],
      links: [
        { label: "AFPC Retention (48-month cap + prohibited purposes)", url: "https://www.afpc.af.mil/retention/" },
        { label: "MyNavyHR — MILPERSMAN index (1160-040)", url: "https://www.mynavyhr.navy.mil/" },
      ],
      source: "AFPC Retention; MILPERSMAN 1160-040; DA PAM 601-280 Smartbook",
    },
  ],
};

/* ------------------------------- Tile 2 — Army ----------------------------- */

const TILE_ARMY: ReenTile = {
  key: "army",
  label: "Army",
  tileSub: "Entries 4–5 · ROW, Reenlistment Options, QTI, indefinite at 10 years",
  intro:
    "Army reenlistment runs through people — your unit Retention NCO and the installation career counselor — under AR 601-280 and the DA PAM 601-280 Smartbook. The window, the five Reenlistment Options by their published names, the SRB routing sentence, the new QTI structure (no STEP dollar figures anywhere), and what changes at 10 years.",
  entries: [
    {
      id: "e4",
      n: 4,
      name: "Army — the ROW, the Reenlistment Options, and QTI",
      summary:
        "Army reenlistment: the Reenlistment Opportunity Window (ROW) opens 12 months before ETS and, effective July 1, 2025, stays open until 90 days before ETS. The five Reenlistment Options by name (Regular Army, Current Station Stabilization, Army Training, Overseas Assignment, CONUS Station of Choice), SRB structure with the 28th-year computation cap, and the Quality Tiered Incentive (QTI) program — tier maps inversely to SRB STEP level, Tier 1 = STEP 4; no STEP dollar figures printed.",
      who: "Active Soldiers inside the ROW (12 months to 90 days before ETS); Reserve Soldiers under AR 140-111 / DA Form 7776.",
      body: [
        "Routing. Army reenlistment runs through people: your unit Retention NCO and the installation career counselor, under AR 601-280 (governing regulation, Apr. 14, 2023) and the DA PAM 601-280 Smartbook (current edition effective Oct. 6, 2026). The Army Retention page (army.mil/retention) sorts Soldiers into three populations: Initial Term (first enlistment), Mid-Career (second or subsequent term, 10 years or less of active federal service at ETS), and the NCO Career Status Program (Soldiers with 10+ years — no ETS; governed by retention control points instead of a window).",
        "The window. The ROW opens 12 months before ETS; effective July 1, 2025 it remains open until 90 days prior to ETS, after which reenlistment is exception-to-policy only.",
        "Reenlistment Options — names as HRC publishes them. A reenlistment is executed under one of these options; eligibility for each turns on the MOS IN/OUT calls — shortage / balanced / overstrength — in the current Smartbook tables, by Initial Term / Mid-Career / Careerist population:",
      ],
      bullets: [
        { title: "Regular Army", text: "reenlist for 2, 3, 4, 5, or 6 years regardless of grade and service. ⚠ One hard carve-out: staff sergeants and above with 10 or more years of active federal service on their discharge date are restricted to the indefinite term." },
        { title: "Current Station Stabilization", text: "guarantees stabilization at the current duty assignment for a period scaled to the reenlistment term (installation pages publish 1 to 30 months)." },
        { title: "Army Training", text: "attendance at an available service school of choice for PMOS, SQI, ASI, or language training." },
        { title: "Overseas Assignment", text: "assignment to an overseas location from the published list of overseas areas." },
        { title: "CONUS Station of Choice", text: "a specific CONUS duty station, based on availability and the Needs of the Army (installation pages publish guarantees of 12+ months for 3–4-year terms and 24+ months for 5–6-year terms)." },
        { title: "SRB structure", text: "whether a bonus exists at all \"depends on MOS strength, reenlistment term length, and Army operational needs,\" and the Retention page's FAQ gives the routing sentence, quoted verbatim: \"Bonuses will be determined by the SRB message in effect at the time of reenlistment.\" The bonus is computed on additional obligated service (service beyond your existing contractual agreement, counting enlistments, extensions, and reenlistments), and AR 601-280 caps bonus-computation service at the Soldier's 28th year of total active federal service — a standing program constant, printed with its source (AR 601-280)." },
        { title: "Quality Tiered Incentive (QTI) Program — NEW", text: "the Army Retention page now publishes a QTI structure alongside SRB: company commanders stratify eligible Soldiers entering the ROW into Quality Tiers by rank-and-MOS cohort (fitness, technical expertise, commander performance review), and the tier maps inversely to the SRB STEP payment level (Tier 1 = STEP 4, the highest; Tier 4 = STEP 1). QTI sets the amount only if the MOS is authorized a bonus on the current SRB MILPER — it creates no entitlement by itself. No STEP dollar figures are printed here; they live in the current SRB MILPER." },
        { title: "Reserve note", text: "Army Reserve reenlistment runs under AR 140-111 (worksheet DA Form 7776, May 2025): TPU/IMA Soldiers may reenlist for 1–6 years or indefinite per the regulation's tables; the worksheet computes an Earliest Date of Reenlistment (EDOR) and ties incentive eligibility to it — a Soldier may reenlist at other times but must be within the EDOR to meet incentive criteria." },
      ],
      flags: [
        "QTI is new and published at Retention-page level; its Smartbook mechanics were not separately opened in the research pass behind this section.",
      ],
      links: [
        { label: "Army Retention (army.mil/retention — options, ROW, SRB routing sentence, QTI)", url: "https://www.army.mil/retention" },
        { label: "DA Form 7776 (Army Reserve reenlistment worksheet)", url: "https://armypubs.army.mil/pub/eforms/DR_a/ARN43762-DA_FORM_7776-000-EFILE-1.pdf" },
      ],
      source: "Army Retention (army.mil/retention); AR 601-280; DA PAM 601-280 Smartbook",
    },
    {
      id: "e5",
      n: 5,
      name: "Army — who approves, and what \"indefinite\" means at 10 years",
      summary:
        "At 10+ years with grade SSG or above, the Regular Army option's term menu (2–6 years) no longer applies — indefinite is the term, under the NCO Career Status Program, governed by retention control points instead of an ETS.",
      who: "Mid-career NCOs approaching the 10-year line — the reenlistment you are offered changes character at that line.",
      body: [
        "Approval follows the population split in the Army tile's first entry. Initial Term and Mid-Career Soldiers reenlist through the career counselor under the options tables; Career Status Program Soldiers (10+ years) serve under the indefinite reenlistment structure — there is no ETS to reenlist against, and continued service is governed by retention control points (the grade-based service limits that function as the career force's ceiling), promotion/retention boards, and the commander's retention recommendation.",
        "The practical consequence the Retention page states: at 10+ years with grade SSG or above, the Regular Army option's term menu (2–6 years) no longer applies — indefinite is the term. Separation from indefinite status is a voluntary or involuntary separation action, not an ETS, which is why the Before You Sign checklist tells career Soldiers to verify RCP math instead of ETS math.",
      ],
      flags: [],
      links: [{ label: "Army Retention (army.mil/retention — Career Status Program)", url: "https://www.army.mil/retention" }],
      source: "Army Retention (army.mil/retention); AR 601-280",
    },
  ],
};

/* ---------------------------- Tile 3 — Marine Corps ------------------------ */

const TILE_USMC: ReenTile = {
  key: "usmc",
  label: "Marine Corps",
  tileSub: "Entries 6–7 · career planners, TFRS, boatspaces, SRB zones",
  intro:
    "Marine reenlistment runs through the unit Career Counselor / Career Planner into TFRS, and HQMC (MMEA) decides against fiscal-year boatspaces. When you submit is a competitive fact, not an administrative detail — and the SRB warning on the first entry below is the most expensive sentence in this section.",
  entries: [
    {
      id: "e6",
      n: 6,
      name: "Marine Corps — career planners, TFRS, and the boatspace reality",
      summary:
        "Marine reenlistment: Career Planner builds the package, the RELM goes through TFRS to HQMC (MMEA). The fiscal-year cohort structure (FY27: MARADMIN 590/25 — CRP, standard reenlistments, LATMOVs, CGRP, DAP), boatspaces and the CGRP trigger, and the SRB no-retroactivity warning: \"The SRB will not be awarded retroactively for those who reenlist before publication.\"",
      who: "Every Marine in their ECC fiscal year; FTAP Marines in competitive PMOSs most of all.",
      body: [
        "Routing. Marine reenlistment runs through the unit Career Counselor / Career Planner, who builds the package and submits it through TFRS (the Total Force Retention System — the RELM is the request vehicle; the Change Your Job section carries the RELM mechanics) to HQMC, Manpower Management Enlisted Assignments (MMEA) for determination. MMEA's Stay Marine pages name the career counselor as the primary contact and the routing point — there is no direct-to-HQMC self-service door.",
        "The cohort structure. The annual Enlisted Retention Campaign MARADMIN (FY27: MARADMIN 590/25) defines the year. The FY27 cohort is Marines whose ECC falls between Oct. 1, 2026 and Sep. 30, 2027 (the cohort framing prints as structure, with its fiscal-year dates flagged), and the campaign names the avenues: Commandant's Retention Program (CRP), standard reenlistments, lateral moves (LATMOVs), the Commanding General's Retention Program (CGRP), and the Direct Affiliation Program (DAP) — reserve affiliation at EAS, cross-linked to Switching Components below. Submission windows are published by cohort segment (FTAP — first-term; SEAP; STAP) inside the campaign message.",
        "Boatspace reality, at the level MMEA publishes it. Each PMOS has an authorized number of reenlistments for the cohort year — the boatspace. When a PMOS reaches 100% of its authorized boatspaces, standard reenlistment into it closes; that is precisely the trigger for CGRP, which MMEA publishes as applying to FTAP Marines only and opening when a PMOS has reached its boatspace cap. In plain terms: in a fast-filling MOS, when you submit is a competitive fact, not an administrative detail — a complete package submitted early in the window competes for an open boatspace; the same package submitted late competes for CGRP scraps or nothing. Boatspace counts are not printed here (they are live MMEA data); the structure — cap, closure, CGRP fallback — is the durable fact.",
      ],
      bullets: [
        { title: "SRB timing warning — read this before you sign", text: "The FY27 campaign states it in so many words: \"The SRB will not be awarded retroactively for those who reenlist before publication [of the FY27 SRB MARADMIN].\" A Marine who reenlists before the fiscal year's SRB message publishes gets the reenlistment — and no bonus, even if their PMOS appears in the SRB table days later. The career planner's first job in any bonus conversation is confirming the current SRB MARADMIN has actually published (next entry)." },
      ],
      flags: [
        "Cohort submission windows are fiscal-year dates; this entry prints the structure, and the current campaign MARADMIN holds the current dates.",
      ],
      links: [
        { label: "FY27 Enlisted Retention Campaign (MARADMIN 590/25)", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4356385/fiscal-year-2027-enlisted-retention-campaign/" },
        { label: "MMEA Stay Marine (manpower.marines.mil)", url: "https://www.manpower.marines.mil/" },
      ],
      source: "MARADMIN 590/25 (FY27 Enlisted Retention Campaign); MMEA Stay Marine",
      crossLinks: [
        { label: "Change Your Job — RELM & lateral-move mechanics", view: "changejob" },
        { label: "Switching Components — Direct Affiliation Program (DAP)", view: "components" },
      ],
    },
    {
      id: "e7",
      n: 7,
      name: "Marine Corps — SRB zones and the obligated-service thresholds",
      summary:
        "USMC SRB zones as published: A (17 months–6 years), B (6–10), C (10–14) — Zones D/E are ⚠ historical/unverified. The standing thresholds from the MCO 7220.24 line: 48 months of obligated service = full SRB; under 36 months = none. MARADMIN 031/25 cancelled the FY26 SRB program outright effective Oct. 28, 2025 (dated fact). Broken Service SRB suspended FY26 and FY27.",
      who: "Marines weighing term length against bonus eligibility — the 36/48-month thresholds decide real money; confirm zone and PMOS status in the current SRB MARADMIN with your career planner.",
      body: [
        "The Marine Corps SRB program (MCO 7220.24 series) is zoned by years of active service at reenlistment. The zones named in current fiscal-year SRB MARADMINS (FY26: MARADMIN 191/25; FY27: MARADMIN 023/26) are:",
      ],
      bullets: [
        { title: "Zone A", text: "17 months – 6 years" },
        { title: "Zone B", text: "6 – 10 years" },
        { title: "Zone C", text: "10 – 14 years" },
        { title: "Obligated-service computation (program constant, from the MCO 7220.24 line)", text: "obligated service for SRB purposes runs from the ECC at reenlistment to the new ECC. The standing thresholds: a minimum of 48 months of obligated service is required for the full SRB; less than 36 months of obligated service earns no SRB. Between those lines the current MARADMIN's tables govern." },
        { title: "Broken Service SRB (BSSRB)", text: "the prior-service variant — published as suspended for FY26 and FY27 (dated fact, printed as such)." },
      ],
      flags: [
        "Zones D (14–18 years) and E (18–20 years) appear in older program bulletins (the FY08-era MCBUL 7220 carried A–E) but were NOT named in the FY26/FY27 MARADMIN text located in the research pass — A–C print as current and D/E as ⚠ historical/unverified against the current MCO 7220.24P. Verify with MMEA before repeating D/E as live zones. Conflict printed, not blended.",
        "Which PMOSs carry a bonus, at what kicker, is a table inside the current SRB MARADMIN and is deliberately not reproduced here. DATED FACT, printed with its date: MARADMIN 031/25 cancelled the FY26 SRB program outright effective Oct. 28, 2025, because FY26 retention goals were met in September 2025 (bonuses honored only for RELMs received at HQMC in TFRS before that date). That cancellation is the single best illustration in this section of why bonus amounts cannot live in a reference app: the program itself can end mid-year.",
      ],
      links: [{ label: "Marines.mil Messages — current SRB MARADMIN", url: "https://www.marines.mil/News/Messages/" }],
      source: "MCO 7220.24 series; SRB MARADMINS 191/25 & 023/26; MARADMIN 031/25",
    },
  ],
};

/* ------------------------------- Tile 4 — Navy ----------------------------- */

const TILE_NAVY: ReenTile = {
  key: "navy",
  label: "Navy",
  tileSub: "Entries 8–9 · the C-WAY gate; extensions in detail",
  intro:
    "Navy reenlistment runs through the Command Career Counselor, and the gate is C-WAY: qualification before reenlistment, for extensions too. The second entry is the extension instrument in detail — conditional, written-consent, capped, and uncancellable once operative.",
  entries: [
    {
      id: "e8",
      n: 8,
      name: "Navy — C-WAY is the gate: qualification before reenlistment",
      summary:
        "C-WAY (Career Waypoints) is the Navy's gate: enlisted Sailors E-1 through E-6 must be fully qualified in C-WAY to reenlist (MILPERSMAN 1160-140). The executed packet (NPPSC 1160/1, C-WAY approval, NSIPS SRB / BUPERS-328 approvals), and the SRB zone frames — active component zones carry a ⚠ training-extract flag; SELRES zones are DIFFERENT and dated (NAVADMIN 086/14).",
      who: "E-1–E-6 Sailors approaching EAOS — start with your CCC and a C-WAY check, not with the bonus table.",
      body: [
        "Routing. Navy reenlistment runs through the Command Career Counselor (CCC), and the gate is C-WAY (Career Waypoints). MILPERSMAN 1160-140 (CH-95, May 6, 2026) defines C-WAY as the corporate system that matches Sailor qualification data to fleet requirements. Its published rules:",
        "The executed packet (NPPSC Reenlistments SOP, Rev. Mar. 2025) shows what \"approved\" concretely means: the Command Career Reenlistment Request (NPPSC 1160/1), the C-WAY approval, NSIPS SRB approval / BUPERS-328 approval where applicable, and HYT approval from BUPERS-328 where high-year-tenure is in play. An SRB case carrying a C-WAY flag is held until the CCC resolves it through the C-WAY help desk — the packet does not move around the flag.",
      ],
      bullets: [
        { text: "Enlisted Sailors E-1 through E-6 must be fully qualified in C-WAY to reenlist for MNA OBLISERV reenlistment authorizations." },
        { text: "CCCs qualify Sailors in C-WAY (NAVPERS 1040/4) on reporting and maintain the CO's recommendation and the Sailor's OBLISERV intentions in the Sailor Details page." },
        { text: "C-WAY qualification does not override anything: it does not waive reenlistment eligibility under MILPERSMAN 1160-030 and does not waive rating eligibility under MILPERSMAN 1306-618. C-WAY is a necessary gate, not a sufficient one." },
        { title: "SRB zones — active component", text: "Zone A = 21 months – 6 years of service; Zone B = 6 – 10 years; Zone C = 10 – 14 years (from NPPSC's official Reenlistments/Extensions training material, Jun. 2025 — see the flag below before treating these as a table)." },
      ],
      flags: [
        "The active-component zone boundaries above rest on an NPPSC training extract (Jun. 2025) whose text is partially garbled in extraction; the boundaries are as published there and should be re-checked against the current SRB NAVADMIN before being relied on as a table. Conflict printed, not blended.",
        "SELRES zones are DIFFERENT (NAVADMIN 086/14 — dated 2014, flagged as an older source): Zone A up to 8 years from PEBD, Zone B over 8–14, Zone C over 14–20; and a SELRES reenlistment date must fall within the fiscal year of the current EOS (mobilization OBLISERV excepted). Do not apply active-component zone math to a Reserve reenlistment.",
      ],
      links: [
        { label: "MyNavyHR — MILPERSMAN 1160-140 & 1160-030", url: "https://www.mynavyhr.navy.mil/" },
      ],
      source: "MILPERSMAN 1160-140 (CH-95); NPPSC Reenlistments SOP (Rev. Mar. 2025); NPPSC training extract (Jun. 2025)",
    },
    {
      id: "e9",
      n: 9,
      name: "Navy — extensions in detail (the conditional instrument)",
      summary:
        "Navy extensions under MILPERSMAN 1160-040: written consent, conditional for a specified reason, monthly increments of 1–48 months with a 48-month aggregate ceiling per enlistment, a C-WAY authorization to extend for E-6 and below under 14 years — and once operative, an extension may not be cancelled; relief is only a BCNR petition.",
      who: "Any Sailor holding or offered an extension — check its operative date before assuming it can be unwound for a reenlistment.",
      body: [
        "MILPERSMAN 1160-040 (CH-74, Apr. 11, 2021) governs Navy extensions, and its terms are stricter than fleet folklore:",
      ],
      bullets: [
        { text: "Extensions require the member's written consent and are conditional for a specified reason; unconditional extensions are not authorized." },
        { text: "Extensions are executed in monthly increments of 1 to 48 months; the ceiling is 48 aggregate months per enlistment (Read This First tile)." },
        { text: "E-6 and below with less than 14 years need an approved C-WAY authorization to extend as well (exceptions at para. 5c of the article) — the C-WAY gate applies to extensions, not just reenlistments." },
        { text: "Operative/inoperative: once an extension becomes operative it may not be cancelled; the only relief is a BCNR petition alleging erroneous execution." },
        { title: "The SRB interaction", text: "the current SRB NAVADMIN's practice allows cancellation of up to 24 months of non-operative extension without SRB loss under stated circumstances (e.g., PCS OBLISERV cases) — ⚠ those circumstances are NAVADMIN-specific; this entry prints the existence of the mechanism and routes the conditions to the current NAVADMIN." },
      ],
      flags: [],
      links: [{ label: "MyNavyHR — MILPERSMAN index (1160-040)", url: "https://www.mynavyhr.navy.mil/" }],
      source: "MILPERSMAN 1160-040 (CH-74, Apr. 11, 2021)",
    },
  ],
};

/* --------------------- Tile 5 — Air Force & Space Force -------------------- */

const TILE_DAF: ReenTile = {
  key: "daf",
  label: "Air Force & Space Force",
  tileSub: "Entry 10 · CJR windows, DAF zones, the commander's decision",
  intro:
    "One system for Airmen and Guardians alike: the MPF and myFSS run the actions, only the commander/civilian director selects or non-selects, first-term reenlistment rides the Career Job Reservation windows, and the DAF SRB zone table runs A/B/C/E/F — there is no Zone D in it.",
  entries: [
    {
      id: "e10",
      n: 10,
      name: "Air Force & Space Force — CJR windows, zones, and the commander's decision",
      summary:
        "DAF reenlistment: first-term CJR windows (4-year enlistees 35–43 months TIS; 6-year enlistees 59–67 months TIS), the 48-month extension cap — limited by law, no exceptions or waivers — and the SRB zones from DAFI 36-2606 Table 4.1: A / B / C / E / F. There is NO Zone D in the DAF table. One SRB per zone; amounts route to the local finance office.",
      who: "First-term Airmen/Guardians inside (or approaching) the CJR windows; career Airmen/Guardians reading the zone table against their TAFMS.",
      body: [
        "Routing. First stop is the Military Personnel Flight (MPF); reenlistment, CJR, and retraining actions run through myFSS (⚠ CAC-gated — named, not reproduced). Only the commander/civilian director selects or non-selects (Read This First tile).",
        "First-term windows — the CJR. The Career Job Reservation program is the DAF tool used when needed to manage how many First Term Airmen/Guardians may reenlist into their current AFSC/SFSC; limitations are set by projected surplus/shortage by skill and managed on a fiscal-year basis — ⚠ not all fiscal years have limitations in specific codes, and the limitation list is live myFSS data, never printed here. The published first-term CJR windows (official installation MPF guidance, Warren AFB): 4-year enlistees: 35–43 months TIS; 6-year enlistees: 59–67 months TIS. The same windows frame first-term Base of Preference eligibility, which additionally requires a CJR and reenlistment within 30 days of the approved BOP.",
        "Extensions. All Airmen/Guardians may voluntarily extend a maximum of 48 months per enlistment — limited by law, no exceptions or waivers (a standing program constant, printed with its source: AFPC) — and never for the prohibited purposes listed in the Read This First tile.",
        "SRB terms as AFPC publishes them: the bonus is a monetary incentive for active-duty Airmen and Guardians in selected skills who reenlist for additional obligated service; the member is expected to serve in the SRB specialty for the entire enlistment paid for; no SRB is payable for reenlisting/extending for any purpose other than continued active service in the SRB skill, nor to gain retainability for a commissioning program after selection. The listing is reviewed at HQAF/HQSF at least annually and posted to myFSS and AFPC; amounts route to the local finance office per AFPC.",
        "Space Force. AFPC administers retention for \"Airmen and Guardians\" jointly: DAFI 36-2606 applies, SFSC is named alongside AFSC in the CJR and SRB structures, and the same windows, caps, and zone table govern. As published, there is no separate Guardian retention system — Guardians' retention is the DAF system.",
      ],
      bullets: [
        { title: "SRB zones (DAFI 36-2606, May 22, 2024, Table 4.1 — as quoted in official AF BCMR work product)", text: "Zone A: at least 17 months of continuous active service (other than ADT as a reservist), up to 6 years TAFMS · Zone B: 6–10 years · Zone C: 10–14 years · Zone E: 18–20 years · Zone F: 20–25 years. One SRB per zone." },
      ],
      flags: [
        "There is NO Zone D in the DAF table — the sequence runs A/B/C/E/F as published. (Pre-research shorthand sometimes lists \"A/B/C/E\"; the current DAFI table also carries F. This entry prints A/B/C/E/F with the DAFI citation.) Conflict printed, not blended.",
        "The DAF SRB zone table is quoted from DAFI 36-2606 via official AF BCMR work product, not from the DAFI PDF directly — an official-source quotation, flagged as such.",
        "myFSS is CAC-gated: the CJR limitation list and current SRB listing live there and at AFPC, never in this app.",
      ],
      links: [{ label: "AFPC Retention", url: "https://www.afpc.af.mil/retention/" }],
      source: "AFPC Retention; DAFI 36-2606 (May 22, 2024) Table 4.1, as quoted in AF BCMR work product; Warren AFB MPF CJR guidance",
    },
  ],
};

/* ---------------------------- Tile 6 — Coast Guard ------------------------- */

const TILE_CG: ReenTile = {
  key: "cg",
  label: "Coast Guard",
  tileSub: "Entry 11 · PSC routing, the CO's recommendation, the FY26 fact",
  intro:
    "Coast Guard reenlistment runs through the Personnel Service Center under COMDTINST M1000.2, and it turns on a positive commanding officer recommendation. The FY26 fact on this tile — no SRB at all, targeted bonuses instead — prints with its fiscal year attached, as a dated example, not a standing rule.",
  entries: [
    {
      id: "e11",
      n: 11,
      name: "Coast Guard — PSC routing, the CO's recommendation, and the FY26 no-SRB fact",
      summary:
        "CG reenlistment: COMDTINST M1000.2 eligibility through PSC (appeals to CG PSC-EPM active / PSC-RPM Reserve); a positive CO recommendation is required, and a member with 8+ years who meets the criteria but lacks it is entitled to a reenlistment board. FY26 DATED FACT: no Selective Reenlistment Bonuses in FY 2026 (ALCOAST 386/25) — targeted bonuses instead.",
      who: "Coast Guardsmen inside their EOE fiscal year; anyone whose CO recommendation is in doubt (the 8-year board entitlement is the fact to know).",
      body: [
        "Routing and approval. Coast Guard reenlistment/extension eligibility is governed by COMDTINST M1000.2 and administered through the Personnel Service Center: appeals of eligibility criteria go to Commander, CG PSC-EPM (active duty) or CG PSC-RPM (Reserve) — the active/reserve split is the routing fact to remember. The governing eligibility rule, as quoted in official CG BCMR decisions from M1000.2: reenlistment or extension requires a positive commanding officer recommendation and satisfaction of the Article 1.E.2 criteria; a member with 8 or more years of total active/reserve service who meets the criteria but lacks the CO recommendation is entitled to a reenlistment board. PSC's Field Support branch (PSC-PSD) runs Reenlistment Board case files — EPM-1 for active duty, RPM-1 for Reserve.",
        "Bonus programs. The governing instruction is COMDTINST 7220.2A (Aug. 2022); PSC's Military Bonus & Incentive Programs page (dcms.uscg.mil) is the program home, and SRB counseling runs on CG-3307 templates (SRB-01/02/03/05) — the templates themselves confirm the counseling rhythm: Zone A counseling near EAOS and near the 6-year active-duty anniversary, Zone B near the 10-year anniversary, and a distinct counseling track for members entering an extension (extensions and SRBs are different conversations — Read This First tile).",
      ],
      bullets: [
        { title: "Zone definitions — ⚠ dated source", text: "the zone frame in ACN 088/18 (FY19-era, flagged): Zone A = more than 17 months and less than 6 years TIS, tied to within 3 months of end of enlistment / the 6-year anniversary / OBLISERV events; SRB required a reenlistment (members extending were not authorized SRBs under that ACN) and only one SRB per zone per career. MyCG's later SRB-timing guidance (2020–21, ⚠ FY21-era, re-verify against COMDTINST 7220.2A) widened the timing: SRB-eligible members may reenlist any time within the fiscal year of their end of enlistment, and an uncommenced (non-operative) extension may be cancelled to reenlist for an SRB, including extensions signed for transfer/training/advancement OBLISERV." },
      ],
      flags: [
        "FY2026 — DATED EXAMPLE, not a standing rule: per MyCG's official article on ALCOAST 386/25, \"There will be no Selective Reenlistment Bonuses in FY 2026.\" For FY26 the Coast Guard instead runs targeted bonuses — enlistment bonuses for specified ratings (CS/EM/MK as published) and Critical Skills Retention Bonuses for some enlisted ratings and officer/CWO specialties — set by the Military Workforce Planning Team's annual assessment, effective Oct. 1, 2025 – Sep. 30, 2026, with detail on the (internal) Military Bonus and Incentive Program SharePoint. The FY26 fact prints with its fiscal year attached; FY27 will be its own ALCOAST.",
        "The current M1000.2 summary of changes confirms Reserve reenlistment eligibility requirements are identical to active duty (the separate Reserve section was deleted) — reserve differences are routing (RPM vs. EPM), not criteria.",
        "The Coast Guard's historical SRB zone definitions rest on ACN 088/18 (FY19) and FY21-era MyCG timing articles — flagged here; re-verify against COMDTINST 7220.2A (Aug. 2022).",
      ],
      links: [
        { label: "PSC Military Bonus & Incentive Programs (dcms.uscg.mil/PSC)", url: "https://www.dcms.uscg.mil/PSC/" },
        { label: "MyCG — Know when to reenlist for eligible SRB", url: "https://www.mycg.uscg.mil/News/Article/2385476/know-when-to-reenlist-for-eligible-srb/" },
      ],
      source: "COMDTINST M1000.2 (as quoted in CG BCMR decisions); COMDTINST 7220.2A; ALCOAST 386/25 via MyCG; ACN 088/18",
    },
  ],
};

/* --------------------------- Tile 7 — SRB & Bonuses ------------------------ */

const TILE_SRB: ReenTile = {
  key: "srb",
  label: "SRB & Bonuses",
  tileSub: "Entries 12–13 · SRB across the services; BRS Continuation Pay",
  intro:
    "The money structures — programs, not amounts. The Selective Reenlistment Bonus is five separate programs sharing a name; the table below carries each one's zone frame, who sets the live numbers, and the routing rule. Continuation Pay is a different program entirely — a BRS mid-career milestone with its own clock — and the only multiplier figures in this whole section are its published ranges, flagged with their source and date.",
  entries: [
    {
      id: "e12",
      n: 12,
      name: "SRB across the services — one name, five machines",
      summary:
        "SRB comparison table: each service's zone frame as published, who sets the live numbers (current SRB MILPER / MARADMIN / NAVADMIN / HQAF-HQSF listing / ALCOAST), and the routing rule. Three cross-service truths: the bonus attaches to the skill and the term; the message in effect on the date of reenlistment controls; programs can be suspended or cancelled mid-year.",
      who: "Anyone comparing offers across services or across fiscal years — compare structures here, numbers only in the current message.",
      body: [
        "The Selective Reenlistment Bonus exists in every service, but it is five separate programs sharing a name. The durable, printable facts are the structures:",
        "Three cross-service truths the official pages support: (1) a bonus attaches to the skill and the term, not to the person — serve outside the SRB specialty and the agreement is breached; (2) the message in effect on the date of reenlistment controls — earlier and later tables are equally irrelevant; (3) programs can be suspended or cancelled mid-year (USMC FY26, Marine Corps tile; USCG FY26, Coast Guard tile). Any app, counselor, or shipmate quoting you a dollar figure without naming the current message is quoting you history.",
      ],
      tables: [
        {
          caption: "SRB across the services — zone frames, number-setters, and routing rules, as published",
          columns: ["Service", "Zone frame (as published)", "Who sets the live numbers", "The routing rule"],
          rows: [
            ["Army", "By MOS IN/OUT call + QTI tier → SRB STEP level", "Current SRB MILPER", "\"Bonuses will be determined by the SRB message in effect at the time of reenlistment\""],
            ["Marine Corps", "Zones A (17 mo–6 yr), B (6–10), C (10–14); 48-mo full / <36-mo none thresholds", "Current SRB MARADMIN", "No retroactive award if you reenlist before the MARADMIN publishes"],
            ["Navy (AC)", "Zones A (21 mo–6 yr), B (6–10), C (10–14) ⚠ training-extract source", "Current SRB NAVADMIN + NSIPS approval", "C-WAY flag holds the packet until resolved"],
            ["Navy (SELRES)", "⚠ Different zones (A ≤8 yr PEBD, B >8–14, C >14–20; NAVADMIN 086/14, dated)", "Current SELRES SRB guidance", "Reenlistment date must fall in the FY of current EOS"],
            ["Air Force / Space Force", "Zones A/B/C/E/F (DAFI 36-2606 Table 4.1); one SRB per zone", "HQAF/HQSF listing, reviewed at least annually, on myFSS/AFPC", "Amounts via local finance office"],
            ["Coast Guard", "Zone counseling at EOE / 6-yr / 10-yr marks (CG-3307 SRB series)", "Annual Workforce Planning Team assessment + ALCOAST", "⚠ FY26: no SRB at all — targeted bonuses instead (ALCOAST 386/25)"],
          ],
        },
      ],
      flags: [],
      links: [],
      source: "The services' SRB program structures — branch tiles carry each service's own sources",
    },
    {
      id: "e13",
      n: 13,
      name: "BRS Continuation Pay — the mid-career milestone that is NOT an SRB",
      summary:
        "Continuation Pay (CP): a one-time BRS mid-career payout between completion of 8 years and before completion of 12 years, in return for additional obligated service. DoD-published multiplier RANGES (course v2.0, Oct. 2023): regular/AGR 2.5×–13× monthly basic pay; drilling Guard/Reserve 0.5×–6×. DAF published rates (quoted source): RegAF 2.5×, ANG/AFR 0.5×. Pass the 12-year line without electing and CP is lost, not deferred.",
      who: "Every BRS member between years 8 and 12 — put the CP election on the same calendar as the reenlistment decision, and pull your service's current-year CP message before signing either.",
      body: [
        "Continuation Pay (CP) is a separate, Blended Retirement System feature — a one-time mid-career cash payout for BRS members, distinct from any SRB, and easy to miss because nobody's quota depends on offering it to you. The statutory/program frame as DoD publishes it (DoD Continuation Pay course, militarypay.defense.gov, Version 2.0, updated Oct. 2023 — source date flagged per this section's constants rule):",
        "For the other services, current multipliers live in current-year CP messages (Army CP MILPERs are posted via the Army Retention page; USMC/Navy/CG equivalents in their message traffic) and are not printed here. Two practical notes the official frame supports: CP and SRB can coincide in the same career window (they are separate programs with separate agreements — signing one says nothing about the other), and the CP election is time-boxed by the 12-year line — a member who passes 12 years without electing has not deferred CP, they have lost it.",
      ],
      bullets: [
        { text: "CP is payable between completion of 8 years of service and before completion of 12 years of service, at the point each service determines and announces." },
        { text: "It is paid in return for additional obligated service, which can be served concurrently with other obligations." },
        { text: "Each service publishes its own CP guidance and rates by calendar year, based on its retention needs — there is no DoD-wide current multiplier." },
        { title: "Multiplier RANGES published in the DoD course (standing program constants, Oct. 2023 source)", text: "Regular/AGR members 2.5× – 13× monthly basic pay; drilling Guard/Reserve members 0.5× – 6× monthly basic pay (computed as if on active duty)." },
        { title: "DAF published rates (DAFI 36-3012 Ch. 4, as quoted in official AF BCMR decisions, 2023–2025 — flagged as a quoted source)", text: "RegAF multiplier 2.5×, ANG/AFR 0.5×; eligibility = at least 8 and not more than 12 years from PEBD (\"Pay Date\"); requires a Statement of Understanding + commander approval + a 4-year service obligation; the election must be made before the 12th year (and per the quoted guidance, no earlier than 90 days in advance)." },
      ],
      flags: [
        "The DAF CP rates above are a quoted source — DAFI 36-3012 Ch. 4 as quoted in official AF BCMR decisions — not text read from the DAFI directly. Printed flagged, as published.",
      ],
      links: [
        { label: "DoD Continuation Pay course (militarypay.defense.gov)", url: "https://militarypay.defense.gov/" },
        { label: "AFPC Retention (DAFI 36-3012 via AFPC publications)", url: "https://www.afpc.af.mil/retention/" },
      ],
      source: "DoD Continuation Pay course v2.0 (militarypay.defense.gov, Oct. 2023); DAFI 36-3012 Ch. 4 as quoted in AF BCMR decisions",
    },
  ],
};

/* ------------------------- Tile 8 — RE Codes & Barriers -------------------- */

const TILE_RECODES: ReenTile = {
  key: "recodes",
  label: "RE Codes & Barriers",
  tileSub: "Entries 14–15 · RE codes + waiver/correction routes; lateral-move timing",
  intro:
    "If you separate, the RE code on your separation document is the first gate on ever coming back — and codes are service-specific: the same numeral does not mean the same thing across services. This tile carries the codes at official-summary level, the waiver-vs-correction routes, and the one timing fact about lateral moves (the mechanics live in Change Your Job).",
  entries: [
    {
      id: "e14",
      n: 14,
      name: "RE codes — what the code on your separation document actually controls",
      summary:
        "Reenlistment eligibility (RE) codes at official-summary level: Army RE-1/RE-3/RE-4 with the AR 601-210 Table 3-1 definitions; USMC eligible set (RE 1A/B/C, 3N, 3O, 3V), waiver set (3A, 3B, 3C, 3E, 3F, 3H, 3P), ineligible (4, 4B — BCNR correction only, with the published COVID-vaccine exception); Navy RE-4 printed as BOTH published facts; Air Force as an attributed example only; Coast Guard RE-1/RE-3 usage only — no CG code table. Waiver through the gaining side; correction only via the service board on DD Form 149.",
      who: "Anyone separating who might ever come back — check your code before you sign the separation paperwork, while the command that assigned it can still fix an error cheaply.",
      body: [
        "If you separate, your separation document carries a reenlistment eligibility (RE) code — and if you later try to come back (or affiliate), that code is the first gate. Codes are service-specific: each service defines its own code set in its own enlistment/retention guidance, the same numeral does not mean the same thing across services, and sub-codes carry the real detail (the Marine Corps' RE-1 family splits into lettered variants — RE-1A/B/C appear throughout USMC messages as the eligible set).",
        "Waiver and correction routes, as named: a waiver is requested through the gaining side (recruiter / retention channel) under the service's enlistment regulation — the Army Review Boards Agency states the hard limit plainly: an RE code is changed only if the incorrect code was entered for the reason of separation (AR 601-210); it is not changed merely to allow enlistment, and \"under current enlistment standards, the Army is granting very few such waivers.\" A correction of an erroneous or unjust code goes to the service's Board for Correction of Military/Naval Records on DD Form 149 (Army ABCMR via the Army Review Boards Agency; Navy/USMC BCNR) — that is the only route that rewrites the document itself. Records corrections in depth live in Records & DD214, cross-linked below — this entry is the summary.",
      ],
      bullets: [
        { title: "Army — the most completely published frame (AR 601-210, Table 3-1, as quoted verbatim in Army Discharge Review Board decisions)", text: "RE-1 — \"Person completing his or her term of active service who is considered qualified to reenter the U.S. Army.\" Eligibility: qualified for enlistment if all other criteria are met. RE-3 — \"Person who is not considered fully qualified for reentry or continuous service at time of separation, but disqualification is waiverable.\" Eligibility: ineligible unless a waiver is granted. RE-4 — \"Person separated from last period of service with a nonwaiverable disqualification\" (including anyone separated with a DA-imposed bar to reenlistment in effect, or with 18+ years of active federal service for reasons other than length-of-service retirement). Eligibility: ineligible for enlistment. The Army's own DD Form 214 explainer (army.mil) compresses the scale the same way: 1 = acceptable for further service; 2 or 3 = acceptable for future service with waiver(s); 4 = ineligible for future reenlistment." },
        { title: "Marine Corps", text: "RE-1 variants (1A/B/C) are the clean-affiliation set — USMC program messages (e.g., the FY24 AR accession MARADMIN) list RE 1A/B/C, 3N, 3O, 3V as eligible without waiver; 3A, 3B, 3C, 3E, 3F, 3H, 3P require a waiver; 4 and 4B are ineligible. The FY25 PSEP campaign plan states the correction rule: RE-4 / RE-4B must be modified by the Board for Correction of Naval Records before a return (one published exception: codes received solely for COVID-19 vaccine discharge). Other codes are considered case-by-case." },
        { title: "Navy — both published facts, printed together", text: "RE-4 is published as \"not recommended for reenlistment\" (MILPERSMAN 1910-702 — the CO may assign RE-4 and document it on NAVPERS 1070/613). ⚠ The Navy's framing differs from the Army's \"nonwaiverable\" shorthand: PERS-913's official Waivers page states an RE-4 \"simply means that a BUPERS waiver is required\" before enlistment into the SELRES, adjudicated case-by-case via Navy Reserve Recruiting Command. Print both facts: RE-4 is the Navy's most adverse code and a SELRES waiver route through PERS-913 exists as published — do not import the Army's \"never\" into the Navy's system, or vice versa." },
        { title: "Air Force — attributed example only", text: "codes are defined in DAF reenlistment guidance and applied through the SRP/CJR machinery; an official AF BCMR record quoting AFR 35-16 illustrates the granularity — RE 3I = ineligible for immediate reenlistment but eligible for prior-service enlistment with an approved waiver (selected under SRP, no CJR available); RE 1R = first-term airman selected for reenlistment under SRP (not a separation code in practice). ⚠ Printed as an attributed example that DAF codes are service-defined — the current DAFI 36-2606 / myFSS holds the live table." },
        { title: "Coast Guard — no code table built", text: "official pages use RE-1 / RE-3 as the operative pair in return-to-service contexts (e.g., MyCG's Return2Service guidance keys eligibility to RE-1 or RE-3 with PSC handling); the full CG code table lives in COMDTINST M1000.2 — ⚠ not opened in the research pass behind this section; no CG code table is built here from another service's." },
      ],
      flags: [],
      links: [
        { label: "Army DD Form 214 explainer (army.mil)", url: "https://www.army.mil/article/73343/service_discharges_dd_form_214_explained" },
        { label: "Army Review Boards Agency (RE-code change rule, DD 149)", url: "https://www.army.mil/arba" },
        { label: "Navy PERS-913 Waivers (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/career-management/reserve-personnel-mgmt/enlisted/waivers/" },
      ],
      source: "AR 601-210 Table 3-1; USMC program messages & FY25 PSEP campaign plan; MILPERSMAN 1910-702; PERS-913 Waivers; AF BCMR record (AFR 35-16)",
      crossLinks: [{ label: "Records & DD214 — corrections in depth", view: "records" }],
    },
    {
      id: "e15",
      n: 15,
      name: "Lateral move at reenlistment — timing only",
      summary:
        "A lateral move and a reenlistment are usually the SAME transaction, and the order matters: reenlist first in your current job and you may spend the bonus and the boatspace the lateral move needed; let the window close while a package pends and both die together. The mechanics live in Change Your Job — this card is the timing warning only.",
      who: "Anyone whose reenlistment plan includes a new MOS/rating/AFSC — start both conversations with the same counselor, in the same visit.",
      body: [
        "The one fact this section owns: a lateral move and a reenlistment are usually the same transaction, and the order matters. Services run job changes through the retention machinery — the Marine Corps' LATMOV rides the RELM in TFRS and consumes the same boatspace-year logic (Marine Corps tile); the Army's reclassification turns on the same IN/OUT calls as its reenlistment options (Army tile); Navy conversions and Air Force retraining (CJR/NCORP) each key off the member's reenlistment eligibility and window.",
        "The timing traps are structural and identical everywhere: reenlist first in your current job and you may spend the bonus and the boatspace that the lateral move needed; let the window close while a lateral-move package pends and both die together. The branch-by-branch mechanics, eligibility, and school pipelines are in the Change Your Job section — do not duplicate them here; do sequence them with the window entry (Read This First tile) and the Marine Corps entry.",
      ],
      flags: [],
      links: [],
      source: "Timing frame — full mechanics in Change Your Job",
      crossLinks: [{ label: "Change Your Job — lateral-move mechanics", view: "changejob" }],
    },
  ],
};

/* --------------------- Tile 9 — Before You Sign (entry 16) ----------------- */

export const CHECKLIST_ID = "reenlist-before-you-sign";

export const CHECKLIST_TILE = {
  key: "before-you-sign",
  label: "Before You Sign",
  tileSub: "Entry 16 · the 8-item verification checklist, checkable",
} as const;

export const CHECKLIST_TITLE = "Before you sign — the verification checklist";

export const CHECKLIST_WHO = "Every member, every signature. No exceptions for \"routine\" reenlistments.";

export const CHECKLIST_INTRO =
  "Print this; bring it to the counselor. Every item traces to an official framing elsewhere in Part 1. Your checks save to your profile and stay yours — tick each item off as you verify it, and the list is here when you come back.";

export type SignChecklistItem = {
  n: number;
  title: string;
  text: string;
  crossLinks?: ReenCrossLink[];
};

export const BEFORE_YOU_SIGN: SignChecklistItem[] = [
  {
    n: 1,
    title: "The message check",
    text: "For any bonus: name the current SRB message (MILPER / MARADMIN / NAVADMIN / ALCOAST / HQAF listing) and confirm it has published and has not been cancelled or superseded (Marine Corps and Coast Guard tiles). A figure without a message number is not an offer.",
  },
  {
    n: 2,
    title: "Obligated-service math",
    text: "Compute the new obligation from the documents, not the conversation: reenlistment obligation runs from execution of the new DD Form 4 (extension obligation from the day after current ETS — Read This First tile); SRB obligated service is measured ECC-to-new-ECC (USMC) or as additional obligated service beyond your existing agreement (Army). Check the total against HYT/RCP/service-limit ceilings for your grade — a term you cannot legally serve out is a problem your counselor must solve before signature.",
  },
  {
    n: 3,
    title: "The specialty condition",
    text: "SRB agreements pay for service in the SRB skill (the Air Force & Space Force tile states it for DAF; the structure is general). If a lateral move, special duty, or commissioning program is in your near future, ask what it does to the bonus in writing.",
  },
  {
    n: 4,
    title: "Operative dates",
    text: "If you hold an extension, get its operative date (Navy tile). An inoperative extension may be cancellable to reenlist; an operative one is not.",
  },
  {
    n: 5,
    title: "Tax treatment — summary level",
    text: "Bonus pay (reenlistment and continuation pay alike) is gross income under IRS Publication 3 unless the combat-zone exclusion applies: a reenlistment/continuation bonus is excludable when the reenlistment or the execution of the agreement for continued service occurred while the member was present in a combat zone (enlisted and warrant officers; commissioned officers are subject to the monthly cap — highest enlisted pay plus hostile-fire/imminent-danger pay). Combat-zone pay remains subject to Social Security and Medicare taxes and appears on the W-2. Full treatment in Tax & Residency, cross-linked below.",
    crossLinks: [{ label: "Tax & Residency — full treatment", view: "taxes" }],
  },
  {
    n: 6,
    title: "Continuation Pay",
    text: "If you are a BRS member in years 8–12, confirm whether you have elected CP, what obligation it carries, and whether it runs concurrent with the reenlistment obligation (SRB & Bonuses tile) — before the 12-year line makes the question moot.",
  },
  {
    n: 7,
    title: "Recoupment exposure",
    text: "If any prior bonus, incentive, or education benefit carries a service obligation you have not completed, get the recoupment answer in writing before the new signature stacks a second obligation on top of the first.",
    crossLinks: [{ label: "Switching Components — its checklist cross-reference", view: "components" }],
  },
  {
    n: 8,
    title: "What the contract does NOT say",
    text: "Station guarantees, school seats, and option promises exist only as the executed option/contract states them (the Army tile's options are contract terms; a counselor's summary is not). Read the DD Form 4 and every annex before signing, and keep your copies.",
  },
];

/* --------------------- Tile 10 — The IRR: What It Is (17–22) --------------- */

const TILE_IRR_WHAT: ReenTile = {
  key: "irr-what",
  label: "The IRR — What It Is",
  tileSub: "Entries 17–22 · the 8-year MSO, the category, who manages you",
  intro:
    "Part 2 starts with the anchor: the 8-year Military Service Obligation means leaving active duty early changes your category, not your status as a member. Then the IRR itself — no unit, no drill, no pay, still a member — the per-branch manager map (with the research pack's ⚠ page-quality column intact), and each branch's model in its own entry.",
  entries: [
    {
      id: "e17",
      n: 17,
      name: "The 8-year Military Service Obligation — the anchor under everything in Part 2",
      summary:
        "Every enlistment or appointment incurs an 8-year Military Service Obligation (10 U.S.C. §651). Any part not served on active duty or in a drilling status is served in a reserve component — for most members, the IRR. Your contract's split (4+4, 6+2, 3+5) changes where the years are served, never the 8-year total.",
      who: "Everyone in their first enlistment or appointment — read at signing, not at separation.",
      body: [
        "Every person who enlists or is appointed incurs a Military Service Obligation (MSO) of 8 years under 10 U.S.C. §651. The Navy's transfer instruction (MILPERSMAN 1001-145) states the DoD rule in its plainest form: each person who entered initial military service on or after June 1, 1984 must serve a total period of 8 years from the date of enlistment, appointment, or induction — and any part of that service not served on active duty or in a drilling status is served in a reserve component, which for most members means the IRR. GoArmy's Service Commitment page says the same thing in recruiting language: contracts run two to six years of active/Reserve/Guard service, and \"you'll finish out your service commitment in the Individual Ready Reserve.\"",
        "Your contract's split (4+4, 6+2, 3+5) changes where the years are served, never the 8-year total. Two consequences follow: (1) leaving active duty at year 4 does not end your service — it changes your category; (2) the IRR years are not a formality — they are the balance of a statutory obligation, and the obligations in the next tile are its enforcement machinery.",
      ],
      flags: [
        "Individual MSO computation has statutory exceptions and reductions (prior service, certain officer accessions, service-academy and health-professions terms) — your separation document states your own obligation end date (Off-Ramps & On-Ramps tile), and that document, not this entry, is your authority.",
      ],
      links: [
        { label: "GoArmy — Service Commitment (time commitment)", url: "https://www.goarmy.com/army-life/intro-to-army-life/time-commitment" },
        { label: "MILPERSMAN 1001-145 (MyNavyHR PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1000General/1001-145.pdf?ver=FWAqNr64lxVWokGyklDvBQ%3D%3D" },
      ],
      source: "10 U.S.C. §651; MILPERSMAN 1001-145; GoArmy Service Commitment",
    },
    {
      id: "e18",
      n: 18,
      name: "What the IRR is — a Ready Reserve category: no unit, no drill, no pay, still a member",
      summary:
        "The IRR is the part of the Ready Reserve (10 U.S.C. §10144) that is not the Selected Reserve or the Inactive National Guard: people who have already trained and served and still owe obligation, plus a smaller group who completed their MSO and voluntarily remain. No drill, no annual training, no unit, no pay while inactive — but still a member: ID card, recall exposure, standards of conduct. Navy ASP/VTU, Air Force PIRR, and Coast Guard Training/Pay Categories named.",
      who: "Anyone transferring to the IRR — this is the status you are actually entering, as opposed to \"being out.\"",
      body: [
        "The IRR is a category of the Ready Reserve — defined at 10 U.S.C. §10144 as the part of the Ready Reserve that is not the Selected Reserve or the Inactive National Guard. Its population is people who have already trained and served — in the active component or the Selected Reserve — and still owe obligation (previous entry), plus a smaller population who have completed their MSO and voluntarily remain (the Marine Corps and Navy pages both name this group). The services describe the lived reality identically:",
      ],
      bullets: [
        { title: "No drill, no annual training, no unit", text: "MCIRSA: IRR Marines \"are not obligated to drill, conduct annual training, or participate in any military activities (except for periodic Muster activities) until ordered by Presidential Authority.\" Navy: the Active Status Pool is a \"non-pay, non-drill status.\"" },
        { title: "No pay while inactive", text: "stated plainly in the next tile's pay entry." },
        { title: "One training requirement: muster", text: "if ordered to a muster/screening, you attend (next tile). Muster duty itself is duty — it is ordered, time-bounded, and compensated per your service's published practice (entries below)." },
        { title: "Still a member", text: "you hold an ID card, remain subject to recall (next tile), remain subject to standards of conduct (MCIRSA states it expressly: certain criminal offenses can lead to administrative separation and loss of earned benefits), and your service branch remains your \"command\" for administrative purposes (next entry)." },
        { title: "Branch shapes differ at the margins", text: "the Navy splits the IRR into the Active Status Pool (ASP) (non-pay, non-drill) and the Voluntary Training Unit (VTU) (organized units drilling for points only, under Navy Reserve Centers / COMNAVRESFORCOM); the Air Force distinguishes non-participating IRR from Participating IRR (PIRR) members (e.g., Admissions Liaison Officers, CAP-USAF liaison officers) who earn points in named programs under HQ RIO; the Coast Guard tracks IRR members by Training/Pay Category (the CG-3307 counseling names categories E — MSO remaining, H — MSO complete, J, P). The category letter on your paperwork is your service's bookkeeping, not a different obligation." },
      ],
      flags: [],
      links: [
        { label: "MCIRSA — Individual Ready Reserve (MARFORRES)", url: "https://www.marforres.marines.mil/Units/Force-Headquarters-Group/Marine-Corps-Individual-Reserve-Support-Activity/Individual-Ready-Reserve/" },
        { label: "Navy IRR (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/career-management/reserve-personnel-mgmt/irr/" },
      ],
      source: "10 U.S.C. §10144; MCIRSA IRR page; Navy IRR page (MyNavyHR)",
    },
    {
      id: "e19",
      n: 19,
      name: "Who manages you — the per-branch map",
      summary:
        "Your IRR manager IS your chain of command: Army HRC (Fort Knox), USMC MCIRSA (New Orleans), Navy PERS-93 (Millington), Air Force/Space Force ARPC (Buckley SFB), Coast Guard PSC-RPM-3 (Washington, DC). The table carries the research pack's ⚠ page-quality column — including the Army handbook's commercial .com domain caution. No Space Force-specific IRR page exists; Guardians route through ARPC.",
      who: "The day you transfer — save your row of this table somewhere that survives a phone replacement.",
      body: [
        "You have no unit. Your service's IRR manager is your chain of command for every administrative purpose in Part 2. Quality of the public pages varies wildly by branch — the ⚠ quality flag is part of the entry, as the research pack prints it.",
      ],
      tables: [
        {
          caption: "IRR managers by branch — contacts as published, with the pack's page-quality flags",
          columns: ["Branch", "IRR manager", "How you reach them (as published)", "⚠ Page quality"],
          rows: [
            ["Army", "U.S. Army Human Resources Command (HRC), Fort Knox — IMA/IRR Branch", "IRR Career Counselor handbook site; 1-888-ARMY-HRC; IRR/IMA team email usarmy.knox.hrc.mbx.rpmd-ima-irr-branch@army.mil; (502) 613-5566; DA Form 3725 for address verification", "⚠ Mixed. The handbook content is complete and current in substance, but it lives on a commercial .com domain (irrcareercounselor.com), not a .mil — verify you are on the HRC-linked site before submitting personal information, and prefer the phone/email routes HRC itself publishes"],
            ["Marine Corps", "MCIRSA (Marine Corps Individual Reserve Support Activity), MARFORRES, New Orleans — successor to MOBCOM (deactivated June 17, 2011)", "MCIRSA page on marforres.marines.mil; muster contact smb_mcirsamuster1@usmc.mil; MARFORRES Customer Service Center (800) 255-5082", "Best in class. One page carries obligations, muster procedure, contacts, and benefits framing — the model the other services don't match"],
            ["Navy", "Navy Personnel Command, PERS-93 (IRR Force Management Division), Millington, TN", "IRR page + IRR FAQ on MyNavyHR; MNCC 1 (833) 330-MNCC; askmncc@us.navy.mil; mail: Commander, NPC (PERS-93), 5720 Integrity Drive, Millington, TN 38055", "Strong. FAQ format, directives cited per answer (BUPERSINST 1001.39F CH-1), MILPERSMAN articles public. ⚠ The IRR page's FY-26 physical muster notice is a standing banner (\"no FY-26 physical muster scheduled at this time\" as crawled) — muster scheduling is posted there, not mailed on a predictable cycle"],
            ["Air Force / Space Force", "Air Reserve Personnel Center (ARPC), Buckley SFB — Pre-trained Individual Manpower (PIM) Readiness Branch", "ARPC IRR page (arpc.afrc.af.mil/IRR); PIM Management email ARPC.PIM.Management@us.af.mil; Total Force Service Center 1-800-525-0102; updates also via myFSS", "⚠ Thin and fragile. The ARPC IRR page itself returned 403 to the research pass's fetcher; the substantive public record is ARPC news articles about musters plus DVIDS muster coverage. Contacts are as ARPC publishes them in those articles. ⚠ No Space Force-specific IRR page exists — Guardians with remaining MSO are administered through DAF/ARPC channels; no separate USSF IRR guidance was found or is reconstructed here"],
            ["Coast Guard", "CG Personnel Service Center, Reserve Personnel Management (PSC-RPM), RPM-3 — PSC is, in the CG-3307's words, your Commanding Officer while in the IRR", "RPM-3 site (dcms.uscg.mil/PSC/RPM/RPM-3); query email HQS-SMB-CGPSC-RPM-3-QUERY@uscg.mil; mail: Commander (CG PSC-RPM), PSC, USCG Stop 7200, 2703 Martin Luther King Jr Ave SE, Washington, DC 20593-7200", "Strong on paper, scattered in practice. The governing documents (IRR Member Guide, rev. Nov. 7, 2025; CG-3307 A&T-10A counseling) are complete and public as PDFs, but there is no single FAQ-style landing page — the Member Guide PDF is the page"],
          ],
        },
      ],
      flags: [
        "Army IRR handbook caution, printed with the link wherever it appears in this section: the handbook lives on a commercial .com domain, not .mil. Verify you are on the HRC-linked site before submitting personal information, and prefer the HRC phone/email routes in the table.",
        "No Space Force-specific IRR content exists in the sources — Guardians route through ARPC. Nothing USSF-specific is synthesized anywhere in Part 2.",
      ],
      links: [],
      source: "HRC; MCIRSA (MARFORRES); PERS-93 (MyNavyHR); ARPC; CG PSC-RPM-3 — as each publishes",
    },
    {
      id: "e20",
      n: 20,
      name: "Army IRR — HRC's handbook rules",
      summary:
        "Army IRR under HRC: muster as directed, report information changes promptly (DA Form 3725 is the address-verification mechanism of record), voluntary point-earning IDT exists, medical readiness routes through LHI with HRC Command Surgeon adjudication — and the ⚠ SGLI premium-billing trap for IRR Soldiers attached and drilling for points only.",
      who: "Army IRR Soldiers — the handbook is your standing reference; the DA Form 3725 route is your address-update mechanism of record.",
      body: [
        "HRC's IRR handbook page (⚠ .com hosting, previous entry) publishes the Army version of the IRR bargain. The manager is HRC; the member's duties are muster as directed and report information changes promptly (full list in the next tile). The handbook's own structure is the tell for what Army IRR life actually involves: IRR Soldier Responsibilities, Muster FAQs, Incentives/Bonuses/Benefits, Inactive Duty Training for IRR Soldiers (voluntary point-earning duty exists — next tile), SGLI (next tile), IRR Medical Readiness (periodic health assessment routing runs through LHI for IRR Soldiers — the TRICARE-site PHA guidance for IRR/IMA Soldiers directs registration at lhi.care and adjudication of conditions by the HRC Command Surgeon before any transfer to the Selected Reserve), and Soldier Administrative Maintenance.",
        "Reporting routes as published: the site's Contact Us, your Career Management Office via 1-888-ARMY-HRC, DA Form 3725 (Army Reserve Status and Address Verification Form) to the team email, or the IRR/IMA team directly (email and phone in the previous entry).",
      ],
      flags: [
        "⚠ HRC also sends individual billing notices for SGLI premiums to IRR/IMA Soldiers who are attached and drilling for points only (DFAS) — an IRR Soldier who volunteers for point-only duty takes on a premium-payment duty that a non-participating IRR Soldier does not have (next tile).",
        "⚠ The handbook link below lives on a commercial .com domain (irrcareercounselor.com), not a .mil — the pack's caution: verify you are on the HRC-linked site before submitting personal information, and prefer the HRC phone/email routes (1-888-ARMY-HRC; usarmy.knox.hrc.mbx.rpmd-ima-irr-branch@army.mil) alongside it.",
      ],
      links: [{ label: "HRC IRR handbook (⚠ commercial .com domain — see flag)", url: "https://www.irrcareercounselor.com/about-irr" }],
      source: "HRC IRR handbook (irrcareercounselor.com); DFAS SGLI premium billing (Army IRR/IMA)",
    },
    {
      id: "e21",
      n: 21,
      name: "Marine Corps and Navy IRR — the two documented models",
      summary:
        "USMC (MCIRSA): Administrative Musters — regional and mega-muster events, no more than 4 hours, paid stipend (page states \"currently $237 before taxes\" ⚠ aging figure), travel not reimbursed, >150-mile members contact MCIRSA to be excused; Civilian Employment Information certified at least annually in MOL. Navy (PERS-93): NAVPERS 1080/3 annual screening in your anniversary month, physical muster when directed, ISL transfer as the named consequence of failure.",
      who: "USMC and Navy IRR members — know whether your service's screening is an event (USMC) or a form with a deadline month (Navy). Missing either is the same failure.",
      body: [
        "Marine Corps — MCIRSA. The MCIRSA page (What the IRR Is, above) is the most complete single IRR page in any service. Its distinctive features: musters are Administrative Musters run as regional and mega-muster events (MCIRSA publicly describes itself as the only service conducting large multi-regional IRR musters); an ordered muster lasts no more than four hours, carries a paid stipend (the page states \"currently $237 before taxes\" ⚠ — a page-stated figure that will age; treat as the order of magnitude, not a rate), and travel is not reimbursed — members more than 150 miles (or 3 hours' drive) from the muster site should contact MCIRSA to be excused rather than travel at their own expense. \"This is an administrative muster only. You will not be involuntarily activated as a result of attendance at the muster.\" Civilian Employment Information is reviewed and certified at least annually in Marine Online (MOL) — the only service in the research pack that names its self-service system for the annual certification.",
        "Navy — PERS-93 / ASP. The Navy's model is paper-screening-first: every IRR member is screened at least annually by submitting NAVPERS 1080/3 (IRR Annual Screening) to PERS-93 during the member's anniversary month (MILPERSMAN 1001-135), and attends a physical muster when directed (the IRR page posts the current muster schedule — as crawled, no FY-26 physical muster was scheduled). The FAQ's obligation list is the most granular in DoD (next tile). Two Navy-specific status facts: ASP enlisted members are not eligible for advancement unless mobilized/recalled (VTU members are, if satisfactory participants under HYT); and failure to complete screening/muster \"will be used as a basis for determining participation status\" and may result in transfer to the Inactive Status List (USNR-S2) — the Navy's Standby Reserve inactive list (Off-Ramps & On-Ramps tile).",
      ],
      flags: [
        "The USMC muster stipend (\"currently $237 before taxes\") is a page-stated figure that will age — it prints with the page's own \"currently\" framing, as the order of magnitude, not a rate.",
      ],
      links: [
        { label: "MCIRSA — Individual Ready Reserve", url: "https://www.marforres.marines.mil/Units/Force-Headquarters-Group/Marine-Corps-Individual-Reserve-Support-Activity/Individual-Ready-Reserve/" },
        { label: "Navy IRR FAQ (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/IRR/IRR-FAQ/" },
        { label: "MILPERSMAN 1001-135 (annual screening, PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1000General/1001-135.pdf?ver=LKf3j_JW9auv51GuKPp_MA%3d%3d" },
      ],
      source: "MCIRSA IRR page; Navy IRR FAQ; MILPERSMAN 1001-135",
    },
    {
      id: "e22",
      n: 22,
      name: "Air Force and Coast Guard IRR — ARPC musters and the RPM-3 Member Guide",
      summary:
        "Air Force (ARPC): ~38,000-member DAF IRR, musters nationwide (150-mile radius, 2–4 hours, $253 for 2025 attendance ⚠ year-stated), minimum 2 hours of muster duty under §12319, annual email survey. Coast Guard (PSC-RPM-3): CG-3307 (A&T-10A) counseling at transfer, the IRR Member Guide (rev. Nov. 7, 2025), and the ASQ in Direct Access Aug. 1 – Oct. 31 — the only published fixed annual screening window.",
      who: "AF/SF and CG IRR members — your screening has a channel (ARPC email/myFSS) or a season (Aug.–Oct. ASQ). Put both on a calendar.",
      body: [
        "Air Force — ARPC. ARPC's PIM Readiness Branch runs the DAF IRR muster and mobilization program. As ARPC publishes it (news releases, 2025–2026): the DAF IRR is roughly 38,000 former active/Reserve/Guard Airmen with remaining MSO; musters are held at installations nationwide through the year (20+ events in the 2026 cycle), drawing members within a 150-mile radius; a muster runs two to four hours, verifies contact information, provides medical screening and benefit updates, and paid $253 for 2025 attendance ⚠ (year-stated figure, same aging caveat as the USMC stipend). Muster duty is a Title 10 requirement (§12319) — ARPC states the ordered member is legally obligated to perform a minimum of two hours of muster duty and is compensated for it. Updates and exemption requests go to ARPC.PIM.Management@us.af.mil, the Total Force Service Center (1-800-525-0102), or myFSS. ⚠ ARPC also runs an annual email survey/screening — an unanswered ARPC email is not junk mail; it is your screening (next tile).",
        "Coast Guard — PSC-RPM-3. The CG model is counseling-document-driven: at transfer, the member initials a CG-3307 (A&T-10A) that spells out the entire IRR relationship (next tile), and the IRR Member Guide (PSC, revised Nov. 7, 2025) is the standing reference. Screening is the Annual Screening Questionnaire (ASQ), submitted in Direct Access between Aug. 1 and Oct. 31 each year (per the official ASQ self-service guide) — the only service here that publishes a fixed annual screening window. The CG is also the most explicit about continued-status stakes: officers and retirement-qualified enlisted members must accrue 50 retirement points per anniversary year to remain in an active status (SELRES, IRR, ASL) — failure means transfer to the ISL — and participation adherence is reviewed monthly for officers and annually for others (Member Guide §4). IRR members may be required to serve up to 30 days per fiscal year on active duty for training, and must have PSC-RPM approval before performing duty of any type (including points-only IDT).",
      ],
      flags: [
        "The ARPC muster payment ($253) is stated for 2025 attendance — a year-stated figure that will age, printed with its year, as the order of magnitude, not a rate.",
        "ARPC IRR content rests on ARPC news releases + DVIDS coverage: the ARPC IRR page itself returned 403 to the research pass's fetcher (see the manager table's ⚠ page-quality column).",
      ],
      links: [
        { label: "ARPC muster program (ARPC news)", url: "https://www.arpc.afrc.af.mil/News/Article-Display/Article/4207398/air-reserve-personnel-center-encourages-participation-with-irr-muster-and-mobil/" },
        { label: "DVIDS — 911th AW hosts ARPC IRR muster", url: "https://www.dvidshub.net/news/501701/911th-aw-hosts-arpc-irr-muster-local-members" },
        { label: "CG IRR Member Guide (rev. Nov. 7, 2025, PDF)", url: "https://dcms.uscg.mil/Portals/10/IRR%20-%20Standby%20Reserve%20Member%20Guide%20Revision%20-%20Final.pdf" },
        { label: "CG IRR-to-SELRES transition (PSC-RPM-3)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-PSC-RPM/RPM-3/Individual-Ready-Reserve-IRR/IRR-to-SELRES-Transition/" },
      ],
      source: "ARPC news releases (2025–2026) + DVIDS; CG IRR Member Guide (rev. Nov. 7, 2025); CG ASQ self-service guide",
    },
  ],
};

/* ------------- Tile 11 — IRR Obligations, Recall & Status (23–29) ---------- */

const TILE_IRR_OBLIGATIONS: ReenTile = {
  key: "irr-obligations",
  label: "IRR Obligations, Recall & Status",
  tileSub: "Entries 23–29 · the obligations, muster & screening, recall, pay, TRICARE, ID/SGLI, points",
  intro:
    "The obligations are real — no softening, no exaggeration. Five reporting duties every service publishes in substance, the one recurring duty (screening/muster), the three recall authorities distinguished in a table, and the status answers stated plainly: no pay while inactive, no TRICARE in IRR status, SGLI only in the corners VA names, and 15 membership points a year unless you work for more.",
  entries: [
    {
      id: "e23",
      n: 23,
      name: "The obligations — what you owe, per the services' own lists",
      summary:
        "The five IRR duties every service publishes: keep your manager informed continuously (address/phone/email; marital/dependency; employer information certified annually even if unchanged, even if unemployed; education/licenses/skills; medical/physical changes), answer official correspondence, complete the annual screening, maintain readiness basics, and report if ordered. The Army's named consequence for failure: adverse administrative action.",
      who: "Every IRR member, every year of the obligation. The single highest-frequency failure is a stale address — the services can only order the member they can find.",
      body: [
        "Strip the branch vocabulary away and every service's published obligation list is the same five duties. The branch lists below are quoted in substance from the official pages; your service's list is the one that binds you.",
      ],
      bullets: [
        { title: "1. Keep your manager informed — continuously (Army, HRC handbook)", text: "current mailing address, phone, and email; marital/dependency changes; civilian employer information — certified annually even if unchanged, even if unemployed; education, licenses, skills; physical/medical changes affecting readiness or ability to mobilize; any other status change affecting readiness." },
        { title: "Navy (PERS-93 FAQ, BUPERSINST 1001.39F CH-1 ¶306)", text: "the same six items, nearly word-for-word (address/phone/email; marital/dependency; employer annually; education/licenses/skills; physical/medical; any other readiness-affecting change)." },
        { title: "Marine Corps (MCIRSA)", text: "contact information (address, at least one phone number, email); Civilian Employment Information — annual review and certification minimum, in MOL, updated when it changes; marital status; number of dependents; physical condition (any condition that would prevent meeting USMC physical/mental standards)." },
        { title: "Coast Guard (CG-3307 A&T-10A, initialed item by item)", text: "promptly advise PSC-RPM of changes of address, contact information, marital status, dependency status, and (per the Member Guide/ASQ) employment, education, and any condition affecting availability." },
        { title: "Air Force (ARPC)", text: "any change in status reported to ARPC — contact updates, physical-status changes, and exemption requests run through the PIM channels (What It Is tile). (ARPC's published formulation is the briefest of the five; the content expected is the same record the muster verifies.)" },
        { title: "2. Answer official correspondence", text: "every list says it; the Army handbook adds the consequence: failure to comply, \"including failure to promptly answer any correspondence from HRC, could result in adverse administrative action.\"" },
        { title: "3. Complete the annual screening", text: "next entry." },
        { title: "4. Maintain readiness basics", text: "Navy: maintain physical fitness and medical readiness standards, obtain physicals when required, maintain military uniforms in serviceable condition. USMC: retain uniforms and ID card by law, maintain uniform regulations and standards of conduct. CG: maintain physical fitness and weight standards (COMDTINST M1020.8), maintain required seabag items up to four years, meet medical retention standards before performing duty, and surrender the Government Travel Charge Card and CAC at transfer (your IRR credential is the USID card — entry below)." },
        { title: "5. Report if ordered", text: "to a muster, to screening, or to active duty (recall entry below). MCIRSA's formulation covers all three: report for involuntary recall \"whether operational, administrative (i.e., Administrative Musters), or legal.\"" },
      ],
      flags: [],
      links: [],
      source: "HRC IRR handbook; Navy IRR FAQ (BUPERSINST 1001.39F CH-1 ¶306); MCIRSA; CG-3307 A&T-10A; ARPC — branch pages in the What It Is tile carry the binding lists",
    },
    {
      id: "e24",
      n: 24,
      name: "Muster and annual screening — the one recurring duty, by service",
      summary:
        "Screening is statutory: 10 U.S.C. §10149 requires annual Ready Reserve screening and §12319 provides for muster duty — ordered duty, minimum 2 hours per ARPC's published practice. By service: Army as directed; USMC Administrative Muster ≤4 hrs with the >150-mile excuse route; Navy NAVPERS 1080/3 in the anniversary month + physical muster when directed; AF annual email survey + in-person muster if selected; CG ASQ in Direct Access Aug. 1–Oct. 31. Unsatisfactory participation is a defined status with service-named consequences.",
      who: "Put your service's screening mechanism on a recurring calendar the week you transfer. \"I never got the email\" is a foreseeable failure, not a defense the services publish.",
      body: [
        "Screening is a statutory function, not a service courtesy: 10 U.S.C. §10149 requires the Ready Reserve to be screened annually, and §12319 provides for muster duty. How it reaches you:",
      ],
      bullets: [
        { title: "Army", text: "muster as HRC directs — virtual muster, in-person muster (e.g., a personnel accountability muster), mail, or other means. No fixed annual form is published on the handbook page; the duty is to complete the readiness update in the form HRC directs, when directed." },
        { title: "Marine Corps", text: "the IRR Administrative Muster, if ordered — regional/mega-muster events, ≤4 hours, stipend paid, >150-mile members contact MCIRSA for excuse (What It Is tile). Not every Marine is ordered every year; every ordered Marine attends or is excused through MCIRSA." },
        { title: "Navy", text: "NAVPERS 1080/3 annual screening to PERS-93 in your anniversary month, every year (late submission invites administrative action, up to ISL transfer — What It Is tile), plus physical muster when directed." },
        { title: "Air Force", text: "annual email survey plus in-person muster if selected (150-mile radius; 2–4 hours; minimum 2 hours of muster duty under §12319; excused if no muster is held within range — per ARPC's published practice)." },
        { title: "Coast Guard", text: "ASQ in Direct Access, Aug. 1 – Oct. 31 annually; an ASQ submitted with any recall status other than \"Available for Recall\" is routed through the chain for counseling (official ASQ guide)." },
      ],
      flags: [
        "Unsatisfactory participation is a defined status, not a shrug. DoD's participation framework (DoDI 1215.06 line / 32 CFR Part 100 tradition) designates a member who fails ordered screening or muster duty without satisfactory evidence of why as an unsatisfactory participant, with service options running from ordered training duty to separation processing. Each service's published consequence is in the What It Is tile (Navy: ISL transfer; CG: ISL transfer for participation failures; Army: adverse administrative action). This entry prints the existence and the service-named consequences; it does not print legal advice about contesting a designation — that conversation belongs with a military legal assistance office (Know Your Rights, cross-linked below).",
      ],
      links: [],
      source: "10 U.S.C. §§10149, 12319; HRC handbook; MCIRSA; MILPERSMAN 1001-135; ARPC; CG ASQ guide",
      crossLinks: [{ label: "Know Your Rights — the legal frame", view: "rights" }],
    },
    {
      id: "e25",
      n: 25,
      name: "Recall exposure — the three authorities, named and distinguished",
      summary:
        "The recall-authorities table: §12301(a) full mobilization (Congress-declared war/emergency; any reserve member; duration + 6 months) / §12302 partial mobilization (Presidential emergency; Ready Reserve; 1,000,000 cap, 24 consecutive months) / §12304 Presidential Reserve Call-Up (no emergency declaration needed; Selected Reserve + IRR ONLY via the volunteer mobilization category under §10144(b); 200,000 cap, 30,000 IRR max; ⚠ 365 vs. 270 days conflict printed). A summary of published authorities, not legal advice.",
      who: "Every IRR member — read once, carefully, at transfer; the distinctions (especially §12304's volunteer category) decide real questions later.",
      body: [
        "IRR members are subject to involuntary recall to active duty. The Navy FAQ states its ASP exposure as 10 U.S.C. §§12301(a) and 12302; the full statutory frame DoD publishes has three main authorities, and they are not interchangeable:",
        "Two honest qualifiers the official material supports: (1) §12304's IRR reach is genuinely narrower than the other two — it touches only the volunteer mobilization category, which is also the category that carries full-time SGLI eligibility (entry below); §§12301(a) and 12302 reach the IRR as such, volunteer or not. (2) At screening/recall, members are screened for medical and personal status, and may present delay, deferment, or exemption cases to the mobilization authority (MCIRSA states this expressly) — but under DoD's screening framework, civilian employment alone does not earn a deferment, delay, or exemption after mobilization is ordered; hardship and key-employee screening are designed to be resolved before orders arrive (Off-Ramps & On-Ramps tile). Related authorities exist and are named here only to prevent confusion: §12304a (Secretary of Defense, major disaster/emergency response, ≤120 days) and §12304b (preplanned combatant-command missions, Selected Reserve-focused) — full mobilization treatment is Guard & Reserve Hub / Know Your Rights territory, cross-linked, not duplicated.",
        "This entry is a summary of published authorities, not legal advice; a member holding actual orders needs a legal assistance office, not an app.",
      ],
      tables: [
        {
          caption: "The three recall authorities — 10 U.S.C. §§12301(a), 12302, 12304, as published",
          columns: ["Authority", "Common name", "Trigger", "Who it reaches", "Ceilings as published"],
          rows: [
            ["§12301(a)", "Full mobilization", "War or national emergency declared by Congress, or when otherwise authorized by law", "Any reserve-component member — the whole reserve structure, IRR included", "Duration of the war/emergency plus 6 months; no numeric cap stated"],
            ["§12302", "Partial mobilization", "National emergency declared by the President, or when otherwise authorized by law", "The Ready Reserve — units and individual members not assigned to units (the IRR)", "Not more than 1,000,000 Ready Reserve members at any one time; not more than 24 consecutive months per call"],
            ["§12304", "Presidential Reserve Call-Up", "Presidential determination that augmenting the active force is necessary for an operational mission — no emergency declaration required (Congress must be notified)", "The Selected Reserve plus IRR members in the designated mobilization category — a category a member can only be placed in by volunteering (10 U.S.C. §10144(b))", "Not more than 200,000 total at any one time, of whom not more than 30,000 may be IRR members; ⚠ duration stated as 365 consecutive days in the current statute text, while older official summaries (e.g., GAO's post-9/11 table) print 270 days — printed here as a source conflict; the current U.S. Code text controls"],
          ],
        },
      ],
      flags: [
        "§12304 duration conflict, printed as a conflict: 365 consecutive days in the current statute text vs. 270 days in older official summaries (GAO's post-9/11 table). Both print; the Code controls. Never blended.",
      ],
      links: [{ label: "Navy IRR FAQ (ASP recall under 12301(a)/12302)", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/IRR/IRR-FAQ/" }],
      source: "10 U.S.C. §§12301, 12302, 12304, 10144; Navy IRR FAQ",
      crossLinks: [
        { label: "Know Your Rights — USERRA/SCRA & the legal frame", view: "rights" },
        { label: "Guard & Reserve Hub — mobilization treatment", view: "reserve" },
      ],
    },
    {
      id: "e26",
      n: 26,
      name: "Pay — none while inactive, stated plainly",
      summary:
        "IRR members in inactive status receive NO pay — no drill pay, no retainer, no stipend for merely existing in the category. The only money that attaches to IRR status is compensation for duty actually performed: ordered muster duty, voluntary active-duty tours, and points-only duty (which pays nothing by definition).",
      who: "Anyone budgeting a separation — the IRR years are unpaid years, full stop.",
      body: [
        "IRR members in inactive status receive no pay. No drill pay (there is no drill), no retainer, no stipend for merely existing in the category. MCIRSA states it in one sentence: \"Individuals assigned to the IRR receive no pay.\"",
        "The only money that attaches to IRR status itself is compensation for duty actually performed: ordered muster duty (the USMC stipend and ARPC muster payment in the What It Is tile — ⚠ both are page-stated current figures that will age), voluntary active-duty tours (which pay as active duty and carry full benefits for the tour's duration — MCIRSA: a member \"may receive pay and full benefits (including medical care and dental care for member and dependents) for voluntarily performing specific types of active duty\"), and points-only duty (which pays nothing by definition — points entry below). If a website or a \"benefits\" mailer implies an IRR retainer exists, it is selling something.",
      ],
      flags: [],
      links: [{ label: "MCIRSA — Individual Ready Reserve", url: "https://www.marforres.marines.mil/Units/Force-Headquarters-Group/Marine-Corps-Individual-Reserve-Support-Activity/Individual-Ready-Reserve/" }],
      source: "MCIRSA IRR page",
      crossLinks: [{ label: "Guard & Reserve Hub — drill-pay mechanics for drilling statuses", view: "reserve" }],
    },
    {
      id: "e27",
      n: 27,
      name: "TRICARE — not eligible in IRR status, except upon activation",
      summary:
        "In inactive IRR status you have NO TRICARE medical eligibility. TRICARE's own plan page: \"Individual Ready Reserve members, including Navy Reserve Voluntary Training Units, don't qualify to purchase TRS.\" What changes the answer is status change (activation over 30 days), not IRR membership. The one narrow exception: the TRICARE Dental Program (TDP) is open to IRR members — dental only, not medical coverage.",
      who: "The separation benefits brief — replace your health coverage before the active-duty coverage ends; the IRR is not a coverage bridge. Transitional coverage that does exist (TAMP, CHCBP) is status- and activation-based → Benefits / Guard & Reserve Hub.",
      body: [
        "TRICARE's own plan page carries the controlling sentence: \"Individual Ready Reserve members, including Navy Reserve Voluntary Training Units, don't qualify to purchase TRS.\" Generalize it accurately: in inactive IRR status you have no TRICARE medical eligibility — not TRICARE Reserve Select (a Selected Reserve product; the Reserve Hub documents the IRR exclusion and its statutory root), not active-duty TRICARE.",
        "What changes the answer is status change, not IRR membership: upon activation (orders over 30 days), the member and family become eligible on active-duty terms, with the pre-activation and TAMP transition rules the Reserve Hub and Benefits sections document. One narrow, genuinely-published exception: the TRICARE Dental Program (TDP) — a separate, premium-based dental plan — is open to Selected Reserve and IRR members and their families (TRICARE dental pages; sponsor must have at least 12 months of service commitment remaining to enroll). Dental is not medical coverage; do not let a TDP enrollment read as TRICARE eligibility.",
      ],
      flags: [],
      links: [{ label: "TRICARE Reserve Select (IRR exclusion, verbatim)", url: "https://tricare.mil/Plans/HealthPlans/TRS" }],
      source: "TRICARE — TRS plan page; TRICARE Dental Program pages",
      crossLinks: [
        { label: "Benefits — transitional coverage (TAMP, CHCBP)", view: "benefits" },
        { label: "Guard & Reserve Hub — TRS/TAMP framing", view: "reserve" },
      ],
    },
    {
      id: "e28",
      n: 28,
      name: "ID card, exchange/commissary, and SGLI — the status bundle",
      summary:
        "IRR members are eligible for the Next Generation USID card (surrender your CAC at transfer), with exchange/commissary/MWR access per MCIRSA's published benefit set; Navy IRR members may fly Space-A with a DD Form 1853 from PERS-93. SGLI draws a line INSIDE the IRR: full-time coverage only for unit-assigned members and §12304 volunteer-category members; a 120-day free tail after assignment to the IRR; VGLI conversion without health requirements within 240 days; and the Army points-only premium-billing trap.",
      who: "ID/USID: at transfer (surrender CAC, obtain USID, confirm DEERS). SGLI/VGLI: the 120- and 240-day clocks start at assignment to the IRR — calendar them at separation, not after.",
      body: [
        "ID card. IRR members are eligible for the Next Generation Uniformed Services ID card — Military OneSource's ID page lists \"Members of the Individual Ready Reserves and Inactive National Guard\" among eligible populations, issued via ID Card Office Online / a RAPIDS site with DD Form 1172-2. MCIRSA lists the IRR benefit set expressly: military ID card, ID cards for dependents, PX (Exchange) benefits, Commissary benefits, and MWR benefits. (The Coast Guard's counseling adds the mechanical note: you surrender your CAC at transfer — the USID is the IRR credential, and it is also what makes the exchange/commissary/MWR access above work at the register.) ⚠ Access follows the card and DEERS record; a lapsed record or an expired card ends the privilege in practice until renewed — keep DEERS current the same way you keep your service manager current (obligations entry).",
        "Space-A footnote (Navy-published): IRR members on the active status list may fly Space-Available with a military ID card plus an authenticated DD Form 1853 (Authentication of Reserve Status for Travel Eligibility), obtained from PERS-93 (Navy FAQ). Full Space-A rules → Military Travel HQ, cross-linked below.",
        "So the plain SGLI answer: a typical non-participating IRR member does not carry standing SGLI beyond the 120-day tail unless they are in the §12304 volunteer mobilization category or convert to VGLI in the window. Verify your own posture in SOES via milConnect — the system of record — rather than assuming either way.",
      ],
      bullets: [
        { title: "SGLI — the nuanced one (VA's published eligibility draws a line inside the IRR)", text: "Full-time SGLI covers Ready Reserve members assigned to a unit and scheduled for at least 12 periods of inactive training per year — a non-participating IRR member is not in that set — and members of the IRR who volunteer for a mobilization category under §12304(i)(1) (VA SGLI page; SGLI Handbook)." },
        { title: "The tail and the conversion window", text: "a member leaving a covered status gets the standard tail: SGLI continues free for 120 days after assignment to the IRR, after which an unconverted member has no coverage; the VA's IRR conversion timeline gives IRR members a VGLI path — conversion without health requirements within 240 days of assignment to the IRR (and with health requirements up to 1 year + 120 days). VA's Guard/Reserve page lists \"member of the Individual Ready Reserve\" as a VGLI-eligible category in its own right." },
        { title: "Part-time SGLI", text: "exists for Reserve members not qualifying for full-time coverage while performing duty under calls/orders of less than 31 days — duty-period coverage, not standing coverage." },
        { title: "Points-only trap (Army-published)", text: "IRR/IMA Soldiers attached and drilling for points only who elect coverage are billed individually by HRC for SGLI premiums (DFAS) — coverage in that posture is neither automatic-free nor payroll-deducted." },
      ],
      flags: [],
      links: [
        { label: "Military OneSource — Military ID & CAC Cards", url: "https://www.militaryonesource.mil/military-basics/new-to-the-military/military-id-and-cac-cards-for-military-community/" },
        { label: "VA — SGLI eligibility", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/" },
        { label: "SGLI/VGLI Handbook (VA, PDF)", url: "https://benefits.va.gov/INSURANCE/docs/sgli-vgli-handbook.pdf" },
        { label: "DFAS — SGLI premiums (Army IRR/IMA billing)", url: "https://www.dfas.mil/MilitaryMembers/paydeductions/sgli/resguardpremiums/army/" },
      ],
      source: "Military OneSource (ID cards); VA SGLI eligibility + SGLI/VGLI Handbook; DFAS (Army IRR/IMA premium billing); Navy IRR FAQ (DD 1853)",
      crossLinks: [{ label: "Military Travel HQ — Space-A rules", view: "travelhq" }],
    },
    {
      id: "e29",
      n: 29,
      name: "Retirement points while in the IRR — membership points only, unless you work",
      summary:
        "15 membership points per full anniversary year accrue automatically — the ONLY point source a non-participating IRR member has, and not a qualifying year (50 points). Everything above 15 must be earned by duty. Coast Guard: officers and retirement-qualified enlisted need 50 points per anniversary year to remain in active status. Navy officers under 20 qualifying years need 27 points including membership points; Navy enlisted under 20 have no minimum — but a sub-50 year is still non-qualifying.",
      who: "Anyone counting on IRR years toward a reserve retirement — run the math honestly: unparticipated IRR years add longevity and membership points, not qualifying years. Points mechanics, statements, and retirement math → Guard & Reserve Hub and Retirement Hub.",
      body: [
        "The points frame is the Guard & Reserve Hub's (cross-linked, not re-derived here): a qualifying (\"good\") year requires 50 points in your anniversary year; inactive-duty points are capped at 130 per year; points divide into active-duty, drill/IDT, membership, and other inactive categories. What the IRR does to that frame, per the services' own IRR pages:",
      ],
      bullets: [
        { title: "Membership points accrue automatically", text: "15 points per full anniversary year of reserve-component membership — the Coast Guard's CG-3307 states it verbatim (\"I will automatically accrue 15 membership points for each full anniversary year in the IRR\"), and it is the only point source a non-participating IRR member has. 15 points is not a qualifying year, and no official page pretends otherwise." },
        { title: "Everything above 15 must be earned by duty", text: "the Navy FAQ lists the IRR point sources — ADT/ADSW orders, pre-approved non-pay drills, Funeral Honors Duty, and correspondence courses (with the trap printed: no points for courses completed while on active service). The Air Force's PIRR programs (What It Is tile) and Army point-only IDT attachments are the same idea in other uniforms." },
        { title: "Coast Guard active-status stakes", text: "officers and retirement-qualified enlisted must reach 50 points per anniversary year to remain in active status (What It Is tile) — in the CG, points in the IRR are a status requirement for that population, not just retirement math. The Navy draws its own line: officers under 20 qualifying years need 27 points including membership points per anniversary year to remain in active status (FAQ); enlisted under 20 have no minimum to remain in active status — but a sub-50 year is still a non-qualifying year for retirement." },
      ],
      flags: [],
      links: [{ label: "Navy IRR FAQ (points)", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/IRR/IRR-FAQ/" }],
      source: "CG-3307 (A&T-10A); Navy IRR FAQ; Guard & Reserve Hub points frame",
      crossLinks: [
        { label: "Guard & Reserve Hub — points mechanics", view: "reserve" },
        { label: "Retirement Hub — retirement math", view: "retirement" },
      ],
    },
  ],
};

/* -------------- Tile 12 — IRR Off-Ramps & On-Ramps (30–33) ----------------- */

const TILE_IRR_RAMPS: ReenTile = {
  key: "irr-ramps",
  label: "IRR Off-Ramps & On-Ramps",
  tileSub: "Entries 30–33 · to SELRES, back to active duty, separation at MSO end, hardship & Standby",
  intro:
    "The doors. Back to drilling is a transfer with medical and administrative screening, not a toggle; back to active duty is an accession under prior-service business rules (the mechanics live in Switching Components); the obligation ends at your MSO end date — confirm it in writing, because silence does not mean discharge; and the Standby Reserve is the relief valve for genuine hardship, raised with your manager before a crisis forces the question.",
  entries: [
    {
      id: "e30",
      n: 30,
      name: "IRR → SELRES / drilling — affiliation routes, per branch",
      summary:
        "Affiliation routes as published: Army via HRC with a current DoD PHA adjudicated by the HRC Command Surgeon BEFORE transfer; USMC via a Prior Service Recruiter (release authorization from MCIRSA via DD Form 368); Navy ASP → VTU/SELRES via a local Reserve recruiter (NAVPERS 1200/1 + medical screening); Air Force via a Reserve/Guard recruiter and ARPC/myFSS; Coast Guard via the documented CGRC In-Service Transfer Team route (enlisted) or RPM-2 slating (officers). Start medical early — it is the long pole in every service's route.",
      who: "IRR members who want drill pay, TRS eligibility (SELRES status is the key that unlocks it), points, and promotion eligibility back.",
      body: [
        "Returning to a drilling status is a transfer with medical and administrative screening, not a toggle — every service's published route says so. The doors, as published:",
      ],
      bullets: [
        { title: "Army", text: "through HRC and the Reserve recruiting/retention structure — IRR Soldiers requesting transfer to the Selected Reserve need a current DoD Periodic Health Assessment with conditions adjudicated (medically cleared) by the HRC Command Surgeon prior to transfer (official PHA guidance for IRR Soldiers). ⚠ The handbook names IDT opportunities for IRR Soldiers but the research pass did not capture a single Army \"IRR→TPU\" step-list page — route the mechanics through your HRC Career Management Office / IRR Career Counselor rather than a reconstructed checklist." },
        { title: "Marine Corps", text: "through a Prior Service Recruiter via MCIRSA's structure — the IRR page's own muster notice shows the release mechanics from the other side: a Marine who has joined an SMCR unit (or another service) is excused from muster on documentation, and the joining recruiter should have obtained release authorization from MCIRSA via DD Form 368 (cross-link Switch Branches for DD 368 mechanics, below)." },
        { title: "Navy", text: "ASP → VTU runs through your local Reserve recruiter (Ready Reserve Agreement NAVPERS 1200/1 + current medical screening, per the FAQ); ASP → SELRES (pay status) runs through the same recruiter channel toward a billet. VTU management sits with the Navy Reserve Centers under COMNAVRESFORCOM." },
        { title: "Air Force", text: "through an Air Force Reserve / Guard recruiter — ARPC's muster program itself is a recruiting touchpoint (musters include reconnection and return-to-service briefings); status changes are processed through ARPC/myFSS channels." },
        { title: "Coast Guard", text: "the documented route (PSC page): enlisted — email the CGRC In-Service Transfer Team (CGR-SMB-ISTT@uscg.mil) with name, rate, pay grade, desired geographic location(s), and desired timeline, then complete the published medical, dental, and administrative tasks; officers — must be slated for a SELRES assignment by RPM-2 and complete the same task series (RPM-3 Reserve Officer query for process questions). ASL/ISL members must first complete a Reserve Component Category Change (RCC) to the IRR before requesting SELRES transfer." },
      ],
      flags: [],
      links: [
        { label: "CG IRR-to-SELRES transition (PSC-RPM-3)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-PSC-RPM/RPM-3/Individual-Ready-Reserve-IRR/IRR-to-SELRES-Transition/" },
        { label: "Navy IRR FAQ", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/IRR/IRR-FAQ/" },
      ],
      source: "HRC PHA guidance; MCIRSA; Navy IRR FAQ; ARPC; CG PSC-RPM-3 (IRR-to-SELRES)",
      crossLinks: [{ label: "Switch Branches — DD Form 368 mechanics", view: "switchbranches" }],
    },
    {
      id: "e31",
      n: 31,
      name: "IRR → Active duty — cross-link, with the doors named",
      summary:
        "Returning to the active component from the IRR is an ACCESSION under prior-service business rules — grade determination, age/service limits, RE-code screening. The doors: Navy RC2AC/RC2TAR (expressly reaches SELRES or IRR Sailors), USMC PSEP + the AR Program, Army recruiter accessions + Call to Active Duty, Air Force routes via AFPC/recruiting (⚠ no standing IRR-specific page verified), Coast Guard EAD via PSC. The mechanics live in Switching Components.",
      who: "IRR members seeking full-time return — read the Switching Components Reserve → Active tile alongside this one.",
      body: [
        "Returning to the active component from the IRR is an accession, governed by the programs in the Switching Components section (entry-level summary here; mechanics there):",
      ],
      bullets: [
        { title: "Navy", text: "RC2AC / RC2TAR (MILPERSMAN 1306-1502) expressly reaches SELRES or IRR Sailors — the IRR is a named eligible population, via C-WAY (≤E-6) / Salesforce (E-7+)." },
        { title: "Marine Corps", text: "PSEP (Prior Service Enlistment Program, MCO 1130.80 series) for enlisted return to the Regular Marine Corps — RE-code conditions (RE Codes & Barriers tile) apply at this door (RE-4/4B only via BCNR correction); the AR Program is the full-time-Reserve alternative (Switching Components)." },
        { title: "Army", text: "prior-service accession through recruiters under AR 601-210 business rules, and Call to Active Duty (CAD) windows via HRC for eligible populations (MILPER-published, episodic)." },
        { title: "Air Force", text: "prior-service / return routes through AFPC and recruiting channels; no standing IRR-specific active-duty page was verified — ⚠ flagged, not reconstructed." },
        { title: "Coast Guard", text: "EAD contracts via PSC (EPM-1/OPM-1) with integration as the endpoint; the MyCG retention material names the In-Service Transfer Team as the reenlistment-consideration door for separated/IRR members holding an Honorable discharge and RE-1." },
      ],
      flags: [
        "Every one of these doors applies prior-service business rules — grade determination, age/service limits, and RE-code screening (RE Codes & Barriers tile) — that are stricter than the direct-affiliation routes available before separation (Switching Components' no-break-in-service principle). The cheapest time to keep an active-duty option open was before the IRR; the second-cheapest is now, with the RE code checked first.",
      ],
      links: [],
      source: "Switching Components pack programs — MILPERSMAN 1306-1502; MCO 1130.80 series; AR 601-210; PSC",
      crossLinks: [{ label: "Switching Components — Reserve → Active mechanics", view: "components" }],
    },
    {
      id: "e32",
      n: 32,
      name: "IRR → complete separation at MSO end — how you confirm you're done",
      summary:
        "The obligation ends at your MSO end date — but processing is an act, not an automatic event. Your separation document is the first authority (the DD 214 carries your reserve obligation termination date; the CG-3307 records the MSO end date at entry), your branch manager is the second — get a one-line written confirmation near the end date. ⚠ Do not assume silence means discharge.",
      who: "Every IRR member in their final obligation year — confirm, in writing, from the manager in the What It Is tile's table.",
      body: [
        "The obligation ends by its own terms at the MSO end date — 8 years from initial entry (What It Is tile), as adjusted in your individual record. Confirming it, per branch as published:",
      ],
      bullets: [
        { title: "Your separation document is the first authority", text: "the DD Form 214 carries your reserve obligation termination date (an official AF BCMR record quotes a member's DD 214-era record line: \"Her Reserve Obligation Termination Date is 7 Jan 05\" — the field exists precisely so the member can read the end date off their own paperwork). The Coast Guard's CG-3307 counseling records it at entry to the IRR: \"Your Military Service Obligation (MSO) [ends/ended] on [date]\" — a CG member can find their end date on the counseling form they initialed." },
        { title: "Your manager is the second authority", text: "Army: HRC; USMC: MCIRSA; Navy: PERS-93 (discharge documents: IRR personnel discharged within 24 months request their NAVPERS 1070/615 / discharge certificate via SF 180 to askmncc@us.navy.mil; beyond 24 months, PERS-3 via MILL_OMPF-CHG@navy.mil — Navy FAQ); AF/SF: ARPC; CG: PSC-RPM-3. A one-line written confirmation from the manager, requested near the end date, closes the loop that memory cannot." },
        { title: "The records tail", text: "reservists completing service receive the new DD Form 214-1 framework's documentation at final separation/transfer points (cross-link Records & DD214 and the Reserve Hub's entry on DD 214-1: it supplements the DD 214, accompanies transfer to the IRR among other triggers, is never issued alone, and is not retroactive)." },
      ],
      flags: [
        "Do not assume silence means discharge. The Navy's published policy direction is that continued service in the IRR after MSO completion \"will not normally be permitted\" (IRR page, pointing to MILPERSMAN 1001-125/145) — i.e., the default at MSO end is separation processing, but processing is an act, not an automatic event; and the USMC/Navy pages both describe members who voluntarily remain in the IRR past MSO by agreement. If you are past your MSO date and still receiving screening correspondence, contact your manager and resolve the status in writing — you are either discharged, voluntarily retained, or administratively pending, and each has different recall exposure (recall entry).",
      ],
      links: [{ label: "Navy IRR FAQ (discharge documents)", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/IRR/IRR-FAQ/" }],
      source: "Navy IRR page & FAQ; CG-3307 (A&T-10A); AF BCMR record (DD 214 field)",
      crossLinks: [
        { label: "Records & DD214 — records in depth", view: "records" },
        { label: "Guard & Reserve Hub — DD Form 214-1", view: "reserve" },
      ],
    },
    {
      id: "e33",
      n: 33,
      name: "Hardship and the Standby Reserve — the relief valve, at summary level",
      summary:
        "The Standby Reserve (ASL/ISL) is the relief valve: a Ready Reserve member whose involuntary orders would result in extreme community or personal hardship may, on request, be transferred to the Standby Reserve or the Retired Reserve, or be discharged, as the service determines. Hardship relief is discretionary, decided on documentation, through your manager — and a member already under mobilization orders is in delay/deferment/exemption territory, a different and narrower door. Summary level only; no legal advice.",
      who: "IRR members whose circumstances (medical, family, essential-civilian-role) make recall-readiness genuinely impossible — raise it with your manager before a crisis or orders force the question.",
      body: [
        "The Standby Reserve is a separate reserve category (Active Status List / Inactive Status List — CG: ASL/ISL; Navy: USNR-S1/S2) for members who cannot, for a time or for good, carry Ready Reserve obligations. DoD's published framework (participation/screening instructions; 32 CFR Parts 44 and 100 lineage) states the core rule this entry prints: a Ready Reserve member whose involuntary orders to active duty would result in extreme community or personal hardship may, on request, be transferred to the Standby Reserve or the Retired Reserve, or be discharged, as the service determines. The services' own documents corroborate the shape:",
        "What this entry does not do: assess any individual's hardship, predict an outcome, or substitute for the request itself. Hardship relief is discretionary with the service, decided on documentation, through your manager (What It Is tile) — and a member already under mobilization orders is in delay/deferment/exemption territory (recall entry), a different and narrower door.",
      ],
      bullets: [
        { title: "Coast Guard", text: "the IRR Member Guide covers IRR, ASL, and ISL in one volume — Standby is administered by the same RPM-3; transfers run as Reserve Component Category Changes; ⚠ CG-published: time in the Standby Reserve does not count toward the service obligation (the MSO clock treatment differs by category — verify your own case with RPM-3 before requesting). Members who cannot be transferred to the IRR for temporary physical disability or hardship (the CG-3307's parenthetical) are routed by that same logic toward the Standby lists instead." },
        { title: "Navy", text: "unsatisfactory IRR participation can end in transfer to the Inactive Status List (USNR-S2) involuntarily (What It Is tile) — the Standby lists are also where participation failures land; a voluntary hardship request runs through PERS-93 under BUPERSINST 1001.39F." },
        { title: "Army", text: "AR 140-10 governs Standby Reserve assignments (Active Status List generally time-limited — secondary summaries say up to 2 years before the member must move to the Ready Reserve, Retired Reserve, or discharge; ⚠ the 2-year figure was not re-verified against the current AR 140-10 text in the research pass and is printed as approximate)." },
        { title: "Key-employee screening", text: "runs on a parallel track (32 CFR Part 44): a Ready Reserve member occupying a key position essential to national health, safety, or interest is screened toward Standby status before mobilization — an employer/agency-initiated process, not a personal preference." },
      ],
      flags: [],
      links: [{ label: "CG IRR/Standby Member Guide (rev. Nov. 7, 2025, PDF)", url: "https://dcms.uscg.mil/Portals/10/IRR%20-%20Standby%20Reserve%20Member%20Guide%20Revision%20-%20Final.pdf" }],
      source: "DoD participation/screening framework (32 CFR Parts 44/100 lineage); CG IRR Member Guide; BUPERSINST 1001.39F; AR 140-10",
      crossLinks: [{ label: "Know Your Rights — the legal frame", view: "rights" }],
    },
  ],
};

/* ------------------------------ The tile map ------------------------------- */

export const REENLIST_TILES: ReenTile[] = [
  TILE_READ_FIRST,
  TILE_ARMY,
  TILE_USMC,
  TILE_NAVY,
  TILE_DAF,
  TILE_CG,
  TILE_SRB,
  TILE_RECODES,
  TILE_IRR_WHAT,
  TILE_IRR_OBLIGATIONS,
  TILE_IRR_RAMPS,
];

/** Total pack entries shipped: 32 tile entries + the checklist (entry 16) = 33. */
export const REENLIST_ENTRY_COUNT =
  REENLIST_TILES.reduce((n, t) => n + t.entries.length, 0) + 1;
