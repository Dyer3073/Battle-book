// Retirement Hub — static reference data transcribed from the researched
// retirement pack (~/workspace/military-app/retirement/retirement.md,
// researched November 8, 2026). Summaries, who/when statements, and links
// come only from the pack; every pack flag is preserved on its card.
//
// Fidelity rules baked into this data (the pack's standing rules and flag
// register):
// - NO pay predictions and NO individualized advice anywhere. This data
//   explains the systems and routes to the official calculators;
//   multipliers, dates, and percentages appear only as the pack cites
//   them, attributed to the official page that states them.
// - Continuation Pay has NO fixed multiplier — services set it yearly.
//   The Army CY26 figures appear only inside the flag as a labeled
//   example, exactly as the pack frames them.
// - Application windows: the Army window renders exactly as the pack
//   does (safe rule 12–24 months + the official-source conflict flag).
//   NO window numbers are printed for Navy / USMC / Air Force / Space
//   Force / Coast Guard — unverified in the pack; those members route
//   to their branch retirement/personnel offices.
// - SBP–DIC full concurrent receipt since February 1, 2023 and the
//   TRICARE re-enrollment warning render as prominent callouts, so
//   stale advice is visibly corrected.
// - LINK CLEANUP: the two DFAS links the pack flags as carrying fbclid
//   tracking parameters (§3.8, §5.6) are stripped to their clean
//   canonical URLs below — same host and path, no query string. All
//   other links are copied verbatim from the pack.

export type RetirementLink = { label: string; url: string };

export type RetirementBullet = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type RetirementXref = {
  label: string;
  target: "transition" | "benefits" | "deals" | "pay";
};

export type RetirementEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: RetirementBullet[];
  flag?: string;
  /** Prominent warning box rendered inside the card. */
  callout?: string;
  links: RetirementLink[];
  /** In-app cross-reference button to another section. */
  xref?: RetirementXref;
};

export type RetirementGroup = {
  title: string;
  note?: string;
  entries: RetirementEntry[];
};

export const RETIREMENT_STANDING_NOTE =
  "No pay predictions and no individualized advice: this section explains the two retirement systems and routes you to the official calculators — it never estimates what you will receive. Multipliers, dates, and percentages appear only as the official pages state them, and anything that changes, conflicts across official sources, or could not be verified is flagged on its card, not hidden.";

const BRS_HUB: RetirementLink = {
  label: "DoD Compensation — Blended Retirement System hub",
  url: "https://militarypay.defense.gov/BlendedRetirement/",
};
const CALCULATORS_HUB: RetirementLink = {
  label: "DoD Compensation — Calculators hub",
  url: "https://militarypay.defense.gov/Calculators.aspx",
};
const MAB_BRS: RetirementLink = {
  label: "MyArmyBenefits — Blended Retirement System fact sheet",
  url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Blended-Retirement-System?serv=120",
};
const DFAS_CRDP_CRSC: RetirementLink = {
  label: "DFAS — Concurrent retirement & disability pay (CRDP / CRSC)",
  url: "https://www.dfas.mil/RetiredMilitary/disability/payment",
};

export const RETIREMENT_GROUPS: RetirementGroup[] = [
  {
    title: "The Two Systems",
    entries: [
      {
        name: "Which system am I in? — your DIEMS decides",
        kind: "DoD Compensation",
        summary:
          "Your retirement system is set by your Date of Initial Entry into Military Service (DIEMS). Per DoD: everyone with a DIEMS on or after January 1, 2018 is automatically in the Blended Retirement System (BRS). Everyone serving as of December 31, 2017 was grandfathered into the legacy system; active members with fewer than 12 years of service (and Guard/Reserve members with fewer than 4,320 retirement points) as of Dec 31, 2017 could opt in to BRS during the one-time window, January 1 – December 31, 2018. That window is closed, and the choice was permanent. If you never opted in, you stayed legacy.",
        who: "Anyone unsure which system they're under — check this first; everything else in this section depends on it.",
        links: [BRS_HUB],
      },
      {
        name: "Legacy High-3 — the traditional pension",
        kind: "MyArmyBenefits",
        summary:
          "The legacy system is a pension only. Per the official Army benefits site: retired pay = 2.5% × years of creditable service × the average of your highest 36 months of basic pay (\"high-3\"). At 20 years that multiplier reaches 50% of the high-3 average. There is no government TSP contribution under legacy — your TSP is yours alone. High-3 generally covers members who entered service on or after September 8, 1980 and stayed in the legacy system.",
        flag: "Two older variants still exist for small groups — Final Pay (entered before Sept 8, 1980) and CSB/REDUX (members who took the Career Status Bonus at 15 years) — DoD still publishes calculators for both (see the calculators group below); if either might be you, use those calculators and your branch retirement office, not this summary.",
        who: "Members with a DIEMS before January 1, 2018 who did not opt in to BRS during 2018.",
        links: [
          {
            label: "MyArmyBenefits — Retired Pay fact sheet (legacy)",
            url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Retired-Pay?serv=120",
          },
        ],
      },
      {
        name: "BRS at a glance — four components",
        kind: "DoD Compensation",
        summary:
          "Per DoD, BRS combines the legacy pension idea with 401(k)-style savings, in four parts:",
        bullets: [
          {
            title: "Defined benefit",
            text: "a monthly pension at a 2.0% multiplier (2.0% × years of service × high-3 average basic pay, per the official Army BRS fact sheet).",
          },
          {
            title: "Defined contribution",
            text: "government money into your TSP (next card).",
          },
          {
            title: "Continuation Pay",
            text: "a one-time mid-career payment for more service (below).",
          },
          {
            title: "Lump Sum Option",
            text: "an optional discounted lump sum at retirement (below).",
          },
        ],
        details: [
          "The trade in plain terms: a smaller pension percentage than legacy, in exchange for government TSP money you keep even if you leave before 20 years.",
        ],
        who: "All members with a DIEMS on/after Jan 1, 2018, and 2018 opt-ins.",
        links: [BRS_HUB],
      },
      {
        name: "BRS TSP money — the automatic 1% and the match",
        kind: "DoD Compensation",
        summary:
          "Per DoD's BRS materials: DoD automatically contributes 1% of basic pay to your TSP starting after your first 60 days of service, whether or not you contribute anything. After you complete 2 years of service, DoD also matches your own contributions up to an additional 4% of basic pay — so contributing at least 5% of basic pay captures the full 5% of government money. Matching is calculated on basic pay only.",
        details: [
          "This is the part of BRS that has value even for members who separate before 20 years.",
        ],
        who: "BRS members, from entry through separation or retirement.",
        links: [BRS_HUB],
      },
      {
        name: "Continuation Pay — the mid-career decision",
        kind: "MyArmyBenefits",
        summary:
          "Per DoD: Continuation Pay is a one-time payment offered to BRS members between 7 and not more than 12 years of service (counted from pay entry base date), in exchange for agreeing to additional obligated service. It is on top of any other bonuses.",
        flag: "The multiplier is NOT a single permanent number — the services set the rates and eligibility each year. Example only, as published by the Army for CY26: 2.5× monthly basic pay for active-duty soldiers and 0.5× for traditional drilling Guard/Reserve members; other branches and years differ. Treat any specific multiplier you hear as year- and branch-specific until your service publishes yours.",
        who: "BRS members approaching the 7–12 year window — the election has a deadline, so learn it before the window opens.",
        links: [MAB_BRS],
      },
      {
        name: "The BRS Lump Sum Option — trading monthly pay for cash up front",
        kind: "MyArmyBenefits",
        summary:
          "Per DoD: at retirement, a BRS member may elect to take 25% or 50% of the value of their retired pay (from retirement until full Social Security retirement age) as a discounted lump sum, in exchange for reduced monthly retired pay until reaching full Social Security retirement age (usually 67), when the full monthly amount is restored. \"Discounted\" is the key word: the lump sum is worth less than the sum of the monthly payments given up, because DoD applies a discount rate.",
        details: [
          "The Army's fact sheet also notes the lump sum is fully taxable. This is a one-time election made at retirement — model it in the official BRS calculator (calculators group below) and with a free financial counselor before electing.",
        ],
        who: "BRS members at the point of retirement.",
        links: [MAB_BRS],
      },
    ],
  },
  {
    title: "Run Your Own Numbers — Official Calculators",
    entries: [
      {
        name: "The DoD calculators hub",
        kind: "DoD Compensation",
        summary:
          "DoD Compensation's Calculators page is the front door. Per the page: the tools are built on personalized inputs, and no identifying data is requested, required, or retained. Retirement tools listed: BRS Calculator, High-3 Calculator, Final Pay Calculator, REDUX Calculator, plus medical (disability) retirement variants of each.",
        details: [
          "Use the calculator that matches YOUR system (first group above) — running the wrong system's calculator is the most common way members scare or mislead themselves. An estimate is a planning tool, not a promise: DFAS computes the actual retired pay at retirement.",
        ],
        who: "Anyone planning ahead, at any career stage.",
        links: [CALCULATORS_HUB],
      },
      {
        name: "BRS Calculator",
        kind: "DoD Compensation",
        summary:
          "Per DoD, this calculator \"estimates a Service member's retirement benefits under the Blended Retirement System (BRS)\" — it is where the pension, TSP, continuation pay, and the lump-sum trade can be modeled together before you make elections.",
        details: [
          "An estimate is a planning tool, not a promise: DFAS computes the actual retired pay at retirement.",
        ],
        who: "BRS members (see \"Which system am I in?\" above).",
        links: [CALCULATORS_HUB],
      },
      {
        name: "High-3 Calculator",
        kind: "DoD Compensation",
        summary:
          "Per DoD, this calculator lets service members \"estimate Legacy High-3 retirement plan benefits\" — the 2.5%-multiplier pension.",
        details: [
          "Same caution: estimate only; DFAS makes the official computation.",
        ],
        who: "Legacy High-3 members (see \"Which system am I in?\" above).",
        links: [CALCULATORS_HUB],
      },
      {
        name: "MyArmyBenefits retirement calculators (personalized, login)",
        kind: "MyArmyBenefits",
        summary:
          "The official Army benefits site offers retirement calculators that can pre-fill your own personnel data (access requires CAC or myAuth login) for regular (active), non-regular (Reserve/Guard), and medical retirement across BRS and the legacy systems, with \"what-if\" reports.",
        flag: "Army-specific route — other branches' personnel systems offer their own versions; the DoD calculators above are the branch-neutral route and need no login.",
        who: "Soldiers who want an estimate built on their actual records instead of hand-entered figures.",
        links: [
          {
            label: "MyArmyBenefits — Retirement Calculator (login)",
            url: "https://myarmybenefits.us.army.mil/NEW-Benefit-Calculators/Retirement-Calculator",
          },
        ],
      },
    ],
  },
  {
    title: "Key Decisions",
    entries: [
      {
        name: "SBP — the Survivor Benefit Plan, in plain terms",
        kind: "DFAS",
        summary:
          "Retired pay stops when the retiree dies. Per DFAS, the Survivor Benefit Plan (SBP) lets a retiree elect coverage that pays an eligible beneficiary a monthly annuity of up to 55% of the member's retired pay (of the base amount the member elects) after the retiree's death. The election is generally made at retirement (Guard/Reserve: at the 20-year letter — see the RCSBP card below). Coverage costs nothing while serving; in retirement a premium is deducted from retired pay — per DFAS, no more than 6.5% of gross retired pay for spouse coverage at full level, and premiums are deducted pre-tax for nearly all retirees.",
        who: "Every retiring member — married members especially. This is the single most consequential form in the retirement packet.",
        links: [
          {
            label: "DFAS — SBP: advantages and cost",
            url: "https://www.dfas.mil/retiredmilitary/provide/sbp/advantages.html",
          },
        ],
      },
      {
        name: "SBP — spouse concurrence, and why it's hard to undo",
        kind: "DFAS",
        summary:
          "Per DFAS: if you are married, electing less than full spouse coverage, child-only coverage, or no coverage requires your spouse's written, notarized concurrence on the election form (DD Form 2656) — a safeguard so a spouse can't be cut out unknowingly. If no valid election reaches DFAS, coverage starts automatically at the full level. And DFAS states plainly that \"the decisions you make at retirement regarding your SBP can be difficult to change\": if you had eligible beneficiaries at retirement and declined them, you generally cannot add them later.",
        details: [
          "Narrow exceptions exist — DFAS lists a one-year window to elect coverage for a spouse/child first acquired after retirement, and a termination window in the 25th–36th month of retirement (spouse concurrence required again) — see the DFAS change page for the exact rules.",
        ],
        callout:
          "Correction to advice still circulating: since February 1, 2023, a surviving spouse receives full SBP and full VA DIC at the same time — the old SBP–DIC offset is eliminated, per DFAS. Older advice about the \"widow's tax\" offset is out of date.",
        who: "Married retirees and their spouses — decide this one together, before the retirement date, not at the out-processing desk.",
        links: [
          {
            label: "DFAS — Changing or stopping your SBP",
            url: "http://www.dfas.mil/retiredmilitary/provide/sbp/change.html",
          },
        ],
      },
      {
        name: "RCSBP — the Reserve Component version, decided at the 20-year letter",
        kind: "DFAS",
        summary:
          "Per DFAS, the Reserve Component SBP (RCSBP) works like SBP but the election comes earlier: when a Guard/Reserve member receives the Notice of Eligibility (the \"20-year letter\"), they have 90 days to elect one of three options on DD Form 2656-5 — decline for now (Option A, defer the decision until pay eligibility), deferred annuity (payable from when the member would have reached age 60), or immediate annuity (payable the day after death, even during the gray area). Annuity is 55% of the elected base amount; cost is the standard SBP premium plus a Reserve Component add-on cost, per DFAS.",
        who: "Guard/Reserve members the day the 20-year letter arrives — the 90-day clock is real and starts at receipt.",
        links: [
          {
            label: "DFAS — Reserve Component SBP (RCSBP)",
            url: "https://www.dfas.mil/Retired-Military-Annuitants/provide/rcsbp/",
          },
        ],
      },
      {
        name: "The VA waiver — why retired pay and VA pay interact",
        kind: "DFAS",
        summary:
          "Per DFAS: by law, a retiree who receives VA disability compensation must waive an equal amount of DoD retired pay, dollar for dollar — this is the \"VA waiver\" (or VA offset), and it shows on the Retiree Account Statement. It exists because VA compensation is tax-free while retired pay generally is not, so the waiver is often neutral or favorable — but it surprises retirees who expected both checks in full.",
        details: [
          "Two programs (the CRDP and CRSC cards below) restore some or all of the waived amount for eligible retirees.",
        ],
        who: "Any retiree who files for VA disability compensation — which is most retirees.",
        links: [
          { label: "DFAS — The VA waiver, explained", url: "https://www.DFAS.mil/vawaiver" },
        ],
      },
      {
        name: "CRDP — Concurrent Retirement and Disability Pay",
        kind: "DFAS",
        summary:
          "Per DFAS, CRDP restores retired pay that was waived for VA compensation. As DFAS states the eligibility: you must be eligible for retired pay, with a VA service-connected disability rating of 50% or greater, and a qualifying retirement (a regular 20-year retirement, a Reserve retirement once pay-eligible, TERA, or certain disability retirements where you'd qualify for retired pay absent the disability). No application is required — VA shares rating data with DFAS and CRDP is applied automatically.",
        details: [
          "CRDP is taxable, the same as retired pay, because it IS restored retired pay.",
        ],
        who: "Retirees with a VA rating of 50%+ and a qualifying retirement.",
        links: [DFAS_CRDP_CRSC],
      },
      {
        name: "CRSC — Combat-Related Special Compensation",
        kind: "DFAS",
        summary:
          "Per DFAS, CRSC is a non-taxable special compensation for combat-related disabilities. DFAS states the criteria: entitled to/receiving retired pay; a VA rating of at least 10% for a disability that is combat-related (armed conflict, hazardous service, instrumentality of war, or training simulating war, as the branch determines); and retired pay being waived for VA pay. Unlike CRDP, you must APPLY through your branch of service (DD Form 2860) — it is never automatic.",
        details: [
          "Per DFAS, you may qualify for both CRDP and CRSC but can receive only one, and there is an annual open season (each January, per DFAS retiree newsletters) to switch between them if entitled to both.",
        ],
        who: "Retirees whose VA-rated disabilities are combat-related — including many Chapter 61 disability retirees who don't qualify for CRDP.",
        links: [DFAS_CRDP_CRSC],
      },
      {
        name: "Reserve/Guard retirement — points, qualifying years, and the 20-year letter",
        kind: "MyArmyBenefits",
        summary:
          "Non-regular (Reserve/Guard) retirement runs on points, not just years. Per the official Army benefits site: a qualifying year is a complete anniversary year with at least 50 retirement points (points come from drills, training, active duty, and 15 membership points per year); you need 20 qualifying years. When you reach them, your branch issues the Notice of Eligibility — the \"20-year letter\" — your proof you've earned retired pay.",
        details: [
          "At concept level, the pay math converts total career points into equivalent years (points ÷ 360) and applies your system's multiplier (2.5% legacy / 2.0% BRS) to your high-3 pay base — run your own numbers in the calculators group above, and verify your points on your annual retirement point statement every year, while errors are still fixable.",
        ],
        flag: "Your pay is NOT automatic and does NOT start when you stop drilling — you must apply for it when you reach pay age (see the Timeline group below).",
        who: "All Guard/Reserve members, from first enlistment (points accuracy is a career-long habit) through the 20-year letter.",
        links: [
          {
            label: "MyArmyBenefits — Retired Pay fact sheet (Reserve/Guard)",
            url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Retired-Pay?serv=121",
          },
        ],
      },
      {
        name: "Reduced retirement age and the \"gray area\"",
        kind: "DFAS",
        summary:
          "Per DFAS: Guard/Reserve retired pay normally starts at age 60. The wait between stopping drilling and reaching pay age is the \"gray area.\" Under the 2008 NDAA provision DFAS describes, qualifying active service performed on/after January 28/29, 2008 reduces the age-60 requirement by three months for each aggregate 90 days of that service in a fiscal year, down to a floor of age 50.",
        details: [
          "Two catches DFAS and the Army both print: only specific types of orders count, and retiree health care eligibility still begins at 60 even if pay starts earlier (see the gray-area health care card below). Your branch — not DFAS — determines your creditable service and your exact reduced age.",
        ],
        flag: "DFAS pages use both dates for the service window — January 28 and January 29, 2008. The statute's service window is stated as after Jan 28, 2008; your branch makes the official determination.",
        who: "Gray-area retirees, especially those with post-2008 mobilizations.",
        links: [
          {
            label: "DFAS — Gray-area retiree spotlight (reduced age)",
            url: "https://www.dfas.mil/RetiredMilitary/newsevents/newsletter/September2024-Gray-Area-Retiree-Spotlight/",
          },
        ],
      },
    ],
  },
  {
    title: "The Timeline",
    entries: [
      {
        name: "Start 24 months out — counseling deadlines are mandatory",
        kind: "Military OneSource",
        summary:
          "Military OneSource's separation/retirement checklist is the master to-do list, and its clock is unforgiving: you must complete initial counseling and pre-separation counseling no less than 365 days before your separation or retirement date, schedule the final Separation Health Assessment and dental exams no later than 90 days before, and you have one year after leaving active duty to complete your final move.",
        details: [
          "OneSource services also remain available for 365 days after separation or retirement.",
        ],
        who: "Anyone with a retirement date — start at 24–18 months out; several items are already late at 12.",
        links: [
          {
            label: "Military OneSource — Separation / retirement checklist",
            url: "https://www.militaryonesource.mil/transition-retirement/separation/military-separation-checklist/",
          },
        ],
      },
      {
        name: "Applying for retirement — the window (Army verified; others flagged)",
        kind: "Army Retirement Services",
        summary:
          "Windows are branch-set. The safe rule: apply 12–24 months before your desired retirement date, and confirm your branch's current floor with your Retirement Services Office.",
        flag: "The official Army sources themselves differ by audience: the Army Retirement Services planning seminar states Soldiers may apply up to 24 months before the desired retirement date and no less than 12 months before; an Army Human Resources Command processing checklist (effective Jan 1, 2023) states Regular Army voluntary retirement requests must be submitted at least 9 months and no more than 24 months out, with packets inside 9 months requiring a letter of lateness. Navy, Marine Corps, Air Force/Space Force, and Coast Guard windows were NOT verified on an official page for this research, so no number is printed for them — route to your branch retirement/personnel office (MyNavyHR, HQMC, AFPC, PSC respectively) for the current window.",
        who: "Active-duty members inside 24 months of eligibility.",
        links: [
          {
            label: "Army Retirement Services — Retirement planning seminar (PDF)",
            url: "https://soldierforlife.army.mil/documents/army%20retirement/retirement%20planning/DA%20Retirement%20Planning%20Seminar.pdf",
          },
        ],
      },
      {
        name: "Gray-area retirees: applying for pay at 60 (or your reduced age)",
        kind: "DFAS",
        summary:
          "Per DFAS's Army gray-area page: start early — you can submit your retired-pay application up to nine months before your expected pay date, and should submit at least 90 days before it (your 60th birthday or your reduced-age date). Applications go to your branch of service, NOT to DFAS.",
        details: [
          "DFAS also notes it sends gray-area retirees a SmartDoc email notification in the month of their 59th birthday with their branch's application procedures — if it doesn't arrive, contact your branch; don't wait. Per DFAS processing guidance, with a complete package including a correct DD Form 2656, first retired pay is processed about 60 days after the pay start date.",
        ],
        who: "Gray-area retirees approaching 60 (or their reduced age).",
        links: [
          {
            label: "DFAS — Army gray-area retirees: applying for pay",
            url: "https://www.dfas.mil/retiredmilitary/plan/gray-area-retirees/army-gray-area-retirees/",
          },
        ],
      },
      {
        name: "Terminal leave and PTDY — your last weeks on the books",
        kind: "DoD Compensation",
        summary:
          "Per DoD's leave-benefits guidance: terminal leave is ordinary leave taken at the end of service — you're on leave, still on active duty and paid, but you don't report back; you can already be living at your next home. Separately, Permissive TDY (PTDY) is authorized absence for house and job hunting for members retiring from active duty (and certain involuntary separatees) — commander-approved.",
        details: [
          "Members separating at the normal end of a term (ETS/EAOS) are not eligible for PTDY. Unused leave can also be sold back instead — a finance decision to model, not a default.",
        ],
        flag: "PTDY amounts are set by branch leave rules — official installation guidance ranges from about 10 days up to 20 days for CONUS retirees depending on service. Confirm in your branch's leave regulation; PTDY may also be denied if the mission requires.",
        who: "Members in their final 6 months.",
        links: [
          {
            label: "DoD Compensation — Leave benefits during transition",
            url: "https://militarypay.defense.gov/Benefits/Leave-Benefits-During-Transition/",
          },
        ],
      },
      {
        name: "SkillBridge — covered in Transition & Jobs",
        kind: "Cross-reference",
        summary:
          "The DoD SkillBridge program (internships/training with civilian employers during your last up-to-180 days) is covered in this app's Transition & Jobs section — listed here only so the retirement timeline doesn't drop it. Retirement and SkillBridge planning happen in the same window; approvals run through your command and take time.",
        who: "Members 12–6 months out who want a civilian runway.",
        links: [],
        xref: { label: "Open Transition & Jobs — SkillBridge", target: "transition" },
      },
      {
        name: "After you apply — DFAS processing times",
        kind: "DFAS",
        summary:
          "Per DFAS: with a complete retirement package (including a correct DD Form 2656), first retired pay is processed about 60 days after your retirement date; incomplete packages, research, or computation issues take longer.",
        details: [
          "Budget for that gap — the first check is not a day-one check.",
        ],
        who: "Everyone in their final months.",
        links: [
          {
            label: "DFAS — How long does retired pay processing take?",
            url: "https://www.dfas.mil/RetiredMilitary/about/How-Long-Does-It-Take/",
          },
        ],
      },
    ],
  },
  {
    title: "After the Check Starts",
    entries: [
      {
        name: "myPay for retirees — your account doesn't end at retirement",
        kind: "DFAS",
        summary:
          "Per DFAS, retirees manage retired pay through myPay: view the monthly Retiree Account Statement (RAS) (pay, deductions, SBP premiums, VA waiver amount), update direct deposit/address/withholding, and download the annual 1099-R tax statement (available in myPay in late December, weeks before paper copies mail; up to four prior years are kept). DFAS also offers gray-area retirees a special myPay account (last card in this group).",
        flag: "Coast Guard retirees are paid by the Coast Guard Pay & Personnel Center, not DFAS — CG retiree account services run through PPC, not myPay. (The CG-specific portal link was not verified for this research.)",
        who: "Every DFAS-paid retiree, from the first month.",
        links: [{ label: "DFAS — myPay", url: "https://mypay.dfas.mil/" }],
      },
      {
        name: "Taxes on retired pay — federal yes, state varies",
        kind: "DFAS",
        summary:
          "Per DFAS's retiree tax guidance: whether retired pay is subject to federal income tax depends on individual circumstances (length-of-service retired pay is generally federally taxable; disability-related amounts can differ). You control federal withholding in myPay or by IRS Form W-4. State tax is entirely state-by-state: some states exempt military retired pay, some tax it, and DFAS can only withhold for one state at a time and only for states with a withholding agreement — check your state's revenue department and DFAS's state-withholding page before assuming.",
        details: [
          "DFAS explicitly does not give tax advice and routes you to the IRS or a tax professional. MilTax (in this app's Pay & Money section) covers retirees in their first year out and beyond for eligible users.",
        ],
        who: "All retirees — set withholding deliberately in month one, not at tax time.",
        links: [
          { label: "DFAS — Retiree tax guidance", url: "https://www.dfas.mil/retpaytax" },
        ],
        xref: { label: "Open Pay & Money — MilTax", target: "pay" },
      },
      {
        name: "TRICARE at retirement — you must re-enroll",
        kind: "TRICARE / MyArmyBenefits",
        summary:
          "Retirement is a Qualifying Life Event giving you 90 days from your retirement date to enroll yourself and eligible family members in a retiree plan (Prime where available, Select, US Family Health Plan in its areas, or TRICARE For Life if you have Medicare Parts A and B). Miss the window and (if under 65) you can request retroactive enrollment up to 12 months — but you owe the enrollment fees back to your retirement date. Retiree enrollment fees/premiums apply.",
        details: [
          "Full plan detail lives in this app's Benefits section; this entry exists so no retiree assumes coverage rolled over.",
        ],
        callout:
          "TRICARE's own warning: \"Your TRICARE coverage doesn't automatically continue when you retire.\" Put the 90-day re-enrollment clock on the calendar before the retirement ceremony.",
        who: "Every retiring member and family.",
        links: [
          {
            label: "MyArmyBenefits — Retirement changes your TRICARE coverage",
            url: "https://myarmybenefits.us.army.mil/News/Retirement-changes-your-TRICARE-coverage-Learn-what-to-do-if-youre-retiring-in-2026",
          },
        ],
        xref: { label: "Open Benefits — TRICARE plan detail", target: "benefits" },
      },
      {
        name: "Gray-area health care — TRICARE Retired Reserve, then 60 changes everything",
        kind: "TRICARE",
        summary:
          "Per TRICARE: retired Guard/Reserve members under 60 (\"gray area\") do not qualify for Prime or Select — the option is TRICARE Retired Reserve (TRR), a premium-based plan you may purchase at any time (buy within 90 days of your retirement date to avoid a coverage break if you were on TRICARE Reserve Select, which ends at retirement). At age 60, you become eligible for the same retiree plans as active-duty retirees — your 60th birthday is itself a Qualifying Life Event with its own 90-day enrollment window — and at 65, coverage becomes TRICARE For Life with Medicare Parts A and B.",
        flag: "Reduced-age retired pay (Key Decisions group) does NOT move these health-care ages: retiree TRICARE eligibility still begins at 60.",
        who: "Gray-area retirees and their families, from the 20-year letter to age 65.",
        links: [
          {
            label: "TRICARE Newsroom — Retiring from the Guard or Reserve: your options",
            url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/3120866/retiring-from-national-guard-or-reserve-know-your-tricare-options",
          },
        ],
      },
      {
        name: "Retiree ID cards — the USID card runs through DEERS/RAPIDS",
        kind: "ID Card Office Online",
        summary:
          "Your CAC goes away at retirement; it's replaced by a Uniformed Services ID (USID) card issued at a RAPIDS/DEERS site, which is your key to installation access, commissary/exchange, MWR, and TRICARE proof. Book and manage appointments through ID Card Office Online. Bring your retirement orders and DD Form 214 (and a second form of ID); family members get their own dependent USID cards.",
        details: [
          "Guard/Reserve retirees carry a Retired Reserve card during the gray area and exchange it for the Retired card at pay eligibility (age 60). Per DoD notices, the old laminated legacy cards are being fully replaced by the new plastic USID — replace an unexpired legacy card at your earliest opportunity.",
        ],
        flag: "Legacy cards were slated to become obsolete around late September 2026 per installation notices — verify current status at ID Card Office Online.",
        who: "Every retiree and their family members, at retirement and at each status change (60, 65, marriage/divorce).",
        links: [
          { label: "ID Card Office Online (DMDC)", url: "https://idco.dmdc.osd.mil/idco/" },
        ],
      },
      {
        name: "Gray-area staying connected — and Space-A at concept",
        kind: "DFAS",
        summary:
          "Per DFAS, gray-area retirees can open a special myPay account to stay connected and keep contact information current during the years between stopping drilling and starting pay — DFAS and your branch can only reach you with your 59th-birthday application notice (Timeline group) if your information is current, so update it at every move.",
        details: [
          "Separately: retirees — including gray-area retirees in eligible categories — may use Space-Available travel on military flights, a standby benefit with category-based priorities; the full rules, categories, and signup routes live in this app's Deals & Discounts section (Space-A entry) rather than being duplicated here.",
        ],
        flag: "Space-A eligibility/category details are NOT stated in this research — use the Deals & Discounts entry's sourced version.",
        who: "Gray-area retirees (myPay account, contact updates) and all retirees (Space-A cross-reference).",
        links: [
          {
            label: "DFAS — Gray-area retirees: staying connected",
            url: "https://www.dfas.mil/RetiredMilitary/plan/Gray-Area-Retirees/",
          },
        ],
        xref: { label: "Open Deals & Discounts — Space-A", target: "deals" },
      },
    ],
  },
];
