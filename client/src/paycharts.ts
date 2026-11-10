// Pay Charts & Rates — transcribed from the researched pack
// (~/workspace/military-app/paycharts/paycharts.md, researched
// Nov 9, 2026). The pack is the content source of truth. The FULL
// 2026 DFAS monthly basic pay tables live in paydata.ts (generated
// by direct transcription of the pack's Part 1 tables: enlisted /
// warrant / officer incl. O-1E/2E/3E, all 22 YOS columns, effective
// Jan 1, 2026, 3.8% raise). ALLOWANCE DISCIPLINE (binding): NO
// allowance rates print anywhere in this section — BAH, OHA, CONUS
// COLA, Overseas COLA, and per diem ship as the pack's five DTMO
// routers only (what the allowance is, what the official calculator
// asks for, the verified official URL). The pack's BAS context
// figures and the HFP amount inside DFAS's Officers-table Note 2 are
// allowance figures and are likewise NOT printed (the note prints
// without the amount; those pays live in Pay & Money). Archive
// routing goes to the pack's verified DFAS Pay Tables index — never
// a guessed archive URL (pack flag F-3). The militarypay.defense.gov
// 3-cell direct check is a recorded pre-launch follow-up (F-2),
// disclosed in DATA-PLAN.md.

import type { PackEntry } from "./seven";

export const PAY_INTRO =
  "The 2026 basic pay tables, effective January 1, 2026 — basic pay rose 3.8% effective January 1, 2026, the Employment Cost Index formula figure under 37 U.S.C. § 1009, left unchanged by the FY2026 NDAA (P.L. 119-60) and set out in Executive Order 14368, Schedule 8. Tables cite DoD FMR, Vol. 7A, Chapter 1, as DFAS heads them.";

export const PAY_STANDING =
  "About these pay charts — read this first. The basic pay tables in this section are the 2026 tables, copied exactly from the Defense Finance and Accounting Service (DFAS). Congress and the President set new basic pay rates every year, and DFAS republishes the tables each January (or as soon as the year's raise is enacted) — when the new tables post, this section's tables are replaced and the effective-date label changes with them. Until that label changes, the tables here are the 2026 tables and nothing else: do not use them to figure 2027 pay. Allowances (BAH, OHA, COLA, per diem) are never stored in this app at all: their buttons take you to the official calculators, which always hold the current rates.";

export const PAY_HOW_TO_READ: PackEntry = {
  id: "pay-how-to-read",
  name: "How to read the tables — columns, blanks, and what is not in them",
  summary:
    "How to read the pay chart search terms: years of service columns, over 2 over 4, blank cell meaning. Rows are pay grades; columns are cumulative years of service. The first column is “2 or less”; the rest read “Over 2,” “Over 3,” “Over 4,” “Over 6,” then every two years to Over 40 — 22 columns in all.",
  who: "Everyone using the four pay tables in this section.",
  body: [
    "A column applies once the member has passed that many years: exactly 4 years of service is still the “Over 3” column; the “Over 4” rate starts at 4 years and 1 day. A blank cell means DFAS publishes no rate for that grade at that length of service (E-8 begins at Over 8, E-9 at Over 10, W-5 and O-9/O-10 at Over 20) — it does not mean zero, and the tables render it “—”, never $0. All figures are monthly basic pay before tax and deductions; BAH, BAS, and special pays are separate and are not in these tables.",
    "Cross-check (pack §1.5): three sample cells were checked against Executive Order 14368, Schedule 8 — the legal instrument that sets the 2026 rates: E-9 Over 12 = $7,066.50 ✓ MATCH; W-3 Over 14 = $7,397.70 ✓ MATCH; E-7 Over 26 = $7,067.40 ✓ MATCH. The E-9/E-7 pair matters: a widely circulated secondary transcription prints $7,067.40 in the E-9 Over 12 cell — that figure is real but belongs to E-7 at Over 26. DFAS and the EO agree E-9 Over 12 is $7,066.50, and that is what the table in this section prints.",
  ],
  flags: [
    "F-1: the DFAS pages' HTML titles still read “2025 Basic Pay” while every page's own heading states the tables are Effective January 1, 2026. The heading and the page-updated stamps control; the tables here are the 2026 tables (Enlisted posted Jan 12, 2026; O-1E/O-2E/O-3E Jan 12; Warrant Officers Jan 15; Commissioned Officers Feb 13).",
    "F-2: the pack's originally specified cell-level check against militarypay.defense.gov could not be run in the research pass (its pay-table page returned 403 and was not retried); the check was run against EO 14368 Schedule 8 instead (all three cells match, above). The militarypay direct check is a recorded pre-launch follow-up for a live-browser pass.",
  ],
  links: [
    { label: "DFAS Pay Tables index", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/" },
    { label: "DFAS — Basic Pay, Enlisted", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/EM/" },
    { label: "DFAS — Basic Pay, Warrant Officers", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/Basic-Pay/WO/" },
    { label: "DFAS — Basic Pay, Officers", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/Basic-Pay/CO.html" },
    { label: "DFAS — Basic Pay, O-1E/O-2E/O-3E", url: "https://www.dfas.mil/Military-Members/payentitlements/Pay-Tables/Basic-Pay/CO_FE/" },
  ],
  source: "DFAS pay tables (eff. Jan 1, 2026); EO 14368 Schedule 8 cross-check",
};

export const PAY_NOTES_ENTRIES: PackEntry[] = [
  {
    id: "pay-notes-enlisted",
    name: "Enlisted table notes — the senior enlisted rate and the E-1 under-4-months rate",
    summary:
      "E-1 pay search terms: E-1 less than 4 months $2,225.70, senior enlisted advisor pay $11,166.90, sergeant major of the army pay. The E-1 row's $2,407.20 rate carries Notes 4 & 5 — it applies only to an E-1 with 4 months of active duty or more; an E-1 with less than 4 months of active duty is paid $2,225.70. There is no separate under-4-months column in the 2026 DFAS web table; the distinction lives entirely in these two footnotes, so it prints on the E-1 row itself.",
    who: "E-1s in their first months, and anyone reading the top of the enlisted table.",
    body: [
      "Note 2 (DFAS, as published): basic pay for a senior enlisted member (grade E-9) is $11,166.90 regardless of years of service while serving as: (a) Senior Enlisted Advisor to the Chairman of the Joint Chiefs of Staff; (b) Sergeant Major of the Army; (c) Master Chief Petty Officer of the Navy; (d) Chief Master Sergeant of the Air Force; (e) Sergeant Major of the Marine Corps; (f) Chief Master Sergeant of the Space Force; (g) Master Chief Petty Officer of the Coast Guard; or (h) Senior Enlisted Advisor to the Chief of the National Guard Bureau. Note 3: a member placed on terminal leave pending retirement immediately following completion of service as the senior enlisted member of a Military Department is entitled to the higher senior enlisted pay for up to a maximum of 60 days; a hospitalized member who completed that service during or immediately before hospitalization continues to be entitled for not more than 180 days while so hospitalized. Note 1: for rank titles, see Volume 7A Comparable Grades.",
    ],
    flags: [],
    links: [{ label: "DFAS — Basic Pay, Enlisted", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/EM/" }],
    source: "DFAS Basic Pay – Enlisted, notes 1–5 (eff. Jan 1, 2026)",
  },
  {
    id: "pay-notes-officer",
    name: "Officer table notes — Executive Schedule caps, cadet rate, and who the O-1/O-2/O-3 rates do not apply to",
    summary:
      "Officer pay cap search terms: Level II executive schedule $18,999.90, Level V $15,408.30, academy cadet pay $1,452.90. Basic pay is limited to the rate for Level II of the Executive Schedule in effect during calendar year 2026 — $18,999.90 per month — for officers at pay grades O-7 through O-10; basic pay for O-6 and below is limited to Level V — $15,408.30.",
    who: "Officers reading the O-table, and cadets/midshipmen checking their rate.",
    body: [
      "Note 1: basic pay rate for Academy Cadets/Midshipmen and ROTC members/applicants is $1,452.90. Note 4's capped positions include the Chairman and Vice Chairman of the Joint Chiefs of Staff, the service chiefs, the Chief of the National Guard Bureau, and commanders of unified or specified combatant commands. Note 2 (combat zone tax exclusion): the maximum exclusion equals the senior enlisted (E-9) basic pay payable plus the hostile fire / imminent danger pay payable for the qualifying month — the amount of that pay is an allowance figure that lives in Pay & Money, so it is not restated here. Note 6: the O-1, O-2, and O-3 rates do not apply to commissioned officers credited with over 4 years (at least 4 years and 1 day) of active duty service as an enlisted member or warrant officer — those officers are paid from the O-1E/O-2E/O-3E table. Note 7: these rates or, when applicable, the O-1E rates apply during active service as a Doctor of Medicine student at USUHS. Note 3: for rank titles, see Volume 7A Comparable Grades.",
    ],
    flags: [],
    links: [{ label: "DFAS — Basic Pay, Officers", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/Basic-Pay/CO.html" }],
    source: "DFAS Basic Pay – Officers, notes 1–7 (eff. Jan 1, 2026)",
  },
  {
    id: "pay-notes-epay",
    name: "E-pay in one sentence — the O-1E/O-2E/O-3E definition (DFAS footnotes)",
    summary:
      "O-1E definition search terms: prior service officer pay, 1460 points, creditable service E pay. If you were credited with over 4 years — at least 4 years and 1 day — of active service as an enlisted member and/or warrant officer before commissioning, the regular O-1/O-2/O-3 rates do not apply to you; you are paid from the O-1E/O-2E/O-3E table instead.",
    who: "Prior-service officers — and anyone checking whether the E table is theirs.",
    body: [
      "“Creditable service” for the E table is that prior enlisted/warrant service (for a commissioned officer, service for which more than 1,460 points have been credited under 10 U.S.C. § 12732(a)(2), per the Nov 24, 2003 rule printed in the footnote). The O-E table's first three columns are blank on the DFAS page — the rates cannot begin before Over 4, by the table's own definition. Its notes also carry the combat-zone tax-exclusion note and the USUHS Doctor of Medicine rule (students without over 4 years of prior service use the regular Officers table; those with it are entitled to the O-1E rate). Prior service alone, without meeting that definition, does not put a member on the E table — this section states the definition and routes edge cases to the finance office; it does not adjudicate them.",
    ],
    flags: [],
    links: [{ label: "DFAS — Basic Pay, O-1E/O-2E/O-3E", url: "https://www.dfas.mil/Military-Members/payentitlements/Pay-Tables/Basic-Pay/CO_FE/" }],
    source: "DFAS Basic Pay – Officers (O-1/O-2/O-3, over 4 years), notes",
  },
  {
    id: "pay-notes-warrant",
    name: "Warrant table note — the table carries one note only",
    summary:
      "Warrant officer pay notes search terms: W-5 starts over 20. The warrant table carries no caps or special rows: its only DFAS note is “For rank titles, see Volume 7A Comparable Grades.” W-5 publishes no rate before Over 20 — those cells are blank on the DFAS page and render “—” here.",
    who: "Warrant officers reading the W-table.",
    body: [],
    flags: [],
    links: [{ label: "DFAS — Basic Pay, Warrant Officers", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/Basic-Pay/WO/" }],
    source: "DFAS Basic Pay – Warrant Officers, note 1 (eff. Jan 1, 2026)",
  },
  {
    id: "pay-prior-years",
    name: "Prior years' charts — route to the DFAS Pay Tables index",
    summary:
      "Old pay chart search terms: 2025 pay chart, historical pay tables, back pay chart. If you need a prior year's chart — for a pay dispute, a correction, or a back-pay question — DFAS maintains an archive of historical pay charts, and your finance office works from the table for the year in question, not from the current one.",
    who: "Anyone working a pay question for a year other than 2026.",
    body: [
      "Route: open the DFAS Pay Tables index (verified) and follow DFAS's historical/archive link from there. This app does not hard-code an archive URL — the archive page's own URL could not be verified from an official DFAS page in the research pass, and no guessed URL ships.",
    ],
    flags: [
      "F-3: DFAS's historical archive (dating back to Oct. 1, 1949, in PDF, “for reference only, not for official pay purposes”) is confirmed to exist; its URL is not verified from DFAS. The router goes to the verified DFAS Pay Tables index until a live-browser pass captures the archive URL directly from dfas.mil.",
    ],
    links: [{ label: "DFAS Pay Tables index", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/" }],
    source: "DFAS Pay Tables index",
  },
  {
    id: "pay-drill",
    name: "Drill pay — these same tables, divided by 30 (full tables in the Guard & Reserve Hub)",
    summary:
      "Drill pay search terms: drill pay calculation, one drill pay, 37 USC 206. DFAS publishes a parallel set of Reserve Component Drill Pay tables on the same January cycle, in the same four-table shape; each drill table restates the monthly basic-pay rate and adds two derived rows: 1 Drill = monthly basic pay ÷ 30 (the 37 U.S.C. § 206 rule) and 4 Drills = four times the 1-drill amount.",
    who: "Guard and Reserve members — the full drill tables and everything about drill weekends live in the Guard & Reserve Hub.",
    body: [
      "Worked check from DFAS's own drill pages: O-1, 2 or less — monthly $4,150.20, 1 Drill $138.34, matching the Officers table ÷ 30. The drill tables' officer set stops at O-7 (no O-8–O-10 drill rows are published). Drill pay is not a separate pay system; it is these same tables, divided by 30.",
    ],
    flags: [],
    links: [{ label: "DFAS — Drill Pay, Officers", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Drill-Pay/Drill-Pay-CO/" }],
    source: "DFAS Reserve Component Drill Pay tables (eff. Jan 1, 2026)",
  },
  {
    id: "pay-will-not-do",
    name: "What this section will not do",
    summary:
      "Pay section limits search terms: estimate my paycheck, BAH rate in the app, take-home pay. This section will not estimate your paycheck, your take-home pay, or your total compensation — the LES is the authority on what you were paid, and DFAS is the authority if the two ever disagree.",
    who: "Everyone — the standing limits of the Pay Charts & Rates section.",
    body: [],
    bullets: [
      { text: "It will not print, cache, or “approximately” quote a BAH, OHA, COLA, or per diem rate. Those numbers live only in the official calculators linked in the Allowances tile." },
      { text: "It will not apply the pay tables for you to a disputed paycheck, a back-pay claim, or a separation/retirement computation. It shows the published table; finance and the JTR/FMR decide cases." },
      { text: "It will not keep last year's tables labeled as current. When the label says 2026, the tables are 2026." },
      { text: "Three pays are named here so the hub is a complete map, and deliberately not priced here: Family Separation Allowance (FSA), Imminent Danger Pay (IDP), and Hostile Fire Pay (HFP). Their amounts and rules live in Pay & Money — a figure printed in two places will eventually disagree in one of them." },
    ],
    flags: [
      "F-4: DTMO downtime is real — DTMO's own pages carried scheduled-maintenance notices for DTMO Passport (including per diem) during the research window. The calculators are the right routers, but expect occasional maintenance windows; the LES/finance office is the fallback, not a broken promise.",
    ],
    links: [],
    source: "Pay Charts & Rates pack §5",
  },
];

export const PAY_ROUTER_ENTRIES: PackEntry[] = [
  {
    id: "pay-router-bah",
    name: "BAH — Basic Allowance for Housing: the DTMO Rate Lookup (no rate printed)",
    summary:
      "BAH calculator search terms: BAH rate lookup, housing allowance by ZIP. BAH is money provided to service members stationed in the U.S. for fair housing compensation when government housing is not furnished; as an allowance it is not considered part of a member's pay and is not taxed. “A member assigned to permanent duty within the 50 United States, who is not furnished Government housing, is eligible for BAH, based on the member's rank, dependency status, and permanent duty station zip code.” No dollar figure for any location is printed in this app — the calculator holds the rates.",
    who: "Members stationed in the 50 United States not furnished government housing.",
    body: [
      "Rates are set by Military Housing Area (MHA) — the duty ZIP resolves to an MHA — and are reviewed and released annually, usually in mid-December, effective Jan 1. Separate with-dependents and without-dependents rates exist for every grade and MHA. BAH also has non-locality forms named on the DTMO page: Partial BAH, BAH Reserve Component/Transient (BAH RC/T), and BAH-DIFF (the differential for a member in single-type quarters who pays child support). What BAH is based on: local rental market data for the MHA, by grade and dependency status (utilities are part of the component breakdown DTMO publishes).",
      "The calculator asks for (all marked required): ZIP Code (the page links out to USPS to look up a duty-station ZIP), Year, Pay Grade. The same page carries the supplemental lookups — Component Breakdown, National Out-of-Pocket Amounts, Non-Locality Rates — and All BAH Rates: a downloadable file of rates for all locations and all pay grades for a chosen year.",
    ],
    flags: [
      "Mid-year rate actions happen — DTMO's page carried a notice of a temporary 2026 BAH increase for one MHA during research. That is exactly why rates are never cached in this app: it routes, it does not store BAH rates.",
    ],
    links: [{ label: "DTMO — BAH Rate Lookup", url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/" }],
    source: "DTMO BAH Rate Lookup; militarypay.defense.gov BAH summary",
  },
  {
    id: "pay-router-oha",
    name: "OHA — Overseas Housing Allowance: the DTMO Rate Lookup (no rate printed)",
    summary:
      "OHA calculator search terms: overseas housing allowance, OHA rate lookup. OHA is the overseas counterpart of BAH — for a member stationed overseas (except Hawaii and Alaska), including U.S. territories and possessions, who is not furnished government housing, eligible based on the member's dependency status. Hawaii and Alaska get BAH, not OHA — that boundary is stated on DTMO's own eligibility material, and members routinely get it wrong.",
    who: "Members stationed overseas (not Hawaii/Alaska) not furnished government housing.",
    body: [
      "The structural difference from BAH, at the level DTMO's own pages support: OHA rates are computed by country and updated based on cost data and currency fluctuations — on a pay-period rhythm, not an annual one. The lookup returns the member's allowance components for the locality (the rental ceiling and the utility/recurring-maintenance and move-in components are produced by the tool; their amounts are rates and are not printed here).",
      "The calculator asks for: Location (drop-down of current locations; for past-location data, enter a locality code), Locality Code (optional), Year, Month, Pay Period, Pay Grade, Dependents. The page embeds a Locality Code Lookup and OHA Rate Tables (historical rates as a downloadable file by country).",
    ],
    flags: [],
    links: [{ label: "DTMO — OHA Rate Lookup", url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup" }],
    source: "DTMO OHA Rate Lookup",
  },
  {
    id: "pay-router-conus-cola",
    name: "CONUS COLA — Cost-of-Living Allowance in the Continental U.S.: the DTMO Rate Lookup (no rate printed)",
    summary:
      "CONUS COLA search terms: conus cola calculator, high cost area allowance. “The Cost-of-Living Allowance in the continental United States (CONUS COLA) is a taxable supplemental allowance designed to help offset the higher costs of non-housing goods and services in the most expensive areas in the CONUS.” It is taxable (unlike Overseas COLA), and it exists only for designated high-cost CONUS areas — most duty stations have no CONUS COLA at all.",
    who: "Members assigned to designated high-cost CONUS areas.",
    body: [
      "Rates update on a calendar-year cycle: non-housing costs are calculated for MHAs and county cost groups and compared to the CONUS average to generate the indexes. The calculator asks for: Duty ZIP Code (the one field the page marks required), Year, Pay Grade, Years of Service, Dependents. The same page offers CONUS COLA Payout Tables and CONUS COLA ASCII Files (all rates for a year as a download).",
    ],
    flags: [],
    links: [{ label: "DTMO — CONUS COLA Rate Lookup", url: "https://www.travel.dod.mil/Allowances/CONUS-Cost-of-Living-Allowance/CONUS-COLA-Rate-Lookup/" }],
    source: "DTMO CONUS COLA pages",
  },
  {
    id: "pay-router-overseas-cola",
    name: "Overseas COLA — Overseas Cost-of-Living Allowance: the DTMO Rate Lookup (no rate printed)",
    summary:
      "Overseas COLA search terms: oconus cola calculator, overseas cost of living allowance. “Service members serving outside of the continental United States (OCONUS) where the cost of living is higher than CONUS receive an Overseas Cost-of-Living Allowance (COLA). Overseas COLA is a non-taxable allowance designed to offset higher prices of non-housing goods and services OCONUS and equalize purchasing power with members stationed in CONUS.”",
    who: "Members serving OCONUS where the cost of living is higher than CONUS.",
    body: [
      "DTMO's own budgeting warning, printed verbatim beside the calculator link: “Overseas COLA is not a fixed amount and should not be considered in household budgeting.” It can fluctuate with the exchange rate, because COLA is paid in U.S. dollars while some expenses are paid in foreign currency; it is paid as a percentage of spendable income, rather than total income, and spendable income varies by rank, years of service, and number of dependents — which is why the calculator asks for exactly those fields.",
      "The calculator asks for: Location, Locality Code (optional), COLA Index (optional — “determine a payment based on a specific rate”), Year, Month, Pay Period, Pay Grade, Years of Service, Living in Barracks, Number of Dependents.",
    ],
    flags: [],
    links: [{ label: "DTMO — Overseas COLA Rate Lookup", url: "https://www.travel.dod.mil/Allowances/Overseas-Cost-of-Living-Allowance/Overseas-COLA-Rate-Lookup/" }],
    source: "DTMO Overseas COLA pages",
  },
  {
    id: "pay-router-perdiem",
    name: "Per diem — the DTMO Per Diem Rate Lookup and the JTR (no rate printed)",
    summary:
      "Per diem search terms: per diem rates, TDY lodging meals, M&IE. Per diem is the daily allowance for lodging, meals, and incidental expenses on official travel (TDY, and the travel days of a PCS) — a lodging part (reimbursed at actual cost up to the locality maximum) plus a meals & incidental expenses (M&IE) part. It is a travel allowance governed by the Joint Travel Regulations (JTR), not a station allowance: there is no “your per diem” to print, only the rate for a place on a date.",
    who: "Anyone traveling on official orders — who sets the rate depends on where the travel is, and DTMO's lookup page states the split itself.",
    body: [],
    bullets: [
      { title: "CONUS (contiguous 48 states + DC)", text: "“GSA sets per diem rates for the contiguous 48 States and the District of Columbia. Rates are updated annually at the start of the fiscal year (or as necessary).” Lookup inputs: Fiscal Year, State, with toggles to Include DoW Installations and Include All Cities & Townships. (The DTMO page is the DoD door; the underlying CONUS rates are GSA's.)" },
      { title: "Foreign & Non-Foreign OCONUS", text: "“DoS sets the per diem rates for foreign locations. Rates are updated at the beginning of each month. DTMO prescribes rates for non-foreign locations overseas (also referred to as OCONUS locations, which includes Alaska, Hawaii, Guam, Puerto Rico, etc.). Rates are updated monthly (or as necessary).”" },
      { title: "Rules home: the JTR", text: "The Joint Travel Regulations — published by the Per Diem, Travel, and Transportation Allowance Committee, hosted by DTMO — “implements policy and laws establishing travel and transportation allowances of Uniformed Service members and DoW civilian travelers… The JTR has the force and effect of law for travelers” and is updated by monthly change letters. Any per-diem rule question routes to the JTR page; this section does not restate JTR computation rules from secondary summaries." },
    ],
    flags: [],
    links: [
      { label: "DTMO — Per Diem Rate Lookup", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/Per-Diem-Rate-Lookup/" },
      { label: "DTMO — Joint Travel Regulations (JTR)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/" },
    ],
    source: "DTMO Per Diem Rate Lookup; JTR via DTMO",
  },
];
