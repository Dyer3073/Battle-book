// Credentialing (COOL) Center — transcribed from the researched pack
// (~/workspace/military-app/cool/cool.md, researched Nov 9, 2026).
// The pack is the content source of truth: 19 entries, its figures,
// its flags, and its exclusions are binding. BINDING ROUTER RULE: the
// per-service COOL mapping tools ship as HOMEPAGE ROUTES ONLY labeled
// "search on their site" — no built-in MOS→credential search and no
// constructed search URLs anywhere in this module. Funding figures
// are program constants as the official pages publish them, each with
// its source; conflicts print as conflicts (the Coast Guard per-FY
// limit), superseded figures print flagged as superseded (the Army's
// old $4,000), and figures no official source publishes are never
// printed (no Navy or Marine Corps dollar cap exists; the AF COOL
// $500 books-per-goal figure was NOT verified and does not appear;
// the vendor "$4,500/FY Coast Guard" figure appears in NO official
// CG source and is excluded entirely).

import type { PackSection } from "./seven";

export const COOL_SECTION: PackSection = {
  view: "cool",
  title: "Credentials for Your Job",
  headSub:
    "Civilian certifications and licenses that match your military job — and how your service pays for them. One DoD umbrella, five service programs, three different ways of paying: the money differs sharply by branch, and every card says which mechanism is yours. No school-acceptance promises and no employment promises: a credential is an exam you pass, and a transcript line is a recommendation a school may or may not honor.",
  intro:
    "Start with the two landscape cards, then your branch's cards. Every COOL mapping tool in this center routes to the branch portal's homepage, labeled “search on their site” — the portals' internal search URLs were not fetch-verified, so the app never constructs one. Funding follows the service's list, not your wish list: a credential that is not listed with a funding indicator is one you pay for yourself (or through the GI Bill route in the last tile).",
  standing:
    "Figures are program constants as the official pages publish them, each with its source — every one can change by fiscal year or policy message. Failing has consequences in some branches and not others; each branch card carries its own rule, and no branch's rule is ever generalized to another.",
  tiles: [
    {
      key: "landscape",
      label: "Read This First",
      tileSub: "Entries 1–2 · one umbrella, five programs, what a credential is",
      intro:
        "The frame for the whole center: what COOL is, how the five service programs differ in how they pay, and the honesty rules that govern every credential claim.",
      entries: [
        {
          id: "cool-what-is",
          name: "What COOL is — one DoD umbrella, five service programs, three ways of paying",
          summary:
            "Credentialing Opportunities On-Line (COOL) is the DoD's credentialing portal family: one joint home at cool.osd.mil with a service portal per branch. Every portal maps your military occupation to civilian credentials and shows, per credential, whether that service funds it — but the money works three different ways, and “COOL funding” is never one program.",
          who: "Everyone — read before any branch entry.",
          body: [
            "The five portals: Army COOL, Navy COOL, Marine Corps COOL, Air Force COOL (reached through the joint site and AFVEC), and Coast Guard COOL. Each does the same first job — it maps your military occupation to civilian certifications and licenses whose requirements overlap your training, with a gap analysis showing what remains. Look for the funding icon on the credential's page; the Navy calls it “Navy Bucks,” the Corps “COOL bucks.”",
            "How the money moves differs sharply by branch. Pre-paid voucher / direct pay: the Army pays vendors directly (no reimbursement, ever), the Navy issues a pre-paid voucher, and the Marine Corps issues an exam voucher — you get approval before you test and never front the money. Reimbursement: the Coast Guard — you pay only after prior ETQC approval, then claim. Goal-based funding account: the Air Force — an approved AF COOL goal in AFVEC draws against a lifetime cap.",
            "MilGears (milgears.osd.mil) is the DoD self-assessment and credential-pathway tool the services name alongside COOL; it is named and routed here, not documented as its own entry.",
          ],
          flags: [
            "Router rule (standing): the COOL portals' internal occupation/credential search URLs were not fetch-verified in the research pass. Every mapping tool in this center therefore routes to the branch portal homepage, labeled “search on their site.” No COOL search URL is constructed anywhere in this app.",
          ],
          links: [
            { label: "DoD COOL — search on their site", url: "https://www.cool.osd.mil" },
            { label: "MilGears — search on their site", url: "https://milgears.osd.mil/" },
          ],
          source: "DoD COOL (cool.osd.mil) service portals",
        },
        {
          id: "cool-what-a-credential-is",
          name: "What a credential is (and is not) — the honesty frame",
          summary:
            "A certification is an industry body's attestation that you passed its exam and meet its experience requirements; a license is a government's legal permission to do the work. Neither is a degree, and neither is a job offer. Three rules print up front, each grounded in the services' own pages.",
          who: "Everyone, before spending anything.",
          body: [],
          bullets: [
            {
              title: "The credentialing agency sets the requirements — not the service",
              text: "COOL pages repeatedly direct members to contact the credentialing agency and validate eligibility before requesting funding (the Army's Step 1 says exactly this). Military training often covers part of a credential's requirements; the gap analysis on each COOL credential page shows what remains.",
            },
            {
              title: "Funding follows the service's list, not your wish list",
              text: "Every branch funds only credentials that appear on its COOL portal with a funding indicator — in the Army's case, only via its Credentialing Assistance list. A credential that exists but is not listed is a credential you pay for yourself (or via the GI Bill route, last tile).",
            },
            {
              title: "Failing has consequences in some branches and not others",
              text: "Army CA requires you to sit the exam or recoup the course cost, and AF COOL requires reimbursement of a failed funded exam; the Marine Corps states the opposite — no requirement to pass, no payback for failing. The branch cards carry their own rule; never generalize one branch's rule to another.",
            },
          ],
          flags: [],
          links: [{ label: "DoD COOL — search on their site", url: "https://www.cool.osd.mil" }],
          source: "The services' COOL program pages",
        },
      ],
    },
    {
      key: "army",
      label: "Army COOL & CA",
      tileSub: "Entries 3–5 · the mapping tool, Credentialing Assistance, renewals",
      intro:
        "The Army's credential library, its funding program (Credentialing Assistance, requested through ArmyIgnitED), and renewal funding. The 2025–26 policy cut is flagged on the funding card — older Army pages still show the old numbers.",
      entries: [
        {
          id: "army-cool-tool",
          name: "Army COOL — the mapping tool",
          summary:
            "Army COOL is the Army's credential library: the credentials relevant to each MOS, gap analysis between Army training and a credential's requirements, and the list from which all Credentialing Assistance funding must come. Explore via the site's “Explore Military Occupations” menu — search on their site; this app builds no MOS→credential search.",
          who: "Any Soldier choosing a credential; start here before ArmyIgnitED.",
          body: [
            "Per MyArmyBenefits: “Approved credentials are located on the Army COOL website.” Check the credential's own eligibility and testing requirements with the credentialing agency, then request funding (next card).",
            "Army COOL is also where the CA Virtual Counseling Cell (VCC) lives — a Teams-based counseling service for CONUS and OCONUS Soldiers who are unsure what to pursue or need help submitting a request; the contact route is published on the Army COOL costs-and-funding page.",
          ],
          flags: [],
          links: [
            { label: "Army COOL — search on their site", url: "https://www.cool.osd.mil/army/" },
            {
              label: "MyArmyBenefits Army COOL fact sheet",
              url: "https://myarmybenefits.us.army.mil/Benefit-Library/Federal-Benefits/Army-Credentialing-Opportunities-On-Line-(COOL)?serv=124",
            },
          ],
          source: "Army COOL / MyArmyBenefits",
        },
        {
          id: "army-ca",
          name: "Army Credentialing Assistance — what it pays for, and the 2025–26 policy cut",
          summary:
            "Credentialing Assistance (CA) pays credentialing expenses up front, directly — “You do not pay anything out of pocket. The Army does NOT reimburse any credentialing related expenses.” ALARACT 102/2025 cut the annual cap to $2,000 per FY (the old $4,000 is superseded), one credential per year, maximum three in 10 years.",
          who: "Enlisted Soldiers and warrant officers, all components. ⚠ Commissioned officers are ineligible from March 19, 2026 (AR 621-5).",
          body: [
            "Request CA through ArmyIgnitED: create a credentialing education goal (“Credentialing Assistance – MOS Related” or “– Non MOS Related”), then Apply for Funding. CA pays courses/training, fees, books, supplies and exams leading to a credential, including recertification. The credential does not have to be related to your MOS. A CA request must be submitted at least 45 business days before the course or exam start date.",
            "Guard Soldiers on drill status are explicitly eligible per the fact sheet and exempt from the BCT-graduation condition; Reserve-component Soldiers without a CAC must be issued one by their unit to access ArmyIgnitED. First-time CA users must complete ArmyIgnitED training before requesting, and Soldiers must use the Army's decision-support tool before requesting CA.",
          ],
          bullets: [
            { title: "Annual CA cap: $2,000 per FY", text: "Decreased from $4,000 by ALARACT 102/2025 (released Nov 14, 2025). CA and Tuition Assistance together remain inside the combined $4,500 FY limit." },
            { title: "One credential per year; maximum three credentials in 10 years", text: "Recertification of a previously earned credential does not count against these limits." },
            { title: "Aviation credentials capped at $1,000 per year", text: "For all Army components." },
            { title: "Sit the exam or recoup", text: "Soldiers must take the associated credential exam or recoup the cost of the coursework/training." },
          ],
          flags: [
            "The program was cut by ALARACT 102/2025 (Changes to Voluntary Education Policy). Older Army pages and most installation handouts still circulating still show the old $4,000 figure — it is superseded. This card prints the new constants with their source.",
            "Effective March 19, 2026 (AR 621-5, as the fact sheet summarizes): commissioned officers (O-1–O-10) are ineligible for CA (officers with an in-progress credential goal predating the change may finish it); all TA and CA requests require supervisor/commander-representative approval inside ArmyIgnitED; and a Soldier who incurs two recoupment actions across TA and CA in the same FY is suspended from TA/CA for 12 months (appealable through ArmyIgnitED; not retroactive). FY27 CA requests opened in ArmyIgnitED Sept 14, 2026 for starts on/after Oct 29, 2026, subject to availability of funds.",
          ],
          links: [
            { label: "Army COOL — search on their site", url: "https://www.cool.osd.mil/army/" },
            { label: "Soldier CA Process Guide", url: "https://www.cool.osd.mil/army/credential_steps/index.html?processguide" },
          ],
          source: "MyArmyBenefits fact sheet (ALARACT 102/2025; AR 621-5)",
        },
        {
          id: "army-renewal",
          name: "Army — renewal and maintenance funding",
          summary:
            "CA covers recertification as a payable expense, and recertifications don't consume the one-per-year / three-in-10-years credential slots. Continuing-education fees tied to keeping a credential current are payable on the same terms as the initial credential.",
          who: "Soldiers holding a CA-earned (or any COOL-listed) credential approaching renewal.",
          body: [
            "Installation education pages list “test fees, related fees for continuing education requirements, and recertification of credentials” among CA-payable costs. Request in ArmyIgnitED like any other CA action, ahead of the deadline — never as a reimbursement.",
          ],
          flags: [],
          links: [{ label: "Army COOL — search on their site", url: "https://www.cool.osd.mil/army/" }],
          source: "Army installation education pages",
        },
      ],
    },
    {
      key: "navy",
      label: "Navy COOL",
      tileSub: "Entries 6–7 · the voucher program and the funding-pool reality",
      intro:
        "Navy COOL pays for eligible credentialing exams, recertification fees and maintenance fees — not training. There is no per-Sailor dollar cap, and this tile explains why none is printed.",
      entries: [
        {
          id: "navy-cool-tool",
          name: "Navy COOL — the mapping tool and the voucher program",
          summary:
            "Navy COOL maps ratings, jobs, designators and collateral duties to civilian credentials for active-duty and Reserve Sailors, and administers a voucher program that pays for eligible credentialing exams, recertification fees and maintenance fees. The funded-credential marker on a rating's page is the “Navy Bucks” icon. Search on their site.",
          who: "Enlisted Sailors, active and Reserve. Credential funding also reaches E-6 and above retiring with 20 years of service per CHIPS.",
          body: [
            "Navy COOL is administered by the Navy Credentials Program Office under Naval Education and Training Command (NETC), governed by OPNAVINST 1540.56B. CHIPS cites 1,875 funded credentialing opportunities for enlisted personnel and over 1,500 opportunities mapped to officer designators — mapping is not funding (see the officers card).",
          ],
          bullets: [
            {
              title: "What Navy COOL does not pay for",
              text: "Training, courses, study materials or practice exams. It funds the exam and the credential's upkeep — preparation is on the Sailor (or TA).",
            },
            {
              title: "Mandatory credentials are not COOL's bill",
              text: "Per OPNAVINST 1540.56B §5d(6) as Navy COOL publishes it: credentials that are mandatory to gain or hold your rating/billet are the resource sponsor's funding responsibility, not voluntary-COOL funding (the standing exception is mandatory DoD Cyberspace Workforce credentials under DoD 8140).",
            },
          ],
          flags: [
            "CHIPS' “1,875 funded credentialing opportunities” is a program-publicity figure, undated in the article — printed here as the Navy's own description, not a count this app guarantees.",
            "IRR and Voluntary Training Unit members are outside the funded program per the program's published eligibility — verify current status on the site; this exclusion was read on program guidance, not the homepage.",
          ],
          links: [
            { label: "Navy COOL — search on their site", url: "https://www.cool.osd.mil/usn/" },
          ],
          source: "Navy COOL / NETC / CHIPS magazine (OPNAVINST 1540.56B)",
        },
        {
          id: "navy-officers-pool",
          name: "Navy — officers, process, and the funding pool reality",
          summary:
            "No per-Sailor dollar cap is published for Navy COOL — none exists to print. Funding is a finite annual pool, first-come, first-served, with funds released across the fiscal year. The operational warning: funding can run out; apply early and never test first and ask later.",
          who: "Officers (funding pilot — check live status) and any Sailor timing a voucher request.",
          body: [
            "Process, as published: find the credential on your rating/designator page → confirm it carries the funding icon → submit the Navy Voucher Request with command approval (your CO or a command-designated approving official) to the Credentials Program Office before you test. The Navy's standing instruction, printed by CHIPS, is to contact the Credentials Program Office “before you start, take, participate in, or otherwise obligate yourself or the government in any Navy-funded credentialing program or exam.” Baseline eligibility conditions in program guidance include good standing — the card routes you to the site's current eligibility page rather than printing the list as permanent.",
            "Officers: an officer funding pilot (policy update effective Jan 1, 2020, announced by navy.mil) lets active and Reserve officers request funding for “Navy Bucks” credentials on their designator or collateral-duty pages, and for credentials earned and maintained before commissioning — first-come, first-served until pilot funding is exhausted.",
          ],
          flags: [
            "A 2020 pilot's current funding status cannot be confirmed from the press release. Officers are routed to Navy COOL to check live status rather than promised the pilot is open.",
            "No per-Sailor dollar cap is published. Any app text showing a Navy dollar cap would be invented — this center prints the finite-pool / first-come-first-served mechanism instead. The program has historically released funds quarterly so late-year Sailors aren't shut out.",
          ],
          links: [
            { label: "Navy COOL — search on their site", url: "https://www.cool.osd.mil/usn/" },
            {
              label: "Officer pilot announcement (navy.mil)",
              url: "https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/2236536/officers-see-new-opportunities-for-credentialing-via-funding-pilot/",
            },
          ],
          source: "Navy COOL / navy.mil officer funding pilot release (Jan 2020)",
        },
      ],
    },
    {
      key: "usmc",
      label: "Marine Corps COOL",
      tileSub: "Entries 8–9 · exam vouchers only, and the fail rule",
      intro:
        "The Corps' program is structurally thinner than the Army's, Navy's or Air Force's, and these cards say so plainly: exam vouchers only, from a limited pool, under MARADMIN 111/26.",
      entries: [
        {
          id: "usmc-cool",
          name: "Marine Corps COOL — what exists, honestly stated",
          summary:
            "Marine Corps COOL funds exam vouchers only. The Credentials Program Office holds a limited pool of certification/license exam voucher funds for enlisted personnel toward specifically identified credentials, first-come, first-served (MARADMIN 111/26). It does not fund training courses, study materials or prep programs — the Marine brings the readiness, the Corps pays for the test. Search on their site.",
          who: "Enlisted Marines, active and approved Reserve. Questions route to the installation Voluntary Education Office (MARADMIN 111/26's directed POC).",
          body: [
            "Per MARADMIN 111/26 (2026), Marine Corps COOL is “the official credentialing resource for all eligible Marines” and is separate from Tuition Assistance. Funded credentials are marked with the “COOL bucks” icon on the site. No dollar cap, quota or per-Marine limit is published — because the mechanism is a voucher pool, not an individual account. None is printed here.",
            "Eligibility, as published: active-duty and approved Reserve enlisted Marines; the credential must be appropriate to the Marine's PMOS or a collateral duty / out-of-billet MOS and validated by the Commanding Officer or Command Approving Official; the voucher must be requested and approved before the exam; and the Marine must have at least six months remaining on their enlistment when the credential is awarded.",
          ],
          flags: [
            "Officers: generally not funded by Marine Corps COOL. The one published exception, stated twice in MARADMIN 111/26 because it is “strictly enforced and will not be waived”: the Cyberspace Workforce funds officers and government civilians assigned to cyber-coded billets only. A Marine officer outside a cyber billet should expect mapping guidance, not money.",
            "Installation guidance notes the six-month rule has at times been waived to 60 days — printed here as a check-with-the-education-office item, never as a promise. Retiring Marines (20+ years) inside their final months are addressed in program guidance — route them to the Credentials Program Office rather than summarizing.",
          ],
          links: [
            { label: "Marine Corps COOL — search on their site", url: "https://www.cool.osd.mil/usmc/" },
            {
              label: "MARADMIN 111/26",
              url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4436959/increasing-awareness-on-marine-corps-credentialing-opportunities-online-cool/",
            },
          ],
          source: "MARADMIN 111/26 (2026)",
        },
        {
          id: "usmc-fail-rule",
          name: "Marine Corps — renewals and the fail rule",
          summary:
            "Funded Marines may also be funded for recertifications and maintenance fees under the same voucher mechanism. The Corps' fail rule is the most forgiving in this center and prints verbatim: “No requirement to pass (do not have to pay back if you fail); one-time opportunity per exam.”",
          who: "Marines renewing a credential or weighing whether to test before they feel fully ready.",
          body: [
            "One funded attempt is what the pool buys — a second attempt is not a second voucher. Contrast the Army and Air Force cards in this center, which carry recoup/reimbursement rules: the rule is per-branch and is never blended.",
          ],
          flags: [],
          links: [{ label: "Marine Corps COOL — search on their site", url: "https://www.cool.osd.mil/usmc/" }],
          source: "USMC installation education pages / Credentials Program Office",
        },
      ],
    },
    {
      key: "af",
      label: "Air Force & Space Force COOL",
      tileSub: "Entries 10–11 · a lifetime-cap, enlisted-only program in AFVEC",
      intro:
        "AF COOL is an enlisted, lifetime-cap program run through AFVEC. Guardians use the same program — there is no separate Space Force COOL.",
      entries: [
        {
          id: "af-cool",
          name: "AF COOL — an enlisted, lifetime-cap program run through AFVEC",
          summary:
            "AF COOL gives enlisted members of the Air Force and Space Force the opportunity to earn industry-recognized professional credentials and licenses, funded up to $4,500 per LIFETIME — not per year. Enlisted only, 5-skill level required, 120-day testing window, and a member who fails an AF COOL-funded exam is required to reimburse the cost.",
          who: "Enlisted Airmen and Guardians with a 5-level, on qualifying status: Regular Air Force and Space Force enlisted, activated Air Force Reserve members, and ANG members on Title 32 (502F) orders. ⚠ Drill-status-only Guard/Reserve members are not eligible — an orders status is the door. Officers are not in the program.",
          body: [
            "Eligibility requirements (MyAirForceBenefits fact sheet): possess a 5-skill level in your Primary AFSC; no Unfavorable Information File (UIF), not on a Control Roster, and current on your most recent fitness test at application; an AFVEC profile with an approved credentialing goal; supervisor approval; and the entire credential must be completed while on active-duty status. Testing window: 120 days.",
            "AF COOL pays exam and administrative fees, books/study materials within program limits, preparatory coursework, and recertification fees for credentials initially funded by AF COOL. It does not pay for failed-exam retakes, CEUs, or travel. Members may pursue one credential at a time per category (Primary AFSC / Leadership). Credential categories include Primary-AFSC credentials, leadership/management credentials for E-7–E-9, one non-AFSC credential, and one degree-associated credential, per program descriptions — the AF COOL handbook in AFVEC holds the current category rules.",
          ],
          flags: [
            "The $4,500 cap is a LIFETIME cap per Air and Space professional, as the current fact sheet publishes it — the number most often misstated as yearly in unofficial material.",
            "A $500 books-per-goal figure circulates in program-adjacent material; it was NOT read on the official fact sheet in the research pass and is deliberately NOT printed here.",
          ],
          links: [
            { label: "AF COOL via AFVEC", url: "https://afvec.us.af.mil/afvec/af-cool/welcome" },
            { label: "DoD COOL — search on their site", url: "https://www.cool.osd.mil" },
          ],
          source: "MyAirForceBenefits AF COOL fact sheet (DAFI 36-2670)",
        },
        {
          id: "sf-cool",
          name: "Space Force — routed through AF COOL, stated plainly",
          summary:
            "Guardians do not have a Space Force COOL portal. Enlisted Guardians participate in AF COOL on the same terms as Airmen — the fact sheet's program is written for “enlisted members of the Air Force and Space Force,” and its cap is expressed per “Air and Space professional.”",
          who: "Enlisted Guardians, especially PMA part-time members checking eligibility.",
          body: [],
          flags: [
            "Part-time Guardians under the Space Force Personnel Management Act should check their orders status against the AF COOL card's eligibility — the program's door is qualifying active status, and PMA part-time status is a verify-with-AFVEC case rather than an asserted eligibility either way.",
          ],
          links: [{ label: "AF COOL via AFVEC", url: "https://afvec.us.af.mil/afvec/af-cool/welcome" }],
          source: "MyAirForceBenefits AF COOL fact sheet",
        },
      ],
    },
    {
      key: "cg",
      label: "Coast Guard COOL & VCP",
      tileSub: "Entries 12–13 · a reimbursement program run by ETQC",
      intro:
        "Structurally different from every other branch here: the Coast Guard program reimburses — and only after ETQC approval in MyCG Ed, before you pay. The per-FY limit conflict between two official sources prints as a conflict.",
      entries: [
        {
          id: "cg-vcp",
          name: "CG COOL and the VCP — a reimbursement program run by ETQC",
          summary:
            "The Coast Guard's funding program is the Voluntary Credentialing Program (VCP) — Credentialing Assistance under COMDTINST 1540.10, administered by ETQC. It is a reimbursement program: the member pays up front only after ETQC approval in MyCG Ed. The FAQ is blunt: “Members must receive approval from ETQC prior to paying for any type of fees,” and unapproved spending is not reimbursed.",
          who: "Enlisted Coast Guard members, active duty and SELRES, in good standing. Start with your ESO, get ETQC approval in MyCG Ed, then pay.",
          body: [
            "What it pays for (ACN 050/19): reimbursement of certification fees, licensing exam fees, maintenance fees, renewals, and membership dues (when applicable) for credentials listed on CG COOL directly related to the member's rating or service experience. Eligibility (FAQ + instruction): enlisted personnel — active duty and enlisted SELRES — in good standing; SELRES members must be drilling reservists with satisfactory participation (a points statement is uploaded in MyCG Ed). Baseline criteria include compliance with weight/body-fat standards, an Enlisted Employee Review marked “Ready” or “Not Ready” (advancement recommendation), and at least 6 months remaining on the service obligation; misconduct/discharge-pending statuses disqualify. Requests are reviewed/approved by the Education Services Officer (ESO), then forwarded to ETQC for final authorization.",
          ],
          bullets: [
            { title: "Not job-prerequisite credentials", text: "CA may not pay for a credential that is a prerequisite for appointment or for the member's specific job — mandatory credentials are the service's bill, not VCP's." },
            { title: "Not preparation", text: "CA does not cover preparation materials, training courses or study guides (the FAQ routes prep funding options through the CG COOL site/ETQC portal instead)." },
          ],
          flags: [
            "Caps — two official sources, two answers; the conflict prints, not a number. The ETQC FAQ (Apr 2021): “Are there any lifetime credit maximums or annual caps? No. However, CA is funded on a first come first served basis and only two per fiscal year.” The VCP promulgation bulletin (ACN 050/19, Jan 2020): “Eligible Service members may only apply for one credential per FY.” No dollar cap appears in either official source; the FAQ is later and program-run, but both print here with dates — ask ETQC for the current rule. Funding is first-come, first-served and suspends when the FY allocation is reached.",
            "Third-party training vendors advertise a “$4,500 per fiscal year” Coast Guard CA figure; no official CG source read in the research pass publishes that number (it appears to be borrowed from the AF COOL lifetime cap and TA figures). It is excluded from this center entirely.",
          ],
          links: [
            { label: "CG COOL — search on their site", url: "https://www.cool.osd.mil/uscg/" },
            { label: "ETQC VCP FAQ (FORCECOM)", url: "https://forcecom.uscg.mil/Portals/3/VCP%20FAQs_20%20Apr%202021_1.pdf" },
          ],
          source: "COMDTINST 1540.10 / ACN 050/19 / ETQC VCP FAQ (Apr 2021)",
        },
        {
          id: "cg-renewals",
          name: "Coast Guard — renewals are a first-class use",
          summary:
            "The CG program expressly funds the renewal/membership/maintenance fees of previously earned credentials — a previously earned credential does not have to have been CG-funded to have its upkeep reimbursed. Each renewal counts against the per-FY credential limit (the flagged conflict on the VCP card), so members holding several credentials should sequence renewals with their ESO.",
          who: "Enlisted members maintaining civilian credentials across a career.",
          body: [
            "Per the ETQC FAQ: “Yes. ETQC will fund the renewal/membership fees as long as all eligibility criteria are met IAW COMDTINST 1540.10.”",
          ],
          flags: [],
          links: [{ label: "ETQC VCP FAQ (FORCECOM)", url: "https://forcecom.uscg.mil/Portals/3/VCP%20FAQs_20%20Apr%202021_1.pdf" }],
          source: "ETQC VCP FAQ (Apr 2021)",
        },
      ],
    },
    {
      key: "jst",
      label: "Your JST (and CCAF)",
      tileSub: "Entries 14–15 · the transcript you already own — and its limits",
      intro:
        "The Joint Services Transcript covers Army, Marine Corps, Navy and Coast Guard only. Airmen and Guardians use the CCAF transcript — that exception prints on the first card's first screen, not in a footnote.",
      entries: [
        {
          id: "jst-main",
          name: "Your JST — the transcript you already own (AF/SF: CCAF instead)",
          summary:
            "The Joint Services Transcript (JST) at jst.doded.mil is the official, DoD-operated transcript that documents your military training, occupational experience and education in academic language, with American Council on Education (ACE) college-credit recommendations attached. ⚠ Air Force / Space Force exception: Airmen and Guardians are NOT in JST — their equivalent record is the Community College of the Air Force (CCAF) transcript, requested through CCAF/AFVEC.",
          who: "All enlisted, officer and warrant-officer members and veterans of the Army, Marine Corps, Navy and Coast Guard — all components. Order it before separation; access is easier with a CAC, though veterans retain JST access.",
          body: [
            "Register at jst.doded.mil, review your record, and send official transcripts free of charge to schools from the site's Official Transcript Request page; corrections go back through your service's personnel system, not the JST help desk alone. JST draws its data from the four services' personnel systems; it replaced the old AARTS, SMART and Coast Guard Institute transcripts.",
            "How the ACE recommendations work: ACE faculty evaluators review military courses and occupations and publish credit recommendations (semester hours, level, subject) in the ACE Military Guide; the JST prints those recommendations next to your actual completed training. A recommendation is not credit: the college or university you send the transcript to decides what it will award, and awarded credit is routinely less than the ACE recommendation (an installation education page states it plainly: “Actual credit awarded may be less than ACE recommends due to individual school policies”). Before you build a degree plan around a JST line, confirm acceptance with the school. Scores from DANTES-funded CLEP/DSST exams also post to your JST/CCAF record.",
          ],
          flags: [
            "The Air Force / Space Force exception prints here, in the entry's first screen: any text that tells an Airman to “pull your JST” is wrong — the entry branches by service.",
          ],
          links: [{ label: "Joint Services Transcript (JST)", url: "https://jst.doded.mil" }],
          source: "JST (jst.doded.mil) / ACE Military Guide",
        },
        {
          id: "jst-limits",
          name: "What the JST cannot do",
          summary:
            "The JST documents training and occupation — not degrees earned on your own, not credentials, and not future credit. If a course is missing, the fix is a personnel-record correction through your service; if a school declines ACE-recommended credit, there is no appeal to ACE or DoD — the school's academic policy governs.",
          who: "Anyone building a degree plan or a promotion packet around transcript credit.",
          body: [
            "The gap between “ACE recommends 60 hours” and “my college awarded 12” is the single most common JST disappointment. The JST also doesn't argue your case: it is a record, not an advocate.",
          ],
          flags: [],
          links: [{ label: "Joint Services Transcript (JST)", url: "https://jst.doded.mil" }],
          source: "JST (jst.doded.mil)",
        },
      ],
    },
    {
      key: "dantes-usmap",
      label: "DANTES & USMAP",
      tileSub: "Entries 16–17 · free credit-by-exam, and the DOL apprenticeship",
      intro:
        "Two shared programs: DANTES funds your first CLEP/DSST attempt on every title, and USMAP turns the duty hours you're already working into a Department of Labor journeyman certificate.",
      entries: [
        {
          id: "dantes",
          name: "DANTES funds your first attempt — every title, both programs",
          summary:
            "The Defense Activity for Non-Traditional Education Support (DANTES) funds credit-by-examination for actively serving members: upfront funding of CLEP and DSST test fees for the FIRST attempt on all exam titles. Retests are not funded — a retake waits three months and is self-paid.",
          who: "Actively serving members (all components, valid CAC required) building degree credit cheaply and early — ideally before choosing electives with TA. Veterans are not DANTES-funded; their route is VA reimbursement (next tile).",
          body: [
            "CLEP (College Board): at DANTES-funded test centers the administration fee is also covered; identify as a DANTES candidate at registration and the exam fee — and the remote-proctoring fee — shows $0.00. DSST (Prometric): identically funded for the first attempt; free test-prep materials are published through DANTES/education centers.",
            "Eligibility (DANTES pages): “All actively serving members of the U.S. Military Services, including the National Guard, Reserve components, Coast Guard, and Coast Guard Reserve” — with a valid CAC required to establish eligibility. Certain categories beyond uniformed members appear on DANTES' eligibility chart (e.g., some Air Force civilian employees for CLEP at on-base/fully funded centers; Coast Guard spouses appear in DSST eligibility material) — check the DANTES Eligibility Chart rather than treating any partial list as complete.",
            "The standing DANTES caution, in this entry's first screen as the pack directs: talk to an education counselor and confirm your school accepts the specific exam for your degree plan before you test — a passed exam your college won't apply is a saved fee and a wasted quarter. Passing scores and their ACE credit recommendations post to your JST/CCAF transcript.",
          ],
          flags: [],
          links: [
            { label: "DANTES CLEP", url: "https://www.dantes.mil/clep/" },
            { label: "DANTES DSST", url: "https://www.dantes.mil/dsst/" },
          ],
          source: "DANTES (dantes.mil) CLEP & DSST pages; College Board",
        },
        {
          id: "usmap",
          name: "USMAP — a Department of Labor journeyman certificate for the job you're already doing",
          summary:
            "The United Services Military Apprenticeship Program (USMAP) lets members log the on-the-job hours of their regular military duties against a registered civilian apprenticeship trade and receive the U.S. Department of Labor's Certificate of Completion of Apprenticeship — which never expires, never needs renewal, and costs nothing. Army, Navy, Marine Corps and Coast Guard only — NOT Air Force / Space Force.",
          who: "Active-duty and Full Time Support / TAR enlisted members whose occupation maps to a USMAP trade. Enroll early; hours only count once you're registered.",
          body: [
            "Trades run roughly 2,000–6,200 hours depending on the trade; no off-duty hours are required — the hours are your duty hours, documented. Members typically need at least 12 months remaining on their contract to enroll (installation guidance; verify on the site for your trade). Enrollment, trade lookup by military occupation, hour logging and progress reports all run through usmap.osd.mil; the program office sits at NETC Pensacola.",
            "USMAP is the third leg of “credit for what you already know” alongside COOL and the JST — but it produces a DOL certificate, not an industry exam credential and not college credit. The three are complementary.",
          ],
          flags: [
            "USMAP began as a Navy program (1977), merged with the Marine Corps program in 1999, and the Coast Guard joined shortly after; current USMAP FAQ and DOL sources include the Army. The Air Force and Space Force are not USMAP services — do not list them.",
          ],
          links: [
            { label: "USMAP", url: "https://usmap.osd.mil" },
            { label: "DOL apprenticeship.gov USMAP case study", url: "https://www.apprenticeship.gov/case-studies/united-services-military-apprenticeship-program" },
          ],
          source: "USMAP (usmap.osd.mil) / U.S. Department of Labor",
        },
      ],
    },
    {
      key: "after-service",
      label: "After Service & Safety",
      tileSub: "Entries 18–19 · the GI Bill test route, and the certificate-mill warning",
      intro:
        "When COOL doesn't apply — you're a veteran, the credential isn't on your service's funded list, or you failed an attempt a service won't re-fund — the GI Bill route remains. And the warning card: worthless “certifications” are marketed hard at transitioning members.",
      entries: [
        {
          id: "gi-bill-tests",
          name: "The GI Bill route — VA reimburses approved test fees (up to $2,000 per test)",
          summary:
            "The GI Bill can reimburse licensing and certification test fees for VA-approved tests: up to $2,000 per test, covering required test fees (registration, specialized-test and administrative/proctoring fees), pass or fail, claimed after the test with VA Form 22-0803 plus receipt and test results.",
          who: "Veterans and members using GI Bill entitlement for a test COOL won't fund (Post-9/11 GI Bill, MGIB-AD, MGIB-SR, DEA).",
          body: [
            "VA charges the payment against your entitlement (for Chapter 33, one month per the published dollar band, reset annually — check the current VA rates page rather than treating any band as permanent). VA does not reimburse the fee for the license/certification document itself, pre-tests, expedited-score fees, or other optional costs. Check the test is VA-approved before testing, via VA's page and its approved-test search.",
          ],
          flags: [],
          links: [
            { label: "VA licensing & certification tests", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/licensing-and-certification-tests/" },
            { label: "VA Form 22-0803", url: "https://www.vba.va.gov/pubs/forms/VBA-22-0803-ARE.pdf" },
          ],
          source: "VA (va.gov) licensing & certification tests page",
        },
        {
          id: "cert-mills",
          name: "Certificate mills — the warning, routed to official checks",
          summary:
            "The market aimed at transitioning members includes sellers of worthless “certifications”: unaccredited bodies, guaranteed-pass packages, and credentials no employer or licensing board recognizes. This center carries no invented blacklist — it teaches the three official checks instead.",
          who: "Anyone being marketed a credential — especially in the transition window.",
          body: [],
          steps: [
            "Is it on your service's COOL portal? COOL lists credentials from recognized credentialing agencies with published eligibility/exam requirements — a credential no COOL portal will list is a credential to interrogate before paying for.",
            "Is the test VA-approved? VA's approved-test search is a second, independent screen for GI Bill money.",
            "Is it the actual license? State licenses come from the state licensing board — a private “national certification” that resembles a license is not one, and the COOL credential page for your occupation names the real licensing body.",
          ],
          flags: [
            "The rule, printed plainly: if a seller found you before a COOL portal, a licensing board, or VA did — stop and check all three.",
          ],
          links: [
            { label: "DoD COOL — search on their site", url: "https://www.cool.osd.mil" },
            { label: "VA licensing & certification tests", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/licensing-and-certification-tests/" },
          ],
          source: "DoD COOL / VA approved-test search / state licensing boards",
        },
      ],
    },
  ],
};
