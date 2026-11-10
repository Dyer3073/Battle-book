// Branch tagging helpers — dependency-free on purpose: the search
// index, the scope chrome, and the data modules all need the same
// canonical branch vocabulary without pulling in React or the API
// client. Canonical branch strings match data.ts BRANCHES exactly.

export const SIX_BRANCHES = ["Marine Corps", "Army", "Navy", "Air Force", "Space Force", "Coast Guard"] as const;

/** Short plain-language name for the toggle label: "My branch (Marines)". */
export function branchShort(branch: string): string {
  switch (branch) {
    case "Marine Corps":
      return "Marines";
    case "Army":
      return "Army";
    case "Navy":
      return "Navy";
    case "Air Force":
      return "Air Force";
    case "Space Force":
      return "Space Force";
    case "Coast Guard":
      return "Coast Guard";
    default:
      return branch;
  }
}

/**
 * The branch a label / tile / entry name belongs to, when the text
 * itself names one service (the group-level tagging grain the spec
 * sanctions for mixed sections). Returns the canonical branch string
 * or null when the text names no branch (universal) — multi-branch
 * text (two or more services named) also returns null, because it is
 * not another branch's content.
 */
export function branchNamedIn(text: string): string | null {
  const t = text.toLowerCase();
  const hits: string[] = [];
  if (t.includes("marine corps") || t.includes("usmc") || t.includes("marines")) hits.push("Marine Corps");
  if (/\barmy\b/.test(t)) hits.push("Army");
  if (/\bnavy\b/.test(t) || t.includes("naval")) hits.push("Navy");
  if (t.includes("air force") || t.includes("usaf") || /\bdaf\b/.test(t)) hits.push("Air Force");
  if (t.includes("space force") || t.includes("ussf")) hits.push("Space Force");
  if (t.includes("coast guard") || t.includes("uscg")) hits.push("Coast Guard");
  const unique = [...new Set(hits)];
  return unique.length === 1 ? (unique[0] ?? null) : null;
}

/**
 * Compare-ready branch name: service songs and a few older datasets
 * prefix "U.S." ("U.S. Marine Corps"); profiles never do. Normalizing
 * both sides makes badge / ranking comparisons exact.
 */
export function normalizeBranch(b: string): string {
  return b.replace(/^U\.S\.\s*/i, "").trim();
}

/**
 * Every canonical branch named in a text (set-based; "U.S. " prefixes
 * stripped first). Multi-service texts return several.
 */
export function branchesNamedIn(text: string): string[] {
  if (!text) return [];
  const cleaned = text.replace(/U\.S\.\s/g, "");
  return SIX_BRANCHES.filter((b) => cleaned.includes(b));
}

/**
 * Entry-level scope test (spec §A.1 class B/C): an entry stays
 * visible for a branch when it names that branch, names no branch
 * (universal), or names several including it. Hidden only when it
 * names branch(es) and none of them is the member's.
 */
export function visibleForBranch(text: string, branch: string | null | undefined): boolean {
  if (!branch) return true;
  const named = branchesNamedIn(text);
  if (named.length === 0) return true;
  return named.includes(normalizeBranch(branch));
}

/* ---------------- Household scope (Red-Team Round 2, F-1) ----------------
 * The reorganization's unit of personalization was one profile with
 * one branch; a dual-military household is two branches and one life.
 * These helpers are the second-branch concept in the scope model:
 * pure functions over the profile's branch fields, shared by the
 * scope chrome, the section filters, and search badging so the
 * household means the same thing everywhere. A profile with no
 * partner branch (and a non-serving spouse) behaves EXACTLY as the
 * single-branch model did — every helper below collapses to the
 * profile's own branch. */

export type HouseholdProfileLike = {
  branch: string;
  partnerBranch?: string | null;
  spouseOwnBranch?: string | null;
  track?: string | null;
};

function canonicalOrNull(b: string | null | undefined): string | null {
  if (!b) return null;
  const n = normalizeBranch(b);
  return (SIX_BRANCHES as readonly string[]).includes(n) ? n : null;
}

/**
 * The branch that is "mine" for this profile. For a serving spouse
 * (spouse track with an own branch set) that is their OWN branch —
 * never the member's. For everyone else it is the profile's branch
 * (for a non-serving spouse, the member's branch, per H-3).
 */
export function effectiveBranch(p: HouseholdProfileLike | null | undefined): string {
  if (!p) return "";
  if (p.track === "spouse") {
    const own = canonicalOrNull(p.spouseOwnBranch);
    if (own) return own;
  }
  return p.branch ?? "";
}

/**
 * The household's branches, own branch first: the profile's own
 * (effective) branch, plus — member track — the partner's branch
 * when set; — spouse track — BOTH the member's branch (the profile's
 * `branch` field) and a serving spouse's own branch. Empty when the
 * profile names no real branch (H-5: no filter at all).
 */
export function householdBranches(p: HouseholdProfileLike | null | undefined): string[] {
  if (!p) return [];
  const out: string[] = [];
  const push = (b: string | null) => {
    if (b && !out.includes(b)) out.push(b);
  };
  push(canonicalOrNull(effectiveBranch(p)));
  if (p.track === "spouse") push(canonicalOrNull(p.branch));
  push(canonicalOrNull(p.partnerBranch));
  return out;
}

/** The partner's branch for badging/labels, or null when the
 * household has only one branch. On a spouse profile the "partner"
 * is the service member (the profile's `branch` field) whenever the
 * spouse's own branch differs from it. */
export function partnerBranchOf(p: HouseholdProfileLike | null | undefined): string | null {
  if (!p) return null;
  const own = canonicalOrNull(effectiveBranch(p));
  for (const b of householdBranches(p)) {
    if (b !== own) return b;
  }
  return null;
}

/** Household scope test: visible when the text names no branch, or
 * names any of the household's branches (multi-branch grain exactly
 * as in visibleForBranch). Single-branch profiles: identical result
 * to visibleForBranch. */
export function visibleForBranches(text: string, branches: readonly string[]): boolean {
  if (branches.length === 0) return true;
  const named = branchesNamedIn(text);
  if (named.length === 0) return true;
  return named.some((n) => branches.includes(n));
}

/** Convenience: the household scope test straight from a profile. */
export function visibleForProfile(
  text: string,
  p: HouseholdProfileLike | null | undefined,
): boolean {
  return visibleForBranches(text, householdBranches(p));
}
