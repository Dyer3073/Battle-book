// Change Your Job — static reference data transcribed from the researched
// change-job pack (~/workspace/military-app/change-job/change-job.md,
// researched November 8, 2026). Program names, who-runs-it lines, steps,
// first stops, and links come only from the pack; every pack flag is
// preserved on its card.
//
// Fidelity rules baked into this data (the pack's standing rules):
// - NO quotas, open-field lists, eligibility windows, or "currently open"
//   claims anywhere. Every branch entry routes to the branch's live
//   official source for what is open today.
// - USMC: the FY27 campaign MARADMIN link ships ONLY as an example of
//   where openings are announced — its targeted MOS list is NOT
//   reproduced and no MOS is presented as open.
// - Army: everything keys off the CURRENT In/Out Calls MILPER — no
//   MILPER number is printed as a standing fact, and the In/Out Calls
//   table is never reproduced.
// - Navy: BOTH truths ship together — C-WAY is NOT gone (it still runs
//   SELRES conversions, reenlistment quotas, SELRES affiliation, and
//   RC-to-AC/TAR transitions) AND active-duty/TAR billet conversions are
//   adjudicated in MyNavy Assignment (MNA). C-WAY is never described as
//   replaced, renamed, or retired.
// - Air Force: applications run through myFSS — never myVector as the
//   application route, and the retired myPers address is never printed.
// - Space Force: NO separate program is invented — Guardians use the
//   Department of the Air Force / AFPC retraining system (Entry 7 states
//   this plainly, with the same AFPC link).
// - Coast Guard: the entry carries the pack's flag that PSC-EPM's working
//   detail sits on CAC-gated systems and the public page is the front
//   door.
//
// Pack truncation note: the saved pack file ends mid-sentence in Entry 6
// (Air Force, step 2). Entry 6's remaining steps, Entry 7 (Space Force),
// and Entry 8 (Coast Guard) are rendered from the pack facts the build
// brief carries (myFSS application route, Developmental Advisor first
// stop, AFPC Retention as the AF/SF link; PSC-EPM / EPM-2 / RFMC roles
// and the CAC-gated flag for the Coast Guard). The AFPC Retention URL was
// recovered verbatim from the live AFPC site via search
// (https://www.afpc.af.mil/retention/ — the page covers Airmen AND
// Guardians, NCORP, and myFSS Retraining). The pack's exact PSC-EPM URL
// sat in the truncated tail and could not be recovered verbatim, so the
// Coast Guard entry links the verified official public front door for
// enlisted careers (MyCG — Enlisted Careers) and says so on the card.

export type ChangeJobLink = { label: string; url: string };

export type ChangeJobStep = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type ChangeJobXref = {
  label: string;
  target: "mos" | "readiness";
};

export type ChangeJobEntry = {
  name: string;
  kind: string;
  summary: string;
  /** The branch's official program name, as the pack states it. */
  program?: string;
  /** Who runs the program, as the pack states it. */
  runBy?: string;
  /** The pack's first stop — the person or office you start with. */
  firstStop?: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  /** Numbered overview steps, in pack order. */
  steps?: ChangeJobStep[];
  /** Checklist items (the Before You Apply entry). */
  checklist?: string[];
  flag?: string;
  /** Prominent statement box rendered inside the card. */
  callout?: string;
  links: ChangeJobLink[];
  xref?: ChangeJobXref;
};

export type ChangeJobGroup = {
  title: string;
  note?: string;
  entries: ChangeJobEntry[];
};

export const CHANGE_JOB_STANDING_NOTE =
  "Quotas, open fields, submission windows, and eligibility rules change constantly — by fiscal year, by message, sometimes mid-year. This section states no specific open fields, quota numbers, or window dates: every branch entry routes to the branch's live official source, which is the only place “what's open right now” is true. Any list of “open jobs” seen anywhere else should be treated as stale until checked at the live source. This section covers changing jobs inside your own branch only — not switching branches, commissioning, or warrant officer accessions.";

const MMEA: ChangeJobLink = {
  label: "HQMC Manpower & Reserve Affairs — MMEA (Enlisted Assignments)",
  url: "https://www.manpower.marines.mil/Divisions/Manpower-Management/Enlisted-Assignments/",
};
const FY27_CAMPAIGN_EXAMPLE: ChangeJobLink = {
  label:
    "Example of where openings live — a fiscal-year Enlisted Retention Campaign MARADMIN (openings and dates change every fiscal year; always pull the current campaign message)",
  url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4356385/fiscal-year-2027-enlisted-retention-campaign/",
};
const ARMY_RETENTION: ChangeJobLink = {
  label:
    "Army Retention — posts the current In/Out Calls, SRB, and Precision Retention MILPER messages and routes Soldiers to their Career Counselor",
  url: "https://www.army.mil/retention",
};
const NAVY_CONVERSIONS: ChangeJobLink = {
  label: "MyNavy HR — Conversions (conversion timelines, which ratings need packages, current routing)",
  url: "https://www.mynavyhr.navy.mil/Career-Management/Community-Management/Enlisted-Career-Admin/Conversions/",
};
const AFPC_RETENTION: ChangeJobLink = {
  label: "AFPC — Retention (Air Force Personnel Center; its retraining information routes to myFSS Retraining)",
  url: "https://www.afpc.af.mil/retention/",
};
const CG_ENLISTED_CAREERS: ChangeJobLink = {
  label: "MyCG — Enlisted Careers (the Coast Guard's public enlisted-careers front door: advancements, assignments, special assignments)",
  url: "https://www.mycg.uscg.mil/Enlisted/Careers/",
};
const CG_ALCOAST_ASCHOOL: ChangeJobLink = {
  label: "ALCOAST 106/26 — current “A” School guidance (secondary official link; the MyCG page above stays the front door)",
  url: "https://content.govdelivery.com/accounts/USDHSCG/bulletins/414c94c",
};

export const CHANGE_JOB_GROUPS: ChangeJobGroup[] = [
  {
    title: "Start Here — The Shared Picture",
    entries: [
      {
        name: "How It Generally Works",
        kind: "All branches",
        summary:
          "Every branch lets enlisted members change jobs in-service, and every branch runs it the same basic way — under a different name. Marine Corps: Lateral Move (LatMove). Army: Reclassification. Navy: Conversion (change of rating). Air Force: Retraining. Space Force: Retraining through Department of the Air Force systems. Coast Guard: Change in Rating (usually through an “A” School waitlist).",
        steps: [
          {
            title: "The service's needs decide, not preference alone",
            text: "You can only move out of a field that can spare you and into a field that needs people. Each branch publishes this balance somehow — targeted-MOS lists, In/Out Calls, convert-in/convert-out quotas, a retraining advisory — and that publication is what makes a move possible at all.",
          },
          {
            title: "There is a window",
            text: "Most moves are tied to your contract timeline — reenlistment windows, end of current contract, projected rotation date, or a fiscal-year campaign. Miss the window and the same request that would have been approved is a non-starter.",
          },
          {
            title: "A career counselor/planner is the gatekeeper",
            text: "In every branch the first real step is a person — Career Planner, Career Counselor, Command Career Counselor, Developmental Advisor — who can see the live requirements and submit the official request. There is no branch where you apply cold on a public website.",
          },
          {
            title: "Approval sits at headquarters level",
            text: "Monitors, community managers, HRC, AFPC, or EPM compare your request against quotas and make the call. Your command endorses; it does not approve.",
          },
          {
            title: "Approval usually means school + obligated service",
            text: "Most job changes route through the new field's schoolhouse, and the service expects a reenlistment or extension to cover the training and a payback tour.",
          },
          {
            title: "Losing once isn't the end",
            text: "Quotas refresh on a cycle (fiscal year, assignment cycle, or campaign). A “no” usually means “not this cycle,” and your counselor can tell you when the picture changes.",
          },
        ],
        who: "Any enlisted member researching a job change.",
        flag: "Officers and warrant officers change jobs through separate assignment/functional-manager systems in most branches and are largely outside these enlisted programs — this section does not cover them.",
        links: [],
      },
      {
        name: "Before You Apply",
        kind: "Checklist",
        summary:
          "Work through this before you sit down with your career counselor/planner — it is the same preparation in every branch.",
        checklist: [
          "Research the target job first. Use this app's Library entry for the MOS / rating / AFSC you're aiming at — day-to-day work, school pipeline, lifestyle — before you ask anyone to move you into it. (Library entries describe the job; they do not say whether it's open.)",
          "Know your contract dates. Where are you relative to your reenlistment window / end of current contract / rotation date? Timing is the single biggest eligibility factor in every branch.",
          "Check the live balance for your branch. Is your current field allowed to lose people, and is the target field taking them? Only your branch's live source (linked in your branch entry below) can answer this — never a screenshot, forum post, or last year's list.",
          "Confirm you meet the target field's entry requirements. Test-score lines, medical/physical standards, security-clearance eligibility, citizenship — the Library entry and your counselor can confirm; some requirements are waiverable and some are not.",
          "Ask about screening. Some fields are not application-by-paperwork — they require tryouts, assessments, interviews, or selection boards (special operations, special duty, and several technical fields). See the Special Duties part of Readiness & Life Skills in this app where relevant.",
          "Understand the money and obligation side. A job change often rides on a reenlistment or extension, may add a service obligation for school, and can affect bonuses (including possible repayment of a bonus tied to your old job). Ask your counselor to walk the specifics for your case.",
          "Get your record straight first. Evaluations, test scores, and qualifications in the official system are what headquarters sees. Fix record errors before the request goes up.",
          "Talk to your chain of command early. Every branch's process needs command endorsement; a surprised chain is a slow chain.",
          "Have a second choice. Quotas are competitive in most branches. Members who list only one target and miss it often wait a full cycle; a ranked second choice keeps the request alive.",
        ],
        links: [],
        xref: { label: "Research the target job in the MOS Library", target: "mos" },
      },
    ],
  },
  {
    title: "Your Branch's Program",
    note: "One entry per branch, each under its real program name. What is open today lives only at the branch's live official source — linked on every card.",
    entries: [
      {
        name: "Marine Corps — Lateral Move (LatMove)",
        kind: "Marine Corps",
        program: "Lateral Move — written both “LatMove” and “LatMov” in current MARADMINs (same program).",
        runBy:
          "Headquarters Marine Corps, Manpower Management Enlisted Assignments (MMEA) — retention actions sit with MMEA-1; your current and gaining PMOS monitors at MMEA review the request.",
        firstStop:
          "Your unit Career Planner. There is no self-service application — the Career Planner builds and submits the request.",
        summary:
          "LatMove openings are announced, not standing — they flow from the annual fiscal-year Enlisted Retention Campaign and individual MARADMINs. If an MOS isn't announced, it isn't open.",
        steps: [
          {
            title: "Openings are announced, not standing",
            text: "LatMove opportunities flow from the annual fiscal-year Enlisted Retention Campaign and individual MARADMINs that solicit lateral moves into specific shortage MOSs. Many openings are aimed at first-term Marines (FTAP), with select opportunities for career Marines (STAP) announced separately. If an MOS isn't announced, it isn't open — regardless of how short-handed it looks from the fleet.",
          },
          {
            title: "Start with your Career Planner",
            text: "Your Career Planner confirms your eligibility — contract timing (LatMove is normally executed with a reenlistment), grade, scores, and the target MOS's prerequisites in the MOS Manual.",
          },
          {
            title: "The request is a RELM",
            text: "A Reenlistment, Extension, Lateral Move request — submitted in the Total Force Retention System (TFRS) and routed through your chain of command.",
          },
          {
            title: "MMEA adjudicates",
            text: "Your current PMOS monitor and the gaining MOS monitor review the request against available boatspaces; some target MOSs add a screening, assessment, or interview run by the gaining community before MMEA gives a final answer.",
          },
          {
            title: "If approved",
            text: "MMEA assigns the intended MOS and you execute the associated reenlistment and school/PCS orders for the new MOS pipeline.",
          },
        ],
        flag: "Targeted MOS lists, submission periods, and boatspaces are fiscal-year specific and change mid-year as spaces fill — no MOS list from a campaign MARADMIN is reproduced here as “open.” Reserve-component LatMove follows related but separate guidance; the campaign messages address the active component.",
        links: [MMEA, FY27_CAMPAIGN_EXAMPLE],
      },
      {
        name: "Army — Reclassification",
        kind: "Army",
        program: "Reclassification (often shortened to “reclass”).",
        runBy:
          "U.S. Army Human Resources Command (HRC), Retention and Reclassification Branch (AHRC-FSF-ER). Policy framework: AR 601-280 (Army Retention Program) and AR 614-200, executed through MILPER messages.",
        firstStop:
          "Your servicing Career Counselor or Installation Retention Office. HRC directs Soldiers there before contacting the branch directly.",
        summary:
          "Everything keys off the current Reclassification In/Out Calls MILPER message — it is reissued as strengths change, and the current version is the only one that counts.",
        steps: [
          {
            title: "Everything keys off the current In/Out Calls MILPER",
            text: "The current Reclassification In/Out Calls MILPER message lists, by MOS and skill level, whether Soldiers may reclassify out of their current MOS (a “Y” in the OUT column) and into a target MOS (a “Y” in the IN column), with an exceptions column. Shortage MOSs show IN openings; overstrength MOSs show OUT calls; balanced MOSs show neither. The message is reissued as strengths change — the current version is posted through the official Army Retention site and HRC.",
          },
          {
            title: "Most voluntary reclassification rides a reenlistment",
            text: "Soldiers inside their reenlistment opportunity window change PMOS through a reenlistment option; your Career Counselor works the request through the RETAIN system to HRC, which issues the reclassification decision/control number.",
          },
          {
            title: "Some MOSs are “by application” instead",
            text: "Designated fields (application/packet MOSs, and programs such as the Special MOS Alignment Promotion Program, SMAPP, which pairs reclassification into critical MOSs with promotion on graduation) take individual applications under their own MILPER guidance, and a set of critical MOSs may be requested regardless of your current MOS's In/Out Calls, as the current messages state.",
          },
          {
            title: "Training carries a service remaining requirement",
            text: "Before school, you must reenlist or extend to cover it — approval alone doesn't send you to training.",
          },
          {
            title: "Directed reclassification also exists",
            text: "Precision Retention and overstrength actions can require Soldiers in overage MOSs to reclassify; that is the same machinery running in the other direction.",
          },
        ],
        flag: "In/Out Calls are republished whenever MOS strengths shift and individual MILPER messages expire (about a year per issue) — the calls table is never reproduced here; route to the live message. Guidance on the HRC public page applies to Regular Army Soldiers; Guard/Reserve reclassification runs through state/component channels.",
        links: [ARMY_RETENTION],
      },
      {
        name: "Navy — Conversion",
        kind: "Navy",
        program:
          "Conversion (a change of rating; “cross-rating” is the common slang, not the program name). Policy: MILPERSMAN 1440-010 (Conversion Authorization); directed moves are covered separately by MILPERSMAN 1440-011 (Forced Conversion).",
        runBy:
          "Bureau of Naval Personnel Enlisted Community Managers (ECMs, BUPERS-32/312), who set convert-in and convert-out quotas; the MyNavy Career Center (MNCC) intake-routes many requests.",
        firstStop: "Your Command Career Counselor (CCC).",
        summary:
          "Quotas govern everything: the ECM for your rating sets convert-out quotas and the gaining rating's ECM sets convert-in quotas, by rating and year group (active/TAR) or pay grade (SELRES). No quota, no conversion — even with a perfect record. Which system handles your conversion depends on your component and the conversion type — read the callout on this card before anyone tells you which website to use.",
        steps: [
          {
            title: "Active and TAR Sailors: billet-based conversions are adjudicated in MyNavy Assignment (MNA)",
            text: "Per the current MyNavy HR Conversions page, the ECM sets conversion quotas each MNA cycle; you apply for a conversion billet and the gaining rating's detailer reviews applications and selects.",
          },
          {
            title: "“A” School and package conversions route through MNCC",
            text: "Conversions requiring “A” School (for ratings on the no-package list) and package-required conversions (ratings with formal screening packages — portfolios, interviews, community review) are submitted through MNCC, which routes them to BUPERS for adjudication. Timing is keyed to your Projected Rotation Date (PRD) — the Conversions page publishes the current submission timelines (for example, A-school conversion requests are due well over a year before PRD), so start early.",
          },
          {
            title: "SELRES Sailors convert through Career Waypoints (C-WAY)",
            text: "The C-WAY Conversion module handles Reserve-component lateral conversions, and C-WAY also remains the system for reenlistment quotas, SELRES affiliation, and RC-to-AC/TAR transitions.",
          },
          {
            title: "Meet the gaining rating's entry standards",
            text: "MILPERSMAN 1306-618 — ASVAB lines, medical, clearance, conduct. Approvals can be tentative pending a clearance adjudication, and conversion approvals for active Sailors carry a reenlistment obligation.",
          },
        ],
        callout:
          "C-WAY is NOT gone. Career Waypoints still runs SELRES conversions, reenlistment quotas, SELRES affiliation, and RC-to-AC/TAR transitions — its user guide was revised as recently as February 2026. What changed is narrower: active-component lateral conversions are adjudicated in MyNavy Assignment (MNA) per the current MyNavy HR Conversions page, even though MILPERSMAN 1440-010 (last updated 2018) still describes AC conversions inside C-WAY modules. Component and conversion type decide the system — don't let anyone tell you “C-WAY is gone” or “just use C-WAY.”",
        flag: "Which ratings are open changes every cycle and is never listed here — check the live Conversions page.",
        links: [NAVY_CONVERSIONS],
      },
      {
        name: "Air Force — Retraining",
        kind: "Air Force",
        program: "Retraining, under the Airman Retraining Program (DAFI 36-2626).",
        runBy:
          "Air Force Personnel Center (AFPC) is the approval authority; career field managers set the requirements.",
        firstStop:
          "Your base Developmental Advisor (also called Career Assistance Advisor) — and the myFSS Retraining pages (CAC/login required).",
        summary: "Retraining has two main doors:",
        details: [
          "First Term Airman (FTA) retraining — for Airmen on their first enlistment, inside a defined retraining window tied to time in service.",
          "Noncommissioned Officer Retraining Program (NCORP) — for second-term and career NCOs, run in phases (a voluntary phase, a mandatory phase for NCOs in overage fields who didn't volunteer, and an open-season phase for the rest of the fiscal year).",
        ],
        steps: [
          {
            title: "Start with the Retraining Advisory",
            text: "The online advisory — now inside myFSS — is the live list: which AFSCs are in overage (retrain-out) status, which have shortage quotas, and each field's requirements. It updates as quotas fill; it is the only authoritative “what's open.”",
          },
          {
            title: "Check your window and eligibility",
            text: "Time in service, grade, and skill level decide which door you are in — the FTA retraining window on a first enlistment, or your NCORP phase as a second-term or career NCO — and whether you can apply at all this cycle.",
          },
          {
            title: "Apply through myFSS",
            text: "Retraining applications are submitted through the myFSS Retraining pages. AFPC is the approval authority; career field managers set each field's requirements.",
          },
        ],
        flag: "Apply through myFSS — not myVector (that's the talent marketplace, not the application route), and not the retired myPers address that older official articles still print. That address is retired and is deliberately not linked here.",
        links: [AFPC_RETENTION],
      },
      {
        name: "Space Force — Retraining (through the Air Force system)",
        kind: "Space Force",
        program: "Retraining — through the Department of the Air Force / AFPC retraining system. There is no separate Space Force program.",
        runBy:
          "Air Force Personnel Center (AFPC) — the same approval authority as Air Force retraining; the AFPC Retention page covers Airmen and Guardians together.",
        firstStop: "Your base Developmental Advisor — the same first stop as Air Force retraining.",
        summary:
          "Stated plainly: the Space Force has no retraining program of its own, and no USSF-branded retraining program page exists on official sources. Guardians change specialty codes through the Department of the Air Force retraining system — FTA retraining and NCORP, the Retraining Advisory and applications in myFSS, AFPC deciding — exactly as the Air Force entry above describes. Work that entry; it is the same system, the same first stop, and the same official page.",
        steps: [
          {
            title: "Use the Air Force route",
            text: "Check the Retraining Advisory inside myFSS for the live balance, confirm your window (FTA or NCORP) with your Developmental Advisor, and apply through myFSS. AFPC adjudicates for Guardians the same as for Airmen.",
          },
        ],
        links: [AFPC_RETENTION],
      },
      {
        name: "Coast Guard — Change in Rating",
        kind: "Coast Guard",
        program: "Change in Rating (CIR).",
        runBy:
          "Coast Guard Personnel Service Center, Enlisted Personnel Management (PSC-EPM). EPM-2 (the Assignments Branch) manages enlisted assignments and “A” School quotas; Rating Force Master Chiefs (RFMCs) are the rating authorities for their ratings.",
        firstStop:
          "Your rating's Assignment Officer at PSC-EPM-2 — reached through the PSC-EPM pages. Start with the public front door linked below; the working pages are CAC-gated.",
        summary:
          "A Coast Guard change in rating usually runs through an “A” School waitlist for the target rating, managed by PSC-EPM against the needs of the service — the same shared mechanics as every other branch on this page: the service's balance decides, a headquarters office adjudicates, and approval means school plus obligated service.",
        steps: [
          {
            title: "PSC-EPM runs the process",
            text: "EPM-2 assignment officers manage assignments and “A” School quotas rating by rating; the Rating Force Master Chief for the target rating is its rating authority. Your Assignment Officer is the person who can see the live picture for your rating.",
          },
          {
            title: "The working detail is CAC-gated",
            text: "Current quotas, waitlist positions, rating-specific guidance, and the EPM-2 Assignment Officer pages for each rating live on CAC-gated systems (the Coast Guard Portal / PSC-EPM SharePoint). They are not published on public pages, and nothing about them is reproduced here.",
          },
          {
            title: "The public PSC-EPM page is the front door",
            text: "Start at the Coast Guard's public enlisted-careers pages, which route members to PSC-EPM and its assignments, advancements, and special-assignment resources — then work the rest with your chain of command and your Assignment Officer on the gated side.",
          },
        ],
        flag: "Most of PSC-EPM's working detail sits behind CAC login by design. The public page linked here is the front door, not the whole process — expect the real steps to happen on the gated EPM-2 rating pages.",
        links: [CG_ENLISTED_CAREERS, CG_ALCOAST_ASCHOOL],
      },
    ],
  },
];
