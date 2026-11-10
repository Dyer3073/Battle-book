// Field kit math and reference data — everything here is computed
// on-device from the member's own inputs. No network, no storage:
// callers decide what (if anything) to persist, and only through the
// per-profile field-kit actions.
//
// Contents:
//  - Heading helpers (degrees <-> mils, cardinal points, back azimuth)
//  - MGRS conversion both ways (WGS84, standard UTM-based algorithm)
//  - Sun / moon calculations (NOAA-style solar approximation; lunar
//    age from the synodic cycle) for sunrise, sunset, BMNT/EENT
//  - NATO phonetic alphabet + common prowords (comms card)
//  - The 9-line MEDEVAC format definitions (published training format)
//  - Sketch-card data types for the range card editor and its print
//    sheet, plus the Kill Card personal-data types (name, rank, zap
//    number, blood type, allergies, serialized gear — Christian's
//    definition, Nov 9, 2026)

/* ------------------------------ Headings ------------------------------ */

export function degToMils(deg: number): number {
  return Math.round(((deg % 360) * 6400) / 360) % 6400;
}

export function milsToDeg(mils: number): number {
  return ((mils % 6400) * 360) / 6400;
}

export function backAzimuthDeg(deg: number): number {
  return (deg + 180) % 360;
}

const CARDINALS_16 = [
  "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW",
] as const;

export function cardinal16(deg: number): string {
  const idx = Math.floor((((deg % 360) + 360) % 360 + 11.25) / 22.5) % 16;
  return CARDINALS_16[idx] ?? "N";
}

/* -------------------------------- MGRS -------------------------------- */
// Standard lat/lon <-> UTM <-> MGRS on WGS84. Latitude bands C–X
// (80°S–84°N); polar regions (UPS) are out of scope and reported as
// unsupported rather than converted wrong.

const WGS84_A = 6378137.0;
const WGS84_F = 1 / 298.257223563;
const UTM_K0 = 0.9996;

const LAT_BANDS = "CDEFGHJKLMNPQRSTUVWXX"; // index 0 = -80°, each 8° tall (X double-counted for lookup ease)
const COL_SETS = ["ABCDEFGH", "JKLMNPQR", "STUVWXYZ"];
const ROW_LETTERS = "ABCDEFGHJKLMNPQRSTUV"; // 20 letters, repeats every 2,000,000 m

function utmZoneFor(lon: number): number {
  return Math.floor((lon + 180) / 6) + 1;
}

function latLonToUtm(lat: number, lon: number): { zone: number; easting: number; northing: number; northern: boolean } {
  const zone = utmZoneFor(lon);
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const lonOriginRad = ((zone - 1) * 6 - 180 + 3) * (Math.PI / 180);
  const eccSq = WGS84_F * (2 - WGS84_F);
  const eccPrimeSq = eccSq / (1 - eccSq);
  const n = WGS84_F / (2 - WGS84_F);
  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);
  const tanLat = Math.tan(latRad);
  const N = WGS84_A / Math.sqrt(1 - eccSq * sinLat * sinLat);
  const T = tanLat * tanLat;
  const C = eccPrimeSq * cosLat * cosLat;
  const A = cosLat * (lonRad - lonOriginRad);
  const M =
    WGS84_A *
    ((1 - eccSq / 4 - (3 * eccSq * eccSq) / 64 - (5 * eccSq ** 3) / 256) * latRad -
      ((3 * eccSq) / 8 + (3 * eccSq * eccSq) / 32 + (45 * eccSq ** 3) / 1024) * Math.sin(2 * latRad) +
      ((15 * eccSq * eccSq) / 256 + (45 * eccSq ** 3) / 1024) * Math.sin(4 * latRad) -
      ((35 * eccSq ** 3) / 3072) * Math.sin(6 * latRad));
  const easting =
    UTM_K0 * N * (A + ((1 - T + C) * A ** 3) / 6 + ((5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSq) * A ** 5) / 120) +
    500000;
  let northing =
    UTM_K0 *
    (M +
      N *
        tanLat *
        ((A * A) / 2 +
          ((5 - T + 9 * C + 4 * C * C) * A ** 4) / 24 +
          ((61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSq) * A ** 6) / 720));
  const northern = lat >= 0;
  if (!northern) northing += 10000000;
  void n;
  return { zone, easting, northing, northern };
}

function utmToLatLon(
  zone: number,
  easting: number,
  northing: number,
  northern: boolean,
): { lat: number; lon: number } {
  const eccSq = WGS84_F * (2 - WGS84_F);
  const eccPrimeSq = eccSq / (1 - eccSq);
  const e1 = (1 - Math.sqrt(1 - eccSq)) / (1 + Math.sqrt(1 - eccSq));
  const x = easting - 500000;
  let y = northing;
  if (!northern) y -= 10000000;
  const lonOrigin = (zone - 1) * 6 - 180 + 3;
  const M = y / UTM_K0;
  const mu = M / (WGS84_A * (1 - eccSq / 4 - (3 * eccSq * eccSq) / 64 - (5 * eccSq ** 3) / 256));
  const J1 = (3 * e1) / 2 - (27 * e1 ** 3) / 32;
  const J2 = (21 * e1 * e1) / 16 - (55 * e1 ** 4) / 32;
  const J3 = (151 * e1 ** 3) / 96;
  const J4 = (1097 * e1 ** 4) / 512;
  const fp =
    mu +
    J1 * Math.sin(2 * mu) +
    J2 * Math.sin(4 * mu) +
    J3 * Math.sin(6 * mu) +
    J4 * Math.sin(8 * mu);
  const sinFp = Math.sin(fp);
  const cosFp = Math.cos(fp);
  const tanFp = Math.tan(fp);
  const C1 = eccPrimeSq * cosFp * cosFp;
  const T1 = tanFp * tanFp;
  const N1 = WGS84_A / Math.sqrt(1 - eccSq * sinFp * sinFp);
  const R1 = (WGS84_A * (1 - eccSq)) / (1 - eccSq * sinFp * sinFp) ** 1.5;
  const D = x / (N1 * UTM_K0);
  const latRad =
    fp -
    ((N1 * tanFp) / R1) *
      ((D * D) / 2 -
        ((5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSq) * D ** 4) / 24 +
        ((61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSq - 3 * C1 * C1) * D ** 6) / 720);
  const lonRad =
    (D -
      ((1 + 2 * T1 + C1) * D ** 3) / 6 +
      ((5 - 2 * C1 + 28 * T1 - 8 * eccPrimeSq + 8 * C1 + 24 * T1 * T1 + 4 * eccPrimeSq + 6 * C1) * D ** 5) / 120) /
    cosFp;
  return { lat: (latRad * 180) / Math.PI, lon: lonOrigin + (lonRad * 180) / Math.PI };
}

function latBandFor(lat: number): string | null {
  if (lat < -80 || lat >= 84) return null;
  if (lat >= 72) return "X";
  const idx = Math.floor((lat + 80) / 8);
  return LAT_BANDS[idx] ?? null;
}

function bandSouthEdge(band: string): number {
  if (band === "X") return 72;
  const idx = LAT_BANDS.indexOf(band);
  return idx * 8 - 80;
}

/** Convert lat/lon to an MGRS string like "18S UJ 23371 06519" (1 m precision). Null outside MGRS latitude coverage. */
export function latLonToMgrs(lat: number, lon: number): string | null {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  if (lat < -80 || lat >= 84 || lon < -180 || lon > 180) return null;
  const band = latBandFor(lat);
  if (!band) return null;
  const { zone, easting, northing } = latLonToUtm(lat, lon);
  const colSet = COL_SETS[(zone - 1) % 3] ?? "ABCDEFGH";
  const colIdx = Math.floor(easting / 100000) - 1;
  const colLetter = colSet[colIdx];
  if (!colLetter) return null;
  const rowOffset = zone % 2 === 0 ? 5 : 0;
  const rowIdx = Math.floor((northing % 2000000) / 100000);
  const rowLetter = ROW_LETTERS[(rowIdx + rowOffset) % 20];
  if (!rowLetter) return null;
  const e = `${Math.floor(easting % 100000)}`.padStart(5, "0");
  const n = `${Math.floor(northing % 100000)}`.padStart(5, "0");
  return `${zone}${band} ${colLetter}${rowLetter} ${e} ${n}`;
}

const MGRS_RE = /^\s*(\d{1,2})\s*([C-X])\s*([A-Z])\s*([A-Z])\s*(\d*)\s*(\d*)\s*$/i;

/** Parse an MGRS string back to lat/lon (center of the given precision cell). Null when the string is not valid MGRS. */
export function mgrsToLatLon(input: string): { lat: number; lon: number } | null {
  const m = MGRS_RE.exec(input);
  if (!m) return null;
  const zone = Number(m[1]);
  const band = (m[2] ?? "").toUpperCase();
  const colLetter = (m[3] ?? "").toUpperCase();
  const rowLetter = (m[4] ?? "").toUpperCase();
  const eStr = m[5] ?? "";
  const nStr = m[6] ?? "";
  if (zone < 1 || zone > 60) return null;
  if (band === "I" || band === "O" || colLetter === "I" || colLetter === "O" || rowLetter === "I" || rowLetter === "O") return null;
  if (eStr.length !== nStr.length || eStr.length > 5) return null;
  const colSet = COL_SETS[(zone - 1) % 3] ?? "";
  const colIdx = colSet.indexOf(colLetter);
  if (colIdx < 0) return null;
  const rowIdxRaw = ROW_LETTERS.indexOf(rowLetter);
  if (rowIdxRaw < 0) return null;
  const scale = 10 ** (5 - eStr.length);
  const easting = (colIdx + 1) * 100000 + (eStr ? Number(eStr) * scale + scale / 2 : 50000);
  const rowOffset = zone % 2 === 0 ? 5 : 0;
  const rowIdx = (((rowIdxRaw - rowOffset) % 20) + 20) % 20;
  let northing = rowIdx * 100000 + (nStr ? Number(nStr) * scale + scale / 2 : 50000);
  const northern = band >= "N";
  const south = bandSouthEdge(band);
  const north = band === "X" ? 84 : south + 8;
  // Row letters repeat every 2,000,000 m: shift the northing by whole
  // cycles until the converted latitude lands inside the band.
  for (let i = 0; i < 6; i++) {
    const ll = utmToLatLon(zone, easting, northing, northern);
    if (ll.lat < south - 0.01) {
      northing += 2000000;
      continue;
    }
    if (ll.lat > north + 0.01) {
      northing -= 2000000;
      continue;
    }
    return ll;
  }
  return null;
}

export function formatLatLon(lat: number, lon: number): string {
  const la = `${Math.abs(lat).toFixed(5)}° ${lat >= 0 ? "N" : "S"}`;
  const lo = `${Math.abs(lon).toFixed(5)}° ${lon >= 0 ? "E" : "W"}`;
  return `${la}, ${lo}`;
}

/* ----------------------------- Sun and moon ---------------------------- */
// NOAA-style solar approximation: good to a few minutes, which is all
// planning light data needs. Times come back as local Date objects for
// the given calendar date at the given coordinates.

export interface LightData {
  sunrise: Date | null;
  sunset: Date | null;
  bmnt: Date | null; // beginning of morning nautical twilight (sun 12° below horizon)
  eent: Date | null; // end of evening nautical twilight
  civilDawn: Date | null;
  civilDusk: Date | null;
  moonAgeDays: number;
  moonIllumination: number; // 0..1
  moonPhaseName: string;
}

function julianDay(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

function sunEventUtcHours(
  date: Date,
  lat: number,
  lon: number,
  zenithDeg: number,
  rising: boolean,
): number | null {
  // One iteration of the standard NOAA worksheet, computed for the
  // date's local noon to keep the result on the right calendar day.
  const noon = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
  const jd = julianDay(noon);
  const T = (jd - 2451545.0) / 36525;
  const L0 = (280.46646 + T * (36000.76983 + 0.0003032 * T)) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const Mr = (M * Math.PI) / 180;
  const C =
    Math.sin(Mr) * (1.914602 - T * (0.004817 + 0.000014 * T)) +
    Math.sin(2 * Mr) * (0.019993 - 0.000101 * T) +
    Math.sin(3 * Mr) * 0.000289;
  const trueLong = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin((omega * Math.PI) / 180);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const epsCorr = eps0 + 0.00256 * Math.cos((omega * Math.PI) / 180);
  const epsRad = (epsCorr * Math.PI) / 180;
  const decl = Math.asin(Math.sin(epsRad) * Math.sin((lambda * Math.PI) / 180));
  const varY = Math.tan(epsRad / 2) ** 2;
  const eqTime =
    4 *
    ((180 / Math.PI) *
      (varY * Math.sin(2 * ((L0 * Math.PI) / 180)) -
        2 * e * Math.sin(Mr) +
        4 * e * varY * Math.sin(Mr) * Math.cos(2 * ((L0 * Math.PI) / 180)) -
        0.5 * varY * varY * Math.sin(4 * ((L0 * Math.PI) / 180)) -
        1.25 * e * e * Math.sin(2 * Mr)));
  const latRad = (lat * Math.PI) / 180;
  const zenRad = (zenithDeg * Math.PI) / 180;
  const cosHa = Math.cos(zenRad) / (Math.cos(latRad) * Math.cos(decl)) - Math.tan(latRad) * Math.tan(decl);
  if (cosHa > 1 || cosHa < -1) return null; // sun never crosses this zenith today (polar day/night)
  const ha = (Math.acos(cosHa) * 180) / Math.PI;
  // NOAA convention: sunrise uses (longitude + HA), sunset (longitude − HA).
  const minutesUtc = 720 - 4 * (lon + (rising ? ha : -ha)) - eqTime;
  return minutesUtc / 60;
}

function hoursToLocalDate(date: Date, utcHours: number | null): Date | null {
  if (utcHours === null || !Number.isFinite(utcHours)) return null;
  const base = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  return new Date(base + utcHours * 3600000);
}

const SYNODIC_DAYS = 29.530588853;
const KNOWN_NEW_MOON_JD = 2451550.1; // 6 Jan 2000, ~18:14 UTC

export function moonPhase(date: Date): { ageDays: number; illumination: number; name: string } {
  const age = (((julianDay(date) - KNOWN_NEW_MOON_JD) % SYNODIC_DAYS) + SYNODIC_DAYS) % SYNODIC_DAYS;
  const illumination = (1 - Math.cos((2 * Math.PI * age) / SYNODIC_DAYS)) / 2;
  const names = [
    "New moon",
    "Waxing crescent",
    "First quarter",
    "Waxing gibbous",
    "Full moon",
    "Waning gibbous",
    "Last quarter",
    "Waning crescent",
  ];
  const idx = Math.floor(((age / SYNODIC_DAYS) * 8 + 0.5)) % 8;
  return { ageDays: age, illumination, name: names[idx] ?? "New moon" };
}

export function computeLightData(lat: number, lon: number, date: Date): LightData {
  const sunrise = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 90.833, true));
  const sunset = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 90.833, false));
  const civilDawn = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 96, true));
  const civilDusk = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 96, false));
  const bmnt = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 102, true));
  const eent = hoursToLocalDate(date, sunEventUtcHours(date, lat, lon, 102, false));
  const moon = moonPhase(date);
  return {
    sunrise,
    sunset,
    bmnt,
    eent,
    civilDawn,
    civilDusk,
    moonAgeDays: moon.ageDays,
    moonIllumination: moon.illumination,
    moonPhaseName: moon.name,
  };
}

export function formatTimeOfDay(d: Date | null): string {
  if (!d) return "—";
  return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
}

/* ------------------------------- Comms card ---------------------------- */

export const NATO_ALPHABET: { letter: string; word: string }[] = [
  { letter: "A", word: "Alfa" },
  { letter: "B", word: "Bravo" },
  { letter: "C", word: "Charlie" },
  { letter: "D", word: "Delta" },
  { letter: "E", word: "Echo" },
  { letter: "F", word: "Foxtrot" },
  { letter: "G", word: "Golf" },
  { letter: "H", word: "Hotel" },
  { letter: "I", word: "India" },
  { letter: "J", word: "Juliett" },
  { letter: "K", word: "Kilo" },
  { letter: "L", word: "Lima" },
  { letter: "M", word: "Mike" },
  { letter: "N", word: "November" },
  { letter: "O", word: "Oscar" },
  { letter: "P", word: "Papa" },
  { letter: "Q", word: "Quebec" },
  { letter: "R", word: "Romeo" },
  { letter: "S", word: "Sierra" },
  { letter: "T", word: "Tango" },
  { letter: "U", word: "Uniform" },
  { letter: "V", word: "Victor" },
  { letter: "W", word: "Whiskey" },
  { letter: "X", word: "X-ray" },
  { letter: "Y", word: "Yankee" },
  { letter: "Z", word: "Zulu" },
];

export const PROWORDS: { word: string; meaning: string }[] = [
  { word: "Roger", meaning: "I received and understood your last transmission." },
  { word: "Wilco", meaning: "I received, understood, and will comply." },
  { word: "Over", meaning: "My transmission is finished — I expect a reply." },
  { word: "Out", meaning: "My transmission is finished — no reply expected. (Never “over and out.”)" },
  { word: "Say again", meaning: "Repeat your last transmission. (“Repeat” is never used — it means fire again.)" },
  { word: "Break", meaning: "A pause between parts of one message — a new addressee or a new section follows." },
  { word: "Copy / Solid copy", meaning: "I received it clearly." },
  { word: "Affirmative / Negative", meaning: "Yes / No, stated unambiguously." },
  { word: "Radio check", meaning: "How do you hear me? Answer with strength and readability — “Loud and clear” is the strong one." },
  { word: "Correction", meaning: "I made an error in this transmission — the correct version follows." },
  { word: "Stand by", meaning: "Wait — I will come back to you shortly." },
  { word: "I spell", meaning: "The next word is spelled out phonetically." },
  { word: "Figures", meaning: "Numbers follow." },
  { word: "Time check", meaning: "Requesting or giving the current time, always in 24-hour Zulu or local as briefed." },
];

/* --------------------------- 9-line MEDEVAC ---------------------------- */
// The standard 9-line MEDEVAC request as published in Army / joint
// training references (ATP 4-25.13 lineage, GTA 08-01-004 card). Lines
// 6 and 9 carry the published wartime / peacetime difference.

export type MedevacMode = "wartime" | "peacetime";

export interface MedevacState {
  mode: MedevacMode;
  line1Grid: string;
  line2Freq: string;
  line2Callsign: string;
  line2Suffix: string;
  line3A: string;
  line3B: string;
  line3C: string;
  line3D: string;
  line3E: string;
  line4: string; // A | B | C | D | ""
  line4Other: string;
  line5Litter: string;
  line5Ambulatory: string;
  line6Wartime: string; // N | P | E | X | ""
  line6Peacetime: string;
  line7: string; // A | B | C | D | E | ""
  line7Other: string;
  line8A: string;
  line8B: string;
  line8C: string;
  line8D: string;
  line8E: string;
  line9Nbc: string[]; // subset of N | B | C
  line9Peacetime: string;
}

export const EMPTY_MEDEVAC: MedevacState = {
  mode: "wartime",
  line1Grid: "",
  line2Freq: "",
  line2Callsign: "",
  line2Suffix: "",
  line3A: "",
  line3B: "",
  line3C: "",
  line3D: "",
  line3E: "",
  line4: "",
  line4Other: "",
  line5Litter: "",
  line5Ambulatory: "",
  line6Wartime: "",
  line6Peacetime: "",
  line7: "",
  line7Other: "",
  line8A: "",
  line8B: "",
  line8C: "",
  line8D: "",
  line8E: "",
  line9Nbc: [],
  line9Peacetime: "",
};

export const LINE4_OPTIONS = [
  { code: "A", label: "None" },
  { code: "B", label: "Hoist" },
  { code: "C", label: "Extraction equipment" },
  { code: "D", label: "Ventilator" },
];

export const LINE6_WARTIME_OPTIONS = [
  { code: "N", label: "No enemy troops in area" },
  { code: "P", label: "Possible enemy troops in area — approach with caution" },
  { code: "E", label: "Enemy troops in area — approach with caution" },
  { code: "X", label: "Enemy troops in area — armed escort required" },
];

export const LINE7_OPTIONS = [
  { code: "A", label: "Panels" },
  { code: "B", label: "Pyrotechnic signal" },
  { code: "C", label: "Smoke signal" },
  { code: "D", label: "None" },
  { code: "E", label: "Other" },
];

export const LINE9_NBC_OPTIONS = [
  { code: "N", label: "Nuclear" },
  { code: "B", label: "Biological" },
  { code: "C", label: "Chemical" },
];

function countReadout(parts: { code: string; label: string; value: string }[]): string {
  const filled = parts.filter((p) => p.value.trim() !== "" && Number(p.value) > 0);
  if (filled.length === 0) return "—";
  return filled.map((p) => `${p.code} (${labelShort(p.label)}) ${p.value}`).join(" · ");
}

function labelShort(label: string): string {
  return label;
}

/** The nine "read it off" lines, in transmit order. Empty lines show a dash. */
export function medevacReadout(s: MedevacState): { line: number; label: string; value: string }[] {
  const l4 = LINE4_OPTIONS.find((o) => o.code === s.line4);
  const l6w = LINE6_WARTIME_OPTIONS.find((o) => o.code === s.line6Wartime);
  const l7 = LINE7_OPTIONS.find((o) => o.code === s.line7);
  const line2 = [s.line2Freq && `Freq ${s.line2Freq}`, s.line2Callsign && `Call sign ${s.line2Callsign}`, s.line2Suffix && `Suffix ${s.line2Suffix}`]
    .filter(Boolean)
    .join(" · ");
  return [
    { line: 1, label: "Location of pickup site", value: s.line1Grid.trim() || "—" },
    { line: 2, label: "Radio frequency, call sign, suffix", value: line2 || "—" },
    {
      line: 3,
      label: "Patients by precedence",
      value: countReadout([
        { code: "A", label: "Urgent", value: s.line3A },
        { code: "B", label: "Urgent-Surgical", value: s.line3B },
        { code: "C", label: "Priority", value: s.line3C },
        { code: "D", label: "Routine", value: s.line3D },
        { code: "E", label: "Convenience", value: s.line3E },
      ]),
    },
    {
      line: 4,
      label: "Special equipment required",
      value: l4 ? `${l4.code} — ${l4.label}${s.line4Other.trim() ? ` (${s.line4Other.trim()})` : ""}` : s.line4Other.trim() || "—",
    },
    {
      line: 5,
      label: "Patients by type",
      value: countReadout([
        { code: "L", label: "Litter", value: s.line5Litter },
        { code: "A", label: "Ambulatory", value: s.line5Ambulatory },
      ]),
    },
    {
      line: 6,
      label: s.mode === "wartime" ? "Security of pickup site" : "Number / type of wounds, injuries, illness (peacetime)",
      value:
        s.mode === "wartime"
          ? l6w
            ? `${l6w.code} — ${l6w.label}`
            : "—"
          : s.line6Peacetime.trim() || "—",
    },
    {
      line: 7,
      label: "Method of marking pickup site",
      value: l7 ? `${l7.code} — ${l7.label}${l7.code === "E" && s.line7Other.trim() ? `: ${s.line7Other.trim()}` : ""}` : "—",
    },
    {
      line: 8,
      label: "Patient nationality and status",
      value: countReadout([
        { code: "A", label: "US military", value: s.line8A },
        { code: "B", label: "US civilian", value: s.line8B },
        { code: "C", label: "Non-US military", value: s.line8C },
        { code: "D", label: "Non-US civilian", value: s.line8D },
        { code: "E", label: "Enemy prisoner of war", value: s.line8E },
      ]),
    },
    {
      line: 9,
      label: s.mode === "wartime" ? "NBC contamination" : "Terrain description (peacetime)",
      value:
        s.mode === "wartime"
          ? s.line9Nbc.length > 0
            ? s.line9Nbc.map((c) => `${c} — ${LINE9_NBC_OPTIONS.find((o) => o.code === c)?.label ?? c}`).join(" · ")
            : "None reported"
          : s.line9Peacetime.trim() || "—",
    },
  ];
}

/* ------------------------------ Kill Card ------------------------------ */
// The kill card is a personal data card — NOT a sketch. Fields, in
// order (Christian's definition, Nov 9, 2026): name, rank, zap number,
// blood type, allergies, then the member's serialized gear, one row
// per item with its serial number. Name and rank always come from the
// member's profile; the rest is self-entered and persists per profile
// in the kill_cards table through the getKillCard / saveKillCard
// actions (owner-private, like My Emergency Card).

export interface KillGearItem {
  item: string;
  serial: string;
}

export interface KillCardData {
  name: string;
  rank: string;
  zapNumber: string;
  bloodType: string;
  allergies: string;
  gear: KillGearItem[];
}

// The zap-number formula exactly as Christian stated it: the Marine's
// last and first initials followed by the last 5 of their EDIPI.
export const ZAP_NUMBER_HELPER =
  "Your last and first initials, followed by the last 5 of your EDIPI.";

/* --------------------------- Sketch cards (range) ---------------------- */

export type SketchMarkerType = "trp" | "primary" | "secondary" | "alternate";

export interface SketchMarker {
  id: string;
  type: SketchMarkerType;
  label: string;
  azimuthDeg: number;
  rangeM: number;
  description: string;
}

export interface SketchCardData {
  id: string;
  kind: "range" | "kill";
  name: string;
  weapon: string; // weapon / system
  position: string; // position description
  date: string; // YYYY-MM-DD or free text as the member wrote it
  leftLimitDeg: number;
  rightLimitDeg: number;
  maxRangeM: number;
  markers: SketchMarker[];
  killZone: { azimuthDeg: number; rangeM: number; radiusM: number } | null;
}

export function newSketchCard(kind: "range" | "kill"): SketchCardData {
  return {
    id: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
    kind,
    name: kind === "range" ? "New range card" : "New kill card",
    weapon: "",
    position: "",
    date: "",
    leftLimitDeg: 315,
    rightLimitDeg: 45,
    maxRangeM: 600,
    markers: [],
    killZone: kind === "kill" ? { azimuthDeg: 0, rangeM: 300, radiusM: 75 } : null,
  };
}

/* ------------------------- Scientific calculator ------------------------ */
// A small recursive-descent evaluator — no eval(), no Function(). The
// calculator builds an expression string from button presses; this
// parses numbers, + − * / ^ (right-associative), unary minus,
// parentheses, the constants pi / e, and the functions sin cos tan
// asin acos atan ln log sqrt. Trig honors the DEG/RAD mode.

export type AngleMode = "deg" | "rad";

const CALC_FUNCTIONS = ["sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "sqrt"] as const;

export function evaluateExpression(rawExpr: string, angleMode: AngleMode): number {
  const expr = rawExpr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\s+/g, "");
  let pos = 0;

  const peek = (): string => expr[pos] ?? "";
  const next = (): string => expr[pos++] ?? "";

  function parseExpression(): number {
    let value = parseTerm();
    while (peek() === "+" || peek() === "-") {
      const op = next();
      const rhs = parseTerm();
      value = op === "+" ? value + rhs : value - rhs;
    }
    return value;
  }

  function parseTerm(): number {
    let value = parseFactor();
    while (peek() === "*" || peek() === "/") {
      const op = next();
      const rhs = parseFactor();
      value = op === "*" ? value * rhs : value / rhs;
    }
    return value;
  }

  function parseFactor(): number {
    const base = parseUnary();
    if (peek() === "^") {
      next();
      const exponent = parseFactor(); // right-associative
      return Math.pow(base, exponent);
    }
    return base;
  }

  function parseUnary(): number {
    if (peek() === "-") {
      next();
      return -parseUnary();
    }
    if (peek() === "+") {
      next();
      return parseUnary();
    }
    return parseAtom();
  }

  function toAngle(x: number): number {
    return angleMode === "deg" ? (x * Math.PI) / 180 : x;
  }
  function fromAngle(x: number): number {
    return angleMode === "deg" ? (x * 180) / Math.PI : x;
  }

  function applyFunction(name: string, x: number): number {
    switch (name) {
      case "sin":
        return Math.sin(toAngle(x));
      case "cos":
        return Math.cos(toAngle(x));
      case "tan":
        return Math.tan(toAngle(x));
      case "asin":
        return fromAngle(Math.asin(x));
      case "acos":
        return fromAngle(Math.acos(x));
      case "atan":
        return fromAngle(Math.atan(x));
      case "ln":
        return Math.log(x);
      case "log":
        return Math.log10(x);
      case "sqrt":
        return Math.sqrt(x);
      default:
        throw new Error(`Unknown function ${name}`);
    }
  }

  function parseAtom(): number {
    const ch = peek();
    if (ch === "(") {
      next();
      const value = parseExpression();
      if (next() !== ")") throw new Error("Missing closing parenthesis");
      return value;
    }
    if (/[0-9.]/.test(ch)) {
      let num = "";
      while (/[0-9.]/.test(peek())) num += next();
      const value = Number(num);
      if (Number.isNaN(value)) throw new Error("Bad number");
      return value;
    }
    if (/[a-z]/i.test(ch)) {
      let name = "";
      while (/[a-z]/i.test(peek())) name += next();
      const lower = name.toLowerCase();
      if (lower === "pi") return Math.PI;
      if (lower === "e") return Math.E;
      if ((CALC_FUNCTIONS as readonly string[]).includes(lower)) {
        if (next() !== "(") throw new Error(`Expected ( after ${lower}`);
        const arg = parseExpression();
        if (next() !== ")") throw new Error("Missing closing parenthesis");
        return applyFunction(lower, arg);
      }
      throw new Error(`Unknown name ${name}`);
    }
    throw new Error(ch === "" ? "Unexpected end of expression" : `Unexpected ${ch}`);
  }

  if (expr.length === 0) throw new Error("Empty expression");
  const result = parseExpression();
  if (pos !== expr.length) throw new Error("Trailing characters");
  return result;
}

/** Calculator display formatting: trims float noise, keeps precision honest. */
export function formatCalcResult(n: number): string {
  if (!Number.isFinite(n)) return "Error";
  if (Number.isInteger(n) && Math.abs(n) < 1e15) return `${n}`;
  const rounded = Number.parseFloat(n.toPrecision(12));
  return `${rounded}`;
}

/* --------------------------- March calculator --------------------------- */
// Speed–distance–time: given any two, compute the third. Times are
// minutes (decimal); distances and speeds follow the unit toggle.

export function marchThird(distKm: number | null, speedKmh: number | null, timeMin: number | null): {
  distKm: number | null;
  speedKmh: number | null;
  timeMin: number | null;
  solved: "dist" | "speed" | "time" | null;
} {
  if (distKm === null && speedKmh !== null && timeMin !== null) {
    return { distKm: speedKmh * (timeMin / 60), speedKmh, timeMin, solved: "dist" };
  }
  if (speedKmh === null && distKm !== null && timeMin !== null && timeMin > 0) {
    return { distKm, speedKmh: distKm / (timeMin / 60), timeMin, solved: "speed" };
  }
  if (timeMin === null && distKm !== null && speedKmh !== null && speedKmh > 0) {
    return { distKm, speedKmh, timeMin: (distKm / speedKmh) * 60, solved: "time" };
  }
  return { distKm, speedKmh, timeMin, solved: null };
}

export function formatDuration(minutes: number): string {
  if (!Number.isFinite(minutes) || minutes < 0) return "—";
  const totalSec = Math.round(minutes * 60);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const mm = `${m}`.padStart(2, "0");
  const ss = `${s}`.padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/** Arrival clock time ("HH:MM") for a start "HH:MM" plus a duration, with a next-day flag when it wraps. */
export function arrivalTime(startHHMM: string, durationMin: number): { time: string; nextDay: boolean } | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(startHHMM.trim());
  if (!match) return null;
  const startMin = Number(match[1]) * 60 + Number(match[2]);
  if (!Number.isFinite(durationMin) || durationMin < 0) return null;
  const total = startMin + Math.round(durationMin);
  const wrapped = total >= 1440;
  const t = ((total % 1440) + 1440) % 1440;
  const hh = `${Math.floor(t / 60)}`.padStart(2, "0");
  const mm = `${t % 60}`.padStart(2, "0");
  return { time: `${hh}:${mm}`, nextDay: wrapped };
}

/* --------------------------- Mil-relation ------------------------------- */
// Range (m) = Size (m) × 1000 ÷ Mils. Solves for whichever is missing.

export function milRelation(rangeM: number | null, sizeM: number | null, mils: number | null): {
  rangeM: number | null;
  sizeM: number | null;
  mils: number | null;
  solved: "range" | "size" | "mils" | null;
} {
  if (rangeM === null && sizeM !== null && mils !== null && mils > 0) {
    return { rangeM: (sizeM * 1000) / mils, sizeM, mils, solved: "range" };
  }
  if (sizeM === null && rangeM !== null && mils !== null && mils > 0) {
    return { rangeM, sizeM: (rangeM * mils) / 1000, mils, solved: "size" };
  }
  if (mils === null && rangeM !== null && sizeM !== null && rangeM > 0) {
    return { rangeM, sizeM, mils: (sizeM * 1000) / rangeM, solved: "mils" };
  }
  return { rangeM, sizeM, mils, solved: null };
}

/** Common reference sizes for estimation practice — approximations, labeled as such in the UI. */
export const REFERENCE_SIZES: { label: string; sizeM: number }[] = [
  { label: "Standing person", sizeM: 1.8 },
  { label: "Kneeling person", sizeM: 1.1 },
  { label: "Average sedan (length)", sizeM: 4.6 },
  { label: "Utility pole (height)", sizeM: 9 },
  { label: "Two-story house (height)", sizeM: 6 },
];

/* --------------------------- Watchbill builder -------------------------- */

export interface Watchbill {
  id: string;
  title: string;
  names: string[];
  shiftHours: number;
  /** Start as a datetime-local string ("YYYY-MM-DDTHH:MM"), as the member entered it. */
  startLocal: string;
  days: number;
}

export interface WatchbillRow {
  index: number;
  holder: string;
  start: Date;
  end: Date;
}

/** The full rotation: blocks of shiftHours covering days × 24 h from the start, names rotating in order. The final block is clamped to the end of the last day. */
export function buildWatchbillRows(wb: Watchbill): WatchbillRow[] {
  const names = wb.names.map((n) => n.trim()).filter(Boolean);
  if (names.length === 0 || !(wb.shiftHours > 0) || !(wb.days >= 1)) return [];
  const start = new Date(wb.startLocal);
  if (Number.isNaN(start.getTime())) return [];
  const totalHours = wb.days * 24;
  const blockCount = Math.ceil(totalHours / wb.shiftHours);
  const rows: WatchbillRow[] = [];
  for (let i = 0; i < blockCount; i++) {
    const blockStart = new Date(start.getTime() + i * wb.shiftHours * 3600000);
    const blockEnd = new Date(Math.min(start.getTime() + totalHours * 3600000, start.getTime() + (i + 1) * wb.shiftHours * 3600000));
    rows.push({ index: i, holder: names[i % names.length] ?? "", start: blockStart, end: blockEnd });
  }
  return rows;
}

export function formatWatchTime(d: Date): string {
  return d.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

/** Polar (azimuth deg clockwise from north, range) -> sketch x/y on a square canvas centered at (c, c) with radius r for maxRange. */
export function polarToXY(azimuthDeg: number, rangeM: number, maxRangeM: number, c: number, r: number): { x: number; y: number } {
  const rad = (azimuthDeg * Math.PI) / 180;
  const dist = Math.min(rangeM / Math.max(maxRangeM, 1), 1) * r;
  return { x: c + Math.sin(rad) * dist, y: c - Math.cos(rad) * dist };
}

export function xyToPolar(x: number, y: number, maxRangeM: number, c: number, r: number): { azimuthDeg: number; rangeM: number } {
  const dx = x - c;
  const dy = c - y;
  let az = (Math.atan2(dx, dy) * 180) / Math.PI;
  if (az < 0) az += 360;
  const distPx = Math.sqrt(dx * dx + dy * dy);
  const rangeM = Math.round((distPx / r) * maxRangeM);
  return { azimuthDeg: Math.round(az), rangeM };
}
