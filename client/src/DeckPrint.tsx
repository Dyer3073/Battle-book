// Smart-Card Deck — printable pocket deck body, rendered inside the
// app's established PrintSheet (the deliberate print path: the sheet
// opens as its own view, and its "Open printable page" button opens a
// standalone page carrying its own Print button — the in-app frame
// never calls window.print directly). All layout here is inline
// styles so the standalone page (which carries no app stylesheet)
// prints identically. Panels are pocket-size targets (roughly
// 3.5"×2" to 5"×3" of content at 100% print scale), laid two to a row
// with dashed cut guides. Content is generated from the same data as
// the in-app cards — see deck.ts for the single-source rule and the
// selection bases.

import type { CSSProperties } from "react";
import {
  LINE4_OPTIONS,
  LINE6_WARTIME_OPTIONS,
  LINE7_OPTIONS,
  LINE9_NBC_OPTIONS,
  NATO_ALPHABET,
  PROWORDS,
  ZAP_NUMBER_HELPER,
  medevacReadout,
  EMPTY_MEDEVAC,
  type MedevacState,
} from "./fieldkit";
import { DECK_PANELS, deckKnots, deckSignals, DECK_SIGNAL_IDS_A, DECK_SIGNAL_IDS_B } from "./deck";
import { EMERGENCY_CARDS, type EmergencyCardData } from "./emergency";
import { FIRSTAID_CARDS, LANDNAV_CARDS, type FieldEntry } from "./closureField";

const cardStyle: CSSProperties = {
  border: "1.5px dashed #8a8a8a",
  padding: "10px 12px",
  breakInside: "avoid",
  fontSize: "11px",
  lineHeight: 1.4,
  color: "#1c1c1c",
  background: "#fff",
};
const titleStyle: CSSProperties = { fontSize: "13px", fontWeight: 800, margin: "0 0 4px", letterSpacing: "0.02em" };
const writeLine: CSSProperties = { borderBottom: "1px solid #999", display: "inline-block", minWidth: "55%", height: "12px" };

function PanelHead({ n, title }: { n: number; title: string }) {
  return (
    <p style={titleStyle}>
      {n}. {title} <span style={{ fontWeight: 600, color: "#555", fontSize: "10px" }}>· BATTLE BOOK SMART-CARD DECK</span>
    </p>
  );
}

/** Count-line sub-labels (Line 3 / 5 / 8), derived from medevacReadout
 * itself so the deck can never drift from the in-app chart: a probe
 * state with every count set to 1 renders "A (Urgent) 1 · …", and the
 * counts are stripped back off. */
function countLineText(line: number): string {
  const probe: MedevacState = {
    ...EMPTY_MEDEVAC,
    line3A: "1", line3B: "1", line3C: "1", line3D: "1", line3E: "1",
    line5Litter: "1", line5Ambulatory: "1",
    line8A: "1", line8B: "1", line8C: "1", line8D: "1", line8E: "1",
  };
  const row = medevacReadout(probe).find((r) => r.line === line);
  return (row?.value ?? "").replace(/ 1(?= ·|$)/g, " ___");
}

function MedevacPanel() {
  const labels = medevacReadout(EMPTY_MEDEVAC);
  const label = (n: number) => labels.find((r) => r.line === n)?.label ?? "";
  return (
    <div style={cardStyle}>
      <PanelHead n={2} title="9-Line MEDEVAC" />
      <ol style={{ margin: 0, paddingLeft: "16px" }}>
        <li><strong>Line 1 — {label(1)}:</strong> <span style={writeLine} /></li>
        <li><strong>Line 2 — {label(2)}:</strong> Freq <span style={{ ...writeLine, minWidth: "22%" }} /> Call sign <span style={{ ...writeLine, minWidth: "22%" }} /> Suffix <span style={{ ...writeLine, minWidth: "12%" }} /></li>
        <li><strong>Line 3 — {label(3)}:</strong> {countLineText(3)}</li>
        <li><strong>Line 4 — {label(4)}:</strong> {LINE4_OPTIONS.map((o) => `${o.code} — ${o.label}`).join(" · ")}</li>
        <li><strong>Line 5 — {label(5)}:</strong> {countLineText(5)}</li>
        <li>
          <strong>Line 6 — Security of pickup site (wartime):</strong> {LINE6_WARTIME_OPTIONS.map((o) => `${o.code} — ${o.label}`).join(" · ")}
          <br /><strong>Line 6 (peacetime) — Number and type of wounds, injuries, or illness:</strong> <span style={writeLine} />
        </li>
        <li><strong>Line 7 — {label(7)}:</strong> {LINE7_OPTIONS.map((o) => `${o.code} — ${o.label}`).join(" · ")}</li>
        <li><strong>Line 8 — {label(8)}:</strong> {countLineText(8)}</li>
        <li>
          <strong>Line 9 — NBC contamination (wartime):</strong> {LINE9_NBC_OPTIONS.map((o) => `${o.code} — ${o.label}`).join(" · ")} · None reported
          <br /><strong>Line 9 (peacetime) — Terrain description (incl. obstacles):</strong> <span style={writeLine} />
        </li>
      </ol>
      <p style={{ margin: "4px 0 0", color: "#555" }}>Training aid — transmit in order, lines 1–9. Lines 6 and 9 change with the format, as the published card prints them.</p>
    </div>
  );
}

function KillCardPanel() {
  const rows: [string, string][] = [
    ["Name", ""],
    ["Rank", ""],
    ["Zap number", ""],
    ["Blood type", ""],
    ["Allergies", ""],
  ];
  return (
    <div style={cardStyle}>
      <PanelHead n={3} title="Kill Card — blank (fill in by hand)" />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {rows.map(([k]) => (
            <tr key={k} style={{ borderBottom: "1px solid #c9c9c9" }}>
              <th style={{ textAlign: "left", padding: "3px 6px 3px 0", width: "30%", verticalAlign: "top" }}>{k}</th>
              <td style={{ padding: "3px 0", borderBottom: "1px solid #999" }}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "3px 0 0", color: "#555" }}>Zap number: {ZAP_NUMBER_HELPER}</p>
      <p style={{ margin: "6px 0 2px", fontWeight: 700 }}>Serialized gear</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1.5px solid #1c1c1c" }}>
            <th style={{ textAlign: "left", padding: "2px 6px 2px 0" }}>Gear item</th>
            <th style={{ textAlign: "left", padding: "2px 0" }}>Serial number</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }, (_, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #c9c9c9" }}>
              <td style={{ padding: "7px 6px 7px 0", borderBottom: "1px solid #999" }}>&nbsp;</td>
              <td style={{ padding: "7px 0", borderBottom: "1px solid #999" }}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "4px 0 0", color: "#555" }}>Personal data card — private. The in-app Kill Card (Fieldcraft) saves your filled card to your profile.</p>
    </div>
  );
}

function RangeCardPanel() {
  return (
    <div style={cardStyle}>
      <PanelHead n={4} title="Range Card — blank template" />
      <p style={{ margin: "2px 0" }}>
        Name <span style={{ ...writeLine, minWidth: "30%" }} /> Date <span style={{ ...writeLine, minWidth: "18%" }} /> Weapon / system <span style={{ ...writeLine, minWidth: "24%" }} />
      </p>
      <p style={{ margin: "2px 0" }}>
        Position <span style={{ ...writeLine, minWidth: "30%" }} /> Left limit <span style={{ ...writeLine, minWidth: "12%" }} />° Right limit <span style={{ ...writeLine, minWidth: "12%" }} />° Max range <span style={{ ...writeLine, minWidth: "12%" }} /> m
      </p>
      <div style={{ border: "1px solid #999", height: "110px", position: "relative", margin: "6px 0" }}>
        <span style={{ position: "absolute", top: "2px", left: "50%", transform: "translateX(-50%)", fontWeight: 800 }}>N ↑</span>
        <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", border: "1.5px solid #1c1c1c", padding: "1px 5px", fontWeight: 700, fontSize: "9px" }}>POSITION</span>
        <span style={{ position: "absolute", bottom: "2px", left: "6px", color: "#555" }}>Sketch your sector, TRPs, and kill zone here</span>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1.5px solid #1c1c1c" }}>
            <th style={{ textAlign: "left", padding: "2px 4px 2px 0" }}>Marker</th>
            <th style={{ textAlign: "left", padding: "2px 4px" }}>Azimuth</th>
            <th style={{ textAlign: "left", padding: "2px 4px" }}>Range (m)</th>
            <th style={{ textAlign: "left", padding: "2px 0" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }, (_, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #c9c9c9" }}>
              <td style={{ padding: "6px 4px 6px 0" }}>TRP {i + 1}</td>
              <td style={{ padding: "6px 4px", borderBottom: "1px solid #999" }}>&nbsp;</td>
              <td style={{ padding: "6px 4px", borderBottom: "1px solid #999" }}>&nbsp;</td>
              <td style={{ padding: "6px 0", borderBottom: "1px solid #999" }}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "4px 0 0", color: "#555" }}>The in-app Range Card (Fieldcraft) sketches the sector diagram for you and saves cards to your profile.</p>
    </div>
  );
}

function SignalsPanel({ n, title, ids }: { n: number; title: string; ids: readonly string[] }) {
  const entries = deckSignals(ids);
  return (
    <div style={cardStyle}>
      <PanelHead n={n} title={title} />
      {entries.map((s) => (
        <p key={s.id} style={{ margin: "3px 0" }}>
          <strong>{s.name}.</strong> {s.meaning} {s.steps.join(" ")} <span style={{ color: "#555" }}>({s.source})</span>
        </p>
      ))}
      <p style={{ margin: "4px 0 0", color: "#555" }}>Army forms per TC 3-21.60 — variants are never blended; the full 185-signal library is in Field Tools.</p>
    </div>
  );
}

function KnotsPanel() {
  const knots = deckKnots();
  return (
    <div style={cardStyle}>
      <PanelHead n={7} title="Knots Essentials — the required list" />
      {knots.map((k) => (
        <p key={k.id} style={{ margin: "3px 0" }}>
          <strong>{k.name}.</strong> {k.methods[0]?.steps.map((st, i) => `${i + 1}. ${st}`).join(" ")}
          {k.cautions.length > 0 ? <> <em>Caution: {k.cautions[0]}</em></> : null}{" "}
          <span style={{ color: "#555" }}>({k.source})</span>
        </p>
      ))}
      <p style={{ margin: "4px 0 0", color: "#555" }}>The Coast Guard required-knot list (knots pack §1, S7), at published level only — full step diagrams for all 59 knots are in Field Tools → Knots.</p>
    </div>
  );
}

function CommsPanel() {
  return (
    <div style={cardStyle}>
      <PanelHead n={8} title="Comms Card — phonetic alphabet & prowords" />
      <p style={{ margin: "2px 0" }}>
        {NATO_ALPHABET.map((n) => `${n.letter} ${n.word}`).join(" · ")}
      </p>
      {PROWORDS.slice(0, 8).map((p) => (
        <p key={p.word} style={{ margin: "2px 0" }}>
          <strong>{p.word}</strong> — {p.meaning}
        </p>
      ))}
      <p style={{ margin: "4px 0 0", color: "#555" }}>Full proword list + the 24-hour clock + Morse chart: Field Tools → Comms Card.</p>
    </div>
  );
}

function IndexPanel() {
  return (
    <div style={cardStyle}>
      <PanelHead n={1} title="Deck Index — Smart-Card Deck" />
      {DECK_PANELS.slice(1).map((p) => (
        <p key={p.n} style={{ margin: "2px 0" }}>
          <strong>{p.n}. {p.title}</strong> — {p.note}
        </p>
      ))}
      <p style={{ margin: "5px 0 0" }}>
        Print at 100%, cut on the dashed guides, carry in a pocket or card wallet. Every panel is generated
        from the same data as its in-app card in Battle Book, so the deck never drifts from the app.
      </p>
    </div>
  );
}

/** One When It Goes Wrong panel — rendered from emergency.ts, the
 * same data module as the in-app deck (single source; if an in-app
 * emergency card changes, this panel changes with it). The pack's
 * shape is preserved: DO FIRST numbered → CALL → THEN → WATCH OUT. */
function EmergencyPanel({ card, n }: { card: EmergencyCardData; n: number }) {
  return (
    <div style={cardStyle}>
      <PanelHead n={n} title={`When It Goes Wrong ${card.id}`} />
      <p style={{ margin: "2px 0", fontWeight: 700 }}>{card.title}</p>
      <p style={{ margin: "2px 0" }}>{card.intro}</p>
      <p style={{ margin: "5px 0 1px", fontWeight: 800 }}>DO FIRST</p>
      <ol style={{ margin: 0, paddingLeft: "16px" }}>
        {card.doFirst.map((s, i) => (
          <li key={i} style={{ margin: "2px 0" }}>{s}</li>
        ))}
      </ol>
      <p style={{ margin: "5px 0 1px", fontWeight: 800 }}>CALL</p>
      {card.calls.map((c) => (
        <p key={c.tel + c.label} style={{ margin: "2px 0" }}>
          <strong>{c.label}</strong>
          {c.note ? <> — {c.note}</> : null}
        </p>
      ))}
      {card.callNotes?.map((note) => (
        <p key={note.slice(0, 40)} style={{ margin: "2px 0" }}>{note}</p>
      ))}
      <p style={{ margin: "5px 0 1px", fontWeight: 800 }}>THEN</p>
      <ol style={{ margin: 0, paddingLeft: "16px" }}>
        {card.then.map((s, i) => (
          <li key={i} style={{ margin: "2px 0" }}>{s}</li>
        ))}
      </ol>
      <p style={{ margin: "5px 0 1px", fontWeight: 800 }}>WATCH OUT</p>
      <ul style={{ margin: 0, paddingLeft: "16px" }}>
        {card.watchOut.map((s, i) => (
          <li key={i} style={{ margin: "2px 0" }}>{s}</li>
        ))}
      </ul>
      <p style={{ margin: "4px 0 0", color: "#555" }}>Source: {card.source}</p>
    </div>
  );
}

/** One Closure Sweep field panel — rendered from closureField.ts,
 * the same FieldEntry the in-app Land Navigation / First Aid & Buddy
 * Aid tools render (single source; if the in-app entry changes, this
 * panel changes with it). Panels 17–27 are the CARD-marked land-nav
 * entries, 28–40 the CARD-marked first-aid entries. */
function ClosurePanel({ entry, n, setName }: { entry: FieldEntry; n: number; setName: string }) {
  return (
    <div style={cardStyle}>
      <PanelHead n={n} title={`${setName} ${entry.code}`} />
      <p style={{ margin: "2px 0", fontWeight: 700 }}>{entry.title}</p>
      {entry.body.map((p, i) => (
        <p key={i} style={{ margin: "3px 0" }}>{p}</p>
      ))}
      {entry.flag ? (
        <p style={{ margin: "4px 0 0", fontWeight: 700 }}>⚠ {entry.flag}</p>
      ) : null}
      <p style={{ margin: "4px 0 0", color: "#555" }}>Source: {entry.source}</p>
    </div>
  );
}

export function DeckPrintBody() {
  return (
    <div>
      <p style={{ fontSize: "12px", color: "#555", margin: "0 0 10px" }}>
        Pocket deck · {DECK_PANELS.length} panels · Cut on the dashed lines · Generated from the in-app
        Field Tools cards, the When It Goes Wrong deck, and the Closure Sweep field reference — same data,
        no re-typed copies.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <IndexPanel />
        <MedevacPanel />
        <KillCardPanel />
        <RangeCardPanel />
        <SignalsPanel n={5} title="Signals Quick Set A — Control" ids={DECK_SIGNAL_IDS_A} />
        <SignalsPanel n={6} title="Signals Quick Set B — Contact & Warning" ids={DECK_SIGNAL_IDS_B} />
        <KnotsPanel />
        <CommsPanel />
        {EMERGENCY_CARDS.map((card, i) => (
          <EmergencyPanel key={card.id} card={card} n={9 + i} />
        ))}
        {LANDNAV_CARDS.map((e, i) => (
          <ClosurePanel key={e.id} entry={e} n={17 + i} setName="Land Navigation" />
        ))}
        {FIRSTAID_CARDS.map((e, i) => (
          <ClosurePanel key={e.id} entry={e} n={17 + LANDNAV_CARDS.length + i} setName="First Aid & Buddy Aid" />
        ))}
      </div>
    </div>
  );
}
