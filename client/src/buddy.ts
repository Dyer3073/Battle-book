// Battle Buddy retrieval — entirely client-side, over the same content
// the app itself renders. The corpus is the Global Search index
// (searchIndex.ts) plus two richer shapes the chat needs:
//   - Spouse Hub entries carry their per-service bullets and detail
//     paragraphs, because the figures live there, not in the summary.
//   - Library jobs carry a per-track text: members get the full entry
//     (duties, day in the life, career path, extra sections), future
//     members get the PUBLIC layer only — summary + school, the exact
//     shape toPublicEntry serves them in the UI. Deep job knowledge
//     cannot reach a future member through the chat because it is
//     never in their passages in the first place.
// Retrieval is a plain token-overlap rank over titles and text — no
// external calls. The server re-filters every passage against the
// asker's track allowlist before grounding, so this filter is the
// first of two gates, not the only one.

import { SEARCH_INDEX } from "./searchIndex";
import { SPOUSE_HUB_GROUPS } from "./spousehub";
import { ALL_MOS_ENTRIES } from "./data";

export type BuddyTrack = "member" | "future" | "spouse";

export type BuddyPassage = {
  section: string;
  view: string;
  title: string;
  text: string;
  anchor: string;
  mosId: string;
};

/** The future track's grounding scope — the same sections its Global
 * Search is limited to (FUTURE_SEARCH_SECTIONS in App.tsx). */
export const BUDDY_FUTURE_SECTIONS = [
  "MOS Library",
  "Benefits",
  "Boot Camp",
  "Becoming an Officer",
  "Get Ready",
  "Fitness Calculators",
  "Lingo",
  "Weapon Systems",
  "Annual Qualification",
  "Guard & Reserve",
  "Know Your Rights",
  "Partner Forces",
  "Songs, Anthem & Pledge + Flags",
  "Special Forces & Elite Units",
  "Allied Special Forces",
  "Qualifications, Schools & Certifications",
  "Connect with a Recruiter",
  "Commissioning from the Ranks",
  "Nutrition",
];

/** The spouse track's grounding scope — the spouse-open set. */
export const BUDDY_SPOUSE_SECTIONS = [
  "Spouse Hub",
  "Benefits",
  "Mail Call",
  "Deals & Discounts",
  "Family & Life Events",
  "Lingo",
  "Know Your Rights",
  "Family Care Plan & Deployment Readiness",
  "VA Home Loan Center",
  "Partner Forces",
  "Songs, Anthem & Pledge + Flags",
  "Kids & Schools",
  "Travel, Space-A & Lodging",
  "Tax & Residency",
  "Voting Center",
  "Health Care & TRICARE",
  "Switching Components",
  "Reenlistment & IRR",
  "Commissioning from the Ranks",
  "Credentials for Your Job",
  "How Assignments Work",
  "Veterans' Preference & Federal Jobs",
  "TSP Center",
  "Official Channels",
  "Relief Societies",
  "Pay Charts & Rates",
  "Chaplains & Religious Life",
  "Honors & Burial",
  "OCONUS Family Papers",
  "Nutrition",
  // Closure Sweep (Nov 9, 2026) — the spouse-open new sections.
  // Board Prep and Writing Helpers are member-only and stay out.
  "MEB/PEB (IDES) Guide",
  "CLEP/DANTES + JST",
  "Housing Pack",
  "Car-Buying Guide",
  "OPSEC & Social Media",
  "Give-Back",
  // Red-Team Gap Fills (Nov 9, 2026) — the spouse-open gap sections.
  // Barracks Daily Life is member-only and stays out.
  "Spouse Work Abroad & After a PCS",
  "VA Caregiver Support & EFMP Respite",
  "Germany Living Guide",
  "Building Credit From Zero",
  "General Orders",
  "Retiree Uniform & Ceremony",
];

type Doc = BuddyPassage & { code?: string };

function clipText(s: string, n: number): string {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}

let DOCS: Doc[] | null = null;

function buildDocs(): Doc[] {
  if (DOCS) return DOCS;
  const out: Doc[] = [];

  // Global Search index — every section at entry level. Library hits
  // are rebuilt below from the entries themselves (per-track text), so
  // they are skipped here.
  for (const hit of SEARCH_INDEX) {
    if (hit.section === "MOS Library" || hit.section === "Spouse Hub") continue;
    out.push({
      section: hit.section,
      view: hit.view,
      title: hit.title,
      text: hit.summary,
      anchor: hit.anchor ?? "",
      mosId: "",
    });
  }

  // Spouse Hub — full card text: summary, detail paragraphs, the
  // per-service bullets, and the entry's flag, so a per-service figure
  // (license reimbursement above all) can ground an answer.
  for (const g of SPOUSE_HUB_GROUPS) {
    for (const e of g.entries) {
      const parts: string[] = [e.summary];
      if (e.who) parts.push(`Who it's for / when: ${e.who}`);
      for (const d of e.details ?? []) parts.push(d);
      for (const b of e.bullets ?? []) parts.push(`${b.title ? `${b.title}: ` : ""}${b.text}`);
      if (e.flag) parts.push(`Note: ${e.flag}`);
      out.push({
        section: "Spouse Hub",
        view: "spousehub",
        title: e.name,
        text: clipText(parts.join(" "), 3600),
        anchor: g.title,
        mosId: "",
      });
    }
  }

  DOCS = out;
  return out;
}

function mosDoc(track: BuddyTrack, e: (typeof ALL_MOS_ENTRIES)[number]): Doc {
  if (track === "future") {
    // Public layer only — the same fields toPublicEntry keeps.
    return {
      section: "MOS Library",
      view: "mos",
      title: `${e.code} — ${e.title}`,
      text: clipText(`${e.branch} · ${e.field} · ${e.summary} School / training: ${e.school}`, 1200),
      anchor: "",
      mosId: e.id,
      code: e.code,
    };
  }
  const parts: string[] = [e.summary];
  if (e.duties.length > 0) parts.push(`What the job involves: ${e.duties.join("; ")}`);
  parts.push(`School / training: ${e.school}`);
  if (e.requirements) parts.push(`Requirements: ${e.requirements}`);
  if (e.dayInLife) parts.push(`Day in the life: ${e.dayInLife}`);
  if (e.careerPath) parts.push(`Career path: ${e.careerPath}`);
  for (const s of e.extraSections ?? []) {
    parts.push(`${s.heading}: ${s.body ?? ""} ${(s.bullets ?? []).join("; ")}`);
  }
  if (e.civilian) parts.push(`Civilian transferable skills: ${e.civilian}`);
  return {
    section: "MOS Library",
    view: "mos",
    title: `${e.code} — ${e.title}`,
    text: clipText(parts.join(" "), 3600),
    anchor: "",
    mosId: e.id,
    code: e.code,
  };
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "is", "are",
  "was", "were", "what", "when", "where", "which", "who", "how", "do", "does",
  "did", "can", "could", "should", "would", "i", "me", "my", "you", "your",
  "it", "its", "this", "that", "with", "about", "tell", "get", "got", "have",
  "has", "had", "be", "been", "am", "if", "so", "just", "like", "from",
]);

function queryTokens(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

/**
 * Ranked retrieval for one chat message, restricted to the asker's
 * track before scoring. Returns at most 5 passages, best first.
 * Conversational messages (no content tokens, or nothing matches)
 * return an empty list — the server treats that as "just talk".
 */
export function retrieveForBuddy(query: string, track: BuddyTrack): BuddyPassage[] {
  const tokens = queryTokens(query);
  if (tokens.length === 0) return [];
  const allowed =
    track === "future" ? BUDDY_FUTURE_SECTIONS : track === "spouse" ? BUDDY_SPOUSE_SECTIONS : null;

  const docs: Doc[] = [
    ...buildDocs().filter((d) => !allowed || allowed.includes(d.section)),
    ...(track === "spouse" ? [] : ALL_MOS_ENTRIES.map((e) => mosDoc(track, e))),
  ];

  const q = query.trim().toLowerCase();
  const scored: { doc: Doc; score: number }[] = [];
  for (const doc of docs) {
    const title = doc.title.toLowerCase();
    const text = doc.text.toLowerCase();
    let score = 0;
    if (doc.code && tokens.includes(doc.code.toLowerCase())) score += 12;
    if (title.includes(q) && q.length > 3) score += 8;
    for (const t of tokens) {
      if (title.includes(t)) score += 4;
      else if (text.includes(t)) score += 1;
    }
    if (score > 0) scored.push({ doc, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map(({ doc }) => ({
    section: doc.section,
    view: doc.view,
    title: doc.title,
    text: doc.text,
    anchor: doc.anchor,
    mosId: doc.mosId,
  }));
}
