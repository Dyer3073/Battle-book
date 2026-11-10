// Red-Team Gap Fills — Germany Layer (G2 + G5 + G13 + G11), Junior
// Member (G7 + G8), and Retiree (G9 + G10), transcribed from
// ~/workspace/military-app/redteam/gap-fills.md (researched Nov 9,
// 2026, official sources only). The pack governs: conflicts print
// both sides, never blended; unverifiable items ship as flagged
// findings, never filled. Verdicts: G2 SHIPS FULL · G5 / G13 / G11 /
// G7 / G8 / G9 / G10 SHIPS PARTIAL. Germany-layer and retiree
// sections are member + spouse; Credit is member + spouse (family
// finance); Barracks Daily Life is member-only (the member's own
// unaccompanied housing) with locked cards on spouse/future tracks.

import type { PackSection } from "./seven";

/* ------------------------------ Germany ---------------------------------- */

export const GERMANY_SECTION: PackSection = {
  view: "germany",
  title: "Germany Living Guide",
  headSub:
    "The Germany layer the other sections don't cover: VAT relief (NF-1 / NF-2 + UTAP, SHIPS FULL), bringing a pet (EU timeline, pet passport, breed bans), off-post housing mechanics (deposit, Nebenkosten, OHA), and teenagers in Germany (USAREUR licensing — with the 17-vs-18 minimum-age conflict printed — and Summer Hire).",
  intro:
    "Everything here is garrison-checked by design: German rules are federal, but the U.S. Forces programs that sit on top of them (VAT offices, UTAP, housing permission, driver's testing) run per garrison, and the official pages disagree in places. Where they do, both sides print and the card tells you to follow your own garrison's current instruction.",
  standing:
    "No single Germany-wide rule is asserted where the sources publish per-garrison rules: VAT after-the-fact relief (Stuttgart's 7-day arrival window vs. Kaiserslautern's no-after-the-fact rule), UTAP timing (14 days before vs. within 24 hours), the housing permission model, the agent-fee who-pays rule (NOT sourceable as one rule — flagged, never filled), and the teen driving minimum age (17 vs. 18 across official pages).",
  tiles: [
    {
      key: "vat",
      label: "VAT Relief & UTAP",
      tileSub: "Entries G2-1–G2-3 · SHIPS FULL — garrison VAT / MWR pages",
      intro: "Germany's VAT is already in the sticker price. Relief runs through the U.S. Forces VAT Office as the procurement agency — never as a personal discount at the register.",
      entries: [
        {
          id: "G2-1",
          name: "How VAT relief works for SOFA-status personnel",
          summary:
            "Germany charges Value-Added Tax (VAT, MwSt) of 19% (full rate, most items) or a reduced 7% (basic food staples, some magazines, books, hotel stays) on most goods and services, already in the sticker price. Eligible U.S. Forces personnel do not get a personal discount at the register: as the VAT offices publish it, “there exists NO direct entitlement to VAT relief of the individual member of the U.S. Forces! VAT relief only applies to procurements by a procurements agency of the U.S. Forces, here the VAT office.” The member presents a valid VAT form when the order is placed, and the vendor extracts the VAT from the price for that qualifying purchase. The program is voluntary — German vendors are not required to accept VAT forms. Processing tax relief after an order was placed or a commitment was made is not authorized.",
          who: "DoD personnel stationed in or TDY to Europe, for personal purchases. Start at your installation U.S. Forces VAT Office (Tax Relief Office): the sponsor first establishes an account with a registration form; bona fide household members may be added to the sponsor's account.",
          body: [
            "Examples the Kaiserslautern page lists for 19% extraction include vehicle purchases and repairs, clothing, furniture, electronics, rental cars, heating oil, many non-staple groceries, and restaurant bills; examples for 7% include basic grocery staples, some magazines/books, and hotel stays (extras such as breakfast taxed at 19%).",
          ],
          flags: [],
          links: [
            { label: "Tax avoidance program (VAT) — USAG Rheinland-Pfalz / Kaiserslautern MWR", url: "https://kaiserslautern.armymwr.com/programs/value-added-tax-vat" },
          ],
          source: "Tax avoidance program (Value Added Tax — VAT) — USAG Rheinland-Pfalz / Kaiserslautern MWR",
        },
        {
          id: "G2-2",
          name: "The VAT forms — NF-1 and NF-2",
          summary:
            "Two form types, bought / issued from the installation VAT office BEFORE you buy, matched to the size of the purchase: the NF-1 is for purchases of up to 2,499.99 Euros (not including VAT); the NF-2 is for purchases of 2,500 Euros or higher (not including VAT). One purchase may not be split across multiple small forms to stay under the limit. VAT offices are authorized to issue up to 10 NF-1 forms and one NF-2 form at a time per household. An NF-2 purchase requires a cost estimate, cost proposal, or proforma invoice to the VAT Office before the purchase; some NF-2 transactions may require IMCOM-E approval and take up to 48 hours. Published pricing (Kaiserslautern, effective April 1, 2022): NF-1 $10.00 per form (reprints $4); NF-2 $100.00 per form. Validity: an unpriced NF-1 is valid two years from issuance; a priced NF-2 is valid three months.",
          who: "Eligible U.S. Forces members in Germany — any VAT Office in Germany; in practice, register and obtain forms at your installation VAT / Tax Relief Office before the purchase.",
          body: [
            "Rules as published: you must have a valid VAT form with you when placing an order or otherwise committing to a purchase — obtaining a VAT form after order placement is not permitted; the form must be issued prior to signing any contracts; repetitive purchases from the same vendor may be combined on one form only if within one month, total does not exceed 2,499.99 Euros, and all purchases are processed no later than the last day of that month. VAT forms may not be used for long-term contracts such as utilities or cellular contracts (see G2-3 for utilities), for ineligible people, for revenue-generating activities, or for real-estate purchase/sale expenses.",
            "CONFLICT, both sides printed: Kaiserslautern publishes no after-the-fact issuance — if you signed / concluded the contract without a VAT form in hand, the VAT Office is not authorized to issue one for that transaction. USAG Stuttgart's newcomers page also says VAT forms “MUST be purchased in advance,” but adds a narrow arrival exception: individuals have seven calendar days to purchase a VAT form retroactively, and that window applies from the first day of arrival in country (Stuttgart gives the hotel / rental-car on arrival example); after the seven-day window, VAT forms can only be used with future dates. Do not treat the Stuttgart arrival window as a general Germany-wide backdating rule — check your own garrison VAT office.",
          ],
          flags: [
            "VAT backdating scope (pack Flag 1): Stuttgart's seven-day retroactive window could not be verified as a Germany-wide rule on the Rheinland-Pfalz, Wiesbaden, or Bavaria VAT pages checked; Kaiserslautern publishes the opposite general rule. Needs a current AER 215-6 or IMCOM-Europe VAT source to settle scope.",
            "VAT form prices may be stale (pack Flag 2): NF-1 $10 / NF-2 $100 are printed exactly as published, but the Kaiserslautern page states those prices were effective April 1, 2022. No newer official price list was found. Verify current prices at the local VAT office.",
          ],
          links: [
            { label: "Tax avoidance program (VAT) — Kaiserslautern MWR", url: "https://kaiserslautern.armymwr.com/programs/value-added-tax-vat" },
            { label: "For Newcomers — U.S. Army Garrison Stuttgart (home.army.mil)", url: "https://home.army.mil/stuttgart/newcomers" },
          ],
          source: "Kaiserslautern MWR VAT page; USAG Stuttgart newcomers page (home.army.mil)",
        },
        {
          id: "G2-3",
          name: "Utility-bill VAT relief — UTAP, not VAT forms",
          summary:
            "Utilities run through a separate program, the Utility Tax Avoidance Program (UTAP), through the Tax Relief Office — not through NF-1 / NF-2 VAT forms, which may not be used for utilities or other long-term contracts. As Wiesbaden publishes: UTAP was established by the finance ministries of the NATO Forces to allow authorized customers tax-free utilities with participating utility companies; DoD mandates use of UTAP to secure tax relief on residential consumption of electricity, gas and water in Germany; the individual must receive utilities from a provider that has a contractual agreement with the Tax Relief Office (TRO). Published savings: 19% VAT on electricity and gas, and, for select companies in some states, up to 11% additional electricity tax and up to 7% gas eco tax. Published registration fee: $99 (Wiesbaden states it as reimbursable through the miscellaneous expense allowance; Kaiserslautern states it as due upon each move or change in utilities provider).",
          who: "Service members assigned to Europe, U.S. civilians working for the U.S. Forces, and some contractors under the TESA Agreement. Providing banking information is a requirement to enter UTAP. Enroll at your installation VAT / UTAP / Tax Relief Office.",
          body: [
            "Boundary as published: some utilities that fall under additional costs (“Nebenkosten”) paid directly to the landlord are not covered by UTAP; for people who own their residence, all utility costs are covered by UTAP, as published by Wiesbaden.",
            "TIMING CONFLICT, both sides printed: Wiesbaden publishes that the customer completes the UTAP registration form and submits it to the UTAP office no later than 14 days before the move-in inspection, and should schedule the UTAP appointment 14 days in advance (with a new 24-hour energy supplier switch requirement and MaLo ID process from June 2025). Grafenwoehr / USAG Bavaria MWR publishes that you must register for UTAP through the Tax Relief Office within 24 hours of your move-in date; Ansbach MWR publishes a June 6, 2025 update requiring registration within 24 hours (one business day). Follow your own garrison's current instruction — do not assume the 14-day and 24-hour instructions are interchangeable.",
          ],
          flags: [
            "UTAP timing conflict unresolved (pack Flag 3): the Wiesbaden 14-day instruction and the Bavaria/Ansbach 24-hour instruction appear to describe different steps or different garrison implementations of the June 2025 24-hour supplier-switch change. No single USAREUR/IMCOM-E UTAP regulation page was found to reconcile them.",
          ],
          links: [
            { label: "Utility Tax Avoidance Program (UTAP) — Wiesbaden MWR", url: "https://wiesbaden.armymwr.com/programs/utility-tax-avoidance-program-utap" },
            { label: "Utilities Tax Avoidance Program (UTAP) — Grafenwoehr MWR (USAG Bavaria)", url: "https://grafenwoehr.armymwr.com/programs/utilities-tax-avoidance-program-utap" },
          ],
          source: "UTAP — Wiesbaden MWR; UTAP — Grafenwoehr MWR (USAG Bavaria)",
        },
      ],
    },
    {
      key: "pets",
      label: "Bringing a Pet to Germany",
      tileSub: "Entries G5-1–G5-3 · USDA APHIS, Your Europe (EU Commission), German Customs (Zoll)",
      intro: "The EU second layer for dogs, cats, and ferrets on a non-commercial move from the United States: the step order matters, the EU pet passport comes after arrival, and Germany's breed rules sit on top of the EU rules.",
      entries: [
        {
          id: "G5-1",
          name: "Germany entry timeline — step-ordered checklist",
          summary:
            "For a dog, cat, or ferret coming from the United States to Germany on a non-commercial move, the order matters: a rabies vaccination given before the microchip, or without scanning the microchip first, does not count under EU rules as published by USDA APHIS.",
          who: "Families shipping a dog, cat, or ferret from the U.S. to Germany. Start with a USDA-accredited veterinarian in the United States; entry is through a designated travellers' point of entry in the EU country of destination.",
          body: [],
          steps: [
            "ISO microchip first — APHIS: your pet must have a working microchip (transponder) before getting its rabies vaccination for travel to the EU, and the veterinarian must always scan the microchip before giving a rabies vaccination. ISO-compliant numbers are usually 15 digits and meet ISO 11784 and ISO 11785; if a working chip is not ISO-compliant, travel with a scanner that can read it or have a second ISO-compliant chip implanted, and list both chips on the health certificate.",
            "Rabies vaccination after the microchip — administered by an authorized veterinarian. The first vaccination after microchip implantation, or after any lapse in coverage, is a “primary” vaccination under EU rules; for pets vaccinated in the United States, a primary vaccination is only valid for 1 year even if a 3-year vaccine was given, and a booster must be given within 12 months or coverage lapses. Your Europe: the pet must be at least 12 weeks old before receiving its first / primary vaccination.",
            "Wait after a primary vaccination — at least 21 days, or the time designated by the rabies vaccine manufacturer, prior to traveling to the port of entry (some manufacturers recommend 30 days — confirm with the veterinarian and have the period recorded). After a valid booster given with no lapse, the pet can travel less than 21 days after the booster, but the previous (primary) vaccination must also be included on the health certificate.",
            "Health certificate in the final window — a USDA-accredited veterinarian (or military veterinarian, as APHIS's EU steps describe the issuer route) issues the EU non-commercial health certificate and submits it through VEHCS for USDA endorsement. APHIS's EU steps publish: the certificate is valid for 30 days after the accredited veterinarian issues it, and USDA must endorse the completed certificate within 10 days of the pet's arrival in the EU. Your Europe publishes: the certificate must be issued by an official State vet in the country of departure not more than 10 days before the pet arrives in the EU, and is then valid for travel between EU countries for 6 months from that date or until the anti-rabies vaccination expires, whichever is first. Travel with all relevant rabies vaccination certificates, with the microchip number on them.",
          ],
          flags: [
            "APHIS Germany health-certificate window wording (pack Flag 4): the APHIS Germany HTML page as fetched was truncated to the microchip and rabies sections; the 30-day validity / endorse-within-10-days wording is sourced from APHIS's current EU pet-travel steps and the 10-day issuance wording from Your Europe. A Germany-specific bilingual (German/English) health-certificate requirement, mentioned by non-official relocation sources, was NOT verified on an official APHIS or EU page and is not asserted. Pets that do not meet EU requirements may be refused entry or quarantined on arrival at the owner's expense, as APHIS publishes.",
          ],
          links: [
            { label: "Pet Travel From the United States to Germany — USDA APHIS", url: "https://www.aphis.usda.gov/aphis/pet-travel/by-country/eu/pettravel-germany" },
            { label: "EU rules on travelling with pets — Your Europe (European Commission)", url: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_en.htm" },
          ],
          source: "USDA APHIS — Pet Travel to Germany; Your Europe (European Commission)",
        },
        {
          id: "G5-2",
          name: "EU pet passport — after arrival",
          summary:
            "The EU pet passport is not the document a pet from the United States uses to enter the EU — entry from a non-EU country is on the EU animal health certificate (G5-1). Once the owner is resident in the EU, an EU pet passport can be issued in the EU and then serves as the pet's identification and rabies-record document for travel between EU countries. As Your Europe publishes: it follows an EU standard model, is mandatory for travel between EU countries, is only issued to pet owners who are resident in the EU, contains the pet's description and details including its microchip or tattoo code, its animal health records (e.g. rabies vaccination), and the contact details of the owner and the issuing vet; you can get one for a dog, cat, or ferret from any authorised vet, and it is valid for life as long as the pet's health information remains in date. Do not assume a U.S. veterinarian can issue this document — issuance is by an authorised veterinarian in the EU country, i.e. after arrival in Germany.",
          who: "Pet owners resident in the EU after arrival, for travel between EU countries. Where: an authorised veterinarian in Germany (or another EU country of residence) after arrival — not from USDA APHIS and not before departure as an entry document.",
          body: [],
          flags: [
            "EU pet passport and SOFA residence (pack Flag 6): Your Europe publishes that an EU pet passport is “only issued to pet owners who are resident in the EU.” Whether / how SOFA status in Germany counts as that residence for passport issuance was not addressed on any official page checked. This card therefore does not promise issuance to any specific category of SOFA personnel.",
          ],
          links: [
            { label: "EU rules on travelling with pets — Your Europe", url: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_en.htm" },
          ],
          source: "Your Europe (European Commission); European Commission — Travelling with your pets in Europe",
        },
        {
          id: "G5-3",
          name: "Breed restrictions — federal import ban plus state and installation check",
          summary:
            "Germany has a federal import ban on named dangerous-dog breeds, and a second layer underneath it: breeds that the German federal state (Land) where the dog will be permanently kept presumes dangerous also may not be imported or transferred from abroad. German Customs (Zoll) publishes that the Dog Transfer and Import Restrictions Act, in force since 2001, prohibits the import or transfer into Germany of Pit Bull Terrier, American Staffordshire Terrier, Staffordshire Bull Terrier, and Bull Terrier, and crossbreeding of these dogs with one another or with other breeds. On top of the German rules, installation and housing rules can add their own limits. The published rule for a family is therefore: check the federal ban first, then check your state and your installation / housing rules before you ship a dog. This card makes no ruling for any specific dog at any specific address.",
          who: "Families considering shipping a dog to Germany. Before travel: German Customs (Zoll) dangerous-dogs page and the competent public order office for the Land of permanent keeping. After assignment: your installation housing office for installation / government-housing pet rules.",
          body: [
            "Zoll publishes narrow exceptions, with original documents required on entry (for example pedigree certificate, vaccination certificate, character test certificate, and other certificates from the competent office of public order): dogs returning / being reimported from the present stock in Germany to a Land where the owner has authorisation to keep the dog; service dogs for public services or armed forces, guide dogs, dogs accompanying the disabled, and disaster / rescue protection dogs; and dangerous dogs accompanying individuals not staying in Germany longer than four weeks (particularly intended for tourists). Zoll directs general inquiries to the competent public order offices and the central customs information service.",
          ],
          flags: [
            "APHIS silence on breed bans (pack Flag 5): the USDA APHIS Germany page as fetched does not mention the German federal breed import ban. The ban on this card rests solely on German Customs (Zoll), the enforcing federal authority as it publishes. This card does not imply APHIS endorses or lists the ban.",
          ],
          links: [
            { label: "Dangerous dogs — Customs online (German Customs / Zoll)", url: "https://www.zoll.de/EN/Private-individuals/Travel/Entering-Germany/Restrictions/Dangerous-dogs/dangerous-dogs_node.html?ref=perpetual.care" },
          ],
          source: "Dangerous dogs — German Customs (Zoll), customs online",
        },
      ],
    },
    {
      key: "housing-de",
      label: "Off-Post Housing in Germany",
      tileSub: "Entries G13-1–G13-3 · garrison housing offices — check in before you sign",
      intro: "In Germany the installation housing office is not just a listings board. Depending on the garrison, it controls assignment to government quarters, issues the permission that makes private rental possible, runs a mandatory housing brief, and reviews the rental contract. Signing first can cost the allowances that pay for the home.",
      entries: [
        {
          id: "G13-1",
          name: "The housing office's role — check in before you sign",
          summary:
            "It varies by garrison, as published — do not carry one garrison's rule to another. USAG Bavaria publishes a mandatory assignment policy: service members from all branches on PCS orders will be mandatorily assigned to government housing; private rental is only an option with a Certificate of Non-Availability (CNA), issued when no government unit is projected to be available within 60 days; service members and U.S. government civilians should not enter into a rental contract (written or verbal) in advance of the housing brief or in-processing step. The Bavaria FAQs publish the consequence in plain terms: if you sign for a private rental without permission from the Housing Office, you will not be entitled to OHA/MIHA and all expenses will be out of pocket. USAG Rheinland-Pfalz publishes a different threshold: soldiers of all ranks are required to live on post until a 95% occupancy rate is reached. USAG Wiesbaden publishes that rental agreements will be negotiated and signed at the Housing Services Office (HSO).",
          who: "Everyone arriving in Germany on PCS orders. Where: your garrison Housing Services Office / Housing Division on arrival — within two days of arrival in Rheinland-Pfalz as published; listings route as published: HOMES.mil. After signing in Bavaria, schedule contract review with the housing office within two business days from the date the landlord signs, for a date not to exceed four work days.",
          body: [
            "Bavaria detail as published: U.S. Government civilians must attend a mandatory housing brief (bring PCS orders and a completed DD Form 1746). Rheinland-Pfalz detail: to live in local non-government housing, soldiers must be granted a statement of non-availability or an exception to policy, and DoD civilians must go through the Housing Office before signing a contract; accompanied Kaiserslautern Military Community housing is managed by the Air Force Housing Office at Vogelweh as published. Wiesbaden detail: if you find a place on your own, the lease should still be negotiated in the HSO office to protect your interests (Wiesbaden Off-Post Housing Briefing).",
          ],
          flags: [
            "Housing permission model varies (pack Flag 7): mandatory assignment (Bavaria), the 95% occupancy threshold (Rheinland-Pfalz), and HSO-negotiated signing (Wiesbaden) are three different published models. No Army-in-Europe-wide housing page was found that harmonises them — this card presents “check your garrison” by design.",
          ],
          links: [
            { label: "Private Rental — U.S. Army Garrison Bavaria (home.army.mil)", url: "https://home.army.mil/bavaria/housing/privaterental" },
            { label: "Housing Services Office — USAG Rheinland-Pfalz (home.army.mil)", url: "https://home.army.mil/rheinland-pfalz/about/directorates-support-offices/directorate-public-works-dpw/housing-services-office" },
          ],
          source: "USAG Bavaria Private Rental; USAG Rheinland-Pfalz Housing Services Office (home.army.mil)",
        },
        {
          id: "G13-2",
          name: "German lease norms — deposit and agent fees, as housing offices publish them",
          summary:
            "Two up-front costs surprise families: the security deposit (Kaution) and any real-estate agent fee (Provision). Deposit ranges as published, printed together: USAG Ansbach's guide — “usually 2 or 3 months' rent”; USAG Bavaria (for Advance Housing Allowance purposes) — “typically equals two months rent”; USAG Wiesbaden's briefing — two months' base rent under the USAREUR rental agreement, but can be as high as three months on the economy, and may be paid in 3 installments; the German Landlord-Tenant Law information paper hosted by USAG Rheinland-Pfalz — under German law landlords may ask for a deposit not to exceed three months' net rent (§ 551 BGB), payable over three months in three equal monthly shares. Agent fees: NO single who-pays rule is published in this app — the garrison framings do not line up into one Germany-wide rule (see the flag). Housing offices also warn that German verbal agreements can be binding — which is why the housing brief comes before any commitment.",
          who: "Families renting on the German economy. Housing brief and contract review at your garrison Housing Services Office before signing; listings with no agent fee are marked “Provisionsfrei” in German ads, as the Ansbach guide publishes.",
          body: [
            "Agent-fee framings as garrisons publish them: Bavaria publishes “Use German real estate agencies (immobilien) at your own risk. These agencies charge hidden fees and verbal agreements can be binding,” and publishes that MIHA for realtor-fee reimbursement is only in special cases — for example five or more bedrooms, an ADA-compliant home for a handicapped family member, family members enrolled in EFMP, or circumstances deemed unique and unusual by the Housing Chief or Garrison Commander. The Baumholder Off-Post Housing Handbook (USAG Rheinland-Pfalz) publishes a different framing for MIHA Rent: allowable realtor fees will not exceed two months' rent.",
          ],
          flags: [
            "Agent-fee who-pays rule NOT SOURCEABLE as one rule (pack Flag 8): allowed sources publish the Bavaria hidden-fees / MIHA-special-cases framing, Baumholder's up-to-two-months MIHA Rent framing, and a Wiesbaden briefing fragment indicating no realtor fees are reimbursed, which could not be read in full context. The German Bestellerprinzip (who commissions the agent pays) was found only in non-official sources and is NOT asserted. No single tenant-pays / landlord-pays rule is published in this app.",
            "Deposit installment and return timing (pack Flag 9): Wiesbaden's briefing publishes deposit return / landlord reconciliation periods in fragmented PDF text that could not be verified as clean, quotable published text. Not asserted beyond the annual utility settlement and deposit-withholding-until-settlement points on G13-3.",
          ],
          links: [
            { label: "Off-post rental 101 — USAG Ansbach (home.army.mil)", url: "https://home.army.mil/ansbach/application/files/5815/5109/9907/AnsbachOffPostHouseHunting.pdf" },
            { label: "Private Rental — U.S. Army Garrison Bavaria", url: "https://home.army.mil/bavaria/housing/privaterental" },
          ],
          source: "USAG Ansbach off-post house-hunting guide; USAG Bavaria Private Rental; USAG Wiesbaden Off-Post Housing Briefing",
        },
        {
          id: "G13-3",
          name: "Utilities, Nebenkosten, and the OHA tie-in",
          summary:
            "German rent is usually quoted in parts, as the Ansbach guide teaches the vocabulary: KM = Kaltmiete, rent “cold,” without any utilities; WM = Warmmiete, rent “warm,” usually including some utilities such as heat — check what is not included; NK = Nebenkosten — utilities / additional operating costs, “listed separately as an estimate” (ads show e.g. “440,- EUR KM + NK”). Whether a utility is billed by a utility company in your name, or charged through the landlord as Nebenkosten, changes both how you pay it and whether UTAP can cover it (see G2-3 — Nebenkosten paid directly to the landlord are not covered by UTAP). OHA tie-in as Bavaria publishes it: military personnel living off-post overseas receive Overseas Housing Allowance (OHA) instead of BAH; rent caps are established by rank; the member receives OHA based on rent or the rent cap, whichever is less, plus a monthly utility allowance; MIHA is a separate one-time allowance. That utility allowance is a flat published allowance route — not a promise that OHA plus the utility allowance will equal the actual Nebenkosten or the annual settlement bill.",
          who: "Off-post renters in Germany. Lease and Nebenkosten terms: garrison Housing Services Office at contract review. Direct utility-company accounts and tax relief: UTAP / Tax Relief Office (G2-3). OHA amount and start: finance, on the housing-approved lease.",
          body: [
            "Settlement mechanic as published in Wiesbaden's HSO briefing checklist for military customers: the prorated amount paid for utilities is for estimated usage; the tenant receives a final bill annually showing money paid versus utilities actually used, and may receive money back or be required to pay additional money depending on actual consumption; all utilities are pending a final bill/settlement unless they are “included” in the monthly rent; and at move-out the landlord can keep the security deposit (or part of it) until outstanding/final bills/damages are settled.",
          ],
          flags: [],
          links: [
            { label: "Off-post rental 101 — USAG Ansbach", url: "https://home.army.mil/ansbach/application/files/5815/5109/9907/AnsbachOffPostHouseHunting.pdf" },
            { label: "Private Rental — U.S. Army Garrison Bavaria", url: "https://home.army.mil/bavaria/housing/privaterental" },
          ],
          source: "USAG Ansbach house-hunting guide; USAG Bavaria Private Rental; Wiesbaden HSO briefing checklist",
        },
      ],
    },
    {
      key: "teens",
      label: "Teenagers in Germany",
      tileSub: "Entries G11-1–G11-3 · USAREUR licensing + Summer Hire",
      intro: "Driving and working as a dependent teen in Germany: the USAREUR license is built on top of a valid U.S. license, the minimum age conflicts across official pages, and the recurring on-post job route is the Summer Hire program.",
      entries: [
        {
          id: "G11-1",
          name: "German driving age and why a U.S. teen license does not simply transfer",
          summary:
            "A U.S. teen does not drive in Germany on a U.S. license alone: driving a privately owned vehicle in Germany requires both a valid stateside (or other-country, with English translation) license and a U.S. Forces Certificate of License — the USAREUR license, which is “nothing more than a translation of a valid U.S. license” (41st Field Artillery Brigade PCS guide). It is not a first license, and a learner's permit is not a license for this purpose. CONFLICT ON MINIMUM AGE, printed all sides: Benelux's newcomers orientation publishes “The driving age is 18 and above in most European countries”; Buechel Air Base publishes minimum age 18 (17 with an exception to policy); USAG Rheinland-Pfalz, Baumholder publishes “The minimum age to operate a POV in Germany is 17 with a valid, unrestricted stateside license. Learner's permits are not accepted”; Kalkar publishes that teenagers with a valid stateside license can take the USAREUR course and tests at 17, but must be 18 before they can drive without a licensed adult in the car, and they can only drive in Germany. Publish the age as garrison/registry-dependent within the 17–18 range and confirm with your installation Driver's Testing Station — not as one settled number.",
          who: "Teen dependents in Germany with (or seeking) a U.S. license. Where: installation Driver's Training and Testing Station / Vehicle Registration Office; eligibility is set by the USAREUR Registry of Motor Vehicles. Personnel arriving without a valid stateside or foreign license must complete driver's training on the local economy at their own expense (Baumholder).",
          body: [
            "The 41st Field Artillery Brigade guide also publishes, under the Status of Forces Agreement, that USAREUR is not allowed to issue a motorcycle license or endorsement to soldiers, dependents, and U.S. civilians who did not already have one on their U.S. license prior to arrival in Germany. Exceptions to the minimum-age rules are to be formally approved by the USAREUR Registry of Motor Vehicles (Baumholder).",
          ],
          flags: [
            "Driving minimum age conflict (pack Flag 10): official U.S. Forces sources publish 18 (Benelux brief; Buechel, with 17 by exception), 17 with a valid unrestricted stateside license (Rheinland-Pfalz Baumholder), and 17-to-test / 18-to-drive-alone (Kalkar). No current AER 190-1 / Registry of Motor Vehicles page was found to settle which rule controls for a dependent teen today. All three print.",
          ],
          links: [
            { label: "US, International, and USAREUR Licenses — 41st Field Artillery Brigade (army.mil)", url: "https://www.41fab.army.mil/Resources/Newcomer-Resources/PCS-Guide/US-International-and-USAREUR-Licenses/" },
            { label: "Dulmen Virtual Newcomers Orientation Brief — USAG Benelux (home.army.mil)", url: "https://home.army.mil/benelux/application/files/8616/3947/7804/dulman-newcomers-orientation-brief.pdf" },
          ],
          source: "USAG Benelux newcomers brief; 41st FAB PCS guide; MilitaryINSTALLATIONS (Buechel / Baumholder / Kalkar)",
        },
        {
          id: "G11-2",
          name: "Dependent licensing at 18 through USAREUR",
          summary:
            "At 18, with a valid U.S. license already in hand, a dependent gets licensed to drive in Germany through the USAREUR route: online training and exam first, then in-person issue at the testing station. There is no separate German civilian license process in this route. As the 41st Field Artillery Brigade publishes the pre-arrival order, complete through the JKO Course Catalog, in order: (1) U.S. Forces Driver's Training Program for Europe (Prefix “USA,” Course Number “-007”) and (2) the Final Course Exam (USA-007B); study material is the U.S. Army Europe Driver's Handbook, AEP 190-34. USAG Benelux publishes that the pre-exam requires a minimum score of 85%. The U.S. Forces Certificate of License is valid only within Germany — to drive outside Germany in a U.S. Forces-registered vehicle, an International Driving Permit is required (Baumholder).",
          who: "Dependents 18+ with a valid U.S. license. Training and exam: Joint Knowledge Online (JKO) — spouses/dependents use the Non-government Personnel / Sponsored Account Registration (Buechel). Issue: installation Driver's Training and Testing Station / Licensing Office during in-processing, with valid U.S. license, ID/orders as the local station requires, and the printed JKO certificate (certificate valid for 60 days, as Buechel publishes).",
          body: [],
          flags: [],
          links: [
            { label: "US, International, and USAREUR Licenses — 41st Field Artillery Brigade", url: "https://www.41fab.army.mil/Resources/Newcomer-Resources/PCS-Guide/US-International-and-USAREUR-Licenses/" },
          ],
          source: "41st Field Artillery Brigade PCS guide; USAG Benelux newcomers brief; MilitaryINSTALLATIONS (Buechel / Baumholder)",
        },
        {
          id: "G11-3",
          name: "On-base teen employment — Summer Hire / Youth Employment",
          summary:
            "The recurring on-post route published for dependent youth in Europe is the Army in Europe Youth Summer Hire Program: a short, temporary summer program in routine on-post jobs (general clerical and light laborer positions), run through the Civilian Human Resources Agency (CHRA) Europe Region, with applications through USAJOBS announcements by location. U.S. Army Europe and Africa's Summer Hire press release publishes eligibility as U.S. family member dependents ages 14–22; a later USAJOBS Summer Hire announcement summary publishes the same framing in current form: an unmarried U.S.-citizen family member 14 through 22 years of age, or an unmarried non-U.S.-citizen family member in Germany 15 through 22 years of age, in routine, nonhazardous, unskilled clerical or labor positions that do not require experience or training. It is not year-round teen employment and it is not a CYS job — CYS program-assistant jobs are a different, adult route. Dates, announcement numbers, and application windows change every year: pull the current year's announcement for your garrison rather than treating a past year's dates as current.",
          who: "Dependent youth 14–22 in Europe (15–22 for non-U.S.-citizen family members in Germany, as the USAJOBS summary publishes). Where: CHRA-E Summer Hire announcements on USAJOBS, by installation / community; applicants should be available for the entire program period because the program is temporary (six weeks in the 2022 announcement, June 21–July 29 throughout Europe).",
          body: [],
          flags: [
            "Summer Hire currency (pack Flag 11): the newest garrison-agnostic official announcement located was the U.S. Army Europe and Africa 2022 press release; the Bavaria detail article is from 2015. No 2025 or 2026 CHRA-E Summer Hire page confirming the program still runs on the same terms was opened. Ages and route publish as announcement-published; families are directed to the current year's USAJOBS announcement.",
            "DoDEA / CYS teen routes not covered (pack Flag 12): no DoDEA page and no installation CYS page publishing a distinct teen employment program (separate from Summer Hire and from adult CYS program-assistant jobs) was found. This app does not invent a CYS teen-hire route from adult CYS vacancies.",
          ],
          links: [
            { label: "Press Release — 2022 Summer Hire Program — U.S. Army Europe and Africa", url: "https://www.europeafrica.army.mil/ArticleViewPressRelease/Article/2972734/press-release-2022-summer-hire-program/" },
          ],
          source: "U.S. Army Europe and Africa 2022 Summer Hire press release; Army.mil Bavaria Summer Hire article (2015)",
        },
      ],
    },
  ],
};

/* ------------------------------- Credit ---------------------------------- */

export const CREDIT_SECTION: PackSection = {
  view: "credit",
  title: "Building Credit From Zero",
  headSub:
    "Starting a credit file from nothing, the CFPB way: how a score is built (with the FICO percentages flagged as one CFPB training transcript's framing), secured cards, credit-builder loans (with the CFPB term conflict printed), authorized-user status, and the fee-harvester warning with the CARD Act's 25% first-year fee limit.",
  intro:
    "No credit history is not bad credit — it is an empty file. These five cards carry the starter routes exactly as the Consumer Financial Protection Bureau (CFPB) and FINRED publish them, including where CFPB's own publications disagree with each other. Nothing here is personalized financial advice; for help reading your reports, FINRED directs you to an accredited personal financial manager or counselor at your nearest Military and Family Support Center.",
  standing:
    "Percentages discipline: CFPB's consumer-facing credit-score page publishes NO percentages — it says only that repayment history is “the number one factor.” The 35% / 30% / 15% figures on G7-1 come solely from a CFPB FinEx training transcript describing how FICO scores are “generally calculated,” and they are flagged as such — never presented as applying to every scoring model.",
  tiles: [
    {
      key: "build",
      label: "Build From Zero",
      tileSub: "Entries G7-1–G7-5 · CFPB + FINRED starter routes",
      intro: "How a score is built, and the four published starter routes: secured card, credit-builder loan, authorized user, and low-limit retail cards.",
      entries: [
        {
          id: "G7-1",
          name: "How a Credit Score Is Built",
          summary:
            "A credit score is a number worked out from your credit report — your record of borrowing and paying back. If you have no history yet, there is little or nothing to score; paying on time, over time, is what builds it, and there are many different scores, not one single score. CFPB's Ask CFPB page frames it without percentages: “Most credit scores consider repayment history as the number one factor for building a strong credit score”; keep balances low — “Many experts recommend using less than 30 percent of your total credit limit. Consumers with the highest credit scores often use less than 10 percent”; “A long credit history will help your score”; and “Only apply for credit that you need.” FINRED adds: your report and your score are not the same thing, and active-duty and National Guard members can get free electronic credit monitoring from Equifax, Experian, and TransUnion.",
          who: "Anyone starting (or restarting) a credit file. Start at AnnualCreditReport.com for your free reports — one free report every 12 months from each of the three main companies, as FINRED publishes.",
          body: [
            "CFPB's FinEx training transcript describes how FICO scores are “generally calculated” with percentages, printed here exactly as that transcript publishes them: payment history “makes up 35% of the score” and is “the biggest factor in FICO scores”; amounts owed “makes up 30% of FICO scores” and includes the credit utilization rate; length of credit history “makes up 15% of a FICO score.” That transcript describes two more factors — types of credit used, and new credit / inquiries — without giving them percentages, so no percentages are printed for them here. Scores “often range from 300 to 850” as published in that transcript.",
          ],
          flags: [
            "Percentages are FICO framing, from a CFPB training transcript only (pack Flag 3): CFPB's consumer-facing Ask CFPB credit-score page publishes NO percentages. The 35% / 30% / 15% figures come solely from CFPB's FinEx Podcast Module 1.1 transcript. Do not present 35/30/15 as applying to every scoring model.",
            "FINRED CreditHistory page not directly retrieved (pack Flag 6): FINRED's own materials point readers to finred.usalearning.gov/Money/CreditHistory for “Improving Credit,” but that page's contents were not fetched in the research pass. These entries use FINRED's Operation: Monitor Your Credit page, which was fetched and verified.",
          ],
          links: [
            { label: "How do I get and keep a good credit score? — Ask CFPB", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/" },
            { label: "FINRED — Operation: Monitor Your Credit", url: "https://finred.usalearning.gov/Money/OperationCredit" },
          ],
          source: "Ask CFPB; CFPB FinEx Podcast Module 1.1 Transcript (2022-08); FINRED Operation: Monitor Your Credit",
        },
        {
          id: "G7-2",
          name: "Secured Credit Cards — How They Work",
          summary:
            "A starter card backed by your own cash deposit. If you cannot qualify for a regular credit card, this is the route CFPB names. The deposit is not the payment — you still get a bill and must pay it on time, every time. CFPB: “Many banks and credit unions offer secured credit cards. With most of these cards, your credit line starts out small. You put an amount equal to your credit limit in an account as a deposit.” And: “As you show you can pay on time, your credit limit may be raised and you may have your deposit refunded. Fees and interest rates can be high for secured cards, but using one can help you to establish a credit record.” Worked example (Ask CFPB): “You put in an amount of cash, for example $500. Then, you can spend up to that amount on your credit card. When you pay the secured credit card bill, you restore your spending amount back to the amount you put in.”",
          who: "Members with no file or a thin file. Where: your bank or credit union, as CFPB directs — “Ask your bank, credit union, or local nonprofit credit counseling agency.” Before you apply, confirm the card reports your payments to the nationwide credit reporting companies; a prepaid card does not build credit.",
          body: [
            "CFPB's training transcript adds the check that makes it build credit at all: the institution holds the deposit, extends a credit line matching the deposit amount, and typically reports card activity to the credit reporting companies. Watch for high fees and high interest rates, as CFPB warns; pay the balance off every month to avoid finance charges, as CFPB advises in the same rebuild guide.",
          ],
          flags: [],
          links: [
            { label: "How to rebuild your credit — CFPB", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/how-to-rebuild-your-credit/" },
            { label: "What are some ways to start or rebuild a good credit history? — Ask CFPB", url: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/" },
          ],
          source: "CFPB — How to rebuild your credit; Ask CFPB (en-2155)",
        },
        {
          id: "G7-3",
          name: "Credit-Builder Loans — How They Work",
          summary:
            "A small loan run in reverse: you do not get the money up front. You make small payments first, the payments are reported, and you get the money at the end — so you finish with both a payment record and savings. Ask CFPB: “You build credit and savings at the same time, through a loan from your bank or credit union. The money is not yours for spending—instead, it is held for you, it is held for you as savings. You pay the loan in small payments, usually over six to 24 months. At the end of that time, you receive the full amount you paid.” CFPB's training transcript gives the size range as published there: “often $300 to $1,000, into a locked savings account,” paid back over six to 24 months, with payments reported to the credit reporting companies.",
          who: "Members building a first file through a bank or credit union (credit unions and nonprofit financial institutions, as the CFPB FinEx transcript publishes). Check the exact term and which bureaus are reported to before you sign.",
          body: [
            "Variant printed, not harmonized: CFPB's FinEx “Get Smart About Credit” transcript describes the same product as “most commonly offered by credit unions and nonprofit financial institutions” with “12- to 24-month terms” and payments “reported to at least one credit bureau” — so the term range and the reporting count differ between CFPB publications (6–24 months / the nationwide companies, vs. 12–24 months / at least one bureau).",
          ],
          flags: [
            "Credit-builder loan terms conflict between CFPB publications (pack Flag 4): Ask CFPB and the CFPB Podcast Module 1.1 transcript publish 6–24 months; the CFPB FinEx “Get Smart About Credit” transcript publishes 12–24 months and “at least one credit bureau” reporting. Both print. Unresolved — no official page reconciles them.",
          ],
          links: [
            { label: "What are some ways to start or rebuild a good credit history? — Ask CFPB", url: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/" },
          ],
          source: "Ask CFPB (en-2155); CFPB FinEx Webinar Transcript — Get Smart About Credit (2021-10)",
        },
        {
          id: "G7-4",
          name: "Authorized-User Status and Other Starter Routes",
          summary:
            "Someone who trusts you — usually a family member — adds you to their existing credit card. You can use the card, but the account is theirs and they are legally responsible for the bill. As CFPB's FinEx training transcript publishes: “an authorized user is a person who has permission to use and/or carry another person's credit card, but they are not legally responsible for paying the bill… the account information will be reported on their credit report… and becoming an authorized user can be a good way for someone who maybe is a young adult, even a teenager, to begin to establish a credit history.” The same transcript warns “it's not a long-term credit building strategy,” and advises moving to your own credit product after establishing a score this way. CFPB also names low-limit retail or store cards as another starter route. What does NOT build credit, as CFPB publishes: debit card and cash, prepaid cards, and payday loans — those payments are typically not reported to the nationwide credit reporting companies.",
          who: "Young members starting out, through the primary cardholder's card issuer (the cardholder asks to add you) or through a store/business for a retail card. Ask first whether the issuer reports authorized-user activity — if it is not reported, it cannot build your file.",
          body: [],
          flags: [
            "Single-sourced (pack Flag 5): the authorized-user definition rests on a single official source — CFPB's FinEx webinar transcript for practitioners (2021-10), not a consumer-facing Ask CFPB page. The only Ask CFPB authorized-user page found covers removing an authorized user, not using the status to build credit. Treat this card as single-sourced.",
          ],
          links: [
            { label: "What are some ways to start or rebuild a good credit history? — Ask CFPB", url: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-ways-to-start-or-rebuild-a-good-credit-history-en-2155/" },
          ],
          source: "CFPB FinEx Webinar Transcript — Get Smart About Credit (2021-10); Ask CFPB (en-2155)",
        },
        {
          id: "G7-5",
          name: "Warning — Fee-Harvester and High-Cost “Credit Builder” Products",
          summary:
            "Some cards sold to people with low or no credit are built to collect fees, not to build credit. CFPB calls them “fee-harvester” cards: “Credit cards with these features are often referred to as fee-harvester credit cards. They are frequently targeted at subprime consumers who are economically vulnerable and lack other options to access credit because of their poor credit history.” The legal limit CFPB publishes from the CARD Act: companies are banned “from charging consumers fees that exceed 25 percent of the credit limit during the first year after opening an account. That means for a card with a $300 credit limit, consumers generally can't be required to pay more than $75 in fees the first year the account is open.” In that CFPB case, a $75 upfront fee on a $300 limit plus paper-statement fees of up to $49.50 pushed first-year fees to “as much as 42 percent of the consumer's $300 credit limit,” and CFPB ordered an estimated $2.7 million in refunds to approximately 98,000 consumers. If most of a small limit is already gone in fees, walk away.",
          who: "Anyone offered a card “for people with no credit.” Compare any offer against the 25-percent first-year fee limit before signing; if fees were misrepresented or exceed the limit, CFPB publishes the complaint route — submit a complaint through the Consumer Financial Protection Bureau.",
          body: [
            "Cross-links, one line each, no duplication: SCRA — the Servicemembers Civil Relief Act lets you cap interest on pre-service loans at 6 percent and gives other protections on leases, repossession, foreclosure, and eviction, as CFPB publishes. MLA — the Military Lending Act caps the interest rate and most fees for many types of loans at 36 percent Military Annual Percentage Rate for covered active-duty members and dependents, as CFPB publishes. Both are covered in depth in Pay & Money / Know Your Rights.",
          ],
          flags: [],
          links: [
            { label: "CFPB Orders Subprime Credit Card Company to Refund $2.7 Million — CFPB", url: "https://www.consumerfinance.gov/archive/newsroom/cfpb-orders-subprime-credit-card-company-to-refund-2-7-million-for-charging-illegal-credit-card-fees/" },
            { label: "Alphabet soup: The ABCs of military consumer protection — CFPB", url: "https://www.consumerfinance.gov/archive/blog/alphabet-soup-abcs-military-consumer-protection/" },
          ],
          source: "CFPB enforcement release (Continental Finance); CFPB — ABCs of military consumer protection",
        },
      ],
    },
  ],
};

/* ------------------------------- Barracks -------------------------------- */

export const BARRACKS_SECTION: PackSection = {
  view: "barracks",
  title: "Barracks Daily Life",
  headSub:
    "Internet, mail, and laundry in unaccompanied housing — written the honest way: what official pages show as typically true, the exact check to run at your own installation, and the WiFi model printed both sides because it is mid-transition right now.",
  intro:
    "VARIES BY INSTALLATION — read this first: there is no single Army-wide, Navy-wide, or Marine Corps-wide answer for internet provider, mail box, or laundry cost. These three cards state what official pages show as typically true, name the check to run at your own installation, and cite specific installations only as examples. They belong with Week 1 of the First 30 Days path.",
  standing:
    "The barracks WiFi model is IN TRANSITION: the older commercial paid-provider model and the Department of War's September free-WiFi pilot direction are both in print. This section prints both and never ships a single-provider claim.",
  tiles: [
    {
      key: "daily",
      label: "Week 1 Logistics",
      tileSub: "Entries G8-1–G8-3 · First 30 Days path, Week 1",
      intro: "The three logistics questions of your first week in the barracks: how do I get online, where does my mail go, and where do I wash clothes?",
      entries: [
        {
          id: "G8-1",
          name: "Internet / WiFi in the Barracks",
          summary:
            "This is changing right now, and the old answer and the new answer are both in print — do not assume either one. Older model: a commercial on-post provider you pay for yourself — a Marine Corps Community Services contract document describes Wi-Fi in barracks/dorms where “Basic services and/or limited programming should be provided to service members at no cost, with enhanced services and programming available on a subscription or fee for use basis at or below fair market rates.” Newer model: the Department of War reports that in September it directed “an effort to provide free wireless internet connectivity, or free Wi-Fi, to service members residing in military barracks” through “a series of pilot projects,” and that “For service members in unaccompanied housing, there is not expected to be any cost to access the provided internet services.” Example only: at Fort Wainwright, free Wi-Fi launched in six named barracks buildings (provider Boldyn Networks, service name BaseNet), at no cost to Soldiers in participating barracks, generally up to 10 devices per account; Fort Riley, Kansas was the first pilot installation. Which model your building has is a local fact.",
          who: "Every member moving into unaccompanied housing. THE CHECK — on arrival, ask your barracks manager / Unaccompanied Housing office and your sponsor: (1) Is this building in a free-WiFi pilot? (2) If not, who is the on-post provider and what are the free vs. paid tiers? (3) How do I create the account?",
          body: [],
          flags: [
            "Internet model in transition — do not ship a single-provider claim (pack Flag 7): the older MCCS/Exchange contract model and the Department of War's September free-barracks-WiFi initiative with Army pilots (BaseNet/Boldyn) are both published. Provider names on official pages (Boingo Wireless in the MCCS contract document; Boldyn Networks / BaseNet at Fort Wainwright) are installation- or contract-specific examples only.",
          ],
          links: [
            { label: "Barracks Wi-Fi 'Mission Essential,' Defense Leader Says — Department of War (defense.gov)", url: "https://www.defense.gov/News/News-Stories/Article/Article/3953192/barracks-wi-fi-mission-essential-defense-leader-says/fbclid/IwZXh0bgNhZW0CMTEAAR1bNJzP2eVyA0HOzfmBu8h6ZnII725bW4mSlJIx-YXMFrYO9I_PFjpFrWA_aem_93z4hDAj2kAf6zKhj656_A/" },
            { label: "Fort Wainwright launches free barracks WiFi pilot program — U.S. Army (army.mil)", url: "https://www.army.mil/article/292875/fort_wainwright_launches_free_barracks_wifi_pilot_program" },
          ],
          source: "Department of War (defense.gov); U.S. Army — Fort Wainwright WiFi pilot; MCCS Wi-Fi contract document (media.defense.gov)",
        },
        {
          id: "G8-2",
          name: "Packages and Mail",
          summary:
            "You do not get a normal street mailbox in the barracks. Mail runs through an installation postal system — a Postal Service Center, a unit mail room, or a Community Mail Room (CMR) box assigned when you arrive. Get your exact mailing address before anyone ships you anything; a wrong format means a delayed or returned package. Example, as published by MilitaryINSTALLATIONS for Tinker AFB: “The Postal Service Center handles all general delivery mail on Tinker Air Force Base. Please address mail in the following manner: Name and Rank / 5813 Arnold St / General Delivery / Tinker Air Force Base, OK 73145.” Overseas example: MilitaryINSTALLATIONS for USAG Rheinland-Pfalz, Baumholder shows borrowing from the Loan Closet requires “A community mail room box number (assigned upon arrival)” — your CMR box is issued at arrival, not before. APO addressing follows the pattern in MilitaryINSTALLATIONS listings: name/unit or box, then APO/FPO/DPO, then the two-letter Armed Forces area (AA/AE/AP), then the ZIP.",
          who: "Every member in unaccompanied housing. THE CHECK — at check-in, ask your sponsor, unit mail room, or installation Postal Service Center: (1) What is my exact mailing address, line by line? (2) Where do I pick up packages, and what ID do I need? (3) What are the mail room hours? Do not have packages shipped to the barracks street address unless your mail room tells you to.",
          body: [],
          flags: [
            "Mail and laundry are example-sourced, not universal (pack Flag 8): no single MilitaryINSTALLATIONS topic page publishing a universal barracks mail or laundry standard was found. This card rests on two installation examples (Tinker AFB General Delivery; Baumholder CMR box on arrival) plus APO address patterns in MilitaryINSTALLATIONS listings. Package-pickup ID requirements and mail-room hours were not published on the pages fetched — that is why they are phrased as checks, not facts.",
            "Re-verify before publication (pack Flag 9): several MilitaryINSTALLATIONS fetches returned upstream HTTP 429 and were not retried; Tinker AFB, Fort Knox, and NAS Oceana content was verified via MilitaryINSTALLATIONS search-result text for those same official URLs.",
          ],
          links: [
            { label: "Tinker AFB Temporary Housing — MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil/military-installation/tinker-afb/housing/temporary-housing" },
            { label: "USAG Rheinland-Pfalz, Baumholder Loan Closet — MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil/military-installation/usag-rheinland-pfalz-baumholder/military-and-family-support-center/loan-closet" },
          ],
          source: "MilitaryINSTALLATIONS — Tinker AFB; USAG Rheinland-Pfalz, Baumholder",
        },
        {
          id: "G8-3",
          name: "Laundry",
          summary:
            "Typically true: there is a laundry room in your barracks building or on your floor, with washers and dryers provided. At several installations MilitaryINSTALLATIONS describes those facilities as free. Whether yours is free, coin/card-operated, in-room, or in a shared room is a building-level fact — check your barracks SOP on day one. Examples only, as published by MilitaryINSTALLATIONS: Fort Knox — “All barracks are furnished… Free laundry facilities are in each building.” Naval Air Station Oceana — “Free laundry facilities” among the advantages of living on base, with “washers and dryers… in all buildings.” Naval Base Kitsap — “Laundry and kitchen facilities are either in the rooms or available on the floor.” USAG Italy – Darby Military Community — “laundry facilities are located within the building.”",
          who: "Every member in unaccompanied housing. THE CHECK — ask your barracks manager at room assignment: (1) Where is the laundry room for this building/floor? (2) Is it free or paid, and if paid, coin or card/app? (3) Are there posted hours or a barracks SOP for laundry rooms? If newcomer material for your installation says nothing about laundry, treat “check your barracks SOP” as the answer, not a guess.",
          body: [],
          flags: [
            "Example-sourced (pack Flags 8–9): this card rests on four installation housing pages on MilitaryINSTALLATIONS; no universal laundry standard exists to ship. Fort Knox / Oceana quotes were verified via MilitaryINSTALLATIONS search-result excerpts after direct fetches were rate-limited (HTTP 429) — re-verify against the live pages before publication.",
          ],
          links: [
            { label: "Fort Knox Government Housing — MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil/military-installation/fort-knox/housing/government-housing" },
            { label: "Naval Air Station Oceana Housing — MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil/military-installation/naval-air-station-oceana/housing/housing" },
            { label: "Naval Base Kitsap Government Housing — MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil/military-installation/naval-base-kitsap/housing/government-housing" },
          ],
          source: "MilitaryINSTALLATIONS — Fort Knox; NAS Oceana; Naval Base Kitsap; USAG Italy – DMC",
        },
      ],
    },
  ],
};

/* ------------------------------- Retiree --------------------------------- */

export const RETIREE_SECTION: PackSection = {
  view: "retireewear",
  title: "Retiree Uniform & Ceremony",
  headSub:
    "Wearing the uniform after retirement — 10 U.S.C. § 772 as published (it names a retired officer and lists NO occasions; the occasion lists live in the service regulations) — plus retirement ceremony planning: the flag, the certificates, and the shadow box shipped as pointers only because official sources are thin.",
  intro:
    "Two retiree questions with real rules behind them: “When may I wear the uniform again?” and “What does a retirement ceremony actually include, and who provides what?” Each service publishes its own occasion list, and the lists are not identical — do not use one service's list for another service. The Marine Corps retired-wear occasion list does NOT ship in this section: MCO 1020.34H's text was not retrieved from an official Marine Corps host in the research pass, and it is flagged as a pre-launch follow-up rather than reconstructed from another service's list.",
  standing:
    "USMC retired-wear: NOT SHIPPED as an occasion list. MCO 1020.34H is listed as current in the Marine Corps Publications Electronic Library, but its retired-wear article text was not retrieved from an official host. Do not borrow the Navy list for Marines. Pre-launch follow-up: direct read of MCO 1020.34H, Chapter 11 (retired / former Marines) from marines.mil / MCPEL.",
  tiles: [
    {
      key: "wear",
      label: "Wearing the Uniform After Retirement",
      tileSub: "Entries G9-1–G9-3 · 10 U.S.C. §§ 771–772, service regulations, 32 C.F.R. Part 53",
      intro: "The federal framing first, then each service's own occasion list as published, then the limits that apply even on an authorized occasion.",
      entries: [
        {
          id: "G9-1",
          name: "The federal framing: 10 U.S.C. § 772 as published",
          summary:
            "Federal law does not give everyone a general right to wear a military uniform. Section 771 says that except as otherwise provided by law, no person except a member of the service concerned may wear the uniform, or a distinctive part of it. Section 772(c) as published in the 2024 Edition then reads, in full: “A retired officer of the Army, Navy, Air Force, Marine Corps, or Space Force may bear the title and wear the uniform of his retired grade.” Note on wording: the phrase “occasions of ceremony” does NOT appear in § 772(c) as published — that kind of occasions language appears in the presidential-regulation route in § 772(e), in the Coast Guard statute, and in the service regulations. Note on who is named: § 772(c) as published says “retired officer”; the service regulations in G9-2 cover retired enlisted members as well. Both print as published; the statute and the service rules are not worded the same way, and they are not harmonized here.",
          who: "Retirees of all services — the statutory base under every service rule in G9-2. Where: U.S. Code, Title 10, Chapter 45, § 772, published by GPO on govinfo. Executive Order 10554, printed with the section, delegates the President's regulation-writing authority for war-service wear to the Secretary of Defense and, for the Coast Guard uniform, to the Secretary of Homeland Security.",
          body: [
            "Nearby parts of the same section are different rules, not retiree rules: § 772(d) — a person discharged honorably or under honorable conditions may wear the uniform while going from the place of discharge to home, within three months after discharge; § 772(e) — a person not on active duty who served honorably in time of war may bear the title and, “when authorized by regulations prescribed by the President,” wear the uniform of the highest grade held during that war; § 772(f) — an actor portraying a service member may wear the uniform if the portrayal does not tend to discredit that armed force.",
          ],
          flags: [
            "Prompt assumption vs. statute text (pack Flag 1): § 772(c) contains no occasions list at all. The occasions lists live in service regulations and, for war-service veterans, in presidential regulations under § 772(e). This card prints the statute as published and does not import occasions language into it.",
            "Statute says “retired officer” (pack Flag 2): no single official page found explains the officer/enlisted wording gap between § 772(c) and the service regulations; both texts print as published and the gap is not harmonized.",
          ],
          links: [
            { label: "10 U.S.C. § 772 — When wearing by persons not on active duty authorized (govinfo)", url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title10/html/USCODE-2024-title10-subtitleA-partII-chap45-sec772.htm" },
          ],
          source: "U.S.C. Title 10, § 772 (govinfo, 2024 Edition)",
        },
        {
          id: "G9-2",
          name: "Retiree wear rules per service as published",
          summary:
            "Each service publishes its own list of occasions, and the lists are not identical. Retirees wear the uniform of their retired grade or rate, in service or dress uniform where a service limits it that way. ARMY (AR 670-1 / DA PAM 670-1, as summarized in the Army's official retirement newsletter): retired Soldiers may wear the uniform only under limited circumstances — such as performing ROTC instructor duties, attending military funerals, memorial services, weddings, inaugurals, and other occasions of ceremony, or attending parades on national or state holidays, or other patriotic parades or ceremonies in which any Regular or Reserve U.S. military unit is taking part; uniforms for these occasions are restricted to service and dress uniforms. NAVY (Uniform Regulations Ch. 6, Art. 61002): retired officers and enlisted personnel may wear the uniform at ceremonies or official functions when the dignity of the occasion and good taste dictate — memorial services, weddings, funerals, balls, patriotic or military parades, ceremonies in which any Active or Reserve U.S. military unit is participating, and meetings or functions of military associations. MARINE CORPS: no occasion list ships — see the flag on this card.",
          who: "Retirees — use ONLY your own service's list: Army — AR 670-1 / DA PAM 670-1 and Army Retirement Services (Soldier for Life); Navy — MyNavy HR, U.S. Navy Uniform Regulations, Chapter 6; Air Force / Space Force — DAFI 36-2903; Coast Guard — COMDTINST M1020.6 (series); Marine Corps — MCO 1020.34H via MCPEL (list not shipped here).",
          body: [
            "Army identification changes as published: when retired Soldiers wear the Army Green / Army Green Service Uniform in retirement, they replace the shoulder sleeve insignia with the Retired SSI; when they wear the Army Blue Service Uniform in retirement, they pin the Retired Service Identification Badge on the coat's left breast pocket. Both items are sold at the military Exchange Clothing Sales store or online.",
            "Navy detail as published: retired personnel may also wear the uniform of their grade while instructing a cadet corps or similar organization at approved naval or military academies or other approved academic institutions. Abroad: only to attend ceremonies or social functions when wear is required by the invitation or the customs of the country. Grooming: retired personnel must meet the regulation grooming standards except facial hair, which is authorized if properly groomed and no longer than 2 inches extending from the face; the uniform may be the one prescribed now or the one authorized at the time of retirement.",
            "Air Force / Space Force (DAFI 36-2903, Chapter 14, Retired Personnel) as published: the instruction states on its face that it applies to retired and separated personnel. Retirees receive the retired lapel button at retirement, and may wear the retired lapel pin on civilian and/or military attire, placed on the left lapel; a retired member whose last assignment was First Sergeant and/or Command Chief may wear the appropriate chevrons in all instances the uniform is worn. The older Air Force table reproduced from AFI 36-2903 lists: military funerals, weddings, memorial services and inaugurals; patriotic parades on national holidays and other military parades or ceremonies in which an active or Reserve U.S. unit is taking part; educational institutions when giving military instruction or responsible for military discipline; and social or other functions when the invitation was influenced by the member's active military service — shipped as published-but-older-edition (see flag).",
            "Coast Guard (14 U.S.C. § 2706 and COMDTINST M1020.6 as summarized on the official Coast Guard Auxiliary help site): when authorized by and in accordance with applicable regulations, a member on the retired list is entitled to wear the uniform of his rank or rating; a member who served honorably in the Coast Guard during war, whether or not on the retired list, may bear the official title and, upon occasions of ceremony, wear the uniform of the highest rank or rating held during that war service. The regulation summary states retired Coast Guard personnel may wear the dress uniform prescribed at the time of retirement, or any dress uniform currently authorized for active-duty personnel, to certain formal and ceremonial events, and that a retired member will at no time portray themselves as being on active duty.",
          ],
          flags: [
            "Marine Corps retired-wear list NOT VERIFIED (pack Flag 3): MCO 1020.34H is listed as current in MCPEL on marines.mil, but the chapter text on wear by retired Marines was not retrieved from an official Marine Corps host. Secondary summaries in circulation mirror the Navy list almost word for word — because the house rule is not to generalize one service's rule to another, NO Marine-specific occasion list is stated in this app. Pre-launch follow-up: direct read of MCO 1020.34H, Chapter 11, from marines.mil / MCPEL.",
            "Air Force occasions list partly from an older table (pack Flag 4): the four-category list comes from the AFI 36-2903 table as reproduced in search-indexed copies of the older instruction. The current DAFI 36-2903 (29 February 2024) was opened and confirms it applies to retired and separated personnel, and its Chapter 14 rules and lapel-pin placement were verified in the official PDF; the current edition's full retiree occasions table was not extracted line-by-line (a follow-up read was rate-limited). Treat the Air Force occasions list as published-but-older-edition until Chapter 14 of the current DAFI is read in full.",
            "Coast Guard summary source (pack Flag 12): the COMDTINST M1020.6 retired-wear table was summarized on the Coast Guard Auxiliary's official help site (help.cgaux.org), which quotes the regulation, rather than read directly from the current COMDTINST M1020.6 PDF on a uscg.mil host. The statutory base (14 U.S.C. § 2706) was verified on uscode.house.gov. Follow-up: direct read of COMDTINST M1020.6 (current series) from uscg.mil / DCMS.",
          ],
          links: [
            { label: "U.S. Navy Uniform Regulations, Chapter 6 (MyNavy HR)", url: "https://www.mynavyhr.navy.mil/References/US-Navy-Uniforms/Uniform-Regulations/Chapter-6/61001/" },
            { label: "DAFI 36-2903 — Dress and Personal Appearance (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2903/dafi36-2903.pdf" },
            { label: "14 U.S.C. § 2706 — Right to wear uniform (uscode.house.gov)", url: "https://uscode.house.gov/us/usc/119-124/t14/s2706/" },
          ],
          source: "U.S. Navy Uniform Regulations Ch. 6; Army Retirement Services (soldierforlife.army.mil); DAFI 36-2903; 14 U.S.C. § 2706",
        },
        {
          id: "G9-3",
          name: "The limits as published",
          summary:
            "Even when an occasion is authorized, published situations prohibit wearing the uniform for members of the Armed Forces including retired members. DoD policy as codified at 32 C.F.R. Part 53, § 53.2(a): wearing the uniform is prohibited — (1) at any meeting or demonstration that is a function of, or sponsored by, an organization the Attorney General has designated (under Executive Order 10450 as amended) as totalitarian, fascist, communist, or subversive, or as advocating force or violence to deny others their constitutional rights, or as seeking to alter the form of Government of the United States by unconstitutional means; (2) during or in connection with the furtherance of political activities, private employment or commercial interests, when an inference of official sponsorship may be drawn; (4) when wearing of the uniform would tend to bring discredit upon the Armed Forces; and (5) when specifically prohibited by regulations of the department concerned. Item (a)(3) is listed by reference — see the flag. The ban is about protecting the uniform from being used to imply official backing for a private, political, or commercial cause, and from being worn in a way that discredits the service.",
          who: "All retired members, on every occasion. Navy Article 61002 states the same kind of limit in Navy words: retired personnel are prohibited from wearing the uniform in connection with personal enterprises or business activities, or while attending or participating in any demonstration, assembly, or activity for the purpose of furthering personal or partisan views on political, social, economic, or religious issues. The Army summary at G9-2 states the flip side: wear at any other time, or for any other purpose than the listed occasions, is prohibited.",
          body: [
            "The starting prohibition is 10 U.S.C. § 771: except as otherwise provided by law, no person except a member of the service concerned may wear its uniform or a distinctive part of it, or a uniform any part of which is similar to a distinctive part of it.",
          ],
          flags: [
            "32 C.F.R. Part 53 list item (a)(3) (pack Flag 5): the govinfo CFR text retrieved shows items (a)(1), (a)(2), (a)(4), and (a)(5) clearly; item (a)(3) was not cleanly extracted, so this card lists it by reference rather than paraphrasing it. Follow-up: clean read of § 53.2(a)(3) from the govinfo PDF.",
          ],
          links: [
            { label: "32 C.F.R. Part 53 — Wearing of the Uniform, § 53.2 (govinfo)", url: "https://www.govinfo.gov/content/pkg/CFR-2023-title32-vol1/pdf/CFR-2023-title32-vol1-sec53-1.pdf" },
            { label: "10 U.S.C. § 771 — Unauthorized wearing prohibited (uscode.house.gov)", url: "https://uscode.house.gov/us/usc/119-124/t10/s771/" },
          ],
          source: "32 C.F.R. Part 53, § 53.2 (govinfo, CFR 2023); 10 U.S.C. § 771",
        },
      ],
    },
    {
      key: "ceremony",
      label: "Retirement Ceremony Planning",
      tileSub: "Entries G10-1–G10-4 · MILPERSMAN 1800-010, MCO 1900.16, Soldier for Life, statute",
      intro: "There is no single joint published ceremony script for all services. The Navy publishes the fullest sequence; the Marine Corps publishes that a ceremony will be held and what the command must do; the Army publishes the items presented and the timing.",
      entries: [
        {
          id: "G10-1",
          name: "Ceremony elements as published",
          summary:
            "NAVY — MILPERSMAN 1800-010: the retirement or Fleet Reserve transfer shall, if the member so desires, be preceded by a ceremony designed to express the Navy's appreciation for the member's years of faithful and honorable service; the member may request or decline a command-sponsored ceremony, or host their own, and on command approval the ceremony becomes an official command function. Published sequence near the end of the ceremony: the CO or commander makes remarks and then presents a U.S. flag (on behalf of the Secretary of the Navy), awards, and certificates to the member and to Sailor-designated family members, with citations and certificates read by the master of ceremonies as they are presented; gifts are presented at this time; the member is introduced and may make remarks; guests rise, the chaplain delivers the benediction; the master of ceremonies orders “Retire the Colors”; sideboys are posted and the member departs with Sailor-designated family members if desired; the master of ceremonies announces the end of the ceremony. MARINE CORPS — MCO 1900.16 para. 1012: an appropriate retirement ceremony is to be held within the capabilities of the command; the commander will personally interview the Marine and discuss plans for the ceremony, and commanding officers should take appropriate steps to duly recognize the spouse. ARMY — Soldier for Life checklists put “schedule and finalize your retirement ceremony” in the 1-to-6-months window; the U.S. Army Reserve Retirement Planning Guide states the ceremony is optional.",
          who: "Retiring members and their commands. Navy — command of the last permanent duty station, under MILPERSMAN 1800-010; a local Navy instruction built on it (NAS Patuxent River 1800.1B) publishes a request route: a letter to the Commanding Officer via the Executive Officer no less than 90 days before the requested ceremony date or official retirement date, whichever is earlier. Marine Corps — the retiring Marine's command under MCO 1900.16 para. 1012 (Chapter 18 of MCO P5060.20, Drill and Ceremony Manual, is the reference for retirement parades). Army — the unit and the servicing Retirement Services Office (RSO).",
          body: [
            "Army presented items, as an Army Retirement Services article on Reserve Component transitions publishes: at the ceremony the Army presents the Army Retiring Soldier Commendation Program items, the certificate of retirement (and spouse certificate of appreciation as appropriate), transition orders, and the DD Form 214 / 214-1.",
          ],
          flags: [
            "Air Force ceremony rule NOT VERIFIED on the official host (pack Flag 6): DAFI 36-3203, Service Retirements (8 July 2025 edition), Chapter 7, Recognition of Retirement, lists ceremony / DD Form 363AF and 363SPF / AF Form 1344 spouse certificate / Presidential recognition contents — but those contents were seen only in a mirror copy of the instruction, not on static.e-publishing.af.mil, so they are NOT stated as fact in this app. Follow-up: direct read of DAFI 36-3203 Chapter 7 from Air Force e-Publishing.",
            "Army ceremony sequence (pack Flag 7): no Army-wide published ceremony sequence (order of events) was found in official Army Retirement Services sources — the Army sources publish the checklist timing, the “appropriate ceremony” intent, and the items presented. An installation-level Army regulation with a retirement-ceremony paragraph exists (Fort Leonard Wood Regulation 600-20), but it is a local rule, not Army-wide, and was not used to generalize.",
          ],
          links: [
            { label: "MCO 1900.16, para. 1012 — Retirement Ceremony (quantico.marines.mil)", url: "https://www.quantico.marines.mil/Portals/147/Security%20Bn/S1_Admin/General_Templates/Terminal_Leave/MCO%20_1900.16_%20SEPARATIONS_%20&_%20RETIREMENT_%20MANUAL.pdf" },
            { label: "Month of Retirement checklist — Soldier for Life (soldierforlife.army.mil)", url: "https://soldierforlife.army.mil/Army-Retirement/Retirement-Planning/Retirement-Process/00-Month-of-Retirement" },
          ],
          source: "MILPERSMAN 1800-010 (via NAS Patuxent River Instruction 1800.1B); MCO 1900.16 para. 1012; Soldier for Life; USAR Retirement Planning Guide 2024",
        },
        {
          id: "G10-2",
          name: "The flag: how the retirement flag is provided, and the flown-flag option",
          summary:
            "Two different flags get mixed up. First, the retirement flag itself: by law, the service presents a United States flag to the member on release from active duty for retirement, at no cost to the member, once. Army example, 10 U.S.C. § 7251: “(a) Presentation of Flag — Upon the release of a member of the Army from active duty for retirement, the Secretary of the Army shall present a United States flag to the member. (b) Multiple Presentations Not Authorized… (c) No Cost to Recipient.” Parallel statutes exist for the other services (Navy § 8261 and Air Force / Space Force § 9251 in current numbering, and Title 14 for the Coast Guard). Navy route (MILPERSMAN 1800-010): the CO, commander, or OIC of the member's last permanent duty station shall present a U.S. flag on behalf of the Secretary of the Navy; eligible members are active-duty members transferred on or after 1 October 1998; commands use Operating Target (OPTAR) funds to procure the flags (NSN 8345-00-656-1435). Second, an optional keepsake: a flag flown over the U.S. Capitol on a chosen date, ordered through a member of Congress — a purchase through the Capitol Flag Program, not the service's retirement presentation.",
          who: "Retirement flag — presented by the last command / last permanent duty station, funded by the command, no cost to the retiree. Capitol-flown flag — your U.S. Representative's or Senator's office (constituent services / flag requests), fulfilled by the Architect of the Capitol Flag Office; the AOC issues a keepsake Certificate of Authenticity, and a date that has passed cannot be bought after the fact (Senate flag-request page).",
          body: [
            "Marine Corps route as published in MCO 1900.16 para. 1012: the National Defense Authorization Act of 1999 directed commanders to present a U.S. flag to active-duty Marines on transfer to the Fleet Marine Corps Reserve or retired list on or after 1 October 1998, and the NDAA of 2000 extended this to Reserve Marines transferred to the retired list awaiting pay on or after 1 October 1999; commanders use local operating funds to procure flags (same NSN 8345-00-656-1435).",
            "Capitol Flag Program as published by the Architect of the Capitol: the AOC fulfills all flag requests from Members of the U.S. Senate and the House of Representatives; flags are flown daily year-round, weather permitting, excluding Thanksgiving Day, Christmas Day and New Year's Day; the AOC page directs the public: “Please contact your representative or senator to obtain a flag flown over the Capitol.”",
          ],
          flags: [
            "Flags flown at a unit, ship, or other meaningful place (pack Flag 10): retirees commonly have a flag flown at a headquarters, ship, or memorial and then presented, and local Navy ceremony checklists ask “where would you like your flag to be flown,” but no service-wide official published route for requesting such a locally flown flag was found. Only the service-presented retirement flag and the Capitol Flag Program are stated as published routes.",
          ],
          links: [
            { label: "10 U.S.C. § 7251 — Presentation of United States flag upon retirement (govinfo)", url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title10/html/USCODE-2024-title10-subtitleB-partII-chap733-sec7251.htm" },
            { label: "Capitol Flag Program — Architect of the Capitol (aoc.gov)", url: "https://www.aoc.gov/what-we-do/programs-ceremonies/capitol-flag-program" },
          ],
          source: "10 U.S.C. § 7251 (govinfo, 2024 Edition); Architect of the Capitol — Capitol Flag Program; Senator Ted Budd flag requests page",
        },
        {
          id: "G10-3",
          name: "Certificates and the Presidential letter / certificate of appreciation",
          summary:
            "The retiree's package, as the services publish it, is built around the certificate of retirement (DD Form 363, with service variants), the Presidential Certificate of Appreciation (DD Form 2542) for qualifying retirees, a separate Presidential letter only at the highest service levels, and a certificate of appreciation for the spouse. ARMY: DD Form 363, Certificate of Retirement (the Reserve guide states it is signed by the Chief of Staff, Army); DD Form 2542, Presidential Certificate of Appreciation — presented to Soldiers retiring with 20 or more years of active service (15 when early retirement is authorized), medical retirements, on transfer to the Retired Reserve, TDRL, or PDRL (signed by the President, per the Reserve guide); Presidential Letter of Appreciation — 30 or more years of service, or a special category (e.g. Chief of Staff, Army; Sergeant Major of the Army; Medal of Honor recipient; qualifying former POWs); DA Form 3891, Army Spouse Certificate of Appreciation (if applicable). NAVY (MILPERSMAN 1800-010 table): DD Form 363 transmitted to the command by NAVPERSCOM; NAVPERS 1830/3 Retirement / Fleet Reserve Certificate prepared at the command; NAVPERS 1650/80 Certificate of Appreciation for Sailor-designated family members, prepared at the command and signed by the CO; DD Form 2542 bearing the President's signature; Presidential letters of appreciation for personnel retiring with at least 30 years of active military service (and the Chairman/Vice Chairman of the Joint Chiefs and service Chiefs), requested 6 months prior to the retirement date. MARINE CORPS (MCO 1900.16 para. 1012): a retirement certificate, letters, and a USMC lapel pin are provided by the CMC (MMSR) for presentation upon retirement.",
          who: "In service — the retiring member's command prepares and presents most items (Navy DD Form 363 comes from NAVPERSCOM; Marine Corps certificate, letters, and lapel pin come from CMC (MMSR); Army items run through the unit and servicing RSO). After retirement — records copies via NPRC / National Archives (eVetRecs or SF-180) or the service personnel center, depending on service and separation date.",
          body: [
            "Note: a 2021 NAVADMIN directs that DD Form 2542 certificates bearing a previous Commander in Chief's signature are obsolete effective 20 January 2021 and are to be destroyed — commands must use current-signature stock.",
          ],
          flags: [
            "Navy DD Form 2542 table formatting (pack Flag 8): the MILPERSMAN 1800-010 documents table as extracted is compressed, and the DD Form 2542 row and the family-certificate row run together. This card prints only what is unambiguous: DD Form 2542 bears the President's signature and is a retirement document under that article, and a separate command-prepared, CO-signed certificate of appreciation exists for Sailor-designated family members. Verify the exact issuance-responsibility column against the official MILPERSMAN PDF on MyNavy HR before publishing a Navy-specific “who gets DD 2542” claim.",
            "Replacement DD Form 363 (pack Flag 9): no official page found promises a replacement Certificate of Retirement (DD Form 363) as such. NPRC / National Archives is the published route for service-record copies (DD Form 214, OMPF) via eVetRecs or SF-180, and service personnel centers (for example AFPC for Air Force retirees separated on or after 1 October 2004) handle many retiree record requests. Do not tell a retiree NPRC will reissue a DD Form 363 until a service page says so.",
          ],
          links: [
            { label: "Army Retirement Planning Seminar — Documents Issued Upon Retirement (soldierforlife.army.mil)", url: "https://soldierforlife.army.mil/documents/army%20retirement/retirement%20planning/DA%20Retirement%20Planning%20Seminar.pdf" },
            { label: "Request Military Service Records — National Archives / NPRC", url: "https://www.archives.gov/veterans/military-service-records?source=GovDelivery" },
          ],
          source: "Army Retirement Planning Seminar (HQDA Retirement Services Office); USAR Retirement Planning Guide 2024; MILPERSMAN 1800-010; MCO 1900.16; National Archives / NPRC",
        },
        {
          id: "G10-4",
          name: "Shadow box: pointers only — official sources are thin",
          summary:
            "A shadow box — a framed display case holding the flag, medals, insignia, and career items — is a familiar retirement presentation, but FINDING: no official service-wide “how to build a shadow box” instruction was found in the official retirement, protocol, or uniform sources searched. This card is pointers only, on purpose: no shadow-box layout, contents list, or flag-folding-for-display procedure is presented here as an official rule. The one clear official statement found is about money, in Navy MILPERSMAN 1800-010, Note 5: “Appropriate gifts for the occasion (such as shadowboxes, plaques, flower bouquets for sailor-designated family members etc.) are paid by separate resources and not appropriated or non-appropriated funds.” In plain terms as published by the Navy: a shadow box given at the ceremony is a gift, paid for from separate (non-government) resources, not from official funds. The same Navy article treats gifts as a ceremony step — “Gifts presented at this time” — after the flag, awards, and certificates are presented.",
          who: "Arranged locally — normally by the command, unit, shipmates / fellow service members, or family, using non-appropriated resources as the Navy note states. For the flag, certificate, and medals that typically go inside, use the official routes at G10-2 and G10-3 rather than buying replacements of official items from unofficial sellers.",
          body: [
            "Nothing in the official sources searched published a standard contents list, a standard size, a flag size for a case, or who must build or buy one. Commercial shadow-box guides exist in large numbers; none of them is an official source, and none is cited here.",
          ],
          flags: [
            "Shadow box (pack Flag 11): official sources are thin by design of this fill — the only official statement relied on is the Navy MILPERSMAN note that shadow boxes are gifts paid from separate resources, not appropriated or non-appropriated funds. No official contents, construction, flag-size, or presentation standard was found in Army, Navy, Air Force, Marine Corps, or Coast Guard retirement / protocol sources searched. Any future shadow-box how-to in Battle Book would be unofficial guidance and must be labeled as such.",
          ],
          links: [
            { label: "MILPERSMAN Table of Contents (PERS-835) — incl. 1800-010 (MyNavy HR)", url: "https://www.mynavyhr.navy.mil/Portals/55/Reference/MILPERSMAN/Documents/TOC-SS-CH-83.pdf?ver=3b_gs1rz5b11dlFPZOd_1w==" },
          ],
          source: "MILPERSMAN 1800-010, Note 5 — Navy Personnel Command (MyNavy HR)",
        },
      ],
    },
  ],
};
