// Songs, Anthem & Pledge + Flags — Parts 1–3 data (service songs, the
// national items, allied anthems), transcribed from the researched
// ceremonial pack (~/workspace/military-app/anthems/anthems.md,
// researched November 2026 from official sources only: service
// history/band pages, the U.S. Code, national legislation, and the 17
// allies' own government pages). Part 4 (flags) lives in flags.ts.
//
// The pack's rules are the section's rules, and they are load-bearing:
// - Lyrics ONLY as the owning service or government publishes them.
//   No lyrics sites, nothing filled in from memory.
// - Translations are NEVER produced here. An English side exists only
//   where the owning government itself publishes one (South Korea,
//   Korea.net), where the anthem has two official language versions
//   (Canada, New Zealand), or where the anthem is English-native (UK,
//   Australia). Everywhere else the English side shows the official
//   English summary plus the NO OFFICIAL TRANSLATION flag.
// - Spain's Marcha Real has NO lyrics in any language. No proposed
//   lyric set is printed, ever.
// - Deutschlandlied verses 1–2 are excluded — they are not the anthem.
// - Conflicts print as conflicts (DOCUMENTED / TRADITION / LEGEND /
//   DISPUTED labels and ⚠ flags travel with the entries).

export type SongLink = { label: string; url: string };

export type LyricBlock = { heading?: string; lines: string[] };

export type LyricSet = {
  label: string;
  note?: string;
  blocks: LyricBlock[];
};

export type ServiceSong = {
  id: string;
  branch: string;
  title: string;
  /** The pack's status line where the service itself qualifies the
   * song (the Navy's "unofficial" label). */
  statusNote?: string;
  sourceName: string;
  links: SongLink[];
  intro: string[];
  lyricSets: LyricSet[];
  facts: string[];
  flags: string[];
  credit?: string;
};

export const SONGS_LABELS_NOTE =
  "How the labels work in this section: DOCUMENTED — stated by an official source of record. TRADITION — told as tradition by the official source itself. LEGEND — the official source itself calls it legend, or it is a story with no contemporary record. DISPUTED — official sources of record disagree; both are printed, never blended. ⚠ marks a flag: an official-vs-official conflict, a copyright limit, a superseded text, or a verification still owed.";

export const SONGS_STANDING_RULE =
  "Lyrics are printed only as the owning service or government publishes them. Translations are never made here: an English side appears only where the government itself publishes one — everywhere else the toggle shows the official English summary and says so.";

export const SERVICE_SONGS: ServiceSong[] = [
  {
    id: "army-song",
    branch: "U.S. Army",
    title: "The Army Song — “The Army Goes Rolling Along”",
    sourceName: "U.S. Army — “The Army Song,” Army Values (army.mil)",
    links: [
      { label: "The Army Song — Army Values (army.mil)", url: "https://www.army.mil/values/song.html" },
      { label: "Army returns to original song (army.mil, 2013)", url: "https://www.army.mil/article/105459/army_returns_to_original_song" },
    ],
    intro: [
      "The official title per army.mil is “The Army Song.” Lyrics below are the full text as the Army publishes it on its Army Values page.",
    ],
    lyricSets: [
      {
        label: "Lyrics as published by the Army",
        blocks: [
          {
            heading: "Verse",
            lines: [
              "March along, sing our song, with the Army of the free.",
              "Count the brave, count the true, who have fought to victory.",
              "We're the Army and proud of our name!",
              "We're the Army and proudly proclaim:",
            ],
          },
          {
            heading: "First Chorus",
            lines: [
              "First to fight for the right,",
              "And to build the Nation's might,",
              "And the Army goes rolling along.",
              "Proud of all we have done,",
              "Fighting till the battle's won,",
              "And the Army goes rolling along.",
            ],
          },
          {
            heading: "Refrain",
            lines: [
              "Then it's hi! hi! hey!",
              "The Army's on its way.",
              "Count off the cadence loud and strong;",
              "For where'er we go,",
              "You will always know",
              "That the Army goes rolling along.",
            ],
          },
          {
            heading: "Second Chorus",
            lines: [
              "Valley Forge, Custer's ranks,",
              "San Juan Hill and Patton's tanks,",
              "And the Army went rolling along.",
              "Minute men, from the start,",
              "Always fighting from the heart,",
              "And the Army keeps rolling along.",
            ],
          },
          {
            heading: "Third Chorus (slower)",
            lines: [
              "Men in rags, men who froze,",
              "Still that Army met its foes,",
              "And the Army went rolling along.",
              "Faith in God, then we're right,",
              "And we'll fight with all our might,",
              "As the Army keeps rolling along.",
            ],
          },
        ],
        note: "The final refrain as published adds the cadence calls “(two! three!)” and “(keep it rolling!)”.",
      },
    ],
    facts: [
      "DOCUMENTED (per army.mil): Written by Field Artillery First Lieutenant (later Brigadier General) Edmund L. Gruber in the Philippines in 1908 as the “Caisson Song.” John Philip Sousa transformed it into a march in 1917, renamed “The Field Artillery Song.” Current lyrics by Harold W. Arberg.",
      "DOCUMENTED: The song is played at the conclusion of every Army ceremony; all Soldiers are expected to stand and sing.",
      "DOCUMENTED: ALARACT 124/2013 (effective 8 May 2013) restored the shortened original performance form: introduction → verse → chorus → refrain.",
    ],
    flags: [
      "ADOPTION DATE — official-vs-official conflict (DISPUTED). The Army Values page states the song was “adopted in 1952 as the official song of the Army and retitled.” The Army's own 2013 article states Secretary of the Army Wilber Brucker dedicated it as the official song on Veterans Day, 11 November 1956, after the failed 1948 and 1952 contests/appeals. Both print; neither is blended into a single date.",
    ],
  },
  {
    id: "marines-hymn",
    branch: "U.S. Marine Corps",
    title: "The Marines' Hymn",
    statusNote: "The official hymn of the Marine Corps and the oldest official song in the U.S. military (HQMC History).",
    sourceName: "HQMC History (HROM) + marines.com",
    links: [
      { label: "What is the Marines' Hymn? (HROM)", url: "https://www.hrom.marines.mil/New-Employees/About-the-Marine-Corps/Hymn/" },
      { label: "The Marines' Hymn (marines.com)", url: "https://www.marines.com/resources/marines-hymn" },
      { label: "The Marines' Hymn (Marine Band audio resources)", url: "https://www.marineband.marines.mil/Audio-Resources/The-Marines-Hymn/" },
      { label: "Marines' Hymn FAQ (Marine Corps History Division)", url: "https://www.usmcu.edu/Research/Marine-Corps-History-Division/Frequently-Requested-Topics/Marines-Hymn/" },
    ],
    intro: [
      "Lyrics: all three authorized verses, as published by the Corps' official recruiting site (marines.com).",
    ],
    lyricSets: [
      {
        label: "The three authorized verses",
        blocks: [
          {
            heading: "Verse 1",
            lines: [
              "From the Halls of Montezuma",
              "To the shores of Tripoli;",
              "We fight our country's battles",
              "In the air, on land, and sea;",
              "First to fight for right and freedom",
              "And to keep our honor clean;",
              "We are proud to claim the title",
              "Of United States Marine.",
            ],
          },
          {
            heading: "Verse 2",
            lines: [
              "Our flag's unfurled to every breeze",
              "From dawn to setting sun;",
              "We have fought in ev'ry clime and place",
              "Where we could take a gun;",
              "In the snow of far-off Northern lands",
              "And in sunny tropic scenes,",
              "You will find us always on the job",
              "The United States Marines.",
            ],
          },
          {
            heading: "Verse 3",
            lines: [
              "Here's health to you and to our Corps",
              "Which we are proud to serve;",
              "In many a strife we've fought for life",
              "And never lost our nerve.",
              "If the Army and the Navy",
              "Ever look on Heaven's scenes,",
              "They will find the streets are guarded",
              "By United States Marines.",
            ],
          },
        ],
      },
    ],
    facts: [
      "The references in verse 1 (DOCUMENTED, per HROM): “To the shores of Tripoli” — the First Barbary War, specifically the Battle of Derna (Derne), 1805, when Lieutenant Presley O'Bannon's Marines hoisted the American flag over the Old World for the first time; the phrase was added to the Corps' battle colors for that action. “The Halls of Montezuma” — the Battle of Chapultepec, Mexican-American War (1847), when Marines stormed Chapultepec Castle in Mexico City.",
      "Origin of the words (DOCUMENTED framing, per HROM): The lyrics are said to date from the 19th century, but no pre-20th-century text is known and the author is unknown. LEGEND (HROM's own framing): the hymn was penned by a Marine on duty in Mexico. The unknown author transposed the Corps' Colors motto — “From the Shores of Tripoli to the Halls of Montezuma” — reversing the chronological order for euphony.",
      "Origin of the melody (DOCUMENTED correspondence; ultimate origin uncertain): The tune is the Gendarmes' Duet (“Couplets des Deux Hommes d'Armes”) from Jacques Offenbach's operetta Geneviève de Brabant (debuted Paris 1859; revised 1867). The tracing comes through Colonel A. S. McLemore / Walter F. Smith correspondence quoting Major Richard Wallach (the aria was popular in Paris in 1878); John Philip Sousa concurred. A band member's note about a Spanish wife suggests the aria may itself derive from a Spanish folk song — printed as the sources frame it: the duet connection is documented correspondence; the melody's own ultimate origin is uncertain.",
      "Francis Maria Scala, Marine Band leader 1854–1871, arranged the duet as a dance number in 1868 — the earliest known USMC connection; the preferred performed version is Edward M. Van Loock's 1915 arrangement (Marine Band).",
      "Authorized change, 1929 (DOCUMENTED): The Commandant authorized the three verses as the official version, changing verse 1, lines 5–8. Pre-1929 text: “Admiration of the nation, / we're the finest ever seen; / And we glory in the title / Of United States Marines.” Authorized text: “First to fight for right and freedom / And to keep our honor clean; / We are proud to claim the title / Of United States Marine.”",
      "Authorized change, 21 November 1942 (DOCUMENTED): Commandant Thomas Holcomb changed verse 1, line 4 from “On the land as on the sea” to “In the air, on land, and sea,” to recognize Marine aviation.",
      "Etiquette and tradition (per HROM): The hymn is typically sung at the position of attention. The third verse is also used as a toast at formal events such as the Marine Corps birthday ball. Unofficial verses arise from campaigns (MCU's FAQ notes an Iceland verse) — unofficial, never part of the authorized text, and not printed here.",
    ],
    flags: [
      "COPYRIGHT DATE — official-vs-official conflict (DISPUTED). HROM states claims of a 19 August 1891 copyright are in error and that copyright was vested 18 August 1919. The Marine Corps History Division FAQ states copyright ownership “was vested in the United States Marine Corps per certificate of registration dated 19 August 1891, but it is now in the public domain.” Both print, flagged — and both pages agree the hymn is now in the public domain.",
    ],
  },
  {
    id: "anchors-aweigh",
    branch: "U.S. Navy",
    title: "Anchors Aweigh",
    statusNote: "⚠ STATUS — the service's own label: the U.S. Naval Academy Band's official page opens by calling “Anchors Aweigh” “The unofficial song of the U.S. Navy.” Of the six service songs, this is the one the service itself labels unofficial; there is no formal adoption.",
    sourceName: "U.S. Naval Academy Band (usna.edu)",
    links: [
      { label: "Anchors Aweigh (U.S. Naval Academy Band)", url: "https://usna.edu/USNABand/about/anchors.php" },
    ],
    intro: [
      "The USNA Band page publishes three lyric sets; the 1997 fleet version is primary, as the page presents it.",
    ],
    lyricSets: [
      {
        label: "Revised Lyrics of 1997 — MCPON John Hagen (the fleet version)",
        note: "Hagen's revision was “to be more inclusive of all naval personnel.”",
        blocks: [
          {
            heading: "Verse 1",
            lines: [
              "Stand Navy out to sea,",
              "Fight our battle cry;",
              "We'll never change our course,",
              "So vicious foe steer shy-y-y-y.",
              "Roll out the TNT,",
              "Anchors Aweigh.",
              "Sail on to victory",
              "And sink their bones to Davy Jones, hooray!",
            ],
          },
          {
            heading: "Verse 2",
            lines: [
              "Anchors Aweigh, my boys,",
              "Anchors Aweigh.",
              "Farewell to foreign shores,",
              "We sail at break of day-ay-ay-ay.",
              "Through our last night ashore,",
              "Drink to the foam,",
              "Until we meet once more.",
              "Here's wishing you a happy voyage home.",
            ],
          },
          {
            heading: "Verse 3",
            lines: [
              "Blue of the mighty deep:",
              "Gold of God's great sun.",
              "Let these our colors be",
              "Till all of time be done, done, done, done.",
              "On seven seas we learn",
              "Navy's stern call:",
              "Faith, courage, service true,",
              "With honor, over honor, over all.",
            ],
          },
        ],
      },
      {
        label: "Original 1906 lyrics (Miles), as published on the same page",
        blocks: [
          {
            heading: "Verse 1",
            lines: [
              "Stand Navy down the field",
              "Sails set to the sky",
              "We'll never change our course",
              "So Army you steer shy-y-y-y",
              "Roll up the score, Navy",
              "Anchors Aweigh",
              "Sail Navy down the field",
              "And sink the Army, sink the Army grey!",
            ],
          },
          {
            heading: "Verse 2",
            lines: [
              "Get under way, Navy",
              "Decks cleared for the fray",
              "We'll hoist true Navy Blue",
              "So Army down your grey-y-y-y",
              "Full speed ahead, Navy",
              "Army heave to",
              "Furl Black and Grey and Gold",
              "And hoist the Navy, hoist the Navy Blue!",
            ],
          },
        ],
      },
      {
        label: "Verse added by George D. Lottman (labeled 1926 on the page)",
        blocks: [
          {
            lines: [
              "Anchors Aweigh, my boys, Anchors Aweigh.",
              "Farewell to college joys, we sail at break of day-ay-ay-ay.",
              "Through our last night on shore, drink to the foam,",
              "Until we meet once more:",
              "Here's wishing you a happy voyage home.",
            ],
          },
        ],
        note: "The page's narrative also credits Midshipman Royal Lovell, Class of 1926, with writing “a third stanza” before Lottman's popular verses — attribution nuance kept as the page states it.",
      },
    ],
    facts: [
      "DOCUMENTED (per USNA Band): Music by Charles A. Zimmermann, Naval Academy Bandmaster; lyrics by Midshipman First Class Alfred H. Miles, Class of 1907. Composed as the Class of 1907 march and football song.",
      "DOCUMENTED: First performance mentioned at the 1906 Farewell Ball (12 February 1906); first public performance at the 1906 Army–Navy game at Franklin Field (Navy won 10–0, its first win since 1900). The title is the expression for an anchor just cleared of the bottom.",
      "TRADITION (the page's own framing, “as the legend goes”): the organ story attached to the first performances.",
    ],
    flags: [],
  },
  {
    id: "air-force-song",
    branch: "U.S. Air Force",
    title: "The U.S. Air Force Song (“Wild Blue Yonder”)",
    sourceName: "USAF Heritage of America Band history (Hill AFB fact sheet) + the official 2020 release text",
    links: [
      { label: "History of the U.S. Air Force Song (Hill AFB fact sheet)", url: "https://www.hill.af.mil/About-Us/Fact-Sheets/Display/Article/397525/history-of-the-us-air-force-song/" },
      { label: "Final changes to Air Force song announced (2020 text)", url: "https://www.aerotechnews.com/edwardsafb/2020/06/01/final-changes-to-air-force-song-announced/" },
    ],
    intro: [
      "The CURRENT text is the 2020 update, printed below as primary. The Hill AFB fact sheet still prints the superseded pre-2020 lyrics — see the flag on this card.",
    ],
    lyricSets: [
      {
        label: "Current lyrics (2020)",
        blocks: [
          {
            heading: "Verse 1",
            lines: [
              "Off we go into the wild blue yonder,",
              "Climbing high into the sun;",
              "Here they come zooming to meet our thunder,",
              "At 'em now, Give 'em the gun!",
              "Down we dive, spouting our flame from under,",
              "Off with one helluva roar!",
              "We live in fame or go down in flame. Hey!",
              "Nothing'll stop the U.S. Air Force!",
            ],
          },
          {
            heading: "Verse 2",
            lines: [
              "Brilliant minds fashioned a crate of thunder,",
              "Sent it high into the blue;",
              "Valiant hands blasted the world asunder;",
              "How they lived God only knew!",
              "Boundless souls dreaming of skies to conquer",
              "Gave us wings, ever to soar!",
              "With scouts before and bombers galore. Hey!",
              "Nothing'll stop the U.S. Air Force!",
            ],
          },
          {
            heading: "Verse 3 — “A Toast to the Host”",
            lines: [
              "Here's a toast to the host",
              "Of those who love the vastness of the sky,",
              "To a friend we send a message of the brave who serve on high.",
              "We drink to those who gave their all of old,",
              "Then down we roar to score the rainbow's pot of gold.",
              "A toast to the host of those we boast, the U.S. Air Force!",
            ],
          },
          {
            heading: "Verse 4",
            lines: [
              "Off we go into the wild sky yonder,",
              "Keep the wings level and true;",
              "If you'd live to be a grey-haired wonder",
              "Keep the nose out of the blue!",
              "Fly to fight, guarding the nation's border,",
              "We'll be there, followed by more!",
              "In echelon we carry on.",
              "Oh, nothing'll stop the U.S. Air Force!",
            ],
          },
        ],
      },
    ],
    facts: [
      "DOCUMENTED (per the fact sheet): In 1938 Liberty magazine ran a contest for an official Army Air Corps song; 757 scores were submitted. Robert MacArthur Crawford's (1899–1961) entry was selected unanimously by a committee of Air Force wives and introduced at the Cleveland Air Races on 2 September 1939, Crawford singing the first public performance.",
      "DOCUMENTED: The bridge, “A Toast to the Host,” commemorates the fallen. Crawford wrote “SHOUT!” — the sung “Hey!” is tradition in performance; the parenthetical words are spoken, not sung. Wherever they appear, “U.S. Air Force” replaced the original “Army Air Corps”; the song was retitled when the Air Force became a separate service in 1947.",
      "The 2020 update (third verse/“Toast” unveiled Feb–Mar 2020; all remaining stanzas announced 29 May 2020 by Chief of Staff Gen. David L. Goldfein, removing male-only references): V1 “At 'em boys, give 'er the gun” → “At 'em now, give 'em the gun”; V2 “Minds of men / Hands of men / Souls of men” → “Brilliant minds / Valiant hands / Boundless souls”; Toast “his brother men who fly” → “the brave who serve on high” and “the men we boast” → “those we boast”; V4 “Flying men” → “Fly to fight.”",
    ],
    flags: [
      "SUPERSEDED LYRICS on an official page: The Hill AFB fact sheet still prints the pre-2020 lyrics (“At 'em boys, Give 'er the gun!”, “Minds of men…”, “Flying men, guarding the nation's border”). Those are superseded. The current text is the 2020 update printed above, from the official Air Force release as reproduced by Edwards AFB's Aerotech News.",
      "COPYRIGHT: The song is owned by Carl Fischer Music, which granted the Air Force a perpetual royalty/performance release (per the official USCG MyCG article on service songs). It is NOT a free public-domain work in the same sense as the older songs; the lyrics print as the service publishes them, with this credit.",
    ],
    credit: "“The U.S. Air Force” © Carl Fischer Music — the Air Force holds a perpetual royalty/performance release.",
  },
  {
    id: "semper-supra",
    branch: "U.S. Space Force",
    title: "Semper Supra",
    sourceName: "U.S. Space Force (spaceforce.mil)",
    links: [
      { label: "Space Force reveals official song “Semper Supra” (spaceforce.mil)", url: "https://www.spaceforce.mil/News/Article-Display/Article/3163735/space-force-reveals-official-song-semper-supra/" },
      { label: "Semper Supra licensing (Air Force Music)", url: "https://www.music.af.mil/spaceforcesong/" },
    ],
    intro: [
      "The officially adopted song of the U.S. Space Force, unveiled 20 September 2022. Lyrics below are complete (one verse), exactly as spaceforce.mil prints them, with the © line attached.",
    ],
    lyricSets: [
      {
        label: "Lyrics (complete, one verse)",
        blocks: [
          {
            lines: [
              "We're the mighty watchful eye,",
              "Guardians beyond the blue,",
              "The invisible front line,",
              "Warfighters brave and true.",
              "Boldly reaching into space,",
              "There's no limit to our sky.",
              "Standing guard both night and day,",
              "We're the Space Force from on high.",
            ],
          },
        ],
      },
    ],
    facts: [
      "DOCUMENTED (per spaceforce.mil): “Semper Supra” is the officially adopted song of the U.S. Space Force, unveiled 20 September 2022 at the Air & Space Forces Association conference, National Harbor, Maryland. It is named for the USSF motto, “Semper Supra” (“Always Above”).",
      "DOCUMENTED: Lyrics and melody by James (Jamie) Teachenor, a former U.S. Air Force Band member who worked with Chief of Space Operations Gen. John “Jay” Raymond from the service's 2019 founding; he collaborated with Sean Nelson, U.S. Coast Guard Band chief musician, trombonist, and staff arranger.",
    ],
    flags: [
      "COPYRIGHT — NOT public domain. Teachenor and Nelson gifted the song and its copyright to the Department of the Air Force, which is the exclusive owner. Licensing: https://www.music.af.mil/spaceforcesong/. (This corrects any blanket assumption that all six service songs are public domain.)",
    ],
    credit: "Semper Supra © Department of the U.S. Air Force. All rights reserved.",
  },
  {
    id: "semper-paratus",
    branch: "U.S. Coast Guard",
    title: "Semper Paratus (“Always Ready”)",
    sourceName: "USCG Historian's office essay (My Coast Guard News) + FORCECOM graduation programs",
    links: [
      { label: "The selling of the Coast Guard service song (USCG Historian, via MyCG)", url: "https://www.mycg.uscg.mil/News/Article/3336242/the-long-blue-line-the-selling-of-the-coast-guard-service-song-semper-paratus/" },
    ],
    intro: [
      "The 1922 text is primary, as current MyCG and FORCECOM program printings use it. The 1943 “current verse” conflict prints below, flagged — not blended.",
    ],
    lyricSets: [
      {
        label: "Lyrics as printed by MyCG (1922 text)",
        blocks: [
          {
            heading: "First Verse",
            lines: [
              "From Aztec Shore to Arctic Zone,",
              "To Europe and Far East,",
              "The Flag is carried by our ships",
              "In times of war and peace;",
              "And never have we struck it yet",
              "In spite of foemen's might,",
              "Who cheered our crews and cheered again",
              "For showing how to fight.",
            ],
          },
          {
            heading: "Chorus",
            lines: [
              "We're always ready for the call,",
              "We place our trust in Thee.",
              "Through surf and storm and howling gale,",
              "High shall our purpose be.",
              "“Semper Paratus” is our guide,",
              "Our fame, our glory too.",
              "To fight to save or fight and die,",
              "Aye! Coast Guard we are for you!",
            ],
          },
          {
            heading: "Second Verse",
            lines: [
              "SURVEYOR and NARCISSUS,",
              "The EAGLE and DISPATCH,",
              "The HUDSON and TAMPA,",
              "These names are hard to match;",
              "From Barrow's shores to Paraguay,",
              "Great Lakes or ocean's wave,",
              "The Coast Guard fights through storms and winds,",
              "To punish or to save.",
            ],
          },
          {
            heading: "Third Verse",
            lines: [
              "Aye! We've been always ready!",
              "To do, to fight, or die",
              "Write glory to the shield we wear",
              "In letters to the sky.",
              "To sink the foe or save the maimed,",
              "Our mission and our pride.",
              "We'll carry on 'til Kingdom Come,",
              "Ideals for which we've died.",
            ],
          },
        ],
      },
      {
        label: "The 1943 “Current Version” verse (USCG Auxiliary help desk printing)",
        note: "A 1943 replacement verse by Homer Smith (3rd Naval District Coast Guard quartet), Chief Cole, and Lt Walton Butterfield, USCGR, whose chorus variant reads “Through howling gale and shot and shell, / To win our victory.” Printed here because an official Coast Guard page prints it as “Current Version” — see the flag on this card. The 1922 text above is the primary.",
        blocks: [
          {
            lines: [
              "From North and South and East and West,",
              "The Coast Guard's in the fight.",
              "Destroying subs and landing troops,",
              "The Axis feels our might.",
              "For we're the first invaders,",
              "On every fighting field.",
              "Afloat, ashore, on men and Spars,",
              "You'll find the Coast Guard shield.",
            ],
          },
        ],
      },
    ],
    facts: [
      "DOCUMENTED (per the Historian's essay): Words by Captain Francis Saltus Van Boskerck, written in the winter of 1922 in his cabin aboard the cutter Yamacraw (Savannah, Georgia). Music composed 1927 at Unalaska, Alaska, with U.S. Public Health Service dentists Alf Nannestad and Joseph Fournier at the piano of Mrs. Albert C. (Clara) Goss.",
      "DOCUMENTED: Public debut in Norfolk, Virginia (Ghent), winter 1926–27. Published with piano score in the April 1928 U.S. Coast Guard Magazine, with Commandant Rear Admiral Frederick Billard endorsing it as the service's anthem — the service's adoption act as official sources tell it.",
      "DOCUMENTED: Van Boskerck died of an apparent heart attack on the ferry back to Norfolk the evening after asking the magazine's Lt. Col. Harvey Miller to popularize the song (fall 1927).",
      "DOCUMENTED: In 1969 the first line of each chorus was changed from “So here's the Coast Guard marching song, / We sing on land and sea” to “We're always ready for the call, / We place our trust in Thee.”",
    ],
    flags: [
      "“CURRENT VERSE” CONFLICT (DISPUTED). The USCG Auxiliary help desk (help.cgaux.org) prints the 1943 verse above as a “Current Version.” Current MyCG and FORCECOM program printings use the 1922 “Aztec Shore” text as the First Verse. Both print, flagged; the 1922 text is the primary.",
      "COPYRIGHT — NOT public domain on the official record. Copyright was sold to Sam Fox Music Publishing in 1938 for $50 (royalties stipulated to Van Boskerck's widow Carlotta, who refused them); a 1942 USG/Sam Fox/ASCAP agreement allowed royalty-free use in U.S. Government/Coast Guard programs; rights passed to Warner/Chappell Music (2000), with mechanical rights managed by Alfred Music (2005). Per the Historian's essay, the USCG Band pays Alfred Music $175 per recording/arrangement license, and the essay states the song “is scheduled to be released to the public domain” in 2024 — ⚠ that date comes from a 2015 essay reprised in 2023 and was not independently verified. (The essay also argues — as an argument, not a ruling — that the song was government property/public domain from creation.) The lyrics print as the service publishes them, with this flag attached.",
    ],
    credit: "“Semper Paratus” — rights history: Sam Fox Music Publishing (1938) → Warner/Chappell Music (2000); mechanical rights managed by Alfred Music (2005). USCG Band licenses via Alfred Music per the USCG Historian's essay.",
  },
];

/* ------------------------------------------------------------------ */
/* Part 2 — the national items                                         */
/* ------------------------------------------------------------------ */

export const SSB_VERSE_1: string[] = [
  "O say, can you see, by the dawn's early light,",
  "What so proudly we hailed at the twilight's last gleaming?",
  "Whose broad stripes and bright stars, through the perilous fight,",
  "O'er the ramparts we watched, were so gallantly streaming!",
  "And the rockets's red glare, the bombs bursting in air,",
  "Gave proof through the night that our flag was still there:",
  "O say, does that star-spangled banner yet wave",
  "O'er the land of the free and the home of the brave?",
];

export const SSB_FACTS: string[] = [
  "DOCUMENTED (per LOC): Francis Scott Key, detained aboard a British ship during the bombardment of Fort McHenry, saw at dawn on 14 September 1814 that the British attempt on Baltimore had failed, and wrote the poem — “Defence of Fort M'Henry,” first printed as a broadside on 17 September 1814. It was set to “To Anacreon in Heaven” (the Anacreontic Song; tune by John Stafford Smith).",
  "DOCUMENTED: The Secretary of the Navy designated it the official tune for flag-raising on 26 July 1889; the Wilson White House used it wherever an anthem was appropriate; Sousa publicly backed it in 1931. On 3 March 1931 President Herbert Hoover signed the Act establishing it as the official national anthem (now 36 U.S.C. § 301(a)).",
  "The flag Key saw — the 30×42 ft garrison flag sewn by Mary Pickersgill in 1813 — is held by the Smithsonian's National Museum of American History.",
  "Four verses exist. Verse 1 is printed in full above, as the National Park Service prints it (“rockets's” punctuation as printed by NPS). Verses 2–4 are named by opening line only, with the full text at the NPS link: verse 2, “On the shore, dimly seen through the mists of the deep”; verse 3, “And where is that band who so vauntingly swore” (verse 3 contains the “hireling and slave” passage — named by opening line only); verse 4, “O thus be it ever, when freemen shall stand” (contains “In God is our trust”).",
];

export const SSB_FLAG =
  "LOC notes the 1931 law did not specify an official text or musical arrangement — there is no statutorily fixed lyric sheet.";

export const ANTHEM_ETIQUETTE_INTRO =
  "36 U.S.C. § 301(b) (subsection (b) as amended by P.L. 110-417, 14 October 2008; official text via uscode.house.gov / govinfo). During rendition of the national anthem:";

export const ANTHEM_ETIQUETTE_BULLETS: string[] = [
  "When the flag is displayed: (A) individuals in uniform give the military salute at the first note and hold it until the last note; (B) members of the Armed Forces and veterans present but not in uniform may render the military salute in the same manner; (C) all other persons face the flag, stand at attention with the right hand over the heart, and men not in uniform should remove their headdress with the right hand and hold it at the left shoulder, the hand being over the heart.",
  "When the flag is not displayed: all present face toward the music and act in the same manner they would if the flag were displayed.",
  "The statute's verb is “should” — the conduct is customary/hortatory, carrying no penalty (the same posture taken for the Flag Code).",
];

export const PLEDGE_TEXT =
  "I pledge allegiance to the Flag of the United States of America, and to the Republic for which it stands, one Nation under God, indivisible, with liberty and justice for all.";

export const PLEDGE_FACTS: string[] = [
  "DOCUMENTED (per LOC): Written by Francis Bellamy — Baptist minister, on the staff of The Youth's Companion — and published in that magazine on 8 September 1892 for the national Columbus Day school celebration (October 1892). (LOC's 1957 report settled the authorship question for Bellamy over the James B. Upham claim.)",
  "Original text: “I pledge allegiance to my Flag and the Republic for which it stands, one nation indivisible, with Liberty and Justice for all.”",
  "1923 — the First National Flag Conference changed “my Flag” to “the flag of the United States.”",
  "1924 — “of America” added.",
  "22 June 1942 — Congress formally recognized the Pledge and wrote it into the Flag Code.",
  "December 1942 — Congress changed the prescribed gesture from the extended-arm (Bellamy) salute to the right hand over the heart; the extended arm too closely resembled the Nazi salute.",
  "28 December 1945 (P.L. 287, 79th Congress) — formally named “The Pledge of Allegiance.”",
  "14 June 1954 (Flag Day) — President Eisenhower signed the joint resolution (Rep. Louis Rabaut's HJR 243, following the Knights of Columbus campaign) adding “under God.”",
  "Etiquette — 4 U.S.C. § 4: The Pledge “should be rendered by standing at attention facing the flag with the right hand over the heart.” When not in uniform, men should remove any non-religious headdress with the right hand and hold it at the left shoulder, the hand being over the heart. Persons in uniform should remain silent, face the flag, and render the military salute. Members of the Armed Forces not in uniform and veterans may render the military salute in the manner provided for persons in uniform.",
];

export const NATIONAL_LINKS = {
  loc: { label: "Star Spangled Banner (Library of Congress)", url: "https://www.loc.gov/collections/patriotic-melodies/articles-and-essays/star-spangled-banner/" },
  nps: { label: "The Star-Spangled Banner — all four verses (NPS)", url: "https://www.nps.gov/stsp/learn/historyculture/the-star-spangled-banner.htm" },
};

/* ------------------------------------------------------------------ */
/* Part 3 — allied anthems (17 countries, 18 entries)                  */
/* ------------------------------------------------------------------ */

export type AlliedAnthem = {
  id: string;
  country: string;
  title: string;
  /** The pack's TRANSLATION STATUS line, printed verbatim in substance. */
  translationStatus: string;
  /** Toggle labels. */
  nativeLabel: string;
  englishLabel: string;
  /** Native-language text (the default view). Undefined only for
   * Spain, which has no lyrics in any language. */
  nativeBlocks?: LyricBlock[];
  /** The English side where it is an official text: Korea.net's
   * published translation (Korea), the second official version
   * (Canada FR / NZ Māori + gloss). */
  englishBlocks?: LyricBlock[];
  englishNote?: string;
  /** For the no-official-translation countries: the official English
   * summary shown on the English side, with the flag. */
  englishSummary?: string;
  noLyrics?: boolean;
  facts: string[];
  flags: string[];
  links: SongLink[];
  sourceName: string;
};

export const ALLIED_ANTHEMS: AlliedAnthem[] = [
  {
    id: "de-anthem",
    country: "Germany",
    title: "Deutschlandlied (Das Lied der Deutschen)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION VERIFIED — the English side shows the Federal Government's official English explanation, not a lyric translation.",
    nativeLabel: "Deutsch",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Third verse — the anthem (the only verse that is the anthem)",
        lines: [
          "Einigkeit und Recht und Freiheit",
          "für das deutsche Vaterland!",
          "Danach lasst uns alle streben,",
          "brüderlich mit Herz und Hand!",
          "Einigkeit und Recht und Freiheit",
          "sind des Glückes Unterpfand:",
          "Blüh im Glanze dieses Glückes,",
          "blühe, deutsches Vaterland!",
          "Blüh im Glanze dieses Glückes,",
          "blühe, deutsches Vaterland!",
        ],
      },
    ],
    englishSummary:
      "Official English explanation (Federal Government, bundesregierung.de): the national anthem of the Federal Republic of Germany consists of the third verse of the “Deutschlandlied.” Its words were written by August Heinrich Hoffmann von Fallersleben in 1841 on Helgoland; the music is Joseph Haydn's Kaiserhymne melody. A 1952 exchange of letters between President Heuss and Chancellor Adenauer restored it for the Federal Republic, with only the third verse sung at state events; a 1991 exchange between President Weizsäcker and Chancellor Kohl confirmed the third verse alone as the anthem of the reunified Germany. Verses 1–2 are not part of the anthem and are not printed here.",
    facts: [
      "DOCUMENTED (per the Federal Government's own explanation): The anthem consists of the third verse of Hoffmann von Fallersleben's 1841 poem, written on Helgoland; the music is by Joseph Haydn (1732–1809), from his Kaiserhymne.",
      "DOCUMENTED: A 1952 exchange of letters between President Heuss and Chancellor Adenauer restored it for the Federal Republic, with only the third verse sung at state events; a 1991 exchange between President Weizsäcker and Chancellor Kohl (letters of 19 and 23 August 1991, published in Bulletin Nr. 89/1991, 27 August 1991) confirmed the third verse alone as the anthem of the reunified Germany.",
      "Verses 1–2 are NOT part of the anthem (verse 1's “Deutschland, Deutschland über alles” is an 1841 unity claim) and are not printed here — excluded by the German government's own framing.",
    ],
    flags: [],
    links: [
      { label: "Nationalhymne (Bundesregierung)", url: "https://www.bundesregierung.de/breg-de/schwerpunkte/nationalhymne-deutschland-461412" },
    ],
    sourceName: "Federal Government of Germany (bundesregierung.de)",
  },
  {
    id: "no-anthem",
    country: "Norway",
    title: "Ja, vi elsker dette landet (“Yes, we love this country”)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND on the Royal Court / government pages — the English side shows the origin summary and this flag.",
    nativeLabel: "Norsk",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1 (the form commonly sung; modernized spelling)",
        lines: [
          "Ja, vi elsker dette landet,",
          "som det stiger frem,",
          "furet, værbitt over vannet,",
          "med de tusen hjem, —",
          "elsker, elsker det og tenker",
          "på vår far og mor",
          "og den saganatt som senker",
          "drømmer på vår jord.",
        ],
        // note rendered below
      },
    ],
    englishSummary:
      "Origin summary: words by Bjørnstjerne Bjørnson (written c. 1859–1868); music by his cousin Rikard Nordraak (1864). First performed publicly 17 May 1864, for the 50th anniversary of the Constitution. The poem has 8 verses; verses 1, 7, and 8 are the ones usually sung (the last two lines of verse 1 repeat in performance). Long de facto only, the anthem was formally recognized by the Storting on 11 December 2019 — 2019 is the formalization date, correcting the common “never adopted” framing. No official English translation was found on the Royal Court / government pages, so no English lyric text is printed.",
    facts: [
      "Words by Bjørnstjerne Bjørnson (written c. 1859–1868); music by his cousin Rikard Nordraak (1864). First performed publicly 17 May 1864, for the 50th anniversary of the Constitution.",
      "The poem has 8 verses; verses 1, 7, and 8 are the ones usually sung. The last two lines of verse 1 repeat in performance.",
    ],
    flags: [
      "Status: long de facto only, but formally recognized by the Storting on 11 December 2019 — print 2019 as the formalization date (this corrects the common “never adopted” framing). No lyrics page on kongehuset.no / regjeringen.no surfaced in the research pass.",
    ],
    links: [],
    sourceName: "Norwegian official sources (Royal Court / government pages)",
  },
  {
    id: "ca-anthem",
    country: "Canada",
    title: "O Canada",
    translationStatus: "TWO OFFICIAL LANGUAGE VERSIONS (English + French), neither a translation of the other — only the English and French texts are set in the National Anthem Act.",
    nativeLabel: "English (official)",
    englishLabel: "Français (officiel)",
    nativeBlocks: [
      {
        heading: "English (official)",
        lines: [
          "O Canada!",
          "Our home and native land!",
          "True patriot love in all of us command.",
          "With glowing hearts we see thee rise,",
          "The True North strong and free!",
          "From far and wide,",
          "O Canada, we stand on guard for thee.",
          "God keep our land glorious and free!",
          "O Canada, we stand on guard for thee.",
          "O Canada, we stand on guard for thee.",
        ],
      },
    ],
    englishBlocks: [
      {
        heading: "French (official)",
        lines: [
          "Ô Canada!",
          "Terre de nos aïeux,",
          "Ton front est ceint de fleurons glorieux!",
          "Car ton bras sait porter l'épée,",
          "Il sait porter la croix!",
          "Ton histoire est une épopée",
          "Des plus brillants exploits.",
          "Et ta valeur, de foi trempée,",
          "Protégera nos foyers et nos droits.",
          "Protégera nos foyers et nos droits.",
        ],
      },
    ],
    englishNote:
      "The English text is NOT a translation of the French — the two official texts are different poems. Canada also publishes a bilingual performance version (English opening, French middle, English close) on the same page; the two statutory versions above are the text printed here. For this entry the toggle is EN/FR.",
    facts: [
      "DOCUMENTED (per canada.ca): Proclaimed the national anthem in 1980 (National Anthem Act, effective 1 July 1980), a century after it was first sung in 1880. Music by Calixa Lavallée; French lyrics by Adolphe-Basile Routhier (1880, unaltered since); English lyrics based on Robert Stanley Weir's 1908 version.",
      "DOCUMENTED: 2018 legislation changed “in all thy sons command” to “in all of us command.” Copyright per canada.ca: the melody and words are in the public domain under the Act; translations into other languages have no official status.",
      "Etiquette per canada.ca: stand for “O Canada” and for the anthem of any other nation; no laws govern it; generally no applause follows.",
    ],
    flags: [],
    links: [
      { label: "Anthems of Canada (Government of Canada)", url: "https://www.canada.ca/en/canadian-heritage/services/anthems-canada.html" },
    ],
    sourceName: "Government of Canada — Department of Canadian Heritage",
  },
  {
    id: "uk-anthem",
    country: "United Kingdom",
    title: "God Save the King",
    translationStatus: "NOT APPLICABLE — the anthem is in English; the native and English sides are the same text.",
    nativeLabel: "English",
    englishLabel: "English",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "God save our gracious King!",
          "Long live our noble King!",
          "God save the King!",
          "Send him victorious,",
          "Happy and glorious,",
          "Long to reign over us,",
          "God save the King.",
        ],
      },
      {
        heading: "Verse 2 (as royal.uk prints it — the “Thy choicest gifts” verse)",
        lines: [
          "Thy choicest gifts in store",
          "On him be pleased to pour,",
          "Long may he reign.",
          "May he defend our laws,",
          "And ever give us cause,",
          "To sing with heart and voice,",
          "God save the King.",
        ],
      },
    ],
    facts: [
      "DOCUMENTED (per royal.uk): Words and tune anonymous, possibly 17th century. “God Save The King” was a patriotic song first publicly performed in London in 1745 and came to be known as the National Anthem at the beginning of the 19th century.",
      "There is NO authorised version — the words are a matter of tradition. Additional verses exist but are rarely used; on official occasions only the first verse is usually sung.",
      "The King/Queen rule as the site states it: the words used today are those sung in 1745, substituting “Queen” for “King” where appropriate.",
    ],
    flags: [
      "No statute designates the anthem; its status rests on custom — consistent with royal.uk's own framing. (The Union Flag carries the same status-by-custom flag in the Flags tile.)",
    ],
    links: [
      { label: "The National Anthem (The Royal Family)", url: "https://www.royal.uk/encyclopedia/national-anthem" },
    ],
    sourceName: "The Royal Family (royal.uk)",
  },
  {
    id: "dk-anthem-civil",
    country: "Denmark",
    title: "Der er et yndigt land (“There is a lovely country”) — civil anthem",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND — kongehuset.dk prints the Danish texts only. The English side shows the official English description (denmark.dk) and this flag.",
    nativeLabel: "Dansk",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "Der er et yndigt land,",
          "det står med brede bøge",
          "nær salten østerstrand;",
          "det bugter sig i bakke, dal,",
          "det hedder gamle Danmark,",
          "og det er Frejas sal.",
        ],
      },
    ],
    englishSummary:
      "Official English description (denmark.dk, Ministry of Foreign Affairs — “Not One but Two National Anthems”): Denmark has two national anthems of equal status. “Der er et yndigt land” is the civil anthem, used for general/civil occasions. Lines 3 and 6 of verse 1 repeat in performance. The original poem had 12 verses; the sung form uses verses 1, a middle verse, and 12 in various printings. No official English translation of the lyrics is published, so no English lyric text is printed.",
    facts: [
      "Denmark has two national anthems of equal status; this is the civil anthem, used for general/civil occasions. The royal anthem is the next entry.",
      "Words by Adam Oehlenschläger (1819); music by Hans Ernst Krøyer (1835) — credits as printed by the Royal House (kongehuset.dk).",
      "Lines 3 and 6 repeat in performance. The original poem had 12 verses; the sung form uses verses 1, a middle verse, and 12 in various printings.",
    ],
    flags: [],
    links: [],
    sourceName: "The Royal House of Denmark (kongehuset.dk) + denmark.dk",
  },
  {
    id: "dk-anthem-royal",
    country: "Denmark",
    title: "Kong Christian stod ved højen mast (“King Christian stood by the lofty mast”) — royal anthem",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND — kongehuset.dk prints the Danish texts only. The English side shows the official English description (denmark.dk) and this flag.",
    nativeLabel: "Dansk",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "Kong Christian stod ved højen mast",
          "i røg og damp;",
          "hans værge hamrede så fast,",
          "at gotens hjelm og hjerne brast.",
          "Da sank hvert fjendtligt spejl og mast",
          "i røg og damp.",
          "“Fly,” skreg de, “fly, hvad flygte kan!",
          "Hvo står for Danmarks Christian",
          "i kamp?”",
        ],
      },
    ],
    englishSummary:
      "Official English description (denmark.dk, Ministry of Foreign Affairs — “Not One but Two National Anthems”): Denmark has two national anthems of equal status. “Kong Christian stod ved højen mast” is the royal anthem, used for royal and military occasions; it dates to c. 1780. No official English translation of the lyrics is published, so no English lyric text is printed.",
    facts: [
      "Denmark has two national anthems of equal status; this is the royal anthem, used for royal and military occasions. The civil anthem is the previous entry.",
      "Words by Johannes Ewald (1779, from his play Fiskerne, premiered January 1780 for Christian VII's birthday). Adopted as the royal anthem c. 1780.",
    ],
    flags: [
      "Music credit varies by source: kongehuset.dk credits the music to Friedrich Kuhlau after an older melody, 1828 — the music attribution varies across references; the Court's credit prints with this flag. (Build-time check, Nov 2026: the variance stands as the pack records it.)",
    ],
    links: [],
    sourceName: "The Royal House of Denmark (kongehuset.dk) + denmark.dk",
  },
  {
    id: "fr-anthem",
    country: "France",
    title: "La Marseillaise",
    translationStatus: "NO OFFICIAL ENGLISH LYRIC TRANSLATION — the Élysée publishes an official English-language history/description but prints the lyrics in French only. The English side shows the Élysée's English description and this flag.",
    nativeLabel: "Français",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "Allons enfants de la Patrie,",
          "Le jour de gloire est arrivé!",
          "Contre nous de la tyrannie,",
          "L'étendard sanglant est levé, (bis)",
          "Entendez-vous dans les campagnes",
          "Mugir ces féroces soldats?",
          "Ils viennent jusque dans vos bras",
          "Égorger vos fils, vos compagnes!",
        ],
      },
      {
        heading: "Chorus",
        lines: ["Aux armes, citoyens,", "Formez vos bataillons,", "Marchons, marchons!", "Qu'un sang impur", "Abreuve nos sillons!"],
      },
    ],
    englishSummary:
      "The Élysée's official English description: “La Marseillaise” was written by Claude-Joseph Rouget de Lisle, a captain of engineers, on the night of 25–26 April 1792 in Strasbourg, after France's declaration of war on Austria — originally titled “Chant de guerre pour l'armée du Rhin” (War Song for the Army of the Rhine). Sung by the Marseille fédérés at the Tuileries insurrection of 10 August 1792 — hence the name — it was declared the national anthem on 14 July 1795. There is no single official version; the Third Republic chose it again as national anthem in 1879 without defining an official harmonization. The Élysée prints the lyrics in French only; no official English lyric translation exists, so none is printed here.",
    facts: [
      "DOCUMENTED (per the Élysée): Written by Claude-Joseph Rouget de Lisle (b. 1760, Lons-le-Saunier), a captain of engineers, on the night of 25–26 April 1792 in Strasbourg at Mayor Dietrich's residence, after France's declaration of war on Austria.",
      "DOCUMENTED: It spread from Alsace and was sung by the Marseille fédérés at the Tuileries insurrection of 10 August 1792 — hence the name. Declared the national anthem 14 July 1795.",
      "DOCUMENTED: There is no single official version — it was set in various musical forms from the outset; the Third Republic chose it again as national anthem in 1879 without defining an official harmonization. A 7th verse (author unknown) was added in 1792. Rouget de Lisle's ashes were transferred to the Invalides on 14 July 1915.",
    ],
    flags: [],
    links: [
      { label: "La Marseillaise (Élysée)", url: "https://www.elysee.fr/la-presidence/la-marseillaise-de-rouget-de-lisle" },
      { label: "La Marseillaise (Élysée, English page)", url: "https://www.elysee.fr/en/french-presidency/la-marseillaise-by-rouget-de-lisle" },
    ],
    sourceName: "Présidence de la République (Élysée)",
  },
  {
    id: "au-anthem",
    country: "Australia",
    title: "Advance Australia Fair",
    translationStatus: "NOT APPLICABLE — the anthem is in English.",
    nativeLabel: "English",
    englishLabel: "English",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "Australians all let us rejoice,",
          "For we are one and free;",
          "We've golden soil and wealth for toil;",
          "Our home is girt by sea;",
          "Our land abounds in nature's gifts",
          "Of beauty rich and rare;",
          "In history's page, let every stage",
          "Advance Australia Fair.",
          "In joyful strains then let us sing,",
          "Advance Australia Fair.",
        ],
      },
      {
        heading: "Verse 2",
        lines: [
          "Beneath our radiant Southern Cross",
          "We'll toil with hearts and hands;",
          "To make this Commonwealth of ours",
          "Renowned of all the lands;",
          "For those who've come across the seas",
          "We've boundless plains to share;",
          "With courage let us all combine",
          "To Advance Australia Fair.",
          "In joyful strains then let us sing,",
          "Advance Australia Fair.",
        ],
      },
    ],
    facts: [
      "DOCUMENTED (per PM&C): Words and music by Peter Dodds McCormick, 1878 (originally four verses). Adopted 1974; displaced in 1976 when “God Save The Queen” was reinstated for royal/vice-regal occasions; re-proclaimed 19 April 1984 by Governor-General Sir Ninian Stephen as the National Anthem, with the two verses drafted by the National Australia Day Council.",
      "DOCUMENTED: 1 January 2021 — the second line changed from “For we are young and free” to “For we are one and free” by proclamation of Governor-General David Hurley. Words and music are in the public domain (no permission needed for non-commercial use). PM&C also notes “God Save The King” was proclaimed the Royal Anthem on 27 October 2022.",
    ],
    flags: [],
    links: [
      { label: "Australian National Anthem (PM&C)", url: "https://www.pmc.gov.au/honours-and-symbols/australian-national-anthem" },
    ],
    sourceName: "Department of the Prime Minister and Cabinet (Australia)",
  },
  {
    id: "nz-anthem",
    country: "New Zealand",
    title: "God Defend New Zealand | Aotearoa",
    translationStatus: "TWO OFFICIAL VERSIONS (English original + official Māori version), plus an official MCH English gloss of the Māori text. The Māori text is NOT a literal translation of the English — MCH presents the two as parallel versions.",
    nativeLabel: "English (original)",
    englishLabel: "Te Reo Māori (official)",
    nativeBlocks: [
      {
        heading: "English, verse 1",
        lines: [
          "God of Nations at Thy feet,",
          "In the bonds of love we meet,",
          "Hear our voices, we entreat,",
          "God defend our free land.",
          "Guard Pacific's triple star",
          "From the shafts of strife and war,",
          "Make her praises heard afar,",
          "God defend New Zealand.",
        ],
      },
    ],
    englishBlocks: [
      {
        heading: "Māori (“Aotearoa”), verse 1",
        lines: [
          "E Ihowā Atua,",
          "O ngā iwi mātou rā,",
          "Āta whakarangona;",
          "Me aroha noa.",
          "Kia hua ko te pai;",
          "Kia tau tō atawhai;",
          "Manaakitia mai",
          "Aotearoa.",
        ],
      },
      {
        heading: "MCH's official English gloss of the Māori verse 1",
        lines: [
          "E Ihowā Atua, (Oh Lord, God)",
          "O ngā iwi mātou rā, (Of nations and of us too)",
          "Āta whakarongona; (Listen to us)",
          "Me aroha noa (Cherish us)",
          "Kia hua ko te pai; (Let goodness flourish,)",
          "Kia tau tō atawhai; (May your blessings flow)",
          "Manaakitia mai (Defend)",
          "Aotearoa.",
        ],
      },
    ],
    englishNote:
      "Usual practice: the first verse is sung in Māori, then in English. All five verses of each version are printed on the MCH page; verse 1 of each is the sung verse and the text printed here. The Māori version is Thomas Henry Smith's 1878 translation, made at Governor Sir George Grey's request; MCH documents the “whakarangona”/“whakarongona” spelling history, “whakarangona” being Smith's original. New Zealand's other anthem of equal status is “God Save the King” — see the United Kingdom entry.",
    facts: [
      "DOCUMENTED (per MCH): Words by Thomas Bracken (poem, 1870s). A music competition run by The Saturday Advertiser in 1876 (prize 10 guineas, 12 entries) was won by “Orpheus,” composed in a single sitting by John Joseph Woods, a Lawrence schoolteacher; first performed Christmas Day 1876, Queen's Theatre, Dunedin.",
      "DOCUMENTED: It became the national song for the 1940 Centennial. A 1976 petition (7,750 signatures) led to adoption: with Queen Elizabeth II's permission, the Government adopted it as a national anthem of equal status with “God Save The Queen” in 1977 (gazetted 21 November 1977).",
      "The meaning of “Pacific's triple star” is NOT certain — MCH records the popular belief (the three main islands); labeled as such. No copyright restrictions: the rights passed into the public domain in the 1980s (specific arrangements/recordings remain copyrighted).",
    ],
    flags: [],
    links: [
      { label: "God Defend New Zealand / Aotearoa (Ministry for Culture and Heritage)", url: "https://www.mch.govt.nz/nz-identity-heritage/national-anthems/god-defend-new-zealandaotearoa" },
    ],
    sourceName: "Ministry for Culture and Heritage (New Zealand)",
  },
  {
    id: "jp-anthem",
    country: "Japan",
    title: "Kimigayo (君が代)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION — no official translation of the title or lyrics has ever been established by law; “His Majesty's Reign” is the conventional rendering, not an official one. The English side shows the government's official English-language explanation of meaning and this flag.",
    nativeLabel: "日本語 (statutory text)",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Text as set out in the Act on National Flag and Anthem (1999), Appended Sheet 2",
        lines: ["君が代は", "千代に八千代に", "さざれ石の", "いわおとなりて", "こけの生すまで"],
      },
      {
        heading: "Hiragana form, as printed in the Act's score",
        lines: ["きみがよは / ちよにやちよに / さざれいしの / いわおとなりて / こけのむすまで"],
      },
    ],
    englishSummary:
      "The Government's official 1999 interpretation (Prime Minister Keizō Obuchi, 29 June 1999): “kimi” refers to the Emperor as symbol of the State under Article 1 of the Constitution, and the lyric expresses a wish for the lasting prosperity and peace of the country. The lyrics are an anonymous Heian-period waka (from the Kokin Wakashū, early 10th century) — among the oldest anthem lyrics in use. No official English translation of the title or lyrics has ever been established by law, so no English lyric text is printed.",
    facts: [
      "DOCUMENTED (official framing): The lyrics are an anonymous Heian-period waka (from the Kokin Wakashū, early 10th century) — among the oldest anthem lyrics in use. The current melody was selected in 1880 (Yoshiisa Oku / Akimori Hayashi, arranged by Franz Eckert).",
      "DOCUMENTED: The anthem was legally recognized on 13 August 1999 by the Act on National Flag and Anthem; before that it was de facto only. One short verse.",
    ],
    flags: [
      "Romanization (“Kimigayo wa / Chiyo ni yachiyo ni / Sazare-ishi no / Iwao to narite / Koke no musu made”) is conventional — the Act itself prints the kanji/kana text and the score, not rōmaji. Flagged as conventional, not statutory.",
    ],
    links: [],
    sourceName: "Act on National Flag and Anthem (Japan, 1999) + Government of Japan explanation",
  },
  {
    id: "gr-anthem",
    country: "Greece",
    title: "Ýmnos is tin Eleftherían (Ύμνος εις την Ελευθερίαν, “Hymn to Liberty”)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND on presidency.gr (the Presidency page is Greek text + audio). The English side shows the summary and this flag. (Rudyard Kipling's 1918 poetic translation exists but is NOT a Greek government publication — excluded by the sources rule.)",
    nativeLabel: "Ελληνικά",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Stanza 1 (of the two-stanza anthem), in the monotonic form published by the Presidency of the Republic",
        lines: [
          "Σε γνωρίζω από την κόψη",
          "του σπαθιού την τρομερή,",
          "σε γνωρίζω από την όψη",
          "που με βια μετράει τη γη.",
          "Απ' τα κόκκαλα βγαλμένη",
          "των Ελλήνων τα ιερά,",
          "και σαν πρώτα ανδρειωμένη,",
          "χαίρε, ω χαίρε, Ελευθεριά!",
        ],
      },
    ],
    englishSummary:
      "Summary: the anthem is the first two stanzas of Dionysios Solomos's 1823 poem — 158 stanzas, the longest anthem text in the world — printed 1824 in Messolonghi and set to music by Nikolaos Mantzaros (1828; the short choral version of the first two stanzas is the anthem). Stanza 1 is printed on the native side; stanza 2 is named here but NOT reproduced — it was not captured verbatim from the Presidency page in the research pass, and nothing is filled in from memory. The same anthem serves Cyprus (since 1966) — noted, not a separate entry. Romanization “Ýmnos is tin Eleftherían” is conventional. No official English translation is published, so no English lyric text is printed.",
    facts: [
      "Poem by Dionysios Solomos, written 1823 in Zakynthos — 158 stanzas, the longest anthem text in the world — printed 1824 in Messolonghi. Set to music by Nikolaos Mantzaros (1828; the short choral version of the first two stanzas is the anthem).",
      "The same anthem serves Cyprus (since 1966) — noted, not a separate entry.",
    ],
    flags: [
      "Stanza 2 was not captured verbatim in the research pass. Stanza 1 ships verbatim from the Presidency's published text; stanza 2 is named/linked only, NOT reproduced (build-time check, Nov 2026 — the Presidency's anthem text stands as captured; stanza 2 remains unshipped rather than reconstructed).",
      "Adoption year — conflict in official-adjacent records (DISPUTED): 1864 vs 1865 (the Presidency-cited tradition prints 1865 for the first stanzas becoming the anthem; other records give 1864, when it also served as the royal anthem). Both print, flagged.",
    ],
    links: [],
    sourceName: "Presidency of the Hellenic Republic (presidency.gr)",
  },
  {
    id: "nl-anthem",
    country: "Netherlands",
    title: "Wilhelmus (Het Wilhelmus / Wilhelmus van Nassouwe)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND on government.nl / royal-house.nl — the English side shows the summary and the build-time verification flag.",
    nativeLabel: "Nederlands",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1 (the verse customarily sung; modern standardized spelling)",
        lines: [
          "Wilhelmus van Nassouwe",
          "ben ik, van Duitsen bloed,",
          "den vaderland getrouwe",
          "blijf ik tot in den dood.",
          "Een Prinse van Oranje",
          "ben ik, vrij onverveerd,",
          "den Koning van Hispanje",
          "heb ik altijd geëerd.",
        ],
      },
      {
        heading: "Verse 6 (the other verse customarily sung)",
        lines: [
          "Mijn schild ende betrouwen",
          "zijt Gij, o God mijn Heer,",
          "op U zo wil ik bouwen,",
          "verlaat mij nimmermeer.",
          "Dat ik doch vroom mag blijven,",
          "uw dienaar t'aller stond,",
          "de tirannie verdrijven",
          "die mij mijn hart doorwondt.",
        ],
      },
    ],
    englishSummary:
      "Summary: fifteen verses forming an acrostic on WILLEM VAN NASSOV. Origins 1568–1572, at the start of the Eighty Years' War. Words are generally attributed to Philips van Marnix, Lord of Sint-Aldegonde — the attribution is not certain (flagged on this card). The melody comes from a French soldiers' song of the 1568 siege of Chartres, in the form published by Adriaen Valerius (Nederlandtsche Gedenck-clanck, 1626). Officially recognized as the national anthem on 10 May 1932; among the world's oldest anthems. Usually only verse 1 (sometimes with verse 6) is sung. No official English translation is published, so no English lyric text is printed.",
    facts: [
      "Fifteen verses forming an acrostic on WILLEM VAN NASSOV. Origins 1568–1572, at the start of the Eighty Years' War.",
      "Melody from a French soldiers' song of the 1568 siege of Chartres, in the form published by Adriaen Valerius (Nederlandtsche Gedenck-clanck, 1626). Officially recognized as the national anthem on 10 May 1932. Among the world's oldest anthems. Usually only verse 1 (sometimes with verse 6) is sung.",
    ],
    flags: [
      "Source caveat (build-time check, Nov 2026): rijksoverheid.nl / royal-house.nl lyrics pages did not surface in the research pass or in the build-time re-check. The text printed is the universally standardized official text — checked at build time against the standardized text as published (verse 1 and verse 6 match the standard modern text line for line) — but this entry keeps the flag rather than claim a fetched rijksoverheid.nl URL.",
      "Attribution: the words are generally attributed to Philips van Marnix, Lord of Sint-Aldegonde — the attribution is not certain; flagged, not stated as fact.",
    ],
    links: [],
    sourceName: "Dutch official text (standardized) — see the verification flag on this card",
  },
  {
    id: "it-anthem",
    country: "Italy",
    title: "Il Canto degli Italiani (Inno di Mameli; “Fratelli d'Italia”)",
    translationStatus: "Official English-language description PUBLISHED, NO official English lyric translation — the Quirinale's English page prints the Italian text. The English side shows the Quirinale's English history text and this flag.",
    nativeLabel: "Italiano",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: [
          "Fratelli d'Italia,",
          "L'Italia s'è desta,",
          "Dell'elmo di Scipio",
          "S'è cinta la testa.",
          "Dov'è la vittoria?",
          "Le porga la chioma,",
          "Che schiava di Roma",
          "Iddio la creò.",
        ],
      },
      {
        heading: "Chorus",
        lines: ["Stringiamci a coorte,", "Siam pronti alla morte,", "L'Italia chiamò."],
      },
    ],
    englishSummary:
      "The Quirinale's English history: written in autumn 1847 by the 20-year-old Genoese student and patriot Goffredo Mameli; set to music shortly after in Turin by Michele Novaro. Proclaimed the Italian Republic's national anthem on 12 October 1946 (provisional/de facto from then); formal statutory recognition came much later — Law No. 181 of 4 December 2017 made it the official anthem in law. The Quirinale prints the full multi-verse text in Italian; verse 1 + chorus is the sung core printed here. Its English page prints the Italian text — no official English lyric translation exists, so none is printed here.",
    facts: [
      "DOCUMENTED (per the Quirinale): Written in autumn 1847 by the 20-year-old Genoese student and patriot Goffredo Mameli; set to music shortly after in Turin by Michele Novaro (b. 23 October 1818, Genoa).",
      "DOCUMENTED: Proclaimed the Italian Republic's national anthem on 12 October 1946 (provisional/de facto from then); formal statutory recognition came much later — Law No. 181 of 4 December 2017 made it the official anthem in law.",
    ],
    flags: [],
    links: [
      { label: "National Hymn (Quirinale, English page)", url: "https://www.quirinale.it/it/pagine/national-hymn" },
    ],
    sourceName: "Presidency of the Italian Republic (Quirinale)",
  },
  {
    id: "es-anthem",
    country: "Spain",
    title: "Marcha Real (Marcha Granadera / Marcha Real Española)",
    translationStatus: "NOT APPLICABLE — no lyrics exist in any language. There is no native lyric field and no translation field for this entry.",
    nativeLabel: "No lyrics",
    englishLabel: "No lyrics",
    noLyrics: true,
    facts: [
      "NO LYRICS EXIST. The Spanish anthem is instrumental only — one of the few wordless national anthems in the world. No proposed lyric set is printed here: lyrics have been proposed repeatedly (an 1870 contest under Prim declared void; Eduardo Marquina / José María Pemán texts in the 1940s; a 2007 Olympic-committee contest winner withdrawn after controversy) — none was ever adopted.",
      "Official anchor: Real Decreto 1560/1997, de 10 de octubre (BOE núm. 244, 11 October 1997) — Article 1: “El himno nacional de España es el conocido tradicionalmente por «Marcha Granadera» o «Marcha Real Española»”; Article 2 fixes the official score (16 bars, two repeated sections, B-flat major, ♩=76; full version 52 seconds, short version 27 seconds; whichever version is used must be played in full, once).",
      "Origin (official history, per Presidencia del Gobierno / La Moncloa summaries of record): Origin in a military march, the “Marcha Granadera,” of unknown authorship, first recorded in 1761 in the Libro de la Ordenanza de los toques militares de la Infantería Española (Manuel de Espinosa's collection). King Carlos III declared it Marcha de Honor on 3 September 1770; popular custom made it the national anthem (“Marcha Real” because it was played at public acts attended by the King, Queen, or Prince of Asturias). It has been Spain's anthem continuously except during the Second Republic (1931–1939), when the Himno de Riego was used.",
    ],
    flags: [
      "LEGEND — labeled and debunked by official-adjacent histories: the story that Frederick II of Prussia composed or sent the march is a false belief (it first appeared in print in 1861).",
    ],
    links: [
      { label: "Real Decreto 1560/1997 — Himno Nacional (BOE)", url: "https://www.boe.es/eli/es/rd/1997/10/10/1560" },
    ],
    sourceName: "Boletín Oficial del Estado (Real Decreto 1560/1997) + La Moncloa",
  },
  {
    id: "pl-anthem",
    country: "Poland",
    title: "Mazurek Dąbrowskiego (Dąbrowski's Mazurka; “Jeszcze Polska nie zginęła”)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND published by the Polish government (gov.pl anthem material is in Polish). The English side shows the summary and this flag. (The widely printed English rendering “Poland has not yet succumbed…” is a published translation but NOT a Polish-government publication — excluded by the sources rule.)",
    nativeLabel: "Polski",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: ["Jeszcze Polska nie zginęła,", "Kiedy my żyjemy.", "Co nam obca przemoc wzięła,", "Szablą odbierzemy."],
      },
      {
        heading: "Refrain",
        lines: ["Marsz, marsz, Dąbrowski,", "Z ziemi włoskiej do Polski.", "Za twoim przewodem", "Złączym się z narodem."],
      },
    ],
    englishSummary:
      "Summary (per gov.pl sources): words by Józef Wybicki, written in Reggio Emilia, Italy, between 16 and 19 July 1797 for the Polish Legions; first sung publicly 20 July 1797 in Reggio. The music is a traditional mazurka melody, composer unknown. It became the official state anthem on 26 February 1927 (circular of Minister Felicjan Sławoj Składkowski; reaffirmed 1948). Constitution Article 28 names “Mazurek Dąbrowskiego” as the anthem. The full official text is 4 verses + refrain; verse 1 + refrain print on the native side. No official English translation is published by the Polish government, so no English lyric text is printed.",
    facts: [
      "Words by Józef Wybicki, written in Reggio Emilia, Italy, between 16 and 19 July 1797 for the Polish Legions; first sung publicly 20 July 1797 in Reggio. The music is a traditional mazurka melody, composer unknown.",
      "It became the official state anthem on 26 February 1927 (circular of Minister Felicjan Sławoj Składkowski; reaffirmed 1948). Constitution Article 28 names “Mazurek Dąbrowskiego” as the anthem. Full official text = 4 verses + refrain.",
    ],
    flags: [
      "Manuscript vs official text: Wybicki's manuscript had additional verses and variant wording — “nie umarła” vs the official “nie zginęła” — a manuscript-vs-official difference the gov.pl pages themselves note; flagged, not blended.",
    ],
    links: [],
    sourceName: "Polish government portals (gov.pl)",
  },
  {
    id: "tr-anthem",
    country: "Türkiye",
    title: "İstiklal Marşı (Independence March)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION FOUND published by the Turkish government. The English side shows the summary and this flag.",
    nativeLabel: "Türkçe",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "Stanza 1 (of the two sung stanzas)",
        lines: [
          "Korkma, sönmez bu şafaklarda yüzen al sancak;",
          "Sönmeden yurdumun üstünde tüten en son ocak.",
          "O benim milletimin yıldızıdır, parlayacak;",
          "O benimdir, o benim milletimindir ancak.",
          "Çatma, kurban olayım, çehreni ey nazlı hilal!",
          "Kahraman ırkıma bir gül! Ne bu şiddet, bu celal?",
          "Sana olmaz dökülen kanlarımız sonra helal…",
          "Hakkıdır, Hakk'a tapan, milletimin istiklal!",
        ],
      },
      {
        heading: "Stanza 2",
        lines: [
          "Ben ezelden beridir hür yaşadım, hür yaşarım.",
          "Hangi çılgın bana zincir vuracakmış? Şaşarım!",
          "Kükremiş sel gibiyim; bendimi çiğner, aşarım;",
          "Yırtarım dağları, enginlere sığmam, taşarım.",
          "Garbın afakını sarmışsa çelik zırhlı duvar,",
          "Benim iman dolu göğsüm gibi serhaddim var.",
          "Ulusun, korkma! Nasıl böyle bir imanı boğar,",
          "“Medeniyet!” dediğin tek dişi kalmış canavar?",
        ],
      },
    ],
    englishSummary:
      "Summary (Ministry of Education / TBMM of record): words by Mehmet Akif Ersoy, written for a national competition — 724 poems were submitted and none accepted; Ersoy, persuaded by Education Minister Hamdullah Suphi Tanrıöver, wrote his poem at the Taceddin Dergâhı in Ankara and dedicated it to the army; he declined the 500-lira prize, donating it to charity. Adopted by the Grand National Assembly on 12 March 1921. Music by Osman Zeki Üngör (a first setting by Ali Rıfat Çağatay was replaced by Üngör's in the 1920s–30s); orchestration by Edgar Manas. The full poem is 10 stanzas; the sung anthem is the first two, printed on the native side. No official English translation is published, so no English lyric text is printed.",
    facts: [
      "The full 10-stanza poem is published by the Ministry of Culture and Tourism (the page prints the poem continuously, without stanza breaks). The sung anthem is the first two stanzas, printed here. Official printings vary between “Korkma!” and “Korkma,” punctuation; the Ministry text is reproduced as published.",
      "Script note: the poem was written in the Ottoman (Arabic-script) era; the official modern text is in the Latin-based Turkish alphabet (post-1928), as the Ministry prints it.",
    ],
    flags: [],
    links: [
      { label: "Türk Bayrağı ve İstiklal Marşı (Ministry of Culture and Tourism)", url: "https://hukuk.ktb.gov.tr/TR-137640/turk-bayragi-ve-istiklal-marsi.html" },
    ],
    sourceName: "Ministry of Culture and Tourism (Türkiye)",
  },
  {
    id: "kr-anthem",
    country: "South Korea",
    title: "Aegukga (애국가, “Patriotic Song”)",
    translationStatus: "OFFICIAL ENGLISH TRANSLATION PUBLISHED — Korea.net (Ministry of Culture, Sports and Tourism) publishes the English rendering on the English side of the toggle, re-verified line by line at build (see the note on this card).",
    nativeLabel: "한국어 (Hangul)",
    englishLabel: "English (Korea.net)",
    nativeBlocks: [
      {
        heading: "Verse 1",
        lines: ["동해 물과 백두산이 마르고 닳도록", "하느님이 보우하사 우리나라 만세."],
      },
      {
        heading: "Refrain",
        lines: ["무궁화 삼천리 화려 강산", "대한 사람 대한으로 길이 보전하세."],
      },
    ],
    englishBlocks: [
      {
        heading: "Verse 1 + refrain — Korea.net's published English rendering",
        lines: [
          "Until the East Sea's waves are dry, Mt. Baekdu worn away,",
          "God watch o'er our land forever, our Korea eternal.",
          "Rose of Sharon, thousand miles of range and river land;",
          "Guarded by her people, ever may Korea stand.",
        ],
      },
    ],
    englishNote:
      "Romanization (Revised Romanization, as official pages present it): “Donghae mulgwa Baekdusani mareugo daltorok / Haneunimi bouhasa urinara manse. / Mugunghwa samcheolli hwaryeogangsan / Daehan saram Daehaneuro giri bojeonhase.” The full anthem is 4 verses + refrain; on most occasions only verse 1 + refrain are sung. Build-time verification (Nov 2026): the rendering above was re-checked line by line against the Korea.net translation as published and cited — the wording matches line for line; refrain punctuation varies slightly between official printings and the form printed here is retained as published.",
    facts: [
      "The lyricist is unknown (theories attribute the words to Yun Chi-ho or Ahn Chang-ho — labeled as theories, not fact). The lyrics date to the 1890s and were originally sung to the tune of “Auld Lang Syne.”",
      "Adopted as the national anthem in August 1948, with the founding of the Republic of Korea.",
    ],
    flags: [
      "Melody date conflict (DISPUTED): Ahn Eak-tai composed the present melody — 1935 (most official-adjacent records) vs 1936/1937 in some official-adjacent write-ups. Print 1935 with this flag.",
    ],
    links: [],
    sourceName: "Korea.net (Ministry of Culture, Sports and Tourism) + National Institute of Korean History position",
  },
  {
    id: "ph-anthem",
    country: "Philippines",
    title: "Lupang Hinirang (“Chosen Land”)",
    translationStatus: "NO OFFICIAL ENGLISH TRANSLATION — RA 8491 confirms only the Filipino lyrics; the historical English version (“Land of the Morning”) is NOT confirmed by the 1998 law and must not be presented as official. The English side shows the statutory summary and this flag.",
    nativeLabel: "Filipino (statutory text)",
    englishLabel: "English summary",
    nativeBlocks: [
      {
        heading: "The complete statutory text (RA 8491 §36)",
        lines: [
          "Bayang magiliw,",
          "Perlas ng silanganan,",
          "Alab ng puso",
          "Sa dibdib mo'y buhay.",
          "Lupang hinirang,",
          "Duyan ka ng magiting,",
          "Sa manlulupig",
          "Di ka pasisiil.",
          "Sa dagat at bundok,",
          "Sa simoy at sa langit mong bughaw,",
          "May dilag ang tula",
          "At awit sa paglayang minamahal.",
          "Ang kislap ng watawat mo'y",
          "Tagumpay na nagniningning;",
          "Ang bituin at araw niya,",
          "Kailan pa ma'y di magdidilim.",
          "Lupa ng araw, ng luwalhati't pagsinta,",
          "Buhay ay langit sa piling mo;",
          "Aming ligaya na 'pag may mang-aapi,",
          "Ang mamatay nang dahil sa 'yo.",
        ],
      },
    ],
    englishSummary:
      "Statutory summary (RA 8491, the Flag and Heraldic Code of the Philippines): §35 — the anthem is entitled Lupang Hinirang. §36 — it shall always be sung in the national language (Filipino) within or without the country. §37 — rendition must follow Julián Felipe's musical arrangement and composition. §38 — when played at a public gathering, the attending public shall sing it, standing at attention facing the flag (right palm over left chest at the first note; uniformed personnel give the prescribed salute). History: music composed by Julián Felipe in 1898 (commissioned for the 12 June 1898 independence proclamation at Kawit); the original lyrics were José Palma's 1899 Spanish poem “Filipinas”; the Filipino version was adopted in 1956 (Department Order No. 5, 26 May 1956), with minor 1960s revisions (the Felipe Padilla de León version). RA 8491 confirms only the Filipino lyrics — no official English text exists, so none is printed.",
    facts: [
      "Statutory rules (RA 8491): §35 the anthem is entitled Lupang Hinirang; §36 it shall always be sung in the national language (Filipino) within or without the country; §37 rendition must follow Julián Felipe's musical arrangement; §38 the attending public shall sing it at public gatherings, standing at attention facing the flag (right palm over left chest at the first note; uniformed personnel give the prescribed salute).",
      "History (of record): Music composed by Julián Felipe in 1898 (commissioned for the 12 June 1898 independence proclamation at Kawit). The original lyrics were José Palma's 1899 Spanish poem “Filipinas”; the Filipino version was adopted in 1956 (Department Order No. 5, 26 May 1956), with minor 1960s revisions (the Felipe Padilla de León version).",
    ],
    flags: [],
    links: [
      { label: "Republic Act No. 8491 (Official Gazette)", url: "https://www.officialgazette.gov.ph/1998/02/12/republic-act-no-8491/" },
    ],
    sourceName: "Republic Act No. 8491 (Official Gazette, Philippines)",
  },
];

export const ALLIED_ETIQUETTE_NOTE =
  "Stand and render the same marks of respect for a friendly nation's anthem as for our own. The full protocol text lives in Partner Forces (Courtesy & protocol: AR 600-25 §2-5 on foreign anthems; FM 7-21.13 via USAREC; DA Pam 600-2 — pay respects to the anthems/colors of friendly nations just as to one's own), corroborated by two allied sources in this tile: Canada's official guidance (stand for the anthem of any other nation) and RA 8491 §38 (Philippines).";
