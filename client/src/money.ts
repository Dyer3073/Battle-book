// Pay & Money — static reference data transcribed from the researched
// money pack (~/workspace/military-app/money/money.md, researched
// November 8, 2026). Summaries, figures, and links come only from the
// pack.
//
// Fidelity rules baked into this data:
// - No pay table is reproduced. The only basic-pay dollars are the pack's
//   three example cells, each labeled a 2026 example, and every figure in
//   the section routes to the live official tools (DFAS Pay Tables, DTMO
//   BAH lookup, DoD RMC Calculator) for the member's real number.
// - Every dollar figure carries its 2026 label (the 3.8% raise, BAS
//   rates, example cells). DFAS posts current figures and republishes the
//   pay-calendar page annually — refresh each January.
// - "Early pay" (§5.2) is deliberately link-free and labeled non-official.
// - The MLA entry ships WITH its exclusions: residential mortgages and
//   purchase-money vehicle/property loans are NOT covered.
// - SCRA and the relief societies are cross-references to the Benefits
//   section only — no duplicated detail.

export type MoneyLink = { label: string; url: string };

export type PayExample = { grade: string; amount: string };

export type MoneyEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  paras?: string[];
  /** Pack's example basic-pay cells — 2026 only, never a full table. */
  examples?: PayExample[];
  examplesNote?: string;
  /** Pack dollar figures, each pre-labeled with its 2026 scope. */
  figures?: string[];
  flag?: string;
  links: MoneyLink[];
  benefitsRef?: boolean;
  /** §5.2 early pay: a bank feature, not an entitlement. */
  nonOfficial?: boolean;
};

export type LesBlock = { title: string; text: string };

export type MoneyGroup = {
  title: string;
  entries: MoneyEntry[];
  /** Only on the LES group: the full block-by-block decoder. */
  lesBlocks?: LesBlock[];
  lesGotchas?: string[];
};

export const MONEY_STANDING_NOTE =
  "Every dollar figure in this section is a 2026 figure and is labeled as such — the annual raise, BAS rates, and the example pay cells all change. DFAS posts the current tables and rates, and DFAS republishes the pay-calendar page every year, so check your numbers against the official tools linked here and refresh each January.";

const DFAS_TABLES: MoneyLink = {
  label: "DFAS Military Pay Tables",
  url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/",
};
const MYPAY: MoneyLink = { label: "myPay", url: "https://mypay.dfas.mil/" };

export const MONEY_GROUPS: MoneyGroup[] = [
  {
    title: "Military Pay Tables",
    entries: [
      {
        name: "Basic pay — how it works, and the official tables",
        kind: "Single national table · all branches",
        summary:
          "Basic pay is the foundation of military pay and the only part that is taxable as wages. Your monthly rate comes from ONE national table — the same for every branch — using exactly two inputs: your pay grade (E-1…E-9, W-1…W-5, O-1…O-10, plus O-1E/O-2E/O-3E rates for officers with prior enlisted service) and your years of service (longevity columns run “2 or less,” then over 2, 3, 4, 6, and every two years to over 40). Find your grade row and the first longevity column you've passed — that's your monthly basic pay.",
        who: "Everyone, every promotion, longevity step, and PCS budget. Check it whenever your grade or years of service change.",
        flag: "Raises normally take effect each January 1 (the 2026 raise was 3.8% — that percentage changes annually), so a table from the wrong year is a wrong number. New tables for officers, warrants, and enlisted are posted separately and can land on different days in January.",
        examples: [
          { grade: "E-1, with 4+ months", amount: "$2,407.20/mo" },
          { grade: "E-1, first 4 months", amount: "$2,225.70/mo" },
          { grade: "E-5, over 6 years", amount: "$4,110.00/mo" },
          { grade: "O-1, entry (2 or less years)", amount: "$4,150.20/mo" },
        ],
        examplesNote:
          "Example cells only — DFAS tables effective Jan 1, 2026. Verify yours on the official table; basic pay, drill pay, BAS, clothing, and special-pay tables all live on the one DFAS page below.",
        links: [DFAS_TABLES],
      },
      {
        name: "Drill pay (Reserve / National Guard)",
        kind: "Reserve · Guard",
        summary:
          "Reservists are paid off the same basic pay table, but per drill period instead of per month: one drill period = 1/30 of the monthly basic pay rate for your grade and years of service. A standard drill weekend is 4 drill periods (a “UTA”), so a typical weekend pays roughly 4/30 of the monthly rate; annual training and active-duty orders over 30 days switch you to regular monthly active-duty pay. DFAS publishes separate Drill Pay Rates tables (officers, prior-enlisted officers, warrants, enlisted) on the same Pay Tables page.",
        who: "Guard and Reserve members — check it when budgeting around drill weekends or comparing a civilian job offer against drill income.",
        links: [DFAS_TABLES],
      },
    ],
  },
  {
    title: "Allowances (tax-free)",
    entries: [
      {
        name: "BAH — Basic Allowance for Housing",
        kind: "Housing · tax-free",
        summary:
          "Tax-free monthly housing money for members who aren't provided government housing. Your rate is set by exactly three things: your duty station ZIP code (ZIPs group into Military Housing Areas — it's where you're stationed, not where you choose to live), your pay grade, and your dependency status (with-dependents vs. without-dependents rate). DTMO surveys local rents every year and resets rates each January 1; rates are designed to cover the large majority of typical rent + utilities for your grade's housing profile, with a built-in small out-of-pocket share in recent years. If rates drop in your area, rate protection generally keeps you at your old rate while your grade, duty station, and dependency status stay the same. BAH is not based on your actual rent — rent below your rate and the difference stays in your pocket.",
        who: "Anyone living off base or house-hunting before a PCS. Look up the gaining station's rate before signing a lease.",
        flag: "Rates reset each January 1, and the exact coverage share is policy that can change — the DTMO lookup carries the current number.",
        links: [
          {
            label: "DTMO BAH Rate Lookup",
            url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/",
          },
        ],
      },
      {
        name: "Dual-military BAH — two members, two entitlements (neither spouse is the other's dependent)",
        kind: "Housing · member married to member",
        summary:
          "When two service members are married to each other, each member's housing allowance is their own. Under 37 U.S.C. § 421, as the DoD Financial Management Regulation states it, a spouse who is on active duty in a uniformed service and entitled to basic pay cannot be counted as the other member's dependent for housing allowance purposes — so each member is authorized BAH or OHA in their own right, at their own grade and their own permanent duty station, subject to the with/without-dependent allocation in the next two entries. One published exception: when one member enters a non-pay status, the other member may claim that member as a dependent and draw BAH or OHA at the with-dependent rate for the duration of the non-pay status (unless the dependent is confined in a penal or correctional institution); a member may also claim as a dependent a member spouse on inactive duty for training (Reserve drills). No rates here — DTMO's BAH lookup is the rate route, as in the BAH entry above.",
        who: "Dual-military couples — the rule everything else in this entry set hangs on. Your servicing finance office applies it to your records.",
        links: [
          {
            label: "DoD Financial Management Regulation, Vol. 7A, Ch. 26 (May 2025), §4.5 — member married to member",
            url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf",
          },
          {
            label: "DTMO BAH Rate Lookup",
            url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/",
          },
        ],
      },
      {
        name: "Dual-military BAH with no other dependents — both members draw the without-dependent rate",
        kind: "Housing · member married to member",
        summary:
          "A member-to-member couple with no other dependents does not get a with-dependent rate for being married. The regulation: “When both Service members have no dependents, each is treated as a Service member without a dependent for BAH or OHA. This applies whether the Service members are living together or separately if Government quarters are not provided.” Government quarters change it: when members married to each other jointly occupy family-type quarters, neither member is authorized BAH or OHA, even if no dependent resides in the quarters (unless a dependent is prevented by a military order from occupying quarters).",
        who: "Dual-military couples with no children or other dependents — check both members' LESs after marriage; a with-dependent rate on either one is the error this entry exists to catch.",
        links: [
          {
            label: "DoD Financial Management Regulation, Vol. 7A, Ch. 26 (May 2025), §4.5.2 — DoD Comptroller",
            url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf",
          },
        ],
      },
      {
        name: "Dual-military BAH with children — one with-dependent rate, and the couple elects who draws it",
        kind: "Housing · member married to member",
        summary:
          "Children (and any other dependents the couple has collectively) support exactly one with-dependent housing allowance between the two members; the other member draws the without-dependent rate. The regulation: “Generally, only one Service member may receive BAH or OHA at the with-dependent rate (including BAH-Diff) if they collectively have one or more dependents… including all children, parent(s), and wards.” For a shared child, the members must choose which one receives the with-dependent rate — if they cannot agree, the senior Service member receives it. They may later elect to transfer the authorization from one member to the other for any reason; changes are effective as of the election date and may not be applied retroactively. Children from prior relationships are pooled the same way: when the children living with the couple are from one or both members' prior relationships, only one member may claim a with-dependent allowance based on the child(ren) collectively, as parent or stepparent — the same if the couple also has shared children. Separate households: when both members maintain separate households at or near their duty stations, each is individually authorized BAH or OHA but still only one may receive the with-dependent rate — except that if the members no longer share a common residence due to military orders, their authorizations are determined separately, and each member may receive a with-dependent rate if a dependent child resides with that member. DTMO's FAQ states the headline the same way: one member receives the “with dependent” rate and the other the “without dependent” rate, and both members may not receive a housing allowance based on the same dependent.",
        who: "Dual-military couples with children — the election is made with both members' servicing finance offices, which each need the full details of the member spouse (full name, Social Security number, duty station, branch of Service) so each member's command is informed of the other's actions. If one member elects to stop receiving the with-dependent allowance, the other may then claim the dependent(s).",
        links: [
          {
            label: "DoD Financial Management Regulation, Vol. 7A, Ch. 26 (May 2025), §4.5.2.3 — DoD Comptroller",
            url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf",
          },
          { label: "DTMO — BAH Eligibility FAQs", url: "https://www.travel.dod.mil/Support/ALL-FAQs/Article/2978684/" },
        ],
      },
      {
        name: "Dual-military housing overseas — the same rules run OHA, and BAH-Diff sits inside the one with-dependent allowance",
        kind: "Housing · member married to member · OHA",
        summary:
          "Nothing about the member-to-member allocation changes overseas: the regulation's member-married-to-member section is written for “BAH or OHA” in every operative paragraph, so the own-right principle, the both-without-dependent default, and the one-with-dependent election apply to OHA at an overseas duty station the same way. BAH-Diff is not a second bite: the regulation counts it inside the single with-dependent allowance (“including BAH-Diff”). The rest of the housing chapter — family separation housing, unaccompanied-tour rules, BAH rate protection — also applies to a member married to another member. The member-to-member rules for divorce or legal separation are a separate published block in the same chapter (primary-physical-custody parent authorized unless both agree otherwise; joint custody pays each parent for the periods the child is actually in that parent's physical custody; a child in a third party's custody supports one allowance — the senior member's if the members cannot agree) and live with this app's divorce/custody BAH content, cross-referenced here rather than duplicated.",
        who: "Dual-military couples at an overseas station (housing office for OHA processing), and any dual couple working a custody or separation change — servicing finance office first.",
        links: [
          {
            label: "DoD Financial Management Regulation, Vol. 7A, Ch. 26 (May 2025), §§4.5, 5.6 — DoD Comptroller",
            url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf",
          },
        ],
      },
      {
        name: "BAS — Basic Allowance for Subsistence (food)",
        kind: "Food · tax-free",
        summary:
          "A flat, tax-free monthly food allowance meant to offset the cost of feeding the member (not the family). Unlike basic pay it does not vary by grade within a category or by location: there is one enlisted rate and one lower officer rate (officers have always paid for their own meals, including on ship). A double enlisted rate, BAS II, applies in limited cases where a commander certifies enlisted members have no access to a government dining facility — conditions apply. Members who eat in a government dining facility on dedicated meal entitlement may see meal deductions instead — check your LES.",
        who: "Everyone — it's a fixed line in every budget and in the RMC estimate below.",
        flag: "Rates reset each January with the USDA food-cost index. The BAS table is posted on the DFAS Pay Tables page (posted Dec 2025 for the 2026 rates).",
        figures: ["Enlisted: $476.95/mo — DFAS 2026 rate", "Officer: $328.48/mo — DFAS 2026 rate"],
        links: [{ label: "DFAS Pay Tables — BAS table posted there", url: DFAS_TABLES.url }],
      },
      {
        name: "OHA + MIHA — housing overseas",
        kind: "Housing overseas",
        summary:
          "Outside the U.S. you get OHA (Overseas Housing Allowance) instead of BAH, and it works differently: it reimburses your actual rent up to a locality cap, plus a utilities/maintenance allowance, and rates move with local costs and currency exchange rates (reviewed far more often than BAH). A one-time MIHA (Move-In Housing Allowance) helps with initial occupancy costs at a new overseas lease. Your LES may show OHA under a “BAH” line — that's normal overseas bookkeeping.",
        who: "Members assigned overseas (OCONUS) leasing on the local economy. Check the cap before signing an overseas lease — rent above the cap is out of your pocket.",
        links: [
          {
            label: "DTMO OHA Rate Lookup",
            url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup",
          },
        ],
      },
      {
        name: "COLA — Cost-of-Living Allowance (overseas, and a few U.S. areas)",
        kind: "Everyday prices · overseas + select CONUS",
        summary:
          "A separate allowance that offsets higher everyday prices (groceries, gas, goods) — it's for the grocery cart, not the rent check. Overseas COLA varies by location, grade, years of service, and number of dependents, and adjusts during the year as price indexes and exchange rates move — budget it as money that can shrink. A much smaller CONUS COLA exists for a handful of high-cost U.S. duty areas (and is one of the few taxable allowances).",
        who: "Members at OCONUS stations (Hawaii and Alaska included) and the few CONUS COLA locations.",
        links: [
          {
            label: "DTMO Overseas COLA Rate Lookup",
            url: "https://www.travel.dod.mil/Allowances/Overseas-Cost-of-Living-Allowance/Overseas-COLA-Rate-Lookup/",
          },
        ],
      },
      {
        name: "Clothing allowances",
        kind: "Uniforms",
        summary:
          "Uniform money, handled on autopilot for most people. Enlisted members receive their initial uniform issue and then a clothing replacement allowance (paid annually, building into basic/enlisted maintenance rates) to replace worn items; officers generally buy their own uniforms, with an initial clothing allowance at commissioning in most services. Separate DFAS tables cover standard initial, replacement, civilian-clothing, and branch-specific supplementary allowances (posted Nov 2025 for the current cycle — amounts change).",
        who: "Mostly enlisted — know it exists before you pay out of pocket for replacement uniforms; check the tables if a supplementary allowance (e.g., a special-duty uniform) applies to you.",
        links: [{ label: "DFAS Pay Tables — Clothing Monetary Allowances", url: DFAS_TABLES.url }],
      },
    ],
  },
  {
    title: "Pay Estimator",
    entries: [
      {
        name: "Regular Military Compensation (RMC) Calculator — DoD's official estimator",
        kind: "Official DoD calculator",
        summary:
          "Your paycheck understates what you earn. Regular Military Compensation is DoD's official measure of your cash-equivalent pay: basic pay + BAH + BAS + the federal tax advantage (the extra civilian salary you'd need because BAH and BAS arrive tax-free). The official RMC Calculator takes your grade, years of service, tax filing status, family size, and duty-station ZIP (or OCONUS status) and returns your total RMC plus the comparable civilian salary — the single best number to use when weighing a civilian job offer or a reenlistment decision. It does not count special pays, bonuses, retirement accrual, or TRICARE, so real total compensation is higher. No identifying data is requested or stored.",
        who: "Anyone comparing pay across duty stations, before a PCS, or — critically — anyone in the Transition window comparing a civilian offer against what they actually make now.",
        links: [
          { label: "RMC Calculator", url: "https://militarypay.defense.gov/Calculators/RMC-Calculator/" },
          {
            label: "All DoD compensation calculators (incl. retirement estimators)",
            url: "https://militarypay.defense.gov/Calculators.aspx",
          },
        ],
      },
    ],
  },
  {
    title: "LES Decoder — reading your Leave and Earnings Statement",
    entries: [
      {
        name: "myPay — where your LES lives",
        kind: "DFAS",
        summary:
          "Your LES is your official pay record, issued by DFAS through myPay. You get a mid-month Notice of Pay Advisory (NPA) and the full end-of-month LES (posting dates are on the DFAS pay calendar below — roughly a week before each payday). Download and keep copies: lenders, the VA, landlords, and the IRS all ask for LESs, and you'll want your own archive before you separate.",
        flag: "Coast Guard members are the exception — they use Direct Access through the Coast Guard Pay & Personnel Center instead of myPay.",
        links: [
          MYPAY,
          {
            label: "LES 101 — official field-by-field walkthrough (DVIDS)",
            url: "https://www.dvidshub.net/news/printable/556266",
          },
        ],
      },
    ],
    lesBlocks: [
      {
        title: "Top line — who you are (fields 1–9)",
        text: "Name, pay grade, Pay Date / PEBD (your pay entry base date — the date your years of service are counted from), Years of Service, ETS, and branch/unit codes. Everything else on the statement is calculated from these. If your grade or PEBD is wrong here, your pay is wrong everywhere.",
      },
      {
        title: "Entitlements — what you earned",
        text: "Base pay, BAH (check the rate and the with/without-dependents type), BAS, and any special/incentive pays and bonuses (flight pay, sea pay, hazardous duty, family separation, etc.). This is the gross side — if money should be flowing to you, it appears here first. Missing entitlement after a PCS, promotion, or marriage? It'll be missing here.",
      },
      {
        title: "Deductions — what came out before you saw it",
        text: "Federal income tax withheld (FITW), state tax, FICA (Social Security + Medicare), SGLI life-insurance premiums (and FSGLI/dependent dental where elected), any meal deductions, and government debts (overpayments being collected back). Note: BAH and BAS are generally not taxed federally, so withholding is driven mostly by basic pay and special pays.",
      },
      {
        title: "Allotments — payments you told DFAS to make",
        text: "Money sent straight from your pay to a bank account, a spouse, an insurer, or a charity (see Money Help below). Allotments are your instructions — a surprise here means an old instruction you forgot, so review them whenever you set up or move accounts.",
      },
      {
        title: "Mid-month pay — the advance (the #1 confusion)",
        text: "Mid-month pay is not extra money. It's an advance of about half your estimated monthly net pay, paid on the 15th. On the end-of-month LES it shows up as a deduction, because you've already received it — the end-of-month deposit is what remains. The mid-month statement (NPA) is an estimate; only the end-of-month LES is the complete, final record for the month.",
      },
      {
        title: "Leave block",
        text: "Balance brought forward, days earned (2.5 per month), days used, current balance, projected ETS balance, and your use-or-lose amount — leave above the carryover cap (generally 60 days; special leave accrual rules can raise it) disappears at the end of the fiscal year (Sep 30). Watch this block starting every summer.",
      },
      {
        title: "Tax blocks",
        text: "Federal and state taxable wages for the period and year-to-date, exemptions/withholding elections, and additional amounts you asked to withhold. Wrong state here usually means your legal residence/duty withholding was never updated after a PCS — fix it in myPay/admin before tax season, not during.",
      },
      {
        title: "TSP block (fields 63–75)",
        text: "Your Thrift Savings Plan contributions for the period and year-to-date, split Traditional vs. Roth, plus your elected percentages/rates. If you changed your contribution and it doesn't show here within a pay cycle or two, it didn't take. (TSP and BRS details live in the Benefits section.)",
      },
      {
        title: "Remarks (field 76) — read it every month",
        text: "This is where finance explains itself: pay starts and stops, corrections, debt notifications (an overpayment being established or collected shows here before or as it hits deductions), leave adjustments, and pending changes. If your pay changed and you don't know why, the answer is almost always in Remarks.",
      },
      {
        title: "Summary / year-to-date totals (bottom)",
        text: "Total entitlements minus total deductions and allotments = your net pay, plus cumulative year-to-date figures that should roughly track your W-2 world. This is the number that actually deposits.",
      },
    ],
    lesGotchas: [
      "Mid-month LES ≠ the real LES — judge your month by the end-of-month statement.",
      "Check BAH type/rate the first LES after any PCS, promotion, marriage, or divorce — BAH errors are the most common LES error.",
      "A debt can start collecting with little more than a Remarks line — catch it the month it appears, while finance can still fix it easily.",
      "Save every LES — VA claims, VA-loan income verification, and tax returns all reach back to them.",
    ],
  },
  {
    title: "Pay Dates",
    entries: [
      {
        name: "The pay calendar — 1st and 15th, moved earlier, never later",
        kind: "DFAS",
        summary:
          "Active-duty pay is calculated monthly and paid in two installments: mid-month pay on the 15th and end-of-month pay on the 1st of the following month. When the 1st or 15th falls on a weekend or federal holiday, DFAS pays on the preceding business day — payday moves earlier, never later (that's why some months pay on the 13th or the 30th/31st). DFAS publishes the full year's calendar in advance, including the dates each NPA and LES will post in myPay — pull the current year's page every January and set your bill autopays around it.",
        who: "Everyone budgeting bills against paydays; especially anyone whose rent or loan autopay is set to the 1st or 15th.",
        flag: "The linked calendar is the 2026 page — DFAS posts a fresh one each year. Example of the pattern (2026 calendar): Feb mid-month paid Fri Feb 13 because Feb 15 was a Sunday.",
        links: [
          {
            label: "DFAS Active Duty Paydays (2026 page)",
            url: "https://www.dfas.mil/MilitaryMembers/payentitlements/2026ACPayDay/",
          },
        ],
      },
      {
        name: "“Early pay” from banks — a bank feature, not your payday",
        kind: "Non-official bank feature",
        nonOfficial: true,
        summary:
          "USAA, Navy Federal, Armed Forces Bank, and some other military-friendly banks advertise early direct deposit — they release your pay a day or so before the official DFAS payday once they see the incoming deposit. That is a courtesy feature of your bank, not a DFAS entitlement: the official payday above is the only date DFAS guarantees, early posting can vary or disappear (bank policy, holidays, account type), and a deposit that posts early one month is not promised early the next. Budget to the official date; treat early posting as a pleasant surprise.",
        links: [],
      },
    ],
  },
  {
    title: "Money Help",
    entries: [
      {
        name: "MilTax — free tax prep and filing, built for military life",
        kind: "Free tax help · Military OneSource",
        summary:
          "MilTax is the Defense Department's free tax service through Military OneSource: tax-prep software designed for military situations (deployments and combat pay, multi-state filings from PCS moves, living overseas) plus free one-on-one help from MilTax consultants. Eligible users file their federal return and up to five state returns free, with no income limit. Who's eligible: service members (including Coast Guard), eligible family members, survivors, and recent veterans up to 365 days after separation or retirement.",
        who: "Every January–April; especially after a PCS year, a deployment year, or your final year in service.",
        flag: "Seasonal: the software opens each tax season (mid-January) — it's not a year-round filing tool.",
        links: [
          {
            label: "MilTax — Military OneSource",
            url: "https://www.militaryonesource.mil/financial-legal/taxes/miltax-military-tax-services/",
          },
        ],
      },
      {
        name: "Free financial counseling — Military OneSource",
        kind: "Free counseling",
        summary:
          "Free, confidential, solution-focused financial counseling with accredited (AFC-certified) counselors who understand military pay and benefits — budgeting and spend plans, debt payoff coaching (including help contacting creditors), housing trouble, PCS money planning. Available in person, by phone, by secure chat, or by video, from anywhere in the world; spouses can attend with you. There's no session cap on OneSource financial counseling, and eligibility continues 365 days after separation or retirement.",
        who: "The first call when money gets tight — before a problem becomes a clearance or readiness problem. Also free at every major life event: marriage, baby, PCS, deployment, transition.",
        links: [
          {
            label: "Financial counseling — Military OneSource",
            url: "https://www.militaryonesource.mil/benefits/financial-counseling/",
          },
        ],
      },
      {
        name: "Personal Financial Counselors (PFCs) — free help on your installation",
        kind: "Free counseling · FINRED",
        summary:
          "Separate from OneSource's phone/chat counselors, DoD's Office of Financial Readiness (FINRED) places Personal Financial Counselors at installations and Guard/Reserve locations worldwide: free, confidential, walk-in or appointment counseling and group classes — budgeting, debt, credit, emergency funds, home buying, retirement basics. The PFC locator map is the fastest way to find the counselor assigned near you.",
        who: "Anyone who'd rather sit down face-to-face; units also bring PFCs in for financial-readiness training touchpoints (first duty station, pre-deployment, transition).",
        links: [{ label: "FINRED PFC locator map", url: "https://finred.usalearning.gov/pfcMap" }],
      },
      {
        name: "Allotments — autopay straight out of your military pay",
        kind: "Pay management",
        summary:
          "An allotment is a standing instruction telling DFAS to send part of your pay directly somewhere each month — a savings account at another bank, your spouse, an insurance premium, a mortgage servicer, or charity (CFC). You can hold up to six discretionary allotments at once, managed in myPay (start/stop/change; paper backup is DD Form 2558). Two hard rules protect you: since 2015 you cannot use a discretionary allotment to buy, lease, or rent personal property (cars, electronics, furniture — a rule aimed squarely at predatory lenders), and under the Military Lending Act a lender cannot require an allotment as a condition of a loan. Allotments are deducted across both the mid-month and end-of-month calculations, so a new allotment changes both deposits — set them up before a deployment, while you still have easy myPay access.",
        who: "Great for forced savings and for keeping a spouse's household account funded during deployment or school. Review your allotments on your LES at least twice a year and after every PCS.",
        links: [{ label: "Manage allotments in myPay", url: MYPAY.url }],
      },
      {
        name: "Military Lending Act (MLA) — the 36% cap that protects you when you borrow",
        kind: "Legal protection · CFPB",
        summary:
          "Federal law (10 U.S.C. § 987) that caps what lenders can charge covered borrowers — active-duty members and their dependents — on most consumer credit (credit cards, payday loans, installment loans, vehicle title loans, tax-refund-anticipation loans). The cap is 36% MAPR (Military Annual Percentage Rate), and MAPR is broader than ordinary APR: it folds in most fees and add-on products (credit insurance, debt-cancellation, application/participation fees), so a loan can't hide its cost outside the interest rate. The MLA also bans prepayment penalties, mandatory arbitration, waiving your SCRA rights, and mandatory allotments.",
        flag: "Know the exclusions: residential mortgages and purchase-money loans to buy a vehicle or other property are NOT covered by the MLA (pre-service debts are SCRA territory instead — see the next entry). If a lender won't tell you the MAPR or pushes an allotment, walk away.",
        who: "Before signing any loan or credit card while on active duty — and if you think a lender violated the cap, the CFPB page below explains your rights and where to complain.",
        links: [
          {
            label: "Military Lending Act — CFPB",
            url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/military-lending-act-mla/",
          },
        ],
      },
      {
        name: "SCRA — Servicemembers Civil Relief Act",
        kind: "Cross-reference · full detail in Benefits",
        summary:
          "The Servicemembers Civil Relief Act is the other big shield: it can cut interest to 6% on debts you took on before active duty (including mortgages, for a period after service), let you terminate leases after orders, and pause court proceedings while service materially affects you. Protections generally must be invoked (written notice + copy of orders), so don't assume they're automatic. Full summary and links live in this app's Benefits section (Retirement & money / legal protections).",
        benefitsRef: true,
        links: [{ label: "DoD SCRA website", url: "https://scra.dmdc.osd.mil/scra/#/home" }],
      },
      {
        name: "Emergency relief societies",
        kind: "Cross-reference · full detail in Benefits",
        summary:
          "When the problem is an emergency bill, not a budget: your branch's relief society — Army Emergency Relief (AER), Navy-Marine Corps Relief Society (NMCRS), Air & Space Forces Aid Society (AFAS), Coast Guard Mutual Assistance (CGMA) — provides interest-free loans and grants for essentials (rent, utilities, car repair, emergency travel, food). Free, fast, and chain-of-command friendly. Summaries, eligibility, and official links for all four live in this app's Benefits section (Part 2, by branch); your installation's PFC (above) can also walk you to the right office.",
        benefitsRef: true,
        links: [],
      },
    ],
  },
];
