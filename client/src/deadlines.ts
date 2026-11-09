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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open BDD in Claims",
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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open BDD in Claims",
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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open BDD in Claims",
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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open Claims",
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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open Claims",
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
        anchor: "Before You Get Out: BDD & the Under-90-Day Path",
        cta: "Open Claims",
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
      });
    }
  }

  cards.push(FVAP_CARD);
  return cards;
}
