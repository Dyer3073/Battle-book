// Connect with a Recruiter — transcribed from the researched pack
// (~/workspace/military-app/recruiters/recruiters.md, researched
// Nov 9, 2026). The pack is the content source of truth: official
// recruiting sites only, every number and channel exactly as the
// branch's own site (or USAGov's official table) publishes it,
// conflicts printed as ⚠ flags — never blended, never resolved from
// memory. Every URL below is the pack's build-ready link table,
// verbatim — no URL was constructed, and no locator deep-link ships:
// every locator is a homepage route labeled "search on their site"
// because every locator is JavaScript-driven and no ZIP pattern was
// verified (pack register F-1; a live-browser ZIP pass remains the
// standing pre-launch follow-up).
//
// BINDING EXCLUSIONS honored throughout (pack register): no built-in
// ZIP search anywhere; no staging, legacy-404, third-party, or
// unverified locator URLs; no per-person recruiter names/phones; no
// Army text number (none exists on GoArmy); no chat hours for Army,
// Guard, or Air Force (unverified); Marines service-option labels
// not printed (JavaScript-rendered, unseen); no Air Force / Space
// Force application field lists (F-10); the Navy personal-step
// categories carry their F-9 basis flag; no verbatim DD Form 4
// quotation (F-12 — the principle ships attributed, quotes withheld
// pending re-verification against the official PDF); no assertion
// about leaving DEP in either direction; no MEPS what-to-bring list
// (the official fact sheet was not located); nothing framed as
// legal advice.
//
// This area lives ONLY in the future-member track (Start Here). It
// is not in the member Library and no recruiter content is
// duplicated into the member or spouse tracks.

export type RecruiterLink = { label: string; url: string };
export type RecruiterChannel = { label: string; text: string };
export type RecruiterNote = { heading: string; body: string };

export type RecruiterEntry = {
  id: string;
  name: string;
  /** Search summary — scope only; numbers and channels live on the card. */
  summary: string;
  badge: string;
  /** THE DOOR — the one official route, as the pack verdicts it. */
  door: string;
  channels: RecruiterChannel[];
  /** What the official form asks, category level only, where the pack verified it. */
  asks?: string;
  notes: RecruiterNote[];
  flags: string[];
  links: RecruiterLink[];
  /** Short source line for the Binder trust stamp. */
  source: string;
};

export type RecruiterTile = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: RecruiterEntry[];
};

/** The door note, printed at the top of the section (pack standing rule). */
export const RECRUITERS_DOOR_NOTE =
  "Battle Book collects nothing. Every form linked from this section lives on the branch's own official site — anything you type into it goes to that branch, never to this app. One exception to know about before you start: on the Navy's form, what you submit also goes to the Navy's third-party recruiter partners, per that form's own consent text. And several of these forms print on themselves that submitting implies no obligation and is not a commitment — the Army, Navy, and Coast Guard forms all say so. This section's only job is to hand you the right official door, labeled by path: enlisted, officer, or Reserve.";

export const RECRUITER_TILES: RecruiterTile[] = [
  {
    key: "army",
    label: "Army",
    tileSub: "Active, officer & Reserve — one GoArmy door",
    intro:
      "The Army runs one contact system for Active, officer, and Reserve interest: the GoArmy form and the number GoArmy itself publishes. There is no separate officer or Reserve door — the two cards after Active explain how the same door separates the paths.",
    entries: [
      {
        id: "army-active",
        name: "Army — Active",
        summary:
          "The GoArmy Request Information form is the Army's door — the phone and chat channels goarmy.com itself publishes, and what the form asks, at category level.",
        badge: "THE DOOR: GOARMY REQUEST INFORMATION FORM",
        door: "The Request Information form on goarmy.com is the Army's official first contact. The same “Tell us about yourself” form is embedded on the GoArmy homepage, on its “Working With a Recruiter” page, and at the foot of nearly every GoArmy content page, and GoArmy presents reaching out as carrying no obligation to join. There is no standalone ZIP station locator on the current site — the ZIP is a field inside this form, and the form does the routing.",
        channels: [
          {
            label: "Phone",
            text: "1-888-550-ARMY (2769) — the number goarmy.com itself publishes, on the form page and across the site.",
          },
          {
            label: "Chat",
            text: "“Army Answers,” via GoArmy's dedicated chat page (linked below). No chat hours are printed here — the chat widget's hours could not be verified from the official pages.",
          },
          {
            label: "Text",
            text: "None. No text number or “text us” channel appears on any GoArmy page — if you see an Army text number somewhere else, it did not come from goarmy.com.",
          },
        ],
        asks: "At category level, the form asks for: first and last name; birth date; email; phone; ZIP code; two “responses that best describe you” routing/profile selector sections (one optional, one required); ROTC school interest (“select undecided” if unsure); and an optional referral block. It carries a Privacy Act notice: disclosure is voluntary, and the information is used strictly for recruiting purposes.",
        notes: [],
        flags: [
          "The option labels inside the form's two selector sections are JavaScript-rendered and were not exposed in the official pages as read — so this card lists categories only and does not invent the options. One routing option (Officership) is confirmed in the site's own text; see the Army — Officer card.",
        ],
        links: [
          { label: "Contact an Army Recruiter", url: "https://www.goarmy.com/info?iom=DDY5" },
          { label: "Working With a Recruiter", url: "https://www.goarmy.com/how-to-join/steps/recruiter" },
          { label: "Army Answers (chat)", url: "https://www.goarmy.com/contact-us/chat" },
        ],
        source: "goarmy.com — Request Information form and recruiter pages",
      },
      {
        id: "army-officer",
        name: "Army — Officer",
        summary:
          "No separate Army officer form, phone, or locator exists — on the GoArmy form, select an interest in Officership to be connected to an ROTC Recruiting Operations Officer (ROO).",
        badge: "SAME FORM — OFFICERSHIP SELECTION INSIDE IT",
        door: "There is no separate officer contact form, phone, or locator on any official Army page. Officer accessions run through the same GoArmy form as enlisted interest, separated by an interest selection inside it. In GoArmy's own words, from its recruiter FAQ: ROTC Recruiters, or Recruiting Operations Officers (ROOs), can answer questions about joining as an officer through ROTC — contact the Army through the form and select an interest in Officership to be connected to a ROO.",
        channels: [
          {
            label: "Phone",
            text: "The same number as Active: 1-888-550-ARMY (2769), published by goarmy.com. No separate officer number exists.",
          },
        ],
        notes: [
          {
            heading: "THE COMMISSIONING ROUTES, AS GOARMY PRESENTS THEM",
            body: "ROTC, West Point, OCS (the Army's 12-week intensive program, for enlisted Soldiers and civilians with college degrees), Green to Gold (which directs serving Soldiers to talk to an ROTC recruiter), Warrant Officers (a separate path from commissioned officers), and Direct Commission. The official education split: enlisting takes a high school diploma, GED, or a plan to get one; an officer needs a bachelor's degree by the time they are commissioned.",
          },
        ],
        flags: [],
        links: [
          { label: "Contact an Army Recruiter", url: "https://www.goarmy.com/info?iom=DDY5" },
          { label: "Army Officers / ROTC", url: "https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/rotc" },
        ],
        source: "goarmy.com — “Working With a Recruiter” FAQ and ROTC page",
      },
      {
        id: "army-reserve",
        name: "Army — Reserve",
        summary:
          "The Army Reserve uses the same GoArmy door — same form, same published number — with the Army Reserve page as the on-ramp.",
        badge: "SAME GOARMY DOOR AS ACTIVE",
        door: "There is no separate Army Reserve form and no separate Reserve locator. The Army Reserve page on goarmy.com embeds the identical Request Information form and publishes the identical number; the goarmyreserve.com address serves the same page. Start on the Reserve page for the part-time picture — the page states service of at least one weekend a month and two weeks a year, under the eight-year initial contract (with the final two years available in the IRR, as the page states it) — then use the same form.",
        channels: [
          {
            label: "Phone",
            text: "1-888-550-ARMY (2769) — goarmy.com's published number, the same as Active.",
          },
        ],
        notes: [
          {
            heading: "A SECOND NUMBER, LABELED AS ITS OWNER PRINTS IT",
            body: "Army Recruiting Command (USAREC) battalion pages print a component split on a different number: 1-800-USA-ARMY ext. 181 for Army interest and ext. 182 for Army Reserve. That is USAREC's number, printed here next to — never instead of — goarmy.com's published number above.",
          },
        ],
        flags: [],
        links: [
          { label: "Army Reserve", url: "https://www.goarmy.com/army-reserve" },
          { label: "Contact an Army Recruiter", url: "https://www.goarmy.com/info?iom=DDY5" },
        ],
        source: "goarmy.com — Army Reserve page; USAREC battalion page for the extension split",
      },
    ],
  },
  {
    key: "guard",
    label: "Army National Guard",
    tileSub: "ZIP locator + Get Started form · 1-800-GO-GUARD",
    intro:
      "The Guard is state-based: 54 Guard organizations across all 50 states, Washington D.C., Guam, Puerto Rico, and the U.S. Virgin Islands, as nationalguard.com presents them — and you will talk to a recruiter from your state.",
    entries: [
      {
        id: "army-national-guard",
        name: "Army National Guard",
        summary:
          "nationalguard.com: a ZIP-only recruiter locator (search on their site) and the Get Started form that connects you to a local Guard recruiter — plus the state-run officer route.",
        badge: "LOCATOR + GET STARTED FORM — STATE RECRUITERS",
        door: "Two official routes, and they do different jobs. The Find a Recruiter page is a ZIP-only locator — in the page's own wording, “Enter your zip code to locate a Guard recruiter near you — no forms or commitment required.” The search runs on their site (use the link below); there is no ZIP box in this app. The recruiter-connection form is Get Started: submit it and, in the site's words, you will receive your local recruiter's contact information — there's no obligation to join.",
        channels: [
          {
            label: "Phone",
            text: "1-800-GO-GUARD (1-800-464-8273) — published on the recruiter page and in state-page footers.",
          },
          {
            label: "Chat",
            text: "Available from the recruiter page — the page offers a Guard advisor by chat for anyone not ready to speak with a recruiter directly (“No recruiter, no commitment, no pressure”). The chat has no URL of its own and no published hours, so it is not linked separately here.",
          },
        ],
        asks: "The Get Started form asks, under “Basic Information”: first name; last name; date of birth; email; phone; ZIP code; plus an SMS-consent checkbox — agreeing means recurring text messages from a Guard recruiter (up to 4 per month; reply STOP to opt out; consent is not a condition of enlistment). It carries the same Privacy Act notice as the Army form: disclosure voluntary, used strictly for recruiting purposes.",
        notes: [
          {
            heading: "THE WRONG DOOR, NAMED SO YOU DON'T TAKE IT",
            body: "nationalguard.com also has a general Contact Us form — it reaches a call-center representative, not a recruiter. For a recruiter, Get Started is the door.",
          },
          {
            heading: "OFFICER — STATE-RUN",
            body: "Guard officer recruiting runs through your state: find your state's Officer Strength Manager on your state page (each state page carries that state's armories, recruiter stations, and state education benefits, alongside the same ZIP prompt and Get Started form). There is no national Guard officer number to print — the contact is your state's.",
          },
        ],
        flags: [],
        links: [
          { label: "Find a Guard Recruiter — search on their site", url: "https://www.nationalguard.com/recruiter" },
          { label: "Get Started (Guard)", url: "https://nationalguard.com/get-started" },
        ],
        source: "nationalguard.com — recruiter page and Get Started form",
      },
    ],
  },
  {
    key: "marines",
    label: "Marines",
    tileSub: "One form — enlisted, officer, Active & Reserve",
    intro:
      "Marine Corps Recruiting Command runs one door for everything: a single Request Information form covers enlisted and officer, Active and Reserve. Which recruiter answers depends on the path you signal inside the form.",
    entries: [
      {
        id: "marines-one-form",
        name: "Marines — Enlisted, Officer & Reserve",
        summary:
          "One Marines Request Information form runs everything: it routes enlisted interest to a local recruiting station (RSS) and officer interest to an Officer Selection Officer (OSO) — phone and text channels included.",
        badge: "ONE FORM RUNS EVERYTHING",
        door: "The Request Information form on marines.com is the single Marine Corps door. Its own confirmation pages state the routing: say you want to learn more about becoming an enlisted Marine and you are connected with a Marine Recruiter in your area — your local RSS (Recruiting Substation); officer interest is answered by an Officer Selection Officer at the local OSS (Officer Selection Station). The form prints its own notice: “This form does not imply an obligation to serve.” There is no standalone station locator — location routing happens through the form's ZIP, so the marines.com homepage link below is labeled as what it is: search on their site.",
        channels: [
          {
            label: "Phone",
            text: "1-800-MARINES (627-4637) — published by Marine Corps Recruiting Command on its official page.",
          },
          {
            label: "Text",
            text: "Text MARINE (627463) to chat with Marine Corps Recruiting — 7a–11p ET, 7 days a week, as printed on the form itself.",
          },
          {
            label: "Chat",
            text: "None verified. No web-chat channel appears on the official pages — the verified channels are the form, the phone, and the text line.",
          },
        ],
        asks: "At category level, the form asks for: general information, all required (first name, last name, email, ZIP code, phone); an age screen (birth month and birth year — no full date of birth); education (education level, plus a school lookup by city/state — the form notes that service options are determined by the amount and type of education obtained); at least one service option; and routing add-ons you select if they apply — Prior Service Marine, the Musician Enlistment Option (MEOP), and NROTC.",
        notes: [
          {
            heading: "OFFICER — A DISTINCT PAGE AND A DISTINCT OFFICER, THE SAME FORM",
            body: "The Marine officer page is its own page, and the recruiter is a distinct person: an Officer Selection Officer (OSO), specially trained to work exclusively with aspiring officers, across the four commissioning paths (NROTC Marine Option, Platoon Leaders Class, Officer Candidate Course, U.S. Naval Academy). But the page's “Talk to an OSO” button lands on the same Request Information form — there is no separate officer form, and this app prints no per-person OSO names or numbers: submit the form with officer interest and an OSO is who answers.",
          },
          {
            heading: "RESERVE — SHARED FLOW, NO DISTINCT ROUTE",
            body: "There is no separate Marine Corps Reserve contact route. The Reserve has its own content page (linked below — one weekend a month / two weeks a year, with the enlistment terms the page states), but it carries no form of its own: the single form covers Active and Reserve, with the component chosen inside it. One command runs both — Marine Corps Recruiting Command states it recruits for the active and reserve components, both officer and enlisted.",
          },
        ],
        flags: [
          "The form requires selecting at least one service option, but the option labels themselves are JavaScript-rendered and were not visible in the official pages as read — so this card does not print the Active/Reserve option wording. You will see the exact options on the form itself.",
        ],
        links: [
          { label: "Contact a Marine Recruiter", url: "https://www.marines.com/bin/contact-a-recruiter" },
          { label: "Marine Officer (OSO)", url: "https://www.marines.com/become/marine-officer" },
          { label: "Marine Corps Reserve", url: "https://www.marines.com/become/marine-corps-reserve" },
          { label: "Find a Recruiting Station — search on their site", url: "http://www.marines.com/" },
        ],
        source: "marines.com — Request Information form; Marine Corps Recruiting Command",
      },
    ],
  },
  {
    key: "navy",
    label: "Navy",
    tileSub: "Contact hub + /start form · chat with published hours",
    intro:
      "The Navy's door is its contact hub and the /start form behind it — one form for Active and Reserve, with a distinct kind of recruiter waiting on the officer path.",
    entries: [
      {
        id: "navy-one-door",
        name: "Navy — Active, Officer & Reserve",
        summary:
          "navy.com's contact hub and /start form: the published phone, chat (with its hours and rules), and text channels; the officer recruiter to ask for by name; and the one distinct prior-service Reserve channel, labeled as such.",
        badge: "ONE FORM — ACTIVE & RESERVE",
        door: "Start at navy.com's contact hub or go straight to the /start form — the form official Navy pages themselves send people to. It opens with a “Select a Career” step, a single picker mixing enlisted ratings and officer roles in one list, before the personal-information step. The form prints its own notice: it is NOT a commitment to join the Navy nor an enlistment. There is no standalone navy.com locator URL to ship — the recruiter lookup happens inside this flow, on navy.com, so the hub and form links below carry the “search on their site” label.",
        channels: [
          {
            label: "Phone",
            text: "1-800-USA-NAVY (1-800-872-6289) — published on the contact hub and across navy.com.",
          },
          {
            label: "Live chat",
            text: "Via the contact hub, with published hours: Monday–Friday 8:00am–10:00pm CST, Saturday–Sunday 10:00am–10:00pm CST, closed on federal holidays. The published rules: chat users must be at least 17; the chat is for general Navy recruiting inquiries only; and never send sensitive personal information (Social Security numbers, medical or financial information) by chat — a recruiter can contact you by phone for those topics.",
          },
          {
            label: "Text",
            text: "Text NAVYBONUS to 764764 for information — labeled exactly as navy.com presents it: a bonus-information line. It is the only text channel navy.com publishes on these pages, not a general “text a recruiter” service.",
          },
          {
            label: "Email subscribe — not a recruiter form",
            text: "The email signup on these pages (13 and older) is a newsletter subscription, not a way to reach a recruiter. The form above is the recruiter door.",
          },
        ],
        asks: "The career picker is verified live. The personal-information step asks, at category level: a contact block (name, email, street address, city, state, ZIP, telephone); a texting-consent checkbox — by checking it you agree to SMS messages from the United States Navy and its third-party recruiter partners, under the Navy SMS Terms; and background selectors (military experience, current education level). A Privacy Act notice states disclosure is voluntary and information is used strictly for recruiting purposes.",
        notes: [
          {
            heading: "OFFICER — SAME DOOR, DISTINCT RECRUITER",
            body: "There is no officer-only form, phone, or chat. But the person is distinct: the officer and OCS pages frame the first step as speaking with a Navy Officer Recruiter, and the Navy's own training command tells applicants to find their local Navy Recruiting Office and request an Officer Programs Recruiter — for medical officer programs, specifically ask for a Medical Recruiter. Use the same form and hub, and ask for the officer recruiter by that name.",
          },
          {
            heading: "RESERVE — SAME FORM, LABELED ON-RAMPS",
            body: "No distinct Reserve form exists. The Reserve requirements page's own call-to-action resolves to the same /start form, and the Navy Reserve's command site points joiners to navy.com's Reserve landing (both linked below) — treat them as on-ramps to the one door, not separate doors.",
          },
          {
            heading: "PRIOR SERVICE AFFILIATING WITH THE RESERVE — ONE DISTINCT CHANNEL",
            body: "For prior-service affiliation only — not the general Reserve door: official Navy pages for Reserve affiliation also list the Navy Recruiting Reserve Command (NRRC) “E-Talent” desk, by email at Nrrc_etalent@us.navy.mil or by phone at 901-300-0423, including before a separation package is submitted. If you are not affiliating from prior service, the /start form is your door.",
          },
        ],
        flags: [
          "Verification basis, stated plainly: the /start form's personal-information step is JavaScript-rendered. The career picker above was verified live; the personal-step categories rest on navy.com's own indexed crawl of the page — category-level only, exactly as printed here.",
        ],
        links: [
          { label: "Contact America's Navy Recruiting", url: "https://www.navy.com/contact-us" },
          { label: "Navy Request Information", url: "https://www.navy.com/start" },
          { label: "Navy Officer (OCS)", url: "https://www.navy.com/joining/ways-to-join/officer/officer-candidate-school" },
          { label: "Navy Reserve", url: "https://www.navy.com/joining/ways-to-join/reserve/navy-reserve-requirements" },
          { label: "About the Navy Reserve", url: "https://navy.com/forward" },
        ],
        source: "navy.com — contact hub and /start form; Officer Training Command Newport",
      },
    ],
  },
  {
    key: "airforce",
    label: "Air Force, Reserve & Guard",
    tileSub: "One directory · Reserve & ANG number conflicts printed",
    intro:
      "The Department of the Air Force now runs one platform: afreserve.com and goang.com both resolve into airforce.com. Active, Reserve, and Air National Guard all route through the same find-a-recruiter flow — but the Reserve and the Guard keep their own published numbers, and where the numbers conflict, both print.",
    entries: [
      {
        id: "air-force-active",
        name: "Air Force — Active",
        summary:
          "airforce.com's find-a-recruiter directory: search by ZIP and Area of Interest on their site, and it returns named recruiters by type — including the Line Officer Recruiter.",
        badge: "A REAL DIRECTORY — NAMED RECRUITERS BY TYPE",
        door: "The Air Force's door is its find-a-recruiter directory, linked below as a search on their site: on the page's own design you search by ZIP code plus an Area of Interest, and it returns named individual recruiters — with office address, phone, and email — organized by inquiry type: Enlisted & Prior Service recruiting inquiries, Healthcare Professions Recruiter, Line Officer Recruiter, and Active Air Force Recruiter/MEPS. The Apply page frames the same fork in its three steps: select your preferred service component (Active Duty / Air National Guard / Air Force Reserve), submit the online application, then contact a recruiter at your local recruitment office.",
        channels: [
          {
            label: "Phone",
            text: "1-800-423-USAF (1-800-423-8723) — in the footer of every airforce.com page, and corroborated by USAGov's official table.",
          },
        ],
        notes: [
          {
            heading: "OFFICER — A RECRUITER TYPE, NOT A SEPARATE LOCATOR",
            body: "The officer split lives inside the same directory: Line Officer Recruiter and Healthcare Professions Recruiter are distinct listing categories from Enlisted & Prior Service. There is no separate officer locator — pick the officer Area of Interest in the one search. Officer commissioning routes (ROTC, the Academy, OTS) are presented as their own programs on airforce.com.",
          },
        ],
        flags: [
          "Chat: an on-site “Chat Live” path to an Air Force Recruiting Advisor has been described by a third party, but no chat channel or hours could be verified on the official pages as read — so no chat hours are printed here. ⚠ Third-party-described only.",
          "No field list for the Air Force application form is printed: the Apply flow hands off to an application whose fields could not be verified from the official pages as read.",
        ],
        links: [
          { label: "Find an Air Force Recruiter — search on their site", url: "https://www.airforce.com/find-a-recruiter" },
          { label: "Apply (Air Force)", url: "https://www.airforce.com/apply-now" },
        ],
        source: "airforce.com — find-a-recruiter directory and Apply page",
      },
      {
        id: "air-force-reserve",
        name: "Air Force Reserve",
        summary:
          "afreserve.com now resolves into airforce.com — same find-a-recruiter flow — with the Reserve's own published number and the live footer number both printed, because they conflict.",
        badge: "SAME AF FLOW — ITS OWN NUMBER SURVIVES",
        door: "There is no longer a visibly separate Reserve website: afreserve.com resolves into airforce.com's Total Force site, and there is no separate Reserve recruiter locator — the route is the Air Force find-a-recruiter flow (previous card), with the Reserve reached as a component/interest selection. The Reserve's own landing presents part-time and full-time service in the location of your choice.",
        channels: [
          {
            label: "Phone — conflict printed, never blended",
            text: "The Reserve's published number is 1-800-257-1212 — USAGov's official recruiter table lists it for the Air Force Reserve, and Air Force Recruiting Service publications print it with afreserve.com. But the live afreserve.com landing's own footer now shows 1-800-423-USAF, consistent with the page being served from airforce.com since the merge. Both numbers are official; which one reaches a Reserve recruiter fastest, the official pages do not say.",
          },
        ],
        notes: [
          {
            heading: "COMING FROM ACTIVE DUTY",
            body: "The Reserve landing features Palace Chase and Palace Front — the transfer paths for active-duty Airmen moving to the Reserve. The full mechanics of switching components live in this app's Switching Components section (members area).",
          },
        ],
        flags: [],
        links: [
          { label: "Air Force Reserve", url: "https://afreserve.com/" },
          { label: "Find an Air Force Recruiter — search on their site", url: "https://www.airforce.com/find-a-recruiter" },
        ],
        source: "afreserve.com (airforce.com Total Force); USAGov recruiter table",
      },
      {
        id: "air-national-guard",
        name: "Air National Guard",
        summary:
          "goang.com is official — and its route is by STATE, not ZIP: you join a specific state's Air National Guard and a specific unit.",
        badge: "STATE-BASED ROUTE — NOT ZIP",
        door: "Say it plainly: the Air National Guard route is state-based, not ZIP-based. goang.com's own navigation leads with FIND YOUR STATE — you pick your state first, because you join that state's Guard and a specific unit; for at least some programs, applicants must work with an Air National Guard unit to find a position. The airforce.com page for the Guard (linked below) gives step 01 the same way: apply through an Air National Guard recruiter via your local recruitment office, over the phone, or online — then ASVAB, physical/mental screening, and the Delayed Entry Program (DEP) while awaiting a Basic Military Training start date.",
        channels: [
          {
            label: "Phone",
            text: "1-800-TO-GO-ANG (1-800-864-6264) — USAGov's official table lists it for the Air National Guard, separately from active Air Force, and Air Force Recruiting Service publications print it with goang.com. Note: goang.com's own footer, since it resolves into airforce.com, shows 1-800-423-USAF.",
          },
        ],
        notes: [],
        flags: [],
        links: [
          { label: "Air National Guard — find your state", url: "http://goang.com/" },
          { label: "Join the Air National Guard", url: "https://www.airforce.com/how-to-join/join-the-air-national-guard" },
        ],
        source: "goang.com; airforce.com — Join the Air National Guard; USAGov recruiter table",
      },
    ],
  },
  {
    key: "spaceforce",
    label: "Space Force",
    tileSub: "Its own ZIP locator · DAF form & recruiters",
    intro:
      "The Space Force keeps its own front door on spaceforce.com — its own locator page and apply page — on top of the Department of the Air Force's shared application and recruiting system.",
    entries: [
      {
        id: "space-force",
        name: "Space Force",
        summary:
          "spaceforce.com's own ZIP locator (search on their site), the shared Department of the Air Force application — and the honest line that the recruiter you ultimately talk to is an Air Force recruiter.",
        badge: "ITS OWN LOCATOR — DAF MACHINE UNDERNEATH",
        door: "Space Force has its own recruiter locator page on spaceforce.com — it does not bounce you to airforce.com's directory. The page is ZIP-based (“Enter zip code”); the search runs on their site, via the link below. The apply page carries enlisted, officer, and civilian paths on one page, and its Apply Now link opens the shared Department of the Air Force application form — whose own text states there is no obligation on your part by completing it, and that it is submitted to be contacted by your Space Force recruiter.",
        channels: [
          {
            label: "Phone",
            text: "1-800-423-USAF (1-800-423-8723) — there is no separate Space Force number: USAGov's official table reads “Contact the Air Force to join the Space Force.” No other Space Force number is printed here, because none appears on any current spaceforce.com page.",
          },
        ],
        notes: [
          {
            heading: "WHO YOU WILL ACTUALLY TALK TO",
            body: "Printed honestly, from an official Space Systems Command guide: the Space Force falls under the Department of the Air Force, so the recruiter you ultimately talk to is an Air Force recruiter. The application form's own authority line says the same in regulation form — it cites the recruiting-procedures instruction “for the Air Force and the Space Force.”",
          },
        ],
        flags: [
          "No field list for the Space Force application is printed: the shared Department of the Air Force form's fields could not be verified from the official pages as read.",
        ],
        links: [
          { label: "Find a Local Recruiter (Space Force) — search on their site", url: "https://www.spaceforce.com/find-local-recruiter" },
          { label: "Apply (Space Force)", url: "https://www.spaceforce.com/apply-now" },
        ],
        source: "spaceforce.com — locator and apply pages; USAGov recruiter table; Space Systems Command guide",
      },
    ],
  },
  {
    key: "coastguard",
    label: "Coast Guard",
    tileSub: "One funnel · chat instead of a national phone",
    intro:
      "One site and one funnel for Active and Reserve alike. The Coast Guard is the one branch with no national recruiting phone number — its national channel is chat, with published hours, and office numbers come from the locator.",
    entries: [
      {
        id: "coast-guard",
        name: "Coast Guard — Active & Reserve",
        summary:
          "gocoastguard.com/connect: a locator with three search modes (search on their site), chat with published hours in place of any national phone, and officer programs run as named Direct Commission routes.",
        badge: "ONE FUNNEL — NO NATIONAL PHONE EXISTS",
        door: "The Connect page on gocoastguard.com is the Coast Guard's recruiter door for every component — the Get Started page routes applicants to it as step 1. The locator presents three search modes on the page itself: search by ZIP code, select a country, U.S. territory, or region, or use your current location — returning a map and list of recruiting offices with street addresses, phone numbers, and email addresses. The search runs on their site, via the link below. The page also carries a privacy note: do not send personally identifying information or health-related concerns by email; email is for general recruiting questions.",
        channels: [
          {
            label: "Phone — none at national level, stated explicitly",
            text: "No national Coast Guard recruiting phone number exists on the official site — none appears on any gocoastguard.com page, and USAGov's official table lists the Coast Guard (and Coast Guard Reserve) by chat only, the only branch in the table with no number. Phone numbers are per-office and come from the locator results above. Any national Coast Guard recruiting number printed anywhere else did not come from an official page.",
          },
          {
            label: "Chat — with published hours",
            text: "Chat with a live recruiter: Monday–Thursday 10:00am–10:00pm EST; Friday 10:00am–5:00pm EST; Saturday–Sunday 12:00pm–5:00pm EST — via the chat link below.",
          },
        ],
        asks: "The Coast Guard's prospect questionnaire publishes its field list on the page: First Name, Last Name, Email, Phone, Zip, Country, Component, Program of Interest.",
        notes: [
          {
            heading: "OFFICER — SEPARATE PROCEDURES, NAMED PROGRAMS",
            body: "The Get Started page flags the split inside the flow: officer programs have different standardized test requirements, and active-duty enlisted, reserve enlisted, and officer applications follow different procedures. Officer commissioning is organized as named programs with their own pages — the Direct Commission Officer programs separate active-duty routes from Selected Reserve variants (SRDC, DCL-SELRES, DCPA-SELRES), whose selectees attend the five-week Reserve Officer Candidate Indoctrination (ROCI) instead of OCS. Start from the Get Started page, linked below.",
          },
          {
            heading: "RESERVE — INSIDE THE ONE FUNNEL",
            body: "No separate Reserve recruiting site or phone exists in the official routes. USAGov lists “Coast Guard and Coast Guard Reserve” together under the single gocoastguard.com chat link; the Reserve distinction is procedural, inside the one funnel — different application procedures, and the Selected Reserve officer variants above.",
          },
        ],
        flags: [
          "The prospect questionnaire's own page prints “OMB Control # 1625-0128, Expiration Date: January 31, 2025” — an expired OMB date, still displayed on the live page. It is printed here exactly as the page shows it, flagged rather than silently corrected.",
        ],
        links: [
          { label: "Connect with a Recruiter — search on their site", url: "https://www.gocoastguard.com/connect" },
          { label: "Get Started (Coast Guard)", url: "https://www.gocoastguard.com/get-started" },
          { label: "Chat with a Recruiter (hours on this card)", url: "http://gocoastguard.com/chat-now" },
          { label: "Coast Guard Prospect Questionnaire", url: "https://www.gocoastguard.com/prospect-questionnaire" },
        ],
        source: "gocoastguard.com — connect, get-started, chat, and questionnaire pages; USAGov recruiter table",
      },
    ],
  },
  {
    key: "beforeyousign",
    label: "Before You Sign",
    tileSub: "Cross-checks, the contract principle, MEPS & DEP",
    intro:
      "Before any signature: DoD's own cross-service doors, the one principle the enlistment contract itself states, the walk-away question answered exactly as honestly as the official pages answer it, and what MEPS and the Delayed Entry Program actually are.",
    entries: [
      {
        id: "cross-service-doors",
        name: "Cross-Service Doors — USAGov & Today's Military",
        summary:
          "USAGov's “Requirements to Join” page is the federal cross-check of every recruiter number in this section; Today's Military, DoD's own joint site, advises talking to more than one branch's recruiter.",
        badge: "DOD'S OWN ADVICE: TALK TO MORE THAN ONE BRANCH",
        door: "Two official doors stand behind every card in this section. USAGov's “Requirements to Join” page carries the federal “Contact a military recruiter” table — the labeled cross-check for every number printed here (it is the source that confirms the Air Force family's three separate numbers and the Coast Guard's chat-only listing). Today's Military is the Department of Defense's own joint recruiting site, built for exactly the undecided.",
        channels: [],
        notes: [
          {
            heading: "QUESTIONS TO ASK A RECRUITER — TODAY'S MILITARY, SUMMARIZED",
            body: "Today's Military's questions page tells applicants a recruiter can provide a positive but realistic assessment of opportunities — and gives three pieces of framing worth taking literally: recruiters from multiple Service branches may share a location; you should feel encouraged to speak to more than one; and parents are encouraged to talk to recruiters too. Its question lists are categorized (general, basic training, first term, education), plus a parent list that includes “What's the Delayed Entry Program?” and the mind-changing question the Walk Away card below takes up.",
          },
        ],
        flags: [
          "Today's Military's contact page prints eight service numbers, but the per-number labels did not survive verification — so no number in this section is assigned to a service from that page. The labeled source is USAGov's table, and every number on these cards traces to it or to the branch's own site.",
        ],
        links: [{ label: "Requirements to Join (USAGov)", url: "https://www.usa.gov/military-requirements" }],
        source: "USAGov — Requirements to Join; Today's Military — Questions to Ask a Recruiter",
      },
      {
        id: "get-it-in-writing",
        name: "Get It in Writing",
        summary:
          "The principle attributed to DD Form 4 §§B–C: the agreements in your enlistment contract and its annexes are the promises that will be honored — anything promised outside them will not be.",
        badge: "THE CONTRACT ITSELF STATES THE PRINCIPLE",
        door: "Your job, bonus, and ship date are guaranteed only by what's written in your enlistment contract (DD Form 4) and its annexes. If a promise isn't in there, it will not be honored — so before you sign, read the annexes, and ask for every promise in writing. That is the principle of the contract itself: DD Form 4, the Enlistment/Reenlistment Document of the Armed Forces of the United States (current edition dated 2/28/2025 on the official DoD forms index), states in its Sections B–C, in substance, that the agreements in the contract and its attached annexes are all the promises made to the enlistee by the Government — and guarantees are enforceable precisely because they are annexed to the form, as the services' own correction-board decisions show. Nothing on this card is legal advice; it is the form's own principle, attributed to the form.",
        channels: [],
        notes: [
          {
            heading: "THE SAME PROMISE, ON AN OFFICIAL APPLICANT PAGE",
            body: "The Marine Corps' official Delayed Entry Program page lists, as a benefit of DEP, in its own words: “You will get a guaranteed program in writing.” Written guarantees are not a favor a recruiter does you — the services' own pages present them as how the system works. Hold every branch to that standard: if it matters, it goes in the annexes.",
          },
        ],
        flags: [
          "Provenance, stated openly: the principle above is DD Form 4 §§B–C in substance, attributed as a principle. The form's exact wording is pending re-verification against the official PDF, so this app prints no verbatim quotation of the form's text anywhere — when that verification clears, the exact words can be quoted; until then, the attributed principle is what ships.",
        ],
        links: [],
        source: "DD Form 4 (DoD forms index, edition 2/28/2025); Marine Corps DEP page",
      },
      {
        id: "can-you-walk-away",
        name: "Can You Walk Away?",
        summary:
          "Answered exactly as honestly as the official pages answer it: they neither promise you can leave the Delayed Entry Program nor say you can't — so ask before you sign, and get the answer in writing.",
        badge: "NEITHER DIRECTION IS OFFICIAL GUIDANCE",
        door: "Official applicant pages don't promise you can leave the Delayed Entry Program, and don't say you can't. DEP separation exists in service regulations (for the Army, AR 135-178 ch. 14 and USAREC Reg 601-210 ch. 11), with branch-specific processes — so before you sign, ask your recruiter, and get the answer in writing, what the process is in your branch if your circumstances change. Anything stronger than that, in either direction, is lore — no official recruiting, USMEPCOM, USAGov, Today's Military, or Military OneSource page states it, and this app does not either.",
        channels: [],
        notes: [
          {
            heading: "THE QUESTION OFFICIALDOM POSES — WITHOUT ANSWERING",
            body: "Today's Military's official parent question list includes “What if my child changes his or her mind?” as a question to ask the recruiter. It poses the question; the official text gives no official answer. That is precisely why the question belongs in your conversation with the recruiter, before anything is signed — and why the answer belongs in writing, per the previous card.",
          },
        ],
        flags: [],
        links: [],
        source: "AR 135-178 ch. 14; USAREC Regulation 601-210 ch. 11; Today's Military parent question list",
      },
      {
        id: "meps-and-dep",
        name: "MEPS & the Delayed Entry Program",
        summary:
          "MEPS is USMEPCOM, the joint processing command — you visit only when your recruiter schedules you — and DEP is the wait between acceptance and your training start date.",
        badge: "YOU VISIT MEPS ONLY WHEN YOUR RECRUITER SCHEDULES YOU",
        door: "MEPS is run by USMEPCOM — the U.S. Military Entrance Processing Command, the joint command that processes applicants for every service by applying DoD standards for aptitude, medical, and conduct qualification; it operates 65 MEPS stations. In USMEPCOM's own framing, the process of enlisting begins with a recruiter for the service you choose — and applicants visit a MEPS only once they have been scheduled by their recruiter. The command routes applicants back to the branch doors in this section; there is no separate MEPS application.",
        channels: [],
        notes: [
          {
            heading: "USMEPCOM'S OWN FIVE STEPS",
            body: "1. Aptitude Testing → 2. Medical Examination → 3. Job Search → 4. Background Screening → 5. Oath of Enlistment. That is the command's own sequence for processing, from its “A Day at the MEPS” material.",
          },
          {
            heading: "DEP — THE DELAYED ENTRY PROGRAM",
            body: "Defined the way the services' own pages define it: after acceptance, you enter DEP and wait for a future basic-training start date — time the services frame for finishing school or preparing physically. The Air Force's Guard page: after acceptance, you'll enter DEP and await your BMT start date. The Space Force's apply page: after passing the necessary requirements, you'll be placed in DEP, where you wait to be selected and entered into Basic Military Training. The Marine Corps publishes the longest stated window: DEP allows postponing recruit training for up to 365 days (410 days in certain circumstances) — to complete high school, graduate from college, or generally get affairs in order — while the recruiter helps you prepare.",
          },
        ],
        flags: [
          "USMEPCOM's applicant pages were read as cached copies (the site's identity and mission are verified; the copies were 66–95 days old). The substance above — the scheduling rule and the five steps — is the command's own published framing.",
        ],
        links: [
          { label: "Joining the Military (USMEPCOM)", url: "https://www.mepcom.army.mil/Home/Applicants-and-Parents/Joining-the-Military/" },
        ],
        source: "USMEPCOM — applicants pages and command history; services' DEP pages",
      },
      {
        id: "military-onesource-note",
        name: "A Note on Military OneSource",
        summary:
          "Military OneSource serves current members and families and publishes no applicant recruiter-prep guide — DoD's applicant-facing sources are Today's Military and USAGov.",
        badge: "NOT AN APPLICANT SOURCE — STATED SO YOU DON'T LOOK THERE",
        door: "If you go looking for pre-enlistment guidance at Military OneSource, know what it is: a DoD program for current service members and their families. It has no dedicated “how to talk to a recruiter / before you enlist” applicant guide — its joining-adjacent coverage points you back to the branch recruiter. DoD's applicant-facing sources are Today's Military and USAGov (the Cross-Service Doors card). OneSource's own number, 800-342-9647, is printed here as OneSource's number for members and families — it is not a recruiter line.",
        channels: [],
        notes: [
          {
            heading: "THE ONE APPLICANT-FACING GUIDE IT DOES PUBLISH",
            body: "OneSource's MilLife Guide “Joining the National Guard & Reserves” (linked below) summarizes, at its level: minimum eligibility (citizen or resident alien; ages 17–42 as a general range, varying by branch; pass a physical exam; pass the ASVAB / meet the AFQT standard); the obligation (basic training of 8–12 weeks, monthly drill, two-week annual training, and possible involuntary activation); total contracts ranging from three to eight years; and the benefits rundown (part-time pay, TRICARE Reserve Select, Montgomery GI Bill–Selected Reserve). For Guard and Reserve questions beyond that, the branch doors above are the route.",
          },
        ],
        flags: [],
        links: [
          { label: "Joining the Guard & Reserves (MilLife Guide)", url: "https://www.militaryonesource.mil/resources/millife-guides/guard-and-reserves/" },
        ],
        source: "Military OneSource — MilLife Guide, Guard & Reserves",
      },
    ],
  },
];
