// The second-wave six sections (Nov 9, 2026): Security Clearance
// Center, Kids & Schools, Military Travel HQ, Tax & Residency,
// Voting Center, and My Health HQ — each built from its researched
// pack under ~/workspace/military-app/, the pack being the content
// source of truth (structure, sources, flags printed visibly, and
// exclusions honored exactly). All six use the hub-of-square-tiles
// pattern: one tile per group from the pack's own group structure,
// each tile's list carrying its own search bar pinned at top, and
// global-search / Binder deep links resolving through the tiles
// (focusAnchor names the group, focusCard names the entry).

import { useEffect, useState, type ReactNode } from "react";
import { RefCard, SectionHead } from "./NewSections";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { anchorSlug } from "./paths";
import type { RefGroup } from "./refdata";
import { HonestyLine, ScopeToggle, useSectionScope, useScopeProfile } from "./scope";
import { branchNamedIn } from "./branchTag";
import { CLEARANCE_GROUPS, CLEARANCE_INTRO, CLEARANCE_STANDING } from "./clearance";
import { KIDS_GROUPS, KIDS_INTRO, KIDS_STANDING } from "./kids";
import { TRAVEL_GROUPS, TRAVEL_INTRO } from "./travelhq";
import { TAXES_GROUPS, TAXES_INTRO, TAXES_STANDING } from "./taxes";
import { VOTING_GROUPS, VOTING_INTRO, VOTING_STANDING } from "./voting";
import { HEALTH_GROUPS, HEALTH_INTRO, HEALTH_STANDING } from "./healthhq";

function IntroCard({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
      <p className="text-base text-[var(--text)]">{children}</p>
    </div>
  );
}

type TileDef = { key: string; label: string };

function tileForFocus(
  groups: readonly RefGroup[],
  tiles: readonly TileDef[],
  focusAnchor?: string | null,
  focusCard?: string | null,
): string | null {
  if (focusAnchor) {
    const slug = anchorSlug(focusAnchor);
    const gi = groups.findIndex((g) => anchorSlug(g.title) === slug);
    if (gi >= 0) return tiles[gi]?.key ?? null;
  }
  if (focusCard) {
    const gi = groups.findIndex((g) => g.entries.some((e) => e.name === focusCard));
    if (gi >= 0) return tiles[gi]?.key ?? null;
  }
  return null;
}

export function RefHubView({
  title,
  sub,
  standing,
  intro,
  groups,
  tiles,
  section,
  focusAnchor,
  focusCard,
  chrome,
  leadEntry,
}: {
  title: string;
  sub: string;
  standing?: string;
  intro: string;
  groups: readonly RefGroup[];
  tiles: readonly TileDef[];
  section: string;
  focusAnchor?: string | null;
  focusCard?: string | null;
  /** Personalization chrome (Scope Toggle / honesty line) rendered
   * in the spec's slot: under the header + intro, above the tiles. */
  chrome?: ReactNode;
  /** Lead-order (never hiding): inside this group, the named entry
   * renders first (Kids' SLO-by-service entry, §A.3 rule 31). */
  leadEntry?: { groupTitle: string; entryName: string };
}) {
  const [tile, setTile] = useState<string | null>(() => tileForFocus(groups, tiles, focusAnchor, focusCard));
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);

  const activeIndex = tile === null ? -1 : tiles.findIndex((t) => t.key === tile);
  const activeGroup = activeIndex >= 0 ? groups[activeIndex] : undefined;
  const q = query.trim().toLowerCase();
  const filteredEntries = activeGroup
    ? activeGroup.entries.filter(
        (e) =>
          q === "" ||
          e.name.toLowerCase().includes(q) ||
          e.body.toLowerCase().includes(q) ||
          (e.bullets ?? []).some((b) => b.toLowerCase().includes(q)),
      )
    : [];
  const visibleEntries =
    leadEntry && activeGroup && leadEntry.groupTitle === activeGroup.title
      ? [
          ...filteredEntries.filter((e) => e.name === leadEntry.entryName),
          ...filteredEntries.filter((e) => e.name !== leadEntry.entryName),
        ]
      : filteredEntries;

  return (
    <div>
      <SectionHead title={title} sub={sub} />
      {standing ? (
        <IntroCard>
          {standing}
          <span className="mt-2 block">{intro}</span>
        </IntroCard>
      ) : (
        <IntroCard>{intro}</IntroCard>
      )}
      {chrome ?? null}

      {tile === null || !activeGroup ? (
        <HubTileGrid
          label={`${title} areas`}
          onOpen={(key) => {
            setQuery("");
            setTile(key);
          }}
          tiles={tiles.map((t, i) => ({
            key: t.key,
            label: t.label,
            sub: `${groups[i]?.entries.length ?? 0} ${groups[i]?.entries.length === 1 ? "entry" : "entries"}`,
          }))}
        />
      ) : (
        <>
          <HubBackButton ariaLabel={`Back to ${title} areas`} text="All areas" onBack={() => setTile(null)} />
          <section aria-label={activeGroup.title}>
            <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">{activeGroup.title}</h3>
            <HubSearch
              id={`hub-search-${section}-${activeIndex}`}
              label={`Search ${activeGroup.title}`}
              ariaLabel={`Search entries in ${activeGroup.title}`}
              value={query}
              onChange={setQuery}
              placeholder="Search these entries…"
            />
            {activeGroup.note ? (
              <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="text-sm text-[var(--text)]">{activeGroup.note}</p>
              </div>
            ) : null}
            {visibleEntries.length === 0 ? (
              <p className="text-base text-[var(--dim)]">
                No entries in this area match “{query}” — clear the search to see all {activeGroup.entries.length}.
              </p>
            ) : (
              <div className="space-y-3">
                {visibleEntries.map((e) => (
                  <RefCard key={e.name} entry={e} section={section} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

/* ------------------------- Security Clearance Center ------------------------ */

export function ClearanceView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  return (
    <RefHubView
      title="Security Clearances"
      sub="The rules and the timeline from the agency itself — DCSA's own public material on the levels, the process, the 13 SEAD 4 guidelines, and the self-reporting duty that never switches off. No processing-time figures appear here: DCSA's applicant pages publish none, and none were imported."
      standing={CLEARANCE_STANDING}
      intro={CLEARANCE_INTRO}
      groups={CLEARANCE_GROUPS}
      section="clearance"
      tiles={[
        { key: "levels", label: "The Levels & the Investigations" },
        { key: "process", label: "The Process, End to End" },
        { key: "guidelines", label: "The 13 Adjudicative Guidelines" },
        { key: "selfreport", label: "Self-Reporting" },
        { key: "holding", label: "While You Hold It, and When You Leave" },
        { key: "myths", label: "Myths vs. the Agency's Facts" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
      chrome={<HonestyLine />}
    />
  );
}

/* ------------------------------- Kids & Schools ----------------------------- */

function KidsChrome() {
  // Rule 31: the per-service SLO facts live inside one entry ("The
  // program's name in your service" — including the Coast Guard
  // finding that there is no CG liaison corps). The My-branch view
  // LEADS with that entry inside the SLO group; nothing is hidden.
  const st = useSectionScope("kids");
  if (!st.applicable || !st.profile) return null;
  return (
    <ScopeToggle
      sectionKey="kids"
      itemNoun="entries"
      heldBack={0}
      mineLine={`Showing the School Liaison group with your branch's route first — "The program's name in your service" leads it, with ${st.profile.branch}'s program and contacts. Everything else in this section is the same for every branch and stays in place.`}
      allLine="Showing this section in its normal order — the School Liaison group leads with its general entries."
    />
  );
}

export function KidsView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const st = useSectionScope("kids");
  const lead =
    st.applicable && st.scope !== "all"
      ? { groupTitle: "School Liaison Officers", entryName: "The program's name in your service" }
      : undefined;
  return (
    <RefHubView
      title="Kids & Schools"
      sub="School Liaisons, the Interstate Compact provision by provision from the Commission at mic3.net, IEP & 504 continuity, the PCS paper drill, DoDEA / NDSP / DVHS, Impact Aid, homeschooling, and youth programs — for members and spouses alike."
      standing={KIDS_STANDING}
      intro={KIDS_INTRO}
      groups={KIDS_GROUPS}
      section="kids"
      tiles={[
        { key: "slo", label: "School Liaison Officers" },
        { key: "mic3", label: "The Interstate Compact (MIC3)" },
        { key: "iep", label: "IEP & 504 Continuity" },
        { key: "records", label: "Records & the PCS Paper Drill" },
        { key: "dodea", label: "DoDEA" },
        { key: "impact", label: "Impact Aid" },
        { key: "homeschool", label: "Homeschooling" },
        { key: "youth", label: "Youth Programs" },
        { key: "crosslinks", label: "Cross-Links & Standing Flags" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
      chrome={<KidsChrome />}
      leadEntry={lead}
    />
  );
}

/* ----------------------------- Military Travel HQ --------------------------- */

function TravelChrome() {
  // Rule 34 (the lightest touch in Part A): lodging is ordered for
  // your branch — everything is still here; sister-service resorts
  // stay, because members use them.
  const st = useSectionScope("travelhq");
  if (!st.applicable || !st.profile) return null;
  return (
    <ScopeToggle
      sectionKey="travelhq"
      itemNoun="entries"
      heldBack={0}
      mineLine={`Ordered for your branch — your branch's lodging leads the Staying group. Everything is still here: members use sister-service resorts too.`}
      allLine="Showing this section in its normal order."
    />
  );
}

export function TravelHqView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const st = useSectionScope("travelhq");
  const profile = useScopeProfile();
  const orderedGroups =
    st.applicable && st.scope !== "all" && profile
      ? TRAVEL_GROUPS.map((g) => {
          if (g.title !== "Staying — Lodging & the AFRC Resorts") return g;
          const mine = g.entries.filter((e) => branchNamedIn(e.name) === profile.branch);
          const rest = g.entries.filter((e) => branchNamedIn(e.name) !== profile.branch);
          return { ...g, entries: [...mine, ...rest] };
        })
      : TRAVEL_GROUPS;
  return (
    <RefHubView
      title="Travel, Space-A & Lodging"
      sub="Space-A done properly (DoDI 4515.13 Table 3, the 60-day register, roll call), Patriot Express, DoD lodging and the four AFRC resorts, the booking channels, and the airport benefits. No prices anywhere in this section — structures are described and amounts live on the official pages."
      intro={TRAVEL_INTRO}
      groups={orderedGroups}
      section="travelhq"
      tiles={[
        { key: "spacea", label: "Space-A Center" },
        { key: "pe", label: "Patriot Express" },
        { key: "staying", label: "Staying — Lodging & AFRCs" },
        { key: "booking", label: "Booking Channels" },
        { key: "airport", label: "Airport Benefits" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
      chrome={<TravelChrome />}
    />
  );
}

/* ------------------------------ Tax & Residency ----------------------------- */

export function TaxesView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  return (
    <RefHubView
      title="Tax & Residency"
      sub="MilTax's free filing, the IRS combat-zone formula (service + 180 days + the days left when you entered), domicile and the SCRA, and the MSRRA three-way election from the enrolled text of 50 U.S.C. § 4001(a)(3) — IRS positions printed where OneSource's summaries differ, with the differences flagged."
      standing={TAXES_STANDING}
      intro={TAXES_INTRO}
      groups={TAXES_GROUPS}
      section="taxes"
      tiles={[
        { key: "miltax", label: "MilTax: Free Filing" },
        { key: "combatzone", label: "Combat Zone & Deployment" },
        { key: "residency", label: "State Taxes & Residency" },
        { key: "federal", label: "Military-Specific Federal Items" },
        { key: "deadlines", label: "Deadlines & Calendar" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
      chrome={<HonestyLine />}
    />
  );
}

/* ------------------------------- Voting Center ------------------------------ */

export function VotingView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  return (
    <RefHubView
      title="Voting Center"
      sub="FVAP's process, taught once and correctly: the FPCA every January and every move, the 45-day MOVE Act protection, the FWAB backup — and every state deadline routed to FVAP's own state tool. Zero state deadlines are cataloged here, by design."
      standing={VOTING_STANDING}
      intro={VOTING_INTRO}
      groups={VOTING_GROUPS}
      section="voting"
      tiles={[
        { key: "fpca", label: "The One Form That Gets Your Ballot (FPCA)" },
        { key: "ballot", label: "The Ballot" },
        { key: "timelines", label: "Timelines, as FVAP Publishes Them" },
        { key: "covered", label: "Who Is Covered & Residence" },
        { key: "firsttime", label: "First-Time Voters & Transitions" },
        { key: "scope", label: "Scope, Stated Honestly" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
      chrome={<HonestyLine />}
    />
  );
}

/* ------------------------------- My Health HQ ------------------------------- */

export function HealthHqView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  return (
    <div>
      {/* The pack's standing build instruction: the emergency routing
          ships as a fixed banner above the tiles, not a card to
          scroll past. TRICARE's framing, verbatim in substance. */}
      <div role="alert" className="mb-4 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-4">
        <p className="font-display text-lg font-bold text-[var(--text)]">Emergency? Call 911 — or your international emergency number</p>
        <p className="mt-1 text-base text-[var(--text)]">
          TRICARE&apos;s own words: “If you need immediate medical attention, call 911 or your international
          emergency number – or, go to an emergency room.” Emergency care never requires a referral or
          pre-authorization first; Prime enrollees notify their PCM within 24 hours or the next business day.
          Not sure it&apos;s an emergency? The MHS Nurse Advice Line is 24/7: 1-800-TRICARE (874-2273), option 1.
        </p>
      </div>
      <RefHubView
      title="Health Care & TRICARE"
      sub="A pure router: which portal does what — milConnect for enrollment/DEERS, MHS GENESIS for records and appointments, your regional contractor (East Humana Military, West TriWest, Overseas International SOS, TFL WPS) for claims and referrals, Express Scripts for pharmacy. No costs, no medical content, no coverage advice."
      standing={HEALTH_STANDING}
      intro={HEALTH_INTRO}
      groups={HEALTH_GROUPS}
      section="healthhq"
      tiles={[
        { key: "login", label: "The Login Layer: myAuth" },
        { key: "portals", label: "The Portals" },
        { key: "findcare", label: "Find Care" },
        { key: "plans", label: "Plans at a Glance" },
        { key: "dental", label: "Dental" },
        { key: "pharmacy", label: "Pharmacy" },
        { key: "records", label: "Your Health Records" },
      ]}
      focusAnchor={focusAnchor}
      focusCard={focusCard}
        chrome={<HonestyLine />}
      />
    </div>
  );
}
