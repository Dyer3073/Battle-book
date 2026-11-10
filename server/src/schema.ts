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
  // My Installation: the member's installation, stored as the
  // MilitaryINSTALLATIONS directory's own slug + display name, taken
  // from the directory's own installation list (slugs are data, not
  // formulas — "fort-hood" not Cavazos, "buckley-afb" for Buckley SFB).
  // "" when unset. For a spouse profile this is the family's
  // installation. Drives only routing: the My Installation page builds
  // the installation's official links from the slug; no installation
  // facts (hours, phones, buildings) are ever stored.
  installationSlug: text("installation_slug").notNull().default(""),
  installationName: text("installation_name").notNull().default(""),
  // Branch theming preference (Branch & Job Theming): "branch" themes
  // the app's accent palette from this profile's branch; "olive" is the
  // member's revert to the default olive theme. Per profile, persists,
  // and never changes body text, background, or layout — accents only.
  // Existing rows default to "branch".
  themeMode: text("theme_mode", { enum: ["branch", "olive"] }).notNull().default("branch"),
  // Member track: "member" (serving / former, the simulated-ID.me path),
  // "future" (the Joining front door — "I'm thinking about joining"), or
  // "spouse" (the Spouse door — "I'm a military spouse/partner").
  // Future and spouse profiles never went through the ID.me step; future
  // profiles are badged FUTURE MEMBER — NOT VERIFIED and spouse profiles
  // MILITARY SPOUSE everywhere, both self-reported. Existing rows
  // default to "member".
  track: text("track", { enum: ["member", "future", "spouse"] }).notNull().default("member"),
  // Spouse-track onboarding only: the spouse's family status — "Spouse
  // of a serving member", "Spouse of a veteran", "Dual-military
  // spouse", or "Surviving spouse of a deceased service member or
  // veteran". "" for member and future profiles. For a spouse profile,
  // `branch` holds their service member's branch.
  familyStatus: text("family_status").notNull().default(""),
  // Future-member onboarding only: which path they are considering —
  // "Enlisted", "Officer", or "Not sure". "" for member profiles.
  pathInterest: text("path_interest").notNull().default(""),
  // Future-member onboarding only: optional target date (YYYY-MM-DD,
  // "" when unset) — a ship date or class date they are aiming at.
  // Carried onto the profile when a future member converts to serving.
  targetDate: text("target_date").notNull().default(""),
  // Optional member-entered dates (YYYY-MM-DD, "" when unset) that drive
  // the Deadlines & Countdowns view. Stored only in this profile row;
  // never sent anywhere.
  easDate: text("eas_date").notNull().default(""),
  itfDate: text("itf_date").notNull().default(""),
  idCardExpiry: text("id_card_expiry").notNull().default(""),
  // Household scope (Red-Team Round 2, F-1): the branch of a partner
  // who also serves, when the member sets one (one of the six
  // canonical branches, "" when none). Drives only the SHOWING
  // household scope, search badging, and the For You partner door —
  // never a lock, never what the server serves.
  partnerBranch: text("partner_branch").notNull().default(""),
  // Spouse track only (F-1): a serving spouse's OWN branch, when they
  // say "I also serve" on the spouse profile. "" means the spouse
  // does not serve and H-3 applies unchanged (the spouse profile's
  // branch IS the member's branch). When set, it is the spouse's own
  // branch for scope, badging, and ordering — their own branch is
  // never "Other branch" on their own phone.
  spouseOwnBranch: text("spouse_own_branch").notNull().default(""),
  // Family Care Plan clocks (F-9): member-entered dates only.
  // fcpReviewDate is the review date the member (or their command)
  // set; fcpLastValidated is when the plan was last validated, from
  // which the app may SUGGEST a review date only for the branches
  // whose published annual clock was verified in gap-fills-2
  // (Navy / Marine Corps / Air Force). partnerReturnDate is a free
  // member-entered date with no rules attached.
  fcpReviewDate: text("fcp_review_date").notNull().default(""),
  fcpLastValidated: text("fcp_last_validated").notNull().default(""),
  partnerReturnDate: text("partner_return_date").notNull().default(""),
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
// calendar date, YYYY-MM-DD. profileId is the profile that posted the
// check-in — added with the Alerts center so a squadmate's check-in can
// be attributed to them by name. It is null ONLY on rows written before
// the column existed; the migration backfilled those to the first
// profile, so null should not occur in practice.
export const checkins = sqliteTable("checkins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id"),
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
// One row per saved card PER PROFILE, keyed by (profile, section,
// itemKey) — the section is the App view key and itemKey is the card's
// stable key inside that section (entry name, MOS entry id, state
// name, technique name…). Title, summary, and source are the Binder
// record's own display fields, written at save time from the card's
// live data; WHICH cards a member has saved is resolved live at read
// time (profile-scoped, migration 0032 — before it, this table was a
// legacy global list with no owner column, and the printable export
// could not be owner-only; legacy rows were assigned to the first
// profile, the migration-0013 precedent). The printable Binder export
// reads through getBinder like every other Binder surface — it never
// queries this table directly and carries no content copy of its own.
export const binderItems = sqliteTable("binder_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id"),
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
  // "squad" is a normal invite-code squad. "connection" is a private
  // two-person squad created when a Find Your People request is
  // accepted: it never carries an invite code or invite controls, and
  // it is removed only by ending the connection (or a block) in Find
  // Your People — never by Leave Squad.
  kind: text("kind", { enum: ["squad", "connection"] }).notNull().default("squad"),
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

// VA Claim Tracker entries (private, per profile). A claim belongs to
// exactly one profile and is visible ONLY to that profile — there is no
// review queue, no sharing, and no other action ever reads another
// profile's claims. label is the member's own words for what the claim
// is for. stage is where the member says the claim sits in the
// lifecycle the Claims section publishes. Dates are member-entered
// full dates ("YYYY-MM-DD", "" when unset). evidenceJson is a JSON
// array of the evidence-category keys the member has checked off, from
// the Claims section's own evidence categories. The tracker is an
// organizer only: nothing here is VA's status, and no rating, outcome,
// or money figure is ever stored or computed from a claim.
export const vaClaims = sqliteTable("va_claims", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  label: text("label").notNull(),
  claimType: text("claim_type", {
    enum: ["new", "increase", "supplemental", "bdd"],
  }).notNull(),
  stage: text("stage", {
    enum: [
      "intent",
      "gathering",
      "filed",
      "exam_scheduled",
      "exam_done",
      "waiting",
      "decision",
      "appealing",
    ],
  }).notNull(),
  itfDate: text("itf_date").notNull().default(""),
  filedDate: text("filed_date").notNull().default(""),
  examDate: text("exam_date").notNull().default(""),
  evidenceJson: text("evidence_json").notNull().default("[]"),
  notes: text("notes").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
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
// Member feedback (Send Feedback). Every submission is tied to the
// profile that sent it: profileId is the live link, and displayName /
// rank / branch / mosCode are snapshotted from that profile at submit
// time ("name, branch, job as on the profile") so the inbox reads
// correctly even if the profile is edited later. The inbox lists every
// submission — in the prototype it stays visible to every member so the
// owner can read feedback in the same copy testers use; the UI labels
// it owner-only in production. Only the submitter can delete a row.
export const feedback = sqliteTable("feedback", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  displayName: text("display_name").notNull().default(""),
  rank: text("rank").notNull().default(""),
  branch: text("branch").notNull().default(""),
  mosCode: text("mos_code").notNull().default(""),
  type: text("type", {
    enum: ["working", "broken", "missing", "correction", "flag"],
  }).notNull(),
  // Optional section the feedback is about (an app section name), ""
  // when the member didn't pick one.
  section: text("section").notNull().default(""),
  // Entry flags ONLY (type "flag", added with the Flag This Entry
  // build): the flagged reference entry's identifier,
  // "<binder-section>::<item key>" exactly as the card's CardTools
  // footer names it. "" on every ordinary feedback row. A flag is a
  // feedback row of the new type — the existing Feedback Inbox /
  // review-queue plumbing carries it; there is no parallel flag
  // store. One flag per (profile, entryId): the flag actions upsert,
  // so a second flag on the same entry edits the member's note
  // instead of duplicating, and withdrawing deletes the owner's row.
  entryId: text("entry_id").notNull().default(""),
  body: text("body").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Alerts read state: one row per (profile, alert) the member has marked
// read. Alerts themselves are computed live from the member's own app
// data (check-ins, profile dates, mentor requests, review queues) and
// are never stored; alertKey is the computed alert's stable key, which
// embeds the underlying record/date it was computed from, so a new
// occurrence of the same kind of alert arrives unread again.
export const alertReads = sqliteTable("alert_reads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  alertKey: text("alert_key").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Find Your People listings (opt-in peer-connection directory). A
// listing belongs to exactly one profile (profileId) and snapshots the
// profile fields the card shows (display name, branch, job, component,
// service status, home state) at submit time, so a listing reads as
// the member wrote it even if the profile is edited later. gender and
// connectWith are listing-only fields: gender is required to list,
// connectWith is shown on the card AND enforced server-side on every
// connection request, in both directions. city is the member's own
// optional free text — shown only on their listing, clearable at any
// time. Listings publish only after review (reviewStatus PENDING →
// approved), exactly like mentor listings; a report sends a published
// listing back into the queue as pending with reported = 1.
export const peopleListings = sqliteTable("people_listings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  displayName: text("display_name").notNull().default(""),
  branch: text("branch").notNull().default(""),
  jobCode: text("job_code").notNull().default(""),
  jobTitle: text("job_title").notNull().default(""),
  component: text("component").notNull().default(""),
  serviceStatus: text("service_status").notNull().default(""),
  state: text("state").notNull().default(""),
  city: text("city").notNull().default(""),
  gender: text("gender", { enum: ["male", "female"] }).notNull(),
  connectWith: text("connect_with", { enum: ["men", "women", "any"] }).notNull(),
  upForJson: text("up_for_json").notNull().default("[]"),
  about: text("about").notNull().default(""),
  availability: text("availability", { enum: ["open", "paused"] })
    .notNull()
    .default("open"),
  reviewStatus: text("review_status", {
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

// Find Your People connection requests. Both sides are real profiles:
// requesterProfileId sent it, targetProfileId owns the listing it was
// sent to. On accept, squadId points at the private two-person
// connection squad created in the squads table; ending the connection
// (or a block, or a moderator removal) deletes exactly that squad and
// its two seats. A report flags the request for the review queue
// without changing its status.
export const peopleRequests = sqliteTable("people_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  listingId: integer("listing_id").notNull(),
  requesterProfileId: integer("requester_profile_id").notNull(),
  targetProfileId: integer("target_profile_id").notNull(),
  note: text("note").notNull().default(""),
  status: text("status", {
    enum: ["pending", "accepted", "declined", "ended"],
  })
    .notNull()
    .default("pending"),
  squadId: integer("squad_id"),
  reported: integer("reported").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  decidedAt: integer("decided_at", { mode: "timestamp_ms" }),
});

// Find Your People blocks. One row per block, blocker → blocked. The
// pair is hidden from each other across the directory (both
// directions are checked on every browse and request) and no future
// request can be sent between them while a block stands in either
// direction. Blocking also declines any pending request between the
// pair and ends any active connection between them.
export const peopleBlocks = sqliteTable("people_blocks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  blockerProfileId: integer("blocker_profile_id").notNull(),
  blockedProfileId: integer("blocked_profile_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Spouse Connect listings (the spouses-only mirror of Find Your
// People). A listing belongs to exactly one SPOUSE-track profile and
// snapshots the profile fields the card shows — display name, their
// service member's branch, family status, home state — at submit time.
// gender and connectWith are listing-only fields, shown on the card AND
// enforced server-side on every connection request, in both
// directions. lifeStagesJson / upForJson are JSON arrays of the
// section's fixed option lists. city is the spouse's own optional free
// text — shown only on their listing, clearable at any time. Listings
// publish only after review, exactly like Find Your People.
export const spouseListings = sqliteTable("spouse_listings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  displayName: text("display_name").notNull().default(""),
  branch: text("branch").notNull().default(""),
  familyStatus: text("family_status").notNull().default(""),
  state: text("state").notNull().default(""),
  city: text("city").notNull().default(""),
  gender: text("gender", { enum: ["male", "female"] }).notNull(),
  connectWith: text("connect_with", { enum: ["men", "women", "any"] }).notNull(),
  lifeStagesJson: text("life_stages_json").notNull().default("[]"),
  upForJson: text("up_for_json").notNull().default("[]"),
  about: text("about").notNull(),
  availability: text("availability", { enum: ["open", "paused"] })
    .notNull()
    .default("open"),
  reviewStatus: text("review_status", {
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

// Spouse Connect connection requests. Both sides are spouse-track
// profiles: requesterProfileId sent it, targetProfileId owns the
// listing it was sent to. On accept, squadId points at the private
// two-person connection squad created in the squads table (same engine
// as Find Your People); ending the connection (or a block, or a
// moderator removal) deletes exactly that squad and its two seats.
export const spouseRequests = sqliteTable("spouse_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  listingId: integer("listing_id").notNull(),
  requesterProfileId: integer("requester_profile_id").notNull(),
  targetProfileId: integer("target_profile_id").notNull(),
  note: text("note").notNull().default(""),
  status: text("status", {
    enum: ["pending", "accepted", "declined", "ended"],
  })
    .notNull()
    .default("pending"),
  squadId: integer("squad_id"),
  reported: integer("reported").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  decidedAt: integer("decided_at", { mode: "timestamp_ms" }),
});

// Spouse Connect blocks. One row per block, blocker → blocked, with
// the same semantics as Find Your People blocks: the pair is hidden
// from each other across the directory in both directions, no future
// request can be sent between them while a block stands, and blocking
// declines any pending request and ends any active connection.
export const spouseBlocks = sqliteTable("spouse_blocks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  blockerProfileId: integer("blocker_profile_id").notNull(),
  blockedProfileId: integer("blocked_profile_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Battle Buddy conversation history (the AI helper chat). One row per
// message, per profile: history is private to the profile that chatted
// and is never shared, reviewed, or shown to another profile. role is
// "user" (what the member typed) or "assistant" (Battle Buddy's reply).
// sourcesJson is a JSON array of the app sections the reply grounded on
// ({section, view, title, anchor, mosId}) so the reply's deep links
// render exactly like Global Search results. crisis is 1 when the
// server-side crisis screen fired on the user message the reply
// answers — the reply body itself leads with the crisis resources.
export const buddyMessages = sqliteTable("buddy_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  role: text("role", { enum: ["user", "assistant"] }).notNull(),
  body: text("body").notNull(),
  sourcesJson: text("sources_json").notNull().default("[]"),
  crisis: integer("crisis").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Field Tools + Fieldcraft cards state (one row per profile). The
// tools themselves are client-side and store nothing; only the three
// things the member explicitly sets or fills live here: their pace
// count (paces per 100 m), their 9-line MEDEVAC chart draft, and their
// saved range / kill sketch cards (JSON snapshots owned by the client
// module that defines their shape). Static tool content (phonetic
// alphabet, prowords) ships in the client bundle, never in tables.
export const fieldKit = sqliteTable("field_kit", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  pacePer100: integer("pace_per_100"),
  medevacJson: text("medevac_json").notNull().default(""),
  cardsJson: text("cards_json").notNull().default(""),
  // Load calculator (body weight + carried items), saved watchbills,
  // and the hydration log (goal + per-day totals) — each a JSON
  // snapshot owned by the client module that defines its shape.
  loadJson: text("load_json").notNull().default(""),
  watchbillsJson: text("watchbills_json").notNull().default(""),
  hydrationJson: text("hydration_json").notNull().default(""),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Field Notes: the member's own notebook inside Field Tools. A note
// belongs to exactly one profile and is visible only to that profile —
// no sharing, no review queue, no other action reads another profile's
// notes.
export const fieldNotes = sqliteTable("field_notes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  title: text("title").notNull().default(""),
  body: text("body").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// My Emergency Card (private, per profile). Exactly one row per
// profile, created the first time the owner saves. Every field is
// self-entered by the owner and optional; contactsJson is a JSON array
// of up to three {name, relationship, phone} objects the client module
// owns the shape of. The card is owner-only BY CONSTRUCTION: the only
// actions that touch this table resolve the signed-in profile
// server-side and read/write that profile's row — no action accepts a
// profile id, so no other profile, squad member, or listing can ever
// read or edit someone else's card. bloodType is self-reported and is
// labeled as such wherever it renders.
export const emergencyCards = sqliteTable("emergency_cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  contactsJson: text("contacts_json").notNull().default("[]"),
  unitCommand: text("unit_command").notNull().default(""),
  bloodType: text("blood_type").notNull().default(""),
  allergies: text("allergies").notNull().default(""),
  medications: text("medications").notNull().default(""),
  note: text("note").notNull().default(""),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Kill Card (private, per profile). Exactly one row per profile,
// created the first time the owner saves. The kill card is a personal
// data card (Christian's definition, Nov 9, 2026): name and rank come
// from the profile itself and are never stored here; this row holds
// only what the member enters on the card — zap number, blood type,
// allergies, and the serialized gear list (gearJson, a JSON array of
// {item, serial} the client module owns the shape of). Owner-only BY
// CONSTRUCTION, exactly like My Emergency Card: the only actions that
// touch this table resolve the signed-in profile server-side and
// read/write that profile's row — no action accepts a profile id.
export const killCards = sqliteTable("kill_cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  zapNumber: text("zap_number").notNull().default(""),
  bloodType: text("blood_type").notNull().default(""),
  allergies: text("allergies").notNull().default(""),
  gearJson: text("gear_json").notNull().default("[]"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile checklist state (the Reenlistment & IRR "Before You
// Sign" checklist, following the Family Care Plan checklist pattern
// but persisted). One row per (profile, checklist): completedJson is
// a JSON array of the item keys the profile has checked off. The
// checklist definitions themselves are static client data; only the
// member's own check marks live here, and only the owner's actions
// ever read or write their row.
export const profileChecklists = sqliteTable("profile_checklists", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  checklistId: text("checklist_id").notNull(),
  completedJson: text("completed_json").notNull().default("[]"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile section scope preferences (the Personalization build,
// ux-reorg.md Part A). One row per (profile, section): scope is the
// member's stored SHOWING choice for that section — "mine" (My
// branch), "all" (All branches), or "mos" (My MOS, only in the
// sections with true MOS-level data). It is a VIEW preference only:
// it changes rendering, never what the server serves, never search,
// never a lock. Same trust model as profile_checklists: the owning
// profile is resolved server-side and no action accepts a profile id.
export const sectionScopes = sqliteTable("section_scopes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  sectionKey: text("section_key").notNull(),
  scope: text("scope").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile calculator inputs (the Calculators area: Retirement,
// VA Combined Ratings, PCS Entitlements, Debt Payoff). One row per
// (profile, calculator): payloadJson holds ONLY that profile's own
// entered inputs for that calculator. Same trust model as the VA
// Claim Tracker and Nutrition: the owning profile is resolved
// server-side, no action accepts a profile id, and calculator inputs
// never render on any squad/buddy/sharing surface. The formulas and
// tables themselves are static client data (calculators.ts).
export const calculatorStates = sqliteTable("calculator_states", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  calculatorId: text("calculator_id").notNull(),
  payloadJson: text("payload_json").notNull().default("{}"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile Practice Trainer stats (Rank Insignia / Knots / Signals
// trainers). One row per (profile, trainer, mode): the profile's own
// streaks and bests for that trainer in that mode. Same trust model as
// calculator_states: the owning profile is resolved server-side, no
// action accepts a profile id, and trainer stats never render on any
// squad/buddy/sharing surface. The drilled content itself (rank charts,
// knots, signals) is static client data — only the member's own drill
// results live here. score/total are SESSION counts of distinct items
// answered correctly on the first attempt out of the distinct items in
// that session; bestScore/bestTotal is the best such session by ratio
// (ties keep the higher raw score). currentStreak is the consecutive-
// correct run the profile ended its most recent session on (0 when the
// last answer was wrong); bestStreak is the longest run ever recorded
// for that trainer + mode.
export const trainerStates = sqliteTable("trainer_states", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  trainerId: text("trainer_id").notNull(),
  mode: text("mode").notNull(),
  currentStreak: integer("current_streak").notNull().default(0),
  bestStreak: integer("best_streak").notNull().default(0),
  lastScore: integer("last_score").notNull().default(0),
  lastTotal: integer("last_total").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0),
  bestTotal: integer("best_total").notNull().default(0),
  sessions: integer("sessions").notNull().default(0),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

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

// Nutrition (Fitness → Nutrition): the member's private tracker state.
// Same trust model as the VA Claim Tracker: every row carries the
// owning profile's id, resolved server-side from the signed-in
// profile; no action accepts a profile id from the client, and
// nutrition data never renders on any squad/buddy/sharing surface.
// The food database itself is static reference data in the client
// bundle (USDA FoodData Central subset) — only the member's own
// settings, log entries, custom foods, and weight entries live here.
export const nutritionSettings = sqliteTable("nutrition_settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  // JSON: { sex, age, heightCm, weightKg, activity, goal,
  // rateLbPerWeek, vegetarian, allergens[], dislikes[],
  // mealsPerDay, snacks }
  payloadJson: text("payload_json").notNull().default("{}"),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const nutritionLogEntries = sqliteTable("nutrition_log_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  date: text("date").notNull(), // YYYY-MM-DD (member's local day)
  meal: text("meal").notNull().default("snacks"),
  name: text("name").notNull(),
  foodId: text("food_id").notNull().default(""),
  servings: real("servings").notNull().default(1),
  kcal: real("kcal").notNull().default(0),
  protein: real("protein").notNull().default(0),
  carbs: real("carbs").notNull().default(0),
  fat: real("fat").notNull().default(0),
  fiber: real("fiber").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const nutritionCustomFoods = sqliteTable("nutrition_custom_foods", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  name: text("name").notNull(),
  serving: text("serving").notNull().default("1 serving"),
  kcal: real("kcal").notNull().default(0),
  protein: real("protein").notNull().default(0),
  carbs: real("carbs").notNull().default(0),
  fat: real("fat").notNull().default(0),
  fiber: real("fiber").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const nutritionWeights = sqliteTable("nutrition_weights", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  date: text("date").notNull(), // YYYY-MM-DD
  weightKg: real("weight_kg").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile What Changed seen-state (the What Changed build). One
// row per profile: lastSeenAt is the changelog timestamp (the
// client module's entry `at`, ms) the profile has seen through, and
// the row's EXISTENCE is the has-seen signal — a profile with no row
// has never opened What Changed and gets no badge (no wall of fake
// newness on a first visit). Same trust model as section_scopes: the
// owning profile is resolved server-side and no action accepts a
// profile id; there is no read path for another profile's row.
export const changelogSeen = sqliteTable("changelog_seen", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  lastSeenAt: integer("last_seen_at").notNull().default(0),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

// Per-profile Home pins (Pin to Home, Nov 10, 2026): one row per
// pinned card — the same (section, itemKey, title) identity a card's
// CardTools footer already carries for the Binder, but a SEPARATE
// store: a pin is a Home shortcut, not a Binder save. Same trust
// model as binder_items / section_scopes: the owning profile is
// resolved server-side, no action accepts a profile id, and there
// is no read path for another profile's pins anywhere. Rows render
// only on the owning profile's Home, filtered to the views that
// profile's shell can actually open.
export const homePins = sqliteTable("home_pins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  profileId: integer("profile_id").notNull(),
  section: text("section").notNull(),
  itemKey: text("item_key").notNull(),
  title: text("title").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});
