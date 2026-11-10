// Writing Helpers — transcribed from the Closure Sweep CAREER pack
// (~/workspace/military-app/closure/closure-career.md, Part 2,
// researched Nov 9, 2026). Discipline from the pack: verb lists and
// sample phrases appear ONLY where a guide itself publishes them.
// Only the Air Force publishes a verb table (AFH 33-337, The Tongue
// and Quill, Ch. 19) — WH-10's plain statement ships as content, and
// NO verb list is invented for any other service. Members only.

import type { PackSection } from "./seven";

const AF_VERBS =
  "Accomplished, Achieved, Acquired, Acted, Activated, Actuated, Adapts, Adhered, Adjusted, Administered, Advised, Agitated, Analyzed, Anticipated, Applied, Appraised, Approved, Aroused, Arranged, Articulated, Assembled, Asserted, Assessed, Assigned, Assisted, Assured, Attained, Attend, Authorized, Averted, Bolstered, Brought, Build, Calculated, Capitalized, Catalyzed, Chaired, Challenged, Clarified, Collaborate, Collected, Commanded, Communicated, Compared, Compelled, Competed, Compiled, Completed, Composed, Comprehend, Computed, Conceived, Concentrated, Conducted, Conformed, Confronted, Considered, Consolidated, Consulted, Contacted, Continued, Contracted, Contributed, Controlled, Cooperate, Coordinated, Created, Cultivated, Delegated, Demonstrated, Deterred, Developed, Devised, Displayed, Dominated, Drove, Elicited, Embodied, Emerged, Emulated, Encouraged, Endeavored, Energized, Enforced, Enhanced, Enriched, Ensured, Escalated, Established, Exceeded, Excelled, Expanded, Expedited, Exploited, Explored, Fabricated, Facilitated, Focused, Forced, Formulated, Generated, Grasped, Helped, Honed, Identified, Ignited, Impassioned, Implemented, Improved, Initiated, Inspired, Insured, Invigorated, Kindled, Launched, Maintained, Manipulated, Motivated, Organized, Originated, Overcame, Oversaw, Performed, Perpetuated, Persevered, Persuaded, Planned, Practiced, Prepared, Produced, Projected, Promoted, Prompted, Propagated, Propelled, Quantified, Rallied, Recognized, Rectified, Refined, Reformed, Regenerated, Rehabilitated, Rejuvenated, Renewed, Renovated, Reorganized, Required, Resolved, Revived, Sacrificed, Scrutinized, Sought, Solved, Sparked, Spearheaded, Stimulated, Strengthened, Strove, Supervised, Supported, Surpassed, Sustained, Transformed, Utilized.";

export const WRITING_SECTION: PackSection = {
  view: "writing",
  title: "Writing Helpers",
  headSub:
    "Award-writing and evaluation-writing support taken only from published writing guides. Verb lists and sample phrases appear only where a guide itself publishes them — and only one service publishes a verb list.",
  intro:
    "The Air Force method (Tongue and Quill, Ch. 19) carries the only published verb table in this section, reproduced as published. The Army material is the DA Form 638 framework as HRC publishes it. The Navy material is published training guidance under BUPERSINST 1610.10. Where a service publishes no list, this section says so — it does not invent one.",
  standing:
    "WH-10 is content, not a disclaimer: among the guides checked, only the Air Force publishes a verb list. No “Navy verb list” or “Marine Corps verb list” exists in this app, because none was found in the services' published guides.",
  tiles: [
    {
      key: "afmethod",
      label: "The Air Force Method",
      tileSub: "Entries WH-1–WH-5 · Tongue and Quill Ch. 19: method, bullet structure, the verb table, the guide's own examples",
      intro: "AFH 33-337, The Tongue and Quill (27 May 2015), Chapter 19, “Writing Better Bullet Statements” — the three-step method, the published verb and adverb lists, and the guide's own example bullets, verbatim.",
      entries: [
        {
          id: "WH-1",
          name: "The Air Force method: Tongue and Quill, Ch. 19 “Writing Better Bullet Statements”",
          summary: "The Tongue and Quill, AFH 33-337 (27 May 2015), Chapter 19, publishes a three-step method. Extract the facts: (1) isolate the action — what did the person do?; (2) annotate the action with a power verb; (3) measure the action in numbers; (4) connect the action to the bigger mission; (5) ask the member and others — don't guess; (6) capture facts from the start of the rating period, not at writing time. Then sort the facts, then build the bullet. Supporting guidance from the same chapter: keep an accomplishment file for each subordinate; know the required format/font from the governing instruction before writing; positive words leave lasting impressions while neutral or negative wording reads as average.",
          who: "Anyone writing Air Force bullets — and any rater, in any service, who wants the fact-extraction discipline.",
          body: [],
          flags: ["Edition note (pack Flag F-6): the verb/adverb tables and examples were captured from AFH 33-337 (27 May 2015), Ch. 19. Reproduce as published or don't reproduce at all."],
          links: [],
          source: "AFH 33-337, The Tongue and Quill (27 May 2015), Ch. 19",
        },
        {
          id: "WH-2",
          name: "Bullet structure as published (AF): Accomplishment–Impact",
          summary: "One accomplishment per bullet. The accomplishment element = action + power verb + measurement where available. The impact element must be accurate and its scope must match the accomplishment (a squadron-level action does not honestly carry a wing-level impact).",
          who: "Bullet writers — the scope-match rule is the chapter's honesty check on every impact statement.",
          body: [],
          flags: [],
          links: [],
          source: "AFH 33-337, Ch. 19",
        },
        {
          id: "WH-3",
          name: "Published action-verb list (AFH 33-337, Ch. 19 — “Action Verbs for the Accomplishment Element”)",
          summary: "The following verbs are reproduced as published in the chapter's table (capture confirmed alphabetically A–S on the chapter page). Note the table's own mixed verb forms (e.g., “Adapts,” “Build,” “Collaborate” appear as printed) — reproduced as published.",
          who: "Air Force bullet writers — this is the Air Force's published list, for the accomplishment element.",
          body: [AF_VERBS],
          flags: ["Pack Flag F-6: reproduce the complete table as published or don't reproduce it; the capture in the research pack was confirmed A–S against the chapter page."],
          links: [],
          source: "AFH 33-337, Ch. 19, “Action Verbs for the Accomplishment Element”",
        },
        {
          id: "WH-4",
          name: "Published adverb list (AFH 33-337, Ch. 19)",
          summary: "The chapter also publishes a modifier list (~55 words, Actively … Vigilant) for strengthening a bullet's opening. The list was captured from the chapter in the research pass; it is described here at published level and the full list reproduces only against the chapter PDF (pack Flag F-6 discipline) — the worked use of an adverb is in the guide's own example in WH-5.",
          who: "Air Force bullet writers strengthening an opening — sparingly; the chapter's examples use one.",
          body: [],
          flags: [],
          links: [],
          source: "AFH 33-337, Ch. 19",
        },
        {
          id: "WH-5",
          name: "Published example bullets (AFH 33-337, Ch. 19 — verbatim examples)",
          summary: "Accomplishment: “Processed over 300 records with no errors as part of the 42 ABW Mobility Exercise.” With adverb variant: “Tenaciously processed…” Impact element: “…ensuring all wing personnel met their scheduled clock times.” These are the guide's own examples — the only sample phrases in this section that ship as samples. Everything else is method, not templates.",
          who: "Bullet writers learning the shape — study the guide's examples, then write your member's facts, not the guide's.",
          body: [],
          flags: [],
          links: [],
          source: "AFH 33-337, Ch. 19 (verbatim examples)",
        },
      ],
    },
    {
      key: "army",
      label: "Army Awards",
      tileSub: "Entries WH-6–WH-8 · DA Form 638 formats, the justification standard, HRC bullet guidelines",
      intro: "Army award writing as HRC publishes it under the AR 600-8-22 framework: two formats, one justification standard, and the training guidelines.",
      entries: [
        {
          id: "WH-6",
          name: "Army awards: two formats (AR 600-8-22 framework, via HRC)",
          summary: "Recommendations go on DA Form 638. As published by HRC: MSM and below — the recommendation uses achievement blocks with specific bullet examples. Bronze Star Medal and above — a separate narrative is required. The BSM-through-Silver-Star narrative is limited to one double-spaced page, 12-point type; Distinguished Service Medal and higher carry no regulatory narrative length limit. A Medal of Honor reconsideration justification is capped at two single-spaced pages. Valor narratives must address terrain/weather, enemy conditions, effect on the enemy, and eyewitness statements.",
          who: "Anyone preparing a DA Form 638 — the format turns on the level of the award, not on preference.",
          body: [],
          flags: ["Pack Flag F-8: AR 600-8-22's own text was not opened first-hand in the research pass; this framing rests on HRC-hosted material, as published there."],
          links: [],
          source: "HRC awards material (AR 600-8-22 framework)",
        },
        {
          id: "WH-7",
          name: "Army award justification standard and citation structure (as published)",
          summary: "The justification must show level of responsibility and manner of performance: a succession of outstanding acts whose predominant factor is impact on organizational readiness/effectiveness. Doing the job well, alone, is published as insufficient. Citation structure as published: opening praise → specific supporting facts (most outstanding achievement, unit impact) → closing line in the form “reflects great credit upon…” (do not abbreviate within citations).",
          who: "Writers of award justifications and citations — impact on the organization is the standard, not effort.",
          body: [],
          flags: [],
          links: [],
          source: "HRC awards material (as published)",
        },
        {
          id: "WH-8",
          name: "HRC awards-training bullet guidelines (as published)",
          summary: "From HRC-hosted awards training material: write specific facts, not generalities; order content duty position → additional duties → personal accomplishments; most important first; team/unit results before individual results; emphasize results; one achievement per block.",
          who: "Writers filling the DA 638 achievement blocks.",
          body: [],
          flags: [],
          links: [],
          source: "HRC-hosted awards training material",
        },
      ],
    },
    {
      key: "navy-none",
      label: "Navy Comments & the Honest Gap",
      tileSub: "Entries WH-9–WH-10 · Navy eval comments as published; what the other guides do NOT publish",
      intro: "Navy evaluation-comment guidance from published training under BUPERSINST 1610.10 — and the section's standing honesty entry about verb lists.",
      entries: [
        {
          id: "WH-9",
          name: "Navy evaluation comments (published training guidance; attribution caution)",
          summary: "The governing instruction is BUPERSINST 1610.10 series (Navy Performance Evaluation System). Navy eval-writing training published under that instruction teaches, for the comments block (Block 43 on EVALs): you have 18 lines (16 for CPO/SCPO/MCPO reports); be concise, use bullet style, use daily language (“being flowery loses the message”); be specific — use numbers; items to consider: responsibilities, customers served, growth/development of junior Sailors, specific accomplishments and results, personnel supervised, retention efforts and results, qualifications achieved, education completed, awards, civic activities; open with a lead-in/ranking statement. Promotion recommendation values as published in the same training: Early Promote 4.0, Must Promote 3.8, Promotable 3.6, Progressing 3.4, Significant Problems 2.0.",
          who: "Navy eval writers working Block 43 — concise, specific, numbered, ranked at the open.",
          body: [],
          flags: ["Attribution caution (pack Flag F-5): these specifics were captured from Navy training decks mirrored on slide-hosting sites, not from the BUPERSINST 1610.10 text itself — verify against the current instruction before relying on a figure."],
          links: [],
          source: "BUPERSINST 1610.10 series training material (see flag)",
        },
        {
          id: "WH-10",
          name: "What the other guides do NOT publish (do not fabricate)",
          summary: "Among the sources checked in the research pass, only the Air Force publishes a verb table. No published strong-verb list was found in the Navy instruction framing or in the DoN correspondence manual framing (SECNAVINST 5216.5) pass. This app does not present an invented “Navy verb list” or “Marine Corps verb list.” If a service has no published list, the helper for that service is method-only (WH-9 style) — and this card is how the section says so.",
          who: "Every reader — if you came here looking for your service's verb list and your service isn't the Air Force, the honest answer is that your service doesn't publish one.",
          body: [],
          flags: ["Pack Flag F-7: do not fabricate per-service verb lists; non-AF writing helpers are method-only and say so."],
          links: [],
          source: "Closure CAREER pack, WH-10 / Flag F-7 (AFH 33-337; BUPERSINST 1610.10 framing; SECNAVINST 5216.5 framing)",
        },
      ],
    },
  ],
};
