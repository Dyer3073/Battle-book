// Family & Life Events — static reference data transcribed from the
// researched family pack (~/workspace/military-app/family/family.md,
// researched November 8, 2026). Summaries, program names, figures, and
// links come only from the pack.
//
// Fidelity rules baked into this data:
// - Current (2026) program names are used exactly as the pack states:
//   SpouseWorks Scholarship (formerly MyCAA) and SpouseWorks coaching
//   (formerly SECO); MSEP now sits inside SpouseWorks.
// - Every ⚠ flag from the pack is preserved: the SpouseWorks Scholarship
//   eligibility conflict (current program page governs), the MSEP
//   partner-count conflict, FSGLI figures and the post–Jan 2, 2013
//   spouse-coverage election rule, the parental-leave branch-variation
//   flag, the MCCYN administrator transition (June 2026), the dated
//   DoL VETS state PDFs, and the Coast Guard center-naming variance.
// - The Coast Guard special-needs program is named correctly: Special
//   Needs Program (SNP) — not EFMP, not "SPNS."
// - BAH appears at concept level only — no rates anywhere.

export type FamilyLink = { label: string; url: string };

export type FamilyBullet = {
  /** Bold lead-in, e.g. a branch name or the 20/20/20 label. */
  title?: string;
  text: string;
  links?: FamilyLink[];
};

export type FamilyEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Life-event steps, rendered as a tappable checklist. */
  steps?: string[];
  /** Extra paragraphs after the summary (how-it-works, limits). */
  details?: string[];
  bullets?: FamilyBullet[];
  flag?: string;
  links: FamilyLink[];
  /** In-section cross-reference note. */
  refNote?: string;
  /** Extra label rendered as a red badge (e.g. the Coast Guard SNP name). */
  alertBadge?: string;
  /** Survivor-benefit detail cross-reference to the Benefits section. */
  benefitsRef?: boolean;
};

export type FamilyGroup = {
  title: string;
  note?: string;
  entries: FamilyEntry[];
};

export const FAMILY_STANDING_NOTE =
  "Names, figures, and eligibility in this section follow the current official program pages. Programs get renamed and rules change — where official pages disagree, the card flags the conflict instead of blending the two versions, and the current program page governs.";

export const FAMILY_GROUPS: FamilyGroup[] = [
  {
    title: "Life Event Checklists",
    entries: [
      {
        name: "Getting Married",
        kind: "TRICARE Qualifying Life Event",
        summary:
          "Marriage is a TRICARE Qualifying Life Event (QLE). The sequence that unlocks everything else is: enroll your spouse in DEERS in person → get them a Uniformed Services ID card → enroll in / change a TRICARE plan within the QLE window → tell finance so pay records (including BAH dependency status) update → review SGLI/FSGLI elections.",
        who: "Any service member who marries. You have 90 days from the marriage to make TRICARE plan changes under the QLE.",
        steps: [
          "DEERS enrollment (in person). Go to a Uniformed Services ID card (RAPIDS) office — find one and book via ID Card Office Online. Bring: marriage certificate, spouse's birth certificate, spouse's Social Security card, and spouse's photo ID.",
          "ID card. Issued at the same RAPIDS visit once DEERS enrollment is complete (DD Form 1172-2 is the application the sponsor signs).",
          "TRICARE. After DEERS enrollment, enroll your spouse in a TRICARE plan. Per TRICARE, new active-duty family members are automatically enrolled in a plan based on location; you have the 90-day QLE window to change it.",
          "BAH (concept only — no rates here). A spouse counts as a dependent, so marriage generally moves the member to the \u201cwith dependents\u201d BAH rate once dependency is certified with the branch finance office. Rate depends on pay grade, duty-station ZIP, and dependency status.",
          "SGLI / FSGLI. Once your spouse is in DEERS, Family SGLI (FSGLI) can cover them: ⚠ up to $100,000 of spouse coverage (never more than the member's own SGLI amount) and ⚠ $10,000 per dependent child, per VA.",
        ],
        flag: "FSGLI is not automatic for everyone: a military spouse married on or after Jan 2, 2013 is NOT automatically covered — the member must actively elect FSGLI spouse coverage in SOES (the SGLI Online Enrollment System, through milConnect). VA also warns premiums are owed from the member's pay even if the spouse was never entered in DEERS, so back premiums can accrue — check SOES after the wedding.",
        links: [
          { label: "ID Card Office Online — find a RAPIDS office", url: "https://idco.dmdc.osd.mil/idco/locator" },
          {
            label: "TRICARE Newsroom — Getting Married? Here's What You Need to Know About Your TRICARE Benefit",
            url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4366251/getting-married-heres-what-you-need-to-know-about-your-tricare-benefit",
          },
          { label: "Official BAH explainer (Military Pay)", url: "https://militarypay.defense.gov/Pay/Allowances/bah.aspx" },
          { label: "VA — Family Servicemembers' Group Life Insurance (FSGLI)", url: "https://www.va.gov/life-insurance/options-eligibility/fsgli/" },
        ],
      },
      {
        name: "Having or Adopting a Baby",
        kind: "New child — DEERS first",
        summary:
          "Register the child in DEERS first — TRICARE claims will not pay until you do — then confirm the child's TRICARE plan enrollment, and use your branch's parental leave benefit.",
        who: "New parents by birth or adoption. Official windows (TRICARE): register the newborn in DEERS within 90 days if you are in the U.S., 120 days if overseas. Claims start denying on day 91 (U.S.) / day 121 (overseas). Birth and adoption are also QLEs — you have 90 days from the event (for adoption, from the final adoption) to change TRICARE plans.",
        steps: [
          "DEERS registration (in person, RAPIDS office). Bring the official birth certificate, or FS-240 Consular Report of Birth Abroad for a child born overseas. You do not need the child's Social Security number to register initially — update DEERS when the SSN card arrives.",
          "TRICARE. Once the child is in DEERS, they are automatically enrolled in a TRICARE plan based on location; use the 90-day QLE window if you want a different plan.",
          "ID card timing. Children generally get their first dependent ID card at age 10 (official installation DEERS pages; exceptions exist — e.g., custody arrangements where the child is not with the sponsor). A parent presents their own ID for the child's care before then.",
          "Parental leave (concept level). Under DoD DTM 23-001 (Jan 4, 2023), the Military Parental Leave Program (MPLP) provides 12 weeks of non-chargeable parental leave for a birth, an adoption, or a long-term foster placement, for active-duty members and eligible Reserve Component members (generally those on qualifying active/AGR-type duty of more than 12 consecutive months). A birth parent receives it in addition to maternity convalescent leave. It may be taken in increments of at least 7 days and must be used within 1 year of the event.",
        ],
        flag: "Parental leave implementation varies by branch: approval chains, forms, and Reserve eligibility details are set by each branch — check your branch's policy before planning dates.",
        links: [
          {
            label: "TRICARE (Vance AFB) — How to Enroll Your Newborn in TRICARE",
            url: "https://vance.tricare.mil/News-Gallery/Articles/Article/4407472/how-to-enroll-your-newborn-in-tricare",
          },
          {
            label: "MyArmyBenefits — Military Parental Leave Program (MPLP) fact sheet",
            url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Military-Parental-Leave-Program-(MPLP)?serv=124",
          },
          {
            label: "Carlisle Barracks DEERS/ID Card Office (ID card minimum age 10, exceptions listed)",
            url: "https://home.army.mil/carlisle/Carlisle-Barracks/all-services/deersid-card-office",
          },
        ],
      },
      {
        name: "Divorce / Separation",
        kind: "DEERS update + the 20/20/20 rule",
        summary:
          "Once the divorce is final, the sponsor must update DEERS. The former spouse's ID card and TRICARE eligibility end unless they independently qualify — the test most people mean is the 20/20/20 rule. Children keep their own eligibility (they are the member's dependents, not the former spouse's), but non-adopted stepchildren lose eligibility at divorce.",
        who: "Sponsor updates DEERS as soon as the divorce is final — divorce is a TRICARE QLE, which also opens a 90-day window for the member's own plan changes.",
        bullets: [
          {
            title: "20/20/20",
            text: "Marriage lasted at least 20 years and the member performed at least 20 years of creditable service and the two overlapped by at least 20 years → the former spouse keeps TRICARE eligibility (at the retiree-family level) for as long as they remain eligible.",
          },
          {
            title: "20/20/15",
            text: "Same test but the overlap was at least 15 years → the former spouse gets 1 year of transitional TRICARE coverage.",
          },
          {
            text: "Eligibility is lost if the former spouse remarries or enrolls in an employer-sponsored health plan.",
          },
          {
            text: "A qualifying unremarried former spouse is carried in DEERS under their own SSN / DoD Benefits Number (not the sponsor's). Documents used to establish this: marriage certificate, divorce decree, and the member's DD 214 or Statement of Service.",
          },
          {
            text: "Also update: the former spouse's ID card (no longer valid as a dependent card), SGLI/FSGLI elections in SOES (FSGLI spouse coverage ends at divorce), and any BAH dependency certification with finance.",
          },
        ],
        links: [
          {
            label: "TRICARE Newsroom — How Divorce Affects Your Family's TRICARE Benefits",
            url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4455338/how-divorce-affects-your-familys-tricare-benefits",
          },
        ],
      },
      {
        name: "Death of a Family Member / Casualty Basics",
        kind: "Overview — the CAO walks with you",
        summary:
          "Written at overview level on purpose — the details live with the people assigned to help. If a service member dies, the branch notifies next of kin in person and assigns help; if a covered family member dies, the member files the FSGLI claim. Nobody navigates this alone, and no family should have to cold-call an insurance office first.",
        bullets: [
          {
            title: "Casualty Notification Officer / Casualty Assistance Officer (CAO)",
            text: "Per DoDI 1300.18, each service runs a casualty program: a uniformed notification officer delivers the news in person, and a Casualty Assistance Officer is then assigned to the family to walk them through benefits, claims, and arrangements. Installation Military & Family Readiness Centers also house casualty assistance staff (notification, casualty reporting, and survivor claims assistance are listed center functions).",
          },
          {
            title: "SGLI death claim route",
            text: "The claim form is SGLV 8283, Claim for Death Benefits. Per the form's own instructions: for a death on active duty, the completed form goes to the branch Casualty Office (the CAO helps the family complete it) — do not send it directly to OSGLI. OSGLI (Office of Servicemembers' Group Life Insurance, administered by Prudential under VA supervision) can be reached at 1-800-419-1473.",
          },
          {
            title: "FSGLI claim (death of a covered spouse or child)",
            text: "Form SGLV 8283A, Claim for Family Coverage Death Benefits, filed to OSGLI.",
          },
          {
            title: "VA survivor claims",
            text: "For a member who died on active duty, the CAO also helps the surviving spouse/child complete VA Form 21P-534a (application for DIC, Death Pension, and Accrued Benefits).",
          },
        ],
        refNote: "Full survivor-benefit detail belongs in the Benefits section — this item only routes the family to the CAO.",
        benefitsRef: true,
        links: [
          { label: "SGLV 8283 — SGLI Claim for Death Benefits (form)", url: "https://www.benefits.va.gov/INSURANCE/forms/sglv-8283-co.pdf" },
          { label: "SGLV 8283A — FSGLI Claim for Family Coverage Death Benefits (form)", url: "https://www.benefits.va.gov/INSURANCE/forms/SGLV-8283A_Bene.pdf" },
          {
            label: "Cannon AFB Military & Family Support Center (casualty assistance as a center function)",
            url: "https://installations.militaryonesource.mil/military-installation/cannon-afb/military-and-family-support-center/military-and-family-support-center",
          },
        ],
      },
    ],
  },
  {
    title: "Spouse Employment & Education",
    entries: [
      {
        name: "SpouseWorks Scholarship (formerly MyCAA)",
        kind: "Spouse education funding",
        summary:
          "Renamed: the MyCAA Scholarship is now the SpouseWorks Scholarship, under the renamed SpouseWorks program. It pays for education and training that leads to portable employment: licenses, certifications, and associate degrees, plus continuing education needed to maintain a license or certification.",
        who: "As the current official program page states it: spouses of active-duty members and spouses of National Guard/Reserve members on qualifying Title 10 orders, across all ranks and pay grades, up to ⚠ $4,000. Start through the SpouseWorks/MyCAA portal — account plus an education and training plan approved before enrolling; the scholarship does not reimburse courses started before approval.",
        flag: "Eligibility conflict across official pages: the current Military OneSource program page and the September 2026 school-orientation fact sheet state the expanded eligibility above (all pay grades, $4,000). Many installation pages still publish the older rules (spouses of E-1–E-9 / W-1–W-3 / O-1–O-3; older versions say E-1–E-5 / W-1–W-2 / O-1–O-2) and some cite a $2,000-per-fiscal-year cap. The current program page governs — older pages are stale.",
        links: [
          { label: "Military OneSource — SpouseWorks Scholarship program page", url: "https://pre.militaryonesource.mil/benefits/spouseworks-scholarship/" },
          { label: "SpouseWorks portal article (MyCAA Scholarship)", url: "https://spouseworks.militaryonesource.mil/portal/article/mycaa-scholarship" },
          {
            label: "SpouseWorks Scholarship school-orientation recap, Sept 2026 (eligibility + $4,000 as briefed to schools)",
            url: "https://download.militaryonesource.mil/spouseworks/spouseworks-scholarship-new-school-orientation-recap.pdf",
          },
          { label: "Portal login (as printed on the program page)", url: "https://mycaa.militaryonesource.mil/mycaa/" },
        ],
      },
      {
        name: "SpouseWorks (formerly SECO) — Career Coaching & Resources",
        kind: "Free career coaching",
        summary:
          "Renamed June 2026: SECO (Spouse Education and Career Opportunities) is now SpouseWorks. It remains a free Military OneSource program: one-on-one career coaching, resume and job-search help, education planning, and the SpouseWorks Scholarship, for military spouses of active-duty and qualifying Guard/Reserve members.",
        who: "Any eligible military spouse, at any point — before a PCS, during a job hunt, or when changing careers. Coaches are reached through Military OneSource (800-342-9647) or the SpouseWorks portal.",
        links: [
          { label: "SpouseWorks portal (program hub — coaching and the scholarship)", url: "https://spouseworks.militaryonesource.mil/portal/article/mycaa-scholarship" },
        ],
      },
      {
        name: "Military Spouse Employment Partnership (MSEP)",
        kind: "Partner-employer job portal",
        summary:
          "MSEP connects military spouses with employers who have committed to recruit, hire, and retain military spouses. It now sits inside SpouseWorks. The spouse-facing job portal lets spouses build a profile/resume and search postings from partner employers.",
        flag: "Partner-count conflict: official documents disagree — the September 2026 partner booklet says 1,000+ employer partners, while a February 2026 MSEP fact sheet says 360+ partners and 360,000+ spouses hired. No single partner number is stated here without an \u201cas of\u201d date; the portal's own partners page is the live source.",
        links: [
          { label: "MSEP job portal", url: "https://msepjobs.militaryonesource.mil" },
          { label: "MSEP partners list (live)", url: "https://msepjobs.militaryonesource.mil/msep/our-partners" },
          { label: "MSEP fact sheet (Feb 2026; figures flagged above)", url: "https://download.militaryonesource.mil/msep/partner-resources/MSEP-Fact-Sheet.pdf" },
        ],
      },
      {
        name: "Professional License Portability — SCRA § 4025a / Interstate Compacts",
        kind: "Federal backstop on military orders",
        summary:
          "When a service member or spouse relocates on military orders, the Servicemembers Civil Relief Act now lets them keep working: under SCRA § 705A, codified at 50 U.S.C. § 4025a (added by the Veterans Auto and Education Improvement Act of 2022, Jan 5, 2023; amended by the FY2025 NDAA), a professional license in good standing from the old state is treated as valid in the new state for the duration of the military orders. This is the federal backstop people informally call military spouse license portability (MSLP).",
        details: [
          "How it works (per the statute): the member/spouse applies in the new state with proof of military orders, a notarized affidavit (license in good standing; will comply with the new state's standards; has been actively using the license in the two years before relocation — as the statute states), and for a spouse, a copy of the marriage certificate.",
        ],
        flag: "Key exception: if the profession is covered by an interstate licensure compact, the compact's rules govern instead — the SCRA route does not override the compact. Compact-covered professions (e.g., nursing, teaching, EMS, physical therapy and others) each have their own member-state lists, so route to the relevant compact rather than a rule list.",
        links: [
          { label: "Statute text — 50 U.S.C. § 4025a (House Office of Law Revision Counsel)", url: "https://uscode.house.gov/us/usc/119-136/t50/s4025a/" },
        ],
      },
      {
        name: "State-by-State License Transfer Pages (DoL VETS)",
        kind: "State directory",
        summary:
          "The U.S. Department of Labor's Veterans' Employment and Training Service (VETS) publishes a \u201cMilitary Spouse License Transfer Options\u201d PDF for each state — what the state offers (expedited review, temporary licenses, compact memberships) and where to apply.",
        flag: "Dated: the state PDFs carry their own \u201clast updated\u201d stamps and some are old (the Arizona example below was last updated 9/28/2022), and they predate/amend around the 2023 federal law in the SCRA entry above. Use them as a starting directory, and confirm current rules with the state licensing board.",
        links: [
          {
            label: "DoL VETS — Military Spouse License Transfer Options, Arizona (example state page)",
            url: "https://www.dol.gov/sites/dolgov/files/VETS/files/state-laws/ARIZONA.pdf",
          },
        ],
      },
    ],
  },
];

FAMILY_GROUPS.push(
  {
    title: "Childcare & School",
    entries: [
      {
        name: "MilitaryChildCare.com — CDC / DoD Child Care Requests",
        kind: "DoD's single child care gateway",
        summary:
          "MilitaryChildCare.com is the DoD's single gateway for requesting military child care — Child Development Centers (CDCs), DoD family child care homes, and school-age care. It is the official federal site operated by the Department of the Navy under the Department of War. Families create one account and a Household Profile that follows them across PCS moves, search programs, and submit requests; programs contact the family when a space matches.",
        who: "Eligible military and DoD families. Request as soon as you know your duty station and tentative arrival date — you are waitlisted from the request date, and offers come no more than 30 days before the date care is needed. A request is not a guarantee of a space; DoD priority rules apply.",
        links: [
          {
            label: "How to request child care and manage your requests (MCC)",
            url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/how-request-child-care-and-manage-your-requests",
          },
          { label: "MCC help / contact page", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/contact" },
        ],
      },
      {
        name: "MCCYN — Fee Assistance for Community-Based Care",
        kind: "Fee assistance",
        summary:
          "Military Child Care in Your Neighborhood (MCCYN) is DoD fee assistance for eligible families who cannot access military-operated care — because of distance or waitlists — to help offset the cost of care with participating community-based providers. MCCYN-PLUS is a variant used in some areas. Requests start in the same place: search and request MCCYN inside your MilitaryChildCare.com account, then pick a provider from the MCCYN Provider List.",
        flag: "Administrator transition: as of June 2026, MCCYN administration for Air Force/Space Force and Marine Corps families is transitioning from Child Care Aware of America to the MCC FAM team, in phases. Follow the instructions inside your MCC account rather than older third-party MCCYN pages.",
        links: [
          {
            label: "MCCYN — request care and register (MCC)",
            url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/mccyn/request-care-and-register",
          },
          { label: "MCCYN program page (MCC)", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/mccyn" },
        ],
      },
      {
        name: "Child care priorities — the published order for who gets a CDC spot first",
        kind: "DoD priority system · MilitaryChildCare.com",
        summary:
          "Military child care demand exceeds supply, so the Department ranks every requesting family by sponsor type and spouse status, and military programs must serve the highest-priority families first. MilitaryChildCare.com determines a family's priority from the sponsor's approved sponsor type plus spouse status (single sponsor, or the spouse's status — active duty / Guard-Reserve on active duty, working, student, seeking employment, or not working; full-time work is defined as 30 hours per week or 100 hours per month, or fewer hours combined with post-secondary enrollment; part-time is below that). Within the order, MilitaryChildCare.com uses the family's assigned priority along with the request-for-care date to determine waitlist order. One eligibility fact that matters to separated families, published on the same guidelines page: for legally separated or divorced parents with joint custody, a child is eligible for DoD child care only when the child resides with the eligible sponsor for at least 25% of the time in a month the child receives care; geographically separated couples are not required to meet residency requirements.",
        who: "Every family requesting military child care — create the household profile and request care at MilitaryChildCare.com; the priority is assigned from the profile's sponsor type and spouse status, so keep both current.",
        bullets: [
          { title: "Priority 1A — Child Development Program Staff", text: "All families where the sponsor is a CDP staff member, regardless of spouse status." },
          { title: "Priority 1B — Single/Dual Military and Military with a Full-Time Working Spouse", text: "(1) Active Duty Combat-Related Wounded Warrior; (2) Single/Dual Active Duty Military/Coast Guard; (3) Single/Dual Guard/Reserve on Active Duty; (4) Active Duty Military/Coast Guard with Full-Time Working Spouse; (5) Guard/Reserve on Active Duty with Full-Time Working Spouse." },
          { title: "Priority 1C — Military with a Part-Time Working Spouse or Spouse Seeking Employment", text: "(1) Active Duty Military/Coast Guard; (2) Guard/Reserve on Active Duty." },
          { title: "Priority 1D — Military with a Full-Time Student Spouse", text: "(1) Active Duty Military/Coast Guard; (2) Guard/Reserve on Active Duty." },
          { title: "Priority 2 — Single/Dual DoD Civilians or DoD Civilian with a Full-Time Working Spouse", text: "(1) Single/Dual DoD or Coast Guard Civilian; (2) DoD or Coast Guard Civilian with Full-Time Working Spouse." },
          { title: "Priority 3 — Space Available", text: "(1) Active Duty Military/Coast Guard or Guard/Reserve on Active Duty with Non-Working Spouse; (2) DoD or Coast Guard Civilian with Spouse Seeking Employment; (3) DoD or Coast Guard Civilian with Full-Time Student Spouse; (4) Gold Star Spouse; (5) Single/Dual DoD Contractor or DoD Contractor with a Full-Time Working, Seeking Employment, or Full-Time Student spouse; (6) with no order of precedence among them — DoD/Coast Guard Civilian with Part-Time or Non-Working Spouse, DoD Contractor with Part-Time or Non-Working Spouse, Deactivated Guard/Reserve Personnel or Inactive Guard/Reserve in a Training Status, Other Federal Employees, Military Retirees." },
        ],
        links: [
          { label: "Family Eligibility and Priority Guidelines — MilitaryChildCare.com", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/family-eligibility-priority-guidelines" },
          { label: "Military Family Types and DoD Priority (Army MWR copy of the MCC chart)", url: "https://rucker.armymwr.com/application/files/7316/0581/8931/Annex_E_MCC_and_DoD_Priority_List_OPORD_20-067.pdf" },
        ],
      },
      {
        name: "Single parents and dual-military couples rank at the top — and what “supplanting” means for everyone else",
        kind: "DoD priority system · supplanting",
        summary:
          "The two family shapes this entry exists for are at the top of the system. A single active-duty parent and a dual-military couple are Priority 1B, item 2 — inside the top family band (1B), behind only Child Development Program Staff (1A) and Active Duty Combat-Related Wounded Warriors (1B item 1). Single/dual Guard and Reserve parents on active duty are 1B item 3. Supplanting, as published: “to improve military members' access to child care, DoW policy allows lower priority families enrolled at a facility-based program to be disenrolled to accommodate higher priority families.” The protection runs the other direction too: families who are Priority 1A or 1B, Gold Star Spouses, or families with a child enrolled at the time of the death of a sponsor are not authorized to be supplanted for any reason; the installation CYP director conducts supplanting reviews of enrolled Priority 1C-or-lower families when higher-priority families are waiting. A spouse-status change can move a family's priority in either direction — when documentation shows a lower priority, the family must be notified it may be subject to supplanting. And the seeking-employment spouse status is time-limited as published: if a spouse is seeking employment and the child is enrolled, the spouse must get a job within 180 days or the child could be removed from care.",
        who: "Single parents and dual-military couples first — the system ranks you first; keep your MilitaryChildCare.com sponsor type and spouse status current, because the priority follows them. Everyone else: a supplanting notice is this policy working as published; your installation Child & Youth Programs office is the route for questions.",
        links: [
          { label: "Family Eligibility and Priority Guidelines — MilitaryChildCare.com", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/family-eligibility-priority-guidelines" },
        ],
      },
      {
        name: "MCCYN fee assistance runs on a tighter priority — and buys community care down to installation-comparable fees",
        kind: "Fee assistance · MCCYN",
        summary:
          "MCCYN — Military Child Care in Your Neighborhood — is the fee-assistance route when a family cannot access military-operated care. MilitaryChildCare.com's own guidelines page states up front that the MCCYN and CCYH fee assistance programs “use more restrictive prioritization and eligibility guidelines” than installation care. As the services publish it: MCCYN provides fee assistance for eligible families whose children (birth through 12 years) are enrolled in licensed community-based care when installation care is not accessible — because of distance or waitlists; the assistance buys the family's fee down so they pay reduced fees comparable to those charged at an installation for similar services (Army: fee assistance “compensates for the difference between a community-based provider's rate and an installation's rate for similar services,” calculated against provider rate caps, based on total family income; the Army program is administered by Child Care Aware® of America, is not an entitlement, and is subject to availability of funds). Army eligibility as published: children who are wait-listed and not currently enrolled in on-base care, and MCCYN is limited to single-parent families, families with a working spouse, or a spouse enrolled in school; spouses looking for work are eligible for fee assistance for 60 days. Navy eligibility as published: active duty, Reservists on active duty, and Navy civilians who are stationed at a pre-identified fee-assistance-eligible installation or do not live near a DoD installation with a Child and Youth program; if the sponsor is married, the spouse must be employed, actively seeking employment, or a full-time student. The request still starts at MilitaryChildCare.com — see the MCCYN card above for the request route and its administrator-transition flag.",
        who: "Families who cannot access installation care — request at MilitaryChildCare.com; Child Care Aware® of America administers Army/Air Force fee assistance; your installation CYP office answers eligibility questions.",
        links: [
          { label: "Family Eligibility and Priority Guidelines — MilitaryChildCare.com", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/family-eligibility-priority-guidelines" },
          { label: "Army Child Care Fee Assistance Programs — MyArmyBenefits", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Army-Child-Care-Fee-Assistance-Programs?serv=120" },
          { label: "Alternative Child Care Programs (MCCYN) — Navy CYP, Naval Base Kitsap", url: "https://kitsap.navylifepnw.com/child-youth/child-care/alternative-child-care-programs" },
        ],
      },
      {
        name: "Hourly care — the published drop-in layer at CDCs and school-age centers",
        kind: "Backup care · hourly / drop-in",
        summary:
          "Hourly care is the system's published answer to “I need care for a few hours” — short, reservable blocks at installation Child Development Centers and School Age Care programs, separate from a full-time enrollment slot. It exists across the services; its hours, prices, and caps are set per installation and vary (see the flag). Army (official MyArmyBenefits CDC fact sheet): CDCs offer full-day, part-day, and hourly care for children 6 weeks to 5 years; “Centers offer drop-off care on an hourly basis. Reservations may be made in advance. Children are also accepted on a walk-in basis, space permitting.” Army installation pages publish the mechanics locally — e.g., USAG Humphreys CYS: hourly care for CYS-registered children at CDC/SAC facilities, reserved up to 14 days in advance by calling or visiting the facility, charged in 30-minute or one-hour increments, may not exceed 15 hours per week for facility-based programs, with a no-show fee policy (a 2-hour no-show fee if a reservation is not cancelled at least 24 hours ahead); Fort Wainwright publishes hourly care by reservation up to two weeks in advance with limited daily openings, at its own published example price of $5/hour (Humphreys publishes $8/hour — installation examples, not a DoD price). Navy (Navy CYP Parent Handbook): “Occasionally, families need child care for short periods to deal with an emergency, attend a doctor's appointment, or take care of other responsibilities. If programs have hourly care spaces available in CDCs, SAC, or 24/7 Centers, those spaces are offered on a ‘first come, first served’ basis during normal operating hours”; reservations can be made on CYP Online Services or by calling the program up to 30 days in advance, after completing registration. The step families miss: the child must be registered with the installation's CYS/CYP (Parent Central Services / CYP registration + orientation) before hourly care can be used.",
        who: "Any registered family needing a few hours — a duty conflict, an appointment, a drill day where the installation offers the hours. Register first (Parent Central Services for Army, CYP registration for Navy), then reserve with the CDC/SAC directly or its online system (WebTrac for Army, CYP Online Services for Navy). Your installation's CYP page — reached via My Installation — carries its hours and prices.",
        flag: "⚠ Hourly-care prices and caps conflict across official installation pages — printed as variance, never as a DoD price: $8/hour (Humphreys; also NSA Bethesda Navy CYP, with a 2-hour minimum and hourly care closed weekends and federal holidays), $5/hour (Fort Wainwright), and an older CNIC hourly fee agreement form's $4/hour; weekly caps publish at 15 hours (Humphreys) and 25 hours (older CNIC form). The mechanics — reserve ahead, registration first, space-available — are the rule; any figure is a named installation's example.",
        links: [
          { label: "On Base Child Development Centers (Benefit Fact Sheet) — MyArmyBenefits", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Child-Development-Centers-(CDCs)?serv=121" },
          { label: "Parent Central Services — USAG Humphreys CYS", url: "https://humphreys.armymwr.com/programs/parent-central-services" },
          { label: "Hourly Child Care — Fort Wainwright CYS", url: "https://wainwright.armymwr.com/programs/hourly-child-care" },
        ],
      },
      {
        name: "Family Child Care homes — the flexible-hours layer (evenings, weekends, overnight)",
        kind: "Backup care · FCC homes",
        summary:
          "Family Child Care (FCC) — certified providers caring for small groups in their own homes on or near the installation — is the layer the services publish for non-standard schedules. Unlike a CDC's fixed operating hours, an FCC provider's hours are the provider's own, and services publish FCC explicitly as the flexible option. Kadena Air Base's official FCC page: “FCC is flexible — many providers can respond to the unique needs of military schedules such as weekends, evenings, and intermittent care”; care in one home for children 6 weeks to school age (siblings together), no more than six children in care at once including the provider's own children under eight, and no more than two of the six under age two. The same page's Expanded Family Child Care table publishes the Air Force's mission-care categories at set maximums, including: Deployment Child Care (member or spouse deployed 30 days or more for a contingency operation — max 16 hours per month, pre- and post-deployment), Emergency Medical Care (immediate medical emergency for a family member — max 48 hours or subsidy), Contingency/Emergency Care (real-world contingency or emergency operation — max 16 hours per month, up to 3 months), and Military Spouse Appointment Child Care (max 16 hours per month with appointment documentation). Installation FCC pages elsewhere publish the same flexibility in local terms (MilitaryINSTALLATIONS listings note FCC homes offering “non-traditional childcare hours; therefore, hours may vary depending on care needed”). What FCC is not: a guarantee. A given installation's providers choose which schedules they offer, so weekend/overnight care exists only where a provider offers it — the check is the installation FCC office / MilitaryChildCare.com provider search.",
        who: "Families whose schedules don't fit CDC hours — evenings, weekends, overnights, rotating shifts. Start at your installation FCC office for provider lists and the Expanded FCC categories, or search FCC options at MilitaryChildCare.com.",
        links: [
          { label: "Family Child Care — Kadena Air Base FSS", url: "https://kadenafss.com/family-child-care" },
          { label: "MilitaryINSTALLATIONS child care listings — Military OneSource", url: "https://installations.militaryonesource.mil/search?program-service=37/view-by=ALL" },
        ],
      },
      {
        name: "Drill-weekend care — two published programs, neither of them DoD-wide",
        kind: "Backup care · Guard & Reserve drill weekends",
        summary:
          "For the Guard/Reserve drill weekend specifically, two official programs publish care. Neither is a DoD-wide entitlement, and this entry prints them as exactly what they are. (1) Air Force Expanded FCC — Home Community Care: an ANG/AFR member in Inactive Duty Training (IDT) drill-period status (forms AFR40A / ANG150S), performing a regularly scheduled or properly rescheduled IDT, with no one else in the home available to provide care, is eligible for care up to a maximum of 12 hours per day. (2) Weekend Drill Child Care (WDCC) — published on an Army National Guard program flyer as “an officially endorsed Army National Guard initiative, administered by Upwards”: WDCC covers drill-weekend care 6 AM to 6 PM for children 6 weeks to 12 years, matched through state-licensed or registered providers who pass FBI fingerprint and child abuse registry checks and annual state inspections. The flyer sourced for this entry is one state's (Montana) program flyer — no DoD-wide or National Guard Bureau page confirming which states currently run WDCC was found, so this entry names the program and its published hours/ages without asserting availability in any particular state. For everyone else, the published drill-weekend route is the general one: FCC flexible hours (previous entry) and hourly care where an installation offers weekend hours — most CDCs publish Monday–Friday hours, so a drill weekend is precisely the case where the installation CYP page, reached via My Installation, is the check. Guard & Reserve carries a cross-link card to this entry.",
        who: "Air National Guard / Air Force Reserve members — installation FCC office (Expanded FCC / Home Community Care). Army National Guard — the state WDCC program route on the flyer (careforheroes@upwards.com). All others — your installation CYP page for weekend hours.",
        flag: "⚠ WDCC's reach is verified only at flyer level (a Montana-hosted Army National Guard program flyer describing an officially endorsed ARNG initiative). Availability in your state is not asserted — confirm through the program contact or your state Guard family programs office.",
        links: [
          { label: "Family Child Care (Expanded FCC table) — Kadena Air Base FSS", url: "https://kadenafss.com/family-child-care" },
          { label: "Weekend Drill Child Care (WDCC) program flyer — Army National Guard initiative, via Montana DLI", url: "https://content.govdelivery.com/attachments/MTDLI/2026/10/28/file_attachments/3834480/WDCC.pdf" },
        ],
      },
      {
        name: "Deployment respite hours and the in-home pilot — the published backup layer for duty conflicts",
        kind: "Backup care · respite + CCYH pilot",
        summary:
          "Three published programs cover the “duty just ate my child care plan” case beyond hourly/FCC: service respite-care hours tied to deployment, and the Department's in-home fee assistance pilot for nontraditional schedules. Army Respite Care (Fort Campbell CYS, published under the Army's FRAGO 01 update to Execution Order 300-16): families of service members with eligible deployment orders are eligible for up to 16 hours of no-cost, hourly child care per child per month, delivered through CYS Parents Day & Night Out monthly events; the Campbell page states the respite hours cannot be used with FCC providers or Armed Services YMCA care. The figure is published at installation level under an Army execution order — no Army-wide CYS page stating the same figure was verified, so it is attributed to the Army respite program as the Campbell page publishes it. Air Force publishes the same shape inside Expanded FCC: Deployment Child Care at 16 hours per month pre- and post-deployment. Child Care in Your Home (CCYH) — Military OneSource, describing the DoD fee assistance pilot: fee assistance for service members using in-home providers (such as nannies), which “gives families with nontraditional schedules the flexibility to get care from in-home providers… whenever they need it, including rotating shifts and weekends”; children 6 weeks to 5 years are eligible (school-age 6–12 only when younger siblings are offered care); the amount is based on total family income and does not cover the entire cost; families find their own providers and may use “the expanded hourly child care service available through Military OneSource” to search; CCYH is offered only in the listed high-demand/longest-waitlist regions, and families must be on the MilitaryChildCare.com waitlist or requesting care there in those regions. It is a pilot, in named regions — not a universal benefit — and its region list changes by pilot year, so it is not reproduced here.",
        who: "Deployed and deploying families (installation CYS for Army respite / Parents Day & Night Out schedules; installation FCC office for Air Force deployment care), and families with nontraditional schedules in a CCYH pilot region (MilitaryChildCare.com + the CCYH page for regions and eligibility).",
        links: [
          { label: "Parent Central Services (Army Respite program) — Fort Campbell CYS", url: "https://campbell.armymwr.com/programs/cys-s/parent-central-services" },
          { label: "Family Child Care (Expanded FCC) — Kadena Air Base FSS", url: "https://kadenafss.com/family-child-care" },
          { label: "Child Care Fee Assistance Pilot Program (Child Care in Your Home) — Military OneSource", url: "https://pre.militaryonesource.mil/parenting/childcare/in-home-child-care-fee-assistance-program/" },
        ],
      },
      {
        name: "Sick-child care — the finding: no DoD program exists",
        kind: "Labeled negative finding — read it as the answer",
        alertBadge: "FINDING — NO PROGRAM EXISTS",
        summary:
          "“My kid is sick, I have duty tomorrow” has no published DoD or service sick-child care program behind it. No official page found in the Round 2 research (November 9, 2026) publishes a mildly-ill / sick-child care entitlement, a sick-child CDC room, or a DoD backup-care benefit that covers a sick child. This entry ships as the finding, with the published routes that actually exist around it — it does not invent a program. What official pages do publish: hourly care framed for short-notice needs (the Navy CYP Parent Handbook's hourly spaces for when “families need child care for short periods to deal with an emergency, attend a doctor's appointment, or take care of other responsibilities”); FCC providers whose own schedules may flex; in-home care through the CCYH pilot in its regions; and Military OneSource's expanded child care search service for finding local providers. None of those pages promises care for a child who is ill, and standard CDC/FCC health rules are set by the program, not by this entry. The honest position: there is no sick-child care benefit to claim; the backup routes are hourly care, an FCC provider, in-home care where the pilot reaches, and your Family Care Plan's caregiver list — and the installation CYP office is the check for anything local.",
        who: "Any parent whose child is ill before a duty day — your Family Care Plan caregivers are your own backup; the installation CYP office is the check for anything installation-specific.",
        links: [
          { label: "Family Eligibility and Priority Guidelines — MilitaryChildCare.com (the gateway for the routes above)", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/family-eligibility-priority-guidelines" },
        ],
      },
      {
        name: "School Liaison Officers (SLOs)",
        kind: "K-12 point of contact",
        summary:
          "Every installation has School Liaison Officers — the K-12 point of contact between military families, the installation, and local schools. SLOs help with school transitions at a PCS, local school information, deployment support for students, and special-education navigation/advocacy. Free; no eligibility test beyond being a military-connected family.",
        who: "Any family with a K-12 student, ideally contacted before arriving at a new duty station. Find your SLO through your gaining installation's school support services page (listed in MilitaryINSTALLATIONS).",
        links: [
          {
            label: "Carlisle Barracks School Support Services — finding a school (example installation SLO page)",
            url: "https://carlisle.armymwr.com/programs/school-support-services/finding-school",
          },
        ],
      },
      {
        name: "Interstate Compact on Educational Opportunity for Military Children (MIC3)",
        kind: "All 50 states + DC",
        summary:
          "The Compact is an agreement among all 50 states and DC that smooths public-school transfers for military children. It addresses the friction points of a mid-year move: timely enrollment and records transfer, course/grade placement, attendance flexibility, and graduation requirements (e.g., accepting exit exams or courses from the sending state). It is governed by the Military Interstate Children's Compact Commission (MIC3).",
        who: "Children of active-duty members (including Guard/Reserve on Title 10 active-duty orders), and — for a limited window — children of members who are severely injured/medically discharged or who died on active duty. Public schools only. If a school isn't applying the Compact, the escalation path is: School Liaison Officer → State Compact Commissioner (listed at mic3.net).",
        links: [{ label: "MIC3 FAQs (what the Compact covers, who is covered, how to get help)", url: "https://mic3.net/faqs/" }],
      },
    ],
  },
  {
    title: "Family Members with Special Needs (EFMP)",
    entries: [
      {
        name: "EFMP Overview — What Enrollment Does",
        kind: "Mandatory enrollment",
        summary:
          "EFMP is a mandatory enrollment program (DoDI 1315.19) for active-duty members who have a spouse, child, or dependent adult with documented medical and/or educational special needs. Enrollment documents the needs — it does not limit the member's career by itself — so the needs can be considered in the assignment process: the goal is that members are assigned where the required medical care and educational services actually exist. EFMP has three parts: identification & enrollment, assignment coordination, and family support.",
        bullets: [
          {
            title: "How to enroll",
            text: "Enroll when a qualifying need is identified — at the installation military treatment facility's EFMP office or your branch system in the next card — using DD Form 2792 (Family Member Medical Summary) and, for a child with special-education/early-intervention needs, DD Form 2792-1.",
          },
          {
            title: "Keep it current",
            text: "Update at least every 3 years, whenever needs change, and before a PCS (overseas family-member travel screening runs off the same records).",
          },
          {
            title: "EFMP & Me",
            text: "The Military OneSource / Office of Special Needs tool builds personalized checklists for enrollment, PCS, deployment, and education/medical changes; free, no account needed to browse.",
          },
          {
            text: "Note: creating an EFMP & Me account is not EFMP enrollment — enrollment happens through your branch (see EFMP by Branch).",
          },
        ],
        links: [
          { label: "EFMP & Me — About the Program", url: "https://efmpandme.militaryonesource.mil/about-efmp-program" },
          { label: "EFMP & Me — FAQs", url: "https://efmpandme.militaryonesource.mil/faq" },
        ],
      },
      {
        name: "EFMP by Branch",
        kind: "Same program, different doors",
        summary: "All branches run the same DoD program; the systems and doors differ.",
        bullets: [
          {
            title: "Army — EFMP via Enterprise EFMP (E-EFMP)",
            text: "Enrollment, updates, disenrollment, and overseas screening are done online in E-EFMP (CAC/DS Logon; the Soldier initiates the package). Family support runs through Army Community Service (ACS).",
            links: [
              { label: "Army EFMP overview", url: "https://recruiting.army.mil/hq/HRD/SFA/efmp/" },
              { label: "E-EFMP system", url: "https://efmp.army.mil/EnterpriseEfmp/" },
            ],
          },
          {
            title: "Navy — EFMP",
            text: "Enrollment paperwork is maintained electronically in NFAAS (Navy Family Accountability and Assessment System); Navy Personnel Command (PERS-456) runs enrollment and assignment coordination, and EFMP Case Liaisons at Fleet & Family Support Centers provide family support. Enrolled Sailors remain worldwide assignable/deployable — EFMP shapes where accompanied assignments go, it does not exempt sea duty.",
            links: [
              { label: "MyNavyHR — Exceptional Family Member", url: "https://www.mynavyhr.navy.mil/Support-Services/Exceptional-Family-Member/" },
            ],
          },
          {
            title: "Marine Corps — EFMP via MCCS (Marine & Family Programs)",
            text: "Enroll with DD Form 2792 / 2792-1 through the local installation EFMP office or HQMC EFMP; assignment consultations are scheduled with HQMC EFMP, which reviews proposed duty stations for availability of care before endorsing accompanied orders.",
            links: [
              {
                label: "Installation EFMP page (Miramar; same template Corps-wide)",
                url: "https://miramar.usmc-mccs.org/marine-family-support/military-family-life/exceptional-family-member-program/",
              },
            ],
          },
          {
            title: "Air Force & Space Force — EFMP via AFPC",
            text: "Run by the Air Force Personnel Center's EFMP Central Cell in three parts: EFMP-Medical (screening/enrollment, Family Member Travel Screening), EFMP-Assignments, and EFMP-Family Support (at the installation Military & Family Readiness Center). Applies to Airmen and Guardians. 24/7 entry point is the Total Force Service Center, 800-525-0102.",
            links: [
              { label: "AFPC — Exceptional Family Member Program", url: "https://www.afpc.af.mil/Exceptional-Family-Member-Program/" },
            ],
          },
        ],
        links: [],
      },
      {
        name: "Coast Guard — Special Needs Program (SNP)",
        kind: "The Coast Guard's program — different name",
        alertBadge: "NOT CALLED EFMP",
        summary:
          "Verified: the Coast Guard does NOT call it EFMP, and the name is \u201cSpecial Needs Program (SNP)\u201d — not \u201cSPNS.\u201d Under COMDTINST 1754.7C, the SNP is run by the Office of Work-Life (CG-111) through regional Family Resource Specialists at HSWL Work-Life offices. It serves the same purpose as EFMP: documenting a family member's special needs so they are considered for assignments and services.",
        who: "Mandatory enrollment for active-duty members and Selected Reserve members on orders of 181+ days whose family member has documented medical/educational special needs. The family member must be enrolled in DEERS and reside with the sponsor (exception: unaccompanied tours). Same forms as EFMP — DD Form 2792 and DD Form 2792-1 — updated every 3 years or when needs change. Practical hook: SNP enrollment is the gate to TRICARE ECHO benefits for Coast Guard families.",
        links: [
          {
            label: "MyCG — Member's enrollment in the Special Needs Program can benefit your family",
            url: "https://www.mycg.uscg.mil/News/Article/2787588/members-enrollment-in-the-special-needs-program-can-benefit-your-family-and-mak/",
          },
          { label: "MyCG — Special Needs Program resource page", url: "https://www.mycg.uscg.mil/Resources/Article/2485419/special-needs/" },
        ],
      },
    ],
  },
  {
    title: "Support Centers & Counseling",
    entries: [
      {
        name: "Military & Family Support Centers — Name by Branch",
        kind: "One roof on every installation",
        summary:
          "Every installation has a family support center: information & referral, relocation help, financial readiness, employment assistance, EFMP family support, casualty assistance, and deployment support under one roof. The DoD-generic name is \u201cMilitary and Family Support Center\u201d — and per Military OneSource, the centers serve all branches' families, not just the host branch. Find yours in MilitaryINSTALLATIONS.",
        bullets: [
          { title: "Army", text: "Army Community Service (ACS)" },
          { title: "Marine Corps", text: "Marine Corps Family Programs (via MCCS; installation pages also style it \u201cMarine & Family Programs\u201d)" },
          { title: "Navy", text: "Fleet and Family Support Program — Fleet & Family Support Centers (FFSC)" },
          { title: "Air Force", text: "Military and Family Readiness Center (M&FRC)" },
          { title: "Space Force", text: "Military and Family Readiness Center" },
        ],
        flag: "Coast Guard center naming varies between official sources: Military OneSource's current listing says \u201cCoast Guard Workforce and Family Service\u201d; in practice CG families are also served through HSWL Work-Life offices (flagged, not resolved).",
        links: [
          {
            label: "Military OneSource — Find Readiness Support for Military Life (center names + what they do)",
            url: "https://www.militaryonesource.mil/military-basics/extended-family-friend/find-readiness-support-for-military-life/",
          },
        ],
      },
      {
        name: "Military OneSource Non-Medical Counseling",
        kind: "Free — up to 12 sessions per issue",
        summary:
          "Free, confidential, short-term counseling for everyday-life issues — relationship conflict, stress, parenting, grief, deployment adjustment. Up to 12 sessions per issue, in person, by phone, by live chat, or by video, with licensed counselors holding a master's or doctoral degree. Available 24/7: call 800-342-9647 or start a secure live chat. Your information is not provided to your chain of command.",
        details: [
          "Limits (as OneSource states them): non-medical counseling does not address active suicidal or homicidal thoughts, sexual assault, child abuse, domestic violence, alcohol/substance abuse, or diagnosis/treatment of a diagnosed mental-health condition. Those route elsewhere (e.g., Military Crisis Line, 988 then press 1). Confidentiality has duty-to-warn exceptions.",
        ],
        links: [
          { label: "Military OneSource — Using Military OneSource Counseling", url: "https://pre.militaryonesource.mil/resources/millife-guides/using-military-onesource-counseling/" },
        ],
      },
      {
        name: "MFLC — Military and Family Life Counseling",
        kind: "No records kept",
        summary:
          "MFLCs are licensed master's/doctorate-level counselors embedded where families already are — installations, units, and schools (including Child & Youth Behavioral MFLCs). They provide free, confidential, short-term non-medical counseling for individuals, couples, families, and groups, on or off the installation.",
        details: [
          "What makes MFLC different: no records are kept — MFLCs do not document sessions or collect personally identifiable information on activity forms, which makes it the lowest-paper-trail option for everyday problem-solving. Sessions are capped at up to 12 per issue. Same confidentiality exceptions as OneSource (duty to warn; mandated reporting for domestic violence, child/elder abuse or neglect, sexual assault, danger to self/others). MFLCs do not treat serious clinical issues (major depression, PTSD, TBI, active suicidal/homicidal ideation, substance use) — they warm-handoff to the right resource instead. Find your MFLC through your installation family support center.",
        ],
        links: [
          {
            label: "Fort Gordon Military & Family Support Center (MFLC described in the official listing)",
            url: "https://installations.militaryonesource.mil/military-installation/fort-gordon/military-and-family-support-center/military-and-family-support-center",
          },
          {
            label: "Military OneSource — MFLC Commander's User Guide (program rules incl. no-records policy)",
            url: "https://supportrequest.militaryonesource.mil/Content/PDF_Files/Commanders-User-Guide.pdf",
          },
        ],
      },
      {
        name: "Chaplains — The Confidentiality Note",
        kind: "Absolute confidentiality",
        summary:
          "Chaplains are the one resource with absolute confidentiality. Under Military Rule of Evidence 503, communications made to a chaplain as a formal act of religion or as a matter of conscience are privileged: a chaplain cannot disclose them without the speaker's permission — there is no duty-to-warn exception and no chain-of-command reporting, unlike OneSource counseling or MFLC. You do not need to be religious, and chaplains serve members and families of all faiths and none. Unit/installation chaplains and duty chaplains are available 24/7 in emergencies.",
        links: [
          {
            label: "U.S. Army — Chaplain confidentiality: \u201cGo tell it to the chaplain\u201d (MRE 503 explained)",
            url: "https://www.army.mil/article/274584/chaplain_confidentiality_go_tell_it_to_the_chaplain",
          },
          {
            label: "11th Marine Regiment Religious Ministries (\u201c100% confidentiality\u201d as published)",
            url: "https://www.1stmardiv.marines.mil/units/11thmarineregt.aspx",
          },
        ],
      },
    ],
  },
  {
    title: "Dual-Military Records & Single-Parent Housing Money",
    entries: [
      {
        name: "Children of two sponsors — the couple chooses one parent as each child's DEERS sponsor",
        kind: "DEERS · dual-military families",
        summary:
          "When both parents are service members, each parent has their own DEERS profile — neither is the other's dependent — and the children need a sponsor of record. TRICARE publishes the rule in one sentence: “If you and your spouse are both active duty service members, you'll each have your own DEERS profile. If you and your partner have children, you'll need to choose one parent to be their sponsor in DEERS.” The Defense Health Agency's newborn guidance publishes the same election at the moment it usually happens — “If both parents are service members, choose one to be the child's sponsor in DEERS” — and the consequences follow the sponsor's status: a child whose sponsor is an active duty member is automatically enrolled in a TRICARE plan once registered in DEERS (Prime, Select, or Select Overseas by where the child lives), with 90 days from automatic enrollment to change plans; a child whose sponsor has TRICARE Reserve Select or TRICARE Retired Reserve is not auto-enrolled. Registration itself runs through a Uniformed Services ID card (RAPIDS) office — the sponsor registers family members in person; other record changes route through ID Card Office Online (IDCO), the RAPIDS office, or the DMDC/DEERS Support Office at 1-800-538-9552. One milConnect nuance, so couples don't confuse the two: a beneficiary who has more than one sponsor (DMDC's own example is the joint-service marriage) can use milConnect's Change My Sponsor feature to switch which sponsor's view they see for medical/dental/pharmacy eligibility and enrollment information — that changes the view, not the DEERS sponsor of record.",
        who: "Dual-military parents — at the child's DEERS registration and whenever the sponsor of record needs to change (RAPIDS office for the record; milConnect/IDCO for viewing).",
        flag: "⚠ Whether siblings may be split between the two sponsors (one child under one parent, another under the other) is not stated on an official page found in the Round 2 research: TRICARE's marriage guidance says “choose one parent to be their sponsor” (plural children, one choice), while the DHA newborn guidance phrases the election per child. Both published phrasings print here; no per-child splitting rule is asserted — the RAPIDS office is the route for your family's case.",
        links: [
          { label: "Getting married? Here's what you need to know about your TRICARE benefit — TRICARE Newsroom", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4366251/getting-married-heres-what-you-need-to-know-about-your-tricare-benefit" },
          { label: "Q&A: Getting TRICARE for Your Newborn Baby — Defense Health Agency (via DVIDS)", url: "https://www.dvidshub.net/news/printable/542198" },
          { label: "Changing Your Sponsor — milConnect, DMDC", url: "https://milconnect.dmdc.osd.mil/milconnect/help/topics/changing_your_sponsor.htm" },
        ],
      },
      {
        name: "Single parent? Your housing money — BAH, partial BAH, and BAH-DIFF",
        kind: "Cross-link · the rule lives in PCS Move Center",
        summary:
          "If you serve as a single parent — including when your child lives with you part of the year, or part-time custody means your child is with you only part of the time — your housing money is explained in the PCS Move Center's entry on single members, and it is summarized here so you can find it from a parent's words. The pieces: members in single-type government quarters typically draw only partial BAH — or BAH-DIFF if they're in single quarters and authorized BAH solely because they pay child support. BAH-Diff, exactly as the DoD Financial Management Regulation frames it: a member assigned to single-type Government quarters is entitled to BAH-Diff if they are paying support to a biological child, adopted child, or stepchild in an amount equal to or greater than the applicable BAH-Diff rate; if the child support payment is less than the BAH-Diff rate, BAH-Diff is not authorized. The BAH-Diff rate is a fixed, non-locality-based rate — the difference between the with-dependent and without-dependent Basic Allowance for Quarters (BAQ) rates as of December 31, 1997, increased each year by the average pay raise percentage — which is why BAH-Diff amounts look unrelated to local rents. No dollar figures here: the rate is grade-based and updated annually, and DTMO publishes the current amounts. The full entry — including the move off-base, when your gaining command authorizes it — is in the PCS Move Center (Special Cases), and the child-support side is in Pay & Money's dual-military and BAH entries where they apply.",
        who: "Single parents in barracks or single quarters, parents with part-time custody, and any member whose only basis for a housing allowance is paying child support — servicing finance office for your own case; DTMO for the current BAH-Diff amounts by grade.",
        refNote: "Deep link: PCS Move Center → Special Cases → “Single Members — Barracks, BAH, and the Move Off-Base.” Custody-duration rules are separate published rules and are cross-linked there, not merged into BAH-Diff here.",
        links: [
          { label: "DTMO — BAH Eligibility FAQs (BAH-DIFF framing)", url: "https://www.travel.dod.mil/Support/ALL-FAQs/Article/2978684/" },
          { label: "DoD Financial Management Regulation, Vol. 7A, Ch. 26 (May 2025), §5.6 — DoD Comptroller", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf" },
        ],
      },
    ],
  },
);
