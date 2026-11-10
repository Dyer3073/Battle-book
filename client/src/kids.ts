// Kids & Schools Center — transcribed from the researched pack
// (~/workspace/military-app/kids/kids.md, researched Nov 9, 2026).
// Official sources only: Military OneSource (incl.
// MilitaryINSTALLATIONS), the Military Interstate Children's Compact
// Commission (MIC3) at mic3.net, DoDEA at dodea.edu, the services'
// official School Liaison pages, ED.gov (Impact Aid), USDA NIFA
// (4-H), and BGCA's own military-partnership pages. Site identity is
// load-bearing: mic3.net is the Compact Commission; militarychild.org
// is MCEC, a separate nonprofit — never conflated here. Military Kids
// Connect stays LINKLESS (standing flag) — named in its flag entry,
// no outbound link, no entry. Child care and EFMP enrollment live in
// Family & Life Events and are cross-linked, not duplicated.

import type { RefGroup } from "./refdata";

export const KIDS_STANDING =
  "Three names solve almost every military school problem: your School Liaison (free, at every installation, pre-K–12), the Interstate Compact (state law in all 50 states + DC that smooths public-school transfers), and — overseas — DoDEA. Start with the liaison.";

export const KIDS_INTRO =
  "The deep K–12 education center: School Liaisons service by service (including the Coast Guard finding — there is no CG liaison corps), the Interstate Compact provision by provision from the Commission itself at mic3.net, IEP & 504 continuity at the schoolhouse door, the PCS paper drill, DoDEA / NDSP / the DoDEA Virtual School, Impact Aid, homeschooling, and youth programs. No school ratings, no per-school data, no state-by-state law catalogs — those route to the liaison and the official pages named on each card.";

const SLO_PAGE = { label: "School Liaison Program (Military OneSource)", url: "https://www.militaryonesource.mil/benefits/school-liaison-program/" };
const SLO_SEARCH = { label: "MilitaryINSTALLATIONS — School Liaison Program search", url: "https://installations.militaryonesource.mil/?looking-for-a=program/program-service=12/focus=program" };
const NAVY_SLO = { label: "Navy SLO “seven core functions” (CNIC installation page)", url: "https://cnrma.cnic.navy.mil/Installations/NSA-Mechanicsburg/NSA-Philadelphia/Resources/Support-Services/Families/Child-and-Youth-Programs/School-Liaison-Program/" };
const ARMY_SLO = { label: "Army School Liaison Office (MyArmyBenefits)", url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/School-Liaison-Office?serv=122" };
const USMC_SLP = { label: "USMC School Liaison (HQ location picker)", url: "https://www.usmc-mccs.org/services/family/school-liaison/" };
const NAVY_CYES = { label: "Navy Child & Youth Education Services", url: "https://www.navycyp.org/programs-services/child-and-youth-education-services" };
const DAF_SLP = { label: "DAF School Liaison Program", url: "https://dafchildandyouth.com/school-liaison-program" };
const CG_SLP = { label: "Coast Guard School Liaison Program (Work-Life / CG-111)", url: "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/School-Liaison-Program/" };
const HOMESCHOOL_OS = { label: "Homeschooling for Military Families (Military OneSource)", url: "https://www.militaryonesource.mil/parenting/children-youth-teens/homeschooling-military-families/" };
const PREK12 = { label: "Pre-K to 12 Education guide (Military OneSource)", url: "https://pre.militaryonesource.mil/resources/millife-guides/pre-k-to-12-education/" };
const DAF_CHECKLIST = { label: "DAF PCSing-with-students checklist (SY 24-25, PDF)", url: "https://www.dafchildandyouth.com/wp-content/uploads/2024/06/SY-24-25-PCSing-with-Mil-Connected-Students-Checklist-May-2024.pdf" };
const MIC3_BG = { label: "MIC3 — Background", url: "https://mic3.net/background/" };
const MIC3_FAQ = { label: "MIC3 — FAQs", url: "https://mic3.net/faqs/" };
const MIC3_ONEPAGER = { label: "MIC3 — one-page Guide for Schools/Parents (PDF)", url: "https://mic3.net/assets/one-pager-parents-and-schools.pdf" };
const MIC3_OPINIONS = { label: "MIC3 — advisory opinions booklet (PDF)", url: "https://mic3.net/wp-content/uploads/2026/01/2025MIC3_AdvisoryOpinions_Booklet-Final.pdf" };
const MIC3_RULES = { label: "MIC3 — deployment resources / rules summary", url: "https://mic3.net/deployment-resources/" };
const MIC3_SLO = { label: "MIC3 — “Find My School Liaison” route", url: "https://mic3.net/school-liaisons/" };
const MIC3_QUICK = { label: "MIC3 — Quick Links", url: "https://mic3.net/quicklinks/" };
const MIC3_DOCS = { label: "MIC3 — Document Library", url: "https://mic3.net/document-library/" };
const OS_COMPACT = { label: "Interstate Compact (Military OneSource)", url: "https://pre.militaryonesource.mil/education-employment/for-children-youth/interstate-compact/" };
const IEP504 = { label: "IEP vs. 504 Plan (Military OneSource)", url: "https://www.militaryonesource.mil/special-needs/educational-needs/iep-vs-504-plan-for-students-with-special-needs/" };
const OSEP = { label: "OSEP Dear Colleague Letter — highly mobile children (ED)", url: "https://sites.ed.gov/idea/idea-files/osep-dear-colleague-letter-on-education-for-highly-mobile-children/" };
const MI_SPECED = { label: "Special Education / EIS (MilitaryINSTALLATIONS template)", url: "https://installations.militaryonesource.mil/military-installation/naval-station-guantanamo-bay/exceptional-family-member-program/special-education-eis" };
const PCS_GUIDE = { label: "Planning a PCS Move guide (Military OneSource)", url: "https://www.militaryonesource.mil/resources/millife-guides/planning-pcs-move/" };
const MI_EDU = { label: "Education (MilitaryINSTALLATIONS — representative installation)", url: "https://installations.militaryonesource.mil/military-installation/ellsworth-air-force-base/education/education" };
const DODEA_ABOUT = { label: "About DoDEA", url: "https://www.dodea.edu/about/about-dodea" };
const DODEA_POLICY = { label: "DoDEA — education policy overview", url: "https://www.dodea.edu/education/education-policy-and-operations/policy-and-procedure-overview" };
const DODEA_AI1344 = { label: "DoDEA AI 1344.01 — Eligibility and Enrollment (PDF)", url: "https://dodea.widen.net/content/eldparn3lz/original/ai-1344-01-eligibility-and-enrollment-requirements-in-dodea-schools-change-2-signed-20250502-v-2.pdf" };
const DODEA_REG = { label: "DoDEA — registration (school site reproduction)", url: "https://stuttgartes.dodea.edu/print/pdf/node/1231" };
const NDSP = { label: "NDSP (DoDEA)", url: "https://main1.prod.acquia.dodea.edu/non-dow-schools" };
const NDSP_FAQ = { label: "NDSP FAQs (DoDEA)", url: "https://www.dodea.edu/non-dod-schools/frequently-asked-questions-faqs" };
const NDSP_HOME = { label: "NDSP Home Study / Virtual Education (DoDEA)", url: "https://main1.prod.acquia.dodea.edu/non-dod-schools/home-study-virtual-education" };
const DVHS = { label: "DoDEA Virtual High School (DVHS)", url: "https://dvhs.dodea.edu/" };
const DVHS_ELIG = { label: "DVHS — eligibility", url: "https://dvhs.dodea.edu/eligibility" };
const DODEA_HS = { label: "DoDEA AI 1375.01 — Home-School Students (regulation listing)", url: "https://www.dodea.edu/offices/office-dodea-policy/regulation/home-school-students-change-1" };
const IMPACT_ED = { label: "Impact Aid (ED.gov)", url: "https://www.ed.gov/grants-and-programs/formula-grants/impact-aid-grants" };
const IMPACT_OS = { label: "Federal Impact Aid Program block (Military OneSource, Higher Education)", url: "https://www.militaryonesource.mil/education-employment/education/higher-education/" };
const IMPACT_ARMY = { label: "Federal Impact Aid Survey (Army Resilience Directorate)", url: "https://www.ArmyResilience.army.mil/ard/Impact-Aid-Survey-blog.html" };
const IMPACT_JBC = { label: "Impact Aid explainer (Joint Base Charleston)", url: "https://www.jbcharleston.jb.mil/News/Article/234259/impact-aid-a-different-type-of-school-fundraiser/" };
const MCC = { label: "MilitaryChildCare.com — how to request care", url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome/how-request-child-care-and-manage-your-requests" };
const ARMY_YOUTH = { label: "Youth Center / MST (Army MWR, installation instance)", url: "https://huachuca.armymwr.com/programs/youth-center" };
const ARMY_SPORTS = { label: "Youth Sports & Fitness (Army MWR, installation instance)", url: "https://buchanan.armymwr.com/programs/cys-services" };
const NAVY_CYP = { label: "Navy Child and Youth Programs (CNIC)", url: "https://ffr.cnic.navy.mil/Fleet-Readiness/Child-and-Youth-Programs/Navy-School-Liaison-Officer/" };
const MI_YOUTH = { label: "Youth Services (MilitaryINSTALLATIONS, installation instance)", url: "https://installations.militaryonesource.mil/military-installation/grand-forks-afb/child-and-youth-services/youth-services" };
const BGCA = { label: "BGCA Military (Mission: Youth Outreach)", url: "https://www.bgca.org/about-us/military/" };
const BGCA_MYO = { label: "MYO enrollment (BGCA)", url: "https://www.bgca.org/about-us/military/mission-youth-outreach/" };
const NIFA = { label: "4-H Military Youth Programs (USDA NIFA)", url: "https://www.nifa.usda.gov/grants/programs/4-h-positive-youth-development/4-h-access-equity-opportunity/military-youth-programs" };

export const KIDS_GROUPS: RefGroup[] = [
  {
    title: "School Liaison Officers",
    entries: [
      {
        name: "What a School Liaison is",
        body: "Per Military OneSource: “School liaisons are located at each installation and are the main contact for military families, local school systems and installation leadership for school-related matters pre-K through 12th grade.” They are “experienced professionals who support, advise and build partnerships with the civilian and military community to help address common education challenges of military families” — school selection, credit transfer, youth sponsorship referrals, special-education navigation, and more, “at any point during your student's schooling.”",
        who: "Any military-connected family with a pre-K–12 student — inbound, outbound, or mid-tour.",
        flag: "OneSource's benefit page does not itself state a price for liaison services; the Army's CYS pages state the services are “provided at no cost to you,” and no official page found charges for them — this section calls the program free citing the services, and does not attribute the word to OneSource's benefit page.",
        links: [SLO_PAGE, SLO_SEARCH],
        source: "Military OneSource — School Liaison Program",
      },
      {
        name: "What liaisons do — the published service lists",
        body: "OneSource's current benefit page lists “School liaison support includes: Transition support · Alternative schooling support · Deployment support · College, career and military readiness · Parent workshops · Special education support and referrals,” and expands: information on school districts and boundaries and campus programs; help transferring credits and registering for classes; locating after-school and extracurricular programs; tutoring referrals; youth sponsorship referrals; support for elementary/middle/high-school transitions and overseas transitions; and compliance help for the Interstate Compact. During a deployment they additionally help with parental-absence coping strategies, educator awareness of deployment cycles, MIC3 compliance, and confidential counseling referrals. The services' own framing is different and is not merged with OneSource's list: the classic seven core functions are published verbatim by the Navy — (1) School Transition Services (PCS Cycle); (2) Deployment Support; (3) Command, School, Community Communications; (4) Special Education System Navigation; (5) Home School Linkage and Support; (6) Partnerships in Education (PIE); (7) Post-Secondary Preparations. The Army publishes a five-topic variant (School Transition and Deployment Support; Installation and School Communication; Partnerships in Education; Homeschool Connections; Post-Secondary Education/Opportunities).",
        links: [SLO_PAGE, NAVY_SLO, ARMY_SLO],
        source: "Military OneSource; Navy CNIC; MyArmyBenefits",
      },
      {
        name: "The program's name in your service",
        body: "Same mission, different labels. Army — School Liaison Officers (SLOs) under School Support Services, part of Child & Youth Services (CYS); SLOs “act as a conduit between schools — including public schools, private schools, and homeschooling — and the installation”; eligibility: all military-connected families. Marine Corps — School Liaison Program (SLP) under MCCS / Marine & Family Programs; liaison staff are also called SLOs in installation material; Quantico's page: the program “helps military families navigate the education system and assists with school transitions, special education services, and local school information,” for active-duty families, Guard/Reserve on active orders, DoD civilians, and retirees with school-aged children, on or off base. Navy — School Liaison (Officer) under Child & Youth Programs (CYP), delivered through Child & Youth Education Services (CYES): “Our School Liaison Officers (SLO) help families with children in pre-kindergarten through 12th grade.” Air Force & Space Force — School Liaison Program Managers (SLPMs) in the Department of the Air Force School Liaison Program (one program serves both services): “School Liaisons are installation subject matter experts to families, installation leadership staff, and commanders who assist with all local Pre-K through grade 12 school issues.” Coast Guard — no CG liaison corps: the Coast Guard's official “School Liaison Program” page (Office of Work-Life, CG-111) delivers support differently — CG families use the DoD SLOs of the other services, and the CG's own points of contact are the Family Resource Specialist (FRS) or Child Development Services Specialist (CDSS) on the Regional Work-Life Staff (202-475-5100; HQS-SMB-FamilySupportServices@uscg.mil). Its stated purpose: “education support information, referral, and guidance to maximize the opportunity for academic success of military associated children”; discussions are confidential. Eligibility as published: active duty, Selected Reserve and family members, civil service employees, Exchange/MWR employees. There is no “Coast Guard SLO” title or directory — none is invented here.",
        flag: "Navy title in transition: recent Navy directories shorten “School Liaison Officer (SLO)” to “School Liaison / SL.” DAF offices are often housed in the Military & Family Readiness Center — common, but the DAF HQ page does not make it a universal rule, so it is not printed as one.",
        links: [USMC_SLP, NAVY_CYES, DAF_SLP, CG_SLP],
        source: "USMC MCCS; Navy CYP; DAF School Liaison Program; USCG Work-Life (CG-111)",
      },
      {
        name: "Finding your liaison",
        body: "Three official routes, in order: (1) MilitaryINSTALLATIONS program search — the DoD directory's School Liaison Program listing (program-service 12) returns each installation's liaison contacts (address, phone/DSN, website, hours) across all branches, including Space Force installations; this is the route OneSource's own “Find your school liaison” button uses, and the single directory link this section gives everyone. (2) Service headquarters inboxes (published by OneSource): Army hqschoolliaison@army.mil · Marine Corps hqmcslp@usmc.mil · Navy NavyHQSchoolLiaison@us.navy.mil · Air Force daf.slo@us.af.mil. (3) Service directories where they exist: the Navy publishes a worldwide School Liaison Directory PDF via Navy MWR/CYP sites.",
        flag: "No Coast Guard inbox and no separate Space Force inbox appears in OneSource's list — CG families use the Work-Life route in the entry above; Space Force goes through the DAF program (OneSource does not state this explicitly — flagged, not asserted). No single USMC-wide directory page was found (HQ's page is a location picker into installation MCCS pages), and the DAF's own PCS checklist routes families to the same MilitaryINSTALLATIONS search as route 1.",
        links: [SLO_SEARCH, MIC3_SLO],
        source: "MilitaryINSTALLATIONS; Military OneSource",
      },
      {
        name: "When to call — inbound and outbound",
        body: "OneSource: “Reach out to your school liaison as soon as you have a question or concern” — and specifically, “Received PCS orders? Before you go, contact your school liaison.” The Army's version: “To ease the transition, contact your SLO as soon as you get orders.” Outbound (losing installation), as officially described: information on the upcoming duty station and its educational options; a youth-sponsor connection for your child; help preparing departure from current schools, including records/transcripts. Inbound (gaining installation): local school information (districts, boundaries, campus programs), school selection help, transferring records and credits, registering for classes, after-school/extracurricular connections, tutoring and youth-sponsorship referrals, overseas-transition support, and Compact compliance help. Navy CNIC states the linking duty plainly: liaisons “ensure a communication link with inbound and outbound families on educational issues.”",
        flag: "No general “contact X weeks out” rule exists on OneSource's general liaison pages — the only numbered pre-PCS timeline found (3–6 months out: ask for a warm handoff to the gaining installation's liaison, ask about preregistration, request records and the latest IEP/IFSP) sits in the special-education/EFMP context on MilitaryINSTALLATIONS; it is shown inside the special-needs entries with that context, not as a general deadline. The OneSource Pre-K to 12 guide link returned on the pre. subdomain during research.",
        links: [PREK12, DAF_CHECKLIST],
        source: "Military OneSource; Army CYS; Navy CNIC",
      },
      {
        name: "Liaisons for homeschool and special-needs families",
        body: "OneSource names the liaison as the first stop for both groups. Homeschool: “If your family is exploring or has already chosen homeschooling, make your local school liaison your first stop” — liaisons connect families to local homeschool resources, share state education and course requirements, and help with PCS transitions (see the Homeschooling tile). Special needs: liaisons provide “special education support and referrals,” help you “navigate your school's special education department and other local resources,” and can refer you to EFMP — enrollment itself lives in Family & Life Events and is cross-linked, not repeated here.",
        links: [HOMESCHOOL_OS],
        source: "Military OneSource — Homeschooling for Military Families",
      },
    ],
  },
  {
    title: "The Interstate Compact (MIC3)",
    note: "Full name: Interstate Compact on Educational Opportunity for Military Children. Governed by: the Military Interstate Children's Compact Commission (MIC3). Every fact in this tile cites mic3.net — the Commission's own site. militarychild.org is the Military Child Education Coalition (MCEC), a separate nonprofit — a legitimate partner organization, but NOT the Commission, and no Compact fact here cites it.",
    entries: [
      {
        name: "What the Compact is",
        body: "Per the Commission: “A compact is an agreement among states, ‘a contract’, to abide by a specific set of administrative rules… The interstate commission is a quasi-governmental, regulatory body, whose governance is led by member states, and administrated independent of federal intervention.” MIC3 — “founded in 2008” — is that governing body; its members are all 50 states and the District of Columbia, with the Department of Defense an ex-officio, non-voting member. The model language was drafted in 2006 by DoD's Office of Personnel and Readiness with the Council of State Governments and finalized in 2007. The Compact “is not exhaustive in its coverage, it addresses key issues…: eligibility, enrollment, placement, and graduation,” with “built-in enforcement and compliance mechanisms.”",
        flag: "The Commission's summary pages say “founded in 2008” but do not publish an exact effective date — this section prints 2008 and nothing more specific.",
        links: [MIC3_BG, MIC3_FAQ],
        source: "MIC3 — Background; FAQs (mic3.net)",
      },
      {
        name: "Who is covered",
        body: "The Commission's FAQ list, verbatim in substance — children of: active duty members of the uniformed services, including members of the National Guard and Reserve on active duty orders (Title 10); members or veterans who are medically discharged or retired — for one year; members who die on active duty — for a period of one year after death; and uniformed members of the Commissioned Corps of NOAA and the U.S. Public Health Service. Coverage clarifications the Commission has published: Coast Guard families are covered (Advisory Opinion 01-2017 — the Compact's definition of uniformed services explicitly includes the Coast Guard), and Space Force families are covered (Advisory Opinion 01-2020 — no amendment was required; a Feb 2025 MIC3 sheet lists covered members as “active-duty members of the uniformed services, Coast Guard and Space Force”). Grade scope: children enrolled in kindergarten through 12th grade in the member's household.",
        flag: "The Compact text hosted by MIC3 adds “severely injured”: a member or veteran “severely injured and medically discharged or retired for a period of one year after medical discharge or retirement” — the FAQ's shorter wording drops the qualifier; the statute's qualifier governs. The statute also adds “or as a result of injuries sustained on active duty” to the death category. Mechanism note: these categories were in, or read into, the original model Compact — the Commission does not present the one-year categories as later amendments, and CG/SF coverage came by published interpretation, not amendment. There is no separate eligibility category for “deployment orders” — deployment is a circumstance that triggers specific provisions, not an eligibility class.",
        links: [MIC3_FAQ, MIC3_ONEPAGER, MIC3_OPINIONS],
        source: "MIC3 — FAQs; advisory opinions booklet (mic3.net)",
      },
      {
        name: "Who is NOT covered",
        body: "The FAQ's exclusion list, verbatim in substance: “Inactive members of the National Guard and Reserves (Not Title 10); Members now retired not covered above; Veterans not covered above; Other Department of Defense personnel, federal agency civilians and contract employees not defined as active duty; members other than the uniformed personnel of NOAA and USPHS.” Stated plainly: a DoD civilian's or contractor's child is not Compact-covered, and Guard/Reserve coverage turns on Title 10 status — Title 32 and state active duty are outside the FAQ list (the Commission has advisory opinions on exactly this point, 01-2014 and 04-2017). Families in those situations still have their School Liaison — the Compact is one tool, not the only one.",
        links: [MIC3_FAQ],
        source: "MIC3 — FAQs (mic3.net)",
      },
      {
        name: "Where it applies — public schools (and DoDEA)",
        body: "This section prints public schools + DoDEA schools — the fuller official statement. OneSource's secondary summary adds: “The compact does not apply to private or international schools.”",
        flag: "The Commission's own pages conflict in shorthand: the FAQ and one-pager say “the Compact only applies to public schools,” while the Background page and the Feb 2025 details sheet say it applies to “public schools, to include Department of Defense Education Activity schools worldwide.” The fuller statement is printed; the FAQ's shorter wording is flagged, not blended.",
        links: [MIC3_BG, MIC3_FAQ],
        source: "MIC3 — Background; FAQs (mic3.net)",
      },
      {
        name: "Enrollment — records (hand-carried now, official within 10 days)",
        body: "Rule Sec. 3.101, as the Commission summarizes it: “Parents may request and schools can accept unofficial or ‘hand-carried’ records and those records may be used for enrollment and placement of a military-connected child.” The receiving school enrolls and places the child from the hand-carried copies while it requests the official file: “The sending school has 10 business days to send official records upon receipt of the receiving school's request.” OneSource's parent version: “You can obtain a copy of your child's school records from the old school to bring to the new one. Use these until the official records arrive.”",
        flag: "Wording variance inside the Commission's own materials: the model statute text (Art. IV) says “within ten (10) days” without “business.” This section prints the Commission's current rules summary (10 business days) with the variance flagged. The OneSource Interstate Compact link returned on the pre. subdomain during research.",
        links: [MIC3_RULES, OS_COMPACT],
        source: "MIC3 — rules summary (mic3.net); Military OneSource",
      },
      {
        name: "Enrollment — immunizations (30 days)",
        body: "Rule Sec. 3.102: “Student has 30 days from enrollment to obtain any additional required immunizations. If the immunization is a series of shots, the first shot in the series must be received within the 30-day window, and then the series must be continued.” OneSource confirms for parents: “You have 30 days from the time of enrollment to give your child any new required immunizations.” The rule buys time to complete a new state's requirements — it does not waive them.",
        links: [MIC3_RULES, OS_COMPACT],
        source: "MIC3 — rules summary (mic3.net); Military OneSource",
      },
      {
        name: "Kindergarten & first-grade entrance-age continuity",
        body: "Rule Sec. 3.102: the Compact “guarantees the child may continue their education and/or be promoted to the next grade level regardless of their age. For the Compact to apply, the child must have been enrolled and attended school in the sending state.” Statute form: students “shall be allowed to continue their enrollment at grade level in the receiving state commensurate with their grade level (including Kindergarten) from a local education agency in the sending state at the time of transition, regardless of age.” Advisory Opinion 02-2017 adds the documentation that makes it work: proof the parents were residents of the sending state plus an official letter/transcript showing attendance, academic information, and grade placement. Practical meaning: a child who started kindergarten in a state with an earlier cutoff does not get held out (or demoted) by a new state's later cutoff — if they were enrolled and attending.",
        links: [MIC3_RULES, MIC3_OPINIONS],
        source: "MIC3 — rules summary; advisory opinions booklet (mic3.net)",
      },
      {
        name: "Placement — courses, programs, and waived prerequisites",
        body: "Three linked rules (Ch. 500). Course placement (Sec. 5.101): placement “based on prior enrollment in the sending state” — the receiving school initially honors the sending placement “if the courses are offered,” then “may perform an evaluation to ensure the appropriate placement and continued enrollment.” The statute names the covered courses: “Honors, International Baccalaureate, Advanced Placement, vocational, technical and career pathways courses” — and more. Educational program placement (Sec. 5.102): the receiving school “shall initially honor placement of the student in educational programs based on current educational assessments conducted at the school in the sending state or participation/placement in like programs in the sending state,” then may evaluate. Placement flexibility (Sec. 5.104): “LEAs have the flexibility to waive course or program prerequisites or other preconditions if similar coursework has been completed in another LEA.”",
        links: [MIC3_RULES],
        source: "MIC3 — rules summary (mic3.net)",
      },
      {
        name: "Placement — special education comparability (the Compact's piece)",
        body: "Rule Sec. 5.103 and Compact Art. V.C: the Compact does not supersede IDEA. The receiving state will initially provide comparable services to those identified on the student's IEP. The receiving state may perform evaluations to ensure appropriate placement. Does not require the LEA to provide the exact same programs as the sending school. The article text, quoted in Commission documents, extends the same initial-comparability duty to Section 504 / Title II plans: the receiving state “shall make reasonable accommodations and modifications to address the needs of incoming students with disabilities, subject to an existing Section 504 or Title II Plan, to provide the student with equal access to education.” The education-side IDEA framing and dispute routing live in the IEP & 504 tile — this entry is the Compact provision only.",
        links: [MIC3_RULES, MIC3_OPINIONS],
        source: "MIC3 — rules summary; Advisory Opinion 01-2021 (mic3.net)",
      },
      {
        name: "Attendance — deployment absences (discretionary, no fixed number)",
        body: "Rule Sec. 5.105, printed carefully because it is the provision most often misquoted: schools get “flexibility… to allow additional excused absences so the child may visit with their parent or legal guardian due to deployment or posting to a combat zone. The Commission defines the deployment window as one (1) month prior to and six (6) months after return.” But the absences are “at the discretion of an LEA superintendent or head of school,” who “may provide a maximum number” — the Commission publishes no fixed day count, and none is printed here (no “5 days”). Commission legal summaries add two limits: the LEA is not required to grant a set number, and “the Compact provides excused absences for combat deployments only” — ordinary PCS absences are outside this provision.",
        links: [MIC3_RULES],
        source: "MIC3 — rules summary (mic3.net)",
      },
      {
        name: "Enrollment with a caregiver, and extracurricular eligibility",
        body: "Two Art. VI rules parents use constantly. Enrollment / in loco parentis (Sec. 6.101): a district cannot charge tuition to a child placed with a non-custodial parent or a person standing in loco parentis for the school year; the student may continue at their current school while living with that person; and “the power of attorney for guardianship is sufficient for enrollment and all other actions requiring parental participation or consent.” Transportation is the caregiver's responsibility. Extracurriculars (Sec. 6.102): states and districts shall “facilitate the opportunity” for inclusion in extracurricular activities “regardless of paperwork or physical tryout deadlines, if the child is otherwise qualified,” and “make a reasonable effort to allow eligible military students to participate.” Plainly: a missed tryout date because of a PCS is not supposed to be an automatic no — qualification still is.",
        links: [MIC3_RULES, MIC3_FAQ],
        source: "MIC3 — rules summary; FAQs (mic3.net)",
      },
      {
        name: "Graduation — waivers, exit exams, and the sending-school diploma",
        body: "The Compact's Ch. 400 graduation machinery, in the order a family uses it. Course waivers (Sec. 4.101): school officials “shall waive specific courses required for graduation if similar course work has been satisfactorily completed in another local education agency or shall provide reasonable justification for denial.” Exit exams (Sec. 4.102): “States shall accept: exit or end-of-course exams required for graduation from the sending state; national norm-referenced achievement tests; alternative testing, in lieu of the testing requirement for graduation in the receiving state.” If graduation is still blocked (Sec. 4.101 fallback): “Should a waiver not be granted to a student who would have qualified to graduate from the sending school, the LEA shall provide an alternative means for acquiring coursework so graduation may occur on time.” Sending-school diploma (Sec. 4.103): “Should a military student transferring at the beginning or during his or her senior year be ineligible to graduate from the receiving [LEA] after all alternatives have been considered, the sending and receiving [LEAs] shall ensure the receipt of a diploma from the sending [LEA], if the student meets the graduation requirements of the sending [LEA].”",
        flag: "Timeline nuance: only the sending-diploma fallback is expressly a senior-year rule in the Commission's summaries; whether the waiver/exit-exam sections are senior-only was disputed enough that the Commission issued Advisory Opinion 02-2025 on it — waivers and exams are presented here as general Ch. 400 provisions (as the Commission's summary does), not overstated.",
        links: [MIC3_RULES, MIC3_OPINIONS],
        source: "MIC3 — rules summary; advisory opinions booklet (mic3.net)",
      },
      {
        name: "Invoking the Compact — and the escalation ladder",
        body: "The Commission publishes the path (its parent flowchart is literally titled “WHO DO I ASK FOR HELP?”). 1. Start with the school, and bring your School Liaison. FAQ: “Contact the School Liaison at your local installation.” Liaisons are “the primary point of contact for school-related matters” and, with the State Commissioner, “assist with compliance and family concerns.” Naming the Compact — and the specific provision (this tile's entries are written to be cited) — is how parents invoke it; schools cannot apply a rule they haven't been shown applies. 2. State Compact Commissioner. FAQ: “Contact your State Compact Commissioner. Contact information for each State Commissioner can be found at www.mic3.net.” For non-compliance: “Report on this issue of non-compliance to your State Commissioner. The Compact provides a governance structure at both the state and national levels for enforcement and compliance.” Find yours from the Commission's homepage (“Find the Commissioner or representative in your state”) or Quick Links (“Request Assistance — Contact Your Commissioner”); per-state pages follow the pattern mic3.net/state/{state}/. 3. MIC3 National Office, if still unresolved: mic3info@csg.org · 859-244-8000. Free citable documents to put in a parent's hand: the Commission's FAQs page, the one-page Guide for Schools/Parents, and the longer Guide for Parents, School Officials, and Public Administrators and Compact Rules via the Document Library.",
        flag: "The Commission's one-page parent guide prints a different number (859-244-8133) — this section prints 859-244-8000 (the current site's number) and flags 8133 as legacy print. Older MIC3 toolkits also cite dead interactive-map URLs — route via current Quick Links/homepage.",
        links: [MIC3_FAQ, MIC3_QUICK, MIC3_DOCS, MIC3_SLO],
        source: "MIC3 — FAQs; Quick Links; Document Library (mic3.net)",
      },
    ],
  },
  {
    title: "IEP & 504 Continuity",
    note: "This tile states rights as official summaries publish them — it is not legal advice and gives no special-education strategy. EFMP enrollment, assignment coordination, and forms (DD 2792 / 2792-1) live in Family & Life Events and are NOT duplicated here; this tile is what happens at the schoolhouse door.",
    entries: [
      {
        name: "The transfer rule — comparable services from day one",
        body: "Military OneSource's IEP-vs-504 page states the receiving school's duties plainly: the new school must (1) provide a free appropriate public education (FAPE) and (2) “include services comparable to those in your child's current individualized education program. The new school provides services until the IEP team adopts the incoming IEP or develops and implements a new one.” Comparable services apply, as OneSource summarizes, when the child was identified under IDEA at the time of transfer, the IEP was in effect at the previous school, or the transfer was in the same academic school year. The federal framing OneSource's short summary abbreviates — from the Office of Special Education Programs' letter on highly mobile children, citing 34 CFR §300.323(e)–(f): the new district provides FAPE, including comparable services, “(in consultation with the parents)”; for an in-state transfer, comparable services continue until the new district adopts the previous IEP or develops and implements a new one; for an out-of-state transfer, until the new district conducts an evaluation (if it determines one is necessary) and develops and implements a new IEP, if appropriate. This federal rule and the Compact's Sec. 5.103 point the same direction — services start comparable; paperwork catches up.",
        links: [IEP504, OSEP],
        source: "Military OneSource — IEP vs. 504 Plan; OSEP (ED)",
      },
      {
        name: "Section 504 plans on transfer",
        body: "As OneSource frames it: a 504 plan is not special education and not part of IDEA — it is a formal plan under Section 504 of the Rehabilitation Act of 1973, a civil-rights law, to remove barriers and provide accommodations, typically in the general-education classroom without specialized instruction; plans are reviewed/updated yearly, and unlike an IEP a 504 plan can carry into college and the workplace. For a military transfer, the operative continuity statement is the Compact's: the receiving state “shall make reasonable accommodations and modifications… subject to an existing Section 504 or Title II Plan, to provide the student with equal access to education,” and may evaluate afterward.",
        flag: "OneSource publishes no separate 504 transfer procedure beyond that Compact sentence — nothing more procedural is printed here.",
        links: [IEP504],
        source: "Military OneSource — IEP vs. 504 Plan",
      },
      {
        name: "When the school won't move — the official routes",
        body: "OneSource's routing, in order: “School liaisons can help with issues with your child's education, IEP or Section 504 plan”; your EFMP Family Support provider (Family & Life Events, by branch); or a Military OneSource special-needs consultant at 800-342-9647. MilitaryINSTALLATIONS' special-education pages add the legal route: a family “may schedule a legal assistance appointment with the [installation] legal office, who can advise you on special education law and help guide you through the rules and responsibilities for 504 plans, Individual Education Programs (IEPs), and other similar issues.” Compact non-compliance runs on the Compact tile's escalation ladder in parallel. These routes are stated and stop there — no dispute strategy, no due-process coaching.",
        links: [IEP504, MI_SPECED],
        source: "Military OneSource; MilitaryINSTALLATIONS",
      },
    ],
  },
  {
    title: "School Records & the PCS Paper Drill",
    entries: [
      {
        name: "Hand-carry it — the binder rule",
        body: "OneSource's PCS guidance is blunt: “Carry all transcripts, report cards or grade sheets your children may need for school registration. If your child has an individualized education program, or IEP, it's important to carry this with you” — and medical/dental and vaccination records “will likely be needed for school registration.” Its published method: put the paperwork in a binder you hand carry (never in household goods or checked baggage), make multiple copies, and back it up on a flash drive, external drive, or cloud. The special-needs checklist version (MilitaryINSTALLATIONS EFMP template) is more specific: request the latest IEP or IFSP including meeting minutes and the most recent progress report, current evaluation reports, and shot records; on departure, “hand-carry hard copies and thumb drives of any educational information, including IEP, IFSP and 504 Plan,” keep current teacher/specialist contact information, and on arrival take the hand-carried file to enrollment and sign releases so the new school can request the official records (which the Compact then moves within 10 days).",
        links: [PCS_GUIDE, MI_SPECED],
        source: "Military OneSource — Planning a PCS Move; MilitaryINSTALLATIONS",
      },
      {
        name: "The typical registration packet",
        body: "What a receiving school asks for at the counter is set by the state/district, not by DoD — MilitaryINSTALLATIONS' education pages show the typical hand-carried set: certified birth certificate · updated immunization/shot records · (unofficial) records/transcripts and IEP documentation · Social Security number · proof of residency — and individual states add their own items (the example page adds a state TB-test requirement). Presented as “typical — your gaining SLO and the district confirm the real list,” which is exactly why the liaison tile says to call the liaison before arrival.",
        links: [MI_EDU],
        source: "MilitaryINSTALLATIONS — Education (representative installation instance)",
      },
    ],
  },
  {
    title: "DoDEA — the Federal School System",
    note: "Naming flag for the whole tile: dodea.edu's live pages (researched Nov 9, 2026) now brand the agency “DoWEA — Department of War Education Activity” (formerly DoDEA, Department of Defense Education Activity) — same agency, same domain. This section keeps DoDEA in entry text (the name in the governing issuance and in universal use) and carries this note rather than silently renaming the section.",
    entries: [
      {
        name: "What DoDEA is, and where it runs schools",
        body: "DoDEA is one of only two federally operated school systems, responsible for planning, directing, coordinating, and managing PK–12 programs for military-connected students, organized in three geographic areas: the Americas, Europe, and the Pacific. Scale, as DoDEA's current About page states it (accessed Nov 9, 2026): “160 accredited schools in 9 districts located in 11 foreign countries, 7 states, Guam, and Puerto Rico,” with “more than 14,000 employees” serving “more than 67,000 children of active duty military and DoW civilian families.”",
        flag: "DoDEA's own School Excellence Report pages print a slightly different set (161 schools, ~66,000 students, ~15,000 employees, SY 2022-23/2023-24) — this section uses the About-page figures, dated, and never mixes the two sets.",
        links: [DODEA_ABOUT],
        source: "DoDEA — About DoDEA",
      },
      {
        name: "Eligibility — categories, not determinations",
        body: "DoDEA's governing issuance is Administrative Instruction 1344.01, “Eligibility and Enrollment Requirements for DoDEA Schools” (effective Jul 1, 2023; Change 2 approved May 2, 2025). Eligibility is organized by geography — Europe/Pacific (excluding Guam) plus Guantanamo Bay, Cuba; CONUS Americas schools; Guam and Puerto Rico schools — and every category is a combination of space-required or space-available and tuition-free or tuition-paying. Tuition-free core (overseas): command-sponsored, space-required dependents of active-duty members and full-time DoD civilian employees on overseas assignments — dependents authorized to travel at government expense. CONUS rule, as DoDEA publishes it: to attend a DoDEA school in the contiguous United States, the parent must (1) be a full-time active-duty service member or full-time DoD civilian employee and (2) reside in permanent on-base housing at an installation where DoDEA operates schools. Space-available enrollment is never guaranteed: it weighs resources, not just a seat; it is approved annually, not promised year-to-year; and it is determined by child, not by family. Tuition-paying categories (space-required, and space-available federally connected / non-federally connected — e.g. children of contractors working for the U.S. overseas) exist alongside the tuition-free ones. No rates are printed here; tuition schedules are DoDEA's to publish. This section states categories and routes families to DoDEA's eligibility pages — it never tells a specific family they qualify.",
        flag: "A narrow Expanded Eligibility exception authorized by the 2025 NDAA (off-installation, space-available only) appears on DoDEA pages for specific installations (the page examined covers Maxwell AFB/Gunter Annex) — do not generalize it beyond the installations DoDEA names. Guam has no space-available category.",
        links: [DODEA_POLICY, DODEA_AI1344],
        source: "DoDEA — AI 1344.01; education policy overview",
      },
      {
        name: "Enrolling — DSIS",
        body: "Registration runs through the DoDEA Student Information System (DSIS) Family Portal (dodeasis.myfollett.com): “DSIS online registration reduces manual forms and makes it easy for parents to register their child for school.” Two published practicalities: parents must re-register annually (schools notify when it's time), and DoDEA recommends completing registration on a desktop/laptop — the process “may not work on a mobile device.”",
        links: [DODEA_REG],
        source: "DoDEA — Registration",
      },
      {
        name: "NDSP — when there is no DoDEA school at your post",
        body: "The Non-DoD Schools Program (NDSP), run by DoDEA, “provides educational support and financial assistance to defray costs for PK–12th grade education in overseas locations where there are no DoDEA schools available.” Who it serves, as published: “command-sponsored DoW and US Coast Guard dependents (active duty and civilian) serving on PCS orders,” grades PK–12, in overseas locations where the Joint Travel Regulation permits accompanied tours — “the NDSP is not authorized to support in the United States, its territories or in locations not authorized for dependents.” How the money works, at summary level: “an education allowance is established for each location and grade level and is used to defray the required costs of education. It may not cover all costs.” (The allowance aligns to the State Department's DSSR education allowance “to the maximum extent practicable.”) Support beyond tuition can include pre-authorized tutoring, required courses/materials, and testing/transcript support; special-education support is limited, needs advance approval, and international schools are not mandated to follow IDEA — a sentence that stays attached to any NDSP special-needs mention. NDSP does not certify or endorse schools. How families register: “the DoW sponsor will apply for an eligibility review by accessing the online portal,” then works with the NDSP finance team on tuition payments/reimbursements; sponsors re-register annually (failure can delay payments).",
        flag: "The NDSP page returned on an Acquia host during research; the canonical dodea.edu path is the FAQ link on this card.",
        links: [NDSP, NDSP_FAQ],
        source: "DoDEA — NDSP; NDSP FAQs",
      },
      {
        name: "DoDEA Virtual School (DVHS)",
        body: "The DoDEA Virtual High School (DVHS), established 2010-11, is a “fully accredited” DoDEA high school offering “online asynchronous courses with synchronous support by full-time DoDEA certified teachers” — 85+ courses including AP and electives, grades 9–12. Its current published routes: Supplemental Program — students enrolled in a DoDEA high school may take one or two virtual classes to supplement the local school's offerings; enrollment runs through the local school counselor, and DVHS cannot enroll a student directly. E2P2 (Expanded Eligibility Participation Program) — NDAA-authorized, for active-duty dependent high school students in the U.S. who are ineligible for a brick-and-mortar DoDEA school: up to two credits per year, designed to “supplement (not compete with)” local programs. NDSP full-time route — “students in NDSP locations may choose to enroll in DVHS on a comprehensive (full-time) basis if needed to complete graduation requirements and receive a DoDEA diploma” (exclusive of NDSP participation). Summer School — for current DoDEA high school students, one semester-course credit.",
        flag: "What DVHS is not, on the current site: a general open-enrollment full-time K–12 virtual school. The COVID-era full-time Virtual School option (2020 press releases) is historical — it is not presented as current.",
        links: [DVHS, DVHS_ELIG],
        source: "DoDEA — DVHS; DVHS eligibility",
      },
      {
        name: "DoDEA and homeschooled students",
        body: "DoDEA's current regulation is Administrative Instruction 1375.01: Home-School Students (Change 1, Oct 15, 2018). Its purpose, as DoDEA's regulation listing states it: “Allow eligible dependent students who are educated in a home-school setting to use or receive auxiliary services of the DoDEA Europe and DoDEA Pacific schools in which they are eligible to enroll. Extends this opportunity to dependent students who are educated in a home-school setting, but are eligible to enroll in a DoDEA Americas school” — auxiliary access without being required to enroll or register for a minimum number of courses.",
        flag: "Two build cautions from the research: (1) the detailed auxiliary-services list (library access, academic resources, after-hours facilities use, music/sports/extracurricular participation; not commencement) is verified in the AI's predecessor policy documents reproduced on official .mil sites, while dodea.edu's current regulation page publishes only the purpose paragraph — the list is not printed as current DoDEA wording. (2) The classic DoDEA statement — “It is DoDEA policy neither to encourage nor discourage DoD sponsors from home schooling… home schooling is a parent/sponsor's right” (DoDEA Admin Guide §56 / DTM 16-E-001 lineage) — does not currently appear on a live dodea.edu homeschool page (the old parents/homeschooling page no longer resolves as such). It is DoDEA's published policy position with that provenance, not a quote from a current web page. The stateside picture is the Homeschooling tile.",
        links: [DODEA_HS],
        source: "DoDEA — AI 1375.01 (regulation listing)",
      },
    ],
  },
  {
    title: "Impact Aid",
    entries: [
      {
        name: "What Impact Aid is",
        body: "Per the U.S. Department of Education: “Impact Aid was designed to assist local school districts that have lost property tax revenue due to the presence of tax-exempt Federal property, or that have experienced increased expenditures due to the enrollment of federally connected children, including children living on Indian lands.” Its structure as ED lists it: Section 7002 payments for federal property (the lost tax base); Section 7003 payments for federally connected children — the part military families feed; Section 7007(b) discretionary construction grants; Section 7008 facilities maintenance. In plain terms: your child's school district can't tax the base your family lives on, so the federal government backfills part of the money — if the district can count your child.",
        links: [IMPACT_ED],
        source: "U.S. Department of Education — Impact Aid",
      },
      {
        name: "The parent survey — the one form that funds your kid's school",
        body: "The count happens through a survey form sent home by the school. OneSource: “Families can support their child's school by completing the Parent-Pupil Survey, ensuring schools receive the funding they need”; “The Department of Education determines aid levels by collecting data from local school districts. This funding supports teacher salaries, technology and other essential school expenses,” and ED protects parents' personally identifiable information “at every level.” The Army's official description adds the mechanics: schools send the survey home every year (hard copy with students pre-K–12, or online via the school parent portal); “the Impact Aid Survey allows the school to count the number of federal and military-connected students who attend their school. This count is required to be able to apply for Impact Aid grants”; answers are confidentially processed and the money goes to the district's general fund. For local questions, OneSource routes parents to their school liaison.",
        flag: "Name variance across official sources — OneSource and Joint Base Charleston call it the Parent-Pupil Survey, the Army calls it the Federal Impact Aid Survey, and ED-side usage includes Student-Parent Survey; all three names ride on this card so parents recognize the form when it comes home. Timing variance: OneSource's page does not state when the survey goes out; official installation/Army sources put it in the fall — usually September/October (Joint Base Charleston) to late October/early November (Army). Printed as “in the fall, district dates vary,” attributed to those sources.",
        links: [IMPACT_OS, IMPACT_ARMY, IMPACT_JBC],
        source: "Military OneSource; Army Resilience Directorate; Joint Base Charleston",
      },
    ],
  },
  {
    title: "Homeschooling",
    entries: [
      {
        name: "The governing rule: state law (stateside), host-nation law (overseas)",
        body: "DoD runs no homeschool approval process and takes no position a parent must satisfy — stateside, the family's state of residence's homeschool law governs, full stop; this section therefore contains no state-by-state homeschool catalog (state requirements route to the State Benefits Finder / state education pages and to the school liaison). OneSource's homeschool page (published Sep 3, 2026; updated Nov 4, 2026) frames it as choice + support: homeschooling is “an increasingly popular choice” for military families (stability through moves every 2–3 years, flexibility, fit, well-being), and its published getting-started steps begin with “review state regulations and best practices for homeschooling” and “connect with your installation school liaison for local guidance.” Overseas, the gating layer changes: OneSource — “check with your installation school liaison to learn about home school guidance by country, as host nation requirements may apply”; DoDEA's NDSP home-study page is blunter: parents must “become aware of and comply with the country requirements for home-based education. Some countries do not allow home-based education” — and points families to installation legal counsel.",
        flag: "That OneSource page contains no “DoD neither requires nor prohibits” statement — none is attributed to OneSource (DoDEA's policy position is in the DoDEA tile, with its provenance flag). The NDSP home-study link returned on an Acquia host during research.",
        links: [HOMESCHOOL_OS, NDSP_HOME],
        source: "Military OneSource — Homeschooling; DoDEA NDSP Home Study",
      },
      {
        name: "What support exists",
        body: "Two official supports, both introduced elsewhere in this section: (1) the School Liaison — local homeschool resources, state requirements, PCS-transition help, special-education referral, college/career planning; (2) DoDEA auxiliary services for eligible students in DoDEA communities — access to the school you're eligible for without enrolling full-time, per AI 1375.01. DoDEA's NDSP framing also defines “Home Study” for NDSP purposes as “an age/grade appropriate complete academic program that uses virtual school, home school, private instruction or combination thereof,” and bars mixing a tuition-charging school at post with homeschooling under NDSP.",
        links: [HOMESCHOOL_OS, DODEA_HS],
        source: "Military OneSource; DoDEA AI 1375.01",
      },
      {
        name: "The money question — home study is on you, except in NDSP locations",
        body: "NDSP's FAQ states the funding line exactly: “Home study in the United States and DoDEA-operated school locations is a personal choice with the main burden of expense on the parent. However, in an NDSP location there is an education allowance available to the sponsor” — and that allowance requires an annual Home Study Education Plan and receipts, claimed through NDSP. Printed as the complete answer: no stateside homeschool allowance exists in the sources, and none is implied.",
        links: [NDSP_FAQ],
        source: "DoDEA — NDSP FAQs",
      },
    ],
  },
  {
    title: "Youth Programs",
    note: "School-age care (before/after-school programs for younger children) lives in Family & Life Events via MilitaryChildCare.com — this tile is the youth/teen layer above it.",
    entries: [
      {
        name: "Installation youth centers & youth sports",
        body: "Every service runs youth programming through its Child & Youth Programs / MWR structure; the shape is consistent (a youth/teen center + youth sports, BGCA- and 4-H-affiliated curricula) while names and age bands are each service's own. Army (CYS): Youth Centers / Middle School & Teen (MST) programs are for grades 6–12 (typically ages 11–18): “a safe, supportive, and engaging space… after school, on school-out days, and during summer break. Programs are free and open to eligible youth registered with CYS,” across five service areas (Leadership & Life Skills; Education & STEM; Health & Wellness; The Arts; Sports & Recreation), including BGCA Torch/Keystone clubs and homework/tech centers. Youth Sports & Fitness serves ages 3–18 (registration with CYS + a current sports physical required; Start Smart for ages 3–5). Navy (CYP): Child and Youth Programs serve ages 4 weeks to 18 years overall; “Youth and Teen Programs provide sports programs, leisure classes, youth internet labs and teen programs for ages 6 years to 18 years,” and “our Youth programs are affiliated with the Boys and Girls Clubs of America.” Installation teen programs typically split at 13–18. Eligibility as CNIC publishes it: active duty, activated Guard/Reserve, DoD civilians, DoD contractors; recreational programs also open to military/DoD-civilian retirees. Air Force: installation Youth Centers run open recreation for ages 9–18 with BGCA Torch Club (11–13) and Keystone Club (14–18); teen programs are published at 13–18. Marine Corps: no USMC MCCS youth/teen overview page was verified in the research — the route is your installation's MCCS Child & Youth Programs via MilitaryINSTALLATIONS / My Installation, rather than another service's ages lent to the Corps. Sign-up in every case runs through the installation's CYP/MWR — see My Installation, which holds the per-base pages; this section holds no per-base data.",
        flag: "Air Force youth ages are installation-published (consistent across the AF examples read); no single DAF CYP headquarters overview page was opened in this research — flagged as installation-sourced.",
        links: [ARMY_YOUTH, ARMY_SPORTS, NAVY_CYP, MI_YOUTH],
        source: "Army MWR (installation instances); CNIC; MilitaryINSTALLATIONS",
      },
      {
        name: "Boys & Girls Clubs — Mission: Youth Outreach",
        body: "BGCA has partnered with the U.S. Armed Services since 1991 (its pages say “more than 35 years of support”). The military offer is Mission: Youth Outreach (MYO): as BGCA publishes it, “Boys & Girls Clubs of America offer free or reduced annual memberships to military youth – ages 5 to 18 from Active Duty, National Guard and Reserve families through our partnership with the Department of Defense” — MYO works by providing a stipend to a local Club to cover a free or reduced annual membership, once annually. Print it as “free or reduced,” never as flatly free: BGCA itself says many families receive free membership while others receive “significantly reduced annual membership fees depending on their location and available funding,” and membership does not cover everything — “families may still be responsible for other costs such as summer camp, transportation, or activity-based fees.” Scale, as BGCA states it (attributed to BGCA): 450+ BGCA-affiliated Youth Centers on installations around the globe, 285,000+ youth served on military installations, 23,000+ military-connected youth in communities nationwide — the same affiliation is why installation youth centers run BGCA clubs, and why a family can often continue at a community Club after a PCS. How to use it (BGCA's published process): enroll at bgca.org/military (Submit Interest / MYO form; pick your Club under its parent organization — if a Club isn't listed, it hasn't opted in) → confirmation email → take the email and a military ID to the local Club to sign up. Club Locator by ZIP on the same page; support at myo@bgca.org (as published).",
        flag: "Age variance on BGCA's own page: its FAQ says children ages 6–18 qualify and adds that “certain Veteran or Gold Star families” may qualify (requirements vary by funding/local Club), while the MYO eligibility text says 5–18, current active-duty/Guard/Reserve. The MYO text (5–18, current service) is primary and the FAQ variance is flagged; the local Club confirms.",
        links: [BGCA, BGCA_MYO],
        source: "Boys & Girls Clubs of America — Military / Mission: Youth Outreach",
      },
      {
        name: "4-H Military Partnership",
        body: "USDA's National Institute of Food and Agriculture (NIFA) states the partnership in one paragraph: NIFA's Division of Youth and 4-H “partners with the Department of Defense's Office of Military Community and Family Policy… and the Army, Navy, and Air Force to support military-connected children and youths… both on and off military installations” — a collaboration dating to 1982. Its pieces as NIFA publishes them: 4-H Military Partnerships outreach grants (installation programs worldwide + Guard/Reserve families in civilian communities), Military Teen Adventure Camps (high-adventure camps “they would not normally find through installation youth programs”), and 4-H clubs/professional support delivered with Cooperative Extension and land-grant universities. This is why 4-H appears alongside BGCA inside the youth centers; participation routes through the installation youth program or the local 4-H club.",
        links: [NIFA],
        source: "USDA NIFA — 4-H Military Youth Programs",
      },
    ],
  },
  {
    title: "Cross-Links & Standing Flags",
    entries: [
      {
        name: "Child care — the layer below this center (cross-link only)",
        body: "Child care (CDCs, family child care homes, school-age care, MCCYN fee assistance) is not re-researched here: it lives in Family & Life Events and runs through MilitaryChildCare.com, DoD's single request gateway, whose household profile follows the family across PCS moves. Family & Life Events' Childcare & School group now also carries the full published child care priority order (Priority 1A–3, with single parents and dual-military couples at 1B items 2–3 and the supplanting rules), MCCYN's tighter fee-assistance prioritization, and the backup-care layer — hourly care, FCC flexible hours, drill-weekend care, deployment respite hours, the CCYH in-home pilot, and the labeled finding that no DoD sick-child care program exists. The Kids & Schools Center opens at K-12; open Family & Life Events for care, and the Family section's short School Liaison and Interstate Compact entries point back here for the deep versions.",
        links: [MCC],
        source: "MilitaryChildCare.com",
      },
      {
        name: "Military Kids Connect — still unconfirmed, still linkless",
        body: "Do not resurrect. As recorded in the Spouse research pack and flagged again in its register: Military Kids Connect has been described in official-adjacent sources as a Defense Health Agency online community for military children ages 6–17, but its health.mil address did not resolve through the research fetcher and its current live status and DHA attribution remain unconfirmed by a fetched official page. Nothing in this research run changed that. This section ships no link for it — this flag entry is the entire treatment, so a future editor knows the omission is deliberate and what would have to be verified (a live official page confirming the program and its operator) before it could appear.",
        links: [],
        source: "Standing flag carried from the Spouse research pack (§4.3 and flags register)",
      },
    ],
  },
];
