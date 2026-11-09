// Stylized category diagrams for the Close Combat section.
//
// These are generic figure illustrations of a technique CATEGORY's shape
// (stance, strike, throw, ground position…) drawn in the app's line style.
// They are category illustrations only — they do not depict how to execute
// any technique, and no manual figures are reproduced.

type Shape =
  | "stance"
  | "strike"
  | "fall"
  | "bayonet"
  | "choke"
  | "throw"
  | "counter"
  | "manipulation"
  | "retention"
  | "knife"
  | "weapon"
  | "ground"
  | "submission";

function shapeFor(category: string): Shape {
  const c = category.toLowerCase();
  if (c.includes("ground")) return c.includes("choke") ? "choke" : "ground";
  if (c.includes("submission")) return "submission";
  if (c.includes("choke")) return "choke";
  if (c.includes("throw")) return "throw";
  if (c.includes("fall")) return "fall";
  if (c.includes("bayonet")) return "bayonet";
  if (c.includes("knife")) return "knife";
  if (c.includes("retention")) return "retention";
  if (c.includes("manipulation")) return "manipulation";
  if (c.includes("counter") || c.includes("disarmament")) return "counter";
  if (c.includes("opportunity") || c.includes("improvised")) return "weapon";
  if (c.includes("strike")) return "strike";
  return "stance";
}

const S = {
  fill: "none",
  stroke: "var(--accent)",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Figure({ shape }: { shape: Shape }) {
  switch (shape) {
    case "stance":
      return (
        <>
          <circle cx="32" cy="13" r="4.5" {...S} />
          <path d="M32 18 V33" {...S} />
          <path d="M32 22 L24 27 M32 22 L40 27" {...S} />
          <path d="M32 33 L25 52 M32 33 L39 52" {...S} />
        </>
      );
    case "strike":
      return (
        <>
          <circle cx="24" cy="13" r="4.5" {...S} />
          <path d="M24 18 V33" {...S} />
          <path d="M24 21 L45 19" {...S} />
          <path d="M24 24 L18 29" {...S} />
          <path d="M24 33 L17 52 M24 33 L33 52" {...S} />
          <path d="M47 15 v8 M43 19 h8" {...S} strokeWidth={1.8} />
        </>
      );
    case "fall":
      return (
        <>
          <circle cx="13" cy="42" r="4.5" {...S} />
          <path d="M17 41 L34 32" {...S} />
          <path d="M21 39 L13 50" {...S} />
          <path d="M34 32 L49 39 M34 32 L47 26" {...S} />
        </>
      );
    case "bayonet":
      return (
        <>
          <circle cx="18" cy="15" r="4.5" {...S} />
          <path d="M18 20 V35" {...S} />
          <path d="M18 35 L12 52 M18 35 L27 52" {...S} />
          <path d="M12 31 L50 17" {...S} />
          <path d="M50 17 L58 14" {...S} strokeWidth={1.8} />
          <path d="M18 24 L28 22 M18 28 L24 27" {...S} />
        </>
      );
    case "choke":
      return (
        <>
          <circle cx="40" cy="15" r="4.5" {...S} />
          <path d="M40 20 V37" {...S} />
          <path d="M40 37 L34 53 M40 37 L46 53" {...S} />
          <circle cx="23" cy="13" r="4.5" {...S} />
          <path d="M23 18 V35" {...S} />
          <path d="M23 35 L17 52 M23 35 L29 52" {...S} />
          <path d="M23 21 Q31 16 37 19" {...S} />
        </>
      );
    case "throw":
      return (
        <>
          <circle cx="22" cy="14" r="4.5" {...S} />
          <path d="M22 19 V34" {...S} />
          <path d="M22 34 L16 52 M22 34 L29 52" {...S} />
          <path d="M22 24 Q38 12 50 26" {...S} />
          <circle cx="53" cy="30" r="4.5" {...S} />
          <path d="M50 26 L56 42" {...S} />
        </>
      );
    case "counter":
      return (
        <>
          <circle cx="18" cy="14" r="4.5" {...S} />
          <path d="M18 19 V35" {...S} />
          <path d="M18 35 L12 52 M18 35 L25 52" {...S} />
          <path d="M18 22 L27 17" {...S} />
          <circle cx="46" cy="14" r="4.5" {...S} />
          <path d="M46 19 V35" {...S} />
          <path d="M46 35 L40 52 M46 35 L52 52" {...S} />
          <path d="M46 22 L28 21" {...S} />
        </>
      );
    case "manipulation":
      return (
        <>
          <circle cx="20" cy="12" r="4.5" {...S} />
          <path d="M20 17 V33" {...S} />
          <path d="M20 33 L14 52 M20 33 L27 52" {...S} />
          <path d="M20 21 L36 27" {...S} />
          <circle cx="43" cy="27" r="4.5" {...S} />
          <path d="M43 32 L45 45 L53 45" {...S} />
          <path d="M43 32 L38 44" {...S} />
        </>
      );
    case "retention":
      return (
        <>
          <circle cx="16" cy="15" r="4.5" {...S} />
          <path d="M16 20 V35" {...S} />
          <path d="M16 35 L10 52 M16 35 L23 52" {...S} />
          <path d="M10 29 L46 24" {...S} />
          <circle cx="52" cy="15" r="4.5" {...S} />
          <path d="M52 20 V34" {...S} />
          <path d="M52 22 L40 25" {...S} />
        </>
      );
    case "knife":
      return (
        <>
          <circle cx="22" cy="13" r="4.5" {...S} />
          <path d="M22 18 V33" {...S} />
          <path d="M22 33 L15 52 M22 33 L31 52" {...S} />
          <path d="M22 21 L40 18" {...S} />
          <path d="M40 18 L52 15 L41 22 Z" {...S} strokeWidth={1.8} />
          <path d="M22 25 L16 30" {...S} />
        </>
      );
    case "weapon":
      return (
        <>
          <circle cx="28" cy="16" r="4.5" {...S} />
          <path d="M28 21 V36" {...S} />
          <path d="M28 36 L21 53 M28 36 L35 53" {...S} />
          <path d="M28 24 L40 10" {...S} />
          <path d="M40 10 L50 6" {...S} strokeWidth={3.5} />
          <path d="M28 27 L20 33" {...S} />
        </>
      );
    case "ground":
      return (
        <>
          <circle cx="11" cy="45" r="4.5" {...S} />
          <path d="M15 46 L37 46" {...S} />
          <path d="M37 46 L52 42 M37 46 L50 51" {...S} />
          <circle cx="33" cy="27" r="4.5" {...S} />
          <path d="M33 32 L35 44" {...S} />
          <path d="M35 44 L27 52 M35 44 L44 50" {...S} />
        </>
      );
    case "submission":
      return (
        <>
          <circle cx="11" cy="45" r="4.5" {...S} />
          <path d="M15 46 L34 46" {...S} />
          <path d="M34 46 L54 34" {...S} />
          <circle cx="40" cy="30" r="4.5" {...S} />
          <path d="M41 35 L44 45" {...S} />
          <path d="M44 45 L36 52 M44 45 L52 50" {...S} />
        </>
      );
  }
}

export function TechniqueDiagram({ category }: { category: string }) {
  const shape = shapeFor(category);
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={`Stylized category illustration: ${category}`}
      className="h-16 w-16 shrink-0 rounded-[var(--radius)] bg-[var(--surface2)]"
    >
      <path d="M4 56 H60" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
      <Figure shape={shape} />
    </svg>
  );
}
