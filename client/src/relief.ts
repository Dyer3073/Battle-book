// Relief Societies — transcribed from the researched pack
// (~/workspace/military-app/relief/relief.md, researched Nov 9, 2026).
// The pack is the content source of truth: 24 entries (4 shared +
// 5 AER + 5 NMCRS + 5 AFAS + 5 CGMA). THE MONEY DISCIPLINE: every
// dollar figure is a cap or range a society itself publishes, printed
// with its source and a verify-current flag; no entry promises an
// outcome — each society decides loan vs. grant vs. a combination
// case by case. Binding dated facts: AER no longer routes through
// the American Red Cross (Soldier Portal Help is the after-hours
// emergency-travel route); AER emergency-travel airfare is a 100%
// grant effective Jan 1, 2025; AFAS restructured June 1, 2025 (Falcon
// folded into Standard Assistance); the CGMA Education Loan prints
// ONLY at CGMA's official figure — the lower cap circulating in
// non-official guides is excluded and never printed on that card.
// Placement: members and spouses in full (the societies serve
// families and surviving spouses directly); future members see a
// locked card only.

import type { PackSection } from "./seven";

const VC = "Verify current — caps change; the society's live page holds the current number.";

export const RELIEF_SECTION: PackSection = {
  view: "relief",
  title: "Relief Societies",
  headSub:
    "Emergency help from your own service: four independent charities — AER, NMCRS, AFAS, CGMA — giving interest-free loans, grants, or a combination, decided case by case. Not the government, and not a promise: each society decides.",
  intro:
    "Each service has exactly one official relief society, and all four describe themselves the same way underneath different wording: an independent 501(c)(3) nonprofit, funded by donations (heavily from their own service members, through each service's annual fund drive), giving interest-free loans, grants, or a combination, decided case by case. None is a government agency; none charges interest; none requires you to have donated before it will help you.",
  standing:
    "Every dollar figure in this section is a cap or range a society itself publishes, printed with its source — caps change, so verify the current number on the society's live page before you count on it. Nothing here says or implies that any reader will be approved, or for how much.",
  tiles: [
    {
      key: "shared",
      label: "Read This First",
      tileSub: "Entries 1–4 · the four societies, after-hours routes, who is really eligible",
      intro:
        "The shared frame: which society is yours, what happens at night and on weekends (the routes differ by society — they are NOT all the same), why eligibility is broader than most people assume, and how loan-vs-grant decisions and speed actually work.",
      entries: [
        {
          id: "relief-four-societies",
          name: "Four societies, one per service family — independent charities, not the government",
          summary:
            "Relief society search terms: AER, NMCRS, AFAS, CGMA, military aid society, emergency assistance. Army Emergency Relief (1942), Navy-Marine Corps Relief Society (1904), Air & Space Forces Aid Society (1942), and Coast Guard Mutual Assistance (1924) — one per service family.",
          who: "Everyone, before drilling into a single society — this is the section's orientation card.",
          body: [],
          tables: [
            {
              caption: "The four societies — as each frames itself",
              columns: ["Service family", "Society", "Its own framing"],
              rows: [
                ["Army", "Army Emergency Relief (AER) — Soldiers + families, founded 1942", "“The Official Nonprofit of the U.S. Army”; private 501(c)(3); receives no federal funding (AER FAQ)."],
                ["Navy + Marine Corps", "Navy-Marine Corps Relief Society (NMCRS) — Sailors, Marines + families, founded 1904", "501(c)(3); ~90% volunteer workforce (nmcrs.org)."],
                ["Air Force + Space Force", "Air & Space Forces Aid Society (AFAS) — Airmen, Guardians + families, founded 1942", "“The Official Charity of the U.S. Air Force and U.S. Space Force”; private nonprofit (AFAS annual reports)."],
                ["Coast Guard", "Coast Guard Mutual Assistance (CGMA) — the whole Coast Guard community, founded 1924", "“Official Relief Society of the U.S. Coast Guard”; 501(c)(3), 100% donor funded, no federal or state funds (CGMA campaign FAQ) — the broadest charter of the four."],
              ],
            },
          ],
          flags: [],
          links: [
            { label: "Army Emergency Relief", url: "https://www.armyemergencyrelief.org" },
            { label: "Navy-Marine Corps Relief Society", url: "https://www.nmcrs.org" },
            { label: "Air & Space Forces Aid Society", url: "https://afas.org" },
            { label: "CGMA programs (mycgma.org)", url: "https://mycgma.org" },
          ],
          source: "The four official relief-society sites",
        },
        {
          id: "relief-after-hours",
          name: "The after-hours bridge — the American Red Cross, per society (they are NOT all the same)",
          summary:
            "After-hours search terms: emergency help at night, Red Cross military assistance, weekend emergency travel. When an office is closed and the emergency can't wait, the published route differs by society — print each society's own route; do not generalize. AER's route changed: AER requests are NO LONGER processed through the American Red Cross.",
          who: "Anyone with a night/weekend/holiday emergency — the single most time-sensitive fact in this section.",
          body: [],
          bullets: [
            { title: "NMCRS — YES, explicitly", text: "“If you need emergency travel assistance outside of our business hours… contact our partner, the American Red Cross at 877-272-7337. The Red Cross serves as NMCRS's after-hours liaison, issuing assistance on our behalf using NMCRS funds.” (nmcrs.org/get-help.)" },
            { title: "AFAS — YES, via cross-servicing", text: "AFAS “maintains cross-servicing agreements with the Army Emergency Relief, the Navy-Marine Corps Relief [Society], the Coast Guard Mutual Assistance and the American Red Cross to offer emergency assistance 24 hours a day, 365 days a year” (afas.org). Its published after-hours route is the Red Cross at 1-877-272-7337, selecting the financial assistance option, and AFAS reimburses the agency that disburses." },
            { title: "CGMA — PARTIAL, as published", text: "CGMA's verified Red Cross route is for retirees, who “can apply with the CGMA Representative at the nearest CG unit or at a local American Red Cross” (mycgma.org retired-military page). CGMA's standing route is its local Representative network + the CGMA Portal (the CGMA tile)." },
            { title: "AER — NO LONGER", text: "AER's current Request Assistance page states, in bold: “AER financial assistance requests are no longer processed through the American Red Cross or other Military Service Aid Society offices.” AER's published after-hours route for emergency travel is the Soldier Portal Help desk — “Report an Issue” — during non-business hours, weekends, and holidays." },
          ],
          flags: [
            "Dated change, printed as dated: AER's no-longer-Red-Cross posture is current as of Nov 9, 2026 (armyemergencyrelief.org/offices/; the change is also described in AER's March 2025 campaign coverage). Older AER materials (2019 annual report; 2022 garrison articles) describing Red Cross 24-hour processing of AER cases are superseded — not printed as current.",
            "A general after-hours Red Cross bridge for all CGMA clients was not explicitly published on the CGMA pages checked Nov 9, 2026 — none is printed here.",
          ],
          links: [
            { label: "NMCRS — Get Help", url: "https://www.nmcrs.org/get-help" },
            { label: "AER — Offices / Request Assistance", url: "https://www.armyemergencyrelief.org/offices/" },
            { label: "CGMA — Retired military personnel", url: "https://mycgma.org/get-help/retired-military-personnel/" },
          ],
          source: "The four societies' own after-hours statements",
        },
        {
          id: "relief-eligibility-broad",
          name: "You do not have to be broke, senior, or a donor — eligibility is broad, as published",
          summary:
            "Eligibility search terms: can I get help, any rank, retirees, surviving spouses, do I have to donate. The facts the societies themselves publish, stated plainly because they are the reason people don't ask.",
          who: "The reader who assumes “that's not for people like me.” It usually is.",
          body: [],
          bullets: [
            { title: "Any rank", text: "AER: “Any Soldier, regardless of rank” in the listed categories can seek assistance. The other three publish no rank floor or ceiling either — eligibility turns on status (active / retired / survivor / family), not grade." },
            { title: "Retirees are in", text: "All four societies cover retired members and their families (AFAS marks retiree help “limited assist”; CGMA covers longevity and disability retirees, TDRL/PDRL included)." },
            { title: "Surviving spouses are in", text: "All four cover surviving spouses (AER: spouses who have not remarried; NMCRS: surviving spouses of deceased members; AFAS lists widow/widower outright; CGMA lists surviving spouses as a core eligibility class) — and AER, NMCRS, and CGMA extend education help to survivors' children as well." },
            { title: "You don't have to have given", text: "AER FAQ: “Do I have to contribute to AER to receive assistance? No. All eligible requests will be considered regardless of prior contributions.”" },
            { title: "Guard/Reserve coverage is real but framed differently by each", text: "AER: Title 10 orders over 30 days (incl. AGR tours); NMCRS: reservists on extended active duty of 30+ days (financial assistance); AFAS: Guard/Reserve “regardless of duty status” (current afas.org); CGMA: drilling reservists and even IRR members, varying by program." },
            { title: "CGMA goes furthest", text: "It is the only one of the four that also covers its service's civilian employees and Auxiliary members (the CGMA tile)." },
          ],
          flags: [],
          links: [],
          source: "The four societies' published eligibility pages",
        },
        {
          id: "relief-loan-grant-speed",
          name: "Loan, grant, or both — the society decides, and speed is published, outcomes are not",
          summary:
            "How it works search terms: loan or grant, how fast, same day help, budget review. All four give help as an interest-free loan, a grant, or a combination, and all four decide which — based on the need and a budget review — themselves.",
          who: "Everyone — sets expectations before the first per-society card.",
          body: [
            "Published speed claims (the societies' own words, printed as claims, not promises): AER — “Assistance may be provided same day. Assistance is always provided within 48 hours” (AER FAQ); NMCRS — help “most times on the same day” (nmcrs.org); AFAS — allow 24–72 hours for a caseworker response after applying (AFAS Standard Assistance page); CGMA — applications “typically processed within 3 to 5 days” (CGMA 2025 Winter Newsletter — dated; emergency routes run through local Representatives, not the portal queue). A budget is part of the process everywhere: AFAS requires one for Standard Assistance; NMCRS caseworkers build one with you as part of free budget counseling; CGMA requires documentation and justification for every request.",
          ],
          flags: [`CGMA's 3-to-5-day processing figure is from its 2025 Winter Newsletter — dated. ${VC}`],
          links: [],
          source: "The four societies' published process pages",
        },
      ],
    },
    {
      key: "aer",
      label: "Army — AER",
      tileSub: "Entries 5–9 · eligibility, 30+ categories, QAP, scholarships",
      intro:
        "Army Emergency Relief, per AR 930-4 as AER publishes it. Two dated facts lead: emergency-travel airfare is a 100% grant effective January 1, 2025, and AER requests are no longer processed through the American Red Cross — the after-hours emergency-travel route is Soldier Portal Help.",
      entries: [
        {
          id: "aer-who",
          name: "AER — who it serves (per AR 930-4, as AER publishes it)",
          summary:
            "AER eligibility search terms: who can use AER, AR 930-4. AER publishes its eligibility straight from Army Regulation 930-4, and its own summary line is: “Any Soldier, regardless of rank, and their eligible military identification card-holding dependents in the categories listed above can seek assistance from AER.”",
          who: "Army active, Guard/Reserve on qualifying orders, retirees, survivors.",
          body: [],
          bullets: [
            { text: "Soldiers on active duty and their eligible dependents." },
            { text: "Soldiers retired for longevity, medical retirement, or upon reaching age 60 (reserve component) and their eligible dependents — including retired Army Reserve / National Guard Soldiers receiving retired pay, and medically retired Soldiers on the PDRL or TDRL." },
            { text: "Army Reserve and National Guard Soldiers activated on Title 10 orders for more than 30 days (including AGR tours) and their eligible dependents." },
            { text: "Surviving spouses who have not remarried, and children of Soldiers who died on active duty or after reaching retirement eligibility." },
          ],
          flags: [],
          links: [{ label: "AER — Assistance (eligibility + FAQ)", url: "https://www.armyemergencyrelief.org/assistance/" }],
          source: "AER (armyemergencyrelief.org), per AR 930-4",
        },
        {
          id: "aer-what",
          name: "AER — what it provides: zero-interest loans and grants across 30+ published categories",
          summary:
            "AER categories search terms: what does AER cover, emergency travel grant, rent help. AER provides zero-interest loans, grants, or a combination; “all assistance requests are unique and considered on an individual basis.” Emergency travel airfare is now a full grant: effective January 1, 2025, active-duty emergency travel airfare moved from 50% loan / 50% grant to 100% grant.",
          who: "Any eligible Soldier/family facing a listed emergency need.",
          body: [
            "AER's published category list (complete as published): emergency travel; natural disaster preparation and evacuation; mortgage, rent and initial deposit; temporary lodging; food; medical co-pays not covered by TRICARE; vehicle costs; utilities; funeral expenses; basic essential furniture; appliance costs; cranial helmets; PCS travel; child car seats; dental care for dependents; home repair; non-medical attendant travel; invitational travel orders; clothing; immigration and passport fees for dependents; special needs medical equipment; spouse relicensing and recertification; childcare (Army Fee Assistance enrollment required).",
            "What AER says it does NOT cover (published list, condensed): divorce/marriage costs; education expenses by loan (scholarships instead — the AER education entry); purchase or lease of a vehicle and its taxes/registration/insurance; ordinary leave or vacation; debt consolidation/liquidation; business ventures; replacing overdrawn funds; most court fees/fines/legal fees (exception: to prevent immediate privation of family members); luxury/convenience goods; continuing assistance; abortion. “Exceptions apply — talk to your chain of command / nearest AER officer.”",
          ],
          flags: [
            `No general cap — with one published texture figure. AER FAQ: “There is no upper limit for AER support; however, the most common assistance we provide is $1,500 for a 15-month loan.” FAQ texture, not a cap. ${VC}`,
            "Dated policy: the 100% emergency-travel airfare grant is AER Policy Memorandum 2024-4, effective January 1, 2025; the memo keeps the 50/50 structure (grant never below 50%) for airfare above the grant caps and for other travel expenses.",
          ],
          links: [{ label: "AER — Assistance", url: "https://www.armyemergencyrelief.org/assistance/" }],
          source: "AER (armyemergencyrelief.org)",
        },
        {
          id: "aer-apply",
          name: "AER — how to apply, the Quick Assist Program, and the after-hours route",
          summary:
            "Apply for AER search terms: AER application, Quick Assist Program, QAP $2,000, Soldier Portal. Apply online anytime, visit an AER officer at Army installations worldwide, or — for a fast chain-of-command loan — the Quick Assist Program: a company commander or first sergeant can approve a zero-interest loan up to $2,000.",
          who: "Army — the application card.",
          body: [],
          bullets: [
            { title: "Online Assistance Application", text: "Apply anytime, from anywhere (aerprod.powerappsportals.us, linked from AER's site); the request is routed to HQ AER or the nearest AER office by the ZIP code provided. Application help line: 571-389-7137 or 866-878-6378, Ext #1 (Mon–Fri, 7:30 a.m.–3:30 p.m. EST)." },
            { title: "Visit an AER officer", text: "AER's finder is its /offices/ page: enter ZIP, city, or installation in the map search and click the pin for contact details. If no AER office is within a 50-mile commuting radius, AER directs you to the Online Assistance Application. Locator verdict: VERIFIED ROUTE — armyemergencyrelief.org/offices/ is itself the finder; link that page." },
            { title: "Quick Assist Program (QAP)", text: "Maximum $2,000, one QAP loan at a time, no more than 2 in a 12-month period, repayment in 15 months or less, completed 60 days before ETS (AER Form 101, March 2025 edition; AER's March 2025 campaign article)." },
            { title: "Direct Access", text: "AER's FAQ names a Direct Access route (Soldiers who have completed Initial Entry Training with one year of service and no high-risk behavior; limit two Direct Access assists per 12 months)." },
            { title: "After hours", text: "AER requests are no longer processed through the American Red Cross or other aid societies. For emergency travel outside business hours, AER publishes: go to Soldier Portal Help (helpdesk.aerhq.org) and select “Report an Issue.”" },
          ],
          flags: [
            `QAP caps and rules are form-edition-dated (Form 101, March 2025). ${VC}`,
            "A dollar ladder for Direct Access/garrison/HQ approvals appears in a 2022 AER article — dated; not printed as current.",
          ],
          links: [
            { label: "AER — Assistance", url: "https://www.armyemergencyrelief.org/assistance/" },
            { label: "AER — Offices (the finder)", url: "https://www.armyemergencyrelief.org/offices/" },
          ],
          source: "AER (armyemergencyrelief.org)",
        },
        {
          id: "aer-education",
          name: "AER — education: three named scholarship programs",
          summary:
            "AER scholarships search terms: Shinseki spouse scholarship, Ursano scholarship, Pentagon Victims. AER states it provides over $13 million in educational scholarships every year. Eligibility across programs: spouses and children of Soldiers who are active duty, deceased active, retired, deceased retired, medically retired, Grey Area retirees, or AGR/USAR on Title 10 orders for the full academic year; applicants must be DEERS-listed dependents pursuing a first undergraduate degree or technical certification at an accredited institution (trade schools acceptable). A FAFSA Submission Summary is required; awards vary yearly with applicant volume and budget.",
          who: "Army spouses and dependent children planning school.",
          body: [],
          bullets: [
            { title: "Mrs. Patty Shinseki Spouse Scholarship Program", text: "Spouses without a four-year degree, pursuing a first undergraduate degree or first technical certification; up to 4 academic years full-time / 8 part-time; apply year-round (no deadlines), re-apply yearly." },
            { title: "Maj. Gen. James Ursano Scholarship Program for Dependent Children", text: "Children under 24, first undergraduate degree or technical certification, up to 4 academic years full-time; re-apply yearly." },
            { title: "Pentagon Victims Scholarship Program", text: "AER contacts those eligible first; no application timeline or deadline." },
          ],
          flags: ["Dated cycle: the Ursano 2026–2027 cycle runs January 1 – April 1, 2026 (scholarships page, as published Nov 9, 2026) — re-verify each cycle."],
          links: [{ label: "AER — Scholarships", url: "https://www.armyemergencyrelief.org/scholarships/" }],
          source: "AER (armyemergencyrelief.org)",
        },
        {
          id: "aer-other",
          name: "AER — other named programs + governance and the Annual Campaign",
          summary:
            "AER programs search terms: wounded warrior comfort grant, childcare assistance, career skills, financial frontline, AER campaign. AER is “a private non-profit 501(c)(3) organization and does not receive federal funding” (FAQ) — “an independent private entity, not part of the U.S. Government,” founded February 5, 1942.",
          who: "Army — the extras + “who runs this” card.",
          body: [],
          bullets: [
            { title: "Wounded Warrior Comfort Grants", text: "A $1,000 grant at the time of hospitalization for Soldiers medically evacuated from a hostile-fire/imminent-danger area, peacekeeping operation, or CONUS training exercise." },
            { title: "Childcare Assistance", text: "Up to $1,500 ($500/month for three months), for families enrolled in Army Fee Assistance who demonstrate need via a budget, in addition to that program's help." },
            { title: "Career Skills Support Program grants", text: "$250–$1,000 (by location) for retiring/separating Soldiers in the Army's Career Skills Program (travel, attire, tools, lodging, utilities, food)." },
            { title: "Survivor Assistance Program", text: "Grants for surviving spouses and children, with monthly stipends possibly available for the most destitute (AER's wording; no amount published)." },
            { title: "Financial Frontline", text: "Soldiers with AER loans can earn credit toward the balance by completing the Army's financial training videos and scoring 80+ on the Loan Portal test within 90 days of loan creation: up to $200 (specialists/corporals and below) or $100 (sergeants and above), never exceeding the balance." },
            { title: "Fund drive", text: "AER does not participate in the Combined Federal Campaign — “The Army hosts an annual AER fundraising campaign each year” (FAQ). The AER Annual Campaign runs March 1 – June 14 (2026 campaign page), with year-round giving at AAFES registers and on AER's site." },
          ],
          flags: [
            "Event-driven, dated: AER's government-shutdown page (Oct 2025 lapse) offered a zero-interest loan of one net paycheck up to $6,000 if the Oct 15, 2025 payday was missed. Printed only as a dated example of how AER responds to a lapse — not a standing program.",
          ],
          links: [
            { label: "AER — Assistance", url: "https://www.armyemergencyrelief.org/assistance/" },
            { label: "AER — Annual Campaign", url: "https://www.armyemergencyrelief.org/campaign/" },
          ],
          source: "AER (armyemergencyrelief.org)",
        },
      ],
    },
    {
      key: "nmcrs",
      label: "Navy & Marines — NMCRS",
      tileSub: "Entries 10–14 · one society for both sea services, QAL, education",
      intro:
        "The Navy-Marine Corps Relief Society (since 1904) covers both sea services — a Marine's relief society is NMCRS, not a Marine-only organization. Its after-hours Red Cross bridge is the cleanest published of the four.",
      entries: [
        {
          id: "nmcrs-who",
          name: "NMCRS — who it serves",
          summary:
            "NMCRS eligibility search terms: who can use NMCRS, Marines relief society. NMCRS states it plainly on its Get Help page: “Most of our services are available to active duty and retired Sailors, Marines and family members with a military ID card.”",
          who: "Navy and Marine Corps active, retired, qualifying reserve, survivors, families.",
          body: [
            "Financial assistance extends to reservists on extended active duty of 30 days or more, and the surviving spouses of deceased service members. Education assistance is also available to surviving children of Sailors and Marines who passed on active duty or after retirement.",
          ],
          flags: [],
          links: [{ label: "NMCRS — Get Help", url: "https://www.nmcrs.org/get-help" }],
          source: "NMCRS (nmcrs.org)",
        },
        {
          id: "nmcrs-what",
          name: "NMCRS — what it provides: interest-free loans and grants, usually fast",
          summary:
            "NMCRS help search terms: NMCRS loan, quick assist loan, QAL. NMCRS provides interest-free loans and grants for unexpected financial hardship — “most times on the same day” (nmcrs.org) — plus named Emergency Travel and Disaster & Critical Event Relief lines.",
          who: "Sailors/Marines with an immediate, documented need.",
          body: [],
          bullets: [
            { title: "Everyday living", text: "Food, rent, utilities." },
            { title: "Car", text: "Repairs, registration, and insurance." },
            { title: "PCS", text: "PCS moves and setting up a new household." },
            { title: "Medical/dental", text: "Expenses not covered by insurance." },
            { title: "Funeral expenses", text: "As published." },
            { title: "Emergency Travel", text: "“We can help you get home — fast” (Get Help page)." },
            { title: "Disaster & Critical Event Relief", text: "After a hurricane, flood, or fire: food, housing, household essentials." },
            { title: "Quick Assist Loan (QAL)", text: "Official U.S. Navy sources (navy.mil news; DVIDS) publish the QAL as an interest-free loan of up to $500, no appointment or application fee, in-person for active-duty Sailors/Marines, processed in roughly 15–20 minutes; published conditions: no outstanding NMCRS loan, no disciplinary action in the past 6 months impacting pay or rank, enough contract time left to repay, repayment within 10 months." },
          ],
          flags: [
            `QAL — conflicted sourcing: the QAL does not appear on nmcrs.org as redesigned (checked Nov 9, 2026), and a higher figure circulating in non-official base-guide summaries is excluded as unverified. The $500 figure prints only with its navy.mil/DVIDS source. ${VC}`,
          ],
          links: [
            { label: "NMCRS — Interest-free Loans & Grants", url: "https://www.nmcrs.org/get-help/financial-assistance/interest-free-loans-grants" },
            { label: "NMCRS — Get Help", url: "https://www.nmcrs.org/get-help" },
          ],
          source: "NMCRS (nmcrs.org); QAL per navy.mil / DVIDS",
        },
        {
          id: "nmcrs-apply",
          name: "NMCRS — how to apply, the office locator verdict, and the Red Cross bridge",
          summary:
            "Apply NMCRS search terms: NMCRS office near me, find NMCRS, Red Cross 877-272-7337. In person, by appointment at an NMCRS office (200+ locations ashore and afloat, per NMCRS brand materials). Bring: military ID, emergency leave papers (for travel cases), or a copy of your pay stub / LES.",
          who: "Navy/Marine Corps — the application card.",
          body: [
            "Locator verdict: HOMEPAGE ROUTE. NMCRS office pages genuinely live under nmcrs.org/locations/<slug> — verified across many offices — but the slug formation varies (some bare city, some city-state, one legacy /locations/entry/ URL), so a constructed deep link can 404. The app links the “Find the office near you” finder on nmcrs.org (Country + Service selectors on the homepage) and lets NMCRS's own search resolve the office.",
            "After hours — the cleanest published bridge of the four: “If you need emergency travel assistance outside of our business hours, on weekends, holidays or while traveling, contact our partner, the American Red Cross at 877-272-7337… The Red Cross serves as NMCRS's after-hours liaison, issuing assistance on our behalf using NMCRS funds.” (nmcrs.org/get-help; repeated verbatim on office pages.)",
          ],
          flags: ["The 200+ locations figure is a society-published approximation from NMCRS brand materials."],
          links: [
            { label: "NMCRS (office finder on the homepage)", url: "https://www.nmcrs.org" },
            { label: "NMCRS — Get Help", url: "https://www.nmcrs.org/get-help" },
          ],
          source: "NMCRS (nmcrs.org)",
        },
        {
          id: "nmcrs-education",
          name: "NMCRS — Education Assistance: scholarships + interest-free loans",
          summary:
            "NMCRS education search terms: NMCRS scholarship, education loan, MECEP MECP. One program: scholarships of $500–$3,000 awarded once per academic year, and interest-free loans up to $4,000 on a rolling basis. Awards are set by cost of attendance and the FAFSA Student Aid Index (SAI); funds go directly to the institution for tuition, books, and lodging; recipients may re-apply every eligible year.",
          who: "Children (under 23 by September 30 of the academic year) of active-duty, retired, or qualifying deceased Sailors and Marines; spouses of active-duty, retired, or qualifying deceased Sailors or Marines; active-duty Sailors and Marines with written orders to an enlisted-to-officer program (MECEP or MECP) — loan only. Study may be career & technical education, associate's, bachelor's, or master's degrees.",
          body: [
            "Outside the scholarship window, education loans may still be available to students meeting NMCRS's financial-need threshold.",
          ],
          flags: [`Dated window: applications for the 2027–2028 academic year are published as February 16, 2027 – April 16, 2027 — re-verify each cycle. ${VC}`],
          links: [{ label: "NMCRS — Education Assistance", url: "https://www.nmcrs.org/get-help/financial-assistance/education-assistance" }],
          source: "NMCRS (nmcrs.org)",
        },
        {
          id: "nmcrs-community",
          name: "NMCRS — community services + governance and the fund drive",
          summary:
            "NMCRS services search terms: thrift shop, uniform locker, visiting nurse, budget counseling, Budget for Baby. Governance: a 501(c)(3) nonprofit founded in 1904; nmcrs.org publishes that “90% of our workforce is made up of volunteers.” The Active Duty Fund Drive (ADFD) is NMCRS's annual service-run drive.",
          who: "Navy/Marine families — the beyond-the-loan card.",
          body: [],
          bullets: [
            { title: "Thrift Shops", text: "“Gently worn uniforms, household goods and toys” at deep discounts; shop proceeds support NMCRS programs." },
            { title: "Uniform Lockers", text: "Discounted uniforms for Sailors and Marines (dinner dress, PT, working uniforms), often inside NMCRS offices." },
            { title: "Visiting Nurse Program", text: "Registered nurses offering education and support in person and online/virtual: prenatal and newborn care, new moms, aging members and health education." },
            { title: "Financial education", text: "Free, confidential budget counseling (a caseworker budget review is part of getting help, not a penalty); Budget for Baby® workshops; Money Ops sessions for units; online and in-person classes." },
          ],
          flags: ["ADFD dates/details were not captured from a dedicated NMCRS drive page in this pass — verify before printing any date; none is printed here."],
          links: [{ label: "NMCRS — Get Help (Financial Education + Community Support)", url: "https://www.nmcrs.org/get-help" }],
          source: "NMCRS (nmcrs.org)",
        },
      ],
    },
    {
      key: "afas",
      label: "Air & Space — AFAS",
      tileSub: "Entries 15–19 · the June 1, 2025 restructure, Standard Assistance, Hap Arnold",
      intro:
        "Read the restructure entry before any older AFAS material: effective June 1, 2025, Falcon Assistance was fully integrated into Standard Assistance and AFAS published a “No Loan Limit” position for Standard Assistance. Older pages describing Falcon Loans as a separate product are superseded.",
      entries: [
        {
          id: "afas-restructure",
          name: "AFAS — what changed June 1, 2025 (read before any older AFAS material)",
          summary:
            "AFAS change search terms: Falcon loan gone, AFAS restructure, no loan limit. Effective June 1, 2025, AFAS moved to a single streamlined application for all emergency assistance; Falcon Assistance was fully integrated into Standard Assistance and no longer runs as a separate process; and AFAS published a “No Loan Limit” position for Standard Assistance — multiple interest-free loans are possible when the need is justified and the member's budget supports repayment — alongside an expanded category list.",
          who: "Anyone holding pre-June-2025 AFAS information.",
          body: [
            "Older AFAS pages and installation guides describing Falcon Loans as a separate quick-loan product are superseded; where the still-live standalone Falcon page conflicts with the June 2025 restructure, the restructure controls (see the Falcon legacy flag on the apply entry).",
          ],
          flags: [],
          links: [{ label: "AFAS", url: "https://afas.org" }],
          source: "AFAS (afas.org) — June 1, 2025 restructure",
        },
        {
          id: "afas-who-what",
          name: "AFAS — who it serves and what Standard Assistance covers",
          summary:
            "AFAS eligibility search terms: AFAS standard assistance, who qualifies, categories. Financial assistance as an interest-free loan or a grant, to stabilize an emergency situation. A budget is required; payment goes directly to the member by Zelle or bank ACH (current page).",
          who: "Airmen/Guardians and families with an emergency need: active-duty members and eligible family members (spouses need a POA and DEERS enrollment with a valid dependent ID; members on appellate leave are not eligible); Guard and Reserve members regardless of duty status, and eligible family members; retired (including medically retired) members receiving retirement pay — marked limited assist; dependent-aged children of deceased personnel; widow/widower; Academy cadets / Prep School students and BMT students — emergency travel only.",
          body: [
            "Published category list (Standard Assistance page, complete as published): basic living expenses (incl. rent or utility bills); medical or dental care; funeral expenses; vehicle repairs; emergency travel; special needs (EFMP); pay/allotment problems; disasters; assistance to surviving dependents; child care; respite care; adoption expenses; furniture costs; overseas car rentals; car seats & booster seats; home repairs; immigration expenses; mental health support; vehicle shipment costs for PCS; domestic violence support; pet PCS transportation to/from an overseas assignment; pet emergency surgery or treatment; cranial helmets.",
          ],
          flags: [
            "Guard/Reserve eligibility conflict, printed as a conflict: current afas.org says “regardless of duty status”; older installation-level AFAS pages state a Title 10 activation threshold (>15 days) — superseded by the current afas.org wording; the conflict is flagged, not blended.",
            "Payment-method conflict: the current Standard Assistance page (Zelle/ACH to the member) controls over older AFAS guides (payment to the vendor).",
          ],
          links: [{ label: "AFAS — Standard Assistance", url: "https://afas.org/how-we-help/standard-assistance/" }],
          source: "AFAS (afas.org) — Standard Assistance page",
        },
        {
          id: "afas-apply",
          name: "AFAS — how to apply, after hours, and the Falcon legacy flag",
          summary:
            "Apply AFAS search terms: portal.afas.org, request assistance, AFAS after hours. Apply online at the AFAS portal (portal.afas.org); expect a confidential discussion with an AFAS caseworker and documentation uploads; AFAS publishes 24–72 hours for a caseworker response after submission, depending on the emergency. On base, assistance is administered through Military & Family Readiness Centers (M&FRCs).",
          who: "Air Force/Space Force — the application card.",
          body: [
            "After hours / away from a base: AFAS's cross-servicing agreements with AER, NMCRS, CGMA, and the American Red Cross provide emergency assistance 24 hours a day, 365 days a year (AFAS boilerplate, afas.org); the published after-hours call is the Red Cross at 1-877-272-7337, selecting the financial assistance option, and AFAS reimburses the disbursing agency. Locator verdict: NO OFFICE LOCATOR EXISTS — AFAS is portal-first; the route is portal.afas.org + the member's M&FRC, never a constructed office URL.",
            "Loan repayment (published terms): by allotment; usually within 12 months, never more than 24; completed within the current enlistment (Guard/Reserve repay via a Paymatic bank-withdrawal authorization).",
          ],
          flags: [
            "Falcon Assistance — legacy figures, do not print as current: AFAS's standalone Falcon page (still live Nov 9, 2026) states a cap and repayment terms for the old product. Because Falcon was integrated into Standard Assistance on June 1, 2025, those figures are the last published Falcon terms, not a live product's — they are not printed here as current.",
          ],
          links: [
            { label: "AFAS Portal — Request Assistance", url: "https://portal.afas.org" },
            { label: "AFAS — Standard Assistance", url: "https://afas.org/how-we-help/standard-assistance/" },
          ],
          source: "AFAS (afas.org)",
        },
        {
          id: "afas-education",
          name: "AFAS — education: the Hap Arnold Grant and its companions",
          summary:
            "AFAS education search terms: Hap Arnold grant, Arnold education grant, AFAS merit scholarship, supplemental education loan. The General Henry H. Arnold Education Grant Program — the “Hap Arnold” grant — is AFAS's self-described centerpiece education program: need-based grants for full-time undergraduate study by dependent children and eligible spouses of active-duty, Title 10, Title 32 full-time, and retired Air Force/Space Force members, with applications opening each January.",
          who: "Air Force/Space Force spouses and dependent children planning school; families mid-PCS.",
          body: [],
          bullets: [
            { title: "AFAS Merit Scholarship", text: "A merit companion to the Arnold Grant: incoming freshmen who apply for the Arnold Grant and exhibit the highest scholarship are invited to apply (the 2022 release specifies freshman applicants with a 4.0 GPA are invited)." },
            { title: "AFAS Supplemental Education Loan Program", text: "A no-interest loan for incidental college expenses the grants don't cover, for families who received Arnold Grant support (per AFAS annual reports). No cap was captured from a current afas.org program page — no figure is printed." },
            { title: "Community programs (names as published; installation-level detail varies)", text: "Child care assistance, car care assistance, spouse employment/education support, and a baby-prep class — program names print; every figure verifies on afas.org at build." },
          ],
          flags: [
            "Arnold Grant range: $500–$4,000 per AFAS's 2020/2021 annual reports — dated; verify the current cycle's range. AFAS's Sept 15, 2022 release puts that year's combined grants-and-scholarships range at $500–$5,000.",
            "Merit Scholarship award tiers of $5,000 / $2,500 / $1,000 appear in AFAS's 2020–2022 annual-report/award coverage — dated; verify current.",
            "“Bee” Arnold Spouse Tuition Program — grants up to $2,500 for entry-level job training and part-time undergraduate study at accredited schools, as published on the official MilitaryINSTALLATIONS (JBLM) resource page. This program was not confirmed on afas.org in the Nov 9, 2026 pass — printed only with that sourcing flag; re-verify at build.",
          ],
          links: [{ label: "AFAS — Education Grants hub", url: "https://afas.org/how-we-help/education-grants/" }],
          source: "AFAS (afas.org); Bee Arnold per MilitaryINSTALLATIONS (flagged)",
        },
        {
          id: "afas-governance",
          name: "AFAS — governance and the Air Force Assistance Fund",
          summary:
            "AFAS governance search terms: Air Force Assistance Fund, AFAF, who runs AFAS. Incorporated in 1942 as a private, nonprofit organization and the official charity of the U.S. Air Force; today the Air & Space Forces Aid Society, official charity of the USAF and USSF, headquartered in Arlington, VA.",
          who: "Air Force/Space Force — the “who runs this” card.",
          body: [
            "Fund drive: the Air Force Assistance Fund (AFAF) — the annual campaign managed within the Air Force, on behalf of AFAS and three other affiliated Air Force charities; AFAS's audited statements call it the “primary source of donations” to the Society and the living form of “Airmen helping Airmen.” Members designate which affiliate receives their gift, typically by payroll allotment.",
          ],
          flags: ["Dated instance: the 2025 AFAF campaign kicked off February 24, 2025 (its 52nd year), described by AFAS as “the only Department-authorized campaign For Airmen & Guardians, By Airmen and Guardians.”"],
          links: [{ label: "AFAS", url: "https://afas.org" }],
          source: "AFAS annual reports + AFAF coverage (afas.org)",
        },
      ],
    },
    {
      key: "cgma",
      label: "Coast Guard — CGMA",
      tileSub: "Entries 20–24 · broadest eligibility, 40+ programs, Education Loan, Representatives",
      intro:
        "Coast Guard Mutual Assistance: the broadest eligibility of the four societies — uniformed, civilian employees, Auxiliary, retired, survivors — delivered Representative-first, portal second. Its own printed rule for the whole tile: “approval… is not guaranteed.”",
      entries: [
        {
          id: "cgma-who",
          name: "CGMA — who it serves: the broadest eligibility of the four",
          summary:
            "CGMA eligibility search terms: who can use CGMA, civilian employees, auxiliary. CGMA's published eligibility classes reach further than any sister society, and CGMA states it is “the only military aid society providing financial assistance to Coast Guard civilian employees.”",
          who: "The entire Coast Guard community — uniformed, civilian, Auxiliary, retired, survivors.",
          body: [],
          bullets: [
            { text: "Active Duty members (including Academy cadets, OCS personnel, and recruits — “eligible for almost all CGMA programs”)." },
            { text: "Reserves — drilling reservists and IRR members (program-by-program variation)." },
            { text: "Retired Military Personnel — longevity retirees, disability retirees (TDRL/PDRL), and reserve members transferred to retired status (with or without pay)." },
            { text: "Civilian Employees — federal Coast Guard employees across GS, wage-grade, and NAF systems (including Coast Guard Exchange, MWR, and Child Development Center employees)." },
            { text: "Auxiliary members who are active, participating flotilla members." },
            { text: "PHS Officers and Chaplains serving with the Coast Guard." },
            { text: "Surviving Spouses and Dependents (dependents = those residing with the sponsor holding a government dependent ID, or qualifying as tax dependents; applications need the primary member's signature)." },
            { title: "CGMA's own printed exclusions", text: "It cannot help members who separated prior to retirement, retired civilian employees, contractors, former spouses, non-married partners, or parents who are not dependents." },
          ],
          flags: [],
          links: [{ label: "CGMA — Get Help (by population)", url: "https://mycgma.org" }],
          source: "CGMA (mycgma.org)",
        },
        {
          id: "cgma-what",
          name: "CGMA — what it provides: 40+ named programs, most of them capped loans",
          summary:
            "CGMA programs search terms: CGMA loan cap, quick loan, basic living expenses loan. CGMA runs 40+ named programs (mycgma.org Assistance Programs index, filterable by eligibility and type), in grants and interest-free loans. The flagship emergency/day-to-day loans publish a consistent cap on their official program pages: up to $6,000. Quick Loans are CGMA's fast product: interest-free loans of $1,500 or less for immediate, essential needs.",
          who: "Coast Guard community members with a named, documented need — all requests require documentation and justification (CGMA Assistance Programs index).",
          body: [],
          bullets: [
            { title: "Flagship loans (cap up to $6,000, as published)", text: "Basic Living Expenses Loan (food, housing, utilities, necessities); Emergency Travel Loan (travel, food, lodging up to the cap); Funeral Expenses Loan; Vehicle Repair Loan; Elder Care Loan; Payroll Loan (bridges a pay delay). Medical/Dental Assistance is published as a loan or grant up to $6,000, with larger amounts considered in extreme situations." },
            { title: "Quick Loans", text: "Interest-free loans of $1,500 or less for immediate, essential needs, “requiring fewer steps and potentially less detailed documentation than the standard assistance request process” (mycgma.org)." },
            { title: "Stillborn Funeral Grant", text: "Up to $1,500 toward funeral expenses where insurance/SGLI may not cover (mycgma.org program listings)." },
            { title: "More named programs as published", text: "Rental Assistance Loan; Home Repair Loan; Adoption Loan; Assisted Reproductive Services Loan; Child Support Loan; Closing Costs Loan; Disaster relief (loans and grants); Special Needs Grants (dependents registered in the Coast Guard Special Needs Program); Welcome Baby Layette (a gift package for new parents); Working Animal Grant (up to $1,500 per year per CGMA's program listing); Debt Management Program; Financial Education Childcare Grant." },
          ],
          flags: [
            `The flagship-loan cap and Working Animal Grant figure print as CGMA publishes them on mycgma.org (verified Nov 9, 2026). ${VC}`,
            "Event-driven, dated: the Shutdown Loan — up to one net paycheck, maximum $6,000 — is CGMA's appropriations-lapse bridge (mycgma.org/shutdown-loan; page updated Feb 18, 2026). Printed only as the dated shutdown product, never as a standing loan.",
          ],
          links: [{ label: "CGMA — Assistance Programs index", url: "https://mycgma.org/programs/" }],
          source: "CGMA (mycgma.org)",
        },
        {
          id: "cgma-education",
          name: "CGMA — education programs: the Education Loan up to $7,500",
          summary:
            "CGMA education search terms: CGMA education loan $7,500, supplemental education grant SEG, CG COOL loan. The Education Loan is interest-free, for higher-education expenses: up to $7,500 (mycgma.org/programs/education-loan/ — verified Nov 9, 2026). Available to all CGMA members on behalf of themselves, a spouse, and/or dependent children under 23; it cannot be used for dependents in high school or grade school.",
          who: "Coast Guard members, spouses, and dependent children pursuing education or credentials.",
          body: [],
          bullets: [
            { title: "Supplemental Education Grant (SEG)", text: "A grant for fees, books, supplies, and equipment for qualifying education programs, for members, spouses, and dependent children; apply online or through a local Representative, with a short personal statement." },
            { title: "Stafford/PLUS Loan Origination Fee Refund grant", text: "Reimburses the mandatory federal loan origination fee, which CGMA publishes as “can be as high as 4%” (mycgma.org)." },
            { title: "CG COOL Loan", text: "Interest-free, up to $4,500, for credentialing costs (training and exam fees) under the Coast Guard's credentialing program (mycgma.org)." },
            { title: "Education Advocate Grant", text: "Reimburses the cost of hiring a certified education advocate for special-needs education processes (mycgma.org)." },
            { title: "Tutor.com/military", text: "CGMA funds Coast Guard access to Tutor.com/military tutoring and test-prep services (mycgma.org)." },
          ],
          flags: [
            "The Education Loan's $7,500 figure is CGMA's own published figure and the only cap printed for that loan — a lower cap circulating in non-official guide summaries is excluded, and no per-applicant dollar amount is printed for SEG because CGMA's SEG page states none (per-person amounts in non-official guides are excluded).",
            "Dated SEG cycle facts: applications are accepted June 1 – September 30; the Oct 1, 2026 update reports the 2026 cycle closed with nearly 1,300 applications, decisions to be notified by October 31, 2026; the prior three-year restriction on computer purchases has been removed.",
          ],
          links: [
            { label: "CGMA — Education Loan", url: "https://mycgma.org/programs/education-loan/" },
            { label: "CGMA — Supplemental Education Grant (SEG)", url: "https://mycgma.org/programs/seg/" },
            { label: "CGMA — Education programs category", url: "https://mycgma.org/programs/categories/education/" },
          ],
          source: "CGMA (mycgma.org)",
        },
        {
          id: "cgma-apply",
          name: "CGMA — how to apply: Representatives first, portal second",
          summary:
            "Apply CGMA search terms: CGMA representative near me, portal.mycgma.org, find my representative. Start with your local CGMA Representative — CGMA is delivered through 600+ collateral-duty Representatives, and “To apply contact your local CGMA Representative” is the instruction repeated across mycgma.org's population pages. CGMA HQ: 102 Sheridan Ave, Fort Myer, VA 22211; 800-881-2462 / 703-875-0404; assistance@mycgma.org.",
          who: "Coast Guard community — the application card.",
          body: [
            "Locator verdict: HOMEPAGE ROUTE. Both cgmahq.org and mycgma.org carry a “FIND MY REPRESENTATIVE” finder, but its search pattern is not fetch-verifiable (interactive tool) — the app links the finder on mycgma.org, never a constructed representative URL.",
            "CGMA Portal — apply online at portal.mycgma.org (launched winter 2025). Retirees have extra doors: apply through the CGMA Representative at the nearest Coast Guard unit or at a local American Red Cross, or directly to CGMA-HQ — and CGMA publishes a simplified application for retirees and annuitants (mycgma.org retired-military page).",
          ],
          flags: [
            "The 600+ Representatives figure is CGMA-published and approximate (its 2026 campaign materials put it at 590+ Representatives across 132 shore units and 54 cutters). Portal processing of “typically 3 to 5 days” is from CGMA's Feb 2025 newsletter — dated.",
            "After-hours: unlike NMCRS and AFAS, CGMA publishes no general Red Cross after-hours bridge on the pages checked Nov 9, 2026. The standing after-hours answer CGMA itself publishes is its Representative network + the HQ contact on this card.",
          ],
          links: [
            { label: "CGMA (FIND MY REPRESENTATIVE finder)", url: "https://mycgma.org" },
            { label: "CGMA Portal", url: "https://portal.mycgma.org" },
          ],
          source: "CGMA (mycgma.org / cgmahq.org)",
        },
        {
          id: "cgma-governance",
          name: "CGMA — governance and the Annual Campaign",
          summary:
            "CGMA governance search terms: CGMA 501c3, annual campaign, coast guard people helping coast guard people. “CGMA is a 501(c)(3) and the Official Relief Society of the U.S. Coast Guard” (EIN 31-1801931, printed by CGMA); “an independent, nonprofit, charitable organization… CGMA does not receive any federal or state funds” (CGMA 2025 Campaign FAQ). Founded 1924 (roots in the League of Coast Guard Women).",
          who: "Coast Guard — the “who runs this” card.",
          body: [
            "Its governance stays tied to the community it serves: the Board Chair has always been the Commandant and the Board President the Assistant Commandant of Personnel (CGMA history page) — service-linked governance, independent nonprofit status; both halves print. Fund drive: the CGMA Annual Campaign — CGMA's 2026 coordinator materials date the fundraising window April 1 – May 31; donations also run year-round, including by allotment (adjustable anytime via donations@mycgma.org per the campaign FAQ). Scale, as CGMA publishes it: over $250 million in direct support since 1924.",
          ],
          flags: [
            "The Annual Campaign window (April 1 – May 31) is from CGMA's 2026 coordinator materials — a dated deck. CGMA's typical-year reach figures (roughly 1 in 10 of the community; 2025 materials: 1 in 7 active-duty in 2024) are society-published and dated by year — printed with the year attached or not at all.",
          ],
          links: [{ label: "CGMA", url: "https://mycgma.org" }],
          source: "CGMA (mycgma.org) — Campaign FAQ; history page",
        },
      ],
    },
  ],
};
