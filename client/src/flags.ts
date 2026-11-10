// Songs, Anthem & Pledge + Flags — Part 4 data (flags), transcribed
// from the researched ceremonial pack
// (~/workspace/military-app/anthems/anthems.md, Part 4). Parts 1–3 live
// in songs.ts.
//
// SYMBOLISM DISCIPLINE (the pack's rule, binding here): symbolism
// MEANING prints ONLY where the government officially states it.
// Everywhere else the entry carries the pack's flag — no official
// per-color symbolism for Spain, Italy, or the Netherlands (beyond
// unity/independence); Türkiye's origin stories labeled LEGEND;
// Greece's nine syllables labeled TRADITION; France's
// liberty/equality/fraternity mapping labeled popular, not official;
// Norway prints only Meltzer's 1821 rationale labeled historical;
// Poland's arms derivation is official while its glosses are
// tradition; the Philippines' symbolism is the NHCP explanation (RA
// 8491 itself has no symbolism clause — stated on the entry).
//
// DRAWINGS: simple stylized renditions from the official descriptions
// (FlagArt.tsx), captioned as such. Spain's coat of arms renders
// simplified-and-labeled. NO service SEAL is ever drawn — the branch
// flags' center devices render as simplified emblem shapes, labeled.

import type { SongLink } from "./songs";

export type FlagEntry = {
  id: string;
  name: string;
  group: "United States" | "Allied";
  /** Key into FlagArt's rendition map. */
  art: string;
  /** Official proportions as published, e.g. "3:5". */
  ratio: string;
  /** The official description, as the government publishes it. */
  description: string[];
  /** Officially stated symbolism, or the labeled tradition/legend, or
   * the no-official-symbolism flag — never an unlabeled gloss. */
  symbolism?: string;
  symbolismLabel?: string;
  streamers?: string;
  facts: string[];
  flags: string[];
  links: SongLink[];
  sourceName: string;
  /** Caption for the drawing. */
  artCaption: string;
};

const STYLIZED = "Stylized rendition from the official description";
const STYLIZED_DEVICE = "Stylized rendition from the official description — center device simplified, not the seal";

export const FLAGS: FlagEntry[] = [
  /* ------------------------- 4A — United States ------------------------- */
  {
    id: "flag-us",
    name: "Flag of the United States",
    group: "United States",
    art: "us",
    ratio: "1.0 : 1.9 (EO 10834)",
    description: [
      "Design (4 U.S.C. § 1): Thirteen horizontal stripes, alternate red and white; a union of white stars on a blue field. Current form: 50 stars (one per state) in nine offset rows (alternating 6 and 5) on the blue canton (“union”); 13 stripes for the original thirteen colonies — the stripe count was fixed at 13 by the Flag Act of 1818, and the star count changes on the July 4 following a state's admission.",
      "There have been 27 official versions since the Flag Resolution of 14 June 1777 (“thirteen stripes alternate red and white… union thirteen stars, white in a blue field, representing a new constellation”). The 50-star flag was prescribed by Executive Order 10834 (21 August 1959), effective 4 July 1960 after Hawaii's admission. EO 10834 fixes proportions (hoist : fly = 1.0 : 1.9) and star geometry (union 7/13 of hoist high × 0.76 of fly long; star diameter 0.0616 of hoist). Official color names: Old Glory Red, White, Old Glory Blue. The 50-star arrangement is credited to Robert G. Heft (a 1958 high-school project) as a matter of record.",
    ],
    symbolism:
      "The familiar meanings (white = purity and innocence, red = hardiness and valor, blue = vigilance, perseverance, and justice) come from Charles Thomson's 1782 report on the Great Seal, which used the same colors. They print here as that traditional attribution — not as a flag statute.",
    symbolismLabel: "TRADITION (Thomson's 1782 Great Seal attribution)",
    facts: ["Etiquette: see the Anthem & Pledge tile (36 U.S.C. § 301) and the 4 U.S.C. §§ 1–10 summary in Traditions & Lore — not duplicated here."],
    flags: [
      "SYMBOLISM flag: The 1777 Resolution assigned NO meaning to the colors. The familiar meanings are Charles Thomson's 1782 Great Seal attribution, printed above as the traditional attribution, not as a flag statute.",
    ],
    links: [],
    sourceName: "4 U.S.C. § 1 + Executive Order 10834",
    artCaption: STYLIZED,
  },
  {
    id: "flag-army",
    name: "U.S. Army Flag",
    group: "United States",
    art: "army",
    ratio: "4 ft 4 in × 5 ft 6 in",
    description: [
      "Adoption (DOCUMENTED): Established by Executive Order 10670 (12 June 1956); dedicated and unfurled by Vice President Nixon on 14 June 1956 at Independence Hall, Philadelphia.",
      "Official description (TIOH): 4 ft 4 in hoist × 5 ft 6 in fly; white silk/rayon field; yellow fringe 2½ in. Centered: the central design of the Seal of the Department of the Army (the original War Office seal, authorized by the Continental Congress 8 May 1779) in ultramarine blue — a Roman cuirass (breastplate) over a jupon as the central element, flanked by a cannon with three cannonballs, a mortar with two powder flasks, a drum with two drumsticks, an espontoon and an organizational color on one side, and a musket with fixed bayonet on the other; an unsheathed sword rising above the cuirass supporting a Phrygian (Liberty) cap; a rattlesnake holding a scroll with the motto “THIS WE'LL DEFEND.” Below the seal, a scarlet scroll inscribed “UNITED STATES ARMY” in white letters; below the scroll, the numerals “1775” in blue.",
    ],
    symbolism:
      "Official symbolism (TIOH): The cuirass = strength and defense; the flags = the Army's role in establishing and protecting the Nation; the Phrygian cap on the sword point and the rattlesnake motto = constant readiness to defend and preserve the United States.",
    symbolismLabel: "Officially stated (TIOH)",
    streamers:
      "Streamers (summary level): 190 campaign streamers on the Army flag staff (TIOH current count, Nov 2026 — the count grows as campaigns are authorized; a 41-streamer modified set is used on display/ceremonial flags in some circumstances per AR 840-10). Each streamer is in the colors of the campaign ribbon for that war, embroidered with the campaign designation and year; first streamer LEXINGTON 1775, most recent on the TIOH page ABEYANCE 2014–2015.",
    facts: ["Note: The Army Field Flag (approved 12 April 1962) inverts the colors — white seal/scroll on a blue field, scarlet “UNITED STATES ARMY” letters."],
    flags: [],
    links: [
      { label: "U.S. Army flag (TIOH catalog)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15639&CategoryId=9360&grp=2&menu=Uniformed%20Services&from=search" },
      { label: "Executive Order 10670 (National Archives)", url: "https://www.archives.gov/federal-register/codification/executive-order/10670.html" },
    ],
    sourceName: "The Institute of Heraldry (TIOH) + Executive Order 10670",
    artCaption: STYLIZED_DEVICE,
  },
  {
    id: "flag-usmc",
    name: "Battle Color of the United States Marine Corps",
    group: "United States",
    art: "usmc",
    ratio: "Ceremonial, gold fringe (indoor)",
    description: [
      "Official name: “Battle Color of the United States Marine Corps” (also called the Marine Corps standard).",
      "Adoption (DOCUMENTED): The current design was adopted 18 January 1939. Scarlet and gold had been made the official Corps colors by Marine Corps Order No. 4, 18 April 1925.",
      "Official description: Scarlet field; the Eagle, Globe, and Anchor in gray and gold centered; below the emblem a flowing banner/streamer inscribed “UNITED STATES MARINE CORPS” in scarlet lettering. The ceremonial/indoor version is trimmed with gold fringe (2½ in) on three sides; the outdoor version is plain. The official Battle Color is maintained by Marine Barracks Washington (“8th and I”) and carried by the Color Sergeant of the Marine Corps. The staff also carries silver bands engraved with the names of conflicts in which the Corps has engaged (practice since 3 November 1939, per MCO 157), in addition to streamers.",
    ],
    streamers:
      "Streamers (summary level, at the level marines.mil summarizes): The Battle Color carries the full authorized set of multi-colored battle streamers (each 3 ft × 2¾ in) for the Corps' campaigns and decorations — 50+ authorized streamers; the Battle Color displays the complete set. Counts in official summaries vary by date; printed at this summary level, Nov 2026.",
    facts: [],
    flags: [
      "Adoption-date variant: some reference summaries give an April 18, 1939 date associated with Commandant Shepherd's era — 18 January 1939 prints as the adoption of record, with the variant flagged. Size variance: official battle color dimensions are cited at 52 in hoist in some sources and 55 in in some MCO-derived summaries — the 52 vs 55 in variance is flagged rather than silently picked.",
    ],
    links: [],
    sourceName: "U.S. Marine Corps official descriptions (marines.mil / MCO 157)",
    artCaption: STYLIZED_DEVICE,
  },
  {
    id: "flag-navy",
    name: "U.S. Navy Flag",
    group: "United States",
    art: "navy",
    ratio: "4 ft 4 in × 5 ft 6 in",
    description: [
      "Adoption (DOCUMENTED): Authorized by President Eisenhower by Executive Order 10812, 24 April 1959; publicly introduced 30 April 1959 at Naval Support Facility Carderock, Maryland. Before 1959 the Navy had no official flag (the Infantry Battalion flag served unofficially).",
      "Official description (EO 10812, verbatim substance): 4 ft 4 in hoist × 5 ft 6 in fly; dark blue material; yellow fringe 2½ in wide. In the center, a device 3 ft 1 in overall consisting of the inner pictorial portion of the Seal of the Department of the Navy — with the land area of the seal replaced by a continuation of the sea (the flag is for the Navy only; the seal also serves the Marine Corps) — in proper colors within a circular yellow rope edging 2 ft 6 in in diameter, above a yellow scroll inscribed “UNITED STATES NAVY” in dark blue letters. The seal device: a square-rigged sailing ship (modeled on USS Constitution, flying a commission pennant, the national ensign, and a commodore's flag) on the sea, with a Luce-type anchor and an American bald eagle in the foreground, one foot on the anchor.",
      "Use note: U.S. Navy ships are NOT authorized to fly the Navy flag; it is a shore/ceremonial flag.",
    ],
    streamers:
      "Streamers (summary level): The Navy flies 36 battle streamers for its campaigns, as published by Naval History and Heritage Command (the NHHC-published count).",
    facts: [],
    flags: [],
    links: [],
    sourceName: "Executive Order 10812 (as published in U.S. Naval Institute Proceedings, Sept 1959) + NHHC",
    artCaption: STYLIZED_DEVICE,
  },
  {
    id: "flag-af",
    name: "U.S. Air Force Flag (Ceremonial Departmental Flag)",
    group: "United States",
    art: "af",
    ratio: "33:26 (4 ft 4 in × 5 ft 6 in ceremonial)",
    description: [
      "Official name: the Ceremonial Departmental Flag of the Department of the Air Force. Description of record: AFHRA Organizational History Branch.",
      "Adoption (DOCUMENTED): Approved by President Harry S. Truman 26 March 1951; design by Dorothy G. Gatchell (crest and shield designed by Arthur E. Dubois). First public appearance 31 March 1951; first officially published description AFM 900-2 (1 October 1951). Unchanged since 1951.",
      "Official description: Ultramarine blue field, 4 ft 4 in × 5 ft 6 in (ceremonial size; ratio 33:26), trimmed on three edges with 2½-in yellow silk fringe. Centered, the Air Force Coat of Arms (crest and shield) encircled by thirteen white five-pointed stars: the crest is an American bald eagle with wings outstretched before a cloud formation, above a wreath of six alternate silver and blue folds; the shield bears a stylized gold thunderbolt (vertical, with wings/flames) on a blue-over-cloud (“nebuly”) field. Beneath the shield, a scroll inscribed “UNITED STATES AIR FORCE” in gold lettering.",
    ],
    symbolism:
      "Official symbolism (AFHRA): The 13 stars = the 13 original colonies; the three stars grouped at the top within the eagle's wings = the three Departments of the (then) National Military Establishment (Army, Navy, Air Force); the cloud formation = the creation of a new firmament; ultramarine blue and golden yellow are the official Air Force colors.",
    symbolismLabel: "Officially stated (AFHRA)",
    streamers:
      "Streamers (summary level): The ceremonial departmental flag is dressed with campaign streamers in presentation form (verified combat credit entitles organizations to embroidered campaign streamers; organizational service streamers are not embroidered). No headquarters count is published the way TIOH publishes the Army's — stated at this level. A smaller (4:3) organizational variant carries no streamers or fringe.",
    facts: [],
    flags: [],
    links: [],
    sourceName: "AFHRA Organizational History Branch",
    artCaption: STYLIZED_DEVICE,
  },
  {
    id: "flag-sf",
    name: "U.S. Space Force Flag",
    group: "United States",
    art: "sf",
    ratio: "Platinum fringe",
    description: [
      "Adoption (DOCUMENTED): Unveiled 15 May 2020 in an Oval Office ceremony by Chief of Space Operations Gen. John W. Raymond and CMSgtSF Roger A. Towberman. Design by The Institute of Heraldry; official heraldry text as released by the U.S. Space Force, May 2020.",
      "Official description: Black field, fringed in platinum. The central and supporting elements of the Seal of the U.S. Space Force: a silver Delta Wing (delta/globe symbol) enclosing a globe, encircled by an elliptical orbit, with the white Polaris star above and star clusters flanking. Beneath the imagery, “UNITED STATES SPACE FORCE” and the Roman numerals “MMXIX” (2019, the service's founding year) in white lettering.",
    ],
    symbolism:
      "Official heraldry (TIOH text, verbatim substance): “Dark blue and white combine to represent the vast recesses of outer space. The Delta Wing evokes historic ties to the earliest days of the U.S. Air Force space community, and symbolizes change and innovation… Dark and light shades of grey within the delta embody the 24/7 operations of the Space Force… The Globe represents the terrestrial home of the U.S. Space Force and its support to the joint warfighters. The Elliptical Orbit [around the globe] signifies defense and protection from all adversaries and threats emanating from the space domain. The white Polaris symbolizes the guiding light of security and alludes to a constant presence and vigilance in space now and in the future.”",
    symbolismLabel: "Officially stated (TIOH heraldry text)",
    streamers: "Streamers: None published — the service dates to 2019 and no campaign streamer set of record was found. Stated plainly.",
    facts: [],
    flags: [],
    links: [],
    sourceName: "U.S. Space Force / The Institute of Heraldry (May 2020 release)",
    artCaption: STYLIZED_DEVICE,
  },
  {
    id: "flag-cg",
    name: "Coast Guard Standard (and Ensign)",
    group: "United States",
    art: "cg",
    ratio: "4 ft 4 in × 5 ft 6 in",
    description: [
      "The Coast Guard is unique among the services in having two official flags.",
      "The Standard (the ceremonial/parade flag; current form officially adopted 28 January 1964): White field, 4 ft 4 in × 5 ft 6 in, yellow/gold fringe. Centered, the dark blue Coat of Arms of the United States (American eagle with shield — the shield has a blue chief over vertical red and white stripes — olive branch and arrows). Inscribed in an arc above the eagle: “UNITED STATES COAST GUARD” in dark blue. Below the eagle: the motto “SEMPER PARATUS,” and beneath that the numerals “1790” (the year the Revenue Cutter Service, the service's ancestor, was founded), all in dark blue.",
      "The Ensign (one line): flown by cutters as the mark of law-enforcement authority, never as a parade standard — white with 16 vertical red stripes (for the 16 states of 1799; ordered 1 August 1799 by Secretary of the Treasury Oliver Wolcott Jr.), a white canton bearing the U.S. Coat of Arms in dark blue, and the Coast Guard badge in the fly.",
    ],
    streamers:
      "Streamers (summary level): The Standard carries the battle honors and is adorned with the Coast Guard's 34 battle streamers. Like other U.S. military colors, it is always carried/displayed with the National Color, never alone.",
    facts: [],
    flags: [
      "Nomenclature (build-time check, Nov 2026 — confirmed): some summaries describe the Standard's center device as the “dark blue Great Seal of the United States,” while the service's own description says the Coat of Arms (eagle). The service wording — Coat of Arms — prints here, with the variant flagged. It is never rendered as “Great Seal” in this section.",
    ],
    links: [],
    sourceName: "U.S. Coast Guard official description of the Standard",
    artCaption: STYLIZED_DEVICE,
  },

  /* --------------------------- 4B — Allied --------------------------- */
  {
    id: "flag-de",
    name: "Germany — Bundesflagge",
    group: "Allied",
    art: "de",
    ratio: "3:5",
    description: [
      "Design: Horizontal tricolor — three equal horizontal bands black, red, gold (top to bottom). Proportions 3:5. Basic Law Article 22(2): “Die Bundesflagge ist schwarz-rot-gold” (in force 23 May 1949).",
      "Note (one line): The federal service flag (Bundesdienstflagge) adds the federal shield with the black eagle — government authorities only.",
    ],
    symbolism:
      "Per the German Bundestag's official account: the colors are those of the unity-and-freedom movement — first carried by the Jena Urburschenschaft (1815), declared federal colors in 1848, the colors of the Weimar Republic, and restored in 1949 expressly as the symbol of unity and freedom and of the democratic tradition (Bergsträsser in the Parlamentarischer Rat: “The tradition of black, red and gold is unity and freedom”). TRADITION (as the Bundestag frames it): the popular derivation from the Lützow Free Corps' uniforms (black coats, red facings, gold buttons) and the saying “through the darkness (black) of servitude, through bloody (red) battle, to the golden light of freedom.”",
    symbolismLabel: "Officially stated (Bundestag), with the Lützow derivation labeled TRADITION",
    facts: [],
    flags: [],
    links: [{ label: "Die Bundesflagge (Deutscher Bundestag)", url: "https://www.bundestag.de/parlament/symbole/flagge/flagge-199334" }],
    sourceName: "Deutscher Bundestag",
    artCaption: STYLIZED,
  },
  {
    id: "flag-no",
    name: "Norway — Norges flagg",
    group: "Allied",
    art: "no",
    ratio: "8:11",
    description: [
      "Design: Red field with a blue Nordic cross outlined in white (Scandinavian cross reaching the edges, shifted toward the hoist). Proportions 8:11. (State flag 16:27 swallowtail variant for state/military use — one line.)",
      "Adoption (DOCUMENTED): Designed by Fredrik Meltzer; adopted by the Storting in 1821 (approved by royal resolution 13 July 1821).",
    ],
    symbolism:
      "No modern statutory symbolism statement exists. Meltzer's stated rationale (historical, labeled as such): red, white, and blue as the colors of freedom, as in the French and American flags, combined with the cross shared with Denmark and Sweden; the cross is the common Nordic/Christian cross.",
    symbolismLabel: "Historical only — Meltzer's 1821 rationale (the Storting's own account confirms he argued for red, white and blue as “the colours of liberty… used on the revolutionary flags of France and the United States of America”)",
    facts: [],
    flags: [
      "Traditional per-color readings (red = strength, white = purity, blue = loyalty) are explicitly NOT officially fixed — only Meltzer's 1821 rationale prints, labeled historical. Official page (build-time verification, Nov 2026): the Storting's own flag page — “The Norwegian flag,” stortinget.no — verified live and linked on this card; it confirms the Meltzer history above.",
    ],
    links: [{ label: "The Norwegian flag (The Storting)", url: "https://stortinget.no/no/english/About-the-Storting/the-norwegian-flag/" }],
    sourceName: "The Storting (stortinget.no)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-ca",
    name: "Canada — National Flag of Canada",
    group: "Allied",
    art: "ca",
    ratio: "2:1",
    description: [
      "Design (per the Government of Canada, Canadian Heritage): a red flag twice as long as it is wide (2:1); in its centre a white square the width of the flag, with a single stylized 11-point red maple leaf in the centre; horizontally symmetric. Blazon: “Gules on a Canadian pale Argent a maple leaf Gules.”",
      "Adoption (DOCUMENTED): Approved by Parliament in 1964; ratified by royal proclamation of Queen Elizabeth II on 28 January 1965; first hoisted 15 February 1965.",
    ],
    symbolism:
      "Officially stated: Red and white are Canada's national colours (proclaimed by King George V in 1921), historically used by nations that contributed to Canada's founding; the maple leaf is Canada's emblem. (Design fact from the standards record: the leaf was wind-tunnel simplified from 13 points to 11 for clarity at a distance.) Depictions must respect the 2:1 proportion, the colours, and the 11-point leaf (protected under the Trademarks Act); manufacturing standards CAN/CGSB-98.1/98.2/98.3-2023.",
    symbolismLabel: "Officially stated (Canadian Heritage)",
    facts: [],
    flags: [],
    links: [{ label: "Description of the National Flag of Canada (Government of Canada)", url: "https://www.canada.ca/en/canadian-heritage/services/flag-canada-description.html" }],
    sourceName: "Government of Canada — Canadian Heritage",
    artCaption: STYLIZED,
  },
  {
    id: "flag-uk",
    name: "United Kingdom — the Union Flag (Union Jack)",
    group: "Allied",
    art: "uk",
    ratio: "3:5 (1:2 also in official use)",
    description: [
      "Design: Proportions 3:5 (1:2 also in official use). Per The Royal Family (official): the flag combines the crosses of the three countries united under one Sovereign — the red cross of St George (England; patron saint since the 1270s) on white, combined with the white diagonal cross (saltire) of St Andrew (Scotland) on a blue ground in 1606 under James I; the red diagonal saltire of St Patrick (Ireland) added after the Act of Union with Ireland, 1 January 1801, creating the flag flown ever since. Originally a Royal flag, ordered in 1801 to be flown on all the King's forts and castles.",
      "Blazon of record (1801 proclamation): “Azure, the Crosses Saltires of St. Andrew and St. Patrick Quarterly per Saltire, counterchanged Argent and Gules; the latter fimbriated of the Second, surmounted by the Cross of St. George of the Third, fimbriated as the Saltire.” Construction facts: St George's cross width = 1/5 of the hoist, with a 1/15 white fimbriation; in the hoist-side upper quarter the white saltire of St Andrew sits above the red saltire of St Patrick — the flag is not vertically symmetric, and hoist-side orientation matters.",
    ],
    facts: [],
    flags: [
      "Status flag: No statute ever made it the national flag; it is the national flag by usage (royal.uk calls it “the national flag of the United Kingdom”) — the same status-by-custom flag the UK anthem entry carries.",
    ],
    links: [{ label: "The Union Jack (The Royal Family)", url: "https://www.royal.uk/union-jack" }],
    sourceName: "The Royal Family (royal.uk)",
    artCaption: "Stylized rendition — saltire offset simplified",
  },
  {
    id: "flag-dk",
    name: "Denmark — Dannebrog",
    group: "Allied",
    art: "dk",
    ratio: "28:37 (civil)",
    description: [
      "Design: Red field with a white Nordic cross shifted toward the hoist, extending to the edges. Proportions 28:37 (civil).",
      "Adoption/history: One of the oldest national flags in continuous use (documented from the 14th–15th centuries; a white-on-red cross banner is attested for the kings of Denmark since the 14th century). The swallowtail Splitflag is the state/naval variant — one line.",
      "Symbolism: The cross = the Christian cross (official framing). No official per-color symbolism beyond that.",
    ],
    facts: [],
    flags: [
      "LEGEND — labeled as Danish official storytelling itself presents it: the flag fell from the sky at the Battle of Lyndanisse, 1219, turning the battle for Valdemar II.",
      "Official page (build-time verification, Nov 2026): kongehuset.dk publishes the Royal House's Dannebrog flags (the royal flags pages) but no dedicated civil-flag description page surfaced in the research pass or the build-time re-check — the design above stands on the settled official description, and this flag stays printed rather than a URL being claimed.",
    ],
    links: [{ label: "The Royal Flags (The Royal House of Denmark)", url: "https://www.kongehuset.dk/en/the-monarchy-in-denmark/the-royal-symbols/the-royal-flags/" }],
    sourceName: "The Royal House of Denmark (kongehuset.dk)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-fr",
    name: "France — Le Drapeau Tricolore",
    group: "Allied",
    art: "fr",
    ratio: "2:3",
    description: [
      "Design: Vertical tricolor — three equal vertical bands blue (hoist), white, red. It is the only national emblem defined by Article 2 of the Constitution of the Fifth Republic.",
      "Official account (Élysée): the tricolor was born in the Revolution from the union of the king's color (white) with the colors of the City of Paris (blue and red); first a cockade. In autumn 1790 the Constituent Assembly put a three-band flag on warships and merchant ships (then red at the hoist, a wider white center, blue outside); the flag took its definitive form by decree of the National Convention on 15 February 1794: the three national colors in vertical bands “so that the blue is attached to the hoist, the white in the middle, and the red flies free.”",
    ],
    symbolism:
      "The Élysée's symbolism is the king-and-people alliance, “the symbol of a united France.” The Lafayette/Louis XVI cockade story is told by the Élysée as “on raconte” — printed as TRADITION, as the Élysée frames it.",
    symbolismLabel: "Officially stated (Élysée); cockade story TRADITION",
    facts: [],
    flags: [
      "The popular mapping blue = liberty, white = equality, red = fraternity is a later popular interpretation, NOT an official meaning — it is not printed as official anywhere in this section.",
    ],
    links: [{ label: "Le drapeau français (Élysée)", url: "https://www.elysee.fr/la-presidence/le-drapeau-francais" }],
    sourceName: "Présidence de la République (Élysée)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-au",
    name: "Australia — Australian National Flag",
    group: "Allied",
    art: "au",
    ratio: "1:2",
    description: [
      "Design (per the Department of the Prime Minister and Cabinet, Australian Flags booklet): dark blue field (proportion 1:2) with three elements: (1) the Union Jack in the upper hoist quarter (canton); (2) the Commonwealth Star below the canton; (3) the Southern Cross in the fly.",
      "History (DOCUMENTED): First flown 3 September 1901 (now Australian National Flag Day); defined by the Flags Act 1953.",
    ],
    symbolism:
      "Officially stated (per PM&C): The Union Jack acknowledges the history of British settlement in Australia. The Commonwealth Star symbolises Australia's federal system of government — created in 1901 with six points for the six states (formerly colonies); the seventh point was added in 1908 to represent the Commonwealth territories. The Southern Cross = four seven-pointed stars plus a smaller five-pointed star in the fly, its stars named for the first five letters of the Greek alphabet in brightness order (Alpha, Beta, Gamma, Delta, Epsilon Crucis). Colors: Blue PANTONE 280, Red PANTONE 185.",
    symbolismLabel: "Officially stated (PM&C)",
    facts: [],
    flags: [],
    links: [{ label: "The Australian National Flag (PM&C — Australian Flags booklet)", url: "https://www.pmc.gov.au/resources/australian-flags-booklet/part-1-australian-national-flag" }],
    sourceName: "Department of the Prime Minister and Cabinet (Australia)",
    artCaption: "Stylized rendition from the official description — canton simplified",
  },
  {
    id: "flag-nz",
    name: "New Zealand — the New Zealand Ensign",
    group: "Allied",
    art: "nz",
    ratio: "1:2",
    description: [
      "Design: A British Blue Ensign (Te Ara / Ministry for Culture and Heritage of record): royal blue field (1:2) with the Union Jack in the canton and, in the fly, four five-pointed red stars with white borders representing the Southern Cross constellation (the four brightest stars: Acrux, Mimosa, Gacrux, Delta Crucis). Colors specified as Pantone 280 C blue, 186 C red, white.",
      "History (per Te Ara, the official encyclopedia): Derived from the maritime Blue Ensign; the four red stars were added in 1869 (design attributed to Lt. Albert Hastings Markham) to distinguish New Zealand's ensign; an 1899 version put the stars on a white disc (dropped); legislation passed in 1901 (New Zealand Ensign Act 1901) made the disc-less Blue Ensign with the Southern Cross the official flag — statutory recognition 1902. (Māori name recorded: te haki o Aotearoa.)",
    ],
    symbolism:
      "Officially stated: The Union Jack records New Zealand's British ties/heritage; the Southern Cross fixes the country's position in the South Pacific / southern hemisphere.",
    symbolismLabel: "Officially stated (Te Ara / MCH)",
    facts: [],
    flags: [
      "Date variance: official-adjacent records vary between 24 March 1902 and 12 June 1902 for the date the Act/gazette notice took effect — 1902 prints with the variance flagged.",
    ],
    links: [],
    sourceName: "Te Ara / Ministry for Culture and Heritage (New Zealand)",
    artCaption: "Stylized rendition from the official description — canton simplified",
  },
  {
    id: "flag-jp",
    name: "Japan — Nisshōki (日章旗) / Hinomaru (日の丸)",
    group: "Allied",
    art: "jp",
    ratio: "2:3",
    description: [
      "Design: A crimson-red disc centered on a white rectangular field; proportions 2:3; disc diameter = three-fifths of the flag's height, exactly centered — Act on National Flag and Anthem, Act No. 127 of 1999, Appended Sheet 1 (in force 13 August 1999). The Act does not define exact color shades (specified separately by the Ministry of Defense in 2008). Earlier 1870 specifications (7:10, disc offset toward the hoist) remain permitted for existing flags under the Act. Official names: Nisshōki (“sun-emblem flag”); popularly Hinomaru (“circle of the sun”).",
    ],
    symbolism: "Officially stated: The disc represents the sun (Japan as the land of the rising sun). No further official color symbolism is published — kept to that.",
    symbolismLabel: "Officially stated",
    facts: [],
    flags: [],
    links: [],
    sourceName: "Act on National Flag and Anthem (Japan, Act No. 127 of 1999)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-gr",
    name: "Greece — Galanólefki (Γαλανόλευκη)",
    group: "Allied",
    art: "gr",
    ratio: "2:3",
    description: [
      "Design: Blue and white — a blue canton with a white cross, and nine horizontal stripes alternating blue and white (five blue, four white), proportions 2:3. The canton is a square spanning the top five stripes; the cross arms are one stripe wide (Law 851/1978).",
      "Adoption (DOCUMENTED): The blue-and-white patterns were established by the First National Assembly at Epidaurus in 1822 (the striped version began as the sea flag; the plain cross version served on land). The current striped form became the single national flag under Law 851/1978 (22 December 1978), fixing the 2:3 proportion.",
    ],
    symbolism:
      "The cross symbolizes Eastern Orthodox Christianity (the standard official description). The famous reading of the nine stripes as the nine syllables of the War of Independence motto “Ελευθερία ή Θάνατος” (Eleftheria i Thanatos, “Freedom or Death”) is popular tradition — it has never been confirmed by an official source, and prints labeled TRADITION. Likewise “blue and white = the Greek sky and sea” is an interpretation, not an official statement.",
    symbolismLabel: "Cross officially described; nine-syllables reading TRADITION (never officially confirmed)",
    facts: [],
    flags: [
      "Official page (build-time verification, Nov 2026): the Presidency of the Hellenic Republic's flag page — “The Flag,” presidency.gr — verified live and linked on this card; its description (nine horizontal stripes, five blue and four white alternating; a blue canton stretching along the first five stripes containing a white cross) matches the design above.",
    ],
    links: [{ label: "The Flag (Presidency of the Hellenic Republic)", url: "https://www.presidency.gr/en/presidency/the-flag/" }],
    sourceName: "Presidency of the Hellenic Republic (presidency.gr) + Law 851/1978",
    artCaption: STYLIZED,
  },
  {
    id: "flag-nl",
    name: "Netherlands — Vlag van Nederland",
    group: "Allied",
    art: "nl",
    ratio: "2:3 (customary)",
    description: [
      "Design: Horizontal tricolor — three equal bands red (bright vermilion), white, cobalt blue, proportions 2:3 (customary; the 1937 flag bill that would have fixed the ratio in law was not enacted). Among the oldest tricolors in continuous use — evolved in the early 17th century from the orange-white-blue Prinsenvlag into the red-white-blue Statenvlag. Royal Decree of 19 February 1937 (Queen Wilhelmina; the shortest royal decree) reaffirmed the colors: “De kleuren van de vlag van het Koninkrijk der Nederlanden zijn rood, wit en blauw.” Exact color parameters were defined in 1949 (Ministry of the Navy) and standardized as NEN 3055.",
    ],
    symbolism:
      "The flag is officially described (in the flag instruction) as the symbol of the unity and independence of the Kingdom. No official per-color symbolism statement exists — heraldic-tradition readings of the colors exist but are not an official Dutch government statement. Design + the unity/independence statement only.",
    symbolismLabel: "No official per-color symbolism statement (flagged)",
    facts: [],
    flags: [
      "Official page (build-time check, Nov 2026): the Rijksoverheid flag instruction (vlaginstructie) is the official source of record; the government flag page did not surface flag-symbolism text in the research pass or the build-time re-check — the entry prints design + the unity/independence statement only, as flagged.",
    ],
    links: [],
    sourceName: "Rijksoverheid flag instruction (vlaginstructie)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-it",
    name: "Italy — Il Tricolore",
    group: "Allied",
    art: "it",
    ratio: "2:3",
    description: [
      "Design: Vertical tricolor — three equal vertical bands green (hoist), white, red; proportions 2:3. Defined by Constitution Article 12 (in force 1 January 1948): “La bandiera della Repubblica è il tricolore italiano: verde, bianco e rosso, a tre bande verticali di eguali dimensioni.”",
      "History (DOCUMENTED, per the Quirinale): the tricolor was born at Reggio Emilia on 7 January 1797, when the Parliament of the Cispadane Republic, on deputy Giuseppe Compagnoni's proposal, decreed the green-white-red standard “universal.” The Quirinale traces the colors to civic Milan: white and red from the city's ancient emblem (red cross on white), green from the uniforms of Milan's civic guard. After the Republic's birth, a presidential legislative decree of 19 June 1946 set the flag's provisional form, confirmed by the Constituent Assembly on 24 March 1947 and placed in Article 12 of the Constitution.",
      "Note: The war flag adds the military coat of arms — out of scope (not presented here as a national-flag variant).",
    ],
    facts: [],
    flags: [
      "Symbolism: NO official per-color symbolism statement. The famous mappings (green = the plains/hope, white = the Alps/faith, red = the blood of the fallen/charity) are popular tradition — they are not printed as official anywhere in this section.",
    ],
    links: [{ label: "Il Tricolore (Quirinale)", url: "https://www.quirinale.it/it/pagine/simboli-repubblica-tricolore" }],
    sourceName: "Presidency of the Italian Republic (Quirinale) + Constitution Art. 12",
    artCaption: STYLIZED,
  },
  {
    id: "flag-es",
    name: "Spain — Bandera de España",
    group: "Allied",
    art: "es",
    ratio: "2:3",
    description: [
      "Design: Horizontal tricolor — red, yellow (double-width center band), red (1:2:1), proportions 2:3, with the coat of arms on the yellow band toward the hoist (centered vertically; its center at 1/3 of the flag's length from the hoist; arms height = 2/5 of the flag's width per the official model). Constitution Article 4.1 (1978) defines the flag as three horizontal stripes, red, yellow and red, the yellow being double the width of each red stripe. The red-yellow-red dates to 1785 (Carlos III's naval ensign). The arms on the flag are governed by Law 39/1981; the current arms model was published 19 December 1981 (Law 33/1981; Royal Decree 2964/1981).",
      "The coat of arms (official model, Law 33/1981 as amended): Quarterly shield — Castile (gold castle on red), León (purple lion on silver), Aragon (red pallets on gold), Navarre (gold chains on red), with Granada (a pomegranate) in base and a central inescutcheon of Bourbon-Anjou (gold fleurs-de-lis on blue); the Pillars of Hercules flanking, with the motto PLUS ULTRA; the royal crown above. (The 1981 arms simplified an earlier version.)",
    ],
    symbolism:
      "Law 39/1981 states the flag symbolizes the nation and is a sign of sovereignty, independence, unity, and integrity of the homeland — that is the official symbolism statement. NO official per-color symbolism statement exists, and none is printed.",
    symbolismLabel: "Official statement is the Law 39/1981 nation statement only; per-color: none (flagged)",
    facts: [],
    flags: [],
    links: [],
    sourceName: "Constitution Art. 4.1 + Laws 39/1981 and 33/1981 (Spain)",
    artCaption: "Stylized rendition — coat of arms simplified and labeled, not to scale",
  },
  {
    id: "flag-pl",
    name: "Poland — Flaga Polski",
    group: "Allied",
    art: "pl",
    ratio: "5:8",
    description: [
      "Design: Horizontal bicolor — two equal bands white over red, proportions 5:8. The colors are the national colors under Constitution Article 28 and the Act of 31 January 1980 on the emblem, colors and anthem of the Republic of Poland. The Act defines the flag as a rectangular cloth in the colors of the Republic, proportions 5:8 (the 5:8 ratio was set by the Act of 1 August 1919). The statutory red is crimson, and the statutory “white” is a silver-white, per the Act's annexed color coordinates.",
      "Variant (one line): The state flag with the coat of arms centered in the white band is reserved for official use abroad and at sea (and Polish representations/missions); the plain bicolor is the national flag.",
    ],
    symbolism:
      "Officially derivable — and stated on gov.pl: the colors ARE the national colors taken from the coat of arms — per the government's own explanation (gov.pl / powroty.gov.pl), the upper white band represents the white eagle, the lower red band the red field of the shield — the eagle, as the charge, outranks the field, which is why white is on top. Heraldic glosses published on the same government pages (white = silver/water, purity; red = fire and blood, courage and valor) are heraldic tradition — labeled as such. Beyond the arms derivation, the government publishes no separate per-color symbolism statement.",
    symbolismLabel: "Arms derivation official (gov.pl); further glosses heraldic TRADITION",
    facts: [],
    flags: [],
    links: [{ label: "National symbols explainer (gov.pl / powroty.gov.pl)", url: "https://powroty.gov.pl" }],
    sourceName: "Polish government (gov.pl / powroty.gov.pl) + Act of 31 January 1980",
    artCaption: STYLIZED,
  },
  {
    id: "flag-tr",
    name: "Türkiye — Türk Bayrağı (Ay Yıldız)",
    group: "Allied",
    art: "tr",
    ratio: "1 : 1.5",
    description: [
      "Design: Red field with a white crescent and five-pointed star (the ay yıldız). Geometry is fixed by the Turkish Flag Law No. 2893 (accepted 22 September 1983) and the Flag Regulation (25 January 1985): the crescent's outer and inner circles, the star's position, and the 1 : 1.5 proportions are all specified in the law's annexed chart. Constitution Article 3 (1982) describes the flag as “the white crescent-and-star red flag whose form is specified by law.” Official color values are codified (Regulation Article 3 gives the red's colorimetric coordinates — on the Ministry of Culture and Tourism page).",
    ],
    facts: [],
    flags: [
      "Symbolism: The Turkish government publishes NO official symbolism statement for the crescent and star — design only, flagged. The popular origin stories (a reflection in blood after a battle; a dream of Osman) are LEGEND and are not printed as fact.",
    ],
    links: [{ label: "Türk Bayrağı ve İstiklal Marşı (Ministry of Culture and Tourism)", url: "https://hukuk.ktb.gov.tr/TR-137640/turk-bayragi-ve-istiklal-marsi.html" }],
    sourceName: "Turkish Flag Law No. 2893 + Ministry of Culture and Tourism",
    artCaption: "Stylized rendition per the Flag Law's chart (summary level)",
  },
  {
    id: "flag-kr",
    name: "South Korea — Taegeukgi (태극기)",
    group: "Allied",
    art: "kr",
    ratio: "3:2",
    description: [
      "Design: White rectangular field (3:2) with a centered taegeuk circle (red upper / blue lower halves divided by an S-curve) surrounded by four black trigrams, one in each corner.",
      "Adoption (as the government states it): By royal order of King Gojong on 6 March 1883, the flag of Park Yeong-hyo's design (taegeuk center, four trigrams) was promulgated as the national flag; retained and standardized by the Republic of Korea after its 1948 founding; the current construction is governed by the Act on the National Flag of the Republic of Korea (January 2007) and its Enforcement Decree.",
    ],
    symbolism:
      "Officially stated (per the Ministry of the Interior and Safety / Office for Government Policy Coordination): “The white background represents brightness, purity, and peace, qualities that are highly valued by the people. The taegeuk… denotes the harmony between the negative cosmic forces (yin: blue portion) and the positive cosmic forces (yang: red portion), depicting the truth of nature that all things are created and evolve through the interaction of yin and yang. The four black trigrams are specific representations of the movement and harmony of these forces… the geon symbolizes the sky, the gon the earth, the gam water, and the ri fire. Together, they create harmony around the taegeuk mark.” Trigram placement: geon (☰, three solid bars) upper hoist; gam (☵, broken–solid–broken) upper fly; ri (☲, solid–broken–solid) lower hoist; gon (☷, three broken bars) lower fly.",
    symbolismLabel: "Officially stated (MOIS)",
    facts: [],
    flags: [],
    links: [{ label: "National symbols — the Taegeukgi (Ministry of the Interior and Safety)", url: "https://www.mois.go.kr/eng/sub/a03/nationalSymbol/screen.do" }],
    sourceName: "Ministry of the Interior and Safety (South Korea)",
    artCaption: STYLIZED,
  },
  {
    id: "flag-ph",
    name: "Philippines — Pambansang Watawat",
    group: "Allied",
    art: "ph",
    ratio: "1:2",
    description: [
      "Design and specifications — from statute, RA 8491 §§4, 27, 28 (Official Gazette). §4: “The flag of the Philippines shall be blue, white and red with an eight-rayed golden-yellow sun and three five-pointed stars, as consecrated and honored by the people.” Design: two horizontal bands, blue over scarlet-red, with a white equilateral triangle at the hoist; inside the triangle a golden-yellow sun with eight rays and a five-pointed golden star at each vertex of the triangle. §27 proportions: width 1, length 2, sides of the white triangle 1. §28 official colors by cable numbers: blue Cable No. 80173, white 80001, red 80108, golden yellow 80068. §10 display rule of note: blue field on top in time of peace, red on top in time of war.",
    ],
    symbolism:
      "The official explanation published by the National Historical Commission of the Philippines (the “Institute” under the Act): the eight sun rays = the eight provinces that first rose in revolt against Spain; the three stars = Luzon, Visayas, and Mindanao; blue = peace, truth, and justice; red = patriotism and valor; white = liberty, equality, and fraternity; the triangle = the Katipunan's ideals (equality/liberty/fraternity framing). Printed labeled as the NHCP official explanation — RA 8491 itself (§4) prescribes the design without a symbolism clause, and that is stated here plainly.",
    symbolismLabel: "NHCP official explanation (the Act itself has NO symbolism clause)",
    facts: [],
    flags: [],
    links: [{ label: "Republic Act No. 8491 (Official Gazette)", url: "https://www.officialgazette.gov.ph/1998/02/12/republic-act-no-8491/" }],
    sourceName: "Republic Act No. 8491 (Official Gazette) + NHCP explanation",
    artCaption: STYLIZED,
  },
];
