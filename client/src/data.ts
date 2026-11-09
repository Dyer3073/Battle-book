// MOS / rating / AFSC library.
//
// Two levels:
//  - "full" entries: the deep write-ups (duties, school, day-in-the-life,
//    career path, civilian transfer, cross-branch equivalents).
//  - "index" entries: every other code gets code, official title, branch,
//    occupational field, a plain-language summary, school/training where
//    publicly listed (otherwise "check official source"), and civilian
//    transferable skills.
//
// Rules baked in: career/overview information only — no operational or
// tactical how-to detail for any job. ASVAB figures appear only where a
// public source states them, and the entry cites that source; anything
// not publicly confirmed says "check official source." Summaries are
// paraphrased, never copied.

import { DEEP_INFANTRY } from "./deepInfantry";
import { DEEP_USMC_OTHER } from "./deepUsmcOther";
import { DEEP_ARMY } from "./deepArmy";
import { DEEP_OTHER_BRANCHES } from "./deepOtherBranches";

export type MosEntry = {
  id: string;
  code: string;
  title: string;
  branch: "Marine Corps" | "Army" | "Navy" | "Air Force" | "Space Force" | "Coast Guard";
  field: string;
  level: "full" | "index";
  summary: string;
  duties: string[];
  school: string;
  requirements: string;
  dayInLife?: string;
  careerPath?: string;
  civilian: string;
  similar: string[];
  sourceName: string;
  sourceUrl: string;
  sourceOfficial: boolean;
  // Optional deep-dive sections (heading + paragraph and/or bullets),
  // rendered after the career path. Summary/overview level only.
  extraSections?: { heading: string; body?: string; bullets?: string[] }[];
  // Optional index of the member's own source decks for this entry —
  // title, slide count, one-line topic note, and a link out to the
  // original deck. The deck content itself is never copied into the app.
  sourceDecks?: { title: string; slides: number; note: string; url: string }[];
  sourceDecksNote?: string;
  // Optional per-entry source links (label + verbatim URL), rendered as a
  // "Sources" list in the entry detail.
  sourceLinks?: { label: string; url: string }[];
};

const SRC = {
  usmcOcc13: { sourceName: "MarineParents — USMC Occ Field 13 (public MOS reference)", sourceUrl: "https://wab.marineparents.com/occfield.asp?Code=13", sourceOfficial: false },
  usmc1371: { sourceName: "Operation Military Kids — USMC 1371 career guide (public summary)", sourceUrl: "https://www.operationmilitarykids.org/usmc-combat-engineer-mos-1371/", sourceOfficial: false },
  usmcJobs: { sourceName: "LiveAbout — Marine Corps enlisted job descriptions (public summary of MOS Manual)", sourceUrl: "https://www.liveabout.com/marine-corps-enlisted-job-descriptions-3345386?print", sourceOfficial: false },
  armyScores: { sourceName: "Military.com — ASVAB scores and Army jobs (public summary)", sourceUrl: "https://www.military.com/join-armed-forces/asvab/asvab-and-army-jobs.html?amp", sourceOfficial: false },
  armyOmk: { sourceName: "Operation Military Kids — Army ASVAB/MOS reference (public summary)", sourceUrl: "https://www.operationmilitarykids.org/asvab-scores-for-army-jobs/", sourceOfficial: false },
  navyOfficial: { sourceName: "MyNavy HR — NAVPERS 18068F Vol. I, Appendix B (official rating communities)", sourceUrl: "https://www.mynavyhr.navy.mil/Portals/55/Reference/NEOCS/Vol1/08_Appendix_B_CH_105_Jan26_508.pdf?ver=YxYxZwF7Gt61HSyX6F3nXQ%3D%3D", sourceOfficial: true },
  navyScores: { sourceName: "ASVAB Tutor — Navy rating score reference (public summary)", sourceUrl: "https://asvabtutor.com/blog/navy-asvab-scores/", sourceOfficial: false },
  afDafecd: { sourceName: "ASVAB Tutor — Air Force MAGE scores from the DAF Enlisted Classification Directory (public summary)", sourceUrl: "https://asvabtutor.com/blog/air-force-asvab-scores/", sourceOfficial: false },
  multiBranch: { sourceName: "USMilitary.org — job codes by branch (public summary of branch recruiting sites)", sourceUrl: "https://usmilitary.org/non-combat-jobs/", sourceOfficial: false },
  packUsmc: { sourceName: "OFFICIAL — NAVMC 1200.1L MOS Manual, Marines.mil (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://www.marines.mil/Portals/1/Publications/NAVMC%201200.1L%20%28SECURED%29.pdf?ver=6Gs_zZnANHZU1qCTSOIk2g%3D%3D", sourceOfficial: true },
  packArmy: { sourceName: "OFFICIAL — DA Pam 611-21 Ch. 10, Army.mil (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://api.army.mil/e2/c/downloads/2025/12/04/7573670f/chapter-10-enlisted-base-chapter.pdf", sourceOfficial: true },
  packNavy: { sourceName: "OFFICIAL — Navy.com careers / MyNavy HR rating index (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://static.navy.com/careers-benefits/careers/page/49/", sourceOfficial: true },
  packAf: { sourceName: "OFFICIAL — AirForce.com Career Finder (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://www.airforce.com/careers/career-finder?tags=airforce%3Acareers%2Fcareer-finder%2Fpart-full-time%2Fpart-time", sourceOfficial: true },
  packSf: { sourceName: "OFFICIAL — SpaceForce.com Careers (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://www.spaceforce.com/careers", sourceOfficial: true },
  packCg: { sourceName: "GoCoastGuard.com enlisted ratings (public source pack, accessed Nov 8, 2026)", sourceUrl: "https://usmilitary.org/non-combat-jobs/", sourceOfficial: false },
};

type SrcKey = keyof typeof SRC;

function full(
  base: Omit<MosEntry, "level" | "sourceName" | "sourceUrl" | "sourceOfficial">,
  src: SrcKey,
): MosEntry {
  return { ...base, level: "full", ...SRC[src] };
}

function idx(
  base: Omit<MosEntry, "level" | "sourceName" | "sourceUrl" | "sourceOfficial" | "duties"> & { duties?: string[] },
  src: SrcKey,
): MosEntry {
  return { ...base, duties: base.duties ?? [], level: "index", ...SRC[src] };
}

export const MOS_ENTRIES: MosEntry[] = [
  /* ============================ USMC — FULL ============================ */
  full(
    {
      id: "usmc-1371",
      code: "1371",
      title: "Combat Engineer",
      branch: "Marine Corps",
      field: "13 — Engineer, Construction, Facilities & Equipment",
      summary:
        "Combat Engineers provide engineering support to the Marine Air-Ground Task Force and the Ground Combat Element. Their mission is built on three core competencies: Mobility (keeping friendly forces moving), Countermobility (slowing the enemy with obstacles), and Survivability (protecting positions and infrastructure). It is one of the broadest jobs in the Corps — part construction trade, part engineer reconnaissance, part heavy problem-solving under field conditions. This entry stays at career/overview level by design.",
      duties: [
        "Engineering support to the MAGTF/GCE across the three core competencies: Mobility, Countermobility, and Survivability",
        "General construction: build, alter, repair, and maintain buildings, roads, trails, and structures in the field and in garrison",
        "Tactical and assault bridging support so maneuver forces can cross gaps and water obstacles",
        "Engineer reconnaissance — surveying routes, bridges, and terrain and reporting what engineering work a mission needs",
        "Obstacle and survivability work: emplacing field obstacles and building protective positions and fortifications",
        "Rigging and material handling: lifting and moving heavy objects and equipment with bracing and rigging gear",
        "Support to engineer units across the force — combat engineer battalions, engineer support battalions, and Marine Wing Support / division and wing support elements",
      ],
      school:
        "Basic Combat Engineer Course at the Marine Corps Engineer School (MCES), Camp Lejeune (Courthouse Bay), North Carolina, after recruit training and Marine Combat Training — course and location as named in the official MOS Manual (NAVMC 1200.1L) and Marines.mil biography pages. Course length is deliberately not stated here: public secondary sources conflict, so verify the current length on the official source.",
      requirements:
        "Verify on official source: the public source pack (NAVMC 1200.1L, Marines.mil) used for this entry does not publish an ASVAB line score for 1371, so none is shown rather than guessed. Check Marines.com or a recruiter for the current entry standard.",
      dayInLife:
        "In garrison, a junior 1371's day is PT, gear and vehicle checks, then project work: carpentry and concrete tasks, equipment maintenance, classes, and range or field prep. In the field, the squad attaches to the unit it supports and the work follows the mission brief — construction tasks, obstacle work, route and bridge reconnaissance — usually outdoors, physical, and team-based. Deployment tempo is historically high because engineers attach to maneuver units.",
      careerPath:
        "1371s serve in combat engineer battalions, engineer support battalions, and wing/division support units, and can progress from apprentice to squad leader to platoon-level leadership. Senior paths include the Engineer Operations Chief Course and, for top performers, warrant officer (1310 Engineer Officer track is officer-side; enlisted advisors feed it). Lateral-move and special-duty options open with rank, and the field also feeds instructor billets at MCES.",
      civilian:
        "Construction trades (carpentry, concrete, heavy construction labor and supervision), heavy equipment operation, construction project coordination, facilities maintenance, and civil/site work. The breadth of the MOS translates well to general contracting and municipal public-works roles; documented experience helps with apprenticeships and OSHA/construction certifications.",
      similar: ["army-12b", "navy-bu", "navy-eo", "af-3e0x1", "army-12w"],
      extraSections: [
        {
          heading: "Organization — where 1371s serve",
          body: "Engineers are spread across every element of the Marine Air-Ground Task Force (MAGTF), and a 1371's unit shapes the flavor of the work. In garrison you belong to one of the units below; in the field, engineer squads and platoons task-organize and attach to the unit they support.",
          bullets: [
            "Combat Engineer Battalions (CEBs) — organic to the Marine divisions, CEBs provide close engineer support to infantry regiments: mobility, countermobility, and survivability work in direct support of maneuver units.",
            "Engineer Support Battalions (ESBs) — part of the Marine Logistics Group, ESBs deliver heavier general engineering: bridging, horizontal construction, bulk water and fuel support, and large-scale construction projects.",
            "Marine Wing Support Squadrons (MWSS) — the aviation combat element's engineers in the Marine Aircraft Wing: expeditionary airfield support, airfield damage repair, and base construction and recovery.",
            "Division and wing engineer elements — engineer staff sections and companies at division and wing level plan, coordinate, and task engineer support across the larger force.",
            "Engineers in the MAGTF — whether attached to a ground combat, logistics, or aviation element, small engineer teams habitually live and work with the unit they support, which is why 1371s deploy and train across the whole force rather than in one place.",
          ],
        },
        {
          heading: "Survivability work",
          body: "Survivability is the work of keeping friendly positions, people, and equipment alive under fire. At overview level, 1371 survivability work covers:",
          bullets: [
            "Fighting positions — digging and improving individual and crew-served fighting positions for the units engineers support.",
            "Protective positions — building hardened shelters and protective positions for personnel, command posts, and critical equipment.",
            "Revetments — barriers and retaining structures built around positions, vehicles, and equipment to shield them from blast and fragmentation effects.",
            "Shielding and cover — using earth, timber, and issued materials to add overhead cover and shielding to existing positions.",
            "Pioneer tool kits and engineer equipment — the hand tools (axes, saws, picks, shovels) and powered engineer equipment engineers use to build, dig, and harden positions in the field.",
          ],
        },
        {
          heading: "Constructed obstacles (countermobility)",
          body: "Constructed obstacles are the built side of countermobility. As a topic, it covers planning and emplacing man-made obstacles — barriers and disruptive features built from issued or local materials — to slow, canalize, or stop enemy movement, sited with the terrain and integrated into the supported unit's defensive plan. Engineers also record and report obstacle locations so friendly forces can navigate around or through them safely.",
        },
        {
          heading: "Reporting formats engineers use",
          bullets: [
            "IED/UXO 9-line report — the standard format for reporting a suspected improvised explosive device or unexploded ordnance: what was found, where it is, and what support is needed, passed up so EOD can respond.",
            "Casualty 9-line (MEDEVAC) report — the standard format for requesting medical evacuation of a casualty: pickup location, patient status, and what the site needs, so a medevac can be launched and guided in.",
          ],
        },
        {
          heading: "Skills",
          bullets: [
            "Construction fundamentals: carpentry, concrete and masonry, and reading basic construction plans",
            "Engineer reconnaissance and basic surveying of routes, bridges, and sites",
            "Demolitions and breaching as named training areas — studied in depth at school and in unit courses (procedures stay in those courses, not here)",
            "Obstacle planning and emplacement, and survivability construction",
            "Rigging, material handling, and working around heavy engineer equipment",
            "Fieldcraft: living and working outdoors, land navigation, and small-unit teamwork under a squad leader",
          ],
        },
      ],
      sourceDecksNote:
        "Decks 7 (LONG SURVIVABILITY) and 9 (Survivability Positions, C-11B01) are the same survivability positions course in two versions. These are your own decks, linked to the originals — their content lives there, not copied into this app.",
      sourceDecks: [
        {
          title: "ENGINEERING",
          slides: 144,
          note: "Broad 1371 overview course",
          url: "https://docs.google.com/presentation/d/1_cVlVE3Xe7WNDuhhodNzUJSCeVFf40KocqLA2byquhk/edit",
        },
        {
          title: "1371 QUICK NOTES",
          slides: 19,
          note: "4th Combat Engineer Battalion quick-reference notes",
          url: "https://docs.google.com/presentation/d/1IJ7cHbaQJ2A39OQBcH4vxVTP38_VyRFp/edit",
        },
        {
          title: "DEMO CALCULATIONS (Sgt Bellamy)",
          slides: 23,
          note: "Demolitions coursework",
          url: "https://docs.google.com/presentation/d/1UKO08o05CzZiR0m7LfOqZwORP1j4YK8o/edit",
        },
        {
          title: "Advanced Demolitions (C-41H01)",
          slides: 115,
          note: "Advanced demolitions course, mostly diagrams",
          url: "https://docs.google.com/presentation/d/1cKIljZSYWTMWwpvjEqDLWrEJI8dOvTsA/edit",
        },
        {
          title: "Urban Breaching Charge",
          slides: 72,
          note: "Urban breaching, mostly photos/diagrams",
          url: "https://docs.google.com/presentation/d/12MhXYQWKFbYJIWfiSRC3BTyv1atSzNEH/edit",
        },
        {
          title: "Constructed Obstacles (C-11C01)",
          slides: 83,
          note: "Countermobility / constructed obstacles",
          url: "https://docs.google.com/presentation/d/1gLi90-r-rOF82lTxT4tO9GO6HZLvL0Xr/edit",
        },
        {
          title: "LONG SURVIVABILITY",
          slides: 128,
          note: "Survivability positions course",
          url: "https://docs.google.com/presentation/d/1YAusDr_1agDuDkmWcaCmlIs2bG_mw52I/edit",
        },
        {
          title: "EXPEDIENT DEMOLITIONS (Sgt Bellamy)",
          slides: 19,
          note: "Expedient demolitions coursework",
          url: "https://docs.google.com/presentation/d/1DnzpaLlCS8SnfYlN0GgUc3kC4l4Uklw8/edit",
        },
        {
          title: "Survivability Positions (C-11B01)",
          slides: 119,
          note: "Same survivability course as LONG SURVIVABILITY",
          url: "https://docs.google.com/presentation/d/17zM3Gu8aICxP8DuGCrtDqhR8JW33h9EU/edit",
        },
        {
          title: "INFO For 111, 205, and 230 Ranges",
          slides: 48,
          note: "Range information and reporting",
          url: "https://docs.google.com/presentation/d/1d_4DmB29bh9rKQVkQYOoCdL2EaSm2IDWH-CZmTgdeyg/edit",
        },
      ],
    },
    "packUsmc",
  ),
  ...DEEP_INFANTRY,
  ...DEEP_USMC_OTHER,
  ...DEEP_ARMY,
  ...DEEP_OTHER_BRANCHES,

  /* ============================ USMC — INDEX =========================== */
  idx({ id: "usmc-1161", code: "1161", title: "Refrigeration and Air Conditioning Technician", branch: "Marine Corps", field: "11 — Utilities", summary: "HVAC Technicians install, service, and repair refrigeration and air-conditioning systems for facilities, cold storage, and field operations across the Corps.", school: "Marine Corps Engineer School, Camp Lejeune, NC — confirm on Marines.com.", requirements: "Check current ASVAB MM standard on Marines.com.", civilian: "HVAC service and installation — a licensed, in-demand trade.", similar: ["af-3e1x1"] }, "usmcOcc13"),

  /* ============================ ARMY — INDEX =========================== */
  idx({ id: "army-92f", code: "92F", title: "Petroleum Supply Specialist", branch: "Army", field: "Quartermaster", summary: "92Fs operate the Army's fuel distribution — receiving, testing, storing, and issuing petroleum products for vehicles and aircraft in garrison and the field.", school: "AIT at Fort Gregg-Adams, VA — confirm on GoArmy.com.", requirements: "Check current line scores on GoArmy.com.", civilian: "Fuel terminal and petroleum distribution operations.", similar: ["usmc-1391"] }, "armyScores"),
  idx({ id: "army-92y", code: "92Y", title: "Unit Supply Specialist", branch: "Army", field: "Quartermaster", summary: "92Ys run unit supply rooms and property accountability — issuing equipment, managing hand receipts, and keeping the commander's property book accurate.", school: "AIT at Fort Gregg-Adams, VA — confirm on GoArmy.com.", requirements: "Check current line scores on GoArmy.com.", civilian: "Inventory control, warehousing, and supply chain support.", similar: ["usmc-3043", "navy-ls"] }, "armyScores"),

  /* ========================= AIR FORCE — INDEX ========================= */
  idx({ id: "af-3d0x2", code: "3D0X2", title: "Cyber Systems Operations", branch: "Air Force", field: "Cyber (legacy 3D series — now 1D7 series)", summary: "Cyber Systems Operations specialists administer the Air Force's servers, networks, and systems — the legacy 3D0X2 now sits in the 1D7 cyber career field family. They keep base and deployed networks running and secure.", school: "Technical training at Keesler Air Force Base, MS — confirm current AFSC and course on AirForce.com.", requirements: "Public references list M 45 and E 60 for the legacy code (airforce.com data, Oct 2026) — verify the current 1D7 requirements on AirForce.com.", civilian: "Systems/network administration and IT infrastructure roles.", similar: ["army-25b", "navy-it"] }, "multiBranch"),

  /* ======================== SPACE FORCE — INDEX ======================== */
  idx({ id: "sf-cyber", code: "5C", title: "Cyber Operations (5C series)", branch: "Space Force", field: "Cyber Operations", summary: "Space Force Cyber Operations Guardians operate and defend the networks and systems space missions depend on — the Space Force's enlisted cyber workforce, organized in the 5C specialty series.", school: "Technical training at Keesler Air Force Base, MS — confirm current specialty codes on SpaceForce.com.", requirements: "Check current ASVAB and clearance standards on SpaceForce.com.", civilian: "Cybersecurity and network operations roles.", similar: ["af-3d0x2", "navy-it"] }, "multiBranch"),
  idx({ id: "sf-intel", code: "5I", title: "Intelligence (5I series)", branch: "Space Force", field: "Intelligence", summary: "Space Force Intelligence Guardians analyze threats to space systems and provide intelligence support to space operations — all-source, signals, and geospatial specialties organized in the 5I series.", school: "Technical training at Goodfellow Air Force Base, TX — confirm on SpaceForce.com.", requirements: "Check current ASVAB and clearance standards on SpaceForce.com.", civilian: "Intelligence and space-policy analysis roles.", similar: ["af-1n0x1", "af-1n1x1"] }, "multiBranch"),

];

/* ------------------------- Fieldcraft ------------------------- */

export type PackItem = { name: string; weightLb: number; category: string };

export const PACK_ITEMS: PackItem[] = [
  { name: "Main pack (rucksack)", weightLb: 7, category: "Carry" },
  { name: "Sleep system (bag + pad)", weightLb: 6, category: "Sleep" },
  { name: "Shelter (tent / bivy)", weightLb: 4, category: "Sleep" },
  { name: "Water — 3L carried", weightLb: 6.6, category: "Water & Food" },
  { name: "Water filter / purification", weightLb: 0.7, category: "Water & Food" },
  { name: "Food — 2 days (MRE / field food)", weightLb: 4, category: "Water & Food" },
  { name: "Wet-weather gear (top + bottom)", weightLb: 2.5, category: "Clothing" },
  { name: "Cold-weather layer set", weightLb: 3, category: "Clothing" },
  { name: "Extra uniform + socks ×3", weightLb: 3.5, category: "Clothing" },
  { name: "Boots (worn — not in pack weight if worn)", weightLb: 0, category: "Clothing" },
  { name: "Hygiene kit", weightLb: 1, category: "Admin & Hygiene" },
  { name: "First aid / IFAK", weightLb: 1.5, category: "Admin & Hygiene" },
  { name: "Headlamp + batteries", weightLb: 0.4, category: "Gear" },
  { name: "Multitool", weightLb: 0.5, category: "Gear" },
  { name: "550 cord (50 ft)", weightLb: 0.4, category: "Gear" },
  { name: "E-tool (folding shovel)", weightLb: 2.5, category: "Gear" },
  { name: "Poncho + liner", weightLb: 2, category: "Sleep" },
  { name: "Map, compass, protractor", weightLb: 0.5, category: "Navigation" },
  { name: "Notebook + pens (write-in-rain)", weightLb: 0.3, category: "Navigation" },
  { name: "Radio + spare battery (if issued)", weightLb: 2, category: "Gear" },
];

export type Guide = {
  id: string;
  title: string;
  minutes: number;
  body: string[];
};

export const GUIDES: Guide[] = [
  {
    id: "guide-hygiene",
    title: "Field Hygiene Basics",
    minutes: 4,
    body: [
      "Feet first: change socks daily (twice on movement days), air your feet out at every long halt, and treat hot spots the moment you feel them — moleskin or tape now beats a blister later.",
      "Hands: wash or sanitize before eating and after latrine use. Most field sickness is hand-to-mouth, not exotic.",
      "Teeth and skin: brush twice a day even in the field; keep folds of skin dry and use foot powder. Small infections end field problems early.",
      "Water discipline: drink on a schedule, not just when thirsty. Pale-yellow urine is the goal; dark urine or a headache means you're already behind.",
      "Sleep is hygiene too: even 4–5 hours of protected sleep keeps judgment and immune function far above zero-sleep performance.",
    ],
  },
  {
    id: "guide-cold",
    title: "Cold-Weather Layering & Care",
    minutes: 5,
    body: [
      "Layer system: wicking base (no cotton), insulating mid, wind/water shell. Add and remove layers before you sweat or chill — not after.",
      "The biggest cold-weather mistake is overdressing for movement. Start a march slightly cold; you'll warm up within ten minutes.",
      "Extremities: rotate gloves and socks, keep a dry pair sealed in a waterproof bag for sleep, and never sleep in the socks you marched in.",
      "Watch your buddy: white/waxy skin (frostnip), clumsiness, slurred speech, and the 'umbles' are stop-and-treat signs, not push-through signs.",
      "Calories are heat: eat the full ration and drink warm fluids when available. Cold operations burn far more energy than the same work in mild weather.",
    ],
  },
  {
    id: "guide-landnav",
    title: "Land Navigation Basics",
    minutes: 6,
    body: [
      "Know your pace count: measure how many double-steps you take per 100 meters on flat ground, then adjust — uphill and rough terrain shorten your stride.",
      "Orient the map to the terrain (or with your compass) every time you stop. Most navigation errors are small heading errors compounded over distance.",
      "Use handrails and catching features: roads, ridgelines, streams, and power lines you can follow or use as a 'you've gone too far' backstop.",
      "Attack points: navigate to a big, unmistakable feature near your objective first, then make the short, careful leg to the exact point.",
      "If you're lost: stop, mark your spot, and re-shoot your azimuth from the last known point. Walking 'to get a better look' is how small errors become big ones.",
    ],
  },
  {
    id: "guide-ruck",
    title: "Ruck Marching Fundamentals",
    minutes: 5,
    body: [
      "Pack heavy items high and close to your back; keep the load stable — a shifting pack costs more energy than the same weight packed tight.",
      "Boots and socks matter more than pack brand. Break boots in over weeks, and stop to fix hot spots immediately.",
      "Build distance and weight gradually — a common rule is adding no more than about 10% distance or load per week.",
      "March posture: slight forward lean from the ankles, short quick steps uphill, and use the hip belt — your legs should carry the load, not your shoulders.",
      "Hydrate and eat on the move in small amounts. Waiting until the end of a long ruck to eat and drink is how people become casualties at mile 11.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Expanded source-pack index: every code/title/field row parsed from  */
/* the public source pack (~/workspace/military-app/mos-web/, official */
/* sources first, accessed Nov 8, 2026). Rows that duplicate a curated */
/* entry above are dropped — the curated write-up wins. Index rows get */
/* an honest orientation summary built from the official title and     */
/* field only, and say "verify on official source" wherever the pack   */
/* does not state a fact. No ASVAB figures are generated.              */
/* ------------------------------------------------------------------ */

import { SOURCE_PACK_INDEX } from "./catalog";

const PACK_SRC: Record<string, SrcKey> = {
  "Marine Corps": "packUsmc",
  Army: "packArmy",
  Navy: "packNavy",
  "Air Force": "packAf",
  "Space Force": "packSf",
  "Coast Guard": "packCg",
};

function civilianFor(field: string, title: string): string {
  const t = `${field} ${title}`.toLowerCase();
  if (/engineer|construction|utilities|electrical|hvac|plumb/.test(t)) return "Construction trades, facilities maintenance, utilities, and site/project support roles.";
  if (/medic|medical|health|dental|nurs|pharm|laborator|hospital|corpsman/.test(t)) return "Healthcare support, clinical services, and health-administration pathways (credentials vary by role).";
  if (/intelligence|signals|cryptologic|linguist|geospatial/.test(t)) return "Intelligence, geospatial, research, and analysis roles in federal and contractor organizations.";
  if (/cyber|information|network|data|communication|radio|satellite|electronics|avionics/.test(t)) return "IT, networks, electronics, telecommunications, and systems-support roles.";
  if (/maintenance|mechanic|repair|machinist|propulsion|aircraft|vehicle/.test(t)) return "Equipment, vehicle, and aircraft maintenance and industrial technical trades.";
  if (/logistic|supply|transport|distribution|cargo|food|culinary|storekeeper/.test(t)) return "Logistics, supply chain, transportation, warehousing, and food-service roles.";
  if (/police|security|correction|fire|enforcement|investigat/.test(t)) return "Law enforcement, security, fire/emergency services, and protective-services pathways.";
  if (/personnel|administrat|finance|resource|yeoman|legal|chaplain|religious|public affairs|music/.test(t)) return "Administration, human resources, finance support, legal support, and communications roles.";
  if (/space|satellite|astronaut/.test(t)) return "Aerospace operations, mission support, and technical program roles.";
  if (/boat|deck|seaman|navigation|quartermaster|aviation|aircrew|pilot/.test(t)) return "Maritime and aviation operations, transportation, and safety-focused team roles.";
  return "Team leadership, operations support, training delivery, and field/technical experience related to this specialty's area.";
}

function similarFor(field: string, title: string): string[] {
  const t = `${field} ${title}`.toLowerCase();
  if (/combat engineer|engineer|construction/.test(t)) return ["usmc-1371", "army-12b", "navy-bu"];
  if (/medic|corpsman|medical service/.test(t)) return ["army-68w", "navy-hm", "af-4n0x1"];
  if (/information technology|cyber|network|systems/.test(t)) return ["army-25b", "navy-it", "af-3d0x2"];
  if (/intelligence/.test(t)) return ["usmc-0231", "army-35f", "af-1n0x1"];
  if (/police|master-at-arms|security forces/.test(t)) return ["navy-ma", "army-31b", "af-3p0x1"];
  if (/boatswain|deck/.test(t)) return ["cg-bm", "navy-bm"];
  if (/administrative|personnel|human resources|yeoman/.test(t)) return ["usmc-0111", "army-42a", "navy-yn"];
  if (/infantr|rifleman/.test(t)) return ["usmc-0311", "army-11b"];
  return [];
}

function slugFor(branch: string, code: string): string {
  const prefix: Record<string, string> = {
    "Marine Corps": "usmc",
    Army: "army",
    Navy: "navy",
    "Air Force": "af",
    "Space Force": "sf",
    "Coast Guard": "cg",
  };
  return `${prefix[branch] ?? "x"}-${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

const curatedKeys = new Set(MOS_ENTRIES.map((e) => `${e.branch}|${e.code.toUpperCase()}`));

export const ALL_MOS_ENTRIES: MosEntry[] = [
  ...MOS_ENTRIES,
  ...SOURCE_PACK_INDEX.filter(([branch, code]) => !curatedKeys.has(`${branch}|${code.toUpperCase()}`)).map(
    ([branch, code, title, field]) => {
      const b = branch as MosEntry["branch"];
      const src = SRC[PACK_SRC[branch] ?? "multiBranch"];
      const entry: MosEntry = {
        id: slugFor(branch, code),
        code,
        title,
        branch: b,
        field: field || "General",
        level: "index",
        summary: `${title} is a ${b} specialty listed under ${field || "its occupational field"} in the official public index used for this library. This is a career-orientation entry built from the official code, title, and field listing — use the cited official source to confirm current duties, eligibility, training details, and whether the specialty is open.`,
        duties: [],
        school: "Not stated in the cited source — verify on official source.",
        requirements: "Verify on official source. This index does not state ASVAB or aptitude scores, and no figure is guessed.",
        civilian: civilianFor(field, title),
        similar: similarFor(field, title),
        sourceName: src.sourceName,
        sourceUrl: src.sourceUrl,
        sourceOfficial: src.sourceOfficial,
      };
      return entry;
    },
  ),
];

export const BRANCHES = ["Marine Corps", "Army", "Navy", "Air Force", "Space Force", "Coast Guard"] as const;

export const BRANCH_TESTS: Record<string, string[]> = {
  "Marine Corps": ["USMC PFT", "USMC CFT"],
  Army: ["Army AFT"],
  Navy: ["Navy PRT"],
  "Air Force": ["Air Force PFA"],
  "Space Force": ["Space Force PFA"],
  "Coast Guard": ["Coast Guard PT Test"],
};
