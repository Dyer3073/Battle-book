// Deep USMC entries for the fields other than 03 Infantry and 1371,
// built from the researched deep source pack at
// ~/workspace/military-app/deep/usmc-other.md (public sources, official
// first, accessed Nov 8, 2026). Content is paraphrased from that pack at
// name / fact-file level only — no tactical step-by-step and no
// procedural content. Figures the pack flags as dated, supplement-only
// or unverified are omitted or shown with that same caution, matching
// the pack. 2336, 5711 and 6531 stay overview-only, as the pack marks
// them. School lengths the pack could not source stay unstated.

import type { MosEntry } from "./data";

const NAVMC_URL =
  "https://www.marines.mil/Portals/1/Publications/NAVMC%201200.1L%20%28SECURED%29.pdf?ver=6Gs_zZnANHZU1qCTSOIk2g%3D%3D";
const MARINES_EQUIP = "https://www.marines.com/mission/equipment-and-weapons";
const INTEL_MOS =
  "http://www.intelligence.marines.mil/OCC-Field-Foreign-Language/Intel-Formal-Training/MOS-Descriptions/";
const MCCES_WIKI = "https://en.wikipedia.org/wiki/Marine_Corps_Communication_Electronics_School";
const MCCSSS_WIKI = "https://en.wikipedia.org/wiki/Camp_Gilbert_H._Johnson";
const FLW_DET =
  "https://www.marines.mil/desktopmodules/sharedlibrary/handlers/dvidscaption.ashx?PortalId=1&AssetId=video:576129&Format=webvtt";
const FGA_DET = "https://www.wtbn.marines.mil/Units/Marine-Corps-Detachment-Fort-Gregg-Adams/";
const MCES_URL =
  "https://www.mces.marines.mil/Portals/239/Docs/UIC/1169.pdf?ver=dk-TATA0UkfITrGV333LoA%3D%3D";
const ARTY_SCHOOL = "https://www.trngcmd.marines.mil/Units/Marine-School-of-Artillery/Category/14336/maradmins/";
const MARADMIN_491_17 =
  "https://www.marines.mil/News/Messages/Messages-Display/Article/1296467/retraining-guidance-on-fy18-mos-manual-change-s-for-the-communications-06xx-occ/";
const MCROB_2021 = "https://govtribe.com:443/file/government-file/usmc-mcrob-2021-mech-r2-reference-only-dot-pdf";
const MATSG22 = "https://www.beforethecorps.com/mosschoolpage/marine-aviation-training-support-group---22";

const PRIMARY = {
  sourceName: "OFFICIAL — NAVMC 1200.1L MOS Manual, Marines.mil (deep USMC source pack, accessed Nov 8, 2026)",
  sourceUrl: NAVMC_URL,
  sourceOfficial: true,
};

function deep(base: Omit<MosEntry, "level" | "sourceName" | "sourceUrl" | "sourceOfficial">): MosEntry {
  return { ...base, level: "full", ...PRIMARY };
}

const REQ_VERIFY =
  "Verify on official source: the public source pack (NAVMC 1200.1L and the official schoolhouse / field pages it cites) does not publish an ASVAB line score for this MOS, so none is shown rather than guessed. Check Marines.com or a recruiter for the current entry standard.";

export const DEEP_USMC_OTHER: MosEntry[] = [
  deep({
    id: "usmc-0111",
    code: "0111",
    title: "Administrative Specialist",
    branch: "Marine Corps",
    field: "01 — Personnel and Administration",
    summary:
      "The unit's personnel office in uniform. 0111s are the Marines who make the administrative system work — if it affects a Marine's record, pay, promotion or orders, an 0111 probably touched it.",
    duties: [
      "Process service-record entries, promotion and reduction paperwork, and dependency and emergency-data updates",
      "Route correspondence and awards; run muster and accountability reporting",
      "Answer walk-in questions at the admin shop (the IPAC / admin center model at larger bases)",
      "In the field or deployed, shrink the shop into a personnel cell: accountability, casualty reporting support, mail and emergency messages, and keeping records moving with intermittent connectivity",
    ],
    school:
      "Personnel Administration school at MCCSSS (Marine Corps Combat Service Support Schools), Camp Johnson, NC — the school location is per the MCCSSS mission; the course name and length are not stated in the sources consulted for this entry — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Garrison is the main effort: processing service-record entries, promotion and reduction paperwork, dependency and emergency-data updates, correspondence and awards routing, muster and accountability reporting, and answering walk-in questions at the admin shop. The work spikes on predictable cycles — monthly promotion / unit-diary reporting, pre-deployment record reviews, and PCS season. In the field or on deployment, the same shop shrinks into a personnel cell keeping records moving with intermittent connectivity.",
    careerPath:
      "Junior clerk → shop section leader handling a portfolio (promotions, records, legal admin) → NCOIC of a battalion S-1 → SNCO running larger admin centers or serving as an admin chief at regiment / MEF level. The field's senior and advisor billets (e.g., Equal Opportunity Advisor 0147, Substance Abuse Control Specialist 0149) are later-career specialty assignments listed in NAVMC.",
    civilian:
      "HR administration, payroll / HR support, records management, office management, government personnel services.",
    similar: ["army-42a", "navy-yn", "usmc-3432"],
    extraSections: [
      {
        heading: "Organization",
        body: "Every battalion / squadron and above has an S-1 / admin section; larger installations consolidate into installation personnel administration centers. 0111s support literally everyone in the command, which is why good admin Marines are known by name.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Marine Online (MOL) — the self-service / record system every Marine uses, and the Corps' personnel / pay data systems behind it.",
          "Day-to-day tools are records databases, scanners and the unit diary / reporting workflow — the names are public; the skill is accuracy in them.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your product is other people's careers — a one-character error can delay a promotion or a paycheck, so the culture is \"check it twice, then have a second set of eyes.\"",
          "Learn MOL cold, and become the Marine who can explain why a Marine's record says what it says.",
          "Deadlines in admin are real deadlines: missing a reporting cutoff is visible to the whole command.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson — school location (Wikipedia summary)", url: MCCSSS_WIKI },
    ],
  }),

  deep({
    id: "usmc-0231",
    code: "0231",
    title: "Intelligence Specialist",
    branch: "Marine Corps",
    field: "02 — Intelligence",
    summary:
      "The all-source generalist of Marine intelligence — the analyst who collects, records, analyzes, processes and disseminates information / intelligence for a commander (the MOS Manual's own duty framing). If a unit has one intel Marine, it's a 0231.",
    duties: [
      "Maintain the unit's intelligence picture: order-of-battle and area studies, tracking reporting",
      "Build briefs and intelligence products for training and upcoming operations",
      "Manage classified material accountability in the unit's secure spaces",
      "In the field, work a watch rhythm in the combat operations center: receive reports, update the common picture, answer the commander's priority intelligence requirements, and push products to subordinate units on deadline",
    ],
    school:
      "MAGTF Intelligence Specialist Entry Course at the Navy–Marine Corps Intelligence Training Center (NMITC), Dam Neck, VA. Marines with a Defense Language Aptitude Battery score of 100+ may also attend language training at the Defense Language Institute, Monterey, CA. Course length — verify on official source.",
    requirements:
      "Clearance eligibility and discretion are career-long requirements, not just school hurdles. " + REQ_VERIFY,
    dayInLife:
      "In garrison: maintaining the unit's intelligence picture — updating order-of-battle and area studies, tracking reporting, building briefs and products, and managing classified material accountability in the unit's secure spaces. In the field or on deployment it shifts to a watch rhythm in the combat operations center — receiving reports, updating the common picture, answering the commander's priority intelligence requirements, and pushing products out to subordinate units on deadline.",
    careerPath:
      "Analyst → product / brief lead → intelligence section chief billets. Senior 0231s feed the 0291 Intelligence Chief MOS and can branch toward imagery (0241), geographic intelligence (0261), collections management (0275) or warrant-officer intelligence paths.",
    civilian:
      "All-source analysis in government / contractor roles (clearance-dependent), research, risk analysis, briefing / report writing.",
    similar: ["army-35f", "af-1n0x1", "usmc-0241"],
    extraSections: [
      {
        heading: "Organization",
        body: "Intelligence sections (S-2 / G-2) from battalion to MEF, and the three Intelligence Battalions that support each MEF with companies for the specialty disciplines.",
      },
      {
        heading: "Systems & equipment",
        body: "Work is done on secure government networks and standard intelligence production / briefing software in accredited spaces; the publicly nameable \"equipment\" is the product line itself — intelligence summaries, area assessments, and briefing products.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Writing is the job — clear, sourced, bottom-line-up-front products beat encyclopedic ones.",
          "You will brief officers far senior to you; confidence comes from knowing what you know, what you don't, and labeling the difference.",
          "Clearance eligibility and discretion are career-long requirements, not school hurdles.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Intelligence — formal-training MOS descriptions (official)", url: INTEL_MOS },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: Operation Military Kids — Intelligence Specialist MOS 0231",
        url: "https://www.operationmilitarykids.org/MARINE-CORPS-INTELLIGENCE-SPECIALIST-MOS-0231/",
      },
    ],
  }),

  deep({
    id: "usmc-0211",
    code: "0211",
    title: "Counterintelligence/Human Source Intelligence (CI/HUMINT) Specialist",
    branch: "Marine Corps",
    field: "02 — Intelligence",
    summary:
      "The human side of intelligence: counterintelligence (protecting the force from hostile intelligence services) and human-source operations support. It is a screened lateral-move specialty — Marines come to it as proven NCOs from other fields, not from the recruiting office.",
    duties: [
      "Interviewing and debriefing, and source-contact reporting",
      "Counterintelligence investigations and awareness support for commands",
      "Liaison with other agencies",
      "Long stretches of report writing, under legal and oversight rules that are themselves a big part of the job",
    ],
    school:
      "MAGTF Counterintelligence Specialist Course at NMITC, Dam Neck, VA, preceded in the classic pipeline by a period of fleet on-the-job training. An older official Marines.mil article describes the Dam Neck course and follow-on options like DLI language training, airborne and SERE for some billets — treat those details as dated; verify the current pipeline on official source.",
    requirements:
      "Not an entry-level MOS: a lateral move for proven NCOs from other fields, earned through screening after a successful first enlistment elsewhere. Maturity, writing, discretion and a clean record are the currency. Verify current screening requirements on official source.",
    dayInLife:
      "Interviewing and debriefing, source-contact reporting, counterintelligence investigations / awareness support for commands, liaison with other agencies, and long stretches of report writing. The work is small-team and plain-clothes-adjacent in character compared with most Marine jobs, and heavily supervised by legal and oversight rules.",
    careerPath:
      "Team member → team chief → CI/HUMINT company leadership and staff billets; senior specialists become the field's chiefs and advisors to MEF-level commands.",
    civilian:
      "Investigative, security and risk-analysis roles; interview / interrogation-adjacent work in government service (credential-dependent).",
    similar: ["usmc-0231", "army-35f"],
    extraSections: [
      {
        heading: "Organization",
        body: "CI/HUMINT companies inside each MEF's Intelligence Battalion, supporting divisions, wings and MEUs.",
      },
      {
        heading: "Systems & equipment",
        body: "No signature platform — the tools are interviewing, languages, regional knowledge and finished-intelligence production systems in secure spaces.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You don't \"get\" this MOS as a new join — you earn an interview for it after a successful first enlistment elsewhere.",
          "Maturity, writing, discretion and a clean record are the currency.",
          "Everything in this field is governed by oversight rules; learning them is not bureaucracy, it is the license to operate.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Intelligence — formal-training MOS descriptions (official)", url: INTEL_MOS },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Official article (dated — flagged in the source pack): Marines wanted for counterintelligence, 29 Palms",
        url: "https://www.29palms.marines.mil/Articles/Article/498340/quality-marines-wanted-for-counterintelligence/",
      },
    ],
  }),

  deep({
    id: "usmc-0241",
    code: "0241",
    title: "Imagery Analysis Specialist",
    branch: "Marine Corps",
    field: "02 — Intelligence",
    summary:
      "A lateral-move specialty that processes and analyzes imagery from sensor platforms into intelligence — hours of disciplined screen work, comparing imagery over time and turning it into reports commanders act on.",
    duties: [
      "Process and analyze imagery from sensor platforms into intelligence products",
      "Compare imagery over time and report changes commanders act on",
      "Support intelligence battalions, imagery platoons / companies and joint imagery organizations",
    ],
    school:
      "Imagery analysis apprentice training at Goodfellow AFB, San Angelo, TX (supplement — a career summary of the manual's requirements; verify on official source). Accessed by lateral move from any MOS.",
    requirements:
      "Not an entry-level MOS: accessed by lateral move from any MOS. Verify current screening and training requirements on official source.",
    dayInLife:
      "Hours of disciplined screen work — processing and analyzing imagery, comparing it over time, and turning it into reports. Patience and visual attention to detail are the job.",
    careerPath:
      "Lateral move in from any MOS → imagery analyst in Intelligence Battalion or joint imagery billets; senior imagery specialists feed the 0291 Intelligence Chief neighborhood.",
    civilian: "Geospatial / imagery analysis in government and commercial satellite sectors.",
    similar: ["usmc-0231", "usmc-0261"],
    extraSections: [
      {
        heading: "Organization",
        body: "Intelligence battalions and imagery platoons / companies supporting the MEF; also joint imagery organizations.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You reach this MOS by lateral move, not enlistment — build a record in your first field first.",
          "Patience and visual attention to detail are the job.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Intelligence — formal-training MOS descriptions (official)", url: INTEL_MOS },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: LiveAbout — Marine Corps intelligence jobs",
        url: "https://www.liveabout.com/marine-corps-intelligence-jobs-3345291",
      },
    ],
  }),

  deep({
    id: "usmc-0261",
    code: "0261",
    title: "Geographic Intelligence Specialist",
    branch: "Marine Corps",
    field: "02 — Intelligence",
    summary:
      "The terrain-and-mapping analyst: collects, analyzes and processes geophysical data, revises military maps and builds terrain products for planners.",
    duties: [
      "Collect, analyze and process geophysical data",
      "Revise military maps and build terrain products — elevation, terrain trafficability at the product level, and map / data production for planners",
      "GIS-heavy production work in topographic platoons",
    ],
    school:
      "Entry-level PMOS trained at Dam Neck, VA (supplement — a MOS location database that mirrors the MOS Manual's school data; verify on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "GIS-heavy — elevation, terrain trafficability at the product level, and map / data production for planners, in the topographic platoons of the Intelligence Battalions and MEF headquarters elements.",
    careerPath:
      "Analyst → terrain team leader → senior geographic intelligence billets feeding 0291 Intelligence Chief.",
    civilian:
      "GIS technician / analyst, surveying and mapping support, geospatial data roles — among the strongest civilian transfers in the Corps.",
    similar: ["usmc-0241", "usmc-0231"],
    extraSections: [
      {
        heading: "Organization",
        body: "Topographic platoons in the Intelligence Battalions and MEF headquarters elements.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "The product is the map and the terrain data — planners build real decisions on what your products say.",
          "The civilian transfer is among the strongest in the Corps: GIS and geospatial data skills are directly hireable.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Intelligence — formal-training MOS descriptions (official)", url: INTEL_MOS },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MarineParents — MOS school locations database", url: "http://wab.marineparents.com/mos.asp" },
    ],
  }),

  deep({
    id: "usmc-0441",
    code: "0441",
    title: "Logistics Specialist",
    branch: "Marine Corps",
    field: "04 — Logistics",
    summary:
      "The movement-and-sustainment planner at unit level. The current MOS absorbed the old embarkation (0431) and landing support (0481) specialties, so today's 0441 owns the whole \"get the unit, its gear and its supplies from here to there — and keep it fed, fueled and accounted for on the way\" problem.",
    duties: [
      "Build load plans and movement data; maintain embarkation boxes / records",
      "Run the unit's logistics readiness reporting",
      "Coordinate with supply, motor transport and maintenance for exercises and deployments",
      "On deployment: arrival / departure operations — marshalling gear, working airfield / seaport nodes, tracking chalks and serials, and solving the daily \"what's missing and where is it\" puzzle",
    ],
    school:
      "Logistics Operations School at MCCSSS, Camp Johnson, NC (the MCCSSS mission covers the logistics field; the exact course name and length — verify on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: building load plans and movement data, maintaining embarkation boxes / records, running logistics readiness reporting, and coordinating with supply, motor transport and maintenance. On deployment the rhythm becomes arrival / departure operations — marshalling gear, working airfield / seaport nodes, tracking chalks and serials, and solving the daily missing-gear puzzle.",
    careerPath:
      "Unit embark / logistics clerk → logistics chief of a battalion S-4 → 0491 Logistics / Mobility Chief and MLG-level movement billets; senior logisticians also serve as throughput / node leaders on major exercises and deployments.",
    civilian:
      "Supply-chain and transportation coordination, distribution-center operations, freight / logistics planning, project coordination.",
    similar: ["usmc-0411", "usmc-3112", "usmc-3043"],
    extraSections: [
      {
        heading: "Organization",
        body: "Logistics sections (S-4) in every battalion / squadron, Combat Logistics Battalions / Regiments in the Marine Logistics Group, and MEU logistics elements.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "GCSS-MC (Global Combat Support System–Marine Corps) — the Corps' public, enterprise logistics / maintenance system of record.",
          "The physical kit of the trade: embark boxes, scales, tie-down and airlift-certification gear at unit level.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Nobody notices logistics until it fails — your reputation is built on inventories that are actually right and load data done before the movement brief.",
          "Learn GCSS-MC deeply, and learn how supply (30xx), motor transport (35xx) and maintenance (21xx / 28xx) think, because your job sits at their junction.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson (Wikipedia summary)", url: MCCSSS_WIKI },
    ],
  }),

  deep({
    id: "usmc-0411",
    code: "0411",
    title: "Maintenance Management Specialist",
    branch: "Marine Corps",
    field: "04 — Logistics",
    summary:
      "The readiness accountant for a unit's equipment. 0411s run the maintenance-management data that tells a commander what percentage of the unit's gear is actually usable — and what is being done about the rest.",
    duties: [
      "Track equipment status and maintenance scheduling in GCSS-MC",
      "Produce readiness reports and deadline-equipment lists",
      "Reconcile records with the maintenance shops",
      "Prepare the maintenance portion of inspections — the same data discipline in the field, under worse connectivity",
    ],
    school:
      "MCCSSS, Camp Johnson, NC (logistics-fields training mission). Course details — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Tracking equipment status and maintenance scheduling in GCSS-MC, producing readiness reports and deadline-equipment lists, reconciling records with the maintenance shops, and preparing the maintenance portion of inspections. Field time means the same data discipline under worse connectivity — the report still has to be right.",
    careerPath:
      "Maintenance-management clerk → unit maintenance chief's right hand → senior readiness billets at regiment / MLG; feeds the 0491 Logistics / Mobility Chief track alongside 0441.",
    civilian:
      "Maintenance planning / scheduling, asset management, CMMS / ERP data roles, operations reporting.",
    similar: ["usmc-0441", "usmc-3043"],
    extraSections: [
      {
        heading: "Organization",
        body: "S-4 / maintenance-management offices in battalions and squadrons; maintenance battalions and MLG headquarters for the senior billets.",
      },
      {
        heading: "Systems & equipment",
        body: "GCSS-MC maintenance modules are the job's home screen; the \"equipment\" is the fleet data of every system the unit owns.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Commanders make deployment decisions off your numbers.",
          "The experienced 0411 skill is translation — turning shop-floor reality (\"waiting on a part, cannibalizing another vehicle\") into data that is both honest and correctly coded.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson (Wikipedia summary)", url: MCCSSS_WIKI },
    ],
  }),

  deep({
    id: "usmc-0451",
    code: "0451",
    title: "Airborne and Air Delivery Specialist",
    branch: "Marine Corps",
    field: "04 — Logistics",
    summary:
      "The Corps' parachute-rigging and air-delivery specialists — they pack and inspect personnel and cargo parachutes and prepare loads for air delivery, a safety-of-life job where inspection discipline is absolute.",
    duties: [
      "Pack and inspect personnel and cargo parachutes",
      "Prepare loads for air delivery",
      "Support air delivery platoons in landing support / logistics units and parachute-rigging support to reconnaissance and other jump units",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists 0451 among its entry fields). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Rigging work in air delivery platoons: packing, inspecting and documenting parachutes and preparing air-delivery loads for the units the platoon supports — jump units, reconnaissance and logistics formations.",
    careerPath:
      "Rigger → inspection / section leadership in air delivery platoons; senior riggers run the rigging support that jump units depend on.",
    civilian: "Parachute rigging (FAA rigger pathways), air-cargo and load-planning work.",
    similar: ["usmc-0441"],
    extraSections: [
      {
        heading: "Organization",
        body: "Air Delivery platoons in landing support / logistics units, and parachute-rigging support to reconnaissance and other jump units.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Rigging is checklist culture — there is no \"close enough\" on a parachute.",
          "Inspection discipline is absolute because the job is safety-of-life.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-0471",
    code: "0471",
    title: "Personnel Retrieval and Processing Specialist",
    branch: "Marine Corps",
    field: "04 — Logistics",
    summary:
      "The mortuary-affairs specialists of the Marine Corps — they conduct the search, recovery, documentation and dignified transfer of fallen service members and their personal effects. It is solemn, exacting work done to a standard families never see but always depend on.",
    duties: [
      "Search, recovery and documentation of fallen service members and their personal effects",
      "Dignified transfer support, to a standard families depend on",
      "Serve in Personnel Retrieval and Processing units within the Marine Logistics Groups",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists 0471 among its entry fields). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Exacting, documentation-driven work: search, recovery, documentation and dignified transfer of the fallen and their personal effects, done to a standard families never see but always depend on.",
    careerPath:
      "PRP specialist → team / section leadership in Personnel Retrieval and Processing units in the Marine Logistics Groups.",
    civilian: "Mortuary / funerary services support, disaster-response and recovery operations.",
    similar: ["usmc-0441"],
    extraSections: [
      {
        heading: "Organization",
        body: "Personnel Retrieval and Processing units within the Marine Logistics Groups.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Professionalism and emotional steadiness matter more here than in almost any other junior MOS; the Corps screens and supports accordingly.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-0511",
    code: "0511",
    title: "MAGTF Planning Specialist",
    branch: "Marine Corps",
    field: "05 — Marine Air-Ground Task Force (MAGTF) Plans",
    summary:
      "The enlisted engine room of headquarters planning. 0511s maintain the force-deployment data and planning products that let a MAGTF headquarters decide what forces go where, in what order, with what support.",
    duties: [
      "Build and maintain deployment / planning databases",
      "Produce force-list and movement products for plans and exercises",
      "Support the plans section through the military decision-making cycle — quiet data hygiene for weeks, then all-hands surges when a plan or deployment order is being built",
    ],
    school:
      "Not stated in the sources consulted for this entry — a small-density field whose school details are not published in them. Verify on official source rather than assume a schoolhouse or length.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Building and maintaining deployment / planning databases, producing force-list and movement products for plans and exercises, and supporting the plans section through the military decision-making cycle. The tempo is exercise-driven: quiet data hygiene for weeks, then all-hands surges when a plan or deployment order is being built.",
    careerPath:
      "Planning data specialist → senior plans NCO supporting deployment orders for major headquarters → field leadership feeding the 0539 Civil-Military Operations Chief / 0551 Information Operations neighborhood and 0570-series advisor billets listed in NAVMC.",
    civilian:
      "Operations planning support, program / project coordination, data management, defense staff support roles.",
    similar: ["usmc-0441", "usmc-0231"],
    extraSections: [
      {
        heading: "Organization",
        body: "G-5 / G-3 plans shops at division, wing, MEF and Marine Corps-level headquarters — a headquarters MOS, not a line-company one.",
      },
      {
        heading: "Systems & equipment",
        body: "The job lives in the joint force-deployment data environment (the public name for the system family is JOPES — Joint Operation Planning and Execution Services) and standard staff production tools; the skill is disciplined data stewardship, not a platform.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You will see how the whole MAGTF fits together earlier than almost any peer — if you pay attention, a tour here is an education in how deployments are actually built.",
          "Accuracy in force data is the whole reputation: a wrong unit line in the database becomes a real-world movement problem.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-0621",
    code: "0621",
    title: "Transmission Systems Operator",
    branch: "Marine Corps",
    field: "06 — Communications",
    summary:
      "The classic field radio Marine (long known as the Field Radio Operator). 0621s install, operate and maintain the transmission systems — tactical radios, antennas and satellite terminals — that connect a battalion's headquarters to its companies and to the regiment above it.",
    duties: [
      "Run communications exercises (COMMEXes): draw radios from the comm shop, program fills and presets, raise antennas, establish nets and troubleshoot why a station can hear but not transmit",
      "Preventive maintenance on a large, accountable radio inventory",
      "In the field, live at the command post and at remote retransmission sites on a watch rotation that keeps nets up around the clock — sleep follows the radio watch, not the sun",
      "On deployment, the same work with real traffic and real consequences for a missed check-in",
    ],
    school:
      "Tactical Communications Training School (Company B) at MCCES, MCAGCC Twentynine Palms, CA — MCCES trains the 06xx operator field, and MARADMIN 491/17 confirms MCCES as the field's formal learning center. Course length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: communications exercises — drawing radios from the comm shop, programming fills and presets, raising antennas, establishing nets and troubleshooting, plus preventive maintenance on a large, accountable radio inventory. In the field: you live at the command post and at remote retransmission sites, on a watch rotation that keeps nets up around the clock. On deployment: the same, with real traffic and real consequences for a missed check-in.",
    careerPath:
      "Radio operator → retrans / team leader → transmissions chief track (0629 Transmissions Chief, then 0699 Communications Chief); senior operators also become the comm planners for battalion and regimental staffs.",
    civilian:
      "Telecommunications field technician, radio systems, public-safety communications support, network field services foundations.",
    similar: ["army-25u", "navy-it", "usmc-0631"],
    extraSections: [
      {
        heading: "Organization",
        body: "Communications sections / companies in every battalion and squadron; Communications Battalions at MEF level for the bigger systems.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "AN/PRC-117G multiband radio and AN/PRC-150 HF radio — publicly listed tactical radio families the field works with.",
          "Vehicle-mounted AN/VRC-series sets and tactical SATCOM terminals.",
          "The unglamorous essentials: antenna systems, batteries, and crypto-fill devices handled under communications-security rules. (Platform names are public fact-file material; employment detail is not covered here.)",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Every unit thinks comms is easy until it fails — you will be blamed for physics, terrain and dead batteries alike, so the pros arrive with spare batteries, a plan for the antenna, and honest reporting (\"I don't have comms, here's what I'm doing about it\").",
          "Master voice procedure and net discipline early; they are the visible part of your competence.",
        ],
      },
    ],
    sourceLinks: [
      { label: "MARADMIN 491/17 — MCCES as the 06xx formal learning center (official)", url: MARADMIN_491_17 },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCES, Twentynine Palms (Wikipedia summary)", url: MCCES_WIKI },
    ],
  }),

  deep({
    id: "usmc-0631",
    code: "0631",
    title: "Network Administrator",
    branch: "Marine Corps",
    field: "06 — Communications",
    summary:
      "The Marine who builds and runs the data network a headquarters fights from — the routers, switches, servers and services that carry everything from email to the common operational picture, in garrison and from a field command post.",
    duties: [
      "Administer the unit's network enclave: accounts and services support alongside 0671s, patching and monitoring",
      "Prepare deployable network kits",
      "In the field: expeditionary IT — set up a command-post network from cases: cabling, routing / switching configuration, satellite backhaul with the 0621s, and keep services alive on generator power",
    ],
    school:
      "MCCES, Twentynine Palms, CA (Tactical Communications Training School trains 0631 Network Administrators). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: administering the unit's network enclave — accounts and services support alongside 0671s, patching and monitoring, preparing deployable network kits. In the field the job becomes expeditionary IT: setting up a command-post network from cases — cabling, routing / switching configuration, satellite backhaul with the 0621s, and keeping services alive on generator power.",
    careerPath:
      "Network administrator → network watch / team leader → 0639 Network Chief → 0699 Communications Chief; the field also feeds warrant-officer network paths.",
    civilian:
      "Direct: network / system administration, NOC operations, IT infrastructure — among the cleanest transfers in the Corps.",
    similar: ["army-25b", "navy-it", "usmc-0671"],
    extraSections: [
      {
        heading: "Organization",
        body: "Communications battalions and the S-6 sections of major commands; MEF-level network operations for senior billets.",
      },
      {
        heading: "Systems & equipment",
        body: "Commercial-standard routing / switching and server infrastructure in ruggedized deployable kits; the publicly stated duty examples are routing / switching configuration, premise wiring and network component installation.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Certifications are your civilian passport and the Corps knows it — the Marines who thrive here chase CompTIA / Cisco-level knowledge (recruiting material for the field publicly lists Security+ / Network+ / Cisco pathways) and document everything they configure.",
          "In the field, the network is never \"the vendor's problem\" — if it doesn't work, the command post doesn't work.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCES, Twentynine Palms (Wikipedia summary)", url: MCCES_WIKI },
    ],
  }),

  deep({
    id: "usmc-0671",
    code: "0671",
    title: "Data Systems Administrator",
    branch: "Marine Corps",
    field: "06 — Communications",
    summary:
      "The services-and-accounts counterpart to the 0631's wires-and-boxes: 0671s administer the data systems and user services a command runs on — accounts, mail / messaging services, application servers and the service-desk reality of keeping hundreds of users working. It is the successor to the old Cyber Network Operator (0651) code.",
    duties: [
      "Account provisioning and permissions",
      "Server / service administration, backup and recovery discipline",
      "Tiered user support — in garrison from a network operations floor, in the field from the same deployable kits as the rest of the S-6",
    ],
    school:
      "MCCES, Twentynine Palms, CA (06xx formal learning center — MARADMIN 491/17 names 0671 among the MCCES-trained reclassified MOSs). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Account provisioning and permissions, server / service administration, backup and recovery discipline, and tiered user support — in garrison from a network operations floor, in the field from the same deployable kits as the rest of the S-6.",
    careerPath: "Systems administrator → services team leader → 0679 Data Systems Chief → 0699 Communications Chief.",
    civilian:
      "Systems administration, IT operations / service desk leadership, identity-and-access support, cloud-infrastructure foundations.",
    similar: ["usmc-0631", "navy-it"],
    extraSections: [
      {
        heading: "Organization",
        body: "S-6 sections and communications battalions; enterprise-level billets with Marine Corps enterprise IT organizations for senior Marines.",
      },
      {
        heading: "Systems & equipment",
        body: "Enterprise directory, messaging and collaboration services on government networks (service names are standard commercial-platform based; the MOS skill is administration at scale under Marine Corps policy).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Users will judge the entire S-6 by your service desk.",
          "The career skill is disciplined administration — change control, documentation, and not granting \"just this once\" exceptions to security policy.",
          "Like 0631, certifications and a home-lab mindset compound fast.",
        ],
      },
    ],
    sourceLinks: [
      { label: "MARADMIN 491/17 — MCCES-trained MOSs incl. 0671 (official)", url: MARADMIN_491_17 },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-0811",
    code: "0811",
    title: "Field Artillery Cannoneer",
    branch: "Marine Corps",
    field: "08 — Field Artillery",
    summary:
      "The gun line. Cannoneers are the crew Marines of a cannon battery — the team that emplaces, maintains, loads and fires the battalion's howitzers in support of the infantry. It is the most numerous hands-on job in the artillery field and the foundation every other artillery MOS builds on.",
    duties: [
      "Crew a howitzer section: emplace, maintain, load and fire the battery's guns",
      "Gun-drill and crew certification cycles; maintenance on the howitzers and prime movers; ammunition accountability",
      "In the field: artillery lives displaced — moving between firing positions, digging in, camouflaging, running fire missions in rotations day and night, and the constant physical work of ammunition handling",
      "On deployment: the same crew rhythm in support of maneuver units, plus base-defense and security tasks artillery batteries routinely draw",
    ],
    school:
      "Marine Corps Cannoneer Course, Marine Corps School of Artillery, Fort Sill, OK — five weeks, 25 training days (official school page). Follow-on: HIMARS Operator Course — two and a half weeks, 13 training days — awarding the 0814 designator to select cannoneers; career courses at the same schoolhouse run six weeks for section chiefs and advanced cannoneers.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: gun-drill and crew certification cycles, maintenance on the howitzers and prime movers, ammunition accountability, and battery field days. In the field: artillery lives displaced — moving between firing positions, digging in, camouflaging, running fire missions in rotations day and night, and the constant physical work of ammunition handling; a firing battery's day is measured in missions and maintenance, not hours. On deployment: the same crew rhythm in support of maneuver units, plus base-defense and security tasks.",
    careerPath:
      "Cannoneer → gunner / assistant gunner → section chief (the pivotal billet — a corporal / sergeant running a gun) → battery gunnery sergeant → 0848 Field Artillery Operations Chief / 0869 Artillery Unit Leader; official biographies show the full arc from cannoneer to sergeant major of artillery formations.",
    civilian:
      "Crew-based heavy-equipment operations, safety-critical industrial teamwork, mechanical handling, operations discipline (the honest transfer is work habits and leadership more than a direct trade).",
    similar: ["army-13b", "usmc-0861", "usmc-0844"],
    extraSections: [
      {
        heading: "Organization",
        body: "Firing batteries in artillery battalions (the 10th, 11th and 14th Marines regiments and their battalions), each battery fielding multiple gun sections; senior cannoneers run sections and batteries.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "M777A2 155mm lightweight howitzer — the Corps' primary cannon (official biographies routinely describe careers built on the M198 → M777 transition and M777A2 section-chief schools).",
          "HIMARS — the Corps' mobile rocket platform; select cannoneers qualify on it as 0814s.",
          "Ammunition vehicles and prime movers complete the section's kit.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Artillery is crew trust made physical — every drill exists because the gun is unforgiving of shortcuts, and section chiefs certify crews, not individuals.",
          "You will be cold, tired and covered in carbon; the Marines who advance are the ones whose gun is always ready and whose section covers for each other.",
          "Ears: hearing protection discipline is a career-length issue in this field, full stop.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps School of Artillery, Fort Sill (official)", url: ARTY_SCHOOL },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Official biography example — MAG-12 Sergeant Major (M777A2 / section chief path)",
        url: "https://www.1stmaw.marines.mil/Leaders/Biography/Article/3010072/marine-aircraft-group-12-sergeant-major/",
      },
    ],
  }),

  deep({
    id: "usmc-0861",
    code: "0861",
    title: "Fire Support Marine",
    branch: "Marine Corps",
    field: "08 — Field Artillery",
    summary:
      "The forward observer and fires coordinator embedded with the infantry — the Marine who watches the target area and connects the maneuver company to the artillery, mortars and other supporting arms behind it. Small numbers, high trust: an 0861 often works directly for an infantry company commander.",
    duties: [
      "Observe, coordinate and control artillery and naval surface fires in support of the supported company's scheme of maneuver",
      "Fires planning products, radio and digital-fires proficiency",
      "Spend garrison time attached to the infantry units supported rather than in the artillery battery's lines",
      "Joint-fires coordination as experience grows",
    ],
    school:
      "Fort Sill, OK — the Marine Corps School of Artillery runs Forward Observer / Fire Support section courses (entry course length — verify on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: observer training, fires planning products, radio and digital-fires proficiency, and a lot of time attached to the infantry units they support. In the field: positioned with the supported company — observing, coordinating and controlling artillery and naval surface fires in support of the scheme of maneuver. On deployment: the same role with live stakes, plus joint-fires coordination as experience grows.",
    careerPath:
      "Fire support Marine → fire support chief of a team → senior fires billets and the 0871 Joint Fires and Effects Integrator track; ANGLICO and joint assignments are the field's broadening tours.",
    civilian:
      "Radio / dispatch-style coordination, applied map / terrain and geospatial work, emergency-operations coordination, high-consequence communications roles.",
    similar: ["usmc-0811", "usmc-0341"],
    extraSections: [
      {
        heading: "Organization",
        body: "Fire support teams in artillery battalions, habitually attached to infantry battalions / companies; ANGLICO companies for the foreign / joint support mission.",
      },
      {
        heading: "Systems & equipment",
        body: "Observation optics and laser rangefinding / designation equipment at the category level, tactical radios (working daily with 0621 nets), and digital fire-support systems that pass calls for fire electronically. (System employment detail is not public-overview material and is not covered here.)",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You must be fluent in two cultures — infantry and artillery — and trusted by both.",
          "Land navigation, radio discipline and calm, precise communication under pressure are the visible skills; the invisible one is judgment about fires near friendly troops, which is why certification and supervision in this MOS are strict.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps School of Artillery, Fort Sill (official)", url: ARTY_SCHOOL },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: MarineParents — OccFld 08 summary",
        url: "http://wab.marineparents.com/occfield.asp?Code=08",
      },
    ],
  }),

  deep({
    id: "usmc-0844",
    code: "0844",
    title: "Field Artillery Fire Direction Control Marine",
    branch: "Marine Corps",
    field: "08 — Field Artillery",
    summary:
      "The battery / battalion fire direction center (FDC): the Marines who receive fire requests, compute firing data and send it to the guns. It is the artillery's nerve center — heads-down, math-and-systems work where an error is measured in where a round lands.",
    duties: [
      "Receive fire requests in the fire direction center",
      "Compute firing data and send it to the guns",
      "Work digital fire-control systems and voice nets with observers (0861) and guns (0811)",
    ],
    school:
      "Fort Sill, OK. A dated official recruiting insert lists 8 weeks for 0844 at Fort Sill — dated (2021 MCROB insert); verify on official source before relying on the figure.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Heads-down work in the battery or battalion fire direction center: receiving fire requests, computing firing data and passing it to the gun line, on digital fire-control systems and voice nets — where an error is measured in where a round lands.",
    careerPath: "Computer → FDC chief → 0848 Field Artillery Operations Chief track.",
    civilian: "Operations-center / dispatch work, applied mathematics and data-entry accuracy roles.",
    similar: ["usmc-0811", "usmc-0861"],
    extraSections: [
      {
        heading: "Organization",
        body: "FDCs at battery and battalion level, working digital fire-control systems and voice nets with observers (0861) and guns (0811).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "The FDC is the artillery's nerve center — accuracy here is measured in where rounds land, so checking discipline is the whole culture.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Dated 2021 recruiting insert via GovTribe (flagged — verify on official source)", url: MCROB_2021 },
    ],
  }),

  deep({
    id: "usmc-1141",
    code: "1141",
    title: "Electrician",
    branch: "Marine Corps",
    field: "11 — Utilities",
    summary:
      "The expeditionary power trade. 1141s install, operate, maintain and repair tactical electrical power generation and distribution — the generators, distribution and interior wiring that make a forward base livable and a command post functional.",
    duties: [
      "Install, operate, maintain and repair tactical electrical power generation and distribution",
      "Generator preventive maintenance; support base / facilities projects; electrical safety inspections; load planning for exercises",
      "In the field: arrive early and leave late — size power for a site, lay distribution, balance loads, and be on call when power fails, because everything from comms to medical runs on what you provide",
    ],
    school:
      "Basic Electrician Course, Marine Corps Engineer School, Courthouse Bay, Camp Lejeune, NC. Skill progression: Advanced Electrician Course (Cpl–SSgt) at the same schoolhouse, covering code requirements and demand / phase / voltage planning at the supervision level. A USMAP apprenticeship toward Department of Labor Journeyman Electrician certification is available to 1141s (supplement).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: generator preventive maintenance, supporting base / facilities projects, electrical safety inspections and load planning for exercises. In the field or on deployment: arriving early and leaving late — sizing power for a site, laying distribution, balancing loads, and being on call when power fails. Utilities Marines are classic enablers everyone depends on and nobody thinks about until it breaks.",
    careerPath:
      "Electrician → electrical section leader → 1169 Utilities Chief (GySgt; the chief course at MCES covers generation / distribution, refrigeration, water and hygiene systems at the supervisory level).",
    civilian:
      "Electrical trade (apprenticeship / journeyman pathways), generator and power-distribution technician, facilities maintenance.",
    similar: ["af-3e0x1", "usmc-1371", "usmc-1171"],
    extraSections: [
      {
        heading: "Organization",
        body: "Utilities sections in Marine Wing Support Squadrons, Combat Logistics Battalions and Engineer Support Battalions; also base facilities support.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Tactical generator sets and power distribution equipment.",
          "Load banks and floodlight sets (named in the manual-derived duty description).",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Electrical safety culture is the job — lockout / tagout and grounding discipline are non-negotiable, and senior utilities Marines will stop work that shortcuts them.",
          "Document your hours: the apprenticeship pathway means your Marine Corps work can literally count toward a civilian journeyman credential if you track it.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Engineer School course material (official)", url: MCES_URL },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MOS Roadmap — 1141 Electrician / USMAP apprenticeship", url: "https://mosroadmap.com/mos/1141-electrician/" },
    ],
  }),

  deep({
    id: "usmc-1171",
    code: "1171",
    title: "Water Support Technician",
    branch: "Marine Corps",
    field: "11 — Utilities",
    summary:
      "The Corps' water professionals: they survey sources, purify, store and distribute drinking water and run field hygiene (laundry / shower) support — the unglamorous capability that decides whether a deployed force stays healthy.",
    duties: [
      "Purify, store and distribute drinking water; run water points",
      "Water-quality testing and analysis",
      "Run field hygiene (laundry / shower) support",
      "Maintain purification and distribution equipment and support exercises with water points",
    ],
    school:
      "Marine Corps Engineer School, Courthouse Bay, Camp Lejeune, NC — Utilities Instruction Company trains 1171 alongside 1141 and 1169. Course length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: maintaining purification and distribution equipment, water-quality testing skills, and supporting exercises with water points. In the field or on deployment: source reconnaissance support, setting up purification and storage at water points, quality analysis, and distribution runs — plus hygiene services that have an outsized effect on morale and disease prevention.",
    careerPath:
      "Water support technician → water point / section leader → 1169 Utilities Chief track shared with the whole utilities field.",
    civilian: "Municipal water treatment / distribution operations, utilities and public works, environmental services.",
    similar: ["usmc-1141", "usmc-1371"],
    extraSections: [
      {
        heading: "Organization",
        body: "Utilities sections alongside 1141s in MWSS, CLB and Engineer Support Battalion units.",
      },
      {
        heading: "Systems & equipment",
        body: "Tactical water purification and storage / distribution systems and hygiene equipment at the family level (the schoolhouse's own course names include Basic Water Support Technician and Hygiene Equipment Operator courses).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Water is a trust product — troops drink what you certify. Testing discipline and honest reporting when a source or a batch fails are the reputation of this MOS.",
          "You will also learn plumbing-adjacent skills that transfer better than recruits expect.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "MCES Utilities Instruction Company (official DVIDS caption, Marines.mil)",
        url: "https://www.marines.mil/desktopmodules/sharedlibrary/handlers/dvidscaption.ashx?PortalId=1&AssetId=video:543713&Format=webvtt",
      },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-1345",
    code: "1345",
    title: "Engineer Equipment Operator",
    branch: "Marine Corps",
    field: "13 — Engineer, Construction, Facilities, and Equipment",
    summary:
      "The heavy-plant operators of the engineer field — the Marines on the dozers, graders, loaders and excavators that build roads, airfields, berms and positions for the MAGTF.",
    duties: [
      "Operate tactical earthmoving equipment: dozers, graders, loaders, excavators, forklifts / rough-terrain handlers and crane support",
      "Operator maintenance — you are the first mechanic your machine sees",
      "Licensing and proficiency runs; project work on base ranges and training areas",
      "In the field: construction tasking from dawn — cutting roads, preparing sites, digging, lifting and grading in support of engineer and maneuver units",
    ],
    school:
      "Engineer equipment training is split between the Marine Corps Engineer School, Camp Lejeune and the Marine Corps Detachment, Fort Leonard Wood, MO (engineer equipment instruction is a named Fort Leonard Wood detachment mission; older school-location tables put 1345 at Fort Leonard Wood — verify the current course location on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: operator maintenance, licensing and proficiency runs, and project work on base ranges and training areas. In the field or on deployment: construction tasking from dawn — cutting roads, preparing sites, digging, lifting and grading in support of engineer and maneuver units, frequently as the visible center of a project site.",
    careerPath:
      "Operator → licensed on additional equipment families → project / section leader → 1349 Engineer Equipment Chief.",
    civilian:
      "Direct — heavy equipment operator is a civilian construction trade; documented hours and equipment families matter for hiring.",
    similar: ["navy-eo", "usmc-1371", "usmc-1341"],
    extraSections: [
      {
        heading: "Organization",
        body: "Engineer Support Battalions, MWSS engineer companies, and Combat Engineer Battalion equipment platoons.",
      },
      {
        heading: "Systems & equipment",
        body: "Tactical earthmoving families at the public name level: bulldozers, motor graders, hydraulic excavators, wheel loaders, forklifts / rough-terrain handlers and crane support.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Seat time is earned by trust: the operators who get the good tasking are the ones whose daily checks are real and whose machines come back clean and serviced.",
          "Ground-guide and spotter discipline around heavy plant is a life-safety habit, not a formality.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Leonard Wood (official DVIDS caption)", url: FLW_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-1316",
    code: "1316",
    title: "Metal Worker",
    branch: "Marine Corps",
    field: "13 — Engineer, Construction, Facilities, and Equipment",
    summary:
      "The welder-fabricators. 1316s repair equipment, fabricate brackets, mounts and one-off parts, and do the metalwork that keeps engineer and supported units operating when the supply system doesn't have the part.",
    duties: [
      "Cutting, welding and machining-adjacent fabrication jobs queued from supported units",
      "Repair equipment and fabricate brackets, mounts and one-off parts",
      "In the field: a containerized shop doing battle-damage and wear-and-tear repair as far forward as the unit can support it",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists Welders (1316) among its entry MOSs). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Shop-based in garrison — cutting, welding and machining-adjacent fabrication jobs queued from supported units; in the field, a containerized shop doing battle-damage and wear-and-tear repair as far forward as the unit can support it.",
    careerPath:
      "Metal worker → shop / fabrication leader → senior maintenance billets alongside the 21xx ordnance-maintenance community (the fields share the Gregg-Adams schoolhouse and much shop culture).",
    civilian: "Welding / fabrication trades, industrial maintenance, machine-shop work.",
    similar: ["usmc-1371", "usmc-2161"],
    extraSections: [
      {
        heading: "Organization",
        body: "Engineer maintenance and general support maintenance units; the MOS is one of the entry fields trained at Fort Gregg-Adams.",
      },
      {
        heading: "Systems & equipment",
        body: "Welding sets (arc / MIG / TIG at the trade level), cutting and grinding equipment, and shop fabrication machinery — trade-standard tools, publicly unremarkable and exactly what civilian shops use.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your welds are your signature — literally inspected and remembered.",
          "Build a portfolio mindset and chase certifications; welding is one of the few MOS skills a civilian employer can test in ten minutes.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-1391",
    code: "1391",
    title: "Bulk Fuel Specialist",
    branch: "Marine Corps",
    field: "13 — Engineer, Construction, Facilities, and Equipment",
    summary:
      "The fuel farm Marines: receiving, storing, testing and issuing the bulk fuel that aircraft, vehicles and generators burn — including running tactical fuel points for deployed forces.",
    duties: [
      "Fuel storage operations, quality checks, issue / receipt accounting and environmental compliance at base fuel facilities and in support units",
      "In the field: establish expeditionary fuel points and storage, run refueler operations, and do the relentless sampling / testing that keeps contaminated fuel out of aircraft and engines",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists Bulk Fuel Specialist (1391)). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: fuel storage operations, quality checks, issue / receipt accounting and environmental compliance at base fuel facilities and in support units. In the field or on deployment: establishing expeditionary fuel points and storage, refueler operations, and the relentless sampling / testing that keeps contaminated fuel out of aircraft and engines.",
    careerPath:
      "Bulk fuel specialist → fuel point / farm NCOIC → senior fuels billets; the 1392 Petroleum Quality Assurance specialty is the field's technical branch.",
    civilian: "Petroleum terminal / distribution operations, fuel quality testing, hazmat-aware logistics.",
    similar: ["army-92f", "usmc-1345"],
    extraSections: [
      {
        heading: "Organization",
        body: "Bulk fuel companies / platoons in logistics units, MWSS fuel sections, and air station fuels divisions.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Tactical refueler vehicles — the MK970 semitrailer refueler family is the public name associated with Marine refueling.",
          "Collapsible storage and expeditionary fuel-system families at the name level, plus laboratory quality-testing kit.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Fuel mistakes are expensive and occasionally catastrophic — sampling discipline, grounding / bonding habits and paperwork honesty are the job.",
          "Environmental rules are not paperwork garnish; a spill follows a unit's reputation for years.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-1341",
    code: "1341",
    title: "Engineer Equipment Mechanic",
    branch: "Marine Corps",
    field: "13 — Engineer, Construction, Facilities, and Equipment",
    summary:
      "The mechanics who keep the 1345s' plant running — engine, hydraulic and electrical diagnosis and repair on construction equipment, from daily services to component rebuild support in maintenance platoons.",
    duties: [
      "Diagnose and repair construction equipment: engine, hydraulic and electrical systems",
      "Daily services through component rebuild support in maintenance platoons",
    ],
    school:
      "Engineer-equipment maintenance instruction is a named mission of both the Marine Corps Engineer School and the Fort Leonard Wood detachment family — verify the current course location and length on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Shop and maintenance-platoon work keeping the engineer fleet running: services, diagnosis and repair on the dozers, graders and loaders the operators depend on.",
    careerPath: "Mechanic → shop leader → 1349 Engineer Equipment Chief track, with the operators.",
    civilian: "Heavy-equipment / diesel mechanic — a direct trade.",
    similar: ["navy-cm", "army-91b", "usmc-1345"],
    extraSections: [
      {
        heading: "Organization",
        body: "Maintenance platoons of engineer units, alongside the 1345 operators whose equipment they keep running.",
      },
      {
        heading: "What new Marines should know",
        bullets: ["Diagnosis beats parts replacement — the same rule the whole maintenance community runs on."],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Leonard Wood (official DVIDS caption)", url: FLW_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-1721",
    code: "1721",
    title: "Defensive Cyberspace Warfare Operator",
    branch: "Marine Corps",
    field: "17 — Information Maneuver (Cyberspace & Influence)",
    summary:
      "The network-defense operator of the Corps' newest combat field (the field was re-designated Information Maneuver in 2022 and consolidated cyberspace and influence specialties). 1721s defend friendly networks: monitoring, hunting for hostile activity, and responding to incidents so commanders keep freedom of action in cyberspace. Note: recent field restructuring reporting suggests the 1711 / 1721 offensive / defensive split has been consolidated under the 1721 operator MOS — verify the current structure in NAVMC before relying on either code.",
    duties: [
      "Defensive operations floor work: monitoring alerts, triaging incidents, hardening and compliance work alongside the 06xx network community",
      "Constant training on evolving tooling",
      "In the field: defensive cyber teams support MAGTF command posts and critical infrastructure, often as small detachments attached to headquarters",
    ],
    school:
      "The field's foundational school is publicly reported as the Joint Cyber Analysis Course (JCAC) — 27 weeks at Corry Station, Pensacola, FL, with follow-on training at Fort Eisenhower, GA (supplement — a secondary summary of Deputy Commandant for Information material; verify on official source). Entry includes a Cyber Test aptitude screen (same supplement).",
    requirements:
      "Includes a Cyber Test aptitude screen at entry (supplement-reported — verify on official source). Clearance eligibility is a career-long requirement. " +
      REQ_VERIFY,
    dayInLife:
      "In garrison: defensive operations floor work — monitoring alerts, triaging incidents, hardening and compliance work alongside the 06xx network community, and constant training on evolving tooling. In the field or on deployment: defensive cyber teams support MAGTF command posts and critical infrastructure, often as small detachments attached to headquarters.",
    careerPath:
      "Operator → defensive team leader → 1795 Influence Chief / 1799 Cyberspace Warfare Chief neighborhood; warrant-officer cyberspace paths (1710 / 1720 officers) are the technical-leader branch.",
    civilian:
      "Among the strongest in the military: SOC analyst, incident response, network defense — with certifications and clearance, directly competitive for civilian cyber roles.",
    similar: ["usmc-0671", "usmc-0631"],
    extraSections: [
      {
        heading: "Organization",
        body: "Marine Corps Cyberspace Operations Group and its battalions, defensive cyberspace companies, and MEF support teams.",
      },
      {
        heading: "Systems & equipment",
        body: "Defensive tooling is deliberately not platform-advertised at the public level; the public framing is the mission set — identify, isolate and neutralize adversary activity in friendly cyberspace.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "This is one of the longest pipelines in the Corps and the learning never stops — the Marines who thrive treat certifications and self-study as part of the job, not extra credit.",
          "Your clearance and your conduct online are part of your professional equipment.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement (flagged): LegalClarity — 1700 field cyber roles and career path",
        url: "https://legalclarity.org/1700-military-mos-field-cyber-roles-and-career-path/",
      },
      { label: "Supplement: MarineParents — OccFld 17 summary", url: "https://wab.marineparents.com/occfield.asp?Code=17" },
    ],
  }),

  deep({
    id: "usmc-1834",
    code: "1834",
    title: "Amphibious Combat Vehicle (ACV) Crewman",
    branch: "Marine Corps",
    field: "18 — Assault Amphibious Vehicle",
    summary:
      "Crew of the ACV — the wheeled amphibious vehicle that succeeded the tracked AAV (1833) for ship-to-shore and ashore movement of infantry. The crewman drives, maintains and operates the vehicle; the vehicle commander is the senior crewman and the job's center of gravity.",
    duties: [
      "Drive, maintain and operate the Amphibious Combat Vehicle as crewman, then vehicle commander",
      "Vehicle maintenance — amphibious vehicles are maintenance-heavy: water, salt and sand attack everything",
      "Swim / launch-recovery training cycles and crew certification",
      "Embarked operations with MEUs: launching from amphibious shipping, movement ashore, and supporting infantry inland",
    ],
    school:
      "Assault Amphibian school pipeline at Camp Pendleton, CA (the assault amphibian community's home; verify the current course name and length on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: vehicle maintenance, swim / launch-recovery training cycles, and crew certification. In the field: embarked operations with MEUs — launching from amphibious shipping, movement ashore, and supporting infantry inland; the calendar is tied to MEU workups and deployment cycles.",
    careerPath:
      "Crewman → driver → vehicle commander → section / platoon leadership → 1868 Assault Amphibious Master Gunner / 1869 Senior Armor NCO.",
    civilian: "Heavy-vehicle operation, vehicle maintenance fundamentals, maritime / crew operations experience.",
    similar: ["usmc-0313", "army-19k"],
    extraSections: [
      {
        heading: "Organization",
        body: "Assault Amphibian battalions in the divisions, organized to attach companies / platoons to infantry regiments and MEUs.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Amphibious Combat Vehicle (ACV) — designed for ship-to-shore operations carrying up to 13 Marines plus crew (Marines.com equipment page, official).",
          "Legacy AAVP7A1 vehicles (1833) remain part of the community's recent history during the transition.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Water operations set this field's safety culture — swim qualification, vehicle egress discipline and maintenance honesty are life-safety items, and the community's seniors enforce them personally.",
          "Expect to know your vehicle mechanically far beyond \"operator level.\"",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-2111",
    code: "2111",
    title: "Small Arms Repairer/Technician",
    branch: "Marine Corps",
    field: "21 — Ground Ordnance Maintenance",
    summary:
      "The armory technician: inspection, maintenance and repair of the unit's small arms — the rifles, pistols and crew-served small arms an entire battalion depends on — plus the shop records and gauge discipline that prove a weapon is safe and serviceable.",
    duties: [
      "Inspect, maintain and repair the unit's small arms; run the shop's records and gauge discipline",
      "Scheduled inspections, a repair queue, parts requisition, and support to ranges and pre-deployment weapon prep",
      "Forward repair support in the field, with the same accountability under expeditionary conditions",
      "By grade: juniors perform basic inspection / repair under supervision; corporals through gunnery sergeants train, supervise and run the shop program",
    ],
    school:
      "Small Arms Repair Course at Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists 2111; a supplement career summary reports about 61 training days — supplement figure, verify on official source). Career: Ground Ordnance Intermediate Level Supervisor Course by the NCO ranks.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Armory / shop rhythm in garrison — scheduled inspections, repair queue, parts requisition, supporting ranges and pre-deployment weapon prep; the shop's credibility is measured at issue / turn-in windows. In the field or on deployment: forward repair support and the same accountability under expeditionary conditions.",
    careerPath:
      "Repairer → shop supervisor → senior ordnance billets feeding 2149 Ordnance Vehicle Maintenance Chief / 2181 Senior Ground Ordnance Weapons Chief; the precision-weapons specialty (2112, NMOS) is the field's craftsman branch.",
    civilian: "Gunsmithing / armory work, precision mechanical repair, quality inspection, parts / inventory control.",
    similar: ["navy-gm", "usmc-2161"],
    extraSections: [
      {
        heading: "Organization",
        body: "Ordnance maintenance shops in maintenance battalions and armories organic to supported units across the FMF.",
      },
      {
        heading: "Systems & equipment",
        body: "The unit small-arms fleet at the category level — service rifles / carbines, pistols, and infantry machine guns at the name level found in public fact files (M27, M4, M18, M240B families) — plus gauges, tooling and technical manuals. (Repair procedures are schoolhouse material and are not covered here.)",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Weapons accountability is absolute and audited — your records are legal documents.",
          "Supported units judge you on turnaround honesty. A shop that says \"two weeks\" and delivers in two weeks is trusted more than one that promises tomorrow.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: manual-derived duty summary — Field 21, Ground Ordnance Maintenance",
        url: "https://militaryyearbookproject.org/references/military-occupation-codes/usmc/field-21-ground-ordnance-maintenance",
      },
      {
        label: "Supplement: LiveAbout — Small Arms Repairer (61 training days figure, verify)",
        url: "https://www.liveabout.com/marines-small-arms-repairer-3345393",
      },
    ],
  }),

  deep({
    id: "usmc-2161",
    code: "2161",
    title: "Machinist",
    branch: "Marine Corps",
    field: "21 — Ground Ordnance Maintenance",
    summary:
      "The Corps' machine-shop craftsmen: manufacturing and repairing precision parts on lathes, mills and related machine tools so maintenance shops can fix equipment the supply system can't — the \"make the part\" capability. (Naming note: the Fort Gregg-Adams detachment's current page lists 2161 among its entry MOSs as \"Metal Worker (2161),\" while NAVMC 1200.1L titles 2161 Machinist — verify the current title usage with the schoolhouse; this library keeps the NAVMC title.)",
    duties: [
      "Manufacture and repair precision parts on lathes, mills and related machine tools",
      "Blueprint-and-measurement work: take a broken or unavailable component, measure it, and produce a replacement to tolerance",
      "Support ordnance and engineer maintenance customers; maintain the shop's own precision equipment and calibration discipline",
    ],
    school: "Marine Detachment, Fort Gregg-Adams, VA (official). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Blueprint-and-measurement work: taking a broken or unavailable component, measuring it, and producing a replacement to tolerance; supporting ordnance and engineer maintenance customers; maintaining the shop's own precision equipment and calibration discipline.",
    careerPath: "Machinist → shop leader → senior ground ordnance maintenance billets (2149 / 2181 neighborhood).",
    civilian: "Machining / CNC trades, precision manufacturing, industrial maintenance.",
    similar: ["usmc-1316", "usmc-2111"],
    extraSections: [
      {
        heading: "Organization",
        body: "Intermediate maintenance shops in maintenance battalions and depot-support activities.",
      },
      {
        heading: "Systems & equipment",
        body: "Engine lathes, vertical mills, drill / surface equipment and precision measurement tools (micrometers, bore gauges) — standard industrial machine-shop families.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Precision is a habit, not a talent — measurement discipline and patience under a deadline are the whole trade.",
          "This is also one of the most portfolio-friendly MOSs in the Corps: civilian shops hire machinists on demonstrated skill.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-2336",
    code: "2336",
    title: "Explosive Ordnance Disposal (EOD) Technician",
    branch: "Marine Corps",
    field: "23 — Ammunition and Explosive Ordnance Disposal",
    summary:
      "The Corps' explosive-hazard specialists. The official mission, from the FY27 lateral-move MARADMIN: EOD supports the MAGTF, the supporting establishment, homeland defense, special operations forces and other government agencies by detecting, locating, accessing, diagnosing, rendering safe, neutralizing, recovering, exploiting and disposing of hazards from unexploded ordnance, improvised explosive devices and weapons of mass destruction that threaten operations, installations, personnel or materiel. Overview only — this entry carries no procedural content. It is a lateral-move-only MOS for corporals and sergeants from any field — a second-career specialty, not an entry job.",
    duties: [
      "Response duty: EOD teams hold real-world response responsibilities for ordnance found on and around installations",
      "Constant continuation training and annual screening — all EOD technicians are re-screened annually",
      "Small teams attached across the MAGTF on deployment, including specialized paths like Littoral Explosive Ordnance Neutralization (LEON) screening and EOD support to Marine Raider battalions for top performers",
    ],
    school:
      "On acceptance: 30–90 days of on-the-job training at the nearest Marine EOD unit, then approximately nine months of PMOS school at the Naval School Explosive Ordnance Disposal (NAVSCOLEOD), Eglin AFB, FL — the DoD's joint EOD school (its curriculum is publicly described as a 206-day program across eight divisions) — via the Marine Corps Detachment there (official Manpower page and MARADMIN 141/26).",
    requirements:
      "Lateral move only: volunteering corporals and sergeants from any field, a Tier 5 investigation, and enough obligated service for 36 months after graduation (MARADMIN 141/26). You cannot enlist into this job — verify the current solicitation on official source.",
    dayInLife:
      "In garrison: response duty — real-world response responsibilities for ordnance found on and around installations, alongside constant continuation training and annual screening. In the field or on deployment: small teams attached across the MAGTF, including specialized paths like LEON screening and support to Marine Raider battalions as Special Operations Capability Specialists for top performers.",
    careerPath:
      "Team member → team leader → EOD chief billets; screened paths to LEON and MARSOC support; senior technicians become the field's company leadership and program staff.",
    civilian:
      "Public-safety bomb squads (law-enforcement, credential-dependent), UXO / range-clearance industry, hazmat response support.",
    similar: ["navy-eod", "usmc-2311", "usmc-5711"],
    extraSections: [
      {
        heading: "Organization",
        body: "EOD companies / platoons in the Marine Logistics Groups, with support to MEUs, air stations and special operations.",
      },
      {
        heading: "Systems & equipment",
        body: "Publicly displayed categories only: robotic platforms, protective ensembles and diagnostic equipment families shown in official public-affairs imagery. No employment detail is included here, by design.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You cannot enlist into this job — you build toward it: excel in your first MOS, keep a clean record, and apply as a corporal / sergeant.",
          "The community is small, the screening is real, and the annual re-screening means qualification is something you keep earning.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Manpower — EOD lateral move opportunities (official)",
        url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Enlisted-Assignments/Stay-Marine/Lateral-Move-Opportunities/Explosive-Ordnance-Disposal-EOD/",
      },
      {
        label: "MARADMIN 141/26 — lateral move into EOD solicitation (official)",
        url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4446686/solicitation-of-qualified-marines-to-lateral-move-into-explosive-ordnance-dispo/",
      },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-2311",
    code: "2311",
    title: "Ammunition Technician",
    branch: "Marine Corps",
    field: "23 — Ammunition and Explosive Ordnance Disposal",
    summary:
      "The accountability backbone of everything that explodes, at the administrative level: receiving, storing, accounting for and issuing ammunition and explosives, and running ammunition supply points (ASPs) under strict safety and lot-tracking rules.",
    duties: [
      "ASP and magazine operations: inventory cycles, issue / turn-in windows for training, compatibility and safety compliance",
      "Maintain the documentation chain that follows every lot",
      "In the field: field ASP operations supporting firing units — the same accountability from a dirt lot instead of a magazine row",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists Ammunition Technician (2311)). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: ASP and magazine operations — inventory cycles, issue / turn-in windows for training, compatibility and safety compliance, and the documentation chain that follows every lot. In the field or on deployment: field ASP operations supporting firing units, where the same accountability runs from a dirt lot instead of a magazine row.",
    careerPath:
      "Ammunition technician → ASP NCOIC → senior ammunition billets; warrant-officer Ammunition Officer (2340) is the field's technical-leader path.",
    civilian: "Inventory / warehouse operations, hazmat storage compliance, logistics documentation.",
    similar: ["army-89b", "usmc-2336"],
    extraSections: [
      {
        heading: "Organization",
        body: "Ammunition companies / platoons in logistics units and installation ASPs.",
      },
      {
        heading: "Systems & equipment",
        body: "Ammunition accounting / inventory systems and standard materials-handling equipment; the \"system\" that matters most is the lot-level record — an ammo tech's product is a perfect count.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "There is no rounding in ammunition accounting. Discrepancies stop operations and start investigations, so the habit of counting twice and documenting once — correctly — is the entire professional reputation of this MOS.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-2641",
    code: "2641",
    title: "Cryptologic Linguist Operator Analyst",
    branch: "Marine Corps",
    field: "26 — Signals Intelligence / Ground Electronic Warfare",
    summary:
      "A working linguist inside signals intelligence: monitoring, transcribing and translating foreign-language communications and turning them into intelligence reporting. The language is not a bonus skill — it is the MOS, maintained to a tested standard for a whole career.",
    duties: [
      "Monitor, transcribe and translate foreign-language communications into intelligence reporting",
      "Language sustainment — daily, tested annually (Defense Language Proficiency Test standard)",
      "Analysis and reporting shifts in secure facilities",
      "In the field: linguist teams support radio battalions and MEUs, fusing language, regional knowledge and reporting under time pressure",
    ],
    school:
      "Defense Language Institute Foreign Language Center, Presidio of Monterey, CA for the language (DLI is the DoD's language school), followed by cryptologic training in the joint pipeline (Goodfellow AFB hosts joint signals-intelligence schools for several 26xx specialties — supplement; verify the current 2641 course sequence on official source). Language course length varies by language — no single figure is published here.",
    requirements:
      "Language aptitude and tested proficiency are the MOS's core qualification, and clearance eligibility is career-long. " + REQ_VERIFY,
    dayInLife:
      "In garrison: language sustainment (daily, tested annually), analysis and reporting shifts in secure facilities, and proficiency training that never really ends. In the field or on deployment: linguist teams support radio battalions and MEUs, where the work fuses language, regional knowledge and reporting under time pressure.",
    careerPath:
      "Linguist operator → language / team leader → senior linguist and 2691 Signals Intelligence / Electronic Warfare Chief track; language proficiency pay and reenlistment incentives publicly track with tested proficiency.",
    civilian: "Translation / interpretation, language analysis, government and contractor intelligence language services.",
    similar: ["usmc-2621", "usmc-0231"],
    extraSections: [
      {
        heading: "Organization",
        body: "Radio Battalions (one per MEF) and their linguist platoons / companies; joint intelligence centers for senior billets.",
      },
      {
        heading: "Systems & equipment",
        body: "Collection / processing workstations in accredited spaces at the category level; the publicly nameable core kit is the Defense Language Proficiency Test standard itself — your tested language level is your qualification.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Language decay is real and the Corps tests it — the linguists who thrive build daily habits (media, reading, conversation) outside the classroom.",
          "Your clearance and your language are both perishable credentials; treat both that way.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Intelligence — formal-training MOS descriptions (official)", url: INTEL_MOS },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MATSG-22 / Goodfellow SIGINT school summary", url: MATSG22 },
    ],
  }),

  deep({
    id: "usmc-2621",
    code: "2621",
    title: "Communications/Electronic Warfare Operator",
    branch: "Marine Corps",
    field: "26 — Signals Intelligence / Ground Electronic Warfare",
    summary:
      "The entry operator of the SIGINT / EW field — operating collection and electronic-warfare support equipment for radio battalion teams, the feeder specialty for the analyst and linguist tracks.",
    duties: [
      "Operate collection and electronic-warfare support equipment for radio battalion teams",
      "Feed the analyst and linguist tracks of the 26 field",
    ],
    school:
      "Joint SIGINT schoolhouse training at Goodfellow AFB, TX is listed for 2621 in a supplement school summary — verify on official source.",
    requirements:
      "This field runs on clearance eligibility and technical patience. " + REQ_VERIFY,
    dayInLife:
      "Team-based operator work in the Radio Battalions: running collection and electronic-warfare support equipment on shift and exercise rhythms, feeding the analysts and linguists who turn the take into reporting.",
    careerPath:
      "Operator → analyst-track specialties within the 26 field → 2691 Signals Intelligence / Electronic Warfare Chief neighborhood.",
    civilian:
      "Intelligence support and EW-adjacent technical roles (clearance-dependent) — mirrors 2641 minus the language.",
    similar: ["usmc-2641", "usmc-2847"],
    extraSections: [
      {
        heading: "Organization",
        body: "Radio Battalions — one per MEF — and their collection teams.",
      },
      {
        heading: "What new Marines should know",
        bullets: ["This field runs on clearance eligibility and technical patience."],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MATSG-22 / Goodfellow SIGINT school summary", url: MATSG22 },
    ],
  }),

  deep({
    id: "usmc-2847",
    code: "2847",
    title: "Ground Electronics Telecommunications and Information Systems Maintainer",
    branch: "Marine Corps",
    field: "28 — Ground Electronics Maintenance",
    summary:
      "Bench-and-field repair for the ground electronics the comms field operates: the 28xx maintainers diagnose failed radios, telecom and information systems down to the faulty assembly and return them to service — the \"depot in a shop van\" behind every battalion's communications.",
    duties: [
      "Electronics maintenance shop work: intake, troubleshooting with test equipment, repair, calibration coordination and return-to-stock discipline, plus maintenance records",
      "Forward repair teams in the field, keeping command-post electronics alive — technician work blended with improvisation inside the manuals",
    ],
    school:
      "Communication-Electronics Maintenance School (Company A / CEMS) at MCCES, Twentynine Palms, CA — CEMS is responsible for training the 2800 MOS field. Length — verify on official source (electronics pipelines are among the longer enlisted schools).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: electronics maintenance shop work — intake, troubleshooting with test equipment, repair, calibration coordination and return-to-stock discipline, plus maintenance records. In the field: forward repair teams keeping command-post electronics alive, where the job blends technician work with improvisation inside the manuals.",
    careerPath:
      "Maintainer → shop supervisor / test-equipment specialist → 2862 Ground Electronics Systems Maintenance Technician → 2891 Ground Electronics Systems Maintenance Chief; calibration / metrology specialties (2871 / 2874) are the field's precision branch, trained at Keesler AFB per a dated official insert (dated — verify).",
    civilian:
      "Electronics technician, telecommunications repair, field-service engineering support, test / calibration roles.",
    similar: ["usmc-0621", "usmc-5939"],
    extraSections: [
      {
        heading: "Organization",
        body: "Electronics maintenance companies / platoons in maintenance battalions and communications units; the field trains alongside the operators it supports.",
      },
      {
        heading: "Systems & equipment",
        body: "Standard electronic test families — oscilloscopes, spectrum / signal analyzers, multimeters and automated test sets at the category level; the maintained end-items are the tactical radio / telecom systems of the 06xx world.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Troubleshooting is a method, not a gift: signal-flow thinking and honest fault isolation beat parts-swapping, and the fleet notices which shop actually fixes things.",
          "Your soldering, schematic reading and documentation are civilian-market skills from day one.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Supplement: MCCES / CEMS — 28xx training responsibility (Wikipedia summary)", url: MCCES_WIKI },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-3043",
    code: "3043",
    title: "Supply Administration and Operations Specialist",
    branch: "Marine Corps",
    field: "30 — Supply Chain Material Management",
    summary:
      "The unit supply system's operator-accountant: requisitioning, receiving, accounting for and issuing everything a unit owns, and maintaining the property records the commander signs for. If a unit \"has it on the books,\" a 3043 put it there.",
    duties: [
      "GCSS-MC transactions all day — requisitions, receipts, issues, inventory adjustments",
      "Warehouse operations, cyclic inventories and fiscal-year closeout surges",
      "In the field: the same accountability from a supply lot or warehouse tent — deploying units live or die on whether their supply records match what's physically on the truck",
    ],
    school:
      "Ground Supply School at MCCSSS, Camp Johnson, NC — official biographies routinely record Marines attending MOS school at Camp Johnson for 3043 and returning for intermediate and Supply Chiefs courses. A supplement summarizing Ground Supply School lists short basic courses (Supply Chain Management Basic Course 5 weeks; Enlisted Warehousing Basic Course 3 weeks) — supplement figures, verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: GCSS-MC transactions all day — requisitions, receipts, issues, inventory adjustments — plus warehouse operations, cyclic inventories and fiscal-year closeout surges. In the field or on deployment: the same accountability from a supply lot or warehouse tent.",
    careerPath:
      "Supply clerk → supply admin chief of a battalion → Supply Battalion and MLG senior billets; the field's chief track runs through the Supply Chiefs course sequence at Camp Johnson.",
    civilian:
      "Supply chain / inventory management, purchasing support, warehouse systems, ERP record-keeping.",
    similar: ["army-92y", "navy-ls", "usmc-6672"],
    extraSections: [
      {
        heading: "Organization",
        body: "S-4 / supply sections in every unit; Supply Battalions in the MLG for wholesale-level work; installation supply activities.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "GCSS-MC is the job's home system (the public enterprise logistics system).",
          "Physical plant is warehouse standard — forklifts, racking, barcode / RFID scanning at the category level.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "The commander's property book is a legal responsibility, and you are its keeper — inventories are not \"counts,\" they are audits.",
          "Learn GCSS-MC reporting deeply; the supply Marine who can explain why a requisition is stuck is worth more than one who can only say that it is.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson (Wikipedia summary)", url: MCCSSS_WIKI },
      {
        label: "Official biography pattern — Camp Johnson 3043 schooling (3rd MAW Sergeant Major)",
        url: "https://www.3rdmaw.marines.mil/Leaders/Biography/Article/2143013/sergeant-major-marvin-b-thomas/",
      },
    ],
  }),

  deep({
    id: "usmc-3112",
    code: "3112",
    title: "Distribution Management Specialist",
    branch: "Marine Corps",
    field: "31 — Distribution Management",
    summary:
      "The movement-control specialist: arranging and documenting the movement of cargo and passengers through military and commercial transportation — the connective tissue between \"the unit needs to go\" and an actual aircraft, ship or truck showing up.",
    duties: [
      "Book and manifest cargo / passengers; prepare shipping documentation and customs / HAZMAT paperwork for freight",
      "Work airfield and seaport movement nodes during deployments",
      "Track shipments in transit — peak rhythm is deployment-driven; steady state is a documentation and coordination desk",
    ],
    school:
      "MCCSSS, Camp Johnson, NC — older school-location tables list Traffic / Distribution Management (3112) at Camp Johnson under MCCSSS, whose mission includes logistics fields (verify the current course name and length on official source). A supplement summarizing MCCSSS courses lists a Distribution Management Basic Course of 7 weeks — supplement figure, verify.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Booking and manifesting cargo / passengers, preparing shipping documentation and customs / HAZMAT paperwork for freight, working airfield and seaport movement nodes during deployments, and tracking shipments in transit. Peak rhythm is deployment-driven; steady state is a documentation and coordination desk.",
    careerPath:
      "Distribution specialist → movement NCOIC of a Distribution Management Office → MEF-level distribution billets; the specialty pairs naturally with 0441 logistics for senior movement leadership (0491).",
    civilian:
      "Freight / logistics coordination, transportation management, shipping / receiving leadership, distribution operations.",
    similar: ["usmc-0441", "usmc-3043"],
    extraSections: [
      {
        heading: "Organization",
        body: "Distribution Management Offices at installations and MLG units; movement control teams supporting MEF deployments.",
      },
      {
        heading: "Systems & equipment",
        body: "Joint / military cargo manifesting and in-transit visibility systems at the family level (the public skill is freight documentation standards — military shipping labels, DD Form documentation discipline — rather than a single platform).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Freight paperwork errors strand real cargo — the distribution Marines who are trusted learn documentation standards cold and build relationships at the nodes (airfields, ports, rail) they depend on.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson (Wikipedia summary)", url: MCCSSS_WIKI },
    ],
  }),

  deep({
    id: "usmc-3381",
    code: "3381",
    title: "Food Service Specialist",
    branch: "Marine Corps",
    field: "33 — Food Service",
    summary:
      "Feeding the force as a profession: garrison dining facility operations and field feeding — menu production, ration management, food safety and the management of a kitchen that may serve thousands a day or a company in the field.",
    duties: [
      "Dining facility shifts: production schedules, sanitation and food-safety compliance, subsistence accounting — and the early hours that come with feeding a base",
      "In the field: field kitchens and ration distribution — hot food delivered on time in austere conditions, a measurable morale event, not a cliché",
    ],
    school:
      "Marine Detachment, Fort Gregg-Adams, VA (official detachment page lists Food Service Specialist (3381) among its entry MOSs). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: dining facility shifts — production schedules, sanitation and food-safety compliance, subsistence accounting, and early hours. In the field: field kitchens and ration distribution, where the product is hot food delivered on time in austere conditions.",
    careerPath:
      "Cook / specialist → dining facility shift leader → food service chief billets managing facilities and field feeding for large commands; the 3372 Marine Aide specialty is a screened senior branch.",
    civilian:
      "Commercial / institutional cooking and kitchen management, food-safety credential pathways, hospitality food service.",
    similar: ["army-92g", "navy-cs", "usmc-4133"],
    extraSections: [
      {
        heading: "Organization",
        body: "Food service sections in headquarters / logistics units and installation dining facilities; field feeding teams in Combat Logistics and MWSS units.",
      },
      {
        heading: "Systems & equipment",
        body: "Expeditionary field kitchen families and tray-ration heating systems at the public name level; garrison plant is commercial institutional kitchen equipment — which is precisely why the skills transfer.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Food safety certification discipline (temperatures, storage, sanitation) is the professional core — and it is exactly what civilian employers test for.",
          "The second lesson is production math: feeding 800 on schedule is logistics, not just cooking.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Gregg-Adams (official)", url: FGA_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-3432",
    code: "3432",
    title: "Finance Technician",
    branch: "Marine Corps",
    field: "34 — Financial Management",
    summary:
      "The pay-and-claims technician: processing military pay transactions, travel claims and financial entitlements for individual Marines and units. When a Marine's pay is wrong, a 3432 is who fixes it — which makes accuracy a form of customer service with real stakes.",
    duties: [
      "Transaction processing and auditing in pay and travel systems",
      "Disbursing support and customer-service windows at finance offices",
      "Month-end / fiscal-year-end surges; on deployment, disbursing operations — cash and payment support to deployed forces",
    ],
    school:
      "Financial Management School at MCCSSS, Camp Johnson, NC (the MCCSSS mission explicitly includes the financial management field — accounting and disbursing). Course details — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Transaction processing and auditing in pay and travel systems, disbursing support, customer-service windows at finance offices, and month-end / fiscal-year-end surges. Deployment adds disbursing operations — cash and payment support to deployed forces.",
    careerPath:
      "Finance technician → travel / pay section leader → 3451 Fiscal / Budget Technician neighborhood and senior disbursing billets.",
    civilian: "Payroll, accounts payable / receivable, bookkeeping, financial operations support.",
    similar: ["usmc-0111", "navy-ps"],
    extraSections: [
      {
        heading: "Organization",
        body: "Installation finance offices and disbursing offices; deployed finance detachments.",
      },
      {
        heading: "Systems & equipment",
        body: "The Defense Travel System (DTS) for travel claims and the Corps' pay / personnel data environment at the public name level; the real equipment is audit discipline.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You will see everyone's pay problems; discretion and precision are equally the job.",
          "Learn the entitlement rules, not just the keystrokes — the trusted finance Marine can explain why a claim paid what it paid.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCSSS / Camp Johnson — financial management mission (Wikipedia summary)", url: MCCSSS_WIKI },
    ],
  }),

  deep({
    id: "usmc-3531",
    code: "3531",
    title: "Motor Vehicle Operator",
    branch: "Marine Corps",
    field: "35 — Motor Transport",
    summary:
      "The truck driver of the MAGTF — and more than that phrase suggests: tactical vehicle operation across terrain and conditions civilian drivers never see, operator-level maintenance, and convoy operations as a crew discipline.",
    duties: [
      "Drive the Corps' tactical vehicle fleet, licensed per vehicle family",
      "Licensing and proficiency driving, dispatch operations, preventive maintenance checks and services (PMCS) on the fleet, and support runs for every unit on base",
      "In the field: convoy rhythm — movement schedules, rest plans, vehicle recovery coordination; logistics convoys are the heartbeat of a deployed force's supply",
    ],
    school:
      "Motor Transport Instruction Company, Marine Corps Detachment, Fort Leonard Wood, MO (the detachment's official material lists motor transport operators among its trained MOSs; a supplement school table likewise puts 3531 at Fort Leonard Wood). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: licensing and proficiency driving, dispatch operations, PMCS on the fleet, and support runs for every unit on base. In the field or on deployment: convoy rhythm — movement schedules, rest plans, vehicle recovery coordination, and the reality that logistics convoys are the heartbeat of a deployed force's supply.",
    careerPath:
      "Operator → licensed across more vehicle families → convoy / dispatch leadership → 3537 Motor Transport Operations Chief; the maintenance branch (3521 → 3528 / 3529) is the field's other half.",
    civilian:
      "Commercial driving foundations (civilian licensing is separate but experience is valued), delivery / logistics operations, fleet safety culture.",
    similar: ["army-88m", "navy-eo", "usmc-3521"],
    extraSections: [
      {
        heading: "Organization",
        body: "Motor transport platoons / companies organic to battalions, Combat Logistics Battalions, and MWSS motor pools.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "MTVR (Medium Tactical Vehicle Replacement, the \"7-ton\") and LVSR (Logistics Vehicle System Replacement) heavy haul — named on Marines.com as the Corps' cargo haulers.",
          "JLTV (Joint Light Tactical Vehicle) and legacy HMMWV families.",
          "Operators are licensed per vehicle family — the license portfolio is the résumé.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "PMCS is not busywork — operators who actually inspect find the faults that strand convoys.",
          "Your driving record is your career: one at-fault mishap follows a motor transport Marine longer than any other junior mistake.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Leonard Wood (official DVIDS caption)", url: FLW_DET },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-3521",
    code: "3521",
    title: "Automotive Organizational Technician",
    branch: "Marine Corps",
    field: "35 — Motor Transport",
    summary:
      "The wheeled-vehicle mechanic at unit (organizational) level: diagnosing and repairing the trucks and light vehicles every unit owns, and deciding what can be fixed in-house versus what goes to intermediate maintenance.",
    duties: [
      "Diagnose and repair the unit's wheeled vehicles at organizational level",
      "Motor-pool rhythm: scheduled services, a repair queue triaged by unit readiness, deadline-vehicle reporting with the 0411s, and support to dispatch operations",
      "In the field: expeditionary maintenance — the same triage from a maintenance contact team, where keeping the essential vehicles running beats restoring everything",
    ],
    school:
      "MCCSSS, Camp Johnson, NC — motor transport maintenance training is a named MCCSSS mission; older school tables likewise separate 3521 (Camp Johnson) from 3531 operators (Fort Leonard Wood) — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: motor-pool rhythm — scheduled services, a repair queue triaged by unit readiness, deadline-vehicle reporting with the 0411s, and supporting dispatch operations. In the field: expeditionary maintenance — the same triage from a maintenance contact team, where keeping the essential vehicles running beats restoring everything.",
    careerPath:
      "Technician → shop chief → 3528 Motor Transport Master Technician → 3529 Motor Transport Maintenance Chief.",
    civilian: "Automotive / diesel technician trades, fleet maintenance, diagnostics — a direct trade transfer.",
    similar: ["army-91b", "cg-mk", "usmc-3531"],
    extraSections: [
      {
        heading: "Organization",
        body: "Motor transport maintenance sections in battalions and Combat Logistics units; intermediate shops in Maintenance Battalions for the deeper work.",
      },
      {
        heading: "Systems & equipment",
        body: "The MTVR / JLTV / HMMWV / LVSR fleet families, diagnostic tooling and the technical-manual library; GCSS-MC maintenance records are the shop's other half (with 0411).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Diagnosis beats parts replacement: the tech who can prove why a vehicle faults is the one whose deadline reports commanders believe.",
          "Document your work in GCSS-MC like a civilian shop documents a repair order — because civilian shops will ask exactly that at hiring.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Supplement: MCCSSS / Camp Johnson — motor transport maintenance mission (Wikipedia summary)", url: MCCSSS_WIKI },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-4133",
    code: "4133",
    title: "Morale, Welfare, and Recreation (MWR) Specialist",
    branch: "Marine Corps",
    field: "41 — Marine Corps Community Services",
    summary:
      "The quality-of-life operator inside Marine Corps Community Services: running and supporting the recreation, fitness and community programs that Marines and families use every day — the uniformed side of MCCS.",
    duties: [
      "Program and facility operations — fitness centers, recreation programs, events support, resale / recreation activity administration",
      "A calendar driven by unit homecomings, holidays and community events rather than exercises",
      "Deployment support: recreation services for deployed forces",
    ],
    school:
      "Not stated in the sources consulted for this entry — a small field whose school details are not published in them. Verify on official source rather than assume a schoolhouse or length.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Program and facility operations — fitness centers, recreation programs, events support, resale / recreation activity administration — with a calendar driven by unit homecomings, holidays and community events rather than exercises. Deployment support includes recreation services for deployed forces.",
    careerPath:
      "Specialist → program / facility lead → senior MCCS enlisted billets (the field tops out in the 4100-series senior structure per NAVMC).",
    civilian:
      "Recreation and program management, fitness services, hospitality and retail services operations.",
    similar: ["usmc-3381", "usmc-4821"],
    extraSections: [
      {
        heading: "Organization",
        body: "MCCS organizations at every major installation; headquarters MCCS for senior billets.",
      },
      {
        heading: "Systems & equipment",
        body: "No signature platform — the plant is recreation / fitness facility equipment and program-management systems at the category level.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "This is a customer-service profession inside a warrior institution — your users are tired Marines and their families, and the standard is a civilian business's standard.",
          "Event execution (setup, money handling, accountability) is where reputations are made.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-4541",
    code: "4541",
    title: "Combat Photographer",
    branch: "Marine Corps",
    field: "45 — Communication Strategy and Operations (successor to 43 Public Affairs / 46 Combat Camera)",
    summary:
      "The visual storyteller of the Marine Corps: still photography that documents operations, training and command priorities for public release, internal communication and the historical record. In the merged COMMSTRAT field (OccFld 45 succeeded the former 43 Public Affairs and 46 Combat Camera fields), photographers work alongside videographers (4571), graphics specialists (4512) and communication strategists in one shop.",
    duties: [
      "Cover exercises, ceremonies, leadership events and feature stories",
      "Edit, caption and release imagery through official channels, often same-day",
      "In the field: attach to operating units as the command's eyes — documenting what the unit actually did, which becomes both public communication and the unit's institutional memory",
    ],
    school:
      "Defense Information School (DINFOS), Fort George G. Meade, MD — DINFOS has been the consolidated DoD school for public affairs and visual information at Fort Meade since 1995 (official DINFOS history). Course length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: covering exercises, ceremonies, leadership events and feature stories; editing, captioning and releasing imagery through official channels, often same-day. In the field or on deployment: attached to operating units as the command's eyes. The deadline rhythm is news rhythm, not office rhythm.",
    careerPath:
      "Photographer → imagery team leader → 4591 Communication Strategy and Operations Chief; advanced visual-information specialties (4543 photojournalism, 4513 graphics) are the field's senior craft tracks.",
    civilian: "Photojournalism, commercial photography, media production, visual communications.",
    similar: ["navy-mc"],
    extraSections: [
      {
        heading: "Organization",
        body: "COMMSTRAT sections at division / wing / MEF headquarters and installation communication offices; Defense Media Activity billets for senior Marines.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Professional mirrorless / DSLR camera systems and standard editing software at the trade level.",
          "Distribution is through DVIDS (Defense Visual Information Distribution Service) — the public DoD imagery platform where released Marine Corps photos / videos appear.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Caption accuracy is journalism, not admin: names, units, places and dates in your metadata are quoted by real media.",
          "Shoot for the story the commander needs told and the archive needs kept — in twenty years your photos may be the only record a unit has.",
        ],
      },
    ],
    sourceLinks: [
      { label: "DINFOS history — Fort Meade schoolhouse (official)", url: "https://www.dinfos.dma.mil/About/DINFOS-History/" },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-4821",
    code: "4821",
    title: "Career Retention Specialist",
    branch: "Marine Corps",
    field: "48 — Recruiting and Retention",
    summary:
      "The unit career planner: the Marine who advises every Marine in the command on reenlistment, lateral moves, special-duty screens and career timing, and who runs the retention process — quotas, packages, approvals — for the commander.",
    duties: [
      "Career counseling appointments; build reenlistment and lateral-move packages",
      "Track the command's retention posture against goals",
      "Brief at the moments careers are decided (first-term alignment plans, zone decisions) — the calendar runs on fiscal-year retention cycles",
    ],
    school:
      "Career planner training after selection as an NCO — verify the school name and length on official source.",
    requirements:
      "A special-duty / lateral specialty for proven NCOs, not an entry job. Verify current selection requirements on official source.",
    dayInLife:
      "Interview-driven work: career counseling appointments, building reenlistment and lateral-move packages, tracking the command's retention posture against goals, and briefing at the moments careers are decided. The calendar runs on fiscal-year retention cycles.",
    careerPath:
      "Career planner → senior career planner at regiment / MEF level; the billet is itself a career-broadening tour that returns Marines to their primary field or into senior retention staff.",
    civilian: "Career counseling support, HR advisory, recruiting / talent-retention operations.",
    similar: ["usmc-0111", "army-42a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Career planner billets at battalion level and above in every command.",
      },
      {
        heading: "Systems & equipment",
        body: "The Corps' retention / reenlistment workflow systems and the MOS Manual itself — a career planner's core professional knowledge is the current MARADMINs on retention, bonuses and lateral moves.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You will handle the most consequential paperwork of a Marine's life at the moment they're deciding whether to stay — your credibility is built on knowing the current policy today, not last quarter's.",
          "Marines remember the career planner who leveled with them.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-5524",
    code: "5524",
    title: "Musician",
    branch: "Marine Corps",
    field: "55 — Music",
    summary:
      "A professional musician in uniform: performing in a fleet Marine band at ceremonies, concerts, parades and official events — entered by audition, with instrument-specific skill designators (the manual lists designators across the instrument families). The field also includes the two national ensembles: \"The President's Own\" U.S. Marine Band (5511) and \"The Commandant's Own\" Drum and Bugle Corps (5512).",
    duties: [
      "Perform at change-of-command and retirement ceremonies, community concerts, school outreach, and funeral honors support",
      "Rehearsals, sectionals and instrument maintenance — a working musician's calendar with a heavy performance schedule",
      "Bands also train for their wartime support tasks, but the daily product is performance readiness",
    ],
    school:
      "Naval School of Music, Joint Expeditionary Base Little Creek–Fort Story, VA — the joint music school (Marines graduate from the Navy School of Music at Little Creek) after a successful audition. Length — verify on official source.",
    requirements:
      "Entry is by audition, with instrument-specific skill designators. Auditions for \"The President's Own\" are a separate, national-level process. Verify current audition requirements on official source.",
    dayInLife:
      "A working musician's calendar — rehearsals, sectionals, instrument maintenance, and a heavy performance schedule: change-of-command and retirement ceremonies, community concerts, school outreach, and funeral honors support. Field time looks different here: bands also train for their wartime support tasks, but the daily product is performance readiness.",
    careerPath:
      "Band member → section leader → 5521 Drum Major / Enlisted Conductor and 5519 Enlisted Band Leader; auditions for \"The President's Own\" are a separate, national-level process.",
    civilian: "Professional performance, music education, arts production, instrument repair pathways.",
    similar: ["navy-mu"],
    extraSections: [
      {
        heading: "Organization",
        body: "Division / wing / installation bands across the Corps (the fleet bands), plus the two Washington, DC national ensembles.",
      },
      {
        heading: "Systems & equipment",
        body: "Your instrument family is your platform — concert band instrumentation at the professional level; senior roles include Drum Major / Enlisted Conductor (5521), Enlisted Band Leader (5519) and Instrument Repair Technician (5523).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "The audition never really ends — fleet bands are small, and every performance is public.",
          "Working-musician habits (practice discipline, doubling, sight-reading) are your promotion board.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: Operation Military Kids — Navy A-school locations (Little Creek music school)",
        url: "https://www.operationmilitarykids.org/navy-a-school-locations/",
      },
    ],
  }),

  deep({
    id: "usmc-5711",
    code: "5711",
    title: "CBRN Defense Specialist",
    branch: "Marine Corps",
    field: "57 — Chemical, Biological, Radiological, and Nuclear (CBRN) Defense",
    summary:
      "The unit's chemical, biological, radiological and nuclear readiness specialist: the Marine who trains the command on protective equipment, maintains the unit's CBRN defense gear, and advises the commander on operating in a contaminated environment at the organizational level. Overview only — this entry carries no procedural content.",
    duties: [
      "Equipment accountability and maintenance for the unit's protective masks and detection gear",
      "Run the command's CBRN training (mask confidence and equipment familiarization) and staff work in the operations section",
      "In the field: CBRN cell work in the command post — hazard reporting support and readiness advice as part of the staff, plus reconnaissance-support tasks at the organizational level",
    ],
    school:
      "U.S. Marine Corps CBRN School, Marine Corps Detachment, Fort Leonard Wood, MO — the detachment's CBRN School trains the 5711 specialty (students complete the CBRN Defense Specialist Basic Course there). Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: equipment accountability and maintenance for the unit's protective masks and detection gear, running the command's CBRN training, and staff work in the operations section. In the field or on deployment: CBRN cell work in the command post — hazard reporting support and readiness advice as part of the staff, plus reconnaissance-support tasks at the organizational level.",
    careerPath:
      "Unit CBRN specialist → CBRN chief of larger staffs → 5769 CBRN Defense Chief; warrant-officer CBRN (5702) requires prior 5711 service per the manual-derived course prerequisites.",
    civilian:
      "Hazmat / emergency-management support, industrial safety and hygiene support, protective-equipment program administration.",
    similar: ["army-74d", "usmc-2336"],
    extraSections: [
      {
        heading: "Organization",
        body: "CBRN sections / cells in battalion and regimental headquarters, MEF staffs, and dedicated CBRN defense platoons in logistics groups.",
      },
      {
        heading: "Systems & equipment",
        body: "Publicly nameable categories: the M50 joint service general purpose mask family (the standard-issue protective mask shown in official imagery), protective ensembles and detection / monitoring equipment families. Employment and detection procedures are schoolhouse material and are not covered here.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "In most units you are a staff of one — the commander will believe the CBRN program is exactly as good as you make it.",
          "Inventory honesty matters: protective equipment that exists on paper but not serviceably is the specific failure this MOS exists to prevent.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Leonard Wood — CBRN School (official DVIDS caption)", url: FLW_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-5811",
    code: "5811",
    title: "Military Police",
    branch: "Marine Corps",
    field: "58 — Military Police and Corrections",
    summary:
      "The Corps' police force: law enforcement and security on installations and in deployed environments — patrol, incident response, traffic enforcement, investigations support and force protection — with a field-security role on deployment that makes MPs both police and combat support.",
    duties: [
      "Patrol rotations, gate and access control, duty-desk operations, traffic stops and DUI enforcement",
      "Respond to everything from noise complaints to felonies — with report writing after all of it",
      "In the field: route and convoy security support, detainee-operations support, law-and-order for expeditionary bases, and police-transition / liaison tasks depending on the mission",
    ],
    school:
      "Law Enforcement Military Police Course at the U.S. Army Military Police School, taught through the Marine Corps Detachment, Fort Leonard Wood, MO — the detachment's Military Police Instruction Company trains 5811 alongside 5821, 5814 and 5819. A supplement reports the course at up to ~20 weeks — supplement figure, verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: shift work, full stop — patrol rotations, gate and access control, duty-desk operations, traffic stops and DUI enforcement, responding to everything from noise complaints to felonies, with report writing after all of it. In the field or on deployment: route and convoy security support, detainee-operations support, law-and-order for expeditionary bases, and police-transition / liaison tasks depending on the mission.",
    careerPath:
      "Patrolman → field training / shift leadership → investigations specialties (5819 MP Investigator, 5821 CID Agent), physical security (5814), corrections (5831) and working-dog (5812) branches; senior MPs run PMOs and law-enforcement battalions.",
    civilian:
      "Law enforcement and security careers, corrections, protective services, investigations support — among the most direct transfers in the Corps (academy / credential requirements vary by agency).",
    similar: ["navy-ma", "army-31b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Provost Marshal Offices and MP companies / battalions on every major installation; Law Enforcement Battalions in the MLGs for the field mission.",
      },
      {
        heading: "Systems & equipment",
        body: "Standard law-enforcement equipment families (patrol vehicles, radios on installation nets, speed-measurement and evidence kit at the category level) and the working-dog ecosystem alongside 5812 Working Dog Handlers — Lackland AFB hosts the DoD Military Working Dog School.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You will police your own community — including Marines senior to you — and your authority comes from composure and correct procedure, not volume.",
          "Report writing is half the job and most of your courtroom credibility; write every report like it will be read aloud by a lawyer, because it may be.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marine Corps Detachment, Fort Leonard Wood — MP Instruction Company (official DVIDS caption)", url: FLW_DET },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Second Air Force fact sheet — DoD Military Working Dog School, Lackland (official)",
        url: "https://www.aetc.af.mil/About-Us/Fact-Sheets/Display/Article/558870/second-air-force/",
      },
    ],
  }),

  deep({
    id: "usmc-5939",
    code: "5939",
    title: "Aviation Communication Systems Technician",
    branch: "Marine Corps",
    field: "59 — Aviation Command and Control Electronics Maintenance",
    summary:
      "Maintenance for the communications systems of Marine air command-and-control agencies — the radios and communications architecture that let the Marine Air Command and Control System (MACCS) talk to aircraft, ships and headquarters.",
    duties: [
      "Shop and site maintenance on C2 communications equipment; support air-control agencies' training and readiness",
      "In the field: expeditionary airfields and C2 nodes — set up and sustain the communications backbone of the air combat element's command system, where a failed radio is a failed control agency",
    ],
    school:
      "Air School (Company C) at MCCES, Twentynine Palms, CA — MCCES's Air School trains the 5900 and 7200 fields. Length — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: shop and site maintenance on C2 communications equipment, supporting air-control agencies' training and readiness. In the field: expeditionary airfields and C2 nodes — setting up and sustaining the communications backbone of the air combat element's command system, where a failed radio is a failed control agency.",
    careerPath:
      "Technician → C2 maintenance team leader → 5959 Air Traffic Control Systems Maintenance Chief / 5993 Electronics Maintenance Chief (Aviation C2).",
    civilian:
      "Avionics / communications electronics maintenance, air-traffic systems support, telecommunications field service.",
    similar: ["usmc-2847", "usmc-7257"],
    extraSections: [
      {
        heading: "Organization",
        body: "Marine Air Control Groups (MACG) and their squadrons — Marine Air Control, Marine Air Support, Marine Tactical Air Command and communications squadrons.",
      },
      {
        heading: "Systems & equipment",
        body: "The wider 59 field maintains, by MOS: aviation radar (5948), air traffic control navigational aids / radar / communications (5952–5954), aviation meteorological equipment (5951), and tactical data systems (5974 / 5979) — 5939's own lane is the communication systems those agencies depend on.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You maintain systems for customers (controllers and air officers) who notice failures instantly and publicly — preventive maintenance and honest status reporting are the reputation of this field.",
          "Radar / data / communications cross-training comes with seniority; breadth is the promotion pattern.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: MCCES Air School — 5900 / 7200 fields (Wikipedia summary)", url: MCCES_WIKI },
    ],
  }),

  deep({
    id: "usmc-6113",
    code: "6113",
    title: "Helicopter Mechanic, CH-53",
    branch: "Marine Corps",
    field: "60 / 61 / 62 — Aircraft Maintenance (general / rotary-wing / fixed-wing)",
    summary:
      "Organizational-level mechanic on the Corps' heavy-lift helicopter — the CH-53E Super Stallion and its successor, the CH-53K King Stallion. Inspections, servicing, component changes and troubleshooting on airframe, rotor, hydraulic and drive systems, under plane captains and crew chiefs who own the aircraft day-to-day.",
    duties: [
      "Flight-line work keyed to the flight schedule: daily / turnaround inspections, scheduled phase maintenance, launch and recovery support",
      "The paperwork discipline of naval aviation maintenance — every task signed in the system",
      "Sea duty and MEU deployments are a normal part of the cycle for HMH squadrons",
    ],
    school:
      "Common-core aviation training at NAS Pensacola, FL, then CH-53 platform training at CNATT Marine Unit, MCAS New River, NC (supplement — a field summary lists 6113 school at MCAS New River and the trainee pipeline through NAS Pensacola; verify on official source (CNATT page) before relying on lengths — none are published here).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Flight-line work keyed to the flight schedule: daily / turnaround inspections, scheduled phase maintenance, launch and recovery support, and the paperwork discipline of naval aviation maintenance — every task signed in the system. Sea duty and MEU deployments are a normal part of the cycle for HMH squadrons.",
    careerPath:
      "Mechanic → plane captain → collateral duty inspector / quality assurance → 6019 Aircraft Maintenance Chief track shared across aviation maintenance.",
    civilian:
      "Aviation maintenance technician (FAA A&P pathways — military experience counts toward eligibility), rotorcraft industry maintenance.",
    similar: ["usmc-6116", "usmc-6218"],
    extraSections: [
      {
        heading: "Organization",
        body: "Heavy Helicopter Squadrons (HMH) at MCAS New River, MCAS Miramar and MCAS Futenma; intermediate support from MALS. How Marine aviation maintenance is organized: squadrons maintain their own aircraft at the organizational level; Marine Aviation Logistics Squadrons (MALS) provide intermediate-level repair — engines, components, avionics benches — and aviation supply. The daily rhythm everywhere is the flight schedule, quality assurance (the 6018 / 6016 QA / CDI structure in NAVMC) is a formal, named system, and maintenance is documented in NALCOMIS, the naval aviation maintenance data system.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "CH-53E Super Stallion / CH-53K King Stallion — the aircraft is the system.",
          "Component families (engines, gearboxes, rotor heads, hydraulics) are the mechanic's daily geography.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Aviation maintenance runs on signed accountability — if it isn't documented, it didn't happen, and if you signed it, you own it.",
          "Foreign-object-damage (FOD) discipline and tool control are treated as flight-safety law, because they are.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
      { label: "Supplement: MarineParents — OccFld 61 (6113 school locations)", url: "https://wab.marineparents.com/occfield.asp?Code=61" },
    ],
  }),

  deep({
    id: "usmc-6116",
    code: "6116",
    title: "Tiltrotor Mechanic, MV-22",
    branch: "Marine Corps",
    field: "60 / 61 / 62 — Aircraft Maintenance (general / rotary-wing / fixed-wing)",
    summary:
      "The MV-22B Osprey counterpart to 6113 — organizational maintenance on the tiltrotor that gives the MAGTF its long-range assault support: proprotor, drive, airframe and hydraulic systems with a maintenance profile unlike either a helicopter or a fixed-wing aircraft.",
    duties: [
      "Organizational maintenance on the MV-22B: proprotor, drive, airframe and hydraulic systems",
      "Flight-line rhythm in Medium Tiltrotor Squadrons (VMM) — inspections, servicing and launch / recovery against the flight schedule, under the same NALCOMIS / QA discipline as the rest of naval aviation maintenance",
    ],
    school:
      "Common core at NAS Pensacola, then V-22 platform training in the CNATT pipeline at MCAS New River, NC (supplement pattern as for 6113 — verify on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Flight-line rhythm in Medium Tiltrotor Squadrons (VMM) at New River, Miramar, Futenma and Kaneohe Bay; same NALCOMIS / QA discipline as the rest of naval aviation maintenance — aircraft inspected, serviced, repaired and signed for against the next day's sorties.",
    careerPath:
      "As 6113 — plane captain, CDI / QA, 6019 Aircraft Maintenance Chief track; tiltrotor experience is a small, tight community where reputations travel fast.",
    civilian: "A&P pathways, tiltrotor / advanced-air-mobility industry maintenance (a growing civilian sector).",
    similar: ["usmc-6113", "usmc-6218"],
    extraSections: [
      {
        heading: "Organization",
        body: "Medium Tiltrotor Squadrons (VMM) at MCAS New River, Miramar, Futenma and Kaneohe Bay, with intermediate-level support from MALS (engines, components, avionics benches, aviation supply). Maintenance is documented in NALCOMIS, and quality assurance (6018 / 6016 QA / CDI structure) is a formal, named system. The crew chief counterpart MOS is 6176.",
      },
      {
        heading: "Systems & equipment",
        bullets: ["MV-22B Osprey — proprotor, drive, airframe and hydraulic systems."],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "The Osprey rewards systems thinkers — its maintenance data and fault-isolation culture are more \"flying network\" than old helicopter.",
          "Learn the publications system early; in naval aviation the book is not a suggestion.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
    ],
  }),

  deep({
    id: "usmc-6217",
    code: "6217",
    title: "Fixed-Wing Aircraft Mechanic, F/A-18",
    branch: "Marine Corps",
    field: "60 / 61 / 62 — Aircraft Maintenance (general / rotary-wing / fixed-wing)",
    summary:
      "Organizational maintenance on Marine tactical jets — the F/A-18 Hornet in this code, the legacy half of the fixed-wing mechanic pair as VMFA squadrons transition to the F-35B (6218). Daily work: inspections, servicing, component replacement and launch / recovery operations for strike-fighter squadrons.",
    duties: [
      "Inspections, servicing, component replacement and launch / recovery operations for F/A-18 squadrons",
      "Flight-schedule rhythm in VMFA squadrons — the flight schedule rules the day; night launches rule many nights",
      "Carrier and expeditionary operations are part of the community's rhythm; the F/A-18 is a sundowning fleet — verify current squadron assignments on official source",
    ],
    school:
      "Common core at NAS Pensacola, then platform training at the fleet replacement / CNATT sites for the type — verify current school locations on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "VMFA squadrons at MCAS Beaufort, Miramar, Yuma and Iwakuni; carrier and expeditionary operations are part of the community's rhythm. The flight schedule rules the day; night launches rule many nights.",
    careerPath:
      "Mechanic → plane captain → CDI / QAR → 6019 Aircraft Maintenance Chief; 6218s also feed the small cadre supporting the Corps' first F-35C carrier squadrons.",
    civilian: "A&P pathways, defense aerospace maintenance and sustainment industry.",
    similar: ["usmc-6218", "usmc-6337"],
    extraSections: [
      {
        heading: "Organization",
        body: "VMFA squadrons maintain their own aircraft at the organizational level; MALS provides intermediate-level repair and aviation supply. Maintenance is documented in NALCOMIS under the formal QA / CDI structure (6018 / 6016).",
      },
      {
        heading: "Systems & equipment",
        bullets: ["F/A-18 Hornet family — the legacy strike-fighter platform for this code."],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Fifth-generation maintenance is as much information discipline as wrenching — configuration control and data accuracy are flight-safety items (the standard the transitioning fleet runs on).",
          "The Hornet generation's tribal knowledge is retiring with the jet; F-35 Marines build their reputation on publication discipline.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
    ],
  }),

  deep({
    id: "usmc-6218",
    code: "6218",
    title: "Fixed-Wing Aircraft Mechanic, F-35",
    branch: "Marine Corps",
    field: "60 / 61 / 62 — Aircraft Maintenance (general / rotary-wing / fixed-wing)",
    summary:
      "Organizational maintenance on Marine tactical jets — centered on the F-35B Lightning II in this code, as VMFA squadrons transition from the F/A-18 (6217). Daily work: inspections, servicing, component replacement and launch / recovery operations for strike-fighter squadrons. The F-35's maintenance is data-system-centric — its logistics information system is the publicly known backbone of F-35 sustainment.",
    duties: [
      "Inspections, servicing, component replacement and launch / recovery operations for F-35B squadrons",
      "Data-system-centric maintenance: configuration control and data accuracy are flight-safety items",
      "Feed the small cadre supporting the Corps' first F-35C carrier squadrons",
    ],
    school:
      "Common core at NAS Pensacola, then platform training at the fleet replacement / CNATT sites for the type (F-35 training centered at MCAS Beaufort's training squadron for the East Coast pipeline — verify current school locations on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "VMFA squadrons at MCAS Beaufort, Miramar, Yuma and Iwakuni; carrier and expeditionary operations are part of the community's rhythm. The flight schedule rules the day; night launches rule many nights.",
    careerPath:
      "Mechanic → plane captain → CDI / QAR → 6019 Aircraft Maintenance Chief; 6218s also feed the small cadre supporting the Corps' first F-35C carrier squadrons.",
    civilian: "A&P pathways, defense aerospace maintenance and sustainment industry.",
    similar: ["usmc-6217", "usmc-6116"],
    extraSections: [
      {
        heading: "Organization",
        body: "VMFA squadrons maintain their own aircraft at the organizational level; MALS provides intermediate-level repair and aviation supply. Maintenance is documented in NALCOMIS under the formal QA / CDI structure (6018 / 6016).",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "F-35B Lightning II (STOVL variant) — the current platform for this code.",
          "The F-35's logistics information system is the publicly known backbone of its sustainment.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Fifth-generation maintenance is as much information discipline as wrenching — configuration control and data accuracy are flight-safety items.",
          "The Hornet generation's tribal knowledge is retiring with the jet; F-35 Marines build their reputation on publication discipline.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Marines.com — Equipment and Weapons (official)", url: MARINES_EQUIP },
    ],
  }),

  deep({
    id: "usmc-6337",
    code: "6337",
    title: "Aircraft Electrical Systems Technician, F/A-18",
    branch: "Marine Corps",
    field: "63 / 64 — Avionics (organizational & intermediate level)",
    summary:
      "The wiring-and-boxes troubleshooter: aircraft electrical and communications / navigation systems at organizational level — power generation / distribution on the aircraft, radios, navigation and identification systems — on the F/A-18 in this code, with platform siblings for KC-130 (6336), AV-8 (6332) and the F-35 (6338). This is the avionics representative entry for OccFld 63.",
    duties: [
      "Fault isolation: a pilot writes up a discrepancy, and the avionics tech works the publications, test equipment and wiring diagrams to prove what failed — then repairs, operationally checks, and signs",
      "Squadron avionics shop work at organizational level; intermediate-level (64xx) shops do the deeper bench work in MALS",
    ],
    school:
      "Avionics common training in the Pensacola pipeline, then platform-specific courses — verify locations and lengths on official source (avionics pipelines are long; no figure is published here without the CNATT page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Fault isolation is the job: a pilot writes up a discrepancy, and the avionics tech works the publications, test equipment and wiring diagrams to prove what failed — then repairs, operationally checks, and signs. Intermediate-level (64xx) shops do the deeper bench work in MALS.",
    careerPath: "Technician → avionics shop supervisor → 6391 Avionics Maintenance Chief.",
    civilian: "Avionics technician, aerospace electrical repair, test and field-service roles.",
    similar: ["usmc-6218", "usmc-5939"],
    extraSections: [
      {
        heading: "Organization",
        body: "Squadron avionics shops; MALS avionics divisions for intermediate level.",
      },
      {
        heading: "Systems & equipment",
        body: "Aircraft electrical / comm / nav system families by platform (6337 = F/A-18); the test sets and wiring-diagram publications are the daily tools.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Intermittent faults are the boss fight of avionics — documentation of exactly what you observed is what lets the next tech (or you, tomorrow) kill the problem.",
          "Wire integrity and connector discipline prevent more sorties lost than any component failure.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-6531",
    code: "6531",
    title: "Aircraft Ordnance Technician",
    branch: "Marine Corps",
    field: "65 — Aviation Ordnance",
    summary:
      "Squadron-level aviation ordnance: handling, inspecting, building up (at the accountability level) and loading the weapons Marine aircraft carry, and maintaining the racks, launchers and release systems — under the most formal safety regime in aviation support. Overview only — no loading or arming procedures are described in this entry.",
    duties: [
      "Ordnance shop and flight-line cycles keyed to training sorties",
      "Magazine / ready-service storage accountability",
      "Certifications for each loading evolution",
    ],
    school:
      "Aviation ordnance training in the CNATT pipeline (Pensacola common training with platform follow-on) — verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Ordnance shop and flight-line cycles keyed to training sorties; magazine / ready-service storage accountability; certifications for each loading evolution.",
    careerPath:
      "Ordnance technician → ordnance team / shop leader → 6591 Aviation Ordnance Chief; the 6577 weapons-and-tactics instructor designator is the senior craft track.",
    civilian: "Aviation support operations, hazmat handling compliance, inventory and safety program work.",
    similar: ["usmc-2311", "usmc-6337"],
    extraSections: [
      {
        heading: "Organization",
        body: "Squadron ordnance shops (\"IYAOYAS\" is the community's public motto / culture), MALS ordnance for intermediate work, station weapons departments.",
      },
      {
        heading: "Systems & equipment",
        body: "Aircraft armament systems at the family level — bomb racks, missile launchers, gun systems — and the support equipment that moves ordnance safely on a flight line.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Ordnance runs on certification and two-person integrity — nobody works alone, nobody shortcuts a checklist, and the community polices itself hard. That culture is the credential.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-6672",
    code: "6672",
    title: "Aviation Supply Specialist",
    branch: "Marine Corps",
    field: "66 — Aviation Logistics",
    summary:
      "The 3043's aviation counterpart, with a harder problem: aircraft parts are expensive, serialized and sortie-critical. 6672s run requisitioning, tracking and issue of aviation material inside the aviation logistics system so maintenance can generate flight hours.",
    duties: [
      "Parts research, requisition status-chasing, warehouse and forward-stock operations at MALS and squadrons",
      "The daily negotiation between a broken aircraft's needs and the supply system's reality — measured in aircraft readiness, not just transactions",
    ],
    school:
      "Aviation supply training in the naval aviation pipeline (Meridian, MS is the historic home of naval aviation supply training — verify the current location and length on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Parts research, requisition status-chasing, warehouse and forward-stock operations at MALS and squadrons, and the daily negotiation between a broken aircraft's needs and the supply system's reality — measured in aircraft readiness, not just transactions.",
    careerPath:
      "Aviation supply specialist → MALS supply leadership → 6617 Enlisted Aviation Logistician senior track. The field's data specialty is 6694 ALIMS Specialist.",
    civilian: "Aviation logistics / parts management, MRO supply chains, inventory systems and procurement support.",
    similar: ["usmc-3043", "navy-ls"],
    extraSections: [
      {
        heading: "Organization",
        body: "MALS supply divisions and squadron supply support; the field's data specialty is 6694 ALIMS Specialist, and its senior enlisted leader is 6617 Enlisted Aviation Logistician.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "NALCOMIS — the maintenance / supply data system of naval aviation (the administrator MOS 6049 in NAVMC is literally \"NALCOMIS Application Administrator / Analyst\").",
          "Aviation-parts warehouse operations.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "In aviation supply, a wrong part number grounds an aircraft — catalog discipline and honest estimated-delivery reporting are how maintenance chiefs judge you.",
          "Learn to read readiness data, not just fill orders.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),

  deep({
    id: "usmc-6842",
    code: "6842",
    title: "METOC Analyst Forecaster",
    branch: "Marine Corps",
    field: "68 — Meteorology and Oceanography (METOC)",
    summary:
      "The MAGTF's weather and ocean professional: collecting observations, building forecasts and translating atmospheric / ocean conditions into decision information for commanders and aviators (the METOC T&R manual's own mission framing: collect, assess and disseminate METOC intelligence for planning and execution, including tactical decision aids).",
    duties: [
      "Forecast-desk shifts supporting flight operations and training — observations, forecast products, briefings for flight crews and staffs",
      "In the field: METOC support teams with expeditionary units, where surf, wind and visibility forecasts shape everything from flight schedules to amphibious timing",
    ],
    school:
      "Formal METOC schooling at Keesler AFB, MS (the METOC T&R manual places academic training at the Meteorological Training Facility, Keesler AFB; a dated recruiting insert lists 6842 at 6 weeks in Biloxi, MS — dated figure, verify on official source).",
    requirements: REQ_VERIFY,
    dayInLife:
      "In garrison: forecast-desk shifts supporting flight operations and training — observations, forecast products, briefings for flight crews and staffs. In the field or on deployment: METOC support teams with expeditionary units, where surf, wind and visibility forecasts shape everything from flight schedules to amphibious timing.",
    careerPath:
      "Observer / forecaster → forecast duty officer billets → 6852 METOC Impact Analyst and senior METOC chief roles.",
    civilian:
      "Weather forecasting support (NWS / private sector pathways with credentials), aviation weather services, environmental data analysis.",
    similar: ["af-1w0x1", "usmc-7041"],
    extraSections: [
      {
        heading: "Organization",
        body: "METOC sections in Marine Wing Support / air control organizations and MEF headquarters; forecast centers at air stations.",
      },
      {
        heading: "Systems & equipment",
        body: "Weather observation and forecasting systems at the family level (automated observing systems, satellite / forecast model data) — the publicly nameable product is the forecast itself and its decision aids.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your forecast will be wrong sometimes; your credibility depends on communicating uncertainty honestly and early.",
          "Aviators trust the forecaster who says \"this is a coin flip after 1400\" more than one who guesses confidently.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "METOC T&R Manual, MCO P3500.66A (official manual, public mirror)",
        url: "https://www.GlobalSecurity.org/military/library/policy/usmc/mco/p3500-66/mco-p3500-66a.pdf",
      },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),

  deep({
    id: "usmc-7051",
    code: "7051",
    title: "Aircraft Rescue and Firefighting (ARFF) Specialist",
    branch: "Marine Corps",
    field: "70 — Airfield Services",
    summary:
      "A professional firefighter whose specialty is aircraft emergencies: standing rescue / fire response for flight operations at Marine air stations and expeditionary airfields, plus structural fire support.",
    duties: [
      "Station life, like any fire service: apparatus and equipment checks, training rotations (live-fire and rescue drills), standby during flight operations — and then the alarm",
      "Expeditionary rotations add airfield-opening fire support for forward fields",
    ],
    school:
      "Louis F. Garland DoD Fire Academy, Goodfellow AFB, San Angelo, TX — the DoD's joint fire training academy (official Air Force fact sheet confirms the academy and its multi-service Fire Protection Apprentice Course); a supplement reports the Marine fire-protection apprentice training at 68 days — supplement figure, verify on official source.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Station life, like any fire service: apparatus and equipment checks, training rotations (live-fire and rescue drills), standby during flight operations — and then the alarm. The honest rhythm of the job, well known in the fire service, is long readiness punctuated by minutes that matter. Expeditionary rotations add airfield-opening fire support for forward fields.",
    careerPath: "Firefighter → crew leader / apparatus operator → ARFF station leadership and airfield services senior billets.",
    civilian:
      "Airport and municipal firefighting (credential-dependent), emergency response, fire-service leadership pathways.",
    similar: ["army-12m", "af-3e7x1", "usmc-7041"],
    extraSections: [
      {
        heading: "Organization",
        body: "ARFF sections at every MCAS and expeditionary airfield services units (the field also includes 7011 Expeditionary Airfield Systems Technicians).",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "ARFF crash trucks — the P-19 family is the publicly known Marine / Navy ARFF vehicle line.",
          "Structural engines, rescue tools and protective ensembles standard to the DoD fire service.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Certifications are portable currency in this field — the DoD fire academy system is built on national fire-service credential standards, so treat every cert as a civilian asset.",
          "Train like the alarm is today: ARFF skills are perishable and the real call will not wait for a refresher.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "312th Training Squadron / DoD Fire Academy fact sheet, Goodfellow AFB (official)",
        url: "https://www.goodfellow.af.mil/About-Us/Fact-Sheets/Display/Article/372985/312th-training-squadron/",
      },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      {
        label: "Supplement: Operation Military Kids — Firefighters MOS 7051 (68 days figure, verify)",
        url: "https://www.operationmilitarykids.org/marine-corps-firefighters-mos-7051/",
      },
    ],
  }),

  deep({
    id: "usmc-7041",
    code: "7041",
    title: "Aviation Operations Specialist",
    branch: "Marine Corps",
    field: "70 — Airfield Services",
    summary:
      "The airfield / squadron operations desk: flight records and scheduling support, airfield information management, NOTAM and flight-plan coordination, and the administrative machinery that makes a flying day legal and trackable.",
    duties: [
      "Operations-duty shifts: publish and update the flight schedule, maintain aircrew flight records, coordinate airfield services",
      "Be the phone that rings when anything about today's flying changes",
    ],
    school:
      "A dated official recruiting insert lists 7041 at 8 weeks, Meridian, MS (NAS Meridian hosts naval aviation training) — dated (2021) figure; verify on official source before relying on it.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Operations-duty shifts — publishing and updating the flight schedule, maintaining aircrew flight records, coordinating airfield services, and being the phone that rings when anything about today's flying changes.",
    careerPath: "Operations specialist → operations chief billets at squadron and station level.",
    civilian: "Airport operations, airline / station operations support, dispatch support, aviation administration.",
    similar: ["navy-ac", "usmc-7257"],
    extraSections: [
      {
        heading: "Organization",
        body: "Squadron operations departments and air station operations (base airfield operations) at every MCAS.",
      },
      {
        heading: "Systems & equipment",
        body: "Flight-record and scheduling systems at the family level; the public skill set is aviation operations administration and airfield data standards.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Accuracy in flight records is legal-record accuracy — flight hours drive pay, qualifications and investigations.",
          "The ops desk sees the whole squadron; discretion about what you see is part of the uniform.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Dated 2021 recruiting insert via GovTribe (flagged — verify on official source)", url: MCROB_2021 },
    ],
  }),

  deep({
    id: "usmc-7257",
    code: "7257",
    title: "Air Traffic Controller",
    branch: "Marine Corps",
    field: "72 — Air Control / Air Support / Anti-Air Warfare / Air Traffic Control",
    summary:
      "A certificated controller in uniform: separating and sequencing aircraft in tower and radar environments at Marine airfields and expeditionary fields. Controllers qualify through the tower (7252), radar arrival / departure (7253) and radar approach (7254) specialties into the full 7257 MOS.",
    duties: [
      "Position rotations in tower cabs and radar rooms — working live traffic in weather, at night, around emergencies",
      "The relentless currency and evaluation regime that civil aviation would recognize instantly, because the standards are built to FAA-recognized patterns (certification specifics — verify on official source)",
      "Expeditionary ATC for forward fields",
    ],
    school:
      "A dated official recruiting insert lists 7257 at 21 weeks, Pensacola, FL (NATTC Pensacola is the naval ATC schoolhouse) — dated (2021) figure; verify on official source. Follow-on qualification is position-by-position at the first duty station — first facility ratings, not the schoolhouse, are what make a controller.",
    requirements:
      "Trainee (7251) → tower / radar qualifications → full controller (7257); wash-out risk in this pipeline is real, and certification standards are built to FAA-recognized patterns (specifics — verify on official source). " +
      REQ_VERIFY,
    dayInLife:
      "Position rotations in tower cabs and radar rooms — working live traffic in weather, at night, around emergencies — interleaved with the relentless currency and evaluation regime that civil aviation would recognize instantly.",
    careerPath:
      "Trainee (7251) → tower / radar qualifications → full controller (7257) → watch supervision → 7291 Senior Air Traffic Controller.",
    civilian:
      "FAA air traffic control pathways (age and hiring rules apply), contract tower operations, aviation operations.",
    similar: ["navy-ac", "usmc-7041"],
    extraSections: [
      {
        heading: "Organization",
        body: "Air traffic control detachments / squadrons in the Marine Air Control Groups at each air station; expeditionary ATC teams for forward fields.",
      },
      {
        heading: "Systems & equipment",
        body: "Tower and radar control systems at the family level (the same surveillance / communications families maintained by the 59xx field — the two fields work as one system).",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Phraseology and composure are the job — you will sound calm on frequency on the worst day of someone else's life, and that is learned by thousands of supervised transmissions.",
          "Wash-out risk in this pipeline is real; study is not optional homework, it is the job interview continuing.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Dated 2021 recruiting insert via GovTribe (flagged — verify on official source)", url: MCROB_2021 },
    ],
  }),

  deep({
    id: "usmc-7314",
    code: "7314",
    title: "Unmanned Aerial Vehicle (UAV) Air Vehicle Operator",
    branch: "Marine Corps",
    field: "73 — Enlisted Flight Crews / UAS",
    summary:
      "The pilot-operator of Marine unmanned aircraft: flying reconnaissance and surveillance missions from a ground control station in support of the MAGTF, as part of the VMU (unmanned aerial systems) squadrons. The sensor operator / mission specialist teammates (7372 family) complete the crew.",
    duties: [
      "Mission planning, briefs, long surveillance orbits flown in shifts from the ground control station, debriefs and reporting",
      "Aviation discipline — checklists, currency, evaluations — applied to an aircraft you never sit in",
      "Detachments habitually support MEUs",
    ],
    school:
      "Joint UAS training pipeline (the Army's Fort Huachuca is the historic home of RQ-21 initial training; MQ-9 training runs through Air Force channels) — verify the current pipeline on official source; no location or length is published here without the current schoolhouse page.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Mission rhythm rather than flight-line rhythm: mission planning, briefs, long surveillance orbits flown in shifts from the ground control station, debriefs and reporting — aviation discipline (checklists, currency, evaluations) applied to an aircraft you never sit in.",
    careerPath:
      "Air vehicle operator → mission commander / instructor tracks within the VMU → senior UAS billets as the community grows; the field is young enough that today's junior operators are literally writing its senior culture.",
    civilian:
      "Commercial UAS operations foundations (FAA licensing is separate), aerial imagery / surveillance support, aviation operations.",
    similar: ["army-15w", "usmc-7041"],
    extraSections: [
      {
        heading: "Organization",
        body: "VMU squadrons at MCAS Yuma, Cherry Point, Kaneohe Bay and Camp Pendleton; detachments habitually support MEUs.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "RQ-21A Blackjack — the VMUs' expeditionary system.",
          "MQ-9A Reaper — which Marine VMU squadrons now publicly operate. (Verify which platform a given squadron flies at publication time, as the fleet is transitioning.)",
          "Smaller systems are the 7316 SUAS Operator lane.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Boredom management is a flight-safety skill: the professional UAS operator stays sharp through hour six of an orbit, because the thirty seconds that matter don't announce themselves.",
          "Your product is information for a ground commander — learn what infantry officers actually need to see.",
        ],
      },
    ],
    sourceLinks: [{ label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL }],
  }),
];
