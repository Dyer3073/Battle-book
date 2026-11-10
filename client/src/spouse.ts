// Spouse Connect — the section's fixed option lists and standing
// copy. Spouse Connect is the spouses-only directory built on the
// Find Your People engine: opt-in, reviewed listings; gender and
// connect-with choices shown on the card and enforced server-side in
// both directions; state from the profile with an optional self-typed
// city; mutual accept before a private connection opens. Listings and
// requests are spouse-entered data in the app's database — there is no
// external source.

import { PEOPLE_MEET_SMART } from "./people";

/** The meet-smart card at the top of the directory — the same three
 * rules Find Your People runs on. */
export const SPOUSE_MEET_SMART = PEOPLE_MEET_SMART;

/** Family statuses a spouse profile can carry — chosen at the Spouse
 * door, snapshotted onto the listing. */
export const SPOUSE_FAMILY_STATUSES = [
  "Spouse of a serving member",
  "Spouse of a veteran",
  "Dual-military spouse",
  "Surviving spouse of a deceased service member or veteran",
] as const;

/** The surviving-spouse family status, named once so the Spouse Hub
 * ordering and any other status-driven surface compare against the
 * same string the profile form stores. */
export const SURVIVING_SPOUSE_FAMILY_STATUS =
  "Surviving spouse of a deceased service member or veteran";

/** Where a spouse is in the life right now — multiple allowed, and a
 * browse filter. */
export const SPOUSE_LIFE_STAGES = [
  "New spouse",
  "Going through a deployment",
  "PCS season",
  "Kids at home",
  "Dual-military",
  "Veteran spouse",
  "Surviving spouse",
] as const;

export type SpouseLifeStage = (typeof SPOUSE_LIFE_STAGES)[number];

/** What a spouse can say they're up for — multiple allowed. */
export const SPOUSE_UP_FOR = [
  "Someone to talk to",
  "Hang out",
  "New to the area",
  "Deployment support",
  "Kids & playdates",
] as const;

export type SpouseUpFor = (typeof SPOUSE_UP_FOR)[number];

/** Standing honesty line for the directory. */
export const SPOUSE_STANDING_LINE =
  "Listings are self-reported in this prototype — the name, branch, family status, and details on each card are what the spouse entered about themselves, reviewed for the app's rules before publishing, not independently verified. Connect smart, and report or block anything that feels off — both are on every card.";
