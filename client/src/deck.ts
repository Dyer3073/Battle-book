// Smart-Card Deck — the Field Tools cards formatted as ONE printable
// pocket deck (view/print kind "deck", opened from Field Tools).
// SINGLE SOURCE rule: the deck holds NO re-typed card content. Every
// panel is generated at render time from the same data modules the
// in-app cards render — fieldkit.ts (9-line MEDEVAC format + option
// sets, Kill Card format + zap helper, range-card fields, phonetic
// alphabet + prowords), signals.ts (SIGNALS), knots.ts (KNOTS). If an
// in-app card changes, the deck changes with it.
//
// Selections, with their basis stated honestly:
// - SIGNALS QUICK SET: the signals pack
//   (~/workspace/military-app/signals/signals.md) names NO explicit
//   quick set. This selection follows the pack's framing (§3): visual
//   signals exist to transmit prearranged messages rapidly over short
//   distances when voice comms are difficult or silence must be kept —
//   so the set is the TC 3-21.60 Chapter 1 dismounted / patrolling
//   control-and-warning signals a pocket card is for: halt, freeze,
//   rally, follow-me, SLLS, acknowledge; enemy, contact, danger,
//   cover, cease fire. Army (TC) forms only, never blended with the
//   USMC / FM 21-60 variants the pack prints separately.
// - KNOTS ESSENTIALS: the knots pack marks no per-entry "core" flag;
//   the only explicit required-knot list in the pack is the Coast
//   Guard required list (pack §1, source S7 — COMDTINST M1510.2 /
//   M16114.5): square knot, bowline, clove hitch (incl. the slip
//   clove variant), round turn with two half hitches. Those four
//   entries print, at published level only (name, purpose, steps,
//   cautions, source — all from knots.ts).
// - COMMS CARD: Field Tools' own Comms Card is the remaining
//   CARD-suitable Field Tools card (it is named a card in-app and is
//   pure reference data), so it closes the deck.

import { KNOTS, type KnotEntry } from "./knots";
import { SIGNALS, type SignalEntry } from "./signals";
import { EMERGENCY_CARDS } from "./emergency";
import { FIRSTAID_CARDS, LANDNAV_CARDS } from "./closureField";

function clipNote(s: string, n = 150): string {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? `${t.slice(0, n).trimEnd()}…` : t;
}

/** Closure Sweep field panels (17–40): the CARD-marked Land
 * Navigation (11) and First Aid & Buddy Aid (13) entries, generated
 * from closureField.ts — the same data the in-app Field Tools
 * reference renders, never re-typed. */
export const CLOSURE_PANELS: { n: number; title: string; note: string }[] = [
  ...LANDNAV_CARDS.map((e, i) => ({
    n: 17 + i,
    title: `Land Navigation ${e.code} — ${e.title}`,
    note: clipNote(e.body[0] ?? e.title),
  })),
  ...FIRSTAID_CARDS.map((e, i) => ({
    n: 17 + LANDNAV_CARDS.length + i,
    title: `First Aid & Buddy Aid ${e.code} — ${e.title}`,
    note: clipNote(e.body[0] ?? e.title),
  })),
];

export const DECK_SIGNAL_IDS_A = [
  "halt-dismounted",
  "freeze-tc",
  "assemble-rally",
  "join-me",
  "slls",
  "message-acknowledged",
] as const;

export const DECK_SIGNAL_IDS_B = [
  "enemy-in-sight-tc",
  "contact-left",
  "contact-right",
  "danger-area",
  "take-cover",
  "cease-firing-tc",
] as const;

export const DECK_KNOT_IDS = [
  "square-knot",
  "bowline",
  "clove-hitch",
  "round-turn-and-two-half-hitches",
] as const;

export function deckSignals(ids: readonly string[]): SignalEntry[] {
  return ids
    .map((id) => SIGNALS.find((s) => s.id === id))
    .filter((s): s is SignalEntry => Boolean(s));
}

export function deckKnots(): KnotEntry[] {
  return DECK_KNOT_IDS.map((id) => KNOTS.find((k) => k.id === id)).filter(
    (k): k is KnotEntry => Boolean(k),
  );
}

/** Deck panel list — the index panel prints this same list. */
export const DECK_PANELS: { n: number; title: string; note: string }[] = [
  { n: 1, title: "Deck Index", note: "This panel — what's in the deck and how to use it" },
  { n: 2, title: "9-Line MEDEVAC", note: "All 9 lines, wartime + peacetime variants — write-in" },
  { n: 3, title: "Kill Card", note: "Blank-fillable personal data card — fill in by hand, keep private" },
  { n: 4, title: "Range Card", note: "Blank template — position, limits, TRP data table" },
  { n: 5, title: "Signals Quick Set A — Control", note: "Halt · Freeze · Rally · Follow Me · SLLS · Acknowledged" },
  { n: 6, title: "Signals Quick Set B — Contact & Warning", note: "Enemy · Contact L/R · Danger Area · Take Cover · Cease Firing" },
  { n: 7, title: "Knots Essentials", note: "The Coast Guard required list (pack §1, S7): Square · Bowline · Clove · Round Turn + Two Half Hitches" },
  { n: 8, title: "Comms Card", note: "NATO phonetic alphabet + common prowords" },
  // When It Goes Wrong — the emergency deck joins the print set as
  // panels 9–16, generated from the SAME data module as the in-app
  // deck (emergency.ts): titles and notes derive from EMERGENCY_CARDS
  // so the print set can never drift from the in-app cards.
  ...EMERGENCY_CARDS.map((c, i) => ({
    n: 9 + i,
    title: `When It Goes Wrong ${c.id} — ${c.title}`,
    note: c.intro,
  })),
  // Closure Sweep (Nov 9, 2026): the 24 CARD-marked field entries —
  // 11 Land Navigation + 13 First Aid & Buddy Aid — join as panels
  // 17–40, generated from closureField.ts (CLOSURE_PANELS above).
  ...CLOSURE_PANELS,
];

export const DECK_PANEL_COUNT = DECK_PANELS.length;
