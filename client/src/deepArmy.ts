// Deep U.S. Army entries, built from the researched deep source pack at
// ~/workspace/military-app/deep/army.md (public sources, official first —
// DA Pam 611-21 Ch. 10, GoArmy, schoolhouse / Center of Excellence pages —
// accessed Nov 8, 2026). Content is paraphrased from that pack at
// name / fact-file level only — no tactical step-by-step. 12B, the
// 18-series, 35M/35N/35P, 37F and 89D stay at mission/career level, as
// the pack has them. Figures the pack flags as conflicting across
// official sources (11B/11C and 19D/19K OSUT lengths, 89D Phase-2
// length, 15T/15W/35F lengths) are shown with the pack's conflict
// framing, never as a single flat fact; the AIT lengths and locations
// the pack marks "verify on GoArmy" stay unstated or carry that flag.
// No ASVAB scores are shown — the pack researched none.

import type { MosEntry } from "./data";

const DA_PAM_URL =
  "https://api.army.mil/e2/c/downloads/2025/12/04/7573670f/chapter-10-enlisted-base-chapter.pdf";
const GOARMY_AIT = "https://www.goarmy.com/careers-and-jobs/job-training/advanced-individual-training";
const USAREC_INFANTRY =
  "https://recruiting.army.mil/News/Article-Display/Article/2100630/us-army-offering-bonus-for-new-infantry-recruits/";
const GUARD_12B = "https://contentstaging.nationalguard.com/12B-combat-engineer";
const GUARD_12N = "https://contentstaging.nationalguard.com/12n-horizontal-construction-engineer";
const FLW_554TH =
  "https://home.army.mil/wood/units-tenants/USAES/Orgs/1stENBDE/554thENBN/554th_ACO";
const SILL_13B = "https://sill-www.army.mil/428thfa/ait/mos/13B/13.html";
const ARMYMIL_13B =
  "https://www.army.mil/article-amp/142278/ait_cannon_crewmembers_join_ranks_of_field_artillery";
const GUARD_15T = "https://www.nationalguard.com/15t-uh-60-helicopter-repairer";
const GUARD_15T_COURSE = "https://contentstaging.nationalguard.com/15T-UH-60-Helicopter-Repairer";
const ARMYMIL_15W = "http://www.army.mil/article/86075/";
const CCOE_17C =
  "https://cybercoe.army.mil/Cyber-Center-of-Excellence/Schools/Cyber-School/Cyber-Courses/Cyber-Operations-Specialist/";
const CMF18_TALENT =
  "http://api.army.mil/e2/c/downloads/2023/10/04/a9d43752/cmf-18-board-products-4-oct-23.pdf";
const GUARD_19Z = "https://content.nationalguard.com/19z-armor-senior-sergeant";
const SIGNAL_25B =
  "https://cybercoe.army.mil/Cyber-Center-of-Excellence/Schools/Signal-School/Signal-Courses/Enlisted-Courses/25B-Information-Technology-Specialist/";
const GUARD_35F = "https://content.nationalguard.com/node/249";
const GOARMY_68W =
  "https://www.goarmy.com/careers-and-jobs/science-medicine/intensive-care/68w-combat-medic-specialist";
const ARMYMIL_68K = "https://www.army.mil/article/138884";
const GUARD_68C = "https://nationalguard.com/68c-practical-nursing-specialist";
const DRUM_89D =
  "https://home.army.mil/drum/about/news/news-archives-july-2021/challenging-and-rewarding";

const PRIMARY = {
  sourceName: "OFFICIAL — DA Pam 611-21 Ch. 10, Army.mil (deep Army source pack, accessed Nov 8, 2026)",
  sourceUrl: DA_PAM_URL,
  sourceOfficial: true,
};

function deep(base: Omit<MosEntry, "level" | "sourceName" | "sourceUrl" | "sourceOfficial">): MosEntry {
  return { ...base, level: "full", ...PRIMARY };
}

const REQ_VERIFY =
  "No ASVAB line score is published for this MOS in the deep source pack (DA Pam 611-21 Ch. 10 and the official pages it cites), so none is shown rather than guessed — check the current line score and entry standard on GoArmy.com.";

const DA_PAM_LINK = { label: "DA Pam 611-21 Ch. 10 — MOS specifications (official)", url: DA_PAM_URL };
const GOARMY_LINK = { label: "GoArmy — Advanced Individual Training (verify current course details)", url: GOARMY_AIT };

export const DEEP_ARMY: MosEntry[] = [
  /* ========================= CMF 11 — Infantry ========================= */
  deep({
    id: "army-11b",
    code: "11B",
    title: "Infantryman",
    branch: "Army",
    field: "CMF 11 — Infantry",
    summary:
      "The Army's core ground-combat Soldier and its largest combat MOS. Recruits enlist as 11X and are assigned 11B (the rifleman line) or 11C (mortars) during OSUT, based on Army needs and performance. Everything else in the ground force — armor, artillery, aviation, logistics — exists to put infantry on an objective and keep it there, which is why this is the benchmark combat-arms entry in the library.",
    duties: [
      "Serve as a member of a 9-man rifle squad — squad leader, two 4-man fire teams (team leader, automatic rifleman, grenadier, rifleman)",
      "Garrison: morning PT, weapons cleaning and arms-room accountability, motor-pool time in mechanized units, classes, ranges, sergeant's time training, and layout/inspection cycles",
      "Train on the training calendar's build-up: individual skills, then team, squad, platoon, company and battalion live-fires and field exercises",
      "Culminate in a combat training center rotation (JRTC at Fort Johnson, NTC at Fort Irwin, or JMRC in Germany)",
      "Deployed/field: patrols, security, and living out of a rucksack or a Bradley/Stryker",
    ],
    school:
      "22-week OSUT at Fort Benning, GA (Infantry School / 198th Infantry Brigade) — the USAREC/GoArmy figure carried in the source pack. Note: a secondary source flagged some Fort Benning brigade pages describing 18-week courses in 2026, so re-verify the current OSUT length on GoArmy before relying on it.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Garrison life is far less glamorous than the recruiting poster: morning PT, weapons cleaning and arms-room accountability, motor-pool time if in a mechanized unit, classes, ranges and sergeant's time training, and a lot of layout/inspection cycles. The real rhythm is the training calendar — individual skills, then team, squad, platoon, company and battalion live-fires and field exercises building toward a combat training center rotation. Deployed or in the field, it is patrols, security, and living out of a rucksack or a Bradley/Stryker.",
    careerPath:
      "Rifleman → automatic rifleman/grenadier → team leader (junior NCO, typically CPL/SGT) → squad leader (SSG) → platoon sergeant (SFC) → first sergeant (1SG) → sergeant major track (senior infantry Sergeants Major serve as 11Z Infantry Senior Sergeant). Common broadening: Drill Sergeant, Recruiter, Ranger Instructor. Schools that define careers: Ranger School, Airborne, Air Assault, Pathfinder, Sniper (ASI), and Master Gunner paths in mechanized units.",
    civilian:
      "Security, law-enforcement foundations, corrections, physical-training instruction, and emergency services pathways. Army COOL lists security and fitness-related credentials for the field — verify the current list on Army COOL.",
    similar: ["usmc-0311", "usmc-0331", "army-11c"],
    extraSections: [
      {
        heading: "Organization",
        body: "The building block is the 9-man rifle squad (squad leader, two 4-man fire teams, each with a team leader, automatic rifleman, grenadier and rifleman — structure per Army infantry doctrine summaries; supplement: Wikipedia “Squad” / FM 3-21.8 references). Squads form rifle platoons (with a weapons squad); platoons form rifle companies in infantry battalions inside Brigade Combat Teams — light (airborne/air assault), Stryker, or armored (mechanized) variants, which changes how an 11B actually lives day to day.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M4 carbine (the individual weapon); M249 SAW and its replacement program context; M240-series medium machine guns at weapons-squad level; M320 grenade launcher; AT4 and FGM-148 Javelin anti-armor systems at platoon/company level; M2 .50-cal on vehicles. Mechanized 11Bs crew around the M2 Bradley IFV (25mm Bushmaster chain gun, TOW launcher, 3-man crew + dismount squad) and Stryker ICV variants.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your reputation is made on PT, land navigation, marksmanship, and not losing sensitive items — in that order, early.",
          "Learn the radio (reporting formats) and learn your weapon's maintenance until it is automatic.",
          "“Hurry up and wait” is a real operating rhythm, not a joke.",
          "The Soldiers who get the good schools are the ones already fit and already squared away before the slot opens.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "USAREC — Army offering bonus for new infantry recruits (OSUT)", url: USAREC_INFANTRY },
    ],
  }),

  deep({
    id: "army-11c",
    code: "11C",
    title: "Indirect Fire Infantryman",
    branch: "Army",
    field: "CMF 11 — Infantry",
    summary:
      "The infantry battalion's own mortar specialist — the crew-served indirect fire that a rifle company commander owns outright, without asking higher headquarters. 11Cs enlist as 11X alongside future 11Bs and are assigned the mortar specialty inside the same OSUT pipeline.",
    duties: [
      "Serve on mortar gun lines: crew drills, ammunition accountability, and fire-direction computation practice",
      "Mirror the 11B battalion rhythm — same units, same field cycle — plus mortar-specific maintenance and certification",
      "Maintain baseplates, bipods, sights, and mortar carriers; classroom fire-direction center (FDC) work in garrison",
      "Cross-train as riflemen — mortar crews are infantrymen first",
    ],
    school:
      "Same 11X enlistment and OSUT at Fort Benning, GA as 11B (22 weeks per the USAREC/GoArmy figure in the source pack — but see the 11B entry: some 2026 Fort Benning brigade pages were flagged describing 18-week variants, so verify the current length on GoArmy). Mortar specialization is assigned and trained inside the OSUT/branch pipeline.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Mirrors 11B life — same battalions, same field cycle — plus mortar-specific work: gun-line drills, ammunition accountability, fire-direction computations practice, and a heavy emphasis on crew drills and safety certification cycles. In garrison, mortar platoons and sections spend significant time on equipment maintenance (baseplates, bipods, sights, mortar carriers) and classroom FDC work.",
    careerPath:
      "Mortar crewman → gunner/FDC → mortar section sergeant → mortar platoon sergeant; senior 11Cs feed 11Z Infantry Senior Sergeant. Mortar leaders are also prized as FDC chiefs and in battalion fire-support planning cells.",
    civilian:
      "Crew teamwork, applied math, and security/public-safety foundations; there is no direct civilian twin — transfer runs through leadership and operations experience.",
    similar: ["usmc-0341", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Mortar sections in rifle companies (light mortars) and a mortar platoon in the battalion's headquarters company (heavy mortars), including mounted mortar carriers in mechanized/Stryker units.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M224 60mm mortar (company level), M252 81mm mortar (company/battalion), M120/M121 120mm mortar (battalion, including the M1129 Stryker mortar carrier and tracked carriers) — calibres and roles per Army weapons-system descriptions. Fire direction uses mortar fire-control systems (MFCS / lightweight handheld devices) at fact level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Mortars are a thinking crew job disguised as a physical one — math accuracy and drill precision are your credibility.",
          "Ammunition safety rules are absolute; the mortar community polices itself hard on this.",
          "Cross-train on FDC early; it makes you promotable.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, { label: "USAREC — infantry OSUT article", url: USAREC_INFANTRY }],
  }),

  /* ========================= CMF 12 — Engineer ========================= */
  deep({
    id: "army-12b",
    code: "12B",
    title: "Combat Engineer",
    branch: "Army",
    field: "CMF 12 — Engineer",
    summary:
      "The engineer who works with and for maneuver forces — the mission areas are mobility, countermobility, survivability and general engineering, the same conceptual triad as USMC 1371. This entry is deliberately overview-only: duties, organization and career, with no demolitions, breaching or obstacle-construction procedures.",
    duties: [
      "Mobility, countermobility, survivability and general-engineering support to maneuver forces (mission level)",
      "Equipment and vehicle maintenance in the motor pool",
      "Engineer training exercises: bridging support, route/area clearance at concept level, construction tasks, field fortification work",
      "Support infantry/armor units during their exercises — engineers are often attached out to the unit they support rather than working for their own battalion day to day",
    ],
    school:
      "14-week OSUT at Fort Leonard Wood, MO (Engineer School) — Army National Guard 12B page figure, carried in the source pack.",
    requirements: REQ_VERIFY,
    dayInLife:
      "At a high level: equipment and vehicle maintenance in the motor pool, engineer training exercises (bridging support, route/area clearance at concept level, construction tasks, field fortification work), range and demolition training events described only as recurring training, and supporting infantry/armor units during their exercises — engineers are often attached out to the unit they support rather than working for their own battalion day to day.",
    careerPath:
      "Combat engineer → team leader → squad leader → platoon sergeant, with the Sapper Leader Course (Fort Leonard Wood) as the field's signature tab and a major career marker; senior path to 12Z Engineer Senior Sergeant; warrant path into engineer/geospatial warrant fields (120A/125D at senior levels — verify the current warrant MOS mapping on the Engineer School site).",
    civilian:
      "Construction trades, heavy-equipment support, road/earthwork crews, construction safety; OSHA and NCCER credentials are commonly pursued via Army Credentialing Assistance (verify the current CA list).",
    similar: ["usmc-1371", "army-12w", "navy-bu"],
    extraSections: [
      {
        heading: "Organization",
        body: "Combat engineer companies in Brigade Engineer Battalions (BEBs) inside BCTs; separate engineer battalions/companies for route clearance and mobility support; Sapper companies in airborne/air assault formations.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level only: engineer vehicles and plant — assault breacher and bridging systems (e.g. the M104 Wolverine heavy assault bridge, Joint Assault Bridge, improved ribbon bridge at program level), mine-clearing line systems by program name, standard engineer tool/equipment sets, and the unit's vehicles (HMMWV/Stryker engineer variants). No employment detail.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You will be judged first as a Soldier-engineer hybrid: PT and fieldcraft like the infantry you support, plus technical competence.",
          "Engineers get attached to many different units, so adaptability and being low-maintenance for the supported unit is the real professional skill.",
          "Sapper School is competitive — start preparing physically early.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 12B Combat Engineer", url: GUARD_12B },
    ],
  }),

  deep({
    id: "army-12n",
    code: "12N",
    title: "Horizontal Construction Engineer",
    branch: "Army",
    field: "CMF 12 — Engineer",
    summary:
      "The Army's heavy-equipment operator — builds and repairs roads, airfields, landing zones and earthworks. If a force needs ground shaped, graded or compacted, a 12N and their machine did it.",
    duties: [
      "Operate heavy construction equipment on real projects: grading roads, cutting ditches, building pads and berms",
      "Pre-operation checks at the motor pool; maintenance days (greasing, services, fault reporting)",
      "Field exercises where the unit builds what the force needs",
      "Garrison project work that looks like a civilian construction site with Army accountability layered on top",
    ],
    school:
      "10 weeks BCT + AIT of 8 weeks and 2 days at Fort Leonard Wood, MO — Army National Guard 12N page figure; the 554th Engineer Battalion confirms the course is an 8-week program split into 8 equipment annexes, one per machine family.",
    requirements: REQ_VERIFY,
    dayInLife:
      "This is a seat-time job: pre-operation checks at the motor pool, then operating on real projects — grading roads, cutting ditches, building pads and berms — mixed with maintenance days (greasing, services, fault reporting) and field exercises where the unit builds what the force needs. Garrison weeks on a project site look like a civilian construction site with Army accountability layered on top; the Fort Leonard Wood training battalion runs the Army's only active-duty quarry as part of this world (official battalion page).",
    careerPath:
      "Operator → senior operator → squad/section leader → platoon sergeant; feeder MOS for 12H Construction Engineering Supervisor (reclassification, typically at SSG — supplement); senior path 12Z Engineer Senior Sergeant.",
    civilian:
      "Direct twin: heavy equipment operator. CDL, NCCER Heavy Equipment Operations and OSHA 10/30 are the commonly cited credential paths (supplement: battalionduty engineer guide; verify current funding on Army COOL).",
    similar: ["usmc-1345", "army-12b", "navy-eo"],
    extraSections: [
      {
        heading: "Organization",
        body: "Horizontal construction companies/platoons in engineer battalions; construction companies supporting divisions and theater engineer brigades.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: Caterpillar D7R/D-series bulldozers, 120M/140M motor graders, 621G scrapers, hydraulic excavators (HYEX), loaders, dump trucks and rollers — machine names/types per the GoArmy job description and the 554th Engineer Battalion course page (8 annexes, one per machine family).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Documented seat time is your career currency — log hours on every machine you touch and keep your licensing records straight, because they map to civilian credentials.",
          "Ground-guide and spotter discipline is where safety reputations are made or lost.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 12N Horizontal Construction Engineer", url: GUARD_12N },
      { label: "554th Engineer Battalion, Fort Leonard Wood (official)", url: FLW_554TH },
    ],
  }),

  deep({
    id: "army-12w",
    code: "12W",
    title: "Carpentry and Masonry Specialist",
    branch: "Army",
    field: "CMF 12 — Engineer",
    summary:
      "Vertical construction — the carpenter/mason who builds the wooden and masonry structures of camps, ranges and facilities. 12Ws are the Army's builders, paired in the same companies with the horizontal operators, plumbers and electricians who together raise a base from bare ground.",
    duties: [
      "Framing, concrete formwork and placement support, block/brick work, roofing and finishing tasks on troop projects",
      "Garrison work at the unit's engineer shops and on-post projects; deployed, building and repairing base infrastructure",
      "Tool accountability and material estimating — a bigger part of the job than recruits expect",
    ],
    school:
      "BCT + AIT at Fort Leonard Wood, MO. AIT length: ~6 weeks appears in secondary compilations of GoArmy data — verify on the official GoArmy 12W page before relying on a number.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Project-based: framing, concrete formwork and placement support, block/brick work, roofing and finishing tasks on troop projects; garrison work at the unit's engineer shops and on-post projects; deployed, building and repairing base infrastructure. Tool accountability and material estimating are a bigger part of the job than recruits expect.",
    careerPath:
      "Journeyman progression inside vertical platoons → squad leader → platoon sergeant; feeder for 12H Construction Engineering Supervisor reclassification; 12Z senior path.",
    civilian:
      "Carpentry and masonry trades; USMAP apprenticeship registration for carpentry is a standard pathway (verify on USMAP/Army COOL).",
    similar: ["usmc-1371", "navy-bu", "army-12b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Vertical construction companies/platoons in engineer battalions, often paired with 12N (horizontal), 12K (plumber) and 12R (interior electrician) trades in the same company.",
      },
      {
        heading: "Systems & equipment",
        body: "Trade tools and shop equipment — saws, mixers, formwork systems, scaffolding, surveying/layout tools at trade level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Read drawings and do material take-offs early — the 12W who can estimate and lay out work, not just swing a hammer, becomes the go-to NCO.",
          "Keep a personal record of projects; it converts directly into civilian apprenticeship credit discussions.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-12y",
    code: "12Y",
    title: "Geospatial Engineer",
    branch: "Army",
    field: "CMF 12 — Engineer",
    summary:
      "The Army's map-maker and terrain analyst — turns satellite imagery, survey data and digital terrain models into the geographic products commanders plan on. One of the most technically portable jobs in the engineer field.",
    duties: [
      "Build map products on deadlines for exercises and operations",
      "Maintain geospatial databases and produce terrain analysis (trafficability, line-of-sight style products at concept level)",
      "Brief what the ground means for a plan",
      "Field survey/collection tasks alongside the office/lab core of the job",
    ],
    school:
      "BCT + AIT — training is conducted with the Engineer School structure (the geospatial course has historically run at Fort Leonard Wood / Fort Belvoir-associated programs — verify the current location and length on GoArmy; a ~20-week figure appears in secondary compilations only, so it is not published here as fact).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Mostly a technical office/lab job (with field survey/collection tasks): building map products on deadlines for exercises and operations, maintaining geospatial databases, producing terrain analysis (trafficability, line-of-sight style products at concept level), and briefing what the ground means for a plan. Work tempo spikes hard around exercises and deployments.",
    careerPath:
      "Analyst → team leader → geospatial cell NCOIC → senior geospatial NCO; warrant path 125D Geospatial Engineering Technician is the field's signature warrant route (verify current requirements on the warrant recruiting site).",
    civilian:
      "GIS technician/analyst — one of the strongest civilian twins in CMF 12; Esri technical certifications and the GISP pathway (verify credential details on Army COOL).",
    similar: ["army-35g", "usmc-0261", "army-12b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Geospatial cells at brigade/battalion, engineer topographic companies, and the Army Geospatial Center support structure (organizational level per DA Pam).",
      },
      {
        heading: "Systems & equipment",
        body: "GIS workstations and the Army's geospatial software stack (commercial GIS such as Esri ArcGIS is the publicly known core tool), large-format plotters, GPS/survey equipment; the Digital Topographic Support System (DTSS) is the long-standing named program at fact level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Software fluency is the whole game — GIS shortcuts, data hygiene, and product design (a map a commander can read in 10 seconds) are what seniors actually value.",
          "Build a portfolio of products (unclassified training ones) for civilian applications.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-12m",
    code: "12M",
    title: "Firefighter",
    branch: "Army",
    field: "CMF 12 — Engineer",
    summary:
      "A uniformed Army firefighter — structural and aircraft rescue firefighting (ARFF), fire prevention and emergency response on Army installations and airfields, with certifications that mirror the civilian fire service.",
    duties: [
      "Station life mirroring a civilian fire department: shift work, apparatus and equipment checks, physical training",
      "Drills — live-fire, rescue, hazmat awareness — plus inspections and fire-prevention visits",
      "Actual emergency responses on installations and airfields",
      "Deployed/field assignments add airfield crash-fire-rescue coverage",
    ],
    school:
      "BCT + the joint-service fire training pipeline at the DoD Fire Academy, Goodfellow AFB, TX (the Louis F. Garland Fire Academy is the publicly known schoolhouse for Army firefighters) — verify the current course name/length on GoArmy before relying on a length.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Station life mirrors a civilian fire department: shift work, apparatus and equipment checks, physical training, drills (live-fire, rescue, hazmat awareness), inspections and prevention visits, and actual emergency responses. Deployed/field assignments add airfield crash-fire-rescue coverage.",
    careerPath:
      "Firefighter → crew chief/driver-operator → station captain/shift leader → fire chief track at senior grades; the field is small, so reputation and certifications travel with you.",
    civilian:
      "Municipal and airport firefighting; the pipeline is designed around nationally recognized fire/EMT certifications (credential-dependent — verify specifics on Army COOL).",
    similar: ["af-3e7x1", "army-12b", "cg-bm"],
    extraSections: [
      {
        heading: "Organization",
        body: "Firefighting detachments/companies under engineer and garrison structures at installations and airfields.",
      },
      {
        heading: "Systems & equipment",
        body: "Fire apparatus at name level — structural pumpers, ARFF crash trucks, rescue vehicles, SCBA and protective ensembles, ladders and rescue tools (trade level).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Certifications are the job — the DoD/IFSAC/Pro Board certificates you earn are nationally portable, so keep copies of everything.",
          "Small-field reality: you will run into the same people your whole career.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ====================== CMF 13 — Field Artillery ====================== */
  deep({
    id: "army-13b",
    code: "13B",
    title: "Cannon Crewmember",
    branch: "Army",
    field: "CMF 13 — Field Artillery",
    summary:
      "The gun line — crews that serve the Army's tube artillery. A maintenance-and-drills job punctuated by live fire, inside a field that lives by its certification tables: crews are constantly being evaluated.",
    duties: [
      "Daily services on the howitzer and vehicles; gun drills and safety certification cycles",
      "Ammunition handling under strict accountability",
      "Field exercises built around firing batteries",
      "Redeployment/reset maintenance — the unglamorous half of artillery readiness",
    ],
    school:
      "10 weeks BCT + ~6 weeks AIT at Fort Sill, OK (Fires Center of Excellence) — GoArmy figure as carried in the source pack; re-verify the exact weeks on GoArmy. Fort Sill's 428th FA Brigade runs the course.",
    requirements: REQ_VERIFY,
    dayInLife:
      "A maintenance-and-drills job punctuated by live fire: daily services on the howitzer and vehicles, gun drills and safety certification cycles, ammunition handling under strict accountability, field exercises built around firing batteries, and redeployment/reset maintenance. In garrison, artillery units live by their certification tables — crews are constantly being evaluated.",
    careerPath:
      "Cannoneer → gunner → section chief (the job's key leadership test) → platoon sergeant / battery first sergeant path → 13Z Field Artillery Senior Sergeant; warrant path 131A Field Artillery Targeting Technician at senior NCO level.",
    civilian:
      "Heavy-equipment crew operations, logistics/ammunition discipline, safety-critical industry roles; limited direct twin.",
    similar: ["usmc-0811", "army-13m", "army-13f"],
    extraSections: [
      {
        heading: "Organization",
        body: "Firing batteries (typically six guns) in field artillery battalions inside BCTs and fires brigades.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M109A7 Paladin 155mm self-propelled howitzer (tracked, crew of 4); M777A2 155mm towed howitzer; M119A3 105mm towed howitzer (light/airborne units); supported by the M992 FAASV ammunition carrier for Paladin units. Calibres/roles per Army weapons-system descriptions.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Section chief is the rank where artillery careers are decided — learn every position on the gun, not just yours.",
          "Take safety certification deadly seriously; artillery has a zero-tolerance culture on gun-line safety.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Fort Sill 428th FA Brigade — 13B AIT (official)", url: SILL_13B },
      { label: "Army.mil — AIT cannon crewmembers join the ranks of field artillery", url: ARMYMIL_13B },
    ],
  }),

  deep({
    id: "army-13f",
    code: "13F",
    title: "Fire Support Specialist",
    branch: "Army",
    field: "CMF 13 — Field Artillery",
    summary:
      "The forward observer / fire-support specialist (FIST) embedded with maneuver companies — the link between the infantry or armor unit on the ground and the artillery, mortars and other fires behind it. Described at mission level only.",
    duties: [
      "Live with the supported maneuver unit, not the gun line — you are the fires link in its headquarters",
      "Radio and digital-fires equipment maintenance; fire-support planning products",
      "Observer training and certification; field exercises spent positioned with company headquarters",
      "A heavy communications/digital systems component in garrison work — the FIST's kit is electronics-heavy",
    ],
    school:
      "BCT + AIT at Fort Sill, OK; length: verify on GoArmy (figures around 10–16 weeks appear in secondary sources across recent course versions — no single figure is published here without the official page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Lives with the supported maneuver unit, not the gun line: radio and digital-fires equipment maintenance, fire-support planning products, observer training and certification, and field exercises spent positioned with company headquarters. Garrison work includes a heavy communications/digital systems component — the FIST's kit is electronics-heavy.",
    careerPath:
      "Observer → FIST team member → fire support sergeant at company/battalion → brigade fire support NCO; warrant path 131A Field Artillery Targeting Technician.",
    civilian:
      "Dispatch/coordination, surveying/GIS support, emergency-services communications; limited direct twin.",
    similar: ["usmc-0861", "army-13b", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Fire support teams (FISTs) at company level, fire support cells at battalion/brigade, under the fires battalion's umbrella.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: digital fires systems — AFATDS (the Army's fire-support command-and-control system), target-location/designation equipment such as the LLDR (Lightweight Laser Designator Rangefinder) family, and standard tactical radios. Names/roles only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You are a guest in someone else's company — the good FISTs earn trust by being the best radio/digital-systems Soldier in the headquarters and by knowing the supported unit's job, not just their own.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-13m",
    code: "13M",
    title: "Multiple Launch Rocket System (MLRS/HIMARS) Crewmember",
    branch: "Army",
    field: "CMF 13 — Field Artillery",
    summary:
      "Crewmember on the Army's rocket artillery — the launchers that deliver precision rocket and missile fires at long range. HIMARS units are strategically in demand, so exercise and deployment tempo in this MOS has been high in recent years (publicly reported at general level).",
    duties: [
      "Vehicle-and-launcher maintenance — the dominant share of garrison life",
      "Crew drills, driver training, reload/ammunition logistics exercises",
      "Live-fire certifications on the launcher systems",
    ],
    school:
      "BCT + AIT at Fort Sill, OK; length: verify on GoArmy (the source pack did not confirm a figure).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Vehicle-and-launcher maintenance dominates garrison life, plus crew drills, driver training, reload/ammunition logistics exercises and live-fire certifications. HIMARS units are strategically in demand, so exercise and deployment tempo in this MOS has been high in recent years (publicly reported at general level).",
    careerPath:
      "Crewmember → driver/gunner roles → section chief → platoon sergeant; HIMARS/MLRS senior NCOs also staff fires brigades and schoolhouse instructor billets; warrant path 131A Field Artillery Targeting Technician.",
    civilian:
      "Heavy-vehicle operation/maintenance, logistics and safety disciplines.",
    similar: ["army-13b", "usmc-0811", "army-14e"],
    extraSections: [
      {
        heading: "Organization",
        body: "MLRS/HIMARS batteries and battalions in field artillery brigades (fires brigades) and divisional artillery structures.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M142 HIMARS (wheeled, one pod of GMLRS rockets or one ATACMS-class missile, crew of 3); M270A1/A2 MLRS (tracked, two pods); GMLRS guided rockets and ATACMS as the named munition families — per Army program fact files, names/specs at public fact level only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "This is a small, visible community — launcher crews get strategic attention, so professionalism and maintenance standards are scrutinized.",
          "A commercial driver's mindset helps: much of the job is safely moving a large vehicle and its ammunition.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* =================== CMF 14 — Air Defense Artillery =================== */
  deep({
    id: "army-14e",
    code: "14E",
    title: "PATRIOT Fire Control Enhanced Operator/Maintainer",
    branch: "Army",
    field: "CMF 14 — Air Defense Artillery",
    summary:
      "Operates and maintains the fire-control heart of the PATRIOT system — the Army's principal high-end air and missile defense system. A shift-based crew job inside a demanding, recurring certification culture.",
    duties: [
      "Shift-based crew operations in the fire unit: daily system checks and diagnostics",
      "System emplacement support and air-defense crew drills and evaluations",
      "Serve in high-readiness and deployed/forward postures — including long-standing rotations to the Middle East, Europe and Korea (general level, publicly reported)",
    ],
    school:
      "BCT + AIT at Fort Sill, OK — a long technical course; verify the exact length on GoArmy (historically among the longer ADA pipelines; no number is published here without the official page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Shift-based crew operations in the fire unit: system emplacement support, daily system checks and diagnostics, air-defense crew drills and evaluations, and a demanding certification culture (crews are formally evaluated on a recurring cycle). PATRIOT units rotate through high-readiness and deployed/forward postures, so the MOS has a real deployment rhythm, including long-standing rotations to the Middle East, Europe and Korea (general level, publicly reported).",
    careerPath:
      "Operator/maintainer → crew chief → platoon sergeant / battery leadership; warrant paths 140A Command and Control Systems Integrator and the 140L ADA Technician family (verify the current warrant mapping on the ADA School site).",
    civilian:
      "Defense-industry air-defense/radar systems roles (the Raytheon/RTX ecosystem), complex systems operations, electronics maintenance support.",
    similar: ["army-14p", "army-94m", "af-1c6x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "PATRIOT batteries (launching stations + fire control) in ADA battalions and brigades; the THAAD community (14-series Soldiers also crew THAAD batteries — 14-series cross-utilization at organizational level).",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: PATRIOT system components at name level — AN/MPQ-65 radar set, Engagement Control Station (ECS), AMG antenna mast group, launching stations firing PAC-2/PAC-3 family interceptors — names/roles per Army program descriptions.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Crew certification is your life — the evaluation cycle never stops, and the Soldiers who study the system (not just their checklist) become crew chiefs.",
          "Clearance and worldwide-assignability shape assignments in this field.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-14p",
    code: "14P",
    title: "Air and Missile Defense Crewmember",
    branch: "Army",
    field: "CMF 14 — Air Defense Artillery",
    summary:
      "The short-range air defense (SHORAD) crewmember — protects maneuver forces and key sites from low-altitude air threats, a mission area the Army has publicly rebuilt in recent years. Counter-drone work is publicly the Army's stated priority in this field.",
    duties: [
      "Vehicle/crew drills and system maintenance in ADA battalions",
      "Air-defense gunnery tables and field exercises with the maneuver units they protect",
      "Counter-UAS work at various headquarters (organizational level)",
      "Equipment-readiness culture: sensors and vehicles must be up",
    ],
    school: "BCT + AIT at Fort Sill, OK; length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Vehicle/crew drills, system maintenance, air-defense gunnery tables and field exercises with the maneuver units they protect; garrison life in ADA battalions with a strong equipment-readiness culture (sensors and vehicles must be up).",
    careerPath:
      "Crewmember → team leader → squad/section leader → platoon sergeant; ADA warrant paths as in 14E (140A / 140L family — verify current mapping on the ADA School site).",
    civilian:
      "Systems operation, security operations, defense-industry support roles.",
    similar: ["army-14e", "usmc-7212", "army-94m"],
    extraSections: [
      {
        heading: "Organization",
        body: "SHORAD battalions and batteries supporting divisions/corps; counter-UAS elements at various headquarters (organizational level).",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: Avenger air defense system (HMMWV-mounted Stinger pods) as the long-standing named platform; FIM-92 Stinger MANPADS at name level; AN/MPQ-64 Sentinel radar and FAAD C2 at name level; the newer M-SHORAD / Stryker-based systems publicly fielding. Names/roles only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "SHORAD is a growth field — counter-drone work is publicly the Army's stated priority, so technical curiosity about sensors and air pictures is career gold here.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ========================= CMF 15 — Aviation ========================= */
  deep({
    id: "army-15t",
    code: "15T",
    title: "UH-60 Helicopter Repairer",
    branch: "Army",
    field: "CMF 15 — Aviation",
    summary:
      "Black Hawk mechanic — maintains the UH-60, the Army's most numerous helicopter and its medevac/assault workhorse. Many 15Ts also fly as crew chiefs, the maintenance expert in the back of the aircraft — the part of the job most recruits don't know exists.",
    duties: [
      "Flight-line life: daily and phase inspections, servicing (fuel/oil/hydraulics), component removal/replacement, troubleshooting write-ups",
      "Aviation maintenance paperwork discipline — logbooks are legal documents in this world",
      "Fly as crew chiefs where assigned — the maintenance expert in the back of the aircraft",
      "Shift-based work around flight schedules; deployments mean high-tempo flight operations",
    ],
    school:
      "BCT + AIT at Fort Eustis, VA (Joint Base Langley-Eustis), 128th Aviation Brigade / Aviation Logistics School. Length: Army National Guard lists 15 weeks, 1 day for the current 15T course (some Guard pages for related variants show 14 weeks, 1 day) — cite as ~15 weeks and verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Flight-line life: daily and phase inspections, servicing (fuel/oil/hydraulics), component removal/replacement, troubleshooting write-ups, and the paperwork discipline of aviation maintenance (logbooks are legal documents in this world). Many 15Ts also fly as crew chiefs — the maintenance expert in the back of the aircraft — which is the part of the job most recruits don't know exists. Work is shift-based around flight schedules; deployments mean high-tempo flight operations.",
    careerPath:
      "Repairer → crew chief → technical inspector (TI) → platoon sergeant / maintenance supervisor; warrant path 151A Aviation Maintenance Technician; senior path 15Z Aviation Senior Sergeant.",
    civilian:
      "The flagship pathway is the FAA Airframe & Powerplant (A&P) certificate — Army aviation maintenance experience is a recognized route to A&P eligibility (verify the current Army COOL/USMAP process); rotorcraft industry and medevac-operator roles.",
    similar: ["usmc-6113", "cg-amt", "army-15w"],
    extraSections: [
      {
        heading: "Organization",
        body: "Aviation support companies/battalions and flight companies in Combat Aviation Brigades; medevac companies (where crew chiefs fly missions).",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: UH-60 Black Hawk (twin turboshaft utility helicopter, crew of 4 incl. crew chiefs, per Sikorsky/Army fact files) — airframe, rotor, hydraulic, fuel and drive systems; ground support equipment and the Army's aviation maintenance tool/system ecosystem (ULLS-A(E)/ACN at name level).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Tool control and documentation are sacred — a lost tool grounds aircraft, and your signature on a logbook entry is a legal statement.",
          "Volunteering for crew-chief duty, when eligible, is the fastest way to actually understand the aircraft as a system.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 15T UH-60 Helicopter Repairer", url: GUARD_15T },
      { label: "Army National Guard — 15T course page", url: GUARD_15T_COURSE },
    ],
  }),

  deep({
    id: "army-15w",
    code: "15W",
    title: "Unmanned Aircraft Systems Operator",
    branch: "Army",
    field: "CMF 15 — Aviation",
    summary:
      "The Army's drone pilot — operates tactical unmanned aircraft from a ground control station for reconnaissance and surveillance in support of ground commanders. Aviation rhythm without leaving the ground.",
    duties: [
      "Mission planning and airspace coordination; preflight of the ground station and aircraft (with the 15E repairers)",
      "Launch/recovery operations; flight shifts at the controls and on the sensor; meticulous flight logging",
      "Deployed operations run continuous orbits on shift rotations",
      "Weather and airspace paperwork shape the day more than recruits expect",
    ],
    school:
      "BCT + AIT at Fort Huachuca, AZ under 2-13th Aviation Regiment (the Army's UAS training center). Army.mil reports the operator course at 21 weeks, two phases (2012 article — dated); Guard/citizen-soldier reporting describes over 23 weeks — cite as ~21–23 weeks and verify the current length on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Aviation rhythm without leaving the ground: mission planning and airspace coordination, preflight of the ground station and aircraft (with the 15E repairers), launch/recovery operations, flight shifts at the controls and on the sensor, and meticulous flight logging. Weather and airspace paperwork shape the day more than recruits expect; deployed operations run continuous orbits on shift rotations.",
    careerPath:
      "Operator → aircraft commander (the key qualification milestone) → standardization/instructor operator → platoon sergeant; warrant path 150U UAS Operations Technician.",
    civilian:
      "Commercial UAS operations (FAA Part 107 is the separate civilian credential), imagery analysis support, aviation operations.",
    similar: ["usmc-7314", "army-15t", "af-1u0x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "UAS platoons/companies in brigade combat teams, Combat Aviation Brigades and expeditionary aviation structures; Gray Eagle companies (with the related 15C operator MOS) at division level.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: RQ-7B Shadow tactical UAS (the 15W's core platform — catapult-launched, runway-recovered, electro-optical/infrared sensor) and MQ-1C Gray Eagle at program level (15C is the dedicated Gray Eagle operator MOS); One System Ground Control Station (OSGCS) as the named control station. Names/roles per Army.mil training reporting.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your flight records and standardization evaluations are your career file — treat every training flight like a checkride.",
          "Airspace/federal aviation knowledge (the course includes FAA ground-school material, per Army.mil) is a genuine civilian asset most Soldiers underuse.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — 15W training at Fort Huachuca", url: ARMYMIL_15W },
    ],
  }),

  deep({
    id: "army-15q",
    code: "15Q",
    title: "Air Traffic Control Operator",
    branch: "Army",
    field: "CMF 15 — Aviation",
    summary:
      "Army air traffic controller — tower and radar control for Army airfields and expeditionary airfields. Shift work where calm, precise phraseology under pressure is the skill.",
    duties: [
      "Shift work in towers and tactical ATC facilities: sequencing arrivals/departures",
      "Coordinating with civilian FAA facilities; weather and airfield-status reporting",
      "Training positions under instructor supervision until fully rated on each position",
      "Deployed: standing up and running austere airfields",
    ],
    school:
      "BCT + AIT — Army ATC training is conducted at Fort Novosel, AL (formerly Fort Rucker, home of Army Aviation) — verify the current course location/length on GoArmy; the pipeline includes FAA-recognized elements (verify any certification claim officially).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Shift work in towers and tactical ATC facilities: sequencing arrivals/departures, coordinating with civilian FAA facilities, weather and airfield-status reporting, and training positions under instructor supervision until fully rated on each position. Deployed, standing up and running austere airfields.",
    careerPath:
      "Controller → position ratings accumulation → shift/crew leader → ATC chief/facility management; warrant path 150A Air Traffic and Airspace Management Technician.",
    civilian:
      "FAA air traffic control pathways (federal hiring rules apply), contract tower and airfield operations roles.",
    similar: ["usmc-7257", "army-15t", "af-1c1x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "ATC companies/battalions supporting Combat Aviation Brigades and theater aviation commands.",
      },
      {
        heading: "Systems & equipment",
        body: "Tower/radar systems at name level — tactical air navigation and mobile tower systems (e.g. the AN/TPN-31 ATNAVICS radar family and mobile tower systems) — names only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Position ratings are everything — each facility rating you earn is a portable professional credential inside the field.",
          "Calm, precise phraseology under pressure is the skill; it is trainable and it is what evaluators watch.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ========================== CMF 17 — Cyber ========================== */
  deep({
    id: "army-17c",
    code: "17C",
    title: "Cyber Operations Specialist",
    branch: "Army",
    field: "CMF 17 — Cyber",
    summary:
      "The Army's enlisted cyberspace operations specialist — works in Cyber Mission Force teams and Army cyber units on defensive and offensive cyberspace operations at mission level. One of the most selective and longest-trained enlisted specialties.",
    duties: [
      "Knowledge work in secure facilities: analysis, tool development support, network defence tasks, mission planning and reporting inside joint cyber teams",
      "The unclassified truth of the job: it feels like a civilian security-operations career — tickets, analysis, documentation, exercises — inside a uniformed, clearance-based world",
      "Military duties (PT, ranges, unit tasks) layered on top",
    ],
    school:
      "10 weeks BCT + 36 weeks of AIT at Fort Eisenhower, GA, per the U.S. Army Cyber Center of Excellence's own 17C course page. Note: older secondary sources describe a two-phase JCAC-first pipeline totalling ~45 weeks from when the course ran differently — the official CCoE page figure (36 weeks, Fort Eisenhower) is the one published here; re-verify at need, because this pipeline has changed before.",
    requirements:
      "The field is clearance-based (the source pack describes the work as clearance-bound) — verify current clearance and entry requirements on GoArmy.com. " + REQ_VERIFY,
    dayInLife:
      "Knowledge work in secure facilities: analysis, tool development support, network defence tasks, mission planning and reporting inside joint cyber teams. The unclassified truth of the job is that it feels like a civilian security-operations career — tickets, analysis, documentation, exercises — inside a uniformed, clearance-based world with military duties (PT, ranges, unit tasks) layered on top.",
    careerPath:
      "Operator → work-role/team progression inside cyber units → senior operator/team sergeant paths; warrant path 170A Cyber Operations Technician (and the 170B/170D family at senior levels — verify current mapping). Civilian-market pull is intense; retention bonuses in this field are publicly a recurring story.",
    civilian:
      "Cybersecurity operations, network defence, security analysis — top-tier civilian transfer; CompTIA Security+/Network+, CEH and similar certifications are the standard civilian currency (verify Army COOL funding).",
    similar: ["army-25b", "usmc-1721", "navy-cwt"],
    extraSections: [
      {
        heading: "Organization",
        body: "U.S. Army Cyber Command (ARCYBER) structure — Cyber Protection Brigade, 780th Military Intelligence Brigade (Cyber), and joint Cyber Mission Force teams; Cyber Mission Force alignment is at organizational level per public Army descriptions.",
      },
      {
        heading: "Systems & equipment",
        body: "Commercial and government cyber tooling at generic level (Windows/Linux operating systems, networking — per the Cyber School's own public course description). No tool or technique detail beyond that.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "The clearance and the certification stack are your career capital — the Cyber School's public material references nationally recognized IT/cyber certifications as part of the ecosystem.",
          "Soldiers who arrive at AIT already comfortable with Linux, networking basics and scripting have a materially easier course.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "U.S. Army Cyber Center of Excellence — 17C course page (official)", url: CCOE_17C },
    ],
  }),

  /* ================= CMF 18 — Special Forces (overview only) ================= */
  deep({
    id: "army-18b",
    code: "18B",
    title: "Special Forces Weapons Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "Green Beret weapons specialist on a 12-person Operational Detachment Alpha (ODA). Special Forces missions are publicly described as unconventional warfare, foreign internal defense, special reconnaissance, direct action and counterterrorism — at mission level. 18X is the enlistment option into the pipeline, not an MOS; the awarded specialties are 18B (Weapons), 18C (Engineer), 18D (Medical), 18E (Communications), 18F (Assistant Operations/Intelligence) and 18Z (Senior Sergeant). This entry stays at overview level — no tactics or techniques.",
    duties: [
      "Serve as the ODA's weapons sergeant — the detachment's specialist for its weapons systems (specialty-dependent, name level only)",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Garrison carries a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle",
    ],
    school:
      "Pipeline at organizational level: SFAS (Special Forces Assessment and Selection, ~3 weeks at Camp Mackall/Fort Liberty) → the Special Forces Qualification Course (SFQC) at Fort Liberty, NC — multiple phases including MOS training, language training (Defense Language Institute / SWCS language programs), collective training and the culminating exercise publicly known as Robin Sage. Total pipeline commonly exceeds a year (supplement-level general knowledge; verify current phase lengths on GoArmy's Special Forces pages).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "ODA member → specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Leadership/instruction, international work, and specialty-dependent transfer (advanced EMS/paramedic foundations for 18D — credential-dependent; communications systems for 18E).",
    similar: ["army-18c", "army-18d", "army-18z"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level (weapons systems for 18B, engineer kits for 18C, medical sets for 18D, communications suites for 18E) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  deep({
    id: "army-18c",
    code: "18C",
    title: "Special Forces Engineer Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "Green Beret engineer specialist on a 12-person Operational Detachments Alpha (ODA) — the detachment's engineering expertise for the construction and field-engineering side of Special Forces missions (unconventional warfare, foreign internal defense, special reconnaissance, direct action, counterterrorism — mission level only). Entered via the 18X enlistment option and the SFQC pipeline. Overview only — no procedures.",
    duties: [
      "Serve as the ODA's engineer sergeant — the detachment's specialist for engineer kits and field engineering at name level",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Garrison carries a heavy professional-education load — courses, language lab, team training cycles",
    ],
    school:
      "Pipeline at organizational level: SFAS (Special Forces Assessment and Selection, ~3 weeks at Camp Mackall/Fort Liberty) → the Special Forces Qualification Course (SFQC) at Fort Liberty, NC — multiple phases including MOS training, language training (Defense Language Institute / SWCS language programs), collective training and the culminating exercise publicly known as Robin Sage. Total pipeline commonly exceeds a year (supplement-level general knowledge; verify current phase lengths on GoArmy's Special Forces pages).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "ODA member → specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Leadership/instruction, international work, and construction/engineering-support experience at general level.",
    similar: ["army-18b", "army-12b", "army-18z"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level (engineer kits for 18C, weapons systems for 18B, medical sets for 18D, communications suites for 18E) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  deep({
    id: "army-18d",
    code: "18D",
    title: "Special Forces Medical Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "Green Beret medical specialist on a 12-person Operational Detachment Alpha (ODA) — the detachment's medical expertise for Special Forces missions (unconventional warfare, foreign internal defense, special reconnaissance, direct action, counterterrorism — mission level only). The 18D medical phase is famously long: Special Operations Combat Medic training runs through Fort Sam Houston structures, and the total pipeline can approach two years for 18D/language-heavy tracks. Overview only.",
    duties: [
      "Serve as the ODA's medical sergeant — the detachment's specialist for its medical sets and casualty care at role level",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Garrison carries a heavy professional-education load — courses, language lab, team training cycles",
    ],
    school:
      "Pipeline at organizational level: SFAS (Special Forces Assessment and Selection, ~3 weeks at Camp Mackall/Fort Liberty) → the Special Forces Qualification Course (SFQC) at Fort Liberty, NC — multiple phases including MOS training, language training (Defense Language Institute / SWCS language programs), collective training and the culminating exercise publicly known as Robin Sage. 18D's medical phase is famously long (Special Operations Combat Medic training runs through Fort Sam Houston structures); total pipeline commonly exceeds a year and can approach two for 18D/language-heavy tracks (supplement-level general knowledge; verify current phase lengths on GoArmy's Special Forces pages).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "ODA member → specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Leadership/instruction, international work, advanced EMS/paramedic foundations (18D — credential-dependent).",
    similar: ["army-68w", "army-18b", "army-18z"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level (medical sets for 18D, weapons systems for 18B, engineer kits for 18C, communications suites for 18E) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
          "The 18D track is the longest in the field — plan for a pipeline that can approach two years.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  deep({
    id: "army-18e",
    code: "18E",
    title: "Special Forces Communications Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "Green Beret communications specialist on a 12-person Operational Detachment Alpha (ODA) — the detachment's communications expertise for Special Forces missions (unconventional warfare, foreign internal defense, special reconnaissance, direct action, counterterrorism — mission level only). Entered via the 18X enlistment option and the SFQC pipeline. Overview only.",
    duties: [
      "Serve as the ODA's communications sergeant — the detachment's specialist for its communications suites at name level",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Garrison carries a heavy professional-education load — courses, language lab, team training cycles",
    ],
    school:
      "Pipeline at organizational level: SFAS (Special Forces Assessment and Selection, ~3 weeks at Camp Mackall/Fort Liberty) → the Special Forces Qualification Course (SFQC) at Fort Liberty, NC — multiple phases including MOS training, language training (Defense Language Institute / SWCS language programs), collective training and the culminating exercise publicly known as Robin Sage. Total pipeline commonly exceeds a year (supplement-level general knowledge; verify current phase lengths on GoArmy's Special Forces pages).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "ODA member → specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Leadership/instruction, international work, communications systems experience.",
    similar: ["army-25u", "army-18b", "army-18z"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level (communications suites for 18E, weapons systems for 18B, engineer kits for 18C, medical sets for 18D) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  deep({
    id: "army-18f",
    code: "18F",
    title: "Special Forces Assistant Operations and Intelligence Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "The ODA's assistant operations/intelligence sergeant — an experienced Green Beret specialty (drawn from seasoned 18-series Soldiers rather than a first assignment) supporting the detachment's planning and intelligence work for Special Forces missions (unconventional warfare, foreign internal defense, special reconnaissance, direct action, counterterrorism — mission level only). Overview only.",
    duties: [
      "Support the ODA's operations and intelligence planning at mission level",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Garrison carries a heavy professional-education load — courses, language lab, team training cycles",
    ],
    school:
      "18F is an experienced-Soldier specialty reached from the other 18-series MOSs after ODA time, inside the SFQC/SWCS structure at Fort Liberty, NC (pipeline at organizational level: SFAS ~3 weeks → SFQC phases including MOS training, language training, collective training and the Robin Sage culminating exercise). Verify current phase details on GoArmy's Special Forces pages.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "Experienced ODA specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Leadership/instruction, international work, operations and intelligence staff experience at general level.",
    similar: ["army-18z", "army-35f", "army-18b"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level across the detachment (weapons systems, engineer kits, medical sets, communications suites) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "18F is not an entry specialty — it is where experienced detachment members deepen the planning/intelligence side of team life.",
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  deep({
    id: "army-18z",
    code: "18Z",
    title: "Special Forces Senior Sergeant",
    branch: "Army",
    field: "CMF 18 — Special Forces",
    summary:
      "The team sergeant — the senior enlisted leader of a 12-person Operational Detachment Alpha (ODA), reached after years as an 18B/18C/18D/18E/18F. Special Forces missions are publicly described as unconventional warfare, foreign internal defense, special reconnaissance, direct action and counterterrorism — at mission level. Overview only.",
    duties: [
      "Lead the ODA as its senior enlisted member — the team sergeant runs the detachment's training, readiness and daily life",
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles",
      "Mentor the detachment's specialty sergeants and set the team's professional standard",
    ],
    school:
      "18Z is earned, not enlisted into: the SF pipeline at organizational level (SFAS ~3 weeks at Camp Mackall/Fort Liberty → the SFQC at Fort Liberty, NC, with MOS, language, collective training and the Robin Sage culminating exercise), followed by years of ODA service in one of the 18-series specialties. Verify current phase lengths on GoArmy's Special Forces pages.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Team life is the job: training the team's individual specialties, language and cultural sustainment, partner-force training when deployed, planning cycles, and long periods of small-team autonomy. Garrison includes a heavy professional-education load — an 18-series Soldier is perpetually in a course, a language lab, or a team training cycle.",
    careerPath:
      "ODA member → specialty senior → 18Z team sergeant (the ODA's senior enlisted leader) → company/battalion sergeant major track; warrant path 180A Special Forces Warrant Officer (assistant detachment commander) — a signature SF institution.",
    civilian:
      "Senior leadership/instruction, international work, and specialty-dependent transfer from the member's base 18-series specialty.",
    similar: ["army-18b", "army-18f", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "ODAs inside Special Forces companies/battalions/groups (1st, 3rd, 5th, 7th, 10th SFG(A) active; 19th/20th in the Guard), under the JFK Special Warfare Center and School (SWCS) at Fort Liberty, NC for training.",
      },
      {
        heading: "Systems & equipment",
        body: "Specialty-dependent at name level across the detachment (weapons systems, engineer kits, medical sets, communications suites) — no detail beyond that, by design.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "The team sergeant is the standard the whole detachment is judged by — 18Z is the destination the other 18-series careers point at.",
          "Selection is an assessment, not a course you can cram for in a month — rucking fitness, land navigation, and being a good teammate under observation are what the public guidance stresses.",
          "Language aptitude (DLAB) shapes your pipeline and your group assignment.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — CMF 18 talent model (official)", url: CMF18_TALENT },
    ],
  }),

  /* ========================== CMF 19 — Armor ========================== */
  deep({
    id: "army-19k",
    code: "19K",
    title: "M1 Armor Crewman",
    branch: "Army",
    field: "CMF 19 — Armor",
    summary:
      "Fights the M1 Abrams main battle tank as one of a four-person crew — the Army's heavy armor fist. Tankers will tell you the job is 80% maintenance and preparation so the 20% of maneuver and gunnery works — that ratio is the honest preview.",
    duties: [
      "Daily crew-level maintenance in the tank park: track, fluids, filters, weapons systems checks",
      "Boresighting and gunnery training cycles that build to crew qualification tables",
      "Field exercises in combined arms battalions; rail/load operations when the battalion moves",
      "Progress through crew positions: new Soldiers typically start as driver or loader, earn gunner, and command tanks as senior NCOs/officers",
    ],
    school:
      "22-week OSUT at Fort Benning, GA (Armor School, 194th Armored Brigade) — GoArmy/Guard figure; one tracking source flagged 2026 Fort Benning brigade pages describing some armor OSUT variants at 18 weeks, so verify the current length on GoArmy before relying on it.",
    requirements: REQ_VERIFY,
    dayInLife:
      "The tank park is your office: daily crew-level maintenance (track, fluids, filters, weapons systems checks), boresighting and gunnery training cycles that build to crew qualification tables, field exercises in combined arms battalions, and rail/load operations when the battalion moves. Tankers will tell you the job is 80% maintenance and preparation so the 20% of maneuver and gunnery works — that ratio is the honest preview.",
    careerPath:
      "Driver/loader → gunner → tank commander (typically SSG) → platoon sergeant → first sergeant/sergeant major (19Z Armor Senior Sergeant merges 19D/19K at senior grades); Master Gunner (ASI/school at Fort Benning) is the field's technical pinnacle for NCOs.",
    civilian:
      "Heavy-vehicle operation, diesel/turbine maintenance foundations, crew leadership; GoArmy material references nationally recognized certifications for the field (verify the current list on Army COOL).",
    similar: ["usmc-1834", "army-19d", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Tank companies (with Bradley-equipped infantry, in combined arms battalions) inside Armored Brigade Combat Teams; also armored cavalry structures.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M1A2 Abrams (SEP versions) — ~70-ton main battle tank, 120mm M256 smoothbore main gun, M2 .50-cal commander's weapon, M240 7.62mm coaxial machine gun, AGT1500 gas-turbine engine, four-person crew (commander, gunner, loader, driver) — per public Army fact files and weapons-system descriptions. Crew positions are a progression: new Soldiers typically start as driver or loader, earn gunner, and command tanks as senior NCOs/officers.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Gunnery qualification is the field's currency — crews live and die by their table scores, and commanders know exactly which Soldiers make crews qualify.",
          "Maintenance discipline (actually doing PMCS, not pencil-whipping it) is the second reputation-maker, because a deadlined tank is a public failure.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 19Z Armor Senior Sergeant (22-week OSUT)", url: GUARD_19Z },
    ],
  }),

  deep({
    id: "army-19d",
    code: "19D",
    title: "Cavalry Scout",
    branch: "Army",
    field: "CMF 19 — Armor",
    summary:
      "The armored formation's reconnaissance specialist — finds and reports information about terrain and opposing forces ahead of the main body, mounted and dismounted. The product is information: accuracy and speed of reports is the whole job. Mission level only.",
    duties: [
      "Scout vehicle maintenance and gunnery — scout crews qualify on their platforms like tankers do",
      "Observation-post and route-reconnaissance training; reporting drills",
      "Field exercises spent forward of everyone else, often with little sleep and less supervision for junior leaders",
    ],
    school:
      "22-week OSUT at Fort Benning, GA (Armor School) — GoArmy/Guard figure, with the same verification note as 19K: a 2026 tracker flagged some Fort Benning brigade pages describing 18-week variants, so verify the current length on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Splits time between scout vehicles and dismounted work: vehicle maintenance and gunnery (scout crews qualify on their platforms like tankers do), observation-post and route-reconnaissance training, reporting drills (the product is information — accuracy and speed of reports is the whole job), and field exercises spent forward of everyone else, often with little sleep and less supervision for junior leaders.",
    careerPath:
      "Scout → vehicle commander → section sergeant → platoon sergeant; merges into 19Z Armor Senior Sergeant at senior grades; Master Gunner and reconnaissance-specific courses (e.g. RSLC — Reconnaissance and Surveillance Leaders Course, at concept level) are career markers.",
    civilian:
      "Security operations, observation/reporting, vehicle operations, field leadership.",
    similar: ["army-19k", "usmc-0321", "army-11b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Scout platoons in infantry/armor battalions and cavalry squadrons in BCT reconnaissance squadrons.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: M3 Bradley CFV (25mm Bushmaster, TOW — cavalry variant of the Bradley), Stryker RV, and HMMWV-based scout configurations historically; sensors at name level — LRAS3 (Long Range Advanced Scout Surveillance System); dismounted optics/night vision at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Scouts are graded on judgment, not just aggression — knowing when not to be seen/heard and reporting exactly what you saw (no embellishment) is the professional standard the field repeats constantly.",
          "Land navigation and radio reporting are the two trainable skills that separate good scouts early.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 19Z Armor Senior Sergeant (OSUT)", url: GUARD_19Z },
    ],
  }),

  /* ========================== CMF 25 — Signal ========================== */
  deep({
    id: "army-25b",
    code: "25B",
    title: "Information Technology Specialist",
    branch: "Army",
    field: "CMF 25 — Signal",
    summary:
      "The Army's IT Soldier — installs, operates and defends the computer systems and networks every headquarters runs on. A help-desk-to-network-admin reality: the famous ticket queue, imaging and patching, and command-post networks built in tents during exercises.",
    duties: [
      "Account and device support for the unit — the ticket queue is the daily rhythm",
      "Imaging and patching machines; setting up command-post networks in the field (servers, switches, cable runs in tents)",
      "COMSEC-adjacent account duties at process level; on-call duty for outages during exercises",
      "Garrison tempo is business hours plus exercise surges",
    ],
    school:
      "10 weeks BCT + 20 weeks AIT at Fort Eisenhower, GA — U.S. Army Signal School (Cyber CoE) course page figure, carried in the source pack.",
    requirements: REQ_VERIFY,
    dayInLife:
      "A help-desk-to-network-admin reality: account and device support for the unit (the famous ticket queue), imaging and patching machines, setting up command-post networks in the field (servers, switches, cable runs in tents), COMSEC-adjacent account duties at process level, and on-call duty for outages during exercises. Garrison tempo is business hours plus exercise surges.",
    careerPath:
      "IT specialist → systems/network administrator roles → S-6 NCOIC → senior signal NCO; warrant paths 255A Information Systems Technician and 255N Network Management Technician are the field's classic warrant routes; 255S covers cyber defence at senior levels (verify current mapping).",
    civilian:
      "IT support, systems and network administration; CompTIA A+/Network+/Security+ are the standard currency (Army COOL). One of the cleanest civilian transfers in the Army.",
    similar: ["navy-it", "af-3d0x2", "usmc-0631"],
    extraSections: [
      {
        heading: "Organization",
        body: "Signal companies and S-6 sections at every echelon from battalion to theater; Expeditionary Signal Battalions; Network Enterprise Centers on installations. Note: DA Pam's current text reflects a CMF 25 restructure — 25B is confirmed by the Signal School's own page; treat other 25-series codes as needing a GoArmy re-check.",
      },
      {
        heading: "Systems & equipment",
        body: "Enterprise IT at generic level — Windows client/server environments, tactical network stacks, and the Army's mission-command systems at name level; commercial-standard networking hardware.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Certifications are promotions-by-other-means here — the AIT curriculum is built around CompTIA-style content, and Soldiers who leave AIT with Security+ (and keep adding certs) consistently get the better assignments and the easier civilian transition.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "U.S. Army Signal School — 25B course page (official)", url: SIGNAL_25B },
    ],
  }),

  deep({
    id: "army-25u",
    code: "25U",
    title: "Signal Support Systems Specialist",
    branch: "Army",
    field: "CMF 25 — Signal",
    summary:
      "The unit-level comms fixer — keeps a company's and battalion's radios and battlefield communication systems working, and is the commander's first call when comms fail. 25Us are embedded with the units they support rather than concentrated in signal units.",
    duties: [
      "Radio issue/turn-in and programming support (process level); COMSEC account support tasks",
      "Antenna and retransmission site work in the field; troubleshooting for headquarters elements",
      "Train other Soldiers on their radio systems",
      "Field exercises are this MOS's busiest time: 25Us plan and run the unit's communications support",
    ],
    school:
      "BCT + AIT at Fort Eisenhower, GA (Signal School); length: verify on GoArmy (~18 weeks appears in secondary compilations — not published here as fact; note the CMF 25 restructure may have changed this course).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Radio issue/turn-in and programming support (process level), antenna and retransmission site work in the field, troubleshooting for headquarters elements, COMSEC account support tasks, and training other Soldiers on their radio systems. Field exercises are this MOS's busiest time: they plan and run the unit's communications support.",
    careerPath:
      "Signal support specialist → battalion S-6 team NCO → signal platoon/section leadership; warrant paths in the 255 family at senior levels.",
    civilian:
      "Telecommunications field service, radio/network support, IT support foundations; CompTIA pathways apply.",
    similar: ["usmc-0621", "navy-it", "army-25b"],
    extraSections: [
      {
        heading: "Organization",
        body: "S-6 sections and signal support elements inside maneuver battalions and companies — 25Us are embedded with the units they support rather than concentrated in signal units. Field note from the source pack: DA Pam's current text reflects a CMF 25 restructure; beyond 25B (confirmed by the Signal School's own page), 25-series details should be re-checked on GoArmy.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: tactical radio families — SINCGARS lineage radios (RT-1523 family), AN/PRC-148/152-series handhelds, vehicle intercom and retransmission systems, and satellite terminals. Names only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You will be blamed for every comms failure and thanked for none of the saves — the professionals in this MOS build a reputation on preparation (spare cables, batteries, antennas, and knowing the terrain's effect on comms at concept level).",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ========================= CMF 27 — Paralegal ========================= */
  deep({
    id: "army-27d",
    code: "27D",
    title: "Paralegal Specialist",
    branch: "Army",
    field: "CMF 27 — Paralegal",
    summary:
      "Legal support professional for Army judge advocates — the enlisted backbone of military legal offices. Work is deadline- and accuracy-driven; privates in this MOS handle real legal documents early under supervision.",
    duties: [
      "Legal research and drafting support; case file management",
      "Prepare charges and administrative actions for attorney review",
      "Coordinate witnesses and court reporters; client intake at legal assistance offices",
    ],
    school:
      "BCT + AIT — the Judge Advocate General's Legal Center and School is at Charlottesville, VA, and enlisted paralegal training has historically run at Fort Gregg-Adams, VA; verify the current AIT location/length on GoArmy before relying on specifics.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Office-and-courtroom rhythm: legal research and drafting support, case file management, preparing charges and administrative actions for attorney review, coordinating witnesses and court reporters, and client intake at legal assistance offices. Work is deadline- and accuracy-driven; privates in this MOS handle real legal documents early under supervision.",
    careerPath:
      "Paralegal → senior paralegal/court reporter supervisor → paralegal NCOIC of an OSJA; warrant path 270A Legal Administrator.",
    civilian:
      "Paralegal/legal assistant careers; the experience maps toward civilian paralegal certificates and pre-law/law pathways (credential rules vary).",
    similar: ["af-5j0x1", "navy-ln", "army-42a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Offices of the Staff Judge Advocate (OSJA) at installations and deployed headquarters; Trial Defense Services and special trial counsel structures at organizational level.",
      },
      {
        heading: "Systems & equipment",
        body: "Legal research databases and case-management systems at generic level (Westlaw/Lexis-style research, Army legal systems at name level only).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Discretion is absolute — you will see investigations and personnel matters that are never discussed outside the office.",
          "Writing quality is the promotion skill: the paralegals who draft cleanly get the complex cases.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ====================== CMF 31 — Military Police ====================== */
  deep({
    id: "army-31b",
    code: "31B",
    title: "Military Police",
    branch: "Army",
    field: "CMF 31 — Military Police",
    summary:
      "The Army's police force — law enforcement on installations and combat-support policing in deployed operations. Two jobs in one uniform, and report writing is half of both.",
    duties: [
      "Garrison law enforcement: patrol shifts, traffic enforcement, gate/force-protection duties, response to incidents, reports and court testimony",
      "Field/combat-support MP work: area security, convoy and route support, detainee operations at organizational level, law-and-order for deployed bases",
      "Shift work and the duty roster define garrison life",
    ],
    school:
      "OSUT at Fort Leonard Wood, MO (MP School) — GoArmy-derived figure ~20 weeks total, carried in the source pack; verify the current length on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Two jobs in one uniform: garrison law enforcement (patrol shifts, traffic enforcement, gate/force-protection duties, response to incidents, reports and court testimony) and field/combat-support MP work (area security, convoy and route support, detainee operations at organizational level, law-and-order for deployed bases). Shift work and being on the duty roster define garrison life.",
    careerPath:
      "MP → team leader → squad leader → platoon sergeant → first sergeant; special paths include protective services, physical security, and investigations support; senior path 31Z Military Police Senior Sergeant.",
    civilian:
      "Law enforcement, corrections and protective services; several states give credit/recognition pathways for MP training (rules vary — verify per state).",
    similar: ["navy-ma", "usmc-5811", "af-3p0x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "MP companies/battalions under brigades and installation provost marshal structures; Criminal Investigation Division support is separate (31D).",
      },
      {
        heading: "Systems & equipment",
        body: "Standard law-enforcement equipment at generic level — patrol vehicles, radios/records systems, and the MP's issued weapons at fact level (service pistol/rifle family); military working dog teams are the sister 31K specialty.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Report writing is half the job and the half that follows you into court — learn to write a clear, factual report in AIT and never stop improving it.",
          "Professional bearing matters more in this MOS than almost any other; the whole installation watches how MPs carry themselves.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-31d",
    code: "31D",
    title: "Criminal Investigations (CID) Special Agent",
    branch: "Army",
    field: "CMF 31 — Military Police",
    summary:
      "Army detective — investigates felony-level crime affecting the Army as a credentialed federal special agent. Generally a mid-career entry: most agents arrive as experienced Soldiers or civilian hires, not straight from school.",
    duties: [
      "Casework, not patrol: interviews and interrogations (process level), evidence handling, surveillance support",
      "Work with prosecutors, forensic specialists and other federal agencies",
      "Write investigative reports that must survive court scrutiny",
      "Protective-services and fraud/economic-crime missions at general level",
    ],
    school:
      "The CID agent course (CISAC) — public sources place the agent course under the MP School at Fort Leonard Wood historically, with a ~18-week course figure in secondary sources and a probationary period after; verify the current course location/length on official CID pages before relying on numbers.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Casework, not patrol: interviews and interrogations (process level), evidence handling, surveillance support, working with prosecutors, forensic specialists and other federal agencies, and writing investigative reports that must survive court scrutiny. Includes protective-services and fraud/economic-crime missions at general level. Generally a mid-career entry — most agents arrive as experienced Soldiers or civilian hires, not straight from school.",
    careerPath:
      "Special agent → senior agent/team leader → special agent in charge track (civilian) or the 311A CID Special Agent warrant officer path (military).",
    civilian:
      "Federal law-enforcement (1811) pathways, corporate investigations, fraud examination.",
    similar: ["army-31b", "army-35l", "usmc-5821"],
    extraSections: [
      {
        heading: "Organization",
        body: "U.S. Army Criminal Investigation Division (CID) — battalions, field offices and protective services elements worldwide.",
      },
      {
        heading: "Systems & equipment",
        body: "Investigative and forensic-support systems at generic level; agents work closely with the U.S. Army Criminal Investigation Laboratory (organizational level).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "This is not an entry-level plan for most people — build an impeccable record first (MP or other MOS), because background investigation and credibility are the qualification.",
          "Writing and interview skills decide cases.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-31k",
    code: "31K",
    title: "Military Working Dog Handler",
    branch: "Army",
    field: "CMF 31 — Military Police",
    summary:
      "Handler half of a dog team — patrol and detection (explosives/narcotics, at mission level) working dogs supporting law enforcement and security. The dog is your partner and your responsibility 24/7 in a way no other MOS matches.",
    duties: [
      "Kennel care, feeding, veterinary runs — the animal-care workload is daily and non-delegable",
      "Daily obedience and detection training — most of the job is training, not operations",
      "Patrol/checkpoint shifts with the dog; meticulous training records",
      "Deployments pair teams with combat units for search support (mission level)",
    ],
    school:
      "Typically entered after/with MP pipeline elements; dog-handler training with the joint MWD program at Lackland AFB, TX (the DoD MWD school is publicly based there) — verify the current 31K pipeline sequence on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "The dog is your partner and your responsibility 24/7 in a way no other MOS matches: kennel care, feeding, veterinary runs, daily obedience and detection training (most of the job is training, not operations), patrol/checkpoint shifts with the dog, and meticulous training records. Deployments pair teams with combat units for search support (mission level).",
    careerPath:
      "Handler → senior handler/trainer → kennel master (the field's key leadership job) → plans/training NCO roles.",
    civilian:
      "Law-enforcement K9, TSA/airport detection-dog contractors, animal training and care industry.",
    similar: ["army-31b", "navy-ma", "usmc-5812"],
    extraSections: [
      {
        heading: "Organization",
        body: "MP/military working dog detachments and kennels at installations; teams attach to maneuver units when deployed.",
      },
      {
        heading: "Systems & equipment",
        body: "The dog (patrol/detector trained), kennel facilities, training aids and vehicles at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You are volunteering for a living partner, not a piece of equipment — Soldiers who don't genuinely want the animal-care workload wash out socially even if they pass the course.",
          "Training records and dog health management are professional skills civilians pay for.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ================== CMF 35 — Military Intelligence ================== */
  deep({
    id: "army-35f",
    code: "35F",
    title: "Intelligence Analyst",
    branch: "Army",
    field: "CMF 35 — Military Intelligence",
    summary:
      "All-source analyst — fuses reporting from every intelligence discipline into the assessments and products commanders decide with. The largest MI enlisted MOS, and the one whose briefing skill is visible from junior grades: standing up and defending an assessment is part of the job.",
    duties: [
      "Pull and read overnight reporting; update threat/order-of-battle databases",
      "Build briefing products (maps, overlays, assessments) on deadline",
      "Sit in the current-operations flow during exercises/deployments; deployed sections run continuous shifts",
      "In garrison, products support training planning",
    ],
    school:
      "BCT + AIT at Fort Huachuca, AZ (305th MI Battalion, 111th MI Brigade, USAICoE). Length: Army National Guard lists 16 weeks and 3 days — the current Guard/official-derived figure published here; some secondary sources say ~13 weeks (older GoArmy wording).",
    requirements:
      "TS/SCI eligibility is the pipeline requirement (per the source pack) — verify current requirements on GoArmy.com. " + REQ_VERIFY,
    dayInLife:
      "An analyst's shift rhythm: pulling and reading overnight reporting, updating threat/order-of-battle databases, building briefing products (maps, overlays, assessments) on deadline, and sitting in the current-operations flow during exercises/deployments. In garrison, products support training planning; deployed, the section runs continuous shifts. Briefing skill — standing up and defending an assessment — is visibly part of the job from junior grades.",
    careerPath:
      "Analyst → senior analyst → section sergeant / analysis chief → S-2 NCOIC roles; warrant path 350F All-Source Intelligence Technician is the signature senior route; assignments widen to joint and national agencies with rank.",
    civilian:
      "Government/contractor intelligence analysis (the clearance is the asset), research and data analysis.",
    similar: ["usmc-0231", "af-1n0x1", "navy-is"],
    extraSections: [
      {
        heading: "Organization",
        body: "Military intelligence companies (MICOs) in BCTs, battalion/brigade S-2 sections, MI brigades (theater), and joint/national billets at senior levels.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: DCGS-A (Distributed Common Ground System–Army) as the named analytic platform, standard intel databases and mapping tools at generic level. Names only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Learn the intelligence cycle and Intelligence Preparation of the Battlefield (IPB) as a thinking method, not an AIT checklist.",
          "Treat classification rules as absolute professional law.",
          "The analysts commanders trust are the ones who say “we don't know yet” when that's the truth.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 35F Intelligence Analyst (16 weeks 3 days, Fort Huachuca)", url: GUARD_35F },
    ],
  }),

  deep({
    id: "army-35m",
    code: "35M",
    title: "Human Intelligence Collector",
    branch: "Army",
    field: "CMF 35 — Military Intelligence",
    summary:
      "Gathers information through direct human interaction — interviews, debriefings and source contact at a mission-description level — and screens people/documents to support intelligence requirements. A paperwork-heavy job: the product is written reporting. Mission level only — no collection techniques or procedures in this entry.",
    duties: [
      "Preparation and research; conduct and document interviews/debriefings under supervision",
      "Write intelligence information reports — the product is written reporting",
      "Language use and cultural preparation for the region supported",
    ],
    school:
      "BCT + AIT at Fort Huachuca, AZ; secondary sources report ~20 weeks for the HUMINT course (supplement) — verify on GoArmy. Many 35Ms are assigned a language and attend the Defense Language Institute, Monterey, CA (36–64 weeks depending on language, supplement-level general knowledge) either before or after AIT.",
    requirements: REQ_VERIFY,
    dayInLife:
      "At public level: preparation and research, conducting and documenting interviews/debriefings under supervision, writing intelligence information reports, language use, and cultural preparation for the region they support. A paperwork-heavy job — the product is written reporting.",
    careerPath:
      "Collector → senior collector/team leader → HUMINT operations management; warrant path 351M Human Intelligence Technician.",
    civilian:
      "Investigative interviewing, research/reporting, language-enabled government and NGO work; DLPT-documented language proficiency is a portable credential.",
    similar: ["usmc-0211", "army-35f", "army-09l"],
    extraSections: [
      {
        heading: "Organization",
        body: "HUMINT teams/companies in MI battalions and brigades, tactical HUMINT teams supporting maneuver units.",
      },
      {
        heading: "Systems & equipment",
        body: "Reporting and database systems at generic level; language proficiency tools.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Language is leverage — a maintained language (with the proficiency pay that publicly accompanies it) changes your assignments and your value.",
          "Report writing quality is graded forever in this field; learn to write exactly what was said versus what you inferred.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-35n",
    code: "35N",
    title: "Signals Intelligence Analyst",
    branch: "Army",
    field: "CMF 35 — Military Intelligence",
    summary:
      "Analyzes foreign communications and signals reporting to describe adversary activity for commanders. Secure-facility shift work — computer-based, detail-obsessive, and clearance-bound. Mission level only — no methods.",
    duties: [
      "Process and analyze reporting in secure facilities",
      "Maintain target/activity databases; write and quality-check intelligence products",
      "Support collection management at process level",
    ],
    school:
      "BCT + AIT at Goodfellow AFB, TX (joint signals training site); secondary sources report ~25 weeks (supplement) — verify on GoArmy.",
    requirements:
      "The work is clearance-bound (per the source pack) — verify current clearance and entry requirements on GoArmy.com. " + REQ_VERIFY,
    dayInLife:
      "Secure-facility shift work: processing and analyzing reporting, maintaining target/activity databases, writing and quality-checking intelligence products, and supporting collection management at process level. The work is computer-based, detail-obsessive, and clearance-bound.",
    careerPath:
      "Analyst → senior analyst/reporter → SIGINT section leadership; warrant path 352N SIGINT Analysis Technician family (verify current mapping).",
    civilian:
      "Intelligence analysis and cryptologic-support roles in government/contracting (clearance-driven).",
    similar: ["usmc-2621", "army-35p", "navy-cti"],
    extraSections: [
      {
        heading: "Organization",
        body: "MI companies/brigades, tactical SIGINT teams, and national-mission assignments at sites publicly associated with joint cryptologic work (organizational level).",
      },
      {
        heading: "Systems & equipment",
        body: "Classified analytic systems — referenced generically only, deliberately unnamed.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Precision in reporting — exact words, exact times, no drift — is the field's core discipline, and your writing is reviewed by strangers who will catch everything.",
          "Clearance maintenance is a lifestyle obligation (finances, associations, reporting requirements).",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-35p",
    code: "35P",
    title: "Cryptologic Linguist",
    branch: "Army",
    field: "CMF 35 — Military Intelligence",
    summary:
      "A 35N-style signals specialty plus a formally trained foreign language — the language is the weapon system. One of the longest pipelines in the Army: language school first, then signals training, with language sustainment as a permanent, scheduled part of the job. Mission level only.",
    duties: [
      "Language work at mission level: listening/reading material in the target language, translating and summarizing for analysts",
      "SIGINT reporting discipline alongside the language mission",
      "Language sustainment training is a permanent, scheduled part of the job, not an extra",
    ],
    school:
      "BCT → Defense Language Institute Foreign Language Center, Presidio of Monterey, CA (language course, length varies by language category — 36 to 64 weeks at general public level) → AIT at Goodfellow AFB, TX. Total pipeline can approach two years for hard languages (supplement-level; verify sequence/lengths on GoArmy).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Combines language work (listening/reading material in the target language at mission level, translating and summarizing for analysts) with the reporting discipline of the SIGINT world; language sustainment training is a permanent, scheduled part of the job, not an extra.",
    careerPath:
      "As 35N, with language-driven assignment patterns; senior linguists become language managers/mentors; warrant paths in the 352 family.",
    civilian:
      "Translation/interpretation, language analysis in government and industry; DLPT scores are recognized documentation.",
    similar: ["army-35n", "usmc-2641", "army-09l"],
    extraSections: [
      {
        heading: "Organization",
        body: "As 35N — MI companies/brigades and national-mission assignments — with language capability aligned to regional missions.",
      },
      {
        heading: "Systems & equipment",
        body: "Generic — analytic and language-processing systems, unnamed.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your DLPT scores follow you and are retested — Soldiers who keep reading/listening in-language daily stay valuable (and keep language proficiency pay, which is publicly a real line item).",
          "Treat language maintenance like PT: scheduled, logged, non-negotiable.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-35g",
    code: "35G",
    title: "Geospatial Intelligence Imagery Analyst",
    branch: "Army",
    field: "CMF 35 — Military Intelligence",
    summary:
      "Imagery analyst — interprets aerial and satellite imagery to describe terrain, infrastructure and activity for commanders. Precision in coordinates and descriptions is the visible standard.",
    duties: [
      "Screen-based exploitation shifts: work imagery feeds and archives",
      "Measure and annotate features; compare change over time",
      "Produce imagery reports and products that feed the common operating picture; product deadlines around exercises/operations drive tempo",
    ],
    school:
      "BCT + AIT at Fort Huachuca, AZ; secondary sources report ~22 weeks (supplement) — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Screen-based exploitation shifts: working imagery feeds and archives, measuring and annotating features, comparing change over time, and producing imagery reports and products that feed the common operating picture. Product deadlines around exercises/operations drive tempo; precision in coordinates and descriptions is the visible standard.",
    careerPath:
      "Imagery analyst → senior analyst/exploitation chief → GEOINT section leadership; warrant paths in the intelligence warrant family (352/353 series — verify current GEOINT warrant mapping).",
    civilian:
      "GEOINT is a major civilian sector (NGA ecosystem, commercial satellite companies); imagery/GIS analyst roles.",
    similar: ["usmc-0241", "army-12y", "af-1n1x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "GEOINT cells in MI companies/brigades, division/corps analysis elements, and national GEOINT structures at senior levels (organizational level).",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: imagery exploitation workstations and national/commercial imagery sources at generic level; the Army's named GEOINT support systems at program level only (deliberately generic here — verify current system names on official GEOINT pages before adding).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Learn mensuration discipline and how to write an imagery report a non-specialist commander can act on.",
          "Build genuine expertise in your region's infrastructure; imagery analysts become regional experts by accumulation.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ============ CMF 36 / 37 / 38 / 42 / 46 / 51 / 56 — Support ============ */
  deep({
    id: "army-36b",
    code: "36B",
    title: "Financial Management Technician",
    branch: "Army",
    field: "CMF 36 — Financial Management",
    summary:
      "The Army's finance Soldier — pay, accounting and disbursing support that keeps Soldiers paid and units funded. A customer-service office rhythm with hard deadlines, where a keystroke error is someone's rent.",
    duties: [
      "Process pay actions and entitlements; resolve pay problems (the most emotionally charged queue in any unit)",
      "Accounting and vendor-pay support",
      "Cash/disbursing operations in deployed finance detachments",
    ],
    school:
      "BCT + AIT at Fort Jackson, SC (Finance School / Soldier Support Institute) — ~9 weeks per GoArmy-derived compilations in the source pack — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Customer-service office rhythm with hard deadlines: processing pay actions and entitlements, resolving pay problems (the most emotionally charged queue in any unit — a Soldier's pay issue is a family issue), accounting and vendor-pay support, and cash/disbursing operations in deployed finance detachments.",
    careerPath:
      "Finance technician → senior technician/detachment leadership → finance operations NCO; the finance warrant route sits in the 740-series / Finance Technician family — verify the current warrant code on the warrant recruiting site before relying on a code.",
    civilian:
      "Payroll, bookkeeping, accounting operations; maps toward accounting technician and payroll specialist credentials.",
    similar: ["usmc-3432", "army-42a", "navy-ps"],
    extraSections: [
      {
        heading: "Organization",
        body: "Financial management companies/detachments and installation finance offices; theater finance structures when deployed.",
      },
      {
        heading: "Systems & equipment",
        body: "Defense finance systems at name level — DJMS (pay system) and GFEBS (accounting) are the publicly named core systems; DTS travel system support at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Accuracy is compassion here — a keystroke error is someone's rent.",
          "Learn the pay entitlement reasons (BAH/BAS rules at public level), not just the transactions, and you become the office's problem-solver.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-37f",
    code: "37F",
    title: "Psychological Operations Specialist",
    branch: "Army",
    field: "CMF 37 — Psychological Operations",
    summary:
      "Designs and delivers influence products and campaigns in support of operations — research, audience analysis at concept level, media production and dissemination planning — as part of the Army's special operations information forces. The field recruits thinkers: writing, design and cultural curiosity are the actual entry skills. Influence-operations overview only; no techniques.",
    duties: [
      "Creative-agency-meets-staff work: research and planning documents",
      "Product development (print, audio, video, digital at generic level) and production coordination",
      "Assessment reporting; language/cultural preparation",
      "Deployed, PSYOP teams work directly with supported commanders and partner forces",
    ],
    school:
      "Selection-based: PSYOP Assessment & Selection and the PSYOP Qualification Course at Fort Liberty, NC (SWCS), including language training for many — verify the current pipeline on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Creative-agency-meets-staff work: research and planning documents, product development (print, audio, video, digital at generic level), production coordination, assessment reporting, and language/cultural preparation. Deployed, PSYOP teams work directly with supported commanders and partner forces.",
    careerPath:
      "Product developer/analyst roles → team leadership → PSYOP planning at battalion/group; the PSYOP warrant route sits in the 380A-series technician family — verify the current code.",
    civilian:
      "Strategic communications, marketing research and media production, public affairs.",
    similar: ["army-38b", "army-46s", "usmc-0521"],
    extraSections: [
      {
        heading: "Organization",
        body: "PSYOP groups/battalions/companies under the special operations / 1st Special Forces Command structure (active) and Civil Affairs/PSYOP Command (Reserve — the majority of PSYOP is in the Reserve, publicly known structure).",
      },
      {
        heading: "Systems & equipment",
        body: "Media production suites, print/broadcast production equipment at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Writing, design and cultural curiosity are the actual entry skills — the field recruits thinkers.",
          "A portfolio (writing/design/media) and language aptitude shape your file from day one.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-38b",
    code: "38B",
    title: "Civil Affairs Specialist",
    branch: "Army",
    field: "CMF 38 — Civil Affairs",
    summary:
      "The Army's civilian-interface specialist — works with local populations, civilian authorities and aid organizations to support stability, governance and relief in operational areas. Interpersonal credibility is the mission.",
    duties: [
      "Field-and-meeting work: assess community needs (schools, water, clinics at general level)",
      "Coordinate projects and key-leader engagements support; liaison with NGOs and host-nation officials",
      "Write assessments that feed the commander's picture of the civilian environment",
      "In garrison, heavy training in language, culture and regional studies",
    ],
    school:
      "Selection/assessment elements + the Civil Affairs Qualification Course at Fort Liberty, NC (SWCS), with language training — verify the current pipeline on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Field-and-meeting work: assessing community needs (schools, water, clinics at general level), coordinating projects and key-leader engagements support, liaison with NGOs and host-nation officials, and writing assessments that feed the commander's picture of the civilian environment. In garrison, heavy training in language, culture and regional studies.",
    careerPath:
      "CA team member → team sergeant roles → CA planning at battalion/brigade; the CA warrant route sits in the 380-series technician family — verify the current code.",
    civilian:
      "Humanitarian/development program work, municipal government and NGO coordination, international development contracting.",
    similar: ["army-37f", "usmc-0531", "army-42a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Civil Affairs battalions/companies (38th/91st/97th/99th CA battalions structure publicly) under special operations (active) and USACAPOC (Reserve — most CA is Reserve).",
      },
      {
        heading: "Systems & equipment",
        body: "Assessment and project-tracking systems at generic level; standard field equipment.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Interpersonal credibility is the mission — language effort, cultural homework and follow-through on small commitments are what the job actually grades.",
          "Reserve CA Soldiers often bring civilian professional skills (government, utilities, health) that the field actively uses.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-42a",
    code: "42A",
    title: "Human Resources Specialist",
    branch: "Army",
    field: "CMF 42 — Adjutant General",
    summary:
      "Personnel services for every Soldier in the unit — records, evaluations, promotions, awards, strength reporting. The S-1 office rhythm, with zero-error tolerance and absolute discretion: you see everyone's paperwork.",
    duties: [
      "Process personnel actions in the Army's HR systems; prepare promotion and evaluation paperwork with zero-error tolerance",
      "Casualty-notification support processes (handled with extreme care and formality)",
      "Strength accountability reporting; customer service for the battalion's Soldiers",
      "Field exercises move the S-1 into tents with the same systems on tactical networks",
    ],
    school:
      "BCT + AIT at Fort Jackson, SC (Adjutant General School / Soldier Support Institute) — ~9 weeks per the source pack's compilations — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "The S-1 office rhythm: processing personnel actions in the Army's HR systems, preparing promotion and evaluation paperwork with zero-error tolerance, casualty-notification support processes (handled with extreme care and formality), strength accountability reporting, and customer service for the battalion's Soldiers. Field exercises move the S-1 into tents with the same systems on tactical networks.",
    careerPath:
      "HR specialist → S-1 NCOIC track → senior HR sergeant roles; warrant path 420A Human Resources Technician is the 42A signature warrant route (420C Bandmaster is separate).",
    civilian:
      "HR administration and HRIS support; maps toward SHRM/aPHR credential preparation (verify via Army COOL).",
    similar: ["usmc-0111", "navy-ps", "navy-yn"],
    extraSections: [
      {
        heading: "Organization",
        body: "S-1 sections at battalion and above; HR companies/platoons; installation military personnel divisions.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: IPPS-A (Integrated Personnel and Pay System – Army) is the current named HR system of record; legacy eMILPO references persist in older material.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You see everyone's paperwork — promotions, flags, family emergencies — and absolute discretion plus accuracy is the whole reputation game.",
          "Learn IPPS-A deeply; system experts get pulled for every important task.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-46s",
    code: "46S",
    title: "Public Affairs Mass Communication Specialist",
    branch: "Army",
    field: "CMF 46 — Public Affairs",
    summary:
      "The Army's enlisted storyteller — journalist, photographer and videographer producing news and information about Army units for internal, public and media audiences. Your portfolio is public: every product carries the Army's name and yours.",
    duties: [
      "Newsroom rhythm in uniform: cover exercises and events with camera and notebook",
      "Edit and file stories/photos/video on deadline; run unit social media and publications under public affairs guidance",
      "Media-escort support; deployed, the same work in field conditions, often as a one-person bureau",
    ],
    school:
      "BCT + AIT at the Defense Information School (DINFOS), Fort Meade, MD — the joint public affairs schoolhouse; length: verify on GoArmy (the mass communication course is a multi-month professional course; no weeks are published here without the official page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Newsroom rhythm in uniform: covering exercises and events with camera and notebook, editing and filing stories/photos/video on deadline, running unit social media and publications under public affairs guidance, and media-escort support. Deployed, the same work in field conditions, often as a one-person bureau.",
    careerPath:
      "Mass communication specialist → team leader / PA NCO → senior PA leadership; warrant/broadening into visual information management; sister MOSs 46T (VI equipment) and 46V (visual information) merge at senior grades per current structure (verify).",
    civilian:
      "Journalism, PR, corporate communications, photography/videography; DINFOS training is a recognized media credential in the defense-media world.",
    similar: ["usmc-4541", "army-37f", "navy-mc"],
    extraSections: [
      {
        heading: "Organization",
        body: "Public affairs detachments, brigade/division PA sections, and broadcast/visual information units.",
      },
      {
        heading: "Systems & equipment",
        body: "Professional camera/video kits, editing suites (Adobe-family tools at generic level), and the DVIDS distribution system (the Defense Department's public content platform — named, public).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your portfolio is public — every product carries the Army's name and yours.",
          "Speed plus accuracy plus visual eye is the trade; Soldiers who file clean copy on deadline get the interesting assignments (aviation, special operations support, overseas).",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-51c",
    code: "51C",
    title: "Contracting Noncommissioned Officer",
    branch: "Army",
    field: "CMF 51 — Acquisition, Logistics & Technology",
    summary:
      "A mid-career reclassification MOS: NCOs who buy what the Army needs — goods, services and construction support — through federal contracts, especially critical in deployed environments where local economies are the supply chain. Among the highest-paid civilian twins of any enlisted MOS.",
    duties: [
      "Market research; prepare solicitations and contract files; administer contracts and modifications",
      "Work with vendors and requiring activities; document everything to federal audit standards",
      "Deployed contracting teams are small and their decisions move real money fast",
    ],
    school:
      "Reclassification only (not entry-level) — the Army Acquisition/contracting training pipeline includes the Defense Acquisition University ecosystem and Army contracting courses; verify the current 51C course sequence/length on official acquisition pages.",
    requirements:
      "Reclassification only — not an entry-level MOS (per the source pack); verify current eligibility on official acquisition pages. " + REQ_VERIFY,
    dayInLife:
      "Procurement office work with operational stakes: market research, preparing solicitations and contract files, administering contracts and modifications, working with vendors and requiring activities, and documenting everything to federal audit standards. Deployed contracting teams are small and their decisions move real money fast.",
    careerPath:
      "Contracting NCO → senior contracting NCO / team leader, progressing through DAWIA contracting certification levels (the field's real ladder). A contracting warrant-officer route has existed in the acquisition structure — verify the current warrant MOS code on the warrant recruiting site before relying on any code.",
    civilian:
      "Federal contracting (the GS-1102 pathway is the famous one), corporate procurement — among the highest-paid civilian twins of any enlisted MOS.",
    similar: ["army-92a", "usmc-3043", "army-36b"],
    extraSections: [
      {
        heading: "Organization",
        body: "Contracting battalions/brigades under Army Contracting Command; contracting teams supporting deployed headquarters.",
      },
      {
        heading: "Systems & equipment",
        body: "Federal procurement systems at generic level (contract writing systems, SAM.gov ecosystem at public level).",
      },
      {
        heading: "What Soldiers eyeing a later reclass should know",
        bullets: [
          "The credential ladder — DAWIA contracting certification levels — is the career, and it is fully portable.",
          "Soldiers with clean records, writing skills and business coursework are the competitive applicants.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-56m",
    code: "56M",
    title: "Religious Affairs Specialist",
    branch: "Army",
    field: "CMF 56 — Religious Support",
    summary:
      "The chaplain's enlisted partner — runs the logistics, administration and support of the unit's religious support mission and helps connect Soldiers to help before problems become crises. 56Ms are often the first person a struggling Soldier talks to.",
    duties: [
      "Coordinate services and religious events; manage the chapel/unit ministry team's schedule and resources",
      "Support memorial services with great formality",
      "Drive the chaplain's battle rhythm during exercises/deployments",
      "Be a trusted, approachable presence — connect struggling Soldiers to the chaplain or care (process level)",
    ],
    school:
      "BCT + AIT at Fort Jackson, SC (Chaplain School structure — the U.S. Army Chaplain Center and School is at Fort Jackson) — ~7 weeks per the source pack's compilations — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Coordinating services and religious events, managing the chapel/unit ministry team's schedule and resources, supporting memorial services with great formality, driving the chaplain's battle rhythm during exercises/deployments, and being a trusted, approachable presence — 56Ms are often the first person a struggling Soldier talks to, with a duty to connect them to the chaplain or care (process level).",
    careerPath:
      "Religious affairs specialist → senior UMT NCO roles → religious affairs leadership at division/corps; the field is small and mentorship-driven.",
    civilian:
      "Faith-community administration, social-services and counseling-support assistance, program coordination.",
    similar: ["navy-rp", "army-68x", "army-42a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Unit Ministry Teams (one chaplain + one 56M is the standard pairing) at battalion and above; garrison chapel teams.",
      },
      {
        heading: "Systems & equipment",
        body: "Administrative systems at generic level; chapel facilities and field religious-support equipment.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Confidentiality norms around the chaplain's office are sacred — you protect the trust that makes Soldiers walk in.",
          "You support every Soldier's religious needs or referrals, regardless of your own faith; that pluralism is the professional standard, stated publicly by the Chaplain Corps.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ========================== CMF 68 — Medical ========================== */
  deep({
    id: "army-68w",
    code: "68W",
    title: "Combat Medic Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "The first medical hands on a sick or wounded Soldier — emergency care at the point of injury, primary-care support in clinics and aid stations, and the medical backbone of every maneuver unit. One of the Army's largest MOSs, and the only one whose members are called “Doc” as a title of earned respect.",
    duties: [
      "Line-unit life (the classic 68W assignment): belong to a platoon — train, PT, and go to the field with them, carrying the aid bag",
      "Garrison: sick-call support, aid-station and ambulance coverage, medical supply accountability, preventive-medicine tasks",
      "Hospital/clinic assignment: shift-based patient care support alongside nurses and providers",
      "Live on a certification calendar — skills expire and must be re-validated; EMT certification is built into the pipeline",
    ],
    school:
      "10 weeks BCT + 16 weeks AIT at Joint Base San Antonio–Fort Sam Houston, TX (Medical Center of Excellence / METC campus) — GoArmy 68W page figure carried in the source pack. The AIT includes the NREMT EMT certification examination pathway — EMT certification is built into the pipeline (GoArmy).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Two different jobs depending on assignment. In a line unit (the classic 68W life): you belong to a platoon — you train, PT, and go to the field with them, carrying the aid bag; garrison days are sick-call support, aid-station and ambulance coverage, medical supply accountability, preventive-medicine tasks, and constant skills sustainment. In a hospital/clinic: shift-based patient care support alongside nurses and providers. Field exercises and deployments are long aid-station shifts and ground-ambulance/evacuation support. Every medic lives on a certification calendar — skills expire and must be re-validated.",
    careerPath:
      "Line medic → senior medic / treatment squad leader → medical platoon sergeant → first sergeant; hospital track toward clinical supervision; broadening into instructor (MEDCoE); flight paramedic pathways exist via additional training and selection (the Army's critical care flight paramedic program is publicly documented — verify the current entry route); senior path 68Z Chief Medical NCO. PA school via the Army's IPAP (Interservice Physician Assistant Program) is the famous enlisted-to-officer medical route many 68Ws target.",
    civilian:
      "NREMT EMT out of AIT; pathways to paramedic programs, ER technician, medical assisting, and accelerated nursing/PA preparation; Army COOL lists dozens of medical certifications for CMF 68 (GoArmy notes the same at field level).",
    similar: ["navy-hm", "af-4n0x1", "usmc-0311"],
    extraSections: [
      {
        heading: "Organization",
        body: "Medical platoons in maneuver battalions, medical companies in brigade support battalions, field hospitals and hospital centers, and MEDDAC clinics/hospitals.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: the aid bag and its standard contents at generic level; ground ambulances at name level — M997-series HMMWV ambulances and the M1133 Stryker Medical Evacuation Vehicle; aid-station sets and litters/suction/oxygen equipment at trade level. Treatment is described at role level only in this entry.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your platoon will call you Doc and will judge you entirely on competence and calm — sustainment training is not busywork, it is the job between emergencies.",
          "Keep your EMT certification current forever; it is your civilian insurance policy.",
          "Learn the clinic/aid-station paperwork (documentation is legal evidence of care).",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "GoArmy — 68W Combat Medic Specialist", url: GOARMY_68W },
    ],
  }),

  deep({
    id: "army-68k",
    code: "68K",
    title: "Medical Laboratory Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "Runs the clinical laboratory — the blood, chemistry, microbiology and blood-bank testing that diagnoses actually depend on. One of the longest enlisted pipelines, ending in a nationally portable credential.",
    duties: [
      "Bench work on shift: receive and process specimens, run analyzers, quality-control checks",
      "Blood-bank inventory and compatibility processes (process level); result reporting into the medical record system",
      "Relentless QC/calibration documentation that makes lab results legally trustworthy",
      "In field hospitals, the same work in containerized labs",
    ],
    school:
      "~52 weeks total — Army.mil describes the year-long AIT as Phase I (six months) at Fort Sam Houston, TX followed by Phase II (six months) hands-on at one of ~21 military treatment facilities (Army.mil, Evans Army Community Hospital article). Graduates in the Army.mil account were completing the ASCP national certification pathway and needed only additional college credits toward an associate degree — cited as reported there. (The 52-week figure is supplement-supported: Operation Military Kids AIT compilation.)",
    requirements: REQ_VERIFY,
    dayInLife:
      "Bench work on shift: receiving and processing specimens, running analyzers, quality-control checks, blood-bank inventory and compatibility processes (process level), result reporting into the medical record system, and the relentless QC/calibration documentation that makes lab results legally trustworthy. In field hospitals, the same work in containerized labs.",
    careerPath:
      "Lab technician → section/shift leader → laboratory NCOIC → senior medical laboratory leadership. Note: the 670A Health Services Maintenance Technician warrant path belongs to 68A — the lab field's senior route is the NCO/68Z structure and civilian-credential depth (verify any warrant claim).",
    civilian:
      "Medical laboratory technician (MLT, ASCP) — a direct, licensed-adjacent civilian twin with strong demand.",
    similar: ["af-4t0x1", "navy-hm", "army-68c"],
    extraSections: [
      {
        heading: "Organization",
        body: "Hospital laboratories at medical centers and community hospitals; laboratory sections in field hospitals and medical logistics structures.",
      },
      {
        heading: "Systems & equipment",
        body: "Clinical analyzers (hematology, chemistry, blood bank) at trade level; laboratory information systems at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "QC is the job — a lab that fudges QC produces confident, wrong answers, and the field's culture is built on catching that.",
          "Your ASCP credential plus documented competencies make you employable in any hospital lab in America; keep the paperwork.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil — medical laboratory training (Evans Army Community Hospital)", url: ARMYMIL_68K },
    ],
  }),

  deep({
    id: "army-68c",
    code: "68C",
    title: "Practical Nursing Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "The Army's licensed practical nurse — direct bedside nursing care in Army hospitals under RN/physician direction. You graduate with a license, not just an MOS: the most direct credential transfer in CMF 68.",
    duties: [
      "Hospital shift life, genuinely: assigned patients, vital signs and assessments support",
      "Medication administration under protocol, wound care, admissions/discharges, patient education",
      "Meticulous charting in the electronic health record",
      "Deployed/field-hospital assignments mirror the same nursing work in austere facilities",
    ],
    school:
      "~52 weeks in two phases at Fort Sam Houston, TX (MEDCoE/METC), ending in eligibility to sit the NCLEX-PN licensure examination — Army National Guard lists the course at 51 weeks, 3 days and states candidates must pass NCLEX-PN and hold a state practical/vocational nurse license. (One low-quality secondary source claimed 10–14 weeks by confusing 68C with licensed-LPN accession routes — that figure is rejected; the ~52-week course is the school pipeline for unlicensed entrants.)",
    requirements: REQ_VERIFY,
    dayInLife:
      "Hospital shift life, genuinely: assigned patients, vital signs and assessments support, medication administration under protocol, wound care, admissions/discharges, patient education and meticulous charting in the electronic health record. Deployed/field-hospital assignments mirror the same nursing work in austere facilities.",
    careerPath:
      "Practical nurse → senior practical nurse/ward leadership → nursing supervision NCO roles; the natural ladder continues into RN education pathways (Army nursing commissioning programs at general level).",
    civilian:
      "LPN/LVN licensure — the most direct credential transfer in CMF 68; hospital, clinic and long-term-care nursing nationwide.",
    similar: ["army-68w", "navy-hm", "af-4n0x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "Inpatient wards and clinics of Army medical centers and community hospitals; field hospitals.",
      },
      {
        heading: "Systems & equipment",
        body: "Standard inpatient nursing equipment and the military EHR (MHS GENESIS — the named, public system) at name level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You graduate with a license, not just an MOS — protect it like a civilian professional: continuing education, documentation standards, and scope-of-practice discipline.",
          "Shift work and emotional load are real; the medics/nurses who last build recovery routines early.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army National Guard — 68C Practical Nursing Specialist", url: GUARD_68C },
    ],
  }),

  deep({
    id: "army-68a",
    code: "68A",
    title: "Biomedical Equipment Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "The technician who keeps hospital technology alive — installs, calibrates, maintains and repairs the medical devices care depends on. The civilian BMET shortage is real and publicly reported; every device family you master is a résumé line.",
    duties: [
      "Work-order rhythm in a hospital biomedical shop (and field-hospital equivalents)",
      "Preventive-maintenance inspections on schedule; troubleshooting device failures; safety testing",
      "Parts and documentation management; support clinical staff when a device misbehaves mid-care",
      "On-call rotations for critical equipment",
    ],
    school:
      "BCT + AIT at Fort Sam Houston, TX (with phases historically including follow-on training sites) — length: verify on GoArmy (a long technical course; secondary compilations vary — no number is published here without the official page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Work-order rhythm in a hospital biomedical shop (and field-hospital equivalents): preventive-maintenance inspections on schedule, troubleshooting device failures, safety testing, parts and documentation management, and supporting clinical staff when a device misbehaves mid-care. On-call rotations for critical equipment.",
    careerPath:
      "BMET → senior technician/shop leader → medical maintenance management; warrant path 670A Health Services Maintenance Technician is the field's signature warrant route.",
    civilian:
      "Biomedical equipment technician (CBET via AAMI is the standard civilian credential — verify Army COOL support); hospital systems and device manufacturers.",
    similar: ["army-94m", "army-68k", "navy-hm"],
    extraSections: [
      {
        heading: "Organization",
        body: "Biomedical shops in medical centers/hospitals, medical logistics companies, and field hospital maintenance sections.",
      },
      {
        heading: "Systems & equipment",
        body: "Patient monitors, imaging-support equipment, sterilizers, infusion and diagnostic devices at trade level; test/calibration equipment (electrical safety analyzers etc.) at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Documentation and safety testing are the profession — hospitals run on audit trails, and your maintenance records are legal documents.",
          "The civilian BMET shortage is real and publicly reported; every device family you master is a résumé line.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-68x",
    code: "68X",
    title: "Behavioral Health Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "Supports Army behavioral health care — assists psychologists, psychiatrists, social workers and psychiatric nurses in clinics, hospitals and deployed settings. The work requires unusual maturity for junior Soldiers because of what patients disclose.",
    duties: [
      "Intake interviews and screening support under clinician direction",
      "Facilitate psychoeducational groups; patient observation and documentation",
      "Appointment and program management for behavioral health clinics; outreach/prevention activities with units",
      "In deployed settings, combat-stress support teams are the field structure (organizational level)",
    ],
    school:
      "BCT + AIT at Fort Sam Houston, TX — ~20 weeks per GoArmy-derived compilations in the source pack — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Intake interviews and screening support under clinician direction, facilitating psychoeducational groups, patient observation and documentation, appointment and program management for behavioral health clinics, and outreach/prevention activities with units. In deployed settings, combat-stress support teams are the field structure (organizational level). The work requires unusual maturity for junior Soldiers because of what patients disclose.",
    careerPath:
      "Behavioral health specialist → senior specialist/clinic leadership → behavioral health program NCO roles; education ladders toward social work/psychology degrees are common in this field.",
    civilian:
      "Psychiatric/behavioral health technician, community mental-health support, social-services assistance.",
    similar: ["army-56m", "navy-hm", "af-4c0x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "Behavioral health clinics at installations, hospital psychiatry services, and combat/operational stress control elements.",
      },
      {
        heading: "Systems & equipment",
        body: "EHR documentation (MHS GENESIS at name level); screening instruments at generic level (named only as standardized screening tools — no clinical detail).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Boundaries are the skill: you will hear hard things, and the professional standard is confidentiality, correct escalation to clinicians, and never practicing beyond your role.",
          "Take care of your own mental health with the same seriousness — the field models it.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-68e",
    code: "68E",
    title: "Dental Specialist",
    branch: "Army",
    field: "CMF 68 — Medical",
    summary:
      "Chairside dental assistant and dental-readiness specialist — keeps units dentally ready (a deployability requirement) and clinics running.",
    duties: [
      "Assist dentists during procedures (four-handed dentistry)",
      "Sterilization and instrument processing — dental clinics are audited on infection control constantly",
      "Take and process dental radiographs under supervision; scheduling and readiness tracking for units",
      "Preventive-care support; field dental operations in deployed clinics",
    ],
    school:
      "BCT + AIT at Fort Sam Houston, TX (METC dental programs) — length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Assisting dentists during procedures (four-handed dentistry), sterilization and instrument processing, taking and processing dental radiographs under supervision, scheduling and readiness tracking for units, preventive-care support, and field dental operations in deployed clinics.",
    careerPath:
      "Dental specialist → senior assistant/clinic operations → dental NCO leadership; hygienist education is a common long-term goal (via civilian programs; the Army's enlisted dental hygiene options are limited — verify current routes officially).",
    civilian:
      "Dental assisting (state rules vary; DANB CDA is the standard national credential — verify Army COOL mapping).",
    similar: ["navy-hm", "army-68w", "af-4y0x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "Dental clinics under Dental Health Command structures; dental companies in deployed/field settings.",
      },
      {
        heading: "Systems & equipment",
        body: "Dental operatories, digital radiography, sterilization systems at trade level; the corporate dental record system at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Sterilization and infection control are non-negotiable systems — dental clinics are audited on them constantly.",
          "Chairside manner matters: most patients are anxious, and good assistants visibly change clinic tempo.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ========================== CMF 74 — Chemical ========================== */
  deep({
    id: "army-74d",
    code: "74D",
    title: "CBRN Specialist",
    branch: "Army",
    field: "CMF 74 — Chemical, Biological, Radiological, and Nuclear",
    summary:
      "The unit's chemical, biological, radiological and nuclear defense expert — protection, detection and response support at organizational level. Garrison reality for most junior 74Ds is the unit CBRN room, which makes them their commander's staff expert surprisingly early. Overview only on response procedures.",
    duties: [
      "Unit CBRN room work: protective mask fitting/testing records, equipment inventories and serviceability",
      "Training support for the whole unit's CBRN classes",
      "Technical CBRN unit work in specialized companies: reconnaissance, decontamination and consequence-management support at mission level",
    ],
    school:
      "BCT + AIT at Fort Leonard Wood, MO (CBRN School, MANSCEN) — length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Two halves: unit CBRN room work (protective mask fitting/testing records, equipment inventories and serviceability, training support for the whole unit's CBRN classes) and technical CBRN unit work in specialized companies (reconnaissance, decontamination and consequence-management support at mission level). Garrison reality for most junior 74Ds is the first half — which makes them their commander's staff expert surprisingly early.",
    careerPath:
      "Unit CBRN specialist → CBRN NCO at battalion/brigade → technical-unit leadership; warrant path 740A CBRN Technician.",
    civilian:
      "Hazmat technician pathways, emergency management, industrial hygiene/safety support; HAZWOPER-style credentials are the common civilian language (verify Army COOL).",
    similar: ["usmc-5711", "army-89d", "af-3e9x1"],
    extraSections: [
      {
        heading: "Organization",
        body: "CBRN cells in maneuver battalions/brigades; CBRN companies and the 20th CBRNE Command structure for technical units.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: protective ensembles and masks (JSLIST-family suits, M50-series protective mask), detection systems (JCAD — Joint Chemical Agent Detector), survey/radiac instruments, decontamination equipment sets. Names/roles only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "You are a one-person staff section as a junior NCO — the 74Ds who thrive build systems (inventories, training trackers) their commander can see.",
          "Keep your own technical currency; the field's equipment set modernizes often.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ==================== CMF 79 — Recruiting & Retention ==================== */
  deep({
    id: "army-79r",
    code: "79R",
    title: "Recruiter",
    branch: "Army",
    field: "CMF 79 — Recruiting and Retention",
    summary:
      "Experienced NCOs who represent the Army in communities and guide applicants from first conversation to shipping to training. A special-duty career field, not an entry MOS — and a public-trust job: your conduct in a civilian community is the Army's reputation.",
    duties: [
      "Community presence work: school and community events, applicant interviews and family conversations",
      "Process paperwork with MEPS; manage a pool of future Soldiers (preparing them physically and administratively)",
      "Accountability to monthly/annual mission goals — the quota reality is publicly the defining pressure of the job",
    ],
    school:
      "Selected NCOs attend the Army Recruiter Course at Fort Knox, KY (Recruiting and Retention College) — verify the current course length on official USAREC pages.",
    requirements:
      "Special-duty selection for experienced NCOs — not an entry-level MOS (per the source pack); verify current eligibility on official USAREC pages. " + REQ_VERIFY,
    dayInLife:
      "Community presence work: school and community events, applicant interviews and family conversations, processing paperwork with MEPS, managing a pool of future Soldiers (preparing them physically and administratively), and accountability to monthly/annual mission goals — the quota reality is publicly the defining pressure of the job.",
    careerPath:
      "Detailed recruiter → converted 79R → station commander → senior USAREC leadership (79R structure per DA Pam); sister codes cover career counselors (79S) and Guard/Reserve retention (79T/79V — titles per the pack index, verify).",
    civilian:
      "Talent acquisition, admissions counseling, sales and community relations.",
    similar: ["army-42a", "army-46s", "usmc-0111"],
    extraSections: [
      {
        heading: "Organization",
        body: "Recruiting battalions/companies/stations under U.S. Army Recruiting Command (USAREC), geographically dispersed in civilian communities.",
      },
      {
        heading: "Systems & equipment",
        body: "Applicant processing systems at generic level.",
      },
      {
        heading: "What NCOs considering it should know",
        bullets: [
          "Recruiting is a public-trust job — your conduct in a civilian community is the Army's reputation, and production pressure never licenses cutting corners on applicant eligibility or honesty.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ====================== CMF 88 — Transportation ====================== */
  deep({
    id: "army-88m",
    code: "88M",
    title: "Motor Transport Operator",
    branch: "Army",
    field: "CMF 88 — Transportation",
    summary:
      "The Army's professional truck driver — moves the cargo and people that everything else depends on, in garrison and in convoy. Your license record and safety record are your career.",
    duties: [
      "Motor-pool start: PMCS on your vehicle — a real inspection culture — then dispatch procedures",
      "Driving: local hauls, training-area support, port/railhead operations, long convoy movements during exercises and deployments",
      "Load securement, paperwork (dispatches, trip tickets), and driver rest rules are daily disciplines",
      "Senior 88Ms plan and lead convoys (mission level)",
    ],
    school:
      "BCT + AIT at Fort Leonard Wood, MO — ~6–7 weeks per GoArmy-derived compilations in the source pack (commonly cited as just under 7 weeks) — verify the exact figure on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Motor-pool start (PMCS on your vehicle — a real inspection culture), dispatch procedures, then driving: local hauls, training-area support, port/railhead operations, and long convoy movements during exercises and deployments. Load securement, paperwork (dispatches, trip tickets), and driver rest rules are daily disciplines. Senior 88Ms plan and lead convoys (mission level).",
    careerPath:
      "Driver → senior driver/assistant convoy leadership → squad leader → platoon sergeant / truckmaster roles; the 880A/882A marine/transportation warrant family covers related fields — the 88-series senior NCO structure is the main ladder (verify any warrant claim).",
    civilian:
      "Commercial driving — states offer military-CDL waiver/recognition pathways for military truck experience (rules vary; the Army also funds CDL preparation via Credentialing Assistance — verify current programs).",
    similar: ["usmc-3531", "navy-eo", "army-88n"],
    extraSections: [
      {
        heading: "Organization",
        body: "Transportation companies, movement control structures, and truck elements inside support battalions across every BCT and sustainment brigade.",
      },
      {
        heading: "Systems & equipment",
        body: "Fact-file level: the wheeled fleet at name level — M915-series line-haul tractors, M977 HEMTT cargo/tanker family, M1070 HET heavy equipment transporter, PLS (Palletized Load System) trucks, MTV/FMTV medium trucks and standard trailers. Names/roles per Army vehicle descriptions.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your license record and safety record are your career — one preventable accident outweighs a year of good work.",
          "Learn load securement and vehicle recovery basics early; the driver who can also fix small problems is the one convoys depend on.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-88n",
    code: "88N",
    title: "Transportation Management Coordinator",
    branch: "Army",
    field: "CMF 88 — Transportation",
    summary:
      "The movement planner/documenter — coordinates how units, equipment and cargo actually move through the Army's global transportation system. Deployment season is this MOS's Super Bowl.",
    duties: [
      "Systems-and-deadlines office work with operational consequences: book and document movements",
      "Work movement-control teams at ports, airfields and railheads during deployments (when the job becomes 24-hour operations)",
      "In-transit visibility reporting; solve the daily problem of cargo that must be in two places at once",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Transportation School) — length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Systems-and-deadlines office work with operational consequences: booking and documenting movements, working movement-control teams at ports, airfields and railheads during deployments (when the job becomes 24-hour operations), in-transit visibility reporting, and solving the daily problem of cargo that must be in two places at once.",
    careerPath:
      "Coordinator → movement NCO at battalion/brigade → senior movement supervision; warrant paths 880A Marine Deck Officer / 881A Marine Engineering Officer are vessel-related, while 882A Mobility Officer is the movement-focused warrant (verify current mapping).",
    civilian:
      "Freight forwarding, logistics coordination, port/air cargo operations and supply-chain documentation roles.",
    similar: ["usmc-0441", "army-88m", "army-92a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Movement control battalions/teams, transportation brigades, and deployment/distribution support structures.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: movement and visibility systems — TC-AIMS II lineage and the Global Combat Support System/movement tools at generic level (verify current system names officially before adding more).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Deployment season is your Super Bowl — the coordinators who pre-build documentation templates and know their units' equipment lists cold are the ones headquarters requests by name.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ====================== CMF 89 — Ammunition & EOD ====================== */
  deep({
    id: "army-89b",
    code: "89B",
    title: "Ammunition Specialist",
    branch: "Army",
    field: "CMF 89 — Ammunition",
    summary:
      "Accountability and logistics of the Army's ammunition — receiving, storing, inspecting at process level, issuing and retrograding ammunition under strict safety and accounting rules. In this MOS, paperwork is safety. Overview only on procedures.",
    duties: [
      "Ammunition supply point (ASP) and depot operations: inventory counts that must be perfect",
      "Documentation for every issue/turn-in; storage compatibility management at process level",
      "Forklift/materials handling; support unit draws before ranges and deployments",
      "Surge periods (unit deployments, big exercises) define the tempo",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Ordnance School) — length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Ammunition supply point (ASP) and depot operations: inventory counts that must be perfect, documentation for every issue/turn-in, storage compatibility management at process level, forklift/materials handling, and supporting unit draws before ranges and deployments. Surge periods (unit deployments, big exercises) define the tempo.",
    careerPath:
      "Ammunition specialist → ASP section leadership → ammunition management at battalion/theater; warrant path 890A Ammunition Technician.",
    civilian:
      "Inventory/warehouse operations, hazmat storage compliance (certification-dependent), logistics documentation.",
    similar: ["usmc-2311", "army-92a", "army-89d"],
    extraSections: [
      {
        heading: "Organization",
        body: "Ammunition companies/platoons in sustainment structures, ASPs at installations, and theater ammunition support.",
      },
      {
        heading: "Systems & equipment",
        body: "Ammunition accounting systems at name level (SAAS — Standard Army Ammunition System, at program level); materials-handling equipment (forklifts, cranes at generic level).",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "In this MOS, paperwork is safety — lot accountability and compatibility rules exist because of historical accidents, and the culture treats discrepancies as stop-work events.",
          "Forklift/MHE licensing is a quiet civilian asset.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-89d",
    code: "89D",
    title: "Explosive Ordnance Disposal Specialist",
    branch: "Army",
    field: "CMF 89 — Ammunition",
    summary:
      "The Army's bomb-disposal technicians — respond to unexploded ordnance and explosive hazards in support of operations and, at home station, in support of civil authorities. An academic MOS in a bomb suit: the school failure rate is publicly notorious, and study habits decide who graduates. Overview only — this entry contains no render-safe or disposal procedures.",
    duties: [
      "A readiness job between responses: equipment maintenance (robots, protective suits, vehicles)",
      "Continuous study of ordnance identification publications — a career-long study discipline",
      "Team training and certification; range-clearance support",
      "On-call response rotations for ordnance incidents on/near installations (mission level)",
    ],
    school:
      "One of the longest and most selective pipelines: Phase 1 — a ~7-week preparatory course at Fort Gregg-Adams, VA (Army Ordnance School), then Phase 2 — Naval School Explosive Ordnance Disposal (NAVSCOLEOD) at Eglin AFB, FL, the joint school. Army.mil (Fort Drum article) states the Phase 2 course at 34 weeks and total training of 182 days with 45 written and hands-on tests; Wikipedia/other secondary sources describe the Eglin course at 26 academic weeks — the week counts conflict between sources, so the framing published here is the Army.mil one (7-week prep + NAVSCOLEOD, more than a year of total pipeline per Army.mil), with the exact Phase-2 weeks flagged for verification against the current NAVSCOLEOD/GoArmy page. Graduation earns the EOD badge (“Crab”).",
    requirements: REQ_VERIFY,
    dayInLife:
      "At public level: a readiness job between responses — equipment maintenance (robots, protective suits, vehicles), continuous study of ordnance identification publications, team training and certification, range-clearance support, and on-call response rotations for ordnance incidents on/near installations. EOD teams are small (the company/battalion structure supports 2–3 person response teams) and the professional culture is famously self-reliant and study-heavy.",
    careerPath:
      "EOD technician → team leader (the job's defining responsibility — team leaders are accountable for responses) → senior team leader / operations roles → company/battalion senior EOD leadership. (Officers enter as 89E AOC; the enlisted senior route is the NCO structure — verify any warrant claim before relying on it.)",
    civilian:
      "Public-safety bomb squads (law-enforcement route), UXO technician work in range/environmental remediation (a real civilian industry with its own certification tiers), hazmat response.",
    similar: ["usmc-2336", "army-74d", "navy-eod"],
    extraSections: [
      {
        heading: "Organization",
        body: "EOD companies and battalions under the 52nd and 71st Ordnance Groups (EOD) and 20th CBRNE Command (per Army.mil), plus EOD support elements worldwide.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: EOD robots (TALON/PackBot-family at public name level), bomb suits, X-ray systems and response vehicles at generic level. Names only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "The school failure rate is publicly notorious — this is an academic MOS in a bomb suit; study habits decide who graduates.",
          "After school, the learning never stops: ordnance identification is a career-long study discipline, and team leaders are made by years of supervised responses.",
        ],
      },
    ],
    sourceLinks: [
      DA_PAM_LINK,
      { label: "Army.mil (Fort Drum) — EOD hiring/pipeline", url: DRUM_89D },
    ],
  }),

  /* ================== CMF 91 — Mechanical Maintenance ================== */
  deep({
    id: "army-91b",
    code: "91B",
    title: "Wheeled Vehicle Mechanic",
    branch: "Army",
    field: "CMF 91 — Mechanical Maintenance",
    summary:
      "The Army's most numerous mechanic — diagnoses, services and repairs the wheeled fleet everything else rides on. Shops are judged on the unit's operational readiness rate, a number everyone from the commander down watches.",
    duties: [
      "Bay life: work orders from the motor pool; troubleshooting (electrical faults are the modern mechanic's daily bread)",
      "Scheduled services, road tests, parts ordering through the supply system",
      "Field maintenance during exercises — including recovery support when vehicles break where they can't be towed easily",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Ordnance School) — ~13 weeks per GoArmy/Guard-derived compilations in the source pack — verify the exact figure on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Bay life: work orders from the motor pool, troubleshooting (electrical faults are the modern mechanic's daily bread), scheduled services, road tests, parts ordering through the supply system, and field maintenance during exercises — including recovery support when vehicles break where they can't be towed easily. Shops are judged on the unit's operational readiness rate, a number everyone from the commander down watches.",
    careerPath:
      "Mechanic → senior mechanic/inspector → shop foreman / motor sergeant roles → maintenance management; warrant path 915A Automotive Maintenance Warrant Officer is the signature route; system-specific siblings (91A Abrams, 91M Bradley, 91S Stryker) cross-feed at senior levels.",
    civilian:
      "Automotive/diesel technician — ASE certifications are the civilian standard and a recognized Army COOL pathway.",
    similar: ["usmc-3521", "cg-mk", "army-91e"],
    extraSections: [
      {
        heading: "Organization",
        body: "Maintenance companies and forward support companies in every BCT and sustainment unit; installation equipment-support shops.",
      },
      {
        heading: "Systems & equipment",
        body: "The wheeled fleet (HMMWV, FMTV/MTV, HEMTT, MRAP-family legacy, trailers) at name level; diagnostic systems at name level — MSD (Maintenance Support Device) and GCSS-Army as the named maintenance/supply system of record.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Troubleshooting method — actually following the manual's fault-isolation logic instead of swapping parts — is what separates mechanics from parts-changers, in the Army and in every civilian shop afterward.",
          "Keep your ASE-study habits; the Army will help fund the civilian credentials.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-91e",
    code: "91E",
    title: "Allied Trade Specialist",
    branch: "Army",
    field: "CMF 91 — Mechanical Maintenance",
    summary:
      "The maintenance world's machinist-welder — fabricates and repairs the parts that can't be ordered, and welds the fleet and structures back together. Your work is inspectable forever: welds and machined parts carry your reputation physically.",
    duties: [
      "Shop-based project work: machining (lathe/mill) and welding jobs from work orders",
      "Fabricate brackets/tools/fixtures; repair cracked mounts and structures",
      "Support recovery/field maintenance with portable welding",
      "Precision measurement and blueprint reading are daily skills",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Ordnance School; the allied trades course has also used Aberdeen Proving Ground historically — verify the current location/length on GoArmy).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Shop-based project work: machining (lathe/mill) and welding jobs from work orders, fabricating brackets/tools/fixtures, repairing cracked mounts and structures, and supporting recovery/field maintenance with portable welding. Precision measurement and blueprint reading are daily skills.",
    careerPath:
      "Machinist/welder → shop leader → allied trades supervision; warrant path 914A Allied Trades Warrant Officer.",
    civilian:
      "Welding and machining trades; AWS welding certifications and NIMS machining credentials are the civilian currency (verify Army COOL).",
    similar: ["usmc-2161", "army-91b", "navy-ht"],
    extraSections: [
      {
        heading: "Organization",
        body: "Maintenance companies with allied-trades shops; sustainment brigades; depot-support elements.",
      },
      {
        heading: "Systems & equipment",
        body: "Machine-shop equipment (engine lathes, milling machines, CNC at some shops) and welding processes (MIG/TIG/stick at trade-name level), plasma cutting, and precision measuring tools.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your work is inspectable forever — welds and machined parts carry your reputation physically.",
          "Document projects and work toward AWS welding certifications while the Army pays for training time.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ================= CMF 92 — Quartermaster / Supply & Services ================= */
  deep({
    id: "army-92a",
    code: "92A",
    title: "Automated Logistical Specialist",
    branch: "Army",
    field: "CMF 92 — Supply and Services / Quartermaster",
    summary:
      "Runs the Army's supply data — the inventory records, receipts and issues that determine whether units actually have what the system says they have. Accuracy under volume is the job.",
    duties: [
      "Warehouse-and-systems work: receive and inspect shipments; stock record accounting in the logistics system",
      "Inventory counts and reconciliations; issue parts/supplies to units",
      "Support the supply support activity (SSA) through exercise/deployment surges when requisition volume explodes",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Quartermaster School) — ~9 weeks per the source pack's compilations — verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Warehouse-and-systems work: receiving and inspecting shipments, stock record accounting in the logistics system, inventory counts and reconciliations, issuing parts/supplies to units, and supporting the supply support activity (SSA) through exercise/deployment surges when requisition volume explodes. Accuracy under volume is the job.",
    careerPath:
      "Logistical specialist → warehouse/SSA leadership → supply management at battalion/theater; warrant paths 920A Property Accounting Technician and 920B Supply Systems Technician.",
    civilian:
      "Warehouse/inventory management and ERP systems work (SAP-family experience language maps from GCSS-Army); APICS/CSCP pathway foundations.",
    similar: ["usmc-3043", "navy-ls", "army-92y"],
    extraSections: [
      {
        heading: "Organization",
        body: "Supply support activities (SSAs) in sustainment brigades, warehouse operations at installations, and supply elements supporting deployed task forces.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: GCSS-Army (Global Combat Support System–Army) is the named system of record the MOS is built around; warehouse MHE (forklifts, conveyors) at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Inventory accuracy is a moral quality in logistics — a record that lies sends a unit to the field without parts.",
          "GCSS-Army fluency (really learning the transactions, not just your three screens) is promotable and directly civilian-marketable as ERP experience.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-92g",
    code: "92G",
    title: "Culinary Specialist",
    branch: "Army",
    field: "CMF 92 — Supply and Services / Quartermaster",
    summary:
      "Army cook — feeds Soldiers at scale in dining facilities (DFACs) and in the field, where morale literally runs through the serving line. Holiday meals and commander-directed special meals are the field's showcase moments.",
    duties: [
      "Production schedules: early-morning prep, meal service windows, sanitation inspections",
      "Menu and recipe-card discipline; inventory/requisition support for food stocks",
      "Field feeding (mobile kitchen trailers and containerized kitchens) during exercises — where a good field mess is a unit event",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Quartermaster School; joint culinary training structures) — length: verify on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Production schedules: early-morning prep, meal service windows, sanitation inspections, menu and recipe-card discipline, inventory/requisition support for food stocks, and field feeding (mobile kitchen trailers and containerized kitchens) during exercises — where a good field mess is a unit event. Holiday meals and commander-directed special meals are the field's showcase moments.",
    careerPath:
      "Cook → first cook/shift leader → DFAC manager / field feeding sergeant → senior culinary leadership; warrant path 640A Food Service Technician (officer-side warrant) exists at senior levels — verify current mapping.",
    civilian:
      "Institutional/commercial cooking; ServSafe-family food-safety credentials are the standard civilian language (verify Army COOL).",
    similar: ["navy-cs", "cg-cs", "usmc-3381"],
    extraSections: [
      {
        heading: "Organization",
        body: "DFACs at installations (many now contractor-supported with 92G leadership/inspection roles), field feeding companies/elements in support battalions.",
      },
      {
        heading: "Systems & equipment",
        body: "Garrison kitchen equipment sets and field systems at name level — MKT (Mobile Kitchen Trailer) and CK (Containerized Kitchen) families; food-safety systems at trade level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Food safety certification discipline (temperatures, sanitation) is both a legal requirement and your professional identity — inspectors will know your kitchen.",
          "Speed at scale is a learnable system, not a talent: mise en place and production planning are the real skills.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-92r",
    code: "92R",
    title: "Parachute Rigger",
    branch: "Army",
    field: "CMF 92 — Supply and Services / Quartermaster",
    summary:
      "Packs and maintains the parachutes and airdrop systems that airborne operations trust completely — a specialty where the product must work every single time. Riggers famously jump what they pack: the field's trust ritual is public knowledge.",
    duties: [
      "Rigger shed rhythm: pack personnel parachutes to exacting standards with layered inspections (each chute is signed and tracked)",
      "Maintain airdrop platforms and cargo systems; sewing/repair shop work",
      "Support airborne operations (drop-zone duties, jumpmaster support structures at organizational level)",
      "Riggers are jump-status and may be required to jump with parachutes from the stock they maintain",
    ],
    school:
      "BCT + AIT at Fort Gregg-Adams, VA (Quartermaster School aerial delivery), and riggers assigned to airborne units attend Basic Airborne Course, Fort Benning — verify the current sequence/lengths on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Rigger shed rhythm: packing personnel parachutes to exacting standards with layered inspections (each chute is signed and tracked), maintaining airdrop platforms and cargo systems, supporting airborne operations (drop-zone duties, jumpmaster support structures at organizational level), and sewing/repair shop work. Riggers famously jump what they pack — the field's trust ritual is public knowledge: riggers are jump-status and may be required to jump with parachutes from the stock they maintain.",
    careerPath:
      "Rigger → senior rigger/inspector (in-process inspection authority is the trust milestone) → rigger leadership; warrant path 921A Airdrop Systems Technician.",
    civilian:
      "Aviation textile/rigging work, QA inspection, skydiving-industry rigging (FAA rigger certificates are the civilian parallel — separate credential).",
    similar: ["usmc-0451", "army-92a", "af-2a6x4"],
    extraSections: [
      {
        heading: "Organization",
        body: "Rigger companies/platoons supporting airborne divisions/corps and special operations logistics; aerial delivery structures.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: T-11 main personnel parachute and T-11R reserve (current named systems), MC-6 steerable system for specialized users, cargo parachutes and airdrop platforms (CDS/Heavy drop at program level). Names only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "There is no “probably fine” in this building — the inspection culture will feel extreme until you understand that your initials are on equipment someone else's life uses.",
          "That same zero-defect record is a powerful civilian quality-assurance story.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ================== CMF 94 — Electronic Maintenance ================== */
  deep({
    id: "army-94m",
    code: "94M",
    title: "Radar Repairer",
    branch: "Army",
    field: "CMF 94 — Electronic Maintenance and Calibration",
    summary:
      "Maintains the Army's ground-based radars — the sensors that find aircraft and incoming artillery/rocket fire for air defense and fires units. A documentation-and-test-discipline job inside a combat-arms support wrapper.",
    duties: [
      "Electronics-bench and field-system work: scheduled services on radar systems",
      "Fault isolation down to component level with test equipment; alignment/calibration support",
      "Cabling and power systems; support live operations during exercises where the radar picture is the product",
    ],
    school:
      "BCT + a long technical AIT — radar/electronics training has historically run through Fort Sill / Redstone Arsenal-associated electronics schools across course versions; verify the current location and length on GoArmy (nothing is published here without the official page).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Electronics-bench and field-system work: scheduled services on radar systems, fault isolation down to component level with test equipment, alignment/calibration support, cabling and power systems, and supporting live operations during exercises where the radar picture is the product. A documentation-and-test-discipline job inside a combat-arms support wrapper.",
    careerPath:
      "Radar repairer → senior repairer/section leader → electronics maintenance management; warrant paths in the 948-series electronics family (948B Electronic Systems Maintenance / 948D Electronic Missile Systems — verify current mapping for 94M feeders).",
    civilian:
      "Radar/RF and electronics technician roles, defense field service, test-and-measurement industry; ETA/FCC-family credentials are common civilian language (verify Army COOL).",
    similar: ["army-14e", "usmc-5959", "army-68a"],
    extraSections: [
      {
        heading: "Organization",
        body: "Maintenance support for ADA and field artillery units (sensor platoons), direct-support maintenance companies.",
      },
      {
        heading: "Systems & equipment",
        body: "Name level: radar families — AN/MPQ-64 Sentinel (air defense), AN/TPQ-50 / LCMR family and AN/TPQ-53 counterfire radars (fires); electronic test sets at generic level. Names/roles only.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Component-level troubleshooting (reading a schematic and proving where a signal stops) is the durable skill that outlives any single radar — test-equipment mastery transfers everywhere in electronics.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  /* ====================== Special / other codes ====================== */
  deep({
    id: "army-08h",
    code: "08H",
    title: "Army Equestrian",
    branch: "Army",
    field: "CMF 08 — Equid Operations",
    summary:
      "A tiny specialty supporting the Army's ceremonial horse units — daily care, handling and preparation of Army horses for state and ceremonial duties. A reputation-by-visibility assignment: selection is competitive precisely because the field is tiny.",
    duties: [
      "Stable rhythm: feeding, grooming, health checks with veterinary support, exercise and training of horses",
      "Tack and facility maintenance",
      "Ceremonial preparation (uniforms, leather, and drill) culminating in high-visibility public duties in the National Capital Region",
    ],
    school:
      "Verify on official source — entry routes into this very small field are by selection/reclassification rather than a standard school pipeline (per the source pack).",
    requirements: REQ_VERIFY,
    dayInLife:
      "Stable rhythm: feeding, grooming, health checks with veterinary support, exercise and training of horses, tack and facility maintenance, and ceremonial preparation (uniforms, leather, and drill) culminating in high-visibility public duties in the National Capital Region.",
    careerPath: "Small-field NCO progression inside the ceremonial units.",
    civilian: "Equine care, stable management and animal-handling industry.",
    similar: ["army-68t", "army-31k"],
    extraSections: [
      {
        heading: "Organization",
        body: "Caisson/equestrian elements under the Military District of Washington (e.g. the 3d U.S. Infantry Regiment “The Old Guard” caisson structure, at organizational level).",
      },
      {
        heading: "Systems & equipment",
        body: "Horses, tack and stable plant at trade level.",
      },
      {
        heading: "What interested Soldiers should know",
        bullets: [
          "This is a reputation-by-visibility assignment — standards for appearance and animal care are absolute, and selection is competitive precisely because the field is tiny.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),

  deep({
    id: "army-09l",
    code: "09L",
    title: "Interpreter/Translator",
    branch: "Army",
    field: "CMF 09 — Special / Immaterial",
    summary:
      "Recruited for the language itself — native/heritage-level speakers who interpret and translate for Army units. Availability is language- and needs-dependent and has varied over time — verify the current program status on GoArmy before treating it as open.",
    duties: [
      "Interpretation support for meetings, training of partner forces and unit operations",
      "Document translation; cultural context for commanders at general level",
      "Assignments follow the language, so two 09Ls can have entirely different careers",
    ],
    school:
      "BCT + language/military familiarization as the program requires; professional linguists may enter under civilian-acquired-skills structures — verify the current pipeline on GoArmy.",
    requirements: REQ_VERIFY,
    dayInLife:
      "Interpretation support for meetings, training of partner forces and unit operations; document translation; cultural context for commanders at general level. Assignments follow the language, so two 09Ls can have entirely different careers.",
    careerPath:
      "Linguist → senior linguist/quality control → linguist management; some transition into 35M/35P pipelines (verify current policy).",
    civilian:
      "Professional interpretation/translation, federal language services, localization industry.",
    similar: ["army-35p", "army-35m", "usmc-2641"],
    extraSections: [
      {
        heading: "Organization",
        body: "Attached where the language is needed — MI and maneuver structures, theater linguist management elements.",
      },
      {
        heading: "Systems & equipment",
        body: "Translation/reference tools at generic level.",
      },
      {
        heading: "What new Soldiers should know",
        bullets: [
          "Your professional value is accuracy under pressure plus cultural judgment — and your language will be tested (DLPT).",
          "Keep formal register and dialect range documented; it shapes assignments.",
        ],
      },
    ],
    sourceLinks: [DA_PAM_LINK, GOARMY_LINK],
  }),
];
