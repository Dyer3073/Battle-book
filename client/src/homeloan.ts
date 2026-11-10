// VA Home Loan Center — transcribed from the researched pack
// (~/workspace/military-app/homeloan/homeloan.md, researched Nov 9,
// 2026). Sources are VA.gov / benefits.va.gov (including VA's
// published summaries of the VA Lender's Handbook, VA Pamphlet 26-7)
// and FHFA only — no lender blogs, no aggregator figures. This center
// explains VA's published rules and math — eligibility, entitlement,
// the funding fee, and the loan types. It does NOT recommend lenders,
// does NOT predict or quote interest rates (VA does not set rates),
// and does NOT give personal affordability advice.

import type { RefGroup } from "./refdata";

export const HOMELOAN_INTRO =
  "VA's home loan rules and math, from VA's own pages: the Certificate of Eligibility, entitlement explained plain (basic, bonus/second-tier, restoration), the funding fee exactly as VA publishes it, the loan rules, the loan types, and VA's own warnings and help. No lenders, no rates, no affordability advice — whether a specific loan is right for a specific buyer is a decision for the buyer, their lender, and VA's pages linked throughout.";

export const FUNDING_FEE_PURCHASE: { down: string; first: string; after: string }[] = [
  { down: "Less than 5%", first: "2.15%", after: "3.30%" },
  { down: "5% or more", first: "1.50%", after: "1.50%" },
  { down: "10% or more", first: "1.25%", after: "1.25%" },
];

export const FUNDING_FEE_OTHER: { type: string; fee: string }[] = [
  { type: "Cash-out refinance", fee: "First use 2.15% · after first use 3.30% (no down-payment tiers)" },
  { type: "Interest rate reduction refinance loan (IRRRL)", fee: "0.50%" },
  { type: "Loan assumptions", fee: "0.50%" },
  { type: "Manufactured home loans (not permanently affixed)", fee: "1.00%" },
  { type: "Native American Direct Loan (NADL)", fee: "Purchase 1.25% · refinance 0.50%" },
  { type: "Vendee loan (buying VA-acquired property)", fee: "2.25%" },
];

export const FUNDING_FEE_EXEMPTIONS: string[] = [
  "You are receiving VA compensation for a service-connected disability;",
  "or you are eligible to receive VA compensation for a service-connected disability but are receiving retirement or active-duty pay instead;",
  "or you are receiving DIC as the surviving spouse of a Veteran;",
  "or you are a service member with a proposed or memorandum rating before the loan closing date showing eligibility for compensation because of a pre-discharge claim;",
  "or you are an active-duty member who, on or before the closing date, provides evidence of having received a Purple Heart.",
];

/** The second-tier worked example, recomputed on the FHFA 2026
 * baseline — the numbers below are computed in code from these
 * inputs so the arithmetic the page prints always recomputes. */
export const SECOND_TIER = {
  countyLimit: 832750,
  used: 100000,
};
export const secondTierRemaining = SECOND_TIER.countyLimit * 0.25 - SECOND_TIER.used;
export const secondTierMaxNoDown = secondTierRemaining * 4;

const COE = "https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/";
const ELIG = "https://www.va.gov/housing-assistance/home-loans/eligibility/";
const LIMITS = "https://www.va.gov/housing-assistance/home-loans/loan-limits/";
const FEE = "https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/";

export const HOMELOAN_GROUPS: RefGroup[] = [
  {
    title: "Certificate of Eligibility (COE)",
    entries: [
      {
        name: "What a COE is — and what it is not",
        body: "The Certificate of Eligibility is VA's document that proves to a lender that you meet the service requirements for the VA home loan benefit, and shows the lender how much entitlement you have and whether you are exempt from the funding fee. Requesting a COE is, in VA's words, “the first step in getting a VA-backed home loan or Native American Direct Loan.” A COE is not a loan approval: VA's loan-type pages state the borrower must also meet VA's and the lender's standards for credit, income, and any other requirements, and must live in the home. You can request a COE before you have a lender or a house — and you can get one while still serving.",
        who: "Everyone starting a VA purchase or refinance — get the COE first, before house-hunting.",
        links: [{ label: "VA — How to request a COE", url: COE }],
        source: "VA.gov",
      },
      {
        name: "Eligibility — service members and Veterans (minimum service by era)",
        body: "VA sets minimum active-duty service requirements by the era you served, and your discharge for that service must be under conditions other than dishonorable (VA reviews other-than-honorable cases individually). As VA's eligibility page states them: Currently serving — at least 90 continuous days of active-duty service. Veterans, Gulf War era (August 2, 1990 – present) — at least 24 continuous months, or the full period (at least 90 days) for which you were called or ordered to active duty, or at least 90 days if discharged under a qualifying exception, or less than 90 days if discharged for a service-connected disability. Earlier eras each carry their own minimum on VA's page (for example: September 8, 1980 – August 1, 1990 = 24 months / full call-up period of at least 181 days / disability exception; post-Vietnam 1975–1980 = 181 days; Vietnam and Korean War eras = 90 total days; WWII = 90 total days; the post-Korean and post-WWII periods = 181 days) — this center shows the current-era rules in full and routes older-era Veterans to VA's page for their exact line rather than compressing ten era tables.",
        who: "Anyone checking “did I serve long enough?” — the era table, not a single number, is the answer.",
        links: [{ label: "VA — Home loan eligibility", url: ELIG }],
        source: "VA.gov",
      },
      {
        name: "Eligibility — National Guard and Reserve minimums",
        body: "VA publishes separate minimums for Guard and Reserve service, as stated on its eligibility page. National Guard — any one of: at least 90 days of non-training active-duty Title 10 service; or at least 90 days of active-duty service including at least 30 consecutive days (the DD214 must show activation under 32 USC §§ 316, 502, 503, 504, or 505); or 6 creditable years in the National Guard and you continue to serve; or 6 creditable years and you were discharged honorably or placed on the retired list. Reserve — any one of: at least 90 days of non-training active-duty service; or 6 creditable years in the Selected Reserve and you continue to serve; or 6 creditable years in the Selected Reserve and you were discharged honorably or placed on the retired list.",
        who: "Guard/Reserve members — note the two different doors: a qualifying activation (90-day rules) or the 6-creditable-years route. Drill time alone does not open the first door.",
        links: [{ label: "VA — Home loan eligibility", url: ELIG }],
        source: "VA.gov",
      },
      {
        name: "Eligibility — surviving spouses",
        body: "As VA publishes it, a surviving spouse may be able to get a COE if at least one of these is true: the Veteran is missing in action or a prisoner of war; or the Veteran died while in service or from a service-connected disability and you didn't remarry; or the Veteran died in service or from a service-connected disability and you didn't remarry before age 57 or before December 16, 2003; or — in certain situations — the Veteran had been totally disabled and then died, where the disability may not have been the cause of death. VA's eligibility page frames the surviving-spouse route as being eligible for or receiving Dependency and Indemnity Compensation (DIC), or being the spouse of a service member who is MIA or a POW.",
        who: "Surviving spouses buying or refinancing in their own name — your COE is in your name, on the Veteran's service.",
        flag: "One hard date VA prints: a surviving spouse who remarried before December 16, 2003 and on or after their 57th birthday had to apply no later than December 15, 2004; VA states it must deny applications from that group received after that date.",
        links: [
          { label: "VA — Home loans for surviving spouses", url: "https://www.va.gov/family-and-caregiver-benefits/housing-assistance/surviving-spouse-home-loan/" },
          { label: "VA — Home loan eligibility", url: ELIG },
        ],
        source: "VA.gov",
      },
      {
        name: "The three ways to get a COE — and the documents each status needs",
        body: "VA states you can request a COE in any of 3 ways: (1) Online at VA.gov; (2) Through your lender — most VA lenders can pull a COE electronically through VA's Web LGY system, often the fastest route, and the one most buyers actually use because the lender requests it on the buyer's behalf during pre-approval; (3) By mail — VA Form 26-1880, Request for a Certificate of Eligibility, mailed to the regional loan center address on the form's last page (VA notes mail takes longer). Documents by status, as VA lists them: Veteran — DD214 (discharge/separation papers). Serving member — a statement of service signed by your commander, adjutant, or personnel officer (full name, SSN, date of birth, entry date, any lost time, command name). Activated Guard/Reserve — DD214 or other discharge documents (for the 90-day/30-consecutive route: DD214 showing the 32 USC activation, an annual point statement, or DD Form 220 with orders). Never-activated Guard/Reserve still serving — statement of service including total creditable years. Discharged Guard, never activated — NGB Form 22 for each period of service plus NGB Form 23 (retirement points statement) and proof of character of service. Discharged Reserve, never activated — latest annual retirement points statement plus proof of honorable service. Surviving spouse receiving DIC — VA Form 26-1817 plus the Veteran's DD214 if available, submitted through the lender or by mail to the regional loan center. Surviving spouse not receiving DIC — VA Form 21P-534EZ plus marriage license and the Veteran's death certificate, sent to the VA Pension Intake Center address VA prints on the page.",
        who: "The starting line for every VA loan in this center.",
        flag: "Don't have the DD214? Getting or replacing discharge papers is a Records task — use the Records & DD214 Center rather than duplicating routes here.",
        links: [{ label: "VA — How to request a COE", url: COE }],
        source: "VA.gov",
      },
      {
        name: "If you don't meet the minimums — qualifying exceptions and discharge questions",
        body: "VA lists qualifying exceptions under which a shorter service period can still earn a COE: discharge for hardship; convenience of the government (at least 20 months of a 2-year enlistment); early out (21 months of a 2-year enlistment); involuntary reduction in force; certain medical conditions; or a service-connected disability. VA's instruction is to apply anyway — VA reviews the service records and decides. Separately, VA states that an other than honorable, bad conduct, or dishonorable discharge may make you ineligible, and names two routes to try: applying for a discharge upgrade or requesting a VA Character of Discharge review. This center states the routes only; it does not predict outcomes (see the Records Center for the upgrade process).",
        who: "Anyone short of the minimums, or with a less-than-honorable discharge — the answer is “apply and let VA decide,” not “don't bother.”",
        links: [{ label: "VA — Home loan eligibility", url: ELIG }],
        source: "VA.gov",
      },
    ],
  },
  {
    title: "Entitlement, explained plain",
    entries: [
      {
        name: "What entitlement is — the guaranty behind the loan",
        body: "VA does not lend the money on a VA-backed loan (the Native American Direct Loan is the exception). A private lender makes the loan and VA guarantees part of it: if the borrower defaults, VA promises to pay the lender a percentage of the loan. That promise is the entitlement. Because the lender's risk is covered, VA states the guaranty is what in most cases lets a buyer purchase with no down payment and no monthly mortgage insurance. Entitlement is not a pot of your money and not the amount you can borrow — it is the size of VA's promise standing behind your loan, and your COE is where the lender reads it.",
        who: "Every VA borrower — this is the concept the rest of the section computes with.",
        links: [{ label: "VA — Loan limits & entitlement", url: LIMITS }],
        source: "VA.gov",
      },
      {
        name: "Basic entitlement (first tier / tier 1)",
        body: "Your COE lists a basic entitlement dollar figure. VA's published example line is “$36,000”: that is the maximum amount VA will pay your lender on a loan of $144,000 or less — it is not an amount you can borrow. For any loan over $144,000, VA instead guarantees up to 25% of the loan amount. If your COE shows basic entitlement of $0, VA's explanation is that you have no remaining basic entitlement — typically because a prior loan used it — but you may still have bonus entitlement for a loan over $144,000.",
        who: "Anyone reading their first COE and wondering what the $36,000 line means.",
        links: [{ label: "VA — Loan limits & entitlement", url: LIMITS }],
        source: "VA.gov",
      },
      {
        name: "Bonus entitlement (second tier / tier 2) and “full entitlement”",
        body: "Bonus entitlement — also called second-tier or tier 2 entitlement — is VA's guaranty on loans over $144,000. It is not printed on your COE; it is calculated. Two cases, as VA states them: If you have full entitlement (no prior loan tying any up — COE shows the full $36,000 basic line), your bonus entitlement usually covers 25% of whatever loan amount a lender is willing to make — multiply the loan amount by 0.25. If you don't have full entitlement, your remaining bonus entitlement is based on the county loan limit where the property sits, minus the entitlement you have already used. “Full entitlement” is the dividing line for the loan-limit rules in this center.",
        who: "Anyone whose purchase price is over $144,000 — which is most purchases — and anyone buying again while a prior VA loan is still open.",
        links: [{ label: "VA — Loan limits & entitlement", url: LIMITS }],
        source: "VA.gov",
      },
      {
        name: "Remaining bonus entitlement — VA's formula, with a worked example",
        body: "VA's published steps: (1) Find the entitlement you have already used — your COE's “Prior Loans charged to entitlement” table, Entitlement Charged column. (2) Find the county loan limit where the property is located — VA uses the FHFA conforming loan limit, One-Unit Limit, even for a multi-unit property. (3) Multiply the county limit by 0.25. (4) Subtract the entitlement already used. The result is your remaining bonus entitlement. VA then states: most lenders require your entitlement, a down payment, or a combination of both to cover at least 25% of the total loan amount — so multiply remaining entitlement by 4 to get the largest loan most lenders will make with no down payment; a bigger loan is possible with a down payment covering the shortfall. The worked example below is built only from VA's published formula and the FHFA figure cited; VA's own published example on the same page (different inputs, same formula): $50,000 already used, $900,000 county limit → $225,000 − $50,000 = $175,000 remaining → ×4 = $700,000 maximum no-down-payment loan. Buying above the worked example's no-down maximum: on a $500,000 loan, 25% coverage = $125,000; remaining entitlement covers $108,187.50, so a down payment of about $16,812.50 covers the gap (lender still has to approve the loan).",
        who: "Anyone with a prior VA loan still open (PCS buyers keeping the first house are the classic case) — this is the “second-tier math.”",
        flag: "County limit used in the worked example: $832,750 — the FHFA 2026 baseline one-unit conforming loan limit for most U.S. counties (FHFA announcement, November 25, 2025; the 2025 baseline was $806,500). Year-specific — FHFA resets this every year, and high-cost counties run higher (2026 ceiling $1,249,125). Always pull the current county figure from FHFA before computing.",
        links: [
          { label: "VA — Loan limits & entitlement", url: LIMITS },
          { label: "FHFA conforming loan limit values (county lookup)", url: "https://www.fhfa.gov/data-tools/tools/pages/conforming-loan-limit-map.aspx" },
        ],
        source: "VA.gov / FHFA",
      },
      {
        name: "Restoration of entitlement — getting used entitlement back",
        body: "Entitlement tied up in a prior loan can be restored. VA's eligibility page states you may restore entitlement used in the past if at least one of these is true (and you still meet the service eligibility rules): (1) you have sold the home bought with the prior loan and paid that loan in full; or (2) a qualified Veteran-transferee assumes your loan and substitutes their entitlement for the same amount you used originally; or (3) you have repaid the prior loan in full but have not sold the home bought with it — VA states you can only do this once. Restoration is requested with the COE request (online, through the lender, or on VA Form 26-1880). Two honest edges VA prints elsewhere: if you don't qualify for restoration, you may still buy with remaining entitlement — restoration is not the only door; and if a prior VA loan ended in foreclosure, short sale, or deed in lieu, VA's foreclosure page states you must repay the amount VA lost on that loan to restore the benefit.",
        who: "Repeat VA buyers — sell-and-pay-off is the normal path; the repay-without-selling route is one-time only, so spend it deliberately.",
        links: [{ label: "VA — Home loan eligibility", url: ELIG }],
        source: "VA.gov",
      },
    ],
  },
  {
    title: "The VA funding fee",
    note: "All rates in this group are VA's published chart effective April 7, 2023 — the chart is date-stamped by VA and can be changed by law; verify against VA's page at closing time.",
    entries: [
      {
        name: "What the funding fee is, and how you pay it",
        body: "The funding fee is a one-time payment to VA on a VA-backed or VA direct home loan, expressed as a percentage of the loan amount (not the purchase price). VA's stated purpose: it “helps to lower the cost of the loan for U.S. taxpayers since the VA home loan program doesn't require down payments or monthly mortgage insurance.” You pay it at closing, in one of two ways VA lists: pay it in full at closing, or finance it — include it in the loan and pay it off over time (which means paying interest on it; VA notes the lender charges interest on the loan amount). Whether you owe the fee at all depends on the exemption rules in this group.",
        who: "Every VA borrower who is not exempt — budget for this line before closing, not at the closing table.",
        flag: "One limit VA prints on the funding-fee page: on a purchase or construction loan, the funding fee is the only closing cost you can finance — all other fees and charges are due at closing.",
        links: [{ label: "VA — Funding fee and closing costs", url: FEE }],
        source: "VA.gov",
      },
      {
        name: "Funding fee — purchase and construction loans (VA's chart, effective April 7, 2023)",
        body: "One chart for Veterans, active-duty service members, and National Guard and Reserve members alike, as VA publishes it — the table renders below this card. Read it the way VA's own example does: first use, $200,000 home, $10,000 down (5%) → loan amount $190,000 → fee = 1.5% × $190,000 = $2,850. Two patterns worth teaching: the only place “after first use” costs more is the under-5%-down row; and putting 5% or 10% down cuts the fee percentage at either use.",
        who: "Purchase and construction borrowers — find your row before you estimate closing costs.",
        flag: "VA's printed exception: if your only prior VA loan was to purchase a manufactured home only, you still pay the first-time rate.",
        links: [{ label: "VA — Funding fee and closing costs", url: FEE }],
        source: "VA.gov — funding fee chart effective April 7, 2023",
      },
      {
        name: "Funding fee — the other loan types (VA's charts, effective April 7, 2023)",
        body: "As VA publishes them — the table renders below this card. VA notes these rates do not change with down payment or first/subsequent use unless the chart says so.",
        who: "Refinancers and assumption buyers — your fee comes from this list, not the purchase chart.",
        links: [{ label: "VA — Funding fee and closing costs", url: FEE }],
        source: "VA.gov — funding fee chart effective April 7, 2023",
      },
      {
        name: "Who is exempt from the funding fee — and the refund rule",
        body: "VA states you won't have to pay the funding fee if any of the five categories listed below this card is true for you. Your COE shows your exemption status to the lender. Refund rule, as VA states it: you may be eligible for a refund if you are later awarded VA compensation for a service-connected disability with an effective date retroactive to before your loan closing date — call your VA regional loan center.",
        who: "Any borrower with a disability rating, a pending pre-discharge claim, a Purple Heart, or DIC — check exemption before closing; the retroactive-rating refund is the one second chance, and it has a hard edge.",
        flag: "VA's limit, printed plainly: a proposed or memorandum rating received after the closing date does not make you exempt and does not earn a refund.",
        links: [{ label: "VA — Funding fee and closing costs", url: FEE }],
        source: "VA.gov",
      },
    ],
  },
  {
    title: "The loan rules",
    entries: [
      {
        name: "Occupancy — you must live in the home, and VA's published exceptions",
        body: "Every VA loan-type page repeats the same condition: you will live in the home you're buying with the loan — it must be your own personal occupancy, not a rental or vacation property. VA's Lender's Handbook summary (VA Pamphlet 26-7, Ch. 3) defines the timing: occupancy within a “reasonable time” means within 60 days after loan closing; a later date can still be reasonable where the borrower certifies a specific future occupancy date and the delay has a specific cause, and handbook guidance treats occupancy beyond 12 months after closing as generally not reasonable. Published exceptions: for an active-duty borrower unable to occupy because of their service, a spouse occupying (or intending to occupy) the home satisfies the requirement, and a dependent child occupying can also satisfy it with the certification made by the borrower's attorney-in-fact or the child's legal guardian (38 U.S.C. § 3704(c)(2), as summarized in the handbook material). The handbook also states deployed service members — single or married — are in a temporary duty status and are able to meet the occupancy requirement whether or not a spouse occupies before their return. IRRRLs are the one different rule: you certify you currently live in or used to live in the home.",
        who: "Every purchase borrower — and especially deploying members and geo-bachelor families, whose situations the spouse/deployment rules exist for.",
        flag: "Handbook-level detail (60 days, 12-month outer guide, deployment treatment) comes from VA Pamphlet 26-7 as VA and its handbook summaries publish it — lenders apply it case by case, so a genuinely unusual timeline belongs in a conversation with the lender and VA, not in an app verdict.",
        links: [
          { label: "VA — Purchase loan", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/" },
          { label: "VA Lender's Handbook (VA Pamphlet 26-7), Ch. 3", url: "https://www.benefits.va.gov/warms/pam26_7.asp" },
        ],
        source: "VA.gov / VA Pamphlet 26-7",
      },
      {
        name: "No VA-set maximum loan amount — and where limits actually come from",
        body: "VA states it plainly on the entitlement page: if you have full entitlement, you don't have a loan limit — “as long as you can afford the loan amount and the property appraisal supports the purchase price.” VA imposes no maximum loan amount of its own; the practical ceilings come from three other places, all of which VA names: (1) the lender — the lender decides the size of loan you can afford from your credit history, income, debts, and assets, and must approve you even with full entitlement; (2) the appraisal — VA states the maximum VA loan on an individual property is the appraised value or the purchase price, whichever is lower (VA's example: contract $400,000, appraisal $375,000 → loan capped at $375,000); (3) the county conforming limit — which matters only when you don't have full entitlement, because it drives the remaining-entitlement math (and older VA purchase copy describes no-down-payment borrowing “up to the conforming loan limit in most areas” — that phrasing belongs to the remaining-entitlement world, not to full-entitlement borrowers).",
        who: "Anyone told “the VA limit is $X” — the correct question is “full entitlement or remaining entitlement, and what will the lender approve against the appraisal?”",
        flag: "FHFA county limits are year-specific (2026 baseline one-unit: $832,750; 2025: $806,500 — FHFA) — never treat a year's figure as the rule.",
        links: [{ label: "VA — Loan limits & entitlement", url: LIMITS }],
        source: "VA.gov / FHFA",
      },
      {
        name: "Credit and income — VA sets no minimum credit score; lenders set their own",
        body: "VA's entitlement page states: “We don't require a minimum credit score, but some lenders do have a requirement” — and advises contacting more than one lender to compare. The same division of labor runs through VA's pages: VA sets the program rules in this center; the lender determines the interest rate, discount points, and other closing costs, and those details “may vary from lender to lender.” Pre-approval numbers are the lender's judgment about your credit, income, debts, and assets — another lender can judge the same file differently, within VA's rules.",
        who: "Anyone declined or quoted a score cutoff by one lender — that cutoff was the lender's, not VA's.",
        links: [
          { label: "VA — Loan limits & entitlement", url: LIMITS },
          { label: "VA — Funding fee and closing costs", url: FEE },
        ],
        source: "VA.gov",
      },
      {
        name: "Assumability — a buyer can take over a VA loan",
        body: "VA-backed loans are assumable: instead of opening a new mortgage, a buyer can take over the seller's existing VA loan and its terms. VA's home-loan hub states the condition at overview level: VA-guaranteed loans are assumable as long as the person assuming the loan qualifies. The funding fee on an assumption is 0.50%.",
        who: "Sellers with a loan a buyer wants to assume, and buyers considering assuming one — check the entitlement substitution question first.",
        flag: "The entitlement consequence is the part sellers must not learn late: if the person assuming your loan is not a qualified Veteran substituting their own entitlement, your entitlement stays tied to that loan until it is paid in full — which is exactly the substitution route named in restoration. Lender/servicer process and approval details are transaction-specific; this center states the rule, and the parties' lender works the file.",
        links: [{ label: "VA Home Loans hub — benefits.va.gov", url: "https://www.benefits.va.gov/HOMELOANS/index.asp" }],
        source: "VA (benefits.va.gov)",
      },
      {
        name: "Property requirements — VA minimum property requirements (MPRs) exist, and the appraisal enforces them",
        body: "VA requires a VA appraisal on a purchase: an expert assessment of the home's market value, ordered through the lender with a VA-assigned appraiser. VA is explicit that an appraisal isn't a home inspection or a guaranty of value. Beyond value, the property must meet VA's Minimum Property Requirements (MPRs) — VA's published framing is that the home must be safe, structurally sound, and sanitary (VA Pamphlet 26-7, Ch. 12), and the appraiser checks the property against them as part of the appraisal; the resulting Notice of Value is also the figure VA uses for the seller-concession limit on the funding-fee page (seller concessions capped at 4% of the home's reasonable value, while closing-cost credits themselves are not capped by VA). Deliberate scope line for this center: the full MPR checklist lives in Chapter 12 of the Lender's Handbook and is applied property-by-property by the appraiser. This center does not reproduce a checklist — a checklist in an app invites buyers to self-certify a house. The lesson: MPRs exist, the VA appraisal is where they are enforced, and an appraisal is not an inspection (hire an inspector separately).",
        who: "Every purchase borrower — especially anyone eyeing a fixer-upper, where MPR findings can require repairs before closing.",
        links: [
          { label: "VA — How to request a COE", url: COE },
          { label: "VA Lender's Handbook (VA Pamphlet 26-7), Ch. 12", url: "https://www.benefits.va.gov/warms/pam26_7.asp" },
        ],
        source: "VA.gov / VA Pamphlet 26-7",
      },
    ],
  },
  {
    title: "The loan types (VA's overview level)",
    entries: [
      {
        name: "Purchase loan",
        body: "The standard VA-backed loan to buy, build, or improve a home. VA's stated terms: no down payment as long as the sales price isn't higher than the appraised value; no PMI or MIP; fewer closing costs, which may be paid by the seller; no penalty for paying the loan off early. Eligible uses as VA lists them: buy a single-family home up to 4 units; buy a condo in a VA-approved project; buy a home and improve it; buy a manufactured home or lot; build a new home; make energy-efficient improvements. You may use the benefit again after selling or refinancing a home bought with a VA loan (the entitlement and funding-fee groups govern the next use). Eligibility: COE + VA's and the lender's credit/income standards + you will live in the home.",
        who: "The default door — first purchase, next purchase, and construction.",
        links: [{ label: "VA — Purchase loan", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/" }],
        source: "VA.gov",
      },
      {
        name: "IRRRL — Interest Rate Reduction Refinance Loan (“streamline”)",
        body: "A refinance from one VA-backed loan into another VA-backed loan — only for borrowers who already have a VA-backed home loan on the home. VA's stated purposes: lower your monthly payment by getting a lower interest rate, or make payments more stable by moving from an adjustable/variable rate to a fixed rate. The occupancy rule is the IRRRL exception: you certify that you currently live in or used to live in the home. VA notes the paperwork is lighter than a purchase (VA does not require an appraisal or credit underwriting in most cases) and that closing costs can be included in the new loan; funding fee is 0.50%. If you have a second mortgage, its holder must agree to make the new VA loan the first mortgage. Bring the COE from your original loan if you have it; if not, the lender can pull it electronically.",
        who: "Current VA borrowers when rates or stability make a refinance worth its closing costs — computed, not assumed.",
        flag: "VA's own refinance math prompt: divide your closing costs by your expected monthly savings to see how long the refinance takes to pay for itself — and see the misleading-offers warning in the next group.",
        links: [{ label: "VA — IRRRL", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan/" }],
        source: "VA.gov",
      },
      {
        name: "Cash-out refinance loan",
        body: "A new VA-backed loan that replaces your current loan — VA or non-VA — under different terms, doing one or both of two jobs VA names: take cash out of your home equity (VA's examples: pay off debt, pay for school, make home improvements, other needs), or refinance a non-VA loan into a VA-backed loan. Unlike the IRRRL this is a full application: COE, VA's and the lender's credit and income standards, you live in the home, and the lender orders a VA appraisal. Funding fee: 2.15% first use / 3.30% after first use, no down-payment tiers.",
        who: "Borrowers who need equity in cash, or who hold a conventional/FHA loan they want to move under the VA guaranty.",
        flag: "VA's printed caution: keep closing costs in mind — they “can add up to thousands of dollars” — and understand how the new loan amount relates to your home's value before signing.",
        links: [{ label: "VA — Cash-out refinance loan", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/cash-out-loan/" }],
        source: "VA.gov",
      },
      {
        name: "Native American Direct Loan (NADL) — cross-link, not a duplicate",
        body: "The one program where VA itself is the lender: for Native American Veterans (or Veterans married to a Native American non-Veteran) to buy, build, or improve a home on federal trust land, or refinance an existing NADL — the situation a regular VA-backed loan usually can't reach. Funding fee: purchase 1.25% / refinance 0.50%. Eligibility basics, the tribe's Memorandum of Understanding requirement, and the link already live in the Benefits section — this center cross-links there rather than restating it.",
        who: "Native American Veterans buying on federal trust land.",
        links: [{ label: "VA — NADL", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/nadl/" }],
        source: "VA.gov (cross-link to Benefits)",
      },
    ],
  },
  {
    title: "VA's own warnings and help",
    entries: [
      {
        name: "VA does not set your interest rate — compare lenders",
        body: "VA prints this division of labor itself, and this center quotes the idea, not softened: “We don't determine most details of your home loan.” The lender determines your interest rate, discount points, and other closing costs, and those details vary from lender to lender. VA's loan pages repeat the practical consequence: terms and fees may vary, so contact several lenders to check out your options (stated on the IRRRL and cash-out pages) and compare the Loan Estimate each lender must provide — VA points borrowers to the estimate to see what makes up the loan and its closing costs. That is the whole of this center's rate guidance: no rate predictions, no “typical rate” figures, no lender names.",
        who: "Every borrower, before accepting the first quote — the same VA benefit prices differently at different lenders.",
        links: [{ label: "VA — Funding fee and closing costs", url: FEE }],
        source: "VA.gov",
      },
      {
        name: "Refinance-offer warnings — VA's own red flags",
        body: "VA warns IRRRL and cash-out shoppers directly: be careful when considering home loan refinance offers — claims that you can skip payments, get very low interest rates, or other terms that sound too good to be true “may be signs of a misleading offer.” VA maintains a dedicated page on the signs of misleading refinance offers (linked from both refinance pages), and points borrowers who want independent information to the Consumer Financial Protection Bureau's home loan toolkit. A VA loan technician can also sanity-check an offer against your existing VA loan.",
        who: "Anyone whose mailbox or phone is full of refinance pitches aimed at their VA loan — which is most VA borrowers, every rate cycle.",
        links: [{ label: "VA — IRRRL (misleading-offer warnings)", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan/" }],
        source: "VA.gov",
      },
      {
        name: "Trouble making payments — foreclosure avoidance help through VA",
        body: "VA's published first move: contact your loan servicer right away — servicers will work with you to find a solution. If you are nervous about contacting the servicer, or want VA's help and advice, VA loan technicians at the Regional Loan Centers provide foreclosure-avoidance counseling — VA states it will provide counseling to a Veteran or surviving spouse even if the loan isn't VA-guaranteed, and for a VA-guaranteed loan 61 days past due, VA automatically assigns a loan technician to review the loan. Reach them at 1-877-827-3702 (TTY: 711), Monday–Friday 8:00 a.m.–6:00 p.m. ET (select option 6 for a loan technician on the trouble-making-payments line). Options VA lists for avoiding foreclosure: special forbearance; repayment plan; VA partial claim (VA works with the servicer to pay the missed payments and bring the loan current; you repay it when you pay off the loan or sell; requires completing a 3-month trial payment plan first); VA traditional loan modification; 30-year modification; 40-year modification; and, as last resorts, extra time to arrange a private sale, a short sale, or a deed in lieu of foreclosure.",
        who: "The moment a payment will be missed — not after. Early contact is the entire strategy VA publishes.",
        flag: "VA partial claim: servicers had until November 28, 2026 to add partial claims to their systems (VA, 2026). VA notes a short sale or deed in lieu could result in a loss or reduction of your future home loan benefit, and entitlement after a foreclosure-type ending is restored only by repaying what VA lost. VA's scam warning, printed on the same page: work only with trusted organizations, and contact VA or your servicer for help avoiding third-party companies trying to take advantage of you.",
        links: [{ label: "VA — Trouble making payments", url: "https://www.va.gov/housing-assistance/home-loans/trouble-making-payments/" }],
        source: "VA.gov",
      },
    ],
  },
];
