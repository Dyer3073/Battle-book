// Offline mode — core plumbing (no React, no api import: api.ts wraps
// the SDK client with these helpers, and offline.tsx renders the UI).
//
// WHAT OFFLINE MEANS IN THIS STACK (proven limits, stated plainly):
// The space runtime serves the app shell and its hashed assets from
// routes this app does not control, and the client build emits only
// index.html + assets/*. A service worker script could only ever be
// an assets/* file, whose maximum scope is the assets directory — it
// can never control the app page itself — and the build owns and
// wipes dist, so no root-level worker file can be shipped. A TRUE
// service worker is therefore not possible here. What ships instead:
//
//  1. The whole reference library (Library, sections, Field Tools,
//     trainers' pools, emergency deck, Care & Crisis) is bundled into
//     the client JS, so WITHIN a loaded session it needs no network
//     at all. A cold reload offline depends on the browser's own HTTP
//     cache for the shell — the app cannot guarantee it.
//  2. Personal server data is snapshotted to localStorage per profile
//     (below) and re-seeded into the query cache on the next launch,
//     labeled with its sync time — it is a last-synced copy, never
//     presented as live.
//  3. Writes attempted while the browser reports offline are either
//     queued in a per-profile outbox (flushed in order on reconnect,
//     only under the profile that created them) or blocked with a
//     plain message. Nothing pretends to have saved server-side.
//
// QUEUE SAFETY RULE: an action is queued pre-flight only when
// navigator.onLine is false (the request provably never left the
// device). If a request was sent and the response was lost, the
// server may or may not have committed it — so on a mid-flight
// network failure only IDEMPOTENT (pure set/upsert/delete) actions
// are queued for replay; appends and toggles are NOT replayed and
// surface their error instead. Profile isolation: every outbox item
// is stamped with the profile id active when it was created; the
// flush sends an item only while that same profile is active (the
// server resolves the profile server-side from the active profile,
// so flushing under a different profile would write into the wrong
// person's data — held items simply wait).

import { spaceQueryClient } from "@hatch/space-sdk/client";

/** Thrown when a write was queued locally because the device is
 * offline. Callers render the "saved on this device" state. */
export class OfflineQueuedError extends Error {
  readonly action: string;
  constructor(action: string) {
    super("You're offline — saved on this device, will send when you're back.");
    this.name = "OfflineQueuedError";
    this.action = action;
  }
}

/** Thrown when a write needs a connection and cannot be queued. */
export class OfflineBlockedError extends Error {
  readonly action: string;
  constructor(action: string) {
    super("You're offline — that needs a connection, so nothing was sent.");
    this.name = "OfflineBlockedError";
    this.action = action;
  }
}

// ── Connectivity ────────────────────────────────────────────────────
// Two signals: the browser's own online/offline state, and a
// link-down flag raised when an action fetch actually fails at the
// network layer (covers cases where navigator.onLine stays true but
// nothing gets through). Blocking/queueing decisions use ONLY the
// browser state (pre-flight certainty); the banner uses both.

let linkDown = false;
const connectivityListeners = new Set<() => void>();

function emitConnectivity(): void {
  for (const fn of [...connectivityListeners]) fn();
}

export function subscribeConnectivity(fn: () => void): () => void {
  connectivityListeners.add(fn);
  return () => connectivityListeners.delete(fn);
}

export function isBrowserOnline(): boolean {
  return typeof navigator === "undefined" ? true : navigator.onLine !== false;
}

/** What the banner believes: browser online AND no observed failure. */
export function isConnectionUp(): boolean {
  return isBrowserOnline() && !linkDown;
}

export function noteActionSuccess(): void {
  if (linkDown) {
    linkDown = false;
    emitConnectivity();
  }
}

export function noteActionNetworkFailure(): void {
  if (!linkDown) {
    linkDown = true;
    emitConnectivity();
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    linkDown = false;
    emitConnectivity();
  });
  window.addEventListener("offline", () => emitConnectivity());
}

// ── Notices ─────────────────────────────────────────────────────────
// One-line status messages the OfflineBanner shows (queued, blocked,
// flushed). Emitted by the api wrapper and the flush; rendered by
// offline.tsx. Transient — the persistent state lives in the banner's
// offline/outbox lines.

export type OfflineNotice = { kind: "queued" | "blocked" | "sent" | "unsent"; text: string; at: number };
const noticeListeners = new Set<(n: OfflineNotice) => void>();

export function emitOfflineNotice(kind: OfflineNotice["kind"], text: string): void {
  const notice: OfflineNotice = { kind, text, at: Date.now() };
  for (const fn of [...noticeListeners]) fn(notice);
}

export function subscribeOfflineNotices(fn: (n: OfflineNotice) => void): () => void {
  noticeListeners.add(fn);
  return () => noticeListeners.delete(fn);
}

// ── Current profile ─────────────────────────────────────────────────
// The server resolves the active profile server-side; the client's
// only handle on it is the cached ["profile"] query.

export function currentProfileId(): number | null {
  try {
    const data = spaceQueryClient.getQueryData<{ profile: { id: number } | null }>(["profile"]);
    return typeof data?.profile?.id === "number" ? data.profile.id : null;
  } catch {
    return null;
  }
}

// ── Write classification + queue policy ─────────────────────────────

const READ_PREFIX = /^(get|list|preview)/;
export function isReadAction(name: string): boolean {
  return READ_PREFIX.test(name);
}

/** Writes that may be queued when the device is offline (pre-flight).
 * Every entry has set/upsert/append-once semantics that make a single
 * ordered replay correct. Anything not listed BLOCKS offline. */
export const QUEUEABLE_ACTIONS: ReadonlySet<string> = new Set([
  // Binder
  "toggleBinderItem", "removeBinderItem",
  // Home pins (same toggle/remove semantics as the Binder)
  "toggleHomePin", "removeHomePin",
  // Checklists + guided paths
  "setChecklistItem", "setPathStep",
  // Trainers + calculators
  "recordTrainerSession", "saveCalculatorState",
  // Battle Buddy daily check-in (upsert by day)
  "saveCheckin",
  // Feedback + entry flags (flag upserts per entry)
  "submitFeedback", "flagEntry", "withdrawEntryFlag",
  // VA claim tracker
  "addClaim", "updateClaim", "deleteClaim",
  // News bookmarks
  "toggleBookmark",
  // Personal cards + kit (full-payload saves)
  "saveFieldKit", "saveEmergencyCard", "saveKillCard",
  // Section scope choices
  "setSectionScope", "clearSectionScopes",
  // What Changed seen-state (a pure set/upsert of one timestamp)
  "markChangelogSeen",
  // Alerts (read-state)
  "markAlertRead", "markAllAlertsRead",
  // Profile facts (set semantics)
  "saveProfileDates", "setInstallation", "setThemeMode",
  // Fitness + nutrition logs
  "addWorkoutLog", "addWeightLog",
  "saveNutritionSettings", "addNutritionLogEntry", "deleteNutritionLogEntry",
  "addNutritionCustomFood", "deleteNutritionCustomFood", "addNutritionWeight",
  // Service timeline + candles
  "addTimelineEntry", "updateTimelineEntry", "deleteTimelineEntry", "toggleCandle",
]);

/** Subset safe to queue even after a sent request's response was
 * lost: replaying cannot duplicate or flip anything (pure sets,
 * upserts, deletes, full-payload saves). Appends and toggles are
 * deliberately absent. */
export const IDEMPOTENT_ACTIONS: ReadonlySet<string> = new Set([
  "removeBinderItem", "removeHomePin",
  "setChecklistItem", "setPathStep",
  "saveCalculatorState",
  "saveCheckin",
  "flagEntry", "withdrawEntryFlag",
  "updateClaim", "deleteClaim",
  "saveFieldKit", "saveEmergencyCard", "saveKillCard",
  "setSectionScope", "clearSectionScopes",
  "markChangelogSeen",
  "markAlertRead", "markAllAlertsRead",
  "saveProfileDates", "setInstallation", "setThemeMode",
  "saveNutritionSettings", "deleteNutritionLogEntry", "deleteNutritionCustomFood",
  "updateTimelineEntry", "deleteTimelineEntry",
]);

/** Toggles: a second identical queued toggle cancels the first
 * (net effect zero), so the pair is dropped instead of replayed. */
const TOGGLE_ACTIONS: ReadonlySet<string> = new Set(["toggleBinderItem", "toggleHomePin", "toggleBookmark", "toggleCandle"]);

/** Identity for last-wins replacement of queued set-type writes.
 * Returns null for appends (every entry replays, in order). */
function queueIdentity(action: string, args: Record<string, unknown>): string | null {
  const a = args as Record<string, string | number | undefined>;
  switch (action) {
    case "toggleBinderItem":
    case "removeBinderItem":
      return `binder:${a.section}:${a.itemKey}`;
    case "toggleHomePin":
    case "removeHomePin":
      return `homePins:${a.section}:${a.itemKey}`;
    case "toggleBookmark":
      return `bookmark:${a.storyId ?? JSON.stringify(args)}`;
    case "toggleCandle":
      return `candle:${JSON.stringify(args)}`;
    case "setChecklistItem":
      return `checklist:${a.checklistId}:${a.itemKey}`;
    case "setPathStep":
      return `path:${a.pathId}:${a.stepKey}`;
    case "saveCalculatorState":
      return `calc:${a.calculatorId}`;
    case "setSectionScope":
      return `scope:${a.view}`;
    case "saveCheckin":
      return `checkin:${a.dayKey}`;
    case "flagEntry":
    case "withdrawEntryFlag":
      return `flag:${a.entryId}`;
    case "updateClaim":
    case "deleteClaim":
      return `claim:${a.id}`;
    case "markAlertRead":
      return `alert:${a.id}`;
    case "deleteNutritionLogEntry":
      return `nutlog:${a.id}`;
    case "deleteNutritionCustomFood":
      return `nutcustom:${a.id}`;
    case "updateTimelineEntry":
    case "deleteTimelineEntry":
      return `timeline:${a.id}`;
    case "saveFieldKit":
    case "saveEmergencyCard":
    case "saveKillCard":
    case "clearSectionScopes":
    case "markAllAlertsRead":
    case "saveProfileDates":
    case "setInstallation":
    case "setThemeMode":
    case "saveNutritionSettings":
      return `single:${action}`;
    default:
      return null;
  }
}

// ── Outbox (localStorage, per-profile stamped) ──────────────────────

export type OutboxItem = {
  id: string;
  action: string;
  args: Record<string, unknown>;
  /** Profile active when the item was created; null only if the
   * profile query had not resolved yet (flush waits for a match on
   * any stamped item and never sends a stamped item under another
   * profile). */
  profileId: number | null;
  queuedAt: number;
  /** Failed flush attempts (non-network refusals). At 3 the flush
   * drops the item with a visible notice rather than letting one
   * refused item wedge every later item behind it forever. */
  attempts?: number;
};

const OUTBOX_KEY = "bb-outbox-v1";
const outboxListeners = new Set<() => void>();

function emitOutbox(): void {
  for (const fn of [...outboxListeners]) fn();
}

export function subscribeOutbox(fn: () => void): () => void {
  outboxListeners.add(fn);
  return () => outboxListeners.delete(fn);
}

export function listOutbox(): OutboxItem[] {
  try {
    const raw = window.localStorage.getItem(OUTBOX_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as OutboxItem[];
    return Array.isArray(parsed) ? parsed.filter((i) => i && typeof i.action === "string") : [];
  } catch {
    return [];
  }
}

const EMPTY_OUTBOX: OutboxItem[] = [];
let outboxSnapshotCache: OutboxItem[] | null = null;

/** Cached-reference getter for useSyncExternalStore: the same array
 * until the outbox actually changes (saveOutbox invalidates). */
export function getOutboxSnapshot(): OutboxItem[] {
  if (outboxSnapshotCache === null) {
    const items = listOutbox();
    outboxSnapshotCache = items.length === 0 ? EMPTY_OUTBOX : items;
  }
  return outboxSnapshotCache;
}

function saveOutbox(items: OutboxItem[]): void {
  try {
    window.localStorage.setItem(OUTBOX_KEY, JSON.stringify(items));
  } catch {
    /* storage full/blocked — items stay for this session's banner at least */
  }
  outboxSnapshotCache = items.length === 0 ? EMPTY_OUTBOX : items;
  emitOutbox();
}

/** Enqueue one write for the given profile. Applies the toggle-cancel
 * and last-wins rules so the queue stays minimal and always replays
 * to the same end state the member reached offline. */
export function enqueueOfflineAction(action: string, args: unknown, profileId: number | null): void {
  const record = (args ?? {}) as Record<string, unknown>;
  const identity = queueIdentity(action, record);
  let items = listOutbox();
  if (identity !== null) {
    // Compaction looks only at the LAST queued entry for this slot
    // (this profile only). If it's the same action: a toggle cancels
    // out (drop it, add nothing) and a set-type write is superseded
    // (drop it, append the new one in its place). If the last entry
    // for the slot is a DIFFERENT action, nothing is merged — the
    // queued order is the member's intent, and merging across it
    // would change the replay's end state (flag → withdraw → flag
    // again must replay all three: withdrawEntryFlag refuses when no
    // flag exists server-side, so the first flag cannot be dropped).
    let lastIdx = -1;
    for (let idx = 0; idx < items.length; idx++) {
      const i = items[idx]!;
      if (i.profileId === profileId && queueIdentity(i.action, i.args) === identity) lastIdx = idx;
    }
    if (lastIdx >= 0 && items[lastIdx]!.action === action) {
      items = items.filter((_, idx) => idx !== lastIdx);
      if (TOGGLE_ACTIONS.has(action)) {
        saveOutbox(items);
        return;
      }
    }
  }
  items.push({
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
    action,
    args: record,
    profileId,
    queuedAt: Date.now(),
  });
  saveOutbox(items);
}

export function removeOutboxItem(id: string): void {
  saveOutbox(listOutbox().filter((i) => i.id !== id));
}

/** Persist one more failed flush attempt for an item; returns the
 * new attempt count. */
export function recordOutboxFailure(id: string): number {
  const items = listOutbox();
  const item = items.find((i) => i.id === id);
  if (!item) return 0;
  item.attempts = (item.attempts ?? 0) + 1;
  saveOutbox(items);
  return item.attempts;
}

// ── Snapshot of personal server data (last-synced copy) ─────────────
// Whitelisted query-key prefixes whose results are PERSONAL (or the
// shared news feed) and safe to show offline as a labeled last-synced
// copy. Community queues and other members' data are never persisted.

export const SNAPSHOT_KEY_HEADS: ReadonlySet<string> = new Set([
  "profile", "profiles", "binder", "homePins", "pathProgress", "checklist",
  "trainerstats", "calcstate", "myClaims", "checkins", "squads",
  "buddyHistory", "news", "emergencyCard", "killCard", "fieldKit",
  "fieldNotes", "sectionScopes", "changelogSeen", "alerts", "entryflags", "feedback",
  "nutSettings", "nutLog", "nutWeights", "nutCustom",
  "workoutLogs", "weightLogs", "latestPlan", "timelineEntries",
  "myCandles", "contributions",
]);

export function isSnapshotKey(queryKey: readonly unknown[]): boolean {
  return typeof queryKey[0] === "string" && SNAPSHOT_KEY_HEADS.has(queryKey[0]);
}

/** Keys that embed a profile id must only persist into / hydrate from
 * that same profile's snapshot. */
export function keyBelongsToProfile(queryKey: readonly unknown[], profileId: number): boolean {
  const head = queryKey[0];
  if (head === "trainerstats" || head === "sectionScopes" || head === "calcstate") {
    return queryKey[1] === profileId;
  }
  return true;
}

export const SNAPSHOT_PREFIX = "bb-snap-v1:";
export const LAST_PROFILE_KEY = "bb-offline:lastProfile";
/** ~3.5MB guard — localStorage quotas vary; an oversized snapshot is
 * skipped (the previous one stays) rather than throwing. */
export const SNAPSHOT_MAX_CHARS = 3_500_000;

export type StoredSnapshot = { savedAt: number; entries: [string, unknown][] };

export function readSnapshot(profileId: number): StoredSnapshot | null {
  try {
    const raw = window.localStorage.getItem(`${SNAPSHOT_PREFIX}${profileId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredSnapshot;
    if (!parsed || typeof parsed.savedAt !== "number" || !Array.isArray(parsed.entries)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeSnapshot(profileId: number, snapshot: StoredSnapshot): boolean {
  try {
    const text = JSON.stringify(snapshot);
    if (text.length > SNAPSHOT_MAX_CHARS) return false;
    window.localStorage.setItem(`${SNAPSHOT_PREFIX}${profileId}`, text);
    window.localStorage.setItem(LAST_PROFILE_KEY, String(profileId));
    return true;
  } catch {
    return false;
  }
}

export function readLastProfileId(): number | null {
  try {
    const raw = window.localStorage.getItem(LAST_PROFILE_KEY);
    const n = raw ? Number(raw) : NaN;
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
}
