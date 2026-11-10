// Theme UI pieces for Branch & Job Theming: the masthead emblem block,
// the "About this theme" panel with the revert/re-enable control, the
// Army branch-color chip, the job-device block, and the binder cover.
// All art is the labeled stylized renditions from EmblemArt /
// JobDeviceArt; all values and labels come from theming.ts (the
// research pack transcribed).

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { BranchEmblem, UssfEmblemDevice } from "./EmblemArt";
import { JobDeviceGlyph } from "./JobDeviceArt";
import {
  CG_MARKS,
  NAVY_EXCLUDED_MARKS,
  NAVY_MARKS,
  SERVICE_THEMES,
  THEME_ABOUT_INTRO,
  TRADEMARK_NOTE,
  USMC_JOB_NOTE,
  afBadgeFor,
  armyBranchFor,
  branchKeyOf,
  statusBadgeLabel,
  type ArmyBranchColor,
  type BranchKey,
  type JobDevice,
} from "./theming";

export type ThemeProfileLike = {
  branch: string;
  mosCode: string;
  displayName: string;
  rank: string;
  themeMode: "branch" | "olive";
};

/* ------------------------- Job device resolution ------------------------ */

export type JobLayer =
  | { kind: "army"; army: ArmyBranchColor }
  | { kind: "device"; device: JobDevice; treatment?: string }
  | { kind: "usmc" }
  | { kind: "none"; note: string };

export function resolveJobLayer(
  branch: string,
  mosCode: string,
  mosField: string | null,
): JobLayer {
  const key = branchKeyOf(branch);
  const code = (mosCode ?? "").toUpperCase().trim();
  if (!key || !code) return { kind: "none", note: "" };
  if (key === "Marine Corps") return { kind: "usmc" };
  if (key === "Army") {
    const army = armyBranchFor(mosField ?? "", code);
    if (army) return { kind: "army", army };
    return {
      kind: "none",
      note: "This job's Army branch could not be matched to the TIOH Branch Insignia Color Chart from the code on your profile, so no branch colors or insignia are shown rather than guessed. The chart maps by branch of the MOS — check your job in the Library.",
    };
  }
  if (key === "Navy") {
    const letters = code.replace(/[^A-Z]/g, "");
    if (NAVY_EXCLUDED_MARKS.includes(letters)) {
      return {
        kind: "none",
        note: `${letters} is one of the specialty marks NAVPERS 15665J itself marks disestablished, so no mark is shown.`,
      };
    }
    const device = NAVY_MARKS[letters] ?? NAVY_MARKS[letters.slice(0, 3)] ?? NAVY_MARKS[letters.slice(0, 2)];
    if (device) return { kind: "device", device };
    return {
      kind: "none",
      note: `No specialty-mark rendition is drawn for ${code} in this build. The rating's mark is published in NAVPERS 15665J, art. 4226 — the specialty mark alone is the job layer (never the full rating badge: the eagle and chevrons are rank art). No device is invented in its place.`,
    };
  }
  if (key === "Coast Guard") {
    const letters = code.replace(/[^A-Z]/g, "");
    const device = CG_MARKS[letters] ?? CG_MARKS[letters.slice(0, 3)] ?? CG_MARKS[letters.slice(0, 2)];
    if (device) return { kind: "device", device };
    return {
      kind: "none",
      note: `No specialty-mark rendition is drawn for ${code} in this build. Coast Guard marks are published in COMDTINST M1020.6 §3.D.9, each from the Coast Guard's own description (shared names differ from the Navy's in detail). No device is invented in its place.`,
    };
  }
  if (key === "Space Force") {
    if (code.startsWith("5S") || code.startsWith("5C") || code.startsWith("1C6")) {
      return {
        kind: "device",
        treatment: "Space Force blue",
        device: {
          glyph: "delta-globe",
          name: "Space Operations Badge",
          description:
            "The space-operations identity mark. Policy note (flagged in research): in August 2025 the badge was reused as the interim Officer Training Course graduation badge — award criteria are in flux, but the device itself remains the space-operations mark.",
          source: "DAFI 36-2903 (USSF occupational badges, shared DAF system)",
        },
      };
    }
    const device = afBadgeFor(code);
    if (device) return { kind: "device", device, treatment: "Space Force blue" };
    return {
      kind: "none",
      note: `No occupational-badge rendition is drawn for ${code} in this build. Guardians wear the shared DAF occupational badges embroidered in Space Force blue — the thread color is the service distinction. No device is invented in its place.`,
    };
  }
  // Air Force
  const device = afBadgeFor(code);
  if (device) return { kind: "device", device };
  return {
    kind: "none",
    note: `No occupational-badge rendition is drawn for ${code} in this build. Occupational badges are published in DAFI 36-2903; the build draws the BASE device only (basic level) — star and wreath level marks are the member's own data, not the job's identity. No device is invented in its place.`,
  };
}

/* ------------------------------ Components ------------------------------ */

/** Branch emblem beside the member's name, with its caption placed
 * BESIDE the art (never under the Air Force Symbol — its use rules
 * allow only the standard "U.S. Air Force" logotype directly under
 * it). For Space Force binder-style round use, see BinderCover. */
export function MastheadEmblem({ branch, size = 58 }: { branch: string; size?: number }) {
  const key = branchKeyOf(branch);
  if (!key) return null;
  const theme = SERVICE_THEMES[key];
  return (
    <div className="flex items-center gap-3">
      <span className="text-[var(--accent)]">
        <BranchEmblem branch={key} size={size} />
      </span>
      <span className="max-w-44">
        <span className="font-display block text-sm font-bold leading-tight text-[var(--text)]">{theme.emblemName}</span>
        <span className="mt-0.5 block text-xs leading-snug text-[var(--dim)]">{theme.emblemCaption}</span>
      </span>
    </div>
  );
}

/** The Army pair as a CHIP/RIBBON — primary field, secondary stripe —
 * never as colored text. Labeled approximations, always. */
export function ArmyColorChip({ army }: { army: ArmyBranchColor }) {
  return (
    <span className="block">
      <span
        aria-hidden="true"
        className="flex h-7 w-full overflow-hidden rounded border border-[var(--border)]"
      >
        <span className="flex-1" style={{ backgroundColor: army.primary.approx }} />
        <span className="w-1/4" style={{ backgroundColor: army.secondary.approx }} />
      </span>
      <span className="mt-1.5 block text-sm font-semibold text-[var(--text)]">
        {army.branch} branch colors — {army.primary.name} / {army.secondary.name}
      </span>
      <span className="mt-0.5 block text-xs leading-snug text-[var(--dim)]">
        LABELED APPROXIMATIONS matched to the published color names (TIOH Branch Insignia Color Chart,
        2026-05-07 — its numbers are cable/yarn textile specs, not hex
        {army.primary.pms ? `; primary anchored to PMS ${army.primary.pms}` : ""}
        {army.secondary.pms ? `; secondary anchored to PMS ${army.secondary.pms}` : ""}).
        Army is the only service with an official per-job color system, and it maps by branch of the MOS,
        never per-MOS.
      </span>
      {army.note ? <span className="mt-1 block text-xs leading-snug text-[var(--dim)]">{army.note}</span> : null}
    </span>
  );
}

/** The job layer for a Home job card / binder cover: Army insignia +
 * chip, another service's device, the USMC EGA-as-device, or an honest
 * no-device note. */
export function JobLayerBlock({ branch, mosCode, mosField }: { branch: string; mosCode: string; mosField: string | null }) {
  const key = branchKeyOf(branch);
  if (!key || !mosCode) return null;
  const layer = resolveJobLayer(branch, mosCode, mosField);
  if (layer.kind === "usmc") {
    return (
      <span className="mt-3 block border-t border-[var(--border)] pt-3">
        <span className="flex items-center gap-3">
          <span className="text-[var(--accent)]">
            <BranchEmblem branch="Marine Corps" size={44} />
          </span>
          <span>
            <span className="font-display block text-base font-bold text-[var(--text)]">
              {mosCode} — carried as text, by the Corps' own system
            </span>
            <span className="block text-xs text-[var(--dim)]">Stylized rendition of the Marine Corps emblem.</span>
          </span>
        </span>
        <span className="mt-2 block text-sm leading-snug text-[var(--dim)]">{USMC_JOB_NOTE}</span>
      </span>
    );
  }
  if (layer.kind === "army") {
    return (
      <span className="mt-3 block border-t border-[var(--border)] pt-3">
        <span className="flex items-center gap-3">
          <JobDeviceGlyph glyph={layer.army.glyph} size={46} />
          <span>
            <span className="font-display block text-base font-bold text-[var(--text)]">{layer.army.deviceName}</span>
            <span className="block text-xs text-[var(--dim)]">
              Stylized rendition — Army branch insignia (TIOH system), drawn simplified at card size.
            </span>
          </span>
        </span>
        <span className="mt-3 block">
          <ArmyColorChip army={layer.army} />
        </span>
      </span>
    );
  }
  if (layer.kind === "device") {
    return (
      <span className="mt-3 block border-t border-[var(--border)] pt-3">
        <span className="flex items-center gap-3">
          <JobDeviceGlyph
            glyph={layer.device.glyph}
            size={46}
            color={layer.treatment === "Space Force blue" ? "#3E6DA3" : undefined}
          />
          <span>
            <span className="font-display block text-base font-bold text-[var(--text)]">{layer.device.name}</span>
            <span className="block text-xs text-[var(--dim)]">
              Stylized rendition — {layer.device.source}.
              {layer.treatment ? ` Rendered in ${layer.treatment} embroidery treatment — the thread color is the service distinction.` : ""}
            </span>
          </span>
        </span>
        <span className="mt-2 block text-sm leading-snug text-[var(--dim)]">{layer.device.description}</span>
      </span>
    );
  }
  if (layer.note) {
    return (
      <span className="mt-3 block border-t border-[var(--border)] pt-3">
        <span className="block text-sm leading-snug text-[var(--dim)]">{layer.note}</span>
      </span>
    );
  }
  return null;
}

/** "About this theme" — per-service sourcing note + palette swatches +
 * the revert / re-enable control. Renders in every track's home
 * profile area; the control saves per profile via setThemeMode. */
export function ThemePanel({ profile }: { profile: ThemeProfileLike }) {
  const queryClient = useQueryClient();
  const key = branchKeyOf(profile.branch);
  const theme = key ? SERVICE_THEMES[key] : null;
  const setMode = useMutation({
    mutationFn: (mode: "branch" | "olive") => api.setThemeMode({ mode }),
    onSuccess: () => void queryClient.invalidateQueries(),
  });
  const branchThemed = profile.themeMode === "branch" && theme !== null;
  return (
    <section aria-label="About this theme" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h2 className="font-display text-base font-bold text-[var(--text)]">About this theme</h2>
      <p className="mt-1 text-sm leading-snug text-[var(--dim)]">{THEME_ABOUT_INTRO}</p>
      {theme ? (
        <>
          <p className="mt-3 text-sm font-bold text-[var(--text)]">
            {theme.key} theme — {branchThemed ? "ON" : "OFF (default olive is showing)"}
          </p>
          <p className="text-sm font-semibold text-[var(--accent-word)]">{theme.statusLine}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {theme.colors.map((c) => (
              <span key={c.name} className="flex items-center gap-1.5 rounded-full border border-[var(--border)] py-1 pl-1 pr-2.5">
                <span aria-hidden="true" className="h-5 w-5 rounded-full border border-[var(--border)]" style={{ backgroundColor: c.hex }} />
                <span className="text-xs font-semibold text-[var(--text)]">
                  {c.name} {c.hex}
                  {c.pms ? ` · PMS ${c.pms}` : ""}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs font-bold tracking-wide text-[var(--dim)]">
            {theme.colors.every((c) => c.status === "official")
              ? "ALL VALUES ABOVE: OFFICIAL VALUES"
              : theme.colors[0]
                ? statusBadgeLabel(theme.colors[0].status)
                : ""}
          </p>
          {theme.note.map((n) => (
            <p key={n.slice(0, 32)} className="mt-2 text-sm leading-snug text-[var(--dim)]">{n}</p>
          ))}
        </>
      ) : (
        <p className="mt-3 text-sm leading-snug text-[var(--dim)]">
          No branch is set on this profile, so the default olive theme is showing. Set a branch in Edit
          profile and the app themes from it.
        </p>
      )}
      <p className="mt-3 border-t border-[var(--border)] pt-3 text-xs leading-snug text-[var(--dim)]">{TRADEMARK_NOTE}</p>
      {theme ? (
        <button
          type="button"
          aria-label={branchThemed ? "Revert to the default olive theme" : "Use my branch theme"}
          disabled={setMode.isPending}
          onClick={() => setMode.mutate(branchThemed ? "olive" : "branch")}
          className="mt-3 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] px-4 py-2.5 text-sm font-bold text-[var(--accent-word)] disabled:opacity-50"
        >
          {setMode.isPending ? "Saving…" : branchThemed ? "Revert to default olive theme" : "Use my branch theme"}
        </button>
      ) : null}
      {setMode.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not save the theme choice. Try again.</p> : null}
    </section>
  );
}

/** Binder cover (per pack §5E): branch emblem large, branch palette
 * ground band, job device small under the member's name. */
export function BinderCover({ profile, mosField }: { profile: ThemeProfileLike; mosField: string | null }) {
  const key = branchKeyOf(profile.branch);
  if (!key) return null;
  const theme = SERVICE_THEMES[key];
  const layer = profile.mosCode ? resolveJobLayer(profile.branch, profile.mosCode, mosField) : null;
  return (
    <section aria-label="Your binder cover" className="mb-5 overflow-hidden rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)]">
      <div aria-hidden="true" className="flex h-3">
        {theme.band.map((hex, i) => (
          <span key={`${hex}-${i}`} className="flex-1" style={{ backgroundColor: hex }} />
        ))}
      </div>
      <div className="flex items-start gap-4 p-5">
        <span className="text-[var(--accent)]">
          {key === "Space Force" ? <UssfEmblemDevice size={84} /> : <BranchEmblem branch={key} size={84} />}
        </span>
        <span>
          <span className="font-display block text-2xl font-bold leading-tight text-[var(--text)]">
            {profile.rank ? `${profile.rank} ` : ""}{profile.displayName || "Service Member"}
          </span>
          <span className="mt-0.5 block text-sm font-semibold text-[var(--dim)]">
            {key}
            {profile.mosCode ? ` · ${profile.mosCode}` : ""}
          </span>
          <span className="mt-1 block text-xs leading-snug text-[var(--dim)]">
            {key === "Space Force"
              ? "Stylized rendition of the U.S. Space Force emblem device (delta over globe with orbit ring — no inscription band; not the seal)."
              : theme.emblemCaption}{" "}
            Stylized rendition — profile art only, never app branding.
          </span>
          {layer?.kind === "device" ? (
            <span className="mt-3 flex items-center gap-2.5">
              <JobDeviceGlyph glyph={layer.device.glyph} size={34} color={layer.treatment === "Space Force blue" ? "#3E6DA3" : undefined} />
              <span className="text-sm font-semibold text-[var(--text)]">{layer.device.name} — stylized rendition</span>
            </span>
          ) : null}
          {layer?.kind === "army" ? (
            <span className="mt-3 flex items-center gap-2.5">
              <JobDeviceGlyph glyph={layer.army.glyph} size={34} />
              <span className="text-sm font-semibold text-[var(--text)]">{layer.army.branch} branch insignia — stylized rendition</span>
            </span>
          ) : null}
          {layer?.kind === "usmc" ? (
            <span className="mt-3 block text-sm font-semibold text-[var(--text)]">
              Job device: the Eagle, Globe, and Anchor — it IS the Marine Corps' branch-of-service insignia for every MOS (MCO 1020.34 ¶4001). {profile.mosCode} is carried as text; no per-MOS device exists.
            </span>
          ) : null}
        </span>
      </div>
      {layer?.kind === "army" ? (
        <div className="border-t border-[var(--border)] px-5 py-3">
          <ArmyColorChip army={layer.army} />
        </div>
      ) : null}
    </section>
  );
}

export type { BranchKey };
