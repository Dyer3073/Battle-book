// VA Claim Tracker — client-side labels and derived displays.
//
// The tracker is the member's own private organizer for their claims:
// labels, types, stages, and dates are all member-entered, stored per
// profile on the server, and visible only to that profile. Nothing here
// is VA's status — the official status check is VA.gov's claim status
// tool, linked on every claim card — and nothing here estimates a
// rating, a percentage, an outcome, or a dollar figure.
//
// The stage list, the evidence categories, and the intent-to-file rule
// all come from the app's own VA Claims & VSO Guide (claims.ts), not
// from anything invented for this section:
//  - Stages follow the lifecycle the guide publishes: the intent to
//    file, evidence gathering, filing, the C&P exam (scheduled, then
//    done), VA's decision process, the decision letter, and the review
//    lanes after a decision.
//  - Evidence categories are the guide's own: service treatment
//    records, private treatment records, a personal statement, buddy /
//    lay statements (VA Forms 21-10210 / 21-4138), the nexus letter the
//    guide's "Nexus" entry teaches, and DD214 / service records (the
//    guide's evidence master list names "DD214 or other separation
//    documents" first).
//  - An intent to file gives you 1 year to complete the claim — the
//    rule the guide's Intent to File entry states, and the same rule
//    the Deadlines section and the Alerts center already use.

import type { ApiResponse } from "./api";
import type { api } from "./api";

export type TrackedClaim = ApiResponse<typeof api, "listMyClaims">["claims"][number];
export type ClaimType = TrackedClaim["claimType"];
export type ClaimStage = TrackedClaim["stage"];

export const CLAIM_TYPES: { key: ClaimType; label: string }[] = [
  { key: "new", label: "New claim" },
  { key: "increase", label: "Increase" },
  { key: "supplemental", label: "Supplemental" },
  { key: "bdd", label: "BDD — pre-discharge" },
];

export function claimTypeLabel(key: ClaimType): string {
  return CLAIM_TYPES.find((t) => t.key === key)?.label ?? "New claim";
}

/**
 * The claim lifecycle, in order — the progress strip walks these left to
 * right. `claimsAnchor` is the group title in the VA Claims & VSO Guide
 * that teaches this stage; the card's "About this stage" button deep
 * links there through the app's section-anchor mechanism.
 */
export const CLAIM_STAGES: { key: ClaimStage; label: string; claimsAnchor: string; blurb: string }[] = [
  {
    key: "intent",
    label: "Intent to file sent",
    claimsAnchor: "How a Claim Moves",
    blurb: "You've told VA a claim is coming. The intent to file sets your potential start date — you then have 1 year to complete and file the actual claim.",
  },
  {
    key: "gathering",
    label: "Gathering evidence",
    claimsAnchor: "Evidence: What VA Decides On",
    blurb: "You're pulling together the records VA decides on — work the evidence checklist below against the guide's evidence entries.",
  },
  {
    key: "filed",
    label: "Filed",
    claimsAnchor: "How a Claim Moves",
    blurb: "Your claim is in with VA. From here VA's own process runs: claim received, initial review, then evidence gathering on VA's side.",
  },
  {
    key: "exam_scheduled",
    label: "C&P exam scheduled",
    claimsAnchor: "How a Claim Moves",
    blurb: "VA (or its contract provider) has scheduled your claim exam. If VA asks for an exam, attend it or reschedule it — it's part of how VA gathers evidence.",
  },
  {
    key: "exam_done",
    label: "C&P exam done",
    claimsAnchor: "How a Claim Moves",
    blurb: "The exam is behind you. The examiner's report goes to VA — you can't get results at the exam itself.",
  },
  {
    key: "waiting",
    label: "Waiting on VA decision",
    claimsAnchor: "How a Claim Moves",
    blurb: "VA is working the claim — evidence review, rating, and the decision letter. Evidence gathering is usually the longest stretch.",
  },
  {
    key: "decision",
    label: "Decision received",
    claimsAnchor: "After a Decision: The Three Review Lanes",
    blurb: "Your decision letter is in. Read it fully — including the reasons — before choosing any next step, ideally with an accredited rep.",
  },
  {
    key: "appealing",
    label: "Appealing",
    claimsAnchor: "After a Decision: The Three Review Lanes",
    blurb: "You're in one of VA's three review lanes — Higher-Level Review, Supplemental Claim, or Board Appeal. The guide walks each lane; a free accredited rep can help you choose.",
  },
];

export function claimStageIndex(key: ClaimStage): number {
  const i = CLAIM_STAGES.findIndex((s) => s.key === key);
  return i < 0 ? 0 : i;
}

export function claimStageDef(key: ClaimStage): (typeof CLAIM_STAGES)[number] {
  const found = CLAIM_STAGES.find((s) => s.key === key);
  if (found) return found;
  const first = CLAIM_STAGES.find((s) => s.key === "intent");
  if (!first) throw new Error("CLAIM_STAGES is missing its first stage");
  return first;
}

export function claimStageLabel(key: ClaimStage): string {
  return claimStageDef(key).label;
}

export type ClaimEvidenceKey = TrackedClaim["evidence"][number];

/** The evidence categories, in the Claims guide's own order. */
export const CLAIM_EVIDENCE: { key: ClaimEvidenceKey; label: string; hint: string }[] = [
  { key: "strs", label: "Service treatment records", hint: "Your in-service medical file — the backbone evidence VA reviews." },
  { key: "private", label: "Private treatment records", hint: "Records from non-VA doctors — submit them, or authorize VA to request them (Form 21-4142)." },
  { key: "personal", label: "Personal statement", hint: "Your own written account of the condition and how it affects you." },
  { key: "buddy", label: "Buddy / lay statements", hint: "Firsthand statements from people who know — VA Form 21-10210 or 21-4138." },
  { key: "nexus", label: "Nexus letter", hint: "A provider's medical opinion linking your condition to your service — see the guide's “Nexus” entry." },
  { key: "dd214", label: "DD214 / service records", hint: "DD214 or other separation documents, and your service records." },
];

/** VA.gov's claim status tool — verbatim from the Claims guide. */
export const VA_CLAIM_STATUS_URL = "https://www.va.gov/claim-or-appeal-status/";

export const CLAIM_TRACKER_HONESTY =
  "This tracker is your own organizer — it is NOT VA claim status, and it doesn't talk to VA. It holds only what you type in: your labels, your dates, your checkmarks. For the official status of a claim, use VA.gov's claim status tool (linked on every claim below).";

export const CLAIM_TRACKER_PRIVACY =
  "Private to your profile: your claims are stored under your profile only. No other member sees them, there's no review queue, and nothing here is shared or published.";

export const CLAIM_TRACKER_VSO_LINE =
  "For advice about your specific claim, a free accredited VSO representative is the right person — VA states their claim help is always free. The Claims guide's Free Help section finds one and verifies accreditation.";

/* ------------------------- Derived displays ------------------------- */

function parseDay(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

function todayStart(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export function fmtClaimDate(s: string): string {
  const d = parseDay(s);
  if (!d) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export type ItfCountdown = {
  /** The one-year deadline to file, formatted. */
  deadlineLabel: string;
  /** Whole days from today until the deadline (negative once passed). */
  daysLeft: number;
  /** Inside the 60-day window (or past it) — the countdown turns amber. */
  urgent: boolean;
  expired: boolean;
};

/**
 * The intent-to-file countdown, computed from the member's own entered
 * ITF date every render — never stored: the deadline is the ITF date
 * plus 1 year (the Claims guide's rule), and it turns amber inside 60
 * days, the same window the Alerts center uses.
 */
export function itfCountdown(itfDate: string): ItfCountdown | null {
  const itf = parseDay(itfDate);
  if (!itf) return null;
  const deadline = new Date(itf);
  deadline.setFullYear(deadline.getFullYear() + 1);
  const daysLeft = Math.round((deadline.getTime() - todayStart().getTime()) / 86_400_000);
  return {
    deadlineLabel: deadline.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    daysLeft,
    urgent: daysLeft <= 60,
    expired: daysLeft < 0,
  };
}
