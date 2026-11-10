// First 30 Days — the guided newcomer path. Content source of truth:
// the research pack at ~/workspace/military-app/first30/first30.md
// (researched Nov 9, 2026). The path SEQUENCES and POINTS — it never
// duplicates a linked section's content. Deadlines print ONLY as
// published, attributed: exactly four service-level hard clocks exist
// (travel voucher, TRICARE move-QLE, Navy INDOC, USMC Welcome Aboard);
// every other window is installation-published and labeled an EXAMPLE.
// Conflicts print as conflicts, never blended (ACT sunset, MCO
// 1320.11 F-vs-H, TRICARE's two 90-day anchors, the voucher's two
// wordings). MCO 1320.11H governs Marine sponsorship; the F version is
// flagged stale wherever it appears.

export type First30Tag = "ALL" | "SINGLE" | "FAMILY" | "EFMP" | "OCONUS" | "SPOUSE";
export type First30PhaseKey = "before" | "week1" | "weeks2to4" | "day30";

export const FIRST30_PHASES: { key: First30PhaseKey; label: string; span: string }[] = [
  { key: "before", label: "Before Arrival", span: "From sponsor contact / ~30 days out" },
  { key: "week1", label: "Week 1", span: "Days 1–7" },
  { key: "weeks2to4", label: "Weeks 2–4", span: "Days 8–29" },
  { key: "day30", label: "By Day 30", span: "Confirmations and the clocks that close" },
];

export type First30Task = {
  id: string;
  phase: First30PhaseKey;
  title: string;
  what: string;
  when: string;
  where: string;
  source: string;
  tags: First30Tag[];
  /** Deep link into the existing section the pack names for this task. */
  linkView: string;
  linkLabel: string;
  /** True for the 10 deadline-bearing tasks (pack count). */
  clock?: boolean;
  /** Printed ⚠ note — conflicts and do-not-universalize flags. */
  flag?: string;
};

export const FIRST30_CHECKLIST_ID = "first30-days";

export const FIRST30_TASKS: First30Task[] = [
  // ── BEFORE ARRIVAL (9) ────────────────────────────────────────────
  {
    id: "B-1", phase: "before", title: "Get your sponsor — or ask for one",
    what: "Every branch runs a sponsorship program. If a sponsor hasn't contacted you, use your branch's published route: Army — DA Form 5434 through the gaining unit / TASP; USMC — gaining-command Sponsorship Coordinator or MCCS IR&R with NAVMC 11799; Navy — the Command Sponsor Coordinator contact printed in your orders; Air / Space Force — gaining unit CSS, fallback M&FRC; Coast Guard — reporting unit / Work-Life TRM. See the Sponsorship panel below for the branch detail and the ACT sunset.",
    when: "As soon as you have assignment notification. Published anchors: Army units are not required to assign until 120 days prior to report date; a USMC sponsor owes a Welcome Aboard Letter within 10 business days of appointment.",
    where: "Your branch's sponsorship route (panel below)",
    source: "Pack §S-1–S-6 (AR 600-8-8; MCO 1320.11H; OPNAVINST 1740.3E; DAFI 36-3009; CG Work-Life)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "B-2", phase: "before", title: "Build your hand-carry packet — never pack it in household goods",
    what: "The garrison-published pattern: multiple copies of PCS orders + all amendments; approved absence request; CAC; medical and dental records if hand-carried; marriage certificate and birth certificates; travel receipts as they accumulate; POV shipment document if applicable. For school-age kids, USAG Italy's SLO framing adds a sealed copy of student records / IEP.",
    when: "Before the movers come.",
    where: "Your files — hand-carried",
    source: "MilitaryINSTALLATIONS check-in pages (Fort Riley; USAG Detrick) — examples, not one Army-wide list (pack Flag F-4)",
    tags: ["ALL"], linkView: "pcs", linkLabel: "PCS Move Center",
  },
  {
    id: "B-3", phase: "before", title: "Read your new installation's own check-in page",
    what: "MilitaryINSTALLATIONS publishes, per installation: Check-in Procedures, Sponsorship, Housing, Motor Vehicles, Shipping Pets, Legal Assistance, School Liaison, EFMP. Your base's page — not a generic list — carries its local deadlines (housing report windows alone range from 48 hours to 30 days across installations).",
    when: "Before departure.",
    where: "MilitaryINSTALLATIONS / My Installation",
    source: "MilitaryINSTALLATIONS per-installation topics (pack §B-3)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "B-4", phase: "before", title: "Know the two things you do NOT do before the move",
    what: "TRICARE, in substance verbatim: “Don't disenroll from any plan before you move. You're covered by your current plan on your way to your new location.” DEERS address updates happen AFTER you move — and that update is what starts the TRICARE clock (task W1-7).",
    when: "Before the move.",
    where: "TRICARE moving checklist",
    source: "TRICARE moving checklist (Edwards AFB TRICARE page)",
    tags: ["ALL", "FAMILY"], linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    id: "B-5", phase: "before", title: "Get on the childcare waitlist now",
    what: "Request childcare at MilitaryChildCare.com — access to military-operated childcare options worldwide (CDC + School Age Centers). USAG Italy's published advice: create the account and request care “as soon as possible… prior to arrival.” In-person CYS/CDC registration (and often a parent orientation) is still required after arrival — task W1-11.",
    when: "With orders in hand — waitlists are the long pole.",
    where: "MilitaryChildCare.com",
    source: "MilitaryINSTALLATIONS, USAG Italy child care page",
    tags: ["FAMILY"], linkView: "kids", linkLabel: "Kids & Schools",
  },
  {
    id: "B-6", phase: "before", title: "Contact the gaining School Liaison",
    what: "School Liaisons are the primary point of contact on the installation for all matters concerning Pre-K through 12th-grade education — transfers, MIC3 Interstate Compact issues, public / private / home / DoDEA options. USMC's published guidance: contact the School Liaison “right when you get orders,” not after arrival.",
    when: "On orders.",
    where: "Gaining installation SLO (MilitaryINSTALLATIONS Education topic)",
    source: "MilitaryINSTALLATIONS, JBER education page; USMC school liaison guidance",
    tags: ["FAMILY"], linkView: "kids", linkLabel: "Kids & Schools",
  },
  {
    id: "B-7", phase: "before", title: "EFMP: confirm enrollment is current before the assignment machine moves",
    what: "Enrollment in the EFMP is mandatory for active-duty service members who have a family member with a qualifying medical and/or educational condition; needs are considered during the assignment coordination process (DoDI 1315.19). Forms: DD 2792 (medical) + DD 2792-1 (educational). Per-service machinery: Army — Enterprise EFMP, AR 608-75; USMC — MCO 1754.4C, HQMC EFMP reviews assignments prior to issuance of PCS orders; Navy — MTF EFMP Coordinator → NFAAS → PERS-456; Air / Space Force — EFMP-Medical + Family Member Travel Screening (FMTS); Coast Guard — this is NOT EFMP: it's the Special Needs Program (SNP), COMDTINST 1754.7C. Update cycle across services: every 3 years or when needs change (Navy adds: 12 months before anticipated PCS).",
    when: "Before orders finalize; OCONUS accompanied tours require family-member screening.",
    where: "Service EFMP office / MTF coordinator",
    source: "MilitaryINSTALLATIONS EFMP topic; DoDI 1315.19; service EFMP pages (pack §B-7)",
    tags: ["EFMP"], linkView: "family", linkLabel: "Family & Life Events",
  },
  {
    id: "B-8", phase: "before", title: "OCONUS arrivals: command sponsorship + screening are the gate",
    what: "Accompanied OCONUS tours run on command sponsorship of dependents named in the orders, with EFMP / family-member travel screening (B-7) feeding the decision, plus the no-fee passport / SOFA paperwork track. If dependents aren't command-sponsored, housing, school, and TLA assumptions change — the path branches here.",
    when: "Before travel is booked.",
    where: "Losing / gaining personnel offices + IR&R / relocation assistance",
    source: "Pack §B-8 (command sponsorship + screening)",
    tags: ["OCONUS", "FAMILY"], linkView: "oconus", linkLabel: "OCONUS Family Papers",
  },
  {
    id: "B-9", phase: "before", title: "Time your mail change-of-address",
    what: "File the USPS Change of Address (online or PS Form 3575) and “allow at least 7–10 business days for it to go into effect.” Standard forwarding runs 12 months. USPS, in substance verbatim: the order “only changes your mailing address with the Post Office. You are responsible for telling government agencies, companies, and any other senders” — that sender list is task W2-7.",
    when: "~1–2 weeks before arrival.",
    where: "usps.com / Post Office",
    source: "USPS Change of Address (usps.com/manage/forward)",
    tags: ["ALL"], linkView: "pcs", linkLabel: "PCS Move Center",
  },
  // ── WEEK 1 (12) ───────────────────────────────────────────────────
  {
    id: "W1-1", phase: "week1", title: "Report in and get your orders endorsed",
    what: "The arrival act itself, per branch model: Army — report to the Installation Reception Center / Central Processing Facility (several run 24/7), not straight to the unit; USMC — report to IPAC Inbound in Service “A” (after hours: Command Duty Officer endorses, IPAC next business day; Okinawa has moved most inbound processing online); Navy — get original orders endorsed (date/time) at the gaining command / quarterdeck first, then personnel support (CPPA/CPC → TSC/PSD); Air / Space Force — report to your unit / Commander's Support Staff first (Kadena publishes within 24 hours of arrival); Coast Guard — reporting unit, sponsor-assisted.",
    when: "Report date / first duty day. Installation-published personnel-support EXAMPLES (not service-wide rules): PSD Little Creek — check in “within 24 hours of arrival” after the gaining command; NAS Oceana — report to CPPA “within four days of arrival”; MILPERSMAN 1000-025 gain reporting within four days.",
    where: "Your orders + your installation's Check-in Procedures page",
    source: "Camp Pendleton Welcome Aboard; CNRMA PSD Little Creek; MilitaryINSTALLATIONS Kadena check-in (pack §W1-1)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "W1-2", phase: "week1", title: "Start — and finish — the in-processing checklist",
    what: "The installation issues the checklist (Army: only the IRC/CPF/MPD may issue the Installation In-Processing Checklist). USMC: S-1 completes the Inbound Interview in MOL and issues the unit check-in sheet — published completion windows are unit-level (Lejeune examples: 10 business days H&S Bn, 5 business days Weapons Training Bn). Army in-processing durations are garrison-published (Hood 5-day cycle; JBLM 4-day; USAG Italy 10 business days; Riley 5–8 working days) — use your garrison's, never a blended “Army standard.”",
    when: "Starts day 1; finish inside your unit / garrison window.",
    where: "IRC/CPF (Army), IPAC→S-1 (USMC), CPPA/TSC (Navy), CSS→MPF (Air/Space Force), unit (CG)",
    source: "West Point / garrison in-processing pages (pack §W1-2, Flag F-4)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
    flag: "No Army-wide in-processing standard exists in the sources — durations and lists are garrison-published (pack Flag F-4). Never blend them.",
  },
  {
    id: "W1-3", phase: "week1", title: "⏰ File your travel voucher — 5 working days", clock: true,
    what: "Settlement voucher (DD Form 1351-2) for the PCS: per diem, mileage, DLA, TLE/TLA, POV pickup. File late and advances can convert to a government debt (DFAS). Annotate all advance payments in Block 9; split-disburse to your GTCC — cardholders must pay undisputed charges in full by the statement due date regardless of reimbursement status (DTMO GTCC Regulations; the “up to 120 days for PCS” card-benefit timeline is NOT a due-date waiver).",
    when: "⏰ HARD CLOCK (service-level). DTMO, in substance verbatim: “The Federal Travel Regulation and DoD Financial Management Regulation require voucher submission within five working days of completion of TDY or arrival at the new permanent duty station for PCS travel.” DFAS's Army page words it “within 5 days of arriving” — both wordings print, unmerged (pack Flag F-5).",
    where: "Army: SmartVoucher (generates the DD 1351-2; not for DTS users); others: DTS / servicing finance per service",
    source: "DTMO travel-card article; DFAS Army PCS advances page; DTMO GTCC Regulations",
    tags: ["ALL"], linkView: "pcs", linkLabel: "PCS Move Center",
    flag: "DLA claiming route is not one universal instruction in current publishing (advances via Form 9114 / SmartVoucher; DTMO has described automatic pre-move DLA payment) — file on your settlement voucher / per your finance office (pack Flag F-2).",
  },
  {
    id: "W1-4", phase: "week1", title: "Report to the housing office BEFORE you sign anything", clock: true,
    what: "The Housing Services Office / Housing Service Center / Military Housing Office is the gate: on-post waitlist, off-post referral + lease review, and OCONUS TLA paperwork. Fort Hood publishes the universal framing: in-processing through the HSO is “mandatory prior to renting, leasing or buying” a home in the local area.",
    when: "⏰ NO UNIVERSAL DEADLINE EXISTS — your installation's rule governs (pack Flag F-6). Published EXAMPLES, labeled as examples: Yokota AB — report “no later than 48 hours, or two business days, after arrival… before entering into any written lease”; USAG Hawaii — dependents report “within five days of arrival” (everyone within seven workdays of report date); Okinawa — contact the Military Housing Office within 2–3 days after reporting (NOWA booklet); Navy HSCs — check in within 30 days of arrival/reporting to preserve your waitlist control date (after 30 days it resets to the application date).",
    where: "Installation housing office",
    source: "MilitaryINSTALLATIONS housing pages: Yokota AB; Schofield Barracks / Fort Shafter; Naval Base Kitsap (pack §W1-4)",
    tags: ["ALL", "FAMILY", "SINGLE"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "W1-5", phase: "week1", title: "Single track: check into unaccompanied housing",
    what: "Barracks / Unaccompanied Housing assignment runs through the UH office (Navy arrivals may check in via the Gateway Inns front desk, 24/7). Eligibility and any requirement to live in UH are grade-, time-in-service-, and installation-specific — NB Kitsap's published rule (single E-4 and below with <4 years must reside in UH; living off base needs a chit through command + UH admin) prints as Kitsap's example only, never as a DoD rule.",
    when: "Day 1 — before any off-post commitment (see W1-4).",
    where: "UH office / housing",
    source: "Naval Base Kitsap housing page (pack §W1-5) — example only",
    tags: ["SINGLE"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "W1-6", phase: "week1", title: "Update DEERS with your new address",
    what: "“After you move, the first step is to update your information in DEERS. You'll need to provide your new address. Your address determines whether or not you live in a Prime Service Area.” Not updating risks care problems and disenrollment. Contact-info changes are self-service; adding/removing family members is sponsor-only, in person.",
    when: "As soon as you're at the new address — this update starts the TRICARE 90-day clock (W1-7).",
    where: "milConnect / ID Card Office Online, phone 800-538-9552, or a RAPIDS ID card office",
    source: "TRICARE Newsroom, “Check your TRICARE information in DEERS today”",
    tags: ["ALL"], linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    id: "W1-7", phase: "week1", title: "⏰ TRICARE: a PCS move is a Qualifying Life Event — 90 days", clock: true,
    what: "Moving is a TRICARE QLE only if the relocation is “to a new country, city, region, or ZIP+4 code.” Updating DEERS does not by itself transfer Prime: in a Prime Service Area you choose a new PCM and enroll via the new regional contractor; moving regions means setting up enrollment with the new contractor and asking the old-region contractor to transfer active referrals (they do not move automatically). TRICARE Select needs no PCM. If you are no longer eligible for your old plan and don't enroll in time, care is space-available at a military hospital/clinic only.",
    when: "⏰ HARD CLOCK — 90 days. ⚠ Two published anchors print as a conflict, unmerged: TRICARE's Q&A words it “90 days from the date of your move”; current TRICARE Moving guidance words it “90 days from the date of your address change in DEERS.” This path runs its clock from the DEERS update (current guidance) — the DEERS-anchor note: update DEERS first (W1-6), because that update is what starts the clock this path counts.",
    where: "milConnect Beneficiary Web Enrollment or the new regional contractor",
    source: "TRICARE Newsroom, “Moving with TRICARE: A Game Plan for Success”; TRICARE Q&A (Edwards AFB)",
    tags: ["ALL", "FAMILY"], linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    id: "W1-8", phase: "week1", title: "⏰ Get scheduled: newcomer orientation / INDOC", clock: true,
    what: "Per branch: Navy — OPNAVINST 1740.3E requires enrollment in the command indoctrination program within 30 days of reporting (Reserve: within 3 drill weekends); the same instruction notes TRICARE Prime transfer “should be made within 30 days of arriving.” USMC — MARADMIN 147/26: Welcome Aboard is mandatory for E-1–E-6, W-1, O-1–O-2 within 90 days of arrival; at OCONUS locations all ranks + family members 10+ must attend. Okinawa prints differently and both stand: the MCIPAC NOWA booklet requires attendance within 72 hours of arrival (family members/children 16+), and NOWA completion gates the USFJ POV driver license and off-installation liberty. Army — garrison Newcomers Briefs are on the in-processing checklist (no Army-wide attendance clock found). Air / Space Force — base-published as mandatory for all active-duty personnel at base after base (Right Start, Pioneer Start, Wing Orientation; e.g. Schriever third Thursday monthly, Buckley third Wednesday); spouses invited/encouraged. Coast Guard — no service-wide orientation mandate found; unit sponsor + Work-Life welcome package carry it.",
    when: "Get the date in Week 1 even when the deadline is Day 30 / Day 90.",
    where: "FFSC / MCCS IR&R / M&FRC / garrison ACS per branch",
    source: "OPNAVINST 1740.3E; MARADMIN 147/26; Okinawa NOWA booklet; Offutt 55 FSS relocation (pack §W1-8)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "W1-9", phase: "week1", title: "Temporary lodging clock: know your TLE/TLA position", clock: true,
    what: "TLE (CONUS): DTMO, verbatim in substance — “Effective November 27, 2024, the number of days that a Service member may receive Temporary Lodging Expense (TLE) has increased from 14 days to 21 days when moving to a permanent duty station within CONUS”; designated housing-shortage MHAs may authorize up to 60 days. TLA (OCONUS): partial reimbursement for temporary lodging on arrival while quarters/private housing are arranged (37 U.S.C. §405; DoD FMR Vol 7A Ch. 68); DTMO's overview publishes no universal day cap — installation rules tie TLA to prompt housing check-in (JBPHH publishes check-in within 72 hours for TLA eligibility).",
    when: "The lodging clock starts at arrival — it is a Week 1 fact, not a Week 3 discovery.",
    where: "Finance + housing office",
    source: "DTMO TLE article (Nov 27, 2024 change); DTMO Temporary Lodging Allowance overview (pack §W1-9)",
    tags: ["ALL", "OCONUS"], linkView: "pcs", linkLabel: "PCS Move Center",
    flag: "The often-quoted $290/day TLE cap was NOT VERIFIED on a DTMO/DFAS page in the pack's research (Flag F-10), and no universal TLA day cap is published (Flag F-11) — neither is printed as a rule here.",
  },
  {
    id: "W1-10", phase: "week1", title: "Register your pet with the Veterinary Treatment Facility", clock: true,
    what: "No universal DoD pet-registration deadline exists. Published EXAMPLES, labeled as examples: Misawa AB, Japan — in-process pets through the VTF within 72 hours of arriving in Japan (bring health certificates, rabies titer, import approvals, vaccination records; Japan's quarantine is host-nation MAFF AQS and starts pre-travel); West Point — all dogs/cats residing on post registered at the VTF within 30 days of arrival, rabies + microchip mandatory. Housing pet rules (limits, breeds, deposits) are installation/housing-provider specific.",
    when: "Inside your installation's window.",
    where: "Installation VTF + housing office",
    source: "MilitaryINSTALLATIONS: Misawa AB shipping pets; USMA West Point shipping pets (pack §W1-10)",
    tags: ["ALL", "OCONUS"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "W1-11", phase: "week1", title: "Enroll the kids: school + in-person childcare registration", clock: true,
    what: "DoDEA: register via the DSIS Family Portal (and re-register annually); Conditional Enrollment lets participating DoDEA schools (Europe, Pacific, Cuba, Guam, Puerto Rico — not CONUS) process registration and schedule grades 9–12 students before arrival — “if the student does not start school within 10 days of the expected start date, the student will be withdrawn.” Stateside: local school via the SLO (B-6). Childcare: the MilitaryChildCare.com request (B-5) is not the finish line — in-person CYS/CDC registration (+ parent orientation at many installations) happens on station before care starts.",
    when: "Week 1.",
    where: "DoDEA DSIS / local school registrar / CYS Parent Central Services",
    source: "DoDEA registration / conditional enrollment (pack §W1-11)",
    tags: ["FAMILY"], linkView: "kids", linkLabel: "Kids & Schools",
  },
  {
    id: "W1-12", phase: "week1", title: "Vehicle: installation registration/pass + POV pickup inspection", clock: true,
    what: "Registration, passes, and licensing are per-installation (MilitaryINSTALLATIONS “Motor Vehicles” topic); state law governs operation. Example with a clock: Guam — register with the Visitor Center within 72 hours of arrival, with insurance + a 5-day temporary registration before VPC pickup. POV pickup (OCONUS): the government ships one POV via IAL/VPC; USAG Italy's legal page, in substance verbatim: inspect the vehicle completely at pickup, list any damage on the shipping document (DD Form 788 or equivalent) before taking possession and departing the VPC; on-the-spot settlement up to $1,500 is possible, and later claims cover damage “discovered within 48 hours of departure” — after that, “much harder to prove.”",
    when: "Registration inside the local window; the inspection rule is an at-the-VPC rule.",
    where: "Installation vehicle registration / VPC (PCSmyPOV)",
    source: "MilitaryINSTALLATIONS: Joint Region Marianas motor vehicles; USAG Italy legal assistance (pack §W1-12)",
    tags: ["ALL", "OCONUS"], linkView: "installation", linkLabel: "My Installation",
  },
  // ── WEEKS 2–4 (8) ─────────────────────────────────────────────────
  {
    id: "W2-1", phase: "weeks2to4", title: "Audit your first LES at the new station",
    what: "The first full LES after arrival should show the new BAH locality, and the voucher settlement (W1-3) should have closed the travel claim, DLA, and any advance annotation. Mismatches are cheapest to fix in the first month, while the finance office still has your in-processing packet warm.",
    when: "First LES after arrival. (No published deadline; this is the path's own sequencing, labeled as such.)",
    where: "myPay + servicing finance",
    source: "Pack §W2-1 (path sequencing, no published deadline)",
    tags: ["ALL"], linkView: "les", linkLabel: "Your Pay Stub, Explained",
  },
  {
    id: "W2-2", phase: "weeks2to4", title: "Dental: your coverage moved with you — your dentist didn't",
    what: "TRICARE Dental Program coverage “remains in place” on a move — do not disenroll. After moving: find a new TDP dentist (Find a Dentist) and call the TDP contractor (United Concordia) to update address/contact info. TDP is separately enrolled from the health plan. FEDVIP dental members: contact your plan provider after a move — TRICARE warns FEDVIP QLEs differ from TRICARE QLEs, and a PCS move as a FEDVIP enrollment-change QLE was NOT VERIFIED (pack Flag F-13).",
    when: "Weeks 2–4.",
    where: "United Concordia / FEDVIP provider",
    source: "TRICARE Newsroom, “TRICARE Moves With You: 5 Tips” (pack §W2-2)",
    tags: ["FAMILY"], linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    id: "W2-3", phase: "weeks2to4", title: "⏰ File a new FPCA — every address change", clock: true,
    what: "The Federal Post Card Application registers you, requests your absentee ballots, and updates your voting contact information. FVAP, verbatim: “Be sure to complete a new FPCA each year and every time your address changes.” Your voting residence (Section 2) need not be an address you currently occupy and cannot be a PO Box; your current mailing address goes in Section 3. State deadlines vary by state and election.",
    when: "On the move (and annually).",
    where: "FVAP → your local election official",
    source: "FVAP voter guide (standard FVAP template wording)",
    tags: ["ALL"], linkView: "voting", linkLabel: "Voting Center",
  },
  {
    id: "W2-4", phase: "weeks2to4", title: "Plates, license, and tax residence: decide deliberately, per state law",
    what: "SCRA lets a member retain legal residence/domicile in the home state despite presence elsewhere solely on orders — the root of keeping a home-state license/plates where state law allows; gaining-state rules and installation registration (W1-12) govern the rest. Spouse side: MSRRA, as amended by the Veterans Benefits and Transition Act, lets a spouse elect the member's state of legal residence for state tax purposes.",
    when: "Weeks 2–4 (before any state deadline your installation publishes).",
    where: "State DMV / installation legal assistance",
    source: "SCRA domicile framing; MSRRA/VBTA (pack §W2-4)",
    tags: ["ALL"], linkView: "taxes", linkLabel: "Tax & Residency",
    flag: "No single official page publishing a universal “always keep your home-state license and plates” rule was verified (pack Flag F-7) — this task prints the domicile principle + “check your gaining state's rule” and routes domicile fights to legal assistance.",
  },
  {
    id: "W2-5", phase: "weeks2to4", title: "Use free legal assistance while the paper is fresh",
    what: "Installation Legal Assistance / JAG gives free advice including lease and contract review, landlord/tenant disputes, and SCRA/USERRA questions. SCRA lease framing worth printing: protections run from entry on active duty to 30–90 days after discharge; early lease termination needs written notice + a copy of orders, with the lease ending 30 days after the next rent payment is due once requirements are met; OneSource warns it is “not recommended to sign any documents that take away your rights under the SCRA.” This is also the window to refresh wills/POAs after a move.",
    when: "Before signing, renewing, or disputing anything.",
    where: "Installation legal assistance office",
    source: "MilitaryINSTALLATIONS legal assistance (Ansbach; Eglin); Military OneSource lease guidance (pack §W2-5)",
    tags: ["ALL", "FAMILY"], linkView: "rights", linkLabel: "Know Your Rights",
  },
  {
    id: "W2-6", phase: "weeks2to4", title: "Spouse employment: start the portable-career track",
    what: "The official route is SECO / MySECO — appearing on current MilitaryINSTALLATIONS pages also as “SpouseWorks (formerly SECO)” (naming in transition — print both names) — plus the Military Spouse Employment Partnership (MSEP) job search, free SECO career coaching via Military OneSource, and MyCAA (up to $4,000, $2,000 fiscal-year cap, for eligible spouses — eligibility bands vary by page/version, verify on MySECO before quoting). Published arrival actions: hand-carry/digitize resumes, transcripts, certificates, and licenses so the search can start immediately; ask the installation Employment Readiness Program about the local market and spouse preference for federal jobs.",
    when: "Weeks 2–4 — earlier if a license transfer is involved.",
    where: "myseco.militaryonesource.mil · msepjobs.militaryonesource.mil · installation employment readiness",
    source: "MilitaryINSTALLATIONS employment pages (Kunsan AB; JB Langley-Eustis) (pack §W2-6, Flag F-14)",
    tags: ["SPOUSE", "FAMILY"], linkView: "spousehub", linkLabel: "Spouse Hub",
  },
  {
    id: "W2-7", phase: "weeks2to4", title: "Finish the address-update sweep",
    what: "USPS forwards your mail; it does not tell your senders (B-9). The sweep: DEERS (done, W1-6), your unit recall roster, finance/pay contact details, banks/cards, insurance, subscriptions. Confirm your address and phone with your finance office and in myPay.",
    when: "Weeks 2–4.",
    where: "Each sender directly",
    source: "Pack §W2-7",
    tags: ["ALL"], linkView: "pay", linkLabel: "Pay & Money",
    flag: "A clean DFAS active-duty instruction page for updating address in myPay was NOT VERIFIED in the pack's research (only retiree/annuitant guidance surfaced — Flag F-8): this task is worded generically because of that flag and cites no deadline for it.",
  },
  {
    id: "W2-8", phase: "weeks2to4", title: "Re-verify the readiness papers at the new address",
    what: "Garrison guidance (Detrick) tells Soldiers to review/update DD Form 93 (emergency data) and SGLV (SGLI beneficiaries) around a move; addresses, phone numbers, and beneficiaries go stale at exactly this moment. The documents themselves live in Family Care Plan / Records — this task is the pointer, not a duplicate.",
    when: "Weeks 2–4.",
    where: "Unit S-1/admin + milConnect",
    source: "USAG Detrick sponsorship page (pack §W2-8)",
    tags: ["ALL", "FAMILY"], linkView: "readiness", linkLabel: "Family Care Plan & Deployment Readiness",
  },
  // ── BY DAY 30 (5) ─────────────────────────────────────────────────
  {
    id: "D30-1", phase: "day30", title: "⏰ Navy: INDOC enrollment is a 30-day rule — confirm it's done", clock: true,
    what: "OPNAVINST 1740.3E: new arrivals enrolled in command indoctrination within 30 days of reporting (Reserve Component: within 3 drill weekends). Day 30 is the check, not the start. (USMC's parallel clock — Welcome Aboard within 90 days — gets its checkpoint at D30-2's neighbor: by Day 30 it should be scheduled/attended, with the deadline still ahead.)",
    when: "⏰ HARD CLOCK (service-level) — within 30 days of reporting.",
    where: "Gaining command (Command Sponsor & Indoctrination Program)",
    source: "OPNAVINST 1740.3E (pack §S-3 / §D30-1)",
    tags: ["ALL"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "D30-2", phase: "day30", title: "TRICARE checkpoint: transfer complete, clock understood",
    what: "Confirm: DEERS address correct (W1-6), Prime enrollment transferred / new PCM assigned or Select confirmed (W1-7), referrals moved. The ⏰ 90-day QLE window (from the DEERS address change, per current guidance) is the outer wall — at Day 30, ~60 days remain; after it closes, changes wait for another QLE or Open Season, and a member no longer eligible for the old plan who never enrolled is space-available only.",
    when: "By Day 30 — ~60 days of the 90-day window remain.",
    where: "milConnect / regional contractor",
    source: "TRICARE Moving guidance (pack §W1-7 / §D30-2)",
    tags: ["ALL", "FAMILY"], linkView: "healthhq", linkLabel: "Health Care & TRICARE",
  },
  {
    id: "D30-3", phase: "day30", title: "Housing settled or waitlist-protected",
    what: "One of three end states by Day 30: lease signed after housing-office review (W1-4) and on file; government quarters occupied; or waitlist position protected — the Navy HSC pattern makes Day 30 literal: check in within 30 days or your control date resets to the application date. TLE/TLA: confirm remaining days against the W1-9 windows before they lapse silently.",
    when: "By Day 30 (Navy HSC control-date pattern — installation example, labeled as such).",
    where: "Installation housing office",
    source: "Naval Base Kitsap housing page (pack §W1-4 / §D30-3)",
    tags: ["ALL", "FAMILY", "SINGLE"], linkView: "installation", linkLabel: "My Installation",
  },
  {
    id: "D30-4", phase: "day30", title: "Family systems all landed",
    what: "School enrollment active (DoDEA 10-day start rule satisfied), childcare in place or waitlist position known, gaining-installation EFMP office check-in done where published (Okinawa example: EFMP office, Camp Foster Bldg 495, with current IEP/IFSP/504 and updated medical records in hand), spouse employment track opened (W2-6).",
    when: "By Day 30.",
    where: "School / CYS / gaining EFMP office",
    source: "Okinawa MCCS EFMP page (pack §D30-4) — installation example, labeled as such",
    tags: ["FAMILY", "EFMP", "SPOUSE"], linkView: "kids", linkLabel: "Kids & Schools",
  },
  {
    id: "D30-5", phase: "day30", title: "Money audit: voucher paid, card clean, pay right",
    what: "Confirm the settlement voucher (W1-3) has paid (advances annotated, split disbursement posted to the GTCC, no undisputed balance riding past a statement due date), and the W2-1 LES audit is closed. Anything open at Day 30 becomes a named follow-up in Pay & Money — not a surprise at Day 60.",
    when: "By Day 30.",
    where: "myPay + servicing finance",
    source: "DTMO GTCC Regulations (pack §W1-3 / §D30-5)",
    tags: ["ALL"], linkView: "pay", linkLabel: "Pay & Money",
  },
];

/** The four service-level hard clocks, exactly as the pack prints
 * them — both wordings / variants where the pack carries two, never
 * merged. Installation windows never appear here; they are examples
 * on their tasks, labeled as examples. */
export const FIRST30_CLOCKS: { title: string; lines: string[] }[] = [
  {
    title: "Travel voucher — 5 working days",
    lines: [
      "DTMO / DoD FMR: voucher submission “within five working days of completion of TDY or arrival at the new permanent duty station for PCS travel.”",
      "DFAS (Army page): file “within 5 days of arriving.” Both wordings print — they are not merged (pack Flag F-5).",
    ],
  },
  {
    title: "TRICARE move QLE — 90 days",
    lines: [
      "TRICARE Q&A anchor: “90 days from the date of your move.”",
      "Current TRICARE Moving guidance anchor: “90 days from the date of your address change in DEERS.” This path runs the clock from the DEERS update — update DEERS first (task W1-6); that update starts the clock.",
    ],
  },
  {
    title: "Navy command INDOC — within 30 days",
    lines: [
      "OPNAVINST 1740.3E: enrollment in the command indoctrination program within 30 days of reporting (Reserve: within 3 drill weekends).",
    ],
  },
  {
    title: "USMC Welcome Aboard — within 90 days · Okinawa NOWA — 72 hours",
    lines: [
      "MARADMIN 147/26: Welcome Aboard mandatory for E-1–E-6, W-1, O-1–O-2 within 90 days of arrival; OCONUS, all ranks + family members 10+ attend.",
      "Okinawa (MCIPAC NOWA booklet) prints differently and both stand: attendance within 72 hours of arrival (family members/children 16+); NOWA completion gates the USFJ POV driver license and off-installation liberty.",
    ],
  },
];

/** Sponsorship panel content (§S-1–S-6) — the ACT sunset rule and the
 * MCO 1320.11H rule ship here, as the pack prints them. */
export const FIRST30_SPONSORSHIP: { branch: string; body: string; flag?: string }[] = [
  {
    branch: "Army — DA 5434 + gaining unit is the durable core",
    body: "Total Army Sponsorship Program (AR 600-8-8). Complete DA Form 5434 Sections 1, 2, 4, 5; Section 3 is completed by the gaining side with sponsor contact information. Units are not required to assign a sponsor until 120 days prior to your report date. Mandatory sponsorship (Benelux, citing HQDA EXORD 161-15): E1–E6, WO1–WO2, O1–O3; E7–E9, WO3–WO5, O4–O6 may opt in unless a senior commander requires it. First-term Soldiers are required to have a sponsor (Fort Walker).",
    flag: "⚠ ACT SUNSET — print both sides, never blend: most home.army.mil TASP pages still instruct Soldiers to request a sponsor by logging into Army Career Tracker (actnow.army.mil) → DA Form 5434. But JBLM states: “On 14 November 2025, Army Career Tracker (ACT) officially shut down” — incoming JBLM Soldiers get a sponsor coordinated by the IRC Sponsorship Team with the gaining unit. MilitaryINSTALLATIONS (Detroit Arsenal) adds: TASP “is currently under review,” the program “will be renamed ‘Onboarding and Integration,’” and IPPS-A will be used for contact information. The ACT steps on this card are labeled PRE-SUNSET (sunset Nov 14, 2025); the DA 5434 + gaining-unit route is the durable core. No single post-ACT Army-wide workflow is asserted (pack Flag F-1).",
  },
  {
    branch: "Marine Corps — MCO 1320.11H governs",
    body: "Marine Corps Sponsorship Program, MCO 1320.11H W/ADMIN CH-1 — listed “Current” in the Marine Corps Publications Electronic Library. Sponsorship is mandatory for all personnel in the grades of E-1 through E-9, WO-1 through CWO-5, and O-1 through O-6 executing CONUS or OCONUS orders (MilitaryINSTALLATIONS summaries of the H version). Assigned by the gaining command; if not assigned, request through the gaining unit's Sponsorship Coordinator or MCCS Information, Referral & Relocation (IR&R), form NAVMC 11799 (Youth Sponsorship: NAVMC 11798). Once assigned, the sponsor must send a Welcome Aboard Letter within 10 business days of appointment.",
    flag: "⚠ STALE VERSION: the older MCO 1320.11F (2012) is still hosted on some unit pages with narrower grade coverage (E-1–E-5, WO-1–CWO-2, O-1–O-3 plus all accompanied OCONUS). The F version is flagged STALE wherever it appears — H governs; the two are never merged. One installation figure — “Sponsors are assigned 60 days before PCS” (MCLB Barstow, MilitaryINSTALLATIONS-published only) — prints as Barstow's page, not a Corps rule (pack Flag F-6).",
  },
  {
    branch: "Navy — the coordinator's contact is in your orders",
    body: "Command Sponsor & Indoctrination Program, OPNAVINST 1740.3E (15 Oct 2021) — the most current version; every command must have a program, with overall responsibility at the Command Master Chief. There is no Navy-wide self-service sponsor portal: NAVPERSCOM (PERS-45) requires commands to put the Command Sponsor Coordinator's functional contact in the PCS orders themselves; the Sailor contacts the CSC from the orders. Sponsor responsibilities begin when a Service member receives PCS orders.",
    flag: "A sponsor-assignment deadline inside 1740.3E was NOT VERIFIED from the excerpts retrieved — older installation material citing superseded versions (15 business days; assign within 10 working days) must NOT be attributed to the E version (pack Flag F-7/F-16).",
  },
  {
    branch: "Air Force — unit CSS assigns; M&FRC runs it locally",
    body: "The gaining unit's Commander Support Staff (CSS) / unit Sponsor Monitor appoints and notifies the sponsor; the M&FRC Relocation Assistance Program supports and monitors the unit program (Travis AFB M&FRC process: CSS notifies → sponsor completes eSAT → certificate to CSS → sponsor contacts the inbound member). No sponsor? Contact the gaining unit CSS, then the M&FRC Relocation Program Manager. There is no AFPC/myFSS e-Sponsorship assignment portal — eSAT is the DoD/Military OneSource eSponsorship Application & Training course, not an assignment system (DAFI 36-3009 §4.10.4).",
    flag: "No DAF-wide universal sponsorship mandate was verified in DAFI 36-3009 excerpts; base pages state assignment locally (Travis: “All Service members will be assigned a Sponsor”) — printed as base practice, not DAF law (pack Flag F-17).",
  },
  {
    branch: "Space Force — Guardians ride DAF systems (stated plainly)",
    body: "No USSF-specific sponsorship instruction, portal, or newcomer program was found published on spaceforce.mil. Guardians use the DAF machinery: unit CSS, M&FRC, DoD eSAT, and DAF EFMP (DAFPD 36-82 expressly covers USSF). Schriever SFB M&FRC runs Sponsorship Training and “Right Start” Newcomer's Orientation on the third Thursday of each month; Buckley SFB Newcomers' Orientation is normally the third Wednesday; Vandenberg SFB: report to your unit commander's section on arrival (or next duty day), and first-term Airmen/Guardians must attend FTEC within 45 calendar days of arrival at a first duty station.",
  },
  {
    branch: "Coast Guard — unit-assigned sponsor + Work-Life (stated plainly)",
    body: "No service-wide sponsorship instruction was found published — no COMDTINST number is asserted. What is published: the Work-Life Relocation Assistance Program (CG-111), whose phases include an “Arrival and Orientation Phase,” with Transition/Relocation Managers (TRMs) in the receiving Work-Life office providing Welcome Packages. Base Alameda Work-Life states the sponsor standard: a member assigned from your reporting command who should contact you early, greet you at the airport, and assist with check-in — printed as that base's stated standard, not a service-wide rule. No service-wide mandatory CG newcomer orientation was found; the MyCG “Welcome Aboard” 90-day track is for newly appointed civilians, not the military PCS route.",
  },
];

export type First30Situation = {
  /** Household track: unaccompanied/barracks vs accompanied. */
  household: "single" | "family";
  efmp: boolean;
  oconus: boolean;
};

export const FIRST30_DEFAULT_SITUATION: First30Situation = { household: "family", efmp: false, oconus: false };

/**
 * Situation filter. Rules (pack tags):
 * - A task tagged ALL always shows — nothing safety- or clock-critical
 *   is situation-gated (the never-hide-safety rule): every [ALL] task,
 *   including all four hard-clock tasks, renders for every situation.
 * - SINGLE-only tasks (tagged SINGLE without FAMILY/ALL) show only on
 *   the single track; FAMILY-only tasks likewise.
 * - EFMP / OCONUS tags gate only when ALL is absent (W1-9/W1-10/W1-12
 *   carry [ALL][OCONUS] and are universal — TLE is a CONUS fact).
 * - Spouse view: the family-tagged view — SPOUSE/FAMILY/ALL tasks on
 *   the family track (household forced to family in the view).
 */
export function first30TaskVisible(task: First30Task, sit: First30Situation): boolean {
  const t = task.tags;
  if (t.includes("ALL")) return true;
  const singleOnly = t.includes("SINGLE") && !t.includes("FAMILY");
  const familyOnly = t.includes("FAMILY") && !t.includes("SINGLE");
  if (singleOnly && sit.household !== "single") return false;
  if (familyOnly && sit.household !== "family") return false;
  if (t.includes("EFMP") && !sit.efmp) return false;
  if (t.includes("OCONUS") && !sit.oconus) return false;
  return true;
}

export function first30VisibleTasks(sit: First30Situation): First30Task[] {
  return FIRST30_TASKS.filter((t) => first30TaskVisible(t, sit));
}
