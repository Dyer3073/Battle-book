// Shared shape for the reference sections built from the Nov 9, 2026
// research packs (Guard & Reserve Hub, Know Your Rights, VA Home Loan
// Center, Family Care Plan & Deployment Readiness). Each pack is the
// content source of truth: summaries, figures, and flags are the
// pack's, printed flagged where the pack flags them — never blended.

export type RefLink = { label: string; url: string };

export type RefEntry = {
  name: string;
  body: string;
  who?: string;
  bullets?: string[];
  flag?: string;
  links: RefLink[];
  source: string;
};

export type RefGroup = {
  title: string;
  note?: string;
  entries: RefEntry[];
};
