// Care & Crisis — static reference data transcribed from the researched
// care pack (~/workspace/military-app/care/care.md, researched November 8,
// 2026). Summaries, who/when statements, phone numbers, and links come
// only from the pack; every pack flag is preserved on its card. Phone
// numbers are printed exactly as the pack prints them — each was
// confirmed against its official source in the pack's phone register.
//
// Fidelity rules baked into this data (the pack's standing rules):
// - The Veterans Crisis Line renders as a pinned strip at the top of the
//   section (in App.tsx) before anything else — nobody in a hard moment
//   scrolls past enrollment instructions to find it.
// - Priority groups are CONCEPT level only — the 1–8 table is linked,
//   never reproduced.
// - Burial allowance amounts are NOT printed — cross-reference to the
//   Benefits section only.
// - The two VA health-care URLs the pack flagged ship as clean canonical
//   addresses (tracking parameters stripped in the pack).
// - The online 10-10EZ is NOT deep-linked — the link returned in research
//   resolved to the form's confirmation step, so entry 2.2 routes through
//   the how-to-apply page only.
// - Military Crisis Line regional numbers are exactly the pack's current
//   veteranscrisisline.net numbers; older overseas numbers some .mil
//   pages still print are NOT used (flag on entry 3.3).
// - Mobile Vet Centers print as 83 WITH the pack's count-conflict flag.
// - SSVF is stated plainly: no public locator — the Provider List or the
//   National Call Center is the route.
// - Arlington is contrasted with VA national cemeteries exactly as the
//   pack does: Army-run, eligibility at time of need only, no pre-need.
// - Tone throughout: plain, warm, zero drama.

export type CareLink = { label: string; url: string };

export type CareBullet = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type CareXref = {
  label: string;
  target: "benefits";
};

export type CareEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: CareBullet[];
  flag?: string;
  /** Prominent statement box rendered inside the card. */
  callout?: string;
  /** Tappable call button: label printed exactly as the pack prints the number. */
  call?: { label: string; tel: string };
  links: CareLink[];
  /** In-app cross-reference button to another section. */
  xref?: CareXref;
};

export type CareGroup = {
  title: string;
  note?: string;
  entries: CareEntry[];
};

export const CARE_STANDING_NOTE =
  "Support for hard moments, in plain language: free counseling at Vet Centers, enrolling in VA health care, housing help, and funeral and burial honors. Every phone number and link here comes from the program's own official page, and every number is printed exactly as that page publishes it. If you are in crisis right now, start with the strip pinned at the top of this page — the Veterans Crisis Line is free, confidential, and answered around the clock.";

const VET_CENTER_HOME: CareLink = {
  label: "Vet Centers (Readjustment Counseling) — program home",
  url: "https://www.vetcenter.va.gov/VETCENTER/index.asp",
};
const VA_ELIGIBILITY: CareLink = {
  label: "VA.gov — Eligibility for VA health care",
  url: "https://www.va.gov/health-care/eligibility/",
};
const VA_HOW_TO_APPLY: CareLink = {
  label: "VA.gov — How to apply for VA health care",
  url: "https://www.va.gov/health-care/how-to-apply/",
};
const CRISIS_LINE_HOME: CareLink = {
  label: "Veterans Crisis Line",
  url: "https://www.veteranscrisisline.net/",
};
const CRISIS_LINE_CHAT: CareLink = {
  label: "Veterans Crisis Line — confidential chat",
  url: "https://www.veteranscrisisline.net/get-help-now/chat/",
};
const MILITARY_CRISIS_LINE: CareLink = {
  label: "Military Crisis Line (Veterans Crisis Line)",
  url: "https://www.veteranscrisisline.net/get-help-now/military-crisis-line/",
};
export const CARE_GROUPS: CareGroup[] = [
  {
    title: "Vet Centers",
    entries: [
      {
        name: "What a Vet Center Is",
        kind: "Vet Centers",
        summary:
          "Vet Centers are small, community-based counseling centers run by VA's Readjustment Counseling Service. They provide readjustment counseling — a wide range of social and psychological services to help eligible Veterans, service members, and their families make a successful transition from military to civilian life, or work through a traumatic event experienced in the military, including military sexual trauma (MST). Individual, group, marriage, and family counseling is offered, plus referral and connection to other VA or community benefits and services. They are located in neighborhoods, separate from VA hospitals and other VA organizational sites, in a relaxed, non-medical setting — and many Vet Center counselors and outreach staff are Veterans themselves. All services are at no cost and strictly confidential.",
        callout:
          "You do not need to be enrolled in VA health care, rated for a service-connected disability, or receiving any other VA benefits to use a Vet Center.",
        who: "Anyone who thinks they may be eligible (see the next card) — including people who have never used any other VA service.",
        links: [VET_CENTER_HOME],
      },
      {
        name: "Who Is Eligible for Vet Center Services",
        kind: "Vet Centers",
        summary:
          "Per VA's Vet Center pages, you may be eligible no matter your discharge status or your eligibility for VA health care, and VA encourages you to contact a Vet Center even if you are not sure you qualify. You are eligible if you meet any of these service requirements, as VA lists them:",
        bullets: [
          { text: "You served on active duty in any combat theater or area of hostility, or" },
          { text: "You experienced military sexual trauma (any Veteran or service member, including National Guard and Reserve, who experienced MST is eligible), or" },
          { text: "You provided mortuary services or direct emergency medical care to treat the casualties of war while on active duty, or" },
          { text: "You served on active duty in response to a national emergency or major disaster declared by the President, or under orders of a state governor/chief executive in response to a disaster or civil disorder, or" },
          { text: "You are a current member of the Reserve Component in a drill status and need to address a behavioral health condition or psychological trauma related to your military service." },
        ],
        details: [
          "Family members are also eligible for readjustment counseling related to the Veteran's or service member's service — including couples and family counseling, and bereavement counseling for family members of service members who died on active duty. On a first visit, staff will look for a document showing qualifying service (discharge papers such as a DD214 are preferred for Veterans; deployment orders for active duty) — if you don't have documents on hand, go anyway; VA states staff will work with you to establish eligibility.",
        ],
        who: "Veterans, active-duty service members (including Guard and Reserve), and their families, in any of the categories above.",
        links: [
          { label: "Vet Center services and eligibility detail", url: "https://www.vetcenter.va.gov/VETCENTER/Vet_Center_Services.asp" },
          { label: "A representative official Vet Center page (eligibility in full) — Tampa", url: "https://www.va.gov/tampa-vet-center/" },
        ],
      },
      {
        name: "Confidentiality — Records Kept Separate",
        kind: "Vet Centers",
        summary:
          "Stated exactly as VA states it: Vet Center records are separate from other VA records and from DoD records. Per VA's Vet Center pages: “Our records can't be accessed by other VA offices, the DoD, military units, or other community networks and providers without your permission or unless required to avert a life-threatening situation.” Vet Center records can only be released with the written permission of the Veteran or service member. That separation is by design — Vet Centers sit apart from VA organizational sites to ensure confidential counseling and reduce barriers to care.",
        who: "Anyone weighing whether to use a Vet Center, especially active-duty members concerned about their unit or command finding out.",
        links: [
          { label: "Official Vet Center page stating the confidentiality rule in full — Lewiston", url: "https://www.va.gov/lewiston-vet-center/" },
        ],
      },
      {
        name: "Vet Center Call Center — 1-877-WAR-VETS",
        kind: "Vet Centers · 24/7",
        summary:
          "The Vet Center Call Center is a free, confidential, around-the-clock (24/7) call center. Callers can talk about their military experience or any other issue they are facing in transitioning after military service or trauma, and get connected to their nearest Vet Center. Per VA, the call center team is comprised of combat Veterans from several eras as well as family members of Veterans.",
        call: { label: "Call 1-877-WAR-VETS (1-877-927-8387)", tel: "tel:+18779278387" },
        who: "Veterans, service members, and their families — any hour, whether or not a local Vet Center is open.",
        links: [VET_CENTER_HOME],
      },
      {
        name: "Find a Vet Center — and Mobile Vet Centers",
        kind: "Vet Centers",
        summary:
          "Use VA's facility locator to find the nearest Vet Center, Vet Center outstation, or community access point. For rural and distant communities, VA also runs Mobile Vet Centers (MVCs) — per the Vet Center program page, “Our 83 Mobile Vet Centers (MVC) are large mobile vehicles with space for confidential counseling and are used to provide outreach to eligible individuals in communities that are distant from existing services.” MVCs can access records through an encrypted connection and are also called on to support VA emergency response to national emergencies and disasters.",
        flag: "Mobile Vet Center count: the Vet Center program index page says 83; a VA new-locations page says “one of 84 Mobile Vet Centers.” This section prints 83 — the figure on the program's own index page — and flags the variance rather than resolving it.",
        who: "Anyone looking for in-person readjustment counseling, especially outside metro areas.",
        links: [
          { label: "VA facility locator (choose Vet Center)", url: "https://www.va.gov/find-locations/" },
          { label: "Vet Centers program page (Mobile Vet Center description)", url: "https://www.vetcenter.va.gov/VETCENTER/index.asp" },
        ],
      },
    ],
  },
  {
    title: "VA Health Care Enrollment",
    entries: [
      {
        name: "Basic Eligibility — Who Can Apply",
        kind: "VA Health Care",
        summary:
          "Per VA's eligibility page: “You may be eligible for VA healthcare benefits if you served in the active military, naval, or air service and didn't receive a dishonorable discharge.” If you enlisted after September 7, 1980, or entered active duty after October 16, 1981, you must generally have served 24 continuous months or the full period for which you were called to active duty — with exceptions VA lists on the page (including discharge for a disability caused or made worse by service, hardship, or “early out”). Current or former Reserve and National Guard members qualify if they were called to active duty by a federal order and completed the full period; active-duty status for training purposes only does not qualify. You do not need a disability rating to apply. VA also states that all Veterans who meet the basic service and discharge requirements and were exposed to toxins or other hazards while serving — at home or abroad — are now eligible, including all Veterans who served in Vietnam, the Gulf War, Iraq, Afghanistan, or any other combat zone after 9/11.",
        flag: "This link is the clean canonical address — the address returned during research carried email-tracking parameters, which were stripped.",
        who: "Any Veteran who has never enrolled — VA decides eligibility from the application, so the practical step is to apply and let VA determine it.",
        links: [VA_ELIGIBILITY],
      },
      {
        name: "How to Apply — the Four Ways (Form 10-10EZ)",
        kind: "VA Health Care",
        summary:
          "One form — VA Form 10-10EZ, Application for Health Benefits — works for every route:",
        bullets: [
          {
            title: "Online",
            text: "Apply right now on VA.gov (the online application introduction is reached from the how-to-apply page linked below). VA's application page says to have ready: Social Security numbers for you and any spouse/dependents, and insurance card information for any health coverage you have. VA estimates the online application takes about 35 minutes.",
          },
          {
            title: "By phone",
            text: "Call 877-222-VETS (877-222-8387), Monday through Friday, 8:00 a.m. to 8:00 p.m. ET (TTY: 711). A VA staff member helps you complete the application.",
          },
          {
            title: "By mail",
            text: "Fill out and sign VA Form 10-10EZ (you or someone acting as your power of attorney must sign and date it) and mail it to: Health Eligibility Center, PO Box 5207, Janesville, WI 53547-5207.",
          },
          {
            title: "In person",
            text: "Bring a signed VA Form 10-10EZ to your nearest VA medical center or clinic. You can also get help through your state's Department of Veterans Affairs, or from an accredited attorney, claims agent, or VSO representative (VSO help is free — see the Claims section).",
          },
        ],
        flag: "The online-application address returned during research resolved to the form's confirmation step, not its introduction — so this section routes you through the how-to-apply page rather than deep-linking the form. Start there and follow VA's own link into the application.",
        who: "Any Veteran applying for the first time.",
        links: [VA_HOW_TO_APPLY],
      },
      {
        name: "What Happens After You Apply",
        kind: "VA Health Care",
        summary:
          "Per VA's application page: “We typically process healthcare applications within a week. We'll send you a letter in the mail with our decision.” If you don't receive your decision letter within a week after you apply, don't apply again — call 877-222-8387, Monday through Friday, 8:00 a.m. to 8:00 p.m. ET. Once enrolled, VA assigns you to a priority group (see the next card) and you can register at a VA facility and start scheduling care. If accepted, VA's Welcome Kit materials describe receiving a phone call from VA and a personalized Veterans Health Benefits Handbook in the mail.",
        call: { label: "Call 877-222-8387 (Mon–Fri, 8 a.m.–8 p.m. ET)", tel: "tel:+18772228387" },
        who: "Anyone who has submitted a 10-10EZ and is waiting.",
        links: [VA_HOW_TO_APPLY],
      },
      {
        name: "Priority Groups — the Concept",
        kind: "VA Health Care",
        summary:
          "After VA processes your application and you are enrolled, VA assigns you to 1 of 8 priority groups. Per VA, the group is based on: your military service history, your disability rating, your income level, whether you qualify for Medicaid, and other benefits you may be receiving (like VA pension). VA assigns Veterans with service-connected disabilities the highest priority, and if you qualify for more than one group, VA assigns you to the highest one. Your priority group may affect how much (if anything) you pay toward the cost of your care, and for group 8, eligibility can depend on a subpriority group. A priority group can change if your income changes or your disability rating increases.",
        flag: "Priority groups are stated at concept level only, by design: the complete group-by-group table lives on VA's page and changes with law and income limits, so this section links it rather than freezing a copy.",
        who: "Every enrolled Veteran is in one of the eight groups; check the official page to see where you likely fall.",
        links: [
          { label: "VA.gov — VA priority groups (the full 1–8 table)", url: "https://www.va.gov/health-care/eligibility/priority-groups/" },
        ],
      },
      {
        name: "Enhanced Eligibility — Toxic Exposure and Combat Service",
        kind: "VA Health Care",
        summary:
          "VA's eligibility page states that some Veterans qualify for enhanced eligibility, which places them in a higher priority group. VA lists the routes at concept level: receiving VA compensation for a service-connected disability; being a combat Veteran discharged or released on or after September 11, 2001 (combat Veterans get an extended — 10-year — period of enhanced eligibility from discharge for care related to their combat service, per VA's priority-group page note); exposure to toxins or hazards during service (including while training or on active duty, even if never deployed); and specific service such as Southwest Asia during the Gulf War (August 2, 1990 – November 11, 1998). If none of those apply, VA states you may still qualify based on your income. Details and the full list live on the official eligibility page — eligibility categories change as law changes, so this section states the concept and routes to VA.",
        who: "Post-9/11 combat Veterans and any Veteran with toxic-exposure service who has not yet applied.",
        links: [VA_ELIGIBILITY],
      },
    ],
  },
  {
    title: "Crisis",
    note: "The Veterans Crisis Line is also pinned at the top of this page, so it is never more than a glance away.",
    entries: [
      {
        name: "Veterans Crisis Line — Call 988, Then Press 1",
        kind: "Crisis · 24/7",
        summary:
          "The Veterans Crisis Line connects Veterans and service members in crisis — and their families and friends — with qualified, caring VA responders. It is free, confidential, and available 24/7. Per VA, you do not need to be enrolled in VA benefits or VA health care to use it.",
        bullets: [
          { title: "Call", text: "Dial 988, then Press 1" },
          { title: "Text", text: "838255" },
          { title: "Chat", text: "veteranscrisisline.net — confidential online chat (link below)" },
          { title: "TTY", text: "1-800-799-4889 (as printed on VA's Vet Center pages)" },
        ],
        who: "Veterans, service members, National Guard and Reserve members, and the people who support them — in crisis or worried about someone who is.",
        links: [CRISIS_LINE_HOME, CRISIS_LINE_CHAT],
      },
      {
        name: "Text and Chat — When Calling Isn't Possible",
        kind: "Crisis",
        summary:
          "The same trained VA responders are reachable without speaking out loud: text 838255, or start a confidential online chat at VeteransCrisisLine.net. VA's Military Crisis Line page notes chat is available online in all locations with an internet connection, and that if phone dialing doesn't work from where you are, you can use chat and request a call back from a responder at no charge. One practical note VA publishes: U.S. short codes such as 838255 only work if you are on a U.S.-based service provider with an international plan that allows texting to U.S. short codes from outside the United States — overseas, chat is the most reliable route.",
        who: "Anyone who can't safely or practically make a voice call, including members overseas.",
        links: [CRISIS_LINE_CHAT, MILITARY_CRISIS_LINE],
      },
      {
        name: "Military Crisis Line — Calling from Overseas",
        kind: "Crisis",
        summary:
          "For service members outside the United States, the Veterans Crisis Line is also presented as the Military Crisis Line, with a regional number for each DoD Area of Responsibility. Per the official Military Crisis Line page, the country code to reach the United States is required for each number, and if you have trouble with your region's number you can try one of the others. Off base, callers outside the U.S., Canada, or Mexico are responsible for any long-distance international charges from their carrier, even when dialing a toll-free number. On base, DSN 988 works in every region. The numbers below are verbatim from veteranscrisisline.net:",
        bullets: [
          { title: "NORTHCOM", text: "Dial 988 then Press 1" },
          { title: "PACOM", text: "Call +1 844-702-5493 (off base) or DSN 988 (on base)" },
          { title: "EUCOM", text: "Call +1 844-702-5495 (off base) or DSN 988 (on base)" },
          { title: "CENTCOM", text: "Call +1 855-422-7719 (off base) or DSN 988 (on base)" },
          { title: "AFRICOM", text: "Call +1 888-482-6054 (off base) or DSN 988 (on base)" },
          { title: "SOUTHCOM", text: "Call +1 866-989-9599 (off base) or DSN 988 (on base)" },
        ],
        flag: "Some older .mil pages still print earlier overseas numbers (for example, 00800 1273 8255 for Europe, DSN 118). Those older numbers are not used here — the current Veterans Crisis Line page governs, and only its numbers are printed above.",
        who: "Service members, Veterans, and families stationed or living overseas.",
        links: [MILITARY_CRISIS_LINE],
      },
      {
        name: "911 or the Crisis Line — Which Door",
        kind: "Crisis",
        summary:
          "Kept minimal and factual. If someone is in immediate danger or has been injured — an emergency happening now — call 911 (or local emergency services overseas) for responders who can come to you. The Veterans Crisis Line (988, Press 1) is a phone, text, and chat service staffed by VA responders: it is the right door for a person in emotional crisis, having thoughts of suicide, or for someone worried about a Veteran or service member. The two are not in competition — in an emergency, call 911 first; for crisis support and connection to care, the Crisis Line is staffed around the clock.",
        who: "Anyone deciding what to do in the first minutes of a hard moment.",
        links: [CRISIS_LINE_HOME],
      },
      {
        name: "Military OneSource — Support That Is Not a Crisis Service",
        kind: "Military OneSource",
        summary:
          "Military OneSource is DoD's free, confidential support service for the military community — consultants 24/7 at 800-342-9647, plus short-term, solution-focused non-medical counseling (up to 12 sessions per issue, in person, by phone, by secure video, or by chat) for everyday military-life issues such as relationship conflicts, stress management, parenting, grief and loss, and managing deployments. The boundary, stated correctly: Military OneSource counseling does not diagnose or treat mental health conditions, and its own counseling page lists what it does not address — active suicidal or homicidal thoughts, sexual assault, child abuse, domestic violence, and alcohol and substance abuse. For those, OneSource's page routes people directly to the Military Crisis Line: dial 988 then press 1, text 838255, or chat with a VA responder. OneSource is a good door for a hard week; it is not the door for an emergency or a crisis.",
        call: { label: "Call Military OneSource — 800-342-9647 (24/7)", tel: "tel:+18003429647" },
        flag: "The counseling page resolved to a pre.militaryonesource.mil address in official search results during research and is cited exactly as returned; the canonical about-us page (also linked below) confirms the 800-342-9647 number.",
        who: "Service members (including Guard and Reserve), their families, and survivors; recently separated members remain eligible for a period after separation (OneSource states eligibility continues until 365 days past separation/retirement/discharge on its program materials).",
        links: [
          { label: "About Military OneSource (800-342-9647, 24/7, stated on the page)", url: "https://www.militaryonesource.mil/about-us/" },
          { label: "Military OneSource counseling — what it covers and what it does not", url: "https://pre.militaryonesource.mil/benefits/confidential-counseling/" },
        ],
      },
    ],
  },
  {
    title: "Housing Instability",
    note: "One front door: the National Call Center for Homeless Veterans — 877-4AID-VET (877-424-3838) — is the first call for every program in this group. You do not need to know which program fits before calling.",
    entries: [
      {
        name: "First Call — National Call Center for Homeless Veterans",
        kind: "Housing · 24/7",
        summary:
          "If you are a Veteran who is homeless or at imminent risk of homelessness, VA's stated first step is the National Call Center for Homeless Veterans: 877-4AID-VET (877-424-3838). Per VA's homeless program pages, the call is free, confidential, and available 24 hours a day, 7 days a week, staffed by trained counselors who can talk with you right now and connect you with your nearest VA for assistance. This one call is the front door to the programs in the cards below — you do not need to know which program fits before calling.",
        call: { label: "Call 877-4AID-VET (877-424-3838)", tel: "tel:+18774243838" },
        who: "Any Veteran without stable housing tonight, or who expects to lose housing imminently — and family members or advocates calling on a Veteran's behalf.",
        links: [
          { label: "VA — HUD-VASH program page (the call center number and its 24/7 free/confidential statement appear on this page)", url: "https://www.va.gov/HOMELESS/hud-vash.asp" },
        ],
      },
      {
        name: "HUD-VASH — a Voucher Plus a VA Case Manager",
        kind: "Housing",
        summary:
          "HUD-VASH is a collaborative program between HUD and VA that pairs HUD's Housing Choice Voucher (HCV) rental assistance with VA case management and supportive services. Per VA: once approved, the Veteran receives a voucher to rent an eligible privately owned apartment or home from a landlord who accepts vouchers (the unit must meet HUD requirements and fall within local program guidelines), and every participant is paired with a trained VA case manager who provides clinical connections (primary care, mental health, substance use treatment), practical life-skills help (budgeting for rent, understanding a lease, landlord relationships), and ongoing support for as long as needed to remain stably housed. VA describes the program as specifically tailored for Veterans experiencing homelessness who need ongoing, intensive case management due to more complex challenges, such as chronic health conditions.",
        callout:
          "There is no direct application to HUD for this voucher. Referral runs through VA — contact the National Call Center (877-4AID-VET) or your nearest VA medical center's homeless program; referrals also come through VA outreach and local coordinated-entry partners.",
        who: "Veterans experiencing homelessness who need both rental assistance and ongoing support to stay housed.",
        links: [
          { label: "U.S. Department of Housing and Urban Development–VA Supportive Housing (HUD-VASH) Program", url: "https://www.va.gov/HOMELESS/hud-vash.asp" },
        ],
      },
      {
        name: "SSVF — Rapid Re-housing and Prevention for Veteran Families",
        kind: "Housing",
        summary:
          "Supportive Services for Veteran Families (SSVF) awards VA grants to community-based nonprofit organizations (grantees) that help low-income Veteran families who are homeless or at imminent risk. Per VA's SSVF pages, grantees provide outreach, case management, and assistance obtaining VA and other mainstream benefits, centered on two services: rapid re-housing (help transitioning from literal homelessness into permanent housing — for households who would remain homeless “but for” SSVF assistance) and homelessness prevention (help for families in permanent housing at imminent risk of literal homelessness, within the next 30 days). Grantees may also make time-limited payments to third parties — landlords, utility companies, moving companies, licensed child care providers — when those payments help a family stay in or acquire permanent housing. Finding a grantee: VA's SSVF site carries a Provider List of awarded organizations by location; or call the National Call Center (877-4AID-VET) and ask for the SSVF provider in your area.",
        flag: "SSVF has no public locator tool. The route is VA's SSVF Provider List (linked from the SSVF home page below) or the National Call Center — stated plainly, because the program does not publish a locator to present.",
        who: "Very low-income Veteran families — including families with children — who are homeless now or about to lose their housing.",
        links: [
          { label: "SSVF — VA Homeless Programs home (Provider List is linked from this page)", url: "https://department.va.gov/homeless/ssvf-home-page/" },
          { label: "SSVF supportive services overview", url: "https://department.va.gov/homeless/supportive-services-for-veteran-families/supportive-services/" },
        ],
      },
      {
        name: "Grant and Per Diem — Transitional Housing",
        kind: "Housing",
        summary:
          "The Grant and Per Diem (GPD) Program is, per VA, its largest transitional housing program for Veterans experiencing homelessness. Since 1994, VA has awarded grants to community-based organizations to provide transitional housing with wraparound supportive services that help vulnerable Veterans move into permanent housing. Grant types include:",
        bullets: [
          {
            title: "Per Diem Only grants",
            text: "Per-diem payments reimbursing grantees for care in transitional supportive housing, across bed models such as Bridge Housing, Clinical Treatment, Hospital to Housing, Low Demand, and Service Intensive Transitional Housing, and for service centers.",
          },
          {
            title: "Special Need grants",
            text: "Targeting specific populations — for example, women, Veterans with chronic mental illness, frail elderly Veterans, Veterans caring for minor dependents, and terminally ill Veterans.",
          },
          {
            title: "Transition-In-Place grants",
            text: "The Veteran stays in the unit, which becomes their permanent housing as services phase out.",
          },
          {
            title: "Case Management grants",
            text: "Supporting Veterans previously homeless as they retain permanent housing.",
          },
        ],
        callout:
          "Veterans enter GPD housing through their local VA homeless program or the National Call Center (877-4AID-VET) — there is no direct public application for a GPD bed.",
        who: "Veterans who need a transitional step — housing plus services — on the way to permanent housing.",
        links: [
          { label: "Grant and Per Diem Program (VA Homeless Programs)", url: "https://department.va.gov/homeless/grant-per-diem/" },
        ],
      },
      {
        name: "VA Homeless Programs — the Front Door Page",
        kind: "Housing",
        summary:
          "VA's Homeless Programs site is the umbrella for everything in this group plus related programs (Health Care for Homeless Veterans outreach, Veterans Justice Outreach, and more). If a Veteran, family member, or advocate is not sure which program fits, the two reliable first moves are this page and the National Call Center (877-424-3838, on the first card in this group).",
        flag: "VA's homeless program pages are mid-migration between va.gov/HOMELESS addresses and department.va.gov/homeless addresses — both appear on current official pages. This section links each program at the address its own official materials currently print (HUD-VASH at va.gov; SSVF and GPD at department.va.gov) and uses the National Call Center phone number as the umbrella route rather than asserting one homeless-programs home URL.",
        who: "Anyone starting from zero on Veteran housing help.",
        links: [
          { label: "SSVF — VA Homeless Programs home", url: "https://department.va.gov/homeless/ssvf-home-page/" },
        ],
      },
    ],
  },
  {
    title: "Funeral & Burial Honors",
    entries: [
      {
        name: "Burial in a VA National Cemetery — What It Is",
        kind: "Burial",
        summary:
          "Burial in a VA national cemetery is available to eligible Veterans, service members, and certain family members at no cost to the family. Per the National Cemetery Administration, the benefit includes:",
        bullets: [
          { text: "A gravesite in any national cemetery with available space (or a columbarium niche for cremated remains)" },
          { text: "Opening and closing of the grave" },
          { text: "A grave liner" },
          { text: "A government headstone or marker" },
          { text: "A burial flag" },
          { text: "Presidential Memorial Certificate(s)" },
          { text: "Perpetual (ongoing) care of the gravesite" },
        ],
        details: [
          "Eligibility at concept level (per VA): Veterans discharged from active duty under conditions other than dishonorable (with minimum-service rules VA lists — generally 24 consecutive months or the full period of active duty for those who enlisted after September 7, 1980 / entered as officers after October 16, 1981); service members who died while on active duty, active duty for training, or inactive-duty training; active-duty service members; and spouses and dependent children of Veterans (a spouse or dependent child can become eligible even before the Veteran's own death). VA's National Cemetery Scheduling Office or local national cemetery directors verify eligibility for each burial.",
        ],
        flag: "Burial allowance amounts are not printed here — they change, and they are covered in the Benefits section. Use the cross-reference below rather than looking for a figure on this card.",
        who: "Families at the time of a death, and Veterans planning ahead (see the pre-need card below).",
        links: [
          { label: "Burial and memorial benefits for Veterans (National Cemetery Administration)", url: "https://www.cem.va.gov/burial-memorial-benefits/Veterans.asp" },
        ],
        xref: { label: "Burial allowance & memorial benefits — Benefits section", target: "benefits" },
      },
      {
        name: "Schedule a Burial — the Three Steps",
        kind: "Burial",
        summary: "Per VA's schedule-a-burial page:",
        bullets: [
          {
            title: "Step 1 — Gather documents and information",
            text: "You will need the Veteran's DD214 or other discharge documents (the discharge must have been under conditions other than dishonorable), plus the deceased's name, Social Security or military service number, dates of birth and death, marital status, and relationship to the Veteran; and the next of kin's name, relationship, Social Security number, phone number, and address. If you can't find the discharge papers, VA says to call anyway — they will help, though eligibility checks may take several days without documents.",
          },
          {
            title: "Step 2 — Decide the details",
            text: "Choose the cemetery, casket or cremation, and the gravesite memorial (headstone, marker, niche cover, or medallion) and any religious emblem or inscription; and say whether you want burial honors or memorial items such as a burial flag or Presidential Memorial Certificate.",
          },
          {
            title: "Step 3 — Contact the National Cemetery Scheduling Office",
            text: "Fax discharge papers to 866-900-6417 or scan and email them to NCA.Scheduling@va.gov (put the person's name in the subject line), then call 800-535-1117 (TTY: 711) to confirm — Monday through Friday, 8:00 a.m. to 7:30 p.m. ET. Your funeral director can handle these steps with you.",
          },
        ],
        details: [
          "If you already hold a pre-need decision letter (see the next card), you or the funeral director simply call the Scheduling Office at the same number to request the burial. National cemeteries conduct burials Monday through Friday (with one day during a federal-holiday weekend when the holiday falls on a Monday or Friday).",
        ],
        call: { label: "Call the National Cemetery Scheduling Office — 800-535-1117 (TTY: 711)", tel: "tel:+18005351117" },
        who: "The family or funeral director at the time of need.",
        links: [
          { label: "VA.gov — Schedule a burial for a Veteran or family member", url: "https://www.va.gov/burials-memorials/schedule-a-burial/" },
        ],
      },
      {
        name: "Plan Ahead — Pre-Need Burial Eligibility",
        kind: "Burial",
        summary:
          "A Veteran (or family member) can apply before a death for a pre-need burial eligibility determination using VA Form 40-10007. VA reviews the application and issues a decision letter. Per VA, the letter confirms eligibility only — it does not identify a specific cemetery or gravesite, because gravesites cannot be reserved in advance — and VA may review eligibility again at the time of death if laws or circumstances have changed. Separately, VA's practical preparation advice is simple: tell your family your burial wishes and where your discharge papers are kept, because those papers are what establish eligibility when the time comes.",
        flag: "Contrast with Arlington (next card): VA national cemeteries offer this pre-need determination. Arlington does not — there, eligibility is decided only at the time of need. Do not assume one system's rules fit the other.",
        who: "Any Veteran who wants to spare their family the eligibility question later.",
        links: [
          { label: "VA Form 40-10007 — Application for Pre-Need Determination of Eligibility for Burial in a VA National Cemetery (PDF)", url: "https://www.va.gov/vaforms/va/pdf/VA40-10007.pdf" },
        ],
      },
      {
        name: "Arlington National Cemetery — Stricter Rules, Run by the Army",
        kind: "Burial",
        summary:
          "Arlington National Cemetery is administered by the Department of the Army, not VA, and VA does not determine eligibility for it. Per Arlington's official eligibility page: “Arlington National Cemetery's eligibility requirements for burial and inurnment are different from other national cemeteries that are maintained by the Department of Veterans Affairs. Eligibility for in-ground burial at Arlington National Cemetery is the most stringent of all U.S. national cemeteries.” At concept level: most Veterans who have at least one day of active service (other than for training) and an honorable discharge are eligible for above-ground inurnment (columbarium), while in-ground burial is limited to narrower categories (for example, those who die on active duty, retirees entitled to retirement pay, and recipients of certain high decorations — the full criteria are in 32 CFR Part 553). Two more rules families should know: eligibility is determined at the time of need (death) and cannot be verified by the cemetery in advance — there is no Arlington pre-need determination. At the time of need, the family or funeral home calls ANC's customer service center at 877-907-8585 (as published in Arlington's official Funeral FAQs) to open a case.",
        call: { label: "Call Arlington National Cemetery — 877-907-8585", tel: "tel:+18779078585" },
        who: "Families considering Arlington specifically — check Arlington's own page early, because the answer differs from VA national cemeteries.",
        links: [
          { label: "Arlington National Cemetery — Eligibility", url: "https://www.arlingtoncemetery.mil/Funerals/Eligibility" },
        ],
      },
      {
        name: "Military Funeral Honors — How a Family Gets Them",
        kind: "Burial Honors",
        summary:
          "By law (Public Law 106-65), upon the family's request, every eligible Veteran can receive a military funeral honors ceremony. Per VA's Military Funeral Honors page: the honors detail consists of at least two members of the Armed Forces, with at least one a representative of the Veteran's parent (own) service, and the core ceremony is the folding and presentation of the U.S. flag and the playing of “Taps.” Honors can be rendered at national, state, or private cemeteries.",
        details: [
          "How to request: honors are not automatic — the DoD program calls for funeral home directors to request military funeral honors on behalf of the Veteran's family; the funeral director contacts the deceased's branch of service (its casualty/honors office) to arrange the detail. For burials at VA national cemeteries, National Cemetery Administration cemetery staff can also assist with arranging honors. VA suggests contacting the military service branch at least 48 to 72 hours before the scheduled service. Veterans Service Organizations and authorized provider partnerships may supplement the detail (rifle detail, pallbearers, escort) where available. Have the Veteran's discharge papers (DD214) ready — they prove eligibility.",
        ],
        who: "The family, through their funeral director, for any eligible Veteran's funeral or memorial service.",
        links: [
          { label: "Military Funeral Honors (VA National Cemetery Administration page for the DoD program)", url: "https://www.cem.va.gov/military_funeral_honors.asp" },
        ],
      },
      {
        name: "State and Tribal Veterans Cemeteries",
        kind: "Burial",
        summary:
          "Many states, territories, and tribal governments operate their own Veterans cemeteries, established or improved with VA grants through the Veterans Cemetery Grants Program. Per VA's cemetery directory, eligibility at these cemeteries is similar to VA national cemeteries but may include residency requirements, and — importantly — they are operated and maintained by the state, territory, or tribe: VA cannot answer questions about them, so contact the specific cemetery directly. VA's National Cemetery Administration directory lets you find cemeteries by state, listing both national cemeteries and VA grant-funded cemeteries for that state.",
        flag: "The directory is state-by-state — the link below opens the NCA “Find a Cemetery by State” directory (the address returned during research was one state's page, Virginia); pick your state there.",
        who: "Families who want a Veterans cemetery close to home where no VA national cemetery is nearby.",
        links: [
          { label: "NCA — Find a Cemetery by State", url: "https://www.cem.va.gov/find-cemetery/state.asp?STATE=VA" },
        ],
      },
    ],
  },
];
