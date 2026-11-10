// Phrase Cards — transcribed from the Closure Sweep LIFE pack
// (~/workspace/military-app/closure/closure-life.md, Part 3,
// researched Nov 9, 2026). Sourcing rule enforced by the pack: a
// phrase ships only if read in an official installation/DoD
// publication actually opened. One source per card; conflicting
// spellings across official sources are flagged, never harmonized.
// GAPS SHIP AS GAPS: categories the sources do not publish are
// listed in `gaps` with NO phrase — never filled from phrasebooks,
// apps, or memory (pack Flags P-1/P-2).
//
// OKINAWA: official Okinawa sources print roman letters ONLY — no
// Okinawa source prints kana/kanji. This card therefore carries NO
// Japanese script characters at all. The only official script source
// found (NAF Atsugi Welcome Aboard Package) is mainland Japan and is
// NOT transplanted onto the Okinawa card (pack Flag P-1).
//
// KOREA: PARTIAL exactly as sourced. Sorry, help/emergency, yes, no,
// and numbers 1–10 were NOT sourced in the official publications
// opened — they appear in `gaps`, with no phrase values.

export type PhraseRow = {
  category: string;
  english: string;
  phrase: string;
  /** Local script, ONLY where the card's source prints it. Absent on the Okinawa card by rule. */
  script?: string;
  note?: string;
  flag?: string;
};

export type PhraseGap = { category: string; note: string };

export type PhraseCard = {
  key: string;
  place: string;
  title: string;
  sub: string;
  rows: PhraseRow[];
  gaps: PhraseGap[];
  sourceNote: string;
};

export const PHRASE_CARDS: Record<string, PhraseCard> = {
  okinawa: {
    key: "okinawa",
    place: "Japan — Okinawa",
    title: "Phrase Card — Okinawa, Japan",
    sub: "Roman letters only, exactly as the official Okinawa sources print them. No Okinawa source prints Japanese script, so this card carries none.",
    sourceNote:
      "Source: MCCS Okinawa, Okinawa Guide 2026–2027, “Japanese Phrases,” pp. 62–63 (JP-A). Variants in the MCB Camp Butler Newcomers Booklet 2026 (JP-B) and Kadena AB Youth on the Move (JP-C) are flagged on the rows they affect — spellings are never silently harmonized (pack Flag P-4). All three sources head the column “Japanese in Roman letters”; none prints Japanese script and none prints a separate pronunciation guide. The only official script source found (NAF Atsugi, mainland Japan) is NOT used on this card (pack Flag P-1).",
    rows: [
      { category: "Thank you", english: "Thank you very much", phrase: "Dômoarigatô (gozaimasu)", note: "Run together as printed. JP-B prints: Domo arigato gozaimasu." },
      { category: "Excuse me", english: "Excuse me", phrase: "Sumimasen", note: "JP-C prints: Sumi masen." },
      { category: "Sorry", english: "I am sorry", phrase: "Gomen nasai" },
      { category: "Yes", english: "Yes", phrase: "Hai", note: "JP-B has no bare Yes — only “Yes I understand — Hai wakarimasu.”" },
      { category: "No", english: "No", phrase: "Iie", note: "JP-B: “No I do not understand — Iie wakarimasen.” JP-C has no bare No — only “No, thank you — Iie kekko desu.”" },
      { category: "Greeting", english: "Good morning", phrase: "Ohayô gozaimasu" },
      { category: "Greeting", english: "Good afternoon", phrase: "Konnichiwa" },
      { category: "Greeting", english: "Good evening", phrase: "Konnbanwa", note: "Double n as printed in JP-A (sic). JP-B prints: Konbanwa." },
      { category: "Greeting", english: "Good night", phrase: "Oyasuminasai", note: "JP-B prints: Oyasumi nasai." },
      { category: "Greeting", english: "Goodbye", phrase: "Sayonara" },
      { category: "Greeting", english: "How are you?", phrase: "Ogenki desu ka?" },
      { category: "Where is…?", english: "Where is it?", phrase: "(Sore wa) Doko ni arimasu ka?", note: "JP-C prints: Doko desu ka? Restroom (JP-B): Otearai wa doko desu ka. Toilet (JP-C): Toire wa doko desu ka?" },
      { category: "Help / emergency", english: "Please help me", phrase: "Tasukete kudasai" },
      { category: "Help / emergency", english: "This is an emergency", phrase: "Hijyôji desu" },
      { category: "Help / emergency", english: "Call the police", phrase: "Keisatsu wo yonde kudasai" },
      { category: "Help / emergency", english: "Call an ambulance", phrase: "Kyûkyûsha wo yonde kudasai" },
      { category: "Numbers", english: "Numbers 1–10 — for counting things", phrase: "1 hitotsu · 2 futatsu · 3 mittsu · 4 yottsu · 5 itsutsu · 6 muttsu · 7 nanatsu · 8 yattsu · 9 kokonotsu · 10 tôu", note: "JP-A prints TWO number sets; they are not interchangeable. “mittsu” as printed (sic)." },
      { category: "Numbers", english: "Numbers 1–10 — abstract numbers", phrase: "1 ichi · 2 ni · 3 san · 4 shi/yon · 5 go · 6 roku · 7 shichi/nana · 8 hachi · 9 ku · 10 jû", note: "The second of JP-A's two sets — use the counting set above for objects." },
    ],
    gaps: [],
  },
  korea: {
    key: "korea",
    place: "Korea — Humphreys / Osan",
    title: "Phrase Card — Korea (PARTIAL, as sourced)",
    sub: "This card is partial because the official publications opened are partial. Categories the sources do not print are listed below as gaps — shown as gaps, never filled.",
    sourceNote:
      "Sources: 51st Fighter Wing Public Affairs, MiG Alley Flyer (Sept. 26, 2008), “Useful Korean expressions” (KR-A), and 51st Force Support Squadron magazine (Aug 2025), “Let's Learn Korean!” (KR-B). Romanization conflict: KR-A syllabifies (“Kamsa hap nida”) where KR-B prints standard forms (“Gamsahamnida”) — this card follows KR-B where both print a phrase, and KR-A-only rows are marked (pack Flag P-3). The USAG Humphreys newcomers page and Camp Humphreys e-Welcome Packet print NO phrase list — they route newcomers to ACS Korean Head Start / Basic Korean classes.",
    rows: [
      { category: "Greeting", english: "Hello", phrase: "Annyeonghaseyo", script: "안녕하세요", note: "KR-B form. KR-A prints the syllabified “Ahn-Nyeong-Ha-Se-Yo.”" },
      { category: "Greeting", english: "Goodbye (to person leaving)", phrase: "Annyeonghi gaseyo", script: "안녕히 가세요", note: "KR-B." },
      { category: "Greeting", english: "Goodbye (to person staying)", phrase: "Annyeonghi gyeseyo", script: "안녕히 계세요", note: "KR-B." },
      { category: "Thank you", english: "Thank you", phrase: "Gamsahamnida", script: "감사합니다", note: "KR-B form. KR-A prints “Kamsa hap nida.”" },
      { category: "Excuse me", english: "Excuse me", phrase: "Sillyehamnida", script: "실례합니다", note: "KR-B only." },
      { category: "Where is…?", english: "Do you know where (Itaewon) is?", phrase: "(Itaewon)i Eo-Di-In-Ji A-Se-Yo?", script: "(이태원)이 어디 인지 아세요?", note: "KR-A only.", flag: "Pack Flag P-7: this row's romanization was fragmented in PDF text extraction — verify against the page image before relying on it." },
      { category: "Getting around", english: "Can you take me to (Songtan)?", phrase: "euro De-RyeoDa Ju-Sil-Rae-Yo?", script: "(송탄)으로 데려다 주실래요?", note: "KR-A." },
      { category: "Getting around", english: "Please give me one", phrase: "Han gae juseyo", script: "한 개 주세요", note: "KR-B. The count word inside this sentence is not a numbers list — see gaps." },
    ],
    gaps: [
      { category: "Sorry", note: "Not published in the official sources opened (KR-A/KR-B). Shown as a gap — not filled from any phrasebook, app, or memory." },
      { category: "Help / emergency", note: "Not published in the official sources opened (KR-A/KR-B). Shown as a gap — not filled." },
      { category: "Yes", note: "Not published in the official sources opened (KR-A/KR-B). Shown as a gap — not filled." },
      { category: "No", note: "Not published in the official sources opened (KR-A/KR-B). Shown as a gap — not filled." },
      { category: "Numbers 1–10", note: "Not published in the official sources opened (KR-A/KR-B). Shown as a gap — not filled. (The “one” inside “Please give me one” is a sentence fragment, not a numbers list.)" },
    ],
  },
  germany: {
    key: "germany",
    place: "Germany — Kaiserslautern / Ramstein (KMC)",
    title: "Phrase Card — Germany (Kaiserslautern Military Community)",
    sub: "German as the welcome packet prints it. The packet prints no romanization and no pronunciation guide — German's Latin script is the local script.",
    sourceNote:
      "Source: USAG Rheinland-Pfalz ACS, Welcome Packet (Combined, Apr 10, 2023 v2), “German 101,” pp. 32–33 (DE-A). The packet has no standalone “Excuse me” entry and no bare “Thank you” entry — both ship here exactly as the packet prints them (pack Flag P-5).",
    rows: [
      { category: "Greeting", english: "Hello!", phrase: "Hallo!" },
      { category: "Greeting", english: "Good Day!", phrase: "Guten Tag!" },
      { category: "Greeting", english: "Good morning!", phrase: "Guten Morgen!" },
      { category: "Greeting", english: "Good evening!", phrase: "Guten Abend!" },
      { category: "Greeting", english: "Good night!", phrase: "Gute Nacht!" },
      { category: "Thank you", english: "Thank you very much", phrase: "Danke / Danke schön / Danke sehr", note: "The packet's label is “Thank you very much”; no bare “Thank you” entry exists in the source." },
      { category: "Sorry", english: "I am very sorry", phrase: "Es tut mir sehr leid." },
      { category: "Excuse me", english: "Excuse me, do you speak English?", phrase: "Entschuldigung, sprechen Sie Englisch?", note: "The packet prints “Excuse me” only as this full sentence (Restaurant / Shopping).", flag: "Pack Flag P-7: spacing in the source extraction (“Entschuldigung,sprechen”) needs a page-image check; printed here in standard spacing." },
      { category: "Where is…?", english: "Where is…?", phrase: "Wo ist…?" },
      { category: "Where is…?", english: "— a restroom?", phrase: "— eine Toilette?" },
      { category: "Where is…?", english: "— an ATM", phrase: "— ein Geldautomat?" },
      { category: "Help / emergency", english: "Help!", phrase: "Hilfe!" },
      { category: "Help / emergency", english: "Emergency!", phrase: "Notfall!" },
      { category: "Help / emergency", english: "Call the Police!", phrase: "Rufen Sie die Polizei!" },
      { category: "Help / emergency", english: "Danger!", phrase: "Gefahr!" },
      { category: "Help / emergency", english: "Fire!", phrase: "Feuer!" },
      { category: "Help / emergency", english: "Get a Doctor!", phrase: "Holen Sie einen Arzt!" },
      { category: "Help / emergency", english: "Please call an ambulance", phrase: "Bitte rufen sie einen Krankenwagen!", flag: "Pack Flag P-7: lowercase “sie” as extracted from the source — verify against the page image." },
      { category: "Yes", english: "Yes", phrase: "ja" },
      { category: "No", english: "No", phrase: "nein" },
      { category: "Numbers", english: "Numbers 1–10", phrase: "1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf · 6 sechs · 7 Sieben · 8 acht · 9 neun · 10 zehn", flag: "Pack Flag P-7: “7 – Sieben” prints with a capital S as extracted — verify against the page image." },
    ],
    gaps: [],
  },
};

/** OCONUS hub id (installationApps.ts HUBS) → phrase card keys shown
 * on that hub's card. The "mainland-japan" hub carries NO phrase card:
 * the pack sourced no mainland phrase list (the one script source,
 * NAF Atsugi, was not used — pack Flag P-1), so none is filled in. */
export const HUB_PHRASE_CARDS: Record<string, string[]> = {
  okinawa: ["okinawa"],
  korea: ["korea"],
  germany: ["germany"],
};
