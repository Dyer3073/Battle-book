// My Installation — the router data, built from the researched pack
// (~/workspace/military-app/installation/installation.md, researched
// Nov 9, 2026) plus Christian's binding scope notes in the same folder
// (base guide by amenity category, off-base guide within ~50 miles,
// OCONUS installations included worldwide).
//
// THE STANDING RULE OF THIS SECTION (the pack's design): this is a
// ROUTER, not a database. No installation-specific facts live in the
// app — no hours, no phone numbers, no building numbers, no amenity
// lists. Every fact lives on the official page the route lands on,
// because installations update and verify their own directory pages.
//
// WHAT IS STORED, AND WHERE IT CAME FROM (harvested Nov 9, 2026):
// - INSTALLATIONS: the pick-list is the MilitaryINSTALLATIONS
//   directory's OWN installation list, taken from its view-all page
//   (https://installations.militaryonesource.mil/view-all): each
//   entry's display name, directory SLUG, and the directory's own
//   state/country grouping, split CONUS / OCONUS exactly as the
//   directory's own two reports split them (its OCONUS report includes
//   Alaska, Hawaii, and the territories). Slugs are stored, never
//   derived — the directory lists Fort Hood (slug fort-hood, not
//   Cavazos) and Buckley SFB under the slug buckley-afb, both carried
//   here exactly as the directory prints them.
// - TOPIC_DICT + HARVESTED_LINKS: the service sub-page pattern
//   /military-installation/{slug}/{category}/{topic} is NEVER
//   constructed by rule — the third segment is not derivable (legal →
//   legal-assistance, not legal). Instead, every installation's
//   overview page was fetched at build time and the sub-page links it
//   actually carries were harvested verbatim (anchor text included).
//   The whole directory uses one fixed template of 35 topics, so the
//   harvest is stored as a 35-entry dictionary plus, per installation,
//   the indices of the topics its own overview page links. 320 of the
//   409 listed installations publish topic links; the rest (mostly
//   small Guard wings and recruiting battalions) route through their
//   overview page, which is labeled as such in the guide.
// - The overview and in-depth-overview URLs ARE safe to construct from
//   a stored slug — both patterns are verified in the pack and were
//   re-verified live at build time (Camp Lejeune + Ramstein AB).
//
// OFF-BASE GUIDE: the scope notes allow a map-search pattern ONLY if
// verified in the build's live-browser probe. The probe (Nov 9, 2026)
// could NOT verify one — a Google Maps search URL returned no
// readable results page to the probe — so, per the app's standing
// router discipline, the off-base categories route to the Google Maps
// homepage labeled SEARCH ON THEIR SITE, with the exact search phrase
// (category + installation) printed on the card to type there. No
// map-search URL is constructed anywhere in this section.
//
// ID CARD ROUTES: the pack ships IDCO's Nov 8-verified URLs with an
// instruction to spot-check in a real browser before changing
// anything. The build-time spot-check (Nov 9, 2026) reproduced the
// pack's own anomaly exactly — the automated fetch gets a 404 on
// /locator and no readable content on the portal, because IDCO is a
// client-rendered DMDC app — which does not prove the URLs dead. Per
// the pack, the Nov 8-verified URLs stand, unchanged.

export type InstallationEntry = {
  name: string;
  slug: string;
  /** The directory's own grouping label: a U.S. state for CONUS
   * entries, a country/area label for OCONUS entries. */
  region: string;
  /** The directory's own CONUS/OCONUS split (its OCONUS report
   * includes Alaska, Hawaii, and the territories). */
  oconus: boolean;
};

export type TopicDef = { segment: string; topic: string; label: string };

export const DIRECTORY_HOME_URL = "https://installations.militaryonesource.mil/";
export const DIRECTORY_VIEW_ALL_URL = "https://installations.militaryonesource.mil/view-all";
const MI_BASE = "https://installations.militaryonesource.mil";

/** VERIFIED pattern (pack §1): safe to construct from a stored slug. */
export function overviewUrl(slug: string): string {
  return `${MI_BASE}/military-installation/${slug}`;
}

/** VERIFIED pattern (pack §1): safe to construct from a stored slug. */
export function inDepthUrl(slug: string): string {
  return `${MI_BASE}/in-depth-overview/${slug}`;
}

/** A harvested sub-page URL. Only ever called with a topic the
 * installation's own overview page was harvested linking to — never
 * construct a sub-page URL that wasn't harvested. */
export function topicUrl(slug: string, def: TopicDef): string {
  return `${MI_BASE}/military-installation/${slug}/${def.segment}/${def.topic}`;
}

export function findInstallation(slug: string): InstallationEntry | undefined {
  return INSTALLATIONS.find((i) => i.slug === slug);
}

/** The topic definitions this installation's overview page actually
 * links to, in the directory template's order. Empty when the
 * installation publishes no topic links (its overview is the route). */
export function harvestedTopics(slug: string): TopicDef[] {
  const idxs = HARVESTED_LINKS[slug];
  if (!idxs) return [];
  const out: TopicDef[] = [];
  for (const i of idxs) {
    const def = TOPIC_DICT[i];
    if (def) out.push(def);
  }
  return out;
}

/* ------------------------- National locators ------------------------- */

export type LocatorLink = { label: string; url: string; note?: string };

export const DECA_DIRECTORY: LocatorLink = {
  label: "DeCA — store directory (corp.commissaries.com)",
  url: "https://corp.commissaries.com/shopping/store-locations",
};
export const DECA_CLICK2GO: LocatorLink = {
  label: "shop.commissaries.com — online ordering (CLICK2GO)",
  url: "https://shop.commissaries.com/",
  note: "DeCA splits its sites on purpose: store information lives in the directory above; online ordering is this separate site. The app keeps the split.",
};
export const AAFES_LOCATOR: LocatorLink = {
  label: "Exchange Store Locator — shopmyexchange.com (Army & Air Force)",
  url: "https://www.shopmyexchange.com/exchange-stores",
  note: "There is no single all-exchange locator — NEX, MCX, and CGX are separate systems; Navy, Marine Corps, and Coast Guard patrons route through the installation's own directory page.",
};
export const MCC_HOME: LocatorLink = {
  label: "MilitaryChildCare.com — the DoD-wide child care request system",
  url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome#/",
};
export const AFLA_LOCATOR: LocatorLink = {
  label: "AFLA — Armed Forces Legal Assistance locator",
  url: "https://legalassistance.law.af.mil/",
  note: "The locator's own page notes it covers CONUS legal activities — overseas, the installation's Legal Assistance page above is the route.",
};
export const TRICARE_MTF: LocatorLink = {
  label: "TRICARE — military hospital & clinic finder",
  url: "https://www.tricare.mil/mtf",
  note: "Search by ZIP + radius or by facility / installation name.",
};
export const TRICARE_FIND_DOCTOR: LocatorLink = {
  label: "TRICARE — Find a Doctor (civilian network)",
  url: "https://www.tricare.mil/finddoctor",
  note: "Civilian network doctors are this separate route — the MTF finder above is for military hospitals and clinics.",
};
export const HOMES_MIL: LocatorLink = {
  label: "HOMES.mil — DoD's official housing referral site",
  url: "https://www.homes.mil/",
  note: "Off-base rentals, run through installation housing offices.",
};

/** ID card office routes — the pack's Nov 8-verified URLs, unchanged
 * after the build-time spot-check (see the header note). */
export const IDCO_PORTAL: LocatorLink = {
  label: "ID Card Office Online (IDCO) — portal",
  url: "https://idco.dmdc.osd.mil/idco/",
};
export const IDCO_LOCATOR: LocatorLink = {
  label: "RAPIDS Site Locator & Appointments",
  url: "https://idco.dmdc.osd.mil/idco/locator",
  note: "Sign-in is myAuth, which replaced DS Logon on May 20, 2025.",
};

/* ------------------------- On-base categories ------------------------ */
// The 13 amenity categories exactly as scoped. `topics` are indices
// into TOPIC_DICT: the guide renders a topic link for a category ONLY
// when the installation's own harvested set includes that topic.

export type OnBaseCategory = {
  id: string;
  name: string;
  blurb: string;
  topics: number[];
  locators: LocatorLink[];
  /** Printed when the installation publishes none of this category's
   * harvested topics and the route is the overview page itself. */
  overviewNote: string;
};

export const ON_BASE_CATEGORIES: OnBaseCategory[] = [
  {
    id: "food",
    name: "Food & Dining",
    blurb:
      "Dining facilities, clubs, and places to eat on base. Dining sits under MWR on the installation's directory pages — its MWR page carries the dining listings, and hours and menus live there, not here.",
    topics: [31],
    locators: [],
    overviewNote: "Dining is listed under Morale, Welfare and Recreation on the overview page.",
  },
  {
    id: "exchange",
    name: "Exchange",
    blurb:
      "The exchange — PX, NEX, MCX, or CGX depending on the service. There is no single all-exchange locator: AAFES runs the locator for Army & Air Force exchanges, and the other services' exchanges route through the installation's own directory page.",
    topics: [],
    locators: [AAFES_LOCATOR],
    overviewNote: "This installation's exchange is routed through its directory overview page.",
  },
  {
    id: "commissary",
    name: "Commissary",
    blurb:
      "DeCA's store directory carries your commissary's own page — its store information lives there. Online ordering (CLICK2GO) is DeCA's separate shopping site; the two are kept split, as DeCA splits them.",
    topics: [],
    locators: [DECA_DIRECTORY, DECA_CLICK2GO],
    overviewNote: "Find your store in the DeCA directory.",
  },
  {
    id: "pool",
    name: "Pool & Aquatics",
    blurb:
      "Pools and aquatics are MWR programs — the installation's MWR page carries its pools, lap and leisure swim, lessons, and aquatics programs.",
    topics: [31],
    locators: [],
    overviewNote: "Aquatics are listed under Morale, Welfare and Recreation on the overview page.",
  },
  {
    id: "fitness",
    name: "Fitness",
    blurb:
      "Gyms and fitness centers are MWR programs — the installation's MWR page carries its fitness centers, classes, intramural sports, and wellness programs.",
    topics: [31],
    locators: [],
    overviewNote: "Fitness is listed under Morale, Welfare and Recreation on the overview page.",
  },
  {
    id: "mwr",
    name: "MWR / ITT",
    blurb:
      "Morale, Welfare and Recreation — recreation, the ITT tickets-and-travel office, trips, sports, and family programs. No national MWR/ITT locator exists; the installation's own MWR page is the route.",
    topics: [31],
    locators: [],
    overviewNote: "MWR is a headline category on the overview page.",
  },
  {
    id: "lodging",
    name: "Lodging",
    blurb:
      "On-base lodging — inns, TLF, and temporary housing for arrivals, departures, and visitors. The installation's Temporary Housing page and its MWR page carry its lodging routes.",
    topics: [19, 31],
    locators: [],
    overviewNote: "Lodging routes from the overview page — look under Housing (temporary housing) and MWR.",
  },
  {
    id: "medical",
    name: "Medical",
    blurb:
      "The installation's Health page, plus TRICARE's military hospital & clinic finder. Civilian network doctors are TRICARE's separate Find a Doctor route.",
    topics: [16],
    locators: [TRICARE_MTF, TRICARE_FIND_DOCTOR],
    overviewNote: "Health is a headline category on the overview page.",
  },
  {
    id: "childcare",
    name: "Child Care",
    blurb:
      "Child care and youth programs on base — the installation's own Child and Youth Services pages, and MilitaryChildCare.com, the DoD-wide system where child care requests are actually made.",
    topics: [5, 4, 6],
    locators: [MCC_HOME],
    overviewNote: "Child and Youth Services is a headline category on the overview page.",
  },
  {
    id: "housing",
    name: "Housing",
    blurb:
      "The housing office route — the installation's Housing pages for government and temporary housing, plus HOMES.mil, DoD's official housing referral site for off-base rentals, run through installation housing offices.",
    topics: [18, 17, 19],
    locators: [HOMES_MIL],
    overviewNote: "Housing is a headline category on the overview page.",
  },
  {
    id: "legal",
    name: "Legal",
    blurb:
      "Legal assistance — wills, powers of attorney, and civil legal help. The installation's Legal Assistance page, plus the joint Armed Forces Legal Assistance locator. The locator's own page notes it covers CONUS legal activities, so overseas members lean on the installation's page.",
    topics: [20],
    locators: [AFLA_LOCATOR],
    overviewNote: "Legal is a headline category on the overview page.",
  },
  {
    id: "chaplain",
    name: "Chaplain",
    blurb:
      "There is no national chaplain locator. The chapel route runs through the installation itself: its overview page carries the main contacts and the printable Installation Booklet, and its Military and Family Support Center carries the chapel route.",
    topics: [26],
    locators: [],
    overviewNote: "Start from the overview page's main contacts and Installation Booklet.",
  },
  {
    id: "library",
    name: "Library",
    blurb:
      "The base library — the installation's Library page, listed under MWR on its directory pages, carries its library and its programs.",
    topics: [30, 31],
    locators: [],
    overviewNote: "The library is listed under Morale, Welfare and Recreation on the overview page.",
  },
];

/** The directory's remaining category groups, rendered with every
 * harvested link the installation publishes for them — the pack's
 * "also on every installation page" set. */
export const MORE_ON_BASE_GROUPS: { name: string; blurb: string; topics: number[] }[] = [
  {
    name: "Base Essentials",
    blurb: "Checking in, sponsorship, emergency assistance, and the major units — the arrival basics.",
    topics: [0, 1, 2, 3],
  },
  {
    name: "Education",
    blurb: "The education center, local and overseas schools, and college / technical training routes.",
    topics: [7, 8, 9, 10],
  },
  {
    name: "Exceptional Family Member Program",
    blurb: "EFMP enrollment and support — health care and special-needs, special education, and preparing for your move with an exceptional family member.",
    topics: [11, 12, 13, 14, 15],
  },
  {
    name: "Military and Family Support Center",
    blurb: "Deployment support, employment, financial assistance, relocation help, the loan closet, family advocacy, and new-parent support.",
    topics: [21, 22, 23, 24, 25, 26, 27, 28, 29],
  },
  {
    name: "Moving",
    blurb: "Household goods and shipping your pets — the move itself.",
    topics: [32, 33],
  },
  {
    name: "Transportation",
    blurb: "Motor vehicles and getting around at the new station.",
    topics: [34],
  },
];

/* ----------------------- Branch directories -------------------------- */
// Per the pack §2: ship only what verified. The Air Force ships NO
// locator (route via MilitaryINSTALLATIONS); the Navy ships the CNIC
// homepage only; the Coast Guard ships its two Area commands with
// MilitaryINSTALLATIONS as the primary route.

export type BranchDirectory = { links: LocatorLink[]; note: string };

export function branchDirectoryFor(branch: string): BranchDirectory | null {
  const b = branch.toLowerCase();
  if (b.includes("army")) {
    return {
      links: [{ label: "U.S. Army Installation Management Command (IMCOM) — garrison directory", url: "https://home.army.mil/" }],
      note: "The Army's garrison directory is alphabetical; garrison sites live under home.army.mil.",
    };
  }
  if (b.includes("marine")) {
    return {
      links: [
        { label: "Marine Corps Installations Command (MCICOM)", url: "https://www.mcicom.marines.mil/" },
        { label: "MCIEAST — Marine Corps Installations East", url: "https://www.mcieast.marines.mil/" },
        { label: "MCIWEST — Marine Corps Installations West", url: "https://www.mciwest.marines.mil/" },
      ],
      note: "MCICOM is the single authority for Marine Corps installations matters; the two regional commands cover the East and West base groups.",
    };
  }
  if (b.includes("navy")) {
    return {
      links: [{ label: "Commander, Navy Installations Command (CNIC)", url: "https://www.cnic.navy.mil/" }],
      note: "CNIC covers 10 regions and 71 installations. Per-installation pages route via MilitaryINSTALLATIONS — only the CNIC homepage is shipped here.",
    };
  }
  if (b.includes("air force")) {
    return {
      links: [],
      note: "No official Air Force-wide installation locator is shipped — none was verified. Route via MilitaryINSTALLATIONS: each base's overview page links its official site.",
    };
  }
  if (b.includes("space force")) {
    return {
      links: [{ label: "Space Force Locations — the official locations page", url: "https://www.spaceforce.mil/About-Us/Space-Force-Locations/" }],
      note: "The official locations page lists the six main operating locations: Peterson, Schriever, Buckley, Patrick, Vandenberg, and Los Angeles AFB.",
    };
  }
  if (b.includes("coast guard")) {
    return {
      links: [
        { label: "U.S. Coast Guard Atlantic Area", url: "https://www.atlanticarea.uscg.mil/" },
        { label: "U.S. Coast Guard Pacific Area", url: "https://www.pacificarea.uscg.mil/" },
      ],
      note: "The Coast Guard has no single installation directory — the two Area commands list their districts' units, and MilitaryINSTALLATIONS also lists Coast Guard installations directly, which is the primary route here.",
    };
  }
  return null;
}

/* ------------------------- Off-base categories ----------------------- */
// Category searches within ~50 miles of the installation. The map
// search pattern did NOT verify in the build's live-browser probe, so
// these route to the map service's homepage, labeled honestly, with
// the exact phrase to search printed on each card — the base named,
// per the scope notes.

export const MAPS_HOME_URL = "https://www.google.com/maps";

export const MAPS_ROUTE_NOTE =
  "Battle Book does not build map-search links it could not verify — the probe could not confirm a search link that lands on real results for a named place. So each card opens Google Maps and prints the exact phrase to search there; results, distances, and hours are the map's own live ones.";

export const OFF_BASE_CATEGORIES: { id: string; name: string; phrase: string }[] = [
  { id: "restaurants", name: "Restaurants", phrase: "Restaurants" },
  { id: "fast-food", name: "Fast Food", phrase: "Fast food" },
  { id: "grocery", name: "Grocery", phrase: "Grocery stores" },
  { id: "coffee", name: "Coffee", phrase: "Coffee shops" },
  { id: "gyms", name: "Gyms (off base)", phrase: "Gyms" },
  { id: "auto-repair", name: "Auto Repair", phrase: "Auto repair" },
  { id: "hotels", name: "Hotels", phrase: "Hotels" },
  { id: "churches", name: "Churches & Worship", phrase: "Churches" },
  { id: "outdoor", name: "Outdoor & Recreation", phrase: "Parks and outdoor recreation" },
  { id: "movies", name: "Movies", phrase: "Movie theaters" },
  { id: "airports", name: "Airports", phrase: "Airports" },
];

/* ------------------- Harvested directory data ------------------------ */
// Generated at build time (Nov 9, 2026) from the directory itself:
// INSTALLATIONS from its view-all page; TOPIC_DICT + HARVESTED_LINKS
// from fetching every listed installation's overview page and
// harvesting the sub-page links it carries. See the header note.

export const INSTALLATIONS: InstallationEntry[] = [
  { name: "Anniston Army Depot", slug: "anniston-army-depot", region: "Alabama", oconus: false },
  { name: "Fort Rucker", slug: "fort-rucker", region: "Alabama", oconus: false },
  { name: "Maxwell AFB and Gunter Annex", slug: "maxwell-afb-and-gunter-annex", region: "Alabama", oconus: false },
  { name: "Redstone Arsenal", slug: "redstone-arsenal", region: "Alabama", oconus: false },
  { name: "USARD, 2nd Medical Recruiting Battalion", slug: "usard-2nd-medical-recruiting-battalion", region: "Alabama", oconus: false },
  { name: "USARD, Montgomery Battalion", slug: "usard-montgomery-battalion", region: "Alabama", oconus: false },
  { name: "117 ARW", slug: "117-arw", region: "Alabama", oconus: false },
  { name: "187 FW", slug: "187-fw", region: "Alabama", oconus: false },
  { name: "Davis-Monthan AFB", slug: "davis-monthan-afb", region: "Arizona", oconus: false },
  { name: "Fort Huachuca", slug: "fort-huachuca", region: "Arizona", oconus: false },
  { name: "Luke AFB", slug: "luke-afb", region: "Arizona", oconus: false },
  { name: "MCAS Yuma", slug: "mcas-yuma", region: "Arizona", oconus: false },
  { name: "USARD, Phoenix Battalion", slug: "usard-phoenix-battalion", region: "Arizona", oconus: false },
  { name: "Yuma Proving Ground", slug: "yuma-proving-ground", region: "Arizona", oconus: false },
  { name: "161 ARW", slug: "161-arw", region: "Arizona", oconus: false },
  { name: "162 Wing", slug: "162-wing", region: "Arizona", oconus: false },
  { name: "Little Rock AFB", slug: "little-rock-afb", region: "Arkansas", oconus: false },
  { name: "Pine Bluff Arsenal", slug: "pine-bluff-arsenal", region: "Arkansas", oconus: false },
  { name: "188 WG", slug: "188wg", region: "Arkansas", oconus: false },
  { name: "189 AW", slug: "189-aw", region: "Arkansas", oconus: false },
  { name: "Beale AFB", slug: "beale-afb", region: "California", oconus: false },
  { name: "Camp Parks", slug: "camp-parks", region: "California", oconus: false },
  { name: "Camp Pendleton", slug: "camp-pendleton", region: "California", oconus: false },
  { name: "Defense Distribution Depot San Joaquin", slug: "defense-distribution-depot-san-joaquin", region: "California", oconus: false },
  { name: "Edwards AFB", slug: "edwards-afb", region: "California", oconus: false },
  { name: "Fort Hunter Liggett", slug: "fort-hunter-liggett", region: "California", oconus: false },
  { name: "Fort Irwin", slug: "fort-irwin", region: "California", oconus: false },
  { name: "Los Angeles SFB", slug: "los-angeles-afb", region: "California", oconus: false },
  { name: "March ARB", slug: "march-arb", region: "California", oconus: false },
  { name: "Marine Corps Air Station Miramar", slug: "marine-corps-air-station-miramar", region: "California", oconus: false },
  { name: "Marine Corps Mountain Warfare Training Center (MWTC)", slug: "marine-corps-mountain-warfare-training-center-mwtc", region: "California", oconus: false },
  { name: "MCLB Barstow", slug: "mclb-barstow", region: "California", oconus: false },
  { name: "MCRD San Diego", slug: "mcrd-san-diego", region: "California", oconus: false },
  { name: "Naval Air Facility El Centro", slug: "naval-air-facility-el-centro", region: "California", oconus: false },
  { name: "Naval Air Station Lemoore", slug: "naval-air-station-lemoore", region: "California", oconus: false },
  { name: "Naval Air Weapons Station China Lake", slug: "naval-air-weapons-station-china-lake", region: "California", oconus: false },
  { name: "Naval Base Coronado", slug: "naval-base-coronado", region: "California", oconus: false },
  { name: "Naval Base Point Loma", slug: "naval-base-point-loma", region: "California", oconus: false },
  { name: "Naval Base San Diego", slug: "naval-base-san-diego", region: "California", oconus: false },
  { name: "Naval Base Ventura County - Point Mugu/Port  Hueneme", slug: "naval-base-ventura-county-point-mugu-port-hueneme", region: "California", oconus: false },
  { name: "Naval Support Activity Monterey", slug: "naval-support-activity-monterey", region: "California", oconus: false },
  { name: "Naval Weapons Station Seal Beach", slug: "naval-weapons-station-seal-beach", region: "California", oconus: false },
  { name: "Presidio of Monterey (DLI/FLC)", slug: "presidio-of-monterey-dli-flc", region: "California", oconus: false },
  { name: "Travis Air Force Base", slug: "travis-air-force-base", region: "California", oconus: false },
  { name: "Twentynine Palms (MCAGCC)", slug: "twentynine-palms-mcagcc", region: "California", oconus: false },
  { name: "USARD, Central California", slug: "usard-us-army-battalion-central-california", region: "California", oconus: false },
  { name: "USARD, Los Angeles Battalion", slug: "usard-los-angeles-battalion", region: "California", oconus: false },
  { name: "USARD, Northern California", slug: "usard-us-army-recruiting-battalion-northern-california", region: "California", oconus: false },
  { name: "USARD, Southern California Battalion", slug: "usard-southern-california-battalion", region: "California", oconus: false },
  { name: "USCG Base Alameda", slug: "uscg-alameda", region: "California", oconus: false },
  { name: "USCG Base Los Angeles Long Beach", slug: "ucsg-los-angeles-long-beach", region: "California", oconus: false },
  { name: "Vandenberg SFB", slug: "vandenberg-afb", region: "California", oconus: false },
  { name: "129 RQW", slug: "129-rqw", region: "California", oconus: false },
  { name: "144th FW", slug: "144th-fw", region: "California", oconus: false },
  { name: "146 AW", slug: "146-aw", region: "California", oconus: false },
  { name: "163 ATKW", slug: "163-atkw", region: "California", oconus: false },
  { name: "Buckley SFB", slug: "buckley-afb", region: "Colorado", oconus: false },
  { name: "Fort Carson", slug: "fort-carson", region: "Colorado", oconus: false },
  { name: "Peterson SFB", slug: "peterson-afb", region: "Colorado", oconus: false },
  { name: "Schriever SFB", slug: "schriever-afb", region: "Colorado", oconus: false },
  { name: "USAF Academy", slug: "usaf-academy", region: "Colorado", oconus: false },
  { name: "USARD, Denver Battalion", slug: "usard-denver-battalion", region: "Colorado", oconus: false },
  { name: "140 WG", slug: "140-wg", region: "Colorado", oconus: false },
  { name: "Naval Submarine Base New London", slug: "naval-submarine-base-new-london", region: "Connecticut", oconus: false },
  { name: "USCG Academy", slug: "ucsg-academy", region: "Connecticut", oconus: false },
  { name: "103 AW", slug: "103-aw", region: "Connecticut", oconus: false },
  { name: "Dover AFB", slug: "dover-afb", region: "Delaware", oconus: false },
  { name: "166th AW", slug: "166th-aw", region: "Delaware", oconus: false },
  { name: "Joint Base Anacostia-Bolling", slug: "joint-base-anacostia-bolling", region: "District Of Columbia", oconus: false },
  { name: "Naval Support Activity Washington", slug: "naval-support-activity-washington", region: "District Of Columbia", oconus: false },
  { name: "Pentagon - Air Force", slug: "pentagon-air-force", region: "District Of Columbia", oconus: false },
  { name: "Eglin AFB", slug: "eglin-afb", region: "Florida", oconus: false },
  { name: "Hurlburt Field", slug: "hurlburt-field", region: "Florida", oconus: false },
  { name: "MacDill AFB", slug: "macdill-afb", region: "Florida", oconus: false },
  { name: "Naval Air Station Jacksonville", slug: "naval-air-station-jacksonville", region: "Florida", oconus: false },
  { name: "Naval Air Station Key West", slug: "naval-air-station-key-west", region: "Florida", oconus: false },
  { name: "Naval Air Station Pensacola", slug: "naval-air-station-pensacola", region: "Florida", oconus: false },
  { name: "Naval Air Station Whiting Field", slug: "naval-air-station-whiting-field", region: "Florida", oconus: false },
  { name: "Naval Station Mayport", slug: "naval-station-mayport", region: "Florida", oconus: false },
  { name: "Naval Support Activity Orlando", slug: "naval-support-activity-orlando", region: "Florida", oconus: false },
  { name: "Naval Support Activity Panama City", slug: "naval-support-activity-panama-city", region: "Florida", oconus: false },
  { name: "Patrick SFB", slug: "patrick-afb", region: "Florida", oconus: false },
  { name: "Tyndall AFB", slug: "tyndall-afb", region: "Florida", oconus: false },
  { name: "USAG Miami", slug: "ussouthcom-u-s-army-garrison-miami", region: "Florida", oconus: false },
  { name: "USARD, Jacksonville Battalion", slug: "usard-jacksonville-battalion", region: "Florida", oconus: false },
  { name: "USARD, Miami Battalion", slug: "usard-miami-battalion", region: "Florida", oconus: false },
  { name: "USARD, Tampa Battalion", slug: "usard-tampa-battalion", region: "Florida", oconus: false },
  { name: "USCG Miami Beach", slug: "uscg-miami-beach", region: "Florida", oconus: false },
  { name: "125 FW", slug: "125-fw", region: "Florida", oconus: false },
  { name: "Fort Benning", slug: "fort-benning", region: "Georgia", oconus: false },
  { name: "Fort Gordon", slug: "fort-gordon", region: "Georgia", oconus: false },
  { name: "Fort Stewart", slug: "fort-stewart", region: "Georgia", oconus: false },
  { name: "Hunter Army Airfield", slug: "hunter-army-airfield", region: "Georgia", oconus: false },
  { name: "Marine Corps Logistics Base - Albany", slug: "marine-corps-logistics-base-albany", region: "Georgia", oconus: false },
  { name: "Moody AFB", slug: "moody-afb", region: "Georgia", oconus: false },
  { name: "Naval Submarine Base Kings Bay", slug: "naval-submarine-base-kings-bay", region: "Georgia", oconus: false },
  { name: "Robins AFB", slug: "robins-afb", region: "Georgia", oconus: false },
  { name: "US Army Cadet Command 6th Brigade", slug: "us-army-cadet-command-6th-brigade", region: "Georgia", oconus: false },
  { name: "116 ACW", slug: "116-acw", region: "Georgia", oconus: false },
  { name: "165 AW", slug: "165-aw", region: "Georgia", oconus: false },
  { name: "Mountain Home AFB", slug: "mountain-home-afb", region: "Idaho", oconus: false },
  { name: "124 FW", slug: "124fw", region: "Idaho", oconus: false },
  { name: "Naval Station Great Lakes", slug: "naval-station-great-lakes", region: "Illinois", oconus: false },
  { name: "Rock Island Arsenal", slug: "rock-island-arsenal", region: "Illinois", oconus: false },
  { name: "Scott Air Force Base", slug: "scott-air-force-base", region: "Illinois", oconus: false },
  { name: "US Army Cadet Command 3rd Brigade", slug: "us-army-cadet-command-3rd-brigade", region: "Illinois", oconus: false },
  { name: "USARD, Chicago Battalion", slug: "usard-chicago-battalion", region: "Illinois", oconus: false },
  { name: "126 ARW", slug: "126-arw", region: "Illinois", oconus: false },
  { name: "182 AW", slug: "182-aw", region: "Illinois", oconus: false },
  { name: "183 Wing", slug: "183-wing", region: "Illinois", oconus: false },
  { name: "Naval Support Activity Crane", slug: "naval-support-activity-crane", region: "Indiana", oconus: false },
  { name: "USARD, Indianapolis Battalion", slug: "usard-indianapolis-battalion", region: "Indiana", oconus: false },
  { name: "122 FW", slug: "122-fw", region: "Indiana", oconus: false },
  { name: "181 IW", slug: "181-iw", region: "Indiana", oconus: false },
  { name: "132 WG", slug: "132-wg", region: "Iowa", oconus: false },
  { name: "185ARW", slug: "185arw", region: "Iowa", oconus: false },
  { name: "Fort Leavenworth", slug: "fort-leavenworth", region: "Kansas", oconus: false },
  { name: "Fort Riley", slug: "fort-riley", region: "Kansas", oconus: false },
  { name: "McConnell AFB", slug: "mcconnell-afb", region: "Kansas", oconus: false },
  { name: "184 IW", slug: "184-iw", region: "Kansas", oconus: false },
  { name: "190 ARW", slug: "190-arw", region: "Kansas", oconus: false },
  { name: "Fort Campbell", slug: "fort-campbell", region: "Kentucky", oconus: false },
  { name: "Fort Knox", slug: "fort-knox", region: "Kentucky", oconus: false },
  { name: "US Army Cadet Command 7th Brigade", slug: "us-army-cadet-command-7th-brigade", region: "Kentucky", oconus: false },
  { name: "US Army Cadet Command Headquarters", slug: "us-army-cadet-command-headquarters", region: "Kentucky", oconus: false },
  { name: "USARD, 3rd Medical Recruiting Battalion", slug: "usard-3rd-medical-recruiting-battalion", region: "Kentucky", oconus: false },
  { name: "123 AW", slug: "123-aw", region: "Kentucky", oconus: false },
  { name: "Barksdale Air Force Base", slug: "barksdale-air-force-base", region: "Louisiana", oconus: false },
  { name: "Fort Polk", slug: "fort-polk", region: "Louisiana", oconus: false },
  { name: "Naval Air Station Joint Reserve Base New Orleans", slug: "naval-air-station-joint-reserve-base-new-orleans", region: "Louisiana", oconus: false },
  { name: "USCG Base New Orleans", slug: "ucsg-new-orleans", region: "Louisiana", oconus: false },
  { name: "159 FW", slug: "159-fw", region: "Louisiana", oconus: false },
  { name: "Naval Support Activity Maine", slug: "portsmouth-naval-shipyard", region: "Maine", oconus: false },
  { name: "USARD, New England Battalion", slug: "usard-new-england-battalion", region: "Maine", oconus: false },
  { name: "101 ARW", slug: "101-arw", region: "Maine", oconus: false },
  { name: "Aberdeen Proving Ground", slug: "aberdeen-proving-ground", region: "Maryland", oconus: false },
  { name: "Fort Detrick", slug: "fort-detrick", region: "Maryland", oconus: false },
  { name: "Fort George G. Meade - Navy", slug: "fort-george-g-meade-navy", region: "Maryland", oconus: false },
  { name: "Fort Meade", slug: "fort-george-g-meade", region: "Maryland", oconus: false },
  { name: "Joint Base Andrews-Naval Air Facility Washington", slug: "joint-base-andrews-naval-air-facility-washington", region: "Maryland", oconus: false },
  { name: "Naval Air Station Patuxent River", slug: "naval-air-station-patuxent-river", region: "Maryland", oconus: false },
  { name: "Naval Support Activity Annapolis  - U.S. Naval Academy", slug: "naval-support-activity-annapolis-u-s-naval-academy", region: "Maryland", oconus: false },
  { name: "Naval Support Activity Bethesda Home of Walter Reed National Military Medical Center", slug: "naval-support-activity-bethesda-home-of-walter-reed-national-military-medical-center", region: "Maryland", oconus: false },
  { name: "Naval Support Activity South Potomac (NSF Indian Head)", slug: "naval-support-activity-south-potomac-nsf-indian-head", region: "Maryland", oconus: false },
  { name: "USARD, 1st Medical Recruiting Battalion", slug: "usard-1st-medical-recruiting-battalion", region: "Maryland", oconus: false },
  { name: "USARD, Baltimore Battalion", slug: "usard-baltimore-battalion", region: "Maryland", oconus: false },
  { name: "113 WG", slug: "113-wg", region: "Maryland", oconus: false },
  { name: "175 WG", slug: "175-wg", region: "Maryland", oconus: false },
  { name: "Hanscom AFB", slug: "hanscom-afb", region: "Massachusetts", oconus: false },
  { name: "Natick Soldier Systems Center (NSSC)", slug: "natick-soldier-systems-center-nssc", region: "Massachusetts", oconus: false },
  { name: "USCG Base Boston", slug: "uscg-boston", region: "Massachusetts", oconus: false },
  { name: "Westover ARB", slug: "westover-arb", region: "Massachusetts", oconus: false },
  { name: "102IW", slug: "102iw", region: "Massachusetts", oconus: false },
  { name: "104 FW", slug: "104-fw", region: "Massachusetts", oconus: false },
  { name: "Detroit Arsenal", slug: "u-s-army-garrison-detroit-arsenal", region: "Michigan", oconus: false },
  { name: "Hart-Dole-Inouye Federal Center", slug: "hart-dole-inouye-federal-center", region: "Michigan", oconus: false },
  { name: "USARD, Great Lakes Battalion", slug: "usard-great-lakes-battalion", region: "Michigan", oconus: false },
  { name: "110 ATKW", slug: "110-atkw", region: "Michigan", oconus: false },
  { name: "127WG", slug: "127wg", region: "Michigan", oconus: false },
  { name: "USARD, Minneapolis Battalion", slug: "usard-minneapolis-battalion", region: "Minnesota", oconus: false },
  { name: "133 AW", slug: "133-aw", region: "Minnesota", oconus: false },
  { name: "148 FW", slug: "148-fw", region: "Minnesota", oconus: false },
  { name: "Columbus AFB", slug: "columbus-afb", region: "Mississippi", oconus: false },
  { name: "Keesler AFB", slug: "keesler-afb", region: "Mississippi", oconus: false },
  { name: "Naval Air Station Meridian", slug: "naval-air-station-meridian", region: "Mississippi", oconus: false },
  { name: "Naval Construction Battalion Center Gulfport", slug: "naval-construction-battalion-center-gulfport", region: "Mississippi", oconus: false },
  { name: "Stennis Space Center", slug: "stennis-space-center", region: "Mississippi", oconus: false },
  { name: "172 AW", slug: "172-aw", region: "Mississippi", oconus: false },
  { name: "186 ARW", slug: "186-arw", region: "Mississippi", oconus: false },
  { name: "Fort Leonard Wood", slug: "fort-leonard-wood", region: "Missouri", oconus: false },
  { name: "USARD, Kansas City Battalion", slug: "usard-kansas-city-battalion", region: "Missouri", oconus: false },
  { name: "Whiteman AFB", slug: "whiteman-afb", region: "Missouri", oconus: false },
  { name: "131 BW", slug: "131-bw", region: "Missouri", oconus: false },
  { name: "139 AW", slug: "139-aw", region: "Missouri", oconus: false },
  { name: "Malmstrom Air Force Base", slug: "malmstrom-air-force-base", region: "Montana", oconus: false },
  { name: "120 AW", slug: "120-aw", region: "Montana", oconus: false },
  { name: "Offutt AFB", slug: "offutt-afb", region: "Nebraska", oconus: false },
  { name: "155 ARW", slug: "155-arw", region: "Nebraska", oconus: false },
  { name: "Creech AFB", slug: "creech-afb", region: "Nevada", oconus: false },
  { name: "Naval Air Station Fallon", slug: "naval-air-station-fallon", region: "Nevada", oconus: false },
  { name: "Nellis AFB", slug: "nellis-afb", region: "Nevada", oconus: false },
  { name: "USARD, 6th Medical Recruiting Battalion", slug: "usard-6th-medical-recruiting-battalion", region: "Nevada", oconus: false },
  { name: "152 AW", slug: "152-aw", region: "Nevada", oconus: false },
  { name: "157 ARW", slug: "157-arw", region: "New Hampshire", oconus: false },
  { name: "Joint Base McGuire-Dix-Lakehurst", slug: "joint-base-mcguire-dix-lakehurst", region: "New Jersey", oconus: false },
  { name: "Naval Weapons Station Earle", slug: "naval-weapons-station-earle", region: "New Jersey", oconus: false },
  { name: "Picatinny Arsenal", slug: "picatinny-arsenal", region: "New Jersey", oconus: false },
  { name: "US Army Cadet Command 2nd Brigade", slug: "us-army-cadet-command-2nd-brigade", region: "New Jersey", oconus: false },
  { name: "USARD, Mid-Atlantic Battalion", slug: "usard-mid-atlantic-battalion", region: "New Jersey", oconus: false },
  { name: "108 WG", slug: "108-wg", region: "New Jersey", oconus: false },
  { name: "177 FW", slug: "177-fw", region: "New Jersey", oconus: false },
  { name: "Cannon AFB", slug: "cannon-afb", region: "New Mexico", oconus: false },
  { name: "Holloman AFB", slug: "holloman-afb", region: "New Mexico", oconus: false },
  { name: "Kirtland Air Force Base", slug: "kirtland-air-force-base", region: "New Mexico", oconus: false },
  { name: "U.S. Army Garrison White Sands Missile Range", slug: "u-s-army-garrison-white-sands-missile-range", region: "New Mexico", oconus: false },
  { name: "150 SOW", slug: "150-sow", region: "New Mexico", oconus: false },
  { name: "Fort Drum", slug: "fort-drum", region: "New York", oconus: false },
  { name: "Fort Hamilton", slug: "fort-hamilton", region: "New York", oconus: false },
  { name: "Naval Support Activity Saratoga Springs", slug: "naval-support-activity-saratoga-springs", region: "New York", oconus: false },
  { name: "United States Military Academy at West Point", slug: "united-states-military-academy-at-west-point", region: "New York", oconus: false },
  { name: "USARD, Albany Battalion", slug: "usard-albany-battalion", region: "New York", oconus: false },
  { name: "USARD, New York City Battalion", slug: "usard-new-york-city-battalion", region: "New York", oconus: false },
  { name: "USARD, Syracuse Battalion", slug: "usard-syracuse-battalion", region: "New York", oconus: false },
  { name: "105 AW", slug: "105-aw", region: "New York", oconus: false },
  { name: "106 RQW", slug: "106-rqw", region: "New York", oconus: false },
  { name: "107 ATKW", slug: "107-atkw", region: "New York", oconus: false },
  { name: "109AW", slug: "109aw", region: "New York", oconus: false },
  { name: "174 ATKW", slug: "174-atkw", region: "New York", oconus: false },
  { name: "Camp Lejeune", slug: "camp-lejeune", region: "North Carolina", oconus: false },
  { name: "Fort Bragg", slug: "fort-bragg", region: "North Carolina", oconus: false },
  { name: "MCAS Cherry Point", slug: "mcas-cherry-point", region: "North Carolina", oconus: false },
  { name: "MCAS New River", slug: "mcas-new-river", region: "North Carolina", oconus: false },
  { name: "Pope Army Airfield", slug: "pope-army-airfield", region: "North Carolina", oconus: false },
  { name: "Seymour Johnson AFB", slug: "seymour-johnson-afb", region: "North Carolina", oconus: false },
  { name: "US Army Cadet Command 4th Brigade", slug: "us-army-cadet-command-4th-brigade", region: "North Carolina", oconus: false },
  { name: "USARD, Raleigh Battalion", slug: "usard-raleigh-battalion", region: "North Carolina", oconus: false },
  { name: "145 AW", slug: "145-aw", region: "North Carolina", oconus: false },
  { name: "Grand Forks AFB", slug: "grand-forks-afb", region: "North Dakota", oconus: false },
  { name: "Minot AFB", slug: "minot-afb", region: "North Dakota", oconus: false },
  { name: "119 WG", slug: "119-wg", region: "North Dakota", oconus: false },
  { name: "Defense Supply Center Columbus", slug: "defense-supply-center-columbus", region: "Ohio", oconus: false },
  { name: "USARD, Cleveland Battalion", slug: "usard-cleveland-battalion", region: "Ohio", oconus: false },
  { name: "USARD, Columbus Battalion", slug: "usard-columbus-battalion", region: "Ohio", oconus: false },
  { name: "USCG Base Cleveland", slug: "uscg-cleveland", region: "Ohio", oconus: false },
  { name: "Wright-Patterson AFB", slug: "wright-patterson-afb", region: "Ohio", oconus: false },
  { name: "121ARW", slug: "121arw", region: "Ohio", oconus: false },
  { name: "178 WG", slug: "178-wg", region: "Ohio", oconus: false },
  { name: "179th AW", slug: "179th-aw", region: "Ohio", oconus: false },
  { name: "180 FW", slug: "180-fw", region: "Ohio", oconus: false },
  { name: "Altus AFB", slug: "altus-afb", region: "Oklahoma", oconus: false },
  { name: "Fort Sill", slug: "fort-sill", region: "Oklahoma", oconus: false },
  { name: "McAlester Army Ammunition Plant", slug: "mcalester-army-ammunition-plant", region: "Oklahoma", oconus: false },
  { name: "Tinker AFB", slug: "tinker-afb", region: "Oklahoma", oconus: false },
  { name: "USARD, Oklahoma City Battalion", slug: "usard-oklahoma-city-battalion", region: "Oklahoma", oconus: false },
  { name: "Vance AFB", slug: "vance-afb", region: "Oklahoma", oconus: false },
  { name: "137 SOW", slug: "137-sow", region: "Oklahoma", oconus: false },
  { name: "138 FW", slug: "138-fw", region: "Oklahoma", oconus: false },
  { name: "USARD, Portland Battalion", slug: "usard-portland-battalion", region: "Oregon", oconus: false },
  { name: "142 FW", slug: "142-fw", region: "Oregon", oconus: false },
  { name: "173 FW", slug: "173-fw", region: "Oregon", oconus: false },
  { name: "Carlisle Barracks", slug: "carlisle-barracks", region: "Pennsylvania", oconus: false },
  { name: "Defense Logistics Agency at Susquehanna", slug: "defense-logistics-agency-at-susquehanna", region: "Pennsylvania", oconus: false },
  { name: "Naval Support Activity Mechanicsburg", slug: "naval-support-activity-mechanicsburg", region: "Pennsylvania", oconus: false },
  { name: "Naval Support Activity Philadelphia", slug: "naval-support-activity-philadelphia", region: "Pennsylvania", oconus: false },
  { name: "Tobyhanna Army Depot", slug: "tobyhanna-army-depot", region: "Pennsylvania", oconus: false },
  { name: "USARD, Harrisburg Battalion", slug: "usard-harrisburg-battalion", region: "Pennsylvania", oconus: false },
  { name: "171ARW", slug: "171arw", region: "Pennsylvania", oconus: false },
  { name: "193 SOW", slug: "193-sow", region: "Pennsylvania", oconus: false },
  { name: "Fort Buchanan", slug: "fort-buchanan", region: "Puerto Rico", oconus: false },
  { name: "Naval Station Newport", slug: "naval-station-newport", region: "Rhode Island", oconus: false },
  { name: "143 AW", slug: "143-aw", region: "Rhode Island", oconus: false },
  { name: "Fort Jackson", slug: "fort-jackson", region: "South Carolina", oconus: false },
  { name: "Joint Base Lindsey Graham", slug: "joint-base-charleston", region: "South Carolina", oconus: false },
  { name: "MCAS Beaufort", slug: "mcas-beaufort", region: "South Carolina", oconus: false },
  { name: "MCRD Parris Island", slug: "mcrd-parris-island", region: "South Carolina", oconus: false },
  { name: "Shaw Air Force Base", slug: "shaw-air-force-base", region: "South Carolina", oconus: false },
  { name: "USARD, Columbia Recruiting Battalion", slug: "usard-columbia-recruiting-battalion", region: "South Carolina", oconus: false },
  { name: "169 FW", slug: "169-fw", region: "South Carolina", oconus: false },
  { name: "Ellsworth Air Force Base", slug: "ellsworth-air-force-base", region: "South Dakota", oconus: false },
  { name: "114 FW", slug: "114-fw", region: "South Dakota", oconus: false },
  { name: "Arnold AFB", slug: "arnold-afb", region: "Tennessee", oconus: false },
  { name: "Naval Support Activity Mid-South", slug: "naval-support-activity-mid-south", region: "Tennessee", oconus: false },
  { name: "USARD, Nashville Battalion", slug: "usard-nashville-battalion", region: "Tennessee", oconus: false },
  { name: "118th WG", slug: "118th-wg", region: "Tennessee", oconus: false },
  { name: "134ARW", slug: "134arw", region: "Tennessee", oconus: false },
  { name: "164 AW", slug: "164-aw", region: "Tennessee", oconus: false },
  { name: "Dyess AFB", slug: "dyess-afb", region: "Texas", oconus: false },
  { name: "Fort Bliss", slug: "fort-bliss", region: "Texas", oconus: false },
  { name: "Fort Hood", slug: "fort-hood", region: "Texas", oconus: false },
  { name: "Goodfellow AFB", slug: "goodfellow-afb", region: "Texas", oconus: false },
  { name: "Joint Base San Antonio (Lackland, Randolph, Sam Houston)", slug: "joint-base-san-antonio-lackland-randolph-sam-houston", region: "Texas", oconus: false },
  { name: "Laughlin AFB", slug: "laughlin-afb", region: "Texas", oconus: false },
  { name: "Naval Air Station Corpus Christi", slug: "naval-air-station-corpus-christi", region: "Texas", oconus: false },
  { name: "Naval Air Station Joint Reserve Base Fort Worth", slug: "naval-air-station-joint-reserve-base-fort-worth", region: "Texas", oconus: false },
  { name: "Naval Air Station Kingsville", slug: "naval-air-station-kingsville", region: "Texas", oconus: false },
  { name: "Red River Army Depot", slug: "red-river-army-depot", region: "Texas", oconus: false },
  { name: "Sheppard AFB", slug: "sheppard-afb", region: "Texas", oconus: false },
  { name: "US Army Cadet Command 5th Brigade", slug: "us-army-cadet-command-5th-brigade", region: "Texas", oconus: false },
  { name: "USARD, 5th Medical Recruiting Battalion", slug: "usard-5th-medical-recruiting-battalion", region: "Texas", oconus: false },
  { name: "USARD, Dallas Battalion", slug: "usard-dallas-battalion", region: "Texas", oconus: false },
  { name: "USARD, Houston Battalion", slug: "usard-houston-battalion", region: "Texas", oconus: false },
  { name: "USCG Base Galveston", slug: "ucsg-galveston", region: "Texas", oconus: false },
  { name: "136 AW", slug: "136-aw", region: "Texas", oconus: false },
  { name: "147 ATKW", slug: "147-atkw", region: "Texas", oconus: false },
  { name: "149 FW", slug: "149-fw", region: "Texas", oconus: false },
  { name: "Dugway Proving Ground", slug: "dugway-proving-ground", region: "Utah", oconus: false },
  { name: "Hill AFB", slug: "hill-afb", region: "Utah", oconus: false },
  { name: "USARD, Salt Lake City Battalion", slug: "usard-salt-lake-city-battalion", region: "Utah", oconus: false },
  { name: "151st ARW", slug: "151st-arw", region: "Utah", oconus: false },
  { name: "158 FW", slug: "158-fw", region: "Vermont", oconus: false },
  { name: "Defense Supply Center Richmond", slug: "defense-supply-center-richmond", region: "Virginia", oconus: false },
  { name: "DLA McNamara HQC", slug: "dla-mcnamara-hqc", region: "Virginia", oconus: false },
  { name: "Fort Belvoir", slug: "fort-belvoir", region: "Virginia", oconus: false },
  { name: "Fort Lee", slug: "fort-lee", region: "Virginia", oconus: false },
  { name: "Fort Myer (Joint Base Myer - Henderson Hall)", slug: "fort-myer-joint-base-myer-henderson-hall", region: "Virginia", oconus: false },
  { name: "Henderson Hall (Joint Base Myer - Henderson Hall)", slug: "henderson-hall-joint-base-myer-henderson-hall", region: "Virginia", oconus: false },
  { name: "Joint Base Langley-Eustis", slug: "joint-base-langley-eustis", region: "Virginia", oconus: false },
  { name: "Joint Expeditionary Base Little Creek-Fort Story", slug: "joint-expeditionary-base-little-creek-fort-story", region: "Virginia", oconus: false },
  { name: "Marine Corps Base Quantico", slug: "marine-corps-base-quantico", region: "Virginia", oconus: false },
  { name: "MCCS Hampton Roads", slug: "mccs-hampton-roads", region: "Virginia", oconus: false },
  { name: "Naval Air Station Oceana", slug: "naval-air-station-oceana", region: "Virginia", oconus: false },
  { name: "Naval Air Station Oceana Dam Neck Annex", slug: "naval-air-station-oceana-dam-neck-annex", region: "Virginia", oconus: false },
  { name: "Naval Medical Center Portsmouth", slug: "naval-medical-center-portsmouth", region: "Virginia", oconus: false },
  { name: "Naval Station Norfolk", slug: "naval-station-norfolk", region: "Virginia", oconus: false },
  { name: "Naval Support Activity Hampton Roads", slug: "naval-support-activity-hampton-roads", region: "Virginia", oconus: false },
  { name: "Naval Support Activity Hampton Roads Northwest Annex", slug: "naval-support-activity-hampton-roads-northwest-annex", region: "Virginia", oconus: false },
  { name: "Naval Support Activity Portsmouth", slug: "norfolk-naval-shipyard", region: "Virginia", oconus: false },
  { name: "Naval Support Activity South Potomac (NSF Dahlgren)", slug: "naval-support-activity-south-potomac-nsf-dahlgren", region: "Virginia", oconus: false },
  { name: "Naval Weapons Station Yorktown", slug: "naval-weapons-station-yorktown", region: "Virginia", oconus: false },
  { name: "Newport News Shipyard", slug: "newport-news-shipyard", region: "Virginia", oconus: false },
  { name: "Surface Combat Systems Center Wallops Island", slug: "surface-combat-systems-center-wallops-island", region: "Virginia", oconus: false },
  { name: "USARD, Richmond Recruiting Battalion", slug: "usard-richmond-recruiting-battalion", region: "Virginia", oconus: false },
  { name: "USCG Base Portsmouth", slug: "ucsg-portsmouth", region: "Virginia", oconus: false },
  { name: "192 FW", slug: "192-fw", region: "Virginia", oconus: false },
  { name: "Fairchild AFB", slug: "fairchild-afb", region: "Washington", oconus: false },
  { name: "Joint Base Lewis-McChord", slug: "joint-base-lewis-mcchord", region: "Washington", oconus: false },
  { name: "Naval Air Station Whidbey Island", slug: "naval-air-station-whidbey-island", region: "Washington", oconus: false },
  { name: "Naval Base Kitsap", slug: "naval-base-kitsap", region: "Washington", oconus: false },
  { name: "Naval Station Everett", slug: "naval-station-everett", region: "Washington", oconus: false },
  { name: "US Army Cadet Command 8th Brigade", slug: "us-army-cadet-command-8th-brigade", region: "Washington", oconus: false },
  { name: "USARD, Seattle Battalion", slug: "usard-seattle-battalion", region: "Washington", oconus: false },
  { name: "USCG Base Seattle", slug: "uscg-seattle", region: "Washington", oconus: false },
  { name: "141 ARW", slug: "141-arw", region: "Washington", oconus: false },
  { name: "194 WG", slug: "194-wg", region: "Washington", oconus: false },
  { name: "130AW", slug: "130aw", region: "West Virginia", oconus: false },
  { name: "167 AW", slug: "167-aw", region: "West Virginia", oconus: false },
  { name: "Fort McCoy", slug: "fort-mccoy", region: "Wisconsin", oconus: false },
  { name: "115FW", slug: "115fw", region: "Wisconsin", oconus: false },
  { name: "128 ARW", slug: "128-arw", region: "Wisconsin", oconus: false },
  { name: "F. E. Warren AFB", slug: "f-e-warren-afb", region: "Wyoming", oconus: false },
  { name: "153 AW", slug: "153-aw", region: "Wyoming", oconus: false },
  { name: "Eielson AFB", slug: "eielson-afb", region: "Alaska", oconus: true },
  { name: "Joint Base Elmendorf-Richardson (JBER)", slug: "joint-base-elmendorf-richardson-jber", region: "Alaska", oconus: true },
  { name: "USAG Alaska, Greely", slug: "fort-greely", region: "Alaska", oconus: true },
  { name: "USAG Alaska, Wainwright", slug: "fort-wainwright", region: "Alaska", oconus: true },
  { name: "USCG Base Ketchikan", slug: "ucsg-ketchikan", region: "Alaska", oconus: true },
  { name: "USCG Base Kodiak", slug: "uscg-kodiak", region: "Alaska", oconus: true },
  { name: "168 AW", slug: "168-aw", region: "Alaska", oconus: true },
  { name: "176WG", slug: "176wg", region: "Alaska", oconus: true },
  { name: "Ankara", slug: "ankara", region: "Armed Forces Europe, Middle East, Africa", oconus: true },
  { name: "Canberra", slug: "canberra", region: "Australia", oconus: true },
  { name: "Naval Support Activity Stirling", slug: "naval-support-activity-stirling", region: "Australia", oconus: true },
  { name: "Naval Support Activity Bahrain", slug: "naval-support-activity-bahrain", region: "Bahrain", oconus: true },
  { name: "Kleine Brogel Air Base", slug: "kleine-brogel-air-base", region: "Belgium", oconus: true },
  { name: "USAG BENELUX-Brussels", slug: "usag-benelux-brussels-schinnen", region: "Belgium", oconus: true },
  { name: "USAG BENELUX-SHAPE/Chievres", slug: "usag-benelux-shape-chievres", region: "Belgium", oconus: true },
  { name: "Navy Support Facility Diego Garcia", slug: "navy-support-facility-diego-garcia", region: "British Indian Ocean Territory", oconus: true },
  { name: "Naval Station Guantanamo Bay", slug: "naval-station-guantanamo-bay", region: "Cuba", oconus: true },
  { name: "Buechel Air Base", slug: "buechel-air-base", region: "Germany", oconus: true },
  { name: "Geilenkirchen NATO Air Base", slug: "geilenkirchen-nato-air-base", region: "Germany", oconus: true },
  { name: "Kalkar - U.S. Air Force Element", slug: "kalkar-u-s-air-force-element", region: "Germany", oconus: true },
  { name: "Ramstein AB", slug: "ramstein-ab", region: "Germany", oconus: true },
  { name: "Spangdahlem AB", slug: "spangdahlem-ab", region: "Germany", oconus: true },
  { name: "USAG Ansbach", slug: "ansbach-united-states-army-garrison", region: "Germany", oconus: true },
  { name: "USAG Bavaria", slug: "usag-bavaria", region: "Germany", oconus: true },
  { name: "USAG Bavaria, Garmisch", slug: "usag-bavaria-garmisch", region: "Germany", oconus: true },
  { name: "USAG Bavaria, Hohenfels", slug: "usag-bavaria-hohenfels", region: "Germany", oconus: true },
  { name: "USAG Rheinland-Pfalz Kaiserslautern Military Community", slug: "usag-rheinland-pfalz", region: "Germany", oconus: true },
  { name: "USAG Rheinland-Pfalz, Baumholder", slug: "usag-rheinland-pfalz-baumholder", region: "Germany", oconus: true },
  { name: "USAG Stuttgart", slug: "usag-stuttgart", region: "Germany", oconus: true },
  { name: "USAG Wiesbaden", slug: "usag-wiesbaden", region: "Germany", oconus: true },
  { name: "Naval Support Activity Souda Bay", slug: "naval-support-activity-souda-bay", region: "Greece", oconus: true },
  { name: "Joint Region Marianas - Andersen AFB", slug: "joint-region-marianas-andersen-afb", region: "Guam", oconus: true },
  { name: "Joint Region Marianas - Naval Base Guam", slug: "joint-region-marianas-naval-base-guam", region: "Guam", oconus: true },
  { name: "Joint Base Pearl Harbor - Hickam", slug: "joint-base-pearl-harbor-hickam", region: "Hawaii", oconus: true },
  { name: "MCB Hawaii", slug: "mcb-hawaii", region: "Hawaii", oconus: true },
  { name: "USAG Hawaii", slug: "schofield-barracks-fort-shafter", region: "Hawaii", oconus: true },
  { name: "USCG Base Honolulu", slug: "uscg-honolulu", region: "Hawaii", oconus: true },
  { name: "154 WG", slug: "154-wg", region: "Hawaii", oconus: true },
  { name: "Papa Air Base", slug: "papa-air-base", region: "Hungary", oconus: true },
  { name: "Aviano Air Base", slug: "aviano-air-base", region: "Italy", oconus: true },
  { name: "Ghedi Air Base", slug: "ghedi-air-base", region: "Italy", oconus: true },
  { name: "Naval Air Station Sigonella", slug: "naval-air-station-sigonella", region: "Italy", oconus: true },
  { name: "Naval Support Activity Naples", slug: "naval-support-activity-naples", region: "Italy", oconus: true },
  { name: "Naval Support Activity Naples Department Gaeta", slug: "naval-support-activity-naples-department-gaeta", region: "Italy", oconus: true },
  { name: "USAG Italy \u2013 DMC", slug: "usag-italy-darby-military-community", region: "Italy", oconus: true },
  { name: "USAG Italy \u2013 VMC", slug: "usag-italy", region: "Italy", oconus: true },
  { name: "Camp S D Butler (Camp Foster, Kinser, Courtney, Hansen, Schwab and MCAS Futenma)", slug: "camp-s-d-butler-camp-foster-kinser-courtney-hansen-schwab-and-mcas-futenma", region: "Japan", oconus: true },
  { name: "Commander Fleet Activities Sasebo", slug: "commander-fleet-activities-sasebo", region: "Japan", oconus: true },
  { name: "Commander Fleet Activities Yokosuka", slug: "commander-fleet-activities-yokosuka", region: "Japan", oconus: true },
  { name: "Kadena AB", slug: "kadena-ab", region: "Japan", oconus: true },
  { name: "Marine Corps Air Station Iwakuni", slug: "marine-corps-air-station-iwakuni", region: "Japan", oconus: true },
  { name: "Misawa AB", slug: "misawa-ab", region: "Japan", oconus: true },
  { name: "Naval Air Facility Atsugi", slug: "naval-air-facility-atsugi", region: "Japan", oconus: true },
  { name: "USAG Japan, Zama", slug: "camp-zama", region: "Japan", oconus: true },
  { name: "USAG Okinawa, Torii Station", slug: "torii-station", region: "Japan", oconus: true },
  { name: "Yokota AB", slug: "yokota-ab", region: "Japan", oconus: true },
  { name: "USAG BENELUX Brunssum", slug: "united-states-army-garrison-benelux-schinnen", region: "Netherlands", oconus: true },
  { name: "Volkel Air Base", slug: "volkel-air-base", region: "Netherlands", oconus: true },
  { name: "Stavanger", slug: "stavanger", region: "Norway", oconus: true },
  { name: "USAG Poland", slug: "usag-poland", region: "Poland", oconus: true },
  { name: "Lajes Field", slug: "lajes-field", region: "Portugal", oconus: true },
  { name: "156th AW", slug: "156th-aw", region: "Puerto Rico", oconus: true },
  { name: "Naval Support Activity Singapore", slug: "naval-support-activity-singapore", region: "Singapore", oconus: true },
  { name: "Commander Fleet Activities Chinhae", slug: "commander-fleet-activities-chinhae", region: "South Korea", oconus: true },
  { name: "Kunsan AB", slug: "kunsan-ab", region: "South Korea", oconus: true },
  { name: "Osan Air Base", slug: "osan-air-base", region: "South Korea", oconus: true },
  { name: "USAG Daegu", slug: "usag-daegu", region: "South Korea", oconus: true },
  { name: "USAG Humphreys", slug: "camp-humphreys-usag-humphreys", region: "South Korea", oconus: true },
  { name: "USAG Yongsan-Casey", slug: "usag-yongsan-casey", region: "South Korea", oconus: true },
  { name: "Mor\u00f3n AB", slug: "moron-ab", region: "Spain", oconus: true },
  { name: "Naval Station Rota", slug: "naval-station-rota", region: "Spain", oconus: true },
  { name: "Incirlik AB", slug: "incirlik-ab", region: "Turkey", oconus: true },
  { name: "Izmir AS", slug: "izmir-as", region: "Turkey", oconus: true },
  { name: "RAF Alconbury, RAF Molesworth", slug: "raf-alconbury-raf-molesworth", region: "United Kingdom", oconus: true },
  { name: "RAF Croughton, RAF Fairford", slug: "raf-croughton-raf-fairford", region: "United Kingdom", oconus: true },
  { name: "RAF Lakenheath", slug: "raf-lakenheath", region: "United Kingdom", oconus: true },
  { name: "RAF Mildenhall", slug: "raf-mildenhall", region: "United Kingdom", oconus: true },
  { name: "285th CES", slug: "285th-ces", region: "Virgin Islands", oconus: true },
];

export const TOPIC_DICT: TopicDef[] = [
  { segment: "base-essentials", topic: "check-in-procedures", label: "Check-in Procedures" },
  { segment: "base-essentials", topic: "emergency-assistance", label: "Emergency Assistance" },
  { segment: "base-essentials", topic: "major-units", label: "Major Units" },
  { segment: "base-essentials", topic: "sponsorship", label: "Sponsorship" },
  { segment: "child-and-youth-services", topic: "child-and-youth-programs", label: "Child and Youth Programs" },
  { segment: "child-and-youth-services", topic: "child-care", label: "Child Care" },
  { segment: "child-and-youth-services", topic: "youth-services", label: "Youth Services" },
  { segment: "education", topic: "college-technical-training", label: "College/Technical Training" },
  { segment: "education", topic: "education", label: "Education" },
  { segment: "education", topic: "local-schools", label: "Local Schools" },
  { segment: "education", topic: "overseas-schools", label: "Overseas Schools" },
  { segment: "exceptional-family-member-program", topic: "education-directory", label: "Education Directory" },
  { segment: "exceptional-family-member-program", topic: "exceptional-family-member-program", label: "Exceptional Family Member Program" },
  { segment: "exceptional-family-member-program", topic: "health-care-special-needs", label: "Health Care/Special Needs" },
  { segment: "exceptional-family-member-program", topic: "preparing-for-your-move", label: "Preparing for Your Move" },
  { segment: "exceptional-family-member-program", topic: "special-education-eis", label: "Special Education/EIS" },
  { segment: "health", topic: "health-care", label: "Health Care" },
  { segment: "housing", topic: "government-housing", label: "Government Housing" },
  { segment: "housing", topic: "housing", label: "Housing" },
  { segment: "housing", topic: "temporary-housing", label: "Temporary Housing" },
  { segment: "legal", topic: "legal-assistance", label: "Legal Assistance" },
  { segment: "military-and-family-support-center", topic: "deployment-support", label: "Deployment Support" },
  { segment: "military-and-family-support-center", topic: "employment", label: "Employment" },
  { segment: "military-and-family-support-center", topic: "family-advocacy-program", label: "Family Advocacy Program" },
  { segment: "military-and-family-support-center", topic: "financial-assistance", label: "Financial Assistance" },
  { segment: "military-and-family-support-center", topic: "loan-closet", label: "Loan Closet" },
  { segment: "military-and-family-support-center", topic: "military-and-family-support-center", label: "Military and Family Support Center" },
  { segment: "military-and-family-support-center", topic: "new-parent-support-program", label: "New Parent Support Program" },
  { segment: "military-and-family-support-center", topic: "relocation-assistance", label: "Relocation Assistance" },
  { segment: "military-and-family-support-center", topic: "service-specific-information", label: "Service Specific Information" },
  { segment: "morale-welfare-and-recreation", topic: "library", label: "Library" },
  { segment: "morale-welfare-and-recreation", topic: "morale-welfare-and-recreation", label: "Morale, Welfare and Recreation" },
  { segment: "moving", topic: "household-goods", label: "Household Goods" },
  { segment: "moving", topic: "shipping-pets", label: "Shipping Pets" },
  { segment: "transportation", topic: "motor-vehicles", label: "Motor Vehicles" },
];

export const HARVESTED_LINKS: Record<string, number[]> = {
  "anniston-army-depot": [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-rucker": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "maxwell-afb-and-gunter-annex": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "redstone-arsenal": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-2nd-medical-recruiting-battalion": [1,2,3,4,9,10,11,12,13,14,15,16,18,20,22,23,24,26,27,28,31,32,33,34],
  "usard-montgomery-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "davis-monthan-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-huachuca": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "luke-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcas-yuma": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "usard-phoenix-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "yuma-proving-ground": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "little-rock-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "pine-bluff-arsenal": [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "beale-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "camp-parks": [2,3,4,8,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "camp-pendleton": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "defense-distribution-depot-san-joaquin": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "edwards-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-hunter-liggett": [1,3,4,5,8,9,10,11,12,13,14,15,16,18,19,22,23,24,26,27,28,30,31,32,33],
  "fort-irwin": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "los-angeles-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34],
  "march-arb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "marine-corps-air-station-miramar": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "marine-corps-mountain-warfare-training-center-mwtc": [3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "mclb-barstow": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcrd-san-diego": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-facility-el-centro": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,29,31,32],
  "naval-air-station-lemoore": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-weapons-station-china-lake": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-base-coronado": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-base-point-loma": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-base-san-diego": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-base-ventura-county-point-mugu-port-hueneme": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-monterey": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-weapons-station-seal-beach": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,30,31,32],
  "presidio-of-monterey-dli-flc": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "travis-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "twentynine-palms-mcagcc": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-us-army-battalion-central-california": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-los-angeles-battalion": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-us-army-recruiting-battalion-northern-california": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "usard-southern-california-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "uscg-alameda": [0,1,2,3],
  "ucsg-los-angeles-long-beach": [0,2,3],
  "vandenberg-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "buckley-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-carson": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "peterson-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "schriever-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usaf-academy": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-denver-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "naval-submarine-base-new-london": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "ucsg-academy": [0,1],
  "dover-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "joint-base-anacostia-bolling": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-washington": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "pentagon-air-force": [3,4,5,9,10,11,12,13,14,15,16,18,19,23,26,27,28,29,31,32,34],
  "eglin-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "hurlburt-field": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "macdill-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-air-station-jacksonville": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-key-west": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-air-station-pensacola": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-whiting-field": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-station-mayport": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-orlando": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-support-activity-panama-city": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "patrick-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "tyndall-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "ussouthcom-u-s-army-garrison-miami": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-jacksonville-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-miami-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-tampa-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "uscg-miami-beach": [0,1,2,3],
  "fort-benning": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-gordon": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-stewart": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "hunter-army-airfield": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "marine-corps-logistics-base-albany": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "moody-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-submarine-base-kings-bay": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "robins-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-6th-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "mountain-home-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-station-great-lakes": [0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "rock-island-arsenal": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "scott-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-3rd-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-chicago-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "naval-support-activity-crane": [0,2,3,4,9,10,11,12,13,14,15,16,17,18,20,21,23,26,27,28,29,30,31,32,33],
  "usard-indianapolis-battalion": [0,1,2,3,4,5,9,10,11,12,13,14,15,16,18,20,23,26,27,28,31,32],
  "fort-leavenworth": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,34],
  "fort-riley": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34],
  "mcconnell-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-campbell": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-knox": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-7th-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32],
  "us-army-cadet-command-headquarters": [3,4,5,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-3rd-medical-recruiting-battalion": [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,18,20,23,24,26,27,28,31,32,33,34],
  "barksdale-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-polk": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-air-station-joint-reserve-base-new-orleans": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "ucsg-new-orleans": [0,1,2,3],
  "portsmouth-naval-shipyard": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "usard-new-england-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32],
  "aberdeen-proving-ground": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-detrick": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-george-g-meade-navy": [0,2,3,4,5,8,9,10,11,12,13,14,15,16,18,23,26,27,28,29,30,31,32],
  "fort-george-g-meade": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-base-andrews-naval-air-facility-washington": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,30,31,32,33,34],
  "naval-air-station-patuxent-river": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-annapolis-u-s-naval-academy": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-bethesda-home-of-walter-reed-national-military-medical-center": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-south-potomac-nsf-indian-head": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-1st-medical-recruiting-battalion": [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,18,20,23,24,26,27,28,31,32,33,34],
  "usard-baltimore-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32],
  "hanscom-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "natick-soldier-systems-center-nssc": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "uscg-boston": [0,1],
  "westover-arb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "u-s-army-garrison-detroit-arsenal": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "hart-dole-inouye-federal-center": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "usard-great-lakes-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-minneapolis-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "columbus-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "keesler-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-air-station-meridian": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-construction-battalion-center-gulfport": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "stennis-space-center": [2,3,4,8,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32],
  "fort-leonard-wood": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-kansas-city-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "whiteman-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "malmstrom-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "offutt-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "creech-afb": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-fallon": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "nellis-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-6th-medical-recruiting-battalion": [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,18,20,23,26,27,28,31,32,33,34],
  "joint-base-mcguire-dix-lakehurst": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-weapons-station-earle": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "picatinny-arsenal": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-2nd-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-mid-atlantic-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "cannon-afb": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "holloman-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "kirtland-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34],
  "u-s-army-garrison-white-sands-missile-range": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34],
  "fort-drum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-hamilton": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-saratoga-springs": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "united-states-military-academy-at-west-point": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,26,27,28,29,31,32,33,34],
  "usard-albany-battalion": [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-new-york-city-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-syracuse-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "camp-lejeune": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-bragg": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcas-cherry-point": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "mcas-new-river": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "pope-army-airfield": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "seymour-johnson-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-4th-brigade": [3,4,9,10,11,12,13,14,15,16,17,18,23,26,27,28,31,32],
  "usard-raleigh-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "grand-forks-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "minot-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "defense-supply-center-columbus": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-cleveland-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-columbus-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "uscg-cleveland": [0,1,2,3],
  "wright-patterson-afb": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "altus-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-sill": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcalester-army-ammunition-plant": [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "tinker-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "usard-oklahoma-city-battalion": [2,3,4,9,10,11,12,13,14,15,16,23,26,27,28,31,32],
  "vance-afb": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-portland-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "carlisle-barracks": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "defense-logistics-agency-at-susquehanna": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-mechanicsburg": [3,4,9,10,12,13,14,15,16,18,23,26,27,28,30,31,32,33],
  "naval-support-activity-philadelphia": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,30,31,32,33],
  "tobyhanna-army-depot": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-harrisburg-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "fort-buchanan": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-station-newport": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-jackson": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-base-charleston": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcas-beaufort": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "mcrd-parris-island": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "shaw-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-columbia-recruiting-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "ellsworth-air-force-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "arnold-afb": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,29,31,32],
  "naval-support-activity-mid-south": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-nashville-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "dyess-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-bliss": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-hood": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "goodfellow-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-base-san-antonio-lackland-randolph-sam-houston": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "laughlin-afb": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,19,23,26,27,28,30,31,32,34],
  "naval-air-station-corpus-christi": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-joint-reserve-base-fort-worth": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-kingsville": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "red-river-army-depot": [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34],
  "sheppard-afb": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,21,22,23,24,26,27,28,30,31,32,34],
  "us-army-cadet-command-5th-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-5th-medical-recruiting-battalion": [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,18,20,23,26,27,28,31,32,33],
  "usard-dallas-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-houston-battalion": [0,2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "ucsg-galveston": [0,1,3],
  "dugway-proving-ground": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34],
  "hill-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usard-salt-lake-city-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "defense-supply-center-richmond": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "dla-mcnamara-hqc": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "fort-belvoir": [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-lee": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27,28,29,30,31,32,33,34],
  "fort-myer-joint-base-myer-henderson-hall": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "henderson-hall-joint-base-myer-henderson-hall": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "joint-base-langley-eustis": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-expeditionary-base-little-creek-fort-story": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "marine-corps-base-quantico": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mccs-hampton-roads": [0,2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,30,31,32],
  "naval-air-station-oceana": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-station-oceana-dam-neck-annex": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-medical-center-portsmouth": [0,2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,30,31,32],
  "naval-station-norfolk": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-hampton-roads": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,30,31,32],
  "naval-support-activity-hampton-roads-northwest-annex": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "norfolk-naval-shipyard": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-support-activity-south-potomac-nsf-dahlgren": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-weapons-station-yorktown": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "newport-news-shipyard": [2,3,4,8,9,10,11,12,13,14,15,16,18,19,23,24,26,27,28,31,32],
  "surface-combat-systems-center-wallops-island": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "usard-richmond-recruiting-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "ucsg-portsmouth": [0,1,2,3],
  "fairchild-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "joint-base-lewis-mcchord": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,30,31,32,33,34],
  "naval-air-station-whidbey-island": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-base-kitsap": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-station-everett": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "us-army-cadet-command-8th-brigade": [3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "usard-seattle-battalion": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "uscg-seattle": [0,1,2,3],
  "fort-mccoy": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "f-e-warren-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "eielson-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-base-elmendorf-richardson-jber": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,30,31,32,33,34],
  "fort-greely": [2,3,4,5,8,9,10,11,12,13,14,15,16,18,19,23,26,27,28,30,31,32,34],
  "fort-wainwright": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "ucsg-ketchikan": [0,1,2,3],
  "uscg-kodiak": [0,1,2,3],
  "ankara": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "canberra": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-support-activity-stirling": [0,1,3],
  "naval-support-activity-bahrain": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "kleine-brogel-air-base": [2,3,4,8,9,10,11,12,13,14,15,16,18,23,24,26,27,28,31,32,33],
  "usag-benelux-brussels-schinnen": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-benelux-shape-chievres": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "navy-support-facility-diego-garcia": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-station-guantanamo-bay": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "buechel-air-base": [2,3,4,6,8,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32,34],
  "geilenkirchen-nato-air-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "kalkar-u-s-air-force-element": [2,3,4,8,9,10,11,12,13,14,15,16,18,19,22,23,26,27,28,29,31,32,34],
  "ramstein-ab": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "spangdahlem-ab": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "ansbach-united-states-army-garrison": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-bavaria": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-bavaria-garmisch": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-bavaria-hohenfels": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-rheinland-pfalz": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-rheinland-pfalz-baumholder": [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-stuttgart": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-wiesbaden": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-souda-bay": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "joint-region-marianas-andersen-afb": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-region-marianas-naval-base-guam": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "joint-base-pearl-harbor-hickam": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "mcb-hawaii": [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "schofield-barracks-fort-shafter": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "uscg-honolulu": [0,1,3],
  "papa-air-base": [2,3,4,8,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "aviano-air-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "ghedi-air-base": [2,3,4,8,9,10,11,12,13,14,15,16,18,23,26,27,28,31,32],
  "naval-air-station-sigonella": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-naples": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-support-activity-naples-department-gaeta": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "usag-italy-darby-military-community": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-italy": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "camp-s-d-butler-camp-foster-kinser-courtney-hansen-schwab-and-mcas-futenma": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "commander-fleet-activities-sasebo": [0,1,3,4,8,9,10,11,12,13,14,15,16,18,20,22,23,26,27,28,30,31,32],
  "commander-fleet-activities-yokosuka": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "kadena-ab": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "marine-corps-air-station-iwakuni": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "misawa-ab": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "naval-air-facility-atsugi": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "camp-zama": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "torii-station": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "yokota-ab": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "united-states-army-garrison-benelux-schinnen": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "volkel-air-base": [2,3,4,9,10,11,12,13,14,15,16,18,23,26,27,28,29,31,32],
  "stavanger": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "usag-poland": [8],
  "lajes-field": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-support-activity-singapore": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "commander-fleet-activities-chinhae": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "kunsan-ab": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "osan-air-base": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "usag-daegu": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "camp-humphreys-usag-humphreys": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
  "usag-yongsan-casey": [0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "moron-ab": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "naval-station-rota": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "incirlik-ab": [2,3,4,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32],
  "izmir-as": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34],
  "raf-alconbury-raf-molesworth": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  "raf-croughton-raf-fairford": [2,3,4,8,9,10,11,12,13,14,15,16,18,19,23,26,27,28,31,32,34],
  "raf-lakenheath": [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,28,30,31,32,33,34],
  "raf-mildenhall": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34],
};
