// Shared data model for the seven Nov 9, 2026 addition sections
// (Credentialing Center, How Assignments Work, Evaluations & Board
// File, Veterans' Preference & Federal Jobs, Parents & Loved Ones,
// ROTC & Academies, TSP Center). Each section's data module transcribes
// its researched pack under ~/workspace/military-app/ — the packs are
// the content source of truth: figures, flags, exclusions, and
// placement are binding, conflicts print as conflicts, and ⚠ flags
// render visibly on the card, never blended. The generic renderer is
// PackSectionView in SevenSections.tsx: hub of square tiles, per-tile
// search, the established card shape (what it is / who it applies to /
// how it works / steps as sourced / sources / ⚠ flags), every card
// Binder-savable via CardTools.

import type { RefLink } from "./refdata";

export type { RefLink };

export type PackBullet = { title?: string; text: string };

export type PackTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type PackEntry = {
  /** Stable id — also the Binder item key inside the section. */
  id: string;
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  /** Who it applies to / when. */
  who: string;
  body: string[];
  bullets?: PackBullet[];
  /** Steps as sourced — rendered as a numbered list. */
  steps?: string[];
  tables?: PackTable[];
  flags: string[];
  links: RefLink[];
  /** Short source line for the Binder trust stamp. */
  source: string;
};

export type PackTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: PackEntry[];
  /** When true, the tile renders only on the spouse track (the
   * Federal Jobs derived-preference / spouse-authority routing). */
  spouseOnly?: boolean;
  /** When true, the tile renders on member + veteran tracks only
   * (hidden from the spouse track's routed view). */
  memberOnly?: boolean;
};

/** One mirrored checklist question (Federal Jobs §3). The checklist
 * mirrors OPM's published criteria as questions in OPM's order; a
 * "yes" shows the fixed output line with the step's code — it never
 * says "you are eligible" and never totals a case into a verdict. */
export type PackCheckStep = {
  id: string;
  question: string;
  detail: string;
  /** OPM code this step leads to, when it names one. */
  code?: string;
  /** Fixed follow-on line printed under a "yes" instead of the
   * code template (gateway / routing steps). */
  yesLine?: string;
};

export type PackSection = {
  /** App view key — also the Binder section key. */
  view: string;
  title: string;
  headSub: string;
  intro: string;
  /** Standing rule printed in the intro box, under the intro. */
  standing?: string;
  /** Entries pinned above the tile hub (Parents: the Red Cross card). */
  pinned?: PackEntry[];
  tiles: PackTile[];
  /** The mirrored eligibility checklist (Federal Jobs only). */
  checklist?: {
    tileKey: string;
    tileLabel: string;
    tileSub: string;
    title: string;
    who: string;
    /** The verbatim checklist line — ships wherever the checklist appears. */
    line: string;
    steps: PackCheckStep[];
    outro: string;
  };
};
