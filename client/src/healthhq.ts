// My Health HQ — Portal & Care Router — transcribed from the
// researched pack (~/workspace/military-app/health/health.md,
// researched Nov 9, 2026). PURE ROUTER discipline: no costs, no
// medical content, no treatment or coverage advice — routes only.
// Official sources only: TRICARE.mil and the TRICARE Newsroom,
// health.mil / DHA and official MTF pages, DMDC (milConnect /
// myAuth), the TRICARE regional contractors' own pages as TRICARE
// itself lists them (East = Humana Military, West = TriWest —
// Health Net ran the PRIOR contract and must NOT appear as current
// anywhere; Overseas = International SOS, TFL = WPS, pharmacy =
// Express Scripts), OPM (FEDVIP/BENEFEDS), and VA.gov. The GENESIS /
// myAuth cutover carries three conflicting official dates — all
// three print as a conflict with the standing instruction: follow
// the portal's own login screen.

import type { RefGroup } from "./refdata";

export const HEALTH_STANDING =
  "My Health HQ only tells you where to log in, where to call, and which program does what — it is not medical advice, it does not diagnose or treat anything, and it never replaces your care team. In an emergency, call 911 (or your local emergency number overseas) or go to the nearest emergency room. TRICARE itself notes it doesn't own most of these platforms — other agencies and contractors do — so each portal's own login screen is the final word.";

export const HEALTH_INTRO =
  "There is no single health portal. milConnect is enrollment and DEERS, MHS GENESIS is your record and appointments at military hospitals and clinics, your regional contractor portal is claims/referrals/network care, Express Scripts is pharmacy, United Concordia is the TRICARE Dental Program — and the MHS Nurse Advice Line (1-800-TRICARE, option 1) is the 24/7 human fallback when you don't know which door to use.";

const MYAUTH_TRICARE = { label: "TRICARE — Using myAuth Secure Login", url: "https://tricare.mil/GettingCare/VirtualHealth/SecurePatientPortal/SecureLogin/myAuth" };
const MYAUTH_DMD = { label: "DMDC — myAuth information & help page", url: "https://myaccess.dmdc.osd.mil/identitymanagement/help/myauth.htm" };
const TRICARE_NEWS_MYAUTH = { label: "TRICARE Newsroom (May 5, 2026) — TRICARE logins transitioning to myAuth in 2026", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4477500/tricare-logins-transitioning-to-myauth-in-2026-what-you-need-to-know" };
const WPAFB_GENESIS = { label: "Wright-Patterson AFB (official MTF page) — MHS GENESIS / DS Logon-to-myAuth transition", url: "https://wrightpatterson.tricare.mil/Patient-Resources/MHS-GENESIS" };
const ALL_LOGINS = { label: "TRICARE — All Logins", url: "https://tricare.mil/GettingCare/VirtualHealth/SecurePatientPortal/SecureLogin/AllLogins" };
const TRICARE_NEWS_LOGINS = { label: "TRICARE Newsroom (Jul 24, 2025) — TRICARE Logins: Know How To Access Portals", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4254751/tricare-logins-know-how-to-access-portals-and-manage-your-benefit" };
const GENESIS_PORTAL = { label: "MHS GENESIS Patient Portal", url: "https://my.mhsgenesis.health.mil/" };
const GENESIS_CHERRY = { label: "Naval Health Clinic Cherry Point (official MTF article) — How To Access Your MHS GENESIS Patient Portal", url: "https://cherrypoint.tricare.mil/News-Gallery/Articles/Article/3902850/how-to-access-your-mhs-genesis-patient-portal" };
const GENESIS_DRUM = { label: "Fort Drum / Guthrie Army Health Clinic (official MTF page) — MHS GENESIS", url: "https://guthrie.tricare.mil/Getting-Care/Appointments-Referrals/MHS-GENESIS" };
const MILCONNECT = { label: "milConnect", url: "https://milconnect.dmdc.osd.mil/milconnect/" };
const EAST_PORTAL = { label: "TRICARE East Region beneficiary portal — Humana Military (as printed by TRICARE)", url: "https://infocenter.humana-military.com/bene/service/account/login" };
const WEST_PORTAL = { label: "TRICARE West Region beneficiary portal sign-in — TriWest (as printed by TRICARE)", url: "https://tricare-bene.triwest.com/signin" };
const TOP_PORTAL = { label: "TRICARE Overseas beneficiary portal — International SOS (as printed by TRICARE)", url: "https://top.internationalsos.com/beneficiary" };
const ISOS_CONTACT = { label: "International SOS — Contact: Traveling in the U.S.", url: "https://www.tricare-overseas.com/contact-us/traveling-in-the-us" };
const TFL_PORTAL = { label: "TRICARE For Life beneficiary portal — WPS / tricare4u (as printed by TRICARE)", url: "https://tricare4u.com/en/portal/beneficiary" };
const ES_PORTAL = { label: "TRICARE Pharmacy Program portal — Express Scripts (as printed by TRICARE)", url: "https://militaryrx.express-scripts.com/" };
const TRICARE_PHARMACY = { label: "TRICARE — Pharmacy hub", url: "https://tricare.mil/pharmacy" };
const TRICARE_MTF = { label: "TRICARE — Find a Military Hospital or Clinic", url: "https://tricare.mil/mtf" };
const TRICARE_NETWORK = { label: "TRICARE — network providers", url: "https://tricare.mil/networkproviders" };
const NAL_PENSACOLA = { label: "Naval Hospital Pensacola (official MTF page — prints the Nurse Advice Line number and option)", url: "https://pensacola.tricare.mil/Clinics/NBHC-Belle-Chase" };
const TRICARE_URGENT = { label: "TRICARE — Urgent Care", url: "https://tricare.mil/urgentcare" };
const TRICARE_REFERRALS = { label: "TRICARE Newsroom — Q&A: Getting and Using Referrals With TRICARE", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/3306629" };
const GOODFELLOW = { label: "TRICARE — Goodfellow Medical Group facility page (prints the 911 framing)", url: "https://tricare.mil/GettingCare/FindDoctor/MTF/Facilities/Goodfellow-Medical-Group" };
const TRICARE_PLANS = { label: "TRICARE — Plans", url: "https://tricare.mil/plans" };
const TOP_BRIEF = { label: "TRICARE Overseas Program briefing (health.mil, June 2025)", url: "https://staging-mobile.health.mil/sitecore/content/MHSHome/Reference-Center/Presentations/2025/06/20/TRICARE-Overseas-Program-Slides" };
const PLANFINDER = { label: "TRICARE — Plan Finder", url: "https://tricare.mil/planfinder" };
const COMPARE = { label: "TRICARE — Compare Costs", url: "https://tricare.mil/Costs/Compare" };
const TRICARE_DENTAL = { label: "TRICARE — Dental hub", url: "https://tricare.mil/dental" };
const TDP = { label: "TRICARE — TRICARE Dental Program", url: "https://tricare.mil/CoveredServices/Dental/TDP" };
const OPM_FEDVIP = { label: "OPM — FEDVIP Q&A (eligibility as OPM states it)", url: "https://www.opm.gov/frequently-asked-questions/insure-faq/dental-vision/do-i-have-to-enroll-in-fedvip/" };
const VA_DENTAL = { label: "VA — Dental care", url: "https://www.va.gov/health-care/about-va-health-benefits/dental-care/" };
const PHARMACY_2026 = { label: "TRICARE Newsroom — Make the most of your TRICARE pharmacy benefit in 2026", url: "https://newsroom.tricare.mil/News/TRICARE-News/Article/4373270/make-the-most-of-your-tricare-pharmacy-benefit-in-2026" };
const VA_RECORDS = { label: "VA — Review medical records online", url: "https://www.va.gov/health-care/review-medical-records/" };

export const HEALTH_GROUPS: RefGroup[] = [
  {
    title: "The Login Layer: myAuth Is Replacing DS Logon",
    note: "Run by: Defense Manpower Data Center (DMDC). This tile is being read in the middle of the largest login migration DoD has ever run (DS Logon → myAuth, 2025–2026) — authentication entries carry dates and must be re-verified at the January refresh.",
    entries: [
      {
        name: "myAuth — the new DoD login (DMDC)",
        body: "Per TRICARE/DMDC, myAuth is the new secure login replacing DS Logon across Department of Defense systems. With myAuth you sign in with a Common Access Card, or a username/password plus a secure multi-factor authentication method (TRICARE's materials name Okta Verify, an app for personal or government mobile devices, as the MFA option that works without a CAC). One myAuth login is meant to work across the DoD sites that used to each take DS Logon. DMDC manages myAuth — TRICARE does not. Help: DMDC at 800-368-3665 (printed in TRICARE's May 5, 2026 article); DMDC Support Center 800-477-8227 (printed on milConnect's official contacts page). Status as officially stated: the rollout is phased, site by site — not one cutover date. milConnect and ID Card Office Online switched first, on May 20, 2025 (DMDC/Army retirement-seminar material and milConnect's own notices agree). TRICARE's May 2026 article lists the East, West, Overseas, and TRICARE For Life beneficiary portals and the TRICARE Pharmacy Program portal among the platforms moving to myAuth, and an official Wright-Patterson AFB MTF page states the TRICARE-critical contractor systems — naming Express Scripts/Evernorth, United Concordia (TRICARE Dental Program), Humana, TriWest, International SOS, and WPS — were scheduled to complete the transition by September 2026.",
        who: "Everyone who logs in to a DoD health or benefits site without a CAC — retirees, spouses, and adult family members first of all. If a site you use still shows DS Logon, TRICARE's instruction is to keep using DS Logon on that site until it switches; when a platform switches, its login page prompts you to create the myAuth account.",
        flag: "TRICARE's myAuth page content: the tricare.mil myAuth URL is confirmed (the page exists at the address TRICARE's own materials print), but the research session's fetch returned only TRICARE's external-link interstitial, so the status summary in this entry is sourced to TRICARE's Newsroom article of May 5, 2026 and DMDC/MTF pages rather than to the myAuth page's own current text. Re-read the page directly at refresh.",
        links: [MYAUTH_TRICARE, MYAUTH_DMD, TRICARE_NEWS_MYAUTH],
        source: "TRICARE Newsroom (May 5, 2026); DMDC",
      },
      {
        name: "DS Logon — the legacy login, sunsetting",
        body: "DS Logon is the legacy DoD Self-Service username/password login that for years opened milConnect, the patient portal, contractor sites, and VA partner pages. Its status, as official pages state it in late 2026: being retired in phases as each application moves to myAuth. Separate, already-finished change: VA removed DS Logon from VA.gov on November 18, 2025 — VA sign-in is now Login.gov or ID.me (see the Records tile). Do not confuse the VA change (done) with the DoD change (phased through 2026).",
        flag: "DS Logon sunset wording differs, printed side by side rather than blended. TRICARE: “sunsetting by the end of fiscal year 2026,” site-by-site, and “until all these platforms have transitioned to myAuth, you may still need to use DS Logon for certain logins.” An official MTF page (Wright-Patterson) states plainly: “DS Logon will not support customers after September 30, 2026. All users must transition before this deadline” — that is one facility's printing of the DoD-wide sunset. The safe user instruction both statements support: create your myAuth account now (you can start it from your existing DS Logon), and follow each site's own login screen. No single DoD-wide hard date is asserted.",
        links: [WPAFB_GENESIS, TRICARE_NEWS_MYAUTH],
        source: "Wright-Patterson AFB (official MTF page); TRICARE Newsroom (May 5, 2026)",
      },
      {
        name: "TRICARE All Logins — the official master list (start here when lost)",
        body: "TRICARE maintains a single All Logins page listing every secure portal login for the benefit, and a Find My Login wizard under its Secure Login section. TRICARE's own guidance, repeated across its 2025–2026 login articles, is: “When in doubt, visit the TRICARE All Logins page to find the right access point.” This section mirrors that rule — every portal in the Portals tile is also reachable from All Logins, so if any direct link in this app ever goes stale, All Logins is the recovery route.",
        who: "Anyone, any time a bookmark fails or a login screen looks unfamiliar.",
        links: [ALL_LOGINS, TRICARE_NEWS_LOGINS],
        source: "TRICARE — All Logins; Newsroom (Jul 24, 2025)",
      },
      {
        name: "The three-bucket rule — the section's top explainer",
        body: "TRICARE's own framing (Jul 24, 2025 article): the platforms fall into three buckets, and picking the right bucket is the whole skill this section teaches. 1. Enrollment & eligibility (DEERS): milConnect / Beneficiary Web Enrollment — enroll in or change plans, update contact information, check enrollment status. 2. Care at military hospitals & clinics: the MHS GENESIS Patient Portal — records, appointments, secure messaging, prescription refills for MTF care. 3. Civilian care through a contractor: your regional contractor portal — claims, referrals, network providers. Pharmacy and dental hang off the side: Express Scripts and United Concordia. TRICARE's bottom line, verbatim in substance: “Use milConnect for enrollment and DEERS updates. Use MHS GENESIS to see your records for care at military hospitals and clinics. Use your TRICARE contractor's portal to manage claims, view referrals, and pay bills.” One more TRICARE warning worth printing on this card: if you see a civilian provider, that provider's own EHR portal is theirs — the DoD doesn't own it, and GENESIS won't show those records the same way.",
        links: [TRICARE_NEWS_LOGINS],
        source: "TRICARE Newsroom (Jul 24, 2025)",
      },
    ],
  },
  {
    title: "The Portals",
    entries: [
      {
        name: "MHS GENESIS Patient Portal — your MTF record, appointments, messages, refills",
        body: "The patient-facing side of MHS GENESIS, the DoD's single electronic health record for service members, veterans, and their families at military hospitals and clinics. DHA/MTF pages describe the portal, available 24/7, as the place to: view your health information and records (including lab/test results and clinical notes), book or cancel appointments (medical and dental), exchange secure messages with your care team, request prescription refills and renewals, and complete pre-visit questionnaires. It replaced TRICARE Online (TOL), including the TOL patient portal and secure messaging — if an old guide or bookmark says TRICARE Online, this is its successor. Eligibility note printed on official MTF material: parents/guardians can access a child's portal for ages 0–12; for ages 13–17 the record is largely hidden from proxies (appointments and immunizations only), per DoD policy/COPPA as the MTF handbook states it. Login route: my.mhsgenesis.health.mil — sign in with a CAC or a DS Logon (Premium/Level 2) account; MTF pages also note patient kiosks at some facilities. Help as printed on official MTF pages: MHS GENESIS Help Desk 800-600-9332; DS Logon problems, DMDC Customer Contact Center 800-368-3665. Cyber-safety line the MTF pages themselves print: all genuine MHS GENESIS sites use the .mil domain.",
        who: "Anyone who gets care at a military hospital or clinic — checking results, booking, messaging the team, refilling.",
        flag: "The portal's authentication is mid-migration to myAuth — official sources give THREE conflicting dates, printed as a conflict: an MTF page says the transition “will take effect on September 16, 2026”; DHA/Fort Hood announcements said September 23; and TRICARE updated its announcement on September 25, 2026 to say the portal remains “fully accessible via DS Logon or Common Access Card” while the switch is pending, with users being prompted to create myAuth accounts. Standing instruction: follow the portal's own login screen. Also flagged: GENESIS has two hostnames in official material — current MTF pages print my.mhsgenesis.health.mil; some official pages still print patientportal.mhsgenesis.health.mil. This section links the former.",
        links: [GENESIS_PORTAL, GENESIS_CHERRY, GENESIS_DRUM],
        source: "MHS GENESIS Patient Portal; official MTF pages (Cherry Point, Fort Drum)",
      },
      {
        name: "milConnect & Beneficiary Web Enrollment — enrollment, DEERS, plan changes",
        body: "DMDC's self-service portal for what DEERS holds about you. For health specifically (TRICARE's Jul 2025 summary): enroll in or change TRICARE plans through the Beneficiary Web Enrollment tools, check your enrollment status, and update contact information (address, phone) — the record every other health system keys off. The full milConnect picture (SGLI/SOES, records, ID cards) lives in Find Anything and is cross-linked, not duplicated. Login route: milconnect.dmdc.osd.mil — milConnect has used myAuth since May 20, 2025; older guides that say “sign in with DS Logon” are stale for this site. If DEERS data itself is wrong and the portal can't fix it: DEERS Support Office 800-538-9552 (number as printed on milConnect's official contacts page).",
        who: "Sponsors and adult (18+) beneficiaries — at enrollment time, after every PCS, and whenever contact info changes (a stale DEERS address breaks claims and pharmacy mailings).",
        links: [MILCONNECT],
        source: "milConnect (DMDC); TRICARE Newsroom (Jul 2025)",
      },
      {
        name: "TRICARE East Region — Humana Military (contractor portal)",
        body: "The East Region managed-care contractor's beneficiary portal: view claims, check referrals, find network providers, pay bills (TRICARE's bucket summary, Jul 2025). Humana Military is the East contractor; the portal login link below is the exact address TRICARE itself printed in its May 5, 2026 myAuth article. Contractor phone as printed on International SOS's official contact page: Humana Military 1-800-444-5445. Login note: TRICARE lists the East portal among the platforms that moved to myAuth in the 2026 contractor wave; follow the portal's own sign-in screen.",
        links: [EAST_PORTAL, TRICARE_NEWS_MYAUTH],
        source: "TRICARE Newsroom (May 5, 2026) — the article that prints this portal URL",
      },
      {
        name: "TRICARE West Region — TriWest Healthcare Alliance (contractor portal)",
        body: "The West Region contractor's beneficiary portal — same job as the East: claims, referrals, network providers, bills. The West contractor is TriWest Healthcare Alliance, not Health Net. Health Net Federal Services ran the West Region under the prior contract; TriWest is the contractor TRICARE's current (2025–2026) materials name for the West, and TRICARE's May 2026 article prints the TriWest sign-in link below. Contractor phone as printed on International SOS's official contact page: TriWest 888-TRIWEST (888-874-9378).",
        flag: "Contractor changed: any older guide — including older versions of this app's research — that routes West Region users to Health Net or tricare-west.com is stale. Health Net material still circulates (old bookmarks, old guides, the retired tricare-west.com pattern). This section ships TriWest only.",
        links: [WEST_PORTAL],
        source: "TRICARE Newsroom (May 5, 2026); International SOS contact page",
      },
      {
        name: "TRICARE Overseas Program — International SOS (contractor portal)",
        body: "The Overseas contractor's beneficiary portal (secure claims and TOP services) for beneficiaries enrolled in or traveling under the TRICARE Overseas Program. International SOS runs the TOP Regional Call Centers; its official contact page for beneficiaries traveling in the U.S. prints its routine-care line as 877-451-8659 and reminds overseas beneficiaries to coordinate care with their TOP Regional Call Center — and that the MHS Nurse Advice Line can advise while stateside but care must still be coordinated with the TOP call center.",
        flag: "The overseas portal's own login page offers two ways in: a TRICARE-Overseas.com username/password — which the portal calls the preferred option — or myAuth, which replaced DS Logon there (as the portal's login page states). The dual-login detail comes from the portal's own login page as summarized in secondary coverage of it; the portal URL itself is TRICARE-printed and solid. Re-verify the login-page wording at refresh.",
        links: [TOP_PORTAL, ISOS_CONTACT],
        source: "TRICARE Newsroom (May 5, 2026); International SOS",
      },
      {
        name: "TRICARE For Life — WPS Military and Veterans Health (tricare4u)",
        body: "TRICARE For Life beneficiaries, in all regions, use the TFL beneficiary portal run by WPS Military and Veterans Health for claims and TFL account matters — not their geographic region's contractor portal. The portal link below is the one TRICARE printed in May 2026. TFL itself is the Medicare-wraparound plan (see the Plans tile); its costs and Medicare coordination rules live on TRICARE's TFL pages and in Benefits — routing only here.",
        links: [TFL_PORTAL],
        source: "TRICARE Newsroom (May 5, 2026)",
      },
      {
        name: "Express Scripts — the TRICARE Pharmacy Program portal",
        body: "Express Scripts administers the TRICARE pharmacy benefit. Through its beneficiary portal you can (per TRICARE's Jul 2025 summary): switch eligible medications to TRICARE Pharmacy Home Delivery, request new prescriptions, refill prescriptions, track order status, and pay bills. Express Scripts also runs the Find a Pharmacy tool and hosts the TRICARE Formulary Search (Pharmacy tile). Beneficiary phone as printed on TRICARE's Pharmacy Program fact sheet: 877-363-1303 (TDD/TTY 877-540-6261); overseas pharmacy support runs through International SOS per the same fact sheet. Login note: TRICARE's 2026 materials list the Pharmacy Program portal among the platforms on myAuth (the Wright-Patterson page names “Express Scripts/Evernorth” in the by-September-2026 contractor wave).",
        links: [ES_PORTAL, TRICARE_PHARMACY],
        source: "TRICARE — Pharmacy Program; Newsroom",
      },
    ],
  },
  {
    title: "Find Care",
    entries: [
      {
        name: "Find a Military Hospital or Clinic — TRICARE's MTF finder",
        body: "TRICARE's official locator for military hospitals and clinics (MTFs) worldwide: search by location and get the facility's page — address, phone, hours, services, and its appointment line. Official TRICARE/MTF material prints the short route tricare.mil/mtf. This is also the door to each facility's own site, where its GENESIS instructions, pharmacy, and clinic phone trees live.",
        who: "Anyone choosing or reaching an MTF — after a PCS, while traveling, or when specialty care means a bigger facility.",
        links: [TRICARE_MTF],
        source: "TRICARE — Find a Military Hospital or Clinic",
      },
      {
        name: "Find a Network Provider — TRICARE's provider search route",
        body: "For civilian care, TRICARE routes provider search through its network providers page (printed as tricare.mil/networkproviders in official Navy/TRICARE guidance) and onward to your region's contractor directory — the region where you'll receive care controls, so East searches run in Humana Military's directory and West searches in TriWest's; overseas searches run through International SOS. TRICARE's caution pattern applies: a directory listing is a starting point — confirm the provider is still network when you book, because directories lag real contracts. No provider data lives in this app; the directories are the data.",
        links: [TRICARE_NETWORK],
        source: "TRICARE — network providers",
      },
      {
        name: "MHS Nurse Advice Line — 24/7, 1-800-TRICARE, option 1",
        body: "The Military Health System Nurse Advice Line: registered nurses, 24/7, for health-care advice, help deciding whether you need urgent care, help finding an urgent-care or emergency facility, and — per MHS material — scheduling a virtual urgent care appointment. Official MTF pages print it identically everywhere: 800-TRICARE (874-2273), Option 1; a web chat and video chat option exists at MHSNurseAdviceLine.com (as printed in an official Navy beneficiary document).",
        who: "Any TRICARE beneficiary (except USFHP) unsure whether something is urgent, after hours, or away from home.",
        flag: "Scope, printed with its provenance: the line serves the U.S. (overseas beneficiaries coordinate through their TOP Regional Call Center instead), and it is not available to US Family Health Plan members (USFHP runs its own arrangements — see the Plans tile). The 800-TRICARE/option-1 number and 24/7 availability are printed identically across official MTF pages (high confidence); the USFHP limit and the MHSNurseAdviceLine.com chat route come from official beneficiary guidance documents rather than a single canonical TRICARE page — both are printed with that provenance.",
        links: [NAL_PENSACOLA],
        source: "Official MTF pages (Naval Hospital Pensacola prints the number and option)",
      },
      {
        name: "Urgent care — the referral rules, at TRICARE's summary level",
        body: "TRICARE defines the lanes (this section prints rules only — no symptom guidance, ever). From TRICARE's own Q&A on referrals (TRICARE Newsroom) and its urgent-care materials:",
        bullets: [
          "Active duty service members: you need a referral for any care your PCM doesn't provide — including urgent care. First stop is your MTF; if that isn't possible, the Nurse Advice Line can give the referral for civilian urgent care. Care without a referral may be billed to you.",
          "TRICARE Prime enrollees who aren't active duty (family members, retirees): no referral needed for urgent care — use a TRICARE-authorized urgent care center or network provider. (You do need referrals for specialty care; skipping one triggers the point-of-service option and higher costs.)",
          "TRICARE Select, TRICARE Reserve Select, TRICARE Retired Reserve, TRICARE For Life: no referral needed for most services, urgent care included.",
          "TRICARE Prime Remote (active duty): official summaries note ADSMs enrolled in Prime Remote don't need a referral for urgent care, because they live far from an MTF (as TRICARE's urgent-care page summarizes it).",
          "Overseas Prime/Prime Remote Overseas enrollees traveling in the U.S.: International SOS's official guidance states they do not need a referral to get urgent care while traveling stateside, and should follow up with their PCM afterward.",
          "Costs for urgent care vary by plan and group and change annually — this section prints no copays; the route is TRICARE's Costs pages and your contractor portal.",
        ],
        links: [TRICARE_URGENT, TRICARE_REFERRALS],
        source: "TRICARE — Urgent Care; Newsroom referral Q&A",
      },
      {
        name: "Emergencies — 911 framing",
        body: "Rule as TRICARE's own pages print it: “If you need immediate medical attention, call 911 or your international emergency number – or, go to an emergency room.” Emergency care never requires a referral or pre-authorization first — TRICARE's referral Q&A and MTF pages both state you don't need a referral for emergency care; Prime enrollees should notify their PCM within 24 hours or the next business day after emergency care (as TRICARE's urgent/emergency-care summaries state). This section carries no definition of what counts as an emergency beyond TRICARE's own framing; when in doubt and it can't wait, this entry's instruction is the whole entry.",
        links: [GOODFELLOW],
        source: "TRICARE (Goodfellow Medical Group facility page — prints the 911 framing and the Nurse Advice Line together, as MTF pages do)",
      },
    ],
  },
  {
    title: "Plans at a Glance",
    note: "Routing only. What each plan costs, who exactly qualifies, and open-season rules live in Benefits and on TRICARE's plan pages — this tile exists so you can recognize your plan's name and land on its page. Plan names and one-liners follow TRICARE's own plan summaries (TRICARE Overseas Program briefing, health.mil, June 2025; TRICARE plan pages).",
    entries: [
      {
        name: "The plan names, one line each",
        body: "Each plan below has its own page under TRICARE's Plans hub (linked on this card).",
        bullets: [
          "TRICARE Prime — the managed-care plan: you're assigned a primary care manager (PCM), usually at an MTF, who refers you out for specialty care. The plan active duty members are enrolled in.",
          "TRICARE Prime Remote — Prime for sponsors (and families living with them) whose home/work addresses are far from a military hospital or clinic (TRICARE's summary: more than 50 miles or an hour's drive).",
          "TRICARE Select — the self-managed plan: see any TRICARE-authorized provider without a referral; network providers cost less. Not open to active duty members themselves.",
          "TRICARE Prime / US Family Health Plan (USFHP) — a Prime option delivered by designated not-for-profit community health systems in six U.S. areas; USFHP members use USFHP's own network and arrangements (including its own advice line — the MHS Nurse Advice Line excludes USFHP).",
          "TRICARE For Life (TFL) — for beneficiaries who have Medicare Part A and Part B; TRICARE pays after Medicare. Portal: WPS/tricare4u.",
          "TRICARE Reserve Select (TRS) — the premium-based plan Selected Reserve members and their families can buy when not on active duty. (Deep coverage: Guard & Reserve Hub.)",
          "TRICARE Retired Reserve (TRR) — the premium-based plan for Retired Reserve members and families before age 60 eligibility for retiree TRICARE begins. (Cross-link: Guard & Reserve Hub / Retirement Hub.)",
          "TRICARE Young Adult (TYA) — premium-based Prime or Select coverage a qualified adult child can buy after aging out of regular TRICARE, up to age 26. TRICARE's short route: tricare.mil/tya.",
          "TRICARE Prime Overseas — Prime for ADSMs and command-sponsored families living overseas near a military hospital or clinic.",
          "TRICARE Prime Remote Overseas — Prime for ADSMs and command-sponsored families in designated remote overseas locations, away from an MTF.",
          "TRICARE Select Overseas — the Select option for eligible beneficiaries living overseas (families, retirees, Guard/Reserve families).",
        ],
        links: [TRICARE_PLANS, TOP_BRIEF],
        source: "TRICARE — Plans; TRICARE Overseas Program briefing (health.mil, June 2025)",
      },
      {
        name: "Plan Finder & Compare Plans — TRICARE's own “which plan / what will it cost” tools",
        body: "Two official tools do the work this section deliberately doesn't: the Plan Finder (tricare.mil/planfinder, as printed in official Navy guidance) walks through your situation to the plans you may be eligible for, and Compare Plans / Costs (tricare.mil/Costs/Compare, printed across official MTF pages) shows current-year costs side by side. All cost figures for every plan live there and in the annual TRICARE Costs and Fees Fact Sheet — never in this app (costs reset every January; a printed figure would be a wrong figure most of the year).",
        links: [PLANFINDER, COMPARE],
        source: "TRICARE — Plan Finder; Compare Costs",
      },
    ],
  },
  {
    title: "Dental",
    note: "Dental is a separate benefit from TRICARE medical — TRICARE's medical plans do not include routine dental care. Which door you use depends entirely on who you are.",
    entries: [
      {
        name: "Active duty dental — military dental clinics & the Active Duty Dental Program",
        body: "Active duty service members get dental care at military dental clinics (appointments run through your MTF — find it via the Find Care tile, and GENESIS books dental appointments at MTFs). When a military clinic can't provide the care, civilian care runs through the Active Duty Dental Program (ADDP) by referral. ADSMs do not enroll in the TRICARE Dental Program — that's the family/Guard-Reserve plan (next entry). Routing level only; your unit/dental clinic owns the details.",
        links: [TRICARE_DENTAL],
        source: "TRICARE — Dental hub (routes ADDP, TDP, and FEDVIP)",
      },
      {
        name: "TRICARE Dental Program (TDP) — United Concordia",
        body: "A voluntary, premium-based dental plan administered by United Concordia for: active duty family members, and National Guard/Reserve members who are not on active duty (and their families), plus certain survivors. Enrollment carries a 12-month minimum. Enroll online through milConnect → Beneficiary Web Enrollment (stateside) or directly with United Concordia; TRICARE notes online enrollment via milConnect isn't available overseas — overseas enrollment is by phone or mail to United Concordia. The TDP My Account portal (TRICARE, Jul 2025) lets enrollees view coverage details, check claims history, view dental EOBs, and pay bills. Login note: TRICARE's 2026 login materials list United Concordia among the contractor systems on myAuth.",
        flag: "Two links verified at build per the research flags: (a) the TDP page path on this card follows TRICARE's covered-services URL pattern as referenced in TRICARE materials; the confirmed route is TRICARE's dental hub (tricare.mil/dental), also linked here. (b) United Concordia's TDP phone numbers are taken from United Concordia's own site at refresh rather than from the research pack (a secondary printing was not used).",
        links: [TDP, TRICARE_DENTAL, MILCONNECT],
        source: "TRICARE — TRICARE Dental Program; Dental hub",
      },
      {
        name: "Retiree dental & vision — FEDVIP through BENEFEDS (OPM)",
        body: "Retired uniformed service members and their families — including Retired Reserve / “gray area” retirees — get dental (and vision) through the Federal Employees Dental and Vision Insurance Program (FEDVIP), run by the Office of Personnel Management. FEDVIP replaced the old TRICARE Retiree Dental Program (ended 2018) — any guide still pointing retirees at TRDP is years out of date. FEDVIP is voluntary and enrollee-pay-all (no government premium share), with a choice of carriers; you enroll, change, or cancel through BENEFEDS, OPM's enrollment portal, during the annual Federal Benefits Open Season (mid-November to mid-December) or after a qualifying life event. Active duty members themselves are not FEDVIP-eligible; active duty families may buy FEDVIP vision — dental for them is the TDP. Premiums and carrier lists change every plan year — no figures here; OPM's FEDVIP pages and the BENEFEDS compare tools are the route. Reach BENEFEDS from OPM's FEDVIP pages (BENEFEDS prints its contact line as 1-877-888-3337 in FEDVIP materials).",
        flag: "BENEFEDS' direct URL was not fetched from an official page in the research session (OPM pages reference BENEFEDS by name); reach it from OPM's FEDVIP pages — the direct URL is a refresh-time verify.",
        links: [OPM_FEDVIP],
        source: "OPM — FEDVIP Q&A",
      },
      {
        name: "VA dental care — veterans, routing level",
        body: "VA dental care is not a general VA health-care benefit: VA assigns eligible veterans to dental benefits classes based on service history and health situation, and the class decides what care VA provides — a few classes (e.g., service-connected dental disability with compensation, former POWs, 100% service-connected) qualify for any needed dental care; others get one-time or condition-specific care; many enrolled veterans qualify for no VA dental care and instead may buy reduced-cost insurance through the VA Dental Insurance Program (VADIP). You must be enrolled in VA health care before using a VA dental clinic. This section deliberately prints no class table — VA's own page is the determination, and the class rules live with the Benefits/Claims sections' cross-links.",
        links: [VA_DENTAL],
        source: "VA — Dental care",
      },
    ],
  },
  {
    title: "Pharmacy",
    entries: [
      {
        name: "The four pharmacy channels",
        body: "TRICARE's own summary (TRICARE Newsroom, “Make the most of your TRICARE pharmacy benefit in 2026”) lists four ways to fill a prescription — printed here at TRICARE's summary level, with no copays (they change annually; the Costs route is the Plans tile):",
        bullets: [
          "Military pharmacy — at your MTF; up to a 90-day supply of most medications; fills prescriptions from military and civilian providers. Generally the lowest-cost channel.",
          "TRICARE Pharmacy Home Delivery — Express Scripts mail order for medications you take regularly; up to a 90-day supply; free standard shipping; ships to U.S. addresses, U.S. territories, and APO/FPO addresses; order online, by phone, or by mail.",
          "Retail network pharmacy — TRICARE's contracted civilian pharmacies; find one with the Find a Pharmacy tool. Some maintenance medications must move to home delivery or a military pharmacy after limited retail fills (TRICARE's “maintenance drugs” rule — the fact sheet names the rule; the drug list is on TRICARE/Express Scripts pages).",
          "Non-network pharmacy — you may use one, but you pay the full price up front and file a claim for any reimbursement, per TRICARE's summary.",
        ],
        links: [PHARMACY_2026, TRICARE_PHARMACY],
        source: "TRICARE Newsroom (2026 pharmacy benefit); TRICARE Pharmacy hub",
      },
      {
        name: "TRICARE Formulary Search — is this drug covered, and where can I fill it?",
        body: "The TRICARE Formulary Search tool answers, for a named medication: whether it's covered (generic formulary / brand-name formulary / non-formulary / non-covered — the four categories TRICARE's fact sheet names), where you can fill it, what forms or prior authorization it requires, and its cost at each channel (costs display in the tool — this section prints none). Run by Express Scripts for TRICARE; TRICARE's pages route to it from the Pharmacy hub. There is also a Basic Core Formulary — the list of drugs every full-service military pharmacy stocks — which the search reflects for the MTF channel.",
        links: [TRICARE_PHARMACY, ES_PORTAL],
        source: "TRICARE — Pharmacy hub (routes to the Formulary Search); Express Scripts",
      },
      {
        name: "Find a network pharmacy",
        body: "Express Scripts' Find a Pharmacy tool locates TRICARE retail network pharmacies near you; TRICARE's Pharmacy Program fact sheet prints the tool's address as www.esrx.com/findpharmacy. If you're moving a prescription between channels, the fact sheet prints the Express Scripts Member Choice line for transfers: 877-882-3335 (as printed on an official MTF pharmacy page). Overseas: certified-pharmacy rules apply in some countries (the fact sheet names the Philippines) — overseas fills route through International SOS.",
        links: [TRICARE_PHARMACY],
        source: "TRICARE Pharmacy Program Overview fact sheet (via the Pharmacy hub)",
      },
    ],
  },
  {
    title: "Your Health Records",
    entries: [
      {
        name: "Records from MTF care — inside the GENESIS portal",
        body: "The record of care you received at military hospitals and clinics lives in MHS GENESIS, and the Patient Portal is where you view and download it — MTF guidance describes viewing/downloading your health record including historical record data captured before GENESIS at your facility. Portal access rules in the Portals tile (including the ages 13–17 proxy limits) apply to records too. If the portal can't produce what you need (older records, another facility's paper-era files), the fallback is the MTF's medical records / Release of Information office — find the facility via the Find Care tile; there is no single DoD-wide records-request portal for patients, and none is invented here.",
        links: [GENESIS_PORTAL],
        source: "MHS GENESIS Patient Portal; official MTF guidance",
      },
      {
        name: "Records from VA care — My HealtheVet on VA.gov & the Blue Button report",
        body: "For veterans enrolled in VA health care, VA's records live in the My HealtheVet experience on VA.gov: find, review, print, and download your VA medical records — lab and test results, vaccine and allergy records, care summaries and notes — and download the full VA Blue Button report (your combined VA health record as a PDF/text file) when you need the whole thing, e.g., to hand to a civilian provider. Two migration facts VA has already completed (printed with dates): My HealtheVet moved onto VA.gov (June 2025) — the old standalone portal is retired as the front door — and VA.gov sign-in is Login.gov or ID.me; VA removed both the My HealtheVet user ID (2025) and DS Logon (November 18, 2025) from VA sign-in. Some VA facilities on the newer federal EHR route certain tasks to their own portal — VA.gov tells you when that's your facility.",
        links: [VA_RECORDS],
        source: "VA — Review medical records online",
      },
      {
        name: "Health records at separation — cross-link, don't duplicate",
        body: "Your service treatment record at separation, how a copy gets to VA, what to request if it's incomplete, and where archived records live (NPRC and the services) are covered in full by Records & DD214 — this section cross-links there rather than restating it. The one health-specific line worth printing here, at routing level: download your GENESIS record before you separate, while your CAC and portal access are live — it is the fastest copy you will ever get, and the VA Claims & VSO Guide explains why that copy matters for a VA claim. In-app cross-links: Records & DD214 Center; VA Claims & VSO Guide (C&P exams and treatment records); Benefits (VA health-care enrollment).",
        links: [GENESIS_PORTAL],
        source: "Cross-link entry — Records & DD214 Center holds the full treatment",
      },
    ],
  },
];
