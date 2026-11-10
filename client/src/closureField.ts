// Closure Sweep — FIELD domain data (Land Navigation, First Aid &
// Buddy Aid, Drill & Ceremonies), transcribed from the research pack
// at ~/workspace/military-app/closure/closure-field.md (researched
// Nov 9, 2026, Distribution-A sources only). The pack is the content
// source of truth: figures, conflicts, and flags print as the pack
// prints them, both sides, never blended.
//
// Binding source discipline carried from the pack:
// - Land navigation rests on FM 3-25.26 (2001, Distribution A). The
//   current manual TC 3-25.26 (2013) is restricted-distribution and
//   is NAMED ONLY (Flag F-1) — no content anywhere in this module is
//   sourced to it.
// - First aid is self-aid / buddy-aid level only — no advanced
//   interventions, no dosages beyond what the pack prints (none).
// - Drill is Army drill (TC 3-21.5, 2021, Distribution A) and is
//   labeled Army — never presented as joint. Manual of arms is
//   positions/carries only.
// - DIAGRAM lines are the pack's own art briefs; the app renders
//   them as original schematic panels (ClosureDiagram) — original
//   art only, never traced from a manual figure.
// - CARD entries (card: true) also join the Smart-Card Deck print
//   set, generated from THIS data (deck.ts / DeckPrint.tsx) — the
//   deck never re-types this content.

export type FieldEntry = {
  /** Stable id — also the Binder item key inside the section. */
  id: string;
  /** Pack code, e.g. "L-1". */
  code: string;
  title: string;
  /** Pack body, paragraph by paragraph. */
  body: string[];
  /** The pack's DIAGRAM brief, where it publishes one. */
  diagram?: string;
  /** Broad schematic family for the original diagram panel. */
  diagramKind?: "map" | "grid" | "compass" | "figure" | "formation" | "chart" | "limb" | "night" | "strip" | "terrain";
  /** True when the pack marks the entry CARD (joins the print deck). */
  card?: boolean;
  /** The pack's source line. */
  source: string;
  /** Conflict / flag text printed visibly, as the pack prints it. */
  flag?: string;
};

/* ============================ LAND NAVIGATION ============================ */

export const LANDNAV_INTRO =
  "Map and compass from FM 3-25.26, Map Reading and Land Navigation (2001) — the Distribution-A manual. The current manual, TC 3-25.26 (2013), is restricted-distribution: it is named here only and contributes no content (pack Flag F-1). Where Distribution-A task products corroborate an entry, the entry says so.";

export const LANDNAV: FieldEntry[] = [
  {
    id: "L-1", code: "L-1", title: "What a topographic map is — and the margin around it",
    body: ["A topographic map is a drawn-to-scale picture of a piece of ground: it shows elevation and relief, terrain features, water, vegetation, and man-made features, positioned where they actually are. Before using the picture, read the margin. The marginal information gives you the sheet name and sheet number, the series and edition, the map scale, the legend (what the symbols mean), the declination diagram (see L-10), the bar scales (see L-6), the contour interval note (see L-19), and the index to adjoining sheets. The rule for new navigators: margin first, map second — the margin tells you how to read everything inside the neatlines."],
    diagram: "Flat-lay of a map sheet with callout lines to eight margin blocks (sheet name, sheet number, scale, legend, declination diagram, bar scales, contour interval note, adjoining-sheets index), each labeled in plain words.",
    diagramKind: "map",
    source: "FM 3-25.26, Ch. 2–3 (marginal information and symbols)",
  },
  {
    id: "L-2", code: "L-2", title: "The colors on a standard map", card: true,
    body: ["Colors sort the map into feature families. On a standard large-scale topographic map (FM 3-25.26 §3-5): Black — cultural (man-made) features such as buildings and roads, surveyed spot elevations, and all labels. Red-brown — red and brown combined: cultural features, all relief features, non-surveyed spot elevations, and elevation/contour information on red-light-readable maps. Blue — hydrography: lakes, swamps, rivers, drainage. Green — vegetation with military significance: woods, orchards, vineyards. Brown — all relief features and elevation, such as contours on older-edition maps, and cultivated land on red-light-readable maps. Red — on older maps, cultural features such as populated areas, main roads, and boundaries. Other colors occasionally appear for special information and are explained in the margin."],
    diagram: "Six color chips in a row, each chip carrying two tiny example glyphs (e.g., blue chip: river squiggle + lake blob) and a one-line caption.",
    diagramKind: "map",
    source: "FM 3-25.26, §3-5",
  },
  {
    id: "L-3", code: "L-3", title: "Symbols and the legend",
    body: ["Map symbols are the map's shorthand — small drawings, lines, and color patches that stand for real features too small or too numerous to draw true to shape. Symbols you will meet constantly: buildings, roads and trails, bridges, railroads, transmission lines, boundaries, surveyed points, rivers and streams, lakes, swamps, woods and scrub. The legend printed in the margin of your sheet is the authority for that sheet — symbols can vary between series and editions, so check the legend instead of guessing."],
    diagram: "A two-column symbol strip: left column the symbol as printed, right column the real-world feature drawn in miniature (house, bridge over stream, dashed trail).",
    diagramKind: "map",
    source: "FM 3-25.26, Ch. 3 (topographic symbols), legend in marginal information",
  },
  {
    id: "L-4", code: "L-4", title: "Grids — read right, then up",
    body: ["The purple/black grid lines overprinted on the map form squares that let you name any point with numbers instead of describing it. The military grid reference system (MGRS) builds the reference in layers: grid zone designator, then the 100,000-meter square identifier (two letters), then the numeric easting (“read right” along the bottom edge) and northing (“read up” along the side edge). The manual's standing rule: always right, then up — easting first, northing second, every time."],
    diagram: "One grid square enlarged; a bold arrow runs right along the bottom edge to a point's vertical line, then a second arrow runs up the side edge to the point, with the point marked where the two meet.",
    diagramKind: "grid",
    source: "FM 3-25.26, Ch. 4 (§§4-3–4-6); corroborated by task 071-COM-1002 (Dist A)",
  },
  {
    id: "L-5", code: "L-5", title: "Grid references — 4, 6, and 8 digits", card: true,
    body: ["The number of digits sets the precision. A 4-digit reference names a point within a 1,000-meter grid square. A 6-digit reference (three easting digits, three northing digits) refines it to within 100 meters — the everyday standard for reporting a position. An 8-digit reference refines it to within 10 meters. More digits never hurt, but a reference is only as honest as the care taken reading it: estimate the tenths between grid lines carefully, and always read right, then up. (Worked example in task 071-COM-1002 resolves to grid 16SGL115813.)"],
    diagram: "Three nested zooms of the same grid square: whole square shaded (4-digit), one 100-m cell shaded inside it (6-digit), one 10-m cell inside that (8-digit).",
    diagramKind: "grid",
    source: "FM 3-25.26, §4-6; task 071-COM-1002",
  },
  {
    id: "L-6", code: "L-6", title: "Scale and the bar scales",
    body: ["Scale is the fixed ratio between map distance and ground distance — 1:50,000 means one unit on the map is 50,000 of the same unit on the ground. The margin prints bar scales (in meters, yards, and miles/nautical units depending on the sheet) so you can transfer a measured map distance straight onto the bar and read ground distance off it. Never scale distances off a photocopied or photographed map — copying can stretch the image; the printed ratio and bar scale belong to the original sheet."],
    diagram: "A bar scale drawn as alternating black/white segments labeled 0–5,000 m, with a pair of divider points set on a map line above it being transferred down onto the bar.",
    diagramKind: "map",
    source: "FM 3-25.26, Ch. 5",
  },
  {
    id: "L-7", code: "L-7", title: "Measuring distance on the map",
    body: ["Straight-line distance: mark the two points on the edge of a strip of paper, then lay the strip on the bar scale and read. Curved distance (a road or trail): walk the paper strip along the route in short straight segments, ticking each pivot point, then measure the strip the same way. Map distance is slope-blind — it measures flat distance, so a steep uphill leg walks longer than the map number suggests."],
    diagram: "Two panels: (1) paper strip laid straight between two points; (2) the same strip pivoted in three short segments along a winding road, tick marks at each pivot.",
    diagramKind: "map",
    source: "FM 3-25.26, Ch. 5",
  },
  {
    id: "L-8", code: "L-8", title: "Pace count", card: true,
    body: ["A pace is one natural step, about 30 inches. To find your pace count, walk a measured course — the manual uses a 600-meter course — count your paces, and divide to get your count per 100 meters (example worked in the manual: if 600 m takes 720 paces, your count is 120 paces per 100 m). Every dismounted navigator must know their own count; it is personal, like a boot size. Keep track in the field with ranger beads, knots in a string, pebbles moved pocket to pocket, or notebook marks — one marker per 100 meters. Conditions change the count, and the manual lists them: slopes (uphill lengthens, downhill shortens the stride pattern — the manual works the example that a 120-pace flat count changes on hills), wind, surface, visibility, and load/fatigue. Re-check your count on each new kind of terrain."],
    diagram: "A 600-m flat course drawn as a straight track with six 100-m flags; a walker silhouette mid-course; an inset hand moving one bead down a cord.",
    diagramKind: "figure",
    source: "FM 3-25.26, Ch. 5 (pace count, §5-11 in index)",
    flag: "The FM's full factor table (percent adjustments by condition) was not transcribed in the research pack — this entry prints the factor list and the worked example only (pack Flag F-10).",
  },
  {
    id: "L-9", code: "L-9", title: "Direction — azimuths and the three norths", card: true,
    body: ["An azimuth is a horizontal angle measured clockwise from a north base line, 0° to 360°. There are three norths to keep straight: true north (the geographic pole, shown by the star line on the declination diagram), magnetic north (where your compass needle points), and grid north (the direction of the map's vertical grid lines). A grid azimuth is measured on the map from grid north; a magnetic azimuth is measured in the field with a compass from magnetic north. They are not interchangeable — convert between them with the G-M angle (L-10)."],
    diagram: "A single point with three arrows fanning slightly apart, labeled True / Grid / Magnetic north, and a curved arrow sweeping clockwise from the grid-north arrow to a distant objective line marked “azimuth.”",
    diagramKind: "compass",
    source: "FM 3-25.26, Ch. 6",
  },
  {
    id: "L-10", code: "L-10", title: "The G-M angle and converting azimuths", card: true,
    body: ["The grid-magnetic (G-M) angle is the angular difference between grid north and magnetic north on your sheet; the margin's declination diagram shows it, with the year and annual change. The manual's method is deliberately mechanical: draw the diagram — sketch the grid and magnetic prongs with the G-M angle between them, then read off whether to add or subtract. With an east G-M angle: grid → magnetic, subtract; magnetic → grid, add. With a west G-M angle, the reverse. The manual warns to construct and use the diagram every time — a 1° conversion mistake is significant in the field. G-M angle changes as maps age (the diagram's date and annual-change note let you update it)."],
    diagram: "A declination diagram redrawn: two prongs (GN vertical, MN tilted right for an east angle) with the arc between them labeled “G-M angle,” plus a two-row add/subtract arrow table.",
    diagramKind: "compass",
    source: "FM 3-25.26, §6-5 (declination diagram), conversion procedures §6-6 area",
  },
  {
    id: "L-11", code: "L-11", title: "Back azimuth", card: true,
    body: ["The back azimuth is the direction back along the line you came on — the azimuth of the same line, reversed. Rule: if the forward azimuth is less than 180°, add 180°. If it is 180° or more, subtract 180°. Example: forward 60° → back 240°; forward 240° → back 60°. Use it to retrace a leg, to check yourself from a landmark, and as the working half of resection (L-18)."],
    diagram: "A straight trail line between points A and B; arrow A→B labeled 60°, arrow B→A labeled 240°, with the ±180 rule in a small box.",
    diagramKind: "compass",
    source: "FM 3-25.26, Ch. 6",
  },
  {
    id: "L-12", code: "L-12", title: "The lensatic compass — parts",
    body: ["The lensatic compass is the standard military compass. Per FM 3-25.26 §9-2, its major parts: the cover, with the sighting wire (front sight) and two luminous sighting dots; the floating dial, held level, whose luminous arrow always points to magnetic north with E at 90° and W at 270° — the dial carries two scales, mils on the outer scale and degrees (normally in red) on the inner; the glass over the dial with a fixed black index line; the bezel ring, a ratchet that clicks 120 clicks per full turn, each click = 3°, with a short luminous line in its glass face; the thumb loop on the base; and the lens (rear sight), which magnifies the dial and whose rear-sight slot works with the front sighting wire — the rear sight also locks and clamps the dial when closed, and must be opened more than 45° for the dial to float freely. Opened flat, the compass's straightedge carries a coordinate scale (1:50,000 on newer compasses; some older ones are 1:25,000 — the FM prints a warning to check the scale; on a 1:50,000 map, values read from a 1:25,000 edge must be halved). Care notes (§9-3): keep metal and electrical sources at separation (high-tension lines 55 m; field gun/vehicle-class metal 18 m; telephone/barbed wire 10 m; machine gun 2 m; steel helmet/rifle-class items ½ m, as printed), verify the dial doesn't stick, and check the compass periodically on a known azimuth — a compass off by more than 3° should not be used."],
    diagram: "Exploded-style labeled drawing of an open lensatic compass: cover with sighting wire, dial with arrow/E/W, index line, bezel ring, lens/rear sight, thumb loop — each part with a leader line and name.",
    diagramKind: "compass",
    source: "FM 3-25.26, §§9-2–9-3, Fig. 9-1",
  },
  {
    id: "L-13", code: "L-13", title: "Center-hold technique", card: true,
    body: ["The manual's preferred everyday method (§9-4a, Fig. 9-2). Open the compass fully so cover and base form one straightedge; move the lens to the rearmost position so the dial floats. Thumb through the thumb loop, steady base with third and fourth fingers, index finger along the side; other hand's thumb between lens and bezel ring, index finger along the other side, remaining fingers wrapped around the first hand. Elbows pulled firmly into your sides, compass held between chin and belt. To measure an azimuth, turn your whole body toward the object, pointing the compass cover at it, then look down and read the azimuth under the fixed black index line. The FM lists its advantages: faster and easier, works in all visibility, over any terrain, without putting down a (slung) rifle, and without removing eyeglasses."],
    diagram: "Front view of a standing figure holding the open compass at waist-to-chin height with both hands, elbows tucked; dashed sight line from compass cover to a tree in the distance.",
    diagramKind: "figure",
    source: "FM 3-25.26, §9-4a, Fig. 9-2",
  },
  {
    id: "L-14", code: "L-14", title: "Compass-to-cheek technique", card: true,
    body: ["The precision sighting method (§9-4b, Fig. 9-3). Fold the cover (with the sighting wire) up to vertical; fold the rear sight slightly forward. Look through the rear-sight slot and align the front-sight hairline on the distant object, then glance down through the lens and read the azimuth off the dial. The FM's note: this technique is used almost exclusively for sighting, and is the best technique for that purpose."],
    diagram: "Side profile of a head and hands: compass raised to cheek, cover vertical, eye looking through the rear-sight slot along the hairline to a distant peak.",
    diagramKind: "figure",
    source: "FM 3-25.26, §9-4b, Fig. 9-3",
  },
  {
    id: "L-15", code: "L-15", title: "Presetting and following an azimuth (incl. the click method)", card: true,
    body: ["Daylight (§9-4c, Fig. 9-4): hold the compass level, rotate it until the desired azimuth sits under the fixed black index line (the FM's worked example presets 320°), then turn the bezel ring until its luminous line aligns with the north-seeking arrow — the compass is preset. To follow it, take the center-hold and turn your body until the north arrow aligns with the luminous line, then walk in the direction the cover's sighting wire points. Limited visibility / night: use clicks. Bezel clicks are 3° each. Align the luminous line over the index line, divide the desired azimuth by 3 for clicks — count counterclockwise if the azimuth is under 180° (example: 51° ÷ 3 = 17 clicks counterclockwise), and if over 180°, subtract from 360° first, then divide and count clockwise (example: 330° → 360−330 = 30 → 10 clicks clockwise). If the azimuth isn't exactly divisible by 3, the FM notes which side the objective will fall on depending on whether you rounded up or down. Set the initial azimuth while light remains whenever possible."],
    diagram: "Top-down dial close-up: index line over “320,” luminous bezel line aligned with the north arrow; small inset showing a thumb rotating the bezel with “17 clicks” notation.",
    diagramKind: "compass",
    source: "FM 3-25.26, §9-4c, Fig. 9-4",
  },
  {
    id: "L-16", code: "L-16", title: "Bypassing an obstacle and deliberate offset",
    body: ["Bypassing (§9-4d, Fig. 9-5): detour at right angles for counted distances and return — the FM's example, traveling on 90°: turn to 180° for 100 m, back to 90° for 150 m, to 360° for 100 m, then resume 90° — you are back on your original line, past the obstacle. At night, make exact 90° turns without touching the bezel: center-hold, and turn until the luminous E centers under the luminous line for a right turn, the luminous W for a left turn. Deliberate offset (§9-4e, Fig. 9-6): when the objective sits on or near a linear feature (road, stream), aim off by a known angle — 10° is adequate for most uses — so when you hit the feature you know which way to turn. Each degree of offset moves your course about 18 m per 1,000 m traveled (10° over 1,000 m ≈ 180 m to the side)."],
    diagram: "Two plan-view panels: (1) a rectangular detour around a pond with the four azimuths/distances labeled; (2) a straight dashed line to an objective beside a road, and a solid 10°-offset course striking the road 180 m to its right, arrow turning left along the road.",
    diagramKind: "grid",
    source: "FM 3-25.26, §§9-4d–9-4e, Figs. 9-5, 9-6",
  },
  {
    id: "L-17", code: "L-17", title: "Intersection — finding a distant point",
    body: ["Intersection locates a distant, unknown point from two known positions. Occupy known point A, measure the magnetic azimuth to the unknown point, convert to grid, and draw the line on the map from A. Move to known point B and do the same. Where the two drawn lines cross is the unknown point's location (the manual's procedure is exercised in task 071-COM-1014, Dist A). The wider the angle between the two lines at the crossing, the tighter the fix."],
    diagram: "Plan view: two hilltop markers A and B, each with a ruled ray converging on a bridge marked X; azimuth labels on both rays.",
    diagramKind: "grid",
    source: "FM 3-25.26, §6-7; task 071-COM-1014",
  },
  {
    id: "L-18", code: "L-18", title: "Resection — finding yourself (and modified resection)",
    body: ["Resection is intersection run in reverse: your position is unknown, the landmarks are known. Identify two or more distant features you can also find on the map (three gives a check). Measure the magnetic azimuth to each, convert to grid, take each line's back azimuth, and draw from each landmark along its back azimuth — where the lines cross is your position. Modified resection (§6-9) is the shortcut when you are standing on a linear feature (road, stream, ridgeline): one landmark is enough — the azimuth line from the landmark crosses your linear feature at your position."],
    diagram: "Plan view: a water tower and a peak, each with a dashed back-azimuth ray converging on a figure standing between them; second small panel: a figure on a road, single ray from a tower crossing the road at the figure.",
    diagramKind: "grid",
    source: "FM 3-25.26, §§6-8–6-9",
  },
  {
    id: "L-19", code: "L-19", title: "Contour lines and elevation", card: true,
    body: ["A contour line connects points of equal elevation above sea level; the set of them is how a flat map shows shape (§10-2). Three types (Fig. 10-1): Index — every fifth line, drawn heavier and numbered with its elevation. Intermediate — the four finer lines between index lines, unnumbered. Supplementary — dashed lines showing changes of at least half the contour interval, used where relief is very gentle. The contour interval — the vertical distance between adjacent lines — is printed in the margin (the FM's worked example: 20 meters). To get a point's elevation (§10-3): find the nearest numbered index line, note whether ground rises or falls from it, and add or subtract one interval per line crossed (worked example: point two intermediate lines above the 500-m index line at a 20-m interval = 540 m). A hilltop inside the last closed line is estimated at that line plus half an interval (example: 600 + 10 = 610 m); a depression bottom, the lowest line minus half an interval. Reading spacing reads steepness: close lines = steep ground; wide lines = gentle ground."],
    diagram: "A hill drawn twice side by side: left as a 3-D shaded hill, right as its contour plan — closed nested rings, every fifth ring bold and numbered, a dashed supplementary line on the flat shoulder; vertical bracket showing one contour interval.",
    diagramKind: "terrain",
    source: "FM 3-25.26, §§10-1–10-3, Figs. 10-1–10-4",
  },
  {
    id: "L-20", code: "L-20", title: "Terrain features — the major five and the minors",
    body: ["Learn to name ground the way the map draws it (§§10-6–10-7). Major features: a hill (high point; contours form closed rings), a valley (low ground between higher ground, usually with a stream; contours V or U uphill), a ridge (a line of high ground; contours V or U pointing downhill), a saddle (a low dip between two higher areas — an hourglass in contours), and a depression (a low closed area; closed contours with tick marks pointing downhill). Minor features: a spur (a short ridge jutting from a larger ridge) and a draw (a small valley tucked between spurs — the two travel together), and a cliff (contours crowding together or merging). Supplementary features: a cut and a fill — man-made levelings where a road or rail line passes through or over ground, shown by lines with ticks."],
    diagram: "Five mini contour plans in a row — hill, valley, ridge, saddle, depression — each with its name and one distinguishing mark (depression ticks shown). Second diagram: one contour plan of a ridge end showing a spur and the draw beside it, plus a cliff edge where contour lines merge, and a road cut/fill pair.",
    diagramKind: "terrain",
    source: "FM 3-25.26, §§10-6–10-7",
  },
  {
    id: "L-21", code: "L-21", title: "Terrain association — navigate by the ground, not just the compass",
    body: ["Terrain association means continuously matching what you see to what the map shows, so the ground itself confirms your position (§11-1 area; task 071-COM-1005, Dist A). Work with big, unmissable features: use a handrail (a road, river, ridgeline, or power line you can follow or keep beside you), an attack point (an obvious feature near your objective to navigate to first), a catching feature (a big feature beyond your objective that tells you you've gone too far), and checkpoints (recognizable features along the way that confirm progress). A navigator who only stares at the compass walks past his own mistakes; a navigator who reads ground catches them."],
    diagram: "Plan-view route drawn along a river “handrail,” with a bridge marked as attack point, the objective just past it, and a highway crossing beyond marked “catching feature — if you reach this, you've gone too far.”",
    diagramKind: "grid",
    source: "FM 3-25.26, Ch. 11; task 071-COM-1005",
  },
  {
    id: "L-22", code: "L-22", title: "Route planning basics",
    body: ["Plan the route on the map before you move (§11-5, movement and route selection): choose legs between checkpoints you can identify, prefer routes the terrain helps you follow (handrails, ridges, roads) over straight lines through featureless ground, note the azimuth and distance (and your pace count) for each leg, and plan how you'll bypass obstacles and where you'll re-check position. Write the legs down — azimuth, distance, expected time — so a tired navigator at 2 a.m. is following a plan made by a fresh one."],
    diagram: "A map route broken into three legs at checkpoint symbols (church, road junction, stream bend), each leg annotated with an azimuth/distance tag.",
    diagramKind: "grid",
    source: "FM 3-25.26, §11-5",
  },
  {
    id: "L-23", code: "L-23", title: "Night navigation notes (as published)",
    body: ["The FM treats night as its own problem (§11-7). Published techniques carried into this pack: preset the compass by clicks while light remains (L-15); use the luminous bezel line and north arrow to hold an azimuth without a light; make exact 90° obstacle bypass turns off the luminous E and W (L-16); shorten legs and navigate checkpoint-to-checkpoint by terrain association, since silhouettes and ridgelines read better at night than detail; and use the stars as an azimuth check (L-26) — a star near the north horizon serves about half an hour, and moving south, azimuth checks against a guide star should come about every 15 minutes (§9-5)."],
    diagram: "A night scene in silhouette: figure in center-hold, luminous compass dial glowing, a guide star marked above a ridgeline with a dashed vertical dropping to the horizon point.",
    diagramKind: "night",
    source: "FM 3-25.26, §11-7 with §§9-4–9-5",
  },
  {
    id: "L-24", code: "L-24", title: "GPS — as the manual frames it",
    body: ["FM 3-25.26 §9-6 describes GPS as a space-based, global, all-weather, continuously available radio positioning navigation system: position comes from signal triangulation against a satellite constellation, and the receiver can give latitude, longitude, and altitude, displaying in geographic or military grid coordinates. It can store checkpoints in any coordinate system, convert between them, and display direction and distance to a called-up checkpoint, plus time to the next checkpoint; it has no inherent drift and updates its position automatically. The manual lists uses from position location and navigation to resupply and control of lost soldiers. Honest framing: this is the manual's 2001 description — the principles (satellite fix, grid display, steering to a stored point) still hold, but the manual is a complement to, never a replacement for, map-and-compass skill, and the FM teaches compass methods first for a reason."],
    source: "FM 3-25.26, §9-6",
    flag: "Manual framing, 2001 (pack Flag F-7): device specifics are PLGR-era; principles hold, receiver behavior must not be read as current equipment fact.",
  },
  {
    id: "L-25", code: "L-25", title: "Field-expedient direction — the shadow-tip method", card: true,
    body: ["No compass? The sun will give you east and west (§9-5a, Fig. 9-7). Step 1: Push a stick upright into level ground where it casts a clear shadow; mark the shadow's tip. That first mark is always west — everywhere on Earth. Step 2: Wait 10 to 15 minutes until the tip has moved a few inches; mark the new tip. Step 3: Draw a straight line through the two marks — an approximate east–west line. Step 4: Stand with the first (west) mark to your left: north is in front of you, east to your right, south behind. A line perpendicular to the east–west line is the approximate north–south line. The same setup doubles as a rough clock: move the stick to the crossing of the two lines, and the west arm reads 0600, the east arm 1800, the north–south line is noon. The manual cautions the shadow-tip system is not intended for polar regions."],
    diagram: "Ground-level diagram: upright stick, two shadow-tip marks labeled 1000 and 1300, the line through them labeled W←→E, a perpendicular dashed N–S line, and a standing figure oriented with the west mark at his left hand.",
    diagramKind: "figure",
    source: "FM 3-25.26, §9-5a, Fig. 9-7",
  },
  {
    id: "L-26", code: "L-26", title: "Field-expedient direction — watch method and the stars",
    body: ["The FM also publishes (§9-5): the watch method — using an analog watch's hour hand against the sun to find a north–south line (method differs by hemisphere; drawn from the manual's figure); North Star (Polaris) navigation in the northern hemisphere and the Southern Cross south of the equator (Figs. 9-9 to 9-11), with the azimuth-check discipline noted in L-23; and the same shadow-tip principle worked by moonlight, using the moon in place of the sun when the moon is bright enough to cast a shadow. These are backup methods: good for a cardinal direction and an azimuth check, not a substitute for a compass bearing."],
    diagram: "Night sky panel: Big Dipper pointers extended to Polaris with a dashed line dropping to “N” on the horizon; inset of an analog watch face with hour hand pointed at a sun glyph and the bisector marked.",
    diagramKind: "night",
    source: "FM 3-25.26, §9-5, Figs. 9-8–9-11",
  },
];

/* ============================ FIRST AID & BUDDY AID ============================ */

export const FIRSTAID_INTRO =
  "Self-aid and buddy-aid only, from FM 4-25.11, First Aid (2002, w/ Change 1 2004, Distribution A), TC 4-02.1 as cited by Distribution-A task standards, and GTA 05-08-012 (Feb 2021). Anything beyond this level — including needle decompression — is CLS-and-above and is not in this app. Where the 2002 manual and current casualty care differ, both print, dated and sourced, with the current standard presented as current.";

export const FIRSTAID: FieldEntry[] = [
  {
    id: "F-1", code: "F-1", title: "The point of first aid, and how to evaluate a casualty", card: true,
    body: ["First aid is the first care given to a casualty before medical personnel are available. FM 4-25.11 states its objects plainly: stop the bleeding, overcome shock, relieve pain, prevent infection. The manual's lifesaving sequence (Ch. 2): open the airway and restore breathing; stop the bleeding and protect the wound; prevent shock. When you reach a casualty, evaluate in this order (FM Ch. 2): responsiveness (speak to them, tap — and if the cause of injury is unknown, be careful about moving the spine), breathing, pulse, bleeding (a hands-on sweep of the whole body, checking your hands for blood as you go — remember the back and exit wounds), shock, fractures, burns, and possible concussion/head injury. In real life you check several at once and fast — but you check them all."],
    source: "FM 4-25.11, Ch. 1 (object of first aid) and Ch. 2 (lifesaving steps; evaluation steps)",
  },
  {
    id: "F-2", code: "F-2", title: "Care under fire vs. the garrison sequence — printed both ways",
    body: ["FM 4-25.11 framing (2002/2004): the lifesaving steps in F-1 apply; under fire, the manual's care-under-fire teaching is minimal — the one intervention it names for the point of injury is a tourniquet for bleeding. Current TCCC framing (TCCC Guidelines 2021, exercised in task 081-COM-1002, Dist A; ASM-level public material via Deployed Medicine): in Care Under Fire, the casualty is directed to self-aid / buddy aid is given, the immediate problem is life-threatening bleeding, and the intervention is a tourniquet applied “high and tight” (see F-4) — airway and everything else wait for the Tactical Field Care phase, which works the MARCH sequence (Massive hemorrhage, Airway, Respirations, Circulation, Head injury/Hypothermia). The ASM role stays narrow: identify and control bleeding, assess in MARCH order, and get the casualty to help. Anything beyond that — including needle decompression — is CLS-and-above and is not in this app."],
    source: "FM 4-25.11, Ch. 2; TCCC Guidelines 2021 via task 081-COM-1002 (Aug 9, 2023, Dist A)",
    flag: "Conflict C-1/C-2 area: the two framings are printed attributed and dated, never blended (pack Flags F-2/F-4).",
  },
  {
    id: "F-3", code: "F-3", title: "Bleeding control — the FM 4-25.11 ladder", card: true,
    body: ["Work the ladder in order (FM 4-25.11 §§2-13–2-20): 1. Field dressing — use the casualty's own field dressing; expose the wound (don't dig clothing out of it), place the pad on the wound, wrap until no white shows, tie off to the side of the wound (snug — about two fingers under the knot). 2. Manual pressure — if bleeding continues, place a hand on the dressing and press firmly for 5 to 10 minutes (a conscious casualty can do this himself). 3. Elevate the limb 2 to 4 inches above the heart while dressing/pressure continue. 4. Pressure dressing — pad a wad of material directly over the dressing and bandage it down tight over the wound site with a nonslip knot directly over the wound — snug, but not so tight it acts like a tourniquet (about one finger under it). 5. Digital (pressure-point) pressure — the FM teaches 11 pressure points where an artery can be pressed against bone with fingers, thumbs, or hands as a holding measure. 6. Tourniquet — when the ladder fails or a limb is severed (F-4)."],
    source: "FM 4-25.11, §§2-13–2-20",
  },
  {
    id: "F-4", code: "F-4", title: "Tourniquets — the 2002 rule and the 2021 rule, printed both", card: true,
    body: ["FM 4-25.11 (2002/2004) rule: the tourniquet is the last resort, used when the dressing/pressure ladder has failed or an arm or leg has been severed. Placement: around the limb between the wound and the body trunk (heart) — never directly over a wound, a fracture, or a joint; for maximum effectiveness, on the upper arm or above the knee on the thigh. Tighten until the bright red bleeding has stopped. Never loosen or remove it once applied. Mark the casualty: a “T” on the forehead plus the time of application, and treat for shock and evacuate. Current TCCC rule (2021; task 081-COM-1002): for life-threatening limb bleeding, go to the tourniquet early, not last — in Care Under Fire, apply it “high and tight” on the limb (over the uniform if the exact wound site can't be seen), from the casualty's own IFAK (CAT), with a goal of application in about one minute; record the casualty on DD Form 1380 (TCCC casualty card). The difference is real and deliberate: two decades of combat data moved the tourniquet from last resort to first response for life-threatening limb bleeding. Non-life-threatening bleeding still starts with dressing and pressure."],
    diagram: "Two side-by-side limb drawings: left, FM placement — band between wound and trunk, above the knee, with a “T + time” forehead inset; right, TCCC placement — CAT high and tight on the thigh over the uniform. Both labeled with source and year.",
    diagramKind: "limb",
    source: "FM 4-25.11, §2-20; TCCC Guidelines 2021 via task 081-COM-1002",
    flag: "Conflict C-1 (the headline conflict): FM 2002 last-resort vs current casualty-care fast — both print, dated; the current standard is presented as current.",
  },
  {
    id: "F-5", code: "F-5", title: "Shock — recognize it, treat it, know when NOT to use the position", card: true,
    body: ["Shock is the body failing to circulate enough blood — treat it as expected after any serious wound, not as a surprise. Signs (FM 4-25.11 §§2-21–2-24): clammy skin — cool, pale, and damp (in dark-skinned casualties, look for a grayish/ashen cast); restlessness and nervousness; thirst; visible blood loss; confusion; fast breathing; nausea or vomiting; blotched or bluish skin, especially around the mouth and lips; sweating freely; may pass out. Treatment — the FM's PELCRN: Position the casualty on their back; Elevate the legs; Loosen clothing at the neck, waist, or wherever it binds; Climatize — protect from getting too hot or too cold; Reassure — keep the casualty calm; Notify medical personnel. Do NOT use the shock position (legs elevated) when the casualty has a head injury, an abdominal wound, or an unsplinted fractured leg (FM's own exceptions). Give nothing by mouth to a casualty in shock beyond what medical personnel direct."],
    source: "FM 4-25.11, §§2-21–2-24",
    flag: "Conflict C-2: PELCRN's leg elevation is the FM's protocol, printed as the FM's with its exceptions; current casualty care treats positioning more cautiously — leg elevation is not presented here as a universal current standard.",
  },
  {
    id: "F-6", code: "F-6", title: "Fractures — splint them where they lie", card: true,
    body: ["Two basic types (FM 4-25.11, Ch. 3): open (compound) — bone has broken the skin; closed (simple) — it hasn't. Signs include bleeding (open), bone protruding (open), pain, swelling, deformity or limbs at unusual angles, and grinding sensations. The FM's proven principle: splint them where they lie — do not straighten or move the limb to make splinting easier. With an open fracture, stop the bleeding first, then splint. A splint must immobilize the joints above and below the break; tie bandages with the knots against the splint, snug but not circulation-cutting, and check the pulse beyond the splint. Improvise from what's carried — the FM's era examples include boards, poles, rifles/entrenching tools as rigid material, and padding from clothing. The quickest leg splint in the FM is the uninjured leg itself: pad between the legs and tie the broken leg securely to the unbroken leg."],
    source: "FM 4-25.11, Ch. 3 (fractures and splinting)",
  },
  {
    id: "F-7", code: "F-7", title: "Sprains and strains — the quiet injuries",
    body: ["A sprain is a stretched or torn ligament at a joint; a strain is the same injury to muscle or tendon. The buddy-aid response in the FM's musculoskeletal teaching: rest the part, splint or support it if movement is painful, apply cold if available in the first day, elevate, and get it evaluated — a “sprain” that can't bear weight may be a fracture, and only imaging settles it. Do not let a casualty “walk off” a joint injury on a ruck march and turn a sprain into a separation."],
    source: "FM 4-25.11, Ch. 3 (musculoskeletal injuries)",
    flag: "Locator note (pack Flag F-11): this entry is sourced to the FM's musculoskeletal chapter; its exact section number was not pinned in the research pass, so none is printed.",
  },
  {
    id: "F-8", code: "F-8", title: "Burns — basics", card: true,
    body: ["Four types in the FM: thermal, chemical, electrical, laser. The first step is always the same: remove the casualty from the source of the burn (and make sure the source can't injure the rescuer — especially electrical). Then: stop any still-burning/smoldering process, remove jewelry and loose items near the burn before swelling, but do not peel away clothing stuck to the burn. Cover with a clean, dry dressing. Do not apply ointments, creams, or medication to a burn in the field. The primary objectives of burn first aid are to lessen or prevent shock and infection — treat for shock (F-5), give nothing by mouth to a badly burned casualty unless medical personnel direct it, and evacuate: burns of the face/airway, hands, genitals, or large areas are urgent. Current standard (task 081-COM-1007, Sep 2025, Dist A) performs burn care IAW TC 4-02.1 and TCCC Guidelines 2024, treating shock IAW 081-COM-1001."],
    source: "FM 4-25.11, Ch. 3 (burns); task 081-COM-1007",
  },
  {
    id: "F-9", code: "F-9", title: "Heat cramps and heat exhaustion", card: true,
    body: ["GTA 05-08-012 (sourcing TB MED 507, Table 3-1, and TC 4-02.1) groups heat cramps and heat exhaustion together, and they are the warning stage — treat them seriously and they usually stay minor. Symptoms: dizziness; headache; loss of appetite; nausea (with or without vomiting/diarrhea); weakness; clumsy/unsteady walk; profuse sweating with pale (or gray), moist, cool skin; normal to slightly elevated body temperature; muscle cramps (heat cramps). First aid: rest the casualty in the shade; loosen the uniform and remove headgear (exception: in a chemical environment, do not loosen/remove clothing); have the casualty drink 2 quarts of water over 1 hour; seek medical aid; evacuate if there is no improvement in 30 minutes or the condition worsens."],
    source: "GTA 05-08-012 (Feb 2021), “Heat Cramps and Heat Exhaustion”; underlying TB MED 507, Table 3-1",
  },
  {
    id: "F-10", code: "F-10", title: "Heat stroke — cool first, fast", card: true,
    body: ["Heat stroke is a medical emergency (GTA 05-08-012): evacuate to a medical facility immediately and reduce body temperature — cooling starts before and during transport, not after arrival. Symptoms: hot, dry skin (it may initially be moist or wet); headache; convulsions and chills; dizziness; nausea; weakness; pulse and respirations weak and rapid; vomiting; confusion/mumbling (check with mental-status questions); combative behavior; passing out. First aid: cool the casualty with any means available, even before removing clothes; strip clothing if possible (with a same-gender helper present where the GTA specifies); rapidly cool by immersing the casualty in cold water if available; or use ice sheets — cover all but the face, keeping the sheet soaked; place ice packs in the groin, armpits (axillae), and around the neck; fan the entire body; stop cooling if the casualty starts shivering; give nothing by mouth; the same person should observe the casualty through cooling and evacuation to spot changes."],
    source: "GTA 05-08-012 (Feb 2021), “Heat Stroke”",
    flag: "Conflict C-5: the FM 4-25.11-era framing predates the immersion/ice-sheet protocol; the GTA's 2021 protocol printed here is the current card.",
  },
  {
    id: "F-11", code: "F-11", title: "Work, rest, and water — the TB MED 507 table",
    body: ["Prevention is a schedule, not a suggestion. GTA 05-08-012 carries TB MED 507's Table 3-1 work/rest and water-consumption table by heat category (WBGT): Category 1 (78–81.9°F) through Category 5/Black (>90°F), with work/rest minutes and water intake (qt/hr) for Easy, Moderate, and Hard work — e.g., at Black, Hard work is 10/50 work/rest with 1 qt/hr. Two ceilings print on the card: hourly fluid intake should not exceed 1½ quarts; daily intake should not exceed 12 quarts. Adjustments: add 5°F to WBGT if wearing body armor, 10°F if in MOPP overgarment. Prevention basics from the same card: drink frequently; eat meals and salt food to taste; dark yellow, infrequent urination signals dehydration; do heavy work in cooler hours; full heat acclimatization takes 1 to 2 weeks; Soldiers being treated for medical conditions are at greater risk."],
    source: "GTA 05-08-012 (Feb 2021), “Work, Rest, and Water Consumption” + “Basic Heat Injury Prevention”; TB MED 507, Table 3-1",
  },
  {
    id: "F-12", code: "F-12", title: "Hyponatremia — too much water is also an emergency", card: true,
    body: ["Hyponatremia (water intoxication) is a medical emergency that can be mistaken for heat stroke, though treatment is very different (GTA 05-08-012). It most often occurs in initial entry training, anytime over-hydration happens. Symptoms: mental status changes; vomiting; a history of drinking a large volume of water; poor food intake; distended/bloated abdomen; large amounts of clear urine. First aid — note the reversal: do NOT give more water or IV fluids; if the casualty is awake, allow salty foods or snacks; seek medical aid; evacuate immediately."],
    source: "GTA 05-08-012 (Feb 2021), “Hyponatremia”",
  },
  {
    id: "F-13", code: "F-13", title: "Cold injury prevention — dress in layers, stay dry",
    body: ["GTA 05-08-012's basics: wear enough clothing/equipment to stay warm and dress in layers; avoid prolonged exposure of unprotected skin to extreme cold and/or wind; keep clothing and equipment as dry as possible; change socks at least daily, more often if damp; keep clothing loose so circulation isn't decreased; remove layers as needed to limit sweating during activity; eat hot meals and drink hot liquids. Risk rises sharply in wet weather or wet clothing, particularly when wind chill is 40°F or below — water conducts heat far faster than air. TB MED 508's memory aid: COLD — keep clothing Clean, avoid Overheating, wear Loose and in Layers, keep Dry. The GTA also publishes the windchill temperature index (enter with air temperature and wind speed; the intersection gives the equivalent chill temperature) and five cold categories — Wet Cold (+39 to +20°F), Dry Cold (+19 to −4°F), Intense Cold (−5 to −25°F), Extreme Cold (−26 to −40°F), Hazardous Cold (below −40°F) — with wet cold called out as potentially more dangerous than colder dry cold because everything gets wet."],
    source: "GTA 05-08-012 (Feb 2021), “Basic Cold Injury Prevention” + “Cold Weather Categories”; TB MED 508 (COLD acronym)",
  },
  {
    id: "F-14", code: "F-14", title: "Hypothermia", card: true,
    body: ["Hypothermia is a medical emergency (GTA 05-08-012, sourcing TB MED 508, Fig. 3-4). Symptoms: vigorous shivering; apathy or lethargy; confusion; sleepiness; slurred speech; and, late, nearly undetectable breathing and pulse. First aid: remove the casualty from the cold environment; replace wet clothing with dry; rewarm by covering with blankets or sleeping bags; if conscious, slowly give high-calorie sweet warm fluids; evacuate for medical treatment."],
    source: "GTA 05-08-012 (Feb 2021), “Cold Injury Symptoms / First Aid — Hypothermia”",
  },
  {
    id: "F-15", code: "F-15", title: "Frostbite", card: true,
    body: ["Symptoms (GTA/TB MED 508): numbness in the affected area; tingling, blistered, swollen, or tender areas; pale, yellowish, waxy-looking skin (grayish in dark-skinned Soldiers); frozen tissue that feels wooden to the touch; significant pain after rewarming. First aid: rewarm at room temperature or with body heat; loosen or remove constricting clothing and remove jewelry; prevent further cold exposure; if there is any possibility the tissue will refreeze, it is better NOT to thaw it — thawing then refreezing damages tissue further; avoid excessive heat (open flame, stove tops, steam, heat packs) and do not rub the affected tissue; significant pain can follow rapid rewarming; evacuate for medical treatment. Priority rule printed on the card: suspect hypothermia and treat it appropriately — preventing hypothermia matters more than rewarming frostbite."],
    source: "GTA 05-08-012 (Feb 2021), “Cold Injury Symptoms / First Aid — Frostbite”",
  },
  {
    id: "F-16", code: "F-16", title: "Immersion foot (trench foot)", card: true,
    body: ["Caused by prolonged wet, cold feet — it does not require freezing temperatures. Symptoms (GTA/TB MED 508): cold, numb feet that may progress to hot with shooting pains; slight sensory change for 2 to 3 days; swelling and redness; the foot may become pale and blue; aches, increased pain sensitivity, and infection risk. First aid: remove wet and constrictive clothing; wash and dry the foot gently; elevate the foot and cover with layers of loose, warm clothing and allow it to rewarm; do not pop blisters, apply lotions or creams, massage the foot, or expose it to extreme heat; do not walk on the foot."],
    source: "GTA 05-08-012 (Feb 2021), “Immersion Foot (Trench Foot)”; TB MED 508, Fig. 3-4",
  },
  {
    id: "F-17", code: "F-17", title: "Get help, document, evacuate", card: true,
    body: ["Every entry above ends the same way: get the casualty into the medical system. Buddy aid buys time; it does not replace treatment. Published practice: call for medical help early (the FM's shock steps end at Notify medical personnel — that's a step, not an afterthought); record what was done on the casualty — tourniquet gets a “T” + time on the forehead (FM) and the casualty's treatment is recorded on DD Form 1380, the TCCC casualty card (task 081-COM-1002); and request evacuation with the 9-line MEDEVAC format, which already lives in Battle Book's Field Tools as the interactive 9-Line card — this section cross-references it rather than duplicating it. When in doubt about severity, escalate: the GTA's standing instruction for both heat and cold emergencies is evacuate."],
    source: "FM 4-25.11, Ch. 2; task 081-COM-1002; GTA 05-08-012. 9-line format: existing Battle Book Field Tools 9-Line MEDEVAC card",
    flag: "Pack Flag F-9: the 9-line MEDEVAC is a cross-reference, not new content — no second 9-line entry is built from this pack.",
  },
];

/* ============================ DRILL & CEREMONIES (ARMY) ============================ */

export const DRILL_INTRO =
  "Army drill from TC 3-21.5, Drill and Ceremonies (May 3, 2021, Distribution A — supersedes the Jan 20, 2012 edition). This is Army drill; the Marine Corps, Air Force/Space Force, and Navy publish their own manuals with real differences (pack Flag F-8) — nothing here is presented as joint. Manual of arms ships as positions and carries only.";

export const DRILL: FieldEntry[] = [
  {
    id: "D-1", code: "D-1", title: "What drill and ceremonies are for",
    body: ["The TC's framing (Ch. 1): drill enables a commander or NCO to move a unit from one place to another in an orderly manner, aids disciplinary training by instilling habits of precision and response to the leader's orders, and develops Soldiers in the practice of commanding troops. Ceremonies use the same movements with a different primary value: to render honors, preserve tradition, and stimulate esprit de corps. Everything in this part is one of those two things — moving well, or honoring well."],
    source: "TC 3-21.5, Ch. 1",
  },
  {
    id: "D-2", code: "D-2", title: "The anatomy of a command", card: true,
    body: ["Most drill commands have two parts (Ch. 3): the preparatory command, which states the movement to be carried out and mentally prepares the Soldier (given in a normal, carrying voice), and the command of execution, which tells when to carry it out (given sharply). In “Forward, MARCH,” Forward prepares and MARCH executes. On the march, the interval between the preparatory command and the command of execution is one step or one count. AS YOU WERE revokes a preparatory command — it cannot cancel a command of execution once given."],
    source: "TC 3-21.5, Ch. 3",
  },
  {
    id: "D-3", code: "D-3", title: "The types of commands",
    body: ["TC 3-21.5 Ch. 3 works with these command types: Two-part commands (preparatory + execution, D-2). Combined commands — the two parts combined into a single command, executed immediately, such as FALL IN, AT EASE, and REST. Supplementary commands — commands subordinate leaders give to reinforce or complete the leader's command (e.g., squad leaders echoing within their elements). Directives — oral orders that direct subordinate leaders to put their elements into motion, rather than moving the whole formation directly."],
    source: "TC 3-21.5, Ch. 3",
    flag: "Conflict C-3: some study sources list a fifth type, mass commands; the TC's chapter treats mass commands within its command discussion. This entry prints the four-type structure and names the fifth as the disputed one.",
  },
  {
    id: "D-4", code: "D-4", title: "The command voice",
    body: ["Chapter 3 breaks the command voice into trainable qualities (per the 2021 contents: Distinctiveness, Inflection, Cadence — §§3-3ff): the voice must be distinct (every word understandable at the back of the formation), correctly inflected (the preparatory command rises and carries; the command of execution is a sharp, snapped report), and given so the formation can keep cadence — commands land on the correct foot/count so the unit moves as one. Commands are given from the position of attention, loud enough for the whole formation — volume is judged by the farthest Soldier, not the nearest."],
    source: "TC 3-21.5, Ch. 3 (§§3-2–3-5 per contents)",
  },
  {
    id: "D-5", code: "D-5", title: "Position of attention", card: true,
    body: ["The foundation position (Ch. 4, §4-1). Bring the heels together sharply on line, toes pointing out equally, forming a 45-degree angle. Weight rests evenly on heels and balls of both feet; legs straight without locking the knees; body erect, hips level, chest lifted and arched, shoulders square; arms hang straight at the sides, thumbs along the trouser seams, hands cupped naturally; head and eyes straight to the front. Silence and immobility are part of the position."],
    diagram: "Front and side views of a standing figure at attention with measurement callouts: heels together, feet at 45°, thumbs on trouser seams, chin level, eyes front.",
    diagramKind: "figure",
    source: "TC 3-21.5, Ch. 4, Section I",
  },
  {
    id: "D-6", code: "D-6", title: "The four rest positions at the halt", card: true,
    body: ["All rests are executed from the halt, from attention (Ch. 4, §4-2). Parade Rest — commanded only from attention (“Parade, REST”): move the left foot about 10 inches to the left, legs straight, hands in the small of the back centered on the belt, fingers extended and joined, thumbs interlocked, right palm to the rear; head and eyes straight ahead; remain silent and do not move. Stand at Ease — execute Parade Rest, but turn head and eyes directly toward the person in charge of the formation; At Ease or Rest may be executed from it. At Ease — the Soldier may move, but must remain standing and silent, with the right foot in place. Rest — may move, talk, smoke, or drink unless otherwise directed; must remain standing with the right foot in place. (Fall Out is a separate dismissal from formation, not one of the four rests.)"],
    diagram: "Four panels left to right — Parade Rest (feet apart, hands clasped behind back), Stand at Ease (same, head turned toward an instructor figure), At Ease (relaxed stance, right foot pinned with a ground marker), Rest (relaxed, talking pair, right foot pinned).",
    diagramKind: "figure",
    source: "TC 3-21.5, Ch. 4, Section I (Rest Positions at the Halt)",
    flag: "Conflict C-4: Parade Rest foot spacing prints here as the Army TC's “about 10 inches”; a 12-inch spacing seen in other renditions is non-Army-TC (Air Force-derived) wording.",
  },
  {
    id: "D-7", code: "D-7", title: "Facings at the halt", card: true,
    body: ["Facing movements are two-count movements executed at the halt, from attention, at quick-time cadence (Ch. 4). Left (Right), FACE — to face left: slightly raise the right heel and left toe and turn 90° to the left on the left heel, assisted by slight pressure on the ball of the right foot (count one); bring the right heel up to the left to resume attention (count two) — mirror for right face. About, FACE — on FACE, place the toe of the right foot about half a foot's length to the rear and slightly left of the left heel (count one); turn 180° to the right on the left heel and ball of the right foot, resuming attention (count two)."],
    diagram: "Top-down foot diagrams for Left Face and About Face: footprint pairs showing start position, pivot foot shaded, the arc of the turn, and the finish position at attention.",
    diagramKind: "figure",
    source: "TC 3-21.5, Ch. 4, Section I (Facing at the Halt)",
  },
  {
    id: "D-8", code: "D-8", title: "The hand salute",
    body: ["The hand salute (Ch. 4) is rendered from attention (or while marching at quick time): right hand raised smartly, fingers extended and joined, thumb along the forefinger, palm down, the tip of the middle finger touching the brim of the headgear (or the forehead/eyebrow edge when uncovered, per the manual's variations), upper arm horizontal, forearm inclined at 45°, hand and wrist straight — then cut away smartly on the second count. The salute is the greeting of the profession; the TC also covers saluting in formation, in groups, and when reporting. (Detailed special-case rules live in the TC and in Traditions & Lore's courtesy content — cross-linked, not duplicated.)"],
    source: "TC 3-21.5, Ch. 4 (Hand Salute)",
  },
  {
    id: "D-9", code: "D-9", title: "Steps and marching basics", card: true,
    body: ["The marching vocabulary (Ch. 4, marching movements). Quick time: 120 steps per minute with a 30-inch step — the normal march. Double time: 180 steps per minute, also with a 30-inch step — a jog in cadence. The 15-inch step family: the half step (15-inch step used to close distance or adjust), and the left step, right step, and backward step, all taken at 15 inches. Mark Time — marching in place at quick-time cadence, feet raised about 2 inches (per the TC's description), used to hold position while keeping cadence and alignment while moving elements dress. Halt brings the formation to a stop over two counts from quick time. All marching movements begin on the left foot unless the TC specifies otherwise."],
    diagram: "A cadence/step chart drawn as three stride silhouettes: 30-inch stride labeled “Quick time — 120/min,” 30-inch stride with running posture labeled “Double time — 180/min,” and a 15-inch stride labeled “Half/side/backward steps — 15 in.”",
    diagramKind: "chart",
    source: "TC 3-21.5, Ch. 4 (marching movements); cadences as published",
  },
  {
    id: "D-10", code: "D-10", title: "Marching movements overview — turns, columns, and changing direction",
    body: ["Beyond steps, Ch. 4–8 movements change the formation's direction or shape on the march: column movements (Column Right/Left) turn a marching column 90° at a fixed point; flank movements turn individuals 90° while marching without breaking the formation's direction of travel structure; Rear March reverses direction 180°; File from the Right/Left and Column of Twos reshape a column's width. This entry prints these at overview level — what each movement accomplishes and when it's used — with execution detail left to the TC; the formation diagrams (D-11/D-12) show the shapes they move between."],
    source: "TC 3-21.5, Chs. 4, 6–8 (movement sets)",
  },
  {
    id: "D-11", code: "D-11", title: "Squad formations — line and column",
    body: ["The squad has two prescribed formations — line and column — and may form a column of twos from column (Ch. 6, §6-2, Fig. 6-1). In line, squad members stand abreast, numbered right to left; in column, members stand one behind another, numbered front to rear, with the squads abreast of each other inside the platoon. The squad normally marches in column; it may march in line for short distances. The squad leader's post when drilling separately: three steps in front of and centered on the squad in line; three steps to the left and centered in column/column of twos; as part of a larger unit, the squad leader occupies the number-one (base) position. Forming commands: FALL IN (normal interval), At Close Interval, FALL IN, and In Column, FALL IN. Correct distance between Soldiers in column is about 36 inches — one arm's length plus 6 inches (Ch. 6 note)."],
    diagram: "Squad in line: nine dots abreast with numbers 1–9 running right to left, squad leader dot three steps in front and centered. Squad in column: nine dots single file numbered front to rear, 36-inch spacing brackets, squad leader three steps to the left and centered; small inset of the same squad opened into a column of twos.",
    diagramKind: "formation",
    source: "TC 3-21.5, Ch. 6, §§6-2–6-8, Fig. 6-1",
  },
  {
    id: "D-12", code: "D-12", title: "Platoon formations — line and column",
    body: ["The platoon builds from its squads (Ch. 7): platoon in line — squads in line abreast of one another, platoon leader and platoon sergeant at their prescribed posts; platoon in column — squads in column, one behind another in platoon order, the formation it normally marches in. Platoons make up a company and squads make up a platoon; company, battalion, and brigade formations scale the same two basic shapes — line and column — at every echelon (Ch. 9 covers battalion/brigade variations, including mass)."],
    diagram: "Platoon in line: three squad lines side by side with gaps, platoon leader centered three steps in front, platoon sergeant behind the line. Platoon in column: three squad columns in sequence with 36-inch in-file spacing and squad gaps marked; platoon leader at the head-left post as prescribed for marching.",
    diagramKind: "formation",
    source: "TC 3-21.5, Chs. 7–9",
  },
  {
    id: "D-13", code: "D-13", title: "Interval, distance, alignment — the geometry words", card: true,
    body: ["The vocabulary every formation diagram uses (Chs. 4–7): Interval — the lateral space between Soldiers shoulder to shoulder, measured right to left: normal interval is one arm's length (fingertips to the next Soldier's shoulder when the arm is extended); close interval is roughly elbow-to-arm spacing (about 4 inches between elbows as taught with Fig. 6-3 alignment). Distance — the space front to back: about 36 inches in squad column (arm's length plus 6 inches, Ch. 6) and 40 inches between ranks/elements at the larger echelons as the TC prescribes. Cover — aligning directly behind the Soldier to your front at correct distance. Dress/alignment — establishing the line: Dress Right, DRESS sets interval and alignment looking right along the rank (Fig. 6-2 shows proper alignment at normal interval); COVER / RE-COVER aligns files in column (§6-19)."],
    diagram: "A rank of four Soldiers, one with left arm extended fingertips-to-shoulder labeled “normal interval,” next pair at elbow spacing labeled “close interval”; below, a two-man file with a 36-inch bracket labeled “distance — cover.”",
    diagramKind: "formation",
    source: "TC 3-21.5, Chs. 4–7, Figs. 6-1–6-3, §6-19",
  },
  {
    id: "D-14", code: "D-14", title: "The guidon — basics",
    body: ["The guidon is a company, battery, or troop identification flag, present at all unit formations unless the commander directs otherwise (TC 3-21.5, Appendix H — Manual of the Guidon). The guidon bearer's posts: when the unit is forming, the bearer stands one step in front of and two 15-inch steps to the right of, and facing, the person forming the unit; if the first sergeant formed the unit, on the command POST the bearer moves forward three steps to the post near the commander. In a company line formation, the bearer's post is two 15-inch steps to the rear and two 15-inch steps to the left of the company commander. When the company in line is faced right for marching, the bearer faces right in marching, comes to the double-time carry, and double-times to a position five steps forward of and centered on the squad leaders of the first platoon (three steps at platoon level when a guidon is authorized); if the commander takes the head of the column six steps in front, the bearer executes two left steps to keep the offset. On a preparatory command, the guidon goes to the raised vertical position. Appendix H publishes the basic guidon positions and carries (order, carry, trail, double-time carry, present) — this entry covers identity, posts, and movement; position-by-position execution stays in the TC."],
    diagram: "Two formation snippets: (1) line formation — commander dot with guidon-bearer dot two steps rear-left, both measured in 15-inch step brackets; (2) column head — squad leaders' line, guidon five steps forward and centered, commander six steps forward with the bearer's two-left-step offset shown by a dashed path.",
    diagramKind: "formation",
    source: "TC 3-21.5, Appendix H",
  },
  {
    id: "D-15", code: "D-15", title: "Colors and the color guard — overview",
    body: ["At battalion and above, the Colors — the national color and the organizational color — are carried by a color guard and hold the place of honor in the formation. In battalion formations (Ch. 9), the Colors are normally positioned at the center of the battalion in line or column, and four steps to the rear of the staff in mass formation; the command sergeant major forms one step to the rear and centered on the Colors. The color guard's movements, the manual of the colors, and honors to the Colors (present arms, salutes, dipping rules) are published in TC 3-21.5 Part Two and the appendix material on the Colors; this entry prints the overview — what the Colors are, where they stand, who guards them — and cross-links the honors detail to Traditions & Lore rather than duplicating it."],
    diagram: "A color-guard block drawn in marching order: national color on the marching right, organizational color beside it, two rifle guards on the outer flanks, centered within a battalion line outline.",
    diagramKind: "formation",
    source: "TC 3-21.5, Ch. 9 (battalion formations) and Part Two (ceremonies)",
  },
  {
    id: "D-16", code: "D-16", title: "Ceremonies overview — reviews, and the daily honors",
    body: ["Part Two of TC 3-21.5 is ceremonies. The centerpiece is the review (Ch. 10): a ceremony used to honor a visiting high-ranking commander, official, or dignitary and let them observe the state of training of a command; to present decorations and awards; to honor unit or individual achievements; and to commemorate events. Battalion and brigade drill (Ch. 9) provides the formations reviews are built from. The daily honors — reveille, retreat, and To the Color — run on AR 600-25 customs with TC 3-21.5 movements: at retreat, the flag is lowered while “Retreat” sounds and personnel come to parade rest at the first note; as “To the Color” begins, come to attention and present arms (salute) at its first note, and return to order arms at its last note. The meanings, histories, and etiquette of these ceremonies are covered in Battle Book's Traditions & Lore — this entry cross-links there and does not duplicate them."],
    source: "TC 3-21.5, Part Two incl. Ch. 10 (Reviews); retreat sequence per TC 3-21.5 / AR 600-25",
    flag: "Verification note (pack Flag F-5): TC 3-21.5's Distribution-A status, date, and contents were verified on the official armypubs PDF; some execution details in Part 3 rest on TC-derived Army study material pending a build-time diff against the full TC text — the retreat/To the Color sequence in this entry is one of them.",
  },
  {
    id: "D-17", code: "D-17", title: "Manual of arms — overview (positions and carries only)",
    body: ["TC 3-21.5 Ch. 5 publishes the manual of arms for the service rifle. This entry covers it at overview level only — position names and what the position looks like, no employment content. The positions/carries a new Soldier meets: Order Arms (the starting and finishing position of all rifle movements — butt resting on the marching surface beside the right foot, barrel to the rear); Trail Arms (rifle lifted about 3 inches and inclined slightly forward, for short movements and facings from order); Port Arms (rifle carried diagonally across the body, about 4 inches from the waist, muzzle up to the left); Right / Left Shoulder Arms (rifle resting on the shoulder, the marching carry); Present Arms (rifle vertical, centered in front of the body — the rifle salute); Inspection Arms (from order via port, bolt opened and locked to the rear for inspection); Sling Arms / Unsling Arms; and rests with the rifle (at Parade Rest the muzzle is thrust forward, toe of the butt staying on the ground). Execution counts and transitions are the TC's to teach; the app shows the shapes so a new member can recognize and name them."],
    diagram: "A six-panel position strip of one rifleman: Order, Trail, Port, Right Shoulder, Present, Inspection Arms — silhouettes only, each panel captioned with the position name and one-line description.",
    diagramKind: "strip",
    source: "TC 3-21.5, Ch. 5 (Manual of Arms)",
    flag: "Scope (pack Flag F-6): positions/carries only, per the guardrail — no step-by-step execution counts are researched or built from this pack.",
  },
];

/** CARD-marked land-nav entries — the print-deck feed (11). */
export const LANDNAV_CARDS = LANDNAV.filter((e) => e.card);
/** CARD-marked first-aid entries — the print-deck feed (13). */
export const FIRSTAID_CARDS = FIRSTAID.filter((e) => e.card);
