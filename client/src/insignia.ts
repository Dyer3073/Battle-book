// Rank insignia specs for the Rank Charts.
//
// Transcribed from the researched insignia pack
// (~/workspace/military-app/ranks/insignia.md), which specs each grade
// from official descriptions: chevron counts and direction, rockers,
// center device, colors, a one-line display description, and per-branch
// "how insignia differ by uniform" notes. The art specs here drive the
// stylized SVG illustrations in InsigniaArt.tsx — they draw ONLY what
// the pack's spec lines state. Where the pack flags a design as not
// officially text-specced, the entry carries art { t: "note" } or a
// flag instead of an invented drawing:
//   - Air Force warrants: designs exist only as official graphics in
//     AFGM2026-36-2033 Figure 11.1 → no drawing, note shown instead.
//   - USMC warrant bars: rendered with the pack's "verify against
//     current MCO 1020.34H" flag attached.
//   - Coast Guard warrant sleeve break counts: unconfirmed in the pack
//     → stripe and shield drawn, no break counts.
//   - Navy E-1: no rating badge normally worn → no badge drawn.
//
// Keys: enlisted/warrant rows are keyed `${grade}|${abbr}` to match the
// rows in ranks.ts exactly (split tracks share a grade); officer rows
// are keyed by grade alone because the device is fixed per grade.

export type DeviceKind =
  | "none"
  | "rifles"
  | "diamond"
  | "bomb"
  | "star"
  | "starWreath"
  | "ega"
  | "coa";

export type OfficerDevice =
  | { t: "bar"; color: "gold" | "silver"; count: 1 | 2 }
  | { t: "oak"; color: "gold" | "silver" }
  | { t: "eagle" }
  | { t: "stars"; count: number };

export type ArtSpec =
  | { t: "none" }
  | { t: "note" }
  | { t: "chev"; up: number; rockers: number; device: DeviceKind }
  | { t: "spcEagle" }
  | { t: "navyBadge"; stars: number; chevrons: number; rocker: boolean; mark: "rating" | "star"; chief: boolean }
  | { t: "groupStripes"; count: number }
  | { t: "afBadge"; down: number; up: number; cmsaf: boolean }
  | { t: "sfBadge"; mode: "delta" | "dgo"; stripes: number; chevrons: number; orbits: number; cmssf: boolean }
  | { t: "bar"; base: string; frame?: string; blocks?: { color: string; count: number; square?: boolean }; line?: string }
  | {
      t: "navyWarrant";
      barBase: string;
      breaks: { color: string; count: number } | "line";
      sleeveWidth: 0.25 | 0.5;
      sleeveBreaks: number;
      sleeveLine: boolean;
    }
  | { t: "cgWarrant" }
  | { t: "officer"; device: OfficerDevice; sleeve?: { widths: number[]; above: "star" | "shield" } };

export type InsigniaEntry = {
  display: string;
  flag?: string;
  art: ArtSpec;
};

export type RankCategory = "enlisted" | "warrant" | "officers";

const GOLD = "#d9a441";
const SILVER = "#c9ccd4";
const SCARLET_BAR = "#a6192e";
const NAVY_BAR_BLUE = "#2f4d9d";
const BLACK = "#1c1c22";

export const INSIGNIA_GUIDE_LABEL =
  "The insignia below are illustrated guides drawn from official descriptions — stylized drawings, not the issued articles. For the exact article, see the branch's official insignia page, linked under Sources at the bottom of this section.";

const USMC_WARRANT_FLAG =
  "Bar pattern is from MCO 1020.34H-based standard references — verify against the current MCO 1020.34H.";

const AF_WARRANT_FLAG =
  "The Air Force publishes these bar designs only as official graphics (AFGM2026-36-2033, Figure 11.1) — no text spec exists, so no drawing is shown rather than an invented one.";

const CG_WARRANT_FLAG =
  "Break counts per grade are not confirmed from the Coast Guard manual — verify in COMDTINST M1020.6. No break count is drawn.";

// The joint officer pattern (bars / oak leaves / eagle / stars) shared by
// the Marine Corps, Army, Air Force, and Space Force.
const JOINT_OFFICERS: Record<string, InsigniaEntry> = {
  "O-1": { display: "One gold bar.", art: { t: "officer", device: { t: "bar", color: "gold", count: 1 } } },
  "O-2": { display: "One silver bar.", art: { t: "officer", device: { t: "bar", color: "silver", count: 1 } } },
  "O-3": { display: "Two silver bars.", art: { t: "officer", device: { t: "bar", color: "silver", count: 2 } } },
  "O-4": { display: "A gold oak leaf.", art: { t: "officer", device: { t: "oak", color: "gold" } } },
  "O-5": { display: "A silver oak leaf.", art: { t: "officer", device: { t: "oak", color: "silver" } } },
  "O-6": { display: "A silver eagle.", art: { t: "officer", device: { t: "eagle" } } },
  "O-7": { display: "One silver star.", art: { t: "officer", device: { t: "stars", count: 1 } } },
  "O-8": { display: "Two silver stars.", art: { t: "officer", device: { t: "stars", count: 2 } } },
  "O-9": { display: "Three silver stars.", art: { t: "officer", device: { t: "stars", count: 3 } } },
  "O-10": { display: "Four silver stars.", art: { t: "officer", device: { t: "stars", count: 4 } } },
};

function navalOfficers(above: "star" | "shield", displays: Record<string, string>): Record<string, InsigniaEntry> {
  const sleeves: Record<string, number[]> = {
    "O-1": [0.5],
    "O-2": [0.5, 0.25],
    "O-3": [0.5, 0.5],
    "O-4": [0.5, 0.25, 0.5],
    "O-5": [0.5, 0.5, 0.5],
    "O-6": [0.5, 0.5, 0.5, 0.5],
    "O-7": [2],
    "O-8": [2, 0.5],
    "O-9": [2, 0.5, 0.5],
    "O-10": [2, 0.5, 0.5, 0.5],
  };
  const out: Record<string, InsigniaEntry> = {};
  for (const grade of Object.keys(JOINT_OFFICERS)) {
    const joint = JOINT_OFFICERS[grade]!;
    if (joint.art.t !== "officer") continue;
    out[grade] = {
      display: displays[grade] ?? joint.display,
      art: { t: "officer", device: joint.art.device, sleeve: { widths: sleeves[grade]!, above } },
    };
  }
  return out;
}

export const INSIGNIA: Record<string, Record<RankCategory, Record<string, InsigniaEntry>>> = {
  "Marine Corps": {
    enlisted: {
      "E-1|Pvt": { display: "No insignia.", art: { t: "none" } },
      "E-2|PFC": { display: "A single upward chevron.", art: { t: "chev", up: 1, rockers: 0, device: "none" } },
      "E-3|LCpl": { display: "One chevron above crossed rifles.", art: { t: "chev", up: 1, rockers: 0, device: "rifles" } },
      "E-4|Cpl": { display: "Two chevrons above crossed rifles.", art: { t: "chev", up: 2, rockers: 0, device: "rifles" } },
      "E-5|Sgt": { display: "Three chevrons above crossed rifles.", art: { t: "chev", up: 3, rockers: 0, device: "rifles" } },
      "E-6|SSgt": { display: "Three chevrons and one rocker, crossed rifles in the center.", art: { t: "chev", up: 3, rockers: 1, device: "rifles" } },
      "E-7|GySgt": { display: "Three chevrons and two rockers, crossed rifles in the center.", art: { t: "chev", up: 3, rockers: 2, device: "rifles" } },
      "E-8|MSgt": { display: "Three chevrons and three rockers, crossed rifles in the center.", art: { t: "chev", up: 3, rockers: 3, device: "rifles" } },
      "E-8|1stSgt": { display: "Three chevrons and three rockers with a diamond in the center.", art: { t: "chev", up: 3, rockers: 3, device: "diamond" } },
      "E-9|MGySgt": { display: "Three chevrons and four rockers with a bursting bomb in the center.", art: { t: "chev", up: 3, rockers: 4, device: "bomb" } },
      "E-9|SgtMaj": { display: "Three chevrons and four rockers with a star in the center.", art: { t: "chev", up: 3, rockers: 4, device: "star" } },
      "E-9 (special)|SMMC": {
        display: "Three chevrons and four rockers around the Eagle, Globe, and Anchor flanked by two stars.",
        art: { t: "chev", up: 3, rockers: 4, device: "ega" },
      },
    },
    warrant: {
      "W-1|WO1": { display: "A scarlet bar with one gold crossbar.", flag: USMC_WARRANT_FLAG, art: { t: "bar", base: SCARLET_BAR, frame: GOLD, blocks: { color: GOLD, count: 1 } } },
      "W-2|CWO2": { display: "A scarlet bar with two gold crossbars.", flag: USMC_WARRANT_FLAG, art: { t: "bar", base: SCARLET_BAR, frame: GOLD, blocks: { color: GOLD, count: 2 } } },
      "W-3|CWO3": { display: "A scarlet bar with one silver crossbar.", flag: USMC_WARRANT_FLAG, art: { t: "bar", base: SCARLET_BAR, frame: SILVER, blocks: { color: SILVER, count: 1 } } },
      "W-4|CWO4": { display: "A scarlet bar with two silver crossbars.", flag: USMC_WARRANT_FLAG, art: { t: "bar", base: SCARLET_BAR, frame: SILVER, blocks: { color: SILVER, count: 2 } } },
      "W-5|CWO5": { display: "A silver bar with a scarlet stripe down its center.", flag: USMC_WARRANT_FLAG, art: { t: "bar", base: SILVER, line: SCARLET_BAR } },
    },
    officers: { ...JOINT_OFFICERS },
  },
  Army: {
    enlisted: {
      "E-1|PV1": { display: "No insignia.", art: { t: "none" } },
      "E-2|PV2": { display: "One chevron.", art: { t: "chev", up: 1, rockers: 0, device: "none" } },
      "E-3|PFC": { display: "One chevron over one rocker.", art: { t: "chev", up: 1, rockers: 1, device: "none" } },
      "E-4|SPC": { display: "A gold eagle device — no chevrons.", art: { t: "spcEagle" } },
      "E-4|CPL": { display: "Two chevrons.", art: { t: "chev", up: 2, rockers: 0, device: "none" } },
      "E-5|SGT": { display: "Three chevrons.", art: { t: "chev", up: 3, rockers: 0, device: "none" } },
      "E-6|SSG": { display: "Three chevrons and one rocker.", art: { t: "chev", up: 3, rockers: 1, device: "none" } },
      "E-7|SFC": { display: "Three chevrons and two rockers.", art: { t: "chev", up: 3, rockers: 2, device: "none" } },
      "E-8|MSG": { display: "Three chevrons and three rockers.", art: { t: "chev", up: 3, rockers: 3, device: "none" } },
      "E-8|1SG": { display: "Three chevrons and three rockers with a diamond in the center.", art: { t: "chev", up: 3, rockers: 3, device: "diamond" } },
      "E-9|SGM": { display: "Three chevrons and three rockers with a star in the center.", art: { t: "chev", up: 3, rockers: 3, device: "star" } },
      "E-9|CSM": { display: "Three chevrons and three rockers with a wreath-circled star in the center.", art: { t: "chev", up: 3, rockers: 3, device: "starWreath" } },
      "E-9 (special)|SMA": {
        display: "The chevrons and rockers of a sergeant major, with the U.S. coat of arms flanked by two stars in the center.",
        art: { t: "chev", up: 3, rockers: 3, device: "coa" },
      },
    },
    warrant: {
      "W-1|WO1": { display: "A silver bar with one black square.", art: { t: "bar", base: SILVER, blocks: { color: BLACK, count: 1, square: true } } },
      "W-2|CW2": { display: "A silver bar with two black squares.", art: { t: "bar", base: SILVER, blocks: { color: BLACK, count: 2, square: true } } },
      "W-3|CW3": { display: "A silver bar with three black squares.", art: { t: "bar", base: SILVER, blocks: { color: BLACK, count: 3, square: true } } },
      "W-4|CW4": { display: "A silver bar with four black squares.", art: { t: "bar", base: SILVER, blocks: { color: BLACK, count: 4, square: true } } },
      "W-5|CW5": { display: "A silver bar with a single black line down its center.", art: { t: "bar", base: SILVER, line: BLACK } },
    },
    officers: { ...JOINT_OFFICERS },
  },
  Navy: {
    enlisted: {
      "E-1|SR": {
        display: "No rating badge.",
        flag: "No rating badge is normally worn at this grade; group-rate marks begin at E-2.",
        art: { t: "none" },
      },
      "E-2|SA": { display: "Two diagonal group stripes (white for the seaman group).", art: { t: "groupStripes", count: 2 } },
      "E-3|SN": { display: "Three diagonal group stripes (white for the seaman group).", art: { t: "groupStripes", count: 3 } },
      "E-4|PO3": { display: "A perched eagle and rating mark above one downward chevron.", art: { t: "navyBadge", stars: 0, chevrons: 1, rocker: false, mark: "rating", chief: false } },
      "E-5|PO2": { display: "A perched eagle and rating mark above two downward chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 2, rocker: false, mark: "rating", chief: false } },
      "E-6|PO1": { display: "A perched eagle and rating mark above three downward chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 3, rocker: false, mark: "rating", chief: false } },
      "E-7|CPO": { display: "Eagle and rating mark over an arc and three downward chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-8|SCPO": { display: "The chief's badge with one star above the eagle.", art: { t: "navyBadge", stars: 1, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-9|MCPO": { display: "The chief's badge with two stars above the eagle.", art: { t: "navyBadge", stars: 2, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-9 (special)|MCPON": {
        display: "The chief's badge with three stars above the eagle and a star in place of the rating mark.",
        art: { t: "navyBadge", stars: 3, chevrons: 3, rocker: true, mark: "star", chief: true },
      },
    },
    warrant: {
      "W-1|WO1": {
        display: "A narrow gold sleeve stripe with three blue breaks; a blue bar with one gold break.",
        art: { t: "navyWarrant", barBase: NAVY_BAR_BLUE, breaks: { color: GOLD, count: 1 }, sleeveWidth: 0.25, sleeveBreaks: 3, sleeveLine: false },
      },
      "W-2|CWO2": {
        display: "A gold sleeve stripe with three blue breaks; a blue bar with two gold breaks.",
        art: { t: "navyWarrant", barBase: NAVY_BAR_BLUE, breaks: { color: GOLD, count: 2 }, sleeveWidth: 0.5, sleeveBreaks: 3, sleeveLine: false },
      },
      "W-3|CWO3": {
        display: "A gold sleeve stripe with two blue breaks; a blue bar with one silver break.",
        art: { t: "navyWarrant", barBase: NAVY_BAR_BLUE, breaks: { color: SILVER, count: 1 }, sleeveWidth: 0.5, sleeveBreaks: 2, sleeveLine: false },
      },
      "W-4|CWO4": {
        display: "A gold sleeve stripe with one blue break; a blue bar with two silver breaks.",
        art: { t: "navyWarrant", barBase: NAVY_BAR_BLUE, breaks: { color: SILVER, count: 2 }, sleeveWidth: 0.5, sleeveBreaks: 1, sleeveLine: false },
      },
      "W-5|CWO5": {
        display: "A gold sleeve stripe carrying a thin blue line; a silver bar with a blue stripe down its center.",
        art: { t: "navyWarrant", barBase: SILVER, breaks: "line", sleeveWidth: 0.5, sleeveBreaks: 0, sleeveLine: true },
      },
    },
    officers: navalOfficers("star", {
      "O-1": "One gold bar; one gold sleeve stripe.",
      "O-2": "One silver bar; a full and a half sleeve stripe.",
      "O-3": "Two silver bars; two gold sleeve stripes.",
      "O-4": "A gold oak leaf; two full sleeve stripes with a half stripe between.",
      "O-5": "A silver oak leaf; three gold sleeve stripes.",
      "O-6": "A silver eagle; four gold sleeve stripes.",
      "O-7": "One silver star; one wide gold sleeve stripe.",
      "O-8": "Two silver stars; a wide stripe plus one full stripe.",
      "O-9": "Three silver stars; a wide stripe plus two full stripes.",
      "O-10": "Four silver stars; a wide stripe plus three full stripes.",
    }),
  },
  "Coast Guard": {
    enlisted: {
      "E-1|SR": { display: "One diagonal stripe.", art: { t: "groupStripes", count: 1 } },
      "E-2|SA": { display: "Two diagonal group stripes.", art: { t: "groupStripes", count: 2 } },
      "E-3|SN": { display: "Three diagonal group stripes.", art: { t: "groupStripes", count: 3 } },
      "E-4|PO3": { display: "A perched eagle and rating mark above one red chevron.", art: { t: "navyBadge", stars: 0, chevrons: 1, rocker: false, mark: "rating", chief: false } },
      "E-5|PO2": { display: "Eagle and rating mark above two red chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 2, rocker: false, mark: "rating", chief: false } },
      "E-6|PO1": { display: "Eagle and rating mark above three red chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 3, rocker: false, mark: "rating", chief: false } },
      "E-7|CPO": { display: "Eagle and rating mark over an arc and three gold chevrons.", art: { t: "navyBadge", stars: 0, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-8|SCPO": { display: "The chief's badge with one star above the eagle.", art: { t: "navyBadge", stars: 1, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-9|MCPO": { display: "The chief's badge with two stars above the eagle.", art: { t: "navyBadge", stars: 2, chevrons: 3, rocker: true, mark: "rating", chief: true } },
      "E-9 (special)|MCPOCG": { display: "The chief's badge with three stars above the eagle.", art: { t: "navyBadge", stars: 3, chevrons: 3, rocker: true, mark: "rating", chief: true } },
    },
    warrant: {
      "W-2|CWO2": { display: "A gold sleeve stripe with blue breaks and the Coast Guard shield above it.", flag: CG_WARRANT_FLAG, art: { t: "cgWarrant" } },
      "W-3|CWO3": { display: "A gold sleeve stripe with blue breaks and the Coast Guard shield above it.", flag: CG_WARRANT_FLAG, art: { t: "cgWarrant" } },
      "W-4|CWO4": { display: "A gold sleeve stripe with blue breaks and the Coast Guard shield above it.", flag: CG_WARRANT_FLAG, art: { t: "cgWarrant" } },
    },
    officers: navalOfficers("shield", {
      "O-1": "One gold bar; one gold sleeve stripe, Coast Guard shield above the stripes.",
      "O-2": "One silver bar; a full and a half sleeve stripe, Coast Guard shield above the stripes.",
      "O-3": "Two silver bars; two gold sleeve stripes, Coast Guard shield above the stripes.",
      "O-4": "A gold oak leaf; two full sleeve stripes with a half stripe between, Coast Guard shield above the stripes.",
      "O-5": "A silver oak leaf; three gold sleeve stripes, Coast Guard shield above the stripes.",
      "O-6": "A silver eagle; four gold sleeve stripes, Coast Guard shield above the stripes.",
      "O-7": "One silver star; one wide gold sleeve stripe, Coast Guard shield above the stripes.",
      "O-8": "Two silver stars; a wide stripe plus one full stripe, Coast Guard shield above the stripes.",
      "O-9": "Three silver stars; a wide stripe plus two full stripes, Coast Guard shield above the stripes.",
      "O-10": "Four silver stars; a wide stripe plus three full stripes, Coast Guard shield above the stripes.",
    }),
  },
  "Air Force": {
    enlisted: {
      "E-1|AB": { display: "No insignia.", art: { t: "none" } },
      "E-2|Amn": { display: "One downward chevron around a central star.", art: { t: "afBadge", down: 1, up: 0, cmsaf: false } },
      "E-3|A1C": { display: "Two downward chevrons around a central star.", art: { t: "afBadge", down: 2, up: 0, cmsaf: false } },
      "E-4|SrA": { display: "Three downward chevrons around a central star.", art: { t: "afBadge", down: 3, up: 0, cmsaf: false } },
      "E-5|SSgt": { display: "Four downward chevrons around a central star.", art: { t: "afBadge", down: 4, up: 0, cmsaf: false } },
      "E-6|TSgt": { display: "Five downward chevrons around a central star.", art: { t: "afBadge", down: 5, up: 0, cmsaf: false } },
      "E-7|MSgt": { display: "Five chevrons below and one above a central star.", art: { t: "afBadge", down: 5, up: 1, cmsaf: false } },
      "E-8|SMSgt": { display: "Five chevrons below and two above a central star.", art: { t: "afBadge", down: 5, up: 2, cmsaf: false } },
      "E-9|CMSgt": { display: "Five chevrons below and three above a central star.", art: { t: "afBadge", down: 5, up: 3, cmsaf: false } },
      "E-9 (special)|CMSAF": {
        display: "Chief master sergeant chevrons with a wreathed star and the Great Seal above.",
        art: { t: "afBadge", down: 5, up: 3, cmsaf: true },
      },
    },
    warrant: {
      "W-1|WO1": { display: "Warrant officer bar insignia (designs published in AFGM2026-36-2033, Figure 11.1).", flag: AF_WARRANT_FLAG, art: { t: "note" } },
      "W-2|CW2": { display: "Warrant officer bar insignia (designs published in AFGM2026-36-2033, Figure 11.1).", flag: AF_WARRANT_FLAG, art: { t: "note" } },
      "W-3|CW3": { display: "Warrant officer bar insignia (designs published in AFGM2026-36-2033, Figure 11.1).", flag: AF_WARRANT_FLAG, art: { t: "note" } },
      "W-4|CW4": { display: "Warrant officer bar insignia (designs published in AFGM2026-36-2033, Figure 11.1).", flag: AF_WARRANT_FLAG, art: { t: "note" } },
      "W-5|CW5": { display: "Warrant officer bar insignia (designs published in AFGM2026-36-2033, Figure 11.1).", flag: AF_WARRANT_FLAG, art: { t: "note" } },
    },
    officers: { ...JOINT_OFFICERS },
  },
  "Space Force": {
    enlisted: {
      "E-1|Spc1": { display: "A silver Delta alone inside a hexagonal border.", art: { t: "sfBadge", mode: "delta", stripes: 0, chevrons: 0, orbits: 0, cmssf: false } },
      "E-2|Spc2": { display: "The Delta above one horizontal stripe, inside a hexagon.", art: { t: "sfBadge", mode: "delta", stripes: 1, chevrons: 0, orbits: 0, cmssf: false } },
      "E-3|Spc3": { display: "The Delta above two horizontal stripes, inside a hexagon.", art: { t: "sfBadge", mode: "delta", stripes: 2, chevrons: 0, orbits: 0, cmssf: false } },
      "E-4|Spc4": { display: "The Delta above three horizontal stripes, inside a hexagon.", art: { t: "sfBadge", mode: "delta", stripes: 3, chevrons: 0, orbits: 0, cmssf: false } },
      "E-5|Sgt": { display: "Three downward chevrons under the Delta, Globe, and Orbit, inside a hexagon.", art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 3, orbits: 0, cmssf: false } },
      "E-6|TSgt": { display: "Four downward chevrons under the Delta, Globe, and Orbit, inside a hexagon.", art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 4, orbits: 0, cmssf: false } },
      "E-7|MSgt": { display: "Four chevrons and one orbital arc over the Delta, Globe, and Orbit.", art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 4, orbits: 1, cmssf: false } },
      "E-8|SMSgt": { display: "Four chevrons and two orbital arcs over the Delta, Globe, and Orbit.", art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 4, orbits: 2, cmssf: false } },
      "E-9|CMSgt": { display: "Four chevrons and three orbital arcs, with the Delta at the top orbit.", art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 4, orbits: 3, cmssf: false } },
      "E-9 (special)|CMSSF": {
        display: "The chief's insignia with the Delta flanked by two stars and ringed by a braid.",
        art: { t: "sfBadge", mode: "dgo", stripes: 0, chevrons: 4, orbits: 3, cmssf: true },
      },
    },
    warrant: {},
    officers: { ...JOINT_OFFICERS },
  },
};

// Per-branch "how insignia differ by uniform" notes, from the pack.
export const UNIFORM_NOTES: Record<string, string> = {
  "Marine Corps":
    "Cloth chevrons are sewn on the outer sleeves of the service and blue-dress coats (gold on blue for dress blues; scarlet chevrons on the service background); utilities use small metal pin-on chevrons on the collar. Officers and warrants wear metal grade insignia on shoulder straps and collar points rather than sleeves.",
  Army:
    "Dress uniforms carry gold-on-blue sewn chevrons on both upper sleeves for enlisted, and officers wear grade insignia on shoulder straps. Field and utility uniforms use subdued pin-on devices — enlisted centered on the chest, officers on the collar and chest — and warrants wear the silver-and-black bar the same way.",
  Navy:
    "Dress blues and whites show rank three ways: sleeve lace for officers and warrants, and the rating badge for enlisted, on the upper left sleeve; shoulder boards on coats, reefers, and epauletted shirts repeat the sleeve stripes; shirts and working uniforms use metal collar and grade devices instead — fouled anchors for chiefs, bars, leaves, eagle, and stars for officers, bars for warrants.",
  "Coast Guard":
    "The same naval layout as the Navy: sleeve badges and cuff stripes on the dress-blue coat, shoulder boards on shirts and jackets, and collar devices (shield-and-chevron for petty officers, fouled anchor with shield for chiefs) on working and tropical-blue uniforms.",
  "Air Force":
    "Enlisted chevrons are sewn on the upper sleeves of service dress and blues shirts (large chevrons for E-7 through E-9); on the OCP utility uniform the insignia is subdued (spice brown) and worn centered on the chest. Officers wear grade insignia on the shoulder boards of the service coat and on collars and epaulets of shirts; warrants wear their bars as officers do.",
  "Space Force":
    "Enlisted rank is a single hexagonal patch — worn on the sleeve of the service dress coat and in subdued form on the OCP — instead of separate sleeve chevrons; officers wear the standard bars, oak leaves, eagle, and stars as shoulder and collar devices, following Department of the Air Force practice.",
};

// Extra warrant-section notes from the pack that belong with one branch.
export const WARRANT_EXTRA_NOTES: Record<string, string> = {
  "Marine Corps":
    "Marine Gunner: a chief warrant officer serving as a Marine Gunner (Infantry Weapons Officer) wears a bursting bomb in place of the grade insignia on the left collar.",
};

export function insigniaFor(
  branch: string,
  category: RankCategory,
  grade: string,
  abbr: string,
): InsigniaEntry | undefined {
  const byCat = INSIGNIA[branch]?.[category];
  if (!byCat) return undefined;
  return byCat[`${grade}|${abbr}`] ?? byCat[grade];
}
