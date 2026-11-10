// Military Travel HQ — transcribed from the researched pack
// (~/workspace/military-app/travel/travel.md, researched Nov 9,
// 2026; Space-A, AFRC, AFT, ITT, and TSA material carried from the
// Deals pack of Nov 8, 2026 where the pack marks it). Official
// sources only: AMC, DoDI 4515.13 public text, DTMO, the AFRC
// official sites, TSA, Military OneSource. ZERO prices anywhere in
// this section — no rate tables, no fare figures, no fee amounts;
// pricing structures are described and routed to the official page.
// No flight schedules and no terminal-by-terminal data beyond the
// worked examples AMC itself uses to explain the pattern. This is a
// leisure + space-available section; official TDY/PCS travel runs
// through DTMO/DTS/TMCs and the PCS Move Center.

import type { RefGroup } from "./refdata";

export const TRAVEL_INTRO =
  "Space-A done properly, Patriot Express, official lodging and the AFRC resorts, the leisure booking channels, and the airport benefits. Eligibility is printed only as the official source states it; where official pages conflict, the conflict is flagged on the card, never blended.";

const AMC_HOME = { label: "AMC Travel Site", url: "https://www.amc.af.mil/AMC-Travel-Site/" };
const AMC_SPACEA = { label: "AMC — Space-Available Travel Page", url: "https://www.amc.af.mil/AMC-Travel-Site/AMC-Space-Available-Travel-Page/" };
const AMC_EMAIL_FORM = { label: "AMC — Space-Available Email Sign-up Form", url: "https://www.amc.af.mil/AMC-Travel-Site/AMC-Space-Available-Travel-Page/Space-Available-Email-Sign-up-Form/" };
const AMC_PETS = { label: "AMC — Pet Travel Page", url: "https://www.amc.af.mil/AMC-Travel-Site/AMC-Pet-Travel-Page/" };
const CAT_CHART = { label: "DoDI 4515.13 Table 3 extract (official .mil host, PDF)", url: "https://www.misawa.af.mil/Portals/41/documents/About_Us/AMC/Space-A%20Catagory%20Chart.pdf" };
const MAB_SPACEA = { label: "Space-Available Travel (MyArmyBenefits summary)", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Space-Available-Travel-(Space-A-Travel)?serv=123" };
const BWI = { label: "AMC Terminal — Baltimore-Washington (BWI)", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/CONUS-Terminals/Baltimore-Washington-International-Airport-Passenger-Terminal/" };
const RAMSTEIN = { label: "AMC Terminal — Ramstein AB", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/EUCOM-Terminals/Ramstein-AB-Passenger-Terminal/" };
const SEATAC = { label: "AMC Terminal — Seattle-Tacoma", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/CONUS-Terminals/Seattle-Tacoma-International-Gateway/" };
const DOVER = { label: "AMC Terminal — Dover AFB", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/CONUS-Terminals/Dover-AFB-Passenger-Terminal/" };
const OSAN = { label: "AMC Terminal — Osan AB", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/PACOM-Terminals/Osan-AB-Passenger-Terminal/" };
const NORFOLK = { label: "AMC Terminal — NS Norfolk", url: "https://www.amc.af.mil/AMC-Travel-Site/Terminals/CONUS-Terminals/NS-Norfolk-Passenger-Terminal/" };
const DOD_LODGING = { label: "DoD Lodging (official portal)", url: "https://www.dodlodging.net" };
const DTMO_LODGING = { label: "DTMO — DoD Lodging", url: "https://www.travel.dod.mil/Programs/Lodging/DoD-Lodging/" };
const IHG_ARMY = { label: "IHG Army Hotels", url: "https://www.ihgarmyhotels.com" };
const ARMY_LODGING = { label: "Army Lodging (non-privatized)", url: "https://army.dodlodging.net" };
const NAVY_INN_PR = { label: "Navy release — NGIS rebranding as “Navy Inn”", url: "https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/3955068/" };
const NAVY_LODGE = { label: "Navy Lodge", url: "https://www.navy-lodge.com" };
const INNS_CORPS = { label: "Inns of the Corps (MCCS)", url: "http://www.usmc-mccs.org/lodging/inns-of-the-corps" };
const AFRC_PAGE = { label: "Army MWR — Armed Forces Hotels & Resorts (the four AFRCs)", url: "https://www.armymwr.com/travel/armed-forces-hotels-resorts" };
const HALEKOA_E = { label: "Hale Koa — eligibility", url: "https://www.halekoa.com/about-hale-koa-hotel/eligibility" };
const HALEKOA_R = { label: "Hale Koa — room rates (category structure)", url: "https://www.halekoa.com/rooms-suites/room-rates" };
const SOG_E = { label: "Shades of Green — eligibility", url: "https://www.shadesofgreen.org/about-shades-green/eligibility" };
const SOG_R = { label: "Shades of Green — rates & policies (category structure)", url: "https://www.shadesofgreen.org/rooms/rates-policies" };
const EDEL_E = { label: "Edelweiss — eligibility table", url: "https://www.edelweisslodgeandresort.com/your-stay/eligibilitytable" };
const EDEL_E2 = { label: "Edelweiss — eligibility", url: "https://www.edelweisslodgeandresort.com/your-stay/eligibility" };
const DHL_E = { label: "Dragon Hill Lodge — eligibility", url: "https://www.dragonhilllodge.com/about-dragon-hill-lodge/eligibility" };
const DHL_R = { label: "Dragon Hill Lodge — rooms & suites (rate structure)", url: "https://www.dragonhilllodge.com/rooms-and-suites" };
const DHL_FAQ = { label: "Dragon Hill Lodge — FAQs", url: "https://www.dragonhilllodge.com/about-dragon-hill-lodge/faqs" };
const AFVC = { label: "Armed Forces Vacation Club (AFVC)", url: "https://www.afvclub.com" };
const AFVC_MWR = { label: "Army MWR — Armed Forces Vacation Club", url: "https://www.armymwr.com/travel/armed-forces-vacation-club" };
const DOD_CAMP = { label: "DoD news — discounted rates for campgrounds nationwide", url: "https://www.defense.gov/News/News-Stories/article/article/2721263/dod-offers-discounted-rates-for-campgrounds-nationwide/" };
const OS_MWR = { label: "About MWR (Military OneSource)", url: "https://www.militaryonesource.mil/military-basics/extended-family-friend/about-mwr-morale-welfare-and-recreation/" };
const NAVY_GETAWAYS = { label: "Navy Getaways — RV Parks, Campgrounds & Vacation Rentals (CNIC)", url: "https://ffr.cnic.navy.mil/Fleet-Readiness/Lodging/Navy-Getaways-RV-Parks-Campgrounds-Vacation-Rentals/" };
const AFT = { label: "American Forces Travel", url: "https://www.americanforcestravel.com" };
const DTMO = { label: "Defense Travel Management Office (DTMO)", url: "https://www.travel.dod.mil" };
const TSA_MIL = { label: "TSA PreCheck — military travelers", url: "https://www.tsa.gov/precheck/military/military-travelers" };
const TSA_MIL2 = { label: "TSA — PreCheck for military", url: "https://www.tsa.gov/precheck/military" };
const TSA_2025 = { label: "TSA release (Jul 2, 2025) — “Serve with Honor, Travel with Ease”", url: "https://www.tsa.gov/news/press/releases/2025/07/02/announcing-new-tsa-precheckr-serve-honor-travel-ease-benefits-for" };
const IDEMIA = { label: "TSA enrollment by IDEMIA — help center", url: "https://tsaenrollmentbyidemia.tsa.dhs.gov/help" };
const TSA_LANES = { label: "TSA — military lanes (travel tips)", url: "https://www.tsa.gov/travel/travel-tips/military-lanes" };
const TSA_CARES = { label: "TSA Cares — military travelers", url: "https://www.tsa.gov/travel/tsa-cares/military-travelers" };
const USO_STORY = { label: "USO — what you need to know about USO airport lounges", url: "https://www.uso.org/stories/2513-what-you-need-to-know-about-uso-airport-lounges" };
const AA_MIL = { label: "American Airlines — military benefits (example airline page)", url: "https://www.aa.com/web/i18n/customer-service/programs-products/military-benefits.html" };

export const TRAVEL_GROUPS: RefGroup[] = [
  {
    title: "Space-A Center",
    entries: [
      {
        name: "What Space-A is — and is not",
        body: "Space-Available travel: eligible passengers fly on DoD aircraft seats left over after mission/duty passengers and cargo, run by Air Mobility Command (AMC) passenger terminals. Use AMC's own framing, not paraphrase: “The Space-Available travel program is a privilege that may offer substantial savings for your leisure travel.” — AMC Travel Site. “SPACE AVAILABLE (SPACE-A) IS A PRIVILEGE. WHEN MISSIONS & CARGO LOADS ALLOW, SEATS MAY BE MADE AVAILABLE TO ELIGIBLE PASSENGERS.” — terminal banner, AMC terminal pages. No guarantee, no reservations: “THERE IS NO GUARANTEE OF TRANSPORTATION, AND RESERVATIONS WILL NOT BE ACCEPTED OR MADE FOR ANY SPACE AVAILABLE TRAVELER. ALL FLIGHTS ARE SUBJECT TO CHANGE OR CANCELLATION WITHOUT NOTICE” (DoDI 4515.13 §4 ¶4.1.a, quoted on AMC terminal pages). AMC's standing reminder: “Space-A travelers must be prepared to cover commercial travel expenses if flight schedules are changed or become unavailable.” Mission first: “AMC's first responsibility is airlifting official DoD traffic. Space A passengers are accommodated only after cargo and official duty passengers.” — Ramstein FAQ. No round trips: there is no return reservation — on reaching the destination, the passenger signs up again and competes again, in category order, at the other end. And most veterans are not Space-A eligible — see the categories and the geography entry before assuming.",
        links: [AMC_HOME],
        source: "Air Mobility Command — AMC Travel Site; DoDI 4515.13",
      },
      {
        name: "The categories — DoDI 4515.13 Table 3",
        body: "Selection priority runs Category I (highest) → Category VI (lowest); within a category, by signup date/time. Summary level — the instruction's Table 3 (items 1–51; Jan 22, 2016, Change 7, Jan 11, 2024) is the authority; terminal pages layer local policy on top.",
        bullets: [
          "Category I — Emergency Leave (unfunded). Bona fide immediate-family emergencies only, most expeditious routing; never in lieu of funded entitlements. Includes Wounded Warriors on leave (offered seats before any other Space-A passenger) with accompanying immediate family; uniformed members in emergency leave status + accompanying dependents; specified unaccompanied dependents (incl. overseas command-sponsored cases, some one-way to the emergency destination); DoD civilians/ARC/NAF in the specified overseas circumstances; dependents of a retired member who dies OCONUS accompanying remains (return within 1 year).",
          "Category II — Accompanied EML. Sponsors in Environmental and Morale Leave status and their dependents traveling with them, also in EML status — uniformed members; U.S.-citizen civilian employees of the Military Services eligible for government-funded transportation; ARC full-time paid U.S.-citizen personnel on duty with a DoD Component overseas; USO full-time paid U.S. citizens assigned overseas; DoDEA teachers during the school year.",
          "Category III — Ordinary Leave / House Hunting / Medal of Honor / Foreign Military. Uniformed members in ordinary leave or pass status; members on house-hunting permissive TDY incident to a pending PCS, and their accompanying dependents; dependents accompanied by their sponsor in ordinary leave/pass status; permanent-household relatives in connection with an overseas PCS move (CONUS→OCONUS only); dependents/spouses of personnel officially reported missing, and specified humanitarian cases on Service-Chief approval; Medal of Honor recipients + accompanying dependents; command-sponsored dependents on approved circuitous travel; recovered civilian patients + non-medical attendants; foreign cadets/midshipmen on leave; foreign exchange members on permanent duty with DoD, on leave, + accompanying dependents; UK MoD personnel permanently assigned to Diego Garcia; and — at the bottom of Category III — unaccompanied dependents of active-duty members deployed more than 365 consecutive days.",
          "Category IV — Unaccompanied EML. Unaccompanied dependents traveling under the EML program; DoDEA teachers and their dependents (accompanied or unaccompanied) traveling during summer under EML; unaccompanied dependents of active-duty members deployed at least 30 consecutive days; uniformed-service retirees residing in commonwealths/U.S. possessions traveling for certain health care, plus one needed accompanying dependent; Diego Garcia third-country-national direct-hire employees (to/from nearest intermediate commercial destination).",
          "Category V — Permissive TDY (non-house-hunting), Students, Dependents, Respite. Military personnel on other permissive TDY; command-sponsored in-residence college students at an OCONUS branch of a U.S. university in the same OCONUS area — unaccompanied, nearest terminal to nearest terminal, school breaks, one round trip per year, unused trips do not accumulate; specified dependents unaccompanied for U.S. Service Academy entrance exams; dependents not entitled to government-funded PCS transport accompanying/joining a sponsor OCONUS (direction limits apply per Table 3); unaccompanied spouses for school-official/commander-directed consultation on a dependent's schooling; command-sponsored dependents of uniformed members, unaccompanied, stationed OCONUS (commander-signed sponsorship documentation required — see the dependents entry); non-command-sponsored dependents of members on a remote PCS tour with advance written commander approval; members + dependents on post-deployment/mobilization respite absence.",
          "Category VI — Retirees, Reserve, Students-in-pipeline, 100% Disabled Veterans, Surviving Spouses. Retired uniformed members + dependents when accompanied by the sponsor; Reserve Component members and “gray area” retirees (geographically limited — see the geography entry); NUPOC/CEC/ROTC students and newly commissioned ROTC officers awaiting extended active duty (CONUS/AK/HI/territories only); American Samoa veterans to/from Hawaii for VA hospital care; full-time paid ARC/USO employees assigned overseas and USS employees in direct support; veterans with a permanent service-connected disability rated as total + accompanied dependents (geographically limited); surviving spouses of members who died on active duty, of retired members, in inactive-duty training, or in annual training, + their dependents when accompanied by the surviving spouse (Table 3 authorizations for these items are in the CONUS-CONUS column — present as CONUS-CONUS and route edge cases to the terminal/DoDI).",
        ],
        flag: "Older AMC FAQ summaries (e.g., Ramstein's fact sheet) use coarser shorthand — a “120 days” Cat IV line that Table 3 supersedes with the 30-day / 365-day split. Table 3 wins; the FAQ is used in this section only for enduring principles.",
        links: [CAT_CHART, MAB_SPACEA],
        source: "DoDI 4515.13 Table 3 (Jan 22, 2016, Change 7, Jan 11, 2024)",
      },
      {
        name: "Signing up — the new Self-Signup Tool, and the old ways that still exist",
        body: "IN FLUX — printed as flux. New: “As of 26 March 2026, the New AMC Travel Self-Signup Tool for Space-Required & Space-Available Travel [is] Now Live for ALL AMC Locations.” — AMC Travel Site. The tool's address is published on the official benefits pages: gatesea.mtmc.gov/amctravel/ (AMC's own page links it behind “click here”). AMC's note: try a different browser or clear cache if the tool won't load. Still live alongside it (AMC's Space-A page lists all of these — the new tool is not the only way): (1) the Automated Webpage Sign-up Form, explicitly labeled by AMC “This is not the new Self Sign-up Tool”; (2) the Manual Sign-up Form — AMC Form 140, Space Available Travel Request, submitted to the desired terminal; (3) Email Sign-up to the nearest AMC Passenger Terminal (addresses in AMC's Terminal Directory). Signup happens at the individual Passenger Terminal, not HQ AMC: “HQ AMC does NOT perform the Space-A sign-up process.” The old email form carries a live technical-difficulty warning: automated confirmation emails are having problems and the selected terminal “MAY NOT receive your space-a sign-up email.” AMC's instruction: print the completed form/confirmation before clicking SUBMIT, bring it as proof of date/time, and contact the departure location to verify receipt.",
        links: [AMC_HOME, AMC_SPACEA, AMC_EMAIL_FORM],
        source: "AMC Travel Site; AMC Space-Available Travel Page",
      },
      {
        name: "The 60-day register",
        body: "“Your Space-A sign-up is good for a 60-day period or when your leave expires, whichever comes first for Active Duty members.” — AMC email sign-up page. Date/time is established on receipt at the origin departure terminal. Terminals restate it the same way: travelers “remain on the register 60 days after registration, for the duration of their leave orders authorization, or until they are selected for travel, whichever occurs first. Revalidation has been eliminated.” — Ramstein FAQ. BWI restates it for Cat VI retirees identically (60 days or until travel). Practical rules from AMC terminal pages: you may sign up for up to five destinations/countries (and an “ALL” sign-up covering other destinations served); do not sign up multiple times — duplicates reset you to the most recent date/time (“We update the system to meet the most current date and time of sign up” — BWI); keep your proof of signup with its date/time stamp and bring it when you mark present. Active-duty leave rule (absolute): members must be on leave/pass at registration, while awaiting travel, and for the entire period of travel. BWI sharpens Category III signup: sign up on the first day of chargeable leave; provide leave start/end dates or attach the leave form. Fax/email remote signup may not be sent earlier than the effective date of leave. Required signup information (AMC's list): email address; rank/grade; full name; service branch; military status; names of dependent travelers; total seats required; travel eligibility status; leave dates; overseas travel-ready status (documents in hand); up to five destinations. “Do Not Provide Personally Identifiable Information (PII), such as Social Security numbers.” Email/SMS notifications are opt-in at signup (CONUS +1 cell numbers only; official DoW email addresses not accepted).",
        links: [AMC_EMAIL_FORM, RAMSTEIN, BWI],
        source: "AMC — email sign-up page; Ramstein and BWI terminal pages",
      },
      {
        name: "Roll call — how selection actually happens",
        body: "AMC's own 6-step summary: (1) determine your category; (2) review destinations at your nearest terminal via its website/social media page (Terminal Directory); (3) document check; (4) register; (5) check the terminal's 72-hour flight schedule; (6) check in at the terminal counter to mark yourself present, await your Space-A call, follow the passenger agents' instructions. Selection rule (BWI, verbatim in substance): “Selection is based upon your travel category and the date and time of your sign up. The time you mark present does not bear weight upon the selection process.” You must be marked present no later than 1 hour prior to roll call (Seattle-Tacoma adds: no earlier than 24 hours before roll call), travel-ready: documents ready, luggage in hand, vehicles parked, rental cars returned, hotels checked out of. Roll-call timing is terminal-specific — there is no AMC-wide time. Published examples: BWI — at the AMC ticket counter, at least 4 hours prior to departure; Ramstein — 4 hours 20 minutes prior, at the Flight Control desk; Dover — typically 4 hours prior; Seattle-Tacoma — 3 hours prior; Osan — no earlier than 3 hours 30 minutes prior; NS Norfolk — 3 hours prior for Patriot Express, 2 hours for all other flights; MacDill — 3 hours prior. The rule: always use that flight's roll-call time on the terminal's 72-hour schedule; there is no generic “show up X hours early.” Why nobody can quote your odds (BWI): duty-passenger bookings, a normal share of duty no-shows, standby duty passengers who outrank all Space-A, weight allowances, and weather are mostly unknowable until roll call itself.",
        links: [BWI, RAMSTEIN, SEATAC, DOVER, OSAN, NORFOLK],
        source: "AMC terminal pages (BWI, Ramstein, Seattle-Tacoma, Dover, Osan, NS Norfolk)",
      },
      {
        name: "Schedules — the pattern (route, don't scrape)",
        body: "72-hour schedule — the rolling board for all missions from that terminal (destinations, show/roll-call times, tentative seat releases). This is the authoritative near-term source, on the terminal's official AMC page (“check their AFPIMS page to see the 72-hour flight schedule” — AMC). 30-day schedule — Patriot Express only, published by PE terminals (dates + destinations; seat releases post no earlier than 72 hours out). Supporting material on the same terminal pages: roll-call reports and AMC Grams (passenger pamphlets). Some terminals additionally post to an official Facebook page and/or run a recorded flight-information hotline — Fairchild AFB's official terminal page, for example, states its schedule “is also posted inside the passenger terminal and on Facebook” with a 24-hour automated hotline. That mix is per-terminal, described on the terminal's own page — this section routes to the terminal page and lets the pattern be whatever that terminal publishes; it never scrapes schedules or quotes seat counts. Start point: the AMC Passenger Terminal Directory, from the AMC Travel Site.",
        links: [AMC_HOME],
        source: "AMC Travel Site; AMC terminal pages",
      },
      {
        name: "Baggage basics (AMC-published standard)",
        body: "2 checked bags per person, max 70 lb each, max 62 linear inches (length + width + height) per bag; 1 carry-on (BWI publishes max 45 linear inches) + 1 personal item that fits under the seat. This allowance is repeated across AMC terminal pages — treat it as the standard, not a guarantee for every airframe (smaller aircraft — C-12/C-21/UC-35, C-9/C-40 classes — carry reduced totals in terminal guidance). Family pooling: “Family members traveling together may pool their baggage allowance as long as the total does not exceed the total allowance.” — Ramstein FAQ. Excess baggage: Space-A cannot buy it. “Can I pay for excess baggage when flying space available? No. Only duty status passengers may pay for excess baggage.” — Ramstein FAQ; BWI and Seattle state the same prohibition. (The published per-bag excess charge applies to passengers on orders, not Space-A.) Contract-mission fees (structure only): on commercial contract missions (Patriot Express), Space-A passengers are charged a head tax, plus a federal inspection fee on international arrivals — “Some terminals must collect a head tax or a federal inspection fee from Space A passengers on commercial contract missions” (Ramstein FAQ). The dollar amount is not uniform — terminal pages publish different figures by terminal and direction — so this section prints the structure and the card-payment trend (major terminals are now card-only / no cash), and routes you to the departure terminal's page for the current amount. No fee figure is printed here. Meals: “Meal service on AMC Category B full planeload charters is complimentary”; meals may be purchased at a nominal fee out of most air terminals on military aircraft. — Ramstein FAQ",
        links: [RAMSTEIN, BWI],
        source: "AMC terminal pages (Ramstein FAQ; BWI)",
      },
      {
        name: "Dependents — accompanied is the rule; the exceptions are specific",
        body: "Default (Ramstein FAQ): “Except EML, Emergency Travel, and Command Sponsored Category V, family members must be accompanied by the sponsor to fly Space A. Family members may travel to/from and between overseas locations but not within the CONUS unless manifested on domestic leg segments of international travel.” And: family members may not travel with another military member under power of attorney or other releases — “Family members may only travel when accompanied by their sponsor.” Command-sponsored unaccompanied (Cat V): commander-signed command-sponsorship documentation must be presented at the terminal and carried during travel. EML unaccompanied (Cat IV): unaccompanied dependents 18 or older; family members under 18 must be accompanied by an adult family member traveling EML (official benefits summary). Deployed sponsor (BWI's published operational split): a Deployment Verification Letter (sponsor's deployment start/end dates) is required; no limit on the number of trips; dependents may sign up no earlier than 10 days before the deployment and may begin travel on its first day. Category follows deployment length: 365+ consecutive days → bottom of Category III; 30–364 days → Category IV (matches DoDI items 21 and 25). Age / ID rules — including a 2025 update: under 14 — must travel with the sponsor or eligible parent and possess government-issued ID (e.g., valid passport); per the June 30, 2025 terminal update on documentation for dependents under 14, proof of sponsorship (DD Form 1172 / milConnect / ID Card Office Online printout showing the dependent's DoD ID and privilege number) is required, and at least one terminal (Sigonella) states flatly that a birth certificate “will not be accepted” as proof of sponsorship. 14 and older — valid DoD dependent ID card required. “Child's ID” and “proof of sponsorship” are two separate items here, never merged — some terminals list a raised-seal birth certificate as an example of the child's ID while rejecting it as proof of sponsorship. Unaccompanied minors on Space-A: NOT authorized (BWI and Seattle, in bold). Do not confuse with the separate Space-Required rule: on Patriot Express duty bookings, minors 10 to under 18 may travel unaccompanied with AMC Form 1004, an adult remaining until departure, and evidence the child will be met on arrival; under 10 may not. That is a booked-duty-passenger rule, not Space-A.",
        flag: "Paperwork clock (BWI): the Command Sponsored Letter registration document is valid 90 days from issuance, but maximum registration in the system is 60 days — if travel isn't completed within 60 days, resubmitting for the remaining 30 days gives a new date/time of registration (the original queue position is lost).",
        links: [RAMSTEIN, BWI, SEATAC],
        source: "Ramstein FAQ; BWI and Seattle-Tacoma terminal pages; DoDI 4515.13 Table 3",
      },
      {
        name: "Who is limited to the CONUS system — the Cat VI geography",
        body: "The most-misstated rule in Space-A: a single line “retirees can fly Space-A” is wrong for most of Category VI. Per DoDI Table 3: Regular retired uniformed members (item 37): no geographic distinction published — CONUS-CONUS, OCONUS-OCONUS, and CONUS↔OCONUS all authorized, with dependents when accompanied by the sponsor. “Gray area” Reserve retirees entitled to retired pay at age 60 (item 39): LIMITED — CONUS only, or directly between CONUS and Alaska, Hawaii, Puerto Rico, the U.S. Virgin Islands, Guam, and American Samoa (Guam/American Samoa travelers may transit Hawaii or Alaska), or within Alaska, Hawaii, Puerto Rico, or the U.S. Virgin Islands. No general Europe/Japan/Korea authorization. Veterans with a permanent service-connected disability rated as total (item 47): the same limited geography as item 39. ROTC / NUPOC / CEC (items 40–41): within and between CONUS, Alaska, Hawaii, and U.S. territories only. Reserve Component members (not retired): per the Ramstein FAQ summary (older — Table 3 caveat applies), Reserve members with Reserve ID card and DD Form 1853 may fly to/from/between Alaska, Hawaii, Puerto Rico, the Virgin Islands, Guam, American Samoa, and CONUS; when on active duty, anywhere overseas AMC operates. The rule of thumb the sources support: full retiree = the worldwide Space-A network; gray-area retiree / 100% DAV / ROTC-NUPOC-CEC = CONUS + AK/HI/PR/USVI/Guam/American Samoa system only.",
        links: [CAT_CHART],
        source: "DoDI 4515.13 Table 3 (items 37, 39–41, 47); Ramstein FAQ",
      },
      {
        name: "Pets — Space-A doesn't take them",
        body: "“DoD has reserved pet shipments for passengers in permanent change of station (PCS) status.” — Ramstein FAQ. Space-A passengers do not travel with pets. PCS pet space on Patriot Express: dogs and cats only, booked through the local Traffic Management Office / Installation Transportation Office (not AMC), first-come-first-served, two pets per family, accompanied by the owner at the owner's expense; a signed Pet Risk Acknowledgement Document is now required to reserve PE pet space. AMC publishes a weight-tiered per-kennel fee schedule (pet + kennel combined weight) on its Pet Travel Page — amounts are published there and marked “fees may change,” so this section routes to that page rather than printing figures. Service animals are the separate exception channel (dogs only, max two, Statement of Assurance to the departing terminal at least 48 hours before departure).",
        links: [AMC_PETS],
        source: "AMC — Pet Travel Page; Ramstein FAQ",
      },
    ],
  },
  {
    title: "Patriot Express",
    entries: [
      {
        name: "What Patriot Express is",
        body: "Patriot Express (PE) is the DoD's commercial air contracted service for passenger movement — chartered commercial aircraft contracted through USTRANSCOM/AMC, flown first for duty and PCS passengers booked through their TMO/Installation Transportation Office; Space-A fills seats left after booked passengers, competing at roll call under the same Category I–VI order. (U.S. Army Korea arrival guidance defines it exactly that way for the Korea service and names the current Korea-route contract carriers.) Duty passengers do not Space-A onto PE: BWI's header instructs “PASSENGERS ON OFFICIAL TRAVEL: CONTACT YOUR LOCAL TRAVEL MANAGEMENT OFFICE (TMO) FOR RESERVATIONS.” PE check-in is a booked-passenger process (counters open ~6 hours prior at BWI, duty passengers in line by ~3 hrs 20 mins prior; Ramstein PE check-in opens 24 hours prior, pre-booked passengers by 4 hrs 30 mins prior) — Space-A roll call happens afterward. PE is where the contract-mission fees arise (head tax, + federal inspection fee on international arrivals; card payment now standard at major terminals).",
        flag: "AMC's own terminal pages do not name a network-wide carrier — carriers are contract- and route-specific, so this section describes PE as DoD-chartered commercial aircraft and never hard-codes carrier names.",
        links: [BWI, RAMSTEIN],
        source: "AMC terminal pages (BWI, Ramstein); USTRANSCOM/AMC",
      },
      {
        name: "The gateways and routes — as the terminals describe them",
        body: "Descriptive, not a timetable. Baltimore-Washington (BWI): “Our normally scheduled flights serve Germany, Qatar, Greenland and Kuwait” — Ramstein AB, Al Udeid AB, Pituffik SB, and Kuwait, per the same page's destination requirements. BWI publishes both the 72-hour schedule and the monthly 30-day PE schedule. Seattle-Tacoma: “AMC flights in/out of SEA-TAC serve bases in Japan, Korea and Guam exclusively” (AMC Gram via the terminal page); the Korea arrival system confirms SeaTac → Osan AB as the PCS arrival route. Ramstein AB: the European PE hub paired with BWI in the published schedules; publishes 72-hour and 30-day PE schedules. Andersen AFB (Guam): publishes a 30-day PE schedule listing PE missions to Kadena AB, Japan and Seattle-Tacoma — an intra-Pacific leg plus the trans-Pacific return. NS Norfolk: operates PE (counters open 1800 the day before PE departures; PE roll call 3 hours prior); its AMC page text does not publish a destination list, so none is asserted here.",
        flag: "Not verified from official AMC pages — not published: a standing Travis–Hickam PE route list, and any fixed weekly PE timetable. AMC publishes PE as monthly 30-day schedules per terminal; days and destinations shift month to month. PE routes are described at gateway level; dates live only in the terminal's current 30-day schedule.",
        links: [BWI, SEATAC, RAMSTEIN, NORFOLK],
        source: "AMC terminal pages (BWI, Seattle-Tacoma, Ramstein, NS Norfolk)",
      },
    ],
  },
  {
    title: "Staying — Lodging & the AFRC Resorts",
    entries: [
      {
        name: "DoD Lodging — the official portal",
        body: "The DoD's official lodging portal/program entry point, summarized by DTMO: “For locations and contact information for reservations, go to dodlodging.net or innsofthecorps.com.” How booking works (as published): search all services by city (or city + airport code) — “This Search will Show all inventory across all Military Brands within city” — or search by property via a service-brand card. The portal's search taxonomy lists: Air Force Inns · Army Lodging · MCCS (Marine Corps) · Navy Gateway Inns & Suites · Navy Getaways (RV parks, campgrounds & vacation rentals). Priority is duty-first: official-duty travelers are the mission (see the service programs in this tile); leisure/Space-Available use comes after. Official-duty travelers may also be directed through DTS for DoD government lodging.",
        flag: "DoD Lodging is not the sole channel for every brand — Navy Lodge and IHG Army Hotels run substantially through their own official booking sites, and most installation cabins/campgrounds book only through the installation.",
        links: [DOD_LODGING, DTMO_LODGING],
        source: "DTMO — DoD Lodging; dodlodging.net",
      },
      {
        name: "Army — IHG Army Hotels + Army Lodging",
        body: "Most Army Lodging was privatized under the Privatization of Army Lodging (PAL) program and now operates as IHG Army Hotels — on-post hotels under IHG brands (e.g., Holiday Inn Express, Candlewood Suites, Staybridge Suites, Historia Collection). Per DTMO, the remaining CONUS location and all foreign locations are still managed by Army Lodging. Who: on-post lodging for TDY, PCS, official and unofficial travel — service members and families, retirees, DoD civilians/contractors and guests, subject to each post's installation-access rules. Army Lodging (non-privatized) publishes availability to Active Duty, Retirees, DoD Civilians (GS & NAF) and their sponsored guests.",
        flag: "Official counts of privatized locations differ between DTMO and IHG material and are moving with renovations/transfers — no location count is printed.",
        links: [IHG_ARMY, ARMY_LODGING],
        source: "DTMO; IHG Army Hotels; Army Lodging",
      },
      {
        name: "Navy — Navy Gateway Inns & Suites → “Navy Inn,” and Navy Lodge",
        body: "Both programs are operated by NEXCOM Hospitality Group. NGIS / Navy Inn: the Navy's official-duty/TDY lodging — hotel-style rooms specializing in official business, published by DTMO as priority-one for Navy TDY uniformed members, and open also to individual/group TDY travelers, DoD civilians, and Space-Available leisure travelers including retirees, reservists, veterans with a Veteran Health Identification Card (VHIC), and caregivers with a letter. Book via dodlodging.net (property pages on ngis.dodlodging.net). Navy Lodge: the separate PCS/TDY family program — spacious rooms/suites with fully equipped kitchens, published as pet-friendly. Navy publishes Navy Lodge as the official government lodging on PCS orders (a Certificate of Non-Availability is required if it is unavailable). Reservations accepted on an as-received basis without regard to rank.",
        flag: "NAME IN FLUX — rebrand in progress: NEXCOM announced NGIS rebranding as “Navy Inn” starting in 2024, with a “Navy Inn Crew Stay” brand following in 2025; many DoD Lodging property pages already read “Navy Inn, previously Navy Gateway Inns & Suites” while other official pages still say NGIS. Both names print together here.",
        links: [NAVY_INN_PR, NAVY_LODGE, DOD_LODGING],
        source: "NEXCOM Hospitality Group; DTMO; Navy Lodge",
      },
      {
        name: "Air Force — Air Force Inns",
        body: "Air Force installation lodging for TDY and PCS travelers worldwide; the program's recurring published description: “Value, convenience, great accommodations, service, and very affordable rates are the foundation of the Air Force Inns lodging program.” TDY/PCS travelers first, leisure/Space-Available use by eligible patrons as published per property. Book via dodlodging.net (property pages on af.dodlodging.net).",
        links: [DOD_LODGING],
        source: "Air Force Inns (via DoD Lodging / DTMO)",
      },
      {
        name: "Marine Corps — Inns of the Corps",
        body: "MCCS-operated lodging in two published forms: Transient Lodging/Billeting — priority-one temporary lodging for Marine Corps and Navy TDY travelers — and Temporary Lodging Facilities (Inns of the Corps) — extended-stay accommodations primarily for members and families during PCS, also authorized for TDY. Who: Active Duty, National Guard, Reserve, and retirees on leave or official duty per MCCS property eligibility pages; valid credentials required at check-in. DTMO also publishes innsofthecorps.com as the reservation route.",
        flag: "Reservation windows are property-published, not a Corps-wide rule — e.g., Quantico publishes PCS reservations up to a year in advance, TAD/TDY up to 90 days, leisure up to 30 days; Twentynine Palms likewise publishes PCS a year out. The tiered-by-purpose pattern recurs; the specific windows belong to each property's page. Never generalize one property's window into a system rule.",
        links: [INNS_CORPS],
        source: "MCCS — Inns of the Corps; DTMO",
      },
      {
        name: "Coast Guard — no national lodging brand (say so plainly)",
        body: "No Coast Guard equivalent of NGIS/Air Force Inns/IHG Army Hotels exists on official pages. Lodging is decentralized and installation-MWR-run: guest houses, guest quarters, cottages, recreational lodging rooms, and RV/campground sites, booked direct with that unit's MWR. Examples: Borinquen Guest Housing (Air Station Borinquen, PR); TRACEN Petaluma Guest Lodging + campground (“open to all MWR eligible patrons,” booking windows tiered by patron status at that installation); Base Cape Cod MWR Lodging (Wings Inn, rental houses); Coast Guard Academy Munro Hall Guest Housing (primarily TDY). The rule: for Coast Guard lodging, check the destination unit's MWR page — there is no central Coast Guard booking portal, and none is invented here.",
        links: [DOD_LODGING],
        source: "Coast Guard unit MWR pages (as researched); DTMO",
      },
      {
        name: "AFRCs — the common frame",
        body: "Armed Forces Recreation Centers: four DoD resorts run through Army MWR for all branches — Hale Koa Hotel (Waikiki, Hawaii), Shades of Green (Walt Disney World, Florida), Edelweiss Lodge and Resort (Garmisch, Germany), Dragon Hill Lodge (Seoul, South Korea). Published frame: Category C MWR activities, operated by the U.S. Army as executive agent for DoD (IMCOM / Army Family and MWR), serving all uniformed services. Pricing structure (all four): the standard-room price is set by the sponsor's pay-grade/status category — a lower band pays less than a higher band for the same standard room. Sponsored-guest rooms are generally priced in the highest leisure category, except guests of active-duty sponsors, who take the sponsor's category. Eligibility/rank is verified at check-in. No amounts anywhere in this section. Common eligibility (summary — details vary, see the four resort entries): Active Duty / Reserve / National Guard and families (all services incl. Coast Guard, Space Force, service-academy cadets); other uniformed services (PHS, NOAA Corps); military retirees incl. gray-area; honorably discharged veterans with 100% service-connected disability (with the DoD ID forms specified); TAMP/VSI/SSB separatees within published windows; unremarried surviving spouses and qualifying former spouses; current/retired DoD & Coast Guard civilians (Edelweiss exception — see its entry); foreign military on assignment/orders; plus the Equal Access expansion (its own entry).",
        flag: "Army MWR's current resorts page lists exactly four — an older Army MWR FAQ still lists five including Cape Henry Inn; that FAQ is stale.",
        links: [AFRC_PAGE],
        source: "Army MWR — Armed Forces Hotels & Resorts",
      },
      {
        name: "Hale Koa Hotel — Waikiki, Honolulu, Hawaii",
        body: "Rates set by pay grade. Pricing structure as published — 4 categories: I: E1–E6 · II: E7–E9, WO1–CW3, O1–O3, Widows / 100% DAV · III: CW4–CW5, O4–O10, DoD Civilians, Disabled Veterans / Equal Access Act · IV: All grades — TDY / PCS / TLA, Foreign Military. Sponsored rooms at Category III, except active-duty sponsors' guests at the sponsor's category. Reservation window / stay rules as published: reservations not more than 365 days in advance; maximum stay 30 days, with no re-registering within the following 90-day period; reservations non-transferable; waitlist priority to active duty when fully reserved.",
        links: [HALEKOA_E, HALEKOA_R],
        source: "Hale Koa Hotel — eligibility; room rates",
      },
      {
        name: "Shades of Green — Walt Disney World, Florida",
        body: "Rates set by pay grade; also the Disney Military Salute ticket seller (see Deals & Discounts). Pricing structure as published — 3 categories: Category 1: E-1–E-6, Cadets · Category 2: E-7–E-9, O-1–O-3, WO-1–CW-3, Widows, Medal of Honor Recipients, 100% Disabled Veterans · Category 3: O-4–O-10, CW-4/CW-5, active and retired DoD Civilians, foreign military / DoD contractors only when assigned to a U.S. military installation, and sponsored rooms. Sponsored rooms at Category 3, except active-duty sponsors' guests at the sponsor's category. Reservation window as published: room reservations accepted up to 365 days in advance of arrival. Published extra: “Salute to Our Veterans” — honorably discharged veterans not otherwise eligible year-round may vacation at Shades of Green in January and September, subject to availability (special-offers page — seasonal programs change).",
        links: [SOG_E, SOG_R],
        source: "Shades of Green — eligibility; rates & policies",
      },
      {
        name: "Edelweiss Lodge and Resort — Garmisch, Germany (narrower eligibility)",
        body: "Rates set by pay grade. Pricing structure as published — 3 categories for standard rooms: E1–E6 · E7–E9 / CW01–CW03 / O1–O3 / Widows / 100% Disabled / Medal of Honor · CW4–CW5 / O4–O10 / Civilians / SES / NATO. Published exceptions to the rank principle: suites are the same rate for all ranks; cabins are priced separately. Sponsored-guest rooms at Category III. Reservation window as published: up to 365 days in advance. Eligibility is materially narrower — the host-nation layer: the eligibility list is based on Army in Europe Regulation 600-700, which takes precedence in any conflict; the resort is a tenant on a USAG Bavaria installation, so guests are subject to USAREUR installation-access rules/DBIDS. Two hard differences from the other AFRCs: retired DoD civilians are NOT eligible to stay (highlighted as an eligibility update on the official table), and veterans under the Disabled Veterans Equal Access Act are NOT eligible to stay and NOT eligible for installation access. 100% service-connected disabled veterans are eligible, but only with a DoD ID card obtained before arriving in Garmisch. NATO members and Dept. of State/Embassy personnel (USEUCOM AOR) must hold a 600-700 card with MWR privileges in Germany.",
        links: [EDEL_E, EDEL_E2],
        source: "Edelweiss Lodge and Resort — eligibility table; eligibility",
      },
      {
        name: "Dragon Hill Lodge — Seoul, South Korea (USAG Yongsan)",
        body: "Rates set by pay grade. Pricing structure as published: leisure standard room in 3 bands — E1–E6 / E7–E9, CW01–CW03, O1–O3 / CW4–CW5, O4–O10, All Civilians, Disabled Veterans Equal Access Act; suites published at a flat structure across those bands; a separate Official Travel structure for the standard room, split TDY / PCS-IN / PCS-OUT. Retirees are priced at retired rank; the senior occupant of the room determines the rate. Reservation window as published: reservations accepted up to 365 days in advance (FAQ). Access note as published: located on Yongsan Army Installation — DoD ID holders enter with ID plus a second form of ID; sponsored/non-DoD-ID guests follow a separate gate-access process via the lodge. The lodge's own current site still lists and operates the Yongsan location; no relocation is announced on the pages researched.",
        links: [DHL_E, DHL_R, DHL_FAQ],
        source: "Dragon Hill Lodge — eligibility; rooms & suites; FAQs",
      },
      {
        name: "The Equal Access expansion — applies at three resorts, NOT Edelweiss",
        body: "The January 2020 regulations implementing the Disabled Veterans Equal Access Act of 2018 expanded AFRC use (and commissary/exchange access — see Deals & Discounts) to: Purple Heart recipients; former prisoners of war; ALL veterans with a VA-documented service-connected disability rating; and individuals designated as Primary Family Caregivers of eligible veterans under VA's Program of Comprehensive Assistance for Family Caregivers. Identification as published: VHIC indicating PURPLE HEART, FORMER POW, or SERVICE CONNECTED, paired with a REAL ID-compliant license or U.S. passport (Dragon Hill also accepts a current VA letter stating a service-connected disability); caregivers present their VA Office of Community Care designation letter plus acceptable credential. Applies at: Hale Koa, Shades of Green, and Dragon Hill Lodge. Does NOT apply at Edelweiss — in the official wording carried on the other resorts' pages: “This expanded authorization currently does not include the Edelweiss Lodge … subject to the limitations of applicable host nation law and international agreements that have not been resolved.” Edelweiss's own table: “Veteran under Disabled Veterans Equal Access Act of 2018 — Not eligible to stay / Not Eligible for installation access.”",
        flag: "Wording conflict on shadesofgreen.org itself: two secondary/legacy official pages (an eligibility-VHIC page and an equal-access special-offers page) still state the expansion excludes “the Edelweiss Lodge and Resort or Dragon Hill Lodge” — conflicting with Shades of Green's own current main eligibility page and Dragon Hill's own current eligibility page. This section states the expansion as Hale Koa / Shades of Green / Dragon Hill, not Edelweiss, and links only the resorts' main eligibility pages — the two legacy Shades pages are not linked.",
        links: [HALEKOA_E, SOG_E, DHL_E, EDEL_E],
        source: "AFRC resort eligibility pages (Hale Koa, Shades of Green, Dragon Hill, Edelweiss)",
      },
      {
        name: "Armed Forces Vacation Club (AFVC) — program level",
        body: "Free-membership vacation club: weeklong condo/resort stays priced per unit from space-available resort inventory, plus hotels, cruises, and cars. Standard membership is free as AFVC and Army MWR publish it (an optional paid Premium tier exists in AFVC's booking engine — described only as an optional paid upgrade; verify current terms on afvclub.com before publishing specifics; Veterans Holidays is now folded into AFVC). What it offers (program types as published, structure only): R&R Vacations — fixed pricing per week, per unit, plus mandatory resort fees and taxes · Last Minute Vacations — per-week stays · High Demand — broader peak-time inventory · Short Stay — less-than-a-week stays · Resort Vacation Certificates — certificates redeemable for a 7-night stay, primarily off-peak/off-season · cruises, group travel, and all-inclusive resorts (some fees due to the resort at/before check-in). Eligibility as AFVC states it: current, veteran, and retired U.S. military including Guard/Reserve, Gold Star families, DoD civilian employees, AUSA members, and immediate family (spouses, parents, children) of all the above. Positioning: AFVC is not DoD Lodging and not an AFRC — Army MWR's AFVC page carries “No Federal or U.S. Army Endorsement Implied.” It stays in its own lane here, separate from official installation lodging.",
        links: [AFVC, AFVC_MWR],
        source: "Armed Forces Vacation Club; Army MWR",
      },
      {
        name: "MWR cabins, cottages, RV parks & campgrounds — the route, not a database",
        body: "How they run: decentralized and installation-run — there is no single DoD brand or booking engine for all of them. Each installation's MWR / Force Support Squadron Outdoor Recreation operation runs its own cabins, cottages, RV park, and campground, sets its own reservation windows (often tiered — active duty earliest), stay limits, and pet rules, and takes bookings direct (phone, online form, or its MWR site). Eligibility is “MWR-eligible patrons” for that service/installation — not the general public. Named networks, at summary level: Army MWR Outdoor Recreation / Recreation Lodging — cabins, cottages, cabanas, lodges, RV/trailer/tent sites as a standard ODR facility type (booked via the installation, e.g., Weston Lake at Fort Jackson, Camp Carlson at Fort Knox) · Navy Getaways — the Navy's named recreational-lodging network (RV Parks, Campgrounds & Vacation Rentals; CNIC publishes locations worldwide incl. Hawaii, Italy, Japan; Navy Getaways inventory also surfaces inside DoD Lodging) · Air Force FamCamp — the universal base-level brand for FSS RV/tent campgrounds, with no single central FamCamp booking portal on official pages · MCCS Recreational Lodging — cabins, chalets, trailers, cabanas, beach houses, and cottages through MCCS · Coast Guard unit MWR recreational lodging. How a traveler finds them — the published routes: (1) the installation MWR/FSS page for the destination — authoritative for inventory, windows, and booking contact; (2) Military OneSource “Best Kept Secrets” — DoD's joint-services campgrounds/facilities guide, searchable by state for location, contact information, reservation policies, amenities, and activities (produced by DoD's MWR and Resale Policy Office); (3) MilitaryINSTALLATIONS per-installation Temporary Housing pages, which list official lodging and local FamCamp/recreational options together; (4) DoD Lodging — partial coverage only (strong for Navy Getaways; most Army/AF/USMC cabins and campgrounds book only through the installation — never present DoD Lodging as a complete directory here). Cross-link: Trails & Camping covers FamCamps/public-land camping from the outdoors side.",
        links: [DOD_CAMP, OS_MWR, NAVY_GETAWAYS],
        source: "DoD (defense.gov); Military OneSource; CNIC Navy Getaways",
      },
    ],
  },
  {
    title: "Booking Channels",
    entries: [
      {
        name: "American Forces Travel (AFT) — the online channel",
        body: "What: the DoD MWR leisure-travel booking site — “the U.S. Department of Defense official online leisure travel site” — operated with Priceline (homepage: “American Forces Travel, supported by Priceline”; the provider entity is published by MCCS as Priceline Partner Network). It is the joint-services MWR online travel program arising from “a joint service initiative combining the efforts of each of the five branches of service … and the Office of the Deputy Assistant Secretary of Defense for Military Community & Family Policy” (Army MWR), and Military OneSource describes it as the online version of ITT, available 24/7. What you can book (as published): Hotels · Flights · Cars · Bundle + Save / vacation packages · Cruises · Event Tickets/activities (“direct access to more than 200,000 bookable activities”). Eligibility — broader than walk-in ITT: anyone eligible for MWR — active duty, Guard/Reserve, Coast Guard, retired military, eligible family members, DoD APF/NAF civilians — plus honorably discharged veterans (Military OneSource's current list reads “Veterans of the United States Armed Forces with a discharge status of honorable or general under honorable conditions,” the post-2021 expansion), Medal of Honor recipients, veterans with service-connected disabilities, Purple Heart recipients, former POWs, designated VA family caregivers, NOAA/PHS active-duty and retired, Coast Guard Auxiliary active duty, and sponsored ID-card family members. Verification: eligibility is validated against the DEERS database (or the Coast Guard Auxiliary database) at account creation, per AFT's official terms and Military OneSource. This section stays at that level — no document-upload or SSN flow is described.",
        links: [AFT],
        source: "American Forces Travel; Army MWR; Military OneSource",
      },
      {
        name: "ITT offices — the walk-in channel (eligibility is narrower — say so)",
        body: "What they sell: discounted tickets to local and national attractions (theme parks — this is where Disney Military Salute tickets are bought), sporting events, concerts and shows, plus cruises, tours, and vacation packages arranged with travel partners. Prices and inventory vary by installation. Service names vary: Army/Air Force = ITT under MWR/FSS; Navy = ITT under Navy MWR; Marines = Information, Tickets, and Tours under MCCS. Who can buy in person — limited: Military OneSource's in-person ITT list is: active-duty, Guard and Reserve members and ID-holding family members; retired members and ID-holding family members; DoD civilians (APF and NAF). General honorably-discharged veterans are NOT on the walk-in ITT list — their channel is AFT online. Do not conflate the broader general-MWR eligibility list with ITT ticket sales. How to find yours: there is no single ITT directory. Route: MilitaryINSTALLATIONS → your installation → Programs & Services / MWR contact, or your installation's MWR/MCCS/FSS site → “Tickets & Travel / ITT.” Cross-link My Installation.",
        links: [AMC_HOME],
        source: "Military OneSource (in-person ITT eligibility); Deals research pack",
      },
      {
        name: "Official travel is a different wall — DTMO / DTS / TMCs (routing only)",
        body: "The rule for this section: Travel HQ is leisure + Space-A. Official TDY travel and PCS entitlements do not run through AFT, ITT, or this section — cross-link PCS Move Center. DTMO (Defense Travel Management Office) — “the single focal point for commercial travel within the DoD to establish strategic direction, set policy, and centrally manage commercial travel programs”; functional oversight of the Defense Travel System, travel policy, and the travel card program, under DoDI 5154.31. DTS (Defense Travel System) — the official-travel booking/authorization system under DTMO oversight (name level here). TMCs/CTOs — Travel Management Companies (called Commercial Travel Offices in DTS) arrange official travel under DoDI 5154.31 Vol. 2: reservations are requested in a DoD online booking tool, quality-checked by the TMC, and ticketed only after the Authorizing Official approves. The best-known TMC's name is confirmed current in DTMO's TMC Directory: CWTSatoTravel (www.cwtsatotravel.com), listed e.g. for Army CONUS and Air Force Worldwide.",
        flag: "CWTSatoTravel also markets leisure products on its own site, but in the DoD system its cited role is official travel — this section files SatoTravel under Official Travel (DTMO/DTS), never under Leisure Booking, so nobody tries to book a TDY through AFT or a vacation through DTS.",
        links: [DTMO],
        source: "DTMO (travel.dod.mil); DoDI 5154.31",
      },
    ],
  },
  {
    title: "Airport Benefits",
    entries: [
      {
        name: "TSA PreCheck — uniformed members and DoD civilians",
        body: "Uniformed members: free, no application, no opt-in. TSA: “Enter the DOD ID number from the back of your common access card (CAC) into the ‘Known Traveler Number’ field of your flight reservations” — “Members of the U.S. Armed Forces do not need to opt-in.” It works for both official and personal travel (for official travel, the KTN also belongs in the DTS profile). The PreCheck indicator must appear on the boarding pass — “You cannot access the TSA PreCheck lane by presenting your CAC or other documentation.” TSA publishes the benefit under the category “Members of the U.S. Armed Forces” — this section quotes that category and does not invent a separate Guard/Reserve carve-out (Guard/Reserve members in uniformed service are members of the U.S. Armed Forces; TSA's July 2025 release repeats the same framing). Children: 12 and under may accompany eligible members in PreCheck lanes without restriction; minors 13–17 must be on the same reservation as a PreCheck-eligible parent/guardian (TSA, July 2025). DoD civilians: free but opt-in required — opt in via milConnect / ID Card Office Online before using the DoD ID as KTN. Retirees and regular veterans: TSA publishes no free DoD-ID benefit for them — “Veterans not enrolled in TSA PreCheck will go through standard screening lanes.” They enroll through the standard civilian process, or via the Gold Star / VETS Safe Travel entry if they qualify. Do not promise retirees free PreCheck via a retiree ID number.",
        links: [TSA_MIL, TSA_MIL2],
        source: "TSA — PreCheck, military travelers",
      },
      {
        name: "TSA PreCheck — Gold Star / Military Survivor families and VETS Safe Travel Act (expanded July 2025)",
        body: "Gold Star families: free enrollment — TSA's July 2, 2025 release (“Serve with Honor, Travel with Ease”) waives the PreCheck enrollment fee for Gold Star family members (spouses, parents, children, siblings of those lost in military service) through its enrollment providers (CLEAR, IDEMIA, Telos). The same release announced a discount on enrollment for spouses of military/uniformed service members, mobile enrollment events near major installations, and expedited/dedicated lanes at select airports near larger installations. VETS Safe Travel Act: free PreCheck enrollment for veterans whom VA has determined to have a severe service-connected disability — IDEMIA's published process: VA places a TSA PreCheck Application Fee Waiver Letter in the eligible veteran's VA.gov account; the veteran emails it to IDEMIA with “VETS Safe” in the subject line and receives a code for free enrollment/renewal. VA decides eligibility — TSA and IDEMIA cannot verify it. The limit: severe service-connected disability as VA determines — not all disabled veterans, and no rating-percentage shortcut is published.",
        flag: "Naming variance: TSA's release says “Gold Star families”; IDEMIA's live help center implements it as “Military Survivor families” — free enrollment/renewal on or after July 1, 2025, routed via a TAPS (Tragedy Assistance Program for Survivors) verification letter or a TSA acknowledgment form obtained from the TSA Contact Center, emailed to IDEMIA with “Military Survivor” in the subject line to receive a free-enrollment code. This section uses “Gold Star / Military Survivor families” and links the TSA pages — it does not invent an enrollment URL.",
        links: [TSA_2025, IDEMIA],
        source: "TSA (Jul 2, 2025 release); IDEMIA enrollment help center",
      },
      {
        name: "TSA military lanes and TSA Cares (not PreCheck — don't merge them)",
        body: "Military lanes: TSA publishes dedicated military lanes / front-of-line service at over 30 airports for service members, veterans, and immediate family traveling with them, on showing a valid military or veteran ID at the lane — a separate thing from PreCheck lanes. TSA Cares: assistance for injured members, veterans, and wounded warriors — request 72 hours prior to travel.",
        links: [TSA_MIL2, TSA_LANES, TSA_CARES],
        source: "TSA — military lanes; TSA Cares",
      },
      {
        name: "USO airport centers (and the Jan 1, 2025 admissions policy)",
        body: "What: free airport lounges/centers (before or after security, depending on the airport): snacks and coffee, seating/rest space, TVs and games, free Wi-Fi, help from staff/volunteers — including help for stranded members in weather/family emergencies. Hours vary by center (some 24/7, 365 days); amenities and hours are per center — this section links the USO's own material rather than publishing hours. Who can enter — USO Admissions Policy effective Jan. 1, 2025 (narrower than many members assume): the USO's stated focus is “supporting the active-duty Armed Forces community, rather than veterans” — U.S. Armed Forces active duty, Reserve and Guard members and their dependents; U.S. military retirees with valid DoD ID cards (and their dependents with valid DoD ID cards); and Gold Star Families/Families of the Fallen and their guests. USO states explicitly that other groups — including veterans and 100% disabled veterans as such — are not permitted access to USO Centers. Dependents under 18 must be accompanied/supervised (per-center pages). Locator route (no invented URL): uso.org → find your nearest USO center by searching the site's map (“Find your nearest USO center by searching our map” — USO's own instruction). Center pages live on regional USO subdomains; the instruction: search by airport/city on USO's map before you travel, and confirm that center's hours, terminal, and pre-/post-security location.",
        flag: "Count discrepancy on uso.org itself: USO's 2025 airport story says “more than 230 locations around the world, more than 60 of these are USO airport lounges,” while other current USO pages still say “more than 250 locations.” This section prints “230+ locations worldwide, 60+ at airports” with the airport story as source, and never locks an exact count.",
        links: [USO_STORY],
        source: "USO — airport lounges story; USO Admissions Policy (Jan 1, 2025)",
      },
      {
        name: "Airline military benefits — generic route",
        body: "Every major U.S. airline publishes its own military page with its own rules — free checked bags (typically more/heavier on orders than on personal travel), possible military/government fares in some markets (often bookable only by phone), early boarding with military ID. Policies vary by airline and change; this section hard-codes no bag counts — it routes you to the airline's official military page before you fly. American Airlines' military-benefits page is linked as the worked example.",
        links: [AA_MIL],
        source: "Airlines' official military pages (American Airlines linked as example)",
      },
    ],
  },
];
