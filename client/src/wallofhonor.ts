// Wall of Honor — form options, the rules rendered inside the Add a
// Tribute flow, and the date helpers for the stored tribute dates.
//
// A stored tribute date is one of three shapes: a full date
// ("YYYY-MM-DD"), a bare year ("YYYY"), or "" when it was not recorded.
// Only full dates carry a month/day, so only they can surface in
// "Today we remember".

export const HONOR_BRANCHES = [
  "Army",
  "Marine Corps",
  "Navy",
  "Air Force",
  "Space Force",
  "Coast Guard",
] as const;

export const HONOR_ERAS = [
  "World War I",
  "World War II",
  "Korean War",
  "Vietnam War",
  "Gulf War",
  "Iraq",
  "Afghanistan",
  "Post-9/11 (other)",
  "Peacetime",
  "Other",
] as const;

/** The rules rendered inside the Add a Tribute form, before the fields. */
export const TRIBUTE_RULES: { title: string; text: string }[] = [
  {
    title: "The fallen only",
    text: "Add only someone who has died — in service or after service. No living persons, ever.",
  },
  {
    title: "Someone you can speak for",
    text: "Add people you knew, served with, or are family to — or documented public figures of history whose service is a matter of public record.",
  },
  {
    title: "Accurate and respectful",
    text: "Write what you know to be true, and write it the way you would want it read aloud to their family. If you are unsure of a detail, leave it out — dates and unit may be left blank.",
  },
  {
    title: "Reviewed before it publishes",
    text: "Every tribute goes to PENDING review. Moderators verify it before anything appears on the wall — nothing publishes on submission.",
  },
  {
    title: "Families come first",
    text: "A family request to edit or remove a tribute is always honored, no questions and no debate. If you are family and a tribute here needs to change, report it from the wall and it comes down for review.",
  },
  {
    title: "Photos come later",
    text: "Photo support is a later phase — there is no upload in this version. When photos arrive they will go through the same review, with location data stripped before publication.",
  },
];

export const TRIBUTE_ACK =
  "I understand: this tribute is for someone who has died, I knew them, served with them, am family to them, or they are a documented public figure of history; what I have written is accurate and respectful to the best of my knowledge; and it will sit in PENDING review until a moderator verifies it. Nothing publishes on submission.";

/** "March 14, 2009" for a full date, "2009" for a bare year, "" when unset. */
export function formatTributeDate(stored: string): string {
  if (!stored) return "";
  if (/^\d{4}$/.test(stored)) return stored;
  const d = new Date(`${stored}T00:00:00`);
  if (Number.isNaN(d.getTime())) return stored;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

/** The year portion of a stored date, or "" when unset. */
export function tributeYear(stored: string): string {
  return stored ? stored.slice(0, 4) : "";
}

/** True when a full stored date's month/day is today's month/day. */
export function fallsOnToday(stored: string, now: Date): boolean {
  const m = /^\d{4}-(\d{2})-(\d{2})$/.exec(stored);
  if (!m) return false;
  const month = Number(m[1]);
  const day = Number(m[2]);
  return month === now.getMonth() + 1 && day === now.getDate();
}
