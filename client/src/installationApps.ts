// Apps & Getting Around — the three-layer extension of My Installation,
// built from the researched pack (~/workspace/military-app/
// installation-apps/installation-apps.md, researched Nov 9, 2026).
// Christian's request: when a member selects their installation,
// surface the apps and pages that help them THERE — food ordering,
// bus routes, things to do (his example was Okinawa).
//
// LAYER 1 — UNIVERSAL_APPS: service-wide / joint official apps,
// hand-verified once in the pack (§1.1–1.12), shown for every
// installation. Every entry routes to the OWNER'S OWN official page
// (the pack's install rule) — never to a constructed app-store link.
// LAYER 2 — APP_HARVEST: three new topics (apps, shuttle-bus,
// food-ordering) added to My Installation's topic dictionary. Links
// are harvested from each installation's own official pages at build
// time, never constructed; an installation with no harvested link
// under a topic simply does not render that topic. Build-time
// re-harvest (Nov 9, 2026) covered the pack's 6-installation sample
// plus the Layer 3 hub installations; everywhere else the topics do
// not render yet — Layer 1 covers those installations by service.
// LAYER 3 — HUBS: hand-curated cards for the four named OCONUS hubs
// only (Okinawa, mainland Japan, Korea, Germany/KMC), every entry
// carrying the pack's sourcing-basis label: [A] named on an official
// installation page · [B] the transit authority's own app/page ·
// [O] official U.S. military owner-published.
//
// HARD RULES HONORED (pack): no commercial food-delivery apps
// anywhere (none was named on an official installation page); no
// app-store star ratings; no affiliate/referral links; cost only at
// named level (free / freemium); AFN only on OCONUS cards; the
// myPay entry is a WARNING, never a download; DFAS Info2Go is not
// featured; OTOPa is excluded (F-1).
//
// BUILD-TIME FLAG VERDICTS (Nov 9, 2026):
// F-2 DB Navigator ships on basis [B] only — no official Ramstein /
//     KMC newcomer page naming it was found at build.
// F-3 VRN SHIPS: myVRN verified as VRN's own app (VRN's own site
//     calls it the official app of the Verkehrsverbund Rhein-Neckar;
//     store developer Verkehrsverbund Rhein-Neckar GmbH) — basis [B],
//     routed via VRN's own apps page (vrn.de, opened live at build).
// F-4 86 FSS current official URL harvested at build: 86fss.com
//     (opened live at build; also the URL MilitaryINSTALLATIONS'
//     Ramstein program pages print).
// F-6 Exchange Taxi Plus: named level only, NO store link — the
//     Google Play developer identity is "ftnh", not AAFES, so the
//     publisher is printed as not separately verified and the route
//     is Osan's official overview, which names the app.
// F-7 Camp Lejeune re-harvest SUPPORTS the shuttle topic (below);
//     Naval Base San Diego's shuttle did NOT re-harvest to a current
//     page, so NBSD renders no shuttle-bus topic. NBSD food ordering
//     ships: Navy MWR's official Dine On The Go program page lists
//     San Diego as a current ordering location.

import { inDepthUrl, overviewUrl } from "./installation";

/* ------------------------------ Layer 1 ------------------------------ */

export type UniversalApp = {
  id: string;
  name: string;
  /** What it does, at the pack's level. */
  what: string;
  /** Who publishes it (the pack's publisher line). */
  publisher: string;
  /** The exact app-store developer name to match, where the pack
   * lists one — printed so members can verify before installing. */
  storeDeveloper?: string;
  platforms: string;
  /** Named level only: "Free" / "Free / freemium". Never a figure. */
  cost: string;
  basis: string;
  /** The install route: the owner's own official page. */
  routeLabel: string;
  routeUrl: string;
  statusNote?: string;
  legacy?: boolean;
  oconusOnly?: boolean;
};

export const UNIVERSAL_APPS: UniversalApp[] = [
  {
    id: "my-army-post",
    name: "My Army Post (MAPA)",
    what: "The Army's current garrison app: gate status and push notifications, installation events and resources, interactive bus routes, and per-post content.",
    publisher: "U.S. Army — US Army Materiel Command (developed by Army Futures Command's Army Software Factory)",
    storeDeveloper: "US Army Materiel Command",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (Army)",
    routeLabel: "Army.mil — Your guide to the My Army Post App",
    routeUrl: "https://www.army.mil/article/294829/your_guide_to_the_my_army_post_app_the_new_digital_hub_for_army_life",
    statusNote: "The Army's CURRENT garrison app — it is replacing Digital Garrison. Live at dozens of installations and expanding; pick your post inside the app.",
  },
  {
    id: "digital-garrison",
    name: "Digital Garrison",
    what: "The older joint IMCOM + AAFES garrison app: installation info and alerts, integrating home.army.mil, Army MWR, and ShopMyExchange (mobile shopping, curbside pickup).",
    publisher: "Army & Air Force Exchange Service (with IMCOM)",
    storeDeveloper: "Army & Air Force Exchange Service",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (AAFES / IMCOM)",
    routeLabel: "Army MWR — Digital Garrison App",
    routeUrl: "https://www.armymwr.com/happenings/digital-garrison-app",
    statusNote: "LEGACY — check My Army Post first. My Army Post is replacing Digital Garrison Army-wide, but per-post migration timing varies, so this stays listed for posts that have not migrated yet.",
    legacy: true,
  },
  {
    id: "usaf-connect",
    name: "USAF Connect (AF Connect)",
    what: "The Department of the Air Force's official enterprise app. Each base or unit is a “Favorite” sub-app inside it: emergency push notifications, base map, directory, events, housing work orders, and base-specific content — Ramstein's base-shuttle info, for example, is posted inside AF Connect. Space Force bases use it too.",
    publisher: "U.S. Air Force",
    storeDeveloper: "U.S. Air Force",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (Department of the Air Force)",
    routeLabel: "Official Air Force article on AF Connect (via Buckley SFB)",
    routeUrl: "https://www.buckley.spaceforce.mil/NEWS/Article/1859139/",
    statusNote: "For Air Force and Space Force installations, the per-installation content lives inside this one app as a Favorite — there is no separate per-base app to download.",
  },
  {
    id: "mccs-connect",
    name: "MCCS Connect",
    what: "The Corps-wide MCCS app consolidating the old per-installation MCCS apps: installation maps, events, directories, notifications, MCX deals and holiday hours, and local-life content.",
    publisher: "Marine Corps Community Services (MCCS)",
    storeDeveloper: "Business and Support Services Division (MR)",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (MCCS)",
    routeLabel: "MCCS — the MCCS Connect page (usmc-mccs.org)",
    routeUrl: "https://www.usmc-mccs.org/mccsconnect",
    statusNote:
      "Per-installation MCCS apps are being consolidated into MCCS Connect. Food-ordering honesty: MCCS runs NO Corps-wide food-ordering app — MCCS restaurant ordering is phone take-out per installation pages. App-based food ordering at Marine Corps installations comes from the Exchange side (MyExchangeFood) or a local FSS platform (Oki Grubs at Kadena).",
  },
  {
    id: "navy-app-locker",
    name: "Navy App Locker",
    what: "The Navy's official app gateway: 80+ official Navy apps in one locker, no CAC required. This is the route the Navy itself publishes for finding its real apps — the anti-fake-app route for the Navy.",
    publisher: "Department of the Navy, PMW 240 Mobility Program",
    storeDeveloper: "Department of the Navy, PMW 240 Mobility Program",
    platforms: "iOS + Android + web",
    cost: "Free",
    basis: "[O] Official — owner-published (Department of the Navy)",
    routeLabel: "Navy App Locker — applocker.navy.mil",
    routeUrl: "https://applocker.navy.mil/",
  },
  {
    id: "mynavy-family",
    name: "MyNavy Family",
    what: "The Navy's family-facing app: installation search and family resources drawn from 22+ official websites. Found inside the Navy App Locker.",
    publisher: "Department of the Navy (via Navy App Locker)",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (Department of the Navy)",
    routeLabel: "Navy App Locker — applocker.navy.mil",
    routeUrl: "https://applocker.navy.mil/",
  },
  {
    id: "my-exchange",
    name: "My Exchange",
    what: "The Exchange's official shopping app: tax-free shopping, MILITARY STAR perks, and store services. Sign in with your ShopMyExchange.com credentials.",
    publisher: "Army & Air Force Exchange Service",
    storeDeveloper: "Army & Air Force Exchange Service",
    platforms: "iOS + Android",
    cost: "Free",
    basis: "[O] Official — owner-published (AAFES)",
    routeLabel: "The Exchange Post (AAFES) — the My Exchange app",
    routeUrl: "https://www.theexchangepost.com/2026/03/23/your-exchange-your-way-anytime-anywhere/",
    statusNote: "This is the successor route to shopping inside Digital Garrison.",
  },
  {
    id: "myexchangefood",
    name: "MyExchangeFood",
    what: "Order-ahead from Exchange food courts, with a web twin at myexchangefood.com. Its published location search lists Okinawa (Japan), South Korea, Germany, the United Kingdom, Guam, and CONUS exchanges — this is the app-based food-ordering route that actually exists at most Exchange food courts.",
    publisher: "Army & Air Force Exchange Service (ordering platform: iMenu360)",
    storeDeveloper: "Army & Air Force Exchange Service",
    platforms: "iOS + Android + web",
    cost: "Free",
    basis: "[O] Official — owner-published (AAFES)",
    routeLabel: "MyExchangeFood — myexchangefood.com",
    routeUrl: "https://www.myexchangefood.com/",
  },
  {
    id: "click2go",
    name: "Commissary CLICK2GO",
    what: "The commissary's official online ordering: order online, curbside pickup (delivery at some stores).",
    publisher: "Defense Commissary Agency (DeCA)",
    storeDeveloper: "Defense Commissary Agency",
    platforms: "iOS + Android + web",
    cost: "Free",
    basis: "[O] Official — owner-published (DeCA)",
    routeLabel: "shop.commissaries.com — CLICK2GO online ordering",
    routeUrl: "https://shop.commissaries.com/",
  },
  {
    id: "dod-mwr-libraries",
    name: "DoD MWR Libraries (via Libby)",
    what: "Ebooks and audiobooks for eligible patrons: dodmwrlibraries.org is the joint-service portal (Army / USMC / Navy / Air Force / Space Force); the reading itself happens in Libby by OverDrive — in Libby, search for the library “Department of Defense” and sign in with your DoD ID number + date of birth.",
    publisher: "DoD MWR Libraries (portal); Libby by OverDrive, Inc.",
    platforms: "iOS + Android + web",
    cost: "Free with eligibility",
    basis: "[O] Official — owner-published (DoD MWR Libraries)",
    routeLabel: "DoD MWR Libraries — dodmwrlibraries.org",
    routeUrl: "https://dodmwrlibraries.org/",
  },
  {
    id: "afn-go-now",
    name: "AFN Go + AFN Now",
    what: "AFN Go streams AFN radio — your local AFN The Eagle station, news/talk/music channels, exchange rates, and weather. AFN Now is the TV-streaming sibling: live channels plus on-demand. Both serve the authorized audience OUTSIDE the United States, its territories and possessions, so they appear only on OCONUS installation pages.",
    publisher: "Defense Media Activity (American Forces Network)",
    storeDeveloper: "Defense Media Activity",
    platforms: "iOS + Android (AFN Now also Roku / Fire TV)",
    cost: "Free, eligibility-gated (DEERS-verified)",
    basis: "[O] Official — owner-published (Defense Media Activity)",
    routeLabel: "AFN Now — afn-now.myafn.mil",
    routeUrl: "https://afn-now.myafn.mil/",
    oconusOnly: true,
  },
];

/** The install rule, printed in the block (the pack's verification
 * rule, in spirit verbatim). */
export const INSTALL_RULE =
  "Install an app ONLY from the link on the service's, the Exchange's, or DeCA's own official page — every route in this block lands on the owner's own page — or confirm the store developer name matches exactly: Army & Air Force Exchange Service · Defense Commissary Agency · Department of the Navy, PMW 240 Mobility Program · US Army Materiel Command · Business and Support Services Division (MR) for MCCS. Fake and unsanctioned military apps are a documented problem — read the myPay warning below before you install anything with “pay” in its name.";

/** The myPay warning entry (pack §1.11) — a caution, never a
 * download. */
export const MYPAY_WARNING = {
  title: "myPay — there is NO official myPay app",
  body: "DFAS publishes no myPay app. The official mobile route is your browser at mypay.dfas.mil — that is the whole route. A non-sanctioned third-party app calling itself “MyPay DFAS LES” (10–15k downloads) has compromised accounts; DoD pages warn about it by name. If an app asks for your myPay credentials, it is not DFAS. One genuine DFAS app exists at named level only: payDFAS, a narrow app for paying a DFAS travel debt — it is not a myPay substitute. (The legacy “DFAS Info2Go” app is not featured here.)",
  routeLabel: "mypay.dfas.mil — use it in your browser",
  routeUrl: "https://mypay.dfas.mil/",
};

export const BASIS_LEGEND =
  "Basis labels say WHY an entry is listed: [O] official U.S. military owner-published · [A] named on an official installation page · [B] the transit authority's own app or page. No app-store star ratings are printed anywhere, and cost is stated only as the owner states it — free or freemium.";

/* ------------------------------ Layer 2 ------------------------------ */
// Three topics added to My Installation's topic dictionary (the
// pack's definitions). APP_HARVEST holds ONLY what the build-time
// harvest actually found on each installation's own official pages —
// a topic with no entry here does not render for that installation.

export type HarvestTopicId = "apps" | "shuttle-bus" | "food-ordering";

export const HARVEST_TOPICS: { id: HarvestTopicId; name: string; blurb: string }[] = [
  {
    id: "apps",
    name: "Apps to Download Here",
    blurb: "“Mobile apps” / newcomer “apps to download” pages and app-naming sections of this installation's own welcome and newcomer guides.",
  },
  {
    id: "shuttle-bus",
    name: "Shuttle & Bus",
    blurb: "Shuttle and bus schedules, route maps, and transportation pages from this installation's own official pages — including any published Passio Go agency code.",
  },
  {
    id: "food-ordering",
    name: "Food Ordering Here",
    blurb: "Online food-ordering pages from this installation's own official pages — MWR Dine On The Go, FSS ordering, Exchange food-court ordering.",
  },
];

export type HarvestedAppLink = { label: string; url: string; note: string };

const BUTLER_SLUG = "camp-s-d-butler-camp-foster-kinser-courtney-hansen-schwab-and-mcas-futenma";
export const GREEN_LINE_URL =
  "https://www.mcbbutler.marines.mil/Base-Information/The-Green-Line/RoutesandTimetables/INTRASHUTTLES/";
export const OKI_GRUBS_PAGE_URL = "https://kadenafss.com/chilis-delivery-to-go";
export const KMC_SHUTTLE_PDF_URL =
  "https://home.army.mil/rheinland-pfalz/2317/7149/7639/BMC_and_KMC_Shuttle_Schedules_19_FEB_26.pdf";

export const APP_HARVEST: Record<string, Partial<Record<HarvestTopicId, HarvestedAppLink[]>>> = {
  // JBSA — shuttle-bus (pack sample: strong). Passio Go agency code
  // "jbsa" per MilitaryINSTALLATIONS; JBSA's own official story
  // (via DVIDS) confirms the shuttles and the Passio Go setup.
  "joint-base-san-antonio-lackland-randolph-sam-houston": {
    "shuttle-bus": [
      {
        label: "JBSA — in-depth overview (MilitaryINSTALLATIONS)",
        url: inDepthUrl("joint-base-san-antonio-lackland-randolph-sam-houston"),
        note: "MilitaryINSTALLATIONS documents Fort Sam Houston's two shuttle routes and Lackland's shuttle. Live tracking runs in the Passio Go app — agency code “jbsa” (enter JBSA as the code, then as your agency). Shuttles are free to DoD ID cardholders and GPS-tracked.",
      },
      {
        label: "JBSA — “Free shuttles available to DOD cardholders on JBSA” (official story, via DVIDS)",
        url: "https://www.dvidshub.net/news/481525/free-shuttles-available-dod-cardholders-jbsa",
        note: "JBSA's own published rundown of the Lackland and Fort Sam Houston shuttle service and the Passio Go setup, including the separate Wilford Hall ↔ Brooke Army Medical Center shuttle.",
      },
    ],
  },
  // Camp Lejeune — shuttle-bus, RE-HARVESTED at build (flag F-7).
  // The pack's base-bus sources were dated; the re-harvest found the
  // Scarlet Express supported on CURRENT official pages: the base's
  // own article (lejeune.marines.mil) and Jacksonville Transit's own
  // current FAQ (the transit authority's page), both naming Passio Go
  // tracking and Token Transit fares. The old base-bus system was not
  // re-confirmed on a current page and is NOT shipped as current.
  "camp-lejeune": {
    "shuttle-bus": [
      {
        label: "Camp Lejeune — Scarlet Express article (lejeune.marines.mil)",
        url: "https://www.lejeune.marines.mil/News/Article/Article/3871202/city-bus-route-offers-patrons-affordable-transportation-between-camp-lejeune-an/",
        note: "The base's own article on Jacksonville Transit's Scarlet Express: the CAC-holders' bus between Camp Lejeune / Camp Johnson and Jacksonville — track it live in the Passio Go app, pay the fare in the Token Transit app (or with a paper ticket or exact cash).",
      },
      {
        label: "Jacksonville Transit — Frequently Asked Questions (the transit authority's own page)",
        url: "https://jacksonvillenc.gov/901/Frequently-Asked-Questions",
        note: "The city's current transit FAQ confirms the Express Route serving Camp Lejeune and Camp Johnson (Fri–Sun), the Token Transit app for fares, and Passio Go for live tracking — routes and schedules live on the city's Route Maps & Schedules page, linked from there.",
      },
    ],
  },
  // Naval Base San Diego — food-ordering ships (Dine On The Go);
  // shuttle-bus does NOT render: the F-7 re-harvest found no current
  // NBSD shuttle page (the pack's source was a dated medical-command
  // Welcome Aboard page), so no dated link is shipped as current.
  "naval-base-san-diego": {
    "food-ordering": [
      {
        label: "Navy MWR — Dine On The Go (official program page)",
        url: "https://www.navymwr.org/programs/food-and-beverage/dine-on-the-go",
        note: "Navy MWR's official program page lists Dine On The Go San Diego as a current ordering location — NBSD's MWR dining page names it Dine On The Go SW. Order online or in the app at select NBSD MWR locations; don't stand in line.",
      },
    ],
  },
  // Ramstein AB — shuttle-bus: the KMC network schedules PDF that
  // USAG Rheinland-Pfalz publishes on home.army.mil (current edition
  // harvested at build, dated 19 Feb 2026), incl. Ramstein KMCC Pax
  // Terminal stops. The 86 VRS base shuttle posts in AF Connect.
  "ramstein-ab": {
    "shuttle-bus": [
      {
        label: "USAG Rheinland-Pfalz — KMC & Baumholder shuttle schedules (PDF, home.army.mil)",
        url: KMC_SHUTTLE_PDF_URL,
        note: "The garrison's published shuttle schedules for the Kaiserslautern Military Community network — Baumholder / KMC / Landstuhl Regional Medical Center, including Ramstein KMCC Pax Terminal stops. Ramstein's own 86 VRS base shuttle posts its routes and times inside the AF Connect app (Layer 1).",
      },
    ],
  },
  // Camp S D Butler (Okinawa) — apps (the sample's 1-of-6
  // installation-level apps find: MCCS Okinawa's newcomer materials
  // name the apps) + shuttle-bus (The Green Line).
  [BUTLER_SLUG]: {
    apps: [
      {
        label: "MCCS Okinawa — Information, Referral & Relocation (newcomer / Welcome Aboard pages)",
        url: "https://www.okinawa.usmc-mccs.org/irr",
        note: "MCCS Okinawa's newcomer hub — Welcome Aboard brief, the Newcomer's Orientation Booklet, and relocation help. MCCS Okinawa's official Newcomers Orientation Welcome Aboard Booklet (and its Sponsorship Program Handbook) name MCCS Connect as the app newcomers should download — the Okinawa hub card below carries it.",
      },
    ],
    "shuttle-bus": [
      {
        label: "The Green Line — Routes and Timetables (mcbbutler.marines.mil)",
        url: GREEN_LINE_URL,
        note: "MCB Camp Butler's free inter-camp bus network: per-camp schedules, internal camp shuttles, and the Late Night Express. A web page, not an app — also in the Okinawa hub card below.",
      },
    ],
  },
  // Kadena AB — food-ordering: Oki Grubs, on Kadena FSS's own pages.
  "kadena-ab": {
    "food-ordering": [
      {
        label: "Kadena FSS — Chili's Delivery/To-Go (carries the Oki Grubs download)",
        url: OKI_GRUBS_PAGE_URL,
        note: "Kadena FSS's own dining pages carry the Oki Grubs app (iOS + Android) for order-ahead from Kadena FSS eateries — the Okinawa hub card below carries the full entry.",
      },
    ],
  },
  // Yokota AB — food-ordering, build-time harvest only (flag F-5):
  // the 374th FSS homepage spotlights Yokota Eats. Nothing else
  // Yokota-specific was verified, and nothing else is printed.
  "yokota-ab": {
    "food-ordering": [
      {
        label: "Yokota Eats — linked from the 374th FSS homepage",
        url: "https://yokotaeats.com/",
        note: "Online ordering for a Yokota FSS eatery, spotlighted on the 374th Force Support Squadron's own homepage at build time. Yokota FSS food-ordering and shuttle specifics beyond this harvested link were not separately verified — everything else Yokota routes through USAF Connect and the 374th FSS site (mainland Japan hub card below).",
      },
    ],
  },
  // CFAY Yokosuka — shuttle-bus: the Yoko-Pon, documented on CFAY's
  // official in-depth overview (Base Transportation).
  "commander-fleet-activities-yokosuka": {
    "shuttle-bus": [
      {
        label: "CFAY — in-depth overview: Base Transportation (MilitaryINSTALLATIONS)",
        url: inDepthUrl("commander-fleet-activities-yokosuka"),
        note: "CFAY's official overview documents the Yoko-Pon Shuttle — the free base bus: circular route, about nine stops, roughly every 15 minutes on weekdays / 25 on weekends — plus the Ikego lines and the CFAY airport shuttles (Narita / Haneda / Yokota). Web/PDF, not an app.",
      },
    ],
  },
  // Camp Humphreys — shuttle-bus, documented on the same official
  // overview that names the Korea apps.
  "camp-humphreys-usag-humphreys": {
    "shuttle-bus": [
      {
        label: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        url: inDepthUrl("camp-humphreys-usag-humphreys"),
        note: "The garrison's official overview documents the Camp Humphreys post shuttle (times are also posted in the My Army Post app), the Incheon Airport express bus, and public bus #1220 — Korea hub card below.",
      },
    ],
  },
  // Osan AB — shuttle-bus, per Osan's official overview.
  "osan-air-base": {
    "shuttle-bus": [
      {
        label: "Osan AB — in-depth overview (MilitaryINSTALLATIONS)",
        url: inDepthUrl("osan-air-base"),
        note: "Osan's official overview documents the Osan AB Shuttle (100% FREE), the 51 FSS Incheon airport shuttle, and the Inter-Garrison Bus Service — Korea hub card below.",
      },
    ],
  },
  // Fort Bragg (the directory's listing for Fort Liberty) is
  // deliberately ABSENT: the harvest confirmed no public post
  // shuttle and no installation-level food ordering there, so no
  // shuttle-bus or food-ordering topic renders for it — Layer 1
  // covers it by service (MAPA).
};

/* ------------------------------ Layer 3 ------------------------------ */

export type HubEntry = {
  name: string;
  category: "Food" | "Getting around" | "Things to do";
  what: string;
  publisher: string;
  platforms?: string;
  cost?: string;
  /** The pack's sourcing-basis label, printed on every entry. */
  basis: string;
  routeLabel?: string;
  routeUrl?: string;
  note?: string;
};

export type Hub = {
  id: string;
  title: string;
  area: string;
  slugs: string[];
  intro: string;
  entries: HubEntry[];
};

export function hubAriaLabel(hub: Hub): string {
  return `${hub.title} hub — apps & getting around`;
}

export const HUBS: Hub[] = [
  {
    id: "okinawa",
    title: "Okinawa",
    area: "Camp S D Butler (Foster, Kinser, Courtney, Hansen, Schwab, Futenma) + Kadena AB",
    slugs: [BUTLER_SLUG, "kadena-ab"],
    intro:
      "Hand-curated for Okinawa from the official pages themselves. On the Air Force side the “order food” answer is Kadena FSS's Oki Grubs; on the Marine side, Exchange food courts run through MyExchangeFood — MCCS restaurants are phone take-out, listed on the MCCS Okinawa site.",
    entries: [
      {
        name: "Oki Grubs",
        category: "Food",
        what: "Kadena AB's FSS food-ordering app: order ahead with live tracking, pickup or delivery, from Kadena FSS eateries (listings at research time included Kadena Chili's To-Go at the USO, Dough Pizzeria, OUTPOST, Seaside Restaurant, Hanabi's, and more). This is the Air Force-side “order food” answer for Okinawa.",
        publisher: "Kadena FSS (18th Force Support Squadron) — ordering platform by iMenu360",
        platforms: "iOS + Android",
        cost: "Free",
        basis: "[O] Official — the installation FSS's own platform",
        routeLabel: "Kadena FSS — Oki Grubs on its dining pages (kadenafss.com)",
        routeUrl: OKI_GRUBS_PAGE_URL,
      },
      {
        name: "MyExchangeFood",
        category: "Food",
        what: "Exchange food-court ordering at Okinawa's Exchanges (Kadena / Foster) — the Marine-side “order food from the Exchange” route. Also a Layer 1 app (above).",
        publisher: "Army & Air Force Exchange Service",
        platforms: "iOS + Android + web",
        cost: "Free",
        basis: "[O] Official — owner-published (AAFES)",
        routeLabel: "MyExchangeFood — myexchangefood.com",
        routeUrl: "https://www.myexchangefood.com/",
      },
      {
        name: "The Green Line",
        category: "Getting around",
        what: "MCIPAC / MCB Camp Butler's free inter-camp bus network: the official page carries routes and timetables, per-camp schedules, internal camp shuttles, and the Late Night Express (Fri/Sat). Official-duty travel; space-available for SOFA ID holders. A web page, not an app.",
        publisher: "Marine Corps Base Camp S D Butler (MCIPAC)",
        platforms: "Web page",
        cost: "Free",
        basis: "[O] Official — owner-published (MCB Camp Butler)",
        routeLabel: "The Green Line — Routes and Timetables (mcbbutler.marines.mil)",
        routeUrl: GREEN_LINE_URL,
      },
      {
        name: "MCCS Connect",
        category: "Things to do",
        what: "MCCS Okinawa's events, maps, directories, and local-life content — explicitly recommended to newcomers in MCCS Okinawa's official Newcomers Orientation Welcome Aboard Booklet. Also a Layer 1 app (above).",
        publisher: "Marine Corps Community Services — store developer: Business and Support Services Division (MR)",
        platforms: "iOS + Android",
        cost: "Free",
        basis: "[O + A] Official — and named in the installation's own newcomer booklet",
        routeLabel: "MCCS — the MCCS Connect page (usmc-mccs.org)",
        routeUrl: "https://www.usmc-mccs.org/mccsconnect",
        note: "The MCCS Okinawa Liberty app retires September 30, 2026 — the local-life content it carried (Green Line, taxi, things to do) now routes via MCCS Connect plus the Green Line page above.",
      },
      {
        name: "MCCS Okinawa site",
        category: "Things to do",
        what: "Tours/ITT, events, and dining (phone take-out) for the Okinawa camps.",
        publisher: "MCCS Okinawa",
        platforms: "Web",
        basis: "[O] Official — owner-published (MCCS Okinawa)",
        routeLabel: "MCCS Okinawa — okinawa.usmc-mccs.org",
        routeUrl: "https://www.okinawa.usmc-mccs.org/",
      },
      {
        name: "Kadena FSS site",
        category: "Things to do",
        what: "18th Force Support Squadron: events, ITT, Outdoor Recreation, and dining at Kadena AB.",
        publisher: "18th Force Support Squadron, Kadena AB",
        platforms: "Web",
        basis: "[O] Official — owner-published (Kadena FSS)",
        routeLabel: "Kadena FSS — kadenafss.com",
        routeUrl: "https://kadenafss.com/",
      },
      {
        name: "Yui Rail (Okinawa Urban Monorail)",
        category: "Getting around",
        what: "Naha's monorail — airport ↔ Shuri / Tedako-Uranishi. NO official Yui Rail app was verified, so this ships the operator's official website (route maps, timetables, fares) instead. Fares ride on the local OKICA IC card; nationwide IC cards (Suica etc.) work too. No Okinawa bus app is listed — none was verified on an official page.",
        publisher: "Okinawa Urban Monorail, Inc.",
        platforms: "Operator's official website — no official app verified",
        basis: "[B] The transit authority's own page",
        routeLabel: "Yui Rail — official site, English (yui-rail.co.jp)",
        routeUrl: "https://www.yui-rail.co.jp/en/",
      },
    ],
  },
  {
    id: "mainland-japan",
    title: "Mainland Japan",
    area: "Commander Fleet Activities Yokosuka + Yokota AB",
    slugs: ["commander-fleet-activities-yokosuka", "yokota-ab"],
    intro:
      "Hand-curated for Yokosuka and Yokota. Yokota specifics beyond the 374th FSS harvest were not separately verified in the research — Yokota routes through USAF Connect and the 374th FSS site, and prints nothing more specific than the harvest found.",
    entries: [
      {
        name: "Yoko-Pon Shuttle (CFAY base bus)",
        category: "Getting around",
        what: "Yokosuka's free on-base bus: circular route, about nine stops, roughly every 15 minutes on weekdays / 25 on weekends, plus Ikego home-to-work lines and CFAY airport shuttles (Narita / Haneda / Yokota) — reservations via the CFAY Bus Desk. Published on CFAY's official pages; web/PDF, not an app.",
        publisher: "Commander Fleet Activities Yokosuka (CNIC)",
        platforms: "Web / PDF",
        cost: "Free",
        basis: "[O] Official — owner-published (CFAY)",
        routeLabel: "CFAY — in-depth overview: Base Transportation (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("commander-fleet-activities-yokosuka"),
      },
      {
        name: "Navy MWR Yokosuka",
        category: "Things to do",
        what: "Yokosuka's MWR site: things to do plus dining pages.",
        publisher: "Navy MWR Yokosuka",
        platforms: "Web",
        basis: "[O] Official — owner-published (Navy MWR)",
        routeLabel: "Navy MWR Yokosuka — navymwryokosuka.com",
        routeUrl: "https://www.navymwryokosuka.com/",
      },
      {
        name: "Suica / PASMO IC cards",
        category: "Getting around",
        what: "The arrival and off-base transit route named on CFAY's official MilitaryINSTALLATIONS overview: “you can purchase a train ticket or IC Card (Pasmo or Suica card) while at the airport” (spelling as published). Cards, not apps — the overview also names Google Maps for arrival routing.",
        publisher: "The IC card operators — cards, not apps",
        basis: "[A] Named on the official installation overview",
        routeLabel: "CFAY — directory overview (MilitaryINSTALLATIONS)",
        routeUrl: overviewUrl("commander-fleet-activities-yokosuka"),
      },
      {
        name: "Yokota AB — USAF Connect + 374th FSS",
        category: "Things to do",
        what: "Yokota's route: USAF Connect (Layer 1) with Yokota added as a Favorite, plus the 374th Force Support Squadron's own site for things to do and dining. Yokota is also a CFAY airport-shuttle destination (Patriot Express arrivals).",
        publisher: "374th Force Support Squadron / Department of the Air Force",
        platforms: "Web + the USAF Connect app",
        basis: "[O] Official — owner-published (374th FSS)",
        routeLabel: "374th FSS — yokota374fss.com (harvested at build)",
        routeUrl: "https://yokota374fss.com/",
        note: "Yokota FSS food-ordering / shuttle specifics were not separately verified in the research (flag F-5) — the build-time harvest of the 374 FSS site found one food-ordering link (Yokota Eats, in the topic list above), and nothing further is printed.",
      },
    ],
  },
  {
    id: "korea",
    title: "Korea",
    area: "Camp Humphreys (USAG Humphreys) + Osan AB",
    slugs: ["camp-humphreys-usag-humphreys", "osan-air-base"],
    intro:
      "Hand-curated for Humphreys and Osan. The four commercial apps below are listed because USAG Humphreys' official MilitaryINSTALLATIONS in-depth overview names them for newcomers — that naming is their basis, printed on each entry. Korean food-delivery apps are NOT listed: no official installation page naming them was verified.",
    entries: [
      {
        name: "KakaoMap (Kakao Maps)",
        category: "Getting around",
        what: "Named on USAG Humphreys' official in-depth overview for real-time traffic and routes in Korea.",
        publisher: "Kakao Corp",
        platforms: "iOS + Android",
        cost: "Free / freemium",
        basis: "[A] Named on the official installation overview (USAG Humphreys)",
        routeLabel: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("camp-humphreys-usag-humphreys"),
      },
      {
        name: "Naver Map",
        category: "Getting around",
        what: "Named on USAG Humphreys' official in-depth overview alongside KakaoMap for routes and real-time traffic.",
        publisher: "NAVER Corp",
        platforms: "iOS + Android",
        cost: "Free / freemium",
        basis: "[A] Named on the official installation overview (USAG Humphreys)",
        routeLabel: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("camp-humphreys-usag-humphreys"),
      },
      {
        name: "Kakao T",
        category: "Getting around",
        what: "Named on USAG Humphreys' official in-depth overview for off-post taxis.",
        publisher: "Kakao Mobility (Kakao Corp)",
        platforms: "iOS + Android",
        cost: "Free / freemium",
        basis: "[A] Named on the official installation overview (USAG Humphreys)",
        routeLabel: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("camp-humphreys-usag-humphreys"),
      },
      {
        name: "Uber",
        category: "Getting around",
        what: "Named alongside Kakao T on USAG Humphreys' official in-depth overview for taxis.",
        publisher: "Uber Technologies",
        platforms: "iOS + Android",
        cost: "Free / freemium",
        basis: "[A] Named on the official installation overview (USAG Humphreys)",
        routeLabel: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("camp-humphreys-usag-humphreys"),
      },
      {
        name: "Camp Humphreys post shuttle",
        category: "Getting around",
        what: "Documented on USAG Humphreys' official in-depth overview — shuttle times are also posted in the My Army Post app (Layer 1). The overview also covers the Incheon Airport express bus and public bus #1220.",
        publisher: "USAG Humphreys",
        platforms: "Web page + My Army Post app",
        basis: "[O/A] Official — documented on the official overview",
        routeLabel: "USAG Humphreys — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("camp-humphreys-usag-humphreys"),
      },
      {
        name: "Osan AB base shuttle + airport buses",
        category: "Getting around",
        what: "The Osan AB Shuttle (100% FREE, per Osan's official overview; weekday windows published there), plus the 51 FSS Incheon airport shuttle and the Inter-Garrison Bus Service (Humphreys-run; Suwon / K-16 / Humphreys / Casey / Kunsan / Yongsan / Incheon).",
        publisher: "Osan AB / 51st Force Support Squadron",
        platforms: "Web page",
        cost: "Free",
        basis: "[O/A] Official — documented on the official overview",
        routeLabel: "Osan AB — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("osan-air-base"),
      },
      {
        name: "Exchange Taxi Plus app",
        category: "Getting around",
        what: "The app Osan's official overview names for the AAFES Exchange taxi service: “Download the 'Exchange Taxi Plus' app.” Listed at named level only — get it via the route on Osan's official overview, not via a store link from here.",
        publisher: "Not separately verified (flag F-6)",
        platforms: "Named on the official overview",
        basis: "[A] Named on the official installation overview (Osan AB)",
        routeLabel: "Osan AB — in-depth overview (MilitaryINSTALLATIONS)",
        routeUrl: inDepthUrl("osan-air-base"),
        note: "Build-time check (F-6): the Google Play listing's developer identity reads “ftnh”, not AAFES — so no store link is shipped and the developer match rule applies with extra care. The official naming on Osan's overview is the basis for listing it at all.",
      },
      {
        name: "51 FSS / ITT",
        category: "Things to do",
        what: "Osan's Force Support Squadron site — the FSS + ITT route named throughout Osan's official overview.",
        publisher: "51st Force Support Squadron, Osan AB",
        platforms: "Web",
        basis: "[O] Official — owner-published (51 FSS)",
        routeLabel: "51 FSS — 51fss.com",
        routeUrl: "https://51fss.com/",
      },
    ],
  },
  {
    id: "germany",
    title: "Germany (Ramstein / KMC)",
    area: "Ramstein AB + Kaiserslautern Military Community (incl. Baumholder)",
    slugs: ["ramstein-ab", "usag-rheinland-pfalz", "usag-rheinland-pfalz-baumholder"],
    intro:
      "Hand-curated for the Kaiserslautern Military Community. DB Navigator ships on the transit-authority basis only — no official KMC newcomer page naming it was verified — and it is labeled that way.",
    entries: [
      {
        name: "KMC shuttle network",
        category: "Getting around",
        what: "USAG Rheinland-Pfalz publishes the KMC shuttle schedules (PDF) on home.army.mil: the Baumholder / KMC / Landstuhl Regional Medical Center network, including Ramstein KMCC Pax Terminal stops. Ramstein's own 86 VRS base shuttle posts its routes and times inside the AF Connect app.",
        publisher: "USAG Rheinland-Pfalz",
        platforms: "PDF on home.army.mil + AF Connect for the 86 VRS shuttle",
        cost: "Free",
        basis: "[O] Official — owner-published (USAG Rheinland-Pfalz)",
        routeLabel: "KMC & Baumholder shuttle schedules (PDF, home.army.mil)",
        routeUrl: KMC_SHUTTLE_PDF_URL,
      },
      {
        name: "DB Navigator",
        category: "Getting around",
        what: "Deutsche Bahn's own app: schedules, real-time delays, and tickets including regional transport. Ships here ONLY as the transit authority's own app — naming on an official Ramstein/KMC newcomer page was NOT verified (flag F-2), so no stronger basis is claimed.",
        publisher: "Deutsche Bahn (DB Fernverkehr AG)",
        platforms: "iOS + Android",
        cost: "Free (tickets paid in-app)",
        basis: "[B] The transit authority's own app — NOT named on an official installation page",
        routeLabel: "DB Navigator — Deutsche Bahn's own app page (bahn.de)",
        routeUrl: "https://www.bahn.de/app",
      },
      {
        name: "86 FSS (Ramstein FSS site)",
        category: "Things to do",
        what: "Ramstein's Force Support Squadron site: events, ITT / Outdoor Recreation, food, and family programs for the KMC.",
        publisher: "86th Force Support Squadron, Ramstein AB",
        platforms: "Web",
        basis: "[O] Official — owner-published (86 FSS)",
        routeLabel: "86 FSS — 86fss.com (current official URL, harvested at build)",
        routeUrl: "https://86fss.com/",
        note: "Flag F-4: the pack did not re-verify this URL; the build harvested it — 86fss.com is the URL MilitaryINSTALLATIONS' own Ramstein program pages print, and the site was opened live at build time.",
      },
      {
        name: "myVRN (VRN regional transport)",
        category: "Getting around",
        what: "The Verkehrsverbund Rhein-Neckar's own app for the regional network that serves the Kaiserslautern area (bus route 141 serves Ramstein): connections, timetables, real-time information, and tickets. Verified at build as VRN's own app — VRN's own site calls myVRN the official app of the Verkehrsverbund Rhein-Neckar, and the store developer is Verkehrsverbund Rhein-Neckar GmbH (flag F-3, resolved: shipped).",
        publisher: "Verkehrsverbund Rhein-Neckar GmbH (VRN)",
        platforms: "iOS + Android",
        cost: "Free (tickets paid in-app)",
        basis: "[B] The transit authority's own app (verified at build)",
        routeLabel: "VRN — the myVRN app page (vrn.de)",
        routeUrl: "https://vrn.de/service/apps/companion/",
      },
    ],
  },
];

export function hubForSlug(slug: string): Hub | undefined {
  return HUBS.find((h) => h.slugs.includes(slug));
}

/** Layer 2 coverage counts actually surfaced (for the section's own
 * provenance line — computed from the harvest, never hand-typed). */
export function harvestCoverage(): { topic: HarvestTopicId; installations: number }[] {
  return HARVEST_TOPICS.map((t) => ({
    topic: t.id,
    installations: Object.values(APP_HARVEST).filter((h) => (h[t.id]?.length ?? 0) > 0).length,
  }));
}
