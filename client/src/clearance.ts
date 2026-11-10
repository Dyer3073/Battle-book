// Security Clearance Center — transcribed from the researched pack
// (~/workspace/military-app/clearance/clearance.md, researched Nov 9,
// 2026). DCSA-only sourcing (plus CDSE and ODNI's SEADs as DCSA
// publishes them). Every fact is printed only as the cited official
// source states it; flags print flagged, never blended. NO processing-
// time figures appear anywhere — DCSA's applicant pages publish none
// and none were imported. No coaching, no answer strategies, no
// question-by-question SF-86 walkthrough — by the pack's design.

import type { RefGroup } from "./refdata";

export const CLEARANCE_STANDING =
  "This section explains the clearance process using the government's own public material — the rules and the timeline, from the agency itself. It is not coaching for an investigation, and there is no version of “what to leave out”: DCSA states that withholding, misrepresenting, or falsifying information can cost you the clearance and the job. When in doubt, ask your security officer — that is what they are for, and DCSA says so too.";

export const CLEARANCE_INTRO =
  "You cannot apply for a clearance on your own — a sponsoring agency starts it, you complete the SF-86 honestly and completely, DCSA investigates, adjudicators judge the whole person against 13 published guidelines, and for as long as you hold eligibility you are under continuous vetting and a personal, legal duty to report the big changes in your own life before the system finds them. Administered by: the Defense Counterintelligence and Security Agency (DCSA) — the federal government's primary personnel-vetting agency. DCSA's Trust Decision (Adjudications) FAQs state DCSA conducts background investigations for over 100 federal agencies — approximately 95% of all background investigations government-wide — and TD(A) is the sole authority for security-clearance eligibility for most DoD personnel.";

const GICP = { label: "DCSA — Investigations & Clearance Process", url: "https://www.dcsa.mil/mc/pv/mbi/gicp/" };
const TDA = { label: "DCSA — Trust Decision (Adjudications)", url: "https://www.dcsa.mil/mc/pv/adjudications/financial/" };
const TDA_FAQ = { label: "DCSA — Trust Decision (Adjudications) FAQs", url: "https://www.dcsa.mil/Trust-Decision-Adjudications/FAQS-Trust-Decision-Adjudications/" };
const FSO_FAQ = { label: "DCSA — FAQs, Facility Security Officers", url: "https://www.dcsa.mil/mc/pv/fso/faqs/" };
const REPORT = { label: "DCSA — Report a Security Change, Concern, or Threat", url: "https://www.dcsa.mil/mc/pv/mbi/report_others" };
const FACTSHEET = { label: "DCSA — Self-Reporting Factsheet (PDF)", url: "https://www.dcsa.mil/Portals/91/Documents/pv/mbi/DCSA_Self-Reporting_Factsheet_071321.pdf" };
const CDSE_SEAD3 = { label: "CDSE (DCSA) — SEAD 3 Reporting Requirements webinar material", url: "https://www.cdse.edu/Portals/124/Documents/webinars/Reporting-Requirements-Webinar-Slides.pdf" };
const SEAD7 = { label: "ODNI — SEAD 7 (directive text, ODNI archive)", url: "https://archive.dni.gov/files/NCSC/documents/Regulations/SEAD-7_BI_ReciprocityU.pdf" };
const BILLING = { label: "DCSA — Billing Rates & Resources (official case-type names)", url: "https://www.dcsa.mil/Personnel-Vetting/Billing-Rates-Resources/" };
const MH_FAQ = { label: "DCSA — Mental Health and Security Clearance FAQ, April 27, 2024 (PDF)", url: "https://www.dcsa.mil/Portals/128/Documents/pv/DODCAF_/resources/DCSA-OnePager_MentalHealth_SecurityClearances-Apr2024.pdf" };
const RAPBACK = { label: "DCSA news — Rap Back enrollment expansion", url: "https://www.dcsa.mil/About-Us/News/Article/Article/4414539/dcsa-expands-rap-back-enrollment-to-wider-industry-population/" };

export const CLEARANCE_GROUPS: RefGroup[] = [
  {
    title: "The Levels & the Investigations",
    entries: [
      {
        name: "You can't apply for a clearance — a sponsor starts it",
        body: "Per DCSA's Investigations & Clearance Process page: federal employees, contractors, and military members must undergo a background investigation; the extent depends on the type of job and the degree of harm the person in that job could cause. The sponsoring (employing or hiring) agency initiating your investigation determines the appropriate level of investigation. If the sponsor is an authorized Investigations Service Provider (ISP) it may investigate itself; if not, it may ask another ISP, like DCSA, to conduct the investigation. Even a job that requires no clearance requires an investigation for a suitability determination. There is no self-application path anywhere in DCSA's public process.",
        who: "Anyone whose position is designated as requiring eligibility — military, federal civilian, or contractor.",
        links: [GICP, TDA_FAQ],
        source: "DCSA — Investigations & Clearance Process",
      },
      {
        name: "The three eligibility levels",
        body: "DCSA's Trust Decision (Adjudications) page publishes exactly three primary eligibility levels for access to classified national security information, defined by the damage unauthorized disclosure could cause. Access programs above a level — DCSA's TD(A) FAQs note that for some classified information, such as SCI or Special Access Programs (SAPs), the information owner may impose additional requirements or conditions even when a person is otherwise eligible. Those additional requirements are program-specific.",
        bullets: [
          "Top Secret (TS) — information whose unauthorized disclosure could cause exceptionally grave damage to national security.",
          "Secret (S) — information whose unauthorized disclosure could cause serious damage to national security.",
          "Confidential (C) — information whose unauthorized disclosure could cause damage to national security.",
        ],
        links: [TDA],
        source: "DCSA — Trust Decision (Adjudications)",
      },
      {
        name: "Which investigation goes with which job: T3 and T5",
        body: "The investigation is matched to the position's sensitivity designation, not to the person. DCSA's published adjudication material states the mapping plainly: Special-Sensitive and Critical-Sensitive positions require Tier 5 (T5) investigations; Noncritical-Sensitive positions require Tier 3 (T3); Non-Sensitive positions take the appropriate Tier 1, Tier 2, or Tier 4 suitability investigation. DCSA's case-type listings name the products: T3 – Tier 3 Investigation, T3R – Tier 3 Reinvestigation, T5 – Tier 5 Investigation, T5R – Tier 5 Reinvestigation. In practice, as DCSA's own operational guidance puts it, military positions are adjudicated to the highest level the investigation supports — Tier 3 to Secret, Tier 5 to Top Secret/SCI. The T5 is the deeper investigation (it is the successor to the Single Scope Background Investigation, SSBI); the T3 is the standard investigation behind Confidential and Secret eligibility.",
        flag: "DCSA's FY2027 products catalog states it will continue to offer 5-tier initial vetting products while introducing TW 2.0 3-Tier initial vetting products for early adopters — the tier framework itself is in transition.",
        links: [BILLING, TDA],
        source: "DCSA — Billing Rates & Resources; Trust Decision (Adjudications)",
      },
      {
        name: "A clearance is an eligibility, not a possession",
        body: "DCSA's FSO FAQs define a personnel security clearance as an administrative determination by a certified adjudicator that an individual is eligible under national security standards for access to classified information, made on the basis of an investigation and a finding that access is clearly consistent with national interests. Its stated purpose: to determine whether a person is able and willing to safeguard classified national security information, based on loyalty, character, trustworthiness, and reliability. Two consequences stated plainly: eligibility belongs to the government's determination, not to the member (you hold it only while in a position that requires it), and per the same FAQs, the process does not begin until after an applicant is hired or the organization has made a written commitment of employment that the applicant has accepted (industry rule, stated here because members separating into contractor work ask about it constantly).",
        links: [FSO_FAQ],
        source: "DCSA — FAQs, Facility Security Officers",
      },
    ],
  },
  {
    title: "The Process, End to End",
    note: "DCSA's Investigations & Clearance Process page lays the sequence out in six steps: (1) Questionnaire — filling out forms; (2) Submitted background investigation; (3) Conducting the background investigation; (4) Position eligibility decision based on the completed investigation; (5) Clearance granting decision; (6) Continuous evaluation/vetting.",
    entries: [
      {
        name: "Step 1 — The questionnaire: NBIS eApp (e-QIP is gone)",
        body: "Per DCSA's Trust Decision page: the process begins when a sponsoring agency initiates a request; the applicant submits their personal information via the National Background Investigation Services (NBIS) eApp portal, which has replaced the legacy e-QIP system. DCSA's applicant page describes what you submit: an electronic questionnaire, a certification of the information you provided, and signed releases. Your sponsoring agency reviews the package for accuracy and completeness and may send it back for correction. You will need to submit fingerprints if it is your first investigation or certain requirements apply. Supporting documentation may be required — DCSA's examples: citizenship documents, residence history, employment history, Selective Service number.",
        flag: "System state, flagged, not smoothed: NBIS is described by DCSA both as the live eApp portal that has replaced e-QIP and, on its Continuous Vetting material, as the system that “will” coordinate and connect the vetting enterprise — the platform is still being built out under Trusted Workforce 2.0. Separately, DCSA's FY2027 catalog notes initiation of initial investigations using the PVQ (Personnel Vetting Questionnaire) is planned in DISS — the SF-86's long-planned successor form family. Today you will almost certainly meet NBIS eApp and the SF-86; the system and the form are both mid-transition, and your security office's instructions control.",
        links: [GICP, TDA],
        source: "DCSA — Investigations & Clearance Process; Trust Decision (Adjudications)",
      },
      {
        name: "The SF-86 — what it asks about, at the level of its own table of contents",
        body: "The Standard Form 86, Questionnaire for National Security Positions, is the form behind the questionnaire step. The form is a public document; its own section headings — categories only — are: identifying information; contact information; U.S. passport information; citizenship (including multiple citizenship); where you have lived; where you went to school; employment activities; Selective Service record; military history; people who know you well; marital status; family members and people associated with you; foreign contacts; foreign activities and foreign travel; use of information technology systems; legal record / involvement with the law; illegal drug use; alcohol use; psychological and emotional health; involvement in non-criminal court actions; financial record; and your investigative/clearance history and associations record. DCSA's supporting-documentation list tells the practical story: gather years of addresses, employers, and documents before you start. There is deliberately no question-by-question guidance in this section — no answer strategies, no “how investigators read this question,” nothing. The form's instruction, and DCSA's, is the whole content: answer completely and truthfully.",
        flag: "Section numbering and exact headings vary between SF-86 editions, and the PVQ transition may renumber them; the categories above are the form's standing subject areas, printed as categories.",
        links: [GICP],
        source: "DCSA — Investigations & Clearance Process (SF-86 guide reference)",
      },
      {
        name: "The omission rule — DCSA's own warning",
        body: "DCSA's applicant page carries a headed section, “Omitting Information on the Form,” and its substance belongs at the top of this entry, not buried: Providing the information requested is voluntary — but if you don't provide it, it could impact your eligibility for the position or for access to classified information. Withholding, misrepresenting, or falsifying information may also impact your eligibility and job status. Potential consequences include, but are not limited to: removal; debarment from federal service; loss of eligibility for access to classified information; prosecution. This is the standing answer to every “should I mention…?” question: the agency itself treats the omission as the problem.",
        links: [GICP],
        source: "DCSA — Investigations & Clearance Process, “Omitting Information on the Form”",
      },
      {
        name: "Step 3 — The investigation: who gets contacted, and the interview",
        body: "Per DCSA's applicant page, during the investigation DCSA may conduct searches at law enforcement entities, courts, employers, educational institutions, creditors, and other record repositories. Friends, co-workers, landlords, family, and neighbors may also be contacted — asked to verify where you lived, worked, or went to school, and questions regarding your character and conduct. An investigator may interview you to verify, expand upon, or clarify the information on your questionnaire. Several investigators may work the case at once depending on where your listed activities are; they may be federal employees or contractors, and all follow the same laws, rules, and regulations. Investigators submit their results as a report of investigation, which goes back to the sponsoring agency. For some investigation types the ISP gathers information by written inquiry instead of in-person visits. DCSA also publishes an applicant-facing “Verify Your Investigator” resource — linked from the agency's process page — because a member who gets a call from an investigator should know the agency expects them to check credentials.",
        links: [GICP],
        source: "DCSA — Investigations & Clearance Process, “Who We'll Contact” / “About Your Investigators”",
      },
      {
        name: "Steps 4–5 — Adjudication: the whole-person decision",
        body: "When the sponsoring agency receives the completed investigation, it reviews the contents and makes the suitability, fitness, or security decision. For most DoD personnel the adjudication itself is DCSA's: Trust Decision (Adjudications) (TD(A)) is the sole authority responsible for determining security clearance eligibility for most DoD personnel. DCSA describes a trust decision as a comprehensive evaluation of vetting information by trained, certified adjudicators applying the national guidelines to assess loyalty, trustworthiness, and reliability. The governing standard is the whole-person concept: per DCSA, no single piece of information, favorable or unfavorable, is the sole determining factor; adjudicators conduct a comprehensive evaluation of the individual's entire life — all available and reliable information, past and present, positive and negative — and decide whether granting eligibility is in the best interest of national security. DCSA states the corollary in plain language: a past criminal record or financial difficulties do not automatically result in a denial — context, pattern, and demonstrated responsible behavior since are weighed. The decision is, in DCSA's words, ultimately a common-sense judgment on all the evidence, with doubts resolved in favor of protecting national security.",
        links: [TDA, GICP],
        source: "DCSA — Trust Decision (Adjudications)",
      },
      {
        name: "If adjudication goes against you — the published due-process path",
        body: "DCSA publishes the pathway, because members believe a denial is a silent dead end: if initial vetting raises concerns, the individual receives a Statement of Reasons (SOR) outlining the issues. As of December 2024, the individual has the right to provide a written rebuttal and to request a virtual personal appearance before a DCSA Senior Adjudicator before a final decision. If TD(A) then issues a final denial or revocation, the individual may appeal — managed by the Defense Office of Hearings and Appeals (DOHA) for most contractor personnel, or the Personnel Security Appeals Board (PSAB) of the member's service branch or component; specific guidance arrives in the final decision package. One year after a final denial or revocation (or a final appeal determination), the employer may request reconsideration, with documentation showing the conditions that led to the unfavorable decision have been resolved or mitigated. Records access is also published: adjudicative records via DCSA's FOIA/Privacy office for TD(A) (Fort Meade; DCSA Form 335 recommended); your own investigation file (e.g., a copy of your SF-86) via the FOIA/Privacy office for Investigations (Boyers, PA).",
        links: [TDA],
        source: "DCSA — Trust Decision (Adjudications), “The Due Process and Appeals Pathway”",
      },
      {
        name: "Interim eligibility",
        body: "DCSA's applicant page states it in one sentence: your sponsoring agency can grant you interim eligibility or access, at their discretion — this requires specific portions of your investigation to return favorable results. Two guardrails from the same page: the sponsoring agency has the right to make an unfavorable determination at any point during the investigation, and you can receive a final favorable determination only after the investigation is complete. Interim is the sponsor's call, not the applicant's request to grant, and it is not the clearance.",
        flag: "DCSA's applicant pages publish no end-to-end processing-time figures or deadlines for initial investigations. Figures circulating on commercial clearance sites were not imported.",
        links: [GICP],
        source: "DCSA — Investigations & Clearance Process",
      },
    ],
  },
  {
    title: "The 13 Adjudicative Guidelines",
    entries: [
      {
        name: "SEAD 4's thirteen guidelines, by name",
        body: "All federal agencies adjudicate using the same 13 Adjudicative Guidelines (DCSA FSO FAQs), issued as Security Executive Agent Directive 4 (SEAD 4), National Security Adjudicative Guidelines. DCSA's TD(A) FAQs confirm determinations are made in accordance with SEAD 4, based on the information the individual supplies, information gathered in the investigation, and other available, reliable information — judged under the whole-person concept. The one-line descriptions below are subject-matter summaries of each guideline's own published title; this section deliberately prints no disqualifying/mitigating condition lists, because those lists would read as a scoring rubric for answers, which is exactly what this section is not. The standing note: SEAD 4 contains no list of automatic disqualifiers in the material DCSA publishes to applicants — the guidelines are applied to the whole person, which is why the same event can resolve differently for two different people, and why this app will never print a “will X deny me?” answer.",
        bullets: [
          "A — Allegiance to the United States: loyalty to the U.S. and its constitutional government.",
          "B — Foreign Influence: whether foreign contacts or interests could be used to pressure or manipulate you.",
          "C — Foreign Preference: acting in ways that indicate preference for a foreign country over the U.S.",
          "D — Sexual Behavior: sexual behavior that involves criminal conduct, judgment concerns, or vulnerability to coercion.",
          "E — Personal Conduct: honesty and candor — including falsification, omission, and refusal to cooperate with the process.",
          "F — Financial Considerations: inability or unwillingness to meet financial obligations and live within your means.",
          "G — Alcohol Consumption: alcohol use that impairs judgment, reliability, or duty performance.",
          "H — Drug Involvement and Substance Misuse: illegal drug involvement and misuse of substances, including prescription drugs.",
          "I — Psychological Conditions: psychological conditions that may impair judgment, stability, or reliability.",
          "J — Criminal Conduct: criminal behavior, as a pattern or a single serious act.",
          "K — Handling Protected Information: failing to safeguard classified and protected information.",
          "L — Outside Activities: outside employment/activities that create conflicts with security responsibilities.",
          "M — Use of Information Technology: unauthorized or improper use of IT systems.",
        ],
        links: [FSO_FAQ, TDA_FAQ],
        source: "DCSA — FAQs, Facility Security Officers; Trust Decision (Adjudications) FAQs",
      },
    ],
  },
  {
    title: "Self-Reporting: The Duty That Never Switches Off",
    note: "The legal frame: reporting requirements are established government-wide by SEAD 3, Reporting Requirements for Personnel with Access to Classified Information or Who Hold a Sensitive Position (ODNI). DCSA's page carries the line this tile leads with: “By law, security clearance holders are required to self-report life events or incidents that could impact your ability to meet security clearance requirements. Even though it's mandatory, self-reporting is also a question of personal integrity. It's also preferable to the incident or change being discovered.”",
    entries: [
      {
        name: "Who you report to",
        body: "DCSA's self-reporting page: employees in national security positions with access to classified information are expected to self-report changes or incidents that may impact their clearances. Each agency may have different self-reporting procedures, so you contact your agency's security office — but DCSA states the issues you're required to report are the same across the federal government. Its routing list: Military members — talk to your recruiter or Security Officer at your service duty station. DoD contractors — your company's Facility Security Officer (FSO). Federal civilians — your agency's Security Officer or Human Resources office. DCSA employees — the internal contact on DCSA's intranet. DCSA's factsheet adds the fallback every member should hear: “If you're not sure what to report, ask your security manager, facility security officer, or recruiter.” Even without a clearance, your agency may require reports to the security office for certain changes.",
        links: [REPORT, FACTSHEET],
        source: "DCSA — Report a Security Change, Concern, or Threat; Self-Reporting Factsheet",
      },
      {
        name: "The DCSA factsheet list — what every clearance holder reports",
        body: "DCSA's published factsheet (“What do I need to self-report?”) lists the reportable categories for clearance holders. The list below reproduces it as the agency publishes it.",
        bullets: [
          "Changes in personal status — any changes to marital status, cohabitation status (the factsheet specifies this doesn't include nonromantic roommates), and any name changes.",
          "Foreign travel — defined as ALL trips and vacations abroad, even day trips to Mexico and Canada. Any work trip that is not official government business must be reported. If you're stationed abroad, you must report all personal travel to other countries during that period.",
          "Foreign contact — the factsheet's test: if it's someone who could have personal information about you, including details about your life, they qualify.",
          "Loss or compromise of information — inadvertent or accidental loss/compromise of classified or other sensitive information.",
          "Financial problems — filing for bankruptcy; garnishment of wages; having a lien placed on your property for failing to pay a creditor; eviction from a residence for failure to pay rent; or inability to meet all financial commitments.",
          "Arrests — any arrest, regardless of whether or not charges were filed, or general involvement with the legal system (such as being sued, or you filed a claim against someone else).",
          "Psychological or substance abuse counseling — reportable issues are: legal findings of mental incompetence; court-ordered mental health care; inpatient mental health care; certain diagnoses which may impair judgment or reliability; and self-appraised mental health concerns that could impact judgment or reliability — followed immediately on the factsheet by the sentence that also anchors the myths tile: seeking mental health treatment and counseling in and of itself is NOT a reason to revoke a clearance, and seeking care for personal wellness and recovery may contribute favorably to eligibility and continuous-vetting decisions.",
        ],
        links: [FACTSHEET],
        source: "DCSA — Self-Reporting Factsheet",
      },
      {
        name: "Foreign travel — the SEAD 3 mechanics",
        body: "SEAD 3 (as published and as CDSE teaches it) adds timing to the factsheet's “report all of it”: covered individuals report planned or actual involvement in reportable activities prior to participation where the activity is planned, or otherwise as soon as possible afterward. For unofficial foreign travel specifically: the itinerary is submitted before departure, and all deviations from approved travel itineraries are reported within five business days of return — including unplanned day trips to Canada or Mexico, reported within five business days. The same all-covered-individuals list requires reporting unofficial contact with a known or suspected foreign intelligence entity, and continuing association with foreign nationals that involves bonds of affection, personal obligation, or intimate contact (or the exchange of personal information, per the directive's framing). Your own agency or command may impose additional or stricter procedures — SEAD 3 is the floor, not the ceiling.",
        links: [CDSE_SEAD3, REPORT],
        source: "CDSE (DCSA) — SEAD 3 Reporting Requirements material",
      },
      {
        name: "The tiered additions — what Secret adds, what Top Secret adds",
        body: "SEAD 3's lists are tiered; CDSE's published “Reporting Requirements At A Glance” training material (built on SEAD 3 and Industrial Security Letter 2021-02) lays them out by level. The two hard numbers members actually get wrong are both here: 120 days (a debt isn't reportable when it's late; SEAD 3 draws the line at over 120 days delinquent) and $10,000 (the TS-tier unusual-influx threshold).",
        bullets: [
          "All covered individuals — the foreign-travel, foreign-intelligence-contact, and continuing foreign-national association list, plus reporting on others.",
          "Secret and Confidential access (and non-critical sensitive positions), additionally: arrests; bankruptcy or over 120 days delinquent on any debt; alcohol- and drug-related treatment; and attempted elicitation, exploitation, blackmail, coercion, or enticement to obtain classified or otherwise protected information.",
          "Top Secret access (and critical-/special-sensitive positions), additionally: financial anomalies — an unusual influx of assets of $10,000 or more (SEAD 3's examples run to inheritances and gambling winnings); direct involvement in foreign business activities; foreign bank accounts; and ownership of foreign property; with the dollar value included when reporting financial issues, per the directive's reporting data elements.",
        ],
        flag: "These tier lists overlap the DCSA factsheet's all-holder list in the entry above — where the two public sources differ in scope, the factsheet list is shown as the member-facing rule and this entry as the directive's structure, flagged, not blended. DCSA's member-facing factsheet presents its list (incl. arrests, bankruptcy, marital/cohabitation changes) as what clearance holders report; SEAD 3's published structure tiers some items by level (arrests and bankruptcy/>120-day delinquency appear in the Secret/Confidential additional list; marital/cohabitation reporting sits in the TS-tier structure in ISL 2021-02's tables). The practical instruction — report it; ask your security officer — is identical either way.",
        links: [CDSE_SEAD3, SEAD7],
        source: "CDSE (DCSA) — SEAD 3 Reporting Requirements material (ISL 2021-02 tables)",
      },
      {
        name: "You also report what you see in others",
        body: "SEAD 3's third list is about other covered individuals, and CDSE's material names its purpose plainly: to protect classified information, covered individuals alert their agency head or designee to reportable activities of others that may be of security or counterintelligence concern — CDSE's published example is unexplained affluence or excessive indebtedness. DCSA's page title for this whole area is itself the instruction: “Report a Security Change, Concern, or Threat.” This entry states the published duty factually — it is listed alongside the self-reporting lists — without commentary or encouragement beyond what the sources state.",
        links: [CDSE_SEAD3, REPORT],
        source: "CDSE (DCSA) — SEAD 3 material (“Reportable Actions by Others”)",
      },
      {
        name: "Why reporting protects you — the agencies' own framing",
        body: "Three published framings, printed together because together they are this section's thesis: (1) DCSA: self-reporting is mandatory, “a question of personal integrity,” and “preferable to the incident or change being discovered” — under continuous vetting, discovery is not hypothetical; the automated checks run whether or not you report. (2) SEAD 3: failure to comply with the reporting requirements can result in administrative action that includes, but is not limited to, revocation of national security eligibility — the failure to report is sanctionable on its own, separate from the underlying event. (3) SEAD 4: the guideline under which candor itself is judged is Guideline E, Personal Conduct — which is why an event that would have been a minor concern when reported can become an eligibility problem when concealed. Adjudication remains whole-person: DCSA's adjudications page states that potentially disqualifying issues can be mitigated, weighing context and demonstrated responsible behavior — and the factsheet adds that even seeking mental-health care may contribute favorably to a decision. The agencies' published logic is consistent: the report is the mitigating act; the cover-up is the aggravating one.",
        links: [REPORT, TDA],
        source: "DCSA — Report a Security Change, Concern, or Threat; Trust Decision (Adjudications)",
      },
    ],
  },
  {
    title: "While You Hold It, and When You Leave",
    entries: [
      {
        name: "Continuous Vetting — the periodic reinvestigation is being replaced",
        body: "DCSA describes the shift on both its applicant and adjudications pages: investigations policy has moved from a periodic reinvestigation procedure to a continuous evaluation (CE) / continuous vetting (CV) model under Trusted Workforce 2.0 (TW 2.0), the whole-of-government vetting reform begun in 2018. How CV works, in DCSA's published description: automated record checks pull data from criminal, terrorism, and financial databases, as well as public records, at any time during an individual's period of eligibility; when DCSA receives an alert, it assesses whether the alert is valid and worthy of further investigation, and investigators and adjudicators gather facts and make determinations. CV alerts are based on suitability (5 CFR 731) and security (SEAD 4) factors, and the system alerts your employer to changes in your eligibility. DCSA's stated aim: mitigate situations before they become larger problems — either by working with the cleared individual to mitigate potential issues or, in some cases, suspending or revoking clearances. One component DCSA has publicly expanded: FBI Rap Back (Record of Arrest and Prosecution Back), which provides ongoing notification of changes to an individual's criminal record and is a named cornerstone of the TW 2.0 CV framework. NBIS is the IT backbone being built to coordinate the CV enterprise. You may be enrolled in CV at any time while employed with, or on behalf of, the federal government.",
        links: [TDA, GICP, RAPBACK],
        source: "DCSA — Trust Decision (Adjudications), “The Modern Vetting Process”",
      },
      {
        name: "The five-year SF-86 refresh — and “clearances do not expire”",
        body: "DCSA's FSO FAQs state both halves of a fact members routinely garble: “Security clearances do not expire.” DoD personnel are enrolled in Continuous Vetting under TW 2.0, which requires an updated SF-86 (and releases) to be submitted every 5 years in eApp, regardless of eligibility level. So there is no renewal cliff for the eligibility itself — but there is a recurring paperwork duty, and legacy T3R/T5R reinvestigation products still exist in DCSA's catalog while CV enrollment completes. If you separate and later return, what carries is governed by reciprocity and the state of your record — not by an expiration date.",
        links: [FSO_FAQ],
        source: "DCSA — FAQs, Facility Security Officers",
      },
      {
        name: "Reciprocity — another agency must accept your adjudication",
        body: "SEAD 7, Reciprocity of Background Investigations and National Security Adjudications (ODNI, effective November 9, 2018), establishes reciprocal acceptance across the executive branch. DCSA's TD(A) FAQs quote its operative rule: “Agencies shall accept national security eligibility adjudications conducted by an authorized adjudicative agency at the same level or higher level” — and note that DOE “L” and “Q” access authorizations are equivalent to Secret and Top Secret eligibility respectively. The directive's published terms: reciprocity covers acceptance of an existing investigation by an authorized investigative agency, an eligibility adjudication by an authorized adjudicative agency, and an active eligibility determination; agencies check the government databases of record to determine whether a prior investigation or adjudication exists; reciprocity determinations are to be made within five business days of receipt by the agency's personnel security program. The published exception structure matters: reciprocity has stated exceptions (SEAD 7 lists them; one named in the directive text is a most-recent investigation more than seven years old, unless otherwise directed by the Security Executive Agent), and DCSA's FAQ adds that information owners may impose additional requirements for SCI or SAP access even where eligibility itself is reciprocal. Edge cases route to the gaining security office rather than paraphrasing the exception list.",
        links: [TDA_FAQ, SEAD7],
        source: "DCSA — Trust Decision (Adjudications) FAQs, reciprocity; ODNI SEAD 7",
      },
      {
        name: "Separation — debrief, read-out, and the obligation that outlasts the job",
        body: "Eligibility is tied to the position: when you leave the position that required it, your access ends and your security office closes out your record. The published anchors: before first access, an individual issued an initial personnel security clearance must execute the Classified Information Nondisclosure Agreement (SF-312) (NISPOM ¶3-106, per DCSA's FSO FAQs) — the agreement that makes the safeguarding obligation a lifetime obligation regarding information you were entrusted with, surviving separation. Expect a security debrief at separation; the SF-312 duty not to disclose does not end when the eligibility does; ask your security office what your component requires.",
        flag: "The mechanics of the exit debriefing/read-out itself (who conducts it, what is signed at out-processing) are conducted by your service/component security office under its own procedures; DCSA's applicant-facing public pages do not publish a member-facing debrief script, so this entry stays at the level above and does not invent the ceremony.",
        links: [FSO_FAQ],
        source: "DCSA — FAQs, Facility Security Officers (SF-312 / NISPOM ¶3-106)",
      },
    ],
  },
  {
    title: "Myths vs. the Agency's Published Facts",
    entries: [
      {
        name: "Myth: “Getting mental-health treatment will cost me my clearance”",
        body: "The agency's published fact. DCSA's self-reporting factsheet: “Seeking mental health treatment and counseling in and of itself is NOT a reason to revoke a clearance. Seeking care for personal wellness and recovery may contribute favorably to decisions about your eligibility or continuous evaluation.” DCSA's April 2024 mental-health FAQ one-pager goes further and names the actual risk direction: avoiding care when needed can raise security concerns — performing sensitive duties while overly burdened can impair decision-making, and not seeking treatment when needed is itself listed among potential concerns, as is an intentional lack of transparency during vetting or failing to report. The same FAQ draws the reporting line precisely (what is reportable is listed in the self-reporting tile: legal findings of mental incompetence, court-ordered care, inpatient care, certain diagnoses that by their nature may impair judgment or reliability, and self-appraised concerns that could impact judgment or reliability) — ordinary counseling is not on it. This mirrors the SF-86's own published framing of its psychological-health section, which the form presents as asking the narrow set of reportable items above rather than “have you ever seen a counselor.”",
        links: [MH_FAQ, FACTSHEET],
        source: "DCSA — Mental Health and Security Clearance FAQ (April 2024); Self-Reporting Factsheet",
      },
      {
        name: "Myth: “Debt automatically denies a clearance”",
        body: "The agency's published fact. DCSA's adjudications page, under “Mitigating Negative Information”: “a past criminal record or financial difficulties do not automatically result in a denial.” Under the whole-person concept, adjudicators consider context — DCSA's own example: an issue that occurred when the applicant was young and immature, followed by a consistent pattern of responsible behavior, may be mitigated; positive aspects of a life (professional accomplishments, character references, community involvement) are weighed against the negative. Guideline F is Financial Considerations — the concern, as the guideline's name and DCSA's framing put it, is the pattern of inability or unwillingness to meet obligations, which is a different question from “has this person ever owed money.” What the factsheet does require is reporting the serious end of the spectrum — bankruptcy, garnishment, liens, eviction for nonpayment, debts over 120 days delinquent. Debt you must report is not debt that automatically denies; unreported, unexplained debt is the version of this problem adjudicators meet under Guideline E as well as F.",
        links: [TDA],
        source: "DCSA — Trust Decision (Adjudications)",
      },
      {
        name: "Myth: “There are automatic disqualifiers / a secret scoring sheet”",
        body: "The agency's published fact. Everything DCSA publishes to applicants describes the opposite architecture: a standard set of adjudicative guidelines applied by trained, certified adjudicators to the individual's specific circumstances; a foundational rule that no single piece of information is the sole determining factor; published due process when concerns arise (SOR, written rebuttal, personal appearance, appeal); and reconsideration after one year with documentation that conditions have been resolved or mitigated. The guidelines and their names are public. What is not public — and what this app will never simulate — is a points table, because the process DCSA describes doesn't use one: it is, in the agency's own words, “a common-sense judgment based on all the evidence,” with doubts resolved in favor of national security.",
        flag: "One statutory exception exists in the wider system (the Bond Amendment's bar for certain drug-use/conviction circumstances, referenced in CDSE training material). It was not confirmed on a DCSA applicant-facing page during research and is not printed as an entry.",
        links: [TDA, FSO_FAQ],
        source: "DCSA — Trust Decision (Adjudications); FAQs, Facility Security Officers",
      },
      {
        name: "Myth-adjacent: “Everyone takes a polygraph”",
        body: "The agency's published position, at name level only. A polygraph is not a step in DCSA's published six-step process for the general cleared population — the applicant-facing process contains no polygraph step at all. Counterintelligence-scope polygraph examinations exist for certain positions (named in the wider personnel-security system, e.g., for particular SCI/IC billets) as a position-specific additional requirement of the kind DCSA's FAQs describe information owners imposing. That is the whole of what prints here: the name, and the fact that it attaches to certain positions, not to clearances generally. No examination content, no procedures, no preparation material — by design.",
        flag: "No DCSA applicant-facing page fetched for this research names the CI-scope polygraph directly; the statement above is held at the level DCSA's own “additional requirements” framing supports.",
        links: [GICP],
        source: "DCSA — Investigations & Clearance Process (the six published steps — no polygraph step)",
      },
    ],
  },
];
