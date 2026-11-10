// Allied Special Forces — transcribed from the researched pack
// (~/workspace/military-app/specops-allied/specops-allied.md, researched
// Nov 9, 2026). The pack is the content source of truth: each country's
// OWN official recruiting / defence-ministry pages only, figures
// transcribed exactly as printed (never rounded, converted, or
// "improved"), conflicts and gaps printed as ⚠ flags — never blended,
// never filled from secondary sources. Pipelines are STRUCTURE ONLY:
// named phases and published durations. No tactics, no TTPs, no
// course content, no capability assessments.
//
// PRE-BUILD FOLLOW-UP STATUS (Nov 9, 2026): the pack's recorded
// live-browser follow-ups were NOT executed in this build pass — no
// live-browser capability was available to the building agent. Every
// affected item therefore ships EXACTLY at the pack's flagged level,
// with no upgrades and nothing filled from secondary sources:
// Poland (F-9/F-10) posture + named processes only, ALL figures
// withheld; Korea SWC NCO (F-13) cycle/route published, tables
// ⚠ NOT VERIFIED (the F-5 older table ships in NO form); Italy
// COMSUBIN/GOI (F-6) opened-page level, GIS name-level; Greece
// Z' MAK/ETA (F-11) retrieval-gap card; Netherlands KCT vacancy
// (F-8) NOT VERIFIED, only the Defensiekrant 2017 2800 m / 12 min
// standard printed DATED; Philippines NAVSOG (F-16/F-17) under that
// name WITH the name-caution flag, no figures; Türkiye (F-12) the
// pack's DELIBERATELY SILENT finding.
//
// FINAL-PHASE UPDATE (Nov 10, 2026): the recorded live-browser
// verification (~/workspace/military-app/specops-allied/
// browser-verification-2026-11-09.md, official domains only) was
// executed Nov 9–10, 2026 and these upgrades now ship: Poland —
// GROM recruitment rules + selection stages and AGAT's official
// fitness criteria VERIFIED (the AGAT swim standard is CORRECTED
// to 100 m in under 2 min; the pack's secondhand <3 min report was
// wrong); Formoza and JWK/NIL were not re-read and stay flagged.
// South Korea — the SWC NCO (특전부사관) 268기 announcement was read
// in full and ships VERIFIED, scoring exactly as published with NO
// pass/fail minima claimed (F-13 resolved; F-5 unchanged).
// Netherlands — the live KCT vacancy was read in full; its
// requirements ship with BOTH age figures (F-8 resolved).
// Türkiye — the regulation text was verified and the pack's
// "no direct civilian entry" claim was WRONG: it is corrected
// everywhere it appeared (F-12 corrected; see the changelog).
// Italy (F-6) and Philippines (F-16/F-17) were retried in the
// final phase and stayed unreachable — their flags stand exactly
// as shipped. Greece stays at its partial level, untouched.

export type AlliedLevel =
  | "OPEN"
  | "PARTIAL"
  | "SILENT"
  | "NOT VERIFIED"
  | "GAP";

export type AlliedStep = { name: string; detail: string };
export type AlliedTable = { caption: string; headers: string[]; rows: string[][] };
export type AlliedSource = { label: string; url: string };

export type AlliedEntry = {
  id: string;
  name: string;
  /** Search summary — leads with the terms members actually search. */
  summary: string;
  level: AlliedLevel;
  levelLabel: string;
  /** Language label for entries sourced from non-English official pages. */
  langLabel?: string;
  what: string;
  who: string;
  quals: string[];
  tables?: AlliedTable[];
  pipelineIntro?: string;
  pipeline: AlliedStep[];
  flags: string[];
  sources: AlliedSource[];
  /** Short source line for the Binder trust stamp. */
  source: string;
};

export type AlliedCountry = {
  key: string;
  label: string;
  tileSub: string;
  intro: string;
  entries: AlliedEntry[];
};

export const ALLIED_INTRO =
  "The special operations forces of the same 17 allied countries as Partner Forces, in Partner Forces order — each presented as its own government presents it: what the unit is, who can apply as published, the selection and entry standards ONLY where officially published (attributed to the official page, dated where the source is dated), and the training pipeline by named phases and published durations only. Where a government publishes almost nothing, the entry prints that posture as its finding — the gap is never filled from books, journalism, or wikis. ⚠ flags render per source, never blended.";

export const ALLIED_STANDING =
  "Reference and recognition level only, from each country's own public recruiting publications. This section is not a preparation program, and nothing in it guarantees selection anywhere. No fitness calculators or checkers are built from these tables in this pass — the pack's checker feasibility is recorded as a follow-up.";

const NO_PIPELINE: AlliedStep[] = [
  { name: "Training pipeline", detail: "No pipeline is published on the official pages opened. None is printed here." },
];

/* -------------------------------- GERMANY -------------------------------- */

const GERMANY: AlliedCountry = {
  key: "germany",
  label: "Germany",
  tileSub: "KSK (both role tables) · KSM Kampfschwimmer (visit route)",
  intro:
    "Official pages in German; figures transcribed, prose summarized. No official English version of these pages was opened. KSK is open recruiting for serving personnel only, with two DIFFERENT published role tables — operator and reconnaissance — printed separately, never merged. KSM publishes an open unit-visit route and no fitness numbers.",
  entries: [
    {
      id: "de-ksk",
      name: "Kommando Spezialkräfte (KSK)",
      summary:
        "KSK — the Bundeswehr's Army special forces command. Serving personnel only; Potenzialfeststellungsverfahren, then the 2-year Basisausbildung. BOTH published role tables ship separately: Kommandosoldat (operator) and Kommandoaufklärungssoldaten (reconnaissance, lower) — never merged.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — serving personnel only, published standards",
      langLabel: "Official page in German; figures transcribed, prose summarized.",
      what: "The Bundeswehr's Army special forces command. The official KSK page lists five core tasks: freeing German hostages abroad, engaging high-value targets, detaining target persons, training partner special forces, and gaining key information through special reconnaissance. (bundeswehr.de)",
      who: "Serving personnel only. The Bundeswehr Karriere FAQ states the applicant must currently already be in an active service relationship. Two recommended routes: (1) Mannschaften (enlisted) career, then apply for the Potenzialfeststellungsverfahren KSK after ca. 2 Jahren of service; (2) Feldwebel (NCO) career, apply after completing career training. An infantry prior posting is recommended, not mandatory. The KSK page states service is open to women.",
      quals: [
        "Must currently be in an active service relationship (serving personnel only — no civilian direct entry is published)",
        "Age limit: none published on the pages opened — ⚠ NOT PUBLISHED",
        "Entry fitness minimums are published in TWO separate role tables (below) — the operator table and the lower reconnaissance table. They are different standards for different roles and are never merged.",
      ],
      tables: [
        {
          caption: "KSK entry fitness — Kommandosoldat (operator), exactly as printed on bundeswehr.de",
          headers: ["Event", "Published minimum"],
          rows: [
            ["Intervalltest", "5 × 1.000 m in 4:30 min; 4:20 min; 4:10 min; 4:00 min; 3:50 min; mit jeweils 3 Minuten Intervallpause"],
            ["Koordinationsbahn", "in höchstens 2 min"],
            ["Verwundetentransport (casualty transport)", "ca. 38 m und 2 Hindernisse in höchstens 2 min"],
            ["Klimmzüge im Ristgriff (overhand pull-ups)", "mindestens 7"],
            ["Bauchaufzüge (sit-ups)", "mindestens 20 in 30 Sekunden"],
            ["Liegestütze (push-ups)", "mindestens 22 in 30 Sekunden"],
            ["Nahkampf", "2 min Sparring"],
            ["Schwimmen (following day)", "200 m im Kampfanzug in max. 7:30 min (in uniform, incl. undressing in the water)"],
            ["Marsch (following day)", "20 km mit 20 kg Gepäck in max. 3,5 Stunden"],
          ],
        },
        {
          caption: "KSK entry fitness — Kommandoaufklärungssoldaten (reconnaissance role; a different, lower table — do not merge with the operator table)",
          headers: ["Event", "Published minimum"],
          rows: [
            ["Intervalltest", "5 × 1.000 m in 5:10 / 5:00 / 4:50 / 4:40 / 4:30 min"],
            ["Klimmhang (dead hang, in place of pull-ups)", "30 Sekunden"],
            ["Bauchaufzüge (sit-ups)", "mindestens 15 in 30 Sekunden"],
            ["Liegestütze (push-ups)", "mindestens 15 in 30 Sekunden"],
            ["Schwimmen", "200 m in max. 7:30 min"],
            ["Marsch", "7 km mit 10 kg (a test run, stated as not scored)"],
          ],
        },
      ],
      pipeline: [
        { name: "Potenzialfeststellungsverfahren", detail: "Multi-part assessment; the FAQ notes psychological observation." },
        { name: "Zweijährige Basisausbildung (2-year basic training)", detail: "For all Kommando soldiers, following selection." },
      ],
      flags: [],
      sources: [
        { label: "bundeswehr.de — KSK: KSK-Soldat werden", url: "https://www.bundeswehr.de/de/organisation/heer/struktur/division-schnelle-kraefte/kommando-spezialkraefte/ksk-soldat-werden" },
        { label: "bundeswehrkarriere.de — Spezialkräfte FAQ", url: "https://www.bundeswehrkarriere.de/entdecker/bereiche/spezialkraefte/faq-spezialkraefte" },
      ],
      source: "bundeswehr.de — KSK page; bundeswehrkarriere.de Spezialkräfte FAQ",
    },
    {
      id: "de-ksm",
      name: "Kommando Spezialkräfte der Marine (KSM) — Kampfschwimmer",
      summary:
        "KSM Kampfschwimmer — the Bundeswehr's maritime special forces. PARTIAL: a 3-day Truppenbesuch (unit visit) route in Eckernförde is published, with visit criteria (16–30, German citizenship, no medical restrictions) labeled as VISIT criteria — never enlistment standards. No fitness numbers are published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — open recruiting-visit route published; no entry fitness numbers published",
      langLabel: "Official page in German; figures transcribed, prose summarized.",
      what: "The maritime component of Bundeswehr special forces — Kampfschwimmer (combat divers) plus support/command teams for special military tasks in the maritime environment: open sea, coasts, river mouths, inland waters. Published capabilities include gaining key information, retaking ships, detaining target persons abroad, offensive counter-terrorism, and covert operations. (bundeswehr.de)",
      who: "The KSM Personalwerbetrupp (recruiting team) offers a dreitägigen Truppenbesuch (3-day unit visit) in Eckernförde several times a year — 2027 dates are listed on the page — including sitting the entry test on site. Serving soldiers ask the recruiting team directly for their dates.",
      quals: [
        "Visit participation criteria, exactly as printed — these qualify a person for the VISIT; the page does not present them as enlistment standards, and they are not upgraded to enlistment standards here:",
        "“Du bist zwischen 16 und 30 Jahren alt.” (between 16 and 30 years old)",
        "“Du besitzt die deutsche Staatsbürgerschaft.” (German citizenship)",
        "“Du hast keine gesundheitlichen Einschränkungen und bist körperlich unversehrt.” (no health restrictions; physically uninjured)",
        "Entry fitness numbers: none published on the page opened — ⚠ NOT PUBLISHED",
      ],
      pipeline: [
        { name: "Truppenbesuch (3-day unit visit), Eckernförde", detail: "Offered several times a year by the recruiting team, including sitting the entry test on site. No further pipeline structure is published on the page opened." },
      ],
      flags: [
        "VISIT CRITERIA, NOT ENLISTMENT STANDARDS: the 16–30 / citizenship / no-medical-restrictions criteria above qualify a person for the unit visit only, exactly as the page presents them.",
      ],
      sources: [
        { label: "bundeswehr.de — Kommando Spezialkräfte der Marine", url: "https://www.bundeswehr.de/de/organisation/marine/struktur/einsatzflottille-1/kommando-spezialkraefte-marine" },
      ],
      source: "bundeswehr.de — KSM unit page",
    },
  ],
};

/* --------------------------------- NORWAY --------------------------------- */

const NORWAY: AlliedCountry = {
  key: "norway",
  label: "Norway",
  tileSub: "FSK Spesialjeger · MJK Marinejeger — two different batteries (F-1)",
  intro:
    "Official pages in Norwegian; figures transcribed, prose summarized. Forsvaret's own hub states both FSK and MJK stand on national/international readiness for missions of particularly high political or physical risk, including counter-terror support to police. ⚠ F-1: the FSK and MJK fitness batteries are DIFFERENT tables — they ship as two separate entries and are never merged.",
  entries: [
    {
      id: "no-fsk",
      name: "Forsvarets spesialkommando (FSK) — Spesialjeger",
      summary:
        "FSK Spesialjeger — OPEN RECRUITING after initial service. Published battery: pull-ups 8, push-ups 45, sit-ups 50/2 min, back raises 25, shuttle 32 rounds/10 min, 30 km march 4:40 with ~28 kg total, 400 m swim 11 min. This is FSK's table — MJK's is different (F-1).",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — post-initial-service entry, published standards",
      langLabel: "Official page in Norwegian; figures transcribed, prose summarized.",
      what: "One of Forsvaret's two special departments (with MJK), standing on national/international readiness for missions of particularly high political or physical risk, including counter-terror support to police. The operator role title is Spesialjeger.",
      who: "Post-initial-service entry; no civilian direct entry is published. General requirements as published: Norwegian citizen; minimum karakter 5 on the theory test (general ability) from sesjon (conscription assessment) — grade 4 may be offered re-testing during selection; good vision, no glasses or lenses; minimum karakter 9 on mental health from sesjon; minimum 10 months of førstegangstjenesten (initial service) completed before uptake; clean record (plettfri vandel); security-clearable; good health, no dependence on regular medication.",
      quals: [
        "Age limit: none published — ⚠ NOT PUBLISHED",
        "Entry fitness minimums, exactly as printed (FSK's battery — MJK's differs; see flag F-1):",
      ],
      tables: [
        {
          caption: "FSK entry fitness minimums — exactly as printed on forsvaret.no (Spesialjeger)",
          headers: ["Event", "Published minimum"],
          rows: [
            ["Kroppsheving (pull-ups)", "8 stk"],
            ["Armhevninger (push-ups)", "45 stk"],
            ["Magebøyinger (sit-ups)", "50 stk på 2 min"],
            ["Rygghev (back raises)", "25 stk"],
            ["Rundeløp (shuttle course; one round = 15 m × 7 m × 15 m × 7 m)", "32 runder på 10 min"],
            ["Feltmarsj (field march)", "30 km på 4 timer og 40 min — pack 22 kg + weapon, 2 litres water and food (ca. 28 kg totalt)"],
            ["Svømming", "400 m på 11 min (free technique; starts with a dive, first 25 m underwater)"],
          ],
        },
      ],
      pipelineIntro: "The process spans 2 years, by name at published level:",
      pipeline: [
        { name: "Opptak (selection)", detail: "Entry selection for the Spesialjeger education." },
        { name: "1 year as spesialjegerelev (special-jeger student)", detail: "The education year following selection." },
        { name: "1 probationary year (prøveår)", detail: "At an operational squadron. Completed training confers rett og plikt til tilsetting på T35 (right and obligation to employment on the T35 contract)." },
      ],
      flags: [
        "F-1 — ⚠ TWO DIFFERENT BATTERIES, BY DESIGN: FSK and MJK publish different fitness batteries (FSK swim 400 m / 11 min with sit-ups and back raises; MJK swim 400 m / 10 min with brutalbenk, plus a timed pack run and a lifesaving test). Not an error — two units, two tables. They are kept separate in this section and never blended.",
      ],
      sources: [
        { label: "forsvaret.no — Spesialjeger (FSK)", url: "https://www.forsvaret.no/utdanning/utdanninger/spesialjeger" },
        { label: "forsvaret.no — Forsvarets spesialstyrker hub", url: "https://www.forsvaret.no/jobb/forsvarets-spesialstyrker" },
      ],
      source: "forsvaret.no — Spesialjeger education page",
    },
    {
      id: "no-mjk",
      name: "Marinejegerkommandoen (MJK) — Marinejeger",
      summary:
        "MJK Marinejeger — OPEN RECRUITING after initial service. Published battery: pull-ups 8, push-ups 45, brutal bench 14, 400 m swim 10 min no goggles, 25 m underwater pass, 5000 m run 25 min with 9 kg pack, 30 km march 4:30 with 22 kg, lifesaving test 4:30. This is MJK's table — FSK's is different (F-1).",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — post-initial-service entry, published standards",
      langLabel: "Official page in Norwegian; figures transcribed, prose summarized.",
      what: "One of Forsvaret's two special departments (with FSK) — the maritime special operations command. The operator role title is Marinejeger. The MJK article prints the next application deadline: “Søknadsfrist for neste opptak til marinejeger er 15.04.2026.”",
      who: "Post-initial-service entry. General requirements as published: Norwegian citizen; karakter 5 on the theory test (grade 4 may be re-tested); no glasses/lenses; normal colour vision; minimum karakter 9 on mental health; clean record; security-clearable; pass the physical minimums; and førstegangstjenesten completed before uptake (minimum 10 months of it).",
      quals: [
        "Age limit: none published — ⚠ NOT PUBLISHED",
        "Entry fitness minimums, exactly as printed (MJK's battery — FSK's differs; see flag F-1):",
      ],
      tables: [
        {
          caption: "MJK entry fitness minimums — exactly as printed on forsvaret.no (Marinejeger). Differs from FSK's battery — never blended (F-1)",
          headers: ["Event", "Published minimum"],
          rows: [
            ["Kroppsheving (pull-ups)", "8 stk"],
            ["Armhevninger (push-ups)", "45 stk"],
            ["Brutalbenk (brutal bench)", "14 stk"],
            ["Svømming", "400 m på 10 min (25 m pool; swimming goggles not allowed — “Svømmebriller er ikke tillatt”)"],
            ["Svømming under vann (underwater swim)", "25 m — Bestått (pass)"],
            ["Løping (run)", "5000 m på 25 min (carrying issued pack of 9 kilo)"],
            ["Gåing med sekk (marching with pack)", "30 km på 4 t 30 min (22 kg pack, two litres water and food)"],
            ["Livredningstest (lifesaving test)", "4 min 30 sek"],
          ],
        },
      ],
      pipelineIntro: "Selection structure, by name at published level:",
      pipeline: [
        { name: "Opptak (selection)", detail: "Entry selection — grovopptak and seleksjon per the education page." },
        { name: "Two years of education", detail: "Grovopptak, seleksjon, a one-year education year, then further specialisation per the education page." },
        { name: "Transfer to an operational squadron", detail: "Completed training confers rett og plikt til tilsetting på T35 (T35 employment right/obligation), as with FSK." },
      ],
      flags: [
        "F-1 — ⚠ TWO DIFFERENT BATTERIES, BY DESIGN: MJK's battery differs from FSK's (different swim time, brutalbenk instead of sit-ups/back raises, a timed pack run and a lifesaving test added). The two tables are kept separate in this section and never blended.",
      ],
      sources: [
        { label: "forsvaret.no — Marinejeger", url: "https://www.forsvaret.no/utdanning/utdanninger/marinejeger" },
        { label: "forsvaret.no — MJK: Er du en sånn som oss?", url: "https://www.forsvaret.no/om-forsvaret/organisasjon/forsvarets-spesialstyrker/marinejegerkommandoen-mjk/er-du-en-sann-som-oss" },
      ],
      source: "forsvaret.no — Marinejeger education page",
    },
  ],
};

/* --------------------------------- CANADA --------------------------------- */

const CANADA: AlliedCountry = {
  key: "canada",
  label: "Canada",
  tileSub: "JTF 2 (PFSE 1) · CSOR (PFSE 3) · CJIRU (PFSE 2) — in-service only",
  intro:
    "Official English pages verified on Canada.ca. Canadian Special Operations Forces Command (CANSOFCOM) — “To provide the CDS and Operational Commanders with agile, high-readiness Special Operations Forces capable of conducting special operations across the spectrum of conflict at home and abroad.” Composition, verbatim: a headquarters element and five units — Joint Task Force 2 (JTF 2); the Canadian Special Operations Regiment (CSOR); 427 Special Operations Aviation Squadron (SOAS); the Canadian Joint Incident Response Unit – Chemical, Biological, Radiological and Nuclear (CJIRU-CBRN); and the Canadian Special Operations Training Centre (CSOTC). There is NO civilian direct recruiting into CANSOFCOM operators — all operator recruiting published is in-service, under the annual CANFORGEN call. Public joining contact published on the JTF 2 and CSOR pages: CANSOFCOMRecruiting.RecrutementCOMFOSCAN@forces.gc.ca.",
  entries: [
    {
      id: "ca-jtf2",
      name: "Joint Task Force 2 (JTF 2) — Special Operations Assaulters",
      summary:
        "JTF 2 — Special Operations Assaulters (SOA). PARTIAL: occupation, in-service route, and PFSE 1 published (hand grip ≥1.00, 1.5-mile run ≤09:45, push-ups ≥40, pull-ups ≥5, sit-ups ≥40/1-min, 72 kg squat 11 reps, BMSS). The Assessment Phase is not publicly detailed. No civilian route.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — occupation, in-service route, and entry fitness published; Assessment Phase not publicly detailed",
      what: "Canada.ca, verbatim: “Joint Task Force 2 (JTF 2) is an extremely high-readiness and precise special operations forces unit. JTF 2 exists to protect the Canadian national interests and combat terrorism and threats to Canadians at home and abroad.” The operator occupation, as the government names it: Special Operations Assaulters (SOA) — personnel of the Regular Force directly employed in the tactical aspects of special operations and other high-value tasks (counter-terrorism, hostage rescue, special operations patrols, special reconnaissance and surveillance). JTF 2 also fields Special Operations Coxswains, selected from Regular Force occupations for JTF 2 maritime requirements (their fitness standard is PFSE 2 — see the CJIRU entry).",
      who: "In-service only — Regular Force and Primary Reserve CAF members, via occupation transfer / component transfer, under the annual CANFORGEN call (see the standing eligibility on the CSOR entry and the CANFORGEN note below). No civilian direct entry is published — stated plainly.",
      quals: [
        "Entry fitness — PFSE 1 (for SOA), verbatim numbers (CFMWS, referenced by CANFORGEN 100/26 as its Ref C — see flag F-2):",
      ],
      tables: [
        {
          caption: "PFSE 1 (SOA) — verbatim, CFMWS special operations standards (referenced by CANFORGEN 100/26 as Ref C — F-2)",
          headers: ["Event", "Published standard"],
          rows: [
            ["Relative Hand Grip", "≥ 1.00"],
            ["1.5 Mile Run", "≤ 09:45"],
            ["Push-ups", "≥ 40 reps, continuous"],
            ["Pull-ups", "≥ 5 reps, continuous"],
            ["Sit-ups", "≥ 40 reps, 1-min"],
            ["Standard Load Squat (72 kg)", "11 reps"],
            ["BMSS (Basic Military Swim Standard) Test", "Completion"],
          ],
        },
      ],
      pipelineIntro: "The Assessment Phase itself is not publicly detailed beyond the CANFORGEN's general warnings (maximum of three attempts; RTU on failing the re-administered PFSE on arrival). No further pipeline structure is published.",
      pipeline: NO_PIPELINE,
      flags: [
        "F-2 — ⚠ PROVENANCE: the PFSE numbers live on CFMWS (a CAF morale-and-welfare agency site), not Canada.ca proper; they ship because CANFORGEN 100/26 — an official Canada.ca instrument — references them as its Ref C.",
        "CANFORGEN 100/26 — DATED BY DESIGN: the call's dates belong to the 2026/2027 call (complete files to PSO offices NLT 18 Dec 26; completed applications NLT 11 Jan 2027; courses commencing summer 2027). The standing structure — occupations, medical categories, Level II clearance, rank-relinquishment note, max 3 Assessment Phase attempts, RTU warning — is the durable content; the dates must be re-verified against the current call.",
      ],
      sources: [
        { label: "canada.ca — Joint Task Force 2", url: "https://www.canada.ca/en/special-operations-forces-command/corporate/organizational-structure/joint-task-force-2.html" },
        { label: "canada.ca — CANSOFCOM types of jobs", url: "https://www.canada.ca/en/special-operations-forces-command/corporate/job-opportunities/types-jobs.html" },
        { label: "cfmws.ca — Special operations PFSE standards", url: "https://cfmws.ca/sport-fitness-rec/fitness-testing/military-specialty-trade-testing-training/special-operations" },
        { label: "canada.ca — CANFORGEN 100/26", url: "https://www.canada.ca/en/department-national-defence/corporate/policies-standards/canforgens/2026/100-cansofcom-operator-and-operator-officer-call-for-applications-reg-f-and-p-res.html" },
      ],
      source: "canada.ca — JTF 2; CFMWS PFSE standards (via CANFORGEN 100/26 Ref C)",
    },
    {
      id: "ca-csor",
      name: "Canadian Special Operations Regiment (CSOR) — Special Forces Operators",
      summary:
        "CSOR — Special Forces Operators (SF Op, MOSID 00369). OPEN RECRUITING (in-service): Regular and Reserve NCMs via occupation transfer. PFSE 3 verbatim (grip ≥1.00, 72 kg squat 11, pull-ups ≥5, sit-ups ≥40, push-ups ≥40, shuttle ≥ Level 9.0, 25 m combat swim, 12 km / 35 kg ruck ≤2:24:00). CANFORGEN 100/26 standing eligibility ships here.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING (in-service) — published standards",
      what: "Canada.ca, verbatim: “The Canadian Special Operations Regiment (CSOR) is a special operations forces (SOF) unit that generates and employs high-readiness personnel capable of full-spectrum operations in support of Chief of the Defence Staff (CDS) directed objectives by the Canadian Special Operations Forces Command (CANSOFCOM) at home and abroad.” Its published expertise: mastery of core skills in relation to Special Warfare, Special Reconnaissance, and Direct Action. The operator occupation: Special Forces Operators (SF Op) — SOF generalists.",
      who: "Types of Jobs page, verbatim in substance: “The SF Operator 00369 MOSID is open to both Regular and Reserve Force NCMs through the occupation transfer process.” Officers can apply as SF Operator Officers. No civilian direct entry is published — stated plainly. Standing eligibility (CANFORGEN 100/26, the 2026/2027 call): open to any MOSID and rank — holders of MS / MCpl / Maj or higher voluntarily relinquish rank and pay to Cpl / Capt on transfer to the untrained operator occupations; minimum medical categories SOA 222225 / SOTCO 313225 / SF Op 223225; must hold a valid minimum security clearance Level II (Secret); must be a Canadian citizen; must hold a valid, unrestricted provincial/territorial driver's licence; Regular Force must meet the related occupation-transfer program criteria; Primary Reserve: no minimum service, must meet OFP in current occupation; the PFSE is completed after 15 Jul 26, submitted with the application, and re-administered on site — those who do not meet the minimum on arrival are returned to unit (RTU).",
      quals: [
        "Entry fitness — PFSE 3 (for SF Op), verbatim numbers (CFMWS, referenced by CANFORGEN 100/26 as its Ref C — see flag F-2):",
        "CANFORGEN 100/26 dates, labeled as the 2026/2027 call (DATED by design): complete files to PSO offices NLT 18 Dec 26; completed applications to unit recruiting/selection NLT 11 Jan 2027; successful candidates should expect courses commencing summer 2027.",
        "Assessment Phase warning, verbatim in substance: “All ap are extremely demanding and difficult, and a maximum of three (3) attempts are permitted.”",
        "No age limit is printed in CANFORGEN 100/26 as opened — ⚠ NOT PUBLISHED",
      ],
      tables: [
        {
          caption: "PFSE 3 (SF Op) — verbatim, CFMWS special operations standards (referenced by CANFORGEN 100/26 as Ref C — F-2)",
          headers: ["Event", "Published standard"],
          rows: [
            ["Relative Hand Grip", "≥ 1.00"],
            ["Standard Load Squat (72 kg)", "11 reps"],
            ["Pull-ups", "≥ 5 reps, continuous"],
            ["Sit-ups", "≥ 40 reps, 1-min"],
            ["Push-ups", "≥ 40 reps, continuous"],
            ["20 m shuttle run", "≥ Level 9.0"],
            ["Combat Swim Test", "25 m (no flotation, no time limit)"],
            ["Modified Ruck March", "≤ 2:24:00 (12 km, 35 kg rucksack, no helmet, no rifle)"],
          ],
        },
      ],
      pipelineIntro: "Successful candidates are loaded on the respective CANSOFCOM course commencing summer 2027 (2026/2027 call). No further pipeline structure is published on the pages opened.",
      pipeline: NO_PIPELINE,
      flags: [
        "F-2 — ⚠ PROVENANCE: the PFSE numbers live on CFMWS (a CAF morale-and-welfare agency site), not Canada.ca proper; they ship because CANFORGEN 100/26 — an official Canada.ca instrument — references them as its Ref C.",
        "CANFORGEN 100/26 — DATED BY DESIGN: a CANFORGEN call is a dated instrument. The deadlines and course dates above belong to the 2026/2027 call and must be re-verified against the current call; the standing structure (occupations, PFSE, medical categories 222225 / 313225 / 223225, Level II clearance, rank-relinquishment note, max 3 attempts, RTU warning) is the durable content.",
      ],
      sources: [
        { label: "canada.ca — Canadian Special Operations Regiment", url: "https://www.canada.ca/en/special-operations-forces-command/corporate/organizational-structure/so-regiment.html" },
        { label: "canada.ca — CANSOFCOM types of jobs", url: "https://www.canada.ca/en/special-operations-forces-command/corporate/job-opportunities/types-jobs.html" },
        { label: "cfmws.ca — Special operations PFSE standards", url: "https://cfmws.ca/sport-fitness-rec/fitness-testing/military-specialty-trade-testing-training/special-operations" },
        { label: "canada.ca — CANFORGEN 100/26", url: "https://www.canada.ca/en/department-national-defence/corporate/policies-standards/canforgens/2026/100-cansofcom-operator-and-operator-officer-call-for-applications-reg-f-and-p-res.html" },
      ],
      source: "canada.ca — CSOR; CFMWS PFSE standards (via CANFORGEN 100/26 Ref C)",
    },
    {
      id: "ca-cjiru",
      name: "Canadian Joint Incident Response Unit (CJIRU) — SOTCO",
      summary:
        "CJIRU — Special Operations Technical Collection Operator (SOTCO, re-designated from CBRN Operator Oct 2024). OPEN RECRUITING (in-service). PFSE 2 verbatim (grip ≥1.00, 72 kg squat ≥11, pull-ups ≥5, sit-ups ≥40, shuttle ≥ Level 8.0, BMSS) — shared with JTF 2 Special Operations Coxswains.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING (in-service) — name, occupation, and fitness published",
      what: "Canada.ca: “CJIRU has immediate capability to respond to chemical, biological, radiological and nuclear threats for special operations forces missions.” A Canada.ca Defence Stories article (Mar 9, 2026) describes it as a highly specialized unit within CANSOFCOM providing critical counter-CBRN and full-spectrum exploitation effects for the Government of Canada, based in Trenton, Ontario. The operator occupation: Special Operations Technical Collection Operator (SOTCO) — re-designated from CBRN Operator in Oct 2024.",
      who: "“The SOTCO MOSID is open to both Regular and Reserve Force Non-Commissioned Members through the occupation transfer process.” Standing eligibility is CANFORGEN 100/26's (see the CSOR entry): medical category for SOTCO 313225, Level II (Secret) clearance, Canadian citizen, unrestricted driver's licence. No civilian direct entry is published — stated plainly.",
      quals: [
        "Entry fitness — PFSE 2 (for SOTCO; shared with JTF 2 Special Operations Coxswain), verbatim numbers (CFMWS, referenced by CANFORGEN 100/26 as its Ref C — see flag F-2):",
      ],
      tables: [
        {
          caption: "PFSE 2 (SOTCO / Coxswain) — verbatim, CFMWS special operations standards (referenced by CANFORGEN 100/26 as Ref C — F-2)",
          headers: ["Event", "Published standard"],
          rows: [
            ["Relative Hand Grip", "≥ 1.00"],
            ["Standard Load Squat (72 kg)", "≥ 11 reps"],
            ["Pull-ups", "≥ 5 reps, continuous"],
            ["Sit-ups", "≥ 40 reps, 1-min"],
            ["20 m shuttle run", "≥ Level 8.0"],
            ["BMSS Test", "Completion"],
          ],
        },
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-2 — ⚠ PROVENANCE: the PFSE numbers live on CFMWS (a CAF morale-and-welfare agency site), not Canada.ca proper; they ship because CANFORGEN 100/26 — an official Canada.ca instrument — references them as its Ref C.",
      ],
      sources: [
        { label: "canada.ca — CANSOFCOM organisational structure", url: "https://www.canada.ca/en/special-operations-forces-command/corporate/organizational-structure.html" },
        { label: "canada.ca — CJIRU Defence Stories article (Mar 9, 2026)", url: "https://www.canada.ca/en/department-national-defence/maple-leaf/defence/2026/03/canadian-joint-incident-response-unit.html" },
        { label: "cfmws.ca — Special operations PFSE standards", url: "https://cfmws.ca/sport-fitness-rec/fitness-testing/military-specialty-trade-testing-training/special-operations" },
      ],
      source: "canada.ca — CJIRU; CFMWS PFSE standards (via CANFORGEN 100/26 Ref C)",
    },
  ],
};

/* ------------------------------ UNITED KINGDOM ----------------------------- */

const UK: AlliedCountry = {
  key: "uk",
  label: "United Kingdom",
  tileSub: "22 SAS & SBS (Regular) — deliberately silent · SAS(R) & SBS(R) — partial",
  intro:
    "Official English pages verified. GOV.UK (Directorate of Special Forces), verbatim: “Part of Cyber & Specialist Operations Command, the UK Special Forces (UKSF) is a military organisation which conducts high risk operations in support of UK interests on behalf of the Ministry of Defence.” The same page states the UK's publication posture: strict rules govern publication of information relating to the Special Forces, to protect the security of UKSF personnel, equipment, tactics, techniques and procedures. Royal Marines Commandos are NOT included as UKSF — they are not named as UKSF on any official page opened (pack exclusion, honored).",
  entries: [
    {
      id: "uk-sas-reg",
      name: "22 Special Air Service Regiment (SAS) — Regular",
      summary:
        "22 SAS (Regular) — DELIBERATELY SILENT: the MoD publishes no eligibility, selection structure, or fitness numbers for the Regular regiment. The only official SAS recruiting published anywhere is for the Reserve regiments. This card prints that posture as its finding — the Space Force precedent from the U.S. section.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT — no regular eligibility, selection structure, or fitness numbers published by the MoD",
      what: "A regiment of UK Special Forces (UKSF), under the Directorate of Special Forces within Cyber & Specialist Operations Command. Beyond that framing, no gov.uk / army.mod.uk page opened publishes a regular SAS mission line.",
      who: "Not published. No gov.uk / army.mod.uk page opened publishes who can apply to the Regular regiment, age/service prerequisites, or a selection structure for regulars. The only official SAS recruiting published anywhere is for the Reserve regiments (21 & 23 SAS, below) — whose page notes that after the Briefing Course the candidate can choose which pathway they want to attempt, regular or reserve, but publishes no regular-pathway requirements.",
      quals: [
        "⚠ NONE PUBLISHED: the MoD publishes no eligibility, selection structure, or fitness numbers for 22 SAS (Regular). Selection is not publicly detailed by the MoD, and this entry prints that posture as its finding — no standards are reconstructed here from any other source.",
      ],
      pipeline: [
        { name: "Training pipeline: NONE PUBLISHED", detail: "Consistent with the publication posture above, the MoD publishes no selection or training pipeline for the Regular regiment, and this entry prints none." },
      ],
      flags: [
        "DELIBERATELY SILENT, BY THE MoD'S OWN PUBLICATION POSTURE: the GOV.UK Directorate of Special Forces page states there are strict rules on the publication of information relating to the Special Forces, with advice from the Defence and Security Media Advisory Committee for anyone intending to publish. This entry summarizes that posture and prints nothing beyond it.",
      ],
      sources: [
        { label: "gov.uk — Directorate of Special Forces", url: "https://www.gov.uk/government/groups/directorate-of-special-forces" },
      ],
      source: "gov.uk — Directorate of Special Forces",
    },
    {
      id: "uk-sbs-reg",
      name: "Special Boat Service (SBS) — Regular",
      summary:
        "SBS (Regular) — DELIBERATELY SILENT, on the same basis as 22 SAS: no royalnavy.mod.uk / gov.uk page opened publishes regular SBS eligibility, prerequisites, selection structure, or fitness numbers. The only official SBS recruiting published is SBS (Reserve).",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT — no regular eligibility, selection structure, or fitness numbers published by the MoD",
      what: "The Royal Navy's special forces unit within UK Special Forces (UKSF) Group. Beyond that framing, no royalnavy.mod.uk / gov.uk page opened publishes a regular SBS mission line.",
      who: "Not published. The only official SBS recruiting published anywhere is SBS (Reserve), below.",
      quals: [
        "⚠ NONE PUBLISHED: no eligibility, prerequisites, selection structure, or fitness numbers for the Regular SBS are published on the official pages opened. This entry prints that posture as its finding.",
      ],
      pipeline: [
        { name: "Training pipeline: NONE PUBLISHED", detail: "No selection or training pipeline for the Regular SBS is published on the official pages opened, and this entry prints none." },
      ],
      flags: [
        "DELIBERATELY SILENT, BY THE MoD'S OWN PUBLICATION POSTURE — the same GOV.UK publication rules summarized on the 22 SAS (Regular) card apply across UKSF.",
      ],
      sources: [
        { label: "gov.uk — Directorate of Special Forces", url: "https://www.gov.uk/government/groups/directorate-of-special-forces" },
      ],
      source: "gov.uk — Directorate of Special Forces",
    },
    {
      id: "uk-sas-res",
      name: "21 & 23 Special Air Service — SAS (Reserve)",
      summary:
        "SAS (Reserve) 21 & 23 — PARTIAL: who-can-apply published verbatim (NO previous military service needed, via Army Reserve sponsorship; age caps 47 years 6 months applying / 48 years 364 days ex-regular at Aptitude), named phases (Briefing Course 6 days, Aptitude 3 weeks, SOPTAC, Stage 4 5 weeks incl. SERE named only), and NO fitness numbers — none published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — who-can-apply and named phase structure published; no fitness numbers published",
      what: "The Reserve SAS regiments — 21 and 23 SAS — within UK Special Forces (Reserve).",
      who: "Verbatim: “21 and 23 SAS processes applications from male and female applicants, with no previous military service. Applicants must be no older than 47 years 6 months when applying to join the Army Reserve (AR). They will then be sponsored out to their recommended local AR unit to complete basic initial trade training, then gain experience before being allowed to attempt SAS Reserves Selection.” “Ex Regular and AR applicants must be no older than 48 years 364 days on commencement of the Aptitude phase of SAS(R) Selection.” “Applicants must be able to commit to intense and extended training demands, be willing to deploy overseas and commit to operations.” Support Staff (not Selection): applicants aged 18 to 51 years and 364 days, Security Clearance in place, Class 2 minimum trade qualifications; “We do not accept Direct Entrants into the support roles.”",
      quals: [
        "Entry fitness / numeric standards: none published on this page — marches are described qualitatively only. ⚠ NOT PUBLISHED. No fitness numbers are printed here because none are published.",
      ],
      pipelineIntro: "Selection structure, BY NAME as published (phase names and durations only; SERE appears because the official page names it, with nothing about its content):",
      pipeline: [
        { name: "Briefing Course", detail: "An arduous six-day assessment phase that briefs on the qualities and standards required for service within UKSF and conducts an initial assessment of candidates' suitability." },
        { name: "Aptitude Phase", detail: "Conducted over a three-week continuous period — a series of progressive marches against the clock, culminating with a testing endurance march over arduous terrain." },
        { name: "Consolidated training / SOPTAC, then Special Operations Procedures & Tactics - 2", detail: "As the page names them, in order." },
        { name: "Stage 4", detail: "A five-week touch point for all selection pathways. It includes Surveillance Reconnaissance, Signals and SERE (Survive, Evade, Resist, Escape) — named only." },
        { name: "Mandatory Training", detail: "Including Tactical Combat Casualty Care (TCCC), Signals, Partner Resistance Operations (PRO) / Discrete Manoeuvre 1 (DM) and Close Quarter Marksmanship (CQM) / Close Quarter Battle (CQB) — named only." },
      ],
      flags: [
        "CONTRAST, AS PUBLISHED: SAS(R) accepts applicants with NO previous military service (via Army Reserve sponsorship); SBS(R) requires previous military service. The contrast prints because both official pages state it.",
      ],
      sources: [
        { label: "army.mod.uk — 21 & 23 SAS (Reserve)", url: "https://www.army.mod.uk/learn-and-explore/about-the-army/corps-regiments-and-units/uk-special-forces-reserve/21-23-special-air-service-sas/" },
      ],
      source: "army.mod.uk — 21 & 23 SAS (Reserve) page",
    },
    {
      id: "uk-sbs-res",
      name: "Special Boat Service Reserve — SBS(R)",
      summary:
        "SBS(R) — PARTIAL: previous military service REQUIRED (the contrast with SAS(R), printed), age cap 42 years 6 months at Aptitude, named Briefing Course (6 days) and Stages 1–6 headings, and NO fitness numbers — none published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — who-can-apply and named Briefing Course published; no fitness numbers published",
      what: "Verbatim framing: “An integrated part of the Special Boat Service within United Kingdom Special Forces (UKSF) Group.”",
      who: "Verbatim in substance: “SBS(R) processes applications from male and female applicants, with previous military (regular and reserve) service. Applicants must be no older than 42 years 6 months on commencement of the Aptitude phase of SBS(R) Selection.” Plus the same commitment/deployment wording as SAS(R).",
      quals: [
        "Entry fitness / numeric standards: none published on this page. ⚠ NOT PUBLISHED. No fitness numbers are printed here because none are published.",
      ],
      pipelineIntro: "Selection structure, BY NAME as published:",
      pipeline: [
        { name: "Briefing Course (BC)", detail: "An arduous 6-day assessment phase that briefs on the qualities and standards required for service within UKSF and conducts an initial assessment of candidates' suitability for continued progression on to one of the selection pathways." },
        { name: "Stages 1–6", detail: "Listed as headings on the page; no further detail was in the opened text." },
      ],
      flags: [
        "CONTRAST, AS PUBLISHED: SBS(R) requires previous military service; SAS(R) accepts applicants with no previous military service (via Army Reserve sponsorship). Both pages state it; the contrast prints.",
      ],
      sources: [
        { label: "royalnavy.mod.uk — SBS Reserve", url: "https://www.royalnavy.mod.uk/organisation/units-and-squadrons/special-boat-service/special-boat-service/special-boat-service-reserve" },
      ],
      source: "royalnavy.mod.uk — SBS Reserve page",
    },
  ],
};

/* --------------------------------- DENMARK --------------------------------- */

const DENMARK: AlliedCountry = {
  key: "denmark",
  label: "Denmark",
  tileSub: "Jægerkorpset (dated standards) · Frømandskorpset · Sirius Patrol",
  intro:
    "Official pages in Danish; figures transcribed, prose summarized. ⚠ Current-state finding: a site search of karriere.forsvaret.dk (Nov 9, 2026) for the operator-recruiting terms returned NO live Jægerkorpset/Frømandskorpset operator-requirements page, and none was located on the official domains in this pass — stated plainly on the entries below. The Danish operator numbers therefore come from dated official Forsvaret publications, flagged ⚠ DATED, and are not presented as a current live recruiting page.",
  entries: [
    {
      id: "dk-jaeger",
      name: "Jægerkorpset",
      summary:
        "Jægerkorpset — PARTIAL, dated official sources only. Patruljekursus fact-box standards from an official 2020 article (run 2900 m/12 min, split squat 3×15/20 kg, dips 3×5, pull-ups 3×5, burpees 35/2 min, swim 1000 m breaststroke/25 min, beach march 30 km/6:00) carry the ⚠ DATED label; the 2018 civilian-entry opening prints as dated with current status unstated; PTRDEL conscript figures are max-tests with no pass marks.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — dated official sources only; no live operator-requirements page located",
      langLabel: "Official page in Danish; figures transcribed, prose summarized.",
      what: "Official (2026 Forsvaret news article): “Jægerkorpset er Forsvarets landmilitære specialoperationsstyrke, som med kort varsel kan indsættes i operationer både nationalt og internationalt” — the Danish Armed Forces' land military special operations force, deployable at short notice nationally and internationally. (forsvaret.dk)",
      who: "The official record shows a change over time; both points print: (a) Historically, Jægerkorpset recruited only serving personnel with substantial experience. (b) In 2018, Forsvaret announced a new joint special-operations education that opened Jægerkorpset to applicants without a military background for the first time. Whether the civilian route is still open is not stated on any current official page located — treat as unverified today. No live operator-requirements page was located on karriere.forsvaret.dk as of the pack's Nov 9, 2026 check — stated plainly.",
      quals: [
        "Published course standards — Patruljekursus (the gateway course run by Jægerkorpset), fact box in an official Forsvaret article published 2020-07-12, exactly as printed — ⚠ DATED (table below).",
        "Current conscript route (official karriere.forsvaret.dk PDF — Jægerkorpset Patrol Platoon / PTRDEL): physical selection events are listed mostly as maximum tests with NO numeric pass marks printed — Cooper's test 12 minutter (run); breaststroke 300 m; underwater swimming; dive from a 3m board; march 10 km (walk, not run); split squat 3 sæt af 15 gentagelser med 5 kg (the only weighted figure printed); dips, pull-ups and burpees (inden for 2 min) as max tests. The companion swimming guide states the benchmark in prose: “svømme minimum 300 meter på max 12 minutter.”",
      ],
      tables: [
        {
          caption: "Patruljekursus standards — fact box, official Forsvaret article published 2020-07-12, exactly as printed. ⚠ DATED — not a current live recruiting page",
          headers: ["Event", "Published standard (2020)"],
          rows: [
            ["Løb (run)", "2900M/12 min"],
            ["Split squat", "3x15 rep/20 kg"],
            ["Dips", "3x5 rep"],
            ["Pull-ups", "3x5 rep"],
            ["Burpees", "35 rep/ 02 min"],
            ["Svømning (swimming)", "1000m bryst/25 min"],
            ["March på strand (beach march)", "30 km/06:00:00 timer"],
          ],
        },
      ],
      pipelineIntro: "The 2018 model's published structure (⚠ DATED — current status unstated):",
      pipeline: [
        { name: "Seks ugers basismodul (6-week basic module)", detail: "Frederikshavn, under the 2018 joint special-operations education model." },
        { name: "Grunduddannelsen, 35 uger", detail: "In three phases (corps module, joint module, final specialisation), under the 2018 model." },
      ],
      flags: [
        "F-3 — ⚠ DATED: the Patruljekursus standards above are from an official 2020 fact box; the 2018 joint-education announcement is the source for civilian entry, whose current status is unstated on any live page located. A build-time re-check of karriere.forsvaret.dk is required before treating any of this as current. No live operator-requirements page was located on karriere.forsvaret.dk as of Nov 9, 2026.",
      ],
      sources: [
        { label: "forsvaret.dk — Første kvinde består Patruljekursus (2020)", url: "https://www.forsvaret.dk/da/nyheder/2020/forste-kvinde-bestar-patruljekursus/" },
        { label: "forsvaret.dk — Ny specialoperationsuddannelse (2018)", url: "https://www.forsvaret.dk/da/nyheder/2018/alle-kan-soge-ind-pa-ny-specialoperationsuddannelse/" },
        { label: "karriere.forsvaret.dk — PTRDEL training guide (PDF)", url: "https://karriere.forsvaret.dk/globalassets/varnepligt/uddannelser/traningsvejledning-vpl-patruljedelingen.pdf" },
      ],
      source: "forsvaret.dk — 2020 Patruljekursus article (⚠ DATED); karriere.forsvaret.dk PTRDEL guide",
    },
    {
      id: "dk-froemand",
      name: "Frømandskorpset (naval)",
      summary:
        "Frømandskorpset — PARTIAL / DELIBERATELY SILENT on current standards: the maritime special operations corps; no current standards published — stated plainly. Entry fitness events / numeric minimums: none published on any official page opened.",
      level: "PARTIAL",
      levelLabel: "PARTIAL / DELIBERATELY SILENT on current standards — none published",
      langLabel: "Official page in Danish; figures transcribed, prose summarized.",
      what: "The maritime special operations corps — counterpart to Jægerkorpset's land specialisation; training phases at Marinestation Kongsøre, with Jægerkorpset phases at Aalborg (official 2018/2019 Forsvaret articles).",
      who: "The 2018 joint-education announcement covers Frømandskorpset together with Jægerkorpset (civilian entry opened under that model; aspirants had long been admitted to Frømandskorpset without a military background — a much older official article, 2007, likewise said applicants could come “direkte ind fra gaden uden forudgående værnepligt” — ⚠ DATED). Current status is unstated on any live page located; no live operator-requirements page was located on karriere.forsvaret.dk as of the pack's Nov 9, 2026 check.",
      quals: [
        "Entry fitness events / numeric minimums: none published on any official page opened in this pass. ⚠ NOT PUBLISHED — no current standards published, stated plainly.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-3 — ⚠ DATED: the civilian-entry posture rests on the 2018 announcement (and a 2007 article for the older posture). Current requirements are not published on any official page opened.",
      ],
      sources: [
        { label: "forsvaret.dk — Ny specialoperationsuddannelse (2018)", url: "https://www.forsvaret.dk/da/nyheder/2018/alle-kan-soge-ind-pa-ny-specialoperationsuddannelse/" },
      ],
      source: "forsvaret.dk — 2018 joint SOF education announcement (⚠ DATED)",
    },
    {
      id: "dk-sirius",
      name: "Slædepatruljen Sirius (Sirius Dog Sled Patrol) — name level",
      summary:
        "Sirius Patrol — name-level card: patrols northern/eastern Greenland; a 26-month (26 måneder) posting is referenced on the official landing page. No requirements published at opened level — no admission-requirements list, no age limits, no fitness numbers.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — name level; no requirements published at opened level",
      langLabel: "Official page in Danish; figures transcribed, prose summarized.",
      what: "Patrols northern/eastern Greenland — monitors and enforces Denmark's sovereignty in north-east Greenland, acts as police authority controlling expeditions, and protects the national park; patrols by dog sled, boat, aircraft and on foot, in pairs (current official karriere page, summarized). A 26 måneder (26-month) posting is referenced on the official landing page.",
      who: "Not published at opened level: the current official education page was opened, but its fetched text publishes no admission-requirements list, no age limits and no fitness numbers (the landing page references adgangskrav og ansøgning behind a further link).",
      quals: [
        "⚠ NOT PUBLISHED (at opened level): no admission-requirements list, no age limits, and no fitness numbers on the pages opened.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "karriere.forsvaret.dk — Slædepatruljen Sirius", url: "https://karriere.forsvaret.dk/uddannelse/varnsfalles/siriuspatruljen/sladepatruljen-sirius/" },
        { label: "karriere.forsvaret.dk — Sirius patruljefører", url: "https://karriere.forsvaret.dk/uddannelse/vaernsfaelles/sirius-patruljefoerer/" },
      ],
      source: "karriere.forsvaret.dk — Sirius pages",
    },
  ],
};

/* ---------------------------------- FRANCE --------------------------------- */

const FRANCE: AlliedCountry = {
  key: "france",
  label: "France",
  tileSub: "COS · 13e RDP · 1er RPIMa · CPA 10 · Commandos Marine — zero published numbers",
  intro:
    "Official pages in French; figures transcribed, prose summarized. Overall finding for France: NO age limits and NO numeric fitness standards are published on any French official page opened — for any French entry in this section. That silence is the finding, printed where each card's shape calls for standards; nothing has been filled in from secondary sources.",
  entries: [
    {
      id: "fr-cos",
      name: "Commandement des opérations spéciales (COS) — name level",
      summary:
        "COS — name-level context: created 24 juin 1992; it anticipates, plans, coordinates and conducts special operations, federating the three services' special-forces capabilities. The Army component is named (1er RPIMa, 13e RDP, 4e RHFS, plus CCTFS, GAOS, Centre d'entraînement Arès).",
      level: "PARTIAL",
      levelLabel: "NAME LEVEL — command context only",
      langLabel: "Official page in French; figures transcribed, prose summarized.",
      what: "Created 24 juin 1992; mission as published: “anticiper, de planifier, de coordonner et de conduire les opérations spéciales” — it federates the special-forces capabilities of the three services and the health service. The same official page names the Army component (Commandement des forces spéciales Terre): 1er régiment parachutiste d'infanterie de Marine, 13e régiment de dragons parachutistes, 4e régiment d'hélicoptères des forces spéciales, plus CCTFS, GAOS and Centre d'entraînement Arès.",
      who: "Not an entry point itself — COS is the joint special operations command. Entry routes are the component units' (below).",
      quals: [
        "No fitness number or age limit is published for COS — none is published for any French entry in this section. ⚠ NOT PUBLISHED",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "defense.gouv.fr — Commandement des opérations spéciales", url: "https://www.defense.gouv.fr/en/node/4663" },
      ],
      source: "defense.gouv.fr — COS page",
    },
    {
      id: "fr-13rdp",
      name: "13e régiment de dragons parachutistes (13e RDP)",
      summary:
        "13e RDP — PARTIAL: volunteer, all categories (civilians via CIRFA, serving via BRH); initial training 11 weeks + 17 weeks specialty + 2 weeks parachute, as published. No fitness numbers, no age limits published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — open volunteering published; no fitness numbers or age limits published",
      langLabel: "Official page in French; figures transcribed, prose summarized.",
      what: "An interarmes special-forces regiment specialising in intelligence gathering by human means on any theatre, in peace, crisis or war; employment reports to CEMA, by delegation DRM and/or COS.",
      who: "Recruiting “concerne toutes les catégories de militaires. Il est fondé sur le volontariat et est ouvert à tous.” Civilians apply via their nearest CIRFA; serving personnel via their unit BRH (which holds the annual DRHAT special-forces recruiting directive).",
      quals: [
        "No fitness numbers, no age limits published. ⚠ NOT PUBLISHED — no French entry in this section carries any fitness number or age limit, because none is published; that silence is the finding.",
      ],
      pipelineIntro: "Published training structure (initial), by name/duration only:",
      pipeline: [
        { name: "Formation générale initiale", detail: "11 semaines." },
        { name: "Formation de spécialité initiale", detail: "17 semaines." },
        { name: "Parachute adaptation", detail: "2 semaines." },
      ],
      flags: [],
      sources: [
        { label: "defense.gouv.fr — 13e régiment de dragons parachutistes", url: "https://www.defense.gouv.fr/terre/unites-larmee-terre/nos-regiments/13e-regiment-dragons-parachutistes" },
      ],
      source: "defense.gouv.fr — 13e RDP page",
    },
    {
      id: "fr-1rpima",
      name: "1er régiment de parachutistes d'infanterie de marine (1er RPIMa)",
      summary:
        "1er RPIMa — PARTIAL / DELIBERATELY SILENT on standards: rigorous selection, no numbers. The sengager.fr “Combattant forces spéciales” trade route exists (9-week CFIM, then Souge/Bayonne) with no fitness standards stated on that listing either.",
      level: "PARTIAL",
      levelLabel: "PARTIAL / DELIBERATELY SILENT on standards — rigorous selection, no numbers published",
      langLabel: "Official page in French; figures transcribed, prose summarized.",
      what: "A permanent-alert interarmes unit, published as a centre of excellence in counter-terrorism, arming the national emergency echelon for hostage-release operations in hostile zones; published effects include capture, neutralisation, destruction, extraction, and intelligence acquisition.",
      who: "Recruitment is “direct ou au sein des unités [de] l'armée de Terre” and subject to “une sélection rigoureuse” on intellectual, physical and psychological criteria. A direct civilian route exists at trade level: the Armée de Terre recruiting site (sengager.fr) lists “Combattant forces spéciales H/F” — sans diplôme, militaire du rang.",
      quals: [
        "No numbers, no age limits, no test events published. ⚠ NOT PUBLISHED — and no fitness standards are stated on the sengager.fr trade listing either. No French entry in this section carries any fitness number or age limit, because none is published.",
      ],
      pipelineIntro: "The sengager.fr trade route, by name/duration only:",
      pipeline: [
        { name: "CFIM initial training", detail: "9 semaines in CFIM, then specialised training at the 13e RDP (Souge) or the 1er RPIMa (Bayonne)." },
      ],
      flags: [],
      sources: [
        { label: "defense.gouv.fr — 1er RPIMa", url: "http://www.defense.gouv.fr/terre/unites-larmee-terre/nos-brigades/commandement-actions-speciales-terre/1er-regiment-parachutistes-dinfanterie" },
        { label: "sengager.fr — Combattant forces spéciales", url: "https://www.sengager.fr/emplois/forces-speciales/combattant-forces-speciales" },
      ],
      source: "defense.gouv.fr — 1er RPIMa; sengager.fr trade listing",
    },
    {
      id: "fr-cpa10",
      name: "Commando parachutiste de l'air n°10 (CPA 10)",
      summary:
        "CPA 10 — name level + Belouga sourcing note: one of BFSA's four special-forces units contributing to COS. The only published entry detail opened is the stage Belouga sourcing (protection squadrons, CPA 30, CPA 20, ab initio, other services). No age limits, no fitness numbers published.",
      level: "PARTIAL",
      levelLabel: "NAME LEVEL — DELIBERATELY SILENT on standards",
      langLabel: "Official page in French; figures transcribed, prose summarized.",
      what: "Named by the official Brigade des forces spéciales Air (BFSA) page as one of BFSA's four special-forces units contributing to COS (with CPA 30, ET 3/61 Poitou, EH 1/67 Pyrénées).",
      who: "The only published entry detail opened: an official Air article on the stage Belouga states CPA 10 candidates come from “escadrons de protection, commando parachutiste de l'air (CPA) n° 30, CPA 20, ab initio ou même d'autres armées” (21 started, 17 remained at the point reported).",
      quals: [
        "No age limits, no fitness numbers published. ⚠ NOT PUBLISHED — no French entry in this section carries any fitness number or age limit, because none is published.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "defense.gouv.fr — Forces spéciales (14 Juillet)", url: "https://www.defense.gouv.fr/unites-du-defile-du-14-juillet-2026/14-juillet-2026-troupes-mises-lhonneur/troupes-mises-lhonneur-forces-speciales" },
        { label: "defense.gouv.fr — CPA 10, stage Belouga", url: "https://www.defense.gouv.fr/air/actualites/cpa-10-stagiaires-du-belouga-milieu-desertique" },
      ],
      source: "defense.gouv.fr — BFSA / CPA 10 Belouga article",
    },
    {
      id: "fr-commandos-marine",
      name: "Commandos Marine / Commando Hubert",
      summary:
        "Commandos Marine — name level: seven operational units named (five assault — Jaubert, Trépel, de Montfort, de Penfentenyo, Hubert — and two support, Kieffer and Ponchardier); Hubert = underwater actions; the ECOFUS stage commando is the named selection gate. No fitness numbers, age limits or test events published.",
      level: "PARTIAL",
      levelLabel: "NAME LEVEL — DELIBERATELY SILENT on standards",
      langLabel: "Official page in French; figures transcribed, prose summarized.",
      what: "Official FORFUSCO page, verbatim in substance: “Les commandos Marine sont … les forces spéciales de la Marine nationale. Environ 700 marins arment sept unités opérationnelles, dont cinq d'assaut (Jaubert, Trépel, de Montfort, de Penfentenyo et Hubert) et deux d'appui aux opérations spéciales (Kieffer et Ponchardier).” Hubert's published specialisation: “les actions subaquatiques” (underwater actions). Commandos Marine serve COS, the Navy, or a designated operational controller.",
      who: "The only published selection structure opened: the École des fusiliers marins (ECOFUS, Lanester) “organise le fameux « stage commando », ayant vocation à sélectionner les futurs membres des forces spéciales de la Marine nationale” and selects/trains all fusiliers marins and commandos marine.",
      quals: [
        "No fitness numbers, age limits or test events published on the pages opened. ⚠ NOT PUBLISHED — no French entry in this section carries any fitness number or age limit, because none is published.",
      ],
      pipeline: [
        { name: "Stage commando (ECOFUS, Lanester)", detail: "The named selection gate for future members of the Navy's special forces, as the official page publishes it — named only, no course content." },
      ],
      flags: [],
      sources: [
        { label: "defense.gouv.fr — FORFUSCO", url: "https://www.defense.gouv.fr/marine/force-maritime-fusiliers-marins-commandos-forfusco-80-ans-dadaptation" },
        { label: "defense.gouv.fr — École des fusiliers marins", url: "https://www.defense.gouv.fr/unites-du-defile-du-14-juillet-2025/14-juillet-2025-troupes-pied/14-juillet-2025-ecole-fusiliers-marins" },
      ],
      source: "defense.gouv.fr — FORFUSCO; ECOFUS page",
    },
  ],
};

/* -------------------------------- AUSTRALIA -------------------------------- */

const AUSTRALIA: AlliedCountry = {
  key: "australia",
  label: "Australia",
  tileSub: "ONE combined Special Forces Operator entry — SASR + 1 Cdo + 2 Cdo",
  intro:
    "Official English pages verified. Structural finding (the key one): Australia does NOT publish separate recruiting pages for SASR, 2 Commando and 1 Commando. It publishes ONE combined role — Special Forces Operator — which feeds all three regiments. This section ships that one combined entry and does not split it into unit-specific standards, because none are published (pack exclusion, honored).",
  entries: [
    {
      id: "au-sf-operator",
      name: "Special Forces Operator — SASR + 1st & 2nd Commando Regiments (combined)",
      summary:
        "Special Forces Operator (combined) — OPEN RECRUITING incl. civilians via SFDRS. Published requirements (citizenship, apply 16.5 / join 17 / max 56, Year 10 English + Maths, IMPS 4 years) and the entry PFA verbatim (sit-ups 60, push-ups 40, beep 10.1, heaves 6) as the enlistment gate. Named pipeline: 13-wk recruit, 16-wk infantry, 8-wk SFSPC, SFET, 21-day SFSC at Bindoon, Reinforcement Cycle. SFET/Selection numerics NOT PUBLISHED.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — the most open posture in this section, including civilians",
      what: "Unit names as the government names them (ADF Careers, verbatim list of postings after training): “1st Commando Regiment (1 Cdo Regt) in Sydney, NSW or Melbourne, Vic”; “2nd Commando Regiment (2 Cdo Regt) in Sydney, NSW”; “Special Air Service Regiment (SASR) in Perth, WA.” SOCOMD composition (Defence Ministers page, verbatim): “SASR is an integral part of the Australian Army's Special Operations Command, which also includes the 1st and 2nd Commando Regiments, Special Operations Engineer Regiment, Special Operations Logistic Squadron and the Defence Special Operations Training and Education Centre.” Mission summary for the combined role (ADF Careers): Special Forces Operators work across a broad spectrum of operations, including short-notice operations in Australia and overseas, special reconnaissance missions, offensive targeting and/or working with foreign partners. Employment after selection is in one of: Strike and Recovery, Special Reconnaissance or Special Warfare.",
      who: "ADF Careers, verbatim: “Anyone can apply. Special Forces are recruited externally via: direct entry through the Special Forces Direct Recruiting Scheme (SFDRS). Special Forces are also recruited internally from: all Corps within Army; other ADF Services (Navy and Air Force); permanent and part-time forces; Overseas lateral transfers.” Role header: “No experience required / General Entry: Non-technical.”",
      quals: [
        "Citizenship: “You must be an Australian citizen to serve in the ADF. However, Australian permanent residents may be eligible.”",
        "Age: “You can apply for a role in the ADF from 16.5 years of age and must be at least 17 to join. The maximum age to join is 56 years.”",
        "Education: “Completion of Year 10 (or equivalent) education required with passes in English and Maths.”",
        "Licence: “You don't need a driver's licence for this role but if you have one, it can't be suspended or cancelled.”",
        "Security: must obtain the appropriate level of security clearance via AGSVA.",
        "Period of service: Initial Minimum Period of Service (IMPS) of 4 years.",
        "Entry fitness — Special Forces Pre-Fitness Assessment (PFA), verbatim numbers, labeled as the enlistment gate — must pass BEFORE enlistment (table below). Page note, verbatim in substance: “The above PFA describes the minimum standard for enlistment as a potential Special Forces Operator candidate, however, a much higher level of physical fitness will be required to successfully complete the Special Forces Selection Course.”",
        "SFET / Selection Course numerics: NOT PUBLISHED — printed as such. SFET is described only as collecting physical and psychological data through aerobic, anaerobic and cognitive assessments.",
      ],
      tables: [
        {
          caption: "Special Forces Pre-Fitness Assessment (PFA) — verbatim, ADF Careers. The enlistment gate (must pass before enlistment)",
          headers: ["Event", "Published minimum"],
          rows: [
            ["Sit-ups", "60"],
            ["Push-ups", "40"],
            ["Beep assessment (shuttle run) score", "10.1"],
            ["Over-grasp heaves (pull-ups)", "6"],
          ],
        },
      ],
      pipelineIntro: "Selection/training structure, BY NAME as published (ADF Careers):",
      pipeline: [
        { name: "Army Recruit Course — 13 weeks", detail: "Kapooka (Wagga Wagga, NSW)." },
        { name: "Infantry Employment Training — 16 weeks", detail: "School of Infantry, Singleton, NSW." },
        { name: "Special Forces Selection Preparation Course (SFSPC) — 8 weeks", detail: "ADF School of Special Operations, Holsworthy, NSW." },
        { name: "Special Forces Entry Test (SFET)", detail: "Alongside wider-ADF applicants, prior to the Special Forces Panelling Board." },
        { name: "Special Forces Selection Course (SFSC) — 21 days", detail: "Bindoon Training Area, Perth, WA — assesses the published Special Forces 13 Common Attributes (leadership, judgement, trainability, teamwork, self-discipline, perseverance, initiative, adaptability, integrity, communication, emotional regulation, independence, humility)." },
        { name: "Special Forces Reinforcement Training Cycle", detail: "On selection." },
      ],
      flags: [
        "ONE COMBINED ENTRY, BY THE GOVERNMENT'S OWN STRUCTURE: no unit-specific (SASR-only vs Commando-only) selection or fitness standards are published on the official pages opened, and none are constructed here. Defence's news service reported the 2024 course run as the Special Forces Common Selection Course at Bindoon — about 250 candidates from across the ADF assessed for service as SF operators or SF integrators.",
      ],
      sources: [
        { label: "adfcareers.gov.au — Special Forces Operator", url: "https://www.adfcareers.gov.au/jobs/army/special-forces-operator?tab=role-details" },
        { label: "minister.defence.gov.au — SASR command-and-control reform (2021)", url: "https://www.minister.defence.gov.au/media-releases/2021-09-01/special-air-service-regiment-sasr-command-control-reform-0" },
        { label: "defence.gov.au — Combined Special Forces Selection Course (2024)", url: "https://www.defence.gov.au/news-events/news/2024-05-16/combined-special-forces-selection-course-first" },
      ],
      source: "adfcareers.gov.au — Special Forces Operator",
    },
  ],
};

/* ------------------------------- NEW ZEALAND ------------------------------- */

const NEW_ZEALAND: AlliedCountry = {
  key: "newzealand",
  label: "New Zealand",
  tileSub: "1 NZSAS Regt — civilian route advertised, no numbers",
  intro: "Official English pages verified on nzdf.mil.nz and defencecareers.mil.nz.",
  entries: [
    {
      id: "nz-nzsas",
      name: "1st New Zealand Special Air Service Regiment (1 NZSAS Regt)",
      summary:
        "1 NZSAS Regt — PARTIAL: official mission and four roles published; civilian route openly advertised (trade specialisation; selection usually once a year; unsuccessful candidates continue to their other trade). NO published numbers — age/education/fitness NOT PUBLISHED, printed as such.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — civilian route openly advertised, details not published",
      what: "Official mission (NZDF structure page, verbatim): “1 NZSAS Regt conducts strategic and tactical intelligence gathering, limited offensive operations, recovery operations, and counter-terrorist operations beyond the range or capability of conventional Army units.” Parent command: the Special Operations Component Command manages New Zealand's Special Operations Forces (NZSOF). Four main roles (Defence Careers, verbatim in substance): (1) Surveillance and Reconnaissance; (2) Combating Terrorism — respond to a terrorist situation in support of the NZ Police at the request of the New Zealand Government; (3) Direct Action — short-duration strikes to recover designated personnel and material; (4) Support and Influence — organise, train and advise host nation forces, plus assistance to other NZ government agencies. Motto on the trade page: “'Who Dares Wins' is the motto of the NZSAS.”",
      who: "Defence Careers, verbatim: “Traditionally only military personnel from either the regular or reserve component of the NZ Defence Force have been able to join the NZSAS. However, entry is now open to civilian applicants as NZSAS has become an official trade specialisation with the NZ Army.” Selected candidates are invited to a presentation, and from there may go on to NZSAS selection; those who do not go further can pursue their other trade option (as identified in their original application) and continue a career with the NZ Army. “NZSAS selection usually takes place once a year.”",
      quals: [
        "Published requirements / fitness numbers: NONE on the NZSAS trade page as opened — it says only that candidates must meet the minimum entry requirements for the role and be physically fit with a high level of motivation, and prints no age, education, service-prerequisite, or fitness figures. Age / education / fitness: NOT PUBLISHED — printed as such.",
      ],
      pipelineIntro: "At published level only: selection (usually once a year) → successful candidates go on to Army basic training (AARC) and the NZSAS training cycle; unsuccessful candidates continue to their other trade option.",
      pipeline: NO_PIPELINE,
      flags: [
        "NZDF's 70-years article (9 June 2025) likewise gives no selection numbers — only qualitative description. Its “Tier 1” wording is the article's own framing on an official NZDF page, not an official classification, and is not repeated here as one.",
      ],
      sources: [
        { label: "nzdf.mil.nz — Army structure", url: "https://www.nzdf.mil.nz/army/our-structure/" },
        { label: "defencecareers.mil.nz — NZSAS trade", url: "https://www.defencecareers.mil.nz/army/careers/browse-roles/nzsas" },
        { label: "nzdf.mil.nz — 1 NZSAS Regt 70 years of service", url: "https://www.nzdf.mil.nz/media-centre/news/1-nzsas-regiment-70-years-of-service/" },
      ],
      source: "nzdf.mil.nz; defencecareers.mil.nz — NZSAS trade page",
    },
  ],
};

/* ---------------------------------- JAPAN ---------------------------------- */

const JAPAN: AlliedCountry = {
  key: "japan",
  label: "Japan",
  tileSub: "SFGp (entry silent) · SBU (founding law published, entry silent)",
  intro:
    "Official English pages exist for ministerial material; the SBU founding instrument is Japanese only, and the JMSDF organisation chart is bilingual. Existence framing — the finding for Japan: the SFGp was long unacknowledged in detail. What MOD's official pages currently state is recorded below at exactly that level — no more.",
  entries: [
    {
      id: "jp-sfgp",
      name: "Special Forces Group (SFGp) — JGSDF",
      summary:
        "SFGp (特殊作戦群) — DELIBERATELY SILENT on entry: the ministerial mission line as published Dec 2025 is the ceiling of current official disclosure. No unit page, no entry information published — no who-can-apply, no selection name, no fitness events, no numeric standards.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT on entry — no unit page, no entry information published",
      what: "Official name: Special Forces Group (EN) / 特殊作戦群 (JP). Official mission line (MOD English press conference, 26 Dec 2025, after a visit to Camp Narashino, verbatim): “The Special Forces Group is a specialized unit possessing high mobility and advanced close-combat capabilities in order to respond to attacks by guerrillas and special operations forces.” The unit is named again in the MOD (EN) press conference of 23 Jan 2026, and the JGSDF's own station page for Narashino (JP) lists 特殊作戦群 openly among the units stationed there, alongside the 1st Airborne Brigade.",
      who: "Not published. That ministerial naming is the ceiling of current official disclosure in the pages opened: no dedicated SFGp unit page, no published establishment history, no strength, no organisation table, and nothing on entry — no who-can-apply, no age/service prerequisites, no selection name, no fitness events, no numeric standards. JSDF recruiting on official pages is service-general; no SFGp-specific recruiting notice was located on mod.go.jp.",
      quals: [
        "⚠ NOT PUBLISHED: no entry information of any kind is published for the SFGp on the official pages opened. This entry prints that silence as its finding.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "mod.go.jp — Press conference, 26 Dec 2025 (EN)", url: "https://www.mod.go.jp:443/en/article/2025/12/556e54b51b4a005759746cb6e005af5704c9f6a9.html" },
        { label: "mod.go.jp — Press conference, 23 Jan 2026 (EN)", url: "https://www.mod.go.jp/en/article/2026/01/5461c71f79b002744949592c7fa507066f8ec42e.html" },
        { label: "mod.go.jp — Narashino station page (JP)", url: "https://www.mod.go.jp/gsdf/station/ea/narashino.html" },
      ],
      source: "mod.go.jp — EN press conferences Dec 2025 / Jan 2026",
    },
    {
      id: "jp-sbu",
      name: "Special Boarding Unit (SBU) — JMSDF",
      summary:
        "SBU (特別警備隊) — DELIBERATELY SILENT on entry, but its founding instruction is published in full: JMSDF Instruction No. 14 of 2001 — mission plus HQ / 4-platoon structure. No recruiting notice, eligibility, selection name, or fitness standard located.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT on entry — founding law published in full; entry silent",
      langLabel: "Official page in Japanese (founding instruction); English + Japanese (organisation chart; exercise announcement in English). No figures published.",
      what: "Official name: 特別警備隊 (JP) / Special Boarding Unit (EN, as printed in the JMSDF bilingual organisation chart). Mission, as published in law: JMSDF Instruction No. 14 of 26 Mar 2001 (海上自衛隊訓令第14号), Article 1 — the SBU's mission is (1) boarding inspection (立入検査) under SDF Law Art. 93(2) applying Japan Coast Guard Law Art. 17(1), limited to cases where the target vessel does not stop readily, or persons aboard are expected to be armed, so the task is accompanied by particular difficulty or danger; and (2) other matters ordered by the Minister of Defense. (Prose summarized from the Japanese legal text.) The same instruction publishes the structure: HQ + 4 platoons; commander is a Captain (1等海佐), under the Commander, Self Defense Fleet; in force from 27 Mar 2001. The JMSDF organisation chart lists “特別警備隊 — Special Boarding Unit” under the Self Defense Fleet, and a JMSDF English announcement (MALABAR 2023, 8 Aug 2023) lists the Special Boarding Unit as a participating unit.",
      who: "Not published. Note the contrast with the SFGp: the SBU's legal mission and establishment instrument are published in full in MOD's official instruction gazette — but no recruiting notice, eligibility, selection name, or fitness standard for the SBU was located on official JMSDF/MOD pages.",
      quals: [
        "⚠ NOT PUBLISHED: no entry standards of any kind are published for the SBU on the official pages opened.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "clearing.mod.go.jp — JMSDF Instruction No. 14 of 2001 (PDF)", url: "http://www.clearing.mod.go.jp/kunrei_data/a_fd/2000/ax20010326_00014_000.pdf" },
        { label: "mod.go.jp — JMSDF organisation chart (PDF)", url: "https://www.mod.go.jp/msdf/sf/about/img/soshiki.pdf" },
        { label: "mod.go.jp — MALABAR 2023 announcement (EN, PDF)", url: "https://www.mod.go.jp/msdf/en/release/202308/20230808en.pdf" },
      ],
      source: "JMSDF Instruction No. 14 of 2001 (MOD instruction gazette)",
    },
  ],
};

/* ---------------------------------- GREECE --------------------------------- */

const GREECE: AlliedCountry = {
  key: "greece",
  label: "Greece",
  tileSub: "DYK (mission published, entry silent) · Z' MAK / ETA (retrieval gap)",
  intro:
    "The one official page that opens cleanly is Greek-only; prose summarized, no figures published. English is thin, exactly as the Partner Forces pack found.",
  entries: [
    {
      id: "gr-dyk",
      name: "Διοίκηση Υποβρυχίων Καταστροφών (DYK) — Underwater Demolition Command",
      summary:
        "DYK (ΔΥΚ), Hellenic Navy — mission and full task list as published in Greek, summarized (school 1957; DYK since 2002); entry DELIBERATELY SILENT — no who-can-apply, no selection name, no entry fitness events or numbers on the opened official page.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT on recruiting — mission/tasks published, entry silent",
      langLabel: "Official page in Greek; figures transcribed, prose summarized.",
      what: "Official name as printed: Διοίκηση Υποβρυχίων Καταστροφών (ΔΥΚ). Mission (official page, summarized): to organise, train, maintain, provide security for and keep at readiness its operational teams and support means, to ensure the ability to undertake tasks in peace and war deriving from the mission of Fleet Headquarters and in accordance with current operational planning. The page states DYK is today the pre-eminent Naval Special Operations Command (SOMTG) of the Greek Armed Forces. Tasks as printed (headings): the full spectrum of special operations, including Special Reconnaissance (SR), Direct Action (DA), Military Assistance (MA); plus Unconventional Warfare; Very Shallow Water mine countermeasures (VSW); EOD disposal in Greek maritime territory and naval installations; Personnel Recovery; CSAR; Maritime Interdiction Operations / VBSS (MIO/VBSS); a submarine-rescue rapid-intervention team (SPAG); Non-Combatant Evacuation Operations. History numerals as printed: school founded 1957; reorganised/renamed 1958, 1959 (ΜΥΚ); upgraded to DYK in 2002.",
      who: "Not published. The opened official page publishes emblem, history, mission, tasks, organisation and vessels, and no who-can-apply, no age/service prerequisites, no selection name, and no entry fitness events or numbers.",
      quals: [
        "⚠ NOT PUBLISHED: no entry standards of any kind on the opened official page. This entry prints that silence as its finding.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "hellenicnavy.gr — Διοίκηση Υποβρυχίων Καταστροφών (DYK)", url: "https://hellenicnavy.gr/archigeio-stoloy-as/dioikisi-ypovrychion-katastrofon/" },
      ],
      source: "hellenicnavy.gr — DYK page (Greek)",
    },
    {
      id: "gr-zmak-eta",
      name: "Ζ' Μοίρα Αμφίβιων Καταδρομών (Z' MAK) / Ειδικό Τμήμα Αλεξιπτωτιστών (ETA) — retrieval gap",
      summary:
        "Z' MAK / ETA, Hellenic Army — RETRIEVAL GAP card (F-11): no army.gr / mod.mil.gr unit page was successfully opened, so NO facts are claimed for these units — no mission, no entry route, no figures. A live-browser pass on army.gr is the recorded follow-up.",
      level: "GAP",
      levelLabel: "⚠ RETRIEVAL GAP — no verdict possible from opened official pages (F-11)",
      langLabel: "Official pages in Greek — none successfully opened.",
      what: "No facts are claimed. No army.gr / mod.mil.gr unit page for Z' MAK or ETA was successfully opened in the research pass, so nothing about these units' mission, organisation, or history is printed here — and nothing from secondary summaries of these units is printed either.",
      who: "No facts are claimed. No entry route, eligibility, or selection information was retrieved from an opened official page.",
      quals: [
        "⚠ NOT VERIFIED — retrieval gap: no standards were retrieved, so none are printed. This card exists so the gap is visible rather than silently filled.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-11 — ⚠ NOT VERIFIED (retrieval gap): located by search only — an army.gr news item and an army.gr history PDF, both as cited by third parties; neither was opened, so no facts are taken from them. A live-browser pass on army.gr is the recorded follow-up. The follow-up was NOT executed in this build pass, so this card ships exactly at the pack's flagged level.",
      ],
      sources: [],
      source: "No official page opened — retrieval gap (F-11)",
    },
  ],
};

/* ------------------------------- NETHERLANDS ------------------------------- */

const NETHERLANDS: AlliedCountry = {
  key: "netherlands",
  label: "Netherlands",
  tileSub: "KCT (structure + verified vacancy + one dated standard) · NLMARSOF (serving Marines only)",
  intro: "Official pages in Dutch; figures transcribed, prose summarized.",
  entries: [
    {
      id: "nl-kct",
      name: "Korps Commandotroepen (KCT)",
      summary:
        "KCT — PARTIAL: structure published (Kennismakingsdagen → Vooropleiding → ECO → VCO) and the CURRENT VACANCY REQUIREMENTS ARE VERIFIED (live vacancy read in full, Nov 9–10, 2026): application age band 19 yrs 6 mo – 28 yrs 11 mo and Vooropleiding participation age 20 — two distinct figures, both printed — VMBO through WO education, licence B, must be able to swim, vision “Visus A Minimum”, salary €3,200–€3,800/month. The Defensiekrant 2017 2800 m run in 12 min still ships with its ⚠ DATED 2017 label; canon re-check outstanding (F-7).",
      level: "PARTIAL",
      levelLabel: "PARTIAL — structure + verified vacancy requirements; 2017 standard ⚠ DATED; canon re-check outstanding (F-7)",
      langLabel: "Official page in Dutch; figures transcribed, prose summarized.",
      what: "The elite unit of the Royal Netherlands Army; special operations in areas not under own control, of strategic/operational importance. The three main tasks as named on the page: Special reconnaissance; Direct action; Military assistance. (defensie.nl, summarized)",
      who: "Widening, per the official magazine (Defensiekrant 2017 — ⚠ DATED): from September 2017, servicemen of all services, rank soldaat tot kapitein, could in principle become commando special operations (previously Army combat-arms only). Civilian candidates (burgerkandidaten) may attempt the route after first being taught basic military skills, while most recruiting is from other infantry units. Current vacancy (werkenbijdefensie.nl, “Korporaal Commando Speciale Operaties” — read in full Nov 9–10, 2026): no experience required; education VMBO through WO (in progress or completed); application age band 19 years 6 months – 28 years 11 months; driver's licence B required; must be able to swim; Dutch language proficiency; vision “Visus A Minimum”. The posting as published: Roosendaal, Engelbrecht van Nassaukazerne; 104 Commando Compagnie; salary €3,200–€3,800 gross per month, plus a €3,600/year bonus after completing the ECO.",
      quals: [
        "Vooropleiding participation age: 20 — as the live vacancy prints it. This is a SECOND, distinct age figure from the application age band (19 yrs 6 mo – 28 yrs 11 mo) in the Who section above; both print, as the vacancy prints them.",
        "The one numeric fitness standard published on an opened official page (Defensiekrant 2017 — ⚠ DATED, not confirmed current): “2800 meter hardlopen in 12 minuten” — 2800 metre run in 12 minutes, stated as a hard requirement at the start of training. It ships with its ⚠ DATED 2017 label.",
      ],
      pipelineIntro: "Selection structure, BY NAME as published:",
      pipeline: [
        { name: "Kennismakingsdagen", detail: "Introduction days, mandatory before applying." },
        { name: "Vooropleiding", detail: "Preparatory training." },
        { name: "Elementaire Commando Opleiding (ECO)", detail: "The defensie.nl historical-canon material states the ECO is the heaviest initial training in the Dutch armed forces and that passing it earns the green commando beret." },
        { name: "Voortgezette Commando Opleiding (VCO)", detail: "Advanced commando training, following the ECO." },
      ],
      flags: [
        "F-4 — ⚠ DATED (Netherlands): the 2800 m / 12 min standard and the all-services eligibility widening are from Defensiekrant 2017. Printed with their date, not as confirmed-current requirements.",
        "F-8 — RESOLVED Nov 9–10, 2026 (KCT vacancy): the live werkenbijdefensie.nl vacancy was read in full in a live browser; its requirements ship above, with BOTH age figures printed as the vacancy prints them (application band 19 yrs 6 mo – 28 yrs 11 mo; Vooropleiding participation age 20).",
        "F-7 — ⚠ NOT VERIFIED (KCT canon): one canon page could not be fetched in the research pass; the ECO/VCO structure above rests on the defensie.nl KCT unit page plus the opened 2017 Defensiekrant article and should be re-verified against the canon page. Canon re-check outstanding, flagged.",
      ],
      sources: [
        { label: "defensie.nl — Korps Commandotroepen", url: "https://www.defensie.nl/organisatie/landmacht/eenheden/kct" },
        { label: "magazines.defensie.nl — Defensiekrant 2017 (KCT opleiding)", url: "https://magazines.defensie.nl/defensiekrant/2017/16/01_kct-opleiding_162017" },
        { label: "werkenbijdefensie.nl — KCT vacancy (read in full, Nov 9–10, 2026)", url: "https://werkenbijdefensie.nl/vacatures/solliciteren/korporaal-commando-speciale-operaties-2025-e24463" },
      ],
      source: "defensie.nl — KCT unit page; werkenbijdefensie.nl — KCT vacancy (verified Nov 9–10, 2026); Defensiekrant 2017 (⚠ DATED)",
    },
    {
      id: "nl-marsof",
      name: "Netherlands Maritime Special Operations Force (NLMARSOF)",
      summary:
        "NLMARSOF — PARTIAL: serving Marines only; Aptitude after the 3-year work-up; 23-week operator training and the attrition remark printed as the 2017 magazine's, dated. No civilian route, no age limits, no numeric fitness standards published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL / DELIBERATELY SILENT on standards — serving Marines only",
      langLabel: "Official page in Dutch; figures transcribed, prose summarized.",
      what: "Name/structure as published (official magazine Alle Hens, 2023): Netherlands Maritime Special Operations Force, formed 8 juli 2013, integrating three Korps Mariniers specialisms — kikvorsmannen (1959), Mountain Leaders (1972) and Bijzondere Bijstandseenheid Mariniers (1973). Squadrons as published: Conventional (C)-Squadron (special operations abroad), Maritime Counter Terrorism (M)-Squadron (under operational direction of the police Dienst Speciale Interventies, DSI), Training (T)-Squadron, plus a Logistic Support Group. Mission (official magazine, 2017, summarized): “NLMARSOF treedt in binnen- en buitenland op bij grootschalige en complexe terreuracties. Zoals bomaanslagen, gijzelingen en vliegtuigkapingen” — acts at home and abroad in large-scale and complex terrorist actions such as bomb attacks, hostage-takings and aircraft hijackings.",
      who: "Serving Marines only (official magazine, 2017 — ⚠ DATED): “Mariniers die klaar zijn met de mariniersopleiding en het 3-jarig opwerktraject, kunnen zich opgeven voor de speciale MARSOF-selectie Aptitude” — Marines who have finished Marine training and the 3-year work-up track may sign up for the MARSOF selection Aptitude. No civilian route is published. A site search of werkenbijdefensie.nl for a MARSOF operator vacancy returned no results.",
      quals: [
        "No age limits and no numeric fitness standards are published on the official pages opened. ⚠ NOT PUBLISHED",
        "The operator training is stated in the 2017 magazine as 23 weken, with half of candidates dropping out in the preliminary phase — an official-magazine attrition remark, printed as the magazine's and dated 2017, not as a current standard. It is the only attrition remark in this section, and it prints attributed for that reason.",
      ],
      pipeline: [
        { name: "Mariniersopleiding + 3-jarig opwerktraject", detail: "Marine training, then the 3-year work-up track (2017 magazine)." },
        { name: "Aptitude (MARSOF selection)", detail: "The named selection, open to Marines who completed the work-up." },
        { name: "Operator training — 23 weken", detail: "As stated in the 2017 magazine (⚠ DATED)." },
      ],
      flags: [
        "F-4 — ⚠ DATED (Netherlands): NLMARSOF's Aptitude / 23-week / 3-year-work-up details are from official magazines 2017/2023. Printed with dates, attributed to the magazines.",
      ],
      sources: [
        { label: "magazines.defensie.nl — Alle Hens 2023 (10 jaar NLMARSOF)", url: "https://magazines.defensie.nl/allehens/2023/06/03_10-jaar-nlmarsof" },
        { label: "magazines.defensie.nl — Defensiekrant 2017 (Skywave mariniers)", url: "https://magazines.defensie.nl/defensiekrant/2017/11/skywave-mariniers" },
      ],
      source: "magazines.defensie.nl — Alle Hens 2023; Defensiekrant 2017",
    },
  ],
};

/* ---------------------------------- ITALY ---------------------------------- */

const ITALY: AlliedCountry = {
  key: "italy",
  label: "Italy",
  tileSub: "COMSUBIN/GOI (opened-page level) · Col Moschin · 17° Stormo · GIS (name level)",
  intro:
    "Official pages in Italian unless noted; figures transcribed, prose summarized. Italy overall: difesa.it (COFS) and Aeronautica publish existence, eligible categories, the named iter and total durations for Col Moschin and 17° Stormo. NONE of the Italian official pages opened publishes entry fitness numerals — the fitness tables circulating on non-official sites were not found on an opened official page and are excluded.",
  entries: [
    {
      id: "it-comsubin",
      name: "Comando Raggruppamento Subacquei e Incursori “Teseo Tesei” (COMSUBIN) / Gruppo Operativo Incursori (GOI)",
      summary:
        "COMSUBIN / GOI, Marina Militare — ships at opened-page level only (F-6): existence + GOS/GOI structure confirmed on an opened official page; dedicated course pages were not retrieved. No numbers are transcribed — requirements / fitness numbers: none published on the opened page, none invented.",
      level: "PARTIAL",
      levelLabel: "PARTIAL / SILENT on the page opened — course pages ⚠ NOT VERIFIED (F-6)",
      langLabel: "Official page in Italian (history page located); opened news item in English.",
      what: "What is confirmed on an opened official page: an opened Marina news item (in English) identifies the Gruppo Operativo Subacquei (GOS) as part of COMSUBIN and describes its specialists checking a ship's hull for explosive devices during a counter-piracy / counter-terrorism exercise. A difesa.it history page (located, ⚠ NOT VERIFIED — fetcher rate-limit) states in its search-visible text that COMSUBIN was constituted 15 February 1960 and is divided into Gruppo Operativo Incursori (special operations) and Gruppo Operativo Subacqueo, with counter-terrorism and ordnance-clearance tasks.",
      who: "Not on the page opened. Dedicated Marina recruiting/course pages exist by citation (“Diventa incursore”, “Il Corso”) but were NOT successfully opened in the research pass — ⚠ NOT VERIFIED — so no who-can-apply, selection structure by name, or entry fitness numbers are printed here.",
      quals: [
        "Requirements / fitness numbers: none published on the opened page. None invented. ⚠ NOT PUBLISHED (at opened level)",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-6 — ⚠ NOT VERIFIED (Italy COMSUBIN): fetch the Marina “Diventa incursore” / “Il Corso” pages and the difesa.it COMSUBIN history page — the GOI course structure may be publishable once actually opened. The follow-up was NOT executed in this build pass, so this entry ships at opened-page level only.",
      ],
      sources: [
        { label: "marina.difesa.it — Gulf of Guinea synergy (EN, opened)", url: "https://www.marina.difesa.it/EN/Conosciamoci/notizie/Pagine/20210608_Gulf_of_Guinea_synergy_between_the_Italian_Navy_and_national_companies_in_combating_piracy-.aspx" },
        { label: "difesa.it — COMSUBIN history (located, not opened)", url: "https://www.difesa.it/area-storica-html/pilloledistoria/le-forze-speciali-della-marina-militare-i-suoi-uomini-e-i-suoi-mezzi-breve-storia-di-un-glorioso-reparto/34868.html" },
      ],
      source: "marina.difesa.it — EN news item (opened); difesa.it history page located, not opened",
    },
    {
      id: "it-colmoschin",
      name: "9° Reggimento d'Assalto Paracadutisti “Col Moschin”",
      summary:
        "Col Moschin — PARTIAL at its verified level: named Iter Selettivo e Formativo per Operatori FS, eligible categories (Ufficiali, Sottufficiale, Graduati/Truppa), the “Incursore” brevetto, and the published total duration of circa due anni (~2 years). NO fitness numerals — none are published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — named iter + published duration; no fitness numerals published",
      langLabel: "Official page in Italian; figures transcribed, prose summarized.",
      what: "Difesa.it COFS unit page, summarized: “un reparto di Forze Speciali dell'Esercito, particolarmente specializzato nelle operazioni di liberazione di ostaggi e nelle ricognizioni strategiche” — an Army Special Forces regiment particularly specialised in hostage-release operations and strategic reconnaissance. Based in Livorno, framed in Comando Forze Speciali dell'Esercito (COMFOSE).",
      who: "Personnel in the categories Ufficiali, Sottufficiale e Graduati/Truppa access the regiment through the Iter Selettivo e Formativo per Operatori FS, at the end of which they obtain the brevetto di “Incursore”.",
      quals: [
        "The official page publishes no age limit, no service-years prerequisite numeral, and no entry fitness events or numeric standards. ⚠ NOT PUBLISHED — NO fitness numerals ship for this entry, because none are published.",
        "The only numeral the page publishes is the iter's total duration: “un lungo e difficile percorso della durata complessiva di circa due anni” (about two years).",
      ],
      pipeline: [
        { name: "Iter Selettivo e Formativo per Operatori FS", detail: "The named selective and formative iter — total duration circa due anni (about two years), as published — awarding the “Incursore” brevetto." },
      ],
      flags: [],
      sources: [
        { label: "difesa.it — 9° Rgt. d'Assalto Paracadutisti (COFS)", url: "https://www.difesa.it/smd/cofs/9-rgtd-assalto-paracadutisti/51007.html" },
      ],
      source: "difesa.it — Col Moschin COFS page",
    },
    {
      id: "it-17stormo",
      name: "17° Stormo Incursori — Aeronautica Militare",
      summary:
        "17° Stormo Incursori — PARTIAL at its verified level: ComOS-AM route, eligible categories, two qualifications (STOS / “Incursore”) with published durations of circa 10 and 14 mesi (~10 / ~14 months). NO fitness numerals — none are published.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — route, categories, two qualifications and durations published; no fitness numerals",
      langLabel: "Official page in Italian; figures transcribed, prose summarized.",
      what: "Engaged in all activities characterising Italian Special Forces, as a strategic force-multiplier for national Air Power in complex operational contexts alongside allies/partners/coalitions/NGOs (Aeronautica Reparti page, summarized).",
      who: "Personnel — Ufficiale, Sottufficiale, Graduato e Volontario di Truppa — aspiring to join the Comparto Operazioni Speciali dell'Aeronautica Militare (ComOS-AM) can obtain either the qualification “Operatore Supporto Tattico alle Operazioni Speciali” (STOS) or the brevetto di “Incursore”, at the end of a specific selective and formative iter, after which they are taken on strength at the 17° Stormo Incursori.",
      quals: [
        "No age/service numerals and no entry fitness events or numeric standards in the section retrieved. ⚠ NOT PUBLISHED — NO fitness numerals ship for this entry, because none are published.",
        "Published durations, exactly as printed: the iter lasts “circa rispettivamente 10 e 14 mesi” — about respectively 10 months (STOS) and 14 months (“Incursore”).",
      ],
      pipeline: [
        { name: "Selective and formative iter — STOS qualification", detail: "Duration circa 10 mesi (about 10 months), as published." },
        { name: "Selective and formative iter — “Incursore” brevetto", detail: "Duration circa 14 mesi (about 14 months), as published." },
      ],
      flags: [],
      sources: [
        { label: "aeronautica.difesa.it — Reparti (§17° Stormo Incursori)", url: "https://www.aeronautica.difesa.it/home/noi-siamo-l-am/organizzazione/reparti/" },
      ],
      source: "aeronautica.difesa.it — Reparti page (§17° Stormo)",
    },
    {
      id: "it-gis",
      name: "Gruppo di Intervento Speciale (GIS) — Carabinieri",
      summary:
        "GIS — NAME-LEVEL ONLY in this pass: no official carabinieri.it / difesa.it GIS unit page was successfully opened, so no mission, eligibility or fitness facts are claimed for GIS.",
      level: "NOT VERIFIED",
      levelLabel: "NAME-LEVEL ONLY — ⚠ NOT VERIFIED (no official unit page opened)",
      langLabel: "Official pages in Italian — none successfully opened for GIS.",
      what: "Name level only. Search results consistently list GIS alongside Col Moschin, GOI/COMSUBIN and 17° Stormo among the units under COFS competence on official difesa.it COFS pages, but that index page itself was not opened here, so no mission facts are claimed for GIS.",
      who: "Not claimed. No official GIS unit page was successfully opened, so no eligibility facts are printed.",
      quals: [
        "⚠ NOT VERIFIED: no fitness facts are claimed for GIS — none were retrieved from an opened official page.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "NAME-LEVEL ONLY: GIS ships at name level only, per the pack's flags register — no facts beyond the name and its COFS listing context are claimed.",
      ],
      sources: [],
      source: "No official GIS unit page opened — name level only",
    },
  ],
};

/* ---------------------------------- SPAIN ---------------------------------- */

const SPAIN: AlliedCountry = {
  key: "spain",
  label: "Spain",
  tileSub: "FGNE · MOE/GOEs — doctrinal level; recruiting deliberately silent",
  intro:
    "FGNE: official page in English (Armada news/unit-descriptor pages). MOE: official page under an /en/ URL with Spanish body text; prose summarized. No fitness figures published on opened pages. Spain overall: official Armada/Ejército pages opened confirm existence, composition and mission at doctrinal level only; neither service publishes entry fitness numerals on the unit pages opened.",
  entries: [
    {
      id: "es-fgne",
      name: "Fuerza de Guerra Naval Especial (FGNE) — Armada",
      summary:
        "FGNE — doctrinal mission/composition as published; recruiting DELIBERATELY SILENT on the opened official pages. No who-can-apply, age, selection name, or entry fitness events/numbers appear there — no figures ship.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT on recruiting, on opened pages",
      what: "Official name as printed: Fuerza de Guerra Naval Especial (FGNE) — “Special Naval Warfare Force (FGNE in its Spanish initials).” Mission (summarized from opened pages): Special Naval Warfare is defined as special operations conducted mainly in the maritime domain, in sea-land operations or in support of other naval operations. “The Special Naval Warfare Force (FGNE) is the fundamental unit of the Spanish Navy special naval warfare capability. The FGNE is qualified to carry out all the doctrinal tasks inherent of Special Operations.”",
      who: "Not published on the opened pages — both are operational news items with a boilerplate unit descriptor, carrying no who-can-apply, age, service prerequisite, or selection name.",
      quals: [
        "Requirements / fitness numbers: none published on opened pages. ⚠ NOT PUBLISHED (Any BOE / reclutamiento.defensa.gob.es course-call numerals would need a separate BOE fetch — none was opened, so none are invented.)",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "armada.defensa.gob.es — FGNE news/descriptor (2020, EN)", url: "https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/conocenosnoticias/prefLang-en/00noticias--2020--12--NT-126-BALEARIA-en?_selectedNodeID=4323102&_pageAction=selectItem&_pageNum=33&paramNo=000000" },
        { label: "armada.defensa.gob.es — FGNE news/descriptor (2019, EN)", url: "https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/conocenosnoticias/prefLang-en/00noticias--2019--11--NT-134-FGNE-INGLES-en?_pageAction=selectItem&_selectedNodeID=4233094" },
      ],
      source: "armada.defensa.gob.es — FGNE descriptor pages (EN)",
    },
    {
      id: "es-moe",
      name: "Mando de Operaciones Especiales (MOE) / Grupos de Operaciones Especiales (GOEs) — Ejército de Tierra",
      summary:
        "MOE / GOEs — composition and three mission types as published; recruiting DELIBERATELY SILENT on the opened official page (organisation and mission only). No eligibility, selection structure, or entry fitness standards printed there — no figures ship.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT on recruiting, on opened page",
      langLabel: "Official page under an /en/ URL with Spanish body text; prose summarized.",
      what: "Official name as printed: Mando de Operaciones Especiales (MOE). Composition as printed on the opened page: Cuartel General; Grupo de Cuartel General; Grupo de Operaciones Especiales “Valencia III”; Grupo de Operaciones especiales “Tercio de Ampurdan IV”; Bandera de Operaciones Especiales “Caballero Legionario Maderal Oleaga XIX”; Unidad Logística MOE. Mission types as printed (summarized): three basic types — (1) Acción directa (destruction of strategic objectives behind enemy lines, laser target designation, capture of personalities, hostage rescue, etc.); (2) Reconocimiento Especial (observation of strategic objectives behind enemy lines and transmission of information from the zone); (3) Asistencia Militar (training and support of allied units/personnel in foreign territory).",
      who: "Not published on the opened page — it publishes organisation and mission only. No applicant eligibility, age/service prerequisites, or selection structure are printed there.",
      quals: [
        "No entry fitness standards are printed on the opened page. ⚠ NOT PUBLISHED (A related official course fact was located but not directly opened — ⚠ NOT VERIFIED: Ejército search results for EMMOE, Jaca, describe a Curso de Operaciones Especiales of similar duration to the ~10-month Mountain Course. No fitness numbers are claimed from it, and none ship.)",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [
        { label: "ejercito.defensa.gob.es — MOE organisation (EN URL)", url: "https://ejercito.defensa.gob.es/en/unidades/Alicante/cg_moe/Organizacion/index.html" },
      ],
      source: "ejercito.defensa.gob.es — MOE organisation page",
    },
  ],
};

/* ---------------------------------- POLAND --------------------------------- */

const POLAND: AlliedCountry = {
  key: "poland",
  label: "Poland",
  tileSub: "GROM + AGAT verified · Formoza · JWK / NIL — ⚠ NOT VERIFIED",
  intro:
    "Verified Nov 9–10, 2026 in a live browser on the official *.wp.mil.pl sites (the anti-bot protection that blocked automated fetching in the research pass does not stop a live browser): GROM's recruitment rules and selection stages and AGAT's official fitness-criteria PDF ship as published below. Formoza and JWK/NIL were not re-read in this pass and stay exactly at their flagged level — named processes / located only, no figures.",
  entries: [
    {
      id: "pl-grom",
      name: "Jednostka Wojskowa GROM",
      summary:
        "GROM — VERIFIED (official site read in a live browser, Nov 9–10, 2026): who can apply — professional soldiers, candidate-service soldiers, territorial-service soldiers, or civilians 18+ with Polish citizenship, entering qualification BEFORE age 30 — the published conditions, and the three-stage selection: Stage I fitness exam (1 day; events named), Stage II SELEKCJA (3 days), Stage III interviews. Recruitment contact as published: 261 895 876 / grom@ron.mil.pl.",
      level: "OPEN",
      levelLabel: "VERIFIED — official recruitment rules + selection stages published (checked Nov 9–10, 2026)",
      langLabel: "Official pages in Polish; figures transcribed, prose summarized.",
      what: "Poland's premier special mission unit, named as its official site names it. Its recruitment-rules and selection pages were read in full in the Nov 9–10, 2026 live-browser verification — the anti-bot protection that blocked the research pass's automated fetch does not stop a live browser, so this entry replaces the earlier posture-only card.",
      who: "As published on the official recruitment page (grom.wp.mil.pl): candidates may be professional soldiers, candidate-service soldiers, territorial-service soldiers, or civilians aged 18+ with Polish citizenship. Conditions as published: Polish citizenship; no criminal record; physical and psychological fitness; at least secondary education; unblemished reputation. A candidate must enter the qualification process BEFORE turning 30 (the age limit prints as “do 30 lat”). Recruitment contact as published: 261 895 876 / grom@ron.mil.pl. The page links two official PDFs: the Stage I & II physical-exam training rules, and training material for the fitness exams.",
      quals: [
        "Stage I fitness examination events, as published (1 day): 3000 m run (8 laps of a 375 m track); 100 m combat swim with equipment; rope climbing; hand-walking; squats with 45 kg; combat-position push-ups; agility test. The events publish by name; per-event pass marks are not printed on the opened page, so none are claimed here.",
      ],
      pipelineIntro: "Selection structure, as published:",
      pipeline: [
        { name: "Stage I — fitness examination (1 day)", detail: "Warm-up, then the published events: 3000 m run, 100 m combat swim with equipment, rope climbing, hand-walking, squats with 45 kg, combat-position push-ups, agility test." },
        { name: "Stage II — SELEKCJA (3 days)", detail: "Orienteering runs — swamp terrain on days 1–2; a water reservoir and a water obstacle course on day 3; strength test on day 1." },
        { name: "Stage III — interviews", detail: "Interviews with the special-training instructor, the criminalistics instructor, a psychologist, and the commission." },
      ],
      flags: [
        "F-9 / F-10 — RESOLVED Nov 9–10, 2026 (Poland): the official GROM pages were read in a live browser; this entry supersedes the research pass's ⚠ NOT VERIFIED posture-only card.",
        "⚠ FIGURE WITHHELD: an infographic on the selection page prints a 16'19″ figure whose attribution is ambiguous in the page layout — it is not printed as a standard anywhere in this app.",
      ],
      sources: [
        { label: "grom.wp.mil.pl — Zasady rekrutacji (recruitment rules)", url: "https://grom.wp.mil.pl/pl/pages/zasady-rekrutacji/" },
        { label: "grom.wp.mil.pl — Selekcja (selection)", url: "https://grom.wp.mil.pl/pl/pages/selekcja/" },
      ],
      source: "grom.wp.mil.pl — recruitment rules + selection pages (verified Nov 9–10, 2026)",
    },
    {
      id: "pl-formoza",
      name: "Jednostka Wojskowa FORMOZA — naval",
      summary:
        "Formoza — ⚠ NOT VERIFIED: the naval unit's named processes ship — Selekcja Rozszerzona (Extended Selection, assault groups) and Selekcja Podstawowa (Basic Selection / Kwalifikacja, support). No fitness table was retrieved from the official site, so none ships.",
      level: "NOT VERIFIED",
      levelLabel: "⚠ NOT VERIFIED — named processes only; no figures ship (F-9/F-10)",
      langLabel: "Official page in Polish — located, not opened past protection.",
      what: "The Polish Navy's special forces unit, named as located on its official site. The site was located by search but not successfully opened past the *.wp.mil.pl protection, so no mission text is transcribed here.",
      who: "Named processes only, as unit notices advertise them: Selekcja Rozszerzona (Extended Selection, assault groups) and Selekcja Podstawowa (Basic Selection / Kwalifikacja, support), with dated application cycles. No eligibility figures were retrieved from the official site itself, so none ship.",
      quals: [
        "⚠ NOT VERIFIED — NO FIGURES SHIP: no fitness table was retrieved from the official site itself. The detailed water/land norms circulating on preparatory sites are excluded here.",
      ],
      pipeline: [
        { name: "Selekcja Rozszerzona (Extended Selection)", detail: "The named process for assault groups — named only; no structure was retrieved from an opened official page." },
        { name: "Selekcja Podstawowa (Basic Selection / Kwalifikacja)", detail: "The named process for support — named only." },
      ],
      flags: [
        "F-9 / F-10 — ⚠ NOT VERIFIED (Poland): transcribe Formoza's Selekcja documents from the official site in a live browser before any figure may print. NOT executed in this build pass.",
      ],
      sources: [],
      source: "formoza.wp.mil.pl — located, not opened past protection",
    },
    {
      id: "pl-agat",
      name: "Jednostka Wojskowa AGAT (Gliwice)",
      summary:
        "AGAT — VERIFIED fitness criteria (official criteria PDF, agat.wp.mil.pl, read Nov 9–10, 2026): Category I (combat/assault teams + combat support, men and women) — 5000 m run in UNDER 23 min; at least 12 pull-ups; at least 75 trunk bends (sit-ups) in 2 min; 100 m swim in UNDER 2 min. The swim figure CORRECTS the research pack's secondhand <3 min report. The four-stage process ships by name.",
      level: "PARTIAL",
      levelLabel: "VERIFIED criteria — official fitness-exam criteria published (PDF, checked Nov 9–10, 2026); process by name",
      langLabel: "Official PDF in Polish; figures transcribed exactly as printed, prose summarized.",
      what: "A Polish special forces unit based in Gliwice, named as its official site names it. The fitness criteria below are transcribed from AGAT's official criteria PDF, read in the Nov 9–10, 2026 live-browser verification.",
      who: "A four-stage process for assault teams ships by name, as official recruiting material summarizes it. The fitness criteria below are from AGAT's official criteria PDF (“Kryteria egzaminu sprawności fizycznej dla kandydatów do służby w JWA”, 23 pp.), Category I — combat/assault teams and combat support, men and women.",
      quals: [
        "5000 m run — UNDER 23 minutes (Category I).",
        "Pull-ups — at least 12 (Category I).",
        "Trunk bends (sit-ups) — at least 75 in 2 minutes (Category I).",
        "100 m swim — UNDER 2 minutes (Category I). ⚠ CORRECTION: the research pack's secondhand report said <3 min; the official PDF says <2 min, and <2 min is what ships.",
      ],
      pipelineIntro: "The four-stage process, by name as located:",
      pipeline: [
        { name: "Stage one — personal questionnaire + qualification interview", detail: "Named only." },
        { name: "Stage two — psychological testing + physical fitness assessment + English check", detail: "Named only; the fitness assessment's Category I minima are the verified criteria above." },
        { name: "Stage three — terrain selection", detail: "Named only." },
        { name: "Stage four — medical commission clearance", detail: "Named only." },
      ],
      flags: [
        "F-9 — RESOLVED Nov 9–10, 2026 (Poland): the criteria were transcribed from AGAT's official criteria PDF in the live-browser verification, superseding the withheld-minima card. The swim standard is CORRECTED to <2 min — the pack's secondhand <3 min report was wrong.",
      ],
      sources: [],
      source: "agat.wp.mil.pl — “Kryteria egzaminu sprawności fizycznej dla kandydatów do służby w JWA” (official criteria PDF, 23 pp.; verified Nov 9–10, 2026)",
    },
    {
      id: "pl-jwk-nil",
      name: "Jednostka Wojskowa Komandosów (JWK, Lubliniec) / Jednostka Wojskowa NIL (Kraków)",
      summary:
        "JWK / NIL — ⚠ NOT VERIFIED, located level: official sites located on *.wp.mil.pl, none opened past protection. No requirements or fitness numbers are claimed from any opened official page, so none ship.",
      level: "NOT VERIFIED",
      levelLabel: "⚠ NOT VERIFIED — located only; no figures claimed (F-9/F-10)",
      langLabel: "Official pages in Polish — located, not opened past protection.",
      what: "Two Polish special forces units, named as located: Jednostka Wojskowa Komandosów (JWK, Lubliniec) and Jednostka Wojskowa NIL (Kraków). Their official sites were located on *.wp.mil.pl — none was opened past protection, so no mission text is transcribed here.",
      who: "Located evidence shows JWK runs open social recruiting and AGAT/NIL advertise technical (drone/electronics) recruitment — but no requirements were retrieved from an opened official page, so none are claimed here.",
      quals: [
        "⚠ NOT VERIFIED — NO FIGURES CLAIMED: no requirements or fitness numbers are claimed from any opened official page, because none was opened.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-9 / F-10 — ⚠ NOT VERIFIED (Poland): transcribe the JWK/NIL recruiting pages from the official sites in a live browser. NOT executed in this build pass.",
        "POLAND OVERALL, AS THE PACK FINDS IT: by all located evidence the most open recruiting of its cluster — and, because *.wp.mil.pl blocks automated fetching, the country verified least directly. Every Polish entry in this tile ships at that flagged level, with no upgrades and nothing filled from secondary sources.",
      ],
      sources: [],
      source: "*.wp.mil.pl unit sites — located, not opened past protection",
    },
  ],
};

/* ---------------------------------- TÜRKIYE --------------------------------- */

const TURKIYE: AlliedCountry = {
  key: "turkiye",
  label: "Türkiye",
  tileSub: "SAT / ÖKK / MAK — ÖKK selection route published in regulation (F-12, corrected)",
  intro:
    "Türkiye ships at two levels: the units' public posture — no public unit/recruiting page exists on the MoD/TSK official sites, and that silence stands as a finding — AND, since the final-phase verification, the ÖKK selection route as published in law: the Officer/NCO Assignment Regulation, Article 50, as amended by the Apr 28, 2026 Resmî Gazete amendment (No. 33237). That verification also CORRECTED the research pack: direct contracted entry into ÖKK exists — see the entry.",
  entries: [
    {
      id: "tr-sat-okk-mak",
      name: "Su Altı Taarruz (SAT) / Özel Kuvvetler Komutanlığı (ÖKK) / Muharebe Arama Kurtarma (MAK)",
      summary:
        "SAT / ÖKK / MAK — official names ship; no public unit/recruiting page was located on the MoD/TSK official sites, and no fitness standards ship. ÖKK personnel selection IS published in law (Officer/NCO Assignment Regulation, Article 50, as amended Apr 28, 2026): voluntary-basis, sourced first from training-center commands and branch schools, otherwise preferentially from in-unit personnel with mountain-commando or parachute courses. ⚠ CORRECTED: an earlier research note claimed “no direct civilian entry” — that was WRONG; the same article expressly contemplates contracted officers/NCOs recruited directly into the TAF to serve directly in ÖKK.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — ÖKK selection route published in regulation (Art. 50, as amended 2026); no public unit page; no figures",
      langLabel: "Official regulation in Turkish; prose summarized. No official English page located for SAT/ÖKK/MAK.",
      what: "Official names (Turkish): Su Altı Taarruz (SAT), the Naval Forces' underwater offence unit; Özel Kuvvetler Komutanlığı (ÖKK), the Special Forces Command; Muharebe Arama Kurtarma (MAK). The units are officially real — they appear in official ceremonial/protocol contexts — but, unlike allies whose ministries run public unit pages, Türkiye's MoD/TSK official sites, as located, do not publish a public SAT/ÖKK/MAK unit page.",
      who: "ÖKK selection, as published in the Officer/NCO Assignment Regulation, Article 50 (as amended by the Apr 28, 2026 Resmî Gazete amendment, No. 33237): selection is on a voluntary basis (“gönüllülük esasına göre”), sourced first from training-center commands and branch schools, otherwise preferentially from in-unit personnel who completed mountain-commando or parachute courses. Assignees from support organizations are held out of assignment planning for at least 8 years unless ÖKK itself proposes them; technical-branch officers/NCOs (except branches ÖKK needs) are not selected for team posts. ⚠ CORRECTION: the same article expressly contemplates contracted officers and NCOs recruited directly into the Turkish Armed Forces to serve directly in ÖKK — so direct contracted entry EXISTS, and any earlier wording claiming “no direct civilian entry” was wrong and has been removed. For SAT/MAK and for any public recruiting surface: not published — official pages were located for msb.gov.tr, tsk.tr, dzkk.tsk.tr and personeltemin.msb.gov.tr, but no public SAT/ÖKK/MAK unit or recruiting page was located on them.",
      quals: [
        "Requirements / fitness numbers: none — no official page opened, none invented. ⚠ NOT PUBLISHED. The widely-circulated figures for these units (course lengths etc.) appear only in non-official sources and are excluded. Official English page: none located for SAT/ÖKK/MAK.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-12 — CORRECTED Nov 10, 2026: the regulation text (Officer/NCO Assignment Regulation, Article 50, as amended by Resmî Gazete No. 33237, Apr 28, 2026) was verified in the final phase. ÖKK selection is voluntary-basis and in-service-sourced as printed above — but the research pack's “no direct civilian entry” claim is NOT supported by the article and has been corrected everywhere it appeared: the article expressly contemplates contracted officers/NCOs recruited directly into the TAF to serve directly in ÖKK. No fitness figures ship either way.",
      ],
      sources: [],
      source: "Officer/NCO Assignment Regulation Art. 50, as amended (Resmî Gazete No. 33237, Apr 28, 2026) — verified Nov 9–10, 2026; no official unit page located",
    },
  ],
};

/* ------------------------------- SOUTH KOREA ------------------------------- */

const SOUTH_KOREA: AlliedCountry = {
  key: "southkorea",
  label: "South Korea",
  tileSub: "SWC 특전병 (open) · SWC NCO (verified 268기) · 707th (silent) · Navy UDT/SEAL (full tables)",
  intro:
    "Official recruiting authority used: 병무청 (MMA — Military Manpower Administration, mma.go.kr, the Republic of Korea's official e-government recruiting authority). All Korean pages below: official page in Korean; figures transcribed exactly as printed, prose summarized. No English equivalent of these recruiting tables was located. SWC has two distinct official entry routes — enlisted (특전병) and NCO (특전부사관) — and they are not conflated.",
  entries: [
    {
      id: "kr-swc-enlisted",
      name: "ROK Army Special Warfare Command (SWC) — Enlisted: 특전병 (MOS 112100)",
      summary:
        "SWC 특전병 — OPEN RECRUITING: eligibility (18–28, physical grades 1–2, corrected vision ≥0.8, published exclusions) and the 국민체력100 grade-points screen (1급 60 / 2급 50 / 3급 40 / 4급 30 / non-participation = excluded). The pre-Apr-2022 own-test was replaced by the certification — noted as published.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — published eligibility and grade-points screen",
      langLabel: "Official page in Korean; figures transcribed exactly as printed, prose summarized.",
      what: "Official mission line (as published): “전국 6개 지역대에 배치되어 특수작전 지원 임무를 수행한다” — assigned to regional detachments in 6 areas nationwide, performing special-operations support duties. This is Route 1 of two distinct SWC entry routes (enlisted 특전병; the NCO route is the separate entry below).",
      who: "As published on the opened MMA page: age 18세 이상 28세 이하 in the application year (for 2026: born 1998.1.1. ~ 2008.12.31.); physical grade 1급부터 2급까지 (grades 1–2), active-duty eligible; vision 교정시력 0.8 이상 (corrected vision 0.8 or above). Exclusions as published: disc/joint abnormalities, hearing/speech/motor/colour-vision disorders, claustrophobia (폐쇄공포증); criminal-record exclusions as listed on the page. Selection structure, by name as published: 1차 서류전형 (document screening, selects 3× the quota) → final selection by document score + practical (fitness) score. Scoring exactly as printed: 무도단증 (martial-arts dan certificate) 25 + 자격증 (certificates) 15 + 체력 (fitness) 60. The page also states SWC does not conduct an interview for this route from 2026 recruitment (면접평가 미실시).",
      quals: [
        "Entry fitness — an official CHANGE, as published: the SWC's own test was replaced (applicable from April 2022 recruitment) by the 국민체력100 (National Fitness 100) certification grade, issued by 국민체력인증센터. Items as listed: ① 근력: 상대악력 (relative grip strength) ② 근지구력: 교차윗몸일으키기 (cross sit-ups) ③ 심폐지구력 (choose 1): 20M 왕복 오래달리기 / treadmill·step test ④ 유연성: 앉아윗몸앞으로굽히기 (sit-and-reach) ⑤ 민첩성: 왕복달리기, 반응시간 ⑥ 순발력: 제자리멀리뛰기, 체공시간.",
        "Points by grade, exactly as printed: 1급 = 60, 2급 = 50, 3급 = 40, 4급 = 30, 미참여 (non-participation) = 선발제외 (excluded). (The 5급/6급 cells extracted blank on the opened page — no points value could be read for them, so none is reported.)",
      ],
      tables: [
        {
          caption: "국민체력100 grade → points, exactly as printed on mma.go.kr (SWC 특전병 screen)",
          headers: ["Certification grade", "Points"],
          rows: [
            ["1급", "60"],
            ["2급", "50"],
            ["3급", "40"],
            ["4급", "30"],
            ["미참여 (non-participation)", "선발제외 (excluded)"],
          ],
        },
      ],
      pipeline: [
        { name: "1차 서류전형 (document screening)", detail: "Selects 3× the quota, as published." },
        { name: "Final selection", detail: "By document score + practical (fitness) score — the fitness score is the 국민체력100 grade points above." },
      ],
      flags: [
        "OFFICIAL CHANGE, AS PUBLISHED: the former SWC own-test (1.5km run / push-ups / sit-ups) was replaced by the 국민체력100 certification from April 2022 recruitment. The replaced test is named here only to record the change; its standards are not shipped as current.",
      ],
      sources: [
        { label: "mma.go.kr — 특전병 (SWC enlisted)", url: "https://www.mma.go.kr/contents.do?mc=mma0000498" },
      ],
      source: "mma.go.kr — 특전병 page (Korean)",
    },
    {
      id: "kr-swc-nco",
      name: "ROK Army SWC — NCO: 특전부사관 (268기 cycle)",
      summary:
        "SWC 특전부사관 — VERIFIED (268기 announcement PDF read in full; MMA, posted 2026-10-16): eligibility — Korean nationality (dual nationals after renouncing the foreign nationality); high-school graduate or equivalent by commissioning, plus a national-technical-certificate route; commissioning age 18–29, extended for veterans' service — and selection scoring exactly as published (100 pts: job-performance 10 · interview 40 · fitness evaluation 40 · deliberation 10; medical + MMPI pass/fail). The announcement prints NO numeric fitness pass/fail minima — fitness is scored by count/time — and no quota figure is claimed.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — 268기 announcement verified in full (Nov 9–10, 2026)",
      langLabel: "Official announcement in Korean; figures transcribed exactly as printed, prose summarized.",
      what: "Route 2 of the two distinct SWC entry routes: the NCO cadre (특전부사관) — the professional cadre from which the brigades and the 707th Special Mission Group are manned.",
      who: "As published in the 268기 announcement (MMA board, “특전부사관 268기 모집공고”, author 특수전사령부 — Special Warfare Command, posted 2026-10-16): application period exactly as printed '26.10.12.(월) ~ 11.29.(일) / 7주; application method internet, via 특전부사관 지원센터, blackberets.swc.mil.kr; inquiries 042-550-5278~807 (the announcement PDF's header prints 1668-5841). Eligibility as published: Korean nationality (dual nationals eligible after renouncing the foreign nationality); education — high-school graduate (or equivalent) as of the commissioning date, with a route for middle-school graduates holding national technical certificates; age at commissioning 18–29 (birthdates Sep 1, 1997 – Sep 1, 2008), extended by veterans' service in +1-year brackets to a maximum of 32 for 2+ years' service. Active-duty NCOs, and Army/Air Force applicants, are ineligible (listed exceptions apply).",
      quals: [
        "Selection scoring, exactly as published (100 points): job-performance ability 10 · face-to-face interview 40 · physical fitness evaluation 40 · deliberation committee 10 · medical examination pass/fail · MMPI pass/fail · background check.",
        "Medical, as published: grade 2 or above required; minimum height/weight — men 161 cm / 48 kg, women 155 cm / 45 kg; unaided vision 0.6 or above in both eyes (LASIK / LASEK / lens implant eligible); colour-blind and colour-weak candidates, and lens wearers, FAIL the medical.",
        "Fitness evaluation events, as published (40 pts, 8 per event): men — push-ups, sit-ups, pull-ups, 240 m shuttle run (20 m × 12), 3 km run; women — push-ups, sit-ups, dead hang, 240 m shuttle run, 3 km run. Push-ups and sit-ups are maximum repetitions in 2 minutes.",
        "⚠ NO PASS/FAIL MINIMA PUBLISHED: the announcement's fitness appendix prints NO numeric pass/fail minima — the fitness evaluation is scored by count/time, so no minima are claimed here. The announcement's selection headcount rendered illegibly in the official viewer, so NO quota figure is claimed either.",
      ],
      pipeline: [
        { name: "Application — 특전부사관 지원센터 (blackberets.swc.mil.kr)", detail: "Internet application in the published window (Oct 12 – Nov 29, 2026 for the 268기 cycle)." },
        { name: "Selection stages, as published", detail: "Job-performance ability · face-to-face interview · medical examination · MMPI · physical fitness evaluation · background check · deliberation committee — scored exactly as the qualifications list prints." },
      ],
      flags: [
        "F-13 — RESOLVED Nov 9–10, 2026 (Korea SWC NCO): the 268기 announcement PDF (40 pp.) was read in full in the live-browser verification; the standards above are transcribed from it. The PDF's BMI grade bands were small print and were NOT transcribed — they do not ship.",
        "F-5 — ⚠ DATED + SUPERSEDED, NOT SHIPPED: an older official SWC announcement's fitness table exists in search extraction from an earlier cycle. It is superseded by the current attachment and must not ship in any form — it does not appear on this card or anywhere in this section.",
      ],
      sources: [
        { label: "mma.go.kr — 특전부사관 268기 모집공고 (notice)", url: "https://mma.go.kr/board/boardView.do?gesipan_id=13&gsgeul_no=1523266&pageIndex=1&searchCondition=&searchKeyword=&pageUnit=10&mc=usr0000137&jbc_gonggibodo=0" },
      ],
      source: "mma.go.kr — 특전부사관 268기 notice + announcement PDF (verified Nov 9–10, 2026)",
    },
    {
      id: "kr-707",
      name: "707th Special Mission Group (707특수임무단)",
      summary:
        "707th Special Mission Group — silent / no-direct-entry card: no separate official recruiting, selection or fitness page for the 707 was located. Official public recruitment is into SWC as a whole (the two routes above); any 707-specific selection is not published at official level located.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT / no direct public entry published",
      langLabel: "Official pages in Korean — no 707-specific page located.",
      what: "The SWC's special mission group, named as the command names it. It is manned from the SWC NCO cadre (see the 특전부사관 entry).",
      who: "No direct public entry is published. No separate official recruiting, selection or fitness page for the 707 was located on army.mil.kr / swc.mil.kr / mnd.go.kr / mma.go.kr. Official public recruitment is into SWC as a whole (Routes 1–2 above); any 707-specific selection is not published at official level located.",
      quals: [
        "⚠ NOT PUBLISHED: no 707-specific entry standards are published at official level located. None are printed here.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [],
      source: "No 707-specific official page located — silent at located level",
    },
    {
      id: "kr-udt-seal",
      name: "ROK Navy UDT/SEAL — Enlisted: 특전병 (UDT/SEAL)",
      summary:
        "ROK Navy UDT/SEAL 특전병 — OPEN RECRUITING, the most fully published entry standard in this section: full eligibility plus the scored fitness table (3 km run 12 pts / push-ups 10 / pull-ups 10 / sit-ups 10 / casualty carry 8) and swim table (treading water + 200 m comprehensive), the 70-point combined exclusion floor, and flags F-14 / F-15 printed unresolved, exactly as published.",
      level: "OPEN",
      levelLabel: "OPEN RECRUITING — full published standards (most fully published in this section)",
      langLabel: "Official page in Korean; figures transcribed exactly as printed, prose summarized. No English version of these tables located.",
      what: "Official name: 특전병 (UDT/SEAL), 해군 (ROK Navy). After selection, as published: service 20개월 (incl. 기초군사훈련 5주 basic training); after basic training, 12주간 특전 훈련 (12 weeks special-warfare training) with the Naval Special Warfare formation; mission stated as 특수작전 지원 및 보좌 (special-operations support and assistance). Assessment venue: 해군 특수전전단 (Naval Special Warfare Flotilla), Jinhae (경남 창원시 진해구); assembly 진해청소년전당, 오전 08:00.",
      who: "As published on the opened pages: age 18세이상 28세이하 in the application year (2026 기준: 1998.1.1. ~ 2008.12.31. 출생자); physical grade 1급∼4급 (grades 1–4), active-duty eligible; height 160Cm이상 190Cm미만 (160 cm ≤ height < 190 cm); uncorrected vision 나안시력 0.5이상 (0.5 or above); 색약/색맹 지원불가 — colour weakness AND colour blindness both ineligible; must be able to swim 200m 이상; vision-correction surgery (LASIK/LASEK/PRK/lens implant etc.) less than 3개월 (3 months) before the special-exam/swim-test date = application restricted — if discovered at the special exam/fitness stage, excluded even if passed at stage 1. Selection/assessment structure, by name as published: 체력검정 (fitness test) · 수영평가 (swim assessment) · 신체검사/특수신검 (special physical examination — items as listed: 압력내성검사 pressure-tolerance, 청력, 호흡기능, 뇨검사, 배근력, 혈압, X-RAY촬영, 피하(지방)검사, 혈액, 시력) · 범죄경력 조회 (criminal-record check).",
      quals: [
        "Scoring as printed: 선발 배점 기준 (200): 체력평가 (50) + 실기(수영)평가 (50) — transcribed exactly as printed on the page, including its own internal arithmetic ⚠ (see flag F-14: the page's stated total and its two printed components do not sum; both print as published, unresolved).",
        "Disqualifier, exactly as printed: 체력 및 수영검정 합산 점수가 70점 미만인 사람 — combined fitness + swim score under 70 points = excluded, regardless of quota (the 70-point combined exclusion floor).",
        "Conduct notes as printed: push-ups, pull-ups and sit-ups are performed to a signal tone at 1.5초 간격 (1.5-second intervals); late or incorrect form ends the assessment. Casualty carry detail, exactly as printed: 60kg dummy (사람모형 더미), shoulder carry, 20m, must complete within 30초; dummy touching the ground or not carried on the shoulder = 과락.",
        "종합영법 composition, exactly as printed: (잠영 20m + 평영 90m + 크롤영 90m = 200m) — underwater swim 20 m + breaststroke 90 m + crawl 90 m = 200 m. Feet touching the pool floor, or grabbing the wall/lane rope = 과락.",
        "Gap (honest): UDT/SEAL officer/NCO (특전부사관) entry standards were not captured from an opened official page. ⚠ NOT VERIFIED",
      ],
      tables: [
        {
          caption: "체력평가 기준 (50점) — top and fail bands transcribed exactly as printed on mma.go.kr (the full graduated tables are on the opened page)",
          headers: ["Event", "Points", "Top standard", "Fail (과락)"],
          rows: [
            ["3km 구보 (3 km run)", "12", "12:10 이내 (12 pts)", "13:30 초과"],
            ["팔굽혀펴기 (push-ups)", "10", "70 (10 pts)", "30미만"],
            ["턱걸이 (pull-ups)", "10", "18 (10 pts)", "table shows 0 pts at 10회이하 (10 or fewer)"],
            ["윗몸일으키기 (sit-ups)", "10", "85 (10 pts)", "45미만"],
            ["부상자운반 (casualty carry — 60 kg dummy, 20 m)", "8", "30초 이내 (8 pts)", "30초 초과"],
          ],
        },
        {
          caption: "수영평가 기준 (50점) — transcribed exactly as printed on mma.go.kr, including the 입영 top row literally (F-15)",
          headers: ["Event", "Points", "Top band as printed", "Fail (과락)"],
          rows: [
            ["입영 (treading water)", "8", "8 pts at 1:59~2:00 (first row, exactly as printed ⚠)", "0:40미만"],
            ["종합영법 (comprehensive strokes — 200 m)", "42", "42 pts at 3:50", "4:30초과"],
          ],
        },
      ],
      pipeline: [
        { name: "체력검정 (fitness test) + 수영평가 (swim assessment)", detail: "Scored per the tables above, with the 70-point combined exclusion floor." },
        { name: "신체검사/특수신검 (special physical examination) + 범죄경력 조회", detail: "Special physical examination (items as listed on the who-can-apply text) and criminal-record check." },
        { name: "Service — 20개월", detail: "Including 기초군사훈련 5주 (5 weeks basic training)." },
        { name: "12주간 특전 훈련 (12 weeks special-warfare training)", detail: "After basic training, with the Naval Special Warfare formation." },
      ],
      flags: [
        "F-14 — ⚠ CONFLICT (internal, as published): the MMA page prints a stated scoring total of (200) alongside two components of (50) + (50). Both figures print as published; the arithmetic is NOT resolved or “fixed” here. The 70-point combined exclusion floor prints as its own rule.",
        "F-15 — ⚠ AS PRINTED (swim): the 입영 (treading water) top row reads “8 pts at 1:59~2:00,” descending thereafter — reproduced literally, exactly as printed on the page. It is NOT “corrected” here.",
      ],
      sources: [
        { label: "mma.go.kr — 특전병 (UDT/SEAL)", url: "https://www.mma.go.kr/contents.do?mc=mma0003458" },
        { label: "mma.go.kr — Navy UDT/SEAL eligibility summary", url: "https://www.mma.go.kr/contents.do?mc=mma0003454" },
        { label: "mma.go.kr — Navy UDT/SEAL scoring overview", url: "https://www.mma.go.kr/contents.do?mc=mma0003453" },
      ],
      source: "mma.go.kr — 특전병 (UDT/SEAL) pages (Korean)",
    },
  ],
};

/* ------------------------------- PHILIPPINES ------------------------------- */

const PHILIPPINES: AlliedCountry = {
  key: "philippines",
  label: "Philippines",
  tileSub: "NAVSOG (name-caution ⚠) · FSRR (verified level) · SFR(A) · LRR (silent cards)",
  intro:
    "Official pages in English where opened. Honest overall picture: Philippine official service websites are thin, intermittently inaccessible to automated fetching, and publish NO entry fitness standards for any of these units at the level located. The widely-circulated NAVSOG/BNSOC swim-and-run numbers trace only to secondary sources in this research and are NOT printed.",
  entries: [
    {
      id: "ph-navsog",
      name: "Naval Special Operations Group (NAVSOG) — Philippine Navy",
      summary:
        "NAVSOG — ships under the name “Naval Special Operations Group (NAVSOG)” WITH the visible name-caution flag (F-16): a later redesignation is claimed by secondary sources but could NOT be confirmed on an official Navy page. No NAVSOG figures ship. Silent at the official-web level reachable here.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — DELIBERATELY SILENT at the official-web level reachable here; ⚠ name unconfirmed (F-16)",
      what: "The Philippine Navy's naval special operations formation, shipped under the name “Naval Special Operations Group (NAVSOG)” — see the name-caution flag. No official NAVSOG recruiting, eligibility, selection-name or fitness page was opened: navy.mil.ph (the Philippine Navy official homepage, as printed on the Navy's own official social posts) failed to open (network error) via the research fetcher, and the historic unit site appears only as a citation inside secondary sources. Existence is universally attested secondarily, but on official pages actually opened: silence. This is a verification gap, not evidence the unit or its standards don't exist offline.",
      who: "Not published at the official-web level reachable here. No entry route is printed, because none was verified on an opened official page.",
      quals: [
        "⚠ NO FIGURES SHIP: no NAVSOG eligibility or fitness figures are printed — none were verified on an opened official page. The widely-circulated swim-and-run numbers trace only to secondary sources and are excluded.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-16 — ⚠ NAME CAUTION (NOT VERIFIED): secondary sources claim the formation has since been redesignated (NAVSOCOM, and more recently a “Special Warfare Force”). That renaming could NOT be confirmed from any opened official Philippine Navy page — a live-browser check on navy.mil.ph is still required before any name change. The follow-up was NOT executed in this build pass, so the formation ships under “Naval Special Operations Group (NAVSOG)” with this flag visible.",
      ],
      sources: [],
      source: "navy.mil.ph — failed to open; name unconfirmed (F-16)",
    },
    {
      id: "ph-fsrr",
      name: "First Scout Ranger Regiment (FSRR) — Philippine Army",
      summary:
        "FSRR — ships at its verified level: Camp Tecson, San Miguel, Bulacan, and the Exercise Kasangga facts from the opened Army release (~400 Scout Rangers with ~100 3RAR troops, Oct 2022). Entry/selection/fitness: silent at official level located.",
      level: "PARTIAL",
      levelLabel: "PARTIAL — unit, home camp and activity confirmed on an opened official Army page; entry silent",
      what: "Official name as the Army itself uses it: First Scout Ranger Regiment (FSRR). What the opened official Army release states (army.mil.ph, “Scout Rangers, Aussie troops hold combat tracking drills,” reporting FSRR's 10 Oct 2022 announcement): FSRR is based at Camp Tecson, San Miguel, Bulacan; in Exercise Kasangga (more than two months), around 400 Scout Rangers trained alongside nearly a hundred troops of Australia's 3rd Battalion, Royal Australian Regiment (3RAR); the stated training aim was to enhance Scout Rangers' competency in urban operations, and Australian troops' skills in jungle and mountain operations. No formal mission statement appears in the opened release.",
      who: "Silent at official level located — no official Scout Ranger Course entry standard, age/service prerequisite, or fitness table was located on army.mil.ph.",
      quals: [
        "⚠ NOT PUBLISHED (at located level): no entry fitness standards are published on the official pages located. None are printed here.",
      ],
      pipeline: NO_PIPELINE,
      flags: [
        "F-17 — ⚠ NOT VERIFIED (FSRR): three further army.mil.ph releases (Scout Ranger orientation course; first female Scout Ranger-qualified trainer) returned 403 to the research fetcher and were not used; they may contain course names/durations at published level. NOT executed in this build pass.",
      ],
      sources: [
        { label: "army.mil.ph — Scout Rangers, Aussie troops hold combat tracking drills", url: "https://army.mil.ph/home/index.php/press-releases-archive-2/1712-scout-rangers-aussie-troops-hold-combat-tracking-drills" },
      ],
      source: "army.mil.ph — FSRR / Exercise Kasangga release (opened)",
    },
    {
      id: "ph-sfra",
      name: "Special Forces Regiment (Airborne) — SFR(A), Philippine Army",
      summary:
        "SFR(A) — silent-at-located-level card: no official page for this regiment was located or opened, so no official recruiting, selection-name, or fitness standard is reported — none was verified on an official page.",
      level: "SILENT",
      levelLabel: "SILENT at official level located — no official page located or opened",
      what: "Named as the regiment is known: Special Forces Regiment (Airborne), Philippine Army. No official page for this regiment was located or opened; targeted searches of army.mil.ph returned only secondary sources for SFR(A), none of whose content is used here.",
      who: "Not reported — no official recruiting information was verified on an official page.",
      quals: [
        "⚠ NOT PUBLISHED (at located level): no fitness standard is reported, because none was verified on an official page.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [],
      source: "No official page located — silent at located level",
    },
    {
      id: "ph-lrr",
      name: "Light Reaction Regiment (LRR), Philippine Army",
      summary:
        "LRR — silent-at-located-level card: formally “no official page found,” not a confirmed policy statement. The frequently repeated claims about its prerequisites and counter-terrorism role could not be verified on an opened official page and are not reported as facts.",
      level: "SILENT",
      levelLabel: "DELIBERATELY SILENT at published level located — no official page found",
      what: "Named as the regiment is known: Light Reaction Regiment (LRR), Philippine Army. No official page for this regiment was located or opened.",
      who: "Not reported — the frequently repeated claims about its prerequisites and counter-terrorism role could not be verified on an opened official page and are not reported as facts.",
      quals: [
        "⚠ NOT PUBLISHED (at located level): no fitness standard is reported, because none was verified on an official page.",
      ],
      pipeline: NO_PIPELINE,
      flags: [],
      sources: [],
      source: "No official page located — silent at located level",
    },
  ],
};

/* ------------------------------ COUNTRY ORDER ------------------------------ */

/** The 17 allied countries in Partner Forces order — the pack's order. */
export const ALLIED_COUNTRIES: AlliedCountry[] = [
  GERMANY,
  NORWAY,
  CANADA,
  UK,
  DENMARK,
  FRANCE,
  AUSTRALIA,
  NEW_ZEALAND,
  JAPAN,
  GREECE,
  NETHERLANDS,
  ITALY,
  SPAIN,
  POLAND,
  TURKIYE,
  SOUTH_KOREA,
  PHILIPPINES,
];
