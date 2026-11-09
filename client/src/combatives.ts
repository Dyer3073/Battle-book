// Close Combat section data — verbatim transcription of the researched
// combatives pack (~/workspace/military-app/combatives/combatives.md).
//
// CATALOG ONLY: technique names, belt assignments, categories, and
// purpose-level descriptions, exactly as the pack writes them. NO
// step-by-step execution instructions and no manual text or figures are
// reproduced anywhere in this section — the pack's hard constraint.

export interface CombatTechnique {
  name: string;
  category: string;
  purpose: string;
}

export interface CombatGroup {
  family: string;
  techniques: CombatTechnique[];
  /** Pack-flagged gap note shown in place of an unitemized technique list. */
  note?: string;
}

export interface CombatBelt {
  belt: string;
  hours: string;
  focus: string;
  signifies: string;
  groups: CombatGroup[];
}

export const SAFETY_FRAMING: string[] = [
  "These techniques can cause serious injury or death. MCRP 3-02B — the MCMAP manual — states plainly that it is not designed as a self-study or independent course; it is for review after initial training from a certified Marine Corps martial arts instructor (MAI) or instructor trainer (MAIT).",
  "This catalog teaches the curriculum structure — names, belts, and purposes. It is NOT a self-study course. Train only on proper mats, with required gear, under a certified instructor (MAI/MAIT for MCMAP).",
  "The Army's combatives publication, TC 3-25.150, states that ignorance and loss of control are principal reasons for most combatives-related training injuries — its program builds in protective equipment (gloves, headgear, mats), certified instructors, and referees/safeties supervising live training.",
  "Chokes, strangles, joint locks, and throws are never practiced live outside supervised instruction.",
];

export const MCMAP_FRAMING = {
  motto: "One mind, any weapon.",
  purpose:
    "The focus of MCMAP is the personal development of each Marine in a team framework using a standardized, trainable, and sustainable close combat fighting system. It is a weapon-based system — rooted in the credo that every Marine is a rifleman — integrating techniques with the equipment and tactics of the modern battlefield, designed to increase warfighting capability, self-confidence and esprit de corps, and to foster the warrior ethos.",
  disciplines: [
    {
      name: "Mental discipline",
      text: "Warfighting study (art of war, tactical decision-making, expeditionary maneuver warfare, common skills, force protection, operational risk management) plus professional military education: professional reading program, martial culture studies, history of war, Marine Corps history/customs/traditions.",
    },
    {
      name: "Character discipline",
      text: "The core values program (honor, courage, commitment) and leadership training (mentoring, leadership schools). Built so that as a Marine's lethality increases with physical skill, maturity, judgment, and self-discipline increase with it; commanders certify both before advancement. The aim is the \"ethical warrior.\"",
    },
    {
      name: "Physical discipline",
      text: "Fighting techniques plus the combat conditioning program. The fighting component has four elements: rifle and bayonet, edged weapons, weapons of opportunity, and unarmed combat, applied across a continuum of force / spectrum of violence.",
    },
  ],
  tacticalConcepts:
    "Tactical concepts taught with the techniques: achieving a decision, gaining an advantage (using the aggressor's strength and momentum against him), speed, adapting, exploiting success.",
  instructors: [
    {
      name: "Martial Arts Instructor (MAI, MOS 0916)",
      text: "Develops users at the small unit level; teaches and can award belts up to their own certification (green-belt instructors may teach/award tan–green; brown adds brown; black belt 1st degree instructors may teach tan–black). First instructor level is green belt.",
    },
    {
      name: "Martial Arts Instructor Trainer (MAIT, MOS 0917)",
      text: "Develops instructors, builds the unit-level plan, coordinates unit MCMAP resources; can run instructor courses at unit level and train/test Marines up to black belt instructor. The MAIT course is a 7-week, MOS-producing course at the lead school in Quantico, VA. Attendance: green belt instructor or higher, sergeant or above with appropriate PME, commander's consent, first-class PFT, medical screening.",
    },
  ],
  sustainment:
    "Sustainment: user-level Marines are responsible for sustaining the techniques of their belt (participating in technique classes, tie-ins, warrior studies, belt-level drills, and free sparring) under MAI supervision; advancement testing requires demonstrated maintained proficiency in the current belt plus proficiency in the next belt's physical techniques. Tan belt itself carries no separate sustainment-hour requirement (it is sustained through follow-on belt training).",
  blackDegrees:
    "Black belt degrees continue 2nd through 6th: continued development and mastery of all disciplines; proven leader, teacher, and mentor. The specific additional requirements per degree are prescribed in MCO 1500.59 — verify them against the current order before relying on degree-by-degree details.",
};

export const MCMAP_BELTS: CombatBelt[] = [
  {
    belt: "Tan Belt",
    hours: "27.5 hrs minimum instruction (excl. remediation/testing), no prerequisites; earned in entry-level training",
    focus:
      "The basic fundamentals — stance, movement, basic strikes, how to fall safely, introductory chokes/throws/counters, and responsible use of force on the continuum. ~37 named techniques plus fundamentals.",
    signifies:
      "Basic techniques; basic understanding of leadership and core values; the minimum requirement for all Marines.",
    groups: [
      {
        family: "Fundamentals (concepts, not scored techniques)",
        techniques: [
          { name: "Ranges of Close Combat", category: "concept", purpose: "Long-, mid-, and close-range engagement distances and which weapons (bayonet, knife/punches/kicks, elbows/knees/grappling) apply at each." },
          { name: "Target Areas of the Body", category: "concept", purpose: "The readily accessible target regions (head, neck, torso, groin, extremities) and why they matter." },
          { name: "Weapons of the Body", category: "concept", purpose: "The arms (hands, forearms, elbows) and legs (knees, shins, instep, toe, heel, ball of foot) as the body's striking tools." },
          { name: "Basic Warrior Stance", category: "fundamental", purpose: "The balanced fighting stance (feet apart, hands up, elbows in, chin down) that every MCMAP technique starts from; it protects the head and torso while keeping all weapons of the body available." },
          { name: "Angles of Movement", category: "fundamental", purpose: "Moving off the line of attack at roughly 45-degree angles to gain position and power while staying in the warrior stance." },
        ],
      },
      {
        family: "Punches",
        techniques: [
          { name: "Lead Hand Punch", category: "strike", purpose: "A fast, snapping straight punch with the lead hand; used to stun an aggressor, close distance, and set up follow-on techniques." },
          { name: "Rear Hand Punch", category: "strike", purpose: "The power punch, thrown with the rear hand using leg drive and hip/shoulder rotation; used to inflict maximum effect once an opening is created." },
          { name: "Uppercut", category: "strike", purpose: "A rising punch delivered upward at close range; used when the fight has closed to clinch distance." },
          { name: "Hook", category: "strike", purpose: "A horizontal, arcing punch around the side of an aggressor's guard; used at close-to-mid range." },
        ],
      },
      {
        family: "Break-Falls (falling safely — trained so Marines can be thrown without injury)",
        techniques: [
          { name: "Front Break-Fall", category: "fall", purpose: "Absorbing a forward fall by spreading impact across the arms and body instead of the head/wrists." },
          { name: "Back Break-Fall", category: "fall", purpose: "Absorbing a backward fall while protecting the head and spine." },
          { name: "Side Break-Fall", category: "fall", purpose: "Absorbing a sideways fall along the arm and side of the body." },
          { name: "Forward Shoulder Roll", category: "fall", purpose: "Rolling diagonally across the shoulder to dissipate the energy of a fall or throw and come back to the feet." },
        ],
      },
      {
        family: "Bayonet Techniques (rifle-and-bayonet element)",
        techniques: [
          { name: "Straight Thrust", category: "bayonet", purpose: "The primary thrusting attack with the bayonet; the core long-range close-combat technique." },
          { name: "Horizontal Buttstroke", category: "bayonet", purpose: "A horizontal strike with the rifle butt; used when the aggressor is too close to thrust." },
          { name: "Vertical Buttstroke", category: "bayonet", purpose: "A vertical butt strike, used at close range as an alternative to the thrust." },
          { name: "Smash", category: "bayonet", purpose: "A downward smashing strike with the rifle; used to drive through an aggressor's guard or weapon." },
          { name: "Slash", category: "bayonet", purpose: "A slashing cut with the bayonet blade; used to keep an aggressor at distance or open a line for the thrust." },
          { name: "Disrupt", category: "bayonet", purpose: "A parrying/disrupting motion that deflects an aggressor's weapon or arm and creates the opening for a follow-on attack." },
        ],
      },
      {
        family: "Upper Body Strikes",
        techniques: [
          { name: "Hammer Fist", category: "strike", purpose: "A downward strike with the bottom of the closed fist; a hard-surface strike usable in any direction at close range." },
          { name: "Eye Gouge", category: "strike", purpose: "A close-range technique against the eyes; taught as a high-end-of-force option for life-threatening situations." },
          { name: "Vertical Elbow Strike (Low to High)", category: "strike", purpose: "A rising elbow strike; elbows are short-range power weapons when the fight is too close to punch." },
          { name: "Forward Horizontal Elbow Strike", category: "strike", purpose: "A forward-driving horizontal elbow; used to strike while closing distance." },
        ],
      },
      {
        family: "Lower Body Strikes",
        techniques: [
          { name: "Vertical Knee Strike", category: "strike", purpose: "A straight upward knee; the basic close-range leg weapon, typically used when controlling an aggressor's upper body." },
          { name: "Front Kick", category: "strike", purpose: "A straight kick with the ball of the foot; used to stop an aggressor's advance or create distance at mid range." },
          { name: "Round Kick", category: "strike", purpose: "An arcing kick delivered with the shin/instep; a power kick to the legs or body at mid range." },
          { name: "Vertical Stomp", category: "strike", purpose: "A downward stomping kick; used against a downed aggressor or to attack the foot/ankle at very close range." },
        ],
      },
      {
        family: "Chokes (introduction)",
        techniques: [
          { name: "Rear Choke", category: "choke", purpose: "A choke applied from behind the aggressor; the introductory MCMAP choke, taught with its safeties and release discipline." },
          { name: "Figure Four Variation", category: "choke", purpose: "A variation of the rear choke using a figure-four arm configuration for additional leverage and control." },
        ],
      },
      {
        family: "Throws",
        techniques: [
          { name: "Leg Sweep", category: "throw", purpose: "The Tan Belt throw: sweeping the aggressor's leg out while off-balancing the upper body to take him to the ground; it introduces using the aggressor's momentum against him." },
        ],
      },
      {
        family: "Counters to Strikes",
        techniques: [
          { name: "Counter to Rear Hand Punch", category: "counter", purpose: "Defending the aggressor's power punch by moving off the angle of attack and countering." },
          { name: "Counter to the Rear Leg Kick", category: "counter", purpose: "Defending a rear-leg kick and responding before the aggressor can recover." },
        ],
      },
      {
        family: "Counters to Chokes and Holds",
        techniques: [
          { name: "Counter to the Rear Choke", category: "counter", purpose: "Escaping and countering a choke applied from behind before it can take effect." },
          { name: "Counter to the Rear Headlock", category: "counter", purpose: "Escaping a headlock from behind and regaining a controlling position." },
          { name: "Counter to the Rear Bear Hug", category: "counter", purpose: "Escaping a bear hug from behind by attacking the hold's structure and base." },
        ],
      },
      {
        family: "Unarmed Manipulation (compliance / control techniques — the low end of the force continuum)",
        techniques: [
          { name: "Basic Wristlock Takedown", category: "manipulation", purpose: "Using wrist joint pressure to take a subject to the ground in a controlled way." },
          { name: "Reverse Wristlock Takedown", category: "manipulation", purpose: "A reverse-direction wristlock takedown, giving a second control option from a different grip." },
          { name: "Armbar Takedown", category: "manipulation", purpose: "Controlling the arm at the elbow to force a subject down; introduces joint manipulation for compliance." },
        ],
      },
      {
        family: "Armed Manipulations (weapon retention)",
        techniques: [
          { name: "Rifle and Shotgun Retention Techniques", category: "retention", purpose: "Techniques to keep control of a long gun when an aggressor grabs it — the first weapon-retention skill set in the program." },
          { name: "Blocks", category: "retention/defense", purpose: "Blocking an aggressor's attempt to seize or strike with the weapon while retaining it." },
        ],
      },
      {
        family: "Knife Fighting (edged-weapons element, introduction)",
        techniques: [
          { name: "Vertical Slash", category: "knife", purpose: "A vertical slashing attack with the knife; part of the introductory edged-weapon offense set." },
          { name: "Vertical Thrust", category: "knife", purpose: "A straight thrusting attack with the knife; pairs with the slash to cover the two basic angles of knife attack." },
        ],
      },
    ],
  },
  {
    belt: "Gray Belt",
    hours: "25 hrs",
    focus:
      "Build on Tan fundamentals with new strike families (knife hands, palm heel), the first full throw, front-side counters mirroring the Tan rear-side set, escort/control manipulation for detainee handling, and the introduction of ground fighting. ~36 named techniques.",
    signifies:
      "Intermediate understanding of the basic disciplines; mastery of Tan techniques + proficiency in Gray techniques. Gray belts are qualified to attend the instructor course (MOS 0916).",
    groups: [
      {
        family: "Bayonet",
        techniques: [
          { name: "Disrupt and Thrust While Closing", category: "bayonet", purpose: "Combining the disrupt with a thrust while moving forward into the aggressor; teaches attacking during the close instead of from a standstill." },
        ],
      },
      {
        family: "Upper Body Strikes",
        techniques: [
          { name: "Chin Jab / Palm Heel Strike", category: "strike", purpose: "An upward open-hand strike with the heel of the palm; delivers force without risking the knuckles and can drive the aggressor's head back." },
          { name: "Inside / Reverse Knife Hand Strike", category: "strike", purpose: "A chopping strike with the edge of the hand delivered from the inside/reverse direction; adds an angle the basic knife hand doesn't cover." },
          { name: "Vertical Knife Hand Strike", category: "strike", purpose: "A downward chopping hand-edge strike; used at close range against the neck/shoulder line." },
          { name: "Rear Horizontal Elbow Strike", category: "strike", purpose: "A horizontal elbow thrown to the rear; used against an aggressor positioned behind or beside." },
          { name: "Vertical Elbow Strike (High to Low)", category: "strike", purpose: "A downward elbow strike; the mirror of the Tan low-to-high elbow, used when the target is below shoulder height." },
        ],
      },
      {
        family: "Lower Body Strikes",
        techniques: [
          { name: "Horizontal Knee Strike", category: "strike", purpose: "A knee driven horizontally into the aggressor; complements the vertical knee for targets to the side." },
          { name: "Side Kick", category: "strike", purpose: "A kick delivered with the heel/edge of the foot to the side; a powerful distance-keeping and stopping kick." },
          { name: "Axe Stomp", category: "strike", purpose: "A heavy downward heel stomp; a finishing lower-body strike against a downed aggressor." },
        ],
      },
      {
        family: "Chokes",
        techniques: [
          { name: "Front Choke", category: "choke", purpose: "A choke applied facing the aggressor; extends choke training from the rear (Tan) to the front aspect." },
        ],
      },
      {
        family: "Throws",
        techniques: [
          { name: "Hip Throw", category: "throw", purpose: "The first full throwing technique: loading the aggressor onto the hip and throwing him over it; teaches leverage-based takedowns rather than strength-based ones." },
        ],
      },
      {
        family: "Counters to Strikes",
        techniques: [
          { name: "Counter to the Lead Hand Punch", category: "counter", purpose: "Defending the fast lead punch (the most common opening strike) and countering inside its recovery." },
          { name: "Counter to a Lead Leg Kick", category: "counter", purpose: "Defending a lead-leg kick and responding; mirrors the Tan rear-leg counter." },
        ],
      },
      {
        family: "Counters to Chokes and Holds",
        techniques: [
          { name: "Counter to the Front Choke", category: "counter", purpose: "Escaping a two-handed front choke before it takes effect." },
          { name: "Counter to the Front Headlock", category: "counter", purpose: "Escaping a headlock applied from the front/side." },
          { name: "Counter to the Front Bear Hug", category: "counter", purpose: "Escaping a bear hug from the front; completes the front/rear hold-counter set with Tan." },
        ],
      },
      {
        family: "Unarmed Manipulation (escort and cuffing — detainee-handling skills)",
        techniques: [
          { name: "Wristlock Come-Along", category: "manipulation", purpose: "A wristlock used to move a subject under control (a \"come-along\") rather than take him down." },
          { name: "Takedown from a Wristlock Come-Along and Double Flexi-Cuff", category: "manipulation", purpose: "Taking the subject down from the come-along and securing both wrists with flexi-cuffs; a full control-to-restraint sequence." },
          { name: "Escort Position", category: "manipulation", purpose: "The standard controlled-escort hold used to move a compliant or semi-compliant subject." },
          { name: "Escort Position Takedown and Single Flexi-Cuff", category: "manipulation", purpose: "Converting the escort position into a takedown and single-cuff restraint when a subject resists." },
        ],
      },
      {
        family: "Armed Manipulation (weapon retention under grabs)",
        techniques: [
          { name: "Aggressor Grabs With Both Hands — Pushing", category: "retention", purpose: "Retaining the rifle when an aggressor grabs it with both hands and pushes." },
          { name: "Aggressor Grabs With Both Hands Pulling (Stationary)", category: "retention", purpose: "Retaining the weapon against a stationary two-handed pull." },
          { name: "Aggressor Grabs With Both Hands Pulling (Moving)", category: "retention", purpose: "Retaining the weapon while being pulled/moved by the grab." },
          { name: "Aggressor Grabs Overhanded With Strikes", category: "retention", purpose: "Retaining the weapon against an overhand grab combined with strikes." },
          { name: "Aggressor Grabs Underhanded With Strikes", category: "retention", purpose: "Retaining the weapon against an underhand grab combined with strikes." },
        ],
      },
      {
        family: "Knife Techniques",
        techniques: [
          { name: "Forward Thrust", category: "knife", purpose: "A thrust delivered forward from the standard grip; the basic offensive knife thrust." },
          { name: "Forward Slash", category: "knife", purpose: "A forward slashing attack; the basic offensive knife slash." },
          { name: "Reverse Thrust", category: "knife", purpose: "A thrust delivered on the reverse angle; covers attacking after a missed or parried first strike." },
          { name: "Reverse Slash", category: "knife", purpose: "A slash on the return/reverse path; keeps the blade threatening in both directions." },
          { name: "Bulldogging", category: "knife", purpose: "A driving, continuous-pressure knife attack method; teaches pressing the attack to overwhelm a defense." },
        ],
      },
      {
        family: "Weapons of Opportunity (improvised weapons — e.g., an entrenching tool or similar object)",
        techniques: [
          { name: "Straight Thrust", category: "weapon of opportunity", purpose: "Thrusting with an improvised weapon as with a bayonet." },
          { name: "Vertical Strike", category: "weapon of opportunity", purpose: "A downward strike with the improvised weapon." },
          { name: "Forward Strike", category: "weapon of opportunity", purpose: "A forward swinging strike." },
          { name: "Reverse Strike", category: "weapon of opportunity", purpose: "A strike delivered on the reverse swing; the set covers all four basic angles with any handheld object." },
        ],
      },
      {
        family: "Ground Fighting (introduction)",
        techniques: [
          { name: "Counter to Mount Position", category: "ground", purpose: "Escaping the mount (aggressor on top, straddling) — the first ground-survival skill: getting out from under a dominant position." },
          { name: "Counter to Guard Position", category: "ground", purpose: "Working against an aggressor's guard (his legs around your torso) to improve position or disengage." },
        ],
      },
    ],
  },
  {
    belt: "Green Belt",
    hours: "25 hrs",
    focus:
      "Intermediate fundamentals — a second choke aspect, a second major throw, counters to circular strikes, defensive blocks against knife and improvised-weapon attacks with follow-on techniques, and the first submission holds from the ground. Green is the first belt at which a Marine can become a Martial Arts Instructor (MAI). ~17 itemized techniques plus one unitemized section (flagged below).",
    signifies:
      "The NCO skill level; intermediate fundamentals; mastery of Tan–Gray + Green proficiency; leadership/core-values PME requirements.",
    groups: [
      {
        family: "Bayonet Techniques",
        techniques: [
          { name: "Disrupt and Thrust While Closing With a Moving Aggressor", category: "bayonet", purpose: "The Gray closing attack performed against an aggressor who is also moving; adds timing and footwork under motion." },
          { name: "Buttstroke Offline", category: "bayonet", purpose: "A buttstroke delivered while moving off the aggressor's line of attack; combines defense (angle) with the strike." },
        ],
      },
      {
        family: "Chokes",
        techniques: [
          { name: "Side Choke", category: "choke", purpose: "A choke applied from the side of the aggressor; completes the rear/front/side choke family." },
        ],
      },
      {
        family: "Throws",
        techniques: [
          { name: "Shoulder Throw", category: "throw", purpose: "Throwing the aggressor over the shoulder using his forward momentum and an arm/shoulder grip; a second leverage throw alongside the hip throw." },
        ],
      },
      {
        family: "Counters to Strikes",
        techniques: [
          { name: "Counter to a Round Punch", category: "counter", purpose: "Defending a wide, circular punch (hook-type attack) by moving inside its arc and countering." },
          { name: "Counter to Round Kick", category: "counter", purpose: "Defending the round kick and countering before the aggressor resets." },
        ],
      },
      {
        family: "Lower Body Strikes",
        techniques: [],
        note: "This section is present in MCRP 3-02B Chapter 4 (§V), but its individual techniques are not itemized in the public table of contents reviewed for this catalog. The list is intentionally not reconstructed from secondary sources — the itemized techniques live in MCRP 3-02B itself.",
      },
      {
        family: "Unarmed Manipulations",
        techniques: [
          { name: "Enhanced Pain Compliance", category: "manipulation", purpose: "Advanced pain-compliance holds that add pressure/control options beyond the basic wristlocks, for controlling a resistant subject at the low end of the force continuum." },
          { name: "Reverse Wristlock Come-Along", category: "manipulation", purpose: "The come-along performed with a reverse wristlock; a second escort option for the opposite grip or side." },
          { name: "Controlling Techniques", category: "manipulation", purpose: "A set of techniques for maintaining physical control of a subject once contact is made (holds and control positions short of a takedown)." },
        ],
      },
      {
        family: "Knife Techniques (defense against the knife)",
        techniques: [
          { name: "Counter to a Vertical Strike With Follow-On Techniques", category: "counter", purpose: "Defending a downward/vertical knife strike and flowing into follow-on control or striking techniques." },
          { name: "Counter to a Forward Strike With Follow-On Techniques", category: "counter", purpose: "Defending a forward knife strike with follow-on techniques to finish the encounter." },
        ],
      },
      {
        family: "Weapons of Opportunity (defense against improvised weapons)",
        techniques: [
          { name: "Block for a Vertical Strike With Follow-On Strikes", category: "counter", purpose: "Blocking a downward improvised-weapon strike and counter-striking." },
          { name: "Block for a Forward Strike With Follow-On Strikes", category: "counter", purpose: "Blocking a forward swing and counter-striking." },
          { name: "Block for a Reverse Strike With Follow-On Strikes", category: "counter", purpose: "Blocking a reverse/backhand swing and counter-striking." },
          { name: "Block for a Straight Thrust With Follow-On Strikes", category: "counter", purpose: "Deflecting a thrust from an improvised weapon and counter-striking." },
        ],
      },
      {
        family: "Ground Fighting (first submissions)",
        techniques: [
          { name: "Armbar From Mount Position", category: "ground/submission", purpose: "A straight armbar applied while you hold the mount; the first finishing hold taught, from the dominant top position." },
          { name: "Armbar From Guard Position", category: "ground/submission", purpose: "A straight armbar applied from the guard (your legs around the aggressor); teaches that the bottom position can also finish a fight." },
        ],
      },
    ],
  },
  {
    belt: "Brown Belt",
    hours: "33 hrs",
    focus:
      "Introduction to advanced techniques — multiple-attacker bayonet work, ground chokes and leg locks, defenses against a handheld weapon while unarmed, and the firearm retention/disarmament set. ~22 named techniques/applications.",
    signifies:
      "Continued intermediate training plus introduction to advanced techniques; mastery of Tan–Green + Brown proficiency; develops ability to teach leadership and core values.",
    groups: [
      {
        family: "Bayonet Techniques (multiple aggressors)",
        techniques: [
          { name: "One-on-Two Engagement", category: "bayonet", purpose: "Engaging two aggressors with rifle and bayonet; teaches prioritization and positioning against numbers." },
          { name: "Two-on-One Engagement", category: "bayonet", purpose: "Coordinating with a partner against a single aggressor." },
          { name: "Two-on-Two Engagement", category: "bayonet", purpose: "Paired fighting against two aggressors; the team-fighting capstone of the bayonet element." },
        ],
      },
      {
        family: "Ground Fighting",
        techniques: [
          { name: "Basic Leg Lock", category: "ground/submission", purpose: "An introductory leg lock attacking the aggressor's leg joints from the ground; expands submissions beyond the arms and neck." },
        ],
      },
      {
        family: "Ground Chokes (the standing choke family taken to the ground)",
        techniques: [
          { name: "Rear Ground Choke", category: "ground/choke", purpose: "The rear choke applied in a ground position." },
          { name: "Figure-4 Variation of Rear Choke", category: "ground/choke", purpose: "The figure-four configuration applied on the ground." },
          { name: "Front Choke", category: "ground/choke", purpose: "The front choke applied from a ground position." },
          { name: "Side Choke", category: "ground/choke", purpose: "The side choke applied from a ground position." },
        ],
      },
      {
        family: "Throws",
        techniques: [
          { name: "Major Outside Reap Throw — Aggressor Pushing", category: "throw", purpose: "Reaping the aggressor's leg from the outside while driving him backward, applied when he is pushing into you." },
          { name: "Major Outside Reap Throw — Aggressor Pulling", category: "throw", purpose: "The same reap applied when the aggressor is pulling; one throw, both directions of the aggressor's force." },
        ],
      },
      {
        family: "Unarmed Versus Handheld (defending empty-hand against a weapon)",
        techniques: [
          { name: "Hollowing Out With Follow-On Technique", category: "counter", purpose: "Collapsing/hollowing the body away from a weapon strike to make it miss, then following on with a counter technique." },
          { name: "Forward Armbar Counter", category: "counter", purpose: "Countering a handheld-weapon attack by controlling the weapon arm into a forward armbar." },
          { name: "Reverse Armbar Counter", category: "counter", purpose: "The reverse-direction armbar counter to a weapon attack, for the opposite angle of attack." },
          { name: "Bent Armbar Counter", category: "counter", purpose: "A bent-arm (figure-four style) armbar counter; a third weapon-arm control option." },
        ],
      },
      {
        family: "Firearm Retention (protecting your own pistol/rifle from a grab)",
        techniques: [
          { name: "Blocking Technique", category: "retention", purpose: "Blocking and defeating a grab attempt on the holstered/carried firearm." },
          { name: "Armbar Technique", category: "retention", purpose: "Using an armbar against the grabbing arm to break the attempt and retain the weapon." },
          { name: "Wristlock Technique", category: "retention", purpose: "Using a wristlock on the grabbing hand to defeat the grab." },
          { name: "Same Side Grab: From Front", category: "retention", purpose: "Retention against a same-side grab from the front." },
          { name: "Same Side Grab: From Rear", category: "retention", purpose: "Retention against a same-side grab from behind." },
        ],
      },
      {
        family: "Firearm Disarmament (against an aggressor pointing a pistol at you)",
        techniques: [
          { name: "Counter to Pistol to: Front", category: "disarmament", purpose: "Countering a pistol pointed at you from the front to gain control of the weapon." },
          { name: "Counter to Pistol to: Rear", category: "disarmament", purpose: "Countering a pistol pointed at you from behind." },
        ],
      },
      {
        family: "Knife Techniques (defense)",
        techniques: [
          { name: "Block for a Reverse Strike", category: "counter", purpose: "Blocking a reverse-angle knife strike; completes the knife-defense block set begun at Green." },
          { name: "Block for a Straight Thrust", category: "counter", purpose: "Deflecting/blocking a straight knife thrust." },
        ],
      },
    ],
  },
  {
    belt: "Black Belt, 1st Degree",
    hours: "40 hrs supervised training",
    focus:
      "Advanced fundamentals — advanced throws, ground submissions from the scarf hold, chokes that finish from the guard, leg attacks, pistol counters at the head, and improvised-weapon (garrote) techniques. ~19 named techniques/technique groups. Black belt degrees continue 2nd through 6th (see the program overview below).",
    signifies:
      "Advanced fundamentals; serious student of the martial arts; mastery of Tan–Brown + Black proficiency; proven leader and mentor.",
    groups: [
      {
        family: "Bayonet Techniques",
        techniques: [
          { name: "Bayonet Training: Stages One–Three", category: "bayonet", purpose: "At black belt the bayonet element becomes a staged training progression (the instructor learns to teach and run bayonet training, including common errors), rather than new single techniques." },
        ],
      },
      {
        family: "Throws",
        techniques: [
          { name: "Sweeping Hip Throw", category: "throw", purpose: "An advanced hip throw that adds a leg sweep to the hip-throw mechanic; the capstone throw of the system." },
        ],
      },
      {
        family: "Ground Fighting",
        techniques: [
          { name: "Face Rip From the Guard", category: "ground", purpose: "A close-quarters ground technique from the guard using the face/eyes as the target; a high-force option when pinned in a life-threatening fight." },
          { name: "Straight Armbar From a Scarf Hold", category: "ground/submission", purpose: "A straight armbar finished from the scarf-hold (side control) position." },
          { name: "Bent Armbar From a Scarf Hold", category: "ground/submission", purpose: "A bent-arm (figure-four) armbar from the same scarf-hold position." },
        ],
      },
      {
        family: "Unarmed Manipulation",
        techniques: [
          { name: "Neck-Crank Takedown", category: "manipulation", purpose: "A takedown that controls the aggressor by the head/neck structure; the most advanced manipulation in the system, taught with strict safety controls." },
        ],
      },
      {
        family: "Chokes",
        techniques: [
          { name: "Triangle Choke", category: "choke", purpose: "A choke applied with the legs from the guard, using the aggressor's own arm to complete it; a signature ground choke." },
          { name: "Guillotine Choke", category: "choke", purpose: "A front headlock-style choke applied when an aggressor drives in low (e.g., a tackle attempt); turns a takedown attempt into a finish." },
        ],
      },
      {
        family: "Leg Attacks",
        techniques: [
          { name: "Rolling Knee Bar", category: "submission", purpose: "A knee bar entered by rolling into the aggressor's leg; an advanced leg submission." },
          { name: "Sitting Knee Bar", category: "submission", purpose: "A knee bar finished from a seated position; the stationary counterpart to the rolling entry." },
        ],
      },
      {
        family: "Firearm Disarmament",
        techniques: [
          { name: "Counter to Pistol to the Head: Two-Handed", category: "disarmament", purpose: "Countering a pistol held to the head using a two-handed control of the weapon." },
          { name: "Counter to Pistol to the Head: One-Handed", category: "disarmament", purpose: "The one-handed variant of the pistol-to-the-head counter." },
        ],
      },
      {
        family: "Upper Body Strikes",
        techniques: [
          { name: "Cupped Hand Strike", category: "strike", purpose: "A strike with the cupped hand (taught against the ears); a concussive close-range strike." },
          { name: "Face Smash", category: "strike", purpose: "Driving the aggressor's face/head into a surface or your own mass; an advanced close-range strike for desperate situations." },
        ],
      },
      {
        family: "Knife Techniques",
        techniques: [
          { name: "Lead Hand Knife", category: "knife", purpose: "Fighting with the knife in the lead hand; changes the ranges and angles of the basic knife set." },
          { name: "Slashing Techniques", category: "knife", purpose: "The advanced slashing series, chaining the belt-level slashes into combinations." },
          { name: "Thrusting Techniques", category: "knife", purpose: "The advanced thrusting series, chaining thrusts and recovering from parries." },
          { name: "Reverse-Grip Knife Techniques", category: "knife", purpose: "Fighting with the knife in a reverse grip; the final knife configuration in the system." },
        ],
      },
      {
        family: "Improvised Weapons",
        techniques: [
          { name: "Garrote From the Rear", category: "improvised weapon", purpose: "Using a cord-like improvised weapon as a garrote from behind; a silent-sentry-removal class technique, the highest-force end of the curriculum." },
          { name: "Garrote From the Front", category: "improvised weapon", purpose: "The garrote applied from the front aspect." },
        ],
      },
    ],
  },
];

export const MCMAP_COUNTS =
  "Catalog counts from the MCRP 3-02B table of contents: Tan ~37 named techniques + 5 fundamentals/concepts · Gray ~36 · Green ~17 itemized (+ 1 unitemized lower-body-strikes section) · Brown ~22 · Black 1st degree ~19 + the 3-stage bayonet instructor progression — about 131 named MCMAP techniques/applications in total.";

export const MACP = {
  name: "US Army — Modern Army Combatives Program (MACP)",
  source:
    "Governing source: TC 3-25.150, Combatives (2017); proponent is the U.S. Army Combatives School, Fort Benning (Fort Moore), Georgia. Founded on Gracie jiu-jitsu principles adapted for soldiers fighting in kit with weapons.",
  purpose:
    "The Army Combatives Program enhances unit combat readiness by building Soldiers' personal courage, confidence, and resiliency as well as their situational responsiveness to close quarters threats in the operational environment. The fight strategy is grappling-based: close the distance while protecting yourself, gain a dominant position, and finish the fight — always in the context of a weapons-based fight where the goal may be to create space to use a weapon, retain your weapon, or control a subject.",
  levels: [
    {
      name: "Basic Combatives Course (BCC) — formerly Level 1",
      length: "40 hours (1 week)",
      purpose:
        "Produces fire team, squad, and platoon trainers who can teach the basic tasks and drills all Soldiers must know: the fundamental ground-fighting and stand-up base.",
      covers:
        "Basic Ground Fighting: basic fight strategy (close, dominate, finish); ground grappling positions and movement (mount, guard, side control, back control and how to escape/improve each); clinch fighting (achieving the clinch safely against a striking opponent); takedowns; basic submissions and escapes — the publicly taught set includes the armbar from guard and mount, triangle choke, rear choke, cross-collar choke, guard pass, and mount escapes (arm trap and roll / shrimping). Also basic stand-up: stance, movement, basic punches and defenses, and weapon-retention awareness. Competition begins at basic rules (grappling only, from the knees).",
    },
    {
      name: "Tactical Combatives Course (TCC) — formerly Level 2",
      length: "80 hours (2 weeks)",
      purpose:
        "Advanced techniques and tactical application: vehicle extraction, room clearing, detainee handling under tactical conditions; produces trainers for larger elements.",
      covers:
        "Intermediate Ground Fighting: intermediate fight strategy; clinch fighting expanded; grappling with strikes (fighting on the ground against a striking opponent); regaining the initiative; more advanced submissions, sweeps, and leg attacks; striking expanded (Muay Thai-style clinch and knee work); tactical applications — fighting in kit, weapon retention, vehicle extraction, room clearing, and control of detainees. Competition progresses through standard to intermediate rules (limited striking).",
    },
    {
      name: "Combatives Master Trainer Course (CMTC) — formerly Levels 3/4 combined",
      length: "160 hours (4 weeks)",
      purpose:
        "Produces Master Trainers capable of building and running unit/post combatives programs and certifying BCC/TCC.",
      covers:
        "Advanced Ground Fighting & Contact Weapons: advanced ground fighting; striking skills and striking defense; advanced clinch positions, pummeling, and knee strikes; contact weapons — attacking and defending with thrusting weapons (knife/bayonet class) and grappling with weapons involved. Master Trainers also learn program management, refereeing (standard rules referee exam), and how to run competitions, which MACP uses deliberately as a training motivator with graduated rules (Basic → Standard → Intermediate → Advanced, the last essentially MMA rules for division-level finals).",
    },
  ],
  note: "Item-by-item technique lists for MACP are the Combatives School's controlled course material (TC 3-25.150 and the school's course handbooks) — this section presents the verified level structure and technique families only, not an exhaustive Army technique catalog.",
};

export const OTHER_BRANCH_PROGRAMS = [
  {
    branch: "US Air Force — Air Force Combatives Program (AFCP)",
    text: "Launched January 2008, explicitly based on the Modern Army Combatives Program and adapted for Airmen, with a defensive emphasis — fend off and subdue an attacker, create space, and get to a weapon or help. No belts — short courses plus instructor tiers:",
    points: [
      "Basic Warrior Course — 10 hours. The foundation course for all Airmen: stand-up defense, ground defense, and weapons retention — basic ground-fighting techniques, escapes, arm bars, and chokeholds at introductory level, plus the warrior-ethos/character tie-ins.",
      "Advanced Warrior Course — 10 hours. Follow-on skills building on the basic course.",
      "Basic Instructor Course — appears two ways in official coverage: +20 hours beyond the warrior courses per USAFE/Aviano program implementation, and a 40-hour Basic Instructor Course format run by AFCP cadre. Both formats are shown as published rather than reconciled. Graduates can teach the basic-level AFCP curriculum in their units.",
      "Instructor tiers above basic: Senior Instructor and Master Instructor; master AFCP instructors run wing programs.",
      "Who takes it: all Airmen are the target audience at the basic level; it is embedded in officer accession training, run at wing level for general Airmen, and deepest for Security Forces and SERE specialists — SERE runs its own advanced pipeline (40-hour technical-training course, then an 80-hour advanced SERE Combatives Program).",
    ],
    flag: "AFCP has no published public technique-by-technique syllabus comparable to MCRP 3-02B; the above is the course structure and technique families (stand-up defense, ground defense, weapons retention, escapes, armbars, chokes) as described in official Air Force coverage.",
  },
  {
    branch: "US Navy — no service-wide combatives belt program",
    text: "The Navy has no equivalent of MCMAP or MACP — no Navy-wide martial arts curriculum, belt system, or combatives instructor MOS/NEC open to all sailors. Defensive tactics live inside the security career fields instead:",
    points: [
      "Master-at-Arms (MA) sailors and Naval Security Force personnel receive defensive tactics and use-of-force training (verbal de-escalation, control holds, takedowns, restraint/handcuffing, baton and non-lethal weapons, weapon retention) as part of MA \"A\" school and NSF sustainment training, under the Navy's use-of-force continuum — law-enforcement oriented, aimed at controlling and detaining subjects rather than battlefield close combat.",
      "Expeditionary and special communities (VBSS/boarding teams, Naval Expeditionary Combat Command units, NSW) receive mission-specific close-quarters and defensive-tactics training through their own pipelines, not a fleet-wide program.",
      "Individual commands sometimes run voluntary combatives/MMA clubs or host sister-service courses (sailors can attend MACP/MCMAP courses on a space-available basis), but these are local, not a Navy program.",
    ],
    flag: "No public official Navy publication lays out a defensive-tactics technique catalog comparable to MCRP 3-02B; MA defensive-tactics detail sits in rating/security-force training materials that are not publicly posted as a curriculum. This entry is the overview by design.",
  },
  {
    branch: "US Coast Guard — law-enforcement defensive tactics (no belt program)",
    text: "The Coast Guard is a law-enforcement service, and its close-quarters training is defensive tactics (DT) in the law-enforcement model, not a martial-arts belt program. There is no CG belt system.",
    points: [
      "DT is taught principally through the Maritime Law Enforcement (MLE) pipeline — Maritime Law Enforcement Academy (MLEA, Charleston, SC) courses such as Boarding Officer and Boarding Team Member training — and to Maritime Enforcement (ME) rating members and boat crews who conduct boardings.",
      "Content at overview level: verbal control and de-escalation, control holds, takedowns, wrist releases/escapes, ground restraint, handcuffing, baton, and weapon retention — the same control-oriented family visible in official USCG training documentation of reservist/LE refresher courses.",
      "Deployable Specialized Forces units (e.g., MSRT/MSST) receive advanced close-quarters training through their own tactical pipelines.",
    ],
    flag: "The Coast Guard does not publish a public DT technique catalog; the detailed curriculum is internal to MLEA course materials, so this entry stays at overview level.",
  },
  {
    branch: "US Space Force — uses the Department of the Air Force program",
    text: "The Space Force has no separate combatives program or belt system. Guardians fall under the Department of the Air Force, and their combatives training is the Air Force Combatives Program (above):",
    points: [
      "AFCP classes at Space Force bases mix Airmen and Guardians (e.g., AFCP courses run by Security Forces at Schriever SFB with Space Force personnel participating, and Buckley SFB's combatives program led by an Air Force Senior Combatives Instructor serving the 460th Security Forces Squadron's mixed population).",
      "Guardians also attend sister-service courses — e.g., Guardians graduating the Army's one-week basic combatives course at Fort Carson (grappling, clinching, takedowns, submission holds) alongside soldiers.",
    ],
    flag: "Cross-reference AFCP — there is no distinct Space Force technique list.",
  },
];

export const COMBAT_SOURCES =
  "Sources: MCRP 3-02B, Marine Corps Martial Arts Program (21 Nov 2011) — Ch. 1 (disciplines, belt table, MAI/MAIT), Ch. 2–6 (per-belt technique tables of contents); MCO 1500.59/1500.59A and official Marines.mil / MCCS MCMAP program pages (belt hours, instructor structure); TC 3-25.150, Combatives (2017) and U.S. Army Combatives School public course pages (BCC/TCC/CMTC structure); Air University, ACC, and DVIDS AFCP coverage; official USCG defensive-tactics documentation and the MLEA boarding pipeline; Navy Master-at-Arms / Naval Security Force defensive-tactics structure. The MCMAP manual's own execution text and figures are not reproduced — names, belts, and purposes only.";
