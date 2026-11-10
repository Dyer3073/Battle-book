// Offline mode — UI layer: the OfflineProvider (mounted once in
// main.tsx around the whole app) and its banner.
//
// The provider does four jobs:
//  1. HYDRATE: on launch, seed the query cache from the last profile's
//     localStorage snapshot (offlineCore.ts) so personal data renders
//     as a labeled last-synced copy with no connection. If the live
//     profile turns out to be a DIFFERENT profile, the seeded personal
//     entries are purged from the cache — one profile's saved copy is
//     never shown under another profile.
//  2. PERSIST: whenever whitelisted personal queries succeed, write
//     the fresh snapshot for the CURRENT profile (debounced).
//  3. FLUSH: when the connection is up and the active profile matches
//     an outbox item's profile stamp, replay the queue in order via
//     apiDirect; stop at the first failure and keep the rest queued.
//  4. BANNER: the calm offline bar + outbox/notice lines. It renders
//     in flow at the very top of the app (sticky), above every shell —
//     member, spouse, and future shells all sit under this provider.

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PERMANENT_ACTION_STATUSES, SpaceActionError } from "@hatch/space-sdk/client";
import { api, apiDirect } from "./api";
import {
  emitOfflineNotice,
  getOutboxSnapshot,
  isConnectionUp,
  isSnapshotKey,
  keyBelongsToProfile,
  listOutbox,
  recordOutboxFailure,
  readLastProfileId,
  readSnapshot,
  removeOutboxItem,
  subscribeConnectivity,
  subscribeOfflineNotices,
  subscribeOutbox,
  writeSnapshot,
  type OfflineNotice,
  type OutboxItem,
} from "./offlineCore";

const EMPTY_OUTBOX_SSR: [] = [];

function formatSyncTime(ms: number): string {
  const d = new Date(ms);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return sameDay
    ? `today at ${time}`
    : `${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at ${time}`;
}

export function OfflineProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  // ── Hydration (once, guarded): runs during the provider's first
  // render, before any child query can resolve, so a cold offline
  // launch already has the last-synced copy in cache when views read
  // it. Seeded entries carry the snapshot's timestamp, so React Query
  // treats them as stale and refetches the moment it can.
  const hydratedRef = useRef<{ profileId: number; savedAt: number } | null>(null);
  const hydrateAttemptedRef = useRef(false);
  if (!hydrateAttemptedRef.current) {
    hydrateAttemptedRef.current = true;
    try {
      const lastId = readLastProfileId();
      const snap = lastId != null ? readSnapshot(lastId) : null;
      if (lastId != null && snap) {
        for (const [keyJson, data] of snap.entries) {
          try {
            const key = JSON.parse(keyJson) as unknown[];
            if (Array.isArray(key) && isSnapshotKey(key) && keyBelongsToProfile(key, lastId)) {
              queryClient.setQueryData(key, data, { updatedAt: snap.savedAt });
            }
          } catch {
            /* skip a malformed entry */
          }
        }
        hydratedRef.current = { profileId: lastId, savedAt: snap.savedAt };
      }
    } catch {
      /* storage unavailable — offline still works for this session */
    }
  }

  const [snapshotAt, setSnapshotAt] = useState<number | null>(hydratedRef.current?.savedAt ?? null);

  // The active profile, watched through the shared cache (the same
  // ["profile"] query every shell already runs).
  const profileQ = useQuery({ queryKey: ["profile"], queryFn: () => api.getProfile({}) });
  const activeProfileId: number | null =
    typeof profileQ.data?.profile?.id === "number" ? profileQ.data.profile.id : null;

  // ── Profile-mismatch purge: the snapshot was seeded for the last
  // profile on this device; if the server says a different profile is
  // active, drop the seeded personal entries (fresh data refetches —
  // reaching this state means the profile query just succeeded, so
  // we're online). The ["profile"] entry itself holds the NEW profile
  // and is never purged.
  const purgedForRef = useRef<number | null>(null);
  useEffect(() => {
    const hydrated = hydratedRef.current;
    if (activeProfileId == null || !hydrated) return;
    if (hydrated.profileId === activeProfileId || purgedForRef.current === activeProfileId) return;
    purgedForRef.current = activeProfileId;
    void queryClient.removeQueries({
      predicate: (q) =>
        isSnapshotKey(q.queryKey) &&
        q.queryKey[0] !== "profile" &&
        q.queryKey[0] !== "profiles",
    });
    setSnapshotAt(null);
  }, [activeProfileId, queryClient]);

  // ── Persist fresh snapshots for the active profile.
  useEffect(() => {
    if (activeProfileId == null) return;
    let timer: number | null = null;
    const write = () => {
      const entries: [string, unknown][] = [];
      for (const q of queryClient.getQueryCache().getAll()) {
        if (q.state.status !== "success" || q.state.data === undefined) continue;
        if (!isSnapshotKey(q.queryKey) || !keyBelongsToProfile(q.queryKey, activeProfileId)) continue;
        entries.push([JSON.stringify(q.queryKey), q.state.data]);
      }
      if (entries.length === 0) return;
      const savedAt = Date.now();
      if (writeSnapshot(activeProfileId, { savedAt, entries })) setSnapshotAt(savedAt);
    };
    const unsub = queryClient.getQueryCache().subscribe(() => {
      if (timer != null) window.clearTimeout(timer);
      timer = window.setTimeout(write, 800);
    });
    write();
    return () => {
      if (timer != null) window.clearTimeout(timer);
      unsub();
    };
  }, [activeProfileId, queryClient]);

  // ── Flush the outbox: online + this profile active. Replays in
  // queued order through apiDirect (never re-wrapped); an item whose
  // profile stamp names another profile is held, untouched.
  const flushingRef = useRef(false);
  const [, setFlushTick] = useState(0);
  const online = useSyncExternalStore(subscribeConnectivity, isConnectionUp, () => true);
  // Re-run the flush whenever the outbox itself changes (e.g. an item
  // queued by a mid-flight failure while the banner already reads up).
  const outboxVersion = useSyncExternalStore(subscribeOutbox, getOutboxSnapshot, () => EMPTY_OUTBOX_SSR).length;
  useEffect(() => {
    if (!online || activeProfileId == null || flushingRef.current) return;
    const mine = listOutbox().filter(
      (i: OutboxItem) => i.profileId === activeProfileId || i.profileId == null,
    );
    if (mine.length === 0) return;
    flushingRef.current = true;
    void (async () => {
      let sent = 0;
      let dropped = 0;
      try {
        for (const item of mine) {
          try {
            const fn = (apiDirect as unknown as Record<string, (a: unknown) => Promise<unknown>>)[item.action];
            if (typeof fn !== "function") {
              // Unknown action (app changed since queueing): drop it
              // rather than wedge the queue forever.
              removeOutboxItem(item.id);
              dropped += 1;
              continue;
            }
            await fn(item.args);
            removeOutboxItem(item.id);
            sent += 1;
          } catch (err) {
            if (err instanceof TypeError) {
              break; // network still down — keep everything queued
            }
            if (err instanceof SpaceActionError && PERMANENT_ACTION_STATUSES.has(err.status)) {
              // The server refused this one for good (e.g. a withdraw
              // for a flag that no longer exists): drop it and say so,
              // rather than wedging every later item behind it.
              removeOutboxItem(item.id);
              dropped += 1;
              continue;
            }
            // Any other refusal (a handler error the daemon didn't map
            // to a permanent status): three strikes across reconnects,
            // then drop with the same visible notice.
            if (recordOutboxFailure(item.id) >= 3) {
              removeOutboxItem(item.id);
              dropped += 1;
              continue;
            }
            break; // keep the rest queued; next reconnect retries
          }
        }
      } finally {
        flushingRef.current = false;
        setFlushTick((t) => t + 1);
        if (sent > 0) {
          emitOfflineNotice(
            "sent",
            `Back online — ${sent} saved change${sent === 1 ? "" : "s"} sent.`,
          );
          void queryClient.invalidateQueries();
        }
        if (dropped > 0) {
          emitOfflineNotice(
            "unsent",
            `${dropped} saved change${dropped === 1 ? "" : "s"} couldn't be sent — the app refused ${dropped === 1 ? "it" : "them"} (for example, something already withdrawn). ${dropped === 1 ? "It was" : "They were"} removed from the send queue.`,
          );
        }
      }
    })();
  }, [online, activeProfileId, queryClient, outboxVersion]);

  return (
    <>
      <OfflineBanner snapshotAt={snapshotAt} activeProfileId={activeProfileId} online={online} />
      {children}
    </>
  );
}

function OfflineBanner({
  snapshotAt,
  activeProfileId,
  online,
}: {
  snapshotAt: number | null;
  activeProfileId: number | null;
  online: boolean;
}) {
  const outbox = useSyncExternalStore(subscribeOutbox, getOutboxSnapshot, () => EMPTY_OUTBOX_SSR);
  const [notice, setNotice] = useState<OfflineNotice | null>(null);

  useEffect(() => subscribeOfflineNotices((n) => setNotice(n)), []);
  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice((cur) => (cur === notice ? null : cur)), 9000);
    return () => window.clearTimeout(t);
  }, [notice]);

  const mine = outbox.filter((i) => i.profileId === activeProfileId);
  const held = outbox.length - mine.length;
  const pendingCount = online ? outbox.length : mine.length;

  if (!online) {
    return (
      <div
        role="status"
        className="sticky top-0 z-40 border-b-2 border-[var(--amber)] bg-[var(--amber-bg)] px-4 py-2.5 text-center"
      >
        <p className="text-sm font-bold text-[var(--text)]">
          You&apos;re offline — reference works; live features need a connection.
        </p>
        {snapshotAt != null ? (
          <p className="mt-0.5 text-xs font-semibold text-[var(--text)]">
            Your saved info below is your last synced copy, from {formatSyncTime(snapshotAt)}.
          </p>
        ) : null}
        {mine.length > 0 ? (
          <p className="mt-0.5 text-xs font-semibold text-[var(--text)]">
            {mine.length} saved change{mine.length === 1 ? "" : "s"} on this device — will send when
            you&apos;re back.
          </p>
        ) : null}
      </div>
    );
  }

  if (notice) {
    return (
      <div
        role="status"
        className={`sticky top-0 z-40 border-b px-4 py-2 text-center ${
          notice.kind === "blocked"
            ? "border-[var(--amber)] bg-[var(--amber-bg)]"
            : "border-[var(--border)] bg-[var(--surface2)]"
        }`}
      >
        <p className="text-sm font-semibold text-[var(--text)]">{notice.text}</p>
      </div>
    );
  }

  if (pendingCount > 0) {
    return (
      <div
        role="status"
        className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2 text-center"
      >
        <p className="text-sm font-semibold text-[var(--text)]">
          {pendingCount} saved change{pendingCount === 1 ? "" : "s"} on this device waiting to send
          {held > 0 && activeProfileId != null
            ? " — some belong to another profile and send when it's active."
            : "…"}
        </p>
      </div>
    );
  }

  return null;
}
