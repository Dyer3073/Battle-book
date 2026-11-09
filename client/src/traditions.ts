// Traditions & Lore — static reference data transcribed from the
// researched traditions pack
// (~/workspace/military-app/traditions/traditions.md, researched
// November 2026 from official and museum sources). Summaries are the
// pack's own words; no facts were added and no flag was softened.
// Every URL is the pack's, byte-for-byte — none was constructed or
// guessed.
//
// The pack's honesty labels are the point of this section and travel
// with every item:
// - DOCUMENTED — supported by official records, regulations, or a
//   service's own history command.
// - TRADITION — a real, living custom; the practice is genuine even
//   where its origin story is a script, a legend, or simply
//   unrecorded.
// - LEGEND — the famous origin story, told as the legend it is.
// - DISPUTED — sources disagree or no proof exists; the card says so
//   instead of picking a winner.
//
// Standing rule (pack): where a beloved story is folklore, the card
// tells the story *and* labels it — it never prints folklore as fact.
//
// The pack's two reproduction-based citations are noted as the pack
// notes them: the Dahlgren Museum item carries NHHC material, and the
// National Museum of the Marine Corps blood-stripe material is cited
// via Marine Parents. Both carry a sourceNote on their cards.

export type TraditionLabel = "DOCUMENTED" | "TRADITION" | "LEGEND" | "DISPUTED";

export type TraditionLink = { label: string; url: string };

export type TraditionItem = {
  name: string;
  /** Branch subheading inside Group 2 (Branch Traditions). */
  branch?: string;
  /** The pack's label(s) for this item, rendered as visible badges. */
  labels: TraditionLabel[];
  /** The pack's label nuance in its own words, e.g. "DOCUMENTED
   * tradition (codified by order)". */
  labelNote?: string;
  summary: string;
  /** Pack lists rendered as bullets (the 13 fold meanings, the
   * POW/MIA table symbolism). */
  bullets?: string[];
  /** The pack's honesty flag / correction, rendered in an amber box. */
  flag?: string;
  links: TraditionLink[];
  /** A sourcing note rendered under the links (the pack's two
   * reproduction-based citations). */
  sourceNote?: string;
};

export type TraditionGroup = {
  title: string;
  note?: string;
  entries: TraditionItem[];
};

/** The pack's label legend — rendered at the top of the section. */
export const TRADITIONS_LABELS_NOTE =
  "How the labels work in this section: DOCUMENTED — supported by official records, regulations, or a service's own history command. TRADITION — a real, living custom; the practice is genuine even where its origin story is a script, a legend, or simply unrecorded. LEGEND — the famous origin story, told as the legend it is. DISPUTED — sources disagree or no proof exists; the label says so instead of picking a winner.";

/** The pack's standing rule for this section. */
export const TRADITIONS_STANDING_RULE =
  "Standing rule: where a beloved story is folklore, the card tells the story and labels it — it never prints folklore as fact.";

export const TRADITION_GROUPS: TraditionGroup[] = [
  /* ---------------------------------------------------------------- */
  /* Group 1 — Flag & Honors (7)                                       */
  /* ---------------------------------------------------------------- */
  {
    title: "Flag & Honors",
    entries: [
      {
        name: "The 13 Folds of the Flag",
        labels: ["TRADITION"],
        labelNote: "TRADITION (ceremonial script)",
        summary:
          "At funerals and retreat ceremonies the flag is folded 13 times into its triangle. A widely used script read by honor guards and veterans' organizations assigns a meaning to each fold:",
        bullets: [
          "Life",
          "Belief in eternal life",
          "Honor and remembrance of the departing veteran",
          "Trust in divine guidance",
          "Tribute to country",
          "The pledge of allegiance",
          "Tribute to the armed forces",
          "The “valley of the shadow of death”",
          "Tribute to womanhood",
          "Tribute to fathers",
          "The seal of David and Solomon",
          "Eternity and the Trinity",
          "Finally the stars uppermost, recalling “In God We Trust”",
        ],
        flag: "Honest label: these meanings are a beloved ceremonial script, not official doctrine — they appear nowhere in the U.S. Flag Code and are not an official DoD ceremony element, and a second popular explanation (one fold for each of the original 13 colonies) is equally uncodified. Both are presented as tradition, not fact.",
        links: [
          {
            label: "Military.com — The Meaning Behind the 13 Folds of Old Glory",
            url: "https://www.military.com/flag-day/meaning-behind-13-flag-folds.html",
          },
        ],
      },
      {
        name: "Flag Etiquette — the Official Route",
        labels: ["DOCUMENTED"],
        summary:
          "For the rules themselves, this card routes you to the law rather than paraphrasing it: the U.S. Flag Code (4 U.S.C. Chapter 1), especially §8 “Respect for flag” — never displayed union-down except as a distress signal, never touching the ground, never worn as apparel or used in advertising, and retired by dignified destruction when worn out. The Code is advisory for civilians (it carries no penalties); the services follow their own regulations on top of it.",
        links: [
          {
            label: "U.S. Government Publishing Office — 4 U.S.C. §8, Respect for flag (the law itself)",
            url: "https://www.govinfo.gov/content/pkg/USCODE-2022-title4/html/USCODE-2022-title4-chap1-sec8.htm",
          },
        ],
      },
      {
        name: "Taps",
        labels: ["DOCUMENTED"],
        summary:
          "The 24-note call dates to July 1862, when Union Brig. Gen. Daniel Butterfield, camped at Harrison's Landing, Virginia, worked out a new “lights out” call with his bugler, Pvt. Oliver Willcox Norton — Arlington notes it may have been adapted from an earlier call, the “Scott Tattoo.” It spread between brigades within days, was soon sounded at a battlefield funeral, and became the Army's official call in 1874. Today it is played at the end of the day on installations, at flag ceremonies, and to close every military funeral with honors. The familiar “Day is done” words are a later traditional lyric, not an official text — Taps is a bugle call, not a song with official words.",
        links: [
          {
            label: "Arlington National Cemetery — Funeral Elements",
            url: "https://arlingtoncemetery.mil/Funerals/Attending-a-Funeral/Funeral-Elements",
          },
        ],
      },
      {
        name: "The Tomb of the Unknown Soldier",
        labels: ["DOCUMENTED"],
        summary:
          "The Tomb began with the burial of the World War I Unknown on November 11, 1921; it now also holds Unknowns from World War II and Korea (the Vietnam Unknown's crypt stands empty — that service member was later identified and reburied). The guard timeline matters because the popular version gets it wrong: the Tomb was not guarded from the start. A civilian guard was posted in 1925 after disrespectful visitor behavior, a military guard followed in 1926 (daylight hours only), around-the-clock duty began in 1937, and the 3rd U.S. Infantry Regiment — “The Old Guard” — took over the watch in 1948 and holds it still.",
        links: [
          {
            label: "Arlington National Cemetery — The Tomb of the Unknown Soldier: A Brief History (PDF)",
            url: "https://www.arlingtoncemetery.mil/Portals/0/Docs/tomb-history.pdf",
          },
          {
            label: "Arlington National Cemetery — Tomb of the Unknown Soldier",
            url: "https://www.arlingtoncemetery.mil/Explore/Monuments-and-Memorials/Tomb-of-the-Unknown-Soldier",
          },
        ],
      },
      {
        name: "The Changing of the Guard",
        labels: ["DOCUMENTED"],
        summary:
          "Sentinels of The Old Guard stand watch 24 hours a day, 365 days a year, in any weather; the guard changes every hour in winter months and every half hour in summer. The Sentinel walks 21 steps along the mat, pauses 21 seconds facing east, then 21 seconds facing north — Arlington states the number 21 symbolizes the highest military honor, the 21-gun salute. Earning the Tomb Guard Identification Badge (one of the Army's rarest badges) requires passing tests that include 100 questions drawn from some 300 memorized facts about the cemetery, at better than 95 percent.",
        flag: "Not included: the viral claims that Sentinels swear lifetime vows of abstinence or silence — Arlington's official materials describe no such vows.",
        links: [
          {
            label: "Arlington National Cemetery — Changing of the Guard",
            url: "https://www.arlingtoncemetery.mil/explore/changing-of-the-guard",
          },
        ],
      },
      {
        name: "Three Volleys — NOT a 21-Gun Salute",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (with a correction)",
        summary:
          "The rifle party at a funeral fires three volleys over the grave. Army funeral-honors guidance traces the custom to battlefield practice: fighting paused while both sides cleared their dead, and three volleys signaled the dead were cared for and fighting could resume. The Army states the correction plainly: even when seven riflemen fire three volleys (21 shots total), that does not constitute a 21-gun salute — a gun salute is fired by cannon or naval guns, one round at a time, as an honor for specific persons and occasions. The two honors are separate and are not interchangeable.",
        links: [
          {
            label: "U.S. Army, Military Funeral Honors (Casualty Assistance)",
            url: "https://home.army.mil/yakima/my-fort-1/all-services/casualty-assistance",
          },
        ],
      },
      {
        name: "Funeral Flyovers & the Missing Man Formation",
        labels: ["DOCUMENTED"],
        summary:
          "At some aviators' funerals, a formation flies over the graveside and one aircraft pulls up and out of the formation, leaving a visible gap — the missing man — while the rest fly on. It is a salute to a fallen flyer, flown at Arlington for pilots and notable figures; it is not a standard element of military funeral honors and is reserved for a small number of services. In a rare variation at Arlington in 2022, the Thunderbirds flew a double missing man for twin brothers, both former Thunderbird pilots, buried together with their wives.",
        links: [
          {
            label: "Arlington National Cemetery (ANC Blog) — Thunderbirds honor twin generals",
            url: "https://arlingtoncemetery.mil/Blog/Post/12714/Thunderbirds-Honor-Air-Force-Twin-Generals-Buried-with-Their-Wives-at-ANC",
          },
          {
            label: "U.S. Department of Defense — missing man formation photo",
            url: "https://www.defense.gov/Multimedia/Photos/igphoto/2003079048/",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 2 — Branch Traditions (13)                                  */
  /* ---------------------------------------------------------------- */
  {
    title: "Branch Traditions",
    entries: [
      {
        name: "The Marine Corps Birthday & Cake-Cutting Ceremony",
        branch: "Marine Corps",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED tradition (codified by order)",
        summary:
          "Marines celebrate the Corps' birthday on November 10 — the date in 1775 when the Continental Congress authorized two battalions of Marines — in garrison, in the field, and in combat. The cake-cutting ceremony is prescribed in an official ALMAR reinforcing the Drill and Ceremonies Manual: the commander cuts the cake and gives the first piece to the guest of honor, then hands the second piece to the oldest Marine present as a sign of honor to experience; the oldest Marine takes a bite and passes the piece, with a clean fork, directly to the youngest Marine present — symbolizing the passing of wisdom, knowledge, and trust to those who will carry the Corps forward.",
        links: [
          {
            label: "U.S. Marine Corps, ALMAR 052/08 — Customs and Traditions",
            url: "https://www.marines.mil/News/Messages/Messages-Display/Article/886473/customs-and-traditions",
          },
        ],
      },
      {
        name: "The Marines' Hymn",
        branch: "Marine Corps",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (authorship honestly unknown)",
        summary:
          "The Marine Corps' official hymn is, per the Corps, the oldest official song in the U.S. military; its opening lines pair Chapultepec (1847, “Halls of Montezuma”) with Derne, Tripoli (1805, “shores of Tripoli”), and the melody comes from Offenbach's 1867 comic opera Geneviève de Brabant. The Corps' own history page is candid about the gaps: the lyricist is unknown, no pre-20th-century text of the lyrics is known, and the story that a Marine in Mexico wrote them is labeled legend by the Corps itself. The Commandant authorized the official three-verse version in 1929.",
        links: [
          {
            label: "U.S. Marine Corps (HQMC History & Museums) — What is the Marines' Hymn?",
            url: "https://www.hrom.marines.mil/New-Employees/About-the-Marine-Corps/Hymn/",
          },
        ],
      },
      {
        name: "The Navy Birthday & “Anchors Aweigh”",
        branch: "Navy",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (song is unofficial — and that's official)",
        summary:
          "The Navy's birthday is October 13, 1775, when the Continental Congress voted to fit out two armed vessels — the Naval History and Heritage Command calls that resolution the Navy's “birth certificate”; CNO Admiral Elmo Zumwalt formally designated the date in 1972. Birthday observances traditionally include a cake cutting and the singing of “Anchors Aweigh.” The honest footnote the Navy itself keeps: the Navy has no official song and no official motto — “Anchors Aweigh” (1906, music by Naval Academy bandmaster Charles Zimmermann, lyrics begun by Midshipman Alfred Miles for the Army–Navy game) is the beloved unofficial song, and “Semper Fortis” and “Non sibi, sed patriae” are unofficial mottos.",
        links: [
          {
            label: "Military.com (NAVADMIN, Navy birthday recognition)",
            url: "https://www.military.com/navy-birthday/navy-238th-birthday.html?amp",
          },
          {
            label: "NSWC Dahlgren Museum — “Did You Know” (NHHC material)",
            url: "https://www.dahlgrenmuseum.org/post/did-you-know-october-2-2023",
          },
        ],
        sourceNote:
          "Reproduction-based citation, as the pack notes it: the Dahlgren Museum item carries Naval History and Heritage Command (NHHC) material.",
      },
      {
        name: "Christening & Launching a Ship",
        branch: "Navy",
        labels: ["DOCUMENTED", "TRADITION"],
        summary:
          "A Navy ship gets its name at christening, when the ship's sponsor — most often a woman with a connection to the ship or its namesake — breaks a bottle of champagne across the bow as the ship is launched or formally named. NAVSEA traces ship-blessing customs back to antiquity; the first recorded christening of a U.S. Navy ship was USS Constitution on October 21, 1797, whose sponsor broke a bottle of wine. Modern christening and launching are often separate events; neither makes the ship a warship — that happens at commissioning.",
        links: [
          {
            label: "Naval Sea Systems Command — Shipbuilding 101",
            url: "https://www.navsea.navy.mil/Home/Team-Ships/Shipbuilding-101/",
          },
        ],
      },
      {
        name: "Commissioning & Manning the Rails",
        branch: "Navy",
        labels: ["DOCUMENTED", "TRADITION"],
        summary:
          "Commissioning is the moment a ship joins the fleet: the commissioning pennant is broken at the masthead, the ship “comes alive,” takes the prefix USS, and the crew ceremonially runs aboard — traditionally after the sponsor gives the first order, “Man our ship and bring her to life!” Original crew members are honored ever after as plank owners. “Manning the rails” — sailors stationed evenly along the rails and superstructure in dress uniform — is the Navy's way of rendering honors when entering or leaving port or passing another honored ship or place.",
        links: [
          {
            label: "Naval Sea Systems Command — Shipbuilding 101",
            url: "https://www.navsea.navy.mil/Home/Team-Ships/Shipbuilding-101/",
          },
          {
            label: "National Park Service — Ship Ceremonies in the Charlestown Navy Yard",
            url: "https://www.nps.gov/articles/000/ship-ceremonies-cny.htm",
          },
        ],
      },
      {
        name: "The Army Birthday",
        branch: "Army",
        labels: ["DOCUMENTED"],
        summary:
          "The Army's birthday is June 14, 1775, when the Second Continental Congress adopted the New England army besieging Boston and voted to raise ten companies of expert riflemen from Pennsylvania, Maryland, and Virginia — more than a year before the Declaration of Independence. Congress appointed George Washington commander in chief the next day. The date is shared with Flag Day.",
        links: [
          {
            label: "U.S. Army Center of Military History — Chronology of Army History",
            url: "https://history.army.mil/Research/Reference-Topics/Army-Birthdays/Chronology-of-Army-History/",
          },
        ],
      },
      {
        name: "“The Army Goes Rolling Along”",
        branch: "Army",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (adoption date honestly varies by Army source)",
        summary:
          "The Army's official song began in 1908 as the “Caisson Song,” written in the Philippines by Field Artillery 1st Lt. Edmund L. Gruber about horse-drawn ammunition caissons; John Philip Sousa reworked it in 1917 as “The Field Artillery Song,” and with new lyrics it became the Army-wide song, retitled “The Army Goes Rolling Along.”",
        flag: "The adoption date is printed both ways, because the Army's own sources print it both ways: the Soldier's Guide / Army Blue Book says the song was adopted in 1952, while other Army accounts date the official dedication to Veterans Day 1956. The discrepancy is the Army's, not a typo — it is not smoothed over here.",
        links: [
          {
            label: "U.S. Army — The Soldier's Guide / Army Blue Book (PDF)",
            url: "https://www.in.gov/indiana-national-guard/files/The-Army-Blue-Book.pdf",
          },
        ],
      },
      {
        name: "The Air Force Birthday",
        branch: "Air Force",
        labels: ["DOCUMENTED"],
        summary:
          "The Air Force celebrates September 18, 1947 — the day the Department of the Air Force stood up under the National Security Act of 1947 (signed July 26) and W. Stuart Symington was sworn in as the first Secretary of the Air Force, making the USAF a separate, co-equal service. The distinction the Air Force itself draws: September 18 is the birth of the independent Air Force, not of American military aviation, whose Army lineage runs back to 1907.",
        links: [
          {
            label: "Air Combat Command — Forged in Crisis: The Enduring Legacy of Tactical Air Command",
            url: "https://www.acc.af.mil/News/Article-Display/Article/4438211/forged-in-crisis-the-enduring-legacy-of-tactical-air-command/",
          },
        ],
      },
      {
        name: "The U.S. Air Force Song & the “Toast to the Host”",
        branch: "Air Force",
        labels: ["DOCUMENTED", "TRADITION"],
        labelNote: "DOCUMENTED song / TRADITION toast",
        summary:
          "“The U.S. Air Force” (“Off we go into the wild blue yonder”) won a 1938 Liberty magazine contest — 757 entries judged by a committee of Air Corps wives — written by Robert MacArthur Crawford, himself a pilot, and introduced at the Cleveland Air Races on September 2, 1939. Crawford's original includes a somber bridge, the “Toast to the Host,” written for fallen airmen; by custom it is performed separately and solemnly as a toast to the host who “dropped out of the formation,” rather than sung with the rousing verses.",
        links: [
          {
            label: "Hill Air Force Base (U.S. Air Force) — History of the U.S. Air Force Song",
            url: "https://www.hill.af.mil/About-Us/Fact-Sheets/Display/Article/397525/history-of-the-us-air-force-song/",
          },
        ],
      },
      {
        name: "The Space Force Birthday & the Guardians",
        branch: "Space Force",
        labels: ["DOCUMENTED"],
        summary:
          "The youngest branch celebrates December 20, 2019, when the FY2020 National Defense Authorization Act established the U.S. Space Force — the first new branch in 73 years. Its members are Guardians (not Soldiers, Sailors, Airmen, Marines, or Coast Guardsmen), and the service's stated Guardian Values are Character, Commitment, Connection, and Courage.",
        links: [
          {
            label: "Space Systems Command (U.S. Space Force) — 5 years securing our nation's interests",
            url: "https://www.ssc.spaceforce.mil/Newsroom/Article/3927033/5-years-securing-our-nations-interests-in-from-and-to-space",
          },
        ],
      },
      {
        name: "“Semper Supra” — Motto & Song",
        branch: "Space Force",
        labels: ["DOCUMENTED"],
        summary:
          "The Space Force's motto is Semper Supra, Latin for “Always Above.” In 2022 the service unveiled its official song, also titled “Semper Supra,” written to give Guardians a shared musical identity alongside the older services' songs; birthday celebrations now traditionally close with the singing of it, the way older branches close with theirs.",
        links: [
          {
            label: "Space Systems Command (U.S. Space Force) — 5 years securing our nation's interests",
            url: "https://www.ssc.spaceforce.mil/Newsroom/Article/3927033/5-years-securing-our-nations-interests-in-from-and-to-space",
          },
          {
            label: "Los Angeles Air Force Base (USSF) — USSF turns four",
            url: "https://www.losangeles.spaceforce.mil/News/Article-Display/Article/3622148/ussf-turns-four-birthday-celebration-at-la-afb/",
          },
        ],
      },
      {
        name: "The Coast Guard Birthday",
        branch: "Coast Guard",
        labels: ["DOCUMENTED"],
        summary:
          "The Coast Guard counts its birthday as August 4, 1790, when President Washington signed Treasury Secretary Alexander Hamilton's bill authorizing ten cutters — the Revenue-Marine, later the Revenue Cutter Service — to enforce the new nation's tariff laws. The modern Coast Guard was formed on January 28, 1915, when the Revenue Cutter Service merged with the U.S. Life-Saving Service. It is the oldest continuous seagoing service in the United States.",
        links: [
          {
            label: "U.S. Department of Defense — Coast Guard Celebrates 235 Years Protecting Nation's Waterways",
            url: "https://www.defense.gov/News/News-Stories/Article/Article/4241843/coast-guard-celebrates-235-years-protecting-nations-waterways/",
          },
        ],
      },
      {
        name: "“Semper Paratus”",
        branch: "Coast Guard",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (adoption honestly unknown)",
        summary:
          "The Coast Guard's motto, Semper Paratus — “Always Ready” — was an old Revenue Cutter watchword, officially recognized in 1910. The service's own historians are candid that no one knows exactly how or when it was adopted. Capt. Francis Saltus Van Boskerck wrote the words of the official march “Semper Paratus” in the cabin of the cutter Yamacraw in 1922 and composed the music five years later; the song and the motto share the name.",
        links: [
          {
            label: "U.S. Coast Guard Historian's Office — Semper Paratus",
            url: "https://www.history.uscg.mil/Browseby-Topic/History-Heritage-Traditions/Semper-Paratus/",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 3 — Culture & Custom (10)                                   */
  /* ---------------------------------------------------------------- */
  {
    title: "Culture & Custom",
    entries: [
      {
        name: "Challenge Coins",
        labels: ["TRADITION", "LEGEND"],
        labelNote: "TRADITION / LEGEND (no official origin exists)",
        summary:
          "Commanders and units present coin-sized medallions bearing the unit emblem to mark membership, achievement, and shared service. The famous origin story — a World War I American pilot whose bronze squadron medallion saved his life after capture — is a legend: the Department of Defense itself notes that the Pentagon librarians and the Army and Navy history commands hold no written records of the tradition's start, and competing accounts place early unit coins with Special Forces in the 1960s and the oldest confirmed surviving coin with the 17th Infantry Regiment in the Korean War era. The WWI story is told here as the legend it is.",
        links: [
          {
            label: "U.S. Department of Defense — The Challenge Coin Tradition: Do You Know How It Started?",
            url: "https://www.defense.gov/News/Inside-DOD/Blog/Article/2567302/the-challenge-coin-tradition-do-you-know-how-it-started/",
          },
        ],
      },
      {
        name: "The Coin Check",
        labels: ["TRADITION"],
        labelNote: "TRADITION (custom, not regulation)",
        summary:
          "The game that gives challenge coins their name: any member may call a “coin check” — traditionally by producing and showing (or audibly tapping) their coin — and anyone who cannot produce a coin buys the next round; if everyone produces one, the challenger buys. The Air Force traces the check's ancestry to post-WWI “Pfennig checks” among Americans in Germany, where the man caught without a pfennig bought the round. There are no official rules — penalties, valid coins, and even whether a wallet-carried coin counts vary entirely by unit custom.",
        links: [
          {
            label: "U.S. Air Force — Challenge Coins: A Tradition of Excellence",
            url: "https://www.af.mil/News/Article-Display/Article/584692/challenge-coins-a-tradition-of-excellence/",
          },
        ],
      },
      {
        name: "The Marine Corps Blood Stripe",
        labels: ["DOCUMENTED", "TRADITION"],
        labelNote: "DOCUMENTED facts, TRADITION meaning",
        summary:
          "Every Marine learns that the scarlet stripe on officers' and NCOs' Dress Blue trousers honors the blood of Marine leaders at Chapultepec in 1847. The Marine Corps' own public history says, in its words, the story is “more fable than fact”: trouser stripes predate the battle (stripes appear in the 1830s following Army practice, became solid red in 1849 to match the coat's red facings, and took today's form in 1904), and the History Division counts seven Marines killed at Chapultepec out of some 450 engaged — not the overwhelming leader casualties of the legend. What the Corps does today is deliberate and documented: the stripe is pledged as a tribute to the sacrifice of Marines in every battle, before and after Chapultepec. Both halves are printed here — the documented uniform history and the living meaning.",
        links: [
          {
            label: "U.S. Marine Corps (marines.com) — The Blood Stripe",
            url: "https://www.marines.com/ethos/articles/blood-stripe.html",
          },
          {
            label: "National Museum of the Marine Corps (via Marine Parents) — motto and slogans",
            url: "https://marineparents.com/marinecorps/motto-and-slogans.asp",
          },
        ],
        sourceNote:
          "Reproduction-based citation, as the pack notes it: the National Museum of the Marine Corps material is cited via Marine Parents.",
      },
      {
        name: "Call Signs",
        labels: ["TRADITION"],
        summary:
          "An aviator's call sign is a nickname bestowed by squadronmates — never self-chosen — usually earned from a surname, a physical trait, or, most often, something embarrassing done early and never lived down; the name, and its (often embellished) story, follows the aviator for a career. The documented arc: personal nicknames existed early, but in World War II radio call signs identified aircraft and ships, not individual pilots; personal call signs became common only in the 1970s, and formal naming ceremonies were institutionalized in the 1980s.",
        links: [
          {
            label: "Norfolk Navy Flagship (U.S. Navy) — The Story Behind Call Signs, quoting the National Naval Aviation Museum historian",
            url: "https://www.militarynews.com/norfolk-navy-flagship/news/quarterdeck/the-story-behind-call-signs/article_e8e64484-1e50-11ed-8be5-8367f621c65b.html",
          },
        ],
      },
      {
        name: "“Oorah” (Marine Corps)",
        labels: ["TRADITION"],
        labelNote: "TRADITION with a documented root",
        summary:
          "The Marine Corps' all-purpose cry of motivation and acknowledgment is young: no Marine before about 1950 said it. The account carried in the Marine Corps' own training reference material traces it to 1953, when Marines of the 1st Amphibious Reconnaissance Company rode the submarine USS Perch and heard the diving klaxon's “Aarugha!” — they imitated it on conditioning runs, and it shortened to “Oorah,” spreading Corps-wide in the 1980s–90s (Sgt. Maj. John Massaro, a recon Marine turned drill instructor, is widely credited with carrying it into recruit training). The competing claim that it comes from a Turkish word for “kill” is explicitly debunked in the Marine Corps' own telling.",
        links: [
          {
            label: "U.S. Department of Defense — Marine Corps' Famous 'Oorah' Mantra Started in a Submarine",
            url: "https://www.defense.gov/News/Feature-Stories/Story/article/4033153/marine-corps-famous-oorah-mantra-started-in-a-submarine/",
          },
          {
            label: "U.S. Marine Corps (TECOM) — The Meaning of 'Oorah' Traced Back to Its Roots",
            url: "https://www.tecom.marines.mil/news/news-article-display/article/527660/the-meaning-of-oorah-traced-back-to-its-roots/",
          },
        ],
      },
      {
        name: "“Hooah” (Army)",
        labels: ["DISPUTED"],
        labelNote: "DISPUTED origin",
        summary:
          "“Hooah” is the Army's word for almost anything except “no” — acknowledgment, agreement, motivation. Its origin is genuinely unsettled, and this card says so: the most repeated explanation, that it spells out H-U-A (“Heard, Understood, Acknowledged”), appears in Army tradition texts but is regarded by military historians as likely folk etymology (a backronym); an older story traces it to “Hough!”, a toast attributed to Seminole chief Coacoochee in 1841; a third credits a misheard “Who, us?” from Rangers on D-Day. No account is proven.",
        links: [
          {
            label: "Military Times — Where 'Hooah,' 'Oorah,' and 'Hooyah' Came From and Why They Still Echo",
            url: "https://www.airforcetimes.com/news/your-air-force/2025/07/29/where-hooah-oorah-and-hooyah-came-from-and-why-they-still-echo/",
          },
        ],
      },
      {
        name: "“Hooyah” (Navy)",
        labels: ["DISPUTED"],
        labelNote: "DISPUTED origin",
        summary:
          "“Hooyah” is the battle cry of Naval Special Warfare — the required, full-volume answer to everything in BUD/S — later adopted by Navy EOD and diving communities and then more widely in the Navy and Coast Guard. It is generally placed in the Underwater Demolition Team / early SEAL training culture of the 1950s, but its precise origin is unrecorded: theories (a volleyball-playing UDT instructor's spike cry, a reversed “yahoo,” a battle-stations siren) are all unattributed lore, and acronym explanations offered for it are backronyms borrowed from the Army's.",
        links: [
          {
            label: "Military Times — Where 'Hooah,' 'Oorah,' and 'Hooyah' Came From and Why They Still Echo",
            url: "https://www.airforcetimes.com/news/your-air-force/2025/07/29/where-hooah-oorah-and-hooyah-came-from-and-why-they-still-echo/",
          },
        ],
      },
      {
        name: "Mess Night & the Grog Bowl",
        labels: ["TRADITION"],
        labelNote: "TRADITION (codified custom)",
        summary:
          "The Marine Corps mess night (other services: dining-in) is a formal, members-only dinner inherited from British regimental practice, run by a President of the Mess with a “Mr./Madam Vice,” under written Rules of the Mess — the ceremony is codified in the Marine Corps Drill and Ceremonies Manual. Members may “charge” each other with comic or real infractions; the President levies fines, and the classic sentence is a drink from the grog bowl — a deliberately unappetizing mystery mixture (recipes are unit secrets and vary wildly; many messes keep a non-alcoholic grog). The evening balances farce with solemnity: the beef is ceremonially tasted and declared “fit for human consumption,” a table is set for fallen comrades, and the closing toasts honor the dead.",
        flag: "The History Division's own mess-night history says the grog was “supposedly” served to recruits at Tun Tavern — the word “supposedly” is the Corps' own, and it stays.",
        links: [
          {
            label: "U.S. Marine Corps (MCAS Yuma) — What a Mess… Night",
            url: "https://www.marines.mil/News/News-Display/Article/550272/what-a-mess-night/",
          },
          {
            label: "U.S. Marine Corps (MCLB Albany) — Mess Night: Marines Celebrate One of Corps' Oldest Traditions",
            url: "https://www.albany.marines.mil/News/Article/Article/961573/mess-night-marines-celebrate-one-of-corps-oldest-traditions/",
          },
        ],
      },
      {
        name: "The POW/MIA Table (Missing Man Table)",
        labels: ["DOCUMENTED", "TRADITION"],
        labelNote: "DOCUMENTED ceremony script / TRADITION symbolism",
        summary:
          "At formal dinners and in dining facilities worldwide, a small table stands set but empty for prisoners of war and the missing. The Defense POW/MIA Accounting Agency publishes the ceremony and is candid that many narrative variations exist while the symbolism stays constant:",
        bullets: [
          "The round table — for everlasting concern",
          "The white cloth — for the purity of their motives",
          "The single red rose — for their lives and the loved ones awaiting answers",
          "The yellow ribbon — for continued determination to account for them",
          "The lemon slice — for their bitter fate",
          "The salt — for families' tears",
          "The lighted candle — for hope of return",
          "The inverted glass — because they cannot toast",
          "The empty chair — they are missing",
        ],
        flag: "Tables are set for one, or for six (the five services and civilians). DPAA acknowledges many sanctioned narrative variations — this card prints DPAA's version and says so, rather than declaring one script canonical.",
        links: [
          {
            label: "Defense POW/MIA Accounting Agency (DPAA) — POW/MIA Recognition Day Toolkit (PDF)",
            url: "https://www.dpaa.mil/Portals/85/Documents/POW-MIA%20Recognition%20Day/POW-MIA%20Day%20Toolkit.pdf",
          },
        ],
      },
      {
        name: "Military Ball Etiquette Basics",
        labels: ["DOCUMENTED"],
        labelNote: "DOCUMENTED (official guidance)",
        summary:
          "The ball is a ceremony first and a party second. The Old Guard's published ball guide gives the working basics: arrive on time in the prescribed uniform or formal attire; go through the receiving line early, empty-handed (no drink or food in line) and keep greetings brief; follow the printed program — stand for the posting of the colors, stay silent through the invocation, remarks, and guest speaker; and take the toasts seriously, listening for each proposed toast and answering with the response printed in the program. Toasts may be drunk with any charged glass — alcohol is never required — and by long custom you never drink a toast to yourself.",
        links: [
          {
            label: "U.S. Army (3rd U.S. Infantry Regiment, The Old Guard) — TOG Ball Etiquette",
            url: "https://www.army.mil/article-amp/18967/tog_ball_etiquette",
          },
          {
            label: "U.S. Army protocol guidance — receiving lines & toasting",
            url: "https://dn720005.ca.archive.org/0/items/mipc-carlisle_army_mil/carlisle.army.mil_OIQ5T67ADC3AGID2OHVJQLO3ELCL64ZF.pdf",
          },
        ],
      },
    ],
  },
];
