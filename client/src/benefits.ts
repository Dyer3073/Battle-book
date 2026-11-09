// Benefits library — static reference data transcribed from the researched
// benefits pack (~/workspace/military-app/benefits/benefits.md, researched
// November 8, 2026). Summaries, eligibility, and links come only from the
// pack, which paraphrases official sources (VA.gov, Benefits.va.gov, branch
// .mil pages, official program portals and aid societies).
//
// Fidelity rules baked into this data:
// - Anything the pack flags as variable (TA caps, TRICARE costs, GI Bill /
//   DEA / VR&E rates, pension limits, TSP limits) carries a `flag` note and
//   no permanent number.
// - The only hard dollar figures are the ones the pack states with source
//   and period: the SAH/SHA FY2026 maximums and the Coast Guard FY27 TA cap,
//   each rendered inside its flag with the source/period label attached.

export type BenefitLink = { label: string; url: string };

export type BenefitItem = {
  name: string;
  summary: string;
  eligibility: string;
  links: BenefitLink[];
  flag?: string;
};

export type BenefitCategory = { title: string; items: BenefitItem[] };

export type BranchBenefits = { branch: string; note?: string; items: BenefitItem[] };

export const BENEFITS_STANDING_NOTE =
  "Benefits change — rates, caps, and rules are updated on regular cycles. Always confirm current details on the official page before applying.";

export const BRANCH_STANDING_NOTE =
  "Tuition Assistance and credentialing funding are set by each service each fiscal year and are subject to appropriations — caps, covered categories, and even whether new applications are being accepted can change mid-year (services have paused TA when funding ran short). Treat the portals below as the source of truth and confirm current caps with your education center before enrolling.";

export const UNIVERSAL_BENEFITS: BenefitCategory[] = [
  {
    title: "Home loans & housing",
    items: [
      {
        name: "VA Home Loan — Certificate of Eligibility (COE) & Entitlement",
        summary:
          "VA helps service members, Veterans, and eligible surviving spouses buy, build, repair, or refinance a home. VA does not lend the money itself — a private lender makes the loan and VA guarantees part of it, which is why most VA loans require no down payment and no private mortgage insurance. Before a lender can proceed, you need a Certificate of Eligibility (COE), the document that proves you meet the service requirements and shows the lender how much entitlement you have.",
        eligibility:
          "Based on your service history — length of service and character of discharge — with different minimum-service rules by era (wartime, peacetime, Guard/Reserve service all have their own lines on VA's eligibility page). You must also meet your lender's credit and income requirements, and the home must be your primary residence. Most borrowers pay a one-time VA funding fee, which varies by first/subsequent use and down payment; Veterans receiving VA disability compensation, Purple Heart recipients, and eligible surviving spouses are exempt from the fee.",
        links: [
          { label: "Home loans hub", url: "https://www.benefits.va.gov/homeloans/" },
          { label: "COE information", url: "https://www.benefits.va.gov/homeloans/purchaseco_certificate.asp" },
          { label: "Eligibility rules", url: "https://www.va.gov/housing-assistance/home-loans/eligibility/" },
          { label: "How to request a COE", url: "https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/" },
        ],
      },
      {
        name: "IRRRL — Interest Rate Reduction Refinance Loan",
        summary:
          "The IRRRL (often called a \"VA streamline refinance\") lets you refinance an existing VA-backed loan into a new VA loan, usually to lower your interest rate and monthly payment. It is only for people who already have a VA loan on the home they want to refinance. The paperwork is lighter than a new purchase loan — VA does not require an appraisal or credit underwriting in most cases.",
        eligibility:
          "You must already have a VA-backed loan and certify you live in (or previously lived in) the home. An IRRRL can only move you from one VA loan to another; the new loan must generally put you in a better financial position (lower rate), with limited exceptions such as refinancing an adjustable-rate loan to a fixed rate.",
        links: [
          { label: "IRRRL on VA.gov", url: "https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan/" },
        ],
      },
      {
        name: "Native American Direct Loan (NADL)",
        summary:
          "The NADL program lends directly from VA — not through a private lender — to Native American Veterans and their spouses to buy, build, or improve a home on federal trust land, or to refinance an existing NADL loan. Because the land is held in trust, a regular VA-guaranteed loan usually can't be used, and this program fills that gap.",
        eligibility:
          "You must be a Native American Veteran (or a Veteran married to a Native American non-Veteran), have a valid COE, and the home must be on federal trust land. Your tribe or tribal organization must have a signed agreement (Memorandum of Understanding) with VA, and you must meet VA's credit/income standards for a direct loan.",
        links: [{ label: "NADL program", url: "https://www.benefits.va.gov/homeloans/nadl.asp" }],
      },
      {
        name: "Disability Housing Grants — SAH & SHA",
        summary:
          "VA offers grants to Veterans with certain severe service-connected disabilities to build, buy, or adapt a home (or adapt a family member's home where they live) so they can live more independently — for example with ramps, wider doorways, or accessible bathrooms. The Specially Adapted Housing (SAH) grant is the larger one; the Special Housing Adaptation (SHA) grant is smaller and covers different qualifying disabilities. A Temporary Residence Adaptation (TRA) grant can help adapt a family member's home for a temporary stay.",
        eligibility:
          "You must own (or will own) the home and have a qualifying service-connected disability from VA's listed categories (for example, loss or loss of use of limbs, blindness, certain severe burns or respiratory injuries — the exact qualifying conditions differ between SAH and SHA, and VA's page lists them).",
        links: [{ label: "Disability housing grants", url: "https://www.va.gov/housing-assistance/disability-housing-grants/" }],
        flag: "Amounts change every October 1. As listed on VA.gov's disability housing grants page, the FY2026 maximums were SAH $126,526 and SHA $25,350 — check the page for current figures.",
      },
      {
        name: "Home Loans for Surviving Spouses",
        summary:
          "An eligible surviving spouse can get a VA-backed home loan to purchase or refinance a home, with the same headline advantages — typically no down payment and no funding fee for eligible surviving spouses. You first need a COE in your own name as a surviving spouse to show your lender.",
        eligibility:
          "As VA.gov states it, at least one of these must be true: the Veteran is missing in action or a prisoner of war; the Veteran died in service or from a service-connected disability and you didn't remarry (or you remarried at age 57 or later, on or after December 16, 2003); or the Veteran had been rated totally disabled and died, where the disability may not have caused the death (certain situations). Which form you file (VA Form 26-1817 vs. 21P-534EZ) depends on whether you're receiving Dependency and Indemnity Compensation (DIC).",
        links: [
          { label: "Surviving spouse home loan", url: "https://www.va.gov/family-and-caregiver-benefits/housing-assistance/surviving-spouse-home-loan/" },
        ],
      },
    ],
  },
  {
    title: "Disability",
    items: [
      {
        name: "VA Disability Compensation",
        summary:
          "Disability compensation is a tax-free monthly payment to Veterans whose disabilities are the result of a disease or injury incurred or aggravated during active military service (\"service-connected\"). It also covers disabilities that appear after service and are considered related to service, and certain secondary conditions caused by a service-connected disability. You file a claim, provide evidence (service records, medical evidence, and usually a VA claim exam), and VA assigns a rating.",
        eligibility:
          "You served on active duty, active duty for training, or inactive duty training, and you have a current illness or injury that affects your body or mind and is linked to your service; VA's page also covers presumptive conditions (conditions VA assumes are service-connected for certain service eras/exposures). Individual conditions are rated in percentages, and multiple ratings are combined using VA's combined-ratings method — at concept level: the combined percentage is not simple addition, and your payment depends on your combined rating and whether you have dependents.",
        links: [{ label: "How to file a claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        name: "Post-9/11 GI Bill (Chapter 33)",
        summary:
          "The Post-9/11 GI Bill helps Veterans and service members pay for college, graduate school, and training programs. At the maximum benefit level it can cover the full cost of public, in-state tuition and fees, provides a monthly housing allowance based on the school's location, and a yearly books and supplies stipend; private and foreign schools are capped at a national maximum that VA publishes each academic year.",
        eligibility:
          "You served at least 90 days on active duty after September 10, 2001 (the percentage of the maximum benefit you get rises with your total service, reaching 100% at 36 months), or you were discharged with a service-connected disability after at least 30 days. Benefits generally don't expire for those who left the military on or after January 1, 2013 (Forever GI Bill).",
        links: [
          { label: "Post-9/11 GI Bill", url: "https://choose.va.gov/education-and-training/post-9-11-gi-bill/" },
          { label: "Education eligibility overview", url: "https://www.va.gov/education/eligibility/" },
        ],
      },
      {
        name: "Montgomery GI Bill (Chapter 30)",
        summary:
          "The Montgomery GI Bill (MGIB-AD) is the older active-duty education benefit: it pays a monthly amount directly to you while you're in an approved education or training program, rather than paying the school. Some members who are eligible for both bills must choose between MGIB and the Post-9/11 GI Bill when they apply.",
        eligibility:
          "Generally, you entered active duty after June 30, 1985, had your pay reduced by $100 per month for the first 12 months of service, served the required continuous active duty for your category, and were discharged honorably (for most categories). You typically have 10 years from your last discharge to use it.",
        links: [{ label: "Montgomery GI Bill", url: "https://choose.va.gov/education-and-training/montgomery-gi-bill/" }],
        flag: "Monthly rates are set by Congress and change — check VA's current rate tables.",
      },
      {
        name: "Transfer of Education Benefits (Post-9/11 GI Bill Transfer)",
        summary:
          "Service members who qualify for the Post-9/11 GI Bill may be able to transfer some or all of their unused 36 months to a spouse or child, so the family can use the benefit for school or training. The transfer is made while you are still serving, through the Department of Defense — VA pays the benefit afterward, but DoD decides the transfer itself.",
        eligibility:
          "As VA.gov states them: You've completed at least 6 years of service and you agree to add 4 more years; you're in the Selected Reserve or on active duty; and the family member receiving the benefit is enrolled in DEERS. Children generally use transferred benefits between ages 18 and 26; a spouse's timing follows its own rules on VA's page.",
        links: [
          { label: "Transfer Post-9/11 GI Bill benefits", url: "https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/" },
        ],
      },
      {
        name: "Yellow Ribbon Program",
        summary:
          "The Yellow Ribbon Program helps cover tuition and fees at private, out-of-state, or graduate schools that exceed the Post-9/11 GI Bill's caps. Participating schools voluntarily agree to cover part of the gap, and VA matches the school's contribution. Not every school participates, and schools set how many students and how much funding they offer each year.",
        eligibility:
          "You must qualify for the Post-9/11 GI Bill at the 100% benefit level and be enrolled at a participating school (or be an eligible dependent using transferred benefits at the 100% level). Active-duty members and their spouses have specific exclusions noted on VA's page.",
        links: [
          { label: "Yellow Ribbon Program", url: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/" },
        ],
        flag: "School participation and dollar amounts are decided school-by-school and year-by-year.",
      },
      {
        name: "Veteran Readiness and Employment — VR&E (Chapter 31)",
        summary:
          "VR&E is a career program — separate from the GI Bill — that helps Veterans with a service-connected disability prepare for, find, and keep a suitable job. A VA counselor works with you on one of five tracks (re-employment, rapid access to employment, self-employment, employment through long-term services such as college or an apprenticeship, or independent living when work isn't currently feasible). In a training plan, VR&E funds tuition, books, fees, and necessary supplies, plus a monthly subsistence allowance.",
        eligibility:
          "You have a service-connected disability rating and an employment handicap — generally, a rating of at least 20% with an employment handicap, or 10% with a serious employment handicap, as VA's eligibility page describes it; your discharge must not have been dishonorable. Service members awaiting discharge with a memorandum rating can also apply. A VA counselor makes the final entitlement decision for your case.",
        links: [{ label: "VR&E on VA.gov", url: "https://www.va.gov/careers-employment/vocational-rehabilitation/" }],
        flag: "Subsistence allowance rates change each October 1.",
      },
      {
        name: "Dependents' Educational Assistance — DEA (Chapter 35)",
        summary:
          "DEA (also called Survivors' and Dependents' Educational Assistance) provides education and training money to eligible spouses and children of certain Veterans. Unlike the GI Bill, DEA pays a monthly amount directly to the student — not to the school — to help cover tuition, fees, and living costs at VA-approved schools and training programs.",
        eligibility:
          "You are the spouse or child of a Veteran who is permanently and totally disabled due to a service-connected disability, or who died from a service-connected disability, or who died on active duty/in the line of duty, or who was missing in action or captured in the line of duty by a hostile force or forcibly detained (for more than 90 days, as VA's page lists). Benefits generally provide up to 36 months of training; age and time-limit rules differ for spouses vs. children and changed for qualifying events on or after August 1, 2023.",
        links: [
          { label: "DEA rates", url: "https://www.va.gov/family-and-caregiver-benefits/education-and-careers/dependents-education-assistance/rates/" },
        ],
        flag: "Monthly DEA rates change each October 1 — see VA's current rate table.",
      },
    ],
  },
  {
    title: "Health",
    items: [
      {
        name: "VA Health Care — Eligibility, Enrollment & Priority Groups",
        summary:
          "VA health care covers care for your physical and mental health — checkups, specialty care, surgeries, prescriptions, medical equipment, and home health care — through VA medical centers and clinics. Enrollment satisfies the Affordable Care Act's coverage requirement. Most Veterans qualify for cost-free care for service-connected conditions; some Veterans pay modest copays for other care, depending on their priority group and income.",
        eligibility:
          "In general, you served in the active military, naval, or air service and were discharged or released under conditions other than dishonorable, and you meet the minimum active-duty service requirement (or an exception to it, such as a service-connected disability or combat Veteran status). When you enroll, VA places you in one of 8 priority groups — at concept level, the groups order enrollment and copays by factors like service-connected disability rating, income, and special statuses (former POW, Purple Heart, Medal of Honor, recent combat service). You apply with VA Form 10-10EZ, online, by phone, by mail, or in person.",
        links: [
          { label: "Priority groups", url: "https://www.va.gov/health-care/eligibility/priority-groups/" },
          {
            label: "How to apply",
            url: "https://www.va.gov/health-care/how-to-apply/",
          },
        ],
        flag: "Copay amounts and income thresholds are updated on a regular cycle — check VA's current copay-rate and income-limit pages.",
      },
      {
        name: "TRICARE",
        summary:
          "TRICARE is the DoD health care program for uniformed service members, retirees, and their families, delivered through military hospitals/clinics and civilian provider networks. The two main enrollment plans are TRICARE Prime (managed care — you get a primary care manager and referrals for specialty care, with lower costs) and TRICARE Select (see any TRICARE-authorized provider without a referral, with higher out-of-pocket costs). Premium-based plans cover other situations: TRICARE Reserve Select for Selected Reserve members not on active duty, TRICARE Retired Reserve for retired Reserve members under 60, TRICARE Young Adult for adult children, and TRICARE For Life — Medicare-wraparound coverage for beneficiaries who have Medicare Part A and Part B.",
        eligibility:
          "You must be registered in DEERS. Active-duty members are enrolled in Prime automatically and pay nothing out of pocket; plan choices, enrollment fees, and costs depend on your category (active-duty family, retiree, Reserve) and whether you're in Group A or Group B (based on whether the sponsor first entered service before or on/after January 1, 2018). Plan changes generally happen during the annual TRICARE Open Season or after a qualifying life event.",
        links: [
          { label: "TRICARE Select plan page", url: "https://www.tricare.mil/Plans/HealthPlans/TS" },
          { label: "Compare current plan costs", url: "https://www.tricare.mil/Costs/Compare" },
        ],
        flag: "Costs, fees, and premiums are reset every calendar year — compare current figures on TRICARE's site.",
      },
    ],
  },
  {
    title: "Retirement & money",
    items: [
      {
        name: "Blended Retirement System (BRS) — and the Legacy System",
        summary:
          "BRS is the current military retirement system for members who entered service on or after January 1, 2018 (and for earlier members who opted in during the 2018 window). It \"blends\" a smaller traditional pension — a monthly annuity after 20 years of qualifying service, calculated at 2.0% per year of service instead of the legacy 2.5% — with automatic and matching government contributions to your Thrift Savings Plan account, plus a mid-career continuation pay bonus. The legacy (\"High-3\") system, which covers most members who entered before 2018 and didn't opt in, is a pension-only system: 2.5% per year of service, payable after 20 years, with no government TSP contributions.",
        eligibility:
          "Retirement pay under either system generally requires 20 years of qualifying service (Reserve members generally start drawing it at age 60, with possible reductions for certain active-duty periods). Under BRS you are automatically enrolled in TSP with an automatic 1% agency contribution and matching contributions up to a combined 5% — see the DoD BRS page for the current rules.",
        links: [{ label: "DoD BRS page", url: "https://militarypay.defense.gov/BlendedRetirement/" }],
      },
      {
        name: "Thrift Savings Plan (TSP)",
        summary:
          "TSP is the federal government's retirement savings and investment plan — similar to a civilian 401(k) — for service members and federal employees. You contribute from your pay (with traditional pre-tax and Roth options), choose among TSP's investment funds, and under BRS the government adds automatic and matching contributions. Your TSP account stays yours when you leave service, even if you don't serve 20 years.",
        eligibility:
          "Uniformed services members covered by BRS are automatically enrolled; members under the legacy system can also elect to contribute (without the government match). Contribution limits follow the IRS elective-deferral limits.",
        links: [{ label: "About TSP", url: "https://www.tsp.gov/about-thrift-savings-plan-tsp/" }],
        flag: "IRS contribution limits change annually.",
      },
      {
        name: "Military Retired Pay (DFAS)",
        summary:
          "The Defense Finance and Accounting Service (DFAS) pays military retirees and Survivor Benefit Plan (SBP) annuitants. Retired and annuitant pay is due on the first of the month; when the first falls on a weekend or holiday, retirees are paid on the last business day of the prior month and annuitants on the first business day of the month. Retirees manage their pay account — allotments, direct deposit, tax statements (1099-R), and their Retiree Account Statement — through DFAS's myPay self-service portal.",
        eligibility:
          "DFAS pays you once your branch has processed your retirement and established your pay account; SBP is the program that can continue a portion of retired pay to eligible survivors, with premiums generally deducted from retired pay. COLA adjustments are announced by DFAS when they occur.",
        links: [
          { label: "Retired pay schedule", url: "https://www.dfas.mil/RetiredMilitary/manage/payschedule/" },
          { label: "Retired & annuitant customer service", url: "https://www.dfas.mil/RetiredMilitary/about/aboutus/customer-service/" },
          { label: "myPay", url: "https://mypay.dfas.mil/" },
        ],
        flag: "Pay schedules are published per calendar year — check DFAS for the current year's dates.",
      },
      {
        name: "VA Life Insurance — SGLI, VGLI & VALife",
        summary:
          "VA's insurance hub covers the group life insurance programs for the military community. Servicemembers' Group Life Insurance (SGLI) is low-cost term coverage for service members — enrollment is automatic at the maximum coverage unless you decline or reduce it in writing — and it can be extended briefly after separation. Veterans' Group Life Insurance (VGLI) lets you convert your SGLI to continued coverage after you leave service, with no medical exam if you apply within the window VA states (1 year and 120 days after separation). VA Life (VALife) is a whole-life option for Veterans with a service-connected disability.",
        eligibility:
          "Coverage follows the program rules on VA's insurance hub — SGLI for serving members, VGLI conversion after separation within the stated window, and VALife for Veterans with a service-connected disability.",
        links: [{ label: "VA insurance hub", url: "https://www.benefits.va.gov/INSURANCE/index.asp" }],
        flag: "Coverage maximums and premium tables are set by VA and can change — check the insurance hub for current figures before relying on a number.",
      },
      {
        name: "Servicemembers Civil Relief Act (SCRA)",
        summary:
          "The SCRA is a federal law that gives legal and financial protections to service members whose military service makes it hard to meet financial obligations or defend civil actions. As official branch pages summarize the protections: a 6% cap on interest for debts incurred before active duty (including mortgages and credit cards, on request with orders), the ability to terminate certain leases early (including residential and vehicle leases) after entering service or receiving orders, protection from default judgments in civil cases, and stays (delays) of court and administrative proceedings, plus eviction and foreclosure protections. The official SCRA website lets lenders, landlords, and members verify a service member's active-duty status.",
        eligibility:
          "Protections generally apply to active-duty members (including Guard/Reserve called to active duty) and, for some provisions, their dependents. Most protections must be actively invoked — for example, the interest-rate cap requires written notice to the creditor with a copy of your orders.",
        links: [{ label: "SCRA status-verification site", url: "https://scra.dmdc.osd.mil/scra/#/home" }],
      },
    ],
  },
  {
    title: "Transition & records",
    items: [
      {
        name: "Veterans Pension",
        summary:
          "The Veterans Pension is a needs-based, tax-free monthly payment to wartime Veterans with limited income and net worth who are age 65 or older or permanently and totally disabled. It is different from disability compensation: pension is based on wartime service plus financial need, not on a service-connected disability, and you cannot receive both at the same time.",
        eligibility:
          "As VA.gov states them: You didn't receive a dishonorable discharge, and your yearly family income and net worth are within limits set by Congress; and your service meets the wartime minimums (for example, at least 90 days of active duty with at least 1 day during a wartime period if you started active duty before September 8, 1980, or generally at least 24 months / the full period you were called up if you started after that date); and at least one of: you're 65 or older, you have a permanent and total disability, you're a patient in a nursing home for long-term care because of a disability, or you receive SSDI or SSI. A separate Survivors Pension exists for eligible surviving spouses and children of wartime Veterans.",
        links: [
          {
            label: "Pension eligibility",
            url: "https://www.va.gov/pension/eligibility/",
          },
        ],
        flag: "The net-worth limit and payment rates are set by Congress and updated each December 1 — VA publishes the current figures on its pension rates pages; don't rely on a remembered number.",
      },
      {
        name: "Burial & Memorial Benefits",
        summary:
          "VA's National Cemetery Administration provides burial and memorial benefits to honor Veterans: burial in a VA national cemetery (gravesite, opening/closing, perpetual care, a government headstone or marker, a burial flag, and a Presidential Memorial Certificate, at no cost to the family), burial allowances that can help with certain burial and funeral costs, and headstones/markers for Veterans buried in private cemeteries. Spouses and dependents can also be buried in a national cemetery.",
        eligibility:
          "Generally, Veterans discharged under conditions other than dishonorable, service members who die on active duty, and eligible spouses/dependents qualify; VA's pages list the specific service and discharge rules, and eligibility for a national cemetery burial can be determined ahead of time through VA's pre-need application. Burial allowance amounts and rules are set by VA and can change.",
        links: [{ label: "Burial & memorial benefits", url: "https://www.cem.va.gov/burial-memorial-benefits/" }],
      },
      {
        name: "DD-214 & Military Service Records (eVetRecs / milConnect)",
        summary:
          "Your DD-214 (Certificate of Release or Discharge from Active Duty) is the key document for proving service for VA benefits, jobs, and many state programs. Veterans and next of kin can request service records — including DD-214s — from the National Personnel Records Center online through eVetRecs (or by mail/fax with Standard Form 180). More recent records can often be pulled faster through VA.gov or DoD's milConnect portal, which also provides official documents like the DD-214 and benefit letters for recent separations.",
        eligibility:
          "Records requests are limited by privacy rules — the Veteran, or the next of kin of a deceased Veteran, can request full records; the general public can only get limited information. VA's records page walks through which route (online, mail, or in person) fits your situation.",
        links: [
          { label: "VA records guide", url: "https://www.va.gov/records/get-military-service-records/" },
          { label: "milConnect", url: "https://milconnect.dmdc.osd.mil/milconnect/" },
        ],
      },
      {
        name: "Military ID Cards — DEERS & RAPIDS (Overview)",
        summary:
          "Your entry in DEERS (Defense Enrollment Eligibility Reporting System) is what establishes eligibility for TRICARE, commissary/exchange access, and ID cards for you and your family members. ID cards (CAC for service members and DoD civilians; dependent and retiree ID cards for family members and retirees) are issued at RAPIDS sites — usually your installation's ID card office / personnel support detachment. Keep DEERS updated whenever your status changes (marriage, birth, activation, retirement) or family coverage and access can break.",
        eligibility:
          "Sponsors enroll eligible family members in DEERS with documents such as marriage/birth certificates and Social Security cards; ID card types and renewal rules depend on your category (active duty, Reserve, retiree, dependent, 100% disabled Veteran). Use the official ID Card Office Online (IDCO) to find a RAPIDS site and book appointments.",
        links: [{ label: "RAPIDS site locator", url: "https://idco.dmdc.osd.mil/idco/locator" }],
      },
    ],
  },
  {
    title: "DoD-wide perks",
    items: [
      {
        name: "Commissary Privileges (DeCA)",
        summary:
          "The Defense Commissary Agency (DeCA) runs military grocery stores (commissaries) on installations worldwide, selling groceries at cost plus a small surcharge — a benefit official sources describe as significant savings versus commercial grocery prices. Authorized shoppers include active-duty members, retirees, Guard/Reserve members, and their eligible family members; under a 2018 law, eligibility was extended to Purple Heart recipients, former prisoners of war, Veterans with a service-connected disability, and certain designated caregivers, who shop with a Veteran Health Identification Card (VHIC).",
        eligibility:
          "You need an authorized ID card (or VHIC for the expanded-eligibility groups); family members of the newly eligible Veteran groups are generally not authorized in their own right, per DoD guidance. Eligibility rules and any access fees for expanded groups are set by DoD policy and can change.",
        links: [
          { label: "DeCA commissaries", url: "https://corp.commissaries.com" },
          { label: "Expanded eligibility", url: "https://corp.commissaries.com/extended-eligibility" },
        ],
      },
      {
        name: "Exchange Privileges (AAFES / NEX / MCX / CGX)",
        summary:
          "The military exchanges — the Army & Air Force Exchange Service (the Exchange), Navy Exchange, Marine Corps Exchange, and Coast Guard Exchange — sell retail goods and services at military-exclusive, tax-free prices, and their earnings fund MWR quality-of-life programs. Authorized patrons can shop at any branch's exchange, in store or online. All honorably discharged Veterans have lifetime online shopping privileges (verified through the exchange sites), even when they don't have in-store access.",
        eligibility:
          "In-store privileges generally follow the same authorized-patron rules as commissaries (uniformed members, retirees, eligible family members, and the expanded groups under the 2018 law; DoD/Coast Guard civilian CAC holders were added in 2021 with some restrictions). Online access is broader — all honorably discharged Veterans qualify.",
        links: [{ label: "Exchange online store", url: "https://www.shopmyexchange.com/" }],
      },
      {
        name: "MWR — Morale, Welfare and Recreation (DoD-Wide Overview)",
        summary:
          "MWR is the umbrella for quality-of-life programs on installations: fitness and sports, recreation and outdoor programs, libraries, youth activities, bowling and golf, Information/Tickets/Travel (ITT) offices for discounted tickets and trips, and the DoD MWR digital libraries (free e-books, audiobooks, streaming, tutoring, and language resources online, 24/7). Each branch runs its own MWR (see By branch), but eligibility is broadly shared across the military community, and Military OneSource's MWR page is the DoD-wide explainer and directory entry point.",
        eligibility:
          "Unlimited use of Category A (mission-sustaining) MWR programs is authorized for active-duty members of all branches and their families, Reserve/Guard members and their families, and other groups listed on the Military OneSource page; retirees and DoD civilians have access to many programs as well, sometimes with fees. Local offerings and fees vary by installation.",
        links: [
          {
            label: "About MWR (Military OneSource)",
            url: "https://www.militaryonesource.mil/military-basics/extended-family-friend/about-mwr-morale-welfare-and-recreation/",
          },
        ],
      },
      {
        name: "Space-A Travel (Air Mobility Command)",
        summary:
          "Space-Available travel lets eligible passengers fly on DoD aircraft — at no cost for the seat — when seats remain after all duty (Space-Required) passengers and cargo are accommodated. Flights run between AMC passenger terminals worldwide, but there is never a guaranteed seat: schedules change, and AMC warns travelers to be prepared to buy commercial tickets if a flight falls through. You sign up at your departure terminal (in person, by email, or through AMC's sign-up tools) and compete by travel category and sign-up time.",
        eligibility:
          "Categories are set by DoDI 4515.13 — for example, active-duty members on ordinary leave (they must be in a leave/pass status when signing up and throughout travel), retirees, certain Reserve/Guard members, and eligible dependents in limited circumstances (dependents generally travel with their sponsor, with narrow exceptions such as environmental/morale leave and command-sponsored categories overseas). Your sign-up stays active for a limited window (60 days for most sign-ups, or until leave expires for active duty).",
        links: [
          { label: "AMC Space-A page", url: "https://www.amc.af.mil/AMC-Travel-Site/AMC-Space-Available-Travel-Page/" },
          { label: "Self sign-up tool", url: "https://gatesea.mtmc.gov/amctravel/" },
        ],
      },
      {
        name: "Armed Forces Legal Assistance",
        summary:
          "Legal assistance offices on installations provide free legal help to eligible service members and families from military attorneys — common topics include wills and powers of attorney, landlord-tenant and consumer issues, family law questions, SCRA rights, and notary services. The Armed Forces Legal Assistance (AFLA) locator finds the nearest office across all branches. Legal assistance attorneys advise and draft documents but generally cannot represent you in civilian court.",
        eligibility:
          "Generally active-duty members, retirees, dependents, and Guard/Reserve members on active-duty orders, as described by the program; specific services vary by office and issue.",
        links: [{ label: "Legal assistance office locator", url: "https://legalassistance.law.af.mil/" }],
      },
      {
        name: "Military OneSource",
        summary:
          "Military OneSource is DoD's 24/7 support hub for the military community — a website and call center (800-342-9647) connecting members and families to free resources: confidential non-medical counseling (up to 12 sessions per issue), financial and tax help (including free tax preparation/filing software for the community), spouse education and career support (SECO/MyCAA information), relocation and PCS tools, and the MilitaryINSTALLATIONS directory. Services are provided at no cost and, for counseling, are confidential and kept separate from military records within program limits.",
        eligibility:
          "Service members of all branches (including Guard and Reserve, regardless of activation status, for many services) and their immediate family members; eligibility for some services continues for a period after separation — the site states the current windows.",
        links: [{ label: "Military OneSource", url: "https://www.militaryonesource.mil/" }],
      },
      {
        name: "USO (Nonprofit)",
        summary:
          "The USO is a congressionally chartered nonprofit organization (not a government agency) that supports service members and military families through 260+ centers at airports and installations worldwide, care packages, entertainment tours, transition support, spouse programs, and programs like the USO Reading Program that help deployed members stay connected to family. Its services are free to the military community and funded by donations.",
        eligibility:
          "USO centers and programs serve active-duty, Guard, and Reserve members and their families; some programs are also open to retirees and Veterans. Availability varies by location and program.",
        links: [{ label: "USO programs", url: "https://www.uso.org/programs" }],
      },
      {
        name: "American Red Cross — Hero Care Network / Emergency Communication (Nonprofit)",
        summary:
          "The American Red Cross (a nonprofit, not a government agency) provides the military's 24/7 emergency communication service: when a family emergency happens — a death, serious illness, or the birth of a child — families contact the Red Cross Hero Care Network, which verifies the emergency and delivers the message to the service member's command so leadership can decide on emergency leave. The Red Cross also serves as the after-hours channel for the military aid societies (for example, NMCRS emergency travel help when offices are closed).",
        eligibility:
          "Available to active-duty members, Guard/Reserve members, and their families, as well as retirees and Veterans for message delivery as described on the Red Cross site. The Red Cross verifies and transmits messages — it does not grant leave; that decision belongs to the command.",
        links: [
          { label: "Hero Care Network", url: "https://www.redcross.org/get-help/military-families/hero-care-network/emergency-communication.html" },
        ],
      },
    ],
  },
];

export const BRANCH_BENEFITS: BranchBenefits[] = [
  {
    branch: "Marine Corps",
    items: [
      {
        name: "Marine Corps Tuition Assistance (TA)",
        summary:
          "Marine Corps TA pays tuition for off-duty/voluntary education at accredited civilian schools, on campus or by distance learning, to help Marines work toward a degree while serving. MCCS education centers run the program locally: first-time users must complete a TA orientation/brief and meet the first-use criteria on the MCCS page before funding is approved. Marines submit applications through WebTA — the Web Tuition Assistance system on the shared MyNavy Education portal (the same NETC portal Sailors use) — and a degree plan and cost verification are required before approval.",
        eligibility:
          "Active-duty Marines (per MCCS pages). TA funds tuition only — not fees or books — and won't fund a degree level you already hold (no second, lateral degree at the same level).",
        links: [
          {
            label: "MCCS TA page (rules & first-use steps)",
            url: "https://cherrypoint.usmc-mccs.org/marine-family-support/education/tuition-assistance?trumbaEmbed=view%3Devent%26eventid%3D170702618",
          },
          { label: "Apply (WebTA / MyNavy Education)", url: "https://myeducation.netc.navy.mil/" },
        ],
      },
      {
        name: "Marine Corps COOL (Credentialing)",
        summary:
          "Marine Corps COOL (Credentialing Opportunities On-Line) maps a Marine's MOS to related civilian certifications and licenses, explains the gaps between military training and credential requirements, and connects Marines to funding for credential exam and maintenance fees under Marine Corps policy. It is the starting point for turning military training into a civilian-recognized credential while still serving.",
        eligibility:
          "Active-duty Marines (funding rules, covered fees, and caps are set by current Marine Corps policy/MARADMINs — check the site for the current version before applying).",
        links: [{ label: "Marine Corps COOL", url: "https://www.cool.osd.mil/usmc/" }],
      },
      {
        name: "Navy-Marine Corps Relief Society (NMCRS) — serves USMC + Navy",
        summary:
          "NMCRS is the Navy Department's official relief charity — a private nonprofit sponsored by the Department of the Navy (not a government agency) — and it serves both Sailors and Marines. It provides needs-based help in the form of interest-free loans, grants, or a combination: basic living expenses, emergency travel, funeral expenses, essential car repairs, medical/dental bills, and disaster relief — often the same day. It also runs education assistance (interest-free loans and scholarships for eligible spouses and children), Budget for Baby® workshops, visiting nurse services, and thrift shops. When NMCRS offices are closed, the American Red Cross acts as its after-hours liaison for emergency travel assistance using NMCRS funds.",
        eligibility:
          "Active-duty and retired Sailors and Marines, eligible family members with a military ID card, surviving spouses, and reservists on extended active duty of 30 days or more (financial assistance). Education assistance follows its own eligibility on the NMCRS site.",
        links: [{ label: "NMCRS — get help", url: "https://www.nmcrs.org/get-help" }],
      },
      {
        name: "MCCS — Marine Corps Community Services (Marine & Family Programs)",
        summary:
          "MCCS is the Marine Corps' quality-of-life organization: it runs the Marine exchanges, recreation and fitness, and the Marine & Family support programs Marines use day to day — Voluntary Education centers, libraries, Personal Financial Management counseling, Community Counseling, Family Advocacy, EFMP (Exceptional Family Member Program), child and youth programs, the Single Marine Program, and Marine Corps Family Team Building. Its Transition Readiness Program (TRP) is the Marine Corps' transition program, providing career/employment assistance and transition preparation for separating Marines and their families (including the Marine For Life Network). Note: the Marine Corps Scholarship Foundation (mcsf.org) — a separate private nonprofit, not a Marine Corps program — is the well-known scholarship source for children of Marines and Navy Corpsmen, and MCCS education pages point families to it.",
        eligibility:
          "Programs primarily serve active-duty Marines, Sailors attached to Marine units, and their families; many services extend to retirees and DoD civilians as described on local MCCS pages.",
        links: [
          { label: "Marine & Family Support (program overview)", url: "https://err.usmc-mccs.org/marine-family-support" },
          { label: "HQMC Marine and Family Programs Division", url: "https://www.manpower.marines.mil/Divisions/Marine-and-Family-Programs/" },
        ],
      },
    ],
  },
  {
    branch: "Army",
    items: [
      {
        name: "Army Tuition Assistance — ArmyIgnitED",
        summary:
          "Army TA funds voluntary off-duty college education for Soldiers — classroom and distance-learning courses at accredited schools that are part of an approved degree or certificate plan. All TA (and Credentialing Assistance) requests run through ArmyIgnitED, the Army's online education portal: you create an account (CAC login), set an education goal, complete the required training, and submit each course request inside the window the Army sets (requests must be submitted before the class starts — Army pages state no earlier than 60 days and no later than 7 days prior).",
        eligibility:
          "Active-duty, Army Reserve, and Army National Guard Soldiers, per Army policy (AR 621-5 and current ACES guidance); an evaluated degree plan is required after the first few funded hours, and supervisor/command approval requirements apply under current guidance.",
        links: [{ label: "ArmyIgnitED portal", url: "https://www.armyignited.army.mil/" }],
      },
      {
        name: "Army COOL + Credentialing Assistance (CA)",
        summary:
          "Army COOL shows Soldiers (enlisted and warrant officers) which civilian certifications and licenses relate to their MOS and what they need to earn them. Funding comes through Credentialing Assistance (CA), requested in ArmyIgnitED alongside TA: CA pays for training, exams, and fees for approved credentials. Army COOL is the information side; ArmyIgnitED is where the money is requested.",
        eligibility:
          "Soldiers in eligible categories per current Army CA policy — covered personnel categories, per-fiscal-year caps, and credential limits change by policy year, so confirm inside ArmyIgnitED/Army COOL before counting on funding.",
        links: [{ label: "Army COOL", url: "https://www.cool.osd.mil/army/" }],
      },
      {
        name: "Army Emergency Relief (AER)",
        summary:
          "AER is the Army's official relief charity — a private nonprofit established in 1942 — that helps Soldiers and their families in emergency financial situations through zero-interest loans, grants, or a combination. Assistance categories include emergency travel, rent/mortgage and initial deposits, utilities and food, essential vehicle repair, funeral expenses, medical co-pays TRICARE doesn't cover, and disaster preparation/evacuation. AER also runs scholarship programs for Army spouses and dependent children, and eligible Soldiers, retirees, and survivors can apply online 24/7 and get an immediate eligibility decision.",
        eligibility:
          "Per AR 930-4, as AER lists them: Soldiers on active duty and their eligible dependents; retired Soldiers (longevity, medical, or age-60 reserve retirement) and their dependents; Reserve/Guard Soldiers activated on Title 10 orders for more than 30 days and their dependents; and surviving spouses who have not remarried (plus dependent children of deceased Soldiers).",
        links: [
          { label: "Assistance programs", url: "http://aerhq.org/assistance/" },
          { label: "Apply online", url: "https://www.armyemergencyrelief.org/" },
        ],
      },
      {
        name: "Army MWR + Army Community Service (ACS)",
        summary:
          "Army Family and MWR runs recreation, sports, travel, lodging, libraries, and Child & Youth Services at garrisons worldwide, while Army Community Service (ACS) is the social-services arm: financial readiness counseling, employment readiness for spouses, relocation readiness, Family Advocacy, EFMP support, Army Family Team Building, and Survivor Outreach Services. Soldiers and families find their local programs through the Army MWR site's installation pages. The Army's transition services (the Transition Assistance Program, delivered at installations, largely through ACS/Transition Centers) plug into the same garrison support network.",
        eligibility:
          "Soldiers (active, Guard, Reserve), their families, retirees, and DoD civilians, with program-by-program differences noted on installation pages.",
        links: [{ label: "Army MWR", url: "https://www.armymwr.com/" }],
      },
    ],
  },
  {
    branch: "Navy",
    items: [
      {
        name: "Navy Tuition Assistance — Navy College Program / MyNavy Education",
        summary:
          "Navy TA is the Navy's education financial assistance program: it pays up-front tuition (and selected fees) for off-duty courses at accredited colleges, universities, and vocational/technical schools, in person or online. The Navy College Program website carries the rules, and applications are submitted in MyNavy Education (the NETC portal): inform your command, complete the required training, get counseling and set an education plan with a Navy College counselor, then submit the TA application ahead of the class start (Navy pages say at least 14 days before; earlier is recommended). The Navy College Virtual Education Center provides the counseling by phone/virtual services.",
        eligibility:
          "Active-duty Sailors (and Selected Reserve Sailors on qualifying active-duty orders) in good standing — Navy pages note that recent failures (e.g., a failed physical readiness test, advancement exam, or recent non-judicial punishment) can affect eligibility and require command approval; a minimum service requirement applies before first use (see the Navy College site for the current rule).",
        links: [
          { label: "Navy College Program", url: "https://www.navycollege.navy.mil" },
          { label: "Apply (MyNavy Education)", url: "https://myeducation.netc.navy.mil/" },
        ],
      },
      {
        name: "Navy COOL",
        summary:
          "Navy COOL maps Navy ratings, jobs, and collateral duties to civilian credentials, shows Sailors the gap analysis between their Navy training and a credential's requirements, and explains how the Navy pays for credentialing exams, renewals, and maintenance fees under the Navy's credentialing program. Funding is program-managed (allocated by fiscal year, first-come, first-served) rather than a personal account — check the site for the current process.",
        eligibility:
          "Active-duty Sailors (and eligible Reservists per current policy) pursuing credentials aligned with their rating or career path; covered expenses are exam/recertification/maintenance fees — Navy COOL notes it does not pay for training or study materials.",
        links: [{ label: "Navy COOL", url: "https://www.cool.osd.mil/usn/" }],
      },
      {
        name: "Navy-Marine Corps Relief Society (NMCRS) — serves Navy + USMC",
        summary:
          "The same society listed for the Marine Corps: NMCRS is the Department of the Navy's official relief charity serving Sailors and Marines with interest-free loans and grants for emergencies, education assistance for spouses and children, budget counseling, Budget for Baby®, visiting nurses, and thrift shops, with the Red Cross as its after-hours liaison.",
        eligibility:
          "Active-duty and retired Sailors and Marines, eligible family members with a military ID card, surviving spouses, and reservists on extended active duty of 30 days or more.",
        links: [{ label: "NMCRS — get help", url: "https://www.nmcrs.org/get-help" }],
      },
      {
        name: "Navy MWR + Fleet and Family Support Centers (FFSC)",
        summary:
          "Commander, Navy Installations Command's Fleet and Family Readiness organization runs Navy quality-of-life programs: Navy MWR (fitness, recreation, lodging, food and beverage, tickets and travel, Single Sailor/Liberty programs) and the Fleet and Family Support Program, delivered through Fleet and Family Support Centers at Navy installations — relocation assistance, deployment support, financial management counseling, spouse employment services, family advocacy, new parent support, clinical counseling, and transition assistance. Most FFSC services are free.",
        eligibility:
          "Sailors and their families, with many services also open to retirees, other-service members, and DoD civilians as described by CNIC.",
        links: [
          { label: "Fleet and Family Readiness (CNIC)", url: "https://ffr.cnic.navy.mil/" },
          { label: "Fleet & Family Support (Navy MWR)", url: "https://www.navymwr.org/programs/fleet-family-support" },
        ],
      },
    ],
  },
  {
    branch: "Coast Guard",
    items: [
      {
        name: "Coast Guard Tuition Assistance — ETQC / Your ESO",
        summary:
          "Coast Guard TA pays tuition for off-duty voluntary education for Coast Guard members. The program is administered by the Education and Training Quota Management Command (ETQC) under ForceCom, and it runs through people, not just a portal: education counseling with your Education Services Officer (ESO) is required, TA applications are submitted through the MyCG Ed system, must be command-approved, and must reach ETQC inside the window set by the current ALCOAST policy (the FY27 policy message states applications must be received between 7 and 90 days before class start). TA policy — including caps and who is eligible — is re-announced by ALCOAST every fiscal year.",
        eligibility:
          "Per the FY27 ALCOAST policy framework: active-duty and Selected Reserve military members (and certain full-time civilian employees under CG policy; senior executives excluded). Courses must lead to an eligible certificate or degree (up to a first master's degree) at a school with a signed DoD MOU.",
        links: [
          {
            label: "ETQC Tuition Assistance page",
            url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/ETQC/VOLUNTARY-EDUCATION/Tuition-Assistance/",
          },
        ],
        flag: "The FY27 cap as announced in ALCOAST 359/26 is $4,500 per member per fiscal year with a $250 per-semester-hour cap, contingent on funding levels — verify the current ALCOAST before enrolling.",
      },
      {
        name: "Coast Guard Credentialing (COOL)",
        summary:
          "Coast Guard COOL is the service's site within the DoD COOL system: it matches Coast Guard ratings and qualifications to civilian licenses and certifications and explains the Coast Guard's voluntary credentialing funding. Like the other services' COOL sites, it shows the credential requirements and the gap between your Coast Guard training and the civilian credential.",
        eligibility:
          "Coast Guard members pursuing credentials related to their rating or career field, under the Coast Guard Voluntary Credentialing Program's current rules and funding.",
        links: [{ label: "Coast Guard COOL", url: "https://www.cool.osd.mil/uscg/" }],
      },
      {
        name: "Coast Guard Mutual Assistance (CGMA)",
        summary:
          "CGMA is the Coast Guard's official relief society — an independent nonprofit charitable organization run by Coast Guard people for Coast Guard people since 1924. It provides interest-free loans, grants, and financial counseling across dozens of programs: disaster assistance, emergency travel, housing and PCS help (including closing-cost and rental-assistance loans and PCS child-care reimbursement), essential vehicle repair, unanticipated medical bills, pay-problem help, adoption assistance, baby supplies, and education programs (grants and loans for members, spouses, and dependents). Apply through your local CGMA representative.",
        eligibility:
          "The Coast Guard community broadly — active-duty and Reserve members, civilian employees, Auxiliarists, retirees, and their families/survivors, with program-by-program rules on the CGMA site.",
        links: [{ label: "CGMA (mycgma.org)", url: "https://mycgma.org/" }],
        flag: "CGMA's web presence now runs primarily at mycgma.org; official Coast Guard pages still reference the older cgmahq.org address.",
      },
      {
        name: "Coast Guard MWR + Work-Life",
        summary:
          "The Coast Guard's Morale, Well-Being, and Recreation (MWR) program — managed through the Community Services Command, which also runs the Coast Guard Exchange (CGX) — delivers recreation, lodging, sports, and ticket/travel services at units and bases. The Work-Life Program (under the Health, Safety and Work-Life directorate) is the Coast Guard's family-support system: family support and advocacy, child care, employee assistance, health promotion, ombudsman support, transition and retirement help, and special-needs support, delivered through regional Work-Life staffs. Note: EAP services for Coast Guard military members and dependents are now provided through Military OneSource, per the Office of Work-Life.",
        eligibility:
          "Active-duty, Reserve, and civilian Coast Guard employees and their family members; specific services vary by category and location.",
        links: [
          { label: "CG MWR", url: "https://www.uscg.mil/mwr" },
          { label: "Office of Work-Life Programs", url: "https://www.uscg.mil/worklife/" },
        ],
      },
    ],
  },
  {
    branch: "Air Force",
    items: [
      {
        name: "Air Force Tuition Assistance (MilTA) — AFVEC",
        summary:
          "Air Force Military Tuition Assistance pays tuition for off-duty college courses for Airmen pursuing an education goal, up to the master's level. Everything runs through the Air Force Virtual Education Center (AFVEC): create your account, complete the required Virtual Benefits Training and initial briefing, set an education goal with a degree plan, and request funding for each course — AFVEC guidance states requests are submitted no earlier than 45 days and no later than 7 days before the course start date, with supervisor approval in the system. The Air Force Personnel Center (AFPC) page is the official program overview.",
        eligibility:
          "Active-duty Airmen (and Guard/Reserve members on qualifying active-duty orders) with an approved education goal at an accredited school that has signed the DoD MOU; TA covers tuition only, not books or most fees, and not courses toward a degree level already held.",
        links: [
          { label: "AFVEC portal", url: "https://afvec.us.af.mil" },
          { label: "AFPC MilTA overview", url: "https://www.afpc.af.mil/Career-Management/Military-Tuition-Assistance-Program/" },
        ],
      },
      {
        name: "Air Force COOL",
        summary:
          "Air Force COOL (inside AFVEC) helps Airmen find and fund civilian credentials tied to their AFSC, leadership roles, or special interests: you search credentials, create an education goal, and request funding for exam and related costs through AFVEC. AF COOL is also the credentialing route for Space Force Guardians.",
        eligibility:
          "Active-duty Airmen (and Guardians) per current DAF policy; AF COOL applies a lifetime funding cap and one-credential-at-a-time rules by category — the AFVEC AF COOL pages state the current figures and rules.",
        links: [{ label: "AF COOL (in AFVEC)", url: "https://afvec.us.af.mil/afvec/afcool/welcome" }],
      },
      {
        name: "Air & Space Forces Aid Society (AFAS)",
        summary:
          "AFAS is the official charity of the U.S. Air Force and U.S. Space Force — a private nonprofit (renamed from \"Air Force Aid Society\" to the Air & Space Forces Aid Society in December 2025, keeping the AFAS acronym). It provides interest-free loans and grants for emergency needs (basic living expenses, emergency travel, vehicle repairs, funeral expenses, disaster relief) through Standard Assistance and the streamlined Falcon Assistance, plus education support (including the General Henry H. Arnold Education Grant for eligible dependent children and spouses) and community programs. Emergency travel applications for eligible Airmen and Guardians are processed in coordination with the American Red Cross; other requests are filed through the AFAS portal.",
        eligibility:
          "Active-duty Air Force and Space Force members and their eligible family members; Guard and Reserve Air/Space Force members regardless of duty status and their eligible family members; retirees and widows/widowers under the categories AFAS lists.",
        links: [
          { label: "Standard Assistance", url: "https://afas.org/how-we-help/standard-assistance/" },
          { label: "AFAS — Request Assistance", url: "https://afas.org" },
        ],
      },
      {
        name: "Military & Family Readiness Centers (M&FRC) — Air Force",
        summary:
          "Every Air Force installation's Military & Family Readiness Center is the front door for family support: relocation assistance, personal financial readiness, employment readiness for members and spouses, deployment and transition support (including TAP briefings), EFMP family support, and volunteer resources. The official MyAirForceBenefits site — the Department of the Air Force's benefits portal — carries fact sheets for these programs and a resource locator for finding your nearest M&FRC. Air Force MWR/recreation programs are run by installation Force Support Squadrons, reachable through the same installation channels.",
        eligibility:
          "Airmen and Guardians, their spouses and family members, retirees, and DoD civilians, per each program's fact sheet.",
        links: [
          {
            label: "Employment Readiness fact sheet (an M&FRC program)",
            url: "https://myairforcebenefits.us.af.mil/Benefit-Library/Federal-Benefits/Employment-Readiness-Program-(ERP)?serv=26",
          },
        ],
      },
    ],
  },
  {
    branch: "Space Force",
    note: "Guardians do not have separate systems — Space Force TA, credentialing, relief, and family readiness all run through Department of the Air Force programs (AFVEC, AF COOL, AFAS, M&FRC).",
    items: [
      {
        name: "Space Force Tuition Assistance — via AFVEC (Department of the Air Force)",
        summary:
          "Guardians do not have a separate TA portal: Space Force TA is part of the Department of the Air Force MilTA program, and Guardians use the Air Force Virtual Education Center (AFVEC) — the same portal, education-goal process, and Air Force Education Counselor support as Airmen. AFPC's MilTA page expressly covers Airmen and Guardians.",
        eligibility:
          "Active-duty Guardians (and Reserve/Guard Guardians on qualifying orders) under the same DAF MilTA rules as Airmen — accredited school with a DoD MOU, approved education goal, funding requested inside AFVEC's window before class start with supervisor approval.",
        links: [
          { label: "AFVEC portal", url: "https://afvec.us.af.mil" },
          { label: "AFPC MilTA overview", url: "https://www.afpc.af.mil/Career-Management/Military-Tuition-Assistance-Program/" },
        ],
      },
      {
        name: "Space Force Credentialing — via Air Force COOL",
        summary:
          "Guardians use Air Force COOL, inside AFVEC, for civilian credential funding: the AF COOL program provides Guardians funding for credentials on the Air Force COOL website, covering credentials tied to their career field, leadership, and special interests. There is no separate Space Force COOL site.",
        eligibility:
          "Active-duty Guardians under the same AF COOL rules as Airmen (lifetime cap and category rules as stated in AFVEC).",
        links: [{ label: "AF COOL (in AFVEC)", url: "https://afvec.us.af.mil/afvec/afcool/welcome" }],
      },
      {
        name: "Relief for Guardians — Air & Space Forces Aid Society (AFAS)",
        summary:
          "Guardians are served by AFAS, the official charity of both the Air Force and the Space Force (renamed the Air & Space Forces Aid Society in December 2025 to reflect exactly that): interest-free loans and grants for emergencies via Standard and Falcon Assistance, education grants for dependents, and community programs. See the Air Force entry for details.",
        eligibility:
          "Active-duty Space Force members and their eligible family members; Space Force Guard/Reserve members regardless of duty status and their families; retirees and survivors in AFAS's listed categories.",
        links: [{ label: "Standard Assistance", url: "https://afas.org/how-we-help/standard-assistance/" }],
      },
      {
        name: "Space Force Family Readiness — M&FRC (Department of the Air Force)",
        summary:
          "Guardians and their families use the Department of the Air Force's family-support system: installation Military & Family Readiness Centers (M&FRCs) for relocation, financial readiness, employment readiness, deployment/transition support, and EFMP family support, with program fact sheets and an M&FRC locator on the official MyAirForceBenefits portal (which covers Airmen and Guardians). Force Support Squadrons at Space Force installations provide MWR services for Guardians.",
        eligibility:
          "Guardians, their spouses and family members, and other categories listed on each program's fact sheet.",
        links: [
          {
            label: "Employment Readiness fact sheet (MyAirForceBenefits)",
            url: "https://myairforcebenefits.us.af.mil/Benefit-Library/Federal-Benefits/Employment-Readiness-Program-(ERP)?serv=26",
          },
        ],
      },
    ],
  },
];

export const STATE_BENEFIT: BenefitItem = {
  name: "State Veterans Benefits — They Vary by State",
  summary:
    "On top of everything above, every state runs its own veterans benefits through its state department/office of veterans affairs — and they differ a lot from state to state: common examples include state tuition waivers or scholarships at public colleges, property-tax exemptions for disabled Veterans, state veterans homes, state burial benefits and cemeteries, hunting/fishing and state-park passes, and state-run emergency funds. There is no single federal list of what your state offers. The official route is your state's veterans affairs office: VA maintains a directory of state offices through its DiscoverVA external-resources page (VA's older statedva.htm address is still referenced in VA materials and redirects into VA's current directory resources).",
  eligibility:
    "Set entirely by each state's laws — residency, discharge status, disability rating, and service era requirements all vary. Check your own state's office before assuming a benefit exists.",
  links: [{ label: "VA directory of state veterans affairs offices (DiscoverVA)", url: "https://discover.va.gov/external-resources/" }],
};
