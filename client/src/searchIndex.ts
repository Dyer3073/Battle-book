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
import { BOOTCAMP_ENTRIES, ENTRY_FITNESS_ENTRIES, OFFICER_ENTRIES } from "./joining";
import { UNIFORM_GROUPS } from "./uniforms";
import { GEAR_GUIDE_GROUPS, GEAR_STORES } from "./gear";
import { MEDICAL_GROUPS } from "./medical";
import { SPOUSE_HUB_GROUPS } from "./spousehub";
import { ALL_LINGO_ENTRIES } from "./lingo";
import { OFF_BASE_CATEGORIES, ON_BASE_CATEGORIES } from "./installation";
import {
  APP_HARVEST,
  HARVEST_TOPICS,
  HUBS,
  MYPAY_WARNING,
  UNIVERSAL_APPS,
  hubAriaLabel,
} from "./installationApps";
import { INSTALLATIONS } from "./installation";
import {
ALL_WEAPON_SYSTEMS,
CYCLES,
OPERATOR_BASICS,
QUAL_BRANCHES,
SAFETY_SETS,
ZEROING_SERVICES,
} from "./weapons";
import { RESERVE_GROUPS } from "./reserve";
import { RIGHTS_GROUPS } from "./rights";
import { HOMELOAN_GROUPS } from "./homeloan";
import { DEPLOY_CHECKLIST, DEPLOY_GROUPS } from "./deployment";
import { FINDER_CONFIRMED, FINDER_INDEX, PREC_LISTS } from "./ribbons";
import { LES_ALL_FIELDS, LES_ALLOTMENT_CODES, LES_BLOCKS, LES_DEDUCTION_CODES, LES_ENTITLEMENT_CODES } from "./les";
import { NATO_US_TABLE, PARTNER_COUNTRIES } from "./partners";
import { CLEARANCE_GROUPS } from "./clearance";
import { KIDS_GROUPS } from "./kids";
import { TRAVEL_GROUPS } from "./travelhq";
import { TAXES_GROUPS } from "./taxes";
import { VOTING_GROUPS } from "./voting";
import { HEALTH_GROUPS } from "./healthhq";
import { SERVICE_SONGS, ALLIED_ANTHEMS } from "./songs";
import { FLAGS } from "./flags";
import { SPEC_BRANCHES } from "./specops";
import { ALLIED_COUNTRIES } from "./allied";
import { ALL_QUAL_TILES, NOT_CONFIRMED_REGISTER } from "./quals";
import { FIT_CALC_SEARCH } from "./FitnessCalcView";
import { CALC_SEARCH, CALC_TILES } from "./calculators";
import { FITNESS_DEPTH_SEARCH } from "./FitnessDepth";
import { NUTRITION_SEARCH } from "./NutritionView";
import { BEFORE_YOU_SIGN, CHECKLIST_TILE, COMPONENT_TILES } from "./components";
import {
  BEFORE_YOU_SIGN as REENLIST_BEFORE_YOU_SIGN,
  CHECKLIST_TILE as REENLIST_CHECKLIST_TILE,
  REENLIST_TILES,
} from "./reenlist";
import { KNOTS, KNOT_FAMILIES, NOT_SOURCED_REGISTER } from "./knots";
import { FIRST30_TASKS } from "./first30";
import { EMERGENCY_CARDS } from "./emergency";
import { FIRSTYEAR_TASKS } from "./firstyear";
import { DECK_PANELS } from "./deck";
import { NOT_DESCRIBED_REGISTER, SIGNALS, signalFamilyName } from "./signals";
import { RECRUITER_TILES } from "./recruiters";
import { COMM_TILES } from "./commissioning";
import { RANK_SHEETS } from "./rankdetail";
import { COOL_SECTION } from "./cool";
import { ASSIGNMENTS_SECTION } from "./assignments";
import { EVALS_SECTION } from "./evals";
import { FEDJOBS_SECTION } from "./fedjobs";
import { TSP_SECTION } from "./tsp";
import { PARENTS_SECTION } from "./parents";
import { ROTC_SECTION } from "./rotc";
import { CHANNELS_SECTION } from "./channels";
import { RELIEF_SECTION } from "./relief";
import { CHAPLAINS_SECTION } from "./chaplains";
import { HONORS_SECTION } from "./honors";
import { OCONUS_SECTION } from "./oconus";
import { BOARD_SECTION } from "./boardprep";
import { WRITING_SECTION } from "./writing";
import { IDES_SECTION } from "./ides";
import { CLEPJST_SECTION } from "./clepjst";
import { HOUSING_SECTION } from "./housing";
import { CARBUYING_SECTION } from "./carbuying";
import { OPSEC_SECTION } from "./opsec";
import { GIVEBACK_SECTION } from "./giveback";
import { GO_SECTION } from "./generalorders";
import { SPOUSEWORK_SECTION, CAREGIVER_SECTION } from "./gapSpouseCare";
import { GERMANY_SECTION, CREDIT_SECTION, BARRACKS_SECTION, RETIREE_SECTION } from "./gapGermanyLife";
import { DRILL, FIRSTAID, LANDNAV } from "./closureField";
import { PHRASE_CARDS } from "./phrases";
import { ENLISTED_PAY, OFFICER_PAY, OE_PAY, WARRANT_PAY } from "./paydata";
import { PAY_NOTES_ENTRIES, PAY_ROUTER_ENTRIES } from "./paycharts";
import type { PackSection } from "./seven";
import { branchNamedIn, branchesNamedIn, normalizeBranch } from "./branchTag";

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
  /** Partner Forces country id — the section opens that profile. */
  partnerId?: string;
  /** Knots entry id — Field Tools opens the Knots tool on that knot's
   * card ("register" opens the Not-Sourced Register). */
  knotId?: string;
  /** Hand & Arm Signals entry id — Field Tools opens the Signals tool
   * on that signal's card ("annex" opens the Flags & Panels annex,
   * "register" opens the Not-Described Register). The section is in
   * NEITHER the future nor the spouse search scope — Field Tools is a
   * member view on those tracks (locked card only), the Knots
   * precedent, so no signal content reaches those tracks via search. */
  signalId?: string;
  /** Fitness depth card id + which Fitness tile holds it — the
   * Fitness view opens that tile straight onto the card. */
  fitId?: string;
  fitKind?: "exercise" | "warmup" | "stretch";
  /** Nutrition card id + kind — the Nutrition tile inside Fitness
   * (member), the spouse Nutrition view, or the future shell's
   * prep-framing Nutrition education opens straight onto the card.
   * Section name "Nutrition" is in the member scope, the future
   * scope (prep framing), and the spouse Buddy scope (spouses get
   * the full Nutrition area on their own profile). */
  nutId?: string;
  nutKind?: "edu" | "food";
  /** Rank detail sheet key (branch|category|grade|abbr) — the Rank
   * Charts view opens straight onto that rank's detail sheet. */
  rankKey?: string;
  /** Practice Trainer id — the Trainers view opens straight onto
   * that trainer's setup. Member-only section: "Practice Trainers"
   * is in neither the future nor the spouse search/Buddy scope (its
   * source sections, Rank Charts and Field Tools, are member views
   * on those tracks — locked cards only), so nothing leaks. */
  trainerId?: "rank" | "knots" | "signals" | "generalorders";
  /** Closure Sweep field entry id (L-n / F-n / D-n) — Field Tools
   * opens the matching reference tool (Land Navigation / First Aid &
   * Buddy Aid / Drill & Ceremonies) straight onto that entry.
   * Member-only, like the rest of Field Tools: the field section
   * names are in neither the future nor the spouse search scope. */
  closureId?: string;
  /** Extra match-only terms (aliases never printed as titles, e.g. the
   * civilian "Klemheist" spelling of the manual's Kleimhiest). */
  keywords?: string;
  /** Exact-match key (a job code) for top-tier ranking. */
  code?: string;
  /** The branch this hit belongs to, when the underlying entry is
   * branch-specific (a Library job, a branch Benefits item, a uniform,
   * a qualification branch entry, a rank sheet, a service song…). The
   * Personalization build (H-2): global search ALWAYS searches
   * everything; this tag only drives branch-first ranking and the
   * "Other branch" badge when the hit's section is currently in a
   * filtered view. Absent = universal / not branch-specific. An
   * array means the entry covers exactly those services. */
  branch?: string | string[];
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
      // Branch tagging for the badge + one-visit override (R-6):
      // an entry that names branch(es) in its own title carries
      // them; universal entries carry none. Harmless on sections
      // that never filter — the badge gate checks the view.
      const named = branchesNamedIn(e.name);
      const branch = named.length === 1 ? named[0] : named.length > 1 ? named : undefined;
      out.push({ section, view, title: e.name, summary: clip(e.summary), anchor: g.title, branch });
    }
  }
}


/* ------------------------- Synonym layer ------------------------- */
// ux-reorg.md §B.6.1, verbatim mapping: each plain word maps to
// section names + a landing card, so hits land on cards, not section
// tops, wherever a card is the answer.

export type SynonymDoor = { section: string; view: string };

type SynonymHitDef = { section: string; view: string; title: string; summary: string; anchor?: string };

const SYNONYM_ROWS: { words: string[]; hits: SynonymHitDef[] }[] = [
  {
    // Red-team round 2 (F-8): dual-military and parent vocabulary must
    // land the round-2 entries. "both deploy" / "dual military" are
    // tokenized queries — scoreHits matches when any term lands, and
    // these keyword hits put the doors at the top.
    words: ["daycare", "childcare", "babysitter", "after school care"],
    hits: [
      { section: "Family & Life Events", view: "family", title: "Child care priorities — the published order for who gets a CDC spot first", summary: "The DoD priority order (1A–3) for military child development center spots, with single parents and dual-military couples at Priority 1B items 2–3." },
      { section: "Family & Life Events", view: "family", title: "Hourly care — the published drop-in layer at CDCs and school-age centers", summary: "Drop-in hourly child care at installation CDCs and school-age centers: registration first, reserve ahead, prices set per installation." },
      { section: "Family & Life Events", view: "family", title: "Sick-child care — the finding: no DoD program exists", summary: "A labeled negative finding: no DoD sick-child care program exists; the routes that do exist are hourly care, FCC homes, the CCYH pilot, and your Family Care Plan." },
    ],
  },
  {
    words: ["both deploy", "both of us deploy", "dual military", "two deployments"],
    hits: [
      { section: "Deployment Center", view: "deployment", title: "Dual-military couples — both members' plans must mesh", summary: "When both members deploy, each member's Family Care Plan arrangements must work with the other's — the DoD rule for dual-military couples." },
      { section: "Getting Orders & Your Next Job", view: "assignments", title: "Spouse co-location — being stationed together", summary: "Co-location (join spouse) assignment consideration for dual-military couples: how the services try to station spouses together, and what governs when they can't." },
      { section: "Pay & Money", view: "pay", title: "Dual-military BAH — two members, two entitlements", summary: "Each member's housing allowance is their own; children support exactly one with-dependent rate, by election — the members choose; the senior member claims by default." },
    ],
  },
  {
    words: ["co-location", "colocation", "stationed together", "join spouse"],
    hits: [
      { section: "Getting Orders & Your Next Job", view: "assignments", title: "Spouse co-location — being stationed together", summary: "Co-location (join spouse) assignment consideration for dual-military couples: how the services try to station spouses together, and what governs when they can't." },
    ],
  },
  {
    words: ["drill weekend"],
    hits: [
      { section: "Family & Life Events", view: "family", title: "Drill-weekend care — two published programs, neither of them DoD-wide", summary: "Air Force Expanded FCC Home Community Care (up to 12 hours per day during IDT) and the Army National Guard WDCC weekend drill initiative." },
      { section: "Guard & Reserve", view: "reserve", title: "Cross-link: drill-weekend child care — Air Force Home Community Care, and the WDCC initiative", summary: "The Guard & Reserve cross-link card to the drill-weekend child care entry in Family & Life Events." },
    ],
  },
  {
    words: ["two bah", "dual bah", "both get bah"],
    hits: [
      { section: "Pay & Money", view: "pay", title: "Dual-military BAH — two members, two entitlements (neither spouse is the other's dependent)", summary: "When two members are married to each other, each draws BAH or OHA in their own right — 37 U.S.C. § 421 and DoD FMR Vol. 7A Ch. 26 §4.5." },
      { section: "Pay & Money", view: "pay", title: "Dual-military BAH with children — one with-dependent rate, and the couple elects who draws it", summary: "Children support exactly one with-dependent housing allowance between two members; by election — the members choose; the senior member claims by default." },
    ],
  },
  {
    // Legacy official names (labeling pass, §B.5): the old section
    // names still land on the renamed sections.
    words: ["decoder"],
    hits: [
      { section: "Your Pay Stub, Explained", view: "les", title: "Your pay stub, explained — the LES", summary: "The section formerly labeled LES Decoder: every field and line code on your Leave & Earnings Statement, decoded from DFAS's own guide." },
    ],
  },
  {
    words: ["credentialing"],
    hits: [
      { section: "Credentials for Your Job", view: "cool", title: "Credentials for your job — COOL", summary: "The section formerly labeled the Credentialing (COOL) Center: your service's COOL program and credentialing assistance." },
    ],
  },
  {
    words: ["combatives"],
    hits: [
      { section: "Hand-to-Hand Programs", view: "combat", title: "Hand-to-hand programs", summary: "The section formerly labeled Close Combat: MCMAP, MACP, and the other services' combatives programs, catalog-level only." },
    ],
  },
  {
    words: ["vso"],
    hits: [
      { section: "VA Claims & Free Help", view: "claims", title: "VA claims & free help — the VSO guide", summary: "The section formerly labeled VA Claims & VSO Guide: how a claim moves and where the free accredited VSO help is." },
    ],
  },
  {
    words: ["money", "paycheck", "payday"],
    hits: [
      { section: "Pay & Money", view: "pay", title: "Payday — when you get paid and what your pay is made of", summary: "Pay dates, base pay, allowances, and deductions — the Pay & Money section explains the whole paycheck and routes to DFAS and myPay for your own figures." },
      { section: "Your Pay Stub, Explained", view: "les", title: "Your pay stub, explained — the LES", summary: "Every field and line code on your Leave & Earnings Statement, decoded from DFAS's own guide." },
    ],
  },
  {
    words: ["doctor", "medical", "dentist"],
    hits: [
      { section: "Health Care & TRICARE", view: "healthhq", title: "Find a doctor, dentist, or clinic", summary: "TRICARE's own find-care routes: milConnect for enrollment, your regional contractor's provider directory, MHS GENESIS for appointments and records." },
      { section: "Medical Training & Certs", view: "medical", title: "Medical training & certifications", summary: "TCCC, life support through the Military Training Network, EMT/NREMT and the medic pipelines — the training side of military medicine." },
    ],
  },
  {
    words: ["food", "commissary"],
    hits: [
      { section: "Deals & Discounts", view: "deals", title: "Commissary & free or cheap meals", summary: "The commissary, on-base dining, and the free-or-cheap meal routes in Deals & Discounts.", anchor: "Free or cheap meals & groceries" },
      { section: "My Installation", view: "installation", title: "Food on and around your installation", summary: "Your installation's own dining and grocery routes, plus what's off base nearby." },
    ],
  },
  {
    words: ["housing", "barracks", "lease"],
    hits: [
      { section: "PCS Move Center", view: "pcs", title: "Housing on a PCS — on base, off base, and the lease", summary: "Housing decisions on a move: privatized housing waitlists, housing-office lease review, barracks and dorms, and temporary lodging while you settle." },
      { section: "Housing Pack", view: "housing", title: "Housing Pack — your rights in military housing", summary: "The Tenant Bill of Rights (all 18), barracks and dorms, and off-post renting — including the SCRA lease-termination route." },
    ],
  },
  {
    words: ["divorce", "custody"],
    hits: [
      { section: "Family & Life Events", view: "family", title: "Family changes — marriage, divorce, and custody paperwork", summary: "The life-event checklists and family support routes for when a family's shape changes." },
      { section: "Know Your Rights", view: "rights", title: "Your legal protections — SCRA, custody, and deployment", summary: "The Servicemembers Civil Relief Act's protections, including custody and court-appearance protections during service." },
    ],
  },
  {
    words: ["car", "loan", "debt"],
    hits: [
      { section: "Car-Buying Guide", view: "carbuying", title: "Buying a car without the traps", summary: "Total cost over monthly payment, the dealer traps by their official names, and the MLA correction: the 36% MAPR cap does NOT cover ordinary purchase auto loans." },
      { section: "Know Your Rights", view: "rights", title: "Loans & the Military Lending Act", summary: "What the MLA's 36% MAPR cap does and does not cover, and the SCRA 6% interest cap on pre-service debts." },
      { section: "Calculators", view: "calculators", title: "Debt Payoff calculator", summary: "Work a payoff order for your debts from the balances and rates you enter — saved on your profile only." },
    ],
  },
  {
    words: ["school", "kids"],
    hits: [
      { section: "Kids & Schools", view: "kids", title: "Kids & schools — liaisons, the Compact, DoDEA", summary: "Your School Liaison, the Interstate Compact (MIC3), IEP & 504 continuity, and DoDEA — the three names that solve almost every military school problem." },
      { section: "Education Planner", view: "education", title: "Education Planner — transcripts, exams, degrees", summary: "Your JST, free CLEP/DSST exams, and degree planning with TA." },
    ],
  },
  {
    words: ["funeral", "burial"],
    hits: [
      { section: "Honors & Burial", view: "honors", title: "Honors & burial — eligibility and routing", summary: "VA national-cemetery burial, funeral honors, and the routing for a death in the family — factual and quiet, eligibility only." },
      { section: "Care & Crisis", view: "care", title: "Care & Crisis — support after a loss", summary: "Vet Centers, survivor support, and the crisis lines — free and confidential, for veterans, service members, and the people who support them." },
    ],
  },
  {
    words: ["emergency", "help now"],
    hits: [
      { section: "Care & Crisis", view: "care", title: "Help right now — the Veterans Crisis Line", summary: "Call 988 then press 1, text 838255, or chat online — free, confidential, 24/7. You do not need to be enrolled in VA benefits to use it." },
      { section: "When It Goes Wrong", view: "emergencydeck", title: "When It Goes Wrong — the first-24-hours deck", summary: "Eight calm, ordered action cards for a family emergency, a lost CAC, an accident or arrest overseas, a lost passport, identity theft, and more." },
    ],
  },
  {
    words: ["church", "chaplain"],
    hits: [
      { section: "Chaplains & Religious Life", view: "chaplains", title: "Chaplains & religious life", summary: "Why chaplains are different — the confidentiality rule (MRE 503) — and how to reach one of any faith, or none." },
    ],
  },
  {
    words: ["vote", "ballot"],
    hits: [
      { section: "Voting Center", view: "voting", title: "Voting from anywhere — the FPCA", summary: "One form registers you and requests your absentee ballot: a new FPCA every January and every move, 90+ days before the election." },
    ],
  },
  {
    words: ["taxes"],
    hits: [
      { section: "Tax & Residency", view: "taxes", title: "Taxes — free filing and the combat-zone rules", summary: "MilTax free filing, the IRS combat-zone extension formula in full, and state residency for service members and spouses." },
    ],
  },
  {
    words: ["move", "shipping", "household goods"],
    hits: [
      { section: "PCS Move Center", view: "pcs", title: "Your PCS move — household goods, timeline, entitlements", summary: "The move timeline, household goods shipping, the entitlements people forget (DLA, TLE/TLA, pet reimbursement), housing, and damage claims." },
    ],
  },
  {
    words: ["dog", "pet"],
    hits: [
      { section: "PCS Move Center", view: "pcs", title: "Moving with a pet", summary: "Pet reimbursement on a PCS, Patriot Express pet spaces, and the quarantine / paperwork routes for overseas moves." },
      { section: "My Installation", view: "installation", title: "Pets at your installation", summary: "Your installation's pet rules, vet clinic, and kennel routes from its own official pages." },
    ],
  },
  {
    words: ["pregnant", "baby"],
    hits: [
      { section: "Family & Life Events", view: "family", title: "New baby — the checklist", summary: "The new-baby life-event checklist: DEERS and TRICARE enrollment windows, childcare, and the family support routes." },
    ],
  },
  {
    words: ["retire"],
    hits: [
      { section: "Retirement Hub", view: "retirement", title: "Retirement — BRS vs legacy, SBP, and the timeline", summary: "The two retirement systems, the official calculators, Survivor Benefit Plan, CRDP vs CRSC, and the retirement timeline." },
      { section: "Calculators", view: "calculators", title: "Retirement Estimator", summary: "Legacy 2.5% / BRS 2.0% on a base pay figure you enter — the official formulas, your numbers saved on your profile only." },
    ],
  },
  {
    words: ["college", "classes"],
    hits: [
      { section: "Education Planner", view: "education", title: "College & classes — GI Bill, TA, and free exams", summary: "Degree planning, tuition assistance, and testing out of classes you already know with free CLEP/DSST exams." },
      { section: "Credentials for Your Job", view: "cool", title: "Credentials for your job — COOL", summary: "Turn military training into civilian credentials, service by service, through your service's COOL program." },
    ],
  },
  {
    words: ["gym", "workout"],
    hits: [
      { section: "Fitness Calculators", view: "fitness", title: "Fitness — tests, calculators, and training plans", summary: "Your branch's fitness test and its calculator, the exercise library with diagrams, warm-ups, stretching, and generated training plans." },
    ],
  },
];

/** The doors a plain-words query points at (zero-result suggestions). */
export function synonymDoorsFor(rawQuery: string): SynonymDoor[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const doors: SynonymDoor[] = [];
  for (const row of SYNONYM_ROWS) {
    const hit = row.words.some((w) => w === q || tokens.includes(w) || q.includes(w));
    if (!hit) continue;
    for (const h of row.hits) {
      if (!doors.some((d) => d.section === h.section)) doors.push({ section: h.section, view: h.view });
    }
  }
  return doors.slice(0, 3);
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
      branch: e.branch,
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
      out.push({ section: "Benefits", view: "benefits", title: item.name, summary: clip(`${b.branch} · ${item.summary}`), branch: b.branch });
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
  groupHits(out, "VA Claims & Free Help", "claims", CLAIMS_GROUPS);
  groupHits(out, "Duties, Uniforms & Everyday Know-How", "readiness", READINESS_GROUPS);
  groupHits(out, "Retirement Hub", "retirement", RETIREMENT_GROUPS);
  groupHits(out, "Your Records & DD214", "records", RECORDS_GROUPS);
  groupHits(out, "Care & Crisis", "care", CARE_GROUPS);
  groupHits(out, "Find an Office, Number, or Service", "find", FIND_GROUPS);
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

  // Hand-to-Hand Programs — belts, technique groups, MACP, and the other branches'
  // programs, anchored to the sections CombatView labels.
  for (const belt of MCMAP_BELTS) {
    out.push({
      section: "Hand-to-Hand Programs",
      view: "combat",
      title: `${belt.belt} — MCMAP`,
      summary: clip(`${belt.focus} ${belt.signifies}`),
      anchor: belt.belt,
    });
    for (const g of belt.groups) {
      out.push({
        section: "Hand-to-Hand Programs",
        view: "combat",
        title: g.family,
        summary: clip(
          g.note ?? `${belt.belt} · ${g.techniques.map((t) => t.name).join(", ")}`,
        ),
        anchor: belt.belt,
      });
    }
  }
  out.push({ section: "Hand-to-Hand Programs", view: "combat", title: MACP.name, summary: clip(MACP.purpose), anchor: "Army Combatives" });
  for (const lvl of MACP.levels) {
    out.push({ section: "Hand-to-Hand Programs", view: "combat", title: lvl.name, summary: clip(lvl.purpose), anchor: "Army Combatives" });
  }
  for (const p of OTHER_BRANCH_PROGRAMS) {
    out.push({ section: "Hand-to-Hand Programs", view: "combat", title: p.branch, summary: clip(p.text), anchor: "Other branch programs" });
  }

  // Joining (future-member) area — indexed once, under its own section
  // names, so the content never duplicates into member sections. Each
  // branch entry anchors to its labeled section inside the view.
  for (const e of BOOTCAMP_ENTRIES) {
    out.push({
      section: "Boot Camp",
      view: "bootcamp",
      title: `${e.branch} — ${e.officialName}`,
      summary: clip(`${e.locations} · ${e.length} · ${e.framing}`),
      anchor: `Boot camp — ${e.branch}`,
    });
  }
  for (const e of OFFICER_ENTRIES) {
    out.push({
      section: "Becoming an Officer",
      view: "officer",
      title: `${e.branch} — ${e.schoolName}`,
      summary: clip(`${e.location} · ${e.length} · ${e.framing}`),
      anchor: `Officer — ${e.branch}`,
    });
  }
  for (const e of ENTRY_FITNESS_ENTRIES) {
    out.push({
      section: "Get Ready",
      view: "getready",
      title: `${e.branch} — entry fitness`,
      summary: clip(`${e.gateTitle}. ${e.gateIntro}`),
      anchor: `Get ready — ${e.branch}`,
    });
  }

  // Gear Search (member side) — stores route from the view itself (no
  // anchor); guides anchor to their category group inside the view.
  // Future-member search scope excludes this section, so the router
  // and guides never surface for that track; the Before You Ship guide
  // reaches future members through its Start Here card instead.
  for (const s of GEAR_STORES) {
    out.push({ section: "Gear Search", view: "gear", title: s.name, summary: clip(`${s.eligibility} ${s.note}`) });
  }
  groupHits(
    out,
    "Gear Search",
    "gear",
    GEAR_GUIDE_GROUPS.map((g) => ({
      title: `Gear guides — ${g.title}`,
      entries: g.guides.map((guide) => ({ name: guide.title, summary: guide.summary })),
    })),
  );

  // Medical Training & Certs (member side only) — one hit per entry,
  // anchored to its group inside the view. Future-member search scope
  // excludes this section entirely: the section is a locked card for
  // future profiles, so its entries never surface for that track.
  groupHits(out, "Medical Training & Certs", "medical", MEDICAL_GROUPS);

  // Spouse Hub — one hit per entry, anchored to its group section
  // inside the view (the hub labels each group with its title).
  groupHits(out, "Spouse Hub", "spousehub", SPOUSE_HUB_GROUPS);

  // Lingo — open to every track (members, future members, spouses),
  // so its hits are in every track's search scope. One hit per entry,
  // anchored to its group inside the view, plus the alphabet tables.
  for (const e of ALL_LINGO_ENTRIES) {
    out.push({
      section: "Lingo",
      view: "lingo",
      title: e.expansion ? `${e.term} — ${e.expansion}` : e.term,
      summary: clip(e.definition),
      anchor: e.group,
    });
  }
  out.push({
    section: "Lingo",
    view: "lingo",
    title: "Phonetic alphabet (NATO / ICAO)",
    summary: clip("Alfa, Bravo, Charlie — the 26 letters with their published pronunciations, plus the digit pronunciations (WUN, TOO, TREE, FOW-ER, FIFE, NIN-ER), from the FAA AIM Table 4-2-2."),
    anchor: "Phonetic alphabet",
  });

  // My Installation — the router section: one hit for the section
  // itself plus its on-base and off-base category cards. The guide's
  // content depends on the member's set installation, so the hits
  // describe the categories, never an installation's facts. Not in the
  // future-member scope (the section is locked on that track).
  out.push({
    section: "My Installation",
    view: "installation",
    title: "My Installation",
    summary: clip("Set your installation from the MilitaryINSTALLATIONS directory's own list and open its guide: on-base services by category from its own official pages, the national locators, and what's off base within ~50 miles."),
  });
  for (const c of ON_BASE_CATEGORIES) {
    out.push({
      section: "My Installation",
      view: "installation",
      title: `${c.name} — on base`,
      summary: clip(c.blurb),
      anchor: "On-base guide",
    });
  }
  for (const c of OFF_BASE_CATEGORIES) {
    out.push({
      section: "My Installation",
      view: "installation",
      title: `${c.name} — off base`,
      summary: clip(`Off-base ${c.name.toLowerCase()} around your installation, searched on Google Maps with the exact phrase printed on the card — Battle Book builds no map-search links it could not verify.`),
      anchor: "Off-base guide",
    });
  }

  // Apps & Getting Around (three layers): the Layer 1 universal
  // official-app cards, the myPay warning, the Layer 2 harvested
  // topic cards, and the Layer 3 OCONUS hub entries. Anchors are the
  // blocks' own aria-labels, so a hit lands on the block or hub card
  // itself — the myPay hit landing on the warning is a feature.
  for (const a of UNIVERSAL_APPS) {
    out.push({
      section: "My Installation",
      view: "installation",
      title: a.name,
      summary: clip(a.what),
      anchor: "Apps & Getting Around",
    });
  }
  out.push({
    section: "My Installation",
    view: "installation",
    title: "myPay — no official app (warning)",
    summary: clip(MYPAY_WARNING.body),
    anchor: "Apps & Getting Around",
  });
  out.push({
    section: "My Installation",
    view: "installation",
    title: "Passio Go — shuttle tracking",
    summary: clip("Live shuttle tracking named on official pages: at JBSA the Passio Go agency code is “jbsa” (Fort Sam Houston / Lackland shuttles, free to DoD ID cardholders); at Camp Lejeune it tracks Jacksonville Transit's Scarlet Express, with fares in the Token Transit app."),
    anchor: "Apps & Getting Around",
  });
  const instName = new Map(INSTALLATIONS.map((i) => [i.slug, i.name]));
  for (const [slug, topics] of Object.entries(APP_HARVEST)) {
    for (const t of HARVEST_TOPICS) {
      const links = topics[t.id];
      if (!links?.length) continue;
      out.push({
        section: "My Installation",
        view: "installation",
        title: `${t.name} — ${instName.get(slug) ?? slug}`,
        summary: clip(links[0]?.note ?? t.blurb),
        anchor: "Apps & Getting Around",
      });
    }
  }
  for (const hub of HUBS) {
    for (const e of hub.entries) {
      out.push({
        section: "My Installation",
        view: "installation",
        title: e.name,
        summary: clip(e.what),
        anchor: hubAriaLabel(hub),
      });
    }
  }

  // Weapons & Qualification — four search sections over one view.
  // "Weapon Systems" (the 28 fact files) and "Annual Qualification"
  // are the public layer: they are in the future-member search scope.
  // "Zeroing & Fundamentals" and "Safety & Operator Basics" are
  // members-only — future-member scope excludes both section names,
  // so their hits never surface for that track (spouses neither).
  for (const s of ALL_WEAPON_SYSTEMS) {
    out.push({
      section: "Weapon Systems",
      view: "weapons",
      title: s.name,
      summary: clip(
        s.factFile
          ? `${s.group} · ${s.caliber ?? ""} · ${s.typeLine ?? ""}`
          : `${s.group} · No official fact file found — specifications not stated. ${s.note ?? ""}`,
      ),
      anchor: s.group,
    });
  }
  for (const svc of ZEROING_SERVICES) {
    out.push({
      section: "Zeroing & Fundamentals",
      view: "weapons",
      title: `Zeroing & fundamentals — ${svc.service}`,
      summary: clip(`${svc.manual}. ${svc.manualNote}`),
      anchor: svc.ariaLabel,
    });
  }
  for (const b of QUAL_BRANCHES) {
    out.push({
      section: "Annual Qualification",
      view: "weapons",
      title: `${b.branch} — annual qualification`,
      summary: clip(b.governing),
      anchor: b.ariaLabel,
      branch: b.branch,
    });
  }
  for (const set of SAFETY_SETS) {
    out.push({
      section: "Safety & Operator Basics",
      view: "weapons",
      title: `Weapons safety rules — ${set.service}`,
      summary: clip(set.rules ? set.rules.join(" ") : (set.flagLine ?? "")),
      anchor: set.ariaLabel,
    });
  }
  for (const op of OPERATOR_BASICS) {
    out.push({
      section: "Safety & Operator Basics",
      view: "weapons",
      title: `Operator basics — ${op.name}`,
      summary: clip(op.manual),
      anchor: op.ariaLabel,
    });
  }
  for (const c of CYCLES) {
    out.push({
      section: "Safety & Operator Basics",
      view: "weapons",
      title: `Cycle of operations — ${c.name}`,
      summary: clip(c.manualStatus),
      anchor: c.ariaLabel,
    });
  }

  // Uniforms (member side) — one hit per uniform, anchored to its
  // branch group inside the view.
  for (const g of UNIFORM_GROUPS) {
    for (const u of g.uniforms) {
      out.push({
        section: "Uniforms",
        view: "uniforms",
        title: `${g.branch} — ${u.name}`,
        summary: clip(u.worn),
        anchor: `Uniforms — ${g.branch}`,
        branch: g.branch,
      });
    }
  }

  // The six Nov 9, 2026 pack sections. RefEntry bodies stand in for
  // summaries (groupHits reads .summary; the packs' entries carry
  // .body), so these hits are built directly.
  const refHits = (
    section: string,
    view: string,
    groups: readonly { title: string; entries: readonly { name: string; body: string }[] }[],
  ): void => {
    for (const g of groups) {
      for (const e of g.entries) {
        out.push({ section, view, title: e.name, summary: clip(e.body), anchor: g.title });
      }
    }
  };
  refHits("Guard & Reserve", "reserve", RESERVE_GROUPS);
  refHits("Know Your Rights", "rights", RIGHTS_GROUPS);
  refHits("VA Home Loan Center", "homeloan", HOMELOAN_GROUPS);
  refHits("Family Care Plan & Deployment Readiness", "deployment", DEPLOY_GROUPS);
  // The second-wave six (Nov 9, 2026 packs) — same refHits pattern,
  // except each summary is prefixed with its group title: the packs'
  // group names carry the terms members actually search (MIC3,
  // Space-A, the FPCA), while the entry bodies often don't reach
  // those terms inside the 220-character summary clip.
  // Security Clearances is member-only: it is excluded from the
  // future and spouse search scopes by section name, so its hits
  // never surface on those tracks.
  const refHitsGrouped = (
    section: string,
    view: string,
    groups: readonly { title: string; entries: readonly { name: string; body: string }[] }[],
  ): void => {
    for (const g of groups) {
      for (const e of g.entries) {
        out.push({ section, view, title: e.name, summary: clip(`${g.title} — ${e.body}`), anchor: g.title });
      }
    }
  };
  refHitsGrouped("Security Clearances", "clearance", CLEARANCE_GROUPS);
  refHitsGrouped("Kids & Schools", "kids", KIDS_GROUPS);
  refHitsGrouped("Travel, Space-A & Lodging", "travelhq", TRAVEL_GROUPS);
  refHitsGrouped("Tax & Residency", "taxes", TAXES_GROUPS);
  refHitsGrouped("Voting Center", "voting", VOTING_GROUPS);
  refHitsGrouped("Health Care & TRICARE", "healthhq", HEALTH_GROUPS);
  for (const g of DEPLOY_CHECKLIST) {
    for (const item of g.items) {
      out.push({
        section: "Family Care Plan & Deployment Readiness",
        view: "deployment",
        title: item.title,
        summary: clip(item.note),
        anchor: "Pre-deployment readiness checklist",
      });
    }
  }

  // Your Pay Stub, Explained — one hit per field and per line code. Field hits
  // anchor to their statement block (the decoder's hub opens that
  // block's tile and scrolls to it); line-code hits anchor to the
  // line-codes tile.
  for (const f of LES_ALL_FIELDS) {
    const block = LES_BLOCKS.find((b) => b.fields.includes(f));
    out.push({
      section: "Your Pay Stub, Explained",
      view: "les",
      title: typeof f.id === "number" ? `LES field ${f.id} — ${f.label}` : `LES W-4 field — ${f.label}`,
      summary: clip(f.meaning),
      anchor: block?.title,
    });
  }
  for (const c of [...LES_ENTITLEMENT_CODES, ...LES_DEDUCTION_CODES, ...LES_ALLOTMENT_CODES]) {
    out.push({ section: "Your Pay Stub, Explained", view: "les", title: `LES line — ${c.code}`, summary: clip(c.meaning), anchor: "LES line codes" });
  }

  // Ribbons — finder entries (confirmed and index-only) plus one hit
  // per award on each branch's official precedence list.
  for (const e of FINDER_CONFIRMED) {
    out.push({
      section: "Awards & Ribbon Rack",
      view: "ribbons",
      title: e.name,
      summary: clip(`${e.branches} · ${e.summary}`),
      anchor: "Awards finder",
    });
  }
  for (const e of FINDER_INDEX) {
    out.push({
      section: "Awards & Ribbon Rack",
      view: "ribbons",
      title: e.name,
      summary: clip(`${e.branches} · Index entry — description not confirmed. Official reference: ${e.ref}`),
      anchor: "Awards finder",
    });
  }
  for (const [branchKey, lists] of Object.entries(PREC_LISTS)) {
    const branchLabel =
      branchKey === "usmc"
        ? "Marine Corps"
        : branchKey === "af"
          ? "Air Force"
          : branchKey === "sf"
            ? "Space Force"
            : branchKey === "cg"
              ? "Coast Guard"
              : branchKey === "navy"
                ? "Navy"
                : "Army";
    for (const list of lists) {
      list.items.forEach((name, i) => {
        out.push({
          section: "Awards & Ribbon Rack",
          view: "ribbons",
          title: `${name} — ${branchLabel} precedence`,
          summary: clip(
            list.unnumbered
              ? `${branchLabel} wear order (names only — numbering unverified). Source: ${list.source}`
              : `${branchLabel} order #${i + 1} in its group. Source: ${list.source}`,
          ),
          anchor: "Full precedence lists",
        });
      });
    }
  }

  // Partner Forces — the NATO grade-code explainer (one hit for the
  // explainer itself, one per U.S. correspondence row so a code like
  // "OF-5" lands on the explainer), the courtesy & protocol basics,
  // and one hit per country profile, deep-linked to that profile.
  // Open to all three tracks, like Lingo.
  out.push({
    section: "Partner Forces",
    view: "partners",
    title: "NATO grade codes — STANAG 2116 / APersP-01",
    summary: clip("OF-1…OF-10 and OR-1…OR-9 with the U.S. correspondence, the officer offset (O-1 and O-2 both = OF-1), and the caveat that the full APersP-01 annex is NSO-distributed with no public mirror."),
    anchor: "NATO grade codes",
  });
  for (const r of NATO_US_TABLE) {
    out.push({
      section: "Partner Forces",
      view: "partners",
      title: `${r.code} — ${r.titles}`,
      summary: clip(`NATO code ${r.code} = U.S. pay grade ${r.grade}: ${r.titles}. From the APersP-01 U.S. correspondence table in the Partner Forces explainer.`),
      anchor: "NATO grade codes",
    });
  }
  out.push({
    section: "Partner Forces",
    view: "partners",
    title: "Courtesy & protocol — working with partner forces",
    summary: clip("Saluting partner officers (AR 600-25 ¶2-1), anthem and colors respect, honors by equivalent grade, and addressing partner ranks by their own titles — from AR 600-25 and FM 7-21.13."),
    anchor: "Courtesy and protocol",
  });
  for (const c of PARTNER_COUNTRIES) {
    out.push({
      section: "Partner Forces",
      view: "partners",
      title: c.name,
      summary: clip(`${c.force} ${c.status}.`),
      partnerId: c.id,
    });
  }

  // Songs, Anthem & Pledge + Flags — one hit per service song, per
  // national item, per allied anthem, and per flag, each anchored to
  // its tile inside the section (the view opens that tile on arrival).
  // Open to all three tracks, like Partner Forces.
  for (const s of SERVICE_SONGS) {
    out.push({
      section: "Songs, Anthem & Pledge + Flags",
      view: "songs",
      title: `${s.branch} — ${s.title}`,
      summary: clip(`Service Songs: ${s.intro[0] ?? s.title}`),
      anchor: "Service Songs",
      branch: s.branch,
    });
  }
  out.push({
    section: "Songs, Anthem & Pledge + Flags",
    view: "songs",
    title: "The Star-Spangled Banner",
    summary: clip(
      "Anthem & Pledge: Verse 1 in full per the National Park Service; verses 2–4 named with their official link; the Fort McHenry facts per the Library of Congress; the 1931 Act specified no official text (LOC).",
    ),
    anchor: "Anthem & Pledge",
  });
  out.push({
    section: "Songs, Anthem & Pledge + Flags",
    view: "songs",
    title: "Anthem etiquette — 36 U.S.C. § 301(b)",
    summary: clip(
      "Anthem & Pledge: Conduct during the national anthem — uniformed salute at the first note, the salute provision for members and veterans not in uniform, hand over heart, and the flag-not-displayed rule.",
    ),
    anchor: "Anthem & Pledge",
  });
  out.push({
    section: "Songs, Anthem & Pledge + Flags",
    view: "songs",
    title: "The Pledge of Allegiance",
    summary: clip(
      "Anthem & Pledge: The current text verbatim from 4 U.S.C. § 4 — “one Nation under God” — and the history: Bellamy 1892, the 1923/1924 wording changes, 1942 recognition and the hand-over-heart change, the 1945 naming, “under God” in 1954.",
    ),
    anchor: "Anthem & Pledge",
  });
  for (const a of ALLIED_ANTHEMS) {
    out.push({
      section: "Songs, Anthem & Pledge + Flags",
      view: "songs",
      title: `${a.country} — ${a.title}`,
      summary: clip(`Allied Anthems: ${a.translationStatus}`),
      anchor: "Allied Anthems",
    });
  }
  for (const f of FLAGS) {
    out.push({
      section: "Songs, Anthem & Pledge + Flags",
      view: "songs",
      title: f.name,
      summary: clip(`Flags: ${f.description[0] ?? f.name}`),
      anchor: "Flags",
    });
  }

  // Switching Components — one hit per entry, anchored to its tile
  // inside the section (the view opens that tile on arrival), plus
  // one hit per Before You Sign checklist item anchored to the
  // checklist tile. Summaries are the entries' own search summaries:
  // they carry the program names members search (DAP, Palace Chase,
  // RC2AC) and deliberately none of the section's excluded matter —
  // the one trial-enlistment nickname lives only inside the Army
  // entry's flag, never in a title or summary, so it can never
  // surface here as a program. In the spouse search scope in full
  // (family-decision reference); excluded from the future-member
  // scope by section name — future profiles see a locked card.
  for (const t of COMPONENT_TILES) {
    for (const e of t.entries) {
      out.push({
        section: "Switching Components",
        view: "components",
        title: e.name,
        summary: clip(e.summary),
        anchor: t.label,
      });
    }
  }
  for (const item of BEFORE_YOU_SIGN) {
    out.push({
      section: "Switching Components",
      view: "components",
      title: `Before You Sign ${item.n} — ${item.title}`,
      summary: clip(item.text),
      anchor: CHECKLIST_TILE.label,
    });
  }

  // Reenlistment & IRR — one hit per entry, anchored to its tile
  // inside the section (the view opens that tile on arrival), plus
  // one hit per Before You Sign checklist item anchored to the
  // checklist tile. Summaries are the entries' own search summaries:
  // they carry the terms members search (SRB, ROW, C-WAY, CJR, RE
  // codes, muster, MSO, recall) and deliberately none of the
  // section's excluded matter — no current bonus amounts exist in
  // any title or summary because none exist in the section. In the
  // spouse search scope in full (family-decision reference);
  // excluded from the future-member scope by section name — future
  // profiles see a locked card.
  for (const t of REENLIST_TILES) {
    for (const e of t.entries) {
      out.push({
        section: "Reenlistment & IRR",
        view: "reenlist",
        title: e.name,
        summary: clip(e.summary),
        anchor: t.label,
      });
    }
  }
  for (const item of REENLIST_BEFORE_YOU_SIGN) {
    out.push({
      section: "Reenlistment & IRR",
      view: "reenlist",
      title: `Before You Sign ${item.n} — ${item.title}`,
      summary: clip(item.text),
      anchor: REENLIST_CHECKLIST_TILE.label,
    });
  }

  // Calculators — one hit per calculator, anchored to its tile in
  // the Calculators hub (the view opens that tile on arrival).
  // Summaries are scope-only: they name the formulas, tables, and
  // flags, and carry no personal inputs (inputs are per-profile and
  // never indexed). In the MEMBER search scope in full; excluded
  // from the future-member scope by section name (future profiles
  // see a locked card) and from the spouse Buddy scope — spouse
  // profiles open the area from their Home/More cards with the
  // Retirement/VA tiles locked to match their hub postures.
  for (const c of CALC_SEARCH) {
    const tile = CALC_TILES.find((x) => x.key === c.tile);
    out.push({
      section: "Calculators",
      view: "calculators",
      title: c.title,
      summary: clip(c.summary),
      anchor: tile?.label,
    });
  }

  // Special Forces & Elite Units — one hit per entry, anchored to its
  // branch tile inside the section (the view opens that tile on
  // arrival). Summaries lead with the terms members actually search
  // (Robin Sage, Guile Strike, AST), because the entry bodies reach
  // those terms past the summary clip. In the future-member search
  // scope (aspirational reference, same entries); excluded from the
  // spouse scope by section name — spouses see the locked card.
  for (const b of SPEC_BRANCHES) {
    for (const e of b.entries) {
      out.push({
        section: "Special Forces & Elite Units",
        view: "specops",
        title: e.name,
        summary: clip(e.summary),
        anchor: b.label,
        branch: b.label,
      });
    }
  }

  // Allied Special Forces — one hit per entry, anchored to its
  // country tile inside the section (the view opens that tile on
  // arrival). Summaries lead with the terms members actually search
  // (GROM, Marinejeger, Jægerkorpset, UDT/SEAL) and carry the level
  // wording (DELIBERATELY SILENT, ⚠ NOT VERIFIED, DATED) where the
  // pack flags it. In the future-member search scope (aspirational
  // reference, same entries); excluded from the spouse scope by
  // section name — spouses see the locked card.
  //
  // Country indexing (Nov 10, 2026 fix): the per-entry hits above are
  // titled by unit, so a country name itself found nothing —
  // "turkiye" returned no matches even though the Türkiye tile
  // exists (its label carries ü, which the plain-ASCII query never
  // matches, and no entry title or summary names the country). Each
  // country therefore ALSO gets a country-level hit — title
  // "<Country> — Allied Special Forces", summary from the country's
  // own tile line + intro (existing wording only, level flags
  // included), anchored to the country label exactly like the entry
  // hits, so it opens AlliedView on that country's tile with its
  // entries showing. The variant spellings members actually type
  // ride in `keywords` (match-only, never printed) on BOTH the
  // country hit and every entry hit for that country, so a country
  // search surfaces the country's landing hit first (index order
  // within a tier) and then its units. Keywords are country names
  // and demonyms only — no content terms — so no other query's
  // ranking changes.
  const ALLIED_COUNTRY_KEYWORDS: Record<string, string> = {
    germany: "germany german deutschland bundeswehr",
    norway: "norway norwegian norge noreg",
    canada: "canada canadian",
    uk: "united kingdom uk britain great britain british england",
    denmark: "denmark danish danmark",
    france: "france french francais français",
    australia: "australia australian aussie",
    newzealand: "new zealand nz aotearoa kiwi",
    japan: "japan japanese nippon nihon",
    greece: "greece greek hellas hellenic",
    netherlands: "netherlands holland dutch nederland",
    italy: "italy italian italia",
    spain: "spain spanish espana españa",
    poland: "poland polish polska",
    turkiye: "turkiye turkey türkiye turkish",
    southkorea: "south korea korea rok republic of korea korean",
    philippines: "philippines philippine filipino pilipinas",
  };
  for (const c of ALLIED_COUNTRIES) {
    const countryKeywords = ALLIED_COUNTRY_KEYWORDS[c.key] ?? c.label.toLowerCase();
    out.push({
      section: "Allied Special Forces",
      view: "alliedsf",
      title: `${c.label} — Allied Special Forces`,
      summary: clip(`${c.tileSub}. ${c.intro}`),
      anchor: c.label,
      keywords: countryKeywords,
    });
    for (const e of c.entries) {
      out.push({
        section: "Allied Special Forces",
        view: "alliedsf",
        title: e.name,
        summary: clip(e.summary),
        anchor: c.label,
        keywords: countryKeywords,
      });
    }
  }

  // Qualifications, Schools & Certifications — one hit per entry,
  // anchored to its tile inside the section (the view opens that tile
  // on arrival), plus one hit per NOT CONFIRMED register item anchored
  // to the register tile. Summaries are the entries' own search
  // summaries: they lead with the terms members actually search
  // (MCIWS, MAET, helo dunker, Pathfinder, coxswain) and carry the
  // gated-standard wording (NOT PUBLICLY PUBLISHED) where the packs
  // gate a standard. In the future-member search scope (aspirational
  // reference, same entries); excluded from the spouse scope by
  // section name — spouses see the locked card.
  for (const t of ALL_QUAL_TILES) {
    for (const e of t.entries) {
      out.push({
        section: "Qualifications, Schools & Certifications",
        view: "quals",
        title: e.name,
        summary: clip(e.summary),
        anchor: t.label,
        branch: e.branch,
      });
    }
  }
  for (const r of NOT_CONFIRMED_REGISTER) {
    out.push({
      section: "Qualifications, Schools & Certifications",
      view: "quals",
      title: `NOT CONFIRMED #${r.n} — ${r.title}`,
      summary: clip(`NOT CONFIRMED Register: ${r.detail}`),
      anchor: "NOT CONFIRMED Register",
      branch: r.branch,
    });
  }

  // Connect with a Recruiter — one hit per entry, anchored to its
  // tile inside the section (the view opens that tile on arrival).
  // Summaries are the entries' own scope summaries (doors and routes,
  // no numbers). In the future-member search scope — this area lives
  // behind the future-member front door; the section is in NEITHER
  // spouse scope, and on member surfaces a search hit lands on a
  // pointer card to the future-member door, never on recruiter
  // content (no recruiter content is duplicated into member/spouse
  // tracks).
  for (const t of RECRUITER_TILES) {
    for (const e of t.entries) {
      out.push({
        section: "Connect with a Recruiter",
        view: "recruiters",
        title: e.name,
        summary: clip(e.summary),
        anchor: t.label,
      });
    }
  }

  // Knots (Field Tools) — one hit per library entry, deep-landing on
  // the knot's card. Aliases ride in keywords so the pack §16.7 name
  // collisions resolve: "Klemheist" lands on Kleimhiest, "becket bend"
  // on the sheet bend, "alpine butterfly" / "butterfly knot" on the
  // wireman's knot, and "double bowline" vs "bowline on a bight" stay
  // separate entries. Register entries land on the Not-Sourced
  // Register — they are listed there, not taught.
  for (const k of KNOTS) {
    const fam = KNOT_FAMILIES.find((f) => f.key === k.family)?.name ?? k.family;
    out.push({
      section: "Knots",
      view: "fieldtools",
      title: k.name,
      summary: clip(`${fam} · ${k.purpose}`),
      knotId: k.id,
      keywords: [...k.aliases, ...(k.searchAliases ?? [])].join(" ").toLowerCase(),
    });
  }
  for (const r of NOT_SOURCED_REGISTER) {
    out.push({
      section: "Knots",
      view: "fieldtools",
      title: `${r.name} — Not-Sourced Register`,
      summary: clip(`Not taught in the swept military sources. ${r.status}`),
      knotId: "register",
    });
  }

  // Hand & Arm Signals (Field Tools) — one hit per library entry,
  // deep-landing on the signal's card through its family tile.
  // Variant forms are separate hits under their own published names
  // (Army / USMC / FM), so "disperse", "halt", "freeze", "echelon",
  // "column", and "I do not understand" each surface every published
  // form, and the throat-cut pair (Danger Area / Stop Engines) both
  // land. Annex and register hits land on those tiles — listed there,
  // not taught. Section name is in the member scope only (Field Tools
  // posture): absent from FUTURE_SEARCH_SECTIONS and both Buddy
  // allowlists, so nothing leaks to future/spouse tracks.
  for (const s of SIGNALS) {
    out.push({
      section: "Hand & Arm Signals",
      view: "fieldtools",
      title: s.name,
      summary: clip(`${signalFamilyName(s.family)} · ${s.service} · ${s.meaning}`),
      signalId: s.id,
      keywords: `${s.source} ${s.steps.join(" ")}`.toLowerCase(),
    });
  }
  out.push({
    section: "Hand & Arm Signals",
    view: "fieldtools",
    title: "Flags & Panels — Annex",
    summary: clip(
      "Flag color code (red = danger/enemy in sight; green = all clear/ready/understood; yellow = disregard/vehicle out of action), the 6 named flag signals and 5 range-flag signals — name + status only, no diagrams — and the ground-to-air panel system (Wind-T, Message Pickup, Message Not Received, Enemy Aircraft Near, Direction Indicator).",
    ),
    signalId: "annex",
  });
  for (const r of NOT_DESCRIBED_REGISTER) {
    out.push({
      section: "Hand & Arm Signals",
      view: "fieldtools",
      title: `${r.name} — Not-Described Register`,
      summary: clip(`Named but not described in the opened sources. ${r.status}`),
      signalId: "register",
    });
  }

  // First 30 Days — the guided newcomer path. One section hit plus
  // one hit per task (34), all deep-landing on the path view. Section
  // name is deliberately absent from FUTURE_SEARCH_SECTIONS, so the
  // future track never sees it (locked card only); member search is
  // unfiltered and the spouse shell renders the view, so spouse
  // profiles land on their family view.
  out.push({
    section: "First 30 Days",
    view: "first30",
    title: "First 30 Days — Guided Newcomer Path",
    summary: clip(
      "Your first month at a new duty station, sequenced: 34 checkable tasks in four phases (Before Arrival, Week 1, Weeks 2–4, By Day 30), situation-filtered, with the four hard clocks as published — travel voucher 5 working days, TRICARE move-QLE 90 days from the DEERS update, Navy INDOC within 30 days, USMC Welcome Aboard within 90 days (Okinawa NOWA 72 hours).",
    ),
    keywords: "first 30 days newcomer arrival in-processing check-in sponsorship welcome aboard indoc pcs landing",
  });
  for (const t of FIRST30_TASKS) {
    out.push({
      section: "First 30 Days",
      view: "first30",
      title: `${t.id} — ${t.title}`,
      summary: clip(`${t.when} ${t.where}`),
      keywords: `${t.tags.join(" ")} ${t.linkLabel}`.toLowerCase(),
    });
  }

  // When It Goes Wrong — the emergency deck. One section hit plus one
  // hit per card (8), all deep-landing on the deck view. The deck
  // follows the Care & Crisis posture: the section name is absent
  // from FUTURE_SEARCH_SECTIONS, so the future track never sees it
  // (locked card only); member search is unfiltered and the spouse
  // shell renders the view in full.
  out.push({
    section: "When It Goes Wrong",
    view: "emergencydeck",
    title: "When It Goes Wrong — First-24-Hours Emergency Deck",
    summary: clip(
      "First-24-hours action cards in the shape DO FIRST → CALL → THEN → WATCH OUT: family emergency at home (Red Cross Hero Care 1-877-272-7337), lost or stolen CAC (DSO 1-800-538-9552), car accident overseas (Germany / Türkiye / Okinawa only), arrest abroad (State Department 1-888-407-4747 / +1-202-501-4444), a death in the family, lost passport (DS-64 / NPIC), identity theft (IdentityTheft.gov, active-duty alert), and medical emergency overseas (TRICARE Overseas call centers).",
    ),
    keywords: "emergency deck when it goes wrong first 24 hours red cross hero care cac lost stolen accident overseas arrest detained passport lost stolen identity theft tricare overseas medical emergency",
  });
  for (const c of EMERGENCY_CARDS) {
    out.push({
      section: "When It Goes Wrong",
      view: "emergencydeck",
      title: `${c.id} — ${c.title}`,
      summary: clip(c.intro),
      keywords: "emergency deck do first call then watch out",
    });
  }

  // First Year Out — the guided transition path. One section hit plus
  // one hit per task (31), all deep-landing on the path view. Section
  // name is deliberately absent from FUTURE_SEARCH_SECTIONS, so the
  // future track never sees it (locked card only); member search is
  // unfiltered and the spouse shell renders the view, so spouse
  // profiles land on their family view.
  out.push({
    section: "First Year Out",
    view: "firstyear",
    title: "First Year Out — Guided Transition Path",
    summary: clip(
      "From 12 months before separation to 12 months after, in five phases: 31 checkable tasks, 15 deadline-bearing — TAP no later than 365 days out, Capstone no later than 90 days, BDD 90–180 days, TRICARE end / TAMP 180 days (eligible categories only), CHCBP within 60 days, VGLI 240 days / final deadline 1 year + 120 days, SGLI day-120, UCX, and the IRR 8-year MSO.",
    ),
    keywords: "first year out transition getting out separation tap capstone bdd tamp chcbp vgli sgli ucx irr dd214 final move",
  });
  for (const t of FIRSTYEAR_TASKS) {
    out.push({
      section: "First Year Out",
      view: "firstyear",
      title: `Task ${t.n} — ${t.title}`,
      summary: clip(`${t.when} ${t.where}`),
      keywords: `${t.linkLabel}`.toLowerCase(),
    });
  }

  // My Binder + What Changed + the Benefits household scope — the
  // Nov 10 features (final-phase find, Nov 10, 2026): these views
  // shipped with NO search rows at all, so "what changed", "my
  // binder", "print my binder" and "my household" returned nothing
  // relevant. One section hit each, in the established style. "My
  // Binder" and "What Changed" are added to FUTURE_SEARCH_SECTIONS
  // in App.tsx (both views are future-open); the household hit rides
  // the existing "Benefits" section, which is already in scope for
  // every shell that can open Benefits.
  out.push({
    section: "What Changed",
    view: "whatchanged",
    title: "What Changed — what's new, corrected, and improved in the book",
    summary: clip(
      "The running record of what was added and what got corrected in Battle Book, newest first — corrections included, in the open.",
    ),
    keywords: "what changed what's new changelog updates corrections new features recent changes",
  });
  out.push({
    section: "My Binder",
    view: "binder",
    title: "My Binder — your saved cards",
    summary: clip(
      "Every card you save, gathered in one place, grouped by section with its sources — private to your profile.",
    ),
    keywords: "binder my binder saved cards bookmarks collection saved",
  });
  out.push({
    section: "My Binder",
    view: "binder",
    title: "Print my Binder — your saved cards as one clean printout",
    summary: clip(
      "Print My Binder: a Battle Book cover with your branch and job, then your saved cards grouped by section with their sources, resolved live from your own Binder when the sheet opens.",
    ),
    keywords: "print binder printable printout print my binder print saved cards",
  });
  out.push({
    section: "Benefits",
    view: "benefits",
    title: "My household — two branches, one household",
    summary: clip(
      "Dual-military household? Set your partner's branch on your profile and Benefits, search, and section filters include their branch too — one household, both services' content, and search marks your partner's branch instead of calling it “Other branch.”",
    ),
    keywords: "my household household partner branch dual military spouse serves both branches partner's branch",
  });

  // Smart-Card Deck (Field Tools) — the printable pocket deck. Hits
  // land on Field Tools, whose header carries the deck panel. Member
  // scope only, like the rest of Field Tools.
  for (const p of DECK_PANELS) {
    out.push({
      section: "Field Tools",
      view: "fieldtools",
      title: p.n === 1 ? "Smart-Card Deck — Pocket Deck" : `Smart-Card Deck — ${p.title}`,
      summary: clip(p.note),
      keywords: "smart-card deck pocket deck printable cards cut guides medevac kill card range card signals knots comms",
    });
  }

  // Fitness Calculators — one hit per calculator/checker/entry, anchored
  // to its group (U.S. Tests / SOF & Assessment Checkers / Allied Tests)
  // inside the Fitness view (the view opens that group on arrival).
  // Section name "Fitness Calculators" is in the member scope and the
  // future-member scope (fitness prep is future-open); excluded from the
  // spouse scope by section name — spouse Fitness access is unchanged.
  for (const f of FIT_CALC_SEARCH) {
    out.push({
      section: "Fitness Calculators",
      view: "fitness",
      title: f.title,
      summary: clip(f.summary),
      anchor: f.anchor,
    });
  }

  // Nutrition — one hit per Fueling Education entry (17) and one per
  // food in the bundled USDA database, deep-linked to the card in
  // the Nutrition tile/view. The tracker and meal plans are private
  // per-profile tools, not reference cards, so they carry no hits of
  // their own — the education entry that teaches each guardrail is
  // the searchable surface.
  for (const n of NUTRITION_SEARCH) {
    out.push({
      section: "Nutrition",
      view: "fitness",
      title: n.title,
      summary: clip(n.summary),
      nutId: n.id,
      nutKind: n.kind,
      keywords: n.keywords,
    });
  }

  // Fitness depth — one hit per Exercise Library card, Warm-Up &
  // Cool-Down movement, and Stretching card, deep-linked to the card
  // in its Fitness tile. Section names are new (not in the future or
  // spouse search scopes), so future-member fitness reach stays
  // exactly as built and nothing leaks into spouse search.
  const FIT_SECTION: Record<string, string> = {
    exercise: "Exercise Library",
    warmup: "Warm-Up & Cool-Down",
    stretch: "Stretching",
  };
  for (const f of FITNESS_DEPTH_SEARCH) {
    out.push({
      section: FIT_SECTION[f.kind] ?? "Fitness",
      view: "fitness",
      title: f.title,
      summary: clip(f.summary),
      fitId: f.id,
      fitKind: f.kind,
      keywords: f.keywords,
    });
  }

  // Commissioning from the Ranks — one hit per route card, anchored
  // to its direction tile inside the section (the view opens that
  // tile on arrival). Summaries are the entries' own search
  // summaries: they carry the verdict wording where the pack rules
  // one (STA-21 ACTIVE, Flying CWO CLOSED, AF warrants NEW /
  // EVOLVING, Coast Guard figures WITHHELD, Space Force VERIFIED
  // NEGATIVE) and the Officer → Enlisted zero-programs finding. In
  // the member scope in full, the spouse scope in full
  // (family-decision reference), and the future-member scope as
  // aspirational reference (published routes only — the same cards).
  for (const t of COMM_TILES) {
    for (const e of t.entries) {
      out.push({
        section: "Commissioning from the Ranks",
        view: "commissioning",
        title: e.name,
        summary: clip(e.summary),
        anchor: t.label,
      });
    }
  }

  // Rank Charts — one hit per rank detail sheet, deep-landing on
  // the sheet (rankKey). Titles are the sheets' own Binder titles
  // ("{Branch} {grade} — {title}"); summaries lead with the grade
  // and the sheet's Typical field so searches for "CWO2 time in
  // grade" or "sergeant typical time" land on the right sheet.
  // Rank Charts is a member-only view: the section name is in
  // neither the future nor the spouse search scope, so nothing
  // leaks into those tracks.
  for (const s of RANK_SHEETS) {
    out.push({
      section: "Rank Charts",
      view: "ranks",
      title: `${s.branch} ${s.grade} — ${s.title}`,
      summary: clip(`${s.branch} ${s.grade} (${s.abbr}) promotion detail. Typical: ${s.typical}`),
      rankKey: s.key,
      keywords: `${s.abbr.toLowerCase()} ${s.grade.toLowerCase()} ${s.title.toLowerCase()} promotion time in grade time in service`,
      branch: s.branch,
    });
  }

  // Practice Trainers — one hit per trainer, deep-landing on that
  // trainer's setup (trainerId). Scope-only summaries: no drilled
  // content and no personal stats ever appear in a summary.
  out.push(
    {
      section: "Practice Trainers",
      view: "trainers",
      title: "Rank Insignia Trainer",
      summary: clip("Flashcards and quizzes over the Rank Charts: name the rank and branch from the insignia, branch filter included. Air Force warrants drill by text description only."),
      trainerId: "rank",
      keywords: "trainer trainers drill practice flashcards quiz insignia rank",
    },
    {
      section: "Practice Trainers",
      view: "trainers",
      title: "Knots Trainer",
      summary: clip("Flashcards and quizzes over the Knots library: name the knot from its dressed diagram, or pick the right diagram for a name. Family filter included."),
      trainerId: "knots",
      keywords: "trainer trainers drill practice flashcards quiz knots",
    },
    {
      section: "Practice Trainers",
      view: "trainers",
      title: "Signals Trainer",
      summary: clip("Flashcards and quizzes over the Hand & Arm Signals: name the signal from its poses, with family and service filters — USMC forms drill as published."),
      trainerId: "signals",
      keywords: "trainer trainers drill practice flashcards quiz signals hand arm",
    },
    {
      section: "Practice Trainers",
      view: "trainers",
      title: "General Orders Trainer",
      summary: clip("Flashcards and quizzes over the General Orders: recite each order verbatim — Army 3, Marine Corps 11, Navy 11, each exactly as its service publishes it."),
      trainerId: "generalorders",
      keywords: "trainer trainers drill practice flashcards quiz general orders sentry guard duty verbatim",
    },
  );

  // The seven Nov 9, 2026 additions — one hit per card, anchored to
  // its tile label so PackSectionView opens the tile and scrolls to
  // the card (data-card-anchor). Track scoping is by section display
  // name in App.tsx: COOL / Assignments / TSP are member + spouse;
  // Evaluations is member-only (its name is in no other scope);
  // Federal Jobs is member in full and spouse via its routed tiles
  // (the spouse scope lists the section name — the view itself hides
  // memberOnly tiles there); Parents & Loved Ones and ROTC &
  // Academies are future-track sections (their names are in
  // FUTURE_SEARCH_SECTIONS) and are not opened on member/spouse
  // shells at all. Pinned cards (the Red Cross card) carry no tile
  // anchor — they sit above the hub, where the hit lands.
  const PAYCHARTS_HITS: SearchHit[] = [
    {
      section: "Pay Charts & Rates",
      view: "paycharts",
      title: "Enlisted Pay Table — 2026",
      summary:
        "2026 DFAS monthly basic pay, enlisted grades " +
        ENLISTED_PAY.map((r) => r[0]).join(", ") +
        ", all 22 years-of-service columns. E-9 Over 12 = $7,066.50. E-7 Over 26 = $7,067.40. E-1 under 4 months $2,225.70.",
      anchor: "Enlisted Pay Table — 2026",
    },
    {
      section: "Pay Charts & Rates",
      view: "paycharts",
      title: "Warrant Officer Pay Table — 2026",
      summary:
        "2026 DFAS monthly basic pay, warrant grades " +
        WARRANT_PAY.map((r) => r[0]).join(", ") +
        ", all 22 years-of-service columns. W-3 Over 14 = $7,397.70.",
      anchor: "Warrant Officer Pay Table — 2026",
    },
    {
      section: "Pay Charts & Rates",
      view: "paycharts",
      title: "Officer Pay Table — 2026",
      summary:
        "2026 DFAS monthly basic pay, officer grades " +
        OFFICER_PAY.map((r) => r[0]).join(", ") +
        ", all 22 years-of-service columns. Caps: O-10 $18,999.90; O-7 to O-9 over-26-and-beyond $15,408.30. Cadet/midshipman pay $1,452.90.",
      anchor: "Officer Pay Table — 2026",
    },
    {
      section: "Pay Charts & Rates",
      view: "paycharts",
      title: "O-1E / O-2E / O-3E Pay Table — 2026",
      summary:
        "2026 DFAS monthly basic pay, prior-service officer grades " +
        OE_PAY.map((r) => r[0]).join(", ") +
        " — more than 4 years of active service as enlisted or warrant, or more than 1,460 points.",
      anchor: "O-1E / O-2E / O-3E Pay Table — 2026",
    },
    ...PAY_ROUTER_ENTRIES.map((e) => ({
      section: "Pay Charts & Rates",
      view: "paycharts" as const,
      title: e.name,
      summary: e.summary,
      anchor: "Allowances — Calculators Only",
    })),
    ...PAY_NOTES_ENTRIES.map((e) => ({
      section: "Pay Charts & Rates",
      view: "paycharts" as const,
      title: e.name,
      summary: e.summary,
      anchor: "Read First & Notes",
    })),
  ];

  const PACK_SECTIONS: PackSection[] = [
    COOL_SECTION,
    ASSIGNMENTS_SECTION,
    EVALS_SECTION,
    FEDJOBS_SECTION,
    TSP_SECTION,
    PARENTS_SECTION,
    ROTC_SECTION,
    CHANNELS_SECTION,
    RELIEF_SECTION,
    CHAPLAINS_SECTION,
    HONORS_SECTION,
    OCONUS_SECTION,
    // Closure Sweep (Nov 9, 2026) — Career + Life PackSections, same
    // one-hit-per-card deep-landing through tiles. Track scoping by
    // section display name: Board Prep and Writing Helpers are
    // member-only (in no other scope); IDES, CLEP/DANTES + JST,
    // Housing Pack, Car-Buying Guide, OPSEC & Social Media, and
    // Give-Back are member + spouse (names in BUDDY_SPOUSE_SECTIONS);
    // none of the eight is in the future scope.
    BOARD_SECTION,
    WRITING_SECTION,
    IDES_SECTION,
    CLEPJST_SECTION,
    HOUSING_SECTION,
    CARBUYING_SECTION,
    OPSEC_SECTION,
    GIVEBACK_SECTION,
    // Red-Team Gap Fills (Nov 9, 2026) — one hit per card through the
    // same PackSection loop. Track scoping by section display name:
    // Spouse Work Abroad & After a PCS, VA Caregiver Support & EFMP
    // Respite, Germany Living Guide, Building Credit From Zero,
    // General Orders, and Retiree Uniform & Ceremony are member +
    // spouse (names in BUDDY_SPOUSE_SECTIONS); Barracks Daily Life is
    // member-only (in no other scope); none is in the future scope.
    SPOUSEWORK_SECTION,
    CAREGIVER_SECTION,
    GERMANY_SECTION,
    CREDIT_SECTION,
    BARRACKS_SECTION,
    GO_SECTION,
    RETIREE_SECTION,
  ];

  // Closure Sweep — Field Tools reference entries. One hit per entry,
  // deep-landing through closureId onto the entry card in its tool.
  for (const e of LANDNAV) {
    out.push({
      section: "Land Navigation",
      view: "fieldtools",
      title: `${e.code} — ${e.title}`,
      summary: clip(e.body[0] ?? e.title),
      closureId: e.id,
    });
  }
  for (const e of FIRSTAID) {
    out.push({
      section: "First Aid & Buddy Aid",
      view: "fieldtools",
      title: `${e.code} — ${e.title}`,
      summary: clip(e.body[0] ?? e.title),
      closureId: e.id,
    });
  }
  for (const e of DRILL) {
    out.push({
      section: "Drill & Ceremonies",
      view: "fieldtools",
      title: `${e.code} — ${e.title}`,
      summary: clip(e.body[0] ?? e.title),
      closureId: e.id,
    });
  }

  // Closure Sweep — Phrase Cards on the My Installation OCONUS hubs.
  // One hit per card (section "My Installation" — in the member and
  // spouse scopes; the future track's My Installation is locked).
  // Every phrase rides in keywords (matched unclipped) so any word on
  // the card finds it; the summary stays a clipped preview. Korea's
  // gaps get NO keywords: a gap has no phrase to land on.
  for (const card of Object.values(PHRASE_CARDS)) {
    out.push({
      section: "My Installation",
      view: "installation",
      title: card.title,
      summary: clip(`${card.sub} ${card.rows.map((r) => `${r.english} ${r.phrase}`).join(" · ")}`),
      keywords: `phrase card phrases language ${card.place.toLowerCase()} ${card.rows.map((r) => `${r.english} ${r.phrase}`).join(" ").toLowerCase()}`,
    });
  }

  // Closure Sweep — OPSEC reporting recall: the reporting card's
  // summary is long and the iSALUTE route sits past the summary clip,
  // so the card also carries a keywords hit (PAYCHARTS_HITS pattern)
  // landing on the same tile and card.
  out.push({
    section: "OPSEC & Social Media",
    view: "opsec",
    title: "Where OPSEC concerns get reported (layered — no single hotline)",
    summary: clip("The layered reporting route: chain of command / unit OPSEC manager first, USMC MOST, Army iSALUTE for suspicious solicitation, COR for contractors, platform support for a compromised account. No DoD-wide OPSEC hotline exists."),
    anchor: "Reporting OPSEC Concerns",
    keywords: "isalute 1-800-225-5779 call-spy report opsec violation concern counterintelligence suspicious solicitation most mcioc",
  });
  for (const sec of PACK_SECTIONS) {
    for (const e of sec.pinned ?? []) {
      out.push({
        section: sec.title,
        view: sec.view,
        title: e.name,
        summary: clip(e.summary),
      });
    }
    for (const t of sec.tiles) {
      for (const e of t.entries) {
        out.push({
          section: sec.title,
          view: sec.view,
          title: e.name,
          summary: clip(e.summary),
          anchor: t.label,
          branch: branchNamedIn(t.label) ?? branchNamedIn(e.name) ?? undefined,
        });
      }
    }
    if (sec.checklist) {
      out.push({
        section: sec.title,
        view: sec.view,
        title: sec.checklist.title,
        summary: clip(sec.checklist.line),
        anchor: sec.checklist.tileLabel,
      });
    }
  }

  // Red-Team Gap Fills — keyword recall hits (the OPSEC / phrase-card
  // precedent): these cards' key terms sit past the 220-char summary
  // clip, so each also carries a keywords hit landing on the SAME
  // tile and card. Titles match the entry names exactly.
  out.push(
    {
      section: "Spouse Work Abroad & After a PCS",
      view: "spousework",
      title: "What SOFA status means for a dependent who wants to work in Germany",
      summary: clip("SOFA status for a dependent who wants to work in Germany: the SOFA certificate in the passport, exemption from the German Residence Act and from a labor permit, and why you do not register at Town Hall."),
      anchor: "SOFA & Working in Germany",
      keywords: "sofa spouse employment germany work permit dependent labor",
    },
    {
      section: "Spouse Work Abroad & After a PCS",
      view: "spousework",
      title: "Working on the German economy",
      summary: clip("Working on the German economy: no SOFA status in the job, German taxes and social insurance, and the 11-digit IdNr through the BZSt."),
      anchor: "SOFA & Working in Germany",
      keywords: "idnr tax identification number bzst german economy job social insurance minijob",
    },
    {
      section: "Spouse Work Abroad & After a PCS",
      view: "spousework",
      title: "The general rule: quitting to follow a relocating service member",
      summary: clip("Unemployment insurance after a spouse quits to follow a PCS: state law decides — 46 states have passed laws that may qualify a spouse who resigns to move with the service member, per the Coast Guard Spouse Employment Program page."),
      anchor: "Unemployment After a PCS Quit",
      keywords: "unemployment insurance pcs quit resign move spouse benefits claim",
    },
    {
      section: "VA Caregiver Support & EFMP Respite",
      view: "caregiver",
      title: "Program of Comprehensive Assistance for Family Caregivers (PCAFC)",
      summary: clip("PCAFC: the 70% rating test, Form 10-10CG, CHAMPVA, and the stipend as VA's published formula — OPM GS grade 4 step 1 locality rate divided by 12, Level One x0.625, Level Two x1.00. No dollar figure is published by VA."),
      anchor: "VA Caregiver Programs (PCAFC + PGCSS)",
      keywords: "pcafc stipend formula champva caregiver payment 10-10cg grade 4 step 1 locality",
    },
    {
      section: "Germany Living Guide",
      view: "germany",
      title: "Utility-bill VAT relief — UTAP, not VAT forms",
      summary: clip("UTAP: tax-free utilities in Germany through the Tax Relief Office — electricity, gas, and water — not through NF-1 / NF-2 VAT forms."),
      anchor: "VAT Relief & UTAP",
      keywords: "utap utilities germany electricity gas water tax relief nebenkosten",
    },
    {
      section: "Germany Living Guide",
      view: "germany",
      title: "EU pet passport — after arrival",
      summary: clip("The EU pet passport is issued after arrival in the EU by an authorised vet — entry from the U.S. is on the EU animal health certificate."),
      anchor: "Bringing a Pet to Germany",
      keywords: "eu pet passport germany dog cat ferret travel",
    },
    {
      section: "Germany Living Guide",
      view: "germany",
      title: "German driving age and why a U.S. teen license does not simply transfer",
      summary: clip("Teen driving in Germany: a valid U.S. license plus the USAREUR license; the minimum age conflicts across official pages — 17 vs. 18 — and prints both sides."),
      anchor: "Teenagers in Germany",
      keywords: "teenager teen driving usareur license germany 17 18 pov",
    },
    {
      section: "Retiree Uniform & Ceremony",
      view: "retireewear",
      title: "The flag: how the retirement flag is provided, and the flown-flag option",
      summary: clip("The retirement flag the service presents at no cost by statute, and the separate Capitol-flown keepsake flag ordered through a member of Congress."),
      anchor: "Retirement Ceremony Planning",
      keywords: "retirement flag capitol flown congress presented nsn 8345-00-656-1435",
    },
    {
      section: "Retiree Uniform & Ceremony",
      view: "retireewear",
      title: "Shadow box: pointers only — official sources are thin",
      summary: clip("No official shadow-box how-to exists; the Navy's MILPERSMAN note says shadow boxes are gifts paid from separate resources, not official funds."),
      anchor: "Retirement Ceremony Planning",
      keywords: "shadowbox shadow box display case flag medals gift",
    },
  );

  // Personalization build — the synonym layer (ux-reorg.md §B.6.1):
  // plain words members actually type, mapped to the sections and
  // cards that answer them. Match-only: the words ride in `keywords`
  // (the established keywords-hit precedent), never printed as titles.
  // Each door hit lands on its section (anchored to its group where
  // the group is the answer). Section names match the sections' own
  // display names so track scoping applies exactly as for real hits.
  for (const row of SYNONYM_ROWS) {
    for (const h of row.hits) {
      out.push({ ...h, summary: clip(h.summary), keywords: row.words.join(" ") });
    }
  }

  out.push(...PAYCHARTS_HITS);

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
function normalizeCodeText(v: string): string {
  return v.replace(/[\s-]+/g, "").toUpperCase();
}

/** Bounded edit distance: true when a and b differ by at most one
 * insertion, deletion, or substitution (and are not identical). */
function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  if (la === lb) {
    // One substitution, or one adjacent transposition ("unifrom").
    let firstDiff = -1;
    let diffs = 0;
    for (let k = 0; k < la; k++) {
      if (a[k] !== b[k]) {
        diffs++;
        if (firstDiff < 0) firstDiff = k;
        if (diffs > 2) return false;
      }
    }
    if (diffs === 1) return true;
    if (diffs === 2) {
      const k = firstDiff;
      return a[k] === b[k + 1] && a[k + 1] === b[k] && k + 1 < la;
    }
    return false;
  }
  // One insertion / deletion.
  const short = la < lb ? a : b;
  const long = la < lb ? b : a;
  let x = 0;
  let y = 0;
  let skipped = false;
  while (x < short.length && y < long.length) {
    if (short[x] === long[y]) {
      x++;
      y++;
    } else {
      if (skipped) return false;
      skipped = true;
      y++;
    }
  }
  return true;
}

/**
 * Score every hit for a query. Tiers: 0 exact title/code (code
 * comparison is space/dash-normalized, so "03 11" and "0311" both
 * resolve — §B.6.2), 1 title or keywords, 2 summary, 3 fuzzy
 * (one-edit misspellings of a title word or job code — the lowest
 * tier, never outranking an exact or keyword hit). Global search
 * ALWAYS searches everything (H-2): no scope or filter is applied
 * here; `branch` only orders within a tier (branch-first, §B.6.3).
 */
function scoreHits(
  rawQuery: string,
  opts?: { branch?: string; partnerBranch?: string },
): { hit: SearchHit; tier: number; idx: number }[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const qCode = normalizeCodeText(q);
  const myBranch = opts?.branch ? normalizeBranch(opts.branch) : null;
  const partnerBranch = opts?.partnerBranch ? normalizeBranch(opts.partnerBranch) : null;

  const scored: { hit: SearchHit; tier: number; idx: number }[] = [];
  SEARCH_INDEX.forEach((hit, idx) => {
    const title = hit.title.toLowerCase();
    const summary = hit.summary.toLowerCase();
    const keywords = hit.keywords ?? "";
    let tier = -1;
    if ((hit.code && (hit.code.toLowerCase() === q || normalizeCodeText(hit.code) === qCode)) || title === q) tier = 0;
    else if (title.includes(q) || tokens.every((t) => title.includes(t))) tier = 1;
    else if (keywords && (keywords.includes(q) || tokens.every((t) => keywords.includes(t)))) tier = 1;
    else if (summary.includes(q) || tokens.every((t) => `${title} ${summary}`.includes(t))) tier = 2;
    else if (tokens.length === 1 && q.length >= 4) {
      // Fuzzy tier: a one-edit misspelling of a title word, or of the
      // hit's job code with separators ignored.
      const words = title.split(/[^a-z0-9]+/).filter((w) => w.length >= 4);
      if (words.some((w) => withinOneEdit(q, w))) tier = 3;
      else if (hit.code && withinOneEdit(qCode.toLowerCase(), normalizeCodeText(hit.code).toLowerCase())) tier = 3;
    }
    if (tier >= 0) scored.push({ hit, tier, idx });
  });
  scored.sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    if (myBranch) {
      // Household ordering (red-team round 2, F-1): own branch first,
      // the partner branch second, other branches after. A single-
      // branch profile passes no partnerBranch and orders exactly as
      // before.
      const rankOf = (br: string | string[] | undefined): number => {
        const bs = Array.isArray(br) ? br.map((x) => normalizeBranch(x)) : br != null ? [normalizeBranch(br)] : [];
        if (bs.some((x) => x === myBranch)) return 0;
        if (partnerBranch && bs.some((x) => x === partnerBranch)) return 1;
        return 2;
      };
      const aRank = rankOf(a.hit.branch);
      const bRank = rankOf(b.hit.branch);
      if (aRank !== bRank) return aRank - bRank;
    }
    return a.idx - b.idx;
  });
  return scored;
}

export function runGlobalSearch(rawQuery: string, opts?: { branch?: string; partnerBranch?: string }): SearchGroup[] {
  const scored = scoreHits(rawQuery, opts);

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

/**
 * Zero-result rescue (§B.6.4): the closest fuzzy matches across the
 * whole index, one per section, best tier first — so a misspelled or
 * near-miss query always offers a next tap instead of a dead end.
 */
export function closestMatches(rawQuery: string, opts?: { branch?: string; partnerBranch?: string }): SearchHit[] {
  const scored = scoreHits(rawQuery, opts);
  const seen = new Set<string>();
  const out: SearchHit[] = [];
  for (const s of scored) {
    if (seen.has(s.hit.section)) continue;
    seen.add(s.hit.section);
    out.push(s.hit);
    if (out.length >= 5) break;
  }
  return out;
}
