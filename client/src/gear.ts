// Gear Search — static reference data transcribed from the researched
// gear pack (~/workspace/military-app/gear/gear.md, researched
// November 9, 2026). The pack records NO prices anywhere, and neither
// does this section: prices are always the store's own live ones.
//
// Router honesty rules (the Deals-finder rule, carried over):
// - A store's search URL pattern ships ONLY if it was verified on
//   Nov 9, 2026 by constructing a search URL for the sample term
//   "military boots" and fetching it to confirm it returned that
//   store's real search results. Five stores passed: OpticsPlanet,
//   Tactical Distributors, LA Police Gear, 5.11 Tactical, and
//   Military Luggage Company.
// - The other seven stores could NOT be verified (the research fetcher
//   was bot-blocked with 403s, the storefront is script-driven, or
//   candidate paths returned 404). A build-time browser probe on
//   Nov 9, 2026 re-checked them and verified NONE of them either —
//   eBay 403, Amazon 403, GovX no extractable content, US Patriot
//   Tactical search 403, Cabela's search 403, Brigade Quartermaster
//   candidate search path 404, the Exchange script-driven with no
//   confirmable pattern. They therefore ship exactly as the pack
//   directs: homepage links labeled "search on their site," never a
//   constructed search URL.
// - No affiliate links or tags anywhere. Eligibility lines are stated
//   the way each store states them.
//
// Guide framing rule (the pack's): what to look for, not verdicts.
// Nothing here was tested by the app; no "best product" picks exist in
// this section. Guidance is drawn from the services' own uniform
// regulations, official issue-item descriptions (PEO Soldier / Marine
// Corps Systems Command program names), the Army's APEL list, and
// manufacturer-published specifications. Where a regulation governs
// what may be worn, the regulation wins over any listing's marketing.

export const GEAR_STANDING_NOTE =
  "Prices are always the store's own live ones. This section carries no prices anywhere — a price copied into the app would be stale the moment it was saved, so every search opens the store's own results page and you compare the totals (with shipping) there. No affiliate links or tags anywhere in this section.";

export const GEAR_ROUTER_FRAMING =
  "Type what you're looking for once, then open each store's own results for that exact term. Five stores' search patterns were verified live on Nov 9, 2026 — their buttons build that store's real search. The other seven could not be verified (bot-blocked or script-driven storefronts), so they open the store's homepage instead, labeled “search on their site” — this app never fabricates a search link it hasn't confirmed.";

export const GEAR_PRICE_DISCIPLINE =
  "Price discipline, in order: (1) Check the Exchange first — tax-free, and AAFES publishes a price-match policy. (2) Check GovX if you're a verified member. (3) Check your installation Military Clothing Sales store for uniform items — it stocks the regulation article at the issue price point. (4) Check surplus (on-base thrift/surplus stores, established surplus retailers) for field items that are issued anyway — a used issue item in serviceable condition usually beats a new imitation. (5) Only then compare the commercial stores below, total price including shipping.";

export const GEAR_GUIDES_FRAMING =
  "What to look for, not verdicts: nothing in these guides was tested by the app and no product is ranked or named “best.” Issued items are named by their public program names only — MOLLE II, FILBE, ECWCS Gen III, MSS, APEL. Where a regulation governs what may be worn (boots, uniforms, eye pro), the regulation wins over any listing's marketing copy: a store calling a boot “regulation” does not make it so.";

/* ------------------------------ Store router ------------------------------ */

export type GearStore = {
  id: string;
  name: string;
  kind: string;
  /** The pack's one-line eligibility, as the store states it. */
  eligibility: string;
  /** The pack's router note for this store. */
  note: string;
  /** Homepage — the plain store link, and the ONLY link for
   * homepage-routed stores. Cabela's / Bass Pro carries two, each
   * with its own siteName so the two links are distinguishable. */
  homepages: { label: string; url: string; siteName?: string }[];
  /** Builds the store's live search URL from the member's term.
   * Present ONLY for the five fetch-verified patterns. */
  searchUrl?: (term: string) => string;
  /** Human-readable statement of the verified pattern. */
  patternLabel?: string;
};

/** Spaces as "+" with full URL-encoding of everything else. */
function plusEncode(term: string): string {
  return encodeURIComponent(term.trim()).replace(/%20/g, "+");
}

/** OpticsPlanet's verified pattern takes a lower-cased slug: spaces as hyphens. */
function slugEncode(term: string): string {
  return term
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const GEAR_STORES: GearStore[] = [
  {
    id: "opticsplanet",
    name: "OpticsPlanet",
    kind: "Commercial",
    eligibility: "Open to the public.",
    note: "Strong for boots, eye protection, lights, and optics-adjacent gear; the results page carries the store's own filters (brand, size, savings).",
    homepages: [{ label: "opticsplanet.com", url: "https://www.opticsplanet.com" }],
    searchUrl: (term) => `https://www.opticsplanet.com/s/${slugEncode(term)}`,
    patternLabel: "Search pattern verified live Nov 9, 2026",
  },
  {
    id: "tactical-distributors",
    name: "Tactical Distributors",
    kind: "Commercial",
    eligibility: "Open to the public.",
    note: "Curated tactical brands (Salomon Forces, LOWA, Altama, Arc'teryx LEAF-type lines); a smaller catalog than the marketplaces, with fewer knockoff listings to wade through.",
    homepages: [{ label: "tacticaldistributors.com", url: "https://www.tacticaldistributors.com" }],
    searchUrl: (term) => `https://www.tacticaldistributors.com/search?q=${plusEncode(term)}`,
    patternLabel: "Search pattern verified live Nov 9, 2026",
  },
  {
    id: "la-police-gear",
    name: "LA Police Gear",
    kind: "Commercial",
    eligibility:
      "Open to the public — the store's own description says it supplies law enforcement, first responders, military, security, and civilians.",
    note: "Known for closeout/clearance sections and its own house brand; a good comparison stop for boots, bags, and apparel basics.",
    homepages: [{ label: "lapolicegear.com", url: "https://lapolicegear.com" }],
    searchUrl: (term) => `https://lapolicegear.com/search?q=${plusEncode(term)}`,
    patternLabel: "Search pattern verified live Nov 9, 2026",
  },
  {
    id: "511-tactical",
    name: "5.11 Tactical",
    kind: "Commercial — single brand",
    eligibility:
      "Open to the public; verified service members/first responders get periodic ID.me-verified discount events (the store advertises them on-site; terms are the store's).",
    note: "Single-brand store — route here when you're specifically shopping 5.11 packs, pants, or boots, not for cross-brand comparison.",
    homepages: [{ label: "511tactical.com", url: "https://www.511tactical.com" }],
    searchUrl: (term) => `https://www.511tactical.com/catalogsearch/result/?q=${plusEncode(term)}`,
    patternLabel: "Search pattern verified live Nov 9, 2026",
  },
  {
    id: "military-luggage",
    name: "Military Luggage Company",
    kind: "Commercial",
    eligibility:
      "Open to the public; the store's stated mission is serving Service Members, Veterans, First Responders and their families.",
    note: "Bags and packs are the specialty (deployment bags, kit bags, MOLLE packs in OCP/MultiCam); sister-site relationship with US Patriot Tactical.",
    homepages: [{ label: "militaryluggage.com", url: "https://militaryluggage.com" }],
    searchUrl: (term) => `https://militaryluggage.com/search.php?search_query=${plusEncode(term)}`,
    patternLabel: "Search pattern verified live Nov 9, 2026",
  },
  {
    id: "ebay",
    name: "eBay",
    kind: "Commercial marketplace",
    eligibility: "Open to the public (individual sellers set their own terms).",
    note: "The main surplus/used-gear channel — and the main counterfeit channel. Read the knockoff warnings in the guides before buying “issue” gear here. Search pattern not verified — search happens on-site.",
    homepages: [{ label: "ebay.com", url: "https://www.ebay.com" }],
  },
  {
    id: "amazon",
    name: "Amazon",
    kind: "Commercial marketplace",
    eligibility: "Open to the public.",
    note: "Convenience and returns are the draw; seller identity matters — “sold by” third-party marketplace listings are where mislabeled gear concentrates (see the guides). Search pattern not verified — search happens on-site.",
    homepages: [{ label: "amazon.com", url: "https://www.amazon.com" }],
  },
  {
    id: "govx",
    name: "GovX",
    kind: "Commercial",
    eligibility:
      "Verified members only — current and former U.S. military, first responders, and government employees, verified through GovX's own system.",
    note: "Member pricing behind the verification wall is the point of the store; GovX is also the verifier behind many brands' own military stores. Sign in, then search on-site — search pattern not verified.",
    homepages: [{ label: "govx.com", url: "https://www.govx.com" }],
  },
  {
    id: "exchange",
    name: "The Exchange (AAFES)",
    kind: "Official DoD",
    eligibility:
      "Eligible patrons only — military ID-card holders in store; online, all honorably discharged veterans have lifetime online shopping via VetVerify/DEERS check.",
    note: "Tax-free, and AAFES publishes a Price Match Policy (linked from its own homepage footer) — the Exchange is the price-discipline baseline in the guides: check here first. Sign in, then search on-site — search pattern not verified.",
    homepages: [{ label: "shopmyexchange.com", url: "https://www.shopmyexchange.com" }],
  },
  {
    id: "us-patriot",
    name: "US Patriot Tactical",
    kind: "Commercial",
    eligibility: "Open to the public.",
    note: "Long-running uniform-and-boots retailer near major posts; a standard comparison stop for regulation boots and uniform items (see Guides 1 and 3). Search pattern not verified — search happens on-site.",
    homepages: [{ label: "uspatriottactical.com", url: "https://www.uspatriottactical.com" }],
  },
  {
    id: "brigade-qm",
    name: "Brigade Quartermaster",
    kind: "Commercial",
    eligibility: "Open to the public.",
    note: "Carries regulation uniform items (Propper/Tru-Spec), eye protection (incl. APEL-marked Oakley SI listings), and field gear; worth a manual on-site search for uniform-replacement items. Search pattern not verified — search happens on-site.",
    homepages: [{ label: "brigadeqm.com", url: "https://brigadeqm.com" }],
  },
  {
    id: "cabelas-basspro",
    name: "Cabela's / Bass Pro Shops",
    kind: "Commercial",
    eligibility:
      "Open to the public. (Both stores run a standing military discount program for verified shoppers — terms and verification are the stores' own, stated on their sites.)",
    note: "The military-adjacent outdoor stop: cold/wet-weather layers, boots, watches, and camp gear where the hunting/outdoor version of an item is the comparison point (see Guides 4–6). Search pattern not verified for either store — search happens on-site.",
    homepages: [
      { label: "cabelas.com", url: "https://www.cabelas.com", siteName: "Cabela's" },
      { label: "basspro.com", url: "https://www.basspro.com", siteName: "Bass Pro Shops" },
    ],
  },
];

/* ------------------------------ Buying guides ------------------------------ */

export type GearGuideSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type GearGuide = {
  id: string;
  /** Guide number in the pack (1–10). */
  num: number;
  title: string;
  /** One-line summary for cards, the Binder snapshot, and search. */
  summary: string;
  sections: GearGuideSection[];
  /** The pack's router-pairing line, where it gives one. */
  routerPairing?: string;
  /** Named source for the guide's trust stamp, from the pack. */
  source: string;
};

export type GearGuideGroup = {
  title: string;
  guides: GearGuide[];
};

const BOOTS: GearGuide = {
  id: "boots",
  num: 1,
  title: "Boots",
  summary:
    "Replacement boots are your purchase after training — and they must meet your branch's uniform regulation. Regulation first, then maker, fit, and the counterfeit channels.",
  source: "AR 670-1 / DA PAM 670-1 · Marine Corps Systems Command approved boot list",
  sections: [
    {
      heading: "The issued baseline",
      body: "Recruits are issued boots in training (e.g., the Marine Corps issues its Marine Corps Combat Boot; the Army issues hot-weather and temperate boots at initial entry). After training, replacement boots are the member's purchase — and they must meet the branch uniform regulation.",
    },
    {
      heading: "What the regulation requires — check before buying",
      body: "Army — boots worn with the combat uniform must be coyote brown, 8-inch height class, with the construction/material rules in AR 670-1 / DA PAM 670-1. Marine Corps — only boots on the Marine Corps' approved list (published by Marine Corps Systems Command) may be worn with MCCUUs, and authorized USMC boots carry the EGA emblem. Other branches publish their own authorized lists in their uniform instructions (the Uniforms section carries each branch's citation). If a listing can't name the regulation it complies with, treat “military style” as a fashion claim, not a uniform item.",
    },
    {
      heading: "What to look for",
      bullets: [
        "Genuine maker and model from an established uniform-boot maker (Belleville, Danner, Bates, McRae, Rocky, Altama are the names behind most issued/authorized lines).",
        "A Vibram or maker-spec outsole matched to your use — hot-weather boots trade insulation for drainage/venting; temperate/insulated boots do the opposite.",
        "Berry-compliant/US-made construction where the regulation or your unit requires it.",
      ],
    },
    {
      heading: "Issue vs. aftermarket",
      body: "The issued boot is free at entry and always regulation — but fit is generic. Authorized commercial models exist largely for fit and weight (lightweight garrison/ruck boots vs. field boots). Buy the aftermarket boot for a job (rucking, jungle/wet, flight-line steel/composite toe where required), not because it looks more tactical.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Boot sizing is not sneaker sizing — most members size down from their running-shoe size, and every maker lasts differently (Danner runs narrow, Belleville runs roomy is the common field report, but feet differ: try on with the socks you'll wear, late in the day, and use the store's exchange policy before a ruck does the deciding). Width letters (R/W/N) matter more than half-sizes. Break boots in progressively well before a graded ruck or field problem.",
    },
    {
      heading: "Knockoff warnings",
      body: "Marketplace listings for famous models at improbable discounts are a known counterfeit channel — check the seller, compare maker's markings/labels, and prefer authorized retailers (the router above) for any boot you intend to wear in uniform; a counterfeit boot failing in the field costs more than the savings.",
    },
  ],
};

const PACKS: GearGuide = {
  id: "packs-rucks",
  num: 2,
  title: "Packs & Rucks",
  summary:
    "MOLLE II and FILBE are issued and stay government property — what you buy is a personal pack. Frame, fabric, hardware, and torso fit are what separate a carrier from a silhouette copy.",
  source: "PEO Soldier — MOLLE II · Marine Corps Systems Command — FILBE",
  sections: [
    {
      heading: "The issued baseline",
      body: "Army — MOLLE II rucksack system (large ruck, sustainment pouches, FLC vest family). Marine Corps — FILBE (Family of Improved Load Bearing Equipment) main pack, which replaced the ILBE. Both are issued through CIF/IIF and remain government property to turn back in. What you buy is a personal pack — an assault pack, deployment bag, or a better-fitting ruck your unit allows — not a replacement for the issued system unless your unit authorizes it.",
    },
    {
      heading: "What to look for",
      bullets: [
        "Frame type matched to load — external/internal frame for heavy rucking; frameless assault packs are 1–3 day bags, not load carriers.",
        "Genuine 500D/1000D Cordura-class fabric and bar-tacked stress points.",
        "YKK-class zippers or ITW/Nexus-class hardware named in the spec.",
        "A hip belt that actually transfers weight to the hips.",
        "MOLLE/PALS webbing spacing true to spec — off-spec webbing won't hold pouches square.",
      ],
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Issued rucks are heavy but bombproof, free, and always allowed. Aftermarket packs win on weight and fit for personal use, travel, and school/deployment bags — but camo pattern and color rules are unit-specific (OCP/MultiCam vs. coyote vs. black assault packs vary by unit SOP), so check before buying a pack you plan to carry in uniform.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Torso length, not height, sizes a ruck frame — measure or get fitted; a “medium” pack from one maker is not another's. Duffel/deployment bags: check airline dimensions if it will fly, and lockable zippers for travel days.",
    },
    {
      heading: "Knockoff warnings",
      body: "“FILBE-style” and “MOLLE-style” marketplace bags copy the silhouette with lighter fabric and stitching — at ruck weights the shoulder straps and frame sheet are what fail. If buying used issue, inspect frame welds/sheet, all buckles (the most-lost part), and drain grommets; replacement buckle kits from the maker beat a whole new pack.",
    },
  ],
  routerPairing: "Military Luggage Company and Brigade Quartermaster are the pack specialists in the router; surplus is the first stop for a second issue ruck.",
};

const UNIFORMS_GUIDE: GearGuide = {
  id: "uniforms-replacements",
  num: 3,
  title: "Uniforms & Replacements",
  summary:
    "After the initial clothing bag, replacements come out of your clothing allowance — the system assumes you buy the regulation article, sewn to the branch spec.",
  source: "Branch uniform regulations — see the Uniforms section for each branch's citation",
  sections: [
    {
      heading: "The issued baseline",
      body: "The initial-entry clothing bag is issued; after that, replacements come out of the annual clothing allowance — the system assumes you buy the regulation article: Army ACU/IHWCU in OCP, USMC MCCUU (woodland/desert), Navy NWU Type III, Air Force/Space Force OCP — sewn to the branch spec (fabric blend, print, and construction are regulated; the Uniforms section carries each branch's regulation).",
    },
    {
      heading: "What to look for",
      body: "The actual spec label — genuine uniform items from the contract makers (Propper, Tru-Spec, Rothco's regulation lines, and the clothing-sales article) carry the branch-correct fabric (e.g., NYCO ripstop for hot-weather uniforms) and the correct print (OCP is a licensed pattern; “OCP-style” prints differ visibly next to the real article). Hot-weather variants (IHWCU and equivalents) are a different, lighter fabric — know which one you're buying and that your command allows it.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Clothing Sales = the exact article, no guessing, priced at the issue point — the default. Commercial makers offer the same spec with better tailoring/fit options and are the practical route for sizes clothing sales is out of. Premium “tactical” versions of the uniform (extra pockets, stretch panels, non-spec fabrics) may be excellent clothing and still not be a uniform — if it isn't built to the branch spec, it isn't wearable on duty.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Uniform sizes are not retail sizes (chest/length and waist/inseam codes — e.g., Medium-Regular — follow the branch size charts, and women's cuts are separate spec patterns, not sized-down men's). Buy one, wash it, check fade/shrink and fit, then stock up; hot-weather and standard fabrics fade at different rates, which is how a top and trousers stop matching.",
    },
    {
      heading: "Knockoff warnings",
      body: "The cheapest marketplace “OCP uniforms” are usually the wrong print, wrong fabric, or both — obvious next to the real article and a uniform-issue at inspection. Name tapes, rank, and badges: buy from makers who embroider to the branch spec (thread colors and dimensions are regulated), or use Clothing Sales.",
    },
  ],
  routerPairing:
    "Exchange + Clothing Sales first (price discipline), then the Brigade Quartermaster / US Patriot Tactical homepages in the router (unverified-pattern stores — search on-site) and the verified-pattern stores for brand items.",
};

const COLD: GearGuide = {
  id: "cold-weather",
  num: 4,
  title: "Cold-Weather Gear",
  summary:
    "ECWCS Gen III is the reference system — seven layers, not one big coat. Think in the layer system and match the buy to the layer you're missing.",
  source: "PEO Soldier — ECWCS Gen III program",
  sections: [
    {
      heading: "The issued baseline",
      body: "The Army's ECWCS Gen III is the reference system — seven layers from silk-weight base (Level 1) through the extreme-cold parka/trousers (Level 7); the other services field equivalents (the USMC uses its own layering system built around similar levels; the Navy issues ECWCS-family items). CIF issues the layers for your climate; personal purchases fill gaps, replace losses, or upgrade a specific layer.",
    },
    {
      heading: "What to look for",
      body: "Think in the layer system, not in single jackets: base (wicking, no cotton), insulation (grid fleece / loft — “puffy” layers are insulation, not shells), shell (wind/water resistance; true waterproof = taped-seam rain gear, Guide 5), and the static extreme-cold layer for stationary work. Match the buy to the layer you're missing; a second mid-layer usually beats a heavier single coat.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Issued ECWCS is sized generously to layer and is always authorized — in garrison, outer layers worn in uniform must be the issued/authorized article in most units. Commercial insulation wins for off-duty, travel, and field use where your command allows commercial layers under or over the uniform. Boots/gloves/insoles are where members most often upgrade first (Guides 1 and 7).",
    },
    {
      heading: "Sizing & fit traps",
      body: "Layers are sized to stack — buy your normal size in each level rather than sizing up “to fit over,” which double-counts the ease the pattern already includes. Puffy layers compress under a ruck's hip belt and shoulder straps; if the use is rucking in the cold, insulation choice and venting matter more than raw warmth.",
    },
    {
      heading: "Knockoff warnings",
      body: "“Level 7 style” jackets are a staple counterfeit — the genuine article's loft, zippers, and shell fabric are the value; copies copy the look. Surplus genuine ECWCS is plentiful and honest — check for delamination at cuffs/hood and that drawcords/elastic still work.",
    },
  ],
  routerPairing: "Cabela's/Bass Pro and GovX for outdoor-brand insulation comparisons; surplus first for genuine ECWCS pieces.",
};

const WET: GearGuide = {
  id: "wet-weather",
  num: 5,
  title: "Wet-Weather Gear",
  summary:
    "Waterproof vs. water-resistant is the whole guide: sustained rain needs a membrane shell with taped seams. The issued shell is the authorized in-uniform article.",
  source: "ECWCS Level 6-class issued rain gear · service waterproof parka/trouser sets",
  sections: [
    {
      heading: "The issued baseline",
      body: "Issued rain gear (ECWCS Level 6-class waterproof shell; the USMC issues its own waterproof parka/trouser set; poncho/poncho-liner — the “woobie” — remain issued staples in several services). The issued shell is the authorized in-uniform article.",
    },
    {
      heading: "What to look for",
      body: "Waterproof vs. water-resistant is the whole guide: for sustained rain you need a membrane shell with taped seams and a DWR finish that still beads water; “shower-resistant” softshells wet out. Pit zips or other venting matter more than breathability claims once you're moving under load. For the woobie/poncho-liner aftermarket (a legal and beloved personal purchase), look for the genuine quilted ripstop construction — it's a blanket/insulation buy, not a uniform item.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Replacing a lost issued shell at Clothing Sales is usually the correct buy (authorized, priced at issue). Commercial rain gear earns its money off-duty and for hunting/fishing/travel. Gaiters and waterproof boot socks are personal items that solve specific wet problems (snow, swamp, boat work) the issue system doesn't.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Rain shells are cut to go over insulation — your normal size is right; sizing down makes it a fair-weather jacket. Check hood fit over a patrol cap/helmet if that's your use, and cuff closures over gloves.",
    },
    {
      heading: "Knockoff warnings",
      body: "Counterfeit membrane jackets (the big outdoor brands are the most copied products in the category) fail at seam tape first — buy membranes from authorized retailers (the router above), and treat marketplace “new with tags” membrane gear as suspect until verified.",
    },
  ],
};

const SLEEP: GearGuide = {
  id: "sleep-shelter",
  num: 6,
  title: "Sleep & Shelter",
  summary:
    "The MSS is a system rated as a system — and a bag's rating assumes an insulated pad under it. Buy sleep as a system against a temperature and a pad.",
  source: "Military Sleep System (MSS) program descriptions",
  sections: [
    {
      heading: "The issued baseline",
      body: "The long-serving Military Sleep System (MSS) — patrol bag + intermediate bag + bivy cover + stuff sacks, rated as a system; the Marine Corps fields its own three-season sleep system, and current issue varies by service and unit. Shelter at unit level is issued (tents, tarps); personal shelter buys are about lightening or replacing a specific piece, and about off-duty camping.",
    },
    {
      heading: "What to look for",
      body: "Buy sleep as a system against a temperature and a pad: a bag's temperature rating assumes an insulated sleeping pad under it — on the ground or a cot in the cold, the pad is half the system (look for a stated R-value when buying commercial). Ratings aren't standardized across brands the way buyers assume; compare by fill type (down = lightest, dies when wet; synthetic = heavier, insulates damp) and by the rating method the maker states. Compression: a bag that doesn't compress to your ruck's volume is a bag you won't carry.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Issued systems are heavy and bulky but complete, free, and field-proven — and they're signed-for property. Commercial bags/pads win for personal camping, schools where personal sleep gear is allowed, and weight-critical use. Hammock setups are a personal-comfort buy some units allow in the field and some don't — ask first.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Bag length (regular/long) by your height, not your preference; mummy vs. rectangular is a warmth-vs-sleep-quality trade, not a quality grade. Used MSS/sleep systems: check the bivy for seam-tape peeling and the bags for loft loss (a compressed-flat issued bag has lost most of its warmth) — loft you can shake back is the test.",
    },
    {
      heading: "Knockoff warnings",
      body: "Temperature ratings are the most inflated numbers in the category — an unknown-brand bag claiming extreme ratings at a fraction of the weight/price is claiming, not demonstrating. Buy sleep systems from the router's retailers or surplus, where what arrives can be checked against a known article.",
    },
  ],
  routerPairing: "Surplus for genuine MSS components; Cabela's/Bass Pro and OpticsPlanet for commercial bags/pads comparison.",
};

const EYE_GLOVES: GearGuide = {
  id: "eye-protection-gloves",
  num: 7,
  title: "Eye Protection & Gloves",
  summary:
    "Eye pro is a regulated item: if it isn't on your service's authorized list — APEL for the Army — it isn't eye protection for duty. Counterfeit “ballistic” eyewear is a safety counterfeit.",
  source: "PEO Soldier — APEL (Authorized Protective Eyewear List)",
  sections: [
    {
      heading: "The issued baseline — eye pro is a regulated item (read this first)",
      body: "For the Army, ballistic eyewear worn on duty must be on the APEL — the Authorized Protective Eyewear List (maintained by PEO Soldier); the other services publish their own authorized lists in their uniform/safety instructions. Issued APEL eyewear (ESS, Oakley SI, Revision and Wiley X lines have held APEL slots) comes through the unit. If it isn't on your service's authorized list, it isn't eye protection for duty — sunglasses styling and ANSI claims alone don't substitute.",
    },
    {
      heading: "What to look for — eye pro",
      body: "The exact model + lens configuration on the list (approval is by model, and lens swaps can matter); fit with your helmet and ear pro; lens set for your work (clear + smoke is the standard pairing; laser lenses are a unit-issue item, not a personal purchase). Replacement lenses/straps for an issued frame usually beat a whole new frame — Brigade Quartermaster and OpticsPlanet both stock APEL-line parts (see the router).",
    },
    {
      heading: "Gloves",
      body: "Issued flight/work gloves are the baseline; personal gloves split by job — hard-knuckle or padded gloves for vehicle/crew work, touchscreen-compatible for comms/admin, insulated for static cold (Guide 4), and flame-resistant where the job requires FR (flight, fuel, some vehicle crews) — FR is a spec, not a style: the listing must state the material (e.g., Nomex-class) honestly.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Eye pro — stay on the list, full stop; upgrade money is better spent on fit (a frame that seals on your face) than on fashion. Gloves — aftermarket is where dexterity improves most (shooting/admin gloves), but durability runs the other way; expect to replace thin dexterity gloves as consumables.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Glove sizing by hand circumference, not “usually a large”; eye pro fit can't be judged from photos — fogging and seal are fit problems first, product problems second (anti-fog wipes are the issued answer for a reason).",
    },
    {
      heading: "Knockoff warnings — a safety issue, not just quality",
      body: "Counterfeit “ballistic” eyewear is a safety counterfeit, not just a quality one — fake Oakley SI/ESS is common on marketplaces, and an unrated lens fails exactly when it matters. Buy eye pro only from authorized retailers (the router above), never from no-name marketplace sellers, and when in doubt check the model against the APEL list itself.",
    },
  ],
};

const TOOLS_LIGHTS: GearGuide = {
  id: "multi-tools-lights",
  num: 8,
  title: "Multi-Tools & Lights",
  summary:
    "Decide the job first — tool set, battery discipline, and mounting standard matter more than marketing numbers. Anything carried on duty gear answers to your unit's rules first.",
  source: "Unit issue descriptions (Gerber MP600 family) · maker warranty/repair channels",
  sections: [
    {
      heading: "The issued baseline",
      body: "Multi-tools are widely issued at unit level (the Gerber MP600 family is the classic issued tool; Leatherman tools appear across units), and weapon lights/lights are issued per unit SOP for duty use. Personal buys are for a tool/light that lives on your kit or in your pocket — and anything mounted or carried on duty gear answers to your unit's rules first.",
    },
    {
      heading: "What to look for — multi-tools",
      body: "Tool set matched to your actual week (pliers-forward for maintenance jobs; blade/scissors-forward for admin/medical-adjacent work); one-hand opening where gloves allow; a sheath that fits how you carry it; a maker with a real warranty/repair channel (the two big US makers both run one — a tool is a decade purchase if the warranty is).",
    },
    {
      heading: "What to look for — lights",
      body: "Decide the job first — admin light (small, low modes, red lens for light discipline at night), inspection light, or headlamp for hands-free work (headlamps are the field-work default; look for a red mode and lockout so it doesn't white-light a formation or a map). Battery discipline matters: match the battery to what your unit supply/logistics actually stocks (CR123A vs. AA vs. rechargeable is a supply question, not just a preference), and treat brightness marketing numbers with suspicion — runtime at a usable level is the honest spec.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "If the unit issues it, carry the issue one on duty and keep the personal one for everything else — losing a signed-for item is a statement-of-charges conversation, losing your own is just annoying. Aftermarket lights are where personal money visibly improves a daily task (headlamp quality especially).",
    },
    {
      heading: "Sizing & fit traps",
      body: "MOLLE-mount and rail-mount claims assume standards your pouch/rail may not match — check the mounting system your unit actually runs before buying mounts. Pocket-carry tools: weight is the trap; the tool left in the wall locker helps nobody.",
    },
    {
      heading: "Knockoff warnings",
      body: "Counterfeit weapon lights and premium multi-tools are common marketplace items (cloned housings, no real output/warranty) — same rule as eye pro: authorized retailers for anything safety- or duty-adjacent, and if the discount looks impossible, it is describing a different product than the listing claims.",
    },
  ],
};

const WATCHES: GearGuide = {
  id: "watches",
  num: 9,
  title: "Watches",
  summary:
    "Smartwatches and GPS wearables are restricted or banned in some workplaces and secure areas — that restriction governs the category. What the service gives you is requirements, not a watch.",
  source: "Command & facility wearable-device rules · maker-published specifications",
  sections: [
    {
      heading: "The restriction that governs this category — read this first",
      body: "Smartwatches and GPS/fitness wearables are restricted or banned in some workplaces, briefings, and secure areas, and fitness-tracker data sharing has been a real operational-security problem for the services (location-heatmap disclosures are the documented example). Rules are set by command and facility — check yours before choosing a connected watch as your duty watch; many members keep a simple non-connected watch for work and the smartwatch for PT/life.",
    },
    {
      heading: "The issued baseline",
      body: "Watches are essentially a personal purchase in modern service (the old MIL-W-46374 specification watches are history/surplus now); what the service gives you is requirements and restrictions, not a watch.",
    },
    {
      heading: "What to look for",
      body: "Legibility first (a watch you can read at a glance, in the dark — lume or a backlight), water resistance honest to your use (a stated ATM rating; “water resistant” with no rating is splash-proof at best), a strap you can replace (NATO-style straps are popular because the watch survives a spring-bar failure), and size that fits under a cuff/glove. ABC (altimeter/barometer/compass) and GPS watches are a land-nav convenience — train to the map/compass standard anyway; batteries and signals fail, and a watch is not a navigation qualification.",
    },
    {
      heading: "Issue vs. aftermarket",
      body: "Fully aftermarket category — the “tradeoff” is analog/digital vs. smart: simple quartz field watches (Timex/Casio-class) are cheap, legible, and allowed almost everywhere; GPS multisport watches are training tools whose data you should set to private by default.",
    },
    {
      heading: "Sizing & fit traps",
      body: "Case diameter vs. wrist — oversized cases snag on kit and cuffs; measure your wrist, and remember a watch worn over a uniform sleeve in the cold is a different fit than on skin.",
    },
    {
      heading: "Knockoff warnings",
      body: "Premium field/diver styles are heavily counterfeited; the authorized-retailer rule applies, and surplus “issue” watches at modern prices are collectibles pricing, not value pricing.",
    },
  ],
};

export const BEFORE_YOU_SHIP: GearGuide = {
  id: "before-you-ship",
  num: 10,
  title: "Before You Ship",
  summary:
    "You will be issued nearly everything. The most common money mistake future members make is buying “military gear” before shipping — most of it will be confiscated, duplicated by issue, or not allowed.",
  source: "Branch recruiting commands' official what-to-bring / what-not-to-bring lists (via your recruiter/DEP)",
  sections: [
    {
      heading: "The standing rule: you will be issued nearly everything",
      body: "Every branch issues the full clothing bag, boots, and field gear at entry training. The single most common money mistake future members make is buying “military gear” before shipping — most of it will be confiscated into storage, duplicated by issue, or simply not allowed until after graduation.",
    },
    {
      heading: "Do not buy",
      body: "Boots (you'll be fitted and issued them; unauthorized boots can't be worn in training anyway — see Guide 1), uniforms or uniform items, packs/rucks (Guide 2 — issued), field gear, or anything a store markets as a “boot camp package.” If a retailer sells a bundle aimed at recruits, that is a sales product, not a requirement.",
    },
    {
      heading: "What actually matters before you ship",
      bullets: [
        "Read your branch's official “what to bring / what not to bring” list — each branch's recruiting command publishes one for its entry training (your recruiter and your DEP materials carry the current version; prohibited-item lists are explicit and enforced at receiving).",
        "The short personal list those publications consistently allow centers on documents/ID, a small amount of cash/card as directed, basic hygiene items until first exchange run, and the clothes on your back — the branch's published list, handed to you through your recruiter/DEP, is the only packing list to use. This guide deliberately does not print one, because the lists change and the recruiter's version is the one that will be checked against you at receiving.",
        "A simple, inexpensive watch (Guide 9) and — only if your branch's list allows them — basic running shoes broken in before you arrive are the classic exceptions; when in doubt, ask the recruiter, not a store.",
      ],
    },
    {
      heading: "Fitness is the real pre-ship purchase",
      body: "The Entry Fitness content in the Joining area (Get Ready) carries each branch's published entry standards — your money and effort before shipping are better spent on the weeks of running and conditioning to arrive above those minimums than on any gear in this section.",
    },
    {
      heading: "Price discipline for future members",
      body: "Total target spend before shipping should be close to zero beyond the recruiter's list. Save the gear budget — after graduation you'll know your job, your unit's rules, and your clothing allowance will be paying for replacements (Guides 1–9 are written for that moment).",
    },
  ],
};

export const GEAR_GUIDE_GROUPS: GearGuideGroup[] = [
  { title: "Wear it", guides: [BOOTS, UNIFORMS_GUIDE] },
  { title: "Carry & sleep", guides: [PACKS, SLEEP] },
  { title: "Weather", guides: [COLD, WET] },
  { title: "Kit", guides: [EYE_GLOVES, TOOLS_LIGHTS, WATCHES] },
  { title: "Starting out", guides: [BEFORE_YOU_SHIP] },
];

/** All 10 guides in pack order. */
export const GEAR_GUIDES: GearGuide[] = [
  BOOTS,
  PACKS,
  UNIFORMS_GUIDE,
  COLD,
  WET,
  SLEEP,
  EYE_GLOVES,
  TOOLS_LIGHTS,
  WATCHES,
  BEFORE_YOU_SHIP,
];
