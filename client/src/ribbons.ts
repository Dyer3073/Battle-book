// Ribbon Rack Builder + Awards Finder — transcribed from the
// researched pack (~/workspace/military-app/ribbons/ribbons.md,
// researched Nov 9, 2026). Precedence lists come from the official
// texts the pack cites (DA PAM 670-1 para 22-5; MCO 1020.34H para
// 5102; NAVPERS 15665J Arts. 5305–5308; the AFPC Decorations and
// Ribbons chart; COMDTINST M1650.25E Encl. 22). Per the pack's
// pre-build instruction:
//  - §2B finder entries ship INDEX-ONLY (name + branch + official
//    reference) — no summaries, no device lists, no invented order
//    numbers beyond the official wear lists themselves.
//  - Coast Guard personal decorations ship NAMES ONLY (numbering
//    unresolved in the pack's extraction — Flag F-15).
//  - The USMC list does not include the Inherent Resolve Campaign
//    Medal; it stays unslotted and flagged.
//  - The parked look-alike domain from pack §3.0 appears NOWHERE
//    below: it is not a vendor and is never linked.

import type { RefLink } from "./refdata";

export const RIBBONS_INTRO =
  "Build your rack in your branch's official order of precedence, look up what each award is for, and route to the vendors that sell them — labeled as commercial. Wear only what you have earned: on a uniform, wearing an unearned award violates your service's uniform regulation and can be punished under the UCMJ, and fraudulently claiming a decoration to obtain money, property, or another tangible benefit is a federal crime under the Stolen Valor Act of 2013 (18 U.S.C. § 704).";

export const RIBBONS_RENDITION_NOTE =
  "The ribbons in this builder are labeled color-block renditions, not official ribbon artwork — each block carries its award's name and official order number so the precedence reads correctly at a glance. Exact ribbon patterns are defined by The Institute of Heraldry and your service's awards manual; check your rack against those before you wear it. The U.S. awards are the builder's core set; foreign awards appear in the finder as reference entries only.";

export type BranchKey = "army" | "usmc" | "navy" | "af" | "sf" | "cg";
export const RACK_BRANCHES: { key: BranchKey; label: string; short: string }[] = [
  { key: "army", label: "Army", short: "ARMY" },
  { key: "usmc", label: "Marine Corps", short: "USMC" },
  { key: "navy", label: "Navy", short: "NAVY" },
  { key: "af", label: "Air Force", short: "USAF" },
  { key: "sf", label: "Space Force", short: "USSF" },
  { key: "cg", label: "Coast Guard", short: "USCG" },
];

/** A precedence list: items in official wear order (index+1 = order). */
export type PrecList = {
  key: BranchKey;
  source: string;
  note?: string;
  unnumbered?: boolean; // CG personal decorations: names only
  items: string[];
  extraNote?: string;
};

const named = (arr: readonly string[]): string[] => [...arr];

export const ARMY_PREC: PrecList = {
  key: "army",
  source: "DA PAM 670-1, para 22-5 (wear order) + DA PAM 670-1, para 22-11 (devices)",
  note: "Army awards not issued by the Army (including foreign awards) follow U.S. awards; interservice and foreign sequences sit in the sections the manual prints after the Army list. Badges and tabs (items 62–86) follow awards per the same chart.",
  items: named([
    "Medal of Honor", "Distinguished Service Cross", "Defense Distinguished Service Medal", "Distinguished Service Medal (Army)", "Silver Star", "Defense Superior Service Medal", "Legion of Merit", "Distinguished Flying Cross", "Soldier's Medal", "Bronze Star Medal",
    "Purple Heart", "Defense Meritorious Service Medal", "Meritorious Service Medal", "Air Medal", "Joint Service Commendation Medal", "Army Commendation Medal", "Joint Service Achievement Medal", "Army Achievement Medal", "Prisoner of War Medal", "Good Conduct Medal",
    "Army Reserve Components Achievement Medal", "American Defense Service Medal", "Women's Army Corps Service Medal", "American Campaign Medal", "European-African-Middle Eastern Campaign Medal", "Asiatic-Pacific Campaign Medal", "World War II Victory Medal", "Army of Occupation Medal", "Medal for Humane Action", "National Defense Service Medal",
    "Korean Service Medal", "Antarctica Service Medal", "Armed Forces Expeditionary Medal", "Vietnam Service Medal", "Southwest Asia Service Medal", "Kosovo Campaign Medal", "Afghanistan Campaign Medal", "Iraq Campaign Medal", "Inherent Resolve Campaign Medal", "Global War on Terrorism Expeditionary Medal",
    "Global War on Terrorism Service Medal", "Korean Defense Service Medal", "Armed Forces Service Medal", "Humanitarian Service Medal", "Military Outstanding Volunteer Service Medal", "Armed Forces Reserve Medal", "NCO Professional Development Ribbon", "Army Service Ribbon", "Overseas Service Ribbon", "Army/Marine Corps Presidential Unit Citation",
    "Joint Meritorious Unit Award", "Valorous Unit Award", "Meritorious Unit Commendation (Army)", "Army Superior Unit Award", "Philippine Presidential Unit Citation", "Republic of Korea Presidential Unit Citation", "Presidential Unit Citation (Philippines) — chart duplicates this entry under two names; as printed", "Vietnam Presidential Unit Citation", "Republic of Vietnam Gallantry Cross Unit Citation", "Republic of Vietnam Civil Actions Unit Citation",
    "Secretary of the Army Award for Outstanding Excellence in Materiel Acquisition", "Joint Chiefs of Staff Identification Badge", "Army Staff Identification Badge", "National Guard Bureau Organizational and Staff Identification Badge", "Prisoner of War Medal (chart repeats it here; its personal-award position is #19)", "Combat Infantryman Badge", "Combat Medical Badge", "Combat Action Badge", "Expert Infantryman Badge", "Expert Field Medical Badge",
    "Expert Soldier Badge", "Basic Aviation Badge", "Parachutist Badge", "Military Free Fall Parachutist Badge", "Pathfinder Badge", "Air Assault Badge", "Sapper Tab", "Ranger Tab", "Special Forces Tab", "President's Hundred Tab",
    "Drill Sergeant Identification Badge", "Recruiter Identification Badge", "Career Counselor Badge", "Army Instructor Badge", "Space Badge", "Tomb Guard Identification Badge",
  ]),
};

export const USMC_PREC: PrecList = {
  key: "usmc",
  source: "MCO 1020.34H, para 5102 (wear order); devices paras 5401–5404",
  items: named([
    "Medal of Honor", "Navy Cross", "Defense Distinguished Service Medal", "Navy Distinguished Service Medal", "Silver Star Medal", "Defense Superior Service Medal", "Legion of Merit", "Distinguished Flying Cross", "Navy and Marine Corps Medal", "Bronze Star Medal",
    "Purple Heart", "Defense Meritorious Service Medal", "Meritorious Service Medal", "Air Medal", "Joint Service Commendation Medal", "Navy and Marine Corps Commendation Medal", "Joint Service Achievement Medal", "Navy and Marine Corps Achievement Medal", "Combat Action Ribbon", "Navy Presidential Unit Citation",
    "Joint Meritorious Unit Award", "Navy Unit Commendation", "Meritorious Unit Commendation", "Navy “E” Ribbon", "Prisoner of War Medal", "Marine Corps Good Conduct Medal", "Selected Marine Corps Reserve Medal", "Marine Corps Expeditionary Medal", "China Service Medal", "American Defense Service Medal",
    "American Campaign Medal", "European-African-Middle Eastern Campaign Medal", "Asiatic-Pacific Campaign Medal", "World War II Victory Medal", "Navy Occupation Service Medal", "Medal for Humane Action", "National Defense Service Medal", "Korean Service Medal", "Antarctica Service Medal", "Armed Forces Expeditionary Medal",
    "Vietnam Service Medal", "Southwest Asia Service Medal", "Kosovo Campaign Medal", "Afghanistan Campaign Medal", "Iraq Campaign Medal", "Global War on Terrorism Expeditionary Medal", "Global War on Terrorism Service Medal", "Korean Defense Service Medal", "Armed Forces Service Medal", "Humanitarian Service Medal",
    "Outstanding Volunteer Service Medal", "Sea Service Deployment Ribbon", "Navy Arctic Service Ribbon", "Marine Corps Recruiting Ribbon", "Marine Corps Drill Instructor Ribbon", "Marine Security Guard Ribbon", "Marine Corps Combat Instructor Ribbon", "Armed Forces Reserve Medal", "Marine Corps Reserve Ribbon (obsolete)", "Philippine Presidential Unit Citation",
    "Republic of Vietnam Meritorious Unit Citation (Gallantry Cross)",
  ]),
  extraNote: "Unslotted: the Inherent Resolve Campaign Medal does not appear in MCO 1020.34H para 5102 at all — no USMC position is published here, and none is invented. Its TIOH-filed position (between the Iraq Campaign Medal and the GWOT Expeditionary Medal) is another service's statement, not the Corps'. Verify with your admin shop before wearing it on a Marine rack.",
};

export const NAVY_PREC: PrecList = {
  key: "navy",
  source: "NAVPERS 15665J, Arts. 5305–5308 (personal, unit, and service/campaign lists) — where the article text and the manual's graphic ribbons chart disagree, the article text wins (the chart conflicts with Art. 5305 on at least the Air Medal / Joint Service Commendation order, and with the Good Conduct group on the Navy Reserve Special Commendation Ribbon)",
  items: named([
    "Medal of Honor", "Navy Cross", "Defense Distinguished Service Medal", "Navy Distinguished Service Medal", "Silver Star Medal", "Defense Superior Service Medal", "Legion of Merit Medal", "Distinguished Flying Cross", "Navy and Marine Corps Medal", "Bronze Star Medal",
    "Purple Heart Medal", "Defense Meritorious Service Medal", "Meritorious Service Medal", "Air Medal", "Joint Service Commendation Medal", "Navy and Marine Corps Commendation Medal", "Joint Service Achievement Medal", "Navy and Marine Corps Achievement Medal", "Combat Action Ribbon", "Presidential Unit Citation Ribbon",
    "Joint Meritorious Unit Award", "Navy Unit Commendation Ribbon", "Meritorious Unit Commendation Ribbon", "Navy “E” Ribbon", "Prisoner of War Medal", "Good Conduct Medal (Navy and Marine Corps)", "Navy Reserve Special Commendation Ribbon (obsolete)", "Naval Reserve Medal (obsolete)", "Marine Corps Reserve Ribbon (obsolete)", "Selected Marine Corps Reserve Medal",
    "China Service Medal", "American Defense Service Medal", "American Campaign Medal", "Asiatic-Pacific Campaign Medal", "European-African-Middle Eastern Campaign Medal", "World War II Victory Medal", "Navy Occupation Service Medal", "Medal for Humane Action", "National Defense Service Medal", "Korean Service Medal",
    "Antarctica Service Medal", "Armed Forces Expeditionary Medal", "Vietnam Service Medal", "Southwest Asia Service Medal", "Kosovo Campaign Medal", "Afghanistan Campaign Medal", "Iraq Campaign Medal", "Inherent Resolve Campaign Medal", "Global War on Terrorism Expeditionary Medal", "Global War on Terrorism Service Medal",
    "Korean Defense Service Medal", "Armed Forces Service Medal", "Humanitarian Service Medal", "Military Outstanding Volunteer Service Medal", "Recruit Training Service Ribbon", "Navy Recruiting Service Ribbon", "Navy Ceremonial Guard Ribbon", "Naval Reserve Sea Service Ribbon", "Navy Sea Service Deployment Ribbon", "Navy Arctic Service Ribbon",
    "Overseas Service Ribbon (Navy and Marine Corps)", "Navy and Marine Corps Sea Service Deployment Ribbon (listed again in the manual's core segment, as printed)", "Marine Corps Security Guard Ribbon", "Marine Corps Drill Instructor Service Ribbon", "Marine Corps Recruiting Service Ribbon",
  ]),
};

const AF_ITEMS = named([
  "Medal of Honor", "Air Force Cross", "Defense Distinguished Service Medal", "Distinguished Service Medal", "Silver Star Medal", "Defense Superior Service Medal", "Legion of Merit", "Distinguished Flying Cross", "Airman Medal [sic — Airman's Medal]", "Bronze Star Medal",
  "Purple Heart", "Defense Meritorious Service Medal", "Meritorious Service Medal", "Air Medal", "Aerial Achievement Medal", "Joint Service Commendation Medal", "Air and Space Commendation Medal", "Joint Service Medal [label truncated on the chart — almost certainly the Joint Service Achievement Medal; NOT confirmed from that page alone]", "Air and Space Achievement Medal", "Combat Action Medal",
  "Presidential Unit Citation", "Joint Meritorious Unit Award", "Gallant Unit Citation", "Meritorious Unit Award", "Air and Space Outstanding Unit Award", "Air and Space Organizational Excellence Award", "Prisoner of War Medal", "Combat Readiness Medal", "Air Force Good Conduct Medal", "U.S. Space Force Good Conduct Medal (Space Force list only)",
  "Army Good Conduct Medal", "Air Reserve Forces Meritorious Service Medal", "Outstanding Airman of the Year Ribbon", "Air and Space Recognition Ribbon", "American Defense Service Medal", "American Campaign Medal", "Asiatic-Pacific Campaign Medal", "Euro-African-Middle Eastern Campaign Medal", "World War II Victory Medal", "Army Occupation Medal",
  "Medal for Humane Action", "National Defense Service Medal", "Korean Service Medal", "Antarctica Service Medal", "Armed Forces Expeditionary Medal", "Vietnam Service Medal", "Southwest Asia Service Medal", "Kosovo Campaign Medal", "Afghanistan Campaign Medal", "Iraq Campaign Medal",
  "Inherent Resolve Campaign Medal", "Global War on Terrorism Expeditionary Medal", "Global War on Terrorism Service Medal", "Korean Defense Service Medal", "Armed Forces Service Medal", "Humanitarian Service Medal", "Military Outstanding Volunteer Service Medal", "Remote Combat Effects Medal [Remote Combat Effects Campaign Medal]", "Air and Space Campaign Medal", "Nuclear Deterrence Operations Service Medal",
  "Air and Space Overseas Ribbon Short Tour", "Air and Space Overseas Ribbon Long Tour", "Air and Space Expeditionary Service Ribbon", "Air and Space Longevity Service Award", "Developmental Special Duty Ribbon", "Air Force Basic Military Training Instructor Ribbon", "Air Force Recruiter Ribbon", "Armed Forces Reserve Medal", "USAF NCO PME Graduate Ribbon", "Basic Military Training Honor Graduate Ribbon",
  "Small Arms Expert Marksmanship Ribbon", "Air and Space Training Ribbon", "Philippine Defense Medal", "Philippine Liberation Medal", "Philippine Independence Medal", "Philippine Presidential Unit Citation", "Republic of Korea Presidential Unit Citation", "RVN Gallantry Cross with Palm", "United Nations Service Medal", "United Nations Medal",
  "NATO Meritorious Service Medal", "NATO Medal for Yugoslavia", "NATO Medal for Kosovo", "Article 5 NATO Medal Eagle Assist", "Article 5 NATO Medal Active Endeavour", "Non Article 5 NATO Medal Balkans", "Non Article 5 NATO Medal International Security Assistance Force", "Republic of Vietnam Campaign Medal", "Kuwait Liberation Medal Kingdom of Saudi Arabia", "Kuwait Liberation Medal Government of Kuwait",
  "Republic of Korea Service Medal [as printed]",
]);

export const AF_PREC: PrecList = {
  key: "af",
  source: "AFPC Decorations and Ribbons chart (91 entries, as rendered Nov 2026) — the wear order. DAFI 36-2803 Table 2.1 lists DAF personal decorations only, in a different order, and governs approval/category/device rules, not the full wear order",
  note: "Several chart labels are truncated as printed on the page; bracketed expansions on individual entries are flagged inferences, not source text.",
  items: AF_ITEMS,
};

export const SF_PREC: PrecList = {
  key: "sf",
  source: "The Department of the Air Force list (AFPC chart) — the Space Force follows DAF precedence; the U.S. Space Force Good Conduct Medal sits at #30",
  note: "Order confirmed as following the DAF chart with the Space Force Good Conduct Medal inserted at #30 and the Air Force Good Conduct Medal not carried on a Guardian rack.",
  items: AF_ITEMS.filter((n) => n !== "Air Force Good Conduct Medal"),
};

const CG_PERSONAL = named([
  "Medal of Honor", "Coast Guard Cross", "Navy Cross", "Distinguished Service Cross", "Air Force Cross", "DHS Distinguished Service Medal (Department of Homeland Security Distinguished Service Medal)", "DOT Distinguished Service Medal", "Defense Distinguished Service Medal", "Coast Guard Distinguished Service Medal", "Navy Distinguished Service Medal",
  "Army Distinguished Service Medal", "Air Force Distinguished Service Medal", "DOT Guardian Medal (placement in the manual's numbering is uncertain — verify visually before relying on an order number)", "Silver Star Medal", "Defense Superior Service Medal", "Legion of Merit", "Distinguished Flying Cross", "Coast Guard Medal", "Navy/Marine Corps Medal (Navy and Marine Corps Medal)", "Soldier's Medal",
  "Airman's Medal", "Gold Lifesaving Medal", "Bronze Star Medal", "Purple Heart Medal", "Defense Meritorious Service Medal", "Meritorious Service Medal", "Air Medal", "Silver Lifesaving Medal", "Air Force Aerial Achievement Medal", "Joint Service Commendation Medal",
  "Coast Guard Commendation Medal", "Navy & Marine Corps Commendation Medal", "Army Commendation Medal", "Air Force Commendation Medal", "Joint Service Achievement Medal", "DOT 9-11 Medal (No Longer Awarded)", "Coast Guard Achievement Medal", "Navy & Marine Corps Achievement Medal", "Army Achievement Medal", "Air Force Achievement Medal",
  "Commandant's Letter of Commendation Ribbon", "Coast Guard Combat Action Ribbon", "Navy Combat Action Ribbon", "Air Force Combat Action Medal",
]);

const CG_UNIT = named([
  "Presidential Unit Citation (Coast Guard)", "Presidential Unit Citation (Navy/Marine Corps)", "Presidential Unit Citation (Army/Air Force)", "Joint Meritorious Unit Award", "DOT Outstanding Unit Award (source prints DOT; DHS Outstanding Unit Award in later terminology)", "Coast Guard Unit Commendation", "Navy Unit Commendation", "Army Valorous Unit Award", "Air Force Gallant Unit Citation", "Coast Guard Meritorious Unit Commendation",
  "Navy Meritorious Unit Commendation", "Army Meritorious Unit Commendation", "Air Force Meritorious Unit Award", "Coast Guard Meritorious Team Commendation", "Army Superior Unit Award", "Air Force Outstanding Unit Award", "Coast Guard “E” Ribbon", "Navy “E” Ribbon", "Air Force Organizational Excellence Award", "Coast Guard Bicentennial Unit Commendation",
]);

const CG_CAMPAIGN = named([
  "Prisoner of War Medal", "Coast Guard Good Conduct Medal", "Navy Good Conduct Medal", "Marine Corps Good Conduct Medal", "Army Good Conduct Medal", "Air Force Good Conduct Medal", "Coast Guard Reserve Good Conduct Medal", "Naval Reserve Meritorious Service Medal", "Selected Marine Corps Reserve Medal", "Army Reserve Components Achievement Medal",
  "Air Reserve Forces Meritorious Service Medal", "Coast Guard Enlisted Person of the Year Ribbon", "Air Force Outstanding Airman of the Year Ribbon", "Navy Expeditionary Medal", "Marine Corps Expeditionary Medal", "China Service Medal", "American Defense Service Medal", "American Campaign Medal", "European-African-Middle Eastern Campaign Medal", "Asiatic-Pacific Campaign Medal",
  "World War II Victory Medal", "U.S. Antarctic Expedition Medal", "Navy Occupation Service Medal", "Army of Occupation Medal", "Medal for Humane Action", "National Defense Service Medal", "Korean Service Medal", "Antarctica Service Medal", "Coast Guard Arctic Service Medal", "Armed Forces Expeditionary Medal",
  "Vietnam Service Medal", "Southwest Asia Service Medal", "Kosovo Campaign Medal", "Afghanistan Campaign Medal", "Iraq Campaign Medal", "Inherent Resolve Campaign Medal", "Global War on Terrorism Expeditionary Medal", "Global War on Terrorism Service Medal", "Korean Defense Service Medal", "Armed Forces Service Medal",
  "Humanitarian Service Medal", "DOT 9-11 Ribbon", "Military Outstanding Volunteer Service Medal", "Navy/Marine Corps Sea Service Deployment Ribbon", "Coast Guard Special Operations Service Ribbon", "Navy Arctic Service Ribbon", "Coast Guard Sea Service Ribbon", "Naval Reserve Sea Service Ribbon", "Coast Guard Restricted Duty Ribbon", "Air Force Overseas Ribbon – Short [Tour]",
  "Army Sea Duty Ribbon", "Coast Guard Overseas Service Ribbon", "Navy/Marine Corps Overseas Service Ribbon", "Army Overseas Ribbon", "Air Force Expeditionary Service Ribbon", "Air Force Overseas Service Ribbon (long tour)", "Air Force Special Duty Ribbon", "Coast Guard Basic Training Honor Graduate Ribbon", "Navy Basic Military Training Honor Graduate Ribbon", "Navy Ceremonial Guard Service Ribbon",
  "Coast Guard Recruiting Ribbon [as extracted]", "Navy Recruiting Service Ribbon", "Marine Corps Recruiting Ribbon", "Marine Corps Drill Instructor Ribbon", "Marine Corps Security Guard Ribbon", "Armed Forces Reserve Medal", "Naval Reserve Medal", "Army Service Ribbon", "Marine Corps Reserve Ribbon", "Army Reserve Components Achievement Medal (duplicate — also at #10 above, as printed in the extraction; flagged, not silently deduplicated)",
  "Army Noncommissioned Officer Professional Development Ribbon", "Air Force Noncommissioned Officer Professional Military Education Ribbon", "Air Force Basic Military Training Honor Graduate Ribbon",
]);

export const CG_PERSONAL_PREC: PrecList = {
  key: "cg",
  source: "COMDTINST M1650.25E, Enclosure (22) — personal decorations. NAMES ONLY: the manual's two-column layout interleaved in text extraction, so exact order numbers for this group are not published here (the sequence of names is as extracted). Verify numbers against the manual before relying on them",
  unnumbered: true,
  items: CG_PERSONAL,
};
export const CG_UNIT_PREC: PrecList = { key: "cg", source: "COMDTINST M1650.25E, Enclosure (22) — unit awards", items: CG_UNIT };
export const CG_CAMPAIGN_PREC: PrecList = { key: "cg", source: "COMDTINST M1650.25E, Enclosure (22) — campaign and service awards", items: CG_CAMPAIGN };

export const PREC_LISTS: Record<BranchKey, PrecList[]> = {
  army: [ARMY_PREC],
  usmc: [USMC_PREC],
  navy: [NAVY_PREC],
  af: [AF_PREC],
  sf: [SF_PREC],
  cg: [CG_PERSONAL_PREC, CG_UNIT_PREC, CG_CAMPAIGN_PREC],
};

/** Flattened rack items for a branch, in official wear order. */
export function rackItemsFor(branch: BranchKey): { name: string; order: number | null; group: string }[] {
  const lists = PREC_LISTS[branch];
  const out: { name: string; order: number | null; group: string }[] = [];
  let offset = 0;
  for (const list of lists) {
    const group = list.unnumbered ? "Personal decorations (names only — see the manual)" : list === lists[0] ? "Awards in wear order" : list.items === CG_UNIT ? "Unit awards" : "Campaign & service awards";
    list.items.forEach((name, i) => {
      out.push({ name, order: list.unnumbered ? null : offset + i + 1, group });
    });
    offset += list.items.length;
  }
  return out;
}


// ---------- Awards Finder ----------

export type FinderEntry = {
  name: string;
  branches: string;
  summary: string;
  devices?: string;
  flag?: string;
  links: RefLink[];
};

const TIOH_P: RefLink = { label: "TIOH — Personal Decorations list", url: "https://tioh.army.mil/Catalog/HeraldryList.aspx?CategoryId=3&grp=4&menu=Decorations and Medals" };
const TIOH_CS: RefLink = { label: "TIOH — Campaign & Service Medals list", url: "https://tioh.army.mil/Catalog/HeraldryMulti.aspx?CategoryId=4&grp=4" };
const TIOH_U: RefLink = { label: "TIOH — Unit Awards list", url: "https://tioh.army.mil/Catalog/HeraldryList.aspx?CategoryId=9147&grp=4&menu=Decorations and Medals" };
const TIOH_R: RefLink = { label: "TIOH — Ribbons list", url: "https://tioh.army.mil/Catalog/HeraldryList.aspx?CategoryId=5&grp=4&menu=Decorations and Medals" };
const MARINES_AWARDS: RefLink = { label: "marines.mil — Combat Awards", url: "https://www.marines.mil/Combat-Awards/" };
const CG_MANUAL: RefLink = { label: "COMDTINST M1650.25E — Coast Guard Medals and Awards Manual (PDF)", url: "https://web.d11s.org/wp-content/uploads/2023/06/Coast-Guard-Medals-and-Awards-Manual.pdf" };
const NAVY_CH5: RefLink = { label: "NAVPERS 15665J Ch. 5 — Awards (MyNavy HR)", url: "https://www.mynavyhr.navy.mil/References/US-Navy-Uniforms/Uniform-Regulations/Chapter-5/5301-Awards/" };
const AFPC_CHART: RefLink = { label: "AFPC — Decorations and Ribbons chart", url: "https://www.afpc.af.mil/Career-Management/Decorations-and-Ribbons/" };
const DAFI: RefLink = { label: "DAFI 36-2803 (PDF)", url: "https://static.e-publishing.af.mil/production/1/af_a1/publication/dafi36-2803/dafi36-2803.pdf" };
const DA_PAM: RefLink = { label: "DA PAM 670-1 (PDF)", url: "https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN30948-PAM_670-1-000-WEB-1.pdf" };
const MCPEL: RefLink = { label: "MCO 1020.34H — Marine Corps Publications Library (search “uniform”)", url: "https://www.marines.mil/News/Publications/MCPEL/Search/uniform/" };

export const FINDER_CONFIRMED: FinderEntry[] = [
  { name: "Medal of Honor", branches: "All branches", summary: "Awarded by the President in the name of Congress to a service member who distinguishes themselves conspicuously by gallantry and intrepidity at the risk of life above and beyond the call of duty in action against an enemy, in conflict with an opposing force, or with friendly forces engaged in armed conflict.", devices: "DAF: oak leaf cluster only, no V/C/R. Navy wears it on a neck ribbon.", links: [MARINES_AWARDS, { label: "TIOH — Medal of Honor (Navy version)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15242&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Distinguished Service Cross", branches: "Army (also on the CG personal list)", summary: "Established 2 Jan 1918 as recognition other than the Medal of Honor for service in a like manner to that awarded by European armies.", devices: "Army — oak leaf cluster.", flag: "PARTIAL: the TIOH page states only “Criteria: See Army Regulation 600-8-22.” Verify the one-line criteria wording in AR 600-8-22 before treating any summary sentence as final.", links: [{ label: "TIOH — Distinguished Service Cross", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15238&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Navy Cross", branches: "Navy, USMC (also Army and CG lists)", summary: "Awarded to a person serving in any capacity with the Navy or Marine Corps who distinguishes himself by extraordinary heroism not justifying the Medal of Honor, in action against an enemy, in operations involving conflict with an opposing foreign force, or with friendly foreign forces in armed conflict.", devices: "USMC/Navy — gold/silver stars; Army wear — oak leaf cluster.", links: [MARINES_AWARDS] },
  { name: "Coast Guard Cross", branches: "Coast Guard", summary: "May be awarded by the President to a person who, while serving in any capacity with the Coast Guard when the Coast Guard is not operating under the Department of the Navy, distinguishes themselves by extraordinary heroism not justifying the award of the Medal of Honor — in action against an enemy, conflict with an opposing force, or with friendly forces in armed conflict. Authorized by 14 U.S.C. § 491a (2010).", flag: "Devices not confirmed in the research pass.", links: [CG_MANUAL] },
  { name: "Air Force Cross", branches: "Air Force, Space Force (also Army and CG lists)", summary: "The Air Force's cross for extraordinary heroism — DAFI 36-2803 Table 2.1 marks it Valor and Personal Heroism; TIOH describes it as the Air Force version of the Distinguished Service Cross.", devices: "DAF — oak leaf cluster only.", flag: "CATEGORY-LEVEL ONLY: no narrative criteria sentence was fetched from an official page in the research pass.", links: [{ label: "TIOH — Air Force Cross", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=16856&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Department of Homeland Security Distinguished Service Medal", branches: "Coast Guard list", summary: "Awarded by the Secretary of Homeland Security to any member of the Armed Forces who has provided exceptionally meritorious service in a duty of great responsibility while assigned in the Department of Homeland Security, or in other activities under the responsibility of the Secretary of Homeland Security (E.O. 12824, 1992).", links: [CG_MANUAL] },
  { name: "Distinguished Service Medal", branches: "All branches (each service's own design)", summary: "Awarded for exceptionally meritorious service to the Government in a duty of great responsibility — the Army text (quoting the 9 Jul 1918 Act): in time of war or in connection with military operations against an armed enemy; the Coast Guard standard adds performance clearly above normal, contributing materially to the success of a major command or project.", devices: "Army/DAF — oak leaf cluster (DAF adds the “C” device); USMC/Navy — gold star.", links: [{ label: "TIOH — DSM (Army)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15240&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }, { label: "TIOH — DSM (Navy)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=17106&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Silver Star Medal", branches: "All branches", summary: "Awarded to a person serving in any capacity with the service who is cited for gallantry in action that does not warrant the Medal of Honor or a service cross — in action against an enemy, conflict with an opposing force, or with friendly forces in armed conflict. The heroic act must render the individual conspicuous and well above the standard expected.", devices: "Army/DAF — oak leaf cluster; USMC/Navy — gold star.", links: [{ label: "marines.mil — Silver Star", url: "https://www.marines.mil/Combat-Awards/Article/1831632/silver-star/" }] },
  { name: "Legion of Merit", branches: "All branches", summary: "Awarded by the President for exceptionally meritorious service — “service comparable to the DSM, but in a duty of lesser, though considerable, responsibility” (10 U.S.C. § 1121).", devices: "Army — OLC, “V” where authorized; USMC — gold star + “V”; DAF — V, C, R, OLC (devices not authorized for LOMs approved for foreign military); Navy — V/C/R per NAVPERS Arts. 5317–5319.", flag: "The individual TIOH page was listed, not opened, in the research pass; this summary rests on the COMDTINST text.", links: [TIOH_P, CG_MANUAL] },
  { name: "Distinguished Flying Cross", branches: "All branches", summary: "Awarded to a person serving in any capacity with the service who distinguishes themselves by heroism or extraordinary achievement while participating in aerial flight.", devices: "Army — OLC + “V”; USMC — gold star + “V”; DAF — V, C, OLC.", links: [{ label: "TIOH — Distinguished Flying Cross", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15249&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Soldier's Medal", branches: "Army (also CG list)", summary: "The Army's heroism decoration outside combat; TIOH defers its criteria to AR 600-8-22 / 10 U.S.C. § 3750.", devices: "Army — oak leaf cluster.", flag: "PARTIAL: the one-line “heroism not involving actual conflict” wording was not fetched from an official page in this pass — verify before publishing it as the criteria.", links: [{ label: "TIOH — Soldier's Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15250&CategoryId=3&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Navy and Marine Corps Medal", branches: "Navy, USMC (also Army and CG lists)", summary: "Awarded to service members serving in any capacity with the Navy or Marine Corps who distinguish themselves by heroism not involving actual conflict with an enemy — typically awarded for actions involving risk of one's own life.", devices: "Army wear — oak leaf cluster; USMC — gold star.", links: [{ label: "TIOH — Navy and Marine Corps Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=17074&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Airman's Medal", branches: "Air Force, Space Force (also Army and CG lists)", summary: "The Air Force's noncombat heroism decoration — DAFI Table 2.1 marks Noncombat Heroism only.", devices: "Oak leaf cluster only (DAFI Table 2.3).", flag: "CATEGORY-LEVEL ONLY: no narrative criteria sentence was fetched in the research pass.", links: [DAFI] },
  { name: "Coast Guard Medal", branches: "Coast Guard (also Army list)", summary: "Awarded by the President to any person serving with the Coast Guard who distinguishes themselves by heroism not involving actual conflict with an enemy — a voluntary act of heroism in the face of great danger, standing out distinctly above normal expectations (14 U.S.C. § 493).", links: [CG_MANUAL] },
  { name: "Bronze Star Medal", branches: "All branches", summary: "Awarded to any person serving in any capacity with the U.S. Armed Forces who distinguishes himself, after 6 Dec 1941, by heroic or meritorious achievement or service, not involving participation in aerial flight, in action against an enemy, operations involving conflict, or with friendly foreign forces. The Combat Distinguishing (“V”) Device may be authorized. Medal reverse inscription: “HEROIC OR MERITORIOUS ACHIEVEMENT.” (The Coast Guard manual adds that the CG recipient must be in receipt of Imminent Danger Pay at the time of the act or service.)", devices: "Army — OLC + “V”; USMC — gold star + “V”; DAF — V, OLC (no “C”).", links: [{ label: "TIOH — Bronze Star Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=3&HeraldryId=15252&grp=3&menu=Uniformed%20Services&ps=24" }, MARINES_AWARDS] },
  { name: "Purple Heart", branches: "All branches", summary: "Awarded to members of the U.S. Armed Forces who, while serving under competent authority in any capacity with an Armed Force after 5 Apr 1917, have been killed or wounded in action against an enemy, with an opposing armed force, as a result of enemy/hostile acts, by friendly fire while engaging the enemy, by captor maltreatment as a POW, and (after 28 Mar 1973) in a terrorist attack or peacekeeping operations. It is an entitlement, not a valor award — DAFI Table 2.1 marks all Awarded-For columns No.", devices: "Army/DAF — oak leaf cluster; USMC — gold star.", links: [MARINES_AWARDS] },
  { name: "Meritorious Service Medal", branches: "All branches", summary: "The peacetime meritorious-service decoration above the commendation medals — DAFI Table 2.1 marks Service and Achievement.", devices: "DAF — R, OLC (no V, no C); Army — OLC; USMC — gold star.", flag: "CATEGORY-LEVEL ONLY (DAF): no narrative criteria sentence was fetched from an official page in this pass.", links: [TIOH_P] },
  { name: "Air Medal", branches: "All branches", summary: "Established by E.O. 9158, 11 May 1942, for any person serving in any capacity in the Army, Navy, Marine Corps, or Coast Guard who distinguishes himself by meritorious achievement while participating in an aerial flight.", devices: "Army — numerals for subsequent awards, “V”; USMC — a bronze star denotes the initial single-mission/individual award, gold stars and strike/flight bronze Arabic numerals, “V”; DAF — V, C, OLC. (Navy Art. 5319 device rules were referenced but not fetched.)", links: [{ label: "TIOH — Air Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15256&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Aerial Achievement Medal", branches: "Air Force, Space Force (also Army and CG lists)", summary: "DAF aerial achievement decoration — DAFI Table 2.1 marks Achievement only.", devices: "Oak leaf cluster only (DAFI Table 2.3).", flag: "CATEGORY-LEVEL ONLY: no narrative criteria sentence was fetched in the research pass.", links: [DAFI] },
  { name: "Joint Service Commendation Medal", branches: "All branches", summary: "Authorized by the Secretary of Defense 25 Jun 1963; awarded in the name of the Secretary of Defense to members of the Armed Forces who, after 1 Jan 1963, distinguished themselves by meritorious achievement or service in a joint assignment.", devices: "Army — OLC + “V”; USMC — gold star + “V”.", links: [{ label: "TIOH — Joint Service Commendation Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=17140&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Army Commendation Medal", branches: "Army (also CG list)", summary: "Established (as the Commendation Ribbon, War Department Circular 377, 18 Dec 1945) to recognize meritorious service in an area or time for which the Bronze Star Medal may not be awarded; a 1 Jun 1962 Kennedy memorandum extended it to friendly foreign personnel who distinguished themselves by heroic act, extraordinary achievement, or meritorious service.", devices: "Oak leaf cluster + “V”.", links: [{ label: "TIOH — Army Commendation Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=3&HeraldryId=15259&grp=3&menu=Uniformed%20Services&ps=24" }] },
  { name: "Navy and Marine Corps Commendation Medal", branches: "Navy, USMC (also Army and CG lists)", summary: "Awarded to a person serving in any capacity with the Navy or Marine Corps (including foreign military personnel) who distinguishes him/herself after 6 Dec 1941 by heroic or meritorious achievement or service, above that normally expected but not to the degree required for the Bronze Star, Navy and Marine Corps Medal, or Meritorious Service Medal as applicable. The Combat Distinguishing Device may be authorized.", devices: "USMC — gold star + “V”; Army wear — oak leaf cluster.", links: [MARINES_AWARDS] },
  { name: "Air and Space Commendation Medal", branches: "Air Force, Space Force", summary: "DAF commendation decoration — DAFI Table 2.1 marks Valor, Noncombat Heroism, Service, and Achievement.", devices: "V, C, R, OLC (DAFI Table 2.3).", flag: "CATEGORY-LEVEL ONLY: no narrative criteria sentence was fetched in the research pass.", links: [DAFI] },
  { name: "Army Achievement Medal", branches: "Army (also CG list)", summary: "Established 10 Apr 1981 by the Secretary of the Army, on the ARCOST recommendation that also created the Overseas Service Ribbon, Army Service Ribbon, and NCO Professional Development Ribbon. The medal's reverse reads “FOR MILITARY ACHIEVEMENT.”", devices: "Oak leaf cluster.", flag: "PARTIAL: the criteria sentence was not fetched (TIOH defers to AR 600-8-22).", links: [{ label: "TIOH — Army Achievement Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15261&CategoryId=3&grp=4&menu=Decorations and Medals&ps=24&p=0" }] },
  { name: "Navy and Marine Corps Achievement Medal", branches: "Navy, USMC (also Army and CG lists)", summary: "Awarded to Navy/Marine Corps members (including Reserve, active or inactive), grade lieutenant commander/major and junior, for service on or after 1 May 1961: meritorious service or achievement in a combat or noncombat situation, based on sustained performance or a specific superlative achievement, warranting more tangible recognition than a fitness report but not a Commendation Medal or higher. The Combat Distinguishing Device may be authorized.", devices: "USMC — gold star + “V”; Army wear — oak leaf cluster.", links: [MARINES_AWARDS] },
  { name: "Air and Space Achievement Medal", branches: "Air Force, Space Force", summary: "DAF achievement decoration — DAFI Table 2.1 marks Service and Achievement (Valor: No).", devices: "C, R, OLC; “V” only for 11 Jan 1996–6 Jan 2016 (AFPC/ARPC note).", flag: "CATEGORY-LEVEL ONLY: no narrative criteria sentence was fetched in the research pass.", links: [DAFI] },
  { name: "Joint Meritorious Unit Award", branches: "All branches' unit lists", summary: "Established by DoD Directive 1348.27, 22 Jul 1982; requirements in DoD Manual 1348.33-M.", devices: "Army — oak leaf cluster; USMC — gold star, or OLC if bestowed by DoD, the Army, or the Air Force.", flag: "The one-line purpose was not fetched beyond its establishment in the research pass.", links: [{ label: "TIOH — Joint Meritorious Unit Award", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=9147&HeraldryId=15476&grp=0&menu=Decorations%20and%20Medals&ps=0" }] },
  { name: "Army Valorous Unit Award", branches: "Army (also CG unit list)", summary: "Created to signify unit gallantry in combat to a degree equivalent to that required for award of a Silver Star to an individual; approved by the Chief of Staff, Army, 12 Jan 1966, after a review found no lesser unit award for heroism below the Distinguished Unit Citation.", devices: "Oak leaf cluster.", links: [{ label: "TIOH — Army Valorous Unit Award", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=9147&HeraldryId=15477&grp=3&menu=Uniformed%20Services&ps=24" }] },
  { name: "Army Meritorious Unit Commendation", branches: "Army (also CG unit list)", summary: "“The degree of achievement required is the same as that which would warrant a Legion of Merit to an individual.” (Quoted from the TIOH streamer entry; the emblem page's criteria were not opened.)", devices: "Oak leaf cluster.", links: [{ label: "TIOH — Army Meritorious Unit Commendation (streamer)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=9158&HeraldryId=15608&grp=2&menu=Uniformed%20Services&p=0&ps=24" }] },
  { name: "Army Superior Unit Award", branches: "Army (also CG unit list)", summary: "Approved Apr 1985 by the Secretary of the Army for meritorious unit performance of a uniquely difficult and challenging mission under extraordinary circumstances that involved the national interest (criteria revised Jul 1986, deleting “unique” and “national interest”).", devices: "Oak leaf cluster.", links: [{ label: "TIOH — Army Superior Unit Award", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15479&CategoryId=9147&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Navy “E” Ribbon", branches: "Army, USMC, Navy, CG unit lists", summary: "The Navy's battle efficiency ribbon — its device rule is confirmed even though the purpose sentence was not fetched in the research pass.", devices: "Recipients wear a silver block letter “E”; subsequent awards = additional silver “E”s; four or more = one silver-wreathed “E” (MCO 1020.34H para 5402.4).", links: [TIOH_U] },
  { name: "Prisoner of War Medal", branches: "All branches", summary: "Public Law 99-145 (8 Nov 1985) amended 10 U.S.C. § 1128 to require, under certain circumstances, the issuance of a Prisoner of War Medal to any person who, while serving in any capacity with the Armed Forces of the United States, was taken prisoner and held captive after 5 April 1917.", devices: "Army — service stars (general rule); USMC — bronze star; Navy — bronze stars.", links: [TIOH_CS] },
  { name: "Army Good Conduct Medal", branches: "Army (also CG and AF lists)", summary: "Established by E.O. 8809, 28 Jun 1941, for Soldiers completing three years' active service after that date (amended: three years after 7 Dec 1941, or one year while the U.S. is at war).", devices: "Good conduct clasps with loops, not oak leaf clusters — bronze clasp for the 2nd (2 loops) through 5th awards; silver for the 6th (1 loop) through 10th; gold for the 11th (1 loop) through 15th.", links: [{ label: "TIOH — Army Good Conduct Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15263" }] },
  { name: "Marine Corps Good Conduct Medal", branches: "USMC (also CG list)", summary: "Established by Secretary of the Navy H.S. Herbert; awarded from 20 Jul 1896 to present, on a selective basis, to enlisted members in the Regular Marine Corps or Marine Corps Reserve to recognize good behavior and faithful service while on active duty for a specified period of time.", devices: "Bronze star for subsequent awards.", links: [{ label: "TIOH — Marine Corps Good Conduct Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=17251&grp=4&menu=Decorations%20and%20Medals&ps=24" }] },
  { name: "Navy Good Conduct Medal", branches: "Navy (also CG list)", summary: "Established 26 Apr 1869 by Secretary of the Navy A.E. Borie; originally for a second or subsequent 3-year enlistment with high conduct marks and a commanding officer's recommendation — in time, it came to be awarded for the honorable completion of a fixed term of service.", devices: "Bronze stars for subsequent awards.", links: [TIOH_CS] },
  { name: "Air Force Good Conduct Medal", branches: "Air Force; Space Force members via the DAF list (also CG list)", summary: "Authorized by Congress 6 Jul 1960, created 1 Jun 1963 by the Secretary of the Air Force; awarded to Air Force enlisted during a three-year period of active military service or for a one-year period of service during wartime, with excellent character/efficiency ratings and no court-martial conviction in the qualifying period.", links: [TIOH_CS] },
  { name: "Space Force Good Conduct Medal", branches: "Space Force (DAF chart #30)", summary: "The Space Force's good conduct medal — TIOH's page describes its design: globe, delta, orbit ring, and Polaris; “UNITED STATES SPACE FORCE / SEMPER SUPRA”; reverse “EFFICIENCY, HONOR, FIDELITY / FOR GOOD CONDUCT.”", flag: "DESCRIPTION-ONLY: no criteria sentence was in the fetched segment — criteria NOT CONFIRMED.", links: [TIOH_CS] },
  { name: "Army Reserve Components Achievement Medal", branches: "Army (also CG list)", summary: "Recommended 11 Aug 1969 as a Reserve Components medal comparable to the Good Conduct Medal for the Active Army; may be awarded to enlisted personnel and officers Colonel and below; AGR Soldiers/officers not authorized. Its twelve-pointed star symbolizes measurement of time and sustained meritorious service.", devices: "Oak leaf cluster (the TIOH Oak Leaf Clusters page expressly includes this medal).", links: [{ label: "TIOH — Army Reserve Components Achievement Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15264&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Army of Occupation Medal", branches: "Army (DAF chart as “Army Occupation Medal”)", summary: "Established by War Department Circular 102, 5 Apr 1946, for occupation duty after World War II.", devices: "Germany / Japan clasps on the suspension ribbon; Berlin Airlift Device (miniature C-54) for 90 consecutive days' service 26 Jun 1948–30 Sep 1949. (The Navy Occupation Service Medal takes EUROPE / ASIA clasps.)", links: [{ label: "TIOH — Army of Occupation Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=15301&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "Medal for Humane Action", branches: "Army, USMC, DAF, CG lists", summary: "Established by Act of Congress (Public Law 178, 81st Cong.), 20 Jul 1949; the design shows a C-54 and the inscription “TO SUPPLY NECESSITIES OF LIFE TO THE PEOPLE OF BERLIN GERMANY” — the Berlin Airlift humanitarian medal.", flag: "Devices not fetched in the research pass.", links: [{ label: "TIOH — Medal for Humane Action", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15302&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Antarctica Service Medal", branches: "All branches", summary: "The service medal for Antarctic service; its confirmed content in the research pass is its device rule.", devices: "“Wintered Over” clasp — Army: bronze/gold/silver by wintering; USMC: bronze for the first wintering, gold the second, silver the third and subsequent; Navy: bronze / gold 2nd / silver 3rd+.", flag: "Description not fetched in the research pass.", links: [TIOH_CS] },
  { name: "Armed Forces Expeditionary Medal", branches: "All branches", summary: "Established by President Kennedy, E.O. 10977, 4 Dec 1961, for operations on or after 1 Jul 1958, after a need arose to recognize the services of the Armed Forces who participated in the increased involvement of the American military in peacekeeping activities. The Army has authorized campaign credit and streamers for four areas: Grenada, Panama, Somalia, Dominican Republic.", devices: "A bronze service star denotes second and subsequent awards; the USMC bronze-star list applies.", links: [{ label: "TIOH — Armed Forces Expeditionary Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15306&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Southwest Asia Service Medal", branches: "All branches", summary: "Established by E.O. 12754, 12 Mar 1991. Bronze stars indicate campaign participation; the three designated campaigns: Defense of Saudi Arabia (2 Aug 1990–16 Jan 1991), Liberation and Defense of Kuwait (17 Jan–11 Apr 1991), Southwest Asia Cease-Fire (12 Apr 1991–30 Nov 1995).", devices: "Bronze service stars by campaign.", links: [{ label: "TIOH — Southwest Asia Service Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15308&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Kosovo Campaign Medal", branches: "All branches", summary: "Established by E.O. 13154, 3 May 2000, to recognize the accomplishments of military service members who participated in or were in direct support of the Kosovo Operations.", devices: "One bronze service star for qualified participation in a campaign period.", links: [{ label: "TIOH — Kosovo Campaign Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15309&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Afghanistan Campaign Medal", branches: "All branches", summary: "The campaign medal for Afghanistan service; worn before the Iraq Campaign Medal and directly after the Kosovo Campaign Medal.", devices: "Service stars (general campaign rule; page-level confirmation pending).", flag: "Description not fetched in this pass — the TIOH page was opened for design, ribbon, and precedence only.", links: [{ label: "TIOH — Afghanistan Campaign Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15310&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Iraq Campaign Medal", branches: "Army, Navy, DAF, CG lists", summary: "Established by Public Law 108-234 (28 May 2004) and E.O. 13363, 29 Nov 2004.", devices: "Service stars (page-level confirmation pending).", flag: "Purpose sentence beyond establishment not fetched. USMC position unconfirmed — the medal is not in the MCO 1020.34H para 5102 list this builder uses.", links: [{ label: "TIOH — Iraq Campaign Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15311&CategoryId=4&grp=4" }] },
  { name: "Inherent Resolve Campaign Medal", branches: "Army, Navy, DAF, CG lists", summary: "The campaign medal for Inherent Resolve service; TIOH's page covers its design (scorpion, dagger, eagle; “FOR SERVICE”).", flag: "Description not fetched (page opened for design/symbolism only). NOT in MCO 1020.34H — no USMC position is published in this app.", links: [{ label: "TIOH — Inherent Resolve Campaign Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=17956&grp=0&menu=Decorations+and+Medals&ps=24" }] },
  { name: "Global War on Terrorism Expeditionary Medal", branches: "All branches", summary: "Established by E.O. 13289, 12 Mar 2003. A member may receive both the GWOT Expeditionary Medal and the GWOT Service Medal if the requirements of both are met, but the same period of service cannot justify both.", flag: "Purpose sentence beyond establishment not fetched; devices pending page-level confirmation.", links: [{ label: "TIOH — GWOT Expeditionary Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15312&CategoryId=4&grp=4&menu=Decorations%20and%20Medals&ps=24&p=0" }] },
  { name: "Korea Defense Service Medal", branches: "All branches (DA PAM prints “Korean Defense Service Medal”)", summary: "Authorized to members of the Armed Forces who have served on active duty in support of the defense of the Republic of Korea from 28 July 1954 to a date to be determined. Precedence per TIOH: below the GWOT Service Medal, above the Armed Forces Service Medal.", flag: "Devices not fetched in the research pass.", links: [{ label: "TIOH — Korea Defense Service Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?HeraldryId=15314&CategoryId=4" }] },
  { name: "Armed Forces Service Medal", branches: "All branches", summary: "Authorized by E.O. 12985, 11 Jan 1996; awarded to members of the Armed Forces who participated as members of units involved in military operations of significant numbers with no foreign armed opposition or threat of imminent hostile action — intended to meet a void in the criteria between the Armed Forces Expeditionary Medal and the Humanitarian Service Medal.", devices: "USMC — bronze star; Army — service stars (general rule).", links: [{ label: "TIOH — Armed Forces Service Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=15315&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "Humanitarian Service Medal", branches: "All branches", summary: "Established by E.O. 11965, 19 Jan 1977, for participation in a military operation of a humanitarian nature subsequent to 1 April 1975.", devices: "Service stars.", links: [{ label: "TIOH — Humanitarian Service Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=15316&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "Military Outstanding Volunteer Service Medal", branches: "All branches", summary: "Established by E.O. 12830, 9 Jan 1993; the design emphasizes the interaction of the military services with the civilian community, and the star commemorates outstanding service.", devices: "Service stars.", flag: "Criteria sentence not fetched in the research pass.", links: [{ label: "TIOH — Military Outstanding Volunteer Service Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=15317&grp=0&menu=Decorations+and+Medals&ps=24" }] },
  { name: "Army Sea Duty Ribbon", branches: "Army (also CG list)", summary: "Approved 17 Apr 2006; awarded to Active Army, ARNG, and USAR members for completion of designated periods of sea duty aboard Class A and Class B United States Army Vessels (USAV) as defined in AR 56-9. No medal for this ribbon. Precedence per TIOH: after the Military Outstanding Volunteer Service Medal.", flag: "Devices not fetched in the research pass.", links: [{ label: "TIOH — Army Sea Duty Ribbon", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=5&HeraldryId=15440&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "Armed Forces Reserve Medal", branches: "All branches", summary: "Authorized by E.O. 10163, 25 Sep 1950; an E.O. amendment of 6 Aug 1996 added authorization based on mobilization.", devices: "Hourglass device (bronze 10 years, silver 20, gold 30); “M” device for mobilization; numerals for subsequent “M” awards.", links: [{ label: "TIOH — Armed Forces Reserve Medal", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=4&HeraldryId=15318&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "NCO Professional Development Ribbon", branches: "Army (CG list: “Army Noncommissioned Officer Professional Development Ribbon”)", summary: "Established under ARCOST, approved 10 Apr 1981 — the ribbon that tracks completed NCO professional development levels.", devices: "A numeral denotes the highest completed level of NCO development.", flag: "Criteria sentence not fetched in the research pass.", links: [{ label: "TIOH — Numerals (device page)", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=16&HeraldryId=15502&grp=2&menu=Uniformed%20Services&p=0&ps=24" }, TIOH_R] },
  { name: "Army Service Ribbon", branches: "Army (also CG list)", summary: "Established under ARCOST, approved 10 Apr 1981.", devices: "None in the fetched sources.", flag: "Criteria sentence not fetched in the research pass.", links: [TIOH_R] },
  { name: "Overseas Service Ribbon (Army)", branches: "Army (CG list: “Army Overseas Ribbon”)", summary: "Established under ARCOST, approved 10 Apr 1981.", devices: "Numerals for second and subsequent awards.", links: [TIOH_R] },
  { name: "Army Reserve Components Overseas Training Ribbon", branches: "Army", summary: "Established 11 Jul 1984 by the Secretary of the Army.", devices: "Numerals for subsequent awards.", links: [{ label: "TIOH — Army Reserve Components Overseas Training Ribbon", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=5&HeraldryId=15463&grp=4&menu=Decorations%20and%20Medals&p=0&ps=24" }] },
  { name: "Air Force Combat Readiness Medal", branches: "Air Force/DAF wear list (also Army list)", summary: "“The Combat Readiness Medal is awarded to members of the U.S. Air Force and Air Force Reserve for sustained individual combat or mission readiness or preparedness for direct weapon-system employment.” Authorized by the Secretary of the Air Force 9 Mar 1964, amended 28 Aug 1967; originally a personal decoration, its current status is an achievement/service medal.", links: [TIOH_CS] },
];

// ---------- Index-only finder entries (pack §2B) ----------

export type IndexEntry = { name: string; branches: string; ref: string; links: RefLink[] };

const ix = (name: string, branches: string, ref: string, links: RefLink[]): IndexEntry => ({ name, branches, ref, links });

export const FINDER_INDEX: IndexEntry[] = [
  // Personal decorations
  ix("Defense Distinguished Service Medal", "All branches", "TIOH Personal Decorations list", [TIOH_P]),
  ix("Defense Superior Service Medal", "All branches", "TIOH Personal Decorations list", [TIOH_P]),
  ix("Defense Meritorious Service Medal", "All branches", "TIOH Personal Decorations list", [TIOH_P]),
  ix("Joint Service Achievement Medal", "All branches", "TIOH Personal Decorations list", [TIOH_P]),
  ix("Combat Action Ribbon", "Navy / USMC / Coast Guard — no medal authorized", "NAVPERS 15665J Ch. 5 · MCO 1020.34H · COMDTINST M1650.25E Ch. 2 §16 (CG version)", [NAVY_CH5, MCPEL, CG_MANUAL]),
  ix("Air Force Combat Action Medal", "Army / DAF / CG lists", "TIOH Personal Decorations list · AFPC chart", [TIOH_P, AFPC_CHART]),
  ix("DOT Distinguished Service Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 2", [CG_MANUAL]),
  ix("Gold Lifesaving Medal", "Coast Guard / Navy non-military list", "COMDTINST M1650.25E Ch. 4", [CG_MANUAL]),
  ix("Silver Lifesaving Medal", "Coast Guard / Navy non-military list", "COMDTINST M1650.25E Ch. 4", [CG_MANUAL]),
  ix("Coast Guard Commendation Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 2 §13", [CG_MANUAL]),
  ix("Coast Guard Achievement Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 2 §14", [CG_MANUAL]),
  ix("Commandant's Letter of Commendation Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 2 §15", [CG_MANUAL]),
  // Unit awards
  ix("Presidential Unit Citation", "Army/Air Force, Navy/Marine Corps, and Coast Guard versions (all lists)", "TIOH Unit Awards list — devices: Army OLC on the emblem; USMC bronze star", [TIOH_U]),
  ix("Navy Unit Commendation", "Navy / USMC / CG lists", "TIOH Unit Awards list — USMC device: bronze star", [TIOH_U]),
  ix("Meritorious Unit Commendation (Navy/MC)", "Navy / USMC", "TIOH Unit Awards list", [TIOH_U]),
  ix("Air Force Gallant Unit Award / Gallant Unit Citation", "Air Force, Space Force", "TIOH Unit Awards list · AFPC chart", [TIOH_U, AFPC_CHART]),
  ix("Coast Guard Unit Commendation", "Coast Guard", "COMDTINST M1650.25E Ch. 3 §3", [CG_MANUAL]),
  ix("Coast Guard Meritorious Unit Commendation", "Coast Guard", "COMDTINST M1650.25E Ch. 3 §5", [CG_MANUAL]),
  ix("Coast Guard Meritorious Team Commendation", "Coast Guard", "COMDTINST M1650.25E Ch. 3 §7", [CG_MANUAL]),
  ix("Coast Guard “E” Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 3 §8", [CG_MANUAL]),
  ix("Air Force Meritorious Unit Award", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Outstanding Unit Award", "Air Force, Space Force", "AFPC chart · DAFI 36-2803 Table 2.4", [AFPC_CHART, DAFI]),
  ix("Air Force Organizational Excellence Award / Air and Space Organizational Excellence Award", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("USPHS Outstanding Unit Citation and USPHS Unit Commendation", "Navy list", "NAVPERS 15665J Art. 5306", [NAVY_CH5]),
  // Campaign / service
  ix("Selected Marine Corps Reserve Medal", "USMC / Navy / CG", "TIOH Campaign/Service list — USMC device: bronze star", [TIOH_CS]),
  ix("Marine Corps Expeditionary Medal", "USMC / CG lists", "TIOH Campaign/Service list — device: bronze star", [TIOH_CS]),
  ix("China Service Medal", "All lists", "TIOH Campaign/Service list — device: bronze star", [TIOH_CS]),
  ix("American Defense Service Medal", "All lists", "TIOH Campaign/Service list — Navy “A” device confirmed", [TIOH_CS]),
  ix("Women's Army Corps Service Medal", "Army", "TIOH Campaign/Service list", [TIOH_CS]),
  ix("American Campaign Medal", "All lists", "TIOH Campaign/Service list — device class: service stars", [TIOH_CS]),
  ix("Asiatic-Pacific Campaign Medal", "All lists", "TIOH Campaign/Service list — device class: service stars", [TIOH_CS]),
  ix("European-African-Middle Eastern Campaign Medal", "All lists", "TIOH Campaign/Service list — device class: service stars", [TIOH_CS]),
  ix("World War II Victory Medal", "All lists", "TIOH Campaign/Service list", [TIOH_CS]),
  ix("Navy Occupation Service Medal", "USMC / Navy / CG", "TIOH Campaign/Service list — EUROPE/ASIA clasps confirmed for USMC wear", [TIOH_CS]),
  ix("National Defense Service Medal", "All lists", "TIOH Campaign/Service list — device: service stars", [TIOH_CS]),
  ix("Korean Service Medal", "All lists", "TIOH Campaign/Service list — device: service stars", [TIOH_CS]),
  ix("Vietnam Service Medal", "All lists", "TIOH Campaign/Service list — device: service stars", [TIOH_CS]),
  ix("Global War on Terrorism Service Medal", "All lists", "TIOH Campaign/Service list", [TIOH_CS]),
  ix("Naval Reserve Meritorious Service Medal", "Navy / CG", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy Fleet Marine Force Ribbon", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy Expeditionary Medal", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Sea Service Deployment Ribbon", "USMC / Navy / CG (Army list: “Navy Sea Service Deployment Ribbon”)", "MCO 1020.34H · NAVPERS 15665J — device: bronze stars", [MCPEL, NAVY_CH5]),
  ix("Navy Arctic Service Ribbon", "Navy / USMC lists — ribbon only", "NAVPERS 15665J · MCO 1020.34H", [NAVY_CH5, MCPEL]),
  ix("Naval Reserve Sea Service Ribbon", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy and Marine Corps Overseas Service Ribbon", "Navy / USMC", "NAVPERS 15665J · MCO 1020.34H — device: bronze stars", [NAVY_CH5, MCPEL]),
  ix("Navy Recruiting Service Ribbon", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy Recruit Training Service Ribbon", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy Ceremonial Guard Service Ribbon", "Navy", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  ix("Navy Basic Military Training Honor Graduate Ribbon", "Navy chart only — not in the article-text lists", "NAVPERS 15665J graphic chart (conflicts with the articles; articles win)", [NAVY_CH5]),
  ix("Marine Corps Recruiting Ribbon", "USMC — ribbon only", "MCO 1020.34H — device: bronze stars", [MCPEL]),
  ix("Marine Corps Drill Instructor Ribbon", "USMC — ribbon only", "MCO 1020.34H — device: bronze stars", [MCPEL]),
  ix("Marine Security Guard Ribbon", "USMC — ribbon only", "MCO 1020.34H — device: bronze stars", [MCPEL]),
  ix("Marine Corps Combat Instructor Ribbon", "USMC — ribbon only", "MCO 1020.34H — device: bronze stars", [MCPEL]),
  ix("Marine Corps Reserve Ribbon", "USMC — ribbon only (obsolete)", "MCO 1020.34H — device: bronze stars", [MCPEL]),
  ix("Coast Guard Special Operations Service Ribbon", "Army / USMC / Navy / CG", "TIOH Ribbons list · COMDTINST M1650.25E Ch. 5 §18", [TIOH_R, CG_MANUAL]),
  ix("Coast Guard Good Conduct Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §1", [CG_MANUAL]),
  ix("Coast Guard Reserve Good Conduct Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §2", [CG_MANUAL]),
  ix("Coast Guard Enlisted Person of the Year Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §3", [CG_MANUAL]),
  ix("Coast Guard Arctic Service Medal", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §6", [CG_MANUAL]),
  ix("Coast Guard Sea Service Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §19", [CG_MANUAL]),
  ix("Coast Guard Restricted Duty Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §20", [CG_MANUAL]),
  ix("Coast Guard Overseas Service Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §21", [CG_MANUAL]),
  ix("Coast Guard Basic Training Honor Graduate Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §22", [CG_MANUAL]),
  ix("Coast Guard Recruiting Service Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 5 §23", [CG_MANUAL]),
  ix("Air Reserve Forces Meritorious Service Medal", "DAF / CG", "AFPC chart", [AFPC_CHART]),
  ix("Outstanding Airman of the Year Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Recognition Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Remote Combat Effects Campaign Medal", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Campaign Medal", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Nuclear Deterrence Operations Service Medal", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Overseas Ribbon — Short Tour / Long Tour", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Expeditionary Service Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Longevity Service Award", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Developmental Special Duty Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air Force Basic Military Training Instructor Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air Force Recruiter Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("USAF NCO PME Graduate Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Basic Military Training Honor Graduate Ribbon (DAF)", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Small Arms Expert Marksmanship Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Air and Space Training Ribbon", "Air Force, Space Force", "AFPC chart", [AFPC_CHART]),
  ix("Navy Rifle Marksmanship Ribbon", "Navy", "NAVPERS 15665J Art. 5310", [NAVY_CH5]),
  ix("Navy Pistol Marksmanship Ribbon", "Navy", "NAVPERS 15665J Art. 5310", [NAVY_CH5]),
  ix("Expert Rifleman Medal (Navy)", "Navy", "NAVPERS 15665J Art. 5310", [NAVY_CH5]),
  ix("Expert Pistol Shot Medal (Navy)", "Navy", "NAVPERS 15665J Art. 5310", [NAVY_CH5]),
  ix("Coast Guard Expert Rifleman Medal/Ribbon", "Coast Guard", "COMDTINST M1650.25E Encl. 22", [CG_MANUAL]),
  ix("Coast Guard Expert Pistol Shot Medal/Ribbon", "Coast Guard", "COMDTINST M1650.25E Encl. 22", [CG_MANUAL]),
  ix("DOT 9-11 Medal", "Coast Guard — no longer awarded", "COMDTINST M1650.25E Ch. 6 §8", [CG_MANUAL]),
  ix("DOT 9-11 Ribbon", "Coast Guard", "COMDTINST M1650.25E Ch. 6 §9", [CG_MANUAL]),
  ix("DOT Guardian Medal", "Coast Guard — historical", "COMDTINST M1650.25E Ch. 6 §7", [CG_MANUAL]),
  ix("Coast Guard Bicentennial Unit Commendation", "Coast Guard", "COMDTINST M1650.25E Encl. 22 only in this pass", [CG_MANUAL]),
  ix("U.S. Antarctic Expedition Medal", "Coast Guard list", "COMDTINST M1650.25E", [CG_MANUAL]),
  ix("Naval Reserve Medal", "Navy / CG (obsolete)", "NAVPERS 15665J Ch. 5", [NAVY_CH5]),
  // Foreign / non-U.S. awards — reference entries only
  ix("Philippine Defense Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("Philippine Liberation Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("Philippine Independence Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("Philippine Presidential Unit Citation", "Foreign award — reference only", "Branch lists in the precedence section", [DA_PAM]),
  ix("Republic of Korea Presidential Unit Citation", "Foreign award — reference only", "Branch lists in the precedence section", [DA_PAM]),
  ix("Republic of Korea War Service Medal / Republic of Korea Service Medal", "Foreign award — reference only (name differs by service list: CG prints “War Service,” AFPC prints “Service”)", "Branch lists in the precedence section", [CG_MANUAL, AFPC_CHART]),
  ix("Republic of Vietnam Presidential Unit Citation", "Foreign award — reference only", "Branch lists in the precedence section", [DA_PAM]),
  ix("Republic of Vietnam Gallantry Cross Unit Citation / RVN Gallantry Cross with Palm", "Foreign award — reference only", "Branch lists in the precedence section", [DA_PAM]),
  ix("Republic of Vietnam Civil Actions Unit Citation", "Foreign award — reference only", "Branch lists in the precedence section", [DA_PAM]),
  ix("Republic of Vietnam Campaign Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("United Nations Service Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("United Nations Medal", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("NATO Medal and its variants (NATO Meritorious Service Medal; Yugoslavia; Kosovo; Article 5 Eagle Assist; Article 5 Active Endeavour; Non-Article 5 Balkans; Non-Article 5 ISAF)", "Foreign award — reference only", "DAF list in the precedence section", [AFPC_CHART]),
  ix("Multinational Force and Observers Medal", "Foreign award — reference only", "Branch lists in the precedence section", [TIOH_CS]),
  ix("Inter-American Defense Board Medal", "Foreign award — reference only", "Branch lists in the precedence section", [TIOH_CS]),
  ix("Kuwait Liberation Medal (Saudi Arabia)", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
  ix("Kuwait Liberation Medal (Kuwait)", "Foreign award — reference only", "Branch lists in the precedence section", [AFPC_CHART]),
];

// ---------- Device rules by branch ----------

export const DEVICE_RULES: { branch: string; body: string; links: RefLink[] }[] = [
  {
    branch: "Army",
    body: "Second and subsequent awards of decorations and unit awards = bronze oak leaf cluster (OLC); a silver OLC replaces five bronze. “V” device where authorized for valor (maximum one per ribbon). Campaign/service medals take bronze/silver service stars (silver = five bronze). Numerals denote subsequent awards/levels where authorized (Air Medal, Overseas Service Ribbon, Army Reserve Components Overseas Training Ribbon, NCO Professional Development Ribbon level, Multinational Force and Observers). (DA PAM 670-1, para 22-11.)",
    links: [
      { label: "TIOH — Oak Leaf Clusters", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=16&HeraldryId=15501" },
      { label: "TIOH — “V” Device", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=16&HeraldryId=15503&grp=2&menu=Uniformed%20Services&ps=24" },
      { label: "TIOH — Service Stars", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=16&HeraldryId=15512&grp=2&menu=Uniformed+Services&ps=24" },
      { label: "TIOH — Good Conduct Clasps", url: "https://tioh.army.mil/Catalog/Heraldry.aspx?CategoryId=16&HeraldryId=15505&grp=2&menu=Uniformed%20Services&p=0&ps=24" },
    ],
  },
  {
    branch: "Marine Corps",
    body: "Second/subsequent personal decorations = gold star (a silver star replaces five gold). Bronze stars denote second/subsequent awards or major engagements on the 29 awards listed in para 5401.4. Bronze “V” (Combat Distinguishing Device) only on: Legion of Merit, Distinguished Flying Cross, Bronze Star Medal, Air Medal, Joint Service Commendation Medal, Navy/MC Commendation Medal, Navy/MC Achievement Medal. Oak leaf clusters only when a second/subsequent personal decoration or the JMUA is bestowed by DoD, the Army, or the Air Force. (MCO 1020.34H, paras 5401–5404.)",
    links: [MCPEL],
  },
  {
    branch: "Navy",
    body: "Gold stars for second/subsequent awards of any Navy military decoration (silver star = five gold/bronze); oak leaf clusters (large) for second/subsequent awards of the Defense Distinguished Service Medal, Defense Superior Service Medal, Defense Meritorious Service Medal, Joint Service Commendation Medal, Joint Service Achievement Medal, and Joint Meritorious Unit Award (silver OLC = five bronze); bronze stars (3/16\") for second/subsequent awards of most unit, service, and campaign awards. “V” device on the post-1974 list (Distinguished Flying Cross, Bronze Star Medal, Air Medal, Joint Service Commendation Medal, Navy Commendation Medal — wear only one “V”). “C” device on decorations awarded after 7 Jan 2016 (list in Art. 5318); “R” device after 6 Jan 2016 (list in Art. 5319 — wear only one “R”). Also: “A” device on the American Defense Service Medal; Antarctica “Wintered Over” clasp; Armed Forces Reserve Medal hourglass and “M” devices. (NAVPERS 15665J, Arts. 5316–5319.)",
    links: [NAVY_CH5],
  },
  {
    branch: "Air Force / Space Force",
    body: "Oak leaf clusters on personal decorations per DAFI 36-2803 Table 2.3. “V” device: Table 2.3 marks DFC, BSM, AM, Air and Space Commendation, Air and Space Achievement (the Achievement “V” only for 11 Jan 1996–6 Jan 2016); AFPC states the “V” is authorized on the Distinguished Flying Cross, Bronze Star Medal, Air Medal, and Air Force Commendation Medal effective Jan 7, 2016 (“not an all-inclusive list”) — for valor: heroism above normal expectation while engaged in direct combat, with exposure to enemy hostilities and personal risk. “C” device: Table 2.3 marks DSM, LOM, DFC, AM, Commendation, Achievement — service/achievement under combat conditions on/after 7 Jan 2016, member personally exposed to hostile action or significant risk; the “C” is NOT authorized on the Bronze Star Medal or the Meritorious Service Medal. “R” device: Table 2.3 marks LOM, MSM, Commendation, Achievement — direct hands-on employment of a weapon system with direct/immediate impact on an operation, without personal exposure (RPA, cyber, space, ISR), on/after 7 Jan 2016; not authorized on any other ribbon or medal. A bronze “V” on the Air and Space Outstanding Unit Award / Organizational Excellence Award applies only to 15 Nov 1961–1 Jan 2014.",
    links: [DAFI, AFPC_CHART],
  },
  {
    branch: "Coast Guard",
    body: "Per-award device codes exist in COMDTINST M1650.25E Table 1-1, but that table's text could not be reliably read in the research pass — Coast Guard per-award devices are NOT CONFIRMED and are not published here. Check Table 1-1 of the manual directly. (The marksmanship structure — Expert medal vs. sharpshooter/marksman ribbons — is confirmed at Enclosure (22) level only.)",
    links: [CG_MANUAL],
  },
];

// ---------- Vendors (commercial routing) ----------

export type Vendor = {
  name: string;
  note: string;
  searchPattern?: string;
  searchNote?: string;
  builder?: { label: string; url: string };
  homepage: string;
  flag?: string;
};

export const VENDORS: Vendor[] = [
  {
    name: "Medals of America",
    note: "Veteran-owned company serving the military community since 1976 (its own blog); racks “100% hand-crafted in the USA” and “inspected by a member of our veteran staff” before shipping (its own rack-builder page). A real vendor — and a different business from USAMM below.",
    searchPattern: "https://www.medalsofamerica.com/search?q=",
    searchNote: "Search pattern verified Nov 2026 — the URL carries the query; product rendering behind the search page was not confirmed in the check, so results load on the vendor's site.",
    builder: { label: "Ribbon Rack Builder (RibbonSelect)", url: "https://www.medalsofamerica.com/RibbonSelect.aspx" },
    homepage: "https://www.medalsofamerica.com",
  },
  {
    name: "USAMM — USA Military Medals",
    note: "“USAMM is the Armed Forces Super Store specializing in military medals, ribbons, name tapes, rank insignia, uniforms, and accessories for all U.S. military branches” (its own site description). A different business from Medals of America above — the two are listed separately, under their own names.",
    searchPattern: "https://www.usamm.com/search?q=",
    searchNote: "Search pattern verified Nov 2026 (“Search: 1002 results found for 'Bronze Star'” — the site's own loose-match count).",
    builder: { label: "EZ Rack Builder", url: "https://www.usamm.com/pages/ezrackbuilder" },
    homepage: "https://www.usamm.com",
  },
  {
    name: "Vanguard Industries",
    note: "The insignia manufacturer/supplier storefront (vanguardmil.com) — product search for all branches. Rack building: verified for Civil Air Patrol only, via a builder that links to USAMM's EZ Rack Builder; no general military rack-builder page on vanguardmil.com was found.",
    searchPattern: "https://www.vanguardmil.com/search?q=",
    searchNote: "Search pattern verified Nov 2026 (“Search: 594 results found for 'Bronze Star'”).",
    builder: { label: "EZ Rack Builder — Civil Air Patrol (links to USAMM's builder)", url: "https://www.vanguardmil.com/pages/ez-rack-builder-cap" },
    homepage: "https://www.vanguardmil.com",
  },
  {
    name: "Saunders Military Insignia",
    note: "“As one of the oldest military insignia providers, we have the widest variety of military memorabilia dating from World War II to the present day” (its own homepage) — H.J. Saunders U.S. Military Insignia, Naples, Florida, serving collectors, active military, veterans, and their families. Product search/catalog only (crests, patches, rank, medals, ribbons) — no build-your-rack tool. Note the domain: saundersinsignia.com.",
    searchPattern: "https://saundersinsignia.com/search?q=",
    searchNote: "Search pattern verified Nov 2026 (“Search: 1000 results found for 'Bronze Star'”).",
    homepage: "https://saundersinsignia.com",
  },
  {
    name: "Marlow White",
    note: "Marlow White Uniforms, Inc., Leavenworth, Kansas — a uniform maker with a dedicated Awards Department (“140+ Years of Quality Uniforms”). Its Award Builder builds ribbon, mini-medal, and full-size sets at once; route via the Awards page's Award Builder link (builder session URLs are not stable links). Per its own Help FAQ, Marlow White does not make thin ribbons.",
    searchPattern: "https://www.marlowwhite.com/catalogsearch/result/?q=",
    searchNote: "Search pattern verified Nov 2026 (results page title carries the query).",
    builder: { label: "Award Builder (via the Awards & Decorations page)", url: "https://www.marlowwhite.com/awards-decorations" },
    homepage: "https://www.marlowwhite.com",
  },
  {
    name: "UltraThin",
    note: "“Ultra Thin is the original custom thin ribbon set… the thinnest, lightest, detachable ribbon set available” (its own About page) — a full-service thin-ribbon company covering the five armed forces plus Public Health Service, NOAA, Civil Air Patrol, Coast Guard Auxiliary, Merchant Marine, and National/State Guard ribbons. A distinct business from SuperThin Ribbons below, despite the near-identical names.",
    flag: "No site-search pattern could be verified, and the vendor's direct rack-builder link returned 404 in the research check — route via the homepage/help pages and navigate or contact the vendor from there.",
    builder: { label: "Build Your Rack — help page", url: "https://www.ultrathin.com/ultrathin/help.htm" },
    homepage: "https://www.ultrathin.com",
  },
  {
    name: "SuperThin Ribbons",
    note: "“SuperThin Ribbons is a Native American female-owned small business located in Wichita Falls, Tx. We started making Thin Ribbons and Medals in our kitchen in 1998… Ribbons and medals are the only thing we make.” (its own homepage). Distinct from UltraThin above.",
    flag: "No search pattern is confirmed, and the rack builder's own URL was not exposed in the research check — the homepage carries the “Select Service → Build Your Rack” flow; start there.",
    homepage: "https://superthinribbons.com/",
  },
];

export const RIBBONS_ORDERING_NOTE =
  "A vendor's presence here is not an endorsement and not a claim that its products are regulation — verify items against your service's uniform regulation, and buy only awards you have earned. Note on names: “Medals USA” is not a vendor. Medals of America and USAMM (USA Military Medals) are two distinct real businesses, listed above under their own names — and one similar-looking domain is a parked page with no store behind it, so it is deliberately not linked anywhere in this app.";
