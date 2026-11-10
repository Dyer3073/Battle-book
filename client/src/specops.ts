// Special Forces & Elite Units — transcribed from the researched pack
// (~/workspace/military-app/specops/specops.md, researched Nov 9, 2026).
// The pack is the content source of truth: official recruiting/command
// sourcing only, qualifications exactly as the cited official page
// publishes them, conflicts printed as ⚠ SOURCE FLAGs with both
// figures — never blended, never silently resolved. Pipelines are
// STRUCTURE ONLY: phase names, order, durations and locations as
// published, purpose only at the level the official page describes it.
// No techniques, no TTPs. SERE is named only where an official page
// names it as a pipeline element. The ONLY attrition figure in this
// section is the Coast Guard's officially published ~73% AST figure,
// attributed, in the AST entry only.
//
// Build-time re-verifications (Nov 9, 2026, official pages only):
// - F-5 (MARSOC rank windows): the current official MARSOC A&S page
//   (marsoc.marines.mil) was re-read — it restates 235 expected / 260
//   recommended, the 300-m swim, the 4-mph 45-lb ruck standard, the
//   2-week Phase I, and Phase II 3×/year at an undisclosed location,
//   but does NOT restate rank windows. The 2015 windows therefore keep
//   their ⚠ DATED flag, unchanged.
// - F-8 (Navy Diver PST column): re-read from the official
//   MILPERSMAN 1220-410 PDF on a navy.mil host — the instruction
//   groups EOD and ND in one column (swim 12:30, push-ups 50,
//   curl-ups 50, pull-ups 6, run 12:30). The located copy is CH-42
//   (2013); the ND entry prints the column with that provenance flag.
// - F-9 (AF EOD IFT column): could NOT be cleanly re-read from an
//   official public page in this build (worksheet extractions garble
//   the column alignment; secondary figures conflict). The AF EOD
//   entry ships as the cross-link WITHOUT numerals, as the pack
//   directs.
// - F-15 (EOD combined cap): the instruction text retrieved did not
//   print a combined cap; navy.com's ≤ 23:00 controls and the 21:00
//   figure stays flagged, unchanged.

export type SpecStep = { name: string; detail: string };
export type SpecTable = { caption: string; headers: string[]; rows: string[][] };
export type SpecCrossLink =
  | { kind: "mos"; label: string; mosId: string }
  | { kind: "entry"; label: string; branchKey: string; entryName: string };

export type SpecEntry = {
  id: string;
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  what: string;
  who: string;
  quals: string[];
  tables?: SpecTable[];
  pipelineIntro?: string;
  pipeline: SpecStep[];
  flags: string[];
  source: string;
  crossLink?: SpecCrossLink;
};

export type SpecBranch = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: SpecEntry[];
};

export const SPECOPS_INTRO =
  "Each branch's special operations and special-mission forces as their own official recruiting and command pages present them — what the unit is, who can apply, the qualifications exactly as the cited official page publishes them, and the training pipeline's structure: phases by their official names, in order, with the durations and locations the pages publish. Where two official pages disagree, both figures print, flagged — never blended. This section is not a preparation program, and meeting a published minimum is an entry ticket, not a selection outcome.";

export const SPECOPS_STANDING =
  "No attrition figure appears anywhere in this section except one: the Coast Guard's own recruiting material publicly cites ~73% attrition for the AST pipeline, printed attributed in the AST entry. No official recruiting page publishes an attrition rate for any other pipeline here, so none is printed — journalist and forum numbers were refused.";

const NOT_PUBLISHED_PIPELINE: SpecStep[] = [
  { name: "Training pipeline", detail: "In-unit qualification after assignment; no published pipeline." },
];

/* --------------------------------- ARMY --------------------------------- */

const ARMY: SpecBranch = {
  key: "army",
  label: "Army",
  tileSub: "Special Forces · Rangers · 160th SOAR · Civil Affairs · PSYOP · Delta (existence only)",
  intro:
    "Army Special Operations, in goarmy.com's own framing, is “a collective made up of Army Rangers, Special Forces (Green Berets), Night Stalkers, Psychological Operations, and Civil Affairs.” Six entries follow — five at the level their official pages publish, and one, Delta, at existence level only, because that is all the Army publishes.",
  entries: [
    {
      id: "army-sf",
      name: "Special Forces (Green Berets) — 18-series",
      summary:
        "Robin Sage in Pineland is the culminating exercise of the SFQC — Special Forces Qualification Course at Fort Liberty and Camp Mackall, total range 52–92 weeks by specialty and language (F-12). 18X enlistment and in-service SFAS routes; goarmy.com prints GT 110 and CO 100.",
      what: "Special Forces Soldiers serve on Operational Detachments in the Army's unconventional-warfare force. There are four entry-level Special Forces MOSs — 18B Weapons Sergeant, 18C Engineer Sergeant, 18D Medical Sergeant, 18E Communications Sergeant — and, per goarmy.com, “your specialty will be decided based on your background, aptitude, and the needs of the Army.”",
      who: "Two routes, both published by goarmy.com: 18X (enlistment) — civilians enlist as a Special Forces Candidate (18X) and enter the pipeline after Infantry OSUT and Airborne School; and in-service — serving Soldiers volunteer for SFAS through the Army's special operations recruiting structure.",
      quals: [
        "U.S. citizen",
        "High school diploma or GED",
        "Meet tattoo guidelines; no major law violations; no medical concerns (the page's summary wording)",
        "Age, in the page's words: “Be 18 years old by ship date and not have turned 32 prior to leaving”",
        "ASVAB, as the page prints it: 110 General Technical (GT) and 100 Combat (CO)",
      ],
      pipelineIntro:
        "SFAS is an assessment-and-selection course — candidates are assessed and the Army selects; completing the published minimums is the entry ticket, not the outcome. goarmy.com publishes no SFAS attrition rate — ⚠ NOT PUBLISHED, and none is printed here.",
      pipeline: [
        { name: "18X route — Infantry One Station Unit Training (OSUT)", detail: "22 weeks, then Airborne School." },
        { name: "Special Operations Forces Preparation Course (SFPC)", detail: "4 weeks (18X route)." },
        {
          name: "Special Forces Assessment and Selection (SFAS)",
          detail: "The Army's assessment course — army.mil describes it as a three-week program at Camp Mackall, NC. The in-service route attends SFAS directly through Army special operations recruiting.",
        },
        {
          name: "Special Forces Qualification Course (SFQC) — orientation and history",
          detail: "Run by the U.S. Army John F. Kennedy Special Warfare Center and School at Fort Liberty, NC, with field phases based at Camp Mackall. Phases print by NAME, in the Army's published structure — see the F-12 flag on totals.",
        },
        { name: "SFQC — language and culture", detail: "Language and culture training within the SFQC structure." },
        { name: "SFQC — small unit tactics", detail: "Small unit tactics, with field phases based at Camp Mackall." },
        { name: "SFQC — specialty (MOS) training", detail: "The MOS-specific courses for 18B / 18C / 18D / 18E; 18D's medical training is the longest. DA PAM 600-25 (CMF 18) also names SERE as a course component and the Special Operations Language Training (SOLT) Oral Proficiency Interview standard." },
        {
          name: "SFQC — Robin Sage",
          detail: "The culminating unconventional-warfare exercise, set in the fictional country of Pineland across rural North Carolina counties. Graduation awards the CMF 18 MOS, the Green Beret and SF Tab, and promotion to Sergeant (E-5) per DA PAM 600-25.",
        },
      ],
      flags: [
        "F-12 — TOTAL RANGE ONLY: army.mil states SFQC students complete 52 to 92 weeks of training depending on specialty and language assignment. No single official total exists, and phase numbering and order have been reorganized more than once in Army descriptions — so this entry prints phase names and the official total range, NOT a phase-by-phase week map. Any week-by-week SFQC chart offered elsewhere goes beyond what the Army publishes as one total.",
      ],
      source: "goarmy.com — Special Forces Candidate page; army.mil; DA PAM 600-25 (CMF 18)",
    },
    {
      id: "army-rangers",
      name: "75th Ranger Regiment — RASP",
      summary:
        "RASP is what makes a Soldier a Ranger in the 75th Ranger Regiment — RASP Phase 1 (5 weeks, assessment) then Phase 2 (3 weeks, skills). Ranger School is a separate, completely voluntary 61-day leadership course; the Ranger tab and Regiment service are different things. Option 40 route; goarmy.com prints a “TECH score of 105 or above” (F-3).",
      what: "goarmy.com: the 75th Ranger Regiment is “the Army's premier combat raid force,” organized in battalions, with missions under three pillars the page names — special operations raids, joint forcible entry (including airfield seizure), and special reconnaissance.",
      who: "Active-duty Soldiers only — goarmy.com's FAQ: “No, you must be active-duty status in the U.S. Army” (no Guard/Reserve route into the Regiment). New Soldiers reach RASP after BCT and AIT — the Option 40 enlistment route guarantees the RASP opportunity for qualifying MOSs. NCOs, warrant officers, and officers apply in-service and attend RASP 2 (3 weeks).",
      quals: [
        "U.S. citizen",
        "ASVAB “TECH” score of 105 or above — the page's own label; see the F-3 flag",
        "Pass the Army Fitness Test (AFT) and waist-to-height ratio (WHtR) standards",
        "Hold (or re-class into) an MOS authorized in the Regiment — the page names 11B, 91B, 92R “and many more”",
        "Eligible for a Secret security clearance",
        "Pre-RASP fitness test, as the page lists: 41 hand-release push-ups; a 2:35 plank; a two-mile run; six pull-ups; a six-mile ruck march",
        "At RASP, the page states candidates must: complete a 15-meter swim in full uniform, a five-mile run in under 40 minutes, and a 12-mile march with a 35-pound ruck",
      ],
      pipelineIntro: "The Regiment's pipeline is RASP, at Fort Benning, GA. No attrition rate is published on the page — ⚠ NOT PUBLISHED.",
      pipeline: [
        {
          name: "RASP Phase 1 (5 weeks) — assessment",
          detail: "Physical and psychological tests, strength of character and leadership assessment; includes the 12-mile ruck march with a 35-pound dry rucksack in full uniform, land navigation exercises, and medical first responder tests (the page's own description).",
        },
        {
          name: "RASP Phase 2 (3 weeks) — skills training",
          detail: "The page describes candidates preparing for Ranger duties by learning the skills for direct-action combat, airfield seizure, personnel recovery, marksmanship, and explosives, at that summary level.",
        },
        {
          name: "Graduation → Regiment battalion assignment",
          detail: "Assignment to a Regiment battalion (Fort Benning, Hunter Army Airfield, or Joint Base Lewis-McChord, per goarmy.com). Completing RASP is what makes a Soldier a Ranger in the 75th.",
        },
        { name: "RASP 2 (3 weeks)", detail: "The selection course for NCOs, warrant officers, and officers entering the Regiment in-service." },
      ],
      flags: [
        "F-3 — ASVAB LABEL: goarmy.com's Rangers page requires an ASVAB “TECH score of 105 or above.” Goarmy's own ASVAB material names that line score General Technical (GT). The page's label prints as the page prints it, with the identification flagged — the two labels are not silently merged.",
        "RANGER SCHOOL IS NOT THE REGIMENT'S PIPELINE — stated plainly, exactly as the Regiment's own page frames it: Ranger School (61 days) is a completely voluntary leadership course, open beyond the Regiment, and “necessary to lead in the 75th Ranger Regiment” — its phases, as the page describes them, are 20 days of preparation, 21 days in the mountains, and a final phase leading small teams in swamp terrain. The Ranger tab and Regiment service are different things; RASP is the Regiment's selection.",
      ],
      source: "goarmy.com — Rangers page",
    },
    {
      id: "army-soar",
      name: "160th SOAR (Night Stalkers)",
      summary:
        "160th Special Operations Aviation Regiment (Airborne) — the Night Stalkers. In-service application only, no civilian contract. NO qualification table is published (R-2): the Regiment does not publish its qualification table publicly. Pipeline: assessment/selection → Green Platoon at Fort Campbell (enlisted cycle five weeks per army.mil) → role/airframe qualification inside the battalions, durations NOT PUBLISHED.",
      what: "The Army's special operations aviation regiment — the “Night Stalkers” — providing Army special operations aviation support worldwide; one of the five ARSOF units on goarmy.com's Special Operations page.",
      who: "In-service, by application through Army special operations recruiting: the Regiment recruits serving aviators, crew members, and support Soldiers in authorized (primarily aviation and aviation-support) MOSs. There is no civilian enlistment contract for the 160th.",
      quals: [
        "⚠ NOT PUBLISHED as a table: the Regiment does not publish its qualification table publicly — goarmy.com carries no Night Stalker qualification table, and no official public recruiting page publishes the Regiment's GT minimum, rank windows, or fitness cut-offs. Current standards come through Army special operations recruiting at application.",
        "Candidates must be serving Soldiers who volunteer, hold or qualify for the MOSs the Regiment hires, and meet the clearance and flight-physical requirements of their crew position as the recruiting battalion states them at application.",
      ],
      pipeline: [
        {
          name: "Assessment and selection",
          detail: "By the Regiment, of serving aviators, crew members, and support Soldiers. Night Stalkers are, in the official page's words, “three-time volunteers: for the Army, for airborne training and for the regiment.”",
        },
        {
          name: "Green Platoon — Basic Mission Qualification courses",
          detail: "Run by the Special Operations Aviation Training Company (Special Operations Aviation Training Battalion) at Fort Campbell, KY, for commissioned officers, warrant officers, and enlisted Soldiers. army.mil describes the enlisted Green Platoon as a five-week training cycle in basic combat skills for every incoming Night Stalker regardless of job.",
        },
        {
          name: "Role- and airframe-specific mission qualification",
          detail: "Continues inside the Regiment's battalions (aviator, crewmember, and support tracks). ⚠ NOT PUBLISHED: no official page publishes those follow-on course durations as a table — they vary by airframe and role, and no total pipeline length is estimated here.",
        },
      ],
      flags: [
        "R-2 — CONFLICTING THIRD-PARTY FIGURES NOT PRINTED: third-party pages print conflicting GT figures for the 160th (100 vs. 110). Neither is printed here, because neither traces to an official page.",
      ],
      source: "goarmy.com — Special Operations page; Fort Campbell's official 160th SOAR page (home.army.mil); army.mil",
    },
    {
      id: "army-ca",
      name: "Civil Affairs — 38B / 38A",
      summary:
        "Civil Affairs 38B (enlisted) and 38A (officers), under USACAPOC(A). Qualifications as the USACAPOC(A) official FAQ prints: 38B ST 105 after 01 Jul 2004 or GT 107 after 01 Feb 2015, Secret eligibility; 38A typically 1LT–MAJ, PULHES 111221, TS eligibility. Active CAAS / Q-course durations NOT PUBLISHED in the pack's sources (F-4).",
      what: "Civil Affairs Soldiers work the civil component of the operating environment — engaging local governments, assessing civil infrastructure and conditions, and advising commanders — under U.S. Army Civil Affairs and Psychological Operations Command (USACAPOC(A)) in the Reserve and ARSOF civil affairs units on the active side.",
      who: "38B enlisted and 38A officers, Reserve and active — routes and qualifications as USACAPOC(A)'s official FAQ (usar.army.mil) prints them.",
      quals: [
        "38B enlisted: minimum ASVAB ST score of 105 (after 01 July 2004) or GT score of 107 (after 01 Feb 2015) — the FAQ prints both, by test date",
        "38B: eligible for a Secret security clearance",
        "38A officers: typically begin as First Lieutenant to Major (grade waiver possible)",
        "38A: PULHES 111221 physical profile",
        "38A: eligibility for a Top Secret clearance",
      ],
      pipeline: [
        { name: "Reserve initial entry", detail: "10 weeks of Basic Training → 13 weeks of Advanced Individual Training for 38B → assignment to a USACAPOC civil affairs unit (per the USACAPOC FAQ)." },
        { name: "Reserve reclassification", detail: "Current USAR Soldiers (SSG and below) attend the 29-day 38B reclassification course (same FAQ)." },
        {
          name: "Active component — Civil Affairs Assessment and Selection (CAAS) → Civil Affairs Qualification Course",
          detail: "At the U.S. Army John F. Kennedy Special Warfare Center and School, Fort Liberty, including language training. ⚠ Durations for the active CAAS / qualification-course blocks are NOT PUBLISHED in the official sources used for this section — the structure is named and the gap stated, rather than week counts being imported.",
        },
        { name: "38A officers", detail: "Enter at the grades the FAQ states and complete the Civil Affairs officer qualification structure; published at that level only." },
      ],
      flags: [
        "F-4 — COMPONENT/PAGE VARIANCE: the figures above are USACAPOC(A)'s official FAQ figures (the Reserve-facing page), printed attributed to that page. Active-side pages and secondary compilations vary; where they differ, the FAQ's figures are not silently replaced.",
      ],
      source: "USACAPOC(A) official FAQ (usar.army.mil)",
    },
    {
      id: "army-psyop",
      name: "Psychological Operations — 37F / 37A",
      summary:
        "PSYOP 37F (enlisted) and 37A (officers), under USACAPOC(A). ⚠ GT CONFLICT printed flagged (F-4): the goarmy.com 37F job listing text prints GT 107 while an official Army recruiting graphic prints GT 105 — both official-channel, neither chosen. Active pipeline as the goarmy listing prints, incl. DLAB 85+ active-duty only.",
      what: "PSYOP Soldiers assess, develop, and deliver information to inform and influence foreign audiences — “you will become an expert at persuasion,” per USACAPOC(A)'s official material — under USACAPOC(A) (Reserve) and ARSOF PSYOP units (active).",
      who: "37F enlisted and 37A officers, active and Reserve. Qualifications below are USACAPOC(A)'s official FAQ figures; the active pipeline is goarmy.com's 37F job listing text.",
      quals: [
        "37F enlisted: minimum ASVAB ST score of 101 (after 01 July 2004) or GT score of 105 (joining after 01 July 2020) — both printed by the FAQ, by test/join date — AND see the F-4 GT conflict flag below",
        "37F: eligible for a Secret security clearance",
        "37F active duty: DLAB (Defense Language Aptitude Battery) 85 or above — active-duty only, per the goarmy.com listing",
        "37A officers: generally First Lieutenant or Captain",
        "37A: PULHES 111221; Top Secret clearance eligibility",
      ],
      pipelineIntro: "Airborne, POAS, and the DLAB requirement are marked active-duty only in the goarmy.com listing.",
      pipeline: [
        { name: "Active duty — One Station Unit Training", detail: "20 weeks, as the goarmy.com listing prints the sequence." },
        { name: "Airborne School", detail: "Active-duty only per the listing." },
        { name: "Psychological Operations Preparation & Conditioning", detail: "5 weeks." },
        { name: "PO Assessment & Selection (POAS)", detail: "10 days, as the listing prints (see the F-4 variance note). Active-duty only." },
        { name: "PO Qualification Course", detail: "10 weeks." },
        { name: "Special Warfare PO Course", detail: "10 weeks." },
        { name: "Basic Special Operations Language Training", detail: "16–22 weeks, at Fort Liberty under the Special Warfare Center and School (the listing's range)." },
        { name: "Army Reserve route", detail: "10 weeks of Basic Combat Training + 10 weeks of Advanced Individual Training (or OSUT), without the active-duty assessment/language blocks; Reserve qualification figures are the USACAPOC FAQ's (above)." },
      ],
      flags: [
        "F-4 — ⚠ GT CONFLICT, OFFICIAL vs. OFFICIAL: the goarmy.com 37F job listing text prints GT 107; an official Army recruiting graphic prints GT 105. BOTH figures print here, flagged — neither is chosen, and they are never blended. The USACAPOC FAQ's own line (ST 101 after 01 Jul 2004 or GT 105 joining after 01 Jul 2020) prints above as that page prints it.",
        "F-4 — POAS LENGTH: printed as 10 days from the goarmy listing; looser secondary summaries describe ~3 weeks. The listing controls and the variance is flagged rather than blended.",
      ],
      source: "USACAPOC(A) official FAQ (usar.army.mil); goarmy.com 37F job listing",
    },
    {
      id: "army-delta",
      name: "1st SFOD-D (Delta) — existence only",
      summary:
        "1st Special Forces Operational Detachment–Delta (1st SFOD-D): an Army special mission unit under USASOC — existence level only. The Army publishes no recruiting page, no qualification list, and no selection description for it; selection is not publicly detailed. Training pipeline: NONE PUBLISHED.",
      what: "The U.S. Army publicly acknowledges the 1st Special Forces Operational Detachment–Delta (1st SFOD-D) as an Army special mission unit under U.S. Army Special Operations Command. That acknowledgment is the whole of the public recruiting record.",
      who: "Not published. The Army publishes no recruiting page for this unit, and no application route is printed here because none is published.",
      quals: [
        "⚠ NONE PUBLISHED: the Army publishes no qualification list for this unit. No standards are printed here — any standards list offered anywhere else is not an Army publication.",
      ],
      pipeline: [
        {
          name: "Training pipeline: NONE PUBLISHED",
          detail: "Consistent with the selection posture above, the Army publishes no training pipeline for this unit, and this entry prints none.",
        },
      ],
      flags: [
        "R-5 — EXISTENCE ONLY, BY THE ARMY'S OWN PUBLIC POSTURE: how this unit's members are selected is not published by the Army. This entry contains no reconstructed pipeline, no rumored standards, and no “reportedly” content of any kind — anything more would be invention.",
      ],
      source: "U.S. Army public acknowledgment of 1st SFOD-D as a USASOC special mission unit",
    },
  ],
};

/* ------------------------------- MARINE CORPS ------------------------------ */

const USMC: SpecBranch = {
  key: "usmc",
  label: "Marine Corps",
  tileSub: "Marine Raiders (MARSOC) · Reconnaissance 0321",
  intro:
    "Two entries: Marine Raiders — the Marine Corps' SOCOM component, in-service only — and Reconnaissance Marines, a Marine Corps (not SOCOM) community fed by one 0321 pipeline into both the Reconnaissance Battalions and Force Reconnaissance.",
  entries: [
    {
      id: "usmc-raiders",
      name: "Marine Raiders — MARSOC (0372 / 0370)",
      summary:
        "Marine Raiders (MARSOC): Operation Guile Strike culminates Phase 3 of the Marine Raider Course and Operation Derna Bridge culminates Phase 4 — MRC is 9 months at Camp Lejeune in four phases (10 / 8 / 5 / 7 weeks). In-service only; A&S Phase I 2 weeks per the current page; PFT 235 expected / 260 recommended AND the older 225 floor, both printed flagged (F-5).",
      what: "Marine Corps Forces Special Operations Command (MARSOC) is the Marine Corps' component of U.S. Special Operations Command. Its operators — Marine Raiders — serve in Marine Special Operations Teams conducting the special operations missions MARSOC's official pages describe at summary level (direct action, special reconnaissance, foreign internal defense, and related SOF tasks, named by MARSOC itself).",
      who: "In-service only. There is no Raider enlistment contract: every candidate is already a serving Marine (active duty) who screens through a MARSOC recruiter. Candidates who pass recruiter screening are assigned to the Assessment and Selection (A&S) Program (marsoc.marines.mil, A&S page).",
      quals: [
        "GT score: minimum 105 (MARSOC official article on A&S screening) — see the F-5 flag on the officer figure",
        "PFT: the current A&S page states candidates “are expected to score a 235 or higher on the initial physical fitness test (260 or higher is recommended)” — AND the older official article's 225 floor prints flagged below, not blended",
        "Swim assessment, per the A&S page's Phase I aquatic standard: 300-meter swim (side or breast stroke, in MCCUU, no boots); a 25-meter underwater swim in PT gear; retrieving a rifle from the pool bottom; and a 10-minute water tread in full utility uniform (no boots) followed by blouse/trouser flotation — the older 11-minute tread prints flagged below",
        "Ruck standard at A&S: maintain 4 mph (15-minute mile) with a 45-pound rucksack; graded Phase I hikes of 8 and 10 miles (A&S page)",
        "Eligible for a Secret security clearance (MARSOC screening requirements)",
        "Meet MARSOC medical screening requirements (the page's summary level)",
        "Rank windows: enlisted E-3 to E-5 and officers O-1 to O-3 — ⚠ DATED, see the flag below",
        "MARSOC publishes a 10-week training guide (and TrainHeroic app) and states candidates should complete at least the first 7 weeks before A&S Phase I — and warns in its own words that “attaining only the minimum physical fitness standards to enter MARSOC will not guarantee success during the entire A&S process.”",
      ],
      pipelineIntro:
        "Selection is by the A&S cadre's assessment of the whole candidate — MARSOC publishes no attrition rate. ⚠ NOT PUBLISHED, and none is printed here.",
      pipeline: [
        { name: "Recruiter screening", detail: "Through a MARSOC recruiter; candidates who pass screening are assigned to A&S." },
        {
          name: "A&S Phase I — Camp Lejeune",
          detail: "2 weeks per the current A&S page. ⚠ Older MARSOC material describes Phase I as ~3 weeks / 23 days — flagged (F-5), not blended.",
        },
        {
          name: "A&S Phase II",
          detail: "Conducted three times a year at an undisclosed location, per the A&S page. ⚠ Duration NOT PUBLISHED on that page — stated, not filled.",
        },
        { name: "Selection", detail: "Candidates selected at A&S are assigned to the Marine Raider Course." },
        {
          name: "Marine Raider Course (MRC) — Phase 1, Basic Skills (10 weeks)",
          detail: "The basic skill sets required of all special operators; physical fitness, swimming, and hand-to-hand combat stressed in a program built around endurance, functional fitness, and amphibious training (the MRTC page's level). 9-month course, Marine Raider Training Center, Camp Lejeune.",
        },
        {
          name: "MRC — Phase 2, Small Unit Tactics (8 weeks)",
          detail: "Builds on Phase 1 — small boat and scout swimmer operations, crew-served weapons, demolitions, photography, and information collection and reporting, as the page lists them.",
        },
        {
          name: "MRC — Phase 3, Close Quarters Battle (5 weeks)",
          detail: "Rifle and pistol combat marksmanship and assault-operations training as a member of a Marine Special Operations Team, culminating in Operation Guile Strike (the page's named culminating exercise).",
        },
        {
          name: "MRC — Phase 4, Irregular Warfare (7 weeks)",
          detail: "Instruction on irregular warfare operations, culminating in Operation Derna Bridge — training, advising, and operating with a partner-nation/irregular force.",
        },
        {
          name: "After MRC — 0372 / 0370 awarded; Basic Language Course follows",
          detail: "Graduates earn 0372 (enlisted CSO) or 0370 (officer SOO). A Basic Language Course follows in MARSOC's training structure — ⚠ the MRC page does not state its duration: NOT PUBLISHED there.",
        },
      ],
      flags: [
        "F-5 — ⚠ PFT CONFLICT: MARSOC's current A&S page states 235 or higher expected (260 or higher recommended); MARSOC's own earlier official article states a 225 minimum PFT to enter screening. Both are MARSOC-published; both print here, flagged, not blended.",
        "F-5 — ⚠ TREAD VARIANCE: the current A&S page's standard is a 10-minute tread; an older MARSOC preparation guide describes an 11-minute tread. Both print, flagged.",
        "F-5 — ⚠ SOO GT/GCT 110: officer (SOO) candidates are held to GT/GCT 110 in MARSOC recruiting summaries — that figure traces to recruiting summaries, NOT to the A&S command page itself, which does not restate it. Flagged, not blended with the 105 minimum.",
        "F-5 — ⚠ RANK WINDOWS DATED: the E-3–E-5 / O-1–O-3 windows come from a 2015 MARSOC article. Build-time re-verification (Nov 9, 2026): the current official MARSOC A&S page was re-read and does NOT restate rank windows — so the windows print here with this DATED flag, unchanged, rather than as current requirements.",
        "F-5g — ⚠ SUPERSEDED STRUCTURE, NOT MERGED: older official MARSOC releases describe the qualification course (then the Individual Training Course, ITC) as five phases (Phase 0–4), with a Phase 0 containing SERE and different phase subjects than the current four-phase MRC page. The current MRTC page controls; the older structure is recorded here as superseded and is NOT merged into the pipeline above.",
      ],
      source: "MARSOC official pages — A&S page and Marine Raider Training Center MRC page (marsoc.marines.mil)",
    },
    {
      id: "usmc-recon",
      name: "Reconnaissance Marines — 0321",
      summary:
        "Reconnaissance 0321: RTAP 5 weeks → BRC 12 weeks (69 training days) at Reconnaissance Training Company, SOI-West, Camp Pendleton; the older 10-week BRC figure is flagged dated (F-6). LATMOVE under MARADMIN 221/26 — GT 105 or CL 105; the GRC + ARC architecture the MARADMIN names, durations NOT PUBLISHED. Force Recon vs Recon Battalions: same pipeline, assignment difference only.",
      what: "Reconnaissance Marines (PMOS 0321) conduct ground and amphibious reconnaissance for the Marine Air-Ground Task Force. They serve in the division Reconnaissance Battalions and in Force Reconnaissance companies — the same 0321 pipeline feeds both; Force Reconnaissance Marines are the deep-reconnaissance element assigned in support of the Marine Expeditionary Force. This is a Marine Corps (not SOCOM) community.",
      who: "Two published routes: entry-level — new Marines volunteer during infantry training for the recon pipeline; and lateral move (LATMOVE) — serving Marines apply under the current MARADMIN solicitation (MARADMIN 221/26, FY2026–2027, marines.mil). Qualifications below are the MARADMIN's, for LATMOVE applicants.",
      quals: [
        "U.S. citizen; volunteer",
        "GT score of 105 minimum, or Clerical (CL) score of 105 minimum",
        "Interim Secret security clearance (based on NACLC checks)",
        "Rank windows as the message states: Marines in any MOS up to E-5 with no more than two years time in grade, and E-6 03XX with no more than one year TIG (others case-by-case)",
        "Non-03XX Marines attend Infantry Common Core and the Infantry Rifleman's Course at SOI before the recon courses",
        "Medically qualified for parachute and combatant dive operations; an NSW/SO physical completed before reporting",
        "Water survival: Water Survival–Intermediate to enter the assessment program, and Water Survival–Advanced to enter BRC (per the published 0321 prerequisites)",
      ],
      pipelineIntro: "No attrition rate is published in the sources used. ⚠ NOT PUBLISHED.",
      pipeline: [
        { name: "Entry-level route — Recruit Training → School of Infantry", detail: "Infantry Training Battalion / Infantry Rifleman's Course, then Reconnaissance Training Company at SOI–West, Camp Pendleton." },
        { name: "RTAP — Reconnaissance Training and Assessment Program (5 weeks)", detail: "The selection/preparation course (formerly the BRC Primer Course)." },
        {
          name: "Basic Reconnaissance Course (BRC) — 12 weeks",
          detail: "69 training days, per the Reconnaissance Training Company's published description; introduces students to the amphibious reconnaissance environment. 0321 is awarded on completion. ⚠ An older official Marine Corps article describes BRC as 10 weeks — dated material; the RTC's 12 weeks controls, flagged (F-6).",
        },
        {
          name: "LATMOVE route — GRC + ARC",
          detail: "Non-03XX Marines complete Infantry Common Core + the Infantry Rifleman's Course first, then the qualification courses the current MARADMIN names: Ground Reconnaissance Course (GRC) and Amphibious Reconnaissance Course (ARC) — the current course architecture. ⚠ GRC/ARC durations NOT PUBLISHED — printed as unpublished.",
        },
        { name: "Follow-on schools", detail: "Qualified 0321s go on to airborne school, combatant dive school, and other specialty schools as their assignments require — named at that level; durations vary by school and are not tabulated on the pages used." },
        { name: "Force Reconnaissance vs. Reconnaissance Battalions", detail: "Same pipeline, same 0321 — assignment, not a separate schoolhouse." },
      ],
      flags: [
        "F-6 — COURSE ARCHITECTURE: BRC (long-standing) vs. the GRC/ARC structure named in MARADMIN 221/26 (May 2026). Both print; the MARADMIN controls for the current LATMOVE route.",
      ],
      source: "MARADMIN 221/26 (marines.mil); Reconnaissance Training Company, School of Infantry",
      crossLink: { kind: "mos", label: "Open the Library's 0321 entry — and its 0322 / 0317 transition note", mosId: "usmc-0321" },
    },
  ],
};

export const SPEC_BRANCHES_A: SpecBranch[] = [ARMY, USMC];

/* ---------------------------------- NAVY ---------------------------------- */

const NAVY: SpecBranch = {
  key: "navy",
  label: "Navy",
  tileSub: "SEALs · SWCC · EOD · Divers (summary) · AIRR (summary)",
  intro:
    "Naval Special Warfare and the Navy's dive/EOD communities screen through one instrument: the Physical Screening Test (PST) — 500-yard swim, 2 minutes of push-ups, 2 minutes of sit-ups (curl-ups), pull-ups, and a 1.5-mile run, in that order with fixed rests (MILPERSMAN 1220-410, as reflected on navy.com). Four full entries and two summary entries follow. No SARP or HM-ATF entry is constructed (R-3): no official recruiting page publishes a distinct pipeline for them — corpsman support to NSW routes to the standard HM rating material in the Library.",
  entries: [
    {
      id: "navy-seal",
      name: "Navy SEALs (SO)",
      summary:
        "Navy SEALs (SO): PST Minimum + Elevated ONLY, exactly as navy.com tabulates — navy.com publishes NO competitive table (F-7). Pipeline: NSW Prep (8 weeks per current NSW description; 5 weeks in older material, flagged) → BUD/S Orientation → BUD/S 24 weeks in three phases (Hell Week in week 4) → Jump School → SQT 26 weeks per NSW (31 per Navy COOL, flagged) → Trident → 18 months with the first SEAL Team. Totals conflict: 56 weeks (enlisted section) vs 62 weeks (officer section) on the same page (F-13).",
      what: "Sea, Air, and Land Teams — Naval Special Warfare's principal direct-action and special reconnaissance force, under Naval Special Warfare Command (the Navy's SOCOM component).",
      who: "Enlistment contract (SO) through a recruiter with an NSW coordinator/mentor administering the PST; serving Sailors apply for conversion; officers via the SEAL officer selection routes. Men and women are eligible on the same published standards.",
      quals: [
        "Age: 28 years of age or younger — the stricter of the page's two printings; see the F-7 flag (the same page's enlisted section says “less than 29”)",
        "Eyesight: “20/40 best eye; 20/70 worst eye; correctable to 20/25” (navy.com)",
        "Pass a physical examination required for divers",
        "U.S. citizen; eligible for a security clearance (Secret, per the rating's requirements)",
        "ASVAB, as navy.com prints the combinations: GS+MC+EI ≥ 167 with AR+MK ≥ 100; or VE+MK+MC+CS ≥ 216 with AR+MK ≥ 100; or VE+AR ≥ 108 and MC ≥ 50 with AR+MK ≥ 100; or VE+AR+MK+AO ≥ 216 with AR+MK ≥ 100",
        "PST — Minimum and Elevated (EPST), exactly as navy.com's SEAL page tabulates them (table below). Candidates who achieve the Elevated PST scores “may qualify for the Enlisted Bonus for Shipping (EB-SHP) program,” per navy.com.",
      ],
      tables: [
        {
          caption: "SEAL PST — as navy.com tabulates it (Minimum / Elevated only)",
          headers: ["Event", "Minimum", "Elevated (EPST)"],
          rows: [
            ["Swim 500 yd (combat sidestroke)", "12:30", "9:30"],
            ["Push-ups (2 min)", "50", "75"],
            ["Sit-ups (2 min)", "50", "75"],
            ["Pull-ups", "10", "15"],
            ["Run 1.5 mi", "10:30", "9:30"],
          ],
        },
      ],
      pipelineIntro:
        "Selection is continuous through the pipeline — passing the PST earns a contract opportunity, not a Trident. NSW publishes no official attrition percentage on its recruiting pages. ⚠ NOT PUBLISHED, and none is printed here. All blocks at Naval Amphibious Base Coronado, CA unless noted.",
      pipeline: [
        { name: "Recruit Training (boot camp)", detail: "Then the NSW pipeline below." },
        {
          name: "Naval Special Warfare Preparatory School — Great Lakes, IL",
          detail: "Physical preparation for BUD/S; NSW's description puts it at 8 weeks. ⚠ Older NSW material says 5 weeks (F-13) — flagged, not blended.",
        },
        {
          name: "BUD/S Orientation",
          detail: "3 weeks per NSW. ⚠ The Navy COOL roadmap's 7 weeks is flagged (F-13).",
        },
        { name: "BUD/S First Phase — Basic Conditioning (7 weeks)", detail: "Includes Hell Week, in the fourth week, as NSW names it. BUD/S totals 24 weeks in three 7-week phases per the Navy COOL SO roadmap." },
        { name: "BUD/S Second Phase — Combat Diving (7 weeks)", detail: "Open- and closed-circuit diving, at NSW's summary level." },
        {
          name: "BUD/S Third Phase — Land Warfare (7 weeks)",
          detail: "Weapons, demolitions, land navigation, patrolling, marksmanship, small-unit tactics at NSW's summary level; the phase's final field training takes place on San Clemente Island.",
        },
        { name: "Parachute Jump School", detail: "Follows BUD/S in the published sequence." },
        {
          name: "SEAL Qualification Training (SQT) — 26 weeks per NSW",
          detail: "Advanced tactical training building on BUD/S; includes SERE as a named element (named only — nothing about its content) and parachute training through Tactical Air Operations. ⚠ Navy COOL's 31 weeks is flagged (F-13). The Trident is awarded at SQT graduation.",
        },
        { name: "First SEAL Team — 18 months", detail: "18 months of pre-deployment and specialized training with the first SEAL Team (navy.com's figure)." },
      ],
      flags: [
        "F-7 — ⚠ AGE CONFLICT INSIDE ONE PAGE: navy.com's SEAL page prints both “be less than 29 years old” (enlisted section) and “be 28 years of age or younger” (officer section) — a per-category difference printed in separate sections of one page, flagged because the page never says so explicitly. This entry shows the stricter reading (28 or younger) with this flag.",
        "F-7 — ⚠ NO COMPETITIVE TABLE: navy.com publishes Minimum and Elevated (EPST) only — it does NOT publish a competitive table. The higher “competitive/optimum” columns circulating on secondary sites trace to older NSW recruiting guides, not to navy.com's current page, and are NOT printed here.",
        "F-7 — ⚠ ASVAB VARIANCE: navy.com's current combinations (printed above) differ from older NSW recruiting combinations (e.g., GS+MC+EI = 170). navy.com's current page controls; the variance is flagged. Swim-stroke wording also varies: navy.com's table says combat sidestroke; the governing instruction's standard allows breaststroke or combat sidestroke.",
        "F-13 — ⚠ TOTALS CONFLICT: navy.com's own SEAL page prints 56 weeks of initial training in its enlisted section and 62 weeks in its officer section for the same BUD/S + Jump School + SQT block — both flagged, no computed single total. Block-length variances (NSW Prep 8 vs 5 weeks; Orientation 3 vs 7; SQT 26 vs 31) print attributed in the pipeline above.",
      ],
      source: "navy.com — SEAL page; Naval Special Warfare (sealswcc.com); Navy COOL SO career roadmap",
    },
    {
      id: "navy-swcc",
      name: "SWCC — Special Warfare Combatant-craft Crewmen (SB)",
      summary:
        "SWCC (SB): PST with the F-8 correction stated in-entry — Minimum swim 13:00 / run 12:00 (the 13:00 is the SWIM, not the run); Elevated swim 10:00 / run 10:00. Pipeline is the CURRENT navy.com four-block structure, 34 weeks specialized: NSW Assessment Command 7 (Phase Zero) → ALPHA 7 → BRAVO 7 → CHARLIE 13 → SWCC wings. The older pipeline is recorded as superseded (F-14).",
      what: "SWCC crews operate NSW's special operations craft — inserting, extracting, and supporting SEALs and SOF on inland and coastal waterways (NSW's own summary).",
      who: "Enlistment (SB) contract or in-service conversion, screened by the same PST.",
      quals: [
        "Eyesight: 20/40 best eye, 20/70 worst eye, correctable to 20/25 (as the SEAL entry)",
        "ASVAB: AR+VE ≥ 105 with MC ≥ 51, or AR + 2MK + GS = 210 with MC ≥ 51",
        "Less than 31 years old",
        "U.S. citizen, eligible for a security clearance",
        "PST, as navy.com's current SWCC page prints it (table below) — with the F-8 correction stated in the flag: the 13:00 minimum is the SWIM, not the run",
      ],
      tables: [
        {
          caption: "SWCC PST — as navy.com's current page prints it",
          headers: ["Event", "Minimum", "Elevated"],
          rows: [
            ["Swim 500 yd", "13:00", "10:00"],
            ["Push-ups (2 min)", "50", "70"],
            ["Sit-ups (2 min)", "50", "70"],
            ["Pull-ups", "6", "10"],
            ["Run 1.5 mi", "12:00", "10:00"],
          ],
        },
      ],
      pipelineIntro: "navy.com's current SWCC page — the SWCC Training Center pipeline, 34 weeks of specialized training in four blocks.",
      pipeline: [
        { name: "Recruit Training Command", detail: "Boot camp; physical evaluations and medical screenings." },
        {
          name: "Naval Special Warfare Assessment Command — 7 weeks (Phase Zero)",
          detail: "Phase Zero prepares candidates for the physical and mental demands of SWCC training while assessing readiness for the following phase.",
        },
        { name: "ALPHA Phase — 7 weeks", detail: "The selection phase — evaluates physical endurance, mental resilience, and the ability to perform as part of a high-performing team." },
        { name: "BRAVO Phase — 7 weeks", detail: "Foundational SWCC capabilities — boat operations, navigation, communications, and maritime tactics, as the page lists them." },
        {
          name: "CHARLIE Phase — 13 weeks → SWCC wings",
          detail: "Advanced operational skills, including Naval Special Warfare SERE training (named as an element only) and Static Line Jump School → SWCC wings.",
        },
      ],
      flags: [
        "F-8 — ⚠ THE 13:00 IS THE SWIM: in NSW tables the 13:00 belongs to the swim. navy.com's current page prints swim 13:00 / run 12:00 for SWCC minimums, and it controls. Any table showing a 13:00 SWCC run has the two events transposed.",
        "F-14 — ⚠ PIPELINE RESTRUCTURED: older NSW material names a different SWCC pipeline (NSW Preparatory School → Basic Crewman Selection → Crewman Qualification Training). navy.com's current four-block structure (Assessment Command / Alpha / Bravo / Charlie) supersedes it on the official recruiting page; both are recorded, the current page controls.",
      ],
      source: "navy.com — SWCC page (current)",
    },
    {
      id: "navy-eod",
      name: "Navy EOD — Explosive Ordnance Disposal",
      summary:
        "Navy EOD: PST minimums swim 12:30 / push-ups 50 / sit-ups 50 / pull-ups 6 / run 12:30 WITH the combined rule — swim + run ≤ 23:00 per navy.com's current page (controls); the 21:00 figure from secondary MILPERSMAN transcriptions is a flagged conflict (F-15). Pipeline exactly as navy.com publishes: 66 weeks of specialized training after boot camp, through NAVSCOLEOD at Eglin AFB — the same joint schoolhouse as Army 89D (cross-linked to the Library, not duplicated).",
      what: "Navy EOD renders safe explosive hazards on land and underwater and is the DoD's maritime EOD force; EOD Technicians routinely support SOF. Navy EOD is a Naval Expeditionary Combat Command community screened through the same Warrior Challenge/PST structure.",
      who: "Enlistment or in-service, screened by the PST under the combined rule below.",
      quals: [
        "Eyesight: 20/200 bilateral correctable to 20/25, no color blindness",
        "ASVAB: AR+VE = 109 with MC = 51, or GS+MC+EI = 169",
        "Age: 30 years of age or younger",
        "Pass a physical and a separate diver medical examination",
        "PST minimums: swim 12:30; push-ups 50; sit-ups 50; pull-ups 6; run 12:30 — WITH the combined rule: swim + run together must total no more than 23:00, as navy.com's EOD PST table prints it (its asterisked footnote). See the F-15 flag.",
      ],
      pipelineIntro: "navy.com's EOD page publishes the full sequence with durations — 66 weeks of specialized training after boot camp, by navy.com's own published blocks.",
      pipeline: [
        { name: "Recruit Training Command, Great Lakes", detail: "10 weeks." },
        {
          name: "EOD Preparatory Course — 4 weeks, Great Lakes, IL",
          detail: "Swim stroke development, long-range swims, physical conditioning, human-performance coaching, and introductory classroom work (the page's description).",
        },
        {
          name: "EOD Assessment and Selection Course — 4 weeks",
          detail: "Candidates are assessed on comfort in the water, physical fitness, academic ability, professionalism, and peer rankings; the course ends in a formal selection board that chooses who proceeds to diver training.",
        },
        {
          name: "Diver Training — 7 weeks, Naval Diving and Salvage Training Center, Panama City, FL",
          detail: "Basic scuba concepts, dive physics, physiology, and basic dive medicine (the page's level).",
        },
        {
          name: "EOD School — 44 weeks, Naval Explosive Ordnance Disposal School (NAVSCOLEOD), Eglin AFB, FL",
          detail: "The joint EOD school; sections build progressively across the ordnance areas the page names (demolition operations; air, surface, and improvised ordnance; CBRN; underwater ordnance) — subject areas as navy.com lists them, nothing further.",
        },
        { name: "Basic Parachute Training — 3 weeks, Fort Benning, GA", detail: "As navy.com publishes." },
        {
          name: "EOD Tactical Training — 4 weeks, San Diego, CA",
          detail: "Helicopter insertion, small arms, small unit tactics, and tactical communications at the page's summary level → assignment to an EOD Mobile Unit.",
        },
      ],
      flags: [
        "F-15 — ⚠ COMBINED-CAP CONFLICT: navy.com's current EOD page prints the combined swim + run cap as ≤ 23:00 (asterisked footnote) and CONTROLS for this app. Transcriptions of the governing instruction (MILPERSMAN 1220-410) in secondary sources give 21:00. Build-time re-verification (Nov 9, 2026): the official instruction text retrieved did not itself print a combined cap, so the conflict stays flagged for re-verification against the instruction itself — neither figure is silently chosen beyond navy.com's control as the recruiting source.",
      ],
      source: "navy.com — EOD page",
      crossLink: { kind: "mos", label: "Open the Library's Army 89D entry — same NAVSCOLEOD schoolhouse", mosId: "army-89d" },
    },
    {
      id: "navy-nd",
      name: "Navy Divers (ND) — summary",
      summary:
        "Navy Divers (ND) — SUMMARY level: PST-screened; the MILPERSMAN 1220-410 column re-read at build groups EOD and ND together (swim 12:30, push-ups 50, curl-ups 50, pull-ups 6, run 12:30). Pipeline at summary level: PST → preparatory/assessment → diver training at NDSTC Panama City → fleet assignments. ND-specific course durations NOT PUBLISHED on the navy.com pages reviewed — flagged, not filled (F-8).",
      what: "The Navy's salvage, repair, and saturation-capable dive force.",
      who: "Screened by PST under MILPERSMAN 1220-410. Summary-level entry, per the section's design.",
      quals: [
        "PST minimums — the instruction's EOD/ND column, re-read at build from MILPERSMAN 1220-410: swim 12:30; push-ups 50; sit-ups (curl-ups) 50; pull-ups 6; run 12:30",
      ],
      pipeline: [
        { name: "PST → preparatory/assessment training", detail: "Summary level — names and order only." },
        { name: "Diver training — Naval Diving and Salvage Training Center, Panama City, FL", detail: "The same schoolhouse as the EOD pipeline's Diver Training block." },
        { name: "Fleet diving assignments", detail: "With advanced/saturation qualifications earned in service." },
      ],
      flags: [
        "F-8 — ⚠ PROVENANCE + NOT PUBLISHED: the PST figures above are the MILPERSMAN 1220-410 EOD/ND column as re-read at build from the official instruction PDF on a navy.mil host; the located copy is CH-42 (2013), so the figures print with that provenance rather than as a current navy.com table. ND-specific course durations are NOT PUBLISHED on the navy.com pages reviewed — flagged, not filled.",
      ],
      source: "MILPERSMAN 1220-410 (navy.mil host); navy.com pages reviewed",
    },
    {
      id: "navy-airr",
      name: "Aviation Rescue Swimmers (AIRR) — summary",
      summary:
        "AIRR — SUMMARY level: PST minimums as published (swim 12:00; push-ups 42; sit-ups 50; pull-ups 4; run 12:00). Pipeline names/order only: PST → Naval Aircrew Candidate School (Pensacola) → Aviation Rescue Swimmer School (Pensacola) → rating “A” School → fleet squadron. Durations NOT PUBLISHED on the pages reviewed — flagged.",
      what: "The Navy's helicopter rescue swimmers — a Warrior Challenge program like the Coast Guard's AST (see the Coast Guard tile).",
      who: "Screened by the PST. Summary-level entry, per the section's design.",
      quals: ["PST minimums as published for AIRR: swim 12:00; push-ups 42; sit-ups 50; pull-ups 4; run 12:00"],
      pipeline: [
        { name: "PST", detail: "The screening test (minimums above)." },
        { name: "Naval Aircrew Candidate School — Pensacola, FL", detail: "Names and order only — durations not published on the pages reviewed." },
        { name: "Aviation Rescue Swimmer School — Pensacola, FL", detail: "Then the rating's “A” School → fleet squadron." },
      ],
      flags: [
        "⚠ NOT PUBLISHED: phase durations are not published on the navy.com pages reviewed — names and order only, flagged rather than filled.",
        "R-3 — NO SARP / HM-ATF ENTRIES: no official recruiting page located publishes a distinct SARP or Hospital Corpsman–Advanced Technical Field special-operations pipeline with its own qualifications, so no entries are constructed for them. Corpsman support to NSW routes to the standard HM rating material in the Library.",
      ],
      source: "navy.com pages reviewed; MILPERSMAN 1220-410 PST structure",
    },
  ],
};

/* -------------------------------- AIR FORCE -------------------------------- */

const AF_IFT_TABLE: SpecTable = {
  caption: "IFT — enlisted standards from the official worksheet in the FY27 packages on airforce.com. Candidates must pass EVERY component in one evaluation; failure of any event is overall failure (the worksheet's own rule). Enlisted candidates must pass the IFT within 60 days before entering active duty.",
  headers: ["Event", "9T5 (new enlistee)", "1Z1–1Z4 (PJ/CCT/TACP/SR)"],
  rows: [
    ["Pull-ups (2 min)", "8", "8"],
    ["Sit-ups (2 min)", "50", "50"],
    ["Push-ups (2 min)", "40", "40"],
    ["Run 1.5 mi", "10:20", "10:20"],
    ["25 m underwater swim × 2", "Pass both", "Pass both"],
    ["Surface swim 500 m", "15:00", "12:30"],
  ],
};

const AIRFORCE: SpecBranch = {
  key: "airforce",
  label: "Air Force",
  tileSub: "The IFT · Pararescue · Combat Control · Special Reconnaissance · TACP · SERE (summary) · EOD (cross-link)",
  intro:
    "Air Force Special Warfare (AFSPECWAR) — Pararescue, Combat Control, Special Reconnaissance, and TACP — is the Air Force's SOCOM-contributing ground combat force, under Air Force Special Operations Command. The IFT reference block leads this tile: the entry test WAS the PAST (Physical Ability and Stamina Test); it is NOW the IFT (Initial Fitness Test) — and the rename itself is flagged, because official packages still mix the labels.",
  entries: [
    {
      id: "af-ift",
      name: "The IFT — Initial Fitness Test (reference)",
      summary:
        "The IFT reference block: the entry test WAS the PAST, is NOW the IFT — the rename printed with its flag (a current FY27 TACP Officer package still titles its annex “PAST Criteria”; F-9). Enlisted 9T5 and 1Z1–1Z4 columns are identical except the surface swim (15:00 vs 12:30); officer (STO/CRO) column: 12 pull-ups/1 min, 75 sit-ups, 64 push-ups, 3-mi run 22:00, 1,500-m swim 32:00. Pass every component, or fail the test.",
      what: "The entry fitness test for Air Force Special Warfare. The standards below are from the official IFT worksheet published in the Air Force's own FY27 officer application packages hosted on airforce.com (AETC/A3LS worksheet), cross-checked against airforce.com's career pages.",
      who: "Enlisted Special Warfare candidates (PJ 1Z1 / CCT 1Z2 / TACP 1Z3 / SR 1Z4), new-enlistee Basic Special Warfare Airmen (9T5), and officer candidates (STO/CRO; TACPO per the note below). SERE specialists screen on the worksheet's SERE column and EOD on its EOD column — see those entries.",
      quals: [
        "Pass EVERY component in one evaluation — failure of any event is overall failure (the worksheet's own rule)",
        "Enlisted candidates must pass the IFT within 60 days before entering active duty (per the application packages)",
        "Officer (STO/CRO) column on the same worksheet: 12 pull-ups (1 min), 75 sit-ups, 64 push-ups, 3-mile run 22:00, underwater pass, 1,500 m swim 32:00",
        "TACP Officers (TACPO): officer calisthenics/run with a 500 m swim at 12:30",
      ],
      tables: [AF_IFT_TABLE],
      pipeline: [
        {
          name: "The IFT is a screening test, not a pipeline",
          detail: "Each Air Force entry below carries its own published training pipeline; the IFT is the entry test they share.",
        },
      ],
      flags: [
        "F-9 — ⚠ THE RENAME IS UNEVEN: the entry test was the PAST and is now the IFT — but a current FY27 TACP Officer application package still titles its annex “PAST Criteria.” Older pages and handouts still say PAST. Both labels print here flagged, exactly as official material prints them.",
      ],
      source: "Official IFT worksheet in the FY27 application packages on airforce.com (AETC/A3LS); airforce.com career pages",
    },
    {
      id: "af-pj",
      name: "Pararescue (PJ) — 1Z1",
      summary:
        "Pararescue (1Z1): airforce.com's TEN published steps verbatim — BMT 7.5 wks → SW A&S 4 → ZULU 16 → Pre-Dive 4 → Combat Dive 5 (Panama City) → Airborne 5 wks Fort Benning (as THIS page prints) → Free-Fall 4 → SERE 3 Fairchild (named only) → MP3 39 → Apprentice 22 Kirtland → maroon beret. Age “not yet 42” flagged against older 17–39 print (F-9); ASVAB General ≥ 49 as the page prints.",
      what: "The DoD's dedicated personnel-recovery/combat rescue specialists — “That Others May Live” — trained as paramedic-rescuers who recover isolated personnel in contested and austere environments.",
      who: "Enlisted 1Z1 candidates through the IFT; officer counterpart Combat Rescue Officer (CRO, 19ZXC) — Phase I application / Phase II selection per the FY27 package on airforce.com.",
      quals: [
        "U.S. citizen",
        "At least 17 and not yet 42 on the date of enlistment — as airforce.com's Pararescue page publishes; see the F-9 flag against older 17–39 print",
        "ASVAB General (G) score of 49 or higher (the figure airforce.com prints for the career field)",
        "Normal color vision and depth perception",
        "Qualify for parachute and marine diving duty",
        "Pass the IFT (see the IFT reference block)",
        "CRO (19ZXC) officer counterpart, per the FY27 package: U.S. citizenship, Top Secret eligibility, a Special Warfare Airman physical (AFMAN 48-123), IFT minimums, and AFOQT minimums the package prints (verbal 15 / quantitative 10) — with the package's 18–39 commissioning window flagged (F-9)",
      ],
      pipelineIntro:
        "airforce.com's Pararescue page — its ten published steps, verbatim durations/locations. The page prints no total; its ten steps sum to roughly two years of training. The steps print, not a computed promise.",
      pipeline: [
        { name: "1. Basic Military Training — 7.5 weeks, Lackland AFB, TX", detail: "Step 1 of 10 as the page publishes." },
        { name: "2. Special Warfare Assessment and Selection Course — 4 weeks, Lackland AFB, TX", detail: "“The moment candidates must prove they are worthy to advance in PJ training or find another career field” (the page's framing)." },
        { name: "3. Common Skills (ZULU) — 16 weeks, Lackland AFB, TX", detail: "Foundational skills for all Special Warfare fields, per the page: weapons proficiency, small-unit tactics, tactical communications, casualty care, mission planning." },
        { name: "4. Special Warfare Pre-Dive Course — 4 weeks, Lackland AFB, TX", detail: "Prepares candidates for combat dive school; water-confidence training." },
        { name: "5. Special Warfare Combat Dive Course — 5 weeks, Panama City, FL", detail: "As the page publishes." },
        { name: "6. Airborne School — 5 weeks, Fort Benning, GA", detail: "⚠ As THIS page prints — airforce.com's Combat Control page prints the same school at three weeks (F-16). Printed per page, flagged, never harmonized." },
        { name: "7. Military Free-Fall Course — 4 weeks, Yuma, AZ / Jamul, CA", detail: "As the page publishes." },
        { name: "8. SERE Training — 3 weeks, Fairchild AFB, WA", detail: "Named as the pipeline element; nothing further." },
        { name: "9. Modernized Pararescue Provider Program (MP3) — 39 weeks, Lackland AFB, TX", detail: "The medical block: EMT and Nationally Registered Paramedic certification plus combat medical training, as the page describes it." },
        { name: "10. Pararescue Apprentice Course — 22 weeks, Kirtland AFB, NM", detail: "→ graduation (maroon beret)." },
      ],
      flags: [
        "F-9 — ⚠ AGE VARIANCE: “not yet 42” (current airforce.com PJ page) vs. 17–39 (older Air Force recruiting print) vs. the 18–39 commissioning window in the CRO FY27 package. All official; printed flagged, none blended.",
        "F-16 — ⚠ AIRBORNE LENGTH, airforce.com vs. itself: this page prints Airborne School at 5 weeks; the Combat Control page prints 3 weeks. Printed per page in each entry, flagged — never harmonized.",
      ],
      source: "airforce.com — Pararescue page; FY27 CRO application package (airforce.com)",
    },
    {
      id: "af-cct",
      name: "Combat Control (CCT) — 1Z2",
      summary:
        "Combat Control (1Z2): airforce.com's TEN published steps verbatim — BMT 7.5 → SW A&S 4 → ZULU 16 → Pre-Dive 4 → Airborne 3 wks Fort Benning (as THIS page prints — the F-16 conflict with the PJ page's 5 weeks, flagged, never harmonized) → Free-Fall 4.5 wks Yuma Proving Ground → SERE 3 → Air Traffic Control 9 wks Pope (FAA certification) → CCT Apprentice 13 → Special Tactics Training 6 months Hurlburt → scarlet beret. The CCT page lists NO separate Combat Dive step — none is inserted.",
      what: "Special tactics airmen who deploy first into austere environments to establish assault zones and control air traffic in the objective area — FAA-certified controllers embedded with SOF (Air Force's published summary).",
      who: "Enlisted 1Z2 candidates through the IFT; officer counterpart Special Tactics Officer (STO, 19ZXA), Phase I/II selection per the FY27 airforce.com package.",
      quals: [
        "The AFSPECWAR common standard — IFT (1Z column, see the IFT reference block), citizenship, the career field's published ASVAB General requirement on airforce.com's Combat Control page, color vision, and qualification for parachute/dive duty as the page states",
      ],
      pipelineIntro:
        "airforce.com's Combat Control page — its ten published steps, verbatim durations/locations. Total not printed by airforce.com; the steps sum to roughly 21 months. Printed as published: the CCT carousel contains NO separate Combat Dive Course step (the PJ carousel has one) — Pre-Dive is step 4 and the page moves on to Airborne; no dive step is inserted here.",
      pipeline: [
        { name: "1. Basic Military Training — 7.5 weeks, Lackland AFB, TX", detail: "Step 1 of 10 as the page publishes." },
        { name: "2. Special Warfare Assessment and Selection Course — 4 weeks, Lackland AFB, TX", detail: "As the page publishes." },
        { name: "3. Common Skills (ZULU) Course — 16 weeks, Lackland AFB, TX", detail: "The same foundational block as the PJ page describes." },
        { name: "4. Special Warfare Pre-Dive Course — 4 weeks, Lackland AFB, TX", detail: "As the page publishes — and the page lists no separate Combat Dive step after it." },
        { name: "5. Airborne School — 3 weeks, Fort Benning, GA", detail: "⚠ As THIS page prints — the PJ page prints this school at five weeks (F-16). Printed per page, flagged, never harmonized." },
        { name: "6. Military Free-Fall Course — 4.5 weeks, Yuma Proving Ground, AZ", detail: "As the page publishes." },
        { name: "7. SERE Training — 3 weeks, Fairchild AFB, WA", detail: "Named element only." },
        { name: "8. Air Traffic Control — 9 weeks, Pope Army Airfield, NC", detail: "Leads to FAA certification, per the page." },
        { name: "9. Combat Control Apprentice Course — 13 weeks, Pope Army Airfield, NC", detail: "As the page publishes." },
        { name: "10. Special Tactics Training — 6 months, Hurlburt Field, FL", detail: "The page calls it the longest and most comprehensive segment, ending in the five-level upgrade → scarlet beret." },
      ],
      flags: [
        "F-16 — ⚠ AIRBORNE LENGTH, airforce.com vs. itself: this page prints Airborne School at 3 weeks; the Pararescue page prints 5 weeks. Both airforce.com; printed per page, flagged — the build does not silently harmonize them.",
      ],
      source: "airforce.com — Combat Control page; FY27 STO application package (airforce.com)",
    },
    {
      id: "af-sr",
      name: "Special Reconnaissance (SR) — 1Z4",
      summary:
        "Special Reconnaissance (1Z4): the shared AFSPECWAR front end printed (BMT 7.5 → SW A&S 4 → ZULU 16 → Pre-Dive 4, all Lackland), then SR specialty training / Special Tactics Training (Hurlburt structure) → pewter-gray beret — with the explicit flag that SR-specific step durations were NOT PUBLISHED/captured from the official page in this pass and are not filled from secondary guides.",
      what: "Special tactics airmen specializing in surveillance, reconnaissance, and intelligence preparation of the environment for SOF (Air Force's published summary). Newest of the four enlisted fields.",
      who: "Enlisted 1Z4 candidates through the IFT — AFSPECWAR common qualifications (IFT 1Z column; airforce.com career-page requirements).",
      quals: ["AFSPECWAR common — IFT 1Z column (see the IFT reference block) and airforce.com's career-page requirements"],
      pipeline: [
        { name: "Basic Military Training — 7.5 weeks, Lackland AFB, TX", detail: "The shared published AFSPECWAR front end, printed identically across the enlisted Special Warfare fields." },
        { name: "Special Warfare Assessment and Selection Course — 4 weeks, Lackland AFB, TX", detail: "Shared front end." },
        { name: "Common Skills (ZULU) — 16 weeks, Lackland AFB, TX", detail: "Shared front end." },
        { name: "Special Warfare Pre-Dive — 4 weeks, Lackland AFB, TX", detail: "Shared front end." },
        {
          name: "SR specialty training / Special Tactics Training — Hurlburt Field structure → pewter-gray beret",
          detail: "⚠ NOT PUBLISHED in this pass: airforce.com's SR career page step-list (with per-step durations) could not be captured from the official page, so SR-specific step durations are NOT printed — the gap is flagged rather than filled from secondary pipeline guides. Build-time capture from airforce.com's SR page is permitted from that official page only; until captured, this flag ships.",
        },
      ],
      flags: [
        "⚠ NOT PUBLISHED/CAPTURED: SR-specific step durations were not published/captured from the official page in this pass and are not filled from secondary guides.",
      ],
      source: "airforce.com — Special Warfare career pages (shared front end)",
    },
    {
      id: "af-tacp",
      name: "TACP — 1Z3 / TACPO 19ZXB",
      summary:
        "TACP (1Z3): IFT 1Z column + career-page requirements; TACPO (19ZXB) per the FY27 package — TS/SCI eligibility, 6-year post-training commitment, hazardous-duty volunteer incl. JTAC and static-line parachuting, officer IFT column, and the package's “PAST Criteria” annex label flagged. Enlisted pipeline per AETC's official FTU release: TACP Apprentice at JBSA-Lackland (Medina Annex) — 21 weeks delivering complete initial qualification.",
      what: "Airmen embedded with Army maneuver and SOF units who coordinate close air support and joint fires; JTAC-qualified controllers. TACP is an AFSPECWAR career field aligned heavily to conventional Army support as well as SOF.",
      who: "Enlisted 1Z3 candidates test on the same IFT worksheet (1Z column). Officer counterpart: TACP Officer (TACPO, 19ZXB) per the FY27 application package on airforce.com.",
      quals: [
        "IFT 1Z column (see the IFT reference block) + airforce.com career-page requirements",
        "TACPO (19ZXB), per the FY27 package: TS/SCI eligibility",
        "TACPO: a 6-year post-training service commitment",
        "TACPO: hazardous-duty volunteer status (JTAC and static-line parachuting)",
        "TACPO: the officer IFT column (the package's Annex B still labels it “PAST Criteria” — flagged, F-9)",
      ],
      pipelineIntro:
        "Official Air Force sources: the FY27 TACP Officer application package on airforce.com for the pipeline structure; Air Education and Training Command's official release on the TACP Formal Training Unit for the enlisted schoolhouse.",
      pipeline: [
        { name: "Enlisted — BMT → Special Warfare Assessment and Selection", detail: "BMT 7.5 weeks, Lackland, then SW A&S." },
        {
          name: "Enlisted — TACP Apprentice Course, TACP Schoolhouse / Formal Training Unit, JBSA-Lackland (Medina Annex), TX — 21 weeks",
          detail: "AETC's official release states the FTU was stood up to deliver the complete initial qualification in 21 weeks, producing fully qualified TACPs up front (radio communications, close air support fundamentals, and small-unit skills at the release's summary level).",
        },
        {
          name: "Enlisted — SERE Training (Fairchild AFB, WA) + Airborne School (Fort Benning, GA)",
          detail: "As the career field's published school list requires → assignment to a TACP unit, where JTAC qualification and mission-readiness training continue.",
        },
        {
          name: "Officer (19ZXB) — Phase I board → Phase II (TOPT, one week)",
          detail: "Then the TACP Officer pipeline the FY27 package names: Special Warfare Assessment and Selection course → Special Warfare Zulu (common skills) → TACP Officer Initial Skills training / FTU → the Joint Firepower Course and Basic ALO Skills Course (Nellis AFB, NV) → SERE (Fairchild). Schools named as the package names them.",
        },
      ],
      flags: [
        "F-9 — ⚠ “PAST CRITERIA” ANNEX: Annex B of the current FY27 TACPO package still labels the officer test column “PAST Criteria” — the PAST→IFT naming transition is inconsistent even within current official packages; flagged, not corrected.",
        "F-9 family — ⚠ NO ENLISTED STEP CAROUSEL CAPTURED: airforce.com's enlisted TACP career page does not publish a step-by-step carousel in the material captured for this section; the enlisted durations above come from AETC's official FTU release, and the structure is flagged accordingly.",
      ],
      source: "FY27 TACP Officer application package (airforce.com); AETC official FTU release",
    },
    {
      id: "af-sere",
      name: "SERE Specialists — 1T0 (summary)",
      summary:
        "SERE Specialists (1T0) — SUMMARY: screened on the IFT worksheet's SERE column (pull-ups 8; sit-ups 48; push-ups 40; 1.5-mi run 11:00; underwater/surface swim Not Tested for SERE). Pipeline = airforce.com's three steps: BMT 7.5 wks Lackland → SASS 15 days (JBSA-Lackland/Chapman Annex) → SST-AC 5.5 months, 17 training phases (Fairchild; environments named only).",
      what: "Survival, Evasion, Resistance, and Escape specialists are the Air Force's survival instructors — a support specialty to the whole force (and to AFSPECWAR). Summary level.",
      who: "Screened on the IFT worksheet's SERE column (below).",
      quals: [
        "IFT worksheet, SERE column: pull-ups 8; sit-ups 48; push-ups 40; 1.5-mile run 11:00",
        "Underwater and surface-swim events: Not Tested for SERE (the worksheet's own marking)",
      ],
      pipelineIntro: "airforce.com's SERE Specialist page — its three published steps.",
      pipeline: [
        { name: "Basic Military Training — 7.5 weeks, Lackland AFB, TX", detail: "Step 1 of 3." },
        {
          name: "SERE Specialist Assessment and Selection (SASS) — 15 days, JBSA-Lackland / Chapman Annex",
          detail: "The page: it qualifies Airmen to attend the SERE Specialist AFSC-awarding course; evaluations rest on the candidate's ability to adapt during stressful practical exercises and demonstrate the attributes of a SERE Specialist.",
        },
        {
          name: "SERE Specialist Training Apprentice Course (SST-AC) — 5.5 months, 17 training phases, Fairchild AFB, WA",
          detail: "The page describes training across remote forest, desert, coastal, tropic, and open-ocean environments — environments named, course content not described further here.",
        },
      ],
      flags: [],
      source: "airforce.com — SERE Specialist page; official IFT worksheet (SERE column)",
    },
    {
      id: "af-eod",
      name: "Air Force EOD — 3E8 (cross-link only)",
      summary:
        "Air Force EOD (3E8) — CROSS-LINK ONLY: qualifies at the same joint schoolhouse (NAVSCOLEOD, Eglin AFB) as the Navy EOD entry. NO IFT EOD-column numerals are printed — the worksheet extraction was garbled and a clean official re-read could not be completed at build (F-9), so the cross-link ships without numerals.",
      what: "Air Force EOD qualifies at the same joint schoolhouse as the Navy pipeline — NAVSCOLEOD at Eglin AFB — after its own preparatory and assessment steps. This entry is a cross-link only, by design: the full EOD treatment lives in the Navy EOD entry and the Library's 3E8 entry.",
      who: "See the Navy EOD entry (Navy tile) for the shared schoolhouse pipeline and the Library's 3E8 entry for the career field.",
      quals: [
        "⚠ NO NUMERALS PRINTED: Air Force EOD screens on the IFT worksheet's EOD column (the worksheet marks the underwater and surface-swim events Not Tested for EOD and sets EOD-specific calisthenics/run standards) — but the worksheet extraction available was not clean enough to print numbers responsibly, and a clean re-read from the current official worksheet PDF could not be completed at build. No EOD-column numerals are printed from a garbled extraction (F-9).",
      ],
      pipeline: [
        {
          name: "Cross-link — the shared schoolhouse structure",
          detail: "The Navy EOD entry's pipeline (Diver Training → EOD School 44 weeks at NAVSCOLEOD, Eglin → parachute/tactical follow-ons) is the shared schoolhouse structure, with Air Force-specific preparatory durations not printed from the garbled worksheet extraction (F-9).",
        },
      ],
      flags: [
        "F-9 — ⚠ EOD COLUMN NOT PRINTED: re-read from the current official worksheet PDF remains the standing follow-up; until then this cross-link ships without numerals rather than with garbled ones.",
      ],
      source: "Official IFT worksheet (EOD column — numerals withheld, F-9); navy.com EOD page (shared schoolhouse)",
      crossLink: { kind: "entry", label: "Open the Navy EOD entry — the shared NAVSCOLEOD schoolhouse", branchKey: "navy", entryName: "Navy EOD — Explosive Ordnance Disposal" },
    },
  ],
};

/* ------------------------------- SPACE FORCE ------------------------------- */

const SPACEFORCE: SpecBranch = {
  key: "spaceforce",
  label: "Space Force",
  tileSub: "No Space Force special operations force exists — one honest card",
  intro:
    "One honest negative card. There is no tile list of Space Force special operations units, because there is no Space Force special operations force — and this section does not dress that up or imply a pipeline is coming.",
  entries: [
    {
      id: "sf-negative",
      name: "Space Force — no special operations force exists",
      summary:
        "No Space Force special operations force exists. USSOCOM's service components are USASOC, NSWC, AFSOC, and MARSOC (plus JSOC) — there is no Space Force SOF component; spaceforce.com publishes no SOF/special-warfare career field and no selection pipeline. Pipeline: none exists — printed as such.",
      what: "The United States Space Force has no organic special operations force. USSOCOM's service components are U.S. Army Special Operations Command (USASOC), Naval Special Warfare Command (NSWC), Air Force Special Operations Command (AFSOC), and Marine Corps Forces Special Operations Command (MARSOC) — plus Joint Special Operations Command (JSOC). There is no Space Force special operations component, and spaceforce.com's published career fields contain no special operations / special warfare career field and no selection pipeline.",
      who: "Guardians are not recruited into a USSF SOF pipeline. Where Guardians support joint and special-operations missions, they do so in their space, cyber, intelligence, and acquisitions specialties through normal assignment processes. A Guardian interested in SOF support talks to their assignments team about joint billets.",
      quals: [
        "⚠ NONE EXISTS: there is no published USSF selection, qualification table, or assessment course to meet — none is printed here because none exists.",
      ],
      pipeline: [
        {
          name: "Training pipeline: NONE EXISTS",
          detail: "There is no USSF selection or qualification pipeline, and this entry prints none. Nothing here implies one is coming.",
        },
      ],
      flags: [
        "⚠ STRUCTURAL FACT, AS OF NOV 2026 RESEARCH: this is a structural fact as of the Nov 2026 research behind this section, re-verified at the January refresh like everything else in it.",
      ],
      source: "USSOCOM component structure; spaceforce.com career fields",
    },
  ],
};

/* ------------------------------- COAST GUARD ------------------------------- */

const CG_NOT_PUBLISHED_QUALS: string[] = [
  "⚠ QUALIFICATION TABLE NOT PUBLISHED: the Coast Guard publishes no PST-style qualification table for this unit on gocoastguard.com. Members volunteer and are assigned in-service; the unit screens its own people. No standards are invented here.",
];

const COASTGUARD: SpecBranch = {
  key: "coastguard",
  label: "Coast Guard",
  tileSub: "Deployable Specialized Forces: MSRT · TACLET · PSU · Divers · AST (the full entry)",
  intro:
    "PREAMBLE — the Coast Guard is not a SOCOM component; its elite forces are Deployable Specialized Forces (DSF). In 2026 the Coast Guard announced a Special Missions Command bringing DSF under one operational commander (initial operating capability ~October 2026, per MyCG). The honest general rule: there is NO DSF enlistment contract and NO published PST-style qualification table for MSRT/TACLET/PSU on gocoastguard.com — members volunteer and are assigned in-service, and units screen their own people (R-4). Four entries below carry that rule as their whole qualification story; the fifth, AST, is the exception with a real published schoolhouse pipeline.",
  entries: [
    {
      id: "cg-msrt",
      name: "MSRT — Maritime Security Response Teams",
      summary:
        "MSRT — Maritime Security Response Teams (MSRT East and West): the Coast Guard's premier counterterrorism force, per MyCG/USCG wording. Route = in-service assignment; qualification table ⚠ NOT PUBLISHED. Pipeline: “In-unit qualification after assignment; no published pipeline.”",
      what: "The Coast Guard's “first responders to maritime terrorism and other high-risk threats,” equipped to conduct “the nation's most critical maritime security and defense operations at home or abroad,” with partner law enforcement or joint services — the service's premier counterterrorism force (MSRT East and West). (MyCG/USCG wording.)",
      who: "In-service assignment; the Coast Guard publishes no public qualification table for MSRT.",
      quals: CG_NOT_PUBLISHED_QUALS,
      pipeline: NOT_PUBLISHED_PIPELINE,
      flags: ["R-4 — ⚠ NOT PUBLISHED (qualification tables): in-service assignment is the published route; no reconstructed course lists, no invented standards."],
      source: "MyCG / USCG — DSF descriptions",
    },
    {
      id: "cg-taclet",
      name: "TACLET — Tactical Law Enforcement Teams (and LEDETs)",
      summary:
        "TACLET — Tactical Law Enforcement Teams, and their LEDETs aboard U.S. Navy and allied ships. Route = in-service assignment, drawn principally from law-enforcement ratings; qualification table ⚠ NOT PUBLISHED. Pipeline: “In-unit qualification after assignment; no published pipeline.”",
      what: "Teams providing law-enforcement expertise “across the full spectrum of maritime response situations with specific focus on counter-trafficking and criminal networks” (MyCG); their Law Enforcement Detachments (LEDETs) deploy aboard U.S. Navy and allied ships to conduct maritime interdiction.",
      who: "In-service, drawn principally from law-enforcement ratings; no public qualification table published.",
      quals: CG_NOT_PUBLISHED_QUALS,
      pipeline: NOT_PUBLISHED_PIPELINE,
      flags: ["R-4 — ⚠ NOT PUBLISHED (qualification tables): in-service assignment is the published route; no reconstructed course lists, no invented standards."],
      source: "MyCG / USCG — DSF descriptions",
    },
    {
      id: "cg-psu",
      name: "PSU — Port Security Units",
      summary:
        "PSU — Port Security Units: reserve-heavy, expeditionary units — one of the few entries in this section a drilling reservist can be assigned to directly. Qualification table ⚠ NOT PUBLISHED. Pipeline: “In-unit qualification after assignment; no published pipeline.”",
      what: "Reserve-heavy, expeditionary units providing “shoreside and waterborne security including point defense of strategic shipping, designated critical infrastructure, and high value assets in joint and combined expeditionary warfare environments” (MyCG).",
      who: "Assignment in-service — PSUs are largely Reserve units, one of the few entries in this section a drilling reservist can be assigned to directly. No public qualification table published.",
      quals: CG_NOT_PUBLISHED_QUALS,
      pipeline: NOT_PUBLISHED_PIPELINE,
      flags: ["R-4 — ⚠ NOT PUBLISHED (qualification tables): in-service assignment is the published route; no reconstructed course lists, no invented standards."],
      source: "MyCG / USCG — DSF descriptions",
    },
    {
      id: "cg-divers",
      name: "Coast Guard Divers — Regional Dive Lockers",
      summary:
        "Coast Guard Divers — Regional Dive Lockers: diving is an additional qualification earned by serving members through the Coast Guard's dive program, not an enlistment rating. No public qualification table on gocoastguard.com ⚠ NOT PUBLISHED at recruiting-page level. Pipeline: dive qualification earned in service after assignment; no published pipeline at recruiting-page level.",
      what: "The service's dive force, organized in Regional Dive Lockers, providing “dedicated undersea capabilities” — port and waterway security, aids-to-navigation work, and ship maintenance/repair “often in extreme environments like the remote polar regions” (MyCG). Diving is an additional qualification earned by serving members through the Coast Guard's dive program rather than an enlistment rating.",
      who: "Serving members earn the dive qualification in service through the Coast Guard's dive program. No public qualification table on gocoastguard.com.",
      quals: CG_NOT_PUBLISHED_QUALS,
      pipeline: [
        {
          name: "Training pipeline",
          detail: "Dive qualification earned in service through the Coast Guard's dive program after assignment; no published pipeline at recruiting-page level.",
        },
      ],
      flags: ["R-4 — ⚠ NOT PUBLISHED at recruiting-page level: no reconstructed course lists, no invented standards."],
      source: "MyCG / USCG — DSF descriptions",
    },
    {
      id: "cg-ast",
      name: "AST — Aviation Survival Technicians (Rescue Swimmers)",
      summary:
        "AST — Coast Guard Rescue Swimmers: two doors printed SEPARATELY and flagged, never blended (F-10) — the in-service A-School PTSE per ALCGENL 120/18 (50 sit-ups; chin-ups; underwater laps) vs. the direct-entry ANNEX X screen (40 sit-ups; side plank). AST “A” School is 22 weeks as gocoastguard.com decomposes it (10 + 7 + 5), with the FORCECOM “four months” and Petaluma-vs-Elizabeth City variances flagged (F-11). Attrition: the Coast Guard's own recruiting material cites ~73% for this pipeline — the ONLY attrition figure in this section, attributed.",
      what: "ASTs are the Coast Guard's helicopter rescue swimmers — the service's most famous selection pipeline — who deploy from helicopters to rescue people in distress at sea and on land, and who also maintain aviation life-support equipment (FORCECOM/ATTC official description).",
      who: "Two published routes, printed separately below and never blended: (a) in-service — members apply for AST “A” School, with the AST A School Preparatory Course at ATTC Elizabeth City first, per ALCGENL 120/18; and (b) direct entry — the civilian-to-AST program the Coast Guard markets as ANNEX X, screened at the start of basic training by an active-duty AST (USCG official recruiting material).",
      quals: [
        "Both doors: pass an aircrew-candidate physical; qualify for a Secret security clearance; “superior physical shape with no chronic orthopedic problems” (FORCECOM ATTC page, its summary wording)",
        "DOOR (a) — in-service A-School route, the Physical Training Screen Exam (PTSE) per ALCGENL 120/18, the same for all members regardless of age or gender: 450-meter swim in under 12 minutes; four underwater laps; 40 push-ups in 2 minutes; 50 sit-ups in 2 minutes; 3 pull-ups AND 3 chin-ups; 1.5-mile run in under 12 minutes",
        "DOOR (b) — direct-entry ANNEX X screen, per USCG recruiting material: 40 push-ups; 40 sit-ups; 30-second side plank; 3 pull-ups; 1.5-mile run in 12 minutes; 450 m / 500 yd swim in 12 minutes",
      ],
      pipeline: [
        {
          name: "Entry",
          detail: "Recruit training (Cape May, NJ) for the direct-entry ANNEX X route — screened at the start of basic training — or in-service application; in-service candidates complete the AST A School Preparatory Course (Course Code 100183) at ATTC Elizabeth City before A School (per ALCGENL 120/18). Then PTSE screening (standards in the qualifications above).",
        },
        {
          name: "AST “A” School — 22 weeks, as gocoastguard.com decomposes it",
          detail: "A 10-week Rescue Swimmer course (helicopter rescue procedures, at the page's summary level) + a 7-week EMT course (leading to National Registry EMT certification) + a 5-week Aviation Life Support Equipment technician course (inspection and maintenance fundamentals for aviation life-support equipment). Graduates earn the AST rating (AST3). Location variance flagged below (F-11).",
        },
        {
          name: "After A School — air station assignment",
          detail: "Assignment to a Coast Guard air station and qualification on the assigned airframe — full rescue-swimmer qualification continues in the fleet.",
        },
        {
          name: "Advanced Helicopter Rescue School (AHRS) — Astoria, OR",
          detail: "MyCG states rescue swimmers must complete AHRS within their first three years after A School and re-attend in regular increments.",
        },
      ],
      flags: [
        "F-10 — ⚠ TWO DOORS, NEVER BLENDED: the PTSE per ALCGENL 120/18 (50 sit-ups; chin-ups; underwater laps) and the ANNEX X direct-entry screen (40 sit-ups; side plank; no chin-ups listed) differ — the sit-up figure (50 vs. 40) and the event lists are both printed above, separately, because they govern different doors (A-school applicants vs. direct-entry recruits). Both are official.",
        "F-11 — ⚠ COURSE LENGTH VARIANCE: FORCECOM's ATTC page describes the initial AST course as four months covering ALSE fundamentals and Helicopter Rescue Swimmer procedures, against gocoastguard.com's 22-week three-block decomposition. The 22-week structure is shown; the variance is flagged, not resolved.",
        "F-11 — ⚠ LOCATION VARIANCE: the schoolhouse location is published as Elizabeth City, NC (ALCGENL 120/18; FORCECOM) while the Coast Guard's current recruiting video places the A-School pipeline at Training Center Petaluma, CA (where the EMT school sits). Both named, with the variance noted.",
        "ATTRITION — ATTRIBUTED, AND THE ONLY ONE IN THIS SECTION: the Coast Guard's own recruiting material (GoCoastGuard recruiting video) publicly cites a ~73% attrition rate for the AST pipeline. It is printed here, attributed to that source, as the single attrition figure in this section that traces to an official recruiting source.",
      ],
      source: "gocoastguard.com — AST page; ALCGENL 120/18; FORCECOM ATTC; MyCG; USCG recruiting material (ANNEX X; attrition)",
    },
  ],
};

export const SPEC_BRANCHES: SpecBranch[] = [...SPEC_BRANCHES_A, NAVY, AIRFORCE, SPACEFORCE, COASTGUARD];
