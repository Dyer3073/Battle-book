// Know Your Rights & Protections — transcribed from the researched
// pack (~/workspace/military-app/rights/rights.md, researched Nov 9,
// 2026). Official sources only, and only the official administrators
// of each law: DOJ (SCRA), DOL VETS / elaws / EBSA and ESGR (USERRA),
// CFPB and DoD's rule at 32 CFR Part 232 (MLA), IRS / Military
// OneSource. Every fact is printed only as the cited official source
// states it; where an official page did not confirm a figure, the
// figure is NOT printed — it is flagged instead. No sample letters:
// the steps describe what a notice must contain; drafting the letter
// is legal assistance's job.

import type { RefGroup } from "./refdata";

export const RIGHTS_STANDING_LINE =
  "This section is general information about federal law, not legal advice, and Battle Book is not your lawyer. For your specific situation, use free military legal assistance (find your office at legalassistance.law.af.mil) or the federal agency that runs the law — each entry names it.";

export const RIGHTS_INTRO =
  "The one-sentence version of the whole section: SCRA protects the debts and contracts you had before active duty; the MLA protects you on new credit you take while covered; USERRA protects your civilian job when Guard/Reserve service pulls you away from it. Most of these protections are not automatic — you invoke them, usually in writing with a copy of your orders. There are no sample letters here on purpose: the steps in each entry describe exactly what the agency requires a notice to contain, and drafting the actual letter is legal assistance's job.";

const DOJ = { label: "DOJ — Financial and Housing Rights (SCRA)", url: "https://www.justice.gov/servicemembers/financial-and-housing-rights-0" };
const ELAWS = { label: "DOL elaws — Employment Law Guide: USERRA", url: "https://webapps.dol.gov/elaws/elg/userra.htm" };
const FS2 = { label: "DOL VETS — USERRA Fact Sheet 2 (Reemployment FAQs)", url: "https://www.DOL.gov/sites/dolgov/files/VETS/files/USERRA-Fact-Sheet-2-FAQs.pdf" };
const CFPB_MLA = { label: "CFPB — Military Lending Act (MLA)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/military-lending-act-mla/" };

export const RIGHTS_GROUPS: RefGroup[] = [
  {
    title: "SCRA — Servicemembers Civil Relief Act",
    note: "Administered/enforced by: U.S. Department of Justice, Civil Rights Division — Servicemembers and Veterans Initiative. Statute: 50 U.S.C. §§ 3901–4043.",
    entries: [
      {
        name: "Who the SCRA covers, and when coverage starts",
        body: "Per DOJ, “military service” under the SCRA includes: (1) full-time active-duty members of the Army, Navy, Air Force, Marine Corps, Coast Guard, and Space Force; (2) reservists on federal active duty; and (3) National Guard members on federal orders for more than 30 days. Members absent for a lawful cause or because of sickness, wounds, or leave are covered. Commissioned officers of the Public Health Service and NOAA in active service are also covered. Certain protections also extend to dependents — DOJ defines “dependent” to include a spouse, children, and anyone for whom the servicemember provided more than half of their financial support for the past 180 days — and, in some instances, to people who co-signed a loan with a servicemember. For most members, protections begin the date they enter active duty; for reservists, protections begin on receipt of certain military orders — before the report date.",
        who: "Anyone entering active duty, and Guard/Reserve members from the moment qualifying orders arrive.",
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "The 6% interest-rate cap on pre-service debts — interest forgiven, not deferred",
        body: "DOJ: the SCRA limits interest on financial obligations incurred before military service to no more than 6 percent per year, including most fees. It applies to all types of pre-service debts — DOJ's examples: credit cards; automobile, ATV, boat, and other vehicle loans; mortgages; home equity loans; and student loans — including debts incurred jointly with a spouse. Debts taken on during service are not capped by the SCRA (new credit is the MLA's territory).",
        bullets: [
          "Step 1: Give the creditor written notice, plus (1) a copy of your military orders or (2) another appropriate indicator of military service, such as a letter from your commanding officer.",
          "Step 2 — timing: the notice and proof must be provided to the creditor within 180 days of the end of your military service — you can send it any time during service; DOJ's stated outer deadline is 180 days after service ends.",
          "Step 3 — what the creditor must then do: forgive — not defer — all interest above 6%, and forgive it retroactively. The creditor is also prohibited from accelerating payment of principal because you made the request.",
          "Duration: for mortgages, the cap runs for the entire period of military service and for one year after. For all other obligations, the cap runs for the duration of military service.",
        ],
        who: "Members covered under the SCRA, for obligations incurred before entering military service.",
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Terminating a residential lease",
        body: "A servicemember may terminate a residential lease early, without penalty, when: the lease was executed by a person who later enters military service; or the member, while in service, receives PCS orders or deployment orders for at least 90 days; DOJ also notes the SCRA allows termination on receipt of retirement or separation orders. The premises must be occupied (or intended to be occupied) by the servicemember or the servicemember's dependent(s). If a servicemember lessee dies during military service, the spouse may terminate the lease within one year of the death.",
        bullets: [
          "Submit written notice plus a copy of your military orders — or a letter from your commanding officer — to the landlord or landlord's agent. Notice may be sent electronically, as well as by mail or hand-delivery.",
          "Effective date: if rent is paid monthly, once proper notice and orders are given, the lease terminates 30 days after the next rent payment is due.",
          "Two DOJ positions worth knowing: requiring repayment of rent concessions or discounts is, in DOJ's position, an early termination fee that violates the SCRA; and because the SCRA sets no minimum mileage between the leased property and the new duty station, mileage requirements written into a lease are likely unenforceable.",
        ],
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Terminating a motor vehicle lease",
        body: "Per DOJ, the SCRA permits servicemembers to terminate motor vehicle leases early and without penalty after entering military service or receiving qualifying orders for a permanent change of station or deployment. The protection also applies to dependents who are joint lessees. On lawful termination, the member must be refunded all lease amounts paid in advance that cover a period after the termination's effective date — including “capitalized cost reduction” amounts paid at signing. Steps: written notice plus a copy of qualifying orders to the lessor, the same notice pattern as a residential lease; then return the vehicle as the lessor directs and confirm the advance-payment refund.",
        flag: "The exact qualifying-order durations for vehicle leases entered before vs. during service (the statute's 180-day deployment / CONUS-to-OCONUS PCS conditions) were not restated on the DOJ consumer page read during research — this entry states the rule at DOJ's level and routes duration questions to legal assistance rather than printing day-counts from secondary sources.",
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Terminating cell-phone and other service contracts",
        body: "A separate SCRA provision (50 U.S.C. § 3956) lets a servicemember terminate certain consumer service contracts — per official legal-assistance guidance, this includes commercial mobile (cell phone) service, telephone exchange service, internet access, multichannel video (cable/satellite TV), gym/fitness memberships, and home security services — when the member receives orders to relocate for not less than 90 days to a location that does not support the contract. The contract must have been entered into before the orders were received.",
        bullets: [
          "Give the provider written or electronic notice stating the date service is to be terminated, plus a copy of your orders.",
          "No early termination fee may be charged on a qualifying termination.",
        ],
        flag: "Details often quoted from the statute — refund of prepaid fees within 60 days, returning provider equipment, and keeping your phone number if you re-subscribe within 90 days after a relocation of three years or less — appear in the statute and FCC material but were confirmed during research only via secondary summaries of 50 U.S.C. § 3956, not on an administrator consumer page. This entry prints the notice steps confirmed on an official .mil legal-assistance brief and flags the rest.",
        links: [{ label: "Creech AFB Legal Office — SCRA Legal Brief (official legal-assistance pamphlet)", url: "https://www.creech.af.mil/Portals/111/Docs/Legal%20Pamphlets/SCRA%20(CREECH%202026)(final).pdf" }],
        source: "Creech AFB Legal Office (official legal assistance)",
      },
      {
        name: "Protection from default judgments",
        body: "In a civil court proceeding where a defendant servicemember has not appeared, DOJ states the court may not enter a default judgment until it appoints an attorney to represent the absent member's interests. Before any default judgment, the plaintiff must file an affidavit stating one of three things: (1) the defendant is in military service; (2) the defendant is not in military service; or (3) the creditor is unable to determine the defendant's status after a good-faith effort. The court must stay the proceeding for at least 90 days if the appointed attorney has been unable to contact the defendant, or if there may be a defense that requires the defendant to be present. A default judgment entered while the member was in service can be reopened under the SCRA's conditions — route that to legal assistance immediately.",
        bullets: [
          "If this happens to you: (1) Contact your installation legal assistance office as soon as you learn of any judgment or suit. (2) Do not ignore paperwork — bring the summons/judgment and your orders to legal assistance. (3) Legal assistance can invoke the affidavit, appointment, and stay protections and, where the SCRA allows, move to set the judgment aside.",
        ],
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Stays of civil proceedings",
        body: "Separate from default judgments: the SCRA lets a servicemember ask the court to pause (stay) a civil case — civil, not criminal — when military service materially affects the member's ability to appear and defend. DOJ describes this as “the ability to stay civil court proceedings” among the SCRA's core protections.",
        bullets: [
          "Apply to the court in writing for a stay, at or before the time set for your appearance.",
          "Include a statement explaining how your military duties materially affect your ability to appear and a date when you will be available.",
          "Include a letter from your commanding officer stating that military duty prevents your appearance and that military leave is not authorized for that purpose.",
          "An initial stay granted under this provision is at least 90 days; additional stays can be requested if service still prevents appearance. If the court denies a further stay, it must appoint counsel to represent you before proceeding.",
        ],
        flag: "The 90-day minimum and the application contents are stated here at the statute's published level (50 U.S.C. § 3932); DOJ's consumer page confirms the stay right and the 90-day floor in the default-judgment context but does not print a step-by-step for § 3932. Confirm the wording with legal assistance before filing — that instruction is part of this entry, not fine print.",
        links: [DOJ],
        source: "U.S. Department of Justice / 50 U.S.C. § 3932",
      },
      {
        name: "Eviction protection — a court order is required (rent ceiling not printed)",
        body: "Per DOJ: a landlord may not evict a servicemember or the member's dependents from a residential home during a period of military service without first obtaining a court order — this applies even in states that otherwise allow evictions without court orders. If a landlord seeks that order by default judgment, the SCRA affidavit rules apply, the court must appoint a representative for the member's interests, and the court may postpone the judgment by 90 days if the servicemember cannot be reached or the member's appearance is necessary to present a defense.",
        bullets: [
          "If you receive eviction paperwork: (1) Do not move out on the basis of a notice alone — a court order is required. (2) Take the paperwork and your orders to legal assistance immediately. (3) If a case is filed, the landlord must disclose your military status to the court by affidavit; legal assistance can enforce the appointment and postponement protections.",
        ],
        flag: "The SCRA's eviction protection is written in the statute to apply to premises below a monthly rent ceiling that is adjusted annually (published in the Federal Register). The current-year dollar figure was not confirmed on a DOJ or CFPB page during research, so no dollar threshold is printed here — a rent ceiling exists, it changes yearly, and the current figure is confirmed with legal assistance or the Federal Register notice.",
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Foreclosure, repossession, and installment-contract protection",
        body: "Three related DOJ-stated protections:",
        bullets: [
          "Foreclosure. During military service and for one year after, a creditor must get a court order before non-judicially foreclosing on a mortgage the servicemember took out before entering military service. Knowingly violating this provision can be punished by fine and/or imprisonment of up to one year. Courts may also stay a foreclosure proceeding or adjust payments where service materially affects the member's ability to pay.",
          "Vehicle repossession. A creditor may not repossess a vehicle during the borrower's military service without a court order, as long as the member placed a deposit or made at least one installment payment on the contract before entering military service.",
          "Installment contracts. A seller/lender generally may not rescind or terminate an installment contract, or repossess the property, for breach without a court order where the deposit/payment-before-service condition is met — the court-order theme runs through all three.",
          "Any foreclosure, repossession, or contract-termination notice received during service (or within a year after, for mortgages) goes straight to legal assistance with your orders — these are the SCRA violations DOJ sues over most often.",
        ],
        links: [DOJ],
        source: "U.S. Department of Justice — Servicemembers and Veterans Initiative",
      },
      {
        name: "Verifying status on the official SCRA website — and waivers/enforcement warnings",
        body: "The Defense Manpower Data Center runs the official SCRA Website (scra.dmdc.osd.mil). Creditors, landlords, and courts use it to verify whether a person is on active duty — this is how a creditor confirms status instead of taking your word for it — and servicemembers can pull their own status report there as proof of coverage. If any business questions whether you're covered, this site is the answer both sides use. Waiver warning (DOJ): you can waive SCRA rights, but per DOJ a valid waiver must be: (1) an instrument separate from the contract, (2) executed during or after the relevant period of military service, and (3) in at least 12-point font. DOJ's position is that waivers are invalid if they are addenda to a lease rather than separate instruments, are signed at the same time as the lease, and are not supported by any additional benefit to the servicemember. Practical rule: never sign an SCRA waiver at a leasing office or dealership — take it to legal assistance first. If a business violates the SCRA: (1) installation legal assistance (free); (2) file a complaint with the CFPB; (3) DOJ enforces — the Attorney General may sue anyone engaged in a pattern or practice of SCRA violations or where the facts raise an issue of significant public importance, and may seek monetary damages for individual servicemembers plus civil penalties.",
        links: [
          { label: "SCRA Website (DMDC)", url: "https://scra.dmdc.osd.mil" },
          DOJ,
        ],
        source: "DMDC / U.S. Department of Justice",
      },
    ],
  },
  {
    title: "USERRA — your civilian job is protected",
    note: "Administered by: U.S. Department of Labor, Veterans' Employment and Training Service (DOL VETS). Informal mediation: ESGR (Employer Support of the Guard and Reserve, a DoD program). Statute: 38 U.S.C. §§ 4301–4335; DOL regulations at 20 CFR Part 1002.",
    entries: [
      {
        name: "USERRA — the five conditions for reemployment",
        body: "Per DOL, your pre-service employer must reemploy you after uniformed service if you meet five criteria:",
        bullets: [
          "1. You were absent from a civilian job on account of service in the uniformed services;",
          "2. You gave the employer advance notice of the service, unless notice was precluded by military necessity or was otherwise impossible or unreasonable;",
          "3. Your cumulative period of military service with that employer has not exceeded five years (exceptions in the five-year entry);",
          "4. You were not released from service under dishonorable or other punitive/disqualifying conditions; and",
          "5. You reported back or applied for reemployment in a timely manner (deadlines in the next entry), unless doing so was impossible or unreasonable.",
          "DOL is explicit that reemployment protection does not depend on the timing, frequency, duration, or nature of the service, as long as the five criteria are met. USERRA covers virtually all employers — federal, state, local, and private, regardless of size.",
        ],
        links: [ELAWS, FS2],
        source: "U.S. Department of Labor — VETS / elaws",
      },
      {
        name: "USERRA — paid leave for service is your choice: your employer cannot make you burn vacation or annual leave",
        body: "The rule, at the regulation's wording level (20 CFR §1002.153, DOL's USERRA regulation; statutory basis 38 U.S.C. §4316(d)). (a) “If employment is interrupted by a period of service in the uniformed services, the employee must be permitted upon request to use any accrued vacation, annual, or similar leave with pay during the period of service, in order to continue his or her civilian pay. However, the employee is not entitled to use sick leave that accrued with the civilian employer during a period of service in the uniformed services, unless the employer allows employees to use sick leave for any reason, or allows other similarly situated employees on comparable furlough or leave of absence to use accrued paid sick leave.” (b) “The employer may not require the employee to use accrued vacation, annual, or similar leave during a period of service in the uniformed services.” Drill weekends, annual training, and activations all sit inside this rule; an employer policy that charges a member's vacation bank for military absences as a condition of the leave is exactly what the regulation forbids. Two boundaries, so the rule isn't overread: the right is to use accrued leave, at the member's request — USERRA does not itself require the employer to pay for military leave the member doesn't cover with accrued leave; and sick leave is treated separately (paragraph (a)'s second sentence), not swept into the member's election by this rule. Whether a particular employer bank (a combined PTO bank, a state-law military leave bank) is “similar leave” is a VETS/ESGR determination for your case. If your employer requires it anyway, use the escalation ladder in this tile — ESGR Ombudsman first (1-800-336-4590), then DOL VETS, then DOJ/OSC. Guard & Reserve carries a cross-link card to this entry.",
        links: [
          { label: "20 CFR §1002.153 — Rights and Benefits: Paid Leave (DOL VETS regulation, via govinfo)", url: "https://www.govinfo.gov/content/pkg/CFR-2025-title20-vol4/pdf/CFR-2025-title20-vol4-sec1002-151.pdf" },
          ELAWS,
        ],
        source: "U.S. Department of Labor, Veterans' Employment and Training Service — 20 CFR §1002.153",
      },
      {
        name: "USERRA — notice before you leave, and the deadlines to come back",
        body: "Notice (before service): DOL — you must provide advance written or verbal notice to your employer for all military duty, unless giving notice is impossible, unreasonable, or precluded by military necessity. Written notice with a copy of your orders is not legally required to be in writing — but it is the version that can be proved later, and it is what this app recommends every time. Do not resign: tell the employer you are leaving for military service and will seek reemployment.",
        bullets: [
          "Return deadlines, as DOL states them — service of less than 31 days: report at the beginning of the next regularly scheduled work period on the first full day after release, allowing for safe travel home plus an eight-hour rest period.",
          "Service of 31–180 days (more than 30, less than 181): submit an application for reemployment within 14 days of release from service.",
          "Service of more than 180 days: submit an application for reemployment within 90 days of release.",
          "Members hospitalized/convalescing from service-connected injury or illness get extended time under DOL's rules — route individual cases to VETS or legal assistance.",
        ],
        links: [FS2],
        source: "DOL VETS — USERRA Fact Sheet 2",
      },
      {
        name: "USERRA — the five-year limit, and its major exceptions",
        body: "DOL: the cumulative length of absence from one employer for military duty while keeping reemployment rights is five years (38 U.S.C. § 4312(b)). But DOL lists important exceptions in § 4312(c), including: an initial enlistment lasting more than five years; periodic National Guard and Reserve training duty (drills and annual training do not burn the clock); and involuntary active-duty extensions and recalls under certain circumstances, including because of war or national emergency. Practical meaning for Guard/Reserve members: ordinary drill weekends, annual training, and involuntary mobilizations generally do not count against your five years with an employer. Voluntary long tours are where the limit bites — before volunteering for a multi-year tour, run your cumulative total with VETS or ESGR.",
        links: [FS2],
        source: "DOL VETS — USERRA Fact Sheet 2",
      },
      {
        name: "USERRA — the job you come back to: the escalator, seniority, and pension",
        body: "Per DOL's Employment Law Guide, a returning servicemember is reemployed in the job they would have attained had they not been absent for military service — the “escalator” position — with the seniority and seniority-based benefits they would have accumulated, provided they meet the five conditions and the employer can reasonably accommodate the placement. Time in service counts as continuous employment with the employer for seniority and pension purposes: on reemployment you are treated as though you never left, and the employer must fund pension contributions for the service period under USERRA's pension rules (the member may be required to make up employee contributions within a set period — ask VETS/HR for your plan's makeup window). Steps: on your reemployment application, state in writing that you are applying under USERRA and ask HR to confirm, in writing: your escalator position, your adjusted seniority date, and your pension makeup-contribution options.",
        flag: "The pension makeup-contribution window (DOL guidance commonly states up to three times the service period, capped at five years) was not re-verified verbatim on a DOL page in the pack's research pass — this entry prints the continuous-employment rule and routes the makeup window to VETS/HR rather than printing the multiplier.",
        links: [ELAWS],
        source: "DOL elaws — Employment Law Guide: USERRA",
      },
      {
        name: "USERRA — keeping your civilian health coverage during service",
        body: "Per DOL's Employee Benefits Security Administration (EBSA) reservist FAQs: both COBRA and USERRA let you continue employer group health coverage for yourself and your dependents while you are away, and USERRA — which applies to all employers, regardless of size — provides up to 24 months of continuation coverage (COBRA provides 18 months and generally applies to employers with 20 or more employees). Cost rules as DOL states them: service of 30 or fewer days — you and your family continue coverage at the same cost as before your service; longer service — you may be required to pay as much as 102 percent of the full premium. Two more DOL points: if you are on active duty for more than 30 days, you and your dependents should be covered by military health care (TRICARE); and COBRA continuation cannot be terminated just because you or your family receive military/TRICARE coverage. When you return and are reemployed, you and your family reenter the employer's health plan — USERRA reentry is not supposed to come with a new waiting period for conditions other than service-connected ones (confirm specifics with EBSA/VETS). Steps: before you leave, elect continuation in writing with HR/benefits, ask for the premium amount and payment schedule in writing, and calendar the 24-month end. On return, notify HR of reemployment and health-plan reentry in the same written application.",
        links: [{ label: "DOL EBSA — Reservists Called to Active Duty FAQs", url: "https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/faqs/reservists-active-duty-benefits-faq.pdf" }],
        source: "DOL Employee Benefits Security Administration",
      },
      {
        name: "USERRA — protection from discrimination, retaliation, and quick firing after return",
        body: "DOL: USERRA prohibits employment discrimination against any person on the basis of past military service, current military obligations, or intent to serve — in hiring, retention, promotion, and benefits. An employer may not retaliate against you for exercising USERRA rights or for helping with someone else's USERRA claim. USERRA also limits discharge after reemployment: a member reemployed after longer service may not be discharged except for cause during a protected period that scales with the length of the absence (DOL publishes one year of protection after service of more than 180 days, and 180 days after service of 31–180 days). Steps if it happens: document everything (dates, who said what, the drill/orders paperwork you provided), then use the escalation path in the next entry — discrimination and retaliation claims follow the same route.",
        flag: "The for-cause protection periods above are stated as DOL publishes them in its USERRA fact-sheet series; they were not re-read verbatim on a DOL page during the pack's research pass — re-verify against the current DOL VETS fact sheet.",
        links: [ELAWS],
        source: "DOL elaws — Employment Law Guide: USERRA",
      },
      {
        name: "USERRA — when an employer won't comply: the escalation ladder",
        body: "As the agencies themselves describe it (DOL VETS “File a Claim” + ESGR):",
        bullets: [
          "1. Talk to your employer first. DOL's claim page starts with informal action: work through the USERRA elaws Advisor, and if you believe you have a valid case, raise it with the employer.",
          "2. ESGR Ombudsman — free, informal mediation. ESGR (a DoD program) has trained volunteer Ombudsmen who will talk to you and your employer and try to mediate a remedy. DOL notes 95 percent of requests for assistance to ESGR are resolved informally. ESGR does not enforce USERRA and does not decide whether the law was violated — it mediates. Call 1-800-336-4590, select option 1, or use the online form at esgr.mil. Note: if you file a formal claim with DOL VETS, ESGR will not open a mediation case — pick the informal track first if you want it.",
          "3. DOL VETS — formal complaint and investigation. File online (electronic VETS Form 1010) or by paper Form 1010; for help, call 1-866-487-2365 (1-866-4-USA-DOL). Unlike ESGR, VETS cannot contact your employer until a claim is filed; after filing, VETS opens an investigation and tries to resolve the matter with the employer. VETS has investigation and resolution authority but limited enforcement power.",
          "4. DOJ / Office of Special Counsel. If VETS cannot resolve your case, you may request referral: to the Attorney General (Department of Justice) for private- and state-employer cases, or to the Office of Special Counsel for federal-employee cases, for possible litigation on your behalf.",
          "5. Your own lawyer / court. Filing with VETS is not the only door — USERRA claimants may also pursue the claim in court with private counsel. Military legal assistance can explain the trade-offs; they do not represent you against a civilian employer.",
        ],
        flag: "ESGR hours conflict between official pages: DOL's claim page states 8 a.m.–6 p.m. Eastern; ESGR's own contact page states 8:00 AM–4:30 PM (ET). The phone number (1-800-336-4590, option 1) agrees on both — this entry prints the number and flags the hours rather than choosing a winner.",
        links: [
          { label: "DOL VETS — File a Claim", url: "https://www.dol.gov/agencies/vets/programs/userra/fileaclaim" },
          { label: "ESGR — USERRA Contact", url: "https://www.esgr.mil/USERRA/USERRA-Contact" },
        ],
        source: "DOL VETS / ESGR",
      },
    ],
  },
];

RIGHTS_GROUPS.push(
  {
    title: "MLA — Military Lending Act",
    note: "Administered by: Department of Defense (implementing rule, 32 CFR Part 232); consumer guidance and enforcement support from the CFPB. Statute: 10 U.S.C. § 987. Key difference from SCRA: the MLA governs credit extended TO a covered borrower while covered — new loans, not pre-service debts.",
    entries: [
      {
        name: "MLA — who is a “covered borrower,” and the 36% MAPR cap",
        body: "Who (as CFPB lists): active-duty members of the Army, Marine Corps, Navy, Air Force, Coast Guard, and Space Force; members of the Reserves serving on active duty; National Guard members mobilized under federal orders for more than 30 consecutive days; spouses of those members; and, in some cases, their dependents. What: you can't be charged more than a 36% Military Annual Percentage Rate (MAPR) on covered credit. MAPR is broader than a normal APR — per CFPB, calculating it includes: finance charges; credit insurance premiums; add-on credit-related products sold in connection with the credit; and fees such as application fees, participation fees, and debt-cancellation contract fees. A loan can show a legal-looking interest rate and still break the cap once the add-ons are counted — that is exactly what MAPR exists to catch. Creditors check covered-borrower status through DoD's MLA database before extending covered credit.",
        links: [CFPB_MLA],
        source: "CFPB — Military Lending Act",
      },
      {
        name: "MLA — loans the MLA covers, and the big exclusions",
        body: "Covered (CFPB's list): credit cards; payday loans, deposit advances, tax refund anticipation loans, and vehicle title loans; overdraft lines of credit (but not traditional overdraft charges); installment loans (except auto loans, below); and some student loans. Not covered (CFPB's list): residential mortgages — loans to buy or build a home secured by the home; other home loans including mortgage refinances, home equity loans, home equity lines of credit, and reverse mortgages; auto loans when the lender can repossess the vehicle you are buying (a purchase-money auto loan is excluded — a vehicle title loan is covered; they are different products); and personal-property loans when the lender can repossess the property being bought, like a home appliance. The handoff rule (CFPB states it directly): home loans, vehicle loans, and other loans taken out before you enter active duty are protected by the SCRA instead. If a debt predates service → SCRA. If it's new credit while you're covered → this group.",
        links: [CFPB_MLA],
        source: "CFPB — Military Lending Act",
      },
      {
        name: "MLA — the disclosures a lender must give you",
        body: "Under DoD's implementing regulation (32 CFR § 232.6, “Mandatory loan disclosures”), before or at the time you become obligated, the creditor must give you: (1) a statement of the MAPR applicable to the credit; (2) the disclosures required by Regulation Z (Truth in Lending); and (3) a clear description of your payment obligation (a Regulation Z payment schedule or account-opening disclosure satisfies this). The MAPR statement and the payment-obligation description must be given both in writing and orally — the oral disclosure may be delivered in person or through a toll-free number the creditor provides on the application or written disclosures. The regulation's model MAPR statement begins: “Federal law provides important protections to members of the Armed Forces and their dependents relating to extensions of consumer credit…” — if you never received anything like that statement on a covered loan, the disclosure step was skipped. Steps: before signing anything covered, ask for the MAPR statement in writing; if the lender can't produce it, walk away and report it.",
        links: [
          { label: "32 CFR Part 232 (DoD MLA rule, via govinfo)", url: "https://www.govinfo.gov/content/pkg/CFR-2020-title32-vol2/pdf/CFR-2020-title32-vol2-part232.pdf" },
          CFPB_MLA,
        ],
        source: "32 CFR Part 232 / CFPB",
      },
      {
        name: "MLA — terms a lender may never put in a covered loan",
        body: "Per CFPB:",
        bullets: [
          "No mandatory arbitration / no waiver of legal rights. A lender cannot make you agree to settle disputes by arbitration — agreeing to arbitration usually also means giving up the right to join a class-action suit.",
          "No mandatory allotments. A lender cannot make you use a military allotment (a payment taken directly from your military pay) to repay the loan.",
          "No prepayment penalty. A lender cannot charge you a fee for paying off all or part of a covered loan early.",
          "If any of these terms appears in a loan offered to you while you're a covered borrower, the loan is violating the MLA — and note CFPB's flip side: a lender may simply refuse to lend if it knows its rates or terms would violate the MLA, so a refusal can be the law working, not discrimination.",
        ],
        links: [CFPB_MLA],
        source: "CFPB — Military Lending Act",
      },
      {
        name: "MLA — check a loan, and report a violation",
        body: "Steps (CFPB's route):",
        bullets: [
          "1. Suspect a violation? Compare the loan's all-in cost against the 36% MAPR using the components in the covered-borrower entry (charges + insurance + add-ons + fees). Your installation legal assistance office and Personal Financial Counselors can help run the numbers; CFPB also links the Office of Financial Readiness (FINRED) and Military OneSource for details.",
          "2. Submit a complaint to the CFPB — online at consumerfinance.gov/complaint or by phone at (855) 411-CFPB (2372). CFPB forwards complaints to the company and works to get a response.",
          "3. MLA violations can also be reported to the Department of Justice (CFPB links DOJ's civil-rights reporting portal).",
          "4. A military legal assistance office can help with your specific situation — find yours at legalassistance.law.af.mil (the locator CFPB itself links).",
        ],
        links: [CFPB_MLA, { label: "CFPB complaint", url: "https://www.consumerfinance.gov/complaint/" }],
        source: "CFPB — Military Lending Act",
      },
    ],
  },
  {
    title: "Adjacent protections & where to get help",
    entries: [
      {
        name: "State-level protections — stronger in some states (route, don't catalog)",
        body: "Federal law is the floor, not the ceiling: many states add their own servicemember protections (state SCRA-style laws, state Guard employment protections that can exceed USERRA, state lending rules), and state National Guard members on state active duty are often covered by state law where federal SCRA/USERRA coverage is thinner. This section deliberately does not catalog 50 states' laws. Route: use this app's State Benefits Finder for your state's official veteran/military pages, your state attorney general's servicemember page, and your installation legal assistance office — in that order — before assuming federal law is all you have.",
        links: [],
        source: "Routing entry — see the State Benefits Finder",
      },
      {
        name: "Deployment tax extensions (IRS overview — details live in MilTax)",
        body: "If you serve in a combat zone or a contingency operation, your deadlines to file returns, pay taxes, and take other tax actions are extended for the period of your service in the zone plus 180 days afterward (plus any days that remained in the original filing period when you entered the zone). The extension is generally automatic — your command notifies the IRS — and spouses filing jointly are covered by the same extension in the situations Military OneSource describes; members hospitalized outside the U.S. for combat-zone injuries get additional postponement rules. Separately, if your duty post is outside the United States or Puerto Rico on the filing deadline, you qualify for an automatic two-month extension to file. MilTax (Military OneSource's free tax service — software plus trained consultants, available year-round for questions) is where deployment taxes should actually be prepared; IRS Publication 3, Armed Forces' Tax Guide, is the IRS's own reference. This entry is an overview only — filing decisions, combat-pay exclusion questions, and multi-state PCS returns go to MilTax via Military OneSource or an IRS VITA/legal-assistance tax center, not to this app.",
        links: [
          { label: "Military OneSource — Filing Military Taxes While You Are Deployed", url: "https://www.MilitaryOneSource.mil/financial-legal/tax-resource-center/special-tax-considerations/ins-and-outs-of-filing-military-taxes-when-you-are-deployed/" },
          { label: "Military OneSource — Federal Tax-Filing Extensions for the Military", url: "https://www.militaryonesource.mil/financial-legal/taxes/three-ways-to-get-a-federal-tax-extension-as-a-service-member/" },
        ],
        source: "IRS / Military OneSource",
      },
      {
        name: "Fraud and predatory-lending warnings — CFPB Office of Servicemember Affairs",
        body: "The CFPB's Office of Servicemember Affairs is the federal office specifically charged with protecting military consumers. Its standing warnings, echoed across CFPB military pages: high-cost lenders cluster around installations; “military-friendly” branding is marketing, not a legal category; add-on products (credit insurance, debt cancellation) are where over-cap costs hide (see MAPR); and any lender that discourages you from checking your SCRA/MLA rights is telling you something. The complaint is the enforcement trigger: CFPB states it will forward your complaint to the company and work to get you a response, and complaint patterns drive enforcement actions — reporting a violation protects the next member, not just you. Steps: (1) Before signing: slow down, ask for the MAPR statement, and take the paperwork to a free Personal Financial Counselor or legal assistance — a legitimate lender will wait a day. (2) After a bad loan or a scam: complain to the CFPB (consumerfinance.gov/complaint, (855) 411-CFPB / (855) 411-2372), and report suspected fraud to legal assistance, which tracks installation-area offenders and the DoD off-limits process.",
        links: [CFPB_MLA],
        source: "CFPB Office of Servicemember Affairs",
      },
      {
        name: "The help ladder for every law in this section",
        body: "The closing card for the whole section:",
        bullets: [
          "1. Free military legal assistance — attorneys for exactly these problems: SCRA letters, lease disputes, MLA loan reviews, USERRA basics. Locator: legalassistance.law.af.mil.",
          "2. Your chain of command / unit administrator — for the orders, CO letters, and notice copies every invocation in this section runs on.",
          "3. The administering agency — DOJ Servicemembers and Veterans Initiative (SCRA pattern-or-practice enforcement), DOL VETS + ESGR (USERRA — the escalation ladder), CFPB (MLA and consumer-finance complaints).",
          "4. Military OneSource — non-medical counseling, MilTax, and financial counseling referrals for everything adjacent.",
          "Reminder that ships with this card: this section is information, not legal advice. Deadlines in these laws (180 days, 14 days, 90 days, 24 months) are real and unforgiving — when one is close, legal assistance first, reading second. And there are no sample letters in this section: legal drafting routes to legal assistance, by design.",
        ],
        links: [{ label: "Armed Forces Legal Assistance locator", url: "https://legalassistance.law.af.mil" }],
        source: "Legal assistance / the administering agencies",
      },
    ],
  },
);
