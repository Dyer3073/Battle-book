// Hub-of-tiles navigation — the house pattern for dense, list-heavy
// sections (added in the Nov 9, 2026 layout reorganization). A section
// opens on a grid of square tiles, one per sub-area from the section's
// own existing group structure; opening a tile shows that sub-area's
// content as its own sub-view with a back button and, where the
// sub-area is a list, its own search bar pinned at the top. Content
// itself never changes — this file is navigation chrome only.

export type HubTileDef = {
  key: string;
  label: string;
  /** Small line under the label — a count or a one-line scope note. */
  sub?: string;
  /** Locked tiles still open (to the section's existing locked card)
   * but carry a LOCKED badge on the hub, e.g. Zeroing for future
   * members. */
  locked?: boolean;
};

export function HubTileGrid({
  tiles,
  onOpen,
  label,
}: {
  tiles: readonly HubTileDef[];
  onOpen: (key: string) => void;
  /** Accessible name for the tile group, e.g. "Weapons & Qualification areas". */
  label: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="group" aria-label={label}>
      {tiles.map((t) => (
        <button
          key={t.key}
          type="button"
          aria-label={t.locked ? `Open ${t.label} (locked)` : `Open ${t.label}`}
          onClick={() => onOpen(t.key)}
          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-center"
        >
          <span className="font-display text-lg leading-tight font-bold text-[var(--text)]">{t.label}</span>
          {t.sub ? <span className="text-sm text-[var(--dim)]">{t.sub}</span> : null}
          {t.locked ? (
            <span className="inline-block rounded bg-[var(--surface2)] px-2 py-0.5 text-xs font-bold tracking-wide text-[var(--dim)]">
              LOCKED
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

export function HubBackButton({
  ariaLabel,
  text,
  onBack,
}: {
  ariaLabel: string;
  text: string;
  onBack: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onBack}
      className="mb-3 min-h-11 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-word)]"
    >
      ← {text}
    </button>
  );
}

/** A tile sub-view's own search bar, pinned at the top of the sub-view. */
export function HubSearch({
  id,
  label,
  ariaLabel,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  ariaLabel: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-[var(--text)]">
        {label}
      </label>
      <input
        id={id}
        aria-label={ariaLabel}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]"
      />
    </div>
  );
}
