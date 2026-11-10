// Fieldcraft cards: the 9-line MEDEVAC chart, the range sketch card,
// and the Kill Card. All three live inside the Fieldcraft section. The
// MEDEVAC draft and range sketch cards persist per profile through the
// field-kit actions; the Kill Card is a personal data card (name,
// rank, zap number, blood type, allergies, serialized gear —
// Christian's definition, Nov 9, 2026) and persists per profile
// through its own owner-private actions, exactly like My Emergency
// Card. The formats themselves are defined in fieldkit.ts.

import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import {
EMPTY_MEDEVAC,
LINE4_OPTIONS,
LINE6_WARTIME_OPTIONS,
LINE7_OPTIONS,
LINE9_NBC_OPTIONS,
ZAP_NUMBER_HELPER,
degToMils,
medevacReadout,
newSketchCard,
polarToXY,
xyToPolar,
type KillCardData,
type KillGearItem,
type MedevacState,
type SketchCardData,
type SketchMarker,
type SketchMarkerType,
} from "./fieldkit";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const smallInputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const btnPrimary =
  "rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

function parseCards(json: string): SketchCardData[] {
  if (!json) return [];
  try {
    const parsed: unknown = JSON.parse(json);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (c): c is SketchCardData =>
        typeof c === "object" && c !== null && "id" in c && "kind" in c && "markers" in c,
    );
  } catch {
    return [];
  }
}

function parseMedevac(json: string): MedevacState {
  if (!json) return EMPTY_MEDEVAC;
  try {
    const parsed: unknown = JSON.parse(json);
    if (typeof parsed !== "object" || parsed === null) return EMPTY_MEDEVAC;
    return { ...EMPTY_MEDEVAC, ...(parsed as Partial<MedevacState>) };
  } catch {
    return EMPTY_MEDEVAC;
  }
}

/* ------------------------------ Container ------------------------------ */

export function FieldCardsSections({
  onOpenMedical,
  onPrintCard,
  onPrintKillCard,
}: {
  onOpenMedical: () => void;
  onPrintCard: (card: SketchCardData) => void;
  onPrintKillCard: (card: KillCardData) => void;
}) {
  const queryClient = useQueryClient();
  const kitQ = useQuery({ queryKey: ["fieldKit"], queryFn: () => api.getFieldKit({}) });
  const [medevac, setMedevac] = useState<MedevacState>(EMPTY_MEDEVAC);
  const [cards, setCards] = useState<SketchCardData[]>([]);
  const [savedNote, setSavedNote] = useState("");
  // Snapshot bookkeeping, per part: apply a server snapshot whenever it
  // changes, except the echo of our own save. One-shot hydration from
  // the query cache is wrong in both directions — a remount can serve
  // the pre-save snapshot (stale), and this app's query client does not
  // refetch on every remount, so gating on a post-mount fetch can leave
  // the cards empty until a full reload.
  const ready = useRef(false);
  const appliedMedevac = useRef<string | null>(null);
  const appliedCards = useRef<string | null>(null);
  const sentMedevac = useRef("");
  const sentCards = useRef("");

  useEffect(() => {
    if (!kitQ.data) return;
    ready.current = true;
    const mj = kitQ.data.medevacJson;
    if (mj !== appliedMedevac.current) {
      appliedMedevac.current = mj;
      if (mj !== sentMedevac.current) setMedevac(parseMedevac(mj));
    }
    const cj = kitQ.data.cardsJson;
    if (cj !== appliedCards.current) {
      appliedCards.current = cj;
      if (cj !== sentCards.current) setCards(parseCards(cj));
    }
  }, [kitQ.data]);

  const saveMedevac = useMutation({
    mutationFn: (json: string) => api.saveFieldKit({ medevacJson: json }),
    onSuccess: () => {
      setSavedNote("9-line draft saved to your profile.");
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });
  const saveCards = useMutation({
    mutationFn: (json: string) => api.saveFieldKit({ cardsJson: json }),
    onSuccess: () => {
      setSavedNote("Cards saved to your profile.");
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });

  // Auto-save both drafts shortly after they change (once the first
  // server snapshot has been seen), so nothing typed is lost by
  // navigating away. A state change that IS the applied server
  // snapshot (or our own save) is not re-saved.
  const medevacFirst = useRef(true);
  useEffect(() => {
    if (!ready.current) return;
    if (medevacFirst.current) {
      medevacFirst.current = false;
      return;
    }
    const json = JSON.stringify(medevac);
    if (json === sentMedevac.current) return;
    const t = window.setTimeout(() => {
      sentMedevac.current = json;
      saveMedevac.mutate(json);
    }, 700);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medevac]);

  const cardsFirst = useRef(true);
  useEffect(() => {
    if (!ready.current) return;
    if (cardsFirst.current) {
      cardsFirst.current = false;
      return;
    }
    const json = JSON.stringify(cards);
    if (json === sentCards.current) return;
    const t = window.setTimeout(() => {
      sentCards.current = json;
      saveCards.mutate(json);
    }, 700);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  return (
    <>
      {savedNote ? (
        <p className="mt-4 text-sm font-semibold text-[var(--dim)]" role="status">
          {savedNote}
        </p>
      ) : null}
      <MedevacSection state={medevac} setState={setMedevac} onOpenMedical={onOpenMedical} />
      <SketchCardsSection
        cards={cards.filter((c) => c.kind === "range")}
        allCards={cards}
        setCards={setCards}
        onPrintCard={onPrintCard}
      />
      <KillCardSection onPrintKillCard={onPrintKillCard} />
    </>
  );
}

/* ---------------------------- 9-line MEDEVAC ---------------------------- */

function CountField({
  id,
  letter,
  label,
  value,
  onChange,
}: {
  id: string;
  letter: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {letter} — {label}
      </label>
      <input
        id={id}
        aria-label={`Line count ${letter} ${label}`}
        type="number"
        min={0}
        max={99}
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={smallInputCls}
      />
    </div>
  );
}

function OptionPicker({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { code: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <label key={o.code} className="flex cursor-pointer items-center gap-3 rounded bg-[var(--surface2)] px-3 py-2">
          <input
            type="radio"
            name={name}
            aria-label={`${name}: ${o.code} ${o.label}`}
            checked={value === o.code}
            onChange={() => onChange(o.code)}
            className="h-5 w-5 accent-[var(--accent)]"
          />
          <span className="text-base text-[var(--text)]">
            <strong className="font-display">{o.code}</strong> — {o.label}
          </span>
        </label>
      ))}
    </div>
  );
}

function LineBlock({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--border)] p-4">
      <p className="font-display text-base font-bold text-[var(--text)]">
        Line {n} — {title}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function MedevacSection({
  state,
  setState,
  onOpenMedical,
}: {
  state: MedevacState;
  setState: (s: MedevacState) => void;
  onOpenMedical: () => void;
}) {
  const set = (patch: Partial<MedevacState>) => setState({ ...state, ...patch });
  const readout = medevacReadout(state);
  const wartime = state.mode === "wartime";

  return (
    <section aria-label="9-line MEDEVAC chart" className={`${cardCls} mt-4`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">9-Line MEDEVAC Chart</h3>
        <span className="inline-block rounded bg-[var(--amber-bg)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--amber)]">
          TRAINING AID
        </span>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">
        The standard 9-line MEDEVAC request, line by line, in the order you transmit it. Fill it in and read
        it off the summary at the bottom. This is a training aid for learning the format — for the training
        and certifications behind it (TCCC, CLS, and the rest), see Medical Training &amp; Certs and its
        official sources.
      </p>
      <button type="button" aria-label="Open Medical Training and Certs" onClick={onOpenMedical} className={`${btnGhost} mt-3`}>
        Open Medical Training &amp; Certs
      </button>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="MEDEVAC format mode">
        <button
          type="button"
          aria-label="Wartime format"
          aria-pressed={wartime}
          onClick={() => set({ mode: "wartime" })}
          className={wartime ? btnPrimary : btnGhost}
        >
          Wartime
        </button>
        <button
          type="button"
          aria-label="Peacetime format"
          aria-pressed={!wartime}
          onClick={() => set({ mode: "peacetime" })}
          className={!wartime ? btnPrimary : btnGhost}
        >
          Peacetime
        </button>
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Lines 6 and 9 change with the format, as the published card prints them: security and NBC
        contamination in wartime; wounds and terrain in peacetime. Your draft saves to your profile as you
        fill it in.
      </p>

      <div className="mt-4 space-y-3">
        <LineBlock n={1} title="Location of pickup site">
          <label htmlFor="mv-l1" className={labelCls}>
            Grid coordinates of the pickup site
          </label>
          <input
            id="mv-l1"
            aria-label="Line 1 grid coordinates"
            type="text"
            value={state.line1Grid}
            onChange={(e) => set({ line1Grid: e.target.value })}
            placeholder="e.g. 18S UJ 23394 07395"
            className={inputCls}
            autoCapitalize="characters"
          />
        </LineBlock>

        <LineBlock n={2} title="Radio frequency, call sign, and suffix">
          <div className="grid gap-2 sm:grid-cols-3">
            <div>
              <label htmlFor="mv-l2f" className={labelCls}>Frequency</label>
              <input id="mv-l2f" aria-label="Line 2 frequency" type="text" value={state.line2Freq} onChange={(e) => set({ line2Freq: e.target.value })} className={inputCls} />
            </div>
            <div>
              <label htmlFor="mv-l2c" className={labelCls}>Call sign</label>
              <input id="mv-l2c" aria-label="Line 2 call sign" type="text" value={state.line2Callsign} onChange={(e) => set({ line2Callsign: e.target.value })} className={inputCls} />
            </div>
            <div>
              <label htmlFor="mv-l2s" className={labelCls}>Suffix</label>
              <input id="mv-l2s" aria-label="Line 2 suffix" type="text" value={state.line2Suffix} onChange={(e) => set({ line2Suffix: e.target.value })} className={inputCls} />
            </div>
          </div>
        </LineBlock>

        <LineBlock n={3} title="Number of patients by precedence">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            <CountField id="mv-l3a" letter="A" label="Urgent" value={state.line3A} onChange={(v) => set({ line3A: v })} />
            <CountField id="mv-l3b" letter="B" label="Urgent-Surgical" value={state.line3B} onChange={(v) => set({ line3B: v })} />
            <CountField id="mv-l3c" letter="C" label="Priority" value={state.line3C} onChange={(v) => set({ line3C: v })} />
            <CountField id="mv-l3d" letter="D" label="Routine" value={state.line3D} onChange={(v) => set({ line3D: v })} />
            <CountField id="mv-l3e" letter="E" label="Convenience" value={state.line3E} onChange={(v) => set({ line3E: v })} />
          </div>
        </LineBlock>

        <LineBlock n={4} title="Special equipment required">
          <OptionPicker name="Line 4 special equipment" options={LINE4_OPTIONS} value={state.line4} onChange={(v) => set({ line4: v })} />
          <label htmlFor="mv-l4o" className={`${labelCls} mt-2`}>
            Other / detail (optional)
          </label>
          <input id="mv-l4o" aria-label="Line 4 other equipment detail" type="text" value={state.line4Other} onChange={(e) => set({ line4Other: e.target.value })} className={inputCls} />
        </LineBlock>

        <LineBlock n={5} title="Number of patients by type">
          <div className="grid grid-cols-2 gap-2">
            <CountField id="mv-l5l" letter="L" label="Litter" value={state.line5Litter} onChange={(v) => set({ line5Litter: v })} />
            <CountField id="mv-l5a" letter="A" label="Ambulatory" value={state.line5Ambulatory} onChange={(v) => set({ line5Ambulatory: v })} />
          </div>
        </LineBlock>

        {wartime ? (
          <LineBlock n={6} title="Security of pickup site">
            <OptionPicker name="Line 6 security" options={LINE6_WARTIME_OPTIONS} value={state.line6Wartime} onChange={(v) => set({ line6Wartime: v })} />
          </LineBlock>
        ) : (
          <LineBlock n={6} title="Number and type of wounds, injuries, or illness (peacetime)">
            <label htmlFor="mv-l6p" className={labelCls}>
              Wounds / injuries / illness
            </label>
            <input
              id="mv-l6p"
              aria-label="Line 6 peacetime wounds and injuries"
              type="text"
              value={state.line6Peacetime}
              onChange={(e) => set({ line6Peacetime: e.target.value })}
              placeholder="e.g. 1 broken leg, 1 head injury"
              className={inputCls}
            />
          </LineBlock>
        )}

        <LineBlock n={7} title="Method of marking pickup site">
          <OptionPicker name="Line 7 marking method" options={LINE7_OPTIONS} value={state.line7} onChange={(v) => set({ line7: v })} />
          {state.line7 === "E" ? (
            <>
              <label htmlFor="mv-l7o" className={`${labelCls} mt-2`}>
                Other marking method
              </label>
              <input id="mv-l7o" aria-label="Line 7 other marking method" type="text" value={state.line7Other} onChange={(e) => set({ line7Other: e.target.value })} className={inputCls} />
            </>
          ) : null}
        </LineBlock>

        <LineBlock n={8} title="Patient nationality and status">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            <CountField id="mv-l8a" letter="A" label="US military" value={state.line8A} onChange={(v) => set({ line8A: v })} />
            <CountField id="mv-l8b" letter="B" label="US civilian" value={state.line8B} onChange={(v) => set({ line8B: v })} />
            <CountField id="mv-l8c" letter="C" label="Non-US military" value={state.line8C} onChange={(v) => set({ line8C: v })} />
            <CountField id="mv-l8d" letter="D" label="Non-US civilian" value={state.line8D} onChange={(v) => set({ line8D: v })} />
            <CountField id="mv-l8e" letter="E" label="Enemy prisoner of war" value={state.line8E} onChange={(v) => set({ line8E: v })} />
          </div>
        </LineBlock>

        {wartime ? (
          <LineBlock n={9} title="NBC contamination">
            <div className="space-y-1.5">
              {LINE9_NBC_OPTIONS.map((o) => (
                <label key={o.code} className="flex cursor-pointer items-center gap-3 rounded bg-[var(--surface2)] px-3 py-2">
                  <input
                    type="checkbox"
                    aria-label={`Line 9 contamination ${o.code} ${o.label}`}
                    checked={state.line9Nbc.includes(o.code)}
                    onChange={(e) =>
                      set({
                        line9Nbc: e.target.checked
                          ? [...state.line9Nbc, o.code]
                          : state.line9Nbc.filter((c) => c !== o.code),
                      })
                    }
                    className="h-5 w-5 accent-[var(--accent)]"
                  />
                  <span className="text-base text-[var(--text)]">
                    <strong className="font-display">{o.code}</strong> — {o.label}
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-1 text-sm text-[var(--dim)]">Check all that apply. Nothing checked reads as “None reported.”</p>
          </LineBlock>
        ) : (
          <LineBlock n={9} title="Terrain description (peacetime)">
            <label htmlFor="mv-l9p" className={labelCls}>
              Terrain description, including obstacles near the pickup site
            </label>
            <input
              id="mv-l9p"
              aria-label="Line 9 peacetime terrain description"
              type="text"
              value={state.line9Peacetime}
              onChange={(e) => set({ line9Peacetime: e.target.value })}
              placeholder="e.g. Flat field, power lines on the north edge"
              className={inputCls}
            />
          </LineBlock>
        )}
      </div>

      <div className="mt-4 rounded-[var(--radius)] bg-[var(--surface2)] p-4">
        <p className="font-display text-lg font-bold text-[var(--text)]">Read it off — in order</p>
        <ol className="mt-2 space-y-1.5" aria-label="MEDEVAC read-off summary">
          {readout.map((r) => (
            <li key={r.line} className="text-base text-[var(--text)]">
              <strong className="font-display">Line {r.line}:</strong> {r.value}
              <span className="text-[var(--dim)]"> ({r.label})</span>
            </li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        aria-label="Clear the 9-line chart"
        onClick={() => setState(EMPTY_MEDEVAC)}
        className={`${btnGhost} mt-4`}
      >
        Clear chart
      </button>
    </section>
  );
}

/* ------------------------------ Kill Card ------------------------------ */
// A personal data card, owner-private per profile exactly like My
// Emergency Card: the get/save actions resolve the signed-in profile
// server-side and only ever touch that profile's row — nothing here
// accepts a profile id, and the card renders nowhere else. Fields in
// Christian's order: name and rank (from the profile), zap number,
// blood type, allergies, then serialized gear — item by item, each
// with its serial number.

function KillCardSection({ onPrintKillCard }: { onPrintKillCard: (card: KillCardData) => void }) {
  const queryClient = useQueryClient();
  const cardQ = useQuery({ queryKey: ["killCard"], queryFn: () => api.getKillCard({}) });
  const [editing, setEditing] = useState(false);
  const [zapNumber, setZapNumber] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [gear, setGear] = useState<KillGearItem[]>([]);

  const saveM = useMutation({
    mutationFn: () =>
      api.saveKillCard({
        zapNumber: zapNumber.slice(0, 40),
        bloodType: bloodType.slice(0, 20),
        allergies: allergies.slice(0, 500),
        gear: gear
          .slice(0, 60)
          .map((g) => ({ item: g.item.slice(0, 120), serial: g.serial.slice(0, 80) })),
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["killCard"] });
      setEditing(false);
    },
  });

  const card = cardQ.data;

  if (card?.locked) {
    return (
      <section aria-label="Kill card" className={`${cardCls} mt-4`}>
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Kill Card</h3>
        <p className="mt-1 text-base text-[var(--text)]">
          Kill cards open with a member or spouse profile. The card holds the member&apos;s own personal
          data — visible only to them — so it unlocks when this profile becomes a member profile, or on a
          spouse profile.
        </p>
      </section>
    );
  }

  const filledGear = (card?.gear ?? []).filter((g) => g.item || g.serial);
  const hasCard = Boolean(card && (card.zapNumber || card.bloodType || card.allergies || filledGear.length > 0));

  const startEditing = () => {
    setZapNumber(card?.zapNumber ?? "");
    setBloodType(card?.bloodType ?? "");
    setAllergies(card?.allergies ?? "");
    setGear(card?.gear ?? []);
    setEditing(true);
  };

  const setGearRow = (i: number, patch: Partial<KillGearItem>) =>
    setGear((prev) => prev.map((g, j) => (j === i ? { ...g, ...patch } : g)));
  const addGearRow = () => setGear((prev) => [...prev, { item: "", serial: "" }]);
  const removeGearRow = (i: number) => setGear((prev) => prev.filter((_, j) => j !== i));

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveM.mutate();
  };

  const printData: KillCardData = {
    name: card?.name ?? "",
    rank: card?.rank ?? "",
    zapNumber: card?.zapNumber ?? "",
    bloodType: card?.bloodType ?? "",
    allergies: card?.allergies ?? "",
    gear: card?.gear ?? [],
  };

  return (
    <section aria-label="Kill card" className={`${cardCls} mt-4`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Kill Card</h3>
        <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
          PRIVATE — ONLY YOU
        </span>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">
        Your personal data card: your name, rank, zap number, blood type, allergies, and your serialized
        gear with its serial numbers. It is private to your profile — no other profile ever sees it.
      </p>

      {cardQ.isPending ? (
        <p className="mt-4 text-base text-[var(--dim)]">Loading your card…</p>
      ) : cardQ.error ? (
        <p className="mt-4 text-base text-[var(--red)]">Could not load your card. Pull to retry, or reopen it.</p>
      ) : editing ? (
        <form onSubmit={onSave} className="mt-4 space-y-4">
          <div>
            <span className={labelCls}>Name</span>
            <p className="text-base font-semibold text-[var(--text)]">{card?.name || "—"}</p>
            <p className="text-sm text-[var(--dim)]">From your profile.</p>
          </div>
          <div>
            <span className={labelCls}>Rank</span>
            <p className="text-base font-semibold text-[var(--text)]">{card?.rank || "—"}</p>
            <p className="text-sm text-[var(--dim)]">From your profile.</p>
          </div>
          <div>
            <label htmlFor="kc-zap" className={labelCls}>Zap number</label>
            <input
              id="kc-zap"
              aria-label="Zap number"
              type="text"
              value={zapNumber}
              onChange={(e) => setZapNumber(e.target.value)}
              className={inputCls}
              autoCapitalize="characters"
            />
            <p className="mt-1 text-sm text-[var(--dim)]">{ZAP_NUMBER_HELPER}</p>
          </div>
          <div>
            <label htmlFor="kc-blood" className={labelCls}>Blood type</label>
            <input
              id="kc-blood"
              aria-label="Blood type"
              type="text"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              placeholder="e.g. O POS"
              className={inputCls}
              autoCapitalize="characters"
            />
          </div>
          <div>
            <label htmlFor="kc-allergies" className={labelCls}>Allergies</label>
            <input
              id="kc-allergies"
              aria-label="Allergies"
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="e.g. Penicillin — or None known"
              className={inputCls}
            />
          </div>
          <fieldset>
            <legend className="font-display text-base font-bold text-[var(--text)]">Serialized gear</legend>
            <p className="mt-1 text-sm text-[var(--dim)]">
              One row per item of serialized gear you carry, with its serial number. Add as many rows as
              you carry.
            </p>
            <div className="mt-2 space-y-2">
              {gear.map((g, i) => (
                <div key={i} className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-[var(--text)]">Gear {i + 1}</span>
                    <button
                      type="button"
                      aria-label={`Remove gear row ${i + 1}`}
                      onClick={() => removeGearRow(i)}
                      className="text-sm font-bold text-[var(--red)]"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`kc-gear-item-${i}`} className={labelCls}>Gear item</label>
                      <input
                        id={`kc-gear-item-${i}`}
                        aria-label={`Gear item ${i + 1} name`}
                        type="text"
                        value={g.item}
                        onChange={(e) => setGearRow(i, { item: e.target.value })}
                        placeholder="e.g. Rifle"
                        className={smallInputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor={`kc-gear-serial-${i}`} className={labelCls}>Serial number</label>
                      <input
                        id={`kc-gear-serial-${i}`}
                        aria-label={`Gear item ${i + 1} serial number`}
                        type="text"
                        value={g.serial}
                        onChange={(e) => setGearRow(i, { serial: e.target.value })}
                        className={smallInputCls}
                        autoCapitalize="characters"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" aria-label="Add a serialized gear row" onClick={addGearRow} className={`${btnGhost} mt-2`}>
              + Add gear
            </button>
          </fieldset>
          {saveM.error ? (
            <p className="text-base text-[var(--red)]">Could not save your card. Check your connection and try again.</p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <button type="submit" aria-label="Save kill card" disabled={saveM.isPending} className={btnPrimary}>
              {saveM.isPending ? "Saving…" : "Save card"}
            </button>
            <button type="button" aria-label="Cancel editing kill card" onClick={() => setEditing(false)} className={btnGhost}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-4">
          <dl className="space-y-2">
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Name</dt>
              <dd className="text-base text-[var(--text)]">{card?.name || "—"}</dd>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Rank</dt>
              <dd className="text-base text-[var(--text)]">{card?.rank || "—"}</dd>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Zap number</dt>
              <dd className="text-base text-[var(--text)]">{card?.zapNumber || "Not filled in"}</dd>
              <dd className="mt-0.5 text-sm text-[var(--dim)]">{ZAP_NUMBER_HELPER}</dd>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Blood type</dt>
              <dd className="text-base text-[var(--text)]">{card?.bloodType || "Not filled in"}</dd>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Allergies</dt>
              <dd className="text-base text-[var(--text)]">{card?.allergies || "Not filled in"}</dd>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <dt className="text-sm font-bold text-[var(--dim)]">Serialized gear</dt>
              {filledGear.length > 0 ? (
                <dd>
                  <ul className="mt-1 space-y-1">
                    {filledGear.map((g, i) => (
                      <li key={i} className="flex flex-wrap justify-between gap-2 text-base text-[var(--text)]">
                        <span className="font-semibold">{g.item || "Gear item"}</span>
                        <span>{g.serial || "—"}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              ) : (
                <dd className="text-base text-[var(--text)]">No gear recorded</dd>
              )}
            </div>
          </dl>
          {!hasCard ? (
            <p className="mt-3 text-base text-[var(--text)]">
              You haven&apos;t filled in your card yet — add your zap number, blood type, allergies, and
              the serialized gear you carry.
            </p>
          ) : null}
          {card?.updatedAt ? (
            <p className="mt-3 text-sm text-[var(--dim)]">
              Last updated{" "}
              {new Date(card.updatedAt).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" aria-label={hasCard ? "Edit kill card" : "Fill in kill card"} onClick={startEditing} className={btnPrimary}>
              {hasCard ? "Edit card" : "Fill in card"}
            </button>
            <button type="button" aria-label="Print kill card" onClick={() => onPrintKillCard(printData)} className={btnGhost}>
              Print card
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------- Sketch diagram ------------------------- */

const SKETCH_SIZE = 320;
const SKETCH_C = SKETCH_SIZE / 2;
const SKETCH_R = SKETCH_SIZE / 2 - 18;

function sectorPath(leftDeg: number, rightDeg: number): string {
  // Wedge clockwise from the left limit to the right limit through north
  // when the sector wraps 0°; step in 5° increments.
  const span = ((rightDeg - leftDeg) % 360 + 360) % 360;
  const pts: string[] = [`M ${SKETCH_C} ${SKETCH_C}`];
  for (let a = 0; a <= span; a += 5) {
    const p = polarToXY(leftDeg + a, 1, 1, SKETCH_C, SKETCH_R);
    pts.push(`L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`);
  }
  const end = polarToXY(rightDeg, 1, 1, SKETCH_C, SKETCH_R);
  pts.push(`L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`);
  pts.push("Z");
  return pts.join(" ");
}

const MARKER_SYMBOL: Record<SketchMarkerType, string> = {
  trp: "●",
  primary: "P",
  secondary: "S",
  alternate: "A",
};

export function SketchDiagram({
  card,
  print = false,
  onTap,
}: {
  card: SketchCardData;
  print?: boolean;
  onTap?: (azimuthDeg: number, rangeM: number) => void;
}) {
  const ink = print ? "#1c1c1c" : "var(--text)";
  const faint = print ? "#8a8a8a" : "var(--border)";
  const accent = print ? "#1c1c1c" : "var(--accent)";
  const sectorFill = print ? "rgba(0,0,0,0.07)" : "var(--amber-bg)";
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!onTap || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * SKETCH_SIZE;
    const y = ((e.clientY - rect.top) / rect.height) * SKETCH_SIZE;
    const polar = xyToPolar(x, y, card.maxRangeM, SKETCH_C, SKETCH_R);
    onTap(polar.azimuthDeg, Math.max(0, Math.min(polar.rangeM, card.maxRangeM)));
  };

  const left = polarToXY(card.leftLimitDeg, 1, 1, SKETCH_C, SKETCH_R);
  const right = polarToXY(card.rightLimitDeg, 1, 1, SKETCH_C, SKETCH_R);
  const kz = card.killZone
    ? {
        ...polarToXY(card.killZone.azimuthDeg, card.killZone.rangeM, card.maxRangeM, SKETCH_C, SKETCH_R),
        r: (card.killZone.radiusM / Math.max(card.maxRangeM, 1)) * SKETCH_R,
      }
    : null;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SKETCH_SIZE} ${SKETCH_SIZE}`}
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label={`Range card sketch for ${card.name}: sector from ${card.leftLimitDeg} to ${card.rightLimitDeg} degrees, max range ${card.maxRangeM} meters, ${card.markers.length} markers`}
      onClick={onTap ? handleClick : undefined}
      style={onTap ? { cursor: "crosshair", touchAction: "manipulation" } : undefined}
    >
      <circle cx={SKETCH_C} cy={SKETCH_C} r={SKETCH_R} fill="none" stroke={faint} strokeWidth="1.5" />
      {[0.25, 0.5, 0.75].map((f) => (
        <circle key={f} cx={SKETCH_C} cy={SKETCH_C} r={SKETCH_R * f} fill="none" stroke={faint} strokeWidth="0.75" strokeDasharray="3 4" />
      ))}
      <path d={sectorPath(card.leftLimitDeg, card.rightLimitDeg)} fill={sectorFill} stroke="none" />
      <line x1={SKETCH_C} y1={SKETCH_C} x2={left.x} y2={left.y} stroke={accent} strokeWidth="2" />
      <line x1={SKETCH_C} y1={SKETCH_C} x2={right.x} y2={right.y} stroke={accent} strokeWidth="2" />
      <text x={left.x} y={left.y} fontSize="11" fontWeight="700" fill={accent} textAnchor="middle">
        L {card.leftLimitDeg}°
      </text>
      <text x={right.x} y={right.y} fontSize="11" fontWeight="700" fill={accent} textAnchor="middle">
        R {card.rightLimitDeg}°
      </text>
      {[0.5, 1].map((f) => (
        <text key={f} x={SKETCH_C + 4} y={SKETCH_C - SKETCH_R * f + 12} fontSize="10" fill={ink}>
          {Math.round(card.maxRangeM * f)} m
        </text>
      ))}
      <polygon
        points={`${SKETCH_C},${SKETCH_C - 14} ${SKETCH_C + 5},${SKETCH_C - 4} ${SKETCH_C - 5},${SKETCH_C - 4}`}
        fill={ink}
      />
      <text x={SKETCH_C} y={SKETCH_C - 20} fontSize="11" fontWeight="800" fill={ink} textAnchor="middle">
        N
      </text>
      <rect x={SKETCH_C - 6} y={SKETCH_C - 6} width="12" height="12" fill={accent} stroke={ink} strokeWidth="1" />
      <text x={SKETCH_C} y={SKETCH_C + 24} fontSize="10" fontWeight="700" fill={ink} textAnchor="middle">
        POSITION
      </text>
      {kz && card.killZone ? (
        <g>
          <circle cx={kz.x} cy={kz.y} r={Math.max(kz.r, 6)} fill="none" stroke={ink} strokeWidth="2" strokeDasharray="6 3" />
          <text x={kz.x} y={kz.y + 4} fontSize="11" fontWeight="800" fill={ink} textAnchor="middle">
            KILL ZONE
          </text>
        </g>
      ) : null}
      {card.markers.map((mk) => {
        const p = polarToXY(mk.azimuthDeg, mk.rangeM, card.maxRangeM, SKETCH_C, SKETCH_R);
        return (
          <g key={mk.id}>
            <circle cx={p.x} cy={p.y} r="9" fill={print ? "#fff" : "var(--surface)"} stroke={ink} strokeWidth="1.5" />
            <text x={p.x} y={p.y + 4} fontSize="10" fontWeight="800" fill={ink} textAnchor="middle">
              {mk.type === "trp" ? mk.label.replace(/[^0-9]/g, "") || "•" : MARKER_SYMBOL[mk.type]}
            </text>
            <text x={p.x} y={p.y + 22} fontSize="9" fill={ink} textAnchor="middle">
              {mk.type === "trp" ? mk.label : mk.type === "primary" ? "Primary" : mk.type === "secondary" ? "Secondary" : "Alternate"}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* --------------------------- Sketch card editor --------------------------- */

function SketchCardsSection({
  cards,
  allCards,
  setCards,
  onPrintCard,
}: {
  cards: SketchCardData[];
  allCards: SketchCardData[];
  setCards: (cards: SketchCardData[]) => void;
  onPrintCard: (card: SketchCardData) => void;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const addCard = () => {
    const c = newSketchCard("range");
    setCards([...allCards, c]);
    setOpenId(c.id);
  };
  const updateCard = (updated: SketchCardData) =>
    setCards(allCards.map((c) => (c.id === updated.id ? updated : c)));
  const deleteCard = (id: string) => setCards(allCards.filter((c) => c.id !== id));

  return (
    <section aria-label="Range cards" className={`${cardCls} mt-4`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Range Card</h3>
        <button type="button" aria-label="Add a new range card" onClick={addCard} className={btnPrimary}>
          + New card
        </button>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">
        The standard range card for a fighting position: your position in the center, left and right limits
        of your sector, and target reference points with azimuth, range, and description. Sketch it here,
        keep it on your profile, print it like a Binder sheet.
      </p>
      {cards.length === 0 ? (
        <p className="mt-3 text-base text-[var(--dim)]">
          No range cards yet — tap “New card” to start one.
        </p>
      ) : (
        <div className="mt-3 space-y-3">
          {cards.map((c) => (
            <div key={c.id} className="rounded-[var(--radius)] border border-[var(--border)]">
              <button
                type="button"
                aria-label={`${openId === c.id ? "Close" : "Open"} range card ${c.name}`}
                aria-expanded={openId === c.id}
                onClick={() => setOpenId(openId === c.id ? null : c.id)}
                className="flex w-full items-center justify-between gap-2 p-4 text-left"
              >
                <span className="font-display text-lg font-bold text-[var(--text)]">{c.name}</span>
                <span className="text-sm text-[var(--dim)]">
                  {c.markers.length} marker{c.markers.length === 1 ? "" : "s"}
                </span>
              </button>
              {openId === c.id ? (
                <div className="border-t border-[var(--border)] p-4">
                  <SketchCardEditor card={c} onChange={updateCard} onDelete={() => deleteCard(c.id)} onPrint={() => onPrintCard(c)} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function SketchCardEditor({
  card,
  onChange,
  onDelete,
  onPrint,
}: {
  card: SketchCardData;
  onChange: (c: SketchCardData) => void;
  onDelete: () => void;
  onPrint: () => void;
}) {
  const [placing, setPlacing] = useState<SketchMarkerType | null>(null);
  const set = (patch: Partial<SketchCardData>) => onChange({ ...card, ...patch });

  const placeAt = (azimuthDeg: number, rangeM: number) => {
    if (!placing) return;
    const n = card.markers.filter((m) => m.type === placing).length + 1;
    const label =
      placing === "trp"
        ? `TRP ${card.markers.filter((m) => m.type === "trp").length + 1}`
        : placing === "primary"
          ? "Primary position"
          : placing === "secondary"
            ? "Secondary position"
            : "Alternate position";
    void n;
    const marker: SketchMarker = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
      type: placing,
      label,
      azimuthDeg,
      rangeM,
      description: "",
    };
    set({ markers: [...card.markers, marker] });
    setPlacing(null);
  };

  const updateMarker = (id: string, patch: Partial<SketchMarker>) =>
    set({ markers: card.markers.map((m) => (m.id === id ? { ...m, ...patch } : m)) });
  const removeMarker = (id: string) => set({ markers: card.markers.filter((m) => m.id !== id) });

  const placeButtons: { type: SketchMarkerType; label: string }[] = [
    { type: "trp", label: "Place a TRP" },
  ];

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <label htmlFor={`sc-name-${card.id}`} className={labelCls}>Card name</label>
          <input id={`sc-name-${card.id}`} aria-label="Card name" type="text" value={card.name} onChange={(e) => set({ name: e.target.value })} className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-date-${card.id}`} className={labelCls}>Date</label>
          <input id={`sc-date-${card.id}`} aria-label="Card date" type="date" value={card.date} onChange={(e) => set({ date: e.target.value })} className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-weapon-${card.id}`} className={labelCls}>Weapon / system</label>
          <input id={`sc-weapon-${card.id}`} aria-label="Weapon or system" type="text" value={card.weapon} onChange={(e) => set({ weapon: e.target.value })} placeholder="e.g. M240B" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-pos-${card.id}`} className={labelCls}>Position</label>
          <input id={`sc-pos-${card.id}`} aria-label="Position description" type="text" value={card.position} onChange={(e) => set({ position: e.target.value })} placeholder="e.g. North end of the tree line" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-left-${card.id}`} className={labelCls}>Left limit (deg)</label>
          <input id={`sc-left-${card.id}`} aria-label="Left limit in degrees" type="number" min={0} max={359} value={card.leftLimitDeg} onChange={(e) => set({ leftLimitDeg: Math.max(0, Math.min(359, Number(e.target.value) || 0)) })} className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-right-${card.id}`} className={labelCls}>Right limit (deg)</label>
          <input id={`sc-right-${card.id}`} aria-label="Right limit in degrees" type="number" min={0} max={359} value={card.rightLimitDeg} onChange={(e) => set({ rightLimitDeg: Math.max(0, Math.min(359, Number(e.target.value) || 0)) })} className={inputCls} />
        </div>
        <div>
          <label htmlFor={`sc-max-${card.id}`} className={labelCls}>Sketch scale — max range (m)</label>
          <input id={`sc-max-${card.id}`} aria-label="Maximum range in meters" type="number" min={50} step={50} value={card.maxRangeM} onChange={(e) => set({ maxRangeM: Math.max(50, Number(e.target.value) || 50) })} className={inputCls} />
        </div>
      </div>

      <div className="mt-3">
        <SketchDiagram card={card} onTap={placing ? placeAt : undefined} />
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {placeButtons.map((b) => (
          <button
            key={b.type}
            type="button"
            aria-label={b.label}
            aria-pressed={placing === b.type}
            onClick={() => setPlacing(placing === b.type ? null : b.type)}
            className={placing === b.type ? btnPrimary : btnGhost}
          >
            {b.label}
          </button>
        ))}
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">
        {placing
          ? "Now tap the sketch where the marker goes — its azimuth and range are read off the diagram. Fine-tune the numbers in the table below."
          : "Pick a marker to place, tap the sketch, then fill in its description. Every marker also lives in the data table below."}
      </p>

      <div className="mt-3">
        <p className="font-display text-base font-bold text-[var(--text)]">Data table</p>
        {card.markers.length === 0 ? (
          <p className="mt-1 text-sm text-[var(--dim)]">No markers yet.</p>
        ) : (
          <div className="mt-2 space-y-3">
            {card.markers.map((mk) => (
              <div key={mk.id} className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-display text-base font-bold text-[var(--text)]">
                    {mk.type === "trp" ? mk.label : mk.type === "primary" ? "Primary position" : mk.type === "secondary" ? "Secondary position" : "Alternate position"}
                  </span>
                  <button type="button" aria-label={`Remove marker ${mk.label}`} onClick={() => removeMarker(mk.id)} className="text-sm font-bold text-[var(--red)]">
                    Remove
                  </button>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div>
                    <label htmlFor={`mk-az-${mk.id}`} className={labelCls}>Azimuth (deg)</label>
                    <input id={`mk-az-${mk.id}`} aria-label={`Azimuth for ${mk.label}`} type="number" min={0} max={359} value={mk.azimuthDeg} onChange={(e) => updateMarker(mk.id, { azimuthDeg: Math.max(0, Math.min(359, Number(e.target.value) || 0)) })} className={smallInputCls} />
                    <p className="mt-0.5 text-xs text-[var(--dim)]">{degToMils(mk.azimuthDeg)} mils</p>
                  </div>
                  <div>
                    <label htmlFor={`mk-rg-${mk.id}`} className={labelCls}>Range (m)</label>
                    <input id={`mk-rg-${mk.id}`} aria-label={`Range for ${mk.label}`} type="number" min={0} value={mk.rangeM} onChange={(e) => updateMarker(mk.id, { rangeM: Math.max(0, Number(e.target.value) || 0) })} className={smallInputCls} />
                  </div>
                  <div>
                    <label htmlFor={`mk-lb-${mk.id}`} className={labelCls}>Label</label>
                    <input id={`mk-lb-${mk.id}`} aria-label={`Label for marker`} type="text" value={mk.label} onChange={(e) => updateMarker(mk.id, { label: e.target.value })} className={smallInputCls} />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor={`mk-ds-${mk.id}`} className={labelCls}>Description</label>
                  <input id={`mk-ds-${mk.id}`} aria-label={`Description for ${mk.label}`} type="text" value={mk.description} onChange={(e) => updateMarker(mk.id, { description: e.target.value })} placeholder="e.g. Lone pine tree at the trail junction" className={smallInputCls} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" aria-label={`Print ${card.name}`} onClick={onPrint} className={btnPrimary}>
          Print card
        </button>
        <button type="button" aria-label={`Delete ${card.name}`} onClick={onDelete} className={btnGhost}>
          Delete card
        </button>
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">Cards save to your profile automatically as you edit.</p>
    </div>
  );
}

/* ----------------------- Print body for the Kill Card ----------------------- */

export function KillCardPrintBody({ card }: { card: KillCardData }) {
  const filledGear = card.gear.filter((g) => g.item || g.serial);
  return (
    <div>
      <table className="w-full text-left text-base" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {[
            ["Name", card.name || "—"],
            ["Rank", card.rank || "—"],
            ["Zap number", card.zapNumber || "—"],
            ["Blood type", card.bloodType || "—"],
            ["Allergies", card.allergies || "—"],
          ].map(([k, v]) => (
            <tr key={k} style={{ borderBottom: "1px solid #c9c9c9" }}>
              <th className="py-2 pr-3 font-bold" style={{ width: "35%" }}>{k}</th>
              <td className="py-2">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-1 text-sm text-[#555]">Zap number: {ZAP_NUMBER_HELPER}</p>
      <h2 className="mt-5 border-b-2 border-[#1c1c1c] pb-1 text-lg font-bold">Serialized gear</h2>
      {filledGear.length === 0 ? (
        <p className="mt-2 text-sm">No serialized gear recorded.</p>
      ) : (
        <table className="mt-2 w-full text-left text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #1c1c1c" }}>
              <th className="py-1 pr-2">Gear item</th>
              <th className="py-1">Serial number</th>
            </tr>
          </thead>
          <tbody>
            {filledGear.map((g, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #c9c9c9" }}>
                <td className="py-1.5 pr-2 font-bold">{g.item || "—"}</td>
                <td className="py-1.5">{g.serial || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

/* ------------------------- Print body for a card ------------------------- */

export function SketchCardPrintBody({ card }: { card: SketchCardData }) {
  return (
    <div>
      <SketchDiagram card={card} print />
      <table className="mt-4 w-full text-left text-sm" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {[
            ["Weapon / system", card.weapon || "—"],
            ["Position", card.position || "—"],
            ["Date", card.date || "—"],
            ["Left limit", `${card.leftLimitDeg}° (${degToMils(card.leftLimitDeg)} mils)`],
            ["Right limit", `${card.rightLimitDeg}° (${degToMils(card.rightLimitDeg)} mils)`],
            ["Sketch scale", `Out to ${card.maxRangeM} m`],
          ].map(([k, v]) => (
            <tr key={k} style={{ borderBottom: "1px solid #c9c9c9" }}>
              <th className="py-1.5 pr-3 font-bold" style={{ width: "35%" }}>{k}</th>
              <td className="py-1.5">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="mt-5 border-b-2 border-[#1c1c1c] pb-1 text-lg font-bold">Markers</h2>
      {card.markers.length === 0 ? (
        <p className="mt-2 text-sm">No markers recorded.</p>
      ) : (
        <table className="mt-2 w-full text-left text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #1c1c1c" }}>
              <th className="py-1 pr-2">Marker</th>
              <th className="py-1 pr-2">Azimuth</th>
              <th className="py-1 pr-2">Range</th>
              <th className="py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            {card.markers.map((mk) => (
              <tr key={mk.id} style={{ borderBottom: "1px solid #c9c9c9" }}>
                <td className="py-1.5 pr-2 font-bold">{mk.label}</td>
                <td className="py-1.5 pr-2">
                  {mk.azimuthDeg}° / {degToMils(mk.azimuthDeg)} mils
                </td>
                <td className="py-1.5 pr-2">{mk.rangeM} m</td>
                <td className="py-1.5">{mk.description || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
