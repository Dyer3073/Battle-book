// Guard & Reserve Hub — transcribed from the researched pack
// (~/workspace/military-app/reserve/reserve.md, researched Nov 9, 2026).
// Official sources only (DFAS, TRICARE, VA, DoD Compensation, NGB,
// NARA, DTMO/JTR, service personnel centers, the U.S. Code). No pay
// table is reproduced — a few clearly-labeled DFAS 2026 example cells
// only. Conflicts are printed as conflicts, never averaged or blended.
// This hub gives no personal finance advice and no personal
// retirement predictions.

import type { RefGroup } from "./refdata";

export const RESERVE_INTRO =
  "The drilling life, explained from the official pages: how a drill period pays (1/30 of monthly basic pay), TRICARE Reserve Select and the activation transitions around it, your records — NGB 22, DD214s, and the new DD Form 214-1 — retirement points and the 20-year letter, the call-up authorities by name, and the reserve-specific programs: MGIB-SR, SGLI while drilling, and IDT travel reimbursement. Figures carry their year, and where official sources conflict, both figures print — never blended.";

export const RESERVE_GROUPS: RefGroup[] = [
  {
    title: "Who this hub covers",
    entries: [
      {
        name: "The seven reserve components — and the Space Force exception",
        body: "The federal reserve components are the Army Reserve, Navy Reserve, Marine Corps Reserve, Air Force Reserve, and Coast Guard Reserve, plus the Army and Air National Guard (which serve in both state and federal statuses). The pay, TRICARE, points, and records rules in this hub are federal rules that run across all of them, with component-run programs flagged where they differ. Space Force has no reserve component of its own. Under the Space Force Personnel Management Act (enacted in the FY2024 NDAA), DoD is building a single-component model in which Guardians serve in full- or part-time roles inside the Space Force itself — the Chief of Space Operations has stated plainly: “This is not a separate Space Force reserve component. It is fundamentally different.” Air Force Reservists in space career fields began transferring into part-time Guardian roles in 2025 (the first 18 transferred July 15, 2025), and TRICARE's Reserve Select enrollment page lists “Space Force Guardians” among those who may purchase TRS.",
        who: "Everyone in a drilling status; Space Force part-time Guardians and Air Force reservists in space fields deciding which rules currently apply to them.",
        flag: "The Space Force part-time model is being implemented, not finished: Air National Guard space personnel are on a separate, later track under the FY2025 NDAA, and no official page gives a full-implementation date. Until transfer, space-career-field reservists remain Air Force Reserve or Air National Guard members under the rules in this hub.",
        links: [
          { label: "Space Force PMA overview — spaceforce.mil", url: "https://www.spaceforce.mil/News/Article-Display/Article/4290878/space-force-to-accept-air-force-reserve-volunteers-for-part-time-positions/" },
          { label: "CSO remarks (no separate reserve component) — spaceforce.mil", url: "https://www.spaceforce.mil/News/Article-Display/Article/3675984/remarks-by-cso-gen-chance-saltzman-at-the-air-and-space-forces-association-warf/" },
        ],
        source: "Space Force (spaceforce.mil)",
      },
    ],
  },
  {
    title: "Drill pay",
    entries: [
      {
        name: "How a drill period pays — 1/30 of monthly basic pay",
        body: "Drill pay is not a separate pay scale. Under 37 U.S.C. §206, each period of inactive-duty training pays 1/30 of the monthly basic pay rate for your grade and years of service — DFAS builds its drill tables by taking the same basic pay table active-duty members use and dividing by 30. DFAS's own drill tables print three rows per grade cell: the monthly rate, “1 Drill,” and “4 Drills.” The Army's official benefits site defines the unit: “A drill period is defined as four (4) hours.” A standard drill weekend is 4 drill periods (two per day across two days — often called a MUTA-4 or UTA weekend), so a standard weekend pays the table's “4 Drills” amount: 4/30 of a month's basic pay. Drill pay is basic pay only — housing and food allowances do not attach to a drill weekend; they start on qualifying orders. Annual training and active-duty orders are paid differently again: short tours under 30 days stay on Reserve pay dates, and tours of 30 days or more pay like active duty, monthly on the 1st/15th cycle.",
        who: "Every drilling member, every drill weekend; check it when budgeting drill income or when a weekend's pay looks wrong.",
        links: [
          { label: "DFAS Pay Tables hub (basic pay + drill pay tables)", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" },
          { label: "MyArmyBenefits Drill Pay fact sheet", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Drill-Pay?serv=121" },
        ],
        source: "DFAS / MyArmyBenefits",
      },
      {
        name: "Example cells — DFAS Reserve Component Drill Pay, effective January 1, 2026",
        body: "So the math is concrete — examples only, gross basic pay before taxes and deductions, from the official DFAS drill tables effective Jan 1, 2026 (DoD FMR Vol. 7A, Ch. 1; page updated Jan 13, 2026). Rates reset every January with the pay raise (2026: 3.8%) — always pull your own cell from the current table.",
        bullets: [
          "E-5, over 6 years: monthly basic pay $4,110.00 → 1 drill $137.00 → standard 4-drill weekend $548.00. (Monthly cell from DFAS's 2026 basic pay table; 1-drill and 4-drill amounts are that cell divided per DFAS's published table structure — the enlisted drill page itself was not re-opened in the pack's research session.)",
          "O-3, over 8 years: monthly $8,125.50 → 1 drill $270.85 → 4 drills $1,083.40 (read directly from the DFAS commissioned-officer drill table).",
          "O-4, over 10 years: monthly $9,420.00 → 1 drill $314.00 → 4 drills $1,256.00 (same table).",
        ],
        who: "Anyone estimating a weekend; anyone checking an LES against the table.",
        flag: "These are DFAS-2026 examples, flagged as such — not your rate. Officers with prior enlisted service (O-1E/O-2E/O-3E) are paid from a different drill table with higher rates at the same longevity — do not read your rate off the regular officer table.",
        links: [
          { label: "DFAS commissioned-officer drill table", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Drill-Pay/Drill-Pay-CO/" },
          { label: "All DFAS pay tables", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" },
        ],
        source: "DFAS drill pay tables, effective Jan 1, 2026",
      },
      {
        name: "When drill pay actually arrives — DFAS promises no fixed day",
        body: "Drilling members are not on the active-duty 1st-and-15th payday cycle. DFAS's own pay FAQ states it in full: “Pay days for active component members and reserve component members on tours of 30 days or more for each of the military services are on the 1st and 15th of the month… Drilling members or members on active duty tours of less than 30 days may be paid on various pay dates during the month. These pay dates will also not occur on a weekend or Federal legal holiday.” That is the entire official DFAS position: the pay follows your unit's submission and certification of your attendance into the pay system, it posts on varying Reserve pay dates, and DFAS publishes no “within X days of drill” promise. Pay is visible on your LES in myPay as your service's system posts it — Coast Guard members are the exception and use Direct Access through the Coast Guard Pay & Personnel Center instead.",
        who: "New drilling members setting bill autopays (don't set them against drill weekends); anyone whose drill pay is late.",
        flag: "Any specific day-count you read on a bank or law-firm blog (“about 10 days,” “3–5 business days”) is not a DFAS statement — if a certified drill hasn't paid after a full pay cycle, go to your unit's pay office/admin first, then your component's finance customer care.",
        links: [
          { label: "DFAS Ask Military Pay FAQ (pay days)", url: "https://corpweb1.dfas.mil/askDFAS/faqView.do?faq.faqId=271" },
          { label: "myPay", url: "https://mypay.dfas.mil/" },
        ],
        source: "DFAS Ask Military Pay FAQ",
      },
      {
        name: "Where the official drill pay tables live",
        body: "DFAS publishes the complete current-year drill tables on the same Pay Tables page as the basic pay tables, in four separate charts: Commissioned Officers, Commissioned Officers with more than 4 years of creditable service (the O-1E–O-3E table), Warrant Officers, and Enlisted Members. DFAS's Jan. 28, 2026 release confirms: “Active duty and reserve 2026 Military Pay Tables are now available… Drill Pay charts are also available for the same categories of Reserve members.” Use the current year's page — a prior-year table is a wrong number, and January tables can post on different days for different categories.",
        who: "Every promotion, longevity step, and January raise.",
        links: [{ label: "DFAS Pay Tables", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" }],
        source: "DFAS",
      },
    ],
  },
  {
    title: "Health care — TRICARE Reserve Select & activation transitions",
    entries: [
      {
        name: "TRICARE Reserve Select — what it is and who can buy it",
        body: "TRICARE Reserve Select (TRS) is a premium-based health plan, available worldwide, that qualified Selected Reserve members purchase for themselves and their families — it is the drilling member's counterpart to TRICARE Select (you pay monthly premiums, an annual deductible, and cost-shares for care). TRICARE's eligibility list, verbatim in substance: you must be a member of the Selected Reserve (drilling — Individual Ready Reserve members do not qualify, including Navy Reserve Voluntary Training Units), and you must be (a) not on active duty orders for more than 30 days, (b) not covered under TAMP, and (c) not eligible for or enrolled in the Federal Employees Health Benefits Program (FEHB). The sponsor must purchase TRS for family members to be covered; you may purchase at any time, and you may disenroll at any time — but if you disenroll, you cannot reenroll for 12 months.",
        who: "Drilling members without employer coverage that works for their family, and federal technicians weighing TRS against FEHB (until 2030, FEHB eligibility closes the TRS door).",
        flag: "The FEHB exclusion has an official end date: TRICARE's enrollment page states “(This exclusion ends Jan. 1, 2030.)” Until then, a federal employee who is eligible for FEHB cannot buy TRS even if they never enrolled in FEHB. (TRICARE states the end date; it does not name the statute on the page.)",
        links: [
          { label: "TRS plan page — tricare.mil", url: "https://tricare.mil/Plans/HealthPlans/TRS" },
          { label: "TRS enrollment page — tricare.mil", url: "https://tricare.mil/Plans/Enroll/TRS" },
        ],
        source: "TRICARE",
      },
      {
        name: "What TRS costs — 2026 premiums (year-specific; 2027 figures already published)",
        body: "CY2026 monthly premiums (TRICARE Newsroom, published Nov. 7, 2025): Member only $57.88 · Member and family $286.66. Premiums are only part of the cost: TRICARE's plan page states you also pay an annual deductible and a cost-share for covered services, and directs premium-based plans to follow the TRICARE Select Group B cost schedule.",
        who: "Every fall open season and any month you're deciding whether to buy, keep, or drop TRS.",
        flag: "This hub prints no TRS catastrophic-cap or deductible dollar figure: the TRS page itself states none, and TRICARE's published Group B tables split into different schedules (active-duty family members vs. retirees/all others) with different caps — secondary sites pin one of those numbers on TRS, but no TRICARE TRS-specific page states it, so use TRICARE's official cost comparison instead. Forward figures, already official: from January 1, 2027, TRS premiums become $60.54 (member only) / $307.48 (member and family). The 2026 figures above are the current ones until that date.",
        links: [
          { label: "TRICARE cost comparison", url: "https://tricare.mil/Costs/Compare" },
          { label: "TRICARE 2026 costs article", url: "https://newsroom.tricare.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=154&ModuleId=56888&Article=4328806" },
          { label: "TRICARE 2027 costs article", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4642349/get-to-know-your-2027-tricare-health-plan-costs" },
        ],
        source: "TRICARE Newsroom",
      },
      {
        name: "How to enroll in TRS — milConnect / Beneficiary Web Enrollment",
        body: "Purchasing TRS is self-service. Per TRICARE: log in to milConnect, select Benefits, then Beneficiary Web Enrollment (BWE), and follow the enrollment steps. (Your service records your Selected Reserve status and eligibility in DEERS — if BWE doesn't offer you TRS, the fix starts with your personnel office and DEERS, not with TRICARE.) Phone enrollment through your regional contractor and mail/fax enrollment on DD Form 2896-1 (Reserve Component Health Coverage Request Form, with the initial premium) are the official alternates. Family coverage exists only if the sponsor enrolls them — a member-only purchase leaves the family uncovered.",
        who: "First purchase after joining a drilling unit, after a qualifying life event, or when coming off TAMP.",
        links: [
          { label: "milConnect", url: "https://milconnect.dmdc.osd.mil" },
          { label: "TRS enrollment steps — tricare.mil", url: "https://tricare.mil/Plans/Enroll/TRS" },
        ],
        source: "TRICARE",
      },
      {
        name: "When you activate over 30 days — coverage flips to active-duty TRICARE (and can start early)",
        body: "On qualifying orders of more than 30 days, you get the same health care benefits as active duty service members, and your eligible family members get coverage too. Your service updates your eligibility in DEERS at each duty-status change; the member is automatically enrolled in TRICARE Prime, while family members must act and enroll in a plan within 90 days of activation (Prime, Prime Remote, Select, US Family Health Plan, and overseas variants as applicable) — a family that does nothing is not automatically in a plan. Early eligibility: if you're issued delayed-effective-date orders for more than 30 days for a preplanned mission or in support of a contingency operation, TRICARE eligibility can begin on the date your orders are issued or 180 days before you report, whichever is later — up to 180 days of pre-activation coverage for you and your family.",
        who: "The day orders arrive — family enrollment inside the 90-day window is the action item.",
        flag: "TRICARE's own pages phrase the qualifying missions slightly differently across articles (“preplanned mission or contingency operation” / “contingency operation or under 12304b”) — the 180-day rule is consistent; your orders and DEERS record decide your case.",
        links: [{ label: "TRICARE pre-activation benefits", url: "https://tricare.mil/LifeEvents/Activating/PreActBenefits" }],
        source: "TRICARE",
      },
      {
        name: "TAMP — 180 premium-free days after qualifying active duty",
        body: "The Transitional Assistance Management Program (TAMP) provides 180 days of health care benefits after regular TRICARE eligibility ends, with no premiums — during TAMP you and your family are treated as active-duty family members and can use TRICARE Prime (where available), Select, the US Family Health Plan, and overseas plans (Prime Remote is not available during TAMP), with enrollment action due within 90 days of separation. For Guard/Reserve members, TRICARE's qualifying case is separating from a period of more than 30 consecutive days of active duty served for a preplanned mission or in support of a contingency operation — and, for National Guard members, more than 30 consecutive days under Title 32 §502(f) orders in support of a Presidentially or Secretary-of-Defense-declared national disaster. (TAMP also covers several active-component cases — involuntary separation, stop-loss, sole survivorship, and separating directly into the Selected Reserve.) Your service determines TAMP eligibility and documents it in DEERS; you can view it in milConnect.",
        who: "Everyone demobilizing from a qualifying tour — TAMP is the bridge, and it runs whether or not you use it.",
        flag: "Two official-source wrinkles, printed not blended: (1) TRICARE's TAMP page says the 180 days begin “upon” your separation; a TRICARE separation briefing says they begin “the day after” you separate. (2) A service benefits-site summary describes a 2026 policy memorandum broadening RC TAMP eligibility (dropping the contingency/preplanned-mission connection, retroactive to denials on/after April 24, 2020) — tricare.mil's TAMP page (last updated May 15, 2025) does not reflect any such change and still lists the mission requirement. This hub follows the tricare.mil page; if your service shows you TAMP-eligible in DEERS, DEERS governs your case.",
        links: [{ label: "TAMP — tricare.mil", url: "https://tricare.mil/Plans/SpecialPrograms/TAMP" }],
        source: "TRICARE",
      },
      {
        name: "After TAMP — TRS again, or CHCBP",
        body: "When TAMP ends, TRICARE states the sequence plainly: “TRS coverage begins after the TAMP period” — if you qualify to purchase TRS, that's the standing option, and it must be in place to avoid a gap. If you don't qualify for TRS, the Continued Health Care Benefit Program (CHCBP) is the official bridge: a premium-based plan that provides the same coverage as TRICARE Select for 18 to 36 months when you lose TRICARE eligibility (for ex-TAMP members, up to 18 months), purchasable within 60 days of losing eligibility. State Health Insurance Marketplace coverage is the third route TRICARE names.",
        who: "The last 60 days of any TAMP period; anyone leaving drilling status without employer coverage lined up.",
        flag: "CHCBP is priced like civilian insurance, not like TRS — CY2026 official quarterly premiums are $2,103.00 (single) / $5,339.00 (family) — get the current table from TRICARE before relying on it.",
        links: [{ label: "CHCBP — tricare.mil", url: "https://tricare.mil/chcbp" }],
        source: "TRICARE",
      },
    ],
  },
];

RESERVE_GROUPS.push(
  {
    title: "Your records — NGB 22, DD214 & the new DD Form 214-1",
    entries: [
      {
        name: "NGB Form 22 — the National Guard separation record",
        body: "Army and Air National Guard members are issued an NGB Form 22, Report of Separation and Record of Service, for their Guard service — NARA states it directly: “National Guard Members are also issued an NGB Form 22.” The split to understand: the NGB 22 documents your Guard (state) service and your separation from the Guard; a DD214 documents a qualifying federal active-duty period. A Guard career normally produces both, plus a retirement-points record (NGB Form 23 / points statement) covering service that generated neither form — NARA notes reserve service of less than 90 continuous days, including active duty for training, is documented in the retirement points record. The NGB 22 is a state-held record: NGB's forms office directs members to their state headquarters for NGB Forms 22 and 23 — “States are required by law, to maintain these records for 99 years” — and NARA's records-location chart routes Guard records to the Adjutant General of the state (or DC/Puerto Rico) where you served.",
        who: "Every Guard member at separation from the Guard; anyone proving Guard service for a state benefit or a Guard-specific claim.",
        links: [
          { label: "NGB forms FAQ (state route for Forms 22/23)", url: "https://www.ngbpmc.ng.mil/About-Us/Frequently-Asked-Questions/" },
          { label: "NARA records locations", url: "https://www.archives.gov/veterans/military-service-records/location" },
        ],
        source: "National Guard Bureau / NARA",
      },
      {
        name: "When a reservist gets a DD214 (and why you may collect several)",
        body: "The DD214 (Certificate of Uniformed Service, governed by DoDI 1336.01) is issued for active service — NARA's general rule: “A Report of Separation is generally issued when a service member performs active duty or at least 90 consecutive days of active duty training.” Service summaries of the current instruction state the DD214 triggers as: active service greater than 90 days; contingency operations greater than 30 days; and shorter periods when the Secretary concerned requires it (the Navy's fact sheet names ADT/ADOS as examples). Because each qualifying period generates its own DD214, multiple DD214s across one Guard/Reserve career is the normal, official pattern — short activations that meet none of the triggers produce no DD214 and live on your points statement instead.",
        who: "Anyone reconciling “I served but have no DD214 for that period” — check the points statement before assuming a record is missing.",
        flag: "A disability-based shorter-period exception is widely repeated on non-official sites but was not stated on any official page retrieved for the pack — it is not printed here as a rule; DoDI 1336.01's text and your personnel center decide individual cases.",
        links: [
          { label: "NARA DD214 page", url: "https://www.archives.gov/personnel-records-center/dd-214" },
          { label: "MyNavy HR DD214-1 fact sheet (DD214 triggers)", url: "https://www.mynavyhr.navy.mil/Portals/55/Support/PayPers/CPCResources/240924_FACT%20SHEET_DD-214-1.pdf" },
        ],
        source: "NARA / MyNavy HR",
      },
      {
        name: "NEW: DD Form 214-1 — the Reserve Component addendum (2025)",
        body: "Created under §570 of the FY2020 NDAA to close a real gap — many reservists separated or retired with no single document summarizing their component service — the DD Form 214-1, Certificate of Uniformed Service, Reserve Component Addendum, is an official summary record of your Reserve Component points and service. It is issued when a reservist separates, retires, or is discharged from the Reserve Component, transfers to the IRR, Standby Reserve, or Retired Reserve, or when a recalled RC retiree reverts to retired status; it also documents statutory authorities creditable toward reduced-age retirement. Two rules the services state in bold terms: the 214-1 accompanies a final DD214 and is never issued on its own (Army Directive 2025-05: the two forms “are treated as a single document”), and it is not retroactive — it is issued only to members separating after their service implemented it, and a member who separated earlier cannot request one. Implementation rolled out service by service: DoD directed implementation by February 2025; the Air Force launched in February 2025 (with a large processing backlog afterward); the Army's compliance date under its directive was not later than August 17, 2025, under a waiver.",
        who: "Anyone separating or retiring from a reserve component from 2025 onward — ask your personnel center whether your final DD214 packet includes the 214-1.",
        flag: "Conflict flagged, not blended: several commercial benefit sites claim the 214-1 “replaces the NGB Form 22.” No official source says that. Army and Navy guidance frames the 214-1 strictly as a DD214 addendum, and the Army directive expressly withholds it from Guard soldiers transferring between states. Keep both documents: the NGB 22 remains the state Guard separation record.",
        links: [
          { label: "Army Directive 2025-05 (DD Form 214-1)", url: "https://ipps-a.army.mil/Portals/129/Documents/ARN43394-ARMY_DIR_2025-05-000-WEB-1.pdf" },
          { label: "ARPC 214-1 article", url: "https://www.arpc.afrc.af.mil/News/Article-Display/Article/4642501/arpc-cuts-dd-form-214-1-backlog-through-system-improvements-additional-manpower/" },
        ],
        source: "Army Directive 2025-05 / ARPC",
      },
      {
        name: "Getting replacements — state for Guard forms, NARA/personnel centers for federal records",
        body: "Match the document to its custodian (full routes in the Records & DD214 Center): NGB 22 / NGB 23 → the Adjutant General / State Joint Force Headquarters of the state where you served — do not start at NPRC for state forms. DD214s → the standard federal routes: milConnect/DPRIS for recent separations, eVetRecs or SF-180 to the National Personnel Records Center for older ones, or your service personnel command for the recent-Marine/Coast Guard cases VA names. DD214-1 → the issuing service's personnel center (e.g., ARPC for Air Reserve Component members); it is not an NPRC document and cannot be created retroactively for pre-implementation separations. One rule from NARA that protects you everywhere in this section: requesting your own records from the government is free — never pay a website to order them.",
        who: "Before the day a lender, employer, school, or VA office needs the document — replacements take time.",
        links: [{ label: "VA's records page (start here)", url: "https://www.va.gov/records/get-military-service-records/" }],
        source: "VA / NARA",
      },
    ],
  },
  {
    title: "Retirement points, the 20-year letter & the gray area",
    entries: [
      {
        name: "How points accrue — the categories",
        body: "Non-regular (Guard/Reserve) retirement runs on points. DoD Compensation's Reserve Retirement page lists the crediting categories: 1 point for each day of active service; 1 point for each attendance at a drill period; 1 point for each day of performing funeral honors duty; 15 points for each year of membership in a reserve component (membership points prorate for partial years). Service pages add the texture: active duty and annual training credit day-for-day including travel time (USMC MMSR-5); a drill credits whether attended in pay or non-pay status (MMSR-5); funeral honors points are not subject to the inactive-duty cap.",
        who: "Every drilling member — points are much easier to fix the year they're wrong than a decade later.",
        flag: "Correspondence/EBDL course points are service-specific — never generalize them: the Navy credits 1 point per 4 hours of authorized non-resident instruction (once per course, SECNAV-approved list); the Coast Guard likewise credits 1 point per 4-hour increment (once per course per career); the Marine Corps credits points that “vary with the course completed”; and the Army ended ACCP point credit after April 15, 2016, with directed USAR EBDL under a different hours rule. Your service's personnel center page is the authority for your courses.",
        links: [
          { label: "DoD Compensation — Reserve Retirement", url: "http://militarypay.defense.gov/Pay/Retirement/Reserve/" },
          { label: "USMC MMSR-5", url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Separation-and-Retirements-Branch/Reserve-Separation-and-Retirement/" },
        ],
        source: "DoD Compensation / USMC MMSR-5",
      },
      {
        name: "The 130-point inactive cap and the 50-point “good year”",
        body: "Two numbers govern a reserve career. Qualifying year (“good year”): an anniversary year — your own year, running from your personal anniversary date, not the calendar or fiscal year — in which you earn at least 50 points. Twenty qualifying years earn the retirement. Inactive-duty cap: points from inactive service (drills, RMP/ATP-type training, EBDL, and membership points combined) are capped at 130 per anniversary year; active service and AT credit day-for-day on top, and no combination can exceed 365/366 points in an anniversary year. The cap's history, from USMC MMSR-5's table: 60 before Sep 1996 → 75 → 90 → 130, which has applied since 2007–2008. Pay computation at overview level: for retired-pay purposes, DoD Compensation converts your career points to equivalent years — total points ÷ 360 — and applies your retirement system's multiplier to your retired pay base (2.5% per equivalent year under the legacy systems, 2.0% under BRS). That formula is orientation only: this hub makes no personal predictions — run your own estimate in DoD's official calculator and have your personnel center verify your points.",
        who: "Anyone tracking toward 20 qualifying years; anyone whose points statement shows a year near the 50-point line.",
        flag: "Official conflict on the cap's start date, flagged not blended: MMSR-5's table dates the 130 cap from January 18, 2008, while Army and Navy Reserve materials date it by anniversary years ending on or after October 30, 2007. The cap value (130) is not in dispute; members with a 2007–08 anniversary year should have their personnel center apply its own rulebook to that year.",
        links: [
          { label: "Navy Reserve “good year” explainer", url: "https://www.navy.mil/Press-Office/News-Stories/Article/2321404/understanding-a-good-year-for-reserve-retirement/" },
          { label: "DoD Compensation — Reserve Retirement", url: "http://militarypay.defense.gov/Pay/Retirement/Reserve/" },
        ],
        source: "DoD Compensation / Navy Reserve / USMC MMSR-5",
      },
      {
        name: "See your points — the official statement for your component",
        body: "Verify your points every year, while corrections are still easy. Each component issues its own statement through its own system:",
        bullets: [
          "Army Reserve: DA Form 5016 (Chronological Statement of Retirement Points), issued annually around your anniversary-year end; review it in IPPS-A, official copies in iPERMS (CAC or DS Logon). Issuing authority: HRC.",
          "Army National Guard: historically the NGB Form 23B via your state RPAM Administrator; as of September 22, 2025, the IPPS-A retirement points module replaced the ARNG RPAM application — pull prior NGB 23 copies from iPERMS and work corrections through your state RPAM Administrator / Retirement Services Officer.",
          "Air Force Reserve / Air National Guard: the PCARS point credit summary (Point Credit Accounting and Reporting System), maintained by ARPC; current records access runs through myFSS. The PCARS/vMPF wording in ARPC documents dates from 2017–2019 and the myFSS route is confirmed via state TAG pages rather than a current ARPC portal page — if the portal path fails, contact ARPC directly.",
          "Navy Reserve: the Annual Statement of Service History (ASOSH / ARPR, NAVPERS 1070/885) — view your annual points record in NSIPS Employee Self-Service (Retirements and Separations module; CAC login); without a CAC, request it through the My Navy Career Center; corrections run through PERS-912.",
          "Marine Corps Reserve: the Career Retirement Credit Report (CRCR) — check and certify it in Marine Online (MOL); the personnel authority is CMC (MMSR-5). The Marine Corps states the duty plainly: it is each Marine's responsibility to ensure the CRCR is accurate and certified.",
          "Coast Guard Reserve: the Reserve Points Statement in Direct Access Self-Service; IRR/ISL/ASL members request it from PSC RPM-3; if you need a statement for use outside the Coast Guard, request the official PPC-4973 from the Pay & Personnel Center. SELRES corrections go through your Servicing Personnel Office.",
        ],
        who: "Annually, at your anniversary-year end and before any reenlistment, transfer, or separation.",
        links: [
          { label: "IPPS-A", url: "https://ipps-a.army.mil/" },
          { label: "myFSS", url: "https://myfss.us.af.mil/USAFCommunity/s/login/" },
          { label: "Coast Guard PPC points statements", url: "https://www.dcms.uscg.mil/ppc/adv/" },
        ],
        source: "Service personnel centers",
      },
      {
        name: "The 20-year letter — Notification of Eligibility for Retired Pay",
        body: "When you complete 20 qualifying years, your service must send you the Notification of Eligibility (NOE) for Retired Pay — the “20-year letter.” It is your proof that retired pay is earned and waiting; by law it arrives within one year of your completing the 20 qualifying years (Army: within 1 year, before discharge/transfer to the Retired Reserve). Verified issuers: Army Reserve — HRC (Guard: tracked with your state RPAM Administrator; the NOE posts to iPERMS); Navy — PERS-912 (mailed to your address on file); Marine Corps — CMC (MMSR-5). Two clocks start with this letter: (1) retired pay is not automatic — you must apply for it when you reach pay eligibility (Army members can apply up to 9 months ahead and should apply at least 90 days before the pay date); (2) you have 90 days from receipt to make your RCSBP election (DD Form 2656-5) — decline for now, deferred annuity, or immediate annuity — detailed in the Retirement Hub. Keep the letter with your records permanently, and keep DFAS updated with a current address during the gray area.",
        who: "Members approaching 20 qualifying years; anyone who believes a letter is overdue (check your address on file first — NOEs mail to the address in the personnel system).",
        flag: "Air Force (ARPC) and Coast Guard (PSC/RPM) issuance is the expected pattern but was not confirmed on an official page in the pack's research session — if your letter is late, ask your personnel center under the name “Notification of Eligibility.”",
        links: [{ label: "Navy Reserve retirement page (NOE + RCSBP clocks)", url: "https://www.navyreserve.navy.mil/Onboarding/Retirement/" }],
        source: "Service personnel centers / Navy Reserve",
      },
      {
        name: "The gray area and the reduced pay age",
        body: "DFAS's definition, verbatim: “Gray Area Retirees are members who served in the Guard or Reserve, are qualified for retired pay, and have retired from their service (stopped drilling) but are not yet at the age where they can start receiving retired pay. The time between their retirement from the service and the date when they are eligible to begin receiving retired pay is the 'gray area.'” Retired pay normally starts at age 60. The one reduction: for qualifying active service performed after January 28, 2008 — service under named Title 10 authorities (DFAS lists §§688, 12301(a), 12302, 12304, 12304b, 12305, 12406 and ch. 15 insurrection duty, plus §12301(d)) — the age-60 requirement drops by three months for each cumulative 90 days of that service in a fiscal year (90-day periods may cross fiscal years after Sep. 30, 2014), down to a floor of age 50. DFAS's printed catches: AGR duty under §12310 does not count; certain Presidentially/Secretary-authorized Title 32 §502(f) Guard service may count, with state verification; the provision is not retroactive; and your branch — not DFAS — determines your creditable service and your exact reduced age. Gray-area practicalities: you can open a basic DFAS “Future Retiree” myPay account to keep your contact information current while you wait; gray-area health care is TRICARE Retired Reserve (purchased) until 60, when retiree TRICARE begins — and reduced-age pay does not move the health-care age, which stays 60.",
        who: "From the day you stop drilling until your first retired paycheck; anyone estimating a reduced pay age from mobilization time.",
        flag: "Date-boundary flag: official DFAS pages phrase the window as both “after January 28, 2008” and “on or after January 29, 2008” — the 90-days = 3-months mechanics and the age-50 floor are consistent everywhere; let your branch fix your exact start line.",
        links: [{ label: "DFAS Gray Area Retirees (Army page)", url: "https://www.dfas.mil/retiredmilitary/plan/gray-area-retirees/army-gray-area-retirees/" }],
        source: "DFAS",
      },
      {
        name: "Run your own numbers — official calculators only",
        body: "This hub estimates nothing for you. The official routes: DoD Compensation's BRS Calculator, which DoD states “can be used for both regular retirement calculations and Reserve Component calculations, to include AGR,” from the Calculators hub at militarypay.defense.gov (no identifying data is requested or retained), and the Army's personalized MyArmyBenefits retirement calculator (myAuth/CAC login; it can pre-fill your own data). Any calculator output is an estimate built on the points you feed it — garbage points in, garbage estimate out, which is why verifying your points statement comes first.",
        who: "Career planning at the 10-, 15-, and 20-year marks — after verifying your points statement.",
        flag: "There is no DFAS-hosted reserve retired-pay calculator — DFAS publishes the pay tables and later pays the retired pay; if a page or person points you to a “DFAS calculator,” you're in the wrong place.",
        links: [
          { label: "DoD calculators hub", url: "https://militarypay.defense.gov/Calculators.aspx" },
          { label: "BRS standalone calculator", url: "https://militarypay.defense.gov/Calculators/Blended-Retirement-System-Standalone-Calculator/" },
        ],
        source: "DoD Compensation",
      },
    ],
  },
  {
    title: "Mobilization & activation basics",
    entries: [
      {
        name: "The three duty statuses (Guard members especially)",
        body: "The National Guard's official fact sheet: “Generally, there are three types of duty statuses in which National Guard members serve: Title 10, Title 32 and State Active Duty.” Title 10 (federal status): activated for federal service — federally controlled and federally funded, in “an equivalent active-duty status” to active-component counterparts; federal pay, TRICARE, and a DD214. Title 32 (federal-state status): under the command and control of your governor, but federally funded and regulated — ordinary drill and annual training are Title 32, and most full-time Guard cadre, including most AGRs, serve in Title 32. State Active Duty (state status): the governor activates you as state militia for state missions — you are a state employee for the tour; “Pay and benefits are determined by state law, and Guard members are not eligible for federal pay or benefits” on State Active Duty. Federal-component reservists serve essentially all their duty in Title 10 statuses. Which status your orders cite decides your pay source, your health coverage, your points, and which protections apply — read it before you sign anything.",
        who: "Every Guard member comparing order types; any reservist whose pay or TRICARE didn't change the way they expected (wrong status is a common cause).",
        links: [{ label: "NGB Fact Sheet — National Guard Duty Statuses", url: "https://www.nationalguard.mil/Portals/31/Resources/Fact%20Sheets/NGB-Fact-Sheet-Duty-Status-Reference-FINAL.pdf" }],
        source: "National Guard Bureau",
      },
      {
        name: "The call-up authorities, by name — §12304a disaster vs. §12304b preplanned",
        body: "When orders come, they cite one of these. Caps and durations are from the statute text on uscode.house.gov/govinfo — one line each, at reference level:",
        bullets: [
          "10 U.S.C. §12301(a) — Full mobilization: in time of war or national emergency declared by Congress, any reserve component member may be ordered to active duty without consent for the duration of the war/emergency plus six months. No numerical cap in the subsection.",
          "10 U.S.C. §12302 — Partial mobilization: in a national emergency declared by the President, Ready Reserve members may be ordered to active duty without consent for up to 24 consecutive months; no more than 1,000,000 Ready Reserve members at any one time.",
          "10 U.S.C. §12304 — Presidential Reserve Call-up: when the President determines it necessary to augment the active forces for a named operational mission, Selected Reserve members (and designated essential IRR members) may be ordered up without consent for up to 365 consecutive days; caps of 200,000 total under the section, of whom no more than 30,000 IRR.",
          "10 U.S.C. §12304a — Disaster/emergency response (federal reserves): when a governor requests federal assistance for a major disaster or emergency, the Secretary of Defense may order Army, Navy, Marine Corps, and Air Force Reserve members (the statute does not name the Guard) to active duty for up to 120 days.",
          "10 U.S.C. §12304b — Preplanned missions: a service Secretary may order Selected Reserve units to active duty without consent for preplanned missions in support of a combatant command, up to 365 consecutive days, with no more than 60,000 members under the section at once; missions must be funded in the defense budget. (12304b orders are the ones TRICARE's TAMP and early-eligibility pages call “preplanned missions.”)",
          "10 U.S.C. §12301(d) — Voluntary orders: a designated authority may order a reservist to active duty, or retain them, with the member's consent — the everyday voluntary-orders authority (governor consent rules apply for Guard members).",
          "32 U.S.C. §502(f) — Full-time National Guard duty: the Title 32 authority for Guard duty beyond required drills and field exercises, including support of operations and missions — the statutory home of AGR duty and the §502(f) orders named in the TAMP entry.",
        ],
        who: "Read the authority line on any set of orders before anything else — it drives duration, involuntariness, benefits triggers, and your employer-notice obligations.",
        links: [
          { label: "§12301 — govinfo", url: "https://www.govinfo.gov/content/pkg/USCODE-2020-title10/html/USCODE-2020-title10-subtitleE-partII-chap1209-sec12301.htm" },
          { label: "§12302 — uscode.house.gov", url: "https://uscode.house.gov/us/usc/119-124/t10/s12302/" },
          { label: "§12304 — uscode.house.gov", url: "https://uscode.house.gov/us/usc/119-121/t10/s12304/" },
          { label: "§12304a — uscode.house.gov", url: "https://uscode.house.gov/us/usc/t10/s12304a/" },
          { label: "§12304b — usc-cdn.house.gov", url: "https://usc-cdn.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section12304b&num=0&edition=prelim" },
        ],
        source: "10 U.S.C. §§12301–12304b (statute text)",
      },
      {
        name: "When orders arrive — the first moves (routing entry)",
        body: "This hub deliberately does not duplicate three playbooks that live elsewhere in the app: (1) Employer notice — tell your civilian employer promptly and keep the notice provable; the full USERRA notice rules, reemployment deadlines, and escalation routes are in Know Your Rights. (2) Family readiness — DEERS accuracy, family care plan, powers of attorney, and dependent ID cards before you report: Family & Life Events, the Family Care Plan & Deployment Readiness section, and the Spouse Hub. (3) Money and coverage transitions — your pay status changes (orders of 30+ days move you to monthly active-duty pay on the 1st/15th cycle), your TRICARE flips (family enrollment inside 90 days), SGLI continues, and your MGIB-SR clock extends. The unit-level checklist — reporting instructions, SRP processing, orders amendments — comes from your unit and your orders themselves; no app entry substitutes for them.",
        who: "The first 72 hours after notification, and again at demobilization (the TAMP/TRS sequence runs in reverse).",
        links: [],
        source: "Routing entry — see Know Your Rights and Family Care Plan & Deployment Readiness",
      },
    ],
  },
  {
    title: "Reserve-specific programs",
    entries: [
      {
        name: "MGIB-SR — the Montgomery GI Bill, Selected Reserve (Chapter 1606)",
        body: "Chapter 1606 is the Selected Reserve's own GI Bill: up to 36 months of education and training benefits for members of the Army, Navy, Air Force, Marine Corps, and Coast Guard Reserve and the Army and Air National Guard. VA's eligibility, in structure: one of — a 6-year service obligation in the Selected Reserve, or officer status with 6 years agreed in addition to an initial obligation (obligation must have started after June 30, 1985); and all of — you complete your initial active duty for training (IADT), you earn a high school diploma or equivalent before finishing IADT, and you stay in good standing in an active Selected Reserve unit. (Disability separation not caused by misconduct preserves eligibility.) Your unit issues your Notice of Basic Eligibility (DD Form 2384-1) and codes your eligibility into DoD's system — no NOBE, no benefit. The delimiting rule that surprises people: eligibility usually ends the day you leave the Selected Reserve. VA's exceptions — a 14-year window from your first 6-year obligation if you separated for a non-misconduct disability, or if your unit was deactivated or you were involuntarily separated between Oct. 1, 2007 and Sep. 30, 2014. Mobilization extends the clock: VA extends eligibility by your mobilized time plus 4 months, and that extension survives leaving the Selected Reserve. Service-run kickers can add to the monthly amount — VA notes their existence only; amounts and rules are your component's.",
        who: "Every Selected Reserve member with a 6-year obligation — use it while drilling; the benefit largely dies with your drilling status.",
        flag: "Current rate (VA rate table, October 1, 2026 – September 30, 2027): full-time enrollment $508.00 per full month, paid directly to you (75%: $408.00; 50%: $253.00; less than 50%: $127.00). VA rates reset each October 1 — older figures circulating online ($493 and below) are prior-year rates.",
        links: [
          { label: "VA MGIB-SR eligibility", url: "https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/" },
          { label: "VA MGIB-SR rates", url: "https://www.va.gov/education/benefit-rates/montgomery-selected-reserve-rates/" },
        ],
        source: "VA",
      },
      {
        name: "SGLI while drilling — full-time coverage for drilling units",
        body: "VA's rule: you are eligible for full-time SGLI coverage if you're a member of the Ready Reserve or National Guard assigned to a unit and scheduled to perform at least 12 periods of inactive training per year — VA's insurance guidance describes full-time coverage as in effect 24 hours a day, 365 days a year, on and off duty. That includes members drilling for points rather than pay: if you're in nonpay status but scheduled for the 12 periods, you qualify for full-time coverage and pay your premiums directly. Members who don't qualify for full-time coverage get part-time coverage: insured during the actual days of active duty / active duty for training on orders of less than 31 days, during the actual time of an inactive-duty training period, and while proceeding directly to and returning directly from that duty. Coverage runs to the program maximum of $500,000 (in $50,000 increments), with automatic enrollment for eligible members. On separation, SGLI carries 120 days of free coverage, and you may apply for VGLI within 1 year and 120 days of discharge for up to the amount you held.",
        who: "Every drilling member — confirm your coverage amount and beneficiary (SGLV 8286) before you need it, especially if you're drilling for points and owe premiums directly.",
        flag: "Premium basis (VA, current page): 5 cents per $1,000 of coverage per month, plus $1/month for TSGLI — $500,000 costs $26.00/month — deducted from pay for drilling members.",
        links: [{ label: "VA SGLI eligibility & premiums", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/" }],
        source: "VA",
      },
      {
        name: "IDT travel reimbursement — the long-commute program (IDT-TRP)",
        body: "If you travel a long way to drill, a statutory program may repay part of the trip. Authority: 37 U.S.C. §452(b)(9) covers inactive-duty training performed outside the normal commuting distance of the member's permanent residence; the program runs through the Joint Travel Regulations (par. 032304) as the IDT Travel Reimbursement Program (IDT-TRP). Current JTR shape (DTMO): “outside the local commuting distance” means not less than 150 miles one way (by the Defense Table of Official Distances), and the DoD reimbursement cap is $750 per round trip — raised from $500 effective December 27, 2024. Eligibility is narrow by design: it targets Selected Reserve members in critically short skills, or assigned to units or pay grades with critical staffing shortages, and DTMO states it plainly — “It is not an entitlement; it is a discretionary reimbursement program subject to command funding.” Members traveling under an approved service program are in official-travel status for the trip.",
        who: "Selected Reserve members commuting 150+ miles to drill — ask before assuming a long commute is entirely out of pocket.",
        flag: "⚠ CONFLICT — IDT TRAVEL CAP: the JTR/DTMO DoD cap is $750 per round trip since December 27, 2024, but the Coast Guard Reserve's FY25 IDT-TRP guide and the Navy Reserve's IDT-R program still publish a $500 per-round-trip cap (Navy: home of record 150+ miles from an eligible billet, qualifying rating/billet/unit, up to 12 reimbursed round trips per fiscal year). Air Force Reserve has adopted the $750 cap and broadened eligibility (E-1 through E-7 focus); the Army Reserve's official incentives sheet confirms its program exists as a partial transportation reimbursement run through your unit IDT-TRP coordinator, without publishing its own distance/cap figures. Your component's current program page and your unit coordinator are the authority for your trip — not the JTR cap alone.",
        links: [
          { label: "DTMO IDT paper (150 miles / $750 / not an entitlement)", url: "https://media.defense.gov/2026/Jul/30/2003972100/-1/-1/1/INACTIVE%20DUTY%20TRAINING%20(IDT)%2007-29-26.PDF" },
          { label: "Coast Guard Reserve IDT-TRP guide", url: "https://www.reserve.uscg.mil/Portals/2/Resources/IDT-TRP%20Guide%20-%20FY25%20v2%20(2024-10-17).pdf" },
          { label: "Navy Reserve IDT-R", url: "https://www.navyreserve.navy.mil/News/Article-View-News/Article/2569251/" },
        ],
        source: "DTMO / Joint Travel Regulations par. 032304",
      },
      {
        name: "Cross-link: USERRA paid leave — vacation and annual leave are yours to elect, for drills and orders alike",
        body: "In Know Your Rights: your employer must let you — on your request — use accrued vacation, annual, or similar paid leave during a period of service so your civilian pay continues, and may not require you to use it (20 CFR §1002.153; sick leave is treated separately). The full entry is in Know Your Rights, USERRA group, beside the USERRA five-conditions entry — summarized here so drill-weekend and orders-related searches land on it.",
        who: "Every drilling member and every member called to orders with a civilian job.",
        links: [],
        source: "Cross-link → Know Your Rights (USERRA group)",
      },
      {
        name: "Cross-link: drill-weekend child care — Air Force Home Community Care, and the WDCC initiative",
        body: "In Family & Life Events (“Drill-weekend care — two published programs, neither of them DoD-wide”): Air Force Expanded FCC Home Community Care covers an ANG/AFR member in IDT drill-period status with no one else available at home, up to 12 hours per day; Weekend Drill Child Care (WDCC) is an officially endorsed Army National Guard initiative administered by Upwards (drill weekends, 6 AM–6 PM, ages 6 weeks to 12 years — verified at flyer level, availability by state not asserted). For everyone else the route is FCC flexible hours and hourly care where an installation offers weekend hours. Summarized here so “drill weekend” lands on it; the full entry with flags and links is in Family & Life Events.",
        who: "Drilling parents — especially ANG/AFR and ARNG members.",
        links: [],
        source: "Cross-link → Family & Life Events (Childcare & School group)",
      },
      {
        name: "Cross-link: tuition assistance for Guard & Reserve — CA, Federal TA, and State TA routing",
        body: "In Education & Skills (“Tuition help for Guard & Reserve members”): Federal Tuition Assistance (up to $250 per semester hour, $4,500 per fiscal year, via ArmyIgnitED for Army National Guard) and State Tuition Assistance — your state's program, found via the State Benefits Finder card for the state where you serve. Credentialing Assistance is in that tile too. Summarized here so Guard tuition searches land on them from either door.",
        who: "Guard and Reserve members considering school while drilling.",
        links: [],
        source: "Cross-link → Education & Skills (Tuition help for Guard & Reserve members)",
      },
      {
        name: "Coming change: the 50-mile statute (January 1, 2027) — law signed, implementation not yet published",
        body: "The FY2025 NDAA (§623) added 37 U.S.C. §452(j), which reads very differently from the current program: a member who travels more than 50 miles from their permanent residence for inactive-duty training or muster duty “shall be provided” actual travel and transportation expenses plus meals and incidentals. The U.S. Code's amendment note states the provision applies to travel on or after January 1, 2027. As of this research, however, the operative published system is still the discretionary JTR IDT-TRP (150-mile floor, $750 DoD cap, component programs below it), and no official JTR change or service implementation guidance for §452(j) was found. Do not plan a commute around the 50-mile rule yet — watch your component's program page and the JTR changes page, and expect this entry to be rewritten when implementation publishes.",
        who: "Anyone choosing a unit or a home address based on drill travel, from 2027 onward.",
        links: [
          { label: "37 U.S.C. §452 (incl. subsection (j))", url: "https://uscode.house.gov/us/usc/119-121/t37/s452/" },
          { label: "DTMO JTR changes", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/Changes/" },
        ],
        source: "37 U.S.C. §452(j) / DTMO",
      },
    ],
  },
);
