// Find Your People — the section's fixed option lists and standing
// copy. Everything here is the section's own editorial copy, written
// for the brief: an opt-in, reviewed peer directory for past and
// current service members. Listings and requests are member-entered
// data in the app's database, reviewed before anything publishes —
// there is no external source.

/** What a member can say they're up for — multiple allowed. */
export const PEOPLE_UP_FOR = [
  "Mentorship",
  "Workouts & rucks",
  "Hunting & fishing",
  "Work talk",
  "Just someone to talk to",
] as const;

export type PeopleUpFor = (typeof PEOPLE_UP_FOR)[number];

/** Gender on a listing — required to list. */
export const PEOPLE_GENDERS: { value: "male" | "female"; label: string }[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const PEOPLE_GENDER_LABEL: Record<string, string> = {
  male: "Male",
  female: "Female",
};

/** Who a member wants to connect with — shown on the card, enforced on requests. */
export const PEOPLE_CONNECT_WITH: { value: "men" | "women" | "any"; label: string }[] = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "any", label: "No preference" },
];

export const PEOPLE_CONNECT_LABEL: Record<string, string> = {
  men: "Men",
  women: "Women",
  any: "No preference",
};

/**
 * Service status on a listing — the same vocabulary as the profile
 * form's Status picker. Chosen in the listing form itself (it defaults
 * to the profile's status); changing it changes only the listing, not
 * the profile. The browse Status filter offers this full list too, so
 * it is selectable even before anyone with that status has published.
 */
export const PEOPLE_SERVICE_STATUSES = [
  "Active duty",
  "Reserve / Guard",
  "Veteran",
  "Future service member",
] as const;

export type PeopleServiceStatus = (typeof PEOPLE_SERVICE_STATUSES)[number];

/** The meet-smart card at the top of the directory. */
export const PEOPLE_MEET_SMART: { title: string; text: string }[] = [
  {
    title: "Talk in-app first",
    text: "Get to know each other inside the app before you plan anything in person. Connections live in Check-In — no phone numbers, emails, or social handles need to change hands.",
  },
  {
    title: "First meet in a public place",
    text: "Coffee shop, gym front desk, a busy trailhead — somewhere with people around, in daylight, on your own schedule.",
  },
  {
    title: "Tell someone where you're going",
    text: "A spouse, a buddy, anyone: where you're meeting, who you're meeting, and when you expect to be back.",
  },
];

/** Standing honesty line for the directory. */
export const PEOPLE_STANDING_LINE =
  "Listings are self-reported in this prototype — the name, branch, job, and details on each card are what the member entered about themselves, reviewed for the app's rules before publishing, not independently verified. Connect smart, and report or block anything that feels off — both are on every card.";
