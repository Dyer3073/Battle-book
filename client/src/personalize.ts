// Personalized Home — pure ordering rules over the member's own profile
// signals (status, component, and the EAS date they set in Deadlines).
// No content lives here: the functions return an ordered list of view
// keys to promote; everything not promoted keeps its default order, and
// with no recognizable profile signals the list is empty so the app
// renders exactly its default order.

export type ProfileSignals = {
  component?: string | null;
  status?: string | null;
  easDate?: string | null;
};

function parseDay(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Whole days from today until the member's EAS date, or null when unset/unparseable. */
export function daysUntilEas(easDate: string | null | undefined): number | null {
  const eas = parseDay(easDate ?? "");
  if (!eas) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((eas.getTime() - today.getTime()) / 86_400_000);
}

/** True when separation is ahead and within the next 12 months. */
export function easWithinYear(easDate: string | null | undefined): boolean {
  const d = daysUntilEas(easDate);
  return d !== null && d >= 0 && d <= 365;
}

/**
 * Ordered view keys to promote for this member, most relevant first.
 * Rules (first match wins for the status family; the EAS promotion is
 * always prepended when it applies):
 *  - EAS within 12 months: the Getting Out path, Transition, Claims/BDD.
 *  - Retiree / gray-area: Retirement, then Records.
 *  - Veteran: Claims, Records, State Benefits, Care.
 *  - Future service member: Library, Education, Fitness.
 *  - Anyone else serving (active / Reserve / Guard): Pay, PCS, Fitness.
 *  - No status/component on file: no promotion (default order).
 */
export function relevancePriority(p: ProfileSignals): string[] {
  const picks: string[] = [];
  if (easWithinYear(p.easDate)) picks.push("paths", "transition", "claims", "claimtracker");

  const status = (p.status ?? "").toLowerCase();
  const component = (p.component ?? "").toLowerCase();
  const text = `${status} ${component}`.trim();

  if (text.includes("retir") || text.includes("gray")) {
    picks.push("retirement", "records");
  } else if (text.includes("veteran")) {
    picks.push("claims", "claimtracker", "records", "states", "care");
  } else if (status.includes("future") || component.includes("future")) {
    picks.push("mos", "education", "fitness");
  } else if (text) {
    picks.push("pay", "pcs", "fitness");
  }
  return [...new Set(picks)];
}
