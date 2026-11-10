// ── What Changed — the book's changelog (SINGLE SOURCE) ─────────────
//
// This module is the ONLY source the What Changed page renders from.
// It is derived honestly from DATA-PLAN.md's build record: an entry
// exists only for work DATA-PLAN records as actually built (and, for
// the published waves, published). Corrections that DATA-PLAN marks
// pending / owed / pre-launch NEVER appear here — a pending fix is
// never pre-announced. (Standing example: the Türkiye allied-SOF
// wording correction was deliberately absent while it was pending;
// it appears below, tagged CORRECTED, only now that the final phase
// verified the regulation text and shipped the fix.)
//
// RULE FOR FUTURE BUILDS (also recorded in DATA-PLAN.md): every build
// wave MUST append its entry (or entries) here in the same change —
// one entry per section/feature/correction, tagged NEW, CORRECTED, or
// IMPROVED, dated with the wave's date, deep-linking to its section.
// If the wave did not ship, it does not get an entry.
//
// `view` is an App.tsx View key, kept as a plain string here so this
// module stays dependency-free; App.tsx casts it at the call site.
// `openIn` names the shells whose view whitelist (App.tsx:
// futureViews / spouseViews; the member shell opens every view) can
// actually open `view`. Shells not listed see the entry as a
// title-only line — never a dead link. The build probe verifies
// `openIn` against App.tsx's whitelists.

import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

export type ChangeTag = "NEW" | "CORRECTED" | "IMPROVED";
export type ShellTrack = "member" | "spouse" | "future";

export interface ChangeEntry {
  id: string;
  /** Wave date, YYYY-MM-DD (the DATA-PLAN build date). */
  date: string;
  /** Display label for the date group, e.g. "Nov 9, 2026". */
  dateLabel: string;
  /** Stable ordering / badge timestamp (ms since epoch). */
  at: number;
  tag: ChangeTag;
  title: string;
  /** One plain-language line: what changed and why it matters. */
  line: string;
  /** App view key the entry deep-links into. */
  view: string;
  /** Shells that can open `view`; others see a title-only line. */
  openIn: ShellTrack[];
}

const D8 = Date.UTC(2026, 10, 8, 12, 0, 0);
const D9 = Date.UTC(2026, 10, 9, 12, 0, 0);
const D10 = Date.UTC(2026, 10, 10, 12, 0, 0);
const M: ShellTrack[] = ["member"];
const MS: ShellTrack[] = ["member", "spouse"];
const MF: ShellTrack[] = ["member", "future"];
const ALL: ShellTrack[] = ["member", "spouse", "future"];

/** Newest first. Within a date, later builds sit above earlier ones. */
export const CHANGELOG: ChangeEntry[] = [
  // ── Nov 10, 2026 — Allied Special Forces Country Search ──────────
  {
    id: "wc-allied-country-search",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 12000,
    tag: "IMPROVED",
    title: "Allied Special Forces — search by country",
    line: "Global search now finds every Allied Special Forces country by name — including the spellings people actually type, like “turkey” for Türkiye, “korea” for South Korea, and “holland” for the Netherlands — and each result opens the section on that country's entries. Before, searching “turkiye” found nothing at all, even though the country was in the book the whole time.",
    view: "alliedsf", openIn: MF,
  },

  // ── Nov 10, 2026 — Life-Event Search ─────────────────────────────
  {
    id: "wc-life-event-search",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 11000,
    tag: "NEW",
    title: "Life-event search — say it like you'd say it",
    line: "Search now understands whole situations: type “we just had a baby”, “my pay is messed up”, “we're PCSing”, or “my dad just died” and a short “Sounds like…” bundle of the right sections appears above your results — the full results still show below, nothing is filtered or hidden, and every door in the bundle opens a section already in the book.",
    view: "home", openIn: ALL,
  },

  // ── Nov 10, 2026 — Essentials Lane ───────────────────────────────
  {
    id: "wc-essentials-lane",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 10000,
    tag: "NEW",
    title: "Essentials — start here, on every Home",
    line: "Every Home now carries an Essentials lane: the handful of sections a person in your track needs first — safety, pay, benefits, health, and getting settled — in order, as shortcuts to the sections already in the book. Members, spouses, and future members each get their own list, and nothing in the lane is new content: every card opens the real section it names.",
    view: "home", openIn: ALL,
  },

  // ── Nov 10, 2026 — Pin to Home ───────────────────────────────────
  {
    id: "wc-pin-to-home",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 9000,
    tag: "NEW",
    title: "Pin to Home — your cards, one tap from Home",
    line: "Every card now carries a 📌 Pin to Home control next to Save to Binder: pin the cards you reach for most and they sit in a Pinned row at the very top of your Home, above For You — tap one to jump straight back to it, unpin it from the row or from the card itself. Pins are private to your profile, like your Binder, and they're shortcuts, not saves: pinning never puts a card in your Binder.",
    view: "home", openIn: ALL,
  },

  // ── Nov 10, 2026 — Home Placement: Field Tools & Fieldcraft ─────
  {
    id: "wc-home-field",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 8000,
    tag: "IMPROVED",
    title: "Field Tools and Fieldcraft now live on Home",
    line: "The field kit no longer hides behind More and search: Home now carries an “In the field” pair up top — Field Tools (compass kit, Land Navigation, First Aid, Knots, Signals, the pocket deck) and Fieldcraft (ruck packing and planning, field guides, Kill Card and Range Card), each one tap from Home.",
    view: "fieldtools", openIn: M,
  },

  // ── Nov 10, 2026 — Final Verification: Allied SOF ────────────────
  {
    id: "wc-turkiye-correction",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 7000,
    tag: "CORRECTED",
    title: "Türkiye ÖKK — a wrong claim, corrected",
    line: "The book's research note said Türkiye's ÖKK takes “no direct civilian entry.” The regulation itself (Assignment Regulation Art. 50, as amended Apr 28, 2026) says otherwise: contracted officers and NCOs can be recruited directly into the armed forces to serve directly in ÖKK. The entry now prints the selection route as the regulation publishes it, with the correction stated on the card.",
    view: "alliedsf", openIn: MF,
  },
  {
    id: "wc-allied-verified",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 6500,
    tag: "IMPROVED",
    title: "Allied Special Forces — Poland, South Korea & the Netherlands verified",
    line: "Entries that shipped flagged are now verified from the official pages: Poland's GROM (who can apply, the three selection stages) and AGAT (official fitness criteria — its 100 m swim standard is under 2 minutes, correcting a secondhand report), South Korea's SWC NCO announcement (scoring exactly as published; it prints no pass/fail minima, so none are claimed), and the Netherlands KCT vacancy, with both of its age figures printed as published.",
    view: "alliedsf", openIn: MF,
  },
  {
    id: "wc-search-newest",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 6250,
    tag: "IMPROVED",
    title: "Search now finds the newest pages",
    line: "Global search had no way to land on My Binder, this What Changed page, or the household view — searching “what changed”, “my binder”, “print my binder”, or “my household” found nothing relevant. All four now land where they should.",
    view: "binder", openIn: ALL,
  },

  // ── Nov 10, 2026 — Printable Binder Export ───────────────────────
  {
    id: "wc-binder-print",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 6000,
    tag: "NEW",
    title: "Print my Binder — your saved cards as one clean printout",
    line: "My Binder now prints as one clean document: a Battle Book cover with your branch and job, your saved cards grouped by section with their sources, resolved live from your own Binder when the sheet opens — remove a card and it's out of the next printout. Nothing leaves your device except your own print, and your Binder is now private to your profile.",
    view: "binder", openIn: ALL,
  },

  // ── Nov 10, 2026 — Red-Team Round 2 ──────────────────────────────
  {
    id: "wc-this-page",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 5000,
    tag: "NEW",
    title: "What Changed — this page",
    line: "A running record of what's new and what got corrected in the book, so you can see what changed since your last visit — corrections included, in the open.",
    view: "whatchanged", openIn: ALL,
  },
  {
    id: "wc-household-scope",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 4000,
    tag: "IMPROVED",
    title: "Household view — two branches, one household",
    line: "Set a partner's branch and Benefits, search, and section filters include their branch too — dual-military households no longer have to pick one service's book.",
    view: "benefits", openIn: ALL,
  },
  {
    id: "wc-userra-leave",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 3000,
    tag: "NEW",
    title: "USERRA paid leave — in Know Your Rights",
    line: "The regulation's own wording on using accrued paid leave during service, next to the five USERRA conditions — accrued leave only, sick leave separate, and the ESGR → VETS → DOJ/OSC ladder.",
    view: "rights", openIn: ALL,
  },
  {
    id: "wc-childcare",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 2000,
    tag: "NEW",
    title: "Childcare priorities & backup care",
    line: "The full published priority order (1A–3), hourly and drill-weekend care, and an honest finding where no program exists: there is no DoD sick-child care program, and the book says so instead of inventing one.",
    view: "family", openIn: MS,
  },
  {
    id: "wc-dual-bah",
    date: "2026-11-10", dateLabel: "Nov 10, 2026", at: D10 + 1000,
    tag: "NEW",
    title: "Dual BAH — when both spouses serve",
    line: "How housing allowance actually works for dual-military couples: one with-dependent rate, by election — the members choose; the senior member claims by default, and no dollar figures the source doesn't publish.",
    view: "pay", openIn: M,
  },

  // ── Nov 9, 2026 ──────────────────────────────────────────────────
  {
    id: "wc-offline",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 42000,
    tag: "IMPROVED",
    title: "Offline mode",
    line: "The whole reference book works with no connection in a loaded session; your saved info shows as a labeled last-synced copy, and changes you make offline queue and send when you're back.",
    view: "home", openIn: ALL,
  },
  {
    id: "wc-reorg",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 41000,
    tag: "IMPROVED",
    title: "Your branch first — personalization & a cleaner book",
    line: "Sections default to your branch (one tap shows everything), Home gained a For You row, More is grouped in labeled clusters, sections got plain-language names, and search understands plain words — crisis and safety content is never filtered.",
    view: "home", openIn: ALL,
  },
  {
    id: "wc-gap-fills",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 40000,
    tag: "NEW",
    title: "Gap fills — 46 entries in 7 new sections",
    line: "Spouse Work Abroad, VA Caregiver Support & EFMP Respite, the Germany Living Guide, Building Credit From Zero, Barracks Daily Life, the verbatim General Orders (+ a trainer), and Retiree Uniform & Ceremony — found by red-teaming the book as a spouse, a single parent, and a dual-military couple.",
    view: "generalorders", openIn: MS,
  },
  {
    id: "wc-closure-sweep",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 39000,
    tag: "NEW",
    title: "Closure Sweep — field, career & life",
    line: "Land Navigation (26), First Aid & Buddy Aid (17), Drill & Ceremonies (17), Board Prep, Writing Helpers, the MEB/PEB (IDES) guide, CLEP/DANTES + JST, Housing with all 18 Tenant Bill of Rights cards, the Car-Buying Guide, OPSEC, Give-Back, and OCONUS phrase cards — the pocket deck grew to 40 panels.",
    view: "housing", openIn: MS,
  },
  {
    id: "wc-mla-correction",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 38000,
    tag: "CORRECTED",
    title: "Car loans & the MLA cap — corrected",
    line: "The Military Lending Act's 36% MAPR cap does NOT cover ordinary purchase auto loans. An earlier summary could be read as if it did; the Car-Buying Guide now states the exclusion up front and prints the conflicting sentence only inside a flagged conflict box.",
    view: "carbuying", openIn: MS,
  },
  {
    id: "wc-emergency-deck",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 37000,
    tag: "NEW",
    title: "Emergency Deck, First Year Out & Flag This Entry",
    line: "Eight first-24-hours action cards (family emergency, lost CAC, arrest or accident overseas, lost passport, identity theft), the 31-task First Year Out path, and a flag control on every card so a wrong entry can be reported from where it stands.",
    view: "emergencydeck", openIn: MS,
  },
  {
    id: "wc-trainers",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 36000,
    tag: "NEW",
    title: "Practice Trainers",
    line: "Flashcards and quizzes drilled from the book's own cards — Rank Insignia, Knots, Hand & Arm Signals, and later the General Orders. Missed cards come back in the same session; streaks and bests save to your profile only.",
    view: "trainers", openIn: M,
  },
  {
    id: "wc-deck-first30",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 35000,
    tag: "NEW",
    title: "Smart-Card Deck & First 30 Days",
    line: "A printable pocket deck (9-Line MEDEVAC, the blank Kill Card, Range Card, signals, knots, comms) and the First 30 Days path — your first month at a new station as a checkable list, with a family view for spouses.",
    view: "first30", openIn: MS,
  },
  {
    id: "wc-calculators",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 34000,
    tag: "NEW",
    title: "Calculators — retirement, VA ratings, PCS money, debt",
    line: "Four working calculators: Retirement Estimator, VA Combined Ratings (the VA's own combined table, not addition), PCS Entitlements, and Debt Payoff. Your inputs save to your profile only.",
    view: "calculators", openIn: MS,
  },
  {
    id: "wc-nutrition",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 33000,
    tag: "NEW",
    title: "Nutrition — tracker & goal-based meal plans",
    line: "A private food and weight tracker plus meal plans built to your goal, inside Fitness. What you log never shows on any shared surface.",
    view: "nutrition", openIn: MS,
  },
  {
    id: "wc-fitness-depth",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 32000,
    tag: "NEW",
    title: "Fitness depth — exercises, warm-ups & stretching",
    line: "127 cards: 51 exercises and 34 stretches with original diagrams, each saying what it's good for and why it goes before or after a workout.",
    view: "fitness", openIn: MF,
  },
  {
    id: "wc-signals",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 31000,
    tag: "NEW",
    title: "Hand & Arm Signals library",
    line: "185 signals with diagrams inside Field Tools — USMC forms shown as the Marine Corps publishes them, never blended with another service's version.",
    view: "fieldtools", openIn: M,
  },
  {
    id: "wc-final-six",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 30000,
    tag: "NEW",
    title: "Final Six — clearance, kids, travel, tax, voting, health",
    line: "Security Clearances, Kids & Schools, Travel / Space-A & Lodging, Tax & Residency, the Voting Center, and Health Care & TRICARE — the last six sections of the second wave.",
    view: "healthhq", openIn: MS,
  },
  {
    id: "wc-seven-additions",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 29000,
    tag: "NEW",
    title: "Seven Additions — credentials, assignments & more",
    line: "Credentials for Your Job (COOL), How Assignments Work, Evals, Veterans' Preference & Federal Jobs, the TSP Center, Parents & Loved Ones, ROTC & Academies, Official Channels, Relief Societies, Pay Charts & Rates, Chaplains, Honors & Burial, and OCONUS Family Papers.",
    view: "cool", openIn: MS,
  },
  {
    id: "wc-commissioning",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 28000,
    tag: "NEW",
    title: "Commissioning, Reenlistment & Recruiters",
    line: "Commissioning from the Ranks (every published enlisted-to-officer and warrant route, with rank detail sheets), Reenlistment & IRR, Switching Components, and Connect with a Recruiter — each branch's official door.",
    view: "commissioning", openIn: ALL,
  },
  {
    id: "wc-fitness-calculators",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 27000,
    tag: "NEW",
    title: "Fitness Calculators — every branch test",
    line: "Score or check the USMC PFT/CFT, Army AFT, Navy PRT, Air Force PFRA, Space Force HPA, and Coast Guard screens, plus the SOF assessment checkers and allied tests — each entry names its governing document and date.",
    view: "fitness", openIn: MF,
  },
  {
    id: "wc-pft-correction",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 26000,
    tag: "CORRECTED",
    title: "Marine PFT score — corrected to the published table",
    line: "The worked example (male 21–25: 15 pull-ups, 3:00 plank, 22:30 run) scores 227 in the published table, not 226 — the pull-up ladder cell read 72 points where the order publishes 73. The calculator now uses the published 73, so the example totals 227.",
    view: "fitness", openIn: MF,
  },
  {
    id: "wc-quals",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 25000,
    tag: "NEW",
    title: "Qualifications, Schools & Certifications",
    line: "89 entries — swim and weapons tables, egress, Airborne, dive, SERE, mountain, sniper, instructor and maritime quals — plus the 45-item NOT CONFIRMED register, where rumored schools are labeled rumors and nothing unverified is presented as real.",
    view: "quals", openIn: MF,
  },
  {
    id: "wc-swim-correction",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 24000,
    tag: "CORRECTED",
    title: "Marine swim levels — the current order, settled",
    line: "Two published systems disagreed. MARADMIN 084/26 was read directly: it publishes MCO 1500.52E, so the five-level system (Basic, Novice, Competent, Proficient, Advanced) ships as current and the cancelled 1500.52D three-level system is labeled history.",
    view: "quals", openIn: MF,
  },
  {
    id: "wc-quals-corrections",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 23000,
    tag: "CORRECTED",
    title: "Qualifications — school facts corrected as printed",
    line: "Engineer Diver trains at Fort Leonard Wood and Panama City (not Eglin — that's EOD/Ranger swamp), the NWTC course is BMMC (there is no “BPMC” course), and SERE governance is JPRA as the current DoD office — each correction is flagged on its own entry.",
    view: "quals", openIn: MF,
  },
  {
    id: "wc-kill-card-correction",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 22000,
    tag: "CORRECTED",
    title: "Kill Card — corrected to what a kill card actually is",
    line: "The first build put range-card material on it. A kill card is a personal data card: name, rank, zap number (last + first initials, then the last 5 of your EDIPI), blood type, allergies, then your serialized gear with serial numbers. The range material already lived on the Range Card, which is unchanged.",
    view: "fieldcraft", openIn: M,
  },
  {
    id: "wc-field-tools",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 21000,
    tag: "NEW",
    title: "Field Tools, Fieldcraft & Knots",
    line: "On-device tools that store and send nothing — compass and MGRS grid, pace counter, 9-Line MEDEVAC, light data, a scientific calculator, timers, march and load calculators, watchbills, hydration, field notes — plus the 59-knot library with diagrams.",
    view: "fieldtools", openIn: M,
  },
  {
    id: "wc-specops",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 20000,
    tag: "NEW",
    title: "Special Forces & Elite Units + Allied Special Forces",
    line: "Every branch's elite units and the special forces of 17 partner countries, from each government's own pages — published qualifications and pipelines only, with deliberate silences printed as findings where a country publishes nothing.",
    view: "specops", openIn: MF,
  },
  {
    id: "wc-partner-forces",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 19000,
    tag: "NEW",
    title: "Partner Forces — allied ranks & protocol",
    line: "The NATO grade codes with the U.S. correspondence, 17 partner-country rank profiles at exactly the level each country's official pages support (Canada complete but code-free, because Canada publishes none), and courtesy & protocol from AR 600-25.",
    view: "partners", openIn: ALL,
  },
  {
    id: "wc-songs-flags",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 18000,
    tag: "NEW",
    title: "Songs, Anthem & Pledge + Flags",
    line: "The six service songs as the services publish them, the anthem and Pledge with their etiquette, 17 allies' anthems (an English side only where the government itself publishes one), and 24 flags with official descriptions — symbolism printed only where a government states it.",
    view: "songs", openIn: ALL,
  },
  {
    id: "wc-theming",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 17000,
    tag: "NEW",
    title: "Branch & job theming",
    line: "Your book wears your branch: its colors head every section, its emblem and your job's device appear on Home and your Binder cover — profile art only, never the app's branding. (Marines: no per-MOS device exists, so the EGA and your MOS in text — verified, not invented.)",
    view: "home", openIn: ALL,
  },
  {
    id: "wc-installation",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 16000,
    tag: "NEW",
    title: "My Installation + Apps & Getting Around",
    line: "Set your installation from the official directory's own list and Home becomes its guide — on-base services from its own pages, the national locators, what's around it, and the apps that get you around post.",
    view: "installation", openIn: MS,
  },
  {
    id: "wc-lingo-emergency",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 15000,
    tag: "NEW",
    title: "Lingo, My Emergency Card & Morse",
    line: "The plain-English dictionary families actually use, your private emergency card (contacts, blood type, allergies — visible only to you), and the Morse chart.",
    view: "lingo", openIn: ALL,
  },
  {
    id: "wc-weapons",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 14000,
    tag: "NEW",
    title: "Weapons & Qualification",
    line: "The weapon-system fact files and every branch's annual qualification, as officially published — safety sets pinned first, never filtered away.",
    view: "weapons", openIn: MF,
  },
  {
    id: "wc-trails",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 13000,
    tag: "NEW",
    title: "Trails & Camping",
    line: "Type a place and get the real platforms' own search links for trails and campsites, plus FamCamps, ODR rentals, and the camping guides — the unofficial campground directory is labeled unofficial.",
    view: "trails", openIn: ALL,
  },
  {
    id: "wc-uniforms-gear",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 12000,
    tag: "NEW",
    title: "Uniforms & Gear Search",
    line: "Every standard uniform for all six branches — labeled diagrams, wear-order checklists, the governing regulation — and one gear search box routed to verified store searches and buying guides.",
    view: "uniforms", openIn: M,
  },
  {
    id: "wc-spouse-side",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 11000,
    tag: "NEW",
    title: "The spouse side — Spouse Hub & Spouse Connect",
    line: "A spouse's own shell: orientation, careers and licenses, money and legal, deployment support — and Spouse Connect, a spouses-only directory with reviewed listings and mutual accept.",
    view: "spousehub", openIn: MS,
  },
  {
    id: "wc-joining",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 10000,
    tag: "NEW",
    title: "Joining — the future-member front door",
    line: "Thinking about serving? A separate walled area: per-branch boot camp explainers, OCS and officer qualifications, every job at the public layer, open benefits, and fitness prep for the test you're training for.",
    view: "bootcamp", openIn: MF,
  },
  {
    id: "wc-six-pack",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 9000,
    tag: "NEW",
    title: "Six pack — Reserve, Rights, LES, Home Loan, Ribbons, Deployment",
    line: "Guard & Reserve, Know Your Rights (SCRA / USERRA / MLA from the agencies that run them), Your Pay Stub Explained, the VA Home Loan Center, Awards & Ribbon Rack, and Family Care Plan & Deployment Readiness.",
    view: "rights", openIn: ALL,
  },
  {
    id: "wc-feedback-claims-people",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 8000,
    tag: "NEW",
    title: "Feedback, Alerts, VA Claim Tracker & Find Your People",
    line: "Send Feedback and the Alerts Center, a private VA Claim Tracker (your claims, your profile only), and Find Your People — member listings by branch, base, and interest.",
    view: "claimtracker", openIn: M,
  },
  {
    id: "wc-buddy",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 7000,
    tag: "NEW",
    title: "Battle Buddy — the AI helper",
    line: "Ask a question and it answers from the book's own content, naming the section and linking you straight there. Each shell's Buddy only knows what that shell can open.",
    view: "buddy", openIn: ALL,
  },
  {
    id: "wc-medical-certs",
    date: "2026-11-09", dateLabel: "Nov 9, 2026", at: D9 + 6000,
    tag: "NEW",
    title: "Medical Training & Certs",
    line: "The medical training and certification picture — CLS/TCCC cross-links and the published course routes, at the level the official pages support.",
    view: "medical", openIn: M,
  },

  // ── Nov 8, 2026 ──────────────────────────────────────────────────
  {
    id: "wc-library",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 12000,
    tag: "NEW",
    title: "The MOS Library — 820 jobs, all six branches",
    line: "Every job in the Army, Marine Corps, Navy, Air Force, Space Force, and Coast Guard — what it does, how its pipeline runs, and the deep entries built from official sources and the 1371 source decks.",
    view: "mos", openIn: MF,
  },
  {
    id: "wc-home-search",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 11000,
    tag: "NEW",
    title: "Personalized Home & global search",
    line: "Home is built around your profile — your job, installation, deadlines, and squad — and one search box reaches every section and lands on the exact card.",
    view: "home", openIn: ALL,
  },
  {
    id: "wc-benefits",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 10000,
    tag: "NEW",
    title: "Benefits",
    line: "VA & DoD benefits, each branch's own programs, and state help — with the framing on every card: what applies while you serve and what applies after.",
    view: "benefits", openIn: ALL,
  },
  {
    id: "wc-pay-money",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 9000,
    tag: "NEW",
    title: "Pay & Money",
    line: "How military pay actually works — the allowances, the deductions, and the money traps named by their official names.",
    view: "pay", openIn: M,
  },
  {
    id: "wc-pcs",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 8000,
    tag: "NEW",
    title: "PCS Move Center",
    line: "The whole move in one place: timeline, entitlements, household goods, housing, and claims when something breaks.",
    view: "pcs", openIn: MS,
  },
  {
    id: "wc-family",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 7000,
    tag: "NEW",
    title: "Family & Life Events",
    line: "DEERS and ID cards, childcare and school, EFMP, and the support centers — the family's side of service, from the services' own pages.",
    view: "family", openIn: MS,
  },
  {
    id: "wc-claims",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 6000,
    tag: "NEW",
    title: "VA Claims & Free Help",
    line: "How a claim actually moves, what the evidence rules are, and where the free accredited help is — VSOs before anyone who charges.",
    view: "claims", openIn: M,
  },
  {
    id: "wc-care",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 5000,
    tag: "NEW",
    title: "Care & Crisis",
    line: "Crisis lines pinned at the top — 988 (press 1 for the Veterans Crisis Line) — then Vet Centers, VA health enrollment, housing help, and funeral honors. This section is never filtered, in any view, ever.",
    view: "care", openIn: MS,
  },
  {
    id: "wc-paths-binder",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 4000,
    tag: "NEW",
    title: "Guided Paths, Deadlines & My Binder",
    line: "Named journeys (Getting Out, PCS Orders, Deploying, Retiring…) as step-by-step checklists, countdowns from your own dates, and My Binder — every card you save, in one place, printable.",
    view: "paths", openIn: M,
  },
  {
    id: "wc-community",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 3000,
    tag: "NEW",
    title: "Community & Story",
    line: "War Stories, the Wall of Honor, This Day in Military History, Find a Mentor, My Service Timeline, Traditions & Lore, and Mail Call — the book's memory, kept by its members.",
    view: "warstories", openIn: M,
  },
  {
    id: "wc-core-sections",
    date: "2026-11-08", dateLabel: "Nov 8, 2026", at: D8 + 2000,
    tag: "NEW",
    title: "The core book — ranks, transition, education, retirement & more",
    line: "Rank Charts for all six branches, Transition & Jobs, the Education Planner, the Retirement Hub, Your Records & DD214, Deals & Discounts, the State Benefits Finder, Find Anything, Change Your Job, and Switch Branches — the founding sections everything since has built on.",
    view: "ranks", openIn: M,
  },
];

/** The newest entry's timestamp — what "seen" means once read. */
export const LATEST_CHANGE_AT: number = CHANGELOG.reduce((m, e) => Math.max(m, e.at), 0);

/**
 * How many entries a profile hasn't seen. A profile that has NEVER
 * opened What Changed (hasSeen = false) gets NO badge — no wall of
 * fake newness on a first visit; its card reads "Start here" instead.
 */
export function unseenChangeCount(hasSeen: boolean, lastSeenAt: number | null): number {
  if (!hasSeen || lastSeenAt == null) return 0;
  return CHANGELOG.filter((e) => e.at > lastSeenAt).length;
}

/** Entries grouped by date, newest date first, order preserved. */
export function changelogByDate(): { date: string; dateLabel: string; entries: ChangeEntry[] }[] {
  const groups: { date: string; dateLabel: string; entries: ChangeEntry[] }[] = [];
  for (const e of CHANGELOG) {
    const g = groups.find((x) => x.date === e.date);
    if (g) g.entries.push(e);
    else groups.push({ date: e.date, dateLabel: e.dateLabel, entries: [e] });
  }
  return groups;
}

/**
 * The signed-in profile's What Changed seen-state, server-side and
 * profile-isolated (the section_scopes pattern): the server resolves
 * the profile; no profile id is ever sent. The query key embeds the
 * profile id so one profile's state can never render under another.
 */
export function useChangelogSeen(profileId: number) {
  return useQuery({
    queryKey: ["changelogSeen", profileId],
    queryFn: () => api.getChangelogSeen({}),
  });
}
