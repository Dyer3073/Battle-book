// Trust stamps + My Binder — shared by every reference card in the app.
//
// TRUST STAMP: each card footer shows the source the card's own data
// names (an entry's sourceName, a state agency, a first official link
// label…) plus the verification month for the section's content build.
// Where a card's data names no source, the stamp falls back to the
// honest generic line — never an invented source or date.
//
// MY BINDER: the labeled "Save to Binder" button in the same footer saves the card (section +
// item key + title/summary/source snapshot) to the member's profile via
// the binder actions, the same storage pattern as Guided Paths
// progress. The Binder view groups the saved cards by section and deep
// links back here via the data-card-anchor slug on the footer.

import { createContext, useContext, useState, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type ApiResponse } from "./api";
import { OfflineQueuedError } from "./offlineCore";
import { anchorSlug } from "./paths";

/** Verification month stamped on every reference card. The wave-1 and
 * wave-2 section content was verified at its build on Nov 8, 2026. */
export const VERIFIED_LABEL = "Verified Nov 2026";

/** Shown when a card's data names no source of its own. */
export const FALLBACK_SOURCE = "official links on this card";

/** Sections whose cards can be saved to the Binder, in Binder display order. */
export const BINDER_SECTIONS: { key: string; label: string }[] = [
  { key: "mos", label: "MOS Library" },
  { key: "bootcamp", label: "Boot Camp" },
  { key: "officer", label: "Becoming an Officer" },
  { key: "uniforms", label: "Uniforms" },
  { key: "partners", label: "Partner Forces" },
  { key: "benefits", label: "Benefits" },
  { key: "deals", label: "Deals & Discounts" },
  { key: "gear", label: "Gear Search" },
  { key: "lingo", label: "Lingo" },
  { key: "weapons", label: "Weapons & Qualification" },
  { key: "trails", label: "Trails & Camping" },
  { key: "installation", label: "My Installation" },
  { key: "medical", label: "Medical Training & Certs" },
  { key: "transition", label: "Transition & Jobs" },
  { key: "education", label: "Education Planner" },
  { key: "pay", label: "Pay & Money" },
  { key: "pcs", label: "PCS Move Center" },
  { key: "family", label: "Family & Life Events" },
  { key: "spousehub", label: "Spouse Hub" },
  { key: "claims", label: "VA Claims & Free Help" },
  { key: "readiness", label: "Duties, Uniforms & Everyday Know-How" },
  { key: "retirement", label: "Retirement Hub" },
  { key: "records", label: "Your Records & DD214" },
  { key: "states", label: "State Benefits Finder" },
  { key: "care", label: "Care & Crisis" },
  { key: "find", label: "Find an Office, Number, or Service" },
  { key: "changejob", label: "Change Your Job" },
  { key: "switchbranches", label: "Switch Branches" },
  { key: "combat", label: "Hand-to-Hand Programs" },
  { key: "warstories", label: "War Stories" },
  { key: "thisday", label: "This Day in Military History" },
  { key: "traditions", label: "Traditions & Lore" },
  { key: "songs", label: "Songs, Anthem & Pledge + Flags" },
  { key: "mailcall", label: "Mail Call" },
  { key: "reserve", label: "Guard & Reserve" },
  { key: "rights", label: "Know Your Rights" },
  { key: "homeloan", label: "VA Home Loan Center" },
  { key: "ribbons", label: "Awards & Ribbon Rack" },
  { key: "deployment", label: "Family Care Plan & Deployment Readiness" },
  { key: "clearance", label: "Security Clearances" },
  { key: "kids", label: "Kids & Schools" },
  { key: "travelhq", label: "Travel, Space-A & Lodging" },
  { key: "taxes", label: "Tax & Residency" },
  { key: "voting", label: "Voting Center" },
  { key: "healthhq", label: "Health Care & TRICARE" },
  { key: "specops", label: "Special Forces & Elite Units" },
  { key: "alliedsf", label: "Allied Special Forces" },
  { key: "quals", label: "Qualifications, Schools & Certifications" },
  { key: "components", label: "Switching Components" },
  { key: "reenlist", label: "Reenlistment & IRR" },
  { key: "calculators", label: "Calculators" },
  { key: "commissioning", label: "Commissioning from the Ranks" },
  { key: "ranks", label: "Rank Charts" },
  { key: "recruiters", label: "Connect with a Recruiter" },
  { key: "fitness", label: "Fitness Calculators" },
  { key: "fitnesslib", label: "Exercise Library" },
  { key: "warmup", label: "Warm-Up & Cool-Down" },
  { key: "stretching", label: "Stretching" },
  { key: "nutrition", label: "Nutrition" },
  { key: "fieldtools", label: "Field Tools — Knots" },
  { key: "signals", label: "Field Tools — Hand & Arm Signals" },
  { key: "cool", label: "Credentials for Your Job" },
  { key: "assignments", label: "How Assignments Work" },
  { key: "evals", label: "Evaluations & Board File" },
  { key: "fedjobs", label: "Veterans' Preference & Federal Jobs" },
  { key: "tsp", label: "TSP Center" },
  { key: "parents", label: "Parents & Loved Ones" },
  { key: "rotc", label: "ROTC & Academies" },
  { key: "channels", label: "Official Channels" },
  { key: "relief", label: "Relief Societies" },
  { key: "paycharts", label: "Pay Charts & Rates" },
  { key: "chaplains", label: "Chaplains & Religious Life" },
  { key: "honors", label: "Honors & Burial" },
  { key: "oconus", label: "OCONUS Family Papers" },
  { key: "emergencydeck", label: "When It Goes Wrong" },
  { key: "firstyear", label: "First Year Out" },
  { key: "landnav", label: "Land Navigation" },
  { key: "firstaid", label: "First Aid & Buddy Aid" },
  { key: "drill", label: "Drill & Ceremonies" },
  { key: "boardprep", label: "Board Prep" },
  { key: "writing", label: "Writing Helpers" },
  { key: "ides", label: "MEB/PEB (IDES) Guide" },
  { key: "clepjst", label: "CLEP/DANTES + JST" },
  { key: "housing", label: "Housing Pack" },
  { key: "carbuying", label: "Car-Buying Guide" },
  { key: "opsec", label: "OPSEC & Social Media" },
  { key: "giveback", label: "Give-Back" },
  { key: "spousework", label: "Spouse Work Abroad & After a PCS" },
  { key: "caregiver", label: "VA Caregiver Support & EFMP Respite" },
  { key: "germany", label: "Germany Living Guide" },
  { key: "credit", label: "Building Credit From Zero" },
  { key: "barracks", label: "Barracks Daily Life" },
  { key: "generalorders", label: "General Orders" },
  { key: "retireewear", label: "Retiree Uniform & Ceremony" },
];

export function binderSectionLabel(key: string): string {
  return BINDER_SECTIONS.find((s) => s.key === key)?.label ?? key;
}

/** The source a card's link list names first — verbatim from its data. */
export function sourceFromLinks(links: readonly { label: string }[]): string | null {
  const first = links[0];
  return first ? first.label : null;
}

export type BinderItem = ApiResponse<typeof api, "getBinder">["items"][number];

export type CardRef = {
  section: string;
  itemKey: string;
  title: string;
  summary: string;
  /** Named source from the card's own data, or null for the fallback. */
  source: string | null;
};

type BinderContextValue = {
  items: BinderItem[];
  isSaved: (section: string, itemKey: string) => boolean;
  toggle: (ref: CardRef) => void;
  remove: (section: string, itemKey: string) => void;
  busy: boolean;
};

const BinderContext = createContext<BinderContextValue | null>(null);

export function BinderProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const binderQ = useQuery({ queryKey: ["binder"], queryFn: () => api.getBinder({}) });
  const items = binderQ.data?.items ?? [];

  const toggleM = useMutation({
    mutationFn: (ref: CardRef) =>
      api.toggleBinderItem({
        section: ref.section,
        itemKey: ref.itemKey,
        title: ref.title,
        summary: ref.summary,
        source: ref.source ?? "",
      }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["binder"] }),
  });
  const removeM = useMutation({
    mutationFn: (args: { section: string; itemKey: string }) => api.removeBinderItem(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["binder"] }),
  });

  const value: BinderContextValue = {
    items,
    isSaved: (section, itemKey) => items.some((i) => i.section === section && i.itemKey === itemKey),
    toggle: (ref) => toggleM.mutate(ref),
    remove: (section, itemKey) => removeM.mutate({ section, itemKey }),
    busy: toggleM.isPending || removeM.isPending,
  };
  return <BinderContext.Provider value={value}>{children}</BinderContext.Provider>;
}

export function useBinder(): BinderContextValue {
  const ctx = useContext(BinderContext);
  if (!ctx) throw new Error("useBinder must be used inside BinderProvider");
  return ctx;
}

/** The trust line rendered on its own (print sheet, Binder list). */
export function trustLine(source: string | null | undefined): string {
  return `Source: ${source && source.trim() ? source : FALLBACK_SOURCE} · ${VERIFIED_LABEL}`;
}

/** The stable flag identifier for a card: "<section>::<item key>",
 * exactly the pair its CardTools footer already carries. */
export function entryFlagId(cardRef: CardRef): string {
  return `${cardRef.section}::${cardRef.itemKey}`;
}

/**
 * Flag This Entry — the per-card control that files a flag into the
 * app's EXISTING review-queue plumbing: server-side a flag is a
 * feedback row of type "flag" (the feedback store's item types were
 * extended; there is no parallel flag store), surfaced in the
 * Feedback Inbox and the Review Queue's flagged-entries section.
 * Owner-only by construction — the actions resolve the signed-in
 * profile server-side and only ever read or write that profile's own
 * flag for the entry: one flag per entry per profile, editable (a
 * second flag edits the note instead of duplicating) and
 * withdrawable, with a quiet "Flagged — thank you" confirmation and
 * no public counts. The flags query is shared by every card on the
 * page under one React Query key, so the whole page fetches once.
 */
export function EntryFlag({ cardRef, compact }: { cardRef: CardRef; compact?: boolean }) {
  const queryClient = useQueryClient();
  const entryId = entryFlagId(cardRef);
  const flagsQ = useQuery({ queryKey: ["entryflags"], queryFn: () => api.getMyEntryFlags({}) });
  const mine = (flagsQ.data?.flags ?? []).find((f) => f.entryId === entryId);
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const draft = note ?? mine?.note ?? "";

  const flagM = useMutation({
    mutationFn: (n: string) =>
      api.flagEntry({ entryId, section: cardRef.section, note: n.trim() }),
    onSuccess: () => {
      setOpen(false);
      setNote(null);
      void queryClient.invalidateQueries({ queryKey: ["entryflags"] });
      void queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
  });
  const withdrawM = useMutation({
    mutationFn: () => api.withdrawEntryFlag({ entryId }),
    onSuccess: () => {
      setOpen(false);
      setNote(null);
      void queryClient.invalidateQueries({ queryKey: ["entryflags"] });
      void queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
  });
  const busy = flagM.isPending || withdrawM.isPending;

  return (
    <div className={compact ? "mt-1" : "mt-2"}>
      {!open ? (
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-label={
              mine
                ? `Edit your flag on “${cardRef.title}”`
                : `Flag “${cardRef.title}” for review`
            }
            aria-pressed={Boolean(mine)}
            onClick={() => {
              setNote(mine?.note ?? "");
              setOpen(true);
            }}
            className={`rounded-full border px-3 font-bold whitespace-nowrap disabled:opacity-50 ${
              compact ? "min-h-8 text-xs" : "min-h-9 text-xs"
            } ${
              mine
                ? "border-[var(--amber)] bg-[var(--amber-bg)] text-[var(--amber)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--dim)]"
            }`}
          >
            <span aria-hidden="true">⚑ </span>
            {mine ? "Flagged" : "Flag this entry"}
          </button>
          {mine ? (
            <span className="text-xs font-semibold text-[var(--amber)]" role="status">
              Flagged — thank you
            </span>
          ) : null}
        </div>
      ) : (
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
          <label
            htmlFor={`flag-note-${anchorSlug(cardRef.title)}`}
            className="mb-1 block text-sm font-semibold text-[var(--text)]"
          >
            {mine ? "Your flag note (edit and save to update it)" : "Flag this entry — what looks wrong? (optional)"}
          </label>
          <textarea
            id={`flag-note-${anchorSlug(cardRef.title)}`}
            aria-label={`Note for your flag on ${cardRef.title}`}
            value={draft}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            maxLength={2000}
            className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)]"
            placeholder="Optional — e.g. the phone number has changed, or the deadline looks off."
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              aria-label={mine ? `Save flag note for ${cardRef.title}` : `Submit flag for ${cardRef.title}`}
              disabled={busy}
              onClick={() => flagM.mutate(draft)}
              className="rounded-[var(--radius)] bg-[var(--accent)] px-3 py-2 text-sm font-bold text-[var(--accent-text)] disabled:opacity-50"
            >
              {mine ? "Save flag" : "Flag for review"}
            </button>
            {mine ? (
              <button
                type="button"
                aria-label={`Withdraw your flag on ${cardRef.title}`}
                disabled={busy}
                onClick={() => withdrawM.mutate()}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--red)] disabled:opacity-50"
              >
                Withdraw flag
              </button>
            ) : null}
            <button
              type="button"
              aria-label="Cancel flagging"
              disabled={busy}
              onClick={() => {
                setOpen(false);
                setNote(null);
              }}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text)] disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
          {flagM.isError || withdrawM.isError ? (
            (flagM.error ?? withdrawM.error) instanceof OfflineQueuedError ? (
              <p className="mt-2 text-sm font-semibold text-[var(--amber)]" role="status">
                You&apos;re offline — saved on this device, and it will send when you&apos;re back.
              </p>
            ) : (
              <p className="mt-2 text-sm text-[var(--red)]" role="alert">
                That couldn&apos;t be saved. Try again.
              </p>
            )
          ) : null}
          <p className="mt-2 text-xs text-[var(--dim)]">
            Your flag goes to the review queue under your profile only — it is never shown publicly and no
            counts are displayed.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Card footer: trust stamp on the left, save toggle on the right.
 * The toggle is a LABELED pill — star glyph plus the words "Save to
 * Binder" / "In your Binder" — never a bare icon: an unlabeled star
 * alone was too easy to miss entirely. `compact` drops the top border
 * for tight rows (combat techniques) and shortens the label.
 * The wrapper carries data-card-anchor so Binder deep links can scroll
 * straight back to this card.
 */
export function CardTools({ cardRef, compact }: { cardRef: CardRef; compact?: boolean }) {
  const binder = useBinder();
  const saved = binder.isSaved(cardRef.section, cardRef.itemKey);
  return (
    <div data-card-anchor={anchorSlug(cardRef.title)}>
      <div
        className={
          compact
            ? "mt-1.5 flex items-center justify-between gap-2"
            : "mt-3 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-2.5"
        }
      >
        <p className="text-xs leading-snug text-[var(--dim)]">{trustLine(cardRef.source)}</p>
        <button
          type="button"
          aria-label={
            saved
              ? `Remove “${cardRef.title}” from My Binder`
              : `Save “${cardRef.title}” to My Binder`
          }
          aria-pressed={saved}
          disabled={binder.busy}
          onClick={() => binder.toggle(cardRef)}
          className={`flex shrink-0 items-center justify-center gap-1.5 rounded-full border-2 font-bold whitespace-nowrap disabled:opacity-50 ${
            compact ? "min-h-9 px-3 text-xs" : "min-h-10 px-4 text-sm"
          } ${
            saved
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
              : "border-[var(--accent)] bg-[var(--surface)] text-[var(--accent-word)]"
          }`}
        >
          <span aria-hidden="true" className={compact ? "text-sm leading-none" : "text-base leading-none"}>
            {saved ? "★" : "☆"}
          </span>
          <span>{saved ? (compact ? "In Binder" : "In your Binder") : compact ? "Save" : "Save to Binder"}</span>
        </button>
      </div>
      <EntryFlag cardRef={cardRef} compact={compact} />
    </div>
  );
}
