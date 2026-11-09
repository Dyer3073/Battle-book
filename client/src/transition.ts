// Transition & Jobs library — static reference data transcribed from the
// researched transition pack (~/workspace/military-app/transition/transition.md,
// researched November 8, 2026). Summaries, eligibility/timing, labels, and
// links come only from the pack.
//
// Fidelity rules baked into this data:
// - Every ⚠ flag and every nonprofit / commercial label in the pack ships
//   with its entry (flags render as amber ⚠ notes).
// - The pack's excluded items (Bradley-Morris standalone, Military Times
//   board, Indeed program) are deliberately NOT entries — they were
//   excluded as merged / unverifiable. Bradley-Morris is mentioned only
//   inside the RecruitMilitary entry, exactly as the pack states it.
// - LinkedIn Premium is written the pack's corrected way: the free year is
//   distributed only through SVA / Hire Heroes USA / Hiring Our Heroes
//   participation — there is no direct sign-up.
// - Troops Into Transportation carries the pack's not-free flag: it uses
//   GI Bill entitlement.
// - The VR&E entry is a link-only cross-reference to the Benefits section.

export type TransitionLink = { label: string; url: string };

export type TransitionEntry = {
  name: string;
  kind: string;
  summary: string;
  who: string;
  links: TransitionLink[];
  flag?: string;
  crossRef?: boolean;
};

export type TransitionGroup = {
  title: string;
  framing?: string;
  entries: TransitionEntry[];
};

export const TRANSITION_STANDING_NOTE =
  "⚠ in an entry means the detail varies by branch, fiscal year, or program cycle — never treat it as permanent; check the linked page for the current version. Eligibility and timing are stated only as the program itself states them. This section describes what each program is and where to go — it is not legal, career, or financial advice.";

export const EAS_PANEL_TITLE = "Six months from EAS? Start here, in this order";

export const EAS_STEPS: { title: string; body: string }[] = [
  {
    title: "1. TAP first — it's mandatory",
    body: "By law you should start TAP no later than 365 days before separation (24 months before retirement). At six months out, if you haven't started, you're already behind — starting late is the most common transition mistake.",
  },
  {
    title: "2. SkillBridge second — apply now",
    body: "Your last 180 days can be a civilian internship, apprenticeship, or training placement while you keep military pay and benefits — but it needs your commander's approval, each branch caps the time by rank, and approvals take months. Apply now, not at the 180-day mark.",
  },
  {
    title: "3. DoD COOL third — before EAS",
    body: "COOL maps your military job to the civilian licenses and certifications employers and licensing boards actually ask for, and the services can pay credentialing exam and renewal fees for eligible members still serving. That fee coverage is for people in service — credential funding largely ends at EAS, so test while you're still in.",
  },
  {
    title: "Want a human guide instead?",
    body: "USO Pathfinder pairs you with a free one-on-one Transition Specialist who builds a personal action plan, and Hire Heroes USA pairs you with a free career coach for resumes, interviews, and mentoring. Both are in the groups below.",
  },
];

export const TRANSITION_GROUPS: TransitionGroup[] = [
  {
    title: "Translate your MOS",
    framing:
      "Start inside this app. Every MOS / rating / AFSC entry in the app's job library already carries a “civilian transferable skills” section written in plain employer language — that's your first draft. The tools below are the deep crosswalks: they take the same military code and return the official civilian occupation matches, wage and outlook data, and live job postings. App first for the story of your job; these tools for the formal match.",
    entries: [
      {
        name: "My Next Move for Veterans",
        kind: "O*NET / U.S. Department of Labor",
        summary:
          "The federal government's career translator for veterans. Enter your military job code or title and it returns the civilian careers that match your skills, with plain-language descriptions, typical pay, and outlook for each. You can also browse by industry or answer interest questions if you want a change, not just a translation.",
        who: "Anyone in any branch, at any point — the natural first stop, ideally 12+ months before EAS, again when building a resume.",
        links: [{ label: "mynextmove.org/vets", url: "https://www.mynextmove.org/vets/" }],
      },
      {
        name: "O*NET Military Crosswalk Search",
        kind: "U.S. Department of Labor",
        summary:
          "The official crosswalk underneath most other translators. Pick your branch, enter an MOS, rating, or AFSC, and it lists the related civilian O*NET occupations, each with the tasks, skills, and work activities written in the exact vocabulary civilian job postings use. The underlying military-to-civilian data comes from the Defense Manpower Data Center, supplemented by the services' COOL projects.",
        who: "Anyone who wants the detailed, occupation-by-occupation match — especially useful for lifting task language straight into resume bullets.",
        links: [{ label: "onetonline.org/crosswalk/MOC", url: "https://www.onetonline.org/crosswalk/MOC/" }],
      },
      {
        name: "CareerOneStop — Veterans Job Matcher & Veteran Services",
        kind: "U.S. Department of Labor",
        summary:
          "CareerOneStop is DOL's career-services hub, and its Veterans Job Matcher does the same military-code-to-civilian-career matching, then goes a step further: each matched career links to real job postings in your local area, plus wage and outlook data. The wider CareerOneStop veterans section covers resumes, training, benefits, and local help.",
        who: "Anyone translating their job — use the Matcher when you want to go from “what civilian job is this?” to “who is hiring for it near me?” in one sitting.",
        links: [
          { label: "Veterans hub", url: "https://www.careeronestop.org/Veterans/" },
          { label: "Veterans Job Matcher", url: "https://www.careeronestop.org/Toolkit/Jobs/match-veteran-jobs.aspx" },
        ],
      },
      {
        name: "Military.com — Military Skills Translator",
        kind: "Commercial",
        summary:
          "A commercial translator run by Military.com (a private military-news and benefits site, not a government source). Enter your MOS, AFSC, rating, and years of service and it returns matching civilian job titles with current openings on its own job board. Quick and readable, but treat its matches as a starting list and confirm anything important against the DOL tools above.",
        who: "Anyone who wants a fast second opinion on their matches, or who is already job-hunting on Military.com.",
        links: [{ label: "military.com/skills-translator", url: "https://www.military.com/skills-translator" }],
      },
      {
        name: "DoD COOL — Credentialing Opportunities On-Line",
        kind: "Official — all branches",
        summary:
          "COOL is the Defense Department's credentialing system: for each military occupation it shows the civilian licenses and certifications your training already maps to — the credential an employer or state licensing board actually asks for. Each service runs its own COOL site, and the services can pay for credentialing exam and renewal fees for eligible members still serving.",
        who: "Anyone still serving whose military job needs a civilian license or certification to count (medics, mechanics, IT, trades, aviation, and many more). Use it before you get out — the fee coverage is for people in service.",
        flag: "Funding rules and caps are set by each branch and change — check your branch site, don't rely on a remembered dollar figure.",
        links: [
          { label: "DoD portal", url: "https://www.cool.osd.mil" },
          { label: "Army COOL", url: "https://www.cool.osd.mil/army/" },
          { label: "Marine Corps COOL", url: "https://www.cool.osd.mil/usmc/" },
          { label: "Navy COOL", url: "https://www.cool.osd.mil/usn/" },
          { label: "Air Force & Space Force COOL", url: "https://afvec.us.af.mil/afvec/afcool/welcome" },
          { label: "Coast Guard COOL", url: "https://www.cool.osd.mil/uscg/" },
        ],
      },
    ],
  },
  {
    title: "Get placed before you get out",
    entries: [
      {
        name: "DoD SkillBridge",
        kind: "Official — DoD",
        summary:
          "SkillBridge lets you spend your final months in uniform doing civilian job training, an apprenticeship, or an internship with an approved employer instead of your normal duties — you keep your military pay and benefits, and the partner trains you for free, hoping to hire you at the end. It is governed by DoDI 1322.29, and the official site carries the searchable list of authorized partners and opportunities.",
        who: "Any rank may apply, but the placement must fall within your last 180 days of service and you generally must have served at least 180 continuous days; it requires your commander's approval.",
        flag: "180 days is a ceiling, not an entitlement — each branch caps how much time you can take by rank (for example, the Navy's tiers give E-5 and below up to 180 days and senior ranks less), so check your branch's current policy early.",
        links: [{ label: "skillbridge.osd.mil (also resolves at skillbridge.mil)", url: "https://skillbridge.osd.mil" }],
      },
      {
        name: "DoD Transition Assistance Program — TAP",
        kind: "Official — DoD",
        summary:
          "TAP is the mandatory transition program every service member goes through: initial counseling, pre-separation counseling, core classes on VA benefits, employment, and education, and a final Capstone review confirming you're ready. The official DoD TAP site explains the whole process and links to each service's program; TAPEvents lists the class calendar.",
        who: "Everyone separating or retiring — by law you should start no later than 365 days before separation (24 months before retirement). Starting late is the most common transition mistake; start at the 12-month mark even if your branch books you later.",
        links: [{ label: "dodtap.mil", url: "https://www.dodtap.mil" }],
      },
      {
        name: "Army TAP (formerly SFL-TAP)",
        kind: "Official — U.S. Army",
        summary:
          "The Army's delivery of TAP, run through Transition Assistance Centers on Army installations and virtually. Same federal milestones — begin no later than 365 days before separation — and Army TAP services remain available for a period after separation (retirees, for life, per the Army's program description).",
        who: "Soldiers, starting at the 12-months-out mark; also the door to Army Career Skills Program (the Army's SkillBridge) opportunities.",
        links: [{ label: "armytap.army.mil", url: "https://www.armytap.army.mil" }],
      },
      {
        name: "USMC Transition Readiness Program",
        kind: "Official — U.S. Marine Corps",
        summary:
          "The Marine Corps' version of TAP, delivered through Marine Corps Community Services (MCCS) Transition Readiness offices at each installation. It starts with your Unit Transition Coordinator: Initial Counseling and Pre-Separation Counseling no later than 365 days before EAS, Transition Readiness Seminar courses by 180 days out, and Capstone by 120 days out.",
        who: "Marines approaching EAS or retirement. There is no single national sign-up page — go through your installation's MCCS Transition Readiness office, which is how the Corps runs it.",
        links: [
          {
            label: "usmc-mccs.org — select your installation, then Career / Transition Readiness",
            url: "https://www.usmc-mccs.org",
          },
        ],
      },
      {
        name: "Navy TAP",
        kind: "Official — U.S. Navy",
        summary:
          "The Navy's TAP, managed through MyNavy HR and delivered at Fleet & Family Support Centers. Milestones mirror the other services: Initial Counseling and pre-separation counseling 365+ days before separation, and Capstone no later than 90 days before you separate.",
        who: "Sailors separating or retiring — start at the 365-day mark and use the MyNavy HR transition pages to track the steps.",
        links: [
          { label: "MyNavy HR — Transition / TAP", url: "https://www.mynavyhr.navy.mil/Career-Management/Transition/Transition-TAP/" },
        ],
      },
      {
        name: "Air Force TAP",
        kind: "Official — U.S. Air Force · also covers Space Force",
        summary:
          "The Air Force's TAP, delivered through Military & Family Readiness Centers, and the same program Guardians use. The Air Force recommends initiating no later than 365 days before separation — 18 months for separating members and 24 months for retirees is the encouraged timeline.",
        who: "Airmen and Guardians heading out — book through your installation M&FRC.",
        links: [{ label: "AFPC — Transition Assistance Program", url: "https://www.afpc.af.mil/Military-and-Family/Transition-Assistance-Program/" }],
      },
      {
        name: "Coast Guard TAP",
        kind: "Official — U.S. Coast Guard",
        summary:
          "The Coast Guard's transition program, run by the Office of Work-Life (CG-111) and delivered through Transition/Relocation Managers at Health, Safety and Work-Life Regional Practices. It includes a Reserve-specific transition path as well as the standard pre-separation counseling and seminar sequence.",
        who: "Coast Guard members separating, retiring, or moving to the Reserve. There is no single national registration page — the CG-111 Transition Assistance pages on the Coast Guard's DCMS site list the program and your regional contacts.",
        links: [
          {
            label: "dcms.uscg.mil — Office of Work-Life / CG-111 → Transition Assistance Program",
            url: "https://www.dcms.uscg.mil",
          },
        ],
      },
      {
        name: "Hiring Our Heroes",
        kind: "Nonprofit · SkillBridge fellowships",
        summary:
          "A nonprofit (U.S. Chamber of Commerce Foundation) that connects transitioning service members, veterans, and military spouses with employers. Its best-known offer is its fellowship programs — corporate fellowships and the Military Spouse Fellowship — which are DoD SkillBridge programs: a roughly 12-week placement with a host company during your last 180 days, built to convert into a job offer. It also runs hiring events and a resume engine.",
        who: "Service members inside the SkillBridge window (apply months ahead — cohorts fill), and veterans and spouses anytime for events and employer connections.",
        links: [{ label: "hiringourheroes.org", url: "https://www.hiringourheroes.org" }],
      },
      {
        name: "USO Pathfinder® Transition Program",
        kind: "Nonprofit — USO",
        summary:
          "A free, one-on-one transition service: a USO Transition Specialist builds a personalized action plan with you covering employment, education, finances, housing, and benefits, and stays with you through the process. It is not a job board — it's a human guide who connects you to the right programs, including many in this library.",
        who: "Active duty, Guard, and Reserve members and military spouses — support runs from about 12 months before separation to about 12 months after, so it's useful before, during, and after TAP.",
        links: [{ label: "uso.org — Pathfinder Transition Program", url: "https://www.uso.org/programs/uso-pathfinder-transition-program" }],
      },
    ],
  },
  {
    title: "Job boards & hiring",
    entries: [
      {
        name: "Hire Heroes USA",
        kind: "Nonprofit",
        summary:
          "A national nonprofit that provides free, one-on-one career help to service members, veterans, and spouses: a personal career coach, resume writing in civilian language, interview prep, mentoring, and access to its job board and virtual career fairs. Services are individual — you work with a person, not just a website.",
        who: "Transitioning members and veterans at any stage; a strong pick if you want guided help rather than a self-serve board. (Also one of the three nonprofit partners through which LinkedIn now distributes its free Premium offer — see the LinkedIn entry below.)",
        links: [{ label: "hireheroesusa.org", url: "https://www.hireheroesusa.org" }],
      },
      {
        name: "RecruitMilitary",
        kind: "Commercial — veteran recruiting firm; DAV partner",
        summary:
          "One of the largest veteran job boards, plus in-person and virtual career fairs run with DAV, and placement services for employers. Free for job seekers. RecruitMilitary is the surviving public brand of the combined Bradley-Morris / RecruitMilitary company — Bradley-Morris is not a separate program (the businesses combined in 2017, and RecruitMilitary is the operating brand).",
        who: "Veterans and transitioning members who want volume — lots of postings and frequent hiring fairs in most metro areas.",
        links: [{ label: "recruitmilitary.com", url: "https://recruitmilitary.com" }],
      },
      {
        name: "Orion Talent",
        kind: "Commercial — military recruiting firm",
        summary:
          "A recruiting firm that places transitioning officers, NCOs, and military technicians with employers, largely through scheduled hiring conferences where candidates interview with multiple companies over a few days. Free to candidates; employers pay the placement fees.",
        who: "Officers, senior NCOs, and technical specialists (nuclear, aviation, electronics, mechanics) — apply a few months before availability so you can be matched to a conference cycle.",
        links: [{ label: "oriontalent.com", url: "https://www.oriontalent.com" }],
      },
      {
        name: "HireMilitary",
        kind: "Commercial — approved DoD SkillBridge provider",
        summary:
          "A smaller platform built specifically around the transition window: it lists SkillBridge / Career Skills Program internships and a job board for transitioning members and veterans, and is free for service members. Its own guidance suggests applying for internships about 9–10 months before separation so approvals and placement line up.",
        who: "Members still in service planning a SkillBridge internship, and recent veterans.",
        links: [{ label: "hiremilitary.us", url: "https://hiremilitary.us" }],
      },
      {
        name: "American Job Centers — Veteran Priority of Service",
        kind: "Official — U.S. Department of Labor / state workforce",
        summary:
          "Roughly 2,400 American Job Centers nationwide give free in-person job-search help: resumes, job referrals, training referrals, and workshops. By federal law, veterans and eligible spouses get priority of service — you are served ahead of non-veterans in Department of Labor-funded programs — and many centers have dedicated veteran staff (DVOP specialists and local veterans' employment representatives). Find yours with CareerOneStop's AJC Finder and say “I'm a veteran” when you check in.",
        who: "Every veteran and transitioning member, especially after you move — this is the free local help in the town you land in, and the front door to state training money.",
        links: [
          { label: "CareerOneStop AJC Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
        ],
      },
      {
        name: "LinkedIn Premium for the Military Community",
        kind: "Commercial platform — offer route changed in 2026",
        summary:
          "LinkedIn's one-year free Premium Career offer for the military community still exists — but there is no direct sign-up. The free year is distributed only through three nonprofit partners — Student Veterans of America, Hire Heroes USA, and Hiring Our Heroes — to people participating in their career services, first come, first served, and you can't have an active Premium subscription when you redeem it. The old direct sign-up page described in older TAP guides no longer applies.",
        who: "Veterans and transitioning members who are working with one of the three partner nonprofits — ask your coach/representative about the Premium offer when you enroll.",
        flag: "Route changed: the free year comes only through Student Veterans of America, Hire Heroes USA, or Hiring Our Heroes participation — there is no direct sign-up link.",
        links: [{ label: "linkedin.com (offer accessed through the partners above)", url: "https://www.linkedin.com" }],
      },
    ],
  },
  {
    title: "Apprenticeships & trades",
    entries: [
      {
        name: "Helmets to Hardhats",
        kind: "Nonprofit",
        summary:
          "A national nonprofit that connects transitioning service members, veterans, and Guard/Reserve members with registered apprenticeships in the union building trades — electricians, plumbers, ironworkers, carpenters, and more. You create a free profile, and programs and employers in your area can find you; it makes the introduction to the apprenticeship, and the apprenticeship itself pays wages while you train.",
        who: "Anyone interested in construction trades, with or without trade experience — most apprenticeships take beginners. Start the profile before EAS so offers can line up with your separation date.",
        links: [{ label: "helmetstohardhats.org", url: "https://helmetstohardhats.org" }],
      },
      {
        name: "USMAP — United Services Military Apprenticeship Program",
        kind: "Official — DoD",
        summary:
          "A formal, registered apprenticeship you complete while still serving: you log your on-the-job hours in your rating or MOS, and when you finish, the U.S. Department of Labor issues a nationally recognized Certificate of Completion of Apprenticeship — the same credential a civilian apprentice earns. It turns the job you're already doing into paper a civilian employer respects.",
        who: "Active-duty Navy, Marine Corps, and Coast Guard members only (the other services run different systems). Enroll early in your tour — hours are logged as you go and can't easily be reconstructed later.",
        links: [{ label: "usmap.osd.mil", url: "https://usmap.osd.mil" }],
      },
      {
        name: "Apprenticeship.gov — Apprenticeship Job Finder",
        kind: "Official — U.S. Department of Labor",
        summary:
          "DOL's national apprenticeship hub. The Job Finder searches open registered-apprenticeship positions by location, industry, and occupation, and the Partner Finder locates programs and sponsors near you. Registered apprenticeships are paid jobs with structured training and a portable credential at the end; programs approved for the GI Bill can pay a monthly housing allowance on top of your apprentice wages.",
        who: "Anyone considering the trades or other apprenticed fields (healthcare, IT, and manufacturing included) — before EAS to plan, or after, since you apply directly to the employer or sponsor.",
        flag: "GI Bill housing-allowance rates step down over the training period and are set by VA — see the Benefits section.",
        links: [{ label: "apprenticeship.gov — Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }],
      },
      {
        name: "UA VIP — United Association Veterans in Piping",
        kind: "Union program · DoD SkillBridge",
        summary:
          "A free accelerated pre-apprenticeship run by the United Association (the plumbers, pipefitters, welders, and HVAC union): an intensive course of about 118 days (roughly 18 weeks) in welding, HVACR, or fire-sprinkler fitting at military installations including Camp Lejeune, Camp Pendleton, Fort Campbell, Fort Sill, Fort Carson, Fort Cavazos, JBLM, and Naval Station Norfolk. Graduates get direct entry into a five-year UA apprenticeship and guaranteed job placement with a UA signatory contractor — no GI Bill needed for the course itself.",
        who: "Transitioning service members who can run it as a SkillBridge program in their final months and want a guaranteed union-trades landing spot.",
        links: [{ label: "uavip.org", url: "https://www.uavip.org" }],
      },
      {
        name: "Troops Into Transportation — The CDL School",
        kind: "Commercial — read the funding note",
        summary:
          "A commercial truck-driving school program that trains active-duty members, veterans, Guard/Reserve members, and spouses for a Class A commercial driver's license at locations tied to installation Career Skills Programs.",
        who: "Members who want a CDL and a fast route into trucking, and who have decided the GI Bill trade-off is worth it.",
        flag: "NOT FREE: training is funded with GI Bill benefits — installation CSP documentation puts the cost at roughly 4 months and 10 days of Chapter 33 entitlement — so it spends education benefit you might want elsewhere. Price it against local community-college CDL programs before signing.",
        links: [{ label: "cdlschool.com — Troops Into Transportation", url: "https://cdlschool.com/troops-into-transportation" }],
      },
    ],
  },
  {
    title: "Federal jobs",
    entries: [
      {
        name: "USAJOBS — and the Veterans Hiring Path",
        kind: "Official — U.S. Office of Personnel Management",
        summary:
          "USAJOBS is the federal government's official job board — nearly every federal opening is posted there. Its Veterans hiring-path page explains, in plain language, how veterans' preference and the special hiring authorities show up in announcements, what documents you need (DD-214; SF-15 and a VA rating letter for 10-point claims), and how to set up your profile so agencies can find you.",
        who: "Anyone considering federal work — build the profile and upload documents while still serving; service members within 120 days of separation can claim preference with a certification of expected discharge in place of the DD-214.",
        links: [
          { label: "usajobs.gov", url: "https://www.usajobs.gov" },
          { label: "Veterans hiring path", url: "https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/" },
        ],
      },
      {
        name: "Veterans' Preference & Special Hiring Authorities — the overview",
        kind: "Official — OPM Vet Guide",
        summary:
          "Preference is an edge, not a guarantee: in competitive, open-to-the-public hiring, eligible veterans get 5 points added to a passing score (generally for wartime/campaign service), and 10 points if they have a service-connected disability — with 10-point disability eligibles placed at the top of most lists. Alongside preference sit three special authorities an agency can use to hire outside the normal competition: VRA (Veterans Recruitment Appointment — noncompetitive appointment of eligible veterans up to GS-11), VEOA (lets preference eligibles and certain veterans compete for internal merit-promotion jobs otherwise limited to current federal employees), and the 30% or more disabled veteran authority (noncompetitive appointment at any grade for veterans rated 30%+ service-connected disabled). OPM's Vet Guide is the authoritative rulebook behind all four.",
        who: "Anyone applying on USAJOBS — read the overview once before your first application, claim every authority you're eligible for in your profile, and attach the documents to prove it.",
        links: [
          { label: "OPM Vet Guide", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/" },
        ],
      },
      {
        name: "Feds Hire Vets",
        kind: "Official — U.S. Office of Personnel Management",
        summary:
          "OPM's single site for federal employment information for veterans, transitioning members, and military spouses: how federal hiring works, preference and hiring-authority explainers, free veteran employment training modules (including one on navigating USAJOBS and using noncompetitive authorities), and a directory of agency Veterans Employment Program Offices.",
        who: "Anyone serious about a federal career — the orientation stop before USAJOBS, and the place to find the veteran program office at an agency you want to work for.",
        links: [{ label: "opm.gov/fedshirevets", url: "https://www.opm.gov/fedshirevets/" }],
      },
    ],
  },
  {
    title: "In the Reserve/Guard with a civilian job",
    framing:
      "Drilling while employed? Start with USERRA and ESGR first — before job boards. Most Guard/Reserve employment problems aren't job-search problems; they're rights problems, and these two official sources define the rights and provide free help enforcing them.",
    entries: [
      {
        name: "USERRA — Your Reemployment & Anti-Discrimination Rights",
        kind: "Official — DOL VETS",
        summary:
          "The Uniformed Services Employment and Reemployment Rights Act is the federal law that protects your civilian job when you serve. At overview level: your employer must give you time away for service and promptly reemploy you when you return — generally into the position you would have reached if you had never left — if you gave advance notice, your service under that employer stays within the cumulative five-year limit (many kinds of service don't count against it), and you report back within the deadline for your length of service. USERRA also bans discrimination in hiring, retention, and promotion because of past, present, or future service, protects health coverage continuation for up to 24 months, and applies to virtually all employers, whatever their size. DOL's Veterans' Employment and Training Service (VETS) administers the law, publishes the plain-language guide, and investigates complaints.",
        who: "Every Guard/Reserve member with a civilian job — read the guide before your first drill conflict or mobilization, and go to DOL VETS (after ESGR mediation, below) if an employer crosses the line.",
        links: [
          { label: "USERRA guide (DOL VETS)", url: "https://www.dol.gov/agencies/vets/programs/userra" },
          { label: "Interactive USERRA Advisor", url: "https://webapps.dol.gov/elaws/userra.htm" },
        ],
      },
      {
        name: "ESGR — Employer Support of the Guard and Reserve",
        kind: "Official — DoD",
        summary:
          "A Department of Defense program that works the relationship from the other side: it educates employers about USERRA, recognizes supportive employers (including the Statement of Support program and employer awards), and — most usefully for members — runs the Ombudsman Services Program: trained, neutral volunteers who informally mediate conflicts between service members and their civilian employers over drill schedules, leave, and reemployment. Mediation is free and usually faster than a formal complaint.",
        who: "Any Guard/Reserve member with an employer problem — call ESGR first when a conflict starts (1-800-336-4590, option 1); if mediation fails, DOL VETS (the USERRA entry above) is the formal next step.",
        links: [
          { label: "esgr.mil", url: "https://www.esgr.mil" },
          { label: "What is USERRA (ESGR's explainer)", url: "https://www.esgr.mil/USERRA/What-is-USERRA" },
        ],
      },
      {
        name: "Military Friendly® Employers List",
        kind: "Commercial designation — VIQTORY",
        summary:
          "An annual list of employers rated as strong places for veterans and military spouses to work, produced by VIQTORY, a service-disabled veteran-owned media company. It is a commercial designation based on VIQTORY's own survey methodology — useful as a signal that a company has veteran hiring and Reserve-support practices, but it is not a government certification, and VIQTORY states it is not affiliated with or endorsed by DoD.",
        who: "Guard/Reserve members and veterans job-hunting who want to favor employers that publicly commit to supporting military employees — then confirm the real policy (military leave, differential pay) in the interview.",
        links: [{ label: "militaryfriendly.com", url: "https://www.militaryfriendly.com" }],
      },
      {
        name: "Reserve/Guard Component Career Pages",
        kind: "Official recruiting sites",
        summary:
          "Staying in part-time service after leaving active duty — or joining the Guard/Reserve directly — keeps a paycheck, benefits eligibility, and retirement credit running alongside a civilian career, and prior-service members often keep their rank and MOS. Each component's official site lists part-time jobs, units, and bonuses by state and specialty: Army National Guard, Air National Guard, Air Force Reserve, and Army Reserve are the usual first looks.",
        who: "Anyone leaving active duty who isn't done serving — talk to a component career counselor (often during TAP) before your EAS so there's no break in service.",
        links: [
          { label: "Army National Guard", url: "https://nationalguard.com" },
          { label: "Air National Guard", url: "https://www.goang.com" },
          { label: "Air Force Reserve", url: "https://afreserve.com" },
          { label: "Army Reserve", url: "https://www.usar.army.mil" },
        ],
      },
    ],
  },
  {
    title: "Start a business / other paths",
    entries: [
      {
        name: "Boots to Business (B2B) — SBA",
        kind: "Official — U.S. Small Business Administration",
        summary:
          "SBA's entrepreneurship training for the military community: a two-day “Introduction to Entrepreneurship” course offered as the entrepreneurship track of TAP at installations worldwide (and online), with a follow-on “Foundations of Entrepreneurship” course for going deeper. Boots to Business Reboot delivers the same training off-installation for veterans of all eras, Guard/Reserve members, and spouses who already left.",
        who: "Anyone curious about business ownership — take the TAP-track course during transition if entrepreneurship is even a maybe; Reboot is the version for after you've separated.",
        links: [
          { label: "sba.gov/bootstobusiness", url: "https://www.sba.gov/bootstobusiness" },
          { label: "Course registration portal", url: "https://sbavets.force.com" },
        ],
      },
      {
        name: "SBA Programs for Veteran-Owned Businesses",
        kind: "Official — U.S. Small Business Administration",
        summary:
          "SBA's veteran hub pulls together everything after the idea stage: help preparing for SBA-backed loans, federal contracting support including certification of veteran-owned and service-disabled veteran-owned small businesses (which unlocks set-aside contracts), and connections to local SBA district offices and resource partners.",
        who: "Veterans, service members, Guard/Reserve members, and military spouses starting or growing a business — go here when you're past the idea and need money, certification, or contracts.",
        links: [{ label: "sba.gov/veterans", url: "https://www.sba.gov/veterans" }],
      },
      {
        name: "Veterans Business Outreach Centers — VBOCs",
        kind: "Official — SBA-funded local centers",
        summary:
          "A nationwide network of SBA-funded centers (31 organizations) that give free, local, one-on-one business counseling, training workshops, and mentorship referrals to service members, veterans, Guard/Reserve members, and spouses. VBOCs also deliver many Boots to Business and Reboot classes, so they're the natural next step after the course — they help you keep going; they don't lend money themselves.",
        who: "Anyone starting or growing a business who wants a local human advisor rather than a website — find your regional center and book an intake.",
        links: [
          { label: "VBOC directory (SBA)", url: "https://legacy.sba.gov/local-assistance/resource-partners/veterans-business-outreach-centers-vboc" },
        ],
      },
      {
        name: "VA VR&E — Employment Track",
        kind: "Cross-reference — full details in Benefits",
        summary:
          "For veterans with a service-connected disability that makes employment harder, VA's Veteran Readiness and Employment program (Chapter 31) includes an employment track with counseling, training, and job placement support. Full details — eligibility, the entitlement evaluation, and how to apply — live in the Benefits section (VR&E entry); this pointer exists so job-searchers with a disability rating don't miss it.",
        who: "Veterans with a service-connected disability and an employment handicap, as VA defines them — see Benefits for the full picture.",
        crossRef: true,
        links: [{ label: "VA careers & employment", url: "https://www.va.gov/careers-employment/" }],
      },
    ],
  },
];
