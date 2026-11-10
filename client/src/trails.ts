// Trails & Camping — the finder data, transcribed from the researched
// pack (~/workspace/military-app/trails/trails.md, verified Nov 9, 2026).
//
// THE STANDING RULE OF THIS SECTION: no trail or campground database
// lives in the app. Trail names, lengths, ratings, availability, and
// site facts are the platforms' live data and are never stored here.
// The finder takes the member's place and hands it to the real
// platforms' own search results through outbound links.
//
// A platform's search URL pattern is recorded ONLY if it was verified
// by constructing a search URL for a sample place ("Jacksonville NC" /
// "Camp Lejeune") and fetching it to confirm the platform's real,
// query-reflecting search results (with a differential check against
// "Denver CO" where results render client-side). Platforms whose
// patterns did NOT verify — blocked (403), empty script shell, or
// failed differential — carry NO pattern: the app routes to their
// homepage or search page, labeled "search on their site," and never
// fabricates a query URL for them. A second-chance re-probe from the
// live browser at build time (Nov 9, 2026) changed none of the seven
// unverified verdicts: AllTrails 403 again, ReserveAmerica 403,
// Hipcamp script shell again, Campendium /search 404 again,
// iOverlander redirected to its sign-in page again, park4night's
// place-parameter format still unconfirmable, Gaia's /search/ 404 and
// its /hike/ directory still shows no trace of the searched place.

export type TrailLink = { label: string; url: string };

/* ------------------------------ US states ------------------------------ */
// State resolution drives ONLY the two state-pattern routes (NPS state
// pages and Campendium state browse). A state resolves when the whole
// input is a state name or its USPS code — "North Carolina" and "NC"
// resolve; "Jacksonville NC" is a city input and does not.

export type UsState = { name: string; code: string; slug: string };

export const US_STATES: UsState[] = [
  { name: "Alabama", code: "AL", slug: "alabama" },
  { name: "Alaska", code: "AK", slug: "alaska" },
  { name: "Arizona", code: "AZ", slug: "arizona" },
  { name: "Arkansas", code: "AR", slug: "arkansas" },
  { name: "California", code: "CA", slug: "california" },
  { name: "Colorado", code: "CO", slug: "colorado" },
  { name: "Connecticut", code: "CT", slug: "connecticut" },
  { name: "Delaware", code: "DE", slug: "delaware" },
  { name: "District of Columbia", code: "DC", slug: "district-of-columbia" },
  { name: "Florida", code: "FL", slug: "florida" },
  { name: "Georgia", code: "GA", slug: "georgia" },
  { name: "Hawaii", code: "HI", slug: "hawaii" },
  { name: "Idaho", code: "ID", slug: "idaho" },
  { name: "Illinois", code: "IL", slug: "illinois" },
  { name: "Indiana", code: "IN", slug: "indiana" },
  { name: "Iowa", code: "IA", slug: "iowa" },
  { name: "Kansas", code: "KS", slug: "kansas" },
  { name: "Kentucky", code: "KY", slug: "kentucky" },
  { name: "Louisiana", code: "LA", slug: "louisiana" },
  { name: "Maine", code: "ME", slug: "maine" },
  { name: "Maryland", code: "MD", slug: "maryland" },
  { name: "Massachusetts", code: "MA", slug: "massachusetts" },
  { name: "Michigan", code: "MI", slug: "michigan" },
  { name: "Minnesota", code: "MN", slug: "minnesota" },
  { name: "Mississippi", code: "MS", slug: "mississippi" },
  { name: "Missouri", code: "MO", slug: "missouri" },
  { name: "Montana", code: "MT", slug: "montana" },
  { name: "Nebraska", code: "NE", slug: "nebraska" },
  { name: "Nevada", code: "NV", slug: "nevada" },
  { name: "New Hampshire", code: "NH", slug: "new-hampshire" },
  { name: "New Jersey", code: "NJ", slug: "new-jersey" },
  { name: "New Mexico", code: "NM", slug: "new-mexico" },
  { name: "New York", code: "NY", slug: "new-york" },
  { name: "North Carolina", code: "NC", slug: "north-carolina" },
  { name: "North Dakota", code: "ND", slug: "north-dakota" },
  { name: "Ohio", code: "OH", slug: "ohio" },
  { name: "Oklahoma", code: "OK", slug: "oklahoma" },
  { name: "Oregon", code: "OR", slug: "oregon" },
  { name: "Pennsylvania", code: "PA", slug: "pennsylvania" },
  { name: "Rhode Island", code: "RI", slug: "rhode-island" },
  { name: "South Carolina", code: "SC", slug: "south-carolina" },
  { name: "South Dakota", code: "SD", slug: "south-dakota" },
  { name: "Tennessee", code: "TN", slug: "tennessee" },
  { name: "Texas", code: "TX", slug: "texas" },
  { name: "Utah", code: "UT", slug: "utah" },
  { name: "Vermont", code: "VT", slug: "vermont" },
  { name: "Virginia", code: "VA", slug: "virginia" },
  { name: "Washington", code: "WA", slug: "washington" },
  { name: "West Virginia", code: "WV", slug: "west-virginia" },
  { name: "Wisconsin", code: "WI", slug: "wisconsin" },
  { name: "Wyoming", code: "WY", slug: "wyoming" },
];

/** Resolve the whole input to a US state (name or USPS code), or null. */
export function resolveState(input: string): UsState | null {
  const norm = input.trim().toLowerCase().replace(/\s+/g, " ");
  if (!norm) return null;
  return (
    US_STATES.find(
      (s) => s.name.toLowerCase() === norm || s.code.toLowerCase() === norm,
    ) ?? null
  );
}

/* --------------------------- Finder intro ------------------------------ */

export const TRAILS_INTRO =
  "Type a place — a base, a city, a state, or a country — and the finder builds links into the real platforms' own live search results. No trail or campground data lives in this app: no names, lengths, ratings, or site facts are stored here, because those are the platforms' live data and they change. Where a platform's search link was verified live, the card builds it for your place. Where it couldn't be verified, the card says so plainly and routes you to search on their site — the app never fabricates a search link.";

/* --------------------- Verified search platforms ----------------------- */
// Each pattern below was fetch-verified on Nov 9, 2026 with the sample
// place "Jacksonville NC" (plus a "Denver CO" differential where the
// platform renders results client-side). {place} is replaced with the
// member's URL-encoded input.

export type SearchPlatform = {
  id: string;
  name: string;
  badge: string;
  coverage: string;
  lists: string;
  tier: string;
  pattern: string;
  note?: string;
  source: string;
};

export const VERIFIED_SEARCH_PLATFORMS: SearchPlatform[] = [
  {
    id: "recreation-gov",
    name: "Recreation.gov",
    badge: "OFFICIAL — FEDERAL",
    coverage:
      "United States — federal recreation lands (National Park Service, Forest Service, BLM, Bureau of Reclamation, Army Corps of Engineers, Fish & Wildlife Service) plus some partner facilities.",
    lists:
      "Campgrounds and reservable campsites — the main federal booking channel — plus passes and permits: timed-entry reservations, wilderness/river/lottery permits, interagency passes, and tour tickets, each with its own rules and release windows.",
    tier: "Free to search and hold an account; reservable sites, passes, and permits carry the fees shown on their own listings.",
    pattern: "https://www.recreation.gov/search?q={place}",
    source: "Recreation.gov (official federal)",
  },
  {
    id: "the-dyrt",
    name: "The Dyrt",
    badge: "COMMERCIAL",
    coverage: "United States.",
    lists:
      "Campgrounds of every kind — private, public, and free/dispersed listings — with member reviews and photos. The Dyrt's own pages also index many military campgrounds/FamCamps as listings — a discovery convenience only; the base's own MWR page governs (see Military Camping below).",
    tier: "Free to search; an optional paid tier, The Dyrt PRO, is advertised on the platform's own pages (with a free trial) for offline maps and planning features.",
    pattern: "https://thedyrt.com/search?query={place}",
    source: "The Dyrt",
  },
  {
    id: "hiking-project",
    name: "Hiking Project",
    badge: "COMMERCIAL — REI",
    coverage: "United States (strongest), with international trail areas.",
    lists:
      "Trails only — community-contributed trail descriptions, maps, and GPS tracks. No camping bookings; pair it with a campground platform from this list.",
    tier: "Free.",
    pattern: "https://www.hikingproject.com/search?q={place}",
    source: "Hiking Project (REI)",
  },
];

/* ---------------------- Official routes (no pattern) ------------------- */

export const NPS_CARD = {
  id: "nps",
  name: "National Park Service — Park Finder & State Pages",
  badge: "OFFICIAL — FEDERAL",
  coverage: "United States — every National Park Service unit.",
  lists:
    "Park-level information: trails, campgrounds, visitor centers, alerts and conditions. Bookings route onward: NPS campground reservations are made through Recreation.gov, and the park page says which of its campgrounds are reservable vs. first-come.",
  tier: "Free (official). Park entry passes are per-park data on the park's own page.",
  findapark: { label: "NPS Park Finder — search by park, state, activity, or topic", url: "https://www.nps.gov/findapark/index.htm" },
  stateUrl: (code: string) => `https://www.nps.gov/state/${code.toLowerCase()}/index.htm`,
  source: "National Park Service (official federal)",
};

export const CAMPENDIUM_CARD = {
  id: "campendium",
  name: "Campendium",
  badge: "COMMERCIAL",
  coverage: "United States (some Canada/Mexico coverage).",
  lists:
    "Campgrounds and camping areas, with a strength in free and dispersed camping reports, boondocking spots, dump stations, and cell-coverage reports from members.",
  tier: "Free to search/browse; the platform's own pages present an optional paid membership tier.",
  note: "Campendium's search link could not be verified (its constructed search URLs returned 404), so no search link is built. Its state-browse pages ARE verified — enter a U.S. state above and this card builds the browse link for that state. Otherwise, search on their site.",
  home: { label: "Campendium — search on their site", url: "https://www.campendium.com" },
  stateUrl: (slug: string) => `https://www.campendium.com/${slug}/`,
  source: "Campendium",
};

export const STATE_PARKS_CARD = {
  id: "state-parks",
  name: "State Park Systems — the Official Route",
  badge: "OFFICIAL — PER STATE",
  coverage: "United States — each state runs its own parks agency, its own finder, and (in many states) its own reservation system.",
  lists:
    "State parks typically list both trails and campgrounds; day-use/parking and camping fees are per-park data on the official page.",
  body: "There is no national state-parks search and no single official state-parks site. The route is always the same: your state's official parks agency “find a park” page. Two worked examples, verified on the states' own sites, show the shape — for every other state, start from that state's official portal and follow its parks agency link, never a commercial roundup and never a constructed finder URL. The State Benefits Finder in this app teaches the same habit: start from official state sources.",
  links: [
    { label: "North Carolina State Parks — official park list & search", url: "https://www.ncparks.gov/state-parks" },
    { label: "Virginia State Parks — official Find a Park", url: "https://www.dcr.virginia.gov/state-parks/find-a-park" },
  ] as TrailLink[],
  source: "State parks agencies (official, per state)",
};

export const USFS_CARD = {
  id: "usfs",
  name: "U.S. Forest Service — Per-Forest Gateway",
  badge: "OFFICIAL — FEDERAL",
  coverage: "United States — 154 national forests and 20 national grasslands.",
  lists:
    "Per-forest recreation information (official): trails, campgrounds, cabins, dispersed areas, permits, and closures.",
  body: "The Forest Service web estate is organized per forest/grassland — there is no place-search link to build, and that structure is the route. The national visit gateway leads to each forest's own site, whose Recreation pages carry that forest's trails, campgrounds, dispersed-camping rules, alerts, and fire restrictions. Developed federal campgrounds are largely booked through Recreation.gov; forest pages say which of theirs are reservable.",
  links: [
    { label: "Forest Service — national visit gateway (pick your forest)", url: "https://www.fs.usda.gov/visit" },
  ] as TrailLink[],
  tier: "Free (official).",
  source: "U.S. Forest Service (official federal)",
};

export const BLM_CARD = {
  id: "blm",
  name: "Bureau of Land Management — Visit Gateway",
  badge: "OFFICIAL — FEDERAL",
  coverage: "United States, concentrated in the West and Alaska (BLM manages roughly a tenth of U.S. land).",
  lists:
    "Developed campgrounds (many booked via Recreation.gov), dispersed-camping rules and areas, Long-Term Visitor Areas, and per-office recreation pages.",
  body: "BLM's visit-search link returned an empty shell to verification, so no search link is built. The visit gateway and BLM's national camping page are the verified routes; field-office and state pages hang off the gateway and carry local recreation detail.",
  links: [
    { label: "BLM — visit gateway", url: "https://www.blm.gov/visit" },
    { label: "BLM — national camping page (the rules in Guide 1)", url: "https://www.blm.gov/programs/recreation/camping" },
  ] as TrailLink[],
  tier: "Free (official).",
  source: "Bureau of Land Management (official federal)",
};

/* --------------- Search on their site (patterns NOT verified) ---------- */
// Each entry below failed the pack's verification on Nov 9, 2026 AND
// the build-time second-chance re-probe. No search pattern exists for
// any of them in this app — the route is the platform's homepage or
// search page, honestly labeled, and the search happens there.

export type RoutePlatform = {
  id: string;
  name: string;
  badge: string;
  coverage: string;
  lists: string;
  tier: string;
  status: string;
  route: TrailLink;
  source: string;
};

export const ROUTE_ONLY_PLATFORMS: RoutePlatform[] = [
  {
    id: "alltrails",
    name: "AllTrails",
    badge: "COMMERCIAL",
    coverage: "Global — the largest trail database of the group.",
    lists:
      "Trails, with route maps, elevation profiles, and member conditions reports; some lodging/camping discovery, but trails are the product.",
    tier: "Free to search; the platform sells a subscription tier for offline maps and premium features.",
    status:
      "Search pattern not verified — constructed search URLs were blocked (access denied) to verification, twice, and again on re-probe. That is not evidence the site's search is broken for you; the link opens AllTrails and the search happens on their site or in its app. Re-verification is queued for the January refresh.",
    route: { label: "AllTrails — search on their site", url: "https://www.alltrails.com" },
    source: "AllTrails",
  },
  {
    id: "reserveamerica",
    name: "ReserveAmerica",
    badge: "COMMERCIAL — RESERVATION CONTRACTOR",
    coverage: "United States and Canada.",
    lists:
      "Campground reservations — it is the booking engine behind many state park systems, plus federal and private parks. Where a state contracts its reservations out, the state's official page routes here — follow the state's route, not a direct link, so you land on the contract the state actually uses.",
    tier: "Free to search; reservation/transaction fees, where charged, are shown at checkout on the platform.",
    status:
      "Search pattern not verified — its results load client-side and the searched place could not be confirmed as honored (a different sample place returned identical content, and the re-probe was blocked). The link opens its search page; search on their site.",
    route: { label: "ReserveAmerica — search on their site", url: "https://www.reserveamerica.com/explore" },
    source: "ReserveAmerica",
  },
  {
    id: "hipcamp",
    name: "Hipcamp",
    badge: "COMMERCIAL",
    coverage: "United States (plus some Canada/Australia/UK).",
    lists:
      "Camping on private land — farms, ranches, vineyards, and landowners' sites, including near-base rural land that public-land platforms don't cover; some listings are instant-book.",
    tier: "Free to search and browse; stays book at the prices each host's listing shows.",
    status:
      "Search pattern not verified — its search page is script-driven and returned no confirmable results content to verification, on the first pass or the re-probe. The link opens its search page; search on their site.",
    route: { label: "Hipcamp — search on their site", url: "https://www.hipcamp.com/en-US/search" },
    source: "Hipcamp",
  },
  {
    id: "ioverlander",
    name: "iOverlander",
    badge: "COMMUNITY — NONPROFIT PROJECT",
    coverage:
      "Global — the overlanding standard, strongest exactly where US platforms are thin: Latin America, Africa, Europe, Asia, Oceania.",
    lists:
      "Community-reported camping of every kind — established campgrounds, informal/wild camping spots, and overlander services (water, mechanics, border notes) reported by travelers. Reports are member-submitted and age in place: a years-old report describes what was true then.",
    tier: "Free (community project; the app is the full database).",
    status:
      "Search pattern not verified — web exploration redirected verification to a sign-in page, on the first pass and the re-probe, so no place-search link could be confirmed. In practice its app is the primary tool.",
    route: { label: "iOverlander — search on their site", url: "https://ioverlander.com" },
    source: "iOverlander",
  },
  {
    id: "park4night",
    name: "park4night",
    badge: "COMMERCIAL / COMMUNITY",
    coverage: "Global, Europe-first — the standard motorhome/campervan overnight-spot database for Europe, with growing worldwide coverage.",
    lists:
      "Overnight parking and camping spots for vans/RVs/motorhomes — aires, campsites, parking areas, and tolerated overnight spots, community-reported with photos.",
    tier: "Free to use; the platform's own pages present an optional premium subscription.",
    status:
      "Search pattern not verified — its search page loads, but the place-parameter format could not be confirmed from what verification could read (the form is script-driven), on the first pass or the re-probe. The link opens its search page; search on their site or in its app.",
    route: { label: "park4night — search on their site", url: "https://park4night.com/en/search" },
    source: "park4night",
  },
  {
    id: "gaia-gps",
    name: "Gaia GPS — Hike Directory",
    badge: "COMMERCIAL",
    coverage: "United States directory; the app's mapping is global.",
    lists:
      "A public directory of hiking routes and trail maps. Gaia's core product is the navigation app (offline topo maps and tracking), not a booking or campground platform — go here for route-planning, not for finding a campsite.",
    tier: "Directory pages free to browse; app capabilities beyond that are the platform's own tiers.",
    status:
      "Search pattern not verified — the constructed hike-search returned the directory's generic content with no trace of the searched place, on the first pass and the re-probe. The link opens the public hike/trail directory; browse there or in the app.",
    route: { label: "Gaia GPS hike directory — search on their site", url: "https://www.gaiagps.com/hike/" },
    source: "Gaia GPS",
  },
];

/* --------------------------- Military camping -------------------------- */

export const MILITARY_INSTALLATIONS_LINK: TrailLink = {
  label: "MilitaryINSTALLATIONS — find your installation (Military OneSource)",
  url: "https://installations.militaryonesource.mil/",
};

export const FAMCAMPS = {
  id: "famcamps",
  name: "FamCamps & Installation Campgrounds / RV Parks",
  badge: "OFFICIAL — DoD, VIA INSTALLATION MWR",
  source: "DoD / installation MWR, via MilitaryINSTALLATIONS",
  what:
    "Most installations run a campground/RV park through their MWR program — “FamCamp” is the Air Force program name and the generic term members use; the services also run them as MWR campgrounds, RV parks, and recreation areas (some bases have several: RV sites, tent sites, cabins, and recreation areas). They are installation programs, not a national system — there is no DoD-wide FamCamp booking site, no standard rate, and no standard stay limit. Each installation's MWR/outdoor recreation office sets its own reservations, rates, stay limits, and site rules, and the installation commander controls base access.",
  eligibility:
    "FamCamps are MWR facilities, and MWR patron eligibility is set by DoD policy (DoDI 1015.10 patron categories) with the installation applying it locally. The core authorized patrons are uniformed members and their families, Guard/Reserve members, military retirees and their families, and DoD civilian personnel (categories and priority vary by service and installation). Since January 1, 2020, the Purple Heart and Disabled Veterans Equal Access Act (10 U.S.C. § 1065) extended commissary, exchange, and MWR access to veterans with a VA-documented service-connected disability, Purple Heart recipients, former prisoners of war, and VA-designated primary family caregivers — and DoD's fact sheet on the expansion names RV campgrounds and recreational lodging among the MWR facilities covered.",
  caution:
    "Military OneSource's published MWR recreational-lodging eligibility list is expressly “not exhaustive,” and its standing caution is the rule for this whole entry: priority and rules vary by service branch and facility — check ahead. Eligibility to use MWR is also not the same as getting through the gate: base access runs through the installation's visitor/ID rules.",
  route:
    "The route to a specific base's campground: MilitaryINSTALLATIONS → the installation's overview page → its MWR / housing & lodging content — installation pages carry their FamCamp details (hookups, tent sites, who to call) on the official page. This app never states a FamCamp's rate, stay limit, or reservation window: those are per-installation facts that live on the installation's own MWR page.",
};

export const AFRC_ENTRY = {
  id: "afrc",
  name: "Armed Forces Recreation Centers (AFRCs)",
  badge: "CROSS-LINK — COVERED IN DEALS & DISCOUNTS",
  source: "Deals & Discounts (this app)",
  body: "The four AFRC resorts (Shades of Green, Hale Koa, Edelweiss, Dragon Hill) and their eligibility are covered at overview level in Deals & Discounts — they are not duplicated here. One camping-relevant note only: the AFRCs are resort lodging, not campgrounds — if you're looking to camp near those destinations, use the finder above and the FamCamp route for the nearby installations.",
};

export const ODR_ENTRY = {
  id: "odr",
  name: "Installation Outdoor Recreation (ODR) Rental Programs",
  badge: "OFFICIAL — PER INSTALLATION",
  source: "Installation MWR / outdoor recreation, via MilitaryINSTALLATIONS",
  body: "Most installations' outdoor recreation program rents the gear of camping itself — tents, sleeping bags/pads, camp kitchens, coolers, canoes/kayaks, bikes, and often towable campers and boats — at MWR prices, and many run trips, classes, and local trail/area information desks. It is the natural first stop before buying, and the natural local expert on trails and camping near that base.",
  eligibility:
    "Eligibility: MWR patrons, as in the FamCamp entry — the installation's ODR page states its own patron and rental rules (JBER's ODR page, for example, states renters must be 18+ with a valid DoD ID/CAC/VHIC — printed here as an example of the kind of rule each installation publishes for itself, not as a general rule).",
  route:
    "The route: the installation's MWR/outdoor recreation page, via MilitaryINSTALLATIONS. There is no national ODR directory or catalog — inventory is whatever that installation owns.",
};

export const UNOFFICIAL_DIRECTORY = {
  id: "militarycampgrounds-us",
  name: "U.S. Military Campgrounds and RV Parks (militarycampgrounds.us) — UNOFFICIAL",
  badge: "⚠ UNOFFICIAL DIRECTORY",
  source: "militarycampgrounds.us (unofficial, volunteer-run)",
  body: "U.S. Military Campgrounds and RV Parks is a long-running, volunteer-run, UNOFFICIAL directory of military campgrounds and RV parks, built from the operator's own travels and member-submitted updates. It is not a DoD, service, or MWR site, and nothing on it is official. (It also could not be fetch-verified during research — the site blocked the research fetcher — so this entry records the directory's established identity and homepage, not fetched page content.) It is in the app anyway because it is, in practice, the most complete single index of military campgrounds members actually use — per-campground pages with location detail, gate/RV-access notes, and camper reviews that official pages often don't carry in one place.",
  rule: "⚠ UNOFFICIAL — verify with the base. Anything that matters (eligibility, whether the campground is open, reservations, gate procedure for an RV) gets confirmed against the installation's own MWR page (the FamCamp entry above) before you drive to a gate. This link is labeled UNOFFICIAL wherever it appears.",
  link: { label: "militarycampgrounds.us — UNOFFICIAL directory", url: "https://www.militarycampgrounds.us/" } as TrailLink,
};

/* -------------------------------- Guides ------------------------------- */

export const GUIDE_DISPERSED = {
  id: "guide-dispersed",
  name: "Guide 1 — Camping on Public Land (Dispersed Camping & Permits)",
  badge: "GUIDE — AGENCY POSITIONS AS EACH AGENCY STATES THEM",
  source: "BLM & U.S. Forest Service (official federal)",
  intro:
    "Beyond developed campgrounds, most BLM land and National Forest land is open to dispersed camping — camping outside a campground, with no facilities (no water, toilets, or trash service; you pack everything in and out). It is generally free. The agencies' own pages are the authority, and both say the same two things: a ~14-day norm, and local rules win. Their positions are printed separately below, exactly as each agency states its own — they are not blended into one rule.",
  blmTitle: "BLM — as BLM states it",
  blm: "Dispersed camping is allowed on most BLM land unless an area is posted closed or restricted; it is generally limited to 14 days within any 28-day period, after which the camper moves to a new location (often at least 25 to 30 miles away); most areas need no permit; limits and details vary by state and field office, so BLM directs campers to check with the local field office and obey posted signs. (Designated Long-Term Visitor Areas are the published exception — seasonal permit areas in the desert Southwest run under their own program.)",
  usfsTitle: "National Forest — as the Forest Service states it",
  usfs: "Dispersed camping means no services; “you may camp in a dispersed area for a limited period of time, usually 14 days, but this can be further limited in some National Forest areas” — inquire at the nearest District Office; dispersed camping is typically not allowed near developed recreation areas (campgrounds, picnic areas, trailheads); the forest's Motor Vehicle Use Map (MVUM) shows which roads are open to vehicles and where roadside dispersed camping is allowed — the MVUM, fire restrictions, and forest alerts are the three checks before any dispersed trip.",
  permitsTitle: "Permits & lotteries — Recreation.gov",
  permits:
    "Some of the most sought-after public-land experiences are permit-only and allocated by lottery or timed release on Recreation.gov — wilderness permits, river permits, capped trailheads, and high-demand campgrounds. The overview rule: if a place is famous, assume it is permitted until the official page says otherwise; lotteries open months ahead on fixed windows stated on each permit's own page, and “walk-up” availability is the exception, never the plan. Interagency passes (including the military/veteran passes covered in Benefits) are also issued through Recreation.gov/USGS.",
  never:
    "What the app never does here: state a specific forest's, district's, or field office's current limit, closure, or fire status. Those change seasonally and are checked on the agency page at trip time.",
  links: [
    { label: "BLM — national camping page", url: "https://www.blm.gov/programs/recreation/camping" },
    { label: "Forest Service — national visit gateway", url: "https://www.fs.usda.gov/visit" },
    { label: "Recreation.gov — permits, passes & lotteries", url: "https://www.recreation.gov/" },
  ] as TrailLink[],
};

export const GUIDE_BASE_TRAILS = {
  id: "guide-base-trails",
  name: "Guide 2 — Trails On and Near Bases",
  badge: "GUIDE — THE INSTALLATION'S WORD GOVERNS ITS GROUND",
  source: "Installation MWR / outdoor recreation, via MilitaryINSTALLATIONS",
  start:
    "Start with the installation: many installations maintain their own trails, nature areas, and recreation areas, and the installation's MWR / outdoor recreation program is the authority on which are open, to whom, and under what check-in rules — route via MilitaryINSTALLATIONS, not via a commercial trail platform's (possibly stale) listing. Base-adjacent public trails are then covered by the finder above (Hiking Project and AllTrails for trails; Recreation.gov where the neighboring land is federal).",
  safety:
    "⚠ Range and training areas — the standing safety framing: installations contain ranges, impact areas, and training land that are closed to recreation, permanently or on posted schedules. Never enter a marked, fenced, gated, or posted range/training area. Never touch anything that looks like ordnance — mark the spot, leave, and report it to range control / the installation. Check the installation's outdoor recreation or range control postings before using any on-base trail, because training closures change with the schedule. A trail shown on a commercial app does not override an installation closure or a posted boundary — the installation's word governs its ground.",
  hunting:
    "Hunting and fishing on installations exist at many bases under installation permits and iSportsman-style systems — that is a licensing topic, routed through the installation's own pages (and the state-benefits/fishing material elsewhere in the app), not covered by this finder.",
};

export const GUIDE_OCONUS = {
  id: "guide-oconus",
  name: "Guide 3 — Camping Outside the United States",
  badge: "GUIDE — CHECK LOCALLY, EVERYWHERE",
  source: "iOverlander & park4night coverage, as those platforms state it",
  coverage:
    "Coverage honesty: the US platforms thin out fast overseas. The working pair abroad is iOverlander — the global overlander database — and park4night — Europe-first for vans/motorhomes; AllTrails covers trails in many countries. Recreation.gov, ReserveAmerica, The Dyrt, Hipcamp, and Campendium are US(-centric) tools; the finder does not present them as answers for a place outside their coverage.",
  legality:
    "Wild-camping legality: there is no global rule, and this app states no country-by-country law. Whether sleeping in a vehicle or tenting outside a campground is legal, tolerated, or prohibited varies by country — and often by region and landowner within a country. The rule here is a behavior, not a legal table: check the local rule where you are (the platforms' spot reports, local tourist information, and posted signs), and treat a community-reported spot as evidence someone camped there once, not proof it is permitted.",
  military:
    "Military-specific note: for members stationed or traveling overseas, the Status of Forces Agreement, host-nation rules, and your command's liberty/off-post policies govern conduct off base — including where you may go and stay. Liberty policies and restricted-area lists are command publications, not app content: check your command's current policy before planning off-base camping from an overseas installation, and use the installation's MWR/ODR — overseas bases run their own outdoor programs and local-area trips precisely because the local rules differ.",
};

export const GUIDE_LNT = {
  id: "guide-lnt",
  name: "Guide 4 — Leave No Trace (The Seven Principles)",
  badge: "GUIDE — © LEAVE NO TRACE CENTER FOR OUTDOOR ETHICS",
  source: "Leave No Trace Center for Outdoor Ethics (lnt.org)",
  intro:
    "As published by the Leave No Trace Center for Outdoor Ethics — the Seven Principles are © Leave No Trace, and they are principles, not rules, in LNT's own framing. One line each:",
  principles: [
    { title: "Plan Ahead and Prepare", line: "Know the regulations and conditions of where you're going, and prepare for weather, hazards, and emergencies." },
    { title: "Travel and Camp on Durable Surfaces", line: "Stick to trails and camp on rock, gravel, sand, dry grass, or snow — durable ground that recovers." },
    { title: "Dispose of Waste Properly", line: "Pack out everything you pack in, including trash and hygiene waste; leave the site cleaner than you found it." },
    { title: "Leave What You Find", line: "Leave rocks, plants, artifacts, and structures as they are for the next person (and because taking some of them is illegal)." },
    { title: "Minimize Campfire Impacts", line: "Use established fire rings or a stove, keep fires small, and burn wood all the way down to ash, fully out." },
    { title: "Respect Wildlife", line: "Observe from a distance, never feed animals, and store food so wildlife can't get it." },
    { title: "Be Considerate of Other Visitors", line: "Keep noise down, yield on the trail, and let other people's trip be as good as yours." },
  ],
  link: { label: "Leave No Trace — the 7 Principles (lnt.org)", url: "https://lnt.org/why/7-principles/" } as TrailLink,
};
