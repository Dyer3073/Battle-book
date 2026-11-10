// ROTC & Academies — transcribed from the researched pack
// (~/workspace/military-app/rotc/rotc.md, researched Nov 9, 2026).
// The pack is the content source of truth. Placement: the
// future-member / Joining area alongside the officer-routes content.
// Binding: the USCGA exception prints in USCGA's own wording —
// nominations "not required or considered" — never softened; four
// academies require a nomination, USCGA does not. USMMA: nomination
// from a Representative/Senator of the state of residence ONLY (no
// VP, no service-connected), MARAD/DOT not DoD, three-part
// obligation (5 yrs maritime/active duty + 8 yrs reserve commission
// + 6 yrs license maintenance), NO prep school for USMMA. USMAPS:
// automatic consideration, no separate application — CONFIRMED at
// build time on westpoint.edu's Admission Information for Soldiers
// page (verification (c)). NROTC College Program cites NSTC
// M-1533.2F / NSTC (build-time verification (b): CONFIRMED and
// UPGRADED); pack-flagged figures still print at the pack's sourcing
// level. AFROTC scholarships ship at the FLAGGED level per build-time
// verification (a): program names primary (HSSP, ICSP, CMLA), Type
// labels as detachment-published award categories, capped/uncapped
// transition flagged, NO Type dollar table, NO Type cap amounts, NO
// Field Training duration (event + Maxwell AFB + position in program
// only). CORTRAMID = NROTC 3/C and PROTRAMID = USNA 2/C are NEVER
// merged. CFA/PFE conflict prints. NO admissions odds, NO live cycle
// dates as standing facts, NO scholarship dollars beyond the pack's
// flagged structure definitions, NO unofficial nomination advice.

import type { PackSection } from "./seven";

export const ROTC_SECTION: PackSection = {
  view: "rotc",
  title: "ROTC & Academies",
  headSub:
    "The college routes to a commission, for prospective students and their families: the five federal service academies and the ROTC programs (Army ROTC, NROTC, AFROTC) — what each route is, how its doors open, and what obligation it carries, from the academies' and services' own pages. Structure only: no admissions odds, no live cycle dates as standing facts, no ranking of the routes.",
  intro:
    "Already hold a degree? The post-degree route is OCS/OTS — see Joining's Becoming an Officer content. Already serving? The enlisted routes to a commission (Green to Gold, MECEP, STA-21, academy admissions for enlisted members, CSPI-as-serving-route, and the rest) live in Commissioning from the Ranks. This section is the two college doors, side by side.",
  tiles: [
    {
      key: "doors",
      label: "Two College Doors",
      tileSub: "Academy vs. ROTC — the structural difference before the details",
      intro:
        "A prospective member who wants a bachelor's degree and a commission at the same time has two structurally different doors. Both are competitive, both are whole-person evaluations (academics, leadership, physical aptitude, medical fitness, character), and neither is a fallback for the other — they are parallel sources the services draw from simultaneously.",
      entries: [
        {
          id: "rotc-two-doors",
          name: "Two college doors to the same commission",
          summary:
            "Door 1 — a service academy: one federal institution, four years under its military regime, degree and commission on the same day. Four of the five academies require a NOMINATION before the academy can offer an APPOINTMENT; the fifth (Coast Guard Academy) is the documented exception. There is no “attend now, decide about service later” version. Door 2 — ROTC at a civilian college: you attend a civilian college hosting an ROTC unit and take military coursework alongside your degree; scholarship cadets/midshipmen contract early, non-scholarship participants may sample the early coursework with NO service obligation — the contracting point, not enrollment, is where the obligation begins.",
          who: "Prospective students and their families choosing where to start reading.",
          body: [
            "The shared academy skeleton (all five): (1) confirm basic eligibility (citizenship, age band at entry, unmarried / no dependents, moral character) on the academy's admissions page; (2) open the academy's own application (preliminary questionnaire first, then the full candidate file); (3) take the SAT or ACT (West Point also accepts the CLT); (4) pass the DoDMERB medical examination, which each academy schedules once your file is open; (5) pass a physical fitness assessment — the Candidate Fitness Assessment (CFA) at four academies, the Coast Guard Academy's own Physical Fitness Examination (PFE) at the fifth; (6) for four academies, obtain a nomination; (7) the academy's admissions board evaluates the completed file and the academy — not the nominator — issues or withholds the offer of appointment.",
            "Timelines run roughly a year ahead of entry — file opens in the junior year / summer before senior year, nomination packets fall due in the fall of senior year, files complete in the winter, offers issue in the spring. That is structure, not a calendar: every date in a given cycle is set by that academy and that year's congressional offices, and the entries here route to the live pages rather than printing dates.",
          ],
          flags: [],
          links: [],
          source: "The academies' admissions pages · NSTC / Cadet Command / AFROTC program pages",
        },
      ],
    },
    {
      key: "academies",
      label: "The Five Academies",
      tileSub: "West Point · Annapolis · USAFA · Coast Guard Academy · Kings Point",
      intro:
        "One card per academy: what it is, its appointment structure, its published steps, its service obligation as the academy itself publishes it, and its preparatory route. The nomination difference between the five is the single most misunderstood fact in academy admissions — each card states its own.",
      entries: [
        {
          id: "usma",
          name: "U.S. Military Academy — West Point, New York (Army)",
          summary:
            "The Army's four-year federal academy. Graduates earn a Bachelor of Science and commission as Second Lieutenants in the U.S. Army. NOMINATION REQUIRED — West Point, step 4 of its published steps: “Before you can attend West Point, you'll need a nomination, essentially an official endorsement from a U.S. government or military source.” West Point's own caution: “Receiving a nomination is required before a candidate can be offered admissions, but a nomination does not guarantee a candidate will be offered admission.”",
          who: "Prospective cadets — and Soldiers, whose admissions channel cross-links to Commissioning from the Ranks.",
          body: [
            "Nomination families: Congressional (your U.S. Representative, your two U.S. Senators, and the Vice President — each nominating authority can nominate up to 15 candidates for each vacancy) and service-connected (statutory categories tied to the candidate's own or a parent's service; “typically not competitive… automatically conferred when a candidate meets certain criteria,” with a commander's endorsement for serving Soldiers). You apply for the nomination directly through the nominator's office, separately from your West Point application.",
            "West Point's published steps, in West Point's order: (1) meet the basic requirements; (2) take the ACT, SAT, or CLT; (3) submit your application (candidate questionnaire → candidate portal); (4) obtain a nomination; (5) complete the CFA — administered by a PE teacher, a Field Force Representative, a Military Academy Liaison Officer (MALO), a JROTC instructor, or a U.S. military officer or NCO from any service; (6) pass the DoDMERB medical exam (scheduled once you are an official candidate, at no cost); (7) complete the candidate checklist (transcripts, test scores, essays, recommendations, CFA scores). The file is complete when the application, nomination, qualifying medical exam, and checklist are all in. West Point publishes the current cycle's file-completion date on its steps page — the date lives there, not here.",
            "Service obligation, as West Point publishes it: “West Point graduates serve as officers in the U.S. Army for a minimum of five years on active duty (full-time) and an additional three years in the reserve component (part-time) or Individual Ready Reserve.” The obligation is taken by oath at the beginning of the junior year: “Before doing so, cadets may leave West Point for whatever reason without incurring a service obligation.”",
            "Preparatory school: USMAPS (Prep Schools tile) — automatic consideration, no separate application. Enlisted admissions: West Point reserves appointments by law for qualified Soldiers (active, Reserve, National Guard) — the route and gates are in Commissioning from the Ranks.",
          ],
          flags: [],
          links: [
            { label: "West Point — Steps to Admission", url: "https://www.westpoint.edu/admissions/prospective-cadets" },
            { label: "West Point — Tuition and Service Commitment", url: "https://www.westpoint.edu/admissions/tuition-and-service-commitment" },
          ],
          source: "U.S. Military Academy (westpoint.edu)",
        },
        {
          id: "usna",
          name: "U.S. Naval Academy — Annapolis, Maryland (Navy & Marine Corps)",
          summary:
            "The Navy's four-year federal academy. Graduates earn a Bachelor of Science and commission as Ensigns in the U.S. Navy or Second Lieutenants in the U.S. Marine Corps — the Academy commissions into BOTH naval services, and the Marine share is assigned at the Academy, not by a separate application. NOMINATION REQUIRED: candidates must “receive an official nomination from one of many sources available” before the Admissions Board can act; the nomination process is independent of the Academy application and runs at the same time.",
          who: "Prospective midshipmen for both the Navy and the Marine Corps.",
          body: [
            "The file also requires the CFA, a qualifying DoDMERB exam, teacher recommendations, and an interview by an Academy representative (a Blue and Gold Officer). The Admissions Board begins meeting in the fall and evaluates files as they are completed; the current cycle's deadlines are on the Steps for Admission page.",
            "Service obligation — the Agreement to Serve, signed and returned before Induction Day (10 U.S.C. §§ 6959 and 2005 as USNA cites them): complete the four-year course; accept an appointment and serve as a commissioned officer in the Navy or Marine Corps, serving on active duty for at least five years immediately upon graduation; accept appointment in a restricted line / staff corps, or in an enlisted grade, as directed if circumstances described in the agreement occur; and — the Academy prints this consequence plainly — serve in an enlisted grade on active duty for up to four years, or reimburse the United States for the cost of education received, if the conditions agreed to are not fulfilled.",
            "Alternate routes the Academy itself names: NAPS and the Naval Academy Foundation (Prep Schools tile) — selection comes from the Academy applicant pool, not a separate application, and neither route guarantees a later appointment. Enlisted admissions: the Secretary of the Navy appoints enlisted Sailors and Marines each year — routes and gates in Commissioning from the Ranks.",
          ],
          flags: [
            "USNA's own wording says candidates pass the “Candidate Fitness Assessment (CFA) used by all service academies” — read it as the Academy publishes it, with this pack's correction: it is NEARLY all. Four academies share the CFA; the Coast Guard Academy uses its own PFE.",
          ],
          links: [{ label: "USNA — Admissions (Blue and Gold Book)", url: "https://www.usna.edu/BlueAndGoldBook/admissions.php" }],
          source: "U.S. Naval Academy (usna.edu)",
        },
        {
          id: "usafa",
          name: "U.S. Air Force Academy — Colorado Springs, Colorado (Air Force & Space Force)",
          summary:
            "The Department of the Air Force's four-year federal academy. Graduates earn a Bachelor of Science and commission as Second Lieutenants in the U.S. Air Force or the U.S. Space Force — USAFA is the Space Force's academy source; there is no separate Space Force academy. NOMINATION REQUIRED, in the Academy's words: “To be eligible to accept an appointment to the Academy, you must be nominated by a legally authorized nominating entity. Securing a nomination is a separate process from your Academy application and can be competitive and lengthy.”",
          who: "Prospective cadets for the Air Force and the Space Force.",
          body: [
            "The published two-phase structure: Phase 1 — Pre-Candidate: the Pre-Candidate Questionnaire (PCQ), an online self-report of GPA, class rank, and activities (USAFA publishes the PCQ's annual opening on its admissions pages — route for the current cycle's date). Phase 2 — Candidate: applicants advanced to candidate status receive the full online application (Candidate Kit) and complete the remaining file: academics, the CFA, the DoDMERB medical evaluation, an Admissions Liaison Officer interview, and the nomination.",
            "Service obligation, as USAFA publishes it: an Academy education is provided at no cost; in exchange, “once you graduate, you will commission as an officer in the U.S. Air Force or Space Force. The length of your commitment will depend on your career path” — and the Academy's admissions publication states the floor plainly: “Your commitment to serve will be at least five years.” Career fields with long training pipelines (aviation above all) carry longer published commitments, set after commissioning — the floor (≥5 years) and the career-path caveat print here; no single flat number covers pilots.",
            "Preparatory school: USAFAPS (Prep Schools tile) — automatic consideration, no separate application, no guaranteed appointment. Enlisted admissions enter through the Academy's enlisted channel (frequently through USAFAPS) — Commissioning from the Ranks.",
          ],
          flags: [],
          links: [
            { label: "USAFA Admissions", url: "https://www.academyadmissions.com/" },
            { label: "USAFA — Grades 11–12", url: "https://www.usafa.edu/admissions/student-applicant/grades-11-12/" },
          ],
          source: "U.S. Air Force Academy (academyadmissions.com / usafa.edu)",
        },
        {
          id: "uscga",
          name: "U.S. Coast Guard Academy — New London, Connecticut (Coast Guard) — THE EXCEPTION",
          summary:
            "The Coast Guard's four-year federal academy. Graduates earn a Bachelor of Science and are commissioned as Ensigns in the U.S. Coast Guard. NO NOMINATION — in the Academy's own words: “Unlike applications to other U.S. service academies, admission to the Coast Guard Academy is driven strictly by merit. Congressional nominations are not required or considered, so we are free to choose the absolute best applicants for our service.”",
          who: "Prospective cadets — the only academy applicant with exactly one file to build, not two.",
          body: [
            "What this means structurally: there is exactly one file, not two. A USCGA applicant applies directly to the Academy and competes in a single, Academy-run, merit-based review. There is no nominating office to apply to, no nomination deadline to track, and no way for a nomination to help — nominations are not considered, not merely optional. For the other four academies, a qualified file without a nomination cannot produce an appointment at all. (The Nomination Step tile carries the five-source verification box.)",
            "Fitness — the PFE, not the CFA: USCGA requires its own Physical Fitness Examination (PFE), plus a qualifying DoDMERB medical exam, which “must be on file before an appointment to the Academy can be offered” (it is not required merely to have the file reviewed). Eligibility as USCGA publishes it: U.S. citizen (or sponsored international), of sound moral character, unmarried with no dependents, a high school graduate, 17–22 years of age. The Academy runs Early Action and Regular Admission rounds with deadlines on its Admission Requirements page — route for the current cycle.",
            "Service obligation, as USCGA publishes it: “Unless exceptional circumstances arise, USCGA graduates are commissioned as Ensigns in the United States Coast Guard with a service commitment of at least five years.”",
            "Preparatory route: the CGA Scholars Program (Prep Schools tile) — selected from within the general applicant pool; there is not a separate admissions process. Enlisted admissions: serving Coast Guardsmen compete in the same direct, merit-based pool — the serving-member route is in Commissioning from the Ranks.",
          ],
          flags: [],
          links: [
            { label: "USCGA — Getting Started", url: "https://uscga.edu/admissions/getting-started/" },
            { label: "USCGA — Admission Requirements", url: "https://uscga.edu/admissions/admission-requirements/" },
          ],
          source: "U.S. Coast Guard Academy (uscga.edu)",
        },
        {
          id: "usmma",
          name: "U.S. Merchant Marine Academy — Kings Point, New York (Merchant Marine / Naval Reserve)",
          summary:
            "A federal service academy that is NOT a Department of Defense academy: USMMA is administered by the Maritime Administration (MARAD) under the U.S. Department of Transportation, and exists to produce licensed merchant marine officers for the nation's commercial fleet and defense sealift. Its curriculum includes a Sea Year — midshipmen spend a year sailing aboard U.S. merchant vessels. At graduation: a Bachelor of Science, a U.S. Coast Guard Merchant Mariner Credential (officer license), and a commission as an officer in a U.S. reserve component (framed through the U.S. Navy Reserve, Strategic Sealift Officer Program).",
          who: "Prospective midshipmen set on the maritime industry or defense sealift.",
          body: [
            "NOMINATION REQUIRED — AND NARROWER THAN THE OTHERS: “Securing a nomination is a highly competitive, mandatory process… You must be nominated by a U.S. Representative or U.S. Senator from your state of residence.” Appointments are allocated by state in proportion to the state's representation in Congress, and candidates compete statewide. Two published exclusions that distinguish USMMA: “USMMA does not accept Vice Presidential or military service-connected nominations (e.g., ROTC or Presidential).” A Member of the House may nominate a candidate from anywhere in the Member's state — the nominator need not be the candidate's own district Representative.",
            "The published 8 steps, compressed: (1) confirm eligibility; (2) submit Part 1 of the application; (3) apply for a nomination; (4) college entrance exams (SAT/ACT); (5) transcripts; (6) CFA — USMMA uses the shared CFA, scores it pass/fail, accepts CFA results administered for another service academy, and permits retakes up to the deadline; examiners must be qualified officials and may not be a parent or guardian; (7) DoDMERB medical exam; (8) complete the online application, including acknowledging the service obligation.",
            "Service obligation — three concurrent parts, as USMMA publishes them: (1) work in the maritime industry or serve on active military duty for 5 years (MARAD-approved service/employment — sailing as a merchant marine officer on U.S.-flagged vessels and active-duty commissioned service are the two automatically approved categories); (2) serve as a commissioned officer in a military reserve unit for 8 years; and (3) maintain the merchant marine license for 6 years — plus file annual obligation reports. The statutory frame is 46 U.S.C. § 51306 and 46 C.F.R. § 310.58, set out in the Service Obligation Contract each midshipman signs after Indoctrination. Graduates who serve five years of honorable active duty are statutorily excused from the license-maintenance and reserve-commission elements.",
            "Prior-service note: USMMA applicants must meet “the physical, security, and suitability requirements necessary to receive a commission in the U.S. Navy Reserve” as midshipmen (Strategic Sealift Officer Program). There is no separate serving-member route detailed here; serving members start from the same admissions pages.",
          ],
          flags: ["NO preparatory school ships for USMMA: unlike the other four academies, USMMA publishes no academy-run prep school or scholars program on its admissions pages (as retrieved Nov 9, 2026). A Kings Point applicant who is not appointed strengthens and reapplies through the same 8 steps."],
          links: [
            { label: "USMMA — The 8 Steps to Admission", url: "https://www.usmma.edu/admissions/8-steps-admission" },
            { label: "USMMA — Obligation Compliance", url: "https://www.usmma.edu/after-graduation/obligation-compliance" },
          ],
          source: "U.S. Merchant Marine Academy (usmma.edu) · MARAD / U.S. DOT",
        },
      ],
    },
    {
      key: "nomination",
      label: "The Nomination Step",
      tileSub: "From congressional sources only — what it is, who nominates, the USCGA verification box",
      intro:
        "This tile explains the step from what official congressional pages and the academies themselves publish — nothing from a prep company, a forum, or an unofficial guide, and no strategy advice: each office's own page is the authority for its own process.",
      entries: [
        {
          id: "nomination-step",
          name: "What a nomination is — and is not",
          summary:
            "Per a Senate nominations FAQ: “A nomination is the selection made by an authorized source. Title 10 of the U.S. Code establishes two types of nominations: 1) congressional and 2) presidential/military service connected.” An appointment is a different act, by a different body: “An appointment allows you admission to an academy and is only granted by the individual academies after an applicant has received a nomination…” House FAQ: “Does a nomination guarantee admission? No — each student must receive a nomination AND an offer of admission from an Academy.”",
          who: "Applicants to West Point, USNA, USAFA, and USMMA. (USCGA applicants: skip this tile — see the verification box.)",
          body: [
            "Who the congressional nominators are: the Vice President (nominates at large, from any part of the nation), your two U.S. Senators (statewide), and your U.S. Representative (residents of the congressional district). Senate and House pages both instruct applicants to apply to every source they are eligible for — the process is competitive and the sources are independent of each other. A candidate may receive nominations to multiple academies and, if the academies so decide, multiple appointments.",
            "The capacity frame, as congressional pages publish it: each Senator and Representative “may have no more than five appointees attending each Service Academy at any given time” — in practice roughly one vacancy per academy per year per Member. For each vacancy, a Member may submit up to fifteen nominations to the Military, Naval, and Air Force academies and up to ten nominations for each Merchant Marine Academy vacancy (USMMA vacancies are state-proportioned). Members choose their own nomination method (Senate pages name, for example, principal-and-competitive-alternates and the fully competitive method) — the method is the Member's to set, not the applicant's.",
            "What the offices say they evaluate: “Nominations are based on a 'whole person' evaluation. Factors such as academic achievements, extra-curricular activities, leadership skills, physical aptitude, character and motivation are taken into consideration and compared with other applicants.” Offices publish their own packet contents (typically transcripts, test scores, recommendations, an essay, and an interview before the Member's academy board/panel in the fall) and their own deadlines — every office's packet and deadline is its own, and the only correct source for one is that office's current page.",
            "The two-track discipline every source repeats: (a) open a file at each academy you seek — you generally must have an open academy admission file to be considered for a nomination — and (b) submit a separate nomination application to each nominating office. Neither track substitutes for the other, and the academy makes the final decision.",
          ],
          flags: [],
          links: [
            { label: "Senate FAQ — Academy Nominations (Sen. Schatz)", url: "https://www.schatz.senate.gov/services/academy-nominations/faq" },
            { label: "House FAQ — Military Academy Nominations (Rep. Kean)", url: "http://kean.house.gov/services/military-academy-nominations/military-academy-nominations-faq" },
          ],
          source: "Senate and House academy-nomination pages (senate.gov / house.gov)",
        },
        {
          id: "uscga-verification",
          name: "✔ Verification box — the Coast Guard Academy difference",
          summary:
            "Claim checked: “The Coast Guard Academy does not require a congressional nomination; the other four academies do.” VERIFIED, from five independent official sources, in their own words — USCGA itself, the House, the Senate, USMMA (for contrast), and the other three academies' own requirement statements.",
          who: "Everyone — this is the fact to get right before advising any academy applicant.",
          body: [
            "USCGA itself: “Congressional nominations are not required or considered” (Getting Started) and “the Coast Guard Academy does not require a Congressional nomination” (Admission Requirements) — uscga.edu. The House: Members “may nominate candidates for appointment to four of the five U.S. service academies”; USCGA “does NOT require a congressional nomination for appointment” — house.gov nomination pages. The Senate: “The USCGA is the only service academy that does not require a congressional nomination” — senate.gov nomination FAQs. USMMA (for contrast): nomination is “mandatory,” from a Representative or Senator of the applicant's state only; no Vice Presidential or service-connected nominations accepted — usmma.edu. West Point / USNA / USAFA each state the nomination requirement on their own admissions pages.",
            "The crisp version: four academies run a two-track process — a nomination from an authorized source, then the academy's own appointment decision. The Coast Guard Academy runs one track: apply directly to the Academy; admission is by merit alone, and nominations are neither required nor considered.",
          ],
          flags: [],
          links: [
            { label: "House — Service Academy Nomination (Rep. Kennedy)", url: "https://kennedy.house.gov/services/service-academy-nomination.htm" },
            { label: "USCGA — Getting Started", url: "https://uscga.edu/admissions/getting-started/" },
          ],
          source: "Pack verification box — five official sources (uscga.edu, house.gov, senate.gov, usmma.edu, academy pages)",
        },
      ],
    },
    {
      key: "prep",
      label: "Prep Schools",
      tileSub: "USMAPS · NAPS & Foundation · USAFAPS · CGA Scholars — and the USMMA negative",
      intro:
        "Four academies run a preparatory route for selected candidates not offered direct admission. The shared mechanism: selection comes from the academy's own applicant pool — there is no separate application to any of them — and none of them guarantees a later appointment except as its own wording states.",
      entries: [
        {
          id: "prep-schools",
          name: "The four preparatory routes, per academy",
          summary:
            "USMAPS (West Point), NAPS + the Naval Academy Foundation (Annapolis), USAFAPS (Air Force Academy), and the CGA Scholars Program (Coast Guard Academy) — each a one-year (USAFAPS: 10-month) preparation for candidates the academy selects from its own applicant pool. USMMA publishes NO prep school — printed as a negative finding, not filled by analogy.",
          who: "Candidates not offered direct admission — and anyone told to “apply to the prep school” (you can't; the academy selects).",
          body: [
            "USMAPS — U.S. Military Academy Preparatory School, at West Point: the Academy's own one-year prep route for selected candidates not offered direct admission. Soldiers not directly admitted to USMA are automatically considered for USMAPS; there is no separate application — the West Point application is the only door. (Build-time re-confirmation: CONFIRMED on westpoint.edu's current Admission Information for Soldiers page.) Per the Army's official congressional casework guide, “Applicants are automatically considered for prep programs without having to reapply” — the programs “often provide the most benefit to soldiers currently serving and recruited athletes, though all files can be considered.”",
            "NAPS — Naval Academy Preparatory School, Newport, RI: a one-year preparatory program; candidates with strong records who need to strengthen their academic background may be selected for NAPS instead of direct appointment — selection comes from the Academy applicant pool, not a separate application. The Naval Academy Foundation: USNA lists the Foundation alongside NAPS as an alternate route — a sponsored preparatory year for candidates the Admissions Board identifies. Neither route guarantees a later appointment; both exist to strengthen a file for the next cycle.",
            "USAFAPS — U.S. Air Force Academy Preparatory School, on the Academy grounds: “offers a select group of enlisted personnel and civilians a potential pathway to join the cadets at the Academy,” providing “the academic, leadership, and physical skills to prepare them for success as future officers” over a 10-month program. Two published cautions, both printed: cadet candidates “are not guaranteed an appointment” — successful completion earns consideration and the prep school commander's recommendation — and “there is no separate application for the Prep School. If you apply to the Academy and are not offered an appointment, you will be automatically considered for admission into the Preparatory School.”",
            "CGAS — Coast Guard Academy Scholars Program: sends selected applicants “with high potential for one year of preparatory school to develop academically, physically and militarily” — a three-week orientation on the Academy campus, then the prep year at one of three published sites (Georgia Military College, the Naval Academy Preparatory School in Newport, RI, or the University of Massachusetts Boston), with “program expenses, including uniforms, tuition, room and board, covered by the Coast Guard.” “Most participants who successfully complete this year of focused preparation receive, and are expected to accept, a full appointment to the Academy” — note the difference in wording from USAFAPS: CGA publishes most + expected to accept; USAFA publishes not guaranteed. “CGA Scholars appointees are selected from within the general applicant pool. There is not a separate admissions process for this program.”",
          ],
          flags: ["USMMA: no preparatory school ships. Unlike the other four academies, USMMA publishes no academy-run prep school or scholars program on its admissions pages (as retrieved Nov 9, 2026)."],
          links: [
            { label: "USAFAPS — Preparatory School", url: "https://www.usafa.edu/prep-school/" },
            { label: "USCGA — CGA Scholars Program", url: "https://uscga.edu/admissions/cgas/" },
            { label: "West Point — Admission Information for Soldiers", url: "https://westpoint.edu/admissions/steps-to-admission/current-soldiers" },
          ],
          source: "The academies' preparatory-school pages · Army Casework Guide (118th Congress) · westpoint.edu (USMAPS, build-time confirmed)",
        },
      ],
    },
    {
      key: "army-rotc",
      label: "Army ROTC",
      tileSub: "Cadet Command — Basic/Advanced Course, scholarships, CST, and SMP (Army only)",
      intro:
        "Army ROTC is run by U.S. Army Cadet Command at colleges nationwide. The binding event is contracting; the capstone is Advanced Camp at Fort Knox; and SMP — the dual-status program — exists only here.",
      entries: [
        {
          id: "army-rotc-main",
          name: "Army ROTC — structure, scholarships, obligation, Cadet Summer Training, SMP",
          summary:
            "Two courses: the Basic Course (freshman/sophomore years — fundamentals of leadership; open to interested students with NO service obligation) and the Advanced Course (junior/senior years — participation requires being contracted). Scholarship cadets contract on the scholarship's terms from the start; non-scholarship cadets contract when they enter the Advanced Course (or earlier, by choice/competition). A scholarship is a funding instrument, not the commissioning gate — the contract and course completion are.",
          who: "Prospective Army officers at civilian colleges — scholarship and non-scholarship alike.",
          body: [
            "Scholarship types, at published structure: Four-Year Scholarship (the national high school competition); Three-Year Scholarship — the high-school-awarded variant is the 3-Year Advanced Designee (participates freshman year; the scholarship takes effect sophomore year if requirements are met); Two-Year Scholarship (incl. the Military Junior College route); Campus-based scholarships (2–3 years, awarded through the battalion to enrolled students); Guaranteed Reserve Forces Duty (GRFD) — selection guarantees a Reserve Component assignment (Army Reserve or National Guard) at commissioning, and GRFD cadets must participate in SMP; Minuteman Scholarship — the Guard/Reserve-named GRFD-family award (4-, 3-, or 2-year), allocated through ARNG/USAR channels — accepting it locks the graduate into the Reserve Component, with no later request for an active-duty commission under it. Green to Gold is the active-duty-enlisted family that uses ROTC — cross-link only, in Commissioning from the Ranks.",
            "Obligation, as published: a scholarship cadet signs a contract with the Secretary of the Army, completes Advanced Camp, accepts a commission, and serves a total of eight years from commissioning, fulfilled as either (1) four years on active duty followed by four years in the IRR / Guard / Reserve, or (2) eight years in the National Guard / Army Reserve, including a 3–6 month active-duty period for initial training. GRFD/Minuteman cadets take the second form by the terms of the award.",
            "Cadet Summer Training (CST), Fort Knox, KY: Basic Camp — the four-week catch-up course for cadets entering without Basic Course credit (lateral entry, transfers, MJC cadets); completion qualifies the cadet to enter the Advanced Course. Advanced Camp — the capstone evaluation between the junior (MS III) and senior (MS IV) years; required of every cadet and a commissioning requirement.",
            "SMP — Simultaneous Membership Program: “The SMP gives eligible enlisted members of the ARNG and USAR an opportunity to maintain status in their Reserve Component while simultaneously attending college and participating as a contracted Cadet in the ROTC Program working towards a Commission as an Officer.” The SMP cadet holds both statuses at once — drilling member of a Guard/Reserve unit and contracted ROTC cadet. All GRFD cadets must participate in SMP.",
          ],
          flags: [
            "STRUCTURE FACT (published by Cadet Command, Nov 2026): Army ROTC scholarships “may be used to cover either tuition and fees or room and board,” and all scholarships carry a monthly stipend and an annual book payment at amounts Cadet Command publishes on its page. The either/or structure is the standing fact; the amounts are Cadet Command's to update and are not restated here.",
            "SMP is an Army ROTC construct. NROTC and AFROTC publish NO equivalent — this section says so on their cards rather than implying parity.",
          ],
          links: [
            { label: "Cadet Command — Current Cadets", url: "https://armyrotc.army.mil/current-cadets/" },
            { label: "GoArmy — ROTC", url: "https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/rotc" },
          ],
          source: "U.S. Army Cadet Command · GoArmy ROTC",
        },
      ],
    },
    {
      key: "nrotc",
      label: "NROTC",
      tileSub: "NSTC — Navy, Marine, and Nurse options; CORTRAMID; the College Program",
      intro:
        "NROTC is run by Naval Service Training Command (NSTC) and is, per NSTC, the largest single source of Navy and Marine Corps officers. One program, three published options — and a no-scholarship track (the College Program) with its own contracting gate.",
      entries: [
        {
          id: "nrotc-main",
          name: "NROTC — options, scholarships, summer training, obligation",
          summary:
            "Midshipmen pursue one of three published options under one program: Navy Option, Marine Corps Option, and Nurse Option. New scholarship midshipmen begin with New Student Indoctrination (NSI) at Recruit Training Command, Great Lakes — a standardized entry militarization phase NSTC has run since 2019 — before reporting to their NROTC unit.",
          who: "Prospective Navy, Marine Corps, and Nurse officers at host colleges and cross-town affiliates.",
          body: [
            "Scholarship structure: the Four-Year National Scholarship (the national competition for graduating high school students) provides full tuition and educational fees, or room and board (NSTC publishes a per-year cap on the room-and-board alternative — a structure fact; the amount lives on NSTC's page and is not restated), plus stipends, uniforms, and three summer training cruises. Applicants list five NROTC college choices and must be admitted to at least one. Sideload (2- and 3-year) scholarships are awarded to students already in the program through unit nomination — the mechanism by which a non-scholarship entrant becomes a scholarship midshipman. NSTC's schools listing also designates “NROTC Preparatory Scholarships Schools” — a published preparatory-year channel into NROTC units (structure only; schools and terms on NSTC's page).",
            "The Marine Corps Option: the midshipman completes the same college program and commissions into the Marine Corps instead of the Navy. The summer pattern diverges after the shared first summer: Marine-option midshipmen spend the second-class summer in Fleet Marine Force training (published sites: Camp Pendleton, CA, or Camp Lejeune, NC) and the first-class summer at Officer Candidates School (OCS), Quantico, VA — which the Marine-option midshipman must complete to commission. Marine-option College Program midshipmen face a published hard gate the Navy option does not state the same way: Advanced Standing (or a scholarship) by the end of the second year, or disenrollment.",
            "Obligation, as NSTC publishes it: “Recipients serve eight years, with a minimum of five years active duty for Navy option or four years for Nurse option scholarships.” Marine Corps Option Scholarship Midshipmen “must serve at least four years on active duty.” Aviation communities extend the active-duty portion (longer obligations for Naval Aviators / Naval Flight Officers run from completion of flight training — structure noted; figures on the program pages). A national-scholarship recipient may withdraw before the first day of the sophomore year without obligation; continuing past the obligation point incurs enlisted-service-or-reimbursement liability on disenrollment.",
          ],
          bullets: [
            { title: "CORTRAMID — the NROTC first summer", text: "Career Orientation and Training for Midshipmen — the first summer (rising sophomores / 3/C), a month-long rotation through the Navy's unrestricted-line communities, run in two published locations: CORTRAMID West (San Diego, CA) and CORTRAMID East (Norfolk, VA). All midshipmen attend CORTRAMID first — including Marine-option midshipmen." },
            { title: "PROTRAMID is NOT an NROTC event — name discipline", text: "PROTRAMID (Professional Training for Midshipmen) is the NAVAL ACADEMY's second-class summer program (per OPNAV Notice 1530, the annual Midshipman Summer Training Plan). CORTRAMID = NROTC 3/C; PROTRAMID = USNA 2/C. The two are never merged in this app." },
            { title: "Second- and first-class summers", text: "2/C — Navy option: an enlisted-experience fleet cruise; Marine option: FMF training. 1/C — Navy option: an officer-experience fleet cruise in the prospective community; Marine option: OCS Quantico." },
          ],
          flags: [],
          links: [
            { label: "NSTC — NROTC", url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/NROTC/" },
            { label: "NSTC — Four-Year National Scholarship", url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/NROTC/Prospective-Midshipmen/Scholarship-and-Non-Scholarship-Options/Four-Year-National-Scholarship/" },
          ],
          source: "Naval Service Training Command (netc.navy.mil)",
        },
        {
          id: "nrotc-college-program",
          name: "NROTC College Program — the no-scholarship path, Basic vs. Advanced Standing",
          summary:
            "Students not awarded a national scholarship (or who join after the window) enroll as College Program midshipmen: they do everything scholarship midshipmen do in the unit — coursework, drill, PT — without the tuition scholarship, and they compete for sideload scholarships and for Advanced Standing. Advanced Standing is the College Program's contracting gate: a midshipman granted Advanced Standing receives the stipend and incurs the service obligation; without Advanced Standing (or a scholarship) by the published point — end of the junior-year progression for Navy option, end of the SECOND year for Marine option — the midshipman is disenrolled from the commissioning path.",
          who: "College Program midshipmen — and students deciding whether to join NROTC without a scholarship in hand.",
          body: [
            "The mechanics as NSTC now publishes them (NSTC M-1533.2F, Regulations for Officer Development, Feb 5, 2025, and NSTC's College Program page on netc.navy.mil): College Program midshipmen hold Basic Standing; selection for Advanced Standing is made by NSTC or, for Marine-option midshipmen, Marine Corps Recruiting Command. On entering Advanced Standing the midshipman signs the Advanced Standing Agreement and enlists in the Navy or Marine Corps Reserve; the subsistence allowance is paid in the final two years.",
            "College Program midshipmen historically do not attend the summer cruises until selected for Advanced Standing/scholarship; unit pages state this plainly.",
          ],
          flags: [
            "Sourcing level, printed as the pack states it: the College Program's obligation figures — an eight-year commissioned obligation with a shorter published active-duty minimum (at least three years active for Advanced Standing) — print at unit-publication level of NSTC policy. Confirm against NSTC's current College Program page before relying on the numbers.",
          ],
          links: [
            { label: "NSTC — NROTC", url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/NROTC/" },
            { label: "Columbia University NROTC FAQ (unit publication)", url: "https://rotc.columbia.edu/content/nrotc-program-faqs" },
          ],
          source: "NSTC M-1533.2F (Feb 5, 2025) · NSTC College Program page (netc.navy.mil) — build-time verification (b): CONFIRMED",
        },
      ],
    },
    {
      key: "afrotc",
      label: "AFROTC",
      tileSub: "GMC → Field Training → POC; HSSP / ICSP / CMLA — scholarships at the flagged level",
      intro:
        "AFROTC commissions officers for BOTH the Air Force and the Space Force — there is no separate Space Force ROTC; a cadet's service is determined in the program's later phase. Its scholarship naming is in transition (see the flag on the card) — program names print primary, Type labels as the detachment-published categories, and no Type dollar table ships.",
      entries: [
        {
          id: "afrotc-main",
          name: "AFROTC — GMC, Field Training, the POC, and the scholarship programs",
          summary:
            "Two courses divided by a competitive gate: the General Military Course (GMC) — the first two years (AS100/AS200), open enrollment, NO commitment — and the Professional Officer Course (POC) — the final two years (AS300/AS400) — entered only by cadets selected for and completing Field Training, at which point cadets contract. All POC cadets are contracted and receive the monthly stipend whether or not they hold a scholarship. Cadets take the AFOQT (Air Force Officer Qualifying Test) as part of progression. “You do not need to receive a scholarship to be a cadet.”",
          who: "Prospective Air Force and Space Force officers at civilian colleges.",
          body: [
            "Scholarship programs (names primary): the High School Scholarship Program (HSSP) — for high school seniors, in four-year and three-year lengths (three-year awards activate sophomore year); the In-College Scholarship Program (ICSP) — for cadets already in the program (freshman/sophomore), nominated through the detachment; and the Charles McGee Leadership Award (CMLA) — named for Brig. Gen. Charles McGee, Tuskegee Airman: a two-year award for the POC years. As detachments publish it, cadets who complete Field Training, enter the POC, meet eligibility requirements, and do not already hold a scholarship receive the CMLA — the mechanism that puts (nearly) every contracted POC cadet on some award. Enlisted commissioning scholarships on afrotc.com's menu (SOAR / ASCP / POC-ERP / NECP) are serving-member programs — Commissioning from the Ranks.",
            "Field Training — the competitive heart of AFROTC: GMC cadets compete through the POC Selection Process on GPA, AFOQT scores, fitness assessment, and commander ranking for a Field Training allocation. Field Training is the summer evaluation encampment at Maxwell AFB, Montgomery, AL, held between the sophomore and junior years. Cadets contract before departing for Field Training; successful completion admits the cadet to the POC and triggers CMLA eligibility. A cadet not selected for Field Training does not continue to the POC — that is the program's published cut point. (No duration prints: official detachment pages variously state about two weeks, 20 days, and three weeks — see flag.)",
            "Obligation, as AFROTC publishes it: “After completing all Air Force ROTC and academic degree requirements, cadets accept a commission as second lieutenants in the Air Force or Space Force… Most officers have a four-year, active-duty service commitment. Pilots have a 10-year active-duty service commitment, and Combat Systems Officers and Air Battle Managers have a six-year service commitment, upon completion of their respective training.” Nursing graduates serve four years on active duty after completing their licensing examination.",
            "The no-scholarship path converges at Field Training: register for GMC classes with no commitment until entry into the POC (or earlier scholarship contracting), compete for Field Training and ICSP, and — via the CMLA — a cadet who reaches the POC without a scholarship is awarded the CMLA if eligible.",
          ],
          flags: [
            "CONFLICT / TRANSITION (build-time verification (a)): afrotc.com's scholarship framing is in transition. The re-pulled pages were stale crawls (2024) showing the landing split (High School / College / Enlisted) and Type 1 (high-school page), Type 1 / Type 2 / ICSP / CMLA (college page) — the current capped-vs.-uncapped framing could NOT be confirmed from the served copy. This card therefore ships at the flagged level: program names primary (HSSP, ICSP, CMLA); the legacy Type labels (Type 1 full tuition/fees, Type 2 capped, Type 7 in-state public rate — several detachment pages now also list a Type 4) print as DETACHMENT-PUBLISHED award categories; the capped/uncapped transition is noted here as a flag. NO Type dollar table and NO Type cap amounts are restated — caps live on the official pages; route to them.",
            "Field Training duration is NOT printed: detachment pages variously print two weeks, 20 days, and three weeks. This card prints the event, the place (Maxwell AFB), and its position in the program only.",
            "SMP: AFROTC has NO Simultaneous Membership Program — SMP is an Army ROTC construct. A Guard/Reserve member in AFROTC participates under the component's own rules and contracts into the POC like any other cadet; no AFROTC page publishes an SMP-style dual-status program.",
          ],
          links: [
            { label: "AFROTC (afrotc.com)", url: "https://www.afrotc.com/" },
            { label: "VMI AFROTC Scholarships (detachment publication)", url: "https://www.vmi.edu/rotc/airforce/afrotc-scholarships-assistance/" },
          ],
          source: "AFROTC (afrotc.com) · official detachment publications (UWF catalog, SLU Det 207, VMI, Baylor Det 810)",
        },
      ],
    },
    {
      key: "cg-route",
      label: "Coast Guard — No ROTC",
      tileSub: "The negative entry: there is no CG ROTC — the route is the Academy or CSPI",
      intro:
        "Printed as a one-line negative finding so the future-member area never sends a student hunting for a “Coast Guard ROTC” that does not exist.",
      entries: [
        {
          id: "cg-no-rotc",
          name: "There is no Coast Guard ROTC",
          summary:
            "The Coast Guard runs NO ROTC program. Its college commissioning routes are the Academy (the Academies tile — the one academy with no nomination) and the College Student Pre-Commissioning Initiative (CSPI) — a scholarship-through-the-last-two-years route ending at OCS — covered in Joining's officer content and, for serving members, Commissioning from the Ranks.",
          who: "Prospective Coast Guard officers looking for a college route.",
          body: [],
          flags: [],
          links: [{ label: "GoCoastGuard — Officer Applications", url: "https://www.gocoastguard.com/get-started/officer-applications" }],
          source: "GoCoastGuard.com · pack negative finding",
        },
      ],
    },
    {
      key: "compare",
      label: "Academy vs. ROTC vs. OCS",
      tileSub: "Structure only — no ranking, no recommendation",
      intro:
        "The three sources produce officers for the same services, and the services set the graduate's first obligations by source as published in the tiles above. OCS/OTS detail lives in Joining's Becoming an Officer content; this table is the structural comparison only.",
      entries: [
        {
          id: "rotc-comparison",
          name: "Academy vs. ROTC vs. OCS — the structural comparison",
          summary:
            "When you enter, which college, how you get in, what funds it, what the summer training is called, the obligation shape, and when the commission arrives — compared across the three sources, with no ranking and no recommendation.",
          who: "Prospective students and families weighing the doors.",
          body: [
            "Switching between sources mid-course (e.g., an ROTC cadet later applying to an academy) is not a published program in any source retrieved — it happens by applying to the other source under its own rules, and this section prints no pathway for it.",
          ],
          tables: [
            {
              caption: "Academy vs. ROTC vs. OCS (structure only)",
              columns: ["Dimension", "Service Academy", "ROTC", "OCS / OTS"],
              rows: [
                ["When you enter", "Before college — application runs through high school junior/senior year (or from the enlisted ranks)", "During college — at entry as a freshman, or later (lateral entry, College Program, GMC)", "After the degree — bachelor's in hand (or, for some routes, within months of completion)"],
                ["The college", "The federal academy itself; one institution, full military regime, degree and commission in one package", "A civilian college/university of the student's admission, with a military program layered on", "None — college is already complete"],
                ["How you get in", "Academy application plus (at 4 of 5) a nomination; academy board offers the appointment; DoDMERB + CFA (PFE at USCGA)", "College admission plus unit enrollment; scholarship competitions are national or campus boards; contracting is the binding gate", "Service selection board on the degree-holder's file, via a recruiter / OSO / accessions center"],
                ["What it costs / funding", "Federally funded education in exchange for the service obligation (each academy's published terms)", "Scholarship (tuition or room-and-board structures per program) or non-scholarship participation with a later stipend at contracting", "No college funding — the degree was financed outside the route"],
                ["Summer / military training", "Academy-run summer programs each year (e.g., USNA PROTRAMID; academy-specific)", "Named national evaluations: Army Advanced Camp, NROTC CORTRAMID + cruises (Marine option: OCS), AFROTC Field Training", "The candidate school itself is the training (durations per branch in Joining's officer content)"],
                ["Obligation shape", "At least 5 years active duty at the DoD/CG academies (plus reserve tail as published); USMMA: 5 years maritime/active + 8 years reserve commission + 6 years license", "8-year total obligation in Army/NROTC structures (active-duty minimums: Army 4, Navy option 5, Marine option 4); AFROTC: 4 years active duty for most officers, longer for rated careers", "Set by the commissioning program/community, not by a college contract — see Joining per branch"],
                ["Commission", "On graduation day, from the academy", "On graduation (completion of degree + program requirements)", "On graduation from the candidate school"],
                ["Who it's structurally for", "A student who wants the immersive federal-college route and can clear the nomination + appointment competition before college starts", "A student who wants a civilian college experience with a military program, with or without a scholarship", "A graduate who decided (or was selected) after college"],
              ],
            },
          ],
          flags: [],
          links: [],
          source: "Pack §5 comparison (structure only)",
        },
      ],
    },
  ],
};
