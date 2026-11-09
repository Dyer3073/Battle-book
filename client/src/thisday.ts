// This Day in Military History — the pack's 90-entry dated calendar,
// the floating Memorial Day observance, and the verified per-branch
// history routes for days with no entry.
//
// Source file: ~/workspace/military-app/this-day/this-day.md — every
// title, summary, branch, category, source name, and URL below is the
// pack's, transcribed verbatim. No dates or facts were added.
//
// Sourcing cautions honored (pack, Section 3):
// - Feb 15 (USS Maine): the pack's CHIPS source URL carries an expiring
//   session token and returned a "Request Rejected" page when
//   re-verified at build time (Nov 2026), so — exactly as the pack
//   directs — that card's source link routes to the NHHC entry point
//   from the pack's Section 2 instead, with the substitution noted on
//   the entry itself.
// - Feb 19 / Mar 26 (Iwo Jima): the USMCU lecture-notes PDF URL
//   contains a literal space in the pack; it is stored URL-encoded
//   (%20), as the pack directs.
// - The Oct 13 Navy birthday CHIPS URL is clean (no token) and ships
//   verbatim, as the pack states.
// - No "today in history" URL was constructed or guessed anywhere: the
//   branch routes below are the pack's verified Section 2 entry points
//   only, and the pack's honesty note about the daily-page URLs it
//   could not capture is carried in BRANCH_ROUTES_NOTE.

export type ThisDayCategory =
  | "Battle"
  | "First"
  | "Medal of Honor action"
  | "Milestone"
  | "Birth of a unit or branch";

/** A deep link into existing Battle Book content, from the pack's
 * "App link" column. `cardTitle` is the target card's CardTools title
 * (scrolled to via its data-card-anchor); `anchor` is a section
 * aria-label (scrolled to via the Guided Paths anchor mechanism). */
export type ThisDayAppLink = {
  /** The pack's App link text, e.g. "War Stories — Chapman". */
  label: string;
  /** Target view key (an App View). */
  view: string;
  cardTitle?: string;
  anchor?: string;
};

export type ThisDayEntry = {
  /** "MM-DD" for dated entries; null for the floating Memorial Day entry. */
  monthDay: string | null;
  /** Set only on the floating entry: observed the last Monday in May. */
  floating?: "memorial-day";
  year: number;
  /** Overrides the plain year where the pack qualifies it ("1868 (origin)"). */
  yearLabel?: string;
  branch: string;
  category: ThisDayCategory;
  title: string;
  summary: string;
  appLink?: ThisDayAppLink;
  source: string;
  sourceUrl: string;
  /** A second source link where the pack cites two (Oct 7 only). */
  sourceUrl2?: { label: string; url: string };
  /** A sourcing note rendered on the card (Feb 15 substitution only). */
  sourceNote?: string;
};

const WAR_STORIES = "warstories";

function mohLink(name: string, profileName: string): ThisDayAppLink {
  return {
    label: `War Stories — ${name}`,
    view: WAR_STORIES,
    cardTitle: `Medal of Honor — ${profileName}`,
  };
}

export const THIS_DAY_ENTRIES: ThisDayEntry[] = [
  // ------------------------------ January ------------------------------
  {
    monthDay: "01-01",
    year: 1863,
    branch: "All",
    category: "Milestone",
    title: "Emancipation Proclamation takes effect",
    summary:
      "President Lincoln's proclamation declaring freedom for enslaved people in the rebellious states took effect, and Black soldiers were authorized to enlist in the Union Army — reshaping both the war and the force that fought it.",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/milestone-documents/emancipation-proclamation",
  },
  {
    monthDay: "01-17",
    year: 1991,
    branch: "Joint",
    category: "Battle",
    title: "Desert Storm air campaign begins",
    summary:
      "Coalition aircraft opened the air campaign to liberate Kuwait, starting a 38-day air phase before any ground offensive.",
    source: "U.S. Army (Redstone Arsenal history)",
    sourceUrl: "https://history.redstone.army.mil/desert-storm-role.html",
  },
  {
    monthDay: "01-27",
    year: 1973,
    branch: "Joint",
    category: "Milestone",
    title: "Paris Peace Accords signed",
    summary:
      "The agreement ended direct U.S. combat involvement in Vietnam and provided for the release of American prisoners of war.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/263625/indomitable_valor_special_forces_heroism_during_tet_offensive",
  },
  {
    monthDay: "01-28",
    year: 1915,
    branch: "Coast Guard",
    category: "Birth of a unit or branch",
    title: "The modern Coast Guard is created",
    summary:
      "The Revenue Cutter Service and the U.S. Life-Saving Service merged to form the U.S. Coast Guard.",
    source: "U.S. Coast Guard Historian (Complete Time Line)",
    sourceUrl: "https://www.history.uscg.mil/Complete-Time-Line/Time-Line-1900-2000/",
  },
  {
    monthDay: "01-30",
    year: 1968,
    branch: "Joint",
    category: "Battle",
    title: "Tet Offensive begins",
    summary:
      "North Vietnamese and Viet Cong forces launched coordinated attacks across South Vietnam during the Tet holiday — a turning point of the Vietnam War.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/6995/a_new_year_and_a_new_war_the_tet_offensive_1968",
  },
  // ------------------------------ February ------------------------------
  {
    monthDay: "02-03",
    year: 1943,
    branch: "Army",
    category: "Milestone",
    title: "The Four Chaplains",
    summary:
      "Four Army chaplains aboard the torpedoed transport Dorchester gave their life jackets to soldiers and went down with the ship; their selflessness is still honored across the services.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/282799/fort_drum_chaplains_draw_inspiration_from_selfless_actions_of_the_four_chaplains",
  },
  {
    monthDay: "02-15",
    year: 1898,
    branch: "Navy",
    category: "Milestone",
    title: "USS Maine lost in Havana Harbor",
    summary:
      "The battleship Maine sank in Havana Harbor; “Remember the Maine” became the rallying cry as the nation moved toward war with Spain.",
    // Pack caution honored: the original CHIPS link carried a session
    // token and no longer resolves, so this routes to the NHHC entry
    // point from the pack's Section 2, as the pack directs.
    source: "Naval History and Heritage Command (NHHC)",
    sourceUrl:
      "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1941/pearl-harbor.html",
    sourceNote:
      "The research pack's original source link (CHIPS, the Dept. of the Navy magazine) carried an expiring session token and no longer resolves, so this card routes to the NHHC entry point instead — the fallback the pack itself specifies.",
  },
  {
    monthDay: "02-19",
    year: 1945,
    branch: "Marine Corps / Navy",
    category: "Battle",
    title: "Marines land on Iwo Jima",
    summary:
      "Three Marine divisions went ashore in Operation Detachment to seize the island's airfields, beginning one of the Corps' defining battles.",
    source: "Marine Corps History Division / Marine Corps University Press (Keystone Battle Brief)",
    sourceUrl: "https://www.usmcu.edu/Portals/218/Iwo%20Jima%20Lecture%20Notes.pdf",
  },
  {
    monthDay: "02-22",
    year: 1932,
    branch: "Army",
    category: "Milestone",
    title: "Purple Heart revived",
    summary:
      "The Army re-established the Purple Heart on the bicentennial of George Washington's birth, reviving his Badge of Military Merit for service members wounded in action.",
    appLink: { label: "Benefits", view: "benefits" },
    source: "U.S. Army Center of Military History",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Purple-Heart/",
  },
  {
    monthDay: "02-23",
    year: 1945,
    branch: "Marine Corps",
    category: "Milestone",
    title: "Flag raised on Mount Suribachi",
    summary:
      "Marines raised the U.S. flag atop Mount Suribachi on Iwo Jima; the second raising, photographed by Joe Rosenthal, became one of the most famous images of the Second World War.",
    source: "Marine Corps History Division / Marine Corps University Press",
    sourceUrl:
      "https://www.usmcu.edu/Outreach/Marine-Corps-University-Press/Books-by-topic/MCUP-Titles-A-Z/Always-Faithful/Always-Faithful-Chapter-26/",
  },
  {
    monthDay: "02-24",
    year: 1991,
    branch: "Joint",
    category: "Battle",
    title: "Desert Storm ground offensive begins",
    summary:
      "Coalition ground forces crossed into Kuwait and Iraq; Kuwait City was liberated within days.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/292628/35_years_later_a_look_back_fort_mccoys_impact_supporting_operation_desert_storm",
  },
  {
    monthDay: "02-28",
    year: 1991,
    branch: "Joint",
    category: "Milestone",
    title: "Ceasefire ends Desert Storm combat",
    summary:
      "A ceasefire took effect 100 hours after the ground offensive began, with Kuwait liberated.",
    source:
      "U.S. Army Center of Military History (Army History and Heritage, via Federal Depository Library)",
    sourceUrl:
      "https://permanent.fdlp.gov/gpo193209/history.army.mil/html/books/069/69-6-1/Army_History_and_Heritage_07.pdf",
  },
  // ------------------------------- March -------------------------------
  {
    monthDay: "03-04",
    year: 2002,
    branch: "Air Force",
    category: "Medal of Honor action",
    title: "John Chapman at Takur Ghar",
    summary:
      "Air Force Technical Sergeant John Chapman fought alone against enemy fighters on an Afghan mountaintop to protect his SEAL teammates; he was posthumously awarded the Medal of Honor.",
    appLink: mohLink("Chapman", "John A. Chapman"),
    source: "U.S. Air Force",
    sourceUrl: "https://www.airforcemedicine.af.mil/News/Display/Article/1608337/airman-to-be-awarded-medal-of-honor/",
  },
  {
    monthDay: "03-04",
    year: 2002,
    branch: "Navy",
    category: "Medal of Honor action",
    title: "Britt Slabinski at Takur Ghar",
    summary:
      "Navy Senior Chief Britt Slabinski led the rescue force back onto the same Afghan mountaintop under fire to recover his teammates; he received the Medal of Honor for that day.",
    appLink: mohLink("Slabinski", "Britt K. Slabinski"),
    source: "U.S. Navy",
    sourceUrl:
      "https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/2248003/president-trump-awards-medal-of-honor-to-retired-navy-seal-for-heroic-actions-i/",
  },
  {
    monthDay: "03-08",
    year: 1965,
    branch: "Marine Corps",
    category: "Milestone",
    title: "Marines land at Da Nang",
    summary:
      "The 9th Marine Expeditionary Brigade came ashore at Da Nang, South Vietnam — the first major U.S. ground combat deployment of the Vietnam War.",
    source: "Marine Corps History Division (official chronology publication)",
    sourceUrl:
      "https://web-wp.archive.org/web/20250905020615/https://web.archive.org/web/20080815024522/http://www.marines.mil/news/publications/Documents/A%20Chronology%20Of%20The%20UNITED%20STATES%20MARINE%20CORPS%201965-1969%20%20PCN%2019000318100.pdf",
  },
  {
    monthDay: "03-25",
    year: 1863,
    branch: "All",
    category: "Milestone",
    title: "Medal of Honor Day",
    summary:
      "The first Medals of Honor were presented on March 25, 1863, to six Union soldiers of Andrews' Raiders; the date is now observed as National Medal of Honor Day.",
    appLink: { label: "War Stories — Medal of Honor profiles", view: WAR_STORIES, anchor: "Medal of Honor" },
    source: "U.S. Army",
    sourceUrl: "http://www.army.mil/article/36291/Medal_of_Honor_Day__U_S__Army_Remembers_Heroes/",
  },
  {
    monthDay: "03-26",
    year: 1945,
    branch: "Marine Corps",
    category: "Battle",
    title: "Iwo Jima declared secure",
    summary:
      "After five weeks of fighting, Iwo Jima was declared secure; its airfields soon supported bombers bound for Japan and gave damaged aircraft a place to land.",
    source:
      "Marine Corps History Division / Marine Corps University Press (Keystone Battle Brief, dated 19 Feb – 26 Mar 1945)",
    sourceUrl: "https://www.usmcu.edu/Portals/218/Iwo%20Jima%20Lecture%20Notes.pdf",
  },
  {
    monthDay: "03-29",
    year: 1973,
    branch: "Joint",
    category: "Milestone",
    title: "Last U.S. combat troops leave Vietnam",
    summary:
      "Military Assistance Command, Vietnam was disestablished and the last American combat troops departed; March 29 is now National Vietnam War Veterans Day.",
    source: "U.S. Department of Veterans Affairs (VA News)",
    sourceUrl: "https://news.va.gov/101565/national-vietnam-war-veterans-day-march-29/",
  },
  // ------------------------------- April -------------------------------
  {
    monthDay: "04-01",
    year: 1945,
    branch: "Army / Marine Corps / Navy",
    category: "Battle",
    title: "Landings on Okinawa",
    summary:
      "The joint Tenth Army went ashore on Okinawa in Operation Iceberg, the largest amphibious operation of the Pacific war and its last great battle.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/255269/7id_and_operation_iceberg_it_all_began_with_the_invasion_of_okinawa_on_april_1_1945",
  },
  {
    monthDay: "04-06",
    year: 1917,
    branch: "All",
    category: "Milestone",
    title: "America enters World War I",
    summary:
      "Congress declared war on Germany, beginning the nation's full entry into the First World War.",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/press/press-releases/2017/nr17-45",
  },
  {
    monthDay: "04-09",
    year: 1942,
    branch: "Army",
    category: "Milestone",
    title: "The defense of Bataan ends",
    summary:
      "After a 99-day defense of the Bataan Peninsula, U.S. and Filipino forces were surrendered; the day is remembered for their endurance against impossible odds.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/290116/history_of_the_bataan_death_march",
  },
  {
    monthDay: "04-18",
    year: 1942,
    branch: "Army Air Forces / Navy",
    category: "First",
    title: "The Doolittle Raid",
    summary:
      "Sixteen Army B-25 bombers launched from the carrier Hornet struck Tokyo — the first U.S. air raid on the Japanese home islands.",
    source: "U.S. Naval Institute, Naval History Magazine",
    sourceUrl: "https://www.usni.org/magazines/naval-history-magazine/2015/april/navy-targets-tokyo",
  },
  {
    monthDay: "04-19",
    year: 1775,
    branch: "Army (National Guard)",
    category: "Battle",
    title: "Lexington and Concord",
    summary:
      "Colonial militia faced British regulars at Lexington and Concord — “the shot heard 'round the world” — opening the Revolutionary War; today's National Guard traces its lineage to those militia companies.",
    source: "U.S. Army (Center of Military History historian)",
    sourceUrl: "https://www.army.mil/article/284383/national_guard_units_trace_history_to_battles_of_lexington_concord",
  },
  {
    monthDay: "04-25",
    year: 1898,
    branch: "All",
    category: "Milestone",
    title: "War declared on Spain",
    summary:
      "Congress declared war following the loss of USS Maine, beginning the Spanish-American War.",
    source: "U.S. Naval Institute",
    sourceUrl: "https://www.usni.org/remember-maine-hell-spain",
  },
  {
    monthDay: "04-25",
    year: 1945,
    branch: "Army",
    category: "Milestone",
    title: "Elbe Day",
    summary:
      "U.S. and Soviet patrols met at Torgau on the Elbe River, linking the Western and Eastern Fronts inside Germany.",
    source: "U.S. Army Corps of Engineers / DoD News",
    sourceUrl: "http://www.saw.usace.army.mil/Media/News-Stories/Article/587943/ve-day-marked-end-of-long-road-for-world-war-ii-troops/",
  },
  {
    monthDay: "04-30",
    year: 1975,
    branch: "Marine Corps / Navy / Air Force",
    category: "Milestone",
    title: "Operation Frequent Wind ends",
    summary:
      "The last helicopter lifted the final Marine security guards from the U.S. Embassy roof in Saigon, closing the largest helicopter evacuation in history — 1,373 Americans and 5,595 Vietnamese and third-country nationals flown out.",
    source: "U.S. Department of Defense",
    sourceUrl: "https://www.defense.gov/News/Feature-Stories/Story/Article/4134061/a-look-back-at-operation-frequent-wind-50-years-later/",
  },
  // -------------------------------- May --------------------------------
  {
    monthDay: "05-03",
    year: 1783,
    branch: "Army",
    category: "Milestone",
    title: "First Badge of Military Merit awards",
    summary:
      "General Washington presented the Badge of Military Merit — forerunner of the Purple Heart — to three Continental soldiers at Newburgh, New York, among the first U.S. military decorations.",
    appLink: { label: "Benefits", view: "benefits" },
    source: "U.S. Army Center of Military History",
    sourceUrl: "http://history.army.mil/Research/Reference-Topics/Purple-Heart/Newburgh-1783/",
  },
  {
    monthDay: "05-04",
    year: 1942,
    branch: "Navy",
    category: "Battle",
    title: "Battle of the Coral Sea begins",
    summary:
      "U.S. and Japanese carrier forces clashed in the Coral Sea (May 4–8), a carrier-versus-carrier battle that turned back a Japanese move against Port Moresby.",
    source: "U.S. Navy (Commander, Naval Surface Force Atlantic — official combat chronology)",
    sourceUrl: "https://www.surflant.usff.navy.mil/Portals/44/DesRon%202%20Combat%20Chronology_508-compliant.pdf",
  },
  {
    monthDay: "05-05",
    year: 1945,
    branch: "Army",
    category: "Medal of Honor action",
    title: "Desmond Doss on Okinawa",
    summary:
      "Conscientious-objector medic Desmond Doss repeatedly lowered wounded soldiers down the Maeda Escarpment under fire; he received the Medal of Honor without ever carrying a weapon.",
    appLink: mohLink("Doss", "Desmond T. Doss"),
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article-amp/176953/how_do_you_thank_a_hero_tell_his_story_again_and_again",
  },
  {
    monthDay: "05-07",
    year: 1945,
    branch: "All",
    category: "Milestone",
    title: "Germany surrenders at Reims",
    summary:
      "German representatives signed the unconditional surrender in France, to take effect the following day.",
    source: "U.S. Army Medical Department Center of History and Heritage",
    sourceUrl: "https://achh.army.mil/history/book-wwii-neuropsychiatryinwwiivoli-appendixf/",
  },
  {
    monthDay: "05-08",
    year: 1945,
    branch: "All",
    category: "Milestone",
    title: "V-E Day",
    summary:
      "Victory in Europe Day marked the end of the war in Europe; American forces turned fully toward the Pacific.",
    source: "U.S. Army Medical Department Center of History and Heritage",
    sourceUrl: "https://achh.army.mil/history/book-wwii-neuropsychiatryinwwiivoli-appendixf/",
  },
  {
    monthDay: "05-30",
    year: 1868,
    branch: "All",
    category: "Milestone",
    title: "First national Decoration Day",
    summary:
      "The first national observance honoring fallen Union soldiers was held at Arlington on May 30, 1868 — the observance that grew into Memorial Day.",
    source: "VA National Cemetery Administration",
    sourceUrl: "https://cem.va.gov/history/memorial-day-history.asp",
  },
  {
    monthDay: null,
    floating: "memorial-day",
    year: 1868,
    yearLabel: "1868 (origin)",
    branch: "All",
    category: "Milestone",
    title: "Memorial Day",
    summary:
      "The federal holiday honoring Americans who died in military service, rooted in the Decoration Day observances that began in 1868.",
    source: "VA National Cemetery Administration",
    sourceUrl: "https://cem.va.gov/history/memorial-day-history.asp",
  },
  // -------------------------------- June -------------------------------
  {
    monthDay: "06-04",
    year: 1942,
    branch: "Navy",
    category: "Battle",
    title: "Battle of Midway begins",
    summary:
      "U.S. carrier forces ambushed the Japanese fleet at Midway, sinking four enemy carriers in the turning point of the Pacific war.",
    source: "U.S. Navy",
    sourceUrl: "https://www.navy.mil/Press-Office/News-Stories/Article/2249643/gumption-cunning-and-spirit-winning-the-battle-of-midway/",
  },
  {
    monthDay: "06-06",
    year: 1944,
    branch: "Joint",
    category: "Battle",
    title: "D-Day",
    summary:
      "Allied forces landed in Normandy in Operation Overlord, the largest seaborne invasion in history.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/d-day/media.html",
  },
  {
    monthDay: "06-12",
    year: 1948,
    branch: "All",
    category: "Milestone",
    title: "Women's Armed Services Integration Act",
    summary:
      "The act signed this day gave women permanent status in the regular and reserve forces.",
    source: "U.S. Army (Army Women's Museum)",
    sourceUrl: "https://www.army.mil/article-amp/267576/army_womens_museum_celebrates_womens_armed_services_integration_act",
  },
  {
    monthDay: "06-14",
    year: 1775,
    branch: "Army",
    category: "Birth of a unit or branch",
    title: "U.S. Army birthday",
    summary:
      "The Continental Congress authorized the first Continental infantry companies — the founding of the U.S. Army.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article-amp/277342/army_celebrates_249_years",
  },
  {
    monthDay: "06-20",
    year: 1941,
    branch: "Air Force (Army Air Forces)",
    category: "Milestone",
    title: "Army Air Forces established",
    summary:
      "The Army Air Corps became the Army Air Forces, a major step on the road to an independent Air Force.",
    source: "HQ U.S. Air Force History (via Air Education and Training Command)",
    sourceUrl: "https://www.aetc.af.mil/Portals/88/Documents/history/AFD-070208-052.pdf?ver=2016-01-12-160014-563",
  },
  {
    monthDay: "06-22",
    year: 1944,
    branch: "All",
    category: "Milestone",
    title: "The GI Bill is signed",
    summary:
      "The Servicemen's Readjustment Act — the GI Bill — became law, transforming education, training, and home ownership for generations of veterans.",
    appLink: { label: "Education / Benefits", view: "education" },
    source: "U.S. Department of Veterans Affairs (VA News)",
    sourceUrl: "https://news.va.gov/132445/celebrate-80-years-of-the-g-i-bill/",
  },
  {
    monthDay: "06-23",
    year: 1939,
    branch: "Coast Guard",
    category: "Birth of a unit or branch",
    title: "Coast Guard Auxiliary created",
    summary:
      "The Coast Guard Reserve Act of June 23, 1939 created the volunteer civilian component known today as the Coast Guard Auxiliary.",
    source: "U.S. Coast Guard (MyCG / Historian's “Long Blue Line”)",
    sourceUrl: "https://www.mycg.uscg.mil/News/Article/4060235/world-war-iis-home-guard/",
  },
  {
    monthDay: "06-25",
    year: 1950,
    branch: "Joint",
    category: "Battle",
    title: "Korean War begins",
    summary:
      "North Korean forces crossed the 38th parallel into South Korea, and the United States entered the war under the United Nations banner.",
    source: "U.S. Army Center of Military History",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Korean-War/",
  },
  {
    monthDay: "06-26",
    year: 1948,
    branch: "Air Force / Joint",
    category: "Milestone",
    title: "Berlin Airlift begins",
    summary:
      "Allied aircrews began flying food, coal, and supplies into blockaded West Berlin — an air bridge that sustained the city for over a year.",
    source: "U.S. Air Force (Robins AFB History Office)",
    sourceUrl: "https://www.robins.af.mil/Portals/59/documents/History/AFD-130329-021.pdf?ver=2016-06-29-113602-727",
  },
  // -------------------------------- July -------------------------------
  {
    monthDay: "07-01",
    year: 1863,
    branch: "Army",
    category: "Battle",
    title: "Gettysburg begins",
    summary:
      "Union and Confederate armies met at Gettysburg, Pennsylvania, in the largest battle of the Civil War.",
    source: "U.S. Army Center of Military History (Campaign Streamers)",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Campaign-Streamers/",
  },
  {
    monthDay: "07-04",
    year: 1776,
    branch: "All",
    category: "Milestone",
    title: "Declaration of Independence adopted",
    summary:
      "The Continental Congress adopted the Declaration of Independence in Philadelphia.",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/milestone-documents/declaration-of-independence",
  },
  {
    monthDay: "07-04",
    year: 1863,
    branch: "Army / Navy",
    category: "Battle",
    title: "Vicksburg surrenders",
    summary:
      "The Confederate garrison at Vicksburg, Mississippi surrendered, giving the Union control of the Mississippi River.",
    source: "U.S. Army Center of Military History (Campaign Streamers)",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Campaign-Streamers/",
  },
  {
    monthDay: "07-05",
    year: 1950,
    branch: "Army",
    category: "Battle",
    title: "Task Force Smith at Osan",
    summary:
      "The first U.S. ground unit rushed to Korea fought a delaying action at Osan — the Army's first battle of the Korean War.",
    source: "U.S. Army (Korean War hub)",
    sourceUrl: "https://www.army.mil/koreanwar/",
  },
  {
    monthDay: "07-20",
    year: 1969,
    branch: "NASA (military aviators)",
    category: "First",
    title: "Apollo 11 lands on the Moon",
    summary:
      "Neil Armstrong (a Navy veteran) and Buzz Aldrin (Air Force) landed on the Moon while Michael Collins (Air Force) orbited above — military aviators carrying flight to another world.",
    source: "Smithsonian National Air and Space Museum",
    sourceUrl: "https://airandspace.si.edu/explore/stories/apollo-11-moon-landing",
  },
  {
    monthDay: "07-26",
    year: 1947,
    branch: "All",
    category: "Milestone",
    title: "National Security Act signed",
    summary:
      "The act built the modern defense establishment — a unified military department, an independent Air Force, and the CIA.",
    source: "U.S. Air Force (Robins AFB History Office)",
    sourceUrl: "https://www.robins.af.mil/Portals/59/documents/History/AFD-130329-021.pdf?ver=2016-06-29-113602-727",
  },
  {
    monthDay: "07-26",
    year: 1948,
    branch: "All",
    category: "Milestone",
    title: "Executive Order 9981",
    summary:
      "President Truman ordered equality of treatment and opportunity in the armed services, beginning the desegregation of the U.S. military.",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/milestone-documents/executive-order-9981",
  },
  {
    monthDay: "07-27",
    year: 1953,
    branch: "Joint",
    category: "Milestone",
    title: "Korean War armistice",
    summary:
      "The armistice signed at Panmunjom ended the fighting in Korea.",
    source: "U.S. Army Center of Military History",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Korean-War/",
  },
  // ------------------------------- August ------------------------------
  {
    monthDay: "08-01",
    year: 1943,
    branch: "Army Air Forces",
    category: "Medal of Honor action",
    title: "The Ploesti raid",
    summary:
      "B-24 crews flew a low-level strike on the Ploesti oil fields in Operation Tidal Wave; five Medals of Honor were awarded for the mission — the most for a single U.S. air action.",
    source: "National Museum of the U.S. Air Force",
    sourceUrl:
      "https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/1519651/operation-tidalwave-ploesti-august-1-1943/",
  },
  {
    monthDay: "08-02",
    year: 1990,
    branch: "Joint",
    category: "Milestone",
    title: "Iraq invades Kuwait",
    summary:
      "Iraq's invasion of Kuwait triggered the buildup of Operations Desert Shield and Desert Storm.",
    source: "U.S. Army (Redstone Arsenal history)",
    sourceUrl: "https://history.redstone.army.mil/desert-storm-role.html",
  },
  {
    monthDay: "08-04",
    year: 1790,
    branch: "Coast Guard",
    category: "Birth of a unit or branch",
    title: "U.S. Coast Guard birthday",
    summary:
      "Congress authorized the Revenue-Marine — the Coast Guard's founding service — to enforce the nation's revenue laws at sea.",
    source: "U.S. Department of Defense",
    sourceUrl: "https://www.defense.gov/News/News-Stories/Article/Article/4241843/coast-guard-celebrates-235-years-protecting-nations-waterways/",
  },
  {
    monthDay: "08-06",
    year: 1945,
    branch: "Army Air Forces",
    category: "Milestone",
    title: "Hiroshima",
    summary:
      "A B-29 dropped an atomic bomb on Hiroshima; Japan's surrender followed within days, ending the Second World War.",
    source: "National Archives Museum",
    sourceUrl: "https://visit.archives.gov/whats-on/explore-exhibits/atomic-bombing-hiroshima-and-nagasaki",
  },
  {
    monthDay: "08-07",
    year: 1942,
    branch: "Marine Corps / Navy",
    category: "Battle",
    title: "Landings on Guadalcanal",
    summary:
      "The 1st Marine Division landed on Guadalcanal, opening the first major U.S. offensive of the Second World War.",
    source: "U.S. Navy (Naval Expeditionary Combat Command — Seabee history)",
    sourceUrl: "https://www.necc.usff.navy.mil/Organization/Operational-Forces/SEABEES/NCB-18/History/",
  },
  {
    monthDay: "08-07",
    year: 1782,
    branch: "Army",
    category: "First",
    title: "Badge of Military Merit created",
    summary:
      "General Washington established the Badge of Military Merit at Newburgh — the direct ancestor of today's Purple Heart.",
    appLink: { label: "Benefits", view: "benefits" },
    source: "U.S. Army Center of Military History",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Purple-Heart/",
  },
  {
    monthDay: "08-14",
    year: 1945,
    branch: "All",
    category: "Milestone",
    title: "The war with Japan ends",
    summary:
      "The United States announced Japan's acceptance of the Potsdam terms; the formal surrender ceremony followed on September 2.",
    source: "U.S. Army (Redstone Arsenal installation history)",
    sourceUrl: "https://history.redstone.army.mil/ihist-1945.html",
  },
  // ----------------------------- September -----------------------------
  {
    monthDay: "09-02",
    year: 1945,
    branch: "Navy / All",
    category: "Milestone",
    title: "Formal surrender aboard USS Missouri",
    summary:
      "Japanese representatives signed the surrender documents in Tokyo Bay, formally ending the Second World War.",
    source: "U.S. Naval Institute, Naval History Magazine",
    sourceUrl: "https://www.usni.org/magazines/naval-history/2025/august/missouri-surrender-ceremony",
  },
  {
    monthDay: "09-08",
    year: 2009,
    branch: "Marine Corps",
    category: "Medal of Honor action",
    title: "Dakota Meyer at Ganjgal",
    summary:
      "Then-Corporal Dakota Meyer repeatedly drove into heavy fire in Afghanistan's Ganjgal Valley to rescue fellow Marines and Afghan soldiers, earning the Medal of Honor.",
    appLink: mohLink("Meyer", "Dakota L. Meyer"),
    source: "U.S. Department of Defense",
    sourceUrl: "https://www.defense.gov/News/Feature-Stories/Story/Article/3894801/",
  },
  {
    monthDay: "09-11",
    year: 2001,
    branch: "All",
    category: "Milestone",
    title: "September 11 attacks",
    summary:
      "Terrorist attacks struck New York City and the Pentagon, killing nearly 3,000 people and shaping a generation of military service.",
    source: "U.S. Department of Defense",
    sourceUrl: "https://www.defense.gov/Explore/News/Article/Article/2771606/austin-milley-call-on-americans-to-remember-honor-911-victims/",
  },
  {
    monthDay: "09-14",
    year: 1814,
    branch: "Army",
    category: "Milestone",
    title: "“The Star-Spangled Banner”",
    summary:
      "Watching Fort McHenry withstand a night of British bombardment, Francis Scott Key wrote the verses that became the national anthem.",
    source: "Smithsonian Institution",
    sourceUrl: "https://www.si.edu/spotlight/flag-day/banner-facts",
  },
  {
    monthDay: "09-15",
    year: 1950,
    branch: "Marine Corps / Army / Navy",
    category: "Battle",
    title: "The Inchon landing",
    summary:
      "UN forces landed at Inchon in a daring amphibious assault that reversed the course of the Korean War.",
    source: "U.S. Army (Korean War hub)",
    sourceUrl: "https://www.army.mil/koreanwar/",
  },
  {
    monthDay: "09-17",
    year: 1862,
    branch: "Army",
    category: "Battle",
    title: "Antietam",
    summary:
      "Union and Confederate armies fought at Antietam Creek near Sharpsburg, Maryland — the bloodiest single day of the Civil War; the Union stand gave Lincoln the opening to issue the preliminary Emancipation Proclamation.",
    source: "U.S. Army Center of Military History (Campaign Streamers)",
    sourceUrl: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Campaign-Streamers/",
  },
  {
    monthDay: "09-18",
    year: 1947,
    branch: "Air Force",
    category: "Birth of a unit or branch",
    title: "U.S. Air Force birthday",
    summary:
      "The Air Force became an independent service under the National Security Act of 1947.",
    source: "HQ U.S. Air Force History (via Air Education and Training Command)",
    sourceUrl: "https://www.aetc.af.mil/Portals/88/Documents/history/AFD-070208-052.pdf?ver=2016-01-12-160014-563",
  },
  {
    monthDay: "09-26",
    year: 1918,
    branch: "Army",
    category: "Battle",
    title: "Meuse-Argonne offensive begins",
    summary:
      "The American Expeditionary Forces opened the largest battle yet fought by U.S. troops, an offensive that continued until the Armistice.",
    source: "U.S. Army Center of Military History (CMH Pub 77-8)",
    sourceUrl:
      "https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/S%20PDF/cmhPub_77-8.pdf?ver=AJEv_0sO6y9_55-O8n2LWA%3d%3d",
  },
  {
    monthDay: "09-27",
    year: 1942,
    branch: "Coast Guard",
    category: "Medal of Honor action",
    title: "Douglas Munro at Guadalcanal",
    summary:
      "Coast Guard Signalman First Class Douglas Munro maneuvered his landing craft to shield Marines evacuating Point Cruz; he remains the Coast Guard's only Medal of Honor recipient.",
    appLink: mohLink("Munro", "Douglas Albert Munro"),
    source: "U.S. Coast Guard Historian",
    sourceUrl: "https://media.defense.gov/2018/Jun/04/2001926474/0/0/0/MUNRODOUGLASINDEX.PDF",
  },
  // ------------------------------ October ------------------------------
  {
    monthDay: "10-03",
    year: 1993,
    branch: "Army",
    category: "Medal of Honor action",
    title: "Battle of Mogadishu begins",
    summary:
      "In Mogadishu, Somalia, Master Sergeant Gary Gordon and Sergeant First Class Randy Shughart volunteered to defend the crew of a downed helicopter; both were posthumously awarded the Medal of Honor.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article-amp/112963/10th_mountain_division_remembers_battle_of_mogadishu_20_years_later",
  },
  {
    monthDay: "10-07",
    year: 2001,
    branch: "Joint",
    category: "Milestone",
    title: "Operation Enduring Freedom begins",
    summary:
      "U.S. and coalition air and missile strikes opened operations in Afghanistan, less than a month after the September 11 attacks.",
    source:
      "U.S. Army (official published history, via Federal Depository Library); DoD briefing of Oct 7, 2001, archived by Yale Law School Avalon Project",
    sourceUrl: "https://permanent.fdlp.gov/gpo7646/Dustoffch9.pdf",
    sourceUrl2: { label: "DoD briefing transcript (Yale Avalon Project)", url: "https://avalon.law.yale.edu/sept11/dod_brief22.asp" },
  },
  {
    monthDay: "10-08",
    year: 1918,
    branch: "Army",
    category: "Medal of Honor action",
    title: "Alvin York in the Argonne",
    summary:
      "Corporal Alvin York's patrol silenced German machine-gun positions near Chatel-Chéhéry, France — a feat that made him one of the most decorated American soldiers of World War I.",
    appLink: mohLink("York", "Alvin C. York"),
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article-amp/13447/allies_conduct_ceremonies_to_honor_u_s_world_war_i_hero_sgt_alvin_york",
  },
  {
    monthDay: "10-12",
    year: 2000,
    branch: "Navy",
    category: "Milestone",
    title: "USS Cole attacked",
    summary:
      "The destroyer Cole was attacked in the port of Aden; 17 sailors were killed, and the crew's damage-control efforts saved their ship.",
    source: "U.S. Navy",
    sourceUrl: "https://www.navy.mil/Press-Office/News-Stories/Article/2372771/cno-asks-fleet-for-moment-of-silence-in-honor-of-uss-cole-20th-anniversary/",
  },
  {
    monthDay: "10-13",
    year: 1775,
    branch: "Navy",
    category: "Birth of a unit or branch",
    title: "U.S. Navy birthday",
    summary:
      "The Continental Congress authorized two armed sailing vessels — the founding act of the U.S. Navy.",
    source: "Naval History and Heritage Command, via CHIPS (Dept. of the Navy magazine)",
    sourceUrl: "https://www.doncio.navy.mil/CHIPS/ArticleDetails.aspx?ID=5542",
  },
  {
    monthDay: "10-14",
    year: 1947,
    branch: "Air Force",
    category: "First",
    title: "The sound barrier falls",
    summary:
      "Air Force Captain Chuck Yeager flew the rocket-powered Bell X-1 past Mach 1 over the California desert — the first piloted supersonic flight.",
    source: "Smithsonian National Air and Space Museum",
    sourceUrl: "https://airandspace.si.edu/stories/editorial/breaking-sound-barrier",
  },
  {
    monthDay: "10-20",
    year: 1944,
    branch: "Army / Navy",
    category: "Battle",
    title: "The Leyte landings — “I have returned”",
    summary:
      "Sixth Army troops landed on Leyte in the Philippines, and General MacArthur waded ashore to broadcast: “People of the Philippines, I have returned.”",
    source: "U.S. Army (Joint Base Lewis-McChord public affairs)",
    sourceUrl: "https://home.army.mil/lewis-mcchord/8017/9079/5897/Rainier_Explorer-OCT-2026-PAO.pdf",
  },
  {
    monthDay: "10-23",
    year: 1944,
    branch: "Navy",
    category: "Battle",
    title: "Battle of Leyte Gulf begins",
    summary:
      "U.S. and Japanese fleets clashed across the waters around Leyte (Oct 23–26) in what is often called the largest naval battle in history.",
    source: "U.S. Department of Defense",
    sourceUrl: "https://www.defense.gov/News/Feature-Stories/story/Article/1996596/wwii-battle-helped-secure-philippines-75-years-ago/",
  },
  {
    monthDay: "10-25",
    year: 1983,
    branch: "Joint",
    category: "Milestone",
    title: "Operation Urgent Fury — Grenada",
    summary:
      "U.S. forces landed on Grenada to protect American medical students and restore order after a violent coup.",
    source: "U.S. Army University Press (Military Review)",
    sourceUrl: "https://www.armyupress.army.mil/Portals/7/PDF-UA-docs/Bolger-Urgent-Fury-1986-v1-UA.pdf",
  },
  // ----------------------------- November ------------------------------
  {
    monthDay: "11-01",
    year: 1950,
    branch: "Army",
    category: "Medal of Honor action",
    title: "Chaplain Emil Kapaun at Unsan",
    summary:
      "Army chaplain Emil Kapaun stayed with wounded soldiers during the fighting around Unsan, Korea (Nov 1–2) — the beginning of the actions that earned him the Medal of Honor.",
    appLink: mohLink("Kapaun", "Emil J. Kapaun"),
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/medalofhonor/kapaun/?from=features",
  },
  {
    monthDay: "11-08",
    year: 1942,
    branch: "Army / Navy",
    category: "Battle",
    title: "Operation Torch",
    summary:
      "Allied forces landed in French North Africa — America's first major offensive of the Second World War in the European theater.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article-amp/13509/learning_the_lessons_of_victory",
  },
  {
    monthDay: "11-10",
    year: 1775,
    branch: "Marine Corps",
    category: "Birth of a unit or branch",
    title: "U.S. Marine Corps birthday",
    summary:
      "The Continental Congress authorized two battalions of Marines, raised at Tun Tavern in Philadelphia.",
    source: "Marine Corps History Division (via U.S. Army)",
    sourceUrl: "https://www.army.mil/article/158278",
  },
  {
    monthDay: "11-10",
    year: 2004,
    branch: "Army",
    category: "Medal of Honor action",
    title: "David Bellavia in Fallujah",
    summary:
      "On his 25th birthday, Staff Sergeant David Bellavia single-handedly cleared a house of insurgents during the Second Battle of Fallujah; he later became the first living Iraq War recipient of the Medal of Honor.",
    appLink: mohLink("Bellavia", "David G. Bellavia"),
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/223679/president_awards_medal_of_honor_to_first_living_iraq_war_recipient",
  },
  {
    monthDay: "11-11",
    year: 1918,
    branch: "All",
    category: "Milestone",
    title: "Armistice Day — now Veterans Day",
    summary:
      "The First World War armistice took effect at 11 a.m.; the day is now Veterans Day, honoring all who have served.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/90953/History_of_Veterans_Day/",
  },
  {
    monthDay: "11-14",
    year: 1965,
    branch: "Army",
    category: "Battle",
    title: "Ia Drang — Landing Zone X-Ray",
    summary:
      "The 1st Cavalry Division (Airmobile) fought North Vietnamese regulars in the Ia Drang Valley, the first major battle between U.S. and North Vietnamese forces.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/article/159326/fort_benning_commemorates_battle_of_ia_drang",
  },
  {
    monthDay: "11-19",
    year: 1863,
    branch: "Army",
    category: "Milestone",
    title: "The Gettysburg Address",
    summary:
      "President Lincoln delivered the Gettysburg Address at the dedication of the Soldiers' National Cemetery, honoring the Union soldiers who fell there.",
    source: "National Archives",
    sourceUrl: "https://www.archives.gov/press/press-releases/2004/nr04-23",
  },
  {
    monthDay: "11-20",
    year: 1943,
    branch: "Marine Corps",
    category: "Battle",
    title: "Tarawa",
    summary:
      "The 2nd Marine Division landed on Betio in the Tarawa Atoll — the Corps' first major amphibious assault against a fortified beach.",
    source: "U.S. Marine Corps (2nd Marine Regiment official history)",
    sourceUrl: "https://www.2ndmarines.marines.mil/History/",
  },
  // ----------------------------- December ------------------------------
  {
    monthDay: "12-01",
    year: 1941,
    branch: "Air Force (auxiliary)",
    category: "Birth of a unit or branch",
    title: "Civil Air Patrol founded",
    summary:
      "The Civil Air Patrol — today the official civilian auxiliary of the U.S. Air Force — was founded on December 1, 1941, six days before Pearl Harbor.",
    source: "U.S. Air Force (Joint Base McGuire-Dix-Lakehurst)",
    sourceUrl: "https://www.jbmdl.jb.mil/News/Article-Display/Article/245651/civil-air-patrol-to-mark-67th-anniversary/",
  },
  {
    monthDay: "12-07",
    year: 1941,
    branch: "Navy / All",
    category: "Milestone",
    title: "Pearl Harbor",
    summary:
      "Japan's surprise attack on Pearl Harbor drew the United States into the Second World War; December 7 is National Pearl Harbor Remembrance Day.",
    source: "Naval History and Heritage Command",
    sourceUrl: "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1941/pearl-harbor.html",
  },
  {
    monthDay: "12-13",
    year: 1636,
    branch: "National Guard",
    category: "Birth of a unit or branch",
    title: "National Guard birthday",
    summary:
      "The Massachusetts Bay Colony organized its militia into regiments — the founding the National Guard recognizes as its birth.",
    source: "National Guard Bureau",
    sourceUrl: "https://www.nationalguard.mil/About-the-Guard/How-We-Began/",
  },
  {
    monthDay: "12-16",
    year: 1944,
    branch: "Army",
    category: "Battle",
    title: "Battle of the Bulge begins",
    summary:
      "Germany launched its last major offensive through the Ardennes; American forces held, then turned it back over six weeks of winter fighting.",
    source: "U.S. Army",
    sourceUrl: "https://www.army.mil/botb/",
  },
  {
    monthDay: "12-17",
    year: 1903,
    branch: "All (aviation)",
    category: "First",
    title: "First powered flight",
    summary:
      "The Wright brothers flew at Kitty Hawk, North Carolina — the flight that led directly to military aviation.",
    source: "Smithsonian National Air and Space Museum",
    sourceUrl: "https://airandspace.si.edu/stories/editorial/wright-brothers-made-history-kitty-hawk",
  },
  {
    monthDay: "12-20",
    year: 2019,
    branch: "Space Force",
    category: "Birth of a unit or branch",
    title: "U.S. Space Force birthday",
    summary: "The Space Force was established as the nation's sixth armed service.",
    source: "U.S. Space Force",
    sourceUrl: "https://www.spaceforce.mil/News/Article-Display/Article/3990596/from-concept-to-command-celebrating-5-years-of-the-us-space-force/",
  },
  {
    monthDay: "12-26",
    year: 1776,
    branch: "Army",
    category: "Battle",
    title: "The Battle of Trenton",
    summary:
      "After crossing the ice-choked Delaware on Christmas night, Washington's Continental Army surprised the Hessian garrison at Trenton — a victory that revived the Revolution.",
    source: "U.S. Army Reserve",
    sourceUrl: "https://www.usar.army.mil/YearInPhotos/igphoto/2002223199/",
  },
];

/* --------------------- Section 2 — branch routes ---------------------- */

export type BranchRoute = {
  name: string;
  /** The pack's route description, lightly trimmed. */
  note: string;
  links: { label: string; url: string }[];
};

/** The pack's honesty note, carried verbatim in substance: several
 * commands run daily "today in history" features, but their canonical
 * daily-page URLs could not be captured verbatim during the pack's
 * research — so the app links the verified entry points below and
 * never guesses a daily URL. */
export const BRANCH_ROUTES_NOTE =
  "Several commands run daily “today in history” features (the Army Center of Military History's This Day in Army History, NHHC's Today in U.S. Naval History, the Coast Guard Historian's This Day in Coast Guard History), but their daily-page addresses weren't captured verbatim during research — so this app links the verified entry points below and lets you browse, rather than guessing a daily URL.";

export const BRANCH_ROUTES: BranchRoute[] = [
  {
    name: "Army — U.S. Army Center of Military History (CMH)",
    note: "CMH publishes a daily This Day in Army History series (site + official social channels). Verified research entry points:",
    links: [
      { label: "CMH Army Campaigns / Campaign Streamers", url: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Campaign-Streamers/" },
      { label: "CMH Korean War brief summary", url: "https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Korean-War/" },
      { label: "Army Medal of Honor hub", url: "https://www.army.mil/medalofhonor/" },
    ],
  },
  {
    name: "Navy — Naval History and Heritage Command (NHHC)",
    note: "NHHC publishes Today in U.S. Naval History daily and maintains browse-by-topic history hubs. Verified entry point:",
    links: [
      { label: "NHHC World War II / Pearl Harbor topic hub", url: "https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1941/pearl-harbor.html" },
    ],
  },
  {
    name: "Marine Corps — Marine Corps History Division",
    note: "Official histories, battle briefs, and chronologies published through Marine Corps University Press. Verified entry points:",
    links: [
      { label: "MCU Press — Always Faithful, ch. 26", url: "https://www.usmcu.edu/Outreach/Marine-Corps-University-Press/Books-by-topic/MCUP-Titles-A-Z/Always-Faithful/Always-Faithful-Chapter-26/" },
      { label: "USMC chronology 1965–1969 (archived copy)", url: "https://web-wp.archive.org/web/20250905020615/https://web.archive.org/web/20080815024522/http://www.marines.mil/news/publications/Documents/A%20Chronology%20Of%20The%20UNITED%20STATES%20MARINE%20CORPS%201965-1969%20%20PCN%2019000318100.pdf" },
    ],
  },
  {
    name: "Air Force — HQ USAF History / AFHRA & installation history offices",
    note: "Air Force History publishes service chronologies and anniversary histories; installation history offices (e.g., Robins AFB) publish official history outlines. Verified entry points:",
    links: [
      { label: "HQ USAF/HO history outline (PDF)", url: "https://www.aetc.af.mil/Portals/88/Documents/history/AFD-070208-052.pdf?ver=2016-01-12-160014-563" },
      { label: "Robins AFB History Office outline (PDF)", url: "https://www.robins.af.mil/Portals/59/documents/History/AFD-130329-021.pdf?ver=2016-06-29-113602-727" },
      { label: "National Museum of the USAF fact sheets", url: "https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/1519651/operation-tidalwave-ploesti-august-1-1943/" },
    ],
  },
  {
    name: "Coast Guard — U.S. Coast Guard Historian's Office",
    note: "The Historian's Complete Time Line is the best verified day-by-day route (century timelines, browsable by date range). The Historian's Long Blue Line essay series (via MyCG) is the narrative companion.",
    links: [
      { label: "Coast Guard Historian — Complete Time Line", url: "https://www.history.uscg.mil/Complete-Time-Line/Time-Line-1900-2000/" },
      { label: "Long Blue Line essay (MyCG)", url: "https://www.mycg.uscg.mil/News/Article/4060235/world-war-iis-home-guard/" },
    ],
  },
  {
    name: "Department of Defense",
    note: "DoD Feature Stories regularly publish sourced anniversary pieces (used in this calendar for Ganjgal, Leyte Gulf, Frequent Wind, and the Coast Guard birthday). Route uncovered modern-era days here.",
    links: [
      { label: "DoD Feature Stories", url: "https://www.defense.gov/News/Feature-Stories/Story/Article/3894801/" },
    ],
  },
];

/** The pack's gaps note, condensed without adding anything: thin
 * months, deliberate exclusions, and the never-invent rule. */
export const THIS_DAY_GAPS_NOTE =
  "This calendar holds 90 sourced entries — roughly one day in four has one. Days without an entry are never filled in: some well-known dates were left out because no official source stating the date could be captured during research, and a few events were excluded as wrong in tone for a daily card. On those days, the branch history routes above are the honest way in.";

/* --------------------------- Date helpers ----------------------------- */

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

export const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** "Nov 10" for a "MM-DD" key. */
export function formatMonthDay(monthDay: string): string {
  const [m = 1, d = 1] = monthDay.split("-").map(Number);
  return `${MONTH_SHORT[(m || 1) - 1] ?? ""} ${d || ""}`;
}

/** The date (local) of Memorial Day — the last Monday in May — in a year. */
export function memorialDayOf(year: number): Date {
  const d = new Date(year, 4, 31);
  while (d.getDay() !== 1) d.setDate(d.getDate() - 1);
  return d;
}

export function isMemorialDay(date: Date): boolean {
  const md = memorialDayOf(date.getFullYear());
  return date.getMonth() === md.getMonth() && date.getDate() === md.getDate();
}

export const MEMORIAL_DAY_ENTRY: ThisDayEntry | undefined = THIS_DAY_ENTRIES.find(
  (e) => e.floating === "memorial-day",
);

function monthDayKey(date: Date): string {
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${m}-${d}`;
}

/** Every entry that belongs to a given device-local date: the dated
 * entries whose month-day matches, plus the floating Memorial Day
 * entry on Memorial Day itself. */
export function entriesForDate(date: Date): ThisDayEntry[] {
  const key = monthDayKey(date);
  const out = THIS_DAY_ENTRIES.filter((e) => e.monthDay === key);
  if (isMemorialDay(date) && MEMORIAL_DAY_ENTRY) out.push(MEMORIAL_DAY_ENTRY);
  return out;
}

/** The occurrence date of an entry in a given year (Memorial Day
 * resolves to that year's last Monday in May). */
export function occurrenceInYear(entry: ThisDayEntry, year: number): Date {
  if (entry.floating === "memorial-day") return memorialDayOf(year);
  const [m = 1, d = 1] = (entry.monthDay ?? "01-01").split("-").map(Number);
  return new Date(year, (m || 1) - 1, d || 1);
}

export type NearestEntry = {
  entry: ThisDayEntry;
  /** Signed days from `from` to the nearest occurrence (negative = past). */
  deltaDays: number;
  /** The occurrence's month-day key (Memorial Day: that year's date). */
  monthDay: string;
};

/** The entry whose occurrence is closest in the calendar to `from`,
 * searching this year's and the adjacent years' occurrences so the
 * answer wraps correctly across New Year. Ties go to the entry that
 * comes first in the calendar list. Never returns an entry dated
 * `from` itself. */
export function nearestEntry(from: Date): NearestEntry | null {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  let best: NearestEntry | null = null;
  for (const entry of THIS_DAY_ENTRIES) {
    for (const year of [start.getFullYear() - 1, start.getFullYear(), start.getFullYear() + 1]) {
      const occ = occurrenceInYear(entry, year);
      const delta = Math.round((occ.getTime() - start.getTime()) / 86_400_000);
      if (delta === 0) continue;
      if (!best || Math.abs(delta) < Math.abs(best.deltaDays)) {
        best = { entry, deltaDays: delta, monthDay: monthDayKey(occ) };
      }
    }
  }
  return best;
}

/** "3 days from now" / "2 days ago" / "tomorrow" / "yesterday". */
export function relativeDays(delta: number): string {
  if (delta === 1) return "tomorrow";
  if (delta === -1) return "yesterday";
  if (delta > 1) return `${delta} days from now`;
  return `${Math.abs(delta)} days ago`;
}

/** Entries grouped by month (1–12) in calendar order; the floating
 * Memorial Day entry sits in May, after the dated May entries. */
export function entriesByMonth(): { month: number; entries: ThisDayEntry[] }[] {
  const groups: { month: number; entries: ThisDayEntry[] }[] = [];
  for (let m = 1; m <= 12; m++) {
    const mm = `${m}`.padStart(2, "0");
    const dated = THIS_DAY_ENTRIES.filter((e) => e.monthDay?.startsWith(`${mm}-`));
    const floating = m === 5 ? THIS_DAY_ENTRIES.filter((e) => e.floating) : [];
    groups.push({ month: m, entries: [...dated, ...floating] });
  }
  return groups;
}
