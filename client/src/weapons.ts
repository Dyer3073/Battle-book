// Weapons & Qualification — static reference data transcribed from
// the researched weapons pack (~/workspace/military-app/weapons/
// weapons.md, researched Nov 9, 2026, official/public sources only).
//
// The pack's rules are baked into this data — do not "fix" them:
// - Specifications appear ONLY where an official public fact file
//   publishes them (15 of 28 systems), copied verbatim with the fact
//   file cited. The 13 systems with no official fact file carry the
//   pack's "no official fact file found — specifications not stated"
//   treatment and NO numbers.
// - Where official sources conflict (pack Flags A-1–A-6), both figures
//   print and the conflict renders as a SOURCE FLAG — never blended,
//   never averaged.
// - The USMC TBS student-handout figures quarantined in the pack's
//   Part A annex (M2A1 / Mk 19) are NOT app content and appear
//   nowhere in this file.
// - Zeroing content comes only from the two Distribution A manuals
//   (Army TC 3-22.9; USMC MCRP 3-01A). The superseded "four
//   fundamentals" framing is flagged as superseded, never taught as
//   current. No per-device click values are stated for the Army —
//   TC 3-22.9 states none. The M240/M249 zeroing appendices were not
//   extracted in research and do not appear.
// - Qualification figures print only where the pack confirmed them on
//   an official/public page. Withheld items (Army pistol thresholds,
//   Army Table VI distances, Army currency, Navy pistol bands, ALL
//   Coast Guard course numbers and currency) render as NOT PUBLISHED
//   HERE / NOT CONFIRMED — never filled from other sources.
// - Operator procedures (clearing / malfunctions / immediate action)
//   exist ONLY for the three systems whose operator manuals passed
//   the pack's public-manual gate: M203, Mk 19 (2001 edition only),
//   and M9 (records conflict flagged). Every other system names its
//   operator manual and its non-public status — no procedures.
// - Cycles of operations exist only for the 7 systems a public
//   service publication states them for; each entry states openly
//   whether its -10 operator manual is public or not.
// - No tactics, employment, gunnery, or engagement content anywhere.

export type WeaponLink = { label: string; url: string };

export type WeaponSystem = {
  id: string;
  name: string;
  /** True when an official public fact file publishes specifications. */
  factFile: boolean;
  caliber?: string;
  /** The pack's type/description text for the system. */
  typeLine?: string;
  /** Maker/origin exactly as the pack gives it ("Not stated on the
   * fact file" where the fact file does not state it). */
  maker?: string;
  /** Which branches field it — as the pack gives it. Most fact files
   * do not state branches; the field then says so. */
  branches: string;
  /** Verbatim specification blocks, each labeled with its source. */
  specs?: { source: string; lines: string[] }[];
  /** Descriptive note from the pack (role/branch context, or the
   * no-fact-file explanation). */
  note?: string;
  /** SOURCE FLAG box text (pack Flags A-1–A-6). */
  flag?: string;
  sources: WeaponLink[];
  /** In-section cross-links into the Zeroing / Safety & Operator
   * parts, by the target block's aria-label. */
  seeAlso?: { label: string; anchor: string }[];
};

export type WeaponGroup = {
  title: string;
  note?: string;
  systems: WeaponSystem[];
};

export const WEAPONS_INTRO =
  "Every weapon system at official public fact-file level, the zeroing and marksmanship fundamentals exactly as the services' public manuals teach them, each branch's annual qualification as officially published, and the safety rules, operator basics, and cycles of operations that public manuals support. Reference and fundamentals only — no tactics, no employment doctrine, nothing from a restricted-distribution source. Where an official source could not confirm a figure, the entry says so and prints no number.";

export const WEAPONS_SCOPE_NOTE =
  "Most current operator manuals (-10s) are Distribution C or D — not public — even though copies circulate online. Battle Book prints procedures only from manuals confirmed publicly released, and says so on every entry.";

/* ------------------------------ Part A ------------------------------ */

export const WEAPON_GROUPS: WeaponGroup[] = [
  {
    title: "Rifles & Carbines",
    systems: [
      {
        id: "m4",
        name: "M4 / M4A1 Carbine",
        factFile: true,
        caliber: "5.56mm",
        typeLine:
          "5.56 mm carbine. “The M4 series 5.56 mm Carbine is a compact version of the M16A2 Rifle… The M4A1 is fully automatic and incorporates an ambidextrous fire control selector.”",
        maker: "Not stated on either fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier (peosoldier.army.mil)",
            lines: [
              "Magazine Capacity: 30 rounds",
              "M4 Weight: 7.267 pounds (with sling and loaded magazine)",
              "M4A1 Weight: 7.62 pounds (with sling and loaded magazine)",
              "Length: 29.75 inches (buttstock closed), 33 inches (buttstock open)",
              "Barrel length: 14.5 inches",
              "Range: 500 meters",
            ],
          },
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: M4: 7.75 pounds with sling and loaded magazine; M4A1 [printed “M4AI”]: 8.63 pounds with sling and loaded magazine",
              "Length: 30.57 inches (retracted), 33.82 inches (extended)",
              "Barrel length: 14.5 inches",
              "Range: no Range line in its Specifications block; its Mission text says “out to 500 meters”",
            ],
          },
        ],
        flag: "SOURCE FLAG A-1 — M4/M4A1, PEO Soldier vs. PEO Soldier 360: M4 weight 7.267 lb vs. 7.75 lb; M4A1 weight 7.62 lb vs. 8.63 lb; length 29.75 in closed / 33 in open vs. 30.57 in retracted / 33.82 in extended. Both are official PEO pages; the figures cannot both describe the same configuration. Both print above, as published — they are not blended.",
        sources: [
          { label: "PEO Soldier — M4/M4A1 Carbine", url: "https://www.peosoldier.army.mil/Equipment/Equipment-Portfolio/Project-Manager-Soldier-Lethality-Portfolio/M4-M4A1-Carbine/" },
          { label: "PEO Soldier 360 Portfolio — M4/M4A1", url: "https://peo360portfolio.com/product-details/product/215" },
        ],
        seeAlso: [
          { label: "Zeroing & fundamentals — the service rifle (Army TC 3-22.9 and USMC MCRP 3-01A)", anchor: "Zeroing and fundamentals" },
          { label: "Cycle of operations — M4/M16 family", anchor: "Cycle of operations — M4/M16 family" },
        ],
      },
      {
        id: "m16a4",
        name: "M16A4 Rifle",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "Legacy army.mil fact-file pages for the M16 series are defunct; no current PEO/service fact sheet was located. No numbers printed.",
        sources: [],
        seeAlso: [
          { label: "Zeroing & fundamentals — USMC iron-sight adjustment rules are stated per click for the M16A4", anchor: "Zeroing — Marine Corps (MCRP 3-01A)" },
          { label: "Cycle of operations — M4/M16 family", anchor: "Cycle of operations — M4/M16 family" },
        ],
      },
      {
        id: "m27",
        name: "M27 Infantry Automatic Rifle (IAR)",
        factFile: false,
        branches: "Marine Corps (per the Marine Corps Systems Command article).",
        note: "No MCSC/Marines fact sheet with a specification table was found. An official Marine Corps Systems Command article states only, descriptively, that “The M27 IAR is a lightweight, air-cooled, gas piston, shoulder-fired weapon… initially fielded to replace the heavier, belt-fed M249 Squad Automatic Weapon,” under contract to Heckler and Koch — descriptive text, not a fact file.",
        sources: [
          { label: "Marine Corps Systems Command — Marines to receive more M27s (article only)", url: "https://www.marcorsyscom.marines.mil/News/News-Article-Display/Article/1505738/marines-to-receive-more-m27s/" },
        ],
      },
      {
        id: "mk18",
        name: "Mk 18 CQBR",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "Searches of socom.mil and navsea.navy.mil returned no officially published fact file. No numbers printed.",
        sources: [],
      },
      {
        id: "m4a1-block-ii",
        name: "M4A1 Block II (as a separate configuration)",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No separate official fact file for a Block II configuration; the M4A1 is covered within the M4 / M4A1 entry above.",
        sources: [],
      },
    ],
  },
  {
    title: "Pistols",
    systems: [
      {
        id: "m17",
        name: "M17 / M18 Modular Handgun System (MHS)",
        factFile: true,
        caliber: "9 mm",
        typeLine:
          "Semi-automatic handgun. “The M17 MHS is a 9 mm full-sized semi-automatic handgun. The M18 MHS and the M18 General Officer (GO) handgun are its compact variants. The M17 replaces the M9; the M18 replaces the M11… Both the M17 and the M18 can be equipped with either a 21-round magazine or a 17-round magazine.”",
        maker: "Not stated on the fact file. An official Army article states: “The M17 and M18 pistols are manufactured by Sig Sauer.”",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: M17: 30.8 ounces with loaded magazine; M18: 38.6 ounces with loaded magazine (reproduced exactly as printed — see the source flag)",
              "Length: M17: 8.05 inches; M18: 7.25 Inches",
              "Range: 50 meters",
            ],
          },
        ],
        flag: "SOURCE FLAG A-4 — internal anomaly in the single source: PEO 360 prints the compact M18's loaded weight (38.6 oz) as heavier than the full-size M17's (30.8 oz). Reproduced exactly as printed; likely a source typo, not corrected here.",
        sources: [
          { label: "PEO Soldier 360 Portfolio — M17/M18", url: "https://peo360portfolio.com/product-details/product/212" },
          { label: "Army.mil — 101st Airborne fields the Modular Handgun System", url: "https://www.army.mil/article/197497/101st_airborne_division_fields_armys_new_modular_handgun_system" },
        ],
        seeAlso: [
          { label: "Operator manual status — TM 9-1005-470-10 is not public, so no procedures and no cycle are published for this system", anchor: "Operator manuals not confirmed public" },
        ],
      },
      {
        id: "m9",
        name: "M9 / M9A1",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No currently published official fact file found; the M9 appears on the current PEO portfolio only as the pistol the M17 replaces. Its operator manual and cycle are covered in Safety & Operator Basics, where different sources apply.",
        sources: [],
        seeAlso: [
          { label: "Operator basics — M9 (clearing, malfunctions, immediate action)", anchor: "Operator basics — M9" },
          { label: "Cycle of operations — M9", anchor: "Cycle of operations — M9" },
        ],
      },
    ],
  },
  {
    title: "Machine Guns",
    systems: [
      {
        id: "m240",
        name: "M240B / M240L / M240H",
        factFile: true,
        caliber: "7.62mm",
        typeLine:
          "7.62mm medium machine gun. Per the fact file, the M240L “weighs 21.8 pounds, 5.8 pounds lighter than the M240B”; the M240H is the aviation version for the UH-60 and CH-47.",
        maker: "Not stated on the fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: M240B: 27.6 pounds; M240H: 26.3 pounds; M240L: 21.8 pounds",
              "Length: M240B: 48.5 inches; M240H: 41.2 inches; M240L: 44.5 inches",
              "Maximum effective range: 1,800 meters (area target)",
            ],
          },
          {
            source: "Corroboration (M240L only, official Army article)",
            lines: [
              "Caliber: 7.62x51mm NATO",
              "Weight: 21.8 lbs.",
              "Length: 44.5\"",
              "Max Effective range: 1,800m",
            ],
          },
        ],
        flag: "SOURCE FLAG A-2 — a USMC training handout lists M240B length as 49 inches and adds rate-of-fire figures the PEO page does not publish; weight agrees (27.6 lb). The PEO figures govern this entry.",
        sources: [
          { label: "PEO Soldier 360 Portfolio — M240 family", url: "https://peo360portfolio.com/product-details/product/199" },
          { label: "Army.mil — Soldiers play key role in fielding lighter machine gun", url: "https://www.army.mil/article/70914/soldiers_play_key_role_in_fielding_lighter_machine_gun" },
        ],
        seeAlso: [
          { label: "Cycle of operations — M240B (all eight steps, TC 3-22.240)", anchor: "Cycle of operations — M240B" },
        ],
      },
      {
        id: "m249",
        name: "M249 Squad Automatic Weapon (SAW)",
        factFile: true,
        caliber: "5.56mm",
        typeLine: "Squad automatic weapon.",
        maker: "Not stated on the fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier / PEO Soldier 360 Portfolio (identical on both pages) — Standard M249",
            lines: [
              "Weight: 18 pounds",
              "Length: 40.75 inches",
              "Range: point target 600 meters; area target 800 meters; provides suppressive fire to 1,000 meters",
            ],
          },
          {
            source: "PEO Soldier / PEO Soldier 360 Portfolio — M249 with Light-Weight Collapsible Buttstock and Short Barrel",
            lines: [
              "Weight: 17.95 pounds",
              "Length: 30.75–36.25 inches",
              "Range: point target 600 meters; area target 800 meters",
            ],
          },
        ],
        sources: [
          { label: "PEO Soldier — M249 Squad Automatic Weapon", url: "https://www.peosoldier.army.mil/Equipment/Equipment-Portfolio/Project-Manager-Soldier-Lethality-Portfolio/M249-Squad-Automatic-Weapon/" },
          { label: "PEO Soldier 360 Portfolio — M249", url: "https://peo360portfolio.com/product-details/product/274" },
        ],
        seeAlso: [
          { label: "Cycle of operations — M249", anchor: "Cycle of operations — M249" },
        ],
      },
      {
        id: "m2",
        name: "M2 / M2A1 .50 Caliber Machine Gun",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No PEO Soldier / PEO 360 product page exists for the gun itself (it appears only as a host weapon on tripod and sight pages). No numbers printed.",
        sources: [],
        seeAlso: [
          { label: "Cycle of operations — M2 / M2A1", anchor: "Cycle of operations — M2 / M2A1" },
        ],
      },
      {
        id: "mk19",
        name: "Mk 19 Grenade Machine Gun",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No PEO Soldier / PEO 360 product page exists for the weapon itself. Figures circulating in search results trace to a manufacturer's brochure on a secondary site and were excluded. No numbers printed.",
        sources: [],
        seeAlso: [
          { label: "Operator basics — Mk 19 (2001 public edition only)", anchor: "Operator basics — Mk 19" },
          { label: "Cycle of operations — Mk 19", anchor: "Cycle of operations — Mk 19" },
        ],
      },
    ],
  },
];

WEAPON_GROUPS.push(
  {
    title: "Shotguns",
    systems: [
      {
        id: "m500",
        name: "Mossberg M500",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "A PEO Soldier page for the M500 Shotgun existed in the search index, but opening it redirected to the PAE Maneuver Ground home page and no specifications could be retrieved. No figures used.",
        sources: [],
      },
      {
        id: "m870",
        name: "Remington M870",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No official fact file found. No numbers printed.",
        sources: [],
      },
      {
        id: "m1014",
        name: "Benelli M1014",
        factFile: false,
        branches: "Marine Corps use appears in official USMC photos and captions.",
        note: "Only USMC photo captions/articles were found (e.g., a caption describing it as an Italian-made, semi-automatic, gas operated 12-gauge shotgun) — no official fact file with a specification table.",
        sources: [],
      },
      {
        id: "m26",
        name: "M26 MASS (Modular Accessory Shotgun System)",
        factFile: true,
        caliber: "12-gauge",
        typeLine:
          "The only shotgun with a current PEO Soldier 360 fact file — included under the same citation rule as every other fact-file entry.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Caliber: 12-gauge",
              "Weight: 3.5 lb attached / 5.5 lb stand-alone",
              "Length: 16.5 / 26.5 inches",
              "Range: 40 meters",
            ],
          },
        ],
        sources: [
          { label: "PEO Soldier 360 Portfolio — M26 MASS", url: "https://peo360portfolio.com/product-details/product/208" },
        ],
      },
    ],
  },
  {
    title: "Precision Rifles",
    systems: [
      {
        id: "m110",
        name: "M110 Semi-Automatic Sniper System (SASS)",
        factFile: true,
        caliber: "7.62mm",
        typeLine: "7.62mm Semi-Automatic Sniper System.",
        maker: "Not stated on the fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: 15.7 pounds (empty); 17.3 pounds (with suppressor)",
              "Length: Buttstock fully compressed: 40.5 inches (without suppressor); 46.5 inches (with suppressor)",
              "Range: 800 meters",
            ],
          },
        ],
        sources: [
          { label: "PEO Soldier 360 Portfolio — M110 SASS", url: "https://peo360portfolio.com/product-details/product/207" },
        ],
      },
      {
        id: "m110a1",
        name: "M110A1 Squad Designated Marksman Rifle (SDMR)",
        factFile: true,
        caliber: "7.62 mm",
        typeLine:
          "Squad Designated Marksman Rifle — “a 7.62 x 51 mm Squad Designated Marksman solution based on the Heckler & Koch G28E-110 Compact Semi-Automatic Sniper System rifle,” outfitted with “the SIG Sauer Tango 6 variable 1x6 power optic.”",
        maker: "Based on the Heckler & Koch G28E-110 (per the fact file).",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: 9.15 pounds without magazine, suppressor, and optic; 14 pounds with a 20-round magazine, suppressor, and optic",
              "Length: 40.12 inches, including the suppressor",
              "Range: 600 meters",
            ],
          },
          {
            source: "PEO Soldier (older page — additional lines, no conflicting figures)",
            lines: ["Magazine Capacity: 10 or 20 rounds", "Barrel Length: 16.3 inches (without flash hider)"],
          },
        ],
        sources: [
          { label: "PEO Soldier 360 Portfolio — M110A1 SDMR", url: "https://peo360portfolio.com/product-details/product/209" },
          { label: "PEO Soldier — M110A1 Squad Designated Marksman Rifle", url: "https://www.peosoldier.army.mil/Equipment/Equipment-Portfolio/Project-Manager-Soldier-Lethality-Portfolio/M110A1-Squad-Designated-Marksman-Rifle/" },
        ],
      },
      {
        id: "mk13",
        name: "Mk 13 (Mod 7)",
        factFile: false,
        branches: "Marine Corps (per Marine Corps Systems Command articles).",
        note: "Only Marine Corps Systems Command news articles were found (describing a bolt-action rifle chambered in .300 Winchester Magnum that became the scout snipers' primary rifle and was later succeeded by the Mk22 Mod 0 ASR) — no specification table is published.",
        sources: [
          { label: "Marine Corps Systems Command — Marine snipers get more lethal with Mk13 (article only)", url: "https://www.marcorsyscom.marines.mil/News/News-Article-Display/Article/1514903/marine-snipers-get-more-lethle-with-mk13-sniper-rifle/" },
        ],
      },
      {
        id: "m2010",
        name: "M2010 Enhanced Sniper Rifle (ESR)",
        factFile: true,
        caliber: ".300 WinMag",
        typeLine:
          "Bolt-action sniper rifle. “The M2010 Enhanced Sniper Rifle (ESR) is a fully upgraded M24 Sniper Weapon System that has been rechambered to fire .300 Winchester Magnum (WinMag) ammunition. The bolt-action, magazine-fed system…”",
        maker: "Not stated on the fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: 17.8 pounds (empty); 18.7 pounds (combat ready with suppressor)",
              "Length: 44.7 inches (without suppressor); 52.2 inches (extended buttstock with suppressor)",
              "Barrel length: 24 inches",
              "Range: 1,200 meters",
            ],
          },
        ],
        sources: [
          { label: "PEO Soldier 360 Portfolio — M2010 ESR", url: "https://peo360portfolio.com/product-details/product/206" },
        ],
      },
      {
        id: "m24",
        name: "M24 Sniper Weapon System (SWS)",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No standalone official fact file found; the M24 appears on the current portfolio only as the predecessor system upgraded into the M2010 ESR (above).",
        sources: [],
      },
    ],
  },
  {
    title: "Launchers & Mortars",
    systems: [
      {
        id: "m320",
        name: "M320 / M320A1 Grenade Launcher Module (GLM)",
        factFile: true,
        caliber: "40mm",
        typeLine:
          "40mm grenade launcher module. “The M320 will replace all M203 series grenade launchers mounted on the M16/M4 series… The M320 can be mounted on the M16 series of rifles, while the M320A1 can be mounted on the M4 series of carbines.”",
        maker: "Not stated on the fact file.",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "PEO Soldier 360 Portfolio",
            lines: [
              "Weight: 6.48 pounds (stand-alone, empty); 3.42 pounds (mounted, empty)",
              "Length: 11.2 inches (stand-alone)",
              "Barrel Length: 8.5 inches",
              "Range: 400 meters",
            ],
          },
        ],
        flag: "SOURCE FLAG A-3 — M320A1, PEO 360 vs. an official Army article's statistics sidebar: the article gives “Weight 5 lbs., 10.92 lbs. attached to an M4 carbine; Barrel length 8.46 inches; Maximum range 400 meters; Maximum effective range: Point target 150 meters, Area target 350 meters.” The PEO 360 figures above govern this entry; the article's figures print here, flagged, not blended.",
        sources: [
          { label: "PEO Soldier 360 Portfolio — M320", url: "https://peo360portfolio.com/product-details/product/211" },
          { label: "Army.mil — Jackson Soldiers train on new weapons system (sidebar figures flagged above)", url: "https://www.army.mil/article/180538/jackson_soldiers_train_on_new_weapons_system" },
        ],
        seeAlso: [
          { label: "No cycle published as such — the M320 is a single-shot launcher; its public manual situation is stated in Safety & Operator Basics", anchor: "Cycles — named only and not published" },
        ],
      },
      {
        id: "m203",
        name: "M203 / M203A1",
        factFile: false,
        branches: "Not stated — no fact file.",
        note: "No current PEO fact page; surviving technical data exists only in field manuals on excluded secondary sites. The PEO 360 M320 page confirms the M203 only as the predecessor the M320 replaces. Its operator manual IS public — see Safety & Operator Basics — and its cycle is published there too.",
        sources: [],
        seeAlso: [
          { label: "Operator basics — M203 (clearing, malfunctions, immediate action)", anchor: "Operator basics — M203" },
          { label: "Cycle of operations — M203", anchor: "Cycle of operations — M203" },
        ],
      },
      {
        id: "at4",
        name: "M136 AT4",
        factFile: true,
        caliber: "84mm (warhead, per the page description)",
        typeLine:
          "Shoulder-launched anti-armor weapon — “an antiarmor projectile encased in a fiberglass-reinforced launch tube fitted with a firing mechanism, popup sights, a carrying sling, protective muzzle covers, and shock absorbing bumpers. The projectile consists of an 84mm shaped charge warhead…” The page also states: “The AT4 is no longer in production for the Army and has been replaced by the M136A1 AT4 Confined Space Reduced Sensitivity (CS RS).”",
        maker: "Production Partner: Saab Bofors Dynamics (Karlskoga, Sweden).",
        branches: "Army context stated on the page; no branch list given.",
        specs: [
          {
            source: "JPEO A&A Product Portfolio Book 2025, p. CCS-136",
            lines: [
              "Effective range: 300 meters",
              "Penetrates: 450 millimeters Reactive Hull Armor",
              "Weight: 6.72 kilograms",
              "Length: 1.0 meter",
            ],
          },
        ],
        sources: [
          { label: "JPEO A&A Product Portfolio Book 2025 (official program-office publication, Distribution A)", url: "https://www.cpeae.army.mil/Portals/94/Documents/JPEOAAPortfolioBook_2025.pdf" },
        ],
      },
      {
        id: "law",
        name: "M72 LAW",
        factFile: true,
        caliber: "66mm",
        typeLine:
          "“The M72 Light Anti-Tank Weapon (LAW) is a 66mm manportable, lightweight, single shot, direct fire weapon.” Variants listed: M72A7, M72A8 (FFE-capable version of M72A7), M72A9, M72A10 (FFE-capable version of M72A9).",
        maker: "Production Partner: Nammo Defense Systems (Mesa, AZ).",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "JPEO A&A Product Portfolio Book 2025, p. CCS-152",
            lines: [
              "Carry length: 30.5–32.0 inches",
              "Firing length: 38.5 inches",
              "Effective range: 25 meters – 350 meters",
              "Carry weight: 8–13 pounds",
              "M72A7: Effective against 150mm Rolled Homogeneous Armor (RHA)",
            ],
          },
        ],
        sources: [
          { label: "JPEO A&A Product Portfolio Book 2025 (official program-office publication, Distribution A)", url: "https://www.cpeae.army.mil/Portals/94/Documents/JPEOAAPortfolioBook_2025.pdf" },
        ],
      },
      {
        id: "m224",
        name: "M224 / M224A1 60mm Mortar",
        factFile: true,
        caliber: "60mm",
        typeLine:
          "60mm Lightweight Mortar Weapon System. “The 60mm M224A1 Mortar system is approximately 20% lighter (8.9 pounds less) than the current legacy M224 mortar system while retaining the same rates of fire, range, and tube life.” Components: M225A1 Inconel Cannon (tube), M170A1 bipod assembly, M7A1 baseplate, M8A1 auxiliary baseplate, and the M67 sight unit. “The M225A1 Cannon is a smooth bore mortar barrel 40 inches long.”",
        maker: "Production Partners — Cannons, Bipods, and Baseplates: Watervliet Arsenal (Watervliet, NY); System Engineering: DEVCOM-AC (Picatinny Arsenal, NJ).",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "JPEO A&A Product Portfolio Book 2025, p. CAS-76",
            lines: [
              "Elevation: 800 mils (minimum); 1,511 mils (maximum)",
              "Range: 70 meters (minimum); 3,500 meters (maximum)",
              "Rate of Fire: 30 rounds per minute (maximum); 20 rounds per minute (sustained with maximum charge)",
              "System Weight: Cannon: 13 pounds; Bipod: 12.85 pounds; Baseplate: 9.2 pounds; M67 Sight Unit: 2.5 pounds; Total: 37.55 pounds",
            ],
          },
        ],
        flag: "SOURCE FLAG A-6 — M224A1, JPEO Portfolio Book vs. a USMC training handout: the handout gives M225A1 Cannon 13 lbs, M170A1 Mortar Mount 13.2 lbs, M64A1 Sight 2.5 lbs, M7A1 Baseplate 9.1 lbs, M8 Baseplate 3.6 lbs, SL-3 Complete 37.6 lbs. (Max rate 30 rpm, sustained 20 rpm, and max effective range 3500m agree.) The JPEO figures above govern this entry.",
        sources: [
          { label: "JPEO A&A Product Portfolio Book 2025 (official program-office publication, Distribution A)", url: "https://www.cpeae.army.mil/Portals/94/Documents/JPEOAAPortfolioBook_2025.pdf" },
        ],
        seeAlso: [
          { label: "No cycle published as such — mortars are muzzle-loaded, drop-fired weapons with no self-loading cycle", anchor: "Cycles — named only and not published" },
        ],
      },
      {
        id: "m252",
        name: "M252 81mm Mortar",
        factFile: true,
        caliber: "81mm",
        typeLine:
          "81mm mortar — “M252 is a smooth bore, muzzle loaded, high angle fire… mortar with improved rate-of-fire capabilities.” Components: M253 steel cannon (tube), M177 bipod, M3A1 baseplate, and the M67 sight unit. Materiel Release: January 1991.",
        maker: "Production Partners — Cannons, Bipods, and Baseplates: Watervliet Arsenal (Watervliet, NY); System Engineering: DEVCOM-AC (Picatinny Arsenal, NJ).",
        branches: "Not stated on the fact file.",
        specs: [
          {
            source: "JPEO A&A Product Portfolio Book 2025, p. CAS-77",
            lines: [
              "Elevation: 800 mils (minimum); 1,511 mils (maximum)",
              "Range: 80 meters (minimum); 5,900 meters (maximum)",
              "Rate of Fire: 30 rounds per minute (maximum); 15 rounds per minute (sustained with maximum charge)",
              "System Weight: Cannon: 30.5 pounds; Bipod: 27 pounds; Baseplate: 29 pounds; M67 Sight Unit: 2.5 pounds; Total: 89 pounds",
            ],
          },
        ],
        flag: "SOURCE FLAG A-5 — M252, JPEO Portfolio Book vs. a USMC training handout: the handout gives Cannon 35 lbs, Mount M177 28 lbs, Baseplate M3A1 30 lbs, Sight M64A1 2.5 lbs, SL-3 Complete 95.5 lbs, Maximum Effective Range 5700m. (Rates of fire agree: 30 rpm max / 15 rpm sustained.) The JPEO figures above govern this entry.",
        sources: [
          { label: "JPEO A&A Product Portfolio Book 2025 (official program-office publication, Distribution A)", url: "https://www.cpeae.army.mil/Portals/94/Documents/JPEOAAPortfolioBook_2025.pdf" },
        ],
        seeAlso: [
          { label: "No cycle published as such — mortars are muzzle-loaded, drop-fired weapons with no self-loading cycle", anchor: "Cycles — named only and not published" },
        ],
      },
    ],
  },
  {
    title: "Artillery Annex",
    note: "Included because official JPEO A&A program-office product pages exist at fact-file level.",
    systems: [
      {
        id: "m777",
        name: "M777A2 (155mm Lightweight Towed Howitzer)",
        factFile: true,
        typeLine:
          "“Joint, ACAT II, USMC/Army Program”; “Direct support, general support, reinforcing, or general support reinforcing artillery system replacing the M198 155mm Medium Towed Howitzer.” Designations listed: M777 / M777A1 / M777A2.",
        branches: "USMC/Army (per the page).",
        specs: [
          {
            source: "JPEO A&A program-office product page",
            lines: [
              "Weight: <10,000 lbs",
              "Maximum Elevation: +1275 mils",
              "Minimum Elevation: −43 mils",
              "Traversing Range: 800 mils (400 mils left and 400 mils right of center)",
            ],
          },
        ],
        sources: [
          { label: "JPEO A&A — M777A2 product page", url: "https://jpeoaa.army.mil/Project-Offices/PL-TAS/Products/M777A2/" },
        ],
      },
      {
        id: "m119",
        name: "M119A3 (Lightweight Towed Howitzer)",
        factFile: true,
        typeLine:
          "Per the program page: range of 19.5 km with rocket assisted munitions (14 km unassisted); “has a rate of fire of six (6) rounds per minute”; “Fielded as two six-gun batteries for each M119A3 battalion”; “USA made cannon and breach.” History: “Acquired in 1986 as a Non-Developmental Item from Royal Ordnance of the United Kingdom”; M119A3 type classification December 2012.",
        branches: "Not stated in the sections of the page read.",
        specs: [
          {
            source: "JPEO A&A program-office product page",
            lines: ["Weight: 4,700 pounds"],
          },
        ],
        sources: [
          { label: "JPEO A&A — M119A3 product page", url: "https://jpeoaa.army.mil/Project-Offices/PL-TAS/Products/M119A3/" },
        ],
      },
    ],
  },
);

export const ALL_WEAPON_SYSTEMS: (WeaponSystem & { group: string })[] = WEAPON_GROUPS.flatMap((g) =>
  g.systems.map((s) => ({ ...s, group: g.title })),
);

export const NO_FACT_FILE_LINE = "No official fact file found — specifications not stated.";

/* ------------------------------ Part B ------------------------------ */
/* Zeroing & basic marksmanship fundamentals — Distribution A manuals
 * only. Army and Marine terminology are kept separate throughout, as
 * the research pack keeps them: do not blend. */

export type WBlock = {
  heading?: string;
  paras?: string[];
  bullets?: string[];
  /** A verbatim quote from the manual, rendered as a quote block. */
  quote?: string;
  /** A SOURCE FLAG / caution box (amber). */
  flag?: string;
  /** An ordered sequence, rendered numbered. */
  steps?: string[];
  /** Scoring bands / thresholds, rendered as label–value rows. */
  bands?: { label: string; value: string }[];
  /** A withheld figure, rendered as a NOT PUBLISHED HERE line — the
   * pack withheld it rather than sourcing it elsewhere. */
  withheld?: string;
};

export type ZeroingService = {
  key: string;
  ariaLabel: string;
  service: string;
  manual: string;
  manualNote: string;
  blocks: WBlock[];
  sources: WeaponLink[];
  sourceLabel: string;
};

export const ZEROING_FRAMING =
  "The goal, as the manuals frame it: a true zero and consistent groups. Nothing in this part promises a score or a qualification outcome — and the word “perfect” is never promised.";

export const ZEROING_DONT_BLEND =
  "Don't blend the services. Army = functional elements (Stability / Aim / Control / Movement) + 25-m grouping/zeroing + mandatory confirmation at 300 m. USMC = two fundamentals (aiming, trigger control) + position factors/elements + RCO zero at 100 m, BUIS BZO at 300 m, 33-m prezero explicitly “not a zero.” “Battlesight zero” is a process outcome in Army usage and a specific 300-m BUIS setting in Marine usage. The USMC does not zero the service rifle at 25 m in this edition — its short range is 33 m/36 yd, prezero only.";

export const ZEROING_SERVICES: ZeroingService[] = [
  {
    key: "army",
    ariaLabel: "Zeroing — Army (TC 3-22.9)",
    service: "Army",
    manual: "TC 3-22.9, Rifle and Carbine (13 May 2016, incl. Change 3, 20 Nov 2019)",
    manualNote: "Distribution A: “Approved for public release; distribution is unlimited.”",
    sourceLabel: "TC 3-22.9 (Distribution A)",
    sources: [
      { label: "TC 3-22.9, Rifle and Carbine (Army Publishing Directorate, DR_a)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/pdf/web/ARN19927_TC_3-22x9_C3_FINAL_WEB.pdf" },
    ],
    blocks: [
      {
        flag: "TERMINOLOGY FLAG — the familiar “four fundamentals — steady position, aiming, breath control, trigger control” is the framing of the superseded FM 3-22.9 (2008). The current TC 3-22.9 deliberately replaced it. The old four are shown here flagged as superseded — never as current teaching.",
      },
      {
        heading: "The shot process (paras 5-4/5-5)",
        steps: [
          "Pre-shot — position, natural point of aim, sight alignment/picture, hold",
          "Shot — refine aim, breathing control, trigger control",
          "Post-shot — follow-through, recoil management, call the shot, evaluate",
        ],
      },
      {
        heading: "The four functional elements (para 5-11) — the manual's core framing",
        bullets: [
          "Stability — “the Soldier stabilizes the weapon to provide a consistent base to fire from and maintain through the shot process until the recoil pulse has ceased,” including how the weapon is held, use of structures/objects, and posture.",
          "Aim — “the continuous process of orienting the weapon correctly, aligning the sights, aligning on the target, and the appropriate lead and elevation (hold) during a target engagement.”",
          "Control — “all the conscious actions of the Soldier before, during, and after the shot process… The first of which is trigger control.”",
          "Movement — moving while maintaining stabilization, aim, and control.",
        ],
        paras: [
          "The elements are explicitly interdependent (para 5-11). Inside that structure, Chapter 5 (para 5-3) names the three skills to master — sight alignment, sight picture, and trigger control — trigger control defined as “the skillful manipulation of the trigger that causes the rifle to fire without disturbing the aim.”",
        ],
      },
      {
        heading: "Stability (Ch. 6)",
        paras: [
          "Stability comes through four functions (para 6-1): support, muscle relaxation, natural point of aim, and recoil management. Natural point of aim = “the point where the barrel naturally orients when the shooter's muscles are relaxed and support is achieved” (para 6-5); instability shows as a wobble area (para 6-6).",
        ],
      },
      {
        heading: "Aim (Ch. 7)",
        paras: [
          "Aim is five firer actions for any sight (para 7-1): weapon orientation, sight alignment, sight picture, point of aim, desired point of impact.",
          "Sight alignment (para 7-4): for iron sights, the relationship between front sight post, rear aperture, and the firer's eye — tip of the front post centered in the aperture, eye focused on the front post; for optics, the reticle-to-eye relationship including eye relief. Sight picture (para 7-7) = “the placement of the aligned sights on the target itself.”",
        ],
      },
      {
        heading: "Control (Ch. 8)",
        paras: [
          "Control is managed through trigger control, breathing control, workspace, calling the shot, and follow-through (para 8-3): “Proper trigger control, without disturbing the sights, is the most important aspect of control and the most difficult to master.”",
          "Trigger control (paras 8-4/8-5): “the act of firing the weapon while maintaining proper aim and adequate stabilization until the bullet leaves the muzzle”; the standard is a “smooth, consistent trigger squeeze, regardless of speed.”",
          "Breathing control (paras 8-7/8-8): controlling breathing to reduce weapon movement; “firing on the natural pause is a common technique used during grouping and zeroing.”",
        ],
        flag: "The manual's diagnostic caution (para 8-9): vertical group dispersion is “most likely not caused by breathing but by failure to maintain proper aiming and trigger control.”",
      },
      {
        heading: "What zeroing is (Appendix E)",
        paras: [
          "“Zeroing is a maintenance procedure… Its purpose is to achieve the desired relationship between the line of sight and the trajectory of the round at a known distance.” Method: first “achieve a consistent grouping of a series of shots, then align the mean point of impact of that grouping to the appropriate point of aim.”",
          "Battlesight zero (BZ) (paras E-1/E-2): “the combination of sight settings and trajectory that greatly reduces or eliminates the need for precise range estimation,” and “the default sight setting for a weapon, ammunition, and aiming device combination.”",
        ],
      },
      {
        heading: "The zeroing process (para E-4) — four steps",
        steps: [
          "Mechanical zero",
          "Laser borelight — eye-safe bore laser with an offset target at 10 meters, so the first live group lands on the 25-m target (para E-5). Boresighting precedes live-fire zeroing and “is not a substitute for live-fire zeroing.” Appendix F gives the 10-m boresight and 25-m zero offsets per aiming device.",
          "25-m grouping and zeroing — grouping first (para E-7): the goal is tight, consistent groups in the same location; a tight consistent group “show[s] that the firer is applying proper aiming and smooth trigger control” — the firer should not start zeroing until they have demonstrated they can group. Group location does not matter yet. Then zeroing (para E-8): adjust the aiming device to move the group to the target center — or to the device-specific zero offset mark where the device requires one.",
          "Zero confirmation out to 300 meters — mandatory (para E-9). Wind must be accounted for when confirming past 100 m (paras E-10/E-11).",
        ],
        quote:
          "The most important step in the zeroing process is zero confirmation out to 300 meters. Having a 25 m zero does not guarantee a center hit at 300 meters. The only way to rely on a 300-m hit, is to confirm a 300-m zero. — TC 3-22.9, para E-9",
        paras: [
          "What the 25-m zero represents: with a properly zeroed M4/M16-series weapon the effective span is 25 to 300 meters — aim center mass anywhere in that span (para E-14).",
        ],
      },
      {
        heading: "Shot-group analysis rules (Appendix E)",
        bullets: [
          "“All sight adjustments are from the center of the group, called the mean point of impact (MPI), and not from the location of a single shot” (para E-22).",
          "Ammunition allocation is for three-shot groups, but “the preferred method is to use a five-shot grouping” (para E-19); with five shots, a single shot outside the group “should not be counted in the group for sight adjustment purposes” (para E-22).",
          "Groups are marked and triangulated on the zero target (paras E-12, E-20–E-24).",
          "A zero is individual: “The zero on each assigned rifle WILL NOT transfer to another rifle” (para E-17); re-confirm in a new location (para E-16).",
          "The manual also corrects a myth explicitly: wearing combat gear does not change the zero (note to para E-15).",
        ],
      },
      {
        heading: "Sight-adjustment rules / click values — as the TC itself states them",
        paras: [
          "TC 3-22.9 teaches adjustment in angular units — a minute of angle (MOA) is “an angular unit of measurement equal to 1/60th of a degree” (para 3-4); the Army's two angular units are mils and MOA (para 3-3).",
          "For devices, the TC states the rear aperture assembly “includes adjustments for both azimuth (wind) and elevation” and that “specific instructions for zeroing these aiming devices are found in the respective weapon's technical manual” (para 3-19) — TC 3-22.9 deliberately does not publish per-device click tables in its body.",
        ],
        flag: "No CCO/ACOG click value is stated in TC 3-22.9's text — none is imported here from elsewhere under this citation.",
      },
      {
        heading: "Predecessor note (Distribution A but superseded)",
        paras: [
          "FM 3-22.9 (2008) taught the 25-m grouping standard veterans remember — triangulate each group; ready to zero once groups fall within a 4-centimeter circle. It is not the standard as restated in TC 3-22.9 Appendix E.",
        ],
      },
    ],
  },
  {
    key: "usmc",
    ariaLabel: "Zeroing — Marine Corps (MCRP 3-01A)",
    service: "Marine Corps",
    manual: "MCRP 3-01A, Rifle Marksmanship (11 Oct 2012 edition; renumbered MCRP 8-10B.2 in the current program order)",
    manualNote: "Distribution Statement A (stated on cover and foreword; PCN 144 000091 00).",
    sourceLabel: "MCRP 3-01A (Distribution A)",
    sources: [
      { label: "MCRP 3-01A, Rifle Marksmanship (USMC Training Command)", url: "https://www.trngcmd.marines.mil/Portals/207/Docs/wtbn/MCRP%203-01A.pdf" },
    ],
    blocks: [
      {
        heading: "The fundamentals as the Marine Corps teaches them (Ch. 5)",
        quote: "The fundamentals of marksmanship are aiming and trigger control. — MCRP 3-01A, Ch. 5",
        paras: [
          "They “provide the foundation for all marksmanship principles and skills” and must be applied instinctively; as range increases they become more critical.",
        ],
        flag: "EDITION FLAG — the 1999/2001 edition taught three fundamentals — aiming, breath control, trigger control. The Distribution A 2012 edition teaches two and relocates breathing into the firing-position factors (below). Veterans trained pre-2012 will remember three.",
      },
      {
        heading: "Aiming — RCO (primary sight in this edition)",
        bullets: [
          "Sight picture = “the placement of the optic reticle pattern in relation to the target.”",
          "The RCO reticle is a bullet drop compensator with aiming points for 100–800 m (tip of the chevron center mass at ≤100 m; crotch of the chevron at 200 m; tip of the red post at 300 m; horizontal stadia lines beyond 300 m), designed for shooting with both eyes open.",
          "Stock weld: firm cheek contact; inconsistency “can affect the zero.”",
          "Eye relief: optimal ≈ 1½ inches with the RCO; wrong eye relief causes scope shadow and offset placement.",
        ],
      },
      {
        heading: "Aiming — iron sights",
        bullets: [
          "Sight alignment = “the relationship between the front sight post and rear sight aperture and the aiming eye” — tip of the front post centered vertically and horizontally in the aperture.",
          "Sight picture = placement of the post tip on the target while maintaining sight alignment; correct aiming point is center mass.",
          "Doctrinal distinction: a sight alignment error grows proportionally with distance; a sight picture error “remains constant, regardless of the distance.” Focus on the tip of the front sight post.",
          "Iron-sight eye relief: normally 2 to 6 inches, kept consistent.",
        ],
      },
      {
        heading: "Trigger control",
        paras: [
          "“The skillful manipulation of the trigger that causes the Service rifle to fire without disturbing sight alignment or sight picture. Controlling the trigger is a mental process, while moving the trigger is a physical process.”",
          "Two techniques: uninterrupted (preferred — smooth continuous pressure until the shot fires) and interrupted (hold pressure when aim is disturbed, resume when it settles). In recovery, release only enough to reset the trigger; do not remove the finger.",
        ],
      },
      {
        heading: "Position framework (Ch. 6)",
        bullets: [
          "Seven factors common to all firing positions: forward (support) hand, rifle butt in the pocket of the shoulder, grip of the firing hand, firing-side elbow, stock weld, breathing, and muscular control.",
          "Breathing rule: for slow precision fire, fire during the natural respiratory pause.",
          "Three elements of a firing position (loop sling): bone support, muscular relaxation, and natural point of aim — weight on bone, not muscle, “because muscles fatigue; whereas bones do not.”",
          "Positions: prone (most stable), sitting, kneeling, standing (least).",
        ],
      },
      {
        heading: "Zeroing as the Marine Corps teaches it (Ch. 8)",
        paras: [
          "Definition: “Zeroing is adjusting the sights on the weapon to cause the shots to impact where the Marine aims.”",
          "Five elements of zeroing: line of sight, aiming point, centerline of the bore, trajectory, and range. Because the sights sit above the bore (RCO center ≈ 2.75 in above bore centerline), the bullet crosses the line of sight, rises above it, and re-enters it a second time downrange.",
        ],
      },
      {
        heading: "The zero vocabulary (do not blend with Army BZ usage)",
        bullets: [
          "Zero (RCO): settings placing a shot or group center at a predesignated location at 100 meters/yards, from a specific position, under ideal conditions.",
          "True zero (BUIS): the same under ideal weather conditions.",
          "Battlesight zero — BZO (BUIS): settings placing a shot / group center at a predesignated location at 300 meters/yards under ideal conditions; the sight setting carried for combat; “will enable engagement of point targets from 0 to 300 meters/yards in a no-wind condition.”",
        ],
      },
      {
        heading: "RCO zeroing",
        steps: [
          "Prezero at 33 meters / 36 yards first — universal BZO target exactly 33 m/36 yd from the muzzle, supported prone, aim with the 300-m aim point (tip of the red post); fire 3 rounds → triangulate → adjust → 3 rounds → 4 rounds to confirm.",
          "Zero at 100 meters/yards: 4-inch-diameter aiming point, the 100-m aim point (chevron tip, center mass), same 3→adjust→3→4 sequence.",
        ],
        paras: [
          "The manual is explicit: a 33-m prezero “is not as accurate as a zero established at 100 meters/yards” and is not itself a zero.",
          "“The Service rifle is considered zeroed when a shot group is inside the 4-inch aiming area of the target.”",
        ],
        flag: "A 33-m/36-yd prezero is NOT A ZERO — it is a prezero only, in the manual's own terms.",
      },
      {
        heading: "RCO click values, exactly as the manual states them",
        bullets: [
          "Adjusters move ⅓ inch per click at 100 meters/yards — i.e., 9 clicks = 1 inch at 33 m/36 yd; 3 clicks = 1 inch at 100 m; 1 click = 1 inch at 300 m.",
          "Windage adjuster: clockwise = strike right, counterclockwise = strike left.",
          "Elevation adjuster: clockwise = strike up, counterclockwise = strike down.",
        ],
      },
      {
        heading: "BUIS zeroing",
        steps: [
          "Elevation drum set to 3; prezero at 33 m/36 yd alongside the RCO work.",
          "BZO at 300 meters/yards: 3-shot group → triangulate → adjust (elevation on the front sight post, lateral on the windage knob) → 3 rounds → adjust → 4 rounds to confirm.",
          "Remove any wind-compensation clicks — “this becomes the BZO setting for the Service rifle.”",
        ],
        paras: [
          "Why 33 m works: at a 300-m zero the bullet crosses the line of sight twice — first at 33 m/36 yd, then again at 300 m — but “a BZO established at 300 meters/yards is considered to be much more accurate than the 33-meter/36-yard prezero sight setting,” and a rifle with only a prezero “should not be used in battle.”",
          "BUIS adjustment rules: all elevation adjustments are made on the front sight post; once a BZO exists “the front sight post should never be moved, except when rezeroing.” The rear elevation drum dials range, not zeroing elevation.",
        ],
      },
      {
        heading: "Iron-sight adjustment rules, exactly as the manual states them (per click, per 100 meters/yards)",
        bullets: [
          "Front sight post (elevation): raise strike = rotate post clockwise (direction of the arrow marked UP); lower = counterclockwise; one click ≈ 1⅜ in (M16A4) / 1⅞ in (M4).",
          "Rear sight elevation: one click ≈ ½ in (M16A4) / ¾ in (M4).",
          "Windage knob (arrow + “R”): clockwise moves strike right, counterclockwise left; one click ≈ ½ in (M16A4) / ¾ in (M4).",
          "Apertures: large (0-2) for limited visibility / targets closer than 200 m; small (unmarked) “used for zeroing and normal firing situations.”",
        ],
      },
      {
        heading: "Initial sight settings (starting point)",
        paras: [
          "Front sight post base flush with the front sight housing; rear elevation 6/3; windage index line centered. If a BZO already exists, zeroing may start from it.",
        ],
      },
    ],
  },
];

export const ZEROING_OTHER_SERVICES: WBlock[] = [
  {
    heading: "The other services — stated at the level the public sources support",
    bullets: [
      "Navy: OPNAVINST 3591.1G is policy, not a fundamentals textbook — no Navy-specific fundamentals list or zeroing procedure is attributed to it. Navy fundamentals instruction lives in referenced PQS/training materials whose distribution was not verified.",
      "Air Force: the AFQC includes a Grouping and Zero phase (e.g., Table I, Phase I — Iron Sight/BUIS/DOS Grouping and Zero) inside its qualification-programs manual. Program level only here; see Annual Qualification.",
      "Coast Guard: no public fundamentals manual found. CG qualification requirements sit in the Ordnance Manual, COMDTINST M8000.2 (series), described as FOUO and not publicly available. Nothing extracted.",
    ],
  },
];

/* ------------------------------ Part C ------------------------------ */
/* Annual qualification by branch — officially published figures only.
 * Where a threshold could not be confirmed on an official/public
 * page, the block carries a withheld line and NO number. */

export type QualBranch = {
  key: string;
  branch: string;
  ariaLabel: string;
  governing: string;
  blocks: WBlock[];
  sources: WeaponLink[];
  sourceLabel: string;
};

export const QUAL_INTRO =
  "One page per branch, all six, from each branch's own governing publication. Every figure is tied to the official publication or official service page it came from. Where a figure could not be confirmed officially, it is marked NOT PUBLISHED HERE and no number is given — figures are never filled in from other sources.";

export const QUAL_FLAGS: WBlock[] = [
  {
    flag: "SOURCE FLAG C-1 — Air Force citations moved. AFI 36-2654 (2020) was superseded 1 Apr 2025 by DAFI 31-131, and the courses of fire moved from AFMAN 36-2655 to DAFMAN 31-131 Volume 2 (17 Jun 2025, as amended by DAFGM 2026-01, 12 Feb 2026). The Air Force and Space Force pages below use the current publications.",
  },
  {
    flag: "SOURCE FLAG C-2 — USMC Tables 3–6 changed in FY26. MCO 3574.2M (2022) requires rifle Tables 3–6 annually; MARADMIN 095/26 states, effective with that message, Tables 3–6 become a Global Force Management deployment requirement in lieu of annual requirements, and ARQ “Destroy” targets are no longer required (the ARQ “Drill” target may be used in lieu). Both authorities print on the Marine Corps page — the conflict is flagged, not resolved.",
  },
  {
    flag: "SOURCE FLAG C-3 — Navy version drift. MyNavyHR Uniform Regulations cite OPNAVINST 3591.1C for marksmanship qualifications while current issuances reference OPNAVINST 3591.1G (1 Jun 2021); the Navy score bands below were verified against the older 3591.1F (2009) text. Treat the bands as F-era until re-verified against 3591.1G Ch. 6.",
  },
];

export const QUAL_BRANCHES: QualBranch[] = [
  {
    key: "army",
    branch: "Army",
    ariaLabel: "Annual Qualification — Army",
    governing: "TC 3-20.40, Training and Qualification – Individual Weapons (30 Jul 2019, Change 1 4 Nov 2019) — “Approved for public release; distribution is unlimited.” It covers rifle/carbine and pistol and the other individual weapons — not a rifle-only manual.",
    sourceLabel: "TC 3-20.40 · Army.mil · U.S. Army Reserve IWQ guidance",
    sources: [
      { label: "Army.mil — the current qualification", url: "https://www.army.mil/article-amp/232139" },
      { label: "U.S. Army Reserve — Individual Weapons Qualification (IWQ) update", url: "https://www.usar.army.mil/Portals/98/Documents/Marksmanship/Individual_Weapons_Qualification(IWQ)_update.pdf" },
      { label: "TC 3-20.40 (Army Training Registry)", url: "https://rdl.train.army.mil/catalog-ws/view/100.ATSC/D6C17734-DD08-40FD-A50B-09448575646F-1564595433375/tc3_20x40wc1.pdf" },
    ],
    blocks: [
      {
        heading: "Rifle / Carbine — course structure",
        paras: [
          "The Integrated Weapons Training Strategy (IWTS) — six tables per individual weapon (TC 3-20.40 §1-23): Table I – Preliminary Marksmanship Instruction and Evaluations; Table II – Pre-Live-Fire Simulations; Table III – Drills; Table IV – Basic; Table V – Practice; Table VI – Qualification (the live-fire proficiency gate). Tables I–III require no ammunition; Table IV is grouping/zeroing; Table VI uses the same record-fire round count as the legacy course (USAR IWQ update).",
          "Table VI itself has four stages: Day fire; Day fire with CBRN equipment; Assisted night fire; Assisted night fire with CBRN equipment (army.mil). Stages-within-Table-VI — not a conflict with the six-table structure.",
          "Targets / rounds for record: 40 individual targets at varying distances (army.mil).",
        ],
        withheld: "Table VI distance range — NOT PUBLISHED HERE. The army.mil article does not publish a numeric distance range, and a numeric Table VI distance range was NOT CONFIRMED OFFICIALLY in the pages opened, so no distance figure is printed.",
      },
      {
        heading: "Rifle / Carbine — scoring + badges (CONFIRMED, army.mil)",
        bands: [
          { label: "Marksman", value: "23–29 hits of 40" },
          { label: "Sharpshooter", value: "30–35 hits of 40" },
          { label: "Expert", value: "36–40 hits of 40" },
          { label: "Unqualified", value: "Below 23" },
        ],
        paras: [
          "Full bands as stated in TC-derived official summaries: Marksman 23–29, Sharpshooter 30–35, Expert 36–40 — the three floor values (23 / 30 / 36) are the ones stated verbatim on army.mil. Badges: Army Marksmanship Qualification Badges (Marksman / Sharpshooter / Expert) with a weapon clasp/bar (e.g., Rifle, Carbine, Pistol).",
        ],
      },
      {
        heading: "Pistol",
        paras: [
          "Course structure: an appendix program inside the same TC 3-20.40 six-table IWTS, scored on the DA Form 7814 pistol scorecard prescribed by the TC.",
        ],
        withheld: "Pistol scoring thresholds — NOT PUBLISHED HERE. Pistol hit thresholds and course distances could not be verified on an opened official page, so no pistol numbers are printed. They are not imported from non-official sites.",
      },
      {
        heading: "Currency",
        withheld: "Currency / validity period — NOT PUBLISHED HERE. TC 3-20.40 governs qualification validity/frequency, but an explicit annual/12-month validity statement was not retrieved from an official page, so none is asserted.",
      },
    ],
  },
  {
    key: "usmc",
    branch: "Marine Corps",
    ariaLabel: "Annual Qualification — Marine Corps",
    governing: "MCO 3574.2M, Marine Corps Combat Marksmanship Programs (6 Apr 2022), Distribution Statement A. It establishes policy for “initial qualification and annual qualification with the service rifle and pistol” and defines the marksmanship year as the fiscal year (1 Oct–30 Sep).",
    sourceLabel: "MCO 3574.2M · Marines.mil · MARADMIN 095/26",
    sources: [
      { label: "Marines.mil — MARADMIN 095/26 (Tables 3–6 change)", url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=542&Article=4430239" },
      { label: "Marines.mil — ARQ rollout", url: "https://www.marines.mil/DesktopModules/ArticleCS/Print.aspx?PortalId=1&ModuleId=632&Article=2798865" },
      { label: "MCICOM — New Annual Rifle Qual, a shooter's perspective", url: "https://www.mcicom.marines.mil/News/News-Article/Article/2811624/new-annual-rifle-qual-a-shooters-perspective/" },
      { label: "MARADMIN 193/19 — CPP Sustainment Program implementation", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/1794057/marine-corps-combat-pistol-program-cpp-sustainment-program-implementation/" },
    ],
    blocks: [
      {
        heading: "Rifle — Annual Rifle Qualification (ARQ)",
        paras: [
          "What changed: ARQ fully replaced the old Annual Rifle Training (ART) Table 1 / Table 2 system effective 1 Oct 2021. The old point-scored course (200/300/500 yd, 1–5 points per shot) is gone for annual qualification. Entry-level training still uses Tables 1 and 2 under MCO Ch. 2 — do not blend entry-level aggregate scores with ARQ bands.",
          "Structure (MCO Ch. 3 + Appendix J): 3-day event — Day 1: 100-yd zero confirmation / holds + drills (140 rounds); Day 2: pre-qualification (score may be accepted as final); Day 3: qualification. Destroy portion fired far-to-near, 500 yd down to 25 yd, then drill portion at 25 and 15 yd. Evaluation day total: 160 rounds. Known-distance range distances: 25, 100, 200, 300, 500 yd/m; fire-and-movement 25→15 yd; moving targets required at 100 and 200 yd; barricades at 100/200 yd.",
          "Scoring — lethality / “destroy” based, NOT points: 50 destroy opportunities. A target is Destroyed only with ≥1 shot in the Destroy (D) or Face Destroy (FD) zone; other zones are Neutralized / Suppressed / Miss. The three drill types are Failure to Stop (25 yd), Box Drill (25 yd), and Failure to Stop While Moving (25→15 yd), pass/fail per iteration.",
        ],
      },
      {
        heading: "ARQ classification bands (MCO Ch. 3, para 6.d — CONFIRMED)",
        paras: ["Both a destroys minimum AND a drill-type minimum must be met:"],
        bands: [
          { label: "Expert", value: "43–50 destroys + pass ≥1 iteration of each of the 3 drill types" },
          { label: "Sharpshooter", value: "31–42 destroys + pass ≥1 iteration of 2 drill types" },
          { label: "Marksman", value: "15–30 destroys + pass ≥1 iteration of any 1 drill type" },
          { label: "Unqualified", value: "Below 15 destroys, or no drill type passed" },
        ],
      },
      {
        heading: "Rifle badges + Tables 3–6",
        paras: [
          "Badges: Rifle Marksmanship Badges — Marksman / Sharpshooter / Expert — from ARQ (annual) or Tables 1+2 (entry level).",
          "Also in the MCO: Marines assigned a rifle as their T/O weapon complete Tables 3–6 (Unknown Distance Day/Night; Short Range Day/Night) — annual under the 2022 order, changed by MARADMIN 095/26 in FY26 (see SOURCE FLAG C-2 at the top of this part).",
        ],
      },
      {
        heading: "Pistol — Combat Pistol Program (CPP), Table 1",
        paras: [
          "Who fires it: not every Marine — Marines assigned a pistol / in categories the MCO specifies (e.g., Marine Corps Security Forces, Marine Barracks and military police organizations are expressly required to complete CPP for annual pistol qualification). MCO 3574.2M Encl. (2) Ch. 1.",
          "Structure (MCO Encl. (2) + Appendix K): CPP Table 1 = 5 training blocks; Blocks 1–3 training, Block 4 pre-evaluation, Block 5 the evaluation on which classification is based. Each block = 40 rounds (initial program 200 rounds total). Evaluation stages: Stage 1 at 7 yd, Stage 2 at 15 yd, Stage 3 at 25 yd; known-distance range 7–25 yd/m; fired only from unsupported standing. Target MPMS-1, scored A=10, B=8, C=6, D=4, outside D = miss (max 400).",
          "Sustainment variant: CPP Sustainment = 3 blocks / 100 rounds, for Marines who previously qualified Expert or Sharpshooter on all 5 blocks; a Marksman result or failure on sustainment means the full program the following year. MCO Encl. (2) Ch. 1 para 3 + Appendix L; MARADMIN 193/19.",
        ],
      },
      {
        heading: "CPP classification bands (MCO Encl. (2) Ch. 1, para 7.a — CONFIRMED), Block 5 evaluation, /400",
        bands: [
          { label: "Expert", value: "364–400" },
          { label: "Sharpshooter", value: "324–363" },
          { label: "Marksman", value: "264–323" },
          { label: "Unqualified", value: "0–263" },
        ],
        paras: ["Badges: Pistol Marksmanship Badges — Marksman / Sharpshooter / Expert."],
      },
      {
        heading: "Currency",
        paras: [
          "Annual, by fiscal year (marksmanship year = FY, 1 Oct–30 Sep) for Marines with a rifle/pistol annual requirement under the MCO. SMCR (Reserve) exception for pistol: CPP may be completed every other year (annual still encouraged) — MCO Encl. (2) Ch. 1.",
        ],
      },
    ],
  },
  {
    key: "navy",
    branch: "Navy",
    ariaLabel: "Annual Qualification — Navy",
    governing: "OPNAVINST 3591.1 series, Small Arms Training and Qualification (current: 3591.1G, 1 Jun 2021; bands below verified against 3591.1F, 12 Aug 2009 — Flag C-3). Awards/wear: Navy Uniform Regulations Ch. 5 (MyNavyHR), SECNAVINST 1650.1 series.",
    sourceLabel: "OPNAVINST 3591.1F/G · Navy Uniform Regulations Ch. 5 · NAVADMIN 239/20",
    sources: [
      { label: "Navy Uniform Regulations Ch. 5 — marksmanship awards + devices (MyNavyHR)", url: "https://www.mynavyhr.navy.mil/References/US-Navy-Uniforms/Uniform-Regulations/Chapter-5/5301-Awards/" },
      { label: "OPNAVINST 3591.1G (SECNAV DON Issuances)", url: "https://www.secnav.navy.mil/doni/Directives/03000%20Naval%20Operations%20and%20Readiness/03-500%20Training%20and%20Readiness%20Services/3591.1G.pdf" },
      { label: "NAVADMIN 239/20 — annual live-fire requalification rule", url: "https://www.mynavyhr.navy.mil/Portals/55/Messages/NAVADMIN/NAV2020/NAV20239.txt" },
    ],
    blocks: [
      {
        heading: "Framing — qualification is arming-linked",
        paras: [
          "The Navy does not require rifle or pistol qualification of every Sailor — it is tied to being armed / duties requiring it (3591.1 applicability). All Navy personnel armed with a rifle are required to qualify on the Rifle Qualification Course (plus the Rifle Low-Light Course for personnel armed with a rifle); all Navy personnel armed with a pistol are required to qualify on the Navy Handgun Qualification Course.",
        ],
      },
      {
        heading: "Rifle — Navy Rifle Qualification Course (3591.1F bands — older instruction, flagged)",
        flag: "These bands were verified against OPNAVINST 3591.1F (2009), the older instruction — Flag C-3. The copy read is a reproduction on a non-official host, provenance flagged. Treat the bands as F-era until re-verified against 3591.1G Ch. 6.",
        bands: [
          { label: "Expert", value: "170–200 (possible score 200)" },
          { label: "Sharpshooter", value: "160–169" },
          { label: "Marksman", value: "140–159 (minimum qualifying score 140)" },
          { label: "Unqualified", value: "Below 140" },
        ],
        withheld: "Rounds/stages for the current 3591.1G course — NOT CONFIRMED OFFICIALLY on an opened navy.mil-hosted page, so no round count is asserted.",
      },
      {
        heading: "Rifle awards (Uniform Regs Art. 5310 & 5317 — CONFIRMED)",
        paras: [
          "Navy Rifle Marksmanship Ribbon (Marksman, no device) / ribbon with bronze “S” device (Sharpshooter) / Expert Rifleman Medal + ribbon with silver “E” device (Expert).",
          "Verbatim: “Those who qualify for marksman rate a ribbon with no attachment. Those who qualify for sharpshooter rate a ribbon with a 1/4 inch bronze 'S' attachment. Those who qualify for expert rate a ribbon and medal. The ribbon has a 1/4 inch silver 'E' attachment.”",
        ],
      },
      {
        heading: "Pistol — Navy Handgun Qualification Course",
        paras: [
          "Category II and above personnel additionally qualify annually on the Handgun Practical Weapons Course (HPWC) and the Handgun Low-Light Course (not required while at sea; deployed afloat commands may extend until 2 months after return to homeport). OPNAVINST 3591.1F Enclosure (3).",
          "Awards earnable (CONFIRMED): Navy Pistol Marksmanship Ribbon, Navy Sharpshooter Award, and Navy Expert Pistol Shot Medal. Devices: Marksman = ribbon, no device; Sharpshooter = bronze “S”; Expert = Expert Pistol Shot Medal + ribbon with silver “E” (MyNavyHR).",
        ],
        withheld: "Pistol score bands — NOT CONFIRMED OFFICIALLY. The numeric bands were not retrieved from an official navy.mil-hosted page, so no pistol numbers are printed.",
      },
      {
        heading: "Currency — two different things, do not blend",
        bullets: [
          "Arming qualification: ANNUAL. “All personnel must requalify with live fire annually,” plus semi-annual sustainment training between qualification shoots, not to exceed 8 months after the last live-fire qualification (3591.1F Encl. (3); the 3591.1G summary states sustainment at 120–240 days after last qualification, live-fire qualification annually, expiring the last day of the qualifying month). NAVADMIN 239/20 confirms the annual rule.",
          "The award itself is separate: a Sailor keeps the ribbon/medal level earned and upgrades on a higher subsequent score — the ribbon is a permanent award; the arming qualification is annual.",
        ],
      },
    ],
  },
  {
    key: "airforce",
    branch: "Air Force",
    ariaLabel: "Annual Qualification — Air Force",
    governing: "DAFI 31-131 (1 Apr 2025), Combat Arms Training and Maintenance (CATM) Program; courses of fire in DAFMAN 31-131 Volume 2 (17 Jun 2025 + DAFGM 2026-01). The older AFI 36-2654 / AFMAN 36-2655 citations were superseded — Flag C-1.",
    sourceLabel: "DAFI 31-131 · DAFMAN 31-131 Vol. 2",
    sources: [
      { label: "DAFI 31-131 (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafi31-131/dafi31-131.pdf" },
      { label: "DAFMAN 31-131 Volume 2 (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafman31-131v2/dafman31-131v2.pdf" },
    ],
    blocks: [
      {
        flag: "SUPERSESSION FLAG — AFI 36-2654 (2020) was superseded 1 Apr 2025 by DAFI 31-131, and the courses of fire moved from AFMAN 36-2655 to DAFMAN 31-131 Volume 2 (17 Jun 2025, as amended by DAFGM 2026-01, 12 Feb 2026). This page uses the current publications.",
      },
      {
        heading: "Rifle / Carbine — Rifle/Carbine AFQC (DAFMAN 31-131 V2, Table 2.2): 3 tables, 210 rounds total",
        bullets: [
          "Table I – Basic Marksmanship: 68 rounds (Phase I BUIS grouping/zero, 10 rds; Phase II optic grouping/zero, 10 rds; Phase III practice, 18 rds; Phase IV evaluation, 18 rds; Phase V CBRN firing techniques, 12 rds) — all at 25 m on scaled-silhouette targets (silhouettes representing 75 m / 175 m / 300 m).",
          "Table II – Short-Range Combat: 92 rounds — at 7 m and 15 m on Military “E” targets.",
          "Table III – Low-Visibility Engagement Techniques: 50 rounds — at 15 m (zero at 25 m).",
        ],
      },
      {
        heading: "Rifle / Carbine — minimum / Expert standards (DAFMAN 31-131 V2, para 2.4.3 — CONFIRMED)",
        bands: [
          { label: "Table I Phase IV — Qualified", value: "13 hits (72%)" },
          { label: "Table I Phase IV — Expert", value: "16 hits (89%) (only 3 hits per silhouette count)" },
          { label: "Table II Phase III (SRC Evaluation) — Qualified", value: "Minimum 17 hits (71%) in the 10-inch Lethal Zone + 3 hits (75%) in the 6-inch Incapacitation (head) zone" },
          { label: "Table III evaluation orders", value: "6 hits (75%) in the 10-inch Lethal Zone (Phases II and III)" },
        ],
        paras: [
          "Table I Phase V and Table II Phase IV are Go / No-Go. AF Expert is phase-based, not a single total score — no single overall rifle “Expert score” is stated as one number.",
        ],
      },
      {
        heading: "Handgun — Handgun AFQC (M18 / G19 / G26) (DAFMAN 31-131 V2, §3B, Table 3.4): 2 tables, 100 rounds total",
        bullets: [
          "Table I – Basic Marksmanship: Phase I practice 30 rounds; Phase II qualification 50 rounds — at 7 and 15 (m/yds as printed) on Military “E” target (10-inch Lethal Zone / 6-inch Incapacitation Zone).",
          "Table II – Limited Visibility: Phase I practice 10 rounds; Phase II qualification 10 rounds — at 7.",
        ],
      },
      {
        heading: "Handgun — minimum / Expert standards (para 3.8.4 — CONFIRMED)",
        bands: [
          { label: "Table I Phase II — Qualified", value: "45 hits (90%)" },
          { label: "Table I Phase II — Expert", value: "50 hits (100%), with at least 34 hits (89%) in the 10-inch vital-area circle and 11 hits (91%) in the 6-inch circle" },
          { label: "Table II Phase II — Qualified", value: "7 hits (70%)" },
          { label: "Table II Phase II — Expert", value: "9 hits (90%)" },
        ],
        paras: [
          "Accession variant (DAFGEM 2026-01): Handgun (M18) Air Force Basic Qualification Course (AFBQC) for accessions — Table I only, 50 total rounds (20 practice + 30 evaluation), at 7 and 15. BMT trainees complete rifle/carbine qualification on the (rifle) AFBQC using the Close Combat Optic only (DAFI 31-131 para 2.2.5).",
        ],
      },
      {
        heading: "Scoring + award — there is NO Air Force Marksman/Sharpshooter tier",
        paras: [
          "The AFQC produces Qualified vs. Expert only. There is no Air Force marksmanship ribbon for Marksman or Sharpshooter — no Marksman tier exists in this program.",
          "Small Arms Expert Marksmanship Ribbon (SAEMR) — the sole AF marksmanship award: awarded to personnel who live-fire qualify with an Expert score on the Handgun AFQC, Rifle/Carbine AFQC, Rifle/Carbine AFBQC, BAT, BDQC or DQC and meet all course objectives in DAFMAN 31-131 V2 (DAFI 31-131 para 2.11.1.1), on the basis of the DAF Form 522. One bronze service star is added when the individual qualifies Expert with both rifle and a handgun; only one award per weapon type regardless of repeat Expert qualifications (para 2.11.3). Personnel may not fire a course solely to obtain the ribbon.",
        ],
      },
      {
        heading: "Currency — arming-based, NOT universal-annual",
        paras: [
          "Personnel with an arming requirement complete live-fire qualification every 12 months on all SA/LW with which they are armed (DAFI 31-131 paras 2.2.1–2.2.2, implementing DoDD 5210.56). Deployment-tasked personnel must qualify within 12 months of arrive-in-country date; qualification is valid 12 months or the full deployment (para 2.2.3).",
          "Plainly stated: the Air Force does not require annual rifle qualification for all Airmen. Force & Infrastructure Category 2 (AFFORGEN) personnel are not required to receive qualification training (para 2.2.4), and accessions may receive only a one-time qualification/orientation event (para 2.2.5). Advanced Designated Marksmen are the exception in the other direction: they qualify twice each year (para 2.3.4).",
        ],
      },
    ],
  },
  {
    key: "spaceforce",
    branch: "Space Force",
    ariaLabel: "Annual Qualification — Space Force",
    governing: "Space Force follows the Department of the Air Force program — no separate Space Force course, manual, or ribbon exists in the official publications found.",
    sourceLabel: "DAFI 31-131 · DAFMAN 31-131 Vol. 2",
    sources: [
      { label: "DAFI 31-131 (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafi31-131/dafi31-131.pdf" },
      { label: "DAFMAN 31-131 Volume 2 (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafman31-131v2/dafman31-131v2.pdf" },
    ],
    blocks: [
      {
        heading: "Space Force follows DAF — stated as such",
        paras: [
          "DAFI 31-131 “applies to the entire DAF, including DAF civilian employees and uniformed members of the United States Air Force (USAF), the United States Space Force (USSF)… All references to USAF terminology, units, grades, and positions will also apply to the equivalent in the USSF, as appropriate. For example, references to Airmen will also apply to Guardians.” Para 2.11.3 expressly covers SAEMR wear under DAFI 36-2903 for USAF and USSF personnel.",
          "For Guardians: the same Rifle/Carbine AFQC and Handgun AFQC (DAFMAN 31-131 V2 structure, rounds, distances, Qualified/Expert standards as on the Air Force page), the same SAEMR (Expert only; bronze service star for Expert on both), and the same currency rule — every 12 months only for personnel with an arming requirement; no universal annual rifle qualification for all Guardians.",
        ],
        flag: "CAUTION — an AETC supplement to DAFI 31-131 states on its face that that supplement “does not apply to the United States Space Force” — a supplement-scoping statement for AETC Security Forces sustainment, not an exclusion of USSF from the base DAFI 31-131 CATM program. It is not cited here as Space Force having a different program.",
      },
    ],
  },
  {
    key: "coastguard",
    branch: "Coast Guard",
    ariaLabel: "Annual Qualification — Coast Guard",
    governing: "Awards — COMDTINST M1650.25E (15 Aug 2016), Coast Guard Military Medals and Awards Manual, Ch. 5; qualification courses/scores — Ordnance Manual, COMDTINST M8000.2 (series), Ch. 14 (per the Awards Manual's own cross-reference).",
    sourceLabel: "COMDTINST M1650.25E Ch. 5 · MyCG",
    sources: [
      { label: "COMDTINST M1650.25E text as quoted in an official Coast Guard BCMR decision (.mil)", url: "https://boards.law.af.mil/CG/BCMR/Medals%20Awards%20Insignia/2020-055%20Medals_Redacted.pdf" },
      { label: "MyCG — competitive marksmanship / COMDTINST 3590.1B", url: "https://www.mycg.uscg.mil/News/Article/3328919/" },
    ],
    blocks: [
      {
        heading: "Awards / levels (CONFIRMED, COMDTINST M1650.25E Ch. 5)",
        quote:
          "Expert medals and marksmanship ribbons will be awarded for achieving specified scores over a prescribed course of fire. The Ordnance Manual, COMDTINST M8000.2 (series), provides complete information regarding qualification requirements for these awards and other marksmanship distinctions. Marksman, sharpshooter, or expert awards are permanent. An individual's award will be upgraded when a higher qualifying score is fired; awards lower than those previously earned will not be awarded or worn. — COMDTINST M1650.25E, Ch. 5",
        bullets: [
          "Expert Rifleman Medal — qualify as Expert with the service rifle over a prescribed course of fire.",
          "Expert Pistol Shot Medal — qualify as Expert with the service pistol over a prescribed course of fire.",
          "Coast Guard Rifle Marksmanship Ribbon — qualify as Marksman or better with the service rifle: no device for Marksman, silver “S” for Sharpshooter, silver “E” for Expert.",
          "Coast Guard Pistol Marksmanship Ribbon — same structure for the service pistol.",
          "Expert Rifleman / Expert Pistol Shot Medals are awarded by district commanders / HQ unit commanding officers for initial qualification only (ribbon + “E” device is the continuing wear item).",
        ],
        flag: "DEVICE-COLOR FLAG — Coast Guard devices are silver “S” and silver “E”; the Navy Sharpshooter device is bronze “S” (Navy Expert “E” is silver). Do not blend them.",
      },
      {
        heading: "Course structure, rounds, distances, and score bands",
        paras: [
          "The Coast Guard's qualification courses live in its Ordnance Manual (COMDTINST M8000.2), which is marked For Official Use Only and is not publicly available — so course numbers and currency are not shown here.",
        ],
        withheld: "All Coast Guard course numbers — rounds, distances, score bands — and currency: NOT PUBLISHED HERE (FOUO source). CG numbers circulating on non-official sites (which variously cite incompatible course totals) are not published without a releasable official source, and no universal annual qualification period is stated.",
      },
      {
        heading: "Competitive marksmanship (separate from qualification)",
        paras: [
          "Distinguished Marksman (rifle) and Distinguished Pistol Shot Badges require a cumulative 30 lifetime Excellence-in-Competition points (Gold = 10, Silver = 8, Bronze = 6); Bronze EIC badge on first credit points, Silver EIC on second — COMDTINST 3590.1B, via MyCG. This is competition, not annual qualification.",
        ],
      },
    ],
  },
];

/* ------------------------------ Part D ------------------------------ */
/* Safety rules, operator basics & cycle of operations. This part
 * LEADS with the safety rules, as published — each service's set is
 * printed as that service publishes it; wording differences are real
 * and are NOT harmonized. */

export type SafetySet = {
  service: string;
  ariaLabel: string;
  /** The verbatim published rules — null when the set is NOT quoted
   * (Coast Guard: not officially confirmable). */
  rules: string[] | null;
  attribution: string;
  note?: string;
  /** Rendered instead of rules when rules is null. */
  flagLine?: string;
  sources: WeaponLink[];
  sourceLabel: string;
};

export const SAFETY_INTRO =
  "Each service's set is printed as that service publishes it. Wording differences are real and are not harmonized — the Army's rule 2 ends in “destroy,” the Marine Corps' and Navy's in “shoot,” the Air Force's in “willing to shoot,” and the Air Force publishes six rules, not four.";

export const SAFETY_SETS: SafetySet[] = [
  {
    service: "Marine Corps",
    ariaLabel: "Safety rules — Marine Corps",
    rules: [
      "Treat Every Weapon as if it Were Loaded",
      "Never Point a Weapon at Anything You Do Not Intend to Shoot",
      "Keep Your Finger Straight and Off the Trigger Until You are Ready to Fire",
      "Keep Weapon on Safe Until You Intend to Fire",
    ],
    attribution: "From Weapons Training Battalion lesson plan CPP.4, Combat Pistol Program, hosted on trngcmd.marines.mil, citing MCRP 3-01B.",
    sources: [
      { label: "WTBn lesson plan CPP.4 (USMC Training Command)", url: "https://www.trngcmd.marines.mil/Portals/207/Docs/wtbn/MPMS/CPP-04-Weapons-Handling.pdf" },
      { label: "DVIDS — Weapons safety, MCAS Yuma (corroboration)", url: "https://www.dvidshub.net/news/102034/weapons-safety-marine-corps-air-station-yuma" },
    ],
    sourceLabel: "WTBn CPP.4 / MCRP 3-01B",
  },
  {
    service: "Army",
    ariaLabel: "Safety rules — Army",
    rules: [
      "Treat Every Weapon as if it is Loaded",
      "Never Point the Weapon at Anything You Do Not Intend to Destroy",
      "Keep Finger Straight and Off the Trigger Until Ready to Fire",
      "Ensure Positive Identification of the Target and its Surroundings",
    ],
    attribution: "From TC 3-22.9 (Distribution A), Ch. 1, paras 1-6 thru 1-14, “Rules of Firearms Safety.”",
    note: "Wording differences vs. USMC (do not harmonize): Army rule 2 ends in “destroy,” USMC in “shoot.” Army rule 4 is target identification; the Army set has no “keep weapon on safe” rule, which is USMC rule 4.",
    sources: [
      { label: "TC 3-22.9, Rifle and Carbine (Army Publishing Directorate, DR_a)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/pdf/web/ARN19927_TC_3-22x9_C3_FINAL_WEB.pdf" },
    ],
    sourceLabel: "TC 3-22.9, Ch. 1 (Distribution A)",
  },
  {
    service: "Navy",
    ariaLabel: "Safety rules — Navy",
    rules: [
      "Treat every weapon as if it were loaded.",
      "Never point a weapon at anything you do not intend to shoot.",
      "Keep your finger straight and off the trigger until ready to fire.",
      "Keep weapon on “safe” until you intend to fire.",
    ],
    attribution:
      "From OPNAVINST 3591.1G, Ch. 4, §3, “Universal Safety Rules” (p. 4-1). The instruction states it “is cleared for public release” via the DON Issuances website. Preamble: “The four safety rules in subparagraphs 3a through 3d are the foundation for responsible weapons handling. These rules must be observed at all times, whether in training or in combat.”",
    note: "The Navy set matches the USMC set in substance — it differs from the Army set exactly where the USMC set does. An older Navy training text (BMR Ch. 11) carries a separate, longer 15-item precautions list; it is not the 3591.1G set and is not substituted for it.",
    sources: [
      { label: "OPNAVINST 3591.1G (SECNAV DON Issuances)", url: "https://www.secnav.navy.mil/doni/Directives/03000%20Naval%20Operations%20and%20Readiness/03-500%20Training%20and%20Readiness%20Services/3591.1G.pdf" },
    ],
    sourceLabel: "OPNAVINST 3591.1G, Ch. 4 (cleared for public release)",
  },
  {
    service: "Air Force",
    ariaLabel: "Safety rules — Air Force",
    rules: [
      "Treat all weapons as if they are loaded at all times.",
      "Never point a weapon at anything you are not willing to shoot.",
      "Keep your weapon on safe until you are ready to fire (does not apply to SA/LW designed without a manual safety or those directed to be carried in the “fire” position in this manual).",
      "Keep your finger off the trigger until your sights are on target and you are ready to fire.",
      "Positively identify your target and know what is around and behind it.",
      "Never engage in horseplay while handling weapons.",
    ],
    attribution:
      "From DAFMAN 31-131, Volume 3, Small Arms and Light Weapons Handling Procedures, 1 Apr 2025, para 2.3, “Standardized Safety Rules” (header: “RELEASABILITY: There are no releasability restrictions on this publication”). Intro: “At a minimum, personnel will comply with the following safety rules anytime they handle SA/LW.” The rules are numbered 2.3.1–2.3.6 in the manual. This supersedes AFMAN 31-129 (2020).",
    note: "The Air Force publishes six rules, not four; order differs (safe = rule 3, finger = rule 4); rule 2 uses “willing to shoot” (USMC/Navy: “intend to shoot”; Army: “intend to destroy”); it is the only set here that also folds in the target-identification rule (2.3.5) and a horseplay rule (2.3.6). Space Force handles SA/LW under the same DAF publications — no separate USSF set was found; the DAF set above serves for Guardians under that note rather than as a distinct Space Force set.",
    sources: [
      { label: "DAFMAN 31-131 Volume 3 (Air Force e-Publishing)", url: "https://static.e-publishing.af.mil/production/1/af_a4/publication/dafman31-131v3/dafman31-131v3.pdf" },
    ],
    sourceLabel: "DAFMAN 31-131 Vol. 3, para 2.3 (no releasability restrictions)",
  },
  {
    service: "Coast Guard",
    ariaLabel: "Safety rules — Coast Guard",
    rules: null,
    attribution: "",
    flagLine:
      "NOT OFFICIALLY CONFIRMED — no official uscg.mil posting of a Coast Guard safety-rules set was found; the CG Ordnance Manual (COMDTINST M8000.x series) is not publicly posted with the rules text. A four-rule set is attested in secondary study material, but it is not published here as an official Coast Guard quotation until an official CG source is found.",
    sources: [],
    sourceLabel: "No official public source confirmed",
  },
];

/* --------------------- Operator basics (D3) --------------------- */
/* ONLY the three systems whose operator manuals passed the public
 * gate carry procedures. Everything else is named with its manual
 * and its non-public status in MANUAL_STATUS below — no procedures,
 * not even from memory. */

export const OPERATOR_GATE_NOTE =
  "A system gets procedures here only if its operator manual (-10/TM) is confirmed publicly released (Distribution A on the manual, DR_a hosting, or official .mil posting — mirrored copies on document sites do not by themselves satisfy the gate). Only three systems pass. Clearing + immediate action only — no employment, tactics, fire planning, gunnery, or crew drills anywhere in this part. Disassembly/care is named by chapter/title only, never expanded.";

export type OperatorBasics = {
  systemId: string;
  name: string;
  ariaLabel: string;
  manual: string;
  flag?: string;
  blocks: WBlock[];
  sources: WeaponLink[];
  sourceLabel: string;
};

export const OPERATOR_BASICS: OperatorBasics[] = [
  {
    systemId: "m203",
    name: "M203 / M203A1",
    ariaLabel: "Operator basics — M203",
    manual: "TM 9-1010-221-10 carries Distribution Statement A.",
    sourceLabel: "TM 9-1010-221-10 (Distribution A) · FM 3-22.31 (2003)",
    sources: [],
    blocks: [
      {
        heading: "Clearing (TM Ch. 2, “Clearing”)",
        paras: [
          "Press the latch and move the barrel forward — the casing automatically extracts and ejects; a stuck casing is removed by tapping with a rifle cleaning rod. The USMC common-skills sequence quoting this TM states the same clearing as: push in the release button and pull the barrel forward; watch to see if a round extracts; place the safety on SAFE; inspect the chamber to ensure no ammunition is present; pull the barrel to the rear until it clicks.",
        ],
      },
      {
        heading: "Malfunctions the manual treats",
        paras: [
          "Hangfire and misfire (TM Ch. 2 — every failure to fire is handled as a hangfire until eliminated). The companion public FM 3-22.31 (2003), Ch. 4, Table 4-1 lists mechanical malfunctions including failure to cock and failure to lock.",
        ],
      },
      {
        heading: "Immediate action (as the public sources state it)",
        paras: [
          "Keep the M203 pointed downrange/at the target and everyone clear of the muzzle; wait 30 seconds; depress the barrel latch and push the barrel assembly fully forward; clear obstructions in the chamber; pull the barrel assembly to the rear until the barrel latch locks; sight and attempt to fire.",
          "TM hangfire handling adds: clear all personnel from the area (at least 80 meters) while waiting; unload and catch the round (or unload close to the ground); store the round at a safe distance from serviceable ammunition; a dented primer = hangfire, handle accordingly; if the primer is not dented, the firing mechanism is faulty.",
          "Remedial action (name/summary only): performed if immediate action fails to clear the stoppage, as outlined in TM 9-1010-221-10.",
        ],
      },
      {
        heading: "Operator care (title/chapter only)",
        paras: [
          "TM Ch. 3, “Maintenance Instructions” — Section I, “Lubrication Instructions”; Section II, “Troubleshooting Procedures”; Section III, “Maintenance Procedures” (contains the disassembly/cleaning procedures).",
        ],
      },
    ],
  },
  {
    systemId: "mk19",
    name: "Mk 19 Mod 3",
    ariaLabel: "Operator basics — Mk 19",
    manual: "TM 9-1010-230-10 — 2001 EDITION ONLY (30 May 2001 edition).",
    flag: "SUPERSESSION WARNING — the 30 May 2001 edition carries Distribution Statement A; the superseding 31 Aug 2012 edition is Statement D (“critical technology”). Everything below is from the 2001 A edition only; the 2012 edition is not public, and every citation here is pinned to the 2001 edition.",
    sourceLabel: "TM 9-1010-230-10, 2001 edition (Distribution A) · TB 43-PS-584 (Jul 2001)",
    sources: [],
    blocks: [
      {
        heading: "Clearing/unloading (2001 TM, operator instructions)",
        paras: [
          "Place the weapon on safe; open the cover; remove the remaining rounds and inspect the chamber; once clear, close the cover. For a jam, the stoppage work package adds: clear the area of personnel; pull the bolt to the rear (if charging is not possible, go to “Bolt Jammed”); catch the live round as it is ejected; push the charging handles forward and up; put the gun on S (SAFE); check for bore obstruction.",
        ],
      },
      {
        heading: "Malfunctions listed",
        paras: [
          "TM Ch. 3, “Troubleshooting Procedures,” WP 0008 carries a malfunction/symptom index; the symptom extracted verbatim is “Gun Won't Shoot,” whose user's-action entry directs the stoppage procedure and pawl checks. Any unusual occurrence during firing (short recoil, out-of-battery, excess smoke/flash, loud or muffled report, malfunction or stoppage) warrants immediate inspection — clear the weapon and check for bore obstruction and for damage/debris in feeder, bolt face, and receiver.",
        ],
      },
      {
        heading: "Immediate action / user's action for a stoppage (TM para 4-1, as summarized in the official public-release TB 43-PS-584, Jul 2001)",
        paras: [
          "Clear the jammed round per TM procedures and make sure there is no bore obstruction; charge the gun; check whether the primary pawl has clicked up behind the next round (the TM specifies the primary pawls click up behind the cartridge in front of the bolt face and the secondary pawls behind the next round, within the last 1 inch of charging-handle travel); if it has, return to firing.",
          "Remedial action (name/summary only): if the pawls do not click up, turn the gun in to unit-level maintenance for troubleshooting/PMCS per TM 9-1010-230-23&P; if nothing appears wrong, the armorer files a Malfunction Incident Report.",
        ],
      },
      {
        heading: "Operator care (title only)",
        paras: [
          "The 2001 TM's maintenance work packages (WP 0001 00–WP 0019 00), including “General Cleaning and Lubrication” — which specifies LSAT as the lubricant and states CLP/LSA are never used on the Mk 19. Disassembly/assembly work packages are named only.",
        ],
      },
    ],
  },
  {
    systemId: "m9",
    name: "M9 / M9A1",
    ariaLabel: "Operator basics — M9",
    manual: "TM 9-1005-317-10, hosted in the armypubs DR_a directory — with the records conflict flagged below.",
    flag: "RECORDS CONFLICT — the armypubs ProductMaps record lists the TM ACTIVE (06/20/2016) with its file footnote pointing to the AESIP login portal — the current record is login-gated even though a DR_a-hosted copy exists. The procedures below are from the TM's 1985/2007 editions as mirrored; the DR_a PDF itself could not be re-fetched in the research session. Read this entry with that flag in place.",
    sourceLabel: "TM 9-1005-317-10 (DR_a-hosted; records conflict flagged)",
    sources: [],
    blocks: [
      {
        heading: "Clearing (Army STP task citing TM 9-1005-317-10)",
        paras: [
          "Place the decocking/safety lever to SAFE; depress the magazine release and remove the magazine; pull the slide to the rear and remove the chambered round; push the slide stop up and lock the slide to the rear; look into the chamber to ensure it is empty.",
        ],
      },
      {
        heading: "Malfunction types listed (TM Ch. 3 Troubleshooting; 2007 ed. WP 0009 00 symptom index)",
        bullets: [
          "Ammunition does not feed / failure to feed",
          "Ammunition does not chamber",
          "Slide does not lock fully forward",
          "Pistol does not fire",
          "(Short-recoil symptom entry)",
          "Hammer does not cock with the lever in FIRE",
          "Hammer does not decock with the lever in SAFE",
          "Slide separates upon firing",
        ],
        paras: [
          "The last three carry no operator test — corrective action is “evacuate pistol to Organizational/unit maintenance.”",
        ],
      },
      {
        heading: "Immediate action (TM Ch. 2, Section V, “Emergency Procedures”)",
        paras: [
          "On a failure to fire, work the slide (grasp the slide and retract it to the rear, locking it with the slide stop, per the extracted text), then place the decocking/safety lever in FIRE (up), aim, and attempt to fire.",
          "Remedial action (name/summary only): if the pistol does not fire after immediate action, make a detailed inspection per the Troubleshooting Procedures in Ch. 3; if the cause cannot be determined, evacuate the pistol to organizational maintenance.",
          "(Labeled as a different publication: the public TC 3-23.35, Pistol (2017), states pistol immediate action as “tap, rack, bang” — that is the TC's drill wording, not the TM's.)",
        ],
      },
      {
        heading: "Operator care (title/chapter only)",
        paras: [
          "TM Ch. 3, “Maintenance Instructions” — Section II, “Troubleshooting Procedures”; Section III, “Maintenance Procedures,” para 3-3, “Disassembly (Field Stripping).” In the 2007 edition, cleaning/lubrication is WP 0013 00.",
        ],
      },
    ],
  },
];

/* --------------------- Cycles of operations (D4) --------------------- */

export const CYCLES_INTRO =
  "The mechanical sequence is functioning theory, printed only where a publicly released service publication states it. The pattern: for most systems the -10 operator TM is Distribution C/D (fails the gate), but the matching Army Training Circular (TC 3-22.x / 3-23.x) is Distribution A and prints a formal “Cycle of Function” — those TCs are the source below, and each entry also reports the TM's own status so the TC-vs-TM distinction is never hidden. Steps are named as the publication names them. No gunnery, no employment.";

export type CycleEntry = {
  systemId: string;
  name: string;
  ariaLabel: string;
  /** Given visual prominence (the M240B — the named example). */
  prominent?: boolean;
  /** Open statement of whether the -10 manual is public, and where
   * the cycle itself is sourced. */
  manualStatus: string;
  note?: string;
  steps: { name: string; text: string; dagger?: boolean }[];
  sources: WeaponLink[];
  sourceLabel: string;
};

export const CYCLES: CycleEntry[] = [
  {
    systemId: "m240",
    name: "M240B (M240 family)",
    ariaLabel: "Cycle of operations — M240B",
    prominent: true,
    manualStatus:
      "TM 9-1005-313-10 (the -10 operator manual) is Distribution Statement C — NOT public. The cycle below is from TC 3-22.240, Medium Machine Gun, 28 Apr 2017 — Distribution A, Ch. 2, paras 2-12–2-21. Para 2-13 lists the cycle in this order — the eight steps:",
    sourceLabel: "TC 3-22.240, Ch. 2 (Distribution A) — the -10 TM is NOT public",
    sources: [
      { label: "TC 3-22.240, Medium Machine Gun (mirror of the Distribution A publication; official copy via APD)", url: "https://archive.org/download/medium-machine-gun-tc-3-22.240/Medium%20Machine%20Gun%20-%20TC%203-22.240.pdf" },
    ],
    steps: [
      { name: "Feeding", text: "The bolt assembly roller moves the feed lever side to side, moving the feed pawls; the bolt's forward and rearward movement fully feeds the round, and the fired round's link is pushed out the side of the gun. (2-14)" },
      { name: "Chambering", text: "As the bolt travels forward, the feed horn strikes the base of the round and the bolt strips it from the belt link; the chambering ramp and cartridge guide pawl force the round into the chamber, and when it is fully seated the extractor snaps over the rim and the ejector depresses. (2-15)" },
      { name: "Locking", text: "The bolt enters the barrel breech as the operating rod drives forward and the locking lever swings forward, pushing the bolt forward and locking it to the barrel breech (the manual notes the bolt and barrel do not physically interlock in the M240-series). (2-16)" },
      { name: "Firing", text: "After the bolt reaches its locked position, the operating rod moves forward independent of the bolt, and the final forward movement of the piston extension drives the firing pin through the bolt assembly onto the cartridge primer, firing the round. (2-17)" },
      { name: "Unlocking", text: "Gas through the gas plug regulator into the gas cylinder forces the operating assembly to the rear (powering the last four steps); the operating rod moves independent of the bolt briefly, then the locking lever swings rearward, carrying the bolt into its unlocked position and clearing the barrel breech. (2-18)" },
      { name: "Extracting", text: "When the breech is fully unlocked and the bolt starts rearward, the extractor withdraws the empty case from the chamber. (2-19)" },
      { name: "Ejecting", text: "As the case is withdrawn, the ejector pushes from the top and the extractor pulls from the bottom; the casing falls from the bolt face at the cartridge ejection port, and empty belt links are forced out the link ejection port. (2-20)" },
      { name: "Cocking", text: "As the working parts continue rearward the return spring compresses; when the gunner releases the trigger, the tripping lever action allows the sear to rise and engage the sear notch, holding the working parts to the rear. (2-21)" },
    ],
  },
  {
    systemId: "m4",
    name: "M4/M4A1 and M16 series",
    ariaLabel: "Cycle of operations — M4/M16 family",
    manualStatus:
      "TM 9-1005-319-10 (the -10 operator manual) is Distribution Statement C — NOT public. The cycle below is from TC 3-22.9 — Distribution A, Ch. 2, paras 2-8–2-18 (system note, para 2-10: direct impingement gas operating system). The TC's per-step definitions:",
    sourceLabel: "TC 3-22.9, Ch. 2 (Distribution A) — the -10 TM is NOT public",
    sources: [
      { label: "TC 3-22.9, Rifle and Carbine (Army Publishing Directorate, DR_a)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/pdf/web/ARN19927_TC_3-22x9_C3_FINAL_WEB.pdf" },
    ],
    steps: [
      { name: "Feeding", text: "“The process of mechanically providing a cartridge of ammunition to the entrance of the chamber.” (2-11)" },
      { name: "Chambering", text: "“The continuing action of the feeding round into the chamber of the weapon.” (2-12)" },
      { name: "Locking", text: "“The process of creating a mechanical grip between the bolt assembly and chamber with the appropriate amount of headspace (clearance) for safe firing” (occurs simultaneously with the final actions of chambering). (2-13)" },
      { name: "Firing", text: "“The finite process of initiating the primer detonation of the cartridge and continues through shot-exit of the projectile from the muzzle.” (2-14)" },
      { name: "Unlocking", text: "“The process of releasing the locking lugs on the bolt face from the corresponding recesses on the barrel extension surrounding the chamber area.” (2-15)" },
      { name: "Extracting", text: "“The removal of the expended cartridge case from the chamber by means of the extractor.” (2-16)" },
      { name: "Ejecting", text: "“The removal of the spent cartridge case from the weapon itself.” (2-17)" },
      { name: "Cocking", text: "“The process of mechanically positioning the trigger assembly's parts for firing. The cocking phase completes the full cycle of functioning.” (2-18)" },
    ],
  },
  {
    systemId: "m249",
    name: "M249",
    ariaLabel: "Cycle of operations — M249",
    manualStatus:
      "The cycle below is from TC 3-22.249 (2017) — Distribution A, hosted in the APD DR_a directory, Ch. 2, paras 2-8–2-18 (system note, 2-10: indirect impingement gas operating system). The operator manual is TM 9-1005-201-10, itself Distribution Statement C — NOT public.",
    sourceLabel: "TC 3-22.249, Ch. 2 (Distribution A) — the -10 TM is NOT public",
    sources: [
      { label: "TC 3-22.249, Light Machine Gun, M249 Series (Army Publishing Directorate, DR_a)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/pdf/web/ARN3242_TC%203-22x249%20FINAL%20WEB.pdf" },
    ],
    steps: [
      { name: "Feeding", text: "As the bolt starts forward the feed lever is forced right, turning the feed pawl assembly over the next round in the belt; as the bolt moves rear after firing, the feed roller forces the lever left and the feed pawl places a round in the tray groove. (2-11)" },
      { name: "Chambering", text: "The bolt's stripping lug engages the rim and carries the round forward, stripped from the belt; the chambering ramp cams the nose down into the chamber; when fully seated the extractor snaps over the rim and the ejector is depressed. (2-12)" },
      { name: "Locking", text: "The bolt enters the barrel socket as the round chambers; locking lugs contact the camming surfaces and turn the bolt counterclockwise, and the bolt's action into the slide assembly as the piston continues forward completes the rotation — locking is complete. (2-13)" },
      { name: "Firing", text: "After the bolt is fully forward and locked, the piston continues forward independent of the bolt; the slide assembly carries the firing pin through the bolt face to strike the primer and fire the round. (2-14)" },
      { name: "Unlocking", text: "After firing, gas entering the gas cylinder forces the piston rearward; the slide assembly causes the bolt to rotate clockwise until the rotation and rearward movement unlock the bolt from the barrel socket. (2-15)" },
      { name: "Extracting", text: "Begins during unlocking; as piston and bolt move rearward, the extractor pulls the cartridge case from the chamber. (2-16)" },
      { name: "Ejecting", text: "As the case is pulled from the chamber it impacts the ejector while the extractor still grips it, spinning it from the weapon through the ejection port; empty links are forced off the feed tray by the next round. (2-17)" },
      { name: "Cocking", text: "The recoiling piston assembly retracts the slide and firing pin; the cycle repeats while the trigger is held, and when the trigger is released the sear engages the sear notch of the piston assembly — the cycle stops and the weapon is cocked. (2-18)" },
    ],
  },
  {
    systemId: "m2",
    name: "M2 / M2A1",
    ariaLabel: "Cycle of operations — M2 / M2A1",
    manualStatus:
      "TM 9-1005-213-10 (the -10 operator manual) is Distribution Statement C — NOT public. The cycle below is from TC 3-22.50, Heavy Machine Gun M2 Series, 19 May 2017 — Distribution A, officially posted on rdl.train.army.mil, Ch. 2, para 2-11 (“some of these steps may occur at the same time”).",
    note: "† Sourcing note: six of the eight TC paragraphs were captured verbatim from TC 3-22.50 itself. For Chambering (†) and Unlocking (†), the TC's paragraph/figure citations are confirmed from the TC, and the one-line definitions match the text of FM 3-22.65/FM 23-65 — the manual TC 3-22.50 expressly supersedes — whose other definitional leads the TC carried over word-for-word (verified for Feeding, Extracting, Ejecting, Cocking).",
    sourceLabel: "TC 3-22.50, Ch. 2 (Distribution A) — the -10 TM is NOT public",
    sources: [
      { label: "TC 3-22.50, Heavy Machine Gun M2 Series (Army Training Registry)", url: "https://rdl.train.army.mil/catalog-ws/view/100.ATSC/A736EED1-595B-4049-B7B5-1E0261D8E478-1495566423695/tc3_22x50.pdf" },
    ],
    steps: [
      { name: "Feeding", text: "“Feeding is the act of placing a cartridge in the receiver, and onto the face of the bolt, ready for chambering.” Two steps: (1) movement of a new belt into the feedway until the round is positioned where the extractor can grip it (2-13); (2) the extractor stripping a round from the belt and placing it into the T-slot in preparation for chambering (2-16). (2-12)" },
      { name: "Chambering", text: "Placing the cartridge into the chamber: the bolt moves forward, carrying the cartridge in the T-slot in a direct route to the chamber. (2-19)", dagger: true },
      { name: "Locking", text: "Locking begins 1⅛ inches before the recoiling groups (bolt, barrel extension, barrel) are fully forward; the breech lock in the barrel extension rides up the breech lock cam into the breech lock recess in the bottom of the bolt, locking the recoiling groups together ¾ inch before the groups are fully forward. (2-20–2-22)" },
      { name: "Firing", text: "Pressing the trigger pivots it so the trigger cam raises the trigger bar, whose front end presses down on the sear stud; the sear is forced down until the hooked notch of the firing pin extension disengages, and the firing pin and extension are driven forward by the firing pin spring — the striker hits the primer, firing the round. (2-23)" },
      { name: "Unlocking", text: "The bolt is unlocked from the barrel and barrel extension: during recoil the breech lock is forced out of its recess in the bolt, and the beveled lock surfaces make the bolt's initial movement away from the barrel and barrel extension gradual. (2-25–2-26)", dagger: true },
      { name: "Extracting", text: "“The empty cartridge case is pulled from the chamber.” Because the fired case has expanded and fits snugly, the beveled edges of the breech lock and bolt recess ensure slow initial extraction so the case is not torn. (2-27)" },
      { name: "Ejecting", text: "“The empty cartridge case is expelled from the receiver.” As the bolt starts forward (counterrecoil), the extractor lug rides below the extractor switch, forcing the extractor down until the round centers in the T-slot and the case is ejected from it; the last empty case of a belt is pushed out by the ejector. (2-28)" },
      { name: "Cocking", text: "“The firing pin is withdrawn into the cocked position.” (2-29)" },
    ],
  },
  {
    systemId: "m9",
    name: "M9",
    ariaLabel: "Cycle of operations — M9",
    manualStatus:
      "TM 9-1005-317-10 is Distribution Statement C per the cycle research (see the operator-basics records conflict above — a DR_a-hosted copy also exists; flagged, not resolved here). The cycle below is from TC 3-23.35, Pistol, 2017 — Distribution A, Ch. 2, paras 2-8–2-18 (para 2-8 states the cycle content “pertains specifically to the M9 service pistol”; system note, 2-10: short recoil system utilizing a falling locking block).",
    sourceLabel: "TC 3-23.35, Ch. 2 (Distribution A) — the -10 TM's status is flagged",
    sources: [],
    steps: [
      { name: "Feeding", text: "The process of mechanically providing a cartridge to the entrance of the chamber. (2-11)" },
      { name: "Chambering", text: "“The continuing action of feeding the round into the chamber of the weapon.” (2-12)" },
      { name: "Locking", text: "The process of creating a mechanical grip between the slide and chamber with the appropriate amount of headspace for safe firing. (2-13)" },
      { name: "Firing", text: "The process of initiating the primer detonation of the cartridge, continuing through shot exit of the projectile from the muzzle. (2-14)" },
      { name: "Unlocking", text: "“The process of the slide beginning to come back.” (2-15)" },
      { name: "Extracting", text: "The removal of the expended cartridge case from the chamber by means of the extractor. (2-16)" },
      { name: "Ejecting", text: "The removal of the spent cartridge case from the weapon itself. (2-17)" },
      { name: "Cocking", text: "The process of mechanically positioning the trigger assembly's parts for firing; the cocking phase completes the full cycle of functioning. (2-18)" },
    ],
  },
  {
    systemId: "m203",
    name: "M203",
    ariaLabel: "Cycle of operations — M203",
    manualStatus:
      "TM 9-1010-221-10 (1 Aug 2001) is itself Distribution Statement A — one of the few -10s that passes the gate directly. The cycle below is as published in the companion FM 3-22.31 (FM 23-31), 40-mm Grenade Launcher M203, 13 Feb 2003, Distribution A, Ch. 2, para 2-4.",
    note: "The manual's step order differs from the automatic weapons — it begins with unlocking, because the cycle starts by opening the barrel.",
    sourceLabel: "FM 3-22.31, Ch. 2 (Distribution A) — the -10 TM is itself Distribution A",
    sources: [],
    steps: [
      { name: "Unlocking", text: "The cycle begins when the grenadier depresses the barrel latch to unlock the barrel assembly and slides the barrel assembly forward. (a)" },
      { name: "Cocking", text: "Moving the barrel assembly forward then backward cocks the weapon: the cocking lever forces the spring-loaded firing pin to the rear and, on the return, the firing pin engages the primary trigger sear. (b)" },
      { name: "Extracting", text: "Occurs at the same time as cocking; as the barrel opens, a spring-loaded extractor keeps the live round or spent case seated against the receiver until the barrel clears the case. (c)" },
      { name: "Ejecting", text: "The spring-loaded ejector pushes the live round or spent cartridge case from the barrel assembly. (d)" },
      { name: "Loading", text: "With the barrel assembly open, the grenadier inserts a round into the breech end of the barrel. (e)" },
      { name: "Chambering", text: "As the breech closes, the extractor contacts the rim of the cartridge and seats (chambers) the round firmly. (f)" },
      { name: "Locking", text: "As the barrel assembly closes, the barrel latch engages it and the cocking lever engages the barrel extension so it cannot move forward. (g)" },
      { name: "Firing", text: "Pulling the trigger disengages the primary trigger sear from the firing pin; the spring-driven firing pin is released forward against the cartridge primer. (h)" },
    ],
  },
  {
    systemId: "mk19",
    name: "Mk 19",
    ariaLabel: "Cycle of operations — Mk 19",
    manualStatus:
      "TM 9-1010-230-10's 2001 edition bore Distribution Statement A, but the current 31 Aug 2012 edition bears Distribution Statement D and supersedes it — the current TM fails the gate. The cycle below is sourced from FM 3-22.27 (FM 23-27), MK 19 40-mm Grenade Machine Gun Mod 3, 28 Nov 2003 — Distribution A (verified on the manual's own title pages), Ch. 2, para 2-1. Its cycle has six steps, not eight — “More than one step may be done at the same time.”",
    note: "Notes: the successor publication, TC 3-22.19 (2017, incl. C1 2020), reorganizes the principles-of-operation chapter rather than reprinting this six-step list; the FM list above is the clean published cycle. A USMC student handout (B3M4238) circulates a different six-step list (Feeding/Chambering/Firing/Extracting/Ejecting/Cocking) — it does not match FM 3-22.27 and was not used.",
    sourceLabel: "FM 3-22.27, Ch. 2 (Distribution A) — the current -10 TM is Statement D, NOT public",
    sources: [],
    steps: [
      { name: "Charging", text: "The charger handles are used to pull the bolt to the rear, aligning the round with the bolt extractors; the rearward movement drives the primary and secondary drive levers, moving the feed slide and feed pawls so the linked rounds move over one place and the leading round lines up with the bolt extractor. (a)" },
      { name: "Extracting (Delinking)", text: "After the weapon has been charged once, pressing the trigger slams the bolt forward and its extractors snap over the rim; on the next charge, the extractor pulls the leading round to the rear, separating the male and female links, and the curved edge of the vertical cam forces the round out of the extractors into the bolt fingers, lined up with the chamber. (b)" },
      { name: "Cocking", text: "The rearward movement of the bolt causes the cocking lever to retract the firing pin; when the cocking lever hits the rear end of the left receiver rail slot it is forced forward, and the firing pin sear holds the firing pin to the rear. (c)" },
      { name: "Firing", text: "Pressing the trigger depresses the tip of the receiver sear, which disengages the bolt sear and releases the bolt forward under spring pressure; the firing pin sear is pushed up to release the firing pin, and bolt inertia plus firing pin spring pressure drive the firing pin forward so its tip detonates the primer — the round is not completely inside the chamber at the moment of firing. (d, “Firing Cycle”)" },
      { name: "Blowback", text: "The gases from the burning powder force the bolt, with a new round in its extractors, to the rear; the vertical cam delinks and forces the new round down on top of the spent case, ejecting it out the bottom of the gun, and the recoil springs compress fully as the bolt buffers absorb over-travel. (e, combined “Blowback and Automatic Feeding Cycle”)" },
      { name: "Automatic Feeding", text: "During blowback, the feed slide assembly pulls the rounds to the right in the receiver ammunition feed area, where a new round is ready to pick up (automatic feed); during the bolt's rearward travel the cocking lever is also pushed forward, cocking the firing pin, and if the trigger is released the bolt sear engages the receiver sear and firing stops. (e, same paragraph)" },
    ],
  },
];

export const CYCLE_NAMED_ONLY: { name: string; text: string }[] = [
  {
    name: "M17 / M18 — named only, no steps published",
    text: "TM 9-1005-470-10 (15 Oct 2017) is Distribution Statement C (export-controlled warning). TC 3-23.35 covers the M9 only; no Distribution A publication printing an M17/M18 cycle was found. (A commercial SIG Sauer P320-M17 manual exists publicly but is not a service operator publication and was not used.)",
  },
  {
    name: "M1014 / M500 / M870 — named only, no steps published",
    text: "Service manuals exist for all three, but no public-release statement and no official .mil posting was confirmed for any of them. (A commercial Mossberg owner's manual and an unofficial “operating cycle” page were found and deliberately not used.)",
  },
  {
    name: "M110 / M24 / M2010 / Mk 13 — named only, no steps published",
    text: "M24's TM 9-1005-306-10 is confirmed Distribution Statement C from its own cover; no gated-in public cycle source was found for M110/M2010/Mk 13. Note also that the M24, M2010, and Mk 13 are bolt-action systems; no self-loading “cycle of functioning” of the automatic-weapon type is published for them in any source checked.",
  },
  {
    name: "M27 IAR — named only, no steps published",
    text: "No USMC operator TM confirmed publicly released (the only cycle list found was on an unofficial presentation site and was not used).",
  },
];

export const CYCLE_NOT_PUBLISHED: { name: string; text: string }[] = [
  {
    name: "M320 — no cycle published as such",
    text: "Its public service publication is TM 3-22.31, 40-mm Grenade Launchers, 24 Jan 2011 — Distribution A (operator manual TM 9-1010-232-10 is Distribution D). The public publication presents operation (clearing, loading, firing) but no “cycle of function/functioning” section was identified — it is a single-shot launcher, and no multi-step cycle is published as such. Nothing to print.",
  },
  {
    name: "M224 / M252 mortars — no cycle published as such",
    text: "FM 3-22.90, Mortars, 7 Dec 2007 (and predecessor FM 23-90) are Distribution A and cover both systems' nomenclature, operation, loading, and firing — but neither presents a “cycle of operations/functioning” as such: these are muzzle-loaded, smoothbore, drop-fired weapons with no self-loading cycle to describe.",
  },
];

/* ----------------- Operator manuals NOT public (D5) ----------------- */

export const MANUAL_STATUS_INTRO =
  "For every system below: NO procedures — systems-level info only. The entry names its operator manual and its non-public status, in the research pack's wording. Confirmed public for procedures (the three operator-basics cards above): M203/M203A1 (TM 9-1010-221-10, Statement A), Mk 19 Mod 3 (TM 9-1010-230-10, 2001 edition only), M9/M9A1 (TM 9-1005-317-10, DR_a-hosted — records conflict flagged).";

export const MANUAL_STATUS: { system: string; manual: string; status: string }[] = [
  { system: "M4 / M4A1", manual: "TM 9-1005-319-10", status: "Distribution Statement C; current record AESIP/IETM" },
  { system: "M16A4", manual: "TM 9-1005-319-10 (same TM)", status: "Distribution Statement C" },
  { system: "M27 IAR", manual: "Unknown", status: "No USMC TM or public posting found" },
  { system: "M17 / M18", manual: "TM 9-1005-470-10", status: "Distribution Statement C; AESIP" },
  { system: "M240", manual: "TM 9-1005-313-10", status: "Distribution Statement C" },
  { system: "M249", manual: "TM 9-1005-201-10", status: "Distribution Statement C" },
  { system: "M2 / M2A1", manual: "TM 9-1005-213-10", status: "Distribution Statement C" },
  { system: "M500", manual: "(Only TM 9-1005-338-13&P, maintenance)", status: "No public -10 operator manual found" },
  { system: "M870", manual: "(Only TO 11W3-6-2-1, maintenance)", status: "No public -10 operator manual found" },
  { system: "M1014", manual: "USMC TM 10698A-10/1", status: "Limited to U.S. Government agencies / FOUO" },
  { system: "M110", manual: "TM 9-1005-342-10; USMC TM 11920A-OR", status: "No A / DR_a / .mil evidence" },
  { system: "M24 SWS", manual: "TM 9-1005-306-10", status: "Distribution Statement C" },
  { system: "M2010 ESR", manual: "Unknown", status: "No manual number or posting found" },
  { system: "Mk 13", manual: "Unknown", status: "No manual number or posting found" },
  { system: "M320 / M320A1", manual: "TM 9-1010-232-10", status: "Distribution Statement D; AESIP (contrast the M203's TM — same launcher family, opposite release status)" },
  { system: "M224 / M224A1", manual: "TM 9-1010-223-10; TM 9-1010-233-10", status: "Statement C (old); AESIP (current)" },
  { system: "M252 / M252A1", manual: "TM 9-1015-249-10; TM 9-1015-257-10", status: "Statement C (M252); AESIP (M252A1)" },
  { system: "Mk 18", manual: "None identified", status: "No standalone operator manual found" },
];
