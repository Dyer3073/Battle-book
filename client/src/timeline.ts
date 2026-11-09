// My Service Timeline — client-side labels and date helpers.
//
// The timeline is the member's private career keepsake: entries are
// member-entered, stored per profile on the server, and never public.
// Dates are kept at the precision the member gave them — a full date
// ("YYYY-MM-DD"), a month and year ("YYYY-MM"), or a year alone
// ("YYYY") — and everything here renders and summarizes only what the
// entries themselves say. No rank, pay, or service-length claims are
// computed beyond the span between the member's own first and last
// entries.

import type { ApiResponse } from "./api";
import type { api } from "./api";

export type TimelineEntry = ApiResponse<typeof api, "listTimelineEntries">["entries"][number];
export type TimelineEntryType = TimelineEntry["entryType"];

export const TIMELINE_TYPES: { key: TimelineEntryType; label: string }[] = [
  { key: "joined", label: "Joined" },
  { key: "bootcamp", label: "Boot camp / basic training" },
  { key: "school", label: "School / AIT" },
  { key: "unit", label: "Unit joined" },
  { key: "deployment", label: "Deployment" },
  { key: "promotion", label: "Promotion" },
  { key: "pcs", label: "PCS move" },
  { key: "award", label: "Award / decoration" },
  { key: "reenlistment", label: "Reenlistment / extension" },
  { key: "separation", label: "Separation / retirement" },
  { key: "other", label: "Other" },
];

export function timelineTypeLabel(key: TimelineEntryType): string {
  return TIMELINE_TYPES.find((t) => t.key === key)?.label ?? "Other";
}

export type TimelinePrecision = "full" | "month" | "year";

export function precisionOf(entryDate: string): TimelinePrecision {
  if (entryDate.length >= 10) return "full";
  if (entryDate.length === 7) return "month";
  return "year";
}

/** Renders a stored date at exactly the precision the member entered. */
export function formatTimelineDate(entryDate: string): string {
  const p = precisionOf(entryDate);
  if (p === "year") return entryDate;
  if (p === "month") {
    return new Date(`${entryDate}-01T00:00:00`).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }
  return new Date(`${entryDate}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Pads a partial date to its first day, for chronological sorting. */
export function timelineSortKey(entryDate: string): string {
  if (entryDate.length === 4) return `${entryDate}-01-01`;
  if (entryDate.length === 7) return `${entryDate}-01`;
  return entryDate;
}

export function sortTimeline(entries: TimelineEntry[]): TimelineEntry[] {
  return [...entries].sort((a, b) => {
    const ka = timelineSortKey(a.entryDate);
    const kb = timelineSortKey(b.entryDate);
    if (ka !== kb) return ka < kb ? -1 : 1;
    return a.id - b.id;
  });
}

export interface TimelineSummary {
  count: number;
  spanLabel: string | null;
  deployments: number;
  promotions: number;
}

/**
 * The header summary — computed only from the entries themselves: the
 * span between the first and most recent entry, and counts of the
 * deployment / promotion types when those entries exist. Nothing else
 * is inferred.
 */
export function timelineSummary(entries: TimelineEntry[]): TimelineSummary {
  const sorted = sortTimeline(entries);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  let spanLabel: string | null = null;
  if (first && last) {
    spanLabel =
      first.id === last.id
        ? formatTimelineDate(first.entryDate)
        : `${formatTimelineDate(first.entryDate)} — ${formatTimelineDate(last.entryDate)}`;
  }
  return {
    count: sorted.length,
    spanLabel,
    deployments: sorted.filter((e) => e.entryType === "deployment").length,
    promotions: sorted.filter((e) => e.entryType === "promotion").length,
  };
}

/** Privacy + OPSEC copy rendered in the section header. */
export const TIMELINE_PRIVACY_LINES = [
  "Private to your profile. Your timeline is never public, never shown to other members, and never part of any official record — it lives only here, in your Battle Book.",
  "OPSEC: keep current-operation details out — no exact current deployment locations or dates. This is a personal keepsake, not a service record.",
];

/** The shorter OPSEC reminder repeated inside the add/edit form. */
export const TIMELINE_FORM_OPSEC =
  "Keep current-operation details out (no exact current deployment locations or dates). This timeline is a personal keepsake — private to your profile, never public, and not an official record.";

/** Starter prompts for the honest empty state. */
export const TIMELINE_STARTERS = [
  "Add the day you shipped to boot camp",
  "Add your first unit",
  "Add a deployment, a promotion, or a school",
  "Add the day it ended — separation or retirement",
];
