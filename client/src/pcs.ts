// PCS Move Center — static reference data transcribed from the researched
// PCS pack (~/workspace/military-app/pcs/pcs.md, researched November 8,
// 2026). Summaries, figures, and links come only from the pack.
//
// Fidelity rules baked into this data:
// - Every ⚠ flag from the pack is preserved: rates and day counts change,
//   DTMO's own FAQ still carries inconsistent older TLE text, the
//   damage-claim filing windows conflict across official pages, and the
//   Tenant Bill of Rights has an older-projects caveat.
// - Weight allowances are CONCEPT level only (grade + dependent status,
//   floor/cap) routing to JTR Table 5-37 — the table is NOT reproduced.
// - AHRN is labeled a private commercial site (its DoD contract ended
//   December 31, 2013); HOMES.mil is the official listing platform.
// - The pack's Excluded list stays excluded — nothing from it appears
//   here, in copy or in figures.

export type PcsLink = { label: string; url: string };

export type PcsEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  flag?: string;
  links: PcsLink[];
  /** In-section cross-reference (the pack's "see entry/group" pointers). */
  refNote?: string;
  /** Extra label rendered as a red badge (e.g. AHRN's private status). */
  alertBadge?: string;
  /** BAH cross-reference: the rate detail also lives in Pay & Money. */
  payRef?: boolean;
};

export type PcsGroup = {
  title: string;
  /** Pack framing note / standing warning for the group. */
  note?: string;
  /** Group 1 renders as a checklist-style phase list. */
  timeline?: boolean;
  entries: PcsEntry[];
};

export const PCS_STANDING_NOTE =
  "A PCS is governed by the Joint Travel Regulations (JTR) — when this section and the JTR disagree, the JTR and your orders win. And the one rule that drives everything else: you cannot schedule a move until your official PCS orders are in hand. A notification or assignment email is not orders — orders carry the authorizations and entitlements everything here keys off of.";

export const PCS_FLAG_NOTE =
  "⚠ marks a detail that changes — rates are re-set annually or mid-year, day limits change by JTR update, and installation pages sometimes carry older rules. Never treat a number here as permanent; check the linked official page and your finance/transportation office for the current version.";

const MOS_PCS: PcsLink = {
  label: "Military OneSource — Planning a PCS Move",
  url: "https://www.militaryonesource.mil/resources/millife-guides/planning-pcs-move/",
};
const DPS_LOGIN: PcsLink = {
  label: "DPS login",
  url: "https://dps.move.mil/cust/standard/user/home.xhtml",
};
const PER_DIEM_LOOKUP: PcsLink = {
  label: "DTMO Per Diem Rate Lookup",
  url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/Per-%20Diem-Rate-Lookup/",
};
const MILEAGE_RATES: PcsLink = {
  label: "DTMO Mileage Rates",
  url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Mileage-Rates/",
};
const BAH_LOOKUP: PcsLink = {
  label: "DTMO BAH Rate Lookup",
  url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup-Alt/",
};
const DLA_EXPLAINER: PcsLink = {
  label: "Military OneSource — Dislocation Allowance",
  url: "https://www.militaryonesource.mil/benefits/military-dislocation-allowance/",
};
const DFAS_CLAIM: PcsLink = {
  label: "DFAS — Where to Submit Your Claim",
  url: "https://www.dfas.mil/MilitaryMembers/travelpay/Where-to-Submit-Your-Claim/",
};
const FORT_CAMPBELL_HHG: PcsLink = {
  label: "Fort Campbell household-goods guidance (Army installation example — your installation's page has your local office's version)",
  url: "https://installations.militaryonesource.mil/military-installation/fort-campbell/moving/household-goods",
};
const DTR_INDEX: PcsLink = {
  label: "DTR attachments index",
  url: "https://www.ustranscom.mil/dp3/pdfs.cfm",
};

export const PCS_GROUPS: PcsGroup[] = [
  {
    title: "The PCS Timeline — Orders to Arrival",
    note: "Official guides break a PCS into the same phases: get orders → build your checklist → decide housing → transportation-office counseling and scheduling → pickup → travel → arrival and in-processing → delivery and damage claims → file your travel claim. The phases below follow that order. Plan My Move (phase 2) turns these phases into a personalized checklist with a calendar view.",
    timeline: true,
    entries: [
      {
        name: "Start With Official Orders in Hand",
        kind: "Military OneSource — PCS Basics",
        summary:
          "OneSource's PCS basics article lays out what orders contain and why they matter: a PCS is a longer-term assignment, generally lasting two to four years, either CONUS (the 48 contiguous states plus DC — Alaska and Hawaii are OCONUS for PCS purposes) or OCONUS. You may hear about the move before orders publish, but you cannot schedule your household-goods move until official orders are in hand, because the orders carry your authorizations and entitlements. The same article points to the Moving Your Personal Property topic center on Military OneSource, which holds the DPS login, the PCS Entitlements pages, and customer-service contacts in one place.",
        who: "Everyone, at notification. Read before calling anyone — most PCS mistakes start with acting on a notification instead of orders.",
        links: [MOS_PCS],
      },
      {
        name: "Plan My Move — Your Custom Official Checklist",
        kind: "Military OneSource",
        summary:
          "Plan My Move is the Defense Department's free online checklist builder. Answer questions about your move and it generates a customized checklist of tasks with links to resources, viewable by topic or as a timeline, with a three-month calendar view of what needs doing when; you can save, print, or export it (PDF, Word, or Excel). Per its FAQ, it does not cover State Department postings.",
        who: "Everyone, the day orders arrive. This is the checklist this timeline mirrors — build yours here and work it in order.",
        links: [{ label: "Plan My Move", url: "https://planmymove.militaryonesource.mil/faq" }],
      },
      {
        name: "Relocation Assistance Program + MilitaryINSTALLATIONS",
        kind: "Military OneSource",
        summary:
          "Every installation's Military and Family Support Center runs a Relocation Assistance Program: free PCS planning consultations, newcomer info, and local help before and after the move — the human backup to the online tools. MilitaryINSTALLATIONS is the companion directory: look up your gaining installation for check-in procedures, housing, schools, temporary lodging, and the phone numbers for its housing and transportation offices.",
        who: "Everyone; especially first-time movers and anyone moving somewhere they've never been. Use MilitaryINSTALLATIONS while deciding housing (Housing Decisions group), and the Relocation Assistance Program at both ends of the move.",
        links: [MOS_PCS],
      },
      {
        name: "Make the Housing Decision Early",
        kind: "Cross-reference",
        summary:
          "Where you'll live drives half the timeline: on-base privatized housing can have waitlists, off-base leases need housing-office review, and your temporary-lodging entitlement (TLE/TLA, Entitlements group) only covers a limited window while you settle. Work the Housing Decisions group of this section during this phase — don't leave housing until the truck is loaded.",
        who: "Everyone, as soon as orders arrive — housing is the longest-lead item in most PCS moves.",
        links: [],
        refNote: "See the Housing Decisions group below; installation housing contacts are in MilitaryINSTALLATIONS (phase 3).",
      },
      {
        name: "Transportation Office Counseling + Set Up DPS or MilMove",
        kind: "Transportation office",
        summary:
          "After orders, your installation transportation office (DMO/TMO/PPSO) counsels you on your entitlements and you schedule the move in the Defense Personal Property System (DPS) — or in MilMove, the newer system used for Global Household Goods Contract moves. The joint help line for both is 833-MIL-MOVE (833-645-6683), with the Defense Transportation Service Center at TRANSCOM-PPA-DTSC@mail.mil. Do not move or store household goods before orders publish — there is no JTR authority to pay for it.",
        who: "Everyone, immediately after orders. Bring your orders; the counseling covers weight allowance, PPM election, POV, and storage.",
        flag: "Two systems exist side by side right now: which one your move runs in depends on your shipment, and your transportation office tells you which.",
        links: [DPS_LOGIN, { label: "Military OneSource moving hub (routes to both systems and the current contacts page)", url: MOS_PCS.url }],
      },
      {
        name: "Pickup Day and the 7-Day Spread Window",
        kind: "Government-arranged move",
        summary:
          "For a government-arranged move, the moving company (Transportation Service Provider, or TSP) packs and picks up within a scheduled window — installation transportation pages note DoD has moved to a seven-day pickup spread window, so your exact pickup day can land anywhere in that window. Inventory everything, photograph condition, and keep the paperwork the crew leaves; it becomes the baseline for any damage claim. Hand-carry essentials — uniforms, documents, medications, chargers — in your vehicle, not the truck.",
        who: "Everyone with a government or partial-PPM shipment, in the final two weeks before departure.",
        links: [FORT_CAMPBELL_HHG],
      },
      {
        name: "Travel Days — Drive or Fly Within Your Authorized Days",
        kind: "Travel",
        summary:
          "Your orders authorize a set number of travel days between stations (the formula is in the MALT entry, Entitlements group). Travel inside those days and you draw per diem and mileage if you drive; take longer and the extra days are leave, not travel days. Keep every receipt from the road.",
        who: "Everyone, departure through arrival. Confirm your authorized travel days with finance before you plan stops.",
        links: [{ label: "DTMO mileage page (states the authorized-travel-days rule)", url: MILEAGE_RATES.url }],
      },
      {
        name: "Arrival and In-Processing",
        kind: "Arrival",
        summary:
          "On arrival: report to your gaining unit as your orders direct, check in with the installation housing office (required before signing an off-base lease at most installations, and the door to on-base housing), and start temporary lodging under TLE or TLA if you don't yet have a home. OCONUS arrivals also complete local registration, medical/dental enrollment, and any command-sponsorship paperwork (Special Cases group).",
        who: "Everyone, arrival day through the first two weeks.",
        links: [],
        refNote: "Your gaining installation's check-in procedures are in MilitaryINSTALLATIONS (phase 3).",
      },
      {
        name: "HHG Delivery — Inspect Before You Sign",
        kind: "Delivery",
        summary:
          "When your shipment delivers, unpack and inspect as it comes off the truck, note every damaged or missing item on the delivery paperwork before signing, and keep the TSP's forms. What you write (or fail to write) at delivery is the foundation of a damage claim.",
        who: "Everyone with a shipment, on delivery day. Do not let the crew rush the signature.",
        links: [],
        refNote: "The full claim process and its flagged deadline conflicts are in the Household Goods group below (Claims for Lost or Damaged Goods).",
      },
      {
        name: "File Your Travel Claim and Close the Move",
        kind: "Travel claim",
        summary:
          "The move isn't done until the travel voucher is filed: DD Form 1351-2 with your orders and receipts claims your per diem, mileage, DLA, TLE/TLA, and pet reimbursement, and PPM movers file their packet (weight tickets, DD 2278) through the transportation office/finance. File promptly after arrival while receipts and paperwork are together.",
        who: "Everyone, immediately after arrival and in-processing.",
        links: [],
        refNote: "See the Money & Claims group below.",
      },
    ],
  },
  {
    title: "Entitlements People Forget",
    note: "⚠ Standing warning for this whole group: every dollar figure and day count below is set in the JTR and re-published on cycles — DLA tables annually, mileage rates annually with occasional mid-year adjustments (DTMO announced a mid-year mileage increase effective July 1, 2026), per diem rates annually. Treat each number as “as published on the research date” and confirm the current figure on the linked DTMO page or with your finance office.",
    entries: [
      {
        name: "DLA — Dislocation Allowance",
        kind: "Military OneSource / DTMO",
        summary:
          "DLA partially reimburses the household expenses of a PCS move that don't fit anywhere else — deposits, utility hookups, the general cost of tearing down one home and setting up another. In plain terms: if you're moving a household on PCS orders and you're not being assigned to single-type government quarters (barracks), you're generally eligible — OneSource's rule of thumb is members who receive BAH, or who are E-5 and above not living in single quarters. Key limits: generally one DLA per fiscal year; no DLA when moving from a civilian home to your first duty station unless you're authorized to move with dependents; no DLA when leaving active duty; a partial DLA exists in narrow cases (for example, being ordered out of government family quarters). An advance is possible: OneSource states you visit your losing installation's finance office 10–15 days before the move, with commander approval, and 80% is paid in advance, the balance after you file at the new installation. Rates are by pay grade and dependent status.",
        who: "Almost every PCS with a household. Ask finance about the advance before you move, not after.",
        links: [
          { label: "OneSource explainer — Dislocation Allowance", url: DLA_EXPLAINER.url },
          {
            label: "⚠ Current DLA rate table (CY2026, re-issued annually — use the table, not memory)",
            url: "http://travel.dod.mil/Portals/119/Documents/DLA/DLA-2026-01-01.pdf",
          },
        ],
      },
      {
        name: "TLE — Temporary Lodging Expense, CONUS",
        kind: "DTMO",
        summary:
          "TLE partially pays for temporary lodging and meals at your old or new duty station inside the U.S. during a CONUS PCS — the hotel-and-food money while you're between homes. Per DTMO: TLE was increased from 14 to 21 days effective November 27, 2024 for moves to a CONUS station, capped at $290 per day, paid as a percentage of the locality per diem depending on who is traveling (65% for one person, 100% for two, +35% for each additional dependent age 12+, +25% under 12). Up to 60 days is possible in a small number of DTMO-approved housing-shortage housing areas. Itemized lodging receipts are required, and you cannot draw TLE and PCS travel per diem for the same day.",
        who: "CONUS PCS movers who need lodging at either end of the move. Claim it on your travel voucher (Money & Claims group).",
        flag: "Day counts vary by location — DTMO's FAQ notes some locations are limited to 7 days under JTR Table 5-13, and older DTMO FAQ text still shows “7 or 14 days” in places. Confirm your exact day count with finance before you book a long stay.",
        links: [
          {
            label: "DTMO FAQ — Temporary Lodging Expenses",
            url: "https://www.travel.dod.mil/Support/ALL-FAQs/article/3174593/temporary-lodging-expenses/",
          },
          {
            label: "DTMO announcement of the 21-day increase",
            url: "https://www.travel.dod.mil/About/News/Article/Article/3981433/dod-authorizes-additional-7-days-to-conus-temporary-lodging-expense/",
          },
        ],
      },
      {
        name: "TLA — Temporary Lodging Allowance, OCONUS",
        kind: "DTMO",
        summary:
          "TLA is TLE's overseas counterpart: it partially pays the higher-than-normal cost of temporary lodging (and meals) when you arrive at or depart from an OCONUS station and can't yet move into permanent housing. It's governed by DoD FMR Volume 7A, Chapter 68, with percentages set in that chapter's tables, and a “TLA-Special” variant requires advance approval up your chain of command — personal inconvenience alone never qualifies. Unlike TLE's flat CONUS day count, TLA is approved in increments by the overseas command based on your housing situation.",
        who: "Anyone PCSing to or from an OCONUS station who will sit in temporary lodging. Start the conversation with the gaining housing office before you arrive.",
        links: [
          {
            label: "DTMO — Temporary Lodging Allowance",
            url: "https://www.travel.dod.mil/Allowances/Temporary-Lodging-Allowance/",
          },
        ],
      },
      {
        name: "Per Diem for Travel Days",
        kind: "DTMO",
        summary:
          "For each authorized travel day you draw per diem at the locality rate for where you stop — lodging plus meals and incidental expenses (M&IE) — instead of saving meal receipts. DTMO's per diem pages carry the current rate for every location and the rules that shape PCS travel, including the 75%-of-M&IE rule that applies on departure and arrival days in the cases the JTR specifies (PCS computations are in JTR Section 0503).",
        who: "Everyone traveling on PCS orders, member and dependents alike (dependent per diem is a percentage of the member's — see Dependent Travel below).",
        flag: "Recent change worth knowing: a JTR update effective July 6, 2026 authorizes lodging for the last day of travel to the new duty station (up to the locality rate, alongside 75% M&IE) — an example of why the linked pages, not memory, govern. Rates are re-set annually; look up your route's rates, don't reuse last move's.",
        links: [PER_DIEM_LOOKUP],
      },
      {
        name: "MALT — Mileage for Driving Your Own Vehicle",
        kind: "DTMO",
        summary:
          "MALT (Monetary Allowance in Lieu of Transportation) pays a per-mile rate when you drive your privately owned vehicle on PCS orders. DTMO is explicit about what it is and isn't: it's a payment based on the official distance between authorized points — not a reimbursement of your actual gas and wear costs — and one MALT payment covers all authorized travelers riding in the vehicle. Authorized travel days (JTR par. 050205): 1 day for the first 400 miles; beyond that, divide the distance by 350 and add a day if the remainder is 51 miles or more.",
        who: "Anyone driving to the new station instead of flying. Paid on your travel voucher (Money & Claims group).",
        flag: "The per-mile rate is set from the IRS standard mileage rate, updated annually and sometimes mid-year (DTMO announced higher rates effective July 1, 2026) — check the page for the rate that applies to your travel dates.",
        links: [MILEAGE_RATES],
      },
      {
        name: "Dependent Travel — Your Family Travels on the Orders Too",
        kind: "JTR",
        summary:
          "Dependents named on your PCS orders travel at government expense: transportation to the new station, and per diem for authorized travel days at JTR percentage rates of the member's per diem. If your dependents travel separately from you — different dates, or unaccompanied — the claim mechanics change (a separate voucher is filed for dependent-only travel), so tell finance before they travel, not after. OCONUS, dependents must also be command sponsored to travel at government expense and draw entitlements at the overseas station — sponsorship is approved by the gaining command and ties into the medical/EFMP screening in the Special Cases group.",
        who: "Any member with dependents on the orders. Sort sponsorship and travel dates during the timeline phase, not travel week.",
        flag: "Percentages and sponsorship rules are JTR/command-specific; the links and your finance office are the authority.",
        links: [{ label: "Per diem rules and rates — DTMO Per Diem Rate Lookup", url: PER_DIEM_LOOKUP.url }],
        refNote: "Voucher routing for dependent claims — see the travel claim entry in the Money & Claims group below.",
      },
    ],
  },
  {
    title: "Household Goods",
    entries: [
      {
        name: "Weight Allowances — Concept Level, Official Table Linked",
        kind: "JTR Table 5-37",
        summary:
          "The government will pack, ship, and store your household goods up to a weight ceiling set by your pay grade and whether you have dependents — that ceiling is JTR Table 5-37 (PCS and non-temporary-storage weight allowances). At concept level: allowances span from 5,000 lbs for junior enlisted without dependents up to a hard cap of 18,000 lbs at the top grades, with most mid-grade members with dependents falling in the 9,000–15,000 lb range. Three concept rules that matter more than the number: (1) professional gear (pro-gear) needed for your duties is authorized separately and does not count against the limit; (2) weight over your allowance is shipped at your expense — the most avoidable bill in a PCS; (3) some OCONUS tours carry administratively reduced allowances set by the theater (unaccompanied tours are the common case — installation pages cite examples as low as 25% of the full allowance on some Korea tours), so an OCONUS mover's real number may be far below the JTR table. The full table is deliberately not reproduced here — your exact figure comes from the JTR table as applied by your transportation office.",
        who: "Everyone, at transportation-office counseling — before you decide what ships, stores, or gets sold.",
        flag: "Do not plan off this summary; your exact figure comes from the JTR table as applied by your transportation office and is printed in your DPS/MilMove counseling.",
        links: [
          {
            label: "Joint Travel Regulations via DTMO (read Chapter 5, Table 5-37)",
            url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/Changes/?smdpage37454=6&smdsort37454=description",
          },
        ],
        refNote: "OneSource's PCS Entitlements pages (Moving Your Personal Property topic center) restate your allowance by grade, and USTRANSCOM's “DPS & Defense Personal Property Program” booklet — linked from installation household-goods pages such as Fort Campbell's (phase 6) — walks through allowances, PPM, storage, POV, and claims in one document.",
      },
      {
        name: "Scheduling the Move — DPS and MilMove",
        kind: "DPS / MilMove",
        summary:
          "Government-arranged shipments, storage, and claims run through the Defense Personal Property System (DPS) at dps.move.mil — the system the old move.mil portal pointed to; move.mil's content has been folded into Military OneSource's Moving Your Personal Property pages. Newer moves under the Global Household Goods Contract run in MilMove instead. In either system you: register with your orders, complete counseling, pick requested pickup dates (subject to the 7-day spread window), track the shipment, and file damage claims after delivery.",
        who: "Everyone with a government shipment, from scheduling through claims.",
        flag: "Both systems are live at once; your transportation office assigns your move to one of them, and the joint customer line for both is 833-MIL-MOVE (833-645-6683).",
        links: [DPS_LOGIN],
      },
      {
        name: "PPM — Personally Procured Move (“DITY Move”)",
        kind: "Personally Procured Move",
        summary:
          "A PPM means you move your household goods yourself — your truck, a rental, a portable container — and the government pays you for doing its job. Per Military OneSource's branch PCS guidance, the monetary allowance is 100% of the Government Constructed Cost — what the government would have paid a moving company for the same shipment — including fuel surcharge and accessorial charges, so a mover who spends less than that amount keeps the difference and one who spends more eats the overage. The mechanics that decide whether you get paid: (1) elect the PPM and get counseled before you move — the key form is DD Form 2278 (Application for Personally Procured Move and Counseling Checklist) through your origin transportation office; (2) you are paid on the weight you actually move, up to your allowance, proven by certified weight tickets — full and empty — the single most-lost PPM document; (3) a partial PPM (you move some, the TSP moves the rest) is allowed.",
        who: "Any rank, any PCS, if you want control of your goods and schedule — best decided at counseling, before pickup.",
        flag: "Never move or store goods before your orders publish — there is no JTR authority to reimburse it, and OneSource says so in plain language.",
        links: [
          {
            label: "Military OneSource branch PCS page (states the 100%-of-GCC allowance and DD 2278 process; the process is joint — the same JTR rules apply across branches)",
            url: "https://www.militaryonesource.mil/moving-pcs/plan-to-move/army-pcs-moving-support/",
          },
        ],
      },
      {
        name: "Claims for Lost or Damaged Goods",
        kind: "DTR Part IV, Attachment K1",
        summary:
          "If the movers lose or break your property, the governing USTRANSCOM publication is the Defense Transportation Regulation, Part IV, Attachment K1 — the “It's Your Move” guide. As K1 states it: note damage at delivery, file your claim directly with the Transportation Service Provider within 9 months of delivery, and timely filing preserves Full Replacement Value coverage — FRV pays the lesser structure of $10,000 per shipment or $6.00 multiplied by the shipment's net weight, up to $75,000, whichever is greater of the two measures as K1 words it. Claims are filed in DPS/MilMove against the shipment.",
        who: "Anyone with loss or damage, starting on delivery day.",
        flag: "⚠ Official pages do not agree on the notice window: K1's 9-month filing window is the program-level rule, but installation pages variously state 180 days to file (USAG Benelux) and older pages still cite a 75-day notice-of-loss/damage window (with DD 1840/1840R forms within 70 days on legal-assistance pages). Those shorter windows appear to be legacy rules still posted. Practical reading: notify at delivery and in the system as early as possible, file well inside 9 months, and confirm your deadline with your transportation office or Military Claims Office — do not rely on any single installation page.",
        links: [
          {
            label: "DTR Part IV, Attachment K1 — “It's Your Move”",
            url: "http://www.business.ustranscom.mil/dtr/part-iv/dtr_part_iv_app_k_1.pdf",
          },
          DTR_INDEX,
        ],
      },
    ],
  },
  {
    title: "Housing Decisions",
    entries: [
      {
        name: "On-Base Housing — Privatized Housing Through the Installation Housing Office",
        kind: "MHPI privatized housing",
        summary:
          "Most on-base family housing is no longer run by the military directly: under the Military Housing Privatization Initiative (MHPI), private companies own and manage the homes under long-term agreements with the services, and you lease from the company. Your door in is still the installation housing office: it manages waitlists, eligibility, and referrals, briefs you on your tenant rights (next entry), and is your escalation path when the company doesn't fix things. Apply as early as your orders allow — waitlists at popular installations run long, and your temporary-lodging clock (TLE/TLA) does not pause for a waitlist.",
        who: "Anyone considering living on base, starting at orders. Your installation's housing office contact is in MilitaryINSTALLATIONS.",
        links: [
          {
            label: "DoD coverage of the revised Tenant Bill of Rights for privatized housing",
            url: "https://www.defense.gov/News/News-Stories/Article/Article/2985853/",
          },
        ],
      },
      {
        name: "MHPI Tenant Bill of Rights — Your 18 Rights in Privatized Housing",
        kind: "10 U.S.C. § 2890",
        summary:
          "Federal law (10 U.S.C. § 2890) requires DoD to give every privatized-housing tenant a Tenant Bill of Rights and a Tenant Responsibilities document, attached to the lease. The Bill of Rights carries 18 rights, including: a home and community meeting health and environmental standards; working fixtures, appliances, and utilities; the unit's maintenance history before you sign; a written lease with clearly defined terms; a plain-language briefing from the housing office before signing and again 30 days after move-in; the right to report problems to the landlord, your chain of command, and the housing office without reprisal; a standardized formal dispute-resolution process; and no non-refundable fees or arbitrarily withheld rent credits.",
        who: "Every tenant of privatized on-base housing — read it before signing the lease; the housing office briefing is your right, not a favor.",
        flag: "One honest limit from the document itself: applying all 18 rights at older projects required the MHPI companies' voluntary agreement — nearly all agreed — so the Bill of Rights tells tenants to confirm with their installation housing office which rights are fully in effect at their specific project.",
        links: [
          {
            label: "MHPI Tenant Bill of Rights (official Navy-hosted copy of the DoD document; the same document is used across services)",
            url: "https://ffr.cnic.navy.mil/Portals/76/Navy%20Housing/Headquarters/PDFs/Revised%20MHPI%20Tenant%20Bill%20of%20Rights%20-%20Effective%2008012021.pdf",
          },
        ],
      },
      {
        name: "DoD Housing Feedback System — Rate Your Housing, Officially",
        kind: "DoD",
        summary:
          "DoD runs an online Housing Feedback System where residents of privatized housing submit feedback that goes into the Department's oversight of the housing companies — the channel DoD built so complaints become data, not just work orders. Use your housing office and chain of command for urgent habitability problems first; use the feedback system so the pattern is on the record.",
        who: "Privatized-housing residents, any time during the tenancy — especially after unresolved maintenance or billing disputes.",
        links: [
          {
            label: "DoD announcement of the Housing Feedback System (the system itself is at dhfs.mil)",
            url: "https://www.defense.gov/news/releases/release/article/3869103/dod-announces-launch-of-online-housing-feedback-system/",
          },
        ],
      },
      {
        name: "Off-Base Renting — The Basics That Protect You",
        kind: "Off-base renting",
        summary:
          "Renting in town is the other main option, and the protective routine is consistent across installations: (1) check in with the installation housing office before you sign — many installations require it, and the office reviews leases, knows problem landlords, and runs rental-partnership programs at some bases; (2) search listings through HOMES.mil (next entry), whose landlord listings are vetted through local housing offices; (3) make sure the lease has a military termination clause and understand your Servicemembers Civil Relief Act (SCRA) protections if orders change; (4) budget against your actual BAH for the new station — BAH is set to cover most, not all, of local housing cost by design.",
        who: "Anyone renting off base, before signing anything or paying a deposit.",
        flag: "Deposit, fee, and tenant-protection law is state and local — the housing office and legal assistance office at your gaining installation are the authorities, not any national summary.",
        links: [],
        refNote: "Installation housing office via MilitaryINSTALLATIONS; listings via the HOMES.mil entry below.",
      },
      {
        name: "HOMES.mil and AHRN — Status, Verified",
        kind: "Listing platforms",
        alertBadge: "AHRN: PRIVATE COMMERCIAL SITE — NOT A DoD PROGRAM",
        summary:
          "HOMES.mil is the current official DoD rental-listing platform. Landlords register free, listings (lease type, pet policy, photos) are approved by the housing office nearest the installation before appearing, and members register to see addresses and landlord contact details. Installation housing pages across the services point members to www.homes.mil today. AHRN is the former system, not a current DoD program: the Automated Housing Referral Network was DoD's referral platform until the Department ended the contract on December 31, 2013; HOMES.mil replaced it, and AHRN.com has continued since as a private, advertising-funded commercial site — usable, but not DoD-sponsored or DoD-vetted.",
        who: "Anyone house-hunting off base, CONUS or OCONUS.",
        flag: "Confusion flag: some current installation and MWR pages still describe AHRN as a DoD program (this research found the wording on Navy pages for Rota) — that copy is outdated; treat HOMES.mil plus your housing office as authoritative.",
        links: [{ label: "www.homes.mil (as printed on official installation housing pages)", url: "https://www.homes.mil" }],
      },
      {
        name: "BAH — Look Up the New Station's Rate",
        kind: "DTMO — cross-reference",
        payRef: true,
        summary:
          "Basic Allowance for Housing is the monthly housing money for members not in government quarters, set by pay grade, dependent status, and the duty station's ZIP code — which is why the housing decision should start with the new station's rate. DTMO's lookup gives the current rate, and two DTMO rules matter during a move: BAH is not intended to cover 100% of housing costs (rates build in roughly 5% member cost-sharing), and individual rate protection means your BAH won't drop below what you were receiving as long as your eligibility status doesn't change. (Overseas stations pay OHA instead — the same DTMO site hosts the OHA lookup.)",
        who: "Everyone not moving into government quarters; check during the housing-decision phase.",
        flag: "Rates are re-set every January 1 — look up the rate for the year you'll actually arrive.",
        links: [BAH_LOOKUP],
      },
    ],
  },
  {
    title: "Special Cases",
    entries: [
      {
        name: "First PCS — From Training to Your First Duty Station",
        kind: "First move",
        summary:
          "Your first move runs on the same JTR rules with two differences that surprise new members. First, DLA: OneSource states there is no DLA for a move from a civilian home to your first duty station unless you are authorized to move with dependents. Second, shipping your things from home of record requires paperwork a veteran mover doesn't need: installation transportation pages (Army example) require a copy of your orders plus your enlistment packet's home-of-record documentation, and most first-time movers must attend a DoD-mandated personal property briefing before anything ships. The Relocation Assistance Program runs first-move counseling — use it; a first PCS is exactly what it exists for.",
        who: "Members moving from initial training (AIT/A-school/tech school) or from home of record to a first permanent duty station.",
        links: [
          { label: "DLA rule — Military OneSource", url: DLA_EXPLAINER.url },
          { label: "First-move / advanced-trainee shipping requirements (Army installation example)", url: FORT_CAMPBELL_HHG.url },
        ],
      },
      {
        name: "OCONUS Moves — Passports and the Official Checklist",
        kind: "OCONUS",
        summary:
          "An overseas PCS adds a paperwork layer CONUS moves don't have: passports (and visas where the host country requires them) for you and every family member traveling, country-specific entry rules, and longer shipping timelines. Military OneSource's service-family OCONUS checklist walks the whole sequence — documents, medical and dental preparation, school records, pets, and arrival tasks — and is the right master list to work alongside your Plan My Move checklist. Start it the week orders arrive: passport processing is the item most likely to gate your family's travel dates.",
        who: "Anyone with orders to or from an OCONUS station (including Alaska and Hawaii), from orders receipt onward.",
        flag: "Requirements are country- and status-of-forces-specific; your orders, losing installation's passport office, and the gaining command's sponsorship package control over any general checklist.",
        links: [
          {
            label: "Military OneSource — A Service Family Checklist for Moving OCONUS",
            url: "https://www.militaryonesource.mil/moving-pcs/living-oconus/a-service-family-checklist-for-moving-oconus/",
          },
        ],
      },
      {
        name: "Overseas Medical, Dental, and EFMP Screening",
        kind: "Cross-reference — the PCS gate",
        summary:
          "Family members cannot simply board the plane on an accompanied overseas tour: all accompanying family members must be medically and educationally screened before family travel is approved, so the gaining location can confirm it can support their needs. Where screening identifies an exceptional medical, educational, or behavioral need, enrollment in the Exceptional Family Member Program (EFMP) is mandatory, and the assignment is reviewed against services available overseas — if services aren't available, command sponsorship can be denied and the tour becomes unaccompanied. The forms and systems are branch-specific: DoD screening uses DD Form 2792 (and DD 2792-1 for school-age children); the Army runs screening on DA Form 5888 through its EFMP portal; the Air Force runs Family Member Travel Screening through myVector. Dental readiness for the member is part of the same clearance process through your military dental clinic. This entry is the PCS gate, not the program guide.",
        who: "Every accompanied OCONUS mover, starting at assignment notification — screening delays are the top cause of slipped family travel dates.",
        flag: "Timing guidance on official installation pages says to start early — up to six months before departure — because reviews pass through multiple EFMP offices; treat exact windows as branch/installation-specific.",
        links: [{ label: "Army EFMP screening portal (branch example)", url: "https://efmp.army.mil" }],
        refNote: "Also work the OCONUS family checklist (previous entry); your installation's EFMP/special-needs pages are in MilitaryINSTALLATIONS.",
      },
      {
        name: "Pet Transportation — Reimbursement Now Exists",
        kind: "DTMO — JTR par. 050107",
        summary:
          "Since January 1, 2024, the JTR (par. 050107) authorizes reimbursement for moving one household pet — a cat or a dog — on PCS orders: up to $550 for a CONUS move and up to $2,000 for an OCONUS move, claimed on your travel voucher with receipts. Covered costs are the transportation-related ones the DTMO FAQ lists (shipping, quarantine, mandatory microchipping, required testing, boarding and licensing tied to the move). Two edges in the FAQ: the order's effective date must be on or after January 1, 2024, and from certain listed high-risk locations where neither Patriot Express nor commercial pet service is available, reimbursement up to $4,000 is possible with Secretarial Process approval (orders effective on or after November 25, 2024). Everything beyond one pet, and every cost above the caps, is out of pocket. For country entry rules (vaccines, quarantine, breed bans), USDA APHIS's pet-travel pages carry per-country requirements.",
        who: "Pet owners on any PCS; plan pet logistics at the same time as HHG, not after.",
        flag: "Caps and the eligible-location list are JTR-set and change — verify against the FAQ before booking an expensive commercial pet shipper.",
        links: [
          {
            label: "DTMO FAQ — Pet Transportation Allowance",
            url: "https://www.travel.dod.mil/support/all-faqs/article/3624131/pet-transportation-allowance/",
          },
          { label: "USDA APHIS pet travel", url: "https://www.aphis.usda.gov/pet-travel" },
        ],
      },
      {
        name: "Patriot Express Pet Spaces — First-Come, Very Limited",
        kind: "Air Mobility Command",
        summary:
          "Members traveling overseas on PCS orders typically fly the Patriot Express — DoD's chartered airlift — and dogs and cats can ride it, at the owner's expense, under Air Mobility Command rules carried on official installation pages: pet movement is limited to passengers in PCS status, maximum two pets per family, and pet space is very limited and booked first-come, first-served through your transportation office — installation guidance puts pet-space booking in the same 90–120-day-out window as passenger reservations, so ask the day you book yours. Fees are by combined pet-plus-kennel weight (as published on MilitaryINSTALLATIONS shipping-pets pages: $125 up to 70 lbs, $250 at 71–140 lbs, $375 at 141–150 lbs; over 150 lbs not accepted), owners supply an approved kennel and all health/vaccination and entry documentation, and in-cabin carriage is limited to very small pets. If no space is available, pets travel commercially at your expense (with the pet reimbursement caps in the previous entry applying).",
        who: "OCONUS PCS families with a dog or cat, at flight-booking time — early, by design.",
        flag: "Fees and rules are AMC-set and the pages themselves warn they are subject to change — confirm with your transportation office.",
        links: [
          {
            label: "MilitaryINSTALLATIONS shipping-pets guidance, including AMC pet travel (your gaining/losing installation's page carries its local version)",
            url: "https://installations.militaryonesource.mil/military-installation/naval-station-norfolk/moving/shipping-pets",
          },
        ],
      },
      {
        name: "POV Shipment and Storage — One Vehicle, OCONUS-Driven",
        kind: "USTRANSCOM / PCSmyPOV",
        summary:
          "The government ships one privately owned vehicle at its expense on PCS orders to, from, or between OCONUS locations, through USTRANSCOM's Global POV Contract — the contractor is International Auto Logistics and the official customer site is PCSmyPOV.com, where you book Vehicle Processing Center (VPC) turn-in/pickup appointments, prep requirements, and tracking. Eligibility gates from the official turn-in guidance (DTR Part IV, Attachments K3/K4): your orders must authorize shipment, the host country must allow import, and the vehicle must meet the Personal Property Consignment Instruction Guide (PPCIG) requirements for that country, be operable and clean, and have no open safety recalls. If shipment is restricted on your tour, storage at government expense may be authorized instead — storage needs its own authorization letter from your transportation office and orders stating storage is authorized. For CONUS-to-CONUS moves there is no government vehicle shipment: you drive it (MALT) or ship commercially at your own expense.",
        who: "OCONUS movers deciding the car question; VPC appointments belong on the early timeline.",
        flag: "The 20-measurement-ton size limit for shipped POVs appears in official program material — verify your vehicle's eligibility on PCSmyPOV before assuming it ships.",
        links: [
          {
            label: "PCSmyPOV — VPC locations (appointments and prep guides at www.pcsmypov.com)",
            url: "https://www.pcsmypov.com/locations",
          },
          { label: "DTR index — governing attachments K3 (shipping) / K4 (storage)", url: DTR_INDEX.url },
        ],
      },
      {
        name: "Single Members — Barracks, BAH, and the Move Off-Base",
        kind: "Single members",
        payRef: true,
        summary:
          "Single members PCS differently in three ways worth knowing. (1) DLA: generally not payable when you're assigned to single-type government quarters (barracks/dorms) at the new station. (2) BAH: members in single quarters typically draw only partial BAH — or BAH-DIFF if they're in single quarters and authorized BAH solely because they pay child support (DTMO's BAH pages define both). (3) Moving off-base: when your gaining command authorizes you to live off-base (rules vary by grade, branch, and installation occupancy), your BAH switches to the full without-dependent rate for the new station's ZIP and your move becomes a normal household move — TLE can cover the gap while you apartment-hunt.",
        who: "Unaccompanied members, and any member whose gaining-station housing is single quarters.",
        flag: "Barracks eligibility and off-base authorization are set by your branch and gaining command, not the JTR alone — confirm with the gaining housing office before signing a lease.",
        links: [{ label: "DTMO BAH page (partial BAH and BAH-DIFF are defined in its non-locality rates)", url: BAH_LOOKUP.url }],
      },
    ],
  },
  {
    title: "Money & Claims",
    entries: [
      {
        name: "The Travel Claim — DD Form 1351-2",
        kind: "DFAS",
        summary:
          "Everything in the Entitlements group is collected on one form: the DD Form 1351-2, Travel Voucher, filed after arrival with your complete orders (all pages and amendments) and supporting receipts. DFAS's “Where to Submit Your Claim” page is the router: SmartVoucher — DFAS's guided online tool that builds the 1351-2 from interview answers — serves military PCS travelers (log in with CAC or myPay credentials); Travel Voucher Direct takes manual claims for the categories DFAS lists; DTS is for TDY, not PCS. Use the current form version — DFAS's page offers the November 2025 edition of the form — and set split disbursement on the voucher so the reimbursement pays your GTCC balance directly (next entry). Dependents who traveled separately are claimed as DFAS directs on the same page. Pet expenses, TLE/TLA lodging, per diem, and MALT all ride this voucher — one filing, every receipt.",
        who: "Everyone, immediately on arrival. Your gaining finance office reviews PCS vouchers — file through the channel it directs if it differs.",
        links: [DFAS_CLAIM, { label: "SmartVoucher", url: "https://smartvoucher.dfas.mil/voucher/" }],
      },
      {
        name: "GTCC — Government Travel Charge Card Rules at Concept Level",
        kind: "DTMO",
        summary:
          "DoD policy runs official travel — including PCS travel — through the Government Travel Charge Card: DTMO's program pages state the card is to be used for official travel expenses, that personal use is prohibited and can bring disciplinary action, and that split disbursement is mandatory, meaning your voucher reimbursement pays the card balance directly rather than passing through your bank account. Your first point of contact for card problems is your unit's Agency Program Coordinator (APC); accounts are managed through CitiManager, and delinquent accounts are suspended — which is why prompt filing matters: the card bill comes due whether your voucher has paid or not.",
        who: "Every cardholder PCSing; confirm card status and limit with your APC during the timeline phase.",
        flag: "Card limits, activation, and PCS-specific instructions come from your APC and orders — get them before you travel, not at the hotel desk.",
        links: [
          {
            label: "DTMO program page — Government Travel Charge Card",
            url: "https://www.travel.dod.mil/Programs/Government-Travel-Charge-Card/",
          },
          {
            label: "DTMO FAQ — Government Travel Charge Card",
            url: "https://www.travel.dod.mil/Support/ALL-FAQs/Article/2906320/government-travel-charge-card/",
          },
        ],
      },
      {
        name: "Receipts — What to Keep, From DFAS's Own Checklist",
        kind: "DFAS",
        summary:
          "DFAS's voucher guidance sets the evidence standard, and lost receipts are the top reason PCS claims shrink: itemized lodging receipts are always required (for TLE/TLA, the receipt must show each day's charges and a zero balance); receipts are required for any single expense of $75 or more; if a required receipt is genuinely lost, DFAS accepts a signed statement in lieu of receipt explaining it — a partial fix, not a plan. PCS-specific paper to guard with your life: PPM certified weight tickets, full and empty; HHG inventory and delivery paperwork; pet expense receipts; POV VPC documents; and every page of your orders with amendments. Photograph everything the day you receive it.",
        who: "Everyone, from the first counseling appointment to claim payment.",
        links: [
          { label: "DFAS claim page (links the current form, instructions, and required-document lists)", url: DFAS_CLAIM.url },
        ],
      },
      {
        name: "Advances — Money Before the Move, Settled After",
        kind: "Advances",
        summary:
          "Some PCS money can come to you before or during the move instead of after: the DLA advance (80% with commander approval, arranged at the losing installation's finance office 10–15 days out) and travel advances drawn against expected per diem/mileage. Every advance is settled against your DD 1351-2: claim less than you advanced and you repay the difference, so an advance is a timing tool, not extra money.",
        who: "Anyone whose move costs land before payday does — arrange during the timeline phase, not moving week.",
        flag: "Advance percentages, approval levels, and request channels are set by your service's finance policy — the figures above are OneSource's statement of the DLA advance; confirm your service's process with finance before counting on the cash.",
        links: [DLA_EXPLAINER],
      },
    ],
  },
];
