// Personalization scope chrome — the Personalization + Reorganization
// build (ux-reorg.md Part A). ONE control, everywhere the spec marks a
// section filterable: the Scope Toggle ("SHOWING: My branch (…) / All
// branches", plus "My MOS" only where MOS data is real), backed by the
// per-profile, per-section server store (section_scopes, migration
// 0029 — the profile is resolved server-side; no action accepts a
// profile id). The choice is a VIEW preference only: it changes
// rendering, never what the server serves, never search, never a lock.
//
// Hard rules honored here by construction:
//  H-1 crisis/safety sections never import this module's toggle —
//      Care & Crisis, the emergency deck, and every safety banner
//      render exactly as before under every scope state.
//  H-4 future profiles get NO hiding: the toggle never renders on the
//      future track (their branch is an interest, not a fact).
//  H-5 no branch on the profile → no filter: the toggle does not
//      render and the section shows everything (NoBranchNote carries
//      the completion prompt instead).
//  H-3 spouse profiles inherit the member's branch: a spouse
//      profile's `branch` already holds the service member's branch,
//      so the same default applies with no special case.

import { createContext, useContext, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";

export type ScopeValue = "mine" | "all" | "mos";

export type ScopeProfileLike = {
  id: number;
  branch: string;
  mosCode: string;
  track: "member" | "future" | "spouse";
  /** F-1 household scope: the partner's branch when set (member
   * track), and a serving spouse's own branch (spouse track). */
  partnerBranch?: string;
  spouseOwnBranch?: string;
};

import { branchShort, effectiveBranch, householdBranches, normalizeBranch, SIX_BRANCHES } from "./branchTag";
export { SIX_BRANCHES, branchShort, branchNamedIn, branchesNamedIn, visibleForBranch, visibleForBranches, visibleForProfile, effectiveBranch, householdBranches, partnerBranchOf, normalizeBranch } from "./branchTag";

/**
 * H-5's branch test: a profile HAS a branch only when it names one of
 * the six services. The profile form's "Other / Not yet serving" value
 * (and an empty string on older profiles) is no branch at all — such a
 * member gets no filter and the completion prompt, never a toggle
 * labeled with a non-branch.
 */
export function hasRealBranch(profile: ScopeProfileLike | null): boolean {
  if (!profile) return false;
  return (SIX_BRANCHES as readonly string[]).includes(normalizeBranch(profile.branch));
}

type ScopeCtxValue = {
  profile: ScopeProfileLike | null;
  scopes: Record<string, ScopeValue>;
  setScope: (sectionKey: string, scope: ScopeValue) => void;
  clearScopes: () => void;
  /** One-visit deep-land override (H-2): the view a search hit forced
   * into All-branches for this visit only. Never written to the store. */
  overrideView: string | null;
};

const ScopeCtx = createContext<ScopeCtxValue>({
  profile: null,
  scopes: {},
  setScope: () => {},
  clearScopes: () => {},
  overrideView: null,
});

export function ScopeProvider({
  profile,
  overrideView,
  children,
}: {
  profile: ScopeProfileLike | null;
  overrideView: string | null;
  children: ReactNode;
}) {
  const queryClient = useQueryClient();
  const profileId = profile?.id ?? 0;
  // Profile-scoped query key (the Calculators-lesson fix): one
  // profile's stored choices can never render under another profile.
  const scopesQ = useQuery({
    queryKey: ["sectionScopes", profileId],
    queryFn: () => api.getSectionScopes({}),
    enabled: profileId > 0,
  });
  const setMut = useMutation({
    mutationFn: (args: { sectionKey: string; scope: ScopeValue }) => api.setSectionScope(args),
    onSuccess: (data) => {
      queryClient.setQueryData(["sectionScopes", profileId], data);
    },
  });
  const clearMut = useMutation({
    mutationFn: () => api.clearSectionScopes({}),
    onSuccess: (data) => {
      queryClient.setQueryData(["sectionScopes", profileId], data);
    },
  });
  const value: ScopeCtxValue = {
    profile,
    scopes: scopesQ.data?.scopes ?? {},
    setScope: (sectionKey, scope) => setMut.mutate({ sectionKey, scope }),
    clearScopes: () => clearMut.mutate(),
    overrideView,
  };
  return <ScopeCtx.Provider value={value}>{children}</ScopeCtx.Provider>;
}

/**
 * Every view that implements the Scope Toggle, with its spec default
 * (ux-reorg.md §A.3). "mine" everywhere except Switch Branches, which
 * deliberately defaults to All branches (rule 17 — filtering it to
 * "my branch" would hide its purpose). Views absent from this map
 * have no toggle: universal (honesty line), personal, country/state-
 * shaped, ordering-only, or never-filtered (H-1).
 */
export const FILTERABLE_VIEWS: Record<string, ScopeValue> = {
  benefits: "mine",
  mos: "mine",
  uniforms: "mine",
  quals: "mine",
  cool: "mine",
  assignments: "mine",
  evals: "mine",
  relief: "mine",
  components: "mine",
  reenlist: "mine",
  commissioning: "mine",
  specops: "mine",
  family: "mine",
  education: "mine",
  medical: "mine",
  deals: "mine",
  readiness: "mine",
  changejob: "mine",
  switchbranches: "all",
  kids: "mine",
  travelhq: "mine",
  spousehub: "mine",
};

export type SectionScopeState = {
  /** The signed-in profile (null while loading / signed out). */
  profile: ScopeProfileLike | null;
  /** True when the toggle applies at all: a branch is set and the
   * track is member or spouse (never future — H-4). */
  applicable: boolean;
  /** The stored choice, when the member explicitly set one. */
  stored: ScopeValue | undefined;
  /** The effective scope after defaults + the one-visit override. */
  scope: ScopeValue;
  /** True when this render is All-branches only because a search hit
   * deep-landed here (H-2) — the stored preference is untouched. */
  isOverride: boolean;
  setScope: (scope: ScopeValue) => void;
  clearScopes: () => void;
};

/**
 * Resolve one section's scope. `defaultScope` is the spec default for
 * the section ("mine" everywhere except Switch Branches, which
 * deliberately defaults to "all").
 */
export function useSectionScope(
  sectionKey: string,
  opts?: { defaultScope?: ScopeValue },
): SectionScopeState {
  const ctx = useContext(ScopeCtx);
  const profile = ctx.profile;
  const applicable = Boolean(profile && hasRealBranch(profile) && profile.track !== "future");
  const stored = ctx.scopes[sectionKey];
  const isOverride = ctx.overrideView === sectionKey;
  const scope: ScopeValue = isOverride
    ? "all"
    : (stored ?? opts?.defaultScope ?? FILTERABLE_VIEWS[sectionKey] ?? "mine");
  return {
    profile,
    applicable,
    stored,
    scope,
    isOverride,
    setScope: (s) => ctx.setScope(sectionKey, s),
    clearScopes: ctx.clearScopes,
  };
}

/** The profile alone (views that only need branch/order logic). */
export function useScopeProfile(): ScopeProfileLike | null {
  return useContext(ScopeCtx).profile;
}

/**
 * View keys currently in a filtered view for the signed-in profile
 * (GlobalSearch's badge gate, R-6): the profile must be applicable
 * (branch set, not future) and the section's effective scope must not
 * be "all" — a one-visit override also un-filters its view.
 */
export function useFilteredViews(): string[] {
  const ctx = useContext(ScopeCtx);
  const profile = ctx.profile;
  if (!profile || !hasRealBranch(profile) || profile.track === "future") return [];
  return Object.keys(FILTERABLE_VIEWS).filter((key) => {
    if (ctx.overrideView === key) return false;
    const effective = ctx.scopes[key] ?? FILTERABLE_VIEWS[key] ?? "mine";
    return effective !== "all";
  });
}

const segBtn = (active: boolean) =>
  `min-h-11 rounded-full px-4 py-2 text-sm font-bold ${
    active
      ? "bg-[var(--accent)] text-[var(--accent-text)]"
      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
  }`;

/**
 * The Scope Toggle (spec §A.0): identical control, identical place —
 * directly under the section header, above the first tile or card.
 * `heldBack` is the count the CURRENT "mine" (or "mos") view holds
 * back; the state line always names it, so filtered content is never
 * silently vanished. Custom state lines (Switch Branches, Travel,
 * Weapons pinning) come in through `mineLine` / `allLine` / `mosLine`.
 */
export function ScopeToggle({
  sectionKey,
  itemNoun,
  heldBack,
  hasMos,
  defaultScope,
  mineLine,
  allLine,
  mosLine,
}: {
  sectionKey: string;
  /** The section's own plural noun: "entries", "cards", "jobs", "tiles". */
  itemNoun: string;
  heldBack: number;
  hasMos?: boolean;
  defaultScope?: ScopeValue;
  mineLine?: string;
  allLine?: string;
  mosLine?: string;
}) {
  const st = useSectionScope(sectionKey, { defaultScope });
  // Not applicable splits two ways: future members (H-4) get no
  // chrome at all; a member/spouse with no branch on the profile
  // (H-5) gets no filter, but does get the completion prompt.
  if (!st.applicable || !st.profile) return <NoBranchNote />;
  // F-1: the filtered scope is the HOUSEHOLD when the profile carries
  // a second branch (a partner who also serves, or a serving
  // spouse's own branch). `branch` here is the profile's effective
  // (own) branch; the toggle's first segment becomes "My household"
  // and its state line names both branches. Single-branch profiles
  // render exactly as before.
  const branch = effectiveBranch(st.profile);
  const household = householdBranches(st.profile);
  const isHousehold = household.length > 1;
  const short = branchShort(branch);
  const householdLabel = household.map((b) => branchShort(b)).join(" + ");
  const householdNames = household.join(" + ");
  const line =
    st.scope === "all"
      ? (allLine ??
        (st.isOverride
          ? "Showing everything in this section for this visit — a search result brought you here. Your saved view hasn't changed."
          : `Showing everything in this section — every branch.`))
      : st.scope === "mos"
        ? (mosLine ?? `Showing your job first — your MOS and the jobs closest to it. Everything else is one tap away under All branches.`)
        : (mineLine ??
          (isHousehold
            ? `Showing what's the same for everyone, plus ${householdNames} ${itemNoun} — your household. ${heldBack} ${itemNoun} for other branches ${heldBack === 1 ? "is" : "are"} one tap away.`
            : `Showing what's the same for everyone, plus ${branch} ${itemNoun}. ${heldBack} ${itemNoun} for other branches ${heldBack === 1 ? "is" : "are"} one tap away.`));
  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={`Showing scope — ${sectionKey}`}>
        <span className="text-xs font-bold tracking-widest text-[var(--dim)]">SHOWING</span>
        <button
          type="button"
          aria-label={isHousehold ? `Show my household — ${householdNames}` : `Show my branch — ${branch}`}
          aria-pressed={st.scope === "mine"}
          onClick={() => st.setScope("mine")}
          className={segBtn(st.scope === "mine")}
        >
          {isHousehold ? `My household (${householdLabel})` : `My branch (${short})`}
        </button>
        <button
          type="button"
          aria-label="Show all branches"
          aria-pressed={st.scope === "all"}
          onClick={() => st.setScope("all")}
          className={segBtn(st.scope === "all")}
        >
          All branches
        </button>
        {hasMos ? (
          <button
            type="button"
            aria-label="Show my MOS"
            aria-pressed={st.scope === "mos"}
            onClick={() => st.setScope("mos")}
            className={segBtn(st.scope === "mos")}
          >
            My MOS
          </button>
        ) : null}
        {st.scope === "mine" ? (
          <span className="inline-block rounded bg-[var(--accent)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--accent-text)]">
            {isHousehold ? "FOR MY HOUSEHOLD" : "FOR MY BRANCH"}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-sm text-[var(--dim)]" role="status">
        {line}
      </p>
    </div>
  );
}

/** The foot-of-list repeat (spec §A.0): same action as choosing All. */
export function ShowEverythingFooter({
  sectionKey,
  heldBack,
  defaultScope,
}: {
  sectionKey: string;
  heldBack: number;
  defaultScope?: ScopeValue;
}) {
  const st = useSectionScope(sectionKey, { defaultScope });
  if (!st.applicable || st.scope === "all" || heldBack <= 0) return null;
  return (
    <button
      type="button"
      aria-label="Show everything in this section"
      onClick={() => st.setScope("all")}
      className="mt-4 w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)]"
    >
      Show everything in this section ({heldBack} more from other branches)
    </button>
  );
}

/**
 * The Class U honesty line (spec §A.1): no fake toggle — one line in
 * the same slot the toggle would occupy, saying the section is the
 * same for every branch. Renders for member + spouse profiles with a
 * branch set; renders nothing on the future track.
 */
export function HonestyLine() {
  const profile = useScopeProfile();
  if (!profile || profile.track === "future" || !hasRealBranch(profile)) return null;
  return (
    <p className="mb-4 text-sm text-[var(--dim)]" role="note">
      The same for every branch — nothing here changes with your branch.
    </p>
  );
}

/**
 * H-5's section-level prompt: a member/spouse with no branch on the
 * profile gets no filter — the section shows everything and says why.
 */
export function NoBranchNote() {
  const profile = useScopeProfile();
  if (!profile || profile.track === "future" || hasRealBranch(profile)) return null;
  return (
    <p className="mb-4 text-sm text-[var(--dim)]" role="note">
      You&apos;re seeing everything in this section. Add your branch to your profile and sections like this one
      will lead with your branch.
    </p>
  );
}

/** Scope chrome for a filterable section whose view renders its own
 * toggle elsewhere or not at all: toggle when applicable, the
 * no-branch note when not. */
export function ScopeChromeNote({ sectionKey }: { sectionKey: string }) {
  const st = useSectionScope(sectionKey);
  if (st.applicable) return null;
  return <NoBranchNote />;
}

/**
 * R-2's reset, on Home's profile card: one tap clears every stored
 * SHOWING choice ("Show everything everywhere") — sections fall back
 * to their spec defaults. Renders only when a filterable profile
 * actually has stored choices to clear.
 */
export function ScopeResetButton() {
  const ctx = useContext(ScopeCtx);
  const stored = Object.keys(ctx.scopes).length;
  if (!ctx.profile || !hasRealBranch(ctx.profile) || ctx.profile.track === "future" || stored === 0) return null;
  return (
    <button
      type="button"
      aria-label="Show everything everywhere — clear all section filters"
      onClick={() => ctx.clearScopes()}
      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--text)]"
    >
      Show everything everywhere
    </button>
  );
}
