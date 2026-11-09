// Mail Call — static reference data transcribed from the researched
// mail-call pack (~/workspace/military-app/mail-call/mail-call.md,
// researched November 8, 2026). Official sources only: USPS, the
// Military Postal Service Agency (MPSA) via official Army channels,
// Military OneSource (DoD), the USO, and the American Red Cross.
// Summaries are the pack's own words; no facts were added and no flag
// was softened. Every URL is the pack's, byte-for-byte — none was
// constructed or guessed.
//
// Fidelity rules baked into this data:
// - USPS's three example addresses are reproduced EXACTLY as the pack
//   prints them (see EXAMPLE_ADDRESSES).
// - The holiday table is the 2026 table ONLY, and its group heading
//   carries the year; the pack's ANNUAL banner travels with it.
// - No prices anywhere — the pack prints none. The single exception is
//   the Postal Store's $0.00 listing for the free Military Care Kit,
//   flagged as a changeable product listing exactly as the pack flags
//   it.
// - The pack's §6 exclusions stay out: the discontinued national
//   Holiday Mail for Heroes P.O. Box address is never printed, the
//   viral Walter Reed routing is never printed as a route, no "Any
//   Service Member" route is suggested, and no third-party
//   stranger-charity is listed — the only stranger route verified in
//   the pack is the USO's unit-distribution model.

export type MailLink = { label: string; url: string };

export type MailEntry = {
  name: string;
  /** Short kind label rendered as a badge (the source program/office). */
  kind?: string;
  summary: string;
  /** Pack lists rendered as bullets. */
  bullets?: string[];
  /** The pack's honesty flag / caution, rendered in an amber box. */
  flag?: string;
  /** Extra label rendered as a red badge (hard rules and cautions). */
  alertBadge?: string;
  links: MailLink[];
};

export type MailGroup = {
  title: string;
  /** Pack framing note for the group. The 2026 deadlines group renders
   * its note as the prominent ANNUAL banner. */
  note?: string;
  noteLinks?: MailLink[];
  entries: MailEntry[];
};

export const MAIL_STANDING_NOTE =
  "Everything in this section comes from official sources only — USPS, the Military Postal Service Agency (MPSA) via official Army channels, Military OneSource (DoD), the USO, and the American Red Cross — and every card links its source. No postage prices are printed here: rates change (USPS also applies temporary holiday pricing), so the pack behind this section states none. The one dollar figure is the Postal Store's $0.00 listing for the free supply kit — the packaging is free; the postage is not.";

/* ------------------------------ Shared links ----------------------------- */

const USPS_MILITARY: MailLink = {
  label: "USPS — Military & Diplomatic Mail",
  url: "https://www.usps.com/ship/apo-fpo-dpo.htm",
};
const USPS_RESTRICTIONS: MailLink = {
  label: "USPS — International Shipping Restrictions: What You Can Mail Internationally",
  url: "https://www.usps.com/international/shipping-restrictions.htm",
};
const MOS_CARE_PACKAGE: MailLink = {
  label: "Military OneSource — Sending a Military Care Package",
  url: "https://www.militaryonesource.mil/military-basics/extended-family-friend/sending-a-military-care-package/",
};
const USPS_HOLIDAY: MailLink = {
  label: "USPS — 2026 Holiday Shipping Dates for Military Mail",
  url: "https://www.usps.com/holiday/holiday-shipping-dates.htm",
};
const USPS_LITEBLUE: MailLink = {
  label: "USPS LiteBlue holiday guidance (carries the USPS and Red Cross statements)",
  url: "http://liteblue.usps.gov/news/morning-report/archive/2019/mr1205.pdf",
};

/* --------------------- Group 1 — How military mail works ----------------- */

export const ADDRESSING_RULE =
  "Never write the foreign city or country. USPS: “To prevent mail from entering foreign mail networks, do not include city or country names in APO/FPO/DPO shipping addresses.” The two-letter code after APO/FPO/DPO (AA, AE, or AP) does the geographic routing instead. The Military Postal Service Agency makes the same point in an official Army release: adding foreign cities, countries, or installation names diverts mail into the international system and causes delays.";

/** USPS's own example addresses, copied exactly as the pack prints them. */
export const EXAMPLE_ADDRESSES: { heading: string; lines: string[] }[] = [
  {
    heading: "Army/Air Post Office (APO)",
    lines: ["PFC JOHN DOE", "PSC 3 BOX 4120", "APO AE 09021"],
  },
  {
    heading: "Fleet Post Office (FPO)",
    lines: ["SEAMAN JOSEPH SMITH", "UNIT 100100 BOX 4120", "FPO AP 96691"],
  },
  {
    heading: "Diplomatic Post Office (DPO)",
    lines: ["JOHN ADAMS", "UNIT 8400 BOX 0000", "DPO AE 09498-0048"],
  },
];

/* --------------------- Group 3 — 2026 holiday deadlines ------------------ */

/** The pack's ANNUAL banner for the deadline table — rendered
 * prominently above it, exactly as the pack frames it. */
export const HOLIDAY_ANNUAL_BANNER =
  "⚠ ANNUAL — 2026 SEASON ONLY. The table below is the 2026 table. USPS announced its recommended 2026 holiday mailing and shipping dates on September 22, 2026, and USPS/MPSA publish a new table every fall — these dates must be refreshed every year and must never be read as permanent. The dates are recommended, not guaranteed: USPS calls them “recommended send-by dates for expected delivery before December 25,” and actual delivery date may vary.";

/** One row of the pack's USPS 2026 military-mail deadline table. */
export type HolidayRow = {
  addressedTo: string;
  groundAdvantage: string;
  firstClass: string;
  priority: string;
  pmems: string;
};

export const HOLIDAY_ROWS: HolidayRow[] = [
  {
    addressedTo: "APO/FPO/DPO AE ZIPs 090-092",
    groundAdvantage: "Wed, Nov. 4, 2026",
    firstClass: "Wed, Dec. 9, 2026",
    priority: "Wed, Dec. 9, 2026",
    pmems: "Wed, Dec. 16, 2026",
  },
  {
    addressedTo: "APO/FPO/DPO AE ZIP 093",
    groundAdvantage: "Wed, Nov. 4, 2026",
    firstClass: "Wed, Dec. 9, 2026",
    priority: "Wed, Dec. 9, 2026",
    pmems: "N/A — not available to ZIP 093",
  },
  {
    addressedTo: "APO/FPO/DPO AE ZIPs 094-099",
    groundAdvantage: "Wed, Nov. 4, 2026",
    firstClass: "Wed, Dec. 9, 2026",
    priority: "Wed, Dec. 9, 2026",
    pmems: "Wed, Dec. 16, 2026",
  },
  {
    addressedTo: "APO/FPO/DPO AE ZIP 340",
    groundAdvantage: "Wed, Nov. 4, 2026",
    firstClass: "Wed, Dec. 9, 2026",
    priority: "Wed, Dec. 9, 2026",
    pmems: "Wed, Dec. 16, 2026",
  },
  {
    addressedTo: "APO/FPO/DPO AP ZIPs 962-966",
    groundAdvantage: "Wed, Nov. 4, 2026",
    firstClass: "Wed, Dec. 9, 2026",
    priority: "Wed, Dec. 9, 2026",
    pmems: "Wed, Dec. 16, 2026",
  },
];

export const HOLIDAY_TABLE_NOTE =
  "Recommended send-by dates for expected delivery before December 25, 2026 — Military Mail (USPS).";

export const HOLIDAY_PMEMS_FLAG =
  "PMEMS is not universal: “PMEMS is available to selected military/diplomatic Post Offices™. Check with your local Post Office to determine if this service is available to an APO/FPO/DPO address.” — USPS. It is also not available to ZIP 093 (see the table).";

/* ------------------------------- The groups ------------------------------ */

export const MAIL_GROUPS: MailGroup[] = [
  /* ---------------------------------------------------------------- */
  /* Group 1 — How Military Mail Works                                 */
  /* ---------------------------------------------------------------- */
  {
    title: "How Military Mail Works",
    entries: [
      {
        name: "APO / FPO / DPO — What the Letters Mean",
        kind: "USPS",
        summary:
          "USPS's own military mail page labels its three address types “Army/Air Post Office (APO),” “Fleet Post Office (FPO),” and “Diplomatic Post Office (DPO)” — the military address system that delivers to members overseas at domestic rates:",
        bullets: [
          "APO — Army/Air Post Office. Used by Army and Air Force personnel overseas.",
          "FPO — Fleet Post Office. Used by Navy and Marine Corps personnel, including aboard ships.",
          "DPO — Diplomatic Post Office. Used by personnel at U.S. embassies and consulates.",
        ],
        links: [USPS_MILITARY],
      },
      {
        name: "Domestic Prices, Overseas Delivery",
        kind: "USPS / MPSA",
        summary:
          "“Ship to an APO/FPO/DPO and you'll pay domestic prices,” even though the mail is going overseas. How it flows: you hand the package to USPS like domestic mail; USPS moves it as domestic mail to a gateway, and the Military Postal System — operated as “an extension of the United States Postal Service (USPS)… beyond the boundaries of U.S. sovereignty” under MPSA oversight — carries it the rest of the way to the unit.",
        links: [
          USPS_MILITARY,
          {
            label: "U.S. Army School of Adjutant General / MPSA mission statement",
            url: "https://ssilrc.army.mil/resources/AGS/hrpo/lessons/C_2/notes_1.html",
          },
        ],
      },
      {
        name: "Address It to a Specific Person — Always",
        kind: "USPS",
        summary:
          "Each shipment needs “the recipient's name, rank, and unit, and the APO/FPO/DPO address with the 9-digit ZIP Code™. Always include a return address. Mail and shipments must be addressed to a specific person; addressing to 'Any Service Member' is no longer permitted.”",
        links: [USPS_MILITARY],
      },
      {
        name: "USPS's Example Addresses — Copied Exactly",
        kind: "USPS",
        summary:
          "These are USPS's own example addresses, reproduced exactly as USPS prints them — the shape every APO/FPO/DPO address follows. The rendered examples appear on this card, under this text.",
        links: [USPS_MILITARY],
      },
      {
        name: "DPO Size Limit",
        kind: "USPS",
        summary:
          "Packages to a DPO may not exceed 27 in. length × 14 in. width × 14 in. height.",
        links: [USPS_MILITARY],
      },
      {
        name: "Set Expectations — It's Not Amazon",
        kind: "Military OneSource",
        summary:
          "“Delivery time can vary, typically taking two weeks. For holidays, allow about five weeks for delivery.” And even after a package reaches its destination area, “a service member might not receive it immediately due to deployment or other circumstances” — unit operations can delay the last leg further. USPS's holiday page carries the same caution for its deadline table: “Actual delivery date may vary and is based on origin, destination, Post Office™ acceptance time, and other conditions.”",
        links: [MOS_CARE_PACKAGE, USPS_HOLIDAY],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 2 — The Free Kit                                            */
  /* ---------------------------------------------------------------- */
  {
    title: "The Free Kit",
    entries: [
      {
        name: "The Free USPS Military Care Kit",
        kind: "USPS Postal Store",
        summary:
          "USPS still lists the free Military Care Kit in The Postal Store (price $0.00, catalogued as “Military Care Kit — 6 Boxes, Tape, Labels”). Contents, exactly as the Postal Store lists them:",
        bullets: [
          "2 Priority Mail APO/FPO Flat Rate Boxes, 12\" × 12\" × 5-1/2\"",
          "2 Priority Mail Medium Flat Rate Boxes (top loading), 11\" × 8-1/2\" × 5-1/2\"",
          "2 Priority Mail Medium Flat Rate Boxes (side loading), 13-5/8\" × 11-7/8\" × 3-3/8\"",
          "1 roll of Priority Mail tape",
          "6 Priority Mail address labels",
          "6 Customs Form Envelopes",
        ],
        flag: "⚠ Kit contents are a Postal Store product listing and can change when USPS revises the kit — recheck the product page before relying on the contents list (checked November 2026). Ordering: order it online from The Postal Store, like the free APO/FPO Large Flat Rate Boxes, which USPS says your mail carrier delivers to your door at no charge. Military OneSource independently recommends the kit — “The best packaging is a free Military Care Kit from the U.S. Postal Service, which includes priority mail boxes, tape and address labels. Note: The packaging is free, but the postage is not.”",
        links: [
          {
            label: "USPS Postal Store — Military Care Kit",
            url: "https://store.usps.com/store/product/military-care-kit-P_MILITARYKIT",
          },
          USPS_MILITARY,
          MOS_CARE_PACKAGE,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 3 — Holiday Deadlines, 2026 Season                          */
  /* ---------------------------------------------------------------- */
  {
    title: "Holiday Deadlines — 2026 Season",
    note: HOLIDAY_ANNUAL_BANNER,
    noteLinks: [
      USPS_HOLIDAY,
      {
        label: "USPS Postal Bulletin — 2026 Holiday Mailing and Shipping Dates",
        url: "https://about.usps.com/postal-bulletin/2026/pb22714/html/cover.htm",
      },
    ],
    entries: [
      {
        name: "2026 Send-By Dates — Military Mail",
        kind: "USPS",
        summary:
          "USPS's recommended send-by dates for expected delivery before December 25, 2026, by the ZIP your APO/FPO/DPO address carries. The full table is rendered on this card, under this text.",
        flag: HOLIDAY_PMEMS_FLAG,
        links: [USPS_HOLIDAY],
      },
      {
        name: "The Ground Advantage Date Is the Trap",
        kind: "USPS / Military OneSource",
        summary:
          "For military addresses, the USPS Ground Advantage® date falls on November 4 — five weeks before the First-Class/Priority date. Anyone mailing a Christmas box Ground Advantage in December has already missed the recommended window. Military OneSource's rule of thumb, independent of the table: “For holidays, allow about five weeks for delivery.”",
        links: [USPS_HOLIDAY, MOS_CARE_PACKAGE],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 4 — Rules                                                   */
  /* ---------------------------------------------------------------- */
  {
    title: "Rules",
    entries: [
      {
        name: "Prohibited — May Not Be Sent",
        kind: "USPS",
        summary:
          "USPS states that shipments to APO/FPO/DPO addresses “are treated like domestic mail, but they are still subject to those countries' laws,” and publishes this list of items that may not be sent from the United States to any country — reproduced as categories, exactly as USPS lists them:",
        bullets: [
          "Aerosols",
          "Air Bags",
          "Alcoholic Beverages",
          "Ammunition",
          "Cigarettes",
          "Dry Ice",
          "Explosives",
          "Gasoline",
          "Hemp-based products (including cannabidiol [CBD])",
          "Marijuana (medical or otherwise)",
          "Mercury — liquid, and mercury vapor in devices like compact fluorescent bulbs and older thermometers/barometers/switches",
          "Nail Polish",
          "Perfumes (containing alcohol)",
          "Poisons",
        ],
        links: [USPS_RESTRICTIONS],
      },
      {
        name: "Lithium Batteries — Installed in Equipment Only",
        kind: "USPS",
        summary:
          "“Only lithium cells and batteries that are properly installed in the equipment they are intended to operate may be mailed internationally or to APO/FPO/DPO locations if the destination country and APO/FPO/DPO permit their receipt.” Prohibited:",
        bullets: [
          "Batteries packed with but not installed in equipment",
          "Batteries sent separately from equipment — loose spares and power banks",
          "Damaged or recalled batteries",
          "Pre-owned/damaged/defective devices containing lithium batteries",
        ],
        flag: "The practical translation: the phone/charger cable is fine loose; the spare power bank is not.",
        links: [USPS_RESTRICTIONS],
      },
      {
        name: "Perishables — Mailable, At Your Risk",
        kind: "USPS",
        summary:
          "“Perishable items are materials that can deteriorate in the mail, such as live animals, food, and plants. Permissible perishable items are sent at the mailer's own risk. These items must be specially packaged and mailed so that they arrive before they begin to deteriorate.” Every destination country adds its own rules on top — USPS directs senders to its Individual Country Listings. For a deployed address, the operative check is the recipient's ZIP: USPS's “APO/FPO/DPO Restrictions Tool” gives the restrictions for a specific military ZIP, and Click-N-Ship “will alert you to some of the prohibitions and restrictions based on the 5-digit Military Post Office ZIP Code™ you're shipping to” — but “you are responsible for ensuring your package complies.”",
        links: [USPS_RESTRICTIONS, USPS_MILITARY],
      },
      {
        name: "Customs Forms — PS Form 2976 / 2976-A",
        kind: "USPS",
        summary:
          "Packages to APO/FPO/DPO addresses need a customs declaration even though postage is domestic. Under the current DMM standard (revised effective July 13, 2025), a mailpiece to an APO/FPO/DPO weighing 16 ounces or more, or containing goods (anything other than documents) regardless of weight, must bear a properly completed computer-generated PS Form 2976 (Customs Declaration, CN 22) or PS Form 2976-A (Customs Declaration and Dispatch Note, CP 72). Priority Mail Express to/from APO/FPO/DPO always requires a customs form. Handwritten customs forms are gone: since March 13, 2020, USPS no longer accepts packages bearing handwritten PS Form 2976 / 2976-A / 2976-B. Two ways to comply: create the form online (Click-N-Ship prints label + customs together), or, at a retail counter, fill out PS Form 2976-R — the worksheet the clerk uses to enter your information and generate the printed form. Describe contents in detail: USPS notes customs forms now require “more-detailed package descriptions… for all countries” — “food” is not a description; “2 bags beef jerky, 1 box granola bars” is. Military OneSource tells families the same thing in plain language: “Complete the customs forms. You'll need to fill out customs forms for any shipping outside the United States.”",
        links: [
          {
            label: "USPS Postal Bulletin — DMM Revision: Customs Declaration Forms",
            url: "https://about.usps.com/postal-bulletin/2025/pb22675/html/updt_002.htm",
          },
          {
            label: "USPS Postal Bulletin — PS Form 2976-R Acceptance Policies (Including Military Mail)",
            url: "https://about.usps.com/postal-bulletin/2020/pb22541/html/updt_008.htm",
          },
          USPS_MILITARY,
          MOS_CARE_PACKAGE,
        ],
      },
      {
        name: "Packaging Guidance",
        kind: "Military OneSource / USPS",
        summary: "Official packaging guidance from Military OneSource and USPS:",
        bullets: [
          "“Seal everything. Individually seal items in plastic bags with zip locks, if possible, to protect items from the elements or to keep them from leaking out.” — Military OneSource",
          "Put a spare address card inside: “It's a good idea to include a second piece of paper with the address inside the box, just in case something happens to damage the label on the outside… include both the destination address and your return address on the spare copy.” — USPS",
          "Heat is real: “Outdoor conditions can affect the contents of your package. Desert temperatures typically exceed 100 degrees, which can damage delicate goods like electronics.” — USPS (This is also why Military OneSource's snack list specifies nonmelting candy.)",
          "Free pickup exists: you can print your label at home and “schedule a free Package Pickup and your mail carrier will pick it up during normal business hours.” — USPS",
          "Don't send anything you can't lose: “Don't send valuables or irreplaceable items — sometimes packages get lost.” — Military OneSource",
        ],
        links: [MOS_CARE_PACKAGE, USPS_MILITARY],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 5 — What to Send / What Not to Send                         */
  /* ---------------------------------------------------------------- */
  {
    title: "What to Send / What Not to Send",
    note: "All content guidance in this group is from Military OneSource (DoD) and the USO only.",
    entries: [
      {
        name: "Send — Military OneSource's List",
        kind: "Military OneSource",
        summary:
          "From Military OneSource's “Sending a Military Care Package.” The USO's own care packages — built from what deployed members request — contain the same core: “healthy snacks and treats, as well as travel-sized hygiene products.”",
        bullets: [
          "Toiletries for skin, hair, or dental care — razors, toothpaste, shampoo, lip balm, lotion.",
          "Shelf-stable snacks — protein bars, nuts, cookies, beef jerky, nonmelting candy, trail mix, “in packaging that isn't easily crushed”; single-serving drink-mix packets.",
          "Homemade foods like cookies — nonperishable and “packaged to keep for weeks, if needed.”",
          "Medical care items — basic pain relievers, sunblock, hand sanitizer, a first-aid kit, contact solution, tissues, feminine hygiene products.",
          "Wearables — socks, underwear, sunglasses, shower flip-flops.",
          "Games — playing cards/poker chips, crosswords, puzzle books, a sports ball.",
          "Stationery — paper, envelopes, address labels, pens. “Skip the stamps — they won't need them.”",
          "Photos, handwritten notes, or children's artwork.",
          "Seasonal items for a birthday or holiday.",
          "Relaxation items — a blank journal, adult coloring book, stress ball, a novel in their favorite genre.",
        ],
        links: [
          MOS_CARE_PACKAGE,
          {
            label: "USO — 9 Facts You Might Not Know About the USO and the NFL",
            url: "https://mobile.uso.org/stories/21",
          },
          {
            label: "USO Intermountain — Care Packages",
            url: "https://intermountain.uso.org/programs/care-packages",
          },
        ],
      },
      {
        name: "Don't Send",
        kind: "USPS / Military OneSource",
        summary: "Keep these out of the box:",
        bullets: [
          "Anything on the USPS prohibited list in the Rules group above (alcohol, aerosols, cigarettes, loose lithium batteries/power banks, nail polish, alcohol-based perfume, CBD/hemp, etc.).",
          "Perishables that can't survive the trip — mailable at your own risk, and transit typically takes two weeks before unit-level delays.",
          "Valuables or irreplaceable items.",
        ],
        links: [USPS_RESTRICTIONS, MOS_CARE_PACKAGE],
      },
      {
        name: "No Care Packages to Boot Camp — Send a Plain Letter",
        kind: "Military OneSource",
        alertBadge: "BOOT CAMP",
        summary:
          "“If your service member is at boot camp, skip the care package and send them a letter instead” — branches discourage packages during basic training; duplicates from home are stored until graduation. A plain letter (plain paper and envelope, photos OK, don't decorate the envelope) is the right move; plan on two weeks for letter delivery.",
        links: [MOS_CARE_PACKAGE],
      },
      {
        name: "“Any Service Member” Mail Is No Longer Permitted",
        kind: "USPS",
        alertBadge: "NOT PERMITTED",
        summary:
          "There is no any-soldier-style route through the mail anymore, and official sources are unambiguous. Mail “must be addressed to a specific person; addressing to 'Any Service Member' is no longer permitted.” Programs that let people send mail to service members unknown to them were discontinued following the September 11, 2001 attacks; mail addressed “Any Service Member” / “Any Soldier” will not be accepted. The supported way to reach troops you don't know is through an organization that distributes to units — see the Letters & Morale Routes group below. The USO states it plainly in its FAQ: “The USO does not have names or addresses of individuals serving overseas. Care Packages are sent to units in the field, at departure locations, and through some USO centers.”",
        links: [
          USPS_MILITARY,
          USPS_LITEBLUE,
          { label: "USO — Frequently Asked Questions", url: "https://www.uso.org/faq" },
        ],
      },
      {
        name: "Those Viral Addresses Are Discontinued",
        kind: "USPS / American Red Cross",
        alertBadge: "DISCONTINUED",
        summary:
          "Shared posts still circulate two old routings — the former national Holiday Mail for Heroes P.O. Box and the viral “recovering American soldier” routing to Walter Reed. Both are discontinued and mail sent to them is not delivered: there is no longer a national Holiday Mail for Heroes P.O. Box, Walter Reed's Georgia Avenue campus closed years ago, and generically addressed mail is not accepted. The addresses themselves are deliberately not printed here — use the live routes in the Letters & Morale Routes group below instead.",
        links: [
          USPS_LITEBLUE,
          {
            label: "American Red Cross — How You Can Provide Holiday Help to Military Families",
            url: "https://www.redcross.org/about-us/news-and-events/news/2020/how-you-can-provide-holiday-help-to-military-families.html",
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Group 6 — Letters & Morale Routes                                 */
  /* ---------------------------------------------------------------- */
  {
    title: "Letters & Morale Routes",
    note: "No deployed contact required. Only programs verified on a current official page are listed here.",
    entries: [
      {
        name: "USO Care Package Program / USO Wishbook",
        kind: "USO",
        summary:
          "The USO Care Package Program is active: packages of snacks and toiletries go to deployed members, members in disaster response, and members in transit; in 2025 the USO reports delivering “more than 435,000 USO Care Packages to troops all around the world.” How an individual participates: donate to fund USO Care Packages, or use USO Wishbook to choose a symbolic gift (e.g., a care package) from its catalog. The USO is explicit that these are symbolic/designated-fund gifts — “we are unable to send individual orders to specific military members.” This is a fund one route, not a mail one route: you do not get an address; the USO distributes to units — the USO has no individuals' names or addresses.",
        links: [
          {
            label: "USO — How Can I Support the Troops? 5 Ways You Can Help Deployed Soldiers",
            url: "https://www.uso.org/stories/2853-how-can-i-support-the-troops-5-ways-you-can-help-deployed-soldiers",
          },
          { label: "USO — Frequently Asked Questions", url: "https://www.uso.org/faq" },
        ],
      },
      {
        name: "American Red Cross — Holidays for Heroes (Local Chapters)",
        kind: "American Red Cross",
        summary:
          "The Red Cross's former national card program, Holiday Mail for Heroes, no longer exists in its old form. The Red Cross renamed and localized it as Holidays for Heroes: “The American Red Cross has annually supported deployed U.S. service members through the previously titled, 'Holiday Mail for Heroes' program… That is why the program was expanded to 'Holidays for Heroes.' Now, in addition to letters, the American public can support these communities in a variety of ways” — with activities set by local Red Cross chapters to meet local Armed Forces community needs. There is no national P.O. Box anymore: “There is no longer a national Holiday Mail for Heroes P.O. Box to which cards are sent. Please contact your local Red Cross office for details.” Route to your local Red Cross chapter's Holidays for Heroes activities.",
        links: [
          {
            label: "American Red Cross — How You Can Provide Holiday Help to Military Families",
            url: "https://www.redcross.org/about-us/news-and-events/news/2020/how-you-can-provide-holiday-help-to-military-families.html",
          },
          USPS_LITEBLUE,
        ],
      },
      {
        name: "Letters to Your Own People",
        kind: "Military OneSource",
        summary:
          "For recruits in basic training, the letter is the program: plain paper, plain envelope, photos allowed, no decorated envelopes, ~two-week delivery. And stationery in the box is how you get letters back: paper, envelopes, address labels, pens — no stamps needed.",
        links: [MOS_CARE_PACKAGE],
      },
    ],
  },
];
