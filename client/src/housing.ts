// Housing Pack — transcribed from the Closure Sweep LIFE pack
// (~/workspace/military-app/closure/closure-life.md, Part 1,
// researched Nov 9, 2026, official sources only). The Tenant Bill of
// Rights is quoted from the DoD document itself (Revised MHPI Tenant
// Bill of Rights, effective Aug 1, 2021) — all 18 rights. Pack rule
// H-1/H-2: installation plain-language briefs do NOT override the DoD
// document; where a brief conflicts (deciding authority; wording),
// the conflict prints, labeled. Barracks/dorm content carries the
// standing caution: no DoD-wide inspection/CQ standard exists.
// Off-post renting cross-references Know Your Rights for SCRA lease
// termination — the legal text is NOT duplicated here.

import type { PackSection } from "./seven";

const TBOR_SOURCE = "DoD, MHPI Tenant Bill of Rights (Revised, eff. Aug 1, 2021)";

const RIGHTS: Array<[string, string, string]> = [
  ["Right 1 — A home and community meeting health and environmental standards", "The right to reside in a housing unit and a community that meets applicable health and environmental standards.", "The foundation right of the 18 — the unit and the community around it."],
  ["Right 2 — Working fixtures, appliances, utilities, and maintained common areas", "The right to reside in a housing unit that has working fixtures, appliances, and utilities and to reside in a community with well-maintained common areas and amenity spaces.", "“Working” and “well-maintained” are the document's own words — the standard to cite in a work order."],
  ["Right 3 — The unit's 7-year maintenance history before you sign", "The right to be provided with a summary of the maintenance conducted with respect to a prospective housing unit by the landlord for the previous seven years, before signing a lease, and upon request, all information possessed by the landlord regarding such maintenance within two business days after making the request. Upon request, a current Tenant who did not receive maintenance information before signing a lease has the right to receive such information within five business days after making the request.", "Ask before signing — the 2-business-day (full records) and 5-business-day (current tenant) clocks are in the DoD document. Statutory note: 10 U.S.C. § 2890(b)(3) prints this right shorter; the day counts are the DoD document's."],
  ["Right 4 — A written lease with clearly defined terms", "The right to a written lease with clearly defined rental terms to establish tenancy in a housing unit, including any addendums and other regulations imposed by the landlord regarding occupancy of the housing unit and use of common areas.", "No lease, no move-in — and the addendums are part of the lease."],
  ["Right 5 — A plain-language briefing, before signing and 30 days after move-in", "The right to a plain-language briefing, before signing a lease and 30 days after move-in, by the installation housing office on all rights and responsibilities associated with tenancy of the housing unit, including information regarding the existence of any additional fees authorized by the lease, any utilities payments, the procedures for submitting and tracking work orders, the identity of the Military Tenant Advocate, and the dispute resolution process.", "Two briefings, not one — and the Military Tenant Advocate's identity is part of the briefing."],
  ["Right 6 — Time to prepare for and be present at inspections", "The right to have sufficient time and opportunity to prepare and be present for move-in and move-out inspections, including an opportunity to obtain and complete necessary paperwork.", "Be there for both inspections — presence is the right."],
  ["Right 7 — Report problems without reprisal or retaliation", "The right to report inadequate housing standards or deficits in habitability of the housing unit to the landlord, the chain of command, and housing management office without fear of reprisal or retaliation, including reprisal or retaliation in the following forms: (A) unlawful recovery of, or attempt to recover, possession of the housing unit; (B) unlawfully increasing the rent, decreasing services, or increasing the obligations of a Tenant; (C) interference with a Tenant's right to privacy; (D) harassment of a Tenant; (E) refusal to honor the terms of the lease; or (F) interference with the career of a Tenant.", "The protected-reporting right, with the six named forms of reprisal — including interference with your career."],
  ["Right 8 — Access to a Military Tenant Advocate or legal assistance", "The right of access to a Military Tenant Advocate through the housing management office of the installation of the Department at which the housing unit is located or a military legal assistance attorney to assist in the preparation of requests to initiate dispute resolution.", "The advocate exists to help you start dispute resolution — you do not have to draft it alone."],
  ["Right 9 — Property management that meets or exceeds industry standards", "The right to receive property management services provided by a landlord that meet or exceed industry standards and that are performed by professionally and appropriately trained, responsive, and courteous customer service and maintenance staff.", "“Meet or exceed industry standards” is the benchmark the landlord agreed to."],
  ["Right 10 — Multiple ways to reach maintenance, and honest answers", "The right to have multiple, convenient methods to communicate directly with the landlord maintenance staff, and to receive consistently honest, accurate, straightforward, and responsive communications.", "Communication quality is itself a right — document what you were told and when."],
  ["Right 11 — An electronic work order system you can track", "The right to have access to an electronic work order system through which a Tenant may request maintenance or repairs of a housing unit and track the progress of the work.", "Submit through the system and keep the tracking trail — it is evidence in any later dispute."],
  ["Right 12 — Prompt repair, a stated timeframe, and relocation if habitability requires it", "With respect to maintenance and repairs to a housing unit, the right to the following: (A) prompt and professional maintenance and repair; (B) to be informed of the required time frame for maintenance or repairs when a maintenance request is submitted; and (C) in the case of maintenance or repairs necessary to ensure habitability of the housing unit, to prompt relocation into suitable lodging or other housing at no cost to the Tenant until the maintenance or repairs are completed.", "If the repair is about habitability, relocation at no cost to you is part of the right — not a favor."],
  ["Right 13 — Legal assistance advice on resolving disputes", "The right to receive advice from military legal assistance on procedures involving mechanisms for resolving disputes with the property management company or property manager to include mediation, arbitration, and filing claims against a landlord.", "Legal assistance advises on the dispute mechanisms themselves — mediation, arbitration, claims."],
  ["Right 14 — A standardized, formal dispute resolution process", "The right to enter into a standardized, formal dispute resolution process, should all other methods be exhausted, to ensure the prompt and fair resolution of disputes that arise between landlords and Tenants concerning maintenance and repairs, damage claims, rental payments, move-out charges, and such other issues relating to housing units. The dispute resolution process shall contain the following elements: installation or regional commander as deciding authority; a process for withholding allotment of rental payments; standard mechanisms and forms for requesting dispute resolution; minimal costs to Tenants for participation; a completed investigation within seven days; and except in limited circumstances, a decision within 30 days and in no event longer than 60 days. A decision in favor of the Tenant may include a reduction in rent or an amount to be reimbursed or credited to the Tenant.", "The formal backstop: investigation in 7 days, decision in 30 (never more than 60). Deciding-authority CONFLICT — see the TBOR framing card in this tile: an Army installation brief names a different authority."],
  ["Right 15 — BAH payments segregated during a dispute", "The right to have the Tenant's basic allowance housing payments segregated, with approval of a designated commander, and not used by the property owner, property manager, or landlord pending completion of the dispute resolution process.", "“Segregated… and not used,” as the DoD document prints it. (An older brief's “held in escrow” wording was struck from the statute in 2021 — pack Flag H-1.)"],
  ["Right 16 — Advance notice before anyone enters your home", "The right to have reasonable, advance notice of any entrance by a landlord, installation housing staff, or chain of command into the housing unit, except in the case of an emergency or abandonment of the housing unit.", "Emergency and abandonment are the only exceptions the document names."],
  ["Right 17 — No nonrefundable fees; rent credits not arbitrarily held", "The right to not pay nonrefundable fees or have application of rent credits arbitrarily held.", "Short, and exactly as printed."],
  ["Right 18 — Common documents, forms, and processes across installations", "The right to expect common documents, forms, and processes for housing units will be the same for all installations of the Department, to the maximum extent applicable without violating local, State, and Federal regulations.", "The standardization right — the same paperwork everywhere, to the maximum extent applicable."],
];

export const HOUSING_SECTION: PackSection = {
  view: "housing",
  title: "Housing Pack",
  headSub:
    "Privatized housing rights quoted from the DoD document itself, barracks and dorm life at the published level, and off-post renting routes. The Tenant Bill of Rights below is the August 2021 DoD document — installation briefings do not override it.",
  intro:
    "Three kinds of military housing, three tiles. Privatized housing carries the 18-right Tenant Bill of Rights. Barracks and dorms carry unit and installation standards — there is no DoD-wide standard, and this section says so rather than inventing one. Off-post renting carries the lease-review routes and a pointer to Know Your Rights for the SCRA's legal framing.",
  standing:
    "Pack rules H-1/H-2: the Aug 2021 DoD document is the TBOR text; installation plain-language briefs are briefings, not overrides. Where a brief conflicts with the document (Right 8's added clause; Right 15's escrow wording; the dispute deciding authority), the conflict is printed and labeled — never merged.",
  tiles: [
    {
      key: "tbor",
      label: "Tenant Bill of Rights (18)",
      tileSub: "The Aug 2021 DoD document, quoted · framing card + all 18 rights, each Binder-savable",
      intro: "The Revised MHPI Tenant Bill of Rights, effective August 1, 2021, transcribed from the DoD document. Each right is its own card so any single right can be saved to the Binder and cited.",
      entries: [
        {
          id: "TBOR-0",
          name: "The Tenant Bill of Rights — framing, as DoD publishes it",
          summary: "“The following rights are effective on August 1, 2021.” “Tenants should contact their installation housing office to confirm the rights fully available to them.” DoD states it “has issued all policy guidance necessary to implement prospectively all rights” but that “retroactive application of the requirements at existing projects requires voluntary agreement by the respective MHPI company; the Department cannot unilaterally change the terms of the complex, public-private partnerships” — and that “nearly all of the MHPI companies have agreed to implement all 18 Tenant rights at their existing projects.” Closing line as published: “Tenants seeking assistance with housing issues should continue to engage their installation housing office, installation leadership, or chain of command.” Statute: 10 U.S.C. § 2890 lists the same 18 in substance (§ 2890(a)(2): the housing documents “shall” be attached to each lease). Universal lease: DoD's framework “will standardize the general content of the MHPI tenant lease to the maximum extent possible,” rolling out typically at a tenant's next PCS move.",
          who: "Every privatized-housing tenant — confirm with your housing office which rights your project has implemented, exactly as DoD advises.",
          body: [],
          flags: [
            "Deciding-authority CONFLICT (pack Flag H-2), printed both sides: Right 14 in the DoD document names the “installation or regional commander as deciding authority.” An Army installation plain-language brief (Fort Story, rev. Feb 27, 2024) names the HQ IMCOM Commanding General as Deciding Authority (decision generally within 30 days, not later than 60), with tenants first attempting informal resolution and the garrison commander mediating locally, “normally within 10 business days,” and rent segregation available “for up to 60 days while the dispute is being reviewed.” Which applies is service/installation-specific — ask your housing office which authority decides your case.",
            "Wording variants (pack Flag H-1): the Fort Story brief's Right 8 adds a payment-withholding clause not in the DoD document, and its Right 15 says BAH “segregated and held in escrow” — wording the statute struck in 2021. The DoD document quoted in this tile controls.",
          ],
          links: [
            { label: "DoD TBOR document (PDF)", url: "https://media.defense.gov/2020/Feb/25/2002254968/-1/-1/1/MILITARY_HOUSING_PRIVATIZATION_INITIATIVE_TENANT_BILL_OF_RIGHTS.PDF" },
            { label: "10 U.S.C. § 2890", url: "https://uscode.house.gov/us/usc/119-121/t10/s2890/" },
            { label: "DoD Housing Feedback System", url: "https://www.dhfs.mil" },
          ],
          source: TBOR_SOURCE + "; 10 U.S.C. § 2890; defense.gov",
        },
        ...RIGHTS.map(([name, quote, note], i) => ({
          id: `R-${i + 1}`,
          name,
          summary: quote,
          who: note,
          body: [],
          flags: [],
          links: [],
          source: TBOR_SOURCE,
        })),
        {
          id: "TBOR-WO",
          name: "Work orders and feedback (privatized housing)",
          summary: "Right 11 guarantees the landlord's electronic work-order system — submit through your community's property manager and track it there. Separately, the DoD Housing Feedback System (DHFS, dhfs.mil) “is intended to augment, not replace existing processes for submitting maintenance work order requests.” Use the landlord's system for the repair; use DHFS to put the experience on DoD's record.",
          who: "Privatized-housing tenants with a maintenance problem — the work order starts the clock; the feedback system is the second channel, not the first.",
          body: [],
          flags: [],
          links: [{ label: "DoD Housing Feedback System", url: "https://www.dhfs.mil" }],
          source: "DoD TBOR Right 11; defense.gov (DHFS launch release)",
        },
      ],
    },
    {
      key: "barracks",
      label: "Barracks & Dorms",
      tileSub: "Published pattern only · standing caution: no DoD-wide inspection or CQ standard exists",
      intro: "Barracks and dorm standards as services, divisions, installations, and units actually publish them — a pattern of commander authority and unit SOPs, not a universal rule. Verified for Army and Air Force in this research pass; Navy BEQ / Marine Corps barracks / Coast Guard equivalents were not verified and are not filled in.",
      entries: [
        {
          id: "BAR-0",
          name: "Standing caution: no DoD-wide barracks standard exists",
          summary: "No single DoD-wide room-inspection or CQ (Charge of Quarters) standard exists in official publishing. Every source in this tile is a service, division, installation, or unit publication, and each delegates standards to commander and unit SOPs. What follows ships as the published pattern — your unit's SOP is the document that governs your room.",
          who: "Every barracks/dorm resident — read this card before citing any other card in this tile as “the rule.”",
          body: [],
          flags: ["Pack Flags H-3: Navy BEQ, USMC barracks, and Coast Guard unaccompanied-housing equivalents were NOT verified in this research pass. They are absent here, not summarized from the Army/Air Force material."],
          links: [],
          source: "Closure LIFE pack, Part 1B framing (official publishing, as checked)",
        },
        {
          id: "BAR-1",
          name: "Commander authority and room checks (Army, unit policy example)",
          summary: "Unit policy letter (501st MI Brigade Policy Letter #14, Jun 3, 2024): “Commanders have inherent authority over the barracks and are responsible for enforcing standards to ensure a safe, secure, clean, pleasant, and functional living environment. Commanders may enter rooms and authorize unit leaders to enter rooms on their behalf.” “Rooms and latrines will be kept in a clean and organized manner. Soldiers may arrange and decorate their rooms within the limits of good taste.” Squad leaders/platoon sergeants inspect rooms once a week, annotated on a checklist posted outside the door. Work orders go to the barracks manager and first-line supervisor (this unit's route). A division standards book (4th Infantry Division / Fort Carson Green Book, Oct 1, 2025) prints the same pattern: “Commanders will establish unit SOPs to enforce leadership involvement in the health and welfare of their Soldiers,” joint move-in/move-out inspections with the squad leader/platoon sergeant, leaders checking a minimum of once per week, and health-and-welfare inspections that “must be conducted in a reasonable fashion.”",
          who: "Army barracks residents — weekly leader checks and commander entry authority are the published pattern; your brigade's letter sets your specifics.",
          body: [],
          flags: [],
          links: [],
          source: "501st MI Brigade Policy Letter #14 (Jun 3, 2024); 4ID/Fort Carson Green Book (Oct 1, 2025)",
        },
        {
          id: "BAR-2",
          name: "CQ (Charge of Quarters) basics — three published variants of one pattern",
          summary: "501st MI Bde: each battalion maintains a CQ SOP; each building has a CQ NCOIC + CQ Runner; battalion CQ is 24/7; visitors sign in/out at the CQ desk and leave ID with CQ. Fort Bliss (Command Policy Letter #11, Jun 10, 2022): within 2 hours of assuming duty, CQ verifies emergency exits/entries, inspects all common areas at least once every 4 hours, logs inspections/deficiencies/incidents on the CQ log, checks IDs and records all visitors, and verifies visitors out at the end of visitor hours (2300); commanders conduct a health-and-welfare inspection of all single-Soldier housing at least once per quarter (coordinated with legal first). Fort Carson Green Book: company CQ is Corporal or above; rosters on DA Form 6 (30+ days out); activities logged on DA Form 1594; special emphasis on barracks checks during high-risk hours 2100–0400.",
          who: "Anyone standing CQ or living under it — the pattern is consistent (desk, log, checks, visitor control); the hours and forms are your installation's.",
          body: [],
          flags: [],
          links: [],
          source: "501st MI Bde PL #14; Fort Bliss CPL #11; 4ID/Fort Carson Green Book",
        },
        {
          id: "BAR-3",
          name: "Air Force dorms / Unaccompanied Housing",
          summary: "As published (housing.af.mil template; Robins AFB Dorm Handbook 2025, citing AFI 32-6000): “The Installation Commander establishes a base-wide UH inspection program focused on health and safety. Squadron Commanders and unit First Sergeants implement the inspection program and visit rooms…” Residents keep rooms clean/tidy and may be liable for damage beyond fair wear and tear. Move-in inspection/inventory is done with the ADL/Dorm Manager (documented at Robins on AF Form 228). UH eligibility as published at RAF Lakenheath: unaccompanied Airmen E-1 to E-3 and E-4 with less than 3 years of service. Robins note: ADLs do not do cleanliness inspections; commander/CCM/First Sergeant inspections are scheduled by the First Sergeant.",
          who: "Airmen in the dorms — the First Sergeant's inspection program, not the ADL's, is the published cleanliness route.",
          body: [],
          flags: [],
          links: [],
          source: "housing.af.mil; Robins AFB Dorm Handbook 2025 (AFI 32-6000)",
        },
        {
          id: "BAR-4",
          name: "Barracks maintenance: ArMA (Army) — and the response-time caution",
          summary: "Army barracks work requests go through the Army Maintenance Application (ArMA, maintenance.army.mil): “residents submit work requests and provide a description of their case. They can include photos” — available 24/7 by website or app with immediate tracking numbers; emergencies still go to the call center. Privatized-housing residents use their own community's system instead — installation pages draw this barracks-vs-privatized split explicitly. Response times are installation-specific wherever published (Fort Story privatized: emergency ~1 hr / urgent ~4 hrs; Robins AFB dorms: urgent 5 workdays / routine 30 days). No DoD-wide response-time standard was verified.",
          who: "Barracks residents with a broken anything — ArMA for barracks, the community system for privatized housing, the call center for emergencies.",
          body: [],
          flags: [],
          links: [{ label: "ArMA — Army Maintenance Application", url: "https://maintenance.army.mil" }],
          source: "Fort Detrick DPW; Fort Campbell; Fort Carson DPW (ArMA pages)",
        },
      ],
    },
    {
      key: "offpost",
      label: "Off-Post Renting",
      tileSub: "The military clause, housing-office lease review, AHOUS and HOMES.mil · SCRA legal text lives in Know Your Rights",
      intro: "Renting in town: the lease clause to ask for, the free review before you sign, and the two official listing systems. The SCRA's lease-termination law itself is carried in Know Your Rights — this tile points there instead of duplicating legal text.",
      entries: [
        {
          id: "OFF-1",
          name: "The military clause (ask for it before you sign)",
          summary: "Military OneSource: “your lease may include a military clause, which gives you additional protection and allows you to end the lease early under certain circumstances. Such clauses are common in housing leases near military installations. If your lease doesn't have a military clause, ask your landlord or management company if one can be added.” The same page warns: “It is not recommended to sign any documents that take away your rights under the SCRA.” Installation pages echo it (Fort Drum: “It is extremely important that your lease contain a military clause…”). Note the distinction the pack draws: the clause is a lease term; the statutory termination right is the SCRA's — see OFF-2.",
          who: "Anyone signing an off-post lease — the clause costs nothing to ask for and is much harder to add later.",
          body: [],
          flags: [],
          links: [{ label: "Military OneSource — lease termination under SCRA", url: "https://www.militaryonesource.mil/deployment/pre-deployment/break-lease-for-military-deployment-pcs/" }],
          source: "Military OneSource; Fort Drum Housing",
        },
        {
          id: "OFF-2",
          name: "SCRA lease termination — cross-reference (the law lives in Know Your Rights)",
          summary: "The Servicemembers Civil Relief Act gives a statutory right to terminate a residential lease early on qualifying orders (PCS or deployment over 90 days, and leases signed before entering active duty) — with written notice and a copy of orders, and an effective date tied to the rent cycle. The full legal framing — who is covered, the notice mechanics, the deadlines — is carried in this app's Know Your Rights section and is deliberately NOT duplicated here, so the two sections can never drift apart. Military OneSource's published summary of the same right is linked from OFF-1; installation legal services / JAG is the help route on that page.",
          who: "Members with orders and a lease — read Know Your Rights for the law, then take your lease and orders to legal assistance.",
          body: [],
          flags: ["Pack Flag H-6: this tile carries Military OneSource's published summary-level pointer only; the statutory text (50 U.S.C. § 3955) is not reproduced in Housing."],
          links: [],
          source: "Battle Book cross-reference (pack Part 1C); Military OneSource",
        },
        {
          id: "OFF-3",
          name: "Free lease review at the Housing Services Office — before you sign",
          summary: "As published: Fort Drum Housing Division “Provides lease reviews… Inspects rental housing for suitability (safety and habitability). Helps to mediate disputes between landlords and tenants (military members)” and directs members to report to the Housing Services Office before renting and “not to send monetary deposits for housing before contacting the HSO.” Fort Leavenworth HSO: “Before signing an off-post lease, contact HSO.” Fort Rucker: HSO or SJA will review your lease; HSO mediates disputes. The pattern is DoD-wide even though each page is an installation's: the housing office reviews leases free, and the time to use it is before money moves.",
          who: "Every off-post renter — the review is free, published, and explicitly pre-signature.",
          body: [],
          flags: [],
          links: [],
          source: "Fort Drum Housing Division; Fort Leavenworth HSO; Fort Rucker Housing",
        },
        {
          id: "OFF-4",
          name: "AHOUS (Army) and HOMES.mil (DoD) — the official listing systems",
          summary: "AHOUS: “Army Housing Online User Services (AHOUS) is the Army's official website for Soldiers and their families looking for information regarding Army Family Housing, Unaccompanied Housing (UH), or Community (Off-Post) Housing.” URL as published: housing.army.mil — Army-only by its own description, not the DoD-wide system. HOMES.mil: “a service designed to connect service members and their families with community housing rental listings located near U.S. military bases” and “a publicly accessible Department of Defense (DoD) website.” Only registered users can obtain listing addresses and landlord contact information; installation housing offices manage listings via the eMH Referral Component, and property-manager accounts require local housing-office approval. The Air Force Housing Early Assistance Tool (HEAT) is accessed through HOMES.mil after selecting an installation.",
          who: "House-hunters — HOMES.mil for DoD-wide listings, AHOUS for Army depth, and the HSO before any deposit (OFF-3).",
          body: [],
          flags: [],
          links: [
            { label: "HOMES.mil", url: "https://www.homes.mil/homes/DispatchServlet/HomesEntry" },
            { label: "AHOUS", url: "https://www.housing.army.mil" },
          ],
          source: "Fort Drum Housing Division; Navy Housing HOMES.mil FAQ; housing.af.mil",
        },
      ],
    },
  ],
};
