// Drizzle schema for the Battle Book prototype.
//
// Reference content (the MOS library entries and fieldcraft guides) is
// static, editorial data shipped in the client bundle — it is not user
// data and does not belong in tables. Everything below is state the
// member creates or the news refresh writes.

import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Single-member profile created by onboarding. Identity is a simulated
// demo login and the MOS is self-reported; the labels live in the row so
// the UI can never present them as verified.
export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  displayName: text("display_name").notNull().default(""),
  branch: text("branch").notNull().default(""),
  component: text("component").notNull().default(""),
  status: text("status").notNull().default(""),
  mosCode: text("mos_code").notNull().default(""),
  rank: text("rank").notNull().default(""),
  goals: text("goals").notNull().default(""),
  // Optional member-entered home state (full state name as listed in the
  // State Benefits Finder, "" when unset). Drives only display wiring:
  // the finder's HOME map marker, its "Your state" shortcut, and the
  // Home state card link. Never inferred from branch, job, or location.
  homeState: text("home_state").notNull().default(""),
  // Optional member-entered dates (YYYY-MM-DD, "" when unset) that drive
  // the Deadlines & Countdowns view. Stored only in this profile row;
  // never sent anywhere.
  easDate: text("eas_date").notNull().default(""),
  itfDate: text("itf_date").notNull().default(""),
  idCardExpiry: text("id_card_expiry").notNull().default(""),
  onboarded: integer("onboarded").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Member contributions. Nothing is public until a reviewer approves it
// from the Review Queue.
export const contributions = sqliteTable("contributions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  targetType: text("target_type", { enum: ["mos", "guide"] }).notNull(),
  targetId: text("target_id").notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  kind: text("kind", { enum: ["OFFICIAL", "FIELD_NOTE"] }).notNull(),
  sourceUrl: text("source_url").notNull().default(""),
  status: text("status", { enum: ["pending", "approved", "rejected"] })
    .notNull()
    .default("pending"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  reviewedAt: integer("reviewed_at", { mode: "timestamp_ms" }),
});

// News stories from the verified source list only. Seeded rows are real
// published articles collected at build time; refreshed rows come from
// ctx.tool.web_search filtered to the same allow-list.
export const newsStories = sqliteTable("news_stories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  headline: text("headline").notNull(),
  summary: text("summary").notNull(),
  sourceName: text("source_name").notNull(),
  sourceType: text("source_type", { enum: ["OFFICIAL", "INDEPENDENT"] }).notNull(),
  branch: text("branch").notNull().default("All"),
  category: text("category").notNull().default("General"),
  url: text("url").notNull(),
  publishedLabel: text("published_label").notNull().default(""),
  affectsYou: text("affects_you").notNull().default(""),
  fetchedAt: integer("fetched_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const bookmarks = sqliteTable("bookmarks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  storyId: integer("story_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Daily check-ins (Battle Buddy model). dayKey is the member's local
// calendar date, YYYY-MM-DD.
export const checkins = sqliteTable("checkins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  dayKey: text("day_key").notNull(),
  status: text("status", {
    enum: ["good", "rough", "talk", "dark"],
  }).notNull(),
  returnDate: text("return_date").notNull().default(""),
  note: text("note").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// The member's own squad — names they add themselves. No strangers, no
// discovery, no location.
export const squadMembers = sqliteTable("squad_members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull().default("Buddy"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Generated fitness plans (both paths). inputs/plan are JSON text.
export const fitnessPlans = sqliteTable("fitness_plans", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  path: text("path", { enum: ["test", "dream"] }).notNull(),
  branch: text("branch").notNull().default(""),
  testName: text("test_name").notNull().default(""),
  inputsJson: text("inputs_json").notNull().default("{}"),
  planJson: text("plan_json").notNull().default("[]"),
  caloriesLow: integer("calories_low"),
  caloriesHigh: integer("calories_high"),
  proteinLow: integer("protein_low"),
  proteinHigh: integer("protein_high"),
  sanityFlag: text("sanity_flag").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const workoutLogs = sqliteTable("workout_logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  planId: integer("plan_id"),
  dayLabel: text("day_label").notNull().default(""),
  title: text("title").notNull(),
  detail: text("detail").notNull().default(""),
  done: integer("done").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Guided Paths progress: one row per path the member has touched.
// completedJson is a JSON array of completed step keys for that path;
// the path/step definitions themselves are static client data.
export const pathProgress = sqliteTable("path_progress", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  pathId: text("path_id").notNull(),
  completedJson: text("completed_json").notNull().default("[]"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// My Binder: reference cards the member starred in any content section.
// One row per saved card, keyed by (section, itemKey) — the section is the
// App view key and itemKey is the card's stable key inside that section
// (entry name, MOS entry id, state name, technique name…). Title, summary,
// and source are snapshotted at save time so the Binder and its print
// sheet render without re-reading the static content modules.
export const binderItems = sqliteTable("binder_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  section: text("section").notNull(),
  itemKey: text("item_key").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull().default(""),
  source: text("source").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Member war stories (War Stories section, Part 4 of the pack spec).
// Same trust model as contributions: every submission lands PENDING and
// publishes only after review (PENDING → APPROVED / RETURNED with a
// reason / REJECTED). A report on a published story sends it back into
// the queue as PENDING with reported = 1. photoBlobKey is RESERVED for
// the later photo phase — no upload is built in v1.
export const warStories = sqliteTable("war_stories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  branch: text("branch").notNull(),
  era: text("era").notNull(),
  eraDetail: text("era_detail").notNull().default(""),
  category: text("category", {
    enum: [
      "Combat",
      "Deployment",
      "In the Field",
      "Mentorship",
      "Humor",
      "Loss & Remembrance",
      "Home Front",
    ],
  }).notNull(),
  displayChoice: text("display_choice", {
    enum: ["full", "rank_last", "callsign", "anonymous"],
  }).notNull(),
  // The byline text the member supplied for their chosen display option;
  // never rendered when displayChoice is "anonymous".
  displayName: text("display_name").notNull().default(""),
  body: text("body").notNull(),
  status: text("status", {
    enum: ["pending", "approved", "returned", "rejected"],
  })
    .notNull()
    .default("pending"),
  reviewNote: text("review_note").notNull().default(""),
  reported: integer("reported").notNull().default(0),
  photoBlobKey: text("photo_blob_key"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  reviewedAt: integer("reviewed_at", { mode: "timestamp_ms" }),
});

export const weightLogs = sqliteTable("weight_logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  weightLb: real("weight_lb").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Wall of Honor tributes (member-added memorials). Same trust model as
// war stories: every submission lands PENDING and publishes only after
// review (PENDING → APPROVED / RETURNED with a reason / REJECTED). A
// report on a published tribute sends it back into the queue as PENDING
// with reported = 1. Dates are member-entered and may be a full date
// ("YYYY-MM-DD"), a bare year ("YYYY"), or "" when not recorded — the
// "Today we remember" surface matches month/day from full dates only.
export const wallOfHonor = sqliteTable("wall_of_honor", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  rank: text("rank").notNull().default(""),
  branch: text("branch").notNull(),
  unit: text("unit").notNull().default(""),
  era: text("era").notNull(),
  birthDate: text("birth_date").notNull().default(""),
  lossDate: text("loss_date").notNull().default(""),
  tributeText: text("tribute_text").notNull(),
  // The member who added the tribute; shown on the card only when
  // showAdder is 1.
  addedBy: text("added_by").notNull().default(""),
  relationship: text("relationship").notNull().default(""),
  showAdder: integer("show_adder").notNull().default(0),
  status: text("status", {
    enum: ["pending", "approved", "returned", "rejected"],
  })
    .notNull()
    .default("pending"),
  reviewNote: text("review_note").notNull().default(""),
  reported: integer("reported").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  reviewedAt: integer("reviewed_at", { mode: "timestamp_ms" }),
});

// Remembrance candles: one row per candle the member has lit. The app
// is single-profile, so a row's presence means this member lit one for
// that tribute; the count of rows is the remembrance count.
export const tributeCandles = sqliteTable("tribute_candles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tributeId: integer("tribute_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Mentor listings (Find a Mentor). Same trust model as war stories and
// tributes: members only, every listing lands PENDING and publishes
// only after review (PENDING → APPROVED / RETURNED with a reason /
// REJECTED). A report on a published listing sends it back into the
// queue as PENDING with reported = 1. The job is a snapshot of the
// Library entry the member picked (code + title), so the listing reads
// correctly even if the library text changes later. topicsJson is a
// JSON array of topic labels from the section's fixed topic list.
export const mentors = sqliteTable("mentors", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  branch: text("branch").notNull(),
  jobCode: text("job_code").notNull().default(""),
  jobTitle: text("job_title").notNull().default(""),
  topicsJson: text("topics_json").notNull().default("[]"),
  bio: text("bio").notNull(),
  yearsService: integer("years_service"),
  displayChoice: text("display_choice", {
    enum: ["full", "rank_last", "callsign"],
  }).notNull(),
  // The byline text the member supplied for their chosen display
  // option. Mentors always publish under one of the three named
  // choices — there is no anonymous mentor listing.
  displayName: text("display_name").notNull().default(""),
  availability: text("availability", { enum: ["open", "paused"] })
    .notNull()
    .default("open"),
  status: text("status", {
    enum: ["pending", "approved", "returned", "rejected"],
  })
    .notNull()
    .default("pending"),
  reviewNote: text("review_note").notNull().default(""),
  reported: integer("reported").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  reviewedAt: integer("reviewed_at", { mode: "timestamp_ms" }),
});

// My Service Timeline entries (private, per-profile career keepsake).
// One member's own career milestones — never public, never reviewed,
// never shown to other members, and never part of any official record.
// entryDate is member-entered at one of three precisions, stored as
// "YYYY-MM-DD" (full), "YYYY-MM" (month), or "YYYY" (year only); the
// chronological sort pads partial dates to their first day in the
// client, so a year-only entry sorts at the start of that year.
export const serviceTimelineEntries = sqliteTable("service_timeline_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  entryDate: text("entry_date").notNull(),
  entryType: text("entry_type", {
    enum: [
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
    ],
  }).notNull(),
  title: text("title").notNull(),
  unit: text("unit").notNull().default(""),
  place: text("place").notNull().default(""),
  note: text("note").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Squads (Check-In). A squad is created by a member, who leads it. The
// ONLY way in is claiming a seat with the squad's invite code — nobody
// is ever added by typing a name. inviteCode is generated server-side
// from an unambiguous alphabet (no 0/O, 1/I/L) and stored normalized
// (uppercase, no separators); it is null only between a migration
// backfill and the first read, which generates it. While invitesPaused
// is 1, claims are refused. Auto-created mentorship pairs are NOT
// squads — they stay in squad_members and never get invite codes or
// invite controls.
export const squads = sqliteTable("squads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  inviteCode: text("invite_code"),
  invitesPaused: integer("invites_paused").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// One row per seat in a squad. profileId is the member's own profile —
// a seat exists only because that profile claimed it (or created the
// squad). It is null ONLY for "legacy" rows: names that sat in the old
// add-by-name squad list before invite codes existed, carried over by
// the migration so nobody's existing squad vanished; they hold no
// profile and can never sign in. displayName is the member's profile
// display name, snapshotted at claim time. joinedVia records how the
// seat was taken: "created" (the leader), "invite" (claimed with the
// code — rendered "joined by invite"), or "legacy".
export const squadMemberships = sqliteTable("squad_memberships", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  squadId: integer("squad_id").notNull(),
  profileId: integer("profile_id"),
  displayName: text("display_name").notNull().default(""),
  role: text("role", { enum: ["Leader", "Member"] }).notNull().default("Member"),
  joinedVia: text("joined_via", { enum: ["created", "invite", "legacy"] })
    .notNull()
    .default("invite"),
  joinedAt: integer("joined_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Tiny key/value store for app-level state. One key today:
// "active_profile_id" — which profile the simulated sign-in is acting
// as. Sign-in is simulated in this prototype (no real accounts), so a
// member picks their own profile at the gate; every profile-scoped
// read resolves through it and falls back to the first profile.
export const appState = sqliteTable("app_state", {
  key: text("key").primaryKey(),
  value: text("value").notNull().default(""),
});

// Mentorship requests. A member sends one to an OPEN, published mentor
// (topic + short intro). The mentor accepts or declines; on accept the
// pair connects inside the app's Check-In space — a squad_members row
// is created for the mentorship and its id is stored here so ending
// the mentorship removes exactly that row. Either side can end an
// accepted mentorship (status → ended, squad row removed). A report on
// a request flags it for the review queue (reported = 1) without
// changing its status; a moderator clears the flag or ends/removes the
// request. No contact details ever live in a request — topic and intro
// text only.
export const mentorRequests = sqliteTable("mentor_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  mentorId: integer("mentor_id").notNull(),
  topic: text("topic").notNull(),
  message: text("message").notNull(),
  status: text("status", {
    enum: ["pending", "accepted", "declined", "ended"],
  })
    .notNull()
    .default("pending"),
  squadMemberId: integer("squad_member_id"),
  reported: integer("reported").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  decidedAt: integer("decided_at", { mode: "timestamp_ms" }),
});
