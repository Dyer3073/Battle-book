// Deals & discounts library — static reference data transcribed from the
// researched deals pack (~/workspace/military-app/deals/deals.md, researched
// November 8, 2026). Summaries, eligibility statements, caveats, and links
// come only from the pack.
//
// Fidelity rules baked into this data:
// - No deals, percentages, programs, or URL patterns beyond what the pack
//   states. Where the pack flags a caveat (secondary-roundup carrier terms,
//   seasonal Universal offers, annual-guide meal lists), the caveat ships
//   with the entry.
// - MWR / ITT / commissary / Space-A eligibility limits render exactly as
//   the pack states them — none of them is open to general veterans.
// - The finder never presents a live deal or current event listing. The
//   only place-based deep link is Eventbrite's discovery pattern, exactly
//   as documented in the pack (Part B10); every other platform searches
//   on its own site.

export type DealLink = { label: string; url: string };

/* ------------------------------ Part A ------------------------------ */

export type DealPlatform = {
  name: string;
  kind: string;
  what: string;
  eligible: string;
  verification: string;
  link: DealLink;
};

export const DEAL_PLATFORMS: DealPlatform[] = [
  {
    name: "GovX",
    kind: "Commercial",
    what: "Marketplace for gear, apparel, electronics, event tickets, and travel at member pricing; also acts as the status verifier behind many partner brands' own military stores (e.g., YETI, GORUCK).",
    eligible: "Current and former U.S. military, first responders, and government employees (GovX's own categories).",
    verification: "Its own system (GovX ID) — work email, DD-214/document upload, or DMDC check.",
    link: { label: "govx.com", url: "https://www.govx.com" },
  },
  {
    name: "ID.me Shop",
    kind: "Commercial",
    what: "ID.me's offers marketplace — thousands of stores/brands with military offers in one place.",
    eligible: "ID.me's military community groups: service members, veterans, retirees, and military spouses/family, per ID.me group definitions.",
    verification: "ID.me itself — verify once with ID.me, reuse everywhere ID.me is accepted.",
    link: { label: "shop.id.me/military", url: "https://shop.id.me/military" },
  },
  {
    name: "Vet Tix",
    kind: "Nonprofit, 501(c)(3)",
    what: "Free donated event tickets — sports, concerts, performing arts, family events — given to members (a small delivery fee applies per ticket award).",
    eligible: "Currently serving military, honorably discharged veterans of all branches, and immediate family of those killed in action (as Vet Tix states it).",
    verification: "Vet Tix service verification; ID.me is used in its sign-up verification (per Vet Tix's June 2026 press release).",
    link: { label: "vettix.org", url: "https://www.vettix.org" },
  },
  {
    name: "1st Tix",
    kind: "Nonprofit, 501(c)(3)",
    what: "Vet Tix's sister program — same free donated event ticket model, for first responders.",
    eligible: "Current and retired first responders: law enforcement, firefighters, EMTs, 911 dispatchers, registered nurses (as 1st Tix states it).",
    verification: "1st Tix's own service verification.",
    link: { label: "1sttix.org", url: "https://www.1sttix.org" },
  },
  {
    name: "American Forces Travel",
    kind: "Official DoD",
    what: "The DoD MWR leisure-travel booking site (operated with Priceline): hotels, flights, cars, cruises, vacation packages, attraction/event tickets at military rates. It is the joint-services MWR online travel program and the online extension of installation ITT offices.",
    eligible: "Anyone eligible for MWR — active duty, Guard/Reserve, Coast Guard, retired military, eligible family members, DoD APF/NAF civilians — plus honorably discharged veterans (expansion effective 2021), per Military OneSource.",
    verification: "DEERS eligibility check on-site (last name, date of birth, last-4 SSN).",
    link: { label: "americanforcestravel.com", url: "https://www.americanforcestravel.com" },
  },
  {
    name: "Armed Forces Vacation Club (AFVC)",
    kind: "Commercial, DoD-affiliated program",
    what: "Free-membership vacation club: weeklong condo/resort stays priced per unit from space-available resort inventory, plus hotels, cruises, and cars.",
    eligible: "Current, veteran, and retired U.S. military including Guard/Reserve, Gold Star families, DoD civilian employees, AUSA members, and immediate family (spouses, parents, children) of all the above — as AFVC states it.",
    verification: "AFVC's own registration/eligibility check.",
    link: { label: "afvclub.com", url: "https://www.afvclub.com" },
  },
  {
    name: "The Exchange (ShopMyExchange)",
    kind: "Official DoD",
    what: "AAFES online exchange — tax-free shopping.",
    eligible: "In-store shopping is for military ID-card holders (active duty, retirees, dependents, 100% disabled veterans, etc.). Veterans online shopping benefit: since Nov 11, 2017, all honorably discharged veterans have lifetime online exchange shopping (AAFES and Navy Exchange).",
    verification: "VetVerify / DEERS records check at registration.",
    link: { label: "shopmyexchange.com", url: "https://www.shopmyexchange.com" },
  },
  {
    name: "Veterans Canteen Service — ShopVCS",
    kind: "Official VA",
    what: "VA-run online store: brand-name retail at member pricing, plus tickets and travel offers via its MemberDeals partnership. Proceeds fund VA programs.",
    eligible: "Veterans enrolled in VA health care, their families, and VA employees (per VA News).",
    verification: "Registration on-site, tied to VA enrollment.",
    link: { label: "shopvcs.com", url: "https://www.shopvcs.com" },
  },
  {
    name: "ExpertVoice",
    kind: "Commercial",
    what: "Pro-deal platform: insider pricing (up to 60% off claimed) across 650+ brands, mostly outdoor/apparel/gear.",
    eligible: "Military members, military spouses, veterans, first responders, law enforcement, EMS, government employees, and other industry professionals — as ExpertVoice states it.",
    verification: "ExpertVoice's own review of proof (.mil email, Veteran ID, DD-214, pay stub/LES).",
    link: { label: "expertvoice.com/public-service", url: "https://www.expertvoice.com/public-service" },
  },
  {
    name: "Guidefitter",
    kind: "Commercial",
    what: "Outdoor pro-purchase platform (~350+ brand programs: hunting, fishing, outdoor gear).",
    eligible: "Military “Insider” category: Active Duty, Active Reserves, National Guard, Veteran, or Retired (per its help center; civilian contractors not accepted unless veteran/retired).",
    verification: "Guidefitter's own document review (LES, .mil email, DD-214-type documents); Insider status renews yearly.",
    link: { label: "guidefitter.com", url: "https://www.guidefitter.com" },
  },
];

export type StandingProgram = { name: string; note: string; url?: string };

export const STANDING_PROGRAMS: StandingProgram[] = [
  {
    name: "Lowe's — Everyday Military Discount",
    note: "10% off most full-price items in-store/online for current/former U.S. armed forces members (honorable) and spouses; enroll via MyLowe's Rewards with ID.me verification.",
    url: "https://www.lowes.com/l/about/honor-our-military",
  },
  {
    name: "Home Depot",
    note: "10% off eligible purchases for active duty, veterans, retirees, Guard/Reserve, and spouses; verified via SheerID through the Home Depot app (a $400/yr discount cap has been reported — check current terms in-app).",
    url: "https://www.homedepot.com/military",
  },
  {
    name: "Nike",
    note: "10% off most items online/app (single-use code via SheerID, new code every 7 days, applies to first $500) and in Nike stores with military ID; active, reserve, veterans, retirees, and spouses/dependents of active personnel.",
  },
  {
    name: "Apple — Veterans and Military Purchase Program",
    note: "10% off through Apple's dedicated military storefront only (not the regular store or Apple Store registers); current/veteran members plus immediate family in the same household; verified via ID.me; annual quantity limits apply.",
    url: "https://www.apple.com/shop/browse/home/veterans_military",
  },
  {
    name: "Samsung — Military Offer Program",
    note: "On Samsung.com: up to 30% off varies by product; active duty, veterans, and retirees; verification via ID.me or a .mil email address.",
  },
  {
    name: "AT&T — Appreciation Savings",
    note: "Up to 20% off unlimited wireless plans for active duty, veterans, reservists, and military families (member must be primary account holder).",
    url: "https://www.att.com/offers/discount-program/military-discount/",
  },
  {
    name: "T-Mobile",
    note: "Dedicated discounted military plans (e.g., military versions of its main plans) for active duty, veterans, Guard/Reserve, and Gold Star families; check T-Mobile's military page for current plan names/prices. Caveat: these terms were confirmed from secondary roundups, not read off T-Mobile's own page — verify amounts on the official page.",
  },
  {
    name: "Verizon",
    note: "Military account discount for active duty, retirees, veterans, Guard/Reserve, and some Gold Star/next-of-kin; verified via ID.me; check Verizon's military page for current amounts. Caveat: these terms were confirmed from secondary roundups, not read off Verizon's own page — verify amounts on the official page.",
  },
  {
    name: "Disney Military Salute",
    note: "Specially priced park tickets plus resort discounts — and note the limit: for active or retired military (incl. Guard/Reserve, Coast Guard, Space Force, PHS & NOAA commissioned corps) and spouses with valid military ID, not open to non-retired veterans generally (100% permanently disabled veterans with military ID excepted). Sold through base ITT offices and Shades of Green, not on Disney's website.",
  },
  {
    name: "Waves of Honor (SeaWorld / Busch Gardens / Sesame Place)",
    note: "One complimentary admission per year for U.S. active-duty personnel, activated/drilling reservists, and National Guardsmen, plus up to 3 direct dependents; register via ID.me and show military ID at the gate. Retirees/veterans are not eligible for the free admission; separate discounted veteran offers exist.",
    url: "https://seaworld.com/orlando/tickets/military-discount/",
  },
  {
    name: "Universal Orlando / Hollywood military offers",
    note: "Universal runs military ticket offers (typically via ITT offices and its military page) for active duty, retirees, and DoD civilians; terms change seasonally — check the parks' official military pages and your ITT office.",
  },
  {
    name: "America the Beautiful Pass (National Park Service)",
    note: "Military Annual Pass is free for current U.S. military members and dependents; Military Lifetime Pass is free for veterans and Gold Star Family members. Covers entrance/day-use fees at NPS, Fish & Wildlife, Forest Service, BLM, Bureau of Reclamation, and Army Corps sites.",
    url: "https://www.nps.gov/planyourvisit/passes.htm/index.htm",
  },
  {
    name: "State hunting & fishing license discounts",
    note: "Many states discount or waive hunting/fishing licenses for veterans, disabled veterans, or active duty — it varies entirely by state, so there is no single national program. Route: your state fish & wildlife agency's licensing page, cross-checked on your state veterans affairs page (see the NASDVA directory in the finder below).",
  },
];

/* ------------------------------ Part B ------------------------------ */

export const FINDER_FRAMING =
  "Deals and events live on these sites and change daily — pick your category and place, and we'll point you at the right source to search. Nothing here is a live listing: each platform searches on its own site, so the finder routes you to the source that covers what you're looking for.";

export const FINDER_CATEGORIES = [
  "Event tickets",
  "Veteran events & community",
  "Travel & lodging",
  "Attractions near me",
  "Food & groceries",
  "On-base services",
] as const;

export type FinderCategory = (typeof FINDER_CATEGORIES)[number];

export type FinderSource = {
  name: string;
  kind: string;
  lists: string;
  note?: string;
  url?: string;
  urlLabel?: string;
  categories: FinderCategory[];
  /** Eventbrite is the one platform with a documented place-based link
   *  pattern (pack Part B10); its link is built from the place input. */
  eventbrite?: boolean;
};

export const FINDER_SOURCES: FinderSource[] = [
  {
    name: "Vet Tix event listings",
    kind: "Nonprofit",
    lists: "Free event tickets nationwide — sports, concerts, arts, family. Listings are browsable by state, category, and date on vettix.org; the Vet Tix app offers event search, and members can set state/city alerts.",
    note: "Search happens on-site/in-app — there is no public search link to deep-link to.",
    url: "https://www.vettix.org",
    urlLabel: "vettix.org",
    categories: ["Event tickets", "Attractions near me"],
  },
  {
    name: "USO — centers + events",
    kind: "Nonprofit (chartered; not part of DoD)",
    lists: "250+ USO centers (airports, installations) and free local programs/events run by each center/region. Find your nearest center on the locator map at uso.org; each region/center runs its own site with center pages and upcoming events.",
    note: "Center entry generally requires a valid DoD ID (active duty, Guard/Reserve, and dependents; policies per center).",
    url: "https://www.uso.org",
    urlLabel: "uso.org",
    categories: ["Veteran events & community", "Travel & lodging", "On-base services"],
  },
  {
    name: "Team Red, White & Blue (Team RWB)",
    kind: "Nonprofit",
    lists: "Local chapter fitness/social events — runs, workouts, socials — plus virtual events. Chapters are found via the chapter map on its site; events are searchable by location inside the Team RWB Member App.",
    note: "Membership is free and open to veterans, service members, and civilian supporters.",
    url: "https://teamrwb.org",
    urlLabel: "teamrwb.org",
    categories: ["Veteran events & community"],
  },
  {
    name: "The Mission Continues",
    kind: "Nonprofit",
    lists: "Local Service Platoons — recurring volunteer service projects — in roughly 40 cities, plus fellowship/leadership programs.",
    note: "Travis Manion Foundation announced its acquisition of The Mission Continues on Jul 9, 2025 — programs continue under the combined organization; check the site for the current city list.",
    url: "https://www.missioncontinues.org",
    urlLabel: "missioncontinues.org",
    categories: ["Veteran events & community"],
  },
  {
    name: "Wounded Warrior Project (WWP)",
    kind: "Nonprofit",
    lists: "Free Alumni Connection events (outings, family events) and programs for registered warriors. Eligible: service on/after Sep 11, 2001 (incl. active duty, transitioning, Guard/Reserve), plus family members/caregivers, as WWP states it.",
    note: "No public location search — events surface through the MyWWP app / member newsletter after registration (verification via ID.me or Login.gov).",
    url: "https://www.woundedwarriorproject.org/programs/alumni",
    urlLabel: "woundedwarriorproject.org/programs/alumni",
    categories: ["Veteran events & community"],
  },
  {
    name: "VFW Post Finder",
    kind: "Nonprofit VSO",
    lists: "Local VFW posts — many run public events, halls, and community programs. “Find a Post” search by ZIP on vfw.org, on-site.",
    note: "Post membership requires qualifying overseas/conflict service, but the finder is public.",
    url: "https://www.vfw.org",
    urlLabel: "vfw.org",
    categories: ["Veteran events & community"],
  },
  {
    name: "American Legion Post Locator",
    kind: "Nonprofit VSO",
    lists: "Local American Legion posts — events, halls, youth/family programs. Search posts by city or ZIP code on-site; the Legion app also offers Find a Post by ZIP/GPS.",
    url: "https://www.legion.org/posts",
    urlLabel: "legion.org/posts",
    categories: ["Veteran events & community"],
  },
  {
    name: "Installation MWR / ITT offices",
    kind: "Official DoD",
    lists: "Every installation's MWR program runs local events and recreation, and its ITT (Information, Tickets & Travel) office sells discounted local attraction and event tickets — this is where Disney Military Salute tickets and most local theme-park/sports military tickets are actually bought.",
    note: "There is no single public MWR-wide search portal. Route: your installation's MWR site (branch portals in “On-base life & travel help” below), or American Forces Travel for the DoD-wide online version. The DoD MWR Libraries portal is digital-library access only — not a tickets portal.",
    categories: ["Event tickets", "Attractions near me", "Travel & lodging", "On-base services"],
  },
  {
    name: "State veterans affairs — via NASDVA",
    kind: "Official, state",
    lists: "State-run veteran benefits, events, license discounts, and state veterans homes/parks programs — varies by state. The National Association of State Directors of Veterans Affairs directory links to every state/territory department of veterans affairs; VA.gov also points users to NASDVA.",
    url: "https://www.nasdva.us",
    urlLabel: "nasdva.us",
    categories: ["Veteran events & community", "Attractions near me"],
  },
  {
    name: "Eventbrite",
    kind: "Commercial — general platform",
    lists: "General public events; veterans events and veteran job fairs do appear on it. Enter your city and state above and this card opens Eventbrite's discovery page for your place — then search “veterans” there.",
    note: "A general route, not a military program: treat the discovery page as a place to search on-site, not a guaranteed veterans listing.",
    categories: ["Event tickets", "Veteran events & community", "Attractions near me"],
    eventbrite: true,
  },
  {
    name: "Pro sports military tickets",
    kind: "Generic entry",
    lists: "Military ticket offers are per-team and vary by season: many teams sell through GovX or ID.me Shop, and some run their own military nights/appreciation games with ID at the box office. Check the team's official tickets page first, then GovX/ID.me Shop.",
    note: "No single league-wide program exists.",
    categories: ["Event tickets", "Attractions near me"],
  },
  {
    name: "American Forces Travel",
    kind: "Official DoD",
    lists: "DoD MWR online travel booking: hotels, flights, cars, cruises, vacation packages, and attraction/event tickets at military rates — the online extension of installation ITT offices.",
    note: "Open to anyone eligible for MWR plus honorably discharged veterans.",
    url: "https://www.americanforcestravel.com",
    urlLabel: "americanforcestravel.com",
    categories: ["Travel & lodging", "Event tickets", "Attractions near me"],
  },
  {
    name: "Armed Forces Vacation Club (AFVC)",
    kind: "Commercial, DoD-affiliated program",
    lists: "Weeklong condo/resort stays priced per unit from space-available resort inventory, plus hotels, cruises, and cars. Membership is free.",
    url: "https://www.afvclub.com",
    urlLabel: "afvclub.com",
    categories: ["Travel & lodging"],
  },
  {
    name: "Space-A travel (AMC)",
    kind: "Official DoD",
    lists: "Fly on DoD aircraft seats left over after mission/duty passengers, at no or minimal cost — a privilege, not an entitlement; mission comes first and schedules change.",
    note: "Most veterans are not Space-A eligible. Retirees and veterans with a permanent service-connected disability rated as total (100%) are Category VI, CONUS/territory routes only. Full category list in “On-base life & travel help” below.",
    url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Space-Available-Travel-(Space-A-Travel)?serv=127",
    urlLabel: "Army Benefits — Space-A fact sheet",
    categories: ["Travel & lodging"],
  },
  {
    name: "Commissary (DeCA)",
    kind: "Official DoD",
    lists: "On-base grocery stores (~235–240 worldwide) priced to deliver everyday savings — the YES! (Your Everyday Savings) program, sales flyers, digital coupons/Rewards Card, and Commissary CLICK2GO online ordering with curbside pickup.",
    note: "Who can shop: active, Guard/Reserve, and retired uniformed service members, Medal of Honor recipients, authorized family members — and, since Jan 1, 2020, all veterans with a VA-documented service-connected disability, Purple Heart recipients, former POWs, and VA-designated primary family caregivers. General veterans without a service-connected disability are not commissary-eligible.",
    url: "https://shop.commissaries.com",
    urlLabel: "shop.commissaries.com",
    categories: ["Food & groceries", "On-base services"],
  },
  {
    name: "Operation Homefront",
    kind: "Nonprofit, 501(c)(3)",
    lists: "Critical Financial Assistance grants for military families in crisis — explicitly including food/groceries, rent/mortgage, utilities, car/home repair, and emergency travel — plus Holiday Meals for Military meal-kit/grocery events.",
    note: "Core eligibility, as the program states it: post-9/11 service with a wound/illness/injury in the line of duty, or deployed service members E-1–E-6 with DEERS-eligible dependents (some assistance windows differ).",
    url: "https://operationhomefront.org/critical-financial-assistance/",
    urlLabel: "operationhomefront.org",
    categories: ["Food & groceries"],
  },
  {
    name: "Feeding America",
    kind: "Nonprofit",
    lists: "The national food-bank network (200 food banks) — its Find Your Local Food Bank tool searches by ZIP at feedingamerica.org.",
    note: "Not a veteran-only program: general food assistance open to anyone in need. Member food banks serve veterans and military families in their communities, and some run veteran-specific distributions.",
    url: "https://feedingamerica.org",
    urlLabel: "feedingamerica.org",
    categories: ["Food & groceries"],
  },
  {
    name: "Annual Veterans Day free-meal guides",
    kind: "Annual guides — not guarantees",
    lists: "Each fall, Military.com and The Military Wallet publish Veterans Day free-meals/discounts roundups, and VA News (news.va.gov) publishes the VA's own annual Veterans Day discounts list. Typical pattern: one free entrée from a limited menu, dine-in, participating locations only, on/around Nov 11, proof of service required.",
    note: "These are annual guides, not guarantees — call the local restaurant first, and never treat last year's list as this year's promise.",
    url: "https://news.va.gov",
    urlLabel: "VA News (annual list)",
    categories: ["Food & groceries"],
  },
  {
    name: "Restaurant chains — ask locally",
    kind: "Generic entry",
    lists: "Many chains offer year-round military discounts, but they are set by the chain or the individual franchise, vary by location, and change without notice.",
    note: "Ask before ordering, bring military ID/proof of service, and confirm at your local restaurant.",
    categories: ["Food & groceries"],
  },
  {
    name: "Single-member programs (SMP / BOSS / Liberty)",
    kind: "Official DoD",
    lists: "Cheap or free trips and events, recreation centers to hang out in, and volunteering for single/unaccompanied members: the Single Marine Program (USMC — open to any single active-duty member at the installation), Army BOSS, Navy Liberty, and the Air Force Single Airman Initiative. Full details in “On-base life & travel help” below.",
    url: "https://www.usmc-mccs.org/marine-family-support/single-marine-program",
    urlLabel: "Single Marine Program (USMC)",
    categories: ["On-base services"],
  },
];

/* ------------------------------ Part C ------------------------------ */

export type OnBaseEntry = {
  name: string;
  body: string;
  note?: string;
  list?: string[];
  links: DealLink[];
};

export type OnBaseGroup = { title: string; intro?: string; entries: OnBaseEntry[] };

export const ONBASE_GROUPS: OnBaseGroup[] = [
  {
    title: "MCCS — Marine Corps Community Services (USMC)",
    entries: [
      {
        name: "MCCS",
        body: "The Marine Corps' MWR + family services organization in one. MCCS runs the on-base quality-of-life system at every Marine installation: ITT/tickets & travel, recreation centers, outdoor recreation, the Single Marine Program, Semper Fit/fitness, libraries, bowling, golf, marinas, lodging coordination, and Marine & Family programs (family readiness, employment, counseling support, youth activities). Each installation has its own MCCS site with local event calendars and program pages.",
        note: "Who it serves: Marines and their families first; most MWR activities follow standard DoD MWR eligibility (next section).",
        links: [{ label: "usmc-mccs.org", url: "https://www.usmc-mccs.org" }],
      },
    ],
  },
  {
    title: "MWR by branch",
    intro:
      "MWR (Morale, Welfare, and Recreation) = free/discounted tickets, travel, recreation, fitness, golf, bowling, libraries, gear rental, and lodging on/near installations. Eligibility (per Military OneSource / DoDI 1015.10): full access for active-duty service members and their families and for Guard/Reserve members and their families; retirees and DoD/Coast Guard civilians have access to most programs; some groups have limited access set by the installation commander. Note: general veterans without retiree/disabled-veteran status are not broadly MWR-eligible.",
    entries: [
      {
        name: "Army MWR (Family and MWR / FMWR)",
        body: "The Army's MWR portal; installation sites follow the pattern [installation].armymwr.com. Army MWR also runs the Armed Forces Recreation Centers (below).",
        links: [{ label: "armymwr.com", url: "https://www.armymwr.com" }],
      },
      {
        name: "Navy MWR",
        body: "Tickets/travel, recreation, the Liberty program, and Navy Gateway Inns & Suites lodging.",
        links: [{ label: "navymwr.org", url: "https://www.navymwr.org" }],
      },
      {
        name: "Air Force Services (AFSVC / Force Support Squadrons)",
        body: "Delivered locally by each base's Force Support Squadron (FSS) — Outdoor Recreation, ITT, Aero Clubs, Single Airman programming; the Air Force Services Center coordinates service-wide.",
        note: "There is no single consumer portal equivalent to armymwr.com — route to your base FSS page.",
        links: [],
      },
      {
        name: "Coast Guard MWR",
        body: "Recreation, tickets, and lodging (incl. CG vacation rentals/campgrounds) for the Coast Guard community.",
        links: [{ label: "coastguardmwr.org", url: "https://www.coastguardmwr.org" }],
      },
      {
        name: "MWR overview & eligibility — Military OneSource",
        body: "Military OneSource's overview of what MWR is and who is eligible.",
        links: [
          {
            label: "About MWR — Military OneSource",
            url: "https://www.militaryonesource.mil/military-basics/extended-family-friend/about-mwr-morale-welfare-and-recreation/",
          },
        ],
      },
      {
        name: "DoD MWR Libraries",
        body: "Free ebooks, audiobooks, movies, and databases with DoD ID/DEERS login.",
        note: "Digital-library access only — this is not a tickets portal.",
        links: [{ label: "dodmwrlibraries.org", url: "https://www.dodmwrlibraries.org" }],
      },
      {
        name: "Armed Forces Recreation Centers (AFRCs)",
        body: "Four DoD resorts run through Army MWR for all branches, with rates set by pay grade. Eligible: active duty, Guard/Reserve, retirees, DoD/Coast Guard civilians, and — at Hale Koa, Shades of Green, and Dragon Hill only — the Disabled Veterans Equal Access Act categories (Purple Heart recipients, former POWs, veterans with any VA service-connected disability rating, designated caregivers). Each resort verifies category at check-in; confirm on the resort's own eligibility page.",
        note: "Edelweiss does not honor the Equal Access expansion (German host-nation rules) — the exception to the list above.",
        list: [
          "Hale Koa Hotel — Waikiki, Hawaii (halekoa.com)",
          "Shades of Green — Walt Disney World, Florida (shadesofgreen.org) — also the Disney Military Salute ticket seller",
          "Edelweiss Lodge and Resort — Garmisch, Germany (edelweisslodgeandresort.com)",
          "Dragon Hill Lodge — Seoul, South Korea (dragonhilllodge.com)",
        ],
        links: [],
      },
      {
        name: "On-base lodging chains",
        body: "Army IHG hotels, Navy Gateway Inns & Suites, Air Force Inns, and MWR campgrounds/RV parks/cabins: priced below market for eligible patrons; book via each service's lodging page or your installation MWR.",
        links: [],
      },
    ],
  },
  {
    title: "Single-member programs",
    intro:
      "Built for single/unaccompanied junior members: cheap or free trips and events, recreation centers to hang out in, volunteering, and a formal channel to raise barracks/quality-of-life issues to command. A great first stop for a new member at a new base.",
    entries: [
      {
        name: "USMC — Single Marine Program (SMP)",
        body: "Serves single/unaccompanied Marines and any other single active-duty service member at the installation; runs the SMP recreation centers (free hangout spaces — gaming, movies, pool, computers), trips, tournaments, volunteer projects (food banks, Special Olympics, Habitat for Humanity), and SMP councils that carry quality-of-life concerns to the command.",
        links: [{ label: "SMP — usmc-mccs.org", url: "https://www.usmc-mccs.org/marine-family-support/single-marine-program" }],
      },
      {
        name: "Army — BOSS (Better Opportunities for Single Soldiers)",
        body: "Army-wide since 1989; four pillars — quality of life, community service, recreation & leisure, life skills. Open to single Soldiers, single parents, and geographically separated members; activities are also open to members of all services, Guard/Reserve, and DoD civilians at many installations.",
        links: [{ label: "BOSS — armymwr.com", url: "https://www.armymwr.com/programs-and-services/boss" }],
      },
      {
        name: "Navy — Liberty Program",
        body: "Recreation for single sailors (typically 18–25 focus): Liberty Centers with movies, games, computers/Wi-Fi, plus day trips and group outings to sporting events. Navy installations also run a Single Sailor Program alongside Liberty.",
        links: [{ label: "Liberty — navymwr.org", url: "https://www.navymwr.org/programs/liberty" }],
      },
      {
        name: "Air Force — Single Airman Initiative",
        body: "Air Force-wide initiative for single airmen (ages 18–26 emphasis): recreational activities at little or no cost, run by the base Force Support Squadron through Outdoor Recreation, Arts & Crafts, Aero Club, etc.",
        note: "Find it on your base FSS page.",
        links: [],
      },
      {
        name: "Coast Guard",
        body: "No separately named single-member program was verified — single-member trips/events run through Coast Guard MWR at the unit/base level.",
        links: [{ label: "coastguardmwr.org", url: "https://www.coastguardmwr.org" }],
      },
      {
        name: "Cross-service guide — Military OneSource",
        body: "Military OneSource's overview of single service member programs across the branches.",
        links: [
          {
            label: "Single service member programs — Military OneSource",
            url: "https://www.militaryonesource.mil/resources/millife-guides/friendships-single-service-member/",
          },
        ],
      },
    ],
  },
  {
    title: "ITT — Information, Tickets & Travel offices",
    entries: [
      {
        name: "What ITT sells",
        body: "Discounted tickets to local and national attractions (theme parks — this is where Disney Military Salute tickets are bought), sporting events, concerts and shows, plus cruises, tours, and vacation packages arranged with travel partners. Prices and inventory vary by installation.",
        note: "Who can buy: in-person ITT eligibility is limited to the military community — active-duty, Guard and reserve members and ID-holding family members, retirees, and other MWR-eligible patrons (per Military OneSource); bring your military ID.",
        links: [],
      },
      {
        name: "How to find your ITT office",
        body: "There is no single ITT directory. Go to your installation's MWR/MCCS/FSS site (branch portals above) and open its “Tickets & Travel / ITT” page. The 24/7 online version of ITT is American Forces Travel.",
        note: "Eligibility contrast: American Forces Travel's eligibility is broader than walk-in ITT — it includes honorably discharged veterans.",
        links: [{ label: "americanforcestravel.com", url: "https://www.americanforcestravel.com" }],
      },
    ],
  },
  {
    title: "Travel help",
    entries: [
      {
        name: "Space-A (Space-Available travel)",
        body: "Fly on DoD aircraft seats left over after mission/duty passengers, at no or minimal cost — a privilege, not an entitlement; mission comes first and schedules change. Run by Air Mobility Command (AMC) terminals; eligibility and priority are set by DoDI 4515.13 in six categories. Sign-up runs through AMC (new AMC Travel Self-Signup Tool live as of Mar 26, 2026).",
        list: [
          "Cat I — emergency leave (unfunded)",
          "Cat II — accompanied Environmental & Morale Leave (EML)",
          "Cat III — ordinary leave, house-hunting permissive TDY, Medal of Honor holders",
          "Cat IV — unaccompanied EML / dependents of members deployed 30+ days",
          "Cat V — permissive TDY (non-house-hunting), students, unaccompanied command-sponsored dependents",
          "Cat VI — retirees and accompanied dependents, eligible Guard/Reserve, and veterans with a permanent service-connected disability rated as total (100%) — CONUS/territory routes only for that veteran category",
        ],
        note: "Most other veterans are not Space-A eligible — that limit is the rule, not the exception.",
        links: [
          {
            label: "Space-A fact sheet — Army Benefits",
            url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Space-Available-Travel-(Space-A-Travel)?serv=127",
          },
          {
            label: "Space-A FAQ example — Ramstein AB",
            url: "https://www.ramstein.af.mil/About/Fact-Sheets/Article/303829/space-a-frequently-asked-questions/",
          },
        ],
      },
      {
        name: "American Forces Travel",
        body: "The joint-service MWR program (all five branches + DoD) powered by Priceline — the official MWR online leisure-travel site: hotels, flights, cruises, cars, packages, and event tickets. Full entry in “Deal apps & platforms” above.",
        links: [{ label: "americanforcestravel.com", url: "https://www.americanforcestravel.com" }],
      },
      {
        name: "Airline military benefits",
        body: "Every major U.S. airline publishes its own military page with its own rules — free checked bags (typically more bags/heavier limits on orders than on personal travel), possible military/government fares in some markets (often bookable only by phone), and early boarding with military ID.",
        note: "Policies vary by airline — check the airline's page before you fly. Bag counts are not listed here because they change.",
        links: [
          {
            label: "Example — American Airlines military benefits",
            url: "https://www.aa.com/web/i18n/customer-service/programs-products/military-benefits.html",
          },
        ],
      },
      {
        name: "TSA PreCheck for service members",
        body: "Free for all uniformed service members (incl. Guard/Reserve) and DoD civilians — no application: put your DoD ID number in the Known Traveler Number field when booking; the PreCheck indicator must appear on the boarding pass (a CAC alone doesn't open the lane). DoD civilians must opt in first via milConnect. Free enrollment also extends to Gold Star family members (TSA program launched July 2025) and, under the VETS Safe Travel Act (2025), to VA-enrolled veterans whose service-connected disability requires a VA-issued wheelchair/prosthetic (enrollment via IDEMIA). Regular veterans/retirees otherwise enroll and pay like civilians.",
        links: [{ label: "TSA PreCheck — military travelers", url: "https://www.tsa.gov/precheck/military/military-travelers" }],
      },
      {
        name: "USO airport centers",
        body: "Free airport lounges/centers worldwide for the military community (DoD ID holders) — find yours with the USO locator.",
        links: [{ label: "uso.org", url: "https://www.uso.org" }],
      },
    ],
  },
  {
    title: "Free or cheap meals & groceries",
    entries: [
      {
        name: "Commissary (DeCA)",
        body: "On-base grocery stores run by the Defense Commissary Agency (~235–240 stores worldwide), priced to deliver everyday savings. Programs include the YES! (Your Everyday Savings) price program, sales flyers, digital coupons/Rewards Card, and Commissary CLICK2GO — online ordering with curbside pickup (and delivery rolling out at select stores), which now accepts EBT/SNAP online. ID is checked at checkout; guests may accompany a patron but can't purchase.",
        note: "Who can shop: active, Guard/Reserve, and retired uniformed service members, Medal of Honor recipients, authorized family members — and, since Jan 1, 2020 (Purple Heart and Disabled Veterans Equal Access Act), all veterans with a VA-documented service-connected disability, Purple Heart recipients, former POWs, and VA-designated primary family caregivers. General veterans without a service-connected disability are not commissary-eligible.",
        links: [
          { label: "shop.commissaries.com", url: "https://shop.commissaries.com" },
          { label: "Commissary CLICK2GO info", url: "https://corp.commissaries.com/shopping/click-2-go" },
        ],
      },
      {
        name: "Exchange food courts",
        body: "Exchange (AAFES/NEX/MCX) food courts and restaurants sit inside the exchange benefit: everyday value pricing, tax-free.",
        note: "Access follows exchange eligibility (in-store = ID-card holders; the food courts generally serve anyone with installation access per local policy).",
        links: [{ label: "shopmyexchange.com", url: "https://www.shopmyexchange.com" }],
      },
      {
        name: "Operation Homefront",
        body: "Critical Financial Assistance grants for military families in crisis — explicitly including food/groceries, rent/mortgage, utilities, car/home repair, and emergency travel — plus Holiday Meals for Military meal-kit/grocery events. Applications open online via its site.",
        note: "Core eligibility, as the program states it: post-9/11 service with a wound/illness/injury in the line of duty, or deployed service members E-1–E-6 with DEERS-eligible dependents (some assistance windows differ).",
        links: [{ label: "Critical Financial Assistance", url: "https://operationhomefront.org/critical-financial-assistance/" }],
      },
      {
        name: "Feeding America",
        body: "The national food-bank network (200 food banks) — its Find Your Local Food Bank tool searches by ZIP at feedingamerica.org.",
        note: "Not a veteran-only program: general food assistance open to anyone in need. Member food banks serve veterans and military families in their communities, and some run veteran-specific distributions.",
        links: [{ label: "feedingamerica.org", url: "https://feedingamerica.org" }],
      },
      {
        name: "Annual Veterans Day free-meal guides",
        body: "Each fall, Military.com and The Military Wallet publish Veterans Day free-meals/discounts roundups, and VA News (news.va.gov) publishes the VA's own annual Veterans Day discounts list. Typical pattern: one free entrée from a limited menu, dine-in, participating locations only, on/around Nov 11, proof of service required.",
        note: "Annual guides, not guarantees — check the current year's guide each November and call the local restaurant first. Last year's list is not this year's promise.",
        links: [{ label: "VA News", url: "https://news.va.gov" }],
      },
      {
        name: "Restaurant chains — ask locally",
        body: "Many chains offer year-round military discounts, but they are set by the chain or the individual franchise, vary by location, and change without notice.",
        note: "Ask before ordering, bring military ID/proof of service, and confirm at your local restaurant.",
        links: [],
      },
    ],
  },
];

/* --------------------- Eventbrite place deep link --------------------- */

// US states: [full name, USPS abbreviation]. Used only to resolve the
// place the user types into the Eventbrite discovery pattern documented
// in the pack (Part B10): https://www.eventbrite.com/d/{state-abbr}--{city-slug}
const US_STATES: [string, string][] = [
  ["alabama", "al"], ["alaska", "ak"], ["arizona", "az"], ["arkansas", "ar"],
  ["california", "ca"], ["colorado", "co"], ["connecticut", "ct"], ["delaware", "de"],
  ["florida", "fl"], ["georgia", "ga"], ["hawaii", "hi"], ["idaho", "id"],
  ["illinois", "il"], ["indiana", "in"], ["iowa", "ia"], ["kansas", "ks"],
  ["kentucky", "ky"], ["louisiana", "la"], ["maine", "me"], ["maryland", "md"],
  ["massachusetts", "ma"], ["michigan", "mi"], ["minnesota", "mn"], ["mississippi", "ms"],
  ["missouri", "mo"], ["montana", "mt"], ["nebraska", "ne"], ["nevada", "nv"],
  ["new hampshire", "nh"], ["new jersey", "nj"], ["new mexico", "nm"], ["new york", "ny"],
  ["north carolina", "nc"], ["north dakota", "nd"], ["ohio", "oh"], ["oklahoma", "ok"],
  ["oregon", "or"], ["pennsylvania", "pa"], ["rhode island", "ri"], ["south carolina", "sc"],
  ["south dakota", "sd"], ["tennessee", "tn"], ["texas", "tx"], ["utah", "ut"],
  ["vermont", "vt"], ["virginia", "va"], ["washington", "wa"], ["west virginia", "wv"],
  ["wisconsin", "wi"], ["wyoming", "wy"], ["district of columbia", "dc"],
];

const STATE_ABBRS = new Set(US_STATES.map(([, abbr]) => abbr));

/**
 * Builds the Eventbrite discovery URL for a typed place, using the exact
 * pattern documented in the pack. Accepts "City, ST", "City ST", or
 * "City, State Name". Returns null when no city + state can be read, so
 * the UI can ask for both instead of guessing a link.
 */
export function eventbritePlaceUrl(place: string): string | null {
  const cleaned = place.trim().toLowerCase().replace(/\s+/g, " ");
  if (!cleaned) return null;
  let city = "";
  let abbr = "";

  const comma = cleaned.lastIndexOf(",");
  if (comma >= 0) {
    city = cleaned.slice(0, comma).trim();
    const tail = cleaned.slice(comma + 1).trim();
    if (STATE_ABBRS.has(tail)) abbr = tail;
    else {
      const match = US_STATES.find(([name]) => name === tail);
      if (match) abbr = match[1];
    }
  } else {
    // Longest state-name suffix first so "west virginia" wins over "virginia".
    const byName = [...US_STATES].sort((a, b) => b[0].length - a[0].length);
    for (const [name, code] of byName) {
      if (cleaned.endsWith(` ${name}`)) {
        city = cleaned.slice(0, cleaned.length - name.length).trim();
        abbr = code;
        break;
      }
    }
    if (!abbr) {
      const words = cleaned.split(" ");
      const last = words[words.length - 1] ?? "";
      if (words.length >= 2 && STATE_ABBRS.has(last)) {
        abbr = last;
        city = words.slice(0, -1).join(" ");
      }
    }
  }

  if (!city || !abbr) return null;
  const citySlug = city.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  if (!citySlug) return null;
  return `https://www.eventbrite.com/d/${abbr}--${citySlug}/`;
}
