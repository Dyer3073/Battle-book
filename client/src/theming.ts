// Branch & Job Theming — the theme system, transcribed from the
// research pack at ~/workspace/military-app/themes/themes.md (Nov 9,
// 2026). The pack is the source of truth for every value, label, and
// flag below.
//
// SOURCING DISCIPLINE (the pack's, binding):
// - Hex values print as OFFICIAL only where an official source
//   publishes digital values: Army (Army Brand Guidelines V1.0) and
//   Navy (America's Navy Brand Guidelines v2, Nov 2017).
// - USMC / Air Force / Space Force publish color NAMES only — every
//   rendered value is a labeled APPROXIMATION matched to the name.
// - Coast Guard publishes PMS only (Red PMS 179 C, Blue PMS 307 C) —
//   every hex is a labeled Pantone-conversion approximation.
// - Army job-layer colors (TIOH Branch Insignia Color Chart,
//   2026-05-07) are cable/yarn textile specs, NOT hex — each pair is a
//   labeled approximation matched to the published color names,
//   anchored to a published PMS where the pack gives one.
// - No per-job colors exist for any other service. Never invent one.

export type BranchKey =
  | "Army"
  | "Marine Corps"
  | "Navy"
  | "Air Force"
  | "Space Force"
  | "Coast Guard";

export const BRANCH_KEYS: BranchKey[] = [
  "Army",
  "Marine Corps",
  "Navy",
  "Air Force",
  "Space Force",
  "Coast Guard",
];

export function branchKeyOf(branch: string | null | undefined): BranchKey | null {
  if (!branch) return null;
  return (BRANCH_KEYS as readonly string[]).includes(branch) ? (branch as BranchKey) : null;
}

export type ColorStatus = "official" | "approximation" | "pms-conversion";

export type PaletteColor = {
  name: string;
  /** Rendered value. For "official" this is the published hex; for the
   * other statuses it is a labeled approximation — never official. */
  hex: string;
  pms?: string;
  status: ColorStatus;
};

export type ServiceTheme = {
  key: BranchKey;
  /** One-line sourcing status, printed in the theme note. */
  statusLine: string;
  colors: PaletteColor[];
  /** Accent used on the app's DARK ground, and the text color on it.
   * Per the pack's Part 4 contrast rule this is a different PUBLISHED
   * color from the same palette — never a silently lightened tint. */
  accentDark: string;
  accentDarkText: string;
  /** Accent used on the app's LIGHT ground (the published darker
   * companion from the same palette), and the text color on it. */
  accentLight: string;
  accentLightText: string;
  /** Secondary accent — the branch's OTHER signature color, rendered
   * as fills only: the second segment of the masthead band and of
   * every section-header rule, beside the primary, so both signature
   * colors are visible on normal screens in either color scheme.
   * Added in the Nov 9, 2026 rebalance (see each theme's note): the
   * original build let the per-ground primary carry every accent
   * surface, so the second signature color never appeared outside
   * the Binder band and the theme panel's swatches. Fills only —
   * never small text — so it carries no text pairing of its own.
   * The secondary color's TEXT role lives in wordDark / wordLight
   * below (Christian's theme rule, Nov 9, 2026). */
  accent2Dark: string;
  accent2Light: string;
  /** The WORDS colors — Christian's theme rule (Nov 9, 2026): the
   * branch's MAIN color takes the surface with more to be colored and
   * the SECONDARY color takes the one with less. In this app the
   * structural surface (band, rules, borders, fills, badges) carries
   * far more color than the words (body text stays neutral), so the
   * main color leads the structure via accent/accent2 and the
   * secondary color carries the WORDS — accented headings, labels,
   * links, and values — via these two fields. CONTRAST IS ABSOLUTE:
   * where the literal secondary hue is unreadable as text on a
   * scheme's ground, the value here is the nearest READABLE shade of
   * that same color and the theme's note says so; the assignment
   * itself never changes to dodge contrast. */
  wordDark: string;
  wordLight: string;
  /** Palette band for the binder cover ground band, in display order. */
  band: string[];
  /** The "About this theme" note — sourcing, flags, contrast choice. */
  note: string[];
  /** Caption printed with the branch emblem rendition. */
  emblemCaption: string;
  /** Short name of the emblem pick, for labels. */
  emblemName: string;
};

const OFF = "official" as const;
const APX = "approximation" as const;
const PMSX = "pms-conversion" as const;

export const SERVICE_THEMES: Record<BranchKey, ServiceTheme> = {
  Army: {
    key: "Army",
    statusLine: "Official digital values — Army Brand Guidelines V1.0",
    colors: [
      { name: "Army Black", hex: "#221F20", pms: "Black 3 C", status: OFF },
      { name: "Army Gold", hex: "#FFCC01", pms: "123 C", status: OFF },
      { name: "White", hex: "#FFFFFF", status: OFF },
      { name: "Army Green", hex: "#2F372F", pms: "4224 C", status: OFF },
      { name: "Tan", hex: "#F1E4C7", pms: "9184 C", status: OFF },
      { name: "Field 01", hex: "#727365", pms: "416 C", status: OFF },
      { name: "Gray 01", hex: "#565557", pms: "Cool Gray 11 C", status: OFF },
      { name: "Gray 02", hex: "#D5D5D7", pms: "Cool Gray 3 C", status: OFF },
    ],
    accentDark: "#FFCC01",
    accentDarkText: "#221F20",
    accentLight: "#2F372F",
    accentLightText: "#FFFFFF",
    accent2Dark: "#F1E4C7",
    accent2Light: "#FFCC01",
    wordDark: "#F1E4C7",
    wordLight: "#7A5C00",
    band: ["#221F20", "#FFCC01", "#2F372F", "#F1E4C7"],
    note: [
      "These are the Army's OFFICIAL digital values, published in the U.S. Army Brand Guidelines V1.0 (Mar 2023). Army Gold on Army Black is the brand's own primary combination.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the branch's main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). The main color therefore leads the STRUCTURE — masthead band, section-header rules, borders, buttons, badges: Army Green on light screens, Army Gold on dark screens (Army Black and Army Green sit almost on the dark olive ground, so Gold — the brand's own published companion, never a lightened tint — leads there). The secondary color carries the WORDS — accented headings, labels, links, and values: Army Gold on light screens in a deepened readable shade (#7A5C00), because literal Army Gold #FFCC01 is unreadable as text on a light ground; Tan on dark screens in its literal published value, which reads clearly there. The secondary also appears as the smaller segment of the masthead band and every section-header rule, so both halves of the black-and-gold signature show on normal screens in either scheme (the two-segment mechanism dates to the Nov 9, 2026 rebalance; before it, light screens showed Green only and dark screens Gold only).",
      "The guideline's secondary “Field 02” value was not captured in the research pass, so no Field 02 value is printed anywhere in the app rather than guessed.",
    ],
    emblemCaption: "Stylized rendition of the Army Star logo.",
    emblemName: "Army Star",
  },
  "Marine Corps": {
    key: "Marine Corps",
    statusLine: "Names official (Scarlet and Gold, MCO No. 4, Apr 18, 1925) — NO official digital values exist",
    colors: [
      { name: "Scarlet", hex: "#CE1126", status: APX },
      { name: "Gold", hex: "#FFD700", status: APX },
    ],
    accentDark: "#CE1126",
    accentDarkText: "#FFFFFF",
    accentLight: "#CE1126",
    accentLightText: "#FFFFFF",
    accent2Dark: "#FFD700",
    accent2Light: "#FFD700",
    wordDark: "#FFD700",
    wordLight: "#7A5C00",
    band: ["#CE1126", "#FFD700"],
    note: [
      "Scarlet and Gold are the official colors of the Marine Corps, designated by Marine Corps Order No. 4 (April 18, 1925). NO official digital values exist — the Corps publishes the names, not hex values.",
      "Both values shown here are labeled APPROXIMATION — matched to the published names Scarlet / Gold. No Marine Corps hex in this app is official, and none is presented as official.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). SCARLET is the main color and leads the STRUCTURE on both light and dark screens: the masthead band, section-header rules, card borders, the active navigation state, buttons, and badges, with WHITE text wherever text sits on scarlet (gold text never sits on scarlet). GOLD is the secondary color and carries the WORDS — accented headings, labels, links, and values: literal Gold #FFD700 on dark screens, where it reads clearly; on light screens literal gold is unreadable as text, so the words use the nearest readable shade of the same gold, #7A5C00 — only the shade changes, never the assignment. Gold also appears as the smaller segment of the masthead band and every section-header rule. Scarlet first took the lead in the Nov 9, 2026 rebalance, after the report that only Gold was visible; on the dark ground scarlet works as fills, rules, and bold accents rather than body text, which is what keeps it legible there.",
    ],
    emblemCaption: "Stylized rendition of the Marine Corps emblem.",
    emblemName: "Eagle, Globe, and Anchor",
  },
  Navy: {
    key: "Navy",
    statusLine: "Official digital values — America's Navy Brand Guidelines v2 (Nov 2017)",
    colors: [
      { name: "Navy Blue", hex: "#022A3A", pms: "303 C", status: OFF },
      { name: "Yellow", hex: "#E8B00F", pms: "1235 C", status: OFF },
      { name: "Blue", hex: "#0076A9", pms: "7690 C", status: OFF },
      { name: "Gray", hex: "#C6CCD0", pms: "428 C", status: OFF },
      { name: "Black", hex: "#000000", pms: "Black C", status: OFF },
      { name: "Navy White", hex: "#FFFEF9", status: OFF },
    ],
    accentDark: "#E8B00F",
    accentDarkText: "#022A3A",
    accentLight: "#022A3A",
    accentLightText: "#FFFEF9",
    accent2Dark: "#0076A9",
    accent2Light: "#E8B00F",
    wordDark: "#4EA8D2",
    wordLight: "#7D5E00",
    band: ["#022A3A", "#E8B00F", "#0076A9", "#C6CCD0"],
    note: [
      "These are the OFFICIAL digital values published in America's Navy Brand Guidelines, Version 2 (Nov 8, 2017), the Navy Recruiting Command's brand document.",
      "⚠ Conflict flag (printed, not blended): the U.S. Naval Academy publishes DIFFERENT blues and golds for Academy/athletics identities — Navy Blue PMS 282 #00225B / Vegas Gold, and RGB 0-37-84 / 180-151-90. Those are Academy identities, not the service brand. This app uses the service brand guideline set above and does not blend the two.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). On light screens Navy Blue leads the STRUCTURE (masthead band, section-header rules, borders, buttons, badges) and Yellow carries the WORDS — accented headings, labels, links, and values — in a deepened readable shade (#7D5E00), because literal Yellow #E8B00F is unreadable as text on a light ground. On dark screens Navy Blue #022A3A effectively disappears on the dark olive ground, so Yellow leads the structure there and Blue carries the words in a lightened readable shade (#4EA8D2) of the published Blue #0076A9; Gray #C6CCD0 also serves secondary (neutral) text on dark screens. The secondary color also appears as the smaller segment of the masthead band and every section-header rule, so both signature colors appear on normal screens in either scheme (the two-segment mechanism dates to the Nov 9, 2026 rebalance; before it, each scheme showed only one of them).",
      "Provenance note: the guideline copy verified in research was hosted on a third-party mirror of the official Navy Recruiting Command document; a re-pull from a navy.mil / NRC host is queued as a pre-launch follow-up.",
    ],
    emblemCaption:
      "Stylized rendition of the central device of the Navy emblem — not the Department of the Navy seal.",
    emblemName: "Navy emblem — central device",
  },
  "Air Force": {
    key: "Air Force",
    statusLine: "Names official (ultramarine blue + Air Force yellow, AFHRA heraldry guide) — NO official digital values confirmed",
    colors: [
      { name: "Ultramarine Blue", hex: "#00308F", status: APX },
      { name: "Air Force Yellow", hex: "#FFD200", status: APX },
    ],
    accentDark: "#FFD200",
    accentDarkText: "#171913",
    accentLight: "#00308F",
    accentLightText: "#FFFFFF",
    accent2Dark: "#00308F",
    accent2Light: "#FFD200",
    wordDark: "#7C9BE0",
    wordLight: "#7A5C00",
    band: ["#00308F", "#FFD200", "#C0C0C0"],
    note: [
      "The official colors are ultramarine blue and Air Force yellow (Guide to Air Force Heraldry, Air Force Historical Research Agency). NO official digital values were confirmed on an official page, so both values shown here are labeled APPROXIMATION — matched to the published names.",
      "Correction, printed as the research pack states it: silver/grey is the Air Force Symbol's FINISH (its official chrome-silver rendering), not a third heraldic color. The two official colors remain ultramarine blue and Air Force yellow.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). On light screens ultramarine leads the STRUCTURE (masthead band, section-header rules, borders, buttons, badges) and Air Force yellow carries the WORDS — accented headings, labels, links, and values — in a deepened readable shade (#7A5C00), because literal Air Force Yellow #FFD200 is unreadable as text on a light ground. On dark screens ultramarine fails on the dark olive ground, so yellow leads the structure there and ultramarine carries the words in a lightened readable shade (#7C9BE0); the Symbol's official silver finish is also used in its art. The secondary color also appears as the smaller segment of the masthead band and every section-header rule, so both official colors appear on normal screens in either scheme (the two-segment mechanism dates to the Nov 9, 2026 rebalance; before it, each scheme showed only one of them).",
      "The Air Force Symbol appears alone as profile art: it is not co-branded, not distorted, and no unapproved words sit directly under it — your name and branch text sit beside it, per the Symbol's own use rules (trademark.af.mil).",
    ],
    emblemCaption: "Stylized rendition of the Air Force Symbol.",
    emblemName: "Air Force Symbol",
  },
  "Space Force": {
    key: "Space Force",
    statusLine: "Names official (spaceforce.mil seal/flag descriptions) — NO official digital values exist",
    colors: [
      { name: "Dark Blue", hex: "#0B1D3A", status: APX },
      { name: "Light Blue", hex: "#A7C7E7", status: APX },
      { name: "Silver", hex: "#C0C0C0", status: APX },
      { name: "Grey", hex: "#808080", status: APX },
      { name: "White", hex: "#FFFFFF", status: APX },
      { name: "Platinum (flag fringe)", hex: "#E5E4E2", status: APX },
    ],
    accentDark: "#3A5F8A",
    accentDarkText: "#FFFFFF",
    accentLight: "#0B1D3A",
    accentLightText: "#FFFFFF",
    accent2Dark: "#A7C7E7",
    accent2Light: "#A7C7E7",
    wordDark: "#A7C7E7",
    wordLight: "#3D6390",
    band: ["#0B1D3A", "#A7C7E7", "#E5E4E2"],
    note: [
      "The official descriptions (spaceforce.mil) name dark blue, light blue, silver, grey, and white, with the flag fringed in platinum. NO official digital values exist, so every value shown here is a labeled APPROXIMATION matched to the published names.",
      "“Space Black” appears only in secondary sources — it is not an official Space Force color name and is not printed as one anywhere in this app.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). On light screens dark blue leads the STRUCTURE (masthead band, section-header rules, borders, buttons, badges) and light blue carries the WORDS — accented headings, labels, links, and values — in a deepened readable shade (#3D6390), because literal Light Blue #A7C7E7 is unreadable as text on a light ground. On dark screens literal Dark Blue #0B1D3A sits almost on the dark olive ground, so dark blue leads the structure there in a lightened readable shade of Dark Blue itself (#3A5F8A) — the main color keeps the dominant surface in both schemes and only its shade adjusts; platinum and silver, published companions from the seal description, remain minor accents in the emblem art only. Light blue carries the words in its literal value #A7C7E7, which reads clearly on the dark ground. The secondary color also appears as the smaller segment of the masthead band and every section-header rule, so the blue half of the signature is visibly present on every screen (the two-segment mechanism dates to the Nov 9, 2026 rebalance; before it, light blue appeared on normal screens in neither scheme).",
      "Uniform identity note: Guardians' embroidered badges are worn in “Space Force blue” thread — the service's own name for its embroidery blue — which is the treatment used for the occupational-badge rendition on your job card.",
    ],
    emblemCaption: "Stylized rendition of the U.S. Space Force Delta logo.",
    emblemName: "USSF Delta",
  },
  "Coast Guard": {
    key: "Coast Guard",
    statusLine: "PMS only — Red PMS 179 C, Blue PMS 307 C (uscg.mil trademark page); no official hex exists",
    colors: [
      { name: "Coast Guard Blue", hex: "#007AA5", pms: "307 C", status: PMSX },
      { name: "Coast Guard Red", hex: "#E23D28", pms: "179 C", status: PMSX },
      { name: "White", hex: "#FFFFFF", status: PMSX },
    ],
    accentDark: "#007AA5",
    accentDarkText: "#FFFFFF",
    accentLight: "#007AA5",
    accentLightText: "#FFFFFF",
    accent2Dark: "#E23D28",
    accent2Light: "#E23D28",
    wordDark: "#F26A52",
    wordLight: "#BC2B18",
    band: ["#007AA5", "#FFFFFF", "#E23D28"],
    note: [
      "The Coast Guard publishes PANTONE values only: Coast Guard Red is PMS 179 C and Coast Guard Blue is PMS 307 C (USCG Trademark & Licensing page, uscg.mil). No official hex exists — every hex shown here is labeled as a Pantone-conversion approximation, never an “official hex.” Pantone's own conversion and common web conversions differ; one labeled approximation is printed, not a blend.",
      "The Coast Guard Mark's band order is fixed: blue, white, red (PMS 307 C / white / PMS 179 C), canted 64°.",
      "Color assignment (Christian's theme rule, Nov 9, 2026: the main color takes the surface with more to be colored, the secondary takes the one with less — in this app the structural surface carries far more color than the words, because body text stays neutral). CG Blue — the main color — leads the STRUCTURE on both grounds: the masthead band, section-header rules, borders, buttons, and badges. Coast Guard Red — the secondary color — carries the WORDS: accented headings, labels, links, and values. Literal Red #E23D28 does not reach readable contrast as small text on either ground, so the words use the nearest readable shades of that same red — deepened to #BC2B18 on light screens, lightened to #F26A52 on dark screens; only the shade changes, never the assignment. Red also appears as the smaller segment of the masthead band and every section-header rule on both grounds, so the Mark's blue-white-red pairing reads on every screen — before the Nov 9, 2026 rebalance Red appeared only in the Binder band and the swatches below, never on a normal screen. White serves small text on blue fills where maximum legibility is needed. (The Coast Guard Auxiliary's different PMS values — 185 C / 280 C — are not the service palette and are never substituted.)",
    ],
    emblemCaption: "Stylized rendition of the Coast Guard emblem within the Coast Guard Mark.",
    emblemName: "Coast Guard Mark",
  },
};

export function statusBadgeLabel(status: ColorStatus): string {
  if (status === "official") return "OFFICIAL VALUE";
  if (status === "pms-conversion") return "PMS — HEX IS A PANTONE-CONVERSION APPROXIMATION";
  return "APPROXIMATION — matched to the published name";
}

/* ------------------------------------------------------------------ */
/* Army job layer — TIOH branch colors (the ONLY official per-job     */
/* color system). Mapped by BRANCH OF THE MOS, never per-MOS. The     */
/* chart's numbers are cable/yarn textile specs, NOT hex: every pair  */
/* renders as labeled approximations matched to the published color   */
/* names, as a CHIP/RIBBON (primary field, secondary stripe) — never  */
/* as colored text. The 2 obsolete pairs (Electronic Warfare,         */
/* Women's Army Corps) are excluded and never theme a profile.        */
/* ------------------------------------------------------------------ */

export type ArmyColorSide = {
  name: string;
  cable?: string;
  approx: string;
  pms?: string;
};

export type ArmyBranchColor = {
  branch: string;
  primary: ArmyColorSide;
  secondary: ArmyColorSide;
  /** Job-device glyph key (see JobDeviceArt). */
  glyph: string;
  /** The branch insignia device name, from the TIOH system. */
  deviceName: string;
  note?: string;
};

function side(name: string, approx: string, cable?: string, pms?: string): ArmyColorSide {
  return { name, approx, cable, pms };
}

const SCARLET = side("Scarlet", "#BA0C2F", "67111", "200");
const YELLOW = side("Yellow", "#F2C230", "67108");
const GOLDEN_YELLOW = side("Golden Yellow", "#F0B90B", "67104");
const WHITE = side("White", "#FFFFFF", "67101");
const GREEN = side("Green", "#3B5F3B", "67129");
const DARK_BLUE = side("Dark Blue", "#20365C", "67126");

export const ARMY_BRANCH_COLORS: ArmyBranchColor[] = [
  { branch: "Adjutant General", primary: side("Dark Blue", "#1B365D", "67126", "539"), secondary: SCARLET, glyph: "shield-stars", deviceName: "Shield with thirteen stripes and stars" },
  { branch: "Armor", primary: YELLOW, secondary: GREEN, glyph: "armor", deviceName: "Tank track and cannon (Armor insignia)" },
  { branch: "Cavalry", primary: YELLOW, secondary: GREEN, glyph: "crossed-sabers", deviceName: "Crossed sabers (Cavalry collar insignia)" },
  { branch: "Artillery", primary: SCARLET, secondary: YELLOW, glyph: "crossed-cannons", deviceName: "Crossed cannons (Field Artillery) — Air Defense Artillery adds a missile", note: "ADA and FA share this one color row in the TIOH chart, but their insignia devices differ: crossed cannons for FA, crossed cannons with a missile for ADA." },
  { branch: "Aviation", primary: side("Ultramarine Blue", "#203A8F", "67118"), secondary: side("Golden Orange", "#E08A1E", "67109"), glyph: "wings-prop", deviceName: "Winged propeller" },
  { branch: "Branch Immaterial", primary: side("Teal Blue", "#1F6E7E", "67121"), secondary: YELLOW, glyph: "star-wreath", deviceName: "Branch Immaterial / CSM device" },
  { branch: "Chemical", primary: side("Cobalt Blue", "#0047AB", "67122"), secondary: GOLDEN_YELLOW, glyph: "benzene", deviceName: "Benzene ring and crossed retorts" },
  { branch: "Civil Affairs", primary: side("Purple", "#5B2A86", "67115"), secondary: WHITE, glyph: "globe-torch", deviceName: "Globe with torch (Civil Affairs insignia)" },
  { branch: "Cyber", primary: side("Steel", "#71797E", "67199"), secondary: side("Black", "#1A1A1A", "67138"), glyph: "bolt-globe", deviceName: "Lightning bolt over globe (Cyber insignia)" },
  { branch: "Engineer", primary: SCARLET, secondary: WHITE, glyph: "castle", deviceName: "Castle (Corps of Engineers insignia)" },
  { branch: "Finance", primary: side("Silver Gray", "#A7A9AC", "67137"), secondary: GOLDEN_YELLOW, glyph: "diamond-globe", deviceName: "Globe within a diamond (Finance insignia)" },
  { branch: "Infantry", primary: side("Flag Blue", "#3E5F8A", "67124"), secondary: WHITE, glyph: "crossed-rifles", deviceName: "Crossed rifles (Infantry insignia)", note: "Naming split, printed not blended: the TIOH chart lists this primary as “Flag Blue 67124”; the traditional branch-color name is “Infantry Blue” (light blue, 67120 yarn / PMS 5415)." },
  { branch: "Judge Advocate General", primary: DARK_BLUE, secondary: WHITE, glyph: "scales-sword", deviceName: "Scales of justice with sword (JAG insignia)" },
  { branch: "Medical", primary: side("Maroon", "#5E1224", "67114"), secondary: WHITE, glyph: "caduceus", deviceName: "Caduceus (Medical insignia)" },
  { branch: "Military Intelligence", primary: side("Oriental Blue", "#005BAA", "67172"), secondary: side("Silver Gray", "#A7A9AC"), glyph: "sphinx", deviceName: "Sphinx (Military Intelligence insignia)" },
  { branch: "Military Police", primary: GREEN, secondary: YELLOW, glyph: "crossed-pistols", deviceName: "Crossed pistols (Military Police insignia)" },
  { branch: "Psychological Operations", primary: side("Bottle/Jungle Green", "#2E4B34", "67191"), secondary: side("Silver Gray", "#A7A9AC"), glyph: "knight", deviceName: "Knight's head (Psychological Operations insignia)" },
  { branch: "Signal Corps", primary: side("Orange", "#D64309", "67110", "1655"), secondary: WHITE, glyph: "flags-torch", deviceName: "Crossed signal flags with flaming torch" },
  { branch: "Special Forces", primary: side("Jungle Green", "#2E4B34", "67191"), secondary: side("Silver Gray", "#A7A9AC"), glyph: "crossed-arrows", deviceName: "Crossed arrows (Special Forces insignia)" },
  { branch: "Transportation", primary: side("Brick Red", "#8E3B2F", "67113"), secondary: GOLDEN_YELLOW, glyph: "wheel-wing", deviceName: "Ship's wheel with winged car wheel (Transportation insignia)" },
  // Non-branch pairs in the same chart (9):
  { branch: "Chaplain", primary: side("Black", "#1A1A1A"), secondary: WHITE, glyph: "cross", deviceName: "Chaplain Corps faith device (Latin cross shown; tablets, dharma cakra, crescent, and Om devices exist per faith)" },
  { branch: "Inspector General", primary: DARK_BLUE, secondary: side("Light Blue", "#7FA8C9", "67120"), glyph: "sword-bundle", deviceName: "Sword and fasces (Inspector General insignia)" },
  { branch: "Logistics", primary: side("Soldier Red", "#8A2432", "67157"), secondary: side("Old Gold", "#B08D2E", "67105"), glyph: "atom-globe", deviceName: "Acquisition / Logistics device" },
  { branch: "Maintenance", primary: side("Crimson", "#9E1B32", "67112"), secondary: side("Light Blue", "#7FA8C9"), glyph: "bomb", deviceName: "Flaming bomb class device (Ordnance / Maintenance)" },
  { branch: "Ordnance", primary: side("Crimson", "#9E1B32"), secondary: YELLOW, glyph: "bomb", deviceName: "Flaming bomb (Ordnance insignia)" },
  { branch: "Public Affairs", primary: side("Brittany Blue", "#4A6FA5", "67119"), secondary: side("Silver Gray", "#A7A9AC"), glyph: "quill-star", deviceName: "Public Affairs device" },
  { branch: "Quartermaster", primary: side("Light Blue", "#7FA8C9"), secondary: side("Buff", "#C8A96A", "67135"), glyph: "key-wheel", deviceName: "Key, wheel, and eagle (Quartermaster insignia, simplified)" },
  { branch: "Support", primary: side("Buff", "#C8A96A"), secondary: SCARLET, glyph: "star-wreath", deviceName: "Staff Specialist / Support device" },
  { branch: "Veterinary", primary: side("Maroon", "#5E1224"), secondary: GREEN, glyph: "caduceus", deviceName: "Caduceus (Veterinary, within Medical)" },
];

/** Map an Army MOS entry (its CMF field label + code) to its TIOH
 * branch — by branch of the MOS, never per-MOS. Returns null when the
 * field doesn't resolve to a chart branch. */
export function armyBranchFor(field: string, code: string): ArmyBranchColor | null {
  const f = field.toLowerCase();
  const c = code.toUpperCase();
  const byBranch = (name: string) => ARMY_BRANCH_COLORS.find((b) => b.branch === name) ?? null;
  if (f.includes("infantry") || c.startsWith("11")) return byBranch("Infantry");
  if (f.includes("engineer") || c.startsWith("12")) return byBranch("Engineer");
  if (f.includes("air defense") || c.startsWith("14")) return byBranch("Artillery");
  if (f.includes("field artillery") || c.startsWith("13")) return byBranch("Artillery");
  if (f.includes("aviation") || c.startsWith("15")) return byBranch("Aviation");
  if (f.includes("cyber") || c.startsWith("17")) return byBranch("Cyber");
  if (f.includes("special forces") || c.startsWith("18")) return byBranch("Special Forces");
  if (f.includes("armor") || c.startsWith("19")) return c.startsWith("19D") ? byBranch("Cavalry") : byBranch("Armor");
  if (f.includes("signal") || c.startsWith("25")) return byBranch("Signal Corps");
  if (f.includes("paralegal") || c.startsWith("27")) return byBranch("Judge Advocate General");
  if (f.includes("military police") || c.startsWith("31")) return byBranch("Military Police");
  if (f.includes("military intelligence") || c.startsWith("35")) return byBranch("Military Intelligence");
  if (f.includes("financial") || c.startsWith("36")) return byBranch("Finance");
  if (f.includes("psychological") || c.startsWith("37")) return byBranch("Psychological Operations");
  if (f.includes("civil affairs") || c.startsWith("38")) return byBranch("Civil Affairs");
  if (f.includes("adjutant") || c.startsWith("42")) return byBranch("Adjutant General");
  if (f.includes("public affairs") || c.startsWith("46")) return byBranch("Public Affairs");
  if (f.includes("acquisition") || c.startsWith("51")) return byBranch("Logistics");
  if (f.includes("religious") || c.startsWith("56")) return byBranch("Chaplain");
  if (f.includes("medical") || c.startsWith("68")) return byBranch("Medical");
  if (f.includes("chemical") || f.includes("cbrn") || c.startsWith("74")) return byBranch("Chemical");
  if (f.includes("transportation") || c.startsWith("88")) return byBranch("Transportation");
  if (f.includes("ammunition") || c.startsWith("89")) return byBranch("Ordnance");
  if (f.includes("mechanical maintenance") || c.startsWith("91") || c.startsWith("94")) return byBranch("Maintenance");
  if (f.includes("quartermaster") || f.includes("supply") || c.startsWith("92")) return byBranch("Quartermaster");
  if (f.includes("immaterial") || f.includes("special / immaterial")) return byBranch("Branch Immaterial");
  return null;
}

/* ------------------------------------------------------------------ */
/* Job devices for the other services. Every entry is drawn from the  */
/* published official description named in its source line; a job     */
/* with no mapped device renders NO art and an honest text note —     */
/* a device is never invented.                                        */
/* ------------------------------------------------------------------ */

export type JobDevice = {
  glyph: string;
  name: string;
  /** The published official description the rendition is drawn from. */
  description: string;
  source: string;
};

const NAVY_SRC = "NAVPERS 15665J, art. 4226 (specialty marks)";
const NAVY_STAFF_SRC = "NAVPERS 15665J, ch. 4 (staff corps devices)";

export const NAVY_MARKS: Record<string, JobDevice> = {
  HM: { glyph: "caduceus", name: "Hospital Corpsman specialty mark", description: "A caduceus.", source: NAVY_SRC },
  BM: { glyph: "anchors", name: "Boatswain's Mate specialty mark", description: "Crossed anchors; crowns down.", source: NAVY_SRC },
  GM: { glyph: "gunbarrels", name: "Gunner's Mate specialty mark", description: "Crossed gun barrels; muzzles up.", source: NAVY_SRC },
  ET: { glyph: "atom", name: "Electronics Technician specialty mark", description: "A helium atom about which electrons revolve.", source: NAVY_SRC },
  YN: { glyph: "quills", name: "Yeoman specialty mark", description: "Crossed quill pens.", source: NAVY_SRC },
  IT: { glyph: "globe-bolt", name: "Information Systems Technician specialty mark", description: "A globe with lightning — the rating's communications mark.", source: NAVY_SRC },
  MC: { glyph: "caduceus-leaf", name: "Medical Corps device", description: "A caduceus with an oak leaf (staff corps).", source: NAVY_STAFF_SRC },
  DC: { glyph: "caduceus-leaf", name: "Dental Corps device", description: "A caduceus with an oak leaf (staff corps).", source: NAVY_STAFF_SRC },
  NC: { glyph: "caduceus-leaf", name: "Nurse Corps device", description: "An oak leaf (staff corps).", source: NAVY_STAFF_SRC },
  CHC: { glyph: "cross", name: "Chaplain Corps device", description: "A Latin cross (staff corps; faith devices vary by faith).", source: NAVY_STAFF_SRC },
  JAG: { glyph: "scales-sword", name: "Judge Advocate General's Corps device", description: "Scales of justice (staff corps).", source: NAVY_STAFF_SRC },
  SC: { glyph: "oakleaf", name: "Supply Corps device", description: "An oak leaf sprig (staff corps).", source: NAVY_STAFF_SRC },
};

/** The 8 disestablished Navy marks and 2 leadership stars never render. */
export const NAVY_EXCLUDED_MARKS = ["DT", "DK", "DM", "JO", "LI", "PH", "PC", "SK"];

const CG_SRC = "COMDTINST M1020.6 §3.D.9 (enlisted specialty marks)";

export const CG_MARKS: Record<string, JobDevice> = {
  BM: { glyph: "anchors", name: "Boatswain's Mate specialty mark", description: "Crossed anchors with crowns down.", source: CG_SRC },
  ET: { glyph: "atom", name: "Electronics Technician specialty mark", description: "A helium atom about which revolve two electrons.", source: CG_SRC },
  HS: { glyph: "caduceus", name: "Health Services Technician specialty mark", description: "A caduceus.", source: CG_SRC },
  YN: { glyph: "quills", name: "Yeoman specialty mark", description: "Crossed quill pens with nibs pointing down.", source: CG_SRC },
  MK: { glyph: "gear", name: "Machinery Technician specialty mark", description: "Face of an eight-toothed gear.", source: CG_SRC },
  AMT: { glyph: "wings-prop", name: "Aviation Maintenance Technician specialty mark", description: "A two-bladed winged propeller.", source: CG_SRC },
  AST: { glyph: "winged-shell", name: "Aviation Survival Technician specialty mark", description: "A winged flaming spherical shell with parachute.", source: CG_SRC },
  MST: { glyph: "trident-waves", name: "Marine Science Technician specialty mark", description: "A trident rising through waves.", source: CG_SRC },
  IS: { glyph: "quill-bolt", name: "Intelligence Specialist specialty mark", description: "Crossed quill and lightning bolt (the Coast Guard's own description — it differs from the Navy's).", source: CG_SRC },
  IT: { glyph: "globe-phone", name: "Information Systems Technician specialty mark", description: "A globe with a French telephone (the Coast Guard's own description — it differs from the Navy's).", source: CG_SRC },
};

const DAF_SRC = "DAFI 36-2903 (occupational badges — base device, basic level)";

export const AF_BADGES: { prefixes: string[]; device: JobDevice }[] = [
  { prefixes: ["1A"], device: { glyph: "wings", name: "Aircrew Operations occupational badge", description: "Wings with the aircrew device — base device only; star/wreath level marks are the member's own data.", source: DAF_SRC } },
  { prefixes: ["1B", "1D"], device: { glyph: "bolt-globe", name: "Cyber occupational badge", description: "Globe with lightning — the cyberspace badge family base device (incl. Cyber Defense Operations where the current DAFI lists it).", source: DAF_SRC } },
  { prefixes: ["1C"], device: { glyph: "globe-eye", name: "Command & Control occupational badge", description: "Globe with command-and-control device — base device only.", source: DAF_SRC } },
  { prefixes: ["1N"], device: { glyph: "sphinx", name: "Intelligence occupational badge", description: "The intelligence badge's base device.", source: DAF_SRC } },
  { prefixes: ["1P", "1T", "1Z"], device: { glyph: "parachute-wings", name: "Battlefield-airman / aircrew-equipment occupational badge", description: "The field's OCCUPATIONAL badge — not its beret flash, which is a cloth flash design, not the badge.", source: DAF_SRC } },
  { prefixes: ["1S"], device: { glyph: "shield-star", name: "Safety occupational badge", description: "Shield with star — base device only.", source: DAF_SRC } },
  { prefixes: ["1U", "2M"], device: { glyph: "delta-globe", name: "Space / missile occupational badge", description: "Delta over globe — base device only.", source: DAF_SRC } },
  { prefixes: ["2A", "2R", "2P"], device: { glyph: "gear-wings", name: "Maintenance occupational badge", description: "Gear with wings — the maintenance badge family base device.", source: DAF_SRC } },
  { prefixes: ["2F"], device: { glyph: "droplet", name: "Fuels occupational badge", description: "The fuels badge base device.", source: DAF_SRC } },
  { prefixes: ["2G", "2S", "2T"], device: { glyph: "globe-arrows", name: "Logistics occupational badge", description: "Globe with arrows — the logistics badge family base device.", source: DAF_SRC } },
  { prefixes: ["3E"], device: { glyph: "castle-tools", name: "Civil Engineering occupational badge", description: "The civil-engineering badge base device.", source: DAF_SRC } },
  { prefixes: ["3F", "3A", "3M", "3S"], device: { glyph: "quill-star", name: "Force Support occupational badge", description: "The force-support badge family base device.", source: DAF_SRC } },
  { prefixes: ["3N"], device: { glyph: "globe-bolt", name: "Public Affairs occupational badge", description: "The public-affairs badge base device.", source: DAF_SRC } },
  { prefixes: ["3P"], device: { glyph: "shield-star", name: "Security Forces occupational badge", description: "Shield with star — base device only.", source: DAF_SRC } },
  { prefixes: ["4"], device: { glyph: "caduceus", name: "Medical occupational badge", description: "Caduceus — the medical badge family base device.", source: DAF_SRC } },
  { prefixes: ["5R"], device: { glyph: "cross", name: "Chaplain occupational badge", description: "The chaplain badge's faith device (Latin cross shown; devices vary by faith).", source: DAF_SRC } },
  { prefixes: ["6"], device: { glyph: "atom-globe", name: "Acquisition / Finance occupational badge", description: "The acquisition/finance badge family base device.", source: DAF_SRC } },
  { prefixes: ["9S"], device: { glyph: "atom", name: "Scientific Applications occupational badge", description: "Atom — base device only.", source: DAF_SRC } },
];

export function afBadgeFor(code: string): JobDevice | null {
  const c = code.toUpperCase();
  for (const entry of AF_BADGES) {
    if (entry.prefixes.some((p) => c.startsWith(p))) return entry.device;
  }
  return null;
}

export const USMC_JOB_NOTE =
  "The Marine Corps has NO per-MOS device — verified against MCO 1020.34 ¶4001: the Eagle, Globe, and Anchor itself is the branch-of-service insignia for every Marine, and no occupational-field insignia exists in the uniform regulations or the MOS Manual. A Marine's job card therefore shows the EGA and the MOS as text. Qualification badges (parachutist, diver, EOD, aircrew) and chevron devices (the First Sergeant diamond, Master Sergeant crossed rifles) are not MOS devices and are never shown as one.";

export const TRADEMARK_NOTE =
  "All service emblems and devices are federally protected trademarks (the services' licensing programs under 10 U.S.C. §2260; the Coast Guard's under 14 U.S.C. §639). Shown here inside your own profile, they are your personal profile art — the personal-use posture. No service emblem is ever Battle Book branding: the app's icon and logo stay the olive binder, and no emblem appears in app branding or store art. A public or commercial launch requires the services' trademark licensing/permission step, which is on the Battle Book launch checklist. No service SEAL is drawn anywhere in this app — seals are reserved for official use; where a service's famous mark is its seal, only its central device is rendered, labeled as such.";

export const THEME_ABOUT_INTRO =
  "Your branch drives this app's ACCENT palette only — body text, background readability, and layout never change. Colors follow Christian's assignment rule (Nov 9, 2026): the branch's main color leads the structural accents — the masthead band, section-header rules, borders, buttons, and badges — and its secondary color carries the accented words (headings, labels, links, values), in the nearest readable shade wherever the literal color would be unreadable as text; the note below states this branch's assignment. Theming is per profile: a spouse or future-member profile themes from its linked or selected branch the same way, and any profile with no branch set uses the default olive theme. You can revert to the default olive theme at any time and re-enable branch theming; the choice saves to your profile.";
