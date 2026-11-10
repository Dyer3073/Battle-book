// Family Care Plan & Deployment Readiness — transcribed from the
// researched pack (~/workspace/military-app/deployment/deployment.md,
// researched Nov 9, 2026). Sources are the DoD instruction and each
// service's own regulation, as verified in the pack — including the
// Coast Guard NEGATIVE finding, printed as the pack directs: no
// standalone CG FCP instruction/form was verified. No legal-document
// drafting or template wording anywhere in this section — every
// legal-paper item routes to the installation legal assistance office.

import type { RefGroup } from "./refdata";

export const DEPLOY_INTRO =
  "A Family Care Plan is the documented plan of who cares for your family members when duty takes you away — and it stays active in peacetime, not just deployments. This section runs from the DoD rule through each service's own regulation, with a readiness checklist you can actually work through: what to sign, what to pay attention to, and what your timeline really is. It is information, not legal advice — the papers themselves are drawn up with legal assistance.";

/** One of the pack's 32 readiness checklist items: title + pack note. */
export type CheckItem = { title: string; note: string };
export type CheckGroup = { id: string; title: string; items: CheckItem[] };

export const DEPLOY_CHECKLIST: CheckGroup[] = [
  {
    id: "A",
    title: "A. Legal papers and documents",
    items: [
      { title: "Family Care Plan — signed, approved, and current", note: "Verify your service's validation window is met (USMC validates within 12 months; the Navy FCP within 30 days of accession; dual-caregiver cases carry their own clocks)." },
      { title: "Special power of attorney for children's care and medical consent", note: "Name your short-term and long-term caregivers. Drafted at your installation legal assistance office." },
      { title: "General or durable POA for your spouse/partner or another trusted agent", note: "Legal assistance advises which; never sign under time pressure." },
      { title: "Guardianship designation for your children", note: "Name both a primary and an alternate guardian if your designated caregiver changes their mind." },
      { title: "Will, current and reflecting your family situation", note: "Birth, marriage, divorce, or relocation all stale a will — redo it at redeployment if anything changed." },
      { title: "Living will / advance medical directive", note: "Keep accessible to whoever would be making medical decisions." },
      { title: "Copies of all legal documents in three places", note: "In your home, with your caregiver(s), and a working copy for your records." },
      { title: "Caregiver briefing completed", note: "Walk your caregiver through medical consent, school pickup, insurance cards, and how to reach the unit — the briefing is part of the plan." },
    ],
  },
  {
    id: "B",
    title: "B. Money",
    items: [
      { title: "Joint-access budget plan for the deployment period", note: "Who pays what, from which account. A special power of attorney does not open a joint bank account on its own — account access is set with the bank." },
      { title: "Family Separation Allowance (FSA) — know the current rule", note: "DFAS publishes $300 per month ($10 per day) when a member is involuntarily separated from dependents for more than 30 days; DD Form 1561 is the statement to claim it. An older DFAS deployment FAQ says $250 per month — the two DFAS pages conflict; the current DFAS FSA page says $300. Verify the amount on your own LES and with your finance office." },
      { title: "ID cards (DoD ID) current for all dependents", note: "Cards must be current to access health care and installations." },
      { title: "DEERS enrollment updated", note: "Verify DEERS reflects your current family information before departure." },
      { title: "SGLI coverage and beneficiaries checked and current", note: "Elections live in SOES (Servicemembers' Group Life Insurance Online Self-Service) — verify, do not assume." },
      { title: "TSP (Thrift Savings Plan) beneficiary designations reviewed", note: "TSP designations run separately from SGLI." },
      { title: "Tax plan in place", note: "Combat-zone and deployment tax extensions exist; MilTax through Military OneSource prepares deployment returns free." },
      { title: "Emergency fund or access plan for the caregiver", note: "Your short-term caregiver needs a way to cover urgent expenses before reimbursement catches up." },
    ],
  },
  {
    id: "C",
    title: "C. Family and communication",
    items: [
      { title: "Caregiver contact sheet — names, numbers, addresses for every named caregiver", note: "Short-term and long-term." },
      { title: "Children briefed in age-appropriate terms", note: "Who is coming, when you leave, how you will stay in touch." },
      { title: "Communication plan agreed", note: "App, cadence, and emergency-contact path, communicated to your caregiver too." },
      { title: "Emergency-contact plan for the family if they cannot reach you", note: "Rear detachment, Family Readiness Group / unit family readiness, chaplain, American Red Cross." },
      { title: "Support-network map for spouse/partner at home", note: "Friends, family, unit readiness group, chapel, Military OneSource." },
    ],
  },
  {
    id: "D",
    title: "D. Household",
    items: [
      { title: "Functioning-vehicle plan and maintenance handoff", note: "Keys, insurance, registration current." },
      { title: "Household systems walkthrough with spouse/caregiver", note: "Shutoffs, alarm codes, furnace filters, appliance quirks — write it down; memory fails under stress." },
      { title: "Pet care arranged and funded", note: "Named caregiver plus vet records shared." },
      { title: "Childcare and school contacts on file with caregivers", note: "Including pickup authorizations the school recognizes." },
      { title: "Vehicle and home insurance current", note: "Check whether any policy treats absence differently — deployment-storage endorsements exist." },
    ],
  },
  {
    id: "E",
    title: "E. Records and admin",
    items: [
      { title: "Copies of orders, DD214s, marriage certificate, and birth certificates with caregiver and at home", note: "Scans stored in one shared location both of you can reach." },
      { title: "Important-accounts list — institution, account type, contact — stored securely", note: "Without passwords (passwords belong in a password manager's emergency-access feature)." },
      { title: "Unit contact information left with spouse/caregiver", note: "Commander, first sergeant / senior enlisted, rear-detachment phone." },
      { title: "Leave, passes, and pre-deployment appointments completed before departure", note: "Medical, dental, legal, finance." },
    ],
  },
  {
    id: "F",
    title: "F. Medical and dental",
    items: [
      { title: "Deployability medical and dental screening current", note: "Your unit tracks this; confirm your own status before the window closes." },
      { title: "Family members' medical and dental appointments and prescriptions current", note: "Caregivers need provider names and TRICARE basics; military treatment facility contact info left with them." },
    ],
  },
];

const DODI = "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134219p.pdf";
const USMC_ORDER = "https://www.marines.mil/Portals/1/Publications/MCO%201740.13D%20CH-1.pdf?ver=2020-09-03-105922-590";

export const DEPLOY_GROUPS: RefGroup[] = [
  {
    title: "The DoD rule — DoDI 1342.19",
    entries: [
      {
        name: "What a Family Care Plan is (the official definition)",
        body: "In DoDI 1342.19's own words (their caps on \"Family Care Plan\"): \"A document that outlines, on behalf of military families, the persons who will provide care for a Service member's dependent Family members in the absence of the member due to military duty (training exercises, temporary duty, deployments, etc.) or other necessary absences of the member. The document, which is legally binding, outlines all of the support, care, and custody arrangements for all dependent Family members for as long as the Service member is absent. The Family Care Plan also outlines legal, medical, logistical (e.g., relocation, emergency contact lists, and other support services), and otherwise relevant matters pertaining to the care, support, and wellbeing of the Family member(s).\" What that means in plain terms: it is the written, signed answer to \"who has the kids, with what authority, and with what support\" — and it stays active in peacetime, not just during deployments.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "Who must have one (the DoD baseline)",
        body: "DoDI 1342.19 covers: single parents with custody of children under 19, or who have joint custody with an ex-spouse and the children live with the member more than 30 consecutive days a year; dual-military couples with children under 19; members/spouses with unique family situations (an incapacitated spouse, elderly or disabled dependents, high-risk pregnancies, or other circumstances that affect mission readiness); members whose spouse is unable to care for children because of unique circumstances; and members/spouses who are primarily responsible for dependent family members. Each service adds its own layer on top of this baseline — the services differ, and your service's rule is the one that binds you.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "The two tiers: short-term and long-term caregivers (the DoD model)",
        body: "DoDI 1342.19's model names two roles every plan needs. Short-term caregiver: \"a nonmilitary person that the Service member will designate and that will agree, in writing, to accept responsibility for the care of the Service member's dependent Family members, in the absence of the member, until such time as the long-term caregiver can assume the care responsibility.\" Long-term caregiver: \"a person that the Service member will designate and consent, in writing, to accepting legal responsibility for the Service member's dependent Family members for an extended period of time in the absence of the Service member.\" The “in writing” is the operative phrase — a verbal “my mom will take them” is not a plan. (Exact definition wording verified against the DoDI text; the short-term definition as quoted carries its slight original grammar.)",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "The basic timeline: 30 days to notify, 60 days to provide",
        body: "DoDI 1342.19 sets this baseline for the active components: notify your commander within 30 calendar days when your status requires a plan, and provide (complete/submit) the Family Care Plan no later than 60 calendar days after that notification. Services layer their own timelines on top — the Army's DA Form 5305 approval clock (30 days active / 60 days Reserve and Guard), the Marine Corps' 30/60 notification and 60/90 provision clocks, and the Air Force's 60-day (90 for non-active-duty) window are in each service's entry below.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "What goes in the plan (DoD-level content)",
        body: "A DoD-compliant Family Care Plan documents: the care arrangements for dependents (short-term and long-term caregiver designations); the legal arrangements — powers of attorney and the special power of attorney for care/medical decisions, guardianship designations, and a will; the financial arrangements — how the family's bills get paid and how the caregiver is supported while caring for dependents; the medical arrangements — consent authority and health coverage for dependents; and a briefing for the caregiver(s) on their responsibilities and on the support systems available to them. Service regulations add details and forms; the content floor is DoD's.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "When the plan must be reviewed and updated",
        body: "Review and revalidate your plan when: your family status changes (birth, adoption, marriage, divorce, a dependent's death); a named caregiver's situation changes (they move, become unable, or withdraw consent); you change duty station (PCS); a deployment or extended TDY is ordered; or your service's own review cycle comes due — the Marine Corps order requires validation within every 12 months, and the Air Force requires the first sergeant to review plans annually. Treat the plan the way you treat your will: event-driven, not calendar-driven.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 — Family Care Plans",
      },
      {
        name: "What a Family Care Plan cannot do (legal limits — read this)",
        body: "A Family Care Plan is a military administrative document, and it has hard legal limits every member should hear plainly: it does not change a court custody order. If your plan conflicts with a state-court custody or visitation order, the court order governs — family courts are not bound by your commander's approved plan. It cannot by itself transfer legal guardianship; a guardianship designation in a will or a special power of attorney supports the caregiver, but formal guardianship is a court process. A commander's approval of the plan does not make the caregiver a legal guardian, and approvals vary by installation legal office on what POA wording they will certify. Because of these limits, this section drafts no legal documents — wills, powers of attorney, and guardianship paperwork are made with your installation legal assistance office (free for eligible members), and custody conflicts go to a family-law attorney. What this section can do: tell you what to ask for, what the timeline is, and which office signs what.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 / legal assistance routing",
      },
      {
        name: "Failure to maintain a plan — consequences",
        body: "Every service treats a missing or fake plan as a readiness and orders problem, and enforcement is real: the Marine Corps order states failure of Marines with dependents to comply may result in administrative or disciplinary action, including processing for administrative separation under Article 92, UCMJ — and that commanders ensure the plan is activated when needed. The Army processes FCP noncompliance under AR 600-20 with counseling and possible separation. The practical consequence lands earlier than the legal one: a member whose plan collapses at deployment time can become non-deployable — which is why commands check plans before deployment, not during.",
        links: [{ label: "DoDI 1342.19 (PDF)", url: DODI }],
        source: "DoDI 1342.19 / service regulations",
      },
    ],
  },
  {
    title: "Your service's regulation",
    entries: [
      {
        name: "Army — AR 600-20 + DA Forms 5304 and 5305",
        body: "Governing regulation: AR 600-20 (Army Command Policy). Forms: DA Form 5304 (Family Care Plan Counseling Checklist) — the counseling record, which starts the process; DA Form 5305 (Family Care Plan) — the plan itself, approved by the commander. Timing (AR 600-20 para. 5-5, as published): after counseling, the Soldier has 30 days (active component) or 60 days (Reserve and Guard components) to submit an approvable DA Form 5305. If the plan is not approvable within that window, the commander initiates counseling on the consequences (possible administrative separation). Pregnancy rule: a pregnant Soldier documents the Family Care Plan (DA Form 5305) no later than 60 days before the expected due date. Who must have one (AR 600-20's list): single parents with custody of children under 19; dual-military couples with children under 19; Soldiers whose spouse is incapacitated; Soldiers primarily responsible for dependent family members; and Soldiers with other unique family circumstances affecting readiness.",
        links: [{ label: "AR 600-20 (armypubs.army.mil — search “AR 600-20”)", url: "https://armypubs.army.mil/" }],
        source: "AR 600-20, para. 5-5",
      },
      {
        name: "Marine Corps — MCO 1740.13D (broader than the DoD baseline — read this)",
        body: "Governing order: MCO 1740.13D (Family Care Plans), with Change 1. The headline difference from every other service: this order requires ALL Marines with dependents to complete a Family Care Plan — not merely the categories DoDI 1740 enumerates. Marines who are single parents, dual-service couples, or married to civilians, and Marines caring for special-needs or elderly family members, all validate a plan. Who else: Marines married to other service members with dependents; Marines with sole custody; Marines whose spouses are unable to care for dependents; Marines otherwise solely responsible for minor children or dependent adults. System of record: plans are processed and documented in MCTFS (Marine Corps Total Force System) through Marine Online (MOL), with counseling documented on NAVMC 11800 (Family Care Plan Certificate, used for counseling documentation prior to January 26, 2018; the current process validates the plan in the individual readiness record and annotates counseling in the report). Current = validated within the past 12 months. Notify your commanding officer within 30 calendar days (active component) or 60 calendar days (reserve component) of a status change requiring a plan; provide the completed plan within 60 calendar days (AC) or 90 calendar days (RC). Short-term provider: within 24 hours, covers up to 14 calendar days. Long-term provider: accessible within 14 calendar days. Consequence: failure to comply may result in administrative or disciplinary action, including processing for administrative separation under Article 92, UCMJ. Commanders ensure the plan is activated when needed.",
        links: [{ label: "MCO 1740.13D CH-1 (PDF)", url: USMC_ORDER }],
        source: "MCO 1740.13D — Family Care Plans",
      },
      {
        name: "Navy — OPNAVINST 1740.4E + NAVPERS 1740/6 and 1740/7",
        body: "Governing instruction: OPNAVINST 1740.4E (U.S. Navy Family Care Policy). System of record: NSIPS (Navy Standard Integrated Personnel System). Forms: NAVPERS 1740/6 (Family Care Plan Certificate — who must have a plan, what provisions are made, caregiver information) and NAVPERS 1740/7 (Family Care Plan Arrangements — the arrangements detail). Both forms are submitted together. Timing: the FCP must be completed within 30 days of your accession into the Navy and re-validated when circumstances change (new dependents, caregiver changes, deployment orders). Who must have one: single parents; dual-military couples; Sailors with sole responsibility for dependents; Sailors with special family circumstances. Difference from older practice: the current (E) edition no longer requires caregiver signatures — earlier editions did; the E edition dropped them. Your FRC (Fleet and Family Support Center) Family Readiness team reviews and supports FCP development.",
        links: [{ label: "OPNAVINST 1740.4E (MyNavy HR — search the instruction number)", url: "https://www.mynavyhr.navy.mil/" }],
        source: "OPNAVINST 1740.4E",
      },
      {
        name: "Air Force & Space Force — DAFI 36-2908 + DAF Form 357",
        body: "Governing instruction: DAFI 36-2908 (Family Care Plans) — formerly AFI 36-2908; use the current DAFI number when searching. It covers both the Air Force and the Space Force. Form: DAF Form 357 (formerly AF Form 357), the Family Care Plan document. Triggers (DAFI's list): single parent; dual-military couple; spouse not capable of providing care due to illness, absence, or other circumstances; family-member caregiver for a dependent or elderly parent. Two tiers in the Air Force reading: members who must ARRANGE care (the arrangement is documented) and members who must DOCUMENT the formal plan — the DAFI applies the formal-plan requirement to the trigger categories above. Timing: provide the plan within 60 calendar days of notification of the requirement (90 days for non-active-duty personnel); notify the commander / first sergeant within 30 calendar days of a triggering change. First Sergeant role (a genuine Air Force difference): your first sergeant reviews Family Care Plans annually — deployments and IPR (in-processing) are the two natural review points.",
        flag: "Space Force note: Guardians fall under the Department of the Air Force instruction because the Space Force has no separate FCP instruction — DAFI 36-2908 is the governing document for both services.",
        links: [{ label: "DAFI 36-2908 (e-Publishing — search “36-2908”)", url: "https://www.e-publishing.af.mil/" }],
        source: "DAFI 36-2908",
      },
      {
        name: "Coast Guard — no standalone FCP instruction verified (read this carefully)",
        body: "Verified negative finding, stated plainly so no one invents a form number: no standalone Coast Guard Family Care Plan instruction or CG FCP form is publicly verifiable. What does exist: (1) The Coast Guard Ombudsman Program's \"Sea Legs\" guide (Family Readiness / CG Ombudsman Program material) states that a Family Care Plan \"is required for reservists as well as for dual military or single parents with dependents\" and describes the plan the way the other services do — caregivers, powers of attorney, wills, financial arrangements. (2) The separations manual (COMDTINST 1000.4 series), Military Separations, addresses dependency and hardship separations and the documentation of family care in the separations context. (3) The accession policy manual (COMDTINST 1100.2I series), Enlistments, Accessions, and Reserve Commissions, includes a \"dependent care plan\" requirement for applicants with dependents — that is an accession document, not a serving member's FCP. (4) DoDI 1342.19 by its own terms covers all the armed forces, so a CG member in a covered category is under the DoD rule. Practical route for a serving Coast Guardsman: ask your unit administrative shop and the Health, Safety & Work-Life (HSWL) Work-Life staff — who handle CG family readiness — which local FCP documentation your command expects, and follow DoDI 1342.19's content floor in the meantime. This section prints no CG form number because none was verified; any app, blog, or checklist that gives you one is guessing.",
        links: [],
        source: "Pack finding — negative result, printed as found",
      },
    ],
  },
  {
    title: "While you're gone",
    entries: [
      {
        name: "Activating the plan — what “activation” actually means",
        body: "When duty takes you away, the plan activates: the short-term caregiver steps in immediately (USMC: within 24 hours), the long-term caregiver takes over for the extended absence (USMC: accessible within 14 calendar days), and the legal and financial machinery — POA, medical consent, account access — is exercised by the people named. Commanders check activation as part of deployment readiness; a plan that has never been briefed to its caregivers is a plan that has not really been tested. The briefing is part of the plan for exactly this reason.",
        links: [],
        source: "DoDI 1342.19 / MCO 1740.13D",
      },
      {
        name: "If the plan fails mid-deployment",
        body: "Caregivers withdraw, get sick, or become unable — plans fail in real deployments. The system has a response path, in this order: your spouse/partner or caregiver contacts the unit rear detachment or Family Readiness Group / unit family readiness staff; you notify your chain of command as soon as you learn of it; the command works an updated plan with you (a new caregiver designation, updated counseling, and a revised service form); in genuine emergencies, the American Red Cross and your command's family-readiness channels are the escalation routes. Failure to update a collapsed plan is itself a compliance problem — reporting the failure early is what the regulations expect of you.",
        links: [],
        source: "Service regulations / family-readiness channels",
      },
      {
        name: "Support for the family at home — FRGs and family readiness",
        body: "Every service runs a family-readiness structure, under different names: the Army's Soldier & Family Readiness Groups (SFRGs); the Marine Corps' Unit, Personal and Family Readiness Program (UPFRP) and Deployment Readiness Coordinators; the Navy's Fleet and Family Support Centers (FFSC); the Air Force's Military & Family Readiness Centers (M&FRCs); and the Coast Guard's Work-Life staff and Ombudsman program. These are the channels that reach your family when you cannot — make sure your spouse/partner and caregiver know which one is yours and how to reach it before you leave, not after the first problem.",
        links: [],
        source: "Service family-readiness structures",
      },
      {
        name: "Military OneSource — the always-open door for families",
        body: "Military OneSource (militaryonesource.mil; 1-800-342-9647) is DoD's 24/7 family-support service: non-medical counseling, MilTax tax preparation, spouse education and career help, financial counseling, and referrals for everything in this section. It serves the member, the spouse/partner, and (in many programs) dependents — free, and outside your chain of command. When in doubt about where a family problem routes, OneSource is the default first call.",
        links: [{ label: "Military OneSource", url: "https://www.militaryonesource.mil" }],
        source: "Military OneSource (DoD)",
      },
      {
        name: "American Red Cross — the emergency message path",
        body: "The American Red Cross Hero Care Network delivers verified emergency messages (death, serious illness, birth) to commands worldwide — the official route by which a family emergency reaches a deployed member through their chain of command, and the route commanders act on for emergency leave decisions. Families reach it at 1-877-272-7337. Put that number on the caregiver contact sheet: it is the one path that works when every other channel fails.",
        links: [{ label: "Red Cross Hero Care Network", url: "https://www.redcross.org/get-help/military-families/services-for-veterans/emergency-communication-services.html" }],
        source: "American Red Cross",
      },
    ],
  },
  {
    title: "Coming home and keeping it current",
    entries: [
      {
        name: "After deployment — deactivating the plan correctly",
        body: "When you return, the formal steps are small but real: notify your commander/first sergeant that the deployment absence has ended; if any caregiver authority (a special power of attorney) was deployment-specific, confirm with legal assistance whether it lapses by its own terms or should be affirmatively revoked, and notify the caregiver either way; and file any changes that deployment revealed (a caregiver who would not repeat the role, a child whose needs changed) into the next plan revision.",
        links: [],
        source: "Service regulations / legal assistance",
      },
      {
        name: "When family status changes — the revalidation triggers",
        body: "The plan is invalidated as a practical matter by: marriage, divorce, or remarriage; birth or adoption of a child; a dependent's death or a change in custody; a caregiver moving, becoming medically unable, or withdrawing consent; a change in your own deployability or orders. Each service gives a notification clock for these changes (30 calendar days active / 60 reserve in the DoDI and USMC models). Update the service form, re-brief the new caregiver, and re-file copies — a plan describing your last family is a plan for a family that no longer exists.",
        links: [],
        source: "DoDI 1342.19 / service regulations",
      },
      {
        name: "PCS and the plan — update at every move",
        body: "Every PCS breaks something in the plan: the short-term caregiver is now three states away, the school pickup authorization references a school your kids left, the legal assistance office that drafted your POA is a different installation. The check-in is built into most services' in-processing (the Air Force's annual first-sergeant review catches it; Navy and Marine validations ride readiness records) — treat “new duty station” as a full plan review trigger even where your service doesn't say so in those words.",
        links: [],
        source: "Service regulations",
      },
      {
        name: "Dual-military couples — both members' plans must mesh",
        body: "Dual-military couples each carry their own service's FCP requirement, and the two plans must name the same caregivers and the same arrangements — two plans that disagree are zero plans. The special case every dual couple must plan explicitly: both members deploying simultaneously, or both on unaccompanied tours at once. Coordinate the reviews (one couple-level conversation, two service forms), and brief the caregiver on both units' family-readiness contacts.",
        links: [],
        source: "DoDI 1342.19 / service regulations",
      },
      {
        name: "Single parents — the plan is the deployment",
        body: "For a single parent, the Family Care Plan is not a supporting document — it is the condition of deployability, and commands verify it hardest. The two failure modes to engineer out: a short-term caregiver who has never actually kept the children overnight (brief them, then trial it), and a long-term caregiver who is named but has never consented in writing (the DoDI requires written consent — get it before the plan is submitted, not during the emergency). If your family situation makes a compliant plan genuinely impossible, tell your chain of command early: the services have hardship and separation processes for documented impossibility, and they work better started a year out than a week out.",
        links: [],
        source: "DoDI 1342.19 / service regulations",
      },
      {
        name: "Special-needs families — EFMP is parallel, not a substitute",
        body: "The Exceptional Family Member Program (EFMP) enrolls family members with special medical or educational needs so assignments can be coordinated with available services. EFMP enrollment and a Family Care Plan answer different questions: EFMP governs where you can be assigned; the FCP governs who cares for your dependents when you are away. A special-needs family needs both — the FCP should name caregivers briefed on the specific care (medications, therapies, equipment, IEP/school arrangements), and the EFMP office at your installation is the routing point for assignment questions. Cross-link: the Family & Life Events section carries the EFMP entry.",
        links: [],
        source: "DoDI 1342.19 / EFMP",
      },
    ],
  },
];
