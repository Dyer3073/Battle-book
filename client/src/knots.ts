// Knots — the Field Tools knot library. Content source of truth: the
// research pack at ~/workspace/military-app/knots/knots.md (compiled
// 2026-11-09 from nine official U.S. military publications). Every
// entry below is named or taught in one of those swept sources; famous
// knots no swept source teaches live in NOT_SOURCED_REGISTER, never in
// the library. Steps use ONLY the pack §4 terminology (working end /
// standing part / bight / loop / round turn / dress / set / pigtail).
// Tail standards print per source, never harmonized: mountaineering
// ≥4 in; MARSOC >6 in. Strength figures appear only where the pack
// attributes them. No numeric Prusik diameter ratio exists in the
// swept sources — the rule prints as "smaller diameter than the host
// rope." Diagrams are ORIGINAL vector panels drawn from these step
// texts (pack §2) — see KnotDiagram.tsx; nothing is traced or adapted
// from any commercial knot site or manual figure.

export type KnotFamilyKey =
  | "stoppers"
  | "bends"
  | "hitches"
  | "loops"
  | "bindings"
  | "shortening"
  | "specialty";

export const KNOT_FAMILIES: { key: KnotFamilyKey; name: string; blurb: string }[] = [
  { key: "stoppers", name: "Stoppers", blurb: "End-of-rope knots — a knob at the end so the rope can't unlay, slip through, or unreeve" },
  { key: "bends", name: "Bends", blurb: "Joining knots — two ropes (or a rope and an eye) made into one line" },
  { key: "hitches", name: "Hitches", blurb: "Knots that fasten a rope to an object, a hook, or another rope — including the friction hitches" },
  { key: "loops", name: "Loops", blurb: "Fixed and running loops — at the end of a rope, in the middle, and around the body" },
  { key: "bindings", name: "Bindings & Lashings", blurb: "Spars lashed together, a block hung, and whipping — the binding technique that is not a knot" },
  { key: "shortening", name: "Shortening", blurb: "Taking up slack — or taking the load off a weak spot — without cutting the rope" },
  { key: "specialty", name: "Specialty", blurb: "Tightening systems, anchor systems, and special-purpose knots from the mountaineering manuals" },
];

/** Diagram archetypes — the original-art panel renderer draws one of
 * these rope/object layouts per entry, progressing step by step. */
export type KnotDiagramKind =
  | "end-knot" // stopper tied at a rope end
  | "strands" // wall & crown — the rope's own unlaid strands
  | "bend" // two ropes joined
  | "webbing-bend" // two flat straps joined
  | "hitch-post" // hitch around a post / spar / timber
  | "hitch-plank" // scaffold hitch — plank in a rope cradle
  | "hitch-hook" // hook hitch (blackwall)
  | "hitch-ring" // fisherman's bend on a ring
  | "friction-host" // friction hitch on a host rope (prusik family)
  | "stopper-host" // stopper hitch on a loaded line
  | "girth" // girth hitch — sling around an anchor bar
  | "carabiner" // hitch tied in one carabiner (munter family)
  | "carabiner-pair" // guarde — two carabiners
  | "loop-end" // fixed loop at a rope end (bowline family)
  | "loop-multi" // two / three fixed loops
  | "loop-mid" // fixed loop in the middle of a rope
  | "coil-body" // bowline on a coil — torso outline with body wraps
  | "lashing-cross" // square lashing — crossed spars
  | "lashing-parallel" // shears lashing — parallel spars
  | "lashing-block" // block lashing — spar + tackle block
  | "whipping" // twine wrapped around a rope end
  | "sheepshank" // S-fold shortening
  | "anchor-wraps" // tensionless anchor — wraps down a tree
  | "hook-eyes" // cat's-paw — two eyes over a hook
  | "rappel-seat"; // tied harness system on a hip outline

export type KnotMethod = {
  /** Method label for two-method entries ("Method A — end of the rope"). */
  label?: string;
  steps: string[];
};

export type KnotEntry = {
  id: string;
  name: string;
  /** Printed aliases (manual / service names). */
  aliases: string[];
  /** Search-only terms, never printed as manual names (e.g. Klemheist). */
  searchAliases?: string[];
  family: KnotFamilyKey;
  /** "system" / "anchor" / "technique" replace the plain knot framing. */
  kindNote?: string;
  purpose: string;
  methods: KnotMethod[];
  cautions: string[];
  /** Source line naming the manual + chapter/section. */
  source: string;
  /** Visible ⚠ flag (figure-taught sequence, name collision, …). */
  flag?: string;
  /** Tail standard printed on the dressed final panel, where a source sets one. */
  tailLabel?: string;
  diagram: KnotDiagramKind;
  webbing?: boolean;
};

const S1 = "TC 3-21.76 Ranger Handbook";
const S2 = "TC 3-97.61 Military Mountaineering";
const S3 = "FM 5-125 Rigging Techniques, Procedures, and Applications";
const S4 = "NAVEDTRA 14067 Seaman";
const S5 = "MARSOC student outline HIET002, Knots and Rope Management";
const S6 = "USMC MWTC Assault Climbers Handbook";
const S7 = "COMDTINST M1510.2 (USCG E-PME) / M16114.5 Boat Crew Seamanship Manual";
const S8 = "ATP 3-50.21 Survival, Appendix A";
const S9 = "USCG National Maritime Center license examination bank";

export const KNOTS: KnotEntry[] = [
  // ── STOPPERS (4) ────────────────────────────────────────────────
  {
    id: "overhand-knot",
    name: "Overhand Knot",
    aliases: ["thumb knot (civilian name; not used in the swept manuals)"],
    family: "stoppers",
    purpose:
      "“The most commonly used and the simplest of all knots” — prevents the end of a rope from untwisting, forms a knob at the end of a rope, serves as part of another knot, keeps a rope from sliding through a block, hole, or another knot, and increases a person's grip on a rope. It is also the universal safety / back-up knot the mountaineering sources tie on tails.",
    methods: [
      {
        steps: [
          "Form a loop near the working end of the rope.",
          "Pass the working end through the loop.",
          "Pull the working end and the standing part in opposite directions to close the knot.",
          "Dress it snug against whatever it is backing up, leaving the sourced tail beyond it (≥4 in mountaineering; >6 in MARSOC).",
        ],
      },
    ],
    cautions: ["Reduces the strength of a straight rope by 55 percent (FM 5-125)."],
    source: `${S3}, Ch. 2 (Knots at the End of Rope); defined in ${S1} §9-31; the safety knot throughout ${S2} Ch. 4`,
    tailLabel: "≥4 in tail",
    diagram: "end-knot",
  },
  {
    id: "figure-eight-stopper",
    name: "Figure-Eight Knot (stopper)",
    aliases: ["figure-eight stopper"],
    family: "stoppers",
    purpose:
      "Forms a larger knot at the end of a rope than an overhand; prevents the end of the rope from slipping through a fastening or a loop in another rope, or from unreeving when reeved through blocks; easy to untie.",
    methods: [
      {
        steps: [
          "Form a loop near the working end, working end lying over the standing part.",
          "Pass the working end behind the standing part (one full 360° wrap around it).",
          "Pass the working end down through the original loop.",
          "Dress the knot so the two strands lie parallel in a clean “8” with no twists, and set it.",
        ],
      },
    ],
    cautions: ["None stated beyond the general knot-strength loss (see the Knots intro)."],
    source: `${S3}, Ch. 2 (Knots at the End of Rope, Fig. 2-4)`,
    diagram: "end-knot",
  },
  {
    id: "double-overhand-knot",
    name: "Double Overhand Knot",
    aliases: ["barrel knot (civilian name; not used in the swept manuals)"],
    family: "stoppers",
    purpose:
      "The knot each half of a double fisherman's is made of — TC 3-97.61's checkpoint: “two double overhand knots securing each other”; MARSOC's Class I square knot is finished “with two overhands,” and its double fisherman's is built from double overhands. Taught in the swept sources as a component and safety knot rather than a standalone lesson.",
    methods: [
      {
        steps: [
          "Form a loop with the working end around the standing part (or around the other rope's standing part, when used in a bend).",
          "Pass the working end through the loop.",
          "Pass the working end through the loop a second time, beside the first pass.",
          "Dress the two wraps parallel and pull the knot snug, leaving the sourced tail.",
        ],
      },
    ],
    cautions: ["In the double fisherman's, the knot “can be tightened beyond untying” under load (MWTC) — the same grip applies here."],
    source: `${S2} §4-9 (as the double fisherman's component, with checkpoints); ${S5} Class I; ${S6}`,
    diagram: "end-knot",
  },
  {
    id: "wall-knot-with-crown",
    name: "Wall Knot (with Crown)",
    aliases: ["wall and crown", "crown knot when tied alone"],
    family: "stoppers",
    purpose:
      "A stranded-rope end knot, tied with the rope's own unlaid strands: prevents the end of a rope from untwisting when an enlarged end is not objectionable; keeps the end from slipping through small openings, as with rope handles on boxes; either the crown or the wall knot alone forms a semipermanent “stopper knot” tied with the end strands of a rope; crowning the wall knot makes a neat round knob.",
    methods: [
      {
        steps: [
          "Unlay the end of a three-strand rope for a short length and hold the three strands apart.",
          "Form a small bight in each strand, each bight passing under the next strand in turn (wall): each strand end comes up through the bight of its neighbor.",
          "Pull all three strand ends up evenly to close the wall knot against the rope's lay.",
          "To crown it: lay each strand end down across the top and through the next strand's bight, ends pointing back down along the rope, then work the whole knot snug and trim.",
        ],
      },
    ],
    cautions: ["Semipermanent — it is a finish for the rope's end, not a quick stopper (FM 5-125)."],
    source: `${S3}, Ch. 2 (Knots at the End of Rope)`,
    flag: "Taught by figure in FM 5-125 (Figs. 2-5, 2-6) with descriptive text; steps written from the figure sequence.",
    diagram: "strands",
  },
  // ── BENDS (8) ───────────────────────────────────────────────────
  {
    id: "square-knot",
    name: "Square Knot",
    aliases: ["reef knot (Navy usage)"],
    family: "bends",
    purpose:
      "Ties the ends of two ropes of equal diameter together. Navy: the best-known bend. Also the finishing knot of the rappel seat and of the block lashing.",
    methods: [
      {
        steps: [
          "Hold one working end in each hand. Cross the right-hand working end over the left-hand working end.",
          "Pass it under the left rope and back up over the top.",
          "Cross the (new) left-hand working end over the right-hand working end — the second crossing must be opposite the first.",
          "Pass it under and back over the top, mirroring step 2.",
          "Dress the knot: two interlocking bights, each rope's working end and standing part exiting on the same side. Secure each tail with an overhand knot on its own standing part, leaving a ≥4-inch tail.",
        ],
      },
    ],
    cautions: [
      "“The square knot will not hold if the ropes are wet or if they are of different sizes” (FM 5-125). It tightens under strain.",
      "Not a life-safety bend: modern mountaineering numbering carries the standing caution that a square knot is used as a joining knot only when a more secure knot cannot be tied (TC 3-97.61) — in every swept mountaineering source it is finished with overhand safeties on both sides.",
    ],
    source: `${S1} §9-32; ${S2} §4-7 (steps + checkpoints); ${S3}, Ch. 2 (Fig. 2-7); ${S4} Ch. 3; ${S5} Class I (timed standard; finished with two overhands); ${S7} (USCG required list); ${S8} fig. A-5`,
    tailLabel: "≥4 in tail",
    diagram: "bend",
  },
  {
    id: "fishermans-knot",
    name: "Fisherman's Knot",
    aliases: ["single fisherman's knot", "English knot (civilian)"],
    family: "bends",
    purpose: "Ties two ropes of the same or approximately the same diameter.",
    methods: [
      {
        steps: [
          "Lay the two working ends side by side, pointing in opposite directions, overlapping.",
          "Tie an overhand knot with the first rope's working end around the second rope's standing part.",
          "Pass the second rope's working end through beside the first knot and tie an overhand knot with it around the first rope's standing part.",
          "Dress each overhand tight, then pull the two standing parts so the two knots draw together and jam against each other. Ends exit opposite each other with 4-inch pigtails.",
        ],
      },
    ],
    cautions: ["The two overhands must be tied tightly around the opposing standing parts and drawn snug, or the bend is not finished (TC 3-97.61 checkpoints)."],
    source: `${S2} §4-8 (steps + checkpoints)`,
    tailLabel: "4 in pigtails",
    diagram: "bend",
  },
  {
    id: "double-fishermans-knot",
    name: "Double Fisherman's Knot",
    aliases: ["double English knot", "grapevine knot"],
    family: "bends",
    purpose:
      "Ties two ropes of the same or approximately the same diameter; a standard Class I joining knot in USMC mountaineering; self-locking.",
    methods: [
      {
        steps: [
          "Lay the two working ends side by side, pointing in opposite directions, overlapping.",
          "With the first working end, wrap twice around the second rope's standing part.",
          "Pass the first working end back through both of its wraps and pull it tight — a double overhand around the other rope.",
          "Repeat steps 2–3 with the second working end around the first rope's standing part.",
          "Pull the two standing parts apart so the two double overhands slide together and lock. Check: two “X” patterns on one side, parallel strands on the other; ends exit opposite with 4-inch pigtails.",
        ],
      },
    ],
    cautions: [
      "It “can be tightened beyond untying” — after loading it may be impossible to untie (MWTC).",
      "Published strength 65–70% (MWTC table).",
    ],
    source: `${S2} §4-9 (steps + checkpoints); ${S5} Class I; ${S6} (strength + self-locking note)`,
    tailLabel: "4 in pigtails",
    diagram: "bend",
  },
  {
    id: "figure-eight-bend",
    name: "Figure-Eight Bend",
    aliases: [],
    family: "bends",
    purpose: "Joins the ends of two ropes of equal or unequal diameter within a 5 mm difference.",
    methods: [
      {
        steps: [
          "In the first rope, tie a loose figure-eight knot near the working end (form a bight, wrap the working end 360° around the standing part, pass it through the loop).",
          "Bring the second rope's working end in beside the first rope's working end.",
          "Retrace the figure-eight in reverse with the second working end, following the first rope's path exactly, strand beside strand, back to the first rope's standing part.",
          "Remove all twists and crossovers so the two ropes run side by side through the whole knot.",
          "Dress the knot down tight; running ends exit on opposite sides with a minimum 4-inch pigtail.",
        ],
      },
    ],
    cautions: [
      "The 5 mm diameter-difference limit (TC 3-97.61).",
      "No twists or crossovers — they are a failed checkpoint, not a style point (TC 3-97.61).",
      "“Flemish bend” is the common civilian name — the swept military sources do not use that name; this entry ships under the military name only.",
    ],
    source: `${S2} §4-10 (steps + checkpoints)`,
    tailLabel: "≥4 in pigtail",
    diagram: "bend",
  },
  {
    id: "water-knot",
    name: "Water Knot",
    aliases: ["ring bend", "overhand retrace", "tape knot"],
    family: "bends",
    purpose: "The webbing joining knot: attaches two webbing ends; used in runners and harnesses. Drawn as flat straps, as webbing is tied flat.",
    methods: [
      {
        steps: [
          "Tie a loose overhand knot in one webbing end.",
          "Feed the other webbing end back through the knot, following the first end's path in reverse, flat strand against flat strand with no twists.",
          "Pull all slack out and draw the knot tight.",
          "Dress it flat; the tails must extend at least 4 inches beyond the knot in both directions.",
        ],
      },
    ],
    cautions: [
      "Minimum 4-inch tails both directions, checked after the knot is fully tightened (TC 3-97.61 checkpoints).",
      "Published strength 60–70% (MWTC table).",
    ],
    source: `${S2} §4-11 (steps + checkpoints); ${S5} Class I; ${S6}`,
    tailLabel: "≥4 in tails",
    diagram: "webbing-bend",
    webbing: true,
  },
  {
    id: "sheet-bend",
    name: "Sheet Bend (Single)",
    aliases: ["weaver's knot", "becket bend (Navy name; a becket is the eye it ties to)"],
    searchAliases: ["becket bend"],
    family: "bends",
    purpose:
      "Two major uses — tying together two ropes of unequal size, and tying a rope to an eye. Navy: the bend for joining lines of different sizes.",
    methods: [
      {
        steps: [
          "Form a bight in the end of the heavier rope (or use the eye / becket, if tying to one).",
          "Pass the lighter rope's working end up through the bight from underneath.",
          "Carry the working end around the back of both legs of the bight.",
          "Tuck the working end under its own standing part, on top of the bight, so it is trapped by the bight's leg.",
          "Dress and set by pulling the standing parts; both tails should end up on the same side.",
        ],
      },
    ],
    cautions: [
      "“This knot will draw tight but will loosen or slip when the lines are slackened” (FM 5-125).",
      "It is stronger and unties easier than the square knot — but for security under varying load, the swept sources move to the double sheet bend.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-8); ${S4} Ch. 3 (as becket bend); ${S8} fig. A-6`,
    diagram: "bend",
  },
  {
    id: "double-sheet-bend",
    name: "Double Sheet Bend",
    aliases: ["double becket bend (Navy)"],
    family: "bends",
    purpose:
      "Greater holding power than the single sheet bend for joining ropes of equal or unequal diameter, wet ropes, or tying a rope to an eye; more secure than the single in a spliced eye. Navy: a double becket bend is always used to bend a gantline onto a boatswain's chair. MARSOC Class I teaches the double sheet bend by name.",
    methods: [
      {
        steps: [
          "Form a bight in the end of the heavier rope (or use the eye).",
          "Pass the lighter rope's working end up through the bight from underneath.",
          "Carry the working end around the back of both legs of the bight and tuck it under its own standing part — one full sheet bend.",
          "Carry the working end around the back of both legs a second time and tuck it under its own standing part again, beside the first tuck.",
          "Dress both turns snug and set the bend by pulling the standing parts.",
        ],
      },
    ],
    cautions: ["“It will not slip or draw tight under heavy loads” (FM 5-125) — stated as its advantage over the single."],
    source: `${S3}, Ch. 2; ${S4} Ch. 3; ${S5} Class I; ${S8} fig. A-7`,
    diagram: "bend",
  },
  {
    id: "carrick-bend",
    name: "Carrick Bend",
    aliases: [],
    family: "bends",
    purpose:
      "Heavy loads and joining large hawsers or heavy rope; one of the three knots named for fastening wire rope (with the fisherman's bend and clove hitch) when wire-rope fittings are not available.",
    methods: [
      {
        steps: [
          "Form a loop in the first rope's working end, working end crossing over the standing part.",
          "Lay the second rope's working end across the loop.",
          "Weave the second working end over the first rope's standing part, under the first loop's far leg, over the first working end, and under the near leg of the loop — a flat over-under lattice with both ends exiting opposite sides.",
          "Work the lattice even and flat before loading.",
          "Dress and set by pulling both standing parts; seize each working end to its own standing part for service.",
        ],
      },
    ],
    cautions: [
      "It will not draw tight under a heavy load and can be untied easily if the ends are seized to their own standing parts (FM 5-125) — the seizing is part of the finished bend, not an extra.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-10; wire-rope list, “Knots for Wire Rope”); ${S4} Ch. 3 (fig. 3-14)`,
    flag: "FM 5-125 teaches the weave by figure (Fig. 2-10); steps follow its figure sequence.",
    diagram: "bend",
  },
];

KNOTS.push(
  // ── HITCHES (19) ────────────────────────────────────────────────
  {
    id: "half-hitch",
    name: "Half Hitch",
    aliases: [],
    family: "hitches",
    purpose:
      "Ties a rope to a timber or to a larger rope; holds against a steady pull on the standing part; secures the free end of a rope; foundation of many knots — it starts the timber hitch, is part of the fisherman's knot, and makes the rolling hitch more secure.",
    methods: [
      {
        steps: [
          "Pass the working end around the object (or the standing part).",
          "Bring the working end across the standing part and through the loop just formed.",
          "Dress it snug against the object.",
        ],
      },
    ],
    cautions: ["“It is not a secure hitch” on its own (FM 5-125) — it holds against a steady pull only."],
    source: `${S3}, Ch. 2 (Hitches, Fig. 2-22A)`,
    diagram: "hitch-post",
  },
  {
    id: "two-half-hitches",
    name: "Two Half Hitches",
    aliases: [],
    family: "hitches",
    purpose:
      "Especially useful for securing the running (working) end of a rope to the standing part; a required seamanship knot in Navy and Coast Guard material.",
    methods: [
      {
        steps: [
          "Pass the working end around the object and tie one half hitch around the standing part.",
          "Tie a second half hitch the same way, directly against the first, both hitches turning in the same direction.",
          "Dress the two hitches snug together and set.",
        ],
      },
    ],
    cautions: [
      "If the two hitches are slid together along the standing part they form a clove hitch on the rope (FM 5-125) — a finishing note, and a warning that placement changes the knot.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-22B); ${S4} Ch. 3`,
    diagram: "hitch-post",
  },
  {
    id: "round-turn-and-two-half-hitches",
    name: "Round Turn and Two Half Hitches",
    aliases: ["round turn with two half hitches (Ranger Handbook name)"],
    family: "hitches",
    purpose:
      "Ties the end of a rope to an anchor and must have constant tension. A constant-tension anchor knot in Ranger use — the round turn runs around the anchor distributing the load over it; fastens a rope to a pole, timber, or spar. On the USCG required list.",
    methods: [
      {
        steps: [
          "Route the rope around the anchor to make a full round turn — two wraps at the back of the anchor, one in front, both parts parallel and touching, not crossing.",
          "Bring the working end across the standing part and tie the first half hitch against the round turn.",
          "Tie the second half hitch the same way, locking bar on top, hitches dressed tightly against the round turn.",
          "Dress down, leaving a minimum 4-inch tail. For greater security in rigging use, seize the working end to the standing part (FM 5-125).",
        ],
      },
    ],
    cautions: [
      "Constant tension required (Ranger Handbook; TC 3-97.61).",
      "“This hitch does not jam” (FM 5-125) — stated as a virtue for untying.",
    ],
    source: `${S1} §9-33; ${S2} §4-13 (steps + checkpoints); ${S3}, Ch. 2 (Fig. 2-23); ${S4} Ch. 3; ${S7}`,
    tailLabel: "≥4 in tail",
    diagram: "hitch-post",
  },
  {
    id: "clove-hitch",
    name: "Clove Hitch",
    aliases: ["slip clove hitch = the USCG-required variant tied with a slipped (bight) finish"],
    family: "hitches",
    purpose:
      "An intermediate anchor knot requiring constant tension; secures the middle of a rope to an anchor; fastens a rope to a timber, pipe, or post, starts and finishes lashings, and is used to make other knots. MARSOC Class II anchor knot; on the USCG required list, including the slip clove hitch.",
    methods: [
      {
        label: "Method A — end of the rope",
        steps: [
          "Pass the working end over the top of the anchor and bring it back under.",
          "Cross the working end over the standing part on the front of the anchor, forming the diagonal.",
          "Pass the working end around the anchor a second time, parallel to the first turn, and tuck it under its own diagonal.",
          "Dress: two turns around the anchor, the diagonal locking bar running from one side to the other opposite the direction of pull, no more than one rope width between the turns, ≥4-inch tail.",
        ],
      },
      {
        label: "Method B — middle of the rope",
        steps: [
          "Hold the rope in both hands and form a loop in each hand, the two loops turned in opposite senses.",
          "Lay the left loop on top of the right loop.",
          "Drop both loops over the anchor.",
          "Pull both standing parts in opposite directions to dress the hitch down; locking bar opposite the direction of pull.",
        ],
      },
    ],
    cautions: [
      "“The knot must have constant tension on it once tied to prevent slipping” (TC 3-97.61); MARSOC: constant tension or it slips, and no loose ends.",
      "FM 5-125 adds: without constant tension, add another loop around the object and under the center of the hitch to allow a tightening / slackening motion.",
    ],
    source: `${S1} §§9-35, 9-36 (two named knots in the handbook); ${S2} §4-15 (both methods, steps + checkpoints); ${S3}, Ch. 2 (Fig. 2-26); ${S4} Ch. 3; ${S5} Class II; ${S7}`,
    tailLabel: "≥4 in tail",
    diagram: "hitch-post",
  },
  {
    id: "timber-hitch",
    name: "Timber Hitch",
    aliases: [],
    family: "hitches",
    purpose: "Moves heavy timber or poles; excellent for securing lumber and similar objects.",
    methods: [
      {
        steps: [
          "Pass the working end around the timber.",
          "Bring the working end around its own standing part to form a loop.",
          "Wrap the working end around the rope inside that loop three or more times (the dogging turns).",
          "Dress the turns tight against each other and set by hauling on the standing part.",
        ],
      },
    ],
    cautions: [
      "The coils hold the timber and the hitch tightens as tension increases, but “it will readily loosen when the strain is relieved” (FM 5-125).",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-24)`,
    diagram: "hitch-post",
  },
  {
    id: "timber-hitch-and-half-hitch",
    name: "Timber Hitch and Half Hitch",
    aliases: ["timber and half hitch (USCG exam wording)"],
    family: "hitches",
    purpose: "Holds heavy timber or poles while they are being lifted or dragged, where the plain timber hitch is not enough.",
    methods: [
      {
        steps: [
          "Tie a timber hitch near one end of the timber.",
          "Lead the standing part along the timber.",
          "At a second point along the timber, pass the rope around it and tie a half hitch.",
          "Dress both hitches and set by hauling on the standing part.",
        ],
      },
    ],
    cautions: [
      "“A timber hitch used alone may become untied when the rope is slack or when a sudden strain is put on it” (FM 5-125) — the half hitch is the fix the manual prescribes.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-25); examined in ${S9}`,
    diagram: "hitch-post",
  },
  {
    id: "rolling-hitch",
    name: "Rolling Hitch",
    aliases: [],
    family: "hitches",
    purpose: "Secures a rope to another rope, or fastens it to a pole or pipe, so that the rope will not slip.",
    methods: [
      {
        steps: [
          "Wrap the working end around the host rope (or pole) with a full turn, crossing over the standing part.",
          "Wrap a second full turn beside the first, on the side the pull will come from.",
          "Finish with a half hitch around the host on the far side of the two turns.",
          "Dress all turns tight together and set by loading the standing part along the host.",
        ],
      },
    ],
    cautions: [
      "“This knot grips tightly but is easily moved along a rope or pole when the strain is relieved” (FM 5-125).",
      "Name caution: not to be confused with FM 5-125's mooring / magnus hitch despite the shared “rolling” name in some texts — the manual treats them as two different hitches.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-27)`,
    flag: "Taught by figure + prose in FM 5-125 (Fig. 2-27); steps follow the standard form its figure shows.",
    diagram: "friction-host",
  },
  {
    id: "mooring-hitch",
    name: "Mooring Hitch",
    aliases: ["rolling hitch (FM 5-125's name for this hitch)", "magnus hitch (FM 5-125)"],
    searchAliases: ["magnus hitch"],
    family: "hitches",
    purpose: "Fastens a rope around a mooring post, or attaches a rope at a right angle to a post.",
    methods: [
      {
        steps: [
          "Take two full turns around the post with the working end.",
          "Cross the working end over the standing part.",
          "Take one more turn around the post on the other side of the standing part.",
          "Tuck the working end under its last turn and dress the hitch tight.",
        ],
      },
    ],
    cautions: [
      "“This hitch grips tightly and is easily removed” (FM 5-125).",
      "Name caution: FM 5-125 calls this hitch “rolling or magnus” while also teaching a different rolling hitch — this entry keeps the manual's naming and prints the collision so users are not misled.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-29)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-29); steps follow its figure sequence.",
    diagram: "hitch-post",
  },
  {
    id: "telegraph-hitch",
    name: "Telegraph Hitch",
    aliases: [],
    family: "hitches",
    purpose: "A very useful and secure hitch to hoist or haul posts and poles.",
    methods: [
      {
        steps: [
          "Form a bight and lay it along the pole, bight pointing in the direction of the haul.",
          "Wrap the working end around both the pole and the bight's near leg, working toward the bight's closed end.",
          "Continue wrapping until the wraps cover the bight.",
          "Tuck the working end through the closed end of the bight and dress all wraps tight.",
        ],
      },
    ],
    cautions: ["“Easy to tie and untie and will not slip” (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-28)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-28); steps follow its figure sequence.",
    diagram: "hitch-post",
  },
  {
    id: "scaffold-hitch",
    name: "Scaffold Hitch",
    aliases: [],
    family: "hitches",
    purpose: "Supports the end of a scaffold plank with a single rope and prevents the plank from tilting.",
    methods: [
      {
        steps: [
          "Lay the plank end across the rope's standing part.",
          "Bring both parts of the rope up around the plank.",
          "Cross the working end over the standing part above the plank and pass it around the plank again so the plank sits in a cradle of rope.",
          "Finish with two half hitches around both rope parts above the plank and dress tight.",
        ],
      },
    ],
    cautions: ["None beyond its stated purpose; it is a one-plank support, rigged at each end (FM 5-125, scaffold section context)."],
    source: `${S3}, Ch. 2 (Fig. 2-30) and Ch. 6 scaffold usage`,
    flag: "Sequence follows FM 5-125 Fig. 2-30 (figure-taught in the manual; steps written from the figure).",
    diagram: "hitch-plank",
  },
  {
    id: "blackwall-hitch",
    name: "Blackwall Hitch",
    aliases: ["Black Wall hitch (FM 5-125 table-of-contents spelling)"],
    family: "hitches",
    purpose:
      "A hook hitch: fastens a rope to a hook, temporarily, in derrick work. FM 5-125 contrasts it with the cat's-paw, which is “a more satisfactory way of fastening a rope to a hook… it will not slip off and need not be kept taut.”",
    methods: [
      {
        steps: [
          "Form a bight in the rope.",
          "Lay the bight across the back of the hook so the standing part and working end hang on either side.",
          "Cross the two parts in front of the hook's shank, trapping the bight under the crossed parts.",
          "Set by loading the standing part; keep the load on.",
        ],
      },
    ],
    cautions: [
      "“The hitch holds only when subjected to a constant strain or when used in the middle of a rope with both ends secured. Human life and breakable equipment should never be entrusted to the blackwall hitch” (FM 5-125).",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-31)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-31); steps follow its figure sequence.",
    diagram: "hitch-hook",
  },
  {
    id: "girth-hitch",
    name: "Girth Hitch",
    aliases: ["taught only as girth hitch in the swept sources (lark's head / cow hitch are civilian names)"],
    family: "hitches",
    purpose:
      "Attaches a runner (sling) to an anchor or a piece of equipment; ties suspender ropes to hand ropes on expedient foot bridges — “a simple and convenient hitch for many other uses of ropes and cords” (FM 5-125).",
    methods: [
      {
        steps: [
          "Form a bight in the sling and pass it around / behind the anchor or bar.",
          "Reach through the bight and pull the rest of the sling (both ends, or the whole runner) through it.",
          "Cinch the hitch tight so two wraps sit against the anchor with a locking bar across them (TC 3-97.61 checkpoint).",
          "Dress it tight and seat it where it will not slide.",
        ],
      },
    ],
    cautions: ["Girth hitching an anchor keeps the sling in position but reduces the strength of the sling (TC 3-97.61 Ch. 5)."],
    source: `${S2} §4-29 (steps + checkpoint); ${S3}, Ch. 2 (Fig. 2-33)`,
    diagram: "girth",
  },
  {
    id: "fishermans-bend",
    name: "Fisherman's Bend",
    aliases: ["anchor bend (the standard civilian name; FM 5-125's name is fisherman's bend)"],
    family: "hitches",
    purpose:
      "An anchor hitch: an excellent knot for attaching a rope to a light anchor, a ring, or a piece of stone; fastens a rope or cable to a ring or post; used where there will be a slackening and tightening motion in the rope. One of the three knots named for fastening wire rope. Examined in USCG licensing.",
    methods: [
      {
        steps: [
          "Pass the working end through the ring (or around the post) and take a full round turn — two turns through / around, side by side.",
          "Bring the working end across the standing part and pass it under both turns (through the round turn).",
          "Tie a half hitch with the working end around the standing part, outside the round turn.",
          "Dress tight; seize the working end to the standing part for permanent service.",
        ],
      },
    ],
    cautions: ["For wire rope, the running end must always be fastened to the standing part after tying, with clips if available (FM 5-125, wire-rope section)."],
    source: `${S3}, Ch. 2 (Fig. 2-35) and wire-rope list; ${S9}`,
    diagram: "hitch-ring",
  },
  {
    id: "stopper-hitch",
    name: "Stopper Hitch",
    aliases: [],
    family: "hitches",
    purpose: "Holds the strain of another line temporarily — the Navy's way of taking the load off a line while it is worked.",
    methods: [
      {
        steps: [
          "Lay the stopper line alongside the loaded line, working end pointing away from the direction of strain.",
          "Wrap the working end around the loaded line several times, wrapping toward the strain.",
          "Finish with two half hitches around the loaded line.",
          "Hold or secure the stopper's standing part so it takes the strain; dress the wraps tight.",
        ],
      },
    ],
    cautions: ["Temporary by design — it holds strain “temporarily” (NAVEDTRA 14067); it must be tended while it carries the load."],
    source: `${S4} Ch. 3`,
    flag: "NAVEDTRA 14067 teaches it briefly; steps follow its description.",
    diagram: "stopper-host",
  },
  {
    id: "prusik-knot",
    name: "Prusik Knot",
    aliases: ["Prusik (also spelled “Prussik” in civilian use; swept sources print Prusik)"],
    family: "hitches",
    purpose:
      "A friction hitch: puts a movable rope on a fixed rope — Prusik ascents and tightening systems; attaches a movable rope to a fixed rope. MARSOC: end-of-line Prusik, secured with a bowline.",
    methods: [
      {
        label: "Method A — middle-of-the-rope Prusik",
        steps: [
          "Double the short (Prusik) cord into a bight with the working ends even; lay the bight over the host rope, closed end hanging about 12 inches below it.",
          "Reach down through the bight, pull both working ends up and lay them over the host rope.",
          "Repeat once more, passing the working ends through the middle of the first wraps — finishing with four wraps and a locking bar across them on the host rope.",
          "Dress the wraps and locking bar tight, parallel, untwisted; tie an overhand with both cords to stop slipping during variable tension.",
        ],
      },
      {
        label: "Method B — end-of-the-rope Prusik",
        steps: [
          "Lay an arm's length of the Prusik cord over the host rope.",
          "Make a complete round turn around the host rope.",
          "Cross the working end over the cord's standing part, pass it under the host rope, and make a second complete round turn back toward the middle of the knot.",
          "Dress: four wraps and a locking bar across them, tight, parallel, untwisted, locking bar facing the climber.",
          "Finish with a bowline tying the Prusik cord's ends together, within 6 inches of the knot — the Ranger Handbook also allows the double figure-eight finish.",
        ],
      },
    ],
    cautions: [
      "The Prusik cord must be of smaller diameter than the host rope (MARSOC) — no swept source publishes a numeric diameter ratio, so none is printed here.",
      "Add wraps if the host rope is icy (MARSOC).",
      "The knot must be backed up with the bowline / overhand finish or it can slip under varying tension (Ranger Handbook; TC 3-97.61).",
    ],
    source: `${S1} §9-43; ${S2} §4-21 (both methods, steps + checkpoints); ${S5} Class IV`,
    diagram: "friction-host",
  },
  {
    id: "kleimhiest-knot",
    name: "Kleimhiest Knot",
    aliases: ["spelled Kleimhiest in TC 3-97.61 (the manual's spelling)"],
    searchAliases: ["Klemheist", "Klemheist knot"],
    family: "hitches",
    purpose: "“A moveable, easily adjustable, high-tension knot capable of holding extremely heavy loads while being pulled tight” (TC 3-97.61).",
    methods: [
      {
        steps: [
          "Take a utility rope or webbing sling with its ends offset by about 12 inches; find its center and form a bight; lay the bight over the host rope, bight pointing opposite the direction of pull.",
          "Wrap both tails around the host rope, working back toward the direction of pull, for at least four complete turns.",
          "Pass both tails through the bight.",
          "Join the two tails to each other with a joining knot.",
          "Dress the knot down tightly so all wraps are touching.",
        ],
      },
    ],
    cautions: [
      "“Spectra should not be used for the Kleimhiest knot. It has a low melting point and tends to slip” (TC 3-97.61 note).",
      "Checkpoints: bight opposite the pull; wraps tight and touching; tails properly joined (TC 3-97.61).",
      "Spelling: the manual prints “Kleimhiest”; civilian sources usually print “Klemheist” — searching either spelling finds this entry.",
    ],
    source: `${S2} §4-27 (steps, note, checkpoints)`,
    diagram: "friction-host",
  },
  {
    id: "bachman-knot",
    name: "Bachman Knot",
    aliases: ["Bachmann (civilian spelling varies; TC 3-97.61 prints Bachman)"],
    family: "hitches",
    purpose:
      "A friction hitch on a carabiner: “a means of using a makeshift mechanized ascender” — a Prusik-friction-principle ascender built on a carabiner; the cord can be tied into an etrier (stirrup).",
    methods: [
      {
        steps: [
          "Find the middle of a utility rope and clip the bight into a carabiner.",
          "Lay the carabiner alongside the host (climbing) rope, the bight of the climbing-rope side at the top of the carabiner.",
          "Wrap the doubled cord around the host rope and through the inside of the carabiner.",
          "Repeat for two or more wraps, keeping both ropes parallel with no twisting or crossing.",
          "Dress the wraps snug; load is taken by hauling on the carabiner / cord so the wraps grip, and it slides when unweighted.",
        ],
      },
    ],
    cautions: ["Checkpoints — two or more wraps; ropes parallel, untwisted; bight at the top of the carabiner (TC 3-97.61)."],
    source: `${S2} §4-22 (steps + checkpoints)`,
    diagram: "friction-host",
  },
  {
    id: "munter-hitch",
    name: "Munter Hitch",
    aliases: ["Italian hitch (civilian name; not used in the swept manuals)"],
    family: "hitches",
    purpose:
      "A belay hitch, tied in a carabiner, not around an object: with a pear-shaped locking carabiner, forms a mechanical belay; the Ranger belay hitch, used with a locking pear-shaped carabiner with the brake hand controlling the free side.",
    methods: [
      {
        steps: [
          "Hold the rope in both hands, palms down, about 12 inches apart.",
          "With the right hand, form a loop away from the body, toward the left hand; hold the loop in the left hand.",
          "With the right hand, bring the part of the rope from the bottom of the loop up over the top of the loop, forming a bight around the rope.",
          "Clip that bight into the pear-shaped locking carabiner so the closed end of the bight wraps the standing / running part, and lock the carabiner.",
          "Check: load side and brake side exit the carabiner on the correct sides and the hitch flips freely when the brake hand changes the rope's direction.",
        ],
      },
    ],
    cautions: [
      "The carabiner must be a locking, pear-shaped carabiner, and it must be locked (TC 3-97.61 checkpoints).",
      "The brake hand is never released in use (Ranger Handbook belay doctrine — the manual's belay context, not a knot property).",
    ],
    source: `${S1} §9-40; ${S2} §4-30 (steps + checkpoints)`,
    diagram: "carabiner",
  },
  {
    id: "munter-mule",
    name: "Munter Mule",
    aliases: ["Munter mule knot (Ranger Handbook)"],
    family: "hitches",
    purpose: "The lock-off for the Munter hitch: stops the rope from running through a Munter hitch and ties the belay off, releasable under tension.",
    methods: [
      {
        steps: [
          "With the Munter hitch loaded and the brake hand holding the brake strand, form a bight in the brake strand.",
          "Pass the bight around behind the load strand and pull a loop of it through, forming a slipped overhand (mule) around the load strand.",
          "Pull the mule snug against the carabiner / hitch.",
          "Back it up: tie an overhand knot with the bight around both strands, including the main (load) strand.",
          "Dress down; the lock-off holds the load and can still be released under tension by undoing the backup and pulling the bight free.",
        ],
      },
    ],
    cautions: ["The overhand backup must capture the main strand, not just the brake strand (Ranger Handbook)."],
    source: `${S1} §9-41 (not taught in TC 3-97.61 — Ranger-only in this sweep)`,
    diagram: "carabiner",
  },
);

KNOTS.push(
  // ── LOOPS (15) ──────────────────────────────────────────────────
  {
    id: "bowline",
    name: "Bowline",
    aliases: ["king of knots (civilian nickname; not a manual term)"],
    family: "loops",
    purpose:
      "Ties the end of a rope around an anchor, or forms a single fixed loop in the end of a rope; the best knot for a single loop that will not tighten or slip under strain and can be untied easily; used to lower men and material; a temporary eye for mooring. On the USCG required list.",
    methods: [
      {
        steps: [
          "Bring the working end around the anchor (or form the fixed loop to size).",
          "In the standing part, form an overhand loop (a small loop, working side on top).",
          "Reach through the loop and pull up a bight of the standing part.",
          "Pass the working end through that bight and bring it back onto itself.",
          "Dress the knot down, then finish with an overhand safety knot tied with the tail, leaving a minimum 4-inch pigtail.",
        ],
      },
    ],
    cautions: [
      "The overhand safety is part of the finished knot in military mountaineering — MARSOC: the bowline “must finish with overhand.”",
      "Published strength 70–75% (MWTC table).",
      "In rigging use, unties easily “if each running end is seized to its own standing part” (FM 5-125).",
    ],
    source: `${S1} §9-44; ${S2} §4-12 (5 steps + checkpoints); ${S3}, Ch. 2 (Fig. 2-11); ${S4} Ch. 3 (fig. 3-15); ${S5} Class II; ${S7}; ${S8} fig. A-8`,
    tailLabel: "≥4 in pigtail",
    diagram: "loop-end",
  },
  {
    id: "bowline-on-a-bight",
    name: "Bowline on a Bight",
    aliases: ["two-loop bowline (TC 3-97.61's alternate name)", "bowline-on-a-bight"],
    family: "loops",
    purpose:
      "Forms two fixed loops in the middle of a rope; twin nonslipping loops form a comfortable seat — the same purpose as a boatswain's chair; use it when you need more strength than a single bowline, a loop somewhere other than the end of the rope, or you do not have access to the rope's end.",
    methods: [
      {
        steps: [
          "Form a bight about twice as long as the finished loops will be.",
          "Tie an overhand knot on the bight.",
          "Hold the overhand knot with the bight hanging down and outward; fold the bight back up and over the overhand knot so the knot passes through the bight.",
          "Reach to the cross of the overhand knot, grasp the two strands running down and outward, and pull them up to form the two loops.",
          "Pull the two strands clear of the overhand knot, then final-dress: grasp the two loops and pull them apart so the loops seat and cannot slip.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — two fixed loops that will not slip, no twists, a double loop held in place by a bight (TC 3-97.61).",
      "It does not leave both hands free when used as a seat (FM 5-125).",
      "Not the same knot as FM 5-125's double bowline, which makes three loops from the end of a rope — see that entry.",
    ],
    source: `${S2} §4-18 (steps + checkpoints); ${S3}, Ch. 2 (Fig. 2-14); ${S4} Ch. 3`,
    diagram: "loop-multi",
  },
  {
    id: "double-bowline",
    name: "Double Bowline (rigging)",
    aliases: ["distinct from the bowline on a bight despite the similar name — this one makes three loops from the end of a rope"],
    family: "loops",
    purpose:
      "Forms three nonslipping loops to sling a man — one loop supports his back, the other two support his legs; a notched board passed through two loops makes a boatswain's chair.",
    methods: [
      {
        steps: [
          "Double the working end back to form the material for three loops.",
          "Form a loop in the doubled standing part.",
          "Bring the doubled working end up through the loop, around the standing part, and back down through the loop — the bowline structure, tied with doubled rope.",
          "Open the doubled bight out into its separate loops and size them: one for the back, two for the legs.",
          "Dress the knot down and set; seize the tail to the standing part for service (per FM 5-125's bowline practice).",
        ],
      },
    ],
    cautions: [
      "None stated for this knot specifically (FM 5-125).",
      "Keep this entry separate from the bowline on a bight — the two knots share a name root and are routinely confused.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-12)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-12); steps follow the doubled-bowline structure of its figure.",
    diagram: "loop-multi",
  },
  {
    id: "running-bowline",
    name: "Running Bowline",
    aliases: [],
    family: "loops",
    purpose:
      "A running (sliding) loop: a strong running loop; a convenient running eye; a choker-type sling at the end of a single line; tying a handline around an object at a point you cannot safely reach, such as the end of a limb.",
    methods: [
      {
        steps: [
          "Pass the working end around the object (or where the choker will sit).",
          "Tie a bowline with the working end around the rope's own standing part, so the standing part runs through the bowline's loop.",
          "Dress the bowline and its overhand safety.",
          "Haul on the standing part: the bowline slides down the standing part and chokes the loop tight around the object.",
        ],
      },
    ],
    cautions: ["None stated; by construction it tightens under load, unlike the fixed bowline (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-13); ${S4} Ch. 3`,
    diagram: "loop-end",
  },
  {
    id: "french-bowline",
    name: "French Bowline",
    aliases: ["“man over the side” (Navy usage name)"],
    family: "loops",
    purpose:
      "A two-loop body sling: a sling to lift injured men — one loop is a seat, the other goes around the body under the arms; the man's weight keeps the loops tight so he cannot fall out; particularly useful for an unconscious man, and for working alone with hands free. Navy: the knot for putting a man over the side.",
    methods: [
      {
        steps: [
          "Form a generous loop in the standing part, as for a bowline.",
          "Pass the working end up through the loop and around the standing part — then pass it through the loop a second time, making two turns and two working loops.",
          "Open the two turns out into two separate loops and size them: one as the seat, one for under the arms.",
          "Bring the working end back through and dress the knot down.",
          "Set the loops to size before loading; the casualty's weight keeps them tight.",
        ],
      },
    ],
    cautions: ["The two loops can be adjusted to the size required — adjust them before the lift, not during (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-16); ${S4} Ch. 3`,
    flag: "Figure-taught in both FM 5-125 (Fig. 2-16) and NAVEDTRA 14067; steps follow the two-turn structure.",
    diagram: "loop-multi",
  },
  {
    id: "spanish-bowline",
    name: "Spanish Bowline",
    aliases: [],
    family: "loops",
    purpose:
      "A two-loop mid-rope knot: tied at any point in a rope, where the line is doubled or at a doubled-back end; used in rescue work, or to give a twofold grip for lifting a pipe or other round object in a sling.",
    methods: [
      {
        steps: [
          "Double the rope and lay two overlapping loops (bights) side by side on the doubled part.",
          "Fold each loop down and outward, crossing the bights.",
          "Twist each bight and pass the outer bights up through the loops formed at the center.",
          "Pull the two finished loops out to size from the center knot.",
          "Dress the knot down evenly so both loops hold their size.",
        ],
      },
    ],
    cautions: ["None stated (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-15)`,
    flag: "Sequence follows FM 5-125 Fig. 2-15 (figure-taught in the manual; steps written from the figure).",
    diagram: "loop-multi",
  },
  {
    id: "bowline-on-a-coil",
    name: "Bowline on a Coil",
    aliases: ["around-the-body bowline / round-the-chest bowline (MARSOC usage — stream crossings, HRST, SPIE rigging context)"],
    family: "loops",
    kindNote: "A body tie-in system, drawn on a torso outline.",
    purpose:
      "“An expedient tie-in used by climbers when a climbing harness is not available” (TC 3-97.61). MARSOC Class IV teaches the around-the-body bowline, used with a figure-eight loop, for stream crossings and HRST / SPIE work.",
    methods: [
      {
        steps: [
          "Drape about 3 feet of the working end over the right shoulder, end hanging down the back.",
          "Starting at the bottom of the rib cage, wrap the standing part around the body, downward, four to eight times.",
          "Form a loop in the standing part toward the body, standing part on the bottom.",
          "Bring the loop up and under all the body coils, between the coils and the body, without letting it uncross.",
          "Pull a bight of the standing part up through the loop; pass the working end through that bight and back onto itself.",
          "Dress down by pulling the standing end; safety it with an overhand around the top coil, then a second overhand around all coils, leaving a minimum 4-inch pigtail.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — minimum four wraps, not crossed; the loop underneath all wraps; the knot centered on the body's midline (TC 3-97.61).",
      "It is an expedient — the sources reach for it only when no harness is available (TC 3-97.61).",
    ],
    source: `${S2} §4-23 (steps + checkpoints); ${S5} Class IV`,
    tailLabel: "≥4 in pigtail",
    diagram: "coil-body",
  },
  {
    id: "three-loop-bowline",
    name: "Three-Loop Bowline",
    aliases: [],
    family: "loops",
    purpose: "Forms three fixed loops in the middle of a rope; “used in a self-equalizing anchor system” (TC 3-97.61).",
    methods: [
      {
        steps: [
          "Form a bight of about 24 inches.",
          "With the thumb toward the body, turn the wrist to form a doubled loop in the standing part; lay the loops to one side.",
          "Reach down through the loops and pull up a doubled bight from the standing part.",
          "Pass the working end (the bight) through the doubled bight and bring it back onto itself.",
          "Dress down by pulling the standing parts, opening out the three loops.",
          "Safety it off with a doubled overhand knot, leaving a minimum 4-inch pigtail.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — two bights held by two loops; the bights form locking bars around the standing parts; the running end (bight) on the inside of the fixed loops (TC 3-97.61).",
    ],
    source: `${S2} §4-24 (steps + checkpoints)`,
    tailLabel: "≥4 in pigtail",
    diagram: "loop-multi",
  },
  {
    id: "figure-eight-loop",
    name: "Figure-Eight Loop",
    aliases: ["figure-eight-on-a-bight (TC 3-97.61)", "double figure-eight (Ranger Handbook §9-34's name for the same structure)"],
    family: "loops",
    purpose:
      "Forms a fixed loop in a rope — at the end or anywhere along it; the loop is large enough to insert a carabiner. MARSOC Class III middle knot.",
    methods: [
      {
        steps: [
          "Form a bight about as large as the desired loop.",
          "Using the bight as the working end, form a loop in the standing part.",
          "Wrap the bight-end around the standing part a full 360 degrees.",
          "Feed the bight-end through the loop.",
          "Dress tightly: the two strands run parallel through the figure eight with no twists; minimum 4-inch tail beyond the knot.",
        ],
      },
    ],
    cautions: ["“No twists are in the figure eight” is a pass/fail checkpoint in both mountaineering sources (Ranger Handbook; TC 3-97.61)."],
    source: `${S1} §9-34 (as double figure-eight); ${S2} §4-20 (steps + checkpoints); ${S5} Class III`,
    tailLabel: "≥4 in tail",
    diagram: "loop-mid",
  },
  {
    id: "rerouted-figure-eight",
    name: "Rerouted Figure-Eight",
    aliases: ["figure-eight retrace", "rerouted figure eight (Ranger Handbook)", "figure-eight follow-through (civilian name)"],
    family: "loops",
    purpose:
      "Produces the same result as a figure-eight loop, but because it is tied by retracing, it fastens the rope to trees or other places where a pre-formed loop cannot be used; in Ranger use it is an anchor knot that also attaches a climber to the climbing rope.",
    methods: [
      {
        steps: [
          "Measure out enough rope to pass around the anchor and still work with.",
          "Tie a loose figure-eight knot in the standing part, that distance from the anchor (form a loop, wrap the working end around the standing part, route it through the loop); dress it loosely.",
          "Take the working end around the anchor.",
          "Insert the working end back into the figure-eight, entering where the original working end exited, in reverse.",
          "Retrace the whole knot, keeping the original figure-eight strand on the outside and the retracing strand parallel beside it, back to the standing part.",
          "Remove all twists and crossovers and dress down; minimum 4-inch pigtail. (Ranger Handbook: tie the loose figure-eight roughly the anchor's diameter away from the anchor point.)",
        ],
      },
    ],
    cautions: [
      "The finished knot must be a figure eight with two ropes running side by side forming a fixed loop around the object or harness — any twist or crossover fails it (TC 3-97.61 checkpoints).",
    ],
    source: `${S1} §9-38; ${S2} §4-14 (steps + checkpoints)`,
    tailLabel: "≥4 in pigtail",
    diagram: "loop-mid",
  },
  {
    id: "two-loop-figure-eight",
    name: "Two-Loop Figure-Eight",
    aliases: [],
    family: "loops",
    purpose: "Forms two fixed loops in the middle of a rope.",
    methods: [
      {
        steps: [
          "With doubled rope, form an 18-inch bight, running end facing left.",
          "Grasp the bight and make a 360-degree turn around the standing part, counterclockwise.",
          "Form a second bight with the working (doubled) end and place it through the loop just formed.",
          "Hold that bight and lay the original bight over the knot.",
          "Open the two bights out into two loops and dress the knot down.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — a double figure-eight with two loops sharing a common locking bar; the loops are adjustable by means of that bar; the bar sits on the bottom of the knot (TC 3-97.61).",
    ],
    source: `${S2} §4-19 (steps + checkpoints)`,
    diagram: "loop-multi",
  },
  {
    id: "directional-figure-eight",
    name: "Directional Figure-Eight",
    aliases: ["in-line figure-eight (civilian name)"],
    family: "loops",
    purpose:
      "Forms a single fixed loop in the middle of the rope that lays back along the standing part; MARSOC teaches it for rappel anchors.",
    methods: [
      {
        steps: [
          "Face the far-side anchor, so the finished loop will lay inward toward it.",
          "Lay the rope from the far-side anchor over the open palm and make one wrap around the palm.",
          "With that wrap, tie a figure-eight knot around the standing part that leads to the far-side anchor.",
          "Dress down with the tail and the bight together, laying back along the standing part.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — the loop big enough to accept a carabiner but no larger than helmet-size; tail and bight together; figure eight tied tightly; the bight faces back toward the near side (TC 3-97.61).",
      "The loop takes load along the rope's line — that is the point of the knot; do not use it as an any-direction loop.",
    ],
    source: `${S2} §4-17 (steps + checkpoints); ${S5} Class IV`,
    diagram: "loop-mid",
  },
  {
    id: "wiremans-knot",
    name: "Wireman's Knot",
    aliases: [
      "Alpine butterfly — the same mid-rope loop, taught under this name in USMC EOTG Assault Climbers / HRST instruction",
      "butterfly knot — FM 5-125 teaches the same loop for tightening work",
    ],
    searchAliases: ["alpine butterfly", "butterfly knot"],
    family: "loops",
    purpose: "Forms a single, fixed loop in the middle of the rope. FM 5-125 uses the same loop (as the butterfly knot) as the purchase point of a tightening system — “to pull taut a high line, handline, tread rope for foot bridges”; a stick placed between its two upper loops keeps it from jamming.",
    methods: [
      {
        label: "The manual's hand method",
        steps: [
          "Facing the anchor the system will tie to, take up the slack and wrap two turns around the open hand (palm up). On the second turn, take up an extra ~30 cm loop — that becomes the fixed loop.",
          "Name the three wraps, palm to fingertips: heel, palm, fingertip.",
          "Hold the palm wrap and lay it over the heel wrap.",
          "Hold the heel wrap and lay it over the fingertip wrap.",
          "Hold the fingertip wrap and lay it over the palm wrap.",
          "Pull the (new) palm wrap up to form the fixed loop.",
          "Dress by pulling the fixed loop and both standing parts; pull the standing parts apart to finish.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — four separate bights locking down on themselves; the fixed loop exits the top of the knot and lays toward the near-side anchor; both ends exit opposite each other without bends (TC 3-97.61).",
      "Name note: three military names exist for this loop (wireman's / butterfly / alpine butterfly) across three swept sources — they are the same knot, and searching any of the three finds this entry.",
    ],
    source: `${S2} §4-16 (steps + checkpoints); ${S6} (Alpine Butterfly in official course instruction); ${S3}, Ch. 2 (butterfly knot, tightening)`,
    diagram: "loop-mid",
  },
  {
    id: "harness-hitch",
    name: "Harness Hitch",
    aliases: ["filed by FM 5-125 under Hitches; its product is a loop — cross-listed here"],
    family: "loops",
    purpose:
      "Forms a nonslipping loop in the middle of a rope — put an arm through the loop, lay it on the shoulder, and pull the object attached to the rope. FM 5-125 also names it as a tightening knot.",
    methods: [
      {
        steps: [
          "Form a bight in the middle of the rope.",
          "Twist the bight once to form a loop with the crossing on top.",
          "Reach through the loop, grasp the standing part beyond it, and pull a second bight up through.",
          "Open the pulled-up bight out into the working loop.",
          "Dress the knot down so the loop is locked by the twist.",
        ],
      },
    ],
    cautions: ["Tied only in the middle of a rope; “it will slip if only one end of the rope is pulled” (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-32)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-32); steps follow its figure sequence.",
    diagram: "loop-mid",
  },
  {
    id: "speir-knot",
    name: "Speir Knot",
    aliases: [],
    family: "loops",
    purpose: "Used “when you need a fixed loop, a nonslip knot, and a quick release” — it ties quickly and releases by pulling on the running end.",
    methods: [
      {
        steps: [
          "Form a bight at the point where the loop is needed.",
          "Twist the bight to form a loop in the standing part.",
          "Pass the working end around the object and up through the loop.",
          "Form a second bight in the working end and pass it through the loop in place of the end itself (the slipped finish that makes it quick-release).",
          "Dress the knot and size the loop; to release, pull the working end and the slipped finish spills the knot.",
        ],
      },
    ],
    cautions: ["The quick release is the feature and the hazard — a pull on the running end releases it (FM 5-125)."],
    source: `${S3}, Ch. 2 (loops section)`,
    flag: "Sequence follows FM 5-125's loops-section figure (figure-taught in the manual; steps written from the figure).",
    diagram: "loop-mid",
  },
);

KNOTS.push(
  // ── BINDINGS & LASHINGS (3 lashings + whipping) ─────────────────
  {
    id: "square-lashing",
    name: "Square Lashing",
    aliases: [],
    family: "bindings",
    purpose: "Lashes two spars together at right angles to each other.",
    methods: [
      {
        steps: [
          "Begin with a clove hitch on one spar, at the crossing point.",
          "Make a minimum of four complete turns around both spars, each turn passing over the horizontal spar and under the vertical (or the reverse), keeping turns tight and side by side.",
          "Make two frapping turns — tight wraps around the lashing itself, between the two spars — to pull the lashing taut.",
          "Finish with a clove hitch on the opposite spar from the one you started on.",
          "Dress: all turns neat, frapping turns centered, both clove hitches snug.",
        ],
      },
    ],
    cautions: ["Minimum four wrapping turns and the frapping turns are structural, not optional (FM 5-125)."],
    source: `${S3}, Ch. 2 (Lashings, Fig. 2-36)`,
    diagram: "lashing-cross",
  },
  {
    id: "shears-lashing",
    name: "Shears Lashing",
    aliases: ["shear lashing (spelling varies; FM 5-125 prints “shears”)"],
    family: "bindings",
    purpose: "Lashes two spars together at one end to form an expedient device called a shears (a two-legged support).",
    methods: [
      {
        steps: [
          "Lay the two spars side by side, spaced about one-third of a spar diameter apart, butt ends together.",
          "A short distance in from the top of one spar, tie the rope to it with a clove hitch.",
          "Make eight tight turns around both spars, above the clove hitch.",
          "Tighten with a minimum of two frapping turns around the eight turns, between the spars.",
          "Finish with a clove hitch on the opposite spar from the start.",
          "Open the spar legs out into the shears; the lashing becomes the hinge at the top.",
        ],
      },
    ],
    cautions: ["Eight wrapping turns and two frapping turns are the manual's minimums (FM 5-125)."],
    source: `${S3}, Ch. 2 (Lashings, Fig. 2-37)`,
    diagram: "lashing-parallel",
  },
  {
    id: "block-lashing",
    name: "Block Lashing",
    aliases: [],
    family: "bindings",
    purpose: "Ties a tackle block to a spar.",
    methods: [
      {
        steps: [
          "Make three right (tight) turns of the rope around the spar where the block is to hang.",
          "Pass the next two turns through the mouth of the block's hook or shackle and draw them tight.",
          "Make three more taut turns around the spar, above the hook or shackle.",
          "Tie the two rope ends together with a square knot to complete the lashing.",
          "If a sling is supported by the block lashing, pass the sling through the center four turns.",
        ],
      },
    ],
    cautions: [
      "The 3–2–3 turn pattern is the manual's specification; the finishing square knot here is a structural tie, not a loaded bend (FM 5-125).",
    ],
    source: `${S3}, Ch. 2 (Lashings, Fig. 2-38)`,
    diagram: "lashing-block",
  },
  {
    id: "whipping",
    name: "Whipping",
    aliases: ["common whipping"],
    family: "bindings",
    kindNote: "A binding technique — not a knot.",
    purpose:
      "A binding of small cord wrapped tightly around a rope's end to keep it from unlaying / unraveling. FM 5-125 teaches it in Ch. 2 immediately before the knot sections, and the mountain / butterfly coils in TC 3-97.61 are finished with the same wrap-and-tuck idea.",
    methods: [
      {
        label: "Common whipping",
        steps: [
          "Lay a bight of whipping twine along the rope near its end, closed end toward the rope end.",
          "Wrap the twine tightly around both the rope and the bight, working toward the rope's end, each wrap snug against the last.",
          "Pass the wrapping end through the closed end of the bight.",
          "Pull the bight's free leg from the other side so the bight — and the wrapping end trapped in it — is drawn under the wraps to the middle of the whipping.",
          "Trim both ends flush; the whipping is finished with no knot showing.",
        ],
      },
    ],
    cautions: [],
    source: `${S3}, Ch. 2, Fig. 2-2 (figure captions: “Lay the bight along the rope… Pull loop to the center”)`,
    diagram: "whipping",
  },
  // ── SHORTENING (1) ──────────────────────────────────────────────
  {
    id: "sheepshank",
    name: "Sheepshank",
    aliases: ["none in the swept sources (the “man-o-war sheepshank” variant is not in any swept source — see the Not-Sourced Register)"],
    family: "shortening",
    purpose: "A method of shortening a rope; also used to take the load off a weak spot in the rope.",
    methods: [
      {
        steps: [
          "Fold the rope into an S/Z shape at the point to be shortened — two bights, one pointing up, one pointing down, with the slack (or the weak spot) in the folded section between them.",
          "At the upper bight, twist the standing part to form a small loop and slip it over the end of the upper bight.",
          "Repeat at the lower bight: twist a loop in the other standing part and slip it over the lower bight's end.",
          "Dress both end-knots snug against the bights.",
          "Load the rope: the sheepshank holds its shortened length only while tension is on both ends.",
        ],
      },
    ],
    cautions: [
      "“It is only a temporary knot unless the eyes are fastened to the standing part on each end” (FM 5-125) — without tension, or without seizing the eyes, it falls apart. Never treat it as a permanent shortening.",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-34)`,
    diagram: "sheepshank",
  },
  // ── SPECIALTY (9 after the monkey's-fist demotion) ──────────────
  {
    id: "figure-eight-slipknot",
    name: "Figure-Eight Slipknot",
    aliases: ["figure-eight slip knot (TC 3-97.61)", "figure 8 slip (older SH 21-76 wording)"],
    family: "specialty",
    purpose:
      "Forms an adjustable bight in the middle of a rope; one of the knots used in tightening systems, with the Prusik.",
    methods: [
      {
        steps: [
          "Form a 12-inch bight in the rope.",
          "Hold the center of the bight in one hand and the two parallel strands about 12 inches up the rope in the other.",
          "Twist the bight two complete turns.",
          "Reach through the twisted bight and grasp the long standing part; pull a new bight of it back through the original bight.",
          "Pull down on the short working end and dress the knot down into a figure-eight shape; the sliding section is the long working end.",
          "If the knot is used in a transport tightening system, finish with a half hitch around the loop of the figure eight.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — both ropes of the bight pass through the same loop of the figure eight; the knot keeps its figure-eight shape when dressed (TC 3-97.61).",
    ],
    source: `${S1} §9-39; ${S2} §4-25 (steps + checkpoints)`,
    diagram: "loop-mid",
  },
  {
    id: "transport-knot",
    name: "Transport Knot",
    aliases: ["overhand slip knot", "mule knot (both printed in TC 3-97.61)"],
    family: "specialty",
    purpose: "Secures the transport tightening system — the releasable lock-off that holds a tightened rope installation.",
    methods: [
      {
        steps: [
          "Pass the running end around the anchor point and back under the standing part (the part leading to the far-side anchor), forming a loop.",
          "Form a bight in the running end.",
          "Pass the bight over the standing part and down through the loop; dress it down toward the anchor — a slipped overhand.",
          "Secure it by tying a half hitch around the standing part with the bight.",
          "Check: the locking bight is a minimum of 12 inches long.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — a single overhand slip knot, secured with a half hitch on a bight, bight ≥12 inches (TC 3-97.61). The slip is deliberate: the system must be releasable.",
    ],
    source: `${S2} §4-26 (steps + checkpoints)`,
    diagram: "hitch-post",
  },
  {
    id: "tensionless-anchor",
    name: "Tensionless Anchor",
    aliases: ["tensionless hitch (civilian name; the manuals call it the tensionless anchor)"],
    family: "specialty",
    kindNote: "An anchor system, not a single knot.",
    purpose:
      "Anchors the rope on high-load installations such as bridging and traversing; the wraps absorb the installation's tension and keep it off the knot and carabiner.",
    methods: [
      {
        steps: [
          "Wrap the rope around the anchor from top to bottom, a minimum of four wraps — more on a smooth anchor, fewer may do on rough bark.",
          "Keep the wraps neat, parallel, and untwisted, following each other down the anchor.",
          "Put a fixed loop (e.g., the figure-eight loop) in the end of the rope.",
          "Clip that loop loosely back onto the standing part of the rope with a carabiner.",
          "Dress the system: the wraps take the load; the knot and carabiner stay essentially unloaded.",
        ],
      },
    ],
    cautions: ["Four wraps is the stated minimum; the number goes up, not down, as the anchor gets smoother (TC 3-97.61)."],
    source: `${S1} §9-30 (anchors); ${S2} §5-9 (Ch. 5, Anchors)`,
    diagram: "anchor-wraps",
  },
  {
    id: "baker-bowline",
    name: "Baker Bowline",
    aliases: [],
    family: "specialty",
    purpose:
      "Filed by FM 5-125 under “Knots for Tightening a Rope”: the same purpose as the butterfly knot — tightening a fixed rope — and for lashing cargo; advantages: tied easily, adjusted without losing control, released quickly.",
    methods: [
      {
        steps: [
          "For cargo work: secure one end with two half hitches and pass the rope over the cargo (for tightening work, the rope runs to its tie-down ring).",
          "Pass the running end under the object and through the tie-down ring; form a loop in the standing part.",
          "Form a bight under the loop and draw the bight through the loop.",
          "Pass the running end through the loop and form a bight with the running end — the quick-release finish.",
          "Haul the system tight; secure the lashing with a slippery half hitch. To release, pull the running end.",
        ],
      },
    ],
    cautions: [
      "The release is a single pull on the running end — that is the design, and the reason the tail must stay clear until release is wanted (FM 5-125).",
    ],
    source: `${S3}, Ch. 2 (Fig. 2-21, captions + prose)`,
    flag: "FM 5-125's figure sequence is captioned panel-by-panel (unusually complete for a figure-taught knot); steps follow its captions.",
    diagram: "loop-end",
  },
  {
    id: "figure-eight-with-an-extra-turn",
    name: "Figure Eight with an Extra Turn",
    aliases: [],
    family: "specialty",
    purpose: "Tightens a rope — “especially suitable for tightening a one-rope bridge across a small stream”; ties and unties easily.",
    methods: [
      {
        steps: [
          "Form a figure-eight in the standing part of the rope, leaving it loose.",
          "Pass the working end around the far anchor (or tie-down point) and bring it back to the figure eight.",
          "Pass the working end through the figure eight with one extra turn around its loop, following the manual's figure.",
          "Haul on the working end to draw the installation tight — the figure eight acts as the friction point of the purchase.",
          "Secure the working end, and dress the knot down.",
        ],
      },
    ],
    cautions: ["None stated beyond its purpose (FM 5-125)."],
    source: `${S3}, Ch. 2 (Fig. 2-19)`,
    flag: "Sequence follows FM 5-125 Fig. 2-19 (figure-taught in the manual; steps written from the figure). The extra-turn routing is figure-only — it is not presented as text-verified.",
    diagram: "loop-mid",
  },
  {
    id: "cats-paw",
    name: "Cat's-Paw",
    aliases: ["cat's paw (FM 5-125 spelling)"],
    family: "specialty",
    purpose:
      "Fastens an endless sling to a hook, or is made at the end of a rope to fasten the rope to a hook; ties and unties easily; a more satisfactory hook fastening than the blackwall hitch — it will not slip off and need not be kept taut to hold.",
    methods: [
      {
        steps: [
          "Form two bights in the sling (or doubled rope end), side by side.",
          "Twist each bight in opposite directions, two or three turns each, forming two eyes.",
          "Bring the two eyes together.",
          "Place both eyes over the hook.",
          "Dress the twists evenly and set by loading the sling.",
        ],
      },
    ],
    cautions: ["None stated — FM 5-125 presents it as the reliable alternative to the blackwall hitch."],
    source: `${S3}, Ch. 2 (Fig. 2-18)`,
    flag: "Figure-taught in FM 5-125 (Fig. 2-18); steps follow its figure sequence.",
    diagram: "hook-eyes",
  },
  {
    id: "guarde-knot",
    name: "Guarde Knot",
    aliases: ["ratchet knot", "alpine clutch (both printed in TC 3-97.61)"],
    family: "specialty",
    kindNote: "A two-carabiner system.",
    purpose: "“Primarily used for hauling systems or rescue” (TC 3-97.61).",
    methods: [
      {
        steps: [
          "Clip two like carabiners (ovals work best) at the anchor, side by side.",
          "Place a bight of the rope up into both carabiners.",
          "Take a loop of rope from the non-load side and place it down into the opposite carabiner, so the rope exits between the two carabiners.",
          "Dress the system and test the direction: the rope must pull through one way only.",
        ],
      },
    ],
    cautions: [
      "“The knot works in only one direction and cannot be reversed while under load” (TC 3-97.61).",
      "Checkpoints: properly dressed, rope pulls in one direction only; the knot will not fail under load (TC 3-97.61).",
    ],
    source: `${S2} §4-32 (steps + checkpoints)`,
    diagram: "carabiner-pair",
  },
  {
    id: "frost-knot",
    name: "Frost Knot",
    aliases: [],
    family: "specialty",
    purpose: "A webbing knot: used with webbing to create the top loop of an etrier (a webbing ladder rung set). Drawn as a flat strap.",
    methods: [
      {
        steps: [
          "Lap one end of the webbing (as a bight) over the other end by about 10 to 12 inches, making three thicknesses of webbing.",
          "Tie an overhand knot with the tripled webbing.",
          "Dress it tightly; the tails run in opposite directions, with a bight and a tail exiting the top of the knot — the bight is the etrier's top loop.",
        ],
      },
    ],
    cautions: [
      "Checkpoints — three strands of webbing in a tight overhand; tails opposite; bight and tail exiting the top (TC 3-97.61).",
    ],
    source: `${S2} §4-28 (steps + checkpoints)`,
    diagram: "webbing-bend",
    webbing: true,
  },
  {
    id: "rappel-seat",
    name: "Rappel Seat",
    aliases: ["military rappel seat (MARSOC)", "Swiss seat (civilian name)"],
    family: "specialty",
    kindNote: "A tied harness SYSTEM, not a knot — taught inside both mountaineering sources' knot chapters as required tying knowledge.",
    purpose:
      "“An improvised seat rappel harness made of rope,” usually requiring a sling rope 14 feet or longer; “a rope harness for rappelling and climbing” (Ranger Handbook). MARSOC Class IV ties the military rappel seat from a 14-foot sling rope.",
    methods: [
      {
        steps: [
          "Find the middle of the sling rope and form a bight; place the bight on the hip opposite the brake hand.",
          "Reach behind, take a single strand, bring it around the waist to the front, and tie two overhand knots on the other strand, forming the waist loop.",
          "Pass both ends down between the legs, not crossed.",
          "Pass both ends up under the waist loop, bisecting the trouser pocket flaps, and pull up to tighten the seat.",
          "From rear to front, pass each end through its leg loop, forming a half hitch on each hip.",
          "Bring the longer end across the front to the non-brake-side hip and secure both ends with a square knot safetied with overhand knots; tuck the excess in the pocket below the knot. (Ranger Handbook adds: clip the carabiner around all the ropes, gate opening up and away, not touching the square or overhand knots; the seat is tight enough that a fist cannot be inserted between person and harness.)",
        ],
      },
    ],
    cautions: [
      "Checkpoints — two overhands in front; strands not crossed between the legs; a half hitch on each hip; the square knot with overhand safeties finished on the non-brake-hand side; minimum 4-inch pigtail after the safeties (TC 3-97.61); leg straps tightly centered and not crossed (Ranger Handbook).",
    ],
    source: `${S1} §9-37; ${S2} §4-31 (steps + checkpoints); ${S5} Class IV`,
    tailLabel: "≥4 in pigtail",
    diagram: "rappel-seat",
  },
);

/** The pack §3 honest scope note — printed with the tool's intro. */
export const KNOTS_SCOPE_NOTE =
  "“Every possible knot” in the world runs to thousands — The Ashley Book of Knots alone numbers over 3,800. No app teaches them all, and this one doesn't claim to. This library = every knot named or taught in the official U.S. military sources swept for it (TC 3-21.76, TC 3-97.61, FM 5-125, NAVEDTRA 14067, MARSOC HIET002, the USMC MWTC Assault Climbers Handbook, USCG E-PME / Boat Crew Seamanship material, ATP 3-50.21, and the USCG license examination bank), plus the knots those sources cross-reference. Famous knots that no swept military source teaches are NOT in the library; they are listed by name in the Not-Sourced Register below so the boundary is visible and honest. Where a manual teaches a knot by figure only, the entry says so. Where sources disagree (names, tail lengths, spellings), the entry prints the disagreement instead of picking a winner silently.";

/** Strength figures — printed ONLY where the pack attributes them
 * (MWTC table + FM 5-125's overhand figure). No others exist here. */
export const KNOTS_STRENGTH_NOTE =
  "Strength, as published: no knot retains 100% of rope strength (MWTC). The MWTC table: figure-eight 75–80%, bowline 70–75%, double fisherman's 65–70%, water / tape knot 60–70%. FM 5-125: an overhand knot reduces a straight rope's strength by 55%. These are the only strength figures the swept sources publish — no others are printed in this tool.";

export type NotSourcedEntry = { name: string; status: string };

/** Pack §12 register + the demoted monkey's fist. Name + status lines
 * ONLY — no steps, no diagrams, by design. */
export const NOT_SOURCED_REGISTER: NotSourcedEntry[] = [
  {
    name: "Monkey's Fist",
    status:
      "Name and purpose are official USCG license-examination knowledge (the weighted knot at the end of a heaving line), but no swept publication — including COMDTINST M16114.5's marlinespike chapter, checked at build — prints a tying procedure, so it is listed here, not taught.",
  },
  { name: "Ashley's Stopper Knot", status: "The classic single-strand stopper (Ashley #586). Not in any swept source." },
  {
    name: "Taut-Line Hitch",
    status: "The tent-guyline knot every Scout learns. Not taught in any swept source (the rolling hitch is the military's grip-hitch entry).",
  },
  { name: "Midshipman's Hitch", status: "Taut-line's stronger cousin. Not in any swept source." },
  {
    name: "Trucker's Hitch",
    status:
      "The famous mechanical-advantage tie-down. Not named in any swept source; the swept tightening systems are the transport knot, figure-eight slipknot, butterfly purchase, and baker bowline.",
  },
  { name: "Constrictor Knot", status: "The binding knot that out-grips the clove hitch. Not in any swept source." },
  {
    name: "Autoblock (French Prusik)",
    status: "The standard rappel backup friction hitch. Not in any swept source; the swept friction hitches are Prusik, Kleimhiest, and Bachman.",
  },
  { name: "Turk's Head", status: "Decorative woggle / lanyard knot. Not in any swept source." },
  {
    name: "Heaving Line Knot (simple weighted knot)",
    status: "The quick alternative to a monkey's fist. Found only in non-official study material; no swept official source teaches it.",
  },
  {
    name: "Diagonal Lashing",
    status: "One of the three classic pioneering lashings — NOT in FM 5-125 despite its fame; its lashing chapter teaches square, shears, and block only.",
  },
  { name: "Man-o-War Sheepshank", status: "The “better” sheepshank variant. Not in any swept source (plain sheepshank only)." },
  { name: "Zeppelin Bend", status: "The bend famous from airship handling. Not in any swept source." },
  { name: "Icicle Hitch", status: "The grip hitch for tapered spars. Not in any swept source." },
  {
    name: "Water Bowline / Yosemite Bowline",
    status: "Bowline variants. Not in any swept source (the bowline finishes with an overhand safety instead).",
  },
];

export function knotStepCount(k: KnotEntry): number {
  return k.methods.reduce((n, m) => n + m.steps.length, 0);
}

/** Panel count for the diagram strip: one panel per numbered step
 * (across all methods) + one dressed final panel. */
export function knotPanelCount(k: KnotEntry): number {
  return knotStepCount(k) + 1;
}

export function knotSearchText(k: KnotEntry): string {
  return [k.name, ...k.aliases, ...(k.searchAliases ?? []), k.purpose].join(" ").toLowerCase();
}
