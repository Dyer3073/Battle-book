// Commissioning from the Ranks — transcribed from the researched
// pack (~/workspace/military-app/commissioning/commissioning.md,
// researched Nov 9, 2026). The pack is the content source of truth:
// its 39 named routes (Part 1 entries 1–26, Part 2 entries 27–38
// plus the discontinued Flying CWO documented as closed), its
// Part 3 finding (entries 39–43 — mechanisms, ZERO of which are
// programs), its verdicts, its conflicts, and its exclusions are
// binding. Program facts print as the official pages publish them;
// ⚠ flags print visibly as flags — never blended, never silently
// resolved. NO board dates, quotas, or selection rates print
// anywhere: every card routes to the current announcement
// (MILPER / MARADMIN / NAVADMIN / ALCGPSC / program announcement),
// which controls where it differs from the standing rules here.
//
// VERDICTS HONORED EXACTLY (the pack's status register):
// - STA-21 (entry 15) ships VERIFIED ACTIVE — FY26 solicitation
//   NAVADMIN 019/25 + Program Authorizations reissued 2025.
// - Air Force warrants (entry 35) ship NEW / EVOLVING: governed by
//   interim AFGM2026-36-2033 (Feb 4, 2026), which states it becomes
//   void one year after its date — the void date prints on the card.
// - Navy Flying CWO is boxed CLOSED (terminated by NAVADMIN 192/13,
//   Aug 1, 2013) — never presented as a route.
// - Officer → Enlisted (Part 3) ships the honest finding: ZERO
//   dedicated programs in any service; the real mechanisms are
//   separation → prior-service enlistment + a fresh grade
//   determination, plus the USMC IST-adjacent/warrant findings.
// - Coast Guard CWO + PPEP numeric gates are WITHHELD: the pack
//   located the commonly quoted minima only in unofficial
//   reproductions, so no numbers print — the cards route to the
//   current PSC appointment / application guides.
// - Space Force warrant (entry 38) is a VERIFIED NEGATIVE from the
//   Space Force's own publications — no "Space Force warrant" route
//   prints in any form.
// - Active-component Marine MCP is NOT in the current (CY26) board
//   lineup; entry 9 ships MCP-R only, flagged.

import type { RefLink } from "./refdata";

/** App view keys this section cross-links into (never duplicates). */
export type CommViewKey =
  | "officer"
  | "switchbranches"
  | "education"
  | "components"
  | "changejob";

export type CommCrossLink = { label: string; view: CommViewKey };

export type CommBullet = { title?: string; text: string };

/** A verdict box rendered at the top of the card, before the body.
 * "active" = verified live program · "closed" = discontinued, boxed
 * as closed · "new" = new/evolving program · "negative" = verified
 * no-program finding · "withheld" = figures deliberately not printed. */
export type CommVerdict = {
  kind: "active" | "closed" | "new" | "negative" | "withheld";
  label: string;
  text: string;
};

export type CommEntry = {
  /** Stable id, "e1"…"e43" (+ "flying-cwo") — also the Binder item key. */
  id: string;
  /** The pack's entry number; 0 for the unnumbered Flying CWO box. */
  n: number;
  name: string;
  branch: string;
  /** The pack's Section 2 sorting: where this route sits on the degree. */
  degree: "Degree in hand" | "Degree built in" | "No degree required" | "Not a program";
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  who: string;
  body: string[];
  bullets?: CommBullet[];
  flags: string[];
  links: RefLink[];
  source: string;
  verdict?: CommVerdict;
  crossLinks?: CommCrossLink[];
};

export type CommTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: CommEntry[];
};

export const COMM_INTRO =
  "Three doors, and they are structurally different. Enlisted → Commissioned Officer: you attend a commissioning source — candidate school, an academy, or ROTC — and take a commission; the fork inside this door is the degree (some routes require a finished bachelor's in hand, others build the degree into the program). Enlisted → Warrant Officer: a separate corps with its own boards and prerequisites — and in the technical fields, no bachelor's degree requirement at all. It is not a consolation prize; it is its own door. Officer → Enlisted: there is no conversion program — that tile documents the honest finding and the real mechanisms, because inventing a program here would be the worst kind of wrong.";

export const COMM_STANDING =
  "Standing warning, printed once and applied on every card: the eligibility figures here are the published standing rules (orders, instructions, program pages). Every board cycle publishes its own announcement, and the announcement CONTROLS where it differs — the Navy's LDO/CWO NAVADMINs say exactly that, and the Marine Corps changed a warrant eligibility rule by message in 2025 ahead of its order's revision. Treat any figure here as the frame, and the current cycle's message as the answer. No board dates, quotas, or selection rates print anywhere in this section — they change per cycle and live in the current announcement.";

export const COMM_DEGREE_NOTE =
  "The degree reality — the single most useful sorting fact in this whole area, printed on every Part 1 card as a tag: DEGREE IN HAND (a finished bachelor's is required before you commission — Army in-service OCS, Marine ECP, Navy fleet OCS, Air Force OTS, Coast Guard OCS) · DEGREE BUILT IN (you earn it as part of the route — Green to Gold, MECEP, STA-21, SOAR/ASCP/POC-ERP, NECP, SLECP-A, PPEP, CSPI, and the academies) · NO DEGREE REQUIRED (every warrant route — the Army's published administrative requirements ask for a high school diploma/GED, not a degree). Building the degree while you serve — tuition assistance, CLEP/DSST, degree plans — lives in the Education Planner.";

const MCRC_PAGE: RefLink = {
  label: "MCRC — Naval & Enlisted Programs",
  url: "https://www.mcrc.marines.mil/marine-officer/officer-naval-enlisted-applicants/",
};
const CY26_EO: RefLink = {
  label: "CY26 Enlisted-to-Officer Announcement (MARADMIN)",
  url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4315032/calendar-year-2026-cy26-marine-corps-recruiting-command-enlisted-to-officer-ann/",
};
const G2G_PAGE: RefLink = {
  label: "U.S. Army Cadet Command — Green to Gold",
  url: "https://armyrotc.army.mil/green-to-gold/",
};
const AFCOMMISSIONING: RefLink = {
  label: "AirForce.com — Commissioning Programs",
  url: "https://www.airforce.com/education/continuing-education",
};
const CG_OFFICER_APPS: RefLink = {
  label: "GoCoastGuard — Officer Applications",
  url: "https://www.gocoastguard.com/get-started/officer-applications",
};
const AWOR_BASIC: RefLink = {
  label: "USAREC Warrant Officer Recruiting — Basic Qualifications",
  url: "https://recruiting.army.mil/ISO/AWOR/BASIC_QUALIFICATION/",
};
const DAFMAN_36_2032: RefLink = {
  label: "DAFMAN 36-2032 (enlisted commissioning, Ch. 10)",
  url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafman36-2032/dafman36-2032.pdf",
};
const NAVY_LDO_CWO_PAGE: RefLink = {
  label: "MyNavyHR — LDO/CWO Applicant Information",
  url: "https://www.mynavyhr.navy.mil/Career-Management/Community-Management/Officer/Active-OCM/LDO-CWO/Applicant-Information/",
};

/* ---------------- Tile 1 — Enlisted → Commissioned Officer --------------- */

const TILE_OFFICER: CommTile = {
  key: "enlisted-officer",
  label: "Enlisted → Officer",
  tileSub: "Entries 1–26 · commissioning sources, academies, ROTC routes",
  intro:
    "The commissioned-officer door, branch by branch. The Marine Corps runs its programs under MCO 1040.43B through MCRC selection boards announced by MARADMIN; the Navy's fleet routes run under OPNAVINST 1420.1B; the Department of the Air Force publishes its enlisted commissioning programs in DAFMAN 36-2032, Chapter 10 (Guardians use the same DAF doors). Every card carries its degree tag — in hand, built in, or (for LDO) not a degree route at all.",
  entries: [
    {
      id: "e1",
      n: 1,
      name: "Army — In-Service Officer Candidate School (OCS)",
      branch: "Army",
      degree: "Degree in hand",
      summary:
        "In-service OCS Army: the degree-in-hand door under AR 350-51 (15 May 2026) — GT 110, a SECRET clearance HELD at application, a bachelor's, and ineligibility at 10+ years AFS or over age 40 at appointment. GoArmy's recruiter-channel figures are a different door and print as a conflict, not a blend.",
      who: "Enlisted Soldiers with a finished bachelor's who want a direct commission path without leaving service to do ROTC.",
      body: [
        "The Army's degree-in-hand door for serving Soldiers: enlisted applicants apply for OCS under AR 350-51, United States Army Officer Candidate School (15 May 2026, effective 15 June 2026), which by its purpose statement “prescribes the policies, eligibility requirements, and administrative procedures for submitting and processing applications for In-Service Officer Candidate School.” The school itself — 12 weeks at Fort Benning, commissioning as a Second Lieutenant followed by BOLC — is covered in Becoming an Officer; what differs for serving members is the in-service gate, published in AR 350-51 ¶1-7.",
      ],
      bullets: [
        { title: "Citizenship", text: "U.S. citizenship required." },
        { title: "GT score", text: "110 or higher on the ASVAB." },
        { title: "Clearance", text: "A SECRET security clearance held at time of application — stronger than the recruiting page's “eligible for a clearance.”" },
        { title: "Degree", text: "A bachelor's degree from a regionally accredited college or university." },
        { title: "Service / age ceiling", text: "Ineligible at 10 or more years of Active Federal Service, or if the applicant would be over 40 years of age when appointed." },
      ],
      flags: [
        "CONFLICT (carried from the Joining research, still live): GoArmy's public OCS page publishes a different frame for recruiter-channel applicants (ages 19–32, ship by 33rd birthday, no more than six years AFS on arrival, clearance eligibility). The two documents govern different doors into the same school — the regulation governs in-service applications — and both are printed rather than blended. A serving Soldier follows AR 350-51.",
      ],
      links: [
        {
          label: "AR 350-51 — Officer Candidate School (Army Publishing Directorate)",
          url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN42743-AR_350-51-000-WEB-1.pdf",
        },
      ],
      source: "AR 350-51 (15 May 2026), ¶1-7",
      crossLinks: [{ label: "The school itself → Becoming an Officer", view: "officer" }],
    },
    {
      id: "e2",
      n: 2,
      name: "Army — Green to Gold: Scholarship Option",
      branch: "Army",
      degree: "Degree built in",
      summary:
        "Green to Gold Scholarship Option Army: 2-, 3-, or 4-year ROTC scholarships for active-duty Soldiers who LEAVE active duty (discharged, active-duty pay and benefits forfeited) for a funded degree + commission — full tuition or room and board (capped), book payment, monthly stipend, 8-year post-commissioning obligation.",
      who: "Active-duty Soldiers willing to leave active duty and live as a scholarship cadet in exchange for a funded degree + commission.",
      body: [
        "Green to Gold (G2G) is the Army's ROTC-based family of programs for active-duty enlisted Soldiers, run by U.S. Army Cadet Command: “designed to offer Active Army Enlisted Soldiers the opportunity to earn a commission as Army Officers” through participation in ROTC while earning a baccalaureate or graduate degree. The Scholarship Option (2-, 3-, or 4-year scholarships) is for Soldiers leaving active duty to attend college: per Cadet Command's program page, the selectee is discharged from active duty and forfeits active-duty pay and benefits, receiving full tuition or room and board (capped), a flat-rate book payment, and a monthly stipend. Scholarship selectees incur an 8-year post-commissioning service obligation (per the June 2026 ADO/G2G information booklets).",
        "Published gates on the program page include: minimum two years of active duty (and three months of active duty for every one month of specialized training — waiverable), and for Scholarship/Hip-Pocket applicants, under 31 years of age on 31 December of the year all commissioning requirements are complete — the page states this age rule is statutory with no waivers authorized.",
      ],
      flags: [],
      links: [G2G_PAGE],
      source: "U.S. Army Cadet Command — Green to Gold program page; June 2026 G2G information booklets",
    },
    {
      id: "e3",
      n: 3,
      name: "Army — Green to Gold: Active Duty Option (ADO)",
      branch: "Army",
      degree: "Degree built in",
      summary:
        "Green to Gold Active Duty Option (ADO) Army: the option that KEEPS the Soldier on active duty — a 21-month (two-academic-year) program, full active-duty pay and allowances continue, first bachelor's or first master's completed full-time through ROTC, entering as an academic junior or graduate student.",
      who: "Soldiers with roughly two years of college (or a bachelor's and a master's goal) who cannot afford to give up active-duty pay.",
      body: [
        "The ADO is the Green to Gold option that keeps the Soldier on active duty: per Cadet Command's June 2026 ADO booklet, the participant remains on active duty for a 21-month (two-academic-year) program, entering as an academic junior or as a graduate student, and continues to receive full active-duty pay and allowances while completing a first bachelor's or first master's degree full-time through ROTC.",
        "The booklet's published gates include at least two years of active duty and less than ten years at projected commissioning, the same 3-months-per-month-of-training rule (waiverable), and commissioning before age 34 (waiverable).",
      ],
      flags: [
        "The ADO booklet's age figure (commissioning before 34, waiverable) differs from the Scholarship/Hip-Pocket figure in entry 2 (under 31, statutory, no waivers) because they are different options with different published rules — do not carry one option's numbers into another.",
      ],
      links: [G2G_PAGE],
      source: "U.S. Army Cadet Command — Green to Gold ADO booklet (June 2026)",
    },
    {
      id: "e4",
      n: 4,
      name: "Army — Green to Gold: Non-Scholarship Option",
      branch: "Army",
      degree: "Degree built in",
      summary:
        "Green to Gold Non-Scholarship Option Army: leaving active duty for ROTC with a monthly stipend but NO tuition scholarship attached — a locally managed option; the ROTC Recruiting Operations Officer (ROO) at your school of intent is the source for the details.",
      who: "Soldiers leaving active duty for ROTC who will fund tuition from other sources (e.g., GI Bill) and want the stipend + commissioning path.",
      body: [
        "Cadet Command's page describes the Non-Scholarship Option in one line: it is “for Soldiers who are considering leaving Active Duty to attend college while receiving a monthly stipend,” and it is a locally managed option — Soldiers are directed to contact the Army ROTC Recruiting Operations Officer (ROO) at their school of intent for the details. Like the Scholarship Option it runs through discharge and ROTC participation; unlike it, there is no tuition scholarship attached.",
      ],
      flags: [
        "Detail beyond that framing is not published centrally — the ROO at the school is the source, and this card prints nothing further rather than borrowing the Scholarship Option's terms.",
      ],
      links: [G2G_PAGE],
      source: "U.S. Army Cadet Command — Green to Gold program page",
    },
    {
      id: "e5",
      n: 5,
      name: "Army — Green to Gold: Division Commander's Hip Pocket Scholarship",
      branch: "Army",
      degree: "Degree built in",
      summary:
        "Green to Gold Hip Pocket Scholarship Army: the commander-nominated branch of the scholarship family — division commanders hold the scholarships, so the nomination starts with your chain of command, not an open application window. The under-31 statutory age rule applies to Hip Pocket applicants as published.",
      who: "Soldiers whose command is prepared to nominate them; the first step is a conversation with the chain of command, not a portal.",
      body: [
        "The Hip Pocket program is the commander-nominated branch of the scholarship family: Cadet Command publishes it as the “Green to Gold Division Commander's Hip Pocket Scholarship Program,” which “provides selected Soldiers the opportunity to complete their baccalaureate degree requirements and obtain a commission through participation in the ROTC Scholarship program.” Division commanders hold the scholarships — the nomination starts with your chain of command, not an open application window — and the Scholarship/Hip-Pocket information booklet is the governing document (the under-31 statutory age rule in entry 2 applies to Hip Pocket applicants as published).",
      ],
      flags: [],
      links: [G2G_PAGE],
      source: "U.S. Army Cadet Command — Green to Gold; Scholarship/Hip-Pocket information booklet",
    },
    {
      id: "e6",
      n: 6,
      name: "Army — U.S. Military Academy: Soldier Admissions",
      branch: "Army",
      degree: "Degree built in",
      summary:
        "West Point Soldier admissions: by law (Title 10) USMA reserves appointments for qualified U.S. Army Soldiers — active duty, Reserve, or National Guard — through the Soldier Admissions Program. Ages 17–22 on July 1 of the admission year; a company commander can nominate; USMAPS is the automatic fallback consideration.",
      who: "Young enlisted Soldiers inside the 17–22 age window who want the academy route; the age ceiling closes this door early, which is why it is summary-level here.",
      body: [
        "By law (Title 10, U.S. Code), West Point reserves appointments for qualified U.S. Army Soldiers — active duty, Army Reserve, or National Guard — admitted directly each year through the Soldier Admissions Program. USMA's page for current Soldiers publishes the frame: applicants must be U.S. citizens, 17–22 years old on July 1 of the year of admission, medically fit (DoDMERB), and obtain a nomination — Soldiers can be nominated by their company commander, and are encouraged to also pursue congressional nominations. Soldiers not directly admitted are automatically considered for the U.S. Military Academy Preparatory School (USMAPS).",
        "Two published mechanics worth printing: the Soldier's current enlisted obligation continues through the end of the first academy year, and enlisted time counts toward retirement until beginning at USMA; on commissioning, the standard eight-year commitment (5 active / 3 reserve) applies, same as non-prior-service cadets.",
      ],
      flags: [],
      links: [
        {
          label: "USMA — Admission Information for Soldiers",
          url: "https://westpoint.edu/admissions/steps-to-admission/current-soldiers",
        },
      ],
      source: "U.S. Military Academy — Admission Information for Soldiers; Title 10, U.S. Code",
    },
    {
      id: "e7",
      n: 7,
      name: "Marine Corps — Enlisted Commissioning Program (ECP)",
      branch: "Marine Corps",
      degree: "Degree in hand",
      summary:
        "ECP Marine Corps: for enlisted Marines who have ALREADY earned their undergraduate degree — Lance Corporal or above, at least one year of time in service, and an aptitude qualifier (AFQT 74, ACT 22, or SAT 1000). The 10-week OCS at Quantico, commission on graduating, then TBS.",
      who: "Enlisted Marines who finished a degree before or during service — the fastest Marine enlisted-to-officer door, because no schooling stands between selection and commissioning.",
      body: [
        "The Marine Corps runs its enlisted-to-officer programs under MCO 1040.43B, Enlisted to Officer Commissioning Programs, administered by Marine Corps Recruiting Command (MCRC), with selection boards announced by MARADMIN. MCRC's framing of ECP is exact: it is “designed for outstanding enlisted Active Duty or Active Reserve Marines who have already earned their undergraduate degree.” Selected Marines attend the 10-week Officer Candidates School (OCS) at Quantico, commission as Second Lieutenants on graduating OCS, accept a permanent appointment in the Regular component, and report to The Basic School (TBS).",
        "Published eligibility (MCRC program material under MCO 1040.43B): Lance Corporal or above with at least one year of time in service, a bachelor's from an accredited institution, and at least one aptitude qualifier — AFQT 74, ACT 22, or SAT 1000 (combined Math + Critical Reading).",
      ],
      flags: [],
      links: [
        MCRC_PAGE,
        {
          label: "MCRC — ECP story (program framing and qualifiers)",
          url: "https://www.mcrc.marines.mil/In-the-News/Stories/Article/Article/625628/ecp-enlisted-to-officer/",
        },
      ],
      source: "MCO 1040.43B; MCRC program material",
    },
    {
      id: "e8",
      n: 8,
      name: "Marine Corps — MECEP (Enlisted Commissioning Education Program)",
      branch: "Marine Corps",
      degree: "Degree built in",
      summary:
        "MECEP Marine Corps: the degree-built-in mirror of ECP — OCS FIRST, then full-time university at an NROTC school while remaining on active duty (pay and benefits continue), commissioning on graduation with the degree. The order's frame is Sergeant or above with 3+ years active service and a no-waiver college-credit block.",
      who: "Career-track enlisted Marines without a degree who want the Corps to fund finishing it on active duty.",
      body: [
        "MECEP is the mirror image of ECP: for enlisted Marines who “have not yet completed their degree but have demonstrated academic potential by completing several college courses.” The published sequence is distinctive and printed crisply because applicants routinely get it backwards: OCS comes FIRST. The selectee completes the 10-week OCS, then attends a university with an NROTC program full-time while remaining on active duty (active-duty status, pay, and benefits continue), and commissions as a Second Lieutenant upon graduating with the degree, then proceeds to TBS. The degree-completion window runs up to roughly four years of full-time study.",
        "Published gates: the governing order's frame is Sergeant or above with at least three years of active service and a minimum block of college credit (12 semester hours with a published math/science + English composition — no waivers on the credit block). One more published trap: a MECEP Marine who earns the bachelor's degree early is disenrolled from MECEP and must reapply under ECP (stated in MCRC board results messages).",
      ],
      flags: [
        "ORDER-vs-MESSAGE TENSION, printed as found: the CY26 E-O announcement MARADMIN states the rank requirement for MECEP as Corporal or above, below the order's Sergeant floor. The current MARADMIN controls for the current cycle — but verify rank eligibility against the announcement for the board you are actually applying to, not against either figure quoted here.",
      ],
      links: [MCRC_PAGE, CY26_EO],
      source: "MCO 1040.43B; CY26 E-O Announcement MARADMIN",
    },
    {
      id: "e9",
      n: 9,
      name: "Marine Corps — Meritorious Commissioning Program, Reserve (MCP-R)",
      branch: "Marine Corps",
      degree: "Degree built in",
      summary:
        "MCP-R Marine Corps: the Meritorious Commissioning Program survives ONLY in Reserve form — SMCR/IRR Marines, Corporal or above, with an associate degree or 75+ semester hours, on a CO's nomination, commissioning into the SMCR without a completed bachelor's (degree due before promotion to Captain). There is NO active-component MCP in the current lineup.",
      who: "Reserve Marines with substantial college credit and a CO's nomination who want to commission into the SMCR.",
      body: [
        "The Meritorious Commissioning Program survives in the current board lineup only in its Reserve form. MCP-R selects Selected Marine Corps Reserve / IRR Marines — Corporal or above per the published board announcements — who hold an associate degree or at least 75 semester hours toward a bachelor's, on a commanding officer's nomination, and commissions them into the SMCR without a completed bachelor's; the degree must be completed before promotion to Captain.",
      ],
      flags: [
        "CURRENCY FLAG: MCP existed historically as an active-component program in the MCO 1040.43B lineage, and older MCRC material describes eliminating the active-duty MCP (an MCRC article on the FY12 process changes announced exactly that). The current (CY26) board lineup includes MCP-R and RECP — not an active MCP. Do not present “MCP” to an active-duty Marine as an open door.",
      ],
      links: [CY26_EO],
      source: "CY26 E-O Announcement MARADMIN; MCO 1040.43B lineage",
    },
    {
      id: "e10",
      n: 10,
      name: "Marine Corps — Reserve Enlisted Commissioning Program (RECP)",
      branch: "Marine Corps",
      degree: "Degree in hand",
      summary:
        "RECP Marine Corps: the Reserve companion to ECP — SMCR and IRR enlisted Marines, Corporal or above, meeting the MCO 1040.43B education requirements, applying through the same E-O selection boards and commissioning into the Reserve component via OCS. In the current CY26 lineup alongside ECP, MECEP, and MCP-R.",
      who: "Drilling and IRR Marines seeking a Reserve commission through the E-O board system.",
      body: [
        "RECP is the Reserve companion to ECP: enlisted Marines of the Selected Marine Corps Reserve and IRR — Corporal or above as published in the board announcements — who meet the MCO 1040.43B education requirements from accredited institutions apply through the same E-O selection boards and commission into the Reserve component via OCS. It appears in the current CY26 lineup alongside ECP, MECEP, and MCP-R.",
      ],
      flags: [],
      links: [CY26_EO],
      source: "CY26 E-O Announcement MARADMIN; MCO 1040.43B",
    },
    {
      id: "e11",
      n: 11,
      name: "Marine Corps — Enlisted Marine Option NROTC Scholarship",
      branch: "Marine Corps",
      degree: "Degree built in",
      summary:
        "Enlisted Marine Option NROTC Scholarship: a four-year NROTC scholarship for enlisted Active Duty and Ready Reserve Marines, solicited by its own MARADMIN (FY26: MARADMIN 295/25). Unlike MECEP, selectees transfer to the IRR before executing orders to their NROTC unit — this route does NOT keep the Marine on active duty.",
      who: "Enlisted Marines who want the full four-year NROTC scholarship route and accept leaving active-duty status to take it.",
      body: [
        "Separate from the MCRC E-O boards, enlisted Marines may compete for the Enlisted Marine Option NROTC Scholarship, solicited by its own MARADMIN (FY26: MARADMIN 295/25). The published structure: qualified enlisted Active Duty and Ready Reserve Marines apply for a four-year NROTC scholarship, attend an NROTC-affiliated university, complete Naval Science courses and required summer training, complete OCS, and are appointed Second Lieutenant on graduation.",
        "Selected enlisted Marines are transferred to the IRR before executing orders to their NROTC unit (i.e., unlike MECEP, this route does not keep the Marine on active duty in student status). Published eligibility includes at least one year of time in service as of the cycle's cutoff and the standard NROTC scholarship age/test frame (17 by September 1 of the first college year; younger than 27 on December 31 of the anticipated graduation/commissioning year; qualifying SAT/ACT scores released to the program). Dollar figures for subsistence/tuition in the message are cycle-specific and are not printed here.",
      ],
      flags: [],
      links: [
        {
          label: "FY26 Enlisted Marine Option NROTC Scholarship (MARADMIN 295/25)",
          url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4225821/fiscal-year-2026-enlisted-marine-option-naval-reserve-officers-training-corps-s/",
        },
      ],
      source: "MARADMIN 295/25",
    },
    {
      id: "e12",
      n: 12,
      name: "Navy & Marine Corps — U.S. Naval Academy Enlisted Route",
      branch: "Navy / Marine Corps",
      degree: "Degree built in",
      summary:
        "USNA enlisted route (shared Navy + Marine Corps): up to 170 active and reserve personnel may be appointed to Annapolis each year under Secretary of the Navy nominations (ALNAV 044/26). Apply through your Commanding Officer — SECNAV-nomination candidates need a combined SAT 1050 or ACT equivalent 46; NAPS is the prep-school fallback.",
      who: "Young enlisted Sailors and Marines (academy age limits apply — see USNA's page) who want the Annapolis route.",
      body: [
        "Enlisted Sailors and Marines compete for the same fleet appointments to Annapolis: up to 170 active and reserve personnel may be appointed to USNA each year under Secretary of the Navy nominations (ALNAV 044/26; MARADMIN 343/26 for the Class of 2031). USNA's fleet-applicant page publishes the mechanics: apply through your Commanding Officer under OPNAVINST 1420.1B (Sailors) or MCO 1040.43B (Marines), with the CO's endorsement accompanying the application; SECNAV-nomination candidates need a combined SAT 1050 or ACT equivalent 46 (English + Math); recommendations come from the first officer in the chain, the Senior Enlisted Leader, and the CO rather than teachers; appointees must hold at least 24 months of obligated active service remaining as of July 1 of the entering year. Candidates not directly appointed may be considered for the Naval Academy Preparatory School (NAPS). The academy's Fleet Liaison (Candidate Guidance Office) is the published point of contact for both services.",
      ],
      flags: [],
      links: [
        {
          label: "USNA — Active Duty and Reserve Applicants",
          url: "https://www.usna.edu/Admissions/Apply/Active-Duty-Service-Applicants.php",
        },
        {
          label: "ALNAV 044/26 (SECNAV nominations, Class of 2031)",
          url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/ALNAV/ALN2026/ALN26044.pdf?ver=k-KIzQUv04GDgfGlvrP_Jg%3d%3d",
        },
      ],
      source: "USNA fleet-applicant page; ALNAV 044/26; OPNAVINST 1420.1B / MCO 1040.43B",
    },
    {
      id: "e13",
      n: 13,
      name: "Marine Corps — Enlisted to Judge Advocate Program (E-JA)",
      branch: "Marine Corps",
      degree: "Degree in hand",
      summary:
        "E-JA Marine Corps: the Enlisted to Judge Advocate Program, added in the CY26 E-O announcement and selected on the same E-O boards — Sergeant to Gunnery Sergeant, 4–8 years total active-duty time before beginning law school, a bachelor's with GPA 3.0 or better, and an LSAT of 150 or better, as the announcement publishes.",
      who: "Enlisted Marines targeting a Marine judge advocate commission via law school.",
      body: [
        "The CY26 E-O announcement adds a program the standard four-program summaries predate: the Enlisted to Judge Advocate Program (E-JA), selected on the same E-O boards. Published basic requirements in the announcement: the same base frame as ECP, plus Sergeant to Gunnery Sergeant, a minimum of four and not more than eight years of total active-duty time before beginning law school, a bachelor's from an accredited institution with a cumulative GPA of 3.0 or better, and an LSAT of 150 or better.",
      ],
      flags: [
        "The announcement text continues beyond the excerpt retrieved in research — treat the LSAT/GPA figures as published-in-announcement and verify the full requirement set in the current MARADMIN before relying on them.",
      ],
      links: [CY26_EO],
      source: "CY26 E-O Announcement MARADMIN",
    },
    {
      id: "e14",
      n: 14,
      name: "Navy — Officer Candidate School (Fleet Applicants)",
      branch: "Navy",
      degree: "Degree in hand",
      summary:
        "Navy OCS fleet applicants: the degree-in-hand door at Officer Training Command Newport (13 weeks), under OPNAVINST 1420.1B, through your command, for selection by the officer community you apply to — the community's Program Authorization, not a single Navy-wide standard, sets the specific gates. Degree-holders are routed here, NOT to STA-21.",
      who: "Enlisted Sailors holding a bachelor's who want to commission without a degree program in between.",
      body: [
        "For Sailors, OCS at Officer Training Command Newport (13 weeks — the school itself is covered in Becoming an Officer) is the degree-in-hand door, and the Navy's own STA-21 requirements page draws the line explicitly: “Individuals who have already obtained their baccalaureate degree are not eligible for STA-21 and should apply directly for Officer Candidate School (OCS).” Fleet applicants apply under OPNAVINST 1420.1B, Enlisted to Officer Commissioning Programs Application Administrative Manual (the same instruction that governs USNA fleet applications, entry 12), through their command, for selection by the officer community they are applying to — the community's Program Authorization, not a single Navy-wide standard, sets the specific gates (degree field, age-at-commissioning, obligation).",
      ],
      flags: [],
      links: [
        {
          label: "NSTC — STA-21 Program Requirements (the OCS-routing statement)",
          url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/STA-21/STA-21-Program-Requirements/",
        },
      ],
      source: "OPNAVINST 1420.1B; NSTC STA-21 requirements page",
      crossLinks: [{ label: "The school itself → Becoming an Officer", view: "officer" }],
    },
    {
      id: "e15",
      n: 15,
      name: "Navy — Seaman to Admiral-21 (STA-21)",
      branch: "Navy",
      degree: "Degree built in",
      summary:
        "STA-21 Navy: STATUS VERIFIED ACTIVE — the full-time undergraduate commissioning program for active-duty enlisted Sailors of all ratings and paygrades. Stay on active duty at your enlisted pay grade (full pay, BAH, BAS; still eligible for enlisted advancement), an annual education voucher of up to $10,000, degree in 36 months, GPA 2.5 floor. FY26 solicitation: NAVADMIN 019/25.",
      who: "Enlisted Sailors without a bachelor's who want the Navy to fund finishing it on active duty in exchange for a commission and an option-specific obligation.",
      verdict: {
        kind: "active",
        label: "STATUS: ACTIVE — VERIFIED",
        text: "STA-21 has paused and reshaped in past years, so its status was verified for this build: it is currently active and soliciting. The evidence is current and official — NAVADMIN 019/25 solicits applications for the Fiscal Year 2026 STA-21 board (“a fulltime undergraduate education and commissioning program open to enlisted personnel of all pay grades and ratings”), and the program's Program Authorizations were reissued through 2025 (e.g., PA 150B SWO, Feb 2025; PA 150D Pilot/NFO, Jun 2025). The FY-cycle NAVADMIN is the current solicitation.",
      },
      body: [
        "The program as NSTC (Naval Service Training Command) publishes it: a full-time undergraduate commissioning program for active-duty enlisted Sailors of all ratings and paygrades. Selectees remain on active duty at their current enlisted pay grade and “will receive all the pay, allowances, benefits, and privileges they currently enjoy” — full pay and allowances including BAH and BAS — and remain eligible for enlisted advancement while in the program. (One printed nuance: time in school counts toward pay purposes but not toward retirement.)",
        "An annual education voucher of up to $10,000 paid to the university covers tuition, books, and fees; costs above $10,000 are the Sailor's. Selectees attend the 8-week Naval Science Institute at OTC Newport, then study full-time at an NROTC-affiliated university and must complete the baccalaureate within 36 months, maintaining a cumulative GPA of at least 2.5.",
      ],
      bullets: [
        { title: "Application minimums (Core)", text: "SAT 1000 (500 Math / 500 EBRW) or ACT composite minimums of 41 (21 Math / 20 English)." },
        { title: "Target options", text: "SWO, Nuclear, SPECWAR, EOD, Pilot, NFO, CEC, Nurse Corps, Information Professional, and others per the cycle carry their own Program Authorizations with option-specific gates — including option-specific service obligations on commissioning (e.g., 5 years SWO, 8 years Pilot, as the PAs publish)." },
        { title: "Core coursework", text: "Core selectees generally complete two semesters each of calculus and calculus-based physics (the Nurse Corps Option is exempt from that requirement and carries its own prerequisite-credit and GPA rules)." },
        { title: "Degree-holders excluded", text: "Sailors who already hold a baccalaureate are not eligible — they apply to OCS (entry 14)." },
      ],
      flags: [],
      links: [
        {
          label: "NSTC — STA-21 Program Overview",
          url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/STA-21/STA-21-Program-Overview/",
        },
        {
          label: "NSTC — STA-21 Program Requirements",
          url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/STA-21/STA-21-Program-Requirements/",
        },
        {
          label: "FY26 solicitation — NAVADMIN 019/25",
          url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/NAVADMIN/NAV2025/NAV25019.pdf",
        },
      ],
      source: "NSTC STA-21 pages; NAVADMIN 019/25; STA-21 Program Authorizations (2025)",
    },
    {
      id: "e16",
      n: 16,
      name: "Air Force & Space Force — Officer Training School (Active-Duty Applicants)",
      branch: "Air Force / Space Force",
      degree: "Degree in hand",
      summary:
        "OTS active duty Air Force Space Force: serving Airmen with a degree apply under the Active Duty OTS Program Announcement (DAFMAN 36-2032) — boards run in two families, Rated (flying fields) and Non-Rated. Degree in hand or within 365 days of completion; attend OTS in enlisted status, commission on graduation. Guardians use the parallel AD Space Force OTS PA.",
      who: "Enlisted Airmen/Guardians with a finished (or nearly finished) degree; choose the board family by the career field sought.",
      body: [
        "Serving Airmen with a degree apply to OTS through the Active Duty OTS Program Announcement, a guide produced “to assist active duty Air Force members applying for a commission,” used with DAFMAN 36-2032. The board structure, at summary level as published in the AF board schedule: OTS boards are convened in two families — Rated boards (flying career fields: pilot, CSO, ABM, RPA pilot) and Non-Rated boards (the remaining line-officer fields) — and scheduled boards are “open to all Air Force Active Duty Enlisted, Air Force National Guard, Air Force Reserve, and Civilians.” Active-duty applicants generally hold a bachelor's or are within 365 days of completing one, attend OTS in enlisted status, and commission on graduation. AFOQT scores, commander recommendation, and retainability are part of the published application structure (the PA's tables hold the field-specific minimums — not printed here). The Space Force runs the parallel AD SF OTS PA for active-duty Air and Space Force members applying for a USSF commission.",
      ],
      flags: [],
      links: [
        {
          label: "Active Duty OTS Program Announcement (AF)",
          url: "https://www.afaccessionscenter.af.mil/Portals/78/LOA/AD%20AF%20OTS%20PA%20COA%206DEC2024%20-%20Final.pdf",
        },
        {
          label: "Active Duty Space Force OTS Program Announcement",
          url: "https://www.afaccessionscenter.af.mil/Portals/78/AD%20SF%20OTS%20PA%20CAO%2022%20Nov%2024.pdf",
        },
      ],
      source: "Active Duty OTS Program Announcement; DAFMAN 36-2032",
      crossLinks: [{ label: "The school itself → Becoming an Officer", view: "officer" }],
    },
    {
      id: "e17",
      n: 17,
      name: "Air Force — Scholarships for Outstanding Airmen to ROTC (SOAR)",
      branch: "Air Force",
      degree: "Degree built in",
      summary:
        "SOAR Air Force: a commander-nomination AFROTC scholarship route — up to ~50 nominations for two- to four-year ROTC scholarships covering most tuition and all fees. Selectees SEPARATE from the Air Force (discharged, enlisted in the Obligated Reserve Section) and commission on graduation. Open to active-duty Airmen with less than six years of service.",
      who: "Early-career Airmen a commander will nominate for a full ROTC scholarship, accepting separation from active duty to take it.",
      body: [
        "AirForce.com publishes SOAR as a commander-nomination AFROTC scholarship route: enlisted Airmen may be nominated — up to ~50 nominations — for two- to four-year ROTC scholarships covering most tuition and all fees. Selectees separate from the Air Force (discharged and enlisted in the Air Force Reserve's Obligated Reserve Section, per the Air Force FAQ) while completing the degree as full-time AFROTC students, and commission on graduation. The FAQ publishes SOAR as open to active-duty Airmen with less than six years of service, for technical and nontechnical degrees alike; major commands make final selections from commander nominations.",
      ],
      flags: [
        "Stipend/textbook dollar figures differ between AirForce.com pages (the commissioning-programs page and the FAQ publish different textbook allowances) — figures are not printed here; the current program page controls.",
      ],
      links: [AFCOMMISSIONING],
      source: "AirForce.com — Commissioning Programs; Air Force FAQ",
    },
    {
      id: "e18",
      n: 18,
      name: "Air Force — Airman Scholarship and Commissioning Program (ASCP)",
      branch: "Air Force",
      degree: "Degree built in",
      summary:
        "ASCP Air Force: SOAR's sibling with a different selection door — active-duty enlisted Airmen APPLY (rather than being commander-nominated into a capped pool) for AFROTC scholarships of up to $15,000 per year for tuition and fees plus a $600-per-year textbook allowance, for two to four years. Selectees temporarily separate and commission on graduation.",
      who: "Airmen who want to self-drive an AFROTC scholarship application.",
      body: [
        "ASCP is SOAR's sibling with a different selection door: active-duty enlisted Airmen apply (rather than being commander-nominated into a capped pool) for AFROTC scholarships of up to $15,000 per year for tuition and fees plus a $600-per-year textbook allowance, for two to four years across technical, nontechnical, nursing, pre-health, and foreign-language fields. Selectees temporarily separate from active duty, join ROTC as full-time students, and commission on graduation.",
      ],
      flags: [],
      links: [AFCOMMISSIONING],
      source: "AirForce.com — Commissioning Programs",
    },
    {
      id: "e19",
      n: 19,
      name: "Air Force — Professional Officer Course, Early Release Program (POC-ERP)",
      branch: "Air Force",
      degree: "Degree built in",
      summary:
        "POC-ERP Air Force: the short-fuse AFROTC route — Airmen within two years of completing all bachelor's degree and commissioning requirements (all majors) receive an early release from active duty to enter AFROTC's Professional Officer Course full-time, finish the degree, and commission, returning to active duty for at least four years.",
      who: "Airmen close to a finished degree for whom a two-year early release beats waiting out the enlistment.",
      body: [
        "POC-ERP is the short-fuse AFROTC route: Airmen within two years of completing all bachelor's degree and commissioning requirements (all majors) receive an early release from active duty to enter AFROTC's Professional Officer Course full-time, finish the degree, and commission as Second Lieutenants, returning to active duty for at least four years after commissioning.",
      ],
      flags: [],
      links: [AFCOMMISSIONING],
      source: "AirForce.com — Commissioning Programs",
    },
    {
      id: "e20",
      n: 20,
      name: "Air Force — Nurse Enlisted Commissioning Program (NECP)",
      branch: "Air Force",
      degree: "Degree built in",
      summary:
        "NECP Air Force: the nursing-specific build-the-degree route — and the structural exception among the AFROTC programs, because participants REMAIN ON ACTIVE DUTY with an income while going to school full time, earning a BSN in 24 months or less (up to $15,000/yr tuition help + $600 textbook allowance), then commissioning as Nurse Corps officers.",
      who: "Active-duty Airmen targeting a Nurse Corps commission who cannot afford to separate to finish a BSN.",
      body: [
        "NECP is the Air Force's nursing-specific build-the-degree route — and the structural exception among the AFROTC programs: participants remain on active duty and “continue to receive an income while going to school full time” at a college or university with an ROTC-affiliated nursing program, earning a Bachelor of Science in Nursing in 24 months or less, funded at up to $15,000 per year in tuition help plus a $600 textbook allowance, then commission as Nurse Corps officers.",
      ],
      flags: [],
      links: [AFCOMMISSIONING],
      source: "AirForce.com — Commissioning Programs",
    },
    {
      id: "e21",
      n: 21,
      name: "Air Force — Senior Leader Enlisted Commissioning Program (SLECP)",
      branch: "Air Force",
      degree: "Degree built in",
      summary:
        "SLECP Air Force: the senior-leader direct-select route (DAFMAN 36-2032 §10.10) — designated senior leaders personally select and fast-track enlisted Airmen. SLECP-A finishes the degree first (24+ semester hours to enter), then OTS; SLECP-O is direct selection to OTS with a degree in hand. There is no open application window — the member's job is to be selectable.",
      who: "Airmen whose performance has put them in front of a selecting senior leader; selection originates with the senior leaders the program designates.",
      body: [
        "SLECP is the DAF's senior-leader direct-select route, governed in DAFMAN 36-2032 §10.10: designated senior leaders personally select and fast-track enlisted Airmen for commissioning through OTS. It runs in two published forms.",
      ],
      bullets: [
        { title: "SLECP-A (Active-Duty Scholarship)", text: "For Airmen without a degree yet — published gates include at least 24 semester hours of college; the selectee finishes the undergraduate degree (within three years, on active-duty status under the program's scholarship) and then attends OTS. Degree built in." },
        { title: "SLECP-O (OTS)", text: "For Airmen with a degree in hand — direct selection to OTS. Degree in hand." },
      ],
      flags: [],
      links: [
        DAFMAN_36_2032,
        {
          label: "SLECP-A as the Air Force describes a selection (NASIC)",
          url: "https://www.nasic.af.mil/News/Article-Display/Article/3238368/nasic-airman-receives-slecp-a-nomination-earns-commission/",
        },
      ],
      source: "DAFMAN 36-2032 §10.10",
    },
    {
      id: "e22",
      n: 22,
      name: "Air Force & Space Force — LEAD (USAFA Enlisted Admissions)",
      branch: "Air Force / Space Force",
      degree: "Degree built in",
      summary:
        "LEAD — Leaders Encouraging Airmen Development: since 1995, unit and wing commanders nominate outstanding enlisted Airmen with officer potential for admission to the U.S. Air Force Academy or the USAFA Preparatory School (AF Form 1786 + Pre-Candidate Questionnaire). Open to Airmen AND Guardians; other services' members are NOT eligible for LEAD nominations.",
      who: "Young enlisted Airmen/Guardians (academy age limits apply) whose commanders will nominate them.",
      body: [
        "The official name is Leaders Encouraging Airmen Development — “Airmen,” per the Air Force Academy and DAFMAN 36-2032 usage (the singular form circulates in secondary sources and is wrong). Since 1995, LEAD has let unit and wing commanders nominate outstanding enlisted Airmen with officer potential for admission to the U.S. Air Force Academy or the USAFA Preparatory School. The Academy publishes the mechanics: determine eligibility under DAFMAN 36-2032, Chapter 10, complete AF Form 1786, and submit a Pre-Candidate Questionnaire. LEAD is open to Airmen and Guardians; prior-enlisted members of other services may apply to USAFA through regular admissions but are not eligible for LEAD nominations.",
      ],
      flags: [],
      links: [
        {
          label: "USAFA — LEAD program feature",
          url: "https://www.usafa.af.mil/US-Air-Force-Academy-News/Features/Feature-View/Article/3586919/program-opens-academy-admission-for-enlisted/",
        },
        DAFMAN_36_2032,
      ],
      source: "USAFA LEAD feature; DAFMAN 36-2032, Ch. 10",
    },
    {
      id: "e23",
      n: 23,
      name: "Coast Guard — Officer Candidate School (incl. OCS-T)",
      branch: "Coast Guard",
      degree: "Degree in hand",
      summary:
        "Coast Guard OCS: the CG's degree-in-hand door at the Academy in New London, open to serving members through the in-service route in the current Officer Application Guide — plus OCS-T, the temporary-commission variant for active-duty members E-5 and above with 4+ years active duty (at least 2 in the Coast Guard), with a published credit/CLEP alternative to the degree.",
      who: "Enlisted members with a bachelor's (OCS), or senior enlisted members using the OCS-T temporary-commission route.",
      body: [
        "Coast Guard officer accessions for members run through the Officer Programs structure published in COMDTINST 1100.2 (Officer Accessions) with application guides issued per promotion/program year; GoCoastGuard's Officer Applications page is the public front door, and members compete at competitive selection panels.",
        "OCS at the Coast Guard Academy in New London is the CG's degree-in-hand door, and it is open to serving members: enlisted Coast Guardsmen with a bachelor's apply through the published in-service application route in the current Officer Application Guide, competing at the same selection panels as civilian applicants. The CG also publishes a temporary-commission variant, OCS-T, for active-duty Coast Guard members E-5 and above with at least four years of active duty (at least two in the Coast Guard).",
      ],
      flags: [
        "OCS-T's published education gate is a degree OR a credit alternative built on CLEP/college credit (30-credit alternative as published in the program-year guide) — the exact credit construction is guide-specific; verify in the current year's Officer Application Guide before relying on it.",
        "OCS length conflict (carried from the Joining research, unresolved there and here): 12 weeks per GoCoastGuard vs. 17 weeks per the PY25 Officer Application Guide — both printed in that research, not resolved here.",
      ],
      links: [CG_OFFICER_APPS],
      source: "COMDTINST 1100.2; GoCoastGuard — Officer Applications",
    },
    {
      id: "e24",
      n: 24,
      name: "Coast Guard — Pre-Commissioning Program for Enlisted Personnel (PPEP)",
      branch: "Coast Guard",
      degree: "Degree built in",
      summary:
        "PPEP Coast Guard: the CG's build-the-degree route for its own enlisted members — still named in the current COMDTINST 1100.2I (Jun 2025). Selected members on active duty attend college full-time for up to two years to complete a bachelor's (within 24 months), then attend OCS and commission. Numeric gates are WITHHELD — they route to the current Officer Application Guide.",
      who: "Enlisted Coast Guardsmen within ~two years of a bachelor's who want to finish it full-time on active duty, then commission via OCS.",
      verdict: {
        kind: "withheld",
        label: "FIGURES WITHHELD — ROUTED TO THE GUIDE",
        text: "THIN PUBLIC DETAIL, flagged honestly: the program's standing existence is confirmed in the current instruction (COMDTINST 1100.2I, Jun 2025), but its detailed eligibility set (age band at OCS convening, OAR minimum, GPA floor, CO recommendation — figures carried in official EPME study material) was not read directly in the current application guide during research. This card prints the structure and the two-year/24-month frame from the instruction and routes all numeric gates to the current Officer Application Guide. No numbers are invented to fill the gap.",
      },
      body: [
        "PPEP is the Coast Guard's build-the-degree route for its own enlisted members, still named in the current COMDTINST 1100.2I (Jun 2025): selected enlisted members on active duty attend college full-time for up to two years to complete a bachelor's degree (within 24 months), then attend OCS and commission.",
      ],
      flags: [],
      links: [CG_OFFICER_APPS],
      source: "COMDTINST 1100.2I (Jun 2025); GoCoastGuard — Officer Applications",
    },
    {
      id: "e25",
      n: 25,
      name: "Coast Guard — College Student Pre-Commissioning Initiative (CSPI)",
      branch: "Coast Guard",
      degree: "Degree built in",
      summary:
        "CSPI Coast Guard (summary): a scholarship for students in their junior or senior year at qualifying institutions — tuition plus military pay and benefits while a full-time student; graduates attend OCS and commission. CSPI is college-based, NOT an in-service program: enlisted members who separate to attend a qualifying school can be eligible as students.",
      who: "Students (including prior-service students) at qualifying colleges in their final two years.",
      body: [
        "CSPI is college-based rather than fleet-based, and is included at summary level because serving members encounter it alongside the in-service routes: a scholarship program for students in their junior or senior year at qualifying institutions (institutions with minority-serving designations and enrollment criteria as the CG publishes them) that provides tuition plus military pay and benefits while a full-time student; graduates attend OCS and commission. Enlisted members who separate to attend a qualifying school can be CSPI-eligible as students, but CSPI is not an in-service program — do not present it as one.",
      ],
      flags: [],
      links: [CG_OFFICER_APPS],
      source: "GoCoastGuard — Officer Applications (CSPI)",
    },
    {
      id: "e26",
      n: 26,
      name: "Coast Guard — U.S. Coast Guard Academy Enlisted Route",
      branch: "Coast Guard",
      degree: "Degree built in",
      summary:
        "USCGA enlisted route (summary): the Academy explicitly recruits from the enlisted ranks — members of the Coast Guard OR other armed forces are “welcome and encouraged to apply.” While attending, the enlistment contract is SUSPENDED (leave early and you return to your service and pick up where you left off); enlisted service accrues toward retirement, cadet time does not.",
      who: "Young enlisted members of any service targeting the New London academy route.",
      body: [
        "The Academy explicitly recruits from the enlisted ranks: its Enlisted Personnel admissions page states that enlisted members “of the U.S. Coast Guard or other armed force” are “welcome and encouraged to apply.” Two published transition mechanics are worth printing because they differ from the other academies: while attending, the member's enlistment contract is suspended — if the cadet leaves before graduating and a contract was in place at enrollment, they return to their service and pick up where they left off; and enlisted service accrues toward retirement if the cadet accepts the appointment, while cadet time itself does not accrue time in service. Applicants needing a preparation year compete for the Coast Guard Academy Scholars (CGAS) prep program from within the general applicant pool (no separate application).",
      ],
      flags: [],
      links: [
        {
          label: "USCGA — Enlisted Personnel admissions",
          url: "https://uscga.edu/admissions/enlisted-personnel/",
        },
      ],
      source: "U.S. Coast Guard Academy — Enlisted Personnel page",
    },
  ],
};

/* ----------------- Tile 2 — Enlisted → Warrant Officer ------------------ */

const TILE_WARRANT: CommTile = {
  key: "enlisted-warrant",
  label: "Enlisted → Warrant",
  tileSub: "Entries 27–38 · the warrant door, plus one closed program",
  intro:
    "Warrant officers are appointed, not commissioned through the Part 1 sources (Navy LDOs excepted). Every service except the Space Force runs a warrant door; none of them requires a bachelor's degree. What they require instead is demonstrated technical expertise in a feeder field and a board. Navy LDO/CWO detail lives in this tile because the Navy runs both through a single instruction (OPNAVINST 1420.2A) and a single In-Service Procurement Board — LDO is cross-referenced from the officer door. This tile also carries one program that is CLOSED, boxed as closed, and one verified negative — read them as findings, not routes.",
  entries: [
    {
      id: "e27",
      n: 27,
      name: "Army — Warrant Officer Program: Technical Specialties (Feeder-MOS Route)",
      branch: "Army",
      degree: "No degree required",
      summary:
        "Army warrant officer technical: apply to a SPECIFIC warrant MOS (WOMOS) against its feeder-MOS list — there is no generic warrant application. Administrative gates (USAREC, no-waiver items marked): GT 110, citizenship, diploma/GED, a FINAL Secret or Top Secret clearance (interim does not satisfy), AFS caps 12 years technicians / 8 aviators, appointment age ≤46 technicians.",
      who: "Enlisted Soldiers (and other services' members) whose MOS feeds a warrant specialty and who meet the proponent's prerequisites.",
      body: [
        "The Army's warrant door is run by USAREC Warrant Officer Recruiting, with appointment through Warrant Officer Candidate School (WOCS) at Fort Novosel, Alabama, followed by the specialty's Warrant Officer Basic Course. The structure USAREC publishes starts with the feeder-MOS concept: each warrant MOS (WOMOS) lists feeder MOSs — the enlisted specialties whose experience qualifies an applicant for that warrant field — and proponent prerequisites on top of the administrative ones (e.g., 270A Legal Administrator draws from feeders including 27D/36B/42A/51C and publishes E-5+, basic leader course, and time-in-service / time-in-feeder expectations, some waiverable). There is no generic “apply to be a warrant officer”; you apply to a specific WOMOS against its feeder list.",
        "Non-Army applicants apply through the same in-service board structure with an approved DD Form 368 conditional release, and other services' members — including commissioned officers of the Air Force, Navy, Marine Corps, and Coast Guard — may apply for 153A specifically (entry 28), with a conditional resignation of commission as part of the package. That officer-to-warrant door is real and published; it is also the closest thing in this section to an in-service officer→(warrant) conversion (see the Officer → Enlisted tile).",
      ],
      bullets: [
        { title: "GT score 110", text: "No waiver." },
        { title: "Citizenship + diploma", text: "U.S. citizenship and a high school diploma or GED. No waiver on either." },
        { title: "Clearance", text: "FINAL Secret or Top Secret clearance — an interim clearance does not satisfy the requirement. No waiver." },
        { title: "Standards", text: "Height/weight and fitness standards apply; at least 12 months remaining on the enlistment contract (waiverable)." },
        { title: "AFS caps", text: "12 years for technicians, 8 years for aviators (waiverable)." },
        { title: "Age at appointment", text: "Technicians at least 18 and not more than 46; aviators not yet 33 at board selection (waiverable)." },
      ],
      flags: [],
      links: [
        AWOR_BASIC,
        {
          label: "USAREC — Sister-service applicants",
          url: "https://recruiting.army.mil/ISO/AWOR/sister_service/",
        },
      ],
      source: "USAREC Warrant Officer Recruiting — Basic Qualifications",
      crossLinks: [{ label: "DD Form 368 mechanics → Switch Branches", view: "switchbranches" }],
    },
    {
      id: "e28",
      n: 28,
      name: "Army — 153A Rotary Wing Aviator & WOFT “Street-to-Seat”",
      branch: "Army",
      degree: "No degree required",
      summary:
        "153A Army warrant aviator: the ONE Army warrant specialty with no feeder-MOS requirement — any MOS may apply in-service, and Warrant Officer Flight Training (WOFT) also takes civilians and prior-service applicants with no prior service at all (“street-to-seat”). SIFT 40+, Class 1 flight physical, age 18 to not-yet-33 at the convening board.",
      who: "Anyone — serving, prior-service, or civilian — whose goal is Army aviation specifically; every other warrant specialty requires the feeder background of entry 27.",
      body: [
        "153A is the one Army warrant specialty with no feeder-MOS requirement: any MOS may apply in-service, and the Warrant Officer Flight Training (WOFT) program also accepts civilians and prior-service applicants with no prior service at all — the “street-to-seat” route. Published prerequisites (state Guard/USAREC postings of the USAREC standard): GT 110 (officers excepted), citizenship, diploma/GED, Secret clearance with no interim, SIFT score of 40 or higher, a Class 1 flight physical approved by the Army aeromedical activity at Fort Novosel, and age 18 to not-yet-33 at the convening board (waivers case-by-case). In-service applicants add a letter of recommendation from a serving Army aviator (CW3–CW5). Selectees attend WOCS then flight training.",
      ],
      flags: [],
      links: [AWOR_BASIC],
      source: "USAREC Warrant Officer Recruiting — 153A prerequisites",
    },
    {
      id: "e29",
      n: 29,
      name: "Marine Corps — Warrant Officer Program (Regular Selection Board)",
      branch: "Marine Corps",
      degree: "No degree required",
      summary:
        "USMC warrant officer board: the annual Enlisted to Warrant Officer Regular Selection Board (MCO 1040.42B; FY27: MARADMIN 598/25) — Sergeant (E-5) minimum, technically qualified in a listed MOS, WOBC at Quantico. CHANGED May 1, 2026: the 8-year minimum TIS is NO LONGER WAIVABLE, and Marines passed for promotion in their current grade are INELIGIBLE.",
      who: "Sergeants and above with 8+ years TIS and a qualifying technical MOS, applying to the annual board.",
      body: [
        "The Marine Corps appoints warrant officers under MCO 1040.42B, Warrant Officer (WO) and Limited Duty Officer (LDO) Accession Programs, through an annual Enlisted to Warrant Officer Regular Selection Board announced by MARADMIN (FY27: MARADMIN 598/25). The published structure: applicants must be technically and professionally qualified in one of the listed MOSs; the minimum pay grade is Sergeant (E-5); selectees attend The Basic School's Warrant Officer Basic Course (WOBC) at Quantico. From WOBC class 1-26, the appointment date is the first day of the graduation month, and appointment deferrals ended January 1, 2026.",
      ],
      flags: [
        "CHANGE — effective May 1, 2026 (MARADMIN 554/25), printed prominently because older guidance contradicts it: the minimum 8 years of time in service is NO LONGER WAIVABLE — all applicants must have at least 8 years' TIS by the board's convening date — and Marines who have been passed for promotion in their current grade are INELIGIBLE to apply. The FY27 board message repeats both points in its waiver paragraph: minimum grade of Sergeant, citizenship, the 8-year minimum active naval service, and the passed-for-promotion bar “will not be waived.” Any source still describing the 8-year rule as waiverable is pre-change.",
      ],
      links: [
        {
          label: "MARADMIN 554/25 — WO Accession Program Updates",
          url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4336904/warrant-officer-wo-accession-program-updates/",
        },
        {
          label: "FY27 Enlisted to WO Regular Selection Board (MARADMIN 598/25)",
          url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4360389/fiscal-year-2027-fy27-enlisted-to-warrant-officer-wo-regular-selection-board/",
        },
      ],
      source: "MCO 1040.42B; MARADMIN 554/25; MARADMIN 598/25",
    },
    {
      id: "e30",
      n: 30,
      name: "Marine Corps — CWO2 Recruiter Selection Board",
      branch: "Marine Corps",
      degree: "No degree required",
      summary:
        "USMC CWO2 Recruiter board: the Corps' one specialty warrant board outside the regular cycle (FY27: MARADMIN 075/26) — open ONLY to active-duty career recruiters (primary MOS 8412), Gunnery Sergeant and above, after a successful career-recruiter tour, appointing directly to CWO2. Not less than 8 nor more than 20 years of active naval service at appointment.",
      who: "Career recruiters (8412) only — listed so the inventory is complete, not as a general route.",
      body: [
        "The Corps runs one specialty warrant board outside the regular cycle: the Enlisted to CWO2 Recruiter Selection Board (FY27: MARADMIN 075/26), open only to active-duty career recruiters (primary MOS 8412) in the grade of Gunnery Sergeant and above who have completed a successful career-recruiter tour, appointing directly to CWO2. Published gates include not less than 8 nor more than 20 years of active naval service at appointment, with grade, citizenship, TIS, test-score, and active-duty-status requirements stated as non-waivable in the message.",
      ],
      flags: [],
      links: [
        {
          label: "FY27 Enlisted to CWO2 Recruiter Selection Board (MARADMIN 075/26)",
          url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=542&Article=4418009",
        },
      ],
      source: "MARADMIN 075/26",
    },
    {
      id: "e31",
      n: 31,
      name: "Marine Corps — CWO → LDO Appointments",
      branch: "Marine Corps",
      degree: "No degree required",
      summary:
        "USMC CWO to LDO: already-warrant Marines cross to a COMMISSION through the annual Chief Warrant Officer to Limited Duty Officer Selection Board (MCO 1040.42B) — 8 years of restricted-officer service (waivable to a 5-year minimum), no more than 20 years active naval service (waivable to 22 in one narrow case), appointed LDO Captain (O-3E) with a 3-year obligation. Not applicable to the Marine Corps Reserve.",
      who: "Serving CWOs with 5–8+ years of restricted-officer service weighing a move from the warrant ranks to a limited-duty commission.",
      body: [
        "Already-warrant Marines can cross to a commission through the Chief Warrant Officer to Limited Duty Officer Selection Board (annual; FY27: MARADMIN 303/25; FY28: MARADMIN 295/26), under the same MCO 1040.42B. The published eligibility frame, consistent across the FY26–FY28 messages: applicants must have completed 8 years of restricted-officer service (waivable to a minimum of 5 years for the board's execution, requested on the AA form), and no more than 20 years of active naval service (waivable to 22 years only for CWOs who have not previously had an opportunity to apply); no waivers beyond those bounds are accepted, and waivers are adjudicated by Manpower Management before the board. Selectees are appointed as LDO Captains (O-3E) and incur a 3-year obligation. The board is not applicable to the Marine Corps Reserve as published.",
      ],
      flags: [],
      links: [
        {
          label: "FY27 CWO to LDO Selection Board (MARADMIN 303/25)",
          url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=542&Article=4228650",
        },
        {
          label: "FY28 CWO to LDO Selection Board (MARADMIN 295/26)",
          url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4528478/fiscal-year-2028-chief-warrant-officer-cwo-to-limited-duty-officer-ldo-selectio/",
        },
      ],
      source: "MCO 1040.42B; MARADMIN 303/25; MARADMIN 295/26",
    },
    {
      id: "e32",
      n: 32,
      name: "Navy — Limited Duty Officer (LDO)",
      branch: "Navy",
      degree: "No degree required",
      summary:
        "Navy LDO: commissioned officers whose authority is limited to the technical field of their enlisted rating — the Navy's commissioned door that does NOT require a degree. 8–14 years TIS (8–16 nuclear), computed to October 1 of the board's fiscal year; TIS minima are NOT waivable, maxima waivable by no more than 180 days. Annual In-Service Procurement Board under OPNAVINST 1420.2A.",
      who: "Senior enlisted Sailors (roughly the 8–14-year point) whose rating has an LDO designator and who want a commission bounded to their technical community.",
      body: [
        "The Navy appoints LDOs, CWOs, and WO1s from the enlisted ranks under OPNAVINST 1420.2A (3 Apr 2025), Active-Duty Limited Duty Officer, Chief Warrant Officer and Warrant Officer Programs, through annual In-Service Procurement Boards (ISPB) solicited by NAVADMIN (FY27: NAVADMIN 113/25; FY28: NAVADMIN 032/26). Applicants compete inside their rating's designator community — these are experience appointments, not general commissioning. All applicants must hold a security clearance before commissioning, complete operational-duty screening, and be worldwide assignable.",
        "LDOs are commissioned officers whose authority is limited to the technical field of their enlisted rating — the Navy's commissioned door that does not require a degree. Published standing eligibility (OPNAVINST 1420.2A as the MyNavyHR applicant pages summarize it): 8–14 years of time in service (8–16 for nuclear LDO), computed to October 1 of the board's fiscal year. TIS minima are NOT waivable; maxima may be waived by no more than 180 days. A separate Reserve LDO/CWO board runs under OPNAVINST 1120.12 on a Total Qualification Standard basis (its published TIS bands differ from the active-duty instruction — e.g., Reserve LDO shown at 8–18 years on the current RC page; do not carry active-duty figures into a Reserve application).",
      ],
      flags: [
        "The active-duty solicitation's paygrade span differs by cycle — E-5–E-9 in the FY27 NAVADMIN, E-6–E-9 in FY28 — and the annual NAVADMIN controls. Check the current cycle's message, not either figure quoted here.",
      ],
      links: [
        NAVY_LDO_CWO_PAGE,
        {
          label: "FY28 solicitation — NAVADMIN 032/26",
          url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/NAVADMIN/NAV2026/NAV26032.pdf?ver=qLkZo4Bb2HAKIJeeCp20TA%3d%3d",
        },
      ],
      source: "OPNAVINST 1420.2A; MyNavyHR LDO/CWO applicant pages; NAVADMIN 032/26",
    },
    {
      id: "e33",
      n: 33,
      name: "Navy — Chief Warrant Officer (CWO)",
      branch: "Navy",
      degree: "No degree required",
      summary:
        "Navy CWO: the Navy's warrant door proper — senior chiefs and chiefs appointed as technical specialists in their rating's designator. 14–20 years TIS (14–22 for E-9 applicants competing for CWO3), same no-waiver-below-the-minimum / 180-day-maximum-waiver rule as LDO, same ISPB. Appointments to CWO2 (or CWO3 for qualifying E-9s); senior grades run to CWO5.",
      who: "E-7–E-9 Sailors at the 14–20-year point who want to stay technical rather than take the LDO's broader officer track.",
      body: [
        "The CWO appointment is the Navy's warrant door proper: senior chiefs and chiefs appointed as technical specialists in their rating's designator. Published standing eligibility: 14–20 years TIS (14–22 for E-9 applicants competing for CWO3, per the MyNavyHR applicant page's TIS table), same no-waiver-below-the-minimum / 180-day-maximum-waiver rule as LDO, same ISPB. Appointments are to CWO2 (or CWO3 for qualifying E-9s), and the community's senior grades run to CWO5.",
      ],
      flags: [],
      links: [NAVY_LDO_CWO_PAGE],
      source: "OPNAVINST 1420.2A; MyNavyHR LDO/CWO applicant pages",
    },
    {
      id: "e34",
      n: 34,
      name: "Navy — Warrant Officer 1: The Named Exceptions (Cyber · AVP · Executive Support)",
      branch: "Navy",
      degree: "No degree required",
      summary:
        "Navy WO1 exceptions: the Navy historically appointed only at CWO2 and above; WO1 exists today in named exceptions — Cyber WO1 (7841, reinstated 2018; E-5+, 6–14 years TIS, waivers NOT considered), Air Vehicle Pilot (737X, MQ-25 — accessed through Navy Recruiting/OCS, NOT the ISPB), and Executive Support Technician (7904/7901, NAVADMIN 152/26 — Flag Writers, 791D NEC, 6+ years TIS).",
      who: "Cyber Sailors at 6–14 years (7841); MQ-25 aspirants via the recruiting door (737X); Flag Writers (7904/7901).",
      body: [
        "The Navy historically appointed only at CWO2 and above; WO1 exists today in named exceptions, all current in official sources.",
      ],
      bullets: [
        { title: "Cyber WO1 (designator 7841)", text: "The standing exception — WO1 rank reinstated in 2018 to retain cyber specialists (first selects December 2018). Eligibility as the FY27/FY28 NAVADMINs publish it: E-5 and above, 6–14 years TIS, and TIS waivers will NOT be considered for 7841." },
        { title: "Air Vehicle Pilot (AVP, designator 737X)", text: "WO1s trained as technical specialists operating the MQ-25. A different door: MyNavyHR's AVP page states the program “is not a traditional Navy Chief Warrant Officer (CWO) program” — AVP applicants are accessed by Commander, Navy Recruiting Command through the OCS recruiting program under Program Authorization 106A (Mar 2025), open to civilians and enlisted fleet Sailors, applying on OPNAV 1420/1 — not through the ISPB." },
        { title: "Executive Support Technician (7904 WO / 7901 CWO)", text: "Established by NAVADMIN 152/26 as “the first dual accession WO/CWO program in Navy history” — current Flag Writers holding the 791D NEC with more than 6 years TIS compete for direct appointment to WO1, CWO2, or CWO3 by paygrade and TIS. New and narrow; printed because it is officially published and current." },
      ],
      flags: [],
      links: [
        {
          label: "NAVADMIN 113/25 (7841 terms)",
          url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/NAVADMIN/NAV2025/NAV25113.pdf?ver=nwW6MZ_yvm3nZYENIDsScg%3d%3d",
        },
        {
          label: "MyNavyHR — Air Vehicle Pilot",
          url: "https://www.mynavyhr.navy.mil/Career-Management/Community-Management/Officer/Active-OCM/LDO-CWO/Air-Vehicle-Pilot/",
        },
        {
          label: "NAVADMIN 152/26 (Executive Support Technician establishment)",
          url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/NAVADMIN/NAV2026/NAV26152.pdf?ver=PVRTxLmUtk8V6P_aZ8jnug%3d%3d",
        },
      ],
      source: "NAVADMIN 113/25; MyNavyHR AVP page (PA 106A); NAVADMIN 152/26",
    },
    {
      id: "flying-cwo",
      n: 0,
      name: "Navy — Flying Chief Warrant Officer (“Pilot”) Program",
      branch: "Navy",
      degree: "Not a program",
      summary:
        "Navy Flying CWO: CLOSED. The Flying Chief Warrant Officer “Pilot” program (begun 2006) was terminated by NAVADMIN 192/13 on August 1, 2013 — “a requirement for flying CWOs no longer exists.” Any page still describing flying CWO applications is describing a program closed for over a decade. Documented here as closed, never as a route.",
      who: "No one — this program is closed. It is documented so nobody chases it.",
      verdict: {
        kind: "closed",
        label: "CLOSED — DISCONTINUED (NAVADMIN 192/13)",
        text: "Do not present this as a route. The Navy's Flying Chief Warrant Officer “Pilot” program (begun 2006) was terminated by NAVADMIN 192/13 (Aug 1, 2013), which states the reason plainly: “the URL inventory profile has changed and a requirement for flying CWOs no longer exists.” Affected aviators were transitioned under that message. Any page still describing flying CWO applications is describing a program that has been closed for over a decade. (Naval History and Heritage Command's rank history corroborates: the trial flying program “was subsequently eliminated in 2013,” and WO1's 2019-era return was for cyber, entry 34.)",
      },
      body: [],
      flags: [
        "NAVADMIN 192/13's text was read on an unofficial mirror host (linked below) — the message number and substance are the Navy's; pull the message from MyNavyHR for any official use.",
      ],
      links: [
        {
          label: "NAVADMIN 192/13, as archived (unofficial mirror — cite the NAVADMIN number)",
          url: "https://navadmin-viewer.fly.dev/NAVADMIN/192/13",
        },
      ],
      source: "NAVADMIN 192/13 (Aug 1, 2013); Naval History and Heritage Command rank history",
    },
    {
      id: "e35",
      n: 35,
      name: "Air Force — Warrant Officers (17W / 17Y)",
      branch: "Air Force",
      degree: "No degree required",
      summary:
        "Air Force warrant officers: NEW / EVOLVING — reintroduced in 2024 after a 66-year absence, WOTS at Maxwell AFB, first class of 30 graduated December 6, 2024. ONLY two specialties are published: 17W Warfighter Communications & IT Systems Operations and 17Y Cyber Effects & Warfare Operations. Governed by interim AFGM2026-36-2033 (Feb 4, 2026), which becomes VOID one year after its date.",
      who: "Enlisted Airmen (and Guard/Reserve members) in — or qualified for — the 17W/17Y communications/IT/cyber fields. Everyone else: there is no Air Force warrant door for your field as published.",
      verdict: {
        kind: "new",
        label: "NEW / EVOLVING — INTERIM GUIDANCE, VOID DATE PRINTED",
        text: "The Air Force reintroduced warrant officers in 2024 after a 66-year absence, and the program is still in its first cohorts — everything on this card should be re-verified at each content refresh. Governing document: AFGM2026-36-2033, Reimplementing Warrant Officers (Feb 4, 2026) — an interim guidance memorandum that states it becomes void one year after its date (void after Feb 4, 2027); a permanent DAF publication is expected to supersede it.",
      },
      body: [
        "Announced Feb 12, 2024, in the Department of the Air Force's reoptimization announcements (“reintroduce warrant officers in IT and Cyber fields to maintain technical leadership in these highly perishable skills”). Warrant Officer Training School (WOTS) stood up at Maxwell AFB, Alabama (first commandant in place June 2024) under the Holm Center / Air Force Accessions Center. The first class of 30 graduated December 6, 2024 — the first Air Force warrant officers in 66 years — with further classes following (second class Mar 13, 2025; more than 100 graduated by late 2025; Class 27-01 graduated October 1, 2026). WOTS describes its capacity as up to ~300 candidates annually.",
        "Only two specialties are published: 17W — Warfighter Communications & IT Systems Operations, and 17Y — Cyber Effects & Warfare Operations (AFGM2026-36-2033, Ch. 2: the “initial cadre” serves in these two career fields). No other AFSCs are warrant fields as published. The program draws from Active, Guard, and Reserve applicants — the governing guidance memorandum “immediately establishes warrant officers in the Regular Air Force (RegAF), Air Force Reserve (AFR), and Air National Guard (ANG).” Regular Air Force selectees incur a 5-year active-duty service commitment from appointment, per the memorandum.",
      ],
      flags: [
        "Course-length conflict, printed as found: the WOTS school page describes WOTS as an “8-week” in-residence training and accessions program; the Accessions Center's article on the Class 27-01 graduation calls it an “8.5-week” officer accessions training program, and AFGM2026-36-2033 has been characterized in official summaries as a 40-day course. Official Air Force sources use all three; this card prints “8 weeks (school page) / 8.5 weeks (graduation reporting)” and flags the variance rather than picking one.",
      ],
      links: [
        {
          label: "AFGM2026-36-2033 — Reimplementing Warrant Officers",
          url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/afgm2026-36-2033/afgm2026-36-2033.pdf",
        },
        {
          label: "WOTS — AF Accessions Center (Holm Center)",
          url: "https://www.afaccessionscenter.af.mil/Holm-Center/WOTS/",
        },
        {
          label: "Class 27-01 graduation (Oct 1, 2026)",
          url: "https://www.afaccessionscenter.af.mil/News/Article-Display/Article/4620061/warrant-officer-training-school-celebrates-newest-graduates/",
        },
      ],
      source: "AFGM2026-36-2033 (Feb 4, 2026); AF Accessions Center — WOTS",
    },
    {
      id: "e36",
      n: 36,
      name: "Coast Guard — Chief Warrant Officer Appointment (Active Duty)",
      branch: "Coast Guard",
      degree: "No degree required",
      summary:
        "Coast Guard CWO appointment: appointed FROM the enlisted ranks by selection board (PSC, COMDTINST M1420.1) — active duty, one specialty only tied to your rating, appointment to CWO2 (the CG does not use WO1 or CWO5). Published ceiling: no more than 26 years of active-duty service as of the board year's cutoff (PY25). Minimum grade/TIS figures are WITHHELD — verify in the current PSC Appointment Guide.",
      who: "Active-duty enlisted Coast Guardsmen competing within their own rating's specialty at the annual appointment board.",
      verdict: {
        kind: "withheld",
        label: "MINIMUM FIGURES WITHHELD — VERIFY IN THE PSC GUIDE",
        text: "THIN SOURCING FLAG — read before using any minimums: the standing eligibility minimums most often quoted for CG CWO (an E-6 floor, a top-half SWE standing expectation for E-7s, and a minimum total active service with the last portion in the Coast Guard) were located during research only in unofficial study-card reproductions of the manual's text, not read directly in COMDTINST M1420.1. This card therefore prints the board structure, the one-specialty rule, the CWO2 appointment grade, and the published 26-year ceiling — and does NOT print minimum grade/TIS figures. Verify the minima in the current Active Duty CWO Appointment Guide (PSC-OPM) before relying on any number.",
      },
      body: [
        "The Coast Guard appoints CWOs from its enlisted ranks by selection board, administered by the Personnel Service Center under COMDTINST M1420.1, Appointing Warrant Officers (with COMDTINST M1000.3, Officer Accessions, Evaluations, and Promotions). The published structure from PSC's board messages (ALCGPSC series): members on active duty compete for appointment in one specialty only, tied to their rating; CG PSC publishes a pre-board eligibility list with eligibility scores before the board convenes; and appointment is to CWO2 — the Coast Guard does not use WO1 or CWO5. The PY25 timeline message (ALCGPSC 150/24) publishes a ceiling alongside the structure: members cannot have more than 26 years of active-duty service as of the board year's cutoff. Declining or removing oneself from consideration carries published re-compete consequences (ALCGPSC 082/24: a two-year bar in one window, five years in another — cycle messages control the exact terms).",
      ],
      flags: [],
      links: [
        {
          label: "ALCGPSC 150/24 — PY25 AD CWO Appointment Board timelines",
          url: "https://www.dcms.uscg.mil/Portals/10/CG-1/PPC/150-24_ALCGPSC.pdf?ver=ItET3cc9HzChY8_V4Yss_Q==",
        },
        {
          label: "ALCGPSC 033/25 — PY25 pre-board eligibility list",
          url: "https://www.dcms.uscg.mil/Portals/10/CG-1/PPC/033-25_ALCGPSC.pdf?ver=1dTIB7KqfFajk8cWj43k8w%3d%3d",
        },
      ],
      source: "COMDTINST M1420.1; ALCGPSC 150/24; ALCGPSC 033/25",
    },
    {
      id: "e37",
      n: 37,
      name: "Coast Guard — Reserve CWO Appointments (RC-CWO)",
      branch: "Coast Guard",
      degree: "No degree required",
      summary:
        "Coast Guard Reserve CWO: the Reserve runs its own appointment process through PSC-RPM under the PY25 RC-CWO Appointment Guide (Jan 2025), separate from the active-duty board — appointment by board, within a specialty, to CWO2. Reserve-specific minima carry the same verify-in-the-guide instruction as the active-duty program.",
      who: "Coast Guard Reserve enlisted members seeking a Reserve CWO appointment.",
      body: [
        "The Reserve runs its own appointment process through PSC-RPM under the PY25 RC-CWO Appointment Guide (Jan 2025), separate from the active-duty board and its guide. Structure mirrors the active-duty program — appointment by board, within a specialty, to CWO2 — but eligibility and process are the Reserve guide's, administered by RPM.",
      ],
      flags: [
        "The public PSC pages located in research describe the process at guide level only; Reserve-specific minima carry the same verify-in-the-guide instruction as entry 36 — no figures print here.",
      ],
      links: [
        {
          label: "PSC — Reserve Personnel Management Division (RPM)",
          url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-Division-RPM/RPM-2/",
        },
      ],
      source: "PY25 RC-CWO Appointment Guide (Jan 2025); PSC-RPM",
    },
    {
      id: "e38",
      n: 38,
      name: "Space Force — No Warrant Program (Verified Negative)",
      branch: "Space Force",
      degree: "Not a program",
      summary:
        "Space Force warrant officers: THERE ARE NONE — verified negative. The Space Force has no warrant officers and no warrant program, stated in its own publications: warrant and chief warrant officers are not eligible for interservice transfer because “the Space Force does not have a warrant officer rank structure.” The Air Force warrant revival is an AIR FORCE program; it does not create a Space Force warrant corps.",
      who: "Guardians whose goal is a warrant appointment: your real doors are the Air Force program through DAF channels as those channels publish eligibility, or a Part 1 commission — both leave the warrant question outside the Space Force.",
      verdict: {
        kind: "negative",
        label: "VERIFIED NEGATIVE — NO PROGRAM EXISTS",
        text: "The Space Force has no warrant officers and no warrant program. This is stated in the Space Force's own official publications: its interservice-transfer FAQs say warrant and chief warrant officers are not eligible for transfer because “the Space Force does not have a warrant officer rank structure,” and its recruiting guide tells Guardians the same (“the USSF doesn't have warrant officers”). The Department of the Air Force warrant revival (entry 35) is an Air Force program under DAF structure; it does not create a Space Force warrant corps. Do not print a “Space Force warrant” route in any form — this card is the whole entry.",
      },
      body: [],
      flags: [],
      links: [
        {
          label: "USSF Interservice Transfer FAQs (FY24)",
          url: "https://www.spaceforce.mil/Portals/1/FY24 USSF Interservice Transfer Application Process.pdf",
        },
        {
          label: "Space Systems Command — Guide to Becoming a Guardian",
          url: "https://www.ssc.spaceforce.mil/Newsroom/Article-Display/Article/3768622/from-earth-to-orbita-guide-to-becoming-a-guardian",
        },
      ],
      source: "USSF IST FAQs (FY24); SSC Guide to Becoming a Guardian",
    },
  ],
};

/* ------------------- Tile 3 — Officer → Enlisted ------------------------ */

export const OFFICER_ENLISTED_FINDING =
  "THE FINDING, PLAINLY: No service publishes a direct in-service “conversion” program that turns a commissioned officer into an enlisted member in place — nothing comparable to the boards and programs in the other two tiles exists for this direction, in any branch, in any official source located for this research. What actually happens, as official sources frame it, is a sequence of separate actions: the officer separates (or resigns the commission), and then enlists — as a prior-service applicant — under the gaining service's prior-service rules, at an enlisted grade set by policy, not by the officer grade previously held. The one partial exception is narrow and Army-specific: commissioned officers of other services may apply to the Army's 153A warrant board with a conditional resignation of commission (entry 28) — that lands in the warrant corps, not the enlisted ranks. The five entries in this tile document the real mechanisms and label the thin spots instead of inventing a program. ZERO of them are programs.";

const TILE_OFFICER_ENLISTED: CommTile = {
  key: "officer-enlisted",
  label: "Officer → Enlisted",
  tileSub: "Entries 39–43 · zero programs — the real mechanisms",
  intro:
    "The rare direction, treated honestly. There is no conversion program to apply to — so this tile does not invent one. It documents what official sources actually support: separation followed by prior-service enlistment, a fresh grade determination (the officer grade is NOT kept), the twice-passed-over/RIF context flagged for its thin sourcing, the one narrow in-service reduction provision in Army regulation (an enlisted provision), and the not-found result for every other branch.",
  entries: [
    {
      id: "e39",
      n: 39,
      name: "Separation → Prior-Service Enlistment (The Actual Route)",
      branch: "All services",
      degree: "Not a program",
      summary:
        "Officer to enlisted — the actual route: there is NO conversion program. The former officer separates (or resigns the commission), then enlists as a PRIOR-SERVICE applicant through a recruiter under the gaining service's prior-service business rules for that fiscal year; a DD Form 368 conditional release is involved where an obligation remains. The Marine frame is PSEP (MCO 1130.80B) — a former-member program, which is exactly the posture a separated officer is in.",
      who: "Officers who have separated (or are separating) and intend to enlist; start with the gaining service's recruiter and its current prior-service business rules.",
      body: [
        "The path runs through the prior-service enlistment machinery documented in Switch Branches: the former officer applies through a recruiter as a prior-service applicant; a DD Form 368 conditional release is involved where an obligation remains; and accession is governed by the gaining service's prior-service business rules for that fiscal year (which specialties are open to prior-service applicants at all is a business-rules question, answered by the current rules, not by this card). Marine-flavored variant, from the Switch Branches research: the Corps' Prior Service Enlistment Program (PSEP), under MCO 1130.80B, is the published frame for former and Reserve Marines returning to active enlisted service — it is a former-member program, which is exactly the posture a separated officer is in.",
      ],
      flags: [],
      links: [],
      source: "Prior-service enlistment machinery — see Switch Branches (PSEP frame, DD 368 mechanics, prior-service business rules)",
      crossLinks: [{ label: "Prior-service machinery → Switch Branches", view: "switchbranches" }],
    },
    {
      id: "e40",
      n: 40,
      name: "Grade Determination — The Officer Grade Is NOT Kept",
      branch: "All services",
      degree: "Not a program",
      summary:
        "Officer grade NOT kept on enlistment: a former officer who enlists does not carry the officer grade into the enlistment. Enlisted accessions receive a formal GRADE DETERMINATION under the gaining service's accession policy — prior service is an input, but the grade granted is the one the determination produces. Get the recruiter's grade determination in writing before signing. (“You keep your grade” is the officer-to-officer transfer rule — it does NOT apply here.)",
      who: "Anyone pricing this move — assume the enlisted grade is a fresh determination.",
      body: [
        "State this without softening: a former officer who enlists does not carry the officer grade into the enlistment. Enlisted accessions — including prior-service accessions — receive a formal grade determination under the gaining service's accession policy: prior service is an input to that determination (it commonly supports enlistment above the entry grade), but the enlisted grade granted is the one the determination produces, and recruiting/prior-service pages frame prior-service grade outcomes as set by policy and subject to reduction from the last grade held.",
      ],
      flags: [
        "Contrast that prevents a common error: officers transferring AS officers under DoDI 1300.04 / 10 U.S.C. §716 generally retain grade — that rule governs officer-to-officer transfers and has NO application to an officer enlisting. Anyone quoting “you keep your grade” for the officer→enlisted direction is importing the wrong rule. The retired-grade statute (10 U.S.C. §1370) likewise governs the grade an officer retires in, not an enlistment grade.",
      ],
      links: [],
      source: "Gaining-service accession policy — see Switch Branches, grade-determination entry",
      crossLinks: [{ label: "Grade determination → Switch Branches", view: "switchbranches" }],
    },
    {
      id: "e41",
      n: 41,
      name: "The Twice-Passed-Over / RIF Context (Flagged: Thin Sourcing)",
      branch: "All services",
      degree: "Not a program",
      summary:
        "Twice passed over / RIF officer enlisting to reach 20 years: the recurring real-world pattern behind most officer→enlisted moves — flagged THIN. The mechanism (separation, then prior-service enlistment) is officially documented, but NO official source presents “enlist to reach retirement after non-selection” as a program, a guaranteed outcome, or a published pathway. Do not resign a commission on the strength of an assumed enlistment or an assumed retirement outcome.",
      who: "Officers under non-selection or RIF pressure evaluating the enlist-to-continue option with a personnel center, not a recruiter's assurance.",
      body: [
        "The recurring fact pattern behind most real officer→enlisted moves: an officer facing separation after twice failing selection for promotion, or separated in a reduction in force (RIF), who enlists to continue serving toward a 20-year retirement rather than leaving with nothing.",
        "What prints here is only this: the context exists, the mechanism is entries 39–40, retirement arithmetic for mixed commissioned/enlisted service is a finance/personnel-center question (DFAS and the service personnel center hold the binding answer for an individual record), and no one should resign a commission on the strength of an assumed enlistment or an assumed retirement outcome — both determinations happen after, by other authorities.",
      ],
      flags: [
        "SOURCING FLAG — this context is real but “published-adjacent,” and it is treated accordingly: the pattern is widely discussed in secondary and community sources, and the mechanics it depends on (entries 39–40) are officially documented — but no official program page located in this research presents “enlist to reach retirement after non-selection” as a program, a guaranteed outcome, or a published pathway, and no official source located promises that prior commissioned service plus a later enlistment will combine into a retirement on any particular terms. No link is printed — deliberately. The binding sources are the individual's personnel center and DFAS, through official channels.",
      ],
      links: [],
      source: "No official program source exists — personnel center and DFAS hold the binding answers",
    },
    {
      id: "e42",
      n: 42,
      name: "Voluntary Reduction in Grade IN Service — Army Regulation (Enlisted, Narrow)",
      branch: "Army",
      degree: "Not a program",
      summary:
        "Voluntary reduction AR 600-8-19 ¶10-19: the closest in-service analogue in regulation — and it is an ENLISTED provision. A USAR Soldier on AGR status may request a one-grade voluntary reduction to qualify for a new tour position; the same paragraph confirms the structure of this whole tile: enlistment at a lower grade is a contractual agreement executed AFTER discharge — “it is not considered a grade reduction within the meaning of this regulation.” Officers: this provision does not apply to you.",
      who: "USAR AGR Soldiers facing a tour-position grade mismatch; officers — this provision does not apply to you.",
      body: [
        "The closest in-service analogue in regulation is AR 600-8-19, ¶10-19, “Voluntary reduction” — and it is an enlisted provision, printed here at summary level with its limits stated: a U.S. Army Reserve Soldier on AGR status may request a voluntary reduction of one pay grade to qualify for a new tour position when the current tour is not being renewed and no position in grade and MOS is available; and a Soldier may volunteer for reduction to one or more lower grades for specified purposes including voluntary entry on active duty in the Regular Army (under AR 135-210) or AGR status (under AR 135-18).",
        "The same paragraph carries a clarifying note worth printing because it draws the exact line this tile is about: enlistment at a lower grade in the Regular Army, the Guard, or another armed force is a contractual agreement executed after discharge — “it is not considered a grade reduction within the meaning of this regulation,” and later reentry does not authorize grade restoration. In other words, the Army's own regulation confirms the structure of entry 39: crossing down happens by separation + new contract, not by an in-place conversion.",
      ],
      flags: [
        "The paragraph text was located via official Army Board for Correction of Military Records decisions quoting AR 600-8-19 ¶10-19 and via the regulation's text on a non-official mirror; the current edition of AR 600-8-19 on the Army Publishing Directorate is the citable source.",
      ],
      links: [
        {
          label: "AR 135-210 (the voluntary-entry-on-active-duty regulation ¶10-19 points to)",
          url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN43058-AR_135-210-000-WEB-1.pdf",
        },
      ],
      source: "AR 600-8-19 ¶10-19; AR 135-210",
    },
    {
      id: "e43",
      n: 43,
      name: "Other Branches — In-Service Officer→Enlisted: NOT FOUND",
      branch: "Marine Corps / Navy / Air Force / Space Force / Coast Guard",
      degree: "Not a program",
      summary:
        "Officer to enlisted, other branches: NOT FOUND — for the Marine Corps, Navy, Air Force, Space Force, and Coast Guard, no published in-service voluntary-reduction or officer-to-enlisted conversion provision was located at the level of an official program page or published instruction summary. That is a research result, not proof no personnel-center mechanism exists: start at your personnel center (MMEA / NPC / AFPC / PSC). There is no published program to print, and this card prints none.",
      who: "Officers in any service weighing this direction — the personnel center, not a program page, is your first stop.",
      body: [
        "For the Marine Corps, Navy, Air Force, Space Force, and Coast Guard, no published in-service voluntary-reduction or officer-to-enlisted conversion provision was located in research at the level of an official program page or published instruction summary. That is reported as a research result, not as proof that no personnel-center mechanism exists in any circumstance: resignations of commission followed by enlistment are processed case-by-case through personnel centers in the naval and Coast Guard services, and any member pursuing it should start at their personnel center (MMEA / NPC / AFPC / PSC) — but there is no published program to print, and this card prints none.",
      ],
      flags: [],
      links: [],
      source: "Research result — no official program page located (Nov 2026)",
    },
  ],
};

export const COMM_TILES: CommTile[] = [TILE_OFFICER, TILE_WARRANT, TILE_OFFICER_ENLISTED];

export const COMM_ALL_ENTRIES: CommEntry[] = COMM_TILES.flatMap((t) => t.entries);

/** The pack's deliberate exclusions — printed so the gaps are visible,
 * never silently filled. */
export const COMM_EXCLUSIONS =
  "Not in this section, deliberately: civilian commissioning entry, academy/ROTC entry from civilian life, and direct-commission programs for credentialed professionals live in Becoming an Officer (Joining). The Navy's MECP (Medical Enlisted Commissioning Program) — a real STA-21-adjacent nursing route inside the OPNAVINST 1420.1B family — was not detailed in the research pass and ships only after its own verification pass; the STA-21 Nurse Corps Option (entry 15) is the degree route verified here. Professional-degree in-service pipelines named in DAFMAN 36-2032 Ch. 10 (IPAP, Enlisted to Medical Degree Preparatory Program, JAG FLEP/ELP and equivalents) are specialty pipelines, not general corps-change routes — candidates for the Education/Medical sections. State/Guard-specific warrant and OCS variants run through state OSM offices. Interservice transfers beyond the doors printed here live in Switch Branches and Switching Components.";
