// Partner Forces — recognition reference, transcribed from the
// researched pack at ~/workspace/military-app/partners/partners.md
// (Nov 9, 2026). The pack is the content source of truth: force and
// service names exactly as each country's own official site states
// them, rank tables with a NATO code ONLY where an official source
// prints that alignment, insignia SPEC/DISPLAY lines only where
// official text describes the insignia, and every pack flag printed
// flagged — never blended, never back-filled.
//
// Scope (the pack's, held): recognition and joint-work literacy only.
// No adversaries, no capabilities/strength/readiness content, no
// partner equipment detail — none of that was researched and none of
// it appears here.

import type { RefLink } from "./refdata";

/* ------------------------- Part 1 — NATO backbone ------------------------ */

export const NATO_SOURCE_LINE =
  "The codes were established by STANAG 2116, NATO Codes for Grades of Military Personnel. The current edition — STANAG 2116 Ed. 7, promulgated 13 January 2021 — is the cover agreement; the working tables live in its companion publication APersP-01, NATO Codes for Grades of Military Personnel, Ed. A, Ver. 3 (Brussels: NATO Standardization Office, 16 June 2022), cited as the governing standard in official NATO Bi-Strategic Command directives.";

export const NATO_PURPOSE =
  "Nations use the codes, in the STANAG's own agreement language, “when preparing personnel tables, requisitions, reports and returns destined for NATO nations, organizations and commands.” The codes assigned to each grade are based on the agreed corresponding Army grades; each nation's naval and air equivalents follow its own national regulations within the same code frame. A code says where a person sits, never what their national title is — the titles stay national. The codes are the shared frame; national titles and insignia stay national.";

export const NATO_CAVEAT =
  "The complete APersP-01 text is distributed by the NATO Standardization Office; no public nato.int mirror of the full national annex tables was located, so the U.S. correspondence below follows APersP-01 Ed. A Ver. 3 as promulgated. Verify page-by-page against the NSO text before shipping — a pre-launch verification follow-up.";

export const NATO_LADDER: { code: string; range: string; who: string }[] = [
  {
    code: "OF",
    range: "OF-1 – OF-10",
    who: "Commissioned officers (officer / officier). OF-6 – OF-10 = general/flag officers; OF-3 – OF-5 = senior officers; OF-1 – OF-2 = junior officers.",
  },
  {
    code: "OR",
    range: "OR-1 – OR-9",
    who: "Enlisted and NCOs (other ranks). For NATO purposes OR-5 – OR-9 are Non-Commissioned Officers; OR-1 – OR-4 are the junior other ranks.",
  },
  {
    code: "WO",
    range: "WO-1 – WO-4 / W-1 – W-5",
    who: "Warrant-officer codes exist in the standard only for the United States, the one ally running a separate warrant corps. Other nations' warrant officers are coded as OR (a British Army WO1 is OR-9).",
  },
  {
    code: "OF(D)",
    range: "—",
    who: "Officer-designated / student officer — cadets and candidates not yet commissioned.",
  },
];

export const NATO_OF10_NOTE =
  "OF-10 is a national title, not a working NATO grade: most allied forces — including the United States — have no serving OF-10 rank. Where it survives it is honorary or wartime-only (e.g. British Field Marshal; French Maréchal de France — a dignity, not a grade; see the France profile).";

/** U.S. correspondence (APersP-01, U.S. annex pattern): find the
 * partner's code in a country profile, read across to the U.S. grade. */
export const NATO_US_TABLE: { code: string; grade: string; titles: string }[] = [
  { code: "OF-10", grade: "Special grade", titles: "General of the Army / Fleet Admiral — historical only, not currently held" },
  { code: "OF-9", grade: "O-10", titles: "General / Admiral" },
  { code: "OF-8", grade: "O-9", titles: "Lieutenant General / Vice Admiral" },
  { code: "OF-7", grade: "O-8", titles: "Major General / Rear Admiral" },
  { code: "OF-6", grade: "O-7", titles: "Brigadier General / Rear Admiral (lower half)" },
  { code: "OF-5", grade: "O-6", titles: "Colonel / Captain (Navy)" },
  { code: "OF-4", grade: "O-5", titles: "Lieutenant Colonel / Commander" },
  { code: "OF-3", grade: "O-4", titles: "Major / Lieutenant Commander" },
  { code: "OF-2", grade: "O-3", titles: "Captain / Lieutenant (Navy)" },
  { code: "OF-1", grade: "O-2 and O-1", titles: "First Lieutenant / Lieutenant j.g. (O-2) and Second Lieutenant / Ensign (O-1) — the U.S. is the exception that puts two grades in one NATO code" },
  { code: "OR-9", grade: "E-9", titles: "Sergeant Major / Master Gunnery Sergeant / Master Chief" },
  { code: "OR-8", grade: "E-8", titles: "First Sergeant / Master Sergeant / Senior Chief" },
  { code: "OR-7", grade: "E-7", titles: "Gunnery Sergeant / Chief Petty Officer" },
  { code: "OR-6", grade: "E-6", titles: "Staff Sergeant / Petty Officer First Class" },
  { code: "OR-5", grade: "E-5", titles: "Sergeant / Petty Officer Second Class" },
  { code: "OR-4", grade: "E-4", titles: "Corporal / Petty Officer Third Class" },
  { code: "OR-3", grade: "E-3", titles: "Lance Corporal / Seaman" },
  { code: "OR-2", grade: "E-2", titles: "Private First Class / Seaman Apprentice" },
  { code: "OR-1", grade: "E-1", titles: "Private / Seaman Recruit" },
];

export const NATO_CAUTIONS: { title: string; body: string }[] = [
  {
    title: "The officer offset",
    body: "Because O-1 and O-2 share OF-1, every U.S. officer grade above O-1 sits one number higher than its NATO code (a U.S. Major is O-4 but OF-3). The enlisted scale has no offset (OR-x = E-x).",
  },
  {
    title: "Who counts as an NCO differs",
    body: "NATO counts OR-5 – OR-9 as NCOs, but nationally the line moves: the U.S. Marine Corps and U.S. Navy treat OR-4 as NCOs, the U.S. Army and Air Force start at OR-5, and Britain's junior NCOs (corporals) sit at OR-3/OR-4. The code tells you seniority, not the partner's internal NCO line — the country profiles note each force's own grouping where its official pages state one.",
  },
];

/* --------------------- Part 3 — Courtesy & protocol ---------------------- */

export const PROTOCOL_INTRO =
  "Official-summary level only, from U.S. official publications. The rule running through all of it: partner officers get the same courtesies as U.S. officers of equivalent grade — which is exactly what the NATO code table above is for.";

export const PROTOCOL_ENTRIES: { title: string; body: string; flag?: string; links: RefLink[] }[] = [
  {
    title: "Saluting partner officers",
    body: "AR 600-25, Salutes, Honors, and Courtesy (Headquarters, Department of the Army), ¶2-1: “It is customary to salute officers of friendly foreign nations when recognized as such.” The same paragraph delegates to the U.S. Army's overseas commanders (Europe, Eighth Army, Pacific, Southern Command) authority to set local recognition-courtesy policy for foreign officials — so local theater policy can add detail and wins where it exists. The Army Recruiting Command's official customs-and-courtesies text (drawing on FM 7-21.13) puts the recognition point plainly: salute “all Officers of the Armed Forces… and Officers of allied nations when you recognize their rank” — the practical reason this whole section exists is that recognition is the trigger.",
    links: [
      { label: "AR 600-25 (Army Publishing Directorate PDF)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN44891-AR_600-25-000-WEB-1.pdf" },
      { label: "USAREC — Initial Soldier Customs and Courtesies (PDF)", url: "https://recruiting.army.mil/Portals/15/Future-Soldier/Initial Soldier Customs and Courtesies.pdf" },
    ],
  },
  {
    title: "Their anthem and colors get U.S.-level respect",
    body: "The same USAREC text: “The above marks of respect are shown the national anthem of any friendly country when it is played at official occasions,” and AR 600-25 carries a dedicated provision on foreign national anthems (§2-5). DoD's The Armed Forces Officer (DA Pam 600-2) states the general rule: “During service abroad, an American officer will salute the commissioned officers and pay respects to the anthems and colors of friendly nations just as to those of his own country.”",
    links: [
      { label: "AR 600-25 (Army Publishing Directorate PDF)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN44891-AR_600-25-000-WEB-1.pdf" },
    ],
  },
  {
    title: "Honors scale with equivalent grade",
    body: "Formal honors (gun salutes, ruffles and flourishes, side parties aboard ship) are prescribed by grade in AR 600-25's honors tables and the naval honors publications — foreign officials receive them by their rank or its U.S. equivalent, and foreign officials holding positions equivalent to DoD officials receive their counterparts' honors.",
    flag: "Summary level only: this app points to the regulation's tables and never improvises a gun count.",
    links: [
      { label: "AR 600-25 (Army Publishing Directorate PDF)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN44891-AR_600-25-000-WEB-1.pdf" },
    ],
  },
  {
    title: "Addressing partner ranks",
    body: "Use the partner's own rank title plus surname — not the U.S. equivalent title: a German Oberst is addressed as “Oberst,” with the NATO code (OF-5) telling you he sits where a U.S. Colonel sits. The salute itself is accompanied by the verbal greeting (“Sir/Ma'am” in U.S. practice) in the services' published courtesies. Where a partner service publishes its own address convention, follow theirs — the one fully documented set in this pack is the French Navy's (official ministry guide): all flag officers are addressed as “amiral”; capitaine de vaisseau / frégate / corvette as “commandant”; lieutenant de vaisseau as “capitaine”; enseigne de vaisseau as “lieutenant.” When you don't know a partner's convention or can't read the insignia, AR 600-25's delegation note is the fallback: follow the host/local command's published courtesy policy.",
    links: [],
  },
];

/* --------------------------- Country profiles ---------------------------- */

/** A drawn insignia rendition. Drawn ONLY where the pack's official
 * text description is sufficient to spec the drawing — each figure is
 * captioned as a stylized rendition from that country's official
 * description. Countries whose official sources are image-only carry
 * no art at all. */
export type PartnerArt =
  | { kind: "stars"; count: number; caption: string }
  | { kind: "canadaGeneral"; leaves: number; caption: string }
  | { kind: "canadaOfficer"; stars: number; crown: boolean; caption: string }
  | { kind: "norwayStudent"; badge: "L" | "lion" | "anchor"; caption: string };

export type InsigniaSpec = { spec: string; display?: string };

export type PartnerTable = {
  title: string;
  columns: string[];
  rows: string[][];
  note?: string;
  /** Wider first column (long classification labels, e.g. Canada). */
  wideFirst?: boolean;
};

export type PartnerCountry = {
  id: string;
  name: string;
  /** Badge label over the profile — the pack's documented level. */
  status: string;
  /** True for the pack's gap-flagged profiles (amber treatment). */
  gap: boolean;
  /** Force and service names exactly as the country's own site states them. */
  force: string;
  forceFlag?: string;
  /** How the rank material below is sourced, in the pack's words. */
  rankIntro: string;
  tables: PartnerTable[];
  rankNotes: string[];
  rankFlags: string[];
  /** The GAP statement for profile-only countries, printed as found. */
  gapText?: string;
  /** "specs" = official text describes the insignia (SPEC lines print,
   * art drawn where the text specs a device); "none" = image-only or
   * absent in official English text — the reason line prints instead. */
  insigniaKind: "specs" | "none";
  insigniaReason?: string;
  insigniaSpecs: InsigniaSpec[];
  insigniaNotes: string[];
  art: PartnerArt[];
  working: string;
  workingFlag?: string;
  links: RefLink[];
  source: string;
};

export const PARTNER_COUNTRIES: PartnerCountry[] = [
  {
    id: "germany",
    name: "Germany",
    status: "COMPLETE — NATO CODES PUBLISHED",
    gap: false,
    force:
      "The armed forces' own English name is Bundeswehr (kept untranslated on its English site). Its organisation page (2025) states: “The four Services of the Bundeswehr are the Army, Air Force, Navy, and Cyber and Information Domain Service”, alongside the Bundeswehr Joint Support Command.",
    forceFlag:
      "The same site's A–Z pages still describe “three armed services” (Army/Air Force/Navy) with cyber and medical as joint organisational elements — flag, do not blend.",
    rankIntro:
      "NATO codes published by bundeswehr.de's own English career pages. Army and Air Force share designations; the Navy differs; the Medical Service has its own titles at the same codes. English renderings are the site's own.",
    tables: [
      {
        title: "Officers",
        columns: ["NATO code", "Army & Air Force", "Navy"],
        rows: [
          ["OF-9", "General", "Admiral"],
          ["OF-8", "Lieutenant General", "Vice Admiral"],
          ["OF-7", "Major General", "Rear Admiral (upper half)"],
          ["OF-6", "Brigadier General", "Rear Admiral (lower half)"],
          ["OF-5", "Colonel", "Captain"],
          ["OF-4", "Lieutenant Colonel", "Commander"],
          ["OF-3", "Major", "Commander, junior grade (Lieutenant Commander)"],
          ["OF-2", "Captain", "Lieutenant"],
          ["OF-2", "Captain, senior grade", "Lieutenant, senior grade"],
          ["OF-1", "First Lieutenant", "Lieutenant, junior grade"],
          ["OF-1", "Second Lieutenant", "Ensign"],
        ],
        note: "OF-10: none — OF-9 is the highest code on the official tables.",
      },
      {
        title: "Other ranks",
        columns: ["NATO code", "Army & Air Force", "Navy"],
        rows: [
          ["OR-9", "Sergeant Major (Oberstabsfeldwebel)", "Master Chief Petty Officer (Oberstabsbootsmann)"],
          ["OR-8", "Master Sergeant (Stabsfeldwebel)", "Senior Chief Petty Officer (Stabsbootsmann)"],
          ["OR-7", "Sergeant First Class (Hauptfeldwebel)", "Chief Petty Officer (Hauptbootsmann)"],
          ["OR-6", "Staff Sergeant (Feldwebel); senior grade at OR-6: Oberfeldwebel", "Petty Officer First Class (Bootsmann); senior grade: Oberbootsmann"],
          ["OR-5", "Sergeant (Unteroffizier; senior grade Stabsunteroffizier)", "Petty Officer Second Class (Maat; senior grade Obermaat)"],
          ["OR-4", "Corporal (Stabsgefreiter); senior grade at OR-4: Oberstabsgefreiter", "Petty Officer Third Class"],
          ["OR-3", "Private First Class (Obergefreiter); senior grade at OR-3: Hauptgefreiter", "Seaman"],
          ["OR-2", "Private E-2 (Gefreiter)", "Seaman Apprentice"],
          ["OR-1", "Private E-1 (entry rank; German titles are branch-specific, e.g. Schütze, Flieger)", "Seaman Recruit (Matrose)"],
        ],
      },
    ],
    rankNotes: [
      "Officer candidates appear inside the NCO tables: Fahnenjunker (OR-5), naval officer cadet Seekadett (OR-5), and junior/senior officer cadets at OF-D.",
    ],
    rankFlags: [
      "English renderings of the Feldwebel grades differ between paragraph text and tables on the same official pages, and one Army gallery caption codes the same sergeant grade OR-6 (service dress) and OR-5 (field dress) — printed here as the career pages table them; the conflict stands.",
    ],
    insigniaKind: "specs",
    insigniaReason:
      "Per-rank insignia boards are image-only: the official Army and Navy insignia gallery pages caption each image (rank + NATO code + dress type) but do not describe the device in text, so no per-rank boards are drawn. The text that does exist, from the official A–Z, is below.",
    insigniaSpecs: [
      {
        spec: "General/admiral grades are star grades — OF-6: 1 star; OF-7: 2 stars; OF-8: 3 stars; OF-9: 4 stars (stated for both “General” and “Admiral”).",
        display: "German flag ranks count their stars like we do — one through four.",
      },
      {
        spec: "Collar patch, Army/Air Force service dress only (the Navy does not wear one): two braided stripes — officers silver, senior NCOs gold, junior NCOs and nonrated grey; the Air Force patch carries a wing in an oak wreath on golden yellow; generals: gold embroidery on bright red.",
        display: "The collar patch's braid colour tells you the wearer's category before the shoulder does.",
      },
    ],
    insigniaNotes: [
      "Candidates: Army/Air Force officer candidates add silver braid to their rank insignia; naval officer candidates wear a gold star instead; senior-NCO candidates add dark-gold braid (Army/AF) or two horizontal parallel stripes (Navy).",
      "A First Sergeant (a function, not a rank) wears a gold braid on the right shoulder.",
    ],
    art: [
      { kind: "stars", count: 1, caption: "OF-6 — Brigadier General / Rear Admiral (lower half): 1 star" },
      { kind: "stars", count: 2, caption: "OF-7 — Major General / Rear Admiral (upper half): 2 stars" },
      { kind: "stars", count: 3, caption: "OF-8 — Lieutenant General / Vice Admiral: 3 stars" },
      { kind: "stars", count: 4, caption: "OF-9 — General / Admiral: 4 stars" },
    ],
    working:
      "The Chief of Defence is “the highest-ranking soldier… and military advisor to the Federal Government,” holding four-star general/admiral rank; joint operations are commanded by the Bundeswehr Joint Force Command.",
    workingFlag:
      "The English career pages are dated 2019–2020 and show no Korporal / Stabskorporal grades — a possible lag in the English pages, flagged, not supplemented.",
    links: [
      { label: "Bundeswehr — Organisation", url: "https://www.bundeswehr.de/en/organization" },
      { label: "Bundeswehr — Officer careers & ranks", url: "https://www.bundeswehr.de/en/about-bundeswehr/ranks-and-careers/officer-careers" },
      { label: "Bundeswehr — A–Z terms (insignia text)", url: "https://www.bundeswehr.de/en/about-bundeswehr/terms-bundeswehr" },
    ],
    source: "bundeswehr.de — the Bundeswehr's own English pages",
  },
  {
    id: "norway",
    name: "Norway",
    status: "COMPLETE — NATO CODES PUBLISHED",
    gap: false,
    force:
      "The Norwegian Armed Forces: the Norwegian Army, the Royal Norwegian Navy, the Royal Norwegian Air Force, the Norwegian Home Guard, plus joint bodies (Defence Logistics Organisation, Cyber Defence).",
    rankIntro:
      "Norway publishes its own NATO alignment on its official ranks page, stating officers “correspond to NATO's rank system (OF1–9)” and specialist officers to “NATO's other ranks system (OR2–9)”; OR-1 is used for soldiers in initial service. No OF-10, no OF(D).",
    tables: [
      {
        title: "Officers",
        columns: ["NATO code", "Army & Air Force", "Navy"],
        rows: [
          ["OF-9", "General", "Admiral"],
          ["OF-8", "Lieutenant General", "Vice Admiral"],
          ["OF-7", "Major General", "Rear Admiral"],
          ["OF-6", "Brigadier", "Commodore"],
          ["OF-5", "Colonel", "Captain"],
          ["OF-4", "Lieutenant Colonel", "Commander Senior Grade"],
          ["OF-3", "Major", "Commander"],
          ["OF-2", "Captain", "Lieutenant Commander"],
          ["OF-1", "Lieutenant", "Lieutenant"],
          ["OF-1", "Second Lieutenant", "Sub Lieutenant"],
        ],
      },
      {
        title: "Specialist officers / other ranks",
        columns: ["NATO code", "Army", "Navy", "Air Force"],
        rows: [
          ["OR-9", "Sergeant Major", "Master Chief Petty Officer", "Chief Master Sergeant"],
          ["OR-8", "Master Sergeant", "Senior Chief Petty Officer", "Senior Master Sergeant"],
          ["OR-7", "Sergeant 1st Class", "Chief Petty Officer", "Master Sergeant"],
          ["OR-6", "Staff Sergeant", "Senior Petty Officer", "Senior Sergeant"],
          ["OR-5+", "Senior Sergeant", "Petty Officer 1st Class", "Wing Sergeant"],
          ["OR-5", "Sergeant", "Petty Officer", "Sergeant"],
          ["OR-4", "Corporal", "Leading Seaman", "Specialist 1st Class"],
          ["OR-3", "Specialist 1st Class", "Able Seaman", "Specialist"],
          ["OR-2", "Specialist", "Seaman", "Junior Specialist"],
          ["OR-1+", "Private 1st Class", "Able Rating", "Airman"],
          ["OR-1", "Private", "Ordinary Rating", "Airman Basic"],
        ],
        note: "OR-5+ and OR-1+ are official intermediate grades on Norway's own page. “Command Sergeant Major” / “Command Master Chief Petty Officer” is a function outside the ordinary rank system, held by a unit's longest-serving specialist officer.",
      },
    ],
    rankNotes: [],
    rankFlags: [],
    insigniaKind: "specs",
    insigniaReason:
      "The two ladders' insignia are shown in images only on the ranks page (“each has its own system of ranks and insignia” — no per-rank text), so the ladders themselves are not drawn. Text is published for students, same page — those are drawn below.",
    insigniaSpecs: [
      { spec: "Apprentice — a stylised letter “L”, with 1 star below in year 1, 2 in year 2, 3 in year 3." },
      {
        spec: "Officer Cadet — Army/Air Force: the Norwegian golden lion; Navy: the anchor; 1–3 stars below by year, as above.",
        display: "A Norwegian student's year is written under their badge — count the stars.",
      },
    ],
    insigniaNotes: [],
    art: [
      { kind: "norwayStudent", badge: "L", caption: "Apprentice — stylised “L” with stars below by year (3rd year shown: 3 stars; 1 in year 1, 2 in year 2)" },
      { kind: "norwayStudent", badge: "lion", caption: "Officer Cadet, Army/Air Force — the Norwegian golden lion, stars below by year" },
      { kind: "norwayStudent", badge: "anchor", caption: "Officer Cadet, Navy — the anchor, stars below by year" },
    ],
    working:
      "Top title: Chief of Defence (forsvarssjef). Joint HQ as the site states it: the Norwegian Joint Headquarters (NJHQ) — “All of our activities are coordinated by the Norwegian Joint Headquarters.”",
    links: [
      { label: "Norwegian Armed Forces — Organisation chart", url: "https://www.forsvaret.no/en/organisation/organisation-chart" },
      { label: "Norwegian Armed Forces — Ranks", url: "https://www.forsvaret.no/en/about-us/uniforms-ranks-and-medals/ranks/" },
    ],
    source: "forsvaret.no — the Norwegian Armed Forces' own English pages",
  },
];

PARTNER_COUNTRIES.push(
  {
    id: "canada",
    name: "Canada",
    status: "COMPLETE — CODE-FREE (CANADA PUBLISHES NO NATO CODES)",
    gap: false,
    force:
      "Canadian Armed Forces (CAF). The official rank page groups Royal Canadian Navy; Canadian Army; Royal Canadian Air Force; Canadian Special Operations Forces Command (CANSOFCOM).",
    forceFlag:
      "That same page's introduction still says “Canadian Forces” — both forms are official; the main page's forms are printed here.",
    rankIntro:
      "The full official table, exactly as published, WITHOUT NATO codes. The current canada.ca rank page and the Dress Instructions publish ranks with classifications and abbreviations but no NATO OF/OR column, and no official Canadian NATO-code alignment was found on canada.ca — so none is attached. The table's own row order is Canada's cross-service alignment and must not be relabelled as NATO coding. Never attach NATO codes to Canadian ranks.",
    tables: [
      {
        title: "Ranks — as Canada publishes them (no code column, by Canada's own design)",
        wideFirst: true,
        columns: ["Canada.ca classification", "Royal Canadian Navy", "Army / RCAF / CANSOFCOM"],
        rows: [
          ["General/Flag Officers", "Admiral (Adm)", "General (Gen)"],
          ["General/Flag Officers", "Vice-Admiral (VAdm)", "Lieutenant-General (LGen)"],
          ["General/Flag Officers", "Rear-Admiral (RAdm)", "Major-General (MGen)"],
          ["General/Flag Officers", "Commodore (Cmdre)", "Brigadier-General (BGen)"],
          ["Senior Officers", "Captain(N) (Capt(N))", "Colonel (Col)"],
          ["Senior Officers", "Commander (Cdr)", "Lieutenant-Colonel (LCol)"],
          ["Senior Officers", "Lieutenant-Commander (LCdr)", "Major (Maj)"],
          ["Junior Officers", "Lieutenant(N) (Lt(N))", "Captain (Capt)"],
          ["Junior Officers", "Sub-Lieutenant (SLt)", "Lieutenant (Lt)"],
          ["Junior Officers", "Acting Sub-Lieutenant (A/SLt)", "Second Lieutenant (2Lt)"],
          ["Subordinate Officer", "Naval Cadet (NCdt)", "Officer Cadet (OCdt)"],
          ["Warrant Officers, Petty Officers & Senior NCOs", "Chief Petty Officer 1st class (CPO 1)", "Chief Warrant Officer (CWO)"],
          ["Warrant Officers, Petty Officers & Senior NCOs", "Chief Petty Officer 2nd class (CPO 2)", "Master Warrant Officer (MWO)"],
          ["Warrant Officers, Petty Officers & Senior NCOs", "Petty Officer 1st class (PO 1)", "Warrant Officer (WO)"],
          ["Warrant Officers, Petty Officers & Senior NCOs", "Petty Officer 2nd class (PO 2)", "Sergeant (Sgt)"],
          ["Junior NCMs", "Master Sailor (MS)", "Master Corporal (MCpl)"],
          ["Junior NCMs", "Sailor 1st Class", "Corporal (Cpl)"],
          ["Junior NCMs", "Able Sailor (AB)", "Private (Trained) (Pte (T)) / Aviator (Trained) (Avr (T))"],
          ["Junior NCMs", "Ordinary Sailor (OS)", "Private (Basic) (Pte (B)) / Aviator (Basic) (Avr (B))"],
        ],
      },
    ],
    rankNotes: [],
    rankFlags: [
      "The junior Navy names are in motion across official pages themselves: the main page says Master Sailor / Sailor 1st Class / Able Sailor / Ordinary Sailor; the RCN sub-page still labels badges “Seaman” and notes the gender-neutral rename to Sailor 1st/2nd/3rd Class “will be reflected upon amendment of QR&O 3.01”; QR&O 3.01 still uses the Seaman forms. All three are official; the main page's forms are printed here and the transition is flagged — never blended.",
    ],
    insigniaKind: "specs",
    insigniaSpecs: [
      {
        spec: "Army generals: shoulder strap — a scimitar amid St Edward's Crown at the top, maple leaves at the bottom, one more leaf per rank up to four for General; general officers and colonels wear scarlet gorget patches (gold embroidery; colonels' is ruby).",
        display: "Count a Canadian general's maple leaves — one to four, under a crown.",
      },
      {
        spec: "Army senior officers (Col/LCol/Maj): shoulder strap with crown and military stars beneath, one added per rank (star 2.3 cm, crown 2.5 cm with red felt backing).",
      },
      {
        spec: "Army junior officers (Capt/Lt/2Lt): military stars only, one to three by rank; Officer Cadet = the 2Lt strap with its single star set in a white band.",
        display: "Canadian Army officers count in pips-and-crown like the British system — stars first, crown joins at Major.",
      },
      {
        spec: "Navy officers: rank lace is gold, straight rows, surmounted by a circle (the executive curl) — widths 4.5 / 1.5 / 0.6 cm; curl 5 cm across for Rear-Admiral and above, 4.5 cm otherwise.",
      },
      {
        spec: "Air Force officers: rank braid is pearl-grey with black edging (broad 5 cm / standard 1.5 cm / narrow 0.6 cm); general officers add shoulder-strap insignia.",
      },
    ],
    insigniaNotes: [
      "Per-rank Navy lace-row counts and Air Force braid counts are shown only in figures in the Dress Instructions — image-only for exact counts, so the sleeve systems are described, not drawn.",
      "NCM chevron counts are illustrated (figures) but not stated in text. Annex A does state placement in text — e.g. the top of the uppermost chevron's “V” sits 18 cm below the shoulder seam (male) / 15 cm (female) on service dress jackets.",
    ],
    art: [
      { kind: "canadaGeneral", leaves: 1, caption: "Brigadier-General — 1 maple leaf under St Edward's Crown" },
      { kind: "canadaGeneral", leaves: 2, caption: "Major-General — 2 maple leaves" },
      { kind: "canadaGeneral", leaves: 3, caption: "Lieutenant-General — 3 maple leaves" },
      { kind: "canadaGeneral", leaves: 4, caption: "General — 4 maple leaves" },
      { kind: "canadaOfficer", stars: 1, crown: true, caption: "Major — crown with 1 military star beneath" },
      { kind: "canadaOfficer", stars: 2, crown: true, caption: "Lieutenant-Colonel — crown with 2 military stars" },
      { kind: "canadaOfficer", stars: 3, crown: true, caption: "Colonel — crown with 3 military stars" },
      { kind: "canadaOfficer", stars: 1, crown: false, caption: "Second Lieutenant — 1 military star, no crown" },
      { kind: "canadaOfficer", stars: 2, crown: false, caption: "Lieutenant — 2 military stars" },
      { kind: "canadaOfficer", stars: 3, crown: false, caption: "Captain — 3 military stars" },
    ],
    working:
      "Senior title: Chief of the Defence Staff (CDS). The RCAF motto as quoted on canada.ca: “Sic Itur Ad Astra” — “Such is the pathway to the stars.” The CAF ethos document is titled Trusted to Serve.",
    links: [
      { label: "Canada.ca — CAF rank, appointment and insignia", url: "https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html" },
    ],
    source: "canada.ca — Canadian Armed Forces / Canadian Forces Dress Instructions, Ch. 3",
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    status: "RANK NAMES COMPLETE — NO CODES PUBLISHED, INSIGNIA IMAGE-ONLY",
    gap: false,
    force:
      "GOV.UK (MOD): “The British Armed Forces are made up of the Royal Navy, British Army and Royal Air Force.” “UK Armed Forces” is also official usage (MOD statistics) — both forms stand. The Royal Marines have no separate rank table on the official pages searched — a gap, not filled.",
    rankIntro:
      "Official order, from the three services' own rank pages. None of the three service rank pages prints NATO codes, so no alignment is attached.",
    tables: [
      {
        title: "British Army — officers",
        columns: ["Rank", "Note"],
        rows: [
          ["Field Marshal", "Honorary — last active promotion 1994"],
          ["General", ""],
          ["Lieutenant General", ""],
          ["Major General", ""],
          ["Brigadier", "The Army itself notes this is not a general-officer rank in British service but a field-officer rank"],
          ["Colonel", ""],
          ["Lieutenant Colonel", ""],
          ["Major", ""],
          ["Captain", ""],
          ["Lieutenant", ""],
          ["Second Lieutenant", ""],
          ["Officer Cadet", ""],
        ],
      },
      {
        title: "British Army — soldiers",
        columns: ["Rank", "Note"],
        rows: [
          ["Warrant Officer Class One (WO1)", "Most senior soldier rank"],
          ["Warrant Officer Class Two", ""],
          ["Staff Sergeant", "Infantry: Colour Sergeant"],
          ["Sergeant", ""],
          ["Corporal", ""],
          ["Lance Corporal", ""],
          ["Private", "Title varies by corps: Trooper, Gunner, Signaller, Sapper, Guardsman, Rifleman, Kingsman"],
        ],
      },
      {
        title: "Royal Navy — ratings (order as the careers page lists them)",
        columns: ["Rank", "Note"],
        rows: [
          ["Able Rate", ""],
          ["Leading Hand", "See the flag below — the RN pay page says “Leading Rating” for the same step"],
          ["Petty Officer", ""],
          ["Chief Petty Officer", ""],
          ["Warrant Officer 2", ""],
          ["Warrant Officer 1", "Highest rating rank"],
        ],
      },
      {
        title: "Royal Navy — officers",
        columns: ["Rank", "Note"],
        rows: [
          ["Midshipman", ""],
          ["Sub-Lieutenant", "Not headed on the careers page — see the flag below; it appears on the RN pay page"],
          ["Lieutenant", ""],
          ["Lieutenant Commander", ""],
          ["Commander", ""],
          ["Captain", ""],
          ["Commodore", ""],
          ["Rear Admiral", ""],
          ["Vice Admiral", ""],
          ["Admiral", "“The highest rank in the Royal Navy, equivalent to a General in the British Army”"],
        ],
      },
      {
        title: "Royal Air Force — commissioned",
        columns: ["Rank", "Note"],
        rows: [
          ["Pilot Officer", ""],
          ["Flying Officer", ""],
          ["Flight Lieutenant", ""],
          ["Squadron Leader", ""],
          ["Wing Commander", ""],
          ["Group Captain", ""],
          ["Air Commodore", ""],
          ["Air Vice-Marshal", ""],
          ["Air Marshal", ""],
          ["Air Chief Marshal", ""],
          ["Marshal of the Royal Air Force", ""],
        ],
      },
      {
        title: "Royal Air Force — other ranks",
        columns: ["Rank", "Note"],
        rows: [
          ["Air Specialist (Class 2)", ""],
          ["Air Specialist (Class 1)", ""],
          ["Air Specialist (Class 1) Technician", ""],
          ["Lance Corporal RAF Regiment", ""],
          ["Corporal", ""],
          ["Sergeant", ""],
          ["Chief Technician", ""],
          ["Flight Sergeant", ""],
          ["Warrant Officer", ""],
          ["Sergeant Aircrew", "Non-Commissioned Aircrew"],
          ["Flight Sergeant Aircrew", "Non-Commissioned Aircrew"],
          ["Master Aircrew", "Non-Commissioned Aircrew"],
        ],
      },
    ],
    rankNotes: [],
    rankFlags: [
      "Sub-Lieutenant is missing from the RN careers page's headings but appears on the RN pay page (“First promotion – Sub-Lieutenant”) — printed here with the conflict flagged. “Leading Hand” (career page) vs “Leading Rating” (pay page) names the same step on one site.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "Insignia are IMAGE-ONLY on all three official pages: the pages show each rank's insignia as a picture and give no text description of pips, crowns, chevrons, lace or curls. British insignia cannot be drawn from official text — pip-and-crown counts are not reconstructed from general knowledge, so this profile ships tables and descriptions only, no drawings.",
    insigniaSpecs: [],
    insigniaNotes: [
      "The only official text is placement (RAF): commissioned insignia on the lower sleeve of dress uniform; NCO insignia on the upper sleeve, Warrant Officer and Master Aircrew on the lower.",
    ],
    art: [],
    working:
      "A British General may hold the joint post Chief of Defence Staff. Per the RAF's own page, in joint seniority “the Royal Navy [has] seniority over both the Army and RAF.”",
    links: [
      { label: "British Army — Ranks", url: "https://www.army.mod.uk/who-we-are/our-people/ranks/" },
      { label: "Royal Navy — Shaping your career", url: "https://www.royalnavy.mod.uk/careers/life-in-the-navy/shaping-your-career" },
      { label: "Royal Air Force — RAF ranks", url: "https://www.raf.mod.uk/our-organisation/raf-ranks/" },
      { label: "GOV.UK — UK Armed Forces (MOD)", url: "https://www.gov.uk/government/publications/international-humanitarian-law-and-the-uk-government/uk-and-international-humanitarian-law-2018" },
    ],
    source: "army.mod.uk / royalnavy.mod.uk / raf.mod.uk — the services' own rank pages",
  },
  {
    id: "denmark",
    name: "Denmark",
    status: "OFFICIAL POSTERS — OR PAIRINGS NEED IMAGE VERIFICATION",
    gap: false,
    force:
      "Danish Armed Forces / Danish Defence (both official). Defence Command levels as the organisation page lists them: The Army, The Royal Danish Navy, The Royal Danish Airforce [sic — spelled “Airforce” there], Joint Arctic Command, Special Operations Command, Operational Support Command.",
    forceFlag:
      "The rank posters are titled for the Royal Danish Army / Royal Danish Air Force — a naming conflict across official pages, flagged, not blended. The poster index lists 2026 while the Army poster document is dated September 2025 — a version conflict on the official site itself.",
    rankIntro:
      "From the official English “Badges and Insignia” posters linked from the Insignia page. Army officer codes extract cleanly; the other-rank blocks interleave adjacent columns in the poster's text layer, so every OR pairing must be verified against the poster image before it is relied on — the flags below say exactly where.",
    tables: [
      {
        title: "Royal Danish Army — officers",
        columns: ["NATO code", "Rank"],
        rows: [
          ["OF-9", "General"],
          ["OF-8", "Lieutenant General"],
          ["OF-7", "Major General"],
          ["OF-6", "Brigadier"],
          ["OF-5", "Colonel"],
          ["OF-4", "Lieutenant Colonel"],
          ["OF-3", "Major"],
          ["OF-2", "Captain"],
          ["OF-1", "First Lieutenant"],
          ["OF-1", "Second Lieutenant"],
        ],
        note: "No OF-10 shown.",
      },
      {
        title: "Royal Danish Army — warrant officers, NCOs and enlisted (as printed)",
        columns: ["NATO code (as printed)", "Rank"],
        rows: [
          ["OR-9", "Warrant Officer Class I"],
          ["OR-8", "Warrant Officer Class II"],
          ["OR-5", "First Sergeant"],
          ["OR-5", "Sergeant"],
          ["OR-4", "Corporal"],
          ["OR-3 / OR-2 / OR-1", "Conscript grades (variants by code)"],
        ],
        note: "No OR-6 shown on the poster.",
      },
      {
        title: "Royal Danish Navy — officers (printed order)",
        columns: ["NATO code", "Rank"],
        rows: [
          ["OF-9", "Admiral"],
          ["OF-8", "Vice Admiral"],
          ["OF-7", "Rear Admiral"],
          ["OF-6", "Commodore"],
          ["OF-5", "Captain"],
          ["OF-4", "Commander, Senior Grade"],
          ["OF-3", "Commander"],
          ["—", "Lieutenant Commander"],
          ["—", "Lieutenant"],
          ["—", "Sub Lieutenant"],
        ],
        note: "Petty-officer and rating blocks carry OR-9 / OR-8 / OR-7 / OR-5 printings (no OR-6), pending the same image verification.",
      },
      {
        title: "Royal Danish Air Force — officers",
        columns: ["NATO code", "Rank"],
        rows: [
          ["OF-9", "General"],
          ["OF-8", "Lieutenant General"],
          ["OF-7", "Major General"],
          ["OF-6", "Brigadier"],
          ["OF-5", "Colonel"],
          ["OF-4", "Lieutenant Colonel"],
          ["—", "Major"],
          ["—", "Captain"],
        ],
        note: "NCO/enlisted blocks print OR-9 / OR-8 / OR-7 / OR-5 and Corporal (OR-4) down to Aircraftman (OR-1), under the same verification caveat.",
      },
    ],
    rankNotes: [],
    rankFlags: [
      "The Army poster's text layer interleaves adjacent columns in the warrant/NCO and enlisted blocks — every OR pairing must be verified against the poster image before the build (or the reader) uses it.",
      "Navy officer pairings below Commander are interleaved in the text layer — verify against the image. The Air Force poster's code row does not cleanly label Major and Captain, so no code is asserted for Danish Major/Captain from this poster alone.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "The insignia posters are image posters: no textual description of star/stripe/chevron counts per rank exists in the official English text, so no Danish insignia are drawn.",
    insigniaSpecs: [],
    insigniaNotes: [
      "The one insignia fact stated in text on all three posters, under SERVICE STRIPES: “Each stripe represents 3 years of service.” (The stripe's device shape is not described in text, so it is stated, not drawn.)",
    ],
    art: [],
    working:
      "“The Commander of the Defence Command bears the title Chief of Defence”; the Defence Command “is Denmark's overall military command authority.”",
    links: [
      { label: "Danish Defence — Organisation", url: "https://www.forsvaret.dk/en/about-us/organisation/" },
      { label: "Danish Defence — Insignia (rank posters)", url: "https://www.forsvaret.dk/en/about-us/insignia/" },
    ],
    source: "forsvaret.dk — Danish Defence's official English insignia posters",
  },
  {
    id: "france",
    name: "France",
    status: "⚠ OFFICIAL SOURCES ARE FRENCH-LANGUAGE ONLY — NO CODES",
    gap: false,
    force:
      "The ministry's English publications use “the French armed forces”, with services named Army, Navy (Marine nationale), and Air and Space Force (renamed from “Air Force” — older English documents still say Air Force; a dated rename, not two services). The National Gendarmerie appears in the ministry's workforce tables.",
    rankIntro:
      "⚠ NO official English rank table exists, and NO official NATO-code alignment was found. The only dedicated official rank page is the Army's, in French. The tables below therefore give official French forms in official order, sourced from that page and from official ministry documents that pair Army/Navy grades — they are NOT an official English rendering, and no codes are attached.",
    tables: [
      {
        title: "Armée de Terre (Army) — official French forms, official order",
        columns: ["Group", "Grades"],
        rows: [
          ["Officiers généraux", "général de brigade · général de division · général de corps d'armée · général d'armée"],
          ["Officiers", "colonel · lieutenant-colonel · commandant · capitaine · lieutenant · sous-lieutenant · aspirant"],
          ["Sous-officiers", "major · adjudant-chef · adjudant · sergent-chef / maréchal des logis-chef · sergent / maréchal des logis"],
          ["Militaires du rang", "caporal-chef / brigadier-chef · caporal / brigadier · soldat"],
        ],
        note: "Maréchal de France is expressly “not a grade, but a dignity.” Caporal-chef de 1re classe and soldat de 1re classe are expressly distinctions, not grades.",
      },
      {
        title: "Marine nationale (Navy) — paired equivalents from official ministry documents",
        columns: ["Marine nationale", "= Armée de Terre equivalent"],
        rows: [
          ["enseigne de vaisseau de 2e classe", "sous-lieutenant"],
          ["enseigne de vaisseau de 1re classe", "lieutenant"],
          ["lieutenant de vaisseau", "capitaine"],
          ["capitaine de corvette", "commandant"],
          ["capitaine de frégate", "lieutenant-colonel"],
          ["capitaine de vaisseau", "colonel"],
          ["contre-amiral", "général de brigade"],
          ["vice-amiral", "général de division"],
          ["vice-amiral d'escadre", "above vice-amiral (no paired equivalent printed)"],
          ["amiral", "above vice-amiral d'escadre (no paired equivalent printed)"],
        ],
      },
      {
        title: "Marine nationale — officiers mariniers & équipages",
        columns: ["Group", "Grades"],
        rows: [
          ["Officiers mariniers", "second maître · maître · premier maître · maître principal · major"],
          ["Équipages", "matelot · quartier-maître de 2e classe · quartier-maître de 1re classe"],
        ],
      },
    ],
    rankNotes: [
      "Armée de l'Air et de l'Espace (Air and Space Force): no dedicated official grades page was found; the ministry's grade grille covers the service using the paired list above without publishing distinct Air-specific titles. Not filled from non-official sources.",
    ],
    rankFlags: [
      "France's rank and insignia material is official but French-language — no official English rank page exists. It is preserved flagged, not presented as an official English rendering, and no NATO codes are asserted for France.",
    ],
    insigniaKind: "specs",
    insigniaSpecs: [
      {
        spec: "Generals wear stars on sleeves and képi — général de brigade: 2 stars; général de corps d'armée: 4 stars; général d'armée: 5 stars.",
        display: "A French general's sleeve stars start at two, not one.",
      },
    ],
    insigniaNotes: [
      "Rank is worn as galons (braid) on the chest or on epaulettes. Officers' and NCOs' braid is gold or silver by arm: gold — infantry, artillery, engineers, troupes de marine, signals; silver — cavalry, train, matériel (exception: chasseurs à pied wear silver although infantry). Piping colour also codes the arm (blue = signals, red = infantry, green = cavalry).",
      "⚠ The Army page states no star count in text for général de division — three is NOT assumed, and no drawing is made for it.",
      "Maréchal de France carries a blue velvet baton strewn with stars, inscribed “Terror belli, decus pacis.”",
      "Navy insignia forms (schools booklet, French): sleeve stripes, shoulder boards, cap braid — no per-rank text breakdown.",
    ],
    art: [
      { kind: "stars", count: 2, caption: "général de brigade — 2 stars (sleeves and képi)" },
      { kind: "stars", count: 4, caption: "général de corps d'armée — 4 stars" },
      { kind: "stars", count: 5, caption: "général d'armée — 5 stars" },
    ],
    working:
      "The joint chief's title in the ministry's official English publication is “Chief of Defense Staff” [sic — U.S. spelling in that document]. French naval address forms (ministry commemorations guide, French): flag officers are all addressed as “amiral”; capitaine de vaisseau / frégate / corvette as “commandant”; lieutenant de vaisseau as “capitaine”; enseigne de vaisseau as “lieutenant” — see also Courtesy & Protocol on the Partner Forces home page.",
    links: [
      { label: "Ministère des Armées — French armed forces (English)", url: "https://www.defense.gouv.fr/en/grands-evenements-sportifs-internationaux/french-armed-forces-contribution-security-2024-olympic-games" },
      { label: "Armée de Terre — Les grades (French)", url: "http://www.defense.gouv.fr/terre/grades-larmee-terre" },
    ],
    source: "defense.gouv.fr — French Ministry of the Armed Forces (rank page in French)",
  },
);

PARTNER_COUNTRIES.push(
  {
    id: "australia",
    name: "Australia",
    status: "COMPLETE — ADF'S OWN EQUIVALENCY CODES (NOT NATO CODES)",
    gap: false,
    force:
      "Australian Defence Force (ADF) — “as well as the services: Australian Army, Royal Australian Air Force, Royal Australian Navy,” commanded by the Chief of the Defence Force (CDF).",
    rankIntro:
      "From the ADF Pay and Conditions Manual (PACMAN), §1.3.40 “Equivalent ranks and classifications.” The codes are labelled simply “Rank equivalency” on that page — they are ADF's own O-/E- codes, not labelled NATO codes or U.S. grades, and are reproduced as ADF codes only. (They track the U.S. numbers for officers with the familiar one-step shift against NATO OF codes — the Part 1 offset warning applies if you ever cross-walk them.)",
    tables: [
      {
        title: "ADF equivalent ranks (PACMAN §1.3.40)",
        columns: ["ADF code", "Royal Australian Navy", "Australian Army", "Royal Australian Air Force"],
        rows: [
          ["(five-star, no code)", "Admiral of the Fleet", "Field Marshal", "Marshal of the RAAF"],
          ["O-10", "Admiral", "General", "Air Chief Marshal"],
          ["O-9", "Vice Admiral", "Lieutenant General", "Air Marshal"],
          ["O-8", "Rear Admiral", "Major General", "Air Vice-Marshal"],
          ["O-7", "Commodore", "Brigadier", "Air Commodore"],
          ["O-6", "Captain", "Colonel", "Group Captain"],
          ["O-5", "Commander", "Lieutenant Colonel", "Wing Commander"],
          ["O-4", "Lieutenant Commander", "Major", "Squadron Leader"],
          ["O-3", "Lieutenant", "Captain", "Flight Lieutenant"],
          ["O-2", "Sub-Lieutenant", "Lieutenant", "Flying Officer"],
          ["O-1", "Acting Sub-Lieutenant", "Second Lieutenant", "Pilot Officer"],
          ["(no code)", "Midshipman", "Officer Cadet", "Officer Cadet"],
          ["E-10", "Warrant Officer of the Navy", "Regimental Sergeant Major of the Army", "Warrant Officer of the Air Force"],
          ["E-09", "Warrant Officer", "Warrant Officer Class 1", "Warrant Officer"],
          ["E-08", "Chief Petty Officer", "Warrant Officer Class 2", "Flight Sergeant"],
          ["E-07", "— (none shown)", "Staff Sergeant", "— (none shown)"],
          ["E-06", "Petty Officer", "Sergeant", "Sergeant"],
          ["E-05", "Leading Seaman", "Corporal", "Corporal"],
          ["E-04", "—", "Lance Corporal", "—"],
          ["E-03", "Able Seaman", "Private Proficient*", "Leading Aircraftman"],
          ["E-02", "Seaman", "Private", "Aircraftman"],
        ],
        note: "*PACMAN footnote: “Private Proficient is defined in section 1.3.1.” No E-01 / Recruit row is published in this table. Corps variants (Bombardier for Corporal in artillery, etc.) appear in Defence's Military Skill Recognition page, grouped by the same equivalencies.",
      },
    ],
    rankNotes: [],
    rankFlags: [],
    insigniaKind: "none",
    insigniaReason:
      "Insignia are IMAGE-ONLY on the official pages consulted: PACMAN gives names and codes only, and Defence's training-centre rank materials present insignia as images (annotating the Army's Private as “No Insignia”). No chevron/pip/crown drawing can be written for Australia from official English text located — so none is drawn.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "Top appointment: Chief of the Defence Force. A Defence training note records that the ADF follows U.K. custom for “Lieutenant” pronunciation, differing by service — worth knowing, because Americans will mis-say it in both directions.",
    links: [
      { label: "Defence — ADF overview", url: "https://www.Defence.gov.au/node/104" },
      { label: "PACMAN — §1.3.40 Equivalent ranks and classifications", url: "https://pay-conditions.defence.gov.au/pacman/chapter-1/part-3/division-5" },
    ],
    source: "Defence.gov.au — ADF Pay and Conditions Manual (PACMAN)",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    status: "OFFICIAL TABLES — ORDER ONLY (NO EQUIVALENCE PUBLISHED)",
    gap: false,
    force:
      "New Zealand Defence Force (NZDF) — Māori name shown on NZDF publications: Te Ope Kātua O Aotearoa. Services: Royal New Zealand Navy, New Zealand Army, Royal New Zealand Air Force.",
    rankIntro:
      "Official text tables (Navy, Army) plus NZDF's official Badges of Rank poster (Air Force). No NATO/US equivalence is published on these pages — order only.",
    tables: [
      {
        title: "Royal New Zealand Navy — commissioned",
        columns: ["Rank", "Abbreviation"],
        rows: [
          ["Vice Admiral", "VADM"],
          ["Rear Admiral", "RADM"],
          ["Commodore", "CDRE"],
          ["Captain", "CAPT"],
          ["Commander", "CDR"],
          ["Lieutenant Commander", "LTCDR"],
          ["Lieutenant", "LT"],
          ["Sub Lieutenant", "SLT"],
          ["Ensign", "ENS"],
          ["Midshipman", "MID"],
        ],
      },
      {
        title: "Royal New Zealand Navy — non-commissioned",
        columns: ["Rank", "Note"],
        rows: [
          ["Warrant Officer", ""],
          ["Chief Petty Officer", ""],
          ["Petty Officer", ""],
          ["Leading Hand", "See the flag below — the all-services poster reads Leading Rating"],
          ["Able Rating", "Abbreviations carry trade letters"],
          ["Ordinary Rating", ""],
        ],
      },
      {
        title: "New Zealand Army — commissioned",
        columns: ["Rank", "Abbreviation"],
        rows: [
          ["Lieutenant General", "LTGEN"],
          ["Major General", "MAJGEN"],
          ["Brigadier", "BRIG"],
          ["Colonel", "COL"],
          ["Lieutenant Colonel", "LTCOL"],
          ["Major", "MAJ"],
          ["Captain", "CAPT"],
          ["Lieutenant", "LT"],
          ["Second Lieutenant", "2LT"],
        ],
      },
      {
        title: "New Zealand Army — non-commissioned",
        columns: ["Rank", "Abbreviation"],
        rows: [
          ["Warrant Officer Class One", "WO1"],
          ["Warrant Officer Class Two", "WO2"],
          ["Staff Sergeant", "SSGT"],
          ["Sergeant", "SGT"],
          ["Corporal", "CPL"],
          ["Lance Corporal", "LCPL"],
          ["Private", "PTE"],
        ],
        note: "The all-services poster adds artillery variants Bombardier / Lance Bombardier that the text page omits.",
      },
      {
        title: "Royal New Zealand Air Force — from NZDF's official Badges of Rank poster (updated 2025)",
        columns: ["Commissioned", "Other ranks"],
        rows: [
          ["Air Marshal", "Warrant Officer"],
          ["Air Vice Marshal", "Flight Sergeant"],
          ["Air Commodore", "Sergeant"],
          ["Group Captain", "Corporal"],
          ["Wing Commander", "Leading Aircraftman"],
          ["Squadron Leader", "Aircraftman"],
          ["Flight Lieutenant", ""],
          ["Flying Officer", ""],
          ["Pilot Officer", ""],
        ],
        note: "There is no equivalent RNZAF text table; the poster is the official source.",
      },
    ],
    rankNotes: [
      "NZDF's own internal convention, from its official family guide: cross-service references use Army ranks followed by “(E)” — “Maj (E)” = an Army Major, a Navy Lieutenant Commander, an Air Force Squadron Leader.",
    ],
    rankFlags: [
      "Leading Hand vs Leading Rating: the Navy text page says Leading Hand; the poster column reads Leading Rating. Both official — flagged, not blended.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "The Badges of Rank poster is image-based with no per-rank prose, so no per-rank drawings can be written from official text.",
    insigniaSpecs: [],
    insigniaNotes: [
      "The official text support is general only: rank “is shown by various insignia (often referred to as rank slides) on the chest or shoulders of a uniform, and on the cuffs or sleeves of dress jackets” (NZDF family guide).",
      "One specific text-described device: a Navy medical officer wears a scarlet stripe between their gold bands (NZDF news).",
    ],
    art: [],
    working:
      "Titles as NZDF states them: Chief of Defence Force, with Chief of Navy, Chief of Army, Chief of Air Force.",
    links: [
      { label: "NZDF — Navy: our people (ranks)", url: "https://www.nzdf.mil.nz/navy/our-people/" },
      { label: "NZDF — Army: our people (ranks)", url: "https://www.nzdf.mil.nz/army/our-people/" },
      { label: "NZDF — official site", url: "https://www.nzdf.mil.nz/media-centre/news/nzdf-marks-anzac-day-with-conflict-anniversaries-front-of-mind/" },
    ],
    source: "nzdf.mil.nz — NZDF's own people pages and Badges of Rank poster",
  },
  {
    id: "japan",
    name: "Japan",
    status: "COMPLETE — MOD'S OWN ENGLISH TABLE (NOT A NATO COUNTRY)",
    gap: false,
    force:
      "Japan Self-Defense Forces (JSDF), under the Ministry of Defense: Ground Self-Defense Force (GSDF), Maritime Self-Defense Force (MSDF), Air Self-Defense Force (ASDF) — “as armed forces,” per Defense of Japan.",
    rankIntro:
      "MOD's own cross-service equivalence table, Defense of Japan 2020, Fig. IV-1-1-4. Japan publishes no NATO codes; the Japanese designation column is the anchor, and the English renderings are MOD's own.",
    tables: [
      {
        title: "JSDF ranks — MOD equivalence table (Defense of Japan 2020)",
        columns: ["Japanese designation", "GSDF", "MSDF", "ASDF"],
        rows: [
          ["Sho", "General", "Vice Admiral ⚠", "General"],
          ["Shoho", "Major General", "Rear Admiral", "Major General"],
          ["Issa", "Colonel", "Captain", "Colonel"],
          ["Nisa", "Lieutenant Colonel", "Commander", "Lieutenant Colonel"],
          ["Sansa", "Major", "Lieutenant Commander", "Major"],
          ["Ichii", "Captain", "Lieutenant", "Captain"],
          ["Nii", "First Lieutenant", "Lieutenant Junior Grade", "First Lieutenant"],
          ["Sani", "Second Lieutenant", "Ensign", "Second Lieutenant"],
          ["Juni", "Warrant Officer", "Warrant Officer", "Warrant Officer"],
          ["Socho", "Sergeant Major", "Chief Petty Officer", "Senior Master Sergeant"],
          ["Isso", "Master Sergeant", "Petty Officer First Class", "Master Sergeant"],
          ["Niso", "Sergeant First Class", "Petty Officer Second Class ⚠", "Technical Sergeant"],
          ["Sanso", "Sergeant", "Petty Officer Third Class", "Staff Sergeant"],
          ["Shicho", "Leading Private", "Leading Seaman", "Airman First Class"],
          ["Isshi", "Private First Class", "Seaman", "Airman Second Class"],
          ["Nishi", "Private", "Seaman Apprentice", "Airman Third Class"],
        ],
        note: "Officer Candidate appears in the same volume as a separate entry category.",
      },
    ],
    rankNotes: [],
    rankFlags: [
      "Two MOD-internal conflicts, flagged not blended: (1) the MSDF top rank — Fig. IV-1-1-4 renders Sho as “Vice Admiral,” while the same volume's appointment figure and its own notes say “Admiral (MSDF)” and style the MSDF chief “Admiral”; (2) a 2024 MOD English press summary renders Niso (MSDF) as “Petty Officer First Class,” against the table's Second Class.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "No official English text description of JSDF insignia was located: MOD's dedicated rank page is Japanese-language and the English White Paper presents ranks as text tables only. The cherry-blossom/star/stripe descriptions in circulation are secondary-source material and are excluded — no drawings are made.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "Joint body: the Joint Staff, headed by the Chief of Staff, Joint Staff; each service has its own Chief of Staff and Staff Office. MOD's 2025 digest records the new JSDF Joint Operations Command (JJOC), established 24 March 2025.",
    links: [
      { label: "MOD — Defense of Japan 2020 (white paper PDF)", url: "https://www.mod.go.jp/en/publ/w_paper/wp2020/pdf/R02020202.pdf" },
      { label: "MOD — Defense of Japan 2020, rank table Fig. IV-1-1-4 (PDF)", url: "https://www.mod.go.jp/en/publ/w_paper/wp2020/pdf/R02040101.pdf" },
    ],
    source: "mod.go.jp — Japan Ministry of Defense, Defense of Japan 2020 (English)",
  },
);

PARTNER_COUNTRIES.push(
  {
    id: "greece",
    name: "Greece",
    status: "⚠ GAP-FLAGGED — ARMY PARTIAL; NAVY & AIR FORCE FROM OFFICIAL BIOGRAPHIES",
    gap: true,
    force:
      "Hellenic Armed Forces; joint staff: the Hellenic National Defence General Staff (HNDGS). Branches as an HNDGS page states them: Hellenic Army, Hellenic Navy, Hellenic Air Force.",
    forceFlag:
      "The same site also prints “Hellenic National Defense General Staff” (footer) — a spelling conflict inside one official site; “Defence” (the site-title form) is kept and the conflict flagged.",
    rankIntro:
      "No official NATO-code alignment was found for any Greek service. The Hellenic Army is the only service with an official English “Ranks” page; the Navy and Air Force sequences below rest on official English biographies, not tables — flagged as such.",
    tables: [
      {
        title: "Hellenic Army — the Ranks page's text, in its order and words (partial)",
        columns: ["Rank", "As the page states it"],
        rows: [
          ["General", "“The highest rank… The Chief of HNDGS is the only one who can be awarded the rank”"],
          ["Lieutenant General", "“The second highest”"],
          ["Major General", "“The third highest”"],
          ["Brigadier General", "“The lowest rank of the general officers”"],
          ["Captain", "Highest of the junior officers named on the page"],
          ["1st Lieutenant", ""],
          ["2nd Lieutenant", "Lowest; academy graduates start here"],
          ["Warrant Officer", "“An intermediate rank between the NCO and the Officer”"],
          ["Reserve Officer Cadet", "Named on the page among the junior officers"],
        ],
      },
    ],
    rankNotes: [
      "Hellenic Navy — no consolidated English rank table found. Officer names in promotion order from official English officer biographies (biography evidence, not a table): Ensign → Lieutenant J.G. → Lieutenant → Lieutenant Commander → Commander → Captain → Commodore → Rear Admiral → Vice Admiral; top rank in HNDGS English use: Admiral. No English NCO/sailor table found.",
      "Hellenic Air Force — no table found; official English biographies use Army-style titles in promotion order: 2nd Lieutenant → 1st Lieutenant → Captain → Major → Lieutenant Colonel → Colonel → Brigadier General → Major General → Lieutenant General.",
      "Separately, an official Army page records NCO Academy graduates “awarded the rank of regular sergeant” — an attested rank name that does not appear on the Ranks page.",
    ],
    rankFlags: [
      "The Army Ranks page's text form omits the senior-officer grades (Colonel / Lieutenant Colonel / Major) and all NCO grades except Warrant Officer — it is image-led for those; the names are NOT back-filled here.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "Greek insignia are image-only in the official English record — no per-rank drawings can be written.",
    insigniaSpecs: [],
    insigniaNotes: [
      "Exactly one official text rule was found: a Hellenic Army Private “doesn't bear insignia but only the emblem of the Arm or Corps they have been assigned to.”",
    ],
    art: [],
    working: "Chief's title as the site styles it: Chief of the Hellenic National Defence General Staff (HNDGS).",
    links: [
      { label: "HNDGS — Hellenic National Defence General Staff", url: "https://geetha.mil.gr/en/" },
      { label: "Hellenic Army — Ranks", url: "https://army.gr/en/ranks/" },
    ],
    source: "geetha.mil.gr / army.gr — official English pages (partial)",
  },
  {
    id: "netherlands",
    name: "Netherlands",
    status: "⚠ GAP-FLAGGED — ONLY OFFICIAL ENGLISH SOURCE IS DATED 2016, IMAGE-LED",
    gap: true,
    force:
      "Netherlands armed forces (english.defensie.nl). The four Services: Royal Netherlands Navy, Royal Netherlands Army, Royal Netherlands Air and Space Force, Royal Netherlands Marechaussee.",
    forceFlag:
      "The air service was renamed from Royal Netherlands Air Force in 2025 (official news, 9 July 2025); the 2016 rank brochure below still carries the old name.",
    rankIntro:
      "⚠ Provenance flag: no current English rank page exists on english.defensie.nl and no official NATO-code alignment was found. The lists below are from the MoD brochure “The rank insignias of the Netherlands armed forces” (Ministry of Defence, Directorate of Communication, April 2016) — located via a third-party reproduction of that official brochure (the Dutch original is archived from defensie.nl). The brochure prints no NATO codes, so these are order-only, and details appear only where its text layer is legible.",
    tables: [
      {
        title: "Royal Netherlands Navy (fleet) — 2016 brochure order",
        columns: ["Rank"],
        rows: [
          ["Admiral"], ["Vice Admiral"], ["Rear Admiral"], ["Commodore"], ["Captain"], ["Commander"],
          ["Lieutenant Commander"], ["Lieutenant"], ["Lieutenant Junior Grade"], ["Sub-Lieutenant"],
          ["Warrant Officer"], ["Chief Petty Officer"], ["Petty Officer"], ["Leading Rating"],
          ["Able Rating"], ["Ordinary Rating"], ["Junior Rating"],
        ],
      },
      {
        title: "Netherlands Marine Corps (within the Navy) — 2016 brochure order",
        columns: ["Rank"],
        rows: [
          ["General"], ["Lieutenant General"], ["Major General"], ["Brigadier General"], ["Colonel"],
          ["Lieutenant Colonel"], ["Major"], ["Captain"], ["First Lieutenant"], ["Second Lieutenant"],
          ["Warrant Officer"], ["Sergeant Major"], ["Sergeant"], ["Corporal"], ["Marine Class 1"],
          ["Marine Class 2 (lower grades image-only)"],
        ],
      },
      {
        title: "Royal Netherlands Army — 2016 brochure order",
        columns: ["Rank"],
        rows: [
          ["General → Second Lieutenant (officer sequence, incl. Officer Candidate)"],
          ["Warrant Officer"], ["Sergeant Major"], ["Sergeant Class 1"], ["Sergeant"], ["Corporal"],
          ["Lance Corporal"], ["Private Class 1"], ["Private Class 2"],
        ],
      },
      {
        title: "Royal Netherlands Air Force (2016 name) — 2016 brochure order",
        columns: ["Rank"],
        rows: [
          ["General → Second Lieutenant (officer sequence)"],
          ["Warrant Officer"], ["Sergeant Major"], ["Flight Sergeant"], ["Sergeant"], ["Corporal"],
          ["Lance Corporal"], ["Private Class 1"], ["Private Class 2"], ["Private Class 3"],
        ],
      },
    ],
    rankNotes: [
      "Royal Netherlands Marechaussee: the officer sequence matches the Army pattern; the remainder sits in the brochure's image layer and could not be read as text — flagged incomplete.",
    ],
    rankFlags: [
      "The only official English rank publication found is dated April 2016 and predates the 2025 Air-and-Space rename. Treat every list on this page as dated until a current official English source replaces it.",
    ],
    insigniaKind: "none",
    insigniaReason:
      "Per-rank devices are images only in the 2016 brochure — no drawings can be written from its text.",
    insigniaSpecs: [],
    insigniaNotes: [
      "The brochure's text states: Navy — fleet and Marine Corps insignia systems differ, and “for the marines, the chevrons (V shaped symbols) have a red border”; in the RNLN a corporal is classed as an NCO.",
      "Army — for cavalry and military administration units, the insignia of corporal through sergeant major are in silver braid (the brochure states the silver exception only).",
    ],
    art: [],
    working:
      "Joint chief's title as the site states it: Chief of Defence (CHOD); the Joint Support Command “provides support to the entire Netherlands armed forces.”",
    links: [
      { label: "Netherlands MoD (English) — Organisation", url: "https://english.defensie.nl/organisation" },
    ],
    source: "english.defensie.nl + MoD rank-insignia brochure (April 2016, via reproduction)",
  },
  {
    id: "italy",
    name: "Italy",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: NO OFFICIAL ENGLISH RANK TABLE FOUND",
    gap: true,
    force:
      "Italian Armed Forces (difesa.it English usage), with sections headed Army (Italian Army), Navy, Air Force, Carabinieri.",
    rankIntro: "",
    tables: [],
    rankNotes: [],
    rankFlags: [],
    gapText:
      "No Italian ranks or codes are recorded here. The Italian Army's official English page titled “Rank insignias” contains no rank list, no NATO codes and no insignia table — its text is a historical essay (“The meaning of the ranks used in the Italian Army dates back to the last six centuries”). No official English rank-insignia page was found for the Navy, Air Force or Carabinieri. Italy is covered by the NATO code backbone on the Partner Forces home page only, and this profile must not be populated from non-official sources without a separate, approved source.",
    insigniaKind: "none",
    insigniaReason: "No official English rank-insignia text exists to describe or draw from — see the gap statement above.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "The Defence site styles the joint chief “Chief of Defence” in its page title and “Chief of Defence Staff” in its text — both forms on one page; the joint HQ appears as “Joint Operations Headquarters” and as “Joint Operations Command (COVI)” on different official pages.",
    links: [
      { label: "Ministero della Difesa (English)", url: "https://www.difesa.it/eng/primo-piano/italys-humanitarian-airlift-to-gaza-continues/77145.html" },
      { label: "Italian Army — Rank insignias (English page, no table)", url: "https://www.esercito.difesa.it/en/equipment/militaria/rank-insignias/rank-insignias/75974.html" },
    ],
    source: "difesa.it / esercito.difesa.it — official English pages (no rank table published)",
  },
  {
    id: "spain",
    name: "Spain",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: NO COMPLETE OFFICIAL ENGLISH RANK TABLE FOUND",
    gap: true,
    force:
      "“The Spanish Armed Forces (FAS in Spanish), composed of the Army, the Navy, the Air Force and also the Common Corps” — the Chief of Defence's own statement on the Defence Staff (EMAD) site.",
    forceFlag:
      "Air-service naming differs across official English pages: “the Air Force” there vs “Air and Space Force” / “Chief of Staff of the Air and Space Army” on EMAD's operations page — flagged, not merged.",
    rankIntro: "",
    tables: [],
    rankNotes: [
      "The only coded usages found are isolated biography lines on the Navy's official English site — promotion to Sergeant (OR-6) and to Command Master Chief Petty Officer (OR-9) for the “Master Chief Petty Officer of the Spanish Navy.” Examples only — a Spanish ladder is not extrapolated from two data points.",
    ],
    rankFlags: [],
    gapText:
      "No Spanish rank table is recorded here. The Army's official English “Army Ranks & Insignia” page returns no rank table in text (navigation and unit list only); no official English text table was found for the Navy or the Air and Space Force, and its insignia content is image-only with no textual description.",
    insigniaKind: "none",
    insigniaReason: "Spanish insignia content in the official English record is image-only with no textual description — nothing is drawn.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "Joint chief styled Chief of Defence (JEMAD in Spanish); EMAD's English operations page also uses CHOD for the same office.",
    links: [
      { label: "EMAD — Defence Staff (English)", url: "https://emad.defensa.gob.es/en/prensa/noticias/2020/12/listado/201204-Comunicado-Prensa-Constitucion-JEMAD.html" },
    ],
    source: "emad.defensa.gob.es — Spanish Defence Staff official English pages",
  },
  {
    id: "poland",
    name: "Poland",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: NO OFFICIAL ENGLISH RANK TABLE FOUND",
    gap: true,
    force:
      "Polish Armed Forces, formally Armed Forces of the Republic of Poland (Ministry of National Defence, gov.pl). Component lists differ by official page: an Army Day page lists Land Forces, Air Forces, Navy, Special Forces, Support Inspectorate, Territorial Defence Forces, Military Police, Cyberspace Defence Forces and the Warsaw Garrison Command, while the Ministry overview calls the Territorial Defence Forces “the fifth type of Armed Forces in Poland.”",
    forceFlag:
      "Five types vs a longer component list — both printed as found, never collapsed into one branch list.",
    rankIntro: "",
    tables: [],
    rankNotes: [],
    rankFlags: [],
    gapText:
      "No Polish rank list is recorded here. No official English rank table was found on wojsko-polskie.pl or the Ministry's English pages; the official rank-insignia documents for the Polish services are Polish-language PDFs — outside this section's English-only sourcing rule. Poland is covered by the NATO code backbone on the Partner Forces home page only.",
    insigniaKind: "none",
    insigniaReason: "The official Polish rank-insignia documents are Polish-language PDFs; no English official text exists to draw from.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "Top professional title in Ministry English: Chief of the General Staff of the Polish Armed Forces. Territorial Defence Forces motto as the Ministry gives it in English: “Always ready, always close.”",
    links: [
      { label: "Ministry of National Defence (gov.pl, English)", url: "https://www.gov.pl/web/national-defence/polish-army-day---we-thank-the-soldiers-for-their-service2" },
    ],
    source: "gov.pl — Polish Ministry of National Defence English pages",
  },
  {
    id: "turkiye",
    name: "Türkiye",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: NO OFFICIAL ENGLISH RANK TABLE FOUND",
    gap: true,
    force:
      "Turkish Armed Forces (General Staff site header), an organisation “consisting of the Land, Naval, and Air Force Commands” — formally the Land Forces Command (est. 1 July 1949), Naval Forces Command (est. 15 August 1949) and Air Force Command (est. 23 January 1944), placed under the Ministry of National Defense in 2018.",
    rankIntro: "",
    tables: [],
    rankNotes: [
      "The only official English rank usages found are isolated: the Air Force Commander rendered “Air General” in one official article and plain “General” for the same appointment in the commander's biography on the same site — a rendering conflict inside one official domain, flagged.",
    ],
    rankFlags: [],
    gapText:
      "No Turkish table is recorded here. Searches of tsk.tr and the force-command English pages produced no English rank or rank-insignia table and no OF/OR coding for any of the three commands. Türkiye is covered by the NATO code backbone on the Partner Forces home page only.",
    insigniaKind: "none",
    insigniaReason:
      "Insignia text in English exists only for the Land Forces Command emblem (four large stars denote the command's level; sixteen small stars the sixteen Turkish states; “209 BC” the founding year) — that is a headquarters emblem, NOT rank insignia, and it is recorded here only so it is not mistaken for one. No rank insignia are drawn.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "The principle the Land Forces' own emblem page states: laurel leaves “represent the principle of ‘Peace at Home, Peace in the World’” — the TSK history page uses the same form. Senior title in official English use: Chief of the General Staff.",
    links: [
      { label: "Turkish Armed Forces — History (tsk.tr)", url: "https://www.tsk.tr/Sayfalar?viewName=History" },
    ],
    source: "tsk.tr — Turkish Armed Forces official English pages",
  },
  {
    id: "south-korea",
    name: "South Korea",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: NO OFFICIAL ENGLISH RANK TABLE FOUND",
    gap: true,
    force:
      "ROK Armed Forces (the term throughout the MND English Defense White Paper): Army, Navy, and Air Force, whose combat units the Joint Chiefs of Staff commands.",
    forceFlag:
      "The Marine Corps is presented two ways in MND English material — inside the Navy organisation (2020 White Paper: the Navy “consists of… Marine Corps Headquarters…”) and as a separate column beside the three services in a Defence Reform classification table. Both presentations are flagged; neither is chosen.",
    rankIntro: "",
    tables: [],
    rankNotes: [],
    rankFlags: [],
    gapText:
      "South Korea is covered at profile level only. No rank table, rank list, or equivalence table in English was located on mnd.go.kr, jcs.mil.kr, or the services' English pages; the English White Papers discuss organisation and policy without listing ranks. Official English usage is instance-only (“Gen.”, “Lt. Gen.” in JCS news) — not a ladder, and none is reconstructed here. No official English text describing ROK insignia appearance was located either. Closing this gap compliantly needs the Korean-language official insignia pages (with translation) or an MND English PDF not indexed in the research pass — a follow-up decision, not a silent fill.",
    insigniaKind: "none",
    insigniaReason: "No official English text describing ROK insignia appearance was located — nothing is drawn.",
    insigniaSpecs: [],
    insigniaNotes: [],
    art: [],
    working:
      "Joint body: Joint Chiefs of Staff (JCS), headed by the Chairman of the Joint Chiefs of Staff, commanding through one Vice Chairman, four chief directorates and five offices (2018 White Paper).",
    links: [
      { label: "MND — Defense White Paper 2020 (English)", url: "https://www.mnd.go.kr/mnd_book/DefenseWhitePaper/2020/2020_eng_body/files/basic-html/page67.html" },
    ],
    source: "mnd.go.kr — ROK Ministry of National Defense English White Paper",
  },
  {
    id: "philippines",
    name: "Philippines",
    status: "⚠ GAP-FLAGGED — PROFILE ONLY: ATTESTED INSTANCES, NO TABLE",
    gap: true,
    force:
      "Armed Forces of the Philippines (AFP), headed by the Chief of Staff, AFP. Major services as AFP/DND pages name them: Philippine Army, Philippine Navy, Philippine Air Force; service heads are the Commanding Generals of the Army and Air Force and the Flag Officer in Command of the Navy. The Philippine Marine Corps appears in official DND material grouped with the Navy.",
    rankIntro:
      "No rank or insignia table was located on afp.mil.ph or the service sites. The familiar U.S.-style AFP ladder is NOT reproduced, because it could not be verified on an official Philippine site. What official text does attest is listed below — instances, not a table.",
    tables: [],
    rankNotes: [
      "Attested equivalence (DND release): “Brigadier General/Commodore” and “Colonel/Captain (PN)” — Army/Air Force title first, Navy title in parentheses; the closest official equivalence statement located.",
      "Attested ranks: an Army release records Privates “promoted to the next higher rank of Private First Class”; a DND biography attests Chief Master Sergeant / Senior Master Sergeant as ranks created by law (RA 8220).",
    ],
    rankFlags: [
      "The detailed AFP Uniform Code insignia descriptions (silver stars, eight-rayed sun, etc.) circulate only as a GHQ document re-hosted on non-official sites (Scribd) in the research pass and are excluded pending an official-host copy.",
    ],
    gapText:
      "No AFP rank table is recorded here — official Philippine sites publish no rank or insignia table that could be verified. Only the attested instances above and the one official insignia data point below appear.",
    insigniaKind: "specs",
    insigniaSpecs: [
      {
        spec: "Brigadier General = 1 star — the Philippine Military Academy (pma.edu.ph, an AFP official site) reports the AFP Chief of Staff “donned the one-star rank on Brigadier General Agatep.”",
      },
    ],
    insigniaNotes: [],
    art: [
      { kind: "stars", count: 1, caption: "Brigadier General — 1 star, as officially stated" },
    ],
    working:
      "AFP Core Values as printed on official GHQ bulletins: “Honor, Service, Patriotism”; AFP Vision 2028: “A world class Armed Forces, Source of National Pride.”",
    links: [
      { label: "DND Philippines — RA 11939 release (official equivalence instances)", url: "https://www.dnd.gov.ph/Release/2023-05-19/1924/DND-hails-signing-of-RA-11939/" },
    ],
    source: "dnd.gov.ph / pma.edu.ph — official Philippine sources (instances only)",
  },
);
