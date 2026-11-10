// Honors & Burial — transcribed from the researched pack
// (~/workspace/military-app/honors/honors.md, researched Nov 9,
// 2026). The pack is the content source of truth: §§1–7 as 16
// entries. TONE DISCIPLINE (binding): factual and quiet — the app
// routes and states eligibility; it adds no sentimentality and no
// editorial framing. VA figures print EXACTLY as dated in the pack
// (VA page updated Oct 7, 2026). Funeral honors are requested via
// the FUNERAL DIRECTOR (10 U.S.C. § 1491 floor). Arlington prints
// per 32 CFR Part 553 with ANC's own framing — ANC publishes NO
// standing wait figure for cremated remains, and NO secondary
// month-count appears anywhere in this section (pack flag F-1).
// Placement: members and spouses in full; future members see a
// locked card only.

import type { PackSection } from "./seven";

export const HONORS_SECTION: PackSection = {
  view: "honors",
  title: "Honors & Burial",
  headSub:
    "A factual routing and eligibility reference: VA burial and memorial benefits, military funeral honors, Arlington National Cemetery, state veterans cemeteries, and the service casualty-assistance system.",
  intro:
    "Three different systems appear in this section, and families routinely confuse them. (1) VA (National Cemetery Administration) runs the national cemeteries (158 national cemeteries in 45 states and Puerto Rico, per cem.va.gov) and all VA memorial products — headstones, markers, medallions, burial flags, Presidential Memorial Certificates — plus the burial allowance. (2) DoD and the services provide military funeral honors and the casualty-assistance officers who guide families. VA does not provide honors; DoD does not run the cemeteries (Arlington excepted). (3) Arlington National Cemetery is run by the Department of the Army, not VA, under its own regulation (32 CFR Part 553) and its own, stricter eligibility — a VA national-cemetery eligibility does not carry over to Arlington.",
  standing:
    "First phone numbers (official): National Cemetery Scheduling Office 800-535-1117 (scheduling a burial in a VA national cemetery); VA main 800-827-1000; Arlington customer service center 877-907-8585. This section contains no legal or estate advice.",
  tiles: [
    {
      key: "va-burial",
      label: "VA Burial Benefits",
      tileSub: "Entries 2.1–2.6 · what burial includes, eligibility, the allowance, headstones, flag, PMC",
      intro:
        "The VA half of the section, in VA's own published terms: what a national-cemetery burial includes at no cost, who is eligible, the burial allowance with its dated amounts, and the memorial products and their forms.",
      entries: [
        {
          id: "honors-va-includes",
          name: "What burial in a VA national cemetery includes — at no cost to the family",
          summary:
            "National cemetery burial search terms: what does VA burial include, gravesite headstone perpetual care. For an eligible person, burial in a VA national cemetery includes, at no cost to the family: a gravesite in any VA national cemetery with available space, opening and closing of the grave, a burial liner, perpetual care, a government headstone or marker, a burial flag, and a Presidential Memorial Certificate.",
          who: "Eligible Veterans, and spouses/dependents buried with them — a spouse or dependent may be buried even if they die before the Veteran.",
          body: [
            "Cremated remains are buried or inurned in national cemeteries in the same manner and with the same honors as casketed remains (VA, Memorial Items). Funeral and cremation arrangements themselves are made with a funeral provider and are the family's expense — VA provides the cemetery benefits above, not the funeral (NCA). For a spouse or dependent buried in a national cemetery: burial with the Veteran, perpetual care, and the spouse's or dependent's name and birth/death dates inscribed on the Veteran's headstone, at no cost.",
            "Scheduling route: the family or funeral home calls the National Cemetery Scheduling Office at 800-535-1117, or faxes discharge documents to 866-900-6417 / emails NCA.Scheduling@va.gov, then follows up by phone (NCA scheduling guidance).",
          ],
          flags: ["F-6: cem.va.gov state pages variously render 157–158 national cemeteries (new cemeteries open over time). The count in this section is NCA's current “158 national cemeteries in 45 states and Puerto Rico” — not a permanent fact."],
          links: [{ label: "VA — Burial and Memorial Benefits (NCA)", url: "https://www.cem.va.gov/burial-memorial-benefits/" }],
          source: "VA National Cemetery Administration (cem.va.gov)",
        },
        {
          id: "honors-va-eligibility",
          name: "Who is eligible for burial in a VA national cemetery",
          summary:
            "Burial eligibility search terms: who can be buried in a national cemetery, spouse eligibility, not eligible. VA states eligibility as one of these must be true: the person is a Veteran who didn't receive a dishonorable discharge; or a service member who died while on active duty, active duty for training, or inactive duty for training; or the spouse or surviving spouse of a Veteran — including a surviving spouse who remarried after the Veteran's death; or the minor child of a Veteran, or in some cases the unmarried adult dependent child of a Veteran.",
          who: "Any family confirming eligibility — and any Veteran using the Pre-Need tile before the need arises.",
          body: [
            "The minimum-service frame (NCA): burial is open to members of the armed forces who met a minimum active duty service requirement and were discharged under conditions other than dishonorable. The adult-dependent-child case as VA publishes it: an unmarried adult child who became permanently disabled and incapable of self-support before age 21, or 23 if a full-time student (38 CFR 38.620).",
            "Specific groups VA's page addresses individually (each with its own conditions; this section routes, it does not compress these into the bullets above): National Guard and Reserve members; ROTC members who died under honorable conditions in training contexts; NOAA and Public Health Service commissioned officers; WWII Merchant Mariners; Philippine Armed Forces veterans; U.S. citizens who served in allied forces in wartime; Hmong veterans under the Hmong Veterans' Naturalization Act framework.",
            "Not eligible (VA's page, printed as VA prints it): a former spouse whose marriage to the Veteran ended by annulment or divorce (unless independently a Veteran); persons ordered to report for induction who never entered service; Veterans separated under dishonorable conditions (cases involving undesirable/bad-conduct/other-than-honorable discharges or multiple discharges of varying character are decided by a VA regional office); Veterans convicted of a federal or state capital crime — who also lose the PMC, flag, headstone, and marker; Veterans convicted of a Tier III sex offense with a life-minimum sentence; Veterans convicted of subversive activities after Sept 1, 1959 (unless pardoned by the President).",
          ],
          flags: [],
          links: [{ label: "VA — Eligibility for burial in a VA national cemetery", url: "https://www.va.gov/burials-memorials/eligibility/" }],
          source: "VA — Eligibility for burial in a VA national cemetery",
        },
        {
          id: "honors-allowance",
          name: "The burial allowance — VA's published amounts, by date of death (page updated Oct 7, 2026)",
          summary:
            "Burial allowance search terms: VA burial allowance amount, $2,000 service-connected, $1,032 plot, headstone allowance $420. The burial allowance is a partial reimbursement of burial, funeral, and plot/interment costs the claimant paid and will not be reimbursed for by another organization. The rate is set by the Veteran's date of death, not the date of application. Amounts are VA's published maximums — VA updates the non-service-connected amounts each October 1; confirm the current table on va.gov before filing.",
          who: "Whoever paid for the burial/funeral of an eligible Veteran — this is a reimbursement claim, filed after the fact. Who may claim: the surviving spouse; a surviving partner from a legal union; a surviving child; a parent; the executor/administrator of the estate; a family member or friend who paid; or a funeral home/cemetery still owed costs.",
          body: [],
          tables: [
            {
              caption: "VA burial allowance — per va.gov (page last updated Oct 7, 2026)",
              columns: ["Situation (date of death controls)", "VA maximum"],
              rows: [
                ["Service-connected death, on or after Sep 11, 2001", "$2,000 burial allowance (plot included — no separate plot payment on top)"],
                ["Service-connected death, before Sep 11, 2001", "$1,500 burial allowance"],
                ["Non-service-connected death, on or after Oct 1, 2026", "$1,032 burial allowance plus $1,032 plot/interment allowance"],
                ["Non-service-connected death, Oct 1, 2025 – Sep 30, 2026", "$1,002 burial allowance plus $1,002 plot/interment allowance"],
                ["Non-service-connected death, Oct 1, 2024 – Sep 30, 2025", "$978 burial allowance plus $978 plot/interment allowance"],
                ["Headstone/marker allowance (buying privately instead of a government headstone) — deaths on or after Oct 1, 2026", "$420"],
                ["Headstone/marker allowance — deaths Oct 1, 2025 – Sep 30, 2026", "$441"],
              ],
            },
          ],
          bullets: [
            { title: "Qualifying circumstances", text: "The Veteran had no dishonorable discharge and one of VA's qualifying circumstances applies (died of a service-connected disability; died while receiving VA compensation or pension or while eligible for it but receiving military retired pay instead; died with a compensation/pension claim pending and entitled before death; died under VA care or traveling under VA authorization)." },
            { title: "No allowance", text: "Is paid for a person who died on active duty, while a Member of Congress, or while serving a federal prison sentence (VA's page) — active-duty deaths are handled through the service's own mortuary and casualty system (the Casualty Assistance tile)." },
            { title: "Transportation", text: "VA reimburses some or all costs of transporting the remains for burial in a national cemetery (receipts required)." },
            { title: "How to apply", text: "Online at va.gov, or VA Form 21P-530EZ by mail to the Pension Intake Center, PO Box 5365, Janesville, WI 53547-5365. Supporting documents: death certificate (with cause of death) and DD214/separation documents recommended." },
            { title: "Time limits", text: "Service-connected — no time limit. Non-service-connected — within 2 years after burial or cremation, with two published exceptions where there is no limit (death under VA care; claims for plot/interment or transportation allowances only)." },
            { title: "Surviving-spouse automatic payment", text: "A surviving spouse listed as the Veteran's spouse on the Veteran's VA profile does not need to file a claim — VA automatically pays a set amount toward plot, interment, or transportation when it receives notice of the death (VA's page)." },
          ],
          flags: [
            "F-2: VA's published table lists $441 for deaths Oct 1, 2025 – Sep 30, 2026 and $420 for deaths on or after Oct 1, 2026 — a year-over-year decrease, printed as VA publishes it, not “corrected.” Flagged for re-verification at each January/October refresh.",
          ],
          links: [{ label: "VA — Veterans burial allowance and transportation benefits", url: "https://www.va.gov/burials-memorials/veterans-burial-allowance/" }],
          source: "VA — burial allowance page (last updated Oct 7, 2026; read Nov 9, 2026)",
        },
        {
          id: "honors-headstones",
          name: "Headstones, markers, and medallions — VA Forms 40-1330 / 40-1330M",
          summary:
            "Headstone search terms: government headstone private cemetery, VA Form 40-1330, medallion 40-1330M. Private cemetery: an eligible Veteran (only the Veteran — a spouse or dependent child buried in a private cemetery is not eligible for a government headstone/marker/medallion in their own right; their name may be added as an inscription on the Veteran's marker) may receive a government headstone or marker for an unmarked grave, furnished and delivered at no cost anywhere in the world.",
          who: "Families of Veterans buried outside a national cemetery, and any unmarked Veteran grave (there is no time-of-death recency requirement — VA furnishes for the unmarked grave of any eligible deceased Veteran).",
          body: [
            "National/state/military cemetery burial: the cemetery orders the government headstone or marker as part of the burial — the family does not apply separately. Private-cemetery route: VA Form 40-1330 (Claim for Standard Government Headstone or Marker), with a copy of discharge documents, submitted online via QuickSubmit (AccessVA), by mail to the NCA FP Evidence Intake Center, PO Box 5237, Janesville, WI 53547, or by fax 800-455-7143.",
            "Medallion (instead of a headstone, for a grave already marked with a privately purchased headstone): VA Form 40-1330M. The medallion is furnished by VA and affixed to the existing private headstone; VA does not pay the cemetery's setting/installation fees for headstones, markers, or medallions in private cemeteries — VA's page states the headstone itself is free but cemetery fees may apply. Inscriptions: only NCA inscribes government headstones/markers; private contractors may not inscribe them. Replacement to add a spouse/dependent inscription for a Veteran who died on or after Oct 1, 2019 uses VA Form 40-1330; removal/installation fees for the replacement are the family's.",
          ],
          flags: [],
          links: [{ label: "VA — Burial in a private cemetery", url: "https://www.va.gov/burials-memorials/eligibility/burial-in-private-cemetery/" }],
          source: "VA (NCA) — private cemetery burial page",
        },
        {
          id: "honors-flag",
          name: "The burial flag — VA Form 27-2008",
          summary:
            "Burial flag search terms: flag for casket, VA Form 27-2008, who receives the flag. VA provides one United States flag per deceased Veteran, to drape the casket or accompany the urn; after the service it is given to the next of kin as a keepsake. VA cannot replace a flag that is lost, destroyed, or stolen (VA Form 27-2008 instructions).",
          who: "The next of kin, in the order of precedence on VA Form 27-2008: surviving spouse; children (by age); parents (including adoptive, step, foster); siblings; uncles/aunts; nephews/nieces; others (cousins, grandparents). With no next of kin, VA furnishes the flag to a friend.",
          body: [
            "Eligibility (VA's page, summary): the Veteran served in wartime; or died on active duty after May 27, 1941; or served after January 31, 1955; or — for peacetime service ending before June 27, 1950 — completed at least one enlistment or was discharged for a service-connected disability. Certain Selected Reserve members and Philippine-forces veterans are also eligible as VA's page specifies. Generally: Veterans with an other-than-dishonorable discharge. Route: VA Form 27-2008 (Application for United States Flag for Burial Purposes), submitted to any VA regional office or U.S. Post Office; in practice the funeral director usually obtains the flag for the family — the form is given to the funeral director handling arrangements.",
          ],
          flags: [],
          links: [{ label: "VA — Burial flags", url: "https://www.va.gov/burials-memorials/memorial-items/burial-flags/" }],
          source: "VA — Burial flags page; VA Form 27-2008",
        },
        {
          id: "honors-pmc",
          name: "Presidential Memorial Certificate — VA Form 40-0247, five routes",
          summary:
            "PMC search terms: presidential memorial certificate, VA Form 40-0247. A Presidential Memorial Certificate (PMC) is an engraved paper certificate signed by the current President, honoring a deceased Veteran eligible for burial in a national cemetery. Spouses and dependents are not themselves PMC recipients (the certificate honors the Veteran).",
          who: "At a national cemetery burial, the next of kin — VA presents a PMC automatically at the burial. For a private-cemetery burial, a family member, close friend, or authorized representative applies; VA accepts multiple requests — more than one family member may receive one.",
          body: [],
          steps: [
            "Online (va.gov).",
            "Mail VA Form 40-0247 with copies of the death certificate and DD214/discharge documents to NCA FP Evidence Intake Center, PO Box 5237, Janesville, WI 53547 (copies only — originals cannot be returned).",
            "Upload via QuickSubmit.",
            "In person at any VA regional office.",
            "Fax VA Form 40-0247 and documents to 800-455-7143.",
          ],
          flags: ["F-3: VA's PMC page publishes five application routes and no deadline. This section states “no deadline published,” never “no deadline.”"],
          links: [{ label: "VA — Presidential Memorial Certificates", url: "https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/" }],
          source: "VA — Presidential Memorial Certificates page",
        },
      ],
    },
    {
      key: "preneed",
      label: "Pre-Need Eligibility",
      tileSub: "Entry §3 · VA Form 40-10007 — decide before the need",
      intro:
        "The single step in this section a Veteran can take now to reduce what their family must establish later: ask VA in advance whether you are eligible for burial in a VA national cemetery.",
      entries: [
        {
          id: "honors-preneed",
          name: "Pre-need eligibility determination — VA Form 40-10007, with VA's own stated limits",
          summary:
            "Pre-need search terms: pre-need eligibility, VA Form 40-10007, apply before death burial. A living Veteran — or a spouse or dependent, or an authorized representative applying for them — can ask VA in advance whether they are eligible for burial in a VA national cemetery. VA calls this a pre-need determination of eligibility.",
          who: "Any Veteran or spouse, at any time while living. This entry is the section's lead planning item. If the person has already died, pre-need no longer applies — the family schedules a burial instead (the VA Burial tile).",
          body: [
            "How to apply: online at va.gov, or VA Form 40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) with proof of service (DD214 if available — VA will attempt to locate documents the applicant cannot) by mail to the NCA Evidence Intake Center, PO Box 5237, Janesville, WI 53547, or by fax to the National Cemetery Scheduling Office (1-855-840-8299, per NCA).",
            "What VA sends back: a written decision letter. If approved, the letter confirms eligibility and is the record of the decision — it should be kept with the Veteran's discharge papers, and the family told where it is. If denied, the letter states the reason and the appeal route (submit more proof or request a new review).",
            "What pre-need does NOT do (VA/NCA, printed plainly): it does not reserve a gravesite and does not guarantee burial in a specific cemetery — a preference may be noted on the form, but gravesites are assigned at the time of need, in a cemetery with available space. VA re-validates the determination at the time of need under the laws then in effect and checks for any bars to the benefit. A person found eligible is under no obligation to be buried in a VA national cemetery.",
            "Headstone note: a Veteran planning a private-cemetery burial may still file pre-need; at the time of need the family files VA Form 40-1330 and notes “decedent has a VA pre-need decision letter” in the remarks block (NCA guidance).",
          ],
          flags: [],
          links: [{ label: "VA — Pre-need eligibility for burial in a VA cemetery", url: "https://www.va.gov/burials-memorials/pre-need-eligibility/" }],
          source: "VA / NCA Pre-Need Program; VA Form 40-10007",
        },
      ],
    },
    {
      key: "funeral-honors",
      label: "Military Funeral Honors",
      tileSub: "Entries 4.1–4.3 · 10 U.S.C. § 1491, eligibility, the funeral-director route",
      intro:
        "Federal law (10 U.S.C. § 1491, enacted by Public Law 106-65) requires DoD, upon request, to provide a funeral honors detail for an eligible Veteran's funeral. Honors are not automatic; they must be requested — and families do not book them with the military themselves.",
      entries: [
        {
          id: "honors-1491",
          name: "What the law requires — the § 1491 floor: flag folding, presentation, Taps, two uniformed members",
          summary:
            "Funeral honors law search terms: 10 USC 1491, what honors are required, taps flag folding. The ceremony must include, at a minimum: the folding of the United States flag, presentation of the folded flag to the next of kin (or other appropriate person), and the playing of Taps (by a live bugler where available, or a ceremonial bugle/recording as DoD policy provides). The detail consists of at least two uniformed members of the armed forces, at least one of whom is from the Veteran's parent service.",
          who: "Every eligible Veteran's family — honors are rendered once for each eligible Veteran. There is no charge; DoD funeral honors details may not accept donations.",
          body: [
            "Additional elements (rifle volley/firing party, color guard, pallbearers, caisson, flyover) are not mandated by the statute — they may be provided based on the deceased's status and availability, and veterans service organization honor guards (VFW, American Legion, and similar, under the Authorized Provider Partnership Program) may supplement elements such as a firing party but do not replace the required military detail. At a VA national cemetery, NCA cemetery staff can also assist with arranging honors.",
          ],
          flags: [
            "F-5: this entry prints the statutory minimum only. Enhanced honors vary by service, status, and availability and are not specified here — services publish their own honors-level criteria, and status-specific questions route to the service casualty office (the Casualty Assistance tile).",
          ],
          links: [{ label: "Military OneSource — Survivors' guide to resources", url: "https://www.militaryonesource.mil/casualty-mortuary-affairs/casualty-assistance/survivors-guide-to-access-resources/" }],
          source: "10 U.S.C. § 1491; DoD Military Funeral Honors program",
        },
        {
          id: "honors-eligibility",
          name: "Who is eligible for military funeral honors",
          summary:
            "Honors eligibility search terms: who gets military funeral honors, DD214 verification. Eligible: a person who died while serving on active duty; a Veteran who completed at least one enlistment or other period of obligated service and was discharged under honorable conditions (discharge under conditions other than dishonorable is the governing standard as DoD/VA publish it); or a member or former member of the Selected Reserve meeting the published criteria. Persons discharged under dishonorable conditions are not eligible.",
          who: "The family of any deceased Veteran — the document used to verify eligibility is the DD214 (or any discharge document showing character of service when a DD214 is unavailable).",
          body: [],
          flags: [],
          links: [{ label: "Military OneSource — Survivors' guide to resources", url: "https://www.militaryonesource.mil/casualty-mortuary-affairs/casualty-assistance/survivors-guide-to-access-resources/" }],
          source: "DoD Military Funeral Honors program, as published",
        },
        {
          id: "honors-request",
          name: "How a family requests honors — through the funeral director",
          summary:
            "Request honors search terms: how to get military honors at a funeral, funeral director honors, 1-877-MIL-HONR. Families do not book honors with the military themselves: the family tells the funeral director, and the funeral director contacts the appropriate service's funeral honors coordinator. DoD maintains a toll-free line for funeral directors: 1-877-MIL-HONR (1-877-645-4667).",
          who: "The family of any deceased eligible Veteran, at the time arrangements are made.",
          body: [],
          steps: [
            "The family tells the funeral director that the deceased was a Veteran and that they want military funeral honors, and provides the DD214 or discharge document.",
            "The funeral director contacts the appropriate service's funeral honors coordinator — DoD policy calls for funeral directors, not next of kin, to make this contact.",
            "For a burial in a VA national cemetery, the funeral director or family may also work through the cemetery / National Cemetery Scheduling Office, whose staff assist with arranging honors at the cemetery.",
          ],
          flags: [],
          links: [{ label: "Military OneSource — Survivors' guide to resources", url: "https://www.militaryonesource.mil/casualty-mortuary-affairs/casualty-assistance/survivors-guide-to-access-resources/" }],
          source: "DoD funeral honors policy, as published",
        },
      ],
    },
    {
      key: "arlington",
      label: "Arlington National Cemetery",
      tileSub: "Entries 5.1–5.3 · 32 CFR Part 553, in-ground vs. inurnment, scheduling, documents",
      intro:
        "Arlington is administered by the Army under 32 CFR Part 553. ANC's own framing prints on the eligibility entry: eligibility for in-ground burial at Arlington is the most stringent of all U.S. national cemeteries, and ANC cannot verify eligibility in advance — there is no Arlington equivalent of VA's pre-need program, and ANC makes no prearrangements.",
      entries: [
        {
          id: "honors-anc-eligibility",
          name: "Eligibility — in-ground burial vs. columbarium inurnment are different standards (32 CFR Part 553)",
          summary:
            "Arlington eligibility search terms: who can be buried at Arlington, in-ground vs columbarium, 32 CFR 553. ANC states its own framing: “Eligibility for in-ground burial at Arlington National Cemetery is the most stringent of all U.S. national cemeteries. However, most veterans who have at least one day of active service (other than for training) and an honorable discharge are eligible for above-ground inurnment. Eligibility is determined at the time of need.”",
          who: "Families considering Arlington — spouses and eligible dependents derive eligibility through the primarily eligible person under 32 CFR Part 553, determined by ANC at the time of need; dependent cases route to ANC rather than being restated here.",
          body: [],
          tables: [
            {
              caption: "ANC eligibility (reflecting 32 CFR Part 553 §§ 553.12–553.13) — honorable discharge",
              columns: ["Service member", "Columbarium / Niche Wall inurnment", "In-ground burial (casket or cremated)"],
              rows: [
                ["Dies on Title 10 federal active duty (other than for training)", "Yes", "Yes"],
                ["Dies on active duty for training only (Title 10)", "Yes", "No"],
                ["Veteran, retired from active duty and entitled to receive retirement pay", "Yes", "Yes"],
                ["Veteran, at least one day of active duty other than for training", "Yes", "No"],
                ["Veteran, received Medal of Honor, Distinguished Service Cross (Air Force or Navy Cross), Distinguished Service Medal, Silver Star, or Purple Heart", "Yes", "Yes"],
                ["Reserve/Guard member whose death occurs under honorable conditions while on active duty for training or performing full-time service", "Yes", "No"],
                ["Former prisoner of war (honorable service; died on or after Nov 30, 1993)", "Yes", "Yes"],
              ],
            },
          ],
          flags: [
            "F-4: spouse/dependent eligibility at ANC is derivative under 32 CFR Part 553 (one-gravesite policy and related rules sit in the regulation, not in ANC's summary table). This section routes dependent determinations to ANC at the time of need instead of restating the regulation's derivative rules.",
          ],
          links: [{ label: "Arlington — Establishing Eligibility", url: "https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral/Establishing-Eligibility" }],
          source: "Arlington National Cemetery (arlingtoncemetery.mil); 32 CFR Part 553",
        },
        {
          id: "honors-anc-scheduling",
          name: "Scheduling at Arlington — 877-907-8585; no standing wait figure is published for cremated remains",
          summary:
            "Arlington scheduling search terms: schedule a funeral at Arlington, ANC case number, how services are queued. Start: the family or funeral home calls ANC's customer service center at 877-907-8585. ANC issues a case number; documents are emailed to arlingtoncemetery.isb@army.mil with the case number. A service is not scheduled until all required documents are received.",
          who: "Families and funeral homes scheduling at Arlington.",
          body: [
            "Order and priority: services are scheduled in the order received, then queued by the status of the deceased (active duty or veteran) and the nature of the remains (casketed or cremated). Active-duty deaths and casketed remains are prioritized (casketed in part for health/safety and family cost reasons, per ANC). ANC conducts up to roughly 27 funeral services per day. Published timeframes (ANC's own figures): burials for current-conflict active-duty members killed in action or who died of wounds can be accommodated within two weeks of the date of death; services for casketed remains are generally scheduled within about three weeks of receiving the request (once documents are complete).",
            "Cremated remains: ANC's published position is that wait times for cremated-remains services depend on remains type, available military resources, and family preferences, and are longer than for casketed remains; ANC directs families to the call center (877-907-8585) for the current wait on a cremated case once documents are received. ANC does not publish a standing month-count for cremated services on its FAQ — this section prints ANC's framing and the call-center route, and no other number.",
          ],
          flags: [
            "F-1: longer wait figures for cremated cases circulate in secondary reporting and in individual ANC case correspondence. They are not printed. Refresh check: re-read ANC's scheduling pages for any newly published cremated timeframe before adding one.",
          ],
          links: [{ label: "Arlington — Funeral FAQs", url: "https://www.arlingtoncemetery.mil/Funerals/Funeral-FAQs" }],
          source: "Arlington National Cemetery — Funeral FAQs; Resources for Funeral Directors",
        },
        {
          id: "honors-anc-documents",
          name: "Arlington — required documents",
          summary:
            "Arlington documents search terms: DD214 death certificate cremation certificate, urn size 9x9x9. ANC requires certification that an urn contains 100 percent of the decedent's remains as received from the crematorium or funeral home, and Arlington does not accept cremated remains by mail. Columbarium urns must be no larger than 9 × 9 × 9 inches (companion urns excepted).",
          who: "The family or funeral home assembling an Arlington case (with the case number from 877-907-8585).",
          body: [],
          bullets: [
            { text: "DD214 (or service equivalent) showing an honorable character of service, to establish the service member's eligibility (not required for a spouse's second interment if ANC can verify the Veteran's eligibility from its archived records)." },
            { text: "Death certificate." },
            { text: "Cremation certificate, if applicable (100-percent certification, above)." },
            { text: "Succession documents for the Person Authorized to Direct Disposition (PADD), where the PADD acts on behalf of the primary next of kin, if applicable." },
          ],
          flags: [],
          links: [{ label: "Arlington — Resources for Funeral Directors", url: "https://www.arlingtoncemetery.mil/Funerals/Scheduling/Resources-for-Funeral-Directors" }],
          source: "Arlington National Cemetery — Funeral FAQs / Resources for Funeral Directors",
        },
      ],
    },
    {
      key: "state-casualty",
      label: "State Cemeteries & Casualty Help",
      tileSub: "Entries §6–§7 · grant-funded cemeteries router, the five casualty systems",
      intro:
        "Two routers: state, territory, and tribal veterans cemeteries (operated by the state, not VA), and the service casualty-assistance system — the people assigned to walk families through everything in this section.",
      entries: [
        {
          id: "honors-state",
          name: "State, territory, and tribal veterans cemeteries — router level",
          summary:
            "State veterans cemetery search terms: grant-funded veterans cemetery, find a cemetery by state. Many states, territories, and tribes operate VA Grant-Funded Veterans Cemeteries, established or improved through VA's Veterans Cemetery Grants Program (VA may fund up to 100 percent of an approved project's development cost; VA does not pay for land acquisition). As NCA states: eligibility is similar to VA national cemeteries but may include residency requirements; these cemeteries are operated and maintained by the state, territory, or tribe — VA cannot answer questions about them; contact the specific cemetery.",
          who: "Families for whom a state veterans cemetery is closer or preferred over a national cemetery. This is a router entry only — no individual state cemetery's rules, fees, or residency requirements are printed; they are the operating state's, and they vary.",
          body: [
            "Route: NCA's Find a Cemetery directory lists national cemeteries and VA Grant-Funded cemeteries by state, with each cemetery's contact information and whether burial space is open.",
          ],
          flags: [],
          links: [{ label: "NCA — Find a Cemetery (all grant-funded)", url: "https://www.cem.va.gov/find-cemetery/all-grant-funded.asp" }],
          source: "VA National Cemetery Administration (cem.va.gov)",
        },
        {
          id: "honors-casualty",
          name: "The service casualty-assistance system — the people assigned to walk families through this",
          summary:
            "Casualty assistance search terms: casualty assistance officer, CACO, gold star liaison. When a service member dies, the system does not expect the family to navigate this section alone: each service maintains a casualty office that assigns a casualty assistance officer (the title varies) who contacts the next of kin and assists with benefits counseling, funeral honors coordination, and burial arrangements. Military OneSource (DoD) states it directly: the casualty assistance officer “will reach out to you and is your first point of contact following your loved one's death.”",
          who: "Families of service members who died on active duty, and — through service casualty offices — retirees and veterans. This entry is names and routes only; this app never instructs a family to self-navigate an active-duty death without this pointer appearing first.",
          body: [],
          bullets: [
            { title: "Army", text: "Army Casualty and Mortuary Affairs Operations Division (CMAOD), U.S. Army Human Resources Command; installation Casualty Assistance Centers; long-term: Survivor Outreach Services (SOS), 833-313-1960." },
            { title: "Marine Corps", text: "HQMC Casualty Section (Military Personnel Services Branch, MFPC), Marine Corps Base Quantico; CACOs from the nearest installation; long-term: Long Term Assistance Program, 866-210-3421 ext. 2." },
            { title: "Navy", text: "Navy Casualty (PERS-00C), Navy Personnel Command, Millington, TN, toll-free 1-800-368-3202 (duty hours); CACOs; long-term: Navy Long Term Assistance Program and the Navy Gold Star Program, 888-509-8759." },
            { title: "Air Force and Space Force", text: "Air Force Casualty Operations (AFPC), JBSA-Randolph; Casualty Assistance Representatives (locator 877-353-6807); long-term: Air Force Families Forever (covers Space Force families), 866-299-0596." },
            { title: "Coast Guard", text: "Office of Casualty Matters / Office of Decedent Affairs, Coast Guard Personnel Service Center; Coast Guard Gold Star Program." },
            { title: "If the assistance itself is failing", text: "Each military department designates a Gold Star and Surviving Family Member Liaison (required by the FY2014 NDAA § 633) to address concerns about casualty assistance or survivor benefits — contacts for all five services are maintained on Military OneSource." },
          ],
          flags: [],
          links: [
            { label: "Military OneSource — Survivors' guide to resources", url: "https://www.militaryonesource.mil/casualty-mortuary-affairs/casualty-assistance/survivors-guide-to-access-resources/" },
            { label: "Military OneSource — Gold Star & Surviving Family Member Liaisons", url: "https://www.militaryonesource.mil/casualty-mortuary-affairs/bereavement-grief/gold-star-surviving-family-member-liaisons/" },
          ],
          source: "DoD / Military OneSource casualty pages; service casualty offices",
        },
      ],
    },
  ],
};
