// Lingo — static reference data transcribed from the researched lingo
// pack (~/workspace/military-app/lingo/lingo.md, researched Nov 9,
// 2026). A plain-English military dictionary for the people military
// paperwork usually leaves behind: spouses, parents, recruits, and
// brand-new members.
//
// PART 1 — the phonetic alphabet is reproduced from the FAA
// Aeronautical Information Manual (AIM), §4-2-7, Table 4-2-2, which
// publishes the ICAO alphabet for U.S. use, cross-checked against
// NATO HQ's own published chart. Spellings are exactly as the source
// prints them: Alfa (with an f) and Juliett (double t) are deliberate.
// The FAA table prints "Xray" as one word; ICAO's own documents print
// "X-ray" — that variance is flagged in place, as the pack flags it.
//
// PART 2 — 172 dictionary entries in the pack's 7 groups. Expansions
// and core meanings are anchored to official glossaries and program
// pages (the DoD Dictionary, DFAS, VA, TRICARE, Military OneSource,
// DTMO/JTR, service publications); the plain-English wording follows
// the pack. Each group carries its anchor sources, which the cards'
// trust stamps name.
//
// FIDELITY RULES baked into this data (the pack's flags register,
// preserved — do not "fix" these):
// - HUA's expansion ("Heard, Understood, Acknowledged") is flagged as
//   an UNCONFIRMED backronym — folklore, not fact.
// - FIGMO prints the widely used cleaned-up rendering ("Forget It —
//   Got My Orders") with its borderline flag; the original expansion
//   is profane and is never printed.
// - TRICARE is NOT an acronym — the entry says so; never expand it.
// - SNCO and Top print their branch splits; they must not be merged.
// - EFMP's entry carries the Coast Guard Special Needs Program note.
// - ROE is defined at term level only — what the words mean, nothing
//   more. This section is a dictionary, nothing more.
// - EXCLUDED by the pack's hard rules — the terms on the pack's
//   exclusions register never appear anywhere in this section, not
//   even as cleaned-up substitutes. The register itself is recorded
//   in DATA-PLAN.md, not in this file, so the words stay out of the
//   shipped bundle entirely.

export type PhoneticRow = {
  symbol: string;
  word: string;
  pronunciation: string;
  /** A pack ⚠ variance note printed in place on this row. */
  flag?: string;
};

export const PHONETIC_SOURCE_NOTE =
  "The International Radiotelephony Spelling Alphabet, developed by the International Civil Aviation Organization (ICAO) and adopted by NATO and every U.S. service. Words and pronunciations are reproduced from the FAA Aeronautical Information Manual (AIM), §4-2-7, Table 4-2-2, cross-checked against NATO HQ's own published chart.";

export const PHONETIC_WHY =
  "Letters like B/D and M/N sound alike over a crackly radio. Each letter gets a whole word that cannot be mistaken for any other, so names, grid references, and call signs arrive exactly as sent. Families hear it constantly — it is how a service member spells a name on the phone with a bank, a school, or a moving company. Alfa (with an f, not “Alpha”) and Juliett (with a double t) are spelled as the source prints them on purpose: the spellings were chosen so speakers of other languages pronounce the words correctly.";

export const PHONETIC_LINKS: { label: string; url: string }[] = [
  {
    label: "FAA Aeronautical Information Manual, §4-2-7 — Table 4-2-2",
    url: "https://faraim.org/faa/aim/chapter-4/section-4-2-7.pdf",
  },
  {
    label: "NATO — phonetic alphabet, codes & signals chart",
    url: "https://www.nato.int/content/dam/nato/webready/news/2010-2019/2017/12/21/20180111_nato-alphabet-sign-signal.pdf",
  },
];

/** Trust-stamp source label for the alphabet tables. */
export const PHONETIC_SOURCE_LABEL = "FAA AIM §4-2-7, Table 4-2-2 · NATO chart";

export const PHONETIC_LETTERS: PhoneticRow[] = [
  { symbol: "A", word: "Alfa", pronunciation: "AL-FAH" },
  { symbol: "B", word: "Bravo", pronunciation: "BRAH-VOH" },
  { symbol: "C", word: "Charlie", pronunciation: "CHAR-LEE (also printed SHAR-LEE)" },
  { symbol: "D", word: "Delta", pronunciation: "DELL-TAH" },
  { symbol: "E", word: "Echo", pronunciation: "ECK-OH" },
  { symbol: "F", word: "Foxtrot", pronunciation: "FOKS-TROT" },
  { symbol: "G", word: "Golf", pronunciation: "GOLF" },
  { symbol: "H", word: "Hotel", pronunciation: "HOH-TEL" },
  { symbol: "I", word: "India", pronunciation: "IN-DEE-AH" },
  { symbol: "J", word: "Juliett", pronunciation: "JEW-LEE-ETT" },
  { symbol: "K", word: "Kilo", pronunciation: "KEY-LOH" },
  { symbol: "L", word: "Lima", pronunciation: "LEE-MAH" },
  { symbol: "M", word: "Mike", pronunciation: "MIKE" },
  { symbol: "N", word: "November", pronunciation: "NO-VEM-BER" },
  { symbol: "O", word: "Oscar", pronunciation: "OSS-CAH" },
  { symbol: "P", word: "Papa", pronunciation: "PAH-PAH" },
  { symbol: "Q", word: "Quebec", pronunciation: "KEH-BECK" },
  { symbol: "R", word: "Romeo", pronunciation: "ROW-ME-OH" },
  { symbol: "S", word: "Sierra", pronunciation: "SEE-AIR-RAH" },
  { symbol: "T", word: "Tango", pronunciation: "TANG-GO" },
  { symbol: "U", word: "Uniform", pronunciation: "YOU-NEE-FORM (also printed OO-NEE-FORM)" },
  { symbol: "V", word: "Victor", pronunciation: "VIK-TAH" },
  { symbol: "W", word: "Whiskey", pronunciation: "WISS-KEY" },
  {
    symbol: "X",
    word: "Xray",
    pronunciation: "ECKS-RAY",
    flag: "Spelling varies by source: the FAA AIM table prints “Xray” as one word; ICAO's own documents print “X-ray.” Same word, same pronunciation — this table follows the cited source (FAA).",
  },
  { symbol: "Y", word: "Yankee", pronunciation: "YANG-KEY" },
  { symbol: "Z", word: "Zulu", pronunciation: "ZOO-LOO" },
];

export const PHONETIC_DIGITS_NOTE =
  "The FAA AIM table also publishes standard pronunciations for the digits, so a “3” is never misheard. Four of them deliberately sound different from everyday speech. Numbers on the radio are spoken digit by digit — a grid or frequency is never read as a whole number — which is why “niner” exists: “nine” and the German “nein” (no), and plain mishearing, caused real confusion.";

export const PHONETIC_DIGITS: PhoneticRow[] = [
  { symbol: "0", word: "Zero", pronunciation: "ZEE-RO" },
  { symbol: "1", word: "One", pronunciation: "WUN" },
  { symbol: "2", word: "Two", pronunciation: "TOO" },
  { symbol: "3", word: "Three", pronunciation: "TREE" },
  { symbol: "4", word: "Four", pronunciation: "FOW-ER" },
  { symbol: "5", word: "Five", pronunciation: "FIFE" },
  { symbol: "6", word: "Six", pronunciation: "SIX" },
  { symbol: "7", word: "Seven", pronunciation: "SEV-EN" },
  { symbol: "8", word: "Eight", pronunciation: "AIT" },
  { symbol: "9", word: "Nine", pronunciation: "NIN-ER" },
];

/* ------------------------------ Dictionary ------------------------------ */

export type LingoEntry = {
  id: string;
  /** The word as the pack prints it. */
  term: string;
  /** The pack's expansion, when the term has one. */
  expansion?: string;
  /** The pack's parenthetical note — "(not an acronym)", a branch tag
   * like "(Navy term)", a pronunciation, or an alternate form. */
  note?: string;
  /** The pack's plain-English definition, verbatim in substance. */
  definition: string;
  /** A pack ⚠ flag, rendered in the amber flag box. */
  flag?: string;
  /** True for every Group 7 entry — the card shows a SLANG badge. */
  slang?: boolean;
};

export type LingoGroup = {
  title: string;
  /** The pack's group framing note, rendered under the group title. */
  note: string;
  /** Trust-stamp source: the group's anchor sources, as the pack names them. */
  source: string;
  links: { label: string; url: string }[];
  entries: LingoEntry[];
};

export const LINGO_GROUPS: LingoGroup[] = [
  {
    title: "Pay & Paperwork",
    note: "Anchor sources: Defense Finance and Accounting Service (DFAS) military pay pages, the DoD Financial Management Regulation via DFAS, the Thrift Savings Plan, and VA insurance pages. “Allowance” money below is generally not taxed as income — the entries say so where that matters to a family budget.",
    source: "DFAS · DoD Financial Management Regulation · TSP · VA",
    links: [
      { label: "DFAS — military pay tables", url: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/" },
      { label: "Thrift Savings Plan (TSP)", url: "https://www.tsp.gov" },
      { label: "VA — life insurance", url: "https://www.va.gov" },
    ],
    entries: [
      { id: "base-pay", term: "Base Pay", note: "not an acronym", definition: "The member's actual salary, set by rank and years of service from the published pay tables. It is the taxable core of military pay; the allowances below are added on top of it." },
      { id: "bah", term: "BAH", expansion: "Basic Allowance for Housing", definition: "Monthly money to cover housing when the member lives off base (or in privatized on-base housing). The amount depends on duty-station ZIP code, rank, and whether the member has dependents. Generally tax-free." },
      { id: "bas", term: "BAS", expansion: "Basic Allowance for Subsistence", definition: "A flat monthly food allowance — “subsistence” means food. Officers and enlisted get different set rates; enlisted members who eat in the dining facility may see much of it offset by a meal deduction." },
      { id: "oha", term: "OHA", expansion: "Overseas Housing Allowance", definition: "The overseas cousin of BAH: rent money for members stationed outside the U.S., based on actual rent up to a local cap, paid in the local pattern rather than the BAH formula." },
      { id: "cola", term: "COLA", expansion: "Cost-of-Living Adjustment", definition: "Extra pay that softens a more expensive assignment. Overseas COLA rises and falls with local prices and exchange rates; a smaller CONUS COLA exists for a few very high-cost U.S. areas. (Also the name of the annual percentage raise applied to retired pay and some benefits.)" },
      { id: "fsa", term: "FSA", expansion: "Family Separation Allowance", definition: "Extra monthly pay that kicks in when orders separate a member from their dependents for more than 30 continuous days — deployments and unaccompanied tours are the usual triggers." },
      { id: "hfp-idp", term: "Hostile Fire Pay / Imminent Danger Pay (HFP/IDP)", definition: "A set monthly amount paid for serving in a designated danger area or being exposed to hostile fire. Families see the two names used almost interchangeably; the LES usually shows IDP." },
      { id: "per-diem", term: "Per Diem", note: "Latin for “per day”", definition: "The daily allowance that reimburses lodging, meals, and incidental costs while a member is traveling on temporary duty away from their home station." },
      { id: "les", term: "LES", expansion: "Leave and Earnings Statement", definition: "The military pay stub. A monthly statement — read in myPay — showing everything earned (base pay, BAH, BAS, special pays), everything taken out (taxes, SGLI, TSP), and the member's leave balance. If a family learns to read one document, it is this one." },
      { id: "mypay", term: "myPay", note: "not an acronym", definition: "DFAS's self-service website where members view their LES, tax forms, and pay elections. Spouses hear about it constantly; the login belongs to the member." },
      { id: "dfas", term: "DFAS", expansion: "Defense Finance and Accounting Service", definition: "The agency that runs military payroll. If pay is wrong, DFAS is the name on the system that fixes it — usually reached through the member's local finance office first." },
      { id: "allotment", term: "Allotment", definition: "A slice of pay the member directs to be sent automatically somewhere else — a spouse's account during deployment, a savings account, a bill. It comes out before the rest of the pay lands." },
      { id: "use-or-lose", term: "Use-or-Lose (leave)", definition: "Vacation days above the carry-over cap that evaporate at the end of the fiscal year (September 30) if not taken. It is why units push members to take leave in September." },
      { id: "pebd", term: "PEBD", expansion: "Pay Entry Base Date", definition: "The date the pay system counts as the start of the member's service for pay purposes. It sets where they sit on the pay table's “years of service” columns and does not always match the day they raised their hand." },
      { id: "tsp", term: "TSP", expansion: "Thrift Savings Plan", definition: "The federal government's retirement savings plan — the military's version of a 401(k). Members contribute from pay; members under BRS (below) get government matching contributions." },
      { id: "brs", term: "BRS", expansion: "Blended Retirement System", definition: "The retirement system covering members who joined from 2018 onward (and some who opted in). It blends a smaller pension after 20 years with TSP matching during the career, so members who leave before 20 still keep something." },
      { id: "high-36", term: "High-36", note: "not an acronym", definition: "Shorthand for how the pension is calculated: the average of the member's highest 36 months of base pay. It is the number the whole retirement math hangs on." },
      { id: "sgli", term: "SGLI", expansion: "Servicemembers' Group Life Insurance", definition: "Low-cost group life insurance for the member, up to a set maximum, deducted automatically from pay unless the member declines or reduces it in writing. Families should know it exists before they ever need it." },
      { id: "fsgli", term: "FSGLI", expansion: "Family Servicemembers' Group Life Insurance", definition: "The companion coverage for spouses and children, tied to the member's SGLI. A spouse's coverage amount is capped at the member's own coverage level." },
      { id: "dd214", term: "DD214", expansion: "Certificate of Release or Discharge from Active Duty", definition: "The single most important document a veteran owns. Issued at separation, it proves service and the character of discharge, and it is the key that unlocks VA benefits, many jobs, and burial honors. (Formally “DD Form 214.”)" },
      { id: "deers", term: "DEERS", expansion: "Defense Enrollment Eligibility Reporting System", definition: "The master database that says who is a service member, who their family members are, and who is eligible for benefits like TRICARE and ID cards. A marriage, birth, or divorce that isn't in DEERS effectively hasn't happened as far as benefits are concerned — updating it is step one of every life event." },
      { id: "cac", term: "CAC", expansion: "Common Access Card", definition: "The member's chip-equipped military ID card. It is photo ID, building key, and computer login token in one; losing it is a same-day problem, reported immediately." },
      { id: "sponsor", term: "Sponsor", note: "not an acronym", definition: "In paperwork, “the sponsor” is the service member through whom family members get their benefits and ID cards. (In PCS paperwork the same word also means the person assigned to help a newcomer settle into a new unit — context tells you which.)" },
      { id: "sea-pay", term: "Sea Pay", note: "officially Career Sea Pay", definition: "Extra pay for time assigned to a ship, paid to sailors and embarked Marines to recognize sea duty. It grows with cumulative years at sea." },
      { id: "eas-ets-eaos", term: "EAS / ETS / EAOS", definition: "Three branch names for the finish line of a contract. EAS, End of Active Service (Marine Corps); ETS, Expiration of Term of Service (Army); EAOS, End of Active Obligated Service (Navy). Orders, countdowns, and transition planning all key off this date." },
    ],
  },
  {
    title: "People & Roles",
    note: "Anchor sources: the DoD Dictionary of Military and Associated Terms (Joint Staff, via JEL+) and service organization and ranks pages on army.mil, navy.mil, marines.com, af.mil, spaceforce.com, and uscg.mil. These are job titles and terms of address — the full rank charts live in Battle Book's Rank Charts section, not here.",
    source: "DoD Dictionary (Joint Staff) · service organization pages",
    links: [
      { label: "DoD Dictionary of Military and Associated Terms (JEL+)", url: "https://jdeis.js.mil/jdeis/" },
    ],
    entries: [
      { id: "co", term: "CO", expansion: "Commanding Officer", definition: "The person in command of a unit, ship, or squadron — the one ultimately responsible for everything it does or fails to do. “The CO” is the boss your member means, whatever the unit's size." },
      { id: "xo", term: "XO", expansion: "Executive Officer", definition: "The second-in-command, the CO's right hand, who runs the unit's daily machinery so the CO can command. On ships, XO is also the traditional focus of crew complaints — affectionately and otherwise." },
      { id: "nco", term: "NCO", expansion: "Noncommissioned Officer", definition: "The enlisted leaders — corporals and sergeants (and petty officers in the sea services) who supervise the day-to-day work. Called the “backbone of the service” in every branch's own words, and it is not just a slogan." },
      { id: "snco", term: "SNCO", expansion: "Staff Noncommissioned Officer / Senior Noncommissioned Officer", definition: "One abbreviation, two official flavors: in the Marine Corps it means Staff Noncommissioned Officer, the senior enlisted grades (staff sergeant through sergeant major); in Army use it generally means Senior Noncommissioned Officer, the senior sergeant grades. Either way: the experienced enlisted leadership tier.", flag: "Expands differently by service — USMC: Staff Noncommissioned Officer; Army general usage: Senior Noncommissioned Officer. Both are printed here; do not merge them." },
      { id: "first-sergeant", term: "First Sergeant", note: "not an acronym", definition: "The senior enlisted advisor in a company-sized unit, responsible for the welfare, discipline, and readiness of its people — and the person families are most likely to hear from in a crisis. In the Air Force this role is a special duty marked by a diamond in the rank insignia." },
      { id: "first-shirt", term: "First Shirt", note: "informal nickname", definition: "Another name for the first sergeant, most common in the Air Force — shortened to just “the Shirt.” If your member says the Shirt called, it is the first sergeant, and it matters." },
      { id: "top", term: "Top", note: "informal nickname", definition: "Branch-dependent: in the Army it's the first sergeant. In the Marine Corps, “Top” traditionally belongs to the Master Sergeant (the technical-track E-8), while a Marine First Sergeant is addressed as “First Sergeant.” Same word, different chair — the branch tells you which.", flag: "Branch split — Army: the first sergeant. USMC: traditionally the Master Sergeant. Printed split, never merged." },
      { id: "chief", term: "Chief", note: "informal address / title", definition: "In the Navy and Coast Guard, Chief is a rank family — Chief Petty Officers (E-7 to E-9) are simply “Chief,” and it is among the most respected titles in the sea services. In the Army, senior warrant officers are also addressed as “Chief.” Context and branch decide." },
      { id: "skipper", term: "Skipper", note: "informal nickname", definition: "The commanding officer of a ship or an aviation squadron, Navy and Marine Corps usage especially. Affectionate, respectful, and never used by a stranger trying to sound familiar." },
      { id: "gunny", term: "Gunny", note: "informal nickname", definition: "A Marine Corps Gunnery Sergeant (E-7). One of the most iconic nicknames in the Corps; a Gunny is typically the hard-experienced senior enlisted leader of a company or platoon." },
      { id: "sergeant-major", term: "Sergeant Major", note: "not an acronym", definition: "The senior enlisted advisor at battalion level and above — Sergeant Major (SgtMaj) in the Marine Corps, Command Sergeant Major (CSM) in the Army. They advise the commander and carry the standards for the whole enlisted force of the unit. (Both sit at E-9; the separate rank charts carry the details.)" },
      { id: "oic", term: "OIC", expansion: "Officer in Charge", definition: "The officer responsible for a watch, a detachment, a range, or a working party — command authority for that specific thing, without commanding a whole unit." },
      { id: "ncoic", term: "NCOIC", expansion: "Noncommissioned Officer in Charge", definition: "The enlisted counterpart to the OIC: the senior enlisted person running a shop, section, or detail day to day." },
      { id: "duty-officer", term: "Duty Officer", note: "also OOD, CDO", definition: "The officer standing the unit's duty watch for the day or night — the commander's representative after hours and the first phone call for emergencies. “OOD” expands two ways by service: Officer of the Deck (Navy, at sea/in port watch) and Officer of the Day (Army). The duty roster rotates, which is why “having duty” ruins random weekends." },
      { id: "commander", term: "Commander", definition: "A word with two jobs: it is a specific rank in the Navy and Coast Guard (O-5), and a job title in every service (“the battalion commander”) regardless of the holder's rank. When a sailor says “Commander,” they usually mean the rank; when a soldier does, they usually mean the boss.", flag: "Two jobs, one word — a Navy/Coast Guard rank (O-5) and a job title in every service. Context tells you which." },
      { id: "guardian", term: "Guardian", note: "not an acronym", definition: "What the Space Force calls its members (as the Army has Soldiers and the Navy has Sailors). If a headline says “Guardians” at a base, it means Space Force personnel." },
      { id: "coastie", term: "Coastie", note: "informal nickname", definition: "A member of the Coast Guard. Used inside and outside the service, generally friendly." },
      { id: "battle-buddy-term", term: "Battle Buddy", note: "Army term, now everywhere", definition: "A designated peer who looks out for you — training partner, safety check, and first line of support; in basic training you do nothing without your battle buddy. The idea behind Battle Book's own Battle Buddy feature." },
      { id: "shipmate", term: "Shipmate", note: "Navy term", definition: "What sailors call each other — fellow sailor, crewmate, and (depending on tone) a pointed way to address someone who messed up. “Hey, shipmate” from a Chief is rarely good news." },
      { id: "wingman", term: "Wingman", note: "Air Force term", definition: "Originally the pilot flying beside you; now the Air Force's word for the peer who watches your back on and off duty — the Air Force's version of battle buddy." },
      { id: "dependent", term: "Dependent", note: "not an acronym", definition: "A family member who relies on the sponsor for benefits — spouse, children, and in some cases parents. “Dependents” on orders and in DEERS decides BAH rates, accompanied moves, and ID cards; it is an administrative word, not a judgment." },
      { id: "rating", term: "Rating", note: "Navy / Coast Guard term", definition: "A sailor's job specialty — the Navy's version of an MOS. A sailor's rating is often fused with their rank in their title (for example, a Boatswain's Mate who is a Second Class Petty Officer is “BM2”)." },
      { id: "mos-term", term: "MOS", expansion: "Military Occupational Specialty", definition: "The job code — the Army and Marine Corps name for a member's trained occupation (an infantryman, a mechanic, an intelligence analyst each has one). Families hear it whenever anyone asks “what's his MOS?”" },
      { id: "afsc", term: "AFSC", expansion: "Air Force Specialty Code", definition: "The Air Force (and Space Force) version of an MOS — the code for a member's job specialty." },
      { id: "billet", term: "Billet", note: "not an acronym", definition: "A specific job slot in a unit's organization — one position that one person fills. “He's in a first sergeant billet” means he holds that slot, whatever his rank. In Navy usage a billet assignment is also simply your assigned job and station." },
    ],
  },
  {
    title: "Daily Life",
    note: "Anchor sources: service customs-and-traditions and new-member pages on navy.mil, marines.com, army.mil, and af.mil, and Military OneSource living-on-installation material. Many words here are borrowed from shipboard life — the Navy and Marine Corps kept the sea's vocabulary (deck, head, rack, galley) and the other services adopted pieces of it.",
    source: "Service customs & new-member pages · Military OneSource",
    links: [
      { label: "Military OneSource", url: "https://www.militaryonesource.mil" },
    ],
    entries: [
      { id: "chow", term: "Chow", note: "informal", definition: "Food, or a meal. “Chow time” is mealtime; almost every other food word in this group hangs off this one." },
      { id: "chow-hall", term: "Chow Hall / Dining Facility (DFAC)", definition: "The on-base cafeteria where members eat. One building, several names by branch: DFAC (pronounced “dee-fak,” Army/Air Force), chow hall (Marine Corps), galley (Navy). Enlisted members living in the barracks typically eat there on a meal card." },
      { id: "mre", term: "MRE", expansion: "Meal, Ready-to-Eat", definition: "The complete field meal in a sealed pouch — entrée, sides, and accessories, with a flameless heater. Members trade the contents like currency in the field, and every veteran has strong opinions about which menu number is best." },
      { id: "rack", term: "Rack", note: "Navy / Marine Corps", definition: "A bed or bunk. “Hit the rack” means go to sleep. (Army barracks rooms have bunks; the word followed the Marines everywhere.)" },
      { id: "head", term: "Head", note: "Navy / Marine Corps", definition: "The bathroom. It comes from sailing ships, where the toilet was at the head (front) of the ship. On a Navy base, asking for “the head” marks you as fluent; asking for the bathroom still works." },
      { id: "deck", term: "Deck", note: "Navy / Marine Corps", definition: "The floor — indoors or out. “On deck” can also simply mean present, on duty, or next up." },
      { id: "bulkhead", term: "Bulkhead", note: "Navy / Marine Corps", definition: "A wall. A door in one is a hatch; the ceiling is the overhead." },
      { id: "ladder", term: "Ladder", note: "Navy / Marine Corps", definition: "Stairs or a ladder — on ship vocabulary, you go up and down ladders, not stairs." },
      { id: "overhead", term: "Overhead", note: "Navy / Marine Corps", definition: "The ceiling. (“Mind the overhead” is shipboard for watch your head.)" },
      { id: "scuttlebutt", term: "Scuttlebutt", note: "Navy / Marine Corps", definition: "Rumors and gossip — the service's unofficial news network. The word originally named the ship's drinking-water cask (later a fountain), where sailors gathered and talked; the talk took the name of the place." },
      { id: "gedunk", term: "Gedunk", note: "Navy, pronounced “gee-dunk,” hard g", definition: "The snack bar — originally the ship's small store selling ice cream and candy; by extension, the snacks themselves. A “gedunk medal” is joking sailor slang for a ribbon awarded for non-combat service — the joke is that it was earned near the gedunk." },
      { id: "field-day", term: "Field Day", note: "Navy / Marine Corps", definition: "A scheduled top-to-bottom cleaning of the barracks or workspace — traditionally Thursday evenings before a Friday inspection in the Corps. It does not mean a day of fun outside; it means scrubbing." },
      { id: "police-call", term: "Police Call", note: "not law enforcement", definition: "A line of troops walking shoulder to shoulder across an area picking up every piece of trash. “Police” here is the old military sense of tidying and keeping order — the same root as “police your brass” (pick up your spent shell casings) on a range." },
      { id: "muster", term: "Muster", definition: "Roll call: the formation or check-in where everyone is accounted for by name. Also used as a verb — “muster at 0600” means be there, in formation, ready to be counted." },
      { id: "colors", term: "Colors", definition: "The ceremony of raising the flag in the morning (morning colors, 0800 on Navy installations) and lowering it at sunset (evening colors). Everyone outdoors stops, faces the flag, and renders honors; on bases, traffic stops too. New families: if everyone suddenly freezes at 5 p.m., it's colors." },
      { id: "reveille", term: "Reveille", note: "pronounced “REV-uh-lee”", definition: "The morning bugle call that starts the official day — the wake-up call. Army and Air Force installations play it with the raising of the flag." },
      { id: "retreat", term: "Retreat", note: "Army / Air Force", definition: "The late-afternoon ceremony — the bugle call and lowering of the flag at the end of the duty day, paired with the National Anthem on most installations. It is the land services' counterpart to evening colors." },
      { id: "taps", term: "Taps", definition: "The 24-note bugle call played at lights-out, at dusk ceremonies, and at military funerals and memorials. It is the most recognized call in American military life, and there is no official lyric — the words people know are tradition, not regulation." },
      { id: "liberty", term: "Liberty", note: "Navy / Marine Corps", definition: "Authorized time off — the member is free to leave and be out of uniform until liberty expires. Special liberty is extra time granted as a reward or for a holiday weekend. Missing the end of liberty is a punishable absence." },
      { id: "leave", term: "Leave", definition: "Vacation days, in civilian terms — except leave is charged by the calendar day, accrues at 2.5 days a month (30 a year), and must be approved in advance. Taking leave is how members come home for holidays and family events." },
      { id: "pass", term: "Pass", definition: "A short authorized absence that doesn't burn leave days — a weekend pass, or a pass after a duty day. Army and Air Force usage especially; the sea services usually say liberty." },
      { id: "barracks", term: "Barracks", definition: "The dormitory buildings where junior single members live on base. Also called dorms (Air Force), BEQ — Bachelor Enlisted Quarters (Navy), and “the bricks” in Marine slang. Most have a duty NCO at a front desk around the clock." },
      { id: "galley", term: "Galley", note: "Navy", definition: "The kitchen and dining space — on a ship it's where food is cooked and served; ashore, the base dining facility itself. (See chow hall.)" },
      { id: "midrats", term: "Midrats", note: "Navy, short for “midnight rations”", definition: "The meal served around midnight for watchstanders and night crews. Famous for leftovers and breakfast food, and a small mercy of shipboard life." },
      { id: "berthing", term: "Berthing", note: "Navy", definition: "The sleeping compartments on a ship — rows of racks in shared spaces, assigned by division. “Berthing” names both the place and the arrangement of who sleeps where." },
    ],
  },
  {
    title: "Orders & Moves",
    note: "Anchor sources: Defense Travel Management Office (DTMO) and the Joint Travel Regulations via travel.dod.mil, Military OneSource moving and relocation pages, and service assignment pages. Move entitlements change with the Joint Travel Regulations — the definitions here are what the words mean; Battle Book's PCS Move Center carries the current rules.",
    source: "DTMO · Joint Travel Regulations · Military OneSource",
    links: [
      { label: "Defense Travel Management Office (DTMO)", url: "https://www.travel.dod.mil" },
      { label: "Military OneSource — moving & relocation", url: "https://www.militaryonesource.mil" },
    ],
    entries: [
      { id: "orders", term: "Orders", note: "not an acronym", definition: "The official written instructions that send a member somewhere — to a school, a deployment, or a new duty station. Nothing official happens without them: no orders, no move, no reimbursement." },
      { id: "pcs", term: "PCS", expansion: "Permanent Change of Station", definition: "The big move: orders transferring a member (usually with family and household goods) from one permanent duty station to another. A military family typically PCSes every two to four years." },
      { id: "pca", term: "PCA", expansion: "Permanent Change of Assignment", definition: "A reassignment to a different unit at the same station — new job, same town, no household move. It looks like a typo for PCS on paperwork; it isn't." },
      { id: "tdy", term: "TDY", expansion: "Temporary Duty", definition: "Travel away from home station for a limited job — a school, an exercise, an inspection — after which the member comes back. Army, Air Force, and Coast Guard usage; weeks to months, and the member is reimbursed per diem." },
      { id: "tad", term: "TAD", expansion: "Temporary Additional Duty", definition: "The Navy and Marine Corps name for the same thing the other services call TDY. If your sailor or Marine says “TAD,” a soldier would say “TDY,” and both mean temporary travel away from home." },
      { id: "dla", term: "DLA", expansion: "Dislocation Allowance", definition: "A flat payment meant to offset the miscellaneous costs of a PCS move — deposits, restocking a kitchen, the hundred small expenses of landing somewhere new. Paid once per PCS (with exceptions), at a rate tied to rank and dependent status." },
      { id: "tle", term: "TLE", expansion: "Temporary Lodging Expense", definition: "Reimbursement for hotel and meal costs during a PCS within the United States — the days in a hotel while finding a house or waiting for one. Capped at a set number of days; the overseas version is TLA." },
      { id: "tla", term: "TLA", expansion: "Temporary Lodging Allowance", definition: "The overseas counterpart of TLE: lodging and meal reimbursement when arriving at or leaving an overseas assignment, tied to the local OHA area rules." },
      { id: "hhg", term: "HHG", expansion: "Household Goods", definition: "Everything the government ships for a move — furniture, boxes, the whole household — up to a weight allowance set by rank and dependent status. “The HHG shipment” is the truck (or overseas container) a family waits on at every PCS." },
      { id: "ppm", term: "PPM", expansion: "Personally Procured Move", definition: "The do-it-yourself PCS: the member rents the truck, packs and drives, and the government pays an incentive based on what the move would have cost them. Most families know it by its old name — see DITY." },
      { id: "dity", term: "DITY", note: "pronounced “ditty”; short for “do-it-yourself”", definition: "The former name of the Personally Procured Move (PPM). The program was renamed years ago, but “we're doing a DITY move” is still what everyone says." },
      { id: "accompanied-tour", term: "Accompanied Tour", definition: "An assignment — usually overseas — where the member's dependents are authorized to come along, live there, and be in DEERS-supported housing and schools. Its length is longer than the unaccompanied version of the same tour." },
      { id: "unaccompanied-tour", term: "Unaccompanied Tour", definition: "An assignment the member serves without their family — dependents stay behind (or relocate somewhere else on their own). Common in Korea and some remote or hardship locations; triggers Family Separation Allowance after 30 days." },
      { id: "command-sponsorship", term: "Command Sponsorship", definition: "The formal approval that lets dependents accompany a member overseas — without it, the family isn't authorized housing, schools, or medical support there, even if they travel. The phrase on the orders matters enormously; families read for it first." },
      { id: "rnltd", term: "RNLTD", expansion: "Report No Later Than Date", definition: "The deadline printed on orders: the last day the member may check in to the new unit. Travel days and any approved leave en route are planned backward from this date." },
      { id: "conus-oconus", term: "CONUS / OCONUS", definition: "CONUS: the contiguous United States (the 48 connected states; by most official uses it excludes Alaska and Hawaii). OCONUS: outside the contiguous United States — Alaska, Hawaii, territories, and everywhere overseas. The words appear everywhere because pay, moves, and rules differ across that line." },
      { id: "weight-allowance", term: "Weight Allowance", note: "not an acronym", definition: "The maximum pounds of household goods the government will ship for a member, set by rank and whether they have dependents. Over the limit, the member pays the difference — which is why garages get purged before every PCS." },
      { id: "pov", term: "POV", expansion: "Privately Owned Vehicle", definition: "The family car, in official language. PCS rules about shipping a POV — one vehicle, generally, and mainly for overseas moves — are a perennial family question; “POV shipment” is the car on a boat." },
      { id: "nts", term: "Non-Temporary Storage (NTS)", definition: "Long-term government storage of household goods — used when a member goes overseas unaccompanied, deploys, or can't take everything. Belongings can sit in NTS for the length of a tour." },
      { id: "dts", term: "DTS", expansion: "Defense Travel System", definition: "The website where TDY travel is booked and vouchers are filed afterward. Members curse it fluently in all six services; the voucher it produces is what gets per diem and travel costs repaid." },
    ],
  },
  {
    title: "Medical & Benefits",
    note: "Anchor sources: TRICARE, the U.S. Department of Veterans Affairs, Military OneSource, and the Defense Health Agency. Benefit details change — Battle Book's Benefits and VA Claims sections carry the current rules; this group only decodes the vocabulary.",
    source: "TRICARE · VA · Military OneSource · Defense Health Agency",
    links: [
      { label: "TRICARE", url: "https://www.tricare.mil" },
      { label: "U.S. Department of Veterans Affairs", url: "https://www.va.gov" },
      { label: "Military OneSource", url: "https://www.militaryonesource.mil" },
      { label: "Defense Health Agency", url: "https://www.health.mil" },
    ],
    entries: [
      { id: "tricare", term: "TRICARE", definition: "The name of the military's health care program: the system that covers members, families, and retirees through military hospitals and civilian networks. (It replaced CHAMPUS in the 1990s; older relatives may still say CHAMPUS, which stood for Civilian Health and Medical Program of the Uniformed Services.)", flag: "Not an acronym — don't let anyone expand TRICARE into words; official sources don't. Its predecessor CHAMPUS does expand (Civilian Health and Medical Program of the Uniformed Services)." },
      { id: "mtf", term: "MTF", expansion: "Military Treatment Facility", definition: "A military-run hospital or clinic — the on-base hospital is an MTF. Care usually starts there; TRICARE sends you into the civilian network when the MTF can't provide the service." },
      { id: "efmp", term: "EFMP", expansion: "Exceptional Family Member Program", definition: "The program that identifies family members with special medical or educational needs and makes sure assignments take those needs into account — a member generally can't be sent somewhere that can't support an enrolled family member's care.", flag: "The Coast Guard runs the equivalent as its Special Needs Program — same purpose, different name on the door." },
      { id: "pha", term: "PHA", expansion: "Periodic Health Assessment", definition: "The yearly health check-up every member must complete — questionnaires, labs, dental and vision screening — that keeps them certified as medically ready. “PHA” on a readiness report means this appointment is done or due." },
      { id: "sick-call", term: "Sick Call", note: "not an acronym", definition: "The early-morning window when members report to the clinic with an illness or injury instead of going straight to work. Showing up at sick call is the first step of almost every medical profile and quarters slip." },
      { id: "profile-term", term: "Profile", note: "informal short form", definition: "A medical duty-limitation document — properly a physical profile — that spells out what a member temporarily or permanently can't do (no running, light duty, no lifting) while they heal. “On profile” never means excused from everything; it means excused from exactly what's written." },
      { id: "lod", term: "LOD", expansion: "Line of Duty", definition: "The formal determination of whether an injury or illness happened “in the line of duty” — connected to service and not due to misconduct. An LOD finding decides benefits and can follow a Guard or Reserve member for years, which is why the paperwork matters." },
      { id: "va-term", term: "VA", expansion: "Department of Veterans Affairs", definition: "The Cabinet department that runs veterans' health care, disability compensation, education benefits (the GI Bill), and home loans. Members meet the VA at transition; most VA benefits are claimed, not automatic — see Battle Book's Claims section." },
      { id: "disability-rating", term: "Disability Rating", note: "not an acronym", definition: "The percentage (0–100%, in 10% steps) the VA assigns to each service-connected condition after a claim. The combined rating drives monthly compensation and unlocks other benefits at certain levels — and the math is VA's own table, not simple addition." },
      { id: "cp-exam", term: "C&P Exam", expansion: "Compensation and Pension Exam", definition: "The medical exam the VA schedules during a disability claim, usually with a VA contractor. It is an evaluation, not treatment — the examiner reports findings, and the VA rater decides. Missing one can sink a claim, which is why veterans talk about it so much." },
      { id: "itf", term: "ITF", expansion: "Intent to File", definition: "A simple notice to the VA that starts the clock: filing an ITF preserves the claim's effective date — and back pay — for up to a year while evidence is gathered. Filing the actual claim within that year is what makes it count." },
      { id: "bdd", term: "BDD", expansion: "Benefits Delivery at Discharge", definition: "The program that lets a service member file a VA disability claim 90–180 days before leaving service, so the rating can be ready around discharge instead of months after. The window is strict — Battle Book's Deadlines section counts it down." },
      { id: "dic", term: "DIC", expansion: "Dependency and Indemnity Compensation", definition: "A monthly, tax-free VA payment to eligible surviving spouses, children, and sometimes parents of a member or veteran whose death was connected to service. It is the survivor benefit families most need to know exists before they need it." },
      { id: "sbp", term: "SBP", expansion: "Survivor Benefit Plan", definition: "An elected program that continues a portion of a retired member's pension to a surviving spouse (or other beneficiary) after the retiree's death, paid for by a reduction in retired pay during life. Decisions about SBP are made at retirement and are hard to undo — Battle Book's Retirement section walks through it." },
      { id: "champva", term: "CHAMPVA", expansion: "Civilian Health and Medical Program of the Department of Veterans Affairs", definition: "VA-run health coverage for the spouses and children of certain totally disabled or deceased veterans who are not eligible for TRICARE. The similar name to the old CHAMPUS is a coincidence of history; they are different programs for different people." },
      { id: "tap", term: "TAP", expansion: "Transition Assistance Program", definition: "The mandatory program of briefings, classes, and counseling that prepares members to leave service — benefits, resumes, VA claims, job search. “Going through TAP” means separation is on the calendar." },
      { id: "vso", term: "VSO", expansion: "Veterans Service Organization", definition: "Two uses, one idea: organizations (the American Legion, VFW, DAV, and state/county veteran service offices) and their accredited representatives who help veterans file VA claims for free. A good VSO rep is the single most-recommended resource in the Claims section — and anyone charging to file an initial claim is a red flag." },
      { id: "gi-bill", term: "GI Bill", note: "not an acronym — “GI” was the era's slang for a soldier, from “Government Issue”", definition: "The family of VA education benefits that pays tuition, housing, and books for members, veterans, and — when transferred — spouses and children. The current main version is the Post-9/11 GI Bill; eligibility and transfer rules live in Battle Book's Education section." },
      { id: "coe", term: "COE", expansion: "Certificate of Eligibility", definition: "The VA document proving a borrower qualifies for a VA-backed home loan, showing how much entitlement they have. Lenders pull it early in every VA loan — it's the first checkbox in Battle Book's home-buying material." },
      { id: "pcm", term: "PCM", expansion: "Primary Care Manager", definition: "TRICARE's name for your assigned primary care doctor or team — usually at the MTF. Under TRICARE Prime, the PCM is the front door: most specialty care starts with their referral." },
    ],
  },
  {
    title: "Field & Radio",
    note: "Anchor sources: the DoD Dictionary of Military and Associated Terms (Joint Staff, via JEL+) for the operational terms; FAA Aeronautical Information Manual phraseology and NATO radio procedure for the prowords. Everything here is vocabulary only — what the words mean, never how operations are conducted.",
    source: "DoD Dictionary (Joint Staff) · FAA AIM phraseology · NATO radio procedure",
    links: [
      { label: "DoD Dictionary of Military and Associated Terms (JEL+)", url: "https://jdeis.js.mil/jdeis/" },
      { label: "FAA AIM — phraseology", url: "https://faraim.org/faa/aim/chapter-4/section-4-2-7.pdf" },
    ],
    entries: [
      { id: "ao", term: "AO", expansion: "Area of Operations", definition: "The geographic area assigned to a commander for operations — in plain terms, “our area.” Families hear it as where a deployment is: “somewhere in the AO.”" },
      { id: "fob", term: "FOB", expansion: "Forward Operating Base", definition: "A secured base set up away from the main installation to support operations in an area — bigger and more permanent than a patrol base, smaller than a main base. A generation of deployments made “life on the FOB” a household phrase." },
      { id: "opsec", term: "OPSEC", expansion: "Operations Security", definition: "The discipline of not giving away useful information about movements, dates, units, and plans — in public posts, conversations, or trash. It is the official reason families are asked not to post ship sailing dates or unit movements: loose details assemble into a picture." },
      { id: "sitrep", term: "SITREP", expansion: "Situation Report", definition: "A short, standard update on what is happening: where you are, what you've done, what you need. Units send them on schedule; the word has leaked into civilian offices everywhere." },
      { id: "aar", term: "AAR", expansion: "After Action Review", definition: "The structured talk-through after an exercise or mission — what was supposed to happen, what happened, what to fix — and, by extension, the written report of it. The military's formal version of a debrief." },
      { id: "medevac-term", term: "MEDEVAC", expansion: "Medical Evacuation", definition: "Moving wounded or sick people by dedicated medical transport — ground ambulance or helicopter with medics aboard — requested with the famous 9-line format. Next to CASEVAC, the distinction matters: MEDEVAC vehicles are marked, staffed, and equipped for care in transit." },
      { id: "casevac", term: "CASEVAC", expansion: "Casualty Evacuation", definition: "Moving casualties on whatever transport is available — a truck, a helicopter without a medical crew — when waiting for a MEDEVAC would take too long. Faster and rougher; MEDEVAC is preferred whenever it can reach in time." },
      { id: "9-line", term: "9-Line", note: "not an acronym", definition: "The standard nine-item format for requesting a MEDEVAC — location, radio contact, patients by urgency and type, pickup site details, and so on, in a fixed order so nothing is forgotten under stress. It is taught to nearly every deploying member, and Battle Book's Fieldcraft section carries the chart." },
      { id: "roe", term: "ROE", expansion: "Rules of Engagement", definition: "The standing rules, set at high level, that govern when and how force may be used. At dictionary level that is the whole definition a family needs: they exist, they are specific to each mission, and members train to them." },
      { id: "grid-term", term: "Grid", note: "short for grid reference", definition: "A position on a military map given as numbers from its grid squares — finer and finer digits pinpoint down to meters. “Send me your grid” means “tell me exactly where you are, in map numbers.”" },
      { id: "stand-down", term: "Stand Down", definition: "An ordered pause — a day (or longer) when operations or training stop, usually for safety reviews, equipment checks, or rest after an incident. Also written “stand-down.” When a unit “stands down,” nobody has quit; they've been told to stop and reset." },
      { id: "ftx", term: "FTX", expansion: "Field Training Exercise", definition: "A multi-day training event conducted in the field — the unit lives, moves, and works outdoors as it would on operations. “Gone to the field” almost always means an FTX." },
      { id: "toc", term: "TOC", expansion: "Tactical Operations Center", definition: "The headquarters tent or room where an operation is tracked and directed — radios, maps, and the people awake at 3 a.m. so others can sleep. Pronounced “tock.”" },
      { id: "lz-dz", term: "LZ / DZ", expansion: "Landing Zone / Drop Zone", definition: "LZ — Landing Zone: a designated place where helicopters land. DZ — Drop Zone: the matching term for where paratroopers or air-dropped supplies are meant to land. Both get marked, measured, and talked about constantly during airborne and air-assault operations." },
      { id: "rally-point", term: "Rally Point", note: "not an acronym", definition: "A place agreed in advance where people regroup if they get separated. The concept is borrowed everywhere: families set rally points at crowded events for exactly the same reason." },
      { id: "op-term", term: "OP", expansion: "Observation Post", definition: "A (usually small, concealed) position where a few members watch an area and report what they see. Paired in speech with LP — Listening Post — the night version of the same job." },
      { id: "roger", term: "Roger", note: "proword", definition: "“I received and understood your last transmission.” It does not mean yes, and it does not promise action — that distinction is the whole point of the next word." },
      { id: "wilco", term: "Wilco", note: "proword — short for “will comply”", definition: "“I received, understood, and will do it.” Roger + wilco together is the classic acknowledgment; wilco alone already includes roger's meaning." },
      { id: "over", term: "Over", note: "proword", definition: "“I have finished speaking and am waiting for your reply.” The conversation is a relay, and “over” hands the baton." },
      { id: "out-term", term: "Out", note: "proword", definition: "“I have finished; no reply is expected; this conversation is over.”", flag: "“Over and out” is a movie invention — real procedure never combines them, because they mean opposite things about whether a reply is coming." },
      { id: "say-again", term: "Say Again", note: "proword", definition: "“Repeat your last transmission.” Radio procedure deliberately never says “repeat” for this — in artillery usage, “repeat” is an order connected to firing again — so “say again” is the only correct phrase, and correcting civilians on it is a beloved veteran pastime." },
      { id: "affirmative-negative", term: "Affirmative / Negative", note: "prowords", definition: "Radio for plain “yes” and “no,” chosen because a clipped “yeah” or “no” is easy to lose in static. “That's affirmative” has followed veterans into civilian life everywhere." },
      { id: "standby", term: "Standby", note: "proword", definition: "“Wait — I heard you, I'm occupied, stay on this net.” Not a brush-off; a promise that an answer is coming when the sender's hands are free." },
      { id: "call-sign", term: "Call Sign", definition: "The name a person, unit, vehicle, or station goes by on the radio — assigned, brief, and spelled with the phonetic alphabet from Part 1 when it matters. Individuals also collect informal call signs (especially aviators), which are earned, never self-chosen." },
      { id: "net", term: "Net", note: "short for radio network", definition: "The shared frequency — and the group of stations on it — for a particular purpose: the company net, the MEDEVAC net. “Get on the net” means join that conversation." },
      { id: "comms", term: "Comms", note: "short for communications", definition: "Radios, networks, and the people who run them. “Comms check” is a radio check; “comms are down” explains a great many silences, at work and (conveniently) at home." },
      { id: "lima-charlie", term: "Lima Charlie", note: "radio shorthand", definition: "Radio shorthand for “loud and clear” — the phonetic words for the letters L and C, answering a radio check. “I read you Lima Charlie” means you're coming through perfectly. (See the alphabet table above for why those letters have those words.)" },
      { id: "break-term", term: "Break", note: "proword", definition: "A proword marking a pause inside one long transmission — a separation between sections of a message, so the listener can breathe and copy. “Break, break” repeated urgently is how a station cuts in with priority traffic." },
    ],
  },
  {
    title: "Slang",
    note: "Slang has no single official dictionary. Definitions below follow common, well-documented service usage, cross-checked against published service-culture references (Military OneSource and service magazine/newspaper usage, and the services' own published “slang” explainers for new families). Every entry is labeled SLANG, kept clean, and leans affectionate over derogatory — slang that exists mainly as an insult, and slang whose expansion is profane, is excluded by rule and never printed here.",
    source: "Common documented service usage · service-culture references",
    links: [],
    entries: [
      { id: "pog", term: "POG", expansion: "Person Other than Grunt", definition: "Anyone whose job is not infantry — said by infantry, usually with a grin, sometimes not. Also spelled “pogue.” Every support troop who keeps the infantry fed, fueled, and fixed wears it as a badge of honor in return insults.", slang: true },
      { id: "figmo", term: "FIGMO", expansion: "Forget It — Got My Orders", definition: "The cheerful untouchability of someone holding orders to their next station (or out), past caring about local drama — the state of mind: short, happy, and already gone mentally.", flag: "Borderline, printed with this flag: the original expansion is blunter than the cleaned-up rendering printed here, so the entry defines the term by its meaning. If any one slang entry is a judgment call, it is this one.", slang: true },
      { id: "boot", term: "Boot", definition: "A brand-new, inexperienced member — fresh out of boot camp, still visibly new (the word comes from “boot,” the old slang for a recruit, from boot camp itself). Being a boot is a phase everyone survives; acting like one after you should know better is the insult version.", slang: true },
      { id: "salty", term: "Salty", definition: "Experienced — seasoned by deployments and time, and often a little world-weary or blunt about it. A “salty” senior Marine correcting a boot is a compliment to their experience and a warning about their patience.", slang: true },
      { id: "squared-away", term: "Squared Away", definition: "Having it together: uniform sharp, gear in order, work done right, no loose ends. The highest everyday compliment a leader pays — “squared away” is the goal state for every new member.", slang: true },
      { id: "ate-up", term: "Ate-Up", definition: "The opposite of squared away: sloppy, disorganized, wrong — a uniform, a haircut, a formation, a plan. (Also written “ate up.”) A first sergeant saying a room is ate-up is not a food review.", slang: true },
      { id: "high-speed", term: "High-Speed", definition: "Fast, capable, and impressive — a compliment for someone (or occasionally some piece of gear) that performs. Earnestly meant it's praise; drawn out sarcastically (“high-speed, low-drag” said slowly) it can tease someone trying too hard.", slang: true },
      { id: "oorah", term: "Oorah", note: "Marine Corps", definition: "The Corps' all-purpose battle cry and greeting: yes, understood, motivated, hello, and goodbye in one word. Its exact origin is genuinely disputed (submarine and reconnaissance lore both claim it) — Marines do not care; it is theirs. Families will hear it at every Marine event, at maximum volume.", slang: true },
      { id: "hooah", term: "Hooah", note: "Army", definition: "The Army's matching all-purpose word: yes, understood, agreed, motivated, “let's go.” Spelled several ways (hua, hooah) and said for everything; the running joke — which soldiers tell on themselves — is that it can mean anything except “no.”", slang: true },
      { id: "hooyah", term: "Hooyah", note: "Navy", definition: "The Navy's counterpart, most associated with SEALs, divers, and EOD technicians, from whom it spread fleet-wide. Same family of word as oorah and hooah: agreement, motivation, acknowledgment, yelled.", slang: true },
      { id: "hua", term: "HUA", note: "Air Force", definition: "The Air Force's acknowledgment cheer — heard at briefings and graduations as a motivated “yes/understood.”", flag: "The expansion “Heard, Understood, Acknowledged” is a popular backronym repeated everywhere, but it could not be confirmed as an official expansion — treat it as folklore that fits, printed here as a flag rather than a fact.", slang: true },
      { id: "mustang", term: "Mustang", definition: "An officer who started as enlisted and earned a commission — “mustang” because, like the wild horse, they came up the hard way. Mustangs carry enlisted credibility into the officer corps and are usually described with respect.", slang: true },
      { id: "butter-bar", term: "Butter Bar", definition: "A brand-new second lieutenant, named for the single gold bar of rank — gold, soft, and fresh. Affectionate-teasing; every senior officer was one, and the teasing ends as competence shows.", slang: true },
      { id: "full-bird", term: "Full Bird", definition: "A colonel (O-6), from the silver eagle of the rank insignia. A “bird colonel” outranks a lieutenant colonel (the silver oak leaf), and “full bird” exists to make that distinction in one word.", slang: true },
      { id: "lifer", term: "Lifer", definition: "Someone in for a career — 20 years to retirement. Teasing when aimed at enthusiasm (“lifer” said of someone who loves every field day), neutral-to-proud when lifers say it of themselves.", slang: true },
      { id: "short-timer", term: "Short-Timer (“Short”)", definition: "Someone close to the end of a deployment, a tour, or their contract — counting days, traditionally on a hand-drawn “short-timer's calendar.” “I'm short” is the whole announcement. Short-timers are famously both the happiest and the most cautious people in a unit.", slang: true },
      { id: "jody", term: "Jody", definition: "The figure from a thousand marching cadences: the civilian back home who has your car, your couch, and — in the song — designs on your sweetheart while you're away. “Jody's got your girl and gone” is cadence, not news; the character is folklore every service sings about.", slang: true },
      { id: "dear-john", term: "Dear John", definition: "A breakup letter (now a text or email) received by a deployed or training member from a partner back home. Named for the classic opening, “Dear John…,” it is the feared counterpart to mail call, and units look out for members who get one.", slang: true },
      { id: "hurry-up-and-wait", term: "Hurry Up and Wait", definition: "The universal military experience: rush at full speed to be ready early — then stand around for hours because the next step isn't ready. Every veteran and every spouse has lived it; families learn to pack snacks accordingly.", slang: true },
      { id: "embrace-the-suck", term: "Embrace the Suck", definition: "Advice for miserable conditions: accept that it's awful, stop spending energy resenting it, and drive on. Half joke, half genuine philosophy of endurance — it appears on unit T-shirts for a reason.", slang: true },
      { id: "voluntold", term: "Voluntold", definition: "Volunteered by someone else: you have been assigned a task in the language of volunteering. “I got voluntold for Saturday duty” requires no further explanation in any military family.", slang: true },
      { id: "klick", term: "Klick", definition: "One kilometer. “Two klicks out” is two kilometers away — field shorthand borrowed from map talk, used because most military maps and ranges are metric.", slang: true },
      { id: "pogey-bait", term: "Pogey Bait", note: "Navy / Marine Corps", definition: "Candy, snacks, and sweets — the treats members hoard, trade, and (in legend, and sometimes fact) use to lure the person on duty into trading a better watch. Gedunk (Daily Life) is the place; pogey bait is the treasure.", slang: true },
      { id: "fobbit", term: "Fobbit", definition: "A gently mocking blend of FOB (Field & Radio) and “hobbit”: a deployed member whose job keeps them on the base the whole tour, never going “outside the wire.” Said with love by those whose war was air-conditioning and paperwork — and said back with interest by them.", slang: true },
      { id: "shamming", term: "Shamming", definition: "Dodging work — disappearing when there's a detail, mastering the art of looking busy. Every unit knows its artists; “shamming” is the verb, and being caught at it is its own punishment because everyone sees it.", slang: true },
      { id: "good-to-go", term: "Good to Go", note: "now universal", definition: "Ready; set; all checks complete. Originally ordinary words that military usage turned into the standard all-clear for people, vehicles, and plans — families end up saying it about packed cars and school backpacks.", slang: true },
      { id: "tracking-term", term: "Tracking", note: "esp. Air Force / joint briefings", definition: "“Are you following me? Do you understand?” — as in “Here's the plan — you tracking?” Answering “tracking” means you're with them. It migrated from briefing rooms to everywhere.", slang: true },
      { id: "cherry", term: "Cherry", definition: "A brand-new arrival — newer even than a boot, with zero local experience. Especially paratrooper and infantry usage (“cherry jump” is a new jumper's first jump at a unit). Everyone starts as one; the title burns off with the first field problem survived. (Older British-derived usage; in U.S. units today it simply means brand-new.)", slang: true },
      { id: "zero-dark-thirty", term: "Zero Dark Thirty", definition: "Very early in the morning — the middle of the night, before any sane hour; military time rendered as a joke (0030 would be “zero zero thirty”). “We leave at zero dark thirty” means set two alarms and don't ask questions.", slang: true },
    ],
  },
];

/** Every dictionary entry, flattened with its group title. */
export const ALL_LINGO_ENTRIES: (LingoEntry & { group: string })[] = LINGO_GROUPS.flatMap(
  (g) => g.entries.map((e) => ({ ...e, group: g.title })),
);

export const LINGO_INTRO =
  "A plain-English military dictionary for the people military paperwork and dinner-table stories usually leave behind — spouses, parents, recruits, and brand-new members. Expansions and core meanings are anchored to official glossaries and program pages wherever they exist (the DoD Dictionary, DFAS, VA, TRICARE, Military OneSource, and service publications); branch-specific meanings are labeled with the branch. Slang entries are labeled SLANG, defined in plain words, and kept clean — terms whose expansions are profane are not printed at all. This section is a dictionary, nothing more: terms connected to operations (for example ROE) are defined at the level of what the word means.";