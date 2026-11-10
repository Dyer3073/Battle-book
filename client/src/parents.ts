// Parents & Loved Ones — transcribed from the researched pack
// (~/workspace/military-app/parents/parents.md, researched Nov 9,
// 2026; flags F-1–F-12). The pack is the content source of truth.
// Placement: the FUTURE-MEMBER / Joining area next to the Boot Camp
// content — audience is parents and loved ones of recruits, NOT the
// member Library. Structure: (1) the American Red Cross emergency
// card PINNED FIRST (Hero Care +1 877-272-7337, 24/7/365; the Red
// Cross verifies, the COMMANDER decides leave — printed plainly);
// (2) "Before they ship" (DEP + MEPS + Military OneSource);
// (3) one card per branch — USMC = TWO depot cards (Parris Island
// and San Diego) with SEPARATE prohibited-mail lists, never merged
// (F-6); Army = the published pattern + "find your battalion page"
// routing (F-1); (4) "After graduation." The livestream patchwork
// (F-8) prints per branch at EQUAL visual weight. Navy guest count:
// the current RTC page states NO number — ticketing process only
// (F-4). Sandboxx appears ONLY inside the Parris Island card,
// neutrally, beside RTC's published non-endorsement (printed in the
// Navy card). AF BMT FAQ staleness stamp "current as of 4 May 22"
// prints with its entry (F-2). Cape May ZIP prints 08204 (F-10).
// CG: no Family Day at Cape May — the contrast prints. NO travel
// prices, NO hotel picks (CG meal prices deliberately not carried).
// F-11 verify-before-print items ship at the pack's extracted level
// with flags visible — nothing upgraded silently.

import type { PackSection } from "./seven";

export const PARENTS_SECTION: PackSection = {
  view: "parents",
  title: "Parents & Loved Ones",
  headSub:
    "For the family of a recruit: what communication actually looks like during entry training, how mail works, what graduation week involves, and how to reach a recruit in a real emergency. One rule holds everywhere: during entry training, mail is the primary channel, phone contact is limited and scheduled by the command, and the recruit — not the family — is the command's main source of updates about themselves.",
  intro:
    "Every fact here comes from the branches' own family pages — recruiting family pages and the training commands' official pages — and where those pages conflict or read as stale, both versions print with a flag. No family-forum or commercial-site sourcing anywhere in this guide. Lodging and travel planning route to the Installation guide and Deals sections of this app; no prices or hotel picks print here.",
  pinned: [
    {
      id: "red-cross",
      name: "In a real emergency: American Red Cross Hero Care — read this first",
      summary:
        "The American Red Cross Hero Care Network is free and available 24/7/365 at +1 877-272-7337. It reaches active-duty members of all six services, plus activated Guard/Reserve members and DoD civilians stationed OCONUS. What counts: critical illness or injury, or death of an immediate family member, the birth of a child, or another critical time-sensitive situation requiring the member's presence.",
      who: "Every family, every branch — this is the same channel for all six services, and every branch's training pages print this same number.",
      body: [
        "What the Red Cross actually does — print this plainly, because families consistently misunderstand it: the Red Cross does NOT authorize emergency leave. It quickly and independently verifies the emergency and provides a confidential report so the member's commander can make an informed emergency-leave decision. The leave decision is always the command's.",
        "Have ready when you call: the service member's full legal name, plus further identifying information as the Red Cross page lists. For a Marine recruit, MCRD San Diego asks for name, Social Security number, company and platoon so the message processes quickly.",
      ],
      flags: [],
      links: [
        { label: "Red Cross — Emergency Communication Services", url: "https://www.redcross.org/get-help/military-families/hero-care-network/emergency-communication.html" },
      ],
      source: "American Red Cross, Hero Care Network (verified consistent across all six services' official pages)",
    },
  ],
  tiles: [
    {
      key: "before",
      label: "Before They Ship",
      tileSub: "DEP, MEPS, and Military OneSource — the months before training starts",
      intro:
        "The period between enlisting and shipping has its own structure — and its own name in each service. These three cards cover what it is, what MEPS looks like for families, and the DoD family resource that exists for exactly this season.",
      entries: [
        {
          id: "dep",
          name: "The Delayed Entry Program (DEP) — enlisted, but not yet on active duty",
          summary:
            "DEP is the period between enlisting (at MEPS) and shipping to training. The new member has enlisted but is NOT yet on active duty — no military pay or TRICARE during DEP. Marine Corps: DEP can postpone recruit training for 365 days (410 in certain circumstances) — to finish high school, graduate from college, or get affairs in order. Navy: DEP members are called Future Sailors. Army: the DEP is the Future Soldier Program.",
          who: "Families of poolees, Future Sailors, and Future Soldiers in the months before ship day.",
          body: [
            "Marine Corps (the most family-specific official DEP page): poolees attend poolee functions and family nights with their family and other members of the DEP and their families; the recruiter provides mentorship and preparation; poolees must pass the Initial Strength Test (IST) before shipping and must keep the recruiter informed of school progress and any change in circumstances.",
            "Navy: the DEP bridges enlistment and the ship date — a few weeks to up to a year — during which Future Sailors can finish high school, maintain jobs, and stay close to family; recruiters run scheduled meetings, group workouts, and preparation. Future Sailors must stay out of legal trouble and maintain medical eligibility.",
            "Air Force / Space Force: official pages describe DEP postponement of up to 365 days (410 in certain circumstances); Space Force's own site: after passing requirements “you'll be placed in the Delayed Entry Program (DEP), where you wait to be selected and entered into Basic Military Training,” and conditioning work is recommended during the wait.",
          ],
          flags: [],
          links: [
            { label: "Marines.com — What is the Delayed Entry Program", url: "http://www.marines.com/resources/what-is-the-delayed-entry-program" },
            { label: "Space Force — Apply to Join", url: "https://www.spaceforce.com/apply-now" },
          ],
          source: "Marines.com · U.S. Navy recruiting (DVIDS) · GoArmy/USMEPCOM · Space Force",
        },
        {
          id: "meps-families",
          name: "MEPS, for families — you can watch the oath",
          summary:
            "All branches process through USMEPCOM stations. Parents/guardians may accompany the applicant to MEPS but are NOT allowed in the processing/examination area; parents, family, and guests ARE welcomed to watch and photograph the Oath of Enlistment ceremony. On ship day, DEP members get a quick height/weight (BMI) recheck before shipping, not the full physical. The oath is taken at enlistment into DEP and again on ship day.",
          who: "Families attending a MEPS enlistment or ship day.",
          body: [
            "The Army provides hotel lodging near MEPS for applicants who need it. Expect the processing day itself to be long and mostly closed to you — the oath ceremony is the family's part of it.",
          ],
          flags: [],
          links: [],
          source: "GoArmy MEPS page · USMEPCOM",
        },
        {
          id: "onesource-families",
          name: "Military OneSource — the DoD family resource, 24/7 at 800-342-9647",
          summary:
            "Military OneSource is DoD's family support service: 24/7 at 800-342-9647 and militaryonesource.mil, for active-duty, Guard, and Reserve members and their immediate families. Its article “What to Know Before Your Service Member Leaves for Boot Camp” is addressed explicitly to “a parent, sibling, friend, fiancé or extended family member.”",
          who: "Parents, siblings, partners, and extended family — before, during, and after training.",
          body: [
            "The article's published points: help the recruit follow the fitness plan from their recruiter (be an accountability/workout buddy); expect DoD and branch resources to ease the transition; be ready for the practical conversations — service members must have their affairs in order, including making a will and choosing life insurance designees; and, in the article's words, “Tell them you are proud.”",
            "After basic training, the member and immediate family gain access to OneSource supports the article names: free health and wellness coaching, and free confidential non-medical counseling (relationship issues, stress and anger, parenting).",
            "OneSource's boot-camp mail rule: if your service member is at boot camp, skip the care package and send a letter instead — plain paper, plain envelope, photos are fine, don't decorate the envelope, and plan on roughly two weeks for a letter to arrive.",
          ],
          flags: [],
          links: [{ label: "Military OneSource", url: "https://www.militaryonesource.mil/" }],
          source: "Military OneSource (article dated Jan 6, 2025) · OneSource boot-camp guidance",
        },
      ],
    },
    {
      key: "army",
      label: "Army — Basic Combat Training",
      tileSub: "Fort Moore · Fort Jackson · Fort Leonard Wood · Fort Sill — the pattern, and how to find your battalion",
      intro:
        "The Army has no single Army-wide BCT family page (flag F-1). Family information is published per training battalion — the Fort Jackson battalion pages are the archetype. The pattern below is the common pattern, printed as a pattern, not a promise: your trainee's battalion page for their cycle is the only authoritative source.",
      entries: [
        {
          id: "army-bct",
          name: "Army BCT families — first call, Sunday phones, mail, Family Day, graduation",
          summary:
            "Trainees make an initial phone call when they first arrive at the battalion from reception. After that, in the battalion pages' own words: “Phone use is a privilege in Basic Combat Training… they will only be granted access to their phones for a limited amount of time, usually sometime on Sunday afternoons. The exact time is determined by their company leadership.” Mail is the primary channel: “The primary way you will be able to communicate with your trainee while they are in training is through mail. We encourage everyone to write their trainee often.”",
          who: "Families of trainees at Fort Moore, Fort Jackson, Fort Leonard Wood, and Fort Sill.",
          body: [
            "Find your battalion page: battalion pages (on home.army.mil for Fort Jackson — e.g., 3-60 IN, 3-13 IN, 3-39 IN, 4-39 IN, 2-60 IN — and brigade pages such as Fort Sill's 434th Field Artillery Brigade) publish the cycle's key dates, the mailing address, and a “Last day to send mail” date about two weeks before graduation. Dates, mail deadlines, and even whether Family Day happens vary by battalion and cycle.",
            "Mail address template (street and battalion vary by unit): Rank, Last Name, First Name / (A–E) Co, ___ PLT / [Bn] IN BN, [Bde] IN BDE / [street] / Fort Jackson, SC 29207. Mail takes longer at Fort Jackson because of extra sorting steps after it arrives on the installation. Fort Sill's version: don't send mail until your Soldier contacts you after leaving the 95th AG Reception Battalion for a training battalion (mail sent to Reception is redirected and delayed); mail call happens daily as the training schedule permits; drill sergeants may have a Soldier open packages to inspect for contraband.",
            "Emergencies: battalion pages direct families to the American Red Cross at (877) 272-7337 for an emergency involving an immediate family member — the pinned card at the top of this section.",
            "Graduation week (Fort Jackson pattern): Family Day the day before graduation, 9 a.m. on Hilton Field — families spend the day with their Soldier on Fort Jackson, and graduating Soldiers must remain in uniform for the remainder of the day on both Family Day and Graduation. Visitor access: all visitors 18+ must obtain a visitor's pass via https://pass.aie.army.mil for the trainee's graduation dates.",
            "LIVESTREAM (F-8): Fort Jackson's graduation is live-streamed to the Fort Jackson Facebook page, per the battalion pages. After the ceremony Soldiers are released to families with an off-post pass for the remainder of the day in the greater Columbia area.",
            "Fort Sill's pattern differs in detail: Family Day pass 9:00 a.m.–8:00 p.m. for deserving Soldiers; after graduation, up to two hours with family at the graduation site; NO leave is authorized after BCT graduation — plan travel accordingly; no visits during BCT itself. Exact dates come in the battery's graduation letter.",
          ],
          flags: [
            "F-1: there is no Army-wide BCT family page. Everything Army here is battalion/brigade-published and cycle-specific — route to your trainee's battalion page for anything date-specific.",
            "Schedules vary is the battalions' own position (F-12): 3-13 IN ran an early graduation (Tuesday Dec 15, 2026) for Victory Block Leave with NO Family Day that cycle; 4-39 IN had no Family Day Nov 24 (Thanksgiving week), substituting an additional off-post pass on Thanksgiving Day. Family Day itself is not guaranteed.",
            "Guest limits vary by unit page: the 2-60 IN page states “There is no limit on the number of guests who may attend” — that is that unit's statement, never an Army-wide rule.",
            "Care packages: Fort Jackson battalion pages carry a “care packages” tab whose text was not captured in the research (F-11) — this guide does not invent its contents. The standing official guidance printed here is OneSource's: at boot camp, send a letter instead of a package.",
          ],
          links: [
            { label: "Fort Sill — 434th FA Brigade FAQ", url: "https://sill-www.army.mil/434/faqs/" },
            { label: "Fort Jackson visitor passes", url: "https://pass.aie.army.mil" },
          ],
          source: "Fort Jackson battalion pages (home.army.mil) · 434th FA Brigade FAQ, Fort Sill",
        },
      ],
    },
    {
      key: "usmc-pi",
      label: "Marine Corps — Parris Island",
      tileSub: "MCRD Parris Island, SC — scripted call, letters, THIS depot's prohibited list, graduation week",
      intro:
        "One of the Marine Corps' two depots — this card is Parris Island's only. San Diego's rules are on their own card, and the two depots' prohibited-mail lists are NOT identical: never merge them (F-6).",
      entries: [
        {
          id: "usmc-parris-island",
          name: "MCRD Parris Island families — letters only, this depot's mail rules, graduation week",
          summary:
            "Recruits are required to make one phone call the night they arrive — the scripted call. After that, in Marines.com's words: “After the initial call, all correspondence is through letters and postcards.” Recruits may not make phone calls, send email or texts, access the internet, or possess cellphones. The first letter home arrives 7–9 days after arrival and includes the mailing address with company and platoon information.",
          who: "Families of recruits at MCRD Parris Island, South Carolina.",
          body: [
            "Your mail will not reach your recruit without the correct company and platoon number — all mail routes through the depot's only mail office. Address templates are published on the depot's “Contacting a Recruit” page; if you don't have the platoon/company/battalion, get it from the recruit's recruiter. The best person for families to contact with questions is the recruit's local recruiter — also the contact if you need to reach your recruit.",
            "Post-Crucible liberty: Parris Island's page phrases its version as the Sunday and Thursday preceding Friday graduation, and notes the Marine will notify family when it becomes permissible to send them a cell phone — do not mail a phone until told. (Marines.com lists Sunday + the following Saturday/Sunday + Thursday — each source's day list prints as published, F-5.)",
            "Graduation packets are issued to all recruits with the battalion commander's invitation letter around week 9 of the 12-week cycle; recruits decide whom to mail packets to, and depot personnel cannot tell you a packet's mailing status or re-issue one. You may not visit your recruit until Family Day, the day before Graduation.",
            "Graduation week (depot-published): the depot is open to family and friends Wednesday through Friday of graduation week. Thursday: Motivational Run 7:00 a.m.; Family Day Ceremony 9:30 Thursday; Family Day liberty 10 a.m.–3 p.m. Friday: Morning Colors 7:45 a.m. at Barrow Hall; Graduation Ceremony 9:00 a.m. at Peatross Parade Deck. Graduations are typically Friday mornings.",
            "Base access: MCRDPI is a closed federal installation — access is a privilege, not a right. The Trusted Traveler Program is suspended; all visitors must be individually vetted. Arrive at 5 a.m. on family/graduation days for timely entry. Parking passes are NOT required for typical daily visitors including graduation — a large amount of internet information on this is obsolete. MCCS recruit-family support: southcarolina.usmc-mccs.org/recruit-families.",
            "Injured or held recruits (Support Battalion / STC): recruits assigned to the Support Training Company (Medical Rehabilitation / Female Rehabilitation / Physical Conditioning Platoons) notify next of kin on assignment and then expect a weekly call. STC recruits may send and receive mail and small packages — commercially packaged shelf-stable products (protein bars), alcohol-free hygiene products, socks/undergarments, and running shoes ARE allowed there, in deliberate contrast to the standard-training prohibitions. Next of kin will be phoned with return-to-training information — “only plan on attending graduation once you have received this phone call.” Family emergency (illness/death): American Red Cross 1-877-272-7337. Immediate family may visit an STC recruit aboard Parris Island at 120 days or more.",
          ],
          bullets: [
            { title: "What NOT to mail — Parris Island's published prohibited list", text: "1) tobacco products; 2) alcohol / unlawful drugs; 3) pornographic material, magazines, newspaper; 4) personal weapons or ammunition; 5) gambling devices (playing cards, dice, etc.); 6) radios or cameras; 7) flammable materials (lighters, matches, fireworks, etc.); 8) cell phones, PDAs, video games; 9) sweets (candy, cakes, cookies, etc.)." },
            { title: "Commercial letter services — printed neutrally, as the official record stands", text: "Parris Island's own page describes correspondence as arriving “through letters/post cards sent via U.S. postal service and services offered through Sandbox” [Sandboxx]. That is a statement on the depot's page, not an endorsement or a recommendation from this app. The counterweights in the official record: MCRD San Diego's FAQ names USPS only, and Navy RTC explicitly does not endorse or recommend any delivery service (Navy card)." },
          ],
          flags: [
            "F-6: this prohibited list is Parris Island's. San Diego's list (its own card) is different — do not merge them into one “Marine Corps list.”",
            "F-5 variances print as published: Family Day Ceremony venue is named two ways on official Parris Island pages (All-Weather Training Facility vs. Peatross Parade Deck) — the ceremony and time print here; check the current depot schedule for the venue.",
            "Livestreams (F-8): no livestream statement for Parris Island was captured in the official record — this guide says nothing about one, deliberately.",
          ],
          links: [
            { label: "Marines.com — FAQ for Parents", url: "https://www.marines.com/faq-for-parents" },
            { label: "MCCS Parris Island — Recruit Families", url: "https://southcarolina.usmc-mccs.org/recruit-families" },
          ],
          source: "MCRD Parris Island Visitors / Contacting a Recruit / Support Battalion pages · Marines.com FAQ for Parents",
        },
      ],
    },
    {
      key: "usmc-sd",
      label: "Marine Corps — San Diego",
      tileSub: "MCRD San Diego, CA — the arrival call caveat, THIS depot's prohibited list, the livestream fraud warning",
      intro:
        "The Marine Corps' other depot — this card is San Diego's only. Parris Island's rules are on their own card; the two depots' lists differ and are never merged (F-6).",
      entries: [
        {
          id: "usmc-san-diego",
          name: "MCRD San Diego families — the call that might not come, mail rules, graduation week",
          summary:
            "Recruits are required to make the scripted arrival call — and San Diego's FAQ adds the sentence families most need: the arrival call does not always go through, and not receiving a call does not mean your recruit has not arrived. After that, all correspondence is through letters and postcards; the recruit mails home unit information in the first 2–3 weeks (Parris Island's service-level figure is 7–9 days for the first letter — both print as published, F-5).",
          who: "Families of recruits at MCRD San Diego, California.",
          body: [
            "Mail: your mail will not reach your recruit without the correct company and platoon. San Diego's published example format: Recruit John Doe / 1st Bn. Alpha Company Office / Platoon 1000 / 40004 Midway Ave. / San Diego, Calif. 92140-5670 (per-battalion addresses are listed on the depot's Contacting a Recruit page). Questions: the recruit's local recruiter is the family's contact.",
            "Emergencies: have the recruit's name, Social Security number, company and platoon ready so the Red Cross message processes quickly — the pinned card at the top of this section.",
            "Graduation week: Family Day and graduation are the last two days of recruit training — Family Day Thursday (new Marines see family and friends for the first time, during on-base liberty) and graduation Friday in a formal ceremony. MCCS San Diego's recruit-families guide (revised 5/2026) publishes gate and event times per cycle — Gate 5 visitor access from 6:30 a.m. on Family Day/graduation days; exact liberty times vary by company and cycle, so confirm from the current MCCS guide: sandiego.usmc-mccs.org/recruit-families.",
            "Base access: Trusted Traveler suspended, vehicles subject to search/inspection, and firearms/ammunition prohibited aboard.",
            "Graduation packets: San Diego's page says packets go out around the 1st Saturday after Pick-Up [as extracted — see flag]. Recruits decide whom to mail packets to; depot personnel cannot tell you a packet's mailing status or re-issue one.",
          ],
          bullets: [
            { title: "What NOT to mail — San Diego's published list (partial, as extracted)", text: "medication of any kind (prescription or nonprescription); vitamins and minerals; tobacco products or paraphernalia; any alcoholic or intoxicating substances including alcoholic drinks, mouthwash, cough medicine, and all performance-enhancing supplements; drugs or drug paraphernalia; anything already prohibited by USPS or shipping companies." },
            { title: "LIVESTREAM FRAUD WARNING — San Diego (the depot's own warning, F-8)", text: "“Please be aware and consider any LIVE STREAM advertisement for MCRD San Diego Graduation as Fraudulent.” Follow the MCRDSD website and official social pages only. There is no San Diego graduation livestream to buy." },
          ],
          flags: [
            "F-6: this prohibited list is San Diego's, and it is partial as extracted from the depot page. Parris Island's list (its own card) is different — never merge them.",
            "F-11: the graduation-packet timing above (“1st Saturday after Pick-Up”) ships at the pack's extracted level — verify on the live depot page before planning around it.",
          ],
          links: [
            { label: "MCRD San Diego", url: "https://www.mcrdsd.marines.mil/" },
            { label: "MCCS San Diego — Recruit Families", url: "https://sandiego.usmc-mccs.org/recruit-families" },
          ],
          source: "MCRD San Diego FAQ / Contacting a Recruit / Graduation pages · MCCS San Diego recruit-families guide",
        },
      ],
    },
    {
      key: "navy",
      label: "Navy — Recruit Training Command",
      tileSub: "RTC Great Lakes, IL — the only site; the CO's call schedule; off-base ticket pickup",
      intro:
        "The Navy's only recruit training site. RTC's official family site is bootcamp.navy.mil — the older rtc.navy.mil address in older materials is superseded, and a stale COVID-era MWR page must never be sourced for guest policy (F-3).",
      entries: [
        {
          id: "navy-rtc",
          name: "Navy RTC families — Night of Arrival call, mail, Pass-In-Review and the ticketing step families get wrong",
          summary:
            "The first call is on the Night of Arrival. Calls are generally scheduled every couple of weeks: a few days after arrival, recruits send division assignment and initial graduation information via text or email; the next call comes in about 2.5 weeks, then generally Week-2 Saturday, Week-4 Saturday, after passing the Official Physical Fitness Assessment (Week-7), and after Battle Stations (Week-8). After arrival, all cell phones are boxed up and stored, returned the day before graduation — “the primary means of communication is the mail.”",
          who: "Families of recruits at RTC Great Lakes, Illinois.",
          body: [
            "Write — the command asks for it: “Letters always encouraged ('please write!').” A standard USPS letter typically takes 5–10 business days to arrive; RTC has no control over mail until it reaches the ship. Mail address format: SR LAST NAME, FIRST NAME, MI / SHIP XXX DIV XXX / RECRUIT TRAINING COMMAND / [ship-specific street] / GREAT LAKES IL 60088-XXXX — the recruit's own division-assignment message is the source of the right ship/division.",
            "What you may send: letters and small photographs ONLY. Do NOT send packages of civilian clothing, toiletries, or food items — recruits cannot keep them. Recruits may not receive anything taken orally — cough drops, water flavoring packets/drops, any type of medicine.",
            "Routine questions go to the Recruit Customer Service Team at RTCRecruitCustomerService@us.navy.mil; emergencies go through the worldwide American Red Cross messaging service (the pinned card) — RTC names death or serious illness of a family member and the birth of a child, and notes the verification assists the commanding officer's emergency-leave decision.",
            "Graduation — Pass-In-Review: Thursdays. RTC gates open to guests at 6:30 a.m.; guests should be seated by 9:00 a.m.; the ceremony commences 9:00 a.m., divisions arrive 9:20, and it concludes 10:30 a.m. Arrive at least 1.5 hours early.",
            "TICKETING — the step families get wrong: (1) the recruit submits guest names through RTC's online Guest Ticketing App — names must be submitted the Friday before graduation; names submitted Monday or later will NOT be processed and those guests WILL NOT be able to access RTC or attend. (2) Every attendee must personally pick up their ticket OFF-BASE at the Recruit Family Welcome Center, Navy Exchange (NEX) Burkey Mall, 2650 Green Bay Road, North Chicago, IL 60088, during graduation week. Tickets are free but require a “REAL ID” (federal base-access policy) or a valid passport, or a combination of other valid forms of identification. “Do not lose it — it is the only ticket you will receive”; tickets are not transferable and are the only means to access the base; DO NOT GO DIRECTLY TO THE BASE WITHOUT FIRST PICKING UP YOUR TICKET.",
            "LIVESTREAM (F-8): if family cannot attend, RTC livestreams the ceremony on its always-free YouTube channel and Facebook, per the CO's welcome letter. Print the word “free” with it — paid “livestream” offers for RTC are not the command's.",
          ],
          bullets: [
            { title: "Delivery-service non-endorsement (the command's own words)", text: "“the command does not endorse or recommend what delivery service to send recruits mail — a standard letter delivered through USPS is the traditional method.” — RTC FAQ. (This is the official counterweight that also appears beside the Parris Island card's neutral mention of a commercial service.)" },
          ],
          flags: [
            "F-4: the current RTC graduation page states NO guest count per recruit. Figures of 3 vs. 4 guests circulate in secondary guides and an older official MWR page — this guide prints the ticketing process and no number. Guest count is set per graduation: confirm from your recruit's graduation information.",
            "F-3: the Navy MWR Great Lakes site still carries a COVID-era RTC graduation page (2 guests maximum, vaccination proof, masking, Friday livestreams). It is superseded by bootcamp.navy.mil — never source guest or ceremony policy from it.",
          ],
          links: [
            { label: "RTC — CO's Welcome Letter", url: "https://www.bootcamp.navy.mil/Recruits/COs-Welcome-Letter" },
            { label: "RTC — Graduation", url: "https://www.bootcamp.navy.mil/Graduation" },
          ],
          source: "RTC Commanding Officer's Welcome Letter · RTC FAQ & Graduation page (bootcamp.navy.mil)",
        },
      ],
    },
    {
      key: "af",
      label: "Air Force & Space Force — BMT",
      tileSub: "JBSA-Lackland, TX — 7.5 weeks, the VARL, recordings NOT livestreams; Guardians train here too",
      intro:
        "One site for both services: Guardian trainees attend Air Force BMT at JBSA-Lackland in the same flights as Airmen, and everything on this card applies to Guardian families identically — the Space Force publishes no separate BMT family page (and this guide says so rather than implying one).",
      entries: [
        {
          id: "af-bmt",
          name: "Air Force BMT families — a handful of calls, the VARL, Coin Ceremony, Graduation Parade",
          summary:
            "BMT is 7.5 weeks; most trainees arrive on the Tuesday of “Zero Week,” and the Graduation Parade is almost always on a Thursday — the 7th Thursday after arrival if there are no delays. Trainees do NOT have daily phone access: they receive a handful of opportunities to use their phones; the number of calls cannot be reduced or otherwise limited by MTIs, but actual timing varies from flight to flight. Calls are voice only — no FaceTime/Skype — except immediately upon arrival, when trainees may photograph a pre-printed address card to send home (this is how many families get the mailing address).",
          who: "Families of Air Force and Space Force trainees at JBSA-Lackland, Texas.",
          body: [
            "Privacy — set expectations with this: no one at BMT may release information about a trainee or their status without written permission from the trainee. The FAQ's own conclusion: a family member's best source of information about their trainee is the trainee, via phone opportunities and letters. Trainees in holdover / administratively delayed status get regular phone opportunities to keep families updated. All trainees have the opportunity to mail home a welcome letter from the BMT Commander carrying graduation-week information specific to that trainee's week group.",
            "Mail (via USPS): AB [Last Name, First Name, Middle Initial] / XXX TRS/FLT XXX / 1320 Truemper St / JBSA-Lackland, TX 78236-6407. Cards and congratulatory letters are acceptable. Graduates may not bring large items or electronics back to the dormitories after graduation — mail those to the member's Technical Training location instead; graduates must be able to carry everything they own when they ship to tech training.",
            "Visitor access — the VARL: base access for graduation runs through the Visitor Access Request List (VARL) your trainee filled out — the mechanism for the 502d Air Base Wing Security Forces background check on non-DoD ID holders. Each trainee may request six (6) guests for vetting and base access. DoD ID card holders do not need to be on the VARL. After graduation ceremonies conclude, graduated Airmen may secure individual passes for additional guests only in person at the Luke East gate visitor center — slow, first-come-first-served; graduates cannot telephone-sponsor non-DoD holders. Dependent ID cards are available at JBSA-Lackland, but the process consumes graduation-week family time; the FAQ recommends handling it elsewhere where possible.",
            "Graduation week — Wednesday: the Airman's Run (1.5-mile run; guests line the route — for most families the first glimpse of their Airman in 7.5 weeks); the BMT Informational Briefing; the New Spouse Orientation (for new Air Force/Space Force spouses, children welcome); and the Coin and Retreat Ceremony, where Airmen and Guardians receive the coin marking the transition from “trainee” to Airman/Guardian — families may “tap out” their loved one afterward. Town Pass follows. Thursday: the Graduation Parade (formal parade, pass in review; families may tap out Airmen afterward) plus additional on-installation family time. The schedule page notes Town Pass is currently on both days.",
            "LIVESTREAM (F-8): there is NO BMT livestream. Official USAF BMT posts (Jul 14 and Aug 25, 2025) state the Coin & Retreat Ceremony and Graduation Parade are recorded, not live-streamed; recordings are uploaded to the Gateway Wing YouTube channel within a few hours (Coin recording Wednesday afternoon, Graduation Parade recording Thursday afternoon), and photos to the Gateway Wing Flickr album about a week later. Any claim of a BMT livestream is flagged by the command as a fraudulent attempt to steal personal information or money.",
            "Space Force specifics: Guardian trainees fly in the same flights with a Space Force–specific curriculum added (21 hours of instruction per spaceforce.com); at the Coin Ceremony graduates receive the Airman or Guardian coin. After the first station: STARCOM's Guardian Support Program matches volunteer local “support families” with young Guardians (focus ages 18–24) at their first permanent duty station — currently for Guardians in the Colorado Springs area (Schriever and Peterson SFBs).",
          ],
          flags: [
            "F-2 — staleness stamp, printed as the command prints it: the official BMT FAQ at basictraining.af.mil stamps most of its entries “current as of 4 May 22” (a few entries carry later stamps). The 7.5-week length is corroborated by current airforce.com material; the BMT Commander's welcome letter is the per-class authority for a given week group.",
          ],
          links: [
            { label: "BMT FAQ (basictraining.af.mil)", url: "https://www.basictraining.af.mil/" },
            { label: "STARCOM — Guardian Support Program", url: "https://www.starcom.spaceforce.mil/Resources/Guardian-Support-Program/" },
          ],
          source: "BMT FAQ & Schedule of Events (basictraining.af.mil) · USAF BMT official posts (2025) · STARCOM",
        },
      ],
    },
    {
      key: "cg",
      label: "Coast Guard — Cape May",
      tileSub: "TRACEN Cape May, NJ — the only accession point; “no news is good news”; NO Family Day",
      intro:
        "Training Center Cape May is the nation's only Coast Guard enlisted accession point and recruit training center. Its family posture is the plainest of any branch — and it has no Family Day, which this card prints as a contrast because families assume one exists.",
      entries: [
        {
          id: "cg-cape-may",
          name: "Cape May families — mail from week two, setback calls, Friday graduation, no Family Day",
          summary:
            "The Coast Guard's own framing, quoted because it is the command's sentence: “No news is good news.” The best source of information is the recruit themselves, when afforded phone opportunities and when they write home. If a recruit is set back in training at any point, they will be afforded the opportunity to make a phone call; recruits are REQUIRED to contact their family if their training is disrupted and they will not graduate on time. “If you have not heard from your recruit, no news is good news.” In later weeks recruits get additional opportunities to call home with updates about graduation, their orders, and next steps.",
          who: "Families of recruits at U.S. Coast Guard Training Center Cape May, New Jersey.",
          body: [
            "Privacy: “The Coast Guard strictly adheres to all Federal Laws regarding recruit privacy. No person at Training Center Cape May is permitted to release information about a recruit or their status without written permission from that recruit.”",
            "Mail: recruits receive their mail daily, beginning on Wednesday of week two; they have time every day to read and write letters, but the time is limited, so replies “may be sporadic and infrequent” — letters are still encouraged and help motivation. Mailing address, as the page publishes it: SR (Last Name, 1st Initial) / Company (ex: Foxtrot-187) ___ Hall / 1 Munro Ave. / USCG TRACEN Cape May / Cape May, NJ 08204. What recruits may receive: letters, small pictures (all photos must be in good taste and reflect the professional atmosphere of the training center), and two religious references (books, studies, etc.) — letters only, no care packages.",
            "Emergencies: the Recruit Training page itself quotes the Red Cross service — 24/7/365 at 1-877-272-7337 for death or serious illness of a family member or the birth of a child; messages can reach members anywhere, including ships at sea. The pinned card at the top of this section has the full picture.",
            "Graduation: normally held Fridays at 11:00 a.m., and can change for training-center needs or federal holidays. DEPOT graduations are at 10:00 a.m. in Ida Lewis Auditorium. Seasons: Indoor Season (Oct 2025 to approx. May 1, 2026) in the William R. Flores Gymnasium; Outdoor Season (approx. May 2, 2026 to Oct 2026) on the Parade Field — inclement weather moves outdoor ceremonies indoors, times unchanged. Attendance is capped at 4 guests per recruit due to space limitations; the guest slots are the recruit's, and registration links for family events are provided directly to family members by their recruits.",
            "LIVESTREAM (F-8): for those unable to attend the indoor graduation, TCCM “will make every effort to stream the ceremony on Facebook live @U.S.CoastGuardTrainingCenterCapeMay”; the Recruit Training page states “we live stream every recruit graduation on the official TCCM Facebook Page starting at 1100.” Print “every effort” with it — the command's own hedge. And the command's own line: “The Graduation webpage and the official TCCM social media page are the only official sources of information from the Training Center.”",
            "NO FAMILY DAY AT CAPE MAY — the contrast, printed plainly: Cape May's family events are an optional family breakfast Friday 8:30 a.m. and an on-base Thursday-evening family dinner, both at the Harborview, by recruit-provided registration link — and recruits will NOT be at the family breakfast or the Thursday dinner; the first opportunity to see your recruit is the graduation ceremony itself. (The official page prints prices for these meals; per this guide's no-prices rule they are not carried here.)",
          ],
          flags: [
            "F-10: the ZIP prints 08204, as the current page publishes it. Older official materials print 08204-5083 — the current page controls.",
          ],
          links: [
            { label: "TCCM — Recruit Training (FORCECOM)", url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/TraCen-Cape-May/Training/RecruitTraining/" },
          ],
          source: "USCG Training Center Cape May — Recruit Training & Graduation pages (FORCECOM)",
        },
      ],
    },
    {
      key: "after",
      label: "After Graduation",
      tileSub: "The new-member aftermath — leave, school, and the return of normal contact",
      intro:
        "Graduation is not the end of training — it is the handoff to job training. What the official pages support at the generic level: communication normalizes (the member has their phone back — Navy RTC returns boxed phones the day before graduation), and the next structured phase is AIT / SOI / tech school / A School, where contact is freer than boot camp but still set by the schoolhouse. Schoolhouse-specific contact rules vary and are not published at this level.",
      entries: [
        {
          id: "after-army-usmc",
          name: "Army and Marine Corps — straight into school, a short break after",
          summary:
            "Army: there is NO break between Basic Training and AIT — “in most cases you'll be given a few days to travel… but this isn't considered an official break.” OSUT combines BCT and AIT at one post with one graduation. AIT runs 4–52 weeks across 17 career fields; after AIT, graduates are typically given a short break, typically 10 days, before joining their unit. Trainees with an AIT location east of the Mississippi may have the option of traveling to AIT with family by privately owned vehicle (POV). Marine Corps: after graduation, 1 travel day + 10 days of leave, then the School of Infantry (SOI).",
          who: "Families planning post-graduation travel for Soldiers and Marines.",
          body: [
            "Marine families arranging the new Marine's travel home: if the family won't buy the Marine's tickets, provide the itinerary as soon as possible so SATO Travel can try to match it (Marines.com).",
            "Army framing for after training (GoArmy): families can attend graduation after required training; Soldiers get 30 days of paid leave per year; once training is complete, communication is by calls, email, video, and letters — the normal-contact era starts after school, not during it. Pay during training is on the 1st and 15th.",
          ],
          flags: [],
          links: [{ label: "Marines.com — FAQ for Parents", url: "https://www.marines.com/faq-for-parents" }],
          source: "GoArmy AIT page / “What to Consider” · Marines.com FAQ for Parents · 3-13 IN battalion page (POV)",
        },
        {
          id: "after-cg",
          name: "Coast Guard — local leave, then the START Program at Yorktown",
          summary:
            "Graduates may take local leave within 100 miles of Cape May from Friday 1200 until Saturday 2000 if they choose. All active-duty graduates then attend the five-day START Program (Sentinel Transformation & Readiness Training) at TRACEN Yorktown, VA, which exists to help recently graduated non-rates transition to active service. Reservists and CSPI recruits do NOT attend START.",
          who: "Families of Cape May graduates.",
          body: [],
          flags: [],
          links: [],
          source: "USCG Training Center Cape May — Graduation page (FORCECOM)",
        },
      ],
    },
  ],
};
