// The six reference sections built from the Nov 9, 2026 research
// packs: Guard & Reserve Hub, Know Your Rights, LES Decoder, VA Home
// Loan Center, Ribbon Rack Builder + Awards Finder, and Family Care
// Plan & Deployment Readiness. Each pack is the content source of
// truth — summaries, figures, and flags are the packs', printed
// flagged where the packs flag them, never blended. The card, group,
// flag, and link-chip shapes mirror the app's existing sections
// (Benefits, Deals) so the sections read as native.

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { HonestyLine, branchesNamedIn, useScopeProfile } from "./scope";
import { CardTools, sourceFromLinks } from "./binder";
import { HubBackButton, HubSearch, HubTileGrid } from "./HubTiles";
import { anchorSlug } from "./paths";
import type { RefEntry, RefGroup, RefLink } from "./refdata";
import { RESERVE_GROUPS, RESERVE_INTRO } from "./reserve";
import { RIGHTS_GROUPS, RIGHTS_INTRO, RIGHTS_STANDING_LINE } from "./rights";
import {
DEPLOY_CHECKLIST,
DEPLOY_GROUPS,
DEPLOY_INTRO,
type CheckGroup,
} from "./deployment";
import {
FUNDING_FEE_EXEMPTIONS,
FUNDING_FEE_OTHER,
FUNDING_FEE_PURCHASE,
HOMELOAN_GROUPS,
HOMELOAN_INTRO,
SECOND_TIER,
secondTierMaxNoDown,
secondTierRemaining,
} from "./homeloan";
import {
LES_ALLOTMENT_CODES,
LES_BLOCKS,
LES_DEDUCTION_CODES,
LES_ENTITLEMENT_CODES,
LES_INTRO,
LES_USMC_CAVEAT,
type LesField,
} from "./les";
import {
DEVICE_RULES,
FINDER_CONFIRMED,
FINDER_INDEX,
PREC_LISTS,
RACK_BRANCHES,
RIBBONS_INTRO,
RIBBONS_ORDERING_NOTE,
RIBBONS_RENDITION_NOTE,
VENDORS,
rackItemsFor,
type BranchKey,
} from "./ribbons";

/* ------------------------------ shared bits ------------------------------ */

export function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-3">
      <h2 className="font-display text-2xl font-bold text-[var(--text)]">{title}</h2>
      {/* Two-segment theme rule: primary accent + secondary accent, so
          both of the branch's signature colors head every section page
          (Nov 9, 2026 theme rebalance — see theming.ts). */}
      <div aria-hidden="true" className="mt-2 flex h-1 overflow-hidden rounded-full">
        <span className="flex-[2] bg-[var(--accent)]" />
        <span className="flex-1 bg-[var(--accent2)]" />
      </div>
      {sub ? <p className="mt-1.5 text-sm text-[var(--dim)]">{sub}</p> : null}
    </div>
  );
}

/** A pack flag, rendered flagged — both figures printed, never smoothed. */
export function FlagBox({ text }: { text: string }) {
  return (
    <div className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3">
      <p className="text-xs font-bold tracking-wide text-[var(--amber)]">⚠ SOURCE FLAG — READ AS PRINTED</p>
      <p className="mt-1 text-sm text-[var(--text)]">{text}</p>
    </div>
  );
}

export function LinkChips({ links, name }: { links: readonly RefLink[]; name: string }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.url + l.label}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} — ${l.label} (opens in new tab)`}
          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)] underline"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

export function RefCard({ entry, section }: { entry: RefEntry; section: string }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h5 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h5>
      {entry.who ? <p className="mt-1 text-sm font-semibold text-[var(--accent-word)]">{entry.who}</p> : null}
      <p className="mt-1 text-base text-[var(--text)]">{entry.body}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
          {entry.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {entry.flag ? <FlagBox text={entry.flag} /> : null}
      <LinkChips links={entry.links} name={entry.name} />
      <CardTools
        cardRef={{
          section,
          itemKey: entry.name,
          title: entry.name,
          summary: entry.body,
          source: sourceFromLinks(entry.links) ?? entry.source,
        }}
      />
    </article>
  );
}

export function RefGroups({ groups, section }: { groups: readonly RefGroup[]; section: string }) {
  return (
    <>
      {groups.map((g) => (
        <section key={g.title} aria-label={g.title} className="mb-8">
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">{g.title.toUpperCase()}</h3>
          {g.note ? (
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{g.note}</p>
            </div>
          ) : null}
          <div className="space-y-3">
            {g.entries.map((e) => (
              <RefCard key={e.name} entry={e} section={section} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function IntroCard({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
      <p className="text-base text-[var(--text)]">{children}</p>
    </div>
  );
}

/* --------------------------- Guard & Reserve Hub --------------------------- */

export function ReserveView() {
  return (
    <div>
      <SectionHead
        title="Guard & Reserve"
        sub="Drill pay, TRICARE Reserve Select, retirement points, records, and mobilization — the reserve-component rules as DFAS, DoD, and the services publish them, with the examples and conflicts flagged as the sources print them."
      />
      <IntroCard>{RESERVE_INTRO}</IntroCard>
      <HonestyLine />
      <RefGroups groups={RESERVE_GROUPS} section="reserve" />
    </div>
  );
}

/* ----------------------------- Know Your Rights ---------------------------- */

export function RightsView() {
  return (
    <div>
      <SectionHead
        title="Know Your Rights"
        sub="SCRA, USERRA, and the Military Lending Act — the federal protections, who runs each law, and the exact steps to invoke them, from the administering agencies' own pages."
      />
      <IntroCard>
        {RIGHTS_INTRO}
        <span className="mt-2 block font-semibold">{RIGHTS_STANDING_LINE}</span>
      </IntroCard>
      <RefGroups groups={RIGHTS_GROUPS} section="rights" />
    </div>
  );
}

/* ------------------------------- LES Decoder ------------------------------ */

function LesFieldDetail({ field }: { field: LesField }) {
  return (
    <div className="rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4" aria-live="polite">
      <p className="text-xs font-bold tracking-wide text-[var(--dim)]">
        {typeof field.id === "number" ? `FIELD ${field.id}` : "CURRENT FORM W-4 FIELD"}
      </p>
      <h4 className="font-display mt-1 text-xl font-bold text-[var(--text)]">{field.label}</h4>
      <p className="mt-1 text-base text-[var(--text)]">{field.meaning}</p>
      {field.values ? (
        <p className="mt-2 text-sm text-[var(--text)]">
          <strong>Values:</strong> {field.values}
        </p>
      ) : null}
      {field.detail ? <p className="mt-2 text-sm text-[var(--text)]">{field.detail}</p> : null}
      {field.note ? <FlagBox text={field.note} /> : null}
    </div>
  );
}

// Short hub-tile labels for the statement blocks — the full block
// title still heads each block's own sub-view.
const LES_TILE_LABELS = [
  "Header (1–11)",
  "Entitlements & net (12–25)",
  "Leave (26–33)",
  "Federal tax (34–39)",
  "Form W-4 fields",
  "FICA (40–44)",
  "State tax (45–50)",
  "Pay data (51–65)",
  "BAH data (66–73)",
  "Carry-over & totals (74–78)",
];

export function LesView({ focusAnchor }: { focusAnchor?: string | null }) {
  const [selected, setSelected] = useState<LesField | null>(null);
  // Hub of tiles: one per statement block, plus the line codes. A
  // global-search deep link carries the block title (or "LES line
  // codes") as its anchor — open that tile on arrival.
  const [tile, setTile] = useState<string | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      if (slug === anchorSlug("LES line codes")) return "codes";
      const block = LES_BLOCKS.find((b) => anchorSlug(b.title) === slug);
      if (block) return block.title;
    }
    return null;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);
  const [blockQuery, setBlockQuery] = useState("");
  const [codeQuery, setCodeQuery] = useState("");
  const [codeTab, setCodeTab] = useState<"ent" | "ded" | "allot">("ent");
  const codes =
    codeTab === "ent" ? LES_ENTITLEMENT_CODES : codeTab === "ded" ? LES_DEDUCTION_CODES : LES_ALLOTMENT_CODES;
  const codeCount = LES_ENTITLEMENT_CODES.length + LES_DEDUCTION_CODES.length + LES_ALLOTMENT_CODES.length;

  const openBlock = LES_BLOCKS.find((b) => b.title === tile);
  const bq = blockQuery.trim().toLowerCase();
  const blockFields = openBlock
    ? bq
      ? openBlock.fields.filter(
          (f) => f.label.toLowerCase().includes(bq) || f.meaning.toLowerCase().includes(bq) || String(f.id) === bq,
        )
      : openBlock.fields
    : [];
  const cq = codeQuery.trim().toLowerCase();
  const shownCodes = cq
    ? codes.filter((c) => c.code.toLowerCase().includes(cq) || c.meaning.toLowerCase().includes(cq))
    : codes;

  const fieldChips = (fields: LesField[]) => (
    <div className="flex flex-wrap gap-2">
      {fields.map((f) => (
        <button
          key={String(f.id) + f.label}
          type="button"
          aria-label={`Decode field ${typeof f.id === "number" ? f.id : ""} ${f.label}`}
          aria-pressed={selected === f}
          onClick={() => setSelected(f)}
          className={`rounded-[var(--radius)] border px-3 py-2 text-left text-sm font-semibold ${
            selected === f
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          }`}
        >
          {typeof f.id === "number" ? <span className="font-bold">{f.id} · </span> : null}
          {f.label}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      <SectionHead
        title="Your Pay Stub, Explained"
        sub="Every numbered field on the Leave and Earnings Statement, decoded — anchor source: DFAS's “Understanding Your LES” guide dated May 14, 2026. Tap any field to decode it."
      />
      <IntroCard>{LES_INTRO}</IntroCard>

      <div className="mb-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--text)]">
          <strong>Two things stated plainly.</strong> First: there is no DFAS remarks-code table — the Remarks block
          (field 76) prints plain-language text, not codes, and any “LES remarks code” list offered elsewhere is not
          a DFAS product. Second: no numbered LES field carries EFT or direct-deposit remarks — direct-deposit
          information does not appear as a numbered field on the LES.
        </p>
        <FlagBox text={LES_USMC_CAVEAT} />
      </div>

      {tile === null ? (
        <>
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">THE STATEMENT, BLOCK BY BLOCK — TAP A FIELD TO DECODE IT</h3>
          <HubTileGrid
            label="LES Decoder areas"
            onOpen={(key) => {
              setBlockQuery("");
              setCodeQuery("");
              setTile(key);
            }}
            tiles={[
              ...LES_BLOCKS.map((b, i) => ({
                key: b.title,
                label: LES_TILE_LABELS[i] ?? b.title,
                sub: `${b.fields.length} fields`,
              })),
              { key: "codes", label: "Line codes", sub: `${codeCount} line codes` },
            ]}
          />
        </>
      ) : null}

      {openBlock ? (
        <section aria-label={openBlock.title}>
          <HubBackButton ariaLabel="Back to all LES blocks" text="All LES blocks" onBack={() => setTile(null)} />
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{openBlock.title}</h3>
          <HubSearch
            id="les-block-search"
            label="Search this block by field name or number"
            ariaLabel="Search this block by field name or number"
            value={blockQuery}
            onChange={setBlockQuery}
            placeholder="Try “LV LOST”, “SGLI”, or “30”"
          />
          {selected && openBlock.fields.includes(selected) ? (
            <div className="mb-5">
              <LesFieldDetail field={selected} />
            </div>
          ) : null}
          {blockFields.length === 0 ? (
            <p className="text-sm text-[var(--dim)]">
              No field in this block matches “{blockQuery}” — try a field number or a shorter word.
            </p>
          ) : (
            fieldChips(blockFields)
          )}
        </section>
      ) : null}

      {tile === "codes" ? (
        <section aria-label="LES line codes" className="mb-8">
          <HubBackButton ariaLabel="Back to all LES blocks" text="All LES blocks" onBack={() => setTile(null)} />
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">LINE CODES — WHAT EACH LINE ON THE STATEMENT IS</h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            Stated in the DFAS guide to apply to all services. Two reading rules: some values appear only on one
            statement type (a classic-only value is labeled as such), and a column or line that prints twice on the
            statement carries the same code twice — the 15-line overflow rule moves the rest into Remarks.
          </p>
          <HubSearch
            id="les-code-search"
            label="Search line codes"
            ariaLabel="Search line codes by code or meaning"
            value={codeQuery}
            onChange={setCodeQuery}
            placeholder="Try “LV LOST” or “BAH”"
          />
          <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Choose a line-code list">
            {(
              [
                ["ent", `Entitlements (${LES_ENTITLEMENT_CODES.length})`],
                ["ded", `Deductions (${LES_DEDUCTION_CODES.length})`],
                ["allot", `Allotments (${LES_ALLOTMENT_CODES.length})`],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-label={label}
                aria-pressed={codeTab === key}
                onClick={() => setCodeTab(key)}
                className={`rounded-[var(--radius)] border px-3 py-2 text-sm font-bold ${
                  codeTab === key
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {shownCodes.length === 0 ? (
            <p className="text-sm text-[var(--dim)]">No line code in this list matches “{codeQuery}”.</p>
          ) : (
            <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
              {shownCodes.map((c, i) => (
                <div
                  key={c.code}
                  className={`flex flex-col gap-0.5 px-3 py-2 sm:flex-row sm:gap-3 ${i % 2 ? "bg-[var(--surface2)]" : "bg-[var(--surface)]"}`}
                >
                  <span className="font-display shrink-0 text-sm font-bold text-[var(--text)] sm:w-56">{c.code}</span>
                  <span className="text-sm text-[var(--text)]">{c.meaning}</span>
                </div>
              ))}
            </div>
          )}
          <p className="mt-3 text-sm text-[var(--text)]">
            Rates to know inside those lines: SGLI premiums run at <strong>$0.05 per $1,000</strong> of coverage since
            July 1, 2025 (full $500,000 coverage = $25, plus the flat $1 TSGLI premium = $26/month) — guides still
            showing $0.06 are stale. The Armed Forces Retirement Home (AFRH) line is actually deducted at{" "}
            <strong>$0.50 per month</strong> for enlisted members and warrant officers; the statute (24 U.S.C. § 419)
            authorizes up to $1.00 — $0.50 is what DFAS charges.
          </p>
        </section>
      ) : null}
    </div>
  );
}


/* --------------------------- VA Home Loan Center --------------------------- */

function fmtMoney(n: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function SecondTierCard() {
  const quarter = SECOND_TIER.countyLimit * 0.25;
  const gapLoan = 500_000;
  const gapDown = gapLoan * 0.25 - secondTierRemaining;
  return (
    <article className="rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
      <h5 className="font-display text-lg font-bold text-[var(--text)]">
        Worked example — remaining entitlement on the FHFA 2026 baseline
      </h5>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Inputs: county limit ${fmtMoney(SECOND_TIER.countyLimit)} (the FHFA 2026 baseline one-unit conforming limit
        for most U.S. counties — year-specific, FHFA resets it annually) and ${fmtMoney(SECOND_TIER.used)} of
        entitlement already used on a prior VA loan.
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-base text-[var(--text)]">
        <li>
          County limit × 25%: ${fmtMoney(SECOND_TIER.countyLimit)} × 0.25 = <strong>${fmtMoney(quarter)}</strong>
        </li>
        <li>
          Minus entitlement already used: ${fmtMoney(quarter)} − ${fmtMoney(SECOND_TIER.used)} ={" "}
          <strong>${fmtMoney(secondTierRemaining)} remaining bonus entitlement</strong>
        </li>
        <li>
          × 4 = the largest loan most lenders will make with no down payment:{" "}
          <strong>${fmtMoney(secondTierMaxNoDown)}</strong>
        </li>
        <li>
          Going bigger: on a ${fmtMoney(gapLoan)} loan, 25% coverage is ${fmtMoney(gapLoan * 0.25)} — a down
          payment of about <strong>${fmtMoney(gapDown)}</strong> covers the gap (the lender still has to approve
          the loan).
        </li>
      </ol>
      <p className="mt-2 text-sm text-[var(--text)]">
        VA&apos;s own published example, same formula, different inputs: $50,000 already used and a $900,000 county
        limit → $225,000 − $50,000 = $175,000 remaining → ×4 = a $700,000 maximum no-down-payment loan.
      </p>
    </article>
  );
}

function PurchaseFeeTable() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
      <table className="w-full text-left text-sm">
        <caption className="bg-[var(--surface2)] px-3 py-2 text-left font-display font-bold text-[var(--text)]">
          Purchase &amp; construction — funding fee by down payment (VA chart, effective April 7, 2023)
        </caption>
        <thead>
          <tr className="bg-[var(--surface)]">
            <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">Down payment</th>
            <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">First use</th>
            <th scope="col" className="px-3 py-2 font-bold text-[var(--text)]">After first use</th>
          </tr>
        </thead>
        <tbody>
          {FUNDING_FEE_PURCHASE.map((r) => (
            <tr key={r.down} className="border-t border-[var(--border)] bg-[var(--surface)]">
              <td className="px-3 py-2 text-[var(--text)]">{r.down}</td>
              <td className="px-3 py-2 font-bold text-[var(--text)]">{r.first}</td>
              <td className="px-3 py-2 font-bold text-[var(--text)]">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OtherFeeTable() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
      <table className="w-full text-left text-sm">
        <caption className="bg-[var(--surface2)] px-3 py-2 text-left font-display font-bold text-[var(--text)]">
          Other loan types — funding fee (VA chart, effective April 7, 2023)
        </caption>
        <tbody>
          {FUNDING_FEE_OTHER.map((r) => (
            <tr key={r.type} className="border-t border-[var(--border)] bg-[var(--surface)] first:border-t-0">
              <td className="px-3 py-2 text-[var(--text)]">{r.type}</td>
              <td className="px-3 py-2 font-bold text-[var(--text)]">{r.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExemptionsCard() {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h5 className="font-display text-lg font-bold text-[var(--text)]">
        The five exemption categories — VA&apos;s list, verbatim
      </h5>
      <p className="mt-1 text-base text-[var(--text)]">You won&apos;t have to pay the funding fee if:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
        {FUNDING_FEE_EXEMPTIONS.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </article>
  );
}

export function HomeLoanView() {
  return (
    <div>
      <SectionHead
        title="VA Home Loan Center"
        sub="The COE, entitlement explained plain, the funding fee exactly as VA publishes it, the loan rules, and the loan types — from VA's own pages. No lenders, no rates, no affordability advice."
      />
      <IntroCard>{HOMELOAN_INTRO}</IntroCard>
      {HOMELOAN_GROUPS.map((g, gi) => (
        <section key={g.title} aria-label={g.title} className="mb-8">
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">{g.title.toUpperCase()}</h3>
          {g.note ? (
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{g.note}</p>
            </div>
          ) : null}
          <div className="space-y-3">
            {g.entries.map((e, ei) => (
              <Fragment key={e.name}>
                <RefCard entry={e} section="homeloan" />
                {gi === 1 && ei === 3 ? <SecondTierCard /> : null}
                {gi === 2 && ei === 1 ? <PurchaseFeeTable /> : null}
                {gi === 2 && ei === 2 ? <OtherFeeTable /> : null}
                {gi === 2 && ei === 3 ? <ExemptionsCard /> : null}
              </Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* --------------------- Family Care Plan & Deployment ---------------------- */

function DeployChecklistGroup({
  group,
  checked,
  onToggle,
}: {
  group: CheckGroup;
  checked: ReadonlySet<string>;
  onToggle: (key: string) => void;
}) {
  return (
    <div className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h4 className="font-display text-lg font-bold text-[var(--text)]">{group.title}</h4>
      <div className="mt-2 space-y-2">
        {group.items.map((item, ii) => {
          const key = `${group.id}-${ii}`;
          const on = checked.has(key);
          return (
            <div key={key} className="flex items-start gap-3">
              <input
                id={`deploy-check-${key}`}
                type="checkbox"
                checked={on}
                onChange={() => onToggle(key)}
                className="mt-1 h-5 w-5 shrink-0 accent-[var(--accent)]"
              />
              <label htmlFor={`deploy-check-${key}`} className="text-base text-[var(--text)]">
                <span className={on ? "font-semibold line-through" : "font-semibold"}>{item.title}</span>
                <span className="block text-sm text-[var(--dim)]">{item.note}</span>
              </label>
            </div>
          );
        })}
      </div>
      <CardTools
        cardRef={{
          section: "deployment",
          itemKey: `checklist-${group.id}`,
          title: `Deployment checklist — ${group.title}`,
          summary: group.items.map((i) => i.title).join(" · "),
          source: "DoDI 1342.19 / service FCP regulations",
        }}
      />
    </div>
  );
}

export function DeploymentView({
  focusAnchor,
  focusCard,
}: {
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());
  // Hub of tiles: Family Care Plans (the DoDI + service entries), the
  // Pre-deployment Checklist, and Money & Pay on Deployment — the
  // checklist's Money group, FSA item included, filed as its own
  // tile. Check state is shared across tiles, so the checklist's
  // progress count covers all 32 items wherever they are ticked.
  const [tile, setTile] = useState<"fcp" | "checklist" | "money" | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      if (slug === anchorSlug("Pre-deployment readiness checklist")) return "checklist";
      if (DEPLOY_GROUPS.some((g) => anchorSlug(g.title) === slug)) return "fcp";
    }
    if (focusCard) {
      if (focusCard.startsWith("Deployment checklist — ")) {
        const groupTitle = focusCard.slice("Deployment checklist — ".length);
        const group = DEPLOY_CHECKLIST.find((g) => g.title === groupTitle);
        if (group) return group.id === "B" ? "money" : "checklist";
      }
      if (DEPLOY_GROUPS.some((g) => g.entries.some((e) => e.name === focusCard))) return "fcp";
    }
    return null;
  });
  const total = DEPLOY_CHECKLIST.reduce((n, g) => n + g.items.length, 0);
  const toggle = (key: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);
  // Rule 36 (ordering-only): the baseline always shows; inside the
  // Family Care Plan groups, your service's own regulation entry
  // leads its group.
  const deployProfile = useScopeProfile();
  const orderedDeployGroups = deployProfile?.branch
    ? DEPLOY_GROUPS.map((g) => ({
        ...g,
        entries: [...g.entries].sort(
          (a, b) =>
            (branchesNamedIn(a.name).includes(deployProfile.branch) ? 0 : 1) -
            (branchesNamedIn(b.name).includes(deployProfile.branch) ? 0 : 1),
        ),
      }))
    : DEPLOY_GROUPS;
  const moneyGroup = DEPLOY_CHECKLIST.find((g) => g.id === "B");
  const checklistGroups = DEPLOY_CHECKLIST.filter((g) => g.id !== "B");

  return (
    <div>
      <SectionHead
        title="Family Care Plan & Deployment Readiness"
        sub="DoDI 1342.19 and your service's own regulation — who must have a plan, the timelines, the legal limits — plus the 32-item pre-deployment checklist, checkable as you work it and savable to your Binder."
      />
      <IntroCard>{DEPLOY_INTRO}</IntroCard>

      {tile === null ? (
        <HubTileGrid
          label="Family Care Plan and Deployment areas"
          onOpen={(key) => setTile(key as "fcp" | "checklist" | "money")}
          tiles={[
            { key: "fcp", label: "Family Care Plans", sub: "The DoD rule + your service's regulation" },
            { key: "checklist", label: "Pre-Deployment Checklist", sub: `${total} items, checkable` },
            { key: "money", label: "Money & Pay on Deployment", sub: "FSA, accounts, SGLI, TSP" },
          ]}
        />
      ) : null}

      {tile === "fcp" ? (
        <>
          <HubBackButton
            ariaLabel="Back to Family Care Plan and Deployment areas"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <RefGroups groups={orderedDeployGroups} section="deployment" />
        </>
      ) : null}

      {tile === "checklist" ? (
        <section aria-label="Pre-deployment readiness checklist" className="mb-8">
          <HubBackButton
            ariaLabel="Back to Family Care Plan and Deployment areas"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
            PRE-DEPLOYMENT READINESS CHECKLIST — {checked.size} OF {total} DONE
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            Checks live on this device for this visit — tick items off as you complete them, and save each group to
            your Binder to keep the list. The papers themselves are drawn up with your installation legal assistance
            office; nothing here drafts a legal document.
          </p>
          {checklistGroups.map((g) => (
            <DeployChecklistGroup key={g.id} group={g} checked={checked} onToggle={toggle} />
          ))}
        </section>
      ) : null}

      {tile === "money" ? (
        <section aria-label="Money and pay on deployment" className="mb-8">
          <HubBackButton
            ariaLabel="Back to Family Care Plan and Deployment areas"
            text="All areas"
            onBack={() => setTile(null)}
          />
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
            MONEY &amp; PAY ON DEPLOYMENT — {checked.size} OF {total} CHECKLIST ITEMS DONE
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            The checklist&apos;s money group, filed on its own tile: the deployment budget, Family Separation
            Allowance, ID cards and DEERS, SGLI, TSP, taxes, and the caregiver&apos;s emergency fund. It checks off
            here exactly as it does in the checklist — one list, two doors.
          </p>
          {moneyGroup ? <DeployChecklistGroup group={moneyGroup} checked={checked} onToggle={toggle} /> : null}
        </section>
      ) : null}
    </div>
  );
}


/* --------------------- Ribbon Rack Builder + Awards Finder ----------------- */

function ribbonPalette(name: string): { bg: string; stripe: string } {
  const palettes = [
    { bg: "#7a1f1f", stripe: "#e8c33a" },
    { bg: "#1f3a6e", stripe: "#c8102e" },
    { bg: "#2e5d33", stripe: "#f2f2f2" },
    { bg: "#c8102e", stripe: "#1f3a6e" },
    { bg: "#e8c33a", stripe: "#7a1f1f" },
    { bg: "#3a3f44", stripe: "#e8c33a" },
    { bg: "#5b2a86", stripe: "#f2f2f2" },
    { bg: "#0f5e6b", stripe: "#e8c33a" },
    { bg: "#8a5a19", stripe: "#1f3a6e" },
    { bg: "#f2f2f2", stripe: "#c8102e" },
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length] ?? palettes[0]!;
}

function branchFromProfile(profileBranch: string): BranchKey {
  const b = profileBranch.toLowerCase();
  if (b.includes("marine")) return "usmc";
  if (b.includes("navy") || b.includes("naval")) return "navy";
  if (b.includes("space")) return "sf";
  if (b.includes("air")) return "af";
  if (b.includes("coast")) return "cg";
  return "army";
}

export function RibbonsView({
  profileBranch,
  focusAnchor,
  focusCard,
}: {
  profileBranch: string;
  focusAnchor?: string | null;
  focusCard?: string | null;
}) {
  const [branch, setBranch] = useState<BranchKey>(() => branchFromProfile(profileBranch));
  // Hub of tiles: Find Awards / Build Your Rack / Precedence Tables /
  // Where to Buy. The Device Rules live inside Build Your Rack (they
  // govern what is worn on the rack). Deep links resolve to tiles:
  // global-search anchors name the finder / precedence sections, and
  // a Binder card is always a finder entry.
  const [tile, setTile] = useState<"builder" | "finder" | "lists" | "vendors" | null>(() => {
    if (focusAnchor) {
      const slug = anchorSlug(focusAnchor);
      if (slug === anchorSlug("Awards finder")) return "finder";
      if (slug === anchorSlug("Full precedence lists")) return "lists";
    }
    if (focusCard && (FINDER_CONFIRMED.some((e) => e.name === focusCard) || FINDER_INDEX.some((e) => e.name === focusCard))) {
      return "finder";
    }
    return null;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tile]);
  const [pickerQuery, setPickerQuery] = useState("");
  const [finderQuery, setFinderQuery] = useState("");
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());

  const items = rackItemsFor(branch);
  const keyOf = (it: (typeof items)[number], idx: number) => `${branch}|${it.group}|${idx}|${it.name}`;
  const pq = pickerQuery.trim().toLowerCase();
  const pickerItems = items
    .map((it, idx) => ({ it, idx }))
    .filter(({ it }) => !pq || it.name.toLowerCase().includes(pq));
  const rack = items
    .map((it, idx) => ({ it, key: keyOf(it, idx) }))
    .filter(({ key }) => selected.has(key));

  const fq = finderQuery.trim().toLowerCase();
  const finderConfirmed = fq
    ? FINDER_CONFIRMED.filter(
        (e) =>
          e.name.toLowerCase().includes(fq) ||
          e.summary.toLowerCase().includes(fq) ||
          e.branches.toLowerCase().includes(fq),
      )
    : FINDER_CONFIRMED;
  const finderIndex = fq
    ? FINDER_INDEX.filter((e) => e.name.toLowerCase().includes(fq) || e.branches.toLowerCase().includes(fq))
    : FINDER_INDEX;

  const toggleAward = (key: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <div>
      <SectionHead
        title="Awards & Ribbon Rack"
        sub="Your branch's official order of precedence, an awards finder sourced from TIOH and the services' awards manuals, device rules by branch, and the vendors — labeled commercial."
      />
      <IntroCard>{RIBBONS_INTRO}</IntroCard>

      {tile === null ? (
        <HubTileGrid
          label="Ribbons areas"
          onOpen={(key) => setTile(key as "builder" | "finder" | "lists" | "vendors")}
          tiles={[
            { key: "finder", label: "Find Awards", sub: `${FINDER_CONFIRMED.length + FINDER_INDEX.length} awards, searchable` },
            { key: "builder", label: "Build Your Rack", sub: "Your awards in official order" },
            { key: "lists", label: "Precedence Tables", sub: "All six branches, in wear order" },
            { key: "vendors", label: "Where to Buy", sub: "Vendors — labeled commercial" },
          ]}
        />
      ) : null}

      {tile === "builder" ? (
        <>
        <HubBackButton ariaLabel="Back to all Ribbons areas" text="All Ribbons areas" onBack={() => setTile(null)} />
        <section aria-label="Rack builder">
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">1 · PICK YOUR BRANCH</h3>
          <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Choose a branch for the rack">
            {RACK_BRANCHES.map((b) => (
              <button
                key={b.key}
                type="button"
                aria-label={`Build a ${b.label} rack`}
                aria-pressed={branch === b.key}
                onClick={() => setBranch(b.key)}
                className={`rounded-[var(--radius)] border px-3 py-2 text-sm font-bold ${
                  branch === b.key
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          {PREC_LISTS[branch].map((l) => (
            <p key={l.source} className="mb-2 text-sm text-[var(--dim)]">
              Order source: {l.source}.{l.note ? ` ${l.note}` : ""}
            </p>
          ))}
          {PREC_LISTS[branch].map((l) =>
            l.extraNote ? <FlagBox key={l.extraNote} text={l.extraNote} /> : null,
          )}

          <h3 className="font-display mb-2 mt-5 text-base font-bold tracking-wide text-[var(--dim)]">
            2 · TAP THE AWARDS YOU HAVE EARNED
          </h3>
          <label htmlFor="rack-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
            Filter the award list
          </label>
          <input
            id="rack-search"
            type="search"
            value={pickerQuery}
            onChange={(e) => setPickerQuery(e.target.value)}
            placeholder="Try “Bronze Star” or “Good Conduct”"
            className="mb-3 w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]"
          />
          {pickerItems.length === 0 ? (
            <p className="mb-3 text-sm text-[var(--dim)]">No award in this branch&apos;s list matches “{pickerQuery}”.</p>
          ) : (
            <div className="mb-5 flex max-h-96 flex-col gap-1 overflow-y-auto pr-1">
              {pickerItems.map(({ it, idx }) => {
                const key = keyOf(it, idx);
                const on = selected.has(key);
                return (
                  <button
                    key={key}
                    type="button"
                    aria-label={`${on ? "Remove" : "Add"} ${it.name} ${on ? "from" : "to"} the rack`}
                    aria-pressed={on}
                    onClick={() => toggleAward(key)}
                    className={`flex items-center gap-2 rounded-[var(--radius)] border px-3 py-2 text-left text-sm ${
                      on
                        ? "border-[var(--accent)] bg-[var(--surface2)] font-bold text-[var(--text)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                    }`}
                  >
                    <span aria-hidden="true">{on ? "☑" : "☐"}</span>
                    <span className="flex-1">{it.name}</span>
                    {it.order !== null ? <span className="text-xs font-bold text-[var(--dim)]">#{it.order}</span> : null}
                  </button>
                );
              })}
            </div>
          )}

          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
            3 · YOUR RACK — OFFICIAL ORDER, THREE ACROSS
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">{RIBBONS_RENDITION_NOTE}</p>
          {rack.length === 0 ? (
            <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--dim)]">
              Nothing on the rack yet — tap awards above and they line up here in your branch&apos;s official
              precedence order, highest first.
            </p>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
                {rack.map(({ it, key }) => {
                  const pal = ribbonPalette(it.name);
                  return (
                    <div
                      key={key}
                      className="flex w-[31%] min-w-24 flex-col overflow-hidden rounded-sm border border-black/40"
                      title={it.name}
                    >
                      <div className="flex h-7" aria-hidden="true">
                        <span className="flex-1" style={{ backgroundColor: pal.bg }} />
                        <span className="w-2.5" style={{ backgroundColor: pal.stripe }} />
                        <span className="flex-1" style={{ backgroundColor: pal.bg }} />
                      </div>
                      <p className="bg-[var(--surface)] px-1 py-1 text-center text-[11px] font-bold leading-tight text-[var(--text)]">
                        {it.order !== null ? `#${it.order} ` : ""}
                        {it.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-[var(--dim)]">
                {rack.length} award{rack.length === 1 ? "" : "s"} on the rack, in{" "}
                {RACK_BRANCHES.find((b) => b.key === branch)?.label} precedence order.
              </p>
              <button
                type="button"
                aria-label="Clear the rack"
                onClick={() => setSelected(new Set())}
                className="mt-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)]"
              >
                Clear the rack
              </button>
            </>
          )}
        </section>
        <section aria-label="Device rules by branch" className="mt-8">
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">DEVICE RULES BY BRANCH — WHAT THE RACK WEARS</h3>
          <div className="space-y-3">
            {DEVICE_RULES.map((d) => (
              <article key={d.branch} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <h4 className="font-display text-lg font-bold text-[var(--text)]">{d.branch}</h4>
                <p className="mt-1 text-base text-[var(--text)]">{d.body}</p>
                <LinkChips links={d.links} name={`${d.branch} device rules`} />
              </article>
            ))}
          </div>
        </section>
        </>
      ) : null}

      {tile === "finder" ? (
        <>
        <HubBackButton ariaLabel="Back to all Ribbons areas" text="All Ribbons areas" onBack={() => setTile(null)} />
        <section aria-label="Awards finder">
          <label htmlFor="finder-search" className="mb-1 block text-sm font-semibold text-[var(--text)]">
            Search awards by name
          </label>
          <input
            id="finder-search"
            type="search"
            value={finderQuery}
            onChange={(e) => setFinderQuery(e.target.value)}
            placeholder="Try “Purple Heart” or “Humanitarian”"
            className="mb-4 w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]"
          />
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
            CONFIRMED ENTRIES — SUMMARIES FROM OFFICIAL PAGES ({finderConfirmed.length})
          </h3>
          <div className="mb-6 space-y-3">
            {finderConfirmed.map((e) => (
              <article key={e.name} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <h4 className="font-display text-lg font-bold text-[var(--text)]">{e.name}</h4>
                <p className="mt-0.5 text-sm font-semibold text-[var(--accent-word)]">{e.branches}</p>
                <p className="mt-1 text-base text-[var(--text)]">{e.summary}</p>
                {e.devices ? (
                  <p className="mt-2 text-sm text-[var(--text)]">
                    <strong>Devices:</strong> {e.devices}
                  </p>
                ) : null}
                {e.flag ? <FlagBox text={e.flag} /> : null}
                <LinkChips links={e.links} name={e.name} />
                <CardTools
                  cardRef={{
                    section: "ribbons",
                    itemKey: e.name,
                    title: e.name,
                    summary: e.summary,
                    source: sourceFromLinks(e.links),
                  }}
                />
              </article>
            ))}
            {finderConfirmed.length === 0 ? (
              <p className="text-sm text-[var(--dim)]">No confirmed entry matches “{finderQuery}” — check the index below.</p>
            ) : null}
          </div>
          <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
            INDEX ENTRIES — NAME + OFFICIAL REFERENCE ONLY ({finderIndex.length})
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            These awards are indexed with their official reference, but their individual TIOH or manual pages have
            not been opened and verified yet — so no summary and no device list is published for them. That stamp is
            deliberate: an unverified description is worse than none.
          </p>
          <div className="space-y-2">
            {finderIndex.map((e) => (
              <article key={e.name} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                <h4 className="font-display text-base font-bold text-[var(--text)]">{e.name}</h4>
                <p className="text-sm text-[var(--dim)]">
                  {e.branches} · Official reference: {e.ref}
                </p>
                <p className="mt-1 text-xs font-bold tracking-wide text-[var(--amber)]">⚠ DESCRIPTION NOT CONFIRMED — INDEX ONLY</p>
                <LinkChips links={e.links} name={e.name} />
              </article>
            ))}
            {finderIndex.length === 0 ? (
              <p className="text-sm text-[var(--dim)]">No index entry matches “{finderQuery}”.</p>
            ) : null}
          </div>
        </section>
        </>
      ) : null}

      {tile === "lists" ? (
        <>
        <HubBackButton ariaLabel="Back to all Ribbons areas" text="All Ribbons areas" onBack={() => setTile(null)} />
        <section aria-label="Full precedence lists">
          {RACK_BRANCHES.map((b) => (
            <div key={b.key} className="mb-6">
              <h3 className="font-display mb-2 text-lg font-bold text-[var(--text)]">{b.label}</h3>
              {PREC_LISTS[b.key].map((list) => (
                <div key={list.source} className="mb-4">
                  <p className="mb-2 text-sm text-[var(--dim)]">{list.source}</p>
                  {list.note ? <p className="mb-2 text-sm text-[var(--text)]">{list.note}</p> : null}
                  <ol className="list-decimal space-y-0.5 pl-6 text-sm text-[var(--text)]">
                    {list.items.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ol>
                  {list.extraNote ? <FlagBox text={list.extraNote} /> : null}
                </div>
              ))}
            </div>
          ))}
        </section>
        </>
      ) : null}

      {tile === "vendors" ? (
        <>
        <HubBackButton ariaLabel="Back to all Ribbons areas" text="All Ribbons areas" onBack={() => setTile(null)} />
        <section aria-label="Vendors — commercial">
          <p className="mb-3 text-sm text-[var(--text)]">{RIBBONS_ORDERING_NOTE}</p>
          <div className="space-y-3">
            {VENDORS.map((v) => (
              <article key={v.name} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-display text-lg font-bold text-[var(--text)]">{v.name}</h4>
                  <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
                    COMMERCIAL
                  </span>
                </div>
                <p className="mt-1 text-base text-[var(--text)]">{v.note}</p>
                {v.flag ? <FlagBox text={v.flag} /> : null}
                <div className="mt-3 flex flex-wrap gap-2">
                  {v.searchPattern ? (
                    <a
                      href={`${v.searchPattern}${encodeURIComponent("Bronze Star")}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Search ${v.name} for “Bronze Star” (example search, opens in new tab)`}
                      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)] underline"
                    >
                      Search {v.name} (example: “Bronze Star”) ↗
                    </a>
                  ) : null}
                  {v.builder ? (
                    <a
                      href={v.builder.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${v.name} — ${v.builder.label} (opens in new tab)`}
                      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)] underline"
                    >
                      {v.builder.label} ↗
                    </a>
                  ) : null}
                  <a
                    href={v.homepage}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${v.name} homepage (opens in new tab)`}
                    className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent-word)] underline"
                  >
                    {v.name} homepage ↗
                  </a>
                </div>
                {v.searchNote ? <p className="mt-2 text-xs text-[var(--dim)]">{v.searchNote}</p> : null}
              </article>
            ))}
          </div>
        </section>
        </>
      ) : null}
    </div>
  );
}
