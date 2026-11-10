// Spouse Hub — static reference data transcribed from the researched
// spouse pack (~/workspace/military-app/spouse/spouse.md, researched
// November 9, 2026). Summaries, program names, figures, and links come
// only from the pack. Cross-references link into the sections that
// already carry the detail (Family & Life Events, Benefits, PCS Move
// Center, Mail Call, Care & Crisis, State Benefits Finder) — the hub
// curates and routes, it never duplicates them.
//
// Fidelity rules baked into this data (the pack's flags register):
// - Current program names ship, with the former names noted as
//   "you may still hear…": Army Soldier and Family Readiness Group
//   (SFRG, renamed from FRG by Army Directive 2019-17); Marine Corps
//   Readiness Coordinator (DRC/URC) inside the UPFRP (the FRO title is
//   former, no transition date printed — the official pages state
//   none); Air Force / Space Force Commander's Key Support Program
//   (CKSP, rebranded from Key Spouse in March 2024).
// - PCS license-reimbursement figures print PER SERVICE, exactly as
//   each service's official page states them — never blended, never
//   rounded, never carried across services. Coast Guard business-cost
//   reimbursement is UNCONFIRMED and is not printed.
// - The EO 13473 / 5 CFR 315.612 entry keeps OPM's correction: that
//   authority is NOT a hiring preference and conveys no selection
//   priority. It stays visibly distinct from MSP.
// - Fisher House ships as the corrective entry it is: its scholarships
//   are for military CHILDREN — spouse-parents applying for their kids
//   — never as spouse education money.
// - The Coast Guard orientation entry keeps the pack's honesty: no
//   branded new-spouse orientation program was found on official
//   pages (a search finding, not proof of non-existence).
// - Military Kids Connect could NOT be verified live: the pack's
//   research fetcher failed on its health.mil address, and the build's
//   own probe of https://militarykidsconnect.health.mil/ failed to
//   resolve as well. Per the pack's flag, the entry renders with its
//   re-verify flag and NO link.
// - COMPASS is credited to its operator, Naval Services FamilyLine;
//   no acronym expansion is printed because official pages give none.

export type SpouseLink = { label: string; url: string };

export type SpouseBullet = {
  /** Bold lead-in, e.g. a service name. */
  title?: string;
  text: string;
  links?: SpouseLink[];
};

/** An in-app cross-reference into an existing Battle Book section. */
export type SpouseCrossRef = { view: string; label: string };

export type SpouseEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: SpouseBullet[];
  flag?: string;
  links: SpouseLink[];
  /** In-app cross-references, rendered as buttons. */
  crossRefs?: SpouseCrossRef[];
  /** Extra label rendered as a red badge (e.g. a rename). */
  alertBadge?: string;
};

export type SpouseGroup = {
  title: string;
  note?: string;
  entries: SpouseEntry[];
};

export const SPOUSE_HUB_STANDING_NOTE =
  "Everything here is written spouse-first, from the services' own current pages. Programs get renamed — where a name changed, the card uses the current name and notes the one you may still hear, because both will come up at your first unit event. Where services publish different figures, each service's figure prints separately with its source; nothing is blended into a fake DoD-wide number.";

export const SPOUSE_HUB_GROUPS: SpouseGroup[] = [
  {
    title: "New Spouse Basics — Orientation & Your Unit's Family Structure",
    note: "Every service runs a new-spouse orientation and a unit-level family structure. They have different names in every branch — and three of them were renamed recently, so the current name and the one you may still hear are both on the card.",
    entries: [
      {
        name: "Army Family Team Building (AFTB)",
        kind: "Army — new spouse orientation",
        summary:
          "AFTB is a series of training modules taught through your local Army Community Service (ACS) office, covering specialized military knowledge, personal growth and resiliency, and leadership development. Level I is built for the spouse who is new to the Army — including Military Terms, Customs and Acronyms, and Chain of Command / Chain of Concern. Classes are provided in English and Spanish and may be taken online.",
        who: "New Army spouses first; the modules continue into personal-growth and leadership levels. The route in is plain: contact your installation's Army Community Service Center.",
        links: [
          {
            label: "AFTB via Fort Walker ACS (same ACS structure Army-wide)",
            url: "https://home.army.mil/aphill/about/Fort-Walker-Garrison-Directory-Directory/army-community-service/army-family-team-building-aftb",
          },
        ],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
      {
        name: "L.I.N.K.S. — Marine Corps spouse orientation",
        kind: "Marine Corps — new spouse orientation",
        summary:
          "Lifestyle Insights, Networking, Knowledge, and Skills (L.I.N.K.S.) is a Marine Corps Family Team Building program that enhances the readiness of Marines — single or married — and their families by offering an orientation to the Marine Corps lifestyle. Historically offered only to spouses, classes are now also available for Marines, parents of Marines, and children of Marines. It runs through a partnership of volunteer spouses, Marine Corps Family Team Building (MCFTB) staff, Career Retention Specialists, and Chaplains, with experienced spouses facilitating in a mentoring style.",
        who: "New Marine Corps spouses first; open to Marines, parents, and children. Run by MCFTB under MCCS / Marine & Family Programs at each installation.",
        flag: "The acronym expansion's exact wording varies slightly across official MCCS installation pages; the wording above is the Henderson Hall MCCS page's.",
        links: [
          { label: "L.I.N.K.S. (Henderson Hall MCCS)", url: "https://hendersonhall.usmc-mccs.org/marine-family-support/military-family-life/l-i-n-k-s" },
          {
            label: "MCFTB / UPFRP context (Lejeune–New River MCCS)",
            url: "https://lejeunenewriver.usmc-mccs.org/marine-family-support/military-family-life/marine-corps-family-team-building/unit-personal-and-family-readiness-program",
          },
        ],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
      {
        name: "COMPASS — Navy spouse orientation",
        kind: "Navy — new spouse orientation",
        summary:
          "COMPASS is a standardized team-mentoring program developed by spouses for spouses. It focuses on spouses new to the Navy, though all spouses are welcome. It is taught over three days — 12 hours in person (three 4-hour sessions) or 9 hours virtual (three 3-hour sessions) — with a standardized curriculum covering Navy mission, history, organization, customs and traditions, rights and benefits, deployment, pay, moving, and interpersonal communication. Course materials are free.",
        who: "New Navy spouses first; all spouses welcome.",
        details: [
          "Who runs it: Naval Services FamilyLine (NSFL), a volunteer-spouse nonprofit headquartered on the Washington Navy Yard. Navy.mil states NSFL \"offers four elements: The Guideline Series, Spouse Courses, COMPASS and CORE,\" and that COMPASS is \"a free, three-day, program coordinated and taught by Navy spouse volunteers.\"",
        ],
        flag: "Credit FamilyLine as the operator: no fetched official page states that Fleet & Family Support Centers run COMPASS, so an FFSC operating role is unconfirmed. Official pages also give no acronym expansion for COMPASS — none is printed here, because inventing one would be making it up.",
        links: [
          {
            label: "Naval Services FamilyLine golden-anniversary article (navy.mil; COMPASS as an NSFL element)",
            url: "https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/2257972/naval-services-familyline-celebrates-golden-anniversary/",
          },
          { label: "COMPASS (CNIC, NS Mayport installation page)", url: "https://cnrse.cnic.navy.mil/Installations/NS-Mayport/Operations-and-Management/COMPASS/" },
          { label: "COMPASS program page (Naval Services FamilyLine)", url: "https://nsfamilyline.org/our-programs/compass/" },
        ],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
      {
        name: "Heart Link — Air Force & Space Force spouse orientation",
        kind: "Air Force / Space Force — new spouse orientation",
        summary:
          "Per the Air Force Personnel Center: \"The Heart Link Program, funded by the Air Force Aid Society, is an adaptation and networking forum for Air Force spouses of less than five years. It's designed to strengthen military families and enhance mission readiness by orienting new Air Force spouses to active duty military life.\" It builds awareness of the Air Force mission, customs and traditions, protocol, available resources, and how to reach helping agencies.",
        who: "Spouses in their first five years, Air Force and Space Force. AFPC's route: visit your Military & Family Readiness Center (M&FRC) to learn how the program works at your base.",
        flag: "There is no separate Space Force program: Heart Link is a Department of the Air Force program, and official MilitaryINSTALLATIONS pages describe it as orienting \"new Air Force or Space Force spouses (typically 5 years or less)\" — Space Force bases run it through their M&FRC (Schriever SFB lists it as \"New Spouse Orientation (Heart Link)\").",
        links: [
          { label: "Heart Link (AFPC, Military and Family — Personal and Work Life)", url: "https://www.afpc.af.mil/Military-and-Family/Personal-and-Work-Life/" },
          {
            label: "Heart Link for Air/Space Force spouses (MilitaryINSTALLATIONS, Travis AFB)",
            url: "https://installations.militaryonesource.mil/military-installation/travis-air-force-base/military-and-family-support-center/service-specific-information",
          },
        ],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
      {
        name: "Coast Guard — Sea Legs & Work-Life (no branded orientation course)",
        kind: "Coast Guard — family reference & Work-Life",
        summary:
          "The Coast Guard doesn't run a named new-spouse orientation course the way the other services do — what exists instead is a family reference guide and the Work-Life structure. Sea Legs — The Family Member's Guide to the U.S. Coast Guard is the official family reference: \"If you are new to the service, Sea Legs will help you become acquainted with life in the Coast Guard and the many benefits and resources available to you as family members.\" The guide includes a \"Checklist — New Spouse.\" The Office of Work-Life (CG-111) runs the Coast Guard Work-Life Program, which \"supports our personnel and their families by providing programs and services that help navigate the challenges of both work and personal life,\" delivered by Regional Work-Life field staff at Coast Guard bases.",
        who: "New Coast Guard spouses and families. The family-support route for new families is the unit ombudsman (see the Coast Guard Ombudsman card below) and the local Health, Safety, and Work-Life (HSWL) Regional Practice.",
        flag: "Stated as found: searches of official Coast Guard pages found no branded new-spouse orientation program — no AFTB / L.I.N.K.S. / COMPASS / Heart Link analogue. That is a search finding, not proof of absolute non-existence.",
        links: [
          {
            label: "Sea Legs — Greetings (CG-111)",
            url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Sea-Legs/Greetings/",
          },
          {
            label: "Sea Legs — Family Support (CG-111)",
            url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Sea-Legs/Family-Support/",
          },
        ],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
      {
        name: "Soldier and Family Readiness Group (SFRG)",
        kind: "Army — your unit's family organization",
        summary:
          "An SFRG is \"a command sponsored organization of Family members, volunteers, Soldiers, and civilian employees belonging to a unit, that together provide an avenue of mutual support and assistance and a network of communications among the Family members, the chain of command, chain of concern, and community resources.\" The unit commander is the SFRG Leader; the Command Family Readiness Representative (CFRR) is the commander's representative for the flow of information and support between unit leadership, volunteers, and families.",
        who: "Every Army unit has one; a spouse connects through the unit or the local ACS.",
        flag: "Renamed: per Army Directive 2019-17 (dated 1 Apr 2019), which \"established an official name change to refer to FRG's henceforth as SFRG's\" (with HQDA EXORD 233-19 clarifying and AR 608-1, Appendix J governing operations). You may still hear \"FRG\" — that is the former name, not the current one.",
        alertBadge: "RENAMED — FORMERLY FRG",
        links: [
          {
            label: "SFRG (Fort Leonard Wood Army MWR; directive and definitions as published there)",
            url: "https://leonardwood.armymwr.com/programs/partner-us/soldier-and-family-readiness-group-sfrg",
          },
        ],
      },
      {
        name: "UPFRP & the Readiness Coordinator (DRC/URC)",
        kind: "Marine Corps — your unit's readiness program",
        summary:
          "The Unit, Personal and Family Readiness Program (UPFRP) is \"a unit centric program, guided by the Family Readiness Command Team that reinforces the relationship between the unit and the services relevant to the unit, the unit members, and their families. The primary goal of UPFRP is to empower Marines and family members…\" Marine Corps Family Team Building provides training in support of UPFRP. The Readiness Coordinator is the face of the Commanding Officer's vision for family readiness and provides direct coordination for the program — in practice a Deployment Readiness Coordinator (DRC) or Uniformed Readiness Coordinator (URC).",
        who: "Every Marine unit runs UPFRP. How a spouse connects: at check-in, your Marine provides the contact information of individuals to be added as authorized contacts for UPFRP communications (e.g., the monthly UPFRP emails) — if you aren't hearing from the unit, first confirm you're listed as an authorized contact.",
        flag: "Renamed role: the Family Readiness Officer (FRO) title is former. Per MCCS, the program \"has transitioned from having FROs to DRCs and URCs.\" No transition date is stated on the official pages, so none is printed. You may still hear \"FRO\" — older unit pages still saying it are lag, not current naming.",
        alertBadge: "RENAMED ROLE — FORMERLY FRO",
        links: [
          { label: "UPFRP / Family Readiness Program Training (Miramar MCCS)", url: "https://miramar.usmc-mccs.org/marine-family-support/military-family-life/family-readiness-program-training" },
          {
            label: "UPFRP (Lejeune–New River MCCS)",
            url: "https://lejeunenewriver.usmc-mccs.org/marine-family-support/military-family-life/marine-corps-family-team-building/unit-personal-and-family-readiness-program",
          },
        ],
      },
      {
        name: "Command Ombudsman Program",
        kind: "Navy — your command's family link",
        summary:
          "\"The Ombudsman Program is a command-operated program, intended to improve communication between the command and a Sailor's family members. Navy Family Ombudsmen are communication links, information and referral resources, and advocates for command family members.\" Ombudsmen are appointed by the commanding officer and are volunteers — per Navy policy (OPNAVINST 1750.1H), spouses of active-duty members of the command or Selected Reserves — who complete Ombudsman Basic Training and work with the command master chief as point of contact. Support and training infrastructure sits with Fleet & Family Support, including a local FFSC Ombudsman Coordinator.",
        who: "Families of every Navy command. How a spouse connects: the Ombudsman Registry's \"Contact Your Ombudsman\" feature (pick the command's location/installation, then the command; a request form follows, with contact promised within 24–48 hours), or call your local FFSC and ask the Ombudsman Coordinator for your command's ombudsman.",
        links: [
          { label: "Ombudsman Program FAQs (CNIC Fleet & Family Support Program)", url: "https://ffr.cnic.navy.mil/Family-Readiness/Fleet-And-Family-Support-Program/Work-and-Family-Life/Ombudsman-Program/FAQs/" },
        ],
      },
      {
        name: "Commander's Key Support Program (CKSP)",
        kind: "Air Force / Space Force — your unit's family link",
        summary:
          "Per current DAF guidance (DAFI 36-3009, Guidance Memorandum 2026-01, 15 Jan 2026): \"The Commander's Key Support Program (CKSP) is a commander's program to enhance the communication flow from leadership to unit family members. Unit Commanders appoint and utilize volunteers for the program, identified as Key Support Liaisons (KSL), to assist unit families with accessing Military and Family Readiness Center (M&FRC), and other on- and off-base helping resources…\" The rebrand widened the volunteer pool beyond spouses: volunteers may also include other family members as well as military or civilian members attached to the unit. It is a Department of the Air Force program — Guardians' units run CKSP too (verified on Schriever, Peterson, and Vandenberg SFB pages), and the 2026 guidance even provides a distinct Space Force Key Support Liaison of the Year award.",
        who: "Families of every Air Force and Space Force unit. How a spouse connects: through your assigned unit or the installation M&FRC — e.g., Schriever SFB: \"Contact the M&FRC to find your Key Support Liaison.\"",
        flag: "Renamed: \"The Key Spouse Program was rebranded the Commander's Key Support Program in March 2024. Volunteers will be identified as Key Support Liaisons.\" (There are also Key Support Mentors in the DAF guidance structure.) You may still hear \"Key Spouse\" — it is not the current name.",
        alertBadge: "RENAMED — FORMERLY KEY SPOUSE",
        links: [
          {
            label: "CKSP (MilitaryINSTALLATIONS, Schriever SFB Military and Family Support Center)",
            url: "https://installations.militaryonesource.mil/military-installation/schriever-afb/military-and-family-support-center/military-and-family-support-center",
          },
          { label: "DAFI 36-3009, GM 2026-01 (governing guidance, PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-3009/dafi36-3009.pdf" },
        ],
      },
      {
        name: "Coast Guard Ombudsman Program",
        kind: "Coast Guard — your command's family link",
        summary:
          "\"The Coast Guard Ombudsman Program is a command program intended to improve communication between the command and the Coast Guard family members. Coast Guard ombudsmen are communication links, provide information and referral resources and act as advocates for family members. COMDTINST 1750.4F provides details of Coast Guard Ombudsman Program.\" The program sits under the Office of Work-Life Programs (CG-111). Per the Work-Life Sea Legs family page: \"Since 1986, ombudsmen have served as a vital link between the Coast Guard commands and families. The Coast Guard ombudsman is a highly trained volunteer who is able to offer support and guidance to a unit's families and acts as an official liaison between the command and its families,\" appointed by and working under the guidance of the commanding officer.",
        who: "Families of every Coast Guard command. How a spouse connects: the Ombudsman Registry (given on the Work-Life page as www.cgombudsmanregistry.org) to identify the command/unit; if the unit can't be located, contact the closest Sector or Base ombudsman.",
        links: [
          { label: "Coast Guard Ombudsman Program (CG-111)", url: "http://www.dcms.uscg.mil/ombudsman" },
          {
            label: "Sea Legs — Family Support (CG-111)",
            url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Sea-Legs/Family-Support/",
          },
        ],
      },
      {
        name: "Finding Yours — The Route",
        kind: "All services — how to actually reach them",
        summary:
          "There is no single national sign-up for any of the structures above; a spouse reaches them through the unit and the installation. The universal official route is MilitaryINSTALLATIONS (Military OneSource's directory of bases worldwide): \"Find your Military and Family Support Center's contact information by selecting 'Program or Service' and locating 'Military and Family Support Center'… you can choose to filter by either ZIP code, installation or state.\"",
        bullets: [
          { title: "Army", text: "Your unit's SFRG, or your local ACS." },
          { title: "Marine Corps", text: "Confirm you're listed as a UPFRP authorized contact; installation MCFTB for L.I.N.K.S." },
          { title: "Navy", text: "The Ombudsman Registry, or your FFSC's Ombudsman Coordinator." },
          { title: "Air Force / Space Force", text: "Your assigned unit or the installation M&FRC (CKSP liaison, Heart Link sign-up)." },
          { title: "Coast Guard", text: "The Ombudsman Registry, your closest Sector/Base, or the HSWL Work-Life staff." },
        ],
        links: [{ label: "MilitaryINSTALLATIONS FAQs (Military OneSource)", url: "https://installations.militaryonesource.mil/faq" }],
        crossRefs: [
          { view: "family", label: "Family support centers by branch — Family & Life Events" },
          { view: "states", label: "State Benefits Finder" },
        ],
      },
    ],
  },
  {
    title: "Spouse Employment & Licenses",
    note: "Already in the app, alongside these cards: the SpouseWorks Scholarship and SpouseWorks career coaching, and MSEP — all in Family & Life Events — plus the SCRA §4025a license-portability law itself, also in Family & Life Events. This group is the machinery those entries don't cover: the federal hiring doors, the policy office behind portability, reimbursement, NAF jobs, and the local walk-in employment door.",
    entries: [
      {
        name: "Military Spouse Preference (MSP) — DoD Priority Placement Program",
        kind: "Federal hiring — priority consideration",
        summary:
          "DCPAS publishes the DoD Priority Placement Program's spouse route as Military Spouse Preference (MSP). MSP \"allows for priority consideration for competitive and excepted service positions at Department of Defense activities in the US and its territories and possessions\"; it \"applies when positions are filled using competitive procedures and spouse is determined to be amongst the best qualified\"; it \"applies to spouses of active duty military members of the US Armed Forces (including the Coast Guard) who relocate to accompany their sponsor on a PCS move\"; the position must be within the commuting area of the sponsor's duty station; MSP \"can only be used once per PCS\"; and it \"applies to APF and NAF positions.\" Spouses apply through USAJOBS using an applicable hiring authority.",
        who: "Spouses of active-duty members relocating on a PCS. Source: DCPAS fact sheet, Aug 2024.",
        flag: "DCPAS's current fact sheet publishes this route as \"Military Spouse Preference (MSP)\" and does not use a separate \"PPP-S / Program S\" label — PPP-S is not presented here as a distinct current program. And keep this card distinct from the next one: MSP is a preference; the EO 13473 appointment authority is not.",
        links: [
          {
            label: "DCPAS, \"Recruiting and Retaining Military Spouses\" fact sheet (Aug 2024, PDF)",
            url: "https://dcpas.osd.mil/sites/default/files/2024-10/RECRUITING%20AND%20RETAINING%20MILITARY%20SPOUSES%20FACT%20SHEET%20FACT%20SHEET.pdf",
          },
        ],
        crossRefs: [{ view: "family", label: "MSEP & SpouseWorks — Family & Life Events" }],
      },
      {
        name: "Noncompetitive Appointment of Certain Military Spouses — EO 13473 / 5 CFR 315.612",
        kind: "Federal hiring — a separate door, NOT a preference",
        summary:
          "A separate door from MSP — OPM is explicit that the two are not the same. \"Executive Order 13473, dated September 28, 2008, authorized the noncompetitive appointment of certain military spouses to competitive service positions. The U.S. Office of Personnel Management (OPM) codified implementing regulations at 5 CFR 315.612, effective September 11, 2009,\" \"to minimize disruptions in military families due to military active duty service, disability, and deaths resulting from active duty service.\" OPM lists the eligible categories: spouses of current active-duty service members; spouses of service members who incurred a 100 percent disability because of active-duty service; and un-remarried widows/widowers of service members killed on active duty. The hiring agency must verify a valid marriage certificate (or other marriage documentation) and a copy of the member's active-duty orders.",
        flag: "OPM states twice that this authority is NOT a preference: \"Military spouses eligible under this authority do not have a hiring preference by virtue of their eligibility… It does not constitute, establish, or convey a hiring preference,\" and eligible spouses \"do not have a selection priority over other qualified applicants.\" Date-sensitive as OPM states it: the PCS-relocation requirement \"has been further removed from statute until December 31, 2028,\" and on \"January 1, 2029, the statute… will revert back to 'relocating spouses'… under Permanent Change of Station (PCS) orders\" — the date prints with the rule.",
        alertBadge: "NOT A PREFERENCE — OPM",
        links: [
          {
            label: "OPM, \"Noncompetitive Appointment of Certain Military Spouses — 5 CFR 315.612\" Q&A (PDF)",
            url: "https://www.opm.gov/media/yjdoykew/military-spouse-questions-and-answers.pdf",
          },
        ],
        crossRefs: [{ view: "family", label: "Spouse careers — Family & Life Events" }],
      },
      {
        name: "DoD State Liaison Office (DSLO) & Interstate Licensure Compacts",
        kind: "The policy machinery behind license portability",
        summary:
          "The Defense-State Liaison Office is the policy machinery behind state-level fixes: it \"works with state leaders across the country who are concerned for the welfare of service members and military families living in their state… to remove unnecessary barriers and significantly improve the quality of life for military families,\" employs eight regional liaisons, and \"has helped state policymakers enact more than 800 bills in the past 10 years,\" with licensure among the priorities. On its Occupational Licensure Interstate Compacts priority page: \"Licensure compacts create seamless licensure portability for all members of a profession, including military spouses and service members… By adopting licensure compacts, states can improve military spouse employment and military family financial readiness,\" and \"Section 705A of the Servicemembers Civil Relief Act recognizes that occupational licensure compacts, when available, are the preferred method for military member and spouse licensure portability.\" The SCRA §4025a mechanics themselves live in Family & Life Events — this card is the office and the compacts behind them.",
        details: [
          "Figures as DSLO states them (attributed there to the Office of People Analytics 2021 survey): 36% of military spouses require a state-issued occupational license, and 31% needed to acquire new licensure/certification at the new location after a PCS.",
        ],
        flag: "DSLO is a policymaker-facing office, not a spouse casework door — its own FAQ routes individual license-transfer help to a SpouseWorks consultation (in Family & Life Events).",
        links: [
          { label: "DSLO — Military State Policy Source", url: "https://statepolicy.militaryonesource.mil" },
          { label: "DSLO FAQ", url: "https://statepolicy.militaryonesource.mil/faq" },
          { label: "DSLO priority page — Occupational Licensure Interstate Compacts (2025)", url: "https://statepolicy.militaryonesource.mil/priorities/occupational-licensure-interstate-compacts/2025" },
        ],
        crossRefs: [
          { view: "family", label: "SCRA §4025a license portability — Family & Life Events" },
          { view: "states", label: "State Benefits Finder — your state's licensing boards" },
        ],
      },
      {
        name: "Spouse License Reimbursement After a PCS — By Service",
        kind: "PCS money — figures per service, never blended",
        summary:
          "Under the authority first enacted in the 2018 NDAA (37 U.S.C. § 453, as the Army and Navy pages frame it) and raised by later NDAAs, each service reimburses the member for a spouse's qualifying relicensing/recertification costs — and, for most services, qualifying business costs — after a PCS across state lines. Every figure below is per service, exactly as that service's official page states it. Current terms on the service page govern.",
        bullets: [
          {
            title: "Army",
            text: "\"Reimbursement of Qualifying Spouse Relicensing Costs and Business Costs\" (MyArmyBenefits): the 2018 NDAA \"allows each service branch to reimburse the service member up to $1,000 for spouse's relicensure, certification and business costs\" from PCS relocations crossing U.S. state lines (including OCONUS-to-stateside). Per Army Directive 2024-04 as the page states it: \"up to $1,000 for business-related expenses, in addition to the already authorized $1,000 for relicensing fees\" — up to $1,000 per move for relicensing and up to $1,000 for business costs. Eligibility as stated: spouses of active-duty Soldiers of any rank who moved across state lines on accompanied PCS orders and pursue the same licensure/certification in the new location; apply after receiving the new license (SF 1034 + PCS orders + old/new licenses + proof of payment + marriage certificate).",
            links: [{ label: "Army (MyArmyBenefits)", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Reimbursement-of-Qualifying-Spouse-Relicensing-Costs-and-Business-Costs?serv=120" }],
          },
          {
            title: "Marine Corps",
            text: "MARADMIN 074/25: \"A Marine may be reimbursed up to $1000 for qualifying licensing/certification costs for those orders executed after 1 October 2022, and may be reimbursed up to $1000 for qualifying business costs for those orders issued on or after 22 December 2023.\" Submit through the local Personnel Administration Office/Center; the local FMEAP office (next group card) is the named contact point. Eligibility stated as through 31 December 2029 unless amended; requests no later than 24 months after the PCS orders' effective date.",
            links: [{ label: "Marine Corps (MARADMIN 074/25)", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4070735/reimbursement-of-qualifying-spouse-relicensingrecertification-costs-and-busines/" }],
          },
          {
            title: "Navy",
            text: "MILPERSMAN 1754-040: 37 U.S.C. § 453 originally authorized \"up to $500\"; a later NDAA § 577 \"increases the maximum amount to $1,000.\" Current policy as stated: reimbursement \"not to exceed $1,000 for those orders issued on or after 20 December 2019 ($2,000 maximum for business costs and licensure costs combined after 22 December 2023).\" CNIC's plain-language page phrases the same policy as \"up to $2000 for state licensure and certification costs and for business cost (combined total)\" — same policy, different words; the MILPERSMAN framing is the one printed here, and the two are not merged.",
            links: [
              { label: "Navy (MILPERSMAN 1754-040, PDF)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/1000/1700Morale/1754-040.pdf" },
              { label: "Navy (CNIC Family Employment page, plain-language version)", url: "https://ffr.cnic.navy.mil/Family-Readiness/Fleet-And-Family-Support-Program/Work-and-Family-Life/Family-Employment" },
            ],
          },
          {
            title: "Air Force / Space Force",
            text: "AFPC: \"financial relief up to $1000 to Airmen and Guardians whose spouses must transfer state occupational licenses, certifications, or business costs\"; \"Reimbursement for each qualifying PCS / PCA will not exceed $1,000 for PCS / PCA orders dated 22 Dec 2023 or later for qualifying re-licensing costs and $1,000 for qualifying business costs (up to $2,000 combined).\"",
            links: [{ label: "Air Force / Space Force (AFPC Employment Resources)", url: "https://www.afpc.af.mil/Military-and-Family/Employment-Resources/" }],
          },
          {
            title: "Coast Guard",
            text: "Spouse License Reimbursement Program (SLRP): active-duty members \"may be reimbursed for their spouse's qualified relicensing costs after relocation to another state (including U.S. territories, and the District of Columbia) due to PCS orders\"; qualified costs are \"examination and registration fees… to engage in the same profession the member's spouse engaged in while in the state of the original duty station.\" The DCMS procedural page's claim instructions state the amount as \"(not to exceed $500.00 for PCS prior to 19DEC2019 and $1000.00 thereafter)\"; requests for orders issued after 20 Dec 2019 are due \"no later than 24 months after issuance date of PCS orders or before 31 December 2029, whichever is earlier.\"",
            links: [
              { label: "Coast Guard (DCMS procedural page)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Director-of-Military-Personnel-CG-13/Military-Personnel-Policy-CG-133-/Spouse-License-Reimbursement/quot/" },
              { label: "Coast Guard (MyCG article)", url: "https://www.mycg.uscg.mil/News/Article/3310723/new-law-allows-coast-guard-spouses-to-transfer-job-licenses/" },
            ],
          },
        ],
        flag: "Every figure on this card is per service, exactly as that service's official page states it — they are not blended, rounded, or carried from one service to another. Two Coast Guard cautions: a MyCG article quotes the program in a context ending \"through Dec. 31, 2024\" while the procedural page runs to Dec 31, 2029 — the two dates come from different official sources and both are printed with their source rather than one being picked silently. And Coast Guard business-cost reimbursement is UNCONFIRMED — neither fetched Coast Guard page mentions it, so no other service's business-cost figure is imported here.",
        links: [],
        crossRefs: [
          { view: "pcs", label: "PCS Move Center — this reimbursement is timed to a move" },
          { view: "family", label: "SCRA §4025a license portability — Family & Life Events" },
        ],
      },
      {
        name: "NAF Jobs — Nonappropriated Fund Employment",
        kind: "Installation jobs — with a spouse preference inside",
        summary:
          "Installation Nonappropriated Fund (NAF) employers — MWR, child and youth programs, exchanges, services activities — hire locally at every installation, and spouses have a formal preference inside that system. Per DCPAS's NAF Personnel System page: \"The Nonappropriated Fund (NAF) Personnel System establishes priority consideration or preference in hiring,\" and Military Spouse Preference \"applies to jobs at the NF-3 grade and below, positions in the child and youth payband system, and crafts and trades positions\"; spouses \"may apply for preference as early as 30 days before the active duty spouse's reporting date\"; preference does not apply to a permanent move made in conjunction with the member's retirement or separation.",
        details: [
          "Where NAF jobs are posted (per DCPAS's \"Where to Apply for NAF Positions\" sheet): Air Force Services (nafjobs.org), AAFES, Army MWR, Navy Exchange Service Command (NEXCOM), CNIC MWR (navymwr.org), and Marine Corps Community Services (MCCS). Federal appropriated-fund jobs run through USAJOBS (see the MSP card above).",
        ],
        links: [
          { label: "DCPAS, NAF Employment Priority Preferences", url: "https://www.dcpas.osd.mil/policy/naf/nafemploymentprioritypreferences" },
          { label: "DCPAS, \"Where to Apply for NAF Positions\" (PDF)", url: "https://www.dcpas.osd.mil/sites/default/files/2021-04/Where_to_apply_for_NAF_positions.pdf" },
        ],
        crossRefs: [{ view: "family", label: "MSEP & SpouseWorks — Family & Life Events" }],
      },
      {
        name: "The Local Employment Door — By Service",
        kind: "Walk-in employment help at your family center",
        summary:
          "SpouseWorks (in Family & Life Events) is the global/phone door; every service also runs a local, walk-in employment readiness program at the installation family center. Names and doors, as each service's official page states them:",
        bullets: [
          {
            title: "Army — Employment Readiness Program (ERP), through ACS",
            text: "\"helps Soldiers, spouses, surviving spouses, DoD Civilians, and family members gain the competitive edge needed for employment,\" with job-search skills, resume critiques, career counseling, classes, job-fair information — and information on spouse licensure reimbursement. Door: \"Visit the ERP Manager at your local ACS Center.\"",
            links: [{ label: "Army ERP (MyArmyBenefits)", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Employment-Readiness-Program-(ERP)?serv=124" }],
          },
          {
            title: "Navy — Family Employment Readiness Program (FERP), through FFSC",
            text: "\"provides no cost consultations, programs and services to help families in the job search process. Consultants are available to guide spouses and family members on career planning, job seeking and resume writing,\" plus interview preparation and offer negotiation.",
            links: [{ label: "Navy FERP (CNIC FFSC)", url: "https://ffr.cnic.navy.mil/Family-Readiness/Fleet-And-Family-Support-Program/Work-and-Family-Life/Family-Employment" }],
          },
          {
            title: "Marine Corps — Family Member Employment Assistance Program (FMEAP), through MCCS",
            text: "\"Located at all Marine Corps Bases… assist family members, active duty, reservists, retirees, and civilians with achieving their personal and professional goals through employment, education, or volunteering,\" with free workshops including Resume Writing and Skills Assessments. FMEAP is also the named contact point for license reimbursement.",
            links: [{ label: "USMC FMEAP (MCCS)", url: "https://www.usmc-mccs.org/news/what-are-fmeap-and-seco-and-what-can-they-do-for-me-a-marine-spouse" }],
          },
          {
            title: "Air Force / Space Force — Employment Readiness, through the installation M&FRC",
            text: "Centers \"support military, civilians, and family members in achieving short and long-term employment,\" with classes and individual consultation on career planning, resume writing, interviewing — and \"face-to-face assistance and advice on career readiness, employment opportunities, education and scholarship opportunities, and job search strategies\" for spouses.",
            links: [{ label: "Air Force / Space Force Employment Resources (AFPC)", url: "https://www.afpc.af.mil/Military-and-Family/Employment-Resources/" }],
          },
          {
            title: "Coast Guard — Spouse Employment Assistance Program (SEAP), through Work-Life Offices (CG-111)",
            text: "\"intended to assist spouses overcoming the difficulties associated with finding employment, especially during the relocation process… at Work-Life Offices throughout the Coast Guard,\" with Transition/Relocation Managers guiding career planning, job seeking, resume writing, interview preparation, and offer negotiation; phone/email delivery if not near a Work-Life office. SEAP states plainly that \"it is not an employment office or placement center.\"",
            links: [
              {
                label: "Coast Guard SEAP (CG-111)",
                url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Spouse-Employment-Program/Spouse-Employment-Program-Overview/",
              },
            ],
          },
        ],
        links: [],
        crossRefs: [{ view: "family", label: "Family support centers by branch — Family & Life Events" }],
      },
    ],
  },
  {
    title: "Money & Legal for Spouses",
    note: "Already in the app: the aid societies' emergency assistance lives in Care & Crisis, and SCRA §4025a license portability lives in Family & Life Events. This group covers taxes, the legal office, the SCRA protections that reach dependents, and the spouse residency election.",
    entries: [
      {
        name: "MilTax — Free Tax Filing & Consultants for Spouses",
        kind: "Taxes — free for eligible spouses",
        summary:
          "MilTax is Military OneSource's tax service \"made exclusively for the military\": military-specific tax preparation software plus expert support, both free for active-duty service members, eligible family members (including spouses), survivors, and recent veterans up to 365 days from separation or retirement — eligibility is verified through DEERS. It includes filing a federal return and up to five state returns at no charge, a 100% accuracy / maximum refund guarantee, and free one-on-one MilTax consultant help with topics including the Military Spouses Residency Relief Act (see the residency card below), moving, and combat pay exclusions. OneSource states it is \"used by hundreds of thousands of service members and their spouses every year,\" and that the software for the coming season is available in January.",
        links: [{ label: "MilTax (Military OneSource)", url: "https://www.militaryonesource.mil/financial-legal/taxes/miltax-military-tax-services/" }],
        crossRefs: [{ view: "family", label: "Getting Married / DEERS — Family & Life Events" }],
      },
      {
        name: "Legal Assistance & Powers of Attorney — AFLA Locator",
        kind: "Free legal help — wills, POAs, directives",
        summary:
          "Military legal assistance eligibility \"is established under 10 U.S.C. 1044\" — the statute under which dependents are eligible clients — and per the Army JAG legal services page, legal assistance offices \"are open and available to all eligible clients regardless of service affiliation\" (individual offices may have local restrictions based on staffing). The subjects the program publishes help on include: Last Will and Testament, Durable Power of Attorney, Advanced Medical Directives, Adoption, Divorce and Separation, Deployment and Child Custody, Family Care Plans, the SCRA — and a dedicated \"SCRA Military Spouses\" information paper.",
        details: [
          "Finding an office — the AFLA locator: the Armed Forces Legal Assistance (AFLA) Legal Services Locator — \"Individuals eligible for military legal assistance may use the Legal Services Locator to find the nearest legal assistance office\"; the locator covers \"active duty legal activities offering general legal services within the continental United States (CONUS)\" and its information is limited to certain CONUS bases, as the page states.",
        ],
        flag: "Installation-level eligibility wording (which dependent categories a specific office lists) varies — this card states the § 1044 basis and routes you to your nearest office rather than printing one installation's list as universal.",
        links: [
          { label: "Legal assistance (U.S. Army JAG Corps — eligibility basis and topic list)", url: "https://www.jagcnet.army.mil/Home/legal-services/legal-page.html" },
          { label: "AFLA Legal Services Locator", url: "https://legalassistance.law.af.mil/" },
        ],
      },
      {
        name: "SCRA Protections That Reach Spouses & Dependents",
        kind: "Legal protection — dependents included, with a caveat",
        summary:
          "Per the Department of Justice's SCRA guide: \"Servicemembers and their dependents get certain protections related to military service under the Servicemembers Civil Relief Act (SCRA),\" with dependents defined as \"Spouses and children; and Any other person for whom the servicemember has provided more than half of their financial support for the past 180 days.\" The housing protection DOJ states expressly for dependents: \"A landlord generally cannot evict a servicemember or dependent from a residence without a court order during military service.\" Other protections summarized on the page (stated there for servicemembers) include residential lease termination after PCS / 90+ day deployment / separation-retirement orders, the bar on non-judicial foreclosure on pre-service mortgages, and the 6% annual interest-rate cap on certain pre-service debts.",
        flag: "DOJ's own caveat, in its italics: \"Not all SCRA benefits extend to dependents.\" For the license-portability provision spouses use most — SCRA § 4025a — see Family & Life Events; this card covers the dependent and residency angle only.",
        links: [{ label: "DOJ, \"Know Your Rights: A Guide to the Servicemembers Civil Relief Act\"", url: "https://www.justice.gov/servicemembers/know-your-rights-guide-servicemembers-civil-relief-act" }],
        crossRefs: [{ view: "family", label: "SCRA §4025a license portability — Family & Life Events" }],
      },
      {
        name: "Spouse Residency — MSRRA & the 2018 Election",
        kind: "Which state you pay taxes in — you have a choice",
        summary:
          "Per Military OneSource's Military Spouses Residency Relief Act page: the SCRA framework gives guidance on where a military spouse pays earned-income tax when living somewhere new because of the member's orders, and amendments have widened the spouse's choices. As the page states it: \"The Military Spouses Residency Relief Act allows military spouses to declare the same state of legal residency as their spouse,\" and \"The Veterans Benefits and Transition Act [of 2018] allows spouses to choose their service member's state of legal residence even if they have not lived in that state.\" The current picture on the page is three options for state residency for income-tax purposes: the service member's residence/domicile, the spouse's residence/domicile, or the service member's permanent duty station. \"Spouses vote and pay taxes in their state of legal residence, which they can choose to be the same as their service member's state of legal residence,\" and a spouse's income is taxed under the laws of their state of legal residence. MilTax consultants (above) help with exactly this election.",
        links: [{ label: "Military Spouses Residency Relief Act (Military OneSource)", url: "https://pre.militaryonesource.mil/financial-legal/legal/military-spouses-residency-relief-act/" }],
        crossRefs: [
          { view: "pcs", label: "PCS Move Center — the election is timed to a move" },
          { view: "states", label: "State Benefits Finder" },
        ],
      },
    ],
  },
  {
    title: "Deployment & Reintegration Support for Spouses",
    note: "Already in the app, behind these cards: Military OneSource non-medical counseling, MFLC, and chaplains' absolute confidentiality — all in Family & Life Events — the family support centers that are the deployment-support front door, and emergency aid in Care & Crisis. This group adds the deployment-cycle framing and the kids' resources.",
    entries: [
      {
        name: "The Deployment Cycle — Where Spouse Support Actually Sits",
        kind: "All services — the two channels that carry it",
        summary:
          "Spouse deployment support runs through two channels, both already in this hub: the unit structure (SFRG, UPFRP / Readiness Coordinator, Ombudsman, CKSP — communication and advocacy before, during, and after deployment) and the installation family center (deployment readiness briefings, family care plan help, and referral — in Family & Life Events). Military OneSource's spouse-facing deployment page (\"Deployment Resources for Families\") describes the Military Family Readiness System and assistance \"with all phases of the deployment cycle\" through installation Military and Family Support Centers — open to all service members and families, including Guard/Reserve, regardless of branch — with \"Plan My Deployment\" and other OneSource deployment resources available 24/7, and child-care assistance via MilitaryChildCare.com. Reintegration note, kept at routing level: OneSource's spouse resources page lists Building Healthy Relationships — including \"Staying Connected While Away\" and \"Reconnecting After Deployment\" — alongside confidential counseling (in Family & Life Events).",
        flag: "Those OneSource deployment pages were identified in the research from official search results; their full text could not be re-fetched in that run — this card quotes nothing beyond the routing summary above.",
        links: [
          { label: "Deployment Resources for Families (Military OneSource)", url: "https://www.militaryonesource.mil/deployment/pre-deployment/deployment-resources-for-families/" },
          { label: "Support for the Military Spouse in Your Life (Military OneSource)", url: "https://www.Militaryonesource.mil/military-basics/extended-family-friend/support-for-military-spouse-in-your-life/" },
        ],
        crossRefs: [
          { view: "mailcall", label: "Mail Call — deployment mail & care packages" },
          { view: "family", label: "Counseling & support centers — Family & Life Events" },
          { view: "care", label: "Care & Crisis" },
        ],
      },
      {
        name: "Sesame Street for Military Families",
        kind: "For spouse-parents of young kids",
        summary:
          "Sesame Street for Military Families (SS4MF) is \"a collaboration between Sesame Workshop, the nonprofit educational organization behind Sesame Street, and the Department of Defense (DOD), Office of Military Community and Family Policy,\" launched in 2006. \"All resources are free.\" Its site offers sections including Deployments (\"Develop strategies for coping with pre-deployments and deployments\"), Military Homecomings, Relocation, Temporary Duty, Military to Civilian Life, Injuries / Grief, and Everyday Wellness / Parenting — videos, articles, digital tools, and printable activities for military and veteran families with young children.",
        who: "Spouse-parents (and members) with young children, at every phase — deployment, homecoming, relocation, transition.",
        links: [
          { label: "Sesame Street for Military Families (program site)", url: "https://sesamestreetformilitaryfamilies.org" },
          { label: "Sesame Workshop (program description and DoD collaboration)", url: "https://sesameworkshop.org/about-us/press-room/sesame-street-for-military-families-celebrates-20-years-with-new-resources-to-help-families-stay-healthy-active-and-ready/" },
        ],
        crossRefs: [{ view: "family", label: "Childcare & school — Family & Life Events" }],
      },
      {
        name: "Military Kids Connect — Status Unconfirmed",
        kind: "For military kids — verify before relying on it",
        summary:
          "Military Kids Connect has been described in official-adjacent sources (including a DVIDS item quoting a DHA Connected Health lead) as a Defense Health Agency online community for military children ages 6–17, with age-appropriate resources for the psychological challenges of military life. It is listed here so you know the name — but read the flag before you go looking for it.",
        flag: "Could not be confirmed from an official page: in the research run, the program's health.mil address did not resolve through the research fetcher and a follow-up official fetch was rate-limited, and this app's own build-time check of the address failed to resolve as well. Its current live status and DHA attribution are UNCONFIRMED — so this entry carries no link. If you search for it yourself, treat anything that isn't an official .mil page with care, and use Sesame Street for Military Families (above) and the Family & Life Events childcare and school entries in the meantime.",
        alertBadge: "RE-VERIFY — NO LINK",
        links: [],
        crossRefs: [{ view: "family", label: "Childcare & school — Family & Life Events" }],
      },
    ],
  },
  {
    title: "Scholarships & Education Beyond SpouseWorks",
    note: "Already in the app: the SpouseWorks Scholarship (formerly MyCAA) — in Family & Life Events. Every program below changes terms by cycle — amounts, windows, and counts are printed exactly as the program page stated them at research time and flagged; the program page governs. The same aid societies run emergency financial assistance, which lives in Care & Crisis — if you are in a money emergency, go there, not to a scholarship.",
    entries: [
      {
        name: "NMFA — Joanne Holbrook Patton Military Spouse Scholarship",
        kind: "Spouse scholarship — rolling, year-round",
        summary:
          "The National Military Family Association's spouse scholarship \"helps spouses pursuing a degree, earning a new credential, growing a business, or taking the next career step,\" and since 2004 has helped pay for \"everything from GED's to PhD's, professional licenses and certifications, including re-licensure, business and entrepreneurial expenses, supervised clinical hours, continuing education courses, and more\"; a recipient can receive it more than once. Per NMFA's FAQ, eligibility extends to spouses of all 8 Uniformed Services where both are true: (1) the applicant is the spouse of a service member who served post-9/11/2001 and is active-duty, retiree (including medically retired), 100% Disabled Veteran, Guardsman, Reservist, or fallen service member — or the applicant is a 20/20/20 spouse; and (2) the applicant has, or is eligible to hold, a valid military/Uniformed Services ID. It is a rolling application, open year-round, awarded quarterly, with reapplication once per scholarship year; applicants should wait until accepted/enrolled.",
        flag: "NMFA's pages state program-wide totals (5,000 recipients since 2004; largest scholarship to date $11,000; total funding awarded since 2004) but no per-award range — a \"$500–$2,500\" range seen elsewhere is not NMFA-stated and is not printed here as such.",
        links: [
          { label: "NMFA Military Spouse Scholarships", url: "https://www.militaryfamily.org/state-of-the-military-family-programs/spouses-scholarships/" },
          { label: "NMFA Military Spouse Scholarship FAQs", url: "https://www.militaryfamily.org/state-of-the-military-family-programs/spouses-scholarships/military-spouse-scholarship-faqs/" },
        ],
        crossRefs: [{ view: "family", label: "SpouseWorks Scholarship — Family & Life Events" }],
      },
      {
        name: "Army Emergency Relief — Mrs. Patty Shinseki Spouse Scholarship Program",
        kind: "Army spouse scholarship — apply year-round",
        summary:
          "AER's current spouse program name is the Mrs. Patty Shinseki Spouse Scholarship Program. Spouses without a four-year degree who are pursuing their first undergraduate degree or first technical certification may receive assistance for up to four academic years of full-time study or eight academic years of part-time study, if they meet other requirements; spouses may apply year-round (no deadlines) and must re-apply every year. AER scholarship eligibility as listed: spouses and children of Soldiers who are active duty, deceased active, retired, deceased retired, medically retired, Grey Area Retiree, or AGR/USAR on Title 10 orders for the entire academic year, with applicants listed as dependents of their Soldier sponsor in DEERS.",
        flag: "Amounts vary: \"Scholarship awards vary each year based on the total number of applicants in each program and budget amount allotted to the scholarship program\" — no fixed amount is stated, so none is printed.",
        links: [{ label: "AER Scholarships", url: "https://www.armyemergencyrelief.org/scholarships/" }],
        crossRefs: [{ view: "care", label: "AER emergency assistance — Care & Crisis" }],
      },
      {
        name: "Navy-Marine Corps Relief Society — Education Assistance",
        kind: "Navy / Marine Corps spouse scholarships & interest-free loans",
        summary:
          "NMCRS Education Assistance is open to spouses of active duty, retired, or qualifying deceased Sailors or Marines (children under 23 and MECEP/MECP loan-only applicants are also listed), for career & technical education and associate, bachelor's, or master's degrees. Awards are determined by cost of attendance and the FAFSA Student Aid Index (SAI); funds go directly to the institution for tuition, books, and lodging; recipients can apply every year they are eligible.",
        flag: "As the page states: \"Scholarships are awarded once per academic year and range from $500–$3,000\" and \"Interest-free loans (up to $4,000) are offered on a rolling basis.\" Cycle-specific as stated for 2027–2028: applications February 16, 2027 – April 16, 2027 — any window printed here is dated, and the program page governs.",
        links: [{ label: "NMCRS Education Assistance", url: "https://www.nmcrs.org/get-help/financial-assistance/education-assistance" }],
        crossRefs: [{ view: "care", label: "NMCRS emergency assistance — Care & Crisis" }],
      },
      {
        name: "Air Force Aid Society — General Henry H. Arnold Education Grant (Hap Arnold Grant)",
        kind: "Air Force / Space Force — need-based education grant",
        summary:
          "AFAS's education centerpiece is need-based, weighing family income and education costs. Spouse eligibility as stated: spouses of U.S. Air Force / U.S. Space Force members who are Active Duty, Title 10 Reserve/Guard on extended active duty, or Title 32 Guard performing full-time active duty through September 30 of the academic year — and surviving spouses of members who died while on active duty or in retired status; spouses must be legally married to the member (not separated or pending divorce) at application and disbursement. All applicants must be full-time undergraduates in an accredited program, maintain a minimum 2.0 GPA, and not be graduate/professional students.",
        flag: "Amounts vary: \"Award amounts vary each year based on the number of applicants, total approved grant budget, applicant's Student Aid Index (SAI) from the FAFSA and cost of attendance\" — no fixed amount is stated; applications re-open each January (the 2026–2027 cycle was closed at research time).",
        links: [{ label: "AFAS, General Henry H. Arnold Education Grant", url: "https://afas.org/haparnoldgrant/" }],
        crossRefs: [{ view: "care", label: "AFAS emergency assistance — Care & Crisis" }],
      },
      {
        name: "Coast Guard Mutual Assistance — Education Loan & Supplemental Education Grant",
        kind: "Coast Guard — an interest-free loan and a grant",
        summary:
          "Two CGMA education programs, with different levels of detail on their official pages. Education Loan: interest-free, up to $7,500 as stated. \"All CGMA members are eligible for Education Loans on behalf of themselves, their spouse, and/or their dependent children under 23,\" for undergraduate/postgraduate degree programs, approved multi-course VoTech programs, or a GED (not for dependents in high school/grade school). Supplemental Education Grant (SEG): \"helps eligible Coast Guard members, their spouses, and dependent children cover the cost of fees, books, supplies, and equipment related to qualifying education programs\"; applications only during the stated window (June 1 – September 30, 2026 in the cycle shown), approval not guaranteed.",
        flag: "No dollar amount for SEG is stated on the fetched official page — none is imported here from non-official sources. The $7,500 figure is the Education Loan's, as CGMA states it.",
        links: [
          { label: "CGMA Education Loan", url: "https://mycgma.org/programs/education-loan/" },
          { label: "CGMA Supplemental Education Grant", url: "https://mycgma.org/programs/seg/" },
        ],
        crossRefs: [{ view: "care", label: "CGMA emergency assistance — Care & Crisis" }],
      },
      {
        name: "Fisher House Foundation — For Military Children, Not Spouses",
        kind: "Corrective entry — children's scholarships, via spouse-parents",
        summary:
          "Included to correct a common assumption: neither Fisher House scholarship on the Foundation's pages is a spouse program. The Heroes' Legacy Scholarship \"honors service members who have died or become disabled during active military service since September 11, 2001\" and is open to dependent, unmarried children under age 23 whose parent died on active duty on/after Sept. 11, 2001, or became disabled on active duty on/after that date (as defined by TSGLI eligibility or a 100% permanent and total disability compensation rating). The number and amount awarded each year are determined by royalties, sponsorships, and contributions — no fixed amount is stated (2027–2028 cycle as stated: opens December 9, 2026, closes February 10, 2027). The Scholarships for Military Children Program is likewise for unmarried military dependent children under 23 with a valid USID card whose sponsor is active duty, reserve/guard, deceased, or retired — for 2027–2028, \"500 scholarships valued at $2,000 each\" as stated. Both pages point to a separate \"Scholarships For Service\" search site for additional opportunities. In this hub, this entry is filed under spouse-parents applying for their children — never as spouse education money.",
        flag: "No spouse-eligible Fisher House scholarship was stated on either fetched page; any claim that one exists is unconfirmed.",
        alertBadge: "FOR CHILDREN — NOT A SPOUSE PROGRAM",
        links: [
          { label: "Heroes' Legacy Scholarship (Fisher House Foundation)", url: "https://www.fisherhouse.org/programs/scholarship-programs/heroes-legacy-scholarship/" },
          { label: "Scholarships for Military Children (Fisher House Foundation)", url: "https://www.fisherhouse.org/programs/scholarship-programs/scholarships-for-military-children/" },
        ],
        crossRefs: [{ view: "family", label: "SpouseWorks Scholarship — Family & Life Events" }],
      },
    ],
  },
];

// The "For surviving spouses" group. It renders ONLY at the top of the
// Hub, and only for a spouse profile whose family status is surviving
// spouse (see SURVIVING_SPOUSE_FAMILY_STATUS in spouse.ts); every other
// reader gets SPOUSE_HUB_GROUPS in their current order. This group
// writes NO new benefit content — every card is a cross-link into the
// section that already carries that coverage, with a routing summary
// that only says where the content lives.
export const SURVIVING_SPOUSE_HUB_GROUP: SpouseGroup = {
  title: "For surviving spouses",
  note: "Your family status is surviving spouse, so the survivor pieces of Battle Book lead your Hub. Nothing here is new content — each card opens the section that already carries it.",
  entries: [
    {
      name: "Dependency and Indemnity Compensation (DIC)",
      kind: "Cross-link · Benefits",
      summary:
        "VA's survivor compensation, already woven through Battle Book's survivor coverage: the surviving-spouse home loan card in Benefits turns on whether you receive DIC, and Retirement's Survivor Benefit Plan card covers DIC and SBP being paid in full together. Start in Benefits.",
      links: [],
      crossRefs: [{ view: "benefits", label: "Dependency and Indemnity Compensation (DIC) — Benefits" }],
    },
    {
      name: "Survivor Benefit Plan (SBP)",
      kind: "Cross-link · Retirement",
      summary:
        "Retired pay stops when the retiree dies — the Survivor Benefit Plan is the election that keeps an annuity going to an eligible beneficiary. Battle Book lays SBP out in plain terms in Retirement, including how it now pays alongside DIC.",
      links: [
        { label: "DFAS — SBP: advantages and cost", url: "https://www.dfas.mil/retiredmilitary/provide/sbp/advantages.html" },
      ],
      crossRefs: [{ view: "retirement", label: "SBP — the Survivor Benefit Plan, in plain terms — Retirement" }],
    },
    {
      name: "Fry Scholarship",
      kind: "Cross-link · Education Planner",
      summary:
        "The survivors' education benefit for the spouses and children of service members who died in the line of duty is carried in the Education Planner, alongside the rest of the family's education options.",
      links: [],
      crossRefs: [{ view: "education", label: "Fry Scholarship — Education Planner" }],
    },
    {
      name: "VA Home Loan — Surviving Spouse Eligibility",
      kind: "Cross-link · Benefits",
      summary:
        "An eligible surviving spouse can get a VA-backed home loan in their own name. Benefits carries the card exactly as VA.gov states it — the Certificate of Eligibility in your own name, the eligibility lines, and which form you file.",
      links: [
        { label: "Surviving spouse home loan", url: "https://www.va.gov/family-and-caregiver-benefits/housing-assistance/surviving-spouse-home-loan/" },
      ],
      crossRefs: [{ view: "benefits", label: "Home Loans for Surviving Spouses — Benefits" }],
    },
    {
      name: "Wall of Honor",
      kind: "Cross-link · Wall of Honor",
      summary:
        "A quiet wall of member tributes to the fallen — add a name, light a candle, and remember them on their day.",
      links: [],
      crossRefs: [{ view: "wallofhonor", label: "Wall of Honor" }],
    },
  ],
};
