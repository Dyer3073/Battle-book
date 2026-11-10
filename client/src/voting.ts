// Voting Center — transcribed from the researched pack
// (~/workspace/military-app/voting/voting.md, researched Nov 9,
// 2026). FVAP-only sourcing (plus vote.gov, the USAGov site FVAP's
// own materials route local voters to). Strictly nonpartisan: no
// candidate, party, or campaign content of any kind. ZERO state
// deadlines cataloged — no state deadlines, return-method lists, or
// eligibility quirks anywhere; every state fact routes to FVAP's
// official state tool. If anything here and FVAP's state page ever
// disagree, the state page wins — and that sentence ships in the app.

import type { RefGroup } from "./refdata";

export const VOTING_STANDING =
  "States run elections — FVAP is the federal program that helps military and overseas voters through them. This section teaches FVAP's process and sends you to FVAP's page for your state for every deadline. It is nonpartisan: it will never mention a candidate, a party platform, or how anyone should vote.";

export const VOTING_INTRO =
  "Send a Federal Post Card Application (FPCA) to your local election office every January and every time you move — that one form registers you and requests your absentee ballot — then vote and return the ballot the moment it arrives, and if it never arrives, the Federal Write-In Absentee Ballot (FWAB) is your backup. FVAP direct help: FVAP.gov · 1-800-438-VOTE (8683) · vote@fvap.gov.";

const FVAP_HOME = { label: "FVAP home", url: "https://www.fvap.gov/" };
const FVAP_MIL = { label: "FVAP — Military Voters", url: "https://www.fvap.gov/military-voter" };
const FVAP_SPOUSES = { label: "FVAP — Military Spouses and Families", url: "https://www.fvap.gov/military-voter/military-spouses" };
const FVAP_OFFICES = { label: "FVAP — find your election office", url: "https://www.fvap.gov/search-offices" };
const FVAP_GUIDE = { label: "FVAP — Voting Assistance Guide (state instructions, Chapter 2)", url: "https://www.fvap.gov/guide" };
const FVAP_FWAB = { label: "FVAP — FWAB (the backup ballot)", url: "https://www.fvap.gov/fwab" };
const FVAP_FORMS = { label: "FVAP — election materials / forms", url: "https://www.fvap.gov/eo/overview/materials/forms" };
const FVAP_IVA = { label: "FVAP — Installation Voting Assistance Offices directory", url: "https://www.fvap.gov/info/contact/iva-offices" };
const FVAP_RES = { label: "FVAP — Voting Residence (military voters)", url: "https://www.fvap.gov/military-voter/voting-residence" };
const FVAP_RES_LAW = { label: "FVAP — Voting Residence (laws/guidance)", url: "https://www.fvap.gov/info/laws/voting-residence" };
const VOTEGOV = { label: "vote.gov — Voting as a military service member", url: "https://vote.gov/voting-military-service-member" };

export const VOTING_GROUPS: RefGroup[] = [
  {
    title: "The One Form That Gets Your Ballot (FPCA)",
    entries: [
      {
        name: "FVAP and UOCAVA — who runs this and under what law",
        body: "The Federal Voting Assistance Program (FVAP) is a Department of Defense program that, in FVAP's own words, “works to ensure Service members, their eligible family members and overseas citizens are aware of their right to vote and have the tools and resources to successfully do so — from anywhere in the world.” FVAP's Director administers the Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA) on behalf of the Secretary of Defense. UOCAVA, as amended by the Military and Overseas Voter Empowerment (MOVE) Act, is the federal law that gives absent uniformed-services voters, their eligible family members, and U.S. citizens residing outside the United States the right to register and vote absentee in federal elections — and it is what obliges states to send those voters their ballots on the 45-day timeline in the Timelines tile. FVAP's standing message to voters: “Americans can vote. Wherever they are.”",
        who: "Everyone this section serves — read this first, then the FPCA entry.",
        links: [FVAP_HOME, FVAP_MIL],
        source: "FVAP — FVAP.gov; Military Voters",
      },
      {
        name: "The FPCA — one form that registers you and requests your ballot",
        body: "The Federal Post Card Application (FPCA, Federal Standard Form 76) is the single form UOCAVA voters use to do three things at once, in FVAP's framing: (1) register to vote, (2) request an absentee ballot, and (3) update contact information with your election office. FVAP's form guidance: “UOCAVA citizens can use the FPCA to register to vote and request an absentee ballot simultaneously.” All states and territories accept the FPCA. Using the FPCA — rather than a generic state form — is what attaches the federal protections to your request, including the 45-day ballot-transmission protection; FVAP's voter pages put it plainly: “Using the FPCA ensures that your state will send your ballot to you at least 45 days before the election — a protection not guaranteed when using other forms.” An FPCA requests absentee ballots for all federal elections in the calendar year (the refresh rule is the next-but-one entry; how far a given state extends an FPCA beyond that is a state rule — routed, never cataloged).",
        who: "Every UOCAVA voter, every cycle — including voters who are already registered. Already-registered voters still file the FPCA to request the ballot and to tell the election office where to send it.",
        flag: "FPCA/FWAB form revisions in progress: FVAP's August 2026 newsletter reports updated versions of the FPCA and FWAB were issued in 2026 (Federal Register notices 2026-18479 / 2026-18473, comment period to November 9, 2026) to reduce voter confusion about required information and eligibility, and states voters with a previous version already on file with their election office do not need to submit a new form and states may process previous versions. This section links FVAP's live form pages (never a stored form PDF) so voters always get the current version.",
        links: [FVAP_MIL],
        source: "FVAP — Military Voters (FPCA start point)",
      },
      {
        name: "How to complete and send the FPCA",
        body: "Steps, as FVAP's Voting Assistance Guide states them. 1. Get the form one of three ways: (a) FVAP's online assistant at FVAP.gov — “The online assistant guides you through your state's required information to complete the form. Once you have finished, download the PDF package, print, sign, and send”; (b) the fillable PDF at FVAP.gov, completed using your state's instructions in Chapter 2 of the Voting Assistance Guide, then printed, signed, and sent; or (c) a hard copy from your unit Voting Assistance Officer, your Installation Voting Assistance Office, or a U.S. embassy/consulate. 2. Sign and date it. An unsigned FPCA is an incomplete FPCA. 3. Send it to your local election office — the election office for your voting residence, not to FVAP. Find the office's address, email, and fax in FVAP's election-office lookup or your state's pages in the Voting Assistance Guide. How a state accepts the FPCA — mail, email, fax, and/or an online portal — is set by the state; FVAP's state pages state which channels your state allows. 4. Mailing it costs nothing in the military mail stream: FVAP provides a postage-paid envelope template online for the mailed FPCA, and the form is postage-free in U.S. mail including the Military Postal Service and the State Department pouch. You supply your own envelope unless you use the FVAP template. 5. Each voter files their own. Spouses and voting-age dependents each submit their own FPCA — one form never covers a family.",
        links: [FVAP_MIL, FVAP_OFFICES, FVAP_GUIDE],
        source: "FVAP — Military Voters; Voting Assistance Guide",
      },
      {
        name: "When to send it — January, every move, and the 90-day floor",
        body: "FVAP's recommendation, stated identically across its voter pages, FAQ, and Guide: “You should send in a new FPCA every January and each time you move. We recommend that you send in an FPCA at least 90 days before the election in which you want to vote.” The Guide phrases the same rule as: submit a new FPCA “every January, each time you move, or at least 90 days prior to the election you want to vote in,” so the election office always has your current address for the whole time you are away from your voting residence. This is the annual-refresh rule, and it is a recommendation with a practical reason, not a formality: an FPCA requests ballots for all federal elections in the calendar year, addresses go stale with every PCS, deployment, and barracks change, and an election office cannot send a ballot to an address it doesn't have. Filing in January covers that year's primaries and general election in one move.",
        who: "Every UOCAVA voter, every January — plus immediately on any move, and never later than 90 days out from an election you intend to vote in. FVAP's FAQ adds that even close to a deadline you should still submit: “even as deadlines approach we always encourage you to submit as state laws vary and you may qualify for a ballot containing only federal offices.”",
        flag: "FVAP's military-voter pages add a cycle-facing target for the general election — “For the General Election, it's best to send in the FPCA by August 1” — which is FVAP's standing general-election guidance, but the operative deadline is always your state's registration/ballot-request deadline. August 1 prints as FVAP's “best by” target; the real deadline routes to the state page.",
        links: [FVAP_MIL, FVAP_SPOUSES],
        source: "FVAP — Military Voters; Military Spouses and Families",
      },
      {
        name: "After you send it — confirm, then watch for the ballot",
        body: "Steps. 1. Confirm receipt. FVAP directs voters to check the status of their FPCA by contacting their local election office (contact information via FVAP's election-office lookup). Do not assume a mailed or emailed form arrived. 2. Know what happens next. Once the election office processes the FPCA, it sends your blank ballot on the 45-day timeline, by the delivery method you chose. 3. Keep your information current. If you move again, deploy, or change email/mailing address mid-cycle, that is a new FPCA — FVAP treats the FPCA as the voter's change-of-address form for election purposes. 4. Subscribe to FVAP Voting Alerts (sign-up via FVAP.gov / vote@fvap.gov) for registration-deadline and election-date reminders during the cycle.",
        links: [FVAP_OFFICES, FVAP_HOME],
        source: "FVAP — election-office lookup; FVAP home (Voting Alerts)",
      },
    ],
  },
  {
    title: "The Ballot",
    entries: [
      {
        name: "How your ballot arrives — you choose the delivery method",
        body: "On the FPCA you tell your election office how you want to receive your ballot. As FVAP and the MOVE Act framework it administers describe it, states must offer UOCAVA voters an electronic way to receive the blank ballot; in practice the delivery channels are mail, email, fax, or the state's online ballot-delivery portal, as your state provides — the FPCA is where you state your choice and supply the email address it should go to. Requesting email/electronic delivery is the single biggest speed lever a voter controls: it removes one full mail transit from the timeline, which is why FVAP's guidance to overseas voters is to request electronic delivery and put an email address on the FPCA.",
        who: "Every absentee voter, at FPCA time — delivery choice is made on the form, not after.",
        flag: "FVAP's expectation-setting for the general election: “For the General Election, you should receive your ballot by early October” — the general-election instance of the 45-day rule. FVAP materials phrase the missing-ballot marker two ways (see the escalation entry in the Timelines tile): consumer pages say “by early October”; FVAP's Voter Bill of Rights sets the action line at not received 30 days before an election. Both print, each attributed — the 30-day line is the action trigger and “early October” its general-election face, not merged into a third phrasing.",
        links: [FVAP_MIL, FVAP_GUIDE],
        source: "FVAP — Military Voters; Voting Assistance Guide",
      },
      {
        name: "Vote it and return it immediately — return methods are your state's call",
        body: "FVAP's standing instruction, verbatim in substance: “Vote and send back your ballot as soon as you receive it.” FVAP builds its whole timeline guidance around the return trip being the slow, failure-prone leg — mail transit from a deployed or shipboard location is measured in weeks, and every state's deadline is a hard stop. How a voted ballot may be returned — mail only, or also email, fax, or online upload — is set by your state, and FVAP's state pages and the Guide's Chapter 2 are where that is stated for your state. This section catalogs no state's return methods. Two rules that hold everywhere: follow the instructions that come with your ballot exactly (signature, date, envelope, and any witness/ID steps your state prints), and the ballot goes to your local election office — never to FVAP, never to your unit.",
        who: "Every voter, the day the ballot arrives.",
        links: [FVAP_HOME, FVAP_GUIDE],
        source: "FVAP — state pages; Voting Assistance Guide",
      },
      {
        name: "Electronic return and the secrecy waiver — FVAP's framing",
        body: "Where a state allows a voted ballot to come back by email or fax, FVAP's process wraps that return in a transmission cover sheet with a Voter's Declaration/Affirmation. The voter signs that declaration knowing the ballot is not traveling sealed: returning a voted ballot electronically means the ballot can be seen outside a secrecy envelope, and the signed cover sheet is the voter's acknowledgment of that — FVAP's FWAB materials carry the same structure and a dedicated privacy notice for the backup ballot. The trade FVAP presents is explicit: speed and certainty of arrival, in exchange for secrecy of that ballot in transit. A voter unwilling to make that trade returns by mail and plans around the mailing lead times in the Timelines tile.",
        who: "Any voter whose state offers email/fax return and who is weighing it — most relevant deployed, shipboard, and remote, where mail time is longest.",
        flag: "CHANGED PROCEDURE — do not teach the old one. FVAP previously ran a service that forwarded voters' emailed/faxed election materials to election offices. FVAP discontinued that forwarding service effective August 1, 2025 (FVAP announcement, September 2025 newsletter; state election offices now repeat the warning on their own pages): you can no longer send your voted ballot or FPCA to FVAP for forwarding — electronic returns and submissions go directly to your election office. Stale unit briefs saying otherwise are wrong.",
        links: [FVAP_HOME, FVAP_FWAB],
        source: "FVAP — state pages; FWAB (cover sheet / privacy notice pattern)",
      },
      {
        name: "Returning by mail — free from the military postal system, and the express label",
        body: "Three mail facts FVAP publishes for military voters. 1. Postage-paid return from U.S. channels: a voted ballot mailed in the U.S. mail — including from an APO/FPO or via the embassy/consulate diplomatic pouch — can go with FVAP's postage-paid envelope template; voters pay postage only when using a foreign postal service or a commercial courier. 2. Label 11-DoD (Prepaid Mail Label 11-DoD): “Overseas Uniformed Service members can use this label for general election absentee ballots. It provides free express mail service to your election official for general election absentee ballots. You can request to have a Prepaid Mail Label 11-DoD applied to your absentee ballot at Military Postal Office locations (APO/FPO). Keep part of the tracking label to track your absentee ballot through the U.S. Postal Service.” FVAP restricts it as stated: overseas uniformed-services voters, general-election ballots, applied at the military post office. 3. Embassy/consulate drop-off: overseas voters with access can also return ballots and forms through a U.S. embassy or consulate's pouch mail — allow the pouch's transit time on top of U.S. delivery (the Timelines tile's lead times are the planning figures).",
        who: "Mail returners — primarily overseas and deployed voters for the label and the pouch.",
        links: [FVAP_HOME],
        source: "FVAP — state pages (Label 11-DoD and return guidance)",
      },
      {
        name: "Track it, and what happens if it's rejected",
        body: "Steps. 1. Track where your state offers tracking. FVAP's state pages link each state's own ballot-status/tracking system (“You can check the status of your absentee ballot here:”), and the Label 11-DoD stub tracks the mail leg through USPS for overseas general-election ballots. 2. If a ballot is rejected, per vote.gov's military-voter guidance: “your local election officials should contact you and tell you why. If you have not been contacted, contact your state election office or the Federal Voting Assistance Program (FVAP).” 3. If anything else goes wrong — ballot never sent, office unresponsive, deadline confusion — escalate in this order: local election office → your unit VAO / Installation Voting Assistance Office → FVAP directly (1-800-438-VOTE (8683), vote@fvap.gov).",
        links: [VOTEGOV, FVAP_OFFICES],
        source: "vote.gov — Voting as a military service member; FVAP",
      },
      {
        name: "The FWAB — the backup ballot, exactly as FVAP instructs",
        body: "The Federal Write-In Absentee Ballot (FWAB, Federal Standard Form 186) is, in FVAP's words, “an emergency backup ballot for UOCAVA citizens who did not receive an absentee ballot from their state in time to participate in the election.” It is a write-in ballot: instead of marking printed choices, you write in the name of the candidate or the party for each office, on the Official Backup Ballot page that travels with the Voter's Declaration/Affirmation. When to use it (FVAP's instruction, not a paraphrase): when you already requested your ballot (via the FPCA) and either (a) you have not received your state ballot in time — FVAP's Voter Bill of Rights marker: “If you have not received your Absentee Ballot 30 days before an election, you may complete and submit the Federal Write-In Absentee Ballot” — or (b) there is not enough time left to receive and return the regular ballot before your state's deadline. You do not wait for the state ballot to become hopeless; the FWAB exists for the gap. How (FVAP's process): 1. Complete it with FVAP's online FWAB assistant at FVAP.gov or from the fillable PDF; hard copies are held by Voting Assistance Officers and at embassies/consulates. 2. Sign the Voter's Declaration/Affirmation and send the package to your local election office by your state's ballot-return deadline, using a return method your state accepts. 3. If your regular ballot arrives afterward, vote it and return it too. FVAP's rule, stated across its materials: election officials count only one ballot — the regular ballot if it arrives in time, otherwise the FWAB. Sending both is the designed procedure, not double voting. Coverage limits, stated honestly: the FWAB is federally a ballot for federal offices; whether it may also carry state and local contests is set by your state — FVAP's form instructions and state pages say which, and this section catalogs no state's answer. Likewise, some states require you to have registered and requested a ballot (FPCA on file) before the FWAB can serve as your ballot, while others accept the FWAB itself as a registration/request — the FWAB's printed instructions name the requirement pattern; your state's FVAP page controls. Both questions route to the state page, every time.",
        links: [FVAP_FWAB, FVAP_FORMS],
        source: "FVAP — FWAB; election materials/forms",
      },
    ],
  },
  {
    title: "Timelines, as FVAP Publishes Them",
    entries: [
      {
        name: "The 45-day rule — the MOVE Act's transmission deadline",
        body: "Under UOCAVA as amended by the MOVE Act, states must transmit requested absentee ballots to UOCAVA voters no later than 45 days before a federal election. FVAP states the voter-side version on its pages: using the FPCA “ensures that your state will send your ballot to you at least 45 days before the election.” Two conditions the voter controls: the protection attaches to a ballot requested — an FPCA (or equivalent request) has to be on file in time — and it guarantees transmission, not arrival in your hands; transit time is on the voter to plan for. Primaries and special elections for federal office are federal elections for this rule; the transmission date for any specific election is computed from that election's date and published per election on FVAP's state pages.",
        links: [FVAP_MIL, FVAP_HOME],
        source: "FVAP — Military Voters; state pages",
      },
      {
        name: "Recommended mailing lead times — by where you are (planning guidance)",
        body: "FVAP publishes recommended mailing dates for returning a voted ballot, framed by the voter's location and mail access. The day-count framing in FVAP's 2026-27 Voting Assistance Guide: At sea, or overseas without access to a military post office: mail your voted ballot 35 days before the election. At an overseas military installation with military postal access: 30 days before the election. Stateside: 11 days before the election. The Military Postal Service publishes companion recommended dates for FPCA and ballot mailing — same route: FVAP.",
        who: "Anyone returning by mail; the further from a military post office, the earlier row applies.",
        flag: "These are lead-time recommendations, not deadlines — your state's actual receipt/postmark deadline (on FVAP's state page) is the law; these figures are FVAP's “send it by now so mail time doesn't beat you” planning numbers, and FVAP converts them into specific calendar dates for each federal general election in its current-cycle materials. FVAP materials across the 2026 cycle show the same three-location structure with dates computed off that cycle's Election Day; this section prints the three lead times with this flag and links FVAP's current recommended-mailing-dates posting rather than hard-coding any cycle's calendar dates.",
        links: [FVAP_GUIDE],
        source: "FVAP — Voting Assistance Guide (Chapter 1, recommended mailing dates)",
      },
      {
        name: "The escalation ladder when the ballot hasn't come",
        body: "Steps (FVAP's sequence, assembled from its voter pages, FAQ, and Voter Bill of Rights). 1. Check the marker. For a general election, FVAP tells military voters “you should receive your ballot by early October” — and its Voter Bill of Rights sets the action line at 30 days before the election: no ballot by then means act, don't wait. 2. Contact your local election office first — confirm your FPCA was received and processed and that the ballot was transmitted; FVAP's FAQ routes status questions to the election office, and the contact is one lookup away (FVAP's search-offices). 3. Vote the FWAB — this is the step the backup ballot exists for; do not let the regular ballot's absence become a missed deadline. 4. Get a human: your unit Voting Assistance Officer or Installation Voting Assistance Office can supply forms, confirm your election office's contacts, and escalate; FVAP itself answers voters directly at 1-800-438-VOTE (8683) and vote@fvap.gov.",
        links: [FVAP_OFFICES, FVAP_IVA],
        source: "FVAP — voter pages, FAQ, Voter Bill of Rights",
      },
      {
        name: "The shape of an election year (orientation, not deadlines)",
        body: "FVAP's cycle runs on a rhythm worth teaching once: January — new FPCA. Spring through summer — state primaries for federal office, run under the same UOCAVA rules (45-day transmission, FWAB backup); your state's primary date and deadlines are on its FVAP page. Early fall — ballots transmit 45 days out from the general election; FVAP runs its annual absentee-voting push weeks in the fall aimed at getting voted ballots into the mail stream against the mailing lead times. Election Day — the federal general election is the Tuesday after the first Monday in November of even-numbered years; state receipt rules decide what still counts after it (routed, never cataloged). Off-years still carry federal special elections and the January FPCA habit. Nothing in this entry is a deadline. It exists so a first-time voter can see the year whole; every operative date routes to FVAP's state pages.",
        flag: "Absentee Voting Week timing is a cycle program item: FVAP/Services designate absentee-voting push weeks each cycle (2026 cycle service plans place Absentee Voting Week across late September–early October). The practice is named here; the current cycle's dates come from FVAP, not from 2026's.",
        links: [FVAP_HOME],
        source: "FVAP — cycle materials",
      },
    ],
  },
  {
    title: "Who Is Covered, and the Residence Rules",
    entries: [
      {
        name: "Who UOCAVA covers",
        body: "FVAP's FAQ, verbatim in substance: “UOCAVA covers U.S. citizens who are 18 or older AND active duty members of the Uniformed Services, the Merchant Marine, or the commissioned corps of the Public Health Service and the National Oceanic and Atmospheric Administration; their eligible family members; and U.S. citizens residing outside the United States.” The absentee right attaches when the voter is absent from their voting jurisdiction — stationed, deployed, or living away from the place they vote. Eligible family members means spouses and voting-age dependents living away from their voting residence with the member. Guard and Reserve members voting absentee do so under the same UOCAVA umbrella when absent from their voting jurisdiction (e.g., on active-duty orders away from home); a drilling member voting from home follows the state's regular procedures.",
        links: [FVAP_MIL],
        source: "FVAP — Military Voters (FAQ)",
      },
      {
        name: "Who is NOT covered — stationed where you vote",
        body: "FVAP's FAQ, verbatim in substance: “If you are an active duty military member (or family member) stationed within your voting jurisdiction, you are not covered under UOCAVA and should follow your state's regular voting procedures. You can use either the National Mail Voter Registration Form (NVRF) or your state's voter registration form.” The same applies to spouses and dependents who currently live where they are registered to vote: they “are not covered by UOCAVA and should vote at the local polls, or request an absentee ballot according to state guidelines.” FVAP routes local voting through vote.gov, USAGov's official site, for state registration and in-person voting information. Being in uniform does not make every route a UOCAVA route — absent from your voting jurisdiction is the trigger.",
        links: [VOTEGOV, FVAP_MIL],
        source: "vote.gov — Voting as a military service member; FVAP",
      },
      {
        name: "Voting residence — your legal residence, not where you're stationed",
        body: "FVAP's voting-residence guidance, summarized at FVAP's own summary level. Your voting residence is the address in your state of legal residence (domicile) — “the true, fixed address that you consider your permanent home,” where you had a physical presence. It is the address that determines your precinct and which ballot you receive. For most military voters it is the last address you lived at in your state of legal residence — and, as USAGov's military page notes, the member's voting residence state is ordinarily the state listed on the Leave and Earnings Statement for state tax withholding. It is not your home of record (a personnel/pay entry, not a domicile), and it does not change automatically when you PCS. You may have only one legal voting residence at a time. You may choose to establish a new legal residence when transferred — but changing domicile is a deliberate legal act with tax and other consequences, it cannot be done by picking a favored state off a map, and once changed you generally cannot revert to the old residence without re-establishing presence there. FVAP's standing advice on any change: consult legal counsel / your military legal assistance office first. If you cannot remember your last physical address in your voting state, FVAP directs you to old records or IDs that establish it, and to your election office, which may be able to look up your previous voter registration record. The tax side of the residence question (state income tax, MSRRA mechanics) lives in Tax & Residency — this entry is the voting half only and deliberately does not restate tax law.",
        links: [FVAP_RES, FVAP_RES_LAW],
        source: "FVAP — Voting Residence (military voters; laws/guidance)",
      },
      {
        name: "Spouses and voting-age dependents — your own FPCA, and the MSRRA choice",
        body: "Military spouses and eligible family members vote absentee by exactly the member's process, with their own forms: each spouse/dependent fills out their own FPCA (vote.gov states it flatly: “Each family member must fill out their own FPCA form”), from their own voting residence, to their own election office. The spouse-specific rule is the residence election. Per FVAP's FAQ: “You are allowed to retain the same residence or domicile that your Service member has established, even if you have not physically been present at that address. If you choose, you may instead elect to retain your established residency or domicile (if different from your sponsor).” The guardrails FVAP prints with it: “You are not permitted to choose any state; you or your service member must have established residency in a state” — by acts such as voting, paying taxes, owning property, holding a driver's license, or registering a vehicle — and “residency requirements vary by state. Please consult legal counsel to discuss tax implications and other effects of the Military Spouse Residency Relief Act (MSRRA).” A spouse's residence is not automatically the member's on marriage; it is an election the spouse makes. MSRRA's tax and residency mechanics are covered in Tax & Residency — this entry covers only the voting-residence election FVAP describes and points there for the rest.",
        links: [FVAP_SPOUSES, FVAP_RES],
        source: "FVAP — Military Spouses and Families; Voting Residence",
      },
      {
        name: "Voting Assistance Officers and Installation Voting Assistance Offices",
        body: "Two layers of trained, designated helpers — both nonpartisan by rule, and neither ever sees or touches your marked ballot. Unit Voting Assistance Officer (VAO): a designated person in your unit (an additional-duty role) responsible for voting assistance — they stock and hand out the FPCA and FWAB, help you find your election office's address and your state's FVAP page, run unit voting-information pushes during the cycle, and are the first human to ask when a step is unclear. The installation program structure above them (senior VAOs / service voting action plans) exists to keep every unit's VAO trained and supplied during election cycles. Installation Voting Assistance Office (IVA Office): the installation-level office designated by the installation commander. Under the DoD program FVAP administers it serves military personnel, voting-age dependents, and other U.S. citizens with installation access, and it also serves as a voter registration agency under the National Voter Registration Act — meaning it provides registration assistance to anyone who comes in, integrated into installation in- and out-processing. FVAP publishes the directory of IVA offices. Above both: the Services' voting program managers and FVAP itself (1-800-438-VOTE (8683), vote@fvap.gov), plus U.S. embassies and consulates overseas, which stock FPCAs/FWABs and accept election mail for the pouch.",
        who: "Any voter, at any step — the VAO is the designed answer to “I don't know where to send this” and “my ballot never came.”",
        links: [FVAP_IVA, FVAP_HOME],
        source: "FVAP — Installation Voting Assistance Offices directory",
      },
    ],
  },
  {
    title: "First-Time Voters and Transitions",
    entries: [
      {
        name: "Never voted before — the first-time path",
        body: "There is no separate first-timer system: a new voter uses the same FPCA, the same election office, and the same deadlines as everyone in this section. What is actually new-voter-specific, at FVAP summary level: 1. You must be 18 on or before Election Day to vote in the federal election. Whether your state lets you register before turning 18 if you'll be 18 by the election is a state rule — routed to your state's FVAP page, never cataloged here. 2. Your first registration is the FPCA itself once you are away from your voting residence — at initial training, a first duty station, or any absence from home. If you are still at home in your voting jurisdiction (e.g., before shipping), you are a local voter: register via your state or vote.gov, and file your first FPCA when you leave. 3. Your voting residence as a new member is your legal residence — for most new recruits, where you lived before entering service, ordinarily reflected as the state on your LES. Your training-station or barracks address does not become your voting residence unless you deliberately change domicile, which FVAP advises doing only after legal counsel — almost never the right first-cycle move. 4. You can register before you ever leave: military recruiting offices are voter registration agencies under the DoD/NVRA structure FVAP administers, and your unit VAO and Installation Voting Assistance Office exist at every stop after that. 5. First-time-by-mail ID: federal law can require first-time voters who registered by mail to show or copy ID the first time they vote, with exemptions and state variations — your state's FVAP page and the instructions with your ballot state what applies to you; this section prints no state's ID rule.",
        who: "Recruits, junior members who have never registered, and dependents turning 18 — the first-time voter's on-ramp.",
        links: [VOTEGOV, FVAP_MIL],
        source: "vote.gov — Voting as a military service member; FVAP",
      },
      {
        name: "The first move is the trigger — new spouses and first PCS",
        body: "The two moments first-time absentee voters are actually created: a member's first PCS/deployment away from the voting residence, and a spouse's first move away from home to join the member. FVAP's system handles both with the same two actions at the moment of the move — file the FPCA from the new absence (“each time you move”) and, for spouses, make the residence election consciously instead of discovering it at tax time. The Installation Voting Assistance Office is built into in-processing at the new installation precisely so this step happens on arrival, not in October.",
        links: [FVAP_SPOUSES, FVAP_IVA],
        source: "FVAP — Military Spouses and Families; IVA Offices",
      },
      {
        name: "Separating or retiring — you leave UOCAVA's world",
        body: "UOCAVA's protections are for voters absent from their voting jurisdiction in service. When you separate or retire — or return to live in your voting residence — FVAP's materials direct you to re-register (or update your registration) as a civilian voter with your state, via your state's registration form, the National Mail Voter Registration Form, or vote.gov, so your registration, address, and delivery method match your new status before the next election. Filing a final civilian registration on transition prevents the classic failure: a ballot mailed to a barracks or APO address for a voter who now lives at home. The Transition & Jobs section's paperwork checklist carries the cross-link rather than duplicating it.",
        links: [VOTEGOV, FVAP_HOME],
        source: "vote.gov — Voting as a military service member; FVAP",
      },
    ],
  },
  {
    title: "Scope, Stated Honestly",
    entries: [
      {
        name: "What federal law guarantees — and what it doesn't",
        body: "UOCAVA (with the MOVE Act) is a federal-elections law: it guarantees covered voters registration and absentee-ballot access for elections for federal office, on the timelines in the Timelines tile. Whether the ballot a state sends you also carries state and local contests — governor, legislature, city council, ballot measures — depends on your state's law and your voter category, and FVAP is explicit that the voter's state pages are where that is answered. FVAP's FAQ: “The FPCA allows you to request an absentee ballot for all federal elections in the calendar year. Depending on your state, you may receive a ballot with local or state offices and initiatives as well (e.g., Governor, City Council).” The same routing applies to primaries: primary dates, and any affiliation step a state requires to vote in its primary, are state facts published on FVAP's state pages — this section prints none of them, and carries no partisan content of any kind: no candidates, no parties' platforms, no campaign material, ever.",
        links: [FVAP_HOME],
        source: "FVAP — state pages (federal + your state's ballot scope)",
      },
      {
        name: "FVAP's state tool is the deadline source — by design",
        body: "Every operative date and channel in military voting is state-set: registration deadlines, FPCA receipt deadlines, ballot-request deadlines, transmission dates for specific elections, return methods, postmark-vs-receipt rules, and ballot-tracking links. FVAP publishes all of it, per state, in two places — the state pages at FVAP.gov (select your state of voting residence) and the Voting Assistance Guide's Chapter 2 (the same data in document form, republished each cycle; the edition researched here is the 2026-27 Guide, current as of October 2025). This section is deliberately built as process + pointers: it teaches the FPCA/FWAB system once, correctly, and then routes every state fact to FVAP's own tool rather than freezing a 50-state table that would be wrong somewhere within one cycle. If anything in this section and FVAP's state page ever disagree, the state page wins — and that sentence ships in the app.",
        flag: "Voting Assistance Guide edition: state data was routed to the 2026-27 Guide (current as of October 2025) during this research. This section links FVAP.gov and the current Guide landing, not a frozen edition PDF, so the January refresh inherits the new edition automatically. Also flagged: which states let the FWAB double as registration/request, and which extend it to state/local contests, are printed on the SF-186's own instructions and FVAP's state pages — this section states the rule that states differ and routes; it does not reconstruct either list.",
        links: [FVAP_HOME, FVAP_GUIDE],
        source: "FVAP — state pages; Voting Assistance Guide",
      },
    ],
  },
];
