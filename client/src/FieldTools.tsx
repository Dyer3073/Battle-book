// Field Tools — the member-side field kit. Every tool runs on the
// device: the compass reads the orientation sensor only after an
// explicit tap, location is requested only when a tool asks for it,
// and the grid tool converts on-device and stores nothing. The one
// thing that persists is the pace-counter setting, saved per profile
// through the field-kit actions.

import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { KnotsTool } from "./KnotsView";
import { SignalsTool } from "./SignalsView";
import { FieldRefTool } from "./ClosureViews";
import { DRILL, DRILL_INTRO, FIRSTAID, FIRSTAID_INTRO, LANDNAV, LANDNAV_INTRO } from "./closureField";
import {
NATO_ALPHABET,
PROWORDS,
REFERENCE_SIZES,
arrivalTime,
backAzimuthDeg,
buildWatchbillRows,
cardinal16,
computeLightData,
degToMils,
evaluateExpression,
formatCalcResult,
formatDuration,
formatLatLon,
formatTimeOfDay,
formatWatchTime,
latLonToMgrs,
marchThird,
mgrsToLatLon,
milRelation,
type AngleMode,
type Watchbill,
} from "./fieldkit";

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const btnPrimary =
  "rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";
const btnDanger =
  "rounded-[var(--radius)] border border-[var(--red)] bg-[var(--red-bg)] px-4 py-3 text-base font-semibold text-[var(--red)] disabled:opacity-50";
const cardCls = "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5";

type ToolKey =
  | "compass"
  | "redlight"
  | "pace"
  | "zulu"
  | "light"
  | "grid"
  | "comms"
  | "calc"
  | "notes"
  | "timer"
  | "march"
  | "milrel"
  | "load"
  | "watchbill"
  | "hydration"
  | "knots"
  | "signals"
  | "landnav"
  | "firstaid"
  | "drill";

const TOOLS: { key: ToolKey; name: string; blurb: string }[] = [
  { key: "compass", name: "Compass", blurb: "Heading in degrees and mils, with back azimuth" },
  { key: "redlight", name: "Red Lens Light", blurb: "Full-screen red light — steady, slow flash, SOS" },
  { key: "pace", name: "Pace Counter", blurb: "Digital ranger beads with your own pace count" },
  { key: "zulu", name: "Zulu Clock & Converters", blurb: "Local and Zulu side by side, plus field conversions" },
  { key: "light", name: "Light Data", blurb: "Sunrise, sunset, BMNT / EENT, and moon phase" },
  { key: "grid", name: "Grid Reference", blurb: "Your position as MGRS, plus GPS elevation, and a two-way converter" },
  { key: "comms", name: "Comms Card", blurb: "Phonetic alphabet, prowords, the 24-hour clock, and a Morse code chart with a text translator" },
  { key: "calc", name: "Scientific Calculator", blurb: "Full calculator — trig, logs, powers, roots, memory keys" },
  { key: "timer", name: "Timer", blurb: "Stopwatch with laps, countdown, and work / rest intervals" },
  { key: "march", name: "March Calculator", blurb: "Distance, speed, and time — enter any two, get the third and your arrival" },
  { key: "milrel", name: "Mil-Relation Estimator", blurb: "Range = size × 1000 ÷ mils — solve for range, size, or mils" },
  { key: "load", name: "Load Calculator", blurb: "What you're carrying, totaled and as a share of your body weight" },
  { key: "watchbill", name: "Watchbill Builder", blurb: "Names, shift length, and days in — a full rotation table out, printable" },
  { key: "hydration", name: "Hydration Tracker", blurb: "Your daily water goal and a tap-to-log running total" },
  { key: "notes", name: "Field Notes", blurb: "Your private notebook — saved on your profile, never shared" },
  { key: "knots", name: "Knots", blurb: "59 military knots + whipping, each with an original step diagram — from the official manuals" },
  { key: "signals", name: "Hand & Arm Signals", blurb: "All 185 published signals — Army, USMC, FM 21-60 differing set, and MHE — each with an original START → FINISH diagram; variants attributed per service, never blended" },
  { key: "landnav", name: "Land Navigation", blurb: "Map reading and land navigation from FM 3-25.26 (2001, Distribution A) — 26 entries with original schematic diagrams; 11 also print in the Smart-Card Deck" },
  { key: "firstaid", name: "First Aid & Buddy Aid", blurb: "Self-aid and buddy-aid at the published level — 17 entries, the tourniquet evolution printed both sides; 13 also print in the Smart-Card Deck" },
  { key: "drill", name: "Drill & Ceremonies", blurb: "Army drill from TC 3-21.5 — 17 entries, positions and carries for the manual of arms, original strip diagrams; labeled Army, never joint" },
];

export function FieldToolsView({
  onPrintWatchbill,
  onPrintDeck,
  knotFocus,
  signalFocus,
  closureFocus,
  onDrillKnots,
  onDrillSignals,
}: {
  onPrintWatchbill: (wb: Watchbill) => void;
  onPrintDeck?: () => void;
  /** Global Search / Binder deep link: open the Knots tool on this knot. */
  knotFocus?: { id: string; n: number } | null;
  /** Global Search / Binder deep link: open the Hand & Arm Signals tool on this signal. */
  signalFocus?: { id: string; n: number } | null;
  /** Global Search / Binder deep link: open the Closure Sweep field
   * reference (Land Navigation / First Aid / Drill) on this entry id. */
  closureFocus?: { id: string; n: number } | null;
  /** Practice Trainers entry points from the Knots / Signals tools. */
  onDrillKnots?: () => void;
  onDrillSignals?: () => void;
}) {
  const [tool, setTool] = useState<ToolKey>("compass");
  useEffect(() => {
    if (knotFocus) setTool("knots");
  }, [knotFocus]);
  useEffect(() => {
    if (signalFocus) setTool("signals");
  }, [signalFocus]);
  useEffect(() => {
    if (!closureFocus) return;
    if (closureFocus.id.startsWith("L-")) setTool("landnav");
    else if (closureFocus.id.startsWith("F-")) setTool("firstaid");
    else if (closureFocus.id.startsWith("D-")) setTool("drill");
  }, [closureFocus]);
  return (
    <div>
      <div className="mb-3">
        <h2 className="font-display text-2xl font-bold text-[var(--text)]">Field Tools</h2>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Tools that run on your phone, in the field, with no connection. Sensors and location are only used
          when you tap to start them.
        </p>
      </div>
      {onPrintDeck ? (
        <section aria-label="Smart-Card Deck" className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
          <h3 className="font-display text-lg font-bold text-[var(--text)]">Smart-Card Deck — one printable pocket deck</h3>
          <p className="mt-1 text-base text-[var(--text)]">
            The Field Tools cards as one pocket deck: deck index, the 9-Line MEDEVAC (all 9 lines), a
            blank-fillable Kill Card, a blank Range Card template, the Signals quick set, the Knots
            essentials, the Comms Card, the 8 When It Goes Wrong panels, and the Closure Sweep field
            cards (11 Land Navigation + 13 First Aid &amp; Buddy Aid) — generated from the same data as
            the in-app cards, so the deck never drifts. Print at 100% and cut on the dashed guides.
          </p>
          <button type="button" aria-label="Open the printable Smart-Card Deck" onClick={onPrintDeck} className="mt-3 rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)]">
            Open printable deck
          </button>
        </section>
      ) : null}
      <div className="mb-4 grid grid-cols-2 gap-2" role="tablist" aria-label="Field tools">
        {TOOLS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tool === t.key}
            aria-label={`Open ${t.name}`}
            onClick={() => setTool(t.key)}
            className={`rounded-[var(--radius)] border p-3 text-left ${
              tool === t.key
                ? "border-[var(--accent)] bg-[var(--surface)]"
                : "border-[var(--border)] bg-[var(--surface2)]"
            }`}
          >
            <span className="font-display block text-base font-bold text-[var(--text)]">{t.name}</span>
            <span className="mt-0.5 block text-sm leading-snug text-[var(--dim)]">{t.blurb}</span>
          </button>
        ))}
      </div>
      {tool === "compass" && <CompassTool />}
      {tool === "redlight" && <RedLensTool />}
      {tool === "pace" && <PaceCounterTool />}
      {tool === "zulu" && <ZuluTool />}
      {tool === "light" && <LightDataTool />}
      {tool === "grid" && <GridRefTool />}
      {tool === "comms" && <CommsCardTool />}
      {tool === "calc" && <CalculatorTool />}
      {tool === "notes" && <FieldNotesTool />}
      {tool === "timer" && <TimerTool />}
      {tool === "march" && <MarchCalcTool />}
      {tool === "milrel" && <MilRelTool />}
      {tool === "load" && <LoadCalcTool />}
      {tool === "watchbill" && <WatchbillTool onPrintWatchbill={onPrintWatchbill} />}
      {tool === "hydration" && <HydrationTool />}
      {tool === "knots" && <KnotsTool focusKnot={knotFocus ?? null} onDrill={onDrillKnots} />}
      {tool === "signals" && <SignalsTool focusSignal={signalFocus ?? null} onDrill={onDrillSignals} />}
      {tool === "landnav" && (
        <FieldRefTool
          title="Land Navigation"
          intro={LANDNAV_INTRO}
          entries={LANDNAV}
          binderSection="landnav"
          focusId={closureFocus?.id ?? null}
        />
      )}
      {tool === "firstaid" && (
        <FieldRefTool
          title="First Aid & Buddy Aid"
          intro={FIRSTAID_INTRO}
          entries={FIRSTAID}
          binderSection="firstaid"
          focusId={closureFocus?.id ?? null}
        />
      )}
      {tool === "drill" && (
        <FieldRefTool
          title="Drill & Ceremonies"
          intro={DRILL_INTRO}
          entries={DRILL}
          binderSection="drill"
          focusId={closureFocus?.id ?? null}
        />
      )}
    </div>
  );
}

/* --------------------------- Shared location --------------------------- */

type PosState =
  | { status: "idle" }
  | { status: "asking" }
  | { status: "ok"; lat: number; lon: number; accuracyM: number | null; altitudeM: number | null }
  | { status: "denied"; message: string };

function useDevicePosition() {
  const [pos, setPos] = useState<PosState>({ status: "idle" });
  const request = () => {
    if (!("geolocation" in navigator)) {
      setPos({ status: "denied", message: "This device does not offer location." });
      return;
    }
    setPos({ status: "asking" });
    navigator.geolocation.getCurrentPosition(
      (p) =>
        setPos({
          status: "ok",
          lat: p.coords.latitude,
          lon: p.coords.longitude,
          accuracyM: p.coords.accuracy ?? null,
          altitudeM: p.coords.altitude ?? null,
        }),
      (err) =>
        setPos({
          status: "denied",
          message:
            err.code === err.PERMISSION_DENIED
              ? "Location permission was denied."
              : "Location is unavailable right now.",
        }),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 },
    );
  };
  return { pos, request };
}

/* ------------------------------- Compass ------------------------------- */

type CompassState = "idle" | "starting" | "live" | "unavailable" | "denied";

interface OrientationCtor {
  requestPermission?: () => Promise<string>;
}

function CompassTool() {
  const [state, setState] = useState<CompassState>("idle");
  const [heading, setHeading] = useState<number | null>(null);
  const gotReading = useRef(false);
  const timerRef = useRef<number | null>(null);
  const listenerRef = useRef<((e: DeviceOrientationEvent) => void) | null>(null);

  const detach = () => {
    if (listenerRef.current) {
      window.removeEventListener("deviceorientationabsolute", listenerRef.current as EventListener);
      window.removeEventListener("deviceorientation", listenerRef.current as EventListener);
      listenerRef.current = null;
    }
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => detach();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = async () => {
    gotReading.current = false;
    setHeading(null);
    setState("starting");
    const ctor = (window as unknown as { DeviceOrientationEvent?: OrientationCtor }).DeviceOrientationEvent;
    if (ctor && typeof ctor.requestPermission === "function") {
      try {
        const res = await ctor.requestPermission();
        if (res !== "granted") {
          setState("denied");
          return;
        }
      } catch {
        setState("unavailable");
        return;
      }
    }
    const onEvent = (e: DeviceOrientationEvent) => {
      const ev = e as DeviceOrientationEvent & { webkitCompassHeading?: number };
      let h: number | null = null;
      if (typeof ev.webkitCompassHeading === "number" && Number.isFinite(ev.webkitCompassHeading)) {
        h = ev.webkitCompassHeading;
      } else if (typeof e.alpha === "number") {
        h = (360 - e.alpha) % 360;
      }
      if (h !== null && Number.isFinite(h)) {
        gotReading.current = true;
        setHeading(h);
        setState("live");
      }
    };
    listenerRef.current = onEvent;
    window.addEventListener("deviceorientationabsolute", onEvent as EventListener);
    window.addEventListener("deviceorientation", onEvent as EventListener);
    timerRef.current = window.setTimeout(() => {
      if (!gotReading.current) {
        detach();
        setState("unavailable");
      }
    }, 3000);
  };

  const stop = () => {
    detach();
    setState("idle");
    setHeading(null);
  };

  return (
    <section aria-label="Compass" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Compass</h3>
      <p className="mt-1 rounded bg-[var(--amber-bg)] p-3 text-sm font-semibold text-[var(--amber)]">
        A backup aid, not a lensatic compass. Metal, vehicles, and electronics nearby throw a phone compass
        off — check it against terrain before you trust it.
      </p>

      {state === "idle" && (
        <div className="mt-4">
          <p className="text-base text-[var(--text)]">
            The compass uses your phone&apos;s orientation sensor. It starts only when you tap — on some phones
            the system will ask permission first.
          </p>
          <button type="button" aria-label="Start compass" onClick={() => void start()} className={`${btnPrimary} mt-3`}>
            Start compass
          </button>
        </div>
      )}
      {state === "starting" && (
        <p className="mt-4 text-base text-[var(--text)]" role="status">
          Starting the sensor…
        </p>
      )}
      {state === "denied" && (
        <div className="mt-4" role="alert">
          <p className="text-base text-[var(--text)]">
            Motion permission was denied, so the compass can&apos;t run. You can allow it in your browser or
            device settings and try again.
          </p>
          <button type="button" aria-label="Try the compass again" onClick={() => void start()} className={`${btnGhost} mt-3`}>
            Try again
          </button>
        </div>
      )}
      {state === "unavailable" && (
        <div className="mt-4" role="alert">
          <p className="font-display text-lg font-bold text-[var(--text)]">No compass sensor available</p>
          <p className="mt-1 text-base text-[var(--text)]">
            This device or browser isn&apos;t reporting orientation readings, so there is no heading to show —
            the dial is staying off rather than freezing on a made-up bearing. Use a lensatic compass or the
            sun and terrain association.
          </p>
          <button type="button" aria-label="Try the compass again" onClick={() => void start()} className={`${btnGhost} mt-3`}>
            Try again
          </button>
        </div>
      )}
      {state === "live" && heading !== null && (
        <div className="mt-4">
          <div className="flex justify-center">
            <svg viewBox="0 0 200 200" className="h-56 w-56" role="img" aria-label={`Compass dial, heading ${Math.round(heading)} degrees`}>
              <circle cx="100" cy="100" r="96" fill="var(--surface2)" stroke="var(--border)" strokeWidth="2" />
              <g transform={`rotate(${-heading} 100 100)`}>
                {Array.from({ length: 72 }, (_, i) => i * 5).map((deg) => {
                  const major = deg % 30 === 0;
                  const rad = (deg * Math.PI) / 180;
                  const r1 = major ? 78 : 86;
                  const x1 = 100 + Math.sin(rad) * r1;
                  const y1 = 100 - Math.cos(rad) * r1;
                  const x2 = 100 + Math.sin(rad) * 92;
                  const y2 = 100 - Math.cos(rad) * 92;
                  return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--dim)" strokeWidth={major ? 2.5 : 1} />;
                })}
                {[
                  { t: "N", deg: 0, color: "var(--red)" },
                  { t: "E", deg: 90, color: "var(--text)" },
                  { t: "S", deg: 180, color: "var(--text)" },
                  { t: "W", deg: 270, color: "var(--text)" },
                ].map((c) => {
                  const rad = (c.deg * Math.PI) / 180;
                  const x = 100 + Math.sin(rad) * 64;
                  const y = 100 - Math.cos(rad) * 64;
                  return (
                    <text key={c.t} x={x} y={y + 7} textAnchor="middle" fontSize="20" fontWeight="800" fill={c.color}>
                      {c.t}
                    </text>
                  );
                })}
              </g>
              <polygon points="100,18 106,34 94,34" fill="var(--red)" />
              <circle cx="100" cy="100" r="5" fill="var(--text)" />
            </svg>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center" role="status" aria-label="Current heading">
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
              <p className="text-sm font-bold text-[var(--dim)]">HEADING</p>
              <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{Math.round(heading)}°</p>
              <p className="text-sm font-semibold text-[var(--dim)]">{cardinal16(heading)}</p>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
              <p className="text-sm font-bold text-[var(--dim)]">MILS</p>
              <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{degToMils(heading)}</p>
              <p className="text-sm font-semibold text-[var(--dim)]">of 6400</p>
            </div>
            <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
              <p className="text-sm font-bold text-[var(--dim)]">BACK AZIMUTH</p>
              <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{Math.round(backAzimuthDeg(heading))}°</p>
              <p className="text-sm font-semibold text-[var(--dim)]">{degToMils(backAzimuthDeg(heading))} mils</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[var(--dim)]">
            Calibrate: hold the phone flat and move it in a slow figure-8 a few times. Keep it away from
            rifles, vehicles, and power lines while you read it.
          </p>
          <button type="button" aria-label="Stop compass" onClick={stop} className={`${btnGhost} mt-3`}>
            Stop compass
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------------------------- Red lens light ---------------------------- */

type LightMode = "steady" | "slow" | "sos";

interface WakeLockSentinelLike {
  release: () => Promise<void>;
}
interface NavigatorWithWakeLock {
  wakeLock?: { request: (type: "screen") => Promise<WakeLockSentinelLike> };
}

// SOS timing in ms: dot 200, dash 600, gap 200 between symbols,
// 600 between letters, 1400 before the pattern repeats.
const SOS_SEQUENCE: { on: boolean; ms: number }[] = [
  { on: true, ms: 200 }, { on: false, ms: 200 }, { on: true, ms: 200 }, { on: false, ms: 200 }, { on: true, ms: 200 }, { on: false, ms: 600 },
  { on: true, ms: 600 }, { on: false, ms: 200 }, { on: true, ms: 600 }, { on: false, ms: 200 }, { on: true, ms: 600 }, { on: false, ms: 600 },
  { on: true, ms: 200 }, { on: false, ms: 200 }, { on: true, ms: 200 }, { on: false, ms: 200 }, { on: true, ms: 200 }, { on: false, ms: 1400 },
];
const SOS_CYCLE_MS = SOS_SEQUENCE.reduce((s, x) => s + x.ms, 0);

function sosIsOn(elapsedMs: number): boolean {
  let t = elapsedMs % SOS_CYCLE_MS;
  for (const seg of SOS_SEQUENCE) {
    if (t < seg.ms) return seg.on;
    t -= seg.ms;
  }
  return false;
}

function RedLensTool() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<LightMode>("steady");
  const [brightness, setBrightness] = useState(70); // percent
  const [lit, setLit] = useState(true);
  const lockRef = useRef<WakeLockSentinelLike | null>(null);

  useEffect(() => {
    if (!open) return;
    const nav = navigator as Navigator & NavigatorWithWakeLock;
    if (nav.wakeLock) {
      nav.wakeLock
        .request("screen")
        .then((s) => {
          lockRef.current = s;
        })
        .catch(() => {
          /* screen wake lock is best-effort */
        });
    }
    return () => {
      if (lockRef.current) {
        void lockRef.current.release().catch(() => undefined);
        lockRef.current = null;
      }
    };
  }, [open ]);

  useEffect(() => {
    if (!open || mode === "steady") {
      setLit(true);
      return;
    }
    const started = Date.now();
    const id = window.setInterval(() => {
      const el = Date.now() - started;
      setLit(mode === "sos" ? sosIsOn(el) : Math.floor(el / 1000) % 2 === 0);
    }, 100);
    return () => window.clearInterval(id);
  }, [open, mode]);

  if (open) {
    const level = brightness / 100;
    const bg = lit ? `rgb(${Math.round(255 * level)}, 0, 0)` : "#0a0000";
    return (
      <div className="fixed inset-0 z-50" style={{ backgroundColor: bg }} role="region" aria-label="Red lens light is on">
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6 pb-safe">
          <p className="rounded bg-black/60 px-3 py-1 text-sm font-bold text-white">
            {mode === "steady" ? "STEADY" : mode === "slow" ? "SLOW FLASH" : "SOS — ··· −−− ···"}
          </p>
          <button
            type="button"
            aria-label="Turn off red lens light"
            onClick={() => setOpen(false)}
            className="min-h-16 w-full max-w-sm rounded-[var(--radius)] bg-black/70 px-6 py-4 text-lg font-bold text-white"
          >
            Tap to turn off
          </button>
        </div>
      </div>
    );
  }

  return (
    <section aria-label="Red lens light" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Red Lens Light</h3>
      <p className="mt-1 text-base text-[var(--text)]">
        A full-screen red light for map checks and moving at night without washing out your night vision.
        While it&apos;s open the app tries to keep your screen awake.
      </p>
      <div className="mt-4">
        <label htmlFor="red-brightness" className={labelCls}>
          Brightness — {brightness}%
        </label>
        <input
          id="red-brightness"
          aria-label="Red light brightness"
          type="range"
          min={15}
          max={100}
          step={5}
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full accent-[var(--red)]"
        />
      </div>
      <div className="mt-3">
        <p className={labelCls}>Mode</p>
        <div className="flex flex-wrap gap-2">
          {(
            [
              { key: "steady", label: "Steady" },
              { key: "slow", label: "Slow flash" },
              { key: "sos", label: "SOS flash" },
            ] as { key: LightMode; label: string }[]
          ).map((m) => (
            <button
              key={m.key}
              type="button"
              aria-label={`Red light mode: ${m.label}`}
              aria-pressed={mode === m.key}
              onClick={() => setMode(m.key)}
              className={mode === m.key ? btnPrimary : btnGhost}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
      <button type="button" aria-label="Turn on red lens light" onClick={() => setOpen(true)} className={`${btnPrimary} mt-4 w-full`}>
        Turn on the light
      </button>
    </section>
  );
}

/* ----------------------------- Pace counter ----------------------------- */

function PaceCounterTool() {
  const queryClient = useQueryClient();
  const kitQ = useQuery({ queryKey: ["fieldKit"], queryFn: () => api.getFieldKit({}) });
  const [paces, setPaces] = useState(0);
  const [settingInput, setSettingInput] = useState("");
  const [settingSaved, setSettingSaved] = useState(false);

  const savedPer100 = kitQ.data?.pacePer100 ?? null;
  useEffect(() => {
    if (savedPer100 !== null && settingInput === "") setSettingInput(String(savedPer100));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedPer100]);

  const saveSetting = useMutation({
    mutationFn: (v: number) => api.saveFieldKit({ pacePer100: v }),
    onSuccess: () => {
      setSettingSaved(true);
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });

  const per100 = savedPer100 ?? (Number(settingInput) > 0 ? Number(settingInput) : null);
  const meters = per100 ? (paces / per100) * 100 : null;
  const hundreds = Math.floor(paces / 100);

  return (
    <section aria-label="Pace counter" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Pace Counter</h3>
      <p className="mt-1 text-base text-[var(--text)]">
        Digital ranger beads: tap once for every pace (count the same foot hitting the ground, the way you
        were taught). Every 100 paces is one bead.
      </p>

      <button
        type="button"
        aria-label={`Count a pace, current count ${paces}`}
        onClick={() => setPaces((p) => p + 1)}
        className="mt-4 flex min-h-44 w-full flex-col items-center justify-center rounded-[var(--radius)] bg-[var(--accent)] px-4 py-6 text-[var(--accent-text)]"
      >
        <span className="font-display text-5xl font-bold">{paces}</span>
        <span className="mt-1 text-base font-bold">TAP — COUNT A PACE</span>
      </button>

      <div className="mt-3 grid grid-cols-3 gap-3 text-center" role="status" aria-label="Pace count totals">
        <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-sm font-bold text-[var(--dim)]">HUNDREDS</p>
          <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{hundreds}</p>
        </div>
        <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-sm font-bold text-[var(--dim)]">DISTANCE</p>
          <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">
            {meters === null ? "—" : meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${Math.round(meters)} m`}
          </p>
        </div>
        <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <p className="text-sm font-bold text-[var(--dim)]">MILES</p>
          <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">
            {meters === null ? "—" : (meters / 1609.344).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label="Undo one pace" onClick={() => setPaces((p) => Math.max(0, p - 1))} className={btnGhost}>
          −1 (miscount)
        </button>
        <button type="button" aria-label="Reset pace count" onClick={() => setPaces(0)} className={btnGhost}>
          Reset count
        </button>
      </div>

      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <label htmlFor="pace-per-100" className={labelCls}>
          Your pace count — paces per 100 meters
        </label>
        <div className="flex gap-2">
          <input
            id="pace-per-100"
            aria-label="Paces per 100 meters"
            type="number"
            min={1}
            max={500}
            inputMode="numeric"
            value={settingInput}
            onChange={(e) => {
              setSettingInput(e.target.value);
              setSettingSaved(false);
            }}
            className={inputCls}
            placeholder="e.g. 64"
          />
          <button
            type="button"
            aria-label="Save pace count setting"
            disabled={!(Number(settingInput) >= 1 && Number(settingInput) <= 500) || saveSetting.isPending}
            onClick={() => saveSetting.mutate(Math.round(Number(settingInput)))}
            className={btnPrimary}
          >
            Save
          </button>
        </div>
        <p className="mt-1 text-sm text-[var(--dim)]">
          {savedPer100 !== null
            ? `Saved on your profile: ${savedPer100} paces per 100 m — it will be here next time. `
            : "Set it once and it saves to your profile. "}
          Measure it on flat ground over a known 100 m; your count changes with terrain, load, and slope.
          {settingSaved ? " Saved." : ""}
        </p>
      </div>
    </section>
  );
}

/* ------------------------- Zulu clock & converters ------------------------- */

function pad2(n: number): string {
  return `${n}`.padStart(2, "0");
}

function hms(d: Date, utc: boolean): string {
  const h = utc ? d.getUTCHours() : d.getHours();
  const m = utc ? d.getUTCMinutes() : d.getMinutes();
  const s = utc ? d.getUTCSeconds() : d.getSeconds();
  return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
}

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function Converter({
  label,
  aLabel,
  bLabel,
  aToB,
  bToA,
  digits,
}: {
  label: string;
  aLabel: string;
  bLabel: string;
  aToB: (n: number) => number;
  bToA: (n: number) => number;
  digits: number;
}) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const fmt = (n: number) => `${Math.round(n * 10 ** digits) / 10 ** digits}`;
  return (
    <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4">
      <p className="font-display text-base font-bold text-[var(--text)]">{label}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div>
          <label className={labelCls} htmlFor={`conv-${label}-a`}>
            {aLabel}
          </label>
          <input
            id={`conv-${label}-a`}
            aria-label={`${label} in ${aLabel}`}
            type="number"
            inputMode="decimal"
            value={a}
            onChange={(e) => {
              setA(e.target.value);
              const n = Number(e.target.value);
              setB(e.target.value === "" || Number.isNaN(n) ? "" : fmt(aToB(n)));
            }}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor={`conv-${label}-b`}>
            {bLabel}
          </label>
          <input
            id={`conv-${label}-b`}
            aria-label={`${label} in ${bLabel}`}
            type="number"
            inputMode="decimal"
            value={b}
            onChange={(e) => {
              setB(e.target.value);
              const n = Number(e.target.value);
              setA(e.target.value === "" || Number.isNaN(n) ? "" : fmt(bToA(n)));
            }}
            className={inputCls}
          />
        </div>
      </div>
    </div>
  );
}

function ZuluTool() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const dtg = `${pad2(now.getUTCDate())}${pad2(now.getUTCHours())}${pad2(now.getUTCMinutes())}Z ${MONTHS[now.getUTCMonth()] ?? ""} ${`${now.getUTCFullYear()}`.slice(2)}`;
  return (
    <section aria-label="Zulu clock and converters" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Zulu Clock &amp; Converters</h3>
      <div className="mt-3 grid grid-cols-2 gap-3" role="status" aria-label="Local and Zulu time">
        <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4 text-center">
          <p className="text-sm font-bold text-[var(--dim)]">LOCAL</p>
          <p className="font-display mt-1 text-3xl font-bold tabular-nums text-[var(--text)]">{hms(now, false)}</p>
          <p className="text-sm text-[var(--dim)]">
            {now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </p>
        </div>
        <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4 text-center">
          <p className="text-sm font-bold text-[var(--dim)]">ZULU (UTC)</p>
          <p className="font-display mt-1 text-3xl font-bold tabular-nums text-[var(--text)]">{hms(now, true)}</p>
          <p className="text-sm text-[var(--dim)]">DTG {dtg}</p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <Converter label="Distance" aLabel="Miles" bLabel="Kilometers" aToB={(n) => n * 1.609344} bToA={(n) => n / 1.609344} digits={2} />
        <Converter label="Weight" aLabel="Pounds (lb)" bLabel="Kilograms (kg)" aToB={(n) => n * 0.45359237} bToA={(n) => n / 0.45359237} digits={1} />
        <Converter label="Temperature" aLabel="Fahrenheit (°F)" bLabel="Celsius (°C)" aToB={(n) => ((n - 32) * 5) / 9} bToA={(n) => (n * 9) / 5 + 32} digits={1} />
      </div>
    </section>
  );
}

/* ------------------------------ Light data ------------------------------ */

function todayInputValue(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function LightDataTool() {
  const { pos, request } = useDevicePosition();
  const [dateStr, setDateStr] = useState(todayInputValue());
  const [manualLat, setManualLat] = useState("");
  const [manualLon, setManualLon] = useState("");
  const [manual, setManual] = useState<{ lat: number; lon: number } | null>(null);
  const [manualError, setManualError] = useState("");

  const deviceCoords = pos.status === "ok" ? { lat: pos.lat, lon: pos.lon } : null;
  const coords = manual ?? deviceCoords;

  const applyManual = () => {
    const lat = Number(manualLat);
    const lon = Number(manualLon);
    if (manualLat.trim() === "" || manualLon.trim() === "" || Number.isNaN(lat) || Number.isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      setManualError("Enter a latitude between −90 and 90 and a longitude between −180 and 180.");
      return;
    }
    setManualError("");
    setManual({ lat, lon });
  };

  const date = (() => {
    const [y = 2026, m = 1, d = 1] = dateStr.split("-").map(Number);
    return new Date(y, (m || 1) - 1, d || 1, 12, 0, 0);
  })();
  const data = coords ? computeLightData(coords.lat, coords.lon, date) : null;

  const rows: { label: string; value: string; hint?: string }[] = data
    ? [
        { label: "BMNT — begin morning nautical twilight", value: formatTimeOfDay(data.bmnt), hint: "First light you can work by" },
        { label: "Civil dawn", value: formatTimeOfDay(data.civilDawn), hint: "Sun 6° below the horizon" },
        { label: "Sunrise", value: formatTimeOfDay(data.sunrise) },
        { label: "Sunset", value: formatTimeOfDay(data.sunset) },
        { label: "Civil dusk", value: formatTimeOfDay(data.civilDusk), hint: "Sun 6° below the horizon" },
        { label: "EENT — end evening nautical twilight", value: formatTimeOfDay(data.eent), hint: "Last usable light" },
        { label: "Moon phase", value: data.moonPhaseName, hint: `${Math.round(data.moonIllumination * 100)}% illuminated · ${data.moonAgeDays.toFixed(1)} days into the cycle` },
      ]
    : [];

  return (
    <section aria-label="Light data" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Light Data</h3>
      <p className="mt-1 text-base text-[var(--text)]">
        Sunrise, sunset, first and last light, and the moon — computed on your phone from the coordinates and
        date, using the published conventions (BMNT/EENT at nautical twilight, sun 12° below the horizon).
      </p>
      <div className="mt-3">
        <label htmlFor="light-date" className={labelCls}>
          Date
        </label>
        <input id="light-date" aria-label="Date for light data" type="date" value={dateStr} onChange={(e) => setDateStr(e.target.value)} className={inputCls} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" aria-label="Use my location for light data" onClick={request} className={btnGhost} disabled={pos.status === "asking"}>
          {pos.status === "asking" ? "Getting location…" : "Use my location"}
        </button>
        {deviceCoords && !manual ? (
          <span className="text-sm font-semibold text-[var(--dim)]">
            Using this device&apos;s location: {formatLatLon(deviceCoords.lat, deviceCoords.lon)}
          </span>
        ) : null}
      </div>
      {pos.status === "denied" && (
        <p className="mt-2 text-sm font-semibold text-[var(--amber)]" role="alert">
          {pos.message} No problem — type a latitude and longitude below and the light data runs from that
          instead.
        </p>
      )}

      <div className="mt-4 border-t border-[var(--border)] pt-4">
        <p className={labelCls}>Or enter coordinates</p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="light-lat" className={labelCls}>Latitude</label>
            <input id="light-lat" aria-label="Latitude for light data" type="number" step="0.0001" inputMode="decimal" value={manualLat} onChange={(e) => setManualLat(e.target.value)} placeholder="39.9612" className={inputCls} />
          </div>
          <div>
            <label htmlFor="light-lon" className={labelCls}>Longitude</label>
            <input id="light-lon" aria-label="Longitude for light data" type="number" step="0.0001" inputMode="decimal" value={manualLon} onChange={(e) => setManualLon(e.target.value)} placeholder="-82.9988" className={inputCls} />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" aria-label="Use entered coordinates for light data" onClick={applyManual} className={btnPrimary}>
            Use these coordinates
          </button>
          {manual ? (
            <button
              type="button"
              aria-label="Clear entered coordinates"
              onClick={() => setManual(null)}
              className={btnGhost}
            >
              Clear
            </button>
          ) : null}
        </div>
        {manualError ? (
          <p className="mt-2 text-sm font-semibold text-[var(--red)]" role="alert">
            {manualError}
          </p>
        ) : null}
        {manual ? (
          <p className="mt-2 text-sm font-semibold text-[var(--dim)]">Showing light data for {formatLatLon(manual.lat, manual.lon)} (times in your phone&apos;s time zone).</p>
        ) : null}
      </div>

      {data && coords ? (
        <div className="mt-4 space-y-2" role="status" aria-label="Light data results">
          {rows.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-3 rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
              <span>
                <span className="block text-base font-semibold text-[var(--text)]">{r.label}</span>
                {r.hint ? <span className="block text-sm text-[var(--dim)]">{r.hint}</span> : null}
              </span>
              <span className="font-display text-xl font-bold tabular-nums text-[var(--text)]">{r.value}</span>
            </div>
          ))}
          <p className="text-sm text-[var(--dim)]">
            Planning figures computed on-device — good to a few minutes. In polar day or night some events
            don&apos;t occur and show a dash.
          </p>
        </div>
      ) : (
        <p className="mt-4 text-base text-[var(--dim)]">
          Pick a location above — your device&apos;s, or typed coordinates — and the light data appears here.
        </p>
      )}
    </section>
  );
}

/* ---------------------------- Grid reference ---------------------------- */

function GridRefTool() {
  const { pos, request } = useDevicePosition();
  const [latIn, setLatIn] = useState("");
  const [lonIn, setLonIn] = useState("");
  const [mgrsIn, setMgrsIn] = useState("");
  const [mgrsError, setMgrsError] = useState("");

  const latN = Number(latIn);
  const lonN = Number(lonIn);
  const converted =
    latIn.trim() !== "" && lonIn.trim() !== "" && !Number.isNaN(latN) && !Number.isNaN(lonN)
      ? latLonToMgrs(latN, lonN)
      : null;
  const reverse = mgrsIn.trim() ? mgrsToLatLon(mgrsIn.trim()) : null;

  const myMgrs = pos.status === "ok" ? latLonToMgrs(pos.lat, pos.lon) : null;

  return (
    <section aria-label="Grid reference" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Grid Reference</h3>
      <p className="mt-2 rounded bg-[var(--accent)] p-3 text-sm font-bold text-[var(--accent-text)]">
        Computed on your phone. Your position and anything you type here are never stored, sent, or shared.
      </p>

      <div className="mt-4">
        <button type="button" aria-label="Show my grid reference" onClick={request} className={btnPrimary} disabled={pos.status === "asking"}>
          {pos.status === "asking" ? "Getting position…" : "Show my position"}
        </button>
        {pos.status === "ok" && (
          <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-4" role="status" aria-label="Your current grid reference">
            <p className="text-sm font-bold text-[var(--dim)]">MGRS</p>
            <p className="font-display mt-1 break-all text-2xl font-bold tracking-wide text-[var(--text)]">{myMgrs ?? "Outside MGRS coverage (polar regions)"}</p>
            <p className="mt-1 text-base text-[var(--text)]">{formatLatLon(pos.lat, pos.lon)}</p>
            <p className="mt-1 text-base text-[var(--text)]">
              Elevation:{" "}
              {pos.altitudeM !== null ? (
                <strong>
                  {Math.round(pos.altitudeM)} m ({Math.round(pos.altitudeM * 3.28084)} ft)
                </strong>
              ) : (
                <span className="text-[var(--dim)]">not reported by this device</span>
              )}
            </p>
            {pos.accuracyM !== null ? <p className="text-sm text-[var(--dim)]">Accuracy about ±{Math.round(pos.accuracyM)} m</p> : null}
          </div>
        )}
        {pos.status === "denied" && (
          <p className="mt-3 text-sm font-semibold text-[var(--amber)]" role="alert">
            {pos.message} The converter below still works from typed values.
          </p>
        )}
      </div>

      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">Lat / long → MGRS</h4>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="grid-lat" className={labelCls}>Latitude</label>
            <input id="grid-lat" aria-label="Latitude to convert" type="number" step="0.00001" inputMode="decimal" value={latIn} onChange={(e) => setLatIn(e.target.value)} placeholder="38.89770" className={inputCls} />
          </div>
          <div>
            <label htmlFor="grid-lon" className={labelCls}>Longitude</label>
            <input id="grid-lon" aria-label="Longitude to convert" type="number" step="0.00001" inputMode="decimal" value={lonIn} onChange={(e) => setLonIn(e.target.value)} placeholder="-77.03650" className={inputCls} />
          </div>
        </div>
        {latIn.trim() !== "" || lonIn.trim() !== "" ? (
          <p className="mt-2 text-base text-[var(--text)]" role="status">
            {converted ? (
              <>
                MGRS: <strong className="font-display tracking-wide">{converted}</strong>
              </>
            ) : (
              <span className="font-semibold text-[var(--amber)]">Enter a valid latitude (−80 to 84) and longitude (−180 to 180).</span>
            )}
          </p>
        ) : null}
      </div>

      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">MGRS → Lat / long</h4>
        <label htmlFor="grid-mgrs" className={labelCls}>
          MGRS grid reference
        </label>
        <input
          id="grid-mgrs"
          aria-label="MGRS grid reference to convert"
          type="text"
          value={mgrsIn}
          onChange={(e) => {
            setMgrsIn(e.target.value);
            setMgrsError("");
          }}
          placeholder="18S UJ 23394 07395"
          className={inputCls}
          autoCapitalize="characters"
        />
        {mgrsIn.trim() !== "" ? (
          reverse ? (
            <p className="mt-2 text-base text-[var(--text)]" role="status">
              Lat / long: <strong>{formatLatLon(reverse.lat, reverse.lon)}</strong>{" "}
              <span className="text-[var(--dim)]">
                ({reverse.lat.toFixed(5)}, {reverse.lon.toFixed(5)})
              </span>
            </p>
          ) : (
            <p className="mt-2 text-sm font-semibold text-[var(--red)]" role="alert">
              {mgrsError || "That doesn't parse as an MGRS reference — check the zone, band, square letters, and an even number of digits."}
            </p>
          )
        ) : null}
      </div>
      <p className="mt-4 text-sm text-[var(--dim)]">
        MGRS covers 80°S to 84°N on the WGS84 datum — the same grid your GPS and modern maps use.
      </p>
    </section>
  );
}

/* ------------------------------ Comms card ------------------------------ */

const CLOCK_ROWS: { h24: string; spoken: string; note?: string }[] = [
  { h24: "0000", spoken: "Zero hundred", note: "Midnight" },
  { h24: "0100", spoken: "Zero one hundred" },
  { h24: "0200", spoken: "Zero two hundred" },
  { h24: "0300", spoken: "Zero three hundred" },
  { h24: "0400", spoken: "Zero four hundred" },
  { h24: "0500", spoken: "Zero five hundred" },
  { h24: "0600", spoken: "Zero six hundred" },
  { h24: "0700", spoken: "Zero seven hundred" },
  { h24: "0800", spoken: "Zero eight hundred" },
  { h24: "0900", spoken: "Zero nine hundred" },
  { h24: "1000", spoken: "Ten hundred" },
  { h24: "1100", spoken: "Eleven hundred" },
  { h24: "1200", spoken: "Twelve hundred", note: "Noon" },
  { h24: "1300", spoken: "Thirteen hundred" },
  { h24: "1400", spoken: "Fourteen hundred" },
  { h24: "1500", spoken: "Fifteen hundred" },
  { h24: "1600", spoken: "Sixteen hundred" },
  { h24: "1700", spoken: "Seventeen hundred" },
  { h24: "1800", spoken: "Eighteen hundred" },
  { h24: "1900", spoken: "Nineteen hundred" },
  { h24: "2000", spoken: "Twenty hundred" },
  { h24: "2100", spoken: "Twenty-one hundred" },
  { h24: "2200", spoken: "Twenty-two hundred" },
  { h24: "2300", spoken: "Twenty-three hundred" },
];

function CommsCardTool() {
  return (
    <section aria-label="Comms card" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Comms Card</h3>

      <h4 className="font-display mt-4 text-lg font-bold text-[var(--text)]">NATO phonetic alphabet</h4>
      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {NATO_ALPHABET.map((n) => (
          <p key={n.letter} className="rounded bg-[var(--surface2)] px-3 py-2 text-base text-[var(--text)]">
            <strong className="font-display">{n.letter}</strong> — {n.word}
          </p>
        ))}
      </div>

      <h4 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Common prowords</h4>
      <ul className="mt-2 space-y-2">
        {PROWORDS.map((p) => (
          <li key={p.word} className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
            <span className="font-display text-base font-bold text-[var(--text)]">{p.word}</span>
            <span className="mt-0.5 block text-sm text-[var(--dim)]">{p.meaning}</span>
          </li>
        ))}
      </ul>

      <h4 className="font-display mt-5 text-lg font-bold text-[var(--text)]">The 24-hour clock</h4>
      <p className="mt-1 text-sm text-[var(--dim)]">
        No AM or PM — the day runs 0000 to 2359, spoken as hundreds. Minutes ride along: 0645 is “zero six
        forty-five.”
      </p>
      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {CLOCK_ROWS.map((r) => (
          <p key={r.h24} className="rounded bg-[var(--surface2)] px-3 py-2 text-sm text-[var(--text)]">
            <strong className="font-display tabular-nums">{r.h24}</strong> — {r.spoken}
            {r.note ? <span className="text-[var(--dim)]"> ({r.note})</span> : null}
          </p>
        ))}
      </div>

      <MorseSection />
    </section>
  );
}

/* ------------------------------ Morse code ------------------------------ */
// The international Morse alphabet exactly as the ITU standard
// (ITU-R M.1677-1) publishes it: letters A–Z, digits 0–9, the standard
// punctuation set, and the common prosigns at published-summary level.
// Codes render as • and − characters (never images). A static reference
// chart plus an on-device text translator — nothing typed into the
// translator is stored or sent anywhere.

const MORSE_LETTERS: { symbol: string; code: string }[] = [
  { symbol: "A", code: "•−" },
  { symbol: "B", code: "−•••" },
  { symbol: "C", code: "−•−•" },
  { symbol: "D", code: "−••" },
  { symbol: "E", code: "•" },
  { symbol: "F", code: "••−•" },
  { symbol: "G", code: "−−•" },
  { symbol: "H", code: "••••" },
  { symbol: "I", code: "••" },
  { symbol: "J", code: "•−−−" },
  { symbol: "K", code: "−•−" },
  { symbol: "L", code: "•−••" },
  { symbol: "M", code: "−−" },
  { symbol: "N", code: "−•" },
  { symbol: "O", code: "−−−" },
  { symbol: "P", code: "•−−•" },
  { symbol: "Q", code: "−−•−" },
  { symbol: "R", code: "•−•" },
  { symbol: "S", code: "•••" },
  { symbol: "T", code: "−" },
  { symbol: "U", code: "••−" },
  { symbol: "V", code: "•••−" },
  { symbol: "W", code: "•−−" },
  { symbol: "X", code: "−••−" },
  { symbol: "Y", code: "−•−−" },
  { symbol: "Z", code: "−−••" },
];

const MORSE_DIGITS: { symbol: string; code: string }[] = [
  { symbol: "0", code: "−−−−−" },
  { symbol: "1", code: "•−−−−" },
  { symbol: "2", code: "••−−−" },
  { symbol: "3", code: "•••−−" },
  { symbol: "4", code: "••••−" },
  { symbol: "5", code: "•••••" },
  { symbol: "6", code: "−••••" },
  { symbol: "7", code: "−−•••" },
  { symbol: "8", code: "−−−••" },
  { symbol: "9", code: "−−−−•" },
];

const MORSE_PUNCTUATION: { symbol: string; name: string; code: string }[] = [
  { symbol: ".", name: "Full stop", code: "•−•−•−" },
  { symbol: ",", name: "Comma", code: "−−••−−" },
  { symbol: "?", name: "Question mark", code: "••−−••" },
  { symbol: "'", name: "Apostrophe", code: "•−−−−•" },
  { symbol: "!", name: "Exclamation mark", code: "−•−•−−" },
  { symbol: "/", name: "Slash", code: "−••−•" },
  { symbol: "(", name: "Open parenthesis", code: "−•−−•" },
  { symbol: ")", name: "Close parenthesis", code: "−•−−•−" },
  { symbol: ":", name: "Colon", code: "−−−•••" },
  { symbol: ";", name: "Semicolon", code: "−•−•−•" },
  { symbol: "=", name: "Equals", code: "−•••−" },
  { symbol: "+", name: "Plus", code: "•−•−•" },
  { symbol: "-", name: "Hyphen / minus", code: "−••••−" },
  { symbol: '"', name: "Quotation marks", code: "•−••−•" },
  { symbol: "_", name: "Underline", code: "••−−•−" },
  { symbol: "$", name: "Dollar sign", code: "•••−••−" },
  { symbol: "@", name: "At sign", code: "•−−•−•" },
  { symbol: "&", name: "Ampersand", code: "•−•••" },
];

const MORSE_PROSIGNS: { sign: string; name: string; code: string }[] = [
  { sign: "SOS", name: "Distress signal — sent as one continuous run, no letter spaces", code: "•••−−−•••" },
  { sign: "AR", name: "End of message", code: "•−•−•" },
  { sign: "SK", name: "End of contact (end of work)", code: "•••−•−" },
  { sign: "BT", name: "Break — separator between message parts (same signal as “=”)", code: "−•••−" },
  { sign: "KN", name: "Go ahead — the named station only", code: "−•−−•" },
];

const MORSE_BY_CHAR: Record<string, string> = Object.fromEntries([
  ...MORSE_LETTERS.map((r) => [r.symbol, r.code] as const),
  ...MORSE_DIGITS.map((r) => [r.symbol, r.code] as const),
  ...MORSE_PUNCTUATION.map((r) => [r.symbol, r.code] as const),
]);

/** Plain text → Morse, on-device. Words split on “/”; any character
 * outside the chart renders as the � placeholder. */
export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split(/\s+/)
    .filter((w) => w.length > 0)
    .map((word) =>
      [...word].map((ch) => MORSE_BY_CHAR[ch] ?? "�").join(" "),
    )
    .join("  /  ");
}

function MorseSection() {
  const [draft, setDraft] = useState("");
  const phoneticByLetter = new Map(NATO_ALPHABET.map((n) => [n.letter, n.word]));
  const codeCls = "font-mono font-bold tracking-widest text-[var(--accent-word)]";
  return (
    <div>
      <h4 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Morse code</h4>
      <p className="mt-1 text-sm text-[var(--dim)]">
        The international Morse alphabet as the ITU standard (ITU-R M.1677-1) publishes it — a dot (•) is one
        unit, a dash (−) is three. Each letter also shows its phonetic word from the alphabet above.
      </p>

      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {MORSE_LETTERS.map((r) => (
          <p key={r.symbol} className="rounded bg-[var(--surface2)] px-3 py-2 text-base text-[var(--text)]">
            <strong className="font-display">{r.symbol}</strong>{" "}
            <span className={codeCls}>{r.code}</span>
            <span className="block text-sm text-[var(--dim)]">{phoneticByLetter.get(r.symbol) ?? ""}</span>
          </p>
        ))}
      </div>

      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Digits</h5>
      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {MORSE_DIGITS.map((r) => (
          <p key={r.symbol} className="rounded bg-[var(--surface2)] px-3 py-2 text-base text-[var(--text)]">
            <strong className="font-display">{r.symbol}</strong> <span className={codeCls}>{r.code}</span>
          </p>
        ))}
      </div>

      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Punctuation</h5>
      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {MORSE_PUNCTUATION.map((r) => (
          <p key={r.symbol} className="rounded bg-[var(--surface2)] px-3 py-2 text-base text-[var(--text)]">
            <strong className="font-display">{r.symbol}</strong> <span className={codeCls}>{r.code}</span>
            <span className="block text-sm text-[var(--dim)]">{r.name}</span>
          </p>
        ))}
      </div>

      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Prosigns</h5>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Procedure signals sent as one run of letters, with no space between them.
      </p>
      <ul className="mt-2 space-y-2">
        {MORSE_PROSIGNS.map((p) => (
          <li key={p.sign} className="rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
            <span className="font-display text-base font-bold text-[var(--text)]">{p.sign}</span>{" "}
            <span className={codeCls}>{p.code}</span>
            <span className="mt-0.5 block text-sm text-[var(--dim)]">{p.name}</span>
          </li>
        ))}
      </ul>

      <h5 className="font-display mt-4 text-base font-bold text-[var(--text)]">Text to Morse</h5>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Type plain text and see it in Morse. It converts on your phone — nothing is stored or sent. Letters
        and digits space out; words are split with / ; anything outside the chart shows as �.
      </p>
      <label className={`${labelCls} mt-3`} htmlFor="morse-translator-input">
        Your text
      </label>
      <input
        id="morse-translator-input"
        aria-label="Text to translate into Morse code"
        className={inputCls}
        type="text"
        value={draft}
        maxLength={200}
        placeholder="Try SOS, or your call sign"
        onChange={(e) => setDraft(e.target.value)}
      />
      <div aria-label="Morse code translation" className="mt-2 min-h-14 rounded-[var(--radius)] bg-[var(--surface2)] px-4 py-3">
        {draft.trim() ? (
          <p className="font-mono text-lg font-bold leading-relaxed tracking-widest text-[var(--text)]">
            {textToMorse(draft)}
          </p>
        ) : (
          <p className="text-sm text-[var(--dim)]">Your Morse appears here as you type.</p>
        )}
      </div>
    </div>
  );
}

/* ------------------------- Scientific calculator ------------------------ */

function CalculatorTool() {
  const [tokens, setTokens] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [memory, setMemory] = useState(0);
  const [angle, setAngle] = useState<AngleMode>("deg");
  const [fresh, setFresh] = useState(false);

  const expr = tokens.join("");

  const currentValue = (): number | null => {
    if (result !== null && result !== "Error") {
      const n = Number(result);
      return Number.isNaN(n) ? null : n;
    }
    if (!expr) return null;
    try {
      return evaluateExpression(expr, angle);
    } catch {
      return null;
    }
  };

  const press = (token: string, opts?: { startsFresh?: boolean }) => {
    if (fresh && opts?.startsFresh) {
      setTokens([token]);
    } else if (fresh && result !== null && result !== "Error" && ["+", "−", "×", "÷", "^"].includes(token)) {
      setTokens([result, token]);
    } else {
      setTokens((t) => [...t, token]);
    }
    setFresh(false);
    setResult(null);
  };

  const equals = () => {
    if (!expr) return;
    try {
      setResult(formatCalcResult(evaluateExpression(expr, angle)));
    } catch {
      setResult("Error");
    }
    setFresh(true);
  };

  const clearAll = () => {
    setTokens([]);
    setResult(null);
    setFresh(false);
  };

  const backspace = () => {
    setTokens((t) => t.slice(0, -1));
    setResult(null);
    setFresh(false);
  };

  const btn =
    "min-h-12 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-2 py-2 text-lg font-bold text-[var(--text)]";
  const btnOp =
    "min-h-12 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-base font-bold text-[var(--accent-word)]";
  const btnFn =
    "min-h-12 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-base font-semibold text-[var(--text)]";

  return (
    <section aria-label="Scientific calculator" className={cardCls}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Scientific Calculator</h3>
        <button
          type="button"
          aria-label={`Angle mode: ${angle === "deg" ? "degrees" : "radians"} — tap to switch`}
          onClick={() => setAngle(angle === "deg" ? "rad" : "deg")}
          className={btnGhost}
        >
          {angle === "deg" ? "DEG" : "RAD"}
        </button>
      </div>

      <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-4" role="status" aria-label="Calculator display">
        <p className="min-h-6 break-all text-right text-base text-[var(--dim)]">{expr || "0"}</p>
        <p className="font-display mt-1 break-all text-right text-4xl font-bold tabular-nums text-[var(--text)]">
          {result ?? "—"}
        </p>
        <p className="mt-1 text-right text-xs font-semibold text-[var(--dim)]">
          {angle === "deg" ? "Degrees" : "Radians"}
          {memory !== 0 ? ` · M = ${formatCalcResult(memory)}` : ""}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1.5">
        <button type="button" aria-label="Memory clear" onClick={() => setMemory(0)} className={btnFn}>MC</button>
        <button
          type="button"
          aria-label="Memory recall"
          onClick={() => press(formatCalcResult(memory), { startsFresh: true })}
          className={btnFn}
        >
          MR
        </button>
        <button
          type="button"
          aria-label="Memory add"
          onClick={() => {
            const v = currentValue();
            if (v !== null) setMemory((m) => m + v);
          }}
          className={btnFn}
        >
          M+
        </button>
        <button
          type="button"
          aria-label="Memory subtract"
          onClick={() => {
            const v = currentValue();
            if (v !== null) setMemory((m) => m - v);
          }}
          className={btnFn}
        >
          M−
        </button>
        <button type="button" aria-label="Clear calculator" onClick={clearAll} className={btnFn}>C</button>

        <button type="button" aria-label="sin" onClick={() => press("sin(")} className={btnFn}>sin</button>
        <button type="button" aria-label="cos" onClick={() => press("cos(")} className={btnFn}>cos</button>
        <button type="button" aria-label="tan" onClick={() => press("tan(")} className={btnFn}>tan</button>
        <button type="button" aria-label="Left parenthesis" onClick={() => press("(")} className={btnFn}>(</button>
        <button type="button" aria-label="Right parenthesis" onClick={() => press(")")} className={btnFn}>)</button>

        <button type="button" aria-label="Natural log" onClick={() => press("ln(")} className={btnFn}>ln</button>
        <button type="button" aria-label="Log base 10" onClick={() => press("log(")} className={btnFn}>log</button>
        <button type="button" aria-label="Square root" onClick={() => press("sqrt(")} className={btnFn}>√</button>
        <button type="button" aria-label="Power" onClick={() => press("^")} className={btnFn}>x^y</button>
        <button type="button" aria-label="Pi" onClick={() => press("pi", { startsFresh: true })} className={btnFn}>π</button>

        {["7", "8", "9"].map((d) => (
          <button key={d} type="button" aria-label={`Digit ${d}`} onClick={() => press(d, { startsFresh: true })} className={btn}>
            {d}
          </button>
        ))}
        <button type="button" aria-label="Divide" onClick={() => press("÷")} className={btnOp}>÷</button>
        <button type="button" aria-label="Backspace" onClick={backspace} className={btnFn}>⌫</button>

        {["4", "5", "6"].map((d) => (
          <button key={d} type="button" aria-label={`Digit ${d}`} onClick={() => press(d, { startsFresh: true })} className={btn}>
            {d}
          </button>
        ))}
        <button type="button" aria-label="Multiply" onClick={() => press("×")} className={btnOp}>×</button>
        <button type="button" aria-label="Euler's number" onClick={() => press("e", { startsFresh: true })} className={btnFn}>e</button>

        {["1", "2", "3"].map((d) => (
          <button key={d} type="button" aria-label={`Digit ${d}`} onClick={() => press(d, { startsFresh: true })} className={btn}>
            {d}
          </button>
        ))}
        <button type="button" aria-label="Minus" onClick={() => press("−")} className={btnOp}>−</button>
        <button type="button" aria-label="Square" onClick={() => press("^2")} className={btnFn}>x²</button>

        <button type="button" aria-label="Digit 0" onClick={() => press("0", { startsFresh: true })} className={btn}>0</button>
        <button type="button" aria-label="Decimal point" onClick={() => press(".", { startsFresh: true })} className={btn}>.</button>
        <button type="button" aria-label="Equals" onClick={equals} className="min-h-12 rounded-[var(--radius)] bg-[var(--accent)] px-2 py-2 text-lg font-bold text-[var(--accent-text)]">=</button>
        <button type="button" aria-label="Plus" onClick={() => press("+")} className={btnOp}>+</button>
        <button type="button" aria-label="Reciprocal" onClick={() => press("^(-1)")} className={btnFn}>1/x</button>
      </div>
      <p className="mt-3 text-sm text-[var(--dim)]">
        Runs entirely on your phone. Trig follows the DEG / RAD toggle in the corner.
      </p>
    </section>
  );
}

/* --------------------------------- Timer -------------------------------- */

function fmtClock(ms: number): string {
  const totalSec = Math.max(0, ms) / 1000;
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = Math.floor(totalSec % 60);
  const tenths = Math.floor((ms % 1000) / 100);
  const mm = `${m}`.padStart(2, "0");
  const ss = `${s}`.padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}.${tenths}` : `${mm}:${ss}.${tenths}`;
}

/** Short beeps through the Web Audio API — created lazily on a tap, so the platform's gesture rule is honored. */
function useBeeper() {
  const ctxRef = useRef<AudioContext | null>(null);
  return (times: number) => {
    try {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      if (!ctxRef.current) ctxRef.current = new AC();
      const ctx = ctxRef.current;
      void ctx.resume().catch(() => undefined);
      for (let i = 0; i < times; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = 880;
        gain.gain.value = 0.15;
        osc.connect(gain);
        gain.connect(ctx.destination);
        const t0 = ctx.currentTime + i * 0.25;
        osc.start(t0);
        osc.stop(t0 + 0.15);
      }
    } catch {
      /* audio is best-effort; the visual end state still fires */
    }
  };
}

type TimerMode = "stopwatch" | "countdown" | "interval";

function TimerTool() {
  const [mode, setMode] = useState<TimerMode>("stopwatch");
  return (
    <section aria-label="Timer" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Timer</h3>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Timer mode">
        {(
          [
            { key: "stopwatch", label: "Stopwatch" },
            { key: "countdown", label: "Countdown" },
            { key: "interval", label: "Intervals" },
          ] as { key: TimerMode; label: string }[]
        ).map((m) => (
          <button
            key={m.key}
            type="button"
            aria-label={`Timer mode: ${m.label}`}
            aria-pressed={mode === m.key}
            onClick={() => setMode(m.key)}
            className={mode === m.key ? btnPrimary : btnGhost}
          >
            {m.label}
          </button>
        ))}
      </div>
      {mode === "stopwatch" && <Stopwatch />}
      {mode === "countdown" && <Countdown />}
      {mode === "interval" && <IntervalTimer />}
    </section>
  );
}

function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<{ n: number; lapMs: number; totalMs: number }[]>([]);
  const startRef = useRef(0);
  const accumRef = useRef(0);
  const lastLapRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed(accumRef.current + (Date.now() - startRef.current));
    }, 47);
    return () => window.clearInterval(id);
  }, [running]);

  const toggle = () => {
    if (running) {
      accumRef.current += Date.now() - startRef.current;
      setElapsed(accumRef.current);
      setRunning(false);
    } else {
      startRef.current = Date.now();
      setRunning(true);
    }
  };
  const reset = () => {
    setRunning(false);
    accumRef.current = 0;
    lastLapRef.current = 0;
    setElapsed(0);
    setLaps([]);
  };
  const lap = () => {
    const total = running ? accumRef.current + (Date.now() - startRef.current) : elapsed;
    setLaps((ls) => [...ls, { n: ls.length + 1, lapMs: total - lastLapRef.current, totalMs: total }]);
    lastLapRef.current = total;
  };

  return (
    <div className="mt-4">
      <p className="font-display text-center text-5xl font-bold tabular-nums text-[var(--text)]" role="timer" aria-label="Stopwatch time">
        {fmtClock(elapsed)}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button type="button" aria-label={running ? "Pause stopwatch" : "Start stopwatch"} onClick={toggle} className={btnPrimary}>
          {running ? "Pause" : "Start"}
        </button>
        <button type="button" aria-label="Record a lap" onClick={lap} disabled={elapsed === 0} className={btnGhost}>
          Lap
        </button>
        <button type="button" aria-label="Reset stopwatch" onClick={reset} className={btnGhost}>
          Reset
        </button>
      </div>
      {laps.length > 0 ? (
        <ol className="mt-3 space-y-1" aria-label="Lap times">
          {[...laps].reverse().map((l) => (
            <li key={l.n} className="flex justify-between rounded bg-[var(--surface2)] px-3 py-2 text-base text-[var(--text)]">
              <span className="font-semibold">Lap {l.n}</span>
              <span className="tabular-nums">{fmtClock(l.lapMs)}</span>
              <span className="tabular-nums text-[var(--dim)]">{fmtClock(l.totalMs)}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}

function Countdown() {
  const beep = useBeeper();
  const [minIn, setMinIn] = useState("10");
  const [secIn, setSecIn] = useState("0");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const endRef = useRef(0);
  const remainRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const left = endRef.current - Date.now();
      if (left <= 0) {
        setRemaining(0);
        setRunning(false);
        setFinished(true);
        beep(3);
        window.clearInterval(id);
      } else {
        setRemaining(left);
      }
    }, 100);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const totalMs = () => Math.max(0, (Number(minIn) || 0) * 60000 + (Number(secIn) || 0) * 1000);
  const start = () => {
    const from = remaining !== null && remaining > 0 && !finished ? remaining : totalMs();
    if (from <= 0) return;
    remainRef.current = from;
    endRef.current = Date.now() + from;
    setRemaining(from);
    setFinished(false);
    setRunning(true);
  };
  const pause = () => {
    remainRef.current = Math.max(0, endRef.current - Date.now());
    setRemaining(remainRef.current);
    setRunning(false);
  };
  const reset = () => {
    setRunning(false);
    setRemaining(null);
    setFinished(false);
  };

  return (
    <div className="mt-4">
      {finished ? (
        <p className="animate-pulse rounded-[var(--radius)] bg-[var(--red)] p-4 text-center font-display text-3xl font-bold text-white" role="alert">
          TIME
        </p>
      ) : (
        <p className="font-display text-center text-5xl font-bold tabular-nums text-[var(--text)]" role="timer" aria-label="Countdown remaining">
          {fmtClock(remaining ?? totalMs())}
        </p>
      )}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="cd-min" className={labelCls}>Minutes</label>
          <input id="cd-min" aria-label="Countdown minutes" type="number" min={0} max={999} value={minIn} onChange={(e) => { setMinIn(e.target.value); setRemaining(null); setFinished(false); }} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cd-sec" className={labelCls}>Seconds</label>
          <input id="cd-sec" aria-label="Countdown seconds" type="number" min={0} max={59} value={secIn} onChange={(e) => { setSecIn(e.target.value); setRemaining(null); setFinished(false); }} className={inputCls} />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {running ? (
          <button type="button" aria-label="Pause countdown" onClick={pause} className={btnPrimary}>Pause</button>
        ) : (
          <button type="button" aria-label="Start countdown" onClick={start} className={btnPrimary}>Start</button>
        )}
        <button type="button" aria-label="Reset countdown" onClick={reset} className={btnGhost}>Reset</button>
      </div>
      <p className="mt-2 text-center text-sm text-[var(--dim)]">
        At zero the timer beeps (where the device allows sound) and flashes TIME.
      </p>
    </div>
  );
}

function IntervalTimer() {
  const beep = useBeeper();
  const [workIn, setWorkIn] = useState("40");
  const [restIn, setRestIn] = useState("20");
  const [roundsIn, setRoundsIn] = useState("8");
  const [phase, setPhase] = useState<"work" | "rest" | "done">("work");
  const [round, setRound] = useState(1);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const stateRef = useRef({ phase: "work" as "work" | "rest", round: 1, endAt: 0 });

  const totalRounds = Math.max(1, Number(roundsIn) || 1);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const left = stateRef.current.endAt - Date.now();
      if (left > 0) {
        setRemaining(left);
        return;
      }
      const st = stateRef.current;
      if (st.phase === "work") {
        if (st.round >= totalRounds) {
          setPhase("done");
          setRunning(false);
          setRemaining(0);
          beep(3);
          window.clearInterval(id);
          return;
        }
        st.phase = "rest";
        st.endAt = Date.now() + Math.max(1, Number(restIn) || 0) * 1000;
        setPhase("rest");
        beep(1);
      } else {
        st.phase = "work";
        st.round += 1;
        st.endAt = Date.now() + Math.max(1, Number(workIn) || 0) * 1000;
        setPhase("work");
        setRound(st.round);
        beep(2);
      }
      setRemaining(Math.max(0, st.endAt - Date.now()));
    }, 100);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const start = () => {
    stateRef.current = { phase: "work", round: 1, endAt: Date.now() + Math.max(1, Number(workIn) || 0) * 1000 };
    setPhase("work");
    setRound(1);
    setRemaining(Math.max(1, Number(workIn) || 0) * 1000);
    setRunning(true);
  };
  const reset = () => {
    setRunning(false);
    setPhase("work");
    setRound(1);
    setRemaining(null);
  };

  return (
    <div className="mt-4">
      {phase === "done" ? (
        <p className="animate-pulse rounded-[var(--radius)] bg-[var(--accent)] p-4 text-center font-display text-3xl font-bold text-[var(--accent-text)]" role="alert">
          DONE — {totalRounds} ROUNDS
        </p>
      ) : (
        <div className={`rounded-[var(--radius)] p-4 text-center ${phase === "work" ? "bg-[var(--amber-bg)]" : "bg-[var(--surface2)]"}`}>
          <p className="font-display text-2xl font-bold tracking-wide text-[var(--text)]">
            {phase === "work" ? "WORK" : "REST"} — ROUND {round} OF {totalRounds}
          </p>
          <p className="font-display mt-1 text-5xl font-bold tabular-nums text-[var(--text)]" role="timer" aria-label="Interval time remaining">
            {fmtClock(remaining ?? (Number(workIn) || 0) * 1000)}
          </p>
        </div>
      )}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div>
          <label htmlFor="int-work" className={labelCls}>Work (sec)</label>
          <input id="int-work" aria-label="Interval work seconds" type="number" min={1} value={workIn} onChange={(e) => setWorkIn(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="int-rest" className={labelCls}>Rest (sec)</label>
          <input id="int-rest" aria-label="Interval rest seconds" type="number" min={0} value={restIn} onChange={(e) => setRestIn(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="int-rounds" className={labelCls}>Rounds</label>
          <input id="int-rounds" aria-label="Interval rounds" type="number" min={1} max={99} value={roundsIn} onChange={(e) => setRoundsIn(e.target.value)} className={inputCls} />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {running ? (
          <button type="button" aria-label="Stop intervals" onClick={() => setRunning(false)} className={btnPrimary}>Stop</button>
        ) : (
          <button type="button" aria-label="Start intervals" onClick={start} className={btnPrimary}>Start</button>
        )}
        <button type="button" aria-label="Reset intervals" onClick={reset} className={btnGhost}>Reset</button>
      </div>
      <p className="mt-2 text-center text-sm text-[var(--dim)]">
        For PT circuits and ruck / rest cycles — a beep marks each change where the device allows sound.
      </p>
    </div>
  );
}

/* ----------------------------- March calculator -------------------------- */

/** Shared pattern for the two "enter any two, compute the third" tools: the two most recently edited fields are the sources; the third is filled in by the effect (unless it's the field being typed in). */
function useTrioOrder() {
  const [order, setOrder] = useState<string[]>([]);
  const [focused, setFocused] = useState<string | null>(null);
  const touch = (key: string) => setOrder((o) => [...o.filter((k) => k !== key), key]);
  const targetOf = (keys: string[], valid: Record<string, boolean>): string | null => {
    const sources = [...order].reverse().filter((k) => valid[k]).slice(0, 2);
    if (sources.length < 2) return null;
    return keys.find((k) => !sources.includes(k)) ?? null;
  };
  return { order, focused, setFocused, touch, targetOf };
}

function trimNum(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return "";
  const s = n.toFixed(digits);
  return s.includes(".") ? s.replace(/\.?0+$/, "") : s;
}

function MarchCalcTool() {
  const [unit, setUnit] = useState<"km" | "mi">("km");
  const [vals, setVals] = useState({ dist: "", speed: "", time: "" });
  const [start, setStart] = useState("");
  const trio = useTrioOrder();

  const conv = unit === "mi" ? 1.609344 : 1;
  const num = (s: string) => {
    const n = Number(s);
    return s.trim() !== "" && Number.isFinite(n) && n > 0 ? n : null;
  };
  const parsed = {
    distKm: num(vals.dist) !== null ? (num(vals.dist) as number) * conv : null,
    speedKmh: num(vals.speed) !== null ? (num(vals.speed) as number) * conv : null,
    timeMin: num(vals.time),
  };
  const valid = {
    dist: parsed.distKm !== null,
    speed: parsed.speedKmh !== null,
    time: parsed.timeMin !== null,
  };
  const target = trio.targetOf(["dist", "speed", "time"], valid);
  const solved =
    target !== null
      ? marchThird(
          target === "dist" ? null : parsed.distKm,
          target === "speed" ? null : parsed.speedKmh,
          target === "time" ? null : parsed.timeMin,
        )
      : null;

  useEffect(() => {
    if (!target || !solved || trio.focused === target) return;
    const formatted =
      target === "dist" && solved.distKm !== null
        ? trimNum(solved.distKm / conv)
        : target === "speed" && solved.speedKmh !== null
          ? trimNum(solved.speedKmh / conv)
          : target === "time" && solved.timeMin !== null
            ? trimNum(solved.timeMin)
            : null;
    if (formatted === null) return;
    setVals((v) => (v[target as keyof typeof v] === formatted ? v : { ...v, [target]: formatted }));
  }, [target, solved, conv, trio.focused]);

  const finalTimeMin = solved?.timeMin ?? parsed.timeMin;
  const arrival = start && finalTimeMin !== null ? arrivalTime(start, finalTimeMin) : null;

  const set = (key: "dist" | "speed" | "time") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setVals((v) => ({ ...v, [key]: e.target.value }));
    trio.touch(key);
  };

  return (
    <section aria-label="March calculator" className={cardCls}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">March Calculator</h3>
        <div className="flex gap-1" role="group" aria-label="March units">
          {(["km", "mi"] as const).map((u) => (
            <button
              key={u}
              type="button"
              aria-label={`March units: ${u === "km" ? "kilometers" : "miles"}`}
              aria-pressed={unit === u}
              onClick={() => setUnit(u)}
              className={unit === u ? btnPrimary : btnGhost}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">Enter any two — the third is worked out for you.</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div>
          <label htmlFor="march-dist" className={labelCls}>Distance ({unit})</label>
          <input id="march-dist" aria-label="March distance" type="number" min={0} step="any" value={vals.dist} onChange={set("dist")} onFocus={() => trio.setFocused("dist")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="march-speed" className={labelCls}>Speed ({unit === "km" ? "km/h" : "mph"})</label>
          <input id="march-speed" aria-label="March speed" type="number" min={0} step="any" value={vals.speed} onChange={set("speed")} onFocus={() => trio.setFocused("speed")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="march-time" className={labelCls}>Time (minutes)</label>
          <input id="march-time" aria-label="March time in minutes" type="number" min={0} step="any" value={vals.time} onChange={set("time")} onFocus={() => trio.setFocused("time")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
      </div>
      {finalTimeMin !== null ? (
        <p className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-base text-[var(--text)]" role="status">
          March time: <strong>{formatDuration(finalTimeMin)}</strong> ({trimNum(finalTimeMin)} minutes)
        </p>
      ) : null}
      <div className="mt-3">
        <label htmlFor="march-start" className={labelCls}>Start time (optional — shows your arrival)</label>
        <input id="march-start" aria-label="March start time" type="time" value={start} onChange={(e) => setStart(e.target.value)} className={inputCls} />
      </div>
      {arrival ? (
        <p className="mt-2 text-base text-[var(--text)]" role="status">
          Leaving at {start} → <strong>arrive {arrival.time}</strong>
          {arrival.nextDay ? " (next day)" : ""}
        </p>
      ) : null}
    </section>
  );
}

/* --------------------------- Mil-relation estimator --------------------------- */

function MilRelTool() {
  const [sizeUnit, setSizeUnit] = useState<"m" | "ft">("m");
  const [vals, setVals] = useState({ range: "", size: "", mils: "" });
  const trio = useTrioOrder();

  const num = (s: string) => {
    const n = Number(s);
    return s.trim() !== "" && Number.isFinite(n) && n > 0 ? n : null;
  };
  const sizeDisplay = num(vals.size);
  const parsed = {
    rangeM: num(vals.range),
    sizeM: sizeDisplay !== null ? (sizeUnit === "ft" ? sizeDisplay * 0.3048 : sizeDisplay) : null,
    mils: num(vals.mils),
  };
  const valid = { range: parsed.rangeM !== null, size: parsed.sizeM !== null, mils: parsed.mils !== null };
  const target = trio.targetOf(["range", "size", "mils"], valid);
  const solved =
    target !== null
      ? milRelation(
          target === "range" ? null : parsed.rangeM,
          target === "size" ? null : parsed.sizeM,
          target === "mils" ? null : parsed.mils,
        )
      : null;

  useEffect(() => {
    if (!target || !solved || trio.focused === target) return;
    const formatted =
      target === "range" && solved.rangeM !== null
        ? trimNum(solved.rangeM, 1)
        : target === "size" && solved.sizeM !== null
          ? trimNum(sizeUnit === "ft" ? solved.sizeM / 0.3048 : solved.sizeM, 2)
          : target === "mils" && solved.mils !== null
            ? trimNum(solved.mils, 1)
            : null;
    if (formatted === null) return;
    setVals((v) => (v[target as keyof typeof v] === formatted ? v : { ...v, [target]: formatted }));
  }, [target, solved, sizeUnit, trio.focused]);

  const set = (key: "range" | "size" | "mils") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setVals((v) => ({ ...v, [key]: e.target.value }));
    trio.touch(key);
  };
  const pickReference = (meters: number) => {
    setVals((v) => ({ ...v, size: sizeUnit === "ft" ? trimNum(meters / 0.3048, 1) : trimNum(meters, 2) }));
    trio.touch("size");
  };

  return (
    <section aria-label="Mil-relation estimator" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Mil-Relation Estimator</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        The mil relation: <strong>Range = Size × 1000 ÷ Mils</strong>. Enter any two values and the third is worked out.
        It is an estimation aid — the answer is only as good as the size and mil reading behind it.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div>
          <label htmlFor="milrel-range" className={labelCls}>Range (m)</label>
          <input id="milrel-range" aria-label="Mil-relation range in meters" type="number" min={0} step="any" value={vals.range} onChange={set("range")} onFocus={() => trio.setFocused("range")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="milrel-size" className={labelCls}>Size ({sizeUnit})</label>
          <input id="milrel-size" aria-label="Mil-relation object size" type="number" min={0} step="any" value={vals.size} onChange={set("size")} onFocus={() => trio.setFocused("size")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="milrel-mils" className={labelCls}>Mils</label>
          <input id="milrel-mils" aria-label="Mil-relation mils" type="number" min={0} step="any" value={vals.mils} onChange={set("mils")} onFocus={() => trio.setFocused("mils")} onBlur={() => trio.setFocused(null)} className={inputCls} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className={labelCls}>Size unit</span>
        {(["m", "ft"] as const).map((u) => (
          <button
            key={u}
            type="button"
            aria-label={`Object size unit: ${u === "m" ? "meters" : "feet"}`}
            aria-pressed={sizeUnit === u}
            onClick={() => setSizeUnit(u)}
            className={sizeUnit === u ? btnPrimary : btnGhost}
          >
            {u}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold text-[var(--dim)]">Common sizes — approximations, tap to use one:</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {REFERENCE_SIZES.map((r) => (
          <button
            key={r.label}
            type="button"
            aria-label={`Use reference size: ${r.label}, about ${r.sizeM} meters`}
            onClick={() => pickReference(r.sizeM)}
            className={btnGhost}
          >
            {r.label} ≈ {sizeUnit === "ft" ? `${trimNum(r.sizeM / 0.3048, 1)} ft` : `${r.sizeM} m`}
          </button>
        ))}
      </div>
      {solved && solved.rangeM !== null && solved.sizeM !== null && solved.mils !== null ? (
        <p className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-base text-[var(--text)]" role="status">
          Range <strong>{trimNum(solved.rangeM, 0)} m</strong> · Size <strong>{trimNum(solved.sizeM, 2)} m</strong> ·{" "}
          <strong>{trimNum(solved.mils, 1)} mils</strong>
        </p>
      ) : null}
    </section>
  );
}

/* ----------------------------- Load calculator ---------------------------- */

interface LoadItem {
  id: string;
  name: string;
  weight: string;
}
interface LoadState {
  unit: "lb" | "kg";
  bodyWeight: string;
  items: LoadItem[];
}

let loadSeq = 0;
function newLoadItem(): LoadItem {
  loadSeq += 1;
  return { id: `load-${Date.now()}-${loadSeq}`, name: "", weight: "" };
}

function LoadCalcTool() {
  const queryClient = useQueryClient();
  const kitQ = useQuery({ queryKey: ["fieldKit"], queryFn: () => api.getFieldKit({}) });
  const dirtyRef = useRef(false);
  const saveMut = useMutation({
    mutationFn: (loadJson: string) => api.saveFieldKit({ loadJson }),
    onSuccess: () => {
      dirtyRef.current = false;
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });
  const [state, setState] = useState<LoadState>({ unit: "lb", bodyWeight: "", items: [] });
  // Snapshot bookkeeping: apply a server snapshot whenever it changes,
  // except the echo of our own save (local state is already that value).
  // A cached stale snapshot on remount must not block the fresh refetch.
  const appliedJsonRef = useRef<string | null>(null);
  const savedJsonRef = useRef("");
  const saveTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!kitQ.data) return;
    const json = kitQ.data.loadJson;
    if (dirtyRef.current) return; // never clobber an unsaved local edit
    if (json === appliedJsonRef.current || json === savedJsonRef.current) {
      appliedJsonRef.current = json;
      return;
    }
    appliedJsonRef.current = json;
    if (json) {
      try {
        const parsed = JSON.parse(json) as LoadState;
        if (parsed && Array.isArray(parsed.items)) setState(parsed);
      } catch {
        /* unreadable snapshot: start clean */
      }
    }
  }, [kitQ.data]);

  const update = (next: LoadState) => {
    setState(next);
    dirtyRef.current = true;
    savedJsonRef.current = JSON.stringify(next);
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => saveMut.mutate(JSON.stringify(next)), 700);
  };

  const body = Number(state.bodyWeight);
  const total = state.items.reduce((sum, it) => sum + (Number(it.weight) || 0), 0);
  const pct = body > 0 && total > 0 ? (total / body) * 100 : null;

  return (
    <section aria-label="Load calculator" className={cardCls}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Load Calculator</h3>
        <div className="flex gap-1" role="group" aria-label="Load weight unit">
          {(["lb", "kg"] as const).map((u) => (
            <button
              key={u}
              type="button"
              aria-label={`Load unit: ${u === "lb" ? "pounds" : "kilograms"}`}
              aria-pressed={state.unit === u}
              onClick={() => update({ ...state, unit: u })}
              className={state.unit === u ? btnPrimary : btnGhost}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="load-body" className={labelCls}>Your body weight ({state.unit})</label>
        <input
          id="load-body"
          aria-label="Body weight"
          type="number"
          min={0}
          step="any"
          value={state.bodyWeight}
          onChange={(e) => update({ ...state, bodyWeight: e.target.value })}
          className={inputCls}
        />
      </div>
      <div className="mt-3 space-y-2">
        {state.items.map((it, i) => (
          <div key={it.id} className="flex items-end gap-2">
            <div className="flex-1">
              <label htmlFor={`load-name-${it.id}`} className={labelCls}>Item {i + 1}</label>
              <input
                id={`load-name-${it.id}`}
                aria-label={`Load item ${i + 1} name`}
                type="text"
                value={it.name}
                placeholder="e.g., Pack"
                onChange={(e) => update({ ...state, items: state.items.map((x) => (x.id === it.id ? { ...x, name: e.target.value } : x)) })}
                className={inputCls}
              />
            </div>
            <div className="w-28">
              <label htmlFor={`load-wt-${it.id}`} className={labelCls}>Weight ({state.unit})</label>
              <input
                id={`load-wt-${it.id}`}
                aria-label={`Load item ${i + 1} weight`}
                type="number"
                min={0}
                step="any"
                value={it.weight}
                onChange={(e) => update({ ...state, items: state.items.map((x) => (x.id === it.id ? { ...x, weight: e.target.value } : x)) })}
                className={inputCls}
              />
            </div>
            <button
              type="button"
              aria-label={`Remove load item ${i + 1}`}
              onClick={() => update({ ...state, items: state.items.filter((x) => x.id !== it.id) })}
              className={btnDanger}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" aria-label="Add a carried item" onClick={() => update({ ...state, items: [...state.items, newLoadItem()] })} className={`${btnGhost} mt-3`}>
        + Add item
      </button>
      <div className="mt-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3" role="status">
        <p className="text-base text-[var(--text)]">
          Total carried: <strong>{trimNum(total)} {state.unit}</strong>
          {body > 0 ? (
            <>
              {" "}· Body weight: <strong>{trimNum(body)} {state.unit}</strong>
            </>
          ) : null}
        </p>
        {pct !== null ? (
          <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">Load = {pct.toFixed(1)}% of body weight</p>
        ) : (
          <p className="mt-1 text-sm text-[var(--dim)]">Add your body weight and at least one item to see the percentage.</p>
        )}
      </div>
      <p className="mt-2 text-sm text-[var(--dim)]">
        Just the math, saved on your profile. What a load means for you depends on the mission, the terrain, and your
        conditioning — this tool makes no call on that.
      </p>
    </section>
  );
}

/* ----------------------------- Watchbill builder ---------------------------- */

let wbSeq = 0;
function newWatchbillId(): string {
  wbSeq += 1;
  return `wb-${Date.now()}-${wbSeq}`;
}

function defaultStartLocal(): string {
  const d = new Date();
  d.setMinutes(0, 0, 0);
  const pad = (n: number) => `${n}`.padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function WatchbillTool({ onPrintWatchbill }: { onPrintWatchbill: (wb: Watchbill) => void }) {
  const queryClient = useQueryClient();
  const kitQ = useQuery({ queryKey: ["fieldKit"], queryFn: () => api.getFieldKit({}) });
  const dirtyRef = useRef(false);
  const saveMut = useMutation({
    mutationFn: (watchbillsJson: string) => api.saveFieldKit({ watchbillsJson }),
    onSuccess: () => {
      dirtyRef.current = false;
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });
  const [saved, setSaved] = useState<Watchbill[]>([]);
  const appliedJsonRef = useRef<string | null>(null);
  const savedJsonRef = useRef("");
  const [draft, setDraft] = useState<Watchbill>({
    id: newWatchbillId(),
    title: "",
    names: ["", "", "", ""],
    shiftHours: 2,
    startLocal: defaultStartLocal(),
    days: 1,
  });

  useEffect(() => {
    if (!kitQ.data) return;
    const json = kitQ.data.watchbillsJson;
    if (dirtyRef.current) return; // never clobber an unsaved local edit
    if (json === appliedJsonRef.current || json === savedJsonRef.current) {
      appliedJsonRef.current = json;
      return;
    }
    appliedJsonRef.current = json;
    if (json) {
      try {
        const parsed = JSON.parse(json) as Watchbill[];
        if (Array.isArray(parsed)) setSaved(parsed);
      } catch {
        /* unreadable snapshot: start clean */
      }
    }
  }, [kitQ.data]);

  const persist = (next: Watchbill[]) => {
    setSaved(next);
    dirtyRef.current = true;
    savedJsonRef.current = JSON.stringify(next);
    saveMut.mutate(JSON.stringify(next));
  };
  const rows = buildWatchbillRows(draft);
  const namesValid = draft.names.map((n) => n.trim()).filter(Boolean).length >= 2;

  const saveDraft = () => {
    const clean: Watchbill = {
      ...draft,
      title: draft.title.trim() || "Untitled watchbill",
      names: draft.names.map((n) => n.trim()).filter(Boolean),
    };
    const existing = saved.some((w) => w.id === clean.id);
    persist(existing ? saved.map((w) => (w.id === clean.id ? clean : w)) : [...saved, clean]);
  };

  return (
    <section aria-label="Watchbill builder" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Watchbill Builder</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Names rotate in order through every shift block until the last day ends. Saved watchbills live on your profile
        and print like the other field sheets.
      </p>
      <div className="mt-3">
        <label htmlFor="wb-title" className={labelCls}>Watchbill title</label>
        <input
          id="wb-title"
          aria-label="Watchbill title"
          type="text"
          value={draft.title}
          placeholder="e.g., Quarterdeck watch"
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className={inputCls}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="wb-names" className={labelCls}>Names — one per line, in rotation order</label>
        <textarea
          id="wb-names"
          aria-label="Watchbill names, one per line"
          rows={5}
          value={draft.names.join("\n")}
          onChange={(e) => setDraft({ ...draft, names: e.target.value.split("\n") })}
          className={`${inputCls} resize-y`}
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div>
          <label htmlFor="wb-shift" className={labelCls}>Shift (hours)</label>
          <input
            id="wb-shift"
            aria-label="Watchbill shift length in hours"
            type="number"
            min={1}
            max={24}
            value={draft.shiftHours}
            onChange={(e) => setDraft({ ...draft, shiftHours: Math.max(1, Number(e.target.value) || 1) })}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="wb-days" className={labelCls}>Days (1–7)</label>
          <input
            id="wb-days"
            aria-label="Watchbill number of days"
            type="number"
            min={1}
            max={7}
            value={draft.days}
            onChange={(e) => setDraft({ ...draft, days: Math.min(7, Math.max(1, Number(e.target.value) || 1)) })}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="wb-start" className={labelCls}>Starts</label>
          <input
            id="wb-start"
            aria-label="Watchbill start date and time"
            type="datetime-local"
            value={draft.startLocal}
            onChange={(e) => setDraft({ ...draft, startLocal: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      {namesValid && rows.length > 0 ? (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-base" aria-label="Watchbill rotation">
            <thead>
              <tr className="text-[var(--dim)]">
                <th className="py-1 pr-2 font-semibold">#</th>
                <th className="py-1 pr-2 font-semibold">On watch</th>
                <th className="py-1 pr-2 font-semibold">From</th>
                <th className="py-1 font-semibold">To</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.index} className="border-t border-[var(--border)] text-[var(--text)]">
                  <td className="py-1 pr-2 tabular-nums">{r.index + 1}</td>
                  <td className="py-1 pr-2 font-semibold">{r.holder}</td>
                  <td className="py-1 pr-2">{formatWatchTime(r.start)}</td>
                  <td className="py-1">{formatWatchTime(r.end)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-3 text-sm text-[var(--dim)]">Enter at least two names to generate the rotation.</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label="Save this watchbill" onClick={saveDraft} disabled={!namesValid} className={btnPrimary}>
          Save watchbill
        </button>
        <button
          type="button"
          aria-label="Print this watchbill"
          onClick={() => onPrintWatchbill({ ...draft, title: draft.title.trim() || "Untitled watchbill", names: draft.names.map((n) => n.trim()).filter(Boolean) })}
          disabled={!namesValid}
          className={btnGhost}
        >
          Print
        </button>
        <button
          type="button"
          aria-label="Start a new watchbill"
          onClick={() => setDraft({ id: newWatchbillId(), title: "", names: ["", "", "", ""], shiftHours: 2, startLocal: defaultStartLocal(), days: 1 })}
          className={btnGhost}
        >
          New
        </button>
      </div>
      {saved.length > 0 ? (
        <div className="mt-4">
          <h4 className="font-display text-base font-bold text-[var(--text)]">Saved watchbills</h4>
          <ul className="mt-2 space-y-2">
            {saved.map((w) => (
              <li key={w.id} className="flex flex-wrap items-center gap-2 rounded-[var(--radius)] bg-[var(--surface2)] px-3 py-2">
                <span className="min-w-0 flex-1 truncate text-base font-semibold text-[var(--text)]">{w.title}</span>
                <span className="text-sm text-[var(--dim)]">
                  {w.names.length} names · {w.shiftHours} h shifts · {w.days} day{w.days === 1 ? "" : "s"}
                </span>
                <button type="button" aria-label={`Open saved watchbill ${w.title}`} onClick={() => setDraft(w)} className={btnGhost}>Open</button>
                <button type="button" aria-label={`Print saved watchbill ${w.title}`} onClick={() => onPrintWatchbill(w)} className={btnGhost}>Print</button>
                <button type="button" aria-label={`Delete saved watchbill ${w.title}`} onClick={() => persist(saved.filter((x) => x.id !== w.id))} className={btnDanger}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

/* ----------------------------- Hydration tracker ---------------------------- */

interface HydrationState {
  goalMl: number;
  unit: "oz" | "ml";
  days: Record<string, number>;
}

const ML_PER_OZ = 29.5735;

function localDayKey(d = new Date()): string {
  const pad = (n: number) => `${n}`.padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function HydrationTool() {
  const queryClient = useQueryClient();
  const kitQ = useQuery({ queryKey: ["fieldKit"], queryFn: () => api.getFieldKit({}) });
  const dirtyRef = useRef(false);
  const saveMut = useMutation({
    mutationFn: (hydrationJson: string) => api.saveFieldKit({ hydrationJson }),
    onSuccess: () => {
      dirtyRef.current = false;
      void queryClient.invalidateQueries({ queryKey: ["fieldKit"] });
    },
  });
  const [state, setState] = useState<HydrationState>({ goalMl: 3000, unit: "oz", days: {} });
  const [goalIn, setGoalIn] = useState("");
  const [customIn, setCustomIn] = useState("");
  // Same snapshot bookkeeping as the load calculator: apply a server
  // snapshot whenever it changes, except our own save's echo; a stale
  // cached snapshot on remount must not block the fresh refetch.
  const appliedJsonRef = useRef<string | null>(null);
  const savedJsonRef = useRef("");
  const saveTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!kitQ.data) return;
    const json = kitQ.data.hydrationJson;
    if (dirtyRef.current) return; // never clobber an unsaved local edit
    if (json === appliedJsonRef.current || json === savedJsonRef.current) {
      appliedJsonRef.current = json;
      return;
    }
    appliedJsonRef.current = json;
    if (json) {
      try {
        const parsed = JSON.parse(json) as HydrationState;
        if (parsed && parsed.days) {
          setState(parsed);
          setGoalIn(parsed.unit === "oz" ? trimNum(parsed.goalMl / ML_PER_OZ, 0) : `${parsed.goalMl}`);
        }
      } catch {
        /* unreadable snapshot: start clean */
      }
    } else {
      setGoalIn("100");
    }
  }, [kitQ.data]);

  const update = (next: HydrationState) => {
    setState(next);
    dirtyRef.current = true;
    savedJsonRef.current = JSON.stringify(next);
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => saveMut.mutate(JSON.stringify(next)), 600);
  };

  const todayKey = localDayKey();
  const todayMl = state.days[todayKey] ?? 0;
  const disp = (ml: number) => (state.unit === "oz" ? `${trimNum(ml / ML_PER_OZ, 1)} oz` : `${Math.round(ml)} ml`);
  const pct = state.goalMl > 0 ? Math.min(100, (todayMl / state.goalMl) * 100) : 0;

  const logDrink = (ml: number) => {
    if (!(ml > 0)) return;
    update({ ...state, days: { ...state.days, [todayKey]: (state.days[todayKey] ?? 0) + ml } });
  };
  const quickButtons =
    state.unit === "oz"
      ? [
          { label: "+8 oz", ml: 8 * ML_PER_OZ },
          { label: "+16 oz", ml: 16 * ML_PER_OZ },
          { label: "+24 oz", ml: 24 * ML_PER_OZ },
        ]
      : [
          { label: "+250 ml", ml: 250 },
          { label: "+500 ml", ml: 500 },
          { label: "+750 ml", ml: 750 },
        ];
  const history = Object.entries(state.days)
    .filter(([k]) => k !== todayKey)
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .slice(0, 7);

  return (
    <section aria-label="Hydration tracker" className={cardCls}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Hydration Tracker</h3>
        <div className="flex gap-1" role="group" aria-label="Hydration unit">
          {(["oz", "ml"] as const).map((u) => (
            <button
              key={u}
              type="button"
              aria-label={`Hydration unit: ${u === "oz" ? "ounces" : "milliliters"}`}
              aria-pressed={state.unit === u}
              onClick={() => {
                update({ ...state, unit: u });
                setGoalIn(u === "oz" ? trimNum(state.goalMl / ML_PER_OZ, 0) : `${state.goalMl}`);
              }}
              className={state.unit === u ? btnPrimary : btnGhost}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">
        A personal log only — set your own goal and tap what you drink. It makes no medical calls.
      </p>
      <div className="mt-3 flex items-end gap-2">
        <div className="flex-1">
          <label htmlFor="hyd-goal" className={labelCls}>Daily goal ({state.unit})</label>
          <input
            id="hyd-goal"
            aria-label="Daily water goal"
            type="number"
            min={0}
            step="any"
            value={goalIn}
            onChange={(e) => setGoalIn(e.target.value)}
            className={inputCls}
          />
        </div>
        <button
          type="button"
          aria-label="Save daily water goal"
          onClick={() => {
            const v = Number(goalIn);
            if (v > 0) update({ ...state, goalMl: state.unit === "oz" ? v * ML_PER_OZ : v });
          }}
          className={btnPrimary}
        >
          Save goal
        </button>
      </div>
      <div className="mt-4" role="status" aria-label="Today's hydration progress">
        <p className="font-display text-3xl font-bold tabular-nums text-[var(--text)]">
          {disp(todayMl)} <span className="text-lg font-semibold text-[var(--dim)]">of {disp(state.goalMl)} today</span>
        </p>
        <div className="mt-2 h-3 overflow-hidden rounded bg-[var(--surface2)]" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label="Progress toward today's goal">
          <div className="h-full bg-[var(--accent)]" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-1 text-sm text-[var(--dim)]">{Math.round(pct)}% of today's goal</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {quickButtons.map((b) => (
          <button key={b.label} type="button" aria-label={`Log a drink of ${b.label.replace("+", "")}`} onClick={() => logDrink(b.ml)} className={btnPrimary}>
            {b.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-end gap-2">
        <div className="flex-1">
          <label htmlFor="hyd-custom" className={labelCls}>Custom amount ({state.unit})</label>
          <input
            id="hyd-custom"
            aria-label="Custom drink amount"
            type="number"
            min={0}
            step="any"
            value={customIn}
            onChange={(e) => setCustomIn(e.target.value)}
            className={inputCls}
          />
        </div>
        <button
          type="button"
          aria-label="Log custom drink"
          onClick={() => {
            const v = Number(customIn);
            if (v > 0) {
              logDrink(state.unit === "oz" ? v * ML_PER_OZ : v);
              setCustomIn("");
            }
          }}
          className={btnGhost}
        >
          Log drink
        </button>
        <button
          type="button"
          aria-label="Reset today's hydration total"
          onClick={() => update({ ...state, days: { ...state.days, [todayKey]: 0 } })}
          className={btnGhost}
        >
          Reset today
        </button>
      </div>
      {history.length > 0 ? (
        <div className="mt-4">
          <h4 className="font-display text-base font-bold text-[var(--text)]">Recent days</h4>
          <ul className="mt-1 space-y-1">
            {history.map(([day, ml]) => (
              <li key={day} className="flex justify-between text-base text-[var(--text)]">
                <span>{new Date(`${day}T12:00:00`).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
                <span className="tabular-nums font-semibold">{disp(ml)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------- Field Notes ------------------------------- */

interface FieldNoteRow {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

function fmtStamp(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
}

function FieldNotesTool() {
  const qc = useQueryClient();
  const notesQ = useQuery({ queryKey: ["fieldNotes"], queryFn: () => api.listFieldNotes({}) });
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftBody, setDraftBody] = useState("");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle");
  const saveTimerRef = useRef<number | null>(null);
  const notes = (notesQ.data?.notes ?? []) as FieldNoteRow[];
  const selected = notes.find((n) => n.id === selectedId) ?? null;

  const createMut = useMutation({
    mutationFn: () => api.createFieldNote({ title: "", body: "" }),
    onSuccess: (data) => {
      void qc.invalidateQueries({ queryKey: ["fieldNotes"] });
      setSelectedId(data.note.id);
      setDraftTitle("");
      setDraftBody("");
      setSaveState("idle");
    },
  });
  const updateMut = useMutation({
    mutationFn: (args: { id: number; title: string; body: string }) => api.updateFieldNote(args),
    onSuccess: () => {
      setSaveState("saved");
      void qc.invalidateQueries({ queryKey: ["fieldNotes"] });
    },
  });
  const deleteMut = useMutation({
    mutationFn: (id: number) => api.deleteFieldNote({ id }),
    onSuccess: () => {
      setSelectedId(null);
      setDraftTitle("");
      setDraftBody("");
      setSaveState("idle");
      void qc.invalidateQueries({ queryKey: ["fieldNotes"] });
    },
  });

  const openNote = (n: FieldNoteRow) => {
    setSelectedId(n.id);
    setDraftTitle(n.title);
    setDraftBody(n.body);
    setSaveState("idle");
  };

  // Autosave on edit (debounced) — only for the note currently open.
  useEffect(() => {
    if (selectedId === null || !selected) return;
    if (draftTitle === selected.title && draftBody === selected.body) return;
    setSaveState("saving");
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    const id = selectedId;
    const title = draftTitle;
    const body = draftBody;
    saveTimerRef.current = window.setTimeout(() => updateMut.mutate({ id, title, body }), 900);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftTitle, draftBody, selectedId]);

  return (
    <section aria-label="Field notes" className={cardCls}>
      <h3 className="font-display text-xl font-bold text-[var(--text)]">Field Notes</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Your notes are personal — they are saved only on your profile and are never shared with anyone.
      </p>
      {selected === null ? (
        <div className="mt-3">
          <button type="button" aria-label="Write a new field note" onClick={() => createMut.mutate()} disabled={createMut.isPending} className={btnPrimary}>
            + New note
          </button>
          {notesQ.isLoading ? (
            <p className="mt-3 text-base text-[var(--dim)]">Loading your notes…</p>
          ) : notes.length === 0 ? (
            <p className="mt-3 text-base text-[var(--dim)]">No notes yet. Your first note is one tap away.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {notes.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    aria-label={`Open note: ${n.title || "Untitled note"}`}
                    onClick={() => openNote(n)}
                    className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-left"
                  >
                    <span className="block truncate text-base font-semibold text-[var(--text)]">{n.title || "Untitled note"}</span>
                    <span className="block truncate text-sm text-[var(--dim)]">{n.body || "—"}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-[var(--dim)]">Edited {fmtStamp(n.updatedAt)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="mt-3">
          <button type="button" aria-label="Back to the notes list" onClick={() => setSelectedId(null)} className={btnGhost}>
            ← All notes
          </button>
          <div className="mt-3">
            <label htmlFor="note-title" className={labelCls}>Title</label>
            <input
              id="note-title"
              aria-label="Note title"
              type="text"
              value={draftTitle}
              placeholder="Untitled note"
              onChange={(e) => setDraftTitle(e.target.value)}
              className={inputCls}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="note-body" className={labelCls}>Note</label>
            <textarea
              id="note-body"
              aria-label="Note text"
              rows={10}
              value={draftBody}
              onChange={(e) => setDraftBody(e.target.value)}
              className={`${inputCls} resize-y`}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--dim)]" role="status">
            Created {fmtStamp(selected.createdAt)} · Edited {fmtStamp(selected.updatedAt)}
            {saveState === "saving" ? " · Saving…" : saveState === "saved" ? " · Saved" : ""}
          </p>
          <button
            type="button"
            aria-label="Delete this note"
            onClick={() => deleteMut.mutate(selected.id)}
            disabled={deleteMut.isPending}
            className={`${btnDanger} mt-2`}
          >
            Delete note
          </button>
        </div>
      )}
    </section>
  );
}
