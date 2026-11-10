// Deadlines & Countdowns — computed ONLY from the member's own entered
// dates and the windows already documented in this app's sections:
//   TAP counseling: start at least 365 days before separation (Transition)
//   SkillBridge: the final 180 days of service (Transition)
//   BDD claim window: opens 180 days before separation, closes 90 days
//     before (Claims)
//   Separation Health Assessment: within the final 90 days (Claims /
//     Retirement, as documented)
//   Intent to file: expires 1 year after the ITF date (Claims)
//   ID card: expires on the entered date (Find Anything — ID & Admin)
//   FVAP: file your FPCA every January and every time you move (Readiness)
// Nothing here introduces a new rule or date.

export type MemberDates = {
  easDate: string;
  itfDate: string;
  idCardExpiry: string;
  /** F-9 (Round 2): the member's own Family Care Plan review date,
   * when they've set one — it always controls over any suggestion. */
  fcpReviewDate?: string;
  /** F-9: when the plan was last validated. With a published annual
   * clock (Navy / Marine Corps / Air Force) the board SUGGESTS a
   * review date one year out; for Army / Coast Guard (and any other
   * branch) no published clock was verified in the Round 2 research
   * pack, so no default is suggested — the card says so. */
  fcpLastValidated?: string;
  /** The profile's branch — only used to decide whether a published
   * FCP clock exists to suggest from. */
  branch?: string;
  /** F-9: a partner's return / deployment date — a free member-
   * entered date with no rules attached. */
  partnerReturnDate?: string;
};

export type DeadlineStateTone = "official" | "amber" | "red" | "plain";

export type DeadlineCardData = {
  key: string;
  title: string;
  rule: string;
  state: string;
  stateTone: DeadlineStateTone;
  detail: string;
  view: string;
  anchor?: string;
  cta: string;
  /** ISO date (YYYY-MM-DD) the card counts down to, when it has one —
   * drives the For You "Next deadline" soonest pick. */
  dueDate?: string;
};

function parseDay(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

function todayStart(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(d: Date, n: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

function addYears(d: Date, n: number): Date {
  const out = new Date(d);
  out.setFullYear(out.getFullYear() + n);
  return out;
}

function daysBetween(from: Date, to: Date): number {
  return Math.round((to.getTime() - from.getTime()) / 86_400_000);
}

function fmt(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function dayWord(n: number): string {
  return `${n} day${n === 1 ? "" : "s"}`;
}

const FVAP_CARD: DeadlineCardData = {
  key: "fvap",
  title: "Vote absentee — FPCA",
  rule: "File your FPCA every January and every time you move.",
  state: "EVERY JANUARY",
  stateTone: "plain",
  detail: "The Federal Post Card Application registers you and requests your ballot for the year — a fresh one each January, and again after every move.",
  view: "readiness",
  anchor: "Money Traps & Voting",
  cta: "Open FVAP in Readiness",
};

export function computeDeadlineCards(dates: MemberDates): DeadlineCardData[] {
  const today = todayStart();
  const cards: DeadlineCardData[] = [];

  const eas = parseDay(dates.easDate);
  if (eas) {
    // TAP — start at least 365 days before separation (Transition).
    const tapBy = addDays(eas, -365);
    if (today > eas) {
      cards.push({
        key: "tap",
        title: "TAP counseling",
        rule: "Start TAP at least 365 days before separation.",
        state: "PASSED",
        stateTone: "plain",
        detail: `Your separation date (${fmt(eas)}) has passed — TAP was due by ${fmt(tapBy)}.`,
        dueDate: dates.easDate,
        view: "transition",
        anchor: "Six months from EAS — start here",
        cta: "Open Transition",
      });
    } else if (today > tapBy) {
      cards.push({
        key: "tap",
        title: "TAP counseling",
        rule: "Start TAP at least 365 days before separation.",
        state: "START NOW",
        stateTone: "amber",
        detail: `The start-by date (${fmt(tapBy)}) has passed and separation is ${dayWord(daysBetween(today, eas))} away — begin TAP now if you haven't.`,
        dueDate: dates.easDate,
        view: "transition",
        anchor: "Six months from EAS — start here",
        cta: "Open Transition",
      });
    } else {
      cards.push({
        key: "tap",
        title: "TAP counseling",
        rule: "Start TAP at least 365 days before separation.",
        state: "START BY",
        stateTone: "official",
        detail: `Start by ${fmt(tapBy)} — ${dayWord(daysBetween(today, tapBy))} from now, a full year before your ${fmt(eas)} separation.`,
        dueDate: `${tapBy.getFullYear()}-${String(tapBy.getMonth() + 1).padStart(2, "0")}-${String(tapBy.getDate()).padStart(2, "0")}`,
        view: "transition",
        anchor: "Six months from EAS — start here",
        cta: "Open Transition",
      });
    }

    // SkillBridge — the final 180 days of service (Transition).
    const sbOpen = addDays(eas, -180);
    if (today > eas) {
      cards.push({
        key: "skillbridge",
        title: "SkillBridge",
        rule: "SkillBridge runs in the final 180 days of service.",
        state: "CLOSED",
        stateTone: "plain",
        detail: `The window closed at your separation date, ${fmt(eas)}.`,
        dueDate: dates.easDate,
        view: "transition",
        anchor: "Get placed before you get out",
        cta: "Open Transition",
      });
    } else if (today >= sbOpen) {
      cards.push({
        key: "skillbridge",
        title: "SkillBridge",
        rule: "SkillBridge runs in the final 180 days of service.",
        state: "OPEN NOW",
        stateTone: "official",
        detail: `You are in the final 180 days — ${dayWord(daysBetween(today, eas))} of service remain. 180 days is a ceiling, not an entitlement; branch caps apply.`,
        dueDate: dates.easDate,
        view: "transition",
        anchor: "Get placed before you get out",
        cta: "Open Transition",
      });
    } else {
      cards.push({
        key: "skillbridge",
        title: "SkillBridge",
        rule: "SkillBridge runs in the final 180 days of service.",
        state: "NOT YET OPEN",
        stateTone: "amber",
        detail: `Opens ${fmt(sbOpen)} — ${dayWord(daysBetween(today, sbOpen))} from now. Use the time to line up a program.`,
        dueDate: `${sbOpen.getFullYear()}-${String(sbOpen.getMonth() + 1).padStart(2, "0")}-${String(sbOpen.getDate()).padStart(2, "0")}`,
        view: "transition",
        anchor: "Get placed before you get out",
        cta: "Open Transition",
      });
    }

    // BDD — file between 180 and 90 days before separation (Claims).
    const bddOpen = addDays(eas, -180);
    const bddClose = addDays(eas, -90);
    if (today > bddClose) {
      cards.push({
        key: "bdd",
        title: "BDD claim window",
        rule: "File a Benefits Delivery at Discharge claim between 180 and 90 days before separation.",
        state: "CLOSED",
        stateTone: "red",
        detail: `The window closed ${fmt(bddClose)}. Inside 90 days, VA runs it as a standard claim instead — the Claims section walks that path.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open BDD in Claims",
        dueDate: `${bddClose.getFullYear()}-${String(bddClose.getMonth() + 1).padStart(2, "0")}-${String(bddClose.getDate()).padStart(2, "0")}`,
      });
    } else if (today >= bddOpen) {
      cards.push({
        key: "bdd",
        title: "BDD claim window",
        rule: "File a Benefits Delivery at Discharge claim between 180 and 90 days before separation.",
        state: "OPEN NOW",
        stateTone: "official",
        detail: `Closes ${fmt(bddClose)} — ${dayWord(daysBetween(today, bddClose))} left to file with a known separation date and be available for exams.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open BDD in Claims",
        dueDate: `${bddClose.getFullYear()}-${String(bddClose.getMonth() + 1).padStart(2, "0")}-${String(bddClose.getDate()).padStart(2, "0")}`,
      });
    } else {
      cards.push({
        key: "bdd",
        title: "BDD claim window",
        rule: "File a Benefits Delivery at Discharge claim between 180 and 90 days before separation.",
        state: "NOT YET OPEN",
        stateTone: "amber",
        detail: `Opens ${fmt(bddOpen)} — ${dayWord(daysBetween(today, bddOpen))} from now — and closes ${fmt(bddClose)}.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open BDD in Claims",
        dueDate: `${bddClose.getFullYear()}-${String(bddClose.getMonth() + 1).padStart(2, "0")}-${String(bddClose.getDate()).padStart(2, "0")}`,
      });
    }

    // Separation Health Assessment — within the final 90 days.
    const shaOpen = addDays(eas, -90);
    if (today > eas) {
      cards.push({
        key: "sha",
        title: "Separation Health Assessment",
        rule: "Complete the Separation Health Assessment within the final 90 days before separation.",
        state: "CLOSED",
        stateTone: "plain",
        detail: `The final-90-days window ended at your separation date, ${fmt(eas)}.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open Claims",
        dueDate: dates.easDate,
      });
    } else if (today >= shaOpen) {
      cards.push({
        key: "sha",
        title: "Separation Health Assessment",
        rule: "Complete the Separation Health Assessment within the final 90 days before separation.",
        state: "OPEN NOW",
        stateTone: "official",
        detail: `You are in the final 90 days — ${dayWord(daysBetween(today, eas))} remain. Part A is part of the BDD package.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open Claims",
        dueDate: dates.easDate,
      });
    } else {
      cards.push({
        key: "sha",
        title: "Separation Health Assessment",
        rule: "Complete the Separation Health Assessment within the final 90 days before separation.",
        state: "NOT YET OPEN",
        stateTone: "amber",
        detail: `The window opens ${fmt(shaOpen)} — the final 90 days before your ${fmt(eas)} separation.`,
        view: "claims",
        anchor: "Claim Before You Get Out — BDD",
        cta: "Open Claims",
        dueDate: dates.easDate,
      });
    }
  }

  const itf = parseDay(dates.itfDate);
  if (itf) {
    const expires = addYears(itf, 1);
    if (today > expires) {
      cards.push({
        key: "itf",
        title: "Intent to file",
        rule: "An intent to file gives you 1 year to complete the claim — one active at a time.",
        state: "EXPIRED",
        stateTone: "red",
        detail: `Your ${fmt(itf)} intent to file expired ${fmt(expires)}. Filing a new one starts a new effective date.`,
        view: "claims",
        anchor: "How a Claim Moves",
        cta: "Open Claims",
        dueDate: `${expires.getFullYear()}-${String(expires.getMonth() + 1).padStart(2, "0")}-${String(expires.getDate()).padStart(2, "0")}`,
      });
    } else {
      cards.push({
        key: "itf",
        title: "Intent to file",
        rule: "An intent to file gives you 1 year to complete the claim — one active at a time.",
        state: "ACTIVE",
        stateTone: "official",
        detail: `Filed ${fmt(itf)} — expires ${fmt(expires)}, ${dayWord(daysBetween(today, expires))} left to complete the claim and keep the date.`,
        view: "claims",
        anchor: "How a Claim Moves",
        cta: "Open Claims",
        dueDate: `${expires.getFullYear()}-${String(expires.getMonth() + 1).padStart(2, "0")}-${String(expires.getDate()).padStart(2, "0")}`,
      });
    }
  }

  const idExp = parseDay(dates.idCardExpiry);
  if (idExp) {
    if (today > idExp) {
      cards.push({
        key: "idcard",
        title: "ID card expiration",
        rule: "Your ID card expires on the date printed on it — renew at a RAPIDS site.",
        state: "EXPIRED",
        stateTone: "red",
        detail: `Expired ${fmt(idExp)}. Find Anything lists the RAPIDS ID office locator.`,
        view: "find",
        anchor: "ID & Admin",
        cta: "Open ID & Admin",
        dueDate: dates.idCardExpiry,
      });
    } else {
      cards.push({
        key: "idcard",
        title: "ID card expiration",
        rule: "Your ID card expires on the date printed on it — renew at a RAPIDS site.",
        state: "VALID",
        stateTone: "official",
        detail: `Expires ${fmt(idExp)} — ${dayWord(daysBetween(today, idExp))} left. Find Anything lists the RAPIDS ID office locator.`,
        view: "find",
        anchor: "ID & Admin",
        cta: "Open ID & Admin",
        dueDate: dates.idCardExpiry,
      });
    }
  }

  // Family Care Plan review (F-9, Round 2). The member's own review
  // date always controls. Without one, a SUGGESTED date is computed
  // only from a last-validated date and only for the branches whose
  // published annual clock the Round 2 research pack verified —
  // Navy (reviewed annually, MyNavyHR), Marine Corps (renew or
  // update annually; the pack flags its source as dated), Air Force
  // (reviewed and certified annually; the pack flags the instruction
  // numbering). Army and Coast Guard get NO default: no published
  // revalidation clock was verified for them, and the card says so
  // instead of inventing one.
  const FCP_ANNUAL_BRANCHES = ["Navy", "Marine Corps", "Air Force"];
  const branchName = (dates.branch ?? "").replace(/^U\.S\.\s*/i, "").trim();
  const fcpReview = parseDay(dates.fcpReviewDate ?? "");
  const fcpLast = parseDay(dates.fcpLastValidated ?? "");
  if (fcpReview) {
    const overdue = today > fcpReview;
    cards.push({
      key: "fcp",
      title: "Family Care Plan review",
      rule: "Your Family Care Plan review date — the date you (or your command) set.",
      state: overdue ? "REVIEW DUE" : "SET",
      stateTone: overdue ? "red" : "official",
      detail: overdue
        ? `Your review date (${fmt(fcpReview)}) has passed — revalidate the plan with your command's FCP coordinator and update this date.`
        : `Review due ${fmt(fcpReview)} — ${dayWord(daysBetween(today, fcpReview))} from now. Your own date controls; nothing here overrides your command's clock.`,
      view: "deployment",
      anchor: "The DoD rule — DoDI 1342.19",
      cta: "Open Family Care Plans",
      dueDate: dates.fcpReviewDate,
    });
  } else if (fcpLast) {
    if (FCP_ANNUAL_BRANCHES.includes(branchName)) {
      const suggested = addYears(fcpLast, 1);
      const flagNote =
        branchName === "Marine Corps"
          ? " The pack flags its Marine Corps source as dated (2014, under the prior order) — confirm the current cycle with your command."
          : branchName === "Air Force"
            ? " The pack flags the Air Force instruction's numbering as since renumbered — confirm the current instruction with your command."
            : "";
      cards.push({
        key: "fcp",
        title: "Family Care Plan review",
        rule: `${branchName} publishes an annual Family Care Plan review cycle.`,
        state: today > suggested ? "SUGGESTED DATE PASSED" : "SUGGESTED",
        stateTone: today > suggested ? "amber" : "official",
        detail: `Suggested review date ${fmt(suggested)} — one year from your last validation (${fmt(fcpLast)}), from ${branchName}'s published annual cycle. This is a suggestion, not your command's date: set your own review date above to replace it.${flagNote}`,
        view: "deployment",
        anchor: "The DoD rule — DoDI 1342.19",
        cta: "Open Family Care Plans",
        dueDate: `${suggested.getFullYear()}-${String(suggested.getMonth() + 1).padStart(2, "0")}-${String(suggested.getDate()).padStart(2, "0")}`,
      });
    } else {
      cards.push({
        key: "fcp",
        title: "Family Care Plan review",
        rule: "No published revalidation clock was verified for your branch.",
        state: "NO PUBLISHED CLOCK",
        stateTone: "plain",
        detail: `You last validated your plan on ${fmt(fcpLast)}. No suggested review date is shown: the Round 2 research verified no published ${branchName || "Army / Coast Guard"} Family Care Plan revalidation clock, so none is invented here. Ask your command's FCP coordinator for your review date and enter it above as your FCP review date.`,
        view: "deployment",
        anchor: "The DoD rule — DoDI 1342.19",
        cta: "Open Family Care Plans",
      });
    }
  }

  // Partner's return / deployment date (F-9): a free member-entered
  // date. No rules, no windows — the countdown machinery only.
  const partnerReturn = parseDay(dates.partnerReturnDate ?? "");
  if (partnerReturn) {
    const passed = today > partnerReturn;
    cards.push({
      key: "partner",
      title: "Partner's return / deployment date",
      rule: "A date you entered for your partner — no rules attached.",
      state: passed ? "PASSED" : "COUNTDOWN",
      stateTone: passed ? "plain" : "official",
      detail: passed
        ? `The date you entered (${fmt(partnerReturn)}) has passed — update or clear it in your dates.`
        : `${fmt(partnerReturn)} — ${dayWord(daysBetween(today, partnerReturn))} from now. This date is yours alone; the app attaches no entitlement or deadline to it.`,
      view: "deployment",
      anchor: "The DoD rule — DoDI 1342.19",
      cta: "Open Family Care Plans",
      dueDate: dates.partnerReturnDate,
    });
  }

  cards.push(FVAP_CARD);
  return cards;
}

/**
 * The For You row's "Next deadline" pick: the dated card whose due
 * date is soonest — upcoming dates first (earliest wins); when every
 * dated card is past, the most recently passed one. Cards with no
 * due date (the year-round FVAP card, the no-published-clock FCP
 * card) never win. Returns undefined when no card is dated.
 */
export function soonestDeadlineCard(cards: DeadlineCardData[]): DeadlineCardData | undefined {
  const dated = cards.filter((c) => c.dueDate);
  if (dated.length === 0) return undefined;
  const todayIso = (() => {
    const d = todayStart();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  const upcoming = dated.filter((c) => (c.dueDate ?? "") >= todayIso).sort((a, b) => (a.dueDate ?? "").localeCompare(b.dueDate ?? ""));
  if (upcoming.length > 0) return upcoming[0];
  return [...dated].sort((a, b) => (b.dueDate ?? "").localeCompare(a.dueDate ?? ""))[0];
}
