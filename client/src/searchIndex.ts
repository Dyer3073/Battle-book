// Global Search index — built once, entirely client-side, from the same
// static data modules the sections themselves render. No external calls
// and no duplicated content: each hit carries the section's display name,
// the view to open, and — where the section renders labeled groups — the
// group title as the deep-link anchor (the same aria-label scroll
// mechanism Guided Paths uses). Library hits carry the entry id so the
// Library opens straight onto that job.

import { ALL_MOS_ENTRIES } from "./data";
import { PATHS } from "./paths";
import { BRANCH_BENEFITS, STATE_BENEFIT, UNIVERSAL_BENEFITS } from "./benefits";
import { DEAL_PLATFORMS, FINDER_SOURCES, ONBASE_GROUPS, STANDING_PROGRAMS } from "./deals";
import { TRANSITION_GROUPS } from "./transition";
import { EDUCATION_SECTIONS } from "./education";
import { MONEY_GROUPS } from "./money";
import { PCS_GROUPS } from "./pcs";
import { FAMILY_GROUPS } from "./family";
import { CLAIMS_GROUPS } from "./claims";
import { READINESS_GROUPS } from "./readiness";
import { RETIREMENT_GROUPS } from "./retirement";
import { RECORDS_GROUPS } from "./records";
import { CARE_GROUPS } from "./care";
import { FIND_GROUPS } from "./find";
import { CHANGE_JOB_GROUPS } from "./changejob";
import { SWITCH_GROUPS } from "./switchbranches";
import { STATE_ENTRIES } from "./states";
import { MACP, MCMAP_BELTS, OTHER_BRANCH_PROGRAMS } from "./combatives";
import { TRADITION_GROUPS } from "./traditions";
import { MAIL_GROUPS } from "./mailcall";

export type SearchHit = {
  /** Display name of the section the hit lives in. */
  section: string;
  /** App view key to open. */
  view: string;
  title: string;
  summary: string;
  /** aria-label of the target group inside the view, when it has one. */
  anchor?: string;
  /** Library entry id — the Library opens this entry directly. */
  mosId?: string;
  /** Exact-match key (a job code) for top-tier ranking. */
  code?: string;
};

function clip(s: string, n = 220): string {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}

type NamedEntry = { name: string; summary: string };
type NamedGroup = { title: string; entries: NamedEntry[] };

function groupHits(
  out: SearchHit[],
  section: string,
  view: string,
  groups: readonly NamedGroup[],
): void {
  for (const g of groups) {
    for (const e of g.entries) {
      out.push({ section, view, title: e.name, summary: clip(e.summary), anchor: g.title });
    }
  }
}

function buildIndex(): SearchHit[] {
  const out: SearchHit[] = [];

  // MOS Library — every job, deep-linked to its entry.
  for (const e of ALL_MOS_ENTRIES) {
    out.push({
      section: "MOS Library",
      view: "mos",
      title: `${e.code} — ${e.title}`,
      summary: clip(`${e.branch} · ${e.field} · ${e.summary}`),
      mosId: e.id,
      code: e.code,
    });
  }

  // Guided Paths.
  for (const p of PATHS) {
    out.push({
      section: "Guided Paths",
      view: "paths",
      title: p.name,
      summary: clip(p.blurb),
      anchor: `${p.name} path`,
    });
  }

  // Benefits — universal categories deep-link to their labeled section;
  // branch items name their branch in the summary (the branch picker is
  // member-controlled, so no anchor); the state entry sits at the bottom.
  for (const cat of UNIVERSAL_BENEFITS) {
    for (const item of cat.items) {
      out.push({ section: "Benefits", view: "benefits", title: item.name, summary: clip(item.summary), anchor: cat.title });
    }
  }
  for (const b of BRANCH_BENEFITS) {
    for (const item of b.items) {
      out.push({ section: "Benefits", view: "benefits", title: item.name, summary: clip(`${b.branch} · ${item.summary}`) });
    }
  }
  out.push({ section: "Benefits", view: "benefits", title: STATE_BENEFIT.name, summary: clip(STATE_BENEFIT.summary) });

  // Deals & Discounts — platforms lead the view; finder sources and the
  // on-base groups carry labeled sections to anchor to.
  for (const p of DEAL_PLATFORMS) {
    out.push({ section: "Deals & Discounts", view: "deals", title: p.name, summary: clip(p.what) });
  }
  for (const s of STANDING_PROGRAMS) {
    out.push({ section: "Deals & Discounts", view: "deals", title: s.name, summary: clip(s.note) });
  }
  for (const s of FINDER_SOURCES) {
    out.push({
      section: "Deals & Discounts",
      view: "deals",
      title: s.name,
      summary: clip(s.lists),
      anchor: "Find deals and events near you",
    });
  }
  for (const g of ONBASE_GROUPS) {
    for (const e of g.entries) {
      out.push({ section: "Deals & Discounts", view: "deals", title: e.name, summary: clip(e.body), anchor: g.title });
    }
  }

  // The grouped reference sections — one adapter, entry name + summary,
  // anchored to the group the section itself labels.
  groupHits(out, "Transition & Jobs", "transition", TRANSITION_GROUPS);
  groupHits(out, "Education Planner", "education", EDUCATION_SECTIONS);
  groupHits(out, "Pay & Money", "pay", MONEY_GROUPS);
  groupHits(out, "PCS Move Center", "pcs", PCS_GROUPS);
  groupHits(out, "Family & Life Events", "family", FAMILY_GROUPS);
  groupHits(out, "VA Claims & VSO Guide", "claims", CLAIMS_GROUPS);
  groupHits(out, "Readiness & Life Skills", "readiness", READINESS_GROUPS);
  groupHits(out, "Retirement Hub", "retirement", RETIREMENT_GROUPS);
  groupHits(out, "Records & DD214 Center", "records", RECORDS_GROUPS);
  groupHits(out, "Care & Crisis", "care", CARE_GROUPS);
  groupHits(out, "Find Anything", "find", FIND_GROUPS);
  groupHits(out, "Change Your Job", "changejob", CHANGE_JOB_GROUPS);
  groupHits(out, "Switch Branches", "switchbranches", SWITCH_GROUPS);
  groupHits(out, "Traditions & Lore", "traditions", TRADITION_GROUPS);
  groupHits(out, "Mail Call", "mailcall", MAIL_GROUPS);

  // Pay & Money — the LES block-by-block decoder lives inside its group.
  for (const g of MONEY_GROUPS) {
    for (const b of g.lesBlocks ?? []) {
      out.push({
        section: "Pay & Money",
        view: "pay",
        title: `LES decoder: ${b.title}`,
        summary: clip(b.text),
        anchor: g.title,
      });
    }
  }

  // State Benefits — by state name, anchored to the state's own button.
  for (const s of STATE_ENTRIES) {
    out.push({
      section: "State Benefits Finder",
      view: "states",
      title: s.state,
      summary: clip(`${s.agency} · ${s.bullets.map((b) => b.text).join(" ")}`),
      anchor: `Open ${s.state} benefits`,
    });
  }

  // Close Combat — belts, technique groups, MACP, and the other branches'
  // programs, anchored to the sections CombatView labels.
  for (const belt of MCMAP_BELTS) {
    out.push({
      section: "Close Combat",
      view: "combat",
      title: `${belt.belt} — MCMAP`,
      summary: clip(`${belt.focus} ${belt.signifies}`),
      anchor: belt.belt,
    });
    for (const g of belt.groups) {
      out.push({
        section: "Close Combat",
        view: "combat",
        title: g.family,
        summary: clip(
          g.note ?? `${belt.belt} · ${g.techniques.map((t) => t.name).join(", ")}`,
        ),
        anchor: belt.belt,
      });
    }
  }
  out.push({ section: "Close Combat", view: "combat", title: MACP.name, summary: clip(MACP.purpose), anchor: "Army Combatives" });
  for (const lvl of MACP.levels) {
    out.push({ section: "Close Combat", view: "combat", title: lvl.name, summary: clip(lvl.purpose), anchor: "Army Combatives" });
  }
  for (const p of OTHER_BRANCH_PROGRAMS) {
    out.push({ section: "Close Combat", view: "combat", title: p.branch, summary: clip(p.text), anchor: "Other branch programs" });
  }

  return out;
}

export const SEARCH_INDEX: SearchHit[] = buildIndex();

export type SearchGroup = { section: string; hits: SearchHit[] };

const PER_SECTION_CAP = 6;
const TOTAL_CAP = 48;

/**
 * Ranked search: exact title/code matches first, then title keyword
 * matches, then summary keyword matches. Multi-word queries also match
 * when every word appears (title for tier 2, title+summary for tier 3).
 * Results come back grouped by section, in index (section) order.
 */
export function runGlobalSearch(rawQuery: string): SearchGroup[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored: { hit: SearchHit; tier: number; idx: number }[] = [];
  SEARCH_INDEX.forEach((hit, idx) => {
    const title = hit.title.toLowerCase();
    const summary = hit.summary.toLowerCase();
    let tier = -1;
    if ((hit.code && hit.code.toLowerCase() === q) || title === q) tier = 0;
    else if (title.includes(q) || tokens.every((t) => title.includes(t))) tier = 1;
    else if (summary.includes(q) || tokens.every((t) => `${title} ${summary}`.includes(t))) tier = 2;
    if (tier >= 0) scored.push({ hit, tier, idx });
  });
  scored.sort((a, b) => a.tier - b.tier || a.idx - b.idx);

  const groups: SearchGroup[] = [];
  const bySection = new Map<string, SearchGroup>();
  let total = 0;
  for (const s of scored) {
    if (total >= TOTAL_CAP) break;
    let g = bySection.get(s.hit.section);
    if (!g) {
      g = { section: s.hit.section, hits: [] };
      bySection.set(s.hit.section, g);
      groups.push(g);
    }
    if (g.hits.length >= PER_SECTION_CAP) continue;
    g.hits.push(s.hit);
    total += 1;
  }
  return groups;
}
