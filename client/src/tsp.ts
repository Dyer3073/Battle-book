// TSP Center — transcribed from the researched pack
// (~/workspace/military-app/tsp/tsp.md, researched Nov 9, 2026;
// flags F-1–F-7, §15 guardrails, §16 register). The pack is the
// content source of truth. Binding: the I Fund benchmark is
// hand-entered exactly — MSCI ACWI IMI ex USA ex China ex Hong Kong
// Index (transition completed Oct 2024) — NEVER MSCI EAFE (F-1).
// Mutual Fund Window fees: $95/yr + $28.75/trade confirmed; the
// administrative fee prints $37 WITH its verify note (F-2).
// The loan payoff-wait figure is UNVERIFIED (build-time verification
// (d): tsp.gov loans page inaccessible) — neither the 30-business-day
// nor the 60-day figure is printed anywhere; a waiting period applies
// and the card routes to tsp.gov (F-5). 2026 limits are year-labeled
// (IRS Notice 2025-67). BRS match prints exactly as DoD publishes.
// SECURE 2.0 Roth catch-up mandate is LIVE for TSP from Jan 1, 2026
// (F-3). Roth in-plan conversions exist from Jan 28, 2026 and print
// as a TAXABLE EVENT in the same breath (F-7). §15 ships as the
// guardrail card: NO projections, NO fund recommendations, NO "what
// should I pick," NO performance tables, NO tax advice, NO personal
// numbers. No L Fund allocation percentages, no expense-ratio table,
// no annuity quotes anywhere in this section.

import type { PackSection } from "./seven";

export const TSP_SECTION: PackSection = {
  view: "tsp",
  title: "TSP Center",
  headSub:
    "The Thrift Savings Plan as published by the Federal Retirement Thrift Investment Board (FRTIB): the funds as TSP itself defines them, the 2026 limits as the IRS published them, the BRS match exactly as DoD publishes it, and the rules for moving, borrowing, and withdrawing money — with every flag the research found printed where it belongs. Facts about the plan; never advice about your money.",
  intro:
    "The TSP is a defined-contribution retirement plan for federal employees and uniformed service members, run by the FRTIB. Every description in this section is tsp.gov's own framing, and every number is labeled with its year and source. Where tsp.gov disagrees with itself — in two places it does — the disagreement is printed, never blended.",
  standing:
    "This section explains the plan. It does not recommend funds, project balances, give tax advice, or hold any of your numbers — §15's guardrails are the section's own rules, printed as the last tile. Anything personal routes to tsp.gov and your account.",
  tiles: [
    {
      key: "start",
      label: "Start Here",
      tileSub: "What the TSP is, the default fund, and how money gets in",
      intro:
        "The frame: a federal defined-contribution plan, an age-based default fund, and two ways money enters — your contributions and, under BRS, the government's.",
      entries: [
        {
          id: "tsp-what",
          name: "What the TSP is",
          summary:
            "The Thrift Savings Plan is a retirement savings and investment plan for federal employees and members of the uniformed services, administered by the Federal Retirement Thrift Investment Board (FRTIB), an independent agency. Contributions and earnings are tax-advantaged in the ways the Roth vs Traditional tile describes.",
          who: "Everyone with a TSP account — and everyone about to get one automatically.",
          body: [
            "Uniformed services members covered by the Blended Retirement System (BRS) are enrolled automatically (see the BRS tile); members under the legacy retirement systems may elect to participate. Your account, balances, and all transactions live at tsp.gov — this section holds none of them.",
          ],
          flags: [],
          links: [{ label: "tsp.gov", url: "https://www.tsp.gov/" }],
          source: "tsp.gov · FRTIB",
        },
        {
          id: "tsp-default",
          name: "The default fund — the age-based L Fund",
          summary:
            "Contributions from members who do not make an election are invested in the Lifecycle (L) Fund targeted to the year the member turns 62 (the age-based default TSP publishes). You can change your investment election at tsp.gov at any time; the default is a starting point the plan chooses, not a recommendation this section makes.",
          who: "New BRS members especially — your first contributions land here unless you elect otherwise.",
          body: [],
          flags: ["The default is described as TSP publishes it. This section prints no L Fund allocation percentages and offers no view on whether the default suits anyone."],
          links: [{ label: "tsp.gov — Lifecycle Funds", url: "https://www.tsp.gov/funds/lifecycle/" }],
          source: "tsp.gov (default fund)",
        },
        {
          id: "tsp-money-in",
          name: "How money gets in — contributions and agency money",
          summary:
            "Regular contributions come out of pay by election (a percentage of basic pay, or a dollar amount for civilian participants as TSP's rules provide). Under BRS, DoD adds an automatic 1% and matching contributions (the BRS tile gives the exact published structure). Special categories of pay — bonuses, incentive and special pays — can be contributed subject to the annual limits in the Limits tile.",
          who: "Contributing members.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — Contributions", url: "https://www.tsp.gov/making-contributions/contributions/" }],
          source: "tsp.gov",
        },
      ],
    },
    {
      key: "funds",
      label: "The Five Core Funds",
      tileSub: "G, F, C, S, I — each as TSP itself defines it, benchmarks named exactly",
      intro:
        "Five individual funds, described in TSP's own terms. The I Fund benchmark is printed exactly as the FRTIB publishes it after the Oct 2024 transition — read its flag.",
      entries: [
        {
          id: "tsp-g",
          name: "G Fund — Government Securities Investment Fund",
          summary:
            "Invested in special U.S. Treasury securities issued to the TSP. TSP's stated objective: produce a rate of return higher than inflation while avoiding credit (default) risk and market price fluctuations. Principal and interest payments are guaranteed by the U.S. Government.",
          who: "Every participant — the fund descriptions are the plan's own, for reading, not ranking.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — G Fund", url: "https://www.tsp.gov/funds/individual/g-fund/" }],
          source: "tsp.gov fund description (G)",
        },
        {
          id: "tsp-f",
          name: "F Fund — Fixed Income Index Investment Fund",
          summary:
            "Tracks the Bloomberg U.S. Aggregate Bond Index — a broad index of U.S. investment-grade bonds. TSP describes its objective as matching the performance of the U.S. bond market; unlike the G Fund, its value can move down as well as up with the bond market.",
          who: "Every participant reading the menu.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — F Fund", url: "https://www.tsp.gov/funds/individual/f-fund/" }],
          source: "tsp.gov fund description (F)",
        },
        {
          id: "tsp-c",
          name: "C Fund — Common Stock Index Investment Fund",
          summary:
            "Tracks the S&P 500 Index — large- and mid-capitalization U.S. stocks. TSP's stated objective: match the performance of the U.S. stock market segment the index represents.",
          who: "Every participant reading the menu.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — C Fund", url: "https://www.tsp.gov/funds/individual/c-fund/" }],
          source: "tsp.gov fund description (C)",
        },
        {
          id: "tsp-s",
          name: "S Fund — Small Capitalization Stock Index Investment Fund",
          summary:
            "Tracks the Dow Jones U.S. Completion Total Stock Market Index — the U.S. stocks not in the S&P 500, completing the market the C Fund covers. TSP's stated objective: match that index's performance.",
          who: "Every participant reading the menu.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — S Fund", url: "https://www.tsp.gov/funds/individual/s-fund/" }],
          source: "tsp.gov fund description (S)",
        },
        {
          id: "tsp-i",
          name: "I Fund — International Stock Index Investment Fund",
          summary:
            "Tracks the MSCI ACWI IMI ex USA ex China ex Hong Kong Index — international stocks across developed and emerging markets, excluding the U.S., China, and Hong Kong. The FRTIB completed the benchmark transition to this index in October 2024.",
          who: "Every participant reading the menu — and anyone holding an older description of this fund.",
          body: [],
          flags: [
            "Flag (F-1): tsp.gov's own fund-comparison table carried a stale cell naming an older index (MSCI EAFE) as this fund's benchmark. That is NOT the I Fund's benchmark. The benchmark is the MSCI ACWI IMI ex USA ex China ex Hong Kong Index, per the FRTIB's completed Oct 2024 transition — where TSP's pages disagree, the FRTIB controls.",
          ],
          links: [{ label: "tsp.gov — I Fund", url: "https://www.tsp.gov/funds/individual/i-fund/" }],
          source: "FRTIB / tsp.gov fund description (I), benchmark transition completed Oct 2024",
        },
      ],
    },
    {
      key: "lifecycle",
      label: "Lifecycle (L) Funds",
      tileSub: "Target-date funds built from the five core funds — structure only",
      intro:
        "The L Funds are professionally designed mixes of the five core funds, each targeted to a withdrawal horizon. Structure prints here; allocation percentages do not.",
      entries: [
        {
          id: "tsp-l",
          name: "How the L Funds work",
          summary:
            "Each L Fund (L Income, and the target-year funds in five-year steps, plus L 2075 as published) invests in the five core funds in proportions set by the FRTIB's investment design, shifting toward the G and F Funds as the target year approaches and eventually merging into L Income. The mix is the Board's design and is adjusted quarterly as TSP publishes.",
          who: "Members in, or considering, an L Fund.",
          body: [],
          flags: ["This section prints no L Fund allocation percentages — they change quarterly by design, and tsp.gov publishes the current mix. Any static table here would be stale on arrival."],
          links: [{ label: "tsp.gov — Lifecycle Funds", url: "https://www.tsp.gov/funds/lifecycle/" }],
          source: "tsp.gov (Lifecycle Funds)",
        },
        {
          id: "tsp-i-change",
          name: "The I Fund benchmark change (Oct 2024)",
          summary:
            "In October 2024 the FRTIB completed the I Fund's transition to the MSCI ACWI IMI ex USA ex China ex Hong Kong Index, broadening the fund beyond its old developed-markets-only index to include emerging markets and Canadian stocks while excluding China and Hong Kong. Older TSP summaries — and one stale cell in TSP's own comparison table — still name the old index.",
          who: "Anyone who learned the I Fund before 2024.",
          body: [],
          flags: ["Flag (F-1) applies: the old index name (MSCI EAFE) is never this fund's benchmark in this app."],
          links: [{ label: "FRTIB", url: "https://www.frtib.gov/" }],
          source: "FRTIB (benchmark transition, completed Oct 2024)",
        },
      ],
    },
    {
      key: "mfw",
      label: "Mutual Fund Window",
      tileSub: "The self-directed window — with its fee stack printed exactly",
      intro:
        "The Mutual Fund Window opens thousands of outside mutual funds to TSP participants who meet its conditions — at fees beyond the core funds' costs. The fee stack prints with its verify note.",
      entries: [
        {
          id: "tsp-mfw",
          name: "The Mutual Fund Window — access and fees",
          summary:
            "Participants with the minimum account balance TSP requires may move a portion of their account (subject to TSP's percentage cap) into the Mutual Fund Window and choose from the funds the window offers. Fees, as confirmed: a $95 annual maintenance fee and $28.75 per trade — plus the per-fund administrative fee in the flag below, and each mutual fund's own expense ratio.",
          who: "Participants considering the window — read the full fee stack first.",
          body: [],
          flags: [
            "Flag (F-2): the Mutual Fund Window administrative fee prints as $37 — VERIFY against the current fee page at tsp.gov before acting, because TSP's published figures have moved: $55 was the launch-era figure, $150 in older summaries is stale, and $132 is the current combined annual total of the window's TSP-side fees as the pack reconciles them. The $95 maintenance fee and $28.75 per-trade fee are confirmed; the funds' own expense ratios are on top of all of these.",
          ],
          links: [{ label: "tsp.gov — Mutual Fund Window", url: "https://www.tsp.gov/funds/mutual-fund-window/" }],
          source: "tsp.gov (Mutual Fund Window fees)",
        },
      ],
    },
    {
      key: "limits",
      label: "2026 Limits",
      tileSub: "Year-labeled, per IRS Notice 2025-67 — deferral, catch-ups, annual additions",
      intro:
        "Every limit in this tile is a 2026 figure, published by IRS Notice 2025-67. Limits are re-issued annually; a figure without its year is a trap.",
      entries: [
        {
          id: "tsp-limits-2026",
          name: "2026 contribution limits (IRS Notice 2025-67)",
          summary:
            "For 2026: elective deferral limit $24,500; catch-up contributions for participants aged 50+ $8,000; the higher SECURE 2.0 catch-up for participants aged 60–63 $11,250; annual additions limit (§415(c)) $72,000 — the ceiling on all contributions (yours, automatic, matching, and other additions) combined.",
          who: "Contributing members planning a year.",
          body: [],
          flags: ["Flag (F-6): these are 2026 figures. The IRS re-issues limits each fall — verify the current year's numbers at tsp.gov / irs.gov before setting a full-year election."],
          links: [{ label: "IRS Notice 2025-67", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }],
          source: "IRS Notice 2025-67 (2026 limits)",
        },
        {
          id: "tsp-catchup-roth",
          name: "The SECURE 2.0 Roth catch-up mandate — LIVE for TSP from Jan 1, 2026",
          summary:
            "From January 1, 2026, catch-up contributions by participants whose prior-year Medicare (FICA) wages exceeded $150,000 must be made as Roth (after-tax) contributions. The mandate is year-labeled and wage-thresholded as published; participants under the threshold keep the traditional/Roth choice for catch-ups.",
          who: "Participants aged 50+ with prior-year Medicare wages over $150,000.",
          body: [],
          flags: ["Flag (F-3): the mandate is LIVE for TSP from Jan 1, 2026 — earlier summaries describing it as upcoming or delayed are out of date. The threshold is prior-year Medicare wages over $150,000."],
          links: [{ label: "tsp.gov — Catch-up contributions", url: "https://www.tsp.gov/making-contributions/catch-up-contributions/" }],
          source: "SECURE 2.0 §603 as implemented by TSP (live Jan 1, 2026)",
        },
      ],
    },
    {
      key: "roth",
      label: "Roth vs Traditional",
      tileSub: "The tax timing choice, combat-zone rules, and in-plan conversions",
      intro:
        "Same plan, two tax treatments. The choice is timing — pay the tax now (Roth) or at withdrawal (Traditional) — and this tile states the mechanics only, including the combat-zone wrinkle and 2026's new conversion door, which is a taxable event in the same breath.",
      entries: [
        {
          id: "tsp-roth-trad",
          name: "Roth vs Traditional — the mechanics",
          summary:
            "Traditional contributions are pre-tax: they reduce current taxable income and are taxed, with earnings, at withdrawal. Roth contributions are after-tax: qualified withdrawals of contributions and earnings are tax-free. Agency automatic and matching contributions are always Traditional, whatever you elect for your own. The two balances are tracked separately inside one account.",
          who: "Every contributing member making the election.",
          body: [],
          flags: ["This card states mechanics. Which treatment suits a household is tax advice — this section gives none; a tax professional or your installation's financial counselors are the route."],
          links: [{ label: "tsp.gov — Roth vs Traditional", url: "https://www.tsp.gov/making-contributions/roth-traditional/" }],
          source: "tsp.gov",
        },
        {
          id: "tsp-combat",
          name: "Combat-zone contributions",
          summary:
            "Members serving in a designated combat zone have combat-zone tax-excluded pay; Roth contributions from tax-exempt pay keep their tax-free character, and the annual additions limit — not the elective deferral limit — governs total contributions of tax-exempt money as TSP's combat-zone rules publish. TSP publishes a combat-zone contributions fact sheet; its current edition governs the details.",
          who: "Members in combat zones contributing tax-exempt pay.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — Tax-exempt contributions", url: "https://www.tsp.gov/making-contributions/tax-exempt-contributions/" }],
          source: "tsp.gov (combat-zone / tax-exempt contributions)",
        },
        {
          id: "tsp-conversions",
          name: "Roth in-plan conversions — new from Jan 28, 2026, and a TAXABLE EVENT",
          summary:
            "From January 28, 2026, participants may convert Traditional TSP money to Roth inside the plan. The converted amount is a TAXABLE EVENT in the year of conversion — the tax is owed with that year's taxes, is not withheld from the conversion, and must be planned for outside the account. Minimums, frequency limits, and mechanics are TSP's published terms at tsp.gov.",
          who: "Participants considering converting Traditional balances.",
          body: [],
          flags: ["Flag (F-7): a conversion is a TAXABLE EVENT. Any summary of conversions that does not say so in the same breath is incomplete — the tax bill arrives whether it was mentioned or not."],
          links: [{ label: "tsp.gov — Roth in-plan conversions", url: "https://www.tsp.gov/making-contributions/roth-in-plan-conversions/" }],
          source: "tsp.gov (Roth in-plan conversions, from Jan 28, 2026)",
        },
      ],
    },
    {
      key: "brs",
      label: "BRS: Auto-Enrollment & Match",
      tileSub: "The Blended Retirement System structure, exactly as DoD publishes it",
      intro:
        "DoD's published BRS structure: automatic enrollment at 5%, a 1% automatic contribution, and matching up to 4% — 5% of government money at a 5% member contribution.",
      entries: [
        {
          id: "tsp-brs-match",
          name: "The BRS match — exactly as DoD publishes it",
          summary:
            "Automatic 1% of basic pay: begins on day 61 of service and vests at 2 years. Matching: dollar-for-dollar on the first 3% of basic pay you contribute, plus 50 cents per dollar on the next 2% — a maximum match of 4%, for 5% total government contribution when you contribute 5%. Matching contributions vest immediately, are computed on basic pay only, and stop at 26 years of service.",
          who: "BRS members — this is the single highest-value tile in the section to read.",
          body: [],
          flags: ["Contributing less than 5% leaves published matching money unclaimed — stated as the structure DoD publishes, not as personal advice."],
          links: [{ label: "Military Compensation — BRS", url: "https://militarypay.defense.gov/BlendedRetirement/" }],
          source: "DoD / militarypay.defense.gov (BRS)",
        },
        {
          id: "tsp-brs-enroll",
          name: "Auto-enrollment and January re-enrollment",
          summary:
            "BRS members who entered on or after October 1, 2020 are automatically enrolled at 5% of basic pay. Members who stop contributions are re-enrolled each January at 5% under the published auto-enrollment rules, unless they elect otherwise again — the default restarts annually by design.",
          who: "BRS members, especially anyone who once stopped contributions.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — Automatic enrollment", url: "https://www.tsp.gov/making-contributions/automatic-enrollment/" }],
          source: "tsp.gov / DoD BRS publications",
        },
      ],
    },
    {
      key: "moving",
      label: "Moving Money",
      tileSub: "Interfund transfers, rollovers in and out",
      intro:
        "Money moves inside the TSP by interfund transfer, and between the TSP and other retirement plans by rollover — each with its own published rules.",
      entries: [
        {
          id: "tsp-ift",
          name: "Interfund transfers (IFTs)",
          summary:
            "An IFT moves existing balances among the funds; it does not change where future contributions go (that is a separate contribution-allocation election). TSP limits IFTs per its published rule — check the current limit at tsp.gov, as the count rule has changed over the plan's history.",
          who: "Every participant rebalancing or reallocating.",
          body: [],
          flags: [],
          links: [{ label: "tsp.gov — Interfund transfers", url: "https://www.tsp.gov/managing-your-account/interfund-transfers/" }],
          source: "tsp.gov",
        },
        {
          id: "tsp-rollovers",
          name: "Rollovers — into and out of the TSP",
          summary:
            "Eligible money from other employer plans and traditional IRAs can be rolled into the TSP (Form TSP-60 and its current successors at tsp.gov), and TSP money can be rolled out to an IRA or a new employer's plan after separation. Rollover tax treatment turns on Roth vs Traditional character — the money keeps its character, and mismatched rollovers create tax events.",
          who: "Members consolidating prior plans; separating members moving money out.",
          body: [],
          flags: ["Rollover mechanics print here; whether to roll money anywhere is a personal financial decision this section does not make."],
          links: [{ label: "tsp.gov — Rollovers", url: "https://www.tsp.gov/rolling-over/" }],
          source: "tsp.gov",
        },
      ],
    },
    {
      key: "loans",
      label: "Loans",
      tileSub: "Borrowing from your account — and the payoff waiting period, flagged unverified",
      intro:
        "TSP loans borrow from your own account and repay yourself with interest — with eligibility rules, two loan types, and a waiting period after payoff whose current length this section flags rather than guesses.",
      entries: [
        {
          id: "tsp-loans",
          name: "TSP loans — the structure",
          summary:
            "Two loan types: general purpose and primary residence. Loans are repaid by payroll deduction with interest at the G Fund rate at origination, as TSP publishes; a loan is not a withdrawal, but an unpaid balance at separation or default becomes a taxable distribution. Eligibility (account balance minimums, one loan of each type at a time, and the waiting period in the flag) is set by TSP's current loans page.",
          who: "Members considering borrowing against the account.",
          body: [],
          flags: [
            "Flag (F-5): a waiting period applies before you may take another loan of the same type after paying one off. Its current length is UNVERIFIED — the live tsp.gov loans page could not be retrieved in the build-time verification, and conflicting figures circulate in secondary sources. No figure is printed anywhere in this app. Check tsp.gov's current loans page for the figure before planning around it.",
          ],
          links: [{ label: "tsp.gov — Loans", url: "https://www.tsp.gov/loans/" }],
          source: "tsp.gov (loans)",
        },
        {
          id: "tsp-inservice",
          name: "In-service withdrawals — hardship and age-based",
          summary:
            "While still serving, withdrawals are narrow by design: financial-hardship withdrawals under TSP's published hardship rules (with their tax and penalty consequences), and age-based in-service withdrawals for participants aged 59½ or older as TSP publishes. Both are taxable events for Traditional money, and hardship withdrawals carry the early-withdrawal penalty analysis the IRS publishes.",
          who: "Members in financial distress or over 59½ — read before touching the account.",
          body: [],
          flags: ["Hardship withdrawals are a last-resort door with permanent retirement cost; installation financial counselors and relief societies (Relief Societies section) exist for exactly the situations that lead here."],
          links: [{ label: "tsp.gov — In-service withdrawals", url: "https://www.tsp.gov/in-service-withdrawals/" }],
          source: "tsp.gov",
        },
      ],
    },
    {
      key: "after",
      label: "After Separation",
      tileSub: "Leaving the money, withdrawals, RMDs — and what this section will not do",
      intro:
        "Separation opens the withdrawal menu and starts the required-minimum-distribution clock at the statutory age. The section's guardrails close the tile.",
      entries: [
        {
          id: "tsp-separated",
          name: "Your account after separation",
          summary:
            "A separated participant may leave the balance in the TSP (subject to the account-balance minimum TSP publishes), take installment payments, partial or full withdrawals, roll money out, or — under the rules TSP publishes — purchase a TSP annuity through the plan's annuity provider. Required minimum distributions (RMDs) begin at the statutory age the IRS sets (73, rising to 75 for younger cohorts as SECURE 2.0 phases) — verify your own RMD age at irs.gov/tsp.gov.",
          who: "Separating and retired members.",
          body: [],
          flags: ["This section prints no annuity quotes and no payout projections — annuity terms are quoted only by TSP's provider at the time of purchase."],
          links: [{ label: "tsp.gov — After separation", url: "https://www.tsp.gov/after-separation/" }],
          source: "tsp.gov",
        },
        {
          id: "tsp-guardrails",
          name: "Guardrails — what this section will not do (§15)",
          summary:
            "No projections. No fund recommendations. No “what should I pick.” No performance tables. No tax advice. No personal numbers — this app stores none of your TSP data. Those are the section's own rules, printed so the boundary is visible rather than implied.",
          who: "Everyone — especially anyone about to ask the app which fund to choose.",
          body: [
            "What this section does instead: it routes. Your balance, elections, loans, and transactions: tsp.gov. Your match and pay: your LES and your finance office. Tax character questions: a tax professional or installation legal/financial counseling. The plan's own publications (fund fact sheets, the Summary of the Thrift Savings Plan) are the authoritative texts behind every card in this section.",
          ],
          flags: [],
          links: [
            { label: "tsp.gov", url: "https://www.tsp.gov/" },
            { label: "FRTIB", url: "https://www.frtib.gov/" },
          ],
          source: "Pack §15 (section guardrails)",
        },
      ],
    },
  ],
};
