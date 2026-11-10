// Give-Back — transcribed from the Closure Sweep LIFE pack
// (~/workspace/military-app/closure/closure-life.md, Part 5,
// researched Nov 9, 2026). ASBP eligibility conflict (CONUS 17+/110 lb
// vs Landstuhl 18+) prints BOTH sides, never harmonized (pack Flag
// O-3). Salute to Life ships at the program site's own 3 criteria +
// published odds. Organ donation ships at published level: no DoD
// registry exists, printed as the finding.

import type { PackSection } from "./seven";

export const GIVEBACK_SECTION: PackSection = {
  view: "giveback",
  title: "Give-Back",
  headSub:
    "Blood, marrow, and organ donation — the military's own programs, at the level official sources publish them, with the eligibility conflicts printed rather than smoothed over.",
  intro:
    "Three ways service members give to strangers: blood through the Armed Services Blood Program, marrow registration through Salute to Life, and organ donation — where the honest published finding is that no DoD registry exists, and the route is your state registry or the DMV.",
  standing:
    "Eligibility figures differ by source and era; where they conflict, both print. Donor-center counts and deferral lists change — verify the current list at militaryblood.dod.mil before planning around one (pack Flag O-2).",
  tiles: [
    {
      key: "asbp",
      label: "Armed Services Blood Program",
      tileSub: "The military's official blood program since 1962 · eligibility conflict printed both sides · how donation works",
      intro: "The ASBP is a joint, Tri-Service program — the blood on the shelf in a military hospital got there because someone in uniform-adjacent life gave it.",
      entries: [
        {
          id: "GB-1",
          name: "Armed Services Blood Program (ASBP) — what it is",
          summary: "As published: the U.S. military's official blood program since 1962 — “the official blood provider for the U.S. military.” A joint, Tri-Service operation supporting the whole DoD health system (including Coast Guard and reserve components): it collects, processes, stores, transports and distributes blood to service members, families, retirees and veterans, in peace and war. Sites: militaryblood.dod.mil (info/scheduling) and militarydonor.com (find a center, schedule). Where: 20+ Military Blood Donor Centers plus installation blood drives.",
          who: "Everyone with base access — the program's blood serves the whole military community, and its donors can too.",
          body: [],
          flags: ["Count varies by publication date (pack Flag O-3): “22 donor centers” in older material, “over 20 BDC” in 2025-era material — printed as 20+ here; the current center list lives at DHA/ASBP."],
          links: [
            { label: "ASBP — militaryblood.dod.mil", url: "https://www.militaryblood.dod.mil" },
            { label: "Find a center — militarydonor.com", url: "https://www.militarydonor.com" },
          ],
          source: "DHA / ASBP (dha.mil); militaryblood.dod.mil",
        },
        {
          id: "GB-2",
          name: "Who can donate — CONUS vs Europe, printed both sides",
          summary: "As ASBP publishes: “Eligible service members, beneficiaries, contractors, government service workers and retirees” — and, per the program director, even people with no military connection can donate at ASBP drives. “Most healthy adults are eligible to give blood,” subject to FDA-guidance deferrals (temporary / indefinite / permanent). General criteria as published in DoD releases: weigh at least 110 pounds; at least 17 years old (varies by state); feeling well at least three days; well hydrated; have eaten before donating. EUROPE (Landstuhl / ASBP-Europe) prints it differently: eligibility framed as nearly everyone over 18 with base access; FDA has removed the BSE (“mad cow”) Europe/UK residence restrictions; a 3-month wait applies after tattoos outside the U.S. or malaria-risk travel. The two frames are both published — the CONUS 17+/110 lb frame and the Landstuhl 18+ frame — and they are not merged here; your donor center's screening governs your donation.",
          who: "Prospective donors — especially in Europe, where the published frame differs from the CONUS one.",
          body: [],
          flags: ["Pack Flag O-3: a 116-lb figure appears on a non-authoritative drive flyer — excluded. Eligibility conflicts print; screening at the center decides."],
          links: [{ label: "ASBP-Europe (Landstuhl)", url: "https://landstuhl.tricare.mil/Health-Services/Other/Armed-Services-Blood-Program" }],
          source: "DHA/ASBP; DVIDS DoD releases; Landstuhl Regional Medical Center",
        },
        {
          id: "GB-3",
          name: "How donation works",
          summary: "Whole-blood donation takes about 30–45 minutes including the questionnaire and brief interview. All blood types are accepted; ASBP especially asks for O− (universal donor) and O+ (most common).",
          who: "First-time donors — under an hour, start to finish.",
          body: [],
          flags: [],
          links: [],
          source: "ASBP (as published)",
        },
      ],
    },
    {
      key: "marrow",
      label: "Salute to Life (Bone Marrow)",
      tileSub: "The DoD marrow program · the site's own 3 criteria · ~1-in-430 odds, as published",
      intro: "The C.W. Bill Young Department of Defense Marrow Donor Program — registering is a cheek swab and five minutes; donating, if you ever match, is the rare part.",
      entries: [
        {
          id: "GB-4",
          name: "Salute to Life — the DoD marrow donor program",
          summary: "The C.W. Bill Young Department of Defense Marrow Donor Program, also known as Salute to Life, established 1991. It works exclusively with DoD-affiliated people; registrants are listed in the National Marrow Donor Registry through a separate DoD donor management system. The program site states it has recruited “more than 1 million new potential donors and coordinated more than 8,000 cellular donations” since inception. The program site's own 3 criteria: 1) Age 18–60; 2) In general good health; 3) Affiliated with the U.S. Department of Defense (active military & dependents; DoD civilian employees, Reservists, Coast Guard & National Guard members).",
          who: "DoD-affiliated adults 18–60 in general good health — if that's you, you're the registry this program is building.",
          body: [],
          flags: ["Era conflicts in official republications (pack Flag O-4): one Army article says “established by public law in 1990” against the program site's 1991; swab counts vary by era. The program site's criteria and 1991 date print as the core."],
          links: [{ label: "Salute to Life", url: "https://www.salutetolife.org/" }],
          source: "Salute to Life (salutetolife.org)",
        },
        {
          id: "GB-5",
          name: "How registration works — and the odds, as published",
          summary: "Online: complete the form at salutetolife.org (“Join Now!”) and “we will mail you a free registration kit.” At a drive / walk-in: a ~5-minute history questionnaire plus a simple cheek swab; the DNA sample is HLA-typed and recorded in the registry. Registering is not donating: only about 1 in 430 registered members will be a perfect match (recent DVIDS drive figure). If matched, Salute to Life assists with command authorization and no-cost TAD/TDY travel arrangements (that assistance framing is published by NMDP, the national registry partner — cited as NMDP, not DoD). Contact as printed: salutetolife.org · 1-800-627-7693 (1-800-MARROW-3) · publicaffairs@dodmarrow.org. Keep-with: ASBP travel-related blood deferral criteria do NOT apply to organ and bone-marrow/stem-cell donation — people deferred from blood for travel may still register. A blood deferral is not a marrow deferral.",
          who: "Anyone who was ever deferred from blood donation and assumed marrow was closed too — it isn't.",
          body: [],
          flags: ["Odds conflict (pack Flag O-4): an older published piece says 1 in 540; the recent figure, 1 in 430, prints as current with the older figure flagged here rather than hidden."],
          links: [{ label: "Join — salutetolife.org", url: "https://www.salutetolife.org/join-now" }],
          source: "Salute to Life; DVIDS; NMDP (travel-assistance framing)",
        },
      ],
    },
    {
      key: "organ",
      label: "Organ Donation",
      tileSub: "The finding: no DoD registry exists · Walter Reed transplant service · living donation as published",
      intro: "Organ donation at the level official publishing supports — including the gap, printed as a gap.",
      entries: [
        {
          id: "GB-6",
          name: "Organ donation — the published finding: no DoD registry exists",
          summary: "There is no DoD organ-donor registry program in official publishing — that absence is the finding, and this card prints it instead of inventing a program. What exists is transplant-services framing. Signing up as a (deceased) organ donor, as the DoD feature prints it — one line only: “sign up to be an organ donor… online through your state registry or at your local Department of Motor Vehicles.”",
          who: "Anyone looking for “the military organ donor program” — there isn't one; the state registry is the route, and it's the same route civilians use.",
          body: [],
          flags: [],
          links: [],
          source: "defense.gov feature (Apr 29, 2024); Closure LIFE pack §5.3 (negative finding)",
        },
        {
          id: "GB-7",
          name: "Walter Reed transplant service & living donation (as published)",
          summary: "Walter Reed National Military Medical Center's Organ Transplant Service is “the only certified transplant center within the Military Health System” (UNOS-certified); it performed 55 kidney transplants in 2023, transplants kidneys in-house (including paired kidney donation), and refers/co-manages liver, pancreas, heart, and lung needs through its network. Living donation, as published: living donors can give a kidney, part of a liver, or certain tissues. “Anyone can be a living donor to a service member, veteran or other military beneficiary… it costs the donor nothing” — the recipient's insurance covers donor testing/work-up; a fund covers Fisher House housing, transportation and meals for Walter Reed donors/recipients; donors receive health coverage at Walter Reed for two years after donation. Donors “can go back to being full active duty, fully deployable” (transplant chief, in the context of kidney-donation recovery).",
          who: "Members considering living donation for a fellow service member — the published system is built to make it cost the donor nothing.",
          body: [],
          flags: [],
          links: [{ label: "Walter Reed — Transplant", url: "https://walterreed.tricare.mil/transplant" }],
          source: "defense.gov feature (Apr 29, 2024); Walter Reed NMMC",
        },
      ],
    },
  ],
};
