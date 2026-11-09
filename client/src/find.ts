// Find Anything — Official Locator Directory — static reference data
// transcribed from the researched pack (~/workspace/military-app/find/
// find.md, researched November 8, 2026). 27 entries in 8 categories.
// Summaries, who statements, and links come only from the pack; every
// pack flag is preserved on its card. Phone numbers are printed only
// where the pack prints them (DMDC help lines, 833-MIL-MOVE, and the
// Vet Center Call Center route in entry 4).
//
// Fidelity rules baked into this data (the pack's dead/merged findings):
// - Move.mil is GONE as a standalone site (folded into Military
//   OneSource) — no standalone move.mil link appears anywhere. The DPS
//   login in entry 19 is the pack's printed dps.move.mil address for
//   moves in DPS, exactly as the pack (and the PCS section) prints it.
// - Commissary: shop.commissaries.com is the patron shopping site;
//   store information lives on corp.commissaries.com (entry 14).
// - Vet Centers route through the pack's pre-filtered VA facility-
//   locator link — the old standalone locator is merged (entry 4).
// - milConnect / ID entries carry the DS Logon → myAuth transition
//   flag (entry 8); TRICARE West is TriWest, never Health Net as the
//   current contractor (entry 25 states the change explicitly).
// - MWR/ITT (entry 16) and installation education centers (entry 22)
//   have NO national locator — they render as route notes through
//   MilitaryINSTALLATIONS, never as directory links (routeNote: true).
// - USO (entry 24) is labeled a nonprofit, not DoD, with the pack's
//   verification caveat; its link is the center map USO's own site
//   links to, on USO's volunteer system.

export type FindLink = { label: string; url: string };

export type FindEntry = {
  name: string;
  kind: string;
  summary: string;
  who?: string;
  details?: string[];
  flag?: string;
  callout?: string;
  /** Extra badge rendered beside the kind badge (e.g. USO nonprofit). */
  badge?: string;
  /** True for the two no-national-locator entries: rendered as a route
   * note through MilitaryINSTALLATIONS, never as a directory link. */
  routeNote?: boolean;
  links: FindLink[];
};

export type FindGroup = {
  title: string;
  note?: string;
  entries: FindEntry[];
};

export const FIND_STANDING_NOTE =
  "One directory of official locator and finder tools only — the answer to “I just got to a new town, where is the office I need?” Every entry says what the tool finds, who it's for, and gives the exact official link. Where no national locator exists, the entry says so plainly and gives the route that actually works instead of inventing one. Where a locator has moved, merged, or changed names, that is stated on the entry itself — read the ⚠ flags before relying on a link.";

const INSTALLATIONS: FindLink = {
  label: "MilitaryINSTALLATIONS — Military OneSource",
  url: "https://installations.militaryonesource.mil/",
};
const INSTALLATIONS_ROUTE: FindLink = {
  label: "Route via MilitaryINSTALLATIONS (choose installation → programs & services)",
  url: "https://installations.militaryonesource.mil/",
};

export const FIND_GROUPS: FindGroup[] = [
  {
    title: "Installations & Bases",
    entries: [
      {
        name: "MilitaryINSTALLATIONS — the DoD installation finder",
        kind: "Military OneSource",
        summary:
          "DoD's official directory of U.S. military installations worldwide, run through Military OneSource. Search by installation name, state, ZIP, or country and get the installation overview, check-in procedures, maps and directions, and — most useful in a new town — the contact listing for that installation's programs and services (housing, transportation office, legal assistance, child care, family support center, education center, and more). Installation pages are updated and verified by the installation itself. This one tool is the back door to half the locators in this directory: if a service has no national finder of its own, its local office is almost always listed here.",
        who: "Anyone arriving at, living near, or researching an installation — all branches, families included. Open to anyone; no login.",
        links: [INSTALLATIONS],
      },
      {
        name: "MilitaryINSTALLATIONS — how-to and resource page",
        kind: "Military OneSource",
        summary:
          "Military OneSource's own explainer for the finder above: the three search modes (installation, state resources, programs and services), how to build a custom installation booklet of contacts, and the “state resources” view for the state you're moving to. Start here if the finder itself is new to you.",
        who: "First-time users of the finder above; anyone PCSing who wants the state-level resources list for their gaining state.",
        links: [
          {
            label: "MilitaryINSTALLATIONS — how-to and resource page (Military OneSource)",
            url: "https://www.militaryonesource.mil/resources/network/militaryinstallations/",
          },
        ],
      },
    ],
  },
  {
    title: "VA",
    entries: [
      {
        name: "VA Facility Locator — Find VA Locations",
        kind: "VA.gov",
        summary:
          "VA's single official locator. Enter a city, state, or ZIP and choose a facility type — VA health (medical centers and clinics), Vet Centers, VA benefits offices, cemeteries, plus in-network community urgent care and pharmacies — and it returns the locations near you with address, phone, hours, and services. VA's own pages across va.gov print this one address for every “find a facility near you” need. No login required.",
        who: "Veterans, service members, and families looking for any kind of VA location in a new area.",
        links: [{ label: "VA Facility Locator — Find VA Locations (VA.gov)", url: "https://www.va.gov/find-locations/" }],
      },
      {
        name: "Vet Center Finder — the same locator, pre-filtered",
        kind: "VA.gov · Vet Centers",
        summary:
          "Vet Centers are VA's community-based counseling centers — readjustment counseling for combat veterans and survivors of military sexual trauma, plus grief and family counseling; free and confidential, and no VA health-care enrollment is required. There is no separate Vet Center locator site anymore: VA routes Vet Center searches through the Find VA Locations tool with the facility type set to Vet Center, which is exactly what this filtered link does. (VA's benefits training materials describe the same route: va.gov → Find a VA Location → facility type “Vet Center.”) Phone route: Vet Center Call Center 877-927-8387, as printed in VA-circulated materials.",
        who: "Eligible veterans, service members (including Guard/Reserve), and their families seeking counseling outside a big VA medical center.",
        links: [
          {
            label: "Vet Center Finder — VA Find VA Locations, pre-filtered to Vet Centers",
            url: "https://www.va.gov/find-locations/?facilityType=vet_center",
          },
        ],
      },
      {
        name: "VA Regional Benefit Offices",
        kind: "VA.gov",
        summary:
          "Regional benefit offices are where VA benefits are handled in person — claims help, benefit letters, VR&E counseling. Two official routes, because VA maintains both: (1) the Find VA Locations tool with facility type set to a VA benefits office gives you the office near a specific place; (2) VA's DiscoverVA “Inside the Department” listing, filtered to regional offices, lists every regional benefit office by name.",
        flag: "The older VBA “offices” index page (benefits.va.gov/benefits/offices.asp) still exists in VA's own references, but VA's current public directions — including its compensation pages — send people to the Facility Locator for their regional office, so that is the route this directory prints first.",
        who: "Anyone who needs VA benefits help face-to-face, or needs to know which regional office covers them.",
        links: [
          { label: "VA Facility Locator — Find VA Locations (VA.gov)", url: "https://www.va.gov/find-locations/" },
          {
            label: "DiscoverVA — Inside the Department, regional offices listing",
            url: "https://discover.va.gov/inside-the-department/?_organization_type=regional-offices",
          },
        ],
      },
      {
        name: "State Veterans Affairs Departments — directory",
        kind: "VA DiscoverVA / NASDVA",
        summary:
          "Every state (plus DC and the territories) runs its own veterans affairs department — state benefits, state veterans homes and cemeteries, and state/county service officers live there, not at VA. Two official directories: VA's own DiscoverVA External Resources page lists each state department with its description, and NASDVA — the National Association of State Directors of Veterans Affairs, the association of those state directors — maintains its membership at its own site. VA's news service itself points veterans to the NASDVA website to find their state agency.",
        who: "Any veteran or family in a new state who wants the state layer of benefits and help, not just the federal one.",
        links: [
          { label: "DiscoverVA — External Resources (state departments)", url: "https://discover.va.gov/external-resources/" },
          { label: "NASDVA — National Association of State Directors of Veterans Affairs", url: "https://nasdva.us/" },
        ],
      },
    ],
  },
  {
    title: "ID & Admin",
    entries: [
      {
        name: "ID Card Office Online — RAPIDS Site Locator & Appointments",
        kind: "DMDC · IDCO",
        summary:
          "The official way to find a RAPIDS ID card office and book the appointment: search by address or ZIP, see the nearest sites with hours, and schedule. The same IDCO portal also handles many ID tasks online (sponsor-signed DD Form 1172-2, family-member ID reissue requests, DEERS address updates) so a trip may not be needed at all. DMDC's own description: the locator and appointments function needs no logon.",
        who: "Anyone who needs a CAC or USID card issued, renewed, replaced, or a PIN reset — service members, DoD civilians, contractors, retirees, and family members.",
        links: [
          { label: "IDCO — locator & appointments", url: "https://idco.dmdc.osd.mil/idco/locator" },
          { label: "IDCO — portal home", url: "https://idco.dmdc.osd.mil/idco/" },
        ],
      },
      {
        name: "milConnect — DEERS self-service portal",
        kind: "DMDC · milConnect",
        summary:
          "The secure portal where sponsors and beneficiaries (18+) view and update what DEERS holds: contact information, TRICARE enrollment, SGLI coverage (SOES), benefits eligibility, and service history records. If your DEERS record is wrong, this is where most fixes start — or where you confirm the record before calling for help.",
        flag: "Sign-in changed: milConnect (and IDCO) moved from DS Logon to myAuth beginning May 20, 2025, per DMDC's own milConnect notices — expect the myAuth account flow, not the old DS Logon screens some older guides still show.",
        who: "Sponsors, spouses, and adult beneficiaries managing DEERS-tied benefits.",
        links: [{ label: "milConnect — DEERS self-service portal (DMDC)", url: "https://milconnect.dmdc.osd.mil/milconnect/" }],
      },
      {
        name: "DMDC Help — DEERS Support Office & DMDC Support Center",
        kind: "DMDC · Help",
        summary:
          "When the portals can't fix it: milConnect's own “Contacts and Help” page routes by problem — DEERS/benefits questions to the DMDC/DEERS Support Office (DSO) at 800-538-9552, technical problems to the DMDC Support Center at 800-477-8227, and website support to DMDC Tier 1 Web Services at 800-368-3665. Those numbers are printed here exactly as DMDC's official help page prints them.",
        who: "Anyone stuck on a DEERS record, TRICARE eligibility question, or a DMDC portal/CAC technical problem.",
        links: [
          {
            label: "milConnect — Contacts and Help (DMDC)",
            url: "https://milconnect.dmdc.osd.mil/milconnect/public/faq/Contacts_and_Help",
          },
        ],
      },
    ],
  },
  {
    title: "Money & Benefits Help",
    entries: [
      {
        name: "Find an Accredited Representative — find-a-rep",
        kind: "VA.gov",
        summary:
          "VA's official search for the people allowed to help with a VA claim: accredited VSO representatives, attorneys, and claims agents, searchable by ZIP, state, or organization. VA states on the page that an accredited VSO representative's help with benefit claims is always free (attorneys and claims agents may charge fees, under VA's rules). This is also the tool that finds the VSO offices co-located inside VA regional offices.",
        who: "Anyone filing a claim or a decision review who wants free, accredited help — start here, not with anyone who charges to file an initial claim.",
        links: [
          {
            label: "Find an Accredited Representative (VA.gov find-a-rep)",
            url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/",
          },
        ],
      },
      {
        name: "Armed Forces Legal Assistance (AFLA) — Legal Services Locator",
        kind: "AFLA · Joint-service",
        summary:
          "The joint-service locator for military legal assistance offices: enter your location and get the nearest office (any branch's office can serve eligible clients). Legal assistance covers wills and powers of attorney, lease and consumer problems, SCRA questions, family law basics, and notary services — free for eligible clients. The locator is hosted on an Air Force domain but is the official all-service AFLA tool, cited by Army, Coast Guard, and DoD sources alike. (Air Force members will also see aflegalassistance.law.af.mil — that is the Air Force's own legal assistance site for will/POA worksheets; the joint locator is the one printed here.)",
        who: "Active duty (including Guard/Reserve on active duty), retirees, and dependents with ID cards, per each office's eligibility rules.",
        links: [{ label: "AFLA — Legal Services Locator", url: "https://legalassistance.law.af.mil/" }],
      },
      {
        name: "Personal Financial Counselor Locator — FINRED PFC Map",
        kind: "DoD FINRED",
        summary:
          "DoD's map of its free Personal Financial Counselors — accredited financial counselors assigned at and around installations worldwide who give no-cost, confidential budgeting, debt, credit, home-buying, and retirement help, with no products to sell. Search the map for the counselor nearest your installation or town.",
        who: "Service members, Guard/Reserve, and families who want free one-on-one money help from the official program.",
        links: [{ label: "FINRED PFC Map — Personal Financial Counselor Locator", url: "https://finred.usalearning.gov/pfcMap" }],
      },
      {
        name: "County Veteran Service Officers — NACVSO directory",
        kind: "NACVSO",
        summary:
          "County Veterans Service Officers (CVSOs) are county-employed, VA-accredited representatives who help local veterans and families with claims and state/local benefits — free. Their national association, NACVSO, maintains the public directory of CVSOs.",
        flag: "Practical note, stated plainly: NACVSO's public site is a member listing rather than a ZIP-code locator, so the fastest combined route is this directory plus the find-a-rep entry above — VA's find-a-rep search also returns accredited county/state service officers by ZIP. VA News itself has pointed veterans to nacvso.org to check whether their county has a CVSO.",
        who: "Veterans and survivors who want in-person help in their own county, often at the courthouse or county veterans office.",
        links: [{ label: "NACVSO — County Veteran Service Officers directory", url: "https://www.nacvso.org/" }],
      },
    ],
  },
  {
    title: "Daily Life",
    entries: [
      {
        name: "Commissary Store Locations",
        kind: "DeCA",
        summary:
          "DeCA's official store directory: every commissary worldwide with address, phone, hours, and store services (including Commissary CLICK2GO online ordering where offered).",
        flag: "DeCA split its web presence and says so itself: shop.commissaries.com is now the patron shopping site (online ordering, payment, pickup), replacing commissaries.com in that role, while store information pages live on DeCA's corporate site at the directory link printed here. If a saved bookmark to the old commissaries.com store pages fails, this split is why.",
        who: "Authorized commissary patrons — service members, retirees, eligible veterans, and families — finding their store in a new town.",
        links: [
          { label: "DeCA — store directory (corp.commissaries.com)", url: "https://corp.commissaries.com/shopping/store-locations" },
          { label: "shop.commissaries.com — online shopping", url: "https://shop.commissaries.com/" },
        ],
      },
      {
        name: "Exchange Store Locator",
        kind: "Army & Air Force Exchange Service",
        summary:
          "The Exchange's official store locator at shopmyexchange.com: search by location for main exchanges, Express stores, Military Clothing stores, and other Exchange facilities, with hours and phone numbers. Cited in the Exchange's own DVIDS releases as the way to find your nearest store. (Navy Exchange and Marine Corps Exchange stores are found through their own services' sites and through MilitaryINSTALLATIONS — there is no single all-exchange locator.)",
        who: "Exchange patrons — noting the locator covers Army & Air Force Exchange Service stores.",
        links: [{ label: "Exchange Store Locator — shopmyexchange.com", url: "https://www.shopmyexchange.com/exchange-stores" }],
      },
      {
        name: "MWR & ITT Offices — no national locator",
        kind: "Route note",
        badge: "NO NATIONAL LOCATOR",
        routeNote: true,
        summary:
          "Said plainly, because every other guide fakes this one: there is no single national MWR or ITT locator. Morale, Welfare and Recreation programs and Information, Tickets & Travel offices are run per installation and per branch (Army MWR, Navy MWR, Air Force Services, Marine Corps MCCS, Coast Guard MWR), each with its own site. The working route in a new town: open MilitaryINSTALLATIONS, pick your installation, and use its program listings for the local MWR/ITT office contact — or search the installation's own MWR site from there. ITT ticket availability and prices are local, so a national list could not be accurate anyway.",
        who: "Anyone looking for their new installation's recreation programs, rentals, or discounted tickets.",
        links: [INSTALLATIONS_ROUTE],
      },
      {
        name: "MilitaryChildCare.com",
        kind: "DoD · MCC",
        summary:
          "The DoD-wide system for military child care: create a household profile, search military-operated child care worldwide (Child Development Centers, school-age care, family child care homes), submit and manage requests for care, and get routed to fee assistance (MCCYN) where installation care isn't available. Request as soon as you know your duty station — waitlists are real. The official application itself runs on the DISA-hosted address printed here; installation and OneSource pages cite it as MilitaryChildCare.com.",
        who: "Military and DoD-affiliated families who need child care, especially right after a PCS.",
        links: [
          {
            label: "MilitaryChildCare.com (DoD — MCC)",
            url: "https://public.militarychildcare.csd.disa.mil/mcc-central/mcchome#/",
          },
        ],
      },
    ],
  },
  {
    title: "Moving & Travel",
    entries: [
      {
        name: "PCS Move Help — Military OneSource contacts & your transportation office",
        kind: "Military OneSource",
        summary:
          "The official front door when a move goes sideways or you don't know which system you're in. Military OneSource's PCS contact page routes by problem: your local transportation office is the main point of contact for personal property (find its contact information through MilitaryINSTALLATIONS), the Personal Property Activity / DPS System Response Center help line is 833-MIL-MOVE (833-645-6683), and branch-specific help lines are listed on the same page.",
        flag: "Context from the PCS research: the old Move.mil site has folded into Military OneSource, and household-goods moves currently run in two systems side by side (DPS and MilMove) — this contacts page and your transportation office are how you find out which one your move is in; do not guess.",
        who: "Anyone mid-PCS with a scheduling, shipment, storage, entitlement, or moving-company problem.",
        links: [
          {
            label: "Military OneSource — customer-service contacts for military PCS",
            url: "https://www.militaryonesource.mil/resources/gov/customer-service-contacts-for-military-pcs/",
          },
        ],
      },
      {
        name: "Defense Personal Property System (DPS) — login",
        kind: "DPS",
        summary:
          "For moves under the legacy Tender of Service program, DPS is where the move is scheduled and managed: shipment requests, tracking, and claims. This direct login address is printed on official MilitaryINSTALLATIONS household-goods pages. If your move was assigned to MilMove instead, your transportation office or the contacts in the PCS Move Help entry above will route you — DPS login will not show a MilMove shipment.",
        who: "Members whose PCS household-goods move is in DPS.",
        links: [
          { label: "Defense Personal Property System (DPS) — login", url: "https://dps.move.mil/cust/standard/user/home.xhtml" },
        ],
      },
      {
        name: "AMC Space-Available Travel — passenger terminal directory",
        kind: "Air Mobility Command",
        summary:
          "AMC's official Space-A page is the whole route in one place: eligibility categories, sign-up methods (including the automated sign-up form and AMC Form 140), and the Passenger Terminal Directory linking every AMC passenger terminal's own page and social feed, which is where 72-hour flight schedules and roll-call times actually live. Space-A is never guaranteed — AMC's page leads with that warning and tells travelers to be ready to pay for commercial travel if schedules change.",
        flag: "AMC's web presence is migrating hosts (terminal pages on amc.af.mil now print update notices pointing to amc.usaf.afpims.mil); both addresses are AMC's, and the directory on this page is the stable way in.",
        who: "Space-A-eligible travelers — principally active duty on leave, retirees (Category VI, with its limits), and eligible Guard/Reserve and dependents under the category rules on the page.",
        links: [
          {
            label: "AMC Space-Available Travel Page — passenger terminal directory",
            url: "https://www.amc.af.mil/AMC-Travel-Site/AMC-Space-Available-Travel-Page/",
          },
        ],
      },
      {
        name: "Passports for Official Travel — Special Issuance Agency",
        kind: "U.S. Department of State",
        summary:
          "The passport piece of an OCONUS move or official trip, at concept level as the State Department runs it. Two kinds of passport live here and they are not interchangeable: a regular (tourist) passport, handled through State's standard passport pages starting at travel.state.gov; and special-issuance passports (official, service, no-fee) for government travel — for DoD travelers those start with Form DD 1056 submitted at a DoD passport facility or through the DoD Passport and Visa Office, per State's Special Issuance Agency page printed here. Family members traveling on orders typically need the no-fee passport route started early — processing times are the classic OCONUS-PCS trap, and your transportation/passport office at the losing installation works from these same pages.",
        who: "Anyone with OCONUS orders — PCS or TDY — and their command-sponsored family members.",
        links: [
          {
            label: "State Department — Special Issuance Agency (DoD route)",
            url: "https://travel.state.gov/content/travel/en/passports/how-apply/sia-apply.html",
          },
          { label: "State Department — regular passport renewal", url: "https://travel.state.gov/en/passports/renew-replace/online.html" },
        ],
      },
    ],
  },
  {
    title: "Education & Jobs",
    entries: [
      {
        name: "Installation Education Centers — no national locator",
        kind: "Route note",
        badge: "NO NATIONAL LOCATOR",
        routeNote: true,
        summary:
          "Also said plainly: there is no single national education-center finder. Base education centers are installation programs, and each branch runs its own education portal for TA (ArmyIgnitED, MyNavy Education/WebTA, AFVEC, Marine Corps TA via WebTA — detailed in the Education section). The locator route that works everywhere: MilitaryINSTALLATIONS → your installation → its education center listing gives the local office's address, phone, and hours for in-person counseling, testing, and JST/CCAF help.",
        who: "Anyone who wants to sit down with an education counselor at their (new) installation.",
        links: [
          {
            label: "Route via MilitaryINSTALLATIONS (choose installation → education listings)",
            url: "https://installations.militaryonesource.mil/",
          },
        ],
      },
      {
        name: "American Job Center Finder",
        kind: "CareerOneStop · U.S. Department of Labor",
        summary:
          "The Department of Labor's finder for the nearly 2,400 American Job Centers nationwide: enter a location and get centers near you with hours, contact information, and services offered. Comprehensive centers have veterans' representatives and employment services for job seekers, laid-off workers, and employers — the civilian one-stop that works alongside the military transition programs, and the one that stays useful after you've left the installation's orbit.",
        flag: "CareerOneStop: the finder landing URL follows DOL's published pattern and its directory/detail pages were verified live in research; the finder is the current official AJC tool per CareerOneStop itself.",
        who: "Transitioning service members, veterans, spouses, and any job seeker — especially once you're living away from an installation.",
        links: [
          {
            label: "American Job Center Finder (CareerOneStop — U.S. Department of Labor)",
            url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx",
          },
        ],
      },
      {
        name: "USO Centers — location map",
        kind: "USO",
        badge: "NONPROFIT — NOT DoD",
        summary:
          "USO centers — airport lounges and installation centers, 250+ locations worldwide — are a genuinely useful thing to find in a strange airport at midnight.",
        flag: "Verification flag, stated honestly: USO does not publish a clean standalone public locator page that could be verified in research. USO's own site answers “how do I find my nearest USO center” by linking a center map — and that link lands on the map printed here, hosted on USO's volunteer system (it lists centers by region with addresses). Regional USO sites (state/region subdomains of uso.org) also list their local centers. The USO is a congressionally chartered nonprofit, not a DoD agency — every USO page says so itself — so this entry is labeled as the official organization source rather than an official government one.",
        who: "Currently serving members and their dependents (USO centers' core eligibility), travelers and new arrivals.",
        links: [
          {
            label: "USO Centers — location map (the center map USO's own site links to)",
            url: "https://volunteers.uso.org/?nd=vms_chapter_selector_map&tagent=takeaction",
          },
        ],
      },
    ],
  },
  {
    title: "Health",
    entries: [
      {
        name: "TRICARE Find a Doctor",
        kind: "TRICARE.mil",
        summary:
          "TRICARE's router to civilian care: the Find a Doctor tool searches TRICARE-authorized providers, and behind it sit the regional contractors' own network directories — because network care is delivered by the contractors, not by TRICARE itself. As TRICARE's current materials route it: East Region — Humana Military; West Region — TriWest Healthcare Alliance (the West contractor changed from Health Net Federal Services to TriWest — older guides and some older TRICARE pages still in circulation name Health Net; the current contractor is TriWest), Overseas — International SOS. TRICARE won't pay for care from a non-authorized non-network provider, so find the provider here first, then call the office to confirm they still take your plan.",
        who: "TRICARE beneficiaries looking for a civilian doctor, specialist, or facility — especially right after a move.",
        links: [{ label: "TRICARE Find a Doctor (TRICARE.mil)", url: "https://www.tricare.mil/finddoctor" }],
      },
      {
        name: "TRICARE All Provider Directories",
        kind: "TRICARE.mil",
        summary:
          "The index page behind the Find a Doctor entry: every regional contractor's network provider directory in one official list, including mental-health provider directories and the overseas directories. Use this when you already know your region and want the contractor's full directory rather than the quick search.",
        who: "Beneficiaries who know their TRICARE region and want the complete network directory for it.",
        links: [
          {
            label: "TRICARE All Provider Directories (TRICARE.mil)",
            url: "https://www.tricare.mil/GettingCare/FindDoctor/AllProviderDirectories",
          },
        ],
      },
      {
        name: "Find a Military Hospital or Clinic — MTF Finder",
        kind: "TRICARE.mil",
        summary:
          "The official finder for military treatment facilities: search by ZIP code plus radius, or by facility/installation name, for military hospitals and clinics worldwide, with addresses and phone numbers. TRICARE notes directory information can change — call the MTF to confirm. (Your patient portal, appointments, and records then run through the MHS GENESIS Patient Portal, which the MTF's own page links.)",
        who: "Anyone who wants care at a military hospital or clinic — the first stop for TRICARE Prime enrollees near an installation.",
        links: [{ label: "Find a Military Hospital or Clinic — MTF Finder (TRICARE.mil)", url: "https://www.tricare.mil/mtf" }],
      },
    ],
  },
];

export const FIND_TOTAL = FIND_GROUPS.reduce((n, g) => n + g.entries.length, 0);
