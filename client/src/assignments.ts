// How Assignments Work — transcribed from the researched pack
// (~/workspace/military-app/assignments/assignments.md, researched
// Nov 9, 2026). The pack is the content source of truth: 29 entries,
// its system inventory, its corrections, and its exclusions are
// binding. NO live cycle dates, NO billet/vacancy content, NO
// tour-length tables anywhere. Names that must NOT print as real
// systems — "Enlisted Talent Marketplace," "Guardian Talent
// Marketplace," "Semi-Centralized" (as an assignment system), a MOL
// duty-station "dream sheet," a CG "dream sheet" (colloquial only) —
// appear only inside flags that say they were NOT FOUND. Corrections
// that ship: current USMC structure is MMEA-1/MMEA-2 (MMEA-8 is
// historical); HSST = HQMC Special Duty Assignment Screening Team, an
// electronic package-screening process; MSG Watchstander is
// screenable but NOT an SDA; Career Counselor is not an SDA; DAF DSD
// is now Developmental Duty (DAFI 36-2110 Change 2, Mar 2026);
// AFPC/DPP is the current directorate.

import type { PackSection } from "./seven";

export const ASSIGNMENTS_SECTION: PackSection = {
  view: "assignments",
  title: "How Assignments Work",
  headSub:
    "How your branch actually decides who goes where — the published systems, the human beings who run them, and where your preferences genuinely fit. No live cycle dates, no billet or vacancy listings, no tour-length tables: those rotate constantly, and every card routes to the live official source that holds the current answer.",
  intro:
    "Strip the branding off and all six services assign people the same way: a valid requirement exists, a pool of eligible movers is identified, preferences are collected as inputs inside that pool, and a headquarters human or panel makes the match. Preference is a real input with real weight — and it never outranks a valid requirement. That is the services' own published order, printed branch by branch in the first tile.",
  standing:
    "System names print as the official pages publish them, with the source's vintage noted where it matters. Where official sources conflict, both print and the conflict is flagged — never blended. Coast Guard detail is CAC-gated by design: this section prints what is publicly verifiable and says the rest lives behind CAC.",
  tiles: [
    {
      key: "landscape",
      label: "Read This First",
      tileSub: "Entries 1–4 · the four-step machine, the humans, the precedence",
      intro:
        "The landscape: the machine every branch runs under different names, the five human roles that are not interchangeable, and each branch's own published order of precedence.",
      entries: [
        {
          id: "assign-machine",
          name: "Every branch runs the same four-step machine — under different names",
          summary:
            "All six services assign people the same way, in this order: a valid requirement exists, a pool of eligible qualified movers is identified, preferences are collected as inputs inside that pool, and a headquarters human or panel makes the match and issues orders. No service publishes a system in which preference alone assigns anyone.",
          who: "Everyone. If you only read one entry, read this one and the precedence card.",
          body: [],
          steps: [
            "A valid requirement exists. Nobody is assigned to a job that isn't a funded, authorized billet — the Army validates positions under Active Component Manning Guidance; MCO 1300.8 requires a valid Marine Corps staffing requirement; the Navy fills valid billet requirements advertised in MNA; DAFI 36-2110's primary PCS selection factor is qualifications to fill a valid manpower requirement.",
            "A pool of eligible, qualified movers is identified — by rotation date (the Army's YMAV, the Navy's PRD, the Corps' monitor populations, the Air Force's VML), grade, and job.",
            "Preferences are collected as inputs — marketplace rankings (Army, Air Force), RELM requests and monitor interviews (USMC), MNA applications (Navy), the eResume (Coast Guard). In every service, preferences operate inside the qualified pool.",
            "A headquarters human or panel makes the match and issues orders — a monitor, detailer, assignment officer, assignment team, or slating panel. Unit commanders endorse, reclama, and advocate; they do not assign.",
          ],
          flags: [],
          links: [],
          source: "The services' personnel-center pages and assignment publications",
        },
        {
          id: "assign-humans",
          name: "The humans: five roles that are not interchangeable",
          summary:
            "Monitor (USMC), detailer (Navy), assignment officer (USCG), assignment team / assignment OPR (DAF), talent manager (Army) — barracks conversation lumps them together; the services do not. Make sure you're calling the role that can actually do what you're asking.",
          who: "Anyone about to contact “the detailer.”",
          body: [],
          bullets: [
            { title: "Monitor (USMC)", text: "An MMEA (enlisted) or MMOA (officer) Marine who owns a population defined by PMOS and grade band and slates that population against requirements." },
            { title: "Detailer (Navy)", text: "An NPC (PERS-4) Sailor or officer who represents the individual in their rating/community and issues PCS orders. Distinct from Placement (PERS-4013), which represents the command's requirements and controls which billets get advertised — detailers do not control billet priority or command manning." },
            { title: "Assignment Officer / AO (USCG)", text: "A PSC officer (EPM-2 enlisted, by rating under a Central Assignment Coordinator; OPM-2 officer) who slates members during the Assignment Year." },
            { title: "Assignment Team / Assignment OPR (DAF)", text: "AFPC assignment teams by career field run the match inside Talent Marketplace; for Guardians the same functions read to the USSF ETMO (Enterprise Talent Management Office)." },
            { title: "Talent Manager (Army, current HRC label)", text: "The HRC contact for a branch/MOS population in the marketplace era; distinct from the Account Manager, who advocates for a unit." },
            { title: "Community managers (Navy OCM/ECM; DAF Career Field Managers)", text: "Manage the health and shape of a community (accessions, quotas, release), not individual assignments. A CFM release can gate a move without the CFM assigning anyone anywhere." },
          ],
          flags: [],
          links: [],
          source: "MyNavyHR / HRC / PSC / AFPC published role descriptions",
        },
        {
          id: "assign-precedence",
          name: "Needs of the service — each branch's own published order of precedence",
          summary:
            "Every service publishes the precedence, and none of them put preference first. The honest summary the services themselves support: preference is a real input with real weight inside the qualified pool — and it never outranks a valid requirement.",
          who: "Everyone, before forming expectations of any system in this section.",
          body: [],
          bullets: [
            { title: "Army", text: "(DA PAM 600-3 branch chapters): (1) needs of the Army, (2) professional development needs of the officer, (3) officer's preference. Enlisted framing (DA PAM 600-25, 2025): final assignments rest on Army readiness needs, the Soldier's eligibility, and KSBs, while aiming to align with preferences." },
            { title: "Marine Corps", text: "(MCO 1300.8, Ch. 2): monitors make assignments in the order (a) Needs of the Marine Corps, (b) Career Progression, (c) Overseas Control Date, with individual preference after those. Assignment requires a valid staffing requirement; availability, volunteer status, and time on station are secondary factors." },
            { title: "Navy", text: "(MILPERSMAN 1301-100): (1) needs of the Navy — “the primary consideration and override all other factors,” (2) career needs of the individual, (3) desires of the individual. Desires are explicitly called important — and explicitly third." },
            { title: "Air Force / Space Force", text: "(DAFI 36-2110, ¶6.1): the primary factor is qualifications to fill a valid requirement; within a group of qualified members, eligible volunteers are selected ahead of non-volunteers; volunteer status, preferences, and special circumstances may be considered only to the extent consistent with operational manning requirements." },
            { title: "Coast Guard", text: "(PSC-EPM-2 mission; Sea Legs — Transfers): assignments balance a triad — Service needs, unit needs, member needs — in that published order, and current AY message traffic (ALCOAST 490/25) states plainly that AOs may place members into billets not on their eResume based on specialty, performance, and skillsets." },
          ],
          flags: [],
          links: [],
          source: "DA PAM 600-3 / 600-25 · MCO 1300.8 · MILPERSMAN 1301-100 · DAFI 36-2110 · PSC-EPM-2",
        },
        {
          id: "assign-enlisted-officer",
          name: "Enlisted and officer assignments are different systems in every branch",
          summary:
            "Different populations, different tools, often different headquarters sections: Army ATAP (officers) vs. Enlisted Manning Cycle; USMC MMOA vs. MMEA; Navy PERS-41/42/43/44/47 officer detailers by community vs. enlisted detailers by rating; DAF officer VML/Talent Marketplace bidding vs. enlisted EQUAL listings; USCG OPM-2 grade panels vs. EPM-2 rating AOs.",
          who: "Dual-service and dual-status households especially — never assume your spouse's or your officer/enlisted counterpart's process is yours.",
          body: [
            "Where a fact in this section applies to one corps only, the card says so.",
          ],
          flags: [],
          links: [],
          source: "The services' personnel-center pages",
        },
      ],
    },
    {
      key: "army",
      label: "Army",
      tileSub: "Entries 5–8 · the IPPS-A Marketplace, YMAV, your Talent Manager",
      intro:
        "The Army marketplace is moving into IPPS-A and the legacy systems are being sunset — the transition status prints flagged, exactly as the sources support. Then how the market works, your HRC human, and the special categories at named level.",
      entries: [
        {
          id: "army-marketplace",
          name: "The Army marketplace is moving into IPPS-A — AIM 2.0 and ASK-EM are being sunset",
          summary:
            "The current system is named “IPPS-A Marketplace.” Per the G-1, HRC is “quickly transitioning all markets (E/O/WO) into IPPS-A markets,” “sunsetting the legacy AIM2.0 and ASK-EM system,” with the stated intent of “fully operating our marketplaces in IPPS-A in FY26.” ATAP is the process for officer distribution; the Enlisted Manning Cycle (EMC) is the enlisted cycle; the system is the IPPS-A Marketplace.",
          who: "Every active Army member in a movement window — check which market your cycle runs in before preferencing anywhere.",
          body: [
            "DA PAM 600-25 (1 Aug 2025): “The Integrated Personnel and Pay System – Army (IPPS-A) enlisted market is the established system for enlisted talent management and assignment distribution,” modeled after AIM. The transition ran by pilots of increasing size across ATAP cycles 25-01/25-02 and enlisted cycles 25-03 through 26-01/26-02.",
          ],
          flags: [
            "Transition status, printed flagged: no opened HRC/army.mil page states in so many words that the transition is complete as of late 2026, and the army.mil officers' guide still describes the older mixed state (most officers in AIM 2.0, ACC Captains piloting IPPS-A) in present tense in its transition section. This section names the current system “IPPS-A Marketplace,” names AIM 2.0 / ASK-EM as legacy systems being sunset per the G-1, and does NOT print “transition complete.”",
            "“Semi-Centralized” is NOT an assignment-system name — in current official material it attaches to the promotion roster. It is not used as one here.",
          ],
          links: [
            { label: "G-1 marketplace update (IPPS-A)", url: "https://ipps-a.army.mil/Resources/News/Article/3801964/" },
            { label: "Enlisted guide to the Marketplace (army.mil)", url: "https://www.army.mil/article/282875" },
            { label: "Officers' guide to the Talent Alignment Marketplace (army.mil)", url: "https://www.army.mil/article/280742" },
          ],
          source: "G-1 marketplace update (ipps-a.army.mil) · DA PAM 600-25 (1 Aug 2025)",
        },
        {
          id: "army-how-market-works",
          name: "How the Army market works — YMAV, cycles, and preferencing",
          summary:
            "YMAV (Year Month Available to Move) decides who is in a market. Officers run two ATAP cycles per year in a two-sided market; enlisted markets are Soldier-preference only, and HRC's published advice is to preference deeply. The HRC enlisted guide (Feb 2025) publishes four Enlisted Manning Cycles per year.",
          who: "Soldiers inside ~12 months of YMAV. The enlisted market generally covers SSG–MSG; first-termers don't receive a YMAV; Sergeants Major run through a separate process.",
          body: [
            "Officers are told to verify YMAV accuracy with their talent manager; enlisted YMAVs are auto-calculated, and an early-move request runs through the chain of command as a Personnel Action Request (PAR) in IPPS-A. A YMAV can also be broken early for nominative or DA-selected fills. Transparency rule worth printing: a talent manager may not disclose who preferenced whom #1, in either direction.",
            "Officers — two ATAP cycles per year, each covering a six-month movement period. The market is two-sided: officers preference units/positions, units preference officers, often after interviews. (A one-sided variant — algorithm considers officer preferences only — was piloted for pre-KD Captains; a pilot, not the standard.)",
            "Enlisted — Soldier-preference only. Per the G-1 message, enlisted markets “will continue to be Soldier preference markets only” — units do not preference Soldiers. Eligible NCOs see all available requirements matching their MOS and grade and rank them; HRC's published advice is to preference deeply — top-down for places you want, bottom-up for places you don't; anything left unranked is treated as equally desirable between the two lists. Cluster-preferencing one location repeatedly counts as preferencing that location once.",
          ],
          flags: [
            "Enlisted cycle count: the opened Feb 2025 HRC guide publishes four Enlisted Manning Cycles per year. HRC social posts seen in Nov 2026 describe a change to two cycles for E6/E7/E8 markets, but no opened official page confirms it — this section prints four (2025 guide) with this flag.",
          ],
          links: [
            { label: "Enlisted guide to the Marketplace (army.mil)", url: "https://www.army.mil/article/282875" },
            { label: "Legacy ASK-EM FAQ (HRC)", url: "https://www.hrc.army.mil/sites/default/wcmtfiles/files/23232_0.pdf" },
          ],
          source: "HRC enlisted marketplace guide (Feb 2025) · G-1 marketplace update",
        },
        {
          id: "army-talent-manager",
          name: "Your HRC human: Talent Manager — and the terminology drift",
          summary:
            "HRC's current published umbrella label is Talent Managers. The enlisted guide's “Assignment Advice” section explicitly calls the “stay quiet” idea a myth — if you want to stay somewhere, say so, because HRC can only try to work with what it knows. Etiquette verdict for the Army: PART FOUND — no standalone etiquette page exists; the guidance lives inside the two official marketplace guides.",
          who: "Any Soldier whose market is open or opening.",
          body: [
            "HRC's “Active Component Talent Managers” page routes officers and enlisted by division/branch/MOS; the roster itself sits behind login. Officer-side, the Talent Manager runs the process for a population, holds leader professional development sessions on how the market works and how to write a competitive résumé, and is distinct from the Account Manager, who advocates for a unit's spots.",
            "The legacy ASK-EM FAQ's Q9 (“Can I still call my branch to discuss assignments?”) answers: absolutely — call early for coaching, and call branch before filing a website trouble ticket.",
          ],
          flags: [
            "Terminology drift, printed plainly: official publications across vintages call the enlisted HRC contact the talent manager, branch talent management NCO, EPMD branch manager, Professional Development NCO (PDNCO), and career management NCO. These are overlapping labels for the HRC assignment chair, not five different offices. This section uses Talent Manager (current HRC site label).",
          ],
          links: [{ label: "HRC Talent Managers", url: "https://www.hrc.army.mil/content/Active%20Component%20Talent%20Managers" }],
          source: "HRC · army.mil marketplace guides · ASK-EM FAQ",
        },
        {
          id: "army-special",
          name: "Army special categories (named level)",
          summary:
            "Nominative assignments, broadening assignments, joint duty, and special duty — named here as assignment categories. Program detail for special duty lives in Change Your Job.",
          who: "Members targeting a named-billet career move rather than a market move.",
          body: [],
          bullets: [
            { title: "Nominative assignments", text: "Key positions filled by selecting best-qualified Soldiers on KSBs (DA PAM 600-25): published examples by grade include Recruiter, Drill Sergeant, Equal Opportunity Advisor, Inspector General NCO, White House Military Office, and HRC talent management NCO itself. Nominative/DA-selected fills can break a YMAV early." },
            { title: "Broadening assignments", text: "Developmental positions outside the member's core branch competencies (DA PAM 600-3 framing); HRC maintains a Broadening Opportunity Program catalogue (catalogue page content is login-gated — named only). Enlisted counseling point from DA PAM 600-25: don't preference consecutive broadening/generating assignments." },
            { title: "Joint duty", text: "JDAL (Joint Duty Assignment List) billets; the program of record for joint credit is JDAMIS, run by HRC's Joint Officer Management Branch. Named level only — see the joint billets card." },
            { title: "Special duty", text: "Drill Sergeant, Detailed Recruiter, AIT Platoon Sergeant, school instructor — DA-selected or volunteer fills that rotate Soldiers outside normal market timing." },
          ],
          flags: [],
          links: [],
          source: "DA PAM 600-25 · DA PAM 600-3",
        },
      ],
    },
    {
      key: "usmc",
      label: "Marine Corps",
      tileSub: "Entries 9–12 · MMEA/MMOA, RELM and the roadshow, HSST and SDAs",
      intro:
        "Enlisted assignments run through MMEA, officer assignments through MMOA — separate branches, separate monitor organization. The current published structure is MMEA-1 and MMEA-2; “MMEA-8” is historical and prints only as a correction.",
      entries: [
        {
          id: "usmc-mmea",
          name: "MMEA / MMOA — and the MMEA-8 correction",
          summary:
            "Current published structure is MMEA-1 and MMEA-2, not MMEA-8. MMEA-1 principally handles retention processing (the RELM side); MMEA-2 holds the assignment monitors, grouped (MMEA-21 through -24) by PMOS cluster and grade band — your monitor is the one whose population contains your PMOS and grade. “MMEA-8” appears in 2007-era material as the monitors' section and is historical.",
          who: "Every Marine — find your monitor's population before anything else. Monitor contact lists (by PMOS population) are published on the Manpower site.",
          body: [
            "What a monitor controls: slating/assignment of the Marines in their PMOS/grade population to valid requirements, and the resulting PCS process for that population. Special Duty Assignments each have their own monitors (Recruiting, Drill Instructor, MSG, Combat Instructor — under MMEA-25), distinct from a Marine's PMOS monitor.",
            "Officer monitors (MMOA) are organized completely differently: Ground and Aviation monitor groups, each split by grade echelon (Colonels / LtCols / Majors / Company Grade) and then PMOS population.",
          ],
          flags: [
            "Correction that ships: MMEA-8 is historical. Any source presenting it as the current monitors' section is working from 2007-era material.",
          ],
          links: [
            { label: "Manpower contact page", url: "https://www.manpower.marines.mil/About/Contact-Us/Contact-Us-Embeds/" },
            { label: "MCO 1300.8 (Personnel Assignment Policy)", url: "https://www.marines.mil/portals/1/mco%201300.8.pdf" },
          ],
          source: "Manpower (manpower.marines.mil) · MCO 1300.8",
        },
        {
          id: "usmc-preference",
          name: "How a Marine expresses preference — RELM, MyCareer, and the roadshow",
          summary:
            "Enlisted: there is no self-service dream sheet. The vehicles are the TFRS RELM built with your unit Career Counselor, direct monitor contact using the published PMOS monitor lists, and a monitor interview booked through MyCareer. The MMEA Roadshow runs in three MARADMIN-published phases.",
          who: "Enlisted Marines approaching reenlistment or rotation; officers in a monitor window.",
          body: [
            "On reenlistment, Marines may list geolocation preferences, and assignments issue based on — in the FY27 Retention Campaign's own order — billet vacancies, needs of the Service, Marine preference, and opportunities to maximize individual potential.",
            "The MMEA Roadshow (three phases): Phase I — SDA Volunteer Briefs at major installations; Phase II — Monitor Visits, customized interviews with your own monitor; Phase III — Opportunities Briefs on assignments outside normal PMOS duties. Interview booking runs through MyCareer, which is also where a Marine locates their monitor. Commands can also request a monitor/assist visit through MMEA.",
            "Officers: engage your PMOS monitor directly; MMOA publishes Vacancy Lists & Surveys used for preference submission, and officers communicate with monitors through the Talent Management Engagement Platform (per current MARADMIN guidance).",
          ],
          flags: [
            "NOT FOUND: no official page describes a standalone “duty station preference” field in Marine Online (MOL) as the normal enlisted channel. The MOL dream-sheet claim does not print in this section.",
            "Current MARADMINs use “Career Counselor”; older messages say “career planner” — same unit advisor role, both terms official.",
          ],
          links: [{ label: "CY25/26 MMEA Roadshow MARADMIN", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4347451/" }],
          source: "MARADMINs · Manpower (manpower.marines.mil) · MyCareer",
        },
        {
          id: "usmc-hsst",
          name: "HSST and Special Duty Assignments (named level)",
          summary:
            "HSST = HQMC Special Duty Assignment Screening Team — singular “Assignment,” singular “Team.” It is the involuntary-assignment phase for Special Duty Assignments, and as currently published it is an electronic package-screening process, not a traveling team screening in person. The four SDAs in the current campaign: Recruiter, Drill Instructor, Combat Instructor, and Marine Security Guard (MSG) Detachment Commander.",
          who: "Marines in an SDA screening population, volunteer or otherwise. Governing order MCO 1326.6 (SCREENMAN); program detail in Change Your Job.",
          body: [
            "Mechanism as published: MMEA releases the list of Marines meeting SDA criteria via TFRS; commanding officers screen identified Marines using MCO 1326.6 (SCREENMAN) checklists; commands submit packages electronically via a TFRS SDA RELM; HSST members screen the packages and assign qualified Marines to available SDA classes (first-come/first-served per qualifications, command recommendations, and remaining vacancies). The traveling piece is the Roadshow's Phase I SDA Volunteer Briefs, not HSST.",
          ],
          flags: [
            "Two distinctions this section keeps: MSG Watchstander is a non-SDA screenable duty, not an SDA; and Career Counselor is not an SDA — it's the advisor who submits your RELM.",
          ],
          links: [{ label: "FY27 HSST MARADMIN", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4404389/" }],
          source: "FY27 HSST MARADMIN · MCO 1326.6",
        },
        {
          id: "usmc-etiquette",
          name: "“How to talk to your monitor” — NOT FOUND as published guidance",
          summary:
            "MMEA publishes no standalone monitor-etiquette guidance — no do/don't list, no call-hours or email-format page — on manpower.marines.mil or marines.mil. The verdict prints, not invented etiquette: contact information and interview booking — published; etiquette guidance — not published.",
          who: "Any Marine preparing a monitor call: use the published contact list and the Career Counselor; that's the official channel set.",
          body: [
            "FOUND: PMOS monitor contact lists for enlisted (by population) and officers (by Ground/Aviation, grade band, population); monitor POCs named by role inside MARADMINs; MyCareer as the interview-booking hub. The detailed etiquette circulating on social media (including unofficial monitor accounts) is not official MMEA guidance and is excluded by the sources rule.",
          ],
          flags: [],
          links: [{ label: "Manpower contact page", url: "https://www.manpower.marines.mil/About/Contact-Us/Contact-Us-Embeds/" }],
          source: "Manpower (manpower.marines.mil)",
        },
      ],
    },
    {
      key: "navy",
      label: "Navy",
      tileSub: "Entries 13–16 · MyNavy Assignment, the detailer, the 6 Keys",
      intro:
        "MyNavy Assignment (MNA) is the enlisted detailing marketplace that replaced CMS-ID. The central Enlisted Detailing page's seven applications per cycle print; rating-page variants print flagged, never blended.",
      entries: [
        {
          id: "navy-mna",
          name: "MyNavy Assignment (MNA) — the enlisted marketplace that replaced CMS-ID",
          summary:
            "MNA is the current enlisted detailing system (NAVADMIN 276/19 released CMS-ID's replacement). At 15 months before PRD, Sailors update contact information, submit assignment preferences, and update their resume in MNA; at 12 months before PRD the negotiation phase opens — up to seven applications per MNA cycle per the central Enlisted Detailing page.",
          who: "Active and TAR enlisted Sailors; start at PRD-minus-15-months, not when orders drop. MNA has also been extended to the Reserve Force as a detailing marketplace for enlisted Reserve billets.",
          body: [
            "The roles inside MNA: Sailor (preferences, resume, applications, and the Sailor comment feature, which speaks directly to the detailer and the gaining command), CCC (command link), Detailer (selects; issues PCS orders), Placement (advertises billets — next card). Advancement-eligible Sailors may apply in the next higher paygrade. Detailers also execute billet-based advancement in the same system. Spelling varies across official pages (“MyNavy Assignment” / “My Navy Assignment”); the NAVADMIN title uses MyNavy Assignment, singular.",
          ],
          flags: [
            "Application-limit conflict, printed as a conflict: the central page's 7 applications per cycle print as the figure. Some rating pages publish different figures — 10 per cycle / 21 per window, 7 per month — flagged here as rating-page/stale variants, never blended.",
            "NAVADMIN 276/19's text is search-verified — a direct open was rate-limited in the research pass.",
          ],
          links: [{ label: "Enlisted Detailing Marketplace (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/career-management/detailing/enlisted/detailing-marketplace/" }],
          source: "MyNavyHR Enlisted Detailing Marketplace · NAVADMIN 276/19",
        },
        {
          id: "navy-detailer",
          name: "The detailer — what they control, and what they don't",
          summary:
            "A detailer represents the individual; Placement (PERS-4013) represents the command. Billet priority in MNA is set by Fleet Forces Command and the Manning Control Authority, not detailers — and verbal commitments must be followed up in writing to count.",
          who: "Any Sailor — knowing the placement/detailer split explains most “my detailer can't fix that” answers.",
          body: [
            "What a detailer does (MyNavyHR): maintains personalized liaison with Sailors in their rating; advises on assignments, special programs, and career goals; balances Needs of the Navy with personal preferences; nominates Sailors for sea/shore special programs; selects Sailors for billets and issues PCS orders. Enlisted detailers are organized by rating, commonly split by paygrade band.",
            "What a detailer does NOT control: billet priority, command manning, or which billets get advertised — commands work that through their Placement Coordinator in PERS-4013. The three-lane distinction is official (MILPERSMAN 1301-100): the placement officer represents the command, the detailer represents the individual, and detailers cannot commit to an assignment that violates the MILPERSMAN tour/rotation rules (1301-104 through 1301-110).",
            "Officer detailing runs by community under PERS-4: PERS-41 Surface Warfare, PERS-42 Submarine, PERS-43 Aviation, PERS-44 Staff/Restricted Line, PERS-47 Information Warfare; PERS-45 is Distribution Management (PERS-450 joint duty, PERS-451 Joint Officer Management, PERS-454 overseas screening) — not a warfare-community shop. Separate from detailers entirely: OCM (BUPERS-311) and ECM (BUPERS-32) manage community health, plans, and quotas — they shape the system; they don't assign you.",
          ],
          flags: [],
          links: [
            { label: "PERS-4 Detailing (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/Career-Management/Detailing/" },
            { label: "MILPERSMAN 1301-100", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1300Assignment/1301-100.pdf" },
          ],
          source: "MyNavyHR · MILPERSMAN 1301-100",
        },
        {
          id: "navy-etiquette",
          name: "“How to talk to your detailer” — FOUND, distributed across rating pages",
          summary:
            "There is no central MyNavyHR hub for it — but the guidance itself is published where the Navy actually publishes it: rating and community pages. The TAR Administrative Ratings page publishes the “6 Keys to the Detailing Process.” Etiquette verdict for the Navy: FOUND, distributed.",
          who: "Enlisted Sailors entering a negotiation window.",
          body: [],
          steps: [
            "Communicate with your detailer early.",
            "Keep your MNA contact information current.",
            "Select up to seven jobs each cycle.",
            "Be flexible on duty stations.",
            "Use the Sailor comment feature.",
            "Reflect on career purpose when applying in paygrade.",
          ],
          flags: [
            "The CTI page adds: call or email the detailer directly, leave a callback number, keep preferences/resume current — and frames making zero applications as a failure to communicate, after which the Sailor is detailed without preference consideration. CTI's stated 72-business-hour response standard is that community's standard — not verified Navy-wide, printed as CTI's.",
            "NOT FOUND as a single hub: the “Detailer Corner” that exists is an internal community Teams/SharePoint page — not a public publication, and not cited as one. The CCC is the hinge (MyNavyHR Career Counseling): the Command Career Counselor is the critical link between the Sailor, the command, and NPC, and is the fallback when a Sailor can't access MNA.",
          ],
          links: [{ label: "Enlisted Detailing Marketplace (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/career-management/detailing/enlisted/detailing-marketplace/" }],
          source: "MyNavyHR rating/community pages (TAR Administrative Ratings; CTI)",
        },
        {
          id: "navy-special",
          name: "Navy special categories (named level)",
          summary:
            "Shore Special Programs (PERS-4010) details Sailors to special-program assignments Navy-wide, not rating-specific; the program list lives in MILPERSMAN 1306-900. You screen for special programs through your detailer, not by contacting program recruiters first.",
          who: "Sailors targeting special programs or a joint tour. Program detail in Change Your Job.",
          body: [
            "Published examples include Production Recruiter, Recruit Division Commander, USS CONSTITUTION crew, Embassy/Personnel Exchange Program, and SERE Instructor. The screening form is NAVPERS 1306/92; the release request vehicle is NAVPERS 1306/7 through your detailer.",
            "Joint billets: Joint Officer Management (PERS-451) tracks joint qualifications toward Joint Qualified Officer; most joint credit comes via a Standard Joint Duty Assignment (S-JDA) — a billet on the JDAL — with an experience-based (E-JDA) self-nomination path under the Joint Qualification System. Governing article MILPERSMAN 1301-216.",
          ],
          flags: [],
          links: [],
          source: "MILPERSMAN 1306-900 / 1301-216 · PERS-4010 / PERS-451",
        },
      ],
    },
    {
      key: "af",
      label: "Air Force",
      tileSub: "Entries 17–19 · Talent Marketplace in myVector, EQUAL, Developmental Duty",
      intro:
        "Current official name, verified in DAFI 36-2110 Change 2 (Mar 2026): Talent Marketplace, hosted in myVector. Officers bid; enlisted preference against EQUAL listings. DSD is now Developmental Duty.",
      entries: [
        {
          id: "af-marketplace",
          name: "Talent Marketplace in myVector — officers bid; enlisted preference against EQUAL",
          summary:
            "Officers on the Vulnerable to Move List (VML) browse projected vacancies, rank/bid on positions, and self-advertise in Talent Marketplace in myVector — a two-sided match. Enlisted assignments are advertised on EQUAL (Enlisted Quarterly Assignment Listing) and EQUAL-Plus (special duty), viewed through Talent Marketplace in myVector; the member's assignment preferences live in the self-service assignment preference application in the same place.",
          who: "Officers on a VML; enlisted members in an EQUAL cycle. Each enlisted member is individually responsible for the currency and accuracy of their own preferences.",
          body: [
            "The officer system runs two assignment cycles per year (the structure AFPC built Talent Marketplace around in 2018 — printed as established structure, not a 2026 announcement). Billet owners submit requisitions (Personnel Requirements Display) and commanders input recommendations in the same system. Developmental Duty volunteering and the Enlisted Swap Program also run through myVector. Spelling varies officially — myVector/MyVector — this section uses myVector.",
          ],
          flags: [
            "“Enlisted Talent Marketplace” — NOT FOUND as a current standalone AFPC/DAF system name, and not printed as one here. What is verifiable for 2025–26 is the concrete list on this card (EQUAL/EQUAL-Plus, preferences, special-duty ads, Developmental Duty, Swap).",
            "AMS (Assignment Management System) is not dead: AFPC's Career Management page still lists AMS as an online career-management program for officers and enlisted, while current DAFI guidance routes preference work through Talent Marketplace in myVector. Older system still listed; functions overlap; transition ongoing.",
          ],
          links: [{ label: "DAFI 36-2110 (Change 2, 5 Mar 2026)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2110/dafi36-2110.pdf" }],
          source: "DAFI 36-2110, Change 2 (Mar 2026)",
        },
        {
          id: "af-teams",
          name: "AFPC assignment teams — and no published “call your detailer” model",
          summary:
            "Assignments are ordered by the assignment OPR; the assignments directorate in the current DAFI reads AFPC/DPP. Etiquette verdict for the Air Force: NOT FOUND as a standalone public guidance page — the published model is cycle-based and system-mediated, and preferences kept current in Talent Marketplace are the member's primary voice.",
          who: "Airmen who keep looking for a detailer phone number — this entry explains why the system doesn't publish one.",
          body: [
            "Officer Assignment Teams work by career field; on the enlisted side, Functional Assignment Managers (FAMs) and Career Field Manager (CFM) release gate moves — under the new Developmental Duty process, individual CFM pre-approval is replaced by a preset quarterly release cap per career field.",
            "What exists instead of an etiquette page: an AFPC “Contact the Assignment Team” route from Career Management; contact inside Talent Marketplace during a cycle; commander reclama during the VML process; and the enlisted chain — member → Senior Enlisted Leader → FAM/CFM.",
          ],
          flags: ["AFPC/DP2 appears in older material — flagged, not used as the current label; AFPC/DPP is current per DAFI 36-2110 Change 2."],
          links: [],
          source: "DAFI 36-2110, Change 2 (Mar 2026) · AFPC Career Management",
        },
        {
          id: "af-developmental-duty",
          name: "Developmental Duty — the special-duty category, renamed",
          summary:
            "Name change (DAFI 36-2110 Change 2): Developmental Special Duty (DSD) is now Developmental Duty (DD). DD positions are advertised through EQUAL-Plus ads on Talent Marketplace via myVector, under a volunteer-first process from Oct 1, 2025.",
          who: "Enlisted Airmen considering a developmental/special duty tour. Program detail in Change Your Job.",
          body: [
            "Published DD categories include military training instructor, military training leader, academy military training NCO, officer accessions instructor, first sergeant, PME instructor, and recruiter. Members volunteer in Talent Marketplace and are screened by the DD hiring team, replacing the old nomination + individual CFM-release model. Joint assignments for enlisted run through AFPC's eJDA Assignment Branch, advertised via EQUAL-Plus.",
          ],
          flags: [],
          links: [],
          source: "DAFI 36-2110, Change 2 (Mar 2026)",
        },
      ],
    },
    {
      key: "sf",
      label: "Space Force",
      tileSub: "Entry 20 · same DAFI, own timeline — GAT + ETMO",
      intro:
        "Guardians use Talent Marketplace in myVector like Airmen, but under the Guardian Assignment Timeline (GAT), administered by ETMO.",
      entries: [
        {
          id: "sf-gat",
          name: "Guardians: same DAFI, own timeline — GAT + ETMO",
          summary:
            "DAFI 36-2110 applies to all Guardians. Guardians use Talent Marketplace in myVector — Lt Cols and below advertise and preference there — but under the Guardian Assignment Timeline (GAT): “the GAT outlines the USSF yearly assignment cycle and associated timelines [and] is used in conjunction with the Talent Marketplace system to identify, advertise, and assign members to USSF requirements.”",
          who: "Guardians in a GAT cycle; senior leaders should note they're outside it.",
          body: [
            "Cadence (SPFGM2026-36-01, Ch. 6, structural): GAT application cycles run annually, with a separate mandatory assignment process every 36 months. Senior grades sit outside the market: O-6 and above and E-8/E-9 are assigned through USSF Senior Leader Management processes (SF/S1L), while ETMO administers the program for the in-market population.",
            "ETMO (Enterprise Talent Management Office) is the Guardian assignment OPR — the DAFI's AFPC assignment-team functions read to the ETMO assignment team for USSF (VML reclama, hardship evaluation), and ETMO runs centralized boards (e.g., the Regional Space Advisor board, applications via myVector).",
          ],
          flags: [
            "“Guardian Talent Marketplace” — NOT FOUND on any official page, and not printed as a system name here.",
            "The richer “Guardian Ideal” stability language in circulation comes from 2022 congressional testimony — dated, not current assignment-page framing; excluded from this section's USSF entries.",
          ],
          links: [{ label: "SPFGM2026-36-01", url: "https://static.e-publishing.af.mil/production/1/ussf/publication/spfgm2026-36-01/spfgm2026-36-01.pdf" }],
          source: "SPFGM2026-36-01 · DAFI 36-2110",
        },
      ],
    },
    {
      key: "cg",
      label: "Coast Guard",
      tileSub: "Entries 21–23 · the Assignment Year, AOs and the eResume, the CAC-gating finding",
      intro:
        "The Coast Guard assigns through an annual Assignment Year season run by PSC. Public PSC pages are deliberately thin shells — CAC-gating is a core finding of the research, printed on these cards, not a gap to fill.",
      entries: [
        {
          id: "cg-ay",
          name: "The Assignment Year (AY) — PSC's annual season, and the CAC-gating finding",
          summary:
            "The Assignment Year opens with kickoff messages — ALCGENL (enlisted), ALCGOFF (officer), ALCGRSV (Reserve) — with separate kickoffs for boards/panels and for Special Assignments. The member's tools, as public pages name them: Direct Access (DA) is the system of record, shopping-list billets open in DA and are applied for via PCS eResumes, and CGBI's Employee Summary Sheet (ESS) is the consolidated view of your own record as it appears in DA.",
          who: "Every Coast Guardsman approaching tour completion — the AY kickoff message for your population is the starting gun.",
          body: [
            "The published sequence (enlisted version is clearest publicly): AO counseling window and PAL (Personnel Allowance List) validation → AO/CAC roadshows → unofficial shopping list for command validation → official shopping list → PCS eResumes due → slating (AOs slate members and issue orders). Officer AY substitutes assignment panels by grade plus command/education screening panels (SCSP, JCSP, SEFP) for the single slating window. Changes publish SEPCOR in the same message series — this section prints the skeleton only; all dates live in the current kickoff messages. iPERMS holds the official personnel file.",
          ],
          flags: [
            "CAC-gating is a core finding, not a research failure: public PSC pages are deliberately thin shells. OPM's page states detailed processes moved to the PSC-OPM SharePoint (CAC required); EPM-2's page states all general and contact information for enlisted assignments lives on the individual rating pages on SharePoint (CAC required). Assignment Guides, shopping lists, AY SITREPs, individual AO account notes, roadshow schedules, and the Assignment Priority table are CAC-gated. RPM-2 (Reserve) is the exception — it publishes AO assignments by district/grade and counseling guidance openly. This section prints what is publicly verifiable and says, here, that the rest is officially published only behind CAC.",
          ],
          links: [
            { label: "PSC-EPM", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/epm/" },
            { label: "EPM-2 Assignments", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/EPM/EPM-2-Assignments/" },
          ],
          source: "PSC-EPM / PSC-OPM public pages · AY kickoff messages",
        },
        {
          id: "cg-ao-eresume",
          name: "Assignment Officers, the eResume, and PSC's structure",
          summary:
            "The eResume's official name is PCS e-Resume in Direct Access. There is no official “dream sheet” term in CG publications — it's colloquial, and this section doesn't use it as a CG term. Per Sea Legs — Transfers: a shopping list of available positions is published, members build their e-Resume from it, listing as many positions as possible most-desired first; the e-Resume is the communication tool for assignment desires.",
          who: "Members building an eResume — and anyone told to “just put it on your dream sheet,” who now knows the real name and where it lives.",
          body: [
            "Structure as currently published: PSC-EPM (enlisted) = EPM-1 Advancements & Separations, EPM-2 Assignments, EPM-3 Evaluations. PSC-OPM (officer) = OPM-1 Boards/Promotions/Separations, OPM-2 Officer Assignments, OPM-3 Evaluations, OPM-4 Career Management. PSC-RPM-2 is the sole authority for SELRES PCS assignments, with AOs by district/grade.",
            "What an AO does: EPM-2's mission is assigning the right people to the right positions at the right time, balancing Service, unit, and member needs. Enlisted AOs sit one-per-rating under Central Assignment Coordinators (CACs) who manage rating clusters (one CAC's portfolio, as published, spans aviation/operations/intelligence/dive/special assignments; another covers support ratings including PATFORSWA). OPM-2 places all regular officers, CWOs, and Reserve officers on Extended Active Duty contracts. Career counseling is a separate chair from slating (OPM-4 / EPM-4 functions).",
            "Two mechanics worth printing: eResumes submitted before a shopping list opens may not be visible to AOs (resubmit), and command endorsement is required where the solicitation specifies. Priority has a system: an Assignment Priority table (M1000.8; reviewed on a triennial cycle) credits arduous, overseas, and afloat tours with higher priority for the next assignment — the table itself is CAC-gated.",
          ],
          flags: [
            "AY traffic also references an EPM-4 career-advisory function absent from the public three-branch EPM list — flagged, not resolved.",
          ],
          links: [
            { label: "Sea Legs — Transfers", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Sea-Legs/Transfers/" },
            { label: "RPM-2", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Personnel-Service-Center-PSC/Reserve-Personnel-Management-PSC-RPM/RPM-2/" },
          ],
          source: "PSC-EPM-2 / PSC-OPM-2 · Sea Legs — Transfers (Office of Work-Life)",
        },
        {
          id: "cg-etiquette",
          name: "“How to talk to your AO” — FOUND in message traffic, not as a page",
          summary:
            "Etiquette verdict for the Coast Guard: FOUND in message traffic. The ALCGENL AY Kick Off frames direct AO communication during the published counseling window as the foundation for a realistic eResume; RPM-2's public page says it plainly: “AOs should be contacted during the counseling period identified in the annual ALCGRSV AY Kick-off messages.”",
          who: "Coast Guardsmen in an AY counseling window.",
          body: [
            "Members expecting to rotate — and any member, tour-complete or not — are expected to request assignment counseling; scheduling runs through the AO's SharePoint page; EPM roadshows bring AO/CAC/career-advisor counseling to units (in person or Teams).",
          ],
          flags: [
            "NOT FOUND: a standalone public PSC etiquette page. The published etiquette is structural — counseling window, SharePoint scheduling, eResume as the formal channel — and anything more granular is on the CAC-gated AO pages.",
          ],
          links: [],
          source: "ALCGENL AY Kick Off messages · PSC-RPM-2",
        },
      ],
    },
    {
      key: "colocation",
      label: "Spouse Co-Location",
      tileSub: "Entries 24–25 · five programs, five names — and reserve assignments at named level",
      intro:
        "“Join Spouse” is one branch's term, not the military's. Each service runs its own program, and every one publishes the same fine print: co-location is a consideration, worked inside valid requirements — never a guarantee.",
      entries: [
        {
          id: "colocation-table",
          name: "The name table — five programs, five names, and the universal fine print",
          summary:
            "Army MACP (enrollment now automatic via DEERS), Marine Corps Dual-Mil, Navy Co-location (90 driving miles, “not guaranteed”), Air Force / Space Force Join Spouse (intent codes A/B/H, 50 miles), Coast Guard Colocation (through both members' AOs, no Reserve policy). The request runs through each member's own service system, in that service's own name.",
          who: "Dual-military couples in any combination of branches.",
          body: [],
          bullets: [
            { title: "Army — Married Army Couples Program (MACP)", text: "Enrollment is now automatic via DEERS marital-status data (IPPS-A update) — older “enroll by request/4187” wording is superseded. When one enrolled Soldier is considered for reassignment, the other is automatically considered for the same location/area (except dependent-restricted locations); favorable consideration still depends on valid requisitions for both Soldiers in the same area, subject to the needs of the Army. Only HRC can put joint domicile on orders." },
            { title: "Marine Corps — Dual-Mil / Dual Military co-location", text: "(MCO 1300.8, Ch. 5; run by the Dual-Mil Coordinator.) Requested by AA Form with command endorsement (battalion/squadron level minimum), reviewed by MMEA; generally eligible one year from marriage and after one year time on station, with exceptions considered. Even declinations are regulated: declining co-location needs the Director, MMEA's approval via AA Form with O-5-level endorsement. The page's own limit: the coordinator and assignment managers “will exhaust all feasible options while meeting service requirements” — and a joint assignment may still not result." },
            { title: "Navy — Co-location", text: "(MILPERSMAN 1300-1000.) Every reasonable effort to establish a joint household; a one-time request with command endorsement to your detailer — officers on NAVPERS 1301/85, enlisted on NAVPERS 1306/7, with a copy of the spouse's request — after which co-location becomes your highest priority duty preference. Guide distance is 90 driving miles. Published restrictions: not permanently to the same ship/deployable command; ashore, not under the same reporting senior without gaining-CO concurrence; normally not simultaneous involuntary sea duty. MyNavyHR's plain-language page states it outright: “Co-lo assignments are not guaranteed.” Members need a minimum one year on board the present command at transfer." },
            { title: "Air Force / Space Force — Join Spouse", text: "(DAFI 36-2110, Attachment 8.) The couple sets an intent code — A: join spouse desired, including concurrent dependent-restricted/unaccompanied short tours; B: join spouse desired for CONUS and accompanied overseas tours, concurrent short tours not desired; H: join spouse not desired. Marriage must be updated in MilPDS/DEERS, then intent code and preferences in vMPF. Per AFPC, the intent code “takes priority over individual assignment preferences” — but both members must hold A or B with matching preferences, serve in their own right, be PCS-eligible, and a vacancy must exist for the spouse. Same installation, or installations within 50 miles maintaining a joint residence." },
            { title: "Coast Guard — Colocation", text: "(Policy inside COMDTINST M1000.8; both “colocation” and the ACN's “Collocation” spellings appear officially.) No separate program brand and no application portal on public pages: it runs through both members' AOs, and PSC's published advice is that early AO contact for a realistic eResume is the best way to assure it. ACN 064/18: PSC aligns tour lengths of dual-military couples who wish to be collocated, lengthening or shortening by duty type and service needs. Practical published mechanic: mark “Dual Military” at the top of the eResume comments." },
          ],
          flags: ["Reserve distinction: RPM guides state there is no specific colocation policy for Coast Guard Reserve assignments — handled case-by-case."],
          links: [
            { label: "USMC Dual-Mil Coordinator", url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Enlisted-Assignments/Stay-Marine/Dual-Mil-Coordinator/" },
            { label: "Navy Family Member CO-LO", url: "https://www.mynavyhr.navy.mil/Support-Services/Distribution-Management/Family-Member-CO-LO/" },
            { label: "AFPC Join Spouse article", url: "https://www.afpc.af.mil/News/Article-Display/Article/1200090/" },
          ],
          source: "MACP (IPPS-A update) · MCO 1300.8 Ch. 5 · MILPERSMAN 1300-1000 · DAFI 36-2110 Att. 8 · COMDTINST M1000.8",
        },
        {
          id: "reserve-assignments",
          name: "Reserve-component assignments — named level only",
          summary:
            "This section's systems are the active-component machines. Two reserve assignment systems were verified and are named here; the rest are cross-linked to the Guard & Reserve Hub and Switching Components, not reconstructed.",
          who: "Reservists and Guardsmen checking which machine is actually theirs.",
          body: [],
          bullets: [
            { title: "Navy Reserve", text: "MNA was extended to the Reserve Force as a detailing marketplace for enlisted Reserve billets — SELRES Sailors view, bookmark, and apply for Reserve billets in the same system as the active force." },
            { title: "Coast Guard Reserve", text: "PSC-RPM-2 is the sole authority for SELRES PCS assignments, running its own ALCGRSV Assignment Year season (kickoff → shopping lists → eResumes in Direct Access → finalized slates → orders), AOs organized by district/grade. Its public page is also the most open in the CG — and it states there is no Reserve colocation policy; cases are handled case-by-case." },
          ],
          flags: ["No additional reserve assignment system name is printed in this section beyond the two verified above."],
          links: [],
          source: "MyNavyHR (MNA Reserve extension) · PSC-RPM-2",
        },
      ],
    },
    {
      key: "special-overseas",
      label: "Special Categories & Overseas",
      tileSub: "Entries 26–28 · special duty's five doors, joint billets, overseas vocabulary and screening",
      intro:
        "Special duty and special assignments are carved out of every service's normal flow, each with its own screening door. Overseas vocabulary is defined once, with branch screening doors noted — and no tour-length table anywhere.",
      entries: [
        {
          id: "special-duty-doors",
          name: "Special duty and special assignments — one category, five doors (named level)",
          summary:
            "Army DA-selected/volunteer fills; USMC's SDA campaign + HSST; Navy Shore Special Programs (PERS-4010); DAF Developmental Duty via EQUAL-Plus; USCG's dedicated Special Assignments kickoff that shops earlier than general assignments. This section names the doors; it does not reproduce their requirements — eligibility and screening detail live in Change Your Job and the live branch source.",
          who: "Members weighing a special-duty tour against a market/monitor move.",
          body: [],
          bullets: [
            { title: "Army", text: "DA-selected/volunteer fills (Drill Sergeant, Detailed Recruiter, AIT Platoon Sergeant, instructor) can move a Soldier ahead of YMAV; nominative billets are KSB-selected." },
            { title: "USMC", text: "The SDA campaign + HSST — Recruiter, Drill Instructor, Combat Instructor, MSG Detachment Commander, screened under MCO 1326.6 (SCREENMAN)." },
            { title: "Navy", text: "Shore Special Programs, PERS-4010, list in MILPERSMAN 1306-900; screening via NAVPERS 1306/92, released through your detailer." },
            { title: "DAF", text: "Developmental Duty (formerly DSD), volunteered through EQUAL-Plus on Talent Marketplace." },
            { title: "USCG", text: "A dedicated Special Assignments kickoff that shops earlier than general assignments — published categories include Recruit Company Commander, recruiting duty, Command Senior Enlisted Leader billets, and PATFORSWA (one-year, dependent-restricted PCS to Bahrain, currently published as both an EPM-2 CAC portfolio and OPM solicitations — not merely historical)." },
          ],
          flags: [
            "NOT FOUND on public PSC pages: attaché or joint-duty categories in the CG special-assignments menu (the detailed catalog is CAC-gated) — this section names no CG attaché/joint route.",
          ],
          links: [],
          source: "The services' assignment publications (see the branch tiles)",
        },
        {
          id: "joint-billets",
          name: "Joint billets — the JDAL at summary level",
          summary:
            "Joint duty is an officer-career structure built on the Joint Duty Assignment List (JDAL). Serving a tour in a JDAL billet (a Standard Joint Duty Assignment, S-JDA) accrues joint credit toward Joint Qualified Officer (JQO) status under the Joint Qualification System (JQS). Joint tours are assigned through the normal branch systems in this section — there is no separate joint marketplace in any service's published structure.",
          who: "Officers (and DAF senior enlisted) planning a joint-credit tour.",
          body: [
            "Branch doors, at named level: Army — JDAMIS, run by HRC's Joint Officer Management Branch; Navy — PERS-451 Joint Officer Management (MILPERSMAN 1301-216); DAF — AFPC's eJDA Assignment Branch manages joint assignments for enlisted (advertised via EQUAL-Plus), with officer joint management through the assignment teams (USSF: SF/S1/ETM and SF/S1L by grade). The JQS also recognizes experience-based joint duty (E-JDA) by self-nomination in the Navy's published framing. Enlisted joint billets outside the DAF eJDA route are sparse and service-specific — this section claims none beyond what's printed.",
          ],
          flags: [],
          links: [],
          source: "JDAL / JQS published structure · MILPERSMAN 1301-216",
        },
        {
          id: "overseas",
          name: "Overseas: accompanied, unaccompanied, dependent-restricted — and screening",
          summary:
            "Accompanied tour — dependents are authorized and travel with the member. Unaccompanied tour — the member serves without dependents at that station. Dependent-restricted — dependents are simply not authorized at that station. Screening is its own step, and it can stop the move. Tour lengths are location- and status-specific in every service; this section prints no tour-length table.",
          who: "Anyone with an overseas assignment in view — read before volunteering, not after orders.",
          body: [
            "Army command sponsorship (USAG Italy's published framing): sponsorship is approved, never guaranteed — the application includes an EFMP screening of each family member and gaining-command approval before the family travels; only command-sponsored dependents receive the full entitlement set. USMC tour mechanics (MCO 1300.8 Ch. 6): tour conversion exists — a Marine on an unaccompanied tour who acquires/reunites with dependents must be approved for the accompanied tour to gain command sponsorship.",
            "Screening doors: Navy — NAVPERS 1300/16, Report of Suitability for Overseas Assignment, processed in BOL under MILPERSMAN 1300-302, signed by the transferring command's CO; consecutive overseas tours require re-screening. USMC — Overseas Suitability Screening (OSS) under MCO 1300.8 Ch. 6 + Appendix B checklist; dependents travel only after orders, completed OSS, and approved command sponsorship; the MCO warns screening may take 60 days or more — start on receipt of orders. DAF — EFMP's Family Member Travel Screening (FMTS), started from a MyVector link on assignment notification, with clearance documentation in Q-base. USCG — screening under PSCINST 1300 (series) and M1000.8, involving member, family, command, and medical facility. Army — Family Member Travel Screening via the EFMP system for accompanied OCONUS elections.",
            "EFMP at name level only here: assignment coordination for families with special needs runs through EFMP — Coast Guard: Special Needs Program (SNP) — with full mechanics in Family & Life Events.",
          ],
          flags: [
            "USMC screening is not “NAVPERS screening” — Navy forms appear in the MCO's reference list, but the Corps' vehicle is its own order and checklist.",
            "No tour-length table prints: the numbers on any single garrison page do not generalize, and a 2025 Army guide's Korea description already conflicts with the current Korea garrison page.",
          ],
          links: [],
          source: "MCO 1300.8 Ch. 6 · MILPERSMAN 1300-302 · DAFI 36-2110 / FMTS · PSCINST 1300",
        },
      ],
    },
    {
      key: "verdicts",
      label: "Talking to the Human",
      tileSub: "Entry 29 · the etiquette verdict table, per branch",
      intro:
        "The research required each branch's etiquette guidance to come from the branch itself. The honest result is uneven, and the unevenness is the finding — set expectations by your branch's row, not by another service's culture.",
      entries: [
        {
          id: "etiquette-verdicts",
          name: "Official “how to talk to them” guidance — per branch, FOUND or NOT FOUND",
          summary:
            "Army — PART FOUND. USMC — NOT FOUND. Navy — FOUND, distributed. Air Force / Space Force — NOT FOUND as a page. Coast Guard — FOUND in message traffic. Each branch's own tile in this section carries its verdict in full.",
          who: "Everyone.",
          body: [],
          bullets: [
            { title: "Army — PART FOUND", text: "No standalone etiquette page; real guidance inside the two official marketplace guides (preference deeply; “stay quiet is a myth”; call branch early — ASK-EM FAQ Q9)." },
            { title: "USMC — NOT FOUND", text: "Contact lists and interview booking are published; etiquette guidance is not. Social-media etiquette is not MMEA guidance." },
            { title: "Navy — FOUND, distributed", text: "No central hub (“Detailer Corner” is internal, not a publication), but rating/community pages publish concrete guidance — the “6 Keys to the Detailing Process,” Sailor-comment mechanics, and the zero-applications warning." },
            { title: "Air Force / Space Force — NOT FOUND as a page", text: "The published model is cycle-based and system-mediated (Talent Marketplace inputs, commander reclama, Contact the Assignment Team route, SEL→FAM chain)." },
            { title: "Coast Guard — FOUND in message traffic", text: "Counseling-window engagement is published in the AY kickoff messages and on RPM-2's public page; no standalone etiquette page exists, and detail beyond that is CAC-gated." },
          ],
          flags: [],
          links: [],
          source: "The services' own publications, per branch (see the branch tiles)",
        },
      ],
    },
  ],
};
