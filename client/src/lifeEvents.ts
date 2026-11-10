// ── Life-event search — sentence-style bundles (Nov 10, 2026) ─────
//
// Global Search understands keywords; life happens in sentences.
// When a query reads like a SITUATION ("we just had a baby", "my pay
// is messed up", "we're pcsing", "my dad just died"), this module
// recognizes the life event and GlobalSearch renders a small curated
// bundle header — "Sounds like: … — start here" — ABOVE the normal
// results. The bundle is a doorway layer only, in the Essentials
// pattern:
//   - every door opens a section/card that ALREADY exists in the
//     book, through the same onNavigate plumbing search hits use
//     (section-level doors, plus the Guided Paths' own anchors);
//   - normal results render below, completely unchanged — the bundle
//     never replaces, filters, reorders, or suppresses a single hit,
//     and it renders above the zero-result panel too, whose closest
//     matches and suggested doors are likewise untouched;
//   - crisis/safety posture is unchanged: no bundle logic touches
//     Care & Crisis content, and a bundle that includes Care &
//     Crisis doors into the existing section like any other door;
//   - scope mirrors search exactly: when the shell passes
//     allowedSections (the future-member scope, the spouse Buddy
//     scope), bundle doors are filtered by section name exactly the
//     way result groups, closest matches, and synonym doors already
//     are — a door whose section is outside the scope never renders,
//     and a bundle left with no doors does not render at all. The
//     member shell passes no scope, so every door shows, exactly as
//     member search shows everything.
//
// Matching is deliberately conservative, in the search index's
// plain-words spirit (the SYNONYM_ROWS approach in searchIndex.ts):
// a bundle fires only on a situation signal — a distinctive
// multi-word phrase, a distinctive single word with no other plain
// meaning in this book ("pcsing", "pregnant", "etsing"), or EVERY
// group of a token-group signal matching at once. A single generic
// word alone ("pay", "baby", "debt", "deployment", "home loan")
// never fires. Queries and triggers are normalized the same way on
// both sides (lowercase, apostrophes removed, punctuation becomes
// spaces), so "we're pcsing", "were pcsing", and "we are pcsing"
// all land, and phrase matching is whole-token (padded containment),
// never substring — "baby" inside another word cannot fire.

export interface LifeEventDoor {
  /** Section display name, exactly as the search index names it —
   * this is what allowedSections scoping compares against. */
  section: string;
  /** App.tsx View key (plain string, the changelog/essentials
   * pattern — GlobalSearch passes it through the hit plumbing). */
  view: string;
  /** The destination's existing plain-language title. */
  label: string;
  /** One short doorway line, describing the existing section only. */
  blurb: string;
  /** Guided Paths anchor ("<path name> path"), where the door
   * deep-lands on one path inside the Paths view. */
  anchor?: string;
}

export interface LifeEventBundle {
  id: string;
  /** Completes the header: "Sounds like: <heading> — start here". */
  heading: string;
  doors: LifeEventDoor[];
}

interface LifeEventDef extends LifeEventBundle {
  /** Distinctive phrases (normalized before matching). Any one
   * contiguous, whole-token phrase match fires the event. */
  phrases: string[];
  /** Token-group signal: EVERY group must have at least one entry
   * present (an entry may itself be a short phrase). Fires the
   * event when no phrase matched. */
  allOf?: string[][];
}

/** The one normalization both queries and triggers pass through. */
export function normalizeLifeQuery(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

const DEFS: LifeEventDef[] = [
  {
    id: "new-baby",
    heading: "You're having a baby",
    phrases: [
      "having a baby", "had a baby", "just had a baby", "just had our baby",
      "having our first baby", "first baby", "new baby", "baby on the way",
      "expecting a baby", "expecting a child", "having a child", "baby is coming", "baby due",
      "baby born", "newborn baby", "newborn",
      "im pregnant", "i am pregnant", "we are pregnant", "were pregnant",
      "my wife is pregnant", "my spouse is pregnant", "my partner is pregnant",
      "pregnant", "im expecting", "we are expecting", "were expecting",
    ],
    // "child" is deliberately NOT a group-1 token here: "new child
    // care rates" is an ordinary keyword search and must not fire
    // (probe-caught, Nov 10, 2026). Child-word situations are
    // covered by phrases ("having a child", "expecting a child").
    allOf: [
      ["baby", "newborn", "infant", "pregnant", "pregnancy"],
      ["new", "just", "expecting", "having", "had", "due", "born", "coming", "first"],
    ],
    doors: [
      {
        section: "Family & Life Events", view: "family",
        label: "Family & Life Events",
        blurb: "DEERS and ID cards, childcare, and the new-baby checklist.",
      },
      {
        section: "Guided Paths", view: "paths",
        label: "Guided Path: New Baby on the Way",
        blurb: "The step-by-step path for a baby on the way.",
        anchor: "New Baby on the Way path",
      },
      {
        section: "Health Care & TRICARE", view: "healthhq",
        label: "Health Care & TRICARE",
        blurb: "Enrollment and care for you and your baby.",
      },
    ],
  },
  {
    id: "pay-looks-wrong",
    heading: "Your pay looks wrong",
    phrases: [
      "les is wrong", "les wrong", "les is messed up", "les messed up", "les is off",
      "my les", "pay is wrong", "my pay is wrong", "pay looks wrong", "pay seems wrong",
      "pay is messed up", "pay messed up", "my pay is messed up",
      "paycheck is wrong", "paycheck wrong", "paycheck is short",
      "pay stub is wrong", "pay stub wrong", "paystub is wrong", "paystub wrong",
      "pay is short", "pay was short", "shorted on pay",
      "missing pay", "pay is missing", "didnt get paid", "did not get paid",
      "not paid", "underpaid", "wrong pay", "incorrect pay", "pay error", "les error",
      "pay does not look right", "pay doesnt look right", "pay looks off", "pay is off",
      "my pay changed", "why did my pay change",
    ],
    allOf: [
      ["les", "pay", "paycheck", "pay stub", "paystub"],
      ["wrong", "messed", "incorrect", "short", "missing", "off", "error", "problem", "issue", "dropped"],
    ],
    doors: [
      {
        section: "Your Pay Stub, Explained", view: "les",
        label: "Your Pay Stub, Explained",
        blurb: "Read your LES field by field and spot what's off.",
      },
      {
        section: "Pay & Money", view: "pay",
        label: "Pay & Money",
        blurb: "How your pay is built — allowances, deductions, and where to check your own figures.",
      },
      {
        section: "Pay Charts & Rates", view: "paycharts",
        label: "Pay Charts & Rates",
        blurb: "The official pay tables, to check your rate.",
      },
    ],
  },
  {
    id: "getting-out",
    heading: "You're getting out soon",
    phrases: [
      "getting out", "im getting out", "i am getting out", "getting out soon",
      "getting out of the military", "getting out of the army",
      "getting out of the marines", "getting out of the navy",
      "getting out of the air force", "leaving the military", "leaving service",
      "separating soon", "separation soon", "im separating", "i am separating",
      "ets soon", "etsing", "im etsing", "about to ets", "ets date",
      "end of service", "end of my service", "getting discharged", "being discharged",
      "transitioning out", "when i get out", "after the military", "civilian life",
    ],
    allOf: [
      ["separating", "separation", "ets", "discharge"],
      ["soon", "military", "service", "date", "out"],
    ],
    doors: [
      {
        section: "Transition & Jobs", view: "transition",
        label: "Transition & Jobs",
        blurb: "Getting-out steps, SkillBridge, and the job hunt.",
      },
      {
        section: "Guided Paths", view: "paths",
        label: "Guided Path: Getting Out",
        blurb: "The step-by-step getting-out checklist.",
        anchor: "Getting Out path",
      },
      {
        section: "VA Claims & Free Help", view: "claims",
        label: "VA Claims & Free Help",
        blurb: "File before you get out (BDD), and find free accredited help.",
      },
      {
        section: "First Year Out", view: "firstyear",
        label: "First Year Out",
        blurb: "The 31-task path for your first year after service.",
      },
      {
        section: "Your Records & DD214", view: "records",
        label: "Your Records & DD214",
        blurb: "Your DD214 and records — before and after separation.",
      },
    ],
  },
  {
    id: "pcs",
    heading: "You're PCSing to a new duty station",
    phrases: [
      "pcsing", "pcs ing", "pcsd", "im pcsing", "i am pcsing",
      "we are pcsing", "were pcsing", "just pcsd",
      "pcs soon", "pcs move", "my pcs", "pcs orders", "got pcs orders", "pcs to",
      "upcoming pcs", "about to pcs", "going to pcs",
      "moving to a new duty station", "moving duty station", "new duty station",
      "relocating duty station", "transferring duty station", "changing duty station",
      "orders to a new base", "moving to a new base", "moving bases", "new station",
    ],
    allOf: [
      ["pcs"],
      ["soon", "orders", "move", "moving", "help"],
    ],
    doors: [
      {
        section: "PCS Move Center", view: "pcs",
        label: "PCS Move Center",
        blurb: "The whole move: timeline, household goods, entitlements, and claims when something breaks.",
      },
      {
        section: "Guided Paths", view: "paths",
        label: "Guided Path: PCS Orders in Hand",
        blurb: "The step-by-step path once orders are in hand.",
        anchor: "PCS Orders in Hand path",
      },
      {
        section: "Housing Pack", view: "housing",
        label: "Housing Pack",
        blurb: "Your rights in military housing, barracks and dorms, and off-post renting.",
      },
      {
        section: "My Installation", view: "installation",
        label: "My Installation",
        blurb: "Set your new installation and open its own guide and locators.",
      },
      {
        section: "First 30 Days", view: "first30",
        label: "First 30 Days",
        blurb: "Your first month at the new station, as a checkable path.",
      },
    ],
  },
  {
    id: "spouse-deployed",
    heading: "Your spouse is deployed",
    phrases: [
      "my husband is deployed", "my wife is deployed", "my spouse is deployed",
      "my partner is deployed", "husband is deployed", "wife is deployed",
      "spouse is deployed", "partner is deployed",
      "my husband deployed", "my wife deployed", "husband deployed", "wife deployed",
      "spouse deployed", "deployed husband", "deployed wife", "deployed spouse",
      "hes deployed", "shes deployed", "he is deployed", "she is deployed",
      "husband overseas", "wife overseas", "spouse overseas",
      "husband is overseas", "wife is overseas", "spouse is overseas",
      "husband on deployment", "wife on deployment", "spouse on deployment",
      "while my husband is deployed", "while my wife is deployed",
      "while my spouse is deployed",
    ],
    allOf: [
      ["husband", "wife", "spouse", "partner"],
      ["deployed", "deployment", "overseas"],
    ],
    doors: [
      {
        section: "Family Care Plan & Deployment Readiness", view: "deployment",
        label: "Family Care Plan & Deployment Readiness",
        blurb: "The plan that says who cares for your family while your member is away — forms, timelines, and the checklist.",
      },
      {
        section: "Spouse Hub", view: "spousehub",
        label: "Spouse Hub",
        blurb: "Spouse-first support, including deployment support.",
      },
      {
        section: "Family & Life Events", view: "family",
        label: "Family & Life Events",
        blurb: "The family's admin backbone: DEERS and ID cards, childcare and school, and the support centers.",
      },
      {
        section: "Care & Crisis", view: "care",
        label: "Care & Crisis",
        blurb: "Support lines and help — free and confidential, for the people who support a member too.",
      },
    ],
  },
  {
    id: "deploying",
    heading: "You're deploying",
    phrases: [
      "deploying soon", "im deploying", "i am deploying", "im deployed", "i am deployed",
      "about to deploy", "getting deployed", "being deployed",
      "deployment coming up", "leaving on deployment", "going on deployment",
      "headed to deployment", "leaving for deployment", "deploy soon", "i deploy",
      "pre deployment", "predeployment", "my deployment", "deploying to",
      "next deployment", "deployment orders", "got deployment orders",
    ],
    allOf: [
      ["deploy", "deploying", "deployment"],
      ["soon", "coming", "next", "orders", "leaving", "going", "headed"],
    ],
    doors: [
      {
        section: "Family Care Plan & Deployment Readiness", view: "deployment",
        label: "Family Care Plan & Deployment Readiness",
        blurb: "Who must have a Family Care Plan, your service's form and timeline, and the pre-deployment checklist.",
      },
      {
        section: "Guided Paths", view: "paths",
        label: "Guided Path: Deploying",
        blurb: "The step-by-step deploying checklist.",
        anchor: "Deploying path",
      },
      {
        section: "Family & Life Events", view: "family",
        label: "Family & Life Events",
        blurb: "The family side of a deployment: support centers, counselors, and the paperwork that holds at home.",
      },
    ],
  },
  {
    id: "death-in-family",
    heading: "You're dealing with a death in the family",
    phrases: [
      "death in the family", "death in my family",
      "my dad died", "my mom died", "my father died", "my mother died",
      "my husband died", "my wife died", "spouse died", "my parent died",
      "my grandpa died", "my grandma died", "my grandfather died", "my grandmother died",
      "my brother died", "my sister died", "my son died", "my daughter died",
      "my child died", "family member died", "loved one died", "someone died",
      "someone in my family died",
      "my dad passed away", "my mom passed away", "father passed away",
      "mother passed away", "family member passed away", "loved one passed away",
      "lost my dad", "lost my mom", "lost my father", "lost my mother",
      "lost my husband", "lost my wife", "lost a family member", "lost a loved one",
      "death of my father", "death of my mother", "death of a family member",
      "planning a funeral", "family funeral", "funeral for my", "burial for my",
    ],
    allOf: [
      ["died", "death", "passed away", "funeral", "burial"],
      ["family", "dad", "mom", "father", "mother", "husband", "wife", "spouse",
       "parent", "grandpa", "grandma", "grandfather", "grandmother",
       "brother", "sister", "son", "daughter", "child", "loved"],
    ],
    doors: [
      {
        section: "Honors & Burial", view: "honors",
        label: "Honors & Burial",
        blurb: "Funeral honors and burial eligibility — factual and quiet, eligibility and routing only.",
      },
      {
        section: "Relief Societies", view: "relief",
        label: "Relief Societies",
        blurb: "Your service's relief society — emergency help with the costs around a death, decided case by case.",
      },
      {
        section: "Chaplains & Religious Life", view: "chaplains",
        label: "Chaplains & Religious Life",
        blurb: "Reach a chaplain of any faith, or none — confidential by rule.",
      },
      {
        section: "Care & Crisis", view: "care",
        label: "Care & Crisis",
        blurb: "Support after a loss, and the crisis lines pinned at the top — free and confidential.",
      },
    ],
  },
  {
    id: "money-trouble",
    heading: "Money is tight right now",
    phrases: [
      "money trouble", "money problems", "financial trouble", "financial problems",
      "in debt", "deep in debt", "too much debt", "a lot of debt", "debt problems",
      "credit card debt", "drowning in debt", "overwhelmed by debt",
      "debt help", "help with debt", "pay off debt", "paying off debt", "get out of debt",
      "cant afford", "cannot afford", "can not afford",
      "im broke", "i am broke", "broke right now",
      "behind on bills", "behind on payments", "cant pay my bills", "cannot pay my bills",
      "cant pay rent", "cant make rent",
      "struggling with money", "struggling financially",
      "money is tight", "finances are tight",
      "need money help", "emergency money", "need emergency money",
      "financial hardship", "money hardship",
    ],
    allOf: [
      ["debt", "bills", "money", "finances", "rent"],
      ["trouble", "problems", "problem", "help", "behind", "struggling", "tight", "hardship"],
    ],
    doors: [
      {
        section: "Calculators", view: "calculators",
        label: "Calculators — Debt Payoff",
        blurb: "Work a payoff order for your debts from the balances and rates you enter — saved on your profile only.",
      },
      {
        section: "Relief Societies", view: "relief",
        label: "Relief Societies",
        blurb: "Your service's own relief society: interest-free loans, grants, or a combination, decided case by case.",
      },
      {
        section: "Pay & Money", view: "pay",
        label: "Pay & Money",
        blurb: "How military pay actually works — the allowances, the deductions, and the money traps by their official names.",
      },
      {
        section: "Building Credit From Zero", view: "credit",
        label: "Building Credit From Zero",
        blurb: "Building (or rebuilding) credit from the ground up.",
      },
    ],
  },
  {
    id: "new-to-unit",
    heading: "You're new to your unit",
    phrases: [
      "new to the unit", "new to my unit", "new to this unit",
      "just arrived", "just got to my unit", "just reported", "just checked in",
      "just joined my unit", "joined a new unit", "new unit", "new at my unit",
      "first day at my unit", "first week at my unit", "arrived at my unit",
      "reporting to a new unit", "brand new to the unit", "new to the command",
    ],
    allOf: [
      ["arrived", "reported", "reporting", "checked in"],
      ["unit", "new", "station", "base", "command"],
    ],
    doors: [
      {
        section: "First 30 Days", view: "first30",
        label: "First 30 Days",
        blurb: "Your first month at a new duty station as a checkable path, in the order the deadlines fall.",
      },
      {
        section: "My Installation", view: "installation",
        label: "My Installation",
        blurb: "Set your installation and open its on-base guide and the national locators.",
      },
      {
        section: "Find an Office, Number, or Service", view: "find",
        label: "Find an Office, Number, or Service",
        blurb: "The office, number, or service you need, found fast.",
      },
      {
        section: "Lingo", view: "lingo",
        label: "Lingo",
        blurb: "The plain-English dictionary — learn the language of your new unit.",
      },
    ],
  },
  {
    id: "getting-married",
    heading: "You're getting married",
    phrases: [
      "getting married", "im getting married", "i am getting married",
      "we are getting married", "were getting married", "getting married soon",
      "just got married", "got married", "just married", "newly married",
      "newlywed", "newlyweds", "tying the knot", "planning a wedding", "my wedding",
      "just got engaged", "im engaged", "i am engaged", "engaged to be married",
      "marriage paperwork", "married life", "after we marry", "when we marry",
    ],
    allOf: [
      ["married", "marriage", "wedding"],
      ["getting", "planning", "soon", "just", "new"],
    ],
    doors: [
      {
        section: "Family & Life Events", view: "family",
        label: "Family & Life Events",
        blurb: "The marriage paperwork: DEERS and ID cards, and the family support routes.",
      },
      {
        section: "Benefits", view: "benefits",
        label: "Benefits",
        blurb: "What changes for your benefits when you marry.",
      },
      {
        section: "Health Care & TRICARE", view: "healthhq",
        label: "Health Care & TRICARE",
        blurb: "Getting your spouse enrolled and to care.",
      },
      {
        section: "Pay & Money", view: "pay",
        label: "Pay & Money",
        blurb: "How marriage changes your pay — allowances and dependents.",
      },
    ],
  },
  {
    id: "injured-meb",
    heading: "You're going through the medical board process",
    phrases: [
      "medical board", "med board", "meb process", "in the meb", "going through meb",
      "being med boarded", "med boarded", "ides process", "in ides", "peb process",
      "i got injured", "got injured", "i was injured", "im injured", "i am injured",
      "injured on duty", "injury at work", "hurt at work",
      "medical discharge", "medical separation", "disability evaluation",
      "limited duty", "limdu", "medical profile", "on profile", "wounded warrior",
    ],
    allOf: [
      ["injured", "injury", "hurt", "wounded", "meb", "ides", "peb"],
      ["board", "process", "duty", "work", "medical", "service", "military"],
    ],
    doors: [
      {
        section: "MEB/PEB (IDES) Guide", view: "ides",
        label: "MEB/PEB (IDES) Guide",
        blurb: "The medical board process in order — the stages, your rights at each one, and where the free help is. Process only, not advice.",
      },
      {
        section: "Health Care & TRICARE", view: "healthhq",
        label: "Health Care & TRICARE",
        blurb: "Your care while the process runs: enrollment, records, appointments, and claims.",
      },
      {
        section: "VA Claims & Free Help", view: "claims",
        label: "VA Claims & Free Help",
        blurb: "Your VA claim builds during IDES — how it moves and where the free accredited help is.",
      },
      {
        section: "VA Caregiver Support & EFMP Respite", view: "caregiver",
        label: "VA Caregiver Support & EFMP Respite",
        blurb: "Support for the family member caring for you.",
      },
    ],
  },
  {
    id: "buying-a-home",
    heading: "You're buying a home",
    phrases: [
      "buying a home", "buying a house", "buy a home", "buy a house",
      "purchase a home", "purchasing a home", "purchasing a house",
      "buy my first home", "buying my first home", "buy our first home",
      "first time home buyer", "first time homebuyer", "home buying", "house hunting",
      "looking to buy a home", "looking to buy a house",
      "want to buy a home", "want to buy a house",
      "saving for a house", "saving for a home",
      "using my va loan to buy", "va loan to buy",
    ],
    allOf: [
      ["buy", "buying", "purchase", "purchasing", "bought"],
      ["home", "house"],
    ],
    doors: [
      {
        section: "VA Home Loan Center", view: "homeloan",
        label: "VA Home Loan Center",
        blurb: "The COE first, then entitlement and the funding fee exactly as VA publishes them. No lenders, no rates.",
      },
      {
        section: "Housing Pack", view: "housing",
        label: "Housing Pack",
        blurb: "Your rights in military housing and off-post renting, while you decide.",
      },
      {
        section: "PCS Move Center", view: "pcs",
        label: "PCS Move Center",
        blurb: "Buying on a move: the timeline, temporary lodging, and settling in.",
      },
    ],
  },
];

/** Defs with triggers pre-normalized (module load, once). */
const NORMALIZED: { def: LifeEventDef; phrases: string[]; allOf: string[][] | null }[] = DEFS.map((def) => ({
  def,
  phrases: def.phrases.map(normalizeLifeQuery),
  allOf: def.allOf ? def.allOf.map((g) => g.map(normalizeLifeQuery)) : null,
}));

function entryPresent(entry: string, padded: string, tokens: Set<string>): boolean {
  if (entry.includes(" ")) return padded.includes(` ${entry} `);
  return tokens.has(entry);
}

/**
 * The life-event bundle for a query, or null. Scoring: a phrase
 * match scores its (normalized) length, a token-group match scores
 * a flat 10; the highest score wins and ties go to the earlier def,
 * so a specific spouse-side phrase ("my wife is deployed") always
 * outranks any generic deploying signal in the same sentence.
 * Doors are then filtered by allowedSections exactly the way
 * GlobalSearch filters its result groups, closest matches, and
 * synonym doors; a bundle with no surviving doors returns null.
 */
export function lifeEventFor(rawQuery: string, allowedSections?: string[]): LifeEventBundle | null {
  const q = normalizeLifeQuery(rawQuery);
  if (!q) return null;
  const padded = ` ${q} `;
  const tokens = new Set(q.split(" ").filter(Boolean));

  let best: { def: LifeEventDef; score: number } | null = null;
  for (const n of NORMALIZED) {
    let score = -1;
    for (const p of n.phrases) {
      if (entryPresent(p, padded, tokens) && p.length > score) score = p.length;
    }
    if (score < 0 && n.allOf) {
      const ok = n.allOf.every((group) => group.some((e) => entryPresent(e, padded, tokens)));
      if (ok) score = 10;
    }
    if (score >= 0 && (!best || score > best.score)) best = { def: n.def, score };
  }
  if (!best) return null;

  const doors = allowedSections
    ? best.def.doors.filter((d) => allowedSections.includes(d.section))
    : best.def.doors;
  if (doors.length === 0) return null;
  return { id: best.def.id, heading: best.def.heading, doors };
}

/** The full def list, exported for the source-level trigger probe. */
export const LIFE_EVENT_DEFS: readonly LifeEventDef[] = DEFS;
