// Actions for the Battle Book prototype.
//
// News: seeded with real published articles from the verified source
// list (collected at build time with verbatim URLs). refreshNews pulls
// fresh results through ctx.tool.web_search, keeps only allow-listed
// hosts, and distills them with ctx.inference. A daily cron calls it.
//
// Fitness: the coach builds a 1-week plan from the member's inputs with
// deterministic templates keyed to the selected test's events (Test
// Prep) or goal/body-type selections (Dream Body). Calorie/protein
// targets are weight-based estimates, labeled as such in the UI.

import { defineAction, z, type ActionsModule, type Ctx } from "@hatch/space-sdk";
import { asc, desc, eq } from "drizzle-orm";
import * as schema from "./schema";

/* ------------------------------------------------------------------ */
/* Seed news — real articles, verbatim URLs, verified sources only     */
/* ------------------------------------------------------------------ */

const SEED_STORIES = [
  {
    headline: "MARADMIN 545/26: Resumption of Special Leave Accrual (SLA) for FY2026",
    summary:
      "The Marine Corps has resumed Special Leave Accrual approvals for FY2026 and published the official list of designated deployable ships and mobile units whose Marines qualify, following the SECNAV designation in ALNAV 056/26.",
    sourceName: "Marines.mil — Official Messages",
    sourceType: "OFFICIAL" as const,
    branch: "Marine Corps",
    category: "Policy & Admin",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4640789/resumption-of-special-leave-accrual-sla-and-designation-of-qualifying-units-for/",
    publishedLabel: "Nov 3, 2026",
    affectsYou: "Leave policy — check if your unit is on the FY26 SLA designated list.",
  },
  {
    headline: "MARADMIN 546/26: Unaccompanied Housing Quality of Life Standards",
    summary:
      "New Marine Corps-wide quality-of-life standards for barracks and unaccompanied housing, with mandated maintenance response timelines under the Barracks 2030 initiative.",
    sourceName: "Marines.mil — Official Messages",
    sourceType: "OFFICIAL" as const,
    branch: "Marine Corps",
    category: "Policy & Admin",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4641788/establishment-and-communication-of-marine-corps-unaccompanied-housing-quality-o/",
    publishedLabel: "Nov 4, 2026",
    affectsYou: "Barracks residents — new maintenance response standards apply to you.",
  },
  {
    headline: "MARADMIN 520/26: November 2026 SNCO Promotions Announced",
    summary:
      "Active-duty promotions for staff noncommissioned officers for November 2026, with planned December promotions and projected promotion numbers by grade.",
    sourceName: "Marines.mil — Official Messages",
    sourceType: "OFFICIAL" as const,
    branch: "Marine Corps",
    category: "Policy & Admin",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4632060/november-2026-active-duty-promotions-for-staff-noncommissioned-officers-sncos-a/",
    publishedLabel: "Oct 23, 2026",
    affectsYou: "Career Marines — SNCO promotion authority for November.",
  },
  {
    headline: "MARADMIN 191/25: FY2026 Selective Retention Bonus (SRB) Program",
    summary:
      "The FY2026 Selective Retention Bonus and Broken Service SRB programs, including kicker amounts by specialty for Marines reenlisting with an ECC in FY26.",
    sourceName: "Marines.mil — Official Messages",
    sourceType: "OFFICIAL" as const,
    branch: "Marine Corps",
    category: "Pay & Benefits",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4154104/fiscal-year-2026-selective-retention-bonus-program-and-fiscal-year-2026-broken/",
    publishedLabel: "Apr 14, 2025",
    affectsYou: "Reenlisting in FY26 — your MOS may carry an SRB kicker.",
  },
  {
    headline: "Changes Coming to Continuation Pay in 2026",
    summary:
      "Blended Retirement System continuation pay changes on January 1, 2026: eligibility now starts at 7 years of service, with a 2.5x monthly basic pay multiplier for active component Soldiers.",
    sourceName: "MyArmyBenefits (Army.mil)",
    sourceType: "OFFICIAL" as const,
    branch: "Army",
    category: "Pay & Benefits",
    url: "https://myarmybenefits.us.army.mil/News/Changes-to-Continuation-Pay-in-2026",
    publishedLabel: "2026 program update",
    affectsYou: "Army BRS members approaching 7 years — your continuation pay window moved.",
  },
  {
    headline: "The 2026 Veterans Benefits Guide Is Now Available Online",
    summary:
      "VA's annual Federal Benefits Guide for Veterans, dependents, survivors, and caregivers — covering health care, disability compensation, education, home loans, and life insurance, validated as of October 10, 2026.",
    sourceName: "VA News",
    sourceType: "OFFICIAL" as const,
    branch: "All",
    category: "Veterans & VA",
    url: "https://news.va.gov/149864/2026-veterans-benefits-guide-available-online/?utm_campaign=VetResources&utm_id=14OCT2026&utm_medium=email&utm_source=govdelivery",
    publishedLabel: "Oct 15, 2026",
    affectsYou: "Every veteran and family — the one handbook for all VA benefits.",
  },
  {
    headline: "Troops to Get 3.8% Pay Raise Under Proposed Defense Bill",
    summary:
      "The fiscal 2026 defense bill includes a 3.8% across-the-board military pay raise from January 1, plus a family separation allowance increase from $250 to $300 a month.",
    sourceName: "Military Times",
    sourceType: "INDEPENDENT" as const,
    branch: "All",
    category: "Pay & Benefits",
    url: "https://www.militarytimes.com/news/pentagon-congress/2025/12/08/troops-to-get-38-pay-raise-under-proposed-defense-bill/",
    publishedLabel: "Dec 8, 2025",
    affectsYou: "All ranks — the 2026 pay tables start from this raise.",
  },
  {
    headline: "2026 Military Pay Charts",
    summary:
      "Military.com's 2026 pay chart hub: basic pay rose 3.8% for 2026 across the Army, Navy, Marine Corps, Air Force, Coast Guard, and Space Force, per DFAS tables.",
    sourceName: "Military.com",
    sourceType: "INDEPENDENT" as const,
    branch: "All",
    category: "Pay & Benefits",
    url: "https://mst.military.com/benefits/military-pay/charts",
    publishedLabel: "2026 tables",
    affectsYou: "Look up your exact grade and years-of-service cell.",
  },
];

const OFFICIAL_HOSTS = [
  "defense.gov",
  "marines.mil",
  "army.mil",
  "navy.mil",
  "af.mil",
  "spaceforce.mil",
  "uscg.mil",
  "dvids.net",
  "va.gov",
  "dfas.mil",
  "tricare.mil",
];
const INDEPENDENT_HOSTS: Record<string, string> = {
  "militarytimes.com": "Military Times",
  "stripes.com": "Stars and Stripes",
  "taskandpurpose.com": "Task & Purpose",
  "military.com": "Military.com",
};

function classifyHost(url: string): { name: string; type: "OFFICIAL" | "INDEPENDENT" } | null {
  let bare = "";
  try {
    bare = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
  for (const h of OFFICIAL_HOSTS) {
    if (bare === h || bare.endsWith(`.${h}`)) {
      return { name: bare, type: "OFFICIAL" };
    }
  }
  for (const [h, name] of Object.entries(INDEPENDENT_HOSTS)) {
    if (bare === h || bare.endsWith(`.${h}`)) return { name, type: "INDEPENDENT" };
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Fitness plan generation                                             */
/* ------------------------------------------------------------------ */

type PlanDay = { day: string; focus: string; items: string[] };

const TEST_EVENTS: Record<string, string[]> = {
  "USMC PFT": ["Pull-ups / push-ups", "Plank", "3-mile run"],
  "USMC CFT": ["880-yard run", "30-lb ammo can lifts", "Movement under fire (maneuver course)"],
  "Army AFT": ["Deadlift (MDL)", "Hand-release push-up", "Sprint-drag-carry", "Plank", "2-mile run"],
  "Navy PRT": ["Push-ups", "Forearm plank", "1.5-mile run (or alternate cardio)"],
  "Air Force PFA": ["Push-ups", "Sit-ups / cross-leg reverse crunch", "1.5-mile run or 20m shuttle run"],
  "Space Force PFA": ["Push-ups", "Sit-ups / cross-leg reverse crunch", "1.5-mile run or 20m shuttle run"],
  "Coast Guard PT Test": ["Push-ups", "Sit-ups / plank", "1.5-mile run", "Swim standards where applicable"],
};

function buildTestPlan(testName: string, daysPerWeek: number, equipment: string, limitations: string): PlanDay[] {
  const events = TEST_EVENTS[testName] ?? ["Strength circuit", "Conditioning", "Endurance"];
  const equipNote = equipment === "none" ? "bodyweight only" : equipment === "barracks" ? "limited kit — bands, pack, pull-up bar if available" : "full gym access";
  const caution = limitations.trim() ? ` Coach note: you flagged "${limitations}" — swap any painful movement for a pain-free equivalent and get checked if pain persists.` : "";
  const templates: PlanDay[][] = [
    [
      { day: "Day 1", focus: `${events[0] ?? "Event 1"} strength`, items: [`Main event practice: ${events[0] ?? "primary event"} — 5 sets at 60–80% of your current max, full recovery between sets`, `Accessory circuit (${equipNote}): 3 rounds of rows, push-up variations, and carries`, "10 min easy cooldown + mobility"] },
      { day: "Day 2", focus: "Aerobic base", items: [`25–35 min Zone 2 run/ruck at conversational pace`, "6 × 20-second strides, walk back to recover", "Calf, hip, and shin care — 8 min"] },
      { day: "Day 3", focus: `${events[1] ?? "Event 2"} + core`, items: [`Event practice: ${events[1] ?? "secondary event"} — interval sets at test pace`, "Core finisher: dead bugs, side planks, carries — 3 rounds", "15 min Zone 2 flush"] },
      { day: "Day 4", focus: "Test-pace intervals", items: [`Run event intervals: 6 × 400m at goal pace for ${events[events.length - 1] ?? "the run event"}, 2 min easy between`, "2 sets of sub-max event reps to build volume without failure", "Stretch + breathing downshift — 8 min"] },
      { day: "Day 5", focus: "Full mock mini-test", items: [`Run through every test event in order at 85–90% effort: ${events.join(" · ")}`, "Log every number — this is your new baseline", "Easy walk 15 min + full mobility"] },
      { day: "Day 6", focus: "Strength volume", items: [`Volume day (${equipNote}): 4 rounds — squats/hinges, presses, rows, carries`, "Grip and trunk work: hangs, farmer carries, planks", "Optional 20 min easy bike or swim"] },
      { day: "Day 7", focus: "Long slow distance", items: ["40–50 min easy run or ruck — keep it conversational", "Prep the week: log scores, plan sessions, sleep target 7–9 hrs", "Mobility circuit — 10 min"] },
    ],
  ];
  const all = templates[0] ?? [];
  const picked = all.slice(0, Math.min(Math.max(daysPerWeek, 1), 7));
  if (caution) {
    const first = picked[0];
    if (first) first.items = [...first.items, caution.trim()];
  }
  return picked;
}

function buildDreamPlan(goal: string, daysPerWeek: number, equipment: string, limitations: string): PlanDay[] {
  const equipNote = equipment === "none" ? "bodyweight progressions" : equipment === "barracks" ? "dumbbells/bands in the barracks" : "full gym — barbell compounds lead";
  const focusByGoal: Record<string, [string, string, string]> = {
    muscle: ["Upper body — push focus", "Lower body — squat focus", "Upper body — pull focus"],
    fatloss: ["Full-body strength circuit", "Conditioning intervals", "Full-body strength + finisher"],
    recomp: ["Upper body strength", "Lower body strength", "Full-body power + accessories"],
    athletic: ["Power + sprint mechanics", "Strength — total body", "Conditioning + agility"],
    health: ["Full-body strength (light)", "Walk + mobility", "Full-body strength (moderate)"],
  };
  const f = focusByGoal[goal] ?? focusByGoal.health!;
  const days: PlanDay[] = [
    { day: "Day 1", focus: f[0], items: [`Main lifts (${equipNote}): 4 sets of 5–8 reps, leave 1–2 reps in reserve`, "Accessory superset: 3 × 10–12", "10 min walk to finish"] },
    { day: "Day 2", focus: "Zone 2 + mobility", items: ["30–40 min easy cardio — nose-breathing pace", "Full-body mobility flow — 10 min", "Daily step target: 8,000+"] },
    { day: "Day 3", focus: f[1], items: [`Main lifts (${equipNote}): 4 sets of 5–8 reps`, "Unilateral work: split squats / single-leg hinges — 3 × 8 each side", "Core: carries + anti-rotation — 3 rounds"] },
    { day: "Day 4", focus: "Conditioning", items: ["Intervals: 8 × 1 min hard / 2 min easy (bike, rower, hills, or sprints)", "Optional finisher circuit — 2 rounds", "Cooldown walk — 10 min"] },
    { day: "Day 5", focus: f[2], items: [`Main lifts (${equipNote}): 3–4 sets, slightly heavier than Day 1`, "Arms / delts / calves accessories — 3 × 12–15", "Log the session and your readiness (1–10)"] },
    { day: "Day 6", focus: "Active recovery", items: ["45–60 min walk, hike, or easy ruck", "Stretch the tight spots — 10 min", "Prep protein-forward meals for the week"] },
    { day: "Day 7", focus: "Optional repeat or rest", items: ["Repeat your weakest Day 1–5 session at 80% effort, or take full rest", "Weigh in (morning, same conditions) and log it", "Plan next week's sessions"] },
  ];
  const picked = days.slice(0, Math.min(Math.max(daysPerWeek, 1), 7));
  if (limitations.trim()) {
    const first = picked[0];
    if (first) first.items = [...first.items, `Coach note: you flagged "${limitations}" — use pain-free ranges and substitutes; get checked if pain persists.`];
  }
  return picked;
}

/* ------------------------------------------------------------------ */
/* Shared shapes                                                       */
/* ------------------------------------------------------------------ */

const profileShape = z.object({
  id: z.number(),
  displayName: z.string(),
  branch: z.string(),
  component: z.string(),
  status: z.string(),
  mosCode: z.string(),
  rank: z.string(),
  goals: z.string(),
  homeState: z.string(),
  easDate: z.string(),
  itfDate: z.string(),
  idCardExpiry: z.string(),
  onboarded: z.boolean(),
});

const storyShape = z.object({
  id: z.number(),
  headline: z.string(),
  summary: z.string(),
  sourceName: z.string(),
  sourceType: z.enum(["OFFICIAL", "INDEPENDENT"]),
  branch: z.string(),
  category: z.string(),
  url: z.string(),
  publishedLabel: z.string(),
  affectsYou: z.string(),
  bookmarked: z.boolean(),
});

const contributionShape = z.object({
  id: z.number(),
  targetType: z.enum(["mos", "guide"]),
  targetId: z.string(),
  title: z.string(),
  body: z.string(),
  kind: z.enum(["OFFICIAL", "FIELD_NOTE"]),
  sourceUrl: z.string(),
  status: z.enum(["pending", "approved", "rejected"]),
  createdAt: z.string(),
});

const warStoryShape = z.object({
  id: z.number(),
  title: z.string(),
  branch: z.string(),
  era: z.string(),
  eraDetail: z.string(),
  category: z.enum([
    "Combat",
    "Deployment",
    "In the Field",
    "Mentorship",
    "Humor",
    "Loss & Remembrance",
    "Home Front",
  ]),
  displayChoice: z.enum(["full", "rank_last", "callsign", "anonymous"]),
  displayName: z.string(),
  body: z.string(),
  status: z.enum(["pending", "approved", "returned", "rejected"]),
  reviewNote: z.string(),
  reported: z.boolean(),
  createdAt: z.string(),
});

type WarStoryRow = typeof schema.warStories.$inferSelect;

function mapWarStory(r: WarStoryRow): z.infer<typeof warStoryShape> {
  return {
    id: r.id,
    title: r.title,
    branch: r.branch,
    era: r.era,
    eraDetail: r.eraDetail,
    category: r.category,
    displayChoice: r.displayChoice,
    // Defense in depth: an anonymous story's byline never leaves the server.
    displayName: r.displayChoice === "anonymous" ? "" : r.displayName,
    body: r.body,
    status: r.status,
    reviewNote: r.reviewNote,
    reported: r.reported === 1,
    createdAt: r.createdAt.toISOString(),
  };
}

// A tribute date is a full date, a bare year, or empty (not recorded).
const tributeDate = z
  .string()
  .regex(/^(\d{4}|\d{4}-\d{2}-\d{2})?$/, "Date must be YYYY, YYYY-MM-DD, or empty")
  .default("");

const tributeShape = z.object({
  id: z.number(),
  name: z.string(),
  rank: z.string(),
  branch: z.string(),
  unit: z.string(),
  era: z.string(),
  birthDate: z.string(),
  lossDate: z.string(),
  tributeText: z.string(),
  addedBy: z.string(),
  relationship: z.string(),
  showAdder: z.boolean(),
  status: z.enum(["pending", "approved", "returned", "rejected"]),
  reviewNote: z.string(),
  reported: z.boolean(),
  candleCount: z.number(),
  createdAt: z.string(),
});

type TributeRow = typeof schema.wallOfHonor.$inferSelect;

function mapTribute(
  r: TributeRow,
  candleCount: number,
  includeAdder = false,
): z.infer<typeof tributeShape> {
  const show = r.showAdder === 1;
  return {
    id: r.id,
    name: r.name,
    rank: r.rank,
    branch: r.branch,
    unit: r.unit,
    era: r.era,
    birthDate: r.birthDate,
    lossDate: r.lossDate,
    tributeText: r.tributeText,
    // On the public wall, the adding member's name/relationship leaves
    // the server only when they chose to display it. The review queue
    // and the member's own list always see it.
    addedBy: show || includeAdder ? r.addedBy : "",
    relationship: show || includeAdder ? r.relationship : "",
    showAdder: show,
    status: r.status,
    reviewNote: r.reviewNote,
    reported: r.reported === 1,
    candleCount,
    createdAt: r.createdAt.toISOString(),
  };
}

const MENTOR_TOPICS = [
  "Career & promotions",
  "Changing jobs",
  "Getting out & transition",
  "Education & schools",
  "Money & benefits",
  "VA claims navigation",
  "Family & deployments",
  "Fitness",
] as const;

const mentorShape = z.object({
  id: z.number(),
  branch: z.string(),
  jobCode: z.string(),
  jobTitle: z.string(),
  topics: z.array(z.string()),
  bio: z.string(),
  yearsService: z.number().nullable(),
  displayChoice: z.enum(["full", "rank_last", "callsign"]),
  displayName: z.string(),
  availability: z.enum(["open", "paused"]),
  status: z.enum(["pending", "approved", "returned", "rejected"]),
  reviewNote: z.string(),
  reported: z.boolean(),
  // Open requests waiting on this mentor — shown on the mentor's own
  // listing card so they can see demand at a glance.
  pendingRequests: z.number(),
  createdAt: z.string(),
});

type MentorRow = typeof schema.mentors.$inferSelect;

function parseTopics(json: string): string[] {
  try {
    const v: unknown = JSON.parse(json);
    return Array.isArray(v) ? v.filter((t): t is string => typeof t === "string") : [];
  } catch {
    return [];
  }
}

function mapMentor(r: MentorRow, pendingRequests: number): z.infer<typeof mentorShape> {
  return {
    id: r.id,
    branch: r.branch,
    jobCode: r.jobCode,
    jobTitle: r.jobTitle,
    topics: parseTopics(r.topicsJson),
    bio: r.bio,
    yearsService: r.yearsService,
    displayChoice: r.displayChoice,
    displayName: r.displayName,
    availability: r.availability,
    status: r.status,
    reviewNote: r.reviewNote,
    reported: r.reported === 1,
    pendingRequests,
    createdAt: r.createdAt.toISOString(),
  };
}

const mentorRequestShape = z.object({
  id: z.number(),
  mentorId: z.number(),
  mentorDisplayName: z.string(),
  mentorBranch: z.string(),
  mentorJobLabel: z.string(),
  topic: z.string(),
  message: z.string(),
  status: z.enum(["pending", "accepted", "declined", "ended"]),
  reported: z.boolean(),
  createdAt: z.string(),
});

type MentorRequestRow = typeof schema.mentorRequests.$inferSelect;

function mapMentorRequest(
  r: MentorRequestRow,
  mentor: MentorRow | undefined,
): z.infer<typeof mentorRequestShape> {
  return {
    id: r.id,
    mentorId: r.mentorId,
    mentorDisplayName: mentor?.displayName ?? "A mentor",
    mentorBranch: mentor?.branch ?? "",
    mentorJobLabel: mentor
      ? [mentor.jobCode, mentor.jobTitle].filter(Boolean).join(" — ")
      : "",
    topic: r.topic,
    message: r.message,
    status: r.status,
    reported: r.reported === 1,
    createdAt: r.createdAt.toISOString(),
  };
}

const okResponse = z.object({ ok: z.literal(true) });

/* ------------------------- My Service Timeline ------------------------ */

const TIMELINE_ENTRY_TYPES = [
  "joined",
  "bootcamp",
  "school",
  "unit",
  "deployment",
  "promotion",
  "pcs",
  "award",
  "reenlistment",
  "separation",
  "other",
] as const;

/** Accepts "YYYY", "YYYY-MM", or "YYYY-MM-DD" with real month/day ranges. */
const timelineDate = z
  .string()
  .regex(/^\d{4}(-\d{2}){0,2}$/, "Use a year, a month and year, or a full date")
  .refine((v) => {
    const parts = v.split("-").map(Number);
    const [year = 0, month, day] = parts;
    if (year < 1900 || year > 2100) return false;
    if (month !== undefined && (month < 1 || month > 12)) return false;
    if (day !== undefined && (day < 1 || day > 31)) return false;
    return true;
  }, "That date is out of range");

const timelineEntryInput = z.object({
  entryDate: timelineDate,
  entryType: z.enum(TIMELINE_ENTRY_TYPES),
  title: z.string().trim().min(1).max(140),
  unit: z.string().trim().max(120).default(""),
  place: z.string().trim().max(120).default(""),
  note: z.string().trim().max(600).default(""),
});

const timelineEntryShape = z.object({
  id: z.number(),
  entryDate: z.string(),
  entryType: z.enum(TIMELINE_ENTRY_TYPES),
  title: z.string(),
  unit: z.string(),
  place: z.string(),
  note: z.string(),
  createdAt: z.string(),
});

type TimelineEntryRow = typeof schema.serviceTimelineEntries.$inferSelect;

function mapTimelineEntry(r: TimelineEntryRow): z.infer<typeof timelineEntryShape> {
  return {
    id: r.id,
    entryDate: r.entryDate,
    entryType: r.entryType,
    title: r.title,
    unit: r.unit,
    place: r.place,
    note: r.note,
    createdAt: r.createdAt.toISOString(),
  };
}

/** Pads a partial date to its first day so mixed precisions sort together. */
function timelineSortKey(entryDate: string): string {
  if (entryDate.length === 4) return `${entryDate}-01-01`;
  if (entryDate.length === 7) return `${entryDate}-01`;
  return entryDate;
}

function compareTimelineEntries(
  a: z.infer<typeof timelineEntryShape>,
  b: z.infer<typeof timelineEntryShape>,
): number {
  const ka = timelineSortKey(a.entryDate);
  const kb = timelineSortKey(b.entryDate);
  if (ka !== kb) return ka < kb ? -1 : 1;
  return a.id - b.id;
}

const planDayShape = z.object({
  day: z.string(),
  focus: z.string(),
  items: z.array(z.string()),
});

/* ------------------------- Squads (Check-In) ------------------------- */
// Squads are joined by claim only: a member with the squad's invite
// code claims their own seat for their own signed-in profile. There is
// deliberately no action anywhere that adds another profile to a squad
// by name or search.

type ProfileRow = typeof schema.profiles.$inferSelect;
type SquadRow = typeof schema.squads.$inferSelect;

// Sign-in is simulated in this prototype: the active profile is the one
// picked at the sign-in gate (app_state "active_profile_id"), falling
// back to the first profile ever created.
async function currentProfileRow(ctx: Ctx): Promise<ProfileRow | null> {
  const db = ctx.db<typeof schema>();
  const rows = await db.select().from(schema.profiles).orderBy(asc(schema.profiles.id));
  if (rows.length === 0) return null;
  const state = await db
    .select()
    .from(schema.appState)
    .where(eq(schema.appState.key, "active_profile_id"));
  const activeId = Number(state[0]?.value ?? "");
  if (Number.isInteger(activeId) && activeId > 0) {
    const found = rows.find((r) => r.id === activeId);
    if (found) return found;
  }
  return rows[0] ?? null;
}

async function setActiveProfileId(ctx: Ctx, profileId: number): Promise<void> {
  const db = ctx.db<typeof schema>();
  await db
    .insert(schema.appState)
    .values({ key: "active_profile_id", value: String(profileId) })
    .onConflictDoUpdate({
      target: schema.appState.key,
      set: { value: String(profileId) },
    });
}

// Invite codes: 8 characters from an alphabet with no look-alikes
// (no 0/O, 1/I/L, 5/S, 2/Z, 8/B), stored normalized — uppercase, no
// separators — and displayed grouped as XXXX-XXXX.
const INVITE_ALPHABET = "ACDEFGHJKMNPQRTUVWXY34679";

function generateInviteCode(): string {
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += INVITE_ALPHABET[Math.floor(Math.random() * INVITE_ALPHABET.length)];
  }
  return code;
}

function normalizeInviteCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function formatInviteCode(code: string): string {
  return code.length === 8 ? `${code.slice(0, 4)}-${code.slice(4)}` : code;
}

async function uniqueInviteCode(ctx: Ctx): Promise<string> {
  const db = ctx.db<typeof schema>();
  for (let attempt = 0; attempt < 12; attempt++) {
    const code = generateInviteCode();
    const clash = await db
      .select()
      .from(schema.squads)
      .where(eq(schema.squads.inviteCode, code));
    if (clash.length === 0) return code;
  }
  throw new Error("Could not generate a unique invite code. Try again.");
}

// Squads backfilled by the migration carry no code until first read;
// generate and persist one so the leader always has a code to share.
async function ensureSquadCode(ctx: Ctx, squad: SquadRow): Promise<string> {
  if (squad.inviteCode) return squad.inviteCode;
  const db = ctx.db<typeof schema>();
  const code = await uniqueInviteCode(ctx);
  await db
    .update(schema.squads)
    .set({ inviteCode: code })
    .where(eq(schema.squads.id, squad.id));
  return code;
}

const squadMemberShape = z.object({
  membershipId: z.number(),
  displayName: z.string(),
  role: z.enum(["Leader", "Member"]),
  joinedVia: z.enum(["created", "invite", "legacy"]),
  joinedAt: z.string(),
  isYou: z.boolean(),
});

const squadShape = z.object({
  id: z.number(),
  name: z.string(),
  inviteCode: z.string(),
  invitesPaused: z.boolean(),
  myRole: z.enum(["Leader", "Member"]),
  members: z.array(squadMemberShape),
});

export const Actions = {
  /* ------------------------------ Profile ------------------------------ */
  getProfile: defineAction({
    description: "Returns the signed-in (active) member's onboarding profile, or null fields if not onboarded yet.",
    request: z.object({}),
    response: z.object({ profile: profileShape.nullable() }),
    async handler(ctx) {
      const row = await currentProfileRow(ctx);
      if (!row) return { profile: null };
      return {
        profile: {
          id: row.id,
          displayName: row.displayName,
          branch: row.branch,
          component: row.component,
          status: row.status,
          mosCode: row.mosCode,
          rank: row.rank,
          goals: row.goals,
          homeState: row.homeState,
          easDate: row.easDate,
          itfDate: row.itfDate,
          idCardExpiry: row.idCardExpiry,
          onboarded: row.onboarded === 1,
        },
      };
    },
  }),

  saveProfile: defineAction({
    description:
      "Saves the onboarding profile (branch, component, status, MOS, rank, goals). Edits the signed-in profile; with createNew it instead creates a separate new profile and signs in as it (the simulated sign-in's new-member path).",
    request: z.object({
      displayName: z.string().max(80).default(""),
      branch: z.string().min(1).max(40),
      component: z.string().max(40).default(""),
      status: z.string().min(1).max(40),
      mosCode: z.string().max(20).default(""),
      rank: z.string().max(40).default(""),
      goals: z.string().max(300).default(""),
      homeState: z.string().max(60).default(""),
      createNew: z.boolean().default(false),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const values = {
        displayName: args.displayName,
        branch: args.branch,
        component: args.component,
        status: args.status,
        mosCode: args.mosCode.toUpperCase(),
        rank: args.rank,
        goals: args.goals,
        homeState: args.homeState,
        onboarded: 1,
      };
      if (args.createNew) {
        const inserted = await db
          .insert(schema.profiles)
          .values(values)
          .returning({ id: schema.profiles.id });
        const row = inserted[0];
        if (!row) throw new Error("saveProfile: insert returned no rows");
        await setActiveProfileId(ctx, row.id);
      } else {
        const current = await currentProfileRow(ctx);
        if (current) {
          await db.update(schema.profiles).set(values).where(eq(schema.profiles.id, current.id));
        } else {
          const inserted = await db
            .insert(schema.profiles)
            .values(values)
            .returning({ id: schema.profiles.id });
          const row = inserted[0];
          if (row) await setActiveProfileId(ctx, row.id);
        }
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  listProfiles: defineAction({
    description:
      "Lists the profiles the simulated sign-in gate can continue as — sign-in is simulated in this prototype, so each person picks their own profile; there are no passwords.",
    request: z.object({}),
    response: z.object({
      profiles: z.array(
        z.object({
          id: z.number(),
          displayName: z.string(),
          rank: z.string(),
          branch: z.string(),
          mosCode: z.string(),
        }),
      ),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.profiles).orderBy(asc(schema.profiles.id));
      return {
        profiles: rows
          .filter((r) => r.onboarded === 1)
          .map((r) => ({
            id: r.id,
            displayName: r.displayName,
            rank: r.rank,
            branch: r.branch,
            mosCode: r.mosCode,
          })),
      };
    },
  }),

  signInAsProfile: defineAction({
    description:
      "Simulated sign-in: makes the chosen profile the active one. Used by the sign-in gate's profile picker and the switch-profile control.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.profiles)
        .where(eq(schema.profiles.id, args.id));
      if (!rows[0]) throw new Error("That profile could not be found.");
      await setActiveProfileId(ctx, args.id);
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  saveProfileDates: defineAction({
    description:
      "Saves the member's three optional planning dates (separation/EAS, intent-to-file, ID card expiration) on their profile; empty string clears a date.",
    request: z.object({
      easDate: z.string().regex(/^(\d{4}-\d{2}-\d{2})?$/, "Date must be YYYY-MM-DD or empty"),
      itfDate: z.string().regex(/^(\d{4}-\d{2}-\d{2})?$/, "Date must be YYYY-MM-DD or empty"),
      idCardExpiry: z.string().regex(/^(\d{4}-\d{2}-\d{2})?$/, "Date must be YYYY-MM-DD or empty"),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const current = await currentProfileRow(ctx);
      const values = {
        easDate: args.easDate,
        itfDate: args.itfDate,
        idCardExpiry: args.idCardExpiry,
      };
      if (current) {
        await db.update(schema.profiles).set(values).where(eq(schema.profiles.id, current.id));
      } else {
        await db.insert(schema.profiles).values(values);
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  /* --------------------------- Guided Paths ---------------------------- */

  getPathProgress: defineAction({
    description: "Returns the member's Guided Paths progress: completed step keys per path.",
    request: z.object({}),
    response: z.object({
      progress: z.array(z.object({ pathId: z.string(), completed: z.array(z.string()) })),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.pathProgress).orderBy(asc(schema.pathProgress.id));
      return {
        progress: rows.map((r) => {
          let completed: string[] = [];
          try {
            const parsed: unknown = JSON.parse(r.completedJson);
            if (Array.isArray(parsed)) {
              completed = parsed.filter((x): x is string => typeof x === "string");
            }
          } catch {
            completed = [];
          }
          return { pathId: r.pathId, completed };
        }),
      };
    },
  }),

  setPathStep: defineAction({
    description: "Marks one Guided Paths step done or not done for the member's profile and returns the path's completed step keys.",
    request: z.object({
      pathId: z.string().min(1).max(40),
      stepKey: z.string().min(1).max(60),
      done: z.boolean(),
    }),
    response: z.object({ ok: z.literal(true), completed: z.array(z.string()) }),
    async handler(ctx, args): Promise<{ ok: true; completed: string[] }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.pathProgress)
        .where(eq(schema.pathProgress.pathId, args.pathId))
        .limit(1);
      let completed: string[] = [];
      const existing = rows[0];
      if (existing) {
        try {
          const parsed: unknown = JSON.parse(existing.completedJson);
          if (Array.isArray(parsed)) {
            completed = parsed.filter((x): x is string => typeof x === "string");
          }
        } catch {
          completed = [];
        }
      }
      completed = args.done
        ? [...new Set([...completed, args.stepKey])]
        : completed.filter((k) => k !== args.stepKey);
      const completedJson = JSON.stringify(completed);
      if (existing) {
        await db
          .update(schema.pathProgress)
          .set({ completedJson, updatedAt: new Date() })
          .where(eq(schema.pathProgress.id, existing.id));
      } else {
        await db.insert(schema.pathProgress).values({ pathId: args.pathId, completedJson });
      }
      ctx.invalidateQueries();
      return { ok: true, completed };
    },
  }),

  /* ----------------------------- My Binder ----------------------------- */

  getBinder: defineAction({
    description: "Returns the member's Binder: every reference card they have starred, in save order.",
    request: z.object({}),
    response: z.object({
      items: z.array(
        z.object({
          id: z.number(),
          section: z.string(),
          itemKey: z.string(),
          title: z.string(),
          summary: z.string(),
          source: z.string(),
        }),
      ),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.binderItems).orderBy(asc(schema.binderItems.id));
      return {
        items: rows.map((r) => ({
          id: r.id,
          section: r.section,
          itemKey: r.itemKey,
          title: r.title,
          summary: r.summary,
          source: r.source,
        })),
      };
    },
  }),

  toggleBinderItem: defineAction({
    description:
      "Stars or un-stars a reference card in the member's Binder and returns whether the card is now saved.",
    request: z.object({
      section: z.string().min(1).max(40),
      itemKey: z.string().min(1).max(300),
      title: z.string().min(1).max(300),
      summary: z.string().max(2000).default(""),
      source: z.string().max(500).default(""),
    }),
    response: z.object({ ok: z.literal(true), saved: z.boolean() }),
    async handler(ctx, args): Promise<{ ok: true; saved: boolean }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.binderItems)
        .where(eq(schema.binderItems.section, args.section));
      const existing = rows.find((r) => r.itemKey === args.itemKey);
      if (existing) {
        await db.delete(schema.binderItems).where(eq(schema.binderItems.id, existing.id));
        ctx.invalidateQueries();
        return { ok: true, saved: false };
      }
      await db.insert(schema.binderItems).values({
        section: args.section,
        itemKey: args.itemKey,
        title: args.title,
        summary: args.summary,
        source: args.source,
      });
      ctx.invalidateQueries();
      return { ok: true, saved: true };
    },
  }),

  removeBinderItem: defineAction({
    description: "Removes one saved card from the member's Binder by section and item key.",
    request: z.object({
      section: z.string().min(1).max(40),
      itemKey: z.string().min(1).max(300),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.binderItems)
        .where(eq(schema.binderItems.section, args.section));
      const existing = rows.find((r) => r.itemKey === args.itemKey);
      if (existing) {
        await db.delete(schema.binderItems).where(eq(schema.binderItems.id, existing.id));
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  /* --------------------------- Contributions --------------------------- */
  listContributions: defineAction({
    description: "Lists contributions, optionally filtered by status and MOS/guide target.",
    request: z.object({
      status: z.enum(["pending", "approved", "rejected", "all"]).default("all"),
      targetId: z.string().max(60).default(""),
    }),
    response: z.object({ contributions: z.array(contributionShape) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.contributions).orderBy(desc(schema.contributions.id)).limit(200);
      return {
        contributions: rows
          .filter((r) => (args.status === "all" ? true : r.status === args.status))
          .filter((r) => (args.targetId ? r.targetId === args.targetId : true))
          .map((r) => ({
            id: r.id,
            targetType: r.targetType,
            targetId: r.targetId,
            title: r.title,
            body: r.body,
            kind: r.kind,
            sourceUrl: r.sourceUrl,
            status: r.status,
            createdAt: r.createdAt.toISOString(),
          })),
      };
    },
  }),

  submitContribution: defineAction({
    description: "Submits a member contribution to the review queue as PENDING — it is not public until approved.",
    request: z.object({
      targetType: z.enum(["mos", "guide"]),
      targetId: z.string().min(1).max(60),
      title: z.string().min(3).max(140),
      body: z.string().min(10).max(4000),
      kind: z.enum(["OFFICIAL", "FIELD_NOTE"]),
      sourceUrl: z.string().max(500).default(""),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.contributions)
        .values({
          targetType: args.targetType,
          targetId: args.targetId,
          title: args.title,
          body: args.body,
          kind: args.kind,
          sourceUrl: args.sourceUrl,
          status: "pending",
        })
        .returning({ id: schema.contributions.id });
      const inserted = result[0];
      if (!inserted) throw new Error("submitContribution: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  reviewContribution: defineAction({
    description: "Approves or rejects a pending contribution; only approved contributions become public.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["approved", "rejected"]),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.contributions)
        .set({ status: args.decision, reviewedAt: new Date() })
        .where(eq(schema.contributions.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  /* -------------------------------- News ------------------------------- */
  getNews: defineAction({
    description: "Returns news stories from the verified source list with bookmark state and last refresh time.",
    request: z.object({}),
    response: z.object({
      stories: z.array(storyShape),
      officialMessages: z.array(storyShape),
      fetchedAt: z.string().nullable(),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      let rows = await db.select().from(schema.newsStories).orderBy(desc(schema.newsStories.id)).limit(60);
      if (rows.length === 0) {
        await db.insert(schema.newsStories).values(SEED_STORIES);
        rows = await db.select().from(schema.newsStories).orderBy(desc(schema.newsStories.id)).limit(60);
      }
      // The Official Messages strip must never be empty just because a
      // refresh populated general stories first: seed the curated
      // official-message stories whenever none are stored yet.
      if (!rows.some((r) => r.sourceName.includes("Official Messages"))) {
        const existingUrls = new Set(rows.map((r) => r.url));
        const messageSeeds = SEED_STORIES.filter(
          (s) => s.sourceName.includes("Official Messages") && !existingUrls.has(s.url),
        );
        if (messageSeeds.length > 0) {
          await db.insert(schema.newsStories).values(messageSeeds);
          rows = await db.select().from(schema.newsStories).orderBy(desc(schema.newsStories.id)).limit(60);
        }
      }
      const marks = await db.select().from(schema.bookmarks);
      const markedIds = new Set(marks.map((m) => m.storyId));
      const mapStory = (r: (typeof rows)[number]): z.infer<typeof storyShape> => ({
        id: r.id,
        headline: r.headline,
        summary: r.summary,
        sourceName: r.sourceName,
        sourceType: r.sourceType,
        branch: r.branch,
        category: r.category,
        url: r.url,
        publishedLabel: r.publishedLabel,
        affectsYou: r.affectsYou,
        bookmarked: markedIds.has(r.id),
      });
      const messages = rows.filter((r) => r.sourceName.includes("Official Messages"));
      const latest = rows.reduce<Date | null>((acc, r) => (!acc || r.fetchedAt > acc ? r.fetchedAt : acc), null);
      return {
        stories: rows.map(mapStory),
        officialMessages: messages.map(mapStory),
        fetchedAt: latest ? latest.toISOString() : null,
      };
    },
  }),

  toggleBookmark: defineAction({
    description: "Bookmarks or un-bookmarks a news story.",
    request: z.object({ storyId: z.number().int().positive() }),
    response: z.object({ bookmarked: z.boolean() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const existing = await db.select().from(schema.bookmarks).where(eq(schema.bookmarks.storyId, args.storyId));
      if (existing.length > 0) {
        await db.delete(schema.bookmarks).where(eq(schema.bookmarks.storyId, args.storyId));
        ctx.invalidateQueries();
        return { bookmarked: false };
      }
      await db.insert(schema.bookmarks).values({ storyId: args.storyId });
      ctx.invalidateQueries();
      return { bookmarked: true };
    },
  }),

  refreshNews: defineAction({
    description: "Refreshes the news feed from the verified source list via web search; keeps only allow-listed official/independent hosts.",
    request: z.object({}),
    response: z.object({ added: z.number(), ok: z.boolean() }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const queries = [
        "site:marines.mil OR site:army.mil OR site:navy.mil military news message 2026",
        "military pay benefits policy news November 2026 Defense Department",
        "VA veterans news benefits announcement 2026",
        "Military Times Stars and Stripes Task & Purpose military news 2026",
      ];
      type Candidate = { title: string; url: string; snippet: string };
      const candidates: Candidate[] = [];
      for (const q of queries) {
        try {
          const res = await ctx.tool.web_search(q);
          const payload = res as unknown as {
            content?: { results?: { title: string; url: string | null; snippet: string | null }[] };
            results?: { title: string; url: string | null; snippet: string | null }[];
          };
          const found = payload.content?.results ?? payload.results ?? [];
          for (const r of found) {
            if (r.url && classifyHost(r.url)) {
              candidates.push({ title: r.title, url: r.url, snippet: (r.snippet ?? "").slice(0, 600) });
            }
          }
        } catch {
          // One failed query shouldn't kill the refresh.
        }
      }
      const existing = await db.select().from(schema.newsStories);
      const existingUrls = new Set(existing.map((s) => s.url));
      const fresh = candidates.filter((c) => !existingUrls.has(c.url)).slice(0, 16);
      if (fresh.length === 0) return { added: 0, ok: true };

      let distilled: { stories: Array<{ url: string; headline: string; summary: string; branch: string; category: string; publishedLabel: string; affectsYou: string }> } | null = null;
      try {
        distilled = await ctx.inference.complete(
          `You are preparing a military news feed. For each search result below, write a one-to-two sentence factual summary from the snippet (no invented details), pick a branch (Marine Corps, Army, Navy, Air Force, Space Force, Coast Guard, or All), a category (Pay & Benefits, Veterans & VA, Policy & Admin, Health, Family, Transition & Jobs, or General), a short published date label if the snippet shows one (else "Recent"), and an "affects you" line only when the story touches pay, benefits, or branch policy (else empty).\n\nResults:\n${fresh.map((c, i) => `${i + 1}. ${c.title}\nURL: ${c.url}\n${c.snippet}`).join("\n\n")}`,
          {
            schema: z.object({
              stories: z.array(
                z.object({
                  url: z.string(),
                  headline: z.string(),
                  summary: z.string(),
                  branch: z.string(),
                  category: z.string(),
                  publishedLabel: z.string(),
                  affectsYou: z.string(),
                }),
              ),
            }),
          },
        );
      } catch {
        distilled = null;
      }

      let added = 0;
      if (distilled) {
        for (const s of distilled.stories) {
          const cls = classifyHost(s.url);
          if (!cls || existingUrls.has(s.url)) continue;
          await db.insert(schema.newsStories).values({
            headline: s.headline,
            summary: s.summary,
            sourceName: cls.type === "OFFICIAL" ? `${cls.name} (official)` : cls.name,
            sourceType: cls.type,
            branch: s.branch,
            category: s.category,
            url: s.url,
            publishedLabel: s.publishedLabel,
            affectsYou: s.affectsYou,
          });
          existingUrls.add(s.url);
          added++;
        }
      }
      // Prune to the newest 60 stories, keeping bookmarked ones.
      const all = await db.select().from(schema.newsStories).orderBy(desc(schema.newsStories.id));
      const marks = await db.select().from(schema.bookmarks);
      const markedIds = new Set(marks.map((m) => m.storyId));
      for (const row of all.slice(60)) {
        if (!markedIds.has(row.id)) {
          await db.delete(schema.newsStories).where(eq(schema.newsStories.id, row.id));
        }
      }
      ctx.invalidateQueries();
      return { added, ok: true };
    },
  }),

  /* ------------------------------ Check-in ----------------------------- */
  getCheckins: defineAction({
    description: "Returns recent check-ins and today's check-in.",
    request: z.object({}),
    response: z.object({
      checkins: z.array(
        z.object({
          id: z.number(),
          dayKey: z.string(),
          status: z.enum(["good", "rough", "talk", "dark"]),
          returnDate: z.string(),
          note: z.string(),
          createdAt: z.string(),
        }),
      ),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.checkins).orderBy(desc(schema.checkins.id)).limit(30);
      return {
        checkins: rows.map((r) => ({
          id: r.id,
          dayKey: r.dayKey,
          status: r.status,
          returnDate: r.returnDate,
          note: r.note,
          createdAt: r.createdAt.toISOString(),
        })),
      };
    },
  }),

  getSquads: defineAction({
    description:
      "Returns every squad the signed-in profile holds a seat in — roster, the signed-in member's role, and the invite code (generated on first read for squads backfilled without one) — plus the member's private mentorship connections, which are pairs and carry no invite.",
    request: z.object({}),
    response: z.object({
      squads: z.array(squadShape),
      mentorships: z.array(z.object({ id: z.number(), name: z.string(), role: z.string() })),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      const mentorshipRows = await db
        .select()
        .from(schema.squadMembers)
        .orderBy(asc(schema.squadMembers.id));
      const mentorships = mentorshipRows
        .filter((r) => r.role.startsWith("Mentor connection"))
        .map((r) => ({ id: r.id, name: r.name, role: r.role }));
      if (!me) return { squads: [], mentorships };
      const mySeats = await db
        .select()
        .from(schema.squadMemberships)
        .where(eq(schema.squadMemberships.profileId, me.id));
      const squads: z.infer<typeof squadShape>[] = [];
      for (const seat of mySeats) {
        const squadRows = await db
          .select()
          .from(schema.squads)
          .where(eq(schema.squads.id, seat.squadId));
        const squad = squadRows[0];
        if (!squad) continue;
        const code = await ensureSquadCode(ctx, squad);
        const roster = await db
          .select()
          .from(schema.squadMemberships)
          .where(eq(schema.squadMemberships.squadId, squad.id))
          .orderBy(asc(schema.squadMemberships.id));
        squads.push({
          id: squad.id,
          name: squad.name,
          inviteCode: formatInviteCode(code),
          invitesPaused: squad.invitesPaused === 1,
          myRole: seat.role,
          members: roster.map((m) => ({
            membershipId: m.id,
            displayName: m.displayName,
            role: m.role,
            joinedVia: m.joinedVia,
            joinedAt: m.joinedAt.toISOString(),
            isYou: m.profileId === me.id,
          })),
        });
      }
      return { squads, mentorships };
    },
  }),

  createSquad: defineAction({
    description:
      "Creates a new squad led by the signed-in profile, with a fresh server-generated invite code. The leader's seat is the only one created — everyone else joins by claiming a seat with the code.",
    request: z.object({ name: z.string().min(1).max(60) }),
    response: z.object({ id: z.number(), inviteCode: z.string() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      if (!me) throw new Error("Set up your profile first, then create a squad.");
      const code = await uniqueInviteCode(ctx);
      const inserted = await db
        .insert(schema.squads)
        .values({ name: args.name.trim(), inviteCode: code, invitesPaused: 0 })
        .returning({ id: schema.squads.id });
      const squad = inserted[0];
      if (!squad) throw new Error("createSquad: insert returned no rows");
      await db.insert(schema.squadMemberships).values({
        squadId: squad.id,
        profileId: me.id,
        displayName: me.displayName,
        role: "Leader",
        joinedVia: "created",
      });
      ctx.invalidateQueries();
      return { id: squad.id, inviteCode: formatInviteCode(code) };
    },
  }),

  previewSquadInvite: defineAction({
    description:
      "Previews the squad behind an invite code before anyone joins: squad name, leader, and member count — or a plain-language reason the code can't be used (unknown code, invites paused, already a member).",
    request: z.object({ code: z.string().min(1).max(40) }),
    response: z.object({
      ok: z.boolean(),
      message: z.string(),
      squad: z
        .object({ name: z.string(), leaderName: z.string(), memberCount: z.number() })
        .nullable(),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      const code = normalizeInviteCode(args.code);
      const squadRows = await db
        .select()
        .from(schema.squads)
        .where(eq(schema.squads.inviteCode, code));
      const squad = squadRows[0];
      if (!squad || code.length === 0) {
        return {
          ok: false,
          message:
            "That code doesn't match any squad. Check the code and try again — codes aren't case-sensitive, and the dash doesn't matter.",
          squad: null,
        };
      }
      const roster = await db
        .select()
        .from(schema.squadMemberships)
        .where(eq(schema.squadMemberships.squadId, squad.id))
        .orderBy(asc(schema.squadMemberships.id));
      const leader = roster.find((m) => m.role === "Leader");
      const preview = {
        name: squad.name,
        leaderName: leader?.displayName || "A Battle Book member",
        memberCount: roster.length,
      };
      if (me && roster.some((m) => m.profileId === me.id)) {
        return {
          ok: false,
          message: `You're already a member of ${squad.name} — your seat is on its roster.`,
          squad: preview,
        };
      }
      if (squad.invitesPaused === 1) {
        return {
          ok: false,
          message: `${squad.name} isn't taking new members right now — its leader has paused invites. Ask the leader to resume invites, then try the code again.`,
          squad: preview,
        };
      }
      return { ok: true, message: "", squad: preview };
    },
  }),

  claimSquadSeat: defineAction({
    description:
      "Claims a seat in a squad for the signed-in profile using its invite code. Refuses — with a plain-language reason — an unknown code, paused invites, or a profile that already holds a seat. There is no way to claim a seat for anyone else.",
    request: z.object({ code: z.string().min(1).max(40) }),
    response: z.object({
      ok: z.boolean(),
      message: z.string(),
      squadId: z.number().nullable(),
      squadName: z.string(),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      if (!me) {
        return {
          ok: false,
          message: "Set up your profile first — a seat is claimed by your own profile.",
          squadId: null,
          squadName: "",
        };
      }
      const code = normalizeInviteCode(args.code);
      const squadRows = await db
        .select()
        .from(schema.squads)
        .where(eq(schema.squads.inviteCode, code));
      const squad = squadRows[0];
      if (!squad || code.length === 0) {
        return {
          ok: false,
          message:
            "That code doesn't match any squad. Check the code and try again — codes aren't case-sensitive, and the dash doesn't matter.",
          squadId: null,
          squadName: "",
        };
      }
      const roster = await db
        .select()
        .from(schema.squadMemberships)
        .where(eq(schema.squadMemberships.squadId, squad.id));
      if (roster.some((m) => m.profileId === me.id)) {
        return {
          ok: false,
          message: `You're already a member of ${squad.name} — your seat is on its roster.`,
          squadId: squad.id,
          squadName: squad.name,
        };
      }
      if (squad.invitesPaused === 1) {
        return {
          ok: false,
          message: `${squad.name} isn't taking new members right now — its leader has paused invites. Ask the leader to resume invites, then try the code again.`,
          squadId: squad.id,
          squadName: squad.name,
        };
      }
      await db.insert(schema.squadMemberships).values({
        squadId: squad.id,
        profileId: me.id,
        displayName: me.displayName,
        role: "Member",
        joinedVia: "invite",
      });
      ctx.invalidateQueries();
      return {
        ok: true,
        message: `You're in. Your seat in ${squad.name} is claimed — the squad sees you on its roster now.`,
        squadId: squad.id,
        squadName: squad.name,
      };
    },
  }),

  regenerateSquadInvite: defineAction({
    description:
      "Leader only: replaces a squad's invite code with a fresh one. The old code stops working immediately — anyone holding it can no longer preview or claim.",
    request: z.object({ squadId: z.number().int().positive() }),
    response: z.object({ inviteCode: z.string() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      const seats = me
        ? await db
            .select()
            .from(schema.squadMemberships)
            .where(eq(schema.squadMemberships.squadId, args.squadId))
        : [];
      const mine = seats.find((s) => me !== null && s.profileId === me.id);
      if (!mine || mine.role !== "Leader") {
        throw new Error("Only the squad's leader can regenerate its invite code.");
      }
      const code = await uniqueInviteCode(ctx);
      await db
        .update(schema.squads)
        .set({ inviteCode: code })
        .where(eq(schema.squads.id, args.squadId));
      ctx.invalidateQueries();
      return { inviteCode: formatInviteCode(code) };
    },
  }),

  setSquadInvitesPaused: defineAction({
    description:
      "Leader only: pauses or resumes a squad's invites. While paused, the code still identifies the squad but every claim is refused.",
    request: z.object({
      squadId: z.number().int().positive(),
      paused: z.boolean(),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      const seats = me
        ? await db
            .select()
            .from(schema.squadMemberships)
            .where(eq(schema.squadMemberships.squadId, args.squadId))
        : [];
      const mine = seats.find((s) => me !== null && s.profileId === me.id);
      if (!mine || mine.role !== "Leader") {
        throw new Error("Only the squad's leader can pause or resume invites.");
      }
      await db
        .update(schema.squads)
        .set({ invitesPaused: args.paused ? 1 : 0 })
        .where(eq(schema.squads.id, args.squadId));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  removeSquadMember: defineAction({
    description:
      "Leader only: removes one member's seat from a squad's roster. The leader's own seat can't be removed this way — a leader leaves with Leave Squad instead.",
    request: z.object({
      squadId: z.number().int().positive(),
      membershipId: z.number().int().positive(),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      const seats = me
        ? await db
            .select()
            .from(schema.squadMemberships)
            .where(eq(schema.squadMemberships.squadId, args.squadId))
        : [];
      const mine = seats.find((s) => me !== null && s.profileId === me.id);
      if (!mine || mine.role !== "Leader") {
        throw new Error("Only the squad's leader can remove a member.");
      }
      const target = seats.find((s) => s.id === args.membershipId);
      if (!target) throw new Error("That seat is no longer on the roster.");
      if (target.role === "Leader") {
        throw new Error("The leader's seat can't be removed — the leader leaves with Leave Squad.");
      }
      await db
        .delete(schema.squadMemberships)
        .where(eq(schema.squadMemberships.id, args.membershipId));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  leaveSquad: defineAction({
    description:
      "Removes the signed-in profile's own seat from a squad. If the leader leaves while members remain, the earliest-joined member becomes leader; if the leader was the last seat, the squad is closed and its code dies with it.",
    request: z.object({ squadId: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const me = await currentProfileRow(ctx);
      if (!me) throw new Error("You don't hold a seat in that squad.");
      const seats = await db
        .select()
        .from(schema.squadMemberships)
        .where(eq(schema.squadMemberships.squadId, args.squadId))
        .orderBy(asc(schema.squadMemberships.id));
      const mine = seats.find((s) => s.profileId === me.id);
      if (!mine) throw new Error("You don't hold a seat in that squad.");
      await db
        .delete(schema.squadMemberships)
        .where(eq(schema.squadMemberships.id, mine.id));
      if (mine.role === "Leader") {
        const remaining = seats.filter((s) => s.id !== mine.id);
        const successor = remaining[0];
        if (successor) {
          await db
            .update(schema.squadMemberships)
            .set({ role: "Leader" })
            .where(eq(schema.squadMemberships.id, successor.id));
        } else {
          await db.delete(schema.squads).where(eq(schema.squads.id, args.squadId));
        }
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  saveCheckin: defineAction({
    description: "Saves today's daily check-in status (Good / Rough day / Need to talk / Going Dark with return date).",
    request: z.object({
      dayKey: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      status: z.enum(["good", "rough", "talk", "dark"]),
      returnDate: z.string().max(20).default(""),
      note: z.string().max(500).default(""),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const existing = await db.select().from(schema.checkins).where(eq(schema.checkins.dayKey, args.dayKey));
      const first = existing[0];
      if (first) {
        await db
          .update(schema.checkins)
          .set({ status: args.status, returnDate: args.returnDate, note: args.note })
          .where(eq(schema.checkins.id, first.id));
      } else {
        await db.insert(schema.checkins).values({
          dayKey: args.dayKey,
          status: args.status,
          returnDate: args.returnDate,
          note: args.note,
        });
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  /* ------------------------------- Fitness ------------------------------ */
  generatePlan: defineAction({
    description: "Generates and saves a 1-week fitness plan: Test Prep for a branch test, or Dream Body with calorie/protein targets and a goal-weight sanity check.",
    request: z.object({
      path: z.enum(["test", "dream"]),
      branch: z.string().max(40).default(""),
      testName: z.string().max(60).default(""),
      testDate: z.string().max(20).default(""),
      baseline: z.string().max(300).default(""),
      target: z.string().max(300).default(""),
      goal: z.string().max(40).default(""),
      currentWeightLb: z.number().min(60).max(600).optional(),
      goalWeightLb: z.number().min(60).max(600).optional(),
      heightIn: z.number().min(48).max(96).optional(),
      age: z.number().int().min(16).max(80).optional(),
      currentBody: z.string().max(30).default(""),
      desiredBody: z.string().max(30).default(""),
      activity: z.string().max(30).default("moderate"),
      daysPerWeek: z.number().int().min(1).max(7).default(4),
      equipment: z.string().max(30).default("gym"),
      limitations: z.string().max(300).default(""),
    }),
    response: z.object({
      planId: z.number(),
      days: z.array(planDayShape),
      caloriesLow: z.number().nullable(),
      caloriesHigh: z.number().nullable(),
      proteinLow: z.number().nullable(),
      proteinHigh: z.number().nullable(),
      sanityFlag: z.string(),
      testEvents: z.array(z.string()),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      let days: PlanDay[];
      let caloriesLow: number | null = null;
      let caloriesHigh: number | null = null;
      let proteinLow: number | null = null;
      let proteinHigh: number | null = null;
      let sanityFlag = "";
      const testEvents = args.path === "test" ? (TEST_EVENTS[args.testName] ?? []) : [];

      if (args.path === "test") {
        days = buildTestPlan(args.testName, args.daysPerWeek, args.equipment, args.limitations);
      } else {
        days = buildDreamPlan(args.goal, args.daysPerWeek, args.equipment, args.limitations);
        if (args.currentWeightLb && args.goalWeightLb && args.heightIn) {
          const h = args.heightIn;
          const bmiOf = (lb: number) => (lb / (h * h)) * 703;
          const goalBmi = bmiOf(args.goalWeightLb);
          const healthyLow = Math.round((18.5 * h * h) / 703);
          const healthyHigh = Math.round((24.9 * h * h) / 703);
          if (goalBmi < 18.5 || goalBmi > 30) {
            const staged = goalBmi < 18.5 ? healthyLow : Math.round(args.currentWeightLb * 0.9);
            sanityFlag = `Your goal weight of ${args.goalWeightLb} lb sits outside the healthy range for your height (${healthyLow}–${healthyHigh} lb). The coach won't program toward it directly — aim first for a staged target of about ${staged} lb, then reassess with a medical professional. The plan below is built for that staged goal.`;
          }
          const activityMult = args.activity === "sedentary" ? 13 : args.activity === "light" ? 14 : args.activity === "active" ? 16 : 15;
          let maintenance = args.currentWeightLb * activityMult;
          if (args.goal === "fatloss") maintenance -= 400;
          if (args.goal === "muscle") maintenance += 300;
          caloriesLow = Math.round(maintenance - 100);
          caloriesHigh = Math.round(maintenance + 100);
          const anchor = sanityFlag ? args.currentWeightLb : args.goalWeightLb;
          proteinLow = Math.round(anchor * 0.7);
          proteinHigh = Math.round(anchor * 1.0);
        }
      }

      const result = await db
        .insert(schema.fitnessPlans)
        .values({
          path: args.path,
          branch: args.branch,
          testName: args.testName,
          inputsJson: JSON.stringify(args),
          planJson: JSON.stringify(days),
          caloriesLow,
          caloriesHigh,
          proteinLow,
          proteinHigh,
          sanityFlag,
        })
        .returning({ id: schema.fitnessPlans.id });
      const inserted = result[0];
      if (!inserted) throw new Error("generatePlan: insert returned no rows");
      ctx.invalidateQueries();
      return {
        planId: inserted.id,
        days,
        caloriesLow,
        caloriesHigh,
        proteinLow,
        proteinHigh,
        sanityFlag,
        testEvents,
      };
    },
  }),

  getLatestPlan: defineAction({
    description: "Returns the most recently generated fitness plan, if any.",
    request: z.object({}),
    response: z.object({
      plan: z
        .object({
          id: z.number(),
          path: z.enum(["test", "dream"]),
          branch: z.string(),
          testName: z.string(),
          days: z.array(planDayShape),
          caloriesLow: z.number().nullable(),
          caloriesHigh: z.number().nullable(),
          proteinLow: z.number().nullable(),
          proteinHigh: z.number().nullable(),
          sanityFlag: z.string(),
          createdAt: z.string(),
        })
        .nullable(),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.fitnessPlans).orderBy(desc(schema.fitnessPlans.id)).limit(1);
      const row = rows[0];
      if (!row) return { plan: null };
      let days: PlanDay[] = [];
      try {
        days = JSON.parse(row.planJson) as PlanDay[];
      } catch {
        days = [];
      }
      return {
        plan: {
          id: row.id,
          path: row.path,
          branch: row.branch,
          testName: row.testName,
          days,
          caloriesLow: row.caloriesLow,
          caloriesHigh: row.caloriesHigh,
          proteinLow: row.proteinLow,
          proteinHigh: row.proteinHigh,
          sanityFlag: row.sanityFlag,
          createdAt: row.createdAt.toISOString(),
        },
      };
    },
  }),

  listWorkoutLogs: defineAction({
    description: "Lists workout log entries, newest first.",
    request: z.object({ limit: z.number().int().positive().max(100).default(50) }),
    response: z.object({
      logs: z.array(
        z.object({
          id: z.number(),
          dayLabel: z.string(),
          title: z.string(),
          detail: z.string(),
          done: z.boolean(),
          createdAt: z.string(),
        }),
      ),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.workoutLogs).orderBy(desc(schema.workoutLogs.id)).limit(args.limit);
      return {
        logs: rows.map((r) => ({
          id: r.id,
          dayLabel: r.dayLabel,
          title: r.title,
          detail: r.detail,
          done: r.done === 1,
          createdAt: r.createdAt.toISOString(),
        })),
      };
    },
  }),

  addWorkoutLog: defineAction({
    description: "Logs a completed workout session.",
    request: z.object({
      dayLabel: z.string().max(30).default(""),
      title: z.string().min(1).max(140),
      detail: z.string().max(500).default(""),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.workoutLogs)
        .values({ dayLabel: args.dayLabel, title: args.title, detail: args.detail, done: 1 })
        .returning({ id: schema.workoutLogs.id });
      const inserted = result[0];
      if (!inserted) throw new Error("addWorkoutLog: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  listWeightLogs: defineAction({
    description: "Lists weight log entries for the Dream Body path, newest first.",
    request: z.object({ limit: z.number().int().positive().max(100).default(50) }),
    response: z.object({
      logs: z.array(z.object({ id: z.number(), weightLb: z.number(), createdAt: z.string() })),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.weightLogs).orderBy(desc(schema.weightLogs.id)).limit(args.limit);
      return {
        logs: rows.map((r) => ({ id: r.id, weightLb: r.weightLb, createdAt: r.createdAt.toISOString() })),
      };
    },
  }),

  addWeightLog: defineAction({
    description: "Logs a body-weight entry.",
    request: z.object({ weightLb: z.number().min(60).max(600) }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.weightLogs)
        .values({ weightLb: args.weightLb })
        .returning({ id: schema.weightLogs.id });
      const inserted = result[0];
      if (!inserted) throw new Error("addWeightLog: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  /* ---------------------------- War Stories ---------------------------- */
  // Member stories follow the pack's Part 4 spec: members only, every
  // submission lands PENDING and publishes only after review; a report
  // sends a published story back into the review queue.
  listWarStories: defineAction({
    description:
      "Lists member war stories: published (approved) stories for the section, every story for the review queue, or the member's own submissions with their review state.",
    request: z.object({
      scope: z.enum(["published", "queue", "mine"]).default("published"),
    }),
    response: z.object({ stories: z.array(warStoryShape) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.warStories).orderBy(desc(schema.warStories.id)).limit(200);
      const filtered =
        args.scope === "published"
          ? rows.filter((r) => r.status === "approved")
          : args.scope === "queue"
            ? rows.filter((r) => r.status === "pending")
            : rows;
      return { stories: filtered.map(mapWarStory) };
    },
  }),

  submitWarStory: defineAction({
    description:
      "Submits a member war story to the review queue as PENDING — it is not public until a reviewer approves it.",
    request: z.object({
      title: z.string().min(3).max(140),
      branch: z.string().min(1).max(40),
      era: z.string().min(1).max(60),
      eraDetail: z.string().max(120).default(""),
      category: z.enum([
        "Combat",
        "Deployment",
        "In the Field",
        "Mentorship",
        "Humor",
        "Loss & Remembrance",
        "Home Front",
      ]),
      displayChoice: z.enum(["full", "rank_last", "callsign", "anonymous"]),
      displayName: z.string().max(80).default(""),
      body: z.string().min(20).max(12000),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.warStories)
        .values({
          title: args.title,
          branch: args.branch,
          era: args.era,
          eraDetail: args.eraDetail,
          category: args.category,
          displayChoice: args.displayChoice,
          // An anonymous byline is never stored-rendered; keep the text
          // only for the named choices the member picked.
          displayName: args.displayChoice === "anonymous" ? "" : args.displayName,
          body: args.body,
          status: "pending",
        })
        .returning({ id: schema.warStories.id });
      const inserted = result[0];
      if (!inserted) throw new Error("submitWarStory: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  reviewWarStory: defineAction({
    description:
      "Reviews a pending member war story: approve publishes it, return sends it back to the author with a reason, reject removes it.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["approved", "returned", "rejected"]),
      note: z.string().max(500).default(""),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.warStories)
        .set({
          status: args.decision,
          reviewNote: args.decision === "returned" ? args.note : "",
          reported: 0,
          reviewedAt: new Date(),
        })
        .where(eq(schema.warStories.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  reportWarStory: defineAction({
    description:
      "Reports a published member war story: it leaves the public list and goes back into the review queue for a moderator decision.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.warStories)
        .set({ status: "pending", reported: 1, reviewedAt: new Date() })
        .where(eq(schema.warStories.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  /* ---------------------------- Wall of Honor --------------------------- */
  // Member tributes follow the same trust model as war stories: members
  // only, every submission lands PENDING and publishes only after
  // review; a report sends a published tribute back into the queue.
  // Candles are a quiet remembrance count, never a like.
  listTributes: defineAction({
    description:
      "Lists Wall of Honor tributes: published (approved) tributes with remembrance counts for the wall, every pending tribute for the review queue, or all submissions with their review state.",
    request: z.object({
      scope: z.enum(["published", "queue", "mine"]).default("published"),
    }),
    response: z.object({ tributes: z.array(tributeShape) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.wallOfHonor).orderBy(desc(schema.wallOfHonor.id)).limit(300);
      const candles = await db.select().from(schema.tributeCandles);
      const counts = new Map<number, number>();
      for (const c of candles) counts.set(c.tributeId, (counts.get(c.tributeId) ?? 0) + 1);
      const filtered =
        args.scope === "published"
          ? rows.filter((r) => r.status === "approved")
          : args.scope === "queue"
            ? rows.filter((r) => r.status === "pending")
            : rows;
      return {
        tributes: filtered.map((r) =>
          mapTribute(r, counts.get(r.id) ?? 0, args.scope !== "published"),
        ),
      };
    },
  }),

  submitTribute: defineAction({
    description:
      "Submits a Wall of Honor tribute to the review queue as PENDING — it is not public until a reviewer approves it.",
    request: z.object({
      name: z.string().min(2).max(120),
      rank: z.string().max(60).default(""),
      branch: z.string().min(1).max(40),
      unit: z.string().max(120).default(""),
      era: z.string().min(1).max(60),
      birthDate: tributeDate,
      lossDate: tributeDate,
      tributeText: z.string().min(20).max(4000),
      addedBy: z.string().max(80).default(""),
      relationship: z.string().max(120).default(""),
      showAdder: z.boolean().default(false),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.wallOfHonor)
        .values({
          name: args.name,
          rank: args.rank,
          branch: args.branch,
          unit: args.unit,
          era: args.era,
          birthDate: args.birthDate,
          lossDate: args.lossDate,
          tributeText: args.tributeText,
          addedBy: args.addedBy,
          relationship: args.relationship,
          showAdder: args.showAdder ? 1 : 0,
          status: "pending",
        })
        .returning({ id: schema.wallOfHonor.id });
      const inserted = result[0];
      if (!inserted) throw new Error("submitTribute: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  reviewTribute: defineAction({
    description:
      "Reviews a pending Wall of Honor tribute: approve publishes it to the wall, return sends it back to the member with a reason, reject removes it.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["approved", "returned", "rejected"]),
      note: z.string().max(500).default(""),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.wallOfHonor)
        .set({
          status: args.decision,
          reviewNote: args.decision === "returned" ? args.note : "",
          reported: 0,
          reviewedAt: new Date(),
        })
        .where(eq(schema.wallOfHonor.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  reportTribute: defineAction({
    description:
      "Reports a published Wall of Honor tribute: it leaves the wall and goes back into the review queue for a moderator decision.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.wallOfHonor)
        .set({ status: "pending", reported: 1, reviewedAt: new Date() })
        .where(eq(schema.wallOfHonor.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  toggleCandle: defineAction({
    description:
      "Lights or extinguishes the member's remembrance candle on a published Wall of Honor tribute and returns the new remembrance count.",
    request: z.object({ tributeId: z.number().int().positive() }),
    response: z.object({ lit: z.boolean(), count: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.tributeCandles)
        .where(eq(schema.tributeCandles.tributeId, args.tributeId));
      const existing = rows[0];
      let lit: boolean;
      if (existing) {
        await db.delete(schema.tributeCandles).where(eq(schema.tributeCandles.id, existing.id));
        lit = false;
      } else {
        await db.insert(schema.tributeCandles).values({ tributeId: args.tributeId });
        lit = true;
      }
      const after = await db
        .select()
        .from(schema.tributeCandles)
        .where(eq(schema.tributeCandles.tributeId, args.tributeId));
      ctx.invalidateQueries();
      return { lit, count: after.length };
    },
  }),

  getMyCandles: defineAction({
    description: "Returns the ids of the Wall of Honor tributes the member has lit a candle for.",
    request: z.object({}),
    response: z.object({ litIds: z.array(z.number()) }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.tributeCandles);
      return { litIds: rows.map((r) => r.tributeId) };
    },
  }),

  /* ---------------------------- Find a Mentor --------------------------- */
  // Mentor listings follow the same trust model as war stories and
  // tributes: members only, every listing lands PENDING and publishes
  // only after review; a report sends a published listing back into
  // the queue. Requests go only to OPEN published mentors; on accept
  // the pair connects through the Check-In space as a private
  // two-member squad named for the mentorship (a squad_members row),
  // and ending the mentorship removes that row. No contact details
  // exist anywhere in the flow — topic and intro text only.
  listMentors: defineAction({
    description:
      "Lists mentor listings: published (approved) mentors for browsing, every pending listing for the review queue, or all of the member's own listings with their review state and open-request counts.",
    request: z.object({
      scope: z.enum(["published", "queue", "mine"]).default("published"),
    }),
    response: z.object({ mentors: z.array(mentorShape) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.mentors).orderBy(desc(schema.mentors.id)).limit(300);
      const requests = await db.select().from(schema.mentorRequests);
      const pendingCounts = new Map<number, number>();
      for (const r of requests) {
        if (r.status === "pending") {
          pendingCounts.set(r.mentorId, (pendingCounts.get(r.mentorId) ?? 0) + 1);
        }
      }
      const filtered =
        args.scope === "published"
          ? rows.filter((r) => r.status === "approved")
          : args.scope === "queue"
            ? rows.filter((r) => r.status === "pending")
            : rows;
      return {
        mentors: filtered.map((r) => mapMentor(r, pendingCounts.get(r.id) ?? 0)),
      };
    },
  }),

  submitMentor: defineAction({
    description:
      "Submits a mentor listing to the review queue as PENDING — it is not public until a reviewer approves it.",
    request: z.object({
      branch: z.string().min(1).max(40),
      jobCode: z.string().max(20).default(""),
      jobTitle: z.string().max(140).default(""),
      topics: z.array(z.enum(MENTOR_TOPICS)).min(1).max(8),
      bio: z.string().min(20).max(1200),
      yearsService: z.number().int().min(0).max(60).nullable().default(null),
      displayChoice: z.enum(["full", "rank_last", "callsign"]),
      displayName: z.string().min(1).max(80),
      availability: z.enum(["open", "paused"]).default("open"),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.mentors)
        .values({
          branch: args.branch,
          jobCode: args.jobCode,
          jobTitle: args.jobTitle,
          topicsJson: JSON.stringify(args.topics),
          bio: args.bio,
          yearsService: args.yearsService,
          displayChoice: args.displayChoice,
          displayName: args.displayName,
          availability: args.availability,
          status: "pending",
        })
        .returning({ id: schema.mentors.id });
      const inserted = result[0];
      if (!inserted) throw new Error("submitMentor: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  reviewMentor: defineAction({
    description:
      "Reviews a pending mentor listing: approve publishes it to Find a Mentor, return sends it back to the member with a reason, reject removes it.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["approved", "returned", "rejected"]),
      note: z.string().max(500).default(""),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.mentors)
        .set({
          status: args.decision,
          reviewNote: args.decision === "returned" ? args.note : "",
          reported: 0,
          reviewedAt: new Date(),
        })
        .where(eq(schema.mentors.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  reportMentor: defineAction({
    description:
      "Reports a published mentor listing: it leaves the public list and goes back into the review queue for a moderator decision.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.mentors)
        .set({ status: "pending", reported: 1, reviewedAt: new Date() })
        .where(eq(schema.mentors.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  setMentorAvailability: defineAction({
    description:
      "Sets the member's own mentor listing to Open or Paused. A paused listing stays published but cannot receive new requests.",
    request: z.object({
      id: z.number().int().positive(),
      availability: z.enum(["open", "paused"]),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.mentors)
        .set({ availability: args.availability })
        .where(eq(schema.mentors.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  listMentorRequests: defineAction({
    description:
      "Lists every mentorship request with its mentor's display details and status — the member's incoming requests, outgoing requests, and active connections all read from this one list.",
    request: z.object({}),
    response: z.object({ requests: z.array(mentorRequestShape) }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.mentorRequests)
        .orderBy(desc(schema.mentorRequests.id))
        .limit(300);
      const mentorRows = await db.select().from(schema.mentors);
      const byId = new Map(mentorRows.map((m) => [m.id, m]));
      return { requests: rows.map((r) => mapMentorRequest(r, byId.get(r.mentorId))) };
    },
  }),

  requestMentor: defineAction({
    description:
      "Sends a mentorship request (topic + short intro) to an OPEN published mentor. Fails when the mentor is paused or unpublished — no request is created.",
    request: z.object({
      mentorId: z.number().int().positive(),
      topic: z.enum(MENTOR_TOPICS),
      message: z.string().min(10).max(800),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const mentorRows = await db
        .select()
        .from(schema.mentors)
        .where(eq(schema.mentors.id, args.mentorId));
      const mentor = mentorRows[0];
      if (!mentor || mentor.status !== "approved") {
        throw new Error("That mentor listing isn't published, so it can't take requests.");
      }
      if (mentor.availability !== "open") {
        throw new Error("That mentor is paused right now and isn't taking requests.");
      }
      const result = await db
        .insert(schema.mentorRequests)
        .values({
          mentorId: args.mentorId,
          topic: args.topic,
          message: args.message,
          status: "pending",
        })
        .returning({ id: schema.mentorRequests.id });
      const inserted = result[0];
      if (!inserted) throw new Error("requestMentor: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  respondMentorRequest: defineAction({
    description:
      "The mentor accepts or declines a pending mentorship request. Accepting connects the pair in the Check-In space as a private two-member squad named for the mentorship.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["accepted", "declined"]),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.mentorRequests)
        .where(eq(schema.mentorRequests.id, args.id));
      const req = rows[0];
      if (!req || req.status !== "pending") {
        throw new Error("That request has already been answered.");
      }
      let squadMemberId: number | null = null;
      if (args.decision === "accepted") {
        const mentorRows = await db
          .select()
          .from(schema.mentors)
          .where(eq(schema.mentors.id, req.mentorId));
        const mentor = mentorRows[0];
        const mentorName = mentor?.displayName ?? "Mentor";
        const insertedSquad = await db
          .insert(schema.squadMembers)
          .values({
            name: `Mentorship — ${mentorName}`,
            role: `Mentor connection · ${req.topic}`,
          })
          .returning({ id: schema.squadMembers.id });
        squadMemberId = insertedSquad[0]?.id ?? null;
      }
      await db
        .update(schema.mentorRequests)
        .set({ status: args.decision, decidedAt: new Date(), squadMemberId })
        .where(eq(schema.mentorRequests.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  endMentorship: defineAction({
    description:
      "Ends an accepted mentorship from either side: the request closes and the mentorship's Check-In squad connection is removed.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.mentorRequests)
        .where(eq(schema.mentorRequests.id, args.id));
      const req = rows[0];
      if (!req) throw new Error("That mentorship could not be found.");
      if (req.squadMemberId !== null) {
        await db
          .delete(schema.squadMembers)
          .where(eq(schema.squadMembers.id, req.squadMemberId));
      }
      await db
        .update(schema.mentorRequests)
        .set({ status: "ended", squadMemberId: null, decidedAt: new Date() })
        .where(eq(schema.mentorRequests.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  reportMentorRequest: defineAction({
    description:
      "Reports a mentorship request to moderation: it is flagged in the review queue for a moderator decision without changing its status.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.mentorRequests)
        .set({ reported: 1 })
        .where(eq(schema.mentorRequests.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  resolveMentorRequestReport: defineAction({
    description:
      "Moderator decision on a reported mentorship request: clear the report, or remove the request — ending the mentorship and its Check-In connection if one was active.",
    request: z.object({
      id: z.number().int().positive(),
      decision: z.enum(["cleared", "removed"]),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args): Promise<{ ok: true }> {
      const db = ctx.db<typeof schema>();
      if (args.decision === "cleared") {
        await db
          .update(schema.mentorRequests)
          .set({ reported: 0 })
          .where(eq(schema.mentorRequests.id, args.id));
      } else {
        const rows = await db
          .select()
          .from(schema.mentorRequests)
          .where(eq(schema.mentorRequests.id, args.id));
        const req = rows[0];
        if (req?.squadMemberId !== null && req?.squadMemberId !== undefined) {
          await db
            .delete(schema.squadMembers)
            .where(eq(schema.squadMembers.id, req.squadMemberId));
        }
        await db
          .update(schema.mentorRequests)
          .set({
            status: req?.status === "accepted" ? "ended" : "declined",
            squadMemberId: null,
            reported: 0,
            decidedAt: new Date(),
          })
          .where(eq(schema.mentorRequests.id, args.id));
      }
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  listReportedMentorRequests: defineAction({
    description:
      "Lists mentorship requests currently flagged by a report, for the review queue's moderation decision.",
    request: z.object({}),
    response: z.object({ requests: z.array(mentorRequestShape) }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.mentorRequests)
        .orderBy(desc(schema.mentorRequests.id))
        .limit(300);
      const mentorRows = await db.select().from(schema.mentors);
      const byId = new Map(mentorRows.map((m) => [m.id, m]));
      return {
        requests: rows
          .filter((r) => r.reported === 1)
          .map((r) => mapMentorRequest(r, byId.get(r.mentorId))),
      };
    },
  }),
  /* ------------------------- My Service Timeline ------------------------ */
  // The member's private career keepsake: their own entries only, never
  // public, never reviewed, never shown to anyone else. Dates arrive at
  // one of three precisions — "YYYY-MM-DD", "YYYY-MM", or "YYYY" — and
  // are range-checked here before storage.

  listTimelineEntries: defineAction({
    description:
      "Lists the member's own private service timeline entries, oldest first, for the My Service Timeline section and its print sheet.",
    request: z.object({}),
    response: z.object({ entries: z.array(timelineEntryShape) }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.serviceTimelineEntries).limit(500);
      return { entries: rows.map(mapTimelineEntry).sort(compareTimelineEntries) };
    },
  }),

  addTimelineEntry: defineAction({
    description: "Adds one entry to the member's private service timeline.",
    request: timelineEntryInput,
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const result = await db
        .insert(schema.serviceTimelineEntries)
        .values({
          entryDate: args.entryDate,
          entryType: args.entryType,
          title: args.title,
          unit: args.unit,
          place: args.place,
          note: args.note,
        })
        .returning({ id: schema.serviceTimelineEntries.id });
      const inserted = result[0];
      if (!inserted) throw new Error("addTimelineEntry: insert returned no rows");
      ctx.invalidateQueries();
      return { id: inserted.id };
    },
  }),

  updateTimelineEntry: defineAction({
    description: "Edits one of the member's own service timeline entries.",
    request: timelineEntryInput.extend({ id: z.number().int().positive() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.serviceTimelineEntries)
        .set({
          entryDate: args.entryDate,
          entryType: args.entryType,
          title: args.title,
          unit: args.unit,
          place: args.place,
          note: args.note,
        })
        .where(eq(schema.serviceTimelineEntries.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),

  deleteTimelineEntry: defineAction({
    description: "Deletes one of the member's own service timeline entries.",
    request: z.object({ id: z.number().int().positive() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .delete(schema.serviceTimelineEntries)
        .where(eq(schema.serviceTimelineEntries.id, args.id));
      ctx.invalidateQueries();
      return { ok: true };
    },
  }),
} satisfies ActionsModule;
