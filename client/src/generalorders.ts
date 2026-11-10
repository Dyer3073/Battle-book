// General Orders — Red-Team Gap Fill G6, transcribed from
// ~/workspace/military-app/redteam/gap-fills.md (Part IV, researched
// Nov 9, 2026, official sources only). VERBATIM DISCIPLINE: the order
// texts below are quoted exactly as published on the official page
// cited for each service. Punctuation and wording differences between
// services are kept, never harmonized (e.g. USMC Order 1 "the post"
// vs. Navy Order 1 "this post"; USMC Order 6 includes "Command Duty
// Office, Officer of the Day" where the Navy list does not; USMC
// Order 9 names "the Corporal of the Guard or the Officer of the
// Deck" where the Navy names only "the Officer of the Deck").
//
// SINGLE SOURCE OF TRUTH: the Practice Trainers' General Orders deck
// (trainers.ts) DERIVES its pool from GENERAL_ORDERS here, and the
// reference section below builds its cards from the same arrays — the
// verbatim text exists in exactly one place in the app.
//
// Verdict (pack): SHIPS PARTIAL — Army 3 and Navy 11 verbatim from
// official training publications; USMC 11 verbatim from an official
// marines.mil battalion order (BnO 1600.4N, Enclosure (2)) citing
// MCO 5530.15 as reference (d) — the canonical MCO 5530.15 PDF itself
// was NOT directly verified (fetch rate-limited, pack Flag 2), and
// that flag ships on the USMC card. The grouping-rationale entry
// (why Army prints 3, USMC/Navy 11) was NOT SOURCEABLE on an official
// page and is skipped to flags (pack Flag 1) — no G6-4 entry exists.

import type { PackSection } from "./seven";

export type GeneralOrderService = "Army" | "Marine Corps" | "Navy";

export type GeneralOrder = {
  service: GeneralOrderService;
  /** 1-based order number within the service's list. */
  n: number;
  /** The verbatim published text of the order. */
  text: string;
};

const army: string[] = [
  "I will guard everything within the limits of my post and quit my post only when properly relieved.",
  "I will obey my special orders and perform all my duties in a military manner.",
  "I will report violations of my special orders, emergencies, and anything not covered in my instructions to the Commander of the Relief.",
];

const usmc: string[] = [
  "To take charge of the post and all government property in view.",
  "To walk my post in a military manner, keeping always on the alert and observing everything that takes place within sight or hearing.",
  "To report all violations of orders I am instructed to enforce.",
  "To repeat all calls from posts more distant from the guardhouse than my own.",
  "To quit my post only when properly relieved.",
  "To receive, obey, and pass on to the sentry who relieves me, all orders from the Commanding Officer, Command Duty Office, Officer of the Day, Officer of the Deck, and Officers and Petty Officers of the watch only.",
  "To talk to no one except in the line of duty.",
  "To give the alarm in case of fire or disorder.",
  "To call the Corporal of the Guard or the Officer of the Deck in any case not covered by instructions.",
  "To salute all officers and all colors and standards not cased.",
  "To be especially watchful at night and during the time for challenging, to challenge all persons on or near my post, and to allow no one to pass without proper authority.",
];

const navy: string[] = [
  "To take charge of this post and all government property in view.",
  "To walk my post in a military manner, keeping always on the alert, and observing everything that takes place within sight or hearing.",
  "To report all violations of orders I am instructed to enforce.",
  "To repeat all calls from posts more distant from the guard house than my own.",
  "To quit my post only when properly relieved.",
  "To receive, obey, and pass on to the sentry who relieves me all orders from the Commanding Officer, Command Duty Officer, Officer of the Deck, and Officers and Petty Officers of the Watch only.",
  "To talk to no one except in the line of duty.",
  "To give the alarm in case of fire or disorder.",
  "To call the Officer of the Deck in any case not covered by instructions.",
  "To salute all officers and colors and standards not cased.",
  "To be especially watchful at night and during the time for challenging, to challenge all persons on or near my post, and to allow no one to pass without proper authority.",
];

function list(service: GeneralOrderService, texts: string[]): GeneralOrder[] {
  return texts.map((text, i) => ({ service, n: i + 1, text }));
}

/** All 25 published General Orders: Army 3 + Marine Corps 11 + Navy 11. */
export const GENERAL_ORDERS: GeneralOrder[] = [
  ...list("Army", army),
  ...list("Marine Corps", usmc),
  ...list("Navy", navy),
];

export const GO_SERVICES: GeneralOrderService[] = ["Army", "Marine Corps", "Navy"];

export function ordersFor(service: GeneralOrderService): GeneralOrder[] {
  return GENERAL_ORDERS.filter((o) => o.service === service);
}

/** Reference-card titles — the trainer's missed-item review deep-links
 * land on these exact card names in the General Orders section. */
export const GO_CARD_TITLES: Record<GeneralOrderService, string> = {
  Army: "Army — The 3 General Orders (Verbatim)",
  "Marine Corps": "Marine Corps — The 11 General Orders (Verbatim)",
  Navy: "Navy — The 11 General Orders of a Sentry (Verbatim)",
};

export const GO_SECTION: PackSection = {
  view: "generalorders",
  title: "General Orders",
  headSub:
    "The General Orders for guard duty, verbatim as each service publishes them: the Army's 3, the Marine Corps' 11, and the Navy's 11. Wording differences between services are printed as published, never harmonized — and you can drill all 25 in the Practice Trainers.",
  intro:
    "Every sentry learns these by heart. This section prints each service's list exactly as its official publication prints it — punctuation included — so what you memorize here is what your service actually publishes. Drill them in Practice Trainers → General Orders Trainer (flashcards and quiz, drawn from these same cards).",
  standing:
    "Verbatim discipline: the order texts are quoted exactly from the official source named on each card. The USMC list ships from an official battalion order citing MCO 5530.15 — the canonical manual itself was not directly verified in the research pass, and the card says so. No entry explains WHY the services group the orders differently (3 vs. 11): no official page frames that, so it is flagged, not filled.",
  tiles: [
    {
      key: "army",
      label: "Army — 3 General Orders",
      tileSub: "Entry G6-1 · verbatim from U.S. Army Recruiting Command IET Guard Duty material",
      intro: "The Army teaches three General Orders for guard duty. The IET material states: “General Orders must be recited verbatim” and “All guards must memorize, understand, and comply with the following General Orders.”",
      entries: [
        {
          id: "G6-1",
          name: GO_CARD_TITLES.Army,
          summary:
            "The Army's 3 General Orders, verbatim: (1) guard everything within the limits of my post and quit my post only when properly relieved; (2) obey my special orders and perform all my duties in a military manner; (3) report violations of my special orders, emergencies, and anything not covered in my instructions to the Commander of the Relief.",
          who: "Soldiers in Initial Entry Training / Basic Combat Training, and any Army guard on post.",
          body: [
            "The same document frames the two sets of orders this way: “A guard, on post, is governed by two sets of orders: General Orders and Special Orders: General Orders outline the basic responsibilities of all guards.”",
            "Taught in Initial Entry Training (IET) / Basic Combat Training; published in the U.S. Army Recruiting Command IET Guard Duty material.",
          ],
          bullets: ordersFor("Army").map((o) => ({ title: `General Order ${o.n}`, text: o.text })),
          flags: [],
          links: [
            {
              label: "Initial Entry Training (IET) — Guard Duty, U.S. Army Recruiting Command",
              url: "https://recruiting.army.mil/Portals/15/Future-Soldier/Initial%20Soldier%20Training%20-%20Guard%20Duty.pdf",
            },
          ],
          source: "Initial Entry Training (IET) — Guard Duty, U.S. Army Recruiting Command (recruiting.army.mil)",
        },
      ],
    },
    {
      key: "usmc",
      label: "Marine Corps — 11 General Orders",
      tileSub: "Entry G6-2 · verbatim from Battalion Order 1600.4N, Enclosure (2), citing MCO 5530.15",
      intro: "Marines learn eleven General Orders for sentries. The text is verbatim from an official marines.mil battalion order — Headquarters Battalion, Marine Corps Air Ground Combat Center, Twentynine Palms, Battalion Order 1600.4N, Enclosure (2) “General Orders for Sentries” — which lists MCO 5530.15, U.S. Marine Corps Interior Guard Manual, as reference (d).",
      entries: [
        {
          id: "G6-2",
          name: GO_CARD_TITLES["Marine Corps"],
          summary:
            "The Marine Corps' 11 General Orders for sentries, verbatim from Battalion Order 1600.4N Enclosure (2). Differences from the Navy text print as published, never harmonized: Order 1 says “the post” where the Navy says “this post”; Order 6 includes “Command Duty Office, Officer of the Day” where the Navy list does not; Order 9 names “the Corporal of the Guard or the Officer of the Deck” where the Navy names only “the Officer of the Deck.”",
          who: "Marines — taught in recruit training and used on interior guard / duty posts.",
          body: [
            "This published copy is Enclosure (2) to the Twentynine Palms Headquarters Battalion Officer of the Day order. It is NOT quoted from the MCO 5530.15 PDF itself — see the flag on this card.",
          ],
          bullets: ordersFor("Marine Corps").map((o) => ({ title: `General Order ${o.n}`, text: o.text })),
          flags: [
            "Canonical manual not directly verified (pack Flag 2): the MCO 5530.15 (U.S. Marine Corps Interior Guard Manual) PDF on marines.mil was identified in search results, but a direct fetch failed with an upstream rate-limit error (HTTP 429) and was not retried. This list is sourced from the official battalion order that reproduces the General Orders for Sentries and cites MCO 5530.15 as reference (d). Pre-launch follow-up: verify line-by-line against MCO 5530.15 itself and an MCRD-published recruit-training page. No MCRD page publishing all 11 orders verbatim was found in the research pass.",
          ],
          links: [
            {
              label: "Battalion Order 1600.4N, Enclosure (2) — General Orders for Sentries (29palms.marines.mil)",
              url: "https://www.29palms.marines.mil/Portals/56/Docs/HQBN/Battalion-Orders/BnO_1600.4N.pdf?ver=MWYF3XWzEn3mqo6Uo1ZBMQ%3D%3D",
            },
          ],
          source: "Battalion Order 1600.4N, Headquarters Battalion, MCAGCC Twentynine Palms (29palms.marines.mil), Enclosure (2)",
        },
      ],
    },
    {
      key: "navy",
      label: "Navy — 11 General Orders",
      tileSub: "Entry G6-3 · verbatim from Naval Service Training Command's Pre-Arrival Memorization Study Guide",
      intro: "The Navy teaches eleven General Orders of a Sentry. Naval Service Training Command's Pre-Arrival Memorization Study Guide gives the recitation frame: “Sir/Ma'am, the ______ general order of a sentry is to:” followed by the eleven orders below.",
      entries: [
        {
          id: "G6-3",
          name: GO_CARD_TITLES.Navy,
          summary:
            "The Navy's 11 General Orders of a Sentry, verbatim from the NSTC Pre-Arrival Memorization Study Guide — including its own wordings where they differ from the Marine Corps list (“this post” in Order 1; “guard house” in Order 4; Order 9 naming only “the Officer of the Deck”). Both lists print as published; see G6-2 for the side-by-side differences.",
          who: "Sailors — the same eleven orders are the watchstanding basis at Recruit Training Command.",
          body: [
            "Published by Naval Service Training Command / Officer Training Command Newport in its Pre-Arrival Memorization Study Guide; the Navy's own RTC reporting describes the same eleven orders as the watchstanding basis at Recruit Training Command.",
          ],
          bullets: ordersFor("Navy").map((o) => ({ title: `General Order ${o.n}`, text: o.text })),
          flags: [
            "Grouping rationale not sourceable (pack Flag 1): no official service page found in the research pass frames WHY the services group the orders differently (Army condensed to 3; USMC/Navy keep 11) in its own words. The counts are verified by the three lists in this section, but the explanatory history appears only on non-official sites, so no such entry ships.",
          ],
          links: [
            {
              label: "Pre-Arrival Memorization Study Guide — Naval Service Training Command (netc.navy.mil)",
              url: "https://www.netc.navy.mil/Commands/Naval-Service-Training-Command/OTCN/Programs/NSI/Pre-Arrival-Memorization-Study-Guide/",
            },
          ],
          source: "Pre-Arrival Memorization Study Guide, Naval Service Training Command (netc.navy.mil)",
        },
      ],
    },
  ],
};
