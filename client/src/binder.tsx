// Trust stamps + My Binder — shared by every reference card in the app.
//
// TRUST STAMP: each card footer shows the source the card's own data
// names (an entry's sourceName, a state agency, a first official link
// label…) plus the verification month for the section's content build.
// Where a card's data names no source, the stamp falls back to the
// honest generic line — never an invented source or date.
//
// MY BINDER: the star in the same footer saves the card (section +
// item key + title/summary/source snapshot) to the member's profile via
// the binder actions, the same storage pattern as Guided Paths
// progress. The Binder view groups the saved cards by section and deep
// links back here via the data-card-anchor slug on the footer.

import { createContext, useContext, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type ApiResponse } from "./api";
import { anchorSlug } from "./paths";

/** Verification month stamped on every reference card. The wave-1 and
 * wave-2 section content was verified at its build on Nov 8, 2026. */
export const VERIFIED_LABEL = "Verified Nov 2026";

/** Shown when a card's data names no source of its own. */
export const FALLBACK_SOURCE = "official links on this card";

/** Sections whose cards can be starred, in Binder display order. */
export const BINDER_SECTIONS: { key: string; label: string }[] = [
  { key: "mos", label: "MOS Library" },
  { key: "benefits", label: "Benefits" },
  { key: "deals", label: "Deals & Discounts" },
  { key: "transition", label: "Transition & Jobs" },
  { key: "education", label: "Education Planner" },
  { key: "pay", label: "Pay & Money" },
  { key: "pcs", label: "PCS Move Center" },
  { key: "family", label: "Family & Life Events" },
  { key: "claims", label: "VA Claims & VSO Guide" },
  { key: "readiness", label: "Readiness & Life Skills" },
  { key: "retirement", label: "Retirement Hub" },
  { key: "records", label: "Records & DD214 Center" },
  { key: "states", label: "State Benefits Finder" },
  { key: "care", label: "Care & Crisis" },
  { key: "find", label: "Find Anything" },
  { key: "changejob", label: "Change Your Job" },
  { key: "switchbranches", label: "Switch Branches" },
  { key: "combat", label: "Close Combat" },
  { key: "warstories", label: "War Stories" },
  { key: "thisday", label: "This Day in Military History" },
  { key: "traditions", label: "Traditions & Lore" },
  { key: "mailcall", label: "Mail Call" },
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

/**
 * Card footer: trust stamp on the left, star toggle on the right.
 * `compact` drops the top border for tight rows (combat techniques).
 * The wrapper carries data-card-anchor so Binder deep links can scroll
 * straight back to this card.
 */
export function CardTools({ cardRef, compact }: { cardRef: CardRef; compact?: boolean }) {
  const binder = useBinder();
  const saved = binder.isSaved(cardRef.section, cardRef.itemKey);
  return (
    <div
      data-card-anchor={anchorSlug(cardRef.title)}
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
        className={`flex shrink-0 items-center justify-center rounded-full border text-base leading-none disabled:opacity-50 ${
          compact ? "h-8 w-8" : "h-9 w-9"
        } ${
          saved
            ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--dim)]"
        }`}
      >
        <span aria-hidden="true">{saved ? "★" : "☆"}</span>
      </button>
    </div>
  );
}
