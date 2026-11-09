// Records & DD214 Center — static reference data transcribed from the
// researched records pack (~/workspace/military-app/records/records.md,
// researched November 8, 2026). Summaries, who/when statements, and links
// come only from the pack; every pack flag is preserved on its card.
//
// Fidelity rules baked into this data (the pack's standing rules):
// - NO processing-time estimates for NPRC or the boards anywhere — the
//   official sources publish none. (NARA's guidance to wait 90 days
//   before a follow-up is guidance, not an estimate, and ships as the
//   pack states it, on the eVetRecs card.)
// - NO per-branch board or personnel-command postal addresses — requests
//   route via the pack's NARA/records links and the addresses printed on
//   the DD Forms 149/293 themselves. The NPRC address/fax/phone NARA
//   publishes for records requests ships as the pack gives it.
// - The pack's documented exclusions stay excluded: no Discharge Appeal
//   Review Board entry, no NGB Form 22 / Guard records entry — neither
//   was verified on an official page in the pack's research session.
// - This center is orientation, not legal advice: no entry assesses any
//   individual's eligibility or predicts any board's decision.

export type RecordsLink = { label: string; url: string };

export type RecordsBullet = {
  /** Bold lead-in. */
  title?: string;
  text: string;
};

export type RecordsXref = {
  label: string;
  target: "benefits" | "transition" | "claims";
};

export type RecordsEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary. */
  details?: string[];
  bullets?: RecordsBullet[];
  flag?: string;
  /** Prominent warning box rendered inside the card. */
  callout?: string;
  links: RecordsLink[];
  /** In-app cross-reference button to another section. */
  xref?: RecordsXref;
};

export type RecordsGroup = {
  title: string;
  note?: string;
  entries: RecordsEntry[];
};

export const RECORDS_STANDING_NOTE =
  "Requesting your own records is a free government service. The National Archives provides them free to veterans, next of kin, and authorized representatives — companies advertising DD214 “research services” for a fee are selling a free service. This center explains how to get, replace, and ask to correct military records; it is not legal advice and promises no outcome on any correction or discharge upgrade. Only your service branch's boards can change a record, and only VA decides benefit eligibility. No processing times are stated anywhere in this section, because the official sources publish none.";

const VA_RECORDS: RecordsLink = {
  label: "VA.gov — Request your military service records (including DD214)",
  url: "https://www.va.gov/records/get-military-service-records/",
};
const NARA_RECORDS: RecordsLink = {
  label: "National Archives — Request military service records",
  url: "https://www.archives.gov/veterans/military-service-records",
};
const NARA_CORRECT: RecordsLink = {
  label: "National Archives — Correcting military service records",
  url: "https://www.archives.gov/veterans/military-service-records/correct-service-records.html",
};
const NARA_MEDALS: RecordsLink = {
  label: "National Archives — Military awards and decorations (replace medals)",
  url: "https://www.archives.gov/veterans/replace-medals",
};
const VA_UPGRADE_GUIDE: RecordsLink = {
  label: "VA.gov — Discharge upgrade instructions",
  url: "https://www.va.gov/discharge-upgrade-instructions/",
};
const MILCONNECT: RecordsLink = {
  label: "milConnect (sign-in required)",
  url: "https://milconnect.dmdc.osd.mil/milconnect/",
};
const DOD_RECORDS_ARTICLE: RecordsLink = {
  label: "DoD help article — Requesting records incl. DD214 (DPRIS)",
  url: "https://www.defense.gov/Contact/Help-Center/Article/article/2742452/",
};

export const RECORDS_GROUPS: RecordsGroup[] = [
  {
    title: "Get Your Records",
    entries: [
      {
        name: "Start Here — VA's Records Page (VA.gov)",
        kind: "VA.gov",
        summary:
          "VA's own guide to requesting a DD214 and other military service records, and the best single starting point. What you can get: your character of discharge (from your DD214 or other separation documents), duty stations and assignments, medals and decorations, qualifications/licenses/certificates, and medical and health records. One fact that saves people a trip: if you're submitting an application for VA benefits, VA will request your DD214 for you when it receives your application — you don't need to get it from the National Archives yourself first. The page routes you to the National Archives (online, mail, or fax) and to DoD's milConnect route (see the milConnect / DPRIS card below).",
        who: "Everyone — read this page before choosing a route below.",
        links: [VA_RECORDS],
      },
      {
        name: "Request Online — eVetRecs (National Archives)",
        kind: "National Archives",
        summary:
          "The National Archives' online request system, run through its National Personnel Records Center (NPRC) in St. Louis. Per NARA, most veterans and their next of kin can obtain free copies of the DD Form 214 and other service records this way. To use it: select “Make a new request,” then sign in with an identity-verified ID.me account — NARA may ask for a “live selfie” photo from your smartphone as an added verification step. You'll get an email confirming receipt, and you check status through the same system (“Check status of existing request”). Your request must include the basics needed to locate the record — the veteran's complete name as used in service, service number, Social Security number, branch, dates of service, and date and place of birth — and every request must be signed and dated by the veteran or next of kin. Recent service and medical records are not posted online for browsing; this is a request system, not a download library.",
        who: "Veterans and next of kin of deceased veterans who want the standard, free route for a DD214, an Official Military Personnel File (OMPF), or medical records.",
        flag: "No standard processing time is promised. NARA states response times vary with complexity, record availability, and workload (it receives roughly 4,000–5,000 requests a day) and asks requesters not to send a follow-up before 90 days have elapsed, because duplicates cause further delays. Urgent requests (for example, an upcoming surgery or a funeral) can be marked as emergencies in the system.",
        links: [
          { label: "eVetRecs — Make a request online", url: "https://vetrecs.archives.gov/" },
          NARA_RECORDS,
        ],
      },
      {
        name: "Request by Mail or Fax — Standard Form 180 (National Archives)",
        kind: "National Archives",
        summary:
          "The paper route: fill out Standard Form 180 (SF-180), Request Pertaining to Military Records, sign and date it, and mail or fax it. NARA recommends the SF-180 because it captures everything needed to locate a record — but read the form's own location chart before sending: not all records are stored at the NPRC. The chart on the form routes your request by branch, separation date, and record type. The NPRC's own address and fax, from NARA: National Personnel Records Center, Military Personnel Records, 1 Archives Drive, St. Louis, MO 63138 — fax 314-801-9195; customer service line 314-801-0800. Two NARA rules that protect you: never send original documents (anything you submit will not be returned — send copies and keep your originals), and records requests cannot be accepted by email — a written, signed, dated request is legally required.",
        who: "Anyone who can't use eVetRecs, and next of kin submitting paper proof of death. A separate SF-180 is submitted for each individual whose records are requested.",
        links: [NARA_RECORDS],
      },
      {
        name: "The DoD Route — milConnect / DPRIS",
        kind: "DoD",
        summary:
          "If you separated recently enough, your record may still be in DoD's electronic system, which is faster than the Archives route. VA states the branch cutoff dates for requesting your records from DoD through milConnect: Air Force — discharged after October 1, 2004; Army — after October 1, 2002; Marine Corps — after January 1, 1999; Navy — after January 1, 1995. Inside milConnect, the records tool is DPRIS (Defense Personnel Records Information Retrieval System): it holds scanned documents from your Official Military Personnel File, including the DD214. DoD's own help article adds that this route isn't only for veterans — a member of the Army, Navy, Marine Corps, or Air Force who is serving (active duty, Reserve, or Guard) or retired can also use DPRIS to request and receive scanned OMPF documents. You need a milConnect account to sign in.",
        who: "Recently separated veterans first — try this before eVetRecs if your discharge falls after your branch's date. If your documents aren't scanned into DPRIS yet, DoD routes you to the National Archives instead.",
        links: [MILCONNECT, DOD_RECORDS_ARTICLE],
      },
      {
        name: "Next of Kin — Requesting a Deceased Veteran's Records",
        kind: "VA.gov",
        summary:
          "If the veteran has died, their next of kin can request the records from the National Archives online, by mail, or by fax. VA's definition of next of kin for this purpose: the veteran's surviving spouse who has not remarried, parent, child, or sibling. You must provide proof of death — a copy of a death certificate or other public record of the death, or a letter from a funeral home. VA lists two more routes besides NARA: visiting the NPRC in person, contacting your state or county veterans agency, or hiring an independent researcher. One burial-specific shortcut from VA: if you're a family member planning a burial in a VA national cemetery and you don't have the records, the National Cemetery Scheduling Office will try to locate the records it needs to determine eligibility — you don't have to request the service records yourself first.",
        who: "Family members after a veteran's death — for benefits, burial, medals (see Replacements & Fixes), or family history within the access rules.",
        links: [VA_RECORDS],
      },
      {
        name: "The 62-Year Rule — When Records Become Public",
        kind: "National Archives",
        summary:
          "Military personnel records are not public while they're recent. NARA's rule: records open to the public 62 years after the service member's separation (a rolling date — current year minus 62). Inside 62 years, access is restricted: the veteran, next of kin, and authorized representatives get the record; the general public can receive only limited information under FOIA/Privacy Act rules, and full release needs the veteran's or next of kin's authorization. At 62 years the file becomes archival and anyone may order it — but archival copies are not free: NARA's published schedule is a flat $25 for a routine OMPF of 5 pages or fewer and $70 for 6 pages or more (most files), and archival requests require buying the complete file. By contrast, for separations less than 62 years ago, NARA states there is generally no charge for basic personnel and medical record information provided to veterans, next of kin, and authorized representatives.",
        who: "Anyone requesting an older relative's records, and anyone quoted a fee — check which side of the 62-year line the record is on before paying anything.",
        links: [NARA_RECORDS],
      },
      {
        name: "Service-Specific Exceptions — Marines & Coast Guard",
        kind: "VA.gov",
        summary:
          "Two exceptions VA calls out on its records page: if you served in the Marines from 1998 to the present, or the Coast Guard from 2008 to the present, contact your personnel command for your records. You can still file the request with the National Archives, and NARA will forward it to your personnel command — but going to the command is the direct route VA names. More broadly, where any record actually sits depends on branch, separation date, and record type; that's what the location table on the SF-180 and NARA's “Locations of Military Service Records” listing are for.",
        who: "Recent Marines and Coast Guardsmen whose records aren't appearing through the standard routes.",
        links: [VA_RECORDS],
      },
      {
        name: "If Your Records Were in the 1973 NPRC Fire",
        kind: "National Archives",
        summary:
          "On July 12, 1973, a fire at the National Personnel Records Center damaged or destroyed 16–18 million records, mainly Army and Air Force files for personnel discharged from 1912 to 1964. If your (or your relative's) file was in that range, a request can come back incomplete — that is a known archival reality, not a mistake in your request. NARA asks fire-affected requesters to add three extra details that help staff work from other sources: place of discharge, last unit of assignment, and place of entry into service, on top of the standard identifying information.",
        who: "Army and Air Force veterans discharged 1912–1964 and their families.",
        flag: "NARA's pages reviewed for this section describe the loss and the extra information to supply; how much of any individual file can be rebuilt from alternate sources varies by case and is not promised.",
        links: [NARA_RECORDS],
      },
    ],
  },
  {
    title: "Replacements & Fixes",
    entries: [
      {
        name: "Replacing a Lost DD214",
        kind: "National Archives",
        summary:
          "There is no separate “replacement” process — a lost DD214 is replaced by requesting a copy of the one already on file, using exactly the routes in Get Your Records above: milConnect/DPRIS if your separation is recent, eVetRecs, or the SF-180. The request is free for veterans and next of kin (see the 62-year rule card).",
        callout:
          "⚠ NARA's warning: some companies advertise DD Form 214 research services and charge a fee for what NARA provides as a free service. You never need to pay a website to order your own DD214.",
        who: "Any veteran who can't find their copy — get it replaced before the day a lender, employer, or VA office needs it (see Why It Matters).",
        links: [NARA_RECORDS],
      },
      {
        name: "DD Form 215 — the Correction Sheet, and Who Issues It Now",
        kind: "National Archives",
        summary:
          "A DD Form 215 (Correction to DD Form 214) is the official correction sheet that belongs with a DD214: instead of reissuing the original form, the correction is documented on the 215 and the two are kept and shown together. The routing changed, and NARA's current page is explicit — corrections do not go to NARA.",
        callout:
          "Because DoD guidance (DoDI 1336.01) now requires the DD Form 215 to be created and transmitted electronically, the National Archives will no longer create a DD Form 215. If your record is not archival (separated less than 62 years ago), request the correction from your service branch's personnel command (for example, Army Human Resources Command or Navy Personnel Command — NARA's page carries the per-branch command table). If the record is archival (62+ years), apply to your branch's review board. If what you want changed is your character of service, that always goes to your branch's review board (see Corrections & Discharge Upgrades), whatever the record's age. Do not submit these forms to the National Archives.",
        who: "Anyone whose DD214 contains an error — a misspelled name, wrong dates, a missing award — and anyone who was told to “ask the Archives for a DD215.” That advice is out of date.",
        links: [NARA_CORRECT],
      },
      {
        name: "Replacement Medals & Awards — the Branch Issues Them",
        kind: "National Archives",
        summary:
          "Start with the fact NARA leads with: the NPRC does not issue service medals — each military service department does. What NPRC does, for Army and Air Force personnel, is verify from the record which awards you're entitled to and forward the verified request to the service department, which issues the medals. For the veteran, NARA states the services generally work replacement medal requests at no cost — and a family member can make the request with the veteran's signed authorization. You can start online (the medals request runs through the same eVetRecs system — “Request Medals Online” on NARA's page) or in writing to the NPRC at 1 Archives Drive, St. Louis, MO 63138, following the per-branch instructions on NARA's medals page; Coast Guard requests go to the Coast Guard Personnel Service Center as that page directs. Same rule as everywhere at NPRC: send copies, never original documents — submissions are not returned. A medal can only be issued if the entitlement is in the official record; if you believe an award was earned but never recorded, that's a record correction (see Corrections & Discharge Upgrades), not a replacement request.",
        who: "Veterans replacing lost or never-issued medals, ribbons, and decorations — and family members acting with the veteran's signed authorization.",
        links: [NARA_MEDALS],
      },
      {
        name: "Medals for Next of Kin — the Rules Split by Branch and by the 62-Year Line",
        kind: "National Archives",
        summary:
          "Next-of-kin medal requests follow NARA's branch definitions, which differ: for the Army, next of kin means the surviving spouse, eldest child, father or mother, eldest sibling, or eldest grandchild; for the Air Force, Space Force, Navy, Marine Corps, and Coast Guard, it's the un-remarried widow or widower, son, daughter, father, mother, brother, or sister. Then the 62-year rule splits the process: if the veteran separated less than 62 years ago, next-of-kin requests for all branches are accepted at no cost through the NPRC. If the veteran separated 62 or more years ago, Army, Navy, and Marine Corps next-of-kin requests are still accepted at no cost — but the Air Force, Coast Guard, and Space Force do not accept next-of-kin archival requests; in those cases the family may purchase a copy of the veteran's OMPF to determine the awards due and obtain the medals from a commercial source.",
        who: "Families of deceased veterans — especially families of Air Force, Coast Guard, and Space Force veterans who separated generations ago, where the free government route closes.",
        links: [NARA_MEDALS],
      },
    ],
  },
  {
    title: "Corrections & Discharge Upgrades",
    note: "Overview only. Two different boards, two different forms, two different clocks. This group is an orientation map built from the National Archives' correcting-records page and VA's discharge-upgrade guide — it is not legal advice, and no card here predicts or promises what any board will decide. Every application is judged on its own record and evidence.",
    entries: [
      {
        name: "Start With VA's Discharge Upgrade Guide (VA.gov)",
        kind: "VA.gov",
        summary:
          "Before filing anything, VA's official guide walks you through your specific situation — branch, discharge type and date, and circumstances — and points you to the correct board and form. It exists because the two routes in the next two cards look similar and are easy to confuse, and filing with the wrong board wastes the one resource these processes consume most: time. Use the guide to confirm your route, then file with your branch using the form's own address (see the which-board card).",
        who: "Anyone considering asking for a discharge change or a record correction — this is step one.",
        flag: "VA's page is a script-driven tool; its step-by-step questions render in a browser on VA.gov. The board facts it leads to (the 15-year rule, the 3-year guideline, which form) are independently stated on the National Archives page linked in the next two cards.",
        links: [VA_UPGRADE_GUIDE],
      },
      {
        name: "Discharge Review Board — DD Form 293 (Within 15 Years)",
        kind: "National Archives",
        summary:
          "Each service maintains a Discharge Review Board (DRB) with authority to change, correct, or modify a discharge or dismissal — the characterization and the record of the discharge itself. The hard limit, stated on NARA's page: if the discharge was more than 15 years ago, the DRB is closed to you — you must petition the Board for Correction of Military Records on DD Form 149 instead (next card). The board's limits are just as important: it cannot review a discharge or dismissal issued by sentence of a general court-martial, and it has no authority to address medical discharges. Who may apply: the veteran — or, if the veteran is deceased or incompetent, the surviving spouse, next of kin, or legal representative. A review is conducted on the written record and, if you request one, by a hearing before the board. Apply on DD Form 293, Application for the Review of Discharge or Dismissal from the Armed Forces of the United States, to your own branch's board — the form (from the DoD Forms Management Program) and NARA's page carry the per-branch addresses; questions about a review go to the discharge review board address listed on the DD Form 293 itself.",
        who: "Anyone asking for their discharge characterization or reason to be reviewed, inside 15 years of the discharge date.",
        flag: "The 15 years runs from the discharge — if you are anywhere near that line, treat the date as urgent and confirm it with the board.",
        links: [NARA_CORRECT],
      },
      {
        name: "Board for Correction of Military Records — DD Form 149 (Error or Injustice, Any Record)",
        kind: "National Archives",
        summary:
          "The broader board. The secretary of each military department, acting through a Board for Correction of Military Records (the Navy and Marine Corps board is styled the Board for Correction of Naval Records), has authority to change any military record when necessary to correct an error or remove an injustice — not just discharges: names, dates, awards, and other entries are all within its reach, and a correction board may consider applications including a review of a discharge issued by courts martial, the cases the DRB cannot touch. It is also the only board route when a discharge is more than 15 years old. The timing rule is different from the DRB's: there is no 15-year cutoff, but the veteran, survivor, or legal representative generally must file within three years after discovering the alleged error or injustice. That guideline has an official safety valve: the board may excuse a late filing if it finds it would be in the interest of justice — and the burden is on the applicant to explain the delay and why considering the case anyway serves justice. What you must show: to justify a correction, you must demonstrate to the board's satisfaction that the entry or omission was actually in error or unjust — NARA advises including all available evidence, such as signed witness statements or a written brief of arguments supporting the correction. Apply on DD Form 149, Application for Correction of Military Records, to your branch's board (addresses on the form and on NARA's page) — not to the National Archives.",
        who: "Anyone seeking correction of any record error or injustice; anyone whose discharge is over 15 years old; anyone whose case involves a court-martial discharge.",
        flag: "“Generally within three years of discovery” is a guideline with an interest-of-justice exception, not a hard wall like the DRB's 15 years — but don't rely on the exception; file as soon as you discover the problem.",
        links: [NARA_CORRECT],
      },
      {
        name: "Which Board, Which Form — and What Neither Board Is",
        kind: "National Archives",
        summary:
          "The one-paragraph map: discharge characterization/reason, within 15 years, not a general court-martial sentence → DD Form 293 to your branch's Discharge Review Board. Anything else — an error anywhere in the record, a discharge over 15 years old, a court-martial discharge, or a case a DRB has already decided → DD Form 149 to your branch's Board for Correction of Military/Naval Records. Both forms are free from the DoD Forms Management Program (also available at VA offices and from veterans organizations, per NARA).",
        details: [
          "One more boundary, from NARA's page: discharges awarded after a continuous unauthorized absence of more than 180 days make a person ineligible for VA benefits regardless of discharge-review-board action, unless VA finds compelling circumstances — correction boards may also consider such cases. No board is required to grant any request, and timelines for board decisions are not stated on the official pages used here — treat any processing-time figure from a non-official site as unverified.",
        ],
        callout:
          "Boards change the RECORD. VA separately decides BENEFITS. These are service-branch boards — they change the military record; VA is a separate decision-maker that decides benefit eligibility on the record as it stands or as corrected, and a board application does not itself file or decide any VA benefit.",
        who: "Anyone choosing between the two forms — pin this map down before gathering evidence.",
        links: [NARA_CORRECT],
      },
      {
        name: "Free Help Exists for Corrections & Upgrades",
        kind: "Concept level",
        summary:
          "You do not have to build a board application alone, and you should be skeptical of anyone charging large upfront fees to “guarantee” an upgrade — no one can guarantee a board outcome. The free routes: accredited VSO representatives help with VA-facing questions at no charge (this app's VA Claims & VSO Guide covers finding and verifying one — VA's “always free” rule applies to VSO help on VA claims); law school veterans clinics and pro bono veterans legal programs take discharge-upgrade and record-correction cases at no cost to the veteran; and VA's upgrade guide (first card in this group) is itself the free official starting point for choosing the right board.",
        who: "Anyone preparing a DD Form 293 or 149 — get a second set of trained eyes on the evidence before you file, while the clocks on the board cards are running.",
        flag: "Verified at concept level: VSO help and VA's guide are sourced from VA's official pages (see the Claims & VSO section). The existence of free law-school veterans clinics and pro bono discharge-upgrade programs is widely documented, but no single official (.gov) directory of them was verified — find clinics through your state bar, a local law school, or a VSO referral, and verify any individual helper before sharing records.",
        links: [],
        xref: { label: "Open the VA Claims & VSO Guide", target: "claims" },
      },
    ],
  },
  {
    title: "Why It Matters",
    entries: [
      {
        name: "What Your DD214 Unlocks",
        kind: "VA.gov",
        summary:
          "The DD214 (Certificate of Release or Discharge from Active Duty) is the key document of a veteran's paper life, because it is the official proof of the two facts almost every benefit turns on: that you served, and under what character of service. VA's records page lists what flows from it — your character of discharge, duty stations and assignments, medals and decorations, qualifications — and VA requests it automatically when you apply for VA benefits (see the first card in this section). The same document is the service proof behind the VA home loan Certificate of Eligibility (next card), is the separation document employers and federal hiring ask for to verify veteran status and preference, and is what a family needs when arranging burial in a VA national cemetery (where, per the next-of-kin card, the scheduling office will help locate records if the family doesn't have them). Every one of those moments tends to arrive with a deadline attached — which is why the routes in Get Your Records are worth using before you need the document.",
        who: "Every veteran, permanently. If you take one action from this center: make sure you know where your DD214 is, and that the copy is the full one (see the which-copy card).",
        links: [VA_RECORDS],
      },
      {
        name: "Home Loan Certificate of Eligibility — Cross-Reference to Benefits",
        kind: "Cross-reference",
        summary:
          "For a VA-backed home loan, a veteran's proof of service is the DD214 showing character of service and dates — it's the document VA's Certificate of Eligibility (COE) process is built on, whether you request the COE yourself on VA.gov or your lender pulls it. Eligibility rules, entitlement, and how to request a COE are covered in this app's Benefits section (the VA Home Loan entry) — not duplicated here. This center's part is upstream: no DD214, or the wrong copy, is the most common paper reason a COE request stalls — fix it with Get Your Records first.",
        flag: "The COE page address below is the one VA's home-loan guidance publishes and secondary VA sources cite; if it has moved, route through the Benefits section's verified VA Home Loan entry.",
        links: [
          {
            label: "VA.gov — How to request a Certificate of Eligibility (COE)",
            url: "https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/",
          },
        ],
        xref: { label: "Open Benefits — VA Home Loan", target: "benefits" },
      },
      {
        name: "Which Copy to Keep — Member-4 and the Full Record",
        kind: "VA.gov",
        summary:
          "Not every copy of a DD214 shows everything. On the long-used numbered-copy editions, the member received multiple copies, and they are not identical: the Member-4 copy is the full (“long”) copy — it shows the character of service and the narrative reason for separation and the separation/reentry codes — while the Member-1 copy omits some of those separation details. That's why benefits offices, lenders, and hiring officials ask for Member-4 by name: it's the copy that proves both service and character. Two practical rules follow: when you request a copy (Get Your Records), you are requesting your record as filed — keep whatever full copy you receive with your permanent papers; and when an office asks for a copy, a copy is acceptable — never surrender your only original.",
        who: "Anyone comparing copies, scanning their papers, or being told the copy they submitted “doesn't show enough.”",
        flag: "Edition note: DoD's current DD214 instruction (DoDI 1336.01, the same instruction behind the electronic DD Form 215) modernized the form's copy structure on newer separations (copies styled “Member” and “Service” rather than numbered) — if your DD214 doesn't say “Member-4” anywhere, check which of your copies shows the character of service and narrative reason, and keep that one as your full copy. The concept that matters across editions: keep the copy that shows character of service and reason for separation.",
        links: [VA_RECORDS],
      },
      {
        name: "Character of Discharge — the Neutral Map",
        kind: "VA.gov",
        summary:
          "The character printed on the DD214 is the service's characterization of that period of service. The categories, in descending order as they appear across official materials: Honorable; General (Under Honorable Conditions); Other Than Honorable; Bad Conduct and Dishonorable (the punitive discharges, which come from courts-martial); and Uncharacterized / Entry-Level Separation, used for very early separations. Why it matters, stated neutrally: VA benefit eligibility generally turns on whether service ended under conditions other than dishonorable, and VA — not the service, and not this app — applies that standard to an individual's record when benefits are applied for. VA can also make its own character-of-discharge determination for VA purposes when you apply for a benefit, which is a separate question from changing the discharge itself: only the branch boards in Corrections & Discharge Upgrades can change what the DD214 says. Nothing in this card assesses any individual's eligibility or chances — those calls belong to VA and, for the record itself, to the boards, ideally with the free help described in that group.",
        who: "Anyone reading a DD214 for the first time, or trying to understand why the same word matters differently to a lender, an employer, and VA.",
        links: [VA_UPGRADE_GUIDE],
      },
    ],
  },
  {
    title: "Records Hygiene While Serving",
    entries: [
      {
        name: "Verify Your Record Before You Separate",
        kind: "While serving",
        summary:
          "The cheapest records problem is the one caught while you're still in uniform. Two checkpoints: while serving, review your Official Military Personnel File in your branch's system (next card) — evaluations, awards, training, and orders that never made it into the file won't be in the file a records request returns later; if something is missing or wrong, your unit's personnel/admin office is the fix route while the source documents are still at hand. At separation, read the DD214 worksheet you're given to review before it's finalized — service dates, awards, character, and reason — because correcting it afterward runs through the boards and clocks in Corrections & Discharge Upgrades instead of a pen in the out-processing office. The Transition & Jobs section of this app covers the full separation checklist; this is its records page.",
        who: "Anyone within a year of separation — and anyone reenlisting, since each period of service generates its own record.",
        links: [],
        xref: { label: "Open Transition & Jobs", target: "transition" },
      },
      {
        name: "Your Branch Record System — Where Your File Lives While Serving",
        kind: "DoD",
        summary:
          "While serving and after, the spine of your record is the Official Military Personnel File (OMPF). DoD's help article confirms the cross-branch route: members of the Army, Navy, Marine Corps, and Air Force — active duty, Reserve, Guard, and retired — can use milConnect's DPRIS to request and receive scanned OMPF documents, including after separation. Alongside it, each branch runs its own personnel-record system where serving members view and verify their file — named at overview level: Army — iPERMS (the Army's electronic personnel records system, under Human Resources Command); Navy — OMPF access through MyNavy HR / BUPERS Online; Marine Corps — OMPF through Marine Online (MOL); Coast Guard — iPERMS / milConnect; Air Force & Space Force — personnel record access through the Air Force Personnel Center's systems.",
        who: "Serving members checking their file (previous card) and recently separated veterans whose records are still in DoD's electronic systems.",
        flag: "Branch system names and portals change more often than the underlying record does — the names above are the current systems as documented in branch and DoD materials reviewed for this section, but confirm the live portal with your servicing personnel office rather than relying on any saved bookmark, and treat DPRIS (the milConnect card in Get Your Records) as the stable cross-branch fallback.",
        links: [MILCONNECT, DOD_RECORDS_ARTICLE],
      },
      {
        name: "Keep Your Own Copies — Forever",
        kind: "National Archives",
        summary:
          "Government records can be requested again (Get Your Records), but your own complete set is faster than every route in this center. Keep, in paper and in a scanned copy stored separately: your DD214 (full copy — see the which-copy card), any DD Form 215 issued with it, final orders, award certificates and citations, and your last evaluation. Tell a family member where the set lives — next of kin can request records after your death, but knowing the documents exist and where they are removes weeks from that process. And repeat NARA's standing rule one last time, because it protects originals: when any agency asks you to submit documents with a request, send copies — documents submitted to NPRC are not returned.",
        who: "Every service member at separation, and every veteran, once, permanently.",
        links: [NARA_RECORDS],
      },
    ],
  },
];
