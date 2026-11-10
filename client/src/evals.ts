// Evaluations & Board File — transcribed from the researched pack
// (~/workspace/military-app/evals/evals.md, researched Nov 9, 2026).
// The pack is the content source of truth: 18 entries, its
// corrections, and its DO-NOT-PRINT list is ABSOLUTE — nothing on it
// ships here in any paraphrase: no MCO 1610.7B Ch. 5 MRO-statement
// day-counts/addendum rules; no precept Supplemental Guidance
// "whole-person" element list; no PERB FAQ numbers (DD-149 version,
// ~180-day timeline, ≥120-day advice); no AF officer SCOD table; no
// AF Table 4.1 EFDP panel-scale values; no 6.0–10.0 enlisted board
// score scale / "splits" / ×15 composite; no CG EER month-by-paygrade
// table; no CG OER Comparison Scale spot wording from the current
// form; no CG SWE final-multiple point weights (components only); no
// SpFI 36-2401 content beyond existence + ERAB routing; no SSgt
// 31 Jan / CMSgt 31 May SCODs. Corrections that ship: OER support
// form DA Form 67-10-1A; NO "EREC" exists; Navy forms NAVPERS 1610/2,
// 1616/27, 1616/26 (NAVPERS 15665 is the Uniform Regulations); Navy
// forced-distribution caps; AF EPB = myEval ALQ with AF Form 716
// (OPB = 715), DAF 910/911/912 are EPR predecessors; EFDP verbatim
// allocations; CG-5310 mapping per the Aug 1, 2025 forms list; CG
// publishes NO forced-distribution cap; EER marks appeal = 15
// calendar days; the advancement recommendation itself is NOT
// appealable. No rating-inflation strategy anywhere.

import type { PackSection } from "./seven";

export const EVALS_SECTION: PackSection = {
  view: "evals",
  title: "Evaluations & Board File",
  headSub:
    "What your evaluation system is, how it actually distributes its top marks, what you may say back, what a selection or promotion board sees, and how to review and correct your own record before the board does. Systems, rights, and records only — no rating-inflation strategy, no bullet-gaming, no board-selection statistics, and no “what boards value” claims from anywhere but the services' own published documents.",
  intro:
    "Every branch's system shares one skeleton: a rating chain writes a periodic report on a form the service owns; the report is filed in your official record; and boards later decide from the filed record — not from your memory of the tour. What matters is what is in the file on the day the board convenes; every service gives you defined, time-limited ways to answer or appeal a report; and every service makes you personally responsible for the completeness of your record before a board.",
  standing:
    "Where a service publishes its board precepts or guidance, “what boards value” quotes that document at summary level, attributed. Where a service does not publish precepts (Army, Air Force), this section prints that plainly and describes only the published structure. USMC board debriefs are labeled anonymous opinion, never precept direction.",
  tiles: [
    {
      key: "landscape",
      label: "Read This First",
      tileSub: "Entries 1–4 · the record document, the board file, three fights, the publication map",
      intro:
        "The four frames: your evaluation outlives the assignment, “the board file” is a defined set per branch, there are three different fights members confuse, and precepts publish in some services and not others.",
      entries: [
        {
          id: "eval-record",
          name: "Your evaluation is a record document, not a conversation — and it outlives the assignment",
          summary:
            "A rating chain writes a periodic report on a form the service owns; the report is filed in your official record; and selection, promotion, retention, and assignment boards later decide from the filed record — not from your memory of the tour. Miss an answer/appeal window and the report stands as written.",
          who: "Everyone. Read before your next evaluation closes and again the moment you become board-eligible.",
          body: [
            "The practical consequences are the same in all six branches: (1) what matters is what is in the file on the day the board convenes; (2) every service gives you defined, time-limited ways to answer or appeal a report; (3) every service makes you personally responsible for the completeness of your record before a board. The branch tiles give each system's own names, numbers, and deadlines.",
          ],
          flags: [],
          links: [],
          source: "The services' evaluation instructions and personnel-center pages",
        },
        {
          id: "eval-board-file",
          name: "The board file — what “the board sees” means, per branch",
          summary:
            "Boards do not browse your whole personnel universe. Each service defines a board file: Army — My Board File (MBF) in ASBS 2.0; Marine Corps — the OMPF summarized by the Master Brief Sheet (MBS); Navy — the OMPF plus the OSR and PSR; Air Force — the Officer Selection Record (OSR) and the filed record in ARMS/PRDA with the SURF; Coast Guard — the EI-PDR, Direct Access data, and properly submitted candidate communications.",
          who: "Anyone inside 12 months of a board. Your branch tile names your review tool and your deadlines.",
          body: [],
          bullets: [
            { title: "Army", text: "My Board File (MBF) in ASBS 2.0 — “comprised of files from the Performance folder of the AMHRR and a Candidate Data Card” (MILPER 25-124); for NCO boards MBF “mirrors the Army Selection Board System v2.0 (ASBS 2.0), the system used by board members” (MILPER 26-276). The Soldier can see exactly what voting members see." },
            { title: "Marine Corps", text: "The OMPF (seen by the board digitally, in Service / Commendatory-Derogatory / Performance folders) summarized by the Master Brief Sheet (MBS) — “a snapshot of administrative data, duties and grades given based on your fitness reports” (HQMC)." },
            { title: "Navy", text: "The OMPF, plus the OSR and PSR — “Other than your OMPF, and any correspondence you forward to the Board President, your OSR and PSR are the only sources of information available to selection boards” (NPC community guidance)." },
            { title: "Air Force", text: "The Officer Selection Record (OSR) incl. the Officer Selection Brief for officers; the filed record in ARMS/PRDA plus the SURF / Record Review RIP summary. An evaluation not yet filed in ARMS/PRDA is not before the board." },
            { title: "Coast Guard", text: "“Selection boards see and review only the officer portion of a candidate's record contained in the EI-PDR, data contained in DA [Direct Access], and communications from candidates properly submitted to the board” (ALCGRSV 019/22); the two primary sources are the Employee Summary Sheet (ESS) and the EI-PDR (PSC-RPM)." },
          ],
          flags: [],
          links: [],
          source: "MILPER 25-124 / 26-276 · HQMC · NPC · ALCGRSV 019/22",
        },
        {
          id: "eval-three-fights",
          name: "Three different fights — don't confuse them",
          summary:
            "Members routinely lose remedies by filing the wrong one. Every branch distinguishes: administrative correction (wrong data), substantive appeal (the content), and statement/reply (your words attached without changing the report). Deadlines in this area are jurisdictional in practice — several are statutory.",
          who: "Anyone holding a report they dispute. Read your branch's rights entry first.",
          body: [],
          steps: [
            "Administrative correction — wrong data (dates, names, rating chain, a missing report). Fast, narrow, handled by the personnel center. (Army: HRC channels; USMC: Appendix G; Navy: administrative change via PERS-32; AF: Table 10.2 corrections via MPF; CG: validation corrections via PSC.)",
            "Substantive appeal — the content: marks, comments, recommendations you say are biased, inaccurate, or unjust. Slower, evidentiary, decided by a dedicated board or authority (Army ASRB; USMC PERB; Navy Ch. 17 ladder ending at BCNR; AF ERAB; CG PRRB→BCMR).",
            "Statement / reply — your words attached to the report without changing it (Navy statement to the record; USMC MRO statement on adverse reports; AF referral rebuttal before the report becomes record; CG ROO reply appended to the OER).",
          ],
          flags: [],
          links: [],
          source: "The services' evaluation instructions, per branch",
        },
        {
          id: "eval-publication-map",
          name: "What boards value — the publication map (read before any branch's entry)",
          summary:
            "Published precepts/guidance you can read: Marine Corps promotion board precepts and Navy board precepts + convening orders; Coast Guard publishes the Commandant's Guidance to Boards and Panels. Not published: Army board-specific instructions (the Memorandum of Instruction goes to board members; its structure is published in AR 600-8-29) and Air Force board charges / Secretary's MOI text.",
          who: "Anyone tempted to plan a career around a “what boards want” listicle. The only authoritative versions are the ones above.",
          body: [
            "After-action board debriefs (USMC MMPB-24 publishes them) are labelled by HQMC itself as anonymous board-member opinion, not precept text — this section cites them only as debriefs, never as direction.",
          ],
          flags: [],
          links: [],
          source: "USMC / Navy / CG published board documents · AR 600-8-29 (Army MOI structure)",
        },
      ],
    },
    {
      key: "army",
      label: "Army",
      tileSub: "Entries 5–6 · forms and profiles, rights, My Board File, letters",
      intro:
        "Governing editions, verified current: AR 623-3 (14 February 2025) and DA Pam 623-3 (12 February 2025). Evaluations are prepared and submitted in the Evaluation Entry System (EES). Two corrections lead: the OER support form is DA Form 67-10-1A, and there is no “EREC” in the current appeal system.",
      entries: [
        {
          id: "army-forms",
          name: "Army forms, rating chain, and profile mechanics",
          summary:
            "NCOER — DA Form 2166-9-1 / -2 / -3 by level, support form 2166-9-1A. OER — DA Form 67-10-1 / -2 / -3 / -4, support form 67-10-1A (the 67-9 series is superseded). Distribution mechanics as published: NCOER senior rater profile constrained at 24% “MOST QUALIFIED”; OER senior rater misfire threshold at/above 50% Box 1.",
          who: "Every rated Soldier and every rating official.",
          body: [
            "Forms (APD-active): NCOER 2166-9-1 (SGT, direct level), 2166-9-2 (SSG–1SG/MSG, organizational level), 2166-9-3 (CSM/SGM, strategic level); OER 67-10-1 (company grade: O1–O3, WO1–CW2), 67-10-2 (field grade: O4–O5, CW3–CW5), 67-10-3 (O6 strategic), 67-10-4 (general officer); AER (academic) DA Form 1059 / 1059-1 / 1059-2, March 2019 editions, via EES. DA Form 2166-8 is the pre-2016 NCOER form — superseded.",
            "Rating chain (structure): the Rater (immediate supervisor) assesses day-to-day performance and counsels; the Senior Rater (the rater's supervisor) assesses potential and mentors; an Intermediate Rater exists on OERs only in designated technical/dual-supervision situations; a Supplementary Reviewer, when required, checks accuracy/clarity/chain compliance and may not add evaluative statements. Support forms (2166-9-1A / 67-10-1A) are the counseling backbone the redress program points to.",
            "Distribution mechanics — as published: the NCOER senior rater profile is constrained at 24% “MOST QUALIFIED” for SSG–CSM/SGM; if a Box 1 check would put the senior rater's profile for that grade at or above 24%, the report is a misfire and is redacted to Box 2 (Highly Qualified); EES blocks/warns in-system. SGT reports do not misfire. NCOER raters have no profile — they have a rater tendency (their rating history in that grade), which boards see the same way they see profiles.",
            "OER rater profile: raters manage “EXCELS” at less than 50% of their ratings per rank (WO1–CW4, 2LT–LTC); EES grays out the box when unsupported, and a forced EXCELS at ≥50% is downgraded to PROFICIENT with an HQDA label while still counting against the rater. OER senior rater profile: misfire threshold at/above 50% Box 1 for LTC and below (CW5 has no senior rater box check); for COL the top box is “Multi-Star Potential” with a 24% threshold. Profile labels for both rater and senior rater are shown to boards. Prohibited comment, verbatim rule: rating officials may not write that they “would have given” a higher box but their profile doesn't support it — such evaluations are returned for correction.",
            "Reporting periods (summary): report types include Annual, Extended Annual, Change of Rater, Change of Duty, Depart TDY, Relief for Cause, Complete the Record (Code 09), Promotion Report (Code 11, officers), Senior Rater/Rater Option, and HRC-Directed. Senior raters retain authority to submit regular reports up to 90 days past the thru date (AR 623-3 ¶3-9 as cited in MILPERs).",
          ],
          flags: ["Correction: the OER support form is 67-10-1A, not 67-9-1A or 67-9-1 — the DA Form 67-9 series is superseded."],
          links: [{ label: "Army Publishing Directorate — DA Forms list", url: "https://armypubs.army.mil/ProductMaps/PubForm/DAForm.aspx" }],
          source: "AR 623-3 (14 Feb 2025) · DA Pam 623-3 (12 Feb 2025) · HRC Evaluations Branch",
        },
        {
          id: "army-rights",
          name: "Army — member's rights, the board file, letters, and what boards are told",
          summary:
            "Your signature is acknowledgment, not agreement. The redress ladder: Commander's Inquiry (≤60 days after signature) → Evaluation Report Appeal (administrative to HRC Evaluation Appeals Branch; substantive to the ASRB; deadline 3 years after the THRU date) → ABCMR. There is NO “EREC” — that name does not exist in the current system.",
          who: "All Army entries — every board-eligible Soldier, from first MBF window onward.",
          body: [
            "“The rated Soldier's signature verifies that administrative data… are correct and confirms that the rated Soldier has seen the completed evaluation report” (AR 623-3 ¶2-10b(5), 2025 ed., as quoted). Appeals over data you authenticated are accepted “only under the most unusual and compelling circumstances” — check Part I data before you sign.",
            "The board file — My Board File (MBF), ASBS 2.0: review and certify at mbf.hrc.army.mil during the window in the board MILPER. On certification you choose one of four published options (not viewed / certify correct & complete / reviewed, will correct / reviewed, no action). “Career Managers will not review individual board files since this is each individual officer's responsibility” (MILPER 25-124 ¶7). Corrections: documents go through your S-1 via iPERMS web upload with “BOARD” in the batch comment; evaluations reach the AMHRR only through HRC Evaluations Branch processing — never upload evaluations to iPERMS yourself.",
            "Letters to the board: officers — AR 600-8-29 ¶2-6: an eligible officer may write the President of the Board on any matter concerning them; only one letter, with enclosures, will be viewed; letters become board records and are not filed in the AMHRR; third-party letters reach the board only as enclosures to the officer's own letter. Current MILPERs under 10 U.S.C. §614(b): correspondence must arrive NLT 10 days prior to the convene date. Enlisted/NCO boards — MILPER-governed; MILPER 26-276's published guidance: a letter is “only encouraged if the Soldier is missing a record they feel would have an impact”; “Do not write a letter to the board which summarizes your military career. Keep the letter short (limited to one-page), brief, and relevant”; third-party communications are not accepted.",
            "What boards value: the Army does not publish board precepts. What is public is the structure: the Secretary of the Army gives the board a Memorandum of Instruction (MOI) specifying (per AR 600-8-29 ¶2-6) the oath, reports, method of selection, factors to be considered including the Army's needs in each branch/functional area/skill, and maximum selections per competitive category — the MOI text itself is not published. For NCO evaluation boards, the public MILPER statement is that the board evaluates performance and potential based on Army doctrine and proponent guidance, voting records into an Order of Merit List (Most Qualified / Fully Qualified / Not Fully Qualified / Not Fully Qualified for Retention; MILPER 26-276 publishes that board's score bands: MQ 16–18, FQ 7–15, NFQ 4–6, NFQ-R 1–3 of 18, individual scores not released). Anything beyond this is not published by the Army and is not printed here.",
          ],
          bullets: [
            { title: "Commander's/Commandant's Inquiry", text: "Written request to the commander/commandant above the rating officials, no later than 60 days after the rated Soldier's signature date. The commander investigates errors/injustice but will not force rating officials to change evaluations and will not substitute their own evaluation. Not a prerequisite to appeal, but if sought, do it first." },
            { title: "Evaluation Report Appeal", text: "Administrative appeals (chain deviations, insufficient observation, entry errors) are decided by HRC Evaluation Appeals Branch (AHRC-PDV-EA), Fort Knox. Substantive appeals (bias, prejudice, inaccurate/unjust ratings) are adjudicated by the Army Special Review Board (ASRB). Standard: “substantial evidence to establish clearly and convincingly” that the presumption of regularity should not apply. Deadline: appeals must be received not later than 3 years after the report's THRU date." },
            { title: "ABCMR", text: "After the 3-year window, or as the final element of the redress program, under AR 15-185 — see Records & DD214 Center." },
          ],
          flags: [
            "Correction: the current authorities are NOT an “EREC.” Administrative appeals → HRC Evaluation Appeals Branch; substantive appeals → ASRB.",
            "The record brief changed: ORB (DA 4037) references were removed by DA Pam 600-8-104 (2 May 2025); the IPPS-A Soldier Talent Profile (STP) is the live profile, and in ASBS 2.0 the Candidate Data Card replaces the record brief as the board-facing summary (a summary, not a source document — validate MBF against IPPS-A and iPERMS). Adverse information in the AMHRR Performance and Restricted sections is presented to the board as it appears; officers may file a separate Response to Adverse Information (distinct from a letter to the board). Photo rules are board-specific in the MILPER — do not assume a universal rule.",
          ],
          links: [{ label: "DA Pam 600-8-104", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN42843-PAM_600-8-104-000-WEB-1.pdf" }],
          source: "AR 623-3 Ch. 4 · MILPER 25-124 / 26-276 · AR 600-8-29 ¶2-6",
        },
      ],
    },
    {
      key: "usmc",
      label: "Marine Corps",
      tileSub: "Entries 7–9 · fitness reports, MRO rights, the board file and precepts",
      intro:
        "Governing order, verified current: MCO 1610.7B (5 June 2023), as amended. Fitness reports run through A-PES, accessed via Marine Online. The Corps publishes its precepts — and its board debriefs are labeled opinion, printed here only as debriefs.",
      entries: [
        {
          id: "usmc-fitrep",
          name: "Marine Corps fitness reports — who, chain, and the comparative assessment",
          summary:
            "FITREPs cover Marines in the grades of sergeant through major general; Private–Corporal are NOT on FITREPs — they are evaluated under JEPES. There is no quota table in the Marine system: the discipline is structural — the Reviewing Officer's Comparative Assessment plus the RS/RO markings and summary printed at the bottom of the MBS.",
          who: "Sergeants through major generals (FITREP); junior enlisted under JEPES for promotion recommendation.",
          body: [
            "HQMC's own words on why it matters: “The completed fitness report is the most important information component in manpower management… the Commandant's primary tool available for the selection of personnel for promotion, retention, career designation, resident schooling, command, and duty assignments.” (MMPB Performance Evaluation page.)",
            "Rating chain: Reporting Senior (RS) writes Section I; Reviewing Officer (RO) writes Section K and the Comparative Assessment; a Third Officer Sighter (3OS) sights adverse reports. MCO 1610.7B Chapter 5 consolidates all adverse items and clarifies RS/RO/3OS routing. Submitters are the RS, RO, SMR, 3OS or their trusted assistants — the MRO (Marine Reported On) may not submit. Completed reports are due to MMPB-23 within 30 days of the period's end, 60 days for adverse reports.",
            "HQMC's published anti-inflation statement (CMC Gen. Krulak, quoted on the Performance page): “Inflationary markings only serve to dilute the actual value of each report… Reviewing officials will not concur with inflated reports.” Reporting occasions (summary): Annual (AC) and Annual Reserve (AR) are the recurring occasions; named occasions include CMC-Directed (DC) and End of Service (EN); observed reports under 90 days require an exception to policy. 2024–2026 changes: Active Reserve E5–E8 annual periods now end last day of October (MARADMIN 575/24); SgtMaj/MGySgt reports moved to the full five-page format effective 1 Jan 2025 (MARADMIN 595/24).",
          ],
          flags: ["Do not import the JEPES pillars or proficiency/conduct marks into the FITREP system — they belong to the junior-enlisted system only."],
          links: [
            { label: "MMPB Performance Evaluation page", url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Performance-Branch/Records-and-Performance/Performance-Evaluation/" },
            { label: "MARADMIN 308/23 (MCO 1610.7B)", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3428853/revision-of-mco-16107-performance-evaluation-system/" },
          ],
          source: "MCO 1610.7B (5 Jun 2023) · MMPB Performance Evaluation page",
        },
        {
          id: "usmc-rights",
          name: "Marine Corps — MRO rights: statements, administrative corrections, PERB",
          summary:
            "Three routes, kept separate by HQMC: the MRO statement on adverse reports; administrative correction under Appendix G (Section A data and factual data in Sections I and K — initiated and signed by the MRO); and substantive appeal to the Performance Evaluation Review Board (PERB), MMPB-21.",
          who: "Any Marine Reported On holding a report they dispute.",
          body: [
            "Administrative correction (Appendix G): submit a completed Appendix G (MCO 1610.7B) to smb_hqmc_fitrep_compliance@usmc.mil; the correction must be initiated by the MRO (“it is their report”), signed by the MRO, with RS/RO concurrence signature. Date gaps/overlaps of 30 days or less are not significant and need no correction; 31+ days may be actioned. Officer-board MARADMINs warn admin changes “may take up to 30 days” and “reasonable diligence… rests solely on the Marine.”",
            "Substantive appeal — PERB: attribute marks, Section I/K comments, comparative assessment markings, MRO status selection, and RS grade recommendations are substantive (“opinionated”) and are not administrative corrections — changes require submission to the Performance Evaluation Review Board (PERB), MMPB-21. BCNR is the cross-reference/secondary review after PERB (see Records & DD214 Center).",
          ],
          flags: [
            "MRO statement mechanics: adverse reports route through the 3OS, and the MRO's statement/“no statement” status is part of the filed report (Chapter 5 of MCO 1610.7B is the adverse chapter). The paragraph-level timing and addendum mechanics could not be verified from an extractable official text of Chapter 5 — this section prints NO day-count or addendum rule for the MRO statement.",
            "A PERB FAQ exists on manpower.marines.mil; its specific figures were recorded at FAQ-summary level only and are NOT printed here — verify the current FAQ PDF before relying on any number from it.",
          ],
          links: [{ label: "MARADMIN 622/25 (FY28 officer promotion boards)", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4365857/fy28-us-marine-corps-officer-promotion-selection-boards/" }],
          source: "MCO 1610.7B App. G · MMPB (PERB, MMPB-21)",
        },
        {
          id: "usmc-board-file",
          name: "Marine Corps — the board file (MBS + OMPF), letters, and precepts",
          summary:
            "What the board sees: the OMPF in three folders, summarized on the Master Brief Sheet (MBS). “Each officer is personally responsible for ensuring the accuracy and completeness of their Official Military Personnel File (OMPF) and Master Brief Sheet (MBS) before the date the board convenes” (MARADMIN 622/25). The USMC publishes its precepts.",
          who: "Every board-eligible Marine. Current section codes are MMPB-21 (PERB), MMPB-22 (Records), MMPB-23 (Performance Evaluation), MMPB-10 (Officer Promotions), MMPB-11 (Enlisted Promotions) — older pages' “MMSB” codes are superseded.",
          body: [
            "Review/correction route, as published: view OMPF/MBS via the OMPF-Record Management Application (O-RMA); header data (DOR, AFADBD, PEBD, PMOS) is corrected via MCTFS/unit diary; PME completions must appear on the MBS with certificates in the OMPF. Deadlines: non-FITREP OMPF documents to CMC (MMPB-22) received two weeks prior to convening; fitness reports go to CMC (MMPB-23) — “Reports mailed directly to the President of the Board will not be added to a Marine's OMPF.” MMPB-24 (Career Counseling) offers record audits for Sgt–SgtMaj/MGySgt incl. FITREP Sections I/K and RS/RO profile review.",
            "Correspondence to the board (published rules, FY28 officer MARADMIN 622/25 ¶8; same structure for SNCO boards): encouraged but not required; must be received by CMC (MMPB-10) NLT 2359 EST, 10 calendar days before the board convenes — “This is a statutory requirement and cannot be waived. Late correspondence will not be accepted under any circumstances” (10 U.S.C. §614(b), §14106). Addressed to “President, FY28 USMC/USMCR (grade and competitive category) promotion selection board”; signed (ink or CAC); unclassified; third-party documents reach the board only as listed enclosures under the eligible Marine's signed cover letter; submission via the Board Correspondence Portal (preferred) or officerpromotions@usmc.mil. OMPF material sent to the President does not enter the OMPF.",
            "What boards value — from published precepts: the USMC publishes its precepts. Manpower's published definition: the precept is “the Commandant's rules of engagement for the selection board… Other specific instructions discuss substance abuse, adverse material, professional military education requirements, special duty assignments, assignment of enlisted Marines, etc.,” signed by the Director, Personnel Management Division for the Commandant. Published board guidance adds: “The selection guidance (precepts) for many boards includes a reminder of the importance of PME, whether resident or non-resident” (MARADMIN 622/25 ¶7.d); and convening MARADMINs themselves set gates (e.g., FY26 SSgt board: EPME5000 completion required to be considered qualified).",
          ],
          flags: [
            "The Supplemental Guidance enclosure text did not extract in the research — no “whole-person” element list is quoted in this section, and none is printed attributed to a precept.",
            "MMPB-24's published post-board debriefs (which rank FITREPs/performance, MOS credibility, special duty assignments, education) are labelled by HQMC as anonymous board-member opinion — usable only labelled as debrief opinion, never as precept direction.",
          ],
          links: [
            { label: "MARADMIN 622/25 (FY28 officer promotion boards)", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4365857/fy28-us-marine-corps-officer-promotion-selection-boards/" },
            { label: "HQMC — Preparing for Promotion", url: "https://www.hqmc.marines.mil/News/Article/Article/551445/" },
          ],
          source: "MARADMIN 622/25 · USMC promotion board precepts (MMPB-11)",
        },
      ],
    },
    {
      key: "navy",
      label: "Navy",
      tileSub: "Entries 10–12 · forms and forced distribution, statements and appeals, the board file and precepts",
      intro:
        "Governing instruction, verified current: BUPERSINST 1610.10H (30 Jul 2025), CH-1 and CH-2. Reports are produced in NAVFIT98A v33. Corrections lead: NAVPERS 15665 is the Uniform Regulations — never an eval form or writing guide.",
      entries: [
        {
          id: "navy-forms",
          name: "Navy forms, rating chain, forced distribution, and the calendar",
          summary:
            "FITREP — NAVPERS 1610/2 (W2–O6); CHIEFEVAL — NAVPERS 1616/27 (E7–E9); EVAL — NAVPERS 1616/26 (E1–E6). Forced distribution as published: Early Promote max 20% of each summary group; EP+MP combined caps — E5–E6 60%, E7–E9 50%, O3 60%, O4 50%, O5–O6 40%. The Navy's writing guidance is EVALMAN Chapter 13 — there is no NAVPERS 15665 evaluation writing guide.",
          who: "Every Sailor — and every reporting senior building a summary group.",
          body: [
            "Rating chain: the Reporting Senior (RS) owns and signs the report — contents “are the responsibility of the reporting senior who signs it, and are not subject to review, change, comment, or endorsement by other persons within or outside the chain of command, except as provided in this manual” — the Navy has no separate Reviewer block. A Rater/Senior Rater layer exists only on EVALs for E6 and below. Traits are graded 1.0–5.0 against printed standards (3.0 = performance to full Navy standards); promotion recommendations run Significant Problems / Progressing / Promotable / Must Promote / Early Promote.",
            "Forced distribution — as published (1610.10H Encl. (2) Ch. 1): Early Promote max 20% of each summary group (rounded up), all paygrades except non-LDO O1–O2. EP + MP combined caps: E1–E4 no limit · E5–E6 60% · E7–E9 50% · O3 60% · O4 50% · O5–O6 40% · W3–W5 50% (LDO O1–O2 and W1–W2 no limit). Summary groups of 30 or fewer use published Table 1-2 maximums (a group of two can receive one EP and one MP; each unused EP quota raises the MP max by one); groups over 30 calculate (published example: 42 E6s → EP+MP max 26, EP max 9, MP max 17). Gates: no MP/EP with any trait at 2.0; no Promotable-or-higher with any 1.0. A forced-distribution-driven recommendation change “is explicitly not a decline in performance and not an adverse report” (Ch. 13).",
            "RSCA: the PSR shows your trait average against your Reporting Senior's Cumulative Average for that paygrade — the board's calibration tool across reporting seniors. For E5/E6 reports, the RS's post-summary-group RSCA is entered on the last line of Block 43 comments (Ch. 13). Enlisted advancement value of the recommendation: EP = 4.0, MP = 3.8, Promotable = 3.6, Progressing = 3.4, Significant Problems = 2.0.",
            "Periodic calendar (summary): officer FITREPs end the last day of the month; CHIEFEVAL/EVAL end the 15th. Reports mail to PERS-32 within 15 days of ending date (active).",
          ],
          flags: [
            "Corrections to common listings: FITREP is NAVPERS 1610/2 (1610/5 for O7–O8) — not 1616/26; CHIEFEVAL is 1616/27; EVAL is 1616/26 — not 1616/25. NAVPERS 15665I is the Uniform Regulations; the published writing guidance is EVALMAN Chapter 13 (Guidance for Comments) + Chapter 18 (counseling) and PERS-32's NAVFIT98A/CHIEFEVAL guides. Chapter 13 publishes the substantiation rules and a prohibited-comments list (prior failure of selection, unconcluded NJP/investigations, marital/family status, medical issues, recommended awards, etc.).",
            "NAVADMIN 132/26 (3 Jun 2026) eliminated regular periodic reports for E9, CWO5, and LDO O6; detachment and Special reports remain — those calendar rows no longer produce periodic reports for those populations. The live PERS-32 page also lists a CH-3 to BUPERSINST 1610.10H whose text was not retrieved in the research — check it before relying on signature/deadline fine print.",
          ],
          links: [
            { label: "BUPERSINST 1610.10H (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/Instructions/BUPERS/BUPERSINST%201610.10.pdf" },
            { label: "NPC Performance Evaluation (PERS-32)", url: "https://www.mynavyhr.navy.mil/Career-Management/Performance-Evaluation/" },
          ],
          source: "BUPERSINST 1610.10H CH-1/CH-2 · NAVADMIN 159/25 / 132/26",
        },
        {
          id: "navy-rights",
          name: "Navy — statement to the record, corrections, appeals",
          summary:
            "A statement to the record may be submitted about ANY report — at the time of the report or within 2 years after its ending date, no more than two pages, no enclosures. The appeals ladder (Ch. 17-10), in published order: discuss with the RS → ISIC review → BCNR → redress of wrong → Privacy Act amendment.",
          who: "Any Sailor holding a report they dispute — adverse matter must be referred to the member for a statement before the report is placed in the OMPF.",
          body: [
            "Adverse reports (Ch. 17-8; U.S. Navy Regulations Art. 1122): mark “I intend to submit a statement” (FITREP Block 46 / CHIEFEVAL Block 49 / EVAL Block 51) and provide it within 10 days of seeing the report; the signature acknowledges seeing the report and knowing the right, not agreement — and a statement may still follow within 2 years. EVALMAN's published adverse definition (not all-inclusive): any 1.0 trait; a Significant Problems recommendation; Climate/EO trait below 3.0 (E1–E6, W1–O6) or Character below 3.0 (E7–E9); more than two 2.0 traits; or comments indicating serious weakness/incapacity/lack of qualifications. A report is not adverse merely because it makes you less competitive.",
            "Corrections before appeal (Ch. 15): after filing, a report changes only by administrative change, supplementary material, or appeal. Administrative change (PERS-32): administrative blocks only. Letter-Supplement (evaluative blocks): only the original reporting senior may submit (ISIC if incapacitated), within 2 years of the end date; it does not replace the original and does not change the PSR.",
          ],
          steps: [
            "Discuss with the RS (who may submit an admin change or supplement); request mast (Navy Regs Art. 1151) also cited.",
            "ISIC review — written request within 10 days of seeing the report (later for good cause); ISIC completes informal review within 20 days; scope: whether the evaluation was “an unbiased, fair, accurate, and realistic assessment.”",
            "BCNR — named in Ch. 17 itself (Art. 1126; DD Form 149, 10 U.S.C. §1552); EVALMAN advises the petition should reach BCNR at least 4 months before a selection board, and BCNR normally will not act while another appeal pends (see Records & DD214 Center).",
            "Redress of wrong (Navy Regs Art. 1150 / UCMJ Art. 138): within 90 days of knowing of submission or 1 year after submission, whichever is earlier.",
            "Privacy Act amendment — factual matters only (grades/comments as opinion are not amendable), via the RS to BUPERS-00J.",
          ],
          flags: [],
          links: [{ label: "PERS-32 FAQs (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/Career-Management/Performance-Evaluation/FAQ/" }],
          source: "BUPERSINST 1610.10H Ch. 15, 17",
        },
        {
          id: "navy-board-file",
          name: "Navy — the board file, record review, letters to the board, precepts",
          summary:
            "“Other than your OMPF, and any correspondence you forward to the Board President, your OSR and PSR are the only sources of information available to selection boards.” Review yearly and at least six months before any board you're eligible for. NPC publishes each board's precept and convening order.",
          who: "Every board-eligible Sailor. PSR and OMPF come from different BUPERS databases and can disagree — check both.",
          body: [
            "The records: OMPF (the permanent file; PERS-32 owns its performance portion); OSR (one-page summary — education, awards, schools, AQDs/JPME — viewed by statutory and administrative selection boards); PSR (chronological FITREP/EVAL summary with trait averages, recommendations, and RSCA). The ODC feeds the OSR (correct the ODC via NSIPS/PERS codes; you cannot edit the OSR directly) and is not viewed by statutory boards. Enlisted: ESR (via BOL/NSIPS) and ETJ complete the self-check set. Access via BUPERS Online (BOL): “OMPF – My Record” and “ODC, OSR, PSR, ESR.” Community checklists add: FITREP continuity (no gaps > 90 days), PSR accuracy against the FITREPs, OSR awards/education accuracy. A document still missing at board time may ride as an LTB enclosure — but EVALMAN 17-9 warns board submissions are shredded after the board and do not become part of the official record: an LTB fixes the board's view, not your record.",
            "Letters to the Board — published NPC rules: preferred submission is ESSBD (via MyNavy Portal/BOL); attachments .pdf only, no classified material. Officer statutory boards: LTBs must be received by NPC NLT 2359 Central Time, 10 calendar days before the board convenes; enlisted board deadlines are published in each board's NAVADMIN (typically 3–4 weeks out). Purpose limit, verbatim from Boards 101: “Letters to the board are intended solely to clarify or explain aspects of your record, not to lobby for selection.” Letters are board-specific — nothing carries forward to the next board.",
            "What boards value — from published precepts/convening orders (summary, attributed): every officer recommended must be Fully Qualified — “capable of performing the duties of the next higher pay grade,” spanning competence and character (the four core attributes: integrity, accountability, initiative, toughness), ethical standards, fitness, and Core Values; among the fully qualified, boards recommend the Best Qualified, and “proven and sustained superior performance in command or other leadership positions in difficult and challenging assignments is a definitive measure of fitness for promotion,” with successful performance/leadership in combat given special consideration (FY-27 Captain Staff Corps Convening Order). Enlisted convening orders parallel this. Quota discipline is also published: boards recommend up to quota only if enough fully qualified candidates exist.",
          ],
          flags: ["Official photographs: display to officer promotion boards is prohibited (SECWAR guidance / NAVADMIN 247/20), but the requirement to maintain a photo continues, and photos must not be included in LTBs."],
          links: [{ label: "Navy Boards 101 Fact Sheet", url: "https://www.mynavyhr.navy.mil/Portals/55/Boards/Navy%20Boards%20101%20Fact%20Sheet.pdf" }],
          source: "NPC Boards 101 · FY-27 convening orders · BUPERSINST 1610.10H Ch. 17",
        },
      ],
    },
    {
      key: "af",
      label: "Air Force & Space Force",
      tileSub: "Entries 13–15 · the EPB/OPB system, EFDP and stratification, rebuttal and ERAB",
      intro:
        "Governing publication, verified current: AFI 36-2406 (22 August 2025, Incorporating Change 1, 27 May 2026), as further changed by AFGM2026-01. Guardians are now under their own publication, SpFI 36-2401 — named here for its existence and the ERAB routing only; no Guardian-specific rule is printed beyond that.",
      entries: [
        {
          id: "af-epb",
          name: "Air Force — the EPB/OPB system as it actually stands in 2026",
          summary:
            "EPR/OPR → EPB/OPB is complete as the product: all evaluations are completed in myEval as ALQ (Airman Leadership Qualities) evaluations. AF Form 716 is the Enlisted Performance Brief (EPB) — offline version; AF Form 715 is the Officer Performance Brief (OPB). DAF Forms 910/911/912 are the EPR predecessors — never EPB forms.",
          who: "Every Airman. AF Forms 715/716 are used by exception only, via wing-level request to AFPC/DPPSP.",
          body: [
            "Supporting products: DAF Form 709 (Promotion Recommendation Form/PRF, officers), DAF Form 77 (Letter of Evaluation), DAF Form 475 (Education/Training Report), DAF Form 78 (General Officer Promotion Recommendation; GO reports are Ch. 7).",
          ],
          flags: [
            "Correction to the common claim: DAF Form 910 (EPR, AB–TSgt), 911 (EPR, MSgt–SMSgt), 912 (EPR, CMSgt) and 707 (OPR) still appear in AFI 36-2406's adopted-forms list — they are the predecessor EPR/OPR forms, not the EPB/OPB forms, and must never be presented as EPB successors.",
            "Feedback (ACA) is in flux: the ACA worksheets AF Form 724 (officers), 931 (AB–TSgt), 932 (MSgt–CMSgt) remain in the forms list, while para 1.2.6 now names AF Form 717, Performance Objectives and Feedback Form, “used for all grades to document formal feedback” — and AFGM2026-01 rebuilds Table 2.2 around it. This section presents the ACA as the feedback process and does not declare one feedback form universally current. The phased EPB rollout dates by grade were not verified from an AFPC announcement in the research — no per-grade EPB effective dates print here.",
            "Space Force: Guardians are under SpFI 36-2401, Guardian Evaluation Systems (named as the appeal-route authority on DAF Form 948). Its current edition and Guardian-specific guidance were not verified in the research — nothing beyond the SpFI's existence and the shared product names is printed for Guardians in this tile.",
          ],
          links: [{ label: "AFI 36-2406 (e-Publishing)", url: "http://static.e-publishing.af.mil/production/1/af_a1/publication/afi36-2406/afi36-2406.pdf" }],
          source: "AFI 36-2406 (22 Aug 2025 + Change 1, 27 May 2026) + AFGM2026-01",
        },
        {
          id: "af-efdp",
          name: "Air Force — forced distribution (EFDP), stratification, SCODs",
          summary:
            "EFDP verbatim allocations: “Promote Now” — 5% of the total TIG/TIS promotion-eligible SrA, SSgt, and TSgt population; “Must Promote” — 10% of SSgt and TSgt eligibles, 15% of SrA eligibles. EFDP applies to SrA, SSgt, and TSgt only. SNCOs are a different mechanism — senior rater stratification, up to 25% of SNCOs in their SRID.",
          who: "Promotion-eligible SrA, SSgt, and TSgt (EFDP); MSgt–CMSgt run through stratification — do not apply EFDP to E-7–E-9.",
          body: [
            "Structure: evaluations must be rater-signed before the panel; a record meeting the EFDP cannot be awarded PN/MP or FD-signed before the panel; post-panel changes are limited to significant quality-force indicators not previously known; the panel report carries members, recorder, order of merit, PN/MP against allocations, and cutoff. Fitness gate: members not current on fitness, or with an “Unsatisfactory” score as of the SCOD, are ineligible for PN/MP and may not be stratified. AFPC issues the actual numbers per FD authority on the final Master Eligibility List. Small units aggregate to the senior rater/management-level EFDP (where aggregation earns no allocation, an outright one PN and one MP; a lone eligible likewise gets one PN and one MP available).",
            "SNCO stratification (¶4.11.2.1, RegAF/AFR): senior rater HLRs may stratify up to 25% of SNCOs in their SRID per component — the top 20% of SMSgts and top 10% of MSgts receive a “#x of x” stratification, and an additional 5% of SMSgts / 15% of MSgts receive a statement-only stratification.",
            "SCODs (Static Closeout Dates) — verified subset: SrA and below 31 March (AB/Amn/A1C receive an evaluation on reaching 36 months TIS as of the SrA SCOD) · TSgt 30 November · MSgt 30 September · SMSgt 31 July · Brig. Gen. 31 July, Maj. Gen. 30 June (Ch. 7). Due dates: evaluations to the MPF NLT 30 days after closeout; referrals to ARPC/office of record NLT 45 days; referral evaluations filed in ARMS/PRDA NLT 60 days (90 for non-extended active duty).",
          ],
          flags: [
            "A Table 4.1 EFDP Panel Scale exists in Ch. 4 — its values were not extracted, and no panel scale numbers print in this section.",
            "Officer grade SCODs live in Table 3.3 and were not extracted — no officer SCOD table ships from this research. Two enlisted SCOD rows that sit in the unextracted part of Table 4.4 are likewise not printed here.",
          ],
          links: [{ label: "AFI 36-2406 (e-Publishing)", url: "http://static.e-publishing.af.mil/production/1/af_a1/publication/afi36-2406/afi36-2406.pdf" }],
          source: "AFI 36-2406 ¶¶4.11.2, 4.18",
        },
        {
          id: "af-rights",
          name: "Air Force — referral rebuttal, ERAB, the board file, letters, charges",
          summary:
            "Referral reports are the Air Force's pre-record due process: the ratee may respond and/or rebut negative ratings or comments before the report becomes a matter of record — the reviewer must allow 3 duty days (30 calendar days for non-extended active duty) to submit a rebuttal. Appeals run to the ERAB (Ch. 10) after administrative corrections via MPF.",
          who: "Any Airman with a referral report or a filed evaluation they dispute; officers writing to a board.",
          body: [
            "Acknowledgment: non-referral evaluations carry a “Ratee Acknowledgement” (receipt). An evaluation becomes a matter of record when complete and uploaded into ARMS and PRDA (¶1.4.3); after that, corrections run under Chapter 10. Referral mechanics (¶1.11): referral procedures exist “to allow the ratee due process by giving the ratee an opportunity to respond and/or rebut any negative ratings or comments before it becomes a matter of record.” If in doubt whether a comment is referral in nature — refer it. The evaluator whose comment causes the referral refers it (face-to-face required); the referral reviewer is the HLR (or the HLR's rater). The reviewer will not review until the 3 duty days pass even if the ratee declines early; extensions are possible (e.g., ADC availability). If no comments arrive, the record is annotated “Comments from the ratee were requested but were not received within the required period.”",
            "Evaluation appeals — ERAB (Ch. 10): the Evaluation Report Appeals Board is “an avenue of relief for correcting errors or injustices in evaluations at the lowest possible level.” Administrative corrections run first (Table 10.2, via MPF). RegAF applies to the ERAB electronically via vMPF; ARC members use DAF Form 948 via myFSS AAQ. ERAB relief must be sought before BCMR (separated/retired members go directly to BCMR — see Records & DD214 Center); cases older than 3 years from matter-of-record are not considered (waiver possible); an application needing resolution before a promotion/SSB must reach AFPC/DPMSPE (RegAF and USSF) or ARPC/PB NLT 90 calendar days before the event; resubmission requires substantively new evidence; a filed evaluation is presumed legal and just.",
            "The board file: officers — the board receives the name and officer selection record (OSR), including the Officer Selection Brief (OSB). AFPC flows Officer Preselection Briefs ~140 days before the board convenes — the member's check window. The SURF (Single Unit Retrieval Format), a.k.a. Record Review RIP, is the career overview accessed via AMS. Pre-board self-help, as verified: review PRDA/ARMS (the filed record is the board's record), review the SURF, act inside the 140-day preselection window, and route corrections via MPF (admin) or ERAB (substantive, ≥90 days out).",
            "Letters to the board — the Air Force rule is split: officers MAY write (DAFI 36-2501 ¶2.10) — letters must arrive no later than 10 calendar days before the board convening date; attachments are limited, and documents that can become a permanent part of the record (draft PRFs/OPBs, PRFs from previous boards, decoration narratives) are not permitted. Enlisted: no AFPC-published rule authorizing letters to enlisted central promotion boards was found; enlisted promotion runs on the record/WAPS system. The officer letter right does not transfer by analogy.",
            "What boards are told: EFDP formal board charges are approved annually by AF/A1 (¶1.6.11.3) — their existence is published, their text is not; likewise the Secretary's Memorandum of Instruction (MOI) to officer promotion boards is described in AFPC materials as “the only authorized guidance” to the board, and MOI texts are not published. The one published AFPC statement of weight (AAD-unmasking FAQ): “Operational and academic expertise and experience, as well as high levels of job performance, will remain the most important factors”; advanced degrees are visible (unmasked, two most recent, since 1 Jan 2023) and are not required for promotion.",
          ],
          flags: [
            "Excluded by verification failure: the widely repeated enlisted board score scale that appears in secondary outlets quoting AFPC's Secretariat was not found in a DAFI/AFPC publication retrieved in the research — it is not printed in this section.",
          ],
          links: [{ label: "ARPC ERAB FAQs", url: "https://www.arpc.afrc.af.mil/Portals/4/Documents/Evaluations/17%20April%202025/Appeal%20Board%20FAQs_7%20Mar%202025.pdf" }],
          source: "AFI 36-2406 ¶¶1.11, Ch. 10 · DAFI 36-2501 ¶2.10 · ARPC ERAB FAQs",
        },
      ],
    },
    {
      key: "cg",
      label: "Coast Guard",
      tileSub: "Entries 16–18 · forms and chains, marks and rights, the board file and the Commandant's Guidance",
      intro:
        "Officers — COMDTINST M1000.3A + PSCINST M1611.1D; enlisted — COMDTINST M1000.2C + PSCINST 1611.2. The CG-5310 grade mapping was re-lettered in the Aug 1, 2025 forms list — the current mapping prints here, and the Coast Guard publishes NO forced-distribution cap: none is imported from any other service.",
      entries: [
        {
          id: "cg-forms",
          name: "Coast Guard forms and rating chains — with a 2025 form trap",
          summary:
            "OER, CG-5310 series, current mapping per the Aug 1, 2025 forms list: A = W2/W3/O3–O5 · B = W4/O1/O2 · C = O6 · D = Duty Under Instruction · E = Continuity · F/G/H = Concurrent. EER, CG-3788 series (A Nonrated/Rated Seaman-Fireman through G MCPO), in Direct Access — the system of record. The mapping in older briefs is superseded.",
          who: "Every Coast Guardsman — check your form letter against the current list before anything is signed.",
          body: [
            "OER rating chain (structure): Reported-on Officer (ROO) submits input 21 days before period end → Supervisor (feedback, drafts marks/comments) → Reporting Officer (RO) (completes the RO section incl. Comparison Scale and Potential) → Reviewer (consistency/compliance; returns the OER to the ROO for review/signature; forwards to PSC). There is no “Approving Official” in the OER chain — that title belongs to the enlisted system. CG-5308A is the Officer Support Form (W2–W3, O2–O6); the CG-5315 series is Reviewer Comments. ADPL OERs submit to OPM-3 (since 15 May 2025, via the OPM-3 SharePoint Submission Form — CAC-gated); IDPL via RPM-1's PowerApp.",
            "EER chain (printed on the form): Member (input: RPQ, competencies, achievements) → Supervisor (recommends marks) → Marking Official (recommends final marks) → Approving Official (approves/finalizes; non-concurred marks must be discussed with the Marking Official; ensures DA entry and counsels the member). The paper form is the worksheet; Direct Access is the system of record — each form directs verifying the marks are entered and the evaluation marked “final.” Chiefs are on the same EES/EER (no separate chief's system); chief forms add a required Future Potential block.",
          ],
          flags: ["The Aug 1, 2025 official CG Forms list re-lettered the CG-5310 series — the mapping in older briefs (A = W2–O2, B = O3–O4, C = O5, D = O6) is superseded. Owning branches: PSC-OPM-3 (active-duty officer evaluations; PSC-RPM-1 for IDPL officers), PSC-EPM-3 (enlisted evaluations); several PSC working pages are CAC-gated — named, not reconstructed."],
          links: [{ label: "CG Forms list (DCMS)", url: "https://www.dcms.uscg.mil/forms/" }],
          source: "CG Forms list (Aug 1, 2025) · COMDTINST M1000.3A / M1000.2C",
        },
        {
          id: "cg-marks-rights",
          name: "Coast Guard — marks, periods, and member's rights",
          summary:
            "Distribution mechanics — the honest finding: PSC publishes no percentage cap or forced-distribution quota for OER or EER marks in the public material. Do not import a Navy-style cap. OER dimension marks run 1–7 with 4 = expected standard; EER marks run 1–7 per competency, and Advancement Potential is categorical: Ready / Not Ready / Not Recommended. EER marks appeal: 15 calendar days — and the advancement recommendation itself may NOT be appealed.",
          who: "Every Coast Guardsman at evaluation time — the 15-day marks-appeal window is the single most time-sensitive item on this card.",
          body: [
            "OER marks are given against written standards (“not to other officers and not to the same officer in a previous reporting period”); specific comments required for marks of 1, 2, 3, and 7. The RO also completes a peer-relative Comparison Scale and a separate Promotion Scale — this section describes their existence and who completes them; it does not quote the current form's scale wording. EER: Conduct is marked separately (Satisfactory/Unsatisfactory). SWE candidacy requires a current EER with the CO's recommendation for the new cycle (a missing EER is the most common ineligibility cause per the SWE Guide); a CORC (CO Recommendation Change) is a distinct DA evaluation type that changes the recommendation without a full new EER where policy allows.",
            "Periods: OERs are Regular annual/semiannual on a fixed calendar (ALCOAST 026/26, effective Jan 2026) — and delays are no longer authorized for any reason. ALCOAST 167/26 (Jun 2026): Optional OERs are cancelled — a detachment/change-of-RO OER is now required only if ≥184 days (annual) or ≥92 days (semiannual) have elapsed since the previous OER. Continuity OERs run up to 24 months for eligible retiring officers.",
            "Member's rights: ROO Reply (officers) — the ROO may submit a reply within 21 days after receipt of the official copy of the OER from PSC (COMDTINST M1000.3 Art. 5.K); the reply is appended to the OER, is performance-oriented, and is not an appeal and does not correct the OER. EER marks appeal (enlisted) — printed on the current forms themselves: “I UNDERSTAND THAT I HAVE 15 CALENDAR DAYS IN WHICH TO SUBMIT A MARKS APPEAL” (the acknowledgment also covers counseling on marks' Good Conduct significance and the advancement recommendation). Appeal routing runs via the CO to the appeal authority designated in PSCINST 1611.2. Record-error route (both): PRRB (Personnel Record Review Board — apply within 1 year of the entry/validated OER; COMDTINST 1070.1) first, then the DHS Board for Correction of Military Records (CG's BCMR sits at the Department of Homeland Security; DD Form 149; normally within 3 years of discovery) — see Records & DD214 Center.",
          ],
          flags: [
            "The advancement recommendation itself may not be appealed (“an Approving Official's decision on the advancement recommendation is final and may not be appealed”).",
            "The EER period-ending month table lives in COMDTINST M1000.2C Ch. 4 / PSCINST 1611.2 and was not opened in the research (the only web copies located were non-official study sites) — no EER month-by-paygrade table prints in this section.",
            "Dimension suspensions (footnote any dimension table): ALCOAST 047/25 suspended the OER Workplace Climate dimension (leave blank) for periods ending 31 Jan–31 Jul 2025, and the EER Respect for Others competency from 2 Feb 2025 with a placeholder mark of 4 for all E1–E9, “not an indication of the member's performance.”",
          ],
          links: [
            { label: "ALCOAST 026/26", url: "https://content.govdelivery.com/accounts/USDHSCG/bulletins/405cac2" },
            { label: "MyCG — Officer Careers (ROO reply)", url: "https://www.mycg.uscg.mil/Officer/Careers/" },
          ],
          source: "COMDTINST M1000.3A / M1000.2C · ALCOAST 026/26, 167/26, 047/25 · CG-3788 forms",
        },
        {
          id: "cg-board-file",
          name: "Coast Guard — the board file, letters, and the Commandant's Guidance",
          summary:
            "What boards see (officers): only three sources — the EI-PDR officer record, Direct Access data, and properly submitted candidate communications. PSC's verbatim warning: “The ESS provides a false sense of security, all too often personal awards are listed on the ESS and are not in the EI-PDR.” The CG's published equivalent of a precept is the Commandant's Guidance to Boards and Panels — CG does not title them “precepts.”",
          who: "Every board-eligible Coast Guardsman — review your EI-PDR against your ESS at least one year out.",
          body: [
            "Review/correction — PSC's published self-help (PSC-RPM Board & Panel Preparation): request your EI-PDR from PSC Records Branch (MR); submit missing documents via your P&A office to MR (expedited subject line “URGENT BOARD ENTRY”); keep OERs current (due to PSC NLT 45 days after period end, and no later than 14 days before a board convenes); file an updated CG-4082, Record of Professional Development (recommended; a new one replaces all previous — make it one consolidated list; JPME must also appear as ESS competencies). COMDTINST 1410.2 lists the viewable documents and the masking rules: boards see entries after original commissioning dealing with officer performance; Ensign OERs are masked at IDPL boards for LCDR and above; demographic, sensitive-assignment, medical, and security-clearance data shall not be provided to promotion boards unless essential to a special board. Officer boards/panels are directed to four pillars: Performance, Professionalism, Leadership, and Education. Enlisted panels use a different four — Performance, Professional Qualities, Leadership, and Military — do not merge the two lists. OSMS 2.0 has been in use for board/panel decisions since PY21.",
            "Enlisted advancement layer: E5–E8 advance by SWE (annual exam) — the member verifies the Personal Data Extract (PDE) in Direct Access Self-Service; the final multiple combines SWE score, EER marks, TIS, TIG, awards, and sea/surf duty (components as the SWE Guide publishes them). E9 advances by panel: MCAP (active) reviewed, in its 2025 announcement, “the past seven years… of EERs and OMPF” (ALCGENL 004/25); R-MCAP / R-SCAP are the Reserve E9/E8 panels.",
            "Letters to the board — published, statutory (officers): under 14 U.S.C. §2108(b) an eligible officer may send a communication through the chain of command, to arrive not later than the date the board convenes, “inviting attention to any matter of record… concerning such officer” — it may not criticize any officer or reflect upon character, conduct, or motive. Enlisted: no equivalent letter right was found in PSC-EPM public material (SWE has no board to write to; MCAP/R-MCAP announcements direct candidates to record review and PDE/CGMHRR correction) — stated plainly; no enlisted letter route is invented here.",
            "What boards value — the Commandant's Guidance (summary, in the document's own structure): selection “rests on the merits of the individual… demonstrated leadership and performance and, most importantly, the candidate's potential for service at the next higher grade”; officers of particular merit get two board tools — In-Zone Reordering and Below-Zone Selection; all officers must exemplify Honor, Respect, and Devotion to Duty on and off duty — failure “is disqualifying for promotion”; boards are told not to narrowly require fixed career milestones (the Service assigns to its needs; not all have the opportunity to command). The enlisted counterpart — Commandant & MCPOCG Guidance to Enlisted Selection Boards and Panels — is summarized by MyCG (inclusivity, mentoring, ethical conduct; Core Values, Chiefs Mess leadership).",
          ],
          flags: [
            "Naming in transition: EI-PDR (board-prep/1410.2 material), the record-system manual now cited as CGMHRR (COMDTINST 1080.10J), and MyCG's Jan 2026 article telling officers “You can review your record in iPERMS” — no single PSC explainer tying the three together was found; this section prints all three names with their sources and asserts no identity between them.",
            "ALCOAST 219/25 (the current letter formulation) carried a 1 May 2026 cancellation date — verify manual incorporation before presenting its text as current after that date. The proposed Officer Performance Assessment (OPA) overhaul is in development only — the CG-5310 OER under PSCINST M1611.1D remains the system.",
            "SWE final-multiple point weights are not printed — components only, as the SWE Guide publishes them.",
          ],
          links: [
            { label: "PSC-RPM Self-Help Board & Panel Preparation", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-PSC-RPM/Self-Help-Board-Panel-Preparation/" },
            { label: "PY26 Guidance to Officer Boards and Panels", url: "https://www.dcms.uscg.mil/Portals/10/PY26%20Guidance%20to%20Officer%20Boards%20and%20Panels.pdf" },
          ],
          source: "PSC-RPM Self-Help · PY26 Commandant's Guidance (9 Nov 2025) · 14 U.S.C. §2108(b)",
        },
      ],
    },
  ],
};
