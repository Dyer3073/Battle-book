// Tax & Residency Center — transcribed from the researched pack
// (~/workspace/military-app/taxes/taxes.md, researched Nov 9, 2026).
// Official sources only: IRS Publication 3 (2025), the IRS combat-
// zone Q&A and Topic No. 455, Military OneSource (MilTax, MSRRA), and
// the enrolled text of P.L. 117-333 for 50 U.S.C. § 4001. Where an
// IRS page and a OneSource summary differ, the IRS position is
// printed and the difference is flagged — never blended. MSRRA's
// three-way election is printed from the enrolled text of
// § 4001(a)(3) as amended by VAEIA 2022; the voting-residence use is
// attributed to the VBTA-era rule as OneSource states it, with the
// pack's nuance flag. No state-by-state catalog anywhere.

import type { RefGroup } from "./refdata";

export const TAXES_STANDING =
  "This section is general information about published IRS and Military OneSource rules — it is not tax advice, and Battle Book cannot decide how you should file. Tax situations turn on individual facts. For your specific return, use MilTax's free consultants, an installation VITA/tax center, or a qualified tax professional.";

export const TAXES_INTRO =
  "File federal taxes with free, military-built help (MilTax). If you serve in a combat zone or contingency operation, your IRS deadlines stop running and restart at 180 days after you leave, plus the days that were left in the filing period when you entered — and your combat pay is tax-free (capped for commissioned officers). For state taxes, orders alone never change your domicile: your military pay is taxed by your state of legal residence, not your duty state, and since January 5, 2023, a married couple may elect among three residences for tax purposes — the member's, the spouse's, or the member's permanent duty station.";

const MILTAX = { label: "Military OneSource — MilTax: Free Tax Filing Software & Support", url: "https://www.militaryonesource.mil/financial-legal/taxes/miltax-military-tax-services/" };
const IRS_CZ = { label: "IRS — Extension of deadlines: Combat zone service (Q&A)", url: "https://www.iRS.gov/vi/newsroom/extension-of-deadlines-combat-zone-service" };
const PUB3 = { label: "IRS Publication 3 (2025), Armed Forces' Tax Guide (PDF)", url: "https://www.irs.gov/pub/irs-pdf/p3.pdf" };
const OS_DEPLOYED = { label: "Military OneSource — Filing Military Taxes While You Are Deployed", url: "https://www.MilitaryOneSource.mil/financial-legal/tax-resource-center/special-tax-considerations/ins-and-outs-of-filing-military-taxes-when-you-are-deployed/" };
const ENROLLED = { label: "Enrolled text, P.L. 117-333 § 18 (50 U.S.C. § 4001 as amended) — Congress.gov", url: "https://www.congress.gov/bill/117th-congress/house-bill/7939/text/enr" };
const CONGRESS_SUM = { label: "Congress.gov summary, H.R. 7939 (P.L. 117-333)", url: "https://www.congress.gov/bill/117th-congress/house-bill/7939" };
const OS_MSRRA = { label: "Military OneSource — Military Spouses Residency Relief Act", url: "https://pre.militaryonesource.mil/financial-legal/legal/military-spouses-residency-relief-act/" };
const OS_TERMS = { label: "Military OneSource — Tax Terms Defined for the Military", url: "https://www.militaryonesource.mil/financial-legal/taxes/tax-terms-defined-for-the-military/" };
const FTA = { label: "Federation of Tax Administrators — state tax agency links", url: "https://www.taxadmin.org/state-tax-agencies" };
const TC455 = { label: "IRS Topic No. 455 — Moving Expenses for Members of the Armed Forces", url: "https://www.irs.gov/ht/taxtopics/tc455" };
const IRS_MILFAM = { label: "IRS — Military Family Tax Benefits", url: "http://irs.gov/newsroom/military-family-tax-benefits" };
const IRS_ABROAD = { label: "IRS — Automatic 2-Month Extension (taxpayers abroad)", url: "https://www.eitc.irs.gov/ko/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-automatic-2-month-extension-of-time-to-file" };

export const TAXES_GROUPS: RefGroup[] = [
  {
    title: "MilTax: Free Filing, Done Properly",
    note: "Source for the whole tile: Military OneSource, “MilTax: Free Tax Filing Software & Support” (updated Oct 16, 2026), unless an entry says otherwise.",
    entries: [
      {
        name: "What MilTax is — software plus human consultants, both free",
        body: "MilTax is Military OneSource's tax service, described by OneSource as “the only free tax service made exclusively for the military.” It has two halves, and both are free: (1) military-specific tax preparation and e-filing software, built to account for military life — OneSource names PCS moves and deployments as the situations civilian tools miss — and (2) free one-on-one consultations with trained tax consultants, by phone or scheduled chat, for questions the software can't settle. OneSource's own comparison table states the software carries a 100% accuracy guarantee and a maximum refund guarantee. The consultant help topics OneSource lists by name: the Military Spouses Residency Relief Act, moving deductions, and combat pay exclusions — i.e., exactly the other tiles in this section.",
        who: "Anyone in the eligible groups in the next entry, every filing season — and for questions year-round via the consultant line.",
        links: [MILTAX],
        source: "Military OneSource — MilTax",
      },
      {
        name: "Who is eligible — members, families, survivors, and the 365-day post-separation window",
        body: "Per OneSource, “both the tax software and expert consultations are free for active-duty service members, eligible family members, survivors and recent veterans up to 365 days from their separation or retirement date.” A DoD release of the same program states the list as: service members including Coast Guard, spouses, survivors, and recent veterans up to 365 days from separation or retirement. Eligibility is verified through DEERS (the Defense Enrollment Eligibility Reporting System) when you sign in — OneSource warns DEERS may be intermittently unavailable under tax-season volume. Guard and Reserve members reach MilTax through their Military OneSource eligibility; the MilTax landing page itself phrases eligibility by the categories above rather than by component, so a drilling member who hits a DEERS eligibility wall should resolve it through Military OneSource (800-342-9647), not assume exclusion.",
        who: "Check this first if you separated or retired within the last year — the 365-day clock is the most-missed eligibility fact in this section — and if you are a survivor filing after a death in service (see also the tax-forgiveness material in Pub. 3, noted in the combat-zone tile).",
        flag: "MilTax Guard/Reserve eligibility wording: OneSource's MilTax landing page lists eligibility as “active-duty service members, eligible family members, survivors and recent veterans up to 365 days from their separation or retirement date” and verifies via DEERS; it does not spell out drilling Guard/Reserve status in that sentence. No component-by-component eligibility table is printed.",
        links: [MILTAX],
        source: "Military OneSource — MilTax",
      },
      {
        name: "What it costs (nothing) and what it files — federal plus up to five state returns",
        body: "Per OneSource's comparison table, an eligible user files the federal return and up to five state returns at no charge — the five-state allowance is the military-specific detail that matters for PCS families filing in a domicile state and a duty state in the same year. Access runs through Military OneSource sign-in. Consultants: call 800-342-9647 to talk to a tax pro, or log in to chat and schedule an appointment. Consultant access is presented by OneSource without the January limitation below.",
        who: "Multi-state filers especially — the residency election can create a two-state year.",
        flag: "Seasonal window: OneSource states “MilTax software will be available in January 2027” for the coming season (the page is re-dated each cycle — the prior cycle read Jan. 15, 2026). The software is a filing-season product; it is not presented as open year-round.",
        links: [MILTAX],
        source: "Military OneSource — MilTax",
      },
      {
        name: "The in-person alternative — VITA",
        body: "OneSource's MilTax page routes users who want face-to-face help to a Volunteer Income Tax Assistance (VITA) office (“Want in-person support? Find a Volunteer Income Tax Assistance office”), and installations run VITA/tax centers during filing season, typically through legal assistance. VITA is an IRS program; MilTax is the DoD one — VITA is the in-person lane of the same free system, not a competitor.",
        who: "Anyone whose return involves a fact pattern they don't want to handle alone (business income, rental property, a combat-zone year) and who is near an installation in season.",
        links: [MILTAX],
        source: "Military OneSource — MilTax (VITA locator link lives on this page)",
      },
    ],
  },
  {
    title: "Combat Zone & Deployment Tax Rules",
    note: "Administered by: the IRS. Statutes: 26 U.S.C. § 112 (combat pay exclusion) and § 7508 (deadline postponement). IRS reference of record: Publication 3 (2025), chapters “Income Exclusions for Armed Forces Members in Combat Zones” and “Extensions of Deadlines.”",
    entries: [
      {
        name: "The deadline extension — the formula, as the IRS states it",
        body: "If you serve in a combat zone, a qualified hazardous duty area, or a contingency operation (or in direct support of one), the deadlines for filing your return, paying your tax, filing a refund claim, making IRA contributions, and most other acts with the IRS are automatically postponed. Pub. 3 states the computation in two parts: (1) Your deadline is extended 180 days after the later of (a) your last day in the zone (or the last day the area qualifies), or (b) the last day of any continuous qualified hospitalization for an injury received there (hospitalization outside the U.S.; hospitalization inside the U.S. counts for up to 5 years). (2) In addition to the 180 days, the deadline is extended by the number of days that were left in the normal period when you entered the zone. If you entered before the period began (e.g., before Jan. 1 for a filing deadline), the entire period is added. The IRS's own worked example (Q&A A12): a member who entered the zone March 1 had 46 days left before April 15; his extension is his service plus 180 days plus those 46 days = a 226-day post-departure window. No interest or penalties accrue for the extension period, and IRS assessment and collection deadlines are extended too. The extension applies regardless of the source of the income (A13 — investment income is covered, not just military pay).",
        who: "Anyone with qualifying service — and their spouse (next entry).",
        flag: "OneSource's deployed-filing summary phrases the extension as “the period of your service plus 180 days afterward” and omits the remaining-days component. The IRS formula above controls; the shorter OneSource phrasing is not repeated as the rule.",
        links: [IRS_CZ, PUB3],
        source: "IRS — combat zone deadline Q&A; Publication 3 (2025)",
      },
      {
        name: "How the extension starts, who else it covers, and what else it pauses",
        body: "It is automatic, but verify. OneSource states your command notifies the IRS of your deployment so the extension applies automatically; OneSource also gives the self-check route — email the IRS at combatzone@irs.gov with name, stateside address, date of birth, and deployment date (never include a Social Security number in that email) — and the belt-and-suspenders habit of writing “COMBAT ZONE” in red at the top of a paper return and on IRS notices you return. Spouses are covered, with two exceptions. The IRS Q&A (A20–A21) states the deadline extensions apply to the spouse of the member in the zone, whether or not a joint return is filed, except (1) when the member's extension rests on hospitalization inside the United States, and (2) for any tax year beginning more than 2 years after the combat zone designation terminates. It pauses more than filing. IRS Q&A A24/A27/A28: the postponement also covers time-sensitive acts such as the 90-day Tax Court petition window and the innocent-spouse-relief clock; estimated-tax penalties do not accrue for a missed quarterly payment inside the window; and a member on a pre-existing IRS installment plan does not have to make payments during service plus 180 days, with no additional interest or penalties for that period. Refunds still earn interest from April 15 if the return is filed by the extended due date (A29). Death in service. Pub. 3 separately covers forgiveness of a decedent's tax liability for a member who dies in a combat zone or from combat-zone wounds (the year of death and earlier years back to the start of zone service) — this section names this benefit and routes survivors to MilTax/legal assistance for the claim steps rather than reproducing the claim procedure.",
        links: [IRS_CZ, OS_DEPLOYED, PUB3],
        source: "IRS — combat zone deadline Q&A; Military OneSource; Publication 3 (2025)",
      },
      {
        name: "The combat pay exclusion — tax-free pay, with a cap for commissioned officers",
        body: "Under 26 U.S.C. § 112 as Pub. 3 explains it, military pay received for any month during any part of which you served in a combat zone (or were hospitalized from wounds, disease, or injury incurred there) is excluded from federal gross income — part of a month counts as the whole month. The amount depends on rank: Enlisted members, warrant officers, and commissioned warrant officers: no limit — none of the combat zone pay is included in income. Commissioned officers (other than commissioned warrant officers): the exclusion is capped at the highest rate of enlisted pay, plus imminent danger/hostile fire pay, per month. Pub. 3 (2025) states the figure for 2025: $10,983 per month ($10,758 highest enlisted pay + $225 imminent danger pay). Reporting: ordinarily the member does nothing — the exclusion is already reflected on the Form W-2 (box 1 wages exclude it; nontaxable combat pay appears in box 12, code Q). If box 1 wrongly includes excluded pay, Pub. 3 directs the member to get a corrected W-2 from the finance office — you cannot exclude W-2 box 1 wages yourself. Retirement pay and pensions are not combat zone pay and never qualify.",
        flag: "The officer cap is year-specific — $10,983/month is Pub. 3 (2025)'s figure for 2025 ($10,758 + $225). The cap recomputes with each year's pay tables; it is printed labeled “for 2025, per Publication 3 (2025)” and the current year's Pub. 3 is the route.",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “Combat Zone Exclusion”",
      },
      {
        name: "What counts as combat zone pay",
        body: "Per Pub. 3, combat zone pay is pay received for a qualifying month for service in: (1) a combat zone designated by the President by Executive order; (2) a qualified hazardous duty area designated by Congress while receiving hostile fire/imminent danger pay; or (3) an area outside the zone where DoD certifies the service is in direct support of military operations in the zone and the member receives hostile fire/imminent danger pay. Presence that does not qualify, per Pub. 3: being in the zone on leave from a duty station outside it, merely passing through on a trip between two points outside it, or presence solely for personal convenience.",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “What Is Combat Zone Pay?”",
      },
      {
        name: "Which places qualify — route to the IRS list, don't memorize one",
        body: "Pub. 3 (2025) names the standing designations: the Afghanistan area (EO 13239), the Kosovo area (EO 13119), and the Arabian Peninsula (EO 12744) as combat zones; the Sinai Peninsula as a congressionally designated qualified hazardous duty area treated as a combat zone (generally from June 10, 2015); and DoD-certified direct-support locations for those zones (Pub. 3 lists, e.g., Jordan, Djibouti, Yemen, Somalia, and Syria for Afghanistan support, and Jordan, Lebanon, and eastern Turkey for Arabian Peninsula support, each with its own start date). Contingency operations designated by the Secretary of Defense carry the deadline extension even outside a designated zone.",
        flag: "Designations are added, dated, and ended by Executive order, statute, and DoD certification — the IRS updates its list, including mid-cycle additions. This section does not freeze a country list; it summarizes the categories above from Pub. 3 and routes you to the IRS's current “Combat zones” page and to your orders/finance office for your specific area and dates. The named areas are not presented as a complete current list.",
        links: [PUB3, IRS_CZ],
        source: "IRS Publication 3 (2025) — “Combat Zone Defined”; IRS Q&A Q17",
      },
      {
        name: "Retirement-account deadlines move too — and combat pay counts as IRA compensation",
        body: "Two Pub. 3 / IRS Q&A rules stated plainly: (1) IRA contribution deadlines are postponed with everything else — a member (in the IRS's example, a spouse asking about the member's IRA) may make a timely contribution for the prior year any time up to the extended filing deadline produced by the combat-zone formula (Q&A A26). (2) Nontaxable combat pay counts as compensation for IRA purposes — Pub. 3: “your compensation includes nontaxable combat zone pay” when figuring contribution and deduction limits, even though the pay is excluded from gross income. (The same logic is why combat pay can be contributed to the TSP; TSP mechanics live in Pay & Money.) Related Reserve-specific item, at Pub. 3 summary level: a qualified reservist distribution (QRD) — a distribution to a reservist ordered to active duty for more than 179 days (or indefinitely) after Sept. 11, 2001 — is exempt from the 10% early-distribution tax and may be repaid to an IRA within 2 years after active duty ends.",
        links: [IRS_CZ, PUB3],
        source: "IRS Q&A A26; Publication 3 (2025) — “Individual Retirement Arrangements (IRAs)”",
      },
      {
        name: "Nontaxable combat pay and the Earned Income Credit — an election, figured both ways",
        body: "Presented at Pub. 3 summary level; the full EIC rules are general tax law and live in the Form 1040/Pub. 596 lane. Pub. 3: although combat zone pay is excluded from income, you may elect to include your nontaxable combat pay in earned income for the Earned Income Credit. The mechanics Pub. 3 states: the election is all-or-nothing for the pay (include all of your nontaxable combat pay, or none); on a joint return each spouse makes their own election; the amount is the W-2 box 12, code Q figure, reported on Form 1040 line 1i (reporting change effective from 2024 per Pub. 3's Reminders). The election may increase or decrease the credit — Pub. 3's instruction is to figure the credit both ways before electing, and its worked example shows a couple declining the election because excluding the pay produced the larger credit ($2,389 vs. $2,242). This section prints the rule and the “figure it both ways” instruction; it does not print EIC income thresholds or predict which way benefits a given family (that is a filing determination — MilTax software computes it automatically).",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “Earned Income Credit (EIC)”",
      },
    ],
  },
  {
    title: "State Taxes & Residency: Domicile, SCRA, and the Spouse Election",
    note: "Federal frame: SCRA § 511, 50 U.S.C. § 4001 (“Residence for tax purposes”), as amended by MSRRA (2009), the Veterans Benefits and Transition Act (2018), and the Veterans Auto and Education Improvement Act of 2022 (P.L. 117-333, enacted Jan. 5, 2023). General SCRA mechanics live in Know Your Rights; this tile covers only the tax/residency provisions.",
    entries: [
      {
        name: "Domicile — the IRS definition",
        body: "Pub. 3, verbatim in substance: “Your domicile is the permanent legal home you intend to use for an indefinite or unlimited period, and to which, when absent, you intend to return. It isn't always where you presently live.” Everything in state military taxation hangs off that one concept: you have exactly one domicile at a time, physical presence somewhere else (even for years, on orders) does not by itself move it, and residence in the everyday sense — where you actually sleep, your duty station — is a different fact from domicile. The military term of art is state of legal residence (SLR); it is the state shown for state withholding in your pay records (see it on your LES), and it is changed on DD Form 2058 (State of Legal Residence Certificate) through your finance/personnel office — the form records a domicile change; per the services' own guidance it does not create one by itself (a real change requires actually establishing the new home — living there, and the ties states look at, such as voter registration, driver's license, and vehicle registration).",
        links: [PUB3, OS_TERMS],
        source: "IRS Publication 3 (2025) — “Domicile”; Military OneSource Tax Terms",
      },
      {
        name: "The member's SCRA tax protection — orders alone never move your domicile",
        body: "Under 50 U.S.C. § 4001(a)(1), a servicemember shall neither lose nor acquire a residence or domicile for purposes of taxation — with respect to the member's person, personal property, or income — by reason of being absent or present in any tax jurisdiction solely in compliance with military orders. OneSource states the same rule in plain language: “The SCRA allows active-duty military members to maintain their legal residence in the place they consider home.” Practical consequences, as the statute and official summaries state them: (1) your military compensation is taxed by your domicile state (if it taxes it at all), and the duty state may not tax that military pay — nor treat it as duty-state income — while you are a nonresident there on orders; (2) your personal property (the statute's own category — vehicles and household goods are the everyday examples) is not taxable by the duty state while you are there only on orders; (3) nothing about the protection is automatic in your paycheck unless your DD Form 2058 / LES state is correct.",
        links: [ENROLLED, OS_MSRRA],
        source: "50 U.S.C. § 4001(a)(1) (enrolled text, P.L. 117-333 § 18); Military OneSource",
      },
      {
        name: "The limit of the member's protection — only military income is shielded",
        body: "OneSource states it in one sentence: “SCRA only covers an active-duty service member's military income, so any other income the service member earns is taxable by the state in which it is earned.” OneSource applies the same rule to the household: “Military spouses and service members may be required to file and pay state income taxes on other income in the state where it is earned. This includes income from rental property.” So: an off-duty job, a business, or a rental house at the duty station is taxed under ordinary duty-state rules even though the military paycheck is not; and OneSource specifically advises members and spouses who own businesses to check with legal and tax professionals on how MSRRA and SCRA apply to them. The protection and its boundary travel together, on this card.",
        links: [OS_MSRRA],
        source: "Military OneSource — MSRRA (“Income covered by MSRRA”)",
      },
      {
        name: "MSRRA (2009) — the spouse's original protection",
        body: "The Military Spouses Residency Relief Act of 2009 amended the SCRA to extend the domicile protection to spouses. Its rule survives verbatim in the current statute, § 4001(a)(2): “A spouse of a servicemember shall neither lose nor acquire a residence or domicile for purposes of taxation with respect to the person, personal property, or income of the spouse by reason of being absent or present in any tax jurisdiction of the United States solely to be with the servicemember in compliance with the servicemember's military orders.” OneSource's plain-English version: “The Military Spouses Residency Relief Act allows military spouses to declare the same state of legal residency as their spouse.” Two conditions are built into the statutory sentence and stay visible: the spouse's presence in the duty state must be solely to be with the member, and it must be in compliance with the member's military orders — a spouse who moves for their own reasons, or stays behind by choice after the member PCSes, is outside the sentence. Under the original 2009 design the spouse's protected domicile was effectively anchored to the member's; the two expansions that loosened that anchor are the next two entries.",
        links: [ENROLLED, OS_MSRRA],
        source: "50 U.S.C. § 4001(a)(2) (enrolled text, P.L. 117-333 § 18); Military OneSource",
      },
      {
        name: "The 2018 expansion — VBTA: elect the member's residence, even if you never lived there",
        body: "The Veterans Benefits and Transition Act of 2018 added the first spouse election: a spouse may elect to use the servicemember's residence for tax purposes. OneSource states the key loosening exactly: “The Veterans Benefits and Transition Act allows spouses to choose their service member's state of legal residence even if they have not lived in that state.” Pub. 3 (2025) carries the same rule in its Domicile discussion: “If you are the civilian spouse of an active duty U.S. military servicemember, you can elect to have the same domicile or residence as the servicemember… You may also elect to have the same domicile or residence as the servicemember” even where your own domicile differs — and if your domicile already matches the member's, you may keep your prior domicile when you accompany the member to a new duty station. The VBTA election also carried the voting-residence consequence OneSource notes (“Spouses vote and pay taxes in their state of legal residence, which they can choose to be the same as their service member's” — see the voting nuance flag on the next entry).",
        links: [PUB3, OS_MSRRA],
        source: "IRS Publication 3 (2025) — “Domicile or tax residence of civilian spouse”; Military OneSource",
      },
      {
        name: "The current law (2023– ) — the three-way election for BOTH spouses",
        body: "This is the entry the whole section turns on; it is printed at full precision. Section 18 of the Veterans Auto and Education Improvement Act of 2022 (P.L. 117-333, enacted January 5, 2023) rewrote § 4001(a) again, adding paragraph (3), quoted from the enrolled text: “ELECTION.—For any taxable year of the marriage, a servicemember and the spouse of such servicemember may elect to use for purposes of taxation, regardless of the date on which the marriage of the servicemember and the spouse occurred, any of the following: (A) The residence or domicile of the servicemember. (B) The residence or domicile of the spouse. (C) The permanent duty station of the servicemember.” Congress.gov's official summary states the same three options. OneSource's current summary matches: “Its most recent change gives service members and their spouses three options for determining state residency for income tax purposes: the service member's residence or domicile, the spouse's residence or domicile, or the service member's permanent duty station.” What changed versus 2018, stated carefully: (1) the election now runs to the servicemember as well as the spouse (the paragraph names both); (2) the spouse's own residence became an electable option for the couple (OneSource describes this piece as “the option of maintaining residence in the civilian spouse's home state”); and (3) the permanent duty station — a state neither spouse may ever have domiciled in — became an electable residence for tax purposes. The election is made per taxable year (“for any taxable year of the marriage”) and regardless of when the marriage occurred. Amendment chain: SCRA § 511 (2003 recodification) → MSRRA, P.L. 111-97 (2009, spouse protection, § 4001(a)(2)) → VBTA, P.L. 115-407 § 302 (2018, spouse election of member's residence) → VAEIA, P.L. 117-333 § 18 (2023, three-way election for member and spouse).",
        flag: "Two precision guards. (1) Voting vs. taxation: the 2022 statutory election text covers “purposes of taxation.” The spouse's ability to use the member's residence for voting rests on the VBTA-era rule as OneSource states it (“Spouses vote and pay taxes in their state of legal residence, which they can choose to be the same as their service member's state of legal residence”) and on FVAP/state administration — this section attributes voting to that basis and does not claim the 2022 three-way election text itself grants a voting election (in particular, it does not tell spouses they may vote in the duty-station state by election). (2) An election chooses which state taxes you — it does not make income tax-free (OneSource: “A military spouse's income is subject to tax laws in their state of legal residence”). There is no federal election form in any official source cited here: the election is exercised through how the couple files and claims exemption in the duty state under that state's procedure, which is why this routes to MilTax consultants and the state authority rather than printing mechanics. Also flagged from the research: the three-step amendment chain is stated from the enrolled text of P.L. 117-333, the Congress.gov summary, and OneSource's timeline descriptions; the 2018 VBTA statutory citation (P.L. 115-407 § 302) is given from the amendment history as OneSource describes the Act's effect — the operative current law (the three-way election) is not in doubt.",
        links: [ENROLLED, CONGRESS_SUM, OS_MSRRA],
        source: "50 U.S.C. § 4001(a)(3) as inserted by P.L. 117-333 § 18 (enrolled text); Congress.gov; Military OneSource",
      },
      {
        name: "What the election does not do — read before relying on it",
        body: "Four limits, each from an official source in this section: (1) It picks the taxing state; it doesn't erase the tax. If the elected state taxes the income, it taxes it. (2) It does not move the member's underlying domicile by itself — the member's own domicile still changes only by genuinely establishing a new one; the election is a tax-treatment choice for the year, not a domicile transfer. (3) Non-military income earned in the duty state stays exposed there — the election protects the spouse's earned income position under the MSRRA sentence (presence solely to be with the member), not every dollar the household earns in the state. (4) States run the paperwork — exemption claims, withholding stops, and any state-specific forms are the elected/duty states' procedures; the federal statute creates the right, the states administer it, and OneSource's standing advice for edge cases (especially business owners) is a tax professional or MilTax consultant, not a guess.",
        links: [OS_MSRRA],
        source: "Military OneSource — Military Spouses Residency Relief Act",
      },
      {
        name: "Filing in a state — the routing pattern (no 50-state catalog)",
        body: "This section deliberately prints no state-by-state rules, rates, or exemption tables — states change their military provisions too often for a printed catalog to stay honest (the State Benefits Finder already routes to state veteran pages; tax specifics route the same way). The routing pattern: (1) Start from the Federation of Tax Administrators' state tax agency links (taxadmin.org → “State Tax Agencies”), the FTA's maintained index of every state tax authority's official site — use it to reach your domicile state's and duty state's revenue/taxation department and nothing else. (2) On the state authority's own site, use its military page/form set (most states publish a military filing guide or a servicemember/spouse exemption form keyed to SCRA/MSRRA). (3) For the federal-state interaction in a live return, use MilTax (its software files up to five state returns and its consultants handle MSRRA questions by name) or the installation VITA center.",
        flag: "The FTA links-page URL is cited as the routing pattern the research specifies; verify the live path before hard-linking — if it has moved, link the FTA homepage's state-agencies index instead. No state rule in this section depends on it.",
        links: [FTA, MILTAX],
        source: "Federation of Tax Administrators; Military OneSource — MilTax",
      },
    ],
  },
  {
    title: "Military-Specific Federal Items",
    note: "Source of record: IRS Publication 3 (2025) and IRS Topic No. 455. All items at IRS-summary level; none is a filing determination.",
    entries: [
      {
        name: "Moving expenses — the PCS exception that survived",
        body: "The moving-expense deduction was suspended for almost everyone from 2018 — but not for the Armed Forces. IRS Topic No. 455, in substance verbatim: “If you're a member of the Armed Forces on active duty, you may be eligible to deduct unreimbursed moving expenses or exclude reimbursed moving expenses for you, your spouse, and your dependents if your move was due to a military order and incident to a permanent change of station.” Topic 455 defines PCS for this purpose as: a move from home to a first post of active duty; a move from one permanent post of duty to another; and a move from the last post of duty to home (or a nearer point in the U.S.), which must occur within 1 year of ending active duty or within the period the Joint Travel Regulations allow. Qualified expenses are the reasonable amounts for moving household goods and personal effects, storage, and traveling (including lodging) to the new home — meals are never deductible. Amounts the government reimbursed (or paid directly) and excluded from income cannot also be deducted. Reporting: figure on Form 3903 and take as an adjustment to income (above the line — no itemizing required). Pub. 3 carries the same rules in its “Moving Expenses” chapter and W-2 box 12 code P covers excludable moving-expense reimbursements paid directly to the member.",
        links: [TC455, PUB3],
        source: "IRS Topic No. 455; Publication 3 (2025) — “Moving Expenses”",
      },
      {
        name: "Uniform expenses — the honest summary (mostly: no federal deduction)",
        body: "Two halves, both from Pub. 3, printed together so nobody files on the outdated half: (1) What the service gives you is not income — Pub. 3's excluded-items list includes uniform allowances and uniforms furnished to enlisted personnel; an allowance or issued uniform is not taxed. (2) What you buy yourself is generally not deductible on a federal return anymore — Pub. 3's Itemized Deductions chapter states: “You can no longer claim any miscellaneous itemized deductions, including the deduction for unreimbursed employee business expenses” (the category that once carried unreimbursed uniform purchase/upkeep for members). The one military exception to that sentence is the reservist travel adjustment (next entry) — Pub. 3 notes those reservist deductions “aren't available for active duty service members” as an adjustment, and they cover travel, not uniforms. Some states still allow employee-expense deductions under their own law — that is state-specific and routes through the state routing entry; no state list is printed.",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — excluded pay items; Itemized Deductions",
      },
      {
        name: "Reserve travel over 100 miles — the above-the-line deduction",
        body: "Pub. 3, “Travel Expenses of Armed Forces Reservists”: “If you are a member of a reserve component of the Armed Forces and you travel more than 100 miles away from home in connection with your performance of services as a member of the reserves,” your unreimbursed travel expenses are deductible as an adjustment to income (above the line), up to the federal rate (the per-diem and standard mileage limits in Pub. 463). The IRS's military family tax page adds the condition the provision turns on: the travel must involve an overnight stay (“Reservists who stay overnight more than 100 miles away from home while in service (e.g., for a drill or meeting)”). Pub. 3's mechanics: include all unreimbursed expenses from the time you leave home until you return; only 50% of meal expenses count; figure the deduction on Form 2106, then enter the over-100-mile portion on Schedule 1 (Form 1040), line 12. Pub. 3's worked example (an Army Reserve captain, 220 miles, $1,608 spent) lands at a $1,458 deduction after the 50%-meals haircut. “Reserve component” is defined in Pub. 3 to include the Army, Navy, Marine Corps, Air Force, and Coast Guard Reserves, the Army and Air National Guards, and the Ready Reserve Corps of the Public Health Service. Day-trip drill travel that doesn't meet the >100-mile/overnight test is not deductible under this provision — commuting to drill is commuting.",
        links: [PUB3, IRS_MILFAM],
        source: "IRS Publication 3 (2025) — “Travel Expenses of Armed Forces Reservists”; IRS Military Family Tax Benefits",
      },
      {
        name: "Combat pay and the EIC election",
        body: "Cross-reference entry by design: the full treatment is in the Combat Zone tile (election to include nontaxable combat pay in EIC earned income; all-or-nothing; per-spouse; W-2 box 12 code Q; Form 1040 line 1i; figure it both ways). It is indexed here because members look for it among the federal-items list. No additional rules are stated in this entry.",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “Earned Income Credit (EIC)”",
      },
      {
        name: "Sale of your home — the extended-duty suspension of the 5-year test",
        body: "The general rule (Pub. 3, “Gain or Loss From Sale of Home”): you may exclude up to $250,000 of gain ($500,000 on most joint returns) if, during the 5-year period ending on the sale date, you owned the home at least 2 years and used it as your main home at least 2 years. The military provision: “You can choose to have the 5-year test period for ownership and use suspended during any period you or your spouse serves on qualified official extended duty as a member of the Armed Forces.” Pub. 3's limits and definitions, printed as stated: the suspension can't last more than 10 years; it can apply to only one property at a time; and it can be revoked at any time. “Qualified official extended duty” means extended duty (called or ordered to active duty for more than 90 days or for an indefinite period) either at a duty station at least 50 miles from your main home, or while living in government quarters under government orders. Effect, in Pub. 3's own example: a member who lived in the home 2½ years, then spent 6 years on qualified extended duty away from it, suspends those 6 years — his test period becomes the 5 years before the duty, and he meets both tests. Time on qualified extended duty also doesn't count as a period of “nonqualified use.”",
        flag: "OneSource's Tax Terms page compresses this into “up to 10 years to sell the property… occupied the house for 24 months out of the last 15 years” — a fair plain-English approximation of the maximum reach (5-year window + 10-year suspension), but this section prints the IRS suspension mechanics above and does not present “15 years” as the rule.",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “Gain or Loss From Sale of Home”",
      },
    ],
  },
  {
    title: "Deadlines & Calendar",
    entries: [
      {
        name: "The standard deadline — April 15",
        body: "For calendar-year filers, the federal individual return is due April 15 (Pub. 3 (2025) What's New: “File Form 1040 or 1040-SR by April 15, 2026” for 2025 returns). When a due date falls on a Saturday, Sunday, or legal holiday, it moves to the next business day (IRS, abroad-extension page — a general IRS rule). April 15 is also the payment deadline: extensions in this tile move filing, not the interest clock on unpaid tax. The date is stated as a rule (“April 15, or the next business day”) — no single year's calendar date is hard-coded as permanent.",
        links: [PUB3, IRS_ABROAD],
        source: "IRS Publication 3 (2025); IRS abroad-extension page",
      },
      {
        name: "Stationed outside the U.S. — the automatic 2-month extension to June 15",
        body: "Per the IRS: you get an automatic 2-month extension to file (and pay) if you are a U.S. citizen or resident alien and, on the regular due date, either (a) you are living outside the United States and Puerto Rico with your main place of business or post of duty outside the U.S. and Puerto Rico, or (b) you are in military or naval service on duty outside the United States and Puerto Rico. For calendar-year filers the extended date is June 15; no form is filed in advance, but you attach a statement to the return explaining which condition qualified you. The catch, in the IRS's own words: “Even if you are allowed an extension, you will have to pay interest on any tax not paid by the regular due date of your return.” If June 15 still isn't enough, Form 4868 filed by June 15 buys the additional period to October 15. This is the non-combat-zone overseas rule — combat zone/contingency service uses the combat-zone formula instead, which is longer and interest-free.",
        links: [IRS_ABROAD],
        source: "IRS — Automatic 2-Month Extension of Time to File (taxpayers abroad)",
      },
      {
        name: "Form 4868 — six more months to file (not to pay)",
        body: "Any filer — including members stateside with no other extension — can get an automatic extension of time to file by submitting Form 4868 by the return's due date (including the June 15 date if the abroad extension applies), moving the filing deadline to October 15 for calendar-year filers. Pub. 3 covers this in its extensions chapter (“Can I Get an Extension To File My Return if I Am Not in a Combat Zone or a Contingency Operation?”). Two things stated in the same breath, per the IRS's general rule: Form 4868 extends filing only — it is not an extension to pay, and interest (and potentially late-payment penalties) runs on unpaid tax from April 15; and it does not extend any state deadline — states have their own extension forms and rules (route via the state routing entry).",
        links: [PUB3],
        source: "IRS Publication 3 (2025) — “Extensions of Deadlines”",
      },
      {
        name: "The deployment override — when the combat-zone rules replace this calendar",
        body: "Cross-reference entry: if the member is in a combat zone, qualified hazardous duty area, contingency operation, or qualifying direct support at any point in the filing season, the combat-zone formula replaces every date in this tile — filing, payment, refund claims, estimated taxes (no estimated-tax penalty inside the window), installment-plan payments, and IRA contributions all run to the § 7508 date, with no interest or penalties for the extension period, and the spouse is generally covered. Deployed to a combat zone or contingency operation? Your deadlines are different — see the Combat Zone & Deployment tile.",
        links: [IRS_CZ],
        source: "IRS — Extension of deadlines: Combat zone service",
      },
    ],
  },
];
