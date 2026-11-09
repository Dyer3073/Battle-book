// Rank charts for all six branches.
//
// USMC, Army, and the Navy enlisted / W-1 rows are copied from the
// researched rank pack (~/workspace/military-app/ranks/ranks.md). The
// pack file was truncated mid-Navy-table when saved, so the remaining
// rows (rest of Navy, Coast Guard, Air Force, Space Force) were completed
// from official/standard published rank structures and verified by web
// search at build time — see DATA-PLAN.md. Titles and abbreviations are
// the services' published ones; insignia specs and display descriptions
// live in insignia.ts, drawn from the companion insignia pack.

export type RankRow = {
  grade: string;
  title: string;
  abbr: string;
  note?: string;
};

export type BranchRanks = {
  branch: string;
  howToRead: string;
  enlisted: RankRow[];
  warrant: RankRow[] | null; // null = branch has no warrant officers
  warrantNote?: string;
  officers: RankRow[];
  sourceLabel: string;
  sourceUrl: string | null; // null = the pack named the page without a full URL
};

export const FIVE_STAR_NOTE =
  "Five-star grades — General of the Army, General of the Air Force, and Fleet Admiral — are wartime/historical only, last used in World War II, and are not part of the current rank structure. The Marine Corps, Coast Guard, and Space Force have never had a five-star grade.";

export const DOD_INSIGNIA_LABEL = "U.S. Department of Defense — U.S. Military Rank Insignia (all branches)";
export const DOD_INSIGNIA_URL = "https://www.Defense.Gov/Our-Story/Insignias/Officers/";

export const RANK_CHARTS: BranchRanks[] = [
  {
    branch: "Marine Corps",
    howToRead:
      "Your rank is in your title, but your job (your MOS) is separate — every E-5 is a \u201cSergeant\u201d no matter the MOS. Marines are NCOs starting at Corporal (E-4); E-3 Lance Corporal is the last junior-enlisted rank before NCO status. Chevron points sit on top, rockers curve underneath, and the symbol in the middle (crossed rifles, diamond, star, bursting bomb) tells you which E-8/E-9 track a Marine is on.",
    enlisted: [
      { grade: "E-1", title: "Private", abbr: "Pvt", note: "No insignia worn." },
      { grade: "E-2", title: "Private First Class", abbr: "PFC" },
      { grade: "E-3", title: "Lance Corporal", abbr: "LCpl", note: "Senior junior-enlisted rank; not yet an NCO." },
      { grade: "E-4", title: "Corporal", abbr: "Cpl", note: "First NCO rank." },
      { grade: "E-5", title: "Sergeant", abbr: "Sgt" },
      { grade: "E-6", title: "Staff Sergeant", abbr: "SSgt", note: "First Staff NCO (SNCO) rank." },
      { grade: "E-7", title: "Gunnery Sergeant", abbr: "GySgt", note: "At this grade Marines choose the Master Sergeant (technical) or First Sergeant (command) track." },
      { grade: "E-8", title: "Master Sergeant", abbr: "MSgt", note: "Technical-expert track; stays in the occupational field." },
      { grade: "E-8", title: "First Sergeant", abbr: "1stSgt", note: "Command track; senior enlisted advisor to a company-level commander." },
      { grade: "E-9", title: "Master Gunnery Sergeant", abbr: "MGySgt", note: "Technical-expert track; the senior technical leader in an occupational field." },
      { grade: "E-9", title: "Sergeant Major", abbr: "SgtMaj", note: "Command track; senior enlisted advisor at battalion level and above." },
      {
        grade: "E-9 (special)",
        title: "Sergeant Major of the Marine Corps",
        abbr: "SMMC",
        note: "Single billet; senior enlisted Marine and advisor to the Commandant. DoD's chart styles this abbreviation \u201cSgtMajMC\u201d; Marines.mil's own Ranks page styles it \u201cSMMC\u201d — the Marine Corps' own styling is shown here.",
      },
    ],
    warrant: [
      { grade: "W-1", title: "Warrant Officer", abbr: "WO1", note: "Appointed by warrant; drawn from senior enlisted Marines." },
      { grade: "W-2", title: "Chief Warrant Officer 2", abbr: "CWO2", note: "Commissioned from W-2 up." },
      { grade: "W-3", title: "Chief Warrant Officer 3", abbr: "CWO3" },
      { grade: "W-4", title: "Chief Warrant Officer 4", abbr: "CWO4" },
      { grade: "W-5", title: "Chief Warrant Officer 5", abbr: "CWO5", note: "Highest warrant grade." },
    ],
    warrantNote:
      "Marine warrant officers in the infantry weapons field appointed as Marine Gunners are addressed as \u201cGunner,\u201d a specialty title within the warrant ranks.",
    officers: [
      { grade: "O-1", title: "Second Lieutenant", abbr: "2ndLt" },
      { grade: "O-2", title: "First Lieutenant", abbr: "1stLt" },
      { grade: "O-3", title: "Captain", abbr: "Capt" },
      { grade: "O-4", title: "Major", abbr: "Maj" },
      { grade: "O-5", title: "Lieutenant Colonel", abbr: "LtCol" },
      { grade: "O-6", title: "Colonel", abbr: "Col" },
      { grade: "O-7", title: "Brigadier General", abbr: "BGen" },
      { grade: "O-8", title: "Major General", abbr: "MajGen" },
      { grade: "O-9", title: "Lieutenant General", abbr: "LtGen" },
      { grade: "O-10", title: "General", abbr: "Gen", note: "The Commandant and Assistant Commandant of the Marine Corps hold this grade." },
    ],
    sourceLabel: "U.S. Marine Corps — Ranks (marines.mil)",
    sourceUrl: "https://www.marines.mil/Ranks",
  },
  {
    branch: "Army",
    howToRead:
      "Watch E-4 — it holds two ranks with the same pay but different jobs: a Specialist is a technical expert who is not an NCO, while a Corporal is a junior NCO. At E-8 and E-9, the \u201cFirst Sergeant / Command Sergeant Major\u201d titles are the command-track versions of Master Sergeant / Sergeant Major.",
    enlisted: [
      { grade: "E-1", title: "Private", abbr: "PV1", note: "No insignia worn. (Also written PVT as the generic abbreviation for Private.)" },
      { grade: "E-2", title: "Private", abbr: "PV2", note: "Same title as E-1; distinguished by a single chevron." },
      { grade: "E-3", title: "Private First Class", abbr: "PFC" },
      { grade: "E-4", title: "Specialist", abbr: "SPC", note: "Technical track; not an NCO. The most common E-4 rank." },
      { grade: "E-4", title: "Corporal", abbr: "CPL", note: "Junior NCO track; wears two chevrons." },
      { grade: "E-5", title: "Sergeant", abbr: "SGT" },
      { grade: "E-6", title: "Staff Sergeant", abbr: "SSG" },
      { grade: "E-7", title: "Sergeant First Class", abbr: "SFC" },
      { grade: "E-8", title: "Master Sergeant", abbr: "MSG", note: "Technical/staff track." },
      { grade: "E-8", title: "First Sergeant", abbr: "1SG", note: "Command track; senior enlisted advisor to a company-level commander." },
      { grade: "E-9", title: "Sergeant Major", abbr: "SGM", note: "Technical/staff track." },
      { grade: "E-9", title: "Command Sergeant Major", abbr: "CSM", note: "Command track; senior enlisted advisor at battalion level and above." },
      { grade: "E-9 (special)", title: "Sergeant Major of the Army", abbr: "SMA", note: "Single billet; senior enlisted Soldier and advisor to the Chief of Staff of the Army." },
    ],
    warrant: [
      { grade: "W-1", title: "Warrant Officer 1", abbr: "WO1", note: "Appointed by warrant. The Army has the largest warrant officer corps, including most Army aviators." },
      { grade: "W-2", title: "Chief Warrant Officer 2", abbr: "CW2", note: "Commissioned from W-2 up." },
      { grade: "W-3", title: "Chief Warrant Officer 3", abbr: "CW3" },
      { grade: "W-4", title: "Chief Warrant Officer 4", abbr: "CW4" },
      { grade: "W-5", title: "Chief Warrant Officer 5", abbr: "CW5", note: "Highest warrant grade; master-level technical expert." },
    ],
    officers: [
      { grade: "O-1", title: "Second Lieutenant", abbr: "2LT" },
      { grade: "O-2", title: "First Lieutenant", abbr: "1LT" },
      { grade: "O-3", title: "Captain", abbr: "CPT" },
      { grade: "O-4", title: "Major", abbr: "MAJ" },
      { grade: "O-5", title: "Lieutenant Colonel", abbr: "LTC" },
      { grade: "O-6", title: "Colonel", abbr: "COL" },
      { grade: "O-7", title: "Brigadier General", abbr: "BG" },
      { grade: "O-8", title: "Major General", abbr: "MG" },
      { grade: "O-9", title: "Lieutenant General", abbr: "LTG" },
      { grade: "O-10", title: "General", abbr: "GEN", note: "The Chief of Staff of the Army holds this grade." },
    ],
    sourceLabel: "U.S. Army — Ranks page (army.mil/ranks)",
    sourceUrl: null,
  },
  {
    branch: "Navy",
    howToRead:
      "In the Navy your job and your rank combine into one title: your rating is your job and your rate is your pay-grade title. A Boatswain's Mate who is an E-5 is a \u201cBoatswain's Mate Second Class,\u201d written BM2. Making Chief Petty Officer (E-7) is the Navy's biggest enlisted career milestone — Chiefs run the day-to-day Navy.",
    enlisted: [
      {
        grade: "E-1",
        title: "Seaman Recruit",
        abbr: "SR",
        note: "General title. E-1\u2013E-3 apprentice titles are based on the Sailor's occupational grouping (e.g., Fireman Recruit, Airman Recruit, Constructionman Recruit, Hospitalman Recruit) — the Seaman line shown here is the general one.",
      },
      { grade: "E-2", title: "Seaman Apprentice", abbr: "SA", note: "Same grouping note as E-1 (e.g., Fireman Apprentice, Airman Apprentice)." },
      { grade: "E-3", title: "Seaman", abbr: "SN", note: "Same grouping note (e.g., Fireman, Airman, Constructionman, Hospitalman)." },
      { grade: "E-4", title: "Petty Officer Third Class", abbr: "PO3", note: "First petty officer grade; full title combines rating + rate (e.g., BM3)." },
      { grade: "E-5", title: "Petty Officer Second Class", abbr: "PO2", note: "e.g., BM2." },
      { grade: "E-6", title: "Petty Officer First Class", abbr: "PO1", note: "e.g., BM1." },
      { grade: "E-7", title: "Chief Petty Officer", abbr: "CPO", note: "Entry into the Chief Petty Officer community." },
      { grade: "E-8", title: "Senior Chief Petty Officer", abbr: "SCPO" },
      {
        grade: "E-9",
        title: "Master Chief Petty Officer",
        abbr: "MCPO",
        note: "Command variants at this grade: Command Master Chief (CMDCM), Fleet Master Chief (FLTCM), and Force Master Chief (FORCM).",
      },
      { grade: "E-9 (special)", title: "Master Chief Petty Officer of the Navy", abbr: "MCPON", note: "Single billet; senior enlisted Sailor and advisor to the Chief of Naval Operations." },
    ],
    warrant: [
      {
        grade: "W-1",
        title: "Warrant Officer 1",
        abbr: "WO1",
        note: "In law for all services; in today's Navy this grade is used narrowly — it was re-established in 2019 for the Cyber Warrant Officer program. Most Navy warrants are appointed at CWO2.",
      },
      { grade: "W-2", title: "Chief Warrant Officer 2", abbr: "CWO2" },
      { grade: "W-3", title: "Chief Warrant Officer 3", abbr: "CWO3" },
      { grade: "W-4", title: "Chief Warrant Officer 4", abbr: "CWO4" },
      { grade: "W-5", title: "Chief Warrant Officer 5", abbr: "CWO5", note: "Highest warrant grade." },
    ],
    officers: [
      { grade: "O-1", title: "Ensign", abbr: "ENS" },
      { grade: "O-2", title: "Lieutenant Junior Grade", abbr: "LTJG" },
      { grade: "O-3", title: "Lieutenant", abbr: "LT" },
      { grade: "O-4", title: "Lieutenant Commander", abbr: "LCDR" },
      { grade: "O-5", title: "Commander", abbr: "CDR" },
      { grade: "O-6", title: "Captain", abbr: "CAPT" },
      { grade: "O-7", title: "Rear Admiral (Lower Half)", abbr: "RDML" },
      { grade: "O-8", title: "Rear Admiral (Upper Half)", abbr: "RADM" },
      { grade: "O-9", title: "Vice Admiral", abbr: "VADM" },
      { grade: "O-10", title: "Admiral", abbr: "ADM", note: "The Chief of Naval Operations holds this grade." },
    ],
    sourceLabel: "U.S. Department of Defense — U.S. Military Rank Insignia (naval grades)",
    sourceUrl: "https://www.Defense.Gov/Our-Story/Insignias/Officers/",
  },
  {
    branch: "Coast Guard",
    howToRead:
      "The Coast Guard mirrors the Navy: your rating is your job and your rate is your pay-grade title, and from E-4 the two combine into one title (a Boatswain's Mate at E-5 is a Boatswain's Mate Second Class, BM2). Coast Guard warrant officers run W-2 to W-4 only — there is no W-1 or W-5.",
    enlisted: [
      {
        grade: "E-1",
        title: "Seaman Recruit",
        abbr: "SR",
        note: "General title. E-1\u2013E-3 apprentice titles are based on the member's occupational grouping (e.g., Fireman Recruit, Airman Recruit) — the Seaman line shown here is the general one.",
      },
      { grade: "E-2", title: "Seaman Apprentice", abbr: "SA", note: "Same grouping note as E-1 (e.g., Fireman Apprentice, Airman Apprentice)." },
      { grade: "E-3", title: "Seaman", abbr: "SN", note: "Same grouping note (e.g., Fireman, Airman)." },
      { grade: "E-4", title: "Petty Officer Third Class", abbr: "PO3", note: "First petty officer grade; full title combines rating + rate (e.g., BM3)." },
      { grade: "E-5", title: "Petty Officer Second Class", abbr: "PO2", note: "e.g., BM2." },
      { grade: "E-6", title: "Petty Officer First Class", abbr: "PO1", note: "e.g., BM1." },
      { grade: "E-7", title: "Chief Petty Officer", abbr: "CPO", note: "Entry into the Chief Petty Officer community." },
      { grade: "E-8", title: "Senior Chief Petty Officer", abbr: "SCPO" },
      {
        grade: "E-9",
        title: "Master Chief Petty Officer",
        abbr: "MCPO",
        note: "Command variant at this grade: Command Master Chief Petty Officer (CMC).",
      },
      { grade: "E-9 (special)", title: "Master Chief Petty Officer of the Coast Guard", abbr: "MCPOCG", note: "Single billet; senior enlisted Coast Guardsman and advisor to the Commandant of the Coast Guard." },
    ],
    warrant: [
      { grade: "W-2", title: "Chief Warrant Officer 2", abbr: "CWO2", note: "Coast Guard warrants start at W-2 — there is no W-1 in the Coast Guard." },
      { grade: "W-3", title: "Chief Warrant Officer 3", abbr: "CWO3" },
      { grade: "W-4", title: "Chief Warrant Officer 4", abbr: "CWO4", note: "Highest Coast Guard warrant grade — there is no W-5 in the Coast Guard." },
    ],
    officers: [
      { grade: "O-1", title: "Ensign", abbr: "ENS" },
      { grade: "O-2", title: "Lieutenant Junior Grade", abbr: "LTJG" },
      { grade: "O-3", title: "Lieutenant", abbr: "LT" },
      { grade: "O-4", title: "Lieutenant Commander", abbr: "LCDR" },
      { grade: "O-5", title: "Commander", abbr: "CDR" },
      { grade: "O-6", title: "Captain", abbr: "CAPT" },
      { grade: "O-7", title: "Rear Admiral (Lower Half)", abbr: "RDML" },
      { grade: "O-8", title: "Rear Admiral (Upper Half)", abbr: "RADM" },
      { grade: "O-9", title: "Vice Admiral", abbr: "VADM" },
      { grade: "O-10", title: "Admiral", abbr: "ADM", note: "The Commandant of the Coast Guard holds this grade." },
    ],
    sourceLabel: "U.S. Coast Guard — Sea Legs / Workforce (dcms.uscg.mil)",
    sourceUrl:
      "https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Sea-Legs/Workforce/",
  },
  {
    branch: "Air Force",
    howToRead:
      "Air Force enlisted split into three tiers: Airmen (E-1\u2013E-4), NCOs (E-5\u2013E-6), and Senior NCOs (E-7\u2013E-9). First Sergeant is a special-duty assignment held by E-7s through E-9s — marked by a diamond on the insignia — not a separate pay grade. The Air Force brought warrant officers back in 2024, starting in cyber and IT fields.",
    enlisted: [
      { grade: "E-1", title: "Airman Basic", abbr: "AB", note: "No insignia worn." },
      { grade: "E-2", title: "Airman", abbr: "Amn" },
      { grade: "E-3", title: "Airman First Class", abbr: "A1C" },
      { grade: "E-4", title: "Senior Airman", abbr: "SrA", note: "Last junior-enlisted rank before NCO status." },
      { grade: "E-5", title: "Staff Sergeant", abbr: "SSgt", note: "First NCO rank." },
      { grade: "E-6", title: "Technical Sergeant", abbr: "TSgt" },
      { grade: "E-7", title: "Master Sergeant", abbr: "MSgt", note: "First Senior NCO rank. First Sergeant special-duty variant at this grade." },
      { grade: "E-8", title: "Senior Master Sergeant", abbr: "SMSgt", note: "First Sergeant special-duty variant at this grade." },
      { grade: "E-9", title: "Chief Master Sergeant", abbr: "CMSgt", note: "First Sergeant special-duty variant at this grade. Command variant at this grade: Command Chief Master Sergeant (CCM)." },
      { grade: "E-9 (special)", title: "Chief Master Sergeant of the Air Force", abbr: "CMSAF", note: "Single billet; senior enlisted Airman and advisor to the Chief of Staff of the Air Force." },
    ],
    warrant: [
      { grade: "W-1", title: "Warrant Officer 1", abbr: "WO1", note: "Warrant officers were reintroduced in 2024 after 45 years without them; the first class graduated in December 2024. Initially in cyber and IT fields." },
      { grade: "W-2", title: "Chief Warrant Officer 2", abbr: "CW2" },
      { grade: "W-3", title: "Chief Warrant Officer 3", abbr: "CW3" },
      { grade: "W-4", title: "Chief Warrant Officer 4", abbr: "CW4" },
      { grade: "W-5", title: "Chief Warrant Officer 5", abbr: "CW5", note: "Highest warrant grade." },
    ],
    officers: [
      { grade: "O-1", title: "Second Lieutenant", abbr: "2d Lt" },
      { grade: "O-2", title: "First Lieutenant", abbr: "1st Lt" },
      { grade: "O-3", title: "Captain", abbr: "Capt" },
      { grade: "O-4", title: "Major", abbr: "Maj" },
      { grade: "O-5", title: "Lieutenant Colonel", abbr: "Lt Col" },
      { grade: "O-6", title: "Colonel", abbr: "Col" },
      { grade: "O-7", title: "Brigadier General", abbr: "Brig Gen" },
      { grade: "O-8", title: "Major General", abbr: "Maj Gen" },
      { grade: "O-9", title: "Lieutenant General", abbr: "Lt Gen" },
      { grade: "O-10", title: "General", abbr: "Gen", note: "The Chief of Staff of the Air Force holds this grade." },
    ],
    sourceLabel: "U.S. Department of Defense — U.S. Military Rank Insignia (Air Force grades)",
    sourceUrl: "https://www.Defense.Gov/Our-Story/Insignias/Officers/",
  },
  {
    branch: "Space Force",
    howToRead:
      "Space Force enlisted are Guardians, and the junior grades work differently: E-1 through E-4 are Specialist 1 through Specialist 4 — there are no privates or airmen. Sergeant at E-5 is the first NCO rank. The Space Force has no warrant officers — only enlisted and commissioned grades.",
    enlisted: [
      { grade: "E-1", title: "Specialist 1", abbr: "Spc1", note: "Entry-level Guardian rank." },
      { grade: "E-2", title: "Specialist 2", abbr: "Spc2" },
      { grade: "E-3", title: "Specialist 3", abbr: "Spc3" },
      { grade: "E-4", title: "Specialist 4", abbr: "Spc4", note: "Last junior-enlisted rank before NCO status." },
      { grade: "E-5", title: "Sergeant", abbr: "Sgt", note: "First NCO rank — note the title is Sergeant, not Staff Sergeant." },
      { grade: "E-6", title: "Technical Sergeant", abbr: "TSgt" },
      { grade: "E-7", title: "Master Sergeant", abbr: "MSgt", note: "First Senior NCO rank." },
      { grade: "E-8", title: "Senior Master Sergeant", abbr: "SMSgt" },
      { grade: "E-9", title: "Chief Master Sergeant", abbr: "CMSgt" },
      { grade: "E-9 (special)", title: "Chief Master Sergeant of the Space Force", abbr: "CMSSF", note: "Single billet; senior enlisted Guardian and advisor to the Chief of Space Operations." },
    ],
    warrant: null,
    warrantNote: "No warrant officers — the Space Force has only enlisted and commissioned officer grades.",
    officers: [
      { grade: "O-1", title: "Second Lieutenant", abbr: "2nd Lt" },
      { grade: "O-2", title: "First Lieutenant", abbr: "1st Lt" },
      { grade: "O-3", title: "Captain", abbr: "Capt" },
      { grade: "O-4", title: "Major", abbr: "Maj" },
      { grade: "O-5", title: "Lieutenant Colonel", abbr: "Lt Col" },
      { grade: "O-6", title: "Colonel", abbr: "Col" },
      { grade: "O-7", title: "Brigadier General", abbr: "Brig Gen" },
      { grade: "O-8", title: "Major General", abbr: "Maj Gen" },
      { grade: "O-9", title: "Lieutenant General", abbr: "Lt Gen" },
      { grade: "O-10", title: "General", abbr: "Gen", note: "The Chief of Space Operations holds this grade." },
    ],
    sourceLabel: "U.S. Department of Defense — U.S. Military Rank Insignia (Space Force grades)",
    sourceUrl: "https://www.Defense.Gov/Our-Story/Insignias/Officers/",
  },
];
