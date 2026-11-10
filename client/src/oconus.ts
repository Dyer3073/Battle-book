// OCONUS Family Papers — transcribed from the researched pack
// (~/workspace/military-app/oconus/oconus.md, researched Nov 9,
// 2026). The pack is the content source of truth: §§1–8 as 24
// entries (no-fee passports 4, where you apply 5, processing time 1,
// SOFA 4, two-book reality 1, command sponsorship 4, the document
// checklist 1 with all 11 source-traced items, special cases 4).
// Binding rules as published: no-fee passports ride on DD Form 1056
// and orders naming each dependent; plan 6–8 weeks end-to-end (State
// SIA's controlling figure is “up to 6 weeks,” April 2026, with
// installation snapshots at 6–8+ weeks — the range prints with
// attribution, never averaged); KOREA — family members without a
// no-fee passport are DENIED BOARDING (Eighth Army); GERMANY — SOFA
// stamp OR AEA certificate, and holding both is ILLEGAL (USAG
// Wiesbaden / AEA Reg 600-77), 90 days after arrival; JAPAN — entry
// SOFA stamp plus a separate exit/re-entry stamp, never merged;
// CRBA/SSN route through Federal Benefits Units (SS-5); command
// sponsorship is the gate. Every other country is router-only (FCG
// + gaining command). Placement: members and spouses in full —
// these are family papers; future members see a locked card only.

import type { PackSection } from "./seven";

export const OCONUS_SECTION: PackSection = {
  view: "oconus",
  title: "OCONUS Family Papers",
  headSub:
    "For the family moving overseas on PCS orders: the no-fee passport every command-sponsored dependent needs, what SOFA status is and how a dependent's status gets documented, the paper checklist, and the special cases. The PCS Move Center owns the move itself; this section owns the documents layer.",
  intro:
    "The sequence that holds in every theater: (1) orders issue, with each command-sponsored dependent named on the orders; (2) the family applies for no-fee passports through a DoD passport agent (installation passport office) with DD Form 1056; (3) the Special Issuance Agency in Washington issues the books — routine processing is measured in weeks, so this starts the week orders arrive; (4) on arrival in the host country, the dependent's SOFA status is documented (stamp in the passport or a SOFA certificate/card, per that country's process); (5) the tourist (fee) passport is a separate book for personal travel — official pages in Germany and Korea actively advise families to hold both.",
  standing:
    "Plan on 6–8 weeks end-to-end for a no-fee passport in most published guidance, longer if a visa must also be issued into the book — the family's travel dates are gated by the slowest document, which is why every theater page says to start at orders, not at out-processing. Country specifics print only where a command publishes a family-facing page; everywhere else this section prints the general rule and routes to the Foreign Clearance Guide and the gaining command.",
  tiles: [
    {
      key: "nofee",
      label: "No-Fee Passports",
      tileSub: "Entries 1.1–1.4 · what they are, who needs one, validity, DD Form 1056",
      intro:
        "The State Department's Special Issuance Agency (SIA) issues four types of special-issuance passports: diplomatic (black), official (burgundy/maroon), service (gray, limited), and no-fee regular (dark blue). The one a military family normally holds is the no-fee regular passport.",
      entries: [
        {
          id: "oconus-sia-family",
          name: "The special-issuance family, and where dependents fit",
          summary:
            "No-fee passport search terms: special issuance agency, SIA, types of official passports. The no-fee regular passport looks like the ordinary blue tourist book but carries a special endorsement showing the bearer's travel status — State's published sample endorsement reads, in substance, that the passport is valid only for use in connection with the bearer's residence abroad as a family member of a member of the U.S. military or naval forces on active duty outside the United States. No fees are collected for it.",
          who: "Military dependents first — State's own eligibility list for no-fee regular passports includes, verbatim in substance: military dependents; Peace Corps volunteers; American Red Cross employees and dependents traveling on assignment for the U.S. armed forces; personnel traveling on DoD invitational travel orders; and next of kin traveling to visit ill or injured service members abroad.",
          body: [],
          flags: [],
          links: [{ label: "State — Steps to Apply for a Special-Issuance Passport", url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html/" }],
          source: "U.S. Department of State, SIA (travel.state.gov)",
        },
        {
          id: "oconus-member-vs-dependents",
          name: "The member usually doesn't need one — the dependents do",
          summary:
            "Who needs a passport search terms: does the service member need a passport, dependent passport each child. State publishes the asymmetry that drives this whole section: “In most cases, military personnel may enter and exit countries in which the United States has a Status of Forces Agreement (example: countries in NATO) by showing military ID card and travel orders. We will issue no-fee, regular passports to eligible family members.”",
          who: "Sponsors travel on CAC + orders; each dependent travels on a passport. Separate no-fee passports are required for each child — there is no family book.",
          body: [],
          flags: [],
          links: [{ label: "State — Special-Issuance Passports (SIA apply)", url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html/" }],
          source: "State, SIA apply page; DONHR Okinawa statement",
        },
        {
          id: "oconus-validity",
          name: "Validity and the use restriction — printed plainly: max 5 years, not for personal travel",
          summary:
            "No-fee validity search terms: how long is a no-fee passport good for, 5 years, can I travel on a no-fee passport. Special-issuance passports are valid for a maximum of five years (and State notes validity can be shorter depending on position/type/need). A no-fee book is not a 10-year tourist book.",
          who: "Every holder — the two facts families get wrong most: the 5-year maximum, and the use restriction.",
          body: [
            "Use: special-issuance passports are not valid for personal travel other than entering or exiting the country of assignment, and they are property of the U.S. government, to be returned when the holder leaves the service/status for which it was issued (State, sia-apply page). Fee basis: the no-fee itself rests on federal regulation exempting government-affiliated travelers from passport fees — the applicant-facing consequence is simply that no application fee and no acceptance fee is collected on a properly authorized no-fee application (State, SIA “Tips,” April 2026: “No fees are collected”).",
          ],
          flags: [],
          links: [{ label: "State — Special-Issuance Passports (SIA apply)", url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html/" }],
          source: "U.S. Department of State, SIA",
        },
        {
          id: "oconus-dd1056",
          name: "The trigger document: orders + DD Form 1056",
          summary:
            "DD 1056 search terms: DD Form 1056, authorization to apply no-fee passport, orders naming dependents. A dependent's application rides on the sponsor's PCS orders naming that dependent and on DD Form 1056, “Authorization to Apply for a 'No-Fee' Passport and/or Request for Visa,” which the DoD passport agent prepares/signs. Theater pages state the sequence bluntly: once command sponsorship is approved and the PCS orders include each dependent's name, apply immediately for a no-fee passport for each dependent.",
          who: "Every command-sponsored dependent — the form is the authorization that makes the application “no-fee”; the family doesn't self-certify.",
          body: [
            "Installation passport offices add the execution details: orders must be fully executed (Fort Gordon's office lists the accepted order types — PCS, TCS, TDY, deployment, and others — and states there is no longer issuance of passports for “just in case” travel), and applications/photos are typically by appointment (Fort Gordon Passport Office, home.army.mil/gordon).",
          ],
          flags: [],
          links: [{ label: "State — Special-Issuance Passports (SIA apply)", url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html/" }],
          source: "DD Form 1056; State SIA “Tips” (April 2026); 2ID / 41st FAB theater pages",
        },
      ],
    },
    {
      key: "apply",
      label: "Where You Apply",
      tileSub: "Entries 2.1–2.5 · DoD passport agents, Fort Belvoir, the FCG, mechanics",
      intro:
        "Families do not apply for no-fee passports at a post office or a State passport agency. The published DoD route is the installation passport office — and whether a given country requires a passport, a visa, or a SOFA stamp is answered per-country by the DoD Foreign Clearance Guide.",
      entries: [
        {
          id: "oconus-routing",
          name: "The routing, as published — a DoD passport facility, not a post office",
          summary:
            "Where to apply search terms: submit DD 1056, DoD passport facility, passport agent. “Submit Form DD 1056 at a DoD passport facility, or contact the DoD Passport and Visa Office” (State, sia-apply page). DoD passport acceptance agents — the installation passport office (MPD/MPF personnel flight, garrison DHR) — execute the application, verify citizenship/family documents, and forward the package to SIA.",
          who: "Every family applying for a no-fee passport.",
          body: [],
          flags: [],
          links: [{ label: "State — Special-Issuance Passports (SIA apply)", url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html/" }],
          source: "U.S. Department of State, SIA",
        },
        {
          id: "oconus-belvoir",
          name: "The DoD Passport and Visa Office (Fort Belvoir) and Passport Matters",
          summary:
            "Passport office search terms: DoD Passport and Visa Office Fort Belvoir, passport matters. The DoD Passport and Visa Office sits at 9301 Chapek Road, Bldg. 1458, Fort Belvoir, VA (Directorate of Executive Travel / Logistics Services Washington), customer service (703) 545-0003/0004, and is DoD's guidance-and-assistance point for official and no-fee passports; State's SIA makes the final issuance determination.",
          who: "Agents and families needing the DoD-level guidance point; its public agent-facing system is Army Passport Matters (passportmatters.army.mil), which publishes per-country visa requirements and agent resources.",
          body: [
            "Fort Belvoir's garrison page runs the same eligibility list (military in special assignment situations; family members traveling overseas on orders with sponsor; DoD civilians on TDY/assignment to a country requiring a passport; contractors are not eligible for a no-fee passport).",
          ],
          flags: ["The Passport Matters newsletter PDFs surfaced in research are dated 2014 — this entry cites the office's existence, address pattern, and mission from the current Fort Belvoir garrison page; no 2014-vintage processing claims print."],
          links: [{ label: "Fort Belvoir Garrison — Passport Services", url: "https://home.army.mil/belvoir/about/Garrison/directorate-human-resources/military-personnel-division/fort-belvoir-passport-services" }],
          source: "Fort Belvoir Garrison Passport Services (home.army.mil)",
        },
        {
          id: "oconus-fcg",
          name: "The country-requirements router: the Foreign Clearance Guide",
          summary:
            "FCG search terms: foreign clearance guide, country passport requirements, fcg.pentagon.mil. Whether a given country requires a passport, a visa, or a SOFA stamp for entry is answered per-country by the DoD Foreign Clearance Guide (FCG), fcg.pentagon.mil — installation passport pages across services route families there. The FCG, the orders, and the gaining command's newcomer page control over any general guidance in this app.",
          who: "Every family, for their specific country — this router outranks every general statement in this section.",
          body: [],
          flags: [],
          links: [{ label: "DoD Foreign Clearance Guide", url: "https://www.fcg.pentagon.mil" }],
          source: "DoD Foreign Clearance Guide; installation passport pages",
        },
        {
          id: "oconus-overseas-apply",
          name: "Overseas, families apply through the military passport facility too",
          summary:
            "Apply overseas search terms: passport office on base overseas, CRBA through military facility. Once assigned in theater, DoD ID card holders under SOFA status apply for passports and CRBAs through a military passport facility; consular passport services are for emergencies and must be coordinated in advance through that facility (Ramstein Air Base, “Passports & ID cards” fact sheet).",
          who: "Families already in theater — Ramstein's passport office takes special-issuance applications on set days and publishes current local wait times.",
          body: [],
          flags: [],
          links: [{ label: "Ramstein AB — Passports & ID cards (fact sheet)", url: "https://www.ramstein.af.mil/About/Fact-Sheets/Article/303618/passports-id-cards/" }],
          source: "Ramstein Air Base (ramstein.af.mil)",
        },
        {
          id: "oconus-mechanics",
          name: "Application mechanics families will actually hit — DS-11, both parents, originals",
          summary:
            "Application rules search terms: DS-11 children, DS-3053 consent, DS-82 renewal, original documents. Children: a child's application always uses Form DS-11, and both parents must be present or provide a notarized Form DS-3053 (Statement of Consent). Documents must be original or certified copies.",
          who: "Parents applying for children — and non-U.S.-citizen dependents, who follow a different book entirely (below).",
          body: [
            "Forms: DS-11 for a first official/dependent passport (always for children); DS-82 only when the renewal criteria are met. Do not sign the application until in front of the passport agent (Fort Gordon Passport Office; Fort Belvoir Garrison Passport Services). Non-U.S.-citizen dependents cannot be issued a U.S. no-fee passport: they apply for a passport of their country of citizenship — and in Japan, eligible family members covered by the SOFA must hold a valid passport from their country of citizenship (41st FAB PCS Guide; MCCS Okinawa “Must Know Guide,” May 2026).",
          ],
          flags: [],
          links: [],
          source: "41st FAB Germany PCS Guide; Fort Gordon Passport Office",
        },
      ],
    },
    {
      key: "timing-sofa",
      label: "Timing & SOFA Status",
      tileSub: "Entries §3, 4.1–4.3 · 6–8 weeks, what a SOFA is, Germany / Japan / Korea routers",
      intro:
        "Processing time first (the honest numbers, with their dates), then SOFA: the agreement that sets your family's legal status in the host country, and how a dependent's status gets documented in the three major theaters. Every other country routes through the FCG and the gaining command — no other country's stamp mechanics print here.",
      entries: [
        {
          id: "oconus-processing",
          name: "Processing time — the honest numbers, with their dates: plan 6–8 weeks",
          summary:
            "Processing time search terms: how long does a no-fee passport take, 6 to 8 weeks, expedite SIA. The State Department figure (controlling, dated April 2026): routine processing can take up to 6 weeks — and that clock is SIA's processing; mail/transit time between the acceptance facility and Washington is additional. Expedited processing exists by request: an email to SIA with justification (CA-PPT-SIA-PASSPORTS@state.gov) — there is no walk-in expedite counter for special-issuance applicants and no published expedite fee for no-fee books, because no fees are collected at all.",
          who: "Every family, from the week orders arrive — installation snapshots below are local and dated; treat any single office's shorter number as that office's snapshot.",
          body: [],
          bullets: [
            { title: "Spangdahlem AB (52nd FSS Passport Office)", text: "Tourist passports 4–6 weeks; No-Fee / Special Issuance / Official / Diplomatic: 6–8 weeks; CRBA 6–8 weeks." },
            { title: "Fort Gordon Passport Office", text: "All passports 4–6 weeks (Oct–Mar) and 6–8 weeks (Apr–Sep); passports requiring a visa add roughly another 6–8 weeks." },
            { title: "2ID / Korea", text: "No-fee passport processing “generally six to eight weeks — begin as soon as command sponsorship is approved.”" },
            { title: "41st FAB / Germany", text: "“Process can take 8 or more weeks.”" },
            { title: "USCG (service-level note)", text: "Routine special-issuance processing takes approximately 8 weeks; apply as soon as alerted (MyCG)." },
            { title: "The 90-day window (Hanscom AFB MPF)", text: "An official no-fee application requires a bona fide need and the applicant within 90 days of travel, met with PCS orders or approved DTS orders — you generally cannot stockpile a no-fee passport far ahead of an actual assignment." },
          ],
          flags: ["Processing-time spread is real and sourced: State's controlling figure is “up to 6 weeks” routine (April 2026 SIA guidance); installation/service snapshots run 6–8 weeks, “8 or more,” seasonal 4–6/6–8, ~8. The range prints with attribution and is never averaged into a single invented “the” processing time. Mail time is on top of SIA processing."],
          links: [],
          source: "State SIA “Tips” (April 2026); installation passport offices as named",
        },
        {
          id: "oconus-sofa-basics",
          name: "SOFA status — what it is, and the member's proof vs. the family's proof",
          summary:
            "SOFA search terms: what is a SOFA, status of forces agreement, NATO SOFA article III. A Status of Forces Agreement is the agreement between the United States and a host nation that sets the legal status of U.S. forces, the civilian component, and their dependents in that country — entry/exit treatment, jurisdiction, and the privileges the host nation extends to SOFA-status persons. The NATO SOFA, Article III, paragraph 3, states the identification rule the whole stamp system implements: members of a civilian component and dependents “shall be so described in their passports.”",
          who: "Every OCONUS family — a dependent's SOFA stamp/certificate is the host nation's evidence that the bearer is in-country under the SOFA rather than as a tourist; it is what authorizes the stay beyond the tourist window and carries the SOFA's protections.",
          body: [
            "Across theaters the published pattern is identical: the member's proof of SOFA status is the ID card + orders; dependents and civilians prove status with a document — a SOFA stamp in the no-fee/official passport, or a SOFA certificate/card carried with a (tourist or foreign) passport (USAG Wiesbaden; Ramstein AB fact sheet).",
            "And the limit, printed by the Japan command itself: SOFA status does not place families above host-nation law — under the U.S.–Japan SOFA, sponsored personnel and dependents are under Japanese civil/criminal jurisdiction for offenses under Japanese law, and the SOFA's own Article XVI duty is to respect the laws of Japan (DONHR Okinawa statement, quoting U.S.–Japan SOFA Art. XVI).",
          ],
          flags: [],
          links: [],
          source: "AEA Reg 600-77 / USAFE-AFAFRICA Inst 51-714; Kunsan FSS; DONHR Okinawa",
        },
        {
          id: "oconus-germany",
          name: "GERMANY (EUCOM) — SOFA stamp OR AEA certificate; holding both is illegal; 90 days after arrival",
          summary:
            "Germany SOFA search terms: SOFA stamp Germany, AEA 600-77C certificate, SOFA card illegal both. Dependents/civilians have 90 days after arrival to obtain proof of SOFA; SOFA stamps in no-fee/official passports are “the approved solution” and expire when the passport does; a SOFA card is the workaround where there is no stamp — and it is illegal to hold both a stamp and a card (USAG Wiesbaden SOFA office).",
          who: "Families PCSing to Germany — entry document set per Ramstein: military members, ID card + orders; eligible family members of military, Special Issuance Passport (blue no-fee) with SOFA stamp or certificate; DoD civilians and their families, SIP (red official) with SOFA stamp or certificate; non-U.S./non-EU citizen family members, foreign passport + SOFA certificate.",
          body: [
            "Mechanics (USAG Wiesbaden): if SOFA expires you revert to tourist status with up to 90 days to re-obtain it; a SOFA card is issued against the highest-held passport, expires at the earliest of end-of-tour / ID-card / passport expiration, and is not transferable to another passport. The implementing regulation (AEA Reg 600-77, 19 Dec 2024) issues the SOFA ID certificate (AEA Form 600-77C), to be kept with the applicable passport on every entry/exit; it also notes no-fee passports bearing SOFA ID may generally be used for incidental travel to other NATO countries, and that anyone needing a passport without SOFA identification must get a tourist passport at their own expense. Non-command-sponsored family members may still be issued SOFA ID if the sponsor is assigned in Germany and other criteria are met.",
          ],
          flags: ["Germany SOFA card vs. stamp is either/or, by law of the theater — holding both is stated by USAG Wiesbaden as illegal; the card is non-transferable. Printed as Germany-specific (AEA 600-77 system), not a global rule. The Wiesbaden page carries an Oct 15, 2026 update header; its SOFA mechanics align with AEA Reg 600-77 (Dec 2024), which is the anchor citation."],
          links: [
            { label: "USAG Wiesbaden — Passport/Visa/SOFA Office", url: "https://home.army.mil/wiesbaden/about/Garrison/directorate-human-resources/passportvisa" },
            { label: "Ramstein AB — Passports & ID cards", url: "https://www.ramstein.af.mil/About/Fact-Sheets/Article/303618/passports-id-cards/" },
            { label: "AEA Regulation 600-77 (PDF)", url: "https://media.defense.gov/2025/Feb/27/2003652689/-1/-1/0/AER600-77.PDF" },
          ],
          source: "USAG Wiesbaden; Ramstein AB; AEA Reg 600-77 (19 Dec 2024)",
        },
        {
          id: "oconus-japan",
          name: "JAPAN (USFJ) — entry SOFA stamp by Japanese immigration; a separate exit/re-entry stamp before departures",
          summary:
            "Japan SOFA search terms: SOFA stamp Japan, exit re-entry stamp, Okinawa dependent passport. On entry, a SOFA stamp is placed in the family member's passport by the Japanese immigration officer; family members must be command sponsored to receive it. Civilian family members traveling temporarily out of Japan must first obtain a Japanese Exit/Re-Entry Stamp — the SOFA stamp and the exit/re-entry stamp are different stamps doing different jobs; they are never merged here.",
          who: "All dependents, regardless of age, must have a passport (dependents 10+ also a military ID). Active-duty members may travel to Japan on original orders + military ID — a Special Issuance Passport is not mandatory for the member — but all eligible dependents of service members and DoD civilians on official travel must have a SIP or the No-Fee Regular Passport before traveling to Okinawa (MCCS Okinawa “Must Know Guide,” May 2026).",
          body: [
            "Exit/re-entry mechanics (U.S. Army Garrison Okinawa / Torii Station Legal Assistance, Jan 2026): obtain the stamp at Torii Station MPD, Camp Foster IPAC, or the Kadena AMC Terminal customs/immigration office before temporary departures — failure to do so can result in having to re-enter on a 90-day tourist visa, with a command legal-office memorandum + immigration-office process then needed to void the tourist stamp and restore SOFA status. Note the Kadena customs office will place the exit/re-entry stamp only in tourist passports, not official passports — one reason Okinawa families also hold tourist books (the Two-Book tile). MCCS phrases the re-entry requirement against the tourist passport (“Eligible family members must obtain a Multiple Exit/Re-Entry stamp on their tourist passports… families encouraged to secure within 30 days of arrival”).",
          ],
          flags: ["Japan stamp mechanics differ by source in one detail: Torii Station legal (Jan 2026) — exit/re-entry stamp obtainable at Kadena customs only in tourist passports, not official passports; MCCS Okinawa (May 2026) — multiple exit/re-entry stamp is placed on tourist passports via IPAC. Both agree the SOFA stamp (entry, by Japanese immigration) and the exit/re-entry stamp (departures) are distinct; your family's IPAC/legal office controls."],
          links: [
            { label: "MCCS Okinawa — Must Know Guide (May 2026)", url: "https://www.okinawa.usmc-mccs.org/modules/media/?do=inline&id=a6f5a1fc-d712-4d6b-bcd1-c72061ad9913&v=2" },
            { label: "Torii Station — Exit/Re-Entry Stamps (Jan 2026, PDF)", url: "https://home.army.mil/okinawa/1517/6782/8822/Exit_Re-Entry_Stamps_2026-01.pdf" },
          ],
          source: "MCCS Okinawa; USAG Okinawa (Torii Station) Legal Assistance",
        },
        {
          id: "oconus-korea",
          name: "KOREA (USFK) — A-3 visa / SOFA stamp within 30 days; without a no-fee passport, denied boarding",
          summary:
            "Korea SOFA search terms: A-3 visa, Korea SOFA stamp 30 days, denied boarding no-fee passport. Eighth Army's travel page states the enforcement edge plainly: command-sponsored family members must hold a no-fee passport for official travel to Korea — family members without one are denied boarding at the port of departure — and travel dependents must be on the member's orders.",
          who: "Korea-bound families: members on orders need no passport or visa to enter and remain; civilian employees and all command-sponsored dependents who are not Korean citizens must apply for an official no-fee passport before departure.",
          body: [
            "A command-sponsored family member who hasn't received the no-fee book before departure may enter on a tourist passport with proof of the no-fee application (Kunsan FSS). On arrival, civilians and dependents must obtain an A-3 Visa / SOFA stamp within 30 days, from Korean Immigration Services (including the office in the AMC Passenger Terminal, Bldg. 648, for rotator arrivals); those who receive their no-fee passport after arrival, or extend DEROS, must report immediately to complete it. The stamp is the dependent's legal-resident evidence until its expiration date and is used to exit and return (Kunsan FSS).",
            "The three-theater SIP rule: since 1 October 2021, official travel to Korea, Japan, and Germany must be conducted with a Special Issuance Passport for command-sponsored dependents and DoD civilians; the temporary fallback is a DoD passport agent's memorandum that a SIP application was submitted before departure, carried with a regular tourist passport (Kunsan AB Newcomer's Guide, 7AF).",
          ],
          flags: ["The Oct 1, 2021 SIP-for-official-travel rule is published for Germany, Japan, and Korea — it is not stated as a worldwide dependent rule; other countries' requirements come from the FCG."],
          links: [
            { label: "Kunsan FSS — Status of Forces Agreement", url: "https://kunsanfss.com/status-of-forces-agreement/" },
            { label: "Eighth Army — Planning Travel", url: "https://8tharmy.korea.army.mil/site/newcomers/planning-travel.asp" },
            { label: "2ID — Command Sponsorship", url: "https://www.2id.korea.army.mil/Newcomers/Command-Sponsorship/" },
          ],
          source: "Eighth Army; Kunsan FSS; 2ID (Korea)",
        },
      ],
    },
    {
      key: "sponsorship",
      label: "Two Books & Sponsorship",
      tileSub: "Entries §5, 6.1–6.4 · no-fee vs. tourist, command sponsorship as the gate",
      intro:
        "The two-book reality (the no-fee book is the status document; the tourist book is the personal-travel document), and command sponsorship — the gaining command's approval that gates the funded accompanied move, the no-fee passport, and most OCONUS family entitlements.",
      entries: [
        {
          id: "oconus-two-books",
          name: "No-fee vs. tourist — the two-book reality",
          summary:
            "Two passports search terms: do I need both passports, tourist passport overseas PCS. The no-fee book is the status document: “No-fee passports with Status of Forces Agreement (SOFA) are normally required for dependents to PCS out of commercial ports,” and dependents overseas are highly encouraged to have both tourist and no-fee passports (52nd FSS, Spangdahlem AB). The tourist book is the personal-travel document: no-fee/official passports are for official travel only (PCS/TDY orders); “For personal travel, you must use a tourist passport.”",
          who: "Every OCONUS family — Germany's welcome-packet version, in the garrison's own Q&A: within Germany, the no-fee passport with SOFA stamp works; to travel outside Germany you need a tourist passport, and you are advised to also carry the SOFA-stamped book — “your tourist passport lets you out of Germany while your official passport with SOFA stamp lets you back in” (USAG Bavaria / Grafenwoehr Newcomers Handbook).",
          body: [
            "Cost asymmetry, stated honestly: the no-fee book costs the family nothing; the tourist book is at family expense through the regular State process (installation tourist-passport services exist in some theaters — e.g., Ramstein takes tourist applications on set days, and Wiesbaden notes tourist “rodeos” in the Kaiserslautern Military Community — but fees are the family's).",
          ],
          flags: ["A tourist passport alone does not confer SOFA status — in Germany a non-sponsored family member on a tourist book is a tourist (90-day limit; the sponsorship entry below); in Japan, entry without the SOFA stamp lands the family member on a 90-day tourist visa (Torii Station legal page). The SOFA certificate/card is the bridge document where a stamp isn't in the book."],
          links: [],
          source: "52nd FSS Spangdahlem; State SIA; USAG Bavaria newcomers handbook",
        },
        {
          id: "oconus-sponsorship-what",
          name: "Command sponsorship — what it is: applied for, EFMP-screened, never guaranteed",
          summary:
            "Command sponsorship search terms: what is command sponsorship, accompanied tour, EFMP screening dependents. Command sponsorship is the gaining command's approval for family members to accompany the member OCONUS for the length of the tour. It is applied for (not automatic), it includes an EFMP screening of each family member, and approval comes from the gaining command.",
          who: "Every family hoping for an accompanied tour — approval is reflected on the orders: accompanied tour = sponsorship approved, each sponsored dependent's full name listed on the assignment orders; unaccompanied tour = sponsorship denied (often, per the Germany guide, because the location has limited family support).",
          body: [
            "Timelines, per theater as published: the Army's Europe pages put the full application at 3 weeks to 3 months end-to-end, with IMCOM-Europe reviewing completed applications within 30 business days; Eighth Army (Korea) allows initiation 180 days before the report date and cites up to ~30 days for approval once the packet is received if EFMP is not warranted. Japan runs the same gate under its local name: Area Clearance / Dependent Entry Approval (DEA) “provides command sponsorship for dependents accompanying Service Members overseas… dependents must have DEA to receive entitlements OCONUS. DEA is valid only for the family-accompanied tour on Okinawa; extensions require a new approval” (MCCS Okinawa).",
          ],
          flags: ["Command sponsorship timelines vary by theater by design (Europe: 3 weeks–3 months total; Korea: initiate up to 180 days out, ~30 days approval absent EFMP). Printed per-theater, never averaged."],
          links: [
            { label: "USAG Italy — Command Sponsorship", url: "https://home.army.mil/italy/my-garrison-Italy/pcsguidedarby/pre-arrival-darby/command-sponsorship" },
            { label: "Eighth Army — Command Sponsorship", url: "https://8tharmy.korea.army.mil/site/newcomers/planning-travel.asp" },
          ],
          source: "USAG Italy; 41st FAB Germany PCS Guide; Eighth Army; MCCS Okinawa",
        },
        {
          id: "oconus-sponsorship-authorizes",
          name: "Why it matters — what sponsorship authorizes",
          summary:
            "Sponsorship benefits search terms: only command sponsored dependents authorized, no-fee passport entitlement. Per the Army's published benefit framing, only command-sponsored dependents are authorized the accompanied package: the government-funded family move and travel, the no-fee passport, OCONUS housing and allowance treatment at the accompanied rate, dependent employment eligibility in theater, and access to the theater's family support (schools/medical) as residents rather than visitors.",
          who: "Families weighing an accompanied tour — the full per-item lists live on the USAG Italy and 41st FAB pages; this entry prints the framing and routes to them, not a re-typed entitlement table.",
          body: [],
          flags: [],
          links: [{ label: "USAG Italy — Command Sponsorship", url: "https://home.army.mil/italy/my-garrison-Italy/pcsguidedarby/pre-arrival-darby/command-sponsorship" }],
          source: "USAG Italy; 41st FAB Germany PCS Guide",
        },
        {
          id: "oconus-nonsponsored",
          name: "The unaccompanied / non-sponsored reality, stated as commands state it",
          summary:
            "Non-sponsored dependents search terms: bring family without command sponsorship, 90 days tourist, dependent-restricted tour. Without command sponsorship, dependents (except EU citizens in the EU case) are considered tourists — limited to 90 days in country with little support authorized from the U.S. Armed Forces. Family members must be granted command sponsorship before traveling overseas (USAG Italy).",
          who: "Families considering bringing dependents without sponsorship — Korea publishes the member-side version: Kunsan is a 12-month dependent-restricted tour for most, and 7AF requires an informed-choice memorandum for non-command sponsorship of dependents; families who bring dependents without sponsorship do so outside the funded/support system.",
          body: [
            "Germany is the partial exception that proves the rule: a non-sponsored family member may still receive SOFA ID if the sponsor is assigned in Germany and criteria are met — status documentation without the sponsorship entitlement package. Do not generalize this to other theaters (AEA Reg 600-77).",
          ],
          flags: [],
          links: [],
          source: "USAG Italy; Kunsan AB Newcomer's Guide (7AF); AEA Reg 600-77",
        },
        {
          id: "oconus-acquired",
          name: "Acquired dependents — sponsorship after arrival",
          summary:
            "Acquired dependents search terms: marriage birth adoption overseas command sponsorship, stepchild custody order. Marriage, birth, or adoption in theater creates dependents who were never on the orders: the sponsor applies for command sponsorship in-country (Hawaii's MPD page is the clearest published walk-through — FMTS/EFMP screening, command-sponsorship checklist, IPPS-A personnel action — and notes the sponsor must be able to serve the accompanied tour length or at least 12 months remaining after the family arrives).",
          who: "Sponsors whose family grows in theater. USARJ's IG bulletin (Vol. 26-2, Jan 2026) prints Japan's eligibility frame: spouse; unmarried child under 21 including a stepchild with a court order granting full legal custody and an adopted child with a court adoption order; unmarried child under 23 in an accredited institution; approved secondary dependents.",
          body: [],
          flags: [],
          links: [],
          source: "USAG Hawaii — Command Sponsorship; USARJ IG Info Bulletin 26-2 (Jan 2026)",
        },
      ],
    },
    {
      key: "checklist-special",
      label: "Checklist & Special Cases",
      tileSub: "Entries §7, 8.1–8.4 · the 11-item document checklist, baby abroad, dual citizenship, adoption, non-citizen dependents",
      intro:
        "Work the checklist before the passport-office appointment — each item names the official page that requires it. Then the special cases: a baby born in theater, dual citizenship, adoption/stepchildren/custody, and non-U.S.-citizen dependents.",
      entries: [
        {
          id: "oconus-checklist",
          name: "The document checklist — what to assemble, and where each item is traced",
          summary:
            "Document checklist search terms: passport appointment documents, what to bring passport office, OCONUS paperwork list. Work this list before the passport-office appointment. Each item names the official page that requires it; items owned by other sections carry a pointer, not a duplicate.",
          who: "Every family, before the appointment.",
          body: [],
          bullets: [
            { title: "PCS orders naming every dependent, fully executed", text: "The foundation document for the no-fee application and for sponsorship itself. (State SIA “Tips”; Fort Gordon Passport Office; Eighth Army CSP page.)" },
            { title: "DD Form 1056", text: "Prepared with the DoD passport agent; not a download-and-self-sign form. (State, sia-apply page.)" },
            { title: "DS-11 for each first-time/child applicant", text: "DS-82 only if renewal-eligible; both parents present, or a notarized DS-3053 for an absent parent. (41st FAB; Fort Gordon.)" },
            { title: "Each applicant's proof of U.S. citizenship", text: "An original or certified birth certificate (or prior passport/CRBA) — and the sponsor's military ID card, both listed as bring-items by the Germany PCS guide (“Documents must be original or certified”). (41st FAB, “Passports & Visas.”)" },
            { title: "Marriage certificate", text: "The document that establishes the spouse's dependent status for DEERS/orders purposes; the Eighth Army sponsorship packet pairs it with DD Form 1172-2 (DEERS enrollment) for Soldiers with dependents. DEERS/ID-card mechanics live in the app's Records & ID content — cross-link, don't duplicate." },
            { title: "Court documents, original or certified", text: "For name changes, custody, adoption — Fort Gordon's passport office lists exactly this category among its bring-documents. See also the adoption entry in this tile." },
            { title: "Command sponsorship approval / DEA", text: "Before dependent travel; in Japan it is also the SOFA stamp's precondition. (USAG Italy; MCCS Okinawa.)" },
            { title: "Immunization records and medical/dental records", text: "Required downstream for EFMP screening, gaining-MTF enrollment, and DoDEA school enrollment — owned by the Kids & Schools pack and the My Health HQ pack; the OneSource OCONUS checklist is the master family list (via the PCS Move Center)." },
            { title: "School records for each child", text: "Kids & Schools pack (DoDEA/NDSP enrollment) — pointer only here." },
            { title: "Pet documentation", text: "Health certificates, microchip/rabies records, airline/theater-specific forms. The PCS Move Center owns pets in the move; pet paperwork runs on its own clock parallel to the family's passports." },
            { title: "Vehicle and household-goods documents", text: "Titles, registrations, shipping inventories. The PCS Move Center owns POV/HHG — pointer only." },
            { title: "The tourist passports (fee books)", text: "For every family member who will travel for leisure — family expense, regular State timelines; start these in parallel, not after arrival. (52nd FSS Spangdahlem; USAG Bavaria newcomers handbook.)" },
          ],
          flags: [],
          links: [{ label: "Military OneSource — A Service Family Checklist for Moving OCONUS", url: "https://www.militaryonesource.mil/moving-pcs/living-oconus/a-service-family-checklist-for-moving-oconus/" }],
          source: "Per-item official pages as named on each item",
        },
        {
          id: "oconus-baby",
          name: "A baby born in theater — CRBA, passport, SSN, and status (via Federal Benefits Units)",
          summary:
            "Baby born abroad search terms: CRBA, consular report of birth abroad, SSN baby overseas, federal benefits unit. A child born abroad who acquired U.S. citizenship at birth through a parent is documented with a Consular Report of Birth Abroad (CRBA, Form FS-240), issued by the U.S. embassy or consulate in the country of birth to children under 18. State is explicit about what a CRBA is not: it is not a birth certificate (the host country's birth record is separate), and it is not proof of legal parentage or custody.",
          who: "Parents of a child born in theater — application starts online via MyTravelGov / eCRBA at most posts (Form DS-2029; Form DS-5507 where State's listed situations apply). Military families in theater apply for CRBAs through the military passport facility (Ramstein publishes CRBA processing at 6–8 weeks on the same page as its passport wait times).",
          body: [
            "First passport for the newborn is applied for alongside/after the CRBA (DS-11, both-parents rule); in a SOFA theater the baby also needs the dependent's status documentation (command sponsorship/DEA amendment + SOFA stamp process of that theater) before routine travel — installation newborn checklists (e.g., Yokota AB's) sequence it as: host-nation birth documents → CRBA → DEERS/ID → passport → SSN (installation example; sequence, not a DoD-wide form).",
            "Social Security number: a child born abroad does not get an SSN automatically. Apply at a Social Security Federal Benefits Unit (FBU) at a designated U.S. embassy/consulate (SSA's FBU list is at ssa.gov/foreign) with Form SS-5; the CRBA (FS-240) is SSA's key proof of the child's citizenship/age. Children under 12 may apply by mail to the servicing FBU with original or custodian-certified documents; a first-time applicant age 12 or older must have an in-person interview (SSA joint FAQ).",
          ],
          flags: [
            "Do not print the once-common claim that “the consulate applies for the SSN with the CRBA.” SSA's own joint FAQ routes the application to the FBU; some embassy pages describe local variations — the FBU route prints, local variation is flagged.",
            "CRBA design changed in 2025: State released a new CRBA design in 2025; previous versions remain acceptable proof of citizenship (State, “Design and Security of our Documents”).",
          ],
          links: [
            { label: "State — Birth of U.S. Citizens Abroad (CRBA)", url: "https://travel.state.gov/en/international-travel/living-abroad/birth.html" },
            { label: "SSA — Joint FAQ on SSNs abroad (FBU route)", url: "https://www.ssa.gov/foreign/joint_frequently_asked_questions.pdf" },
          ],
          source: "State (travel.state.gov); SSA Federal Benefits Units",
        },
        {
          id: "oconus-dual",
          name: "Dual citizenship — as State publishes it",
          summary:
            "Dual citizenship search terms: dual national child passport, enter US on US passport. U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another nationality, and does not impede acquiring foreign citizenship; dual nationality can arise automatically (e.g., a child born in a jus-sanguinis country to U.S. parents may be a national of both at birth) — State, “Dual Nationality.”",
          who: "Dual-national family members — the travel rules that bite: U.S. citizens, including dual-national children, must enter and depart the United States on a U.S. passport (they are not eligible for a U.S. visa or ESTA); the other country of nationality may likewise require its own passport for entry/exit; dual nationals owe obedience to both countries' laws, and U.S. consular protection can be limited in the country of the other nationality. Some countries do not permit dual nationality at all — research the other country's law before travel (State).",
          body: [
            "In-theater consequence (named level only): a dual-national dependent's SOFA documentation follows the passport they are documented under — Ramstein's fact sheet routes non-U.S.-citizen family members to “Foreign Passport and SOFA Certificate,” and third-country-national family members may face additional admissibility steps detailed in the FCG's Germany section. The route prints, not a ruling.",
          ],
          flags: [],
          links: [{ label: "State — Dual Nationality", url: "https://travel.state.gov/en/international-travel/planning/personal-needs/dual-nationality.html" }],
          source: "U.S. Department of State — Dual Nationality",
        },
        {
          id: "oconus-adoption",
          name: "Adoption, stepchildren, and custody — documentation at named level",
          summary:
            "Adoption custody search terms: adopted child command sponsorship, stepchild court order, custody documents passport. Command sponsorship eligibility reaches adopted children (court adoption order) and stepchildren (court order granting full legal custody) — the court paperwork is part of the sponsorship packet, not an afterthought (USARJ IG Info Bulletin 26-2, Jan 2026). Passport offices require original or certified copies of court documents showing legal name changes, custody documents, and adoption when they underpin an application (Fort Gordon Passport Office).",
          who: "Families whose applications rest on court paperwork — the two-parent consent rule (both parents present or notarized DS-3053) applies with full force in custody situations; expect the agent to work from the court order. This section prints the document categories and routes the family's specific posture to the passport agent and installation legal assistance; it does not adjudicate custody sufficiency.",
          body: [],
          flags: [],
          links: [],
          source: "USARJ IG Info Bulletin 26-2; Fort Gordon Passport Office; 41st FAB",
        },
        {
          id: "oconus-noncitizen",
          name: "Non-U.S.-citizen dependents — the standing rule",
          summary:
            "Non-citizen spouse search terms: foreign spouse passport SOFA, non-US citizen dependent. No U.S. passport (fee or no-fee) issues to a non-citizen. The published pattern in all three theaters: passport of the country of citizenship + the theater's SOFA documentation.",
          who: "Non-citizen dependents in every theater: Germany — foreign passport + SOFA certificate; Japan — valid passport from country of citizenship for SOFA-covered family members; Korea — civilian/dependent entry on their own passport with the A-3/SOFA process, and Eighth Army's warning to verify status with U.S. immigration before travel if a dependent will travel without a U.S. passport or is not a U.S. citizen.",
          body: [],
          flags: [],
          links: [{ label: "Eighth Army — Planning Travel", url: "https://8tharmy.korea.army.mil/site/newcomers/planning-travel.asp" }],
          source: "Ramstein AB fact sheet; MCCS Okinawa; Kunsan FSS; Eighth Army",
        },
      ],
    },
  ],
};
