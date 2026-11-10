// CLEP/DANTES + JST — transcribed from the Closure Sweep CAREER pack
// (~/workspace/military-app/closure/closure-career.md, Part 4,
// researched Nov 9, 2026). Exam names, counts, prices, and policies
// come from DANTES / College Board / Prometric pages only. The DSST
// retest conflict (DANTES: 3 months vs college pages: 30 days) prints
// BOTH sides and points to the DANTES/policy source as the authority.
// Members and spouses in full; future members locked.

import type { PackSection } from "./seven";

export const CLEPJST_SECTION: PackSection = {
  view: "clepjst",
  title: "CLEP/DANTES + JST",
  headSub:
    "Free exams that turn what you already know into college credit — and the JST, the transcript that carries your military training to colleges. Exam names, counts, and policies are from DANTES, College Board, and Prometric only.",
  intro:
    "Two different programs, one goal: credit for what you learned in uniform. CLEP and DSST are examinations — you test out of a course. The JST is a transcript — it documents training ACE has already evaluated for credit. DANTES is the defense activity that funds the exams for eligible members.",
  standing:
    "Prices and policies change; verify the current figure on the DANTES / College Board / Prometric page before relying on it. The DSST retest conflict (ED-4) prints both published periods — DANTES is the policy authority.",
  tiles: [
    {
      key: "clep",
      label: "CLEP",
      tileSub: "Entries ED-1–ED-3, ED-7 · the supplements, first-attempt funding, ACE credit, eligibility — including the Coast Guard asymmetry",
      intro: "CLEP: College Board's program, DANTES-funded for eligible members. Supplement to the Military Tuition Assistance section.",
      entries: [
        {
          id: "ED-1",
          name: "CLEP (supplement to Military Tuition Assistance)",
          summary: "CLEP (College-Level Examination Program), College Board: 34 exams across 5 subject areas (Composition & Literature; World Languages; History & Social Sciences; Science & Mathematics; Business). Passing an exam earns the college credit for the matching course, where the school accepts it. Most military members test through on-base education centers or DANTES-authorized sites.",
          who: "Members with civilian knowledge or self-study behind them — one passed exam can retire a whole general-education requirement.",
          body: [],
          flags: [],
          links: [],
          source: "College Board; DANTES",
        },
        {
          id: "ED-2",
          name: "DANTES first-attempt funding (CLEP and DSST)",
          summary: "DANTES pays the first attempt for eligible service members: the CLEP exam fee and the DSST exam fee are DANTES-funded on the first attempt per exam title. Published service-member exam fee: $89 (CLEP). DANTES does not fund retests for an exam title already taken once with funding — a retake is paid by the member. Verify the current fee and funding rule on the DANTES page before registering; fees change.",
          who: "Eligible members — the free attempt is per exam title, so prepare before you spend it.",
          body: [],
          flags: [],
          links: [{ label: "DANTES", url: "https://www.dantes.mil" }],
          source: "DANTES (dantes.mil); College Board",
        },
        {
          id: "ED-3",
          name: "Credit: CLEP and ACE",
          summary: "ACE (the American Council on Education) publishes minimum-score credit recommendations for CLEP exams; each college sets its own acceptance and score policy — a recommendation is not a guarantee of award. Check your school's CLEP policy before testing.",
          who: "Degree-planners — the school's policy decides; ask before you test, not after.",
          body: [],
          flags: [],
          links: [],
          source: "ACE credit recommendations; College Board",
        },
        {
          id: "ED-7",
          name: "Eligibility — INCLUDING the Coast Guard asymmetry",
          summary: "As published: CLEP/DSST DANTES funding covers active-duty members of the Army, Navy, Air Force, Marine Corps, Space Force, and Coast Guard — and military spouses of Coast Guard members only. Spouses of the other services are not DANTES-funded for these exams under the published eligibility. That asymmetry is real and prints as published — a Coast Guard spouse tests free on the first attempt; an Army spouse pays the same fee a civilian pays.",
          who: "Spouses especially — eligibility turns on the sponsor's service, and the Coast Guard is the published exception.",
          body: [],
          flags: [],
          links: [],
          source: "DANTES eligibility (as published)",
        },
      ],
    },
    {
      key: "dsst",
      label: "DSST",
      tileSub: "Entries ED-4–ED-6 · the 38 exams, scoring, and the retest conflict printed both sides",
      intro: "DSST: Prometric's program, also DANTES-funded — and the home of a published policy conflict this section prints honestly.",
      entries: [
        {
          id: "ED-4",
          name: "DSST — and the retest-policy CONFLICT (printed both sides)",
          summary: "DSST exams are administered by Prometric and DANTES-funded on the first attempt for eligible members (ED-2). Conflict: DANTES describes a 3-month wait before retesting a DSST title; college and test-center pages describe a 30-day retest period. Both print here because both are published. For planning, DANTES is the policy authority — but confirm the current retest rule with DANTES/your education center before scheduling a retake, because the two published periods differ by two months.",
          who: "Anyone who failed or under-scored a DSST — do not schedule the retake on the 30-day assumption without checking.",
          body: [],
          flags: ["Pack Flag F-14: the conflict is real, published on both sides; the section resolves it toward the policy authority (DANTES) but prints both periods."],
          links: [],
          source: "DANTES (3-month rule); Prometric/college pages (30-day rule)",
        },
        {
          id: "ED-5",
          name: "DSST exams available",
          summary: "38 DSST exam titles, across subject areas including Business, Humanities, Math, Physical Science, Social Sciences, and Technology. Several DSST titles are upper-division — a category CLEP largely doesn't cover — which is where DSST earns its place next to CLEP in a degree plan.",
          who: "Degree-planners hunting upper-division credit by exam.",
          body: [],
          flags: [],
          links: [],
          source: "Prometric DSST; DANTES",
        },
        {
          id: "ED-6",
          name: "DSST scoring",
          summary: "DSST reports criterion-referenced scores on a 200–500 scale, with 400 as the published passing benchmark tied to ACE's credit recommendation. As with CLEP, the school sets its own acceptance policy.",
          who: "DSST testers reading a score report.",
          body: [],
          flags: [],
          links: [],
          source: "Prometric DSST (as published)",
        },
      ],
    },
    {
      key: "jst",
      label: "The JST",
      tileSub: "Entries ED-8–ED-10 · what it is, how to send it, ACE evaluation and its limits",
      intro: "The Joint Services Transcript — your military training, documented for colleges. Supplement to Records & DD214 Center, which carries the full transcript-and-records picture.",
      entries: [
        {
          id: "ED-8",
          name: "The JST: what it is (supplement to Records & DD214 Center)",
          summary: "The Joint Services Transcript (JST) is the official transcript documenting military training and occupations evaluated by ACE for college-credit recommendations. It covers Army, Marine Corps, Navy, and Coast Guard members. Air Force and Space Force members use the Community College of the Air Force (CCAF) transcript instead — there is no Air Force JST.",
          who: "Members applying to college — the JST is how your training arrives at the admissions office in a form it can award credit from.",
          body: [],
          flags: [],
          links: [{ label: "Joint Services Transcript", url: "https://jst.doded.mil" }],
          source: "JST (jst.doded.mil); ACE",
        },
        {
          id: "ED-9",
          name: "How to request / send a JST",
          summary: "Members request and send the JST through the JST site (jst.doded.mil): review your record, correct errors through your service's process, and transmit the official copy directly to the school — schools generally accept only the official transmitted transcript, not a printout you hand them.",
          who: "Members in an application window — send the official transcript from the site; keep a personal copy to audit.",
          body: [],
          flags: [],
          links: [],
          source: "JST (jst.doded.mil)",
        },
        {
          id: "ED-10",
          name: "ACE evaluation and its limits",
          summary: "ACE's Military Guide evaluates courses and occupations and publishes credit recommendations. The recommendation is advice to colleges, not a mandate: each school decides what it awards, and awards are commonly lower than the recommendation or applied as elective credit only. Verify how your target school treats the JST before counting the credits in a degree plan.",
          who: "Degree-planners — a recommendation is a starting point for a conversation with the school, not a promise.",
          body: [],
          flags: [],
          links: [],
          source: "ACE Military Guide (as published)",
        },
      ],
    },
  ],
};
