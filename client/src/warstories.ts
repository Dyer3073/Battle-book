// War Stories — static reference data transcribed from the researched
// war stories pack (~/workspace/military-app/war-stories/war-stories.md,
// compiled November 8, 2026). Summaries are the pack's own words; no
// facts were added and no graphic detail beyond the pack's appears.
// Every URL was returned verbatim by the pack's research — none was
// constructed or guessed. The pack's verification flags travel with the
// content: VHP stories are labeled first-person recollections (the
// Library of Congress does not verify VHP accounts), the Heimlich
// China detail carries its secondary-source flag, and "most decorated"
// is presented UNRANKED under the pack's standing caveat.

export type StoryLink = { label: string; url: string };

export type DocumentedStory = {
  title: string;
  person: string;
  branch: string;
  era: string;
  /** Tag as the pack marks it, e.g. "Non-combat". */
  tag?: string;
  summary: string;
  why: string;
  /** True when the story draws on the Library of Congress Veterans
   * History Project — those cards carry the first-person label. */
  vhp?: boolean;
  flag?: string;
  links: StoryLink[];
};

export type MohRoute = {
  name: string;
  summary: string;
  note?: string;
  links: StoryLink[];
};

export type MohProfile = {
  name: string;
  rank: string;
  branch: string;
  conflict: string;
  placeDate: string;
  summary: string;
  living?: boolean;
  links: StoryLink[];
};

export type DecoratedProfile = {
  name: string;
  branch: string;
  era: string;
  decorations: string;
  flag?: string;
  links: StoryLink[];
};

/** Rendered on every Veterans History Project card (pack note 1). */
export const VHP_LABEL =
  "FIRST-PERSON RECOLLECTION — preserved by the Library of Congress Veterans History Project. The Library of Congress does not verify VHP accounts; this is the veteran's own telling, not independently confirmed history.";

/** Pack Part 2 caveat, rendered with the Medal of Honor profiles. */
export const MOH_CAVEAT =
  "Profiles summarize official citations. For the full citation text and the complete recipient roll, use the CMOHS database linked above. Recipient totals change as awards are made and upgraded — no total is printed here.";

/** Pack Part 2 honest note on the sole woman recipient. */
export const MOH_WOMAN_NOTE =
  "There is only one woman Medal of Honor recipient in history — Dr. Mary Edwards Walker, profiled first below. No second woman recipient exists to add.";

/** Pack Part 3 standing caveat — rendered above the profiles, verbatim. */
export const DECORATED_CAVEAT =
  "There is no official “most decorated” list, and no branch keeps a common scoreboard. Totals depend on what is counted — valor awards only or every award, foreign decorations, unit citations, and duplicate awards — and on the era, because the awards available changed over time. The profiles below are notable records as their sources state them. They are not ranked against each other.";

/* ------------------------------------------------------------------ */
/* Part 1 — Documented Stories (13)                                    */
/* ------------------------------------------------------------------ */

export const DOCUMENTED_STORIES: DocumentedStory[] = [
  {
    title: "The Hello Girls — U.S. Army Signal Corps telephone operators",
    person: "\"Hello Girls,\" U.S. Army Signal Corps Female Telephone Operators; Chief Operator Grace Banker; operator Helen Cook (whose uniform is in the Smithsonian collection)",
    branch: "U.S. Army",
    era: "World War I",
    tag: "Non-combat",
    summary:
      "In late 1917, after Gen. Pershing's urgent request for bilingual switchboard operators, the Army recruited women telephone operators who served at AEF headquarters in Chaumont, France. Smithsonian's Women in World War I spotlight puts their number at 223; congressional findings credit them with connecting 26,000,000 calls, and Chief Operator Grace Banker received the Distinguished Service Medal. Despite serving in uniform under Army orders, they were not granted veteran status until 1979.",
    why: "A front-line communications story that is also a recognition story — the Army ran on their work decades before the government formally called them veterans.",
    links: [
      { label: "Smithsonian Institution — operator uniform", url: "https://www.si.edu/object/army-signal-corps-female-telephone-operator-uniform%3Anmah_425620" },
      { label: "Smithsonian — Women in World War I spotlight", url: "https://www.si.edu/spotlight/women-in-wwi/u-s-army-signal-corps-photos?iframe=true&page=1" },
    ],
  },
  {
    title: "The 6888th Central Postal Directory Battalion",
    person: "6888th Central Postal Directory Battalion, Women's Army Corps, under Maj. Charity Adams",
    branch: "U.S. Army (WAC)",
    era: "World War II",
    tag: "Non-combat",
    summary:
      "In February 1945 the 6888th became, per Army Center of Military History, the only African-American WAC unit to serve overseas. Working in Birmingham, England, then Rouen and Paris, its roughly 800 women ran three 8-hour shifts, 7 days a week, redirecting mail to more than 7 million U.S. personnel in the European Theater; the National Archives puts each shift's average at about 65,000 pieces, and CMH notes 80,000+ letters and parcels processed daily at their busiest. Their unofficial motto was \"No mail, low morale.\"",
    why: "Logistics as morale. The 6888th cleared a mail backlog the system had written off, and did it as a segregated unit serving a segregated Army.",
    links: [
      { label: "U.S. Army Center of Military History — 6888th", url: "https://history.army.mil/Research/Reference-Topics/African-Americans-in-the-US-Army/6888th-Central-Postal-Directory-Battalion-WAC/" },
      { label: "U.S. Army Center of Military History — Women in the Army", url: "https://history.army.mil/Research/Women-in-Army-History/World-War-II-Women-in-the-Army/" },
      { label: "National Archives blog — the 6888th", url: "http://text-message.blogs.archives.gov/2024/12/05/the-6888th-central-postal-directory-battalion-and-the-womens-army-corps-wacs-in-world-war-ii" },
    ],
  },
  {
    title: "The Navajo Code Talkers — PFC Carl Gorman and the original 29",
    person: "Navajo Code Talkers, U.S. Marine Corps; PFC Carl Gorman, one of the original 29",
    branch: "U.S. Marine Corps",
    era: "World War II",
    summary:
      "Per the Smithsonian National Museum of the American Indian, the Marine Corps recruited Navajo Code Talkers in 1941–42 after Philip Johnston's demonstration; the original 29 were recruited in two weeks to develop the code, and more than 400 Diné eventually served. Carl Gorman, one of the original 29, served at Guadalcanal, Tarawa, Tinian, and Saipan. NMAI's topics page puts total American Indian code talkers deployed in WWII at about 534 across tribes, with about 420 Diné dispersed across six Marine divisions.",
    why: "A code built on a language the U.S. had tried to suppress in boarding schools became one of the Pacific war's most durable communications tools — carried by the men who spoke it.",
    links: [
      { label: "Smithsonian NMAI — Code Talking", url: "https://americanindian.si.edu/nk360/code-talkers/code-talking/" },
      { label: "Smithsonian NMAI — Why We Serve: Code Talkers", url: "https://americanindian.si.edu/why-we-serve/topics/code-talkers/" },
      { label: "Smithsonian — Unbreakable: Navajo Code", url: "https://www.si.edu/collections/snapshot/unbreakable-navajo-code" },
    ],
  },
  {
    title: "The Tuskegee Airmen — 332nd Fighter Group",
    person: "332nd Fighter Group, Tuskegee Airmen, under Col. Benjamin O. Davis Jr.",
    branch: "U.S. Army Air Forces",
    era: "World War II",
    summary:
      "Per the National Museum of the U.S. Air Force, the Tuskegee program trained about 990 pilots and sent 350 overseas. The 332nd flew 311 missions from June 1944 to the end of the war, 179 of them bomber-escort missions, and on March 24, 1945 was among the first Italy-based units to escort B-17s to Berlin and back. The museum credits Tuskegee Airmen with 112 enemy aircraft shot down.",
    why: "They flew escort for the bombers over Europe while the military that sent them was still segregated — and built the record that helped end that segregation.",
    links: [
      { label: "National Museum of the U.S. Air Force — Escort Excellence", url: "http://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195963/escort-excellence/" },
      { label: "U.S. Air Force feature — the Tuskegee Airmen", url: "https://www.malmstrom.af.mil/News/Features/Display/Article/349719/the-tuskegee-experiment-the-legend-of-the-tuskegee-airmen/" },
    ],
  },
  {
    title: "The Montford Point Marines",
    person: "Montford Point Marines (Black Marines trained at Montford Point Camp, Jacksonville, NC)",
    branch: "U.S. Marine Corps",
    era: "World War II",
    summary:
      "Per MARADMIN 525/11, from 1942 to 1949 approximately 20,000 African American men enlisted and completed segregated boot camp at Montford Point Camp before joining a Marine Corps that had excluded Black Americans for most of its history. Their service was recognized with the Congressional Gold Medal, presented at the U.S. Capitol on June 27, 2012; per DVIDS, nearly 400 Montford Point Marines received bronze replicas of the medal the following day.",
    why: "The first Black Marines had to prove themselves at a separate camp for a separate standard that never existed — their story is the Corps' own institutional history, in the Corps' own words.",
    links: [
      { label: "Headquarters Marine Corps — MARADMIN 525/11", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/887959/operational-planning-team-for-institutionalizing-the-legacy-of-the-montford-poi/" },
      { label: "DVIDS — Montford Point Marines", url: "https://www.dvidshub.net/news/printable/93288" },
    ],
  },
  {
    title: "The Red Ball Express",
    person: "Red Ball Express truck convoys, U.S. Army Transportation/Quartermaster",
    branch: "U.S. Army",
    era: "World War II (1944)",
    tag: "Non-combat",
    summary:
      "Per the Center of Military History's official publication The American Soldier, 1944, the Red Ball Express convoys began on August 25, 1944 to keep the fast-moving armies in France supplied. After four days, tonnage peaked at 12,342 tons carried by 5,958 vehicles from 132 truck companies; by November 16 the route stretched more than 600 miles, and over 81 days the Red Ball handled 412,193 tons.",
    why: "The breakout from Normandy ran on trucks. This is the supply story behind the advance — told from the Army's own official history, with its own numbers.",
    flag: "The gathered official excerpt does not state the driver composition of the Red Ball Express, so it is not claimed here.",
    links: [
      { label: "U.S. Army Center of Military History — The American Soldier, 1944 (PDF)", url: "https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/A%20Titles/american-soldier-sets/pdf/set-4-1944.pdf" },
    ],
  },
  {
    title: "The Seabees — Naval Construction Battalion ONE",
    person: "Naval Construction Battalion ONE (NMCB ONE), the first Seabee battalion",
    branch: "U.S. Navy",
    era: "World War II",
    tag: "Non-combat — engineer",
    summary:
      "Per Navy Expeditionary Combat Command's official history, Naval Construction Battalion ONE was commissioned on March 15, 1942 — 98 days after Pearl Harbor — and operated in the South Pacific for 23 months, including a tank farm of 22 × 10,000-barrel tanks in Tonga/Samoa, Base Hospital No. 2 in the Hebrides, and a 6,000-foot airstrip built by its Third Detachment on Espiritu Santo. Seabee Magazine (compiled by the Naval History and Heritage Command historian / U.S. Navy Seabee Museum) dates the January 5, 1942 approval as the actual beginning of the Seabees, and notes 325,000 men had enlisted by war's end.",
    why: "An engineer story at the foundation of the Pacific campaign: airfields, fuel, and hospitals built by construction crews who were also expected to defend what they built.",
    links: [
      { label: "Navy Expeditionary Combat Command — NMCB ONE history", url: "https://www.necc.usff.navy.mil/organization/operational-forces/seabees/nmcb-one/history/" },
      { label: "Seabee Magazine — This Week in Seabee History", url: "https://seabeemagazine.navylive.dodlive.mil/History/Article/2610647/this-week-in-seabee-history-week-of-jan-1/" },
    ],
  },
  {
    title: "The WASP — Women Airforce Service Pilots",
    person: "Women Airforce Service Pilots (WASP); named pilot in the Air Force feature: Bernice \"Bee\" Falk Haydu",
    branch: "U.S. Army Air Forces (civilian pilots)",
    era: "World War II",
    tag: "Non-combat — home front",
    summary:
      "Per the U.S. Air Force feature quoting the Air Force Historical Support Division, the WAFS and the Women's Flying Training Detachment merged on July 5, 1943 into the WASP. More than 25,000 women applied, 1,830 were accepted, and 1,074 earned their wings; WASPs ferried more than 50% of combat aircraft within the United States and flew at 126 bases. Thirty-eight died in service. The program was disbanded December 20, 1944, its records sealed for about 35 years; veteran status came with Public Law 95-202 on November 23, 1977, and the Congressional Gold Medal was presented March 10, 2010.",
    why: "They flew the Army's aircraft on the home front as civilians, were sent home without veteran status, and waited more than three decades for the record to be corrected.",
    links: [
      { label: "U.S. Air Force — WASPs were pioneers", url: "https://www.af.mil/News/Article-Display/Article/685659/wasps-were-pioneers-for-female-pilots-of-today-tomorrow/" },
    ],
  },
  {
    title: "The SPARs of LORAN Station Unit 21",
    person: "SPARs (Coast Guard Women's Reserve) of LORAN Station Unit 21, Chatham, Massachusetts, led by Ensign Vera Hamerschlag",
    branch: "U.S. Coast Guard",
    era: "World War II",
    tag: "Non-combat — home front",
    summary:
      "Per the Coast Guard Historian's Office series \"The Long Blue Line,\" in 1944 Ensign Vera Hamerschlag led a group of SPARs at Chatham, Massachusetts who replaced all the men at Unit 21, a top-secret LORAN radio-navigation monitoring station. The station's routine was broken on the night of September 14, 1944, when the Great Atlantic hurricane hit Chatham with winds up to 105 mph.",
    why: "A classified navigation mission on the home front, crewed entirely by women of the Coast Guard Women's Reserve — and tested by a hurricane instead of an enemy.",
    links: [
      { label: "U.S. Coast Guard Historian's Office — The Long Blue Line", url: "https://www.history.uscg.mil/Research/THE-LONG-BLUE-LINE/Article/2866467/the-long-blue-line-in-their-words-a-busy-year-for-the-spars-that-operated-loran/" },
    ],
  },
  {
    title: "Elizabeth A. Allen — Army nurse in Vietnam",
    person: "Maj. Elizabeth A. Allen, Army Nurse Corps",
    branch: "U.S. Army",
    era: "Vietnam War",
    tag: "Medical — first-person account",
    vhp: true,
    summary:
      "The Library of Congress Veterans History Project holds a video interview with Elizabeth Allen, listed in the program's metadata as a major in the Army Nurse Corps who served in the Vietnam War. Her collection is preserved as her own recorded account of Army nursing service in Vietnam. No service details beyond the program-page metadata were verified for this pack, so none are added.",
    why: "A nurse's own telling of Vietnam service, preserved in the national archive — included deliberately as a medical story, and as the pack's worked example of how VHP material must be labeled.",
    flag: "Branch is per the Veterans History Project program-page metadata (Army Nurse Corps); other Library of Congress copy has described her differently.",
    links: [
      { label: "Library of Congress, Veterans History Project — Allen collection", url: "https://www.loc.gov/item/afc2001001.55266/" },
      { label: "Library of Congress — Veterans History Project program", url: "https://www.loc.gov/programs/veterans-history-project/" },
    ],
  },
  {
    title: "Ramon Viera — Borinqueneer and combat engineer",
    person: "Ramon Viera, 65th Infantry Regiment (\"Borinqueneers\")",
    branch: "U.S. Army",
    era: "World War II and Korean War",
    vhp: true,
    summary:
      "Per VA News (#VeteranOfTheDay, October 8, 2017), Ramon Viera was born in 1928 in Caguas, Puerto Rico, served 1945–46 in World War II and again 1950–56 in Korea and after, and was assigned to a Puerto Rican regiment where he trained as a demolition specialist. VA records that he cleared paths of explosives for tanks and, once, separated from his company, saved a wounded and stranded civilian. The Library of Congress VHP \"Hispanics in Service\" exhibit lists his service as PFC, Army, WWII and SFC, Army, Korean War.",
    why: "An engineer story from the 65th Infantry — Puerto Rican soldiers whose regiment served in both wars — told through both a VA feature and his preserved VHP record.",
    links: [
      { label: "VA News — #VeteranOfTheDay Ramon Viera", url: "https://news.va.gov/42087/veteranoftheday-ramon-viera/" },
      { label: "Library of Congress VHP — Viera collection", url: "https://www.loc.gov/item/afc2001001.74655/" },
      { label: "Library of Congress VHP — Hispanics in Service", url: "https://www.loc.gov/collections/veterans-history-project-collection/serving-our-voices/diverse-experiences-in-service/hispanics-in-service/" },
    ],
  },
  {
    title: "Henry Judah Heimlich — Navy medical officer in China",
    person: "Henry Judah Heimlich, U.S. Navy medical officer",
    branch: "U.S. Navy",
    era: "World War II (China)",
    tag: "Medical",
    vhp: true,
    summary:
      "The Library of Congress Veterans History Project holds Heimlich's collection from his service as a U.S. Navy medical officer. A Jewish War Veterans article on the VHP records that Heimlich served as chief medical officer at Camp Four of SACO in northern China, and that a Chinese soldier's death from a chest wound stayed with him and led to the Heimlich chest drain valve, later widely used in Vietnam; he later created the 1974 anti-choking procedure that bears his name.",
    why: "A wartime medical experience that produced a device used in a later war — and a reminder that service stories keep working long after the service ends.",
    flag: "The China service detail rests partly on a secondary source (the Jewish War Veterans article on the VHP); his LOC VHP collection record itself is verified.",
    links: [
      { label: "Library of Congress, Veterans History Project — Heimlich collection", url: "https://www.loc.gov/item/afc2001001.90618/" },
    ],
  },
  {
    title: "Wilson Ugah — Ramadi infantryman, later Marine embassy guard",
    person: "Wilson Ugah, U.S. Marine Corps infantry",
    branch: "U.S. Marine Corps",
    era: "Post-9/11 (Iraq, Ramadi 2004, and after)",
    summary:
      "A DVIDS feature traces Wilson Ugah's path from Marine infantry service in Ramadi in 2004 to later service as a Marine embassy security guard — a \"full circle\" story of a Marine who came back to serve in a completely different role protecting U.S. embassies.",
    why: "The section's recent-era story: not a single battle, but a career that bends from the invasion-era infantry fight into the quiet, global guard mission most Marines never see explained.",
    links: [
      { label: "DVIDS — Resilient Warrior", url: "https://www.dvidshub.net/news/120028/resilient-warrior" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Part 2 — Medal of Honor: authoritative routes first, then profiles  */
/* ------------------------------------------------------------------ */

export const MOH_ROUTES: MohRoute[] = [
  {
    name: "Congressional Medal of Honor Society — Recipients database",
    summary:
      "The Society chartered by Congress; searchable by name, conflict, and branch. This is the pack's primary source for the featured profiles below.",
    links: [{ label: "CMOHS — Recipients database", url: "https://www.cmohs.org/recipients" }],
  },
  {
    name: "U.S. Army Medal of Honor hub",
    summary:
      "The Army notes the medal was first authorized in 1861 for Sailors and Marines and in 1862 for Soldiers. Army-recipient lookups route here rather than enumerating recent Army awards in-app.",
    links: [{ label: "U.S. Army — Medal of Honor hub", url: "https://www.army.mil/medalofhonor/" }],
  },
  {
    name: "DoD Awards for Valor — Army Medal of Honor list",
    summary:
      "Shown \"Current as of: Jul 13, 2026\" when checked, and carries DoD's own disclaimer that the list is not definitive.",
    note: "Not definitive — DoD's own disclaimer says so. Treat this list as a route, not the final word.",
    links: [{ label: "DoD Awards for Valor — Army Medal of Honor recipients", url: "https://valor.defense.gov/Recipients/Army-Medal-of-Honor-Recipients/" }],
  },
];

export const MOH_PROFILES: MohProfile[] = [
  {
    name: "Dr. Mary Edwards Walker",
    rank: "Contract Surgeon, U.S. Army",
    branch: "U.S. Army",
    conflict: "Civil War",
    placeDate: "1861–1864; places listed by CMOHS include North Carolina, Washington, D.C., Tennessee, and Georgia",
    summary:
      "Walker served as a contract surgeon with Union forces through much of the Civil War, treating wounded in the field and in hospitals and, per her record, crossing lines to care for civilians. Her medal was issued November 11, 1865. It was rescinded in the 1916–1917 review on the ground that she had been a civilian, and restored to the Roll in 1977. CMOHS identifies her as the first and only woman Medal of Honor recipient.",
    links: [
      { label: "CMOHS — Mary E. Walker", url: "https://www.cmohs.org/kiosk/recipients/mary-e-walker" },
      { label: "CMOHS feature — celebrating recipient Mary E. Walker", url: "https://www.cmohs.org/news-events/female-recipient/celebrating-womens-history-month-recipient-mary-e-walker/" },
    ],
  },
  {
    name: "William Harvey Carney",
    rank: "Sergeant, Company C, 54th Massachusetts Colored Infantry",
    branch: "U.S. Army",
    conflict: "Civil War",
    placeDate: "Fort Wagner, South Carolina, July 18, 1863",
    summary:
      "When the color sergeant was shot down in the assault on Fort Wagner, Carney grasped the flag himself, led the way to the parapet, and planted the colors there. When the troops fell back, he brought the flag off under fierce fire although twice severely wounded. His medal was not received until May 23, 1900; he is credited as the first African American Medal of Honor recipient, judged by date of action.",
    links: [{ label: "CMOHS — William H. Carney", url: "https://www.cmohs.org/recipients/william-h-carney" }],
  },
  {
    name: "Alvin C. York",
    rank: "Corporal (promoted to Sergeant), Company G, 328th Infantry, 82nd Division",
    branch: "U.S. Army",
    conflict: "World War I",
    placeDate: "Near Chatel-Chéhéry, France, October 8, 1918",
    summary:
      "Per the U.S. Army Military History Institute account, after his platoon suffered heavy casualties and three other NCOs became casualties, York assumed command and led seven men against a machine-gun nest. The action took the nest, several guns, and 132 prisoners — 4 officers and 128 men — marched back to American lines. York had initially claimed conscientious-objector status before serving. (Casualty counts attributed to York differ between sources and are omitted.)",
    links: [{ label: "U.S. Army — A Reluctant Hero", url: "https://www.army.mil/article/4888/a_reluctant_hero" }],
  },
  {
    name: "Freddie Stowers",
    rank: "Corporal, Company C, 371st Infantry Regiment, 93d Division",
    branch: "U.S. Army",
    conflict: "World War I",
    placeDate: "Hill 188, Champagne Marne Sector, France, September 28, 1918",
    summary:
      "Stowers was a squad leader in the lead company attacking Hill 188 when he was mortally wounded early in the assault. Per his citation, he pressed forward and continued urging his squad on until he died. CMOHS' history article notes his was the only Medal of Honor awarded to an African American for World War I service, and that it was presented to his family 73 years later, in 1991.",
    links: [{ label: "CMOHS — Freddie Stowers", url: "https://www.cmohs.org/index.php/recipients/freddie-stowers" }],
  },
  {
    name: "Desmond T. Doss",
    rank: "Private First Class (highest rank: Corporal), Medical Detachment, 307th Infantry, 77th Infantry Division",
    branch: "U.S. Army",
    conflict: "World War II",
    placeDate: "Urasoe-Mura, Okinawa, April 29 – May 21, 1945",
    summary:
      "Doss was a conscientious objector serving as a company aidman who refused to carry a weapon or seek cover while his company was under fire on the escarpment at Okinawa. He carried some 75 casualties one by one to the edge and lowered them to safety on a rope-supported litter, then kept giving aid and rescuing wounded over the following days until he was seriously wounded on May 21. President Truman presented his medal on October 12, 1945.",
    links: [{ label: "CMOHS — Desmond T. Doss", url: "https://www.cmohs.org/recipients/desmond-t-doss" }],
  },
  {
    name: "Douglas Albert Munro",
    rank: "Signalman First Class",
    branch: "U.S. Coast Guard",
    conflict: "World War II",
    placeDate: "Point Cruz, Guadalcanal, Solomon Islands, September 27, 1942",
    summary:
      "Munro was the petty officer in charge of a group of 24 Higgins boats evacuating a Marine battalion trapped at Point Cruz. He placed his boat to cover the evacuation and was killed by enemy fire as it was nearly complete; his crew carried on until the last boat cleared the beach. CMOHS identifies him as currently the only Coast Guard Medal of Honor recipient.",
    links: [{ label: "CMOHS — Douglas A. Munro", url: "https://www.cmohs.org/kiosk/recipients/douglas-a-munro" }],
  },
  {
    name: "Joseph J. McCarthy",
    rank: "Captain (highest rank: Brigadier General), Company G, 2d Battalion, 24th Marines, 4th Marine Division",
    branch: "U.S. Marine Corps Reserve",
    conflict: "World War II",
    placeDate: "Iwo Jima, Volcano Islands, February 21, 1945",
    summary:
      "McCarthy was commanding officer of a rifle company during the seizure of Iwo Jima. Per his citation, on February 21, 1945 he led his company in action against Japanese forces in the advance toward Motoyama Airfield No. 2, personally directing the attack through the contested ground in front of the airfield. Iwo Jima produced 27 Medals of Honor in total (CMOHS battle list).",
    links: [{ label: "CMOHS — Joseph J. McCarthy", url: "https://www.cmohs.org/recipients/joseph-j-mccarthy" }],
  },
  {
    name: "Hiroshi \"Hershey\" Miyamura",
    rank: "Corporal (highest rank: Staff Sergeant), Company H, 2d Battalion, 7th Infantry Regiment, 3d Infantry Division",
    branch: "U.S. Army",
    conflict: "Korean War",
    placeDate: "Near Taejon-ni, Korea, April 24, 1951",
    summary:
      "Miyamura, a machine-gun squad leader, fought in close combat when his position was attacked, gave first aid and directed the evacuation of wounded, and manned guns until the ammunition was gone while ordering his squad to withdraw. Severely wounded, he was captured and held as a POW; his award was kept secret until his release. President Eisenhower presented it October 27, 1953. Miyamura had first enlisted in January 1945 with the all-Nisei 100th Infantry Battalion, 442nd Infantry Regiment. He died November 29, 2022, at age 97.",
    links: [{ label: "CMOHS — Hiroshi Miyamura", url: "https://www.cmohs.org/recipients/hiroshi-miyamura" }],
  },
  {
    name: "Emil J. Kapaun",
    rank: "Captain (Chaplain), 3d Battalion, 8th Cavalry Regiment, 1st Cavalry Division",
    branch: "U.S. Army",
    conflict: "Korean War",
    placeDate: "Unsan, Korea, November 1–2, 1950",
    summary:
      "Chaplain Kapaun calmly walked through enemy fire to provide comfort and medical aid and to rescue wounded men from no-man's land during the fighting at Unsan. After capture, he continued caring for fellow prisoners of war and died at Pyoktong Prison Camp in May 1951. The Defense POW/MIA Accounting Agency accounted for his remains, announced March 5, 2021.",
    links: [
      { label: "CMOHS — Emil J. Kapaun", url: "https://www.cmohs.org/index.php/recipients/emil-j-kapaun" },
      { label: "CMOHS feature — Kapaun, a shepherd in combat boots", url: "https://www.cmohs.org/news-events/blog/emil-kapaun-a-shepherd-in-combat-boots/" },
    ],
  },
  {
    name: "James C. McCloughan",
    rank: "Private First Class (highest rank: Specialist Fifth Class), combat medic, Company C, 3d Battalion, 21st Infantry, 196th Light Infantry Brigade, Americal Division",
    branch: "U.S. Army",
    conflict: "Vietnam War",
    placeDate: "Tam Ky / Nui Yon Hill, Vietnam, May 13–15, 1969",
    living: true,
    summary:
      "On May 13, 1969, medic McCloughan ran 100 meters through heavy fire across an open field to rescue a comrade too injured to move, and carried him to safety. CMOHS' webinar biography credits him with moving into the kill zone on ten occasions in that battle, saving ten American lives and one Vietnamese interpreter's life. His Medal of Honor was awarded in 2017. Living recipient.",
    links: [{ label: "CMOHS — James C. McCloughan", url: "https://www.cmohs.org/index.php/recipients/james-c-mccloughan" }],
  },
  {
    name: "Sammy Lee Davis",
    rank: "Private First Class (highest rank: Sergeant First Class), Battery C, 2d Battalion, 4th Artillery, 9th Infantry Division",
    branch: "U.S. Army",
    conflict: "Vietnam War",
    placeDate: "Firebase Cudgil, west of Cai Lay, Republic of Vietnam, November 18, 1967",
    living: true,
    summary:
      "Davis was a cannoneer at a remote fire support base hit by a heavy mortar attack and ground assault beginning around 0200. He manned a machine gun to cover his crew, was blown into a foxhole by a direct hit on the gun position, then returned to the burning howitzer, loaded and fired it into the attacking force. Living recipient.",
    links: [
      { label: "CMOHS — Sammy L. Davis", url: "https://www.cmohs.org/recipients/sammy-l-davis" },
      { label: "CMOHS kiosk — Sammy L. Davis", url: "https://www.cmohs.org/kiosk/recipients/sammy-l-davis" },
    ],
  },
  {
    name: "David G. Bellavia",
    rank: "Staff Sergeant",
    branch: "U.S. Army",
    conflict: "War on Terrorism (Iraq)",
    placeDate: "Fallujah, Iraq, November 10, 2004 (Operation Phantom Fury)",
    living: true,
    summary:
      "Bellavia was a squad leader in Fallujah when a squad of his unit was trapped by intense fire from a fortified position inside a house. Per his citation summary, he acted to free the trapped squad, entering and clearing the position and saving his unit members. Presented June 25, 2019, at the White House; contemporary coverage identified him as the first living recipient for the Iraq War. Living recipient.",
    links: [
      { label: "CMOHS kiosk — David G. Bellavia", url: "https://www.cmohs.org/kiosk/recipients/david-g-bellavia" },
      { label: "CMOHS — David G. Bellavia", url: "https://www.cmohs.org/recipients/david-g-bellavia" },
    ],
  },
  {
    name: "Dakota L. Meyer",
    rank: "Corporal",
    branch: "U.S. Marine Corps",
    conflict: "War on Terrorism (Afghanistan)",
    placeDate: "Kunar Province (Ganjgal), Afghanistan, September 8, 2009",
    living: true,
    summary:
      "When Meyer's team and its Afghan partner forces were ambushed by more than 50 enemy fighters at Ganjgal, Meyer repeatedly moved into the kill zone to evacuate the wounded and recover the fallen; DVIDS-era coverage credits him with saving 36 U.S. and Afghan personnel. President Obama presented his medal September 15, 2011; he was the first living Marine recipient since the Vietnam era. Living recipient.",
    links: [
      { label: "CMOHS — Dakota L. Meyer", url: "https://www.cmohs.org/recipients/dakota-l-meyer" },
      { label: "CMOHS — Dakota L. Meyer (index)", url: "https://www.cmohs.org/index.php/recipients/dakota-l-meyer" },
    ],
  },
  {
    name: "John A. Chapman",
    rank: "Technical Sergeant (posthumously promoted to Master Sergeant), Air Force Special Tactics Combat Controller, attached to a U.S. Navy SEAL Team",
    branch: "U.S. Air Force",
    conflict: "War on Terrorism (Afghanistan)",
    placeDate: "Takur Ghar, Afghanistan, March 4, 2002",
    summary:
      "Chapman was the combat controller attached to a Navy SEAL team conducting reconnaissance operations on Takur Ghar on March 4, 2002. Per CMOHS, he \"distinguished himself by extraordinary heroism\" in the fight on the mountain after the team's insertion came under fire, fighting to protect his teammates. He was killed on Takur Ghar that day. His medal was presented posthumously at the White House on August 22, 2018.",
    links: [{ label: "CMOHS — John A. Chapman", url: "https://www.cmohs.org/recipients/john-a-chapman" }],
  },
  {
    name: "Britt K. Slabinski",
    rank: "Senior Chief Petty Officer (highest rank: Command Master Chief), U.S. Navy SEALs",
    branch: "U.S. Navy",
    conflict: "War on Terrorism (Afghanistan)",
    placeDate: "Takur Ghar, Afghanistan, March 4, 2002",
    living: true,
    summary:
      "In the early morning of March 4, 2002, Slabinski led a reconnaissance team to its assigned area atop a 10,000-foot snow-covered mountain — Takur Ghar — in support of Operation Enduring Freedom, and led the team through the fight that followed the contested insertion. His medal was presented May 24, 2018. He later served as President of the Congressional Medal of Honor Society (2023–2025 board). Living recipient. Profiled alongside Chapman deliberately: the same mountain, the same morning, two services.",
    links: [{ label: "CMOHS — Britt K. Slabinski", url: "https://www.cmohs.org/index.php/recipients/britt-k-slabinski" }],
  },
];

/* ------------------------------------------------------------------ */
/* Part 3 — Most Decorated (9 profiles — NOT a ranking)                */
/* ------------------------------------------------------------------ */

export const DECORATED_PROFILES: DecoratedProfile[] = [
  {
    name: "Audie Leon Murphy",
    branch: "U.S. Army",
    era: "World War II",
    decorations:
      "The U.S. Army (Army News Service, June 20, 2014) calls Murphy \"the most decorated Soldier in the 239-year-old history of the Army\" and \"widely said to be the most decorated American Soldier.\" For his January 26, 1945 action he earned the Medal of Honor; the Army lists among his other decorations a Distinguished Service Cross, a Silver Star with bronze oak leaf cluster, a Legion of Merit, a Bronze Star with \"V\" device, and a Purple Heart with two oak leaf clusters. Other Army articles put his total at 33 awards and decorations, including awards from France and Belgium, and note he received every U.S. decoration for valor then available.",
    links: [
      { label: "U.S. Army — one of America's most decorated soldiers", url: "https://www.army.mil/article-amp/128587/one_of_americas_most_decorated_soldiers_honored_graveside_on_his_birthday" },
      { label: "U.S. Army — Sergeant Audie Murphy Club", url: "https://www.army.mil/article/159019/nco_inducted_in_the_sergeant_audie_murphy_club" },
    ],
  },
  {
    name: "Lewis B. \"Chesty\" Puller",
    branch: "U.S. Marine Corps",
    era: "WWI / Banana Wars / WWII / Korea",
    decorations:
      "Marine Corps Base Quantico's official article calls Puller \"the most decorated Marine in the Corp's 240 year history\" [sic — Corps]. It lists five Navy Crosses; an Army Distinguished Service Cross; Silver Star Medal; Legion of Merit with combat \"V\" (2nd award); Bronze Star with combat \"V\"; Purple Heart; and campaign/service medals from World War I Victory through Korean Service. A Headquarters Marine Corps article adds the count of 14 personal decorations in combat. Puller never received the Medal of Honor — which is exactly why the counting-method caveat matters: his record is built on six second-highest valor awards (five Navy Crosses plus the Army DSC).",
    links: [
      { label: "Marine Corps Base Quantico — honoring Chesty Puller", url: "https://www.quantico.marines.mil/News/Article/630290/marines-honor-chesty-puller-with-annual-run/" },
      { label: "Headquarters Marine Corps — distinguished Marines stamps", url: "https://www.hqmc.marines.mil/News/Article/Article/552204/distinguished-marines-stamps-unveiled-among-navajo/" },
      { label: "U.S. Army — Chesty Puller memorial run", url: "https://www.army.mil/article-amp/271141/marine_corps_detachment_conducts_30th_annual_chesty_puller_memorial_run" },
    ],
  },
  {
    name: "Daniel Joseph Daly",
    branch: "U.S. Marine Corps",
    era: "Boxer Rebellion / Haiti / WWI",
    decorations:
      "CMOHS documents Daly as a two-time Medal of Honor recipient for two separate actions — Peking, China, August 14, 1900 (China Relief Expedition), and Fort Liberte/Fort Dipitie, Haiti, October 24, 1915 — one of only 19 service members ever to receive two Medals of Honor, and (with Smedley Butler) one of only two Marines to earn both for separate actions. CMOHS records his highest rank as Sergeant Major and both medals as held at the National Museum of the U.S. Marine Corps, Quantico. This pack lists only the two Medals of Honor for Daly because CMOHS is the gathered official source; secondary lists add a Navy Cross and Distinguished Service Cross, which the builder may add only with a cited source in hand.",
    links: [
      { label: "CMOHS — Daniel J. Daly (Haiti award)", url: "https://www.cmohs.org/recipients/daniel-j-daly-1" },
      { label: "CMOHS — Daniel J. Daly (China award)", url: "https://www.cmohs.org/kiosk/recipients/daniel-j-daly" },
      { label: "CMOHS — double recipients list", url: "https://www.cmohs.org/index.php/recipients/lists/double-recipients" },
    ],
  },
  {
    name: "Smedley Darlington Butler",
    branch: "U.S. Marine Corps",
    era: "1898–1931",
    decorations:
      "CMOHS documents Butler as a two-time Medal of Honor recipient for two separate actions — Vera Cruz, Mexico, April 22, 1914, and Fort Riviere, Haiti, November 17, 1915 — and CMOHS notes he is the only Marine officer to receive two Medals of Honor. Marine Corps University Press' Always Faithful chapter (drawing on the Marine Corps History Division) lists his featured medal bar as including the Navy Distinguished Service Medal, Army Distinguished Service Medal, Marine Corps Brevet Medal, and campaign medals from the Sampson West Indies medal through the Yangtze Service Medal, plus the Haitian Médaille Militaire. At his death he was described as the most decorated Marine in U.S. history.",
    links: [
      { label: "CMOHS — Smedley D. Butler (Haiti award)", url: "https://www.cmohs.org/recipients/smedley-d-butler" },
      { label: "CMOHS — Smedley D. Butler (Vera Cruz award)", url: "https://www.cmohs.org/recipients/smedley-d-butler-1" },
      { label: "Marine Corps University Press — Always Faithful, Ch. 18", url: "https://www.usmcu.edu/Outreach/Marine-Corps-University-Press/Books-by-topic/MCUP-Titles-A-Z/Always-Faithful/Always-Faithful-Chapter-18/" },
    ],
  },
  {
    name: "John Basilone",
    branch: "U.S. Marine Corps",
    era: "World War II",
    decorations:
      "The National Museum of the Marine Corps biography states Basilone received the Medal of Honor (Guadalcanal, October 24–25, 1942) and was posthumously awarded the Navy Cross for extraordinary heroism at Iwo Jima, where he was killed February 19, 1945 — and that he was the only enlisted Marine to receive both of these decorations in World War II. His listed awards are Medal of Honor, Navy Cross, and Purple Heart. This is a distinction-of-combination record, not a count record — a good in-app example of why \"most decorated\" depends on the measure.",
    links: [
      { label: "National Museum of the Marine Corps — John Basilone (PDF)", url: "https://usmcmuseum.com/uploads/6/0/3/6/60364049/john_basilone.pdf" },
    ],
  },
  {
    name: "Matt Louis Urban",
    branch: "U.S. Army",
    era: "World War II",
    decorations:
      "CMOHS documents Urban's Medal of Honor for a sustained series of actions from June 14 to September 3, 1944 in France and Belgium with Company F, 2d Battalion, 60th Infantry Regiment, 9th Infantry Division — presented by President Jimmy Carter at the White House on July 19, 1980, some 36 years after the actions, after the recommendation was lost for decades. The Encyclopedia.com biography (American National Biography entry) states Urban was \"decorated twenty-nine times for bravery\" and that the 1980 Medal of Honor enabled him to surpass Audie Murphy as the most highly decorated American veteran of World War II.",
    flag: "This claim conflicts with the Army's own Murphy framing (profile above) — both are presented with their sources, and neither is declared the winner here. CMOHS is the official source for the medal; the 29-count rests on the encyclopedia entry and is labeled as such.",
    links: [
      { label: "CMOHS — Matt L. Urban", url: "https://www.cmohs.org/recipients/matt-l-urban" },
      { label: "Encyclopedia.com — Urban, Matt Louis", url: "https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/urban-matt-louis" },
    ],
  },
  {
    name: "Robert Lewis Howard",
    branch: "U.S. Army",
    era: "Vietnam War",
    decorations:
      "Defense.gov's Medal of Honor Monday feature, citing Army Special Operations Command, calls Howard \"the most decorated soldier to have served in [Vietnam]\" and \"the only soldier to have been nominated three times for the Medal of Honor.\" Over five tours totaling 55 months in combat he was wounded 14 times; two of his three Medal of Honor recommendations (1968–69) were downgraded to the Distinguished Service Cross and the Silver Star before the third was awarded (presented March 2, 1971). The Army's burial article lists: Medal of Honor, Distinguished Service Cross, Silver Star, four Bronze Stars for Valor, eight Purple Hearts, Defense Superior Service Medal, four Legions of Merit, and a Bronze Star for Meritorious Achievement.",
    links: [
      { label: "Defense.gov — Medal of Honor Monday: Col. Robert L. Howard", url: "https://www.defense.gov/News/Feature-Stories/Story/Article/4014615/medal-of-honor-monday-army-col-robert-l-howard/" },
      { label: "U.S. Army — Col. Robert L. Howard", url: "https://www.army.mil/article-amp/34819" },
    ],
  },
  {
    name: "Joe Ronnie Hooper",
    branch: "U.S. Navy, then U.S. Army",
    era: "Vietnam War",
    decorations:
      "Defense.gov's Medal of Honor Monday feature calls Hooper \"one of the most decorated soldiers of the Vietnam War,\" crediting him with 37 medals, including two Silver Stars, six Bronze Stars, and eight Purple Hearts, alongside the Medal of Honor he received from President Nixon on March 7, 1969 for a roughly seven-hour action during the Tet Offensive while serving with Delta Company, 2d Battalion, 101st Airborne Division. Hooper had earlier served an enlistment in the Navy (to 1959) before his Army service.",
    links: [
      { label: "Defense.gov — Medal of Honor Monday: Sgt. Joe Ronnie Hooper", url: "https://www.defense.gov/News/Feature-Stories/story/Article/1873654/medal-of-honor-monday-army-sgt-joe-ronnie-hooper/" },
    ],
  },
  {
    name: "Roy Milton Davenport",
    branch: "U.S. Navy",
    era: "World War II (submarines)",
    decorations:
      "The Orders and Medals Society of America journal states only two men have earned five Navy Crosses: Puller and Lt. Cdr. Roy M. Davenport, a WWII submarine skipper (USS Haddock and USS Trepang). The Naval Submarine League archive states \"the most Navy Crosses ever awarded — five — were won by submariner CDR Roy Davenport.\" Military.com's history feature adds that, besides the five Navy Crosses, he received three Silver Star medals, a Bronze Star Medal, and the Presidential Unit Citation with two bronze stars, and was credited (Joint Army-Navy Assessment Committee figures) with sinking eight ships and damaging ten.",
    flag: "Sourcing note: no Naval History and Heritage Command page was gathered for Davenport — the five-Cross record rests on the Orders and Medals Society of America journal and the Naval Submarine League archive, flagged here for honesty.",
    links: [
      { label: "Orders and Medals Society of America journal (PDF)", url: "http://www.omsa.org/files/jomsa_arch/Splits/1986/55175_JOMSA_Vol37_3_19.pdf" },
      { label: "Naval Submarine League archive", url: "http://archive.navalsubleague.org/1991/submariner-purple-hearts" },
      { label: "Military.com — the praying skipper", url: "https://mst.military.com/history/how-praying-skipper-became-only-sailor-earn-5-navy-crosses.html" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Part 4 — Add Your Own Story: form options and rules (pack spec)     */
/* ------------------------------------------------------------------ */

export const STORY_BRANCHES = [
  "Army",
  "Marine Corps",
  "Navy",
  "Air Force",
  "Space Force",
  "Coast Guard",
  "Family / Home Front",
] as const;

export const STORY_ERAS = [
  "World War I",
  "World War II",
  "Korean War",
  "Vietnam War",
  "Gulf War",
  "Iraq",
  "Afghanistan",
  "Post-9/11 (other)",
  "Peacetime",
  "Other",
] as const;

export const STORY_CATEGORIES = [
  "Combat",
  "Deployment",
  "In the Field",
  "Mentorship",
  "Humor",
  "Loss & Remembrance",
  "Home Front",
] as const;

export const DISPLAY_CHOICES = [
  { value: "full", label: "Full name" },
  { value: "rank_last", label: "Rank + last name" },
  { value: "callsign", label: "Callsign" },
  { value: "anonymous", label: "Anonymous" },
] as const;

/** The pack §4.3 rules — rendered inside the submission flow, before
 * the story text box, and acknowledged again at submit. */
export const STORY_RULES: { title: string; text: string }[] = [
  {
    title: "Members only",
    text: "You must be a signed-in member to submit.",
  },
  {
    title: "Every story is reviewed before it is public",
    text: "All submissions go to PENDING review and are verified before publishing — the same flow as app contributions. Nothing appears publicly on submission.",
  },
  {
    title: "Unclassified only — OPSEC",
    text: "No current or recent unit locations, dates of operations, tactics, capabilities, or vulnerabilities. No information about ongoing or recent deployments that could identify where a unit is or what it is doing. Stories about current/recent service are held to the strictest reading of this rule. No unit designators for current/recent units in titles.",
  },
  {
    title: "Do not identify living people without their consent",
    text: "Do not name living service members in a way that identifies them unless you have their consent. Refer to others by role, first name only, or callsign if consent has not been given. Reviewers redact identifying names that lack consent.",
  },
  {
    title: "Respectful content",
    text: "No graphic gore detail and no content written for shock value. Hard stories are welcome; graphic detail is not. Review may edit for this rule or return the story to the author.",
  },
  {
    title: "Content warning for Loss & Remembrance",
    text: "Stories in the Loss & Remembrance category are published with a visible content-warning label, and readers see the warning before the story text.",
  },
  {
    title: "Report button",
    text: "Every published story carries a report button. A report sends the story back into the review queue for a moderator decision (keep / edit / remove).",
  },
  {
    title: "First-person honesty label",
    text: "Member stories are published labeled as personal accounts — a member's story is their recollection, presented as such, not independently fact-checked history.",
  },
];

export const STORY_ACK =
  "I understand: my story is unclassified and OPSEC-clean, it does not identify living people without their consent, and it will sit in PENDING review until it is verified and approved. Nothing publishes on submission.";
