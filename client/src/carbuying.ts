// Car-Buying Guide — transcribed from the Closure Sweep LIFE pack
// (~/workspace/military-app/closure/closure-life.md, Part 2,
// researched Nov 9, 2026; CFPB / FTC / Military OneSource / DoD
// FINRED only). The pack's largest correction leads this section:
// the MLA 36% MAPR cap EXCLUDES purchase auto loans (pack flag C-1).
// The conflicting Military OneSource sentence ships ONLY as a flagged
// conflict, never as the rule. FTC CARS Rule material ships ONLY as
// the FTC's published description of predatory patterns, with its
// vacatur printed (C-3) — never as current law.

import type { PackSection } from "./seven";

export const CARBUYING_SECTION: PackSection = {
  view: "carbuying",
  title: "Car-Buying Guide",
  headSub:
    "Total cost over monthly payment, the financing traps by their official names, add-on data as published, and the military protections as they actually read — including the correction most car-buying advice gets wrong.",
  intro:
    "Everything here is CFPB, FTC, Military OneSource, or DoD FINRED material, quoted or closely summarized with its source. Read the MLA card before any dealer tells you the law caps your car loan — it doesn't, and the correction is printed prominently because the misconception is expensive.",
  standing:
    "CORRECTION (pack flag C-1): the Military Lending Act's 36% MAPR cap does NOT apply to ordinary purchase auto loans — CFPB publishes the exclusion explicitly. Any source that says the MLA caps car-loan rates is wrong; the one conflicting official sentence (Military OneSource) prints in this section only as a flagged conflict. The SCRA 6% cap is real but narrow — it reaches loans signed BEFORE active duty, and CFPB's warning about loans signed on active duty prints with it.",
  tiles: [
    {
      key: "totalcost",
      label: "Total Cost, Not Monthly Payment",
      tileSub: "CFPB/FTC method · the Shopping Sheet formula and its worked example · the contract checklist",
      intro: "The one discipline every official source teaches: price the whole loan, not the payment.",
      entries: [
        {
          id: "CAR-1",
          name: "Total cost, not monthly payment (CFPB)",
          summary: "CFPB: “If you lower the monthly payment by taking out a longer loan, you pay more in interest. A longer loan also puts you at risk for negative equity, which is when you owe more on the vehicle than the vehicle is worth.” And: “Think about a loan in terms of the total cost of financing a vehicle, not just the monthly payment.” Budget ownership costs too: at purchase — taxes, title, dealer fees; while owning — insurance, gas, registration, maintenance, repairs. A larger down payment lowers total cost. “A smaller monthly payment may mean the loan is extended over a longer period of time — 72 months or more, instead of 48 or 60 months.” Under TILA, check APR, amount financed, finance charge, and total of all payments before signing.",
          who: "Every buyer — the monthly payment is the number the deal is sold on; the total cost is the number you actually pay.",
          body: [],
          flags: [],
          links: [],
          source: "CFPB, “YOU drive the terms of your auto loan”; CFPB, Take control of your auto loan (Mar 2024); CFPB, “Don't get taken for a ride”",
        },
        {
          id: "CAR-2",
          name: "The CFPB Shopping Sheet formula — with its printed worked example",
          summary: "CFPB's Auto Loan Shopping Sheet formula, as printed: Total cost = (term in months × monthly payment) + down payment + trade-in, “including all of the interest, over the life of the loan.” Its printed worked example: $21,800 before interest − $6,000 down/trade = $15,800 financed; 48 months at 3.5% = $16,955 total of payments; total cost $22,955; total interest $1,155. Run every offer through the same formula before comparing — and get an “out-the-door” price in writing before visiting the lot and before talking financing (FTC). FTC on long terms: 72- or 84-month loans “lower payment, may have high rates, cost more overall.”",
          who: "Buyers comparing two offers — same formula, both offers, on paper.",
          body: [],
          flags: ["Pack Flag C-5: a “$20,000 at 4.75%, 36 vs 72 months” example circulating in secondary sources was NOT verified on consumerfinance.gov and is NOT used. The worked example above is the Shopping Sheet's own."],
          links: [],
          source: "CFPB Auto Loan Shopping Sheet; FTC, “Financing or Leasing a Car”",
        },
        {
          id: "CAR-3",
          name: "The contract checklist (Military OneSource)",
          summary: "Military OneSource's car-buying checklist: confirm principal, interest rate and APR, loan length, monthly payment, total amount you will pay, penalties/optional products/prepaid items; budget sales tax, title, license, registration, documentation and dealer fees, and insurance. Review every fee; “refuse to sign incomplete forms or documents with blank spaces.” DoD FINRED's “Car Buying Basics” video curriculum is built on the same structure (episodes include “Dealer Add-Ons,” “Trade-ins and Negative Equity,” “What Do You Want Your Payments To Be?”).",
          who: "Buyers at the signing table — blank spaces in a contract are where terms you never agreed to get written in.",
          body: [],
          flags: [],
          links: [{ label: "Military OneSource — Tips for Buying a Car While in the Military", url: "https://www.militaryonesource.mil/resources/millife-guides/buying-a-car-tips/" }],
          source: "Military OneSource; DoD FINRED (finred.usalearning.gov)",
        },
      ],
    },
    {
      key: "traps",
      label: "Financing Traps, By Their Official Names",
      tileSub: "Yo-yo financing · dealer markup · payment packing (FTC's term) · what's negotiable",
      intro: "The traps, named the way the regulators name them — attribution matters, and this tile keeps each label with its owner.",
      entries: [
        {
          id: "CAR-4",
          name: "Yo-yo financing / spot delivery (CFPB's names)",
          summary: "The dealer lets you take the car before financing is final, then calls back with a higher rate, longer term, or bigger down payment — “This practice is called 'yo-yo' financing.” CFPB: you may have a right to keep the car on the original terms if the conditional nature wasn't clearly disclosed; you are not required to accept different financing; you can walk away and the dealer should refund your down payment. For military buyers: “report this to your installation JAG immediately.” Best protection: financing final before you take the car home.",
          who: "Anyone who drove the car home the same day — if the call comes, the original terms and the JAG are your first two moves.",
          body: [],
          flags: [],
          links: [{ label: "CFPB Ask CFPB #831 — yo-yo financing", url: "https://www.consumerfinance.gov/ask-cfpb/can-the-dealer-increase-the-interest-rate-after-i-drive-the-vehicle-home-en-831/" }],
          source: "CFPB Ask CFPB #831",
        },
        {
          id: "CAR-5",
          name: "Dealer markup (CFPB enforcement term)",
          summary: "The lender “sets a risk-based interest rate, or 'buy rate,' and then allows auto dealers to charge a higher interest rate when they finalize the deal… typically called 'dealer markup.'” FTC's consumer phrasing: the negotiated APR “usually includes an amount that compensates the dealer for handling the financing” — so negotiate APR like price, and get pre-approved (direct lending) first, so the dealer's financing has to beat a real offer instead of inventing one.",
          who: "Buyers financing at the dealership — the APR you are quoted may contain the dealer's compensation; a pre-approval exposes how much.",
          body: [],
          flags: ["Pack Flag C-4: “buy rate” is CFPB enforcement language; FTC's consumer page says only “an amount that compensates the dealer.” The labels stay with their sources."],
          links: [],
          source: "CFPB/DOJ Ally action; FTC, “Financing or Leasing a Car”",
        },
        {
          id: "CAR-6",
          name: "Payment packing (FTC's name) — and what's negotiable",
          summary: "FTC testimony lists “'payment packing' (slipping unwanted add-ons into a purchase agreement), bait-and-switch tactics, and extra junk fees.” CFPB describes the same conduct without the label: if add-ons you didn't agree to appear in the payment, contact the lender/servicer. Negotiable, per CFPB: interest rate, loan length, dealer fees, add-on prices. The defense is line-by-line: every line in the payment should be a line you agreed to, at a price you saw.",
          who: "Buyers whose payment “includes” things they never discussed — the add-ons tile (next) prices what packing costs.",
          body: [],
          flags: ["Attribution: “payment packing” is FTC's term (2022 testimony); no CFPB consumer page opened in the research uses the label (pack Flag C-4)."],
          links: [{ label: "CFPB Ask CFPB #2132 — what's negotiable", url: "https://www.consumerfinance.gov/ask-cfpb/what-things-can-i-negotiate-when-shopping-for-a-car-or-auto-loan-en-2132/" }],
          source: "FTC testimony (2022); CFPB Ask CFPB #819, #2132",
        },
      ],
    },
    {
      key: "addons",
      label: "Dealer Add-Ons",
      tileSub: "The official lists · optional means optional · what servicemembers actually paid (CFPB data)",
      intro: "Add-ons as FTC and CFPB list them, the rule that they are optional, and CFPB's published data on what servicemembers paid for them.",
      entries: [
        {
          id: "CAR-7",
          name: "The add-on lists (FTC + CFPB) — and “optional” means optional",
          summary: "FTC's common list: GAP policies, window/VIN etching, extended warranties and service contracts, rustproofing. “Add-ons are not free… It's ok to say no to add-ons, and to ask the price. It's not ok for dealers to tuck add-ons into your deal or lie about them.” Used-car guide: add-ons “can cost thousands of dollars and are mentioned only at the end of an already difficult and time-consuming day at the dealership. You can usually buy the vehicle without any add-ons.” CFPB's list adds alarm systems, window tinting, tire/wheel protection, credit insurance / debt cancellation products. “Generally you cannot be required to buy an extended warranty, GAP insurance, or credit insurance… they are optional.” If told one is required, ask to be shown where the contract says so; you may walk away, may cancel an optional add-on during the loan term, and may file a CFPB complaint. FTC: credit insurance “is not required by federal law.”",
          who: "Every buyer at the finance desk — “required” is a claim; make them show it in the contract or take it off.",
          body: [],
          flags: [],
          links: [{ label: "CFPB Ask CFPB #807 — required add-ons?", url: "https://www.consumerfinance.gov/ask-cfpb/am-i-required-to-purchase-an-extended-warranty-or-guaranteed-asset-protection-gap-insurance-from-a-lender-or-dealer-to-get-an-auto-loan-en-807/" }],
          source: "FTC; CFPB Ask CFPB #807",
        },
        {
          id: "CAR-8",
          name: "What servicemembers actually paid for add-ons (CFPB, Jan 2025)",
          summary: "CFPB servicemember data (Jan 2025 report, loans originated 2018–2022): over 70% of servicemembers and non-servicemembers bought at least one add-on; servicemembers paid on average over $3,300 (new) / over $3,000 (used) — almost $140 / $60 more than non-servicemembers respectively. Warranty/service/maintenance plans were the most common and highest-priced category.",
          who: "Buyers deciding whether add-ons are “just a few dollars a month” — across the force, they averaged over three thousand dollars a loan.",
          body: [],
          flags: [],
          links: [],
          source: "CFPB, Auto lending to servicemembers (Jan 2025)",
        },
      ],
    },
    {
      key: "mla",
      label: "MLA — With the Correction",
      tileSub: "The 36% MAPR cap · and the purchase-auto-loan EXCLUSION, printed prominently",
      intro: "The Military Lending Act as CFPB publishes it — including the exclusion that decides what it means at a car dealership.",
      entries: [
        {
          id: "CAR-9",
          name: "MLA: the 36% MAPR cap — and what it does NOT cover (THE CORRECTION)",
          summary: "CFPB: “You can't be charged more than a 36% Military Annual Percentage Rate (MAPR)” — on the credit the MLA covers. MAPR includes finance charges, credit insurance premiums, add-on credit-related products sold with the credit, and fees (application, participation, debt-cancellation). Other MLA limits as published: no prepayment penalty, no mandatory arbitration or waiver of legal rights, no mandatory allotments. Covered: active-duty members of all six services, Reserves on active duty, Guard mobilized under federal orders over 30 consecutive days, spouses, and sometimes dependents. THE EXCLUSION, as CFPB publishes it: the MLA covers credit cards, payday/deposit-advance/tax-refund/refund-anticipation and vehicle title loans, overdraft lines, and installment loans (except auto loans); it does NOT cover “auto loans when the lender can repossess the vehicle you are buying,” or mortgages. CFPB's Jan 2025 report: “the MLA specifically excludes auto loans from the definition of consumer credit. Thus, servicemembers do not receive key MLA protections on auto loans, including limits to the amount a creditor may charge on interest, fees, and charges.” Bottom line for the lot: on a purchase auto loan, the MLA does not cap your rate. Your protections there are the SCRA (next tile, narrow), state law, and the contract discipline in this section.",
          who: "Every military car buyer — if a dealer or a lender invokes the MLA as your rate protection on a purchase loan, that claim is wrong, and CFPB prints why.",
          body: [],
          flags: [
            "WORDING CONFLICT — printed as a conflict, never as the rule (pack flag C-1): Military OneSource's car page says the MLA “protects against unfair lending practices, including vehicle loans that bundle financing with add-on products.” That sentence appears to reflect the GAP/add-on interpretive-rule issue CFPB's report notes (GAP purchases “sharply increased in 2020 after a change in Department of Defense interpretive rules related to the MLA”) — it is NOT a general MAPR cap on auto purchase loans, and this section does not present it as one.",
            "Disclosure note (pack Flag C-2): the MAPR statement-and-payment description must be given in writing and orally per the Army legal-assistance brief and the OCC Comptroller's Handbook on 32 CFR 232.6; CFPB's consumer page itself does not print the oral-disclosure rule.",
          ],
          links: [{ label: "CFPB — Military Lending Act (MLA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/military-lending-act-mla/" }],
          source: "CFPB MLA page; CFPB, Auto lending to servicemembers (Jan 2025), §1.3",
        },
        {
          id: "CAR-10",
          name: "SCRA 6% cap — WITH CFPB's warning (cross-reference: Know Your Rights)",
          summary: "CFPB: the SCRA lets you lower interest to 6% on debts “that you took out before you entered active duty” — auto loans, mortgages, student/personal/installment/title loans, credit cards — taken out alone or with a spouse. Written notice + copy of orders (or CO letter) while on active duty or up to 180 days after release; the cap lasts the active-duty period (mortgages: +1 year); “the lender can't add the difference back.” Also published: no vehicle repossession without a court order (pre-service loan/lease with a payment made), auto-lease termination after qualifying PCS/deployment orders, no default judgments. CFPB's explicit warning — the misconception itself: “We've heard from servicemembers who were led to believe it was okay to sign for a loan with a high interest rate since they were active-duty and therefore, the SCRA would drop the interest rate to 6 percent. Unfortunately, that is not true. If you take out a loan to buy a vehicle after going on active duty, the SCRA interest rate cap will not apply.” The full SCRA framing lives in Know Your Rights.",
          who: "Members with pre-service debts (use the cap) and members being sold a high-rate loan today (the cap will not rescue it).",
          body: [],
          flags: [],
          links: [{ label: "CFPB — Servicemembers Civil Relief Act (SCRA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/the-servicemembers-civil-relief-act-scra/" }],
          source: "CFPB SCRA page; CFPB, “Arm yourself with knowledge when shopping for an auto loan”",
        },
      ],
    },
    {
      key: "patterns",
      label: "Predatory Patterns & the Data",
      tileSub: "FTC's named patterns · the CARS Rule — VACATED, printed with its vacatur · CFPB's servicemember findings",
      intro: "What the regulators say is aimed at military buyers, and what the loan data shows.",
      entries: [
        {
          id: "CAR-11",
          name: "Predatory patterns, as officially warned — and the CARS Rule's status",
          summary: "FTC: “Young servicemembers are an attractive target for unscrupulous auto dealers…” — practices named: payment packing, bait-and-switch, extra junk fees. FTC's Dec 2023 CARS Rule announcement named dealer patterns aimed at servicemembers: bait-and-switch on cost/financing/discounts/availability, hidden junk fees, lying about military/government affiliation, lying about whether a vehicle can be moved out of state or repossessed — “Servicemembers have an average of twice as much auto debt as civilians. By the age of 24, around 20 percent of young servicemembers have at least $20,000 in auto debt.” STATUS — READ BEFORE CITING: the CARS Rule was vacated by the Fifth Circuit (Jan 27, 2025) and withdrawn by the FTC (Federal Register action scheduled Feb 12, 2026). The announcement is used here only as the FTC's published description of the patterns — it is NOT current law. FTC Act deception authority is separate and unaffected.",
          who: "Buyers and leaders counseling them — the patterns are real and documented; the rule that targeted them is gone, and this card prints both facts.",
          body: [],
          flags: ["Pack Flag C-3: CARS Rule material ships ONLY with the vacatur printed. Never present the CARS Rule as current law. Pack Flag C-7: no official source opened named specific predatory dealerships or a distance-from-base pattern — none is printed here."],
          links: [],
          source: "FTC testimony (2022); FTC CARS Rule announcement (Dec 2023) + vacatur (5th Cir., Jan 27, 2025)",
        },
        {
          id: "CAR-12",
          name: "The servicemember loan data (CFPB, Jan 2025; originations 2018–2022)",
          summary: "CFPB findings: servicemembers financed on average ~$39,000 for new vehicles (over $2,200 more than non-servicemembers) with down payments over $1,100 lower; average APR 5.3% new / 9.3% used (0.6 percentage points higher both); terms longer by 3 months (new) / 1 month (used); average payments over $644 new / ~$508 used; more likely to trade in with negative equity (+6.7 pp new / +4.0 pp used; average negative equity $5,900 new / ~$4,000 used).",
          who: "Anyone who thinks the traps in this section are rare — the averages say the pattern is the market, not the exception.",
          body: [],
          flags: [],
          links: [],
          source: "CFPB, Auto lending to servicemembers (Jan 2025)",
        },
        {
          id: "CAR-13",
          name: "Where to get help (as published)",
          summary: "Installation legal assistance / JAG: CFPB's MLA/SCRA pages — “A military legal office can help you with your specific situation” (locator: legalassistance.law.af.mil); yo-yo financing → “your installation JAG immediately.” CFPB complaints: online or (855) 411-CFPB (2372). Personal Financial Counselors (DoD FINRED): “All active-duty, National Guard and reserve service members, their family members and survivors are eligible to receive free financial counseling services” — “a free, trusted Department of Defense-funded resource,” reached via the FINRED CONUS/OCONUS PFC maps, the installation Financial Readiness Program / Military and Family Support Center, or Military OneSource telephonic counseling, 1-800-342-9647. Installation personal financial managers offer free, confidential one-on-one help including car-buying classes/counseling.",
          who: "Anyone mid-deal or post-deal with a problem — the JAG for the legal trap, a PFC for the numbers, a CFPB complaint to put it on the regulator's record.",
          body: [],
          flags: [],
          links: [{ label: "DoD FINRED — PFC map", url: "https://finred.usalearning.gov/pfcMap" }],
          source: "CFPB MLA/SCRA pages; DoD FINRED; Military OneSource",
        },
      ],
    },
  ],
};
