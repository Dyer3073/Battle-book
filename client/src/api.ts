// Typed RPC client. Types come straight from `server/src/actions.ts` — no
// codegen. `createActionClient` returns a proxy that POSTs `{action, args}`
// to `./actions` and returns the typed response.
//
// `import type { Actions }` is type-only by design: the client bundle never
// pulls in any server runtime (bun:sqlite, file APIs, etc.). With
// `verbatimModuleSyntax: true`, dropping `type` is a compile error.
//
// OFFLINE WRAPPER (offlineCore.ts holds the policy + the honest limits):
// `api` is the SDK client wrapped so that, when the browser reports
// offline, writes are never sent into the void — queueable writes go to
// the per-profile outbox and throw OfflineQueuedError, everything else
// throws OfflineBlockedError. A mid-flight network failure (a TypeError
// from fetch; HTTP errors are SpaceActionError and pass through) raises
// the link-down flag for the banner and queues only idempotent writes.
// `apiDirect` is the unwrapped client, used by the outbox flush so a
// replayed write can never be re-queued by the wrapper itself.

import type { Actions } from "../../server/src/actions";
import { createActionClient } from "@hatch/space-sdk/client";
import {
  IDEMPOTENT_ACTIONS,
  QUEUEABLE_ACTIONS,
  OfflineBlockedError,
  OfflineQueuedError,
  currentProfileId,
  emitOfflineNotice,
  enqueueOfflineAction,
  isBrowserOnline,
  isReadAction,
  noteActionNetworkFailure,
  noteActionSuccess,
} from "./offlineCore";

export const apiDirect = createActionClient<typeof Actions>();

type ActionFn = (args: unknown) => Promise<unknown>;

function wrapAction(name: string, fn: ActionFn): ActionFn {
  return async (args: unknown) => {
    if (!isReadAction(name) && !isBrowserOnline()) {
      // Pre-flight offline: the request provably never leaves the
      // device, so queueing is always safe for queueable writes.
      if (QUEUEABLE_ACTIONS.has(name)) {
        enqueueOfflineAction(name, args, currentProfileId());
        emitOfflineNotice("queued", "Saved on this device — will send when you're back online.");
        throw new OfflineQueuedError(name);
      }
      emitOfflineNotice("blocked", "You're offline — that needs a connection, so nothing was sent.");
      throw new OfflineBlockedError(name);
    }
    try {
      const result = await fn(args);
      noteActionSuccess();
      return result;
    } catch (err) {
      if (err instanceof TypeError) {
        // Network-layer failure (HTTP errors arrive as SpaceActionError,
        // a different class, and are never treated as offline).
        noteActionNetworkFailure();
        if (!isReadAction(name) && IDEMPOTENT_ACTIONS.has(name) && !isBrowserOnline()) {
          // The browser ALSO reports offline: the request cannot have
          // been processed in any state we can't safely redo — these
          // actions are pure sets/upserts/deletes. Queue the replay.
          enqueueOfflineAction(name, args, currentProfileId());
          emitOfflineNotice("queued", "Saved on this device — will send when you're back online.");
          throw new OfflineQueuedError(name);
        }
      }
      throw err;
    }
  };
}

const wrapped = new Proxy(apiDirect, {
  get(target, prop) {
    const orig = Reflect.get(target, prop as string) as unknown;
    if (typeof prop !== "string" || typeof orig !== "function") return orig;
    return wrapAction(prop, orig as ActionFn);
  },
});

export const api = wrapped as typeof apiDirect;

// Re-exported for convenience so client code can do
//
//     import { api, type ApiResponse } from "./api";
//     type Article = ApiResponse<typeof api, "listArticles">["articles"][number];
//
// They are also available directly from "@hatch/space-sdk/client".
export type { ApiRequest, ApiResponse } from "@hatch/space-sdk/client";
