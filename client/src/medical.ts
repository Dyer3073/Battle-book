// Medical Training & Certs — static reference data transcribed from the
// researched medical pack (~/workspace/military-app/medical/medical.md,
// researched November 9, 2026, from official sources only: Deployed
// Medicine / Joint Trauma System, DHA, Military Training Network,
// service medical commands and schoolhouses, AHA, American Red Cross,
// NREMT, ACS / DoD Stop the Bleed).
//
// THE SECTION'S SCOPE LINE, from the pack: this section is ABOUT the
// training — what each course is, who takes it, who runs it, how long
// each credential stays current, and how members enroll. It is NOT a
// procedures manual: there are NO treatment steps, dosages, or
// procedure detail anywhere in this data. Where hands-on skills
// content exists, the entry links the official source — Deployed
// Medicine publishes the TCCC curriculum publicly — and the app does
// the same.
//
// Fidelity rules baked into this data (the pack's flags, preserved):
// - Tier 4 (Combat Paramedic/Provider) carries its status flag: the
//   Joint Trauma System lists it as "coming soon"; only Tiers 1–3 are
//   published through DHA.
// - TCCC currency prints LAYERED (entry 1.6): the DoDI 1322.24 floor
//   vs. service implementations under DoDI 1322.31 — never collapsed
//   into one number.
// - BLS / ACLS / PALS validity prints only as the issuing authorities
//   state it: two years.
// - Stop the Bleed carries the corrected governance: DoD owns and
//   administers the program and the trademark; ACS and partners
//   deliver training under DoD license; DHS was a 2015 launch partner.
// - The pack's unconfirmed items stay OUT: no per-tier CLS/CMC
//   refresher table, no public MTN class-schedule link (enrollment
//   runs through service/installation training offices — the pack
//   names the mechanism, not a sign-up link), no IDC/SAR course
//   lengths (name/purpose level only).
// - ASM 7 hrs / CLS 40 hrs / CMC 63 hrs are NAEMT's published figures
//   for its JTS-specified courses, attributed as such on the cards;
//   service-run deliveries of the same DHA curricula may schedule
//   differently.
// - The Marine Corps entry states plainly the Corps has no organic
//   medics — corpsmen are Navy, via FMTB. The Space Force entry states
//   no organic medic field exists — AFMS supports Guardians.

export type MedicalLink = { label: string; url: string };

export type MedicalEntry = {
  id: string;
  name: string;
  /** Short badge: tier, cert type, or branch. */
  kind: string;
  summary: string;
  who?: string;
  /** Extra paragraphs after the summary (the layered currency entry). */
  details?: string[];
  /** A pack ⚠ flag, rendered in the amber flag box. */
  flag?: string;
  links: MedicalLink[];
};

export type MedicalGroup = {
  title: string;
  note?: string;
  entries: MedicalEntry[];
};

export const MEDICAL_STANDING_NOTE =
  "This section is about the training — what each course is, who takes it, who runs it, and how long the credential stays current. It is not a procedures manual: there are no treatment steps, dosages, or procedure detail anywhere in it. Where hands-on skills content exists, the entry links the official source — Deployed Medicine publishes the TCCC curriculum publicly. Certification durations are printed only as the issuing authority states them; where official sources layer or differ, the entry says so instead of picking one number.";

export const MEDICAL_ENROLLMENT_NOTE =
  "How enrollment works: military courses are assigned by role and unit and enrolled through your unit and your service or installation training offices — there is no public sign-up link for them, so this section names the mechanism rather than inventing one. The public courses (Stop the Bleed, Heartsaver, Red Cross CPR) link their own official course finders.";

const DEPLOYED_MEDICINE: MedicalLink = {
  label: "Deployed Medicine — official TCCC curriculum and guidelines home",
  url: "https://deployedmedicine.com/market/226",
};
const JTS_TRAINING: MedicalLink = {
  label: "Joint Trauma System — JTET / readiness training (the tier structure)",
  url: "https://jts.health.mil/index.cfm/education/jtet_branch",
};
const BUMEDINST: MedicalLink = {
  label: "BUMEDINST 1500.15F — Navy resuscitation training policy (MTN defined)",
  url: "https://www.med.navy.mil/Portals/62/Documents/BUMED/Directives/Instructions/1500.15F.pdf?ver=MjOk1r_3tLS1sMcuf12-zQ%3D%3D",
};
const BRAGG_MSTC: MedicalLink = {
  label: "Fort Bragg MSTC course catalog (BLS/ACLS/PALS and CLS listings)",
  url: "https://home.army.mil/bragg/5917/5813/6788/FY26_FBMSTC_Schedule.pdf",
};
const RED_CROSS_MTN: MedicalLink = {
  label: "American Red Cross — MTN partnership and program description",
  url: "https://www.redcross.org/about-us/news-and-events/news/2018/military-training-network-converts-to-red-cross-programs.html",
};
const AHA_HOME: MedicalLink = {
  label: "AHA CPR & First Aid training home",
  url: "https://cpr.heart.org/en/",
};
const MASS_OEMS: MedicalLink = {
  label: "Massachusetts OEMS — returning veterans & military personnel EMT page",
  url: "https://www.mass.gov/info-details/returning-veterans-and-military-personnel-emt",
};

export const MEDICAL_GROUPS: MedicalGroup[] = [
  {
    title: "TCCC — Tactical Combat Casualty Care",
    entries: [
      {
        id: "tccc-governance",
        name: "What TCCC is and who governs it",
        kind: "THE PROGRAM",
        summary:
          "TCCC is the DoD's standardized, evidence-based program for trauma care in the prehospital tactical environment — the system that replaced the services' separate first-aid / self-aid-buddy-care courses. It is developed by the Joint Trauma System (JTS), part of the Defense Health Agency, and the clinical guidelines behind it are maintained by the Committee on Tactical Combat Casualty Care (CoTCCC), which reviews and updates the guidelines as new evidence appears. The DoD-wide mandate is DoDI 1322.24, Medical Readiness Training, which made role-based TCCC the standard of care for first responders (medical and non-medical) across the services. The official public home of the guidelines and the full training curriculum is Deployed Medicine. Enrollment for members runs through their unit and service training system — TCCC is assigned by role and unit, not self-enrolled off the street; the public site is where the material itself lives for study and instructor use.",
        who: "Every service member, at the tier matching their role (see the four tiers below).",
        links: [DEPLOYED_MEDICINE, JTS_TRAINING],
      },
      {
        id: "tccc-tier-1-asm",
        name: "Tier 1 — All Service Members (ASM)",
        kind: "TIER 1",
        summary:
          "The baseline tier for all service members regardless of job: the fundamental lifesaving trauma skills every non-medical member is expected to have in the pre-hospital setting. Per the JTS tier listing and the DHA course descriptions, TCCC-ASM is designed for service initial-entry programs and for the majority of DoD personnel who do not require a higher tier by occupation or assignment; it replaces the old service first-aid courses. NAEMT — which delivers TCCC courses under JTS/DHA specification — lists the ASM course at 7 hours.",
        who: "All service members (officer and enlisted) who have not completed a higher TCCC tier; taught in initial entry and refreshed per the currency entry below.",
        links: [JTS_TRAINING, DEPLOYED_MEDICINE],
      },
      {
        id: "tccc-tier-2-cls",
        name: "Tier 2 — Combat Lifesaver (CLS)",
        kind: "TIER 2",
        summary:
          "The intermediate tier for non-medical personnel designated by their unit to provide medical support beyond self/buddy aid — the bridge between ASM and the medic/corpsman tier. Per DHA's course framing, CLS expands from ASM's basic lifesaving skills to more advanced techniques aimed at the most common causes of preventable death on the battlefield, plus assisting and communicating with more advanced providers. NAEMT lists the JTS-developed CLS course at 40 hours. Historically each service ran its own Combat Lifesaver course (the Army's CLS course is the best-known); the DHA standardized curriculum is now the joint version services implement.",
        who: "Non-medical members selected/designated by their units, typically deploying in support of combat or contingency operations.",
        links: [JTS_TRAINING, DEPLOYED_MEDICINE],
      },
      {
        id: "tccc-tier-3-cmc",
        name: "Tier 3 — Combat Medic/Corpsman (CMC)",
        kind: "TIER 3",
        summary:
          "The tier for military medical personnel — Army combat medics, Navy hospital corpsmen, and Air Force aerospace medical technicians (the DHA course title is literally “Combat Medic/Corpsman/Aerospace Medical Technician,” CMC-AMT). Per the Air Force's DHA implementation plan, the Tier 3 curriculum replaces the older NAEMT “TCCC for Medical Personnel” (TCCC-MP) course. NAEMT lists the CMC course at 63 hours. This is the first tier taught to providers whose actual job is casualty care.",
        who: "Medics, corpsmen, and aerospace medical technicians, in initial pipeline training and as pre-deployment/readiness training.",
        links: [JTS_TRAINING, DEPLOYED_MEDICINE],
      },
      {
        id: "tccc-tier-4-cpp",
        name: "Tier 4 — Combat Paramedic/Provider (CPP)",
        kind: "TIER 4",
        summary:
          "The most advanced TCCC tier, for personnel whose expeditionary scope of practice exceeds Tier 3: per the course descriptions, targeted specialties include physicians, physician assistants, advanced practice nurses, independent duty corpsmen, independent duty medical technicians, pararescue personnel, special forces medical sergeants (18D), and specialties that require paramedic certification.",
        who: "Advanced medical personnel and designated special-operations / paramedic-level providers.",
        flag: "Status flag: the JTS readiness-training page lists Tier 4 as “Combat Paramedic — coming soon,” and NAEMT's TCCC page notes that currently only Tiers 1–3 are published through DHA, with the legacy TCCC-for-Medical-Personnel course meeting DoD standards in the interim. The tier exists in the structure; the standardized curriculum's publication status is as JTS states it — Tier 4 is not presented here as a bookable standardized course.",
        links: [JTS_TRAINING, DEPLOYED_MEDICINE],
      },
      {
        id: "tccc-currency",
        name: "TCCC currency and refresher — what the policy actually says",
        kind: "CURRENCY — LAYERED",
        summary:
          "This requirement layers, and the layers are printed rather than one clean number. As quoted in the Army's own TCCC tiered-training standards document, DoDI 1322.24 requires that all active-component service members (and some DoD expeditionary civilians, by job/unit) complete TCCC recertification at least every three years following initial certification, and within 12 months of deployment (a certification completed within 12 months of the most recent deployment stays current for repeat deployments inside that window). Instructors must likewise be certified in TCCC and complete the JTS train-the-trainer course every three years.",
        details: [
          "Service layer: a later instruction, DoDI 1322.31 (Common Military Training), gives the services discretion over ASM training frequency beyond the pre-deployment requirement — the Army's implementation, per its standards document, is annual ASM recertification for the active component and biennial for Reserve/National Guard, run through AR 350-1 common tasks. The DHA ASM FAQ for the Department of the Air Force states the same shape: an initial certification, then recertification when tasked to deploy (within 12 months before deployment).",
        ],
        who: "Anyone planning around a TCCC expiration; unit training NCOs scheduling sustainment.",
        flag: "The DoD floor is “recertify at least every 3 years + within 12 months of deployment” (DoDI 1322.24). Service implementations under DoDI 1322.31 can require more — never read a single unqualified “TCCC lasts X years” into it.",
        links: [
          {
            label: "Army standards for executing TCCC tiered training (quotes the DoDI 1322.24 requirements in full)",
            url: "https://books.allogy.com/web/tenant/8/books/244b627e-8b56-4021-802e-d6f5a50a99d0/",
          },
          {
            label: "Army University Press — overview of the DoDI requirement and its implementation",
            url: "https://www.armyupress.army.mil/Journals/Military-Review/English-Edition-Archives/March-April-2022/Tarpey/",
          },
        ],
      },
    ],
  },
  {
    title: "Life Support & the Military Training Network",
    entries: [
      {
        id: "mtn",
        name: "The Military Training Network (MTN) — who runs DoD resuscitation training",
        kind: "PROGRAM OFFICE",
        summary:
          "The MTN is the DoD's tri-service program office for resuscitative and trauma medicine training, based at the Uniformed Services University of the Health Sciences (USUHS). Its mission, in its own words, is “to develop and implement policy guidance and ensure compliance with curriculum and administrative standards for resuscitative and trauma medicine training programs for uniformed service members and Department of Defense affiliates worldwide.” Navy's resuscitation policy (BUMEDINST 1500.15F) describes the MTN as the body that, as an American Heart Association affiliate, approves and certifies BLS, ACLS, and PALS courses for the services and coordinates ATLS for the ACS. Since 2018, per the American Red Cross, the Red Cross BLS, ALS (its ACLS equivalent), and PALS courses have been administered by the MTN — the Red Cross provides the curriculum and certification for the military system. Practical meaning for a member: your installation's BLS/ACLS/PALS classes run through MTN-affiliated training sites, and the card you earn is an AHA- or Red Cross-recognized credential (see the BLS entry below).",
        who: "Anyone asking “where does my BLS card come from and who says it's valid.”",
        flag: "There is no public MTN course-catalog page with live class schedules — MTN enrollment runs through service/installation training offices. This entry names the mechanism rather than a sign-up link.",
        links: [
          RED_CROSS_MTN,
          {
            label: "American Red Cross — military healthcare education (MTN role restated)",
            url: "https://redcross.cloud-cme.com/content/military-healthcare-education",
          },
          BUMEDINST,
        ],
      },
      {
        id: "bls",
        name: "BLS — Basic Life Support",
        kind: "CERTIFICATION",
        summary:
          "BLS is the healthcare-provider CPR/AED certification: the baseline resuscitation credential for anyone in a patient-care role. Navy policy states it plainly — all Navy Medicine personnel assigned to duties providing direct patient care must maintain current BLS healthcare-provider certification based on AHA or American Red Cross guidelines, and Red Cross BLS provider cards are treated as equivalent to MTN/AHA cards. In the military system, BLS is delivered through MTN sites using AHA or (since the 2018 transition) Red Cross curriculum. Validity: two years, as both issuing bodies state it — an Army Medical Simulation Training Center course page puts it in one line: graduates “will receive a BLS certification from the ARC/MTN, which is good for two (2) years.”",
        who: "All military healthcare personnel in direct patient care; also required as a prerequisite currency for medics' sustainment training (e.g., Army TC 8-800 tables require a current EMT certification and a current BLS card).",
        links: [BUMEDINST, BRAGG_MSTC, AHA_HOME],
      },
      {
        id: "acls",
        name: "ACLS — Advanced Cardiovascular Life Support",
        kind: "CERTIFICATION",
        summary:
          "ACLS is the advanced resuscitation certification for clinicians who respond to cardiac emergencies — physicians, nurses, paramedics, and other privileged/advanced providers in emergency, critical-care, and sedation settings (service policies tie the requirement to the clinical role, not to rank). It builds on a current BLS certification, which is a stated prerequisite. In the DoD system ACLS runs through the MTN like BLS does (AHA curriculum historically; Red Cross ALS curriculum administered by MTN since the 2019 phase-in per the Red Cross). Validity: two years — AHA provider cards and Red Cross ALS certification both run on the two-year cycle stated by the issuers.",
        who: "Providers whose clinical duties include responding to cardiac arrest / advanced resuscitation — determined by role and facility policy.",
        links: [BUMEDINST, RED_CROSS_MTN, AHA_HOME],
      },
      {
        id: "pals",
        name: "PALS — Pediatric Advanced Life Support",
        kind: "CERTIFICATION",
        summary:
          "PALS is the pediatric counterpart to ACLS — the advanced resuscitation certification for clinicians who care for seriously ill or injured infants and children. Course listings at military training centers state the prerequisites plainly: current BLS provider certification is required to take PALS. Like ACLS, it is delivered in the DoD through MTN-affiliated sites (AHA / Red Cross curricula), and the credential runs on the issuers' two-year cycle. It is a role-based requirement — members take it when their clinical assignment involves pediatric emergency care, not as a general-force credential.",
        who: "Clinicians and medics whose duties include pediatric resuscitation readiness, per facility/service policy.",
        links: [BRAGG_MSTC, BUMEDINST],
      },
    ],
  },
  {
    title: "EMT / NREMT & the Medic Pipelines",
    entries: [
      {
        id: "emt-pipelines",
        name: "How the pipelines connect to civilian EMT certification",
        kind: "CERTIFICATION PATH",
        summary:
          "The National Registry of Emergency Medical Technicians (NREMT) is the national certification body for EMS clinicians (EMR, EMT, AEMT, Paramedic); states then license/certify using NREMT as the common yardstick. The services built their enlisted medical pipelines on top of it: the Army, Air Force, and Coast Guard pipelines are structured so their medics earn and hold NREMT certification as part of the job, while Navy corpsman training is a broader clinical program that does not itself confer NREMT certification. NREMT certification itself runs on a two-year recertification cycle (per NREMT's candidate handbooks: “You need to recertify every two years,” by continuing education or recertification exam), and NREMT policy gives deployed service members documented pathways to extensions for military deployments. Keeping the card current while serving is handled inside the service's sustainment system (for the Army, the TC 8-800 MEDIC tables require a current EMT certification plus a current BLS card).",
        who: "Medics/corpsmen/techs planning their civilian credential, and anyone separating who wants to work EMS.",
        links: [
          {
            label: "NREMT — EMR Candidate Handbook (certification process; two-year cycle stated)",
            url: "https://www.nremt.org/Handbooks/EMR/Certification-Process",
          },
          {
            label: "NREMT — policy on time extensions incl. military deployments",
            url: "https://content.nremt.org/static/documents/November2019-Public_Comment_Documents.pdf",
          },
        ],
      },
      {
        id: "emt-by-service",
        name: "Who comes out EMT-certified — by service",
        kind: "BY SERVICE",
        summary:
          "As officially stated by state EMS authorities that process military medics daily: the Massachusetts Office of Emergency Medical Services states that “the U.S. Army, Air Force and Coast Guard … require their members who serve as ‘medics’ … to be NREMT certified, at least at the EMT level. The U.S. Navy does not have this requirement.” A Pennsylvania Senate statement from Penn State's Clearinghouse for Military Family Readiness says the same in pipeline terms: Army Combat Medics (68W) and Air Force Medical Technicians (4N0) gain and maintain NREMT certification while in the military, while Navy Corpsmen (HM) are not NREMT certified during service. Printed exactly at that level: 68W, 4N0X1, and CG HS come out NREMT-EMT certified (and must maintain it); Navy HM does not automatically — corpsmen can pursue EMT certification, and many do, but it is not a built-in output of the HM pipeline. Some roles go higher — Army flight medics and special-operations medics (18D) train to the paramedic level (National Registry Paramedic), and the Air Force runs a National Registry Paramedic shred for 4N0 as well; those are designated pipelines, not the baseline medic output.",
        who: "Anyone comparing medic jobs across branches, or a corpsman/medic mapping their exit credential.",
        flag: "Sourcing note: the Army/Air Force/Coast Guard-required vs. Navy-not-required distinction is stated here from official state EMS sources (Massachusetts OEMS; the PA Senate statement via Penn State's Clearinghouse) — the clearest public official statements found. No single DoD page states all four services' positions side by side.",
        links: [
          MASS_OEMS,
          {
            label: "Penn State Clearinghouse statement to the PA Senate (68W/4N0 maintain NREMT; HM does not)",
            url: "https://veterans.pasenategop.com/wp-content/uploads/sites/144/2026/09/Statement-Penn-State-Clearinghouse-for-Military-Families-Readiness.pdf",
          },
        ],
      },
      {
        id: "state-certification",
        name: "State certification — the second step nobody warns you about",
        kind: "LICENSING",
        summary:
          "NREMT certification is national certification, not a state license: to work as an EMT in a state you still apply to that state's EMS office, which typically grants state certification by endorsement when you hold current NREMT certification (or another state's EMT certification) — the Massachusetts page lays out exactly that path for veterans, including what to do if an NREMT card lapsed during service (contact NREMT, identify as a veteran, and they work reinstatement individually) and extensions when mobilization interrupts the two-year testing window. This entry teaches the shape (NREMT current → state endorsement application → state requirements/fees) and routes you to your state EMS office; it never prints a state's specific requirements, which change and belong to the state.",
        who: "Separating/retiring medics, Guard/Reserve members working civilian EMS, spouses with EMS certs PCSing (state-by-state applies to them too).",
        links: [
          {
            label: "Massachusetts OEMS — veteran EMT pathways (endorsement, lapsed-card reinstatement, deployment extensions)",
            url: "https://www.mass.gov/info-details/returning-veterans-and-military-personnel-emt",
          },
        ],
      },
    ],
  },
  {
    title: "Stop the Bleed",
    entries: [
      {
        id: "stop-the-bleed",
        name: "Stop the Bleed — bleeding-control training for everyone",
        kind: "FOR EVERYONE",
        summary:
          "STOP THE BLEED® is the national bleeding-control campaign launched at the White House in 2015 to turn bystanders into immediate responders in the minutes before EMS arrives — the civilian translation of the same battlefield lesson behind TCCC. The trademark and program belong to the Department of Defense (the DoD program office's own FAQ calls it “the official bleeding control program” of the Department, administered by DoD with licenses issued by DoD); the American College of Surgeons operates its large public training program under a DoD license, alongside other licensees including the American Red Cross, the AHA, and the Stop the Bleed Coalition. The DHS role is historical/promotional — DHS was a founding partner in the 2015 rollout — while the program's owner-operator structure today is DoD + ACS and fellow licensees. The public course runs about one hour (ACS lists ~90 minutes for its course format), is built for people with no medical background, and ends in a certificate of completion; there is no certification expiry — it is a completion credential, not a license, and refresher attendance is encouraged rather than mandated. Classes are found through the ACS course search at stopthebleed.org.",
        who: "Everyone — explicitly including families, teachers, and community members. This is the single easiest medical-training win for a spouse or parent.",
        flag: "Governance, corrected: common write-ups call Stop the Bleed “an ACS program” or “a DHS campaign.” The authoritative structure per DoD's own program FAQ is DoD owns and administers the program and the trademark; ACS (and Red Cross, AHA, the Coalition) deliver training under DoD license; DHS was a 2015 launch partner.",
        links: [
          {
            label: "DoD STOP THE BLEED® program FAQ (ownership, licensing, authoritative sites)",
            url: "https://dodstopthebleed.org/faq/",
          },
          {
            label: "ACS — about the program it operates under DoD license (course length, trained counts)",
            url: "https://www.facs.org/media-center/press-releases/2025/more-than-5-million-people-are-now-empowered-to-control-bleeding/",
          },
        ],
      },
    ],
  },
  {
    title: "Medical Training by Branch",
    entries: [
      {
        id: "army-medcoe",
        name: "Army — MEDCoE, the 68W pipeline, CLS, and EFMB",
        kind: "ARMY",
        summary:
          "The Army's medical training home is the U.S. Army Medical Center of Excellence (MEDCoE) at Joint Base San Antonio–Fort Sam Houston, under TRADOC. Its Department of Operational Medicine runs the Combat Medic Division — the 68W Combat Medic Specialist Training Program, the Combat Paramedic branch, 68W leader courses, and MOS-T — and the Tactical Medicine Readiness Division (BCT trauma training, Tactical Combat Medical Course, and others). The 68W pipeline is built in two movements: an EMT phase that produces NREMT EMT certification (see the EMT/NREMT group) and a combat-medic phase; sustainment runs through the TC 8-800 MEDIC tables at home-station Medical Simulation Training Centers (MSTCs), which also host the Army's TCCC Tier 2 (CLS) courses and BLS/ACLS/PALS. The Army's name-brand expert badge is the Expert Field Medical Badge (EFMB) — approved by the Department of the Army in 1965 as “a special skill award for recognition of exceptional competence and outstanding performance by field medical personnel”; eligibility spans AMEDD officers, warrant officers, and enlisted with a 68-series CMF MOS (plus 18D and others MEDCoE lists), and other-service and multinational medical personnel can also compete. MEDCoE publishes the governing pamphlet (MEDCoE PAM 350-10).",
        who: "Soldiers in or entering the 68 CMF; any medic weighing the EFMB; units scheduling CLS/TCCC sustainment.",
        links: [
          {
            label: "MEDCoE — EFMB (purpose, eligibility, PAM 350-10)",
            url: "https://medcoe.army.mil/efmb/?linkId=158083570",
          },
          {
            label: "MEDCoE — Department of Operational Medicine (Combat Medic Division / 68W program structure)",
            url: "https://medcoe-staging.army.mil/office-of-the-commandant",
          },
          BRAGG_MSTC,
        ],
      },
      {
        id: "usmc-no-organic-medics",
        name: "Marine Corps — no organic medics; TCCC and CLS for Marines",
        kind: "MARINE CORPS",
        summary:
          "Stated plainly, because Marines are proud of it and recruits get it wrong: the Marine Corps has no medical MOS of its own. Every “Doc” in a Marine unit is a U.S. Navy hospital corpsman (see the Navy entry below). What the Corps runs itself is the non-medical side of the system: Marines take TCCC at the ASM tier as baseline training, and designated Marines take Combat Lifesaver (Tier 2) so a rifle company has trained responders beyond self-aid until Doc arrives. Marine units' medical readiness rides on their attached corpsmen's Navy training pipeline, while the Corps' own contribution is making sure every Marine is TCCC-ASM trained and units carry designated combat lifesavers.",
        who: "Marines and future Marines (this entry exists largely to kill the “Marine medic MOS” myth at the recruiting stage).",
        links: [
          JTS_TRAINING,
          {
            label: "Navy Medicine / FMTB context — BUMEDINST 1500.15F (where the corpsmen who serve with Marines are made)",
            url: "https://www.med.navy.mil/Portals/62/Documents/BUMED/Directives/Instructions/1500.15F.pdf?ver=MjOk1r_3tLS1sMcuf12-zQ%3D%3D",
          },
        ],
      },
      {
        id: "navy-corpsman",
        name: "Navy — the corpsman pipeline, FMTB, IDC, and SAR corpsmen",
        kind: "NAVY",
        summary:
          "Navy Medicine (BUMED) owns the Hospital Corpsman (HM) rating — the largest clinical enlisted pipeline in the DoD and the sole source of medical support for the Marine Corps. Basic corpsman training runs at the Medical Education and Training Campus (METC) at JBSA–Fort Sam Houston (the tri-service campus where Army, Navy, and Air Force enlisted medical training is co-located). Corpsmen bound for Marine operating forces then go to a Field Medical Training Battalion (FMTB) — at Camp Pendleton (West) and Camp Lejeune/Camp Johnson (East) — earning the Field Medical Service Technician classification (NEC HM-L03A, formerly 8403/8404) that marks them as Fleet Marine Force corpsmen. Per the EMT/NREMT group above, the HM pipeline does not itself confer NREMT EMT certification. Advanced corpsman paths at name/purpose level: Independent Duty Corpsman (IDC) — senior corpsmen trained to serve as the sole medical provider where no physician is assigned (ships, submarines, isolated units), and Search and Rescue (SAR) corpsmen — corpsmen trained for rescue/aircrew medical roles. Navy resuscitation training policy is BUMEDINST 1500.15F (see the Life Support group).",
        who: "Sailors entering HM; Marines trying to understand their Doc's pipeline; corpsmen mapping IDC/SAR advancement.",
        links: [
          BUMEDINST,
          {
            label: "METC — tri-service campus hosting corpsman basic training (course catalog)",
            url: "https://www.metc.mil/",
          },
          MASS_OEMS,
        ],
      },
      {
        id: "air-force-4n0",
        name: "Air Force — 4N0X1, IDMT, and pararescue medicine",
        kind: "AIR FORCE",
        summary:
          "The Air Force's enlisted medical career field is Aerospace Medical Service, AFSC 4N0X1, trained at METC (see the Navy entry) and governed by the 4N0X1 Career Field Education and Training Plan (CFETP). Per the EMT/NREMT group above, 4N0s earn and maintain NREMT EMT certification as part of the career field. The CFETP's own specialty list shows the field's depth at name/purpose level: Independent Duty Medical Technician (4N0X1C / IDMT) — per METC's course page, mandatory training for 4N0s headed to remote or isolated duty, medical support of non-medical field units, or joint/agency missions, qualifying them to evaluate and treat patients in the absence of a physician until evacuation; a National Registry Paramedic shred for designated positions; and special-operations medic paths. Air Force pararescuemen (PJs) sit at the top of the service's combat-medicine ladder: AFSOC describes PJs as rescue specialists trained and tasked to provide emergency medical care as combat paramedics — their medical training is embedded in the special-tactics pipeline and answers to the TCCC Tier 4 (Combat Paramedic/Provider) role. Air Force TCCC implementation follows the DHA tier plans (the AFMS Tier 3 plan expressly folds Aerospace Medical Technicians into the CMC tier).",
        who: "Airmen in/considering 4N; anyone comparing AF medical roles (IDMT vs PJ is the classic confusion this entry resolves).",
        links: [
          {
            label: "METC — Independent Duty Medical Technician course (purpose and scope as METC states it)",
            url: "https://www.metc.mil/Academics/Courses/Nursing-and-Specialty-Medical/Independent-Duty-Medical-Technician/",
          },
          {
            label: "CFETP 4N0X1X — career-field structure incl. IDMT and NRP shreds",
            url: "https://static.e-publishing.af.mil/production/1/af_sg/publication/cfetp4n0x1x/cfetp4n0x1x.pdf",
          },
        ],
      },
      {
        id: "space-force-medicine",
        name: "Space Force — Air Force medicine wears the Guardian patch",
        kind: "SPACE FORCE",
        summary:
          "The Space Force has no separate enlisted medic career field: Guardians are medically supported by the Air Force Medical Service, and the Air Force Surgeon General's office includes the Office of the Assistant Surgeon General, U.S. Space Force Medicine (established 2023 out of the earlier Space Force Medical Operations Directorate), which sets medical policy and readiness standards for Guardians. Per the Department of the Air Force's own announcement, the Air Force “has been medically supporting Guardians since the newest military service was established in 2019.” What is new: starting Nov 1, 2026, Air Force medical personnel (officers, and enlisted with a 4N-series specialty) who complete a qualifying tour supporting the Space Force mission — 18+ months on a Space Base Delta, Space Launch Delta, USSPACECOM, or a USSF component field command — earn a Space Medicine special experience identifier (SEI). For training purposes a Guardian follows the Air Force picture in this section: TCCC tiers via the DAF implementation and resuscitation certs via MTN. A DAF instruction in the 48-series formally addressing operational medical support for Guardians was in coordination for late 2026 per Space Force's own reporting — flagged for the January refresh to confirm publication.",
        who: "Guardians (so they know the system behind them) and 4N Airmen considering space-mission tours.",
        links: [
          {
            label: "DAF — space medicine identifiers announcement (AFMS supports Guardians; SEI eligibility as stated)",
            url: "https://www.airforcemedicine.af.mil/News/Display/Article/4643591/daf-announces-space-medicine-identifiers-formalizes-specialty/",
          },
          {
            label: "Space Force — Space Force Medicine 2026 priorities (directorate role; forthcoming DAFI)",
            url: "https://www.spaceforce.mil/News/Article-Display/Article/4372237/the-next-frontier-space-force-medicine-focuses-on-people-policy-in-2026/",
          },
        ],
      },
      {
        id: "coast-guard-hs",
        name: "Coast Guard — Health Services Technicians and the built-in EMT",
        kind: "COAST GUARD",
        summary:
          "The Coast Guard's medical rating is Health Services Technician (HS). HS “A” School runs at Training Center Petaluma, California — a 120-training-day course whose own published breakdown is: 1 week petty-officer indoctrination, 7 weeks of EMT school, then the clinical-medicine core (anatomy, medical administration, laboratory procedures, pharmacy, nursing skills, sick call, wound care, preventive medicine, and more, in the school's own course description). The EMT block is not an add-on: per the EMT/NREMT group above, the Coast Guard is one of the services whose medics are required to be NREMT certified at least at the EMT level, and gocoastguard.com's HS page lists nationally registered EMT training among the rating's advanced opportunities alongside X-ray, pharmacy, behavioral health, and independent duty certification (the IDHS path — senior HSs serving as the only medical provider aboard cutters and at isolated units).",
        who: "Coast Guard members and recruits weighing HS; cutters' crews wondering who their independent-duty HS is.",
        flag: "Length note, flagged not resolved: the FORCECOM school page's breakdown above (120 training days: 1 week indoctrination / 7 weeks EMT / clinical core) is the one printed here; gocoastguard's “22-week rating course” is the same course rounded differently.",
        links: [
          {
            label: "FORCECOM — HS “A” School, TRACEN Petaluma (course structure incl. the 7-week EMT block)",
            url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/TraCen-Petaluma/Training/HS/",
          },
          {
            label: "gocoastguard.com — Health Services Technician (rating overview; EMT and independent-duty training)",
            url: "https://www.gocoastguard.com/careers/enlisted/hs?utm_source=lexipol&utm_medium=display&utm_campaign=uscg_lateral_firstresponders_fy23",
          },
        ],
      },
    ],
  },
  {
    title: "CPR/AED for Non-Medical Members & Families",
    entries: [
      {
        id: "aha-heartsaver",
        name: "AHA Heartsaver and Family & Friends — the civilian-side courses",
        kind: "FOR FAMILIES",
        summary:
          "For people with little or no medical training, the AHA's public track is Heartsaver: per the AHA, Heartsaver courses “are designed for anyone with little or no medical training who needs a course completion eCard for job, regulatory (for example, OSHA), or other requirements” — and can be taken by anyone who simply wants to be prepared. Heartsaver CPR AED and First Aid course-completion cards run on the AHA's standard two-year validity. For families who don't need a card at all, the AHA's Family & Friends CPR format teaches the same lifesaving concepts in a group setting with no course-completion card — the right recommendation for new parents, grandparents, and caregivers who just want the skill. Both are found through AHA-authorized Training Centers via the AHA's training site. (AHA also sells CPR Anytime kits for home learning; kits carry a certificate of participation, not a certification card — the two are not the same thing.)",
        who: "Spouses, parents, older kids' caregivers, unit family-readiness groups, anyone not in a patient-care role.",
        links: [AHA_HOME],
      },
      {
        id: "red-cross-family",
        name: "Red Cross courses and the military-family routes",
        kind: "FOR FAMILIES",
        summary:
          "The American Red Cross runs the parallel public catalog — CPR/AED and First Aid certifications on its standard two-year certification, in classroom, online, and blended formats through local chapters, which makes it the most findable option near most installations. Two military-specific notes: (1) the Red Cross is the same organization whose BLS/ALS/PALS curricula the MTN administers for the services (see the Life Support group), so a spouse's Red Cross CPR class and a member's Red Cross-curriculum BLS card come out of one system; (2) the Red Cross's military healthcare education program explicitly extends accredited continuing-education support to military spouses for licensure/certification needs. Military OneSource is the routing layer, not a course provider: it is the DoD's family-support front door and the place this app already sends families for installation services — CPR/first-aid classes near a family are commonly run by installation MWR/family programs and local Red Cross chapters, both reachable through the installation, and this entry routes families that way rather than inventing a national class finder that doesn't exist.",
        who: "Families PCSing (find the new chapter/installation program), spouses maintaining healthcare credentials.",
        links: [
          {
            label: "American Red Cross — MTN/military healthcare education (spouse CE support stated)",
            url: "https://redcross.cloud-cme.com/content/military-healthcare-education",
          },
          RED_CROSS_MTN,
        ],
      },
    ],
  },
];

export const MEDICAL_ENTRY_COUNT = MEDICAL_GROUPS.reduce((n, g) => n + g.entries.length, 0);
