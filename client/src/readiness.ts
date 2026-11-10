// Readiness & Life Skills — static reference data transcribed from the
// researched readiness pack (~/workspace/military-app/readiness/
// readiness.md, researched November 8, 2026). Summaries, who/when
// statements, and links come only from the pack; every link is copied
// verbatim from an official source page or official search result.
//
// Fidelity rules baked into this data (the pack's 16 flags, preserved):
// - Figures that can change (an SDAP amount, a year's solicitation
//   cycle) are rendered attributed to the page that states them, never
//   as permanent facts.
// - URLs the pack found only inside other pages' text are NOT shipped
//   as links (the HRC Nominative Assignments Branch URL; the AFPC DSD
//   assignment-page URL quoted inside a DVIDS article; the AFLA
//   locator's older deeper path).
// - Space Force special duties: the pack verified NO standalone USSF
//   program page, so there is no Space Force entry in the Special
//   Duties group rather than an invented one.
// - Uniform & grooming: publication names and official links only —
//   NO standards tables are reproduced. The Coast Guard manual is
//   cited as "COMDTINST M1020.6 (series)" exactly as the pack directs,
//   with no edition suffix printed. Space Force carries its OWN
//   instruction (SPFI 36-2903, Aug 2025), not the Air Force book.
// - Off-limits establishment lists are PER-INSTALLATION ONLY — no
//   national list exists, and none is presented.
// - FVAP return dates are stated at fact-sheet level only (FPCA every
//   January and every time you move; FPCA by August 1 for the general
//   election; ballots mailed at least 45 days ahead) — no specific
//   October return date is printed, because FVAP's own graphics for
//   the same cycle differ.

export type ReadinessLink = { label: string; url: string };

export type ReadinessBullet = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type ReadinessEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: ReadinessBullet[];
  flag?: string;
  links: ReadinessLink[];
  /** Extra label rendered as a red badge, with a red card border. */
  alertBadge?: string;
  /** Cross-reference button to the MOS Library (the EOD entry). */
  libraryRef?: boolean;
};

export type ReadinessGroup = {
  title: string;
  note?: string;
  entries: ReadinessEntry[];
};

export const READINESS_STANDING_NOTE =
  "Every summary and link in this section comes from the official page it points to. Figures that can change — a pay amount, a year's application cycle — are labeled as what the current page states, not as permanent facts. Uniform entries name the official publication and link to it; the standards themselves live in the publication, not here.";

export const READINESS_GROUPS: ReadinessGroup[] = [
  {
    title: "Pre-Deployment Readiness",
    entries: [
      {
        name: "Start Here: The Official Pre-Deployment Checklist",
        kind: "Military OneSource",
        summary:
          "Military OneSource's pre-deployment checklist walks the whole runway in order — paperwork, family care plan, finances, legal documents, and home-front prep — so nothing gets left to the last week.",
        who: "Any service member with deployment orders; start as soon as orders are in hand.",
        links: [
          { label: "Military OneSource — Pre-deployment checklist", url: "https://www.militaryonesource.mil/resources/tools/military-deployment-checklists/predeployment-list/" },
          { label: "Military OneSource — Deployment resources for families", url: "https://www.militaryonesource.mil/deployment/pre-deployment/deployment-resources-for-families/" },
        ],
      },
      {
        name: "Family Care Plan — Who Must Have One",
        kind: "Military OneSource",
        summary:
          "A family care plan is the written plan for who cares for your dependents while you're deployed or on temporary duty — who takes the kids or dependent family members, where they go, and how they're supported. Military OneSource states a plan is required for:",
        bullets: [
          { text: "Single parents (military or civilian)" },
          { text: "Dual-member couples with dependents" },
          { text: "Members with custody or joint custody of children under 19 whose non-custodial parent is not the current spouse, or who otherwise bear sole responsibility for those children" },
          { text: "Members primarily responsible for dependent family members" },
        ],
        details: [
          "A power of attorney is required as part of the plan; the designated caregiver should have current DEERS enrollment and a current dependent ID card (generally needed at age 10 and up). If unmarried parents deploy at the same time, Military OneSource notes a judge can temporarily transfer custody to the designated caregiver.",
        ],
        who: "Everyone in the categories above, before deploying; plans should be reviewed and updated whenever family circumstances change.",
        links: [
          { label: "Military OneSource — Securing the home front: deployment paperwork prep", url: "https://www.militaryonesource.mil/deployment/pre-deployment/securing-the-home-front-deployment-paperwork-prep/" },
        ],
      },
      {
        name: "Deployment Paperwork Prep: Emergency Data, SGLI, Wills, Powers of Attorney",
        kind: "Military OneSource",
        summary:
          "The same Military OneSource paperwork page covers the full document sweep before deployment: keep your life insurance current, update your Record of Emergency Data (DD Form 93), and put wills and powers of attorney in place before you leave.",
        who: "Every deploying member; wills/POAs especially for anyone with dependents, property, or accounts a spouse or family member may need to manage.",
        links: [
          { label: "Military OneSource — Securing the home front: deployment paperwork prep", url: "https://www.militaryonesource.mil/deployment/pre-deployment/securing-the-home-front-deployment-paperwork-prep/" },
        ],
      },
      {
        name: "Free Legal Help: Wills, POAs, and Lease/Contract Review",
        kind: "Armed Forces Legal Assistance",
        summary:
          "Military legal assistance offices provide free legal advice and documents — wills, powers of attorney, and help with personal legal matters — though they generally cannot represent you in court. The Armed Forces Legal Assistance (AFLA) locator finds the nearest eligible legal assistance office; it is run by the Air Force JAG but covers all branches.",
        who: "Active-duty members and eligible family members; use before deployment for wills/POAs, and any time a lease, contract, or legal problem needs a professional eye.",
        links: [
          { label: "AFLA legal assistance locator (all branches)", url: "https://legalassistance.law.af.mil" },
        ],
      },
      {
        name: "SGLI: Check Coverage and Beneficiaries in SOES Before You Go",
        kind: "VA / milConnect",
        summary:
          "Servicemembers' Group Life Insurance (SGLI) is managed online through SOES (SGLI Online Enrollment System) in milConnect. You can confirm your coverage amount and update beneficiaries there — beneficiary changes take effect immediately, and only the service member can make changes (not even someone holding your power of attorney).",
        who: "Every covered member; verify beneficiaries before deployment and after any life change (marriage, divorce, new child).",
        links: [
          { label: "VA — Manage your SGLI policy online with SOES", url: "https://www.va.gov/resources/manage-your-sgli-or-fsgli-policy-online-with-soes/" },
          { label: "milConnect", url: "https://milconnect.dmdc.osd.mil/milconnect/" },
        ],
      },
      {
        name: "Financial Readiness Before Deployment: Counselors and Touchpoints",
        kind: "DoD FINRED",
        summary:
          "Pre-deployment is one of the military's official financial-readiness touchpoints. Free, accredited Personal Financial Counselors (PFCs) at installation family support centers help with the pre-deployment money checklist — reviewing the budget on one income manager, setting up allotments so bills keep paying themselves, building an emergency cushion, and making sure a spouse or trusted person can handle finances while you're gone. The DoD Office of Financial Readiness (FINRED) site is the central official hub for this training and for finding a counselor.",
        who: "Every deploying member and their spouse/family financial manager; book a session early, not the week of departure.",
        links: [
          { label: "DoD FINRED", url: "https://finred.usalearning.gov/" },
          { label: "Army Reserve Financial Readiness Program — PFC services", url: "https://www.usar.army.mil/ARFP/FRP/" },
        ],
      },
      {
        name: "SCRA: Tell Your Creditors, Cap the Interest, Protect the Lease",
        kind: "Servicemembers Civil Relief Act",
        summary:
          "The Servicemembers Civil Relief Act (SCRA) is the federal law that protects you financially while you serve: it caps interest at 6% on debts you took on before active service, lets you terminate leases without penalty in qualifying situations, and protects against foreclosure, repossession, and default judgments while you're deployed. The CFPB's explainer walks through each protection and how to invoke it (notify the creditor in writing and provide a copy of your orders).",
        who: "Active-duty members of all branches, plus Reserve and Guard members on qualifying active-duty orders; protections generally start when active service begins.",
        links: [
          { label: "CFPB — The Servicemembers Civil Relief Act (SCRA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/the-servicemembers-civil-relief-act-scra/" },
          { label: "Official SCRA status-verification website", url: "https://scra.dmdc.osd.mil/scra/#/home" },
        ],
      },
      {
        name: "Communication Plan and Caregiver Support",
        kind: "Military OneSource",
        summary:
          "Agree before departure on how you'll stay in touch (apps, call windows across time zones, a backup contact method), who the unit's family contact is, and what the caregiver at home should do in an emergency. Military OneSource publishes a caregiver guide covering what designated caregivers should expect and where to get support during the deployment.",
        who: "Deploying members, spouses, and designated caregivers in the family care plan.",
        links: [
          { label: "Military OneSource — Caregiver support during deployment", url: "https://www.militaryonesource.mil/resources/millife-guides/caregiver-support-during-military-deployment/" },
          { label: "Military OneSource — Deployment resources for families", url: "https://www.militaryonesource.mil/deployment/pre-deployment/deployment-resources-for-families/" },
        ],
      },
      {
        name: "OPSEC for Families: Concept Level Only",
        kind: "Operations security",
        summary:
          "Operations security for families is simple: don't post deployment dates, return dates, unit locations, or movement details on social media; don't share troop-movement specifics in public groups; and delay posting travel/vacation details until you're back. The Army's official OPSEC article gives this same general guidance for staying safe online.",
        who: "Members and especially family members on social media, before and during any deployment or trip.",
        flag: "This entry is deliberately concept-level: no unit-specific OPSEC rules are stated here, because those come from your own command.",
        links: [
          { label: "U.S. Army — Operations security: staying safe while vacationing", url: "https://www.army.mil/article/292701/operations_security_staying_safe_while_vacationing" },
        ],
      },
    ],
  },
  {
    title: "Special Duties & Assignments",
    note: "Overview level only — requirements are as each official program page states them, and screened/volunteer windows change. There is no Space Force entry in this group: no Space Force–specific special-duty program page was verified, so nothing about Guardian special-duty eligibility is asserted here. Guardians interested in instructor or recruiter-type tours should start with their assignment team and the sister-service program pages above.",
    entries: [
      {
        name: "Marine Corps Special Duty Assignments — The HQMC Hub",
        kind: "HQMC Manpower (MMEA)",
        summary:
          "Headquarters Marine Corps Manpower (MMEA “Stay Marine”) runs the Corps' Special Duty Assignments from one hub page covering Recruiting Duty, Drill Instructor Duty, Marine Security Guard (Detachment Commander), and Combat Instructor Duty, with monitor contact information. SDAs are the screened, high-visibility tours that also carry weight for promotion.",
        who: "Marines are screened through their career planner/monitor; the hub page states recruiting-duty basics as: ranks Corporal through Gunnery Sergeant, Secret clearance, valid driver's license, GT score of 90 or higher (waivable), and demonstrated financial stability.",
        links: [
          { label: "HQMC — Special Duty Assignments hub", url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Enlisted-Assignments/Stay-Marine/Special-Duty-Assignments/" },
        ],
      },
      {
        name: "USMC Recruiting Duty",
        kind: "Marine Corps Recruiting Command",
        summary:
          "Recruiters (MOS 8411 track) are the face of the Corps in hometowns across the country — finding and preparing applicants for recruit training. Marine Corps Recruiting Command's page is the official volunteer route, and the detailed requirements live on the HQMC SDA hub (first entry in this group).",
        who: "Volunteers typically Cpl–GySgt meeting the hub-page requirements above; talk to your career planner first.",
        links: [
          { label: "MCRC — Volunteer for recruiting duty", url: "https://www.mcrc.marines.mil/Recruiting-Duty/Volunteer-for-Recruiting/" },
        ],
      },
      {
        name: "USMC Drill Instructor Duty",
        kind: "HQMC Manpower (MMEA)",
        summary:
          "Drill instructors make Marines at MCRD Parris Island and MCRD San Diego — one of the Corps' most demanding and career-defining SDAs, run through the same HQMC screening process as the other B-billets on the hub page.",
        who: "Screened volunteers via career planner and the SDA hub; assignment periods are announced by HQMC Manpower (volunteer windows are published per fiscal year).",
        flag: "No separate standing “become a DI” page was verified — the SDA hub is the official route. Schoolhouse detail (course length etc.) is intentionally not stated: figures in older TECOM news articles conflict.",
        links: [
          { label: "HQMC — Special Duty Assignments hub", url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Enlisted-Assignments/Stay-Marine/Special-Duty-Assignments/" },
        ],
      },
      {
        name: "Marine Security Guard (MSG) — Watchstander",
        kind: "MCESG",
        summary:
          "MSG Marines provide internal security at U.S. embassies and consulates worldwide as part of the Marine Corps Embassy Security Group. Watchstanders serve a 36-month tour across three posts of roughly 12 months each.",
        who: "As the MCESG page states: applications are accepted any time after six months time-on-station, via a Phase II questionnaire and RELM submitted through your career counselor. Marines E-4 and below with dependents cannot join the program; married E-5s have a separate route (next entry).",
        links: [
          { label: "MCESG — Become an MSG (career planners page)", url: "https://www.mcesg.marines.mil/Become-a-MSG/CareerPlanners/" },
        ],
      },
      {
        name: "MSG Detachment Commander / MSAU Route",
        kind: "MCESG",
        summary:
          "Experienced staff NCOs lead embassy detachments as Detachment Commanders, and married E-5s can serve through the Marine Security Augmentation Unit (MSAU) route noted on the MCESG page. Detachment Commander screening also appears on the HQMC SDA hub (first entry in this group).",
        who: "Seasoned SNCOs for Detachment Commander; married E-5s via MSAU per MCESG.",
        links: [
          { label: "MCESG — Become an MSG (career planners page)", url: "https://www.mcesg.marines.mil/Become-a-MSG/CareerPlanners/" },
        ],
      },
      {
        name: "EAD Recruiter (Reserve Marines)",
        kind: "Marine Corps Recruiting Command",
        summary:
          "Extended Active Duty (EAD) Recruiter is the route for Selected Marine Corps Reserve (SMCR) and Individual Ready Reserve (IRR) Marines to serve on recruiting duty — MCRC's dedicated page covers that program specifically.",
        who: "SMCR/IRR Marines interested in full-time recruiting tours.",
        links: [
          { label: "MCRC — Extended Active Duty Recruiter", url: "https://www.mcrc.marines.mil/Resources/Extended-Active-Duty-Recruiter/" },
        ],
      },
      {
        name: "Army Recruiter — Volunteer and AGR Routes",
        kind: "U.S. Army Recruiting Command",
        summary:
          "Army recruiters staff recruiting stations nationwide. U.S. Army Recruiting Command (USAREC) runs two official entry routes: the volunteer recruiter packet for active-duty Soldiers, and the AGR (Active Guard and Reserve) recruiter program, which uses MOS 79R. Army Regulation 601-1 governs assignments to recruiting duty.",
        who: "Soldiers who meet USAREC's packet requirements; AGR applicants apply through the USAREC AGR page.",
        links: [
          { label: "USAREC — Volunteer recruiters", url: "https://recruiting.army.mil/recruiter/volunteer_recruiters/" },
          { label: "USAREC — AGR recruiter program", url: "https://recruiting.army.mil/recruiter/agr/" },
        ],
      },
      {
        name: "Army Drill Sergeant",
        kind: "U.S. Army Reserve / 108th Training Command",
        summary:
          "Drill sergeants train new Soldiers in Initial Entry Training; candidates complete the U.S. Army Drill Sergeant School at Fort Jackson, South Carolina (65 days, per the Army Reserve's official page).",
        who: "As the USAR page states: pay grades E-4 through E-7, minimum GT score of 85, and at least three years of military service. Army Reserve and Guard Soldiers route through the 108th Training Command career counselor; active-duty Soldiers volunteer through their HRC branch/talent managers, with nominations to HRC's Active Duty Drill Sergeant Team.",
        flag: "Active-duty Soldiers: go through your HRC branch manager — the HRC Nominative Assignments Branch address appears inside the USAR page's text but was not verified as a standalone link, so it is not printed here.",
        links: [
          { label: "USAR — Become a USAR Drill Sergeant (108th Training Command)", url: "http://www.usar.army.mil/Commands/Functional/108th-Training-Command-USAR-Drill-Sergeant-Home/108th-Training-Command-Become-a-USAR-Drill-Sergeant/" },
        ],
      },
      {
        name: "Navy Recruit Division Commander (RDC)",
        kind: "Navy Personnel Command (PERS-4010D)",
        summary:
          "RDCs are the Navy's drill instructors — they lead recruit divisions through boot camp at Recruit Training Command Great Lakes, the Navy's only boot camp. Navy Personnel Command's RDC page calls it the “#1 Sailorization and Mentoring shore duty” and lists benefits including Special Duty Assignment Pay, up to 24 months waived off the follow-on sea tour, and post-tour choice of coast after a successful RTC tour. MILPERSMAN 1306-954 adds: tour length is a minimum of 36 months beginning after graduation from RDC “C” School, and candidates apply 12–15 months before their projected rotation date.",
        who: "As the official pages state: enlisted E-5 and above (E-5 candidates need a minimum of 6 years' active service with 2 years' time in rate, no rate waivers); additional screening requirements (warfare qualification, evaluations, PFA) are listed on the program page.",
        flag: "The program page currently states SDAP as $450/month — pay figures change, so treat that as “as the current page states” and confirm the amount on the page, not here.",
        links: [
          { label: "MyNavyHR — Recruit Division Commander program page", url: "https://www.mynavyhr.navy.mil/Career-Management/Detailing/Enlisted/Shore-Special/RDC/" },
          { label: "MILPERSMAN 1306-954 (governing instruction, PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1300Assignment/1306-954.pdf?ver=cMXiNE6oE80ubPigkv07iw%3d%3d" },
        ],
      },
      {
        name: "Air Force Developmental Special Duty (DSD) — Includes MTI and Recruiter",
        kind: "AFPC",
        summary:
          "The Air Force fills its special-duty identifiers through the Developmental Special Duty process run by AFPC. AFPC's DSD fact sheet lists the qualifying SDIs, including Military Training Instructor (8B000), Military Training Leader (8B100), First Sergeant (8F000), and Recruiter (8R000). Airmen are typically nominated by their leadership rather than simply volunteering.",
        who: "Nomination-based; per AETC public affairs, MTIs are drawn from Senior Airmen, Staff Sergeants, and Technical Sergeants. The MTI pipeline as officially described: DSD application package, about two weeks shadowing a certified MTI at JBSA-Lackland, the 35-academic-day Military Training Instructor School, then about 90 days of on-the-job training.",
        flag: "The AFPC Developmental Special Duty assignment-page address was quoted inside the DVIDS article but not independently verified, so it is not printed as a link — the AFPC fact sheet below is the verified AFPC link. Air Force Recruiting Service also periodically solicits applications through AFPC (a 2025 AFPC article sought Senior Airmen and Staff Sergeants for special-duty recruiting; linked below).",
        links: [
          { label: "AFPC — Developmental Special Duty fact sheet", url: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/873189/developmental-special-duty-ribbon/" },
          { label: "AETC via DVIDS — The MTI pipeline", url: "https://www.dvidshub.net/news/printable/305702" },
          { label: "AFPC — Recruiting Service seeks Senior Airmen and Staff Sergeants (2025)", url: "https://www.afpc.af.mil/News/Article-Display/Article/4640462/air-force-recruiting-service-seeks-senior-airmen-staff-sergeants-for-special-du/" },
        ],
      },
      {
        name: "Coast Guard Recruit Company Commander (RCC)",
        kind: "U.S. Coast Guard",
        summary:
          "Company Commanders are the Coast Guard's drill instructors at Training Center Cape May, New Jersey — the service's only boot camp. All enlisted members assigned as Company Commanders, Section Commanders, or Battalion Commanders first complete the seven-week Company Commander School. Recruit Company Commander is filled as a Special Assignment solicited by enlisted assignment messages (ALCGENL). Cape May also hosts the Coast Guard's Recruiter School.",
        who: "As MyCG states: for Assignment Year 2026, petty officers in pay grades E-5 through E-7 were eligible; applications ran through ALCGENL 025/25 with interviews and selections in the fall.",
        flag: "The AY26 application deadline (Aug 22, 2025) has passed; this is an annual cycle — check the current year's ALCGENL message rather than treating the AY26 dates as standing.",
        links: [
          { label: "MyCG — Serve as a Recruit Company Commander", url: "https://www.mycg.uscg.mil/News/Article/4174509/transform-your-leadership-skills-by-serving-as-a-recruit-company-commander/" },
          { label: "TRACEN Cape May — Training (CC School + Recruiter School)", url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/TraCen-Cape-May/Training/" },
        ],
      },
      {
        name: "EOD — Cross-Reference Only",
        kind: "See the MOS Library",
        summary:
          "Explosive Ordnance Disposal is a career field, not a special duty — full career detail (what EOD techs do, training pipeline at overview level, who it suits) lives in this app's MOS library entries (e.g., USMC 2336, Army 89D, and the Navy/Air Force EOD entries).",
        who: "See the MOS library; career content is not duplicated here.",
        links: [],
        libraryRef: true,
      },
    ],
  },
  {
    title: "Uniform & Grooming References",
    note: "One entry per branch: the official publication, where to read it, and a one-line note. The standards themselves are NOT reproduced here — the app points to the regulation, it does not restate it.",
    entries: [
      {
        name: "U.S. Marine Corps — MCO 1020.34H, Marine Corps Uniform Regulations",
        kind: "MCO 1020.34H",
        summary:
          "The single order covering wear of all Marine Corps uniforms and grooming standards. The Marine Corps Publications Electronic Library (MCPEL) lists MCO 1020.34H as the current edition; changes are announced by MARADMIN/ALMAR messages from the Marine Corps Uniform Board.",
        links: [
          { label: "MCPEL — Uniform publications search", url: "https://www.marines.mil/News/Publications/MCPEL/Search/uniform/" },
        ],
      },
      {
        name: "U.S. Army — AR 670-1 with DA PAM 670-1",
        kind: "AR 670-1 / DA PAM 670-1",
        summary:
          "AR 670-1, Wear and Appearance of Army Uniforms and Insignia (26 January 2021), is the governing — and partly punitive — regulation; DA PAM 670-1 (same date) is its illustrated companion guide showing how each uniform is actually worn. Newer Army Directives (e.g., Army Directive 2025-18 on appearance and grooming) update standards between revisions, so check for directives as well as the base regulation.",
        flag: "The shipped link is DA PAM 670-1's official Army Publishing Directorate PDF — it references AR 670-1 throughout. A direct AR 670-1-only PDF address was not captured in the underlying research, so none is printed.",
        links: [
          { label: "DA PAM 670-1 (official PDF, Army Publishing Directorate)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN30948-PAM_670-1-000-WEB-1.pdf" },
        ],
      },
      {
        name: "U.S. Navy — NAVPERS 15665J, U.S. Navy Uniform Regulations",
        kind: "NAVPERS 15665J",
        summary:
          "The Navy Uniform Regulations, issued by direction of the Chief of Naval Operations, carry the force of a general order and apply to all Sailors. The current edition is NAVPERS 15665J (it replaced 15665I, per NAVADMIN 183/21); the full text is published chapter-by-chapter on MyNavyHR under References → U.S. Navy Uniforms, and policy changes arrive by NAVADMIN between editions.",
        flag: "The link lands on the MyNavyHR U.S. Navy Uniforms references section (Chapter 4) — pick your chapter there rather than relying on deep links to every chapter.",
        links: [
          { label: "MyNavyHR — U.S. Navy Uniform Regulations", url: "https://www.mynavyhr.navy.mil/References/US-Navy-Uniforms/Uniform-Regulations/Chapter-4/4103/" },
        ],
      },
      {
        name: "U.S. Coast Guard — COMDTINST M1020.6 (series), Uniform Regulations",
        kind: "COMDTINST M1020.6 (series)",
        summary:
          "The Commandant Instruction manual establishing the policies and standards for the uniform, appearance, and grooming of all Coast Guard personnel (active, reserve, retired, and auxiliary).",
        flag: "Cited as “M1020.6 (series)” on purpose: the newest publicly fetchable official copy found is the G edition (2012), and an H edition (2013) exists in older Coast Guard directives listings — confirm the current edition in the Coast Guard Directives system rather than trusting a printed suffix.",
        links: [
          { label: "COMDTINST M1020.6 (series) — official manual PDF", url: "https://media.defense.gov/2022/Sep/23/2003083959/0/0/0/2012_CIM_M1020_6G_UNIFORM_REGS.PDF" },
        ],
      },
      {
        name: "U.S. Air Force — DAFI 36-2903, Dress and Personal Appearance",
        kind: "DAFI 36-2903",
        summary:
          "Department of the Air Force Instruction 36-2903 (29 February 2024) sets dress and personal appearance standards for Air Force personnel; it is updated between editions by DAF Guidance Memorandums (DAFGMs — the series runs through DAFGM 2026-01), so the current PDF on e-Publishing already folds in the latest guidance.",
        links: [
          { label: "DAFI 36-2903 (official e-Publishing PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2903/dafi36-2903.pdf" },
        ],
      },
      {
        name: "U.S. Space Force — SPFI 36-2903, Dress and Appearance",
        kind: "SPFI 36-2903",
        summary:
          "The Space Force now publishes its own service-specific instruction — Space Force Instruction (SPFI) 36-2903, Dress and Appearance, published August 15, 2025 — consolidating all Guardian uniform and grooming guidance into a single document instead of relying on Air Force guidance. (Earlier DAFGM changes to DAFI 36-2903 expressly did not apply to the Space Force.)",
        flag: "A direct e-Publishing PDF address for SPFI 36-2903 was not captured in the underlying research — the verified official link is the Space Force's own announcement article below; route from that article or an e-Publishing search rather than a guessed PDF path.",
        links: [
          { label: "Space Force — SPFI 36-2903 announcement", url: "https://www.vandenberg.spaceforce.mil/News/Article-Display/Article/4277401/space-force-publishes-new-spfi-36-2903-dress-and-appearance/" },
        ],
      },
    ],
  },
  {
    title: "First Home Station",
    entries: [
      {
        name: "First Stop for Any Installation Question: MilitaryINSTALLATIONS",
        kind: "Military OneSource",
        summary:
          "MilitaryINSTALLATIONS (a Military OneSource tool) is the official per-installation directory: housing offices, check-in procedures, unaccompanied housing rules, local services, and contact numbers for every installation worldwide. Housing rules genuinely differ by base and branch, so this — not a generic article — is where first-station answers live.",
        who: "Anyone arriving at a first (or new) duty station; look up your installation before you arrive.",
        details: [
          "The directory root is installations.militaryonesource.mil — the link below is one installation's housing page (NAS Oceana); every installation has the same page pattern, so search the directory for yours.",
        ],
        links: [
          { label: "MilitaryINSTALLATIONS — NAS Oceana housing (example page)", url: "https://installations.militaryonesource.mil/military-installation/naval-air-station-oceana/housing/housing" },
        ],
      },
      {
        name: "Barracks and Dorm Basics (Unaccompanied Housing)",
        kind: "Unaccompanied housing",
        summary:
          "Most junior single members start in unaccompanied housing (UH) — barracks or dorms — assigned through the installation housing office, with rooms typically one or two occupants by pay grade and shared lounges/laundry. The pattern on official installation pages: junior enlisted are generally required to live in UH (examples as stated on those pages: Navy E-1–E-3 and E-4 with under 4 years at NAS Oceana; Air Force E-1–E-3 and E-4 with under 3 years at Langley AFB; Army single Soldiers E-5 and below at Fort Wainwright), and moving off base usually unlocks at a pay-grade/service-time threshold or when UH fills up. Rooms are inspected and residents must follow UH rules — check your own installation's page for your exact threshold.",
        who: "Single/unaccompanied junior members at their first station.",
        flag: "Thresholds vary by installation and branch — the examples above are as those installations' own pages state them, not a DoD-wide rule.",
        links: [
          { label: "NAS Oceana — Unaccompanied housing", url: "https://installations.militaryonesource.mil/military-installation/naval-air-station-oceana/housing/housing" },
          { label: "Joint Base Langley-Eustis — Government housing", url: "https://installations.militaryonesource.mil/military-installation/joint-base-langley-eustis/housing/government-housing" },
        ],
      },
      {
        name: "Rule One of Renting Off Base: Housing Office BEFORE You Sign Anything",
        kind: "Housing Services Office",
        summary:
          "Installation Housing Services Offices (Army HSO / Navy HSC / equivalents) exist specifically for first-time renters: they keep lists of inspected rentals, know the local scams, and — as Fort Drum's official housing page puts it — service members are required to report to the Housing Services Office at their existing and new duty stations before making arrangements to rent, lease, or buy off-post housing, and should not send deposits before contacting the HSO. Navy instructions similarly require contacting Navy Housing before negotiating an off-base agreement.",
        who: "Anyone moving off base for the first time — before touring leases with money in hand.",
        links: [
          { label: "Fort Drum Housing Division (official example)", url: "https://home.army.mil/drum/my-fort/all-services/housing-division" },
        ],
      },
      {
        name: "HOMES.mil — DoD's Official Rental-Listing Site",
        kind: "HOMES.mil",
        summary:
          "HOMES.mil is an official Department of Defense website connecting service members, DoD civilians, and families with community rental listings near installations. Listings are managed through local installation housing offices; anyone can browse basic listings, but a free registered account is needed to see full details and landlord contact information — and no .mil email is required to register.",
        who: "Anyone house-hunting off base, CONUS or OCONUS.",
        details: [
          "Link as published on the official Fort Drum housing page.",
        ],
        links: [
          { label: "HOMES.mil — Rental listings", url: "https://www.homes.mil/homes/DispatchServlet/HomesEntry" },
        ],
      },
      {
        name: "Rental Partnership Program (Where Offered)",
        kind: "Rental Partnership Program",
        summary:
          "At participating installations, the Rental Partnership Program (RPP) pairs service members with approved off-base properties at below-market rent — the Joint Expeditionary Base Little Creek–Fort Story housing page describes it as rentals about 5% below market rates, with rent paid by allotment under a 12-month lease. Not every installation offers RPP; your housing office (see the housing-office entry above) can say whether yours does.",
        who: "Members authorized to live off base at participating installations.",
        links: [
          { label: "JEB Little Creek–Fort Story — Housing (RPP described)", url: "https://installations.militaryonesource.mil/military-installation/joint-expeditionary-base-little-creek-fort-story/housing/housing" },
        ],
      },
      {
        name: "Get the Lease Reviewed — Free, Before You Sign",
        kind: "Legal assistance",
        summary:
          "Your installation legal assistance office will review a lease before you sign it — the single cheapest protection a first-time renter has. Bring the lease, the move-in checklist, and any add-ons (pet, parking, early-termination clauses) and ask what happens if you get orders mid-lease (see the next entry).",
        who: "Every first lease; also any time a landlord dispute starts (deposits, repairs, move-out charges).",
        links: [
          { label: "AFLA legal assistance locator (all branches)", url: "https://legalassistance.law.af.mil" },
        ],
      },
      {
        name: "Your SCRA Lease Protections (Cross-Reference)",
        kind: "Servicemembers Civil Relief Act",
        summary:
          "Federal law backs up the lease review: under the Servicemembers Civil Relief Act, members who receive qualifying orders can terminate a residential lease early without penalty, and landlords face limits on eviction and default judgments during service. The CFPB explainer (also linked in the Pre-Deployment group) covers the lease provisions in plain language — read it before signing and keep a copy of your orders with your lease paperwork.",
        who: "Any member renting off base who may PCS or deploy mid-lease.",
        links: [
          { label: "CFPB — The Servicemembers Civil Relief Act (SCRA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/the-servicemembers-civil-relief-act-scra/" },
        ],
      },
    ],
  },
  {
    title: "Money Traps & Voting",
    entries: [
      {
        name: "The Military Lending Act: Your 36% Shield",
        kind: "Military Lending Act / CFPB",
        summary:
          "The Military Lending Act (MLA) caps the total cost of most consumer credit to covered service members at a 36% Military Annual Percentage Rate (MAPR) — and MAPR counts fees and add-ons that ordinary APR leaves out, so a loan that looks “only” 30% can still be illegal. The CFPB's MLA page explains what loans are covered and what to do if a lender breaks the rules.",
        who: "As CFPB states: active-duty Army, Marine Corps, Navy, Air Force, Coast Guard, and Space Force members; Reserve members on active duty; Guard members mobilized under federal orders for more than 30 consecutive days — plus their spouses and dependents.",
        links: [
          { label: "CFPB — Military Lending Act (MLA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/military-lending-act-mla/" },
        ],
      },
      {
        name: "CFPB Military Hub and the Office of Servicemember Affairs",
        kind: "CFPB",
        summary:
          "The CFPB's military financial lifecycle hub is the federal government's plain-language money curriculum for service members — organized by career stage (including first duty station and deployment), covering car buying, debt, the SCRA, and the MLA. Behind it, the CFPB's Office of Servicemember Affairs educates and empowers service members and families, monitors military complaints, and coordinates with military legal assistance (JAG) offices — filing a CFPB complaint is a real escalation route when a lender or dealer won't fix a problem.",
        who: "All members and spouses; bookmark before the first big purchase, not after.",
        links: [
          { label: "CFPB — Military financial lifecycle hub", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
        ],
      },
      {
        name: "First-Car Traps (General Education Level)",
        kind: "Financial education",
        summary:
          "The classic traps aimed at junior members cluster around the first car: “yo-yo” financing (drive off today, get called back for a worse deal), rolling an old loan's negative equity into the next car, sky-high add-on products (service contracts, GAP, paint protection) packed into the payment, and rent-to-own / high-finance storefronts clustered just outside the gate. The defenses are procedural, not clever: get pre-approved by your bank or credit union before visiting a dealer, negotiate the car's price separately from financing, read the buyer's order line by line, and run the deal past a free Personal Financial Counselor or legal assistance office before signing. CFPB's military lifecycle resources teach exactly these car-buying skills.",
        who: "First-time buyers, especially junior enlisted in their first year at a new station.",
        flag: "Kept deliberately at the general educational level: no specific dealerships or businesses are named, and the trap patterns are the standard ones CFPB/military financial education warns about.",
        links: [
          { label: "CFPB — Military financial lifecycle hub", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
        ],
      },
      {
        name: "Off-Limits Lists and Armed Forces Disciplinary Control Boards (AFDCB)",
        kind: "AFDCB / Installation policy",
        alertBadge: "PER-INSTALLATION LISTS ONLY — NO NATIONAL LIST",
        summary:
          "Every installation keeps an official off-limits list. Armed Forces Disciplinary Control Boards — joint boards run under AR 190-24 / OPNAVINST 1620.2A / AFJI 31-213 / MCO 1620.2D / COMDTINST 1620.1E and 32 CFR Part 631 — review businesses and areas around base that victimize service members (crime-conducive conditions, fraud, discrimination, usurious or deceptive lending). The board first tries to get the problem corrected; if it isn't, the installation commander can declare the establishment off-limits — and entering an off-limits establishment is a punishable order violation under the UCMJ. Practical rule: if a lender, dealer, or shop near base looks too good to be true, check your installation's current off-limits list and ask legal assistance before doing business there.",
        who: "All personnel assigned to or visiting an installation — the list for your base is posted by your command/installation.",
        details: [
          "There is no single DoD-wide off-limits list — lists are per-installation only. The links below are official examples of how the system works, not a directory of off-limits businesses.",
        ],
        links: [
          { label: "Cannon AFB — AFDCB instruction (implements AFJI 31-213, PDF)", url: "https://static.e-publishing.af.mil/production/1/cannonafb/publication/cannonafbi31-213/cannonafbi31-213.pdf" },
          { label: "Fort Eisenhower — AFDCB off-limits policy memo (PDF)", url: "https://home.army.mil/gordon/7017/4290/3273/AFDCB_Off-Limits_Establishment_Memoradum_-_20250321.pdf" },
        ],
      },
      {
        name: "Free Help First: Counselors and Complaint Routes",
        kind: "FINRED / Legal assistance / CFPB",
        summary:
          "Before paying anyone for financial help: free accredited Personal Financial Counselors sit in installation family centers (FINRED, in the Pre-Deployment group), legal assistance handles lender/dealer legal problems, and the CFPB takes service-member complaints that feed enforcement. Debt-relief companies that charge upfront fees to “fix” military finances are themselves a trap category.",
        who: "Anyone in debt trouble or being pressured by a lender.",
        links: [
          { label: "DoD FINRED", url: "https://finred.usalearning.gov/" },
          { label: "AFLA legal assistance locator (all branches)", url: "https://legalassistance.law.af.mil" },
          { label: "CFPB — Military financial lifecycle hub", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
        ],
      },
      {
        name: "FVAP: Absentee Voting for Military and Overseas Voters",
        kind: "Federal Voting Assistance Program",
        summary:
          "The Federal Voting Assistance Program (FVAP) is the DoD program that helps service members, their families, and overseas citizens vote absentee. Its core tool is the Federal Post Card Application (FPCA) — one form that both registers you and requests your absentee ballot for the year. FVAP's stated rhythm: send a new FPCA every January and every time you move.",
        who: "Every member and voting-age family member, especially those stationed away from their voting residence or deployed.",
        links: [
          { label: "FVAP — Home", url: "https://www.fvap.gov" },
          { label: "FVAP — FPCA / voter residence guidance", url: "https://www.fvap.gov/citizen-voter/reside" },
          { label: "FVAP — Find your installation voting assistance office", url: "https://www.fvap.gov/search-offices" },
        ],
      },
      {
        name: "The Voting Timeline, As FVAP States It",
        kind: "FVAP",
        summary:
          "FVAP's published general-election planning timeline: submit your FPCA by August 1 to be sure of receiving your ballot in time; states are required to send ballots to FPCA requesters at least 45 days before a federal election, so expect your ballot by early October; return it immediately — FVAP publishes recommended return dates each cycle that vary by voter location (stateside vs. overseas vs. aboard ship).",
        who: "All absentee military voters, every federal election cycle.",
        flag: "No specific October return date is printed here on purpose: two official FVAP graphics for the same cycle gave slightly different recommended return dates. Check FVAP.gov for the current cycle's exact dates.",
        links: [
          { label: "FVAP — Home", url: "https://www.fvap.gov" },
        ],
      },
      {
        name: "No Ballot? Use the FWAB Backup Ballot",
        kind: "Federal Write-In Absentee Ballot",
        summary:
          "If your state ballot hasn't arrived in time, the Federal Write-In Absentee Ballot (FWAB) is the official backup: you list your choices for federal offices and submit it; if your regular ballot later arrives, vote and return it too — your state will count only one. FVAP also supports unit/installation Voting Assistance Officers, who are the in-person help at every command.",
        who: "Any absentee voter whose ballot is late — roughly, if it hasn't arrived a month out from the election, switch to the FWAB rather than waiting.",
        links: [
          { label: "FVAP — Home", url: "https://www.fvap.gov" },
          { label: "FVAP — Voting assistance office search", url: "https://www.fvap.gov/search-offices" },
        ],
      },
    ],
  },
  /* ---------------------------------------------------------------- */
  /* Closure Sweep deepener (Nov 9, 2026) — Motorcycle Safety.         */
  /* Source: Closure LIFE pack Part 6.3 (service safety authorities).  */
  /* Navy Level-II window and refresher conflicts print BOTH sides     */
  /* (pack Flag O-6) — likely an instruction revision no page in the   */
  /* research states; not picked silently.                             */
  /* ---------------------------------------------------------------- */
  {
    title: "Motorcycle Safety",
    note: "Added by the Closure Sweep from the service safety authorities. The rule everywhere: training comes before riding — a service course, passed, before you operate the motorcycle.",
    entries: [
      {
        name: "Motorcycle Training — Required Before You Ride (the framework)",
        kind: "DoDI 6055.04 framework",
        summary:
          "Governing framework as published: AR 385-10 (Army) / OPNAVINST 5100.12J (Navy) / DAFI 91-207 (Air Force), all under DoDI 6055.04. The curriculum must be MSF, MSF-based, state-approved, or DoD-component-approved, taught by certified rider coaches with classroom + hands-on + evaluation. Every service's version of the rule has the same shape: complete the basic course before operating a motorcycle — the service pages below give each branch's ladder.",
        who: "Any member who rides or is thinking about it — the endorsement on your license is not the service requirement; the course is.",
        links: [
          { label: "Fort Detrick — Motorcycle Safety Foundation Course", url: "https://home.army.mil/detrick/my-fort/all-services/motorcycle-safety-foundation-course" },
        ],
      },
      {
        name: "Army — Progressive Motorcycle Program",
        kind: "AR 385-10 / U.S. Army Combat Readiness Center",
        summary:
          "Initial: successfully complete the Basic Rider Course (BRC) before operating any 2- or 3-wheeled vehicle requiring a motorcycle endorsement. Intermediate (within 1 year): ERC / MSF BRC-II, or MSRC / MSF ARC (by motorcycle type), or a state/DoD-approved equivalent. Refresher (MRT): a licensed/endorsed Soldier who owns a motorcycle and returns from deployment over 180 days must complete refresher training before riding again (except riding to the training site). Sustainment: within 5 years of intermediate training, inactivity, or acquiring/changing motorcycle; commanders may not waive or defer sustainment. Europe restatement (USAG Rheinland-Pfalz Safety Office): “Servicemembers without Motorcycle Safety Foundation training cannot operate a motorcycle in Germany.”",
        who: "Soldiers who ride — note the two clocks: intermediate within 1 year, sustainment within 5, and a refresher gate after any deployment over 180 days.",
        links: [
          { label: "USAG Rheinland-Pfalz — Safety Office", url: "https://home.army.mil/rheinland-pfalz/about/directorates-support-offices/safety-office" },
          { label: "Fort Detrick — Motorcycle Safety Foundation Course", url: "https://home.army.mil/detrick/my-fort/all-services/motorcycle-safety-foundation-course" },
        ],
      },
      {
        name: "Navy — Level I / Level II (window and refresher conflicts printed both sides)",
        kind: "OPNAVINST 5100.12J / OPNAV M-5100.23",
        summary:
          "Level I — BRC (16 hours, MSF-approved): “mandatory for all active duty personnel who plan to purchase or operate a motorcycle regardless of their intent to ride the motorcycle on or off base,” before operating. Level II — follow-on: MSRC (8 hrs; required for sport-bike riders on/off duty), ERC/BRC-2, or ARC. Civilians with a current state license/endorsement are not required to complete the Navy training.",
        who: "Sailors who ride — Level I is mandatory even if you never ride on base; read the flag before planning Level II or a refresher date.",
        flag: "CONFLICTS, printed both sides (pack Flag O-6): Level II window — within 60 days of Level I (CNRMA page) vs within 60 days–1 year (CNRSW / NPS summaries of OPNAV M-5100.23). Refresher period — every 3 years (CNRMA, 5100.12J era) vs every 5 years (CNRSW/NPS, M-5100.23 era). Likely an instruction revision, but no page in this research states the supersession — check your installation safety office for the current requirement rather than picking the friendlier number.",
        links: [
          { label: "CNRMA — Motorcycle Training", url: "https://cnrma.cnic.navy.mil/Operations-and-Management/Safety/Traffic-Safety/Motorcycle-Training/" },
          { label: "Naval Postgraduate School — Traffic Safety", url: "https://nps.edu/web/safety/trafficsafety" },
        ],
      },
      {
        name: "Air Force — MSF Basic Rider Course + Five-Year Training",
        kind: "DAFI 91-207 / Air Force Safety Center",
        summary:
          "The framework is the MSF Basic Rider Course (fundamentals: throttle control, braking, turning, maneuvering); advanced courses add emergency braking and obstacle avoidance. “Motorcycle training is required every five years for military riders.” The AFSEC-published mentorship ride (2026) is an alternative method to complete required refresher training; DAFI 91-207's Rider Mentor Program provides an alternative pathway for mandatory Level II and Level III training.",
        who: "Air Force and Space Force riders — the five-year training clock and the mentor-program pathway are the two facts to hold.",
        links: [
          { label: "AFSEC — Rider Mentor Program", url: "https://www.safety.af.mil/News/Article-Display/Article/4484451/daf-expands-motorcycle-safety-with-rider-mentor-program/" },
        ],
      },
    ],
  },
];
