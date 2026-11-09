// Deep USMC 03 Infantry entries, built from the researched deep source
// pack at ~/workspace/military-app/deep/usmc-infantry.md (public sources,
// accessed Nov 8, 2026). Content is paraphrased from that pack at
// name / fact-file level only — no employment tactics, firing procedures,
// or operating how-to. Figures the pack flags as supplement-only or
// unverified are omitted or shown with a "verify on official source"
// flag, matching the pack.

import type { MosEntry } from "./data";

const NAVMC_URL =
  "https://www.marines.mil/Portals/1/Publications/NAVMC%201200.1L%20%28SECURED%29.pdf?ver=6Gs_zZnANHZU1qCTSOIk2g%3D%3D";
const MARINES_COM_INFANTRY = "https://aem.marines.com/mission/roles/infantry";
const SOI_EAST_ITB = "https://www.soieast.marines.mil/Units/Infantry-Training-Battalion/";
const TBS_CREW_SERVED =
  "https://www.trngcmd.marines.mil/Portals/207/Docs/TBS/B3M0499XQ-DM%20Introduction%20to%20Crew%20Served%20Weapons.pdf?ver=2017-06-08-092814-007";
const TBS_FIRE_SUPPORT =
  "https://www.trngcmd.marines.mil/Portals/207/Docs/TBS/B2C2437%20Principles%20of%20Fire%20Support.pdf?ver=nZ53WXfeZpCdErDc76doAA%3d%3d";
const DIV_SCHOOLS_BMGC = "https://www.1stmardiv.marines.mil/Units/DIVISION-SCHOOLS/BASIC-MACHINE-GUN-COURSE/";
const SOI_WEST_LAR =
  "https://www.soiwest.marines.mil/Units/Advanced-Infantry-Training-Battalion/Light-Armored-Reconnaissance-Training-Company/Light-Armored-Reconnaissance-Marine-Course/";
const SCOUT_SNIPER_ARTICLE =
  "https://www.marines.mil/News/News-Display/Article/2292500/hide-and-seek-us-marines-with-scout-snipers-course-participate-in-stalking-exer/";
const SQUAD_LEADER_ARTICLE =
  "https://www.marines.mil/News/News-Display/article/957555/from-classroom-to-field-ops-marines-train-to-be-squad-leaders/";
const HQMC_0365 =
  "https://www.hqmc.marines.mil/Portals/138/Docs/IDENTIFICATION%20OF%200365%20PRIMARY%20MOS%20PREREQUISITES%20AND%20REQUIREMENTS.pdf";
const MARINEPARENTS_03 = "https://wab.marineparents.com/occfield.asp?Code=03";
const ITB_CAPTION =
  "https://www.mccsss.marines.mil/desktopmodules/sharedlibrary/handlers/dvidscaption.ashx?PortalId=244&AssetId=video:992162&Format=webvtt";
const TRNGCMD_CAPTION =
  "https://www.trngcmd.marines.mil/desktopmodules/sharedlibrary/handlers/dvidscaption.ashx?PortalId=207&AssetId=video:518188&Format=srt";

const PRIMARY = {
  sourceName: "OFFICIAL — NAVMC 1200.1L MOS Manual, Marines.mil (deep infantry source pack, accessed Nov 8, 2026)",
  sourceUrl: NAVMC_URL,
  sourceOfficial: true,
};

function deep(base: Omit<MosEntry, "level" | "sourceName" | "sourceUrl" | "sourceOfficial">): MosEntry {
  return { ...base, level: "full", ...PRIMARY };
}

export const DEEP_INFANTRY: MosEntry[] = [
  deep({
    id: "usmc-0300",
    code: "0300",
    title: "Basic Infantry Marine",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "0300 is not a job you stay in — it is the entry designation for every enlisted Marine headed into the infantry. The 03 occupational field is the largest in the Marine Corps, and Marines.com states plainly that every other occupational field is structured to support the infantry. An 0300 Marine is a recruit-training graduate who has arrived at the School of Infantry to be made into a basic infantryman first and a specialist second; the specific MOS (0311, 0331, 0341, 0352, 0313…) is earned during or immediately after that training. Every infantry career conversation — contracts, \"open infantry\" enlistments, who gets which specialty — starts here.",
    duties: [
      "Complete the common infantry foundation in the Infantry Marine Course at the School of Infantry",
      "Train in all weather at Camp Geiger, NC (SOI-East) or Camp San Onofre / Camp Pendleton, CA (SOI-West)",
      "Field days, hikes under load, live-fire ranges, and classroom/field instruction blocks",
      "Earn the specific infantry specialty (0311, 0331, 0341, 0352, 0313…) during or immediately after the course",
    ],
    school:
      "Recruit training (Parris Island or San Diego) → School of Infantry, Infantry Training Battalion → Infantry Marine Course (IMC), 14 weeks, at Camp Geiger, NC or Camp Pendleton, CA. IMC replaced the old 9-week course starting July 2021 under Force Design 2030 and was fully in place by January 2023; it teaches the common infantry foundation — warfighting philosophy, offensive and defensive operations, combat maneuvers, patrolling, and fire and maneuver (Marines.com's own topic list). Around the final phase, Marines branch: 0311s finish as riflemen; 0331/0341/0352 continue into Infantry Weapons Course specializations at SOI; 0313s go on to the separate LAR course.",
    requirements:
      "Entry is through an infantry (03 field) enlistment or assignment. Current entry standards are published on Marines.com — verify on official source. This entry shows no ASVAB/GT figure: the source pack's figures for this field are supplement-sourced only.",
    dayInLife:
      "There is no fleet day-to-day for an 0300 — their whole existence is the training pipeline: long field days, hikes under load, live-fire ranges, and classroom/field instruction blocks in the Infantry Marine Course, in all weather. The lived reality new Marines describe in public guides is simple: you live out of a pack for days at a time, you are cold, wet or hot on a rotating basis, and your performance in this course is the first reputation you carry to your first unit.",
    careerPath:
      "0300 itself has no career path — it resolves into a primary MOS at SOI. The decision that shapes a career happens here: entry-level specialty → fleet unit → advanced courses and leadership MOSs (0365, then 0369), or selection pipelines (recon, scout sniper, MARSOC) described under those entries.",
    civilian:
      "At 0300 level: physical resilience, working in small teams, land navigation basics, first-aid fundamentals, discipline and reliability under supervision — the foundation the specialty entries build on.",
    similar: ["usmc-0311", "usmc-0331", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "0300s exist inside a training structure, not an operating one: training companies within the Infantry Training Battalion (ITB) at SOI-East or SOI-West, run by combat instructors — themselves experienced infantry NCOs and SNCOs. On graduation they are distributed across the operating forces: rifle battalions, Light Armored Reconnaissance battalions, reconnaissance battalions, and (by later selection) MARSOC.",
      },
      {
        heading: "Systems & equipment",
        body: "At this stage the \"system\" is the individual Marine's kit: the current infantry service rifle family (see 0311 — the M27 Infantry Automatic Rifle, 5.56mm, Heckler & Koch, adopted as the standard infantry service rifle per public reporting), individual field equipment, and familiarization with the crew-served systems they may specialize in (machine guns, mortars, anti-armor — named under 0331/0341/0352). Fact-file level only, by design.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your contract may guarantee the 03 field, not a specific specialty — which specialty you get can depend on class composition, instructor input and the needs of the Corps, a point public recruit guides repeat constantly. Treat every core skill as yours regardless of specialty: weapons Marines still have to be riflemen first.",
          "IMC is deliberately harder and longer than the old course — it was lengthened (9 → 14 weeks) specifically so new infantry Marines arrive at units more capable. Arriving fit for hikes under load matters more than arriving clever.",
          "The Marines you train with here are the network you will run into for a whole career; the infantry community is small.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "SOI-East — Infantry Training Battalion", url: SOI_EAST_ITB },
      {
        label: "Supplement: Operation Military Kids — Infantry Training Battalion guide",
        url: "https://www.operationmilitarykids.org/marines-infantry-training-battalion-itb-guide/",
      },
    ],
  }),

  deep({
    id: "usmc-0311",
    code: "0311",
    title: "Rifleman",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The rifleman is the basic maneuver element of the Marine Corps — the Marine around whom the rifle squad, platoon and company are built, and the most numerous MOS in the infantry. The official Training Command description has riflemen serving as the primary scouts, assault troops and close-combat forces within each infantry unit. If the infantry's mission is publicly stated as locating, closing with and destroying the enemy or repelling assault by fire and close combat, the 0311 is the Marine who physically does the closing. Every other infantry specialty either supports the riflemen, leads them, or is drawn from their ranks.",
    duties: [
      "Serve as a rifleman in a fire team and rifle squad — the maneuver element of the rifle platoon",
      "Garrison rhythm: physical training, weapons cleaning and maintenance, classes, inspections, and working parties",
      "Field exercises and pre-deployment workups: multi-day field time living out of a pack, squad- and platoon-level live-fire ranges",
      "Deploy on MEU floats or Unit Deployment Program rotations to Okinawa; on deployment, patrols, security, and training with partner forces",
      "Stand watch and perform area maintenance — the unglamorous constant of infantry life between operations",
    ],
    school:
      "Recruit training → SOI/ITB Infantry Marine Course, 14 weeks (Camp Geiger, NC or Camp Pendleton, CA) — the rifleman track is the default track of IMC, with the final phase focused on the rifleman's craft across jungle, desert and urban terrain. Follow-on development: Advanced Infantry Marine Course / advanced rifleman courses at the Advanced Infantry Training Battalion (AITB), the Infantry Squad Leaders Course / Infantry Small Unit Leaders Course for prospective squad leaders (see 0365), and competitive selection for scout sniper indoc, recon screening, or MARSOC A&S later in a career.",
    requirements:
      "Entry is through the infantry (03) field via the School of Infantry. Current entry standards are published on Marines.com — verify on official source. This entry shows no ASVAB/GT figure: the source pack's figures for this field are supplement-sourced only.",
    dayInLife:
      "In garrison: physical training, weapons cleaning and maintenance, classes, inspections, working parties, and preparation for the next field event — new riflemen should expect to be the workforce of the platoon. In the field or on a workup: multi-day exercises living out of a pack, squad- and platoon-level live-fire ranges, and pre-deployment training blocks building toward a MEU float or a Unit Deployment Program rotation to Okinawa. On deployment: patrols, security and training with partner forces, plus long stretches of waiting, watch-standing and area maintenance punctuated by intense training or operations.",
    careerPath:
      "Pvt–LCpl rifleman (fire team roles, automatic rifleman) → Cpl fire team leader → Sgt squad leader, formalized as the 0365 PMOS via the Squad Leader Development Program (see 0365) → SSgt–GySgt 0369 Infantry Unit Leader billets (platoon sergeant, weapons section leader — see 0369) → at E-8 the infantry splits: Master Gunnery Sergeant (operations/0369 track, ending as battalion/regiment operations chief) vs. First Sergeant → Sergeant Major (command track). Lateral branches along the way: the 0317/0322 scout-sniper community, 0321 recon, 0372 MARSOC, plus special-duty assignments (Drill Instructor, Recruiting, Marine Security Guard) that pull from the infantry heavily.",
    civilian:
      "Small-team leadership (as rank grows), security and public-safety foundations, emergency/first-aid basics, logistics and equipment accountability, physical-fitness instruction pathways, and documented performance under pressure.",
    similar: ["army-11b", "usmc-0331", "usmc-0365"],
    extraSections: [
      {
        heading: "Organization",
        body: "The rifleman's world is the fire team and the rifle squad. Per the current published summary of MCIP 3-10A.4i (Marine Rifle Squad): a rifle squad is 13 Marines — a sergeant squad leader (0365 billet), an assistant squad leader, and three fire teams of four, each led by a corporal team leader, with roles inside the team including the automatic rifleman. (Squad size is current published doctrine and subject to change — the Corps experimented with 12- and 15-man variants under Force Design.) Three rifle squads plus a headquarters element make a rifle platoon (commanded by a lieutenant, with a platoon sergeant — an 0369 billet); three rifle platoons plus a weapons platoon and a headquarters make a rifle company (captain); three rifle companies, a weapons company, and a headquarters & service company make an infantry battalion of roughly 800–1,000 Marines under a lieutenant colonel. Riflemen are supported by the weapons platoon/company specialties (0331, 0341, 0352) and in turn are the maneuver force those weapons exist to support.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "M27 Infantry Automatic Rifle (IAR) — 5.56mm, select-fire, Heckler & Koch (HK416-derived). Adopted 2010 as the automatic rifleman's weapon; the Corps announced in Dec 2017 it would issue the M27 to every member of the infantry squad as the standard infantry service rifle, largely replacing the M16A4 and M4 in infantry units (M4 retained at platoon leadership levels and above). A designated-marksman variant is the M38 SDMR.",
          "M249 SAW — 5.56mm squad automatic weapon; public reporting notes thousands remain in service, retained at company commanders' discretion.",
          "Legacy/context systems a rifleman will still encounter in training: M16A4 and M4 carbine (recruit training and non-infantry use), M203/M320 grenade launcher family as squad-level launchers (named in older public MOS descriptions).",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "\"Every Marine a rifleman\" stops being a slogan here — as an 0311, your individual skills (fitness, marksmanship, land nav, field hygiene, staying effective while tired and wet) are the product. Public career guides consistently describe the job as long hours, heavy packs and weeks of field time; Marines who thrive are the ones who get good at being uncomfortable without getting sloppy.",
          "You will be judged early on reliability: showing up with clean, working gear, knowing your job in the team, and never being the reason the squad waits. Team leaders notice who has to be checked and who can be trusted.",
          "Garrison life is real and is most of a peacetime enlistment between field events — Marines who treat maintenance, inspections and classes as part of the job promote faster than those waiting for the \"real\" infantry to start.",
          "The squad is a 13-person family you live with 24/7 in the field; being strong but difficult to live with is a career limiter in a community this small.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Training Command — SOI description of the rifleman (official transcript)", url: TRNGCMD_CAPTION },
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      { label: "Supplement: Wikipedia — M27 Infantry Automatic Rifle", url: "https://en.wikipedia.org/wiki/M27_Infantry_Automatic_Rifle" },
      {
        label: "Supplement: Operation Military Kids — Marine infantry MOS guide",
        url: "https://www.operationmilitarykids.org/marine-infantry-mos-guide/",
      },
    ],
  }),

  deep({
    id: "usmc-0313",
    code: "0313",
    title: "Light Armored Reconnaissance (LAV) Crewman",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The 0313 is an infantryman who fights from a vehicle: a crewman of the LAV-25, the Marine Corps' eight-wheeled amphibious armored reconnaissance vehicle. Per the official MOS description, the LAV crewman provides the driving and first-echelon maintenance skills for all the mission-role vehicles of a Light Armored Reconnaissance (LAR) battalion, plus the gunnery skills for the LAV-25's weapons and thermal optics. LAR units are the commander's eyes forward — they conduct reconnaissance, security and screening missions for a larger force, and can fight for information when they have to. It is infantry work, but the squad lives on wheels and the \"pack\" is a vehicle that must never be allowed to break.",
    duties: [
      "Crew an LAV-25 as driver, gunner, or (as an NCO) vehicle commander",
      "Preventive maintenance checks and services (PMCS): the driver owns the engine and hull, the gunner owns the turret and weapon systems, the vehicle commander owns all of it",
      "Mounted reconnaissance, security, and screening missions ahead of the main body",
      "Live-fire gunnery on the LAV-25's weapon systems and fire-control sights",
      "Dismounted infantry work — LAR crews carry scouts and can be tasked on foot",
    ],
    school:
      "0313 is not a direct-from-boot-camp specialty in the normal case: the official course page states a Marine must be a Private through Sergeant who has graduated ITB as an 0311 (lateral movers must hold a prior infantry MOS — 0311, 0331, 0341, 0351 or 0352). Then: Light Armored Reconnaissance Marine Course, SOI-West (Camp Pendleton, CA) — 6 weeks / 30 training days (official length). Weeks 1–3 cover LAV operations and driving across varied terrain and reduced visibility, plus PMCS; weeks 4–6 cover LAV-25 weapon systems, fire-control sights, and crew procedures (official course overview, topic level). Public supplements note a swim qualification requirement (WS-B / 4th-class swimmer) — verify current standard on official source.",
    requirements:
      "Must first qualify as an infantryman (0311 from ITB, or a prior infantry MOS for lateral movers), Private through Sergeant, per the official SOI-West course page. Current details on Marines.com / SOI-West — verify on official source. No ASVAB/GT figure is shown: the pack's figure for this MOS is supplement-sourced only.",
    dayInLife:
      "The defining rhythm of LAR life, consistent across public guides, is maintenance. In garrison, crews spend large blocks of time on preventive maintenance checks and services (PMCS) on their vehicles. Field time is long mounted movements, observation and screening tasks, live-fire gunnery, and sleeping in and around the vehicle; because LAR works ahead of the main body, crews operate semi-independently for long periods with limited support. Deployments (including MEU floats, where LAR is a standard MEU element) add vehicle embarkation and shipboard life.",
    careerPath:
      "Crewman (driver) → gunner → NCO vehicle commander → 0363 LAR Unit Leader (the LAR SNCO code, ranks SSgt–GySgt per the MOS Manual summary) and 0367 LAR Master Gunner billets, with 0393 LAR Operations Chief at the senior end. Gunnery excellence is a formal track here — advanced gunnery and master-gunner billets are how senior 0313s stay technical.",
    civilian:
      "Commercial/heavy vehicle operation and first-level maintenance, diesel/hull systems familiarity, crew resource management, surveillance and reporting discipline, leadership of small crews with expensive equipment accountability.",
    similar: ["usmc-0311", "usmc-0352", "army-19d"],
    extraSections: [
      {
        heading: "Organization",
        body: "The atom is the three-Marine LAV crew: driver, gunner, and vehicle commander (an NCO billet). LAVs are organized into platoons and companies inside an LAR battalion (the Corps has active and reserve LAR battalions, e.g. 1st, 2d, 3d and 4th LAR), which habitually works for a division/regimental commander or a MEU as its reconnaissance and screening force. LAR companies also field the battalion's other LAV variants, and an 81mm mortar capability sits in the LAR battalion's weapons structure per the public TBS fire-support lesson. The infantry battalions' 0352s and the LAR battalions are closely linked — anti-armor support to LAR is part of the 0352 mission set.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "LAV-25 — eight-wheeled, amphibious, armored reconnaissance vehicle; the standard LAR platform. Crew of three plus embarked scouts.",
          "M242 Bushmaster 25mm chain gun — the LAV-25's turret-mounted main gun.",
          "M240 7.62mm machine guns — coaxial (mounted beside the main gun) and pintle/swing-mounted variants on the vehicle.",
          "M257 smoke grenade launchers — vehicle smoke system, named in the official course scope.",
          "Thermal optics / fire-control sighting system on the LAV-25 turret.",
          "The wider LAV family a crewman may serve on: mortar (LAV-M), antitank (LAV-AT), logistics (LAV-L), recovery (LAV-R), command (LAV-C2) and electronic-warfare (LAV-MEWSS) variants — \"all mission role vehicles organic to the LAR battalion\" per the MOS description.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "In LAR, the vehicle is the job. A crew that lets maintenance slide becomes a crew walking — and in a screening mission, a deadlined vehicle is a mission failure, not an inconvenience. The Marines who get ahead learn their vehicle's systems deeply enough to troubleshoot in the field at 0300.",
          "You get more independence, earlier, than a rifleman: small crews, operating at distance from the company. That cuts both ways — there is often no one senior watching, so self-discipline on checks, comms and reporting is the whole ballgame.",
          "Gunnery is competitive and scored; your crew's reputation is literally posted in gunnery results.",
          "Expect to still do dismounted infantry work — LAR crews carry scouts and can be tasked on foot; the 0311 foundation is not a formality.",
        ],
      },
    ],
    sourceLinks: [
      { label: "SOI-West — Light Armored Reconnaissance Marine Course (official)", url: SOI_WEST_LAR },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "TBS public lesson — Principles of Fire Support (official)", url: TBS_FIRE_SUPPORT },
      { label: "MarineParents — OccFld 03 (supplement)", url: MARINEPARENTS_03 },
      {
        label: "Supplement: Operation Military Kids — LAV Crewman MOS 0313",
        url: "https://www.operationmilitarykids.org/marine-corps-lav-crewman-mos-0313/",
      },
    ],
  }),

  deep({
    id: "usmc-0317",
    code: "0317",
    title: "Scout Sniper",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "⚠ MOS IN TRANSITION: public reporting states the last 0317 class graduated 15 December 2023, with scout snipers reorganized into a 26-Marine Scout Platoon model and a successor 0322 Reconnaissance Sniper MOS; the current Marines.com infantry page lists 0322 Reconnaissance Sniper and 0315 Scout, not 0317 — while NAVMC 1200.1L (Mar 2025) still lists 0317. This entry documents the 0317 as it existed and as the manual still carries it — verify on official source before treating 0317 as a currently open pipeline. The scout sniper was a secondary MOS (never an entry-level one) held by experienced infantry or reconnaissance Marines, selected by their battalion, whose job paired two skills: precision long-range rifle fire and — the larger half of the work — reconnaissance and surveillance for the battalion commander. Scout sniper teams were the battalion's forward observers of ground truth: small, concealed teams that watched, reported, and only sometimes shot. The famous part of the job (the shot) was publicly always described by the community as the smaller part; the defining product was information.",
    duties: [
      "Serve in a battalion Scout Sniper Platoon as a two-Marine team (team leader + spotter/shooter roles, at overview level)",
      "Reconnaissance and surveillance for the battalion commander — observation and reporting are the main product",
      "Precision long-range rifle fire in support of the battalion",
      "Sustainment training: marksmanship ranges, observation exercises, physical conditioning, and field problems built around stealth and endurance",
      "Attach wherever the battalion needs eyes — supporting companies, screening, and overwatch tasks at overview level",
    ],
    school:
      "No direct entry. The classic pipeline: infantry (or recon) Marine → volunteer/selected by battalion at Lance Corporal or above → battalion scout sniper platoon as a trainee → battalion indoctrination course (public reporting: ~3 weeks) → Scout Sniper Course at SOI-East (Camp Geiger), SOI-West (Camp Pendleton), or Quantico. Course length is genuinely inconsistent in public sources — Marines.mil's 2020 course coverage says 12 weeks; Marine Corps Times reporting cites a 79-day basic course; historical lengths range 8½–12½ weeks across curriculum revisions — publish as roughly 12 weeks, verify on official source. A four-week Scout Sniper Team Leader Course existed for senior snipers. Attrition was famously high — a ~44% graduation rate in 2017 is publicly reported by Training Command via Marine Corps Times.",
    requirements:
      "Not an entry-level MOS and not a current accession path as published — see the transition note above. Historically: an experienced infantry or reconnaissance Marine, Lance Corporal or above, selected by their battalion. Verify current status (0322 Reconnaissance Sniper / 0315 Scout) on Marines.com or in NAVMC 1200.1L.",
    dayInLife:
      "In a scout sniper platoon, life alternated between sustainment training — marksmanship ranges, observation exercises, physical conditioning — and field problems built around stealth and endurance. Public Marine Corps coverage of the course shows the flavor: multi-day field phases, stalking exercises over set lanes (Camp Pendleton publicly noted 25+ stalking lanes), and classes that shrank steadily (one public 2020 class story: started with 20+ Marines, expected to graduate 14). In the fleet, teams attached wherever the battalion needed eyes — supporting companies, screening, and overwatch tasks at overview level.",
    careerPath:
      "0317 was an additional/secondary MOS layered on a primary infantry MOS — a scout sniper's career progression still ran through 0311 → 0365 → 0369 (or the recon track). Senior 0317s became team leaders, platoon sergeants of scout sniper platoons, and instructors at the schoolhouses. Under the reported reorganization, the community's future runs through 0315 Scout / 0322 Reconnaissance Sniper billets in the new scout platoons — verify current structure on official source.",
    civilian:
      "Observation and reporting, precision marksmanship instruction, surveillance/security work, outdoor fieldcraft and endurance, analytical reporting — plus the underlying infantry leadership track.",
    similar: ["usmc-0321", "usmc-0311", "army-11b"],
    extraSections: [
      {
        heading: "⚠ Transition note — 0317 is phasing toward 0322",
        body: "Public reporting (summarizing Marine Corps announcements) says the last 0317 class graduated 15 Dec 2023 and scout snipers were reorganized into a 26-Marine Scout Platoon structure with a 0322 Reconnaissance Sniper MOS; the current Marines.com infantry page lists 0322 and 0315 Scout and does not list 0317 — while NAVMC 1200.1L (Mar 2025) still carries 0317 in the 03 index. Do not treat 0317 as the current accession path; check Marines.com / the current NAVMC for the 0322 pipeline.",
      },
      {
        heading: "Organization",
        body: "Scout snipers lived in the Scout Sniper Platoon of the infantry battalion's Headquarters & Service Company, working directly for the battalion (the TBS public lesson lists the Scout Sniper Platoon alongside the weapons platoon/company in the battalion's structure). Teams were typically two-Marine elements (team leader + spotter/shooter roles at overview level), led by senior 0317s, with an 0369 often serving as platoon sergeant / section leader for the scout-sniper section (per the 0369 MOS summary). Reconnaissance Marines could also hold the qualification (0321 + scout sniper schooling).",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "M40-series sniper rifle — bolt-action precision rifle family long associated with Marine scout snipers (M40A3 named in the public TBS lesson; later M40A6 in public reporting).",
          "M82A3 / Mk 15 (.50-cal) — the \"Special Application Scoped Rifle\" named in the same TBS lesson: a .50-caliber long-range rifle in the scout-sniper inventory.",
          "Spotting scopes, laser rangefinders and observation optics — the team's primary tools by time-on-task (observation is the main product, per the course's own public description).",
          "The successor community's rifle is publicly reported as the Mk 22 family in the broader service sniper transition — verify on official source before relying on platform claims for 0322.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You could not sign for this job. The only road in was: be a squared-away infantryman, get noticed, get selected by your battalion, survive indoc, then survive the course. Public sniper-community writing is blunt that battalions sent Marines they already trusted — reputation in your first unit was the real application.",
          "Patience and observation discipline, not shooting talent alone, decided who finished: the course weighted stalking, observation and fieldcraft alongside marksmanship, and most attrition was not about rifle scores.",
          "It was a two-Marine world: your spotter/team leader relationship carried everything, including long hours of doing absolutely nothing, correctly, in bad weather.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marines.mil — Scout Sniper Course stalking exercise, Camp Pendleton (official)", url: SCOUT_SNIPER_ARTICLE },
      { label: "Marines.com — Infantry roles (lists 0322 / 0315, not 0317)", url: MARINES_COM_INFANTRY },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      { label: "Supplement: Wikipedia — Scout Sniper", url: "https://en.wikipedia.org/wiki/Scout_Sniper" },
      {
        label: "Supplement: Marine Corps Times — the sniper shortfall (2018)",
        url: "https://www.marinecorpstimes.com/news/your-marine-corps/2018/11/13/the-sniper-shortfall-why-the-corps-could-lose-its-next-urban-fight/",
      },
    ],
  }),

  deep({
    id: "usmc-0321",
    code: "0321",
    title: "Reconnaissance Marine",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "Reconnaissance Marines are the infantry's deep-look specialists: small teams that operate forward of the main force — on land and from the sea — to observe, report and answer the commander's questions about terrain and opposing activity before the main body commits. The MOS is earned, never assigned from boot camp: it is a selective follow-on specialty built on an infantry foundation. Division reconnaissance battalions work for division/regimental commanders; Force Reconnaissance companies provide the deeper, MEF-level capability — both are manned by 0321s, and public sources treat \"Recon Marine\" as one of the Corps' most demanding enlisted identities. Currency flag: in 2024 the Corps publicly moved to overhaul this pipeline (see Training pipeline) — verify current course structure on official source.",
    duties: [
      "Operate in a small reconnaissance team forward of the main force, on land and from the sea",
      "Observe and report on terrain and opposing activity — the report is the product",
      "Constant physical conditioning: running, rucking, pool and ocean swims with fins",
      "Communications and reporting practice, and sustainment of perishable skills (parachuting, combat diving for those holding the extra qualifications)",
      "Deploy with recon platoons/teams attached to MEUs and ground combat elements as their forward reconnaissance element",
    ],
    school:
      "Classic pipeline: infantry MOS first (or a recon contract/screening where offered — verify current entry options on official source) → battalion screening / reconnaissance indoctrination-style preparation → Basic Reconnaissance Course (BRC), Reconnaissance Training Company, Advanced Infantry Training Battalion, SOI-West, Camp Pendleton, CA (amphibious phase historically conducted at Coronado, CA). Length conflict in public sources: supplements describe three phases of 4 + 3 + 2 weeks (~9 weeks); other public sources cite 65 days and 12 weeks for different curriculum eras — publish as roughly 9–12 weeks depending on curriculum era, verify on official source. Currency flag: 2024 public reporting (Task & Purpose, May 2024) describes the single BRC being replaced by a Ground Reconnaissance Course (GRC) plus an Amphibious Reconnaissance Course (ARC) sequence (reported ~18 weeks combined) — verify current structure at SOI-West / Reconnaissance Training Company. Follow-on publicly listed schools: USMC Combatant Diver Course, Army Airborne School, Military Freefall, SERE, and reconnaissance leader courses — the NMOS codes 0323/0324/0326 record the jump/dive qualifications.",
    requirements:
      "A selective follow-on specialty built on an infantry foundation — screened, not assigned from boot camp. Current entry options and course structure are changing (see the pipeline flag) — verify on official source (SOI-West / Reconnaissance Training Company). No ASVAB/GT figure is shown: the source pack publishes none from an official source for this MOS.",
    dayInLife:
      "Recon life in a battalion is training-dense: constant physical conditioning (running, rucking, pool and ocean swims with fins), team field exercises, communications and reporting practice, and sustainment of perishable skills like parachuting and combat diving for those holding the extra qualifications (0323 parachute, 0324 combatant diver, 0326 both). Field problems are long, quiet and lightly supported — teams carry everything, move at night as a norm at overview level, and are graded on the quality and timeliness of what they report. Deployments attach recon platoons/teams to MEUs and ground combat elements as their forward reconnaissance element.",
    careerPath:
      "0321 team member → team leader / assistant team leader (NCO) → platoon sergeant billets, and the SNCO track merges into 0369 Infantry Unit Leader and 0399 Operations Chief at the senior end (the public 0369 summary explicitly lists reconnaissance and STA platoons among 0369 billets). Many recon Marines later screen for MARSOC (0372) or move into instructor billets at Reconnaissance Training Company. The qualification stack (jump, dive, freefall) is itself a career currency — seniority in recon is measured in teams led and qualifications held, not just rank.",
    civilian:
      "Surveillance, observation and structured reporting; small-team leadership in austere environments; maritime/boat handling exposure; instructional skills; security and protective-services foundations.",
    similar: ["usmc-0317", "usmc-0372", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "The working unit is the reconnaissance team (a small, self-contained element led by a team leader — typically an experienced 0321 NCO) inside a reconnaissance platoon, inside a reconnaissance company, inside a reconnaissance battalion (division recon) — or a Force Reconnaissance company aligned to the MEF. Teams are task-organized with attached specialists (communications, Navy corpsmen — the SARC pipeline is publicly associated with recon platoons). Recon is supported by the battalion's logistics and by aviation for insertion/extraction at the overview level; it supports the ground combat element commander, who is its customer for information.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "Individual weapons: the infantry rifle family (M27 — see 0311) and standard infantry kit.",
          "Combat Rubber Reconnaissance Craft (CRRC) — the small inflatable boat that gives amphibious recon its name; the related 0316 Coxswain MOS covers its operation.",
          "Communications and observation equipment for long-range reporting (radios, optics, laser rangefinders) — the team's real weapons are its radios and its reports.",
          "Qualification-linked equipment sets: parachutes (0323), combatant-diver/rebreather apparatus (0324), both (0326) — earned in follow-on schools, publicly listed in the MOS Manual's code structure.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Recon selects for water confidence and endurance first. Every public account of BRC leads with swims, finning and rucking; candidates who are merely gym-strong wash out in the pool.",
          "The product is a report, not a firefight. Teams are valued for seeing without being seen and communicating clearly under exhaustion; Marines who need action to feel useful struggle in this community.",
          "Attrition is structural, not personal: public sources put BRC non-completion in the 25–40% range for attempted cohorts (era-dependent). Volunteering means accepting you may return to your infantry unit, which is a normal outcome, not a disgrace.",
          "Small-team life means your reputation is total: in a small team there is nowhere to hide weak fieldcraft, weak fitness or a bad attitude.",
        ],
      },
    ],
    sourceLinks: [
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "Supplement: Military.com — Force RECON training", url: "https://365.military.com/special-operations/force-recon-marsoc-training.html" },
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
    ],
  }),

  deep({
    id: "usmc-0331",
    code: "0331",
    title: "Machine Gunner",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The machine gunner is the infantry's sustained-fire specialist: the Marine responsible for the crew-served machine guns that give rifle units their base of fire. The public ITB description is blunt — the 0331's job is to provide a high volume of constant machine-gun fire so riflemen can maneuver. Where the 0311 is the maneuver element, the 0331 is the reason maneuver is possible; machine gun teams are habitually attached from the weapons platoon to support rifle platoons, or massed under the company/battalion in weapons company. It is the most purely \"weapons-expert\" of the core infantry MOSs, and the one where technical mastery of the gun is the entire identity.",
    duties: [
      "Serve on a three-Marine machine-gun team as ammunition Marine, gunner, or team leader",
      "Clean, inspect, and account for crew-served machine guns, mounts, optics, spare barrels, and ammunition",
      "Machine-gun classes, dry training, and certification shoots — in the fleet, 0331s run certification courses for other Marines on the M2A1, Mk 19 and M240B",
      "Attach to rifle platoons/companies as their fire-support element during field exercises and deployments",
      "Serve vehicle-mounted in CAAT/weapons company roles or dismounted with rifle companies",
    ],
    school:
      "Recruit training → SOI/ITB Infantry Marine Course, 14 weeks (common infantry foundation) → Infantry Weapons Course — Machine Gunner specialization at SOI (Camp Geiger, NC or Camp Pendleton, CA), one of the three weapons-course specializations Marines.com lists (machine gunner, mortarman, anti-tank missile gunner). In the fleet: unit-run certification such as the 1st Marine Division Basic Machine Gun Course (certifies 0331 1000-level T&R events), the Advanced Machine Gun Course at AITB, and machine-gun leader development feeding 0365/0369.",
    requirements:
      "Entry is through the infantry (03) field via the School of Infantry weapons course. Current entry standards are published on Marines.com — verify on official source. No ASVAB/GT figure is shown: the source pack publishes none from an official source for this MOS.",
    dayInLife:
      "Garrison life for a 0331 is dominated by the guns: cleaning, inspecting, and accounting for heavy, expensive weapons and their mounts/optics, plus machine-gun-specific classes and dry training. Field time means carrying your share of a weapon system that was designed to be crew-served — gun, tripod, spare barrel, ammunition — distributed across the team, then living with it for days. Public unit coverage of the 1st Marine Division's Basic Machine Gun Course shows the ongoing standard: even in the fleet, 0331s run certification courses for other Marines on the M2A1, Mk 19 and M240B under NAVMC 3500.44D training standards. On deployment, gun teams are attached where the fight is expected — vehicle-mounted in CAAT/weapons company roles or dismounted with rifle companies.",
    careerPath:
      "Ammo Marine → gunner → Cpl team leader → Sgt squad leader → machine gun section leader and platoon leadership as an 0369 (the TBS lesson shows 0369s as section leaders and platoon sergeants throughout the machine-gun structure). The 0331 is also one of the five feeder MOSs for the 0365 Squad Leader lateral move (SLDP). Technical mastery opens instructor billets (division schools, SOI combat instructor) — the Basic Machine Gun Course cadre is explicitly 0331-led.",
    civilian:
      "Crew-served equipment maintenance discipline, team leadership, training delivery (fleet machine-gun instruction), security operations, heavy-equipment accountability.",
    similar: ["usmc-0311", "army-11b", "navy-gm"],
    extraSections: [
      {
        heading: "Organization",
        body: "Two homes, both documented in the public TBS lesson (2017-era published task organization; treat numbers as published-overview, subject to change). Rifle company weapons platoon — machine gun section: a section leader (0369), three squads, each with two machine-gun teams; each team is three Marines — team leader (Cpl, 0331), gunner (LCpl, 0331), ammunition Marine (Pvt, 0331). Six M240Bs per section; 22 Marines total. Battalion weapons company — heavy machine gun platoon: sections of combined M2A1 .50-cal and Mk 19 squads, vehicle-mounted, led by 0369 platoon leadership. Above them, the 0369 fills section/platoon sergeant billets; below them, 0331s are supported by the rifle units they attach to for security, transport and ammunition resupply.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "M240B medium machine gun — 7.62mm NATO, belt-fed, air-cooled, gas-operated, crew-served; the rifle company's standard medium machine gun. Public TBS fact file: gun 27.6 lb; total system with tripod/pintle/T&E ~47.6 lb; length 49 in.",
          "M2A1 .50-caliber heavy machine gun — the \"Ma Deuce\" family; .50 BMG, crew-served, vehicle-mounted or tripod-mounted; the heavy machine gun platoon's primary system alongside the Mk 19.",
          "Mk 19 Mod 3 40mm automatic grenade launcher — belt-fed, crew-served, fully automatic grenade launcher; public TBS fact file: total system ~140.6 lb.",
          "Supporting kit that defines the trade: tripods, pintles, traversing & elevating mechanisms, spare barrels, and the ammunition load the team carries.",
          "The Division Schools course page confirms the fleet standard plainly: 0331 instruction/certification covers exactly these three systems — M2A1, Mk 19, M240B.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You carry the weight — plan on it. The gun system plus ammunition is the heaviest load in the rifle company, split across a three-Marine team; the fact-file weights above tell the story plainly. Fitness for a 0331 means rucking heavy, not just running fast.",
          "The gun must always work. A machine gun that goes down is a team that failed its only job; cleaning and maintenance discipline, and knowing your weapon's condition, are what senior 0331s check first.",
          "You are a guest star in rifle platoons. Attached gun teams live with, eat with and are protected by riflemen — gunners who build good relationships with the supported platoon get fed, carried and looked after; difficult ones feel it immediately.",
          "Gunnery is a craft with a scoreboard. Qualification shoots and gun competitions are public, ranked events in infantry culture; the community remembers who can shoot.",
        ],
      },
    ],
    sourceLinks: [
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      { label: "1st Marine Division Schools — Basic Machine Gun Course (official)", url: DIV_SCHOOLS_BMGC },
      { label: "ITB chief instructor on the 0331 role (official DVIDS caption)", url: ITB_CAPTION },
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
    ],
  }),

  deep({
    id: "usmc-0341",
    code: "0341",
    title: "Mortarman",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The mortarman is the infantry commander's pocket artillery: the specialist who gives rifle companies and battalions their own responsive, high-angle indirect fire without waiting for artillery. The public ITB description frames it exactly that way — mortarmen provide fast, quick-response indirect fire with explosive, smoke and illumination rounds, immediately available to the unit they support. It is the most mathematical of the infantry specialties: the mortar itself is a simple tube, and the skill lives in the fire-direction process — observers, plotters and gun crews converting a call for fire into accurate rounds.",
    duties: [
      "Serve in one of three billets: gun line (the mortar squads), fire direction center (FDC — plotters/recorders who compute the firing data), or forward observer (FO) teams out with the maneuver companies",
      "Drills, maintenance of the mortar systems, FDC practice, and physical training in garrison",
      "Team-carry the mortar systems in the field — the M252's components total roughly 89 lb, the M224A1's roughly 47 lb (public fire-support lesson)",
      "Live-fire qualification — mortar proficiency is perishable and qualification-driven, and mortar sections are requested by name during battalion exercises",
    ],
    school:
      "Recruit training → SOI/ITB Infantry Marine Course, 14 weeks → Infantry Weapons Course — Mortarman specialization at SOI (one of Marines.com's three weapons-course tracks). Career development is unusually well documented publicly: the Infantry Mortar Leaders Course at AITB trains Marines to serve as section leader for a company 60mm section or as squad leader, plotter or section leader in a battalion 81mm platoon; the Advanced Mortarman Course is one of the named advanced-course pathways in the official 0365 prerequisites. Mortar NCOs also feed fire-support coordination billets as they grow toward 0369.",
    requirements:
      "Entry is through the infantry (03) field via the School of Infantry weapons course. Current entry standards are published on Marines.com — verify on official source. No ASVAB/GT figure is shown: the pack's figure for this MOS is supplement-sourced only.",
    dayInLife:
      "A mortarman's work splits three ways: gun line, fire direction center (FDC), and forward observer (FO) teams out with the maneuver companies. Garrison time is drills, maintenance of the mortar systems, FDC practice and physical training — the systems break down into man-portable loads, so field movement is a team carry. Live-fire is heavily scheduled because mortar proficiency is perishable and qualification-driven; expect to be the Marines other units request by name during every battalion exercise.",
    careerPath:
      "Ammunition Marine → assistant gunner → gunner → Sgt squad leader → section leader (60mm section or 81mm section) → platoon-level billets (plotter chief/FDC leadership) → 0369 Infantry Unit Leader (81mm platoon sergeant is a classic 0369 billet in the public task organization). 0341 is one of the five feeder MOSs for the 0365 lateral move. Because so few Marines hold deep mortar expertise, senior 0341s/0369s with mortar backgrounds are repeatedly pulled as instructors (SOI, division schools) and battalion fire-support staff.",
    civilian:
      "Applied mathematics and data-checking discipline, crew coordination under time pressure, surveying/land-navigation foundations, equipment maintenance, team leadership and instruction.",
    similar: ["army-11c", "usmc-0311", "usmc-0369"],
    extraSections: [
      {
        heading: "Organization",
        body: "Two structures, both from the public TBS lessons (published overview; treat as the documented task organization). 60mm mortar section — rifle company weapons platoon: a section leader and three squads, one M224A1 per squad, each squad three Marines (squad leader/gunner, assistant gunner, ammunition Marine) — about 10 Marines total, owned by the rifle company commander for immediate support. 81mm mortar platoon — battalion weapons company: platoon HQ (commander, platoon sergeant — 0369, ammunition technician), a fire-direction element (plotters/recorders), and two sections of four squads each — eight M252 mortars, squads of roughly six Marines, ~68 Marines total for the platoon. LAR battalions also hold an 81mm capability (eight systems per the TBS lesson). Mortarmen support everyone — rifle squads up through the battalion — and are in turn supported by the battalion's ammunition/logistics chain and by the observers and FOs who feed them targets.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "M224A1 60mm Lightweight Company Mortar System (LWCMS) — smoothbore, muzzle-loaded, high-angle-fire; the rifle company's organic mortar. Public fact file: max range ~3,500 m; components (cannon, bipod, baseplate, sight) total roughly 47 lb. Three per weapons platoon.",
          "M252 81mm mortar — smoothbore, muzzle-loaded, high-angle-fire medium mortar; the battalion's system. Public fact file: total weight ~89 lb; max range ~5,700 m depending on ammunition. Eight per weapons-company platoon (also eight in an LAR battalion).",
          "Fire-direction kit — plotting boards, fire-direction computers/charts and radios: the FDC is a system in its own right, and senior 0341 billets (plotter, section leader) live there.",
          "Ammunition families at fact-file level: high explosive, smoke, and illumination rounds (named in the ITB chief instructor's public description).",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Accuracy is a team computation, not a talent. New mortarmen are surprised how much of the job is math, communication discipline and repetition under time pressure — the FDC's plotting accuracy and the FO's calls matter as much as the gun crew's speed.",
          "You are only as good as your drills. Mortar crews are timed and evaluated constantly; the squads that look effortless in live-fire are the ones that drilled the boring parts hundreds of times in garrison.",
          "The load is real and shared. Mortar + baseplate + bipod + rounds means the whole squad carries weight on every movement — mortarmen who shirk the carry lose their squad fast.",
          "Everyone knows the mortar line. You support the entire company/battalion, so your competence (or failure) is public in a way a single rifle squad's is not. That visibility accelerates good careers.",
        ],
      },
    ],
    sourceLinks: [
      { label: "TBS public lesson — Principles of Fire Support (official)", url: TBS_FIRE_SUPPORT },
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      { label: "ITB chief instructor on the 0341 role (official DVIDS caption)", url: ITB_CAPTION },
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
      {
        label: "Supplement: Operation Military Kids — Mortarman MOS 0341",
        url: "https://www.operationmilitarykids.org/marine-corps-mortarman-mos-0341/",
      },
    ],
  }),

  deep({
    id: "usmc-0352",
    code: "0352",
    title: "Antitank Missile Gunner",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The 0352 is the infantry's dedicated armor-killer: the specialist in guided anti-armor missile systems, responsible — per the official MOS description — for the tactical employment of the TOW and Javelin weapon systems, anti-armor operations, and tactical vehicle operations. They provide medium and heavy anti-armor fire in support of the infantry battalion, the LAR battalion, and the MAGTF. In plain terms: when enemy armor appears, the battalion's planned answer is a small number of 0352 teams — which makes it a low-density, high-consequence MOS where a handful of Marines carry a mission the whole battalion depends on.",
    duties: [
      "Serve as assistant gunner or gunner on Javelin and TOW anti-armor teams",
      "Train on basic-skills trainers (live missiles are costly, so much training is on trainers), and maintain gunnery certification",
      "Serve in Combined Anti-Armor Teams (CAAT) — vehicle-mounted platoons that public MOS guides also describe as a quick-reaction force",
      "Vehicle maintenance for mounted platforms; time \"up in the turret\" on vehicle-mounted TOW and dismounted with Javelin teams",
      "Cross-train heavily on the M240 machine gun — 0352s are valued as general weapons Marines",
    ],
    school:
      "Recruit training → SOI/ITB Infantry Marine Course, 14 weeks → Infantry Weapons Course — Anti-Tank Missile Gunner specialization at SOI (Marines.com's third weapons-course track; the outcome is proficiency on Javelin and TOW systems). Career courses publicly named: the Advanced Anti-Armor Missileman Course (an advanced pathway named in the official 0365 prerequisites) and anti-armor leader development inside the 0369 pipeline (Infantry Unit Leaders Course covers anti-armor operations per the AITB course description).",
    requirements:
      "Entry is through the infantry (03) field via the School of Infantry weapons course. Current entry standards are published on Marines.com — verify on official source. No ASVAB/GT figure is shown: the source pack publishes none from an official source for this MOS.",
    dayInLife:
      "Most 0352s live in the battalion weapons company's anti-armor platoon, frequently task-organized into Combined Anti-Armor Teams (CAAT). Garrison time centers on the systems: expensive, electronics-heavy launchers and trainers (much training is done on basic-skills trainers rather than live missiles, which are costly), vehicle maintenance for their mounted platforms, and gunnery certification. Public MOS guides note the lived duality of the job: 0352s spend time \"up in the turret\" on vehicle-mounted TOW and dismounted with Javelin teams — and cross-train heavily on the M240.",
    careerPath:
      "Assistant gunner → gunner → Cpl/Sgt team and squad leader → section leader / platoon leadership as 0369 (the anti-armor platoon's section leaders and platoon sergeant are 0369 billets in the public task organization). 0352 feeds the 0365 lateral move like the other core MOSs. Small-community reality: senior 0352s are scarce, so experienced gunners are retained in anti-armor billets and instructor roles (SOI weapons course) rather than rotated out — expertise compounds.",
    civilian:
      "Guided-system/electronics handling discipline, vehicle operation and maintenance, crew leadership, high-value equipment accountability, security operations.",
    similar: ["usmc-0313", "usmc-0331", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "From the public TBS lesson (published task organization for the weapons company's Anti-Armor Platoon, ~41 Marines). Javelin section: section leader (0369), two squads, four teams (gunner + assistant gunner), eight Javelin systems — one per team. Antitank (TOW) section: section leader (0369), four squads of TOW gunners and assistant gunners, eight TOW systems — two per squad, vehicle- or tripod-mounted. 0352s also appear in LAR battalions' anti-armor structure. They support the battalion and LAR commanders directly; their small numbers mean a single team's readiness is a battalion-level readiness statistic.",
      },
      {
        heading: "Systems & equipment",
        bullets: [
          "FGM-148 Javelin — man-portable, fire-and-forget medium anti-armor missile system with a reusable Command Launch Unit (CLU); public TBS description: soft-launch (small backblast), dual engagement modes (top-attack or direct), carried and employed by a two-Marine team.",
          "TOW / M41 Saber system — heavy anti-armor missile system: tube-launched, optically tracked, wire command-link guided (the public TBS expansion of the acronym); fired from a tripod or a vehicle mount; the weapons company's heavy anti-armor system.",
          "M240 machine gun — mounted alongside/under vehicle TOW positions per public MOS-guide description; 0352s are expected to be competent machine gunners.",
          "Vehicle platforms: historically HMMWV-based CAAT vehicles, now JLTV-era mounts in public unit coverage — verify current platform on official source.",
        ],
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You will train on trainers more than live missiles — live rounds are expensive and scarce, so simulator/trainer proficiency and dry drills are where reputations are built, and gunnery certification is taken seriously.",
          "Vehicle skills are half the MOS. The official description includes tactical vehicle operations for a reason: CAAT is a mounted platoon, and a gunner who can't drive, navigate and maintain the vehicle is half a Marine to his team.",
          "Low density = high visibility. With only dozens of 0352s in a battalion, the battalion staff knows your name and your certification status. There is no anonymity — good or bad.",
          "Stay a rifleman. Like every weapons MOS, 0352s get pulled for dismounted tasks; public guides note they make \"great machine gunners as well,\" reflecting how much cross-training the fleet job actually demands.",
        ],
      },
    ],
    sourceLinks: [
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      { label: "Marines.com — Infantry roles", url: MARINES_COM_INFANTRY },
      { label: "Supplement: MOS description rendering (MOSDB) — 0352", url: "https://mosdb.com/army/0352/mos/84/" },
      { label: "Supplement: BeforeTheCorps — 0352 MOS guide", url: "https://www.beforethecorps.com/mosguide/0352" },
      {
        label: "Supplement: Operation Military Kids — Antitank Missileman MOS 0352",
        url: "https://www.operationmilitarykids.org/ANTITANK-MISSILEMAN-TOW-GUNNER-MOS-0352/",
      },
    ],
  }),

  deep({
    id: "usmc-0365",
    code: "0365",
    title: "Infantry Squad Leader",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "0365 is not an entry job and not exactly a specialty — it is the professionalized version of the most consequential small-unit billet in the Marine Corps: the rifle squad leader. The MOS Manual summary (rendered publicly by MarineParents) defines the job in one breath: the squad leader plans for assigned missions, carries out the platoon commander's orders, and is responsible at all times for the discipline, training, control, conduct and welfare of the squad, and for the condition, care and effective use of its weapons and equipment. The Corps created the 0365 PMOS (via the Squad Leader Development Program, SLDP) precisely because it decided this billet was too important to leave to whoever happened to be senior — it wanted mature, formally trained, second-term infantrymen holding it.",
    duties: [
      "Lead a 13-Marine rifle squad: plan for assigned missions and carry out the platoon commander's orders",
      "Own the squad's discipline, training, control, conduct and welfare — at all times",
      "Inspect Marines and gear; supervise team leaders; manage the squad's weapons/equipment account",
      "Counsel and develop junior Marines; be the platoon commander's executor and reality-check",
      "In the field, position, control and account for every Marine in the squad in every phase, while feeding information up",
    ],
    school:
      "Per the official HQMC prerequisites message (2015; the program's founding document — verify current prerequisites on official source, as program details evolve): eligibility is volunteer Corporals and Sergeants from one of the five core infantry MOSs (0311, 0331, 0341, 0351, 0352), roughly 3–6 years of service. Prerequisite education: graduate of an advanced infantry course for their specialty (Advanced Infantryman, Advanced Machine Gun, Advanced Mortarman, Advanced Assaultman, Advanced Anti-Armor Missileman) or the Scout Sniper pipeline. Required courses: the Infantry Small Unit Leaders Course (ISULC) — publicly reported as a six-week course at the Advanced Infantry Training Battalion (verify on official source) — plus the Sergeants Course (resident PME). AITB's Infantry Squad Leaders Course teaches the same billet skill set (decision-making, troop-leading, land navigation, calling for indirect fire, communications, crew-served weapons familiarization). The Hawaii Advanced Infantry Course variant was publicly described as 7 weeks.",
    requirements:
      "Not entry-level: a lateral designation earned mid-career by volunteer Corporals/Sergeants from the five core infantry MOSs who complete the Squad Leader Development Program prerequisites (see Training pipeline). Verify current prerequisites on official source — the founding HQMC message is from 2015 and program details evolve.",
    dayInLife:
      "A squad leader's day is other people's readiness: running squad PT, inspecting Marines and gear, planning and issuing orders for training and operations, supervising team leaders, managing the squad's weapons/equipment account, counseling and developing junior Marines, and being the platoon commander's executor and reality-check. In the field, the squad leader is where the platoon's plan meets 13 individual Marines — positioning, controlling and accounting for every one of them, in every phase, while feeding information up. Public coverage of squad-leader training (Marines.mil, Hawaii) describes the Advanced Infantry Course rhythm that prepares them: weeks split between classroom instruction and field operations, with senior instructors living in the field with students.",
    careerPath:
      "0365 is earned mid-career and normally pairs with reenlistment. From 0365, the road runs to 0369 at Staff Sergeant, and the squad-leader tour is the single strongest predictor of success as a platoon sergeant. Note the public nuance: Marines can and do serve as squad leaders without holding 0365 — the PMOS marks the formally developed, program-qualified subset. (Historic retention incentives were reported for qualified squad-leader billets; figures are year-specific and are not shown here — check a current official source.)",
    civilian:
      "Front-line supervision of a 13-person team, training planning and delivery, personnel welfare/counseling, equipment and budget accountability, operations planning under supervision — a direct translation to civilian first-line management.",
    similar: ["usmc-0311", "usmc-0369", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "The 0365 leads the 13-Marine rifle squad (see 0311 for structure): three fire teams plus an assistant squad leader, nested inside a rifle platoon led by a lieutenant (commander) and an 0369 platoon sergeant — the squad leader's two bosses, whose relationship defines his working life: he executes the platoon commander's orders and is mentored/checked by the platoon sergeant. In weapons platoons and LAR units, squad-leader billets apply to gun, mortar, anti-armor and LAV squads by analogy — but 0365 as a PMOS was built around the rifle squad.",
      },
      {
        heading: "Systems & equipment",
        body: "The squad leader's \"system\" is the whole squad's table of equipment: the M27-armed fire teams, the squad's crew-served attachments when present, its radios and navigation kit, and its accountability paperwork. (Systems by name are covered under 0311/0331/0341/0352; the 0365's expertise is employing the Marines who carry them — at overview level.)",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your squad leader is the Marine Corps, to you. New Marines rarely see officers daily; the 0365 (or the sergeant filling the billet) sets your standard for fitness, fieldcraft, discipline and what \"good\" looks like. Aspiring leaders should study theirs — both kinds of example.",
          "The billet is a welfare job as much as a warfighting job. The manual's own words — discipline, training, conduct and welfare \"at all times\" — mean the squad leader is the first Marine responsible when a junior Marine has a pay, family or personal crisis. That responsibility is why the Corps wanted second-term maturity in the billet.",
          "Preparation is the visible difference. Squad leaders are judged on orders, inspections and rehearsals long before any live event; the squads that perform are the ones whose leader planned the unglamorous details (water, batteries, accountability) without being told.",
        ],
      },
    ],
    sourceLinks: [
      { label: "HQMC — 0365 prerequisites / Squad Leader Development Program (official)", url: HQMC_0365 },
      { label: "Marines.mil — Infantry Squad Leaders / Advanced Infantry Course, Hawaii (official)", url: SQUAD_LEADER_ARTICLE },
      { label: "MarineParents — OccFld 03 (supplement)", url: MARINEPARENTS_03 },
      {
        label: "Supplement: Marine Corps Times — squad leader shortage / SLDP (2018)",
        url: "https://www.marinecorpstimes.com/news/your-marine-corps/2018/07/17/squad-leader-shortage-why-the-corps-is-handing-out-big-bucks-for-infantry-ncos/",
      },
    ],
  }),

  deep({
    id: "usmc-0369",
    code: "0369",
    title: "Infantry Unit Leader",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The 0369 is the career infantry SNCO: the platoon sergeants, section leaders, company gunnery sergeants and operations chiefs who make infantry units function. The MOS Manual summary (via MarineParents) defines it as the leader who assists the commander, helps plan, train, deploy and employ all of the unit's organic weapons systems and combat power, and supervises the preparation and assignment of personnel and equipment against the unit's table of organization/equipment. Every feeder MOS — rifleman, machine gunner, mortarman, anti-armor, LAR, recon — converges here: by Staff Sergeant, the specialty you started in matters less than the fact that you can now run any infantry platoon or section in the battalion.",
    duties: [
      "Serve as platoon sergeant — the platoon commander's senior enlisted partner, owning administration, logistics, casualty/welfare readiness, and the training and discipline of ~40 Marines",
      "Lead sections in weapons platoon/company: machine-gun, mortar, anti-armor, CAAT or scout-sniper sections",
      "Serve as company gunnery sergeant — the company's training and logistics engine",
      "Assist the commander in planning, training, deploying and employing all of the unit's organic weapons systems and combat power",
      "Supervise preparation and assignment of personnel and equipment against the unit's table of organization/equipment",
    ],
    school:
      "Core infantry MOS + a career of fleet billets → Infantry Unit Leaders Course (IULC) at the Infantry Unit Leaders Training Company, Advanced Infantry Training Battalion, SOI (East and West) — the course whose graduates earn 0369; public DVIDS coverage shows IULC students live-firing the full crew-served inventory (60mm mortars, M240B, M2 .50-cal) to certify their cross-system proficiency. Curriculum topics publicly listed for the unit-leader pipeline: advanced infantry skills and decision-making, machine and mortar gunnery, anti-armor operations, the Marine Corps Planning Process, leadership, law of land warfare, communications (written and verbal), UCMJ and personnel administration, and section/platoon leadership. Resident SNCO PME runs in parallel — verify current course names/lengths on official source; IULC length was not stated in the official pages retrieved for the source pack, so none is shown.",
    requirements:
      "Not entry-level: earned at Staff Sergeant from a core infantry MOS via the Infantry Unit Leaders Course. Ranks SSgt through GySgt hold the 0369 PMOS per the manual summary (MGySgt is the E-9 continuation of the same track). Verify current details on official source.",
    dayInLife:
      "As a platoon sergeant, the 0369 is the platoon commander's senior enlisted partner — owning administration, logistics, casualty/welfare readiness, and the training and discipline of ~40 Marines, and advising a young lieutenant whose tactical education the platoon sergeant quietly completes. As a section leader in weapons platoon/company, he runs machine-gun, mortar, anti-armor, CAAT or scout-sniper sections. As a company gunnery sergeant, he becomes the company's training and logistics engine. Official Marine biographies trace exactly this staircase — squad leader → platoon sergeant (0369 earned at Infantry Unit Leaders Course) → company roles → battalion operations chief.",
    careerPath:
      "Feeder MOS → squad leader (0365 for many) → 0369 at SSgt → platoon sergeant / section leader tours → company gunnery sergeant → E-8 decision point: Master Gunnery Sergeant (stay technical/operational: operations chief, the senior enlisted operator of a battalion/regiment) vs. First Sergeant → Sergeant Major (command advisory track). The biography record shows 0369s also filling battalion assistant operations chief and CAAT platoon sergeant billets, and being selected to First Sergeant from the 0369 base.",
    civilian:
      "Mid-level operations management of 40–200-person organizations, training-program management, logistics and personnel administration, safety and risk management, senior mentorship/instruction.",
    similar: ["usmc-0365", "usmc-0311", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "0369s are the connective tissue at every level the TBS lesson draws: machine-gun section leader in a weapons platoon; platoon sergeant of rifle, weapons, heavy machine gun, 81mm mortar, anti-armor, LAR, reconnaissance and scout-sniper platoons; section leader of CAAT and scout-sniper sections; weapons platoon sergeant and company gunnery sergeant at company level; and, as Master Sergeants/Master Gunnery Sergeants, operations chiefs for weapons companies, infantry battalions and higher headquarters (with 0399 Operations Chief as the senior enlisted operations code). Ranks: SSgt through GySgt hold the 0369 PMOS per the manual summary.",
      },
      {
        heading: "Systems & equipment",
        body: "All of them — that is the point of the MOS. The AITB unit-leader curriculum publicly lists proficiency across the infantry's crew-served inventory (machine guns, mortars, anti-armor systems — see 0331/0341/0352 for names and fact-file data) plus the planning, communications and administrative systems a platoon/company runs on. An 0369 is expected to be able to inspect, certify and build training for any system in his platoon.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "Your platoon sergeant is the standard. Long before an 0369 knows your name, he knows your squad leader's report on you; the fastest way up in the infantry is to be the Marine SNCOs ask for by name for hard tasks.",
          "0369s run on competence + administration. The unglamorous truth from every biography: the leaders who advance are masters of rosters, training schedules, gear accountability and personnel readiness — not just field skill.",
          "The lieutenant–platoon sergeant relationship is the unit's engine. Squad leaders who learn to work through that relationship (instead of around it) get their Marines taken care of; that education starts by watching your own chain as a junior Marine.",
        ],
      },
    ],
    sourceLinks: [
      { label: "MarineParents — OccFld 03 (supplement rendering of the MOS Manual summary)", url: MARINEPARENTS_03 },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
      { label: "TBS public lesson — Introduction to Crew Served Weapons (official)", url: TBS_CREW_SERVED },
      {
        label: "Official biography — First Sergeant William A. Randle, MCCSSS (0369 career example)",
        url: "https://www.mccsss.marines.mil/In-the-Media/Stories/Article/Article/4180394/first-sergeant-william-a-randle/",
      },
    ],
  }),

  deep({
    id: "usmc-0372",
    code: "0372",
    title: "Critical Skills Operator (Marine Raider)",
    branch: "Marine Corps",
    field: "03 — Infantry",
    summary:
      "The 0372 is the enlisted operator of Marine Forces Special Operations Command (MARSOC) — a Marine Raider. CSOs are not recruited off the street and not made from new Marines: they are experienced Marines, from any MOS (infantry heavily represented), who volunteer, pass a two-phase Assessment & Selection, and graduate a long professional course to earn a new primary MOS they then keep for the rest of their careers. Their work is the MARSOC mission set at overview level: direct action, special reconnaissance, foreign internal defense (training partner forces), counterterrorism and information operations, conducted by 14-Marine teams worldwide under U.S. Special Operations Command. (This entry's pipeline figures come from public supplements summarizing MARSOC material — each is flagged; verify on official source at MARSOC recruiting.)",
    duties: [
      "Serve as an operator on a 14-Marine Marine Special Operations Team (MSOT)",
      "Team workups and deployments: language and cultural training, advanced shooting and field skills sustainment, mission planning, partner-force training when deployed",
      "Operate semi-independently for long periods, far from any flagpole",
      "Relentless physical conditioning, swimming, and rucking — and being evaluated forever: \"selection never really ends\" is the community's own public framing",
      "Between deployments: reset, attend advanced schools (breaching, diving, freefall, advanced SERE/medical and language refreshers at overview level), and train the next rotation",
    ],
    school:
      "Pipeline (public supplement figures — verify every number against MARSOC recruiting on official source): eligibility is for active-duty, experienced Marines (public sources state at least ~3 years served or LCpl+ to be considered; screening numbers published in recruiting summaries are not shown here — verify current numbers on marsoc.marines.mil). Assessment & Selection (A&S): two phases of roughly three weeks each (~6 weeks total) — Phase 1 is primarily physical screening (running, swimming, ruck marches); Phase 2 evaluates attributes/team compatibility — preceded by record/physical/psychological screening and the ASPOC preparation course. Individual Training Course (ITC), now also titled the Marine Raider Course: ≈9 months — verify on official source (one public passage says \"ten-month program\"; the figures conflict). Four phases at overview level: basic special-operator skills (including SERE, combat casualty care, communications, fire support), small-unit operations, close-quarters/advanced skills, and irregular warfare. Basic Language Course: ~125 training days (about six months) after ITC, publicly reported; language assignment can extend total pipeline time substantially (era-dependent — verify). Graduates earn 0372 and the Raider designation/insignia and join a Raider battalion. Total realistic timeline from volunteering to seasoned operator is measured in years.",
    requirements:
      "Not entry-level and not enlistable: experienced active-duty Marines volunteer and are screened (records, fitness, reputation) before Assessment & Selection. Screening figures published in recruiting summaries (aptitude, fitness, swim, clearance eligibility) are supplement-sourced in the source pack and are not published here — get current numbers from MARSOC recruiting on the official source.",
    dayInLife:
      "Raider life is team life. A CSO's home is a Marine Special Operations Team (MSOT): workups and deployments cycle as a team — language and cultural training, advanced shooting and field skills sustainment, mission planning, partner-force training when deployed, and long periods operating semi-independently far from any flagpole. Public MARSOC recruiting material stresses the unglamorous constants: relentless physical conditioning, swimming, rucking, and being evaluated forever. Between deployments, teams reset, attend advanced schools (breaching, diving, freefall, advanced SERE/medical and language refreshers at overview level), and train the next rotation.",
    careerPath:
      "0372 is a career destination: CSOs remain in MARSOC for the duration of their careers (public MARSOC position), progressing inside the team structure — operator → element leader (GySgt) → team chief (MSgt, the senior enlisted of an MSOT) → company/battalion senior enlisted and instructor billets at the Marine Raider Training Center. Officers parallel them as 0370 Special Operations Officers. There is no \"rotating back to a normal MOS\" — the lateral move is permanent, and public material cites long minimum MARSOC tours (verify current tour length on official source). The permanence of the move is the single most important career fact about this MOS.",
    civilian:
      "Special-operations leadership and instruction, foreign-partner training/advising, language and cross-cultural skills, risk management, security consulting foundations — on top of the Marine's original MOS skills.",
    similar: ["usmc-0321", "usmc-0311", "army-18b"],
    extraSections: [
      {
        heading: "Organization",
        body: "MARSOC (HQ Camp Lejeune, NC) has three components: the Marine Raider Regiment — HQ company plus 1st, 2d and 3d Marine Raider Battalions (1st at Camp Pendleton; 2d and 3d at Camp Lejeune); the Marine Raider Support Group (the enablers: intelligence, logistics, communications, firepower-control teams, multipurpose canines) whose specialists augment the teams; and the Marine Raider Training Center, which runs selection and the Raider Course. Inside a battalion: four Marine Special Operations Companies, each with four MSOTs. An MSOT is 14 Marines: a captain team commander, a master sergeant team chief (a senior 0372), and two tactical elements, each led by a gunnery-sergeant element leader and including a Navy Special Amphibious Reconnaissance Corpsman.",
      },
      {
        heading: "Systems & equipment",
        body: "At public overview level, CSOs are cross-trained on the standard infantry inventory (M27 family, crew-served systems — see 0311/0331) plus the special-operations toolkit publicly associated with Raider teams: suppressed/precision rifle variants, night-vision and communications suites, and team-level breaching, diving and parachuting equipment sets for qualified operators. The honest public point for a new Marine is that a CSO is expected to be an expert generalist across every system his team carries, not a single-system specialist.",
      },
      {
        heading: "What new Marines should know",
        bullets: [
          "You cannot enlist into this, and you cannot rush it. The gate is years away for a new Marine: build an unimpeachable record in your first MOS first — MARSOC screens records, fitness and reputation before A&S ever starts.",
          "The published minimums are floors, not targets. Recruiting guidance quoted in public guides is explicit that arriving at A&S at the minimum fitness standard is arriving unprepared; successful candidates publicly describe 12+ months of deliberate preparation.",
          "Maturity is the selection criterion nobody can fake. Phase 2 exists to evaluate attributes and team fit; Raiders operate in tiny teams in ambiguous situations where character under exhaustion is the job.",
          "It is a whole-career commitment — long minimum tours, constant evaluation, and a permanent MOS change. Marines who treat it as a résumé stop are screened out by design.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Supplement: Wikipedia — Critical Skills Operator", url: "https://en.wikipedia.org/wiki/Critical_skills_operator" },
      {
        label: "Supplement: Wikipedia — United States Marine Forces Special Operations Command",
        url: "https://en.wikipedia.org/wiki/United_States_Marine_Forces_Special_Operations_Command",
      },
      { label: "NAVMC 1200.1L MOS Manual (official)", url: NAVMC_URL },
    ],
  }),
];
