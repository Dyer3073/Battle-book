// Chaplains & Religious Life — transcribed from the researched pack
// (~/workspace/military-app/chaplains/chaplains.md, researched
// Nov 9, 2026). The pack is the content source of truth: its numbered
// entries 1.1–1.5, 2.1–2.4, 3.1–3.6, 4.1–4.3, 5, 6 (20 entries; the
// pack's totals line says 17 — the enumeration itself lists 20, and
// all 20 ship). Binding fidelity points: MRE 503 prints VERBATIM;
// the governing DON confidentiality instruction is SECNAVINST
// 1730.11 (2022) — the cancelled 1730.9A is flagged as still cited
// on live USMC/MCCS pages and never linked; DoDI 1300.17 timelines
// print as published (30 business days non-waiver CONUS); NAVY311
// ChaplainCare is 1-855-NAVY-311; the Army/DAF national chaplain
// hotline ABSENCE prints as a finding. No theological content, no
// endorsement of any faith, no legal advice. Placement: members and
// spouses in full; the future track gets the joining-relevant tile
// only — Religious Accommodation, which carries the DoDI §3.2.i
// preaccession right the pack cross-links to the future-member area
// (CHAPLAINS_FUTURE_SECTION).

import type { PackSection } from "./seven";

export const CHAPLAINS_SECTION: PackSection = {
  view: "chaplains",
  title: "Chaplains & Religious Life",
  headSub:
    "What a chaplain is, the confidentiality rule that makes chaplains different from every other helping resource in uniform, how to find one — and how religious accommodation actually works under DoDI 1300.17.",
  intro:
    "Three sentences the whole section stands on. (1) What you tell a chaplain in confidence stays with the chaplain: under Military Rule of Evidence 503, a confidential communication to a chaplain — made as a formal act of religion or as a matter of conscience — is privileged. (2) That is not true of anyone else in uniform: medical, mental-health, and counseling programs all publish limits; chaplain pages publish the opposite framing, several stating explicitly that the confidentiality includes topics involving harm to self or others — the contrast prints exactly as each side's own pages frame it. (3) Your religious preference in your record and a religious accommodation are two different things: the preference is a data field; an accommodation is a separate, written request through your chain of command.",
  standing:
    "This section documents the system — who chaplains are, what the rules are, how requests route — as the services publish it. It carries no theological content and no legal advice.",
  tiles: [
    {
      key: "confidentiality",
      label: "Confidentiality — MRE 503",
      tileSub: "Entries 1.1–1.5 · the verbatim rule, per-service wording, assistants, the one exception",
      intro:
        "The rule itself, how each service's own pages say it (printed under its own name — the wordings differ), who else the privilege reaches, the contrast with every other helping resource, and the one conversation that is NOT privileged: the accommodation interview.",
      entries: [
        {
          id: "chap-mre503",
          name: "The rule itself — Military Rule of Evidence 503, verbatim",
          summary:
            "MRE 503 search terms: chaplain confidentiality rule, privileged communication, can a chaplain tell. Print the rule verbatim: “A person has a privilege to refuse to disclose and to prevent another from disclosing a confidential communication by the person to a clergyman or to a clergyman's assistant, if such communication is made either as a formal act of religion or as a matter of conscience.” — Military Rule of Evidence 503, Manual for Courts-Martial, as quoted in AFI 52-101 and AR 165-1 ¶4-4.",
          who: "Everyone — the privilege belongs to the individual, not the chaplain, and it extends beyond the individual's death (AFI 52-101 ¶5.1.3).",
          body: [],
          bullets: [
            { title: "“Clergyman”", text: "Means a minister, priest, rabbi, chaplain, or similar functionary of a religious organization, or an individual reasonably believed to be so by the person consulting them (MRE 503(b))." },
            { title: "“Confidential communication”", text: "A communication made to a clergyman in their capacity as a spiritual advisor — or to a clergyman's assistant in the assistant's official capacity — that is not intended to be disclosed to third persons except in furtherance of its purpose or as reasonably necessary for its transmission." },
            { title: "Release", text: "Requires the individual's informed, written consent — signed, dated, and witnessed by a disinterested third party. Where a chaplain is bound by the rules of their faith for sacramental confession, even that release does not apply (AFI 52-101 ¶5.1.1). “Under no circumstances may a chaplain disclose privileged communication revealed in the practices of his/her ministry without the individual's informed, written consent.”" },
          ],
          flags: [
            "Currency: the AFI 52-101 text located in research is the 5 December 2013 edition. The current DAF publication is styled DAFI 52-101, and the DAF Chaplain Corps' HOPE Leader's Guide (February 2026) cites its confidentiality provisions at ¶9.3.1–9.3.3 — the substance (MRE 503 privilege, consent-gated disclosure) is unchanged in current corps guidance. The 2013 paragraph numbers are orientation, not print authority.",
          ],
          links: [],
          source: "MRE 503, Manual for Courts-Martial (via AFI 52-101 / AR 165-1 ¶4-4)",
        },
        {
          id: "chap-per-service",
          name: "How each service's own pages say it — SECNAVINST 1730.11 governs the Navy, Marines, and Coast Guard detail",
          summary:
            "Per-service confidentiality search terms: 100% confidentiality, absolute confidentiality, SECNAVINST 1730.11. The governing Department of the Navy instruction is SECNAVINST 1730.11, dated 31 October 2022 — verified current on secnav.navy.mil; it cancels SECNAVINST 1730.9A (22 August 2018). Its ¶4: “Chaplains, Religious Program Specialists (RP), Chaplain Assistants (CA), and contracted clergy will protect confidential communications as part of their professional duties.”",
          who: "Members and families of every service — each service's wording prints under its own name; they are not blended into one generic promise.",
          body: [],
          bullets: [
            { title: "Army", text: "“Chaplains and their religious affairs specialists are the only professional people in the Army who do not have an obligation to reveal the contents of their talks with clients… 100% confidentiality.” (army.mil.) Installation framing is the same: “compassionate, fully confidential personal and pastoral counseling” (USAG Rheinland-Pfalz RSO), and Army Family Life Chaplain centers publish “the highest level of confidentiality on- or off-base,” with counseling files shredded rather than retained." },
            { title: "Navy and Marine Corps (one Department of the Navy rule)", text: "SECNAVINST 1730.11 ¶5 adds the two qualifiers that print with the promise: no disclosure without the informed consent of the person who made the communication; and a communication is confidential when made to a chaplain or contracted clergy as a formal act of religion or as a matter of conscience, or to a chaplain in their official capacity as a spiritual advisor. Service pages: Navy chaplains hold “a sacred trust of maintaining absolute confidentiality… [that] extends to all who seek our counsel, regardless of faith background” (Naval Base San Diego chapel). The Basic School chaplain page: “what is said to a chaplain within counseling is absolutely confidential — period; there are NO exceptions, including harm to self or others.” Marines are served by Navy Chaplain Corps chaplains — there is no separate Marine Corps chaplain corps." },
            { title: "Air Force and Space Force (DAF)", text: "DAF pages use “privileged communication” and “100%”: “Chaplains provide 100% privileged communication for counseling” (Beale AFB chapel). The Andersen AFB directory states the scope together with the after-hours route: sessions are “100% confidential and exempt from reporting to chain of command, this includes topics that indicate harm or potential harm to self or others.” An Air Force Reserve Command article prints a chaplain directly: “The biggest misunderstanding I see is that people think there are exceptions to [Chaplain Corps] confidentiality if they talk about a 'harm-to-themselves or others' type of an issue. That doesn't apply to us.” Space Force members are served by the DAF Chaplain Corps — no separate Space Force chaplain corps exists in any official source." },
            { title: "Coast Guard", text: "Coast Guard chaplains are Navy Chaplain Corps officers detailed to the Coast Guard (COMDTINST 1730.5B, 13 June 2022; 14 U.S.C. §705); the ministry instruction is COMDTINST 1730.4D, “Religious Ministry within the Coast Guard” (6 June 2024), and CG confidentiality rides on the Department of the Navy instructions above. Base Kodiak chapel page: “100% Confidentiality: Those who speak with a Military Chaplain are entitled to confidentiality. Federal Law provides this privilege for communication with those who are members of the Military Chaplain Corps.”" },
          ],
          flags: [
            "STALE CITATIONS ON LIVE PAGES: multiple official USMC and MCCS pages still cite or link SECNAVINST 1730.9A. That instruction was cancelled in 2022; the current one is 1730.11 (Naval Base Kitsap's chapel page already cites it correctly). This section prints and links 1730.11 only.",
            "The army.mil article attributes the rule loosely to “Rule 503 of the Uniform Code of Military Justice” — Rule 503 is a Military Rule of Evidence in the Manual for Courts-Martial, not a UCMJ article. The rule prints correctly on the MRE 503 card; the article's citation is not copied.",
          ],
          links: [],
          source: "SECNAVINST 1730.11 (2022); COMDTINST 1730.5B / 1730.4D; service chapel pages",
        },
        {
          id: "chap-assistants",
          name: "The assistants question — printed per service, because the services do not match",
          summary:
            "Assistant privilege search terms: religious affairs specialist confidentiality, RP chaplain assistant, does the assistant keep secrets. One-line summary, sourced to the service instructions: the privilege belongs to the person talking to the chaplain; assistants and support staff are bound to protect what passes through them in support of the chaplain, but the counseling privilege itself is the chaplain's office — if you need the privilege, ask for the chaplain.",
          who: "Anyone about to talk to a ministry team member who is not the chaplain.",
          body: [
            "The rule text itself includes assistants, narrowly: MRE 503's privilege covers a confidential communication made “to a clergyman or to a clergyman's assistant,” in the assistant's official capacity. What an assistant holds is protection for communications that pass through them in support of the chaplain — not an independent counseling privilege of their own. The service instructions draw that line in three different places; all three print here.",
          ],
          bullets: [
            { title: "Department of the Navy — the narrow framing", text: "SECNAVINST 1730.11 ¶5: RPs and CAs “may become aware of confidential communications in the course of their support duties,” and a communication made to an RP or CA is confidential only when made to them in order to obtain services from a chaplain or contracted clergy; an RP/CA's disclosure to their supervising chaplain is deemed reasonably necessary and is not a breach. The Department's published FAQ adds: confidential communications do not extend to lay leaders, directors of religious education, or other support personnel." },
            { title: "Army — a confidentiality duty, defined in AR 165-1", text: "“Religious Affairs Specialists are bound by confidentiality as defined in AR 165-1 chapter 16-2” (CMF 56 Career Progression Plan, api.army.mil); published summaries add that religious affairs specialists will not be required to reveal confidential communications they encounter when supporting the chaplain, nor serve in duties that could compel disclosure." },
            { title: "Department of the Air Force — the privilege can be received, volunteers cannot", text: "The 2013 AFI 52-101 ¶5.1.6 states “chaplains and chaplain assistants may receive privileged communication” under MRE 503 (printed with the currency flag on the MRE 503 card). The boundary DAF draws today is at the volunteer line: HOPE Specialists (trained volunteers) “do not hold confidentiality privileges… are not authorized to receive privileged communication” (Chaplain Corps HOPE Leader's Guide, February 2026)." },
            { title: "Not an assistant exception", text: "Coast Guard Auxiliary Chaplain Support (ACS) chaplains are Auxiliarists who hold the same educational and ecclesiastical-endorsement requirements as DoD chaplains and serve under a designated Coast Guard chaplain's supervision (COMDTINST 1730.5B). They are endorsed clergy, not assistants." },
          ],
          flags: [
            "A DVIDS quote from a Navy Region Hawaii RP (“also protected by the same confidentiality as chaplains”) is broader than the instruction that governs him — the instruction controls; the quote does not print as the rule.",
          ],
          links: [],
          source: "SECNAVINST 1730.11 ¶5; AR 165-1 (via CMF 56 plan); DAFI 52-101 / HOPE Guide",
        },
        {
          id: "chap-contrast",
          name: "The distinction this section exists to make — chaplain vs. everyone else",
          summary:
            "Confidentiality contrast search terms: vet center confidentiality limits, life-threatening exception, chaplain vs counselor. Each side of this contrast is sourced only to that side's own official pages. No advice about which door to choose — Care & Crisis already routes crises to 988.",
          who: "Anyone weighing who to talk to — printed as published fact, both sides.",
          body: [],
          tables: [
            {
              caption: "As each side's own pages frame it",
              columns: ["", "Chaplain", "Medical / mental-health / counseling programs"],
              rows: [
                ["What their own pages promise", "“100% confidential” / “absolute confidentiality” counseling; disclosure only with the individual's informed, written consent (AFI 52-101 ¶5.1.1; SECNAVINST 1730.11 ¶5).", "Confidential with published limits — e.g., VA: Vet Center records “can't be accessed by other VA offices, the DoD, military units, or other community providers without your permission or unless required to avert a life-threatening situation” (VA Vet Center pages)."],
                ["Harm to self or others", "Service pages state it is inside the promise: “exempt from reporting to chain of command, this includes topics that indicate harm or potential harm to self or others” (Andersen AFB directory); “there are NO exceptions, including harm to self or others” (TBS chaplain page); chaplains “are not mandatory reporters” (MCCS WRR page).", "Military OneSource's own counseling page lists what it does not address — active suicidal or homicidal thoughts, sexual assault, child abuse, domestic violence, substance abuse — and routes those to the Military Crisis Line."],
                ["Records", "Army Family Life Chaplain centers publish that counseling files are shredded and no notes are shared without signed consent (home.army.mil).", "Medical and mental-health encounters create records in the member's health record systems (see My Health HQ)."],
              ],
            },
          ],
          flags: [
            "Honesty flag: the chaplain-side statements are the services' current published framing, and this section prints them as such. Standing line: “This is how the services describe the rule. If your situation involves a legal proceeding, talk to a defense counsel or your chaplain about how the privilege applies.” Historical case law is outside this section's scope; no legal advice is given here.",
          ],
          links: [],
          source: "Service chaplain pages vs. VA Vet Center / Military OneSource pages",
        },
        {
          id: "chap-not-privileged",
          name: "The one conversation that is NOT privileged — accommodation interviews",
          summary:
            "Accommodation interview search terms: chaplain interview not confidential, warning advisement. SECNAVINST 1730.11 carries a Warning Advisement for statements made during a chaplain interview conducted in support of a request for waiver of policy to accommodate a religious practice: a religious-accommodation interview is an administrative function, and statements in it do not qualify as confidential communications under the instruction.",
          who: "Anyone preparing a religious-accommodation request — the USMC process makes the interview a required step (the Accommodation tile), so a Marine will sit in exactly this interview.",
          body: [
            "Print this before you sit down: that conversation is part of your request package, not a confidential counseling session. (The cancelled 1730.9A said the same at ¶5.d; the current 1730.11 retains the advisement.)",
          ],
          flags: [],
          links: [],
          source: "SECNAVINST 1730.11 — Warning Advisement",
        },
      ],
    },
    {
      key: "find",
      label: "Find a Chaplain",
      tileSub: "Entries 2.1–2.4 · corps pages, the duty chaplain, phone routes, deployed",
      intro:
        "There is no single DoD chaplain locator. The working routes are the corps page, the installation chapel (cross-link My Installation — the MilitaryINSTALLATIONS directory carries a chapel/chaplain category for each installation), your unit's Religious Ministry Team, and — after hours — the duty chaplain through the command duty officer / command post. The route prints, not a promise of a specific office's hours.",
      entries: [
        {
          id: "chap-find-routes",
          name: "Per-service corps pages and first routes",
          summary:
            "Find a chaplain search terms: army chaplain corps, navy chaplain, wing chapel, coast guard chaplain locations, 202-372-4900. Army — U.S. Army Chaplain Corps, army.mil/chaplaincorps; Navy — the command chaplain or installation chapel; Marine Corps — your unit's chaplain is a Navy chaplain; Air Force / Space Force — the wing chapel; Coast Guard — the Chaplain of the Coast Guard locations page.",
          who: "Everyone looking for a chaplain in garrison.",
          body: [],
          bullets: [
            { title: "Army", text: "The corps page is the front door for the Office of the Chief of Chaplains; its published FAQ adds a limit worth printing: the Privacy Act prohibits the corps from providing addresses, phone numbers, or locations for individual personnel — the route to a chaplain is your unit ministry team or your installation's Religious Support Office, not the corps HQ. In a unit, the pair is the chaplain + Religious Affairs Specialist (56M): “an enlisted member of the unit ministry team, serving alongside and in support of a chaplain.”" },
            { title: "Navy", text: "Navy Chaplain Corps site (linked from Navy Reserve and command pages as navy.mil/local/chaplaincorps). Day-to-day route is the command chaplain or the installation chapel; installation Religious Programs pages (cnic.navy.mil) publish the chapel office number, the service schedule, and the after-hours route on the same page." },
            { title: "Marine Corps", text: "Your unit's chaplain is a Navy chaplain. Marine unit pages publish the Religious Ministries office directly — e.g., 11th Marine Regiment lists its Regimental Chaplain and RP by name with office phones. Installation-level: the base chapel / command chaplain page." },
            { title: "Air Force / Space Force", text: "The wing chapel. Every base chapel page publishes the chapel office, the after-hours route through the Command Post, and the confidentiality line together. There is no separate Space Force chaplain organization — Guardians use the DAF corps." },
            { title: "Coast Guard", text: "The Coast Guard publishes a chaplain locations list under the Chaplain of the Coast Guard. District chaplain pages print the locator line directly: “Locate Your Nearest Coast Guard Chaplain: 202-372-4900.” Coast Guard chaplains are Navy officers (LT, CHC, USN) serving Coast Guard units." },
          ],
          flags: [],
          links: [{ label: "Chaplain of the Coast Guard — Locations", url: "https://www.uscg.mil/Leadership/Senior-Leadership/Chaplain-of-the-Coast-Guard/Locations/" }],
          source: "Service chaplain-corps pages",
        },
        {
          id: "chap-duty-chaplain",
          name: "After hours — the duty chaplain",
          summary:
            "Duty chaplain search terms: chaplain after hours, chaplain at night, command duty officer chaplain. The published pattern is identical across services: a duty chaplain is on call after hours, reached through the installation's command duty officer, quarterdeck, or command post — you ask that duty desk for the duty chaplain; you do not need the chaplain's personal number.",
          who: "Anyone who needs a chaplain outside working hours.",
          body: [],
          bullets: [
            { title: "The concept, in the services' words", text: "Andersen AFB directory: “A Chaplain is always on call after hours through the Command Post… by requesting the Duty Chaplain.” Beale AFB chapel page routes after-hours emergencies via the Command Post the same way." },
            { title: "Navy pattern, named examples", text: "NAS Pensacola: “After working hours (1600-0730), the duty Chaplain is available by calling the Command Duty Officer (CDO)… They will page the duty Chaplain.” NCBC Gulfport: “A Chaplain is available 24 hours a day, seven days a week. To reach the Duty Chaplain, please call the CBC Quarterdeck.” Naval Base Kitsap routes through the command post. NAVSTA Rota publishes a direct duty chaplain number on its Religious Ministries page — some overseas installations publish the duty number directly; per-installation numbers print from the installation page, never as a global list." },
            { title: "Marine Corps pattern", text: "Unit pages publish both layers: the regimental chaplain's office number and the installation duty chaplain (11th Marines: unit chaplain, plus “MCI-WEST Duty Chaplain” after hours). RTC Great Lakes: “a duty chaplain is available 24/7 to handle any urgent needs.”" },
            { title: "Coast Guard pattern", text: "Base pages publish chaplain duty cell numbers directly (Base Kodiak lists a duty cell per chaplain) — pattern varies by base; the service-level route remains the locations page and 202-372-4900." },
          ],
          flags: [],
          links: [],
          source: "Installation chapel / Religious Programs pages (cnic.navy.mil, af.mil, marines.mil, uscg.mil)",
        },
        {
          id: "chap-phone",
          name: "By phone — NAVY311 ChaplainCare 1-855-NAVY-311; the Army/DAF hotline absence is a finding",
          summary:
            "Chaplain phone search terms: NAVY311, 1-855-NAVY-311, chaplain hotline, army chaplain phone number. Navy / Marine Corps / Coast Guard — NAVY311 ChaplainCare: 1-855-NAVY-311 (1-855-628-9311), published on official Navy pages as the way to reach a chaplain by phone. Army — ABSENT: no Army-wide chaplain hotline was found on official Army pages. Air Force / Space Force — ABSENT at service level.",
          who: "Navy, Marine Corps, and Coast Guard members and families by phone; Army/DAF members use the unit/installation routes on the other cards in this tile.",
          body: [],
          bullets: [
            { title: "NAVY311 ChaplainCare — 1-855-NAVY-311 (1-855-628-9311)", text: "MyNavy Family's Emotional Support Services page: “Find a Navy Chaplain by calling 1-855-NAVY-311. Select '0' to talk with an agent who will facilitate your request.” Naval Base Kitsap's chapel page lists “Navy311 ChaplainCare: 1-855-NAVY-311.” The Navy Reserve Almanac states NAVY311 support “is available to all active and Reserve Sailors, Marines, Coast Guardsmen and their family members” — the one published telephonic chaplain route that expressly covers three services. Email/text route as published: navy311@navy.mil." },
            { title: "Navy Reserve — CNRFC 24/7 chaplain line: (757) 322-5650", text: "The Commander, Navy Reserve Forces Command Chaplain office “runs an around-the-clock on-call 100% confidential phone service for Reserve Force personnel and their families” (Navy Reserve Almanac). Scoped exactly as published: Reserve Force personnel and their families." },
            { title: "Coast Guard — locator line 202-372-4900", text: "A locate line (“Locate Your Nearest Coast Guard Chaplain”), not published as a counseling line — labeled that way here." },
            { title: "Army — ABSENT (a finding, printed)", text: "No Army-wide chaplain hotline was found on official Army pages in this research. The published Army routes are the unit ministry team, the installation Religious Support Office, and the installation's duty-officer/duty-chaplain chain after hours. No other service's number is substituted." },
            { title: "Air Force / Space Force — ABSENT at service level (a finding, printed)", text: "No DAF-wide chaplain hotline was found on official pages; the published route is the wing chapel in hours and the Command Post → Duty Chaplain after hours." },
          ],
          flags: [
            "Do not present Military OneSource (800-342-9647) as a chaplain line — it is DoD's non-medical counseling and information service (see Care & Crisis). Likewise 988 / Veterans Crisis Line is a crisis line, not a chaplain route.",
          ],
          links: [],
          source: "Official Navy pages (NAVY311); Navy Reserve Almanac; USCG district pages",
        },
        {
          id: "chap-deployed",
          name: "Deployed and away from an installation",
          summary:
            "Deployed chaplain search terms: chaplain on deployment, religious ministry team, reserve chaplain between drills. The Religious Ministry Team deploys with the unit — the chaplain who counsels a deployed Marine or Sailor is the unit's embarked Navy chaplain (the 13th MEU's Religious Ministry Team provided ten services for eight religions across three ships and a 24/7 resource for Marines and Sailors on deployment, per marines.mil).",
          who: "Deployed members, and members away from their unit (including Reserve members between drills).",
          body: [
            "For members away from their unit, the published phone routes in this tile are the fallback the services themselves publish: NAVY311 ChaplainCare (Navy/USMC/CG) and the CNRFC 24/7 line (Navy Reserve).",
          ],
          flags: ["No equivalent published deployed-chaplain directory exists for Army/DAF — ABSENT; none is constructed here."],
          links: [],
          source: "marines.mil; Navy Reserve Almanac",
        },
      ],
    },
    {
      key: "accommodation",
      label: "Religious Accommodation",
      tileSub: "Entries 3.1–3.6 · DoDI 1300.17, published timelines, per-service routes, appeals, examples",
      intro:
        "The framework is DoDI 1300.17, “Religious Liberty in the Military Services” (effective September 1, 2020) — read in full for this section. The sentence members most need first: “A Service member will continue to comply with the policy, practice, or duty from which accommodation is being sought until informed that the request has been approved” (§3.1.a). Applicants take note: preaccession requests must receive a final decision before participating (§3.2.i).",
      entries: [
        {
          id: "chap-acc-framework",
          name: "The framework — DoDI 1300.17: normally accommodate, one denial test, comply while you wait",
          summary:
            "Accommodation framework search terms: DoDI 1300.17, religious liberty, compelling governmental interest, least restrictive means, preaccession accommodation. “Service members have the right to observe the tenets of their religion, or to observe no religion at all.” The issuance implements the Religious Freedom Restoration Act (42 U.S.C. §2000bb-1). “DoD Components will normally accommodate practices of a Service member based on sincerely held religious belief.”",
          who: "Every service member — and applicants: applicants (commissioning, warrant, enlistment/reentry, academy and ROTC enrollment, scholarship programs) must be informed of the accommodation policies and given the opportunity to submit a request and receive a final decision before participating (§3.2.i).",
          body: [],
          bullets: [
            { title: "The only denial test", text: "A request may be denied only if (1) the policy, practice, or duty is in furtherance of a compelling governmental interest AND (2) it is the least restrictive means of furthering that interest. “The burden of proof is on the DoD Component, not the individual” (§1.2.e). The Glossary defines the compelling interest as mission accomplishment at the individual, unit, and organizational levels, including readiness, unit cohesion, good order and discipline, and health and safety." },
            { title: "Comply while you wait", text: "“A Service member will continue to comply with the policy, practice, or duty from which accommodation is being sought until informed that the request has been approved” (§3.1.a)." },
            { title: "Where decisions sit", text: "Commanders may resolve requests that do not require waiving uniform, religious-apparel, grooming/appearance, or body-art standards (§1.2.g). Requests approvable consistent with existing regulations are acted on at the lowest appropriate level; requests that require a waiver of Military Department/Service regulations are forwarded to the Secretary of the Military Department (§3.2.a), with written delegation floors no lower than: Army — Deputy Chief of Staff, G-1; Navy — Chief of Naval Personnel, or Deputy Commandant for Manpower & Reserve Affairs for Marines; Department of the Air Force — AF Deputy Chief of Staff for Manpower, Personnel, and Services, or the Deputy Chief of Space Operations for Personnel and Logistics Services for Guardians (§3.2.b)." },
            { title: "The factors reviewers must weigh (§3.2.d)", text: "(1) The compelling governmental interest in mission accomplishment; (2) alternate means — the least restrictive means to the requestor's practice that does not impede the compelling interest is determinative." },
            { title: "Grants can be partial and conditioned", text: "Approval may be in whole or in part, and may carry conditions or limitations tied to the compelling interest — deployment, health and safety, and training/ceremonial activities are the issuance's own examples (§3.2.e)." },
            { title: "An approved accommodation lasts", text: "It “remains in effect for the duration of the member's career (including promotions, reenlistment, and commissioning)” unless rescinded under the issuance; a rescission proposal requires a written summary to the member, at least 10 days for the member to comment, action at a level no lower than the granting level, and the same compelling-interest / least-restrictive-means standard as a denial (§3.2.g). In exigent circumstances a commander no lower than a Summary Court-Martial Convening Authority may temporarily modify or suspend an accommodation, for the minimum period required (§3.2.h)." },
          ],
          flags: [
            "This reissue cancelled the 2009 “Accommodation of Religious Practices” instruction and retitled it — older service pages that cite “DoDI 1300.17 (2009)” or the old title are citing the superseded edition.",
          ],
          links: [],
          source: "DoDI 1300.17 (esd.whs.mil, read in full)",
        },
        {
          id: "chap-acc-categories",
          name: "The categories the instruction names — apparel, grooming, medical; worship, diet, body art",
          summary:
            "Accommodation categories search terms: religious apparel, grooming accommodation, immunization exemption, separate rations, body art. Requests that require designated reviewers (§2.3.a(2)(b)): (1) religious apparel, including religious body art; (2) grooming; (3) medical practices, including DNA specimen sampling and immunizations.",
          who: "Members identifying which kind of request theirs is — the category decides the route and the clock.",
          body: [],
          bullets: [
            { title: "Worship, holy days, Sabbath/observance (§3.3.a)", text: "Accommodated “to the extent possible, consistent with mission accomplishment,” and requests of this kind “will normally not require a religious accommodation request.”" },
            { title: "Diet (§3.3.b)", text: "A member's religious practices “will be considered in acting on a request for separate rations”; separate-rations accommodation requests may be adjudicated at command level." },
            { title: "Medical exemption (§3.3.c)", text: "Religious practices considered in requests for exemption from required medical practices, decided consistently with mission accomplishment including medical risk to others in the unit." },
            { title: "Religious apparel in uniform (§3.3.d)", text: "Under 10 U.S.C. §774, members may wear items of religious apparel in uniform unless the item interferes with the performance of military duties or is not neat and conservative; the issuance names the interference factors (impairs safe/effective operation of weapons or equipment; health/safety hazard; interferes with special or protective clothing such as helmets and protective masks; otherwise impairs mission accomplishment). Items not visible or apparent may be worn provided they do not interfere; religious headgear may be worn when no military headgear is prescribed, and underneath prescribed headgear if it does not interfere." },
            { title: "Religious body art (§3.3.d(5))", text: "Evaluated on whether it is neat and conservative and on its location, including visibility in uniform." },
            { title: "Chaplains' own apparel (§3.3.d(4))", text: "While conducting worship or performing rites of their faith, a chaplain may wear with the uniform any required religious apparel of their own tradition." },
            { title: "Definitions (Glossary)", text: "Religious apparel = articles of clothing, jewelry, or accoutrements worn as part of the observance of the member's faith; religious body art = tattoos, piercings, or other body modifications that are part of the member's religious practice; religious practice = conduct constituting individual expression of religious belief “whether or not compelled by, or central to, the religion concerned”; substantial burden = being required to participate in a prohibited activity, prevented from participating in motivated conduct, or placed under substantial pressure to act contrary to a sincerely held belief." },
          ],
          flags: [],
          links: [],
          source: "DoDI 1300.17 §§2.3, 3.3, Glossary",
        },
        {
          id: "chap-acc-timelines",
          name: "Published timelines — DoDI Table 1: 30 business days (non-waiver, CONUS)",
          summary:
            "Accommodation timeline search terms: how long does an accommodation take, 30 business days, 60 days waiver. Only published timelines print. DoDI 1300.17 §3.2.c + Table 1: a request approvable under existing regulations gets review, final action, and written notification no later than 30 business days from submission (CONUS).",
          who: "Anyone with a request in flight — and anyone deciding when to file one.",
          body: [],
          tables: [
            {
              caption: "DoDI 1300.17 Table 1 — the published clocks",
              columns: ["Request type", "Published clock"],
              rows: [
                ["Approvable under existing regulations (no waiver)", "Review, final action, and written notification to the member no later than 30 business days from submission (CONUS); 60 days for members outside the U.S. or Reserve Component members not on active duty."],
                ["Requires waiver of Service regulations", "Written request must reach the Office of the Secretary concerned no later than 30 days from submission to the commander/supervisor (CONUS) / 60 days (OCONUS or RC not on active duty); review and final action completed with written notification no later than 60 days from receipt by the Secretary's office; member notified within 5 days of final action."],
              ],
            },
          ],
          bullets: [
            { title: "Navy (MyNavyHR Religious Accommodation FAQ)", text: "Restates the DoDI clocks in calendar terms — non-waiver requests reviewed and acted on within 30 days (U.S.) / 60 days (outside U.S. or RC not on active duty); waiver requests must reach the appropriate office (BUPERS-3) within 30/60 days and receive final action within 60 days of receipt. Decision letters issue from CNP / BUPERS-3 to the applicant's chain of command. Navy accommodations are enduring and follow the member." },
            { title: "Department of the Navy (legacy instruction)", text: "SECNAVINST 1730.8B CH-1 prints older clocks (CO-level decisions within 1 week absent unusual circumstances; headquarters-level within 30 days U.S. / 60 days other cases; appeal decisions 30/60 days)." },
          ],
          flags: [
            "Where 1730.8B (basic instruction dated 2 October 2008; references predate the 2020 DoDI) and DoDI 1300.17 (2020) differ, the DoDI clock prints as controlling and the 1730.8B clock as the Department's older published figure — they are not merged.",
            "Navy carve-out (live): the MyNavyHR FAQ's timelines do not apply to resubmissions of facial-hair grooming requests, because the Secretary of War directed a reevaluation of all approved facial-hair accommodations requiring affected Sailors to submit new packages — printed as the FAQ states it; check the FAQ for the current posture.",
          ],
          links: [],
          source: "DoDI 1300.17 §3.2.c + Table 1; MyNavyHR FAQ; SECNAVINST 1730.8B CH-1",
        },
        {
          id: "chap-acc-routes",
          name: "Per-service implementing routes — Army tiers, Navy, MCO 1730.9, DAFI 52-201, Coast Guard",
          summary:
            "Service accommodation routes search terms: AR 600-20 5-6, MCO 1730.9, NAVMC 10274, DAFI 52-201, GM2026-01, COMDTINST 1730.4D. Army — AR 600-20 ¶5-6 and its appendix; Marine Corps — MCO 1730.9 (12 July 2021), package on NAVMC 10274; DAF — DAFI 52-201 as updated by Guidance Memorandum GM2026-01 (14 May 2026); Coast Guard — COMDTINST 1730.4D + the DON framework.",
          who: "Members filing in their own service — the routes differ; use yours.",
          body: [],
          bullets: [
            { title: "Army — five categories, four decision tiers", text: "Categories (AR 600-20 ¶5-6): worship practices; dietary practices; medical care (including immunizations); wear and appearance of the uniform; personal appearance and grooming. Tiers (Army IG guidance, IG Update 25-5, August 2025): NONE — no waiver or command approval needed for items AR 670-1 already permits (examples: religious bracelets, kufi, yarmulke); UNIT COMMANDER — routine requests (worship, dietary) requiring command approval but no waiver; GCMCA — uniform and grooming waivers issued under AR 600-20 / AR 670-1 (examples: hijabs, beards, turbans); HQDA — boards, immunizations, beard length exceeding two inches, uncut hair, Jewish payots (sidelocks), head coverings exceeding AR 670-1. The Surgeon General is the decision authority for immunization exemptions. The packet for a uniform/grooming request includes the chain of command's recommendations, the member's request, a legal review, and a chaplain's interview; appeals of denials go by memorandum through the chain to DCS, G-1." },
            { title: "Navy — SECNAVINST 1730.8B CH-1 + BUPERSINST 1730.11 series + MyNavyHR FAQ", text: "DON accommodates doctrinal or traditional observances when they will not adversely impact readiness, cohesion, health, safety, discipline, or mission accomplishment; accommodation “cannot be guaranteed at all times and is subject to military necessity.” Head coverings, dietary practices, and worship/holy-day observances are adjudicated at CO level when the command recommends approval; denial recommendations route to the Religious Accommodation adjudication process (RAPT per the FAQ) and waiver-level decisions issue from CNP/BUPERS-3. Commanders must obtain the advice of a judge advocate and a chaplain before acting on a request involving a waiver of Navy policy." },
            { title: "Marine Corps — MCO 1730.9, the five published steps", text: "(1) Meet your unit chaplain. (2) Complete the chaplain interview required by MCO 1730.9 — and remember: this interview is administrative, not privileged (the Confidentiality tile). (3) A letter from your religious organization may be required. (4) The chaplain completes a Memorandum for the Record; the package (submitted on NAVMC 10274, Administrative Action form, stating the nature of the accommodation, its duration, and the religious / sincerely-held basis with the faith group or belief system identified) is routed to the appropriate command level. (5) The decision returns through the chain of command. The MCO's standard: the Corps will accommodate requests that do not adversely affect mission accomplishment, and a denial requires the Adjudication Authority to determine the compelling-government-interest / least-restrictive-means test." },
            { title: "Air Force / Space Force — DAFI 52-201 + DAFI 36-2903", text: "DAFI 52-201 ¶2.3: “The Department of the Air Force will approve a member's request for religious accommodation unless the request would have a real (not theoretical) adverse impact on military readiness, unit cohesion, good order, discipline, health or safety.” Dress-and-appearance approvals (DAFI 36-2903, 29 February 2024, Ch. 11 + Att. 8): wing commanders (home station) or HAF / MAJCOM / FIELDCOM / NAF / FOA / DRU directors (O-6/GS-15 and above) approve four dress categories only — hijab; beard; indoor/outdoor head coverings; turban or under-turban/patka with unshorn beard and unshorn hair. All other dress-and-appearance requests require an AF/A1 decision. Approved accommodations are worn “neat and conservative” (¶11.4). Guardians are covered by this same DAF framework." },
            { title: "Coast Guard — COMDTINST 1730.4D + the DON framework", text: "The Coast Guard's religious-ministry instruction is COMDTINST 1730.4D (6 June 2024); its published references include DoDI 1300.17 and SECNAVINST 1730.8 (series) for accommodation, and the CG Auxiliary Chaplain Support Program Guide states it directly: “The guiding document for Religious Accommodation is the Department of the Navy's SECNAVINST 1730.8.” The route: the DoDI 1300.17 framework + COMDTINST 1730.4D + SECNAVINST 1730.8 series guidance, worked through your command and your (Navy) chaplain. Uniform-side stance as published: the Coast Guard approves accommodation requests unless the accommodation will adversely impact unit readiness, individual readiness, unit cohesion, morale, good order, discipline, safety, and/or health." },
          ],
          flags: [
            "MAJOR 2026 CHANGE (DAF), printed with its date: DAF Guidance Memorandum GM2026-01 (14 May 2026) updated DAFI 52-201. It eliminates Religious Resolution Teams (commanders now take chaplain, legal, and subject-matter-expert input directly, with no formal board); requires a sworn written attestation that the belief is sincerely held and religious in nature; chaplains no longer assess sincerity or comment on operational impacts — chaplains advise the chain exclusively on the religious nature of the belief; decision authority for facial-hair requests moved to AF/A1 (Air Force) and the Deputy Chief of Space Operations for Personnel (Space Force); previously approved facial-hair accommodations are being re-evaluated under the Secretary of War's 11 March 2026 criteria; and a written Record of Decision is required for every request. Where the 2024 DAFI 36-2903 attachment and GM2026-01 differ on facial hair, GM2026-01 is later and controls.",
            "Army appendix letter conflict: the TJAG overview and older materials cite AR 600-20 Appendix P for the accommodation process; the August 2025 IG Update cites “para 5-6 and Appendix G.” The appendix letter changed between editions — this card prints “AR 600-20 ¶5-6 and its accommodation appendix (Appendix G in the current IG guidance).” Army Directive 2025-13 / HQDA EXORD 263-25 also changed Army facial-hair handling in 2025 — see current Army Directive 2025-13 guidance rather than older pages.",
            "Not verified, excluded: a 2025-era standalone Coast Guard accommodation instruction (COMDTINST 1000.15) was mentioned in a non-official summary as signed but “not posted online.” It could not be confirmed on any official page — it does not print. Immunization appeals in the older DAF process ran to the AF Surgeon General (pre-GM2026-01) — not printed until re-verified against the current DAFI 52-201 as amended.",
            "USMC timeline caution: specific USMC clocks circulating in non-official summaries trace to SECNAVINST 1730.8B's older published clocks, not to a separately verified MCO 1730.9 timeline. The DoDI Table 1 clocks (timelines entry) print for Marines, labeled as the DoDI's.",
          ],
          links: [],
          source: "AR 600-20 ¶5-6 + IG Update 25-5; SECNAVINST 1730.8B; MCO 1730.9; DAFI 52-201 + GM2026-01; COMDTINST 1730.4D",
        },
        {
          id: "chap-acc-appeals",
          name: "Appeals — named at published level only",
          summary:
            "Accommodation appeal search terms: appeal a denied accommodation, no further appeal secretary. DoDI 1300.17 §3.2.f (all services): every implementing regulation must provide an appeal process; the appeal goes to an official above the one who took final action; there is no further administrative appeal from a decision by the Secretary of the Military Department. That is the whole published frame — it prints here and stops there.",
          who: "Members whose request was disapproved, at the level the instructions themselves publish.",
          body: [],
          bullets: [
            { title: "Army", text: "Appeal by memorandum through the chain of command to DCS, G-1 (final authority; army.mil accommodation coverage and AR 600-20 ¶5-6 pattern)." },
            { title: "Navy", text: "“In the event of a disapproved application, applicants may submit an appeal” (MyNavyHR FAQ)." },
          ],
          flags: ["Nothing further prints: no appeal drafting help, no odds, no legal strategy — that is legal advice and it is excluded by design (Know Your Rights names the legal-assistance route)."],
          links: [],
          source: "DoDI 1300.17 §3.2.f; service pages as noted",
        },
        {
          id: "chap-acc-examples",
          name: "Examples — only where official pages themselves use them",
          summary:
            "Accommodation examples search terms: Sikh turban beard, hijab, yarmulke payots, peyote DoDI. Each example below is one a service published about itself, dated. Nothing is generalized from them.",
          who: "Members and applicants who want to see the categories in the services' own published examples — printed as categories and dated official actions, not as promises.",
          body: [],
          bullets: [
            { title: "Sikh — Army (official)", text: "Army Directive 2017-03 (3 January 2017): requests to wear a turban, under-turban, hijab, or beard for religious reasons became approvable at brigade level, the request is made once, and the accommodation is permanent for the Soldier's entire Army career; beards must roll/compress to under two inches from the bottom of the chin. Earlier individual grants the Army itself publicized: Capt. (Dr.) Kamaljeet Singh Kalsi and Capt. (Dr.) Tejdeep Singh Rattan (2010) and Spc. Simran Preet Singh Lamba (army.mil, 2010–2011)." },
            { title: "Sikh — Air Force ROTC (official)", text: "AFROTC granted religious accommodations to its first Sikh cadet, Cadet Gursharan Virk (Detachment 255, University of Iowa): turban, uncut beard, and Sikh ceremonial accessories in uniform; approved December 2021 by AETC's Manpower, Personnel and Services office (Maxwell AFB official release). The release's routing line: “Airmen can seek guidance or clarification on any religious freedom or accommodation questions through their chain of command, wing chaplain or Equal Opportunity Office.”" },
            { title: "Muslim — hijab (official)", text: "The hijab is an expressly named, approved-category item in the services' own publications: Army Directive 2017-03 covered the hijab alongside turbans and beards; DAFI 36-2903 publishes a Figure 11.1 Hijab wear illustration and names the hijab first among the wing-commander-approvable categories; the Army IG's tier table lists hijabs among GCMCA-issued uniform/grooming waivers. No individual Muslim member's case was published in the sources read, so none is narrated." },
            { title: "Jewish — yarmulke, payots, tallit (official)", text: "The Army IG Update lists yarmulke (and kufi) among items AR 670-1 already permits with no waiver or command approval required, and Jewish payots (sidelocks) among the items decided at HQDA level. DAF's own toolkit figure set includes Yarmulke and Tallit among its religious-apparel examples. Printed as categories, not case stories." },
            { title: "Native American — peyote (official, from the instruction itself)", text: "DoDI 1300.17 §3.4 is devoted to it: under the American Indian Religious Freedom Act Amendments of 1994 (42 U.S.C. §1996a), members of Indian tribes as defined in that statute may use, possess, or transport peyote as a religious sacrament in connection with the bona fide practice of a traditional Indian religion and “will not be penalized or discriminated against” for it — subject to published limits (not on duty or within 24 hours before scheduled duty; not aboard military vehicles/vessels/aircraft or, except as the installation commander permits, on installations; amulet form may be worn as religious apparel subject to uniform regulations; prompt notification to the commander on return to duty, with tribal-membership documentation). Requests involving any other prohibited substance go to the Secretary of the Military Department, who must notify ASD(M&RA) before final action (§3.4.b)." },
          ],
          flags: [],
          links: [],
          source: "Army Directive 2017-03; Maxwell AFB release; DAFI 36-2903; DoDI 1300.17 §3.4",
        },
      ],
    },
    {
      key: "faith",
      label: "Faith Diversity",
      tileSub: "Entries 4.1–4.3 · provide / facilitate / care for all, endorsement, finding worship",
      intro:
        "“Provide for our own, facilitate for others, care for all” — the Navy Chaplain Corps' published summary of the job, which every service's corps states in its own words. No doctrine for any tradition prints anywhere in this section; the system is what is documented.",
      entries: [
        {
          id: "chap-faith-provide",
          name: "“Provide for our own, facilitate for others, care for all”",
          summary:
            "Chaplain duties search terms: provide facilitate care for all, do I have to be religious to see a chaplain. Provide — a chaplain provides religious ministry for their own faith tradition. Facilitate — for everyone else's tradition, the chaplain's job is to identify the need and coordinate support. Care for all — “regardless of an individual's beliefs.” Marine unit pages say it directly: “You do not have to be religious to speak with a chaplain.”",
          who: "Everyone — including members of no faith tradition.",
          body: [],
          bullets: [
            { title: "Provide", text: "A chaplain provides religious ministry for their own faith tradition: worship services, religious education, weddings, funerals, rites and rituals (Coast Guard District 8 chaplain page, stating the Navy Chaplain Corps mission the CG's detailed Navy chaplains serve under)." },
            { title: "Facilitate", text: "For everyone else's tradition, the chaplain's job is to identify the need and coordinate support from other chaplains, civilian clergy, and lay leaders. NAS Pensacola's Religious Programs page answers “What if there is no Chaplain from my faith group on staff?” with exactly this: the office holds information on civilian faith groups and “will gladly assist you in either obtaining information or making contact with a representative of your faith.”" },
            { title: "Care for all", text: "“Caring for our people with dignity, respect and compassion, regardless of an individual's beliefs, and making informed and professional referrals” (District 8 page). The OCS chaplain page: caring for all “whether religious or not.” The Army's corps page (and Beale AFB's AF version for DAF): chaplain corps are “multicultural and multidenominational,” focused on free exercise for members, families, and other authorized personnel." },
            { title: "Scale, as the Army publishes it", text: "The Army Chaplain Corps “represents 110 faith groups” through over 3,000 chaplains and 3,000 Religious Affairs Specialists across active duty, Reserve, and National Guard (army.mil, Chaplain Corps 251st birthday coverage, July 2026). Printed as the Army's figure for the Army — not presented as a DoD-wide count." },
          ],
          flags: [],
          links: [],
          source: "Navy Chaplain Corps mission pages; service corps pages",
        },
        {
          id: "chap-faith-endorsement",
          name: "Every chaplain is endorsed — the endorsing-agents directory",
          summary:
            "Endorsement search terms: ecclesiastical endorsement, endorsing agents, who endorses chaplains. A military chaplain serves as clergy of their own faith organization while wearing the uniform: appointment requires an ecclesiastical endorsement from a DoD-recognized religious organization (DoDI 1304.28 governs chaplain appointment). The Armed Forces Chaplains Board publishes the official Ecclesiastical Endorsing Agents list.",
          who: "Anyone who wants to understand why the corps are deliberately multi-faith.",
          body: [
            "The list as published spans, among many others: the American Muslim Armed Forces and Veterans Affairs Council and a Muslim Endorsement Council; the National Jewish Welfare Board (JWB) and the Central Conference of American Rabbis (via JWB); the Assembly of Canonical Orthodox Bishops; the Evangelical Lutheran Church in America; the Salvation Army; the Seventh-day Adventists, North American Division; and dozens of Christian bodies of every tradition. This section prints the concept and the route — “every chaplain is endorsed by a faith organization; the official list of endorsers is maintained by the Armed Forces Chaplains Board” — and does not reproduce the directory: it changes, and reproducing a partial directory would read as the app ranking faiths.",
          ],
          flags: ["The endorsers' June 2026 joint letter about the affiliation-code revision (the preference entry in this section) incidentally confirms the breadth — its signatories include endorsers for the Unitarian Universalist Association and Circle Sanctuary alongside mainline Christian bodies. The letter is an endorsers' publication, not a DoD source; it is cited only as evidence the endorser community spans those traditions, not for any policy claim."],
          links: [],
          source: "DoDI 1304.28; Armed Forces Chaplains Board — Ecclesiastical Endorsing Agents",
        },
        {
          id: "chap-faith-worship",
          name: "Finding worship and services where you are — the installation is the finder",
          summary:
            "Worship finder search terms: chapel service times, on-base religious services, lay leaders. Installation level is where services are actually published: chapel and Religious Programs pages on the installation sites publish the current service schedule, the faith groups meeting on base, and the off-base referral lists. The route is My Installation → chapel/chaplain listing → that installation's services page.",
          who: "Members and families at a new installation — no service-times database is built here; times change and the installation page is the source.",
          body: [
            "MilitaryINSTALLATIONS (the official directory My Installation is built on) carries the chapel/religious-services listing per installation — the worship finder is the installation object, not a separate app database. Lay leaders are the published mechanism where no chaplain of a tradition is present: commanders may appoint lay leaders to conduct services in a chaplain's absence (MILPERSMAN 1730-010, “Use of Lay Leaders in Religious Services,” is the Navy reference). The limit from the Confidentiality tile applies: lay leaders are not holders of confidential-communication protection.",
          ],
          flags: [],
          links: [],
          source: "Installation chapel pages; MilitaryINSTALLATIONS; MILPERSMAN 1730-010",
        },
      ],
    },
    {
      key: "roles-record",
      label: "More Roles & Your Record",
      tileSub: "Entries 5–6 · advisement and non-combatants, CREDO, preference field vs. accommodation",
      intro:
        "Why the chaplain also appears in command contexts, and the crisp distinction this section most often has to undo: a religious preference in your record is a data field — an accommodation is a separate request.",
      entries: [
        {
          id: "chap-roles",
          name: "Chaplains in the other direction — advisement, non-combatants, CREDO",
          summary:
            "Chaplain adviser search terms: chaplain advises commander, chaplain noncombatant, CREDO retreats. Advising the command on religion, ethics, morale, and religious accommodation is a core capability of every corps (10 U.S.C. §8067(h) for DAF; the Navy corps' Provide/Facilitate/Care/Advise framing). A chaplain advising a commander about a unit's religious needs is not a breach of anyone's confidence — privileged communications stay privileged; advisement works from what the chaplain observes and is told in their advisory role.",
          who: "Members who see the chaplain in command contexts and wonder what carries over — nothing from a counseling session does.",
          body: [
            "Chaplains are non-combatants and do not bear arms (a standing fact on corps pages; the enlisted member of the ministry team is the armed member of the pair). CREDO (Chaplains Religious Enrichment Development Operation) is the Navy/USMC retreat and workshop program run by chaplains since 1971 — marriage enrichment and personal resilience retreats, free, published on CNIC and USMC pages; route via your installation. CREDO is a program listing, not a counseling channel, and it does not change the confidentiality analysis either way.",
          ],
          flags: [],
          links: [],
          source: "Service chaplain-corps pages; CNIC/USMC CREDO pages",
        },
        {
          id: "chap-preference",
          name: "Your religious preference in your record is a data field — accommodation is a separate request",
          summary:
            "Religious preference search terms: change religious preference, MOL religious preference, affiliation codes. Your personnel record carries a religious preference / religious affiliation value. It exists so the system knows, at the level of a record, what tradition — if any — you identify with. Changing it is an administrative record update through your service's personnel system (for Marines, Marine Online (MOL)). No commander approves or denies a preference change, because there is nothing to adjudicate: it is your data.",
          who: "Every member — and anyone who has confused the preference field with an accommodation.",
          body: [
            "The preference drives things like the faith group printed for casualty and graves-registration purposes and the chaplain support offered to you and your family. The value is picked from the DoD Religious Affiliation Codes list administered under the Secretary of War / Armed Forces Chaplains Board. The mechanics of record updates live in Records & DD214 and are cross-linked, not re-taught here.",
            "An accommodation is not a record update. A religious accommodation (the Accommodation tile) is a written request through your chain of command to be excused from a specific policy, practice, or duty — uniform, grooming, medical, schedule, diet — decided under the DoDI 1300.17 test. Having a preference recorded does not grant any accommodation; having an accommodation approved does not require any particular preference value beyond the sincerely-held belief the request itself states. The two meet in exactly one place: the accommodation interview and package are worked with your chaplain, and the preference field is how a chaplain who doesn't know you yet first learns what tradition to facilitate for.",
          ],
          flags: [
            "The code list behind the field changes over time: the Department of the Air Force's 2026 guidance announcements include Religious Affiliation Code updates — the pick-list itself was revised in 2026. Only that prints: a member whose tradition no longer appears under its old name should ask their personnel office or chaplain how it is currently recorded. The details of the revision were publicly contested by endorsing organizations in June 2026; this app takes no position on it.",
          ],
          links: [],
          source: "DoD Religious Affiliation Codes (Armed Forces Chaplains Board); service personnel systems",
        },
      ],
    },
  ],
};

/** Future track: the joining-relevant tile only — Religious
 * Accommodation, carrying the DoDI §3.2.i preaccession right. */
export const CHAPLAINS_FUTURE_SECTION: PackSection = {
  ...CHAPLAINS_SECTION,
  headSub:
    "For future members: the religious-accommodation framework that applies to you before you join — DoDI 1300.17 §3.2.i gives applicants the opportunity to submit a request and receive a final decision before participating. The rest of Chaplains & Religious Life opens on a member or spouse profile.",
  intro:
    "Applicants (commissioning, warrant, enlistment/reentry, academy and ROTC enrollment, scholarship programs) must be informed of the accommodation policies and given the opportunity to submit a request and receive a final decision before participating (DoDI 1300.17 §3.2.i). This tile is the whole framework as it will apply to you; the section's remaining tiles — Confidentiality, Find a Chaplain, Faith Diversity, More Roles & Your Record — open once you are in.",
  tiles: CHAPLAINS_SECTION.tiles.filter((t) => t.key === "accommodation"),
};
