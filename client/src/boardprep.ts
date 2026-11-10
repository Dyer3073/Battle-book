// Board Prep — transcribed from the Closure Sweep CAREER pack
// (~/workspace/military-app/closure/closure-career.md, Part 1,
// researched Nov 9, 2026, official sources only). The pack governs:
// NO board questions ship anywhere in this section — no official
// source publishes a list of actual board questions (Flag F-1), and
// forum/commercial question lists are forbidden. What ships is the
// mechanism, the file inventory, the letter routes, and the
// published preparation checklist. Board Prep deep-links conceptually
// to Evaluations & Board File and Records & DD214; it duplicates
// neither. Members only — the member's own record file is the subject.

import type { PackSection } from "./seven";

export const BOARD_SECTION: PackSection = {
  view: "boardprep",
  title: "Board Prep",
  headSub:
    "How promotion and selection boards work at the published level, what the board actually sees, and how to prepare. There is no list of board questions here — no official source publishes one, and this section says so plainly rather than filling the gap from forums.",
  intro:
    "A board votes on the file, not on the person it has never met — except the local boards you stand in front of, which are covered at the end. This section carries the mechanism, the file inventory per service, the letter routes, and the published preparation checklists. For what an evaluation contains and how it is written, use Evaluations & Board File; for correcting the record itself, use Records & DD214 Center.",
  standing:
    "No official list of actual board questions exists in the sources checked (pack Flag F-1). Local-board study areas come from an official installation IG bulletin (USARJ, 15 Jul 2025). Forum and commercial “actual questions” lists are excluded by design — this section ships method and study areas only.",
  tiles: [
    {
      key: "mechanism",
      label: "How Boards Work",
      tileSub: "Entries BP-1–BP-2 · the centralized model, who runs them, where schedules live",
      intro: "The centralized board system at the published level — how files are scored, and who convenes the boards.",
      entries: [
        {
          id: "BP-1",
          name: "How a centralized board works (Army, DA Secretariat model)",
          summary: "The Army runs roughly 80 centralized selection boards a year (officers, warrant officers, NCOs), administered by the DA Secretariat at Fort Knox. Each voting member scores each file independently on the Army Selection Board System (ASBS) scale of 1–6 with +/− modifiers (highest score 6+; a 10-member board's maximum aggregate is 60 pluses). Members do not discuss files with each other (general-officer boards excepted). Files are presented in random order, and each member spends roughly 2–3 minutes per file. Members are governed by the board's Memorandum of Instruction (MOI), Title 10, and their own experience. NCO boards split into career management field (CMF) panels (e.g., the MSG board runs 11 Active Component panels). Below-zone selection is capped at 10% of selection capability.",
          who: "Anyone in front of an Army centralized board — the 2–3-minutes-per-file reality is why the file, not intentions, decides.",
          body: [],
          flags: ["Attribution (pack Flag F-15): the ASBS scale, the 2–3 min/file figure, and the BZ 10% cap rest on a DA Secretariat branch-update PDF (eARMOR) and Army University Press material rather than the DA Secretariat site text itself — printed as attributed."],
          links: [],
          source: "DA Secretariat update via eARMOR (benning.army.mil); Military Review (armyupress.army.mil)",
        },
        {
          id: "BP-2",
          name: "Who runs the boards and where the schedules live",
          summary: "Army: DA Secretariat publishes board schedules, results, and governing regulations, and hosts a mock board video showing how a board session runs. Navy: boards are convened under a precept and convening order approved by the Chief of Naval Personnel or SECNAV; panel members are senior leaders. SECNAV signs one precept per fiscal year covering all O-6-and-below statutory boards. Eligibility is set by the Zone Message (officers) or by BUPERSINST 1430.16H, chapters 2 and 11 (enlisted). Marine Corps: promotion boards are run through HQMC (MMPR), with records held by MMSB; board preparation guidance is published in board convening MARADMINs and HQMC articles.",
          who: "Every board-eligible member — find your service's schedule and governing message first.",
          body: [],
          flags: ["Gap (pack Flag F-4): Air Force selection-board specifics were not pulled in this research pass. This section ships Army/Navy/USMC at full depth and does not fill the Air Force gap from the other services' material."],
          links: [],
          source: "MyNavy HR “Navy Boards 101” fact sheet, PERS-8 (March 2026); DA Secretariat; HQMC (MMPR)",
        },
      ],
    },
    {
      key: "file",
      label: "What the Board Sees",
      tileSub: "Entries BP-3–BP-5 · My Board File, OMPF + MBS, the Navy record",
      intro: "The file inventory per service — exactly what is in front of the voting members.",
      entries: [
        {
          id: "BP-3",
          name: "What the board sees: Army (My Board File)",
          summary: "HRC's My Board File (MBF) is the electronic file the board votes on. A MILPER message published 90–120 days before the board convenes announces zones, evaluation suspense dates, and the MBF open/close window; the file is typically viewable about 60 days before convene. Contents as published by HRC: DA Photo (from DAPMIS; hard copies are inadmissible; a photo is valid 5 years, retake on promotion or significant appearance change) — HRC's own framing: “Your DA photo is your handshake.” Also: OERs / NCOERs / AERs; education and training records; commendatory and disciplinary documents; the record brief — ORB, or DA Form 2-1 for TPU/National Guard soldiers (AMEDD may use DA Form 4213). A biographical summary is NOT an authorized board document. Inside MBF the soldier picks one of three certification radio options about the file's accuracy.",
          who: "Army members inside a board window — open MBF when it opens, not the week the board convenes.",
          body: [],
          flags: [],
          links: [],
          source: "HRC board recorder briefing material; Junior Officer board-process guide (army.mil, updated 2025-08-19); National Guard Bureau",
        },
        {
          id: "BP-4",
          name: "What the board sees: Marine Corps (OMPF + MBS)",
          summary: "Per HQMC's “Preparing for Promotion” article, citing the Enlisted Promotions Manual (MCO 1400.32 series): “Your record is your personal representation at all selection boards for promotion.” The board sees the OMPF digitally, in three folders: Service Folder — contract information, discharge documents, administrative/service documents used to compute service time. Commendatory/Derogatory Folder — civilian and military education, personal awards, courts-martial/NJP, and other material reflecting significant achievement or adversity. Performance Folder — fitness reports and standard addendum pages (sergeants and above). The Master Brief Sheet (MBS) is the snapshot of administrative data, duties, and grades built from the fitness reports. Marines may correspond with the President of the selection board and may order their own OMPF/MBS from MMSB to audit them.",
          who: "Marines approaching a selection board — audit the OMPF and MBS before the board does.",
          body: [],
          flags: [],
          links: [{ label: "HQMC — Preparing for Promotion", url: "https://www.hqmc.marines.mil/News/Article/Article/551445/" }],
          source: "HQMC “Preparing for Promotion” (hqmc.marines.mil); MCO 1400.32 series",
        },
        {
          id: "BP-5",
          name: "What the board sees: Navy",
          summary: "Per “Navy Boards 101” (PERS-8): the board works from the member's Official Military Personnel File (OMPF) and performance record. The published preparation instruction is to review your OMPF about 6 months before the board and make sure qualifications and education are documented in the record.",
          who: "Sailors in a board zone — the 6-months-out OMPF review is the published preparation step.",
          body: [],
          flags: [],
          links: [],
          source: "MyNavy HR “Navy Boards 101” fact sheet, PERS-8 (March 2026)",
        },
      ],
    },
    {
      key: "prepare",
      label: "Prepare the File",
      tileSub: "Entries BP-6–BP-8 · letters to the board, the audit checklist, the photo",
      intro: "The published preparation routes: correspond with the board correctly, audit the record against the services' own checklists, and keep the photo current.",
      entries: [
        {
          id: "BP-6",
          name: "Letters to the board",
          summary: "Army: letters to the board president are accepted until the convene date (routed per the MILPER message). Navy: the Letter to the Board (LTB) is submitted via ESSBD through the MyNavy Portal / BOL (per NAVADMIN 220/19). Per MILPERSMAN 1420-010, an officer's LTB must arrive no later than 10 calendar days before the board convenes. Published caution: do not send LTBs to detailers. Questions route to MNCC, 1-833-330-MNCC (6622). Marine Corps: Marines can send correspondence to the President of the specific selection board (address block published in the HQMC preparation article, MMPR-2, Harry Lee Hall, Quantico).",
          who: "Members with something the file does not say — the letter is the one place you speak to the board directly; the deadline and the route are service-specific.",
          body: [],
          flags: [],
          links: [],
          source: "HRC; NAVADMIN 220/19; MILPERSMAN 1420-010; HQMC “Preparing for Promotion”",
        },
        {
          id: "BP-7",
          name: "Preparation: audit your record (the published checklist)",
          summary: "Army (HRC) — common ORB errors that hurt files: duty titles like “incoming personnel” or “known loss” are unacceptable; awards on the brief must match the photo and the AMHRR. Fields masked from the board: dwell time, dependents, marital status, religion. Marine Corps (HQMC) published checklist: verify administrative information (DOR, AFADBD, PEBD, PMOS/IMOS) on the Basic Individual Record in MCTFS and the MBS header — correctable by unit diary locally; confirm PME requirements are complete; audit OMPF and MBS; confirm the photo is filed. Board MARADMINs add: updated information must post to MCTFS at least 5 working days before the convene date to appear on the MBS in the boardroom, and “each [Marine] is personally responsible for ensuring the accuracy and completeness of his or her OMPF and MBS.” Navy: OMPF review ~6 months out (BP-5).",
          who: "Every board-eligible member — the audit is the preparation you fully control.",
          body: [],
          flags: [],
          links: [],
          source: "HRC; HQMC “Preparing for Promotion”; USMC board convening MARADMINs",
        },
        {
          id: "BP-8",
          name: "The photo",
          summary: "Army: DA Photo from DAPMIS only; valid 5 years; retake on promotion/change (BP-3). Marine Corps: board MARADMINs require an official photo taken within 12 months of the board's convening date, electronically filed in the OMPF; deployed Marines may be photographed in utilities minus the blouse per the cited MARADMIN. The photo stays in the OMPF until replaced, even past 12 months.",
          who: "Army and Marine Corps board candidates — check the photo's date the way you check the record's.",
          body: [],
          flags: ["Vintage caution (pack Flag F-3): the USMC 12-month photo requirement was captured from FY09–FY12 board MARADMINs — verify against the current convening MARADMIN for your board."],
          links: [],
          source: "HRC / DAPMIS; USMC board convening MARADMINs (marines.mil)",
        },
      ],
    },
    {
      key: "local",
      label: "Local Boards & Study",
      tileSub: "Entries BP-9–BP-12 · the boards you stand in front of, published study resources, what members weigh",
      intro: "Semi-centralized boards are in-person and different in kind. This tile also carries the published study resources and the honest note about what does not exist.",
      entries: [
        {
          id: "BP-9",
          name: "Local boards: the ones you actually stand in front of (Army semi-centralized, AR 600-8-19)",
          summary: "For SGT/SSG promotion, the member appears in person. As published, the board considers: personal appearance, bearing, self-confidence, oral expression, conversational skills, and attitude. The format is question-and-answer testing leadership, awareness of military programs, and situational judgment (published study areas include SHARP/EO, extremist activity, retaliation, substance misuse, and physical/mental fitness topics). Composition rules as published: an odd number of voting members, the board president is a sergeant major (unless officers/warrant officers sit), and Regular Army boards are held monthly.",
          who: "Soldiers facing a semi-centralized promotion board — appearance and bearing are published criteria here, unlike the centralized file boards.",
          body: [],
          flags: ["Pack Flags F-1/F-2: no official list of actual board questions exists in these sources, and a commercial claim about board-appearance points was NOT verified on an official page — neither prints here. Study areas only, as published."],
          links: [],
          source: "AR 600-8-19 board chapter framing; USARJ Inspector General bulletin, 15 Jul 2025 (usarj.army.mil)",
        },
        {
          id: "BP-10",
          name: "Published study resources (what the services themselves put out)",
          summary: "DA Secretariat: mock board video (how a real board session runs). MyNavy HR: “Navy Boards 101” fact sheet (PERS-8, March 2026) and Boards 101 crash-course videos. HQMC: “Preparing for Promotion” article with the record-audit checklist (BP-4, BP-7). Installations/commands: local board study guides and IG-published study areas for semi-centralized boards (BP-9). Not used, by design: scraped lists of “actual board questions” from forums or commercial sites. No official source in this research publishes a question list.",
          who: "Anyone preparing — these are the resources the services themselves publish; anything else is someone's recollection sold as a list.",
          body: [],
          flags: [],
          links: [],
          source: "DA Secretariat; MyNavy HR (PERS-8); HQMC; installation IG bulletins",
        },
        {
          id: "BP-11",
          name: "What members say they weigh (Army)",
          summary: "Per the DA Secretariat update and Army University Press material, in a 2–3 minute review members focus on: the senior rater's narrative, the box check, the population size behind that box check, the duty description, and the rater narrative — in that practical order. This is why the Evaluations content (senior-rater narrative quality) is the highest-leverage preparation a member controls.",
          who: "Army members and their raters — the senior rater's narrative is read first and weighs most.",
          body: [],
          flags: [],
          links: [],
          source: "DA Secretariat update via eARMOR; Army University Press (Military Review)",
        },
        {
          id: "BP-12",
          name: "Where the depth lives (links, not duplicates)",
          summary: "Board Prep carries only the mechanism (BP-1–BP-2), the file inventory (BP-3–BP-5), the letter routes (BP-6), and the preparation checklist (BP-7–BP-11). For file-content depth — what an OER/NCOER/FITREP contains and how it is written — open Evaluations & Board File. For correcting the record itself (the boards for correction of military records, DD Form 149/293 routes), open Records & DD214 Center.",
          who: "Every reader of this section — prepare the file here, write it there, correct it there.",
          body: [],
          flags: [],
          links: [],
          source: "Battle Book cross-reference (pack BP-12)",
        },
      ],
    },
  ],
};
