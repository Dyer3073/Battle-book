// Official Channels — transcribed from the researched pack
// (~/workspace/military-app/channels/channels.md, researched Nov 9,
// 2026). The pack is the content source of truth: 22 entries in four
// parts (IG 5, EO/MEO + EEO 8, SAPR 6, Congressional 3), its standing
// line and its SAPR safety line ship verbatim, the DoDI 1020.03 /
// 1350.02 definitions print as quoted/structured renderings — never
// paraphrased — and every ⚠ flag prints in place. BINDING NUMBER
// RULE: the DoD Safe Helpline prints ONLY as 877-995-5247 (pack flag
// F-9: a USMC page prints it transposed; the transposed variant
// appears nowhere in this module). EEO stays SEPARATE from EO/MEO —
// different system, different clock (45-day counselor contact).
// Placement: members and spouses in full (IG intake is open to family
// members and SAPR covers adult dependents, per the pack); future
// members see a locked card only — no joining-relevant card exists in
// this pack.

import type { PackSection } from "./seven";

export const CHANNELS_SECTION: PackSection = {
  view: "channels",
  title: "Official Channels",
  headSub:
    "When something's wrong: the four doors that exist because four different kinds of problems exist — the Inspector General, EO/MEO and civilian EEO, SAPR/SHARP, and a congressional inquiry — each explained as the office that runs it describes it.",
  intro:
    "Four different doors exist because four different kinds of problems exist. The Inspector General is the fact-finder for fraud, waste, abuse, and wrongs that don't fit another system — and for reprisal after you used a protected channel. MEO/EO owns discrimination and harassment complaints for uniformed members; EEO is the separate civilian-employee system. SAPR/SHARP owns sexual-assault response, and it is the only door here where you control whether an investigation starts (Restricted vs. Unrestricted Reporting). A congressional inquiry is your protected right to ask your Member of Congress to make an agency explain itself — it guarantees a review and a response, not a result.",
  standing:
    "This section explains the official channels that exist and how each one works, as the offices that run them describe them. It is general information, not legal advice, and filing through any channel is your decision. If you are in immediate danger, call 911 or your local emergency number first — none of these channels is an emergency service.",
  tiles: [
    {
      key: "ig",
      label: "Inspector General",
      tileSub: "Entries 1.1–1.5 · fact-finding, the Hotline, § 1034 reprisal",
      intro:
        "The IG system as the IG offices describe it: what an IG is, what the DoD Hotline takes (and does not), how to file with your service IG, and the Military Whistleblower Protection Act — 10 U.S.C. § 1034 — with its one-year reprisal window.",
      entries: [
        {
          id: "ig-four-functions",
          name: "What an Inspector General is — and the four functions",
          summary:
            "IG search terms: inspector general, IG complaint, what does the IG do, eyes and ears of the commander. Military IGs describe themselves — in the Army IG's published formulation used across the system — as an extension of their commander's “eyes, ears, voice, and conscience”: a confidential advisor to the commander and a fair and impartial fact finder performing four core functions.",
          who: "Anyone — service members, DoD civilians, family members, retirees, and contractors may contact an IG.",
          body: [
            "Above the command level sits the DoD Inspector General (DoDIG), the Department's independent watchdog under the Inspector General Act, whose Hotline is the DoD-wide intake for fraud, waste, and abuse. Two limits the IG system states about itself, printed on official IG pages: IGs can recommend, not order — “an IG can only recommend, not order a resolution. Only Commanders can order; the role of the IG is to advise the Commander” — and IG confidentiality is best-effort, not absolute: IGs do everything possible to protect it, but disclosure of some information may be unavoidable to properly handle a case.",
          ],
          bullets: [
            { title: "Assistance", text: "“An informal fact-finding process used to address a complaint involving a request for assistance or a request for information.” IGs encourage personnel to let their chain of command solve problems at the lowest level first." },
            { title: "Investigations", text: "“A fact-finding examination into allegations of impropriety or an adverse condition” affecting the command — violations of law, policy, or ethical standards, including fraud, waste, abuse, and mismanagement." },
            { title: "Inspections", text: "Assessments of a command's economy, efficiency, discipline, morale, training, and readiness, meant to assist and enhance the command's ability to perform its mission." },
            { title: "Teaching and Training", text: "While inspecting, assisting, or investigating, IGs teach and train others in policy and procedures." },
          ],
          flags: [],
          links: [
            { label: "DoD Hotline — Read Before Filing", url: "https://www.dodig.mil/Components/Administrative-Investigations/DoD-Hotline/Read-Before-Filing/" },
            { label: "USFK Inspector General (four functions)", url: "https://www.usfk.mil/About/USFK/Organization/Special-Staff/Inspector-General/" },
          ],
          source: "DoD OIG / service IG offices (Army IG formulation)",
        },
        {
          id: "ig-hotline-scope",
          name: "What the DoD Hotline takes — and what it does not",
          summary:
            "DoD Hotline search terms: DoD hotline, report fraud waste abuse, 1-800-424-9098. The Hotline's published categories include threats to homeland security, health and safety issues, trafficking in persons, leaks of classified information, bribery, counterfeit parts, whistleblower reprisals, conflicts of interest, contract and procurement fraud, computer crimes, health-care fraud, and travel or purchase-card fraud — and DoDIG prints its own routing honesty about when the Hotline is not the fastest door.",
          who: "Anyone reporting fraud, waste, abuse, or reprisal at DoD level — read the routing notes before filing.",
          body: [
            "Filing routes: the online webform (DoDIG's stated best practice: be clear and concise, limit acronyms, attachments ≤ 5 MB, most relevant documents only); phone 1-800-424-9098 (also the number to call if the online submission fails); or mail: DoD Hotline, The Pentagon, Washington, DC 20301-1900. Never send classified information over the unclassified phone lines, mail, or webform — DoDIG maintains a separate classified-complaint route. Complaints may be submitted anonymously, and disclosure is voluntary.",
          ],
          bullets: [
            { title: "DoDIG's own routing honesty", text: "“The majority of fraud, waste, and abuse should be reported to your chain of command or your local/command Inspector General.”" },
            { title: "Expeditious route", text: "You may contact the DoD Hotline at any time, but “a more expeditious route towards resolution of your problem might best be served by first contacting your local or command-level Inspector General's office.”" },
            { title: "No guaranteed investigation", text: "“No one is guaranteed an investigation.” The DoD OIG may decline matters outside its purview." },
            { title: "No pause button", text: "“A complaint lodged with the DoD Hotline will not stop any impending action against you.”" },
            { title: "Not an emergency line", text: "The Hotline “is not equipped or staffed to handle immediate 911-type emergencies.”" },
          ],
          flags: [],
          links: [
            { label: "DoD Hotline — Read Before Filing", url: "https://www.dodig.mil/Components/Administrative-Investigations/DoD-Hotline/Read-Before-Filing/" },
            { label: "DoD Hotline FAQs", url: "https://www.dodig.mil/Components/Administrative-Investigations/DoD-Hotline/Hotline-FAQs/" },
          ],
          source: "DoD OIG Hotline pages (dodig.mil)",
        },
        {
          id: "ig-service-filing",
          name: "How to file with your service IG — the hotline table",
          summary:
            "Service IG search terms: Army IG number, Navy IG hotline, IGMC, Air Force IG, DA Form 1559. Start with your local/command IG; every service also maintains a service-level IG hotline and an online or form-based intake. The Army's form is DA Form 1559, Inspector General Action Request; joint commands may use DD Form 2949.",
          who: "Anyone filing at service level — Army guidance adds a timing norm: submit within 90 days of the date the alleged wrongdoing occurred.",
          body: [
            "The standard 4-step process the IG pages publish: (1) confirm the IG is the right channel, (2) check the service IG's common-complaints list for an existing grievance process, (3) be ready to provide facts, (4) contact the IG office. Every number in the table was confirmed on an official DoD/service page during research — the DoD OIG “Contact Us” page and the Department's IG listing agree.",
          ],
          bullets: [],
          tables: [
            {
              caption: "Service IG hotlines — as published",
              columns: ["Office", "Phone (as published)", "Notes"],
              rows: [
                ["DoD IG Hotline", "1-800-424-9098", "See the Hotline entry in this tile."],
                ["Army IG", "1-800-752-9747 (DSN 865-1845)", "Intake via DA Form 1559 / local IG."],
                ["Navy IG (NAVINSGEN)", "1-800-522-3451 (DSN 288-6842)", "NAVINSGEN has oversight of all Navy whistleblower reprisal/restriction complaints."],
                ["Marine Corps IG (IGMC)", "1-866-243-3887", "Service IG for the Marine Corps."],
                ["Air Force IG (also serves Space Force)", "1-800-538-8429 (DSN 425-8429)", "Department of the Air Force IG; Space Force uses the DAF IG system."],
                ["Coast Guard", "DHS OIG Hotline 1-800-323-8603", "The Coast Guard sits under DHS, not DoD; its whistleblower page routes members to the DHS IG."],
              ],
            },
          ],
          flags: [
            "F-1: Coast Guard IG intake runs through DHS OIG, not DoD — the number above is the DHS OIG hotline as printed on official CG/DHS materials; the CG-specific presentation is to be re-confirmed at build time.",
          ],
          links: [
            { label: "DoD OIG — Contact Us (service IG numbers)", url: "https://www.dodig.mil/About/Contact-Us/" },
            { label: "Naval Inspector General — Military Whistleblower Reprisals", url: "https://www.secnav.navy.mil/ig/Pages/militarywhistleblowerreprisals.aspx" },
            { label: "Air Force Inspector General — Helping Agencies", url: "https://www.afinspectorgeneral.af.mil/Helping-Agencies/" },
          ],
          source: "DoD OIG Contact Us; service IG offices",
        },
        {
          id: "ig-1034-reprisal",
          name: "Protected communication and reprisal — 10 U.S.C. § 1034 (one-year window)",
          summary:
            "Whistleblower search terms: 1034, military whistleblower protection, reprisal complaint deadline, protected communication. The Military Whistleblower Protection Act prohibits any person from taking, withholding, or threatening any personnel action against a member of the Armed Forces as reprisal for making or preparing a protected communication — and reprisal complaints must be submitted to an Inspector General within 1 year of when you became aware of the personnel action.",
          who: "Members of the Armed Forces — the Coast Guard's page expressly notes the protections include uniformed members of the Coast Guard.",
          body: [
            "A protected communication is any lawful communication to a Member of Congress or an Inspector General, as well as communications to persons or organizations designated by regulation to receive them, which a member reasonably believes reports a violation of law or regulation (the statutory definition continues to gross mismanagement, gross waste, abuse of authority, and threats to public health/safety). Naval IG's formulation of the first rule: “No person shall restrict a member of the Armed Forces from making lawful communications to a member of Congress or an Inspector General.” Restriction (stopping you from communicating) and reprisal (punishing you afterward) are the Act's two distinct violations.",
            "Filing a reprisal complaint — the window, confirmed identically on the Naval IG page and the Coast Guard's official MWPA page: reprisal complaints must be submitted to an Inspector General within 1 year — file within one (1) year after the date on which you became aware of the personnel action that is the subject of the allegation. Restriction complaints have no time limitation (NAVINSGEN, verbatim: “There are no time limitations for restriction complaints.”). File with your service IG or the DoD IG; CG members report MWPA violations to the DHS IG Hotline, 1-800-323-8603, or by mail/fax/email to DHS OIG as the CG page publishes. Implementation: DoD Directive 7050.06 for DoD; 33 C.F.R. Part 53 for the Coast Guard.",
          ],
          flags: [
            "F-2: the one-year window is printed in its awareness-based form (the CG/statutory framing). NAVINSGEN's shorter formulation (“within 1-year of the incident”) also exists on an official page; both pages are cited on this card.",
          ],
          links: [
            { label: "Coast Guard — Military Whistleblower Protection Act", url: "https://www.mycg.uscg.mil/MilitaryWhistlerBlowerProtectionAct/" },
            { label: "Naval Inspector General — Military Whistleblower Reprisals", url: "https://www.secnav.navy.mil/ig/Pages/militarywhistleblowerreprisals.aspx" },
          ],
          source: "10 U.S.C. § 1034; DoDD 7050.06; NAVINSGEN and USCG MWPA pages",
        },
        {
          id: "ig-not-first-stop",
          name: "The IG is not the first stop for everything — the router",
          summary:
            "IG routing search terms: is this an IG complaint, wrong channel, where do I report discrimination, sexual assault, crime. The IG system's own pages route whole categories elsewhere, because those categories have their own mandated systems: the IG process “does not generally address issues covered by other grievance channels unless those avenues were improperly administered.”",
          who: "Everyone — read before filing anywhere in this section; this entry is the router for the whole section.",
          body: [],
          bullets: [
            { title: "Discrimination / harassment based on protected categories", text: "MEO (military) or EEO (civilian) — the EO/MEO & EEO tile in this section. Installation IG pages print this routing directly." },
            { title: "Sexual assault", text: "SAPR/SHARP and the military criminal investigative organizations — the SAPR tile in this section. IGs exercise oversight; they are not the reporting channel for an assault." },
            { title: "Criminal conduct", text: "Military criminal investigative organizations (CID, NCIS, OSI, CGIS) / law enforcement." },
            { title: "Pay, evaluations, and other matters with an established appeal system", text: "That appeal system first; IG pages expressly note matters with specific grievance or appeal channels are generally not IG matters." },
            { title: "Your chain of command", text: "Remains the first stop for most assistance requests — IGs themselves “encourage personnel to allow their chain of command to solve problems at the lowest level.”" },
          ],
          flags: [],
          links: [
            { label: "DoD Hotline FAQs", url: "https://www.dodig.mil/Components/Administrative-Investigations/DoD-Hotline/Hotline-FAQs/" },
          ],
          source: "DoD Hotline FAQs; service IG pages",
        },
      ],
    },
    {
      key: "eomeo",
      label: "EO / MEO & Civilian EEO",
      tileSub: "Entries 2.1–2.8 · definitions verbatim, per-service processes, the separate EEO system",
      intro:
        "Two systems that are routinely confused, kept separate here as the services print them: MEO is the military complaint system for uniformed members; civilian EEO (29 C.F.R. Part 1614) is a different system for DoD civilian employees, former employees, and applicants — with its own 45-day counselor-contact clock. The definitions below print verbatim from DoDI 1020.03 and DoDI 1350.02, not paraphrased.",
      entries: [
        {
          id: "eo-definitions",
          name: "The definitions — quoted from DoDI 1020.03 and DoDI 1350.02, not paraphrased",
          summary:
            "Definition search terms: harassment definition, discriminatory harassment, sexual harassment definition, prohibited discrimination. These are the DoD-level definitions every service process in this tile uses, printed as the instructions state them, attributed to DoDI 1020.03 and DoDI 1350.02.",
          who: "Everyone in this tile — the definitions control what the complaint systems below cover.",
          body: [
            "Harassment (DoDI 1020.03): “Behavior that is unwelcome or offensive to a reasonable person, whether oral, written, or physical, that creates an intimidating, hostile, or offensive environment.” The instruction adds that harassment can occur through electronic communications including social media; may include “offensive jokes, epithets, ridicule or mockery, insults or put-downs, displays of offensive objects or imagery, stereotyping, intimidating acts, veiled threats of violence, threatening or provoking remarks, racial or other slurs, derogatory remarks about a person's accent, or displays of racially offensive symbols”; and that “activities or actions undertaken for a proper military or governmental purpose, such as combat survival training, are not considered harassment.”",
            "Discriminatory harassment (DoDI 1020.03): “A form of harassment that is unwelcome conduct based on race, color, religion, sex (including gender identity), national origin, or sexual orientation.”",
            "Sexual harassment (DoDI 1020.03 § 3.3, structure): conduct that (1) involves unwelcome sexual advances, requests for sexual favors, and deliberate or repeated offensive comments or gestures of a sexual nature when: submission is made a term or condition of a person's job, pay, or career (explicitly or implicitly); submission to or rejection of the conduct is used as a basis for career or employment decisions; the conduct has the purpose or effect of unreasonably interfering with an individual's work performance or creates an intimidating, hostile, or offensive working environment; the conduct is so severe or pervasive that a reasonable person would perceive, and the victim does perceive, the environment as hostile or offensive; or such conduct is used or condoned by a person in a supervisory or command position to control, influence, or affect the career, pay, or job of a member or DoD civilian employee.",
            "Prohibited discrimination (DoDI 1350.02): “Discrimination, including disparate treatment, of an individual or group on the basis of race, color, national origin, religion, sex (including pregnancy), gender identity, or sexual orientation that is not otherwise authorized by law or regulation and detracts from military readiness.”",
          ],
          flags: [
            "F-3: DEOMI guides reproducing DoDI 1020.03 also print a variant of the discriminatory-harassment basis list — “sex (including pregnancy), gender identity or sexual orientation.” The § 3.2 text above is what prints; the variant is flagged here, never merged into it.",
          ],
          links: [
            { label: "DEOMI Facilitation Guide (DoDI 1020.03 definitions)", url: "https://www.deomi.mil/Portals/90/Documents/Culture-Portal/Harassment%20Prevention/FGDE-Unwanted_Behavior-20240826.pdf" },
            { label: "DEOMI — USCG Race Discrimination guide", url: "https://www.deomi.mil/Portals/90/Documents/Culture-Portal/Harassment%20Prevention/FGDE-USCG_Race_Discrimination-20230724.pdf" },
          ],
          source: "DoDI 1020.03; DoDI 1350.02 (via DEOMI facilitation guides)",
        },
        {
          id: "meo-shared-shape",
          name: "MEO: the military system — the shared shape",
          summary:
            "MEO search terms: military equal opportunity, informal vs formal complaint, anonymous complaint, MEO reprisal. Under DoDI 1350.02, each service runs a Military Equal Opportunity complaint process for uniformed members alleging unlawful discrimination on the bases in the definitions entry, and harassment (including hazing, bullying, and discriminatory harassment — Army formulation). Every service's process has the same skeleton; the forms, windows, and timelines are service-specific (the entries below).",
          who: "Uniformed members (and, in the Army formulation, Soldiers and Family members may complain). Civilians do not use MEO — see the civilian EEO entry.",
          body: [],
          bullets: [
            { title: "Informal complaint", text: "Not in writing; may be resolved directly (complainant addresses the offending party, a peer, the chain of command, or the MEO professional). No sworn statement, lighter documentation." },
            { title: "Formal complaint", text: "Filed in writing on the service form and sworn to by the complainant; triggers regulatory timelines, a documented investigation, findings, and an appeal right." },
            { title: "Anonymous complaint", text: "Complainant unidentified; services that publish the category (Army expressly) handle it as either informal or formal depending on content." },
            { title: "Reprisal protection", text: "MEO complainants are protected from reprisal; the Army process includes a post-complaint MEO assessment specifically “to determine the effectiveness of any corrective actions taken and to detect and deter any incidents of reprisal.” Suspected reprisal for using MEO is also a § 1034 matter when the protected-communication elements are met (the IG tile)." },
          ],
          flags: [],
          links: [],
          source: "DoDI 1350.02; service MEO pages",
        },
        {
          id: "meo-army",
          name: "Army MEO (AR 600-20, Ch. 6) — DA Form 7279, 60-day formal window",
          summary:
            "Army EO search terms: DA Form 7279, Army MEO complaint, 60 days. The Army's published scope: “The MEO and Harassment complaint system addresses complaints that allege unlawful discrimination based on race, color, national origin, religion, sex, (to include gender identity and pregnancy), or sexual orientation, and harassment which includes hazing, bullying, online misconduct, and discriminatory harassment.”",
          who: "Soldiers and Family members, per the Army formulation.",
          body: [],
          bullets: [
            { title: "Informal", text: "Complainant does not wish to file in writing; may be resolved by the complainant, a peer, the MEO professional, or someone in or outside the chain of command; “should be resolved within 60 calendar days.”" },
            { title: "Formal", text: "Filed in writing on DA Form 7279, sworn; filed with the unit's MEO professional / lowest echelon of command. “Soldiers have 60 calendar days from the date of the alleged incident in which to file a formal complaint.” After 60 days, the commander may still investigate at discretion." },
            { title: "Processing timelines the Army publishes", text: "Complaints referred to the commander within 3 calendar days; commander/investigating officer has 30 calendar days to investigate and meet with the complainant on the outcome; appeal of findings by complainant or subject within 7 days after notification (per TJAGLCS policy summary of AR 600-20); MEO reprisal-effectiveness assessment within 30 days after the investigation." },
          ],
          flags: [],
          links: [
            { label: "Procedures for Processing MEO (Army enclosure)", url: "https://home.army.mil/monterey/6117/3222/3019/Enclosure_to_Command_Policy_2.pdf" },
            { label: "Fort Irwin MEO Office — complaint process", url: "https://home.army.mil/irwin/my-fort/all-services/army-community-service/meo-program" },
          ],
          source: "AR 600-20 Ch. 6; Army MEO pages",
        },
        {
          id: "meo-navy",
          name: "Navy CMEO (OPNAVINST 5354.1 series) — NAVPERS 5354/2 and the other doors",
          summary:
            "Navy EO search terms: CMEO, NAVPERS 5354/2, Article 1150, Article 138 complaint. The command's Command Climate Specialist (CCS) / Command Managed Equal Opportunity (CMEO) Program Manager is the point of contact “to provide information and assist you in resolving issues informally and when necessary, processing a complaint report.”",
          who: "Sailors — start with your command's CCS / CMEO Program Manager.",
          body: [],
          bullets: [
            { title: "NAVPERS 5354/2", text: "“Navy Equal Opportunity (EO) and Harassment Complaint Form (Rev 03-2025),” used “to process harassment and prohibited discrimination complaints within a command where the Commanding Officer is authorized to provide the requested remedy (redress).”" },
            { title: "NAVREGS Article 1150", text: "Redress of Wrong Committed by a Superior." },
            { title: "UCMJ Article 138", text: "Complaint of Wrongs against the commanding officer." },
          ],
          flags: [
            "F-4: Navy processing micro-timelines (24-hour forwarding, 72-hour investigation start, 20-day close-out rhythm) are widely published in Navy training materials but were not re-confirmed on a current MyNavyHR page during research — they are not printed here. The widely published 60-day window to file a formal complaint likewise needs confirmation against the current OPNAVINST 5354.1H text.",
          ],
          links: [
            { label: "MyNavyHR — Equal Opportunity: Resolving an Issue", url: "https://www.mynavyhr.navy.mil/Support-Services/Culture-Resilience/Equal-Opportunity/Resolving-an-Issue/" },
          ],
          source: "MyNavyHR CMEO pages; OPNAVINST 5354.1 series",
        },
        {
          id: "meo-usmc",
          name: "Marine Corps — Prohibited Activities and Conduct (MCO 5354.1 series), NAVMC 11512",
          summary:
            "USMC EO search terms: PAC, prohibited activities and conduct, NAVMC 11512, equal opportunity advisor, EOA. Marine Corps EO matters run through the Prohibited Activities and Conduct (PAC) program under the MCO 5354.1 series (current order in the 5354.1G lineage), using NAVMC Form 11512 and the command's Equal Opportunity Advisor (EOA).",
          who: "Marines — the door is your command EOA / installation Equal Opportunity office; program oversight sits with Manpower & Reserve Affairs (M&RA) on marines.mil.",
          body: [
            "The PAC umbrella covers prohibited discrimination and harassment alongside other prohibited conduct (e.g., hazing, bullying, extremist activity) as the order defines them.",
          ],
          flags: [
            "F-5: the current order's formal-complaint filing window and processing timelines were not confirmed on an official USMC page during research (secondary summaries commonly cite a 90-day window). No day count is printed here — the window is flagged for verification against the current MCO 5354.1 text.",
          ],
          links: [],
          source: "MCO 5354.1 series; USMC M&RA Military Equal Opportunity pages",
        },
        {
          id: "meo-daf",
          name: "Department of the Air Force MEO (DAFI 36-2710) — 90 duty days, hotline 1-888-231-4058",
          summary:
            "Air Force EO search terms: DAF EO complaint, Form 1587, unlawful discrimination hotline. Scope: prohibited discrimination, discriminatory harassment (including sexual harassment), and other harassment (bullying and hazing) against Active Duty Airmen and Guardians, USAFA cadets, and AFR/ANG members in Title 10 status, on the DoDI 1350.02/1020.03 bases. DAF Unlawful Discrimination and Harassment Hotline: 1-888-231-4058.",
          who: "Airmen and Guardians (and USAFA cadets; AFR/ANG in Title 10 status).",
          body: [],
          bullets: [
            { title: "Informal", text: "“While there is no time limit to file an informal complaint,” members are encouraged to file promptly. Intake on DAF Form 1587-1; facilitation is the only ADR method used for military members." },
            { title: "Formal", text: "Intake on DAF Form 1587; “Military member must elect to file a formal complaint with Equal Opportunity (EO) within 90 duty days after the alleged incident occurred unless the installation commander approves in writing to accept a formal complaint beyond the designated timeline for good cause.” Exception (verbatim from the flowchart): “There are no timeline requirements for military members to file a formal complaint of sexual harassment pursuant to the procedures in 10 USC § 1561.”" },
          ],
          flags: [
            "F-6 — policy in transition: DoD directed an overhaul of the MEO/EEO complaint processes in 2025, and DAF guidance memoranda adjusting formal-complaint handling issued through 2026 post-date the flowchart figures above. The figures print as the Feb 2026 DAF flowchart publishes them — confirm current timelines with your installation EO office.",
          ],
          links: [
            { label: "DAF MEO Complaint Process Flowcharts (Feb 2026)", url: "https://www.af.mil/Portals/1/documents/eeo/DAF%20MEO%20Complaint%20Process%20Flow%20Chart%20Feb%202026.pdf" },
            { label: "MacDill AFB Equal Opportunity Office", url: "https://www.macdill.af.mil/Units/Equal-Opportunity-Office/" },
          ],
          source: "DAFI 36-2710; DAF MEO flowcharts (Feb 2026)",
        },
        {
          id: "eeo-civilian",
          name: "Civilian EEO — the separate system (29 C.F.R. Part 1614): contact a counselor within 45 days",
          summary:
            "Civilian EEO search terms: EEO counselor 45 days, Part 1614, civilian discrimination complaint, 15 days formal. MEO is for military complaints. DoD civilian employees, former employees, and applicants use the federal EEO process — a different system, run by the installation/agency EEO office, not the chain of command's MEO program. Army and Air Force installation pages print the two side by side precisely so people stop mixing them up.",
          who: "DoD civilian employees, former employees, and applicants for federal employment.",
          body: [],
          steps: [
            "Pre-complaint: contact an EEO counselor within 45 calendar days of the alleged discriminatory act (or when you first became aware of it). Counseling and/or ADR/mediation is attempted.",
            "Formal complaint: if unresolved, after the final interview / notice of right to file, the formal complaint must be filed within 15 calendar days.",
            "After 180 days from filing a formal complaint without a final decision, the complainant may withdraw from the administrative process and file in federal district court (Army EEO page formulation); EEOC hearing and appeal rights attach as Part 1614 provides — route specifics to the servicing EEO office.",
          ],
          flags: [],
          links: [
            { label: "U.S. Army Garrison Hawaii EEO (both processes + timelines)", url: "https://home.army.mil/hawaii/garrison/eeo" },
            { label: "MacDill AFB EO Office (civilian EEO block)", url: "https://www.macdill.af.mil/Units/Equal-Opportunity-Office/" },
          ],
          source: "29 C.F.R. Part 1614, as published on service EEO pages",
        },
        {
          id: "eo-coast-guard",
          name: "Coast Guard — Civil Rights Directorate",
          summary:
            "Coast Guard EO search terms: CG civil rights, Coast Guard discrimination complaint. The Coast Guard — under DHS, not DoD — runs its discrimination/harassment complaint handling through its Civil Rights Directorate and the Commandant's anti-discrimination policy; uniformed members' complaints and civilian EEO complaints are administered separately there, and DEOMI's official guides confirm DoDI 1020.03's definitions are the ones used in CG training materials.",
          who: "Coast Guard members and civilian employees — routed to the Civil Rights Directorate via uscg.mil.",
          body: [],
          flags: [
            "F-7: CG-specific military complaint windows/forms were not confirmed on an official USCG page during research. This entry routes to the Civil Rights Directorate rather than borrowing another service's timelines.",
          ],
          links: [],
          source: "USCG Civil Rights Directorate; DEOMI guides",
        },
      ],
    },
    {
      key: "sapr",
      label: "SAPR / SHARP",
      tileSub: "Entries 3.1–3.6 · Restricted vs Unrestricted, Safe Helpline 877-995-5247, CATCH",
      intro:
        "If you need support right now, the DoD Safe Helpline is anonymous, confidential, and 24/7: call 877-995-5247, chat at safehelpline.org, or text your ZIP code or installation name to 55-247 (in the U.S.) to get your local SARC's contact information. Contacting Safe Helpline is not a report and does not start an investigation. Everything in this tile is reference and routing only, as SAPRO publishes it.",
      entries: [
        {
          id: "sapr-reporting-options",
          name: "The two reporting options — Restricted vs. Unrestricted, as SAPRO states them",
          summary:
            "SAPR search terms: restricted reporting, unrestricted reporting, DD Form 2910, who can take a restricted report. A report of sexual assault is when an incident of sexual assault is filed with a DoD authority through a DD Form 2910. Law enforcement and criminal investigators may only receive Unrestricted Reports; SARCs and SAPR VAs may receive both.",
          who: "All Service members are eligible to file either an Unrestricted Report or a Restricted Report; SAPR advocacy is available to active-duty, Guard, and Reserve members regardless of when the assault took place. Adult military dependents are covered by the SAPR response system, and Restricted Reporting is available for all service members and their dependents over the age of 18, and DoD civilian employees regardless of duty station.",
          body: [
            "Restricted Reporting (SAPRO): “Restricted Reports permit adult victims of sexual assault to confidentially report the crime to specified individuals without triggering an investigation. Information provided to the chain of command does not reveal personally identifying information about the victim or alleged offender. Restricted Reports allow the victim to receive Special Victims' Counsel (SVC)/Victim's Legal Counsel (VLC)/Victims' Counsel (VC) legal advice and medical and advocacy services. Only Sexual Assault Response Coordinators (SARCs), SAPR Victim Advocates (VAs), and healthcare providers can accept a Restricted Report.” The governing regulation (32 C.F.R. § 103.4) states the report “will not be reported to law enforcement or to the victim's command… unless the victim consents or an established exception exists” — exceptions exist (e.g., imminent-threat situations); the specifics route to the SARC.",
            "Unrestricted Reporting (SAPRO): “allows adult victims of sexual assault to report crimes without requesting confidentiality of their allegations. DoD law enforcement initiates an investigation, and the chain of command is notified. Unrestricted Reporting allows victims to receive medical treatment, advocacy services, legal support, and eligibility for expedited transfer.” Disclosures to the chain of command, law enforcement, or others outside the Restricted channel are Unrestricted by nature.",
            "Conversion rules: a victim may convert a Restricted Report to Unrestricted at any time (documented on DD Form 2910 with the victim's and SARC/VA's signatures); an Unrestricted Report cannot be converted back to Restricted.",
            "If you don't want to file a report at all (SAPRO FAQ): “Service members may speak to SARCs and/or SAPR VAs without filing a report to discuss available resources, medical and mental healthcare, and legal assistance. Victims are eligible for a Special Victims' Counsel (SVC)/Victims' Legal Counsel (VLC)/Victims' Counsel (VC) even if they do not file a report.” Chaplains provide confidential support and can connect a victim to a SARC or SAPR VA, but “Chaplains cannot take reports of sexual assault.”",
            "Male survivors (SAPRO's own note): Safe HelpRoom hosts special sessions every Sunday from 1–3pm Eastern Time for men that have been affected by sexual assault (safehelpline.org).",
          ],
          flags: [],
          links: [
            { label: "SAPRO FAQ (reporting definitions)", url: "http://www.sapr.mil/faq" },
            { label: "SAPRO — By Duty Status (coverage + expedited transfer)", url: "https://www.sapr.mil/by-duty-status" },
          ],
          source: "DoD SAPRO (sapr.mil); 32 C.F.R. § 103.4",
        },
        {
          id: "sapr-catch",
          name: "CATCH — Catch a Serial Offender",
          summary:
            "CATCH search terms: catch a serial offender, anonymous suspect information. “The CATCH program allows warfighters and others who experienced sexual assault the opportunity to anonymously submit suspect information to military criminal investigators to help the Department identify alleged serial offenders.” (CATCH Victim Information Packet, April 2026 edition.)",
          who: "You made a Restricted Report to a SARC or SAPR VA; or you made an Unrestricted Report but the suspect's name is not yet known to law enforcement; or you have decided not to make a report at this time (a “SAPR Related Inquiry” entry).",
          body: [
            "Participation is anonymous and voluntary. A CATCH entry does not convert a Restricted Report and “do[es] not trigger a safety exception for Restricted Reports” (SVC/VLC fact sheet). How: contact a SARC or SAPR VA, who provides a username and password for the CATCH website; entries are retained 10 years, and a victim may be contacted if a match occurs within that period. More information: sapr.mil/catch.",
          ],
          flags: [],
          links: [
            { label: "CATCH Victim Information Packet (SAPRO)", url: "https://www.sapr.mil/Portals/156/CATCH_Victim_Info_Packet.pdf" },
            { label: "CATCH Fact Sheet for SVC/VLC (SAPRO)", url: "https://www.sapr.mil/Portals/156/CATCH_Fact_Sheet_SVC_VLC.pdf" },
          ],
          source: "DoD SAPRO — CATCH program",
        },
        {
          id: "sapr-safe-helpline",
          name: "DoD Safe Helpline — every door, as published: 877-995-5247",
          summary:
            "Safe Helpline search terms: safe helpline number, sexual assault hotline, 877-995-5247, text 55-247, Safe HelpRoom. “DoD Safe Helpline is the Department's sole hotline for members of the DoD community affected by sexual assault. Safe Helpline is a completely anonymous, confidential, 24/7, specialized service — providing help and information anytime, anywhere.” It is operated by RAINN through a contract with DoD SAPRO, and is available worldwide; the phone number is the same in the U.S. and worldwide via DSN.",
          who: "Anyone in the DoD community affected by sexual assault — contacting Safe Helpline is not a report: it is anonymous support and information; nothing is triggered by calling, chatting, or texting.",
          body: [],
          bullets: [
            { title: "Call: 877-995-5247", text: "24/7, from anywhere in the world." },
            { title: "Online: safehelpline.org", text: "Live one-on-one support through a secure instant-messaging (online chat) portal." },
            { title: "Text (referral service)", text: "Text your ZIP code or installation/base name to 55-247 (in the U.S.) or +1 571-470-5546 (outside the U.S.) to receive local SARC/responder contact information." },
            { title: "Safe HelpRoom", text: "Moderated, secure online group chat for survivors, at safehelpline.org — including the Sunday 1–3 p.m. ET men's session." },
            { title: "Safe Helpline app", text: "Free app (App Store / Google Play) — self-care plan and exercises, and free calling to the helpline over Wi-Fi." },
          ],
          flags: [
            "F-8: Safe Helpline outside-U.S. text number conflict — +1 571-470-5546 (current safehelpline.org) vs. 202-470-5546 (older official pages incl. Navy CNIC). The current safehelpline.org number prints above; the older one is flagged here.",
            "F-9: the correct Safe Helpline number — 877-995-5247 — is confirmed on sapr.mil, safehelpline.org, and RAINN. It is the only form of the number printed anywhere in this section.",
          ],
          links: [
            { label: "DoD Safe Helpline (SAPRO)", url: "http://www.sapr.mil/dod-safe-helpline" },
            { label: "Safe Helpline — About", url: "https://safehelpline.org/about" },
          ],
          source: "DoD Safe Helpline (sapr.mil / safehelpline.org, operated by RAINN)",
        },
        {
          id: "sapr-people",
          name: "The people: SARC, SAPR VA, SVC/VLC/VC — and the Case Management Group",
          summary:
            "SAPR roles search terms: SARC, victim advocate, special victims counsel, VLC, case management group, retaliation. At SAPRO's published summary level: the SARC is “the single point of contact for coordinating appropriate and responsive care for sexual assault victims” (32 C.F.R. § 103.4).",
          who: "Victims working with the SAPR system, at any reporting posture — including no report at all.",
          body: [],
          bullets: [
            { title: "SARC (Sexual Assault Response Coordinator)", text: "“The single point of contact for coordinating appropriate and responsive care for sexual assault victims.” A SARC “addresses safety needs, explains the reporting options and services available, and offers resources to navigate the military criminal justice process” (SAPRO)." },
            { title: "SAPR VA (Victim Advocate)", text: "“Shall provide non-clinical crisis intervention and on-going support, in addition to referrals for adult sexual assault victims” (32 C.F.R. § 103.4). SARCs and SAPR VAs “provide professional assistance with obtaining healthcare (medical and mental health care), counseling services, legal representation, spiritual support, and obtaining off-base resources, if so desired.”" },
            { title: "SVC / VLC / VC (the victim's own lawyer)", text: "“Each of the Services provides victims their own lawyers, who are experienced trial attorneys to be able to guide victims through the military justice process” (SAPRO). Available even if the victim does not file a report." },
            { title: "Case Management Group", text: "With an Unrestricted Report, a CMG convenes “with the responsibility of ensuring the victim receives the care they deserve and are made aware of the progress in investigative and legal proceedings” (SAPRO)." },
            { title: "Retaliation concerns", text: "DoDI 6495.02 Vol. 3 (June 24, 2022) governs retaliation response in adult sexual-assault cases; SAPRO directs people who believe they are experiencing retaliation to their SARC for reporting avenues, including going directly to the DoD IG (the IG tile in this section)." },
          ],
          flags: [],
          links: [{ label: "SAPRO FAQ", url: "http://www.sapr.mil/faq" }],
          source: "DoD SAPRO; 32 C.F.R. § 103.4; DoDI 6495.02 Vol. 3",
        },
        {
          id: "sapr-expedited-transfer",
          name: "Expedited transfers — Unrestricted Report required",
          summary:
            "Expedited transfer search terms: expedited transfer, PCS after assault, change of station. “Service members who have been the victim of sexual assault and have filed an Unrestricted Report have the option to request a permanent or temporary expedited transfer from their unit and/or installation (a Permanent Change of Station or a Permanent Change of Assignment).”",
          who: "Service members who filed an Unrestricted Report — a victim “may, at any time, request a transfer to a new duty location or station” (SAPRO FAQ).",
          body: [
            "Requests route through the SARC/command as SAPRO's expedited-transfer page details; this entry prints the eligibility fact (Unrestricted Report required) and routes the request mechanics to the SARC.",
          ],
          flags: [],
          links: [{ label: "SAPRO — By Duty Status", url: "https://www.sapr.mil/by-duty-status" }],
          source: "DoD SAPRO",
        },
        {
          id: "sapr-service-doors",
          name: "Each service's door — SHARP, SAPR, SAPRR",
          summary:
            "Service SAPR search terms: SHARP Army, SAPR Marines Navy Air Force, SAPRR Coast Guard. All services run the SAPRO framework in this tile; the program name and front door differ. Every service door routes back to the same two reporting options, the same SARC/VA structure, and the DoD Safe Helpline (877-995-5247). Local 24/7 installation SAPR/SHARP numbers live on the installation pages and in My Installation — by design, so a stale local number is never baked into a reference section.",
          who: "Everyone — find your service's front door; the framework behind it is the same.",
          body: [],
          tables: [
            {
              caption: "Service programs and official doors — as published",
              columns: ["Service", "Program", "Official door"],
              rows: [
                ["Army", "SHARP — Sexual Harassment/Assault Response and Prevention", "armyresilience.army.mil/SHARP"],
                ["Marine Corps", "SAPR", "usmc-mccs.org SAPR pages (installation 24/7 helplines sit under it)"],
                ["Navy", "SAPR", "MyNavyHR SAPR pages"],
                ["Air Force & Space Force", "SAPR (DAF Resilience)", "resilience.af.mil/sapr"],
                ["Coast Guard", "SAPRR — Sexual Assault Prevention, Response, and Recovery Program", "dcms.uscg.mil (CG-1 / CG-11)"],
              ],
            },
          ],
          flags: [],
          links: [
            { label: "Army SHARP", url: "https://www.armyresilience.army.mil/SHARP/index.html" },
            { label: "MyNavyHR — SAPR", url: "https://www.mynavyhr.navy.mil/Support-Services/Culture-Resilience/Sexual-Assault/" },
            { label: "DAF SAPR (Resilience)", url: "https://www.resilience.af.mil/sapr/" },
            { label: "USMC SAPR (MCCS)", url: "https://www.usmc-mccs.org/marine-family-support/prevention-and-counseling/sexual-assault-prevention-and-response" },
            { label: "Coast Guard SAPRR (CG-11)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Sexual-Assault-Prevention-Response-and-Recovery-Program/" },
          ],
          source: "Service SAPR/SHARP/SAPRR pages",
        },
      ],
    },
    {
      key: "congress",
      label: "Congressional Inquiries",
      tileSub: "Entries 4.1–4.3 · the protected right, how an inquiry flows, what it cannot do",
      intro:
        "Communicating with Congress is a protected communication under 10 U.S.C. § 1034. The expectation language in this tile comes from Congress's own published casework guidance — no DoD or service legislative-liaison page located during research publishes a member-facing statement of what an inquiry can and cannot do, and the attribution stays with Congress's guidance.",
      entries: [
        {
          id: "congress-right",
          name: "The right itself — no chain-of-command permission required",
          summary:
            "Congressional inquiry search terms: contact congress, congressional inquiry, do I need permission. Communicating with Congress is a protected communication: § 1034 prohibits restricting a member from making lawful communications to a Member of Congress, and reprisal for having done so is an IG complaint under that statute (the IG tile).",
          who: "Every member of the Armed Forces — a congressional inquiry does not require chain-of-command permission, and no one in the chain may lawfully bar it.",
          body: [
            "A congressional inquiry (also called congressional casework when it concerns an agency matter) is your right to ask your Member of Congress to make an agency explain itself. That is the whole of the “permission” question, stated plainly with the § 1034 citation.",
          ],
          flags: [],
          links: [{ label: "U.S. House of Representatives", url: "https://www.house.gov" }],
          source: "10 U.S.C. § 1034",
        },
        {
          id: "congress-flow",
          name: "How an inquiry actually flows — constituent, privacy release, liaison, response",
          summary:
            "Casework search terms: how does a congressional inquiry work, privacy release, find my representative. The mechanics, from official congressional casework guidance (a House member-office FAQ stating the House framework): you contact your Member's office, sign a privacy release, and the office acts as facilitator/mediator with the agency through its legislative liaison.",
          who: "Constituents — offices can generally only open an official inquiry for their own constituents; another office will refer you to yours. Service members commonly contact the Member for their home-of-record district/state or their duty-station district/state; pick the office where you are a constituent and let that office refer if needed.",
          body: [],
          steps: [
            "You contact your Member's office (district/state office staff handle casework) and describe the problem.",
            "You sign a privacy release. “A completed privacy release form is required before a federal agency can be contacted on your behalf” — agencies cannot disclose your records to the office without your written authorization.",
            "The office acts as facilitator/mediator with the agency. Under House Ethics and House Administration guidelines as the FAQ states them, an office is allowed to: request information or a status report from a federal agency's liaison office; urge prompt consideration; and request reconsideration of an administrative response believed not supported by applicable laws, rules, and regulations. For military matters, the agency side of that contact is the service's legislative liaison / congressional inquiries office, which tasks the command or agency element and returns the response through the Member's office to you.",
            "Limits the same guidance prints: the office cannot intervene in civil or criminal court matters and cannot give legal advice; it acts on federal matters only (state/local problems get referred).",
          ],
          flags: [],
          links: [
            { label: "Find Your Representative (house.gov)", url: "https://www.house.gov/representatives/find-your-representative" },
            { label: "U.S. Senate — Senators directory", url: "https://www.senate.gov" },
            { label: "House casework FAQ (framework)", url: "https://guthrie.house.gov/services/frequently-asked-questions.htm" },
          ],
          source: "House/Senate casework guidance; House and Senate directories",
        },
        {
          id: "congress-expectations",
          name: "What an inquiry does — and does not — do",
          summary:
            "Expectations search terms: can congress fix my case, inquiry guarantee. In the official guidance's own words: “Please note, my office cannot guarantee a successful outcome of a case. But, they can help ensure that full and fair consideration, consistent with all applicable laws, rules and regulations, is applied.”",
          who: "Anyone considering an inquiry alongside — never instead of — the underlying system's own appeal process.",
          body: [
            "An inquiry ensures your matter is reviewed and answered by the agency through its liaison — it does not order an outcome, override a regulation, or substitute for the appeal process the underlying system provides. If the underlying decision has its own appeal (an evaluation appeal, an MEO appeal, a board for correction), the inquiry runs alongside that process, not instead of it.",
          ],
          flags: [
            "F-11 — NOT STATED finding: no DoD or service legislative-liaison page located during research publishes a member-facing statement of what a congressional inquiry can and cannot do, in these terms. The expectation language on this card comes from Congress's own published casework guidance, attributed that way — it is not re-attributed to any service.",
          ],
          links: [{ label: "House casework FAQ", url: "https://guthrie.house.gov/services/frequently-asked-questions.htm" }],
          source: "Congress's own casework guidance (House member-office FAQ)",
        },
      ],
    },
  ],
};
