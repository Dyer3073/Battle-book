// Joining (future-member) content — Boot Camp, Becoming an Officer, and
// Get Ready entry fitness, transcribed from the researched packs in
// ~/workspace/military-app/joining/ (bootcamp.md, officer.md,
// entry-fitness.md). Official recruiting sources only; every figure the
// packs flag as conflicting is carried here as a flag with both figures
// printed — never smoothed. No pay, bonus, or "currently open" claims
// anywhere. Researched November 9, 2026.

export type JoiningSource = { label: string; url: string };

export type JoiningBlock = { heading: string; body?: string; bullets?: string[] };

export const JOINING_STANDING_NOTE =
  "Everything in this area comes from the branches' own recruiting sites and official publications, researched November 2026. Where two official pages disagree on a figure, both figures are printed and flagged — check with a recruiter for the current word on your own case.";

/* ------------------------------ Boot Camp ------------------------------ */

export type BootcampEntry = {
  branch: string;
  officialName: string;
  locations: string;
  length: string;
  framing: string;
  blocks: JoiningBlock[];
  graduation: string;
  flags: string[];
  sources: JoiningSource[];
};

export const BOOTCAMP_ENTRIES: BootcampEntry[] = [
  {
    branch: "Army",
    officialName: "Basic Combat Training (BCT)",
    locations: "Fort Moore, GA · Fort Jackson, SC · Fort Leonard Wood, MO · Fort Sill, OK",
    length: "About 10 weeks",
    framing:
      "“Basic Combat Training transforms volunteer civilians into Soldiers… over 10 weeks of tough, realistic training intended to build Soldiers who are disciplined, physically and mentally tough, and proficient at essential Soldier tasks.” Which post you go to depends on your job — combat-arms jobs train through One Station Unit Training (OSUT), which combines BCT and job training at one post.",
    blocks: [
      {
        heading: "The three phases",
        bullets: [
          "Red Phase — ends with the HAMMER field exercise",
          "White Phase — ends with the ANVIL field exercise",
          "Blue Phase — ends with THE FORGE, the capstone",
        ],
      },
      {
        heading: "What training covers",
        body: "The program names marksmanship, hand grenade employment, individual and buddy team movement techniques, medical and communication skills, and chemical, biological and nuclear survival — with inspections, drill and ceremonies running throughout.",
      },
      {
        heading: "The capstone — The Forge",
        body: "To earn the right to be called a Soldier, trainees must complete The Forge, “a culminating tough, realistic, and demanding tactical field exercise.” Per the Fort Jackson graduation program, during The Forge trainees “foot march approximately 45 miles in 81 hours with training missions conducted mostly at night and under heavy load. They sleep for 5 hours on the ground during the day…” Entering The Forge “is a privilege that must be earned by achieving the Army standard on all Soldier tasks to include physical fitness and discipline.”",
      },
    ],
    graduation:
      "A formal ceremony at the training post — at Fort Jackson, on Hilton Field — with a printed sequence: formation of the troops, presentation of colors, awards, the Soldier's Creed, pass in review, and the Army Song. Fort Jackson holds graduations approximately 46 weeks of the year. After BCT, Soldiers move on to Advanced Individual Training (AIT) for their job.",
    flags: [
      "Phase count: GoArmy and the Fort Jackson program describe three phases (Red, White, Blue); Fort Jackson's own weekly-update chart for families adds a Yellow phase at the front (Yellow in week 1, then Red/White/Blue). The three-phase structure is the standard description.",
    ],
    sources: [
      { label: "GoArmy — Path for Enlisted Soldiers", url: "http://www.goarmy.com/content/goarmy/en/careers-and-jobs/find-your-path/enlisted-soldiers.html" },
      { label: "U.S. Army Fort Jackson — History", url: "https://home.army.mil/jackson/about/history" },
      { label: "USMEPCOM — Basic Training Centers contact information", url: "https://www.mepcom.army.mil/Home/Applicants-and-Parents/Shipping-Out-to-Basic/Basic-Training-Contact/" },
      { label: "U.S. Army Training Center Fort Jackson — BCT Graduation Program (Nov 14, 2024)", url: "https://home.army.mil/jackson/2417/3135/2693/Graduation_Program_24-04_ForWeb.pdf" },
    ],
  },
  {
    branch: "Marine Corps",
    officialName: "Recruit Training (“boot camp”)",
    locations: "MCRD Parris Island, SC · MCRD San Diego, CA",
    length: "Approximately 13 weeks — Receiving is the first week, then 12 weeks of training",
    framing:
      "“Recruits will acquire the knowledge, discipline, teamwork, and fitness level required of a Marine through physical training, classroom instruction, and developing combat skills.” As a rule, those living west of the Mississippi River attend MCRD San Diego and those east of it attend MCRD Parris Island. A typical day runs breakfast → training/classes → lunch → training until dinner, with core-values discussion and coaching, evening preparation and squad-bay cleaning, one hour of free time, and 8 hours of sleep. Recruits make one phone call the night they arrive; after that, correspondence is by letters and postcards.",
    blocks: [
      {
        heading: "Receiving Week",
        body: "“Receiving week is 3–5 days processing to prepare recruits for their first day of actual Marine training. They complete paperwork, receive haircuts, are issued uniforms and gear, undergo medical evaluations, and take the Initial Strength Test.”",
      },
      {
        heading: "The four phases (Marines.com's own names)",
        bullets: [
          "Phase One: Foundation — discipline, structure, and learning to work as a cohesive unit; in-processing, initial strength testing, and foundational knowledge of the Marine Corps",
          "Phase Two: Immersion — pressure intensifies and physical demands increase; combat water survival, physical and combat conditioning, martial arts training, and academic instruction",
          "Phase Three: Transformation — brings it all together: tactical training, team problem solving, marksmanship training, further combat training, and field exercises",
          "Phase Four: Transition — after the Crucible, final physical and academic testing and preparation for graduation",
        ],
      },
      {
        heading: "The Crucible",
        body: "“The Marine Crucible is the final 54-hour training exercise that tests recruits on the knowledge, skills, and values taught throughout training. Those who complete the final challenge earn their Eagle, Globe, and Anchor, symbolizing their transformation from recruits to Marines.” Recruits “face grueling physical challenges, mental fatigue, and little sleep… designed to simulate the hardship of combat.”",
      },
    ],
    graduation:
      "Family Day is the day before graduation — “the purpose is to give family and friends a chance to see their Marine on base before the final graduation ceremony”; families may not visit before Family Day. Graduation-day specifics are published by each depot. After graduation, Marines receive one day of travel and ten days of leave before reporting to the School of Infantry (SOI).",
    flags: [
      "Crucible placement: Marines.com's Recruit Training page lists “the Crucible, a 54-hour culminating event” among its Phase Four items, while its Phase Three text and the parents' FAQ place the Crucible as the final exercise recruits complete to earn the title. It is presented here as the culminating event of training (end of Phase Three / start of the transition), per the FAQ's framing.",
    ],
    sources: [
      { label: "Marines.com — Recruit Training", url: "https://www.marines.com/become/recruit-training" },
      { label: "Marines.com — FAQ for Parents", url: "https://www.marines.com/faq-for-parents" },
      { label: "Marines.com (Educator Workshops) — High School Educators", url: "https://connect.marines.com/educators-workshops/high-school-educators.html" },
    ],
  },
  {
    branch: "Navy",
    officialName: "Recruit Training Command (RTC) — “Navy boot camp”",
    locations: "Naval Station Great Lakes, IL (the Navy's only enlisted training facility)",
    length: "9 weeks — see the flag below: official Navy pages also print 10 weeks, and about 8 weeks for Reserve recruits",
    framing:
      "“The first two weeks of training are the most challenging because you'll be shifting your perspective from civilian to Sailor… Training is physically, emotionally and academically challenging.” Recruits live in a barracks called a “ship,” named after an important ship in naval history, and train under a Recruit Division Commander (RDC). Daily physical training runs one hour a day, six days a week; to graduate, recruits must pass a Physical Readiness Test and a swim test (50-yard swim, five-minute prone float, clothing inflation).",
    blocks: [
      {
        heading: "The weeks, as Navy.com lays them out",
        bullets: [
          "Week 1: Processing — arrival phone call, then devices turned in; division assignment; medical, dental and fitness screening; uniforms, vaccinations, haircut; swim test (recruits who can't swim get instruction from Water Survival Instructors); classes in naval history, customs and courtesies, watch standing",
          "Weeks 2–3: Introduction — ships and aircraft, naval history, UCMJ, Sexual Assault Prevention & Response, basic seamanship practiced on the simulated vessel USS Marlinespike; first aid; man-overboard drills",
          "Weeks 4–6: Hands-On — weapons handling and the small arms trainer, firefighting training and first aid, drill, physical training, plus an academic test",
          "Weeks 7–8: Evaluation & Battle Stations — firefighting assessment, final personnel inspection, the Official Physical Fitness Assessment (PFA), and Battle Stations, the capstone",
          "Week 9: Junior Sailor & Graduation — professional development and small-unit leadership classes, then graduation",
        ],
      },
      {
        heading: "The capstone — Battle Stations",
        body: "“Using the latest technology, recruits are tested in a variety of shipboard scenarios that require the sum of their knowledge and ability. Battle Stations is a final test to determine if the new recruit is ready to join the fleet.”",
      },
    ],
    graduation:
      "Graduation is the Pass-In-Review ceremony in Week 9 — “a formal military event that acknowledges the new recruits' hard work and dedication,” with Sailors in dress uniforms. RTC livestreams graduation every Thursday at 9 a.m. CST on its Facebook and YouTube. After boot camp, Sailors go to A School for their rating or to a first duty station.",
    flags: [
      "Length — official Navy pages disagree, so all three figures stand: Navy.com's current boot camp page says 9 weeks (“For 9 weeks, you'll be completely immersed in Navy culture, tradition and heritage”); Navy.com's family FAQ says “It's a 10-week program that includes conditioning, marching, drilling, attending classes and weaponry” (which reads as a leftover from the previous 10-week course); and Navy.com's Reserve requirements page describes Reserve boot camp as “a program that lasts approximately eight weeks, at Recruit Training Command in Great Lakes, IL.”",
    ],
    sources: [
      { label: "Navy.com — Navy Boot Camp", url: "https://www.navy.com/navy-life/boot-camp" },
      { label: "Navy.com — FAQs for the Family of Enlisted Sailors", url: "https://www.navy.com/navy-life/what-families-can-expect" },
      { label: "Navy.com — Requirements to Join the U.S. Navy Reserve", url: "https://www.navy.com/joining/ways-to-join/reserve/navy-reserve-requirements" },
      { label: "Recruit Training Command (official Navy site)", url: "https://www.bootcamp.navy.mil/" },
    ],
  },
  {
    branch: "Air Force",
    officialName: "Basic Military Training (BMT)",
    locations: "Joint Base San Antonio–Lackland, TX (the Air Force's only enlisted basic training site)",
    length: "7.5 weeks",
    framing:
      "BMT is run by the 37th Training Wing. “BMT is 7.5 weeks long. Most trainees arrive on the Tuesday of ‘Zero Week.’ Graduation Parade is almost always on a Thursday, so if a trainee progresses through training normally (i.e., no delays), their graduation date would be the 7th Thursday after their arrival.” In airforce.com's framing, in BMT “trainees learn military structure, the core values of the U.S. Air Force, and to prepare both mentally and physically for life as an Airman.”",
    blocks: [
      {
        heading: "The weeks of training (WOTs)",
        body: "Early weeks carry “lots of in-processing appointments, both for personnel systems updates and medical processing”; as weeks go on, most time is spent in and around the squadron area under the Military Training Instructors. Trainees go to PACER FORGE in the 6th week and take the end-of-course written exam on the Saturday of the 6th week; the 7th week is dedicated to graduation preparation and final personnel appointments before travel to Technical Training.",
      },
      {
        heading: "The capstone — PACER FORGE",
        body: "“Primary Agile Combat Employment Range, Forward Operations Readiness Generation Exercise, or PACER FORGE, is a fast-paced, two-day scenario-based deployment that mirrors the Air Force's force generation process and reinforces concepts introduced at BMT. PACER FORGE is executed in the sixth week of BMT.”",
      },
    ],
    graduation:
      "Graduation week opens Wednesday with the Airman's Run (a 1.5-mile run at the Pfingston Reception Center), followed by the Airman's Coin and Retreat Ceremony — “in which Airmen receive the coveted Airmen or Guardian coin that signifies their transition from ‘trainee’ to ‘Airman.’ Upon presentation of the coin by their Military Training Instructor, trainees will officially become Airmen and Guardians” — after which graduates are released for town pass. Thursday is Graduation Day: the formal Graduation Parade at the JBSA-Lackland parade grounds, beginning at 9:00 a.m.",
    flags: [
      "The BMT FAQ's dated entries are stamped “current as of 4 May 22” — the 7.5-week figure is corroborated by current airforce.com career pages, which list “Basic Military Training — 7.5 weeks” throughout.",
    ],
    sources: [
      { label: "Air Force Basic Military Training (official site)", url: "https://www.basictraining.af.mil/" },
      { label: "BMT FAQ — Frequently Asked Questions", url: "https://www.basictraining.af.mil/About-Us/Frequently-Asked-Questions/" },
      { label: "BMT — Schedule of Events (graduation information)", url: "https://www.basictraining.af.mil/Home/BMT-Graduation-Information/Schedule-of-Events/" },
      { label: "AirForce.com — Pararescue career page (BMT length/location listing)", url: "https://www.airforce.com/careers/special-warfare-and-combat-support/special-warfare/pararescue" },
    ],
  },
  {
    branch: "Space Force",
    officialName: "Basic Military Training (BMT) — the Air Force course, plus a Space Force curriculum",
    locations: "Joint Base San Antonio–Lackland, TX, training with Air Force trainees",
    length: "The same BMT as Airmen (7.5 weeks), with 21 hours of Space Force–specific instruction added inside it",
    framing:
      "The Space Force runs no separate enlisted basic training of its own. As the Space Force states it: “Guardians attend the same Basic Military Training as enlisted Airmen at Joint Base San Antonio–Lackland, Texas, with the addition of a Space Force–specific curriculum. This includes physical training and testing and 21 hours of instruction covering emotional intelligence, Space Force Structure and senior-leader briefings about military doctrine.” Everything in the Air Force entry applies — same flights, same Military Training Instructors, same PACER FORGE and graduation week — plus the Space Force curriculum.",
    blocks: [
      {
        heading: "What to expect",
        body: "The Air Force BMT experience (see the Air Force entry), plus the 21 hours of Space Force–specific instruction above. At the BMT coin ceremony, trainees become “Airmen and Guardians” — Guardian trainees receive the Guardian coin.",
      },
    ],
    graduation:
      "Enlisted Guardian graduation ceremonies are the BMT ceremonies at Lackland Air Force Base in San Antonio, Texas — the Airman's Run, the Coin Ceremony, and the Graduation Parade (see the Air Force entry).",
    flags: [
      "SpaceForce.com's families page says only that a family member “will spend five to nine weeks in military training, depending on which type they attend: Basic Military Training (BMT), Officer Training School (OTS)” — a range spanning two different courses, not a BMT figure, so it is not rendered as one here.",
      "An older official characterization: a 2023 Space Force news article described BMT as “an intensive eight-week program.” That predates the current 7.5-week BMT; the 7.5-week figure from the Air Force entry is the current one.",
    ],
    sources: [
      { label: "U.S. Space Force — Frequently Asked Questions", url: "https://www.spaceforce.com/faq" },
      { label: "U.S. Space Force — What to Expect as a Guardian", url: "https://www.spaceforce.com/what-to-expect/for-guardians" },
      { label: "U.S. Space Force — Information for Families", url: "https://www.spaceforce.com/what-to-expect/for-families" },
      { label: "BMT — Schedule of Events (graduation information)", url: "https://www.basictraining.af.mil/Home/BMT-Graduation-Information/Schedule-of-Events/" },
    ],
  },
  {
    branch: "Coast Guard",
    officialName: "Recruit Training (“boot camp”)",
    locations: "Coast Guard Training Center Cape May, NJ — “our nation's only Coast Guard enlisted accession point and recruit training center”",
    length: "8 weeks — “Recruit basic training is an eight-week course of instruction with new classes starting most weeks”",
    framing:
      "“You'll be challenged mentally and physically every day, pushed and tested harder than you ever thought possible. When you graduate, you'll be proud and confident, knowing the challenges you overcame.” Before shipping, recruits should “closely study The Helmsman, your guide for success at boot camp,” and talk to their recruiter for do's and don'ts. Recruits are paid by automatic deposit during training, may receive letters (no care packages), and may attend weekly religious services.",
    blocks: [
      {
        heading: "How the course runs — milestones, not named phases",
        body: "The Coast Guard does not publish a named phase system; its own description runs on milestones. Week 1: “you'll get oriented, receive your uniforms, take your entrance fitness test, and meet your company commanders, who will be your instructors, leaders, and coaches. From them, you'll learn self-discipline and how to become a productive Coast Guard member.”",
      },
      {
        heading: "Across the course",
        bullets: [
          "“An intense academic program” covering everything “from military justice to ethics and Coast Guard history”",
          "Hands-on training in “firearms, seamanship, firefighting, damage control, and first aid”",
          "About halfway through: recruits order their assignment preferences from available locations and unit types, and “you'll receive your first assignment orders about a week later”",
          "Last weeks: recruits “can earn limited on-base or in-town liberty (time off) in the last weeks of training”",
        ],
      },
      {
        heading: "After graduation",
        body: "All active-duty graduates next attend the five-day START Program (Sentinel Transformation & Readiness Training) at TRACEN Yorktown, VA, before leave/reporting — reservists and CSPI recruits do not attend.",
      },
    ],
    graduation:
      "“Recruit training graduations are normally held on Fridays at 11:00 a.m.” — outdoors on the Parade Field in outdoor season (about May–October) or indoors in the William R. Flores Gymnasium in indoor season (about October–May), weather permitting the outdoor plan. Attendance is capped at 4 guests per recruit, invited by the recruit during the last weeks of training; the ceremony is livestreamed on the Training Center's Facebook page. After the ceremony, graduates are free to depart on their orders.",
    flags: [],
    sources: [
      { label: "USCG FORCECOM — Recruit Training (TRACEN Cape May)", url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/TraCen-Cape-May/Training/RecruitTraining/" },
      { label: "GoCoastGuard — Basic Training", url: "https://gocoastguard.com/get-started/basic-training" },
      { label: "USCG FORCECOM — Graduation (TRACEN Cape May)", url: "https://www.forcecom.uscg.mil/Our-Organization/FORCECOM-UNITS/TraCen-Cape-May/Visitor-Services/Graduation/" },
    ],
  },
];

/* --------------------------- Becoming an Officer --------------------------- */

export type OfficerEntry = {
  branch: string;
  schoolName: string;
  location: string;
  length: string;
  framing: string;
  before?: string;
  qualifications: string[];
  qualificationsNote?: string;
  otherRoutes: string;
  flags: string[];
  sources: JoiningSource[];
};

export const OFFICER_ENTRIES: OfficerEntry[] = [
  {
    branch: "Army",
    schoolName: "Officer Candidate School (OCS)",
    location: "Fort Benning, GA (3rd Battalion, 11th Infantry Regiment)",
    length: "12 weeks",
    framing:
      "“Officer Candidate School is the Army's 12-week intensive program designed for enlisted Soldiers—and civilians with college degrees—to earn a commission to become an Officer.” The battalion's mission is to “train, educate, and commission officers in order to provide the Army with leaders of character who live by the Army Ethic.” Candidates are “challenged physically, mentally, academically, and emotionally,” and the school's advice is blunt: “Come here in shape, not to get in shape!” Graduates commission as Second Lieutenants and move on to their branch's Basic Officer Leader Course (BOLC).",
    before:
      "Civilians with no prior Army experience attend Basic Combat Training first — “Before enrolling in OCS, civilians must complete the 10-week Army Basic Combat Training or equivalent military basic skills course.” College seniors may apply early and be selected to start OCS after completing their degree.",
    qualifications: [
      "Be a U.S. citizen.",
      "Be between 19 and 32 years old — “you must enter active duty or ship to training by your 33rd birthday and accept commission prior to age 34.” (Army Reserve applicants: between 18 and 32, with the same ship-by-33 / commission-before-34 deadlines.)",
      "Hold a bachelor's degree — required “not necessarily at the start of the process, but by the time you are commissioned as an Officer.”",
      "Be eligible for a secret security clearance.",
      "Current service members: no more than six years of Active Federal Service (AFS) upon arrival at OCS.",
      "Meet Army physical/medical accession standards.",
    ],
    qualificationsNote: "Qualifications as GoArmy's OCS page publishes them.",
    otherRoutes:
      "The U.S. Military Academy at West Point and Army ROTC build the degree and initial training into a four-year college program and commission graduates as Second Lieutenants who then attend BOLC. Direct commission brings in professionals with specialized credentials (law, medicine, chaplaincy, and similar fields); direct-commission candidates attend the six-week Direct Commission Course at Fort Benning instead of OCS. Enlisted Soldiers can also earn a degree and a commission through the two-year Green to Gold program.",
    flags: [
      "The recruiting page vs. the Army's own OCS regulation: Army Regulation 350–51, United States Army Officer Candidate School (15 May 2026, effective 15 June 2026) — which by its own purpose statement “prescribes the policies, eligibility requirements, and administrative procedures for submitting and processing applications for In-Service Officer Candidate School” — lists different and additional gates in its paragraph 1-7: applicants must be U.S. citizens, achieve a General Technical (GT) score of 110 or higher on the ASVAB (a figure GoArmy's OCS page does not list), have a SECRET security clearance at time of application (not merely be eligible for one), and hold a bachelor's degree from a regionally accredited college or university; a person is ineligible if they have 10 or more years of active Federal service or would be over 40 years of age when appointed as a commissioned officer. The two documents govern different doors into the same school — GoArmy's page addresses recruiting accessions, the regulation addresses in-service applications — but their numbers are not the same, and both are printed here rather than blended.",
      "Post name: Army pages published in late 2025 and 2026 again say Fort Benning; sources from 2023–2025 may say Fort Moore, the name the post carried in that period.",
    ],
    sources: [
      { label: "GoArmy — Officer Candidate School", url: "https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/ocs" },
      { label: "GoArmy — Officer Training (BOLC)", url: "https://www.goarmy.com/army-life/officer-training" },
      { label: "U.S. Army Fort Benning — Officer Candidate School", url: "https://www.benning.army.mil/infantry/199th/OCS/" },
      { label: "Army Regulation 350–51 — United States Army Officer Candidate School (PDF)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN42743-AR_350-51-000-WEB-1.pdf" },
    ],
  },
  {
    branch: "Marine Corps",
    schoolName: "Officer Candidates School (OCS) — via OCC or PLC",
    location: "Marine Corps Base Quantico, VA",
    length: "OCC: 10 weeks · PLC: two 6-week summers, or one 10-week session",
    framing:
      "OCS is the Corps' screening and evaluation ground for officer candidates — Marines.com's requirements page stresses that “Officer candidates must pass multiple physical tests at OCS—and that expectation doesn't end there.” Marines.com lists four paths to a Marine commission — the U.S. Naval Academy, NROTC (Marine Option), the Platoon Leaders Class (PLC), and the Officer Candidates Course (OCC) — and PLC and OCC are the two that run through OCS. The application runs through an Officer Selection Officer (OSO), who is the candidate's guide and the Corps' gatekeeper for eligibility questions. OCC graduates commission as Second Lieutenants and continue to The Basic School (TBS), also at Quantico; PLC candidates commission at graduation from college.",
    qualifications: [
      "Have a four-year college degree at the time of commissioning.",
      "Be a U.S. citizen.",
      "Be at least 20 years old — the page adds “(discuss eligibility with an Officer Selection Officer).”",
      "Demonstrate strong moral character and leadership potential; pass a criminal background check with no felony convictions.",
      "Meet the Corps' physical and medical fitness standards.",
    ],
    qualificationsNote: "Qualifications as Marines.com's Marine Officer Requirements page publishes them.",
    otherRoutes:
      "The U.S. Naval Academy at Annapolis commissions Marine Second Lieutenants alongside Navy Ensigns, and NROTC (Marine Option) commissions students at civilian colleges — Academy and NROTC graduates commission without attending OCS and go straight to The Basic School. PLC and OCC (above) are the routes for students and graduates who did not take the Academy or ROTC path.",
    flags: [
      "No maximum age is published on Marines.com's current requirements page: the page states only the minimum (20) and defers to the OSO. A “commission before your 28th birthday” ceiling is widely published in secondary sources, but it does not appear on the current Marines.com requirements page, so it is not printed here as the Corps' published figure — anyone quoting an upper limit should confirm it with an OSO. (One age figure Marines.com does publish: eligibility for the NROTC scholarship includes being at least 17 by September 1 of the first college year and younger than 27 on December 31 of the graduation/commissioning year, with a qualifying score — AFQT 74, ACT 22, or SAT 1000 combined Math + Evidence-Based Reading and Writing.)",
    ],
    sources: [
      { label: "Marines.com — Marine Officer", url: "https://www.marines.com/become/marine-officer" },
      { label: "Marines.com — Marine Officer Requirements", url: "https://www.marines.com/become/marine-officer/requirements.html" },
    ],
  },
  {
    branch: "Navy",
    schoolName: "Officer Candidate School (OCS)",
    location: "Officer Training Command Newport, Newport, RI",
    length: "13 weeks, in four phases",
    framing:
      "OCS is “an intensive 13-week program in Newport, Rhode Island… designed to transform college graduates (or prior-Enlisted with degrees) into Commissioned Navy Officers, focusing on developing leadership, physical fitness, and instilling Navy values and knowledge.” Graduates commission as Ensigns. Navy.com contrasts OCS with the Academy and ROTC, which are “designed for different stages of a person's educational journey” — OCS is the post-degree door.",
    qualifications: [
      "Be a U.S. citizen (the page notes some officer communities require U.S. citizenship).",
      "Be at least 19 years old and meet the age requirements for the selected Officer program — the Navy publishes no single OCS age cap; the ceiling is set by the officer community (program) the candidate applies to.",
      "Earn a bachelor's degree from an accredited college or university before commissioning.",
      "Meet Navy medical standards and pass a comprehensive medical examination.",
      "Meet Navy physical fitness standards before reporting to OCS.",
      "Complete the officer application process, including interviews and selection by an Officer community selection board; some communities add coursework, certifications, or aptitude-test requirements of their own.",
      "Navy.com's officer FAQ adds that the ASVAB is required for OCS (and ODS), and that candidates may substitute an ACT score of 23 or higher, or an SAT score of 1000–1100.",
    ],
    qualificationsNote: "Qualifications as Navy.com's OCS page publishes them.",
    otherRoutes:
      "The U.S. Naval Academy is a four-year undergraduate institution combining a bachelor's degree with officer training, commissioning graduates on graduation day. NROTC lets students attend a participating civilian college or university, completing military training alongside their coursework, and commission when they earn their degree. Professionals who are already credentialed — medicine, dentistry, nursing, law, chaplaincy, engineering — receive direct commissions and attend Officer Development School (ODS), a five-week course at Newport for officers who are already commissioned before they arrive, instead of OCS. Enlisted Sailors with deep technical experience can also commission as Limited Duty Officers (LDOs).",
    flags: [
      "Navy.com's own pages state the age floor two ways: the OCS page gives “at least 19” plus a program-specific ceiling, while Navy.com's officer FAQ summarizes the basic OCS requirements as “age (19–32).” Treat 19–32 as the FAQ's general summary only; the binding upper limit for any given applicant is the one their chosen officer community publishes.",
    ],
    sources: [
      { label: "Navy.com — Officer Candidate School", url: "https://www.navy.com/joining/ways-to-join/officer/officer-candidate-school" },
      { label: "Navy.com — Become a Commissioned Officer in the U.S. Navy", url: "https://www.navy.com/joining/ways-to-join/officer" },
    ],
  },
  {
    branch: "Air Force",
    schoolName: "Officer Training School (OTS)",
    location: "Maxwell Air Force Base, Montgomery, AL (Air University's Holm Center)",
    length: "8.5 weeks per AirForce.com — see the flag: the Air Force fact sheet says 8 weeks plus distance learning",
    framing:
      "The Air Force's school is a Training school, not a Candidate school. Per the fact sheet, “The purpose of OTS is to train and develop new officers to fulfill Air Force and Space Force active duty, Reserve and Air National Guard requirements, in partnership with the U.S. Air Force Academy and Air Force ROTC,” and “the purpose of the course is to build the foundation necessary to produce warrior-minded leaders of character.” Most graduates go on to follow-on training for their career field.",
    qualifications: [
      "A bachelor's degree — OTS is the Air Force's commissioning route for people who already hold one; eligibility for line-officer OTS is published in the OTS Program Announcement maintained by the Air Force Accessions Center, and selection is competitive and board-based.",
      "The Air Force Officer Qualifying Test (AFOQT) is part of the application. Air Force career-field application documents publish the minimums for their field — for example, the FY27 Special Tactics Officer application sets minimum AFOQT scores of 15 verbal / 10 quantitative.",
      "U.S. citizenship and the ability to obtain a security clearance are required in the published career-field applications (the FY27 Special Tactics Officer application lists both, at overview level).",
      "Medical and physical screening are part of the application process; career fields publish their own fitness gates (special-warfare applicants, for example, must complete an Initial Fitness Test).",
    ],
    qualificationsNote: "As the Air Force publishes them — the general pages name the degree and the process; the figures live in career-field application documents.",
    otherRoutes:
      "The U.S. Air Force Academy and Air Force ROTC are the other two primary sources — OTS exists alongside them and absorbs the difference between their output and the Air Force's officer requirements. Direct appointments for professionals also exist: health professionals such as doctors, dentists, and highly specialized nurses attend the first five weeks of OTS and off-ramp once they meet graduation requirements, and a separate 15-day Reserve Commissioned Officer Orientation serves hard-to-recruit Reserve medical officers.",
    flags: [
      "Course length — official Air Force sources disagree, so both stand: AirForce.com's OTS page describes an 8.5-week program built in five modules, “designed for those with a college degree”; the Air Force's own OTS fact sheet (marked current as of September 2023) describes “30 hours of pre-requisite distance learning and eight weeks of military training and leadership development for college graduates,” also organized in five modules.",
      "No single general OTS age range is published on AirForce.com's general OTS pages (as retrieved November 9, 2026). The exact figures live in career-field application documents and differ by field: civilian Combat Rescue Officer applicants must “be between 18 and 39 years of age at the time of commissioning,” and Special Tactics Officer applicants must be “39 years old or younger at the time of applying” (both FY27 applications, AirForce.com). Those same FY27 applications set a minimum 2.5 GPA — a career-field figure, not a published general OTS rule. Third-party sites quote several other Air Force age ceilings; none of them is printed here, because none appears on the Air Force's general OTS pages.",
    ],
    sources: [
      { label: "U.S. Air Force — Officer Training School fact sheet", url: "https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104479/officer-training-school/" },
      { label: "AirForce.com — Officer Training School", url: "https://www.airforce.com/education/military-training/ots" },
      { label: "AirForce.com — Special Tactics Officer (STO) Application FY2027 (PDF)", url: "https://www.airforce.com/content/dam/airforce/en/pdf/19ZXA%20Special%20Tactics%20Officer%20Application%20FY27.pdf" },
      { label: "AirForce.com — Combat Rescue Officer Application FY27 (PDF)", url: "https://www.airforce.com/content/dam/airforce/en/pdf/Combat%20Rescue%20Officer%20Application%20FY27.pdf" },
    ],
  },
  {
    branch: "Space Force",
    schoolName: "No separate school — commissions through Air Force routes (OTS / AFROTC / USAFA)",
    location: "Maxwell AFB, AL for the OTS route (see the Air Force entry)",
    length: "Same as Air Force OTS",
    framing:
      "There is no Space Force OCS. The Space Force is part of the Department of the Air Force and commissions its officers through the Air Force's sources. Space Systems Command's official guide to becoming a Guardian states it exactly this way: “If you are in college or already have an undergraduate degree, it's possible to serve in the USSF as an officer. Commissioning opportunities exist for those with bachelor's degrees through a program called Officer Training School (OTS) and those pursuing degrees in the Reserve Officer Training Corps (ROTC) program.” It adds that the U.S. Air Force Academy (USAFA) “is also an option if you want to serve as an Officer Guardian,” and that because “the USSF falls under the Department of the Air Force… it'll be an Air Force recruiter you talk to.” The Air Force's OTS fact sheet states plainly: “OTS is also responsible for commissioning U.S. Space Force Officers.”",
    qualifications: [
      "The Space Force publishes no separate qualification list of its own in these sources — a bachelor's degree and the qualifications of the Air Force route you commission through (OTS, AFROTC, or USAFA) apply. See the Air Force entry, including its flags on course length and age figures.",
    ],
    qualificationsNote: "Per Space Systems Command's guide to becoming a Guardian and the Air Force OTS fact sheet.",
    otherRoutes:
      "After commissioning, Guardians from all three sources — ROTC, USAFA, and OTS — attend the Space Force's own Officer Training Course (OTC) for initial skills training, “a multidisciplinary program that covers space operations, intelligence, cyber operations, and force modernization (acquisitions & developmental engineering).” OTC is job training for officers who have already commissioned, not a candidate school.",
    flags: [],
    sources: [
      { label: "U.S. Space Force, Space Systems Command — From Earth to Orbit… A Guide to Becoming a Guardian!", url: "https://www.ssc.spaceforce.mil/Newsroom/Article-Display/Article/3768622/from-earth-to-orbita-guide-to-becoming-a-guardian" },
      { label: "U.S. Air Force — Officer Training School fact sheet", url: "https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104479/officer-training-school/" },
      { label: "U.S. Space Force — Officer Career Path Narrative (PDF)", url: "https://www.spaceforce.mil/Portals/2/Documents/SAF_2026/Officer_Career_Path_Narrative.pdf" },
    ],
  },
  {
    branch: "Coast Guard",
    schoolName: "Officer Candidate School (OCS)",
    location: "U.S. Coast Guard Academy, New London, CT (convenes three times a year)",
    length: "12 weeks per GoCoastGuard.com — see the flag: the PY25 Officer Application Guide says 17 weeks",
    framing:
      "OCS is “the Coast Guard's general officer commissioning program, open to civilians, prior service members, and Coast Guard enlisted members.” For degree holders, “OCS is the primary entry point to becoming a Coast Guard officer.” The Coast Guard is candid that “the OCS application process is one of the most competitive of any Coast Guard officer program. Candidates must demonstrate leadership skills, project management experience, and strong academic credentials.” Applications are reviewed at a competitive selection panel; the process includes a recruiter screening, a commissioning physical and height/weight standards, and an interview board of three Coast Guard officers. Graduates are appointed as Ensigns (O-1) — most on a Reserve commission, with a Temporary Regular commission for qualifying Coast Guard members.",
    qualifications: [
      "Age (both OCS-R and OCS-T): minimum 21, maximum 41, as of September 30 of the fiscal year in which the selection panel convenes.",
      "Education (OCS-R — the civilian/prior-service route): a baccalaureate or higher degree from an accredited college or university. College seniors graduating after the application deadline may apply with a letter from their school stating their degree major and conferral date.",
      "Education and service (OCS-T — the route for serving Coast Guard enlisted members): must be active duty in the Coast Guard, E-5 or above, with four years of active duty, at least two of them in the Coast Guard; the degree requirement can alternatively be met with ACE-recommended scores on the five general CLEP exams, or one year of college (30 semester hours) including a college-level mathematics course.",
      "Prior-service cap (OCS-R): no more than 12 years of non-Coast Guard active military service as of the date of accession.",
      "The guide's OCS table does not carry a citizenship line; citizenship for officer applicants is handled in the Coast Guard Recruiting Instruction the guide references (COMDTINST 1100.2).",
    ],
    qualificationsNote: "Qualifications as the Coast Guard Recruiting Command's PY25 Officer Application Guide (Section VII) publishes them — the most detailed official publication of the eligibility rules.",
    otherRoutes:
      "The U.S. Coast Guard Academy in New London is the service's four-year academy — graduates earn a Bachelor of Science and a commission, and the application is normally due by January 15. The College Student Pre-Commissioning Initiative (CSPI) is the Coast Guard's college scholarship route (the Coast Guard runs no ROTC of its own): students receive the scholarship while finishing their bachelor's degree, then attend OCS to earn their commission. Direct Commission Officer (DCO) programs commission specialists directly — the Recruiting Command lists twelve, covering fields such as aviation, cyber, engineering, law, health services, intelligence, licensed merchant mariners, and maritime academy graduates — and, per GoCoastGuard.com, “can even offer you a higher starting rank.”",
    flags: [
      "Course length — official Coast Guard sources disagree, so both stand: GoCoastGuard.com's current OCS page says “OCS is an intensive 12-week course of instruction in leadership and military subjects to prepare you for any Coast Guard officer career”; the Coast Guard Recruiting Command's PY25 Officer Application Guide (updated 21 MAR 2024) describes OCS as “a highly specialized, 17-week course of instruction in leadership and management, seamanship, navigation, law enforcement, and military subjects.” The recruiting website is the newer statement; the guide's eligibility rules (above) remain the most detailed official publication of them.",
    ],
    sources: [
      { label: "GoCoastGuard.com — Officer Candidate School (OCS)", url: "https://www.gocoastguard.com/get-started/officer-applications/officer-candidate-school-ocs" },
      { label: "GoCoastGuard.com — Officer Applications", url: "https://www.gocoastguard.com/get-started/officer-applications" },
      { label: "Coast Guard Recruiting Command — PY25 Officer Application Guide (PDF)", url: "https://cms.gocoastguard.com/sites/default/efs/inline/PY25%20Officer%20Application%20Guide_0.pdf" },
    ],
  },
];

/* ----------------------------- Get Ready (entry fitness) ----------------------------- */

export const GET_READY_DISCLAIMER =
  "This is general preparation information, not medical advice. Train within your own limits, build up gradually, and stop and get checked out if something hurts in a way that doesn't feel right.";

export type EntryFitnessEntry = {
  branch: string;
  gateTitle: string;
  gateIntro: string;
  standards: { label: string; value: string }[];
  standardsNote?: string;
  waitingTitle: string;
  waiting: string;
  prepGuidance: string;
  flags: string[];
  sources: JoiningSource[];
  planFocus: string;
  runEvent: string;
  calisthenics: string[];
  selfCheck: string[];
};

export const ENTRY_FITNESS_ENTRIES: EntryFitnessEntry[] = [
  {
    branch: "Marine Corps",
    gateTitle: "The Initial Strength Test (IST) — pass it to begin recruit training",
    gateIntro:
      "The Marine Corps is the one branch that publishes a named, pass-before-you-train fitness test on its recruiting site. “All new recruits must: Pass The Initial Strength Test, or IST, to demonstrate their physical fitness. The IST consists of pull-ups or push-ups, plank pose, and a 1.5-mile timed run.” And: “To even begin recruit training, aspiring Marines must pass the IST. Passing the IST means you can handle the physical requirements expected of every Marine. It is recommended that recruits report to training with scores well above the minimum standards.”",
    standards: [
      { label: "Pull-ups / push-ups — Male", value: "3 pull-ups or 34 push-ups (2:00 time limit)" },
      { label: "Pull-ups / push-ups — Female", value: "1 pull-up or 15 push-ups (2:00 time limit)" },
      { label: "Run — Male", value: "1.5 mile run in 13:30" },
      { label: "Run — Female", value: "1.5 mile run in 15:00" },
      { label: "Plank", value: "40 second plank" },
    ],
    standardsNote: "IST minimum standards, quoted exactly as published on marines.com's Enlistment Requirements page.",
    waitingTitle: "The tests waiting in training",
    waiting:
      "The Physical Fitness Test (PFT) — annual for every Marine, and taken in recruit training: pull-ups or push-ups, plank pose, and a three-mile run. And the Combat Fitness Test (CFT): an 880-yard sprint, repeatedly lifting a 30-pound ammo can overhead, and a 300-yard course featuring combat crawls, agility runs, casualty drags, fireman's carries, and grenade throws (the three events are Movement to Contact, Ammunition Lift, and Maneuver Under Fire). Scoring tables live on marines.com and in the members' Fitness section — they are not reproduced here.",
    prepGuidance:
      "The Corps' published preparation route is the Delayed Entry Program (DEP): “The Delayed Entry Program (DEP) allows future Marines to train together with Recruiters to maintain their eligibility and prepare for recruit training.” Poolee training with the recruiting station is how the Corps expects you to get ready — and its own advice is to report with scores well above the minimum standards.",
    flags: [
      "Plank discrepancy: marines.com's enlisted requirements page lists the IST plank as a “40 second plank”; marines.com's officer requirements page lists “40 second plank (1:03 minimum)” alongside the same pull-up/push-up and run minimums. Both wordings are official marines.com text; the enlisted-page figures are the ones quoted above, and the discrepancy is flagged rather than silently merged.",
    ],
    sources: [
      { label: "Marines.com — Enlistment Requirements", url: "https://www.marines.com/become/requirements" },
      { label: "Marines.com — Marine Officer Requirements", url: "https://www.marines.com/become/marine-officer/requirements.html" },
    ],
    planFocus:
      "The IST events: the 1.5-mile run, pull-ups or push-ups, and the plank. Build all three — the run for time, the upper-body event for reps, and short daily plank holds.",
    runEvent: "1.5-mile run",
    calisthenics: ["Pull-ups or push-ups", "Plank holds"],
    selfCheck: [
      "Run 1.5 miles in 13:30 (male minimum)",
      "Run 1.5 miles in 15:00 (female minimum)",
      "Do 3 pull-ups or 34 push-ups in 2:00 (male minimum)",
      "Do 1 pull-up or 15 push-ups in 2:00 (female minimum)",
      "Hold a 40-second plank",
    ],
  },
  {
    branch: "Army",
    gateTitle: "The Occupational Physical Assessment Test (OPAT) — matched to your job's category",
    gateIntro:
      "The Army's published entry assessment is occupational, not general: the OPAT measures a recruit against the physical-demand category of the job they signed for. The Army describes four categories — Heavy (black), Significant (gray), Moderate (gold), and Unqualified (white) — and four tests: the standing long jump, the seated power throw (a 4.4-pound / 2-kilogram medicine ball), the strength deadlift (a hex-bar sequence “starting with 120 pounds, working up to 220 pounds”), and the interval aerobic run (20-meter shuttles), “always performed last.” The test is the same for men and women — categories are set by the job, not the person. Per the Army's recruiting leadership: “no one fails it. You can retake it as many times as necessary. It just means you're not ready to ship to initial military training.”",
    standards: [
      {
        label: "Black (Heavy) — jobs “that require lifting or moving 99 pounds or more”",
        value:
          "“a minimum of 5 feet, 3 inches in the standing long jump; 14 feet, 9 inches for the seated power throw; 160 pounds for the strength deadlift; and a 10:14 minute mile over the course of 43 shuttles.”",
      },
      {
        label: "Gray (Significant) — “frequent or constant lifting of 41 to 99 pounds”",
        value:
          "“a minimum of 4 feet, 7 inches in the standing long jump; 13 feet, 1 inch for the seated power throw; 140 pounds for the strength deadlift; and a 10:20 minute mile over the course of 40 shuttles.”",
      },
      {
        label: "Gold (Moderate) — jobs with lifting “up to 40 pounds”",
        value:
          "“a minimum of 3 feet, 11 inches in the standing long jump; 11 feet, 6 inches for the seated power throw; 120 pounds for the strength deadlift; and a 10:27 minute mile over the course of 36 shuttles.”",
      },
      { label: "Below gold on any event", value: "White (Unqualified) for that category." },
    ],
    standardsNote: "Category minimums quoted exactly as published by the Army (army.mil) — see the flag on the source date.",
    waitingTitle: "The test waiting in training",
    waiting:
      "The Army Fitness Test (AFT) — the Army's test of record since June 1, 2025, replacing the ACFT, and the fitness test of Basic Combat Training. “The AFT is a five-event assessment, including the three-repetition maximum deadlift, hand-release push-up, sprint-drag-carry, plank and two-mile run.” Scoring is by points per event from age/sex tables — not reproduced here; the members' Fitness section and the Army's AFT pages carry the detail.",
    prepGuidance:
      "Future Soldiers train with their recruiting station while waiting to ship (the Army's Future Soldier Program / Delayed Entry Program structure); preparation is built around the OPAT events for the recruit's job category and the AFT events they will meet in training. One more route exists: the Future Soldier Preparatory Course (FSPC) at Fort Jackson — the Army's pre-BCT course for enlisted applicants who fall just short on body composition (fitness track) or academics, up to 90 days. Its eligibility windows have changed repeatedly, so no windows are printed here — ask your recruiter for the current eligibility.",
    flags: [
      "Source date: the exact OPAT category minimums quoted above are from the Army's official OPAT announcement article (army.mil, January 2017). OPAT remains the Army's published entry assessment and its standards are carried in current Army H2F testing doctrine (ATP 7-22.01), but no newer official page restating the full chart was captured in this pass — re-verify the chart with your recruiter.",
    ],
    sources: [
      { label: "U.S. Army — “Army implements new fitness standards for recruits and MOS transfers” (army.mil, Jan 2017)", url: "https://www.army.mil/article-amp/180199/army_implements_new_fitness_standards_for_recruits_and_mos_transfers" },
      { label: "U.S. Army — “Army introduces new fitness test for 2025”", url: "https://www.army.mil/article/285501" },
    ],
    planFocus:
      "The OPAT events for your job's category — the interval aerobic run (20-meter shuttles), the standing long jump, the seated power throw, and deadlift strength — plus the running base the AFT's two-mile run will ask for in training.",
    runEvent: "Interval aerobic run (20-meter shuttles)",
    calisthenics: ["Standing long jump practice", "Seated power throw practice", "Deadlift strength work", "Push-ups and plank (AFT events ahead)"],
    selfCheck: [
      "Standing long jump: 3 ft 11 in (Gold) · 4 ft 7 in (Gray) · 5 ft 3 in (Black)",
      "Seated power throw: 11 ft 6 in (Gold) · 13 ft 1 in (Gray) · 14 ft 9 in (Black)",
      "Strength deadlift: 120 lb (Gold) · 140 lb (Gray) · 160 lb (Black)",
      "Interval aerobic run: 36 shuttles (Gold) · 40 (Gray) · 43 (Black)",
    ],
  },
  {
    branch: "Navy",
    gateTitle: "The initial run standard at RTC — the gate at the start of boot camp",
    gateIntro:
      "The Navy publishes no recruiter-administered pre-ship fitness test. Its gate sits at the start of boot camp: Recruit Training Command (RTC), Great Lakes — the Navy's only boot camp — requires recruits to pass an initial run standard before they may commence basic military training. “The initial run standard is evaluated on the 1.5 mile run of the first Physical Fitness Assessment (PFA) at boot camp.” “If a recruit fails to meet the initial run standard, they will have one chance to retest within 48 hours.” Failing the retest means an entry-level separation, with the ability to reapply later with a Navy Recruiting Command waiver.",
    standards: [
      { label: "Initial run standard — male recruits", value: "1.5 mile run in 16 minutes 10 seconds" },
      { label: "Initial run standard — female recruits", value: "1.5 mile run in “18 minutes seven seconds” (18:07), as navy.mil writes it out" },
    ],
    standardsNote: "Quoted exactly from the Navy's official announcement on navy.mil — see the flag on the female figure.",
    waitingTitle: "The test waiting in training",
    waiting:
      "The Official PFA (Physical Fitness Assessment) — the graduation gate: “To graduate boot camp, all recruits must score a satisfactory medium on the official Navy PFA.” The PFA's fitness test (PRT) events are push-ups, a forearm plank, and a 1.5-mile run, scored by age and sex from the Navy's Physical Readiness Program charts — not reproduced here. Boot camp also includes a third-class swim qualification (overview only; the detailed swim standards live in RTC's official materials).",
    prepGuidance:
      "“Navy Recruiting Command provides recruits with a fitness and nutrition guide, which they can follow on their own or with the help of their recruiting office.” That guide — issued to future Sailors in the Delayed Entry Program (the NRC START Guide: Standards, Transitions, Acknowledgment, Requirements, and Training) — is the Navy's published preparation route; recruiters also run DEP physical training. The announcement's expectation, quoted: “recruits are expected to train to meet the physical fitness standards” before they arrive.",
    flags: [
      "Female run figure: the official navy.mil announcement writes the female initial run standard out as “18 minutes seven seconds” (18:07). Some secondary sources print 18:37 for a baseline figure. The navy.mil wording is the one quoted here, with the conflict flagged.",
    ],
    sources: [
      { label: "U.S. Navy — “Navy Sets New Physical Fitness Standard to Start Boot Camp” (navy.mil)", url: "https://www.navy.mil/Press-Office/News-Stories/Article/2253553/navy-sets-new-physical-fitness-standard-to-start-boot-camp/" },
    ],
    planFocus:
      "The 1.5-mile run first — it is the gate at the start of boot camp — plus the PFA events waiting behind it: push-ups and the forearm plank.",
    runEvent: "1.5-mile run",
    calisthenics: ["Push-ups", "Forearm plank holds"],
    selfCheck: [
      "Run 1.5 miles in 16:10 (male initial run standard)",
      "Run 1.5 miles in 18:07 (female initial run standard, as navy.mil writes it)",
      "Train the PFA events too: push-ups and a forearm plank (scored by age/sex charts in training)",
    ],
  },
  {
    branch: "Air Force",
    gateTitle: "No formal pre-ship test — the first gate is inside BMT",
    gateIntro:
      "The Air Force publishes no formal pre-shipping fitness test. There is no airforce.com-published pass/fail standard a recruit must hit at the recruiting station or MEPS before shipping. The first fitness gate is inside Basic Military Training (JBSA-Lackland): an initial physical fitness appraisal in the first days of training, with graded appraisals after it — and the standard that decides graduation is the final BMT physical fitness assessment (below). Any “required fitness level before you arrive” numbers circulating on non-official sites could not be confirmed on a current official page and are not quoted here.",
    standards: [
      {
        label: "The BMT graduation standard (AFMAN 36-2905, 2nd Air Force Supplement)",
        value:
          "“Trainees must meet or exceed the minimum values for standard push-ups, standard sit-ups, standard run, Waist-to-Height Ratio (WHtR), and meet or exceed the minimum composite point total.” And: “Trainees must successfully complete the last physical fitness assessment (PFA) prior to BMT graduation.” Also from the same publication: “Use of alternate components is prohibited” at BMT — every trainee takes the same standard events: the 1.5-mile run, 1-minute push-ups, and 1-minute sit-ups, plus body composition (waist-to-height ratio). Minimum values and points come from the Air Force fitness charts by age and sex — not reproduced here.",
      },
    ],
    waitingTitle: "The test waiting in training",
    waiting:
      "The BMT Physical Fitness Assessment (PFA) described above — an initial appraisal in the first days, graded appraisals after it, and the final PFA as the graduation gate. The Air Force Fitness Program pages (AFPC) carry the charts; the members' Fitness section carries the in-service test detail.",
    prepGuidance:
      "AirForce.com's own join guidance: after acceptance “you'll enter the Delayed Entry Program (DEP) and await your Basic Military Training (BMT) start date. We recommend using this time to build physical conditioning to prepare you for BMT.” Air Force Recruiting Service also publishes a “Prep for Basic Military Training” 14-week program (train 3–5 days per week across 14 weeks, in three phases: Build the Habit, Increase Endurance, BMT Ready), distributed through official Air Force Recruiting channels, and the Aim High app is the Air Force's official DEP companion (BMT checklists and preparation material).",
    flags: [
      "Older “suggested fitness level on arrival” figures for BMT (e.g., a 13:45 1.5-mile run) circulate via third-party reproductions of older Air Force pages. They could not be confirmed on a current official airforce.com page, so they are not quoted as standards here.",
    ],
    sources: [
      { label: "AFMAN 36-2905, 2nd Air Force Supplement — BMT/TT supplement (PDF, mirrored on an Air Force FSS site)", url: "https://5thforcesupport.com/wp-content/uploads/2026/08/afman36-2905_2afsup.pdf" },
      { label: "AFPC — Fitness Program (the charts the manual points to)", url: "https://www.afpc.af.mil/Career-Management/Fitness-Program/" },
      { label: "AirForce.com — Join the Air Force Reserve (DEP guidance)", url: "https://www.airforce.com/how-to-join/join-the-air-force-reserve" },
      { label: "Air Force Recruiting Service (@wearetheairforce) — “Prep for Basic Military Training” 14-week program", url: "https://www.instagram.com/p/DWzp8rzktoV/" },
    ],
    planFocus:
      "The BMT PFA events: the 1.5-mile run, 1-minute push-ups, and 1-minute sit-ups. There is no published pre-ship minimum to chase — the goal is to arrive already comfortable with all three events.",
    runEvent: "1.5-mile run",
    calisthenics: ["Push-ups (1-minute sets)", "Sit-ups (1-minute sets)"],
    selfCheck: [
      "Run 1.5 miles continuously (the BMT PFA run event — no pre-ship minimum is published)",
      "Do 1 minute of standard push-ups without stopping",
      "Do 1 minute of standard sit-ups without stopping",
    ],
  },
  {
    branch: "Space Force",
    gateTitle: "No separate Space Force test — the Air Force picture applies",
    gateIntro:
      "The Space Force publishes no entry fitness test of its own. Enlisted Guardians are recruited through Air Force recruiting and attend the same Basic Military Training at JBSA-Lackland as Air Force trainees — so the entry fitness picture is the Air Force one: no pre-ship test, an initial appraisal on arrival, and the BMT final PFA (standard push-ups, sit-ups, run, waist-to-height ratio) as the graduation gate. Nothing Space-Force-specific applies at the pre-ship stage. See the Air Force entry for the quoted BMT standard.",
    standards: [
      {
        label: "Entry gate",
        value: "None of the Space Force's own — the Air Force BMT picture (see the Air Force entry).",
      },
    ],
    waitingTitle: "The test waiting in service",
    waiting:
      "The Physical Fitness Readiness Assessment (PFRA) — the Space Force's own in-service test, per its recruiting site: “Guardians are required to complete a Physical Fitness Readiness Assessment (PFRA) twice annually,” scored on a 100-point system across four categories — Muscular Strength (“1-min push-ups or 2-min hand-release push-ups”), Cardiovascular Fitness (“2 mile run or 20-meter High Aerobic Multi-shuttle Run (HAMR)”), Core Endurance (“1-min sit-ups, 2-min cross-leg reverse crunches, or a time forearm plank”), and Body Composition (the site states a BMI range of “19 to 27.5” as its body-composition standard). Charts are not reproduced here; spaceforce.com/fitness and the members' Fitness section carry the routing.",
    prepGuidance:
      "None separate from the Air Force's: future Guardians prepare through the Air Force DEP and the same BMT preparation materials (see the Air Force entry). Space Force recruiting routes fitness questions to recruiters; its fitness page carries no distinct pre-accession training program.",
    flags: [],
    sources: [
      { label: "U.S. Space Force recruiting site — Fitness", url: "https://www.spaceforce.com/fitness" },
    ],
    planFocus:
      "The BMT PFA events (the Air Force picture): the 1.5-mile run, 1-minute push-ups, and 1-minute sit-ups — the same preparation as a future Airman.",
    runEvent: "1.5-mile run",
    calisthenics: ["Push-ups (1-minute sets)", "Sit-ups (1-minute sets)"],
    selfCheck: [
      "Run 1.5 miles continuously (the BMT PFA run event — no pre-ship minimum is published)",
      "Do 1 minute of standard push-ups without stopping",
      "Do 1 minute of standard sit-ups without stopping",
    ],
  },
  {
    branch: "Coast Guard",
    gateTitle: "One published standard — for all new members, officer and enlisted",
    gateIntro:
      "The Coast Guard recruiting site publishes one set of fitness standards that all new members — “officer and enlisted” — are expected to perform. These are the standards a recruit trains to before Cape May (enlisted boot camp) or OCS, and the events of the physical fitness testing in training. The page's own framing: “Physical fitness is important to military readiness. The Coast Guard's fitness standards can be challenging, so start training your body early in the enlistment process.”",
    standards: [
      { label: "Push-ups in one minute", value: "Males: 29 · Females: 15" },
      { label: "Timed forearm plank", value: "Males: 1:18 · Females: 1:09" },
      { label: "Timed 1.5 mile run", value: "Males: 12:29 · Females: 15:05" },
      {
        label: "Swimming",
        value:
          "“Both boot camp and OCS include swim training. If you are uncomfortable in the water, you may benefit from strengthening your abilities before arrival.” The recruiting page publishes no swim distances or times — detailed recruit swim-test figures on third-party sites could not be confirmed on an official Coast Guard page, so no numbers are printed here; ask your recruiter or TRACEN Cape May.",
      },
    ],
    standardsNote: "Quoted exactly as published on gocoastguard.com's Eligibility Requirements page (Fitness Standards).",
    waitingTitle: "The test waiting in training",
    waiting:
      "Recruit training at TRACEN Cape May (8 weeks) tests the same published events — push-ups, forearm plank, 1.5-mile run — plus the swim component, against the standards above; the service-wide Coast Guard fitness test in the fleet uses the same event family. No separate chart is reproduced here.",
    prepGuidance:
      "The recruiting site's guidance is the quoted line above — start training early in the enlistment process — plus recruiter-led preparation during the enlistment process.",
    flags: [
      "A “Helmsman” family-and-friends physical-fitness page on gocoastguard.com was referenced by third-party sites but returned 404 when fetched for this research (Nov 9, 2026), so it is not cited here.",
    ],
    sources: [
      { label: "GoCoastGuard.com — Eligibility Requirements (Fitness Standards)", url: "https://www.gocoastguard.com/faq/what-are-the-minimum-physical-fitness-requirements" },
    ],
    planFocus:
      "The three published events: the 1.5-mile run, one-minute push-ups, and the forearm plank — one standard set for boot camp and OCS alike.",
    runEvent: "1.5-mile run",
    calisthenics: ["Push-ups (1-minute sets)", "Forearm plank holds"],
    selfCheck: [
      "Do 29 push-ups in one minute (male standard)",
      "Do 15 push-ups in one minute (female standard)",
      "Hold a forearm plank for 1:18 (male) / 1:09 (female)",
      "Run 1.5 miles in 12:29 (male) / 15:05 (female)",
    ],
  },
];

/** Branch names in the Joining area's canonical order. */
export const JOINING_BRANCHES = ["Army", "Marine Corps", "Navy", "Air Force", "Space Force", "Coast Guard"] as const;
