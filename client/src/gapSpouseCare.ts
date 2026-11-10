// Red-Team Gap Fills — Spouse Work (G1 + G12) and Care & Family
// (G3 + G4), transcribed from ~/workspace/military-app/redteam/
// gap-fills.md (researched Nov 9, 2026, official sources only). The
// pack governs: every fact is sourced on an official page named in
// the entry's Source line; conflicts print both sides, never blended;
// unverifiable items ship as flagged findings, never filled.
// Verdicts: G1 SHIPS PARTIAL · G12 SHIPS PARTIAL · G3 SHIPS FULL ·
// G4 SHIPS PARTIAL. Spouse-side gaps are fully open to spouses
// (member + spouse tracks); future members see locked cards only.

import type { PackSection } from "./seven";

/* ------------------------- G1 + G12 — Spouse Work ------------------------ */

export const SPOUSEWORK_SECTION: PackSection = {
  view: "spousework",
  title: "Spouse Work Abroad & After a PCS",
  headSub:
    "Working as a military spouse in Germany under SOFA — what the Kaiserslautern Legal handout (Sep 2025) actually publishes — and unemployment insurance after quitting a job to follow a PCS, with the filing-state conflict printed both sides.",
  intro:
    "Two questions spouses hit at every overseas move and every PCS: “Can I work here, and under whose rules?” and “If I quit to follow the orders, can I claim unemployment?” Both are answered here at process/rules level only, from the official pages named on each card — no personalized tax or legal determinations. For an individual case, the installation Legal Assistance office and tax center are the route, exactly as the handout itself directs.",
  standing:
    "German-economy recognition of a U.S. professional license is NOT SOURCEABLE: no official page found in the research states whether or how a U.S. license can be recognized for practice with a German employer on the economy. Only the U.S.-system routes ship (G1-5), and the gap prints as the finding — it is never filled. Telework (G1-4) ships from one installation legal handout only; no USAREUR-wide telework page was verified.",
  tiles: [
    {
      key: "sofa",
      label: "SOFA & Working in Germany",
      tileSub: "Entries G1-1–G1-2 · Kaiserslautern Legal Services Center handout, Sep 2025",
      intro: "What SOFA status means for a dependent who wants to work in Germany, and what changes when the job is on the German economy.",
      entries: [
        {
          id: "G1-1",
          name: "What SOFA status means for a dependent who wants to work in Germany",
          summary:
            "A dependent in Germany under the NATO SOFA and its German Supplemental Agreement (SA) is present under that agreement, not under the ordinary German residence system. Per the Kaiserslautern Legal Services Center handout “Spousal Employment in Germany” (2025/09/04), a person bearing the SOFA certificate (the NATO Status of Forces Certificate in the passport, Art. III SOFA) is exempt from the German Residence Act and from having to obtain a labor permit (Art. 7 SA) — so a dependent spouse can look for a job right away once they have the SOFA certificate and keep it near the passport. Do NOT register residence at the local Town Hall: SOFA-status people are exempt (Art. 6 SA), and registering can cause legal issues. SOFA status as a dependent does not carry over into a job — see G1-2.",
          who: "Dependent spouses in Germany under NATO SOFA / the German Supplemental Agreement. The handout does not apply to a German citizen or an ordinary resident of Germany.",
          body: [
            "Military OneSource / SpouseWorks puts the general point this way: the United States maintains a SOFA with each host country that has a U.S. installation; the SOFA establishes the rights and privileges of U.S. personnel in that country, and the SOFA also dictates whether a spouse can work in the local community without a work visa or must apply for one — check the installation legal assistance office for the specific country.",
            "The handout states on its first page that it is basic information only and is not a substitute for a personal consultation with a Legal Assistance Attorney. Carry the laminated SOFA document with the passport, as published.",
          ],
          flags: [],
          links: [
            { label: "Spousal Employment in Germany — Kaiserslautern Legal Services Center (home.army.mil)", url: "https://home.army.mil/rheinland-pfalz/7917/5734/0999/Spousal_Employment_in_Germany.pdf" },
            { label: "International Jobs for American Military Spouses — SpouseWorks, Military OneSource", url: "https://spouseworks.militaryonesource.mil/portal/article/international-jobs-for-americans" },
          ],
          source: "Spousal Employment in Germany — Kaiserslautern Legal Services Center, USAG Rheinland-Pfalz; SpouseWorks, Military OneSource",
        },
        {
          id: "G1-2",
          name: "Working on the German economy",
          summary:
            "“On the German economy” means a job with a German (non-U.S.-government) employer off the installation. A SOFA dependent may look for that work without a separate German labor permit, but the job itself is a German job: as the handout publishes, “in any such jobs you will have no SOFA Status for that work” — a dependent only has SOFA status as a dependent and “will be subject to German taxes in any other job” (Art. X para. 2 NATO SOFA, Art. 68 para. 4 SA). The exception stated is a job that itself provides SOFA status, e.g. a GS job or a DOCPER-approved contractor job with TESA status. Before German-economy work, the worker needs an 11-digit German identification number (IdNr) through the Federal Central Tax Registry Office (BZSt) by a special procedure for limited-taxation SOFA persons — do not register at Town Hall to get a tax ID.",
          who: "SOFA dependents taking a job with a German employer off the installation. Process/rules level only — this card does not decide anyone's tax or legal case.",
          body: [
            "Tax framing as published: German citizens and ordinary residents are subject to unlimited German taxation; everyone else present under NATO SOFA is subject only to limited German taxation, limited to income generated in a non-SOFA job/status in Germany; rental income from a house in Germany is also stated to be subject to German taxation.",
            "IdNr route as published: informal request to the BZSt by email or post with a copy of the passport, place of birth, proof of SOFA status, and proof of current German address; the IdNr letter is mailed to the verified domestic address (about 14 days' postal delivery stated).",
            "Social insurance as published: the employer must register the employee with the German social security agencies (health care, elderly care, pension insurance) or, in special limited cases, apply for an exemption; the pension insurance institution issues a German Social Security Insurance Number / ID card notice — an American Social Security number will not be sufficient; if no social dues are withheld, ask to see a copy of a granted exemption.",
            "German labor law basics in the handout include a right to have the essential terms of the employment contract in writing, and continued pay during proven illness for up to 6 weeks with prompt notice to the employer and a medical certificate if illness lasts more than three calendar days. Small-scale jobs (“Minijob” / “Midijob”) are covered in the handout with amounts tied to the German minimum wage formula — do not rely on a printed amount without checking the current handout, because the amounts change by year.",
            "Individual questions route to the installation tax center / Legal Assistance. The handout itself notes the Legal Assistance Office is prohibited by regulation from giving case-specific advice on German tax law for private businesses, for which it suggests a German tax consultant (Steuerberater).",
          ],
          flags: [],
          links: [
            { label: "Spousal Employment in Germany — Kaiserslautern Legal Services Center (home.army.mil)", url: "https://home.army.mil/rheinland-pfalz/7917/5734/0999/Spousal_Employment_in_Germany.pdf" },
          ],
          source: "Spousal Employment in Germany — Kaiserslautern Legal Services Center, USAG Rheinland-Pfalz (home.army.mil)",
        },
      ],
    },
    {
      key: "onbase",
      label: "U.S. Jobs On Base & Telework",
      tileSub: "Entries G1-3–G1-5 · USAJOBS, Military Spouse Preference, and the handout's telework section",
      intro: "The U.S.-system routes in Germany — federal and contractor jobs on the installation — and what the Kaiserslautern handout publishes about teleworking for a U.S. employer from Germany.",
      entries: [
        {
          id: "G1-3",
          name: "U.S. federal and contractor jobs on base",
          summary:
            "Federal civilian jobs (appropriated fund and non-appropriated fund), exchange / commissary jobs, and contractor jobs supporting the installation are listed and applied for through U.S. systems, mainly USAJOBS — not through German employers. Military Spouse Preference (MSP), as published for USAG Rheinland-Pfalz–Baumholder: MSP is available to eligible jobseekers for overseas employment with DoD; positions are listed on USAJOBS.gov; eligible MSP applicants may apply 30 days prior to arrival at the duty location; MSP may be applied to each PCS and does not expire. Published eligibility conditions include being married to the sponsor before the date of the sponsor's PCS orders, being listed by name on those orders, and the position being within the commuting area of the sponsor's duty location.",
          who: "Spouses and family members in Germany seeking U.S.-system employment on an installation.",
          body: [
            "USAG Bavaria's MilitaryINSTALLATIONS page states the process for civil service jobs is automated and internet-based: prepare and submit a resume and supplemental information online at USAJOBS, use the Resume Builder, apply online, and track consideration through USAStaffing. USAG Ansbach's careers page adds EURCivJobs, the U.S. Army Europe and Africa civilian jobs self-advertising / resume-sharing portal for spouses, family members, and veterans living in Europe — separate from USAJOBS (separate login; resume-sharing, not an application site).",
            "USAJOBS' “Family of overseas employees” page states the related DoD Overseas Family Member Preference: living overseas with a family member who is a member of the U.S. Armed Forces or a U.S. federal employee officially assigned to an overseas duty station; being that person's spouse, domestic partner, or unmarried child under 23; not having accepted or declined a permanent position or a temporary position of one year or longer at the new duty station; and applying within the same commuting area. Eligibility does not entitle the applicant to a job — the applicant must still apply and meet qualification standards.",
            "Contractor jobs: SpouseWorks states that for information about the contractors that provide support at an installation, contact the local installation employment readiness specialist. Help route: Army Community Service (ACS) Employment Readiness Program at the garrison.",
          ],
          flags: [],
          links: [
            { label: "USAG Rheinland-Pfalz, Baumholder — Employment (MilitaryINSTALLATIONS)", url: "https://installations.militaryonesource.mil/military-installation/usag-rheinland-pfalz-baumholder/military-and-family-support-center/employment" },
            { label: "Careers — U.S. Army Garrison Ansbach (home.army.mil)", url: "https://home.army.mil/ansbach/about/careers" },
            { label: "Family of overseas employees — USAJOBS", url: "https://www.usajobs.gov/hiringpath/familyofoverseasemployees/" },
          ],
          source: "MilitaryINSTALLATIONS (Baumholder / Bavaria), Military OneSource; USAG Ansbach careers page; USAJOBS; SpouseWorks",
        },
        {
          id: "G1-4",
          name: "Teleworking for a U.S. employer while living in Germany",
          summary:
            "Telework here means the spouse keeps a U.S. employer's job and does the work from Germany after a PCS. The Kaiserslautern handout's Section VI does not treat telework as “still just a U.S. job” by default: where the work is actually performed, who the employer is (government or private), and the tax treaty all matter. As published: where the stateside employer is a governmental agency, the right to taxation remains with the USA; income tax is due in Germany if the stateside employer is a private company (Art. X para. 2 NATO SOFA, Art. 68 para. 4 SA, and Arts. 19 / 15 of the German-U.S. Tax Treaty of 2006/07). Self-employed telework / independent contracting is fully subject to German tax and social security law, as published.",
          who: "Spouses keeping a U.S. job remotely from Germany. Not a personal tax determination — individual cases go to Legal Assistance and the installation tax center.",
          body: [
            "As published in Section VI: (a) if the main characteristics of the work are physically performed in the USA (frequent fly-backs are the handout's example) and the work in Germany is merely preparatory, it is not considered telework but an ordinary U.S. job. (b) The U.S. employer should be able to keep an employee temporarily working in/from Germany under the U.S. social system by requesting an online Certificate of Coverage from the U.S. Social Security Administration. (c) When income tax is due in Germany, the handout lists employer paperwork steps and states the employee will have to use either IRS Form 1116 (Foreign Tax Credit) or IRS Form 2555 (Foreign Earned Income) at U.S. tax filing time and apply for a German Tax Identification number. (d) If the current employer has no German branch office, the handout describes an employer-of-record (EoR) option — the employee is released to a German EoR and reassigned from it, and the EoR pays the employee and withholds required German taxes and social dues.",
            "SpouseWorks' general overseas page adds the cross-country caution: the SOFA dictates whether a spouse can work in the local community without a work visa or must apply for one, and spouses should check with the installation legal assistance office for the specific host country's employment regulations.",
          ],
          flags: [
            "Thin sourcing (pack Flag 6): the detailed telework rules come from a single source — Section VI of the Kaiserslautern Legal Services Center handout dated 2025/09/04. No separate USAREUR-wide telework policy page, and no Stuttgart, Bavaria, or Wiesbaden garrison page stating the same telework rules, was verified. The handout itself says it is basic information only and not a substitute for a personal Legal Assistance consultation.",
            "Retrieval note (pack Flag 7): the SpouseWorks overseas page rendered only a loading screen when opened directly, so only the specific statements visible in its indexed text are used here.",
          ],
          links: [
            { label: "Spousal Employment in Germany, Section VI — Kaiserslautern Legal Services Center", url: "https://home.army.mil/rheinland-pfalz/7917/5734/0999/Spousal_Employment_in_Germany.pdf" },
          ],
          source: "Spousal Employment in Germany, Section VI. Telework — Kaiserslautern Legal Services Center, USAG Rheinland-Pfalz",
        },
        {
          id: "G1-5",
          name: "Using a U.S. professional license in Germany",
          summary:
            "A U.S. state professional license does not become a German license by moving to Germany. The sourced, usable routes are U.S.-system jobs in Germany: Military OneSource states that in some occupations a state-issued license is valid for government and contracting jobs; DoDEA/DoWEA teaching announcements accept a valid, fully professional state teaching license (unencumbered, for full reciprocity); and on-base federal nursing announcements (e.g. Landstuhl Regional Medical Center) require a current, active, full, and unrestricted license from a State, DC, Puerto Rico, or a U.S. territory, plus NCLEX passage. FINDING: no official U.S. page found in the research stated a general route for using a U.S. license to practice a regulated profession on the German economy — that part is flagged, not asserted.",
          who: "Licensed spouses (teachers, nurses, and other licensed professionals) moving to Germany.",
          body: [
            "Teaching detail as published: DoDEA/DoWEA announcements state a valid, fully professional state teaching license in the content area (or the state's equivalent, as DoDEA determines comparable) fulfills all qualifications for professional teaching education and certification in content areas; for full reciprocity the license must be unencumbered — not revoked, suspended, or made probationary or conditional. Praxis I and II, or seven years of teaching at the PreK-12 level, can be substituted, with all minimum education requirements still met. Minimum academic preparation as published includes a baccalaureate degree from a regionally accredited institution, at least 40 semester hours of general education, and at least 18 semester hours of professional teacher education coursework. Apply through DoDEA's Employment Application System as directed in the announcement.",
            "Military OneSource's “Transferring Professional Licenses” page answers “Can I use my license overseas?” with: “In some occupations, your state-issued license — no matter where it's from — is valid for government and contracting jobs.”",
          ],
          flags: [
            "German-economy license recognition NOT VERIFIED (pack Flag 4): no official U.S. government, installation, or Military OneSource page found states whether, or how, a U.S. professional license can be recognized for practice with a German employer on the economy, or states in general terms that it cannot be used there. The Kaiserslautern handout does not address it. Only the U.S.-system routes on this card are asserted.",
            "SCRA portability is framed for U.S. states, not Germany (pack Flag 5): Military OneSource describes the SCRA license-portability provision as applying when a spouse moves “to a new state” for the duration of the military orders. It does not state that the provision applies in Germany, and this card does not extend it there.",
          ],
          links: [
            { label: "Transferring Professional Licenses — Military OneSource", url: "https://pre.militaryonesource.mil/benefits/transferring-your-professional-license/" },
            { label: "Search Requirements — DoDEA/DoWEA (dodea.edu)", url: "https://www.dodea.edu/offices/human-resources/work-dowea/teaching-categories-and-requirements/search-requirements?page=1" },
          ],
          source: "DoDEA/DoWEA teaching announcements (USAJOBS); Nurse announcements, Landstuhl Regional Medical Center (USAJOBS); Military OneSource",
        },
      ],
    },
    {
      key: "unemployment",
      label: "Unemployment After a PCS Quit",
      tileSub: "Entries G12-1–G12-3 · DOL, Coast Guard Spouse Employment Program, state labor departments",
      intro: "Quitting a job to follow a relocating service member is the classic military-spouse unemployment question. State law decides — and official sources conflict on which state to file in, so both sides print.",
      entries: [
        {
          id: "G12-1",
          name: "The general rule: quitting to follow a relocating service member",
          summary:
            "Unemployment insurance (UI) is normally for people unemployed through no fault of their own, and quitting usually works against a claim. The exception that matters for military spouses is state law: the U.S. Coast Guard's official Spouse Employment Program — Unemployment page states, “Forty-six states have passed laws that may qualify you for unemployment insurance (UI) when you resign from your position to move with your service member,” and “Each state determines the amount of compensation you can receive, length of time, and criteria for eligibility.” There is no single national spouse rule — which state you are in, and that state's law, decides. The DOL's state-by-state “Comparison of State Unemployment Insurance Laws” (including its voluntary-leaving / good-cause tables) is the published source for a particular state.",
          who: "Spouses who resign to move with a service member on a PCS-type relocation.",
          body: [
            "The U.S. Department of Labor's general UI page states the federal-state frame: UI is a joint state-federal program; each state administers a separate UI program under the same federal-law guidelines; each state sets its own eligibility guidelines; a claimant usually qualifies if unemployed through no fault of their own, meeting the state's work and wage requirements during a “base period” (in most states, the first four of the last five completed calendar quarters before filing), and meeting any additional state requirements.",
            "The Coast Guard page also states UI is often substantially less than previous earnings and is not a replacement for earned income.",
          ],
          flags: [
            "“46 states” count is dated / undated at source (pack Flag 2): the count comes from the Coast Guard Spouse Employment Program page, which carries no publication date in the fetched copy. A current, dated DOL table confirming that exact count was not verified — do not present “46” as a live, dated DOL figure.",
            "Deployment-specific quit NOT VERIFIED (pack Flag 3): the DOL and Coast Guard pages sourced frame the spouse claim as quitting to move / relocate with the service member (PCS-type move). No official page found stated that quitting because of a spouse's deployment, without a relocation, is a qualifying / good-cause separation. That claim is not asserted here.",
          ],
          links: [
            { label: "Spouse Employment Program — Unemployment — U.S. Coast Guard (dcms.uscg.mil)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Spouse-Employment-Program/Spouse-Employment-Program-Unemployment/" },
            { label: "How Do I File for Unemployment Insurance? — U.S. Department of Labor", url: "http://dol.gov/general/topic/unemployment-insurance?lang=th" },
          ],
          source: "U.S. Coast Guard Spouse Employment Program — Unemployment (dcms.uscg.mil); U.S. Department of Labor (dol.gov)",
        },
        {
          id: "G12-2",
          name: "How and where to file, and what documentation to bring",
          summary:
            "CONFLICT — official sources do not all say the same thing about which state a relocating military spouse should file in, and both published versions print here. DOL version: “you need to file a claim with the unemployment insurance program in the state where you worked” — and the Missouri Department of Labor's Military Unemployment Benefits page agrees (“You should file in the state you last worked”). Coast Guard spouse version: “Apply for benefits in the state where you have relocated… The law of the state where you apply will determine the results.” Because the two conflict, confirm with a State Workforce Agency before filing. Documentation as published (Coast Guard page): submit a copy of the spouse's orders with the unemployment paperwork even if not asked; list the spouse's military relocation as the reason for quitting on all forms; notify the employer in writing that you are quitting due to the spouse's military relocation and keep a copy.",
          who: "Spouses filing a UI claim after a PCS-relocation quit.",
          body: [
            "DOL process as published: contact the state's UI program as soon as possible after becoming unemployed; file in person, by telephone, or online depending on the state; if you worked in a state other than the one where you now live, or in multiple states, the UI agency where you now live can provide information about how to file with other states; complete and correct information (addresses and dates of former employment) keeps the claim from being delayed; it generally takes two to three weeks after filing to receive the first benefit check.",
            "Timing caution as published on the Coast Guard page: “Most states allow you to resign or quit 30 days before the report date listed on your spouse's orders, so be careful about quitting too early if you plan to file for unemployment.” A state example: Missouri claimants filing online select “Quit” as the reason for separation (Missouri Department of Labor).",
          ],
          flags: [
            "Filing-state conflict — UNRESOLVED, both sides printed (pack Flag 1): DOL (dol.gov) and the Missouri Department of Labor say file where you worked / last worked; the Coast Guard Spouse Employment Program page says apply in the state where you relocated. No official page found reconciles these two instructions for a relocating military spouse.",
          ],
          links: [
            { label: "Spouse Employment Program — Unemployment — U.S. Coast Guard", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Spouse-Employment-Program/Spouse-Employment-Program-Unemployment/" },
            { label: "Military Unemployment Benefits — Missouri Department of Labor", url: "https://labor.mo.gov/des/military-unemployment-benefits?style=mobile1" },
          ],
          source: "U.S. Department of Labor (dol.gov); U.S. Coast Guard Spouse Employment Program; Missouri Department of Labor",
        },
        {
          id: "G12-3",
          name: "Member-side cross-link: UCX — unemployment compensation for ex-servicemembers",
          summary:
            "UCX is the separate, member-side program — Unemployment Compensation for Ex-servicemembers. It is for the former service member after leaving active service; it is NOT the spouse's PCS-quit claim in G12-1 / G12-2. As DOL publishes: the program provides benefits for eligible ex-military personnel (former NOAA members are also covered); it is administered by the states as agents of the federal government; the person must have been separated under honorable conditions; there is no payroll deduction from servicemembers' wages for UI protection — benefits are paid by the branches; the law of the state under which the claim is filed determines benefit amounts, weeks, and other eligibility conditions. Contact the State Workforce Agency as soon as possible after discharge; a copy of the DD-214 or similar discharge documents may be helpful when opening a claim.",
          who: "Former service members after separation — included here only as a cross-link so the two programs are not confused.",
          body: [],
          flags: [],
          links: [
            { label: "Unemployment Compensation for Ex-servicemembers (UCX) — DOL ETA", url: "https://oui.doleta.gov/unemploy/ucx.asp" },
          ],
          source: "Unemployment Compensation for Ex-servicemembers (UCX) — U.S. Department of Labor, ETA (oui.doleta.gov)",
        },
      ],
    },
  ],
};

/* --------------------------- G3 + G4 — Care ------------------------------ */

export const CAREGIVER_SECTION: PackSection = {
  view: "caregiver",
  title: "VA Caregiver Support & EFMP Respite",
  headSub:
    "VA's two caregiver programs and VA respite (G3, SHIPS FULL — the PCAFC stipend ships as VA's published formula; VA publishes no dollar figure) plus EFMP respite care by service (G4): USMC / Air Force / Navy on the standardized 20/32-hour model, the Army with NO single hour figure because its own pages disagree, and the Coast Guard's Special Needs Program — not EFMP.",
  intro:
    "Caregivers carry the home front. This section gathers the VA Caregiver Support Program (PCAFC + PGCSS + VA respite through Geriatrics and Extended Care) and each service's EFMP respite care, exactly as the official pages publish them. Where a service's own pages disagree, both sides print and the flag stays on the card — most importantly the Army respite hours, where no single figure is asserted.",
  standing:
    "PCAFC stipend: VA publishes a FORMULA, not a dollar amount — the monthly stipend rate is the OPM GS Annual Rate for grade 4, step 1, for the locality pay area where the eligible veteran resides, divided by 12; Level One pays that rate × 0.625, Level Two × 1.00. No dollar figure appears anywhere in this section, because VA's pages state none. Army EFMP respite: NO single hour figure ships — Army pages publish 40 and 25 hours while the current installation page publishes none; check your installation EFMP office.",
  tiles: [
    {
      key: "pcafc",
      label: "VA Caregiver Programs (PCAFC + PGCSS)",
      tileSub: "Entries G3-1–G3-3 · VA.gov / caregiver.va.gov",
      intro: "VA's main family caregiver program (PCAFC) and its wider, lighter-touch general program (PGCSS).",
      entries: [
        {
          id: "G3-1",
          name: "Program of Comprehensive Assistance for Family Caregivers (PCAFC)",
          summary:
            "VA's main family caregiver program. A veteran who needs ongoing in-person personal care can name one primary family caregiver and up to two secondary family caregivers. Veteran eligibility — ALL must be true, as VA publishes: a VA disability rating (individual or combined) of 70% or higher; discharged from the U.S. military or has a date of medical discharge; needs at least 6 months of continuous, in-person personal care services; and enrolled in VA health care. Caregiver eligibility: at least 18, AND either a spouse, son, daughter, parent, stepfamily member, or extended family member of the veteran, OR someone who lives full time with the veteran or is willing to if designated. Primary caregivers may receive a monthly stipend (VA's published FORMULA: OPM GS grade 4, step 1 locality annual rate ÷ 12; Level One × 0.625, Level Two × 1.00 — VA publishes no dollar amount), CHAMPVA health coverage if they have no other plan, at least 30 days of respite care per year, and more.",
          who: "Veterans needing ongoing in-person personal care, and their family caregivers. Apply together on VA Form 10-10CG (online on VA.gov, by mail to the 10-10CG Evidence Intake Center, PO Box 5154, Janesville, WI 53547-5154, or in person at the nearest VA medical center's caregiver support team). Don't send medical records with the application.",
          body: [
            "Benefits both primary and secondary caregivers can receive, as published: caregiver education and training, mental health counseling, and certain travel benefits when traveling with the veteran to receive care. Primary family caregivers may also receive: the monthly stipend (direct deposit enrollment through the VA customer engagement portal is required); health care benefits through CHAMPVA if they don't already qualify under another plan; free legal and financial planning assistance related to the needs of the injured veteran; at least 30 days of respite care per year; access to telehealth therapy through VA's virtual psychotherapy program for caregivers (VPPC); and access to military commissaries, exchanges, and recreation retail facilities.",
            "Personal care means help another person provides for health and well-being, everyday personal needs (like feeding, bathing, and dressing), or safety, protection, or instruction in daily living. Before assignment, the caregiver must complete caregiver education and training and a home care assessment; VA says it will assign the caregiver no later than 90 days after it gets the application. After joining, caregivers take part in wellness contacts at least once every 120 days, with 1 annual visit to the veteran's home. Service-era note: the VA.gov PCAFC page does not limit eligibility by service era in its eligibility list — do not add an era test the page does not print.",
          ],
          flags: [
            "Stipend dollars — not published by VA, none printed (pack Flag 2): VA's PCAFC and stipend pages publish the formula only. Any dollar amount from a non-VA site was excluded. Do not add a dollar amount without a VA page that states one for a named locality.",
            "Service-era wording (pack Flag 3): the current VA.gov eligibility list contains no service-era test; older program history appears on non-VA summaries and is not printed as an eligibility rule here.",
          ],
          links: [
            { label: "The Program of Comprehensive Assistance for Family Caregivers — VA.gov", url: "https://www.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/" },
            { label: "PCAFC Monthly Stipend — Caregiver Support Program (caregiver.va.gov)", url: "https://caregiver.va.gov/support/PCAFC-Stipend.asp" },
          ],
          source: "VA.gov — PCAFC; caregiver.va.gov — PCAFC Monthly Stipend",
        },
        {
          id: "G3-2",
          name: "Program of General Caregiver Support Services (PGCSS)",
          summary:
            "VA's general support program for caregivers — the wider, lighter-touch program: no stipend and no formal application form. It may be right for you if you care for a veteran who is enrolled in VA health care, you provide personal care services to the veteran, and you want to connect with other caregivers, get more support from a professional care team, or grow your skills. VA notes: “You don't need to be a relative or live with the Veteran to be considered a general caregiver.” Services as listed on VA.gov: peer support mentoring, skills training, coaching, telephone support, online programs, and referrals to available resources. Caregiver Support Line, as VA publishes it on caregiver.va.gov: 1-855-260-3274, Monday–Friday, 8 a.m.–8 p.m. ET.",
          who: "Caregivers of veterans enrolled in VA health care who served in any era — including caregivers who do not meet PCAFC's stricter tests.",
          body: [
            "No application form is published for PGCSS — enrollment is by contact and intake: contact the caregiver support team or caregiver support coordinator at your nearest VA facility, or request a referral from the veteran's VA health care team, then complete an intake. The veteran must agree to receive care from you and have you listed as their caregiver in their health care record. If the veteran isn't enrolled in VA health care yet, the veteran must apply for VA health care first.",
            "The Caregiver Support Program home page lists the PGCSS services more fully: skills training, mobile support, one-on-one coaching, group support and coaching, self-care, peer support mentoring, telephone support, online programs, and referrals to available VA and community resources.",
          ],
          flags: [
            "Caregiver Support Line hours conflict (pack Flag 1): caregiver.va.gov publishes 1-855-260-3274, Monday–Friday, 8 a.m.–8 p.m. ET. A VA facility caregiver page (VA Cincinnati Health Care) published longer hours for the same line (Mon–Fri 8 a.m.–10 p.m. ET and Sat 8 a.m.–5 p.m. ET). The number is consistent across VA sources; the hours are not. This card prints the caregiver.va.gov version.",
          ],
          links: [
            { label: "The Program of General Caregiver Support Services — VA.gov", url: "https://www.va.gov/resources/the-program-of-general-caregiver-support-services/" },
            { label: "VA Caregiver Support Program (home) — caregiver.va.gov", url: "https://www.caregiver.va.gov/index.asp" },
          ],
          source: "VA.gov — PGCSS; VA Caregiver Support Program home (caregiver.va.gov)",
        },
        {
          id: "G3-3",
          name: "Caregiver Respite Care Through VA (Geriatrics and Extended Care)",
          summary:
            "A separate VA respite benefit from the PCAFC respite promise in G3-1, and not limited to PCAFC caregivers. VA's Geriatrics and Extended Care (GEC) Respite Care program pays for care for a short time when a family caregiver needs a break, needs to run errands, or needs to go out of town for a few days. Two types as published: (1) Home Respite Care — a person comes to the veteran's home, or the veteran goes to an adult day health care program; (2) Nursing Home Respite Care — the veteran goes to a VA Community Living Center or a community nursing home, scheduled in advance. Eligibility as published: “All enrolled Veterans are eligible for Respite Care IF they meet the clinical criteria for the service and it is available. Services vary by location.” A copay may be charged based on the veteran's service-connected disability status and financial information (VA Form 10-10EC route).",
          who: "Veterans who need help with activities of daily living, veterans who are isolated, or whose caregiver is experiencing burden. Start with the veteran's VA social worker / case manager.",
          body: [
            "Ways respite can be delivered, as published: a paid home health aide comes to the home; the veteran attends an Adult Day Health Care center; or the veteran goes to a nursing home. It can be used with other Home and Community Based Services. If respite is provided by a community agency, adult day health care center, or nursing home, the veteran also needs to meet community care eligibility.",
            "PGCSS connection: PGCSS (G3-2) lists referrals to available resources among its services; the GEC respite benefit on this card is the VA respite route a caregiver can be referred to. The VA.gov PGCSS page does not list respite as a direct PGCSS service.",
          ],
          flags: [
            "Day-count framing differs across VA pages (pack Flag 4): the GEC Respite Care page prints no day limit; VA's current copay page lists overnight respite care and daily respite care as each “available up to 30 days each calendar year,” while the PCAFC page promises primary family caregivers “at least 30 days of respite care per year.” “Up to 30” (general benefit framing) and “at least 30” (PCAFC framing) print separately in G3-1 and here, and are not merged into one rule.",
          ],
          links: [
            { label: "Respite Care (Geriatrics and Extended Care) — VA.gov", url: "https://www.va.gov/geriatrics/pages/Respite_Care.asp" },
          ],
          source: "Respite Care — VA Geriatrics and Extended Care (va.gov/geriatrics)",
        },
      ],
    },
    {
      key: "efmp",
      label: "EFMP Respite Care by Service",
      tileSub: "Entries G4-1–G4-5 · DoD standard: Level of Need 3 = 20 hrs/mo, Level of Need 4 = 32 hrs/mo",
      intro: "DoD standardized EFMP respite care under DoD Instruction 1315.19 (June 2023): per Military OneSource's Office of Special Needs, a dependent scored Level of Need (LoN) 3 makes the family eligible for 20 hours per month; LoN 4, 32 hours per month; LoN 1 or 2 are not eligible. Hours are not limited because a family also gets respite from another source (e.g. TRICARE ECHO). Each service card prints what that service itself publishes — including where a service's older pages still show old numbers.",
      entries: [
        {
          id: "G4-1",
          name: "Army EFMP Respite Care — no single hour figure (check your installation EFMP office)",
          summary:
            "A temporary rest period for Army families who regularly care for a person with disabilities. The current Army installation EFMP page (Fort Belvoir) describes respite as available to eligible Level 3 or Level 4 exceptional family members, for active Army and active Guard and Reserve families, “if care is not available/accessible through CYS, TRICARE ECHO or state resources” — and that page publishes NO number of hours. CONFLICT: older Army pages still live publish different numbers — a home.army.mil EFMP page states “up to 40 hours” per month per certified family member, and an Army.mil Fort Drum article (March 13, 2024) quotes “up to 25 hours of respite care per month.” NO single Army hour figure is asserted in this app: check your installation EFMP office for the Army's current figure.",
          who: "Army families (active Army and active Guard and Reserve) caring for a Level 3 or 4 EFM. Apply at the nearest installation Army Community Service (ACS) EFMP office.",
          body: [
            "Eligibility as published on the Fort Belvoir page: based on EFMP enrollment and the medical condition(s) of the family member requiring care; providers undergo a Child Care National Agency Check with Inquiries (CNACI) and an installation records check. The Fort Belvoir page routes EFMP family support through the ACS EFMP office in the Soldier & Family Readiness Center.",
            "Against both older Army numbers, the DoD-wide standard in the Military OneSource Office of Special Needs transcript is 20 hours (LoN 3) / 32 hours (LoN 4) per month per family. No current Army headquarters page confirming the Army's own current hour figure was found in the research. Deployment framing: the older home.army.mil page frames respite around deployments (“especially now with multiple deployments”); the current Fort Belvoir page publishes no deployment-period framing.",
          ],
          flags: [
            "Army respite hours — UNRESOLVED CONFLICT (pack Flag 5): Army's own live pages publish 40 hours/month (home.army.mil) and 25 hours/month (Army.mil Fort Drum, March 2024; also a Fort Polk article). The current Fort Belvoir ACS EFMP page confirms Level 3/4 eligibility but publishes no hours. The DoD standard is 20/32. Army hours must be verified with the installation ACS EFMP office before any single Army number is printed.",
            "Deployment-period framing (pack Flag 11): no service page opened for this research publishes a deployment-period increase in respite hours. Any deployment-specific respite rule would need a new source before it is printed.",
          ],
          links: [
            { label: "Exceptional Family Member Program — Fort Belvoir ACS (home.army.mil)", url: "https://home.army.mil/belvoir/my-fort-belvoir/all-services/army-community-service/exceptional-family-member-program-efmp" },
            { label: "Sensory workshops integral part of Fort Drum EFMP support (army.mil)", url: "https://www.army.mil/article/274491/sensory_workshops_integral_part_of_fort_drum_efmp_support" },
          ],
          source: "Fort Belvoir ACS EFMP (home.army.mil); home.army.mil EFMP page; Army.mil Fort Drum article",
        },
        {
          id: "G4-2",
          name: "Marine Corps EFMP Respite Care",
          summary:
            "A reimbursement program: Marine families pick, hire, and pay their own respite provider, then seek reimbursement from EFMP. USMC MCCS calls it “a non-entitlement benefit intended to provide brief rest periods for the primary caregiver(s)” — it may not be used to fund preschool, daycare, or babysitting, to let the sponsor or family member work or attend school, or for the EFM's therapy sessions. Hours — CONFLICT within MCCS sources, both sides printed: (1) the MCCS Iwakuni EFMP page states “up to 20 hours of respite care, per month,” not more than 6 hours per day, hours do not accrue; (2) MCCS installation documents (Henderson Hall; Hampton Roads, 2024) state the split model — LoN 3 up to 20 hours per month per family, LoN 4 up to 32 hours per month per family, no more than 6 consecutive hours at one time, under MCO 1754.4C. The split model matches the DoD standard.",
          who: "Marine families with current EFMP enrollment and an EFM assessed by HQMC EFMP as Level of Need 3 or 4, legally residing with the sponsor (published exceptions include TAD, official schools, and deployment). Apply through the installation EFMP office / MCCS; register with each new duty station's EFMP office at every PCS.",
          body: [
            "Eligibility as published: EFMP enrollment is current; the sponsor has provided documentation of the provider's qualifications (certification or license); and the sponsor or power of attorney has signed the EFMP Respite Care Program forms. LoN definitions as published: LoN 3 = children 18 and younger with severe special needs, provider over 18 with valid state/national certification; LoN 4 = family members of all ages with profound special needs, provider over 18 with a valid professional license. Adult EFMs who are LoN 4 are eligible for respite care for themselves. EFMP respite funds cannot be used for child care for siblings of an EFM or a child of an adult EFM.",
            "Payment amounts are determined locally and will not exceed the reimbursement hourly rates in Marine Corps Bulletin 1754 (Iwakuni page). Deployment framing: deployment appears only as an exception to the “EFM legally resides with the sponsor” rule; no separate deployment-period respite increase is published.",
          ],
          flags: [
            "USMC respite hours — conflict inside MCCS (pack Flag 6): the flat-20 Iwakuni page is still live and prints alongside the 20/32 split-model installation documents. Both are MCCS sources; the split model matches the DoD standard and the more detailed documents.",
          ],
          links: [
            { label: "Exceptional Family Member Program — MCCS Iwakuni (usmc-mccs.org)", url: "https://iwakuni.usmc-mccs.org/marine-family-support/military-family-life/exceptional-family-member-program" },
            { label: "EFMP Respite Care Reimbursement Program — MCCS Henderson Hall", url: "https://hendersonhall.usmc-mccs.org/modules/media/?do=inline&id=7e4adc17-d57d-4f80-a91a-41a3c51ac1b6&v=1" },
          ],
          source: "MCCS Iwakuni EFMP; MCCS Henderson Hall EFMP Respite Care Reimbursement Program",
        },
        {
          id: "G4-3",
          name: "Air Force / Space Force EFMP Respite Care",
          summary:
            "Free respite care for Department of the Air Force (DAF) families with children identified as exceptional family members. The current DAF flyer (administered by Child Care Aware of America) offers “either 20 or 32 hours a month” — “the EFM's level of need will determine how many hours per month a family receives.” The mapping is published in a Joint Base Andrews M&FRC EFMP document on the DoD standardization (effective March 1, 2025): LoN 3 — 20 hours per month per family; LoN 4 — 32 hours per month per family; LoN 1 and 2 families are not eligible; sibling care is no longer authorized regardless of LoN. Space Force Guardians are covered under the Department of the Air Force program — no separate Space Force EFMP respite program was found on an official page.",
          who: "DAF families (Air Force and Space Force): sponsor active duty or a reservist on active-duty orders; EFM child(ren) birth through 18 residing with the sponsor; available in the U.S. As published on the flyer: call 800-424-2246 or visit www.childcareaware.org.",
          body: [
            "CONFLICT with older Air Force material, both sides printed: older Air Force EFMP respite material published up to 40 hours per month (moderate or severe special needs, birth through 18, siblings birth through 12 included), and an older Joint Base Charleston article published 8 to 20 hours per month at a limited list of locations. The current DAF flyer and the March 1, 2025 standardization document supersede those numbers on their face. Deployment framing: none published in the current DAF flyer or the Andrews standardization document.",
            "Family Support side: EFMP-Family Support (EFMP-FS) at the installation Military & Family Readiness Center handles respite care information and processing.",
          ],
          flags: [
            "Air Force hours — old vs. new (pack Flag 7): the Andrews document is an installation FSS PDF hosted on a cloudfront URL, not an AFPC headquarters page; no AFPC headquarters page stating the 20/32 split was found.",
            "Space Force — no separate program found (pack Flag 10): the DAF flyer is addressed to “DAF families,” which on its face covers Air Force and Space Force, but the flyer does not name Guardians. No Space Force-specific rule is printed from this research.",
          ],
          links: [
            { label: "EFMP Respite Care — DAF Parent Flyer (Child Care Aware of America)", url: "https://info.childcareaware.org/hubfs/DAF%20EFMP%20Respite%20Care%20Parent%20Flyer_Final.pdf" },
          ],
          source: "DAF EFMP Respite Care Parent Flyer (Child Care Aware of America); Joint Base Andrews M&FRC EFMP document",
        },
        {
          id: "G4-4",
          name: "Navy EFMP Respite Care",
          summary:
            "Temporary relief for the primary caregiver of an exceptional family member, at no cost to families, in two parts: a child respite program (birth to 18) managed by Child Care Aware of America, and an adult respite care reimbursement program (19 and older) managed by NAVPERSCOM-456 (PERS-456), where eligible sailors pick their own provider and are reimbursed. The current CNIC page (updated October 7, 2026, as printed on the page) provides “20 or 32 hours of respite care per month, per family” under DoDI 1315.19 (June 2023): LoN 1 and 2 are not eligible; LoN 3: 20.0 hours per month; LoN 4: 32.0 hours per month. Adult reimbursement rates as published: LoN 3 up to $30.00/hour, LoN 4 up to $45.00/hour, $60.00/hour for 2 or more eligible adult EFMs.",
          who: "Active-duty sailors with current EFMP enrollment and an EFM living with them, determined eligible by the PERS-456 Central Screening Committee (eligibility is stated in the EFMP enrollment letter). Reservists must submit orders showing active-duty status of at least 180 days and are eligible only while on active duty. Retirees remain eligible for a 60-day transition period after retirement; surviving spouses of active-duty sailors who have passed away receive one additional year.",
          body: [
            "Where: children (birth to 18) — Child Care Aware of America, call 1-800-424-2246, complete the CCAoA documents, and email the current EFMP enrollment letter to CCAoA; wait for a confirmation email. Adults (19 and older) — email NAVPERSCOM-456 at usn.mid-south.chnavpersmiltn.mbx.efmp-admin@us.navy.mil to apply. Adult providers selected by the sponsor must be 18 or older, have a valid ID/driver's license, and keep current First Aid/CPR certification. Availability as published: the child program is available in the United States, including Hawaii; the adult reimbursement program is available throughout the United States and overseas.",
          ],
          flags: [
            "Navy respite — old flyer still live (pack Flag 8): an older MyNavy HR Navy CYP flyer still hosted on mynavyhr.navy.mil offers “40 hours of free respite care a month” for an EFM child with “a current enrollment in the EFMP as a Category 4 or 5.” The current CNIC page uses LoN 3/4 and 20/32 hours, not Categories 4/5 and 40 hours, and is treated as current because it cites DoDI 1315.19 (June 2023) and carries the newest date — but a reader landing on the flyer will see the old rule.",
          ],
          links: [
            { label: "EFMP Respite Care — Commander, Navy Installations Command (cnic.navy.mil)", url: "https://ffr.cnic.navy.mil/Family-Readiness/Fleet-And-Family-Support-Program/Work-and-Family-Life/Exceptional-Family-Member-Program/EFMP-Respite-Care/" },
            { label: "EFM Respite Care flyer (older) — MyNavy HR", url: "https://www.mynavyhr.navy.mil/Portals/55/Support/EFMP/Navy%20CYP%20EFM%20Respite%20Care%20Parent%20Flyer_Final.pdf?ver=5m0qyA0j0RS1jjLupH_yQw==" },
          ],
          source: "EFMP Respite Care — CNIC (ffr.cnic.navy.mil); EFM Respite Care flyer — MyNavy HR (older)",
        },
        {
          id: "G4-5",
          name: "Coast Guard — Special Needs Program and Respite Care Grant (no EFMP respite program published)",
          summary:
            "The Coast Guard does not run an EFMP. Its equivalent is the Special Needs Program (SNP). FINDING: no Coast Guard EFMP-style respite care program (no level-of-need hours model) is published on an official Coast Guard page found in this research. What IS published: (1) the official Coast Guard Special Needs resource page points families to TRICARE ECHO, which “offers benefits that include training, respite care, home care, incontinence supplies, technology devices and more”; and (2) Coast Guard Mutual Assistance (CGMA) — the Coast Guard's mutual assistance organization, not a service-run EFMP benefit — publishes a short-term Respite Care Grant for SNP enrollees: up to 120 hours to establish care (may not exceed 40 hours per month, or 8 hours per week), up to 3 months to establish the care, one further 120-hour extension may be requested, maximum rate of $30 per hour, as a grant.",
          who: "Coast Guard families with a family member enrolled in the Special Needs Program (spouse, dependent child, or dependent parent registered in DEERS with a profound disability or a serious or terminal illness requiring ongoing care). SNP enrollment is mandatory for active duty and selected reserve members on orders for 181 days or more with dependent family members with special needs, per the MyCG article; enrollment updates occur every three years or when the condition changes.",
          body: [
            "The CGMA grant is short-term help so a family can build its own resources for self-financed respite care and apply for help through health insurance, government, or community agencies — bridge help, not an ongoing monthly entitlement. Apply through CGMA / find your CGMA representative via mycgma.org. For SNP enrollment questions, your Family Resource Specialist can help determine if enrollment is required.",
          ],
          flags: [
            "Coast Guard — negative finding (pack Flag 9): the Coast Guard has no EFMP (it runs the Special Needs Program, under the Department of Homeland Security, not DoD), and no Coast Guard-published EFMP-style respite program with a level-of-need hours model was found. The CGMA grant details come from mycgma.org — CGMA's own site, outside the VA/service/Military OneSource source list — included only because an official Coast Guard article points families to CGMA for exactly this help. Treat the CGMA grant as a charity grant, not a service benefit.",
            "DoD report wording not used (pack Flag 12): a Military OneSource-hosted Office of Special Needs annual report snippet described standard allotments with different level numbers (“20 for Level of Need 2 and 32 for LoN 3”) in extracted text, conflicting with the same office's podcast transcript, the Navy CNIC page, the USMC documents, and the DAF standardization document (all: LoN 3 = 20, LoN 4 = 32, LoN 1/2 ineligible). That report was not used as a source for any entry; the conflict is flagged here instead of printed as a rule.",
          ],
          links: [
            { label: "Special Needs — United States Coast Guard (MyCG Resources)", url: "https://www.mycg.uscg.mil/Resources/Article/2485419/special-needs/" },
            { label: "Respite Care Grant — Coast Guard Mutual Assistance (mycgma.org)", url: "https://mycgma.org/programs/respite-care-grant/" },
          ],
          source: "Special Needs — MyCG (mycg.uscg.mil); Respite Care Grant — CGMA (mycgma.org)",
        },
      ],
    },
  ],
};
