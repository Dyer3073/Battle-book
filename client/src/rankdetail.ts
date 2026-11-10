// Rank Detail Sheets — what it takes to reach each rank, transcribed
// from the researched pack (~/workspace/military-app/ranks/
// promotion.md, researched Nov 9, 2026). The pack is the content
// source of truth: one record per row the Rank Charts render
// (148 rows: USMC 27 · Army 28 · Navy 25 · Coast Guard 23 · Air
// Force 25 · Space Force 20), each carrying the pack's UNIFORM SIX
// FIELDS — Typical TIS, Minimum TIS, Minimum TIG, PME (tagged
// REQ-PROMOTE / REQ-GRADE / EXPECTED exactly as the pack tags them),
// How promotion to this grade works, and the pack's Other notes.
//
// THE STRICT TYPICAL RULE (the pack's §3, binding): a Typical field
// holds ONLY (a) the published minimums, or (b) a timing the service
// itself publishes (officer flow/zone points, DOPMA expectations
// labeled as such, AFPC cycle-specific selectee averages labeled
// with their cycle). Where no official typical exists the field
// reads verbatim: "Minimums are published; typical timing is not
// published by [service]." No averages from journalism, forums,
// recruiter lore, or commercial promotion guides appear anywhere.
//
// VERSION TRAPS HONORED (the pack's §9): Army figures are the
// AR 600-8-19 edition of 6 Mar 2026 (eff. 6 Apr 2026) — board-
// appearance minimums and pin-on minimums both print, labeled,
// never merged; USMC figures carry their MARADMIN supersessions
// (055/16 Cpl TIG · 334/20 SSgt 36/60 + Sgt legacy · 222/26 Sgt
// TIS 48→30 eff. 1 Oct 2026); Navy enlisted figures are
// BUPERSINST 1430.16H (21 Jan 2026 — the G edition is cancelled);
// Navy CWO5 prints NO single TIG number and NO typical number
// (unextractable from SECNAVINST 1412.8C in the research pass —
// verify before reliance); USMC CWO2's 18-month TIG carries the
// SECNAVINST 1412.11B re-verification flag (the figure rests on
// 1412.9B as quoted in MARADMINs); DAF enlisted figures carry the
// DAFI 36-2502 Table 2.1 re-verify flag (F2); CG CWO3/CWO4 carry
// the IDPL-zone flag (the ~3-year zone is documented from a Reserve
// board cutoff; the ADPL cutoff was not retrieved). No live quotas,
// cutting scores, zone dates, or board schedules print anywhere.

export type RankCategoryKey = "enlisted" | "warrant" | "officers";

/** promotion = a TO-grade record · entry = the grade you start at ·
 * appointment = a position appointment, not a board promotion ·
 * lateral = a duty title on an existing pay grade, not a step. */
export type SheetKind = "promotion" | "entry" | "appointment" | "lateral";

export type PmeItem = {
  text: string;
  /** The pack's tag, printed as a chip: REQ-PROMOTE · REQ-GRADE ·
   * EXPECTED · plus the pack's literal special labels where it uses
   * them (BY-GRADE, RECOMMENDED, REQUIRED TO APPOINT…). */
  tag?: string;
};

export type RankSheet = {
  /** branch|category|grade|abbr — matches the Rank Charts row. */
  key: string;
  branch: string;
  category: RankCategoryKey;
  grade: string;
  title: string;
  abbr: string;
  kind: SheetKind;
  typical: string;
  minTis: string;
  minTig: string;
  pme: PmeItem[];
  /** How promotion to this grade works — the pack's mechanism, in
   * its words, referencing the branch mechanism stated once. */
  how: string[];
  other?: string;
  flags: string[];
  source: string;
};

export function rankSheetKey(branch: string, category: string, grade: string, abbr: string): string {
  return `${branch}|${category}|${grade}|${abbr}`;
}

const NT_ARMY = "Minimums are published; typical timing is not published by the Army.";
const NT_USMC = "Minimums are published; typical timing is not published by the Marine Corps.";
const NT_NAVY = "Minimums are published; typical timing is not published by the Navy.";
const NT_CG = "Minimums are published; typical timing is not published by the Coast Guard.";
const NT_AF = "Minimums are published; typical timing is not published by the Air Force.";
const NT_SF = "Minimums are published; typical timing is not published by the Space Force.";

const DAF_T21_FLAG =
  "DAFI 36-2502 version drift (pack flag F2): the Table 2.1 figures here match the 16 Apr 2021 + DAFGM2023-01 texts retrieved in research; installation supplements cite a 26 Sep 2024 edition and secondary sources a 2 Jul 2026 edition. Re-verify Table 2.1 against the current e-Publishing PDF — if the newer edition changed any month count, it supersedes these figures.";

function sheet(
  branch: string,
  category: RankCategoryKey,
  grade: string,
  title: string,
  abbr: string,
  kind: SheetKind,
  fields: Omit<RankSheet, "key" | "branch" | "category" | "grade" | "title" | "abbr" | "kind" | "flags"> & {
    flags?: string[];
  },
): RankSheet {
  return {
    key: rankSheetKey(branch, category, grade, abbr),
    branch,
    category,
    grade,
    title,
    abbr,
    kind,
    ...fields,
    flags: fields.flags ?? [],
  };
}

/* ================================ ARMY ================================= */
/* Sources: AR 600-8-19 (6 Mar 2026, eff. 6 Apr 2026), AR 600-8-29,
 * DA Pam 600-3, HRC AHRC-PDV-PE memoranda (2026). Regular Army. */

const ARMY_SRC_E = "AR 600-8-19 (6 Mar 2026 edition) · HRC promotion memoranda, 2026";
const ARMY_SRC_W = "AR 600-8-29 §2-7 · DA Pam 600-3";
const ARMY_SRC_O = "AR 600-8-29 · DA Pam 600-3 · 10 U.S.C. §619 (DOPMA)";

const ARMY_SHEETS: RankSheet[] = [
  sheet("Army", "enlisted", "E-1", "Private", "PV1", "entry", {
    typical: "Entry grade; no promotion TO PV1 exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: [
      "PV1 is the entry grade on enlistment — there is no promotion to it.",
      "Some Soldiers enlist at PV2, PFC, or SPC instead, under the Army Civilian Acquired Skills Program (ACASP) or Stripes for College Credit (AR 601-210).",
    ],
    source: "AR 600-8-19 §2-2, §2-1i",
  }),
  sheet("Army", "enlisted", "E-2", "Private", "PV2", "promotion", {
    typical: "6 months is the published automatic point; no Army-published average beyond the minimum.",
    minTis: "6 months",
    minTig: "— (no prior-grade TIG stated; the 6-month TIS controls)",
    pme: [{ text: "None." }],
    how: [
      "Automatic and decentralized: the HR system defaults to “Promotion Select.”",
      "The commander must actively deny the promotion in the system, with DA Form 4856 counseling — otherwise it happens.",
      "The Soldier must be fully qualified (not flagged) on the effective date.",
    ],
    other: "Waiver: promotion at 4 months TIS is possible; the Regular Army waiver ceiling is 20% of the PV2 population.",
    flags: [],
    source: "AR 600-8-19 §2-1a–c, §2-2a(1), §2-3a(1)",
  }),
  sheet("Army", "enlisted", "E-3", "Private First Class", "PFC", "promotion", {
    typical: "The published automatic point is 12 months TIS; no Army-published average beyond the minimum.",
    minTis: "12 months",
    minTig: "4 months as PV2",
    pme: [{ text: "None." }],
    how: [
      "Automatic and decentralized — the same deny-or-promote system as PV2.",
      "The HR system defaults to “Promotion Select”; the commander must actively deny, with counseling.",
    ],
    other: "Waiver: 6 months TIS / 2 months TIG; Regular Army waiver ceiling 20% of the PFC population.",
    flags: [],
    source: "AR 600-8-19 §2-2a(2), §2-2b(2), §2-3a(2)",
  }),
  sheet("Army", "enlisted", "E-4", "Specialist", "SPC", "promotion", {
    typical: "The published automatic point is 24 months TIS; no Army-published average beyond the minimum.",
    minTis: "24 months",
    minTig: "6 months as PFC",
    pme: [{ text: "None." }],
    how: [
      "Automatic and decentralized — the same deny-or-promote system as PV2/PFC.",
      "Promotion is only into the Soldier's PMOS/CPMOS.",
    ],
    other: "Waiver: 18 months TIS / 3 months TIG; the SPC waiver percentage is set by HQDA and published in the monthly cutoff memo. CMF 18/37 Soldiers and Ranger graduates with 12+ months TIS are excepted from waiver ceilings.",
    flags: [],
    source: "AR 600-8-19 §2-2a(3), §2-2b(3), §2-3",
  }),
  sheet("Army", "enlisted", "E-4", "Corporal", "CPL", "lateral", {
    typical: "Not applicable — position-driven; no timeline is published.",
    minTis: "— (lateral appointment, not a promotion)",
    minTig: "— (lateral appointment, not a promotion)",
    pme: [{ text: "None stated." }],
    how: [
      "CPL is a LATERAL appointment, not a promotion: a commander in grade O-5 or above laterally appoints a Specialist only when the Soldier is assigned to a documented (authorized) NCO position in their CPMOS.",
      "It is announced by informal memorandum. A CPL retains the grade on PCS, but a commander may laterally return CPL → SPC for UCMJ or substandard NCO duty.",
    ],
    flags: [
      "2026 change: the old requirement to laterally appoint SPC → CPL when a Soldier was integrated onto the SGT promotion list was eliminated (Summary of Change, AR 600-8-19, 2026 edition).",
    ],
    source: "AR 600-8-19 §1-42",
  }),
  sheet("Army", "enlisted", "E-5", "Sergeant", "SGT", "promotion", {
    typical: NT_ARMY + " Only the PZ/SZ minimums are official; actual pin-on depends on MOS cutoff scores, which change monthly.",
    minTis: "Pin-on — Primary Zone 36 months · Secondary Zone 18 months. Board recommendation (Table 3-1) — PZ 34 months / SZ 16 months.",
    minTig: "Pin-on — PZ 12 months / SZ 6 months as SPC/CPL. Board recommendation — PZ 10 months / SZ 4 months.",
    pme: [
      { text: "No PME is required for promotion pin-on to SGT — AR 600-8-19 §1-34 lists no PME pin-on requirement for SGT, and HRC states it verbatim: “To SGT there is no PME required for promotion pin-on to SGT” and no PME requirement for board appearance (HRC AHRC-PDV-PE, 20 Jul 2026)." },
      { text: "BLC graduates earn +150 promotion points toward SGT — an advantage, not a gate.", tag: "EXPECTED" },
    ],
    how: [
      "Semi-centralized: commander recommendation plus a local promotion board integrates the Soldier onto the Promotion Recommendation Roster (PRR).",
      "The Soldier then competes monthly on promotion points (800-point system, auto-calculated in IPPS-A) against the HQDA cutoff score for their MOS.",
      "Promotion authority is a commander in grade LTC or above.",
      "Special categories: SFQC graduates and Rangers promote to SGT under §3-7 without regard to BLC.",
    ],
    other: "High school diploma/GED required; must be MOS-qualified in the CPMOS; passing record Army Fitness Test (AFT); not flagged. Mandatory List Integration does not apply to SGT.",
    flags: [
      "VERSION TRAP: pre-2026 STEP policy (SSD 1 + BLC required for SGT) and DA Pam 600-25-era branch pages still in circulation are SUPERSEDED for the Regular Army by the 6 Mar 2026 AR 600-8-19. Older figures (SGT PZ 36 mo TIS / 8 mo TIG; BLC required for SGT) are the old rules. Temporary promotions under §1-35 remain the exception path generally.",
    ],
    source: ARMY_SRC_E + " · Table 3-1, §5-5a, §1-34, §3-17a(1)",
  }),
  sheet("Army", "enlisted", "E-6", "Staff Sergeant", "SSG", "promotion", {
    typical: NT_ARMY + " PZ entry at 6 years TIS is the Army's stated expectation point, not an average.",
    minTis: "Pin-on — Primary Zone 72 months (6 years) · Secondary Zone 48 months (4 years) · Mandatory List Integration 84 months (7 years). Board recommendation (Table 3-1) — PZ 70 / SZ 46 / MLI 82 months.",
    minTig: "Pin-on — PZ 18 months / SZ 8 months / MLI 24 months as SGT. Board recommendation — PZ 16 / SZ 6 / MLI 22 months.",
    pme: [
      { text: "Basic Leader Course (BLC) graduation — a promotion pin-on requirement to SSG (AR 600-8-19 §1-34a(1)); HRC requires BLC before board appearance as well as before pin-on.", tag: "REQ-PROMOTE" },
      { text: "ALC graduates earn +150 promotion points toward SSG — an advantage, not the SSG gate. Older guidance calling ALC the SSG requirement conflates the points bonus with the next grade's gate." },
    ],
    how: [
      "Semi-centralized — the same PRR + 800-point + monthly per-MOS cutoff system as SGT.",
      "Mandatory List Integration (MLI): a SGT who spends a full year in the Primary Zone without being integrated is automatically integrated onto the PRR by HQDA with all earned points; commanders cannot deny MLI (they must use a bar to continued service instead).",
    ],
    other: "High school diploma/GED; MOS-qualified; passing record AFT; not flagged; clearance at the level the promotion MOS requires.",
    flags: [],
    source: ARMY_SRC_E + " · Table 3-1, §5-5b, §1-34a(1), §3-2b",
  }),
  sheet("Army", "enlisted", "E-7", "Sergeant First Class", "SFC", "promotion", {
    typical: NT_ARMY + " No HRC-published average TIS at SFC pin-on was found in official sources.",
    minTis: "Pin-on (HQDA annual announcement, Oct 2026): 6 years — standard and CMF 18/37/38 alike.",
    minTig: "Pin-on: 48 months as SSG (standard); 36 months for Regular Army Soldiers in CMFs 18, 37, 38.",
    pme: [
      { text: "Advanced Leaders Course (ALC) graduation — a promotion pin-on requirement to SFC, except for RA Soldiers awarded PMOS 42S (Special Band Musicians, who run on their own evaluation board).", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: an annual HQDA NCO Evaluation Board reviews the SSG file and categorizes Soldiers MQ / FQ / NFQ / NFQ-R, building a per-CPMOS Order of Merit List (OML).",
      "Monthly, HRC selects MQ/FQ NCOs in OML order against a valid requirement.",
      "Board CONSIDERATION criteria (TIS/TIG/PME) are set in each board's MILPER announcement — there is no single fixed consideration table for the Regular Army in the 2026 regulation; centralized pin-on criteria are set annually by HQDA (DMPM, DCS, G-1) under separate cover (§5-5c), which is where the figures above come from.",
    ],
    other: "A 3-year service-remaining requirement is incurred on selection for senior grades; an NFQ/NFQ-R board result is non-promotable; clearance per the interim-Secret-or-MOS rule (§1-19b); not flagged.",
    flags: [
      "The HRC Oct 2026 memo line for CMF 18/37/38 reads “6 months TIS” as extracted — contextually 6 YEARS, matching the standard line. Verify against the signed memo before treating either reading as final.",
    ],
    source: ARMY_SRC_E + " · §5-5c, §1-34a(2), Ch. 4; HRC Senior Enlisted OML Report memo, 22 Sep 2026",
  }),
  sheet("Army", "enlisted", "E-8", "Master Sergeant", "MSG", "promotion", {
    typical: NT_ARMY,
    minTis: "Pin-on (HQDA annual announcement, Oct 2026): 8 years.",
    minTig: "Pin-on: 36 months as SFC.",
    pme: [
      { text: "Senior Leaders Course (SLC) graduation — a promotion pin-on requirement to MSG, except for RA Soldiers awarded PMOS 42S.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: annual HQDA NCO Evaluation Board (SFC file) → OML → monthly merit-based selection against a valid requirement.",
      "Temporary merit path (2026): HRC may approve promotion of a SFC serving 12+ months in a 1SG/E-8 billet to MSG with follow-on 1SG appointment — waiving OML-placement/vacancy — if SLC-complete and MQ/FQ on the current SFC Evaluation Board OML (G-1 temporary promotion authority under §1-35).",
    ],
    other: "Eligibility for an interim Secret clearance or higher is REQUIRED (§1-19a). Statutory MSG/SGM strength limits (10 U.S.C. §517) apply; the service-remaining requirement applies.",
    flags: [],
    source: ARMY_SRC_E + " · §1-34a(3), §1-19a, §5-5c; HRC memo, 22 Sep 2026",
  }),
  sheet("Army", "enlisted", "E-8", "First Sergeant", "1SG", "lateral", {
    typical: "Not applicable — an appointment to a duty position, not a promotion step.",
    minTis: "— (same pay grade as MSG, E-8)",
    minTig: "— (same pay grade as MSG, E-8)",
    pme: [
      { text: "SLC is the MSG pin-on gate (see the MSG sheet). A SFC placed in a 1SG billet does not pin E-8 by the appointment alone — except via the 2026 temporary merit promotion, which requires 12 months served in the 1SG/E-8 billet + SLC + MQ/FQ OML status.", tag: "REQ-GRADE" },
    ],
    how: [
      "1SG is a LATERAL appointment: an MSG (or a senior NCO assigned under the temporary merit path) is appointed to a First Sergeant position — a duty position and command role, not a promotion board grade of its own.",
      "Do not read 1SG as a step after MSG: it is an appointment overlay on E-8, parallel to CSM on E-9.",
    ],
    flags: [],
    source: "AR 600-8-19 §1-35 + G-1 Temporary Promotion Authority memo, 2026; Ch. 4–5 (no separate 1SG board/grade)",
  }),
  sheet("Army", "enlisted", "E-9", "Sergeant Major", "SGM", "promotion", {
    typical: NT_ARMY,
    minTis: "Pin-on (HQDA annual announcement, Oct 2026): 10 years.",
    minTig: "Pin-on: 36 months as MSG.",
    pme: [
      { text: "Master Leaders Course (MLC) completion — required for SELECTION to the Sergeants Major Academy (the sequencing gate before the pin-on gate, not the pin-on itself).", tag: "REQ-GRADE" },
      { text: "Sergeants Major Course / U.S. Army Sergeants Major Academy (SGM-A) graduation — a promotion pin-on requirement to SGM, except for RA Soldiers awarded PMOS 42S.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: an annual CSM/SGM Evaluation Board (MSG file) builds the OML; SGM-A attendance is itself board-selected.",
      "On graduation from resident SGM-A, graduates are designated promotable with sequence numbers from the prior year's CSM/SGM Evaluation Board OML, and HRC promotes by CPMOS — exhausting each graduating class in order — against requirements.",
    ],
    other: "Interim Secret clearance eligibility or higher required (§1-19a). Suitability screening applies: Soldiers found unsuitable for SGM-A, or denied/disenrolled through their own fault, are permanently ineligible for SGM. Statutory strength limits (10 U.S.C. §517) apply.",
    flags: [
      "The HRC Oct 2026 memo phrases pin-on eligibility as “USASMC graduate OR making satisfactory progress in the USASMC non-resident course” — looser than §1-34a(5)'s graduation wording. The regulation controls; the memo reflects the non-resident / temporary-promotion (§1-35c) path for enrolled students.",
      "Do not cross-apply the ARNG figure: the widely quoted 16-year TIS for SGM is ARNG Table 6-1 (Ch. 6) — Regular Army centralized pin-on is 10 years per the HQDA annual announcement.",
    ],
    source: ARMY_SRC_E + " · §1-34a(4)–(5), §5-4f, §1-19a; HRC memo, 22 Sep 2026",
  }),
  sheet("Army", "enlisted", "E-9", "Command Sergeant Major", "CSM", "lateral", {
    typical: "Not applicable — an appointment, not a promotion step.",
    minTis: "— (same pay grade as SGM, E-9)",
    minTig: "— (same pay grade as SGM, E-9)",
    pme: [
      { text: "SGM-A graduation is inherited — a CSM must first be promotable/qualified as an SGM.", tag: "REQ-GRADE" },
    ],
    how: [
      "CSM is a LATERAL appointment via centralized selection, not a promotion: CSM/SGM Centralized Selection List (CSL) boards run under AR 614-200 (expressly carved out of AR 600-8-19 Ch. 4).",
      "Battalion/brigade CSM candidates also go through Command Assessment Program (CAP) screening.",
      "Nominative CSM positions (serving with general officers) are slated through the Senior Enlisted Council / SMA nominative process after the annual centralized talent-management board.",
      "Frocking to CSM is authorized when slated to a CSM billet. Do not read CSM as a step after SGM — it is an appointment overlay on E-9.",
    ],
    flags: [],
    source: "AR 600-8-19 §4-1a, §5-4f(3)(c); AR 614-200; army.mil CAP / nominative CSM reporting",
  }),
  sheet("Army", "enlisted", "E-9 (special)", "Sergeant Major of the Army", "SMA", "appointment", {
    typical: "Not published — a single-billet appointment, not a promotion timeline.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Sergeant Major of the Army is the Army's senior enlisted leader and advisor to the Chief of Staff of the Army — a single billet filled by appointment from the senior CSM/SGM corps, not by a promotion board.",
      "Senior special billets (SMA, and the other services' equivalents) are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Army", "warrant", "W-1", "Warrant Officer 1", "WO1", "appointment", {
    typical: "Not published as a promotion timeline (accession grade).",
    minTis: "None published for appointment — accession prerequisites are MOS-specific in DA Pam 611-21 / the WOCS packet criteria, not a promotion rule.",
    minTig: "— (entry warrant grade)",
    pme: [
      { text: "Warrant Officer Candidate School (WOCS), Warrant Officer Career College, Fort Novosel — all RA candidates (except SF 180A, Fort Bragg) attend resident WOCS; graduates are appointed WO1 contingent on branch/MOS certification.", tag: "REQUIRED TO APPOINT" },
      { text: "Warrant Officer Basic Course (WOBC) — branch MOS qualification, attended as a WO1.", tag: "REQ-GRADE" },
    ],
    how: [
      "Appointment by warrant after WOCS — not a promotion.",
      "WO1 is appointed by warrant; CW2 and above are commissioned.",
    ],
    other: "The accession route itself — feeder MOSs, prerequisites, boards — is in Commissioning from the Ranks, entries 27–28.",
    flags: [],
    source: "DA Pam 600-3 §2-8b(3)–(4), §4-9b(1), §4-11a",
  }),
  sheet("Army", "warrant", "W-2", "Chief Warrant Officer 2", "CW2", "promotion", {
    typical: NT_ARMY + " Beyond the 18-month floor / ~2-year promotion eligibility date, nothing is published.",
    minTis: "None published — AR 600-8-29 publishes no TIS minimum for any warrant grade; only TIG. Do not invent one.",
    minTig: "18 months on active duty in grade WO1 (AR 600-8-29 §2-7c(1)); the promotion eligibility date (PED, Ch. 3) is effectively the 2-year warrant-service anniversary adjusted to ensure the 18-month active-duty floor is met.",
    pme: [
      { text: "WOBC completion — DA Pam 600-3 branch models state uniformly “Must complete WOCS and WOBC before promotion to CW2” (e.g., the MI branch model); WOBC also awards the MOS/AOC without which the WO is not qualified in grade.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Decentralized: CW2 promotion is made by a commander in grade LTC or above (field promotion authority).",
      "DA Pam 600-3 describes it as “considered automatic upon completion of a specific period of active duty” — performance-based, when qualified and in good standing (a FLAG under AR 600-8-2 makes a WO non-promotable).",
    ],
    flags: [
      "TIG CONFLICT — regulation vs. legacy tables: AR 600-8-29 §2-7c(2) sets the statutory floor TO BE CONSIDERED at 2 years TIG for CW2, CW3, and CW4 alike. The 2/4/5/5-year ladder circulating online (WO1→CW2 2 yr, CW2→CW3 4 yr, CW3→CW4 5 yr, CW4→CW5 5 yr) is the RESERVE Component vacancy-promotion timeline (AR 135-155 / NGR 600-101), not the Active Duty List rule. Actual primary-zone timing is announced per board, not fixed in the regulation.",
    ],
    source: ARMY_SRC_W + " · §2-7c(1), §1-7, Ch. 3; DA Pam 600-3 §6-10b",
  }),
  sheet("Army", "warrant", "W-3", "Chief Warrant Officer 3", "CW3", "promotion", {
    typical: NT_ARMY + " No primary-zone year-of-service figure is stated for warrants in AR 600-8-29 / DA Pam 600-3 (unlike LTC/COL).",
    minTis: "None published (TIG only).",
    minTig: "Minimum to be considered: 2 years active duty in grade CW2 (AR 600-8-29 §2-7c(2)) — zone timing per the board's zone message.",
    pme: [
      { text: "Warrant Officer Advanced Course (WOAC) — expected complete before promotion to CW3 (RA technical services / ARNG / USAR). RA Aviation exception: Aviation WOs attend WOAC AFTER selection for CW3 and must complete it within 2 years of selection.", tag: "REQ-PROMOTE" },
      { text: "An associate degree is a recommended self-development goal before CW3 consideration in branch models — not a regulatory gate.", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board, best-qualified, per competitive category.",
      "Below-the-zone (early) consideration exists for CW3–CW5 (opt-in, ~1 year early). Twice non-selected CWOs are ineligible for further consideration unless selectively continued (SECON).",
    ],
    flags: [
      "Warrant PME naming: current branch Smartbook updates (e.g., Signal Corps DA Pam 600-3, 1 Feb 2026) are renaming courses — WOAC→WOIC, WOILE→WOAC, WOSSE→WOSC/WOMC in that branch's FY26 revision. The 2023 DA Pam 600-3 names used here remain the Army-wide baseline in the governing sources; expect branch-by-branch renaming.",
    ],
    source: ARMY_SRC_W + " · §2-7c(2); DA Pam 600-3 §4-11b, §2-8b(5)",
  }),
  sheet("Army", "warrant", "W-4", "Chief Warrant Officer 4", "CW4", "promotion", {
    typical: NT_ARMY,
    minTis: "None published (TIG only).",
    minTig: "Minimum to be considered: 2 years active duty in grade CW3 (AR 600-8-29 §2-7c(2)).",
    pme: [
      { text: "Warrant Officer Intermediate Level Education (WOILE) — expected complete before promotion to CW4 (RA technical services / ARNG / USAR); at least 12 months must separate completing WOAC from beginning WOILE Phase II. RA Aviation: WOILE expected within 2 years AFTER selection for CW4.", tag: "REQ-PROMOTE" },
      { text: "A baccalaureate degree is the stated civilian-education GOAL before CW4 eligibility in DA Pam 600-3 — not a gate.", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board; below-the-zone consideration possible.",
    ],
    flags: [],
    source: ARMY_SRC_W + " · §2-7c(2); DA Pam 600-3 §4-11c, §2-8b(6)",
  }),
  sheet("Army", "warrant", "W-5", "Chief Warrant Officer 5", "CW5", "promotion", {
    typical: NT_ARMY,
    minTis: "None published (TIG only).",
    minTig: "Minimum to be considered: 2 years active duty in grade CW4 — CW4 is expressly included in the §2-7c(2) 2-year rule.",
    pme: [
      { text: "Warrant Officer Senior Service Education (WOSSE) — the WO PME capstone, expected complete before promotion to CW5 (RA technical services / ARNG / USAR); at least 12 months must separate completing WOILE from beginning WOSSE Phase II. RA Aviation: WOSSE expected within 2 years AFTER selection for CW5.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board; below-the-zone consideration possible.",
      "CW5 strength and grade distribution are separately controlled by 10 U.S.C. and the Warrant Officer Management Act — the most constrained warrant grade. A CW5 must be assigned to / selected against an authorized CW5 position for utilization.",
    ],
    flags: [],
    source: ARMY_SRC_W + " · §2-7c(2); DA Pam 600-3 §4-11d, §2-8b(7), §6-6b",
  }),
  sheet("Army", "officers", "O-1", "Second Lieutenant", "2LT", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [
      { text: "Basic Officer Leader Course (BOLC) — BOLC A is the pre-commissioning source; BOLC B is the branch course after commissioning, attended as a 2LT.", tag: "REQ-GRADE" },
    ],
    how: [
      "Commissioning (USMA / ROTC / OCS / direct commission) — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [],
    source: "DA Pam 600-3 §4-5, §2-8a(2)",
  }),
  sheet("Army", "officers", "O-2", "First Lieutenant", "1LT", "promotion", {
    typical: "18 months is both the minimum and the system's designed point (decentralized/automatic when qualified); no separate Army-published average.",
    minTis: "None published — AR 600-8-29 publishes no TIS minimum for any officer grade; flow is managed by year group / promotion zone, announced per board.",
    minTig: "18 months as 2LT (AR 600-8-29 §2-7c(3); 10 U.S.C. §619).",
    pme: [
      { text: "BOLC B completion is the branch qualification expected in grade; no separate PME gate is stated in §2-7 for 1LT.", tag: "EXPECTED" },
    ],
    how: [
      "Decentralized: promoted by a commander in grade LTC or above (normally the battalion commander on the company commander's recommendation).",
      "“Considered automatic upon completion of a specific period of active duty,” performance-based; officers who fail 1LT promotion are generally released/discharged.",
      "The promotion eligibility date (PED) is computed under AR 600-8-29 Ch. 3, Table 3-1.",
    ],
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(3), §1-7, Ch. 3; DA Pam 600-3 §6-10b",
  }),
  sheet("Army", "officers", "O-3", "Captain", "CPT", "promotion", {
    typical: NT_ARMY + " No primary-zone year for CPT is stated in DA Pam 600-3 Ch. 4 (the company-grade phase spans roughly the first 10 years of service). Do NOT use the commonly quoted “~4 years” — it has no official Army source in this set.",
    minTis: "None published in AR 600-8-29.",
    minTig: "2 years as 1LT (§2-7c(3)).",
    pme: [
      { text: "No PME is required TO PIN CPT. The Captains Career Course (CCC) is attended following selection for CPT — and CCC completion then becomes the gate for MAJ (see the O-4 sheet).", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: an HQDA Promotion Selection Board selects CPTs.",
      "Exception: where the needs of the Army require, SECARMY may promote all fully qualified 1LTs in the zone via an all-qualified officers list / Fully Qualified Certification screening instead of a PSB — this is why CPT often LOOKS automatic; legally it is a centralized selection/certification.",
    ],
    other: "A baccalaureate degree must be complete BEFORE promotion to CPT (DA Pam 600-3 §4-5a(3)) — and by statute, for promotion to any grade above 1LT. Senate confirmation is not required for CPT (it is required MAJ and above).",
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(3), §2-3a, §2-13; DA Pam 600-3 §4-5a(3)–(4)",
  }),
  sheet("Army", "officers", "O-4", "Major", "MAJ", "promotion", {
    typical: NT_ARMY + " DA Pam 600-3 marks MAJ selection as the start of the field-grade phase, after the company-grade phase that “generally lasts through the 10th year of service” — context, not an average.",
    minTis: "None published.",
    minTig: "3 years as CPT to be considered (§2-7c(4)); waivable only for below-the-zone consideration.",
    pme: [
      { text: "Captains Career Course (CCC) — prerequisite for promotion to MAJ. Army-wide rule (DA Pam 600-3 branch Smartbooks): “For promotion consideration to a higher rank, officers must complete the required PME at the current rank.”", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board, best-qualified, per competitive category.",
      "Below-the-zone / opt-in early consideration (~1 year before the primary zone) and opt-out (up to 2× per grade) are available.",
      "Senate confirmation is required.",
    ],
    other: "Baccalaureate degree (statutory for grades above 1LT). A KD / company-command record is competitiveness, not a regulatory gate.",
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(4); DA Pam 600-3 §2-8a(3), §4-5, §4-6",
  }),
  sheet("Army", "officers", "O-5", "Lieutenant Colonel", "LTC", "promotion", {
    typical: "Published zone timing (official): “Cohort year group officers are generally considered for promotion to lieutenant colonel in their 16th year of service as they enter the primary zone of consideration” (DA Pam 600-3 §4-6b). This is a zone-entry statement, not an average pin-on time.",
    minTis: "None published as a minimum.",
    minTig: "3 years as MAJ to be considered (§2-7c(4)).",
    pme: [
      { text: "Intermediate Level Education (ILE — incl. CGSS/Common Core + branch/FA qualification phase; JPME I embedded) — prerequisite for promotion to LTC. ILE/JPME I completion is also required to be eligible for Senior Service College attendance.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board; BZ/opt-in and opt-out available; Senate confirmation required.",
      "Battalion command is a SEPARATE centralized process (CSL board + Command Assessment Program), not the promotion itself.",
    ],
    other: "A KD assignment as a MAJ (e.g., battalion XO/S3) is the development goal before LTC consideration — competitiveness, not a TIG/PME gate.",
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(4); DA Pam 600-3 §4-6, §2-8a(4)",
  }),
  sheet("Army", "officers", "O-6", "Colonel", "COL", "promotion", {
    typical: "Published zone timing (official): “Cohort year group officers are normally considered for promotion to colonel in the primary zone in their 21st year of service” (DA Pam 600-3 §4-7a(6)).",
    minTis: "None published as a minimum.",
    minTig: "3 years as LTC to be considered (§2-7c(4)).",
    pme: [
      { text: "Senior Service College (SSC — U.S. Army War College or equivalent, resident or distance) — board-selected attendance by annual MEL selection board of LTCs (and COLs); ILE/JPME I is the eligibility prerequisite for SSC. SSC completion is the senior-PME expectation for COL-level strategic assignments; DA Pam 600-3 does not phrase SSC as a hard gate to PIN COL the way CCC/ILE gate MAJ/LTC — tagged EXPECTED, not overstated.", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: HQDA Promotion Selection Board; BZ/opt-in and opt-out available; Senate confirmation required.",
    ],
    other: "Joint qualification matters for the NEXT step: an officer may not be appointed BG unless they have completed a full joint duty tour and hold the joint qualified officer (3L) designation, waivable case-by-case.",
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(4); DA Pam 600-3 §4-7, §4-8",
  }),
  sheet("Army", "officers", "O-7", "Brigadier General", "BG", "promotion", {
    typical: NT_ARMY + " DA Pam 600-3 expressly puts general-officer promotion “managed separately and beyond this pamphlet's scope.”",
    minTis: "None published.",
    minTig: "1 year as COL to be considered (AR 600-8-29 §2-7c(5)); if selected, the officer may be promoted without regard to additional TIG.",
    pme: [
      { text: "Senior Service College complete is the de facto in-grade expectation (see the COL sheet).", tag: "EXPECTED" },
      { text: "CAPSTONE (National Defense University) is required AFTER selection — within 2 years of Senate confirmation for promotion to BG.", tag: "REQ-GRADE" },
    ],
    how: [
      "Centralized general-officer Promotion Selection Board (BG board, convened under 10 U.S.C. §611; GOMO announces eligibility) → promotion list in seniority order → Presidential approval + Senate confirmation, promoted as vacancies/requirements exist.",
    ],
    other: "Joint duty: a full tour in a joint duty assignment + joint qualified officer (3L) designation is required unless waived. Statutory general-officer strength caps apply (10 U.S.C. §526).",
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(5), §1-6b; DA Pam 600-3 §4-8b, §4-13b(2)",
  }),
  sheet("Army", "officers", "O-8", "Major General", "MG", "promotion", {
    typical: NT_ARMY,
    minTis: "None published.",
    minTig: "1 year as BG to be considered (§2-7c(5)).",
    pme: [{ text: "No additional Army PME gate is published — in-grade development only.", tag: "EXPECTED" }],
    how: [
      "Centralized general-officer Promotion Selection Board (MG board under 10 U.S.C. §611) → Presidential approval + Senate confirmation, in promotion-list order as vacancies occur.",
      "MG is normally the highest PERMANENT grade; O-9/O-10 are position appointments (see their sheets).",
    ],
    flags: [],
    source: ARMY_SRC_O + " · §2-7c(5), §1-6b",
  }),
  sheet("Army", "officers", "O-9", "Lieutenant General", "LTG", "appointment", {
    typical: NT_ARMY + " (Position-driven.)",
    minTis: "None published.",
    minTig: "No §2-7c TIG rule applies — the 1-year rule covers COL and BG consideration only.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "LTG is NOT a board promotion: it is an appointment by the President, with the advice and consent of the Senate, under 10 U.S.C. §601, to a designated position of importance and responsibility carrying the grade of LTG.",
      "AR 600-8-29 expressly excludes LTG from the centralized promotion system. The grade is held while serving in the designated position (permanent grade is typically MG).",
      "Do not read LTG as the next rung of the BG → MG ladder — it is a position appointment from the general-officer corps.",
    ],
    flags: [],
    source: "AR 600-8-29 §1-6a, §1-7; 10 U.S.C. §601",
  }),
  sheet("Army", "officers", "O-10", "General", "GEN", "appointment", {
    typical: NT_ARMY + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "GEN is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated four-star position (e.g., Chief of Staff of the Army, a combatant/Army command).",
      "Excluded from the centralized promotion system; the grade is held while in the designated position.",
    ],
    other: "Five-star General of the Army is a separate wartime grade and is not part of the current promotion system.",
    flags: [],
    source: "AR 600-8-29 §1-6a, §1-7; 10 U.S.C. §601",
  }),
];

/* ============================ MARINE CORPS ============================= */
/* Sources: MCO P1400.32D (21 Mar 2012) Ch. 1–3 + appendices; MCO
 * 1553.4B via MARADMIN 630/24; MARADMINs 108/25, 055/16, 222/26,
 * 334/20, 554/25; MCO 1553.2D (MAGTFTP); SECNAVINSTs 1412.6M,
 * 1412.9B/1412.11B. */

const USMC_SRC_E =
  "MCO P1400.32D (2012) Ch. 2/3 + appendices · MARADMIN 108/25 · MYMARINES promotion PDFs";
const USMC_SRC_W =
  "MCO P1400.32D §3200/3201 · MARADMIN 108/25 · SECNAVINST 1412.9B (as quoted) — see the 1412.11B flag";
const USMC_SRC_O =
  "MCO P1400.32D §3100, App. B · SECNAVINSTs 1412.6M, 1412.10 · MARADMIN 108/25 · MCO 1553.4B";

const USMC_SHEETS: RankSheet[] = [
  sheet("Marine Corps", "enlisted", "E-1", "Private", "Pvt", "entry", {
    typical: "Entry grade; no promotion TO Pvt exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: ["Pvt is the entry grade on enlistment — there is no promotion to it."],
    source: "MCO P1400.32D Ch. 3",
  }),
  sheet("Marine Corps", "enlisted", "E-2", "Private First Class", "PFC", "promotion", {
    typical: NT_USMC,
    minTis: "6 months (ch. 3, App. F)",
    minTig: "6 months",
    pme: [
      { text: "EPME3000 (Leading Marines, formerly Leading Marines DEP EWSDEP/ECDEP) — a junior-enlisted professional development course, NOT a promotion gate to PFC.", tag: "RECOMMENDED" },
    ],
    how: [
      "Decentralized: below Sergeant, promotions are made by commanders under HQMC-established eligibility cutoffs — a PFC promotion is fully qualified in grade/time and not boarded; cutoffs (“eligibility gates”) are computed and published by HQMC (MOPMM) via MARADMIN/monthly promotion authority messages.",
    ],
    other: "Meritorious promotion to PFC (Ch. 4) has NO minimum TIS requirement.",
    flags: [],
    source: USMC_SRC_E,
  }),
  sheet("Marine Corps", "enlisted", "E-3", "Lance Corporal", "LCpl", "promotion", {
    typical: NT_USMC,
    minTis: "9 months",
    minTig: "8 months",
    pme: [
      { text: "EPME3000 (Leading Marines DEP) + LCpl Leadership and Ethics Seminar — required to promote to Cpl (the in-grade gate completed while a LCpl), NOT a gate to LCpl itself.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Decentralized commander promotion under HQMC eligibility cutoffs — no board, no cutting score at this grade (the cutting score starts at Cpl).",
    ],
    flags: [],
    source: USMC_SRC_E,
  }),
  sheet("Marine Corps", "enlisted", "E-4", "Corporal", "Cpl", "promotion", {
    typical: NT_USMC,
    minTis: "12 months",
    minTig: "12 months",
    pme: [
      { text: "EPME3000 DEP (Leading Marines distance education) — both of the next two items must be complete before promotion to Cpl.", tag: "REQ-PROMOTE" },
      { text: "LCpl Leadership and Ethics Seminar (resident, SNCOIC-run) — with EPME3000, BOTH are mandatory prerequisites to Cpl (MCO 1553.4B as updated by MARADMIN 630/24: “Marines must complete the following resident AND distance education courses prior to promotion to the next grade”: LCpl Seminar + EPME3000 → Cpl).", tag: "REQ-PROMOTE" },
      { text: "In grade (as Cpl, for the next grade): EPME4000 DEP (Corporals Course distance education) + Corporals Course (resident) — both required before promotion to Sgt.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Decentralized, but Cpl is where the JEPES composite enters: promotion to Cpl (and Sgt) is computed monthly against a PMOS cutting score — the Commander-initiated JEPES evaluation applies to E-4/E-5 promotions.",
      "EPME3000 + LCpl Seminar must BOTH be recorded before the promotion.",
    ],
    flags: [
      "SUPERSEDED figure: the 8-months TIG for Cpl printed in MCO P1400.32D was raised to 12 months by MARADMIN 055/16 (24 May 2016) — the current figure is 12 months TIG / 12 months TIS.",
    ],
    source: USMC_SRC_E + " · MARADMIN 055/16",
  }),
  sheet("Marine Corps", "enlisted", "E-5", "Sergeant", "Sgt", "promotion", {
    typical: NT_USMC,
    minTis:
      "Switches by authority date: 48 months under MCO P1400.32D (and derivatively under MARADMIN 222/26's “from 48 months”) → 30 months effective 1 Oct 2026 (MARADMIN 222/26). This sheet's standing figure is the 30-month floor, effective 1 Oct 2026.",
    minTig: "12 months",
    pme: [
      { text: "EPME4000 DEP (Corporals Course distance education) — required in grade (as Cpl) for Sgt.", tag: "REQ-PROMOTE" },
      { text: "Corporals Course (resident) — required in grade (as Cpl) for Sgt.", tag: "REQ-PROMOTE" },
      { text: "EPME5000 DEP (Sergeants School distance education) — for FY26 promotion boards this was a board ELIGIBILITY GATE to SSgt (verify the current FY board MARADMIN).", tag: "REQ-PROMOTE" },
      { text: "Sergeants School (resident or seminar; sequenced, 270-day window) — a grade requirement IN Sgt, not a gate to Sgt: an advanced/sequenced requirement — within 9 months after promotion to Sgt if already selected/completed the prerequisite at board time (MCBUL 1560/MARADMIN 630/24).", tag: "REQ-GRADE" },
    ],
    how: [
      "Decentralized: monthly JEPES composite vs. the PMOS cutting score, as at Cpl.",
    ],
    other: "SULI (Squad Leader Development / “SLD”) as a mandatory component for promotion to Sergeant is CANCELLED (MARADMIN 222/26).",
    flags: [
      "Sgt TIS CHANGE (MARADMIN 222/26, 28 May 2026): minimum TIS reduced from 48 months to 30 months, EFFECTIVE 1 OCT 2026. LCpl/Cpl TIS/TIG floors are unchanged.",
    ],
    source: USMC_SRC_E + " · MARADMIN 222/26",
  }),
  sheet("Marine Corps", "enlisted", "E-6", "Staff Sergeant", "SSgt", "promotion", {
    typical: NT_USMC,
    minTis: "60 months (5 years)",
    minTig: "36 months (3 years)",
    pme: [
      { text: "EPME5000 DEP (Sergeants School distance education) — FY26 board eligibility gate to SSgt; FQ status requires the BOTH-set (EPME5000 DEP + Sergeants School or EPME5000 DEP + Senior Enlisted Joint PME I).", tag: "REQ-PROMOTE" },
      { text: "EPME6000 DEP (Career Course distance education) — grade requirement IN SSgt: complete within 12 months after promotion to SSgt if advancement sufficiency not met before promotion (MCBUL 1560, sequenced-education rule).", tag: "REQ-GRADE" },
      { text: "SNCO Leadership School (SNCOIC-run) — in-grade development in SSgt.", tag: "RECOMMENDED" },
    ],
    how: [
      "Centralized: an annual HQMC selection board (above-zone / primary-zone / below-zone structure under §2103 zones) selects SSgts; an approved board normally allows promotion the fiscal year following board publication (§2104).",
      "Board REQUIREMENT: 24 months observed service as a Sergeant — fitness reports observed by two different reporting seniors (the 24-month observation requirement waives only by exception for exceptional performance, §2105).",
    ],
    other: "The basic school qualification requirement of MCO 1553.2D (MAGTFTP) applies.",
    flags: [
      "SUPERSEDED figures: SSgt was TIG 27 months / TIS 48 months before MARADMIN 334/20 (28 Jul 2020) set the current 36/60 — the 27/48 figures still appear in older study material and in narrative text elsewhere.",
      "FY27 board alternate list: DISCONTINUED (per the FY27 SSgt board MARADMIN / USMC orders reporting).",
    ],
    source: USMC_SRC_E + " · MARADMIN 334/20 (superseding the 27/48 figures)",
  }),
  sheet("Marine Corps", "enlisted", "E-7", "Gunnery Sergeant", "GySgt", "promotion", {
    typical: NT_USMC,
    minTis: "6 years",
    minTig: "3 years",
    pme: [
      { text: "EPME6000 DEP (Career Course distance education) — complete BEFORE the GySgt board to be FULLY QUALIFIED for consideration (FY26 board rule; note this is a qualified-status requirement, not an absolute eligibility bar).", tag: "REQ-PROMOTE" },
      { text: "EPME7000 (Advanced Course, distance + resident) — grade requirement IN GySgt, sequenced.", tag: "REQ-GRADE" },
      { text: "SNCO Leadership School (resident, in-grade) — with EPME7000, BOTH required IN grade GySgt.", tag: "REQ-GRADE" },
    ],
    how: ["Centralized: annual HQMC SNCO selection board; the zone/observation structure of the SSgt sheet applies."],
    flags: [],
    source: USMC_SRC_E + " · MCO 1553.4B via MARADMIN 630/24",
  }),
  sheet("Marine Corps", "enlisted", "E-8", "Master Sergeant", "MSgt", "promotion", {
    typical: NT_USMC,
    minTis: "8 years",
    minTig: "4 years",
    pme: [
      { text: "Grade requirement IN GySgt (board gate, FY26): EPME7000BA (distance Advanced Course completed to be eligible) AND one of: SNCO Leadership School (resident) / MSgt Seminar / Advanced School (resident) / Marine Corps Senior Enlisted Leader (MCSEL) Course. All four options count.", tag: "REQ-PROMOTE" },
      { text: "No required PME is published for the MSgt grade itself — the fiscal-year MSgt/1stSgt board MARADMIN's eligible-population definition controls (verify the current FY MARADMIN).", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: an annual HQMC SNCO selection board considers GySgts for MSgt.",
      "Meritorious promotion to MSgt is authorized only for the Drilling Instructor and Recruiter of the Year (MCO P1400.32D Ch. 4, App. C) — E-8 research-center listing.",
    ],
    flags: [],
    source: USMC_SRC_E + " · FY26 MSgt/1stSgt board MARADMIN",
  }),
  sheet("Marine Corps", "enlisted", "E-8", "First Sergeant", "1stSgt", "promotion", {
    typical: NT_USMC,
    minTis: "8 years",
    minTig: "4 years",
    pme: [
      { text: "The same FY26 board-eligibility gate as MSgt (see the MSgt sheet).", tag: "REQ-PROMOTE" },
      { text: "First Sergeant School (resident) — attended AFTER selection to 1stSgt (MARADMIN 630/24 lists First Sergeant School under “Attended After Selection to 1stSgt”; MCO 1553.4B, First Sergeant School). A first sergeant who does not meet prescribed standards may be administratively reduced (MCO 1900.16 / MCO P1400.32D lateral-appointment rules).", tag: "REQ-GRADE" },
    ],
    how: [
      "Lateral appointment from GySgt via the same annual HQMC SNCO selection board as MSgt — the board selects into the 1stSgt track, and the appointment is by lateral move into the command-senior-enlisted track (IMOS 8999 at E-9).",
      "A “F” (fit) in block 8h of the latest fitness report is REQUIRED for a GySgt to be considered for 1stSgt.",
    ],
    other: "Meritorious promotion to 1stSgt is NOT authorized (Ch. 4).",
    flags: [],
    source: USMC_SRC_E + " · MCO 1553.4B; MCO P1400.32D Ch. 4",
  }),
  sheet("Marine Corps", "enlisted", "E-9", "Master Gunnery Sergeant", "MGySgt", "promotion", {
    typical: NT_USMC,
    minTis: "10 years",
    minTig: "3 years",
    pme: [
      { text: "EPME7000 (Advanced, distance + resident) + SNCO Leadership School — the FY26 board's eligible-population line reads as in-grade (GySgt) completion; the FY26 MGySgt/SgtMaj board gate itself states NO PME eligibility gate (“eligible population: MSgts/1stSgts with 3 years TIG, 10 years TIS at board convene”).", tag: "REQ-PROMOTE" },
      { text: "Senior Enlisted Joint PME II (EJPME II) — grade requirement IN MGySgt per MCO 1553.4B (MARADMIN 630/24), specifically for Command Senior Enlisted Leader (CSEL) billets; the FY26 MGySgt board states no PME gate — both print (see the flag).", tag: "REQ-GRADE" },
      { text: "Marine Corps Senior Enlisted Leader (MCSEL) Course — in-grade development for CSEL-track MGySgts.", tag: "EXPECTED" },
    ],
    how: [
      "Centralized: an annual HQMC SNCO selection board; only MSgts are considered for MGySgt (the track split at E-8 is permanent).",
    ],
    flags: [
      "PME GATE — two sources read differently and both print: the FY26 MGySgt/SgtMaj board MARADMIN states NO PME eligibility gate for E-9 selection, while MCO 1553.4B (via MARADMIN 630/24) lists EJPME II as an in-grade requirement for CSEL billets. The board MARADMIN governs selection; the PME order governs the grade/billet requirement.",
    ],
    source: USMC_SRC_E + " · FY26 MGySgt/SgtMaj board MARADMIN; MCO 1553.4B",
  }),
  sheet("Marine Corps", "enlisted", "E-9", "Sergeant Major", "SgtMaj", "promotion", {
    typical: NT_USMC,
    minTis: "10 years",
    minTig: "3 years",
    pme: [
      { text: "First Sergeants Course — required before promotion to SgtMaj (USMC Research Center, Sergeant Major of the Marine Corps page: First Sergeants Course required prior to promotion to sergeant major); MCO 1553.4B lists First Sergeants Course under “Required Prior to Promotion to SgtMaj.”", tag: "REQ-PROMOTE" },
      { text: "Cornerstone Course + EJPME II — grade requirement IN SgtMaj for CSEL billets (630/24).", tag: "REQ-GRADE" },
    ],
    how: [
      "Centralized: an annual HQMC SNCO selection board; only 1stSgts (IMOS 8999) are considered for SgtMaj — the E-8 track split is permanent.",
    ],
    flags: [],
    source: USMC_SRC_E + " · MCO 1553.4B via MARADMIN 630/24",
  }),
  sheet("Marine Corps", "enlisted", "E-9 (special)", "Sergeant Major of the Marine Corps", "SMMC", "appointment", {
    typical: "Not published — a single-billet appointment.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Sergeant Major of the Marine Corps is the Marine Corps' senior enlisted leader and advisor to the Commandant — a single billet filled by appointment from the senior SgtMaj corps, not by a promotion board.",
      "Senior special billets are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Marine Corps", "warrant", "W-1", "Warrant Officer", "WO1", "appointment", {
    typical: "Not published as a promotion timeline (accession grade).",
    minTis:
      "Appointment eligibility (not a promotion rule): sergeant or above with 8 years of service — BOTH NON-WAIVABLE effective 1 May 2026 (MARADMIN 554/25).",
    minTig: "— (entry warrant grade)",
    pme: [
      { text: "Warrant Officer Basic Course (WOBC), The Basic School, Quantico — all USMC WOs attend WOBC; appointment date convention: the 1st day of the month in which WOBC graduation occurs (MCO P1400.32D §3200.5).", tag: "REQ-GRADE" },
      { text: "In-grade development: Expeditionary Warfare School DEP (EWSDEP) is the CWO-track resident-equivalent development at the CWO3 stage.", tag: "EXPECTED" },
    ],
    how: [
      "Appointment by warrant after WOBC graduation — not a promotion. The WO accession route itself is in Commissioning from the Ranks, entry 29.",
      "A Marine selected for warrant officer who was previously considered and NOT selected for promotion to the next higher grade (SSgt→GySgt or GySgt→MSgt/1stSgt) is INELIGIBLE for appointment (MARADMIN 554/25).",
      "Variants: Marine Gunners (0306) and Limited Duty Officers in MOS 4810 may be appointed DIRECTLY to CWO2 (see the CWO2 sheet).",
    ],
    flags: [
      "MARADMIN 554/25 (Dec 2025) — effective 1 May 2026: the 8-year minimum TIS for warrant appointment became NON-WAIVABLE, and passed-over Marines became ineligible. Earlier-cycle criteria (which allowed waivers) are superseded.",
    ],
    source: USMC_SRC_W + " · MARADMIN 554/25",
  }),
  sheet("Marine Corps", "warrant", "W-2", "Chief Warrant Officer 2", "CWO2", "promotion", {
    typical: NT_USMC,
    minTis: "None published — no TIS figure exists in the USMC warrant table (TIG only).",
    minTig: "18 months",
    pme: [
      { text: "None published for promotion to CWO2 — WOBC completion is the W-1 grade requirement (see the WO sheet).", tag: "EXPECTED" },
    ],
    how: [
      "Non-board: per MCO P1400.32D §3201, “Chief warrant officers 2, 3, 4, and 5 are PROMOTED BY THE SECRETARY OF THE NAVY on the recommendation of the Commandant of the Marine Corps” — CWO2 promotion is treated as non-competitive / by time-in-grade in the CWO promotion MARADMINs (no regular board; minority reports differ — see the flag).",
      "Direct-to-CWO2 appointments (not promotions): Marine Gunners (0306) with 3+ years in an infantry battalion/squadron are appointed directly to CWO2; MOS 4810 (Band Officer) likewise appoints directly to CWO2 (degree + WOBC + band audition).",
    ],
    flags: [
      "⚠ SECNAVINST RE-VERIFICATION REQUIRED: the 18-month TIG figure (and the CWO opportunity percentages on the CWO3–CWO5 sheets) rest on SECNAVINST 1412.9B AS QUOTED in USMC CWO promotion MARADMINs. The current instruction is renumbered SECNAVINST 1412.11B (CWO/LDO promotion instruction, 2024) — the specific 18-month and opportunity figures were NOT re-verified against 1412.11B text in research. Re-verify before reliance.",
      "MINORITY REPORT: some secondary sources list a USMC CWO2 “selection board.” The MARADMIN/Gouge model is non-board/time-based. Do not print a board requirement without a current MARADMIN cite.",
    ],
    source: USMC_SRC_W,
  }),
  sheet("Marine Corps", "warrant", "W-3", "Chief Warrant Officer 3", "CWO3", "promotion", {
    typical: NT_USMC,
    minTis: "None published (TIG only).",
    minTig: "2 years in grade as CWO2 — NON-WAIVABLE.",
    pme: [
      { text: "Expeditionary Warfare School DEP (EWSDEP) — the CWO3-stage PME expectation in the USMC CWO development model.", tag: "EXPECTED" },
    ],
    how: [
      "Competitive board: a Secretary of the Navy promotion board considers CWOs by MOS competitive category against vacancies; opportunity guideline approximately 90% (SECNAVINST 1412.9B as quoted in MARADMINs — see the CWO2 sheet's 1412.11B re-verification flag).",
      "Record matters: performance, fitness reports, and MOS vacancy.",
    ],
    flags: [
      "The opportunity percentage rests on SECNAVINST 1412.9B as quoted in MARADMINs; the current instruction is 1412.11B — re-verify (see the CWO2 sheet).",
    ],
    source: USMC_SRC_W,
  }),
  sheet("Marine Corps", "warrant", "W-4", "Chief Warrant Officer 4", "CWO4", "promotion", {
    typical: NT_USMC,
    minTis: "None published (TIG only).",
    minTig: "2 years in grade as CWO3 — NON-WAIVABLE.",
    pme: [
      { text: "Command and Staff College DEP (CSCDEP) — the CWO4-stage PME expectation in the USMC CWO development model.", tag: "EXPECTED" },
    ],
    how: [
      "Competitive board (Secretary of the Navy) by MOS category against vacancies; opportunity guideline approximately 70% (1412.9B as quoted — see the CWO2 sheet's re-verification flag).",
    ],
    flags: [
      "The opportunity percentage rests on SECNAVINST 1412.9B as quoted in MARADMINs; the current instruction is 1412.11B — re-verify (see the CWO2 sheet).",
    ],
    source: USMC_SRC_W,
  }),
  sheet("Marine Corps", "warrant", "W-5", "Chief Warrant Officer 5", "CWO5", "promotion", {
    typical: NT_USMC,
    minTis: "None published (TIG only).",
    minTig: "2 years in grade as CWO4 — NON-WAIVABLE.",
    pme: [{ text: "No PME is published for CWO5." }],
    how: [
      "Competitive board (Secretary of the Navy) by MOS category against vacancies; opportunity guideline approximately 50% (1412.9B as quoted — see the CWO2 sheet's re-verification flag).",
      "CWO5 numbers are capped at 5% of the chief warrant officer corps by SECNAVINST/CMC policy.",
    ],
    flags: [
      "The 5% cap and opportunity percentage rest on SECNAVINST 1412.9B as quoted in MARADMINs; the current instruction is 1412.11B — re-verify (see the CWO2 sheet).",
    ],
    source: USMC_SRC_W,
  }),
  sheet("Marine Corps", "officers", "O-1", "Second Lieutenant", "2ndLt", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [
      { text: "The Basic School (TBS) — the post-commissioning school attended as a 2ndLt (MAGTFTP / MCO 1553.4B).", tag: "REQ-GRADE" },
    ],
    how: [
      "Commissioning (USNA / NROTC / OCS / ECP-family routes) + TBS — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [],
    source: USMC_SRC_O,
  }),
  sheet("Marine Corps", "officers", "O-2", "First Lieutenant", "1stLt", "promotion", {
    typical:
      "The USMC promotes to 1stLt at the 18-month point (SECNAVINST 1412.6M via MCO P1400.32D §3100.2: “all second lieutenants on the active-duty list will be promoted to first lieutenant on the first day of the month following 18 months of commissioned service if favorably recommended”). No separate average is published.",
    minTis: "None published — officer flow is zone-managed.",
    minTig: "18 months commissioned service (to promote).",
    pme: [
      { text: "Expeditionary Warfare School (EWS, resident or DEP) — the Capt-stage school; EWSDEP completion is the studied expectation by the Maj board window. Not a gate to 1stLt.", tag: "EXPECTED" },
    ],
    how: [
      "No selection board for 1stLt: monthly promotion MARADMINs list 2ndLts by seniority; the Commandant's favorable recommendation is the mechanism.",
    ],
    flags: [],
    source: USMC_SRC_O + " · MCO P1400.32D §3100.2",
  }),
  sheet("Marine Corps", "officers", "O-3", "Captain", "Capt", "promotion", {
    typical:
      "No promotion-average is published. The zone math is published: a Capt board's primary zone is built from officers with about 2 YEARS TIG at the board (consideration), and promotion itself requires 2 years TIG — do not present the ~4-years-of-service zone entry as a “typical pin-on.”",
    minTis: "None published.",
    minTig:
      "TWO DIFFERENT FIGURES, LABELED — for CONSIDERATION (zone construction): NO minimum TIG is stated for Capt (App. B: “—”); officers with about 2 years TIG at the board typically compose the primary zone. For PROMOTION ITSELF: 2 years TIG as 1stLt (SECNAVINST 1412.6M requirement).",
    pme: [
      { text: "Expeditionary Warfare School (EWS / EWSDEP) — the expected Capt PME; EWSDEP completion is the studied expectation before the Maj board.", tag: "EXPECTED" },
    ],
    how: [
      "All Fully Qualified Officers List (AFQOL) screening — Capt is the LAST non-competitive USMC officer grade: there is no competitive selection board; Captains are promoted from the AFQOL when fully qualified (favorable recommendation, fitness reports, no adverse material).",
    ],
    flags: [
      "Do not merge the two TIG figures: consideration (no stated minimum; the zone is built around ~2 years TIG) and promotion (2 years TIG required) are different rules in the pack's sources.",
    ],
    source: USMC_SRC_O + " · MCO P1400.32D App. B; SECNAVINST 1412.6M",
  }),
  sheet("Marine Corps", "officers", "O-4", "Major", "Maj", "promotion", {
    typical: NT_USMC,
    minTis: "None published.",
    minTig: "For CONSIDERATION: 3 years TIG as Capt (App. B). No separate promotion-TIG figure is published for Maj.",
    pme: [
      { text: "Intermediate Level School (ILS — Command and Staff College or service equivalent) — ILS is generally completed AS a Major (selected by MCU PME boards); it is the expected PME for competitiveness to LtCol, not a stated gate to Maj.", tag: "EXPECTED" },
      { text: "EWS (Capt PME) completion is the studied expectation before the Maj board.", tag: "EXPECTED" },
    ],
    how: [
      "Competitive Promotion Selection Board (PSB) — the first competitive officer board in the USMC (Maj). Zones: AZ/PZ/BZ under §3100/App. B.",
    ],
    flags: [],
    source: USMC_SRC_O,
  }),
  sheet("Marine Corps", "officers", "O-5", "Lieutenant Colonel", "LtCol", "promotion", {
    typical: NT_USMC,
    minTis: "None published.",
    minTig: "For CONSIDERATION: 3 years TIG as Maj (App. B).",
    pme: [
      { text: "Intermediate Level School (ILS) completion — expected before LtCol competitiveness; MCU PME boards select officers for resident ILS.", tag: "EXPECTED" },
    ],
    how: ["Competitive PSB (LtCol board); zones AZ/PZ/BZ."],
    flags: [],
    source: USMC_SRC_O,
  }),
  sheet("Marine Corps", "officers", "O-6", "Colonel", "Col", "promotion", {
    typical: NT_USMC,
    minTis: "None published.",
    minTig: "For CONSIDERATION: 3 years TIG as LtCol (App. B).",
    pme: [
      { text: "Top Level School (TLS — war college / fellowship) — generally completed AS a Colonel (MCU PME board-selected); expected for general-officer competitiveness, not a gate to Col.", tag: "EXPECTED" },
    ],
    how: ["Competitive PSB (Col board); zones AZ/PZ/BZ."],
    flags: [],
    source: USMC_SRC_O,
  }),
  sheet("Marine Corps", "officers", "O-7", "Brigadier General", "BGen", "promotion", {
    typical: NT_USMC,
    minTis: "None published.",
    minTig: "For CONSIDERATION: 1 year TIG as Col (App. B note: the general-officer zone runs from officers with 1 year TIG to the junior officer with 26 years of commissioned service — eligibility ceilings apply).",
    pme: [{ text: "No additional USMC PME gate is published for BGen.", tag: "EXPECTED" }],
    how: [
      "General Officer Promotion Selection Board + Presidential nomination + Senate confirmation.",
    ],
    other: "Joint qualification requirements apply to general-officer appointment under 10 U.S.C.",
    flags: [],
    source: USMC_SRC_O + " · MCO P1400.32D App. B (Timed Promotion Plan)",
  }),
  sheet("Marine Corps", "officers", "O-8", "Major General", "MajGen", "promotion", {
    typical: NT_USMC,
    minTis: "None published.",
    minTig: "For CONSIDERATION: 1 year TIG as BGen (App. B).",
    pme: [{ text: "No additional USMC PME gate is published.", tag: "EXPECTED" }],
    how: [
      "General Officer PSB + Presidential nomination + Senate confirmation.",
      "MajGen is normally the highest PERMANENT grade; O-9/O-10 are position appointments.",
    ],
    flags: [],
    source: USMC_SRC_O + " · MCO P1400.32D App. B",
  }),
  sheet("Marine Corps", "officers", "O-9", "Lieutenant General", "LtGen", "appointment", {
    typical: NT_USMC + " (Position-driven.)",
    minTis: "None published.",
    minTig: "No App. B TIG rule applies — App. B's Timed Promotion Plan covers consideration only through MajGen.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "LtGen is NOT a board promotion: it is an appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated position of importance and responsibility carrying the grade of LtGen.",
      "The grade is held while serving in the designated position; the permanent grade is typically MajGen.",
    ],
    flags: [
      "Do not fabricate a TIG for LtGen/Gen from the board table — App. B does not carry one.",
    ],
    source: "MCO P1400.32D App. B (scope note); 10 U.S.C. §601",
  }),
  sheet("Marine Corps", "officers", "O-10", "General", "Gen", "appointment", {
    typical: NT_USMC + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "Gen is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated four-star position (e.g., Commandant of the Marine Corps, a combatant command).",
      "The grade is held while in the designated position.",
    ],
    flags: [],
    source: "MCO P1400.32D App. B (scope note); 10 U.S.C. §601",
  }),
];

/* ================================= NAVY ================================ */
/* Sources: BUPERSINST 1430.16H (21 Jan 2026 — the G edition is
 * cancelled); SECNAVINSTs 1412.8C, 1412.11C, 1420.1C; OPNAVINST
 * 1420.1C; MyNavyHR (LDO/CWO Guidebook, advancement pages, Career
 * Playbooks); OPNAV N13. */

const NAVY_SRC_E =
  "BUPERSINST 1430.16H (21 Jan 2026 — the G edition is cancelled) · MyNavyHR advancement pages · OPNAV N13";
const NAVY_SRC_W =
  "SECNAVINST 1412.8C · OPNAVINST 1420.1C · MyNavyHR LDO/CWO Guidebook";
const NAVY_SRC_O =
  "MyNavyHR officer promotion page + Career Playbooks · SECNAVINST 1420.1C (flag selection) · 10 U.S.C. §619";

const NAVY_SHEETS: RankSheet[] = [
  sheet("Navy", "enlisted", "E-1", "Seaman Recruit", "SR", "entry", {
    typical: "Entry grade; no advancement TO SR exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: ["SR is the entry grade on enlistment — there is no advancement to it."],
    source: "BUPERSINST 1430.16H",
  }),
  sheet("Navy", "enlisted", "E-2", "Seaman Apprentice", "SA", "promotion", {
    typical: "9 months is the published automatic point (1430.16H states 9 months TIS; the cancelled G edition stated 9 months time-in-rate — both print; see the flag).",
    minTis: "9 months (cumulative Active Federal Military Service) per BUPERSINST 1430.16H, Table 2-1.",
    minTig: "— (the H edition states the E-2 requirement as TIS, not a separate TIG)",
    pme: [{ text: "None." }],
    how: [
      "Automatic advancement: E-2 advancement is by time — no NWAE, no board.",
      "Advancement effective dates are posted in the member's record; E-2/E-3 advancements take effect on the 16th of the month in which the member completes the required TIS.",
    ],
    other: "CO/OIC may withhold or withdraw advancement for cause (no “frocking” applies at E-2).",
    flags: [
      "EDITION CHECK: BUPERSINST 1430.16H (21 Jan 2026) cancelled the G edition. The H edition states the E-2 and E-3 requirements as TIS (9 and 18 months); the cancelled G edition stated them as TIR/TIS pairs (9/9 and 9/18). Where older material still shows the G-era TIR figures, the H edition controls.",
    ],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-3", "Seaman", "SN", "promotion", {
    typical: "18 months TIS is the published automatic point; no Navy-published average beyond it.",
    minTis: "18 months (cumulative AFMS) per BUPERSINST 1430.16H, Table 2-1 (the cancelled G edition: 9 months TIR / 18 months TIS).",
    minTig: "— (stated as TIS in the H edition)",
    pme: [
      {
        text: "Foundational Leader Development Course (FLDC) — the Navy's leadership course delivered in grade bands (ELDC/ILDC/ALDC/CPO-LDC). FLDC completion is NOT a requirement for advancement to E-3 (or E-4); the advancement-relevant PMK-EE requirement begins at E-5.",
        tag: "BY-GRADE",
      },
    ],
    how: [
      "Automatic advancement by time — no NWAE, no board.",
      "Effective on the 16th of the month in which the TIS requirement completes.",
    ],
    flags: [
      "EDITION CHECK: figures are BUPERSINST 1430.16H (21 Jan 2026); the G edition is cancelled (see the E-2 sheet).",
    ],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-4", "Petty Officer Third Class", "PO3", "promotion", {
    typical: "30 months TIS is the published automatic point; no Navy-published average beyond it. (MAP can advance a Sailor earlier — see How.)",
    minTis: "30 months (cumulative AFMS) per BUPERSINST 1430.16H, Table 2-1 (the cancelled G edition: 6 months TIR).",
    minTig: "— (stated as TIS in the H edition)",
    pme: [
      {
        text: "Professional Military Knowledge Eligibility Exam (PMK-EE) — NOT required for E-4 under 1430.16H. The PMK-EE requirement applies to advancement TO E-5, E-6, and E-7 only.",
      },
      {
        text: "Foundational Leader Development Course at the E-4 band — delivered by grade band; not an advancement gate to E-4.",
        tag: "BY-GRADE",
      },
    ],
    how: [
      "Automatic advancement: E-4 is the last automatic grade — no NWAE under the current system. A fully qualified E-3 advances to E-4 on reaching 30 months TIS (effective the 16th of that month).",
      "Earlier advancement is possible through the Meritorious Advancement Program (MAP) — command-awarded quotas within published MAP eligibility windows.",
    ],
    flags: [
      "Do not rely on older material tying an NWAE or a PMK-EE to E-4: under BUPERSINST 1430.16H, E-4 is automatic by TIS and PMK-EE gates E-5/E-6/E-7 only.",
    ],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-5", "Petty Officer Second Class", "PO2", "promotion", {
    typical: NT_NAVY + " Actual advancement runs off the Final Multiple Score ranking against rating quotas each cycle — no official average TIS is published.",
    minTis: "None published as the gate — the gate is time-in-rate (see Minimum TIG).",
    minTig: "12 months time-in-rate as E-4 (BUPERSINST 1430.16H, Table 2-1).",
    pme: [
      {
        text: "PMK-EE for E-5 — must be PASSED (once per grade) to be eligible for advancement to E-5. PMK-EE is required for E-5, E-6, and E-7 advancement only.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Navy-Wide Advancement Exam (NWAE) + Final Multiple Score (FMS): Sailors compete within their rating; the FMS (exam score, evaluations, awards, education, PNA points) ranks candidates and advancements fill rating quotas set by community managers each cycle.",
      "Ratings in the Billet-Based Advancement (BBA) program advance differently: advancement comes from applying to and being selected for a specific E-5 billet (Ready Relevant Learning + A2P paths) — in BBA ratings there is no NWAE/FMS cycle for E-5.",
    ],
    other: "Evaluation and other eligibility requirements per 1430.16H Ch. 2–3; EP evaluations can carry an early-promote TIR waiver in the E-6/E-7 cycles (not an E-5 rule).",
    flags: [],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-6", "Petty Officer First Class", "PO1", "promotion", {
    typical: NT_NAVY + " Advancement is FMS-rank versus rating quota; no official average is published.",
    minTis: "None published as the gate — time-in-rate controls.",
    minTig: "36 months time-in-rate as E-5 (1430.16H, Table 2-1). An “Early Promote” evaluation can waive up to 12 months of TIR (EP waiver).",
    pme: [
      { text: "PMK-EE for E-6 — passed once per grade.", tag: "REQ-PROMOTE" },
      {
        text: "Intermediate Leader Development Course (ILDC) — required for advancement to E-6 (delivered in the FLDC sequence by grade band).",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "NWAE + Final Multiple Score competition within rating against cycle quotas (non-BBA ratings).",
      "BBA ratings: E-6 advancement is by selection into an E-6 billet through the detailing/advancement marketplace process, not the NWAE cycle.",
    ],
    flags: [],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-7", "Chief Petty Officer", "CPO", "promotion", {
    typical: NT_NAVY + " The exam-to-board-to-selection path publishes no official average time to Chief.",
    minTis: "None published as the gate — time-in-rate controls.",
    minTig: "36 months time-in-rate as E-6 (1430.16H, Table 2-1); EP evaluation waiver up to 12 months.",
    pme: [
      { text: "PMK-EE for E-7 — passed once per grade (the last PMK-EE grade; PMK-EE is NOT required for E-8/E-9).", tag: "REQ-PROMOTE" },
      {
        text: "Advanced Leader Development Course (ALDC) — required for advancement to E-7 in the FLDC sequence.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Three-step path: (1) the E-7 NWAE makes a Sailor BOARD-ELIGIBLE (exam score threshold within rating); (2) a CHNAVPERS selection board reviews board-eligible PO1s; (3) selectees complete CPO initiation (the Charge Book / season process) before frocking/pinning as directed by NAVADMIN.",
      "Selection — not the exam score alone — makes a Chief; non-select board-eligible Sailors recycle to the next cycle while eligible.",
    ],
    flags: [],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-8", "Senior Chief Petty Officer", "SCPO", "promotion", {
    typical: NT_NAVY,
    minTis: "None published as the gate — time-in-rate controls.",
    minTig: "36 months time-in-rate as E-7 (1430.16H, Table 2-1).",
    pme: [
      {
        text: "CPO Leader Development Course (CPO-LDC) — required to be board-eligible/advance to E-8 (the FY26 E-8 board precept treats CPO leader development as the requirement; PMK-EE is NOT required at E-8).",
        tag: "REQ-PROMOTE",
      },
      {
        text: "Senior Enlisted Academy (SEA) — expected development for senior chiefs; per the FY26 board precept direction, non-completion of available PME shall not be viewed unfavorably by itself — SEA is the expectation, CPO-LDC is the gate.",
        tag: "EXPECTED",
      },
    ],
    how: [
      "Selection board only — there is no E-8 exam. The CHNAVPERS E-8 selection board reviews eligible Chiefs' records against the board precept and convening order for that fiscal year.",
    ],
    flags: [],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-9", "Master Chief Petty Officer", "MCPO", "promotion", {
    typical: NT_NAVY,
    minTis: "None published as the gate — time-in-rate controls.",
    minTig: "36 months time-in-rate as E-8 (1430.16H, Table 2-1).",
    pme: [
      {
        text: "Senior Enlisted Academy (SEA) — REQUIRED for advancement to E-9: SEA graduation (or approved equivalent) is a prerequisite to be board-eligible for MCPO (graduates carry the 8SEA NEC).",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Selection board only — the CHNAVPERS E-9 selection board reviews eligible Senior Chiefs against the fiscal-year precept. No exam at E-9.",
      "Command Master Chief / Command Senior Chief are separate screened billets (CMDCS/CMDCM program), not grades.",
    ],
    flags: [],
    source: NAVY_SRC_E,
  }),
  sheet("Navy", "enlisted", "E-9 (special)", "Master Chief Petty Officer of the Navy", "MCPON", "appointment", {
    typical: "Not published — a single-billet appointment.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Master Chief Petty Officer of the Navy is the Navy's senior enlisted leader and advisor to the Chief of Naval Operations — a single billet filled by appointment from the senior MCPO/CMDCM corps, not by a selection board.",
      "Senior special billets are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Navy", "warrant", "W-1", "Warrant Officer 1", "WO1", "appointment", {
    typical: "Not published as a promotion timeline (accession grade — Cyber warrant designator 7841 only).",
    minTis:
      "Appointment eligibility (not a promotion rule): the Cyber WO1 accession takes enlisted Sailors E-5 and above with 6–14 years of service (see Commissioning from the Ranks, entry 34).",
    minTig: "— (entry warrant grade)",
    pme: [
      {
        text: "Warrant Officer Indoctrination / the CWO accession pipeline schooling as assigned by designator — completed in grade as a WO1.",
        tag: "REQ-GRADE",
      },
    ],
    how: [
      "Appointment by warrant (not commissioned) — in the modern Navy, WO1 exists ONLY in the Cyber warrant community (designator 7841), filled by an In-Service Procurement Board (ISPB) from qualified enlisted Sailors.",
      "All other Navy warrant accessions commission directly as CWO2 — there is no general WO1 grade in the Navy.",
      "The accession route itself is in Commissioning from the Ranks, entry 34.",
    ],
    flags: [],
    source: NAVY_SRC_W + " · MyNavyHR warrant program pages",
  }),
  sheet("Navy", "warrant", "W-2", "Chief Warrant Officer 2", "CWO2", "promotion", {
    typical:
      "Official flow timing (MyNavyHR LDO/CWO Community flow points): CWO3 consideration comes about 3 years after CWO2 appointment — the community's published flow point, not a surveyed average. No CWO2-specific average is published.",
    minTis: "Direct-accession CWO2s: appointed from the fleet under the LDO/CWO ISPB eligibility windows (see Commissioning from the Ranks, entry 33).",
    minTig:
      "For a WO1 promoting to CWO2: 36 months in grade as WO1 AND 12 years total active duty service (SECNAVINST 1412.8C) — the two conditions are conjunctive.",
    pme: [
      {
        text: "CWO professional development per designator (the LDO/CWO Guidebook's community training continuum) — no single school is published as a CWO2 promotion gate.",
        tag: "EXPECTED",
      },
    ],
    how: [
      "Two roads to CWO2: (1) DIRECT appointment by commission through the LDO/CWO In-Service Procurement Board — the normal Navy path; (2) promotion of a Cyber WO1 after 36 months in grade + 12 years total service.",
      "WO1 → CWO2 promotion is All Fully Qualified (AFQ) — no selection board; promotion occurs when both statutory/regulatory conditions are met (SECNAVINST 1412.8C).",
    ],
    flags: [],
    source: NAVY_SRC_W,
  }),
  sheet("Navy", "warrant", "W-3", "Chief Warrant Officer 3", "CWO3", "promotion", {
    typical:
      "Official flow point (MyNavyHR LDO/CWO Guidebook/community briefs): CWO3 flow point is about 3 YEARS after appointment to CWO2 (measured from the CWO2 date). Labeled as the community's published flow point, not an average.",
    minTis: "None published beyond the in-grade requirement.",
    minTig: "36 months in grade as CWO2 (SECNAVINST 1412.8C).",
    pme: [
      { text: "Designator-specific CWO development per the LDO/CWO Guidebook continuum — no universal school gate is published for CWO3.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board (CWO promotion board under SECNAVINST 1412.8C) — CWOs compete within their designator/community against authorized strength.",
      "Note the pack's source tension: the LDO/CWO flow-point guideline table phrases CWO3 as considered on an AFQ basis while 1412.8C structures board consideration — the board mechanism in the instruction controls; the flow point is the timing guide.",
    ],
    flags: [
      "SOURCE TENSION (printed, not blended): the MyNavyHR flow-point guideline table and SECNAVINST 1412.8C do not phrase the CWO3 mechanism identically (guideline “AFQ” language vs. the instruction's board structure). The instruction governs; verify against the current fiscal-year promotion plan.",
    ],
    source: NAVY_SRC_W,
  }),
  sheet("Navy", "warrant", "W-4", "Chief Warrant Officer 4", "CWO4", "promotion", {
    typical:
      "Official flow point (MyNavyHR): CWO4 flow point is about 7 YEARS after appointment to CWO2 — the community's published flow point, not an average.",
    minTis: "None published beyond the in-grade requirement.",
    minTig: "48 months in grade as CWO3 (SECNAVINST 1412.8C).",
    pme: [
      { text: "Senior CWO development per the LDO/CWO Guidebook (including senior leadership/continuum courses by designator) — no universal school gate is published for CWO4.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board under SECNAVINST 1412.8C, within designator, against authorized CWO4 strength — the most competitive of the mid-grade CWO boards.",
    ],
    flags: [],
    source: NAVY_SRC_W,
  }),
  sheet("Navy", "warrant", "W-5", "Chief Warrant Officer 5", "CWO5", "promotion", {
    typical: NT_NAVY + " The sheet prints NO typical number for CWO5: the flow-point figure could not be fully extracted from SECNAVINST 1412.8C in research, so nothing is printed rather than a number carried on partial evidence.",
    minTis: "None published that could be verified in research (see the flag).",
    minTig:
      "NO single number is printed: the statutory floor is 3 YEARS in grade to be ELIGIBLE FOR CONSIDERATION (Warrant Officer Management Act, 10 U.S.C. §582 — an eligibility floor, not the Navy's applied number), and the LDO/CWO Guidebook's planning range for CWO5 consideration is 4–6 YEARS in grade as CWO4. The Navy's exact SECNAVINST 1412.8C in-grade figure could not be fully extracted in the research pass — verify it in 1412.8C before relying on any single number.",
    pme: [
      { text: "No PME gate for CWO5 is published in the sources extracted.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board under SECNAVINST 1412.8C within designator — CWO5 is the Navy's most constrained warrant grade, strength-capped by law and policy.",
    ],
    flags: [
      "⚠ DO NOT PRINT A SINGLE CWO5 TIG NUMBER: research could not fully extract the exact in-grade minimum from SECNAVINST 1412.8C. What prints is the statutory 3-year consideration floor (10 U.S.C. §582) and the Guidebook's 4–6-year planning range, labeled as such. Verify the exact figure in the current 1412.8C before relying on it.",
    ],
    source: NAVY_SRC_W + " · 10 U.S.C. §582 · MyNavyHR LDO/CWO Guidebook (planning range)",
  }),
  sheet("Navy", "officers", "O-1", "Ensign", "ENS", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [
      { text: "Community accession schooling (e.g., OCS/USNA/NROTC pipeline + division officer training) is attended in grade; no PME gates ENS.", tag: "REQ-GRADE" },
    ],
    how: [
      "Commissioning (USNA / NROTC / OCS / direct commission) — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-2", "Lieutenant Junior Grade", "LTJG", "promotion", {
    typical:
      "Official flow point (MyNavyHR): LTJG at about 2 YEARS of commissioned service — the published flow point for an all-fully-qualified grade, not an average.",
    minTis: "No separate minimum is published on the MyNavyHR officer promotion page — LTJG runs on the flow point below.",
    minTig: "Flow-point based: promotion at ~2 years commissioned service (10 U.S.C. §619 sets the DOPMA framework; the Navy publishes the timing as a flow point).",
    pme: [{ text: "No PME gate is published for LTJG; community division-officer qualifications run in grade.", tag: "EXPECTED" }],
    how: [
      "All Fully Qualified (AFQ): LTJG promotion is non-competitive — officers promote on the flow point when fully qualified (no selection board).",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-3", "Lieutenant", "LT", "promotion", {
    typical:
      "Official flow point (MyNavyHR): LT at about 4 YEARS of commissioned service — published flow point for an AFQ grade.",
    minTis: "None separately published on the cited page.",
    minTig: "Flow-point based: ~4 years commissioned service.",
    pme: [
      { text: "Department-head preparation begins in grade for URL officers (DH school is post-LT selection into the DH pipeline); JPME Phase I is the expected joint PME milestone by the LCDR window.", tag: "EXPECTED" },
    ],
    how: [
      "All Fully Qualified (AFQ): LT is the Navy's last non-competitive unrestricted-line grade on this path — promotion on the flow point when fully qualified, no board.",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-4", "Lieutenant Commander", "LCDR", "promotion", {
    typical:
      "Official flow point (MyNavyHR Career Playbooks): LCDR flow point 9–11 YEARS of commissioned service, with published promotion opportunity of roughly 70–90% — the Navy's own published planning figures, labeled as flow point/opportunity, not averages.",
    minTis: "Minimums are set in the annual promotion plan/zone message rather than a standing page figure; the cited MyNavyHR page publishes flow points, not a TIS floor.",
    minTig: "Set by the fiscal-year promotion zone (DOPMA framework, 10 U.S.C. §619); no standing LT→LCDR TIG number is published on the cited page.",
    pme: [
      {
        text: "A department head tour and JPME Phase I are the published expectations for LCDR competitiveness by community (Career Playbooks) — competitiveness expectations, not a universal pin-on gate.",
        tag: "EXPECTED",
      },
    ],
    how: [
      "Selection board: the FY LCDR board (by community/designator) selects from the in-zone population under the board precept; first competitive officer board in the Navy line path.",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-5", "Commander", "CDR", "promotion", {
    typical:
      "Official flow point (MyNavyHR Career Playbooks): CDR flow point 15–17 YEARS of commissioned service, opportunity roughly 60–80% — published planning figures.",
    minTis: "Set by the annual promotion plan; no standing TIS floor published on the cited page.",
    minTig: "Set by the fiscal-year zone under the DOPMA framework.",
    pme: [
      {
        text: "JPME Phase I — REQUIRED to be eligible for URL COMMAND (a command-eligibility requirement published in the community briefs), which is distinct from a promotion gate to CDR; it is printed here because command screening rides on the CDR record.",
        tag: "REQ-GRADE",
      },
      { text: "JPME and senior service college milestones continue in grade per community playbooks.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board by community/designator under the FY board precept; command screening is a SEPARATE administrative board process layered on the CDR population.",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-6", "Captain", "CAPT", "promotion", {
    typical:
      "Official flow point (MyNavyHR Career Playbooks): CAPT flow point 21–23 YEARS of commissioned service, opportunity roughly 40–60% — published planning figures.",
    minTis: "Set by the annual promotion plan; no standing TIS floor published on the cited page.",
    minTig: "Set by the fiscal-year zone under the DOPMA framework. CAPT is a DOPMA CONTROL GRADE — numbers are capped by law (10 U.S.C. §523).",
    pme: [
      { text: "Senior service college / JPME Phase II milestones are the published expectations for flag competitiveness; no CAPT pin-on PME gate is published.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board by community/designator; CAPT selections are constrained by statutory control-grade ceilings — the board cannot exceed authorized CAPT strength.",
    ],
    flags: [],
    source: NAVY_SRC_O,
  }),
  sheet("Navy", "officers", "O-7", "Rear Admiral (Lower Half)", "RDML", "promotion", {
    typical: NT_NAVY + " Flag flow is billet-driven; no standing flow point is published for RDML.",
    minTis: "None published — flag selection is record- and billet-based.",
    minTig: "No TIG floor is published for flag consideration in the cited sources; eligibility is by zone/record under SECNAVINST 1420.1C.",
    pme: [
      {
        text: "Joint Qualified Officer (JQO) status — REQUIRED FOR SELECTION to flag officer (the Navy's published flag requirement: full joint tour + JPME). Printed verbatim from the source: “Required for selection to Flag Officer.”",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Flag selection board (SECNAVINST 1420.1C) → Presidential nomination → Senate confirmation. Flag promotions fill authorized flag billets; selection ≠ immediate promotion — officers promote as billets vacate.",
    ],
    flags: [],
    source: NAVY_SRC_O + " · SECNAVINST 1420.1C",
  }),
  sheet("Navy", "officers", "O-8", "Rear Admiral", "RADM", "promotion", {
    typical: NT_NAVY + " (Billet-driven flag appointment.)",
    minTis: "None published.",
    minTig: "None published as a standing floor in the cited sources.",
    pme: [
      { text: "JQO status is the standing flag requirement (see the RDML sheet); no additional PME gate is published for RADM.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Flag appointment process: selection/nomination for a two-star billet, Presidential nomination and Senate confirmation — RADM (upper half) is held with the designated billet under the flag officer management system (SECNAVINST 1420.1C).",
    ],
    flags: [],
    source: NAVY_SRC_O + " · SECNAVINST 1420.1C",
  }),
  sheet("Navy", "officers", "O-9", "Vice Admiral", "VADM", "appointment", {
    typical: NT_NAVY + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "VADM is NOT a board promotion: it is an appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated position of importance and responsibility carrying the grade of VADM.",
      "The grade is held while serving in the designated position; the permanent grade is typically RADM.",
    ],
    flags: [],
    source: "10 U.S.C. §601; SECNAVINST 1420.1C (scope)",
  }),
  sheet("Navy", "officers", "O-10", "Admiral", "ADM", "appointment", {
    typical: NT_NAVY + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "ADM is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated four-star position (e.g., Chief of Naval Operations, a combatant command).",
      "The grade is held while in the designated position.",
    ],
    flags: [],
    source: "10 U.S.C. §601",
  }),
];

/* ============================ COAST GUARD ============================== */
/* Sources: COMDTINST M1000.2C (Military Personnel Manual / PSC
 * advancement chapters); Personnel Service Center (PSC-EPM);
 * COMDTINST M1420.1 (CWO appointment); 14 U.S.C. §2113 (officer
 * promotion eligibility — the Coast Guard is NOT under DOPMA);
 * OPAL (Officer Personnel Administration) normal timing. */

const CG_SRC_E =
  "COMDTINST M1000.2C · Personnel Service Center (PSC-EPM) advancement guidance";
const CG_SRC_W =
  "COMDTINST M1420.1 (CWO appointment) · PSC CWO board guidance — figures WITHHELD where the pack routes to the PSC guides";
const CG_SRC_O =
  "14 U.S.C. §2113 (statutory eligibility) · OPAL normal promotion timing (labeled as such)";

const CG_SHEETS: RankSheet[] = [
  sheet("Coast Guard", "enlisted", "E-1", "Seaman Recruit", "SR", "entry", {
    typical: "Entry grade; no advancement TO SR exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: ["SR is the entry grade on enlistment (recruit training) — there is no advancement to it."],
    source: "COMDTINST M1000.2C",
  }),
  sheet("Coast Guard", "enlisted", "E-2", "Seaman Apprentice", "SA", "promotion", {
    typical: NT_CG + " E-2 advancement is event-based (recruit-training completion), not time-published.",
    minTis: "None published as a time floor — advancement follows completion of recruit training.",
    minTig: "No TIG figure is published for E-2 in COMDTINST M1000.2C advancement material.",
    pme: [{ text: "None." }],
    how: [
      "Commanding Officer advancement: on successful completion of recruit training (and meeting conduct/qualification marks), the member advances to E-2 by CO authority — no exam, no panel.",
    ],
    flags: [],
    source: CG_SRC_E,
  }),
  sheet("Coast Guard", "enlisted", "E-3", "Seaman", "SN", "promotion", {
    typical: NT_CG,
    minTis: "None published beyond the in-grade requirement below.",
    minTig: "6 months in grade as E-2 — OR completion of Class “A” school (an A-school graduate advances to E-3 on graduation).",
    pme: [
      {
        text: "Enlisted Professional Qualifications (EPQ) for the grade/rating — required for advancement eligibility in the E-3→E-4 pipeline; EPQ completion is the standing qualification currency for SWE grades.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "CO advancement on meeting the TIG/A-school condition with required qualifications — no Servicewide Exam at E-3.",
    ],
    flags: [],
    source: CG_SRC_E,
  }),
  sheet("Coast Guard", "enlisted", "E-4", "Petty Officer Third Class", "PO3", "promotion", {
    typical: NT_CG,
    minTis: "None published beyond the in-grade requirement below.",
    minTig: "6 months in grade as E-3.",
    pme: [
      {
        text: "Apprentice Leadership Program (ALP) — required for advancement to E-4.",
        tag: "REQ-PROMOTE",
      },
      { text: "EPQ/RPQ (Rating Performance Qualifications) current for the rating.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Advancement to E-4 is by qualification and command recommendation on meeting TIG + ALP + EPQ/RPQ — there is NO Servicewide Exam for E-4; the SWE begins at E-5.",
    ],
    flags: [
      "ALCOAST 473/23 removed the time-in-grade requirement for A-school graduates advancing in the E-4 window in the affected ratings — where a member is an A-school graduate, check the current ALCOAST/PSC guidance: the TIG may not apply to them.",
    ],
    source: CG_SRC_E + " · ALCOAST 473/23",
  }),
  sheet("Coast Guard", "enlisted", "E-5", "Petty Officer Second Class", "PO2", "promotion", {
    typical: NT_CG + " Advancement runs off the SWE Final Multiple against rating cutoffs — no official average TIS is published.",
    minTis: "None published beyond the in-grade requirement below.",
    minTig: "6 months in grade as E-4.",
    pme: [
      { text: "EPQ + RPQ for E-5 in the member's rating — required for SWE eligibility.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Servicewide Examination (SWE): the annual (May) exam cycle builds a Final Multiple (exam score, performance marks, awards, sea time and other factors per the current SWE profile) and members advance in Final Multiple order as rating vacancies/cutoffs allow.",
    ],
    flags: [
      "NEW EPQ PACKET: the May 2027 SWE uses the new EPQ27 qualification packet — the PSC deadline for EPQ27 completion is 1 Feb 2027. Members testing in the May 2027 cycle must be on the new packet.",
    ],
    source: CG_SRC_E + " · PSC SWE announcements",
  }),
  sheet("Coast Guard", "enlisted", "E-6", "Petty Officer First Class", "PO1", "promotion", {
    typical: NT_CG,
    minTis: "None published beyond the in-grade requirement below.",
    minTig: "12 months in grade as E-5.",
    pme: [
      {
        text: "Leadership and Management School (LAMS) — required for advancement to E-6 (it is an SWE-eligibility requirement at this grade).",
        tag: "REQ-PROMOTE",
      },
      { text: "EPQ/RPQ current for E-6 in rating.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Servicewide Examination cycle (annual May SWE) → Final Multiple ranking → advancement as rating cutoffs are published.",
      "Sea-time requirement: 12 months of sea time applies for the DC/EM/ET/MK ratings at this window (rating-specific — verify in the current SWE profile for your rating).",
    ],
    flags: [],
    source: CG_SRC_E,
  }),
  sheet("Coast Guard", "enlisted", "E-7", "Chief Petty Officer", "CPO", "promotion", {
    typical: NT_CG,
    minTis: "None published beyond the in-grade requirement below.",
    minTig: "24 months in grade as E-6.",
    pme: [
      {
        text: "Chief Petty Officer Academy (CPOACAD) — required for advancement to E-7, with a SEQUENCED rule: a member who scores above the SWE cutoff must attend CPOACAD before advancing, and the commanding officer SHALL WITHHOLD advancement until it is complete. It is both a gate and sequenced — not optional-after-the-fact.",
        tag: "REQ-PROMOTE",
      },
      { text: "EPQ/RPQ current for E-7 in rating.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "VERIFIED — there is NO E-7/E-8 advancement panel on active duty in the Coast Guard: advancement to CPO runs through the Servicewide Examination like E-5/E-6 (Final Multiple + rating cutoff), with CPOACAD sequenced as above. Do not import the Navy's Chief-board model.",
      "Sea-time requirement: 36 months applies for certain ratings at the E-7 window (verify the current SWE profile for your rating).",
    ],
    flags: [],
    source: CG_SRC_E,
  }),
  sheet("Coast Guard", "enlisted", "E-8", "Senior Chief Petty Officer", "SCPO", "promotion", {
    typical: NT_CG,
    minTis: "10 years minimum total service (with the TIG below).",
    minTig: "24 months in grade as E-7.",
    pme: [
      {
        text: "Chief Petty Officer Academy (CPOACAD) — the E-8 requirement carries CPOACAD as the legacy/backstop rule: the course completed for E-7 satisfies it; both grades' listings name the same single academy course (see the flag).",
        tag: "REQ-PROMOTE",
      },
      { text: "EPQ/RPQ current for E-8 in rating.", tag: "REQ-PROMOTE" },
    ],
    how: [
      "Servicewide Examination (Final Multiple + rating cutoff) — the same verified no-panel rule as E-7 (see the CPO sheet).",
      "Advancement to E-8 additionally requires the 10-year minimum TIS above.",
    ],
    flags: [
      "DOUBLE-LISTING RECONCILED: PSC material lists CPOACAD against both E-7 and E-8. It is ONE course — completing it for E-7 satisfies the E-8 listing; the E-8 line functions as a backstop for anyone advanced without it. Do not read it as two academy attendances.",
    ],
    source: CG_SRC_E,
  }),
  sheet("Coast Guard", "enlisted", "E-9", "Master Chief Petty Officer", "MCPO", "promotion", {
    typical: NT_CG,
    minTis: "12 years minimum total service (with the TIG below).",
    minTig: "24 months in grade as E-8.",
    pme: [
      {
        text: "Senior Enlisted Leadership Course (SELC) — required for advancement to E-9.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "The Master Chief Advancement Panel (MCAP) replaced the E-9 Servicewide Exam: eligible SCPOs' records go before the MCAP panel, which builds the E-9 advancement list — E-9 is the one Coast Guard enlisted grade that IS panel-selected.",
    ],
    other:
      "Fitness note (pack currency flag): the PRP Physical Fitness Test is recorded from 1 Jul 2026 — older “body-composition-only” descriptions of Coast Guard enlisted standards are outdated; advancement eligibility materials should be read with the current PRP in force.",
    flags: [],
    source: CG_SRC_E + " · PSC MCAP guidance",
  }),
  sheet("Coast Guard", "enlisted", "E-9 (special)", "Master Chief Petty Officer of the Coast Guard", "MCPOCG", "appointment", {
    typical: "Not published — a single-billet appointment.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Master Chief Petty Officer of the Coast Guard is the service's senior enlisted leader and advisor to the Commandant — a single billet filled by appointment from the senior MCPO corps, not by the MCAP panel.",
      "Senior special billets are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Coast Guard", "warrant", "W-2", "Chief Warrant Officer 2", "CWO2", "appointment", {
    typical: "Not published as a promotion timeline (appointment grade).",
    minTis:
      "WITHHELD — the pack does not print Coast Guard CWO appointment TIS/TIG floors: the figures live in the current PSC CWO Appointment Guide / program announcement (see Commissioning from the Ranks, entry 36). The one ceiling the research verified: applicants must not exceed 26 years of active duty service (PY25 board standard) — a ceiling, not a floor.",
    minTig: "WITHHELD — see the PSC CWO Appointment Guide (entry 36). No floor is printed rather than an unverified number.",
    pme: [
      {
        text: "Chief Warrant Officer Professional Development (CWOPD) course — must be completed within 18 months of appointment. It is EXPRESSLY NOT a promotion gate: CWOPD is an in-grade requirement, and PSC states it does not gate promotion to CWO3.",
        tag: "REQ-GRADE",
      },
    ],
    how: [
      "Appointment by a CWO appointment board convened under COMDTINST M1420.1 — enlisted members (and qualifying LDO-track applicants) apply by specialty; the board selects against specialty vacancies.",
      "The Coast Guard has NO W-1 grade — CWO2 is the entry warrant grade — and NO W-5 grade; the ladder ends at CWO4.",
      "The accession route itself is in Commissioning from the Ranks, entry 36.",
    ],
    flags: [
      "FIGURES WITHHELD BY DESIGN: Coast Guard CWO appointment eligibility floors are taken from the CURRENT PSC guide at application time; this sheet prints none rather than risk a stale number (the same discipline as entry 36).",
    ],
    source: CG_SRC_W,
  }),
  sheet("Coast Guard", "warrant", "W-3", "Chief Warrant Officer 3", "CWO3", "promotion", {
    typical: NT_CG + " The only zone evidence retrieved is a Reserve (IDPL) board cutoff — see the flag before treating ~3 years as the active-duty zone.",
    minTis: "None published that could be verified for the active-duty list.",
    minTig:
      "Zone ≈ 3 years in grade as CWO2 — EVIDENCE-LIMITED: the ~3-year zone is documented from a Reserve (IDPL) PY26 CWO board date-of-rank cutoff (15 Dec 2022). The Active Duty Promotion List (ADPL) cutoff was NOT retrieved in research. Treat ~3 years as the planning zone and verify against the current ADPL promotion plan.",
    pme: [
      {
        text: "CWOPD is NOT a promotion gate to CWO3 (PSC states this expressly) — it is the CWO2 in-grade requirement (see the CWO2 sheet).",
      },
    ],
    how: [
      "Promotion board: Coast Guard CWO promotion boards consider in-zone CWOs by specialty against vacancies (COMDTINST M1000.2C officer/warrant promotion chapters).",
    ],
    flags: [
      "⚠ CG CWO ZONE FLAG: the ~3-year in-grade zone for CWO3 (and CWO4) rests on a Reserve IDPL board DOR cutoff because the ADPL cutoff document was not retrieved in the research pass. Verify the current ADPL zone before relying on it.",
    ],
    source: CG_SRC_W + " · COMDTINST M1000.2C (promotion chapters)",
  }),
  sheet("Coast Guard", "warrant", "W-4", "Chief Warrant Officer 4", "CWO4", "promotion", {
    typical: NT_CG,
    minTis: "None published that could be verified for the active-duty list.",
    minTig:
      "Zone ≈ 3 years in grade as CWO3 — the same evidence limit as CWO3 (Reserve IDPL cutoff documented; ADPL cutoff not retrieved). Verify against the current ADPL promotion plan.",
    pme: [{ text: "No PME gate for CWO4 is published in the sources extracted.", tag: "EXPECTED" }],
    how: [
      "Promotion board by specialty against vacancies — CWO4 is the Coast Guard's senior warrant grade (there is no W-5).",
    ],
    flags: [
      "⚠ CG CWO ZONE FLAG: same as the CWO3 sheet — the ~3-year zone is IDPL-documented; the ADPL cutoff was not retrieved. Verify before reliance.",
    ],
    source: CG_SRC_W + " · COMDTINST M1000.2C (promotion chapters)",
  }),
  sheet("Coast Guard", "officers", "O-1", "Ensign", "ENS", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [{ text: "None gates ENS; accession training runs in grade.", tag: "REQ-GRADE" }],
    how: [
      "Commissioning (USCGA / OCS / direct commission) — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-2", "Lieutenant Junior Grade", "LTJG", "promotion", {
    typical:
      "OPAL normal timing (published planning figure): promotion to LTJG at about 18 MONTHS from the ENS date of rank — OPAL “normal timing,” labeled as such; it is not a statutory minimum.",
    minTis: "None — 14 U.S.C. §2113 lists NO time-in-grade requirement for LTJG (the statutory list begins at LT).",
    minTig: "None in §2113(a) for LTJG — the first statutory TIG in the Coast Guard list is 2 years as LTJG, for LT.",
    pme: [{ text: "No PME gate is published for LTJG.", tag: "EXPECTED" }],
    how: [
      "Non-competitive: LTJG promotion runs on OPAL normal timing when the officer is fully qualified — no selection board.",
      "TWO CLOCKS, KEPT SEPARATE (the pack's rule): §2113 STATUTORY ELIGIBILITY and OPAL NORMAL TIMING are different systems. This sheet prints both, labeled — never merge them into one figure.",
    ],
    flags: [
      "The Coast Guard is NOT under DOPMA: its officer promotion statute is 14 U.S.C. §2113, whose numbers differ from the DOPMA services. Do not import §619 figures into Coast Guard sheets.",
    ],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-3", "Lieutenant", "LT", "promotion", {
    typical:
      "OPAL normal timing: about 30 MONTHS from the LTJG date of rank — which compounds to roughly 48 months from the ENS date of rank. Labeled OPAL timing; the statutory floor (2 years) is the separate clock below.",
    minTis: "None published as a TIS floor.",
    minTig: "STATUTORY ELIGIBILITY (§2113): 2 years in grade as LTJG. OPAL NORMAL TIMING: ~30 months in grade.",
    pme: [{ text: "No PME gate is published for LT; mid-grade PME milestones build toward the LCDR board window.", tag: "EXPECTED" }],
    how: [
      "Non-competitive on the OPAL timing when fully qualified — LT is the last non-competitive Coast Guard officer grade on this path; LCDR and above are board-selected.",
    ],
    flags: [
      "TWO CLOCKS: §2113 eligibility (2 yr) vs. OPAL normal timing (~30 mo) differ BY DESIGN — eligibility is when an officer MAY be considered under the statute; OPAL timing is when promotions normally occur. Both print; neither replaces the other.",
    ],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-4", "Lieutenant Commander", "LCDR", "promotion", {
    typical: NT_CG + " No OPAL normal-timing figure for LCDR was published in the sources extracted — board-driven from here up.",
    minTis: "None published as a TIS floor.",
    minTig: "STATUTORY ELIGIBILITY (§2113): 3 years in grade as LT.",
    pme: [
      { text: "Mid-grade PME (service intermediate-level schooling or equivalent) is the published competitiveness expectation for the LCDR window; no statutory PME gate exists in §2113.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board (Promotion Board under the Coast Guard's officer promotion system): in-zone LTs compete; below-zone consideration is capped — the BZ cap for LCDR is 5% of selections.",
    ],
    flags: [],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-5", "Commander", "CDR", "promotion", {
    typical: NT_CG,
    minTis: "None published as a TIS floor.",
    minTig: "STATUTORY ELIGIBILITY (§2113): 4 years in grade as LCDR.",
    pme: [
      { text: "Senior-level PME milestones are the competitiveness expectation; no §2113 PME gate.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board; below-zone cap for CDR is 7.5% of selections (§2113 structure).",
    ],
    flags: [],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-6", "Captain", "CAPT", "promotion", {
    typical: NT_CG,
    minTis: "None published as a TIS floor.",
    minTig: "STATUTORY ELIGIBILITY (§2113): 4 years in grade as CDR.",
    pme: [
      { text: "Senior service college / Capstone-track development is the flag-competitiveness expectation; no §2113 PME gate.", tag: "EXPECTED" },
    ],
    how: [
      "Selection board; below-zone cap for CAPT is 10% of selections (§2113 structure).",
    ],
    flags: [],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-7", "Rear Admiral (Lower Half)", "RDML", "promotion", {
    typical: NT_CG + " (Billet-driven flag selection.)",
    minTis: "None published.",
    minTig: "STATUTORY ELIGIBILITY (§2113): 3 years in grade as CAPT (the last TIG in the §2113(a) list).",
    pme: [{ text: "No PME gate is published in §2113 for flag grades.", tag: "EXPECTED" }],
    how: [
      "Flag selection board → Presidential nomination → Senate confirmation; promotions fill authorized flag billets.",
    ],
    flags: [],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-8", "Rear Admiral", "RADM", "promotion", {
    typical: NT_CG + " (Billet-driven.)",
    minTis: "None published.",
    minTig:
      "NO TIG for RADM appears in §2113(a) — the statutory eligibility list ENDS at Captain (3 years for RDML). Any RADM timing rule lives in the current promotion-year corps plan, not the statute.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "Flag appointment process: nomination for a two-star billet, Presidential nomination and Senate confirmation.",
    ],
    flags: [
      "VERIFY: because §2113(a) stops at Captain, do not state a statutory RADM TIG — check the current promotion-year (PY) officer corps plan for any service-imposed timing.",
    ],
    source: CG_SRC_O,
  }),
  sheet("Coast Guard", "officers", "O-9", "Vice Admiral", "VADM", "appointment", {
    typical: NT_CG + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "VADM is a position appointment (e.g., the Vice Commandant of the Coast Guard serves at O-9): appointment by the President with Senate advice and consent to the designated billet. The grade is held with the position.",
    ],
    flags: [],
    source: "14 U.S.C. (Vice Commandant billet); rank pack §5",
  }),
  sheet("Coast Guard", "officers", "O-10", "Admiral", "ADM", "appointment", {
    typical: NT_CG + " (Position-driven.)",
    minTis: "None published.",
    minTig: "None published.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "ADM in the Coast Guard is ONE billet: the Commandant of the Coast Guard, appointed by the President with Senate advice and consent for a statutory term. It is not a promotion-ladder rung — there is no second Coast Guard four-star billet in the standing structure.",
    ],
    flags: [],
    source: "14 U.S.C. §302 (Commandant appointment); rank pack §5",
  }),
];

/* ============================= AIR FORCE =============================== */
/* Sources: DAFI 36-2502 Table 2.1 (enlisted) + Table 1.1 note;
 * DAFI 36-2501 (officer); AFPC published cycle statistics (selectee
 * averages, labeled by cycle); 10 U.S.C. §619 (DOPMA) + CRS R44496
 * DOPMA expectation table. Enlisted sheets carry the pack's F2
 * Table 2.1 re-verify flag. */

const AF_SRC_E =
  "DAFI 36-2502 Table 2.1 · AFPC promotion cycle statistics (labeled by cycle)";
const AF_SRC_W =
  "AFGM2026-36-2033 (Air Force warrant program, NEW — void one year after 4 Feb 2026) · AF.mil / PSDM reporting";
const AF_SRC_O =
  "DAFI 36-2501 · 10 U.S.C. §619 (DOPMA) · CRS R44496 DOPMA expectations (1980, labeled)";

const AF_SHEETS: RankSheet[] = [
  sheet("Air Force", "enlisted", "E-1", "Airman Basic", "AB", "entry", {
    typical: "Entry grade; no promotion TO AB exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: ["AB is the entry grade on enlistment — there is no promotion to it."],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-2", "Airman", "Amn", "promotion", {
    typical: "6 months TIG is the published promotion point; no AFPC average is published for E-2.",
    minTis: "None published separately — the TIG controls.",
    minTig: "6 months in grade as AB (DAFI 36-2502 Table 2.1).",
    pme: [{ text: "None." }],
    how: [
      "Fully qualified promotion: Amn promotion is automatic on meeting TIG when the Airman is fully qualified (not withheld by the commander) — no testing, no board.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-3", "Airman First Class", "A1C", "promotion", {
    typical: "10 months TIG is the published promotion point; no AFPC average is published for E-3.",
    minTis: "None published separately — the TIG controls.",
    minTig: "10 months in grade as Amn (Table 2.1). Six-year enlistees have a separate tech-training-based rule (promotion tied to completion of initial skills training under the 6-year enlistee program — verify the current Table 2.1 note).",
    pme: [{ text: "None." }],
    how: ["Fully qualified promotion on TIG when qualified — no testing or board."],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-4", "Senior Airman", "SrA", "promotion", {
    typical: "The published eligibility point is 36 months TIS / 20 months TIG (or 28 months TIG) — the Table 2.1 rule itself; no separate AFPC “average SrA” figure is published for the current cycle in the sources extracted.",
    minTis: "36 months time in service.",
    minTig: "20 months in grade as A1C — OR 28 months TIG, whichever comes first (Table 2.1's dual rule). Plus: 1 year from the TAFMSD-based computation per Table 2.1 notes, and skill level 3 awarded.",
    pme: [{ text: "No EPME gate exists for SrA — Airman Leadership School gates SSgt, not SrA." }],
    how: [
      "Fully qualified promotion when both clocks and the skill level are met — no WAPS testing for SrA.",
      "Below-the-Zone (BTZ): outstanding A1Cs may promote 6 months early; BTZ is quota-limited (15% of the eligible population) and boarded at unit/wing level.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-5", "Staff Sergeant", "SSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 25E5 cycle's selectee averages were 5.27 years TIS and 2.73 years TIG, with a 33.81% selection rate — AFPC's own published cycle statistics for the 25E5 cycle, NOT a standing average. Cycle figures change every cycle.",
    minTis: "3 years (Table 2.1).",
    minTig: "6 months in grade as SrA (Table 2.1). Plus skill level 5 awarded.",
    pme: [
      {
        text: "Airman Leadership School (ALS), IN-RESIDENCE — REQUIRED TO SEW ON SSgt: promotion is WITHHELD until ALS is complete (an Airman selected for SSgt who has not completed ALS does not sew on). One published exception: a SSgt reinstating after a break in service is handled under the reinstatement rule, not the ALS withholding rule.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "WAPS (Weighted Airman Promotion System): SKT (Specialty Knowledge Test, 100 pts) + PFE (Promotion Fitness Exam, 100) + Decorations (25) + Promotion Recommendation Statement points from the promotion-eligible evaluation (PRS, up to 285) = maximum 510 points. There are NO TIG/TIS points in the current WAPS formula.",
      "Cutoff scores are set per AFSC against quotas each cycle.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-6", "Technical Sergeant", "TSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 26E6 cycle's selectee averages were 10.15 years TIS and 5.14 years TIG, with a 26.59% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "5 years (Table 2.1).",
    minTig: "23 months in grade as SSgt (Table 2.1). Plus skill level 7 — the 7-level must be AWARDED before promotion to TSgt.",
    pme: [
      {
        text: "NO EPME gate for TSgt: NCO Academy completion gates E-7 (MSgt), not E-6. Do not carry the SSgt ALS rule upward — Table 2.1 publishes no EPME requirement for TSgt.",
      },
    ],
    how: [
      "WAPS testing + FMS-style points as at SSgt (SKT/PFE/decorations/PRS, max 510), cutoff by AFSC against quotas.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-7", "Master Sergeant", "MSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled, OLDER CYCLE — flagged as such by the pack): the 22E7 cycle's selectee averages were 14.39 years TIS and 4.16 years TIG, with a 14.8% selection rate. The pack prints this cycle because it is the labeled figure the sources carried; treat it as dated, not current.",
    minTis: "8 years (Table 2.1).",
    minTig: "24 months in grade as TSgt (Table 2.1).",
    pme: [
      {
        text: "NCO Academy (NCOA), IN-RESIDENCE — REQUIRED for promotion to MSgt (sew-on is withheld without it, mirroring the ALS rule one grade down).",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Central board ONLY: MSgt is the first board-scored enlisted grade — records are scored by a central promotion board (board score 270–450 in 15-point increments); there is NO WAPS testing for E-7.",
      "A degree is NOT required for MSgt (the degree-by-PECD rule begins at SMSgt). 2-year retainability applies.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-8", "Senior Master Sergeant", "SMSgt", "promotion", {
    typical:
      "No single standing figure is published: AFPC publishes per-cycle selectee statistics, and the pack retrieved no single labeled SMSgt cycle average to print. " + NT_AF,
    minTis: "11 years TAFMSD — PLUS 8 years cumulative in the enlisted TIS column (Table 2.1 carries both clocks; both print).",
    minTig: "20 months in grade as MSgt (Table 2.1).",
    pme: [
      {
        text: "Senior NCO Academy (SNCOA), IN-RESIDENCE — REQUIRED for promotion to SMSgt.",
        tag: "REQ-PROMOTE",
      },
    ],
    how: [
      "Central board only (board score 270–450); no testing.",
      "DEGREE RULE BEGINS HERE: an associate degree (CCAF or equivalent) must be complete by the Promotion Eligibility Cutoff Date (PECD) for SMSgt eligibility.",
    ],
    flags: [DAF_T21_FLAG],
    source: AF_SRC_E,
  }),
  sheet("Air Force", "enlisted", "E-9", "Chief Master Sergeant", "CMSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 21E9 cycle's selectee averages were 20.82 years TIS and 3.08 years TIG, with an 18.19% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "14 years TAFMSD — PLUS 10 years cumulative in the enlisted TIS column (Table 2.1).",
    minTig: "21 months in grade as SMSgt (Table 2.1). Plus skill level 9 awarded.",
    pme: [
      {
        text: "NO EPME gate TO CMSgt: DAFI 36-2502 Table 1.1 lists the EPME requirement for E-9 as N/A — SNCOA gated SMSgt; nothing gates CMSgt itself.",
      },
      {
        text: "Chief Leadership Course (CLC) — required IN grade: a new CMSgt must complete CLC within 1 year TIG after promotion. It is a post-promotion grade requirement, not a gate.",
        tag: "REQ-GRADE",
      },
    ],
    how: [
      "Central board only (board score 270–450); no testing. Degree (associate or higher) complete by PECD; 3-year retainability applies.",
    ],
    flags: [
      DAF_T21_FLAG,
      "SOURCE CONFLICT (pack flag F5): secondary guides conflict on whether CLC gates CMSgt. The DAFI table controls — Table 1.1 marks E-9 EPME “N/A” and CLC is an in-grade (within 1 year after promotion) requirement. Print the DAFI position.",
    ],
    source: AF_SRC_E + " · DAFI 36-2502 Table 1.1",
  }),
  sheet("Air Force", "enlisted", "E-9 (special)", "Chief Master Sergeant of the Air Force", "CMSAF", "appointment", {
    typical: "Not published — a single-billet appointment.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Chief Master Sergeant of the Air Force is the Air Force's senior enlisted leader and advisor to the Chief of Staff of the Air Force — a single billet filled by appointment from the senior CMSgt corps, not by a promotion board.",
      "Senior special billets are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Air Force", "warrant", "W-1", "Warrant Officer 1", "WO1", "appointment", {
    typical: "Not published — the program's first cohorts are still forming (see the NEW/EVOLVING verdict in Commissioning from the Ranks, entry 35).",
    minTis:
      "First-cohort eligibility as publicly reported (AF.mil / PSDM): at least Staff Sergeant with at least 1 year of Air Force service in the qualifying fields — cohort criteria are set per PSDM and evolve; verify the current PSDM before applying.",
    minTig: "— (entry warrant grade)",
    pme: [
      {
        text: "Warrant Officer Training School (WOTS) — required to appoint (the warrant accession school).",
        tag: "REQUIRED TO APPOINT",
      },
    ],
    how: [
      "Appointment by warrant through the Air Force warrant officer program re-established by AFGM2026-36-2033 — currently in TWO fields only: 17W (Cyber Effects) and 17Y (Cyber Enlisted → warrant track per the AFGM's field structure).",
      "The accession route itself is in Commissioning from the Ranks, entry 35 — which carries the program's NEW/EVOLVING verdict and the AFGM void date (void one year after 4 Feb 2026).",
    ],
    flags: [
      "⚠ NEW / EVOLVING PROGRAM: AFGM2026-36-2033 re-established Air Force warrant officers in 2026 and is VOID one year after 4 Feb 2026 unless incorporated into a permanent publication. Eligibility details are PSDM-set and changing — verify the current PSDM/AFGM successor before relying on any figure here.",
      "STRUCTURE DRIFT: AFGM2026 publishes a W-1 through W-5 structure; 2024-era coverage described only W-1–W-3. The AFGM structure (W-1–W-5) is what these sheets follow.",
    ],
    source: AF_SRC_W,
  }),
  sheet("Air Force", "warrant", "W-2", "Chief Warrant Officer 2", "CW2", "promotion", {
    typical: NT_AF + " The warrant program is new; no promotion timing is published.",
    minTis: "NOT PUBLISHED in the sources searched — the AFGM/PSDM material retrieved publishes accession criteria, not W-2 promotion clocks. Nothing is printed rather than an invented figure.",
    minTig: "NOT PUBLISHED in the sources searched (see Minimum TIS).",
    pme: [{ text: "No PME rule for CWO2 promotion is published in the sources searched.", tag: "EXPECTED" }],
    how: [
      "NOT PUBLISHED: whether Air Force warrant promotion to CWO2 is board-selected or fully-qualified is not stated in the sources retrieved — do not assume either mechanism. Check the current AFGM2026 successor publication / PSDM.",
    ],
    flags: [
      "⚠ NEW PROGRAM GAP: Air Force warrant promotion mechanics (TIG, board vs. AFQ) were not published in the sources searched during research. This sheet states that plainly rather than borrowing another service's warrant rules.",
    ],
    source: AF_SRC_W,
  }),
  sheet("Air Force", "warrant", "W-3", "Chief Warrant Officer 3", "CW3", "promotion", {
    typical: NT_AF,
    minTis: "NOT PUBLISHED in the sources searched (see the CWO2 sheet).",
    minTig: "NOT PUBLISHED in the sources searched.",
    pme: [{ text: "No PME rule for CWO3 promotion is published in the sources searched.", tag: "EXPECTED" }],
    how: ["NOT PUBLISHED in the sources searched — verify in the current AFGM successor publication / PSDM. No mechanism is assumed."],
    flags: [
      "⚠ NEW PROGRAM GAP: same as the CWO2 sheet — Air Force warrant promotion mechanics are not yet published in retrievable sources.",
    ],
    source: AF_SRC_W,
  }),
  sheet("Air Force", "warrant", "W-4", "Chief Warrant Officer 4", "CW4", "promotion", {
    typical: NT_AF,
    minTis: "NOT PUBLISHED in the sources searched (see the CWO2 sheet).",
    minTig: "NOT PUBLISHED in the sources searched.",
    pme: [{ text: "No PME rule for CWO4 promotion is published in the sources searched.", tag: "EXPECTED" }],
    how: ["NOT PUBLISHED in the sources searched — verify in the current AFGM successor publication / PSDM. No mechanism is assumed."],
    flags: [
      "⚠ NEW PROGRAM GAP: same as the CWO2 sheet.",
    ],
    source: AF_SRC_W,
  }),
  sheet("Air Force", "warrant", "W-5", "Chief Warrant Officer 5", "CW5", "promotion", {
    typical: NT_AF,
    minTis: "NOT PUBLISHED in the sources searched (see the CWO2 sheet).",
    minTig: "NOT PUBLISHED in the sources searched.",
    pme: [{ text: "No PME rule for CWO5 promotion is published in the sources searched.", tag: "EXPECTED" }],
    how: ["NOT PUBLISHED in the sources searched — verify in the current AFGM successor publication / PSDM. No mechanism is assumed."],
    flags: [
      "⚠ NEW PROGRAM GAP: same as the CWO2 sheet. The W-5 grade EXISTS in the AFGM2026 structure — its promotion mechanics simply are not published yet in retrievable sources.",
    ],
    source: AF_SRC_W,
  }),
  sheet("Air Force", "officers", "O-1", "Second Lieutenant", "2d Lt", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [{ text: "Accession/primary skills training runs in grade; no PME gates 2LT.", tag: "REQ-GRADE" }],
    how: [
      "Commissioning (USAFA / AFROTC / OTS / direct commission) — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-2", "First Lieutenant", "1st Lt", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled): the DOPMA system expectation for O-2 is promotion at about 2 YEARS of service — a 1980 DOPMA design expectation published by CRS (R44496), NOT a current Air Force average. The statutory minimum (18 months TIG) is the floor below.",
    minTis: "None published — DOPMA flow is zone-managed by year group.",
    minTig: "18 months as 2LT (10 U.S.C. §619).",
    pme: [{ text: "No developmental-education gate is published for 1LT in DAFI 36-2501 (see the flag on the O-4 sheet).", tag: "EXPECTED" }],
    how: [
      "Promotion under the DOPMA board system (DAFI 36-2501): 1LT promotion is effectively fully-qualified in practice, but it is NOT labeled “automatic” in the governing sources — officers are considered and promoted when qualified under the DOPMA framework.",
    ],
    flags: [
      "Do not call O-2 (or O-3) “automatic”: the pack's sources do not use that word for DAF officer promotions — fully-qualified consideration is the accurate description.",
    ],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-3", "Captain", "Capt", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled): O-3 at about 4 YEARS of service with ~95% opportunity — the 1980 DOPMA design expectation (CRS R44496), not a current average.",
    minTis: "None published as a floor — zone-managed.",
    minTig: "2 years as 1LT (10 U.S.C. §619).",
    pme: [
      { text: "Squadron Officer School (SOS) — the Capt-level developmental education; EXPECTED for competitiveness. DAFI 36-2501 publishes NO hard DE gate for Regular Air Force promotion (see the O-4 flag).", tag: "EXPECTED" },
    ],
    how: ["DOPMA promotion board system (DAFI 36-2501): in-zone Captains are considered by the promotion board process for their competitive category/LSF line."],
    flags: [],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-4", "Major", "Maj", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled): O-4 at 9–11 YEARS of service with ~80% opportunity — the DOPMA design expectation (CRS R44496), not a current average.",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as CPT (10 U.S.C. §619).",
    pme: [
      {
        text: "Air Command and Staff College (ACSC) — the Maj-level intermediate DE; EXPECTED for competitiveness to LTC. It is NOT a hard promotion gate for Regular Air Force officers in DAFI 36-2501.",
        tag: "EXPECTED",
      },
    ],
    how: [
      "Central promotion board by competitive category (Line of the Air Force categories), best-qualified against authorized strength; Senate confirmation applies at MAJ and above under the DOPMA framework.",
    ],
    flags: [
      "⚠ NO HARD DE GATE (pack flag F9): DAFI 36-2501 publishes NO hard developmental-education requirement for Regular Air Force officer promotion. The Air National Guard's DE rules (which DO gate) do NOT transfer to the Regular Air Force — do not import them.",
      "⚠ CRS COLUMN TRAP (pack flag F4): the CRS R44496 DOPMA table's “expectation” column is sometimes misread as a 6-year minimum for field grades. The STATUTORY minimums are the §619 TIG figures on these sheets (3 years for O-4/O-5/O-6) — the CRS column is design expectation, not law.",
    ],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-5", "Lieutenant Colonel", "Lt Col", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled): O-5 at 15–17 YEARS of service with ~70% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as MAJ (10 U.S.C. §619).",
    pme: [
      { text: "ACSC complete is the in-grade expectation; Air War College selection builds flag competitiveness. No hard DE gate (see the O-4 flag).", tag: "EXPECTED" },
    ],
    how: ["Central promotion board by competitive category; Senate confirmation. Battalion-equivalent command (squadron command) is a separate screened process."],
    flags: [],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-6", "Colonel", "Col", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled): O-6 at 21–23 YEARS of service with ~50% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as LTC (10 U.S.C. §619).",
    pme: [
      { text: "Air War College (AWC) — the senior DE; EXPECTED for general-officer competitiveness, not a hard gate to COL.", tag: "EXPECTED" },
    ],
    how: ["Central promotion board by competitive category; Senate confirmation. COL is a DOPMA control grade — selections cannot exceed authorized strength."],
    flags: [],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-7", "Brigadier General", "Brig Gen", "promotion", {
    typical: NT_AF + " Flag flow is billet-driven.",
    minTis: "None published.",
    minTig: "1 year as COL (10 U.S.C. §619).",
    pme: [{ text: "AWC/senior DE complete is the standing expectation; no hard DE gate (see the O-4 flag).", tag: "EXPECTED" }],
    how: [
      "General officer promotion board → Presidential nomination → Senate confirmation; promotions fill authorized flag billets.",
      "Joint duty: §619a requires joint qualification (JQO — full joint tour) for appointment to BG, waivable case-by-case.",
    ],
    flags: [],
    source: AF_SRC_O + " · 10 U.S.C. §619a",
  }),
  sheet("Air Force", "officers", "O-8", "Major General", "Maj Gen", "promotion", {
    typical: NT_AF + " (Billet-driven.)",
    minTis: "None published.",
    minTig: "1 year as BG (10 U.S.C. §619).",
    pme: [{ text: "No additional DE gate is published.", tag: "EXPECTED" }],
    how: [
      "General officer board/nomination process with Senate confirmation; MG is normally the highest PERMANENT grade — O-9/O-10 are position appointments.",
    ],
    flags: [],
    source: AF_SRC_O,
  }),
  sheet("Air Force", "officers", "O-9", "Lieutenant General", "Lt Gen", "appointment", {
    typical: NT_AF + " (Position-driven.)",
    minTis: "None published.",
    minTig: "§619 sets NO TIG minimum for O-9 — three-star grades are position appointments, outside the TIG table.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "LTG is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated position of importance and responsibility. The grade is held while in the position.",
    ],
    flags: [],
    source: "10 U.S.C. §§601, 619",
  }),
  sheet("Air Force", "officers", "O-10", "General", "Gen", "appointment", {
    typical: NT_AF + " (Position-driven.)",
    minTis: "None published.",
    minTig: "§619 sets NO TIG minimum for O-10 — position appointment.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "GEN is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated four-star position (e.g., Chief of Staff of the Air Force, a combatant command). The grade is held while in the position.",
    ],
    flags: [],
    source: "10 U.S.C. §§601, 619",
  }),
];

/* ============================ SPACE FORCE ============================== */
/* Sources: SPFI 36-2502 (11 Sep 2024) enlisted promotion tables;
 * AFPC Space Force promotion statistics (2026 Mega Board + CY26
 * cycles, labeled); DAFI 36-2501 (shared DAF officer system — Space
 * Force officers promote under DAF boards in LSF categories).
 * ⚠ F1: the FY24 NDAA removed the Space Force from the 10 U.S.C.
 * §619(a) text; DAFI 36-2501 still governs DAF boards including
 * Guardians — every SF officer sheet carries that flag. */

const SF_SRC_E =
  "SPFI 36-2502 (11 Sep 2024) · AFPC Space Force promotion statistics (cycle-labeled)";
const SF_SRC_O =
  "DAFI 36-2501 (shared DAF officer system) · 10 U.S.C. §619 framework — see the F1 flag on every sheet";

const SF_F1_FLAG =
  "⚠ STATUTE FLAG (pack flag F1): the FY24 NDAA removed the Space Force from the text of 10 U.S.C. §619(a). DAFI 36-2501 still governs Department of the Air Force promotion boards INCLUDING Guardians, and the TIG figures here are the DAF board figures — but verify current USSF Personnel Management Act guidance before citing §619 as Space Force law.";

const SF_SHEETS: RankSheet[] = [
  sheet("Space Force", "enlisted", "E-1", "Specialist 1", "Spc1", "entry", {
    typical: "Entry grade; no promotion TO Spc1 exists.",
    minTis: "— (entry grade)",
    minTig: "— (entry grade)",
    pme: [{ text: "None." }],
    how: ["Spc1 is the entry grade on enlistment — there is no promotion to it."],
    flags: [],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-2", "Specialist 2", "Spc2", "promotion", {
    typical: "6 months TIG is the published promotion point (SPFI 36-2502).",
    minTis: "None published separately — the TIG controls.",
    minTig: "6 months in grade as Spc1 (SPFI 36-2502).",
    pme: [{ text: "None." }],
    how: ["Fully qualified promotion on TIG when qualified — no testing, no board."],
    flags: [],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-3", "Specialist 3", "Spc3", "promotion", {
    typical: "10 months TIG is the published promotion point (SPFI 36-2502).",
    minTis: "None published separately — the TIG controls.",
    minTig: "10 months in grade as Spc2 (SPFI 36-2502).",
    pme: [{ text: "None." }],
    how: ["Fully qualified promotion on TIG when qualified — no testing or board."],
    flags: [],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-4", "Specialist 4", "Spc4", "promotion", {
    typical: "The published eligibility point is 36 months TIS / 20 months TIG (or 28 months TIG) — the SPFI rule itself.",
    minTis: "36 months time in service.",
    minTig: "20 months in grade as Spc3 — OR 28 months TIG, whichever comes first. Plus skill level 3 awarded.",
    pme: [{ text: "No EPME gate exists for Spc4." }],
    how: [
      "Fully qualified promotion when both clocks and the skill level are met — no testing for Spc4.",
      "Below-the-Zone: outstanding Spc3s may promote early under the BTZ program (boarded, quota-limited), mirroring the DAF model.",
    ],
    flags: [],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-5", "Sergeant", "Sgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 2026 Mega Board's Sergeant selectee averages were 1.07 years TIG and 3.52 years TIS, with a 95.52% selection rate — AFPC's published Space Force cycle statistics, NOT a standing average.",
    minTis: "NO TIS MINIMUM — SPFI 36-2502 publishes no time-in-service floor for Sergeant (see the flag: do NOT copy the Air Force's 3-year TIS).",
    minTig: "6 months in grade as Spc4 (SPFI 36-2502). Plus skill level 5 awarded.",
    pme: [
      {
        text: "EPME (Airman Leadership School track) is MANDATORY for Guardians but is NOT a promotion gate in the Space Force — the opposite construction from the Air Force's ALS sew-on rule (pack flag F7). Completion is tracked as a service requirement; it does not withhold a Sergeant promotion.",
      },
    ],
    how: [
      "CENTRAL BOARD ONLY: Sergeant promotions are decided by a central promotion board scoring records (board score 270–450) — there is NO WAPS testing in the Space Force at any grade.",
      "The very high 2026 selection rate reflects the announced fully-qualified transition for the young force (see the flag) — do not read 95.52% as a permanent rate.",
    ],
    flags: [
      "⚠ NO TIS FLOOR (pack flag F6): SPFI 36-2502's Sergeant row carries NO TIS minimum — a TAFMSD-based note (Note 12) was REMOVED from the Space Force table. The Air Force's 3-year TIS for SSgt does NOT apply to Guardians. Do not copy it across.",
      "⚠ TRANSITION REPORTING (pack flag F10): the announced move to fully-qualified Sergeant promotion is REPORTING about the 2026 cycle, not SPFI regulatory text — the board mechanism in SPFI 36-2502 is what this sheet states; the transition explains the cycle's selection rate only.",
      "⚠ EPME DIFFERENCE (pack flag F7): Space Force EPME is mandatory-but-not-gating; Air Force EPME (ALS/NCOA/SNCOA) WITHHOLDS sew-on. The two services' rules are opposite here — do not blend them.",
    ],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-6", "Technical Sergeant", "TSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 2026 cycle's TSgt selectee averages were 3.63 years TIG and 8.22 years TIS, with a 74.69% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "None published in SPFI 36-2502 for TSgt beyond the TIG below.",
    minTig: "24 months in grade as Sgt — NOTE: the Air Force figure is 23 months. The Space Force's 24 is its own SPFI number; do not “correct” it to the AF figure.",
    pme: [
      { text: "EPME remains mandatory-but-not-gating in the Space Force (see the Sgt sheet, flag F7). Skill level 7 must be awarded before promotion to TSgt.", tag: "REQ-GRADE" },
    ],
    how: ["Central board only (board score 270–450); no testing at any Space Force enlisted grade."],
    flags: [
      "TIG DIFFERS FROM THE AIR FORCE: TSgt TIG is 24 months in SPFI 36-2502 (AF: 23). The one-month difference is real and deliberate in the sources — print 24.",
    ],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-7", "Master Sergeant", "MSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the 2026 cycle's MSgt selectee averages were 4.50 years TIG and 12.99 years TIS, with a 36.98% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "None published in SPFI 36-2502 beyond the TIG below.",
    minTig: "25 months in grade as TSgt — NOTE: the Air Force figure is 24 months. SPFI publishes 25; print 25.",
    pme: [
      { text: "EPME mandatory-but-not-gating (flag F7, Sgt sheet). No degree requirement is published for Space Force MSgt in SPFI 36-2502 (the degree-by-PECD rule begins at SMSgt).", tag: "EXPECTED" },
    ],
    how: ["Central board only (board score 270–450); no testing."],
    flags: [
      "TIG DIFFERS FROM THE AIR FORCE: MSgt TIG is 25 months in SPFI 36-2502 (AF: 24). Print 25.",
    ],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-8", "Senior Master Sergeant", "SMSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the CY26 cycle's SMSgt selectee averages were 4.53 years TIG and 16.57 years TIS, with a 14.14% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "None published in SPFI 36-2502 beyond the TIG below.",
    minTig: "17 months in grade as MSgt — NOTE: the Air Force figure is 20 months. SPFI publishes 17; print 17.",
    pme: [
      { text: "EPME mandatory-but-not-gating (flag F7, Sgt sheet).", tag: "EXPECTED" },
    ],
    how: [
      "Central board only (board score 270–450); no testing.",
      "DEGREE RULE: an associate degree (or equivalent) must be complete by the Promotion Eligibility Cutoff Date (PECD) for SMSgt, mirroring the DAF senior-grade rule.",
    ],
    flags: [
      "TIG DIFFERS FROM THE AIR FORCE: SMSgt TIG is 17 months in SPFI 36-2502 (AF: 20). Print 17.",
    ],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-9", "Chief Master Sergeant", "CMSgt", "promotion", {
    typical:
      "AFPC PUBLISHED CYCLE FIGURE (labeled): the CY26 cycle's CMSgt selectee averages were 3.99 years TIG and 19.58 years TIS, with a 21.67% selection rate — AFPC cycle statistics, not a standing average.",
    minTis: "None published in SPFI 36-2502 beyond the TIG below.",
    minTig: "24 months in grade as SMSgt — NOTE: the Air Force figure is 21 months. SPFI publishes 24; print 24. Plus skill level 9 awarded.",
    pme: [
      { text: "EPME mandatory-but-not-gating (flag F7, Sgt sheet). Degree complete by PECD, as at SMSgt.", tag: "EXPECTED" },
    ],
    how: ["Central board only (board score 270–450); no testing. CMSgt is the Space Force's senior enlisted grade below the CMSSF billet."],
    flags: [
      "TIG DIFFERS FROM THE AIR FORCE: CMSgt TIG is 24 months in SPFI 36-2502 (AF: 21). Print 24.",
    ],
    source: SF_SRC_E,
  }),
  sheet("Space Force", "enlisted", "E-9 (special)", "Chief Master Sergeant of the Space Force", "CMSSF", "appointment", {
    typical: "Not published — a single-billet appointment.",
    minTis: "None published — appointment to the position.",
    minTig: "None published — appointment to the position.",
    pme: [{ text: "None published as a gate for the appointment." }],
    how: [
      "The Chief Master Sergeant of the Space Force is the Space Force's senior enlisted leader and advisor to the Chief of Space Operations — a single billet filled by appointment from the senior CMSgt corps, not by a promotion board.",
      "Senior special billets are appointments to positions, not board promotions: their records state the appointment mechanism and print no zones.",
    ],
    flags: [],
    source: "Rank pack §1 (senior special billets) — appointment mechanism",
  }),
  sheet("Space Force", "officers", "O-1", "Second Lieutenant", "2nd Lt", "entry", {
    typical: "Entry grade.",
    minTis: "— (commissioning grade)",
    minTig: "— (commissioning grade)",
    pme: [{ text: "Accession/primary skills training runs in grade.", tag: "REQ-GRADE" }],
    how: [
      "Commissioning (USAFA / AFROTC / OTS / direct commission, incl. inter-service transfer into the Space Force) — not a promotion.",
      "The serving-member routes into a commission are in Commissioning from the Ranks.",
    ],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-2", "First Lieutenant", "1st Lt", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled, shared DAF system): O-2 at about 2 YEARS of service — the DOPMA design expectation (CRS R44496), not a Space Force average.",
    minTis: "None published — zone-managed by the DAF board system.",
    minTig: "18 months as 2LT (the DAF board figure under DAFI 36-2501 / §619 framework — see the F1 flag).",
    pme: [{ text: "No developmental-education gate is published for 1LT in DAFI 36-2501.", tag: "EXPECTED" }],
    how: [
      "Guardians promote through DEPARTMENT OF THE AIR FORCE boards under DAFI 36-2501, in Line of the Space Force (LSF) competitive categories — the shared DAF officer system, not a separate USSF board structure in the governing publication.",
    ],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-3", "Captain", "Capt", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled, shared DAF system): O-3 at about 4 YEARS of service with ~95% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "2 years as 1LT (DAF board figure — see the F1 flag).",
    pme: [
      { text: "Squadron Officer School (SOS) — the Capt-level DE in the shared DAF system; EXPECTED for competitiveness. DAFI 36-2501 publishes NO hard DE gate for promotion (see the Air Force O-4 sheet's F9 flag).", tag: "EXPECTED" },
    ],
    how: ["DAF promotion boards by LSF competitive category (DAFI 36-2501)."],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-4", "Major", "Maj", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled, shared DAF system): O-4 at 9–11 YEARS of service with ~80% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as CPT (DAF board figure — see the F1 flag).",
    pme: [
      { text: "Air Command and Staff College (ACSC) — the intermediate DE in the shared DAF system; EXPECTED, not a hard gate (F9).", tag: "EXPECTED" },
    ],
    how: ["DAF central promotion board by LSF category; Senate confirmation at MAJ and above under the DOPMA framework."],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-5", "Lieutenant Colonel", "Lt Col", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled, shared DAF system): O-5 at 15–17 YEARS of service with ~70% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as MAJ (DAF board figure — see the F1 flag).",
    pme: [{ text: "ACSC complete is the in-grade expectation in the shared DAF system; no hard DE gate (F9).", tag: "EXPECTED" }],
    how: ["DAF central promotion board by LSF category; Senate confirmation."],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-6", "Colonel", "Col", "promotion", {
    typical:
      "DOPMA EXPECTATION (labeled, shared DAF system): O-6 at 21–23 YEARS of service with ~50% opportunity — DOPMA design expectation (CRS R44496).",
    minTis: "None published as a floor — zone-managed.",
    minTig: "3 years as LTC (DAF board figure — see the F1 flag).",
    pme: [{ text: "Air War College (AWC) — the senior DE; EXPECTED for general-officer competitiveness, not a hard gate.", tag: "EXPECTED" }],
    how: ["DAF central promotion board by LSF category; Senate confirmation. COL is a control grade in the DAF system."],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-7", "Brigadier General", "Brig Gen", "promotion", {
    typical: NT_SF + " Flag flow is billet-driven.",
    minTis: "None published.",
    minTig: "1 year as COL (DAF board figure — see the F1 flag).",
    pme: [{ text: "AWC/senior DE complete is the standing expectation; no hard DE gate (F9).", tag: "EXPECTED" }],
    how: [
      "General officer promotion board → Presidential nomination → Senate confirmation; promotions fill authorized flag billets.",
      "Joint qualification (JQO) applies to general-officer appointment under the joint officer framework, waivable case-by-case.",
    ],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-8", "Major General", "Maj Gen", "promotion", {
    typical: NT_SF + " (Billet-driven.)",
    minTis: "None published.",
    minTig: "1 year as BG (DAF board figure — see the F1 flag).",
    pme: [{ text: "No additional DE gate is published.", tag: "EXPECTED" }],
    how: [
      "General officer board/nomination process with Senate confirmation; MG is normally the highest PERMANENT grade — O-9/O-10 are position appointments.",
    ],
    flags: [SF_F1_FLAG],
    source: SF_SRC_O,
  }),
  sheet("Space Force", "officers", "O-9", "Lieutenant General", "Lt Gen", "appointment", {
    typical: NT_SF + " (Position-driven.)",
    minTis: "None published.",
    minTig: "No TIG minimum applies — three-star grades are position appointments, outside the §619-style TIG table.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "LTG is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated position of importance and responsibility. The grade is held while in the position.",
    ],
    flags: [SF_F1_FLAG],
    source: "10 U.S.C. §601; DAFI 36-2501 (scope)",
  }),
  sheet("Space Force", "officers", "O-10", "General", "Gen", "appointment", {
    typical: NT_SF + " (Position-driven.)",
    minTis: "None published.",
    minTig: "No TIG minimum applies — position appointment.",
    pme: [{ text: "None published as a gate." }],
    how: [
      "GEN is NOT a board promotion: appointment by the President, with Senate advice and consent, under 10 U.S.C. §601, to a designated four-star position (e.g., Chief of Space Operations, a combatant command). The grade is held while in the position.",
    ],
    flags: [SF_F1_FLAG],
    source: "10 U.S.C. §601; DAFI 36-2501 (scope)",
  }),
];

/* ============================== EXPORTS ================================ */

export const RANK_SHEETS: RankSheet[] = [
  ...ARMY_SHEETS,
  ...USMC_SHEETS,
  ...NAVY_SHEETS,
  ...CG_SHEETS,
  ...AF_SHEETS,
  ...SF_SHEETS,
];

export const RANK_SHEET_MAP: ReadonlyMap<string, RankSheet> = new Map(
  RANK_SHEETS.map((s) => [s.key, s]),
);

export function sheetFor(
  branch: string,
  category: string,
  grade: string,
  abbr: string,
): RankSheet | undefined {
  return RANK_SHEET_MAP.get(rankSheetKey(branch, category, grade, abbr));
}

/** The sheet's Binder one-liner (summary snapshot for CardTools). */
export function sheetSummary(s: RankSheet): string {
  return `Typical: ${s.typical} Min TIS: ${s.minTis} Min TIG: ${s.minTig}`;
}
