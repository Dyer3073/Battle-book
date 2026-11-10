// ── Essentials lane — "Essentials — start here" (Nov 10, 2026) ─────
//
// A curated doorway layer on Home, one list PER TRACK (member /
// spouse / future), built ONLY from sections that already exist in
// the book. Every card is a shortcut to a real, existing view via
// the shell's normal navigation (the same `go` routing Home's own
// browse cards and the For You row use) — the lane adds NO new
// content, NO new claims, and NO new numbers, and it stores nothing:
// the lists are static curation in this module, so there is no
// per-profile data, no server surface, and no migration.
//
// Scope safety is by construction plus audit:
//  - member: the member shell opens every view, so no filtering
//    applies (exactly like Home's browse index and the Pinned row
//    with allowedViews = null).
//  - spouse: every view below is in App.tsx's spouseViews whitelist.
//  - future: every view below is in App.tsx's futureViews whitelist
//    — no member-only destination (no Care & Crisis view, no LES, no
//    First 30 Days, no My Installation, no Field Tools) appears in
//    the future list. The future shell's existing crisis surface
//    (the 988 strip on Start Here) is untouched and unduplicated.
// Crisis/safety posture: for member and spouse, Care & Crisis and
// the Emergency Deck lead the lane as NORMAL doorway cards pointing
// at the existing surfaces — their content is never re-implemented
// here, and the lane does not displace or bury them: it sits BELOW
// the Pinned row and the For You row on member/spouse Home (and
// below Pinned on future Start Here, which has no For You row).
//
// Placement (consistent across shells): member Home — Pinned (top)
// → For You → Essentials → In the field; spouse Home — Pinned →
// For You → Essentials → the open-cards grid; future Start Here —
// Pinned → Essentials → the area doors grid. In the field is
// untouched in place and content.

export type EssentialsTrack = "member" | "spouse" | "future";

export interface EssentialDoor {
  /** App.tsx View key, kept as a plain string so this module stays
   * dependency-free (the changelog.ts pattern); App.tsx casts at
   * the call site. */
  view: string;
  /** Small uppercase kicker — the destination section's own name. */
  kicker: string;
  /** The destination's existing plain-language title. */
  title: string;
  /** One short doorway line, describing the existing section only. */
  blurb: string;
}

export const ESSENTIALS: Record<EssentialsTrack, EssentialDoor[]> = {
  // Serving member — safety first, then pay, benefits, health,
  // installation/admin, family readiness, housing, and the field kit.
  member: [
    {
      view: "care",
      kicker: "Care & Crisis",
      title: "Care & Crisis",
      blurb: "Crisis lines pinned at the top of that section, then Vet Centers, VA health enrollment, housing help, and funeral honors.",
    },
    {
      view: "emergencydeck",
      kicker: "When It Goes Wrong",
      title: "When It Goes Wrong",
      blurb: "The first-24-hours emergency deck: calm, ordered action cards for the moments that cannot wait.",
    },
    {
      view: "emergency",
      kicker: "My Emergency Card",
      title: "My Emergency Card",
      blurb: "Your private quick card — emergency contacts, unit, blood type, allergies, and medications. Only you can see it.",
    },
    {
      view: "les",
      kicker: "Your Pay Stub, Explained",
      title: "Your Pay Stub, Explained",
      blurb: "Read your own pay stub field by field, so your first paychecks make sense.",
    },
    {
      view: "benefits",
      kicker: "Benefits",
      title: "Benefits",
      blurb: "VA & DoD benefits and your branch's own programs — what applies while you serve and what applies after.",
    },
    {
      view: "healthhq",
      kicker: "Health Care & TRICARE",
      title: "Health Care & TRICARE",
      blurb: "Which door for what: enrollment and DEERS, records and appointments, claims, pharmacy, and the Nurse Advice Line.",
    },
    {
      view: "installation",
      kicker: "My Installation",
      title: "My Installation",
      blurb: "Set your installation once and open its on-base guide, the national locators, and what's around it.",
    },
    {
      view: "first30",
      kicker: "First 30 Days",
      title: "First 30 Days",
      blurb: "Your first month at a new duty station as a checkable path, in the order the deadlines fall.",
    },
    {
      view: "deployment",
      kicker: "Family Care Plan & Deployment Readiness",
      title: "Family Care Plan & Deployment Readiness",
      blurb: "Who must have a Family Care Plan, your service's form and timeline, and the pre-deployment checklist.",
    },
    {
      view: "homeloan",
      kicker: "VA Home Loan Center",
      title: "VA Home Loan Center",
      blurb: "The COE first, then entitlement and the funding fee exactly as VA publishes them. No lenders, no rates.",
    },
    {
      view: "fieldtools",
      kicker: "Field Tools",
      title: "Field Tools",
      blurb: "The on-device field kit — compass and grid tools, Land Navigation, First Aid, Knots, Signals, and the pocket deck.",
    },
  ],

  // Spouse/partner — safety first, then the spouse-first hub, the
  // family's admin backbone (DEERS/ID, kids, care plan), benefits
  // and health, the installation landing, and the VA home loan
  // (which the existing section covers in a surviving spouse's own
  // name — the veteran-flavored pick this shell already supports).
  spouse: [
    {
      view: "care",
      kicker: "Care & Crisis",
      title: "Care & Crisis",
      blurb: "Crisis lines pinned first in that section, then Vet Centers, housing help, and the aid societies' emergency help.",
    },
    {
      view: "emergencydeck",
      kicker: "When It Goes Wrong",
      title: "When It Goes Wrong",
      blurb: "The first-24-hours deck, in full for families: calm, ordered action cards when something goes wrong.",
    },
    {
      view: "emergency",
      kicker: "My Emergency Card",
      title: "My Emergency Card",
      blurb: "Your own private quick card — emergency contacts with one-tap call buttons, blood type, allergies, medications.",
    },
    {
      view: "spousehub",
      kicker: "Spouse Hub",
      title: "Spouse Hub",
      blurb: "Start here, spouse-first: orientation, careers and licenses, money and legal, deployment support, and scholarships.",
    },
    {
      view: "family",
      kicker: "Family & Life Events",
      title: "Family & Life Events",
      blurb: "DEERS and ID cards, childcare and school, EFMP by branch, and the support centers and counselors.",
    },
    {
      view: "benefits",
      kicker: "Benefits",
      title: "Benefits",
      blurb: "VA & DoD benefits, TRICARE, and branch programs — the full Benefits section, open to you.",
    },
    {
      view: "healthhq",
      kicker: "Health Care & TRICARE",
      title: "Health Care & TRICARE",
      blurb: "Which door for what: enrollment and DEERS, records and appointments, claims, pharmacy, and the Nurse Advice Line.",
    },
    {
      view: "kids",
      kicker: "Kids & Schools",
      title: "Kids & Schools",
      blurb: "School Liaisons, the Interstate Compact, IEP & 504 continuity, DoDEA, homeschooling, and youth programs.",
    },
    {
      view: "deployment",
      kicker: "Family Care Plan & Deployment Readiness",
      title: "Family Care Plan & Deployment Readiness",
      blurb: "The plan that says who cares for your family when duty takes your member away — forms, timelines, and the checklist.",
    },
    {
      view: "installation",
      kicker: "My Installation",
      title: "My Installation",
      blurb: "Set your family's installation and open its on-base guide, the national locators, and what's off base around it.",
    },
    {
      view: "first30",
      kicker: "First 30 Days",
      title: "First 30 Days",
      blurb: "Your family's first month at the new station as a checkable path — childcare, school, EFMP, and spouse employment.",
    },
    {
      view: "homeloan",
      kicker: "VA Home Loan Center",
      title: "VA Home Loan Center",
      blurb: "Buying on the VA benefit, including in a surviving spouse's own name: the COE, entitlement, and VA's own help. No lenders, no rates.",
    },
  ],

  // Future member — ONLY destinations in the future shell's
  // whitelist: joining explainers, the public jobs layer, fully open
  // Benefits, fitness prep, and the before-you-sign doors.
  future: [
    {
      view: "bootcamp",
      kicker: "Boot Camp",
      title: "Boot Camp",
      blurb: "What entry training is called, where it happens, how long it runs, and what to expect — for all six branches.",
    },
    {
      view: "mos",
      kicker: "Explore Jobs",
      title: "Explore Jobs",
      blurb: "Every job across all six branches at the public layer: what each job is and how its training pipeline runs.",
    },
    {
      view: "benefits",
      kicker: "Benefits",
      title: "Benefits",
      blurb: "The full Benefits section, open to you — what applies while you serve and what applies after.",
    },
    {
      view: "getready",
      kicker: "Get Ready",
      title: "Get Ready",
      blurb: "Your branch's published entry fitness standards and a preparation plan that counts down to your target date.",
    },
    {
      view: "fitness",
      kicker: "Fitness Calculators",
      title: "Fitness Calculators",
      blurb: "Score the branch test you're training for — each calculator names its governing document and date.",
    },
    {
      view: "recruiters",
      kicker: "Connect with a Recruiter",
      title: "Connect with a Recruiter",
      blurb: "Every branch's official door, plus the before-you-sign prep: get it in writing, MEPS, and DEP.",
    },
    {
      view: "rights",
      kicker: "Know Your Rights",
      title: "Know Your Rights",
      blurb: "The laws that protect you once you sign — SCRA, USERRA, and the MLA — from the agencies that run them.",
    },
    {
      view: "paycharts",
      kicker: "Pay Charts & Rates",
      title: "Pay Charts & Rates",
      blurb: "What the pay actually is before you sign: the official basic pay tables and how to read them.",
    },
    {
      view: "lingo",
      kicker: "Lingo",
      title: "Lingo",
      blurb: "The phonetic alphabet and the plain-English dictionary — learn the language before you're living in it.",
    },
    {
      view: "officer",
      kicker: "Becoming an Officer",
      title: "Becoming an Officer",
      blurb: "Each branch's OCS or OTS and the qualifications to commission, quoted as the branch publishes them.",
    },
  ],
};

/**
 * The Essentials lane itself. A horizontal doorway row in the same
 * visual family as the Pinned and For You rows (min-w cards, surface
 * border, display title) — deliberately NOT the amber Pinned
 * treatment and NOT the accent For You treatment, so the three rows
 * are never confused. Every card is a button that opens its real
 * destination through the shell's existing navigation.
 */
export function EssentialsLane({
  track,
  go,
}: {
  track: EssentialsTrack;
  go: (view: string) => void;
}) {
  const doors = ESSENTIALS[track];
  return (
    <section aria-label="Essentials — start here" className="mt-5">
      <h2 className="font-display mb-1 text-xl font-bold text-[var(--text)]">Essentials — start here</h2>
      <p className="mb-3 text-sm text-[var(--dim)]">
        The essentials first, in order — shortcuts to sections already in the book.
      </p>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {doors.map((d) => (
          <button
            key={d.view}
            type="button"
            aria-label={`Essentials: open ${d.title}`}
            onClick={() => go(d.view)}
            className="min-w-44 flex-1 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-left"
          >
            <span className="block text-xs font-bold tracking-widest text-[var(--dim)]">
              {d.kicker.toUpperCase()}
            </span>
            <span className="font-display mt-1 block text-base font-bold leading-tight text-[var(--text)]">
              {d.title}
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-[var(--dim)]">{d.blurb}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
