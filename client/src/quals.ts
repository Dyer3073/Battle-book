// Qualifications, Schools & Certifications — transcribed from the two
// researched packs (~/workspace/military-app/quals/quals-recurring.md =
// Part A, 20 entries; quals-schools.md = Part B, ~55 entries + the
// 45-item NOT CONFIRMED register). The packs are the content source of
// truth: structure, official sourcing, ⚠ flags (printed visibly,
// never blended or silently resolved), gated standards printed as
// NOT PUBLICLY PUBLISHED, and exclusions are followed exactly.
//
// SWIM-ORDER RESOLUTION (verified at build time, outcome (a)):
// MARADMIN 084/26 was read directly on marines.mil — it announces
// MCO 1500.52E (02MAR2026), cancels MCO 1500.52D, and standardizes
// Basic (Recruit Training only) / Novice / Competent / Proficient /
// Advanced effective 1 Oct 2026. The E-system ships as CURRENT; the
// 1500.52D three-level system ships as labeled HISTORY. The per-level
// event details in §1.2 of the pack are officially-reported summaries
// (TECOM spokesman statements + TECOM's exit-skill page), NOT text
// read from MCO 1500.52E ch. 4 — labeled that way on the entry. The
// reported per-level validity figures (2/3/4/5 yrs) are NOT in the
// public MARADMIN and keep the pack's flag.
//
// Entry shape (every entry, per the packs): what it is · who can earn
// it · QUALIFICATIONS (prerequisites + published standards, attributed)
// · HOW TO EARN IT (route, location, length, currency/refresher as
// published) · badge/record cross-links (into Uniforms / Ribbons /
// Library / Weapons & Qualification / Medical / Spec Ops — never
// duplicated here). NO techniques, NO curricula, NO TTPs.

import type { RefLink } from "./refdata";

export type QualViewKey = "weapons" | "medical" | "uniforms" | "ribbons" | "specops" | "mos";

export type QualCrossLink = { label: string; view: QualViewKey };

export type QualEntry = {
  id: string;
  /**
   * Branch tag (Personalization build tagging pass, ux-reorg.md §C.1):
   * the service this entry's data belongs to, derived from the entry's
   * own name / who / source — never invented. "All" = universal or a
   * joint schoolhouse every service attends; an array = the entry
   * covers exactly those services (e.g. the AF+SF water finding).
   * Drives ONLY the section's My-branch view + search badging.
   */
  branch?: string | string[];
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  who: string;
  quals: string[];
  how: string[];
  flags: string[];
  links: RefLink[];
  source: string;
  badge?: string;
  crossLinks?: QualCrossLink[];
};

export type QualTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: QualEntry[];
};

export const QUALS_INTRO =
  "The qualifications you earn and keep current outside your MOS pipeline — swim and water-survival levels, what “tables” actually means in your service, underwater and vehicle egress, and the recurring currency quals — plus the schools and certifications members volunteer for: Airborne, dive, SERE, mountain, sniper, instructor certifications, and maritime quals, across all six branches. Every entry prints the qualifications and how to earn it exactly as the official source publishes them; conflicts print as ⚠ flags, never blended, and standards that live in gated or FOUO publications print as NOT PUBLICLY PUBLISHED — named-level existence and the route only.";

export const QUALS_STANDING =
  "Standing rules for this section: no techniques, no curricula, no TTPs — phases and events at named/summary level only, exactly as the packs carry them. Score bands live in Weapons & Qualification and are never duplicated here. Attrition prints only where a pack attributes an officially published figure. Anything that could not be confirmed on an official page sits in the NOT CONFIRMED register tile — rumors labeled rumors, never presented as a real school anywhere else in this section.";

/* ============================ SWIM & WATER ============================ */

const SWIM: QualTile = {
  key: "swim",
  label: "Swim & Water",
  tileSub: "Part A §1 · USMC 5 levels current · Navy classes · CWST · CG circuit",
  intro:
    "Service-wide swim and water-survival qualifications. The Marine Corps system changed on October 1, 2026 — the five-level MCO 1500.52E system is current and the old three-level system is history, labeled as such. The Army has no service-wide swim qualification and the Air Force / Space Force have none either — both findings print plainly.",
  entries: [
    {
      id: "usmc-mcwsp-current",
      branch: "Marine Corps",
      name: "USMC — Water Survival: the CURRENT five levels (MCO 1500.52E)",
      summary:
        "Marine Corps Water Survival Program (MCWSP), CURRENT under MCO 1500.52E / MARADMIN 084/26: Basic (Recruit Training only), Novice, Competent, Proficient, Advanced — effective October 1, 2026. Basic valid 365 days; Marines holding only Basic revert to Water Survival Unqualified on October 1, 2027. Recorded in MCTIMS; feeds JEPES/PES.",
      who: "All Marines. Novice is the post-recruit-training floor — a depot commanding general's waiver is required for any recruit who does not meet Water Survival Novice before graduation.",
      quals: [
        "Five standardized levels (MARADMIN 084/26, verbatim): Basic (Recruit Training only), Novice, Competent, Proficient, and Advanced — each above Basic has increased requirements in chapter 4 of MCO 1500.52E.",
        "FMF Marines and specific MOSs carry mandatory currency requirements under the order.",
        "General exemptions: senior officers (O-4+) and SNCOs (E-7+ with 13+ years of service) holding a current Proficient qualification, where requalification is not an MOS requirement.",
      ],
      how: [
        "Run by commanders and executed by Water Survival Instructors (WSI, MOS 0918 — see the MCIWS entry in this tile); qualification recorded in MCTIMS and integrated into JEPES/PES performance evaluation per MARADMIN 084/26.",
        "Currency (MARADMIN 084/26): Water Survival Basic is valid 365 days from recruit training. Existing qualifications under the old order remained current until their own expiration.",
        "Transition: Marines whose only qualification is Basic revert to Water Survival Unqualified on 1 Oct 2027. A Marine whose requalification date falls after 1 Oct 2026 must meet the new standard within 180 days of expiration or revert to Unqualified.",
        "Administrative counseling is required at 180 days unqualified (active duty) / 365 days (Reserve).",
      ],
      flags: [
        "Per-level validity periods for Novice / Competent / Proficient / Advanced (reported secondarily as 2 / 3 / 4 / 5 years) are NOT printed in the public MARADMIN text — do not treat them as the order's figures. See the reported-shape entry in this tile.",
      ],
      links: [
        { label: "MARADMIN 084/26 — marines.mil", url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=542&Article=4420747" },
        { label: "TECOM Force Fitness — Water Survival Program (MCO 1500.52E)", url: "https://www.fitness.marines.mil/Water-Survival/" },
      ],
      source: "MCO 1500.52E (2 Mar 2026) / MARADMIN 084/26 — read directly on marines.mil at build; MCPEL lists MCO 1500.52E “MARINE CORPS WATER SURVIVAL PROGRAM (MCWSP)”",
      badge: "Qualification recorded in MCTIMS — no badge. Instructor level: MCIWS / WSI (MOS 0918).",
    },
    {
      id: "usmc-levels-reported",
      branch: "Marine Corps",
      name: "USMC — What the five levels contain (officially reported shape)",
      summary:
        "The reported shape of Novice / Competent / Proficient / Advanced: 25 m / 150 m / 250 m self-rescue swims and a timed 500 m at Advanced, gear sheds, buddy assist — officially-reported summaries (TECOM spokesman statements + TECOM's exit-skill page), NOT text read from MCO 1500.52E chapter 4. Labeled accordingly.",
      who: "Marines preparing for a level assessment — read the flag first: the controlling document is MCO 1500.52E chapter 4.",
      quals: [
        "Novice (WSN) — 25 m swim assessment, platform entry, 50 m self-rescue with one survival stroke, 5 minutes of stay-at-surface technique (blouse inflation in the final minute), shallow-water gear shed, flotation-gear employment.",
        "Competent (WSC) — 150 m self-rescue with two strokes, 7 minutes treading with trouser inflation, shallow and deep-water gear shed.",
        "Proficient (WSP) — 250 m self-rescue with three strokes, 10 minutes stay-at-surface with blouse and trouser inflation, deep-water gear shed, buddy assist of an active victim.",
        "Advanced (WSA) — timed 500 m swim, all four survival strokes, passive and active rescues. Stroke counts per level (1/2/3/4) were confirmed by a TECOM spokesman in the reporting.",
      ],
      how: [
        "TECOM's public water-survival page hosts exit-skill videos for each level of the MCWSP, confirming the levels are assessed on exit skills per level.",
      ],
      flags: [
        "⚠ REPORTED SHAPE — these event details are carried as officially-reported summaries (Military.com's Jul 22, 2026 account of MCO 1500.52E and the TECOM statements quoted in it, plus TECOM's exit-skill page), NOT as text read from the order itself. MCO 1500.52E chapter 4 is the controlling document — re-verify against the order before treating any figure here as the standard.",
      ],
      links: [
        { label: "TECOM water-survival page — level exit-skill videos", url: "https://www.fitness.marines.mil/Water-Survival/?videoid=741381" },
      ],
      source: "TECOM spokesman statements + TECOM exit-skill page, as reported — NOT MCO 1500.52E ch. 4 text",
    },
    {
      id: "usmc-swim-history",
      branch: "Marine Corps",
      name: "HISTORY — USMC three-level system (MCO 1500.52D, cancelled Sep 30, 2026)",
      summary:
        "HISTORY — do not present as current: MCO 1500.52D (2010) ran three levels — Water Survival Basic, Intermediate, and Advanced — all Marines required to hold at least Basic. Cancelled by MCO 1500.52E effective October 1, 2026. Kept here only for reading older records.",
      who: "Anyone reading a pre-October 2026 record that shows Basic / Intermediate / Advanced.",
      quals: [
        "Three levels: Water Survival Basic, Intermediate, and Advanced; all Marines required to hold at least Basic.",
        "Published events at summary level (marines.mil / DVIDS coverage of the 1500.52D program): self-rescue swims in utilities with gear, the gear drop/shed while submerged, deep-water entry, and buddy tow at Advanced.",
      ],
      how: [
        "Currency under 1500.52D: Basic renewed every two years (DVIDS, Camp Lejeune MCWSTP coverage, 2020); Intermediate/Advanced were reported on a three-year cycle (secondary reporting; the order is cancelled in any case).",
      ],
      flags: [
        "HISTORY ONLY — this system was cancelled September 30, 2026. Any page describing Basic / Intermediate / Advanced describes the cancelled MCO 1500.52D.",
      ],
      links: [
        { label: "marines.mil — 2010 program announcement", url: "https://www.marines.mil/News/News-Display/Article/552969/new-water-survival-qualification-streamlines-training-enhances-individual-marine/" },
        { label: "MCIPAC — program change, 2010", url: "https://www.mcipac.marines.mil/Media-Room/News/Article/531189/water-survival-qual-changed/" },
      ],
      source: "MCO 1500.52D (2010) — CANCELLED; marines.mil / MCIPAC coverage",
    },
    {
      id: "mciws-wsi",
      branch: "Marine Corps",
      name: "MCIWS / WSI — Marine Combat Instructor of Water Survival (MOS 0918)",
      summary:
        "MCIWS — Marine Combat Instructor of Water Survival, the USMC water-survival instructor qualification. Current instructor MOS is 0918 per MARADMIN 084/26 (legacy additional MOS 8563 is a historical line only). Roughly three-week course (15–17 training days in official coverage); pre-screen includes a 500 m swim, 50 m brick tow/swim, and 25 m underwater swim. Recertification per NAVMC Form 11629.",
      who: "Marines nominated by an instructor/unit — minimum grade Corporal (waiverable to Lance Corporal with CO endorsement), per official coverage.",
      quals: [
        "Nomination by an instructor/unit; minimum grade Corporal (waiverable to Lance Corporal with CO endorsement).",
        "Current top-level swim qualification of the era; current ARC first aid/CPR.",
        "Pre-screen (official coverage): 500 m swim, 50 m brick tow/swim, and 25 m underwater swim.",
        "Course standards reported in official coverage include conditioning swims up to 1,900 m and ARC rescues with and without equipment; graduates are also ARC-certified lifeguards.",
      ],
      how: [
        "Marine Corps Water Survival School — a roughly three-week course (15–17 training days in official coverage) built on the American Red Cross lifeguarding framework.",
        "Recertification runs through a Marine Combat Instructor Trainer of Water Survival (MCITWS); under MARADMIN 084/26, expired WSIs recertify by updating the Red Cross certification and demonstrating instructor proficiency per NAVMC Form 11629.",
      ],
      flags: [
        "⚠ MOS NUMBER — 0918 is current (MARADMIN 084/26 refers to “Water Survival Instructors (WSI) who possess the 0918 MOS”); older official articles cite the additional MOS 8563. Print 0918 as current; 8563 is a legacy line only.",
        "⚠ F-2 LENGTH CONFLICT (Part B §10.3) — official sources give four figures by era/location: 17-day cycle (Miramar); 3 weeks (TECOM/Quantico/Marines TV); 5 weeks (Marines TV caption, Parris Island 2016); 6 weeks with a 3-week conditioning phase (older TECOM article). The current TBS Water Survival Program page does NOT publish an MCIWS length. Printed as a conflict — never harmonized.",
        "Attrition (officially published, attributed): Marines TV — “attrition rate can range from 20 to 50 percent.” One of only two attrition figures in this whole section.",
      ],
      links: [
        { label: "TECOM — MCIWS course coverage", url: "https://www.tecom.marines.mil/In-the-News/Stories/News-Article-Display/Article/527691/lance-corporal-conquers-swim-instructor-course/" },
        { label: "MCAS Miramar / 3rd MAW — MCIWS screening events", url: "https://www.3rdmaw.marines.mil/Media-Room/Stories/News-Article-Display/Article/602309/mcas-miramar-marines-conduct-mciws-beach-training/" },
      ],
      source: "MARADMIN 084/26 (MOS 0918; NAVMC Form 11629); TECOM / 3rd MAW official coverage; Part B §10.3",
      badge: "MOS 0918 (current). Legacy AMOS 8563 — historical line only. ARC lifeguard certification on graduation.",
    },
    {
      id: "navy-swimmer",
      branch: "Navy",
      name: "Navy — Swimmer qualifications, 3rd / 2nd / 1st Class (MILPERSMAN 1414-010)",
      summary:
        "Navy swimmer qualifications per MILPERSMAN 1414-010 (CNO N13): 3rd Class is the minimum entry-level requirement for ALL Navy personnel; 2nd Class is the entry-level requirement for small boat operators, Naval aircrewmen, and rescue swimmers; 1st Class certifies Navy swimming instructors. Standards framed as endurance and survival, “not for speed.”",
      who: "All Navy personnel (3rd Class minimum); 2nd Class for small boat operators, Naval aircrewmen, and rescue swimmers; 1st Class to certify swimming instructors.",
      quals: [
        "3rd Class Swimmer — “can stay afloat and survive without the use of a PFD in open water under optimum conditions long enough to be rescued in a man-overboard situation.” Test: Module One = deep-water jump (platform, minimum 8 ft of water beneath), 50-yard swim (any of the four survival strokes), and 5-minute prone float; Module Two = clothing (shirt and trouser) inflation. Modules need not be completed the same day; Module One precedes Module Two.",
        "2nd Class Swimmer — “can stay afloat and survive without the use of a PFD indefinitely under optimum conditions.” Test: deep-water jump + 100-yard swim, 25 yards each of crawl, breaststroke, sidestroke, and elementary backstroke. A passed 3rd Class test is required first.",
        "1st Class Swimmer — requires a current Red Cross or YMCA lifesaving/lifeguard certificate first, demonstrated proficiency in all four strokes, and a 25-yard underwater swim surfacing twice.",
      ],
      how: [
        "Administered at Recruit Training Command Great Lakes and in every accession pipeline; the system is set by MILPERSMAN 1414-010 (responsible office CNO N13).",
        "Currency (USNA description of the Navy standard): personnel below 2nd Class requalify annually; 2nd Class and above are exempt from further testing.",
        "SAR swimmer (named level + cross-link): the Aviation Rescue Swimmer pipeline builds on the 2nd Class qualification as its entry-level swim requirement — pipeline detail lives in Special Forces & Elite Units (AIRR); Surface Rescue Swimmer is a shipboard collateral-duty program under the same MILPERSMAN umbrella (see Scout Swimmer & Rescue tile).",
      ],
      flags: [
        "⚠ Fleet-wide currency language in the current MILPERSMAN 1414-010 revision was not re-read line-by-line in the research pass — the entry carries the accession-level statement (USNA) and routes fleet members to MILPERSMAN 1414-010. The 1414-010 text surfaced in compilations is dated 2002; the article's existence and office (CNO N13) are confirmed, revision currency is not.",
      ],
      links: [
        { label: "MILPERSMAN home — MyNavy HR", url: "https://www.mynavyhr.navy.mil/References/MILPERSMAN/" },
        { label: "RTC Great Lakes — accession swim training", url: "https://www.bootcamp.navy.mil/" },
      ],
      source: "MILPERSMAN 1414-010, Swimmer Training and Qualifications (CNO N13); USNA/NROTC official descriptions",
      crossLinks: [{ label: "Special Forces & Elite Units — AIRR pipeline", view: "specops" }],
    },
    {
      id: "army-cwst",
      branch: "Army",
      name: "Army — Combat Water Survival Test (CWST) / TC 21-21 — and the plain finding: NO service-wide Army swim qual",
      summary:
        "Finding: the Army has NO service-wide swim qualification and no swim requirement to graduate basic training. The standardized instrument is the Combat Water Survival Test (CWST), task 805P-COM-1141, IAW ATP 7-22.01 — three GO/NO-GO events, not timed, not scored. TC 21-21 classifies Class Three (Basic) / Class Two (Intermediate) / Class One (Advanced) swimmers.",
      who: "Soldiers in units expecting water operations; ROTC cadets take the CWST annually as a commissioning requirement (cadet variant events differ — see flag).",
      quals: [
        "CWST (805P-COM-1141), three events in sequence, GO/NO-GO, no restarts: (1) 15-meter swim with equipment and weapon; (2) 3-meter drop and pool exit; (3) equipment removal — all in ACUs with boots and an IOTV (no plates) and an M16/M4 training aid, in a pool (never open water). A pass = completing all three events without signs of panic or inability.",
        "TC 21-21 (Combat Water Survival Training) classifications: Class Three (Basic), Class Two (Intermediate), Class One (Advanced) swimmers; units expecting extensive water operations qualify Soldiers at higher classes.",
        "Certain courses (e.g., Sapper Leader Course) require a prior CWST attempt with the candidate's swim classification (strong / weak / non-swimmer) certified by the battalion commander — passing is not itself the Sapper prerequisite.",
      ],
      how: [
        "Water survival is a commander/unit program, not a gate. CWST administration requires an OIC/NCOIC, event supervisors, graders, and lifeguards per the task's safety requirements.",
        "Instructor level: the Army publishes NO MCIWS-equivalent service-wide instructor MOS — stated plainly rather than implying a parallel credential.",
      ],
      flags: [
        "⚠ CWST VARIANTS — the 805P-COM-1141 task (3 events, ATP 7-22.01) and the ROTC/Cadet Command CWST are different published instruments with the same name. This entry prints the active-duty task as the standard; do not merge the two event lists.",
        "⚠ TC 21-21 class names come from the TC as cited in official-adjacent coverage; TC 21-21's current edition status was not re-verified on an Army Publishing Directorate page in the research pass.",
      ],
      links: [
        { label: "Army Training Network — task 805P-COM-1141 metadata", url: "https://rdl.train.army.mil/catalog-ws/view/100.ATSC/7E9F516A-9116-4144-AAD4-A749E722081B-1617903693052/metadata.json" },
        { label: "Sapper Leader Course pamphlet (CWST prerequisite treatment)", url: "http://home.army.mil/wood/8417/7022/5279/Sapper_Pamphlet___NEW_2026.pdf" },
      ],
      source: "Task 805P-COM-1141 (U.S. Army Center for Initial Military Training), IAW ATP 7-22.01; TC 21-21",
    },
    {
      id: "af-sf-water",
      branch: ["Air Force", "Space Force"],
      name: "Air Force & Space Force — negative finding: water survival is a SERE/aircrew qual (DAFI 10-3004), 36-month refresher",
      summary:
        "Negative finding: neither the Air Force nor the Space Force publishes a general swimmer qualification for all members, and there is no swim test in BMT. Water survival in the DAF is a SERE-program qualification for aircrew and designated high-risk personnel under DAFI 10-3004 — Parachuting and Non-Parachuting Water Survival, refresher every 36 months. Guardians fall under the same DAF framework.",
      who: "Aircrew and designated high-risk personnel — personnel are not designated Mission Ready / Combat Mission Ready until Parachuting Water Survival is complete (ejection/bailout aircrew).",
      quals: [
        "DAFI 10-3004, Survival, Evasion, Resistance, and Escape Program (attendance Table 3.1, as amended by DAFGM2025-01, Sep 23, 2025): Parachuting Water Survival (mandatory for ejection/bailout aircrew) and Non-Parachuting Water Survival (for ditching-aircraft aircrew), with course codes in the SV-series (e.g., SS05 Water Survival Preparation in continuation training).",
        "The training includes underwater egress from a downed aircraft and the SWET chair (see the Egress tile).",
      ],
      how: [
        "Currency: refresher every 36 months — stated uniformly in official base coverage (“All U.S. Air Force aircrew are required to complete Water Survival Training every three years,” Altus AFB, 2026; 911th AW and JBPHH coverage concur), and the continuation-training table logs SS05 on a 36-month cycle.",
        "Space Force: Guardians fall under the same DAF SERE framework (DAFI 10-3004 is a Department of the Air Force publication); no separate USSF swim qualification is published — a negative finding, not an omission.",
      ],
      flags: [],
      links: [
        { label: "DAFI 10-3004 with DAFGM2025-01 (PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a3/publication/dafi10-3004/dafi10-3004.pdf" },
        { label: "Altus AFB — 36-month aircrew water-survival refresher (2026)", url: "https://www.altus.af.mil/News/Article-Display/Article/4546100/sere-team-strengthens-altus-afb-airmen-readiness/" },
      ],
      source: "DAFI 10-3004 (DAF SERE Program); Altus AFB official coverage",
    },
    {
      id: "cg-swim-circuit",
      branch: "Coast Guard",
      name: "Coast Guard — Recruit swim circuit (5-foot platform); no tiered swimmer classes published",
      summary:
        "Coast Guard recruit swim circuit at Training Center Cape May: jump from a 5-foot platform, swim 100 meters, tread water for 5 minutes — a graduation requirement, stated identically in CG recruiting eligibility material and GAO-25-107224. No published multi-class swimmer qualification system like the Navy's. Secondary sources split 5-foot vs 6-foot — 5-foot is primary, flagged.",
      who: "Every recruit at Training Center Cape May — the standard is a graduation requirement; recruits who fail enter remedial swim instruction.",
      quals: [
        "The swim circuit: jump from a 5-foot platform, swim 100 meters, and tread water for 5 minutes (Coast Guard recruiting eligibility material; confirmed in GAO-25-107224, May 2025, quoting the graduation expectation verbatim).",
        "Beyond accession: the service-wide fitness program (2025) offers a 12-minute swim as a PFT cardio option — PFT detail lives in the Fitness section, not here.",
        "Job-specific water qualifications (boat crew, aviation survival technician / rescue swimmer) are rating qualifications — see the Maritime and Scout Swimmer & Rescue tiles, not a fleet-wide swimmer class system.",
      ],
      how: ["Training Center Cape May accession training; remedial swim instruction for recruits who do not meet the circuit."],
      flags: [
        "⚠ PLATFORM HEIGHT SPLIT — secondary sources split between a “5-foot” and “6-foot” platform; the Coast Guard's published eligibility language and the GAO report say 5-foot. This entry prints 5-foot as primary with the conflict flagged, per the pack.",
      ],
      links: [
        { label: "GAO-25-107224 (swim circuit as graduation expectation)", url: "https://files.gao.gov/assets/gao-25-107224.pdf" },
        { label: "Go Coast Guard — recruit eligibility incl. swim circuit", url: "https://www.gocoastguard.com/" },
      ],
      source: "Go Coast Guard eligibility material; GAO-25-107224 (May 2025)",
    },
  ],
};

/* ========================== WEAPONS TABLES ========================== */

const WEAPONS_TABLES: QualTile = {
  key: "weapons-tables",
  label: "Weapons Tables",
  tileSub: "Part A §2 · What “tables” means per service · NO score bands here",
  intro:
    "Members hear “Table 1 through Table 6” and assume every service means the same thing. It does not: “tables” are (a) the Army's six-stage IWTS progression, (b) the Air Force's course-of-fire tables inside each AFQC, and (c) a retired Marine Corps course name. The Navy and Coast Guard do not use a table system at all. Score bands are NOT duplicated here — they live in Weapons & Qualification; use the cross-link on each card.",
  entries: [
    {
      id: "army-iwts",
      branch: "Army",
      name: "Army — IWTS Tables I–VI (TC 3-20.40): only Table VI produces the rating",
      summary:
        "Army Integrated Weapons Training Strategy (IWTS), TC 3-20.40: six gated tables for every individual weapon. Tables I–III are live-fire prerequisites (no live ammunition); Tables IV–VI are live-fire. Only Table VI — Qualification — produces the rating recorded in DTMS and the marksmanship badge. Scores: Weapons & Qualification section — no bands duplicated here.",
      who: "Every Soldier qualifying on an assigned individual weapon (rifle/carbine, pistol, automatic rifle, machine guns, shotguns, grenade launchers, etc.).",
      quals: [
        "Table I — Preliminary Marksmanship Instruction and Evaluation (PMI&E): classroom/hands-on fundamentals and safety for the specific weapon.",
        "Table II — Preliminary Live-Fire Simulations (PLFS): simulated engagements (Engagement Skills Trainer or equivalent) — single/multiple stationary targets, multiple positions, day and limited visibility, CBRN conditions, in simulation.",
        "Table III — Drills: repetitive weapons-handling and movement drills with the assigned weapon and equipment; must be completed before any live-fire event, including grouping.",
        "Table IV — Basic: first live fire — grouping and zero at 25 m (including zero confirmation at distance) on an approved range.",
        "Table V — Practice: full practice run of the qualification course of fire at full difficulty (described in doctrine summaries as deliberately harder than Table VI).",
        "Table VI — Qualification: the record course of fire — for rifle/carbine, 40 targets at 50–300 m from prone unsupported, prone supported, kneeling supported, and standing supported positions. This table, and only this table, produces the qualification rating.",
      ],
      how: [
        "Unit-run through the training year; a Soldier may not advance past a gate without completing it. The legacy pre-TC 3-20.40 qualification is no longer authorized and DTMS will not accept it (HQDA/USAR IWQ guidance).",
        "Currency: qualification currency and retraining intervals are set per weapon in TC 3-20.40 and unit training guidance — stated at structure level only (per-weapon currency figures were not uniformly published on open pages in the research pass).",
      ],
      flags: [
        "⚠ Per-weapon IWTS currency intervals were not uniformly published on open pages — structure only, per the pack.",
      ],
      links: [
        { label: "U.S. Army Reserve — IWQ update (TC 3-20.40, six tables)", url: "https://www.usar.army.mil/Portals/98/Documents/Marksmanship/Individual_Weapons_Qualification(IWQ)_update.pdf" },
        { label: "Cadet Command — Tab A, Table I–VI per TC 3-20.40 (M4)", url: "https://armyrotc.army.mil/wp-content/uploads/2026/05/Change-1-to-Tab-A-Advanced-Camp-Welcome-Letter-27APR.pdf" },
      ],
      source: "TC 3-20.40, Training and Qualification — Individual Weapons; USAR IWQ guidance",
      crossLinks: [{ label: "Weapons & Qualification — scores and bands live here", view: "weapons" }],
    },
    {
      id: "usmc-arq-cpp",
      branch: "Marine Corps",
      name: "USMC — Tables 1 & 2 are RETIRED for annual qualification; ARQ + CPP are current (MCO 3574.2M)",
      summary:
        "USMC marksmanship structure: Tables 1 and 2 were replaced as the annual qualification by the Annual Rifle Qualification (ARQ) effective October 1, 2021 — Tables 1/2 survive only as entry-level training at the MCRDs and The Basic School. ARQ is a three-day annual course of fire; the Combat Pistol Program (CPP) is the annual pistol qualification. Instructor MOSs: CMT 0931, CMC 0933. Bands: Weapons & Qualification — none duplicated here.",
      who: "All Marines (ARQ, annual — marksmanship year = fiscal year, 1 Oct–30 Sep, per MCO 3574.2M); CPP for Marines assigned a pistol (certain MOSs, officers, SNCOs — not every Marine).",
      quals: [
        "ARQ structure (TECOM): a three-day course of fire (vice the old two-week annual rifle training block) — Day 1 “holds” day with drills first; Days 2–3 pre-qualification and qualification, scored on destroy engagements against lethal-zone targets (stationary, multiple, limited-exposure, and moving targets, in combat gear, far-to-near). Qualification requires meeting a minimum standard in each portion of the course, not just a total.",
        "CPP structure: training organized in tables/blocks — published program descriptions describe Tables 1–5 of CPP as teaching basic pistol skills, with live-fire training blocks 1–3 under Combat Marksmanship Coaches; qualification is fired on the MPMS-1 combat target from the holster in the early stages.",
        "Instructor/record structure: Combat Marksmanship Trainer (CMT), MOS 0931, and Combat Marksmanship Coach (CMC), MOS 0933 (MCO 3574.2M) — see the Instructor Certifications tile for the certification entries.",
      ],
      how: [
        "ARQ fully replaced Tables 1 and 2 as the annual sustainment qualification effective October 1, 2021 for active-duty forces (Reserve implementation completed FY22), per MARADMIN 082/21 and the TECOM ARQ implementation program. Sponsor: CG TECOM; proponent: CO, Weapons Training Battalion Quantico.",
        "A Marine whose record shows “Table 1/Table 2” after FY22 is showing entry-level training, not the annual qual.",
        "Current-order updates (FY26 Combat Marksmanship Symposium MARADMIN): unit-funded M17 red-dot optics and unit-issued Glock pistols (e.g., MARSOC, MCESG) are now authorized for CPP qualification.",
      ],
      flags: [
        "⚠ MCO 3574.2M link below is a third-party mirror of the official order — re-verify against the Marine Corps publications library. (Structural facts are TECOM's, as cited.)",
      ],
      links: [
        { label: "TECOM — Annual Rifle Qualification", url: "https://www.tecom.marines.mil/Resources/Annual-Rifle-Qualification/" },
        { label: "marines.mil — The Marine Corps Combat Pistol Program", url: "https://www.marines.mil/News/News-Display/Article/1663204/the-marine-corps-combat-pistol-program" },
        { label: "MCO 3574.2M (official text; third-party mirror ⚠)", url: "https://cdn.corpsguide.com/documents/MCO%203574.2M.pdf" },
      ],
      source: "MCO 3574.2M (6 Apr 2022); MARADMIN 082/21; TECOM ARQ page",
      crossLinks: [{ label: "Weapons & Qualification — ARQ/CPP bands live here", view: "weapons" }],
    },
    {
      id: "navy-small-arms",
      branch: "Navy",
      name: "Navy — No tables: category-based qualification (OPNAVINST 3591.1)",
      summary:
        "Navy small-arms qualification under OPNAVINST 3591.1 (current revision G): Categories I–IV by arming requirement instead of tables; live-fire qualification annually plus mandatory semi-annual sustainment training. Recorded on OPNAV 3591/1. Instructor: Small Arms Marksmanship Instructor (SAMI). Awards: Weapons & Qualification / Ribbons — cross-linked, not duplicated.",
      who: "Armed Navy personnel, sorted into Categories I–IV by arming requirement (from personal-protection pistol carriers through special-mission personnel).",
      quals: [
        "Per-category qualification courses for pistol, rifle, shotgun, and crew-served weapons, with enclosures for each weapon's criteria (OPNAVINST 3591.1).",
        "Marksmanship, safety, and weapons-familiarization instruction must precede qualification and be no more than 30 days before live fire.",
        "The instructor qualification is the Small Arms Marksmanship Instructor (SAMI); SAMIs qualify semi-annually on the weapons they instruct.",
      ],
      how: [
        "Currency: live-fire qualification annually (every 12 months; qualification expires the last day of the qualifying month), plus mandatory semi-annual sustainment training (between 120 and 240 days after qualification) covering fundamentals, safety, handling, and malfunction procedures, by live or simulator fire.",
        "Qualification is recorded on the OPNAV 3591/1 Small Arms Firing Record, routed via the RSO to the commanding officer.",
        "Diving and special-warfare communities qualify under additional community instructions — named level only here.",
      ],
      flags: [
        "⚠ REVISION — current revision is G; the full text read in the research pass was the F revision. Structural facts (categories, annual qual + semiannual sustainment, SAMI, OPNAV 3591/1) are consistent across F→G summaries; verify G text against the issuance at need.",
      ],
      links: [
        { label: "OPNAVINST 3591.1F text (⚠ F shown; current revision is G)", url: "https://govtribe.com/file/government-file/n6134019r0138-n6134019r0138-opnavinst-3591-1f-dot-pdf" },
        { label: "MyNavy HR — issuance home", url: "https://www.mynavyhr.navy.mil/" },
      ],
      source: "OPNAVINST 3591.1 (current revision G)",
      crossLinks: [
        { label: "Weapons & Qualification — Navy courses and awards", view: "weapons" },
        { label: "Ribbons — marksmanship ribbons and Expert medals", view: "ribbons" },
      ],
    },
    {
      id: "af-afqc",
      branch: ["Air Force", "Space Force"],
      name: "Air Force & Space Force — AFQC “tables” are phases inside each course (DAFMAN 31-131 Vol. 2)",
      summary:
        "DAF weapons qualification through the CATM program (DAFI 31-131 + DAFMAN 31-131 Vol. 2): each weapon has an Air Force Qualification Course (AFQC), and inside it the course of fire is itself divided into Tables — a third meaning of “table.” Statuses recorded in ARIS on DAF Form 522 as UQ / Q / E. Expert record produces the Small Arms Expert Marksmanship Ribbon (SAEMR). Guardians qualify under the same DAF CATM framework.",
      who: "Airmen (and Guardians) whose duties require a weapon, per the CATM program; accessions fire the Air Force Basic Qualification Course (AFBQC).",
      quals: [
        "Rifle/Carbine AFQC Tables I–IV (including a Table IV “Discreet Weapon Marksmanship”); the AFBQC fired by accessions has its own Table I Basic Marksmanship with a practice phase and a qualification phase.",
        "Statuses: UQ / Q / E, recorded in ARIS on DAF Form 522.",
      ],
      how: [
        "Currency structure: initial live-fire qualification, recurring qualification, and sustainment/mechanical/proficiency training on frequencies set per weapon in DAFMAN 31-131 V2 (e.g., M2A1/Mk 19/M240B gunners complete mechanical training 5–7 months after live-fire qualification; Advanced Designated Marksmen qualify twice a year with sustainment twice a year); qualifications remain valid through a deployment.",
        "Space Force: Guardians qualify under the same DAF CATM framework (some MAJCOM supplements expressly exclude USSF from their local sustainment programs — the DAF-level program is the safe statement).",
      ],
      flags: [
        "⚠ DAF-level statement only for Space Force — at least one MAJCOM supplement expressly states it “does not apply to the United States Space Force” for its local sustainment program.",
      ],
      links: [
        { label: "DAFMAN 31-131 Vol. 2 (PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafman31-131v2/dafman31-131v2.pdf" },
        { label: "DAFI 31-131 — CATM program (PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafi31-131/dafi31-131.pdf" },
      ],
      source: "DAFMAN 31-131 Vol. 2 (17 Jun 2025, as amended by DAFGM2026-01); DAFI 31-131",
      crossLinks: [{ label: "Ribbons — Small Arms Expert Marksmanship Ribbon", view: "ribbons" }],
    },
    {
      id: "cg-weapons-fte",
      branch: "Coast Guard",
      name: "Coast Guard — FT&E under COMDTINST M8000.2: scores NOT PUBLICLY PUBLISHED (FOUO)",
      summary:
        "Coast Guard weapons qualification under the Ordnance Manual, COMDTINST M8000.2 (series) — the manual is FOUO, so course scores and full criteria are NOT PUBLICLY PUBLISHED: named-level existence + route only, no numbers anywhere in this entry. Firearms Training and Evaluation – Pistol (FT&E-P) replaced the Basic and Practical Pistol Courses in January 2025, administered by Firearms Instructors (FAIs) with Firearms Marksmanship Coaches (FMCs).",
      who: "Coast Guard members in billets requiring armed duties; Level II shooters (billets routinely requiring armed law-enforcement/port-security duties) on the practical-course cadence described below.",
      quals: [
        "NOT PUBLICLY PUBLISHED — COMDTINST M8000.2 is FOUO: no scores, course tables, or criteria from it are printed anywhere in this section. Awards (Expert medallions and marksmanship ribbons per COMDTINST M1650.25E) are for specified scores on prescribed courses — scores themselves per M8000.2, not public; see Ribbons.",
        "Publicly documented structure (DVIDS/MyCG official coverage): qualification historically ran as Basic courses (fired every two years after initial qualification) and Practical courses, with Level II shooters qualifying every six months on practical courses — that cadence is from dated unit material describing the structure the FT&E program is replacing (see flag).",
      ],
      how: [
        "FT&E-P (January 2025, permanently replacing the Basic Pistol Course and Practical Pistol Course): classroom pistol fundamentals plus a crawl-walk-run range progression (200 rounds of practical application; only the final 50 shots scored), administered by Firearms Instructors (FAIs) with qualified Firearms Marksmanship Coaches (FMCs) at a 1:4 ratio, consuming roughly two days of drills twice a year.",
        "A Practical Rifle course structure exists alongside. The service weapon transitioned to the Glock 19 (Pistol Qualification Course required before transition, per armory guidance).",
      ],
      flags: [
        "⚠ FOUO — COMDTINST M8000.2 criteria are NOT PUBLICLY PUBLISHED and are never reproduced here or filled from secondary sources. The FT&E-P structure above is from official DVIDS reporting (Jan 2025).",
        "⚠ The “basic every 2 years / Level II practical every 6 months” cadence is from dated PSU unit material (2006) describing M8000.2C — labeled as the historical structure the FT&E program is replacing.",
      ],
      links: [
        { label: "DVIDS — FT&E-P replacing BPC/PPC (FAI/FMC structure)", url: "https://www.dvidshub.net/news/printable/314193" },
        { label: "MyCG — marksmanship program", url: "https://www.mycg.uscg.mil/News/Article/3831515/four-coast-guard-marksmen-take-part-in-dhs-firearms-competition/" },
        { label: "FORCECOM SMTC — Precision Marksmanship Core (named level)", url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/SMTC/Training/Precision-Marksmanship-Core-PMC/" },
      ],
      source: "COMDTINST M8000.2 (series) — FOUO, named level only; DVIDS / MyCG official coverage of FT&E-P",
      crossLinks: [{ label: "Ribbons — CG marksmanship awards", view: "ribbons" }],
    },
  ],
};

/* =============================== EGRESS =============================== */

const EGRESS: QualTile = {
  key: "egress",
  label: "Egress",
  tileSub: "Part A §3 · UET · helo dunker (METS/MAET) · HEAT/MET",
  intro:
    "“UET” (Underwater Egress Training) is the Marine Corps' umbrella term; the Navy runs the same devices through its Naval Aviation Survival Training Program at Aviation Survival Training Centers (ASTCs); the Air Force folds underwater egress into SERE water survival; the Army's signature egress training is dry — vehicle rollover trainers. The devices recur under two naming families the app must not merge: the METS® family (Navy name for the dunker) and the USMC MAET. Searching “helo dunker” lands here.",
  entries: [
    {
      id: "egress-devices",
      branch: "All",
      name: "The device family — SWET / METS (the “helo dunker”) / MAET / SVET / MUET / DRET (HEAT & MET)",
      summary:
        "Egress device family disambiguated: SWET = Shallow Water Egress Trainer (the chair, first step); METS = Modular Egress Training Simulator — NAVAIR's name for the helo dunker; MAET = Modular Amphibious Egress Trainer, the USMC variant; SVET = Submerged Vehicle Egress Trainer; MUET = Multi-Use Egress Trainer; DRET = Dry Rollover Egress Training (the legacy family incl. HEAT and MET). Searching “helo dunker” lands here.",
      who: "Anyone trying to tell the trainers apart — aircrew, embarked passengers, and vehicle crews train on different devices in this family.",
      quals: [
        "SWET — Shallow Water Egress Trainer: a chair/seat device used in shallow water to teach the egress sequence before any submerged trainer. Used by USMC (first step of the UET continuum), Navy ASTCs, and USAF SERE (the “SWET chair”).",
        "METS — Modular Egress Training Simulator (Navy/NAVAIR): “Also known as the Helo Dunker” (NAVAIR's own words) — a multi-place aircraft cabin lowered into a pool and inverted, configurable to aircraft type with replica escape exits.",
        "MAET — Modular Amphibious Egress Trainer (USMC): the Marine Corps' modular device “designed to train Marines to egress a downed aircraft” (DoN budget justification), sited at Marine Corps water-survival/UET facilities (verified in official imagery at MCB Camp Pendleton); the submerged end-state of the USMC continuum.",
        "SVET — Submerged Vehicle Egress Trainer (USMC): egress from submerged ground tactical vehicles (budget text: “designed to train egress from ground tactical vehicles”).",
        "MUET — Multi-Use Egress Trainer (USMC): the successor device line in the Family of Egress Trainers (FET) procurement — named in the PB2025/PB2026 justifications and in MARADMIN 084/26's continuum.",
        "DRET — Dry Rollover Egress Training (USMC legacy family): comprises the HEAT (HMMWV Egress Trainer), MET (MRAP Egress Trainer), and JET (JLTV Egress Trainer) per the PB2025 justification.",
      ],
      how: [
        "Named level only — this entry disambiguates the devices; the service entries in this tile carry who trains, where, and on what cycle.",
      ],
      flags: [
        "⚠ SVET vehicle configurations (AAV / HMMWV) trace to the OEM/vendor listing — the pack prints the vehicle-agnostic budget wording; the vendor detail is not carried as fact here.",
      ],
      links: [
        { label: "NAVAIR — METS Trainer (“Helo Dunker”) product page", url: "https://www.navair.navy.mil/product/Modular-Egress-Training-Simulator-METS-Trainer" },
        { label: "DoN PB2026 budget justification, LI 6532 — Family of Egress Trainers (⚠ hosted off-domain)", url: "https://gemini-custom-report.s3.amazonaws.com/2026/PROC_NAVY_6532.pdf" },
      ],
      source: "NAVAIR METS product page; DoN PB2026 budget justification LI 6532 (Department of the Navy's own definitions)",
    },
    {
      id: "usmc-uet",
      branch: "Marine Corps",
      name: "USMC — The UET continuum and its currency (MCO 1500.52E / MARADMIN 084/26)",
      summary:
        "USMC Underwater Egress Training (UET) under MCO 1500.52E / MARADMIN 084/26: a current water survival qualification (including the 365-day validity of recruit-training Basic) is a prerequisite for ALL UET; the progressive continuum runs SWET → SVET → MUET → MAET; UET qualification is valid four years; requalification window 180 days after expiry; scheduling through RFMSS.",
      who: "Marines whose platforms put them over water — aircrew and embarked/passenger Marines on aircraft and amphibious/ground platforms covered by the continuum (the FET program is expressly “directed toward non-aircrew passengers aboard these vehicles” as well as crews, per the budget justification).",
      quals: [
        "Prerequisite (MARADMIN 084/26): a current water survival qualification — including the 365-day validity of recruit-training Basic — is a prerequisite for ALL UET. See the Swim & Water tile for the current five levels.",
        "The progressive UET continuum across platforms: SWET → SVET → MUET → MAET.",
      ],
      how: [
        "UET qualification is valid for four years (MARADMIN 084/26). All pool training tank and UET scheduling runs through RFMSS.",
        "Prior-system note: before 1500.52E, UET sat in separate guidance and MAET training was administered at installation water-survival centers on a refresher cycle that public sources did not uniformly state — the 4-year figure prints as current from 084/26 and is not back-projected.",
      ],
      flags: [],
      links: [
        { label: "MARADMIN 084/26 §3.e — prerequisite, continuum, 4-year validity, RFMSS", url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=542&Article=4420747" },
      ],
      source: "MCO 1500.52E / MARADMIN 084/26 §3.e — read directly on marines.mil at build",
    },
    {
      id: "navy-astc",
      branch: "All",
      name: "Navy (and joint) — Naval Aviation Survival Training at ASTCs",
      summary:
        "Naval Aviation Survival Training Program at Aviation Survival Training Centers (ASTCs) under the Naval Survival Training Institute: initial course 3 days, refresher course 2 days, refresher required every four years. The underwater-egress (“dunker”/METS) module is the rotary-wing/aircrew component. Army and other-service aviators also attend ASTCs.",
      who: "Naval aircrew — Navy and Marine Corps pilots and aircrew whose jobs require them to fly — plus other-service aviators by arrangement through the ASTC.",
      quals: [
        "The underwater-egress (METS dunker) module is the rotary-wing/aircrew component; fixed-wing classes train their own survival equipment set instead.",
      ],
      how: [
        "Initial course 3 days; refresher course 2 days; refresher required every four years (ASTC Cherry Point coverage is the model public description).",
        "ASTCs are a directorate of the Naval Survival Training Institute (NAS Pensacola is the training agent). The route for non-naval aircrew is through the ASTC, by arrangement (e.g., Virginia Army National Guard aviators completing SWET + METS at ASTC Norfolk).",
      ],
      flags: [
        "⚠ Published ASTC locations at named level include Norfolk, Pensacola, Cherry Point, Jacksonville, Patuxent River, and San Diego/Lemoore/Miramar-area centers — the site list is compiled from ASTC public pages of varying dates; verify per-site before relying on a location.",
      ],
      links: [
        { label: "DVIDS — ASTC Cherry Point (3-day initial / 2-day refresher / 4-year cycle)", url: "https://www.dvidshub.net/news/printable/97441" },
        { label: "National Guard — Virginia Guard aviators at ASTC Norfolk (SWET → METS)", url: "https://www.nationalguard.mil/News/Article-View/Article/573914/virginia-guard-aviators-train-under-water-with-us-navy/" },
      ],
      source: "Naval Aviation Survival Training Program / NSTI; DVIDS ASTC Cherry Point coverage",
    },
    {
      id: "army-heat-met",
      branch: "Army",
      name: "Army — Rollover egress: HEAT and MRAP MET (dry trainers)",
      summary:
        "Army HEAT — HMMWV Egress Assistance Trainer — and the MRAP Egress Trainer (MET): dry rollover trainers run through installation Training Support Centers. The “annual refresher” figure is flagged as CFLCC theater-era, not a current Army-wide cycle — no current Army-wide HEAT currency interval is published. The Army has no service-wide underwater-egress program; Army aviators go to Navy ASTCs.",
      who: "Vehicle crews and passengers — historically mandated pre-deployment (see flag on the currency figure).",
      quals: [
        "HEAT: a HMMWV cab on a platform that rotates a full 360°, letting crews rehearse rollover reaction and egress from multiple stopped angles under instructor/operators. Created in 2005 by an Army safety team to cut rollover fatalities and fielded Army-wide from 2007 (PEO STRI; produced at Red River Army Depot).",
        "MET: the MRAP counterpart — same concept for MRAP variants, also usable for dry-land and water rollover familiarization (Fort Indiantown Gap TSC description).",
        "Instructor/operator certification classes exist (e.g., Fort Novosel's TSC page); unit training is scheduled through the TSC.",
      ],
      how: [
        "Installations run HEAT through their Training Support Centers; schedule through the TSC.",
        "Currency: NO current Army-wide HEAT currency interval is published on open pages — flagged, not invented (see flag). Army aviators who need dunker training go to Navy ASTCs (previous entry).",
      ],
      flags: [
        "⚠ “ANNUAL REFRESHER” — that currency figure is from in-theater CFLCC-era regulation for deployed crewmembers and selected passengers. Print as a historical mandate, not a current Army-wide cycle.",
        "⚠ Name variant: HEAT is also expanded “Humvee Egress Assistance Trainer” in early Army coverage — one device; this entry uses the HMMWV expansion and notes the variant.",
      ],
      links: [
        { label: "Fort Novosel TSC — HEAT page", url: "https://home.army.mil/rucker/about/garrison/dptms/training/tsc/simulators/heat" },
        { label: "Fort Indiantown Gap TSC — MRAP MET and HEAT", url: "https://www.ftig.ng.mil/Training/Simulations/Virtual-Simulations/" },
        { label: "army.mil — HEAT fielding history (2005 creation; 2007 fielding)", url: "https://www.army.mil/article-amp/2598/armys_first_standard_humvee_egress_trainer_prepares_soldiers_for_rollovers" },
      ],
      source: "PEO STRI / installation TSC pages; army.mil fielding history",
    },
    {
      id: "af-cg-egress",
      branch: ["Air Force", "Space Force", "Coast Guard"],
      name: "Air Force / Space Force / Coast Guard — egress at named level",
      summary:
        "Egress at named level for the remaining services: Air Force underwater egress is trained inside SERE water survival (SWET chair, HEED bottle) on the 36-month refresher cycle — no separate AF “UET qualification” is published (negative finding). Space Force: no organic aviation egress program (negative finding). Coast Guard aviation survival training is documented at the AST/rescue-swimmer level — cross-linked; no separate CG-wide egress qualification is published.",
      who: "DAF aircrew in flying billets (SERE water survival); CG aircrew through the AST/rescue-swimmer channels named in the cross-links.",
      quals: [
        "Air Force: rotary-wing aircrew train with the SWET chair and helicopter emergency egress devices (HEED bottle named in 908th FTW official coverage) during the 36-month SERE water-survival refresher cycle.",
        "Space Force: Guardians in flying billets follow the DAF framework.",
        "Coast Guard: aviation survival training for CG aircrew (including underwater egress at the Aviation Training Center Mobile / through naval ASTC channels for some pipelines) is documented at the AST/rescue-swimmer level in the schools pack.",
      ],
      how: ["Named level only, per the pack — routes live in the SERE tile (DAF) and the Maritime / Scout Swimmer & Rescue tiles (CG)."],
      flags: [
        "⚠ Coast Guard egress is flagged PARTIALLY VERIFIED in the pack — no separate CG-wide egress qualification is published; do not read one into this entry.",
      ],
      links: [],
      source: "Part A §3.5 (908th FTW coverage; DAFI 10-3004 framework; Part B AST material)",
    },
  ],
};

/* ======================== OTHER RECURRING QUALS ======================== */

const RECURRING: QualTile = {
  key: "recurring",
  label: "Other Recurring Quals",
  tileSub: "Part A §4 · CBRN · driver · OIC/RSO · language · CLS cross-link",
  intro:
    "The recurring and currency qualifications that don't fit the first three tiles: CBRN mask confidence (with the 2025–26 policy churn dated and flagged), Combat Lifesaver / TCCC as a cross-link ONLY to the Medical section (zero duplication), military driver's license qualifications on the joint OF 346 spine, range-safety OIC/RSO certification at named level, language testing and FLPB structure, and the service-unique index.",
  entries: [
    {
      id: "cbrn",
      branch: "All",
      name: "CBRN — Mask confidence / chamber training and the 2025–2026 policy churn (dated, flagged)",
      summary:
        "CBRN mask confidence / gas chamber currency by service, date-stamped: the Army's long-standing annual requirement was relieved in 2025 (flagged); USMC annual gas chamber remains the published unit standard; the DAF's 2026 program adds an annual CBRN Defense Foundations Course + in-person mask validation for all Airmen and Guardians by Dec 31, 2026 (flagged). Navy and Coast Guard: no single public annual standard verified.",
      who: "Every service member (initial-entry chamber training); the recurring requirement is service-specific — read your service's line and its flag.",
      quals: [
        "Army: mask confidence chamber training was a long-standing annual requirement for all Soldiers (“Every Soldier in the Army must demonstrate the ability to quickly and correctly use CBRN protective gear at least once a year” — army.mil unit coverage). See the flag for the 2025 change.",
        "USMC: annual gas chamber / mask confidence training remains the published unit standard (MCBH coverage: “The gas chamber is required to complete annual training for the fiscal year,” run by the battalion CBRN chief).",
        "Air Force / Space Force (2026 program): (1) the CBRN Defense Foundations Course (annual, web-based, via DAF e-Learning) and (2) in-person mask validation (negative-pressure check) with the unit mask fit validation monitor — both mandated for all Airmen and Guardians by Dec 31, 2026, transitioning to annual requirements thereafter (see flag).",
        "Navy: chamber/mask confidence in accession pipelines; recurring fleet requirement at command level — no single public annual standard verified in this pass.",
        "Coast Guard: CBRN training exists at unit level; no service-wide published chamber currency verified.",
        "MOS-specific CBRN certifications (named level only): Army 74D CBRN Specialist (Library cross-link); unit CBRN NCO/defense courses run by the U.S. Army CBRN School (Fort Leonard Wood); joint live-agent training at Fort Leonard Wood is in the Army Sweep & Joint tile.",
      ],
      how: [
        "This entry is about the qualification's existence and currency — never what happens inside the chamber beyond “mask confidence.” Route: your unit's CBRN program and current service guidance.",
      ],
      flags: [
        "⚠ ARMY 2025 CHANGE — in 2025 the Army relieved commanders of the requirement to conduct annual chemical training (analyzed in the Army Chemical Review, the branch journal hosted at home.army.mil). The annual requirement prints as SUPERSEDED by the 2025 policy change; the underlying directive (ALARACT/EXORD number) was not captured — route Soldiers to current unit guidance and do not present “annual” as the standing Army rule without this flag.",
        "⚠ DAF 2026 REQUIREMENTS rest on DAF official statements as reported by Air Force Times (Aug 28, 2026) — the DAF CBRN Defense Program guidance memorandum itself was not opened in the research pass; re-verify against it.",
        "⚠ USMC and Navy also announced annual gas mask fit training beginning end of August 2026 — trade-press reporting of service announcements; verify against MARADMIN/NAVADMIN.",
      ],
      links: [
        { label: "army.mil — annual CBRN training as historically required (2021)", url: "https://www.army.mil/article/244950/military_police_don_gas_masks_for_annual_training" },
        { label: "Army Chemical Review — the 2025 policy change (home.army.mil)", url: "https://home.army.mil/wood/8717/8155/0453/ACR26001_Jahrsdoerfer_LongLastingEffects.pdf" },
        { label: "DVIDS — USMC annual gas chamber (3rd Radio Bn, MCBH)", url: "https://www.dvidshub.net/news/printable/123136" },
      ],
      source: "Part A §4.1 — army.mil; Army Chemical Review; DVIDS; DAF statements as flagged",
      crossLinks: [{ label: "MOS Library — 74D and CBRN jobs", view: "mos" }],
    },
    {
      id: "cls-tccc-xlink",
      branch: "All",
      name: "Combat Lifesaver / TCCC tiers — CROSS-LINK ONLY to Medical (zero duplication)",
      summary:
        "CLS / TCCC cross-link ONLY: TCCC's four tiers (Tier 1 ASM — all members; Tier 2 CLS; Tier 3 CMC; Tier 4 CPP) and their currency are built in full in the Medical Training & Certs section. This entry deliberately carries no duplicate tier content — open Medical for the tiers, the DoDI 1322.24 mandate, and the Tier 4 status flag recorded there.",
      who: "Everyone (Tier 1); designated non-medical personnel (Tier 2 CLS) — full detail in Medical.",
      quals: [
        "Index framing only (one line per service, per the pack): Army CLS descends from the Army's original Combat Lifesaver Course (unit-designated non-medical Soldiers); Navy/USMC implement Tier 2 for designated non-medical personnel; DAF implements per its DHA plan.",
      ],
      how: ["Route: the Medical Training & Certs section's TCCC entries — use the button below. Nothing beyond structure belongs to this pack."],
      flags: [],
      links: [],
      source: "Part A §4.2 — cross-link by design; Medical pack §1 owns the content",
      crossLinks: [{ label: "Medical Training & Certs — TCCC tiers in full", view: "medical" }],
    },
    {
      id: "driver-license",
      branch: "All",
      name: "Military driver's license qualifications — the joint OF 346 spine (Army AR 600-55 in depth)",
      summary:
        "Military driver licensing on the joint spine: the OF Form 346, U.S. Government Motor Vehicle Operator's Identification Card, backed by a qualification record — a unit-level selection → training → testing → licensing process, not a central schoolhouse. Army in depth under AR 600-55 (OF 346 / DA Form 348; sustainment at least annually); USMC/Navy/DAF/CG at structure level, labeled as such.",
      who: "Anyone licensed to operate government vehicles or equipment, by vehicle/equipment type annotated on the OF 346.",
      quals: [
        "Army — AR 600-55 (current edition 17 Sep 2019): selection (interview, records/NDR check), training per the TC 21-305 series (TC 21-305 = accident avoidance; TC 21-305-20/-4/-11 etc. = per-vehicle programs; TC 21-306 = tracked vehicles), testing (incl. the driver performance test), and licensing.",
        "Army credentials: OF 346 (or GCSS-Army DA Form 5984-E) + qualification record DA Form 348; permit types include learner (90-day), limited (1-year), and standard permits (expire with the state license or 5 years). Off-post operation additionally requires a valid state driver's license.",
        "USMC: Motor Transport licensing under the OF 346 system, run through unit licensing NCOs and installation licensing offices; vehicle-specific qualifications by platform (HMMWV, MTVR, JLTV families) — structure + OF 346 spine only (see flag).",
        "Navy: command-level licensing on the OF 346 spine; specialized operator qualifications (e.g., ordnance-handling MHE) sit in their own program instructions — named level only.",
        "Air Force / Space Force: government vehicle operation under the DAF ground-transportation program with licensing recorded in the operator record system; per-vehicle qualification by the unit — named level only. One published fact worth its line: TC 21-305-20 is dual-designated AFMAN 24-306(I).",
        "Coast Guard: unit-issued government vehicle authorization on the same federal spine; boat crew qualifications are rating/qualification-system credentials (Boat Forces program), not driver licensing — see the Maritime tile.",
      ],
      how: [
        "Army sustainment training at least annually (every 2 years for USAR/ARNG) for OF 346 holders, annotated on DA Form 348. License examiners and master drivers are unit-appointed qualifications under AR 600-55 (named level).",
        "Route: your unit licensing NCO / installation licensing office — licensing is a unit-level process run by commanders in every service.",
      ],
      flags: [
        "⚠ Only the Army program (AR 600-55) was verified to instruction level in the research pass; USMC/Navy/DAF/CG entries are structure-level on the shared OF 346 spine and are labeled as such. USMC service instruction detail (MCO 11240-series) was not re-verified on an open official page.",
      ],
      links: [
        { label: "USAG Hawaii Policy Memo USAG-HI-14 (AR 600-55 phases, OF 346 / DA 348)", url: "https://home.army.mil/hawaii/application/files/6416/2199/6886/USAG-HI-14_VEHICLE_OPDRIVER_TRNG2021_Signed_17_May_21.pdf" },
        { label: "Fort Lewis Regulation 600-55 (program structure, TC 21-305 series)", url: "https://home.army.mil/lewis-mcchord/application/files/7215/5415/5992/FLReg600-55.pdf" },
      ],
      source: "AR 600-55 (17 Sep 2019); OF Form 346 joint spine; Part A §4.3",
    },
    {
      id: "oic-rso",
      branch: "All",
      name: "Range-safety certifications: OIC / RSO (named level — no single joint RSO school)",
      summary:
        "OIC / RSO range-safety certification at named level: there is NO single joint RSO school — certification is a program under AR 385-63 / DA PAM 385-63 (dual-referenced with MCO 5104.1). The unit commander certifies OICs and RSOs in writing after a unit range safety certification program; the installation then requires its own brief/exam. The OIC/RSO card is commonly valid one year, installation-set. The formal schoolhouse course is the Army/Marine Corps Inter-Service Range Safety Course (Intermediate).",
      who: "Personnel appointed to run live-fire ranges — OICs and RSOs must be weapon-system qualified for the systems firing; minimum grades apply (installation guides publish e.g. E-5+ for the Fort Knox brief; grade floors are set in DA PAM 385-63 and local regulation — structure, not a universal grade).",
      quals: [
        "Appointment: the unit commander certifies OICs and RSOs in writing (certification memorandum naming the person and the weapon systems) after a unit range safety certification program; the installation then requires its own range safety brief/exam from Range Operations/Range Control before the card is honored.",
        "Formal course (named level): the Army/Marine Corps Inter-Service Range Safety Course (Intermediate) is the formal schoolhouse course named in AR 385-63 for personnel involved in live-fire training — the closest thing to a joint RSO credential.",
        "Service instructor lanes that double as range credentials (each covered in its own entry — this entry is the front door): Navy SAMI and the RSO role in the OPNAV 3591/1 chain; USMC CMC/CMT; USAF CATM personnel and the Firing Line Official duty (DAF AFJQS 3P0X1B); Coast Guard FAI/FMC.",
      ],
      how: [
        "Currency: the OIC/RSO card is typically valid one year (Fort Knox Range guide, Jan 2026: “The OIC/RSO card is valid for one year”; NTC requires the certification memo on file, expiring one year from issue) — validity is installation-set within the pamphlet's framework; some programs run longer. Print: “commonly one year; installation-set.”",
        "Route: unit certification program → commander certification memo → installation Range Control brief/exam.",
      ],
      flags: [
        "⚠ Validity is installation-set within the DA PAM 385-63 framework — “commonly one year” is the published pattern (Fort Knox, NTC), not a universal rule.",
      ],
      links: [
        { label: "Fort Knox OIC/RSO Information Guide (Jan 15, 2026)", url: "https://home.army.mil/knox/5817/6919/9192/Ft._Knox_OIC_and_RSO_Information_Guide.pdf" },
        { label: "NTC RC-OPT packet (certification memo; DA PAM 385-63)", url: "https://home.army.mil/irwin/1715/5733/5169/RC-OPT_Form_1_v2.pdf" },
      ],
      source: "AR 385-63 / DA PAM 385-63 (dual-referenced with MCO 5104.1); Fort Knox / NTC installation guides",
    },
    {
      id: "language-flpb",
      branch: "All",
      name: "Language — DLPT, OPI, DLAB and FLPB (annual retest; $1,000/mo statutory ceiling)",
      summary:
        "Language proficiency as a tested, expiring qualification (DoDI 5160.71): the DLPT system, the Oral Proficiency Interview (OPI), and the DLAB aptitude battery; scores on the ILR scale. Proficiency must be retested annually to remain current for pay. FLPB under DoDI 1340.27 / 37 U.S.C. § 353(b) runs up to $1,000/month by statute; the commonly published minimum paid profile is 2/2/1+ — flagged as not re-read on a current service table.",
      who: "Language-coded billets and any member seeking FLPB — every service runs FLPB on the same DLPT spine; linguist MOS/rating standards live in the Library.",
      quals: [
        "DLPT: reading, listening, and speaking tests developed under the Defense Language Institute Foreign Language Center (DLIFLC), with the Army as executive agent (DoDI 5160.71, Jun 30, 2022, Change 1 Feb 11, 2026). Scores reported on the ILR scale (0 to 5, with + levels); the current DLPT5 reports lower-range scores 0+–3 and upper-range 3–4.",
        "DLAB: the Defense Language Aptitude Battery, for aptitude screening. OPI: the Oral Proficiency Interview, for speaking.",
        "The pay link: demonstrated proficiency drives the Foreign Language Proficiency Bonus (FLPB) under DoDI 1340.27 and 37 U.S.C. § 353(b) — up to $1,000/month by statute, with service pay tables keyed to score, language, and the service's Strategic Language List categories. Amounts are Pay-section content — cross-link, not duplicated.",
      ],
      how: [
        "Scheduled through the unit/installation language testing center or education center; results recorded on the service's proficiency record (Army: DA Form 330, required by AR 11-6 for every test or appraisal).",
        "Currency: proficiency must be retested annually to remain current for pay purposes.",
      ],
      flags: [
        "⚠ The 2/2/1+ floor (listening/reading/speaking) is the widely published service standard but was NOT re-read on a current service FLPB table in the research pass — verify against the current service FLPB table. The $1,000/month statutory ceiling is from 37 U.S.C. § 353(b) as reflected in DoDI 5160.71's FLPB references.",
        "⚠ The HRC FLPB deep link was not captured in the research pass — the link below routes to HRC's home; route to HRC's FLPB content from there.",
      ],
      links: [
        { label: "DoDI 5160.71 — DoD Language Testing Program (PDF)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/516071p.pdf" },
        { label: "HRC — FLPB page is under hrc.army.mil (⚠ deep link not captured)", url: "https://www.hrc.army.mil/" },
      ],
      source: "DoDI 5160.71 (2022, Change 1 2026); DoDI 1340.27; 37 U.S.C. § 353(b); AR 11-6 (DA Form 330)",
      crossLinks: [{ label: "MOS Library — linguist jobs and their standards", view: "mos" }],
    },
    {
      id: "service-unique-index",
      branch: "All",
      name: "Service-unique recurring quals — the index entries",
      summary:
        "Service-unique recurring qualifications index: USMC JEPES/PES integration of swim qual (career consequences, unique as published); Navy semi-annual small-arms sustainment; DAF annual CBRN Foundations + mask validation for every Airman and Guardian; Army annual driver sustainment on DA Form 348 + master driver / license examiner; Coast Guard twice-yearly FT&E-P drills — the most frequent published small-arms currency of any service in the pack.",
      who: "Index card — each item deep-links to its full entry in this section.",
      quals: [
        "USMC — JEPES/PES integration of swim qual (MARADMIN 084/26 §3.f.4): water-survival qualification now feeds performance evaluation — a currency with career consequences, unique among the services' swim programs as published. See the Swim & Water tile.",
        "Navy — Semi-annual small-arms sustainment (OPNAVINST 3591.1): a mid-cycle sustainment event between annual quals that the other services structure differently. See the Weapons Tables tile.",
        "DAF — Annual CBRN Foundations + mask validation for every Airman and Guardian (2026 program): the only service-wide annual knowledge + fit CBRN currency published at department level. See the CBRN entry in this tile.",
        "Army — Annual driver sustainment on DA Form 348, and the master driver / license examiner unit qualifications under AR 600-55. See the driver entry in this tile.",
        "Coast Guard — Twice-yearly FT&E-P drills: the pistol qualification consumes ~2 days of drills twice a year for armed members — the most frequent published small-arms currency of any service in this pack. See the Weapons Tables tile.",
      ],
      how: ["Index only — follow each item to its entry."],
      flags: [],
      links: [],
      source: "Part A §4.6 (index entries, as published)",
    },
  ],
};

/* ============================ AIRBORNE FAMILY ============================ */

const AIRBORNE: QualTile = {
  key: "airborne",
  label: "Airborne Family",
  tileSub: "Part B §1 · BAC · Jumpmaster · Pathfinder (GT ≥110) · MFF · Wet Silk",
  intro:
    "The airborne family, Army-run with all services attending: Basic Airborne Course, Jumpmaster, Pathfinder, Military Freefall, the Navy/Marine Corps parachutist insignia second step, and USMC Wet Silk currency (MARADMIN 322/25). Badge wear and criteria detail live in Uniforms — cross-linked, not duplicated.",
  entries: [
    {
      id: "bac",
      branch: "All",
      name: "Basic Airborne Course (BAC) — Army-run, all services attend",
      summary:
        "Basic Airborne Course (BAC): the basic static-line parachutist course, 3 weeks at Fort Moore (Benning), GA — Ground Week → Tower Week → Jump Week (5 qualifying jumps). Day-1 assessments: flexed-arm hang 10–20 seconds, 80-inch reach in full combat equipment, 3-mile run at 9-minute pace. Badge: Basic Parachutist Badge.",
      who: "Officers, warrant officers, NCOs, enlisted, qualified cadets (all services by billet/seat). Enlisted must have completed BCT/OSUT or service equivalent.",
      quals: [
        "Volunteer; physically qualified for parachute duty IAW AR 40-501.",
        "Published Day-1 assessments: flexed-arm hang 10–20 seconds, 80-inch reach in full combat equipment, 3-mile run at 9-minute pace (one immediate retest on FAH/Reach, then drop).",
      ],
      how: [
        "ATRRS/unit selection. 3 weeks, named: Ground Week (individual skills/landing) → Tower Week (34-ft towers, swing landing trainer, mock door, 250-ft tower) → Jump Week (5 qualifying jumps). Run by 1st Bn, 507th PIR, Airborne and Ranger Training Brigade, Fort Moore (Benning), GA.",
        "Currency: no badge refresher (badge is permanent). A Basic Airborne Refresher (BAR) course exists at the U.S. Army Advanced Airborne School (USAAAS), Fort Bragg/Liberty for returning jumpers.",
      ],
      flags: [],
      links: [],
      source: "benning.army.mil 1-507th Airborne Entrance Requirements + Tower pages; army.mil; MyArmyBenefits",
      badge: "Basic Parachutist Badge; Senior/Master are higher degrees of the same family (AR 600-8-22 via TIOH) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — parachutist badges and wear", view: "uniforms" }],
    },
    {
      id: "jumpmaster",
      branch: "Army",
      name: "Jumpmaster School (static line) — Army (ASI 5W)",
      summary:
        "Jumpmaster School (static line): trains qualified paratroopers for Jumpmaster and Safety duties, JMPI, drop-zone safety — providers 1-507th PIR (Fort Moore) and USAAAS (Fort Bragg/Liberty), ~3 weeks, published as E-5 and above. Minimum 12 static-line jumps per the published versions (flagged); the full historic numeric list is NOT PUBLICLY PUBLISHED — verify in ATRRS. Identifier: ASI 5W. Jumpmaster Refresher (JMR) is 3 days.",
      who: "Published as E-5 and above (MyArmyBenefits, ASI 5W summary); sister services by billet. Must already be a qualified parachutist.",
      quals: [
        "Must already be a qualified parachutist.",
        "Published versions (print both, attributed): one official army.mil MTT article publishes ≥1 year airborne status + minimum 12 static-line jumps; the USAAAS FY26 page publishes minimum 12 static-line jumps from USAF aircraft (waivable per that page).",
        "Published graduate proficiency (MyArmyBenefits): inspect two rigged jumpers + one combat-equipped jumper in 5 minutes (JMPI).",
      ],
      how: [
        "~3 weeks (army.mil MTT description). USMC attendance: Marines attend via the Army school (listed on the SOI-East Marine Detachment, Maneuver Center of Excellence page) and via Army Advanced Airborne School MTTs (documented at Camp Lejeune). USMC pages publish no separate standards — the Army page governs.",
        "Currency — PUBLISHED: USAAAS runs a Jumpmaster Refresher (JMR), 3 days, for command-referred jumpmasters and those who lost currency (CAASOP Ch. 2), plus a Master Jumpmaster Course and BAR.",
      ],
      flags: [
        "⚠ The detailed numeric list (12 jumps / 12 months jump status / jump within 180 days) was NOT found on a current official school page — the full historic list = NOT PUBLICLY PUBLISHED — verify in ATRRS. The two attributed published versions above are what print.",
      ],
      links: [],
      source: "benning.army.mil 1-507th Jumpmaster; home.army.mil/bragg USAAAS; MyArmyBenefits; soieast.marines.mil",
      badge: "ASI 5W — no separate static-line jumpmaster badge; Master Parachutist progression runs under AR 600-8-22 — see Uniforms.",
      crossLinks: [{ label: "Uniforms — parachutist badge progression", view: "uniforms" }],
    },
    {
      id: "pathfinder",
      branch: "Army",
      name: "Pathfinder School — Army (GT ≥110; ASI F7 / SI 5Q)",
      summary:
        "Pathfinder School: navigational aid/advisory services for airborne, air assault, and airdrop operations — HLZ/PZ operations, sling loads, drop-zone operations. WTC course 15 days at Fort Moore, ending in a 3-day FTX. Qualifications (WTC): GT ≥110 (enlisted), profile serial minimum 111121, current PHA within 12 months, ACFT pass within last 6 months. Badge: Pathfinder Badge; ASI F7 / SI 5Q.",
      who: "Officers O-1–O-3 in SI “5Q” billets (IN, AR, MI, QM 92A, EN, LG 90A); enlisted E-3–E-7 in MOS 11B, 11C, 15Q, 19D, 88M, 92R (skill 3–4), 92Y (skill 1–3); other grades/MOS by waiver; open to other services and foreign nationals (WTC published).",
      quals: [
        "Current PHA within 12 months of graduation; profile serial minimum 111121; no speech impediment.",
        "ACFT pass within last 6 months; height/weight within 30 days of start.",
        "Army applicants: 1 year service remaining after graduation; enlisted GT ≥ 110.",
        "Waivers (minus medical/age) NLT 75 days prior to the WTC Deputy Commanding Officer.",
      ],
      how: [
        "Providers/length: 1-507th PIR (Fort Moore); ARNG Warrior Training Center (WTC), Fort Moore — WTC course: 15 days, ending in a 3-day FTX; Sabalauski (Fort Campbell) also lists a Pathfinder course.",
        "Trains Pathfinders to provide navigational aid/advisory services for airborne, air assault, and airdrop operations — HLZ/PZ operations, sling loads, drop-zone operations (CARP/GMRS/VIRS as published). Named level only.",
        "Currency: none published.",
      ],
      flags: [],
      links: [],
      source: "benning.army.mil/Tenant/wtc/PF.html (WTC published qualifications); tioh.army.mil; MyArmyBenefits",
      badge: "Pathfinder Badge; ASI F7 (enlisted) / SI 5Q (officer) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Pathfinder Badge", view: "uniforms" }],
    },
    {
      id: "mff",
      branch: "All",
      name: "Military Freefall Parachutist Course (MFFPC) + MFF Jumpmaster — Yuma (USSOCOM proponent)",
      summary:
        "Military Free Fall School, Yuma Proving Ground, AZ (USAJFKSWCS) — the entry-level military free fall training program for all of USSOCOM. Qualifications (army.mil): Basic Airborne graduate, freefall-coded position, Class 3 flight physical / high-altitude oxygen medical standards, at least 5 static-line jumps. Course length in weeks: NOT PUBLICLY PUBLISHED on current official pages — the 2012 restructure (→3 weeks, 30 operations) is the newest official word, flagged F-7.",
      who: "Joint — Air Force, Marine, Navy, and Army personnel (per school commander; Coast Guard not listed) in designated freefall-coded positions (special operations, select riggers, approved allied personnel). AF course identifier L9AQA1XXXX 0F1A.",
      quals: [
        "Graduate of Basic Airborne; freefall-coded position.",
        "Class 3 flight physical / high-altitude oxygen medical standards; at least 5 static-line jumps completed.",
        "Jump program published as jumps from 9,500 to 25,000 feet, day and night, with/without equipment and oxygen (conditions named only). Numeric standards beyond those above: NOT PUBLICLY PUBLISHED.",
      ],
      how: [
        "Military Free Fall School, Yuma Proving Ground, AZ, operated by USAJFKSWCS. Follow-on courses at the same school: MFF Jumpmaster Course, Advanced Tactical Infiltration Course (ATIC), MFF Instructor Course (eligibility wording varies between official articles — flagged in the pack).",
        "USMC attendance: Marines in billets that absolutely require freefall (reconnaissance, air delivery, ANGLICO named) attend after BAC; USMC pages publish no length/standards — the Army school governs. Wet-silk currency: MARADMIN 322/25 (next entry).",
        "Currency: AF parachutist currency/refresher governed by AFPAM 11-406 Ch. 2 (existence confirmed; interval not extracted — no 90-day figure is quoted without opening that chapter).",
      ],
      flags: [
        "⚠ F-7 MFF LENGTH — course length in weeks is NOT PUBLICLY PUBLISHED on the current official pages opened. A 2012 army.mil restructuring article describes a move from 4 weeks to 3 weeks (Week 1 vertical wind tunnel + MC-4 packing; remaining weeks a jump program totalling 30 MFF operations). The 2012 restructure is the newest official word — printed dated, per the pack's ruling.",
        "⚠ Specific jump-count award criteria for the MFF badge were not extracted from an official page in the sweep — verify in AR 600-8-22 / AFMAN 11-402 before printing numbers; none print here.",
      ],
      links: [],
      source: "army.mil MFFS articles (2019/2024/2026); tioh.army.mil; Part B §1.4 + flag F-7",
      badge: "Military Free Fall Parachutist Badge (Basic + Jumpmaster versions) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Military Free Fall badges", view: "uniforms" }],
    },
    {
      id: "navy-usmc-parachutist-insignia",
      branch: ["Navy", "Marine Corps"],
      name: "Navy & Marine Corps Parachutist Insignia — the sea services' own second step (MILPERSMAN 1220-030)",
      summary:
        "Navy/Marine Corps Parachutist Insignia (gold) sits above the basic (silver) badge — earned inside the sea services after BAC: previously qualified Basic + minimum 5 additional static-line or P3 jumps under competent orders. Also published in MILPERSMAN 1220-030: Free-Fall Parachute Jumper (minimum 10 military free-fall jumps) and HALO Parachute Jumper (minimum 16 HALO jumps). USMC currency: jump every 90 days / 4 times a year (MCO 3120.11 via official articles).",
      who: "Sailors and Marines previously qualified Basic, jumping with a Navy/Marine Corps organization whose mission includes static-line/P3 jumping.",
      quals: [
        "Navy/Marine Corps Parachutist Insignia (MILPERSMAN words): previously qualified Basic + minimum 5 additional static-line or P3 jumps under competent orders with a Navy/Marine Corps organization whose mission includes static-line/P3 jumping. (Published in MILPERSMAN's words — not restated as a standalone “10 jumps” without the basic-course context.)",
        "Free-Fall Parachute Jumper = qualified static-line + high-altitude medical + prescribed free-fall program incl. minimum 10 military free-fall jumps, at least 2 with full combat equipment (1 day, 1 night). HALO Parachute Jumper = minimum 16 HALO jumps.",
        "USMC version (MCO 3120.11 as summarised in official USMC articles): serve in a parachute-duty billet ≥90 days + ≥5 additional jumps incl. day slick, combat-equipment day and night, from ≥2 aircraft types; combat jump waives.",
      ],
      how: [
        "Currency (USMC articles): jump every 90 days / 4 times a year to stay jump-capable; refresher (8 hours of classes) if familiarity lapses within 180 days — attributed to MCO 3120.11 via official articles.",
      ],
      flags: [
        "⚠ The basic-count paragraph of MILPERSMAN 1220-030 was not fully extracted — verify §3 of the full PDF before printing a basic jump count from this source; none prints here.",
        "⚠ USMC order-number variance in articles: 3120.11 vs 3500.20A — flagged, per the pack.",
      ],
      links: [],
      source: "MILPERSMAN 1220-030; MCO 3120.11 as summarised in official USMC articles",
      badge: "Navy/Marine Corps Parachutist Insignia (gold) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — parachutist insignia", view: "uniforms" }],
    },
    {
      id: "wet-silk",
      branch: "Marine Corps",
      name: "Wet Silk (USMC, current policy) — MARADMIN 322/25",
      summary:
        "Wet Silk currency (USMC, MARADMIN 322/25): for MFF and low-level static-line parachutists in parachutist-coded billets deploying to MEU/MLR/SPMAGTF/UDP — wet-silk currency interval no greater than 48 months; refresher no more than 90 days prior to deliberate water drop-zone operations.",
      who: "MFF and low-level static-line parachutists in parachutist-coded billets deploying to MEU/MLR/SPMAGTF/UDP.",
      quals: ["Current parachutist qualification in a parachutist-coded billet (see BAC / MFF entries in this tile)."],
      how: [
        "Currency interval no greater than 48 months; refresher no more than 90 days prior to deliberate water drop-zone operations (MARADMIN 322/25).",
      ],
      flags: [],
      links: [],
      source: "MARADMIN 322/25 (USMC Wet Silk policy); Part B §1.6",
    },
  ],
};

/* =========================== AIR ASSAULT FAMILY =========================== */

const AIR_ASSAULT: QualTile = {
  key: "air-assault",
  label: "Air Assault Family",
  tileSub: "Part B §2 · TSAAS · Rappel Master · FRIES/SPIES Master",
  intro:
    "The Air Assault family, Army: Sabalauski Air Assault School (Fort Campbell) and its sister sites, the Rappel Master Course, and the FRIES/SPIES Master Course. Badge: Air Assault Badge — wear detail in Uniforms.",
  entries: [
    {
      id: "air-assault-school",
      branch: "Army",
      name: "Air Assault School (Sabalauski, Fort Campbell + sister sites)",
      summary:
        "Air Assault School: qualifies Soldiers in air assault operations, sling-load operations, and rappelling from rotary-wing aircraft — 10 days + Day Zero at Sabalauski (TSAAS), Fort Campbell; same core program at Fort Drum and Lightning Academy, Hawaii. Phases named: Combat Assault; Sling Load; Rappel. Badge: Air Assault Badge. Slotting is only through TSAAS Operations.",
      who: "Soldiers (and sister-service students by seat) meeting the published prerequisites below.",
      quals: [
        "Height/weight IAW AR 600-9; 1 year service remaining after completion.",
        "12-mile foot march within 90 days of class start and obstacle course within 60 days (ROTC-published); home-unit equipment inspection within 30 days.",
        "Day Zero includes the obstacle course + 2-mile run (army.mil).",
        "Graduation event in published course descriptions: 12-mile ruck in ≤3 hours on graduation morning (course-description sources, not the current TSAAS landing page — attributed accordingly).",
      ],
      how: [
        "10 days + Day Zero; three phases named: Phase 1 — Combat Assault; Phase 2 — Sling Load; Phase 3 — Rappel.",
        "Flagship: Sabalauski Air Assault School (TSAAS), 101st Airborne Division (Air Assault), Fort Campbell, KY; same core program at Fort Drum and Lightning Academy, Hawaii.",
        "Knock-on: Air Assault graduates E-4+ are qualified sling-load inspectors (see SLICC, Army Sweep & Joint tile). Currency: none published.",
      ],
      flags: [
        "⚠ Slotting is only through TSAAS Operations — unit ATRRS managers may not slot; walk-ons not guaranteed.",
      ],
      links: [],
      source: "TSAAS / army.mil course descriptions; Part B §2.1",
      badge: "Air Assault Badge — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Air Assault Badge", view: "uniforms" }],
    },
    {
      id: "rappel-master",
      branch: "Army",
      name: "Rappel Master Course — Army",
      summary:
        "Rappel Master Course: teaches Air Assault / Ranger / SFQC / Mountain Warfare graduates to serve as rappel masters. Run at TSAAS (Fort Campbell) and Lightning Academy, Hawaii — 1 week / 5 training days as published by Lightning Academy. No separate badge published. (The Army's official equivalents to the rumored “HRST school” are this course and FRIES/SPIES Master — see the NOT CONFIRMED register.)",
      who: "Air Assault / Ranger / SFQC / Mountain Warfare graduates.",
      quals: ["Graduate of Air Assault, Ranger, SFQC, or Mountain Warfare (as published)."],
      how: ["TSAAS (Fort Campbell) and Lightning Academy, Hawaii — 1 week / 5 training days as published by Lightning Academy."],
      flags: [],
      links: [],
      source: "Lightning Academy / TSAAS published course pages; Part B §2.2",
    },
    {
      id: "fries-spies-master",
      branch: "Army",
      name: "FRIES/SPIES Master Course — Army (named level)",
      summary:
        "FRIES/SPIES Master Course at TSAAS, Fort Campbell — qualifies FRIES and SPIES Masters (purpose/scope published; length not stated on the page reviewed). Named level only.",
      who: "Per TSAAS published scope — see the course page via ATRRS/unit schools.",
      quals: ["Purpose/scope as published by TSAAS; detailed prerequisites at named level only in the pack."],
      how: ["TSAAS, Fort Campbell. Length NOT stated on the page reviewed — not filled from secondary sources."],
      flags: ["⚠ Length not stated on the official page reviewed — printed as unpublished, per the pack."],
      links: [],
      source: "TSAAS published course page; Part B §2.3",
    },
  ],
};

/* ============================ RANGER + SAPPER ============================ */

const RANGER_SAPPER: QualTile = {
  key: "ranger-sapper",
  label: "Ranger & Sapper",
  tileSub: "Part B §3 · School facts only — pipelines cross-link Spec Ops",
  intro:
    "School facts only for Ranger School and the Sapper Leader Course — the selection pipelines (RASP, the Regiment) live in Special Forces & Elite Units and are cross-linked, not duplicated. The Ranger Airborne-prerequisite conflict prints with ARTB as controlling, per the pack's ruling.",
  entries: [
    {
      id: "ranger-school",
      branch: "All",
      name: "Ranger School (ARTB) — 61 days; Airborne NOT required (ARTB governs)",
      summary:
        "Ranger School (Airborne and Ranger Training Brigade): the Army's premier small-unit leadership course, 61 days — Darby Phase (21 days, incl. RAP Week) at Fort Moore, Mountain Phase at Dahlonega, Swamp Phase at Eglin AFB. Published Ranger Physical Assessment: 49 push-ups, 59 sit-ups, 5-mile run in 40:00, 6 chin-ups. ⚠ Airborne qualification is NOT required — ARTB governs; the MyArmyBenefits opposite statement is stale/incorrect, flagged. Badge: Ranger Tab; SQI G.",
      who: "Not MOS-dependent. Sister-service students E-5+ without waiver; Marines attend via the Marine Detachment, Maneuver Center of Excellence (SOI-East lists Ranger School among Army courses Marines attend). Guardian attendance is individual, not an SF school.",
      quals: [
        "Ranger physical within 18 months; Commander's Validation Letter.",
        "Published Ranger Physical Assessment: 49 push-ups, 59 sit-ups, 5-mile run in 40:00, 6 chin-ups.",
        "Newer reporting info adds a Ranger Combat Fitness Assessment (0.5-mi run/wall/carries/drag in 12:30 or less, Feb 2026 reporting PDF).",
      ],
      how: [
        "61 days, three phases named: Darby Phase (21 days, incl. Ranger Assessment Phase / RAP Week) — Fort Moore, GA; Mountain Phase — Camp Frank D. Merrill, Dahlonega, GA; Swamp Phase — Camp James E. Rudder, Eglin AFB, FL.",
        "Currency: none (the tab is permanent).",
      ],
      flags: [
        "⚠ F-1 AIRBORNE-PREREQUISITE CONFLICT — ARTB states students are “not required to be Airborne qualified, but are encouraged to attend the Airborne Course prior.” MyArmyBenefits states the opposite — STALE/INCORRECT. ARTB GOVERNS (the pack's ruling); the conflict prints, it is not blended.",
      ],
      links: [],
      source: "ARTB reporting information (controlling); MyArmyBenefits (conflicting, flagged); Part B §3.1 + flag F-1",
      badge: "Ranger Tab (permanent). Identifier SQI G — see Uniforms.",
      crossLinks: [
        { label: "Uniforms — Ranger Tab", view: "uniforms" },
        { label: "Special Forces & Elite Units — RASP / the Regiment (pipeline)", view: "specops" },
      ],
    },
    {
      id: "sapper",
      branch: "Army",
      name: "Sapper Leader Course (SLC) — Army Engineer School, Fort Leonard Wood (28 days)",
      summary:
        "Sapper Leader Course: 28-day joint-service small-unit leadership course for combat engineers and combined-arms leaders at Fort Leonard Wood — the only place the Sapper Tab is earned. Phases named: Phase I — General Subjects (14 days); Phase II — Patrolling (14 days). Joint fact: Capt Daniel Reynolds became the first Guardian to attend and graduate (13 Feb 2022) — individual attendance, not a Space Force school. CWST prerequisite treatment cross-links the Swim tile.",
      who: "Enlisted E-4 and above, cadets, engineer officers Captain and below (MyArmyBenefits); any combat/combat-support branch — the current Sapper Pamphlet (Dec 2025) narrows the primary audience to 12-series (esp. 12B), others by waiver.",
      quals: [
        "ATRRS reservation; Day-0 Sapper Physical Fitness Test (event numbers not published in the pages extracted — verify in the Sapper Pamphlet before printing; none print here).",
        "Physical (DD 2807-1/2808); AFT/ACFT record within 180 days; O-5-signed Organizational Certification Letter.",
        "Swim prerequisite treatment: the Sapper Pamphlet requires a prior CWST attempt with swim classification certified by the battalion commander — see the Army CWST entry in the Swim & Water tile.",
      ],
      how: [
        "28 days, Sapper Training Company, 169th Engineer Bn, 1st Engineer Bde, Fort Leonard Wood. Phases named: Phase I — General Subjects (14 days); Phase II — Patrolling (14 days).",
        "Currency: none published.",
      ],
      flags: [],
      links: [
        { label: "Sapper Leader Course pamphlet (Dec 2025)", url: "http://home.army.mil/wood/8417/7022/5279/Sapper_Pamphlet___NEW_2026.pdf" },
      ],
      source: "Sapper Pamphlet (Dec 2025); MyArmyBenefits; STARCOM (Guardian first); Part B §3.2",
      badge: "Sapper Tab (permanent; authorised for wear 28 June 2004) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Sapper Tab", view: "uniforms" }],
    },
  ],
};

/* ============================== DIVE SCHOOLS ============================== */

const DIVE: QualTile = {
  key: "dive",
  label: "Dive Schools",
  tileSub: "Part B §4 · All roads run through Panama City (NDSTC)",
  intro:
    "Dive schools per branch — all roads run through NDSTC Panama City. The pack's correction ships as printed: Engineer Diver is Fort Leonard Wood Phase I + NDSTC Panama City (Eglin is EOD/Ranger swamp — not the dive school). Gated standards (Navy Diver PST/ASVAB behind CANTRAC, CDQC numeric standards) print as NOT PUBLICLY PUBLISHED.",
  entries: [
    {
      id: "army-engineer-diver",
      branch: "Army",
      name: "Army Engineer Diver — MOS 12D (Fort Leonard Wood Phase I + NDSTC Panama City — NOT Eglin)",
      summary:
        "Army Engineer Diver (MOS 12D): Phase I — 3 weeks, Fort Leonard Wood, MO; Phase II — 29 weeks at NDSTC Panama City, FL for enlisted 12D (the same NETC page's summary line states “Phases II and III are 6 months” — both wordings print, flagged F-11). Officers: Joint Diving Officer course, 26 weeks, Panama City. Ratings: Second Class → Salvage → First Class → Master Diver (AR 611-75). Correction: Engineer Dive School is NOT at Eglin.",
      who: "Enlisted reclass — highly motivated, physically fit Soldiers E-1 to E-4 seeking 12D; officers via the twice-yearly Dive Officer Selection process (spring/fall, up to 6 candidates).",
      quals: [
        "Phase I pass requirements are listed on the NETC page (detailed events not extracted — do not invent numbers; none print here).",
        "Diver selection/qualification governed by AR 611-75, Management of Army Divers.",
      ],
      how: [
        "Run by Alpha Company, 169th Engineer Battalion at the Naval Diving and Salvage Training Center (NDSTC), Panama City, FL. NDSTC's Army page lists four courses run there: Basic Engineer Diver (BED), Joint Diving Officer (JDO), Advanced Leader Course (ALC), Senior Leader Course (SLC), plus hosted Army Master Diver evaluations.",
        "Phases (NETC Army Student Information page, updated Jan 2026): Phase I — Army Diver Phase I, 3 weeks, Fort Leonard Wood, MO (prerequisite/screening). Phase II — 29 weeks at NDSTC for enlisted 12D. Officers: Phase I (3 wks, Fort Leonard Wood) → Joint Diving Officer course, 26 weeks, Panama City.",
        "Ratings progression (AR 611-75 / TIOH): Second Class Diver (AIT graduation) → Salvage Diver → First Class Diver (ALC) → Master Diver (SLC + Master Diver evaluation). Engineer Diving Officer badge for JDO graduates.",
        "Currency: governed by AR 611-75; specific dive-interval numbers NOT published on the school pages reviewed — the regulation is cited, not a number.",
      ],
      flags: [
        "⚠ CORRECTION (the pack's, printed) — Engineer Dive School is NOT at Eglin. Official structure = Fort Leonard Wood + Panama City. Eglin is EOD school and Ranger swamp phase.",
        "⚠ F-11 PHASE II LENGTH CONFLICT — 29 weeks (course line) vs “Phases II and III are 6 months” (same page's summary line). Both print; neither is picked silently.",
      ],
      links: [],
      source: "NETC Army Student Information page (updated Jan 2026); AR 611-75; TIOH; Part B §4.1 + flag F-11",
      badge: "Diver badges per AR 611-75 / TIOH (Second Class, Salvage, First Class, Master; Engineer Diving Officer) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — diver insignia", view: "uniforms" }],
    },
    {
      id: "cdqc",
      branch: "All",
      name: "Special Forces Combat Diver Qualification Course (CDQC) — Key West (named level)",
      summary:
        "CDQC at Naval Air Station Key West, FL (C Co, 2nd Bn, 1st SWTG, USAJFKSWCS): trains selected SOF as basic military open-circuit and closed-circuit combat divers. Length: 6 weeks current (army.mil, Feb 2026) vs 7 weeks historical incl. Zero Week — flagged F-10. Prerequisite: a validation certificate from the SF Group's 10-day Maritime Assessment Course (MAC). Detailed numeric swim/fitness standards: NOT PUBLICLY PUBLISHED in the current official article.",
      who: "SF, other-branch SOF, and select foreign military in/on orders to combat-diver positions.",
      quals: [
        "Each SF Group runs its own Maritime Assessment Course (MAC) — 10 days; a validation certificate from MAC is required to attend CDQC.",
        "Strict medical standards incl. a hyperbaric chamber pressure-equalisation test; pass a modified Army Fitness Test on arrival.",
        "Detailed numeric swim/fitness standards: NOT PUBLICLY PUBLISHED in the current official article — older ATRRS numbers from non-official sites are not used.",
      ],
      how: [
        "6 weeks (current army.mil, Feb 2026 course) at Fleming Key/Trumbo Point, NAS Key West, FL. Also at Key West (named only): Combat Diving Supervisor Course; Diving Medical Technician Course.",
        "Currency: AR 611-75 Ch. 2 governs combat divers (intervals not published on school pages).",
      ],
      flags: [
        "⚠ F-10 LENGTH — 6 weeks current vs 7 weeks historical incl. “Zero Week” (older army.mil article). 6 weeks prints as current with the change noted.",
      ],
      links: [],
      source: "army.mil (Feb 2026 course article); AR 611-75; Part B §4.2 + flag F-10",
      badge: "Combat Diver Badge / Special Operations Diver Badge (supervisor variant under AR 611-75) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — combat diver badges", view: "uniforms" }],
    },
    {
      id: "navy-diver-nd",
      branch: "Navy",
      name: "Navy Diver (ND) — NDSTC Panama City (PST/ASVAB: NOT PUBLICLY PUBLISHED)",
      summary:
        "Navy Diver (ND) rating, trained at NDSTC Panama City (MILPERSMAN 1220-100): volunteers, age 30 or less at application receipt, conversion candidates 6 years or less active service; dive medical + Physical Screening Test required — specific PST numbers and ASVAB line scores: NOT PUBLICLY PUBLISHED on the pages opened (behind CANTRAC). Pipeline courses named in MILPERSMAN 1220-100 §4; on completion: NEC M2DV, Second Class Diver. “A” School length: NOT PUBLICLY PUBLISHED.",
      who: "Volunteers — accession and fleet conversion; U.S. citizen; eligibility for the ND rating (MILPERSMAN 1220-100).",
      quals: [
        "Age 30 or less at application receipt (PERS-401DH); conversion candidates 6 years or less active service.",
        "Dive medical + Physical Screening Test required — ⚠ specific PST numbers and ASVAB line scores: NOT PUBLICLY PUBLISHED on the MILPERSMAN excerpt/NETC pages opened (schedules and standards sit in CAC-gated CANTRAC). The secondary 103/105 figures are NOT used.",
      ],
      how: [
        "Pipeline courses named in MILPERSMAN 1220-100 §4: ND Preparatory Course (A-433-0012), ND Assessment and Selection (A-433-0013), Basic SCUBA / Navy Surface Supplied Air Diver (A-433-0046) — Great Lakes then NDSTC, 350 South Crag Road, NSA Panama City, FL.",
        "On completion: NEC M2DV, Second Class Diver. Progression named by NDSTC: First Class Diver, Mixed Gas Diver, Master Diver (MDV), Joint Diving Officer, Dive Medical Technician.",
        "“A” School / Second Class course length: NOT PUBLICLY PUBLISHED on NETC pages (CANTRAC-gated). Currency: not published on pages opened; advanced-diver OBLISERV note: 36 months from First Class graduation.",
      ],
      flags: [
        "⚠ GATED STANDARD — Navy Diver PST/ASVAB print as NOT PUBLICLY PUBLISHED with named-level existence only, per the binding rule. Never filled from secondary sources.",
      ],
      links: [],
      source: "MILPERSMAN 1220-100; NDSTC / NETC pages; Part B §4.3",
      badge: "Underwater insignia family (Uniform Regulations Ch. 5 §5201): Second Class, First Class, Master Diver, Diving Officer, Diving Medical variants — see Uniforms.",
      crossLinks: [{ label: "Uniforms — underwater insignia", view: "uniforms" }],
    },
    {
      id: "mcdc",
      branch: "Marine Corps",
      name: "Marine Combatant Diver Course (MCDC) + Dive Supervisor — USMC (detail NOT published)",
      summary:
        "Marine Combatant Diver Course (MCDC) at NDSTC Panama City, run by the Marine Combatant Diver Detachment — “the primer school for combatant diving within the armed forces” (MATSG-21 Liaison). For Reconnaissance and MARSOC Marines; Basic Reconnaissance Course (BRC) precedes MCDC; units run a 2-week pre-dive course with a 6-month window to attend. Detailed MCDC prerequisites, swim standards, and course length: NOT published in accessible official USMC text. Follow-on: Dive Supervisor Course, Camp Lejeune, 2 weeks, Sergeants and above.",
      who: "Marines chosen by their unit from the Reconnaissance and MARSOC communities.",
      quals: [
        "Prerequisite chain as published: Basic Reconnaissance Course (BRC) precedes MCDC in the recon pipeline; units run a pre-dive course (2 weeks, e.g., 2d Recon Bn, Camp Lejeune — pool and open-water evaluation incl. 1,000-meter open-water fin training); pre-dive graduates get a 6-month window to attend dive school.",
        "Detailed MCDC prerequisites, swim standards, and course length: NOT published in accessible official USMC text — the Liaison page's prerequisite list did not render. NDSTC/Navy numbers are NOT imported into this USMC entry.",
      ],
      how: [
        "Marine Combatant Diver Detachment at NDSTC Panama City, FL. Graduates earn the title “Combatant Diver” (badge criteria not published on pages consulted).",
        "Follow-on: Dive Supervisor Course, Camp Lejeune — up to twice a year, open to Sergeants and above who graduated MCDC, 2 weeks, graduates earn the title “Dive Supervisor.”",
        "Currency: not published on pages consulted.",
      ],
      flags: [
        "⚠ NOT PUBLISHED — MCDC detail is a register item (§16 #4): do NOT import NDSTC/Navy numbers into the USMC entry.",
      ],
      links: [],
      source: "MATSG-21 Marine Corps Liaison Panama City; Part B §4.4",
    },
    {
      id: "cg-diver-dv",
      branch: "Coast Guard",
      name: "Coast Guard Diver (DV) — via NDSTC (entry grade E-4 vs E-5 flagged)",
      summary:
        "Coast Guard Diver (DV) rating via NDSTC: DV “A” School at NDSTC is a 21-week rating course (air and mixed gas, SCUBA and hard hat, cutting/welding, chamber ops, salvage, ship maintenance). Entry grade differs by official source/year — E-4 (gocoastguard, current) vs E-5 or E-4 who are E-5-eligible (MyCG) vs AY25 solicitation (E-5s and E-4s with E-5 EPQs) — flagged F-5, never blended. PST numbers: NOT PUBLICLY PUBLISHED. Selection: one-week Diver Candidate Screener at Cape May.",
      who: "Per the current-year solicitation — check the current ALCGENL. Application package + command endorsement; solicitation each February (MyCG).",
      quals: [
        "Physical Screening Test — must pass (⚠ PST numbers NOT PUBLICLY PUBLISHED; form CG-3150B referenced, numbers not given).",
        "Medical screening (DD 2807-1 + diver candidate pre-screener; full dive medical DD 2808 not required for initial application in AY25).",
        "Selection: Diver Candidate Screener — one week at Training Center Cape May (MyCG: 20–25 screened, 5–10 selected — article figures, not a published quota; attributed).",
      ],
      how: [
        "DV “A” School at NDSTC — 21-week rating course. NETC lists Coast Guard Second Class Diver (CG2C) and First Class Diver (CG1C); Second Class is the minimum DV qualification. Training arm: Special Missions Training Center (SMTC); Special Missions Training Detachment-Dive (SMTD-Dive), Panama City, co-located with NDSTC — “they train all Coast Guard second class and first class divers” and run “the military's only cold water ice diving course.” Program manager: Office of Specialized Capabilities (CG-721), COMDTINST 3150.1E (Sep 2025).",
        "Advanced training named: cold-water ice diving, instructor development, EMT, First Class Diver supervisory course, side-scan/ROV, gear maintenance.",
        "Currency: current COMDTINST 3150.1E currency numbers NOT extracted in the sweep — an older manual's figures via secondary host are NOT printed.",
      ],
      flags: [
        "⚠ F-5 ENTRY GRADE + RATING YEAR — entry grade: gocoastguard (current) says cannot apply until E-4 in another rating; MyCG current program article says E-5 or E-4 who are E-5-eligible; AY25 solicitation: active-duty E-5s and E-4s with E-5 EPQs completed. Printed as “E-4 (E-5-eligible) to E-5 per the current-year solicitation — check the current ALCGENL.” Rating created 2014 / stood up 2015 — official MyCG articles differ on the year; flagged, not resolved.",
        "⚠ No unit formally named “CG Dive Center of Excellence” was found — SMTC/SMTD-Dive is the official name (register §16).",
      ],
      links: [],
      source: "gocoastguard; MyCG program articles; AY25 solicitation; COMDTINST 3150.1E; Part B §4.5 + flag F-5",
      badge: "Naval diver insignia shared with the Navy (Second/First Class, Master Diver, Diving Officer, SCUBA variants) + DV rating badge — see Uniforms.",
      crossLinks: [{ label: "Uniforms — diver insignia", view: "uniforms" }],
    },
    {
      id: "salvage-named",
      branch: "All",
      name: "Salvage — a qualification layer, not a standalone school (named level)",
      summary:
        "Salvage (named level): salvage diving is a qualification layer inside the Navy ND and Army 12D progressions (Salvage Diver rating, AR 611-75; Navy salvage named in the ND rating description and NDSTC course list) — no standalone joint “salvage school” entry ships; see the 12D and ND entries in this tile.",
      who: "Navy ND and Army 12D divers progressing through their ratings.",
      quals: ["Per the ND and 12D progressions in this tile."],
      how: ["Cross-link only, per the pack (§4.6)."],
      flags: [],
      links: [],
      source: "Part B §4.6",
    },
  ],
};

/* ====================== SCOUT SWIMMER & RESCUE ====================== */

const SCOUT_RESCUE: QualTile = {
  key: "scout-rescue",
  label: "Scout Swimmer & Rescue",
  tileSub: "Part B §5 · Scout Swimmer · AIRR · Surface Rescue Swimmer",
  intro:
    "Scout Swimmer and the rescue-swimmer schools at school-facts level — the AIRR pipeline depth lives in Special Forces & Elite Units and is cross-linked, not duplicated.",
  entries: [
    {
      id: "scout-swimmer",
      branch: "Marine Corps",
      name: "Scout Swimmer Course — USMC (3 weeks; 2,000 m fin swim final)",
      summary:
        "Scout Swimmer Course (USMC): certifies Marines as scout swimmers supporting boat landing teams / small-boat operations — 3 weeks at EWTGP Coronado and SOTG Okinawa. Final: 2,000-meter fin swim, ocean to shore; SOTG Okinawa publishes 2 km fin swim in under 65 minutes + written examination to graduate. A Riverine Training Center 2-week listing is older — both print, attributed. No MOS/badge published.",
      who: "Marines assigned to/supporting boat landing/raid forces (radio/intelligence battalions, BLTs, MEU Marines in official articles).",
      quals: [
        "Final = 2,000-meter fin swim, ocean to shore; SOTG Okinawa publishes 2 km fin swim in under 65 minutes + written examination to graduate. (Longest training swim 5 km — a training event, not the standard.)",
      ],
      how: [
        "3 weeks (EWTGP Coronado and SOTG Okinawa both publish 3 weeks); historically also the Riverine Training Center, Camp Lejeune.",
        "Badge/identifier: none published — “qualified as scout swimmers,” no MOS/badge/tab. Currency: not published.",
      ],
      flags: [
        "⚠ A Riverine Training Center article listed a 2-week course (older) — print both, attributed by provider/era: 3 weeks (EWTGP/SOTG, current) and 2 weeks (Riverine, older).",
        "⚠ One SOTG article's “male Marines with at least swim qualification one” is dated language (pre-dates the first female graduate, 2020) — not presented as a current restriction.",
      ],
      links: [],
      source: "EWTGP / SOTG Okinawa official articles; Part B §5.1",
    },
    {
      id: "airr-school-facts",
      branch: "Navy",
      name: "Aviation Rescue Swimmer (AIRR) — Navy (school facts; pipeline in Spec Ops)",
      summary:
        "Aviation Rescue Swimmer (AIRR) school facts per MILPERSMAN 1220-010 (CH-92, Aug 2025): RTC → NACCS Pensacola → Aviation Rescue Swimmer Preparatory Course → Aviation Rescue Swimmer School → Class “A” School → SERE/FRS follow-on. Published graduation standards (Exhibit 2): 400-meter buddy tow in 16 minutes; 2,000-meter swim in 50 minutes; 8 pullups in flight suit and boots within 2 minutes; two 50-pound dumbbells carried 100 yards within 2 minutes. Pipeline depth: Spec Ops pack — cross-linked.",
      who: "Volunteers for flying duty meeting the qualifications below; age 30 or less at enlistment/reenlistment; 6-year obligation.",
      quals: [
        "Volunteer for flying duty; aviation flight physical; 6-year obligation; age 30 or less at enlistment/reenlistment.",
        "PFA “satisfactory” in all categories before NACCS, “good” in all categories to graduate NACCS; capable of swim qualifications per CNAF M-3710.7 (“nonswimmers… should not apply”).",
        "AIRR graduation standards published in MILPERSMAN Exhibit 2: 400-meter buddy tow in 16 minutes in rescue swimmer equipment; 2,000-meter swim in 50 minutes in rescue swimmer equipment; 8 pullups in flight suit and boots within 2 minutes; carry two 50-pound dumbbells 100 yards over four 12–14-inch obstacles within 2 minutes; 1-mile MEDEVAC litter walk (time truncated in the excerpt — NOT completed from secondary sources).",
      ],
      how: [
        "Route (MILPERSMAN 1220-010): RTC → Naval Aircrew Candidate School (NACCS), Pensacola → Aviation Rescue Swimmer Preparatory Course, Pensacola → Aviation Rescue Swimmer School, Pensacola → Class “A” School → SERE/FRS follow-on.",
        "Badge: Naval Aircrew Warfare Specialist insignia / AW rating; rescue swimmer is a qualification within AW, not a separate breast insignia.",
      ],
      flags: [
        "⚠ Eyesight/ASVAB figures were NOT in the MILPERSMAN excerpt — secondary figures NOT CONFIRMED and not printed. Pipeline week counts circulating via official job-posting mirrors (NACCS 4 wks, ARSS 5 wks, etc.) were not captured on a direct navy.com page in the sweep — verify on navy.com before printing; none print here.",
      ],
      links: [],
      source: "MILPERSMAN 1220-010 (CH-92, Aug 2025); Part B §5.2",
      crossLinks: [{ label: "Special Forces & Elite Units — AIRR pipeline", view: "specops" }],
    },
    {
      id: "srss",
      branch: "Navy",
      name: "Surface Rescue Swimmer School (SRSS) — Navy, named level",
      summary:
        "Surface Rescue Swimmer School (SRSS): initial qualification as a shipboard SAR swimmer — distinct from Aviation Rescue Swimmer. DVIDS describes a four-week, phase-based course (Jacksonville); prerequisites per DVIDS: clear of UCMJ violations, 2nd class swim qualification, pass the Navy PST for special programs (no numbers given). NETC confirms satellite water-survival/rescue-swimmer sites (Norfolk, JBPHH, San Diego) without publishing SRSS length.",
      who: "Sailors qualifying as shipboard SAR swimmers (collateral duty).",
      quals: [
        "Prerequisites (DVIDS article): clear of UCMJ violations, 2nd class swim qualification (see the Swim & Water tile), pass the Navy PST for special programs (no numbers given).",
      ],
      how: [
        "Four-week, phase-based course (Jacksonville) — attributed to DVIDS (official DoD distribution). Badge: none published; shipboard SAR swimmer qualification/NEC at named level. Currency: not published.",
      ],
      flags: [
        "⚠ SRSS length/PST/locations as a current NETC course rest on the DVIDS 4-week Jacksonville statement + the NETC satellite swim-site list (register §16 #25) — printed at named level with that attribution.",
      ],
      links: [],
      source: "DVIDS (official DoD distribution); NETC Naval Aviation Schools Command; Part B §5.3",
    },
  ],
};

/* ============================ EOD (STRUCTURE) ============================ */

const EOD: QualTile = {
  key: "eod",
  label: "EOD School",
  tileSub: "Part B §6 · Structure cross-link — NAVSCOLEOD, Eglin AFB",
  intro:
    "EOD school at structure level only — a cross-link tile by design. NAVSCOLEOD length/divisions/standards were NOT CONFIRMED from an official NETC course page in the sweep, so the circulating 42/51-week and 9-month figures are not imported; the Spec Ops / Library research owns the deep entry.",
  entries: [
    {
      id: "eod-structure",
      branch: "All",
      name: "EOD School — NAVSCOLEOD structure (cross-link; length NOT CONFIRMED)",
      summary:
        "NAVSCOLEOD, Eglin AFB, FL — Navy-managed, jointly staffed, all services attend. Army route: EOD Phase 1 — 7 weeks, Fort Gregg-Adams (Lee), VA → Phase 2 — 26 weeks, Eglin AFB. USMC route: lateral move only (MARADMIN 320/25), ~9 months / 206-day curriculum, 8 specialized divisions named. Air Force route: EOD Preliminary Course at Sheppard AFB — 26 days — before NAVSCOLEOD. ⚠ NAVSCOLEOD length/divisions/standards: NOT CONFIRMED from an official NETC course page — not imported from secondary mirrors.",
      who: "Per-service routes below — Army (AR 611-105), USMC lateral-move volunteers (Sergeant or Corporal, any MOS), Air Force candidates (enlisted 3E8X1, officer 32E3H), Navy via the NDSTC dive phase.",
      quals: [
        "Army: selection governed by AR 611-105 (take ASVAB/clearance/medical standards from AR 611-105/ATRRS, NOT from Navy dive-first pipeline pages). Officers add the EOD Platoon Leaders Course — 1 week, Eglin.",
        "USMC (MARADMIN 320/25 + Manpower): lateral move only — volunteers in grade Sergeant or Corporal, any MOS; eligible for Top Secret (completed Tier 5; T5 application submitted before school); 5-day screening with an EOD unit (PFT, CFT, Bomb Suit Agility Test, aptitude/practical scenarios, interviews, formal panel); obligated service for 36 months after graduation. Full numeric prerequisite list sits in MARADMIN paras 3.a–3.i — GT/vision thresholds are NOT quoted from memory.",
        "Air Force (DAFMAN 32-3001, Jun 2025): NAVSCOLEOD candidates require a T3 (Secret) clearance with an initiated T5; retention requires a current T5.",
      ],
      how: [
        "The school: Naval School Explosive Ordnance Disposal (NAVSCOLEOD), Eglin AFB, FL — Navy-managed, jointly staffed, all services attend.",
        "Army: Phase 1 — 7 weeks, Fort Gregg-Adams (Lee), VA → Phase 2 — 26 weeks, Eglin AFB (joint). USMC: OJT orders 30–90 days, then PCS to MARDET NAVSCOLEOD for approximately 9 months — 206-day curriculum, 8 specialized divisions named on the Manpower page (Demolition, Tools & Methods, Core, Ground Ordnance, Air Ordnance, IED, Chemical & Biological, Radiological & Nuclear — division NAMES only). PMOS 2336. Follow-on named programs: LEON screening; MARSOC SOCS 8071 screening. Air Force: EOD Preliminary Course at Sheppard AFB — 26 days (366th TRS) before NAVSCOLEOD. Navy: NDSTC dive phase → NAVSCOLEOD (structure level; Spec Ops pack owns the pipeline).",
      ],
      flags: [
        "⚠ NOT CONFIRMED — NAVSCOLEOD length/divisions/entry standards from a NETC course page: none returned/opened in the sweep (register §16 #23). The 42/51-week and 9-month figures circulating in secondary mirrors are NOT imported. (The USMC “approximately 9 months / 206-day curriculum” above is the Manpower page's own USMC-route wording, attributed as such.)",
        "⚠ F-13 — AF EOD Master badge year count was truncated in the CFETP extraction (Senior after cumulative 4 years prints per 32EX CFETP); verify the Master figure before printing — it does not print here.",
      ],
      links: [],
      source: "Ordnance School (Army route); MARADMIN 320/25 + Manpower (USMC); DAFMAN 32-3001 (AF); Part B §6",
      badge: "EOD Badges — Basic/Senior/Master (AR 600-8-22); AF EOD badge on NAVSCOLEOD completion — see Uniforms.",
      crossLinks: [
        { label: "Uniforms — EOD badges", view: "uniforms" },
        { label: "Special Forces & Elite Units — Navy EOD pipeline", view: "specops" },
        { label: "MOS Library — Army 89D (same schoolhouse)", view: "mos" },
      ],
    },
  ],
};

/* ================================= SERE ================================= */

const SERE: QualTile = {
  key: "sere",
  label: "SERE",
  tileSub: "Part B §7 · Per service · JPRA governance correction printed",
  intro:
    "SERE per service, levels as published — led by the governance correction the pack forces: JPRA is the current DoD OPR for Personnel Recovery training/education; the common “AF is DoD executive agent” claim is an oversimplification and prints as the pack prints it. No Coast Guard SERE entry is created — the verified negative prints in the last card of this tile.",
  entries: [
    {
      id: "sere-governance",
      branch: "All",
      name: "SERE governance — JPRA is the current DoD OPR (the “AF executive agent” claim is an oversimplification)",
      summary:
        "SERE governance correction: do NOT print “the Air Force is the DoD executive agent for SERE training” as a current blanket fact. Per JPRA's own pages: the Air Force was designated EA for escape and evasion in 1952 (historical); the Joint Services SERE Agency became DoD EA for POW/MIA matters in 1991; JPRA (created 1999, a Chairman's Controlled Activity since Aug 2011) is the DoD Office of Primary Responsibility for Personnel Recovery training/education. USSOCOM's SERE 400 / SERE 425 exist via DAFI credit rules only — lengths NOT PUBLICLY PUBLISHED.",
      who: "Read first — this card governs how every other SERE entry in this tile is framed.",
      quals: [
        "JPRA, with the Components, establishes Joint Training Standards for Code of Conduct/SERE — which the services' schools deliver against. JPRA's Personnel Recovery Academy is co-located with the AF school at Fairchild.",
        "USSOCOM runs specialized SERE courses (SERE 400 / SERE 425) credited in DAFI 10-3004 toward AF Initial Level-B — existence verified via the DAF instruction's credit rules only; lengths/locations/prerequisites NOT PUBLICLY PUBLISHED in sources opened (named level, cross-link Spec Ops).",
      ],
      how: ["Governance card — the per-service entries below carry the schools."],
      flags: [
        "⚠ The “AF is DoD executive agent” claim is an oversimplification, printed as the pack prints it: the 1952 EA designation was for escape and evasion (historical); JPRA is the current OPR.",
      ],
      links: [],
      source: "JPRA's own pages; DAFI 10-3004 credit rules; Part B §7.0",
      crossLinks: [{ label: "Special Forces & Elite Units — SERE named in pipelines", view: "specops" }],
    },
    {
      id: "af-sere",
      branch: "Air Force",
      name: "Air Force SERE — 336th Training Group, Fairchild AFB (DAFI 10-3004)",
      summary:
        "Air Force SERE at the 336th Training Group, Fairchild AFB (DAFI 10-3004): Level-A (all members, entry-level), Initial Level-B (SV96A, Lackland), Advanced Level-B (SV97A, Fairchild), Level-C = SV97A + SV98A. Current Level-C total length: NOT PUBLICLY PUBLISHED in DAFI 10-3004 — the “19 days” describes the retired SV80A package. Continuation currency: SS02/SS03/SS05 every 36 months; SS06 12 months (ejection) / 36 months (non-ejection). Water/egress courses SV85A / SV90A / SV84A named — cross-link Egress.",
      who: "Per DAFI Table 3.1 (as amended by DAFGM2025-01): Deep Strike, Fighter/Attack, Rescue & SOF vertical lift, Tactical Systems Operators (1A8XX), Air Force Special Warfare (19ZXX/1ZXXX), and SERE Specialists are the core Level-C/Advanced populations; airlift, tanker, aeromedical, OSI, EOD (3E8X1/32E3H), Weather Parachutists and others get assigned combinations of Level-B, water, underwater-egress, and Arctic courses. All other DAF personnel default to Level-A.",
      quals: [
        "Levels (DAFI 10-3004 definitions): Level-A — minimum for all members, attained in entry-level training. Initial Level-B (SV96A, Lackland) — medium risk of exploitation, isolation highly unlikely. Advanced Level-B (SV97A, Fairchild) — high risk of exploitation, moderate risk of isolation. Level-C = SV97A + SV98A (SV98A = Long Term Survival Training, Fairchild) — high risk of isolation/capture/exploitation. Legacy: graduates of the former SV80A Combat Survival Training before 15 June 2020 are Level-C trained.",
        "Water/egress courses (do not conflate): SV85A Emergency Parachute and Water Survival Training, Fairchild (ejection/bailout personnel); SV90A Water Survival, Non-Parachuting, Fairchild (ditching-aircraft crews); SV84A Underwater Egress Training, Fairchild (helicopter/tilt-rotor crews — cross-link the Egress tile). Fairchild's Water Survival Course is 2 days, parachuting + non-parachuting parts, capped at 34 students (Fairchild feature).",
        "The schoolhouse: AETC fact sheet — the 336 TRG at the U.S. Air Force Survival School, Fairchild AFB, WA teaches 15 courses to ~17,000 students annually (9 at Fairchild; 6 at detachments — Eielson AFB, NAS Pensacola, JBSA-Lackland). See flag F-9 for the variance.",
      ],
      how: [
        "Currency — PUBLISHED (home-station SERE Mission Preparation, DAFI Ch. 4): SS02 Combat Survival Preparation — every 36 months; SS03 Conduct After Capture — 36 months; SS05 water survival preparation — 36 months (SS05F flyers within 120 hours); SS06 Emergency Parachute Preparation — 12 months (ejection) / 36 months (non-ejection); SS08 HEED/underwater egress preparation — 36 months; SS01 SERE Mission Orientation — once per PCS, before first operational flight.",
        "Badge: none for students — recorded in ARMS by SS/SV identifiers (SS37 = SV97A, SS38 = SV98A, SS31 = SV85A, SS32 = SV90A, SS33 = SV87A). Multinational attendance only per SAF/IA/foreign-disclosure guidance.",
      ],
      flags: [
        "⚠ Current Level-C total length: NOT PUBLICLY PUBLISHED in DAFI 10-3004 — the “19 days” in older UPT guides describes the retired SV80A package; do not carry it forward (register §16 #39).",
        "⚠ F-9 336 TRG SCALE — 15 courses/~17,000 students (AETC fact sheet) vs 19 courses/~20,000 students at three locations (Fairchild's own history pamphlet). Both print; the variance is flagged, not resolved.",
        "⚠ NAS Pensacola credit is historical/equivalency (pre-1996 NAWSTP or current NASTP + SS05) — the AF courses moved to Fairchild in 2010. AETCI 36-2605 Vol 11 manages the schoolhouse and explicitly does not apply to the USSF; DAFI 10-3004 itself DOES apply to the Space Force for attendance.",
      ],
      links: [],
      source: "DAFI 10-3004 (18 Mar 2025, supersedes AFI 16-1301) + DAFGM2025-01; AETC fact sheet; Part B §7.1 + flag F-9",
    },
    {
      id: "sere-specialist",
      branch: "Air Force",
      name: "SERE Specialist — AFSC 1T0X1 (selection 15 vs 19 days flagged; AETC's 40% figure)",
      summary:
        "SERE Specialist (AFSC 1T0X1): the instructors are an AFSC, not an add-on. Entry standards (airforce.com): pull-ups 8, sit-ups 48, push-ups 40 (2 min each), 1.5-mile run under 11:00. Route: BMT → SASS at Lackland — ⚠ length CONFLICT: 15 days (airforce.com) vs 19 days (AETC/Buckley news), flagged F-4 — → SST-AC, 5.5 months, 17 training phases, Fairchild. Attrition: AETC publishes that only 40% of candidates who begin earn the beret — attributed, one of only two attrition figures in this section.",
      who: "Enlisted Airmen volunteering for the 1T0X1 AFSC — specialists who prepare aircrew and high-risk personnel to survive and return with honor, and staff Personnel Recovery programs.",
      quals: [
        "Entry standards (airforce.com, published): pull-ups (2 min) 8; sit-ups (2 min) 48; push-ups (2 min) 40; 1.5-mile run under 11:00; swim/water confidence required (no distance/time published). ASVAB/age/clearance NOT PUBLICLY PUBLISHED on the career page opened.",
      ],
      how: [
        "BMT (7.5 weeks, Lackland) → SERE Specialist Assessment and Selection (SASS), Lackland → SERE Specialist Training Apprentice Course (SST-AC) — 5.5 months, 17 training phases, Fairchild AFB (environments named on the page only: forest, desert, coastal, tropic, open-ocean). AETC describes the full pipeline as “more than a year.”",
        "Currency: AETCI 36-2607 — S-V81-A postgraduate evaluations within 6 months of graduation; SERE Specialists are the only AFSC authorized to deliver SS03 Conduct After Capture (DAFI 10-3004 §4.2.2).",
        "Structural negative: no separate “Combat Survival Instructor” certificate for non-SERE Airmen exists on official pages — instruction is a 1T0X1 function plus DAFI Ch. 4 SMP certification. “SERE Augmentee” (3-day local insight training) is assistance, NOT an instructor certification (register §16).",
      ],
      flags: [
        "⚠ F-4 SELECTION LENGTH CONFLICT — airforce.com (current recruiting) says SASS is 15 days; AETC/Buckley news articles describe a 19-day screening course. Print both, dated; ETCA check needed before settling (register §16 #37).",
        "Attrition (officially published, attributed): AETC — “only 40% of candidates who begin earn the beret.” An AETC news figure, attributed, not a standard — one of only two attrition figures in this whole section.",
      ],
      links: [],
      source: "airforce.com (entry standards); AETC news (19-day + 40% figures); CFETP 1T0X1; Part B §7.2 + flag F-4",
      badge: "Pewter-green SERE beret + SERE Specialist arch + beret flash device (CFETP 1T0X1) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — SERE beret and arch", view: "uniforms" }],
    },
    {
      id: "navy-sere",
      branch: "Navy",
      name: "Navy SERE (Level C) — CENSECFOR (12 vs 14 days flagged)",
      summary:
        "Navy SERE / Code of Conduct training (CENSECFOR) for personnel designated high-risk of capture — SERE East at Portsmouth Naval Shipyard (Detachment Kittery) and SERE West at NAS North Island. ⚠ Length CONFLICT in official sources: 12-day (navy.mil press release) vs 14-day (NETC news story) — flagged F-3, never one as settled. Prerequisites: medical criteria linked from both detachments; specific numbers NOT PUBLICLY PUBLISHED.",
      who: "Personnel designated high-risk of capture — Sailors and Marines so designated (aircrew, SOF, EOD at named level).",
      quals: [
        "Medical criteria for high-risk training are linked from both detachments; specific numbers NOT PUBLICLY PUBLISHED on the locations page.",
        "What it is (CENSECFOR): Code of Conduct training “to survive behind enemy lines, evade capture, resist exploitation if captured, and if possible, escape isolation.”",
      ],
      how: [
        "Locations: Detachment Kittery (SERE East) — Portsmouth Naval Shipyard, Portsmouth, NH (listed as Kittery, ME in MILPERSMAN 1306-955); Detachment North Island (SERE West) — NAS North Island, San Diego, CA.",
        "Badge: none published. Currency: not published on pages opened.",
      ],
      flags: [
        "⚠ F-3 LENGTH CONFLICT — navy.mil press release: “12-day Code of Conduct course”; NETC news story: “14-day Code of Conduct course.” Print both or verify in CANTRAC — never one as settled.",
        "⚠ The “Level C” label itself was not on a Navy page opened — Navy pages say “Code of Conduct / high-risk”; the level label is DoD framing (register §16 #24).",
      ],
      links: [],
      source: "CENSECFOR; navy.mil press release vs NETC news story (flagged); MILPERSMAN 1306-955; Part B §7.3 + flag F-3",
    },
    {
      id: "navy-sere-instructor",
      branch: "Navy",
      name: "SERE Instructor — Navy NEC 807A (NEC 805A prerequisite; 90 days instructor training)",
      summary:
        "Navy SERE Instructor (NEC 807A): instructor duty at SERE East/West via Shore Special Programs — detailer release + screening (MILPERSMAN 1306-900) + high-risk instructor screening + psych eval + interview; NEC 805A (Instructor) is a prerequisite. Selected members attend 90 days of SERE instructor under training; tour length 36 months.",
      who: "Sailors in My Navy Assignment billets under NEC 807A (MILPERSMAN 1306-955: “physically and mentally challenging”).",
      quals: [
        "Detailer release + Shore Special Programs screening (MILPERSMAN 1306-900) + high-risk instructor screening + psych eval + interview; NEC 805A (Instructor) is a prerequisite (see the Instructor Certifications tile).",
      ],
      how: [
        "Selected members attend 90 days of SERE instructor under training; tour length 36 months.",
      ],
      flags: [
        "⚠ Full numeric eligibility sits in the MILPERSMAN 1306-955 PDF — not extracted verbatim; flagged per the pack.",
      ],
      links: [],
      source: "MyNavy HR / MILPERSMAN 1306-955; Part B §7.4",
    },
    {
      id: "army-sere",
      branch: "Army",
      name: "Army SERE — Level C, Fort Novosel (Rucker)",
      summary:
        "Army SERE Level C at the U.S. Army SERE School, Fort Novosel (Rucker), AL — the Aviation-branch Level-C school; all Army aviators attend. ATRRS reservation; complete packet due NLT 45 days before start; SERE physical (DD 2807-1/2808 + EKG) valid 2 years; ACFT within 90 days. No badge. A second Level-C site at Camp Mackall is NOT CONFIRMED — see the register.",
      who: "Army personnel at high risk of isolation/capture/exploitation (Level A = initial-entry for all; Level B = moderate risk — only Level C is the resident school).",
      quals: [
        "SERE physical (DD 2807-1/2808 + EKG) valid 2 years; ACFT within 90 days; complete packet due NLT 45 days before start.",
        "One published ASI exception: Clinical Psychologists (73B) may seek the M6 (SERE) ASI via the school's medical OIC.",
      ],
      how: [
        "ATRRS reservation; classes report/graduate on Saturdays (report Day Zero 1000, Yano Hall Bldg 6005). No unit cost except transportation; meals/lodging provided. Badge: none.",
      ],
      flags: [
        "⚠ A second Army Level-C site for SOF at Camp Mackall, NC (USAJFKSWCS) is widely described but no current official JFKSWCS SERE school page was retrieved — NOT CONFIRMED in the sweep (register §16 #14). Fort Novosel is the verified Army entry.",
      ],
      links: [],
      source: "U.S. Army SERE School, Fort Novosel — published course pages; Part B §7.5",
    },
    {
      id: "usmc-cg-sere",
      branch: ["Marine Corps", "Coast Guard"],
      name: "USMC attendance at SERE — and the Coast Guard SERE verified negative",
      summary:
        "USMC SERE: no Marine Corps-run SERE school exists on official pages — Marines attend Navy SERE (Warner Springs, CA, or NAS Brunswick, ME for helicopter crew chiefs — 1 week of classes + 1 week of field training per 3rd MAW; Kittery, ME for SAR corpsmen). Coast Guard SERE: VERIFIED NEGATIVE — no CG SERE school or Level C course was found on any official CG page; this section does NOT create a “CG SERE” entry. CG aircrew survival runs through the ATTC/AST community at named level.",
      who: "Marines in pipelines that require SERE (Navy school pages govern prerequisites/badge/currency — NOT published on USMC pages); CG aircrew via ATTC/AST channels.",
      quals: [
        "USMC published pipelines: helicopter crew chiefs — Naval Aircrew Candidate School (Pensacola) → SERE at Navy Remote Training Site Warner Springs, CA, or NAS Brunswick, ME — described as 1 week of classes + 1 week of field training (3rd MAW); MV-22 crew chiefs → Brunswick, ME; SAR corpsmen → Kittery, ME.",
        "Coast Guard: ASTs “facilitate survival training such as swim tests, land/sea survival lectures and shallow water egress training” (ATTC), and an AST advanced Survival Instructor resident course exists (named only, no length/prerequisites published).",
      ],
      how: ["Route: Navy SERE detachments (USMC); ATTC/AST community (CG). An Air Force SERE-levels article syndicated on marines.mil is NOT USMC policy and was not used."],
      flags: [
        "⚠ VERIFIED NEGATIVE (CG) — no CG SERE school or Level C course was found on any official CG page (register §16 #36). Stated as a publication finding, not proof of absence.",
      ],
      links: [],
      source: "3rd MAW official coverage (USMC pipelines); ATTC (CG); Part B §7.6–7.7",
    },
  ],
};

/* ==================== MOUNTAIN / COLD / JUNGLE ==================== */

const MOUNTAIN: QualTile = {
  key: "mountain",
  label: "Mountain / Cold / Jungle",
  tileSub: "Part B §8 · NWTC (BMMC) · Bridgeport · Arctic SV87A · JOTC",
  intro:
    "Mountain, cold-weather, and jungle schools. The pack's corrections ship as printed: NWTC's mountaineering course is BMMC (there is no “BPMC”), and no wearable Army mountaineering badge is confirmed — SQI/ASI only (see the register). NWTC course lengths carry the F-8 conflict.",
  entries: [
    {
      id: "nwtc",
      branch: "Army",
      name: "Northern Warfare Training Center (NWTC) — Army, Black Rapids, AK (course is BMMC — no “BPMC”)",
      summary:
        "NWTC (11th Airborne Division, managed from Fort Wainwright): CWOC — Cold Weather Orientation Course; CWLC — Cold Weather Leaders Course; ISCRC — Isolation Survival in Cold Regions Course (not in ATRRS). ⚠ Length conflicts flagged F-8: CWOC 4 days (DVIDS) vs 5 days (Infantry Magazine); CWLC 11 days (Infantry Magazine) vs 15 days (DVIDS) — the NWTC page states no length. Badge: Arctic Tab for CWOC/CWLC graduates at Black Rapids (USARPAC policy). Correction: NWTC's mountaineering courses are BMMC/AMMC — no “BPMC” exists.",
      who: "CWOC: commanders/staff officers (graduates can supervise CWIC tasks). CWLC: squad/platoon leaders (graduates are the trainers for CWIC tasks). ISCRC: personnel at high risk of isolation in extreme cold.",
      quals: [
        "Per 11th Abn Div Reg 350-1 as published: CWOC graduates can supervise CWIC tasks; CWLC graduates are the trainers for CWIC tasks. CWIC itself is an annual unit certification in the 11th Airborne (every Soldier completes it annually) — a unit requirement, not a CWLC refresher.",
        "ISCRC: not listed in ATRRS (enrollment by NWTC coordination, as published).",
      ],
      how: ["NWTC, Black Rapids, AK — 11th Airborne Division's cold-region/mountain proponent (managed from Fort Wainwright)."],
      flags: [
        "⚠ F-8 NWTC LENGTHS — CWOC: 4 days (DVIDS, official secondary) vs 5 days (Infantry Magazine); CWLC: 11 days (Infantry Magazine, by NWTC's training OIC) vs 15 days (DVIDS). The NWTC page states no length — print the spread, never pick silently.",
        "⚠ CORRECTION — the tasking's “BPMC” was NOT found; NWTC's mountaineering courses are BMMC/AMMC (see the AMWS entry — BMMC is the Basic Military Mountaineer course). No “BPMC” entry ships.",
      ],
      links: [],
      source: "NWTC pages; 11th Abn Div Reg 350-1; DVIDS vs Infantry Magazine (flagged); Part B §8.1 + flag F-8",
      badge: "Arctic Tab — graduates of CWOC or CWLC at Black Rapids are authorised wear per USARPAC policy — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Arctic Tab", view: "uniforms" }],
    },
    {
      id: "amws",
      branch: "Army",
      name: "Army Mountain Warfare School (AMWS) — Jericho, VT (BMMC; SQI E / ASI A4)",
      summary:
        "Army Mountain Warfare School (AMWS), Camp Ethan Allen Training Site, Jericho, VT (Vermont ARNG) — executive agent for military mountaineering for the U.S. Army Infantry School. BMMC — Basic Military Mountaineer: prerequisite training none, open to all MOS; enlisted E3–E9 → SQI E; WO1–WO3 and O1–O5 → ASI A4. ⚠ A wearable Army Mountaineering Badge for BMMC graduates is NOT CONFIRMED — the AMWS page awards SQI/ASI only (register).",
      who: "BMMC: all MOS (enlisted E3–E9; WO1–WO3; O1–O5). Advanced courses per the prerequisites below.",
      quals: [
        "BMMC (071-SQI E): prerequisite training: none; MOS: none — open to all MOS.",
        "Advanced Military Mountaineer (Summer) — prereq BMMC; E4–E8 → ASI M3. (Winter) — prereq BMMC; E4–E8 → ASI M4.",
        "Rough Terrain Evacuation Course (RTEC) — no prereq; E4–E8 → ASI M5. Mountain Planners Course (MPC) — no prereq; E4–E9 → ASI M8 (enlisted) / A5 (officer/WO). Mountain Rifleman Course (MRC) — prereq Sniper School (ASI B4); E3–E8 → ASI M6; students bring a unit-assigned M110A1.",
      ],
      how: [
        "AMWS, Jericho, VT. BMMC summer iterations May–Oct, winter Jan–Mar. Length NOT stated on the AMWS courses page — not filled.",
      ],
      flags: [
        "⚠ NOT CONFIRMED — a wearable Army Mountaineering Badge for BMMC graduates: the AMWS page awards SQI/ASI only; a Jan 2026 “first badge” announcement surfaced only via a non-official aggregator (register §16 #16). No badge is claimed anywhere in this section.",
      ],
      links: [],
      source: "AMWS courses page; DA PAM 611-21 (Oct 2025); Part B §8.2",
    },
    {
      id: "bridgeport",
      branch: "Marine Corps",
      name: "Mountain Warfare Training Center (MCMWTC) Bridgeport — USMC formal schools (1st-class PFT ≤30 days)",
      summary:
        "MCMWTC Bridgeport, CA (Pickel Meadow; training elevation 6,800–11,500 ft): Summer and Winter Mountain Leaders Courses — 35 training days each. Common prerequisites for ALL MCMWTC formal schools (catalog Command Screening Checklist): First-Class PFT within 30 days of convening, 12 months remaining on contract, height/weight per MCO 6110.3A, medically qualified for demanding PT at high altitude/cold, proficient in land navigation. Instructor: the “Red Hat” (~9 months arrival to basic instructor qualification).",
      who: "Mountain Leaders courses: company-grade officers, SNCOs, Sergeants (catalog). Seat route: Mountain Leaders, Mountain Engineer, Basic Cold Weather Advisor, Mountain Communications, Mountain Scout Sniper = TECOM funded (names via S-3 chain to MARFOR G-3 for MCTIMS enrollment); Animal Packing, Mountain Medicine, Cold Weather Medicine, Horsemanship = unit funded; Scout Skier and Assault Climbers = scheduled only in support of MTX training audiences — not open-enrollment schools.",
      quals: [
        "Common prerequisites (catalog Command Screening Checklist — ALL MCMWTC formal schools): appropriate grade/MOS per MCTIMS TPD; 12 months remaining on contract; no family/financial hardship precluding completion; gear list uniforms/equipment; height/weight per MCO 6110.3A; medically qualified for demanding PT at high altitude/cold (no previous frostbite/cold-weather injuries), full duty; First-Class PFT within 30 days of convening — required for ALL MCMWTC courses; proficient in land navigation. Failure on any = disqualified.",
        "Summer Mountain Leaders Course (SMLC, M24M7A1): 35 training days. Phases named: I Mountain Introduction; II Technical Skills/Climbing; III Final Exercise; IV Alpine & Mountain Movement; V Graduation. Published in-course standard: Mountain Endurance Test — ~3.8-mile ruck run in utilities with 55-lb dry pack, goal 70 minutes or less, minimum 11 pullups, 1 rope climb (part of overall GPA); written exams 80% for knowledge proficiency.",
        "Winter Mountain Leaders Course (WMLC, M24M7B1): 35 training days. Phases named: I PET and Mountain Introduction; II Field Introduction; III TTPs; IV Over the Snow Mobility; V Final Exercise/Graduation. Learners finish Phase IV as a Basic Ski Instructor.",
        "Mountain Warfare Instructor — “Red Hat”: orders to MCMWTC go to Sergeants/SNCOs of nearly any MOS (monitor + screening packet). Complete both Mountain Leaders Courses + instructor development course + safety certifications + CO endorsement; arrival to basic instructor qualification ≈9 months. Progression Basic → Senior → Master across 4 functional areas; additional published requirements: ORM, Systems Approach to Training and Education, CPR, Range Safety certifications, high-risk training screening, Formal School Instructor Course. Civilian credentials via Lake Tahoe Community College partnership (avalanche awareness/rescue, swiftwater rescue, Wilderness First Responder, technical rope rescue). Instructor recertification weeks run every season before students arrive.",
        "Other catalog courses (named level): Mountain Communications (M24CXJ1); Mountain Scout Sniper (M24UNC1 — “0321 & IMS have priority”); Mountain Medicine (M24KAR1); Cold Weather Medicine (M24WAC1); Horsemanship & Animal Packing (M24MN61) / Animal Packing (M24MMM1); Summer/Winter Mountain Engineer (M24MES1/M24MEW1); Basic Cold Weather Advisor (M2403W1).",
      ],
      how: [
        "MCMWTC, Pickel Meadow, 21 miles NW of Bridgeport, CA. Source of record: MCMWTC AY25 Course Catalog (31 Oct 2024) + Red Hats page. Mountain Leader identifier: the unit's resident expert; no badge published. Red Hat identifier: the red hat — safety authority on any range/ridgeline at Bridgeport.",
        "USMC cold-weather survival (outside Bridgeport): verified negative as a standalone school — survival content is embedded in Mountain Leaders phases, with Cold Weather Medicine / Basic Cold Weather Advisor as the standalone cold-weather courses. No separate “Cold Weather Survival Course” entry ships.",
      ],
      flags: [
        "⚠ F-14 WMLC LENGTH — 35 days current (catalog + Red Hats) vs 34 and 42 in older articles. Use 35, note variance (printed above).",
        "⚠ Basic Cold Weather Advisor stated duration: the catalog gives report/graduate dates only (~11–12 calendar days by FY25 iteration dates) — schedule-derived, flagged (register §16 #11).",
      ],
      links: [],
      source: "MCMWTC AY25 Course Catalog (31 Oct 2024); Red Hats page; Part B §8.3 + flag F-14",
    },
    {
      id: "arctic-survival",
      branch: "Air Force",
      name: "Arctic Survival School (SV87A) — Air Force, Eielson AFB (“Cool School”)",
      summary:
        "Arctic Survival Training, course SV87A — Detachment 1, 66th Training Squadron (336 TRG), Eielson AFB, AK. One-time mandatory event for Airmen assigned/attached to Alaska units, completed within 90 days of assignment (DAFGM2025-01). Length: 5 days per a May 1993 Flying Safety Magazine feature (official but dated) — current length NOT PUBLICLY PUBLISHED. ARMS identifier SS33; no refresher published.",
      who: "Aircrews and designated personnel. DAFGM2025-01: one-time mandatory event for Airmen assigned/attached to Alaska units (incl. aircrew, Flying Crew Chiefs, Crash Recovery, TACP, ALOs, Det 460 personnel), completed within 90 days of assignment at the first available course; polar-overflight crews should also attend. Eielson rule: no local orientation flights when projected ground temps are below 0°F without SV-87.",
      quals: ["Assignment/attachment to an Alaska unit (or polar-overflight crew) per DAFGM2025-01 — see Who."],
      how: [
        "Eielson AFB, AK. Badge/currency: none; ARMS identifier SS33; one-time event, no refresher published.",
      ],
      flags: [
        "⚠ Length: “5 days” is per a May 1993 Flying Safety Magazine feature (official but dated — it also coins the “COOL SCHOOL” nickname and 500+ attendees/year then). No current ETCA length found — printed as “5 days (1993 official feature; current length NOT PUBLICLY PUBLISHED).”",
        "⚠ “USAF Basic Military Mountain Course”: NOT CONFIRMED as an Air Force school — no AF page found; similarly named courses are Army-run (register §16 #44). (Separately, S-V81-C SERE Specialist Journeyman Arctic Training at Eielson is a SERE-specialist-only course, not a general mountain course.)",
      ],
      links: [],
      source: "DAFI 10-3004 / DAFGM2025-01; Flying Safety Magazine (May 1993, dated); Part B §8.4",
    },
    {
      id: "jotc",
      branch: "Army",
      name: "Jungle Operations Training Course (JOTC) — Army, Hawaii (+ Panama variant; Jungle Tab)",
      summary:
        "Jungle Operations Training Course (JOTC), Lightning Academy, 25th Infantry Division, Hawaii — 12 days. Seat route is NOT a simple ATRRS walk-up: request memorandum through the Major Subordinate Command signed by the first O-6 → 25th ID Schools → division CG/DCSM approval; plan 45–90 days from packet. Badge: Jungle Tab — DA has approved Army-wide wear as an official Skill Tab (army.mil, 2026). Panama variant (JOTC-P): 18 days; the first two Guardians completed it (Sep 2026) — individual attendance, not an SF school.",
      who: "Primarily 25th ID Soldiers (walk-ons prioritise 25th ID); outside requests due 45 days prior; JOTC is excluded from the 14-day seat-reallocation policy.",
      quals: [
        "Detailed entry standards live in the JOTC Course Description/Joining Instructions (not extracted); an army.mil course article notes students must first pass a combat water survival test.",
        "Focus areas named only: Jungle Dismounted Mobility, Land Navigation, Combat Tracking, Jungle Tactics, Survival Training.",
      ],
      how: [
        "12 days (two weeks, published “crawl-walk-run” methodology), East Range/Schofield Barracks, HI. Seat route: LA Form 100 + service record through the chain above; plan 45–90 days from packet.",
        "Panama variant (spaceforce.mil, 2026): JOTC-Panama — 18 days, alongside Army Soldiers and Panamanian forces; events named only (5K run, combat water survival assessment, knots test, culminating event); the first two Guardians completed it (Sep 2026 reporting) — individual attendance, not an SF school. Currency: none published.",
      ],
      flags: [
        "Attrition note (official, attributed): a 2024 army.mil article publishes a ~70% pass rate for JOTC — included only with that attribution, per the pack.",
      ],
      links: [],
      source: "Lightning Academy / 25th ID; army.mil (2026, Jungle Tab); spaceforce.mil (2026, JOTC-P); Part B §8.5",
      badge: "Jungle Tab — army.mil (2026) publishes DA has approved Army-wide wear of the Jungle Tab as an official Skill Tab for any current Active/Reserve/Guard JOTC graduate, retroactive to Fort Sherman, Panama graduates 1990–1999 and Hawaii graduates after Sherman's closure — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Jungle Tab", view: "uniforms" }],
    },
  ],
};

/* ========================= SNIPER / PRECISION ========================= */

const SNIPER: QualTile = {
  key: "sniper",
  label: "Sniper & Precision",
  tileSub: "Part B §9 · Existence, prerequisites, length ONLY — no curriculum",
  intro:
    "Sniper and precision schools at the pack's strictest level: existence, prerequisites, and length ONLY — no curriculum anywhere in this tile.",
  entries: [
    {
      id: "army-sniper",
      branch: "Army",
      name: "U.S. Army Sniper Course — Fort Moore (7 weeks; ASI B4)",
      summary:
        "U.S. Army Sniper Course (Infantry School, Fort Moore): the Army's primary sniper course — 7 weeks. Who/qualifications (official prerequisites page): enlisted and NCOs E3–E6 in MOS 11B, 19D, or 18-series, assigned or to be assigned to a Sniper MTOE position; eyesight correctable to 20/20; red/green colour-blind test passed; current ACFT within 30 days of start. Identifier: ASI B4 (Sniper). No separate sniper badge.",
      who: "Active/Reserve/Guard; also USMC/USAF/USN active and reserve enlisted and NCOs E3–E6, in MOS 11B, 19D, or 18-series, assigned or to be assigned to a Sniper MTOE position.",
      quals: [
        "No profile preventing live-fire training; eyesight correctable to 20/20; red/green colour-blind test passed; height/weight IAW AR 600-9; current ACFT within 30 days of start; current DA 7801.",
        "Waivers: non-medical NLT 75 days prior, medical NLT 90 days; authority = Infantry School Commandant.",
      ],
      how: [
        "7 weeks (army.mil school feature; the prerequisites page itself does not state length). Currency: none published.",
      ],
      flags: [],
      links: [],
      source: "army.mil school feature + official prerequisites page; Part B §9.1",
      badge: "ASI B4 (Sniper). No separate sniper badge.",
    },
    {
      id: "ngmtc",
      branch: "Army",
      name: "National Guard Marksmanship Training Center (NGMTC) — Camp Robinson, AR (named level)",
      summary:
        "NGMTC, Camp Robinson, AR: NationalGuard.mil publishes it as “an official Army schoolhouse for squad-designated marksman, small arms and sniper courses,” open to Soldiers in any Army component, graduates earning ASIs. ⚠ Lengths/prerequisites/B4 award for its sniper course: NOT published on the official pages reviewed — dated/non-official figures are not imported.",
      who: "Soldiers in any Army component (as published).",
      quals: ["NOT PUBLICLY PUBLISHED in this pass for the sniper course — see flag."],
      how: ["Named level only, per the pack (§9.2)."],
      flags: [
        "⚠ NGMTC Sniper Course length/prerequisites/B4 award: NOT published on the official pages reviewed (register §16 #19) — do not import dated/non-official figures.",
      ],
      links: [],
      source: "NationalGuard.mil (NGMTC schoolhouse statement); Part B §9.2",
    },
    {
      id: "usmc-precision",
      branch: "Marine Corps",
      name: "USMC precision — Mountain Scout Sniper (named level; Library cross-link)",
      summary:
        "USMC precision at named level: the Mountain Scout Sniper Course (M24UNC1) at MCMWTC Bridgeport — “0321 & IMS have priority,” common MCMWTC prerequisites apply (see the Mountain tile). The Scout Sniper Basic Course appears in the SLDP advanced-course list — this entry prints the course at named level only and cross-links the Library (the 0317 MOS transitioned; last Scout Sniper class Dec 2023 → 0322). No separate USMC sniper-school entry ships from this sweep.",
      who: "Per MCMWTC catalog — 0321 & IMS have priority; common MCMWTC prerequisites (First-Class PFT within 30 days, etc.) apply.",
      quals: ["Common MCMWTC prerequisites — see the Bridgeport entry in the Mountain / Cold / Jungle tile."],
      how: ["Named level only, per the pack (§9.3)."],
      flags: [],
      links: [],
      source: "MCMWTC AY25 Course Catalog; Part B §9.3",
      crossLinks: [{ label: "MOS Library — 0321 / 0322 transition note", view: "mos" }],
    },
  ],
};

/* ======================= INSTRUCTOR CERTIFICATIONS ======================= */

const INSTRUCTOR: QualTile = {
  key: "instructor",
  label: "Instructor Certifications",
  tileSub: "Part B §10 · MMTC · MAI/MAIT · CMC/CMT · 805A/MTS · MTI · CATM · IDC",
  intro:
    "Instructor certifications across the services — the credentials that let members teach: marksmanship master trainers and coaches, martial-arts instructors, drill instructors and combat instructors, Navy instructor/MTS, Air Force MTI/MTL and CATM, and the Coast Guard's instructor courses. Technique content lives in Close Combat / Weapons — this tile carries the CERTIFICATIONS only. MCIC numeric thresholds sit in the MCO checklist — NOT PUBLICLY PUBLISHED here, per the binding rule.",
  entries: [
    {
      id: "mmtc",
      branch: "Army",
      name: "Army — Marksmanship Master Trainer Course (MMTC) (5 weeks; ASI E1)",
      summary:
        "Marksmanship Master Trainer Course (MMTC): 5-week course at Fort Moore (316th Cavalry Bde), developed by the Army Marksmanship Unit; graduates return to units as marksmanship master trainers/coaches for the Integrated Weapons Training Strategy. Who: SGT through SFC, Active/Reserve/Guard; eyesight correctable to 20/20; current ACFT within 30 days. Identifier: ASI E1. (A standalone Army “Small Arms Instructor Course” title is NOT CONFIRMED — see the register.)",
      who: "Active/Reserve/Guard, SGT through SFC.",
      quals: [
        "No profile preventing live-fire training; eyesight correctable to 20/20; height/weight AR 600-9; current ACFT within 30 days. Waiver timelines as the Sniper page (75/90 days; Infantry School Commandant).",
        "Systems as published: rifle/carbine, pistol, M249, SDMR, sniper systems.",
      ],
      how: ["5 weeks, Fort Moore (316th Cavalry Bde). Currency: none published."],
      flags: [],
      links: [],
      source: "MMTC published course pages (Fort Moore); Part B §10.1",
      badge: "ASI E1.",
    },
    {
      id: "macp-instructor",
      branch: "Army",
      name: "Army — Modern Army Combatives Program (MACP) instructor levels",
      summary:
        "MACP instructor levels — current naming (army.mil / Infantry Magazine, Winter 2025-26): three levels — Basic Combatives Course (BCC), Tactical Combatives Course (TCC), Combatives Master Trainer Course (CMTC); doctrine TC 3-25.150. Master-trainer training is resident at Fort Moore; BCC/TCC run at unit/installation level and by MTT. Legacy naming printed as a note (Level 1 = 40 hours; Level 2 = 80 hours; Levels 3–4 = 160 hours each). No badge; currency none published.",
      who: "Soldiers progressing through the combatives instructor levels (unit/installation BCC/TCC; resident master-trainer course at Fort Moore).",
      quals: [
        "Legacy naming (pre-renaming, still in older official articles): Level 1 = 40 hours; Level 2 = 80 hours (graduates instruct/assist Level 1); Levels 3–4 = 160 hours each (battalion-and-above master trainers). Print current names as primary, legacy as a note.",
      ],
      how: ["Master-trainer training resident at Fort Moore; BCC/TCC at unit/installation level and by MTT. No badge; currency: none published."],
      flags: [],
      links: [],
      source: "army.mil / Infantry Magazine (Winter 2025-26); TC 3-25.150; Part B §10.2",
    },
    {
      id: "mai-mait",
      branch: "Marine Corps",
      name: "USMC — MCMAP Instructor (MAI) / Instructor-Trainer (MAIT) (MCO 1500.59A)",
      summary:
        "MCMAP Instructor certifications under MCO 1500.59A: MAI — Corporal or above, at least grey belt, first-class PFT 225+, first-class CFT 270+; 3 weeks / 15 training days at MCMAP satellite schools; identifier: vertical tan tab. MAIT — Brown Belt MAI prerequisite (current TBS MAFCE page governs; older “black belt MAI” narratives superseded in detail), 7 weeks at MAFCE Quantico; identifier: vertical red tab. Belt gates: Brown belt — Corporal or above only; Black belt — Sergeant or above only. Technique content: Close Combat — cross-linked, not duplicated.",
      who: "MAI: Corporal or above meeting the prerequisites below. MAIT: Brown Belt MAIs with active certification (TBS MAFCE page — authoritative). Commanders should maintain ≥1 MAI per 50 Marines and ≥1 MAIT per 500 Marines (MCO 1500.59A).",
      quals: [
        "MAI prerequisites (official course articles): Corporal or above; at least grey belt (one older article says green — the current satellite-school article states grey minimum; flagged); first-class PFT 225+; first-class CFT 270+; appropriate grade PME completed. Assessments published: 2 quizzes, 2 written evaluations, 9 practical evaluations. Grey-belt entrants graduate with green belts.",
        "MAI recertification (current TBS/MAFCE page): EDIP, Tie-in, Warrior Study, Platform Instruction, Current Belt Performance Exam + NAVMC 11432 showing minimum 40 hours of instruction + written exam via MAFCE + CO endorsement.",
        "MAIT prerequisites (current TBS MAFCE page — authoritative): Brown Belt MAI with active certification in MCTIMS/MOL; 1st Class PFT/CFT (235) verified week 1; full duty; shoulder-injury-free 2 years; no concussion/TBI within 6 months; no NJP in the last year; not pending legal action; package due NLT 60 days before convene.",
        "MAIT recertification: MAI requirements + Current Belt Performance Exam NAVMC 11743 + Martial Arts Drill LOI + NAVMC 11432 showing facilitation of at least 1 MAI course every 2 years + written exam + CO endorsement.",
      ],
      how: [
        "MAI: 3 weeks / 15 training days at MCMAP satellite schools, taught by MAITs. Identifier: vertical tan tab on the belt.",
        "MAIT: 7 weeks at the Martial Arts Center of Excellence (MAFCE/MACE), Raider Hall, Quantico — three phases (named only). Identifier: vertical red tab; MAITs certify new MAIs.",
      ],
      flags: [
        "⚠ MAI belt-entry conflict: at least grey belt (current satellite-school article) vs green (one older article) — grey prints as the current minimum, flagged.",
        "⚠ MAIT prerequisite drift: older “black belt MAI” narratives are superseded in detail by the Brown Belt MAI prerequisite on the current TBS MAFCE page — note both, MAFCE governs.",
        "⚠ MOS numbers 0916 (MAI) / 0917 (MAIT) appear in the MCO 1500.59A table of contents seen via a NON-official copy — verify in the official marines.mil MCO PDF before printing the numbers; they do NOT print here (register §16 #10).",
      ],
      links: [],
      source: "MCO 1500.59A (23 Sep 2019); TBS/MAFCE pages; Part B §10.4",
    },
    {
      id: "cmc-cmt",
      branch: "Marine Corps",
      name: "USMC — Marksmanship Coach (0933) / Combat Marksmanship Trainer (0931) / 0932 (legacy)",
      summary:
        "USMC marksmanship instructor MOSs (Weapons Training Battalion, Quantico is the proponent): CMC, MOS 0933 — PFC through GySgt, any MOS, current Sharpshooter or higher; 15 training days. CMT, MOS 0931 — must hold 0933 with ≥6 months experience, current Expert; 15 training days. MOS 0932 (Small Arms Weapons Instructor): legacy / appearing-in-billets — an FY19 symposium message states the MOS had disbanded with reinstatement under analysis, yet 0932 still appears in TECOM eligibility lists (2024–2026). No refresher interval published for 0931/0933.",
      who: "CMC: PFC through GySgt, any MOS. CMT: Corporal through GySgt holding 0933. (FMTC at Division Schools, Camp Pendleton populations as published.)",
      quals: [
        "CMC prerequisites (current 1st Marine Division FMTC page): ≥1 year time in service; ≥1 year remaining on contract at graduation; current Sharpshooter or higher with the service rifle; full duty; height/weight; 20/20 corrected vision; Command Screening Checklist.",
        "CMT prerequisites: must hold 0933 with ≥6 months experience; Corporal through GySgt; current Expert with service rifle; current Combat Pistol Program qualification; completed MarineNet Basic Instructor Skills Course; ≥1 year remaining; full duty; checklist.",
        "Shooting Team (not a school): application to CO WTBN (permanent Team Captain) via chain; billets sought are 0933, 0931, and Competitor/Instructor. ARQ Train-the-Trainer requires formally trained 0931s (Cpl+) in FMTU/range/Bn-level CMT billets.",
      ],
      how: [
        "CMC: FMTC at Division Schools (Camp Pendleton) — 15 training days, max 30 students (WTBN Quantico's welcome-aboard concurs on population). Reserve variant: USMCR MTU coach course at Camp Upshur, Quantico (LCpl–GySgt, any MOS).",
        "CMT: 15 training days, max 10 students (FMTC). (Naming variance flagged in the pack: FMTC also calls 0931 “Marksmanship Instructor.”)",
        "Currency: no refresher interval published for 0931/0933; annual shooter qualification currency underlies both.",
      ],
      flags: [
        "⚠ MOS 0932 — present as legacy / appearing-in-billets, course details gated: an FY19 symposium message states the MOS had disbanded with reinstatement under analysis — yet 0932 still appears in TECOM Instructor-of-the-Year eligibility lists (2024–2026). No current WTBN 0932 course page was found (register §16 #9).",
      ],
      links: [],
      source: "FMTC (1st Marine Division) pages; WTBN Quantico; MCO 3574.2M framework; Part B §10.5",
    },
    {
      id: "usmc-sda-schools",
      branch: "Marine Corps",
      name: "USMC — Drill Instructor School + Combat Instructor School (MCIC) + Recruiters School (SDA schools)",
      summary:
        "USMC special-duty-assignment certifying schools: Drill Instructor School — 11 weeks at both depots, AMOS 0911 (Sergeants through Gunnery Sergeants; age 22–37 at reporting; first-class PFT 60 days prior; the Order's GT-below-90 line is NOT a hard cutoff — printed as the pack prints it). Marine Combat Instructor Course (MCIC) → AMOS 0913 (Corporals through Gunnery Sergeants) — ⚠ detailed GT/PFT thresholds sit in the MCO 1326.6 checklist: NOT PUBLICLY PUBLISHED here. Basic Recruiter Course — 7½ weeks, Corporal to Master Sergeant.",
      who: "DI School (MCO 1326.6): Sergeants through Gunnery Sergeants eligible (GySgt must volunteer for a first tour; mature Corporals by exception). MCIC (MCO 1326.6): Corporals through Gunnery Sergeants; Corporals need ≥1 year TIG by report date, resident Corporals Course complete, minimum 4.3/4.3 proficiency/conduct marks (exception possible). Recruiters School: Corporal to Master Sergeant meeting prerequisites.",
      quals: [
        "DI School published standards: first-class PFT 60 days prior to reporting; age 22–37 at reporting (exception possible with above-average PFT); ≥$550 net available funds on the NAVMC 11711 worksheet; medical/dental fit, physical within 12 months; basic swim qualification must be passed to advance (DI School East). GT note — the Order states Marines with GT below 90 “may experience difficulty” (NOT a hard cutoff — do not print 90 as a minimum; the GT 100 minimum applies to AMOI/second-tour only).",
        "MCIC: detailed GT/PFT thresholds sit in MCO 1326.6 Ch. 6/checklist — NOT PUBLICLY PUBLISHED on open pages; no numeric GT/PFT is quoted here. Challenger (recertification) route — published numbers: prior 0913s (within 3 years auto-enrolled) complete an abbreviated program concluding after Training Day 14 (+ IMTP Day 25 for MCT/ITB assignees); graduation requirements: PFT 2nd class minimum; SOI-W SOP test 80%; Range Safety Officer test 80%; height/weight; weapons performance exam — mastery; 15k hike in 4 hours max; TCCC Level 2 certificate; FLEX Level One + teach a 50-minute FLEX class.",
        "Recruiters School: ~1,500 Marines a year report; screened on financial/marital stability, morals, mental strength; ~80% assigned via the Headquarters Recruiting Screening Team. Evaluated on 6 written tests + 7 performance tasks.",
      ],
      how: [
        "DI School: 11 weeks at both depots (San Diego history page; Parris Island: “more than 500 hours,” 56 training days, 4 cycles/year). Identifier: AMOS 0911 + campaign cover on graduation. Adjunct: Series Commander Course — 2 weeks/10 training days (MCRD San Diego) for newly assigned RTR officers; required by MCO 1510.32; mastery 80% — not itself a DI certification.",
        "MCIC: at SOI-East (Camp Geiger) and SOI-West (Camp Pendleton); designated an SDA (MARADMIN 269/24). Full-course length NOT published on the SOI-W page consulted. Identifier: AMOS 0913; the Combat Instructor Ribbon requires serving in a 0913 billet, remaining qualified, and completing the tour (retroactive to 9 Oct 2002). Tour: 36-month SDA; AIP $300/month for 0913 billets (current Manpower table).",
        "Basic Recruiter Course (Recruiters School, MCRD San Diego): 7½ weeks; graduates report to one of 48 recruiting stations for a minimum 3-year tour. (Recruiter MOS number NOT stated on MCRC pages consulted — not added from memory.) Follow-on National Training Team courses (named level): Assistant Recruiting Instructor, Basic Prior Service Recruiter, Career Recruiter, Recruiting Instructor, Prior Service Recruiter SNCOIC, Marketing and Communication.",
      ],
      flags: [
        "⚠ GATED STANDARD — MCIC numbers live in the MCO 1326.6 checklist: named-level existence only here, never filled from secondary sources (binding rule).",
      ],
      links: [],
      source: "MCO 1326.6; MARADMIN 269/24; MCRD / SOI-E / SOI-W / MCRC pages; Part B §10.6",
    },
    {
      id: "isulc",
      branch: "Marine Corps",
      name: "USMC — Infantry Small Unit Leaders Course (ISULC) — the one certifying AITB course (PMOS 0365)",
      summary:
        "ISULC: the one certifying Advanced Infantry Training Battalion course — ISULC + resident Sergeants Course are required for PMOS 0365, Infantry Squad Leader (Squad Leader Development Program). Prerequisites: volunteer Corporal or Sergeant; first complete one advanced course (Advanced Infantry Marine, Machinegun, Mortar, Assault, Anti-Tank, or Scout Sniper Basic); all Corporal PME complete. ISULC length NOT published on pages consulted. No badge.",
      who: "Volunteer Corporals and Sergeants lateral-moving from 0311/0331/0341/0351/0352 toward PMOS 0365.",
      quals: [
        "First complete one advanced course (Advanced Infantry Marine, Advanced Machinegun, Advanced Mortar, Advanced Assault, Advanced Anti-Tank Missile Gunner, or Scout Sniper Basic); all Corporal PME complete; MOS Manual prerequisites for 0365. AITB screening checklist: first-class PFT within 30 days of reporting.",
        "Most other AITB courses are skill enhancement, NOT standalone certifications (AIMC, Advanced Machinegun/Mortar/Assault/Anti-Tank — no separate entries ship).",
      ],
      how: ["ISULC length NOT published on pages consulted — not filled. Identifier: PMOS 0365. No badge."],
      flags: [],
      links: [],
      source: "MARADMIN SLDP guidance; AITB screening checklist; Part B §10.7",
      crossLinks: [{ label: "MOS Library — 0365 Infantry Squad Leader", view: "mos" }],
    },
    {
      id: "navy-instructor-mts",
      branch: "Navy",
      name: "Navy — Instructor NEC 805A + Master Training Specialist (MTS)",
      summary:
        "Navy Instructor — NEC 805A, certified via the Navy Instructor Training Course (NITC), required for instructor billets. ⚠ The 22-day length (CIN A-012-0077) comes from official LaDR roadmap listings — flagged as LaDR-sourced, verify in CANTRAC. Master Training Specialist (MTS): a program for certified Navy Instructors (805A) assigned to a training command with an active MTS program; identifier MTS designation / NEC 8MTS. ⚠ PQS/oral-board/time-on-board details: NOT PUBLICLY PUBLISHED in this pass.",
      who: "805A: Sailors assigned to instructor billets. MTS: certified instructors (805A) assigned to a training command with an active MTS program (TAD orders do not meet the criteria).",
      quals: [
        "MTS (NETC's own definition): “a program for certified Navy Instructors (805A), designed to develop and qualify individuals who possess advanced knowledge, skills, and abilities that will enhance the delivery of quality education and training in the Navy… expected to take a leadership role and mentor, instruct and evaluate other instructors and develop curricula products.” The MTS test runs through NETC's Learning Assessment System (LAS).",
      ],
      how: ["NITC for 805A; MTS through the training command's active MTS program + LAS test. No breast insignia for 805A; the NEC is the identifier. Currency/transfer requalification not published on the FAQ page."],
      flags: [
        "⚠ 805A length (22 days, CIN A-012-0077) is LaDR-sourced — verify in CANTRAC (register §16 #28).",
        "⚠ MTS PQS/oral-board/time-on-board details circulate in secondary summaries but were NOT on the NETC FAQ page opened — NOT PUBLICLY PUBLISHED in this pass; pull NETCINST 1500.2 series (register §16 #29).",
      ],
      links: [],
      source: "NETC (MTS definition/FAQ); LaDR roadmaps (805A length, flagged); Part B §10.8",
    },
    {
      id: "navy-rdc",
      branch: "Navy",
      name: "Navy — Recruit Division Commander (RDC), NEC 8RDC (cross-link Assignments)",
      summary:
        "Recruit Division Commander (RDC), NEC 8RDC: E-5 and above (MyNavy HR) — ASVAB VE score 50 or greater (waiverable); PO2s: 6 years TIS, 2 years TIR before orders (waiverable); no NJP and no evaluation mark below 3.0 in the past 36 months (waiverable); most recent PFA “good low or better.” RDC “C” School, Great Lakes — 13 weeks.",
      who: "E-5 and above; able to lead physical training daily; outstanding appearance in uniform; warfare qualified (waivers case-by-case); articulate/professional.",
      quals: [
        "ASVAB VE score 50 or greater (waiverable); PO2s: 6 years TIS, 2 years TIR before orders (waiverable); no NJP and no evaluation mark below 3.0 in the past 36 months (waiverable); most recent PFA “good low or better,” within height/weight (no exceptions), 1.5-mile run or alternate cardio completed (mock PRTs acceptable).",
      ],
      how: [
        "RDC “C” School, Great Lakes — 13 weeks (navy.mil; LaDR CIN A-012-0037 concurs); up to 24 college credits per ACE (MyNavy HR note). Identifier: NEC 8RDC. (The Recruit Training Service Ribbon is for a successful TOUR, not the school — its criteria were not on an official Navy page opened; not published from ribbon sites, register §16 #45.)",
      ],
      flags: [],
      links: [],
      source: "MyNavy HR (RDC prerequisites); navy.mil / LaDR (13 weeks); Part B §10.9",
    },
    {
      id: "af-mti-mtl",
      branch: "Air Force",
      name: "Air Force — MTI / MTL (+ USAF Honor Guard Technical Training School)",
      summary:
        "Air Force Military Training Instructor (SDI 8B000) and Military Training Leader (SDI 8B100): MTI school at JBSA-Lackland; MTL School at Keesler AFB, MS (81st TRG — “100% of MTLs are trained here”). ⚠ Specific grade/fitness/conduct cut-offs sit in SPECAT/AFECD — NOT PUBLICLY PUBLISHED; course lengths in weeks NOT PUBLICLY PUBLISHED. Identifier: the MTI campaign hat; Master MTI “Blue Rope.” Also confirmed (not rumored): the USAF Honor Guard runs an eight-week Technical Training School at JBAB.",
      who: "MTI: selected via the DSD/SPECAT process (AFPC is final assignment authority; 737 TRG screening team). MTL: NCOs who supervise Airmen AND Guardians through technical training.",
      quals: [
        "MTI route: Military Training Instructor Basic Course (L3ALR8B000 0M4C), JBSA-Lackland, then MTI Trainer Course and Flight CC/MTI Supervisor Course (CFETP 8B000). Specific cut-offs: NOT PUBLICLY PUBLISHED (SPECAT/AFECD).",
        "USAF Honor Guard Technical Training School (confirmed, not rumored): the USAF Honor Guard (JBAB, Washington DC) — ~210+ ceremonial guardsmen, ~2,500 ceremonies/year — runs an eight-week Technical Training School on-site at JBAB (AETC-mandated curriculum) for competitively selected volunteers from 200+ career fields, plus a ten-day in-residence/mobile course for base honor guards. Officer track: SDI 85G0 Honor Guard Officer (CFETP, Sep 2025). Identifier: USAF Honor Guard badge + distinctive ceremonial uniform. The Drill Team is the Honor Guard's traveling component — NOT a separate school.",
      ],
      how: [
        "MTL School: Keesler AFB, MS (81st TRG; Matero Hall, reopened 2 Nov 2026; ~450+/year). (Do not swap: WAPS catalog confirms 8B100 = MTL; 8B200 = Academy MTI.) MTI identifier: the MTI campaign hat (presented at graduation); Master MTI “Blue Rope”; recognition history — MTI Ribbon (1998–2014 eligibility), graduates on/after 4 Sep 2014 receive the Air Force Special Duty Ribbon (AFMAN 36-2806 via AFBCMR decision). Stan/Eval evaluates Honor Guard continuously; no published refresher interval.",
      ],
      flags: [
        "⚠ MTI/MTL course lengths in weeks: NOT PUBLICLY PUBLISHED on pages opened (register §16 #38). The MTL rope/cord color is not verified on an official page in this sweep — no color is published as fact.",
        "⚠ F-16 MTL FOOTPRINT (background) — 34 locations (2 AF fact sheet) vs 45 (Keesler article): variance flagged in the pack; not printed as a figure here.",
      ],
      links: [],
      source: "CFETP 8B000 / 85G0; 81st TRG (Keesler); AETC (Honor Guard); Part B §10.10 + flag F-16",
    },
    {
      id: "af-catm-combatives",
      branch: "Air Force",
      name: "Air Force — CATM instructor (3P0X1B) + Combatives instructor (annual recertification published)",
      summary:
        "CATM (Combat Arms Training and Maintenance): the marksmanship-instructor function inside Security Forces — AFSC 3P0X1B (B-shred). Governing: DAFI 31-131 (applies to the whole DAF including USSF) + DAFMAN 31-131 Vol 1 Ch. 4 (Instructor Certification). Currency — PUBLISHED: annual recertification / task qualification (AFJQS §5). No separate “marksmanship instructor badge” exists — none invented. Air Force Combatives instructor: Basic Instructor via the 40-hour (five-day) Basic Instructor Course; Senior Instructor tier named.",
      who: "CATM: Security Forces pipeline (JBSA-Lackland) + local training/evaluation/certification under the CATM structure. Non-CATM personnel can be certified locally as Firing Line Official / Range Safety Officer / Control Tower Operator / assistant instructor under a CATM-developed program.",
      quals: [
        "AFJQS 3P0X1B — critical tasks certified by a third party (CATM Section Chief or higher); example core task: instruct a 50-minute AFQC block (pistol or rifle/carbine) from approved lesson plans. Dedicated CATM school length NOT PUBLICLY PUBLISHED.",
        "Combatives: tiers named on official pages — Basic Instructor and Senior Instructor (program: AFTTP 3-4.9). Basic Instructor earned via the 40-hour (five-day) Air Force Combatives Program Basic Instructor Course, delivered by mobile/existing instructor cadres — graduates “will be able to teach the basic-level curriculum” in their units. Specific rank/fitness prerequisites and currency: NOT PUBLICLY PUBLISHED; no central schoolhouse published; no badge.",
      ],
      how: ["CATM currency — PUBLISHED: annual recertification / task qualification (AFJQS §5)."],
      flags: [],
      links: [],
      source: "DAFI 31-131; DAFMAN 31-131 Vol 1 Ch. 4; AFJQS 3P0X1B; AFTTP 3-4.9; Part B §10.11",
    },
    {
      id: "cg-instructor",
      branch: "Coast Guard",
      name: "Coast Guard — Instructor Development Course (IDC) + Law Enforcement Instructor (LEI)",
      summary:
        "Coast Guard instructor courses: Instructor Development Course (IDC) — 5-day performance-based course, Training Center Petaluma (Course 230140; qualification code PERJC). Law Enforcement Instructor (LEI) Course at MLEA — Course 100164, 8 training days over 12 days total; prerequisites include E-4 or above, graduate of BBOC or BOPC, experienced certified Boarding Officer. ⚠ No single CG equivalent to Navy MTS was found — NOT CONFIRMED (register).",
      who: "IDC: members assigned to instructional duties of any type. LEI: unit-designated LE instructors (prerequisites below).",
      quals: [
        "LEI prerequisites as published: ≥12 months remaining at current unit; E-4 or above; graduate of BBOC or BOPC; experienced certified Boarding Officer (the “minimum 12 months as a BO” element should be re-verified on the live FORCECOM page). LEI prepares instructors to deliver unit LE training (COMDTINST 16247.3) and administer Judgmental Use of Force Evaluations (COMDTINST 3574.5).",
        "IDC: modules named only (Instructor Competencies, Adult Learning, Presentation Skills, etc.); students deliver a lesson scored against the Instructor Feedback Form. Prerequisites/currency NOT PUBLICLY PUBLISHED beyond instructional-duty assignment (standards in CG Training System SOP Vol 13, referenced, not published on the page).",
      ],
      how: ["IDC: 5 days, Training Center Petaluma; exportable. LEI: 8 training days over 12 days total, MLEA."],
      flags: [
        "⚠ No single CG equivalent to Navy MTS was found — NOT CONFIRMED (register §16 #36). No equivalent is invented here.",
      ],
      links: [],
      source: "FORCECOM course pages (IDC 230140; LEI 100164); COMDTINST 16247.3 / 3574.5; Part B §10.12",
    },
    {
      id: "army-drill-sergeant",
      branch: "Army",
      name: "Army — Drill Sergeant Academy (brief; SQI X; GT 100, waivable to 85)",
      summary:
        "U.S. Army Drill Sergeant Academy, Fort Jackson, SC (brief; cross-link Assignments): Active/USAR SGT through SFC; identifier SQI X + Drill Sergeant Identification Badge. Published eligibility (HRC checklist): GT 100 (waivable by HRC commander to not less than 85 case-by-case); PULHES minimum 211321; ≥4 years total active federal service; 24-month drill sergeant obligation. Length: 65 days in one continuous phase (USAR) / described as a nine-week course (army.mil 2024) — both citations print. A Drill Sergeant Recertification Course exists (no interval published).",
      who: "Active/USAR SGT through SFC. (USAR variant publishes E-4–E-7, GT ≥85, ≥3 years — printed as the Reserve variant.)",
      quals: [
        "GT 100 (waivable by HRC commander to not less than 85 case-by-case); PULHES minimum 211321; HS/GED; BLC graduate; ≥4 years total active federal service; height/weight AR 600-9; ACFT pass with no substituted events; service remaining for the 24-month drill sergeant obligation.",
      ],
      how: ["65 days in one continuous phase (USAR) / “nine-week course” (army.mil 2024) — publish “65 days / ~9 weeks” with both citations."],
      flags: [],
      links: [],
      source: "HRC checklist; USAR Drill Sergeant pages; army.mil (2024); Part B §10.13",
      badge: "Drill Sergeant Identification Badge + SQI X — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Drill Sergeant Identification Badge", view: "uniforms" }],
    },
  ],
};

/* ==================== ARMY SWEEP & JOINT ==================== */

const SWEEP_JOINT: QualTile = {
  key: "sweep-joint",
  label: "Army Sweep & Joint",
  tileSub: "Part B §11 + §15 · SLICC · RSLC · RTAC · joint CBRN school",
  intro:
    "The Army's own sweep of other certifying schools (Part B §11) plus joint/cross-service schoolhouse attendance at named level (Part B §15). Branch schools that are MOS/profession pipelines (AMEDD, DINFOS, DLIFLC, JAG, etc.) ship no entries from this pack — the Army's own list card says why.",
  entries: [
    {
      id: "slicc",
      branch: "Army",
      name: "Sling Load Inspector Certification Course (SLICC) — 5 days, Fort Gregg-Adams",
      summary:
        "SLICC: 5 days, Sling Load Office, U.S. Army Quartermaster School, Fort Gregg-Adams (Lee) — resident + MTT by ATRRS request. Who: E-4 and above, all services + Coast Guard, ≥1 year service remaining — “NO EXCEPTIONS, NO WAIVERS” (TM 4-48.09, as published). Certifies sling-load inspectors. Course #860-F4, School Code 101. Note: Pathfinder and Air Assault graduates (E-4+) are also qualified inspectors; graduates below E-4 are not authorised to inspect.",
      who: "E-4 and above, all services + Coast Guard, ≥1 year service remaining.",
      quals: ["“NO EXCEPTIONS, NO WAIVERS” (TM 4-48.09, as published) on the grade/service-remaining gates."],
      how: ["5 days, Fort Gregg-Adams (Lee); resident + MTT by ATRRS request."],
      flags: [],
      links: [],
      source: "U.S. Army Quartermaster School / TM 4-48.09; Part B §11.1",
    },
    {
      id: "rslc",
      branch: "Army",
      name: "Reconnaissance and Surveillance Leaders Course (RSLC) — ARTB, Fort Moore (26 days)",
      summary:
        "RSLC (ARTB, Fort Moore): 26 days (official welcome letter, May 2025). Published recommended preparation: ACFT 540 and 12-mile ruck, 35 lb, in under 3 hours — recommendation wording, NOT a stated cut-off; printed labeled as such.",
      who: "Per the ARTB welcome letter — see the course packet via ATRRS/unit schools.",
      quals: [
        "Recommended preparation (labeled as recommendation, NOT a cut-off): ACFT 540 and 12-mile ruck, 35 lb, in under 3 hours.",
      ],
      how: ["26 days, ARTB, Fort Moore."],
      flags: ["⚠ The ACFT 540 / ruck figures are the welcome letter's RECOMMENDED preparation — not a stated cut-off. Printed labeled, per the pack."],
      links: [],
      source: "ARTB RSLC welcome letter (May 2025); Part B §11.2",
    },
    {
      id: "rtac",
      branch: "Army",
      name: "Ranger Training Assessment Course (RTAC) — ARNG WTC (14–15 days)",
      summary:
        "RTAC (ARNG Warrior Training Center): 14–15 days; a preparation/assessment course, NOT a badge course. National Guard Soldiers must complete RTAC before Ranger School.",
      who: "National Guard Soldiers bound for Ranger School.",
      quals: ["Preparation/assessment only — Ranger School's own qualifications are in the Ranger & Sapper tile."],
      how: ["14–15 days, ARNG WTC."],
      flags: [],
      links: [],
      source: "ARNG WTC; Part B §11.3",
    },
    {
      id: "army-own-list",
      branch: "Army",
      name: "The Army's own list — what ships and what doesn't (MyArmyBenefits Specialized Skills Training)",
      summary:
        "The Army's published specialised-schools list (MyArmyBenefits) contains, beyond this section's entries: Airborne, Drill Sergeant (SQI X), Jumpmaster (ASI 5W), Pathfinder (ASI F7), Ranger (SQI G), Sapper, Special Forces Training — plus branch schools (AMEDD/MEDCoE, Aviation CoE, Chaplain/USA-IRL, DINFOS, DLIFLC, JAG/TJAGLCS, Recruiting & Retention College, Direct Commission Course). Branch schools are MOS/profession pipelines, not volunteer certifications — no entries ship for them from this pack; their jobs live in the Library.",
      who: "Index card — read so the coverage claim stays honest.",
      quals: ["Index only."],
      how: ["Index only — follow each named school to its tile in this section, or its job to the Library."],
      flags: [],
      links: [],
      source: "MyArmyBenefits Specialized Skills Training list; Part B §11.4",
      crossLinks: [{ label: "MOS Library — branch-school jobs", view: "mos" }],
    },
    {
      id: "joint-cbrn-school",
      branch: "All",
      name: "Joint / cross-service — CBRN School, Fort Leonard Wood (other-service attendance, named level)",
      summary:
        "U.S. Army CBRN School, Fort Leonard Wood — other-service attendance at named level: the joint live-agent training site (“the only place where the joint services can do practical, hands-on, chemical-agent training” — Navy learning-site director via army.mil). Published interservice examples: Technical Escort Course — five weeks (joint); Shipboard CBR-D Operations and Training Specialist Course — 10 days (a Navy/CG course HOSTED at the Army school). DTRA-run school/certification pages meeting the source rule: none found (register).",
      who: "Joint members by course — Technical Escort hosts “Airmen, Marines, Sailors, Soldiers and civilians” (army.mil, 2019); Shipboard CBR-D primary attendees are Navy damage controlmen/DC assistants + CG CBRN-E officers (~150 students/year).",
      quals: ["Named level only — per-course prerequisites live with the course/ATRRS."],
      how: [
        "The Homeland Defense/Incident Response Training Department trains joint members and hosts Air Force Emergency Management training (AF element name/duration NOT PUBLICLY PUBLISHED).",
      ],
      flags: [
        "⚠ AF Emergency Management home-station readiness is separate (e.g., BMT CBRN Defense at JBSA-Chapman Annex — 8-hour course, current 18 months per 37 TRW) — do not present Fort Leonard Wood attendance as a universal AF CBRN certification.",
        "⚠ DTRA CBRN school/certification at named level: no official DTRA school page found meeting the source rule (register §16 #42).",
      ],
      links: [],
      source: "army.mil (2019 Technical Escort; Navy learning-site director quote); Part B §15",
    },
  ],
};

/* ======================= AVIATION-ADJACENT ======================= */

const AVIATION: QualTile = {
  key: "aviation",
  label: "Aviation-Adjacent",
  tileSub: "Part B §12 · Rigger (92R) · Loadmaster · Navy aircrew doors (named level)",
  intro:
    "Aviation-adjacent qualifications at named level, per the pack: parachute rigger (a school + a currency regime), the Air Force's verified structural negative on a rigger AFSC, Loadmaster framed as an AFSC qualification, and the Navy aircrew doors.",
  entries: [
    {
      id: "parachute-rigger",
      branch: "Army",
      name: "Parachute Rigger — Army MOS 92R (12 weeks 2 days; AR 750-32 currency regime)",
      summary:
        "Parachute Rigger Course (MOS 92R), Aerial Delivery & Field Services Department, U.S. Army Quartermaster School, Fort Gregg-Adams (Lee), VA — four phases, 12 weeks and 2 days total (ADFSD Welcome Letter, 5 May 2025). Basic Airborne qualification is a prerequisite for the rigger pipeline. Currency: AR 750-32 (2 Sep 2026), Chapter 3, “Qualifications and Currency” governs rigger/aerial-delivery personnel — specific intervals not extracted; the chapter is cited, not invented numbers. Badge: Parachute Rigger Badge.",
      who: "Soldiers in the 92R pipeline (Basic Airborne qualified — see the Airborne tile).",
      quals: [
        "Basic Airborne qualification is a prerequisite for the rigger pipeline. Scope named only: cargo parachutes, rigging of platforms, JPADS 2K, maintenance procedures, personnel parachutes (static line).",
      ],
      how: [
        "Four phases, 12 weeks and 2 days total, Fort Gregg-Adams (Lee), VA.",
        "Currency — PUBLISHED at regulation level: AR 750-32 (2 Sep 2026), Chapter 3 governs; the Quartermaster Commandant/USAQMS ADFSD holds certification responsibilities. Specific intervals not extracted — cite the chapter, not invented numbers.",
      ],
      flags: [],
      links: [],
      source: "ADFSD MOS-T Welcome Letter (5 May 2025); AR 750-32 Ch. 3; TIOH; Part B §12.1",
      badge: "Parachute Rigger Badge (approved 9 Jun 1986, retroactive to May 1951 completions — TIOH) — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Parachute Rigger Badge", view: "uniforms" }],
    },
    {
      id: "af-rigger-negative",
      branch: "Air Force",
      name: "Air Force “rigger” — verified structural negative + the real routes (JAI)",
      summary:
        "Verified structural negative: there is NO Air Force Parachute Rigger AFSC and no AF rigger school. AF rigging is a qualification held by other AFSCs (DAFI 24-605 Vol 3): (1) 2T2X1, 1P0X1, or 1A2X1 personnel who completed the Fabrication of Aerial Delivery Loads Course (FADLC), or (2) graduates of the Army Parachute Rigger Course — leading to the Joint Airdrop Inspector (JAI) qualification. FADLC/Senior Rigger lengths: NOT PUBLICLY PUBLISHED in the AF publications opened.",
      who: "2T2X1, 1P0X1, or 1A2X1 personnel (FADLC route — AMC version = unilateral training loads only); 2T2X1 personnel may also attend the Parachute Rigging Academy's Senior Rigger Course at commander discretion, unit funded.",
      quals: [
        "Worked example (AFCENT, Dec 2025): a 1P0X1 technician “earned her rigger patch upon completion of a portion of the 92R Rigger Course at Fort Lee.”",
      ],
      how: ["Routes above; lengths NOT PUBLICLY PUBLISHED — not filled."],
      flags: [],
      links: [],
      source: "DAFI 24-605 Vol 3 (Feb 2025); AR 59-4/AFJ 13-210(I); AFCENT (Dec 2025); Part B §12.2",
    },
    {
      id: "loadmaster",
      branch: "Air Force",
      name: "Loadmaster — Air Force (AFSC qualification, brief by design)",
      summary:
        "Loadmaster (Air Force): an AFSC school qualification, NOT a standalone volunteer certification — included only in that frame. Route as published by AETC: BMT → Aircrew Fundamentals + Basic Loadmaster Course at JBSA-Lackland → SERE at Fairchild → aircraft Initial Qualification at Altus (C-17) or Little Rock (C-130) → mission-ready upgrade at the operational unit. Identifier: Enlisted Aircrew badge. ⚠ No current official week count or ASVAB line score was published on the pages opened — the 5-week figures online are non-official/2002-era; not used.",
      who: "Airmen in the loadmaster AFSC pipeline (AETC route below).",
      quals: ["NOT PUBLICLY PUBLISHED on the pages opened for week count / ASVAB line score — see summary flag."],
      how: [
        "BMT → Aircrew Fundamentals + Basic Loadmaster Course at JBSA-Lackland (Career Enlisted Aviator Center of Excellence — realigned 15 May 2026 under 19 AF/12 FTW) → SERE at Fairchild → aircraft Initial Qualification at Altus (C-17) or Little Rock (C-130) → mission-ready upgrade at the operational unit.",
      ],
      flags: [
        "⚠ The 5-week figures online are non-official/2002-era — do not use (per the pack).",
      ],
      links: [],
      source: "AETC published route; Part B §12.3",
      badge: "Enlisted Aircrew badge — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Enlisted Aircrew badge", view: "uniforms" }],
    },
    {
      id: "navy-aircrew-doors",
      branch: "Navy",
      name: "Navy aircrew doors (named level)",
      summary:
        "Navy aircrew doors at named level: covered in the AIRR entry (Scout Swimmer & Rescue tile) — NACCS → ARSPC/ARSS → A-School → SERE/FRS. Crew chief / loadmaster-equivalent doors inside the AW ratings follow the same MILPERSMAN 1220-010 frame.",
      who: "AW-rating aircrew candidates under MILPERSMAN 1220-010.",
      quals: ["Named level only — see the AIRR entry."],
      how: ["Named level only, per the pack (§12.4)."],
      flags: [],
      links: [],
      source: "MILPERSMAN 1220-010 frame; Part B §12.4",
    },
  ],
};

/* ============================ MARITIME ============================ */

const MARITIME: QualTile = {
  key: "maritime",
  label: "Maritime",
  tileSub: "Part B §13 · Coxswain · Boarding Officer/BTM · VBSS · Boat Forces",
  intro:
    "Maritime qualifications: the Coast Guard Boat Forces certification system and MLEA boarding courses, Navy coxswain/small craft and VBSS, Master-at-Arms at named level, PSU/MSRT at named level only, and the Coast Guard AST “A” School facts (pipeline owned by Spec Ops). Surfman and currency numbers that live only in secondary sources are NOT printed — the flags say exactly where the line sits.",
  entries: [
    {
      id: "cg-boat-forces",
      branch: "Coast Guard",
      name: "Coast Guard Boat Forces certification system (Coxswain → Heavy Weather → Surfman; NEW Advanced Coxswain insignia, 2025)",
      summary:
        "Coast Guard Boat Forces certification: qualification runs PQS → certification (oral board + underway check ride + command determination) → currency maintenance. Positions named: Boat Crew Member, Engineer, Coxswain, Heavy Weather Coxswain, Surfman (the highest — with a numbered Surfman Registry). NEW (ALCOAST 229/25, May 2025): Advanced Coxswain for Heavy Weather Insignia and Advanced Coxswain for ATON Insignia — minimum 5 years as a certified Heavy Weather / ATON Coxswain. ⚠ Full Surfman prerequisites/hours/sea-state limits: NOT PUBLICLY PUBLISHED — secondary figures are NOT printed.",
      who: "CG members in Boat Forces billets progressing through the certification system; Advanced Coxswain insignia: certified Heavy Weather / ATON coxswains with the published time below.",
      quals: [
        "Advanced Coxswain for Heavy Weather Insignia (ALCOAST 229/25): eligibility — minimum 5 years as a certified Heavy Weather Coxswain; design: two lifeboat oars crossed with rescue line and life ring buoy; worn in lieu of the Coxswain Insignia (one coxswain insignia at a time); issuing authority: unit commanders and the Office of Boat Forces (CG-731).",
        "Advanced Coxswain for ATON Insignia (same ALCOAST): eligibility — minimum 5 years as a certified ATON Coxswain; design: crossed spar and whistling buoy.",
        "Coxswain Insignia — basic coxswain certification. Advanced Boat Forces Insignia — noted as earned by certified members in official unit bios; criteria NOT PUBLICLY PUBLISHED on pages opened.",
        "Surfman — the highest Boat Forces coxswain qualification (surf boats in heavy surf); official practice includes a numbered Surfman Registry (e.g., “issued number 532,” Station Humboldt Bay bio).",
      ],
      how: [
        "Qualification runs PQS → certification (oral board + underway check ride + command determination) → currency maintenance (the three-stage wording is from a secondary summary of COMDTINST M16721.48 — verify in the manual itself before printing as policy wording; carried here with that attribution).",
      ],
      flags: [
        "⚠ Full Surfman prerequisites/hours/sea-state limits: NOT PUBLICLY PUBLISHED on official pages opened — the 20-ft/30-ft sea and 40/50-kt wind figures in search results were secondary only; DO NOT PRINT (and they do not print here).",
        "⚠ Currency: Auxiliary-program figures (12 hours underway annually; currency tasks every 3 years with a Qualification Examiner; Nav Rules exam every 5 years) are OFFICIAL but belong to the Auxiliary — active-duty Boat Forces currency numbers were NOT PUBLICLY PUBLISHED on CG-731/FORCECOM pages opened. Auxiliary numbers are never presented as active-duty numbers.",
      ],
      links: [],
      source: "ALCOAST 229/25 (May 2025); CG-731 / unit bios; COMDTINST M16721.48 (via secondary summary, attributed); Part B §13.1",
      badge: "Coxswain Insignia; Advanced Coxswain insignia (2025); Surfman — see Uniforms.",
      crossLinks: [{ label: "Uniforms — coxswain insignia", view: "uniforms" }],
    },
    {
      id: "cg-bo-btm",
      branch: "Coast Guard",
      name: "Coast Guard Boarding Officer / Boarding Team Member — MLEA, Charleston SC",
      summary:
        "Coast Guard Boarding Officer / Boarding Team Member (MLEA, FLETC Charleston): Basic Boarding Officer Course (BBOC) — Course 341090, qualification code OPSBO, 24 training days over 5 weeks. Boarding Officer Practical Course (BOPC) — Course 501853, OPSBO, 10 training days over 2 weeks (the alternate BO route). Boarding Team Member (BTM) Course — Course 341095, 2 weeks (82 hours). LE currency lives in COMDTINST 16247.3 — specific refresher intervals NOT PUBLICLY PUBLISHED.",
      who: "BBOC: CG personnel and foreign naval officers. BOPC: certified BTMs, ME “A” School graduates (required route), and high-performing experienced BTMs. BTM: members serving on a boarding team under a Boarding Officer.",
      quals: [
        "BBOC prerequisites as published (FORCECOM): (1) within max allowable weight (COMDTINST M1020.8); (2) Physical Fitness Standards Task of the LE Competency Qualifications Instruction (COMDTINST 16247.3) completed within 30 days of reporting (numeric standards not on the page); (3) Practical Pistol Course + Judgmental Use of Force Evaluation tasks per 16247.3 completed; (4) medical questionnaire / fit for full duty; (5) 18 months remaining at a shore unit or 12 months at an afloat unit, or orders to a unit expecting LE service; (6) CO/OIC judgment of maturity/aptitude; (7) BTM graduates and ME “A” School graduates use the BOPC route instead; (8) full-face OC pepper-spray exposure before attending, with command qualification memo.",
        "BTM: a dedicated BTM prerequisites page was not returned in the sweep — prerequisites NOT PUBLICLY PUBLISHED in this pass beyond the BBOC list's BO/BTM judgment item.",
        "Curriculum named only (BBOC): Authority & Jurisdiction, Use of Force, Criminal/Constitutional Law, Boating Safety, BUI, Fraudulent Documents, etc.",
      ],
      how: [
        "BBOC: 24 training days over 5 weeks, Maritime Law Enforcement Academy, FLETC Charleston. BOPC route: E-Learning (Intro to MLE) + EOCT + BOPC (10 training days over 2 weeks) + unit OJT + oral board/unit certification. BTM Course: 2 weeks (82 hours) (ACE exhibit on the FORCECOM MLEA page).",
        "Identifier/currency: qualification codes (BTM; BO = OPSBO); no breast insignia published. LE currency lives in COMDTINST 16247.3 — specific refresher intervals NOT PUBLICLY PUBLISHED on pages opened.",
      ],
      flags: [],
      links: [],
      source: "FORCECOM MLEA course pages (341090 / 501853 / 341095); COMDTINST 16247.3; Part B §13.2",
    },
    {
      id: "navy-coxswain",
      branch: "Navy",
      name: "Navy Coxswain / small craft (Assault Boat Coxswain; Small Craft Insignia)",
      summary:
        "Navy coxswain / small craft: Assault Boat Coxswain (MILPERSMAN 1220-350) — open to all enlisted except Hospital Corpsmen and Dental Technicians (2006 CH-15 wording — date-flagged F-12); command-developed written examination + observed practical factors; qualification continues 1 year from the date qualified. Small Craft Insignia (“Coxswain Pin,” MILPERSMAN 1200-030): minimum 6 months in an OIC or POIC billet + PQS for an eligible craft type. Level I / Level II Coxswain courses (CENSECFOR): existence confirmed; lengths NOT PUBLICLY PUBLISHED.",
      who: "Assault Boat Coxswain: all enlisted except Hospital Corpsmen and Dental Technicians (per the 2006 wording — verify the current version). Small Craft Insignia: members serving in OIC/POIC billets on eligible craft.",
      quals: [
        "Assault Boat Coxswain: command-developed written examination + observed practical factors; NEC assigned, documented on NAVPERS 1070/604. Currency as published there: qualification continues 1 year from the date qualified; requalification any time before lapse.",
        "Small Craft Insignia: serve minimum 6 months in an OIC or POIC billet + complete PQS for an eligible craft type (post-1 Oct 1984 rule); gold for officers, silver for enlisted.",
      ],
      how: ["Command-level qualification per MILPERSMAN 1220-350 / 1200-030. Level I / Level II Coxswain courses (CENSECFOR Small Craft Operations): one of CENSECFOR's five training categories; lengths/prerequisites NOT PUBLICLY PUBLISHED on the pages opened."],
      flags: [
        "⚠ F-12 — Assault Boat Coxswain eligibility wording is from a 2006 MILPERSMAN change (CH-15) — verify the current version. The detailed Small Craft watchstation/craft list was NOT extracted from an official MyNavy HR page in the sweep (the detailed text came via a non-official mirror) — verify the insignia description in Uniform Regulations §5201 before printing detail; none prints here.",
      ],
      links: [],
      source: "MILPERSMAN 1220-350 (CH-15, 2006 ⚠); MILPERSMAN 1200-030; CENSECFOR; Part B §13.3 + flag F-12",
      badge: "Small Craft Insignia — see Uniforms.",
      crossLinks: [{ label: "Uniforms — Small Craft Insignia", view: "uniforms" }],
    },
    {
      id: "navy-vbss",
      branch: "Navy",
      name: "Navy VBSS — Boarding Officer / Boarding Team Member (CENSECFOR)",
      summary:
        "Navy VBSS (CENSECFOR): Boarding Team Member — volunteer Sailors of any rate; prerequisites (DVIDS): two Security Reaction Force schools, climb a 30-foot steel cable ladder, Class 2 swimmer qualification; length 3 weeks. Boarding Officer — paygrades E-6 through O-4 (navy.mil); course: 12 hours classroom + 20 hours laboratory instruction. Locations named: Chesapeake VA, Mayport FL, San Diego CA, Pearl Harbor HI. No VBSS breast insignia; currency NOT PUBLICLY PUBLISHED.",
      who: "Team Member: volunteer Sailors of any rate. Boarding Officer: paygrades E-6 through O-4.",
      quals: [
        "Team Member prerequisites (DVIDS, official DoD): completion of two Security Reaction Force schools; ability to climb a 30-foot steel cable ladder; Class 2 swimmer qualification (see the Swim & Water tile).",
        "Boarding Officer: paygrades E-6 through O-4 (navy.mil).",
      ],
      how: [
        "Team Member: 3 weeks (DVIDS — “structured crawl/walk/run,” named level). Boarding Officer: 12 hours classroom + 20 hours laboratory instruction (navy.mil restructured-course article; no total days published there). Locations named: Chesapeake VA, Mayport FL, San Diego CA, Pearl Harbor HI (CENSECFOR Mayport confirms compliant/non-compliant boarding team training there).",
        "Identifier/currency: no VBSS breast insignia; qualification/NEC at named level. Currency NOT PUBLICLY PUBLISHED on pages opened.",
      ],
      flags: [
        "⚠ An older (2009) continuum statement of three courses totalling eight weeks is DATED — not presented as current.",
      ],
      links: [],
      source: "CENSECFOR; DVIDS; navy.mil; Part B §13.4",
    },
    {
      id: "navy-ma-les",
      branch: "Navy",
      name: "Navy Master-at-Arms / Law Enforcement (named level)",
      summary:
        "Navy Master-at-Arms / Law Enforcement at named level (CENSECFOR): two FLETA-accredited schools at NTTC Lackland, JBSA — MA “A” School (newly enlisted MAs; a pilot RRL curriculum ran 4.2 months — ⚠ pilot length ≠ permanent length) and Law Enforcement Specialist (LES) “C” School — 30 days / 240 hours (FLETA accredited 11 May 2023). Prerequisites/standards NOT PUBLICLY PUBLISHED on the NETC pages opened. Military Working Dog handler is a separate CENSECFOR track at Lackland (named only).",
      who: "Newly enlisted MAs (“A” School); journeyman MAs (LES “C” School).",
      quals: ["NOT PUBLICLY PUBLISHED on the NETC pages opened — named level only."],
      how: ["NTTC Lackland, JBSA. MA “A” School FLETA accredited Nov 2022; LES “C” School 30 days / 240 hours, FLETA accredited 11 May 2023."],
      flags: [
        "⚠ The 4.2-month MA “A” School figure is a PILOT RRL curriculum length — pilot length ≠ permanent length; printed flagged, per the pack.",
      ],
      links: [],
      source: "CENSECFOR / NETC (FLETA accreditations); Part B §13.5",
    },
    {
      id: "cg-psu-msrt",
      branch: "Coast Guard",
      name: "Coast Guard PSU / MSRT (named level only)",
      summary:
        "Coast Guard PSU / MSRT at named level only: MSRT — “Coast Guard's first responders to maritime terrorism and other high-risk threats” (MyCG). PSU — shoreside/waterborne point defense of strategic shipping, critical infrastructure, and high-value assets in joint/combined expeditionary environments (MyCG). Both move under the new Special Missions Command (CG SMC), Kearneysville, WV (IOC by Oct 2026, ALCOAST 051/26); SMTC is the training provider. ⚠ Specific PSU/MSRT course names, lengths, prerequisites, and certification standards: NOT PUBLICLY PUBLISHED — named level only, exactly as printed here. No PSU/MSRT-specific insignia published.",
      who: "DSF members by assignment — see Special Forces & Elite Units for the DSF framing (no DSF enlistment contract; members volunteer and are assigned in-service).",
      quals: ["NOT PUBLICLY PUBLISHED on official pages opened — named level only."],
      how: ["Named level only, per the pack (§13.6)."],
      flags: [],
      links: [],
      source: "MyCG; ALCOAST 051/26; Part B §13.6",
      crossLinks: [{ label: "Special Forces & Elite Units — Coast Guard DSF entries", view: "specops" }],
    },
    {
      id: "cg-ast-school",
      branch: "Coast Guard",
      name: "Coast Guard Rescue Swimmer — AST “A” School (school facts; pipeline owned by Spec Ops)",
      summary:
        "Coast Guard AST “A” School facts (ATTC): prerequisites as published — aptitude for mechanics, aircrew-candidate physical, Secret clearance eligibility, “superior physical shape with no chronic orthopedic problems.” ⚠ Numeric PFT/swim standards NOT PUBLICLY PUBLISHED on the ATTC page. ⚠ Length: FORCECOM ATTC publishes an “initial four-month AST course” (Elizabeth City, NC); the 24-week figure is secondary/Wikipedia only in this sweep — NOT CONFIRMED (flagged F-6). Pipeline owned by the Spec Ops pack — cross-linked.",
      who: "AST rating candidates meeting the ATTC-published prerequisites below. Helicopter Rescue Swimmer is an aircrew position of the AST, not a separate rating (FORCECOM ATTC).",
      quals: [
        "Prerequisites as published (ATTC): aptitude for mechanics; pass the aircrew-candidate physical; qualify for a Secret clearance; “superior physical shape with no chronic orthopedic problems,” high mental acuity, outstanding military bearing.",
        "Numeric PFT/swim standards NOT PUBLICLY PUBLISHED on the ATTC page (numbers in a CG YouTube description are not a FORCECOM page — not used).",
      ],
      how: [
        "FORCECOM ATTC (Elizabeth City, NC) — the “initial four-month AST course” covers ALSE fundamentals and Helicopter Rescue Swimmer Procedures; advanced courses named: Operational Fitness Training, EMT, Survival Instructor. Currency: not published on the page opened.",
      ],
      flags: [
        "⚠ F-6 AST LENGTH — ATTC “four-month” wording prints attributed; the 24-week figure is secondary/Wikipedia only in this sweep — NOT CONFIRMED on an official page opened (gocoastguard's AST page was not captured). 24 weeks does not print as fact anywhere in this section. (The Spec Ops AST entry's 22-week A School decomposition is gocoastguard's, in that section, attributed there.)",
      ],
      links: [],
      source: "FORCECOM ATTC published page; Part B §13.7 + flag F-6",
      crossLinks: [{ label: "Special Forces & Elite Units — AST full entry and pipeline", view: "specops" }],
    },
  ],
};

/* ================= SPACE FORCE FINDINGS + REGISTER ================= */

const SPACE_FORCE: QualTile = {
  key: "space-force",
  label: "Space Force Findings",
  tileSub: "Verified negatives from BOTH packs · Guardians attend AF/Army schools",
  intro:
    "The verified negatives from BOTH packs, shipped as findings: no Space-Force-specific school in any family in Part B, and no SF swim/egress/weapons documents found in Part A. These are statements about publication — findings, not proof of absence — printed exactly as the packs print them. For every family, Guardians earn the qualification by attending Air Force schools (and, individually, sister-service schools).",
  entries: [
    {
      id: "sf-findings",
      branch: "Space Force",
      name: "Space Force — the verified negatives (both packs): no SF-specific school; Guardians attend AF/Army schools",
      summary:
        "Space Force verified negatives (both packs): the Space Force has NO Space-Force-specific SERE school, parachutist school, survival school, combatives program, CATM program, honor guard technical school, MTI school, or MTL school of its own — none found on spaceforce.com / spaceforce.mil. No SF-specific swim, egress, or weapons documents found in Part A either — stated as publication findings, not proof of absence. Guardians attend Air Force schools (and, individually, sister-service schools): BMT at JBSA-Lackland plus 21 hours of SF-specific curriculum; SERE under DAFI 10-3004; CATM under DAFI 31-131 (applies to the entire DAF including USSF).",
      who: "Guardians — for every family in this section, the route is the Air Force school (or, individually, a sister-service school).",
      quals: [
        "BMT: Guardians attend the same BMT as Airmen at JBSA-Lackland plus 21 hours of SF-specific curriculum (spaceforce.com). OTS: same curriculum/requirements as AF officers at Maxwell, with SF additions.",
        "SERE policy: DAFI 10-3004 applies to the USSF for attendance/SMP — Guardians at risk slot under the DAF table, not an SF table. (The AETC schoolhouse-management instructions, AETCI 36-2605 V11 / 36-2607, explicitly do NOT apply to the USSF administratively.) No Guardian-specific SERE course exists.",
        "CATM: DAFI 31-131 applies to the entire DAF including USSF. Swim/egress/weapons: no SF-specific documents found in Part A — Guardians fall under the DAF frameworks in those tiles.",
        "Firsts (attendance, not SF schoolhouses): first Guardian MTI School graduate (37 TRW — campaign hat presented by her former BMT instructor); first Guardian MTL — Sgt Thomas Davenport, Keesler, 22 Feb 2024 (STARCOM); first Guardian Sapper Leader Course graduate (Ranger & Sapper tile); first two Guardians to complete JOTC-Panama (Mountain tile). Technical training runs at AF tech schools / SF detachments inside AF wings (e.g., 533d Training Squadron, Vandenberg SFB).",
        "Space-Force-own professional education (NOT special schools in this pack's sense — listed so the build doesn't inflate them): National Security Space Institute (NSSI), Space Delta 13 — space professional continuing education (2025 catalog prerequisites incl. Space 100/UST); Space Test Course at USAF Test Pilot School, Edwards AFB — 12-month program for Guardians (USSF/USAF MOA, Feb 2023).",
      ],
      how: ["Route: Air Force schools (and, individually, sister-service schools) — every tile in this section names the school Guardians attend."],
      flags: [
        "⚠ F-15 CAVEAT — the “Space Force's first paratrooper” story (Lt Col Mark Natale, Apr 2026, jumping with 10th SFG(A) at Fort Carson) is a prior-Army senior parachutist/jumpmaster RECERTIFYING (Basic Airborne Refresher + Jumpmaster Refresher + Sustained Airborne Training) — NOT a Guardian earning initial wings through an SF pipeline. Printed only with that caveat.",
        "⚠ These negatives are publication findings (Part A: “statements about publication, not proof no internal guidance exists”) — printed as findings, per both packs.",
      ],
      links: [],
      source: "spaceforce.com / spaceforce.mil sweep (Part B §14); DAFI 10-3004 / DAFI 31-131 applicability; STARCOM; Part A §§1.7/2.4/3.5 negatives",
    },
  ],
};

/* ------------------------- NOT CONFIRMED register ------------------------- */

export type RegisterItem = {
  n: number;
  title: string;
  detail: string;
  /** Branch tag (same tagging pass as QualEntry): the service the
   * rumor names, else "All". The register renders under EVERY scope —
   * rumors shouldn't hide; the tag only feeds search badging. */
  branch?: string | string[];
};

export const REGISTER_INTRO =
  "Rumors and gaps that could NOT be verified on an official page (Part B §16, 45 items). This register ships as its own visible register on purpose: each item is labeled NOT CONFIRMED, and nothing in this register is presented as a real school anywhere else in this section. Where a rumor names something real under a different service's title, the register says so.";

export const NOT_CONFIRMED_REGISTER: RegisterItem[] = [
  { n: 1, title: "USMC swim overhaul sourcing (schools sweep)", detail: "In the schools sweep, the MCO 1500.52E / new 5-tier system surfaced only via Instagram/Military.com and no marines.mil text returned — logged NOT CONFIRMED by that sweep. RESOLVED AT BUILD: MARADMIN 084/26 was read directly on marines.mil (see DATA-PLAN) — the E-system ships as CURRENT in the Swim & Water tile. The register keeps the sweep's original finding for provenance.", branch: "Marine Corps" },
  { n: 2, title: "MCIWS single current length", detail: "Official sources conflict (17 days / 3 / 5 / 6 weeks by era and location); no current TECOM course page settles it. Printed as flag F-2 in the Swim and Instructor entries.", branch: "Marine Corps" },
  { n: 3, title: "Scout Swimmer MOS/badge/refresher", detail: "None published — the Scout Swimmer entry claims none.", branch: "Marine Corps" },
  { n: 4, title: "MCDC detailed prerequisites, swim standards, course length", detail: "The MATSG-21 Liaison page's list did not render; Navy/NDSTC numbers must not be imported into the USMC entry.", branch: "Marine Corps" },
  { n: 5, title: "USMC MFF/HALO length, jump numbers, physical standards", detail: "Not on USMC pages; only Army (JFKSWCS/Yuma) pages confirm these.", branch: "Marine Corps" },
  { n: 6, title: "BAC numeric entry standards on USMC pages", detail: "Not published there; the Army BAC page governs (the Army sweep DID publish Day-1 standards). ", branch: "Marine Corps" },
  { n: 7, title: "Jumpmaster current entry jump-count (USMC article figure)", detail: "12 fixed-wing + 24 helicopter jumps + 250-part nomenclature exam — a single older HQMC unit article about a serving jumpmaster, NOT a current school prerequisite page.", branch: "Marine Corps" },
  { n: 8, title: "SERE length/curriculum/refresher for Marines on USMC pages", detail: "Not published; Navy pages govern.", branch: "Marine Corps" },
  { n: 9, title: "USMC 0932 current course", detail: "FY19 says disbanded/under study; no current course page despite 0932 appearing in 2024–26 eligibility lists. Printed as legacy in the Instructor tile.", branch: "Marine Corps" },
  { n: 10, title: "MAI/MAIT MOS numbers (0916/0917)", detail: "Seen in MCO 1500.59A contents via a non-official copy; verify in the official marines.mil PDF before printing — they do not print in this section.", branch: "Marine Corps" },
  { n: 11, title: "Basic Cold Weather Advisor stated duration", detail: "Catalog gives report/graduate dates only (~11–12 days per iteration) — schedule-derived, flagged in the Bridgeport entry.", branch: "Marine Corps" },
  { n: 12, title: "USMC Recruiter MOS (8411/8412), DI Ribbon criteria, Combatant Diver badge criteria, EOD badge criteria on USMC pages", detail: "Widely known, NOT stated on the pages consulted; not added from memory.", branch: "Marine Corps" },
  { n: 13, title: "Army HRST School as a standalone school — RUMOR", detail: "HRST/HRST-C Master is a Navy NSW qualification title; the Army's official equivalents found are Rappel Master and FRIES/SPIES Master (Air Assault tile). Do not list an “Army HRST School” without an ATRRS source — none ships here.", branch: "Army" },
  { n: 14, title: "SERE Level C at Camp Mackall, NC as a currently-listed schoolhouse", detail: "Historically documented; no current official JFKSWCS SERE page retrieved. Fort Novosel is the verified Army entry.", branch: "Army" },
  { n: 15, title: "Standalone Army “Small Arms Instructor Course”", detail: "Not confirmed as a current course title; verified equivalents are MMTC (ASI E1) and NGMTC Small Arms.", branch: "Army" },
  { n: 16, title: "Wearable Army Mountaineering Badge (BMMC) — RUMOR", detail: "SQI/ASI only on the official AMWS page. No wearable mountaineering badge is claimed anywhere in this section.", branch: "Army" },
  { n: 17, title: "Jumpmaster full numeric prerequisite list on a current 1-507th page", detail: "Partially supported (army.mil MTT article; USAAAS FY26 page: 12 jumps from USAF aircraft); the full list appears only on non-official reproductions of the former school homepage. Verify in ATRRS.", branch: "Army" },
  { n: 18, title: "MFFPC current length as a single number", detail: "2012 restructuring article (→3 weeks) is the newest official statement found; no current JFKSWCS school page states a present-day length (flag F-7).", branch: "All" },
  { n: 19, title: "NGMTC Sniper Course length/prerequisites/B4 award", detail: "Schoolhouse existence official; details circulate only in dated/non-official sources.", branch: "Army" },
  { n: 20, title: "CDQC numeric entry standards", detail: "Swim times / PT numbers in old ATRRS memos on non-official hosts — the current official article publishes MAC validation + medical/pressure test + modified AFT only.", branch: "All" },
  { n: 21, title: "Diver/rigger/parachutist duty-currency intervals (Army)", detail: "Regulations cited (AR 611-75; AR 750-32 Ch. 3; CAASOP via USAAAS) but interval numbers not published on the public school pages and not extracted from the regulation PDFs in this pass.", branch: "Army" },
  { n: 22, title: "Navy ND “A” School length, ND PST numbers, ND ASVAB", detail: "CANTRAC is CAC-gated; not on NETC/MILPERSMAN pages opened. Printed as NOT PUBLICLY PUBLISHED in the ND entry.", branch: "Navy" },
  { n: 23, title: "NAVSCOLEOD length/divisions/entry standards from a NETC course page", detail: "None returned/opened — the EOD tile ships structure level only (discipline in Part B §6).", branch: "All" },
  { n: 24, title: "Navy SERE “Level C” label on a Navy page", detail: "Navy pages say “Code of Conduct / high-risk”; the level label is DoD framing.", branch: "Navy" },
  { n: 25, title: "SRSS length/PST/locations as a current NETC course", detail: "Only the DVIDS 4-week Jacksonville statement + NETC satellite swim-site list.", branch: "Navy" },
  { n: 26, title: "Navy Level I/II Coxswain course lengths; Small Craft PQS craft list", detail: "Not on CENSECFOR/MyNavy HR pages opened.", branch: "Navy" },
  { n: 27, title: "Navy Basic Parachutist jump count in the MILPERSMAN 1220-030 excerpt", detail: "Additional-5 (sea-service insignia), 10 free-fall, 16 HALO confirmed; basic count needs full §3 of the PDF.", branch: "Navy" },
  { n: 28, title: "805A NITC 22-day length", detail: "LaDR-sourced, not a NETC page — flagged in the Navy instructor entry.", branch: "Navy" },
  { n: 29, title: "MTS PQS/board/time-on-board requirements", detail: "Not on the NETC FAQ page; pull NETCINST 1500.2 series.", branch: "Navy" },
  { n: 30, title: "“CG Dive Center of Excellence” as a formal name — RUMOR", detail: "Official name found: SMTC / SMTD-Dive, Panama City. The rumored name does not ship.", branch: "Coast Guard" },
  { n: 31, title: "CG DV PST numbers; current COMDTINST 3150.1E currency numbers", detail: "Not on pages opened (pull 3150.1E Ch. 3). Printed as NOT PUBLICLY PUBLISHED in the DV entry.", branch: "Coast Guard" },
  { n: 32, title: "CG BTM dedicated prerequisites page; BO/BTM currency intervals", detail: "Not on FORCECOM pages opened.", branch: "Coast Guard" },
  { n: 33, title: "CG active-duty coxswain currency numbers; Surfman/Heavy Weather sea-state limits; permanent Coxswain Insignia 5-year rule; Advanced Boat Forces Insignia criteria", detail: "Secondary only / not on CG-731 pages opened (with the Boat Forces caveat on Auxiliary numbers).", branch: "Coast Guard" },
  { n: 34, title: "CG AST numeric PFT/swim standards", detail: "Not on the FORCECOM ATTC page.", branch: "Coast Guard" },
  { n: 35, title: "PSU/MSRT specific courses, lengths, selection standards", detail: "Not on official pages opened; named level only.", branch: "Coast Guard" },
  { n: 36, title: "CG MTS-equivalent; CG SERE school — RUMORS", detail: "Not found; do not invent. No CG MTS equivalent and no CG SERE entry ships anywhere in this section.", branch: "Coast Guard" },
  { n: 37, title: "AF SERE Specialist selection length", detail: "15 days (airforce.com) vs 19 days (AETC/Buckley news) unresolved; needs an ETCA catalog check (flag F-4).", branch: "Air Force" },
  { n: 38, title: "AF MTI/MTL course lengths; MTL rope color", detail: "Courses/locations official; no week count or rope color published on pages opened.", branch: "Air Force" },
  { n: 39, title: "Current AF Level-C (SV97A+SV98A) total length", detail: "NOT PUBLICLY PUBLISHED in DAFI 10-3004; legacy 19-day = retired SV80A.", branch: "Air Force" },
  { n: 40, title: "Senior/Master Parachutist + MFF badge jump-count criteria; AF jump-currency interval", detail: "Governing publications identified (AR 600-8-22 / AFMAN 11-402 / AFPAM 11-406 Ch. 2) but numbers not extracted from an official page in this sweep.", branch: "Air Force" },
  { n: 41, title: "Separate AF “Combat Survival Instructor” certificate", detail: "Structural negative — instruction is a 1T0X1 function + SMP certification.", branch: "Air Force" },
  { n: 42, title: "DTRA CBRN school/certification at named level", detail: "No official DTRA school page found meeting the source rule.", branch: "All" },
  { n: 43, title: "JSOU/USSOCOM university courses as “schools” for this pack", detail: "Not verified on an official page; only SERE 400/425 EXISTENCE is verified (via DAFI credit rules).", branch: "All" },
  { n: 44, title: "USAF Basic Military Mountain Course — RUMOR", detail: "No AF page found; similarly named courses are Army-run.", branch: "Air Force" },
  { n: 45, title: "Navy Recruit Training Service Ribbon criteria", detail: "Not on an official Navy page opened (see the RDC entry).", branch: "Navy" },
];

export const QUAL_TILES: QualTile[] = [
  SWIM,
  WEAPONS_TABLES,
  EGRESS,
  RECURRING,
  AIRBORNE,
  AIR_ASSAULT,
  RANGER_SAPPER,
  DIVE,
  SCOUT_RESCUE,
  EOD,
  SERE,
  MOUNTAIN,
  SNIPER,
  INSTRUCTOR,
  SWEEP_JOINT,
  AVIATION,
  MARITIME,
  SPACE_FORCE,
];

export const REGISTER_TILE: QualTile = {
  key: "register",
  label: "NOT CONFIRMED Register",
  tileSub: "Part B §16 · 45 items · Rumors labeled rumors",
  intro: REGISTER_INTRO,
  entries: [],
};

export const ALL_QUAL_TILES: QualTile[] = [...QUAL_TILES, REGISTER_TILE];
