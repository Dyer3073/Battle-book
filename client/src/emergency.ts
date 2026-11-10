// When It Goes Wrong — the first-24-hours emergency deck.
// Content source of truth: the research pack at
// ~/workspace/military-app/emergency-firstyear/emergency-firstyear.md
// (Part A, researched Nov 9, 2026, official sources only). Every card
// keeps the pack's exact shape: DO FIRST (numbered) → CALL → THEN →
// WATCH OUT. Every phone number is printed exactly as the pack
// verified it on the program owner's own page.
//
// HARD RULE (pack Flag A-6): Military OneSource's phone number was
// deliberately WITHHELD by the pack — it was not captured on an owner
// page during the research pass — so no Military OneSource number
// appears anywhere in this deck, in the First Year Out path, or in
// the printable panels generated from this data. The service is
// referenced by name / by its MilitaryINSTALLATIONS pages only.
//
// Flag A-3: the OCONUS accident card covers ONLY the three location
// sets sourced from official pages (Germany, Türkiye/Izmir,
// Okinawa). It must not be generalized to other countries.

export type EmergencyCall = {
  label: string;
  /** tel: href target, e.g. "tel:+18772727337". */
  tel: string;
  note?: string;
};

export type EmergencyCardData = {
  id: string;
  n: number;
  title: string;
  /** One-line situation framing. */
  intro: string;
  doFirst: string[];
  calls: EmergencyCall[];
  /** Non-phone routes printed with the CALL block (sites, forms). */
  callNotes?: string[];
  then: string[];
  watchOut: string[];
  /** Deep link into an existing Battle Book section, where the pack names one. */
  linkView?: string;
  linkLabel?: string;
  source: string;
};

export const EMERGENCY_DECK_TITLE = "When It Goes Wrong";

export const EMERGENCY_DECK_INTRO =
  "First-24-hours action cards. If someone is in immediate danger, call local emergency services first — in the U.S. 911; overseas, the local emergency number or the installation security forces desk. Every card is short, ordered, and calm: DO FIRST → CALL → THEN → WATCH OUT. Researched Nov 9, 2026 from official sources only; every number was verified on the program owner's own page.";

export const EMERGENCY_CARDS: EmergencyCardData[] = [
  {
    id: "A1",
    n: 1,
    title: "Family emergency at home — death or serious illness of an immediate family member",
    intro:
      "This is the Red Cross message card. Families at home use it to reach a member anywhere in the world; commands use the verified report to decide emergency leave.",
    doFirst: [
      "The family member at home starts the message — the member usually cannot start it faster from downrange.",
      "Have the member's details ready before calling: full legal name, rank, branch of service, date of birth or Social Security number, unit name, and duty phone/address. (MilitaryINSTALLATIONS emergency-assistance pages list exactly this set as what speeds the message.)",
      "Have the facts of the emergency ready: who, what happened, the hospital or funeral home name and city — the Red Cross independently verifies with the hospital/funeral home, and verification is what the commander acts on.",
    ],
    calls: [
      { label: "American Red Cross Hero Care Network: 1-877-272-7337", tel: "tel:+18772727337", note: "Free, 24/7/365. Overseas callers: +1 877-272-7337." },
    ],
    callNotes: ["Online instead: redcross.org/HeroCareNetwork, or the Red Cross Hero Care app."],
    then: [
      "The Red Cross verifies the emergency and sends a confidential report to the member's commanding officer.",
      "The commander — not the Red Cross — decides emergency leave. The Red Cross states this plainly: it does not authorize leave; it verifies, so the commander can make an informed decision.",
      "If money is the problem (last-minute airfare), say so on the same call: the Hero Care Network also connects eligible members and families to the military aid societies (Army Emergency Relief, Navy-Marine Corps Relief Society, Air Force Aid Society, Coast Guard Mutual Assistance).",
      "Emergency-leave framing, as the services publish it: emergency leave is chargeable leave granted for a verified family emergency (death or serious illness/injury of an immediate family member is the core published case); DoDI 1327.06 governs leave program-wide.",
    ],
    watchOut: [
      "Do not pay anyone to “speed up” a Red Cross message. It is free, always.",
      "A message that skips verification details (no hospital name, no unit) moves slower, not faster. Give the facts once, completely.",
    ],
    linkView: "channels",
    linkLabel: "Official Channels",
    source: "redcross.org — Emergency Communication Services (Hero Care Network); installations.militaryonesource.mil emergency-assistance pages (JBLM / NCBC Gulfport)",
  },
  {
    id: "A2",
    n: 2,
    title: "Lost or stolen CAC / military ID card",
    intro: "Report it the same day — reporting starts the revocation of the lost card in DEERS so it cannot be used.",
    doFirst: [
      "Report it the same day to your local security office or your CAC sponsor (chain of command, employer, or sponsoring organization). Reporting starts the revocation of the lost card in DEERS so it cannot be used. (cac.mil: lost/stolen/invalidated cards “shall be revoked in DEERS.”)",
      "If it was stolen, file the police/security forces report your installation requires — the documentation from that report is what the ID card office scans into your DEERS record. (Installation practice; e.g., the NC National Guard ID card office accepts a police report listing the CAC, or a signed counseling statement/memo from the chain of command.)",
      "Gather two unexpired forms of ID (one a government photo ID) — required for the replacement appointment.",
    ],
    calls: [
      { label: "DMDC/DEERS Support Office (DSO): 1-800-538-9552", tel: "tel:+18005389552", note: "TTY/TDD 1-866-363-2883, Mon–Fri 6:00 a.m.–3:30 p.m. Pacific, for DEERS record questions." },
    ],
    callNotes: ["ID Card Office Online (IDCO): idco.dmdc.osd.mil/idco — find the nearest RAPIDS site and book the replacement appointment."],
    then: [
      "Go to the RAPIDS site with your reporting documentation and two IDs; the replacement CAC is issued at the appointment.",
      "If your DEERS information (address, family status) changed while you're there, update it — DEERS accuracy is what keeps TRICARE and benefits working.",
    ],
    watchOut: [
      "Your CAC is U.S. Government property; you are the only person allowed to use it. A “found” CAC after you've reported it is revoked — do not try to use it; turn it in.",
      "Never pay a third-party website to “replace” a military ID. Replacement only happens at a RAPIDS site.",
    ],
    linkView: "installation",
    linkLabel: "My Installation",
    source: "cac.mil — Managing Your ID Card (Next-Generation USID); home.army.mil Redstone Arsenal DEERS/ID Card page; ng.nc.gov NCNG ID Cards & DEERS page",
  },
  {
    id: "A3",
    n: 3,
    title: "Car accident overseas (OCONUS) — Germany / Türkiye / Okinawa only",
    intro:
      "Reference level only — not legal advice. Accident rules are set by the host country and your installation. Only three location sets were sourced from official pages (Germany, Türkiye/Izmir, Okinawa) — do not generalize these examples to other countries. Your installation's own page (MilitaryINSTALLATIONS → your base → Motor Vehicles) carries your local rule.",
    doFirst: [
      "Stop, stay at the scene, and check for injuries. Leaving the scene is an offense in the published guidance for every location checked (Germany, Türkiye, Japan/Okinawa).",
      "Call both police forces: the host-nation police AND the installation military police / security forces. Germany: off a U.S. installation, notify both German police and MPs; on-installation accidents go to MPs. German police emergency: 110.",
      "Türkiye (Izmir): “immediately notify the Security Forces and the Turkish National Police. Do not move the car until directed by responding police agencies.”",
      "Okinawa: notify military police and the Okinawa Prefectural Police; PMO sends an interpreter/investigator to work the scene with Japanese police.",
      "If the car is disabled in traffic, set out the warning triangle where local law requires it (Germany: at least 100 meters behind the vehicle).",
    ],
    calls: [],
    callNotes: [
      "Your installation security forces / PMO desk — the number is on your installation's MilitaryINSTALLATIONS page and in the Battle Book My Installation card; no single worldwide number exists.",
      "Your chain of command, right after the police call.",
      "Your auto insurer, once police have been notified.",
    ],
    then: [
      "Exchange name, license, insurance, and registration information with the other driver; photograph vehicles, damage, and the scene if you can do so safely. The police report is the controlling document.",
      "Get a copy or case number of the police report.",
      "Visit your installation legal assistance office (Staff Judge Advocate / legal services) before signing statements you don't fully understand. The published Germany guidance is explicit: for German authorities you have the right to get a lawyer before making statements, and if asked to sign a report you cannot read, the installation page advises writing on it: “I do not speak or read German and I do not understand this report.”",
      "In Japan/Okinawa, know this before it happens: an accident with injury is treated by Japanese police as a criminal matter (negligent driving causing injury), and the installation SJA legal specialists support SOFA members through questioning.",
    ],
    watchOut: [
      "Germany has a Good Samaritan law: failing to render aid at an accident can itself be fined or punished. Help within your ability.",
      "Do not settle fault or pay cash at the scene. Police report first, insurer and legal assistance after.",
      "SOFA status note (published level): your right to drive and the claims process run under the Status of Forces Agreement with the host country — which is why the installation, not improvisation, is the route.",
    ],
    linkView: "installation",
    linkLabel: "My Installation",
    source: "installations.militaryonesource.mil — USAG Bavaria-Hohenfels & Izmir AS Motor Vehicles pages; dvidshub.net MCIPAC PMO accident guidance; okinawa.usmc-mccs.org SOFA Driver Handbook",
  },
  {
    id: "A4",
    n: 4,
    title: "Arrested or detained by host-nation authorities",
    intro: "You are under the host country's laws, even for things that are legal in the U.S. Consular notification is a treaty right — asking for it is normal and expected, not an escalation.",
    doFirst: [
      "Stay calm and do not resist. You are under the host country's laws, even for things that are legal in the U.S.",
      "Ask the detaining authorities to notify the U.S. embassy or consulate. This is the State Department's #1 instruction: “Ask detaining authorities to notify the U.S. embassy or consulate,” and reach out to the embassy/consulate yourself if you can.",
      "Notify your chain of command or have family notify the command and the embassy — the command, your installation legal office, and the consulate are the three lanes; get all three moving.",
    ],
    calls: [
      { label: "State Department, from the U.S./Canada: 1-888-407-4747", tel: "tel:+18884074747" },
      { label: "State Department, from overseas: +1-202-501-4444", tel: "tel:+12025014444" },
    ],
    callNotes: ["Nearest U.S. embassy or consulate (American Citizens Services)."],
    then: [
      "What the consulate CAN do, as State publishes it: provide a list of local English-speaking attorneys; contact family, friends, or employers (normally with your written permission); visit you on a regular schedule; advocate for adequate medical care and humane treatment; help family send money.",
      "What the consulate CANNOT do: get you out of detention, give legal advice or represent you in court, state guilt or innocence to a court, serve as interpreter, or pay your legal/medical fees.",
      "Military lane: your installation legal assistance / Staff Judge Advocate office and your command are your military points of contact; SOFA status can affect custody and jurisdiction questions, and those determinations are made by the command and legal — not at the roadside. (Published-level framing; no legal advice.)",
    ],
    watchOut: [
      "Do not sign documents in a language you cannot read. Ask for the consulate and an attorney first (the same rule the services publish for accident reports).",
      "Consular notification is a treaty right (Vienna Convention on Consular Relations) — asking for it is normal and expected, not an escalation.",
    ],
    linkView: "rights",
    linkLabel: "Know Your Rights",
    source: "travel.state.gov — Arrest or Detention Abroad; Consular Notification pages",
  },
  {
    id: "A5",
    n: 5,
    title: "A death in the family — casualty assistance routes",
    intro:
      "Two directions, one card, kept at link level: the deep content lives in Battle Book's Honors & Burial and Care & Crisis sections. DoDI 1300.18 governs personnel casualty matters DoD-wide.",
    doFirst: [
      "If your dependent (spouse or child) dies while you are serving: notify your chain of command immediately — the command connects you to your service's casualty assistance office, which is the single office that walks families through benefits, funeral support, and paperwork.",
      "Dependent life-insurance route: coverage is FSGLI (Family Servicemembers' Group Life Insurance); the claim is filed with the Office of Servicemembers' Group Life Insurance (OSGLI), with your casualty assistance office coordinating.",
      "If you are the family and a service member has died: official word comes in person, from a uniformed notification team — never by phone call, text, or social media. If you hear it any other way first, treat it as unconfirmed until the notification team or your member's command confirms it.",
    ],
    calls: [],
    callNotes: [
      "Your assigned Casualty Assistance Officer (Army/Air Force: CAO; Navy and Marine Corps: CACO, Casualty Assistance Calls Officer) is your one point of contact — for benefits claims, funeral arrangements, and travel. Keep the CAO/CACO's name and number; one door, not five.",
    ],
    then: [
      "First money: the death gratuity — $100,000, tax-free — is paid to the member's designated beneficiaries; the CAO/CACO processes it (DD Form 397) ahead of everything else.",
      "Your benefits picture, in one place: the CAO/CACO gives the family an Initial Online Survivor Benefits Report (OSBR) — a personalized report of the family's federal benefits (DoD, VA, Social Security), prepared by DoD's Family Assistance Support Team.",
      "Longer-term income framing (link-level only): SBP (Survivor Benefit Plan — up to 55% of the member's covered retired-pay base, via DFAS) and VA DIC are the two continuing benefits the CAO briefs; eligibility and amounts are case-specific.",
    ],
    watchOut: [
      "No legitimate official will ever ask the family for bank details or payment by phone in the first days. Everything financial runs through the assigned CAO/CACO.",
    ],
    linkView: "honors",
    linkLabel: "Honors & Burial",
    source: "MILPERSMAN 1770-010 (mynavyhr.navy.mil); myarmybenefits.us.army.mil — Casualty and Survivor Assistance; DoD Family Assistance Support Team (OSBR)",
  },
  {
    id: "A6",
    n: 6,
    title: "Lost or stolen passport overseas",
    intro: "Report it right away. Once reported, the passport is cancelled and can never be used again, even if you find it.",
    doFirst: [
      "Report it right away — online, on the phone, or at the embassy. Once reported, the passport is cancelled and can never be used again, even if you find it.",
      "Online report: Form DS-64 at travel.state.gov (“Report your passport lost or stolen”).",
      "If it was stolen, file a local police report in the area where it happened — not mandatory everywhere, but some countries require it to leave on a replacement passport, and it documents the theft.",
    ],
    calls: [
      { label: "National Passport Information Center (NPIC): 1-877-487-2778", tel: "tel:+18774872778", note: "TTY 1-888-874-7793 — the DS-64 report by phone." },
      { label: "State Department, from overseas: +1-202-501-4444", tel: "tel:+12025014444" },
      { label: "State Department, from the U.S./Canada: 1-888-407-4747", tel: "tel:+18884074747" },
    ],
    callNotes: ["Nearest U.S. embassy or consulate — replacements are issued in person only; embassies can issue an emergency limited-validity passport for urgent travel."],
    then: [
      "Bring to the embassy: Form DS-11 (passport application) + DS-64, proof of citizenship and photo ID if you have them (a copy/photo of the lost passport speeds this up — which is why State tells travelers to carry a copy), a passport photo, and your travel itinerary. Do not sign the forms until the consular officer tells you to.",
      "Tell your command (if you're traveling on orders or leave overseas) and your airline — your return booking may need the new passport number.",
    ],
    watchOut: [
      "A reported passport is dead forever. Find it later? Mail it to State's Consular Lost and Stolen Passport Unit (address on travel.state.gov); do not try to travel on it.",
      "Note for military travelers: a no-fee/official passport and a tourist passport are different documents — report and replace the one you lost through the same DS-64 route, and tell your command which type it was.",
    ],
    linkView: "oconus",
    linkLabel: "OCONUS Family Papers",
    source: "travel.state.gov — Lost or Stolen Passport Abroad / Report Your Passport Lost or Stolen / Smart Traveler Tips",
  },
  {
    id: "A7",
    n: 7,
    title: "Wallet stolen / suspected identity theft",
    intro: "Freeze first, report second, then work the recovery plan. Placing a freeze or an alert is a free federal right — do it yourself at the bureaus.",
    doFirst: [
      "Call your banks and card issuers now — close or freeze the compromised cards and accounts so no new charges can be added without your agreement.",
      "Report it to the FTC at IdentityTheft.gov — the site builds your official Identity Theft Report and a personal recovery plan, step by step.",
      "File a report with local police or installation security forces if cards, CAC, or ID documents were taken (and follow the CAC card in this deck if the CAC was in the wallet).",
    ],
    calls: [],
    callNotes: [
      "Credit freeze (strongest, free): place it with each of the three nationwide bureaus — Equifax, Experian, TransUnion. A freeze blocks new creditors from pulling your file until you lift it; placing and lifting are free by federal law, and a freeze does not affect your credit score.",
      "Active duty alert (servicemember-specific, free): contact one bureau — it must tell the other two. The alert makes businesses verify your identity before granting credit in your name; it lasts 1 year and can be renewed for the length of a deployment. It also removes you from prescreened credit-offer marketing lists for 2 years.",
      "Free credit monitoring: active-duty members (and activated Guard members) are entitled to free credit monitoring from the bureaus — sign up with each bureau.",
    ],
    then: [
      "Work the IdentityTheft.gov recovery plan: dispute fraudulent accounts in writing, keep copies of everything, log every call.",
      "Replace documents: state driver's license via your state DMV; passport via the passport card in this deck if it was taken; CAC via the CAC card if it was taken.",
      "Tell your command's security manager if your personal data was exposed — and if the theft touches a clearance, self-report per your agency's rules (Battle Book: Security Clearance Center).",
    ],
    watchOut: [
      "Paying a “credit repair” or “identity protection” company to place a freeze is paying for a free federal right. Do it yourself at the bureaus.",
      "An alert or freeze stops new accounts; it does not clean up fraud on accounts you already have — that cleanup is the recovery plan in step 1.",
    ],
    linkView: "clearance",
    linkLabel: "Security Clearances",
    source: "FTC — Identity Theft: Military Personnel & Families (Aug 2023); consumerfinance.gov (CFPB) identity-theft guidance; IdentityTheft.gov",
  },
  {
    id: "A8",
    n: 8,
    title: "Medical emergency overseas — TRICARE Overseas call centers",
    intro:
      "Life or limb first: call the local emergency number or go to the nearest emergency room. Do not delay care to sort out coverage — as soon as you can, call your TOP Regional Call Center: they coordinate authorization, find network care, arrange medical evacuation when needed, and open your case.",
    doFirst: [
      "Life or limb first: call the local emergency number or go to the nearest emergency room. Do not delay care to sort out coverage.",
      "As soon as you can, call your TOP Regional Call Center (below) — they coordinate authorization, find network care, arrange medical evacuation when needed, and open your case.",
    ],
    calls: [
      { label: "Eurasia-Africa (overseas): +44-20-8762-8384", tel: "tel:+442087628384", note: "Stateside: 1-877-678-1207 · Medical Assistance line: +44-20-8762-8133." },
      { label: "Eurasia-Africa (stateside): 1-877-678-1207", tel: "tel:+18776781207" },
      { label: "Eurasia-Africa Medical Assistance: +44-20-8762-8133", tel: "tel:+442087628133" },
      { label: "Asia-Pacific — Singapore: +65-6339-2676", tel: "tel:+6563392676", note: "Stateside: 1-877-678-1208 · Medical Assistance +65-6338-9277 · Sydney +61-2-9273-2710 · stateside 1-877-678-1209." },
      { label: "Asia-Pacific (stateside): 1-877-678-1208", tel: "tel:+18776781208" },
      { label: "Asia-Pacific Medical Assistance: +65-6338-9277", tel: "tel:+6563389277" },
      { label: "Asia-Pacific — Sydney: +61-2-9273-2710", tel: "tel:+61292732710", note: "Stateside: 1-877-678-1209." },
      { label: "Asia-Pacific Sydney (stateside): 1-877-678-1209", tel: "tel:+18776781209" },
      { label: "Latin America & Canada (overseas): +1-215-942-8393", tel: "tel:+12159428393", note: "Stateside: 1-877-451-8659 · Medical Assistance +1-215-942-8320." },
      { label: "Latin America & Canada (stateside): 1-877-451-8659", tel: "tel:+18774518659" },
      { label: "Latin America & Canada Medical Assistance: +1-215-942-8320", tel: "tel:+12159428320" },
    ],
    callNotes: [
      "TRICARE Overseas Program (TOP) Regional Call Centers, International SOS, 24/7.",
      "Email (non-urgent): tricareoverseas@top.internationalsos.com",
      "Country-specific numbers: tricare-overseas.com/contact-us (toll-free lines are not available in every country or on every mobile carrier).",
    ],
    then: [
      "Keep every bill, receipt, and discharge paper — overseas care often runs pay-first, claim-later; you file the claim with documentation through the TOP claims route.",
      "Tell your command — a hospitalization overseas is also a personnel event (and if it becomes serious, the casualty system in the death-in-the-family card is how family notification works).",
      "Family at home with questions: the same regional call center is the door; do not rely on the hospital's billing office for TRICARE answers.",
    ],
    watchOut: [
      "Paying a local “agent” to arrange your medical care or evacuation is not part of the program. The Regional Call Center is the only coordinator TRICARE Overseas publishes.",
      "Coverage questions after the fact go to the call center, not the provider's collections office.",
    ],
    linkView: "healthhq",
    linkLabel: "Health Care & TRICARE",
    source: "tricare-overseas.com — TOP Contact Us beneficiary document (Apr 2026) and TOP Overview Guide & FAQ (Sep 2026)",
  },
];
