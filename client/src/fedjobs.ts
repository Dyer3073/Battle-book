// Veterans' Preference & Federal Jobs — transcribed from the
// researched pack (~/workspace/military-app/fedjobs/fedjobs.md,
// researched Nov 9, 2026; 30 entries, 10 sections, flags F-1–F-10).
// The pack is the content source of truth. Binding: the standing
// line ships verbatim at the top; the checklist line ships verbatim
// wherever the checklist appears; the checklist mirrors OPM's
// criteria as questions in OPM's order and ends at the fixed line —
// it NEVER says "you are eligible," never totals a verdict, never
// advises which claim to file. Military leave prints 20 days /
// 160 hours under 6323(a) as current (15 days flagged superseded);
// RIF prints BOTH regimes with the Sept 2, 2026 switch; Rule XI
// probation prints the certification requirement only (F-4); Merit
// Hiring Plan essays are existence-only (F-7); shared certificates
// flagged interim (F-8); no job listings, no resume advice, no
// state/local systems, no legal advice beyond the pack's framing.

import type { PackSection } from "./seven";

export const FEDJOBS_SECTION: PackSection = {
  view: "fedjobs",
  title: "Veterans' Preference & Federal Jobs",
  headSub:
    "How veterans' preference actually works in federal hiring — what the points are, who gets them, how category rating and floating work, military leave for Reservists and Guardsmen with federal jobs, reduction-in-force rules, and the noncompetitive hiring authorities — in the Office of Personnel Management's own terms, with every flag the research found printed where it belongs.",
  standing:
    "Veterans' preference is real, it is specific, and it is not automatic — you claim it, with documents, on each application. This section explains the system in OPM's own terms. It does not decide your case: the hiring agency adjudicates every preference claim, and only the agency's determination counts.",
  intro:
    "This section is a reference edition. The law it summarizes lives at 5 U.S.C. §§ 2108, 3110–3114, 3309–3320, 3501–3504 and 5 C.F.R. Parts 211, 302, 330, 335, 351, 752, 930 and 9901, plus the Executive Orders named inside. Where official sources disagree — and in several places they still do — the disagreement is printed, never blended.",
  checklist: {
    tileKey: "checklist",
    tileLabel: "The Checklist — Walk It Yourself",
    tileSub: "Section 3 · OPM's criteria, in OPM's order — not a determination",
    title: "The Preference Checklist",
    who: "Members and veterans checking how OPM's published criteria read against their service. Answer in order; the walk ends at the fixed line below.",
    line: "The checklist in this section mirrors OPM's published criteria in OPM's order. Walking it tells you what OPM's rules say about service like yours. It is not a determination — agencies adjudicate preference claims on your documents, and a 'yes' here is a claim to file, not a ruling.",
    steps: [
      {
        id: "gateway",
        question:
          "Were you discharged or released from active duty under honorable conditions (an honorable or general discharge)?",
        detail:
          "OPM's gateway. A 'no' here means OPM's categories do not describe this service — the agency still adjudicates any claim filed, on the documents. A 'yes' means continue down the list.",
        yesLine:
          "OPM's gateway is met on this point — continue to the next question. This is not a determination; the agency adjudicates it.",
      },
      {
        id: "retiree-bar",
        question:
          "Did you retire at or above the rank of major or lieutenant commander (or equivalent)?",
        detail:
          "OPM's retiree bar, with only its disability and pre-Sept. 7, 1980 exceptions. A 'yes' ends the walk at the line below; a 'no' means continue.",
        code: "outside preference — the retired major/Lt. Commander-or-above bar",
      },
      {
        id: "ssp",
        question:
          "Were you disabled, or did you receive a Purple Heart, while serving on active duty — or are you the sole surviving child in the family OPM's SSP definition describes?",
        detail:
          "The SSP test, in OPM's terms. A 'yes' ends the walk at the line below; a 'no' means continue.",
        code: "SSP — Sole Survivorship Preference (0 points)",
      },
      {
        id: "cps",
        question:
          "Do you have a compensable service-connected disability rated at 30% or more?",
        detail:
          "The CPS band. A 'yes' ends the walk at the line below; a 'no' means continue to the next band.",
        code: "CPS — Compensable Preference, 30% or more (10 points)",
      },
      {
        id: "cp",
        question:
          "Do you have a compensable service-connected disability rated at 10% or 20%?",
        detail:
          "The CP band. A 'yes' ends the walk at the line below; a 'no' means continue.",
        code: "CP — Compensable Preference, 10% or 20% (10 points)",
      },
      {
        id: "xp",
        question:
          "Do you have a service-connected disability rated below 10% (including 0%), a non-compensable disability, or the hospitalization OPM's XP definition names?",
        detail:
          "The XP band — note that a 0% rating is non-compensable and reads as XP, not CP. A 'yes' ends the walk at the line below; a 'no' means continue.",
        code: "XP — Non-compensable Preference (10 points)",
      },
      {
        id: "tp",
        question:
          "Did you serve on active duty in one of OPM's five published TP windows or campaigns (including the 24-month minimum-service rule where it applies)?",
        detail:
          "The TP windows and campaigns, with the post-2010 gap printed in the TP entry in The Five Codes tile. A 'yes' ends the walk at the line below; a 'no' means continue.",
        code: "TP — Tentative Preference (5 points)",
      },
      {
        id: "derived",
        question:
          "Is the claim a derived claim — a spouse, widow(er), or parent claiming through a veteran described in OPM's XP definition?",
        detail:
          "Derived preference, with its controlling limits printed in The Five Codes tile. If every answer above was 'no' as well, OPM's criteria describe none of the five categories for the answers given — file the claim and the documents if you believe otherwise; the agency adjudicates it.",
        code: "derived XP (and CP or CPS where the veteran's own disability qualifies)",
      },
    ],
    outro:
      "OPM's criteria describe this as [the category named above]. File the claim and the documents — the agency adjudicates it.",
  },
  tiles: [
    {
      key: "standing",
      label: "Standing & Claiming It",
      tileSub: "Section 1 · the standing rule, who the law counts, claiming it, the zone",
      intro:
        "Preference is claimed, not granted automatically. This tile covers the standing rule, OPM's published account of whom the law counts, the documents, and the zone of the rule everything else in this section lives inside.",
      entries: [
        {
          id: "fed-standing",
          name: "The standing rule",
          summary:
            "The standing line at the top of this section is the rule for everything under it: preference is claimed with documents, on each application, and adjudicated by the hiring agency. Nothing in this section decides a case.",
          who: "Everyone using this section.",
          body: [
            "Veterans' preference is real, it is specific, and it is not automatic — you claim it, with documents, on each application. This section explains the system in OPM's own terms. It does not decide your case: the hiring agency adjudicates every preference claim, and only the agency's determination counts.",
          ],
          flags: [],
          links: [],
          source: "OPM Vet Guide framing",
        },
        {
          id: "fed-who-counts",
          name: "Who the law counts — OPM's published account",
          summary:
            "Preference eligibility turns on the character of discharge and the character of service: discharged or released from active duty under honorable conditions, and “active duty” as OPM defines it — full-time duty in the Armed Forces (excluding the National Guard unless called to federal service by presidential authority with the consent of the governor; active duty for training excluded unless disabled or killed during it), including inactive-duty training where a disability resulted.",
          who: "Members and veterans reading their own service against the definitions.",
          body: [
            "The adjudicator is always the agency. If an agency denies a claim, OPM's Vet Guide states the veteran “should consult with MSPB or with a private attorney for advice about possible remedies.”",
          ],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, “Definitions”",
        },
        {
          id: "fed-claim",
          name: "Claiming it — documents, each time",
          summary:
            "Preference is claimed on each application with documents: the DD-214 (Member Copy 4 or Service Copy 2) for the character of discharge, and for 10-point claims the SF-15 with the VA rating letter the form requires. A tentative claim can be filed within 120 days of separation under the VOW Act — the final documents follow.",
          who: "Anyone applying to a federal job.",
          body: [
            "The agency adjudicates the claim from the documents. An incomplete file is the most common way a valid claim fails in practice — file the claim and the documents together, every time.",
          ],
          flags: [],
          links: [{ label: "OPM — Veterans' preference (SF-15)", url: "https://www.opm.gov/forms/pdf_fill/sf15.pdf" }],
          source: "OPM Vet Guide · VOW Act",
        },
        {
          id: "fed-zone",
          name: "The zone of this section",
          summary:
            "This section covers the federal competitive service as OPM publishes it. It does not cover state or local preference systems, private-sector hiring, or legal advice — and it prints no job listings and no resume-writing advice (the two-page federal resume limit is a rule of the system, covered in the Selection tile, not coaching).",
          who: "Everyone — especially anyone about to act on a number in this section.",
          body: [],
          flags: ["Flag (F-9): the SSAI military portal (/insights/military) was unreachable in the research — its content is not carried here. The DCIPS defense-intelligence hiring system is named where it belongs (its own appointing authority) and not described beyond OPM's framing."],
          links: [],
          source: "Pack editorial register",
        },
      ],
    },
    {
      key: "five",
      label: "The Five Codes",
      tileSub: "Section 2 · SSP, TP, CP, CPS, XP — OPM's own names and point values",
      memberOnly: true,
      intro:
        "The five preference codes, with OPM's names and OPM's point values. Derived preference lives inside the XP entry, with its controlling limits printed.",
      entries: [
        {
          id: "fed-ssp",
          name: "SSP — Sole Survivorship Preference (0 points)",
          summary:
            "0-point preference for the sole surviving child in a family where the mother or father and at least one sibling was killed, died in or was presumed dead in connection with military service; or is in a captured or missing-in-action status; or is permanently 100 percent disabled or hospitalized on an ongoing basis and is not employed in the federal civil service. OPM publishes no sibling-count requirement.",
          who: "Sole surviving children as OPM defines them.",
          body: [
            "The value of SSP is not points — it is the preference status itself: it carries the pass-over, category-rating, and RIF protections that attach to being a preference eligible.",
          ],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, “Definitions”",
        },
        {
          id: "fed-tp",
          name: "TP — Tentative Preference (5 points)",
          summary:
            "5-point preference for veterans who meet one of OPM's published service windows or campaigns: the Dec. 7, 1941–July 1, 1955 window; more than 180 consecutive days between July 2, 1955 and Oct. 14, 1976; the Gulf War window (Aug. 2, 1990–Jan. 2, 1992); a campaign or expedition for which a campaign badge was authorized; or more than 180 consecutive days between Sept. 11, 2001 and Aug. 31, 2010. Enlisted members must have begun service before Oct. 15, 1976 or have a campaign badge; the 24-month minimum-service rule applies to those who began on or after Oct. 15, 1980.",
          who: "Veterans whose service falls in a published window or campaign.",
          body: [
            "The gap, printed because it exists in OPM's own text: OPM's rule covers active duty ending Aug. 31, 2010 — service after that date qualifies only through a campaign badge. A member who joined after Sept. 11, 2010 and retired at or above major/Lt. Commander falls between OPM's texts; the agency adjudicates the claim on the documents.",
          ],
          flags: ["The post-2010 gap is printed inside this entry deliberately — it is the single most common place a confident summary of TP is wrong."],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, “Definitions” (TP)",
        },
        {
          id: "fed-cp-cps",
          name: "CP and CPS — Compensable Preference (10 points)",
          summary:
            "CP: a compensable service-connected disability rated at 10% or 20%. CPS: a compensable service-connected disability rated at 30% or more. Both are 10-point preference; CPS additionally carries the RIF +5 subgroup arithmetic and the 30%+ hiring-authority eligibility covered elsewhere in this section.",
          who: "Veterans with compensable VA disability ratings.",
          body: [],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, “Definitions” (CP, CPS)",
        },
        {
          id: "fed-xp",
          name: "XP — Non-compensable Preference (10 points), incl. derived preference",
          summary:
            "XP covers a service-connected disability rated below 10%, a non-compensable disability, and the hospitalized cases OPM's definition names. The trap, printed plainly: a 0% rating is non-compensable — it is XP, not CP. Derived preference — a spouse, widow(er), or parent claiming through a veteran — lives in this code family, with controlling limits.",
          who: "Veterans with 0% or non-compensable ratings; spouses, widows/widowers, and parents claiming derived preference.",
          body: [
            "Derived preference (OPM's controlling limits): it exists only where the veteran's own disability or death qualifies; the derived claimant may not claim it if the veteran is living and qualified to claim their own preference and is able to work; a widow(er) loses it on remarriage (with OPM's published exception for remarriage after age 57 or a remarriage that ended); a mother loses it on remarriage to other than a totally disabled veteran; and a spouse's derived claim ends if the veteran obtains federal employment through it. The agency adjudicates every derived claim on the documents.",
          ],
          flags: ["A 0% VA rating does not make a compensable claim. Print the rating letter's own words — the agency reads them, and “0%” reads as XP."],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, “Definitions” (XP, derived preference)",
        },
      ],
    },
    {
      key: "selection",
      label: "From Application to Selection",
      tileSub: "Section 4 · the current selection rule, merit principles, probation, the two-page resume, authorities",
      memberOnly: true,
      intro:
        "How a federal hire actually moves now: the Rule of Many replaced the rule of three; the merit principles and prohibited practices are the frame; probation under Rule XI requires affirmative certification; and the authorities are listed as OPM names them.",
      entries: [
        {
          id: "fed-rule-of-many",
          name: "The current selection rule — Rule of Many (effective Nov. 7, 2025)",
          summary:
            "OPM's Merit Hiring Plan replaced the rule of three with the Rule of Many: agencies refer a larger pool of qualified candidates and select from it under the merit principles, with veterans' preference applied as the statute requires inside the process. The rule of three is history — it appears in this section only as the superseded rule.",
          who: "Everyone applying now.",
          body: [],
          flags: ["Flag (F-1): rule-of-three language appears in older agency guides and secondary summaries. It is superseded as of Nov. 7, 2025 — any source still presenting it as current is out of date."],
          links: [{ label: "OPM Merit Hiring Plan", url: "https://www.opm.gov/policy-data-oversight/hiring-information/merit-hiring-plan/" }],
          source: "OPM Merit Hiring Plan (2025)",
        },
        {
          id: "fed-merit",
          name: "Merit principles and prohibited personnel practices",
          summary:
            "The frame every selection lives inside: the nine merit system principles (5 U.S.C. §2301) and the prohibited personnel practices (5 U.S.C. §2302), including the practices that protect preference eligibles — an agency may not grant unauthorized preference, and may not obstruct a veteran's right to compete.",
          who: "Applicants and new federal employees alike.",
          body: [],
          flags: [],
          links: [{ label: "5 U.S.C. §2301 (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/5/2301" }],
          source: "5 U.S.C. §§2301–2302",
        },
        {
          id: "fed-probation",
          name: "Probation under Rule XI — certification in the final 30 days",
          summary:
            "Completion of probation now requires the agency's affirmative certification, in the final 30 days of the probationary period, that the employee's performance and conduct warrant retention. Absent that certification, the probation does not complete by silence.",
          who: "New federal hires in their probationary year.",
          body: [],
          flags: ["Flag (F-4): the certification requirement prints as verified. The probationary-appeals rule's details are NOT printed — its citation was not verified in the research, and this section does not paraphrase it."],
          links: [],
          source: "OPM Merit Hiring Plan / Rule XI",
        },
        {
          id: "fed-resume",
          name: "The two-page resume limit (USAJOBS, from Sept. 27, 2025)",
          summary:
            "Federal resumes submitted through USAJOBS are limited to two pages — a rule of the system since Sept. 27, 2025. This section states the rule and nothing more: no resume-writing advice ships here.",
          who: "Everyone applying through USAJOBS.",
          body: [],
          flags: [],
          links: [{ label: "USAJOBS", url: "https://www.usajobs.gov/" }],
          source: "USAJOBS / OPM Merit Hiring Plan implementation",
        },
        {
          id: "fed-essays",
          name: "Merit Hiring Plan essays — existence only",
          summary:
            "The Merit Hiring Plan introduced essay questions into federal applications. This section names their existence and nothing more — no question text is printed, quoted, or reconstructed here.",
          who: "Applicants who will meet them in the application itself.",
          body: [],
          flags: ["Flag (F-7): no essay question text ships in this section, by rule."],
          links: [],
          source: "OPM Merit Hiring Plan (2025)",
        },
        {
          id: "fed-vra",
          name: "VRA — Veterans Recruitment Appointment (through GS-11)",
          summary:
            "A noncompetitive appointing authority for eligible veterans, through GS-11 (or equivalent). The distinction that matters: VRA eligibility is its own test — it is not the same test as preference eligibility, and meeting one does not prove the other. OPM's two cautionary examples print with the authority: a veteran can hold preference without VRA eligibility, and a VRA-eligible veteran still competes under the announcement's terms where the agency chooses competition.",
          who: "Veterans within VRA's published eligibility windows.",
          body: [],
          flags: [],
          links: [{ label: "OPM — VRA", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#VeteransRecruitmentAppointment" }],
          source: "OPM Hiring Authorities (VRA)",
        },
        {
          id: "fed-veoa",
          name: "VEOA — the right to compete",
          summary:
            "The Veterans Employment Opportunities Act gives preference eligibles (and eligible veterans as OPM defines them) the right to compete for merit-promotion announcements that are otherwise internal-only. OPM's own summary line, verbatim in substance: VEOA provides “access and opportunity” — it is a right to compete, not a right to the job, and it carries no points.",
          who: "Preference eligibles applying to internal announcements.",
          body: [],
          flags: [],
          links: [{ label: "OPM — VEOA", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#VeteransEmploymentOpportunitiesAct" }],
          source: "OPM Hiring Authorities (VEOA)",
        },
        {
          id: "fed-30plus",
          name: "30% or More Disabled Veteran appointment authority (no grade cap)",
          summary:
            "A noncompetitive authority for veterans with a compensable service-connected disability of 30% or more: appointment without competition, with no grade cap — the authority reaches above GS-11 where VRA stops. Conversion to career/career-conditional follows the authority's published terms.",
          who: "CPS veterans (30%+ compensable).",
          body: [],
          flags: [],
          links: [{ label: "OPM — 30% or More Disabled Veteran", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#DisabledVeteran" }],
          source: "OPM Hiring Authorities",
        },
        {
          id: "fed-vr-and-e",
          name: "VA Chapter 31 training appointments",
          summary:
            "Veterans in VA's Veteran Readiness and Employment (Chapter 31) program can be appointed through the program's training-appointment route as OPM publishes it — named here as OPM names it, routed to VA for the program itself.",
          who: "Chapter 31 participants.",
          body: [],
          flags: [],
          links: [{ label: "OPM Hiring Authorities", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/" }],
          source: "OPM Hiring Authorities",
        },
        {
          id: "fed-distinctions",
          name: "Distinctions — Schedule A is not a veterans' authority",
          summary:
            "Schedule A (5 C.F.R. §213.3102(u)) is a disability hiring authority — it is not a veterans' authority, and a veteran's disability does not make Schedule A a veterans' route. It prints here as a distinction entry only, because conflating the two is a common and costly error.",
          who: "Anyone whose search results blend the two.",
          body: [],
          flags: [],
          links: [{ label: "OPM — Schedule A", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#ScheduleA" }],
          source: "OPM Hiring Authorities (Schedule A)",
        },
        {
          id: "fed-shared-certs",
          name: "Shared certificates — interim, comment-stage",
          summary:
            "OPM's shared-certificate initiative (one certificate of eligibles shared across agencies) is in an interim/comment stage. It prints flagged as such — do not build an application strategy on its final form.",
          who: "Applicants whose agency announces shared-certificate use.",
          body: [],
          flags: ["Flag (F-8): shared certificates are interim/comment-stage policy. The mechanism may change; the announcement in front of you governs."],
          links: [],
          source: "OPM Merit Hiring Plan implementation materials",
        },
      ],
    },
    {
      key: "catfloat",
      label: "Category Rating & Floating",
      tileSub: "Section 5 · categories, augmented certification, floating, the Veterans Rule",
      memberOnly: true,
      intro:
        "Category rating is how preference points become placement: candidates are grouped into quality categories, preference eligibles float to the top of their category, and the Veterans Rule governs pass-overs.",
      entries: [
        {
          id: "fed-category",
          name: "Category rating — how it works",
          summary:
            "Instead of a numerical register, the agency groups qualified candidates into quality categories (typically Best Qualified / Well Qualified / Qualified, as the announcement defines them). Preference eligibles are placed at the top of the category their assessment earns — “floating” — and selection proceeds category by category.",
          who: "Every competitive-service applicant.",
          body: [],
          flags: [],
          links: [{ label: "OPM — Category rating", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#CategoryRating" }],
          source: "OPM category rating guidance · 5 U.S.C. §3318/§3319",
        },
        {
          id: "fed-augmented",
          name: "Augmented certification and the pass-over rule",
          summary:
            "An agency that wants to select a non-preference eligible over a preference eligible in the same category must pass over the veteran — a documented action with OPM oversight at the higher grades and for 10-point (CPS) veterans. The pass-over is the audit trail of preference; it is where preference has teeth.",
          who: "Preference eligibles on a certificate; hiring officials.",
          body: [],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide, pass-over provisions",
        },
        {
          id: "fed-veterans-rule",
          name: "The Veterans Rule",
          summary:
            "Inside category rating, the Veterans Rule is the standing protection: a preference eligible with a compensable service-connected disability of 10% or more (CP/CPS) is placed ahead of non-preference eligibles in all but the scientific/professional GS-9+ exception OPM publishes. Where a source describes a different mechanism, it is describing a different (older or excepted) system — the announcement governs.",
          who: "CP/CPS applicants above all.",
          body: [],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide / category rating guidance",
        },
      ],
    },
    {
      key: "leave",
      label: "Military Leave & Service Rights",
      tileSub: "Section 6 · 5 U.S.C. §6323 (a)–(d), the differential, USERRA",
      memberOnly: true,
      intro:
        "For Reservists and Guardsmen who hold federal civilian jobs: the paid military leave statute in its four parts, the reservist differential in its statutory shape, and USERRA's frame.",
      entries: [
        {
          id: "fed-leave-a",
          name: "§6323(a) — 20 days / 160 hours of paid military leave (current)",
          summary:
            "A federal employee who is a Reserve or National Guard member is entitled to 20 days (160 hours) of paid military leave per fiscal year for the active-duty and training service §6323(a) covers — the current figure. The 15-day figure that still circulates in older guides is superseded.",
          who: "Federal employees in the Reserve or Guard.",
          body: [],
          flags: ["Flag (F-3): 15 days was the pre-amendment figure. It survives in old agency pages and secondary summaries — it is NOT current. Current: 20 days / 160 hours."],
          links: [{ label: "5 U.S.C. §6323 (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/5/6323" }],
          source: "5 U.S.C. §6323(a)",
        },
        {
          id: "fed-leave-bcd",
          name: "§6323(b), (c), (d) — contingency leave, DC Guard, technicians",
          summary:
            "(b) 22 additional days for contingency/emergency duty as the subsection names it — with the pay-offset rule: the civilian pay is reduced by the military pay received for that duty. (c) District of Columbia National Guard service: unlimited paid leave under the subsection's terms. (d) 44 days for military technicians (dual status) performing the technician-covered service.",
          who: "Federal employees called under each subsection's authority.",
          body: [],
          flags: [],
          links: [{ label: "5 U.S.C. §6323 (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/5/6323" }],
          source: "5 U.S.C. §6323(b)–(d)",
        },
        {
          id: "fed-differential",
          name: "The reservist differential — statutory shape only",
          summary:
            "Under 5 U.S.C. §5538, a federal employee called to active duty under a covered contingency authority may receive a differential: when military pay is less than civilian pay, the agency pays the difference, computed in the statute's pay-period pattern (OPM's published example follows that same shape). The specifics of any one case — covered authority, computation period, offsets — belong to agency HR applying the statute.",
          who: "Federal employees on covered contingency orders.",
          body: [],
          flags: ["Flag (F-6): this entry prints the statutory shape and OPM's example pattern only. Individual computations are agency HR's work — do not compute a personal differential from this card."],
          links: [{ label: "5 U.S.C. §5538 (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/5/5538" }],
          source: "5 U.S.C. §5538 · OPM reservist differential guidance",
        },
        {
          id: "fed-userra",
          name: "USERRA — the frame",
          summary:
            "The Uniformed Services Employment and Reemployment Rights Act (38 U.S.C. §§4301–4333) is the reemployment-rights statute behind the leave rules: notice, the cumulative-service limits and their exceptions, reemployment position rules, and health-plan continuation. This section prints the frame; DOL VETS publishes the working guidance, and ESGR supports the employer relationship.",
          who: "Every drilling Reservist/Guardsman with a civilian job, federal or not.",
          body: [],
          flags: ["Flag (F-10): USERRA case outcomes are fact-specific; this section states the statute's structure only and gives no legal advice. DOL VETS and ESGR are the working routes."],
          links: [{ label: "DOL VETS — USERRA", url: "https://www.dol.gov/agencies/vets/programs/userra" }],
          source: "38 U.S.C. §§4301–4333 · DOL VETS",
        },
      ],
    },
    {
      key: "rif",
      label: "Reduction in Force (RIF)",
      tileSub: "Section 7 · both regimes — the Sept. 2, 2026 notice-date switch",
      memberOnly: true,
      intro:
        "RIF retention standing is being rebuilt. Both regimes print here because which one governs your case depends on the notice date — Sept. 2, 2026 is the switch (F-2).",
      entries: [
        {
          id: "fed-rif-new",
          name: "RIF — the current regime (notices on/after Sept. 2, 2026)",
          summary:
            "Retention registers are now built on performance credit: performance Levels 5 / 4 / 3 add 7 / 5 / 3 years of credit respectively (maximum 21), and veterans' preference adds +3 years — or +5 years for a preference eligible with a compensable disability of 30% or more — on top of tenure, performance, and service computation as the new rule orders them.",
          who: "Federal employees under a RIF notice dated on/after Sept. 2, 2026.",
          body: [],
          flags: ["Flag (F-2): the switch is the NOTICE DATE. A RIF noticed before Sept. 2, 2026 runs under the old regime (next entry) even if separations occur after."],
          links: [{ label: "OPM — Workforce reshaping / RIF", url: "https://www.opm.gov/policy-data-oversight/workforce-restructuring/" }],
          source: "OPM RIF rule (2026 regime)",
        },
        {
          id: "fed-rif-old",
          name: "RIF — the pre-Sept-2026 regime (historical, for notices before the switch)",
          summary:
            "The old arithmetic: tenure groups and preference subgroups (AD — 30%+ compensable disability — ranked above A — other preference eligibles — above B — non-preference), with retention standing by tenure, preference subgroup, length of service, and the old performance-credit additions. It governs only cases noticed before Sept. 2, 2026, and prints here so those cases can still be read.",
          who: "Federal employees under a RIF notice dated before Sept. 2, 2026.",
          body: [],
          flags: ["Historical regime — do not apply it to a post-switch notice."],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "5 C.F.R. Part 351 (pre-2026 regime) · OPM Vet Guide",
        },
      ],
    },
    {
      key: "conversions",
      label: "Military-to-Civilian Conversions",
      tileSub: "Section 8 · GS locality, grade-setting, service-credit buyback shape",
      memberOnly: true,
      intro:
        "The conversion mechanics members ask about when a military career becomes a federal civilian one: how GS grades and locality pay are structured, and the shape of military service credit — structure only, no personal computations.",
      entries: [
        {
          id: "fed-gs",
          name: "The GS structure — grades, steps, locality",
          summary:
            "Federal civilian pay under the General Schedule runs GS-1 through GS-15 with ten steps per grade, and locality pay areas adjust the base by area as OPM publishes. There is no official rank-to-grade conversion table — grade is set by the duties of the position and the appointee's qualifications as the agency evaluates them; any chart claiming a military-rank equivalence is unofficial.",
          who: "Members pricing a transition.",
          body: [],
          flags: ["No official military-rank-to-GS-grade table exists. Any source publishing one is estimating, not quoting OPM."],
          links: [{ label: "OPM — General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/" }],
          source: "OPM pay & leave guidance",
        },
        {
          id: "fed-buyback",
          name: "Military service credit — the shape",
          summary:
            "Military service can generally be credited toward civilian retirement and leave accrual under two different systems with two different rules (a deposit “buyback” for retirement credit; service computation date rules for leave). The systems are separate, the deposits are time-sensitive, and the computations are individual — this entry names the shape and routes the arithmetic to agency HR and OPM.",
          who: "New federal hires with prior military service.",
          body: [],
          flags: ["Do not compute a buyback from this card — deposits, interest, and deadlines are individual. Agency HR runs the numbers."],
          links: [{ label: "OPM — Creditable service", url: "https://www.opm.gov/retirement-center/" }],
          source: "OPM retirement guidance · 5 U.S.C. §§8331/8411, §6303",
        },
      ],
    },
    {
      key: "special",
      label: "Special Hiring Routes",
      tileSub: "Section 9 · PPP, ICTAP/CTAP, Title 38, Pathways pointers",
      memberOnly: true,
      intro:
        "The remaining routes members ask about by name — each printed as the program's own published shape, with pointers where another section of this app owns the detail.",
      entries: [
        {
          id: "fed-ppp",
          name: "Priority Placement Program (PPP)",
          summary:
            "DoD's placement program for its own displaced and overseas-returning employees — a registration-and-referral system inside DoD hiring. It is a DoD employee program, not a veterans' preference mechanism; it prints here because members conflate the two.",
          who: "DoD civilian employees in PPP-covered situations.",
          body: [],
          flags: [],
          links: [],
          source: "DoD PPP program materials",
        },
        {
          id: "fed-ictap",
          name: "ICTAP / CTAP — displaced-employee selection priority",
          summary:
            "The Interagency Career Transition Assistance Plan (ICTAP) and Career Transition Assistance Plan (CTAP) give well-qualified displaced federal employees selection priority for vacancies — a status-based priority, separate from veterans' preference, with its own documentation. Both can apply to the same person in different cases; the announcement states which priorities it honors.",
          who: "Current/former federal employees facing displacement.",
          body: [],
          flags: [],
          links: [{ label: "OPM — ICTAP/CTAP", url: "https://www.opm.gov/policy-data-oversight/workforce-restructuring/employee-guide-to-career-transition/" }],
          source: "OPM career transition guidance",
        },
        {
          id: "fed-title38",
          name: "Title 38 (VA health care) — a separate system, named",
          summary:
            "VA health-care occupations hire under Title 38 — a personnel system of its own, with its own qualification and pay rules, distinct from the Title 5 competitive service this section describes. Named here so a VA health-care announcement is not misread through Title 5 rules.",
          who: "Health-care professionals looking at VA.",
          body: [],
          flags: [],
          links: [],
          source: "38 U.S.C. Part V framework",
        },
        {
          id: "fed-pathways",
          name: "Pathways — named as a pointer",
          summary:
            "OPM's Pathways Programs (Internship, Recent Graduates, Presidential Management Fellows) are student/recent-graduate routes with their own rules — named here as a pointer to OPM's published program pages, not described as veterans' authorities.",
          who: "Students and recent graduates, including veterans in that window.",
          body: [],
          flags: [],
          links: [{ label: "OPM — Pathways", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#Pathways" }],
          source: "OPM Hiring Authorities (Pathways)",
        },
      ],
    },
    {
      key: "spouse-routes",
      label: "Derived Preference & Spouse Routes",
      tileSub: "For spouses · derived preference and the spouse authority, routed",
      spouseOnly: true,
      intro:
        "The two parts of this system that reach spouses directly: derived preference (claiming through your veteran, inside OPM's controlling limits) and the military spouse appointing authority — which lives in the Spouse Hub, named here and routed there.",
      entries: [
        {
          id: "fed-derived-spouse",
          name: "Derived preference — claiming through your veteran",
          summary:
            "A spouse, widow(er), or parent may claim preference derived from a veteran whose own disability or death qualifies (the XP family). OPM's controlling limits: no derived claim while the veteran is living, qualified to claim their own preference, and able to work; a widow(er)'s claim ends on remarriage (with OPM's published exceptions); a spouse's derived claim ends if the veteran obtains federal employment through it. The agency adjudicates every derived claim on the documents.",
          who: "Spouses, widows/widowers, and parents of disabled or deceased veterans.",
          body: [
            "Veterans' preference is real, it is specific, and it is not automatic — you claim it, with documents, on each application. Only the hiring agency's determination counts.",
          ],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "OPM Vet Guide (derived preference)",
        },
        {
          id: "fed-spouse-authority",
          name: "Military spouse appointing authority (5 C.F.R. §315.612) — routed",
          summary:
            "The noncompetitive military spouse appointment authority is §315.612 — a spouse authority in its own right, not veterans' preference. It is named here and routed to the Spouse Hub, which owns spouse hiring routes in this app; this section does not duplicate its rules.",
          who: "Military spouses applying to federal jobs.",
          body: [],
          flags: [],
          links: [{ label: "OPM — Military spouses", url: "https://www.opm.gov/policy-data-oversight/hiring-information/hiring-authorities/#MilitarySpouses" }],
          source: "5 C.F.R. §315.612 · OPM Hiring Authorities",
        },
      ],
    },
    {
      key: "verify",
      label: "Verify Before You Rely",
      tileSub: "Section 10 · the flag register F-1–F-10, in one place",
      intro:
        "Every flag in this section, gathered. If a number you rely on appears here, re-read its flag before you act on it.",
      entries: [
        {
          id: "fed-flags",
          name: "The flag register",
          summary:
            "F-1 rule of three superseded (Rule of Many, Nov. 7, 2025) · F-2 RIF notice-date switch Sept, 2026 · F-3 military leave is 20 days, not 15 · F-4 probationary-appeals details not verified — certification requirement only · F-5 (reserved in the pack for the checklist line) · F-6 differential prints statutory shape only · F-7 essay questions existence-only · F-8 shared certificates interim · F-9 SSAI portal unreachable; DCIPS named only · F-10 USERRA stated as structure, no case advice.",
          who: "Everyone.",
          body: [
            "The pattern across all ten: this section prints what OPM and the statute publish, flags what is in transition or was not verified, and never blends two regimes into one confident number. When this section and an agency page disagree, the agency adjudicating your case is the authority — and the disagreement itself is worth raising with them in writing.",
          ],
          flags: [],
          links: [{ label: "OPM Vet Guide (PDF)", url: "https://www.opm.gov/policy-data-oversight/veterans-services/vet-guide-for-hr-professionals/vet-guide.pdf" }],
          source: "Pack flag register F-1–F-10",
        },
      ],
    },
  ],
};
