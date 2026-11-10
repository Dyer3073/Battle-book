// OPSEC & Social Media — transcribed from the Closure Sweep LIFE
// pack (~/workspace/military-app/closure/closure-life.md, Part 4,
// researched Nov 9, 2026). The 5-step process ships in BOTH the
// Marine Corps and Army printings, attributed. Reporting ships as
// the layered route the sources publish — NO DoD-wide OPSEC hotline
// exists in official publishing (pack Flag O-1), and none is printed.
// Safety content: never filtered, never locked, on every track.

import type { PackSection } from "./seven";

export const OPSEC_SECTION: PackSection = {
  view: "opsec",
  title: "OPSEC & Social Media",
  headSub:
    "Operations security for members and families: the 5-step process in both services' printings, the handbook do/don'ts, the geolocation risks, and where concerns actually get reported.",
  intro:
    "OPSEC is the discipline of denying an adversary the small, unclassified pieces that assemble into something operational. The process below is published by both the Marine Corps and the Army — both printings ship, attributed, because each service teaches its own people in its own words.",
  standing:
    "There is no single DoD-wide OPSEC hotline in official publishing (pack Flag O-1). This section prints the layered reporting route the sources actually publish — chain of command and unit OPSEC manager first, service channels after — and does not invent a number.",
  tiles: [
    {
      key: "process",
      label: "The 5-Step Process",
      tileSub: "BOTH printings: Marine Corps (MCICOM) and Army, attributed · NSA's critical-information list",
      intro: "The same five steps, as two services print them. Learn the wheel once; recognize it in either wording.",
      entries: [
        {
          id: "OP-1",
          name: "The OPSEC 5-step process — Marine Corps printing (MCICOM)",
          summary: "As published by MCICOM: 1) Identification of critical information and indicators · 2) Analysis of threats · 3) Analysis of vulnerabilities · 4) Assessment of risk · 5) Application/Implementation of OPSEC countermeasures. The same wheel appears in DoD/IOSS social-media material and in NSA's “Keeping Safe on Social Media” (Aug 2021), which lists critical information as: names/photos/relationships; usernames, passwords, network information; operational, security and logistical data; mission capabilities/limitations; job title, location, salary, grade, clearance; schedules, travel itineraries, locations; SSNs, credit cards, banking; work/personal addresses and phones; interests/hobbies.",
          who: "Marines — and anyone whose unit teaches from MCICOM material.",
          body: [],
          flags: [],
          links: [{ label: "MCICOM — National OPSEC Awareness Month", url: "https://www.mcicom.marines.mil/News/News-Article/Article/2913013/january-is-national-opsec-awareness-month/" }],
          source: "MCICOM; NSA CSI, Keeping Safe on Social Media (Aug 2021)",
        },
        {
          id: "OP-2",
          name: "The OPSEC 5-step process — Army printing, with its glosses",
          summary: "As published by the Army, with the Army's own explanations: Identification of critical information (determine what needs protection) · Analysis of threats (identify adversaries and how they collect) · Analysis of vulnerabilities (analyze what critical information is being exposed) · Assessment of risk (assess what protective measures should be implemented) · Application of OPSEC measures. Same five steps as the Marine Corps printing (OP-1) — the glosses are the Army's addition.",
          who: "Soldiers — and family members reading the Army's school-year OPSEC guidance, which is written for them too.",
          body: [],
          flags: [],
          links: [{ label: "U.S. Army — Back to school, back to OPSEC", url: "https://www.army.mil/article/294272/back_to_school_back_to_operations_security" }],
          source: "U.S. Army (army.mil)",
        },
      ],
    },
    {
      key: "family",
      label: "Family OPSEC",
      tileSub: "Social media is the family vulnerability · what's never disclosed · MARADMIN 194/25 family awareness",
      intro: "The published family guidance — because the adversary reads the family's posts, not just the member's.",
      entries: [
        {
          id: "OP-3",
          name: "Family OPSEC (Army, as published)",
          summary: "Army: “Social media is the most common vulnerability for families.” Don't post “X days until vacation!”; don't check in at airports/restaurants/resorts/landmarks; don't post photos/status/video until the trip is completely over and everyone is home; teach children not to share exact departure dates; keep out-of-office replies generic; use ambiguous timelines afterward; avoid public unsecured Wi-Fi for banking/portals (use VPN/cellular). Fort Meade's family guidance adds: family members should never disclose birthdays, SSNs, special-operations unit information, family photographs, credit card numbers/security codes on social sites; review privacy settings; watch photo backgrounds; small pieces combine into valuable information.",
          who: "Spouses, parents, and older kids — the countdown post is the vulnerability this card exists to retire.",
          body: [],
          flags: [],
          links: [],
          source: "U.S. Army (army.mil) — vacation OPSEC; Fort Meade — protect sensitive information",
        },
        {
          id: "OP-4",
          name: "Family awareness (USMC MARADMIN 194/25, para 5.g)",
          summary: "“Talk to your family members about OPSEC… inform your loved ones of what they can and cannot say to others. Speak to your children about how important it is that they keep information about you private.” The MARADMIN puts the conversation itself on the member: the family can't protect information nobody told them was sensitive.",
          who: "Marines — the family OPSEC brief at the kitchen table is a published expectation, not a suggestion.",
          body: [],
          flags: [],
          links: [{ label: "MARADMIN 194/25", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4157282/operations-security-practices-for-warfighting/" }],
          source: "MARADMIN 194/25, para 5.g",
        },
      ],
    },
    {
      key: "handbooks",
      label: "Handbook Do / Don't",
      tileSub: "Army Social Media Handbook · USMC Social Corps · DAF Social Media Guide · geolocation",
      intro: "What the services' own social-media handbooks say, service by service — plus the geotagging risk every guide prints.",
      entries: [
        {
          id: "OP-5",
          name: "Social media do / don't (service handbooks, as published)",
          summary: "Army Social Media Handbook: Do use social media to get out command messages, inform the public, stay connected. Don't reveal sensitive information about missions, units or Soldiers; don't post specific deployment dates or locations (Soldiers and families); set privacy to “friends only.” The handbook includes an OPSEC checklist for official pages and a geotagging-safety section. USMC (The Social Corps / USMC Social Media Handbook): personal posts must still comply with OPSEC, information assurance, PII, Joint Ethics, foreign disclosure and public-release policies — “NEVER disclose any information that compromises Operations Security (OPSEC) or foreign disclosure policy.” It includes the checklist for official publicly available websites (MCO 3070.2). Department of the Air Force Social Media Guide (updated 6/2021): official content is reviewed by the organization's OPSEC manager before posting; check the Critical Information and Indicators List; monitor streams for OPSEC-violating fan posts. Appendix C: don't post “tactics, troop movements, force size, weapon system details”; avoid rank, unit locations, deployment dates, names, equipment specs; guard family information, plans, schedules, location; don't share SSN, home address, birthday, birthplace, license number. Appendix D covers reporting comments of concern.",
          who: "Anyone posting in uniform or about it — personal accounts are not exempt; all three handbooks say so.",
          body: [],
          flags: ["Edition note (pack Flag O-8): the Army handbook exists as v3.1 (Jan 2013, per NCO Journal) and a later Fort Carson-hosted edition; the do/don't and geotagging language is consistent across both."],
          links: [],
          source: "Army Social Media Handbook; USMC, The Social Corps; DAF Social Media Guide v4.3",
        },
        {
          id: "OP-6",
          name: "Geolocation risks (as the guides print them)",
          summary: "The recurring official line: “Geotagging is the equivalent of adding a 10-digit grid coordinate to everything posted on the Internet.” Phones/cameras may embed geotags automatically. Army: don't use location-based services when deployed or in classified areas; turn off GPS during operations — failure could damage the mission and put families at risk. NSA: disable location services per device/app; don't geotag or “check in”; minimize app permissions; disallow tagging; photos may carry location metadata; don't post vacation photos while still traveling. USMC MARADMIN 194/25: photo metadata includes location, time, and identity-related information — “Do not post personal pictures to social media that may reveal sensitive information about Marine Corps operations.” It also warns fitness devices “collect, aggregate, and make your location data available for sale and exploitation,” and commercial GPS can be spoofed. DAF Guide: “Beware of platforms that track your location”; turn off smartphone GPS during official exercises, operations, or deployments.",
          who: "Everyone with a phone — the metadata posts even when the caption doesn't.",
          body: [],
          flags: [],
          links: [],
          source: "NCO Journal; NSA CSI (Aug 2021); MARADMIN 194/25; DAF Social Media Guide",
        },
      ],
    },
    {
      key: "report",
      label: "Reporting OPSEC Concerns",
      tileSub: "The layered route as published · Army iSALUTE 1-800-225-5779 · no DoD-wide hotline exists",
      intro: "Where a concern actually goes — in the order the sources publish it.",
      entries: [
        {
          id: "OP-7",
          name: "Where OPSEC concerns get reported (layered — no single hotline)",
          summary: "No single DoD-wide OPSEC hotline exists in official publishing — the route is layered. 1) Your chain of command / unit OPSEC manager / security manager; clear public releases through COMMSTRAT, OPSEC and/or Foreign Disclosure and the unit CIIL first. MARADMIN 194/25: “Your reporting of OPSEC violations and possible indicator exposures helps improve the operations security process.” DAF Guide: “when in doubt, contact your unit operations officer, security manager, intelligence officer, foreign disclosure officer or public affairs officer.” 2) USMC service OPSEC support element: the Marine OPSEC Support Team (MOST), designated in MCO 3070.2A; requests via MCIOC_MOST@mcia.osis.gov as printed by MCICOM. 3) Suspicious solicitation/activity → counterintelligence: Army iSALUTE, www.inscom.army.mil/isalute or 1-800-225-5779 (1-800-CALL-SPY), per Army Cyber Command and installation pages. 4) Contractors: report to your COR, or the installation Security and Law Enforcement Office. 5) Compromised social account (NSA guidance): contact the platform's support staff immediately; warn a compromised friend/family member through other means.",
          who: "Anyone who spots a violation or a suspicious approach — start at layer 1 unless it's a counterintelligence matter (layer 3) or a live account compromise (layer 5).",
          body: [],
          flags: ["Pack Flag O-1: the DoD IG Hotline exists for fraud/waste/abuse, but no source in this research publishes it as the OPSEC channel, so it is not presented as one here."],
          links: [{ label: "Army iSALUTE", url: "https://www.inscom.army.mil/isalute" }],
          source: "MARADMIN 194/25; MCICOM; Army Cyber Command; DAF Guide; NSA",
        },
      ],
    },
  ],
};
