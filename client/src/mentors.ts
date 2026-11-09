// Find a Mentor — the section's fixed topic list, display-name
// choices, standing rules, and care note.
//
// Everything here is the section's own editorial copy, written for the
// brief: mentors are peers who share experience. They are not official
// advisors, recruiters, VSOs, or counselors, and all contact stays
// inside the app. No external source is involved — mentor listings and
// requests are member-entered data in the app's database, reviewed
// before anything publishes.

/** The eight topics a mentor can offer help with, and a request picks from. */
export const MENTOR_TOPICS = [
  "Career & promotions",
  "Changing jobs",
  "Getting out & transition",
  "Education & schools",
  "Money & benefits",
  "VA claims navigation",
  "Family & deployments",
  "Fitness",
] as const;

export type MentorTopic = (typeof MENTOR_TOPICS)[number];

/** How a mentor's name appears on their published listing. */
export const MENTOR_DISPLAY_CHOICES: { value: "full" | "rank_last" | "callsign"; label: string; hint: string }[] = [
  { value: "full", label: "Full name", hint: "Your name as you entered it on your profile." },
  { value: "rank_last", label: "Rank + last name", hint: "e.g., Sgt Dyer — rank and last name only." },
  { value: "callsign", label: "Callsign", hint: "A callsign or nickname members know you by." },
];

/**
 * The care note rendered at the top of the section, before anything
 * else. Mentors are peers — the crisis route is Care & Crisis and 988,
 * never a mentor.
 */
export const MENTOR_CARE_NOTE =
  "Mentors are peers, not counselors. A mentor can share what the road looked like for them — they cannot carry a crisis, and they are not a route to care. If you're struggling, the Care & Crisis section and 988 (press 1 for the Veterans Crisis Line) are the route, not a mentor.";

/** The standing rules rendered inside the Become a Mentor form, before the fields. */
export const MENTOR_RULES: { title: string; text: string }[] = [
  {
    title: "Experience, not authority",
    text: "Mentors share experience — what worked, what didn't, what they wish they'd known. Mentors are not official advisors, recruiters, or VSOs, and nothing a mentor says replaces your chain of command, your career planner, an accredited VSO, or an official source. Battle Book's sections link the official pages; a mentor helps you walk toward them.",
  },
  {
    title: "Contact stays inside the app",
    text: "Keep all contact inside Battle Book. Never put a personal phone number, email address, or social media handle in a listing, a request, or a message — and never ask for one. Accepted mentorships connect through the Check-In space, and that's where the conversation lives.",
  },
  {
    title: "Reviewed before it publishes",
    text: "Every listing goes to PENDING review first. A moderator checks it before it appears in Find a Mentor — nothing publishes on submission.",
  },
  {
    title: "Either side can end it",
    text: "A mentorship lasts only as long as it works for both people. Either side can end it at any time, from this section, no reason needed — ending closes the connection.",
  },
  {
    title: "Peers, not counselors",
    text: "If someone you're mentoring is in crisis, point them to 988 (press 1) and the Care & Crisis section and step back — that is the most helpful thing a peer can do. Mentors never take on a counseling role.",
  },
];

export const MENTOR_ACK =
  "I understand: I am offering to share my experience as a peer — I am not an official advisor, recruiter, or VSO; I will keep all contact inside this app and put no personal phone, email, or social handles in my listing or requests; and my listing will sit in PENDING review until a moderator approves it. Nothing publishes on submission.";
