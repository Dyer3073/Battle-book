// First Year Out — the guided transition path, 12 months before
// separation to 12 months after. Content source of truth: the
// research pack at
// ~/workspace/military-app/emergency-firstyear/emergency-firstyear.md
// (Part B, researched Nov 9, 2026). The path SEQUENCES and POINTS —
// every task deep-links to the existing section the pack names and
// duplicates none of that section's content. Deadlines print ONLY as
// published, with the owner named. Where official sources disagree,
// both print where the pack flags a conflict (Flag B-3, the retiree
// final move, was resolved in the final phase — see the B-3 note on
// task 30: the current JTR gives 3 years to begin for terminations
// on/after 24 June 2022; the Air Force fact sheet's 1 year was the
// pre-change rule — the transportation office controls). TAMP prints for eligible categories only, with
// the routine-voluntary-ETS exclusion printed on the spine and on
// its tasks.
//
// HARD RULE (pack Flag A-6): no Military OneSource phone number
// appears anywhere in this path — the pack deliberately withheld it.

export type FirstYearPhaseKey = "p1" | "p2" | "p3" | "p4" | "p5";

export const FIRSTYEAR_PHASES: { key: FirstYearPhaseKey; label: string; span: string }[] = [
  { key: "p1", label: "Phase 1 — 12 to 6 months out", span: "Start the machine" },
  { key: "p2", label: "Phase 2 — 6 to 1 months out", span: "File the claims" },
  { key: "p3", label: "Phase 3 — Final 90 days", span: "Close out clean" },
  { key: "p4", label: "Phase 4 — First 90 days home", span: "Land soft" },
  { key: "p5", label: "Phase 5 — Months 4 to 12", span: "The clocks that close" },
];

export type FirstYearTask = {
  /** Pack task number, 1–31. */
  n: number;
  phase: FirstYearPhaseKey;
  title: string;
  what: string;
  /** Deadline / window exactly as published ("" = ordering guidance only). */
  when: string;
  where: string;
  source: string;
  linkView: string;
  linkLabel: string;
  /** True for the pack's 15 deadline-bearing tasks. */
  clock?: boolean;
  flag?: string;
};

export const FIRSTYEAR_CHECKLIST_ID = "first-year-out";

/** The deadline spine, as published — printed at the top of the path. */
export const FIRSTYEAR_SPINE: { title: string; lines: string[] }[] = [
  {
    title: "TAP — begin no later than 365 days out",
    lines: [
      "TAP must begin no later than 365 days before the anticipated separation/retirement date; members may begin up to 24 months before separation (retirees up to 24 months), and starting 18 months out is recommended. [Installation TAP pages under DoDI 1332.35 — JBSA; Whiteman AFB SFRC]",
    ],
  },
  {
    title: "Capstone — no later than 90 days out",
    lines: [
      "Capstone is completed no later than 90 days before separation, culminating in the DD Form 2648 signed by member and commander. [Installation TAP pages; MCAS Beaufort MCCS TAP page]",
    ],
  },
  {
    title: "BDD — file 90–180 days out",
    lines: [
      "VA Benefits Delivery at Discharge claims must be filed 90–180 days before separation, with the member available for VA exams for 45 days after filing. [VA Form 21-526EZ instructions (Jan 2026 ed.); VA.gov BDD page]",
    ],
  },
  {
    title: "TRICARE end / TAMP 180 days — eligible categories only",
    lines: [
      "TRICARE eligibility normally ends at 11:59 p.m. on the last day of active duty. [tricare.mil, Separating from Active Duty]",
      "TAMP: 180 days of premium-free TRICARE (Transitional Assistance Management Program) — for eligible categories only: involuntary separation under honorable conditions, certain Reserve component members separated after activation of more than 30 days for a contingency operation, sole survivorship, members who agree to join the Selected Reserve the day after separation, and other published categories. Routine voluntary ETS does not qualify. [tricare.mil TAMP page]",
      "CHCBP: after TAMP (or ineligibility), the Continued Health Care Benefit Program is purchasable coverage; the application deadline is within 60 days after TRICARE/TAMP ends. Separating members who want TRICARE Select or another plan must enroll — coverage is not automatic. [tricare.mil]",
    ],
  },
  {
    title: "SGLI day-120 · VGLI 240 days / final deadline 1 year + 120 days",
    lines: [
      "SGLI coverage itself continues free for 120 days after separation, and SGLI can instead be converted to an individual commercial permanent policy in that same 120 days without a health exam. [VA.gov, Convert SGLI Policy]",
      "VGLI: apply within 240 days of leaving service and no health questions are asked; pay the first premium with the application. Applications are accepted up to the final deadline of 1 year + 120 days after separation (with Evidence of Insurability beyond the 240-day mark). [DoD/VA VGLI benefit fact sheet, Office of Personnel and Readiness; VA.gov]",
    ],
  },
  {
    title: "UCX — file as soon as possible",
    lines: [
      "Unemployment Compensation for Ex-Servicemembers (UCX): file with the state workforce agency where you are physically present, as soon as possible after discharge — benefit weeks generally only run forward from filing. Amount and weeks are set by that state's law under the federal UCX program (5 U.S.C. §8521; 20 CFR Part 614); bring DD214 Member 4. No federal dollar figures exist — by design (pack Flag B-6).",
    ],
  },
  {
    title: "IRR — the 8-year MSO runs past separation",
    lines: [
      "Your 8-year military service obligation (10 U.S.C. §651) may run past your separation date; if you're in the IRR, keep your address current with your service and answer muster orders. Obligation dates are on your enlistment contract / DD214. Deep link: Reenlistment & IRR.",
    ],
  },
];

/** Flag B-3 — printed both ways, attributed both ways, unresolved. */
export const FIRSTYEAR_B3_FLAG =
  "✓ CORRECTED — pack Flag B-3, resolved in the final phase (Nov 10, 2026). The current JTR (par. 051003, quoted verbatim in an official Air Force board decision) gives the retiree 3 years from active-duty termination to BEGIN travel to the home of selection (HOS), for terminations effective on or after 24 June 2022; the DD Form 3156 HOS counseling form (Feb 2023) likewise states travel completed and HHG turned over within three years, with extensions in 1-year increments through the Secretarial Process — never past 6 years total; non-temporary storage still ends at 1 year. The Air Force Benefits Fact Sheet's “completed within one year” was the rule for terminations BEFORE 24 June 2022. Your transportation office — and the window on your orders — controls.";

export const FIRSTYEAR_TASKS: FirstYearTask[] = [
  // ── PHASE 1 — 12 to 6 months out (6) ──────────────────────────────
  {
    n: 1, phase: "p1", clock: true,
    title: "Begin TAP: initial counseling + pre-separation counseling; build your Individual Transition Plan (ITP)",
    what: "Initial counseling and Individualized Initial Counseling and Pre-Separation Counseling at your Installation TAP Center (or the TAP virtual curriculum); leave with your Individual Transition Plan (ITP) started.",
    when: "⏰ Begin no later than 365 days before separation; retirees may start up to 24 months out; 18 months recommended.",
    where: "Installation TAP Center / TAP virtual curriculum",
    source: "DoDI 1332.35 as published by JBSA / Whiteman AFB TAP pages (pack Flag B-1: publication-level, not instruction-level)",
    linkView: "transition", linkLabel: "Transition & Jobs",
  },
  {
    n: 2, phase: "p1",
    title: "Choose your TAP track and register for the 2-day track class",
    what: "Employment, education, vocational, or entrepreneurship — the track is chosen after initial counseling and the 2-day track class is scheduled by your TAP Center.",
    when: "Scheduled by your TAP Center after initial counseling.",
    where: "TAP Center",
    source: "Installation TAP pages",
    linkView: "transition", linkLabel: "Transition & Jobs",
  },
  {
    n: 3, phase: "p1",
    title: "Pull and read your service treatment records; list every condition you'll claim",
    what: "Read your records now, list every condition you will claim, and get seen for anything undocumented — this list is what the BDD claim in Phase 2 is built from.",
    when: "Feeds the BDD window in Phase 2 (90–180 days out).",
    where: "Military treatment facility / records office",
    source: "Pack Part B, Phase 1",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 4, phase: "p1",
    title: "Build the money picture while income is steady",
    what: "Final-paycheck timing, terminal-leave balance, the sell-back option, a 6-month budget — and open the debt picture while income is steady, before Phase 2 deadlines crowd in.",
    when: "No statutory deadline — do it before Phase 2 deadlines crowd in.",
    where: "Personal finance / installation financial readiness",
    source: "Pack Part B, Phase 1",
    linkView: "pay", linkLabel: "Pay & Money",
  },
  {
    n: 5, phase: "p1",
    title: "Decide credentials: convert military training to civilian certifications while still funded",
    what: "Your branch COOL program funds credentialing while you are still on active duty; program rules vary — decide now, while the funding lane is open.",
    when: "While still on active duty (program rules vary).",
    where: "Branch COOL program",
    source: "Pack Part B, Phase 1",
    linkView: "cool", linkLabel: "Credentials for Your Job",
  },
  {
    n: 6, phase: "p1",
    title: "Housing decision: lease/barracks end-dates vs. separation date; VA home-loan education if buying",
    what: "Line up barracks/lease end-dates against your separation date so housing never gaps; if buying is the plan, start the VA home-loan education now — the Certificate of Eligibility (COE) can be pulled anytime.",
    when: "Lease/timing is personal; COE can be pulled anytime.",
    where: "VA.gov / installation housing office",
    source: "Pack Part B, Phase 1",
    linkView: "homeloan", linkLabel: "VA Home Loan Center",
  },
  // ── PHASE 2 — 6 to 1 months out (7) ───────────────────────────────
  {
    n: 7, phase: "p2", clock: true,
    title: "File your VA disability claim under BDD",
    what: "Benefits Delivery at Discharge: file on VA.gov or with an accredited VSO, with your service treatment records (task 3) behind every claimed condition.",
    when: "⏰ File 90–180 days before separation; you must be available for VA exams for 45 days after filing.",
    where: "VA.gov or accredited VSO",
    source: "VA Form 21-526EZ instructions (Jan 2026); VA.gov BDD page",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 8, phase: "p2", clock: true,
    title: "Attend your VA exams from the BDD claim",
    what: "Missing exams stalls the claim past separation. Attend every scheduled exam inside the availability window.",
    when: "⏰ Inside the 45-day availability window after filing.",
    where: "VA contract examiners",
    source: "VA Form 21-526EZ instructions (Jan 2026); VA.gov",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 9, phase: "p2", clock: true,
    title: "Complete Capstone: career-readiness standards review; DD Form 2648 signed",
    what: "The career-readiness standards review at your TAP Center; the DD Form 2648 is signed by you and your commander.",
    when: "⏰ No later than 90 days before final out.",
    where: "TAP Center + your command",
    source: "Installation TAP pages; MCAS Beaufort MCCS TAP page",
    linkView: "transition", linkLabel: "Transition & Jobs",
  },
  {
    n: 10, phase: "p2",
    title: "Schedule and complete your separation health assessment / final physical; get copies of everything",
    what: "Best inside the BDD window so the findings support the claim. Keep copies of the assessment and your records.",
    when: "Best inside the BDD window (90–180 days out).",
    where: "Military treatment facility",
    source: "Pack Part B, Phase 2",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 11, phase: "p2",
    title: "Submit terminal leave; decide leave vs. sell-back with your finance office",
    what: "The leave-vs-sell-back decision is made with your finance office, on your command's leave calendar. The pack deliberately prints no sell-back figure — it was not pulled from a DFAS/service finance source this pass (Flag B-2), so no number is asserted here.",
    when: "Per your command's leave calendar (local rule).",
    where: "Unit admin / finance",
    source: "Pack Part B, Phase 2 (Flag B-2)",
    linkView: "pay", linkLabel: "Pay & Money",
  },
  {
    n: 12, phase: "p2",
    title: "Book final move counseling: DPS (move.mil), HHG pickup dates, storage (NTS) decision",
    what: "Move counseling through the transportation office / DPS (move.mil): HHG pickup dates and whether you'll use non-temporary storage (NTS). Storage and move windows run from the separation date — see the Phase 4/5 clocks.",
    when: "Storage and move windows run from the separation date — see Phase 4/5 clocks.",
    where: "Transportation office / move.mil",
    source: "Pack Part B, Phase 2",
    linkView: "pcs", linkLabel: "PCS Move Center",
  },
  {
    n: 13, phase: "p2",
    title: "SGLI decision on paper: how much VGLI you'll take, beneficiaries, premium budget",
    what: "Decide before separation, on paper: how much VGLI you'll take, who the beneficiaries are, and the premium budget. The clocks open at separation (the 240-day no-questions clock starts on your separation date).",
    when: "Windows open at separation (the 240-day no-questions clock starts on your separation date).",
    where: "VA.gov / OSGLI",
    source: "DoD/VA VGLI benefit fact sheet",
    linkView: "benefits", linkLabel: "Benefits",
  },
  // ── PHASE 3 — Final 90 days (4) ───────────────────────────────────
  {
    n: 14, phase: "p3",
    title: "Verify your DD214 worksheet line by line before it's final",
    what: "Dates, awards, characterization, RE code — line by line, before final out-processing. Corrections after separation go through a board, not an office.",
    when: "Before final out-processing.",
    where: "Installation transition point / admin",
    source: "Pack Part B, Phase 3",
    linkView: "records", linkLabel: "Your Records & DD214",
  },
  {
    n: 15, phase: "p3", clock: true,
    title: "Retirees: TRICARE enrollment for retirement — coverage is not automatic",
    what: "Choose and enroll in your retiree plan so coverage starts the day after retirement. Retiree coverage is not automatic.",
    when: "⏰ Enroll within 90 days of the retirement date (qualifying life event window as published by TRICARE).",
    where: "tricare.mil / regional contractor",
    source: "TRICARE published qualifying-life-event framing (pack Flag B-5)",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 16, phase: "p3", clock: true,
    title: "Separating (not retiring): confirm in writing whether you are TAMP-eligible",
    what: "If yes, note your TAMP end date (180 days). If no — routine voluntary ETS does not qualify — price CHCBP/marketplace coverage to start the day after your last duty day. The CHCBP application deadline is within 60 days after TRICARE/TAMP ends.",
    when: "⏰ TRICARE ends 11:59 p.m. on your last duty day; CHCBP application within 60 days after coverage ends.",
    where: "DEERS / tricare.mil",
    source: "tricare.mil — Separating from Active Duty / TAMP / CHCBP (pack Flag B-5)",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 17, phase: "p3",
    title: "Final out: DD214 Member Copy 4 in hand; gear/CAC turned in; copies saved in two places",
    what: "Receive your DD214 Member Copy 4, turn in gear/CAC, final finance appointment; save digital copies of DD214, orders, and medical records in two places.",
    when: "Separation date.",
    where: "Transition point",
    source: "Pack Part B, Phase 3",
    linkView: "records", linkLabel: "Your Records & DD214",
  },
  // ── PHASE 4 — First 90 days home (7) ──────────────────────────────
  {
    n: 18, phase: "p4", clock: true,
    title: "Apply for VGLI — the first 240 days carry no health questions",
    what: "You can apply immediately after separation. Pay the first premium with the application.",
    when: "⏰ Clock started at separation: 240 days no-questions; absolute end 1 year + 120 days.",
    where: "VA.gov / OSGLI",
    source: "DoD/VA VGLI benefit fact sheet",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 19, phase: "p4", clock: true,
    title: "Enroll in VA health care (Form 10-10EZ)",
    what: "Online, by phone at 877-222-8387, or in person. You can apply any time — but combat veterans of a theater of combat operations (service after Nov 11, 1998) get 10 years of enhanced eligibility from discharge; enroll inside the window and you keep eligibility under it.",
    when: "⏰ 10-year enhanced window for combat veterans; no deadline for general enrollment.",
    where: "VA.gov / VA medical center",
    source: "VA.gov health care eligibility",
    linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    n: 20, phase: "p4", clock: true,
    title: "If you're not working, file for unemployment (UCX) — as soon as possible",
    what: "File with the state workforce agency where you are physically present; bring DD214 Member 4. Amount and weeks are set by that state's law under the federal UCX program (5 U.S.C. §8521; 20 CFR Part 614) — no federal dollar figures exist, by design (Flag B-6).",
    when: "⏰ “As soon as possible” as published; no federal filing deadline, but delay can forfeit weeks — benefit weeks generally only run forward from filing.",
    where: "State workforce agency",
    source: "5 U.S.C. §8521; 20 CFR Part 614 (pack Flag B-6)",
    linkView: "transition", linkLabel: "Transition & Jobs",
  },
  {
    n: 21, phase: "p4",
    title: "Confirm VA.gov access and direct deposit so compensation pays without paper checks",
    what: "Register/confirm your VA.gov access and direct deposit so disability compensation (from your BDD claim) pays without paper checks, at the first VA payment.",
    when: "At first VA payment.",
    where: "VA.gov / DFAS",
    source: "Pack Part B, Phase 4",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 22, phase: "p4",
    title: "Store the DD214 — original fireproof; certified copies for employers/schools",
    what: "If it's ever lost, the retrieval routes are eVetRecs (National Archives) and milConnect (for records in DMDC custody).",
    when: "Any time.",
    where: "archives.gov / milconnect.dmdc.osd.mil",
    source: "VA/service guidance level (pack Flag B-7)",
    linkView: "records", linkLabel: "Your Records & DD214",
  },
  {
    n: 23, phase: "p4",
    title: "Know your IRR obligation status — the 8-year MSO may run past separation",
    what: "Your 8-year military service obligation (10 U.S.C. §651) may run past your separation date; if you're in the IRR, keep your address current with your service and answer muster orders. Obligation dates are on your enlistment contract / DD214.",
    when: "Obligation dates are on your enlistment contract / DD214.",
    where: "Service personnel command",
    source: "10 U.S.C. §651",
    linkView: "reenlist", linkLabel: "Reenlistment & IRR",
  },
  {
    n: 24, phase: "p4",
    title: "Final move, part 1: take HHG delivery; note your storage end date now",
    what: "Take HHG delivery; if you used non-temporary storage, note your storage end date now — the Phase 5 clocks (task 26) run from separation.",
    when: "Storage clocks run from separation.",
    where: "move.mil / transportation office",
    source: "Pack Part B, Phase 4",
    linkView: "pcs", linkLabel: "PCS Move Center",
  },
  // ── PHASE 5 — Months 4 to 12 (7) ──────────────────────────────────
  {
    n: 25, phase: "p5", clock: true,
    title: "Day-120 marks: free SGLI coverage ends; last day to convert SGLI without proof of good health",
    what: "(a) Free post-separation SGLI coverage ends; (b) last day to convert SGLI to an individual commercial permanent policy without proof of good health.",
    when: "⏰ 120 days after separation.",
    where: "OSGLI / participating insurers via VA",
    source: "VA.gov — Convert SGLI Policy",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 26, phase: "p5", clock: true,
    title: "Day-180 marks: TAMP ends (if eligible); NTS storage ends; HHG-shipment request deadline",
    what: "(a) TAMP ends (if you were eligible) — CHCBP/marketplace coverage must start the next day; the CHCBP application was due within 60 days after TAMP/TRICARE ended, so decide before day 180, not after. (b) Separating members: non-temporary storage ends at day 180 and the written HHG-shipment request deadline falls at separation +180 days for members separating without severance/separation pay.",
    when: "⏰ 180 days after separation.",
    where: "tricare.mil / transportation office",
    source: "tricare.mil; MyArmyBenefits NTS rule; JTR Ch. 5 (see the B-3 correction note on task 30)",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 27, phase: "p5", clock: true,
    title: "Day 240: the VGLI no-health-questions window closes",
    what: "After today, applying for VGLI needs Evidence of Insurability (medical underwriting).",
    when: "⏰ 240 days after separation.",
    where: "VA.gov / OSGLI",
    source: "DoD/VA VGLI benefit fact sheet",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 28, phase: "p5", clock: true,
    title: "1-year VA claim effective-date rule — the last high-value deadline if you didn't file BDD",
    what: "A VA disability claim filed within 1 year of separation can be effective the day after separation; file later and the effective date is the filing date.",
    when: "⏰ 1 year after separation.",
    where: "VA.gov / VSO",
    source: "VA published effective-date rules (pack Flag B-4)",
    linkView: "claims", linkLabel: "VA Claims & Free Help",
  },
  {
    n: 29, phase: "p5", clock: true,
    title: "Final VGLI deadline: 1 year + 120 days after separation",
    what: "After this date VGLI is gone as an option.",
    when: "⏰ 1 year + 120 days after separation.",
    where: "VA.gov / OSGLI",
    source: "DoD/VA VGLI benefit fact sheet",
    linkView: "benefits", linkLabel: "Benefits",
  },
  {
    n: 30, phase: "p5", clock: true,
    title: "Retiree / home-of-selection final move window — 3 years to begin (B-3 corrected)",
    what: "Current JTR (par. 051003, quoted verbatim in an official Air Force board decision): begin travel to your home of selection within 3 years of active-duty termination — for terminations effective on or after 24 June 2022. DD Form 3156 (the HOS counseling form, Feb 2023): travel completed and HHG turned over within three years; extensions in 1-year increments through the Secretarial Process, never past 6 years total; non-temporary storage still ends at 1 year. The Air Force Benefits Fact Sheet's “completed within one year” was the pre-24-Jun-2022 rule. Separating members: see task 26 (180 days). Your transportation office — and the window on your orders — controls.",
    when: "⏰ 3 years from retirement to begin the HOS move (terminations on/after 24 Jun 2022). Your transportation office controls.",
    where: "Transportation office (controlling)",
    source: "JTR par. 051003 (verbatim in an official AF BCMR decision); UTD for MAP 32-24 (JTR, Sep 1, 2024); DD Form 3156 (Feb 2023) — pack Flag B-3, corrected Nov 10, 2026",
    linkView: "pcs", linkLabel: "PCS Move Center",
    flag: FIRSTYEAR_B3_FLAG,
  },
  {
    n: 31, phase: "p5",
    title: "IRR hygiene for the rest of the obligation",
    what: "Address updates, muster attendance if ordered, and keep the DD214 + contract where you can reach them, for the duration of the MSO (10 U.S.C. §651).",
    when: "Duration of MSO (10 U.S.C. §651).",
    where: "Service personnel command",
    source: "10 U.S.C. §651",
    linkView: "reenlist", linkLabel: "Reenlistment & IRR",
  },
];
