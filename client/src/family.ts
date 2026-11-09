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
    title: "EFMP — Exceptional Family Member Program",
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
);
