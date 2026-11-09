// Switch Branches — static reference data transcribed from the researched
// switch-branches pack (~/workspace/military-app/switch-branches/
// switch-branches.md, researched November 8, 2026). Summaries, who/when
// lines, and links come only from the pack; every pack flag is preserved.
//
// Fidelity rules baked into this data (the pack's standing rules):
// - NO quotas, caps, age limits, open-job lists, or bonus figures anywhere.
//   Who a branch takes — which jobs, which grades, how many — is set by that
//   branch's current "business rules," which change constantly. Every entry
//   routes to the gaining branch's official page and recruiter.
// - Army: the Prior Service Business Rules are ROUTED to (via USAREC's
//   regulation and recruiters), never listed. No dedicated goarmy.com
//   prior-service page was verified — the entry carries that flag.
// - Navy: OSVETs enter with NO rating (nonrated unless a conversion is
//   approved), per the official PRISE-R article; prior-service accessions
//   do Veterans Orientation at RTC instead of recruit training.
// - USMC: PSEP is framed honestly as the route for FORMER Marines (MCO
//   1130.80B and its current MARADMIN); never-Marines route via a regular
//   recruiter with the full-recruit-training / junior-grade expectation.
// - Air Force: the pack could not open the AirForce.com prior-service FAQ
//   first-hand, so the entry uses the verified AFPC IST page + recruiter
//   locator and carries the flag; the FAQ address is never linked.
// - Space Force: IST runs in episodic announced windows; the fiscal-year
//   cycle the Transfer Programs page currently carries is rendered as
//   current-page content, NOT a standing fact. No warrant lane exists.
// - Coast Guard: the discharge-before-enlisting sequencing ships with the
//   pack's confirm-with-the-recruiter instruction.
// - Clearance reciprocity is stated exactly as the pack states it:
//   "likely, not promised."

export type SwitchLink = { label: string; url: string };

export type SwitchBullet = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type SwitchChecklistSection = {
  heading: string;
  items: string[];
};

export type SwitchEntry = {
  name: string;
  kind: string;
  /** Rendered with a heavy border and a READ FIRST badge (Reality Checks). */
  prominent?: boolean;
  summary: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  /** Bulleted points (the two paths; the reality checks). */
  bullets?: SwitchBullet[];
  who?: string;
  /** Pack ⚠ flags, in pack order. */
  flags?: string[];
  /** Interactive checklist groups (the Switch Checklist entry). */
  checklistSections?: SwitchChecklistSection[];
  links: SwitchLink[];
};

export type SwitchGroup = {
  title: string;
  note?: string;
  entries: SwitchEntry[];
};

export const SWITCH_STANDING_NOTE =
  "Who a branch takes from another service — which jobs, which grades, how many, at what ages — is set by that branch's current “business rules,” and those rules change constantly (sometimes several times a year). So this section deliberately states no current quotas, caps, age limits, bonus amounts, or “open jobs” lists. Anything you read elsewhere that lists them is a snapshot that is already going stale. The only current answer lives on the gaining branch's official page and with its recruiter — which is exactly where every entry below points you.";

const NPC_CONDITIONAL_RELEASE: SwitchLink = {
  label: "DD Form 368 process, worked example — Navy Personnel Command, Conditional Release",
  url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/Enlisted/Conditional-Release/",
};
const NPC_OFFICER_IST: SwitchLink = {
  label: "Officer inter-service transfer routing, worked example — Navy Personnel Command, Interservice Transfer",
  url: "https://www.mynavyhr.navy.mil/career-management/reserve-personnel-mgmt/officers/interservice-transfer/",
};
const RTC_VETERANS_ORIENTATION: SwitchLink = {
  label: "RTC Veterans Orientation — what prior-service accessions actually do on arrival, with document checklist",
  url: "https://www.bootcamp.navy.mil/Recruits/Veterans-Orientation/",
};

export const SWITCH_GROUPS: SwitchGroup[] = [
  {
    title: "How a Branch Switch Works",
    entries: [
      {
        name: "The Two Paths, and the Paper That Starts Both — DD Form 368",
        kind: "Start here",
        summary:
          "There are only two ways to change branches, and they feel very different. Which path you're on is decided by one fact: are you still under contract (including Guard/Reserve drilling status or IRR obligation) or not? Still in → DD Form 368. Fully out → prior-service applicant with a DD214.",
        bullets: [
          {
            title: "Transfer while serving (inter-service / inter-component transfer)",
            text: "You move without a break in service. This is governed DoD-wide by DoD Instruction 1300.04, “Inter-Service and Inter-Component Transfers of Service Members,” which covers commissioned officers, warrant officers, and enlisted members moving between services, and between components (active / Guard / Reserve) of the same service. The central document is DD Form 368, Request for Conditional Release: the gaining service's recruiter or program office starts it (Section I), and your current service's designated approval authority signs off (Section II). Your unit commander is generally NOT the signing authority — releases are decided at service personnel-center level (for example, Navy Reserve enlisted releases are signed only by Navy Personnel Command, PERS-913; Army Special Forces inter-service packets require a DD 368 signed by your service's discharge authority, not your commander). Key truths: both services must agree — the gaining branch has to want you AND your current branch has to release you; approval is not guaranteed, and there is no formal appeal if your branch says no; and a transfer does NOT wipe out your existing service obligation — time after the transfer counts toward the obligation you already have. The form itself sets short decision clocks (Section II is completed by your command/designated authority within 30 days of receipt, per the form's instructions). If approved and you don't complete the move, the release expires — the Navy, for example, approves conditional releases for 6 months from approval or until your end of service, whichever comes first, and an expired release means starting a new request.",
          },
          {
            title: "Separate first, then rejoin as prior service",
            text: "You finish your contract (or otherwise separate), get a DD Form 214, and later apply to the new branch as a prior-service applicant through its recruiters. This path runs on the gaining branch's prior-service business rules (see the Reality Checks entry) and almost always involves MEPS processing. It is slower and less certain than a no-break transfer, but it's the only path once you've already separated — and for some branches it's effectively the only path they offer (Air Force enlisted, in the branch entries below).",
          },
        ],
        who: "Everyone considering a switch — read this first. Officers: the legal authority for officer transfers is 10 U.S.C. § 716, and your route runs through your service's personnel center and the gaining service's transfer program (see the branch entries), not a recruiting station.",
        links: [NPC_CONDITIONAL_RELEASE, NPC_OFFICER_IST],
      },
      {
        name: "Reality Checks — Read Before You Fall in Love With the Idea",
        kind: "Read this first",
        prominent: true,
        summary: "Switching branches is possible; it is rarely simple. The honest expectations:",
        bullets: [
          {
            title: "Both sides can say no",
            text: "Your current branch can refuse the release (manning, a critical job, an unfulfilled obligation). The gaining branch can refuse you (no vacancy in your field, grade, or year group). Either “no” ends it.",
          },
          {
            title: "You may lose grade",
            text: "Enlisted members moving as prior-service applicants get a formal grade determination from the gaining branch — your last grade is an input, not a promise. Officers transferring under DoDI 1300.04 / 10 U.S.C. § 716 generally keep the grade and date of rank held the day before transfer, but enlisted prior-service accessions carry no such guarantee, and some doors are famous for starting you low (Marine Corps, in the branch entries below).",
          },
          {
            title: "Your old job may not exist — or may not be open — over there",
            text: "Every branch fills other-service applicants against its vacancies. If your specialty has a direct equivalent in the gaining branch and that specialty is short-handed, you may be steered into it whether you wanted a change or not; if it isn't open, you retrain into what is open, if anything. Before assuming, check what your job is called in the other branch: the Library entry for your current job lists its cross-branch equivalents (e.g., USMC 1371 ↔ Army 12B ↔ Navy BU/EO ↔ AF 3E0X1).",
          },
          {
            title: "Prior-service slots are usually the smallest pile of seats",
            text: "Branches fill most accessions with first-time recruits; prior-service and inter-service quotas are set by current business rules and can be tiny or zero in a given year for a given branch (the Air Force has run years with only a few hundred prior-service seats across all source branches). This is why this section prints no numbers: whatever figure you find is already expiring.",
          },
          {
            title: "Your DD214 codes gate everything on the separate-first path",
            text: "Recruiters read your reenlistment (RE) code and separation codes first. A code that requires a waiver slows or stops processing; some codes bar reentry outright unless corrected through a records board. If your code is wrong, fix the record before applying (see the Records & DD214 Center section).",
          },
          {
            title: "Break in service matters",
            text: "How long you've been out affects grade determination, whether you repeat entry training, and sometimes eligibility itself. Branches weigh it differently — another business-rules question for the gaining branch's recruiter.",
          },
          {
            title: "MEPS is part of the separate-first path",
            text: "Prior-service applicants are processed through MEPS like other applicants: your prior service and release/separation documents are verified there before anything proceeds, along with the medical and administrative screening. Expect to bring paperwork, not just stories (see the Checklist entry).",
          },
          {
            title: "Training may repeat",
            text: "Some branches credit another service's basic training; some don't, in whole or in part. The Marine Corps is the standing example: other-service enlisted applicants should expect to attend Marine Corps recruit training. What you will repeat is decided by the gaining branch under its current rules.",
          },
          {
            title: "⚠ Security clearance",
            text: "An existing eligibility usually carries across services through reciprocity — clearances are adjudicated government-wide, not per branch — but “usually” is doing work in that sentence: the gaining service still reviews your record, an expired or flagged investigation can mean starting over, and this guide treats clearance transfer as likely, not promised. Confirm with the gaining branch's recruiter/security office.",
          },
          {
            title: "Bonuses and incentives are whatever the current rules say",
            text: "Prior-service applicants are often eligible for fewer incentives than first-time recruits, and any bonus attaches to the specific job and contract the gaining branch offers you now. No figure in this section should be treated as an offer.",
          },
        ],
        who: "Anyone past the “just curious” stage — read before talking to either chain of command, so you negotiate with your eyes open.",
        details: [
          "The DoD-wide framework both paths run under is DoD Instruction 1300.04 — see the services' own worked examples of it in action, linked on the DD Form 368 entry above.",
        ],
        links: [],
      },
    ],
  },
  {
    title: "Joining Each Branch From Another Branch",
    note: "One entry per gaining branch, each with its official door. What that branch is taking right now — jobs, grades, seats — lives only in its current business rules and with its recruiter.",
    entries: [
      {
        name: "Army — The Biggest Door, Run by USAREC's Prior-Service Rules",
        kind: "Army",
        summary:
          "The Army takes more prior-service and other-service applicants than any other branch, and it does so under published machinery: U.S. Army Recruiting Command (USAREC) processes prior-service enlistments under AR 601-210 and USAREC Regulation 601-210, whose Chapter 8 is literally “Procedures for Enlisting Prior Service…” — including service verification and formal grade determination (applicants at higher grades get a written grade decision before enlisting). The Army publishes Prior Service Business Rules that say which MOSs are open to prior-service applicants, by grade — those rules are the whole game, they are updated by USAREC/HRC messages, and they are applied by recruiters, which is why the practical route is: talk to an Army recruiter, who checks your record against the current rules. (The Business Rules themselves are routed to here, never listed — they rotate.) Still serving in another component? That's the DD Form 368 path into an Army recruiter's hands. Army National Guard runs its own prior-service front door for Guard enlistments.",
        details: [
          "Officers: inter-service transfer of commissioned officers into the Army is governed by AR 614-120 and runs through Army Human Resources Command channels rather than recruiting stations — start with your own service's release process (the DD Form 368 entry) and HRC.",
          "One visible niche door: Army Special Operations recruiting accepts inter-service transfer volunteers for Special Forces Assessment and Selection from the Air Force, Marine Corps, Navy, and Coast Guard — with an approved DD Form 368 signed by your service's discharge authority (not your unit commander) as a hard requirement.",
        ],
        who: "Prior-service and other-service enlisted applicants (the volume path); serving members of other branches/components via DD 368; officers via AR 614-120/HRC.",
        flags: [
          "The Army's business rules and open-MOS lists rotate — do not rely on any list of “open MOSs for prior service” found online, including in older copies of the rules themselves.",
          "Flag: No dedicated goarmy.com prior-service page could be verified in this session's official-source search — the Army routes prior-service applicants through recruiters working the USAREC rules above. Start at goarmy.com's joining pages or a local recruiter and ask specifically for prior-service processing.",
        ],
        links: [
          {
            label: "USAREC Regulation 601-210 — official processing rules (Ch. 8 = prior service)",
            url: "https://recruiting.army.mil/Portals/15/Documents/Forms%20and%20Pubs/Regulations/UR%20601-210_1.pdf?ver=6fwtA8Ji0Uw9nO4k-Bl0zQ==",
          },
          {
            label: "Army National Guard — Prior Service",
            url: "https://nationalguard.com/prior-service",
          },
          {
            label: "Army Special Operations — Inter-Service Transfers (SFAS)",
            url: "https://www.goarmysof.army.mil/SF/Inter-Service-Transfers/",
          },
        ],
      },
      {
        name: "Navy — NAVETs, OSVETs, and PRISE-R",
        kind: "Navy",
        summary:
          "The Navy sorts prior-service people into two named buckets: NAVETs (Navy veterans — your last tour was Navy/Navy Reserve) and OSVETs (other-service veterans — your last tour was in another branch). OSVET is the bucket that matters for switching into the Navy. On the Reserve side, the named program is PRISE-R (Prior Service Reenlistment Eligibility – Reserve), governed by MILPERSMAN 1133-061: it lets NAVETs and OSVETs enlist and affiliate with the Selected Reserve into available ratings set by current fiscal-year recruiting goals and community health — including direct rating conversions and ratings requiring “A”/“C” school. One hard truth the official article states plainly: a NAVET has an “entry rating” (the rating held at discharge); an OSVET does not — other-service veterans' entry is handled as nonrated unless a conversion is approved, which is the Navy's version of the grade/job reality check. Active-duty prior-service accessions run through Navy recruiters under Navy Recruiting Command's current prior-service restrictions (recruiters check “current prior service restrictions” before processing — the restrictions are the business rules, and they change).",
        details: [
          "If you do come in, prior-service accessions are in-processed through Recruit Training Command Great Lakes' Veterans Orientation — NAVETs and OSVETs are NOT required to attend Navy recruit training, per RTC; they complete Veterans Orientation in-processing instead — and RTC publishes the exact document checklist you'll arrive with (the Checklist entry mirrors it).",
          "Still serving somewhere else? Your release is a DD Form 368 approved by your losing service — and note the Navy's own house rule as an example of how specific these get: for Navy Reserve enlisted, only PERS-913 signs. Officers: Navy Personnel Command runs officer interservice transfers (for Reserve officers, PERS-911) — the gaining service submits the DD 368 to NPC for approval.",
        ],
        who: "Other-service veterans aiming at the Navy Reserve (PRISE-R) or active Navy (recruiter + current prior-service restrictions); serving members via DD 368; officers via Navy Personnel Command.",
        flags: [
          "PRISE-R availability is explicitly tied to fiscal-year goals and rating health — which ratings are open is a this-year question, answered by a Navy recruiter, not by any published list.",
          "Flag: Navy.com's public page titled “Joining the Navy with Prior Military Service” is cited by name in other official Navy material, but its direct URL could not be pulled from official search results this session — start at the Navy.com joining page linked below and ask for the prior-service route, or go straight to a Navy recruiter.",
        ],
        links: [
          {
            label: "MILPERSMAN 1133-061 — PRISE-R (official program article)",
            url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1100Recruiting/1133-061.pdf",
          },
          RTC_VETERANS_ORIENTATION,
          NPC_OFFICER_IST,
          {
            label: "Navy.com — Joining (start here for the prior-service route)",
            url: "https://www.navy.com/joining",
          },
        ],
      },
      {
        name: "Marine Corps — The Hardest Door: Mostly for Former Marines",
        kind: "Marine Corps",
        summary:
          "Be clear-eyed about this one: the Marine Corps' named prior-service program, the Prior Service Enlistment Program (PSEP), run under MCO 1130.80B and announced by fiscal-year campaign plans (most recently MARADMIN 421/24, the FY25 plan), is built for Marines — current Reserve Marines and prior enlisted Marines of any rank returning to the Regular Marine Corps. Its eligibility list includes “other-service members with previous Marine Corps service” — i.e., you had to be a Marine first. The Corps does not run a general open door for other-service enlisted the way the Army does. If you have never been a Marine and want to become one, your route is a regular Marine recruiter and a regular accession — and the standing expectation, repeated across official-adjacent guidance, is that other-service applicants attend Marine Corps recruit training in full and should not expect to keep their previous grade (entry at junior enlisted grades is the norm).",
        details: [
          "PSEP itself works like the other branches' business rules in miniature: applicants apply through a local recruiter or career planner at any time, against available MOS “boat spaces,” with service limits that apply to everyone (stated in each fiscal-year plan as the program's published frame, not a promise about future years' plans). Reserve Marines moving to the active component use PSEP as an inter-component transfer, with a conditional release where their status requires one.",
          "Officers: other-service officers seeking a Marine commission work through a Marine Officer Selection Officer (OSO) and the inter-service transfer framework of DoDI 1300.04 — there is no separate public USMC officer IST program page; the OSO is the door.",
        ],
        who: "Former Marines and Reserve Marines (PSEP); never-Marines (regular recruiter, expect recruit training and a junior grade); officers (OSO).",
        flags: [
          "PSEP campaign plans are fiscal-year documents — the FY25 plan (MARADMIN 421/24) is the latest verified here; a new FY plan supersedes it. MOS boat spaces change with each plan.",
          "Flag: No dedicated marines.com prior-service program page exists in official search results — consistent with the program's design (PSEP is administered through recruiters/career planners under the current MARADMIN, not marketed on marines.com).",
        ],
        links: [
          {
            label: "MARADMIN 421/24 — FY25 Prior Service and Reserve Augmentation Program Campaign Plan (official)",
            url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3909970/",
          },
          {
            label: "Marine Corps Recruiting Command on PSEP",
            url: "https://www.mcrc.marines.mil/In-the-News/Stories/Article/Article/630251/once-a-marine-always-a-marine/",
          },
          {
            label: "Marines.com recruiter contact (the form has a “Prior Service Marine” routing option)",
            url: "https://rmi.marines.com/request-information",
          },
        ],
      },
      {
        name: "Space Force — A Window, Not a Door: The IST Program",
        kind: "Space Force",
        summary:
          "The Space Force is the one branch where “switching” is primarily a true inter-service transfer, run as an announced program rather than walk-in recruiting. The Space Force's official Transfer Programs page runs the Interservice Transfer (IST) program: when a window opens, qualified active-duty members of other uniformed services apply (the application runs through MyVector) to transfer to active-duty Space Force in select career fields. Windows are episodic — the page currently carries the FY27 IST cycle; that is the page's current content, not a standing fact, and between windows there is effectively no active-duty transfer intake. The page is also where selection announcements post. The program's own description sets the flavor: applicants who can fill Space, Intelligence, or Cyber roles without retraining get priority; retraining applicants are considered; members on administrative or medical hold are not eligible. Two structural notes from the program: the Space Force has no warrant officers, so warrant officers have no IST lane; and Coast Guard members are handled outside this DoD transfer process (the Coast Guard sits in DHS) — Guardians-to-be from the Coast Guard use the prior-service route below.",
        details: [
          "Not on active duty? The same official page routes Guard, Reserve, and separated prior-service members seeking active-duty Space Force entry to the 320th Recruiting Squadron (320RCS.A3OS.PriorService@spaceforce.mil) for current accession opportunities. Space Force enlisted recruiting otherwise runs through Air Force recruiters (the Space Force sits in the Department of the Air Force), and new Guardians are accessed via spaceforce.com.",
        ],
        who: "Active-duty members of other services during an announced IST window (the main event); Guard/Reserve/separated prior-service via the 320th Recruiting Squadron contact on the official page.",
        flags: [
          "IST windows open and close on the Space Force's schedule, and eligible career fields are per-window. The FY27 window referenced on the page will pass; the page — not this guide — is the source for whether a window is open now.",
        ],
        links: [
          {
            label: "USSF Transfer Programs — official (IST windows, application instructions, FAQs, and the prior-service squadron contact)",
            url: "https://www.spaceforce.mil/Transfer-programs/",
          },
        ],
      },
      {
        name: "Air Force — Two Doors: Recruiter-Run Prior Service (Enlisted) and AFPC IST (Officers)",
        kind: "Air Force",
        summary:
          "Enlisted: the Air Force runs a Prior Service Program, but historically it is the most restrictive of all: Headquarters Air Force sets the requirements from career-field manning, and in documented years the total intake across all source services (active, Guard, Reserve) has been very small, limited to specific career fields in categories like “direct duty” (you already hold the AFSC or its equivalent) and “retraining” (historically, special warfare fields). Treat any specific number or field list you find — including in official news stories from past fiscal years — as expired. The working route is an Air Force recruiter: Air Force recruiting stations explicitly staff “Enlisted & Prior Service Recruiting Inquiries,” and the recruiter applies the current fiscal year's prior-service guidance to your record (expect to hand over your DD214, performance reports, and, if you're still in a Guard/Reserve component, a DD Form 368). Air National Guard and Air Force Reserve accessions are separate, larger doors run by those components' recruiters — if active duty says no, the ARC components are a legitimate alternate route into the Air Force family.",
        details: [
          "Officers: the Air Force runs a standing Interservice Transfer program at the Air Force Personnel Center (AFPC) under 10 U.S.C. § 716: fully qualified warrant and commissioned officers from other uniformed services may apply to transfer to active-duty Air Force without interruption in service, into critically manned career fields, and selectees are appointed in the same grade they currently hold. Guard/Reserve officers need a DD Form 368 from their parent service (the AFPC page warns the release date must allow processing time); officers already discharged or sitting in another service's IRR are NOT eligible for IST — they'd use regular accession programs instead. AFPC processing can take up to six months after your parent service approves.",
        ],
        who: "Enlisted prior-service (recruiter, current-FY rules, expect scarcity); officers and warrant officers currently serving (AFPC IST); everyone else (ANG/AFRC recruiters as the alternate door).",
        flags: [
          "Do not plan around the Air Force's prior-service numbers from any past year — the program has swung from hundreds of seats to dozens. Current-year guidance lives with recruiters and AFPC only.",
          "Flag: AirForce.com maintains a prior-service FAQ (cited inside an official military.com-hosted Air Force release as airforce.com/contact-us/faq/prior-service/), but the page itself could not be opened for first-hand verification this session — the recruiter locator below is the verified route, and the FAQ address is deliberately not linked here.",
        ],
        links: [
          {
            label: "AFPC Interservice Transfer — officers (official program page)",
            url: "https://www.afpc.af.mil/Career-Management/IST/",
          },
          {
            label: "Find an Air Force Recruiter — official locator (stations list prior-service recruiting inquiries)",
            url: "https://www.airforce.com/find-a-recruiter",
          },
        ],
      },
      {
        name: "Coast Guard — “Former Servicemembers, Make Your Move”",
        kind: "Coast Guard",
        summary:
          "The Coast Guard recruits prior-service members under its own banner — its official recruiting site has a dedicated Prior Service page (“Former Servicemembers, Make Your Move”) aimed at people continuing a military career in the Coast Guard, including lateral-entry messaging for officers: bring your experience, keep serving at rank, and train into Coast Guard fields like law enforcement, environmental science, engineering, and healthcare. Enlisted prior-service accessions run through Coast Guard recruiters like other accessions (MEPS processing included — the Coast Guard's own Get Started page walks every applicant type through recruiter → screening → MEPS testing and medical). Officers have the most clearly documented other-service doors in this whole section: the Prior Trained Military Officer (PTMO) program exists specifically for people with prior military officer experience, sitting inside the Coast Guard's Direct Commission Officer programs — PTMO selectees start up to lieutenant junior grade (O-2) with a three-year active-duty commitment, per the official DCO page; aviators from other branches have the Direct Commission Aviation route.",
        details: [
          "One Coast Guard-specific wrinkle worth knowing before you start: Coast Guard recruiting guidance has required applicants currently serving in another branch (or in another branch's Delayed Entry Program) to be fully discharged before enlisting in the Coast Guard, with no waivers for that requirement — if you're still under contract elsewhere, expect the sequence to be release/discharge first (the DD Form 368 entry), then Coast Guard processing; confirm the current rule with the recruiter, because it drives your timing.",
        ],
        who: "Prior-service enlisted (recruiter, prior-service page); prior-service officers (PTMO and the other Direct Commission programs — the cleanest officer door in this section); serving members of other branches (discharge/release sequencing first).",
        flags: [
          "Lateral-entry and direct-commission details (starting grade, commitment lengths) are as the official pages state them for the current programs — the DCO page is the authority, and program panels convene on the Coast Guard's schedule, not year-round.",
        ],
        links: [
          {
            label: "Coast Guard Prior Service — official recruiting page",
            url: "https://gocoastguard.com/prior-service",
          },
          {
            label: "Direct Commission Officer Programs — official (includes PTMO)",
            url: "https://www.gocoastguard.com/get-started/officer-applications/direct-commission-officer-programs",
          },
          {
            label: "Prior Trained Military Officer — official program page",
            url: "https://www.gocoastguard.com/get-started/officer-applications/prior-trained-military-officer",
          },
        ],
      },
    ],
  },
  {
    title: "The Switch Checklist",
    entries: [
      {
        name: "Checklist — Documents, Order of Operations, and Timing",
        kind: "Checklist",
        summary: "Work it in this order; the sequence matters as much as the paperwork.",
        checklistSections: [
          {
            heading: "Talk first, in this order",
            items: [
              "Talk to the gaining branch's recruiter (or program office) FIRST — before telling your chain of command you're leaving, and long before any release paperwork. The recruiter checks your record against the current business rules and tells you whether a door exists at all, in what job, and at what likely grade. No door, no point burning goodwill at home.",
              "Ask the recruiter the four reality-check questions from the Reality Checks entry: Is my field (or its equivalent — check the Library's cross-branch equivalents for your job) open? What grade will the grade determination likely give me? Will I repeat entry training? What happens to my clearance and my time-in-service credit?",
              "Officers: your “recruiter” is the gaining service's transfer program (AFPC IST, USSF IST, Navy Personnel Command, Coast Guard PTMO/DCO) plus your own service's personnel center — start both conversations early; officer transfers are board/panel processes with long lead times (AFPC alone cites up to six months after parent-service approval).",
            ],
          },
          {
            heading: "Documents to have in hand before the first real appointment",
            items: [
              "DD Form 214 (if separated) — member copy showing character of service, RE code, and separation codes; recruiters will not seriously process you without it. Every prior-service accession in this section keys off it.",
              "DD Form 368 (if still serving, including Guard/Reserve/IRR) — started by the gaining service, signed by your service's designated authority (not your unit commander). Know its validity window once approved (e.g., Navy: 6 months or until end of service, whichever first) and plan the move inside it.",
              "Medical records — your service treatment records and any VA records; MEPS and the gaining service will review them. The Navy's RTC Veterans Orientation checklist for arriving prior-service accessions is a good model of the full packet: DD-214(s), previous service records (evaluations/occupation and awards history), DD Form 368 if applicable, and a verified Joint Services Transcript / college transcripts.",
              "Performance record — recent evaluations/performance reports (the Air Force's prior-service processing has asked for your last five reports; the USSF IST asks for the same — have them ready regardless of branch).",
              "Personnel basics — birth certificate, Social Security card, education documents, marriage/dependent documents if applicable, and anything needed to verify your service (your service will be verified against Defense Manpower Data Center records — discrepancies between your story and the database stop processing until resolved).",
            ],
          },
          {
            heading: "Timing",
            items: [
              "Work backward from your contract end / EAS / ETS. On the transfer path, the release, the gaining service's processing, and your current obligation all have to line up — starting a DD 368 the month you separate is starting late.",
              "Guard/Reserve members: you must keep drilling and meeting your current obligations until the transfer or discharge is final — the DD 368 itself says so. Stopping early creates the kind of record that kills the gaining branch's interest.",
              "Respect the clocks: your service's decision window on the release, the release's own expiration once approved, MEPS scheduling, and (for Space Force) the IST application window — miss a window and you wait for the next one, which may be next fiscal year.",
              "Don't resign a commission, decline a reenlistment, or let a clearance investigation lapse on the expectation of a switch. Nothing is real until the gaining service has you signed and your current service has released you.",
            ],
          },
        ],
        who: "Anyone moving from curiosity to action — run it before the first recruiter appointment and again before signing anything.",
        flags: [
          "Nothing in this section is a promise of acceptance, grade, job, or bonus — every entry routes to the gaining branch's current official source, and this checklist tells you to get the four reality-check answers from the recruiter before starting paperwork.",
        ],
        links: [
          {
            label: "Model document packet — the Navy's official prior-service in-processing page",
            url: "https://www.bootcamp.navy.mil/Recruits/Veterans-Orientation/",
          },
        ],
      },
    ],
  },
];
