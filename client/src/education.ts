// Education Planner — static reference data transcribed from the researched
// education pack (~/workspace/military-app/education/education.md, researched
// November 8, 2026). Summaries, eligibility, funding rules, statuses, and
// links come only from the pack.
//
// Fidelity rules baked into this data:
// - No entry promises a number of college credits. ACE recommends credit;
//   each school decides what it accepts, and that honesty entry (§1.4)
//   ships as its own card.
// - DANTES exam funding is stated exactly as the pack states it: first
//   attempt per exam title funded for actively serving members; veterans
//   are NOT DANTES-funded — their route is VA reimbursement.
// - The DSST retest two-number note (30 days per Prometric's general rule;
//   three months per DANTES for a previously funded title) is preserved.
// - SOC is a clearly labeled historical note: sunset March 29, 2019. It is
//   NOT presented as an available program.
// - USNCC carries its accreditation caveat: Candidate for Accreditation
//   status (MSCHE, Nov 21, 2024); degrees delivered by accredited partner
//   colleges.
// - Khan Academy is labeled a general nonprofit skills resource — not a
//   military program, no dedicated ASVAB/AFCT course.
// - TA, GI Bill, and COOL funding detail is cross-referenced to the
//   Benefits / Transition sections, never duplicated here.

export type EducationLink = { label: string; url: string };

export type EducationEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  paras?: string[];
  links: EducationLink[];
  flag?: string;
  historical?: boolean;
  benefitsRef?: boolean;
  transitionRef?: boolean;
};

export type EducationSection = {
  title: string;
  intro?: string;
  introLink?: EducationLink;
  entries: EducationEntry[];
};

export const EDUCATION_STANDING_NOTE =
  "A credit recommendation (from ACE) is not awarded credit. The school you apply to decides what it accepts, how much, and whether it counts toward your specific degree or only as electives. No entry in this section promises a number of credits — what a transcript shows varies by your courses, your job, your skill level, and when you served.";

export const EDUCATION_SECTIONS: EducationSection[] = [
  {
    title: "Your military transcript — credit for what you already did",
    entries: [
      {
        name: "Joint Services Transcript (JST)",
        kind: "Army · Navy · Marine Corps · Coast Guard",
        summary:
          "Your official DoD academic record if you served in the Army, Navy, Marine Corps, or Coast Guard (enlisted, warrant, and officers; serving and veterans). It lists the military courses you completed, the occupations you held, and college-level exam scores. Where the American Council on Education (ACE) has evaluated a course or occupation, the JST shows ACE's college credit recommendation — subject areas and semester hours at the vocational, lower-division, upper-division, or graduate level. Where ACE hasn't evaluated something, it still appears, just with no recommendation.",
        who: "Anyone in those four services — pull it early in your career, before every PCS if you can, and always before applying to a school or separating. Review it for errors while you can still get records fixed; you send the official copy straight from the JST site to the school.",
        flag: "The JST replaced the old AARTS and SMART transcripts. It does not carry your civilian college courses — schools get those separately. And it does not award credit by itself (see “Who accepts the credits” below).",
        links: [{ label: "jst.doded.mil", url: "https://jst.doded.mil/jst/" }],
      },
      {
        name: "ACE Military Guide",
        kind: "American Council on Education",
        summary:
          "The public database behind the JST's recommendations. ACE's faculty evaluation teams review military courses and occupations and publish what college credit they recommend for each. You can look up your own course or MOS/rating/AFSC-equivalent ahead of time to see what a school will be told.",
        who: "Anyone planning a degree — use it to forecast which of your training is likely to count before you pick a school, and to check that your JST is complete.",
        links: [{ label: "acenet.edu/militaryguide", url: "https://www.acenet.edu/militaryguide" }],
      },
      {
        name: "CCAF transcript (Air Force & Space Force)",
        kind: "Community College of the Air Force",
        summary:
          "If you're enlisted Air Force or Space Force, you don't have a JST — your record is a transcript from the Community College of the Air Force (CCAF), part of Air University. CCAF is an accredited two-year college for enlisted members; it transcripts your technical training, PME, and other credit and applies it toward a CCAF Associate in Applied Science degree in your specialty area.",
        who: "Enlisted Airmen and Guardians (auto-enrolled through training). Order the official transcript through the Air University Registrar (now via Parchment) whenever a school needs it.",
        links: [
          { label: "CCAF — airuniversity.af.edu", url: "https://www.airuniversity.af.edu/CCAF/" },
          { label: "Transcript requests — AU Registrar", url: "https://www.airuniversity.af.edu/Registrar/Transcript-Requests" },
        ],
      },
      {
        name: "Who accepts the credits — the honest version",
        kind: "Read this before you count on any credit",
        summary:
          "ACE recommendations are exactly that: recommendations. Each college or university sets its own transfer policy — how many recommended credits it takes, whether they land as specific course equivalents or general electives, and any caps on transfer credit. The same JST can produce very different results at two different schools.",
        paras: [
          "Practical move: before enrolling, ask the school's veterans/military office for a written degree plan showing exactly how your JST or CCAF credit applies. That document — not the transcript alone — is what protects you. (This is the AU-ABC “binding degree plan” idea in the Branch programs section below, and good schools in any branch's orbit will do a version of it.)",
        ],
        links: [],
      },
    ],
  },
  {
    title: "Free exams — test out of classes you already know",
    intro:
      "DANTES (Defense Activity for Non-Traditional Education Support) is the DoD agency that funds and runs credit-by-exam for the services. Its homepage is the front door for everything in this section.",
    introLink: { label: "dantes.mil", url: "https://www.dantes.mil" },
    entries: [
      {
        name: "CLEP (College-Level Examination Program)",
        kind: "College Board · funded by DANTES",
        summary:
          "College Board exams that grant college credit for knowledge you already have — 30+ subject exams at concept level (introductory college subjects: composition, math, history, sciences, business, foreign languages, and more). Pass one, and a school that accepts CLEP can give you the course credit without you sitting through the class.",
        who: "DANTES fully funds the exam fee for the first attempt at each exam title for eligible, actively serving members (all services, including Guard and Reserve, with a valid CAC), and DANTES-funded / on-base test centers also waive the administration fee. DANTES-funded candidates also get a free official exam guide for their subject. The College Board's eligibility list also covers certain military spouses and some Air Force civilian employees — the CLEP military page is the authority, and your education center confirms your category.",
        paras: [
          "Retests are not funded — DANTES states a three-month wait and self-payment for any repeat of a previously funded title.",
          "Where to test: National Test Centers on installations and at colleges worldwide, plus remote proctoring options listed by DANTES. Scores post to your JST (or CCAF record for AF/SF).",
        ],
        flag: "Veterans are not DANTES-funded. Veterans may be reimbursed for exam fees through VA education benefits under the national testing program (see the GI Bill entries in Benefits) — don't double-pay while serving, when the first attempt is already funded.",
        benefitsRef: true,
        links: [
          { label: "DANTES CLEP page", url: "https://www.dantes.mil/clep/" },
          { label: "College Board — CLEP military benefits", url: "http://clep.collegeboard.org/clep-military-benefits" },
        ],
      },
      {
        name: "DSST (DANTES Subject Standardized Tests)",
        kind: "Prometric · funded by DANTES",
        summary:
          "Prometric's credit-by-exam program, built originally for the military and now open to everyone — 30+ exam titles across business, technology, humanities, social science, math, and physical science, including some upper-level subjects CLEP doesn't cover.",
        who: "Same DANTES rule as CLEP — first attempt at each title funded for eligible serving members (CAC required); administration fees funded/waived at funded centers. Where to test: DANTES-funded test centers on/near installations and Prometric centers; remote options as listed on the DSST site.",
        paras: [
          "Retests are self-paid after the waiting period — two numbers apply: 30 days per Prometric's general retest rule, and three months per DANTES for a previously funded title. Your test center applies the current rule, so confirm before booking a retake.",
        ],
        flag: "Veterans are not DANTES-funded. DSST is an approved VA national testing program — GI Bill users can be reimbursed the exam fee and the center's admin fee (see Benefits).",
        benefitsRef: true,
        links: [
          { label: "DANTES DSST page", url: "https://www.dantes.mil/dsst/trk/public_post-text/" },
          { label: "DSST — military test takers", url: "https://getcollegecredit.com/test-takers/active-duty-veteran/" },
        ],
      },
      {
        name: "Before you book any exam",
        kind: "Guidance",
        summary:
          "Check your target school's credit-by-exam policy first — which titles it accepts, minimum scores, and whether the credit fits your degree or only electives. A free exam that doesn't fit your degree plan is still a wasted Saturday.",
        paras: [
          "DANTES itself recommends confirming with your Service education counselor that the exam credit meets your program requirements before you test.",
        ],
        links: [],
      },
    ],
  },
  {
    title: "Degree planning — putting the pieces together",
    entries: [
      {
        name: "How the stack works — four layers, cheapest first",
        kind: "The degree-planning order",
        summary:
          "A military degree plan normally combines four layers, in this order: 1) What you already earned — JST/CCAF credit recommendations for your training and job. 2) What you can test out of — funded CLEP/DSST first attempts aimed at the general-education and elective slots still open in your plan. 3) Tuition Assistance (TA) for the remaining courses, one or two at a time while serving — using TA first while serving preserves GI Bill entitlement. 4) GI Bill — usually most valuable saved for after service or for costs TA doesn't cover.",
        paras: [
          "Order matters: transcript credit and free exams shrink the degree before a single TA dollar is spent. TA rules, caps, and portals, and GI Bill program details, live in the Benefits section — cross-reference only, so this page doesn't go stale at a different rate.",
        ],
        benefitsRef: true,
        links: [],
      },
      {
        name: "Installation education centers — free counselors",
        kind: "Free, in person, on your installation",
        summary:
          "Every installation's education center (Army ACES centers, Navy College offices, base Education & Training offices, USMC education centers, CG education services) provides free education counseling: degree-plan reviews, transcript evaluations, TA briefings, testing, and referrals. Counselors are the people who can look at your JST and your target school and tell you what actually applies — nobody online can do that as reliably.",
        who: "Any service member (and often dependents). Go before you enroll anywhere, before you sign anything with a school, and again before separating — a pre-separation transcript and degree-plan check is one of the highest-value appointments in transition. Route: your installation education center; the branch programs below route the online side.",
        links: [],
      },
      {
        name: "Choosing a school — DoD MOU and TA Decide",
        kind: "DoD consumer protection",
        summary:
          "Schools must sign the DoD Voluntary Education Partnership Memorandum of Understanding (DoD MOU) to receive TA or GI Bill funds — that MOU is the modern consumer-protection baseline (it replaced the old SOC agreements; see the historical note below). TA Decide is DoD's official comparison tool for MOU schools: programs, costs, and accreditation in one place.",
        who: "Anyone school-shopping on TA or GI Bill money. If a school isn't in TA Decide / on the MOU list, that's your answer about using military funding there.",
        links: [{ label: "TA Decide — vpt.dodmou.com", url: "https://vpt.dodmou.com/TADECIDE/" }],
      },
      {
        name: "SOC — Servicemembers Opportunity Colleges",
        kind: "Historical note — program ended",
        summary:
          "DoD ended the SOC program on March 29, 2019. SOC's Degree Network System, its school agreements, and “SOC student agreements” no longer exist. Older web pages (including some still-live college and even College Board advising pages) still reference SOC — treat any school marketing itself on SOC membership today as out of date.",
        paras: [
          "What replaced the function: there is no single successor program. SOC's credit-mobility role is now covered by the combination of the DoD MOU baseline for all funded schools, ACE credit recommendations on the JST/CCAF, branch degree-completion structures (AU-ABC, GEM, and USNCC — see Branch programs below), and installation counselors building individual degree plans.",
        ],
        historical: true,
        links: [{ label: "SOC's own site history — gosoced.org", url: "https://gosoced.org/how-soc-enhancess-service-members/" }],
      },
    ],
  },
  {
    title: "Branch degree programs",
    entries: [
      {
        name: "CCAF degree + AU-ABC (Air Force & Space Force)",
        kind: "Air University",
        summary:
          "Enlisted Airmen/Guardians are enrolled in a CCAF Associate in Applied Science tied to their AFSC/specialty: technical training + PME + leadership + 15 semester hours of general education (written/oral communication, math, social science, humanities) completes the degree. It's a real accredited associate degree, awarded by Air University.",
        paras: [
          "AU-ABC (Air University Associate-to-Baccalaureate Cooperative): partner civilian colleges publish bachelor degree plans built on the CCAF AAS. Category I plans guarantee a CCAF graduate needs no more than 60 additional semester hours to finish the bachelor's, with a binding degree plan from the school — that guarantee is made by the participating schools. Searchable through AFVEC (the Air Force Virtual Education Center, via the AF Portal).",
        ],
        who: "Currently serving AF/SF members (including AF Reserve and ANG for AU-ABC). Finish the CCAF first — it's the feeder, and Category I guarantees only attach to the completed AAS.",
        links: [
          { label: "CCAF — airuniversity.af.edu", url: "https://www.airuniversity.af.edu/CCAF/" },
          {
            label: "AU-ABC — Air University",
            url: "https://www.airuniversity.af.edu/Barnes/CCAF/Display/Article/1819887/air-university-associate-to-baccalaureate-cooperative-au-abc/",
          },
        ],
      },
      {
        name: "GEM — General Education Mobile (Air Force & Space Force)",
        kind: "CCAF partnership",
        summary:
          "CCAF's partnership with accredited civilian schools offering the five CCAF general-education courses online, in a format built for deployed/shift-working members. You can take one course or all five, and mix GEM schools. Accessed through AFVEC; courses must be pre-approved to count toward CCAF.",
        who: "AF/SF members working on the CCAF gen-ed block — usually the last piece between a member and the AAS.",
        links: [{ label: "GEM details on the CCAF site", url: "https://www.airuniversity.af.edu/CCAF/" }],
      },
      {
        name: "USNCC — United States Naval Community College",
        kind: "Navy · Marine Corps · Coast Guard",
        summary:
          "Fully funded online associate degrees and certificates for the naval services, delivered through partner accredited colleges. Every degree embeds USNCC's 15-credit Naval Studies Certificate (naval ethics, history, leadership, geopolitics, technology). Programs are built for enlisted members around operational schedules, with tuition, fees, and materials covered by the program rather than the member's TA (verify funding mechanics for your program at application — USNCC describes students as attending with no out-of-pocket costs).",
        who: "Active-duty enlisted Sailors, Marines, and Coast Guardsmen (E-1–E-9), plus Coast Guard Reservists. Established by the Secretary of the Navy in 2019; enrollment is 5,000+ students with new program areas launched through 2025 (engineering suite; AI and data analytics; health science programs). Cohorts start on set terms, so this is a plan-ahead program, not a start-anytime one. Applications for the 2025–26 academic year were open on the USNCC site at research time.",
        paras: [
          "Marines note: USNCC is the Marine Corps' structured degree-completion route alongside TA — a Marine's USNCC associate degree is delivered by the partner college, and credits are that college's.",
        ],
        flag: "Accreditation status, stated plainly: USNCC holds Candidate for Accreditation status from the Middle States Commission on Higher Education (earned Nov 21, 2024) — candidate status, not yet full accreditation. The degrees themselves are delivered by accredited partner colleges, so weigh it with that full picture.",
        links: [{ label: "usncc.edu", url: "https://www.usncc.edu" }],
      },
      {
        name: "Marine Corps routes",
        kind: "Overview",
        summary:
          "TA + JST: the standard Marine path is TA-funded courses at MOU schools (portal/funding details in Benefits) chosen against a degree plan built from the JST at the installation education center. USNCC (above) is the structured, fully funded associate-degree option open to enlisted Marines.",
        paras: [
          "Leadership Scholar Program (LSP): HQMC's program that helps qualified Marines — especially junior enlisted approaching transition — with admission to selective four-year colleges (200+ participating institutions per MCCS), including application mentoring. It's an admissions-support program for bachelor's-bound Marines, typically used at the end of service.",
        ],
        benefitsRef: true,
        links: [{ label: "Leadership Scholar Program — MCCS", url: "https://usmc-mccs.org/services/education/leadership-scholar/" }],
      },
      {
        name: "Army — ArmyIgnitED",
        kind: "Cross-reference",
        summary:
          "The Army's education portal is where Soldiers build education goals, request TA and Credentialing Assistance, and track degree progress. Degree planning (which school, which degree) is done with ACES counselors at your installation education center; ArmyIgnitED is the system of record for the funding and the goal.",
        paras: [
          "Funding rules, caps, and the mandatory first-time-user training live in the Benefits section — cross-reference only. The portal is also reachable as armyignited.army.mil.",
        ],
        benefitsRef: true,
        links: [{ label: "ArmyIgnitED portal", url: "https://armyignited.cce.af.mil/student/public/welcome" }],
      },
      {
        name: "Navy routes",
        kind: "Overview",
        summary:
          "USNCC (above) for the structured associate degree; the Navy College Program / MyNavy Education is where Sailors manage TA and education records (funding in Benefits). Naval Postgraduate School and service colleges exist for later-career/graduate paths — use your Navy College office for current program routing rather than a static list here.",
        benefitsRef: true,
        links: [],
      },
      {
        name: "Credentials — COOL",
        kind: "Cross-reference only",
        summary:
          "Civilian certifications mapped to your MOS/rating/AFSC, and the funding to earn them, are covered in the Benefits section (branch COOL programs) and the Transition section (DoD COOL as a pre-EAS priority). Link only, so the funding facts live in one place.",
        benefitsRef: true,
        transitionRef: true,
        links: [
          {
            label: "Army COOL — credentialing assistance",
            url: "https://www.cool.osd.mil/army/costs_and_funding/index.html?credentialingassistance",
          },
        ],
      },
    ],
  },
  {
    title: "Testing & prep — free help and raising your scores",
    entries: [
      {
        name: "Peterson's via DANTES — the official free prep library",
        kind: "DANTES",
        summary:
          "DANTES provides service members free access to Peterson's online prep: the Online Academic Skills Course (OASC) — the self-study curriculum that mirrors the Army's BSEP classroom course — plus practice tests and prep for CLEP/DSST and other exams.",
        who: "Any service member. OASC is the standard self-study route before an AFCT retest (below) and the cheapest real prep for credit-by-exam. Access it before paying anyone for test prep.",
        links: [{ label: "dantes.petersons.com", url: "https://dantes.petersons.com" }],
      },
      {
        name: "March2Success",
        kind: "Army-sponsored · open to all branches",
        summary:
          "Free, Army-sponsored (open to all branches and prospective members) online prep built by Peterson's: ASVAB/AFCT-style practice, math and verbal skill-building, and college readiness courses.",
        who: "Pre-enlistment ASVAB prep, and serving members rebuilding fundamentals before a BSEP class or an AFCT attempt.",
        links: [{ label: "march2success.com", url: "https://www.march2success.com/" }],
      },
      {
        name: "Raising your line scores — AFCT retesting and skills classes",
        kind: "In-service retesting",
        summary:
          "In service, you don't retake the recruiting ASVAB — you take the AFCT (Armed Forces Classification Test), the in-service equivalent, at your installation's personnel testing office / education center. New AFCT scores recompute your line scores (e.g., Army/Marine GT), which can unlock reclassification, warrant/OCS packets, and special programs that have GT cutoffs. Retesting runs through your chain of command and education center — approval, waiting periods between attempts, and which score set counts are set by service policy, so the education center's current rules govern.",
        paras: [
          "Army — BSEP (Basic Skills Education Program): the Army's formal, free, on-duty refresher class (math and English/language arts), run by ACES education centers specifically to prepare Soldiers to raise GT scores on the AFCT. BSEP is the current name — it was formerly called FAST (Functional Academic Skills Training); older references to “FAST class” mean this same program family. Many centers also run a shorter accelerated “GT Improvement” variant for Soldiers already near their target score (names/lengths vary by installation). Enrollment typically involves a TABE diagnostic and commander approval since it's duty time. OASC (above) is its designated self-study counterpart.",
          "Why bother: GT/line-score gates sit in front of a large share of reclass, commissioning, and special-duty options; a prep class plus one retest is often the entire unlock. (Job-specific cutoffs are not stated anywhere in this app — verify the current requirement for your target program.)",
        ],
        flag: "Other services (overview level): Navy, Marine Corps, Coast Guard, and Air/Space Force members retest via the AFCT through their own education/testing offices and use OASC and March2Success for self-study; there is no identically-named BSEP equivalent published for each branch — your base education center is the routing point, and some installations run local academic-skills classes under local names. Do not assume the Army's BSEP enrollment rules apply to you.",
        links: [
          {
            label: "Army ACES — BSEP source page",
            url: "https://home.army.mil/daegu/about/garrison/directorate-human-resources/army-continuing-education-system",
          },
        ],
      },
      {
        name: "Khan Academy — free skills backup",
        kind: "General nonprofit — not a military program",
        summary:
          "Free nonprofit lessons and practice in the underlying math, reading/writing, and science skills that CLEP, DSST, OASC, and the AFCT verbal/math sections draw on.",
        flag: "Honest label: Khan Academy is a general education nonprofit — not a military program — and it has no dedicated ASVAB/AFCT course (per its own help center). Use it to rebuild a specific skill (algebra, grammar) alongside the military prep above, not as a standalone test-prep plan.",
        links: [{ label: "khanacademy.org", url: "https://www.khanacademy.org" }],
      },
      {
        name: "Tutor.com for military",
        kind: "Free live tutoring",
        summary:
          "Free live online tutoring for service members and families, referenced in current DANTES/Guard education materials.",
        links: [{ label: "military.tutor.com", url: "https://military.tutor.com" }],
      },
    ],
  },
];
