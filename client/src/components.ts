// Switching Components (Active ⇄ Reserve) — transcribed from the
// researched pack (~/workspace/military-app/components/components.md,
// researched Nov 9, 2026). The pack is the content source of truth:
// 21 numbered entries in four sections plus the coverage matrix.
// Program facts print as the official pages publish them; ⚠ flags
// print visibly as flags — never blended, never silently resolved.
//
// Binding fidelity rules carried from the pack and the build brief:
// - Palace Chase conversion: UNRESOLVED. Only the AFPC brochure's
//   principle prints (obligation EXTENDED, not reduced; eligibility
//   thresholds half of initial commitment, two-thirds for officers).
//   No conversion multiple is stated anywhere in this section, in any
//   form.
// - Space Force: NO reserve component exists. Entry 8 is a finding
//   under the Space Force Personnel Management Act (PMA) — no USSF
//   reserve route is invented, and no transfer window dates print.
// - The Coast Guard has no program named AGR; its full-time reserve
//   support is EAD contracts, ADOS, and the RCM cadre.
// - One widely described Army Guard trial nickname is NOT a program:
//   it appears only inside entry 4's ⚠ flag, as the pack words it,
//   and nowhere else in this section.
// - ZERO quotas, vacancy lists, open-specialty lists, application-
//   cycle/window dates, and bonus figures anywhere. Published process
//   frames from the governing publications (DAP's submission frame,
//   AC2TAR's PRD window, Palace Front's six-months-to-DOS frame) are
//   program structure and print as the pack prints them.
// - Officer-thinness flags stay printed where the pack flags them.
// - DD Form 368 appears at cross-link level only (Switch Branches
//   carries the mechanics); drill life routes to the Guard & Reserve
//   Hub; USERRA/SCRA to Know Your Rights; retirement math to the
//   Retirement Hub.

import type { RefLink } from "./refdata";

/** App view keys this section cross-links into (never duplicates). */
export type CompViewKey =
  | "switchbranches"
  | "reserve"
  | "rights"
  | "retirement"
  | "education"
  | "records"
  | "clearance"
  | "healthhq"
  | "pay";

export type CompCrossLink = { label: string; view: CompViewKey };

export type CompBullet = { title?: string; text: string };

export type CompEntry = {
  id: string;
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  who: string;
  body: string[];
  bullets?: CompBullet[];
  flags: string[];
  links: RefLink[];
  source: string;
  crossLinks?: CompCrossLink[];
};

export type CompTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: CompEntry[];
};

export const COMPONENTS_INTRO =
  "Moving between the active component and the reserve component — in either direction, in any branch — as the services' own official pages publish it: the named programs, the counseling doors, and the paperwork frames. Almost every program here is built around one selling point the services repeat in their own words: affiliate without a break in service. Do the paperwork before you separate, and continuity, retirement points, health coverage transitions, and grade outcomes are all negotiated while you are still a known quantity in uniform.";

export const COMPONENTS_STANDING =
  "This section prints no quotas, no vacancy lists, no open-specialty lists, no application-window dates, and no bonus figures — those rotate constantly, and every entry routes you to the live official source that holds the current answer (C-WAY, the MyNavyHR RC-to-AC page, current MILPERs and MARADMINs, myFSS, PSC messages). Where official sources conflict or a fact could not be fully verified, the ⚠ flag prints with the entry — read it as printed.";

/* ------------------------- Coverage matrix (pack §5) ------------------------ */

export type MatrixRow = { branch: string; acToRc: string; rcToAc: string };

export const COVERAGE_MATRIX: MatrixRow[] = [
  {
    branch: "Army",
    acToRc: "RCCC counseling at transition; affiliate into USAR/ARNG/IRR, up to 180 days out, no break (entry 4)",
    rcToAc: "CAD (HRC, MILPER cycles, mostly officers/WO ⚠) + enlisted via recruiters/prior-service rules; AGR = full-time-in-Reserve alternative (entries 10–11)",
  },
  {
    branch: "Marine Corps",
    acToRc: "DAP — SMCR/IMA at EAS, year-round, enlisted, via career planner (entry 5)",
    rcToAc: "AR Program accession via PSR/career planner → CMC (RA); AC augmentation via PSEP; ADOS = temporary (entry 12)",
  },
  {
    branch: "Navy",
    acToRc: "AC2SELRES (C-WAY) / AC2TAR at EAOS, MILPERSMAN 1306-1501 (entry 6)",
    rcToAc: "RC2AC / RC2TAR, MILPERSMAN 1306-1502, C-WAY ≤E-6 / Salesforce E-7+; CANREC = temporary recruiting recall (entries 13–14)",
  },
  {
    branch: "Air Force",
    acToRc: "Palace Front (at DOS) / Palace Chase (early release, obligation extended) via ISR + myFSS (entry 7)",
    rcToAc: "VLPAD tours (DAFI 36-2008); full-time AGR (military) / ART (dual-status civilian) in the ARC (entries 15–16)",
  },
  {
    branch: "Space Force",
    acToRc: "⚠ No reserve component — single-component PMA: AFR space-field members transfer in, full- or part-time (entry 8)",
    rcToAc: "Same PMA door (full-time tranche); DAFI 36-2008 names USSF for VLPAD/CIP ⚠ (entries 8, 15)",
  },
  {
    branch: "Coast Guard",
    acToRc: "Officers: R2R Panel (PSC); enlisted: separation + SELRES accession via recruiter / PSC-RPM-2 ⚠ (entry 9)",
    rcToAc: "EAD contracts via PSC-OPM-1/EPM-1 → integration into the Regular CG; ROASP for officers on EAD (entry 17)",
  },
];

export const PROGRAMS_NAMED_LINE =
  "Programs named in this section: DAP · AC2SELRES · AC2TAR · RC2AC · RC2TAR · CANREC · TAR (ex-FTS) · Palace Chase · Palace Front · PMA (Space Force) · R2R · ROASP · EAD · ADOS · CAD · AGR (USAR + ARNG Title 32) · AR Program · PSEP (augmentation context) · VLPAD · CIP · ART · RCCC route.";

/* ------------------------------ The Landscape ------------------------------ */

const LANDSCAPE: CompTile = {
  key: "landscape",
  label: "The Landscape",
  tileSub: "Entries 1–3 · Read this first",
  intro:
    "Read these three before any other entry in this section: what a component actually is, why the no-break-in-service thread runs through every program below, and where the DD Form 368 fits (at cross-link level — its mechanics live in Switch Branches).",
  entries: [
    {
      id: "landscape-components",
      name: "Two components, one career — and three kinds of “full-time Reserve”",
      summary:
        "Two components, one career: AGR, TAR, and AR are full-time RESERVE-component statuses, not active-component accessions; ART is a dual-status civilian employment route. Retirement, promotion, and affiliation follow COMPONENT, not duty status. Governed DoD-wide by DoDI 1300.04.",
      who: "Everyone — read before any other entry in this section.",
      body: [
        "Every branch divides its people into an active component (full-time, regular) and one or more reserve components (the federal Reserve, and for the Army and Air Force also the National Guard). Moving between them is a component change, governed DoD-wide by DoD Instruction 1300.04 (inter-service and inter-component transfers) — the same instruction that governs branch switches, which is why the paperwork overlaps.",
        "The single most misunderstood fact in this whole area: several programs put reserve-component members on full-time active-duty pay and benefits without making them active-component members.",
      ],
      bullets: [
        {
          title: "AGR (Active Guard and Reserve)",
          text: "Army Reserve, Army National Guard (Title 32, state-run), Air Force Reserve, and Air National Guard. AGR members serve full-time in support of the reserve component and remain reserve-component members. An AGR tour is not an accession into the active component, and it does not convert you.",
        },
        {
          title: "TAR (Navy)",
          text: "Training and Administration of the Reserve. TAR Sailors are Navy Reserve members serving full-time administering and training the Reserve force. (Name history in the Navy TAR entry in Reserve → Active — the Navy changed this community's name twice; TAR is the current one.)",
        },
        {
          title: "AR (Marine Corps)",
          text: "The Active Reserve Program. Same pattern: Reserve Marines on full-time active duty supporting the Reserve force (the AR Program entry in Reserve → Active).",
        },
        {
          title: "ART (Air Force)",
          text: "Air Reserve Technicians are different again: dual-status federal civilian employees who hold a civilian job in their own unit during the week and are military members of that same unit. ART is an employment route, not an orders status.",
        },
        {
          title: "Coast Guard",
          text: "Has no program named AGR. Its full-time reserve support runs through Extended Active Duty (EAD) contracts, ADOS orders, and its Reserve Component Manager officer cadre, all administered by the Personnel Service Center (the Coast Guard EAD entry in Reserve → Active).",
        },
      ],
      flags: [
        "Why this matters: retirement, promotion competition, and your long-term component affiliation follow your component, not your duty status. “I've been on active duty for six years” on AGR/TAR/AR orders does not mean you are in the active component — and going active-component later is a separate accession with its own board, quota, and grade determination.",
      ],
      links: [],
      source: "DoDI 1300.04 framework — see Switch Branches, entry 1",
      crossLinks: [{ label: "Switch Branches — the DoDI 1300.04 / DD 368 frame", view: "switchbranches" }],
    },
    {
      id: "landscape-no-break",
      name: "The no-break-in-service advantage",
      summary:
        "Affiliate without a break in service — the thread running through every program in this section: continuity for longevity/pay-date purposes, retirement-point continuity in one record, health coverage transitions, and grade and job outcomes negotiated while you are still in uniform.",
      who: "Anyone within ~a year of a separation or component decision.",
      body: [
        "Almost every program in this section is built around one selling point the services repeat in their own words: affiliate without a break in service. Doing the paperwork before you separate — rather than separating, sitting out, and reapplying as a prior-service applicant — generally preserves:",
      ],
      bullets: [
        { title: "Continuity of service", text: "for longevity/pay-date purposes." },
        {
          title: "Retirement-point continuity",
          text: "points earned in either component count in one record (the retirement entry in What Carries Over).",
        },
        {
          title: "Health coverage transitions",
          text: "some affiliation routes carry transitional TRICARE coverage that a clean break does not (the health care entry in What Carries Over).",
        },
        {
          title: "Grade and job outcomes",
          text: "direct affiliation is negotiated while you are still a known quantity in uniform; prior-service reentry runs through recruiter business rules and a fresh grade determination, and services state plainly that prior-service accessions may come in at a reduced grade.",
        },
      ],
      flags: [
        "None of that is automatic. Direct affiliation still requires eligibility, an available billet or quota, and signed paperwork on both sides. The programs in this section are ordered the way the services present them: affiliate first, separate-and-return second.",
      ],
      links: [],
      source: "The services' published affiliation framing, across the entries in this section",
    },
    {
      id: "landscape-dd368",
      name: "DD Form 368 — where it appears in component moves",
      summary:
        "DD Form 368 (conditional release): needed when you are still under an obligation to one component/service and want to be gained by another — most often in cross-service component moves. Full mechanics and signature authorities live in Switch Branches, entry 1 — not repeated here.",
      who: "Anyone whose move crosses a service line, or whose current component holds an unfulfilled obligation (including remaining MSO time — see the Before You Sign checklist).",
      body: [
        "A conditional release (DD Form 368) is needed when you are still under an obligation to one component/service and want to be gained by another — most often in cross-service component moves (e.g., an Army Reserve Soldier joining the active Navy) and in some same-service moves where your current component must formally release you. The gaining side starts the form; your losing service's personnel-center authority signs it — generally not your unit commander. Both sides must agree; there is no appeal of a denial; approvals expire.",
        "Full mechanics, signature authorities per service, and worked examples live in the Switch Branches section, entry 1 — this section does not repeat them.",
      ],
      flags: [],
      links: [],
      source: "Switch Branches pack, entry 1 (cross-link level only, by design)",
      crossLinks: [{ label: "Switch Branches — DD Form 368 mechanics, entry 1", view: "switchbranches" }],
    },
  ],
};

/* ---------------------------- Active → Reserve ----------------------------- */

const ACTIVE_TO_RESERVE: CompTile = {
  key: "ac2rc",
  label: "Active → Reserve",
  tileSub: "Entries 4–9 · One entry per branch",
  intro:
    "The affiliate-first direction: each branch's named route (or counseling door) for leaving active duty into the Reserve or Guard without a break in service — Army RCCC, Marine Corps DAP, Navy AC2SELRES/AC2TAR, Air Force Palace Front/Chase, the Space Force finding, and the Coast Guard's officer panel + enlisted route.",
  entries: [
    {
      id: "army-rccc",
      name: "Army — the Reserve Component Career Counselor (RCCC) route",
      summary:
        "Army RCCC route: every separating Soldier is counseled by a Reserve Component Career Counselor at the installation transition point; enlisted Soldiers work with an RCCC up to 180 days prior to separation to affiliate into the U.S. Army Reserve, Army National Guard, or IRR with no break in service.",
      who: "Every active Army Soldier approaching ETS/separation; start at the RCCC office during transition counseling, up to ~180 days out.",
      body: [
        "The Army runs its active→reserve flow through people, not a named accession program: every separating Soldier is counseled by a Reserve Component Career Counselor (RCCC) at the installation transition point. Installation pages describe the RCCC's job in the same words across posts: under AR 601-280 and DA PAM 601-280 the counselor briefs and counsels all separating Soldiers on their military service obligation (if any remains), the methods of fulfilling it, and the benefits of Reserve-component membership, and handles the administrative processing for transfer into the U.S. Army Reserve, Army National Guard, or Individual Ready Reserve.",
        "The Army National Guard's official prior-service page gives the timing: enlisted Soldiers work with an RCCC up to 180 days prior to separation for a smooth transition with no break in service (officers have a parallel transition-officer route, up to a year out). The same page confirms the Guard requires an approved DD Form 368 from applicants currently enlisted elsewhere, and notes MSO reductions and stabilization can apply — terms set at counseling, not in print here.",
      ],
      flags: [
        "“Try One”: a one-year trial enlistment in the Guard is widely described in recruiting-adjacent material and appears in older case law, but no current official Army/NGB page confirming “Try One” as a standing published option was found in this research — it is not shipped here as a program. If a recruiter offers a short trial enlistment, get its current name and terms in the contract, not from the nickname.",
      ],
      links: [
        { label: "RCCC role as installations publish it (Fort Lee career counseling)", url: "https://home.army.mil/lee/my-fort/all-services/career-counseling" },
        { label: "Army National Guard — prior service (RCCC timing, DD 368 requirement)", url: "https://nationalguard.com/prior-service" },
      ],
      source: "AR 601-280 / DA PAM 601-280 as installation pages publish the RCCC role; Army National Guard prior-service page",
      crossLinks: [{ label: "Switch Branches — DD Form 368 mechanics", view: "switchbranches" }],
    },
    {
      id: "usmc-dap",
      name: "Marine Corps — Direct Affiliation Program (DAP)",
      summary:
        "DAP — Direct Affiliation Program: qualified active-component Marines transition seamlessly to the reserve component via an SMCR unit or IMA detachment at EAS, with no break in service. Open year-round; submit no earlier than 365 days prior to EAS and no later than 30 days from EAS; the door is your career planner. Enlisted program as published (FY27 MARADMIN).",
      who: "Active enlisted Marines inside their final year before EAS who want to keep drilling with zero gap.",
      body: [
        "The Marine Corps' named route is the Direct Affiliation Program (DAP), published in the annual Enlisted Retention Campaign MARADMINs (MMEA). As the FY27 campaign message states it: DAP allows qualified active-component Marines to seamlessly transition to the reserve component via a Selected Marine Corps Reserve (SMCR) unit or an Individual Mobilization Augmentee (IMA) detachment at their EAS, with no break in service.",
        "The published mechanics: the program is open year-round; enlisted Marines may submit no earlier than 365 days prior to EAS and no later than 30 days from EAS; and the door is the Marine's career planner, who covers benefits, incentives, and lateral-move options as part of the package.",
        "DAP summaries published with the FY27 cycle list affiliation sweeteners — a guaranteed SMCR/IMA billet of choice, TAMP transitional TRICARE coverage, preserved GI Bill transfer eligibility, deferral of involuntary activation for a period after EAS, and IDT travel reimbursement.",
      ],
      flags: [
        "Amounts, durations, and incentive terms are fiscal-year-specific and are not printed in this section; the current MARADMIN and your career planner hold them.",
        "DAP is an enlisted program as published; officers use the Reserve officer affiliation routes through Reserve Affairs — flag: no single public officer-DAP page was verified. Officer routes are thinner in public sources here; do not read the enlisted frame onto an officer move.",
      ],
      links: [
        { label: "FY27 Enlisted Retention Campaign (DAP as published) — marines.mil", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4356385/fiscal-year-2027-enlisted-retention-campaign/" },
        { label: "DAP overview — MCCS Quantico", url: "https://quantico.usmc-mccs.org" },
      ],
      source: "FY27 Enlisted Retention Campaign MARADMIN (MMEA); MCCS Quantico DAP overview",
    },
    {
      id: "navy-ac2selres",
      name: "Navy — AC2SELRES and AC2TAR (MILPERSMAN 1306-1501)",
      summary:
        "AC2SELRES and AC2TAR per MILPERSMAN 1306-1501 (CH-91): component changes executed at EAOS so the Sailor is gained by the Reserve without a break in service. AC2SELRES runs through C-WAY for E-6 and below, with a NAVPERS 1306/7 (EPAR) fallback; AC2TAR applications run in the 13–16-months-prior-to-PRD window. NAVADMIN 303/23 required-SELRES wrinkle inside.",
      who: "Active enlisted Sailors approaching EAOS/PRD; officers use community-manager / PERS channels — flag: the 1306-1500 series is enlisted; no single public officer AC→RC page was verified.",
      body: [
        "The Navy publishes its active→reserve routes in MILPERSMAN 1306-1501 (current change CH-91, May 14, 2025), which governs two named component-change programs executed at EAOS so the Sailor is gained by the Reserve without a break in service:",
      ],
      bullets: [
        {
          title: "AC2SELRES",
          text: "active component to the Selected Reserve (drilling). Enlisted applications (E-6 and below) run through C-WAY (Career Waypoints); the article covers SELRES opportunities for E-3–E-6 with less than 14 years of contract time, processed until 90 days prior to soft EAOS, and Sailors may apply within 10 months of projected soft EAOS. Inside 90 days or without a C-WAY quota, the route is a NAVPERS 1306/7 (EPAR) submitted by the command career counselor, endorsed to the SELRES Enlisted Community Manager (BUPERS-3152).",
        },
        {
          title: "AC2TAR",
          text: "active component to TAR (the full-time Reserve community), via NAVPERS 1306/7 through the command to MNCC / BUPERS-352, with applications in the 13–16-months-prior-to-PRD window the article publishes.",
        },
      ],
      flags: [
        "The MSO wrinkle: under NAVADMIN 303/23, Sailors who entered contracts on or after October 1, 2020 and separate with less than 6 years of total service are subject to required Selected Reserve service to complete their military service obligation — for that population AC2SELRES is not purely elective. Check which side of that line you are on at counseling (see the Before You Sign checklist).",
        "Once C-WAY approves a SELRES affiliation, the Navy Reserve's transition machinery takes over: Navy Recruiting Reserve Command is the point of contact, the NAVPERS 1306/97 affiliation checklist drives the paperwork, and the Sailor is typically gained at a Navy Reserve Center in the weeks after EAOS (3–6 weeks per the Reserve Personnel Activity page — process timing as published, not a promise).",
      ],
      links: [
        { label: "MILPERSMAN 1306-1501 (PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1300/1306-1501.pdf" },
        { label: "Navy Reserve transition — RPAC Enlisted (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/Support-Services/Transition/RPAC/Enlisted/" },
      ],
      source: "MILPERSMAN 1306-1501 (CH-91, May 14, 2025); NAVADMIN 303/23; MyNavyHR RPAC–Enlisted",
    },
    {
      id: "af-palace",
      name: "Air Force — Palace Front and Palace Chase",
      summary:
        "Palace Front vs Palace Chase, per the AFPC brochure (DAFI 36-3211): Palace Front is a seamless transfer at your approved date of separation, inside six months of completing your commitment — not a voluntary separation program. Palace Chase is the early-release program (at least half of the initial commitment completed; two-thirds for officers) — and the obligation is EXTENDED in the Reserve component, not reduced. Step 1 is your In-Service Recruiter; applications run through myFSS.",
      who: "Active Airmen approaching DOS (Palace Front, inside 6 months of completing commitment) or mid-commitment and willing to trade remaining active time for a longer Reserve obligation (Palace Chase).",
      body: [
        "The Air Force's two named routes into the Air Reserve Component (Air Force Reserve + Air National Guard) are published together in the Air Force Accessions Center's official Palace Chase / Palace Front brochure (2024), governed by DAFI 36-3211. They are routinely confused; the brochure's distinction is exact:",
      ],
      bullets: [
        {
          title: "Palace Front",
          text: "for members within six months of completing their service commitment who already hold an approved date of separation. It is a seamless transfer from active duty into the Selected Reserve at that DOS. The brochure is explicit about what it is not: Palace Front is not a voluntary separation program and does not waive a current enlistment contract or active-duty service commitment — you serve out what you owe, then affiliate.",
        },
        {
          title: "Palace Chase",
          text: "the early-release program: members who have completed at least half of their initial service commitment (two-thirds for officers) may apply to be released from active duty early in order to transfer into the ARC — and they do so by extending their service obligation in the Reserve component. The brochure is equally explicit the other way: Palace Chase does not reduce the member's current service obligation; the remaining active-duty commitment is converted into a longer ARC commitment.",
        },
        {
          title: "The published process for both",
          text: "Step 1 — meet your In-Service Recruiter (ISR) for prescreening and counseling; Step 2 — the application runs through myFSS under DAFI 36-3211 and the Active Duty Separations PSD Guide. The brochure also maps the ARC jobs an affiliate can land in: full-time ART and AGR and part-time Traditional Reservist / IMA / IRR statuses (the AGR vs ART entry in Reserve → Active).",
        },
      ],
      flags: [
        "The conversion math is NOT printed here on purpose: the AFPC brochure states the principle (obligation extended, not reduced) but no multiplier, and official-adjacent sources disagree with each other. This section prints the brochure's framing only, and the exact conversion for your case comes from the ISR, DAFI 36-3211, and myFSS. Do not plan around any multiplier you read on a forum.",
      ],
      links: [
        { label: "Palace Chase–Front brochure (AF Accessions Center, PDF)", url: "https://www.afaccessionscenter.af.mil/Portals/110/Images/PALACE%20CHASE-FRONT%20Brochure_2024_04.pdf" },
      ],
      source: "Palace Chase / Palace Front brochure, Air Force Accessions Center (2024); DAFI 36-3211",
    },
    {
      id: "ussf-finding",
      name: "Space Force — there is no Reserve component (a finding)",
      summary:
        "Finding: the Space Force has NO reserve component. Under the Space Force Personnel Management Act (PMA), Guardians serve full-time or part-time inside a single component. Air Force Reservists in space career fields transfer in via announced tranches — no window dates are printed here; the live announcement on spaceforce.mil holds the current one.",
      who: "Air Force Reservists/Guardsmen in space career fields; Guardians asking component questions (answer: you change duty status, not component).",
      body: [
        "The Space Force breaks the pattern of this whole section, and this entry says so instead of inventing symmetry: the Space Force has no reserve component. Under the Space Force Personnel Management Act (PMA), enacted in the FY2024 NDAA, the Space Force is a single component in which Guardians serve in full-time or part-time roles inside the same service — the full-time/part-time distinction replaces the active/reserve one.",
        "As spaceforce.mil publishes it: Air Force Reservists in space-related career fields have been transferring into the Space Force in phases (full-time roles first, then part-time roles), applying through MyVector (CAC-required) via the Space Force Transfer page, with part-time selectees incurring a minimum service commitment stated in the announcement. The Air Force will no longer maintain the space career fields, so reservists holding them must eventually transfer or retrain.",
      ],
      flags: [
        "Applications have run in announced tranches/windows — this section prints no window dates; the live announcement on spaceforce.mil and the Transfer page hold the current one.",
        "A serving Guardian who wants to move the other way (out of full-time Space Force service into the Air Force Reserve/Guard, or into a part-time Guardian arrangement) runs through Department of the Air Force channels (AFPC / in-service recruiters) — no standalone public USSF component-change page was verified; treat any specific claim about Guardian→ARC moves as unconfirmed until AFPC publishes it. No standalone Guardian→ARC page is shipped here.",
      ],
      links: [
        { label: "PMA part-time transfer announcement — spaceforce.mil", url: "https://www.spaceforce.mil/News/Article-Display/Article/4290878/space-force-to-accept-air-force-reserve-volunteers-for-part-time-positions/" },
      ],
      source: "Space Force Personnel Management Act (FY2024 NDAA); spaceforce.mil PMA announcement",
    },
    {
      id: "cg-r2r",
      name: "Coast Guard — Regular to Reserve: the R2R Panel and enlisted affiliation",
      summary:
        "Coast Guard Regular to Reserve, via the Personnel Service Center (PSC): officers go through the Regular to Reserve (R2R) Panel (PY27 panel per ALCGPSC 079/26); enlisted members separate and affiliate through a Coast Guard recruiter, with PSC-RPM-2 the sole authority for SELRES assignments. Flag: no named enlisted direct-affiliation program page was verified.",
      who: "Regular CG officers (panel cycle — plan a year ahead); Regular enlisted members approaching discharge (recruiter + PSC-RPM-2).",
      body: [
        "The Coast Guard publishes its active→reserve flow through the Personnel Service Center (PSC) in two pieces:",
      ],
      bullets: [
        {
          title: "Officers — the R2R Panel",
          text: "The Regular to Reserve (R2R) Panel is the CG's officer route: per ALCGPSC 079/26 (June 1, 2026), the PY27 R2R Panel considers current and former Regular officers for a Coast Guard Reserve commission — a panel-based affiliation, run on the CG's annual panel cycle, administered through PSC's Reserve officer machinery (PSC-RPM). The same message kicks off ROASP (Reserve Officer Attrition/Retention — see the Coast Guard EAD entry in Reserve → Active) for the reverse direction.",
        },
        {
          title: "Enlisted — separation + SELRES accession",
          text: "The enlisted route as PSC structures it is separation from the Regular CG followed by Selected Reserve accession processed with a Coast Guard recruiter and PSC's enlisted Reserve division (PSC-RPM-2 is the sole authority for SELRES assignments, per its published mission). Start with your servicing personnel office and a recruiter before your discharge date so the affiliation is sequenced with the separation, not after it.",
        },
      ],
      flags: [
        "No named enlisted “direct affiliation program” page was verified on PSC's public site — the enlisted route is described here at PSC-structure level only, as PSC publishes it. R2R/ROASP kickoff: ALCGPSC 079/26 via CG message traffic (govdelivery) — search “ALCGPSC 079/26” on dcms.uscg.mil.",
      ],
      links: [
        { label: "PSC Reserve Personnel Management (RPM-2)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-Division-RPM/RPM-2/" },
      ],
      source: "USCG Personnel Service Center (PSC-RPM / PSC-RPM-2); ALCGPSC 079/26",
    },
  ],
};

/* ---------------------------- Reserve → Active ----------------------------- */

const RESERVE_TO_ACTIVE: CompTile = {
  key: "rc2ac",
  label: "Reserve → Active",
  tileSub: "Entries 10–17 · Boards, tours, and the full-time alternatives",
  intro:
    "The other direction — and the honest split inside it: true active-component accessions (Army CAD, Navy RC2AC, USMC PSEP augmentation, Coast Guard integration) versus the full-time-in-the-Reserve alternatives and tour programs that are not accessions at all (AGR, the AR Program, TAR via RC2TAR, VLPAD, CANREC, EAD). Entry 1's distinction runs through every card here.",
  entries: [
    {
      id: "army-cad",
      name: "Army — Call to Active Duty (CAD), plus the recruiter door",
      summary:
        "Call to Active Duty (CAD): HRC announces procurement programs by MILPER message under AR 135-210 to fill Regular Army vacancies from reserve-component officers and Soldiers — episodic, not standing, primarily commissioned and warrant officers in select grades and specialties. Enlisted RC→AC runs through Army recruiters under prior-service rules. HRC's detailed CAD pages are CAC-gated.",
      who: "RC officers/warrant officers watching for a CAD MILPER in their specialty; enlisted Soldiers via a recruiter under prior-service rules.",
      body: [
        "The Army's named RC→AC program is Call to Active Duty (CAD), run by Human Resources Command (HRC) under AR 135-210 (revised Dec 17, 2025): the regulation establishes that HRC announces procurement programs by MILPER message to fill Regular Army vacancies from reserve-component officers and Soldiers, under 10 U.S.C. §12301(d).",
        "As HRC's published announcements describe it, CAD has primarily targeted commissioned and warrant officers in select grades and specialties the active Army needs; it is explicitly not a branch-transfer program — selections are skills-and-requirements based, special branches have been excluded in past cycles, and accepted officers incur an active-duty service obligation stated in the governing MILPER.",
        "Enlisted RC→AC as currently structured runs through Army recruiters under USAREC's prior-service/inter-service processing rules (grade determination included — see Switch Branches), not through a standing enlisted CAD board; later CAD cycles have at times included NCO categories — again, MILPER-gated, check the current message.",
      ],
      flags: [
        "CAD is episodic, not standing: it opens in announced MILPER cycles for named grades/specialties, and HRC's detailed CAD pages are CAC-gated — this section prints no open-specialty lists and no obligation figures beyond the regulation's frame; the current MILPER is the only current answer.",
      ],
      links: [
        { label: "HRC — Human Resources Command (CAD detail is CAC-gated ⚠)", url: "https://www.hrc.army.mil" },
      ],
      source: "AR 135-210 (via Army Publishing Directorate — search “AR 135-210” at armypubs.army.mil); HRC",
      crossLinks: [{ label: "Switch Branches — prior-service grade determination", view: "switchbranches" }],
    },
    {
      id: "army-agr",
      name: "Army — AGR: the full-time alternative that is NOT active-component",
      summary:
        "Army AGR (Active Guard Reserve): full-time work, pay, and benefits in support of the Army Reserve — while remaining an Army Reserve Soldier. Applications run through HRC. Army National Guard AGR is a separate state-by-state Title 32 system (AR 135-18 / NGR 600-5) — same name, different door; there is no single national ARNG AGR application.",
      who: "RC members who want full-time service without leaving the Reserve; separating AC Soldiers who want to compete for full-time Reserve support jobs.",
      body: [
        "If what you actually want is full-time work, pay, and benefits, the Army Reserve publishes the alternative plainly on its AGR page: “With an Active Guard Reserve job, you receive full pay, medical care for you and your family, and the opportunity for retirement after 20 years of active service.” AGR Soldiers serve full-time on active-duty orders in units and organizations of the Army Reserve or that directly support it — and remain Army Reserve Soldiers (entry 1's distinction).",
        "Active-component Soldiers transitioning off active duty may compete for AGR positions — AGR is therefore also an AC→RC bridge that keeps a full-time paycheck. Applications run through HRC (AGR accessions lines are published on the USAR page for officers/warrant officers and enlisted separately).",
        "Army National Guard AGR is a separate, state-by-state Title 32 system run through each state's Human Resources Office under AR 135-18 / NGR 600-5 — same name, different door; there is no single national ARNG AGR application.",
      ],
      flags: [
        "Published eligibility details on the USAR AGR page are position- and grade-specific (the page's sample enlisted criteria reference specific grade bands and tour-completion rules) — this section does not generalize them; read the current vacancy announcements.",
      ],
      links: [{ label: "USAR AGR program — usar.army.mil", url: "https://www.usar.army.mil/AGR/" }],
      source: "U.S. Army Reserve AGR program page (HRC accessions)",
    },
    {
      id: "usmc-ar",
      name: "Marine Corps — the Active Reserve (AR) Program and augmentation",
      summary:
        "The Active Reserve (AR) Program: Reserve Marines on full-time active duty supporting the Reserve force — apply through a local Prior Service Recruiter (PSR) or unit Career Planner; packages go to CMC (RA) through TFRS under MCO 1001.52K. The separate door into the active component is augmentation via the Prior Service Enlistment Program (PSEP). ADOS orders are named at concept level only.",
      who: "RC Marines who want full-time Reserve-support careers (AR, via PSR/career planner); RC/AR Marines seeking true AC accession (PSEP augmentation, recruiter door).",
      body: [
        "The Marine Corps' full-time Reserve door is the Active Reserve (AR) Program, administered by Reserve Affairs Division (RA), Manpower & Reserve Affairs. Its Reserve Affairs Management (RAM) page is the official front door: “Marines applying for accession to Active Duty within the AR Program” apply through a local Prior Service Recruiter (PSR) or their unit Career Planner; packages are submitted to CMC (RA) through TFRS, reviewed by RAM-3 (the page publishes a ~30-day review as the process norm), and answered with an approval/denial letter. The governing order is MCO 1001.52K; MARADMIN 579/22 published the AR enlisted qualification standards and accession process, and CMC (RA) gives MCRC an annual accession mission by MOS — i.e., AR accessions are mission-driven, not walk-in.",
        "The separate, rarer door from AR (or RC generally) into the active component is augmentation, executed for enlisted Marines through the Prior Service Enlistment Program (PSEP) via a canvassing recruiter to MCRC — MARADMIN traffic shows AR Marines selected for AC programs being “non-competitively augmented to the active component” via PSEP packages. PSEP's published frame (Switch Branches, entry 5) is built for Marines and prior Marines; boat spaces and fiscal-year campaign plans govern.",
        "ADOS (Active Duty Operational Support) orders are the third, temporary pattern — short operational-support tours for RC Marines; this section names the concept only — mechanics and current opportunities live with RA/your unit, and drill-life treatment is in the Guard & Reserve Hub.",
      ],
      flags: [
        "Say it plainly (entry 1): AR Marines are Reserve Component Marines on active duty providing full-time support to the RC. AR service is not active-component service.",
      ],
      links: [
        { label: "Reserve Affairs Management (RAM) — manpower.marines.mil", url: "https://www.manpower.marines.mil/Divisions/Reserve-Affairs-Division/Reserve-Affairs-Management-RAM/" },
      ],
      source: "MCO 1001.52K; MARADMIN 579/22; Reserve Affairs Management (RAM) page",
      crossLinks: [
        { label: "Switch Branches — PSEP frame, entry 5", view: "switchbranches" },
        { label: "Guard & Reserve Hub — drill life", view: "reserve" },
      ],
    },
    {
      id: "navy-rc2ac",
      name: "Navy — RC2AC and RC2TAR (MILPERSMAN 1306-1502)",
      summary:
        "RC2AC and RC2TAR per MILPERSMAN 1306-1502: RC2AC takes Selected Reserve (or IRR) Sailors to the active component; RC2TAR takes them to the TAR full-time Reserve community. Applications run in C-WAY for E-6 and below and via Salesforce for E-7 and above. Live quotas live on MyNavyHR's RC-to-AC page, updated monthly — none are reproduced here.",
      who: "Drilling and IRR enlisted Sailors seeking active-component or TAR accession; check C-WAY/Salesforce routing by paygrade.",
      body: [
        "The mirror of the AC2SELRES/AC2TAR entry: MILPERSMAN 1306-1502 governs reserve→active component changes for enlisted Sailors, in two named programs:",
      ],
      bullets: [
        { title: "RC2AC", text: "Selected Reserve (or IRR) to the active component." },
        { title: "RC2TAR", text: "to the TAR full-time Reserve community (the TAR naming entry, next in this tile)." },
        {
          title: "Routing (MyNavyHR's RC to AC page)",
          text: "applications are submitted in C-WAY for E-6 and below, and via Salesforce for E-7 and above; the page itself publishes the current quotas, updated monthly — this section reproduces none of them by design; the page is the quota source (the RC2AC Program Coordinator contact is published on it).",
        },
      ],
      flags: [
        "Document-history flag the article itself carries: the Sep 7, 2022 change summary to 1306-1502 states “Changed FTS to TAR” and records that the old MILPERSMAN 1306-1505 was cancelled and folded into 1306-1502 — if you find older guidance citing “FTS” or 1306-1505, it is superseded (next entry).",
        "Officers move through PERS-911 / community managers, not the 1306 series — flag: no single public officer page was verified. Officer routes are thinner in public sources here.",
      ],
      links: [
        { label: "MILPERSMAN 1306-1502 (PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1300/1306-1502.pdf" },
        { label: "MyNavyHR — RC to AC (live quotas live here, not in this section)", url: "https://www.mynavyhr.navy.mil/Career-Management/Transition/RC-to-AC/" },
      ],
      source: "MILPERSMAN 1306-1502; MyNavyHR RC-to-AC page",
    },
    {
      id: "navy-tar-canrec",
      name: "Navy — TAR is the current name (ex-FTS), and CANREC is the temporary door",
      summary:
        "TAR — Training and Administration of the Reserve — is the Navy's current name for its full-time Reserve support community: renamed FTS (Full Time Support) in 2005, FTS discontinued in November 2021 with TAR reinstated; MILPERSMAN 1306-1505 is cancelled into 1306-1502, and older “FTS” material is superseded. CANREC (Canvasser Recruiter Recall) is a temporary recruiting-duty recall — a tour, not an accession.",
      who: "Reservists researching full-time Navy options (TAR = career community, RC2TAR in the previous entry is the accession door; CANREC = a recruiting-duty tour).",
      body: [
        "Name the community correctly: the Navy's full-time Reserve support community is TAR — Training and Administration of the Reserve. The history, confirmed in the Navy's own publications: the community was originally TAR, was renamed FTS (Full Time Support) in 2005, and FTS was discontinued in November 2021 with TAR reinstated — MILPERSMAN 1306-1502's change summary (“Changed FTS to TAR”) and current Navy Recruiting pages (“TAR, previously known as Full Time Support (FTS)”) both print it. Any page still saying FTS is stale. TAR Sailors are Reserve-component members in full-time billets administering the Reserve force — like AGR and AR, TAR is not the active component.",
        "CANREC (Canvasser Recruiter Recall Program) is the Navy's named temporary route: a voluntary definite recall to active duty of SELRES, IRR-ASP, and Voluntary Training Unit members to serve as production recruiters, administered through Navy Reserve personnel management. It is a tour, not an accession — you return to your reserve status afterward.",
      ],
      flags: [],
      links: [
        { label: "Reserve Personnel Management (CANREC listed) — MyNavyHR", url: "https://www.mynavyhr.navy.mil/Career-Management/Reserve-Personnel-Mgmt/" },
      ],
      source: "MILPERSMAN 1306-1502 change summary; Navy Recruiting TAR pages; MyNavyHR Reserve Personnel Management",
    },
    {
      id: "af-vlpad-cip",
      name: "Air Force — VLPAD and the Career Intermission Program (DAFI 36-2008)",
      summary:
        "VLPAD and CIP per DAFI 36-2008: VLPAD lets Air Reserve Component members volunteer for limited-period active-duty tours — a tour program, NOT a component accession. The same DAFI runs the Career Intermission Program (CIP), the contracted pause: separate into the IRR for a defined period (published programs run 1–3 years) with a contracted return. The DAFI also names the Space Force.",
      who: "ARC Airmen (and, per the DAFI's applicability, Guardians) seeking temporary full-time tours (VLPAD); active members who need time out without burning the bridge back (CIP).",
      body: [
        "The Department of the Air Force's RC→active instrument is DAFI 36-2008 (Mar 3, 2023; supersedes AFI 36-2008), Voluntary Limited Period of Active Duty (VLPAD) for Air Reserve Component Service Members and the Career Intermission Program — it applies to the Regular Air Force, the Space Force, the Air Force Reserve, and the Air National Guard.",
        "VLPAD lets ARC members volunteer for limited-period active-duty tours that fill RegAF requirements in particular grades and skills, under 10 U.S.C. §§12301(d) and 12311 (active-duty agreements). It is a tour program, not a component accession — the DAFI expressly does not cover members volunteering for extended active duty in support of contingency or codenamed operations (those run under mobilization/volunteerism channels instead).",
        "The same DAFI runs the Career Intermission Program (CIP) — the “pause button” that belongs in any honest component conversation: eligible active members separate into the IRR for a defined period (published programs run 1–3 years) with a contracted return to active duty, instead of a permanent separation. (The Navy runs a CIP of its own under separate authority — same concept, different instruction; ask NPC.) CIP is not a component switch, but it is the official alternative members most often actually want when they ask about one.",
      ],
      flags: [
        "Tour availability is requirement-driven and published through AFPC channels — no standing public tour list is reproduced here.",
      ],
      links: [
        { label: "DAFI 36-2008 (PDF, e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2008/dafi36-2008.pdf" },
      ],
      source: "DAFI 36-2008 (Mar 3, 2023)",
    },
    {
      id: "af-agr-art",
      name: "Air Force — AGR and ART: two full-time ARC jobs, two different species",
      summary:
        "AGR vs ART in the Air Reserve Component: AGR is military full-time (active-duty orders; members remain ARC members). ART — Air Reserve Technician — is civilian full-time: dual-status federal civil-service employees whose weekday job is civilian and who must hold military membership in the same unit. Losing the military membership means losing the ART job.",
      who: "ARC members (or Palace affiliates) choosing between full-time military orders (AGR), a dual-status civilian career (ART), and staying part-time (TR/IMA).",
      body: [
        "The Palace brochure lists the ARC's full-time roles together; they must not be merged:",
      ],
      bullets: [
        {
          title: "AGR (Active Guard and Reserve)",
          text: "military full-time: members on active-duty orders performing organizational, administrative, recruiting, and training duties that support their Reserve/Guard unit. AGR members remain ARC members (entry 1). Hiring is position-by-position through AFRC/ANG channels and state HROs for the Guard.",
        },
        {
          title: "ART (Air Reserve Technician)",
          text: "civilian full-time: ARTs are dual-status federal civil-service employees who work in their unit as civilians during the week and are required to hold military membership in that same unit as drilling reservists. The paycheck, retirement system (FERS), and weekday job are civilian; the uniform comes out for drill and activations. Losing the military membership means losing the ART job — that dual-status condition is the defining feature, and it is also the risk to understand before signing.",
        },
        {
          title: "TR (Traditional Reservist)",
          text: "the part-time baseline (one weekend a month / annual tour pattern) that both of the above are alternatives to; IMA (Individual Mobilization Augmentee) is the part-time variant attached to active-duty units.",
        },
      ],
      flags: [
        "Category descriptions here follow ARPC/AFRC's published framings; specific vacancy, grade, and eligibility rules are announcement-specific and not printed.",
      ],
      links: [
        { label: "Palace brochure — lists the ART/AGR/TR/IMA roles (AF Accessions Center, PDF)", url: "https://www.afaccessionscenter.af.mil/Portals/110/Images/PALACE%20CHASE-FRONT%20Brochure_2024_04.pdf" },
        { label: "AFRC — Air Force Reserve Command", url: "https://www.afrc.af.mil" },
      ],
      source: "Palace Chase / Palace Front brochure (2024); AFRC / ARPC published framings",
    },
    {
      id: "cg-ead",
      name: "Coast Guard — Extended Active Duty (EAD) and integration",
      summary:
        "Coast Guard EAD and integration: Extended Active Duty contracts (more than 1 year up to 5 years) run through PSC-OPM-1 (officers) and PSC-EPM-1 (enlisted). INTEGRATION — accepting a regular commission, or enlisting/reenlisting in the Regular Coast Guard — is the actual component change. ROASP is for reserve officers on EAD, applied for before RELAD. The Reserve Component Manager (RCM) cadre is named as PSC names it.",
      who: "CG reservists seeking multi-year active service (EAD via OPM-1/EPM-1) or permanent Regular status (integration); reserve officers on EAD approaching RELAD (ROASP timing matters).",
      body: [
        "The Coast Guard's RC→active route has its own vocabulary; PSC publishes the pieces:",
      ],
      bullets: [
        {
          title: "Extended Active Duty (EAD)",
          text: "a reservist signs a contract to serve on active duty for more than 1 year up to 5 years. EAD requests are managed by CG PSC-OPM-1 (officers) and PSC-EPM-1 (enlisted). PSC's own briefing framing: a reservist on EAD joins the Active Duty List — “for most discussions, you are no longer a Reservist” — for the contract's duration. Long-term non-contingency ADOS is managed separately, by PSC-RPM-2 under COMDTINST 1330.1.",
        },
        {
          title: "Integration",
          text: "the permanent step: reservists completing EAD may apply to integrate — officers by accepting a regular commission, enlisted by enlisting/reenlisting in the Regular Coast Guard — rather than returning to the Selected Reserve. Integration, not EAD itself, is the actual component change.",
        },
        {
          title: "ROASP",
          text: "from ALCGPSC 079/26: the Reserve Officer Attrition/Retention panel considers reserve officers (CDR and below) not selected on the ADPL/RCM lists for retention in an active status — apply while on EAD, before RELAD. The CG's full-time Reserve officer management runs through the Reserve Component Manager (RCM) cadre referenced in that message — the closest CG analogue to the other services' full-time reserve officer corps, named here as PSC names it. The Coast Guard has no program named AGR.",
        },
      ],
      flags: [
        "Enlisted EAD contract lengths are published at up to 4 years with extensions, per COMDTINST 1141.3B — an older instruction; verify current terms with PSC-OPM-1/EPM-1. The ADOS instruction's current edition is 1330.1E; its day-cap figures exist in the instruction and are not printed here.",
      ],
      links: [
        { label: "PSC-RPM-2 (SELRES assignments, long-term ADOS authority)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-Division-RPM/RPM-2/" },
        { label: "PSC — Personnel Service Center", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/" },
      ],
      source: "USCG Personnel Service Center (PSC-OPM-1 / PSC-EPM-1 / PSC-RPM-2); COMDTINST 1141.3B ⚠; ALCGPSC 079/26",
    },
  ],
};

/* ---------------------------- What Carries Over ---------------------------- */

const CARRIES_OVER: CompTile = {
  key: "carries",
  label: "What Carries Over",
  tileSub: "Entries 18–20 · Grade, retirement, health care",
  intro:
    "What follows you across a component change and what flips the day you sign — written for the member and for the family making the decision with them: grade and job retention with the hedges left in, retirement continuity, and health care in both directions.",
  entries: [
    {
      id: "grade-job-retention",
      name: "Grade and job retention — honestly hedged",
      summary:
        "Grade and job retention: direct affiliation negotiates against a specific billet — your grade and specialty carry into the billet you affiliate against. Accession back to active runs through grade determination, and accessions MAY come in at a reduced grade: get the grade in the contract, not the conversation. Officers under DoDI 1300.04 / 10 U.S.C. §716 generally retain grade and date of rank.",
      who: "Everyone — set expectations before the first counseling session, not after the contract prints.",
      body: [],
      bullets: [
        {
          title: "Direct affiliation (AC→RC)",
          text: "is negotiated against a specific billet: DAP publishes a guaranteed billet-of-choice frame for qualifying Marines; Navy AC2SELRES runs on C-WAY quotas by rating; Palace routes place you into an ARC position via the ISR. In all of them, your grade and specialty carry into the billet you affiliate against — if no billet exists in your grade/specialty, the options are a different billet, a lateral move/retraining path, or no affiliation. There is no general promise that your exact job follows you.",
        },
        {
          title: "Accession back to active (RC→AC)",
          text: "runs through grade determination: your prior grade is an input, not an entitlement. Services state in their prior-service/inter-service rules that accessions may be gained at a reduced grade depending on time since service, specialty, and current business rules (Switch Branches documents this per service). Read any “keep your rank” claim from a non-official source as marketing until the gaining service puts the grade in the contract.",
        },
        {
          title: "Officers",
          text: "transferring under DoDI 1300.04 / 10 U.S.C. §716 generally retain grade and date of rank; panel- and board-based routes (CAD, R2R, ROASP, AR accession) select by grade/specialty need first.",
        },
      ],
      flags: [],
      links: [],
      source: "The services' published affiliation and prior-service rules, summarized as printed",
      crossLinks: [{ label: "Switch Branches — grade determination per service", view: "switchbranches" }],
    },
    {
      id: "retirement-continuity",
      name: "Retirement continuity — points are points; the finish lines differ",
      summary:
        "Retirement continuity: retirement points accumulate in ONE service record across components — a qualifying year (50 points) is a qualifying year either way. 20 qualifying years is the reserve finish line; 20 years of active service is the active one. BRS follows you across components; legacy (High-3) status is not reopened by a component move.",
      who: "Anyone with 8+ years in, or anyone whose move is really a retirement-strategy move.",
      body: [],
      bullets: [
        {
          title: "One record",
          text: "retirement points earned in either component accumulate in one service record — a qualifying year (50 points) is a qualifying year whether the points came from active duty, drills, or both, and moving components does not zero the account. (Mechanics, point caps, and statements → Guard & Reserve Hub.)",
        },
        {
          title: "Two finish lines",
          text: "20 qualifying years is the reserve-retirement threshold; 20 years of active service is the active-retirement threshold. Years on AGR/TAR/AR/EAD orders count as active service for the active-retirement calculation while you serve them — which is exactly why full-time reserve programs advertise an active retirement at 20 — but the retirement you actually collect under depends on the status you finish in and the rules of that system (→ Retirement Hub).",
        },
        {
          title: "Your system follows you",
          text: "if you are under the Blended Retirement System (BRS), BRS follows you across components — your TSP and continuation framework do not restart on a component change. Legacy (High-3) members keep legacy status by the same continuity principle — component moves do not re-open the BRS election, which closed Dec 31, 2018.",
        },
      ],
      flags: [
        "Component changes can affect which retirement you ultimately qualify for and when you can draw it (reserve retirements are generally payable at 60, with reductions for certain active periods) — summary only; run your specific math with your personnel center and the Retirement Hub, not from this section.",
      ],
      links: [],
      source: "DoD retirement framework as the services publish it (BRS continuity; High-3 legacy status)",
      crossLinks: [
        { label: "Guard & Reserve Hub — points mechanics & statements", view: "reserve" },
        { label: "Retirement Hub — run your math", view: "retirement" },
      ],
    },
    {
      id: "health-care-flips",
      name: "Health care flips both ways",
      summary:
        "Health care flips both ways: AC → RC leaves active-duty TRICARE at separation — TAMP is the bridge, then TRICARE Reserve Select for drilling SELRES members (IRR members do NOT qualify for TRS). RC → AC on orders of 30+ days moves you and your family onto active-duty coverage. The FEHB trap: FEHB eligibility generally bars buying TRS (TRICARE prints a Jan 1, 2030 end date for that exclusion).",
      who: "Anyone with family coverage riding on the move — check this before signing, not after.",
      body: [],
      bullets: [
        {
          title: "AC → RC",
          text: "you leave active-duty TRICARE coverage at separation. Two bridges exist: TAMP (transitional coverage — DAP's published benefit list includes it) and then TRICARE Reserve Select, the premium-based plan drilling SELRES members purchase. IRR members do not qualify for TRS.",
        },
        {
          title: "RC → AC (including full-time orders of 30+ days)",
          text: "you and your family move onto active-duty TRICARE coverage for the orders period, and TRS enrollment ends/suspends accordingly.",
        },
      ],
      flags: [
        "The FEHB trap: if your civilian job makes you eligible for FEHB, you generally cannot buy TRS (TRICARE prints an end date of Jan 1, 2030 for that exclusion). ART members live this rule — their health coverage runs through FEHB as federal employees. Full plan mechanics, premiums, and enrollment rules → Guard & Reserve Hub (TRS) and My Health HQ. This section prints no premium figures.",
      ],
      links: [],
      source: "TRICARE published plan rules (TAMP / TRICARE Reserve Select / FEHB exclusion)",
      crossLinks: [
        { label: "Guard & Reserve Hub — TRICARE Reserve Select", view: "reserve" },
        { label: "My Health HQ — the portal router", view: "healthhq" },
      ],
    },
  ],
};

/* ------------------------------ Before You Sign ---------------------------- */

export type ChecklistItem = {
  n: number;
  title: string;
  text: string;
  crossLinks?: CompCrossLink[];
};

export const CHECKLIST_TITLE = "Before You Sign — the shared checklist";
export const CHECKLIST_WHO = "Anyone with paperwork in front of them. Print it; bring it to the counselor.";
export const CHECKLIST_INTRO =
  "Drawn from the counseling frames the official pages in this section use (RCCC counseling under AR 601-280, career-planner DAP counseling, CCC/EPAR counseling in the MILPERSMAN articles, ISR prescreening). Work every line before the contract or affiliation paperwork is final:";

/** Entry 21 — all 10 items, in the pack's order, in full. */
export const BEFORE_YOU_SIGN: ChecklistItem[] = [
  {
    n: 1,
    title: "Break in service",
    text: "Is this move sequenced with zero break (affiliation effective at separation), or is there a gap? A gap can hit grade determination, longevity, and benefit eligibility — and some doors (prior-service business rules) are narrower than the direct-affiliation door you just walked past.",
  },
  {
    n: 2,
    title: "Remaining obligation",
    text: "How much MSO / contract time do you still owe, and does the move fulfill it, convert it (Palace Chase: extended, not reduced), or require a DD 368 release? Navy Sailors on post-Oct 1, 2020 contracts: check the required-SELRES rule (the AC2SELRES/AC2TAR entry) — your “choice” may already be made.",
    crossLinks: [{ label: "Switch Branches — DD Form 368 mechanics", view: "switchbranches" }],
  },
  {
    n: 3,
    title: "Grade and job — in writing",
    text: "What grade and specialty/billet appear in the paperwork, not in the conversation? (The grade and job retention entry in What Carries Over.)",
  },
  {
    n: 4,
    title: "Retirement points & years",
    text: "Pull your current points statement and qualifying-year count. Confirm the gaining component has your complete record, and which finish line (20 qualifying years vs. 20 active years) this move puts you on (the retirement continuity entry in What Carries Over).",
    crossLinks: [
      { label: "Retirement Hub", view: "retirement" },
      { label: "Guard & Reserve Hub — points & statements", view: "reserve" },
    ],
  },
  {
    n: 5,
    title: "Health care",
    text: "What covers you and your family the day after the move — TAMP? TRS purchase? Active-duty coverage on orders? FEHB exclusion if you're (or become) a federal employee/ART? (The health care entry in What Carries Over.)",
    crossLinks: [{ label: "Health Care & TRICARE", view: "healthhq" }],
  },
  {
    n: 6,
    title: "SGLI",
    text: "Coverage continues across components but is election- and status-sensitive (drilling members' coverage attaches to their reserve status; full-time orders change the picture again). Re-verify your election and beneficiary in your current system at the move — don't assume the old form followed you. (Rates and coverage mechanics → Guard & Reserve Hub / Pay & Money.)",
    crossLinks: [
      { label: "Guard & Reserve", view: "reserve" },
      { label: "Pay & Money", view: "pay" },
    ],
  },
  {
    n: 7,
    title: "Education benefits",
    text: "Component changes move you between GI Bill chapters' turfs: MGIB-SR (Ch. 1606) is a Selected Reserve benefit tied to a 6-year SELRES obligation and generally ends when you leave the SELRES; Post-9/11 GI Bill (Ch. 33) eligibility is built from active-duty/qualifying active service and survives moves. Transfer of Education Benefits (TEB) eligibility and its service-commitment math are component-sensitive — DAP publishes preserved transfer eligibility as an affiliation benefit, which tells you it is at risk in other move shapes. Verify your chapter status and any TEB clock before signing.",
    crossLinks: [{ label: "Education Planner", view: "education" }],
  },
  {
    n: 8,
    title: "Bonus recoupment",
    text: "⚠ If you received an enlistment/reenlistment/affiliation bonus tied to completing a term in a component or specialty, separating or switching before completing that term can trigger recoupment of the unearned portion under your bonus agreement and service regulation. No figure is printed here because the math is your contract's; the action item is: get the recoupment answer from finance/your counselor in writing before you sign the new paperwork, not after.",
  },
  {
    n: 9,
    title: "Clearance and records",
    text: "Confirm your clearance eligibility status and that your personnel record (points, evaluations, medical) transfers complete — component moves are a classic moment for records to split.",
    crossLinks: [
      { label: "Your Records & DD214", view: "records" },
      { label: "Security Clearances", view: "clearance" },
    ],
  },
  {
    n: 10,
    title: "The return path",
    text: "If this doesn't work out, what brings you back — and is that door board-based, quota-based, or closed? (CIP exists precisely because some services built a formal answer — the VLPAD/CIP entry in Reserve → Active.)",
    crossLinks: [{ label: "Know Your Rights — USERRA / SCRA", view: "rights" }],
  },
];

/* --------------------------------- Tiles ---------------------------------- */

export const COMPONENT_TILES: CompTile[] = [LANDSCAPE, ACTIVE_TO_RESERVE, RESERVE_TO_ACTIVE, CARRIES_OVER];

export const CHECKLIST_TILE = {
  key: "checklist",
  label: "Before You Sign",
  tileSub: "Entry 21 · The 10-item checklist, in full",
};
