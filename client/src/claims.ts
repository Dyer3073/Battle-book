// VA Claims & VSO Guide — static reference data transcribed from the
// researched claims pack (~/workspace/military-app/claims/claims.md,
// researched November 8, 2026). Summaries, forms, numbers, and links
// come only from the pack; process facts are from VA's own pages only.
//
// Fidelity rules baked into this data:
// - This guide explains how the claims process works and where the free
//   help is. It does NOT predict ratings, coach claim strategy, or give
//   legal advice — only VA decides claims and ratings, and an accredited
//   representative is the right person for advice about a specific case.
// - Ratings are CONCEPT LEVEL ONLY: the whole-person theory with VA's
//   own 10% + 10% = 19% illustration, and the combined ratings table is
//   LINKED, never reproduced.
// - Every timeline is VA's stated GOAL, rendered with its ⚠ flag — no
//   current average processing time is quoted anywhere.
// - BDD is stated exactly as VA states it: file 180–90 days before
//   separation, full-time active duty (incl. Guard/Reserve/Coast
//   Guard), known separation date, available for exams within 45 days,
//   Separation Health Assessment Part A. The under-90-days path is
//   presented as VA presents it: a standard claim.
// - The claim-predator warning is taken from VA's CURRENT
//   fraud-prevention page, with the VSAFE and FTC numbers exactly as
//   the pack states them.
// - The DBQ link is the pack's clean URL (the address VA itself prints
//   inside VA Form 21-526EZ, tracking parameter stripped).

export type ClaimsLink = { label: string; url: string };

export type ClaimsBullet = {
  /** Bold lead-in, e.g. a Board docket name. */
  title?: string;
  text: string;
  links?: ClaimsLink[];
};

export type ClaimsEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Numbered process steps (VA's 8-step claim process). */
  steps?: string[];
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: ClaimsBullet[];
  flag?: string;
  links: ClaimsLink[];
  /** Extra label rendered as a red badge (the predator warning). */
  alertBadge?: string;
  /** Cross-reference button to the Benefits section. */
  benefitsRef?: boolean;
};

export type ClaimsGroup = {
  title: string;
  note?: string;
  entries: ClaimsEntry[];
};

export const CLAIMS_STANDING_NOTE =
  "This guide explains how the claims process works and where the free help is. It does not predict ratings, coach claim strategy, or give legal advice — only VA decides claims and ratings, and an accredited representative (see the Free Help section) is the right person for advice about a specific case.";

export const CLAIMS_FLAGS_NOTE =
  "How to read the ⚠ flags: a ⚠ marks a goal, average, or detail VA itself presents as variable. VA's processing times and posted averages change — treat every timeline here as “as VA states it today,” never as a promise. Where VA's own pages conflict or a link could not be verified directly on the official site, the card flags it.";

export const CLAIMS_GROUPS: ClaimsGroup[] = [
  {
    title: "How a Claim Moves",
    entries: [
      {
        name: "Filing a VA Disability Claim",
        kind: "VA.gov — start here",
        summary:
          "VA's official how-to-file page. The main route is online: sign in to VA.gov and file the disability compensation claim there (the paper equivalent is VA Form 21-526EZ). VA's page walks through what to file, and notes you can also file by mail, by phone, in person at a regional office, or with an accredited representative's help. VA also notes you don't have to submit all your evidence the day you file — you have up to a year from when VA receives your claim to turn in evidence — but the claim's start date is set by when you file (or by your intent to file, next entry).",
        who: "Anyone filing for disability compensation — first claim, or a claim for a new condition. If you're still in uniform and 90–180 days from separation, use BDD instead (see the BDD section below).",
        links: [
          { label: "VA.gov — How to file a disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" },
        ],
      },
      {
        name: "Intent to File — Lock In Your Start Date",
        kind: "VA.gov",
        summary:
          "An intent to file tells VA “a claim is coming” and sets the potential start (effective) date for any benefits you're later granted, even though the paperwork isn't finished yet. As VA states it: you then have 1 year to complete and file the actual claim, and you can have only 1 active intent to file at a time. Starting certain VA.gov forms online with a verified account (including disability compensation and disability Supplemental Claims) records your intent to file automatically; you can also submit one by phone at 800-827-1000 (TTY: 711) or on VA Form 21-0966 by mail.",
        who: "Anyone who knows they'll file but isn't ready to submit — file the intent first so the clock and the start date are protected while you gather records.",
        links: [
          { label: "VA.gov — Your intent to file a VA claim", url: "https://www.va.gov/resources/your-intent-to-file-a-va-claim/" },
        ],
      },
      {
        name: "What “Service Connection” Means",
        kind: "VA.gov — concept",
        summary:
          "VA's plain test, from its eligibility page: a condition is service-connected if it was caused by — or made worse by — your active military service. Two things must both be true: you have a current illness or injury affecting your mind or body, and you served on active duty, active duty for training, or inactive duty training. Then at least one of these fits: you got sick or injured in service; you had a condition before service that service made worse; or a service-related disability showed up after you got out. Some conditions are presumptive: VA automatically assumes service caused them, so you only have to meet the service requirements, not prove the link.",
        who: "Everyone, before filing — this is the concept the whole claim turns on. Whether a specific condition qualifies in a specific case is a judgment for VA (and a question for an accredited rep), not something this guide can call.",
        links: [
          { label: "VA.gov — Eligibility for VA disability benefits", url: "https://www.va.gov/disability/eligibility/" },
        ],
      },
      {
        name: "The Claim Process After You File",
        kind: "VA.gov — 8 steps",
        summary:
          "VA's step-by-step tracker of what happens to a claim, in VA's own order. Evidence gathering is usually the longest step: VA may ask you for evidence, schedule a claim exam, request records from private providers, and pull your VA and service records. If you send in more evidence later, the claim goes back to the evidence-gathering step. When it's decided, the decision letter appears in the VA.gov claim status tool (see the After a Decision section), with a paper copy mailed after.",
        steps: [
          "Claim received",
          "Initial review",
          "Evidence gathering",
          "Evidence review",
          "Rating",
          "Preparing decision letter",
          "Final review",
          "Claim decided",
        ],
        who: "Anyone with a claim in the pipeline who wants to know what stage they're in and why it might sit still for a while.",
        flag: "VA posts a current average processing time on this page, but it is a moving figure that changes month to month — no average is stated in this guide because none stays true. Evidence gathering time depends on how complex the evidence is.",
        links: [
          { label: "VA.gov — After you file your disability claim", url: "https://www.va.gov/disability/after-you-file-claim/" },
        ],
      },
      {
        name: "The VA Claim Exam — “C&P Exam”",
        kind: "VA.gov",
        summary:
          "After you file, VA may ask you to attend a claim exam (compensation and pension, or C&P, exam) if it needs more information to decide. Per VA: the exam helps VA determine whether you have a service-connected disability and, if so, how severe it is. Not everyone gets one — if your file already has enough medical evidence, VA may decide on the records instead (its Acceptable Clinical Evidence process). A VA provider or a VA contract provider does the exam, and VA or the contractor contacts you to schedule it.",
        details: [
          "One key expectation-setter from VA: a claim exam is not a normal medical exam — the provider won't treat you, give referrals, or prescribe medicine. Exams can run from about 15 minutes to an hour or more depending on what you claimed. You can't get results at the exam; a copy of the final report takes a Freedom of Information / Privacy Act request (VA Form 20-10206).",
        ],
        who: "Anyone VA schedules — if VA asks for an exam, attend it or reschedule it; it's part of how VA gathers the evidence for your claim. VA/contract claim exams are provided at no cost to you.",
        links: [
          { label: "VA.gov — The VA claim exam", url: "https://www.va.gov/resources/va-claim-exam/" },
        ],
      },
      {
        name: "Your Decision Letter and Rating",
        kind: "End of the initial claim",
        summary:
          "The end of the line for an initial claim: VA's decision letter states, condition by condition, what was granted or denied and the rating assigned to each granted condition. Ratings are covered at concept level in the Ratings section below. If you disagree with any part of the decision, the letter is also the starting gun for the review lanes in the After a Decision section — the 1-year clocks for Higher-Level Review and Board Appeal run from the date on that letter.",
        who: "Every claimant, the day the decision posts in the status tool or arrives by mail. Read it fully — including the reasons — before choosing any next step, ideally with an accredited rep (see the Free Help section).",
        links: [],
      },
    ],
  },
  {
    title: "Claim Before You Get Out — BDD",
    entries: [
      {
        name: "Benefits Delivery at Discharge — BDD",
        kind: "VA.gov — pre-discharge claim",
        summary:
          "The pre-discharge claim. If you file in the BDD window, VA works your claim while you're still serving so a decision can arrive soon after separation instead of starting from zero afterward. VA's stated requirements: you're on full-time active duty (including full-time National Guard, Reserve, or Coast Guard), you have a known separation date, that date is 180 to 90 days away, and you can be available for VA exams within 45 days of submitting the claim. You must include a completed Separation Health Assessment – Part A self-assessment. File online and VA gets your service treatment records for you; file any other way and you must provide copies yourself. You can add conditions to the claim up until the 90-days-out mark. Some claims that need special handling are excluded from BDD even inside the window.",
        who: "Anyone separating whose date is 180–90 days out. This is the single most time-sensitive entry in this guide — the window closes whether you use it or not.",
        flag: "Timing is the whole point: miss the 90-day floor and you're on the standard-claim path (below) instead.",
        links: [
          { label: "VA.gov — File a pre-discharge claim", url: "https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/" },
        ],
      },
      {
        name: "The BDD Program Page",
        kind: "Benefits.va.gov",
        summary:
          "VA's program-office page for Benefits Delivery at Discharge — the same program as the entry above, stated from the program side. Its stated goal is a rating decision within 30 days after separation for BDD claims, which is exactly why the 90–180-day filing window matters: the evidence gathering and exams happen before your last day in uniform.",
        details: [
          "The pre-discharge hub also covers the Integrated Disability Evaluation System (IDES), for wounded/ill members who can't perform their duties and are referred into it.",
        ],
        who: "Separating members who want VA's own program description alongside the VA.gov filing page.",
        flag: "“Within 30 days after separation” is VA's stated program goal, not a guarantee — treat it as the aim the window is built around.",
        links: [
          { label: "Benefits.va.gov — Benefits Delivery at Discharge program", url: "https://benefits.va.gov/BENEFITS/benefits-delivery-discharge-program.asp" },
          { label: "Benefits.va.gov — Pre-discharge hub (incl. IDES)", url: "https://benefits.va.gov/predischarge/index.asp" },
        ],
      },
      {
        name: "Less Than 90 Days Left — File a Standard Claim",
        kind: "VA.gov",
        summary:
          "If you're inside 90 days of separation, VA's pre-discharge guidance points you to a standard claim instead of BDD: you can still file before you get out, and VA processes it as a regular claim. (This path is sometimes called “Quick Start” — in the VA.gov material reviewed for this guide, VA presents the under-90-day route simply as filing a standard claim, not as a separate named program.) Your intent to file still protects your start date.",
        who: "Anyone inside 90 days of separation who hasn't filed yet. Late is worse than standard — file the standard claim rather than waiting until after discharge.",
        links: [
          { label: "VA.gov — File a pre-discharge claim", url: "https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/" },
        ],
      },
      {
        name: "Separation Health Assessment — Part A",
        kind: "Required pre-discharge form",
        summary:
          "The one form BDD and IDES filers must complete: a self-assessment of your health that goes in with the pre-discharge claim (it's published as the Separation Health Assessment DBQ – Part A). It's part of the claim package, not an optional extra.",
        who: "Every BDD filer, as part of the initial submission — an incomplete package slows the pre-discharge timeline the program is built on.",
        links: [
          { label: "VA — Public DBQs (Separation Health Assessment listed here)", url: "https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp" },
        ],
      },
    ],
  },
  {
    title: "Evidence: What VA Decides On",
    entries: [
      {
        name: "Evidence Needed for Your Disability Claim",
        kind: "VA.gov — the master list",
        summary:
          "VA's own evidence page, and the one to follow over any other summary. The documents VA names: DD214 or other separation documents, service treatment records, and medical evidence about your condition (doctors' reports, X-rays, test results). You can submit evidence yourself, or tell VA what exists and give permission for VA to gather it. The page is VA's summary of the official notice in VA Form 21-526EZ, which carries the full requirements.",
        who: "Every claimant, at filing and throughout evidence gathering. When this guide and that page differ, that page wins.",
        links: [
          { label: "VA.gov — Evidence needed for your disability claim", url: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/" },
        ],
      },
      {
        name: "Service Treatment Records (STRs)",
        kind: "Evidence",
        summary:
          "Your in-service medical file — the record of what happened to you, and what you were treated for, while serving. For BDD filers who file online, VA pulls them for you; BDD filers using any other route must include copies for the current period of service. For everyone else, STRs are the backbone evidence VA reviews against your claimed conditions.",
        who: "Every claimant. Still serving? Make sure your current complaints are actually documented in your record before you separate — that's a records fact, stated by every VA evidence source, not a filing tactic.",
        links: [
          { label: "VA.gov — Evidence needed for your disability claim", url: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/" },
        ],
      },
      {
        name: "Private Medical Records",
        kind: "Evidence — VA Form 21-4142",
        summary:
          "Treatment records from non-VA doctors count as medical evidence. You can get them and submit them yourself, or authorize VA to request them for you (VA Form 21-4142 is the authorization VA uses when it gathers records you've identified). Either way, VA's evidence page is the reference for what to send and where.",
        who: "Anyone treated outside the military/VA system for a claimed condition — before filing if you have the records in hand, or during evidence gathering if VA is requesting them.",
        links: [
          { label: "VA.gov — Evidence needed for your disability claim", url: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/" },
        ],
      },
      {
        name: "Buddy Statements — Lay Evidence",
        kind: "VA.gov — lay evidence",
        summary:
          "VA accepts lay evidence: written testimony from you, or from anyone who knows about your condition or the events around it — no medical credentials needed. VA's own description, via its evidence guidance: a plain written statement, VA Form 21-10210 (Lay/Witness Statement — the “buddy statement” form), or VA Form 21-4138 (Statement in Support of Claim). A buddy statement is a firsthand account from someone who served with you or knows you — what they personally saw or know, in their own words.",
        who: "Anyone whose service events or day-to-day symptoms aren't fully captured in medical records — fellow service members, spouses, and family are typical statement-writers.",
        links: [
          { label: "VA.gov — Evidence needed for your disability claim", url: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/" },
        ],
      },
      {
        name: "“Nexus” — the Link, in Plain Terms",
        kind: "Concept only",
        summary:
          "You'll hear this word from reps and examiners. A nexus is simply the connection between your current condition and your service — the thing “service connection” is made of. In practice it usually takes the form of a medical opinion: a qualified provider's statement that, in their judgment, your current condition is connected to your service. VA may get this opinion from the claim examiner, or a provider treating you may address it in your records or a DBQ (next entry). This guide defines the term only — whether the evidence in any given case establishes the link is VA's call, and building that part of a case is accredited-rep territory, not app advice.",
        who: "Anyone reading a decision letter or exam report and meeting the word for the first time.",
        links: [
          { label: "VA.gov — Eligibility for VA disability benefits", url: "https://www.va.gov/disability/eligibility/" },
        ],
      },
      {
        name: "DBQs — Disability Benefits Questionnaires",
        kind: "VA forms",
        summary:
          "Standardized medical forms, one per condition or body system, that collect exactly the medical information VA needs to process a claim. Two uses matter to you: (1) VA or contract examiners complete DBQs as part of claim exams; (2) your own private provider can complete a public DBQ for you to submit as evidence — VA publishes the public list at the link below. VA's ground rules: VA will not pay or reimburse the cost of a DBQ completed by a private provider (a VA or contract claim exam, by contrast, is at no cost to you); a private clinician who completes one must fill in their provider information and sign and date it. A few DBQs are not available for public use (VA lists which on the same page).",
        details: [
          "Link note: the public DBQ page URL is the address VA itself prints inside VA Form 21-526EZ (www.benefits.va.gov/compensation/dbq_publicdbqs.asp); the live search result for that page carried a social-tracking parameter, which was stripped.",
        ],
        who: "Anyone whose own provider is willing to document a claimed condition in VA's format.",
        flag: "Companies market paid DBQ completion — read the claim-predator warning section below before paying anyone anything connected to a claim.",
        links: [
          { label: "VA — Public DBQs", url: "https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp" },
        ],
      },
    ],
  },
  {
    title: "Ratings, at Concept Level Only",
    note: "Concept level only. No rating predictions, no claim strategy, no legal advice — only VA decides claims and ratings, and an accredited representative is the right person for advice about a specific case.",
    entries: [
      {
        name: "About VA Disability Ratings",
        kind: "VA.gov",
        summary:
          "VA assigns each service-connected condition a disability rating — a percentage expressing how severe the condition is, based on the evidence. That rating drives how much monthly disability compensation you receive and your eligibility for some other VA benefits. You can sign in at the link to view your own individual and combined ratings once VA has decided a claim.",
        who: "Anyone who has received a decision, or wants VA's own explanation of what a rating is before one arrives.",
        links: [
          { label: "VA.gov — About VA disability ratings", url: "https://www.va.gov/disability/about-disability-ratings/" },
        ],
      },
      {
        name: "Combined Ratings — Why It Isn't Simple Addition",
        kind: "VA.gov — concept",
        summary:
          "If you have more than one rated condition, VA calculates a combined disability rating — and VA says plainly: calculating it “involves more than adding up your individual ratings.” VA uses what it calls the “whole person theory”: each additional disability applies to the share of you that remains, so the total can never exceed 100%. VA's own illustration: two disabilities rated 10% each combine to 19%, not 20%. VA combines ratings using its official combined ratings table and rounds the final result to the nearest 10%. The table itself, its full worked steps, and VA's calculator are on VA's page — linked here, deliberately not reproduced in this guide. This guide also does not estimate what any condition or combination “should” rate: that's a prediction only VA can make, after evidence.",
        who: "Anyone with two or more rated conditions whose combined number looks lower than the sum and wonders if VA made an arithmetic error — usually, it didn't; it's the table.",
        links: [
          { label: "VA.gov — About VA disability ratings (combined ratings table)", url: "https://www.va.gov/disability/about-disability-ratings/" },
        ],
      },
    ],
  },
  {
    title: "After a Decision: The Three Review Lanes",
    note: "These lanes apply to decisions issued on or after February 19, 2019, per VA. Choosing among them for a specific decision is exactly what a free accredited representative is for — the summaries below are VA's own descriptions of what each lane is, not a recommendation. Every timeline in this section is VA's stated GOAL, flagged as a goal — not a deadline or a guarantee, and no current average processing time is quoted.",
    entries: [
      {
        name: "Choosing a Decision Review Option",
        kind: "VA.gov — start here",
        summary:
          "VA's comparison page for all three lanes. Its organizing question is simple: do you have new evidence, or don't you? With new evidence, your options are a Supplemental Claim (anytime) or a Board Appeal (within 1 year). Without new evidence, your options are a Higher-Level Review or a Board Appeal, both within 1 year of the decision letter. The page also maps what you can do after each lane's decision, since lanes can follow one another.",
        who: "Anyone holding a decision letter they disagree with — read this page first, then the lane pages below.",
        links: [
          { label: "VA.gov — Choosing a decision review option", url: "https://www.va.gov/resources/choosing-a-decision-review-option/" },
        ],
      },
      {
        name: "Higher-Level Review",
        kind: "Review lane — VA Form 20-0996",
        summary:
          "A fresh look by a higher-level reviewer at the same evidence VA already had. Rules as VA states them: you can't submit new evidence; you must request it within 1 year of the date on your decision letter; you can ask for a one-time informal conference to point out possible errors; and you can't request a Higher-Level Review of a previous Higher-Level Review or Board decision on the same issue. Request online (disability compensation only), by mail or in person on VA Form 20-0996. If you disagree with the outcome, the next lanes are a Board Appeal, or a Supplemental Claim if you have new evidence.",
        who: "Claimants who believe the decision was wrong on the evidence already in the file — VA's example is VA not applying the criteria correctly or not getting records it was asked to get.",
        flag: "VA's stated goal is an average of 125 days (4–5 months) for non-healthcare Higher-Level Reviews — a goal, not a deadline; VA notes reviews can take longer if an error requires new records or a new exam.",
        links: [
          { label: "VA.gov — Higher-Level Review", url: "https://www.va.gov/decision-reviews/higher-level-review/" },
        ],
      },
      {
        name: "Supplemental Claim",
        kind: "Review lane — VA Form 20-0995",
        summary:
          "The lane for new and relevant evidence — evidence VA didn't have before that bears on your case (new documents, medical records, other information), or a request for review based on a change in law (VA's example: the PACT Act). You can submit the evidence yourself or identify it and let VA help gather it. A VA reviewer decides whether the new evidence changes the decision. There is no deadline — you can file a Supplemental Claim anytime you have new and relevant evidence — but filing within 1 year of the decision letter protects your effective date. File online (disability compensation only) or on VA Form 20-0995. After a Supplemental decision, you can request a Higher-Level Review, a Board Appeal, or another Supplemental Claim with more new evidence.",
        who: "Anyone whose case has something VA has never seen. (Different situation: a condition VA already rates has gotten worse — that's a claim for increased compensation on VA's evidence page, not a Supplemental Claim.)",
        flag: "VA's stated goal is an average of 125 days for non-healthcare Supplemental Claims — a goal, not a guarantee.",
        links: [
          { label: "VA.gov — Supplemental Claim", url: "https://www.va.gov/decision-reviews/supplemental-claim/" },
        ],
      },
      {
        name: "Board Appeal",
        kind: "Review lane — VA Form 10182",
        summary:
          "Your case goes to a Veterans Law Judge at the Board of Veterans' Appeals in Washington, D.C. You must request it within 1 year of the date on your decision letter, on VA Form 10182, and you pick one of three dockets when you file. You can't request two Board Appeals in a row on the same claim. If you disagree with the Board's decision, VA lists two next steps: appeal to the U.S. Court of Appeals for Veterans Claims (within 120 days of the Board decision letter), or file a Supplemental Claim with new and relevant evidence.",
        bullets: [
          { title: "Direct Review", text: "judge reviews the evidence already in your case — no new evidence, no hearing." },
          { title: "Evidence Submission", text: "you may add new evidence, no hearing." },
          { title: "Hearing", text: "you meet with the judge; adding evidence is optional." },
        ],
        who: "Claimants who want a judge — an expert in veterans law, per VA — to review the case.",
        flag: "VA's stated decision goals differ sharply by docket: an average of 365 days (1 year) for Direct Review, 550 days (1.5 years) for Evidence Submission, and 730 days (2 years) for Hearing. Goals, not guarantees — this is the slowest lane by design.",
        links: [
          { label: "VA.gov — Board Appeal", url: "https://www.va.gov/decision-reviews/board-appeal/" },
        ],
      },
      {
        name: "Track Your Claim, Review, or Appeal Status",
        kind: "VA.gov — status tool",
        summary:
          "VA's status tool: sign in and see every claim, decision review, and appeal you have, where each one sits in its process, what evidence VA is waiting on, and — for decided claims — your downloadable decision letter. You can also upload evidence to an initial claim through the tool (not to a decision review or appeal).",
        who: "Anyone with anything pending at VA. Requires signing in to VA.gov.",
        flag: "A few things never show in the tool: some documents sent by mail or fax or submitted in person, restricted documents, and health care–related claims (VA handles those through the decision letter instead) — an item missing from the tool doesn't mean VA doesn't have it.",
        links: [
          { label: "VA.gov — Check your claim, decision review, or appeal status", url: "https://www.va.gov/claim-or-appeal-status/" },
        ],
      },
    ],
  },
  {
    title: "Free Help: Accredited Representatives & VSOs",
    entries: [
      {
        name: "Get Help From an Accredited Representative or VSO",
        kind: "VA.gov",
        summary:
          "VA accredits three kinds of representatives to help with claims: VSO representatives, attorneys, and claims agents. An accredited VSO representative is a trained helper recommended for accreditation by a VA-recognized Veterans Service Organization. VA.gov's key sentence, worth memorizing: the services an accredited VSO representative provides on your VA benefit claims are always free — while an accredited attorney or claims agent can charge fees. VA doesn't assign you a rep; you choose and appoint one, and appointing a new one replaces the old one.",
        who: "Every claimant — this is the first stop before filing anything complicated, and before choosing a review lane.",
        links: [
          { label: "VA.gov — Get help from an accredited representative", url: "https://www.va.gov/get-help-from-accredited-representative/" },
        ],
      },
      {
        name: "Find an Accredited Representative",
        kind: "VA.gov search",
        summary:
          "VA's find-a-rep tool: search accredited VSO representatives, attorneys, and claims agents by state or territory, ZIP code, or organization name, then contact the rep to ask if they can take your case. VA's recognized-organizations office (the Office of General Counsel) also maintains the underlying accreditation list (next entries). Before the tool existed this same search ran through eBenefits — VA has been moving eBenefits functions into VA.gov, so use the VA.gov tool as the current route.",
        who: "Anyone looking for local, free VSO help — or verifying that a specific person offering help is actually accredited (see the warning section below).",
        links: [
          { label: "VA.gov — Find an accredited representative", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" },
        ],
      },
      {
        name: "Verify Accreditation — VA Office of General Counsel",
        kind: "VA — the authoritative check",
        summary:
          "The authoritative check. VA's Office of General Counsel maintains the list of VA-recognized organizations and VA-accredited individuals authorized to prepare, present, and prosecute VA benefit claims. If a person or company offering claim help isn't in this search, they are not accredited — full stop. VA's benefits site states the flip side plainly: unaccredited individuals who prepare, present, or prosecute VA benefit claims, or hold themselves out as authorized to do so, are in violation of federal law.",
        who: "Anyone, before signing anything or handing personal information to anyone offering claim help.",
        links: [
          { label: "VA OGC — Accreditation search", url: "https://www.va.gov/ogc/apps/accreditation/index.asp" },
          { label: "VA OGC — About VA accreditation", url: "https://www.va.gov/ogc/accreditation.asp" },
          { label: "Benefits.va.gov — Accredited representatives overview", url: "https://www.benefits.va.gov/VSO/" },
        ],
      },
      {
        name: "Appointing Your Representative",
        kind: "VA Forms 21-22 / 21-22a",
        summary:
          "Finding a rep isn't the last step — you formally appoint them so VA can work with them on your case. Per VA.gov: appointing an accredited VSO representative takes VA Form 21-22 (ask the rep which organization to name on it); appointing an accredited attorney or claims agent takes VA Form 21-22a. VA.gov has an online tool that fills the form out with you.",
        who: "Anyone who has picked a representative — do this once, at the start of working together.",
        links: [
          { label: "VA.gov — Appoint an accredited representative", url: "https://www.va.gov/get-help-from-accredited-representative/" },
        ],
      },
      {
        name: "DAV — Disabled American Veterans",
        kind: "VSO",
        summary:
          "One of the largest VA-recognized VSOs. DAV's accredited service officers help veterans and families file claims and navigate VA benefits, free of charge like every accredited VSO rep. Its site runs a local-office locator and a VA benefits help section.",
        who: "Any veteran or family member who wants a national VSO with offices in most areas — you don't have to have a service-connected disability to ask DAV for claims help.",
        links: [
          { label: "DAV — Find your local office", url: "https://www.dav.org/veterans/find-your-local-office/" },
          { label: "DAV — VA benefits help", url: "https://www.dav.org/get-help-now/va-benefits-help/" },
        ],
      },
      {
        name: "VFW — Veterans of Foreign Wars",
        kind: "VSO",
        summary:
          "The VFW's National Veterans Service runs a nationwide network of VFW Accredited Service Officers who help with disability compensation, pension, education, and other VA claims — in the VFW's own words, free of charge, to anyone seeking claims help (membership not required for the service). Especially relevant for this app's audience: the VFW Pre-Discharge program stations accredited officers on or near major installations specifically to help service members file before separation — it works the same BDD window as the BDD section above, and the VFW page invites anyone within 180 days of discharge to contact an officer.",
        who: "Anyone — and separating members in particular, via the pre-discharge offices.",
        links: [
          { label: "VFW — VA Claims & Separation Benefits", url: "https://www.vfw.org/assistance/va-claims-separation-benefits" },
          { label: "VFW — Pre-Discharge (BDD)", url: "https://www.vfw.org/bdd/" },
        ],
      },
      {
        name: "The American Legion",
        kind: "VSO",
        summary:
          "A VA-recognized VSO whose accredited department service officers help veterans and families with VA claims, free of charge. The Legion's site lists its service officers department by department (state by state), with addresses and phone numbers.",
        who: "Any veteran or family member who wants a local, accredited service officer.",
        links: [
          { label: "American Legion — Find a veteran service officer", url: "https://www.legion.org/member-services/veterans-services/veterans-benefits/find-a-veteran-service-officer" },
        ],
      },
      {
        name: "PVA — Paralyzed Veterans of America",
        kind: "VSO",
        summary:
          "A VA-recognized VSO built around veterans with spinal cord injuries and diseases (including MS and ALS). PVA's National Service Officers are accredited representatives trained in VA law and benefits who assist with claims and appeals; PVA states it has 73 National Service Offices nationwide, and its services are free of charge. PVA offers benefits assistance to veterans, family members, and caregivers — its specialty is SCI/D cases, which include the adapted-housing and automobile-grant claims other reps handle less often.",
        who: "Veterans with spinal cord injury/disease and their families first — and anyone can ask; if PVA isn't the right fit, its officers can point you to the right rep.",
        flag: "Contact route: PVA's chapters page (linked) lists its National Service Offices and a Benefits Helpline, 1-866-734-0857. A dedicated NSO-locator page path was cited in secondary sources but not verified directly on pva.org during this research — start from the linked page or the helpline.",
        links: [
          { label: "PVA — Chapters & National Service Offices", url: "https://pva.org/about-us/about-our-chapters/" },
        ],
      },
      {
        name: "State & County Veteran Service Officers",
        kind: "Free local help",
        summary:
          "Beyond the national VSOs, nearly every state runs a state Department/Division of Veterans Affairs, and many counties run a county veterans service office — staffed by accredited service officers who help with federal VA claims and state benefits, free of charge. These are often the closest help to home. Find yours through the National Association of State Directors of Veterans Affairs (NASDVA), which links to every state DVA, or the National Association of County Veteran Service Officers (NACVSO). VA's accredited-rep search also lists state and county officers — when in doubt, verify the individual there.",
        who: "Anyone who wants in-person help close to home, or who needs state benefits explained alongside federal ones.",
        flag: "Two directory styles exist: NASDVA's own site is the state-DVA route used here; VA's DiscoverVA External Resources page (used elsewhere in this app) also routes to state resources. Either way, confirm the individual officer's accreditation in the OGC search above.",
        links: [
          { label: "NASDVA — State VA departments", url: "http://nasdva.us/" },
          { label: "NACVSO — County veteran service officers", url: "https://www.nacvso.org/" },
        ],
      },
    ],
  },
  {
    title: "⚠ Warning: “Claim Predators” / Claim Sharks",
    note: "Taken from VA's current fraud-prevention page. Several older VA News articles on this topic now carry a VA editor's note saying their language is outdated and directing readers to that page — so the current page, not the articles, is the standing reference.",
    entries: [
      {
        name: "VA Fraud Prevention — Protect Your Benefits",
        kind: "VA — current page",
        alertBadge: "⚠ WARNING",
        summary:
          "VA's current fraud-prevention page and the one VA itself points to. The core facts VA repeats everywhere, including its older articles: you should never pay a fee to file an initial claim for benefits (VA states it is unlawful for anyone to charge for preparing an initial claim); only VA-accredited representatives may lawfully help with a claim; and only VA determines disability ratings — nobody else can promise you one.",
        who: "Everyone, before responding to any ad, mailer, call, or company offering claims help for money.",
        links: [
          { label: "VA — Fraud prevention: protect your benefits", url: "https://benefits.va.gov/BENEFITS/fraud-prevention.asp" },
        ],
      },
      {
        name: "Red Flags — How VA Describes a Claim Predator",
        kind: "VA's warning signs",
        alertBadge: "⚠ WARNING",
        summary:
          "“Claim Predators” is VA's term for aggressive companies or individuals — not accredited by VA — that target veterans' benefits. The warning signs VA lists:",
        bullets: [
          { text: "Promising a 100% disability rating or any guaranteed rating" },
          { text: "Promising unrealistic (faster) claim processing times" },
          { text: "Charging high fees, or requiring a percentage of your VA benefits" },
          { text: "Pushing a binding contract to pay a share of your benefits for claim help" },
          { text: "Refusing to sign a VA representation form (VA Form 21-22 or 21-22a)" },
        ],
        details: [
          "VA's protective steps: don't pay anyone to file an initial claim; work with an accredited representative; verify accreditation in the OGC tool (Free Help section) before filing anything or sharing personal information; and never hand over your VA.gov login.",
        ],
        who: "Anyone who has been contacted by a claims “consulting” or “coaching” company — compare the pitch against this list before signing or paying anything.",
        links: [
          { label: "VA — Fraud prevention: protect your benefits", url: "https://benefits.va.gov/BENEFITS/fraud-prevention.asp" },
        ],
      },
      {
        name: "Protect Your Identity & Report Suspected Fraud",
        kind: "VA.gov",
        alertBadge: "⚠ WARNING",
        summary:
          "VA's scam-protection page: use only the official VA.gov site to file claims or download forms; confirm any representative's accreditation before working with them; be cautious of aggressive companies. Reporting routes as VA states them: suspected VA benefits scams — call 833-388-7233 (VSAFE, 24/7; also vsafe.gov); scams not related to VA — the Federal Trade Commission at 877-382-4357 or via the FTC's fraud-report site linked from the page.",
        who: "Anyone who has already shared information with, or paid, a company they're now unsure about — report it; it's how VA and the FTC warn everyone else.",
        links: [
          { label: "VA.gov — Protect your identity and your VA benefits from scammers", url: "https://www.va.gov/resources/how-to-protect-your-identity-and-your-va-benefits-from-scammers/" },
        ],
      },
    ],
  },
  {
    title: "Cross-References (Covered in Benefits)",
    entries: [
      {
        name: "Disability Compensation Basics → Benefits",
        kind: "Cross-reference",
        summary:
          "What compensation is, current payment rates, and how the rating connects to the monthly amount are covered in this app's Benefits section — not duplicated here. This guide covers the process of claiming; Benefits covers the benefit itself.",
        benefitsRef: true,
        links: [
          { label: "VA.gov — Eligibility (the official source Benefits draws on)", url: "https://www.va.gov/disability/eligibility/" },
        ],
      },
      {
        name: "VR&E — Veteran Readiness and Employment → Benefits",
        kind: "Cross-reference",
        summary:
          "VR&E (Chapter 31) — employment support for veterans with service-connected disabilities, including how it relates to a disability rating — is covered in this app's Benefits section. Accredited representatives can also help with VR&E claims, per VA's accredited-representatives page. Not duplicated here.",
        benefitsRef: true,
        links: [],
      },
    ],
  },
];
