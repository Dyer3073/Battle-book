// Guided Paths — named journeys chained entirely from sections and groups
// that already exist in the app. No new facts live here: each step points
// at the section (and, where the section renders labeled groups, the exact
// group) that already documents the task. `anchor` is the target section's
// aria-label; App scrolls to the element whose aria-label slug matches.
//
// Step titles are deliberately short (3–8 words): what to do, not a lesson.

export type PathStepDef = {
  key: string;
  title: string;
  why: string;
  /** View key in App.tsx. */
  view: string;
  /** aria-label of the target group/panel inside that view, when it has one. */
  anchor?: string;
  /** Button label for the jump. */
  cta: string;
};

export type PathDef = {
  id: string;
  name: string;
  blurb: string;
  steps: PathStepDef[];
};

/** Forgiving slug so curly quotes / punctuation never break an anchor match. */
export function anchorSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const PATHS: PathDef[] = [
  {
    id: "getting-out",
    name: "Getting Out",
    blurb: "For members within about a year of separating — the order matters: TAP, records, claim, credit, job.",
    steps: [
      {
        key: "eas-plan",
        title: "Start the six-months-from-EAS plan",
        why: "Transition's priority order: TAP first, then SkillBridge, then COOL — in that order.",
        view: "transition",
        anchor: "Six months from EAS — start here",
        cta: "Open the EAS panel",
      },
      {
        key: "records-check",
        title: "Verify your record and DD214 worksheet",
        why: "Errors are far easier to fix while you are still in uniform.",
        view: "records",
        anchor: "Get Your Records",
        cta: "Open Records",
      },
      {
        key: "bdd",
        title: "File BDD inside the window",
        why: "Benefits Delivery at Discharge runs from 180 to 90 days before you separate.",
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open BDD in Claims",
      },
      {
        key: "review-lanes",
        title: "Learn the three review lanes",
        why: "Know your options after a decision before one ever arrives.",
        view: "claims",
        anchor: "After a Decision: The Three Review Lanes",
        cta: "Open review lanes",
      },
      {
        key: "jst",
        title: "Get your JST evaluated",
        why: "Your training may already count as college credit — each school decides.",
        view: "education",
        anchor: "Your military transcript — credit for what you already did",
        cta: "Open Education",
      },
      {
        key: "jobs-skillbridge",
        title: "Line up jobs and SkillBridge",
        why: "Get placed before you get out, not after.",
        view: "transition",
        anchor: "Get placed before you get out",
        cta: "Open Transition jobs",
      },
      {
        key: "vso",
        title: "Find a VSO near you",
        why: "VA's accredited-rep search finds free help by ZIP — including county service officers.",
        view: "find",
        anchor: "Money & Benefits Help",
        cta: "Open Find Anything",
      },
    ],
  },
  {
    id: "pcs-orders",
    name: "PCS Orders in Hand",
    blurb: "Orders just dropped? The move, the money, the household goods, and the family screening — in sequence.",
    steps: [
      {
        key: "timeline",
        title: "Work the PCS timeline checklist",
        why: "Orders to arrival, phase by phase — nothing falls through.",
        view: "pcs",
        anchor: "The PCS Timeline — Orders to Arrival",
        cta: "Open the timeline",
      },
      {
        key: "entitlements",
        title: "Claim DLA, TLE, forgotten entitlements",
        why: "Money you are owed that nobody hands you automatically.",
        view: "pcs",
        anchor: "Entitlements People Forget",
        cta: "Open entitlements",
      },
      {
        key: "hhg",
        title: "Plan household goods or PPM",
        why: "Government move or do-it-yourself — decide early, weigh everything.",
        view: "pcs",
        anchor: "Household Goods",
        cta: "Open household goods",
      },
      {
        key: "efmp",
        title: "Complete EFMP screening if it applies",
        why: "Mandatory enrollment shapes assignment consideration for your family.",
        view: "family",
        anchor: "Family Members with Special Needs (EFMP)",
        cta: "Open EFMP",
      },
      {
        key: "installation",
        title: "Find your new installation",
        why: "MilitaryINSTALLATIONS lists the gaining base's offices, contacts, and check-in steps.",
        view: "find",
        anchor: "Installations & Bases",
        cta: "Open Find Anything",
      },
    ],
  },
  {
    id: "deploying",
    name: "Deploying",
    blurb: "The readiness sweep before you go: checklist, family plan, legal, pay, and the people back home.",
    steps: [
      {
        key: "checklist",
        title: "Run the pre-deployment checklist",
        why: "The official Military OneSource checklist, start to finish.",
        view: "readiness",
        anchor: "Pre-Deployment Readiness",
        cta: "Open Readiness",
      },
      {
        key: "fcp",
        title: "Set up your Family Care Plan",
        why: "Required for dual-military couples and single parents — smart for everyone leaving.",
        view: "readiness",
        anchor: "Pre-Deployment Readiness",
        cta: "Open the Family Care Plan entry",
      },
      {
        key: "legal",
        title: "Get wills and POA done",
        why: "Legal assistance writes them free — wills, powers of attorney, lease review.",
        view: "readiness",
        anchor: "Pre-Deployment Readiness",
        cta: "Open legal help",
      },
      {
        key: "pay",
        title: "Check allotments and MilTax",
        why: "Make sure pay flows where it should while you are gone — and know the free tax help.",
        view: "pay",
        anchor: "Money Help",
        cta: "Open Pay & Money",
      },
      {
        key: "squad",
        title: "Set up your squad now",
        why: "Your check-in circle is how the people back home hear from you.",
        view: "checkin",
        cta: "Open Check-In",
      },
    ],
  },
  {
    id: "new-baby",
    name: "New Baby on the Way",
    blurb: "DEERS windows, TRICARE, childcare waitlists, and leave — the family admin that runs on deadlines.",
    steps: [
      {
        key: "baby-checklist",
        title: "Run the new-baby checklist",
        why: "DEERS enrollment runs on a window — 90 days in the U.S., 120 overseas.",
        view: "family",
        anchor: "Life Event Checklists",
        cta: "Open the baby checklist",
      },
      {
        key: "tricare",
        title: "Check your TRICARE coverage",
        why: "Know what maternity and newborn care looks like before delivery day.",
        view: "benefits",
        anchor: "Health",
        cta: "Open Benefits — Health",
      },
      {
        key: "childcare",
        title: "Join the childcare waitlist early",
        why: "MilitaryChildCare.com lists fill fast; MCCYN fee assistance can cover community care.",
        view: "family",
        anchor: "Childcare & School",
        cta: "Open childcare",
      },
      {
        key: "leave",
        title: "Understand your parental leave",
        why: "12 weeks under the Military Parental Leave Program — with branch variation flagged on the card.",
        view: "family",
        anchor: "Life Event Checklists",
        cta: "Open the leave flag",
      },
    ],
  },
  {
    id: "retiring",
    name: "Retiring",
    blurb: "The timeline, the SBP decision, concurrent receipt, and the paperwork the gray area runs on.",
    steps: [
      {
        key: "timeline",
        title: "Work the retirement timeline",
        why: "Applications and decisions run on a schedule — start early.",
        view: "retirement",
        anchor: "The Timeline",
        cta: "Open the timeline",
      },
      {
        key: "sbp",
        title: "Make the SBP decision",
        why: "The Survivor Benefit Plan needs spouse concurrence and is difficult to change later.",
        view: "retirement",
        anchor: "Key Decisions",
        cta: "Open SBP",
      },
      {
        key: "crdp-crsc",
        title: "Compare CRDP versus CRSC",
        why: "Concurrent receipt — which program fits your rating and service.",
        view: "retirement",
        anchor: "Key Decisions",
        cta: "Open CRDP / CRSC",
      },
      {
        key: "dd214-letter",
        title: "Secure DD214 and 20-year letter",
        why: "The paperwork your retirement — and the Reserve gray area — runs on.",
        view: "records",
        anchor: "Get Your Records",
        cta: "Open Records",
      },
      {
        key: "bdd",
        title: "Use BDD if still eligible",
        why: "Retirees with a known separation date can file 180–90 days out.",
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open BDD in Claims",
      },
    ],
  },
  {
    id: "filing-claim",
    name: "Filing a VA Claim",
    blurb: "Intent to file first, then the process, the evidence, free accredited help — and the predator warning.",
    steps: [
      {
        key: "itf",
        title: "File intent to file first",
        why: "It locks your effective date while you gather evidence — one year to complete the claim.",
        view: "claims",
        anchor: "How a Claim Moves",
        cta: "Open How a Claim Moves",
      },
      {
        key: "how-moves",
        title: "Learn how a claim moves",
        why: "What actually happens between filing and a decision.",
        view: "claims",
        anchor: "How a Claim Moves",
        cta: "Open How a Claim Moves",
      },
      {
        key: "evidence",
        title: "Gather the right evidence",
        why: "VA decides on service records, exams, and medical evidence — see what counts.",
        view: "claims",
        anchor: "Evidence: What VA Decides On",
        cta: "Open evidence",
      },
      {
        key: "vso",
        title: "Find a free accredited VSO",
        why: "Accredited representatives are always free — never pay to file an initial claim.",
        view: "claims",
        anchor: "Free Help: Accredited Representatives & VSOs",
        cta: "Open free help",
      },
      {
        key: "predators",
        title: "Read the claim-predator warning",
        why: "VA's own red flags: anyone promising a rating or charging a percentage.",
        view: "claims",
        anchor: "⚠ Warning: “Claim Predators” / Claim Sharks",
        cta: "Open the warning",
      },
    ],
  },
  {
    id: "going-to-school",
    name: "Going to School on the VA's Dime",
    blurb: "Education planning: turn your training into credit, test out free, then stack TA and the GI Bill in the right order.",
    steps: [
      {
        key: "transcripts",
        title: "Pull JST or CCAF transcript",
        why: "Your service transcript is the starting document for college credit.",
        view: "education",
        anchor: "Your military transcript — credit for what you already did",
        cta: "Open transcripts",
      },
      {
        key: "clep",
        title: "Take free CLEP and DSST first",
        why: "DANTES funds the first attempt per exam title for actively serving members.",
        view: "education",
        anchor: "Free exams — test out of classes you already know",
        cta: "Open free exams",
      },
      {
        key: "ta",
        title: "Stack Tuition Assistance correctly",
        why: "TA and the GI Bill in the right order — your branch's TA card lives in Benefits.",
        view: "benefits",
        cta: "Open Benefits",
      },
      {
        key: "degree-plan",
        title: "Plan degree with a counselor",
        why: "A degree plan keeps credits from being wasted.",
        view: "education",
        anchor: "Degree planning — putting the pieces together",
        cta: "Open degree planning",
      },
    ],
  },
];
